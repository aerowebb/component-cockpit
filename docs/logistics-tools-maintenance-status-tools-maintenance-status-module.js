(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['logistics-tools-maintenance-status-tools-maintenance-status-module'],
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

    /***/ './node_modules/primeng/components/inputtextarea/inputtextarea.js':
      /*!************************************************************************!*\
  !*** ./node_modules/primeng/components/inputtextarea/inputtextarea.js ***!
  \************************************************************************/
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
        var __param =
          (this && this.__param) ||
          function(paramIndex, decorator) {
            return function(target, key) {
              decorator(target, key, paramIndex);
            };
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        var core_1 = __webpack_require__(/*! @angular/core */ './node_modules/@angular/core/fesm5/core.js');
        var forms_1 = __webpack_require__(/*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js');
        var common_1 = __webpack_require__(/*! @angular/common */ './node_modules/@angular/common/fesm5/common.js');
        var InputTextarea = /** @class */ (function() {
          function InputTextarea(el, ngModel) {
            this.el = el;
            this.ngModel = ngModel;
            this.onResize = new core_1.EventEmitter();
          }
          InputTextarea.prototype.ngDoCheck = function() {
            this.updateFilledState();
            if (this.autoResize) {
              this.resize();
            }
          };
          //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
          InputTextarea.prototype.onInput = function(e) {
            this.updateFilledState();
            if (this.autoResize) {
              this.resize(e);
            }
          };
          InputTextarea.prototype.updateFilledState = function() {
            this.filled =
              (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
              (this.ngModel && this.ngModel.model);
          };
          InputTextarea.prototype.onFocus = function(e) {
            if (this.autoResize) {
              this.resize(e);
            }
          };
          InputTextarea.prototype.onBlur = function(e) {
            if (this.autoResize) {
              this.resize(e);
            }
          };
          InputTextarea.prototype.resize = function(event) {
            this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
            if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
              this.el.nativeElement.style.overflowY = 'scroll';
              this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
            } else {
              this.el.nativeElement.style.overflow = 'hidden';
            }
            this.onResize.emit(event || {});
          };
          __decorate(
            [core_1.Input(), __metadata('design:type', Boolean)],
            InputTextarea.prototype,
            'autoResize',
            void 0
          );
          __decorate(
            [core_1.Output(), __metadata('design:type', core_1.EventEmitter)],
            InputTextarea.prototype,
            'onResize',
            void 0
          );
          __decorate(
            [
              core_1.HostListener('input', ['$event']),
              __metadata('design:type', Function),
              __metadata('design:paramtypes', [Object]),
              __metadata('design:returntype', void 0)
            ],
            InputTextarea.prototype,
            'onInput',
            null
          );
          __decorate(
            [
              core_1.HostListener('focus', ['$event']),
              __metadata('design:type', Function),
              __metadata('design:paramtypes', [Object]),
              __metadata('design:returntype', void 0)
            ],
            InputTextarea.prototype,
            'onFocus',
            null
          );
          __decorate(
            [
              core_1.HostListener('blur', ['$event']),
              __metadata('design:type', Function),
              __metadata('design:paramtypes', [Object]),
              __metadata('design:returntype', void 0)
            ],
            InputTextarea.prototype,
            'onBlur',
            null
          );
          InputTextarea = __decorate(
            [
              core_1.Directive({
                selector: '[pInputTextarea]',
                host: {
                  '[class.ui-inputtext]': 'true',
                  '[class.ui-corner-all]': 'true',
                  '[class.ui-inputtextarea-resizable]': 'autoResize',
                  '[class.ui-state-default]': 'true',
                  '[class.ui-widget]': 'true',
                  '[class.ui-state-filled]': 'filled'
                }
              }),
              __param(1, core_1.Optional()),
              __metadata('design:paramtypes', [core_1.ElementRef, forms_1.NgModel])
            ],
            InputTextarea
          );
          return InputTextarea;
        })();
        exports.InputTextarea = InputTextarea;
        var InputTextareaModule = /** @class */ (function() {
          function InputTextareaModule() {}
          InputTextareaModule = __decorate(
            [
              core_1.NgModule({
                imports: [common_1.CommonModule],
                exports: [InputTextarea],
                declarations: [InputTextarea]
              })
            ],
            InputTextareaModule
          );
          return InputTextareaModule;
        })();
        exports.InputTextareaModule = InputTextareaModule;
        //# sourceMappingURL=inputtextarea.js.map

        /***/
      },

    /***/ './node_modules/primeng/inputtextarea.js':
      /*!***********************************************!*\
  !*** ./node_modules/primeng/inputtextarea.js ***!
  \***********************************************/
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
            /*! ./components/inputtextarea/inputtextarea */ './node_modules/primeng/components/inputtextarea/inputtextarea.js'
          )
        );

        /***/
      },

    /***/ './node_modules/primeng/splitbutton.js':
      /*!*********************************************!*\
  !*** ./node_modules/primeng/splitbutton.js ***!
  \*********************************************/
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
            /*! ./components/splitbutton/splitbutton */ './node_modules/primeng/components/splitbutton/splitbutton.js'
          )
        );

        /***/
      },

    /***/ './src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.component.html':
      /*!***********************************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.component.html ***!
  \***********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ displayToolInfo(familyVariantList) }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button *ngIf="simulationCriteria !== undefined" type="button" mat-raised-button (click)="resetSimulation()">\r\n      {{ getComponentName() + ".resetSimulation" | translate }}\r\n    </button>\r\n\r\n    <button type="button" mat-raised-button (click)="simulate()">\r\n      {{ getComponentName() + ".simulate" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item [matMenuTriggerFor]="potentialUnitSelection">\r\n        {{ getComponentName() + ".potentialUnit" | translate }}({{ potentialUnitSelected }})\r\n      </button>\r\n\r\n      <button mat-menu-item (click)="reload()">{{ "global.refresh" | translate }}</button>\r\n      <button mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n    <mat-menu #potentialUnitSelection="matMenu">\r\n      <div *ngFor="let potentialUnit of potentialUnitList">\r\n        <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="potentialUnit.command()">\r\n          {{ potentialUnit.label | translate }}\r\n        </button>\r\n      </div>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div id="tools-control-form" class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <!-- SIMULATION PANEL-->\r\n        <div *ngIf="simulationCriteria !== undefined" class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container grid-cell-state-simulation">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".ageingSimulation" | translate }}:\r\n                  <span\r\n                    *ngIf="simulationCriteria.inHours && simulationCriteria.inHours <= 1"\r\n                    class="simulation-criterion"\r\n                  >\r\n                    {{\r\n                      getComponentName() + ".simulateInHour"\r\n                        | translate: { value: simulationCriteria.inHours.toString() }\r\n                    }}\r\n                  </span>\r\n                  <span\r\n                    *ngIf="simulationCriteria.inHours && simulationCriteria.inHours > 1"\r\n                    class="simulation-criterion"\r\n                  >\r\n                    {{\r\n                      getComponentName() + ".simulateInHours"\r\n                        | translate: { value: simulationCriteria.inHours.toString() }\r\n                    }}\r\n                  </span>\r\n                  <span\r\n                    *ngIf="simulationCriteria.inCycles && simulationCriteria.inCycles <= 1"\r\n                    class="simulation-criterion"\r\n                  >\r\n                    {{\r\n                      getComponentName() + ".simulateInCycle"\r\n                        | translate: { value: simulationCriteria.inCycles.toString() }\r\n                    }}\r\n                  </span>\r\n                  <span\r\n                    *ngIf="simulationCriteria.inCycles && simulationCriteria.inCycles > 1"\r\n                    class="simulation-criterion"\r\n                  >\r\n                    {{\r\n                      getComponentName() + ".simulateInCycles"\r\n                        | translate: { value: simulationCriteria.inCycles.toString() }\r\n                    }}\r\n                  </span>\r\n                  <span *ngIf="simulationCriteria.atDate" class="simulation-criterion">\r\n                    {{\r\n                      getComponentName() + ".simulateAtDate"\r\n                        | translate: { value: dateService.dateToString(simulationCriteria.atDate) }\r\n                    }}\r\n                  </span>\r\n                </h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- TOOLS SECTION -->\r\n        <div class="grid-cell--6">\r\n          <div\r\n            class="grid-cell grid-cell--container grid-cell-scope"\r\n            [ngClass]="{\r\n              \'in-simulation\': simulationCriteria !== undefined\r\n            }"\r\n          >\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container  loading-indicator">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".tools" | translate }}\r\n                  <div *ngIf="panelLoading" class="lds-hourglass"></div>\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ getComponentName() + ".pnCode" | translate }} </label>\r\n\r\n                    <div class="form-control paddingClass">\r\n                      {{ displayToolInfo(pnCodeList) }}\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ "global.sn" | translate }} </label>\r\n\r\n                    <div class="form-control paddingClass">\r\n                      {{ displayToolInfo(snCodeList) }}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ "global.familyVariant" | translate }} </label>\r\n\r\n                    <div class="form-control paddingClass">\r\n                      {{ displayToolInfo(familyVariantList) }}\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ getComponentName() + ".designation" | translate }} </label>\r\n\r\n                    <div class="form-control paddingClass">\r\n                      {{ displayToolInfo(designationList) }}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="row" *ngIf="!!toolsTreeTable && toolsTreeTable.length > 0">\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ getComponentName() + ".function" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="groundEquipmentTypes"\r\n                        [(ngModel)]="toolsTreeTable[0].bidoEquipment.equipmentFunction"\r\n                        [showClear]="true"\r\n                        disabled\r\n                        placeholder="&nbsp;"\r\n                      >\r\n                      </p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- AVAILABILITY SECTION -->\r\n        <div class="grid-cell--6  grid-cell--no-padding">\r\n          <div class="grid-cell--12 grid-cell--no-padding">\r\n            <div class="grid-cell--12">\r\n              <div\r\n                class="grid-cell grid-cell--container grid-cell-summary"\r\n                [ngClass]="{\r\n                  \'in-simulation\': simulationCriteria !== undefined\r\n                }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container loading-indicator">\r\n                    <div class="grid-cell-title">\r\n                      {{ getComponentName() + ".availabilitySummary" | translate }}\r\n                      <div *ngIf="panelLoading" class="lds-hourglass"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <br /><br />\r\n                <div class="grid-cell-content">\r\n                  <div class="row flex-row--justify-center">\r\n                    <div class="chart-container">\r\n                      <div class="chart-wrapper">\r\n                        <p-chart\r\n                          [type]="chartType"\r\n                          [data]="chartData"\r\n                          [options]="chartOptions"\r\n                          width="100%"\r\n                          height="100%"\r\n                        ></p-chart>\r\n                      </div>\r\n\r\n                      <div class="chart-legend">\r\n                        <div class="chart-legend-label">\r\n                          <div class="chart-legend-label-color airworthy"></div>\r\n                          {{ chartData.labels[0] }} <span class="chart-value">{{ servicableEquipmentNb }} </span>\r\n                        </div>\r\n\r\n                        <div class="chart-legend-label">\r\n                          <div class="chart-legend-label-color airworthy-with-alerts"></div>\r\n                          {{ chartData.labels[1] }}\r\n                          <span class="chart-value">{{ servicableWithAlertEquipmentNb }} </span>\r\n                        </div>\r\n\r\n                        <div class="chart-legend-label">\r\n                          <div class="chart-legend-label-color not-airworthy"></div>\r\n                          {{ chartData.labels[2] }} <span class="chart-value">{{ notservicableEquipmentNb }}</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <br /><br />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Maintenance Status SECTION -->\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div\r\n            class="grid-cell grid-cell--container grid-cell-detail"\r\n            [ngClass]="{\r\n              \'in-simulation\': simulationCriteria !== undefined\r\n            }"\r\n          >\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container  loading-indicator">\r\n                <h3 class="grid-cell-title">\r\n                  <h3 *ngIf="!toolsTableOnlyAlertsVisible" class="grid-cell-title">\r\n                    {{ getComponentName() + ".maintenanceStatus" | translate }}\r\n                    ({{ toolsTable ? toolsTable.length : 0 }})\r\n                  </h3>\r\n                  <h3 *ngIf="toolsTableOnlyAlertsVisible" class="grid-cell-title">\r\n                    {{ getComponentName() + ".maintenanceStatus" | translate }}\r\n                    ({{ toolsTableDisplayedRowNb }} / {{ toolsTable ? toolsTable.length : 0 }})\r\n                  </h3>\r\n                  <div *ngIf="panelLoading" class="lds-hourglass"></div>\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <p-table\r\n                  [resizableColumns]="true"\r\n                  #ptableTools\r\n                  class="aw-table2"\r\n                  [columns]="toolsTableCols"\r\n                  [value]="toolsTable"\r\n                  [(selection)]="toolsTableSelection"\r\n                  dataKey="_id"\r\n                  [scrollable]="true"\r\n                >\r\n                  <ng-template pTemplate="emptymessage">\r\n                    <span *ngIf="!toolsTableLoading"> &nbsp;</span>\r\n\r\n                    <div *ngIf="toolsTableLoading" class="aw-table-loading-indicator">\r\n                      <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                      <div class="lds-hourglass"></div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="caption">\r\n                    <div class="aw-table-header" [ngClass]="{ \'rows-selected\': toolsTableSelection.length > 0 }">\r\n                      <div class="aw-table-global-filter">\r\n                        <label class="aw-table-global-filter-label">\r\n                          <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                        </label>\r\n\r\n                        <input\r\n                          #ptableAirworthinessGlobalFilter\r\n                          class="aw-table-global-filter-input"\r\n                          type="text"\r\n                          placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                          (input)="ptableTools.filterGlobal($event.target.value, \'contains\')"\r\n                        />\r\n                      </div>\r\n\r\n                      <div class="aw-table-actions">\r\n                        <p-selectButton\r\n                          *ngIf="!toolsTableLoading"\r\n                          class="aw-table-action custom-margin"\r\n                          [(ngModel)]="toolsTableVisibilitySelected"\r\n                          [options]="toolsTableVisibilityList"\r\n                          (onChange)="onChangeToolsTableVisibility()"\r\n                        ></p-selectButton>\r\n\r\n                        <button\r\n                          *ngIf="!toolsTableLoading && toolsTableSelection.length === 0"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="exportToolsTable()"\r\n                        >\r\n                          <div *ngIf="exportingFlag" class="lds-hourglass"></div>\r\n                          {{ "global.export" | translate }}\r\n                        </button>\r\n                      </div>\r\n\r\n                      <div *ngIf="!toolsTableLoading" class="aw-table-icon-actions">\r\n                        <i\r\n                          *ngIf="isFleetViewMode"\r\n                          class="fa fa-fw fa-calendar aw-icon aw-icon-with-border"\r\n                          aria-hidden="true"\r\n                          pTooltip="{{ componentName + \'.showCalendar\' | translate }}"\r\n                          tooltipPosition="top"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="colgroup" let-columns>\r\n                    <colgroup>\r\n                      <!-- <col class="aw-table-checkbox-wrapper" /> -->\r\n                      <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                      <col class="row-expand-wrapper" />\r\n                      <col class="row-action-wrapper" />\r\n                    </colgroup>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="header" let-columns>\r\n                    <tr>\r\n                      <!-- <th class="aw-table-checkbox-wrapper">\r\n                        <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                      </th> -->\r\n\r\n                      <th\r\n                        pResizableColumn\r\n                        *ngFor="let col of columns"\r\n                        [ngSwitch]="col.field"\r\n                        [ngStyle]="{ \'text-align\': col.alignment }"\r\n                      >\r\n                        <span *ngSwitchDefault> {{ getComponentName() + "." + col.field | translate }} </span>\r\n                      </th>\r\n\r\n                      <th class="row-expand-wrapper"></th>\r\n                      <th class="row-action-wrapper"></th>\r\n                    </tr>\r\n                  </ng-template>\r\n\r\n                  <ng-template\r\n                    pTemplate="body"\r\n                    let-rowData\r\n                    let-expanded="expanded"\r\n                    let-columns="columns"\r\n                    let-rowIndex="rowIndex"\r\n                  >\r\n                    <tr\r\n                      *ngIf="\r\n                        toolsTableOnlyAlertsVisible\r\n                          ? rowData[\'alert\'] !== undefined &&\r\n                            rowData[\'alert\'] !== null &&\r\n                            (rowData[\'alert\'] === controlConfigConstants.ICON_RED ||\r\n                              rowData[\'alert\'] === controlConfigConstants.ICON_YELLOW)\r\n                          : true\r\n                      "\r\n                      [pSelectableRow]="rowData"\r\n                      [pSelectableRowIndex]="rowIndex"\r\n                    >\r\n                      <!-- <td class="aw-table-checkbox-wrapper">\r\n                        <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                      </td> -->\r\n\r\n                      <td\r\n                        *ngFor="let col of columns"\r\n                        [ngSwitch]="col.field"\r\n                        [ngStyle]="{ \'text-align\': col.alignment }"\r\n                      >\r\n                        <span *ngSwitchCase="\'alert\'" pTooltip="{{ rowData[\'_alertTooltip\'] }}" tooltipPosition="top">\r\n                          <div\r\n                            *ngIf="rowData[\'_alertLoading\']"\r\n                            class="lds-hourglass display--flex-row"\r\n                            [ngClass]="{\r\n                              \'flex-row--justify-center\': col.alignment === \'center\',\r\n                              \'flex-row--justify-left\': col.alignment === \'left\',\r\n                              \'flex-row--justify-right\': col.alignment === \'right\'\r\n                            }"\r\n                          ></div>\r\n\r\n                          <span\r\n                            *ngIf="\r\n                              !rowData[\'_alertLoading\'] &&\r\n                              rowData[col.field] !== undefined &&\r\n                              rowData[col.field] !== null &&\r\n                              rowData[col.field] === controlConfigConstants.ICON_GREEN\r\n                            "\r\n                            class="alert alert--ok"\r\n                          >\r\n                            {{ getComponentName() + ".alertOk" | translate }}\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf="\r\n                              !rowData[\'_alertLoading\'] &&\r\n                              rowData[col.field] !== undefined &&\r\n                              rowData[col.field] !== null &&\r\n                              rowData[col.field] === controlConfigConstants.ICON_RED\r\n                            "\r\n                            class="alert alert--nok"\r\n                          >\r\n                            {{ getComponentName() + ".alertNok" | translate }}\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf="\r\n                              !rowData[\'_alertLoading\'] &&\r\n                              rowData[col.field] !== undefined &&\r\n                              rowData[col.field] !== null &&\r\n                              rowData[col.field] === controlConfigConstants.ICON_YELLOW\r\n                            "\r\n                            class="alert alert--warning"\r\n                          >\r\n                            {{ getComponentName() + ".alertWarning" | translate }}\r\n                          </span>\r\n                        </span>\r\n\r\n                        <span\r\n                          *ngSwitchCase="\'potential\'"\r\n                          pTooltip="{{ rowData[\'_obj\'].remainingEquivalentTooltip }}"\r\n                          tooltipPosition="top"\r\n                        >\r\n                          <div\r\n                            *ngIf="rowData[\'_potentialLoading\']"\r\n                            class="lds-hourglass display--flex-row"\r\n                            [ngClass]="{\r\n                              \'flex-row--justify-center\': col.alignment === \'center\',\r\n                              \'flex-row--justify-left\': col.alignment === \'left\',\r\n                              \'flex-row--justify-right\': col.alignment === \'right\'\r\n                            }"\r\n                          ></div>\r\n\r\n                          <i\r\n                            *ngIf="\r\n                              !rowData[\'_potentialLoading\'] &&\r\n                              rowData[\'_obj\'].remainingEquivalentIcon !== undefined &&\r\n                              rowData[\'_obj\'].remainingEquivalentIcon !== null &&\r\n                              rowData[\'_obj\'].remainingEquivalentIcon.length > 0 &&\r\n                              (rowData[\'_obj\'].remainingEquivalentIcon === controlConfigConstants.ICON_RED ||\r\n                                rowData[\'_obj\'].remainingEquivalentIcon === controlConfigConstants.ICON_YELLOW)\r\n                            "\r\n                            class="fa fa-fw fa-exclamation-triangle"\r\n                            aria-hidden="true"\r\n                          ></i>\r\n                          <span *ngIf="!rowData[\'_potentialLoading\']">{{ rowData[col.field] }}</span>\r\n                        </span>\r\n\r\n                        <span\r\n                          *ngSwitchCase="\'asset\'"\r\n                          pTooltip="{{ rowData[\'_obj\'].counterAlertTooltip }}"\r\n                          tooltipPosition="top"\r\n                        >\r\n                          <i\r\n                            *ngIf="\r\n                              rowData[\'_obj\'].counterAlertStatus !== undefined &&\r\n                              rowData[\'_obj\'].counterAlertStatus !== null &&\r\n                              rowData[\'_obj\'].counterAlertStatus.length > 0 &&\r\n                              (rowData[\'_obj\'].counterAlertStatus === controlConfigConstants.ICON_RED ||\r\n                                rowData[\'_obj\'].counterAlertStatus === controlConfigConstants.ICON_YELLOW)\r\n                            "\r\n                            class="fa fa-fw fa-exclamation-triangle"\r\n                            aria-hidden="true"\r\n                          ></i>\r\n                          <a (click)="openSubAsset(rowData)">{{ rowData[col.field] }}</a>\r\n                        </span>\r\n                        <span *ngSwitchCase="\'mp\'">\r\n                          <a (click)="openMaintenanceProgram(rowData[col.field])">{{ rowData[col.field] }}</a>\r\n                        </span>\r\n                        <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                      </td>\r\n\r\n                      <td class="row-expand-wrapper" [pRowToggler]="rowData">\r\n                        <i\r\n                          class="fa fa-fw aw-icon aw-icon-with-border"\r\n                          [ngClass]="rowData[\'_expand\'] ? \'fa-minus\' : \'fa-plus\'"\r\n                          aria-hidden="true"\r\n                          pTooltip="{{ \'global.showTableRowDetails\' | translate }}"\r\n                          tooltipPosition="top"\r\n                          (click)="toggleToolsTableRowDetailsVisibility(rowData)"\r\n                        ></i>\r\n                      </td>\r\n\r\n                      <td class="row-action-wrapper">\r\n                        <i\r\n                          *ngIf="rowData[\'hasChildren\']"\r\n                          class="fa fa-fw fa-chevron-right aw-icon aw-icon-with-border"\r\n                          aria-hidden="true"\r\n                          pTooltip="{{ componentName + \'.goDown\' | translate }}"\r\n                          tooltipPosition="top"\r\n                        ></i>\r\n                      </td>\r\n                    </tr>\r\n                    <tr *ngIf="!!rowData._expand" class="row-expanded">\r\n                      <td [attr.colspan]="columns.length + 2">\r\n                        <div class="row">\r\n                          <div class="form-group">\r\n                            <label class="form-label">\r\n                              {{ getComponentName() + ".remainingDays" | translate }}\r\n                            </label>\r\n\r\n                            <div class="form-control">\r\n                              <input\r\n                                *ngIf="!!rowData.remainingDays"\r\n                                class="aw-input"\r\n                                type="text"\r\n                                [(ngModel)]="rowData.remainingDays"\r\n                                [disabled]="true"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class="form-group">\r\n                            <label class="form-label">\r\n                              {{ getComponentName() + ".tasks" | translate }}\r\n                            </label>\r\n\r\n                            <div class="form-control">\r\n                              <span\r\n                                *ngIf="!!rowData.tasks"\r\n                                class="form-control-generic"\r\n                                title="{{ rowData._airworthinessAlertTooltip }}"\r\n                              >\r\n                                <span\r\n                                  *ngIf="\r\n                                    !rowData[\'_alertLoading\'] &&\r\n                                    rowData.tasks !== undefined &&\r\n                                    rowData.tasks !== null &&\r\n                                    rowData.tasks === controlConfigConstants.ICON_GREEN\r\n                                  "\r\n                                  class="alert alert--ok"\r\n                                  style="text-align: center"\r\n                                >\r\n                                  {{ getComponentName() + ".alertOk" | translate }}\r\n                                </span>\r\n\r\n                                <span\r\n                                  *ngIf="\r\n                                    !rowData[\'_alertLoading\'] &&\r\n                                    rowData.tasks !== undefined &&\r\n                                    rowData.tasks !== null &&\r\n                                    rowData.tasks === controlConfigConstants.ICON_RED\r\n                                  "\r\n                                  class="alert alert--nok"\r\n                                >\r\n                                  {{ getComponentName() + ".alertNok" | translate }}\r\n                                </span>\r\n\r\n                                <span\r\n                                  *ngIf="\r\n                                    !rowData[\'_alertLoading\'] &&\r\n                                    rowData.tasks !== undefined &&\r\n                                    rowData.tasks !== null &&\r\n                                    rowData.tasks === controlConfigConstants.ICON_YELLOW\r\n                                  "\r\n                                  class="alert alert--warning"\r\n                                >\r\n                                  {{ getComponentName() + ".alertWarning" | translate }}\r\n                                </span>\r\n                              </span>\r\n                            </div>\r\n                          </div>\r\n                          <div class="form-group"></div>\r\n                          <div class="form-group"></div>\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </p-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-control-simulation\r\n  *ngIf="simulationDialogVisible"\r\n  [(display)]="simulationDialogVisible"\r\n  (onValidated)="onSimulate($event)"\r\n></aw-dialog-control-simulation>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.component.scss':
      /*!***********************************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.component.scss ***!
  \***********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host #tools-control-form .in-simulation {\n  border-left-color: #ffc107 !important;\n  border-left-style: solid;\n  border-left-width: 8px !important; }\n\n:host #tools-control-form .grid-cell-detail .form-control-potential-unit {\n  width: 4rem; }\n\n:host #tools-control-form .grid-cell-state-simulation {\n  background-color: #ffc107;\n  padding: 0; }\n\n:host #tools-control-form .grid-cell-state-simulation .grid-cell-title {\n    color: #000; }\n\n:host #tools-control-form .grid-cell-state-simulation .simulation-criterion:not(:last-of-type)::after {\n    content: " | "; }\n\n:host #tools-control-form .grid-cell-remaining-values {\n  min-height: 14rem; }\n\n:host #tools-control-form .grid-cell-summary {\n  min-height: 12rem; }\n\n:host #tools-control-form .grid-cell-summary .chart-container {\n    display: flex;\n    flex-direction: row; }\n\n@media screen and (max-width: 1280px) {\n      :host #tools-control-form .grid-cell-summary .chart-container {\n        flex-direction: column; } }\n\n:host #tools-control-form .grid-cell-summary .chart-container .chart-legend {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      margin-left: 8px; }\n\n:host #tools-control-form .grid-cell-summary .chart-container .chart-legend .chart-legend-label {\n        display: flex;\n        flex-direction: row;\n        align-items: center; }\n\n:host #tools-control-form .grid-cell-summary .chart-container .chart-legend .chart-legend-label .chart-legend-label-color {\n          height: 0.75rem;\n          margin-right: 8px;\n          width: 2rem; }\n\n:host #tools-control-form .grid-cell-summary .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.airworthy {\n            background-color: #4caf50; }\n\n:host #tools-control-form .grid-cell-summary .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.airworthy-with-alerts {\n            background-color: #ffc107; }\n\n:host #tools-control-form .grid-cell-summary .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.not-airworthy {\n            background-color: #f6685e; }\n\n:host #tools-control-form .grid-cell-summary .chart-container .chart-legend .chart-value {\n        font-weight: 700;\n        margin-left: 8px; }\n\n:host #tools-control-form .grid-cell-summary .chart-container .chart-wrapper {\n      position: relative;\n      height: 12rem;\n      width: 14rem; }\n\n:host #tools-control-form .custom-margin {\n  margin-right: 5px; }\n\n:host #tools-control-form .paddingClass {\n  padding-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvdG9vbHMtbWFpbnRlbmFuY2Utc3RhdHVzL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9tb2RpZmllcnMuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvdG9vbHMtbWFpbnRlbmFuY2Utc3RhdHVzL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcdG9vbHMtbWFpbnRlbmFuY2Utc3RhdHVzXFxmb3JtXFx0b29scy1tYWludGVuYW5jZS1zdGF0dXMtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvdG9vbHMtbWFpbnRlbmFuY2Utc3RhdHVzL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvdG9vbHMtbWFpbnRlbmFuY2Utc3RhdHVzL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSx3QkFBd0I7RUFDeEIsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UseUNBQWlDO0VBQWpDLHNDQUFpQztFQUFqQyxpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxvQ0FBNEI7S0FBNUIsaUNBQTRCO01BQTVCLGdDQUE0QjtVQUE1Qiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXLEVBQUE7O0FBS2I7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSxvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxzQ0FBc0MsRUFBQTs7QUN6SHhDO0VBRUkscUNBQXFDO0VBQ3JDLHdCQUF3QjtFQUN4QixpQ0FBaUMsRUFBQTs7QUFKckM7RUFTTSxXQUFXLEVBQUE7O0FBVGpCO0VBY0kseUJDSVk7RURIWixVQUFVLEVBQUE7O0FBZmQ7SUFrQk0sV0NwQm1CLEVBQUE7O0FERXpCO0lBc0JNLGNBQWMsRUFBQTs7QUF0QnBCO0VBMkJJLGlCQUFpQixFQUFBOztBQTNCckI7RUErQkksaUJBQWlCLEVBQUE7O0FBL0JyQjtJRW1CRSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7O0FGZ0JmO01BcENOO1FBcUNRLHNCQUFzQixFQUFBLEVBNEN6Qjs7QUFqRkw7TUVjRSxhQUFhO01BQ2Isc0JBQXNCO01GNEJoQix1QkFBdUI7TUFDdkIsZ0JDSlUsRUFBQTs7QUR4Q2xCO1FFbUJFLGFBQWE7UUFDYixtQkFBbUI7UUY2QlgsbUJBQW1CLEVBQUE7O0FBakQ3QjtVQW9EWSxlQUFlO1VBQ2YsaUJDYk07VURjTixXQUFXLEVBQUE7O0FBdER2QjtZQXlEYyx5QkN4Q1EsRUFBQTs7QURqQnRCO1lBNkRjLHlCQzNDRSxFQUFBOztBRGxCaEI7WUFpRWMseUJDN0NNLEVBQUE7O0FEcEJwQjtRQXVFVSxnQkFBZ0I7UUFDaEIsZ0JDaENRLEVBQUE7O0FEeENsQjtNQTZFUSxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLFlBQVksRUFBQTs7QUEvRXBCO0VBcUZJLGlCQUFpQixFQUFBOztBQXJGckI7RUF5RkksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy90b29scy1tYWludGVuYW5jZS1zdGF0dXMvZm9ybS90b29scy1tYWludGVuYW5jZS1zdGF0dXMtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LS1mbGV4LWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktLWZsZXgtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlzcGxheS0tbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVpZ2h0LS0xMDAge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1pbi13aWR0aC0tZml0LWNvbnRlbnQge1xyXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvc2l0aW9uLS1yZWxhdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGwteS0tbm9uZSB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LS11bnNlbGVjdGFibGUge1xyXG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52aXNpYmlsaXR5LS1oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtLTEwIHtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTIwIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTMwIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTQwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTUwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTYwIHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTcwIHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTgwIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTkwIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5mbGV4LS0xIHtcclxuICBmbGV4OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0yIHtcclxuICBmbGV4OiAyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0zIHtcclxuICBmbGV4OiAzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS00IHtcclxuICBmbGV4OiA0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS01IHtcclxuICBmbGV4OiA1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS1hdXRvIHtcclxuICBmbGV4OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tY2VudGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tZW5kIHtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1hbGlnbi1zdGFydCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWVuZCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWp1c3RpZnktc3RhcnQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5AaW1wb3J0IFwibW9kaWZpZXJzXCI7XHJcblxyXG46aG9zdCAjdG9vbHMtY29udHJvbC1mb3JtIHtcclxuICAuaW4tc2ltdWxhdGlvbiB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY2VsbC1kZXRhaWwge1xyXG4gICAgLmZvcm0tY29udHJvbC1wb3RlbnRpYWwtdW5pdCB7XHJcbiAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmdyaWQtY2VsbC1zdGF0ZS1zaW11bGF0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIC5ncmlkLWNlbGwtdGl0bGUge1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAuc2ltdWxhdGlvbi1jcml0ZXJpb246bm90KDpsYXN0LW9mLXR5cGUpOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiIHwgXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLXJlbWFpbmluZy12YWx1ZXMge1xyXG4gICAgbWluLWhlaWdodDogMTRyZW07XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLXN1bW1hcnkge1xyXG4gICAgbWluLWhlaWdodDogMTJyZW07XHJcblxyXG4gICAgLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2hhcnQtbGVnZW5kIHtcclxuICAgICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgLmNoYXJ0LWxlZ2VuZC1sYWJlbCB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgLmNoYXJ0LWxlZ2VuZC1sYWJlbC1jb2xvciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMC43NXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgICAgICB3aWR0aDogMnJlbTtcclxuXHJcbiAgICAgICAgICAgICYuYWlyd29ydGh5IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmFpcndvcnRoeS13aXRoLWFsZXJ0cyB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5ub3QtYWlyd29ydGh5IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoYXJ0LXZhbHVlIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaGFydC13cmFwcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnJlbTtcclxuICAgICAgICB3aWR0aDogMTRyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jdXN0b20tbWFyZ2luIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLnBhZGRpbmdDbGFzcyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.component.ts':
      /*!*********************************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.component.ts ***!
  \*********************************************************************************************************/
      /*! exports provided: ToolsMaintenanceStatusFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ToolsMaintenanceStatusFormComponent',
          function() {
            return ToolsMaintenanceStatusFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! lodash-es */ './node_modules/lodash-es/lodash.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/constants/bire-unit-measure-constants */ './src/app/shared/constants/bire-unit-measure-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/constants/control-config-constants */ './src/app/shared/constants/control-config-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/export.service */ './src/app/shared/services/export.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../shared/utils/bido-equipment-utils */ './src/app/shared/utils/bido-equipment-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _tools_maintenance_status_form_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./tools-maintenance-status-form.service */ './src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.service.ts'
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

        var ToolsMaintenanceStatusFormComponent = /** @class */ (function(_super) {
          __extends(ToolsMaintenanceStatusFormComponent, _super);
          function ToolsMaintenanceStatusFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            dateService,
            translateService,
            toolsMaintenanceStatusFormService,
            exportService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.dateService = dateService;
            _this.translateService = translateService;
            _this.toolsMaintenanceStatusFormService = toolsMaintenanceStatusFormService;
            _this.exportService = exportService;
            _this.controlConfigConstants =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants'];
            _this.setPotentialUnitList();
            return _this;
          }
          ToolsMaintenanceStatusFormComponent_1 = ToolsMaintenanceStatusFormComponent;
          ToolsMaintenanceStatusFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
              .LOG_TOOLS_MAINTENANCE_STATUS_FORM;
          };
          ToolsMaintenanceStatusFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.topEquipmentCodeList =
              !!this.componentData.objectId && !!this.serializationService.deserialize(this.componentData.objectId)
                ? this.serializationService.deserialize(this.componentData.objectId)
                : [];
            this.potentialUnitSelected =
              _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_7__[
                'BireUnitMeasureConstants'
              ].HOUR;
            this.init();
          };
          /**********************************
           * PAGE OPERATIONS
           **********************************/
          ToolsMaintenanceStatusFormComponent.prototype.reload = function() {
            this.init();
          };
          ToolsMaintenanceStatusFormComponent.prototype.simulate = function() {
            this.simulationDialogVisible = true;
          };
          /**********************************
           * INITIALIZATION
           **********************************/
          ToolsMaintenanceStatusFormComponent.prototype.init = function() {
            var _this = this;
            this.toolsTable = [];
            this.toolsTableSelection = [];
            this.toolsTableVisibilitySelected = 0;
            this.designationList = [];
            this.pnCodeList = [];
            this.snCodeList = [];
            this.familyVariantList = [];
            this.toolsTreeTable = [];
            this.toolsMap = new Map();
            this.minimumRemainingEquivalentMap = new Map();
            this.initChart();
            this.initTableHeader();
            this.setToolsTableVisibilityList();
            this.toolsMaintenanceStatusFormService.fetchGroundEquipmentFunctionList().subscribe(
              function(results) {
                _this.groundEquipmentTypes = results;
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetGroundEquipmentTypes'));
              }
            );
            this.load();
          };
          ToolsMaintenanceStatusFormComponent.prototype.setPotentialUnitList = function() {
            var _this = this;
            var cyclesKey = this.getTranslateKey('cycles');
            var daysKey = this.getTranslateKey('days');
            var hoursKey = this.getTranslateKey('hours');
            this.translateService.get([daysKey, cyclesKey, hoursKey]).subscribe(function(results) {
              var cyclesLabel = results ? results[cyclesKey] : 'Cycles';
              var daysLabel = results ? results[daysKey] : 'Days';
              var hoursLabel = results ? results[hoursKey] : 'Hours';
              _this.potentialUnitList = [
                {
                  label: cyclesLabel,
                  command: function() {
                    _this.updatePotentialUnit(
                      _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_7__[
                        'BireUnitMeasureConstants'
                      ].CYCLE
                    );
                  }
                },
                {
                  label: daysLabel,
                  command: function() {
                    _this.updatePotentialUnit(
                      _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_7__[
                        'BireUnitMeasureConstants'
                      ].DAY
                    );
                  }
                },
                {
                  label: hoursLabel,
                  command: function() {
                    _this.updatePotentialUnit(
                      _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_7__[
                        'BireUnitMeasureConstants'
                      ].HOUR
                    );
                  }
                }
              ];
            });
          };
          /**********************************
           * TOOLS TABLE HEADER
           **********************************/
          ToolsMaintenanceStatusFormComponent.prototype.initTableHeader = function() {
            this.toolsTableCols = [
              { field: 'alert', alignment: 'center', width: '10%' },
              { field: 'asset', alignment: 'left', width: '15%' },
              { field: 'designation', alignment: 'left', width: '30%' },
              { field: 'potential', alignment: 'left', width: '15%' },
              { field: 'status', alignment: 'left', width: '20%' },
              { field: 'mp', alignment: 'left', width: '10%' }
            ];
          };
          /**********************************
           * CHART OPERATIONS
           **********************************/
          ToolsMaintenanceStatusFormComponent.prototype.initChart = function() {
            this.chartType = 'pie';
            this.chartVisible = false;
            this.chartData = {
              datasets: [
                {
                  data: [0, 0, 0],
                  backgroundColor: [
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__['AppConstants'].COLOR_GREEN,
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__['AppConstants'].COLOR_ORANGE,
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__['AppConstants'].COLOR_RED
                  ],
                  hoverBackgroundColor: [
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__['AppConstants'].COLOR_GREEN,
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__['AppConstants'].COLOR_ORANGE,
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__['AppConstants'].COLOR_RED
                  ]
                }
              ],
              labels: []
            };
            this.servicableEquipmentNb = 0;
            this.servicableWithAlertEquipmentNb = 0;
            this.notservicableEquipmentNb = 0;
            this.setChartLabels();
            this.setChartOptions();
          };
          ToolsMaintenanceStatusFormComponent.prototype.setChartLabels = function() {
            var _this = this;
            var servicableKey = this.getTranslateKey('servicable');
            var serviceableWithAlertsKey = this.getTranslateKey('serviceableWithAlerts');
            var notServiceableKey = this.getTranslateKey('notServiceable');
            this.translateService
              .get([servicableKey, serviceableWithAlertsKey, notServiceableKey])
              .subscribe(function(results) {
                var servicableLabel = results ? results[servicableKey] : '';
                var serviceableWithAlertsLabel = results
                  ? results[serviceableWithAlertsKey]
                  : 'Serviceable with alerts';
                var notServiceableLabel = results ? results[notServiceableKey] : 'Not serviceable';
                _this.chartData.labels = [servicableLabel, serviceableWithAlertsLabel, notServiceableLabel];
              });
          };
          ToolsMaintenanceStatusFormComponent.prototype.setChartOptions = function() {
            this.chartOptions = {
              legend: {
                display: false
              },
              tooltips: {
                bodyFontColor:
                  _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__['AppConstants'].COLOR_BACKGROUND_PRIMARY
              }
            };
          };
          ToolsMaintenanceStatusFormComponent.prototype.clearChartData = function() {
            this.chartData.datasets[0].data = [0, 0, 0];
            this.servicableEquipmentNb = 0;
            this.servicableWithAlertEquipmentNb = 0;
            this.notservicableEquipmentNb = 0;
          };
          ToolsMaintenanceStatusFormComponent.prototype.updateChartData = function() {
            var _this = this;
            this.toolsTable.forEach(function(row) {
              if (row.alert) {
                var SERVICABLE_VALUES_INDEX = 0;
                var SERVICABLE_WITH_ALERTS_VALUES_INDEX = 1;
                var NOT_SERVICABLE_VALUES_INDEX = 2;
                if (
                  row.alert ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                    .ICON_GREEN
                ) {
                  _this.chartData.datasets[0].data[SERVICABLE_VALUES_INDEX]++;
                  _this.servicableEquipmentNb = _this.chartData.datasets[0].data[SERVICABLE_VALUES_INDEX];
                }
                if (
                  row.alert ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                    .ICON_YELLOW
                ) {
                  _this.chartData.datasets[0].data[SERVICABLE_WITH_ALERTS_VALUES_INDEX]++;
                  _this.servicableWithAlertEquipmentNb =
                    _this.chartData.datasets[0].data[SERVICABLE_WITH_ALERTS_VALUES_INDEX];
                }
                if (
                  row.alert ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                    .ICON_RED
                ) {
                  _this.chartData.datasets[0].data[NOT_SERVICABLE_VALUES_INDEX]++;
                  _this.notservicableEquipmentNb = _this.chartData.datasets[0].data[NOT_SERVICABLE_VALUES_INDEX];
                }
                _this.chartData = __assign({}, _this.chartData);
                _this.chartVisible = _this.chartData.datasets[0].data.some(function(elt) {
                  return elt > 0;
                });
              }
            });
          };
          /**********************************
           * Generate Table data
           **********************************/
          ToolsMaintenanceStatusFormComponent.prototype.setToolsTableVisibilityList = function() {
            var _this = this;
            var allKey = this.getTranslateKey('showAll');
            var onlyAlertsKey = this.getTranslateKey('showOnlyAlerts');
            this.translateService.get([allKey, onlyAlertsKey]).subscribe(function(results) {
              var allLabel = !!results ? results[allKey] : 'Show All';
              var onlyAlertsLabel = !!results ? results[onlyAlertsKey] : 'Show Only Alerts';
              _this.toolsTableVisibilityList = [
                { label: allLabel, value: 0 },
                { label: onlyAlertsLabel, value: 1 }
              ];
            });
          };
          ToolsMaintenanceStatusFormComponent.prototype.onChangeToolsTableVisibility = function() {
            this.toolsTableOnlyAlertsVisible = this.toolsTableVisibilitySelected === 1;
            if (this.toolsTableOnlyAlertsVisible) {
              this.toolsTableDisplayedRowNb = this.toolsTable.filter(function(elt) {
                return (
                  elt.alert !== undefined &&
                  elt.alert !== null &&
                  (elt.alert ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                      .ICON_RED ||
                    elt.alert ===
                      _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                        .ICON_YELLOW)
                );
              }).length;
            }
          };
          ToolsMaintenanceStatusFormComponent.prototype.load = function() {
            var _this = this;
            this.toolsTableLoading = true;
            this.panelLoading = true;
            this.toolsTable = [];
            this.chartVisible = false;
            this.designationList = [];
            this.pnCodeList = [];
            this.snCodeList = [];
            this.familyVariantList = [];
            this.clearChartData();
            var airworthinessTableParams = {
              equipmentCodeList: this.topEquipmentCodeList,
              simulation: this.simulationCriteria !== undefined,
              simulationCyclesValue: this.simulationCriteria ? this.simulationCriteria.inCycles : undefined,
              simulationDateValue: this.simulationCriteria ? this.simulationCriteria.atDate : undefined,
              simulationHoursValue: this.simulationCriteria ? this.simulationCriteria.inHours : undefined,
              unitEquivalent: this.potentialUnitSelected
            };
            this.toolsMaintenanceStatusFormService
              .generateAirworthinessControlTable(airworthinessTableParams)
              .subscribe(
                function(results) {
                  _this.toolsTableLoading = false;
                  _this.toolsTreeTable = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__['ListUtils']
                    .orEmpty(results)
                    .filter(function(elt) {
                      return (
                        elt.bidoEquipment &&
                        !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__['StringUtils'].isNullOrEmpty(
                          elt.bidoEquipment.equipmentCode
                        )
                      );
                    });
                  _this.createAllToolsRow(_this.toolsTreeTable);
                  _this.createDataForToolsPanel(results);
                  _this.toolsTable = _this.toolsTreeTable.map(function(elt) {
                    return _this.toolsMap.get(elt.bidoEquipment.equipmentCode);
                  });
                  _this.computeGlobalAlertForEachTopEquipment(_this.toolsTable);
                  _this.toolsTableLoading = false;
                  _this.panelLoading = false;
                },
                function(error) {
                  _this.toolsTableLoading = false;
                  _this.panelLoading = false;
                }
              );
          };
          ToolsMaintenanceStatusFormComponent.prototype.createDataForToolsPanel = function(results) {
            var _this = this;
            // Setting data for First Panel
            results.forEach(function(res) {
              if (!!res && !!res.bidoEquipment) {
                if (
                  !!res.bidoEquipment.equipmentDesignation &&
                  _this.designationList.indexOf(res.bidoEquipment.equipmentDesignation) === -1
                ) {
                  _this.designationList.push(res.bidoEquipment.equipmentDesignation);
                }
                if (!!res.bidoEquipment.pnCode && _this.pnCodeList.indexOf(res.bidoEquipment.pnCode) === -1) {
                  _this.pnCodeList.push(res.bidoEquipment.pnCode);
                }
                if (!!res.bidoEquipment.sn && _this.snCodeList.indexOf(res.bidoEquipment.sn) === -1) {
                  _this.snCodeList.push(res.bidoEquipment.sn);
                }
                if (
                  !!res.bidoEquipment.familyVariantCode &&
                  _this.familyVariantList.indexOf(res.bidoEquipment.familyVariantCode) === -1
                ) {
                  _this.familyVariantList.push(res.bidoEquipment.familyVariantCode);
                }
                _this.displayComponentContext(_this.displayToolInfo(_this.familyVariantList), _this.isCreateOpenMode);
              }
            });
          };
          ToolsMaintenanceStatusFormComponent.prototype.createAllToolsRow = function(list) {
            var _this = this;
            if (list.length > 0) {
              list.forEach(function(elt) {
                _this.toolsMap.set(elt.bidoEquipment.equipmentCode, _this.createAirworthinessRow(elt));
                _this.createAllToolsRow(elt.children);
              });
            }
          };
          ToolsMaintenanceStatusFormComponent.prototype.computeGlobalAlertForEachTopEquipment = function(
            topEquipmentList
          ) {
            var _this = this;
            this.clearChartData();
            topEquipmentList.forEach(function(equipment) {
              equipment._alertLoading = true;
            });
            this.togglePotentialLoadingIndicator(true);
            var observables = topEquipmentList.map(function(equipment) {
              var input = {
                equipmentCodeList: _this.topEquipmentCodeList,
                simulation: _this.simulationCriteria !== undefined,
                simulationCyclesValue: _this.simulationCriteria ? _this.simulationCriteria.inCycles : undefined,
                simulationDateValue: _this.simulationCriteria ? _this.simulationCriteria.atDate : undefined,
                simulationHoursValue: _this.simulationCriteria ? _this.simulationCriteria.inHours : undefined,
                equipmentToCheck: equipment._obj.bidoEquipment.equipmentCode
              };
              return _this.toolsMaintenanceStatusFormService.checkEquipmentForAirworthinessControl(input);
            });
            rxjs__WEBPACK_IMPORTED_MODULE_3__['merge']
              .apply(void 0, __spread(observables))
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['finalize'])(function() {
                  _this.updateChartData();
                  _this.setPotentialForAllEquipment(_this.toolsTreeTable);
                })
              )
              .subscribe(function(result) {
                var matchingEquipment = topEquipmentList.find(function(equipment) {
                  return equipment._obj.bidoEquipment.equipmentCode === result.bidoEquipment.equipmentCode;
                });
                if (!!matchingEquipment) {
                  matchingEquipment._alertLoading = false;
                  matchingEquipment.alert = result.airworthinessAlertIcon;
                }
              });
          };
          /**********************************
           * UPDATE POTENTIAL
           **********************************/
          ToolsMaintenanceStatusFormComponent.prototype.updatePotentialUnit = function(unit) {
            var _this = this;
            this.potentialUnitSelected = unit;
            this.togglePotentialLoadingIndicator(true);
            var params = {
              equipmentCodeList: this.topEquipmentCodeList,
              simulation: this.simulationCriteria !== undefined,
              simulationCyclesValue: this.simulationCriteria ? this.simulationCriteria.inCycles : undefined,
              simulationDateValue: this.simulationCriteria ? this.simulationCriteria.atDate : undefined,
              simulationHoursValue: this.simulationCriteria ? this.simulationCriteria.inHours : undefined,
              unitEquivalent: this.potentialUnitSelected
            };
            this.toolsMaintenanceStatusFormService
              .computePotentialForAirworthinessControlInput(params)
              .subscribe(function(results) {
                _this.setPotentialForAllEquipment(results);
              });
          };
          ToolsMaintenanceStatusFormComponent.prototype.setPotentialForAllEquipment = function(results) {
            var _this = this;
            // Compute minimum remaining equivalent for each equipment
            _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__['ListUtils']
              .orEmpty(results)
              .forEach(function(result) {
                var minimumRemainingEquivalent = _this.findMinimumRemainingEquivalent(result.children);
                if (result.code && minimumRemainingEquivalent) {
                  _this.minimumRemainingEquivalentMap.set(result.code, minimumRemainingEquivalent);
                }
              });
            // if (this.isAssetViewMode) {
            //   this.topAssetAirworthinessTableRemainingValuesComponent.load();
            // }
            var treeNodeMap = this.mapTreeNodeByEquipmentCode(results);
            treeNodeMap.forEach(function(_, key) {
              var treeNode = treeNodeMap.get(key);
              var matchingElt = _this.toolsMap.get(key);
              if (!!treeNode) {
                matchingElt.potential = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__['StringUtils'].orEmpty(
                  treeNode.remainingEquivalent
                );
                matchingElt._obj.remainingEquivalent = treeNode.remainingEquivalent;
                matchingElt._obj.remainingEquivalentIcon = treeNode.remainingEquivalentIcon;
                matchingElt._obj.remainingEquivalentTooltip = treeNode.remainingEquivalentTooltip;
                if (
                  matchingElt.alert ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                    .ICON_YELLOW
                ) {
                  var lowRemainingKey = _this.getTranslateKey('lowRemaining');
                  _this.translateService.get(lowRemainingKey).subscribe(function(translatedKey) {
                    matchingElt._alertTooltip = translatedKey || 'Low remaining';
                  });
                } else if (
                  matchingElt.alert ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                    .ICON_RED
                ) {
                  var missingAssetInAppliedConfigurationKey_1 = _this.getTranslateKey(
                    'missingAssetInAppliedConfiguration'
                  );
                  var overPotentialKey_1 = _this.getTranslateKey('overduePotential');
                  var overPotentialSubassemblyKey_1 = _this.getTranslateKey('overduePotentialSubAssembly');
                  _this.translateService
                    .get([missingAssetInAppliedConfigurationKey_1, overPotentialKey_1, overPotentialSubassemblyKey_1])
                    .subscribe(function(translatedKeys) {
                      var missingAssetInAppliedConfigurationLabel = !!translatedKeys
                        ? translatedKeys[missingAssetInAppliedConfigurationKey_1]
                        : 'Missing asset in the applied configuration';
                      var overPotentialLabel = !!translatedKeys
                        ? translatedKeys[overPotentialKey_1]
                        : 'Overdue potential';
                      var overPotentialSubassemblyLabel = !!translatedKeys
                        ? translatedKeys[overPotentialSubassemblyKey_1]
                        : 'Overdue potential on sub-assemblies';
                      var alertList = [];
                      if (!!matchingElt.potential && matchingElt.potential.startsWith('-')) {
                        alertList = __spread(alertList, [overPotentialLabel]);
                      }
                      var overduePotentialSubAssembly = matchingElt._obj.children.some(function(child) {
                        return _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__['StringUtils']
                          .orEmpty(child.remainingEquivalent)
                          .startsWith('-');
                      });
                      if (overduePotentialSubAssembly) {
                        alertList = __spread(alertList, [overPotentialSubassemblyLabel]);
                      }
                      if (
                        treeNode.checkResultIcon ===
                        _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__[
                          'ControlConfigConstants'
                        ].ICON_RED
                      ) {
                        alertList = __spread(alertList, [missingAssetInAppliedConfigurationLabel]);
                      }
                      matchingElt._alertTooltip = alertList.join(' & ');
                    });
                }
              }
            });
            this.togglePotentialLoadingIndicator(false);
          };
          ToolsMaintenanceStatusFormComponent.prototype.mapTreeNodeByEquipmentCode = function(list) {
            var map = new Map();
            var queue = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(list);
            while (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__['ListUtils'].isEmpty(queue)) {
              var first = queue.shift();
              queue = __spread(queue, first.children);
              map.set(first.bidoEquipment.equipmentCode, first);
            }
            return map;
          };
          ToolsMaintenanceStatusFormComponent.prototype.findMinimumRemainingEquivalent = function(list) {
            var remainingEquivalent;
            var queue = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(list);
            while (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__['ListUtils'].isEmpty(queue)) {
              var first = queue.shift();
              queue = __spread(queue, first.children);
              if (
                _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_21__['ObjectUtils'].isDefined(
                  first.remainingEquivalentValue
                )
              ) {
                if (!remainingEquivalent) {
                  remainingEquivalent = first;
                } else {
                  var currMin = remainingEquivalent.remainingEquivalentValue;
                  var newMin = first.remainingEquivalentValue;
                  if (newMin < currMin) {
                    remainingEquivalent = first;
                  }
                }
              }
            }
            return remainingEquivalent;
          };
          ToolsMaintenanceStatusFormComponent.prototype.togglePotentialLoadingIndicator = function(newStatus) {
            this.toolsTable.forEach(function(elt) {
              elt._potentialLoading = newStatus;
            });
          };
          /**********************************
           * RENDER TOOLS TABLE ROW
           **********************************/
          ToolsMaintenanceStatusFormComponent.prototype.createAirworthinessRow = function(elt) {
            return {
              alert: elt.airworthinessAlertIcon,
              asset: _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_19__[
                'BidoEquipmentUtils'
              ].createAssetName(elt.bidoEquipment),
              designation: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__['StringUtils'].orEmpty(
                elt.assetDesignation
              ),
              remainingDays: elt.remainingDays,
              mp: elt.maintenanceProgram,
              potential: '',
              status: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__['StringUtils'].orEmpty(elt.status),
              hasChildren: elt.children.length > 0,
              tasks: elt.airworthinessAlertIcon,
              _id: elt.bidoEquipment.equipmentCode,
              _obj: elt,
              _alertLoading: false,
              _alertTooltip: '',
              _airworthinessAlertTooltip: elt.airworthinessAlertTooltip,
              _expand: false,
              _potentialLoading: false
            };
          };
          ToolsMaintenanceStatusFormComponent.prototype.toggleToolsTableRowDetailsVisibility = function(row) {
            row._expand = !row._expand;
          };
          /**********************************
           * OPENING ASSET UC
           **********************************/
          ToolsMaintenanceStatusFormComponent.prototype.openSubAsset = function(subAssembly) {
            if (subAssembly._obj.bidoEquipment.equipmentCode && subAssembly._obj.bidoEquipment.equipmentFunction) {
              switch (subAssembly._obj.bidoEquipment.equipmentFunction) {
                case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_AIRCRAFT_KEY:
                  this.openAircraft(subAssembly._obj.bidoEquipment.equipmentCode);
                  break;
                case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_ENGINE_KEY:
                  this.openEngine(subAssembly._obj.bidoEquipment.equipmentCode);
                  break;
                case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_TOOL_KEY:
                  this.openTool(subAssembly._obj.bidoEquipment.equipmentCode);
                  break;
                default:
                  this.openEquipment(subAssembly._obj.bidoEquipment.equipmentCode);
                  break;
              }
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnOpenSubAssembly'));
            }
          };
          ToolsMaintenanceStatusFormComponent.prototype.openAircraft = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .FLE_AIRCRAFT_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ToolsMaintenanceStatusFormComponent.prototype.openEngine = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .FLE_ENGINE_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ToolsMaintenanceStatusFormComponent.prototype.openEquipment = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .FLE_EQUIPMENT_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ToolsMaintenanceStatusFormComponent.prototype.openTool = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants'].LOG_TOOL_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ToolsMaintenanceStatusFormComponent.prototype.openMaintenanceProgram = function(mp) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .ENG_MAINTENANCE_PROGRAM_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read
            };
            if (!!mp) {
              var birePlanDTOId = {
                planCode: mp
              };
              data.objectId = this.serializationService.serialize(birePlanDTOId);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /**********************************
           * TOOLS PANEL INFORMATION RENDER
           **********************************/
          ToolsMaintenanceStatusFormComponent.prototype.displayToolInfo = function(arr) {
            var str = '';
            if (arr.length > 0) {
              arr.forEach(function(res, index) {
                if (arr.length - 1 === index) {
                  str = str + res;
                } else {
                  str = '' + str + res + ', ';
                }
              });
            }
            return str;
          };
          /**********************************
           * SIMULATION OPERATIONS
           **********************************/
          ToolsMaintenanceStatusFormComponent.prototype.onSimulate = function(criteria) {
            this.simulationCriteria = criteria;
            this.reloadFromCache();
          };
          ToolsMaintenanceStatusFormComponent.prototype.reloadFromCache = function() {
            this.load();
            this.loadConfigurationControl();
          };
          ToolsMaintenanceStatusFormComponent.prototype.loadConfigurationControl = function() {
            // TODO
          };
          ToolsMaintenanceStatusFormComponent.prototype.resetSimulation = function() {
            this.simulationCriteria = undefined;
            this.reloadFromCache();
          };
          /**********************************
           * EXPORT TOOLS TABLE
           **********************************/
          ToolsMaintenanceStatusFormComponent.prototype.exportToolsTable = function() {
            var _this = this;
            this.exportingFlag = true;
            var translateKey = ToolsMaintenanceStatusFormComponent_1.EXPORT_TRANSLATE_KEY;
            var alert = _super.prototype.getTranslateKey.call(this, 'alert', translateKey);
            var alertNokKey = _super.prototype.getTranslateKey.call(this, 'alertNok', translateKey);
            var alertOkKey = _super.prototype.getTranslateKey.call(this, 'alertOk', translateKey);
            var alertWarningKey = _super.prototype.getTranslateKey.call(this, 'alertWarning', translateKey);
            var assetKey = _super.prototype.getTranslateKey.call(this, 'asset', translateKey);
            var potential = _super.prototype.getTranslateKey.call(this, 'potential', translateKey);
            var designationKey = _super.prototype.getTranslateKey.call(this, 'designation', translateKey);
            var eventStatus = _super.prototype.getTranslateKey.call(this, 'eventStatus', translateKey);
            var tasks = _super.prototype.getTranslateKey.call(this, 'tasks', translateKey);
            var remainingDays = _super.prototype.getTranslateKey.call(this, 'remainingDays', translateKey);
            var mp = _super.prototype.getTranslateKey.call(this, 'mp', translateKey);
            var statusKey = _super.prototype.getTranslateKey.call(this, 'status', translateKey);
            var fileNamePrefixKey = _super.prototype.getTranslateKey.call(this, 'fileNamePrefix', translateKey);
            this.translateService
              .get([
                alert,
                alertNokKey,
                alertOkKey,
                alertWarningKey,
                assetKey,
                potential,
                designationKey,
                eventStatus,
                remainingDays,
                tasks,
                statusKey,
                fileNamePrefixKey,
                mp
              ])
              .subscribe(
                function(results) {
                  if (results) {
                    var listToExport = _this.toolsTable.map(function(element) {
                      var _a;
                      var alertStr;
                      switch (element.alert) {
                        case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__[
                          'ControlConfigConstants'
                        ].ICON_GREEN:
                          alertStr = results[alertOkKey];
                          break;
                        case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__[
                          'ControlConfigConstants'
                        ].ICON_RED:
                          alertStr = results[alertNokKey];
                          break;
                        case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__[
                          'ControlConfigConstants'
                        ].ICON_YELLOW:
                          alertStr = results[alertWarningKey];
                          break;
                        default:
                          alertStr = '';
                          break;
                      }
                      var tasksStr;
                      switch (element.tasks) {
                        case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__[
                          'ControlConfigConstants'
                        ].ICON_GREEN:
                          tasksStr = results[alertOkKey];
                          break;
                        case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__[
                          'ControlConfigConstants'
                        ].ICON_RED:
                          tasksStr = results[alertNokKey];
                          break;
                        case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__[
                          'ControlConfigConstants'
                        ].ICON_YELLOW:
                          tasksStr = results[alertWarningKey];
                          break;
                        default:
                          tasksStr = '';
                          break;
                      }
                      return (
                        (_a = {}),
                        (_a[results[alert]] = alertStr),
                        (_a[results[assetKey]] = element.asset),
                        (_a[results[designationKey]] = element.designation),
                        (_a[results[potential]] = element.potential),
                        (_a[results[eventStatus]] = element.status),
                        (_a[results[mp]] = element.mp),
                        (_a[results[remainingDays]] = element.remainingDays),
                        (_a[results[tasks]] = tasksStr),
                        _a
                      );
                    });
                    var fileNameToExport =
                      results[fileNamePrefixKey] + '__' + _this.dateService.dateWithHourToString(new Date());
                    var exportOpts = {
                      header: [
                        results[alert],
                        results[assetKey],
                        results[designationKey],
                        results[potential],
                        results[eventStatus],
                        results[mp],
                        results[remainingDays],
                        results[tasks]
                      ]
                    };
                    _this.exportService.toExcel(listToExport, fileNameToExport, undefined, exportOpts);
                    _this.exportingFlag = false;
                  }
                },
                function(error) {
                  _this.exportingFlag = false;
                }
              );
          };
          var ToolsMaintenanceStatusFormComponent_1;
          ToolsMaintenanceStatusFormComponent.EXPORT_TRANSLATE_KEY = 'ToolsMaintenanceStatusFormComponent';
          ToolsMaintenanceStatusFormComponent = ToolsMaintenanceStatusFormComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-tools-maintenance-status-form',
                template: __webpack_require__(
                  /*! ./tools-maintenance-status-form.component.html */ './src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./tools-maintenance-status-form.component.scss */ './src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_13__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_14__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_15__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_16__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_17__['TabService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_11__['DateService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _tools_maintenance_status_form_service__WEBPACK_IMPORTED_MODULE_23__[
                  'ToolsMaintenanceStatusFormService'
                ],
                _shared_services_export_service__WEBPACK_IMPORTED_MODULE_12__['ExportService']
              ])
            ],
            ToolsMaintenanceStatusFormComponent
          );
          return ToolsMaintenanceStatusFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_18__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.service.ts':
      /*!*******************************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.service.ts ***!
  \*******************************************************************************************************/
      /*! exports provided: ToolsMaintenanceStatusFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ToolsMaintenanceStatusFormService',
          function() {
            return ToolsMaintenanceStatusFormService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/airworthiness-management.api */ './src/app/shared/api/airworthiness-management.api.ts'
        );
        /* harmony import */ var _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/asset-management.api */ './src/app/shared/api/asset-management.api.ts'
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

        var ToolsMaintenanceStatusFormService = /** @class */ (function(_super) {
          __extends(ToolsMaintenanceStatusFormService, _super);
          function ToolsMaintenanceStatusFormService(
            http,
            appConfigService,
            airworthinessManagementApi,
            assetManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.airworthinessManagementApi = airworthinessManagementApi;
            _this.assetManagementApi = assetManagementApi;
            return _this;
          }
          /**************************************************************************
           * Airworthiness management api
           *************************************************************************/
          ToolsMaintenanceStatusFormService.prototype.generateAirworthinessControlTable = function(input) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.generateAirworthinessControlTable,
              input
            );
          };
          ToolsMaintenanceStatusFormService.prototype.checkEquipmentForAirworthinessControl = function(input) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.checkEquipmentForAirworthinessControl,
              input
            );
          };
          ToolsMaintenanceStatusFormService.prototype.computePotentialForAirworthinessControlInput = function(input) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.computePotentialForAirworthinessControlInput,
              input
            );
          };
          ToolsMaintenanceStatusFormService.prototype.fetchGroundEquipmentFunctionList = function() {
            return _super.prototype.post.call(this, this.assetManagementApi.fetchGroundEquipmentFunctionList);
          };
          ToolsMaintenanceStatusFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__['AppConfigService'],
                _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_2__['AirworthinessManagementApi'],
                _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_3__['AssetManagementApi']
              ])
            ],
            ToolsMaintenanceStatusFormService
          );
          return ToolsMaintenanceStatusFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.component.html':
      /*!***************************************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.component.html ***!
  \***************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle">{{ "page.searchPage" | translate }}</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-primary-actions"><!-- Remove enclosing tag if empty --></div>\r\n</div>\r\n\r\n<!-- SEARCH SCREEN -->\r\n<aw-tools-maintenance-search (onValidated)="openToolForm($event)"></aw-tools-maintenance-search>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.component.scss':
      /*!***************************************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.component.scss ***!
  \***************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL3Rvb2xzLW1haW50ZW5hbmNlLXN0YXR1cy9zZWFyY2gvdG9vbHMtbWFpbnRlbmFuY2Utc3RhdHVzLXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */';

        /***/
      },

    /***/ './src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.component.ts':
      /*!*************************************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.component.ts ***!
  \*************************************************************************************************************/
      /*! exports provided: ToolsMaintenanceStatusSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ToolsMaintenanceStatusSearchComponent',
          function() {
            return ToolsMaintenanceStatusSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
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

        var ToolsMaintenanceStatusSearchComponent = /** @class */ (function(_super) {
          __extends(ToolsMaintenanceStatusSearchComponent, _super);
          function ToolsMaintenanceStatusSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService
          ) {
            return (
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this
            );
          }
          ToolsMaintenanceStatusSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
              .LOG_TOOLS_MAINTENANCE_STATUS_SEARCH;
          };
          ToolsMaintenanceStatusSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
          };
          /****************************
           * Opens TOOLS Form
           ****************************/
          ToolsMaintenanceStatusSearchComponent.prototype.openToolForm = function(event) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
                  .LOG_TOOLS_MAINTENANCE_STATUS_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read
            };
            if (!!event) {
              var toolsList_1 = [];
              event.forEach(function(obj) {
                if (obj.equipmentCode) {
                  toolsList_1.push(obj.equipmentCode);
                }
              });
              data.objectId = this.serializationService.serialize(toolsList_1);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ToolsMaintenanceStatusSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-tools-maintenance-status-search',
                template: __webpack_require__(
                  /*! ./tools-maintenance-status-search.component.html */ './src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./tools-maintenance-status-search.component.scss */ './src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_7__['TabService']
              ])
            ],
            ToolsMaintenanceStatusSearchComponent
          );
          return ToolsMaintenanceStatusSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_8__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.service.ts':
      /*!***********************************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.service.ts ***!
  \***********************************************************************************************************/
      /*! exports provided: ToolsMaintenanceStatusSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ToolsMaintenanceStatusSearchService',
          function() {
            return ToolsMaintenanceStatusSearchService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

        var ToolsMaintenanceStatusSearchService = /** @class */ (function(_super) {
          __extends(ToolsMaintenanceStatusSearchService, _super);
          function ToolsMaintenanceStatusSearchService(http, appConfigService) {
            return _super.call(this, http, appConfigService) || this;
          }
          ToolsMaintenanceStatusSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__['AppConfigService']
              ])
            ],
            ToolsMaintenanceStatusSearchService
          );
          return ToolsMaintenanceStatusSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_2__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/logistics/tools-maintenance-status/tools-maintenance-status.module.ts':
      /*!********************************************************************************************!*\
  !*** ./src/app/main/logistics/tools-maintenance-status/tools-maintenance-status.module.ts ***!
  \********************************************************************************************/
      /*! exports provided: ToolsMaintenanceStatusModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ToolsMaintenanceStatusModule',
          function() {
            return ToolsMaintenanceStatusModule;
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
        /* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/chart */ './node_modules/primeng/chart.js'
        );
        /* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_chart__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/checkbox */ './node_modules/primeng/checkbox.js'
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/splitbutton */ './node_modules/primeng/splitbutton.js'
        );
        /* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_control_simulation_dialog_control_simulation_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/components/dialog-control-simulation/dialog-control-simulation.module */ './src/app/shared/components/dialog-control-simulation/dialog-control-simulation.module.ts'
        );
        /* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ './src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _tools_maintenance_search_tools_maintenance_search_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../tools-maintenance-search/tools-maintenance-search.module */ './src/app/main/logistics/tools-maintenance-search/tools-maintenance-search.module.ts'
        );
        /* harmony import */ var _form_tools_maintenance_status_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./form/tools-maintenance-status-form.component */ './src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.component.ts'
        );
        /* harmony import */ var _form_tools_maintenance_status_form_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./form/tools-maintenance-status-form.service */ './src/app/main/logistics/tools-maintenance-status/form/tools-maintenance-status-form.service.ts'
        );
        /* harmony import */ var _search_tools_maintenance_status_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./search/tools-maintenance-status-search.component */ './src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.component.ts'
        );
        /* harmony import */ var _search_tools_maintenance_status_search_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./search/tools-maintenance-status-search.service */ './src/app/main/logistics/tools-maintenance-status/search/tools-maintenance-status-search.service.ts'
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
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__['TooltipModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__['DropdownModule'],
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__['CheckboxModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_7__['TableModule'],
          primeng_chart__WEBPACK_IMPORTED_MODULE_2__['ChartModule'],
          primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__['SplitButtonModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__['SelectButtonModule'],
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule'],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_14__['ModalModule'],
          _shared_components_dialog_control_simulation_dialog_control_simulation_module__WEBPACK_IMPORTED_MODULE_12__[
            'DialogControlSimulationModule'
          ],
          _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_13__[
            'ManageSearchCriteriaModule'
          ],
          _tools_maintenance_search_tools_maintenance_search_module__WEBPACK_IMPORTED_MODULE_16__[
            'ToolsMaintenanceSearchModule'
          ]
        ];
        var INTERNAL_MODULES = [];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [];
        var DYNAMIC_COMPONENTS = [
          _form_tools_maintenance_status_form_component__WEBPACK_IMPORTED_MODULE_17__[
            'ToolsMaintenanceStatusFormComponent'
          ],
          _search_tools_maintenance_status_search_component__WEBPACK_IMPORTED_MODULE_19__[
            'ToolsMaintenanceStatusSearchComponent'
          ]
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _form_tools_maintenance_status_form_service__WEBPACK_IMPORTED_MODULE_18__[
            'ToolsMaintenanceStatusFormService'
          ],
          _search_tools_maintenance_status_search_service__WEBPACK_IMPORTED_MODULE_20__[
            'ToolsMaintenanceStatusSearchService'
          ]
        ];
        var ToolsMaintenanceStatusModule = /** @class */ (function() {
          function ToolsMaintenanceStatusModule() {}
          ToolsMaintenanceStatusModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_9__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_10__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_11__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_15__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            ToolsMaintenanceStatusModule
          );
          return ToolsMaintenanceStatusModule;
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
      },

    /***/ './src/app/shared/utils/bido-equipment-utils.ts':
      /*!******************************************************!*\
  !*** ./src/app/shared/utils/bido-equipment-utils.ts ***!
  \******************************************************/
      /*! exports provided: BidoEquipmentUtils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'BidoEquipmentUtils', function() {
          return BidoEquipmentUtils;
        });
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./bido-family-variant-utils */ './src/app/shared/utils/bido-family-variant-utils.ts'
        );

        var BidoEquipmentUtils = /** @class */ (function() {
          function BidoEquipmentUtils() {}
          BidoEquipmentUtils.createAssetName = function(equipment) {
            if (!equipment) {
              return '';
            } else {
              var designation = void 0;
              switch (equipment.equipmentFunction) {
                case _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_AIRCRAFT_KEY:
                  designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                    equipment.registration
                  );
                  break;
                case _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_ENGINE_KEY:
                  designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                    equipment.sn
                  );
                  break;
                default:
                  designation =
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(equipment.pnCode) +
                    '/' +
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(equipment.sn);
                  break;
              }
              return designation;
            }
          };
          BidoEquipmentUtils.createAircraftRepresentation = function(equipment) {
            var aircraftRepresentation = '';
            if (!equipment) {
              return '';
            } else {
              if (BidoEquipmentUtils.createAssetName(equipment) !== '') {
                aircraftRepresentation =
                  'MSN ' +
                  _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(equipment.sn) +
                  ' | ' +
                  BidoEquipmentUtils.createAssetName(equipment);
              }
              if (
                BidoEquipmentUtils.createAssetName(equipment) === '' &&
                _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(equipment.sn) !== ''
              ) {
                aircraftRepresentation =
                  'MSN ' + _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(equipment.sn);
              }
              return aircraftRepresentation;
            }
          };
          BidoEquipmentUtils.createAssetRepresentation = function(equipment) {
            var assetRepresentation = '';
            if (equipment) {
              var designation = void 0;
              switch (equipment.equipmentFunction) {
                case _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_AIRCRAFT_KEY:
                  assetRepresentation =
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                      equipment.familyVariantCode
                    ) +
                    ' | MSN ' +
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(equipment.sn) +
                    ' | ' +
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                      equipment.registration
                    );
                  designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                    equipment.registration
                  );
                  break;
                case _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_ENGINE_KEY:
                  assetRepresentation =
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                      equipment.familyVariantCode
                    ) +
                    ' | MSN ' +
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(equipment.sn) +
                    ' | ' +
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                      equipment.registration
                    );
                  designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                    equipment.registration
                  );
                  break;
                default:
                  assetRepresentation =
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                      equipment.familyVariantCode
                    ) +
                    ' | SN ' +
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(equipment.sn);
                  designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(
                    equipment.sn
                  );
                  break;
              }
            }
            return assetRepresentation;
          };
          BidoEquipmentUtils.getBireItemPK = function(equipment) {
            if (
              !!equipment.chapter &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isEmpty(equipment.chapter) &&
              !!equipment.marks &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isEmpty(equipment.marks) &&
              !!equipment.section &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isEmpty(equipment.section) &&
              !!equipment.sheet &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isEmpty(equipment.sheet) &&
              !!equipment.subject &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isEmpty(equipment.subject)
            ) {
              var itemId = {
                familyCode: _bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_2__[
                  'BidoFamilyVariantUtils'
                ].getFamilyCodeFromFamilyVariantCode(equipment.familyVariantCode),
                chapter: equipment.chapter,
                subject: equipment.subject,
                variantCode: _bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_2__[
                  'BidoFamilyVariantUtils'
                ].getVariantCodeFromFamilyVariantCode(equipment.familyVariantCode),
                section: equipment.section,
                sheet: equipment.sheet,
                marks: equipment.marks,
                structureType:
                  _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                    .STRUCTURE_TYPE_IPC_KEY
              };
              return itemId;
            } else {
              return undefined;
            }
          };
          BidoEquipmentUtils.toString = function(asset, withFamilyVariantCode) {
            if (withFamilyVariantCode === void 0) {
              withFamilyVariantCode = true;
            }
            if (!asset) {
              return '';
            }
            var equipmentCode = asset.equipmentCode;
            var equipmentFunction = asset.equipmentFunction;
            var familyVariantCode = withFamilyVariantCode ? asset.familyVariantCode + ' | ' : '';
            var pn = asset.pnCode;
            var registration = asset.registration;
            var sn = asset.sn;
            if (
              equipmentFunction ===
              _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                .ITEM_FAMILY_CODE_AIRCRAFT_KEY
            ) {
              var formattedMsn = !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isNullOrEmpty(
                sn
              )
                ? 'MSN ' + sn
                : '';
              var formattedRegistration = !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__[
                'StringUtils'
              ].isNullOrEmpty(registration)
                ? ' | ' + registration
                : '';
              return '' + familyVariantCode + formattedMsn + formattedRegistration;
            } else if (
              equipmentFunction ===
              _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                .ITEM_FAMILY_CODE_ENGINE_KEY
            ) {
              var formattedEsn = !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isNullOrEmpty(
                sn
              )
                ? 'ESN ' + sn
                : '';
              return '' + familyVariantCode + formattedEsn;
            } else {
              if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isNullOrEmpty(pn)) {
                if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isNullOrEmpty(sn)) {
                  return 'P/N ' + pn + ' | S/N ' + sn;
                } else {
                  return 'P/N ' + pn;
                }
              } else if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isNullOrEmpty(sn)) {
                return 'S/N ' + sn;
              } else {
                return _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].orEmpty(equipmentCode);
              }
            }
          };
          return BidoEquipmentUtils;
        })();

        /***/
      },

    /***/ './src/app/shared/utils/bido-family-variant-utils.ts':
      /*!***********************************************************!*\
  !*** ./src/app/shared/utils/bido-family-variant-utils.ts ***!
  \***********************************************************/
      /*! exports provided: BidoFamilyVariantUtils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'BidoFamilyVariantUtils', function() {
          return BidoFamilyVariantUtils;
        });
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );

        var BidoFamilyVariantUtils = /** @class */ (function() {
          function BidoFamilyVariantUtils() {}
          BidoFamilyVariantUtils.buildFamilyVariantCode = function(familyCode, variantCode) {
            if (
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isNullOrEmpty(familyCode) ||
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isNullOrEmpty(variantCode)
            ) {
              return undefined;
            } else {
              return familyCode + '-' + variantCode;
            }
          };
          BidoFamilyVariantUtils.getFamilyCodeFromFamilyVariantCode = function(familyVariantCode) {
            return !!familyVariantCode && familyVariantCode.indexOf('-') > -1
              ? familyVariantCode.substring(0, familyVariantCode.indexOf('-'))
              : undefined;
          };
          BidoFamilyVariantUtils.getVariantCodeFromFamilyVariantCode = function(familyVariantCode) {
            return !!familyVariantCode && familyVariantCode.indexOf('-') > -1
              ? familyVariantCode.substring(familyVariantCode.indexOf('-') + 1)
              : undefined;
          };
          return BidoFamilyVariantUtils;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=logistics-tools-maintenance-status-tools-maintenance-status-module.js.map
