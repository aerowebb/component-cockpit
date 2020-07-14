(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~fleet-management-asset-asset-module~fleet-management-fleet-management-module'],
  {
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

    /***/ './node_modules/primeng/fileupload.js':
      /*!********************************************!*\
  !*** ./node_modules/primeng/fileupload.js ***!
  \********************************************/
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
            /*! ./components/fileupload/fileupload */ './node_modules/primeng/components/fileupload/fileupload.js'
          )
        );

        /***/
      },

    /***/ './src/app/shared/components/dialog-measure-report/dialog-measure-report.component.html':
      /*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-measure-report/dialog-measure-report.component.html ***!
  \**********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group custom-padding">\r\n      <div class="form-control">\r\n        <textarea\r\n          readonly\r\n          class="aw-textarea"\r\n          [rows]="15"\r\n          [cols]="100"\r\n          pInputTextarea\r\n          [(ngModel)]="reportMessage"\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/dialog-measure-report/dialog-measure-report.component.scss':
      /*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-measure-report/dialog-measure-report.component.scss ***!
  \**********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .custom-padding {\n  padding-top: "1em"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nLW1lYXN1cmUtcmVwb3J0L2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGRpYWxvZy1tZWFzdXJlLXJlcG9ydFxcZGlhbG9nLW1lYXN1cmUtcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kaWFsb2ctbWVhc3VyZS1yZXBvcnQvZGlhbG9nLW1lYXN1cmUtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5jdXN0b20tcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogXCIxZW1cIjtcclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/shared/components/dialog-measure-report/dialog-measure-report.component.ts':
      /*!********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-measure-report/dialog-measure-report.component.ts ***!
  \********************************************************************************************/
      /*! exports provided: MeasureReportDialogComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MeasureReportDialogComponent',
          function() {
            return MeasureReportDialogComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
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

        var MeasureReportDialogComponent = /** @class */ (function(_super) {
          __extends(MeasureReportDialogComponent, _super);
          function MeasureReportDialogComponent() {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Read,
                'MeasureReportDialogComponent'
              ) || this;
            _this.reportMessage = '';
            return _this;
          }
          MeasureReportDialogComponent.prototype.ngOnInit = function() {
            return;
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            MeasureReportDialogComponent.prototype,
            'reportMessage',
            void 0
          );
          MeasureReportDialogComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-measure-report',
                template: __webpack_require__(
                  /*! ./dialog-measure-report.component.html */ './src/app/shared/components/dialog-measure-report/dialog-measure-report.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-measure-report.component.scss */ './src/app/shared/components/dialog-measure-report/dialog-measure-report.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            MeasureReportDialogComponent
          );
          return MeasureReportDialogComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-measure-report/dialog-measure-report.module.ts':
      /*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-measure-report/dialog-measure-report.module.ts ***!
  \*****************************************************************************************/
      /*! exports provided: DialogMeasureReportModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogMeasureReportModule',
          function() {
            return DialogMeasureReportModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! primeng/dialog */ './node_modules/primeng/dialog.js'
        );
        /* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dialog__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dialog_measure_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./dialog-measure-report.component */ './src/app/shared/components/dialog-measure-report/dialog-measure-report.component.ts'
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
        var EXTERNAL_MODULES = [primeng_dialog__WEBPACK_IMPORTED_MODULE_1__['DialogModule']];
        var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_5__['ModalModule']];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _dialog_measure_report_component__WEBPACK_IMPORTED_MODULE_6__['MeasureReportDialogComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [];
        var DialogMeasureReportModule = /** @class */ (function() {
          function DialogMeasureReportModule() {}
          DialogMeasureReportModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS),
                exports: __spread(COMPONENTS),
                imports: __spread(
                  [
                    _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__['AngularCommonSharedModule'],
                    _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__['AppCommonSharedModule']
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            DialogMeasureReportModule
          );
          return DialogMeasureReportModule;
        })();

        /***/
      },

    /***/ './src/app/shared/components/dialog-measure-update/dialog-measure-update.component.html':
      /*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-measure-update/dialog-measure-update.component.html ***!
  \**********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" width="50">\r\n  <a-header>\r\n    <div class="modal-title">\r\n      <span>{{ getComponentName() + ".titlePopup" | translate }}</span>\r\n      <div *ngIf="reportProcessing" class="lds-hourglass custom-float"></div>\r\n    </div>\r\n  </a-header>\r\n  <a-content>\r\n    <div class="grid-row">\r\n      <div class="grid-cell--12">\r\n        <div class="grid-row">\r\n          <div class="form-group">\r\n            <label class="form-label"> {{ getComponentName() + ".asset" | translate }} </label>\r\n            <div class="form-control">\r\n              <input type="text" class="aw-input" disabled [(ngModel)]="context" title="{{ context }}" />\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <label class="form-label"> {{ getComponentName() + ".counter" | translate }} </label>\r\n            <div class="form-control">\r\n              <input type="text" class="aw-input" disabled [(ngModel)]="measure.counterCode" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-row" *ngIf="!isDeltaMeasure && measure.counterUnit === hCounterUnitCode">\r\n          <div class="form-group">\r\n            <label class="form-label">&nbsp;</label>\r\n            <div class="form-control">\r\n              <p-selectButton\r\n                [options]="selectedFormatList"\r\n                [(ngModel)]="selectedFormat"\r\n                (onChange)="changeFormat()"\r\n              ></p-selectButton>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-row">\r\n          <div class="form-group required">\r\n            <label class="form-label">{{ getComponentName() + ".readingDate" | translate }}</label>\r\n            <div class="form-control">\r\n              <p-calendar\r\n                showButtonBar="true"\r\n                [monthNavigator]="true"\r\n                [yearNavigator]="true"\r\n                [yearRange]="sessionService.calendarYearRange"\r\n                showTime="true"\r\n                class="aw-calendar"\r\n                [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                [locale]="sessionService.calendarFormat"\r\n                [(ngModel)]="measure.counterDate"\r\n                appendTo="body"\r\n              ></p-calendar>\r\n            </div>\r\n          </div>\r\n          <div class="form-group required" *ngIf="isDeltaMeasure">\r\n            <label class="form-label"> {{ getComponentName() + ".value" | translate }} </label>\r\n            <div class="form-control class-flex">\r\n              <div class="column">\r\n                <input\r\n                  #counterDeltaVal="ngModel"\r\n                  type="text"\r\n                  class="aw-input"\r\n                  [(ngModel)]="counterDeltaValue"\r\n                  [pKeyFilter]="inputValidationService.validatorOfNumber()"\r\n                  [pValidateOnly]="true"\r\n                />\r\n                <p-message\r\n                  *ngIf="counterDeltaVal.invalid && (counterDeltaVal.dirty || counterDeltaVal.touched)"\r\n                  severity="error"\r\n                  [text]="inputValidationService.formatOfNumber()"\r\n                ></p-message>\r\n              </div>\r\n              <label class="span-padding"> {{ measure.counterUnit }} </label>\r\n            </div>\r\n          </div>\r\n          <div class="form-group" *ngIf="isDeltaMeasure"></div>\r\n          <div class="form-group required" *ngIf="!isDeltaMeasure && measure.counterUnit !== hCounterUnitCode">\r\n            <label class="form-label">\r\n              {{\r\n                isRatingValue\r\n                  ? (getComponentName() + ".counterValueRating" | translate)\r\n                  : (getComponentName() + ".counterValue" | translate)\r\n              }}\r\n              ({{ measure.counterCode }})\r\n            </label>\r\n            <div class="form-control class-flex">\r\n              <div class="column">\r\n                <input\r\n                  #counterVal="ngModel"\r\n                  type="text"\r\n                  class="aw-input"\r\n                  [(ngModel)]="counterValue"\r\n                  [pKeyFilter]="inputValidationService.validatorOfNumber()"\r\n                  [pValidateOnly]="true"\r\n                />\r\n                <p-message\r\n                  *ngIf="counterVal.invalid && (counterVal.dirty || counterVal.touched)"\r\n                  severity="error"\r\n                  [text]="inputValidationService.formatOfNumber()"\r\n                ></p-message>\r\n              </div>\r\n              <label class="span-padding"> {{ measure.counterUnit }} </label>\r\n            </div>\r\n          </div>\r\n          <div class="form-group required" *ngIf="!isDeltaMeasure && measure.counterUnit === hCounterUnitCode">\r\n            <label class="form-label">\r\n              {{\r\n                isRatingValue\r\n                  ? (getComponentName() + ".counterValueRating" | translate)\r\n                  : (getComponentName() + ".counterValue" | translate)\r\n              }}\r\n              ({{ measure.counterCode }})\r\n            </label>\r\n            <div class="form-control class-flex">\r\n              <div class="column" *ngIf="selectedFormat === formatHH">\r\n                <input\r\n                  #counterVal="ngModel"\r\n                  type="text"\r\n                  class="aw-input"\r\n                  [(ngModel)]="counterValue"\r\n                  [pKeyFilter]="inputValidationService.validatorOfNumber()"\r\n                  [pValidateOnly]="true"\r\n                />\r\n                <p-message\r\n                  *ngIf="counterVal.invalid && (counterVal.dirty || counterVal.touched)"\r\n                  severity="error"\r\n                  [text]="inputValidationService.formatOfNumber()"\r\n                ></p-message>\r\n              </div>\r\n              <label class="span-padding" *ngIf="selectedFormat === formatHH"> {{ measure.counterUnit }} </label>\r\n\r\n              <p-calendar\r\n                showButtonBar="true"\r\n                [monthNavigator]="true"\r\n                [yearNavigator]="true"\r\n                [yearRange]="sessionService.calendarYearRange"\r\n                class="aw-calendar"\r\n                *ngIf="selectedFormat === formatHHMM"\r\n                [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                [locale]="sessionService.calendarFormat"\r\n                [(ngModel)]="counterValueDate"\r\n                [timeOnly]="true"\r\n                appendTo="body"\r\n              ></p-calendar>\r\n              <label *ngIf="selectedFormat === formatHHMM"> {{ measure.counterUnit }} </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-row">\r\n          <div class="form-group" *ngIf="ratingVisibility">\r\n            <div class="grid-row">\r\n              <div class="form-group">\r\n                <label class="form-label">{{ getComponentName() + ".rating" | translate }}</label>\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [disabled]="isReadOnlyForm"\r\n                    [(ngModel)]="measure.ratingText"\r\n                    [options]="ratingsList"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n              <div class="form-group" *ngIf="counterOptionsVisibility && !isDeltaMeasure && ratingVisibility">\r\n                <label class="form-label"> {{ getComponentName() + ".isRatingValue" | translate }} </label>\r\n                <div class="form-control">\r\n                  <p-checkbox\r\n                    binary="true"\r\n                    class="aw-checkbox"\r\n                    [(ngModel)]="isRatingValue"\r\n                    [disabled]="isReadOnlyForm"\r\n                  ></p-checkbox>\r\n                </div>\r\n              </div>\r\n              <div class="form-group">\r\n                <label class="form-label">&nbsp;</label>\r\n                <div class="form-control">\r\n                  <button type="button" mat-raised-button (click)="findRating()">\r\n                    {{ getComponentName() + ".findRating" | translate }}\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-row" *ngIf="counterOptionsVisibility">\r\n          <div class="form-group">\r\n            <label class="form-label"> {{ getComponentName() + ".propagate" | translate }} </label>\r\n            <div class="form-control">\r\n              <p-checkbox\r\n                binary="true"\r\n                class="aw-checkbox"\r\n                [(ngModel)]="propagate"\r\n                [disabled]="isReadOnlyForm"\r\n              ></p-checkbox>\r\n            </div>\r\n          </div>\r\n          <div class="form-group" *ngIf="propagate">\r\n            <label class="form-label"> {{ getComponentName() + ".simulate" | translate }} </label>\r\n            <div class="form-control">\r\n              <p-checkbox\r\n                binary="true"\r\n                class="aw-checkbox"\r\n                [(ngModel)]="measurePropagationOptionsDTO.simulation"\r\n                [disabled]="isReadOnlyForm"\r\n              ></p-checkbox>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group" *ngIf="counterOptionsVisibility">\r\n            <label class="form-label"> {{ getComponentName() + ".isDeltaMeasure" | translate }} </label>\r\n            <div class="form-control">\r\n              <p-checkbox\r\n                binary="true"\r\n                class="aw-checkbox"\r\n                [(ngModel)]="isDeltaMeasure"\r\n                [disabled]="isReadOnlyForm"\r\n                (click)="onDeltaToogle()"\r\n              ></p-checkbox>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="grid-row">\r\n          <div class="form-group ">\r\n            <label class="form-label">{{ getComponentName() + ".comment" | translate }}</label>\r\n            <div class="form-control text-area">\r\n              <textarea\r\n                class="aw-textarea"\r\n                [rows]="3"\r\n                pInputTextarea\r\n                [(ngModel)]="measure.comment"\r\n                [disabled]="isReadOnlyForm"\r\n              ></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-row" *ngIf="counterOptionsVisibility">\r\n          <div class="grid-cell--6">\r\n            <div class="form-group">\r\n              <label class="form-label"> {{ getComponentName() + ".mesureInsertion" | translate }} </label>\r\n              <div class="form-control">\r\n                <p-checkbox\r\n                  binary="true"\r\n                  class="aw-checkbox"\r\n                  [(ngModel)]="measurePropagationOptionsDTO.allowInsertionBeforeExistingValue"\r\n                  [disabled]="isReadOnlyForm"\r\n                ></p-checkbox>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="grid-cell--6">\r\n            <div class="form-group">\r\n              <label class="form-label"> {{ getComponentName() + ".readingEqualsOrSmaller" | translate }} </label>\r\n              <div class="form-control">\r\n                <p-checkbox\r\n                  binary="true"\r\n                  class="aw-checkbox"\r\n                  [(ngModel)]="measurePropagationOptionsDTO.allowMeasureReadingSmallerThanPrevious"\r\n                  [disabled]="isReadOnlyForm"\r\n                ></p-checkbox>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="grid-row" *ngIf="counterOptionsVisibility">\r\n          <div class="grid-cell--6">\r\n            <div class="form-group">\r\n              <label class="form-label"> {{ getComponentName() + ".readingGreater" | translate }} </label>\r\n              <div class="form-control">\r\n                <p-checkbox\r\n                  binary="true"\r\n                  class="aw-checkbox"\r\n                  [(ngModel)]="measurePropagationOptionsDTO.allowMeasureReadingGreatherThanPreviousPlusXValue"\r\n                  [disabled]="isReadOnlyForm"\r\n                ></p-checkbox>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="grid-cell--6">\r\n            <div class="form-group" *ngIf="propagate">\r\n              <label class="form-label"> {{ getComponentName() + ".associatedMissionEvent" | translate }} </label>\r\n              <div class="form-control">\r\n                <p-checkbox\r\n                  binary="true"\r\n                  class="aw-checkbox"\r\n                  [(ngModel)]="measurePropagationOptionsDTO.createEvent"\r\n                  [disabled]="isReadOnlyForm"\r\n                ></p-checkbox>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="onHide()">\r\n      {{ "global.cancel" | translate }}\r\n    </button>\r\n\r\n    <button type="button" color="primary" mat-raised-button (click)="onValidate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-measure-report\r\n  *ngIf="showMeasureReportText"\r\n  [(display)]="showMeasureReportText"\r\n  [reportMessage]="measureReportText"\r\n></aw-dialog-measure-report>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/dialog-measure-update/dialog-measure-update.component.scss':
      /*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-measure-update/dialog-measure-update.component.scss ***!
  \**********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host #popup-content .general-tab {\n  display: flex;\n  flex-direction: column; }\n  :host #popup-content .general-tab .general-fields {\n    display: flex;\n    flex-direction: row;\n    width: 100%; }\n  :host #popup-content .general-tab .general-fields .general-field {\n      width: 10rem; }\n  :host #popup-content .general-tab .general-fields .general-field .aw-checkbox {\n        margin-top: 3px;\n        margin-bottom: 3px; }\n  :host #popup-content .general-tab .general-fields .general-field .popup-dropdown {\n        width: 222px; }\n  :host #popup-content .general-tab .general-fields .general-field .group-opt {\n        width: 222px; }\n  :host #popup-content .general-tab .general-fields .opt-field {\n      margin-left: 30px;\n      width: 180px; }\n  :host #popup-content .general-tab .general-fields .opt-field .aw-checkbox {\n        margin-bottom: 3px; }\n  :host #popup-content .general-tab .general-fields .opt-field .aw-input-group-popup {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap; }\n  :host #popup-content .general-tab .general-fields .opt-field .aw-input-group-popup .input-opt {\n          width: 140px; }\n  :host #popup-content .general-tab .general-fields .location-container {\n      display: flex;\n      flex-direction: row; }\n  :host #popup-content .general-tab .general-fields .evolution-form-group {\n      /*&:first-of-type {\r\n                        padding-right: 60px;\r\n                    }*/ }\n  :host #popup-content .general-tab .general-fields .evolution-form-group > div {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        padding-left: 65px; }\n  :host #popup-content .general-tab .general-fields > div {\n      display: flex;\n      flex-direction: column;\n      width: 100%; }\n  :host #popup-content .general-tab .general-fields .aw-input-group-popup {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap; }\n  :host #popup-content .general-tab .general-tables {\n    display: flex;\n    flex-direction: column;\n    padding-top: 24px; }\n  :host #popup-content .general-tab .general-tables .row {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap; }\n  :host #popup-content .general-tab .general-tables .row:first-of-type {\n        margin-bottom: 24px; }\n  :host #popup-content .general-tab .general-tables .row:nth-of-type(2) {\n        margin-bottom: 24px; }\n  :host #popup-content .general-tab .general-tables .row .table-wrapper {\n        width: 50%; }\n  :host #popup-content .general-tab .general-tables .row .table-wrapper-large {\n        width: 100%; }\n  :host #popup-content .general-tab .general-tables .row .table-wrapper:first-of-type,\n      :host #popup-content .general-tab .general-tables .row .table-wrapper-large:first-of-type {\n        padding-right: 24px; }\n  :host #popup-content .general-tab .general-tables .row .table-wrapper:nth-of-type(2),\n      :host #popup-content .general-tab .general-tables .row .table-wrapper-large:nth-of-type(2) {\n        padding-left: 24px; }\n  :host .page-content .main-data {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n  :host .page-content .main-data .form-group {\n    margin-right: 20px;\n    width: 20%; }\n  :host .page-content .main-data .form-group:last-of-type {\n      margin-right: 0; }\n  :host .page-content .general-tab {\n  display: flex;\n  flex-direction: column; }\n  :host .page-content .general-tab .bp-fields {\n    display: flex;\n    flex-direction: row;\n    width: 100%; }\n  :host .page-content .general-tab .bp-fields .label-comment {\n      margin-top: 17px; }\n  :host .page-content .general-tab .bp-fields .bp-field {\n      width: 12rem; }\n  :host .page-content .general-tab .bp-fields > div {\n      display: flex;\n      flex-direction: column;\n      width: 50%; }\n  :host .page-content .general-tab .bp-fields > div:first-of-type {\n        margin-right: 20px; }\n  :host .page-content .general-tab .bp-fields > div:nth-of-type(2) {\n        margin-left: 20px; }\n  :host .page-content .general-tab .tables {\n    display: flex;\n    flex-direction: row; }\n  :host .page-content .general-tab .tables > div:first-of-type,\n    :host .page-content .general-tab .tables > div:nth-of-type(2) {\n      width: 30%; }\n  :host .page-content .general-tab .tables > div:first-of-type {\n      padding-right: 20px; }\n  :host .page-content .general-tab .tables > div:nth-of-type(2) {\n      padding-left: 20px;\n      padding-right: 20px; }\n  :host .page-content .general-tab .tables > div:nth-of-type(3) {\n      width: 40%;\n      padding-left: 20px; }\n  :host .custom-float {\n  float: right; }\n  :host .class-flex {\n  display: inline-flex !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nLW1lYXN1cmUtdXBkYXRlL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGRpYWxvZy1tZWFzdXJlLXVwZGF0ZVxcZGlhbG9nLW1lYXN1cmUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kaWFsb2ctbWVhc3VyZS11cGRhdGUvZGlhbG9nLW1lYXN1cmUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR00sYUFBYTtFQUNiLHNCQUFzQixFQUFBO0VBSjVCO0lBT1EsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXLEVBQUE7RUFUbkI7TUFZVSxZQUFZLEVBQUE7RUFadEI7UUFlWSxlQUFlO1FBQ2Ysa0JBQWtCLEVBQUE7RUFoQjlCO1FBb0JZLFlBQVksRUFBQTtFQXBCeEI7UUF3QlksWUFBWSxFQUFBO0VBeEJ4QjtNQThCVSxpQkFBaUI7TUFDakIsWUFBWSxFQUFBO0VBL0J0QjtRQWtDWSxrQkFBa0IsRUFBQTtFQWxDOUI7UUFzQ1ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixlQUFlLEVBQUE7RUF4QzNCO1VBMkNjLFlBQVksRUFBQTtFQTNDMUI7TUFpRFUsYUFBYTtNQUNiLG1CQUFtQixFQUFBO0VBbEQ3QjtNQTZEVTs7c0JDNUJZLEVEOEJDO0VBL0R2QjtRQXVEWSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxrQkFBa0IsRUFBQTtFQTFEOUI7TUFtRVUsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixXQUFXLEVBQUE7RUFyRXJCO01BeUVVLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZUFBZSxFQUFBO0VBM0V6QjtJQWdGUSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQixFQUFBO0VBbEZ6QjtNQXFGVSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGVBQWUsRUFBQTtFQXZGekI7UUEwRlksbUJBQW1CLEVBQUE7RUExRi9CO1FBOEZZLG1CQUFtQixFQUFBO0VBOUYvQjtRQWtHWSxVQUFVLEVBQUE7RUFsR3RCO1FBc0dZLFdBQVcsRUFBQTtFQXRHdkI7O1FBNEdjLG1CQUFtQixFQUFBO0VBNUdqQzs7UUFnSGMsa0JBQWtCLEVBQUE7RUFoSGhDO0VBMEhNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBO0VBNUhyQjtJQStIUSxrQkFBa0I7SUFDbEIsVUFBVSxFQUFBO0VBaElsQjtNQW1JVSxlQUFlLEVBQUE7RUFuSXpCO0VBeUlNLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQTFJNUI7SUE2SVEsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXLEVBQUE7RUEvSW5CO01Ba0pVLGdCQUFnQixFQUFBO0VBbEoxQjtNQXNKVSxZQUFZLEVBQUE7RUF0SnRCO01BMEpVLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsVUFBVSxFQUFBO0VBNUpwQjtRQStKWSxrQkFBa0IsRUFBQTtFQS9KOUI7UUFtS1ksaUJBQWlCLEVBQUE7RUFuSzdCO0lBeUtRLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFQTFLM0I7O01BOEtVLFVBQVUsRUFBQTtFQTlLcEI7TUFrTFUsbUJBQW1CLEVBQUE7RUFsTDdCO01Bc0xVLGtCQUFrQjtNQUNsQixtQkFBbUIsRUFBQTtFQXZMN0I7TUEyTFUsVUFBVTtNQUNWLGtCQUFrQixFQUFBO0VBNUw1QjtFQW1NSSxZQUFZLEVBQUE7RUFuTWhCO0VBdU1JLCtCQUErQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nLW1lYXN1cmUtdXBkYXRlL2RpYWxvZy1tZWFzdXJlLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAjcG9wdXAtY29udGVudCB7XHJcbiAgICAuZ2VuZXJhbC10YWIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLmdlbmVyYWwtZmllbGRzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5nZW5lcmFsLWZpZWxkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMHJlbTtcclxuXHJcbiAgICAgICAgICAuYXctY2hlY2tib3gge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucG9wdXAtZHJvcGRvd24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjIycHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmdyb3VwLW9wdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMjJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5vcHQtZmllbGQge1xyXG4gICAgICAgICAgLy93aWR0aDogOHJlbTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG5cclxuICAgICAgICAgIC5hdy1jaGVja2JveCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXctaW5wdXQtZ3JvdXAtcG9wdXAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgICAuaW5wdXQtb3B0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2NhdGlvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZXZvbHV0aW9uLWZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgJiA+IGRpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDY1cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyomOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiA+IGRpdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmF3LWlucHV0LWdyb3VwLXBvcHVwIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmdlbmVyYWwtdGFibGVzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI0cHg7XHJcblxyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGFibGUtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRhYmxlLXdyYXBwZXItbGFyZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGFibGUtd3JhcHBlcixcclxuICAgICAgICAgIC50YWJsZS13cmFwcGVyLWxhcmdlIHtcclxuICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgLm1haW4tZGF0YSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuXHJcbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5nZW5lcmFsLXRhYiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAuYnAtZmllbGRzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5sYWJlbC1jb21tZW50IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnAtZmllbGQge1xyXG4gICAgICAgICAgd2lkdGg6IDEycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiA+IGRpdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50YWJsZXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgJiA+IGRpdjpmaXJzdC1vZi10eXBlLFxyXG4gICAgICAgICYgPiBkaXY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiA+IGRpdjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiA+IGRpdjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1mbG9hdCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuY2xhc3MtZmxleCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCAjcG9wdXAtY29udGVudCAuZ2VuZXJhbC10YWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIDpob3N0ICNwb3B1cC1jb250ZW50IC5nZW5lcmFsLXRhYiAuZ2VuZXJhbC1maWVsZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTsgfVxuICAgIDpob3N0ICNwb3B1cC1jb250ZW50IC5nZW5lcmFsLXRhYiAuZ2VuZXJhbC1maWVsZHMgLmdlbmVyYWwtZmllbGQge1xuICAgICAgd2lkdGg6IDEwcmVtOyB9XG4gICAgICA6aG9zdCAjcG9wdXAtY29udGVudCAuZ2VuZXJhbC10YWIgLmdlbmVyYWwtZmllbGRzIC5nZW5lcmFsLWZpZWxkIC5hdy1jaGVja2JveCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4OyB9XG4gICAgICA6aG9zdCAjcG9wdXAtY29udGVudCAuZ2VuZXJhbC10YWIgLmdlbmVyYWwtZmllbGRzIC5nZW5lcmFsLWZpZWxkIC5wb3B1cC1kcm9wZG93biB7XG4gICAgICAgIHdpZHRoOiAyMjJweDsgfVxuICAgICAgOmhvc3QgI3BvcHVwLWNvbnRlbnQgLmdlbmVyYWwtdGFiIC5nZW5lcmFsLWZpZWxkcyAuZ2VuZXJhbC1maWVsZCAuZ3JvdXAtb3B0IHtcbiAgICAgICAgd2lkdGg6IDIyMnB4OyB9XG4gICAgOmhvc3QgI3BvcHVwLWNvbnRlbnQgLmdlbmVyYWwtdGFiIC5nZW5lcmFsLWZpZWxkcyAub3B0LWZpZWxkIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgd2lkdGg6IDE4MHB4OyB9XG4gICAgICA6aG9zdCAjcG9wdXAtY29udGVudCAuZ2VuZXJhbC10YWIgLmdlbmVyYWwtZmllbGRzIC5vcHQtZmllbGQgLmF3LWNoZWNrYm94IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4OyB9XG4gICAgICA6aG9zdCAjcG9wdXAtY29udGVudCAuZ2VuZXJhbC10YWIgLmdlbmVyYWwtZmllbGRzIC5vcHQtZmllbGQgLmF3LWlucHV0LWdyb3VwLXBvcHVwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwOyB9XG4gICAgICAgIDpob3N0ICNwb3B1cC1jb250ZW50IC5nZW5lcmFsLXRhYiAuZ2VuZXJhbC1maWVsZHMgLm9wdC1maWVsZCAuYXctaW5wdXQtZ3JvdXAtcG9wdXAgLmlucHV0LW9wdCB7XG4gICAgICAgICAgd2lkdGg6IDE0MHB4OyB9XG4gICAgOmhvc3QgI3BvcHVwLWNvbnRlbnQgLmdlbmVyYWwtdGFiIC5nZW5lcmFsLWZpZWxkcyAubG9jYXRpb24tY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XG4gICAgOmhvc3QgI3BvcHVwLWNvbnRlbnQgLmdlbmVyYWwtdGFiIC5nZW5lcmFsLWZpZWxkcyAuZXZvbHV0aW9uLWZvcm0tZ3JvdXAge1xuICAgICAgLyomOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH0qLyB9XG4gICAgICA6aG9zdCAjcG9wdXAtY29udGVudCAuZ2VuZXJhbC10YWIgLmdlbmVyYWwtZmllbGRzIC5ldm9sdXRpb24tZm9ybS1ncm91cCA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDY1cHg7IH1cbiAgICA6aG9zdCAjcG9wdXAtY29udGVudCAuZ2VuZXJhbC10YWIgLmdlbmVyYWwtZmllbGRzID4gZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICA6aG9zdCAjcG9wdXAtY29udGVudCAuZ2VuZXJhbC10YWIgLmdlbmVyYWwtZmllbGRzIC5hdy1pbnB1dC1ncm91cC1wb3B1cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZsZXgtd3JhcDogd3JhcDsgfVxuICA6aG9zdCAjcG9wdXAtY29udGVudCAuZ2VuZXJhbC10YWIgLmdlbmVyYWwtdGFibGVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy10b3A6IDI0cHg7IH1cbiAgICA6aG9zdCAjcG9wdXAtY29udGVudCAuZ2VuZXJhbC10YWIgLmdlbmVyYWwtdGFibGVzIC5yb3cge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7IH1cbiAgICAgIDpob3N0ICNwb3B1cC1jb250ZW50IC5nZW5lcmFsLXRhYiAuZ2VuZXJhbC10YWJsZXMgLnJvdzpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxuICAgICAgOmhvc3QgI3BvcHVwLWNvbnRlbnQgLmdlbmVyYWwtdGFiIC5nZW5lcmFsLXRhYmxlcyAucm93Om50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxuICAgICAgOmhvc3QgI3BvcHVwLWNvbnRlbnQgLmdlbmVyYWwtdGFiIC5nZW5lcmFsLXRhYmxlcyAucm93IC50YWJsZS13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDUwJTsgfVxuICAgICAgOmhvc3QgI3BvcHVwLWNvbnRlbnQgLmdlbmVyYWwtdGFiIC5nZW5lcmFsLXRhYmxlcyAucm93IC50YWJsZS13cmFwcGVyLWxhcmdlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAgIDpob3N0ICNwb3B1cC1jb250ZW50IC5nZW5lcmFsLXRhYiAuZ2VuZXJhbC10YWJsZXMgLnJvdyAudGFibGUtd3JhcHBlcjpmaXJzdC1vZi10eXBlLFxuICAgICAgOmhvc3QgI3BvcHVwLWNvbnRlbnQgLmdlbmVyYWwtdGFiIC5nZW5lcmFsLXRhYmxlcyAucm93IC50YWJsZS13cmFwcGVyLWxhcmdlOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4OyB9XG4gICAgICA6aG9zdCAjcG9wdXAtY29udGVudCAuZ2VuZXJhbC10YWIgLmdlbmVyYWwtdGFibGVzIC5yb3cgLnRhYmxlLXdyYXBwZXI6bnRoLW9mLXR5cGUoMiksXG4gICAgICA6aG9zdCAjcG9wdXAtY29udGVudCAuZ2VuZXJhbC10YWIgLmdlbmVyYWwtdGFibGVzIC5yb3cgLnRhYmxlLXdyYXBwZXItbGFyZ2U6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7IH1cblxuOmhvc3QgLnBhZ2UtY29udGVudCAubWFpbi1kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwOyB9XG4gIDpob3N0IC5wYWdlLWNvbnRlbnQgLm1haW4tZGF0YSAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMCU7IH1cbiAgICA6aG9zdCAucGFnZS1jb250ZW50IC5tYWluLWRhdGEgLmZvcm0tZ3JvdXA6bGFzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxuXG46aG9zdCAucGFnZS1jb250ZW50IC5nZW5lcmFsLXRhYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgOmhvc3QgLnBhZ2UtY29udGVudCAuZ2VuZXJhbC10YWIgLmJwLWZpZWxkcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgOmhvc3QgLnBhZ2UtY29udGVudCAuZ2VuZXJhbC10YWIgLmJwLWZpZWxkcyAubGFiZWwtY29tbWVudCB7XG4gICAgICBtYXJnaW4tdG9wOiAxN3B4OyB9XG4gICAgOmhvc3QgLnBhZ2UtY29udGVudCAuZ2VuZXJhbC10YWIgLmJwLWZpZWxkcyAuYnAtZmllbGQge1xuICAgICAgd2lkdGg6IDEycmVtOyB9XG4gICAgOmhvc3QgLnBhZ2UtY29udGVudCAuZ2VuZXJhbC10YWIgLmJwLWZpZWxkcyA+IGRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiA1MCU7IH1cbiAgICAgIDpob3N0IC5wYWdlLWNvbnRlbnQgLmdlbmVyYWwtdGFiIC5icC1maWVsZHMgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDsgfVxuICAgICAgOmhvc3QgLnBhZ2UtY29udGVudCAuZ2VuZXJhbC10YWIgLmJwLWZpZWxkcyA+IGRpdjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyB9XG4gIDpob3N0IC5wYWdlLWNvbnRlbnQgLmdlbmVyYWwtdGFiIC50YWJsZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxuICAgIDpob3N0IC5wYWdlLWNvbnRlbnQgLmdlbmVyYWwtdGFiIC50YWJsZXMgPiBkaXY6Zmlyc3Qtb2YtdHlwZSxcbiAgICA6aG9zdCAucGFnZS1jb250ZW50IC5nZW5lcmFsLXRhYiAudGFibGVzID4gZGl2Om50aC1vZi10eXBlKDIpIHtcbiAgICAgIHdpZHRoOiAzMCU7IH1cbiAgICA6aG9zdCAucGFnZS1jb250ZW50IC5nZW5lcmFsLXRhYiAudGFibGVzID4gZGl2OmZpcnN0LW9mLXR5cGUge1xuICAgICAgcGFkZGluZy1yaWdodDogMjBweDsgfVxuICAgIDpob3N0IC5wYWdlLWNvbnRlbnQgLmdlbmVyYWwtdGFiIC50YWJsZXMgPiBkaXY6bnRoLW9mLXR5cGUoMikge1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMjBweDsgfVxuICAgIDpob3N0IC5wYWdlLWNvbnRlbnQgLmdlbmVyYWwtdGFiIC50YWJsZXMgPiBkaXY6bnRoLW9mLXR5cGUoMykge1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDsgfVxuXG46aG9zdCAuY3VzdG9tLWZsb2F0IHtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbjpob3N0IC5jbGFzcy1mbGV4IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDsgfVxuIl19 */';

        /***/
      },

    /***/ './src/app/shared/components/dialog-measure-update/dialog-measure-update.component.ts':
      /*!********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-measure-update/dialog-measure-update.component.ts ***!
  \********************************************************************************************/
      /*! exports provided: DialogMeasureUpdateComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogMeasureUpdateComponent',
          function() {
            return DialogMeasureUpdateComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/services/input-validation.service */ './src/app/shared/services/input-validation.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _dialog_measure_update_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./dialog-measure-update.service */ './src/app/shared/components/dialog-measure-update/dialog-measure-update.service.ts'
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

        var DialogMeasureUpdateComponent = /** @class */ (function(_super) {
          __extends(DialogMeasureUpdateComponent, _super);
          function DialogMeasureUpdateComponent(
            inputValidationService,
            measureUpdatePopupFormService,
            sessionService,
            messageService,
            confirmationService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'DialogMeasureUpdateComponent'
              ) || this;
            _this.inputValidationService = inputValidationService;
            _this.measureUpdatePopupFormService = measureUpdatePopupFormService;
            _this.sessionService = sessionService;
            _this.messageService = messageService;
            _this.confirmationService = confirmationService;
            _this.hCounterUnitCode = 'H';
            _this.formatHH = '0';
            _this.formatHHMM = '1';
            _this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onReport = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.selectedBireMeasureReferenceDTO = {};
            _this.isOtherCounterVisible = false;
            _this.followedInRatingVisibility = false;
            _this.ratingVisibility = false;
            _this.isRatingRequired = false;
            _this.ratingsList = [];
            _this.propertyMeasureCode = [];
            _this.measure = {};
            _this.counterMap = new Map();
            _this.keyMap = new Map();
            _this.showRatings = false;
            _this.propagate = true;
            _this.simulate = false;
            _this.measurePropagationOptionsDTO = {
              allowInsertionBeforeExistingValue: false,
              allowMeasureReadingGreatherThanPreviousPlusXValue: false,
              allowMeasureReadingSmallerThanPrevious: false,
              createEvent: false,
              simulation: false
            };
            _this.counterOptionsVisibility = true;
            _this.measureReportText = '';
            _this.showMeasureReportText = false;
            _this.reportProcessing = false;
            return _this;
          }
          DialogMeasureUpdateComponent.prototype.ngOnInit = function() {
            if (
              this.componentData &&
              !!this.componentData.object &&
              this.componentData.componentId &&
              this.componentData.componentId.length > 0
            ) {
              this.measure = this.componentData.object;
              this.measure.counterDate = this.dateEvent || this.measure.counterDate;
              if (this.measure && this.measure.counterDate) {
                this.readingHours = this.measure.counterDate.getHours().toString();
                this.readingMin = this.measure.counterDate.getMinutes().toString();
              }
              if (this.measure.ratingCounterValue !== null && this.measure.ratingCounterValue !== undefined) {
                this.counterValue = this.measure.ratingCounterValue;
              } else {
                this.counterValue =
                  this.measure.cumulatedCounterValue !== null && this.measure.cumulatedCounterValue !== undefined
                    ? this.measure.cumulatedCounterValue
                    : undefined;
              }
              this.loadCounterCode();
              this.loadRatings();
            }
            this.selectedFormatList = [
              {
                label: 'HH.dec',
                value: this.formatHH
              },
              {
                label: 'HH:mm',
                value: this.formatHHMM
              }
            ];
            this.selectedFormat = this.formatHH;
          };
          DialogMeasureUpdateComponent.prototype.loadCounterCode = function() {
            var _this = this;
            this.measureUpdatePopupFormService.findAllBireMeasureReferences().subscribe(function(results) {
              var list = results.filter(function(obj) {
                return (
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                    .REF_MEASURE_CATEGORY_USAGE_KEY !== obj.mrCategory &&
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                    .REF_MEASURE_CATEGORY_USAGE_STORAGE_KEY !== obj.mrCategory &&
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                    .REF_MEASURE_CATEGORY_STORAGE_KEY !== obj.mrCategory
                );
              });
              list.forEach(function(element) {
                var labelValue = {
                  label: !!element.counterCode ? element.counterCode : '',
                  value: !!element.counterCode ? element.counterCode : ''
                };
                if (!!element.counterCode && !!element.unitCode) {
                  _this.counterMap.set(element.counterCode, element.unitCode);
                }
                _this.propertyMeasureCode.push(labelValue);
              });
              _this.selectedBireMeasureReferenceDTO = list.filter(function(obj) {
                return obj.counterCode === _this.measure.counterCode;
              })[0];
              _this.setCounters(list);
              _this.getRatingDataVisibility();
            });
          };
          DialogMeasureUpdateComponent.prototype.setCounters = function(list) {
            var otherCounterToSearch = this.measure.counterCode && this.measure.counterCode.substring(1);
            for (var i = 0; i < list.length; i++) {
              var counterCode = list[i].counterCode || '';
              if (this.measure.counterCode !== counterCode && otherCounterToSearch === counterCode.substring(1)) {
                this.isOtherCounterVisible = true;
                this.otherBireMeasureReferenceDTO = list[i];
                break;
              }
            }
          };
          DialogMeasureUpdateComponent.prototype.getUnitCode = function() {
            this.measure.counterUnit =
              !!this.measure && !!this.measure.counterUnit ? this.counterMap.get(this.measure.counterUnit) : '';
          };
          DialogMeasureUpdateComponent.prototype.onHide = function() {
            this.measure = {};
            this.display = false;
          };
          DialogMeasureUpdateComponent.prototype.onClose = function() {
            this.measure = {};
            this.display = false;
            this.onUpdate.emit(this.measure);
          };
          DialogMeasureUpdateComponent.prototype.onValidate = function() {
            var _this = this;
            if (this.measure) {
              if (!this.measure.counterDate) {
                this.messageService.showErrorMessage(this.getTranslateKey('missingDate'));
                return;
              }
              if (
                this.isDeltaMeasure &&
                (this.counterDeltaValue === null ||
                  this.counterDeltaValue === undefined ||
                  this.counterDeltaValue.trim() === '')
              ) {
                this.messageService.showErrorMessage(this.getTranslateKey('missingDeltaValue'));
                return;
              }
              if (!this.isDeltaMeasure) {
                if (this.measure.counterUnit === this.hCounterUnitCode) {
                  if (
                    this.selectedFormat === this.formatHH &&
                    (this.counterValue === null || this.counterValue === undefined || this.counterValue.trim() === '')
                  ) {
                    this.messageService.showErrorMessage(this.getTranslateKey('missingValue'));
                    return;
                  } else if (this.selectedFormat === this.formatHHMM) {
                    if (this.counterValueDate === null || this.counterValueDate === undefined) {
                      this.messageService.showErrorMessage(this.getTranslateKey('missingValue'));
                      return;
                    } else {
                      var COUNT = 100;
                      var SEC = 60;
                      // Convert HH:mm to HH.dec
                      this.counterValue =
                        this.counterValueDate.getHours() +
                        '.' +
                        Math.floor((this.counterValueDate.getMinutes() * COUNT) / SEC);
                    }
                  }
                } else {
                  if (
                    this.counterValue === null ||
                    this.counterValue === undefined ||
                    this.counterValue.trim() === ''
                  ) {
                    this.messageService.showErrorMessage(this.getTranslateKey('missingValue'));
                    return;
                  }
                }
              }
              if (this.counterOptionsVisibility && this.propagate && !this.measurePropagationOptionsDTO.simulation) {
                this.confirmationService.confirm({
                  messageKey: this.getTranslateKey('confirmValidate'),
                  accept: function() {
                    _this.saveData();
                  }
                });
              } else {
                this.saveData();
              }
            }
          };
          DialogMeasureUpdateComponent.prototype.saveData = function() {
            var _this = this;
            if (this.counterOptionsVisibility && this.propagate) {
              var measurePropagationReportInput_1 = {};
              measurePropagationReportInput_1.equipmentCode = this.equipment && this.equipment.equipmentCode;
              measurePropagationReportInput_1.familyCode = this.measure.familyCode;
              measurePropagationReportInput_1.isSimulation = !!this.measurePropagationOptionsDTO.simulation;
              measurePropagationReportInput_1.options = this.measurePropagationOptionsDTO;
              measurePropagationReportInput_1.ratingCode = this.measure.ratingCode;
              measurePropagationReportInput_1.isDiff = !!this.isDeltaMeasure;
              measurePropagationReportInput_1.interRatingValue = !!this.isRatingValue;
              measurePropagationReportInput_1.options.measureComment = this.measure.comment;
              measurePropagationReportInput_1.options.measureSource = this.measure.source;
              measurePropagationReportInput_1.valuePerCounterCodeMap = this.getValuePerCounterCodeMapForPropagation();
              measurePropagationReportInput_1.readingDate = this.getReadingDate();
              this.reportProcessing = true;
              this.measureUpdatePopupFormService.wdPropagateMeasures(measurePropagationReportInput_1).subscribe(
                function(result) {
                  if (result) {
                    if (_this.isRatingValue) {
                      _this.measure.ratingCounterValue = _this.counterValue;
                      _this.measure.cumulatedCounterValue = _this.counterValue;
                    } else {
                      _this.measure.cumulatedCounterValue = _this.isDeltaMeasure
                        ? _this.counterDeltaValue
                        : _this.counterValue;
                    }
                    _this.onUpdate.emit(_this.measure);
                    if (measurePropagationReportInput_1.isSimulation) {
                      _this.showMeasureReportText = true;
                      _this.measureReportText = result;
                    } else {
                      _this.onReport.emit(result);
                    }
                  }
                  _this.reportProcessing = false;
                },
                function(err) {
                  if (err && err.error && err.error.errorDesc) {
                    _this.messageService.showErrorMessage(err.error.errorDesc);
                  }
                  _this.reportProcessing = false;
                }
              );
            } else {
              if (this.isDeltaMeasure) {
                this.counterOtherValue = undefined;
                this.counterValue = undefined;
              } else {
                this.counterDeltaValue = undefined;
              }
              var saveBidoMeasureInputDTO = {
                allowInsertionBeforeExistingValue: this.measurePropagationOptionsDTO.allowInsertionBeforeExistingValue,
                allowMeasureReadingGreatherThanPreviousPlusXValue: this.measurePropagationOptionsDTO
                  .allowMeasureReadingGreatherThanPreviousPlusXValue,
                allowMeasureReadingSmallerThanPrevious: this.measurePropagationOptionsDTO
                  .allowMeasureReadingSmallerThanPrevious,
                interRatingValue: !!this.isRatingValue,
                isCounter: !!this.selectedBireMeasureReferenceDTO.isCounter,
                isOtherCounter: this.isDeltaMeasure ? false : this.isOtherCounterVisible,
                isOtherCounterCode: this.otherBireMeasureReferenceDTO
                  ? this.otherBireMeasureReferenceDTO.counterCode
                  : undefined,
                isOtherCounterValue:
                  this.counterOtherValue !== null && this.counterOtherValue !== undefined
                    ? this.counterOtherValue
                    : undefined,
                bidoMeasureDTO: {
                  counterCode: this.measure.counterCode,
                  equipmentCode: this.equipment && this.equipment.equipmentCode,
                  delta:
                    this.counterDeltaValue !== null && this.counterDeltaValue !== undefined
                      ? this.counterDeltaValue
                      : undefined,
                  familyCode: this.measure.familyCode,
                  ratingCode: this.measure.ratingCode,
                  readingDate: this.getReadingDate(),
                  isDiff: this.isDeltaMeasure,
                  measureDescription: this.measure.comment,
                  value: this.counterValue !== null && this.counterValue !== undefined ? this.counterValue : undefined
                }
              };
              this.measureUpdatePopupFormService.addMeasure(saveBidoMeasureInputDTO).subscribe(
                function() {
                  if (_this.isRatingValue) {
                    _this.measure.cumulatedCounterValue = _this.counterValue;
                    _this.measure.ratingCounterValue = _this.counterValue;
                  } else {
                    _this.measure.cumulatedCounterValue = _this.counterValue;
                    _this.measure.ratingCounterValue = _this.measure.cumulatedCounterValue;
                  }
                  _this.onUpdate.emit(_this.measure);
                  _this.display = false;
                },
                function(err) {
                  if (err && err.error && err.error.errorDesc) {
                    _this.messageService.showErrorMessage(err.error.errorDesc);
                  }
                }
              );
            }
          };
          DialogMeasureUpdateComponent.prototype.getReadingDate = function() {
            return this.measure.counterDate;
          };
          DialogMeasureUpdateComponent.prototype.loadRatings = function() {
            var _this = this;
            var bidoEquipmentCounterDTOId = {
              counterCode: this.measure.counterCode,
              equipmentCode: this.measure.bidoEquipmentCounterDto && this.measure.bidoEquipmentCounterDto.equipmentCode,
              familyCode: this.measure.familyCode,
              ratingCode: ''
            };
            this.measureUpdatePopupFormService
              .findBidoRatingsForMeasure(bidoEquipmentCounterDTOId)
              .subscribe(function(results) {
                _this.ratingsList = results;
              });
          };
          DialogMeasureUpdateComponent.prototype.getRatingDataVisibility = function() {
            if (this.selectedBireMeasureReferenceDTO) {
              if (!this.selectedBireMeasureReferenceDTO.isCounter) {
                this.ratingVisibility = false;
                this.counterOptionsVisibility = false;
                return;
              }
            }
            if (this.followedInRatingVisibility) {
              this.isRatingRequired = true;
            }
            this.ratingVisibility = this.followedInRatingVisibility;
          };
          DialogMeasureUpdateComponent.prototype.getValuePerCounterCodeMapForPropagation = function() {
            var result = {};
            if (!this.isDeltaMeasure) {
              if (this.selectedBireMeasureReferenceDTO.counterCode && this.counterValue !== undefined) {
                result[this.selectedBireMeasureReferenceDTO.counterCode] = this.counterValue;
              }
              // Other value
              if (
                this.isOtherCounterVisible &&
                this.otherBireMeasureReferenceDTO.counterCode &&
                this.counterOtherValue !== undefined
              ) {
                result[this.otherBireMeasureReferenceDTO.counterCode] = this.counterOtherValue;
              }
            } else {
              if (this.measure.counterCode && this.counterDeltaValue !== undefined) {
                result[this.measure.counterCode] = this.counterDeltaValue;
              }
            }
            return result;
          };
          DialogMeasureUpdateComponent.prototype.findRating = function() {
            var _this = this;
            if (this.equipment && this.equipment.equipmentCode && !this.getReadingDate()) {
              this.messageService.showWarningMessage(this.getTranslateKey('ratingNotFound'));
              return;
            }
            if (this.equipment && this.equipment.equipmentCode) {
              var ratingAtDateInput = {
                equipmentCode: this.equipment.equipmentCode,
                date: this.getReadingDate()
              };
              this.measureUpdatePopupFormService
                .findHFBidoRatingByEquipmentCodeFromDate(ratingAtDateInput)
                .subscribe(function(results) {
                  if (!results) {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('ratingNotFound'));
                  } else {
                    return;
                  }
                });
            } else {
              this.messageService.showErrorMessage('global.missingFields');
            }
          };
          DialogMeasureUpdateComponent.prototype.onDeltaToogle = function() {
            this.counterValue = undefined;
            this.measurePropagationOptionsDTO.allowInsertionBeforeExistingValue = false;
            this.measurePropagationOptionsDTO.allowMeasureReadingSmallerThanPrevious = false;
            this.measurePropagationOptionsDTO.allowMeasureReadingGreatherThanPreviousPlusXValue = false;
            this.counterDeltaValue = undefined;
            this.counterOtherValue = undefined;
          };
          DialogMeasureUpdateComponent.prototype.changeFormat = function() {
            this.counterValue = undefined;
            this.counterValueDate = undefined;
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('component-data'),
              __metadata('design:type', Object)
            ],
            DialogMeasureUpdateComponent.prototype,
            'componentData',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('equipment'),
              __metadata('design:type', Object)
            ],
            DialogMeasureUpdateComponent.prototype,
            'equipment',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogMeasureUpdateComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('followedInRatingVisibility'),
              __metadata('design:type', Boolean)
            ],
            DialogMeasureUpdateComponent.prototype,
            'followedInRatingVisibility',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Date)],
            DialogMeasureUpdateComponent.prototype,
            'dateEvent',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogMeasureUpdateComponent.prototype,
            'context',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogMeasureUpdateComponent.prototype,
            'onUpdate',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogMeasureUpdateComponent.prototype,
            'onReport',
            void 0
          );
          DialogMeasureUpdateComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-measure-update',
                template: __webpack_require__(
                  /*! ./dialog-measure-update.component.html */ './src/app/shared/components/dialog-measure-update/dialog-measure-update.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-measure-update.component.scss */ './src/app/shared/components/dialog-measure-update/dialog-measure-update.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_4__['InputValidationService'],
                _dialog_measure_update_service__WEBPACK_IMPORTED_MODULE_8__['DialogMeasureUpdateService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__['SessionService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__['ConfirmationService']
              ])
            ],
            DialogMeasureUpdateComponent
          );
          return DialogMeasureUpdateComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__['DialogComponent']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-measure-update/dialog-measure-update.module.ts':
      /*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-measure-update/dialog-measure-update.module.ts ***!
  \*****************************************************************************************/
      /*! exports provided: DialogMeasureUpdateModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogMeasureUpdateModule',
          function() {
            return DialogMeasureUpdateModule;
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
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/keyfilter */ './node_modules/primeng/keyfilter.js'
        );
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/message */ './node_modules/primeng/message.js'
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_message__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _dialog_measure_report_dialog_measure_report_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../dialog-measure-report/dialog-measure-report.module */ './src/app/shared/components/dialog-measure-report/dialog-measure-report.module.ts'
        );
        /* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dialog_measure_update_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./dialog-measure-update.component */ './src/app/shared/components/dialog-measure-update/dialog-measure-update.component.ts'
        );
        /* harmony import */ var _dialog_measure_update_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./dialog-measure-update.service */ './src/app/shared/components/dialog-measure-update/dialog-measure-update.service.ts'
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
          primeng_dialog__WEBPACK_IMPORTED_MODULE_3__['DialogModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__['DropdownModule'],
          primeng_message__WEBPACK_IMPORTED_MODULE_6__['MessageModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__['SelectButtonModule'],
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule'],
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_5__['KeyFilterModule'],
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__['CheckboxModule'],
          _dialog_measure_report_dialog_measure_report_module__WEBPACK_IMPORTED_MODULE_11__['DialogMeasureReportModule']
        ];
        var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_12__['ModalModule']];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _dialog_measure_update_component__WEBPACK_IMPORTED_MODULE_13__['DialogMeasureUpdateComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [_dialog_measure_update_service__WEBPACK_IMPORTED_MODULE_14__['DialogMeasureUpdateService']];
        var DialogMeasureUpdateModule = /** @class */ (function() {
          function DialogMeasureUpdateModule() {}
          DialogMeasureUpdateModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS),
                exports: __spread(COMPONENTS),
                imports: __spread(
                  [
                    _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__['AngularCommonSharedModule'],
                    _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_9__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _app_common_shared_module__WEBPACK_IMPORTED_MODULE_10__['AppCommonSharedModule']
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            DialogMeasureUpdateModule
          );
          return DialogMeasureUpdateModule;
        })();

        /***/
      },

    /***/ './src/app/shared/components/dialog-measure-update/dialog-measure-update.service.ts':
      /*!******************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-measure-update/dialog-measure-update.service.ts ***!
  \******************************************************************************************/
      /*! exports provided: DialogMeasureUpdateService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogMeasureUpdateService',
          function() {
            return DialogMeasureUpdateService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/asset-management.api */ './src/app/shared/api/asset-management.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/api/fleet-business.api */ './src/app/shared/api/fleet-business.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_history_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/api/fleet-history.api */ './src/app/shared/api/fleet-history.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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

        var DialogMeasureUpdateService = /** @class */ (function(_super) {
          __extends(DialogMeasureUpdateService, _super);
          function DialogMeasureUpdateService(
            http,
            appConfigService,
            fleetManagementApi,
            fleetBusinessApi,
            assetManagementApi,
            fleetHistoryApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.fleetManagementApi = fleetManagementApi;
            _this.fleetBusinessApi = fleetBusinessApi;
            _this.assetManagementApi = assetManagementApi;
            _this.fleetHistoryApi = fleetHistoryApi;
            return _this;
          }
          DialogMeasureUpdateService.prototype.findAllBireMeasureReferences = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAllBireMeasureReferences);
          };
          DialogMeasureUpdateService.prototype.findBidoRatingsForMeasure = function(bidoEquipmentCounterDTOId) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoRatingsForMeasure,
              bidoEquipmentCounterDTOId
            );
          };
          DialogMeasureUpdateService.prototype.wdPropagateMeasures = function(measurePropagationReportInput) {
            return _super.prototype.post.call(
              this,
              this.fleetBusinessApi.wdPropagateMeasures,
              measurePropagationReportInput
            );
          };
          DialogMeasureUpdateService.prototype.addMeasure = function(saveBidoMeasureInputDTO) {
            return _super.prototype.post.call(this, this.assetManagementApi.addMeasure, saveBidoMeasureInputDTO);
          };
          DialogMeasureUpdateService.prototype.findHFBidoRatingByEquipmentCodeFromDate = function(ratingAtDateInput) {
            return _super.prototype.post.call(
              this,
              this.fleetHistoryApi.findHFBidoRatingByEquipmentCodeFromDate,
              ratingAtDateInput
            );
          };
          DialogMeasureUpdateService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__['AppConfigService'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_5__['FleetManagementApi'],
                _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_3__['FleetBusinessApi'],
                _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_2__['AssetManagementApi'],
                _shared_api_fleet_history_api__WEBPACK_IMPORTED_MODULE_4__['FleetHistoryApi']
              ])
            ],
            DialogMeasureUpdateService
          );
          return DialogMeasureUpdateService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-item/dialog-search-item.service.ts':
      /*!************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-item/dialog-search-item.service.ts ***!
  \************************************************************************************/
      /*! exports provided: DialogSearchItemService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchItemService',
          function() {
            return DialogSearchItemService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../services/app-config.service */ './src/app/shared/services/app-config.service.ts'
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

        var DialogSearchItemService = /** @class */ (function(_super) {
          __extends(DialogSearchItemService, _super);
          function DialogSearchItemService(http, appConfigService, productStructureManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.productStructureManagementApi = productStructureManagementApi;
            return _this;
          }
          DialogSearchItemService.prototype.findBireItemsBySearchCriteria = function(
            bireItem,
            autoFilterForFlFunction
          ) {
            var params = {
              bireItemDTOCriteria: bireItem,
              pnCode: undefined,
              attribute: undefined,
              autoFilterFlFunction: autoFilterForFlFunction
            };
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireItemsBySearchCriteria,
              params
            );
          };
          DialogSearchItemService.prototype.findFamilyVariant = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findFamilyVariant, input);
          };
          DialogSearchItemService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__['ProductStructureManagementApi']
              ])
            ],
            DialogSearchItemService
          );
          return DialogSearchItemService;
        })(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/shared/constants/bido-preference-constants.ts':
      /*!***************************************************************!*\
  !*** ./src/app/shared/constants/bido-preference-constants.ts ***!
  \***************************************************************/
      /*! exports provided: BidoPreferenceConstants */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'BidoPreferenceConstants',
          function() {
            return BidoPreferenceConstants;
          }
        );
        var BidoPreferenceConstants = /** @class */ (function() {
          function BidoPreferenceConstants() {}
          BidoPreferenceConstants.ASSET_LOCATION = 'ASSET_LOCATION';
          BidoPreferenceConstants.EQUIPMENT_OWNER = 'EQUIPMENT_OWNER';
          BidoPreferenceConstants.EQUIPMENT_OPERATOR = 'EQUIPMENT_OPERATOR';
          BidoPreferenceConstants.EQUIPMENT_DESIGNATION = 'EQUIPMENT_DESIGNATION';
          BidoPreferenceConstants.EQUIPMENT_FAMILY_VARIANT = 'EQUIPMENT_FAMILY_VARIANT';
          BidoPreferenceConstants.EQUIPMENT_FUNCTIONAL_LOCATION = 'EQUIPMENT_FUNCTIONAL_LOCATION';
          BidoPreferenceConstants.EQUIPMENT_SN = 'EQUIPMENT_SN';
          BidoPreferenceConstants.EQUIPMENT_PN = 'EQUIPMENT_PN';
          BidoPreferenceConstants.EQUIPMENT_FUNCTION = 'EQUIPMENT_FUNCTION';
          BidoPreferenceConstants.EQUIPMENT_OPERATIONAL_STATUS = 'EQUIPMENT_OPERATIONAL_STATUS';
          BidoPreferenceConstants.EQUIPMENT_EIS_DATE = 'EQUIPMENT_EIS_DATE';
          BidoPreferenceConstants.EQUIPMENT_ASSET_CODE = 'EQUIPMENT_ASSET_CODE';
          BidoPreferenceConstants.EQUIPMENT_ITEM_NUMBER = 'EQUIPMENT_ITEM_NUMBER';
          BidoPreferenceConstants.EQUIPMENT_FUNCTION_CODE = 'EQUIPMENT_FUNCTION_CODE';
          BidoPreferenceConstants.EQUIPMENT_SOURCE_SYSTEM_ID = 'EQUIPMENT_SOURCE_SYSTEM_ID';
          BidoPreferenceConstants.EQUIPMENT_SOURCE_SYSTEM_REFERENCE = 'EQUIPMENT_SOURCE_SYSTEM_REFERENCE';
          BidoPreferenceConstants.EQUIPMENT_LIFE_RESTRICTION = 'EQUIPMENT_LIFE_RESTRICTION';
          return BidoPreferenceConstants;
        })();

        /***/
      },

    /***/ './src/app/shared/constants/bidt-stock-mvt-constants.ts':
      /*!**************************************************************!*\
  !*** ./src/app/shared/constants/bidt-stock-mvt-constants.ts ***!
  \**************************************************************/
      /*! exports provided: BidtStockMvtConstants */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'BidtStockMvtConstants', function() {
          return BidtStockMvtConstants;
        });
        var BidtStockMvtConstants = /** @class */ (function() {
          function BidtStockMvtConstants() {}
          BidtStockMvtConstants.MVT_WAY_CREDIT = 'C';
          BidtStockMvtConstants.MVT_WAY_DEBIT = 'D';
          BidtStockMvtConstants.MVT_WAY_TRANSFER = 'T';
          BidtStockMvtConstants.MVT_RECONDITIONING = 'MVT_RECONDITIONING';
          BidtStockMvtConstants.MVT_RELATED_FL = 'MVT_RELATED_FL';
          BidtStockMvtConstants.MVT_STORAGE_COUNTER_RESET = 'MVT_STORAGE_COUNTER_RESET';
          BidtStockMvtConstants.MVT_STATUS_STEP_WAY_BEFORE_TRANSFERT = 0;
          BidtStockMvtConstants.MVT_STATUS_STEP_WAY_TRANSFERT = 1;
          BidtStockMvtConstants.MVT_STATUS_STEP_WAY_DEBIT = 2;
          BidtStockMvtConstants.MVT_STATUS_STEP_WAY_CREDIT = 3;
          return BidtStockMvtConstants;
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
      },

    /***/ './src/app/shared/utils/bire-family-variant-utils.ts':
      /*!***********************************************************!*\
  !*** ./src/app/shared/utils/bire-family-variant-utils.ts ***!
  \***********************************************************/
      /*! exports provided: BireFamilyVariantUtil */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'BireFamilyVariantUtil', function() {
          return BireFamilyVariantUtil;
        });
        var BireFamilyVariantUtil = /** @class */ (function() {
          function BireFamilyVariantUtil() {}
          BireFamilyVariantUtil.buildFamilyVariantCodeWithStructureType = function(
            familyCode,
            structureType,
            variantCode
          ) {
            if (!!familyCode && !!structureType && !!variantCode) {
              return (
                familyCode +
                BireFamilyVariantUtil.FAMILY_VARIANT_SEPARATOR +
                structureType +
                BireFamilyVariantUtil.FAMILY_VARIANT_SEPARATOR +
                variantCode
              );
            } else {
              return undefined;
            }
          };
          BireFamilyVariantUtil.buildFamilyVariantCodeWithoutStructureType = function(familyCode, variantCode) {
            if (!!familyCode && !!variantCode) {
              return familyCode + BireFamilyVariantUtil.FAMILY_VARIANT_SEPARATOR + variantCode;
            } else {
              return undefined;
            }
          };
          BireFamilyVariantUtil.FAMILY_VARIANT_SEPARATOR = '-';
          return BireFamilyVariantUtil;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=default~fleet-management-asset-asset-module~fleet-management-fleet-management-module.js.map
