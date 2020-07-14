(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~human-resources-employee-planning-employee-planning-module~human-resources-human-resources-m~95477e71'],
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

    /***/ './node_modules/primeng/components/selectbutton/selectbutton.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/primeng/components/selectbutton/selectbutton.js ***!
  \**********************************************************************/
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
        var objectutils_1 = __webpack_require__(
          /*! ../utils/objectutils */ './node_modules/primeng/components/utils/objectutils.js'
        );
        var forms_1 = __webpack_require__(/*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js');
        exports.SELECTBUTTON_VALUE_ACCESSOR = {
          provide: forms_1.NG_VALUE_ACCESSOR,
          useExisting: core_1.forwardRef(function() {
            return SelectButton;
          }),
          multi: true
        };
        var SelectButton = /** @class */ (function() {
          function SelectButton(cd) {
            this.cd = cd;
            this.tabindex = 0;
            this.onOptionClick = new core_1.EventEmitter();
            this.onChange = new core_1.EventEmitter();
            this.onModelChange = function() {};
            this.onModelTouched = function() {};
          }
          Object.defineProperty(SelectButton.prototype, 'options', {
            get: function() {
              return this._options;
            },
            set: function(val) {
              var opts = this.optionLabel ? objectutils_1.ObjectUtils.generateSelectItems(val, this.optionLabel) : val;
              this._options = opts;
            },
            enumerable: true,
            configurable: true
          });
          SelectButton.prototype.writeValue = function(value) {
            this.value = value;
            this.cd.markForCheck();
          };
          SelectButton.prototype.registerOnChange = function(fn) {
            this.onModelChange = fn;
          };
          SelectButton.prototype.registerOnTouched = function(fn) {
            this.onModelTouched = fn;
          };
          SelectButton.prototype.setDisabledState = function(val) {
            this.disabled = val;
          };
          SelectButton.prototype.onItemClick = function(event, option, index) {
            if (this.disabled || option.disabled) {
              return;
            }
            if (this.multiple) {
              var itemIndex_1 = this.findItemIndex(option);
              if (itemIndex_1 != -1)
                this.value = this.value.filter(function(val, i) {
                  return i != itemIndex_1;
                });
              else this.value = (this.value || []).concat([option.value]);
            } else {
              this.value = option.value;
            }
            this.onOptionClick.emit({
              originalEvent: event,
              option: option,
              index: index
            });
            this.onModelChange(this.value);
            this.onChange.emit({
              originalEvent: event,
              value: this.value
            });
          };
          SelectButton.prototype.onFocus = function(event) {
            this.focusedItem = event.target;
          };
          SelectButton.prototype.onBlur = function(event) {
            this.focusedItem = null;
            this.onModelTouched();
          };
          SelectButton.prototype.isSelected = function(option) {
            if (this.multiple) return this.findItemIndex(option) != -1;
            else return objectutils_1.ObjectUtils.equals(option.value, this.value, this.dataKey);
          };
          SelectButton.prototype.findItemIndex = function(option) {
            var index = -1;
            if (this.value) {
              for (var i = 0; i < this.value.length; i++) {
                if (this.value[i] == option.value) {
                  index = i;
                  break;
                }
              }
            }
            return index;
          };
          __decorate([core_1.Input(), __metadata('design:type', Number)], SelectButton.prototype, 'tabindex', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Boolean)], SelectButton.prototype, 'multiple', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Object)], SelectButton.prototype, 'style', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], SelectButton.prototype, 'styleClass', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Boolean)], SelectButton.prototype, 'disabled', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], SelectButton.prototype, 'dataKey', void 0);
          __decorate(
            [core_1.Input(), __metadata('design:type', String)],
            SelectButton.prototype,
            'optionLabel',
            void 0
          );
          __decorate(
            [core_1.Output(), __metadata('design:type', core_1.EventEmitter)],
            SelectButton.prototype,
            'onOptionClick',
            void 0
          );
          __decorate(
            [core_1.Output(), __metadata('design:type', core_1.EventEmitter)],
            SelectButton.prototype,
            'onChange',
            void 0
          );
          __decorate(
            [core_1.ContentChild(core_1.TemplateRef), __metadata('design:type', Object)],
            SelectButton.prototype,
            'itemTemplate',
            void 0
          );
          __decorate(
            [core_1.Input(), __metadata('design:type', Array), __metadata('design:paramtypes', [Array])],
            SelectButton.prototype,
            'options',
            null
          );
          SelectButton = __decorate(
            [
              core_1.Component({
                selector: 'p-selectButton',
                template:
                  '\n        <div [ngClass]="\'ui-selectbutton ui-buttonset ui-widget ui-corner-all ui-buttonset-\' + (options ? options.length : 0)" [ngStyle]="style" [class]="styleClass">\n            <div *ngFor="let option of options; let i = index" #btn class="ui-button ui-widget ui-state-default ui-button-text-only {{option.styleClass}}"\n                [ngClass]="{\'ui-state-active\':isSelected(option), \'ui-state-disabled\': disabled || option.disabled, \'ui-state-focus\': btn == focusedItem, \n                \'ui-button-text-icon-left\': (option.icon != null), \'ui-button-icon-only\': (option.icon && !option.label)}" (click)="onItemClick($event,option,i)" (keydown.enter)="onItemClick($event,option,i)"\n                [attr.title]="option.title" [attr.aria-label]="option.label" (focus)="onFocus($event)" (blur)="onBlur($event)" [attr.tabindex]="tabindex">\n                <ng-container *ngIf="!itemTemplate else customcontent">\n                    <span [ngClass]="[\'ui-clickable\', \'ui-button-icon-left\']" [class]="option.icon" *ngIf="option.icon"></span>\n                    <span class="ui-button-text ui-clickable">{{option.label||\'ui-btn\'}}</span>\n                </ng-container>\n                <ng-template #customcontent>\n                    <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: option, index: i}"></ng-container>\n                </ng-template>\n            </div>\n        </div>\n    ',
                providers: [exports.SELECTBUTTON_VALUE_ACCESSOR]
              }),
              __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
            ],
            SelectButton
          );
          return SelectButton;
        })();
        exports.SelectButton = SelectButton;
        var SelectButtonModule = /** @class */ (function() {
          function SelectButtonModule() {}
          SelectButtonModule = __decorate(
            [
              core_1.NgModule({
                imports: [common_1.CommonModule],
                exports: [SelectButton],
                declarations: [SelectButton]
              })
            ],
            SelectButtonModule
          );
          return SelectButtonModule;
        })();
        exports.SelectButtonModule = SelectButtonModule;
        //# sourceMappingURL=selectbutton.js.map

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

    /***/ './node_modules/primeng/selectbutton.js':
      /*!**********************************************!*\
  !*** ./node_modules/primeng/selectbutton.js ***!
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
            /*! ./components/selectbutton/selectbutton */ './node_modules/primeng/components/selectbutton/selectbutton.js'
          )
        );

        /***/
      },

    /***/ './node_modules/primeng/slider.js':
      /*!****************************************!*\
  !*** ./node_modules/primeng/slider.js ***!
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
          __webpack_require__(/*! ./components/slider/slider */ './node_modules/primeng/components/slider/slider.js')
        );

        /***/
      },

    /***/ './src/app/main/human-resources/employee-planning/employee-planning.module.ts':
      /*!************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/employee-planning.module.ts ***!
  \************************************************************************************/
      /*! exports provided: EmployeePlanningModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'EmployeePlanningModule', function() {
          return EmployeePlanningModule;
        });
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/fesm5/common.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/calendar */ './node_modules/primeng/calendar.js'
        );
        /* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_calendar__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/chart */ './node_modules/primeng/chart.js'
        );
        /* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_chart__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/inputtextarea */ './node_modules/primeng/inputtextarea.js'
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/overlaypanel */ './node_modules/primeng/overlaypanel.js'
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/slider */ './node_modules/primeng/slider.js'
        );
        /* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_slider__WEBPACK_IMPORTED_MODULE_8__
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
        /* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ './src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_scheduler_scheduler_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/components/scheduler/scheduler.module */ './src/app/shared/components/scheduler/scheduler.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _search_employee_planning_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./search/employee-planning-search.component */ './src/app/main/human-resources/employee-planning/search/employee-planning-search.component.ts'
        );
        /* harmony import */ var _search_employee_planning_search_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./search/employee-planning-search.service */ './src/app/main/human-resources/employee-planning/search/employee-planning-search.service.ts'
        );
        /* harmony import */ var _view_by_company_form_view_by_company_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./view-by-company-form/view-by-company-form.component */ './src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.component.ts'
        );
        /* harmony import */ var _view_by_company_form_view_by_company_form_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./view-by-company-form/view-by-company-form.service */ './src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.service.ts'
        );
        /* harmony import */ var _view_by_site_form_employee_planning_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./view-by-site-form/employee-planning-form.component */ './src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.component.ts'
        );
        /* harmony import */ var _view_by_site_form_employee_planning_form_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./view-by-site-form/employee-planning-form.service */ './src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.service.ts'
        );
        /* harmony import */ var _view_by_site_form_employee_planning_legend_dialog_employee_planning_legend_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component */ './src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component.ts'
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
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__['DropdownModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_9__['TableModule'],
          primeng_calendar__WEBPACK_IMPORTED_MODULE_2__['CalendarModule'],
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6__['OverlayPanelModule'],
          primeng_chart__WEBPACK_IMPORTED_MODULE_3__['ChartModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__['SelectButtonModule'],
          primeng_slider__WEBPACK_IMPORTED_MODULE_8__['SliderModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_scheduler_scheduler_module__WEBPACK_IMPORTED_MODULE_16__['SchedulerModule'],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_15__['ModalModule']
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _view_by_site_form_employee_planning_legend_dialog_employee_planning_legend_dialog_component__WEBPACK_IMPORTED_MODULE_24__[
            'EmployeePlanningLegendDialogComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [
          _view_by_site_form_employee_planning_form_component__WEBPACK_IMPORTED_MODULE_22__[
            'EmployeePlanningFormComponent'
          ],
          _search_employee_planning_search_component__WEBPACK_IMPORTED_MODULE_18__['EmployeePlanningSearchComponent'],
          _view_by_company_form_view_by_company_form_component__WEBPACK_IMPORTED_MODULE_20__[
            'ViewByCompanyFormComponent'
          ]
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _view_by_site_form_employee_planning_form_service__WEBPACK_IMPORTED_MODULE_23__[
            'EmployeePlanningFormService'
          ],
          _search_employee_planning_search_service__WEBPACK_IMPORTED_MODULE_19__['EmployeePlanningSearchService'],
          _view_by_company_form_view_by_company_form_service__WEBPACK_IMPORTED_MODULE_21__['ViewByCompanyFormService']
        ];
        var EmployeePlanningModule = /** @class */ (function() {
          function EmployeePlanningModule() {}
          EmployeePlanningModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_11__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_12__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_13__['AppCommonSharedModule'],
                    primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__['InputTextareaModule'],
                    _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_14__[
                      'ManageSearchCriteriaModule'
                    ],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_17__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES, [_angular_common__WEBPACK_IMPORTED_MODULE_0__['DatePipe']])
              })
            ],
            EmployeePlanningModule
          );
          return EmployeePlanningModule;
        })();

        /***/
      },

    /***/ './src/app/main/human-resources/employee-planning/search/employee-planning-search.component.html':
      /*!*******************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/search/employee-planning-search.component.html ***!
  \*******************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n\r\n        <i\r\n          class="fa fa-fw fa-info aw-icon aw-icon-with-border"\r\n          aria-hidden="true"\r\n          pTooltip="{{ \'page.info\' | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle"></div>\r\n      {{ "page.searchPage" | translate }}\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row search-criteria-header">\r\n                  <aw-manage-search-criteria\r\n                    [componentId]="SEARCH_CRITERIA_ID"\r\n                    (onSelected)="loadSearchCriteria($event)"\r\n                    (onSavedAsked)="saveSearchCriteriaAsked()"\r\n                    [objectFromPage]="criteriaToSave"\r\n                  ></aw-manage-search-criteria>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group required">\r\n                    <label class="form-label">{{ componentData.componentId + ".startDate" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="searchObject.startDate"\r\n                        [maxDate]="searchObject.endDate"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group required">\r\n                    <label class="form-label">{{ componentData.componentId + ".endDate" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="searchObject.endDate"\r\n                        [minDate]="searchObject.startDate"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--2"></div>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group required">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".bidtCompanyId" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="companies"\r\n                        [showClear]="true"\r\n                        [(ngModel)]="companyId"\r\n                        (onChange)="onChangeCompany()"\r\n                        placeholder="&nbsp;"\r\n                        required\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".site" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="sites"\r\n                        (onChange)="loadWarehousesBySite()"\r\n                        [showClear]="true"\r\n                        [(ngModel)]="siteId"\r\n                        placeholder="&nbsp;"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".warehouseOrWorkshop" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="warehouses"\r\n                        [(ngModel)]="warehouseId"\r\n                        [showClear]="true"\r\n                        placeholder="&nbsp;"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".qualification" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [showClear]="true"\r\n                        placeholder="&nbsp;"\r\n                        [options]="qualifications"\r\n                        [(ngModel)]="qualificationId"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <button\r\n                      type="button"\r\n                      mat-raised-button\r\n                      (click)="search()"\r\n                      color="primary"\r\n                      appKeyPress\r\n                      [keyCode]="\'Enter\'"\r\n                      (keyPress)="search()"\r\n                    >\r\n                      {{ "global.toSearch" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-planning/search/employee-planning-search.component.scss':
      /*!*******************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/search/employee-planning-search.component.scss ***!
  \*******************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaHVtYW4tcmVzb3VyY2VzL2VtcGxveWVlLXBsYW5uaW5nL3NlYXJjaC9lbXBsb3llZS1wbGFubmluZy1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-planning/search/employee-planning-search.component.ts':
      /*!*****************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/search/employee-planning-search.component.ts ***!
  \*****************************************************************************************************/
      /*! exports provided: EmployeePlanningSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'EmployeePlanningSearchComponent',
          function() {
            return EmployeePlanningSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! lodash-es */ './node_modules/lodash-es/lodash.js'
        );
        /* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
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
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/utils/number-utils */ './src/app/shared/utils/number-utils.ts'
        );
        /* harmony import */ var _employee_planning_search_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./employee-planning-search.service */ './src/app/main/human-resources/employee-planning/search/employee-planning-search.service.ts'
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

        var EmployeePlanningSearchComponent = /** @class */ (function(_super) {
          __extends(EmployeePlanningSearchComponent, _super);
          function EmployeePlanningSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            employeePlanningSearchService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.sessionService = sessionService;
            _this.employeePlanningSearchService = employeePlanningSearchService;
            _this.SEARCH_CRITERIA_ID =
              _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__[
                'AppConstants'
              ].EMPLOYEE_PLANNING_SEARCH_CRITERIA_ID;
            _this.radix = 10;
            _this.component = EmployeePlanningSearchComponent_1;
            _this.milisecondsInADay =
              _this.component.hoursInADay *
              _this.component.minutesInAnHour *
              _this.component.secondsInAMinute *
              _this.component.milisecondsInASecond;
            _this.init();
            _this.loadDropdowns();
            return _this;
          }
          EmployeePlanningSearchComponent_1 = EmployeePlanningSearchComponent;
          EmployeePlanningSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
          };
          EmployeePlanningSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
              .HR_EMPLOYEE_PLANNING_SEARCH;
          };
          EmployeePlanningSearchComponent.prototype.init = function() {
            // Search criteria
            this.searchObject = {
              startDate: new Date()
            };
            if (!!this.searchObject.startDate) {
              this.searchObject.startDate.setHours(0);
              this.searchObject.startDate.setMinutes(0);
              this.searchObject.startDate.setSeconds(0);
              this.searchObject.startDate.setMilliseconds(0);
              var fifteen = 15;
              var endDate = this.searchObject.startDate.getTime() + fifteen * this.milisecondsInADay;
              if (!!endDate) {
                this.searchObject.endDate = new Date(endDate);
              }
            }
            this.companyId = undefined;
            this.siteId = undefined;
            this.warehouseId = undefined;
            this.qualificationId = undefined;
            // Dropdowns
            this.companies = [];
            this.sites = [];
            this.warehouses = [];
            this.qualifications = [];
          };
          /***********
           * Dropdowns
           **********/
          EmployeePlanningSearchComponent.prototype.loadDropdowns = function() {
            this.loadCompany();
            this.loadQualifications();
          };
          EmployeePlanningSearchComponent.prototype.loadCompany = function() {
            var _this = this;
            this.employeePlanningSearchService.findBidtCompanyByCriteria({}).subscribe(function(results) {
              _this.companies = results;
            });
          };
          EmployeePlanningSearchComponent.prototype.onChangeCompany = function() {
            var _this = this;
            if (!!this.companyId) {
              var input = {
                bidtCompanyId: this.companyId
              };
              this.employeePlanningSearchService.findByCriteriaSP(input).subscribe(function(results) {
                _this.sites = results || [];
                if (_this.sites.length === 1 && _this.sites[0].value !== null && _this.sites[0].value !== undefined) {
                  _this.siteId = _this.sites[0].value;
                } else if (_this.sites.length > 1 && _this.criteriaLoaded.companyId !== _this.companyId) {
                  _this.siteId = undefined;
                }
                _this.loadWarehousesBySite();
              });
            } else {
              this.siteId = undefined;
              this.loadWarehousesBySite();
            }
          };
          EmployeePlanningSearchComponent.prototype.loadWarehousesBySite = function() {
            var _this = this;
            this.warehouses = [];
            if (!!this.siteId) {
              var siteId = this.siteId.toString();
              this.employeePlanningSearchService.findWarehousesBySite(siteId).subscribe(function(results) {
                if (!!results) {
                  _this.warehouses = results.map(function(bidtWarehouseDTO) {
                    return {
                      label: bidtWarehouseDTO.whName,
                      value: bidtWarehouseDTO.wareHouseId
                    };
                  });
                  if (_this.warehouses.length === 1) {
                    _this.warehouseId = _this.warehouses[0].value;
                  }
                }
              });
            } else {
              this.warehouseId = undefined;
            }
          };
          EmployeePlanningSearchComponent.prototype.loadQualifications = function() {
            var _this = this;
            this.employeePlanningSearchService.findByCriteriaQualification().subscribe(function(results) {
              _this.qualifications = results || [];
            });
          };
          /************
           * Go to form
           ************/
          EmployeePlanningSearchComponent.prototype.search = function() {
            if (!!this.searchObject.startDate && !!this.searchObject.endDate && !!this.companyId) {
              if (this.siteId !== null && this.siteId !== undefined) {
                this.viewBySiteForm();
              } else {
                this.viewByCompanyForm();
              }
            } else {
              this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
            }
          };
          EmployeePlanningSearchComponent.prototype.viewByCompanyForm = function() {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
                  .HR_VIEW_BY_COMPANY_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Read
            };
            this.navigate(data);
          };
          EmployeePlanningSearchComponent.prototype.viewBySiteForm = function() {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
                  .HR_EMPLOYEE_PLANNING_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Read
            };
            this.navigate(data);
          };
          EmployeePlanningSearchComponent.prototype.navigate = function(data) {
            var _this = this;
            var componentData = this.searchObject;
            if (!!this.companyId) {
              this.searchObject.companyId = this.companyId;
              var company = this.companies.find(function(comp) {
                return Number.parseInt(comp.value, _this.radix) === Number(_this.companyId);
              });
              if (!!company) {
                this.searchObject.companyName = company.label;
              }
            } else {
              this.searchObject.companyId = undefined;
              this.searchObject.companyName = undefined;
            }
            if (!!this.siteId) {
              this.searchObject.siteId = Number.parseInt(this.siteId, this.radix);
              var site = this.sites.find(function(s) {
                return s.value === _this.siteId;
              });
              if (!!site) {
                this.searchObject.siteName = site.label;
              }
            } else {
              this.searchObject.siteId = undefined;
              this.searchObject.siteName = undefined;
            }
            if (!!this.warehouseId) {
              this.searchObject.warehouseId = this.warehouseId;
              var warehouse = this.warehouses.find(function(s) {
                return s.value === _this.warehouseId;
              });
              if (!!warehouse) {
                this.searchObject.warehouseName = warehouse.label;
              }
            } else {
              this.searchObject.warehouseId = undefined;
              this.searchObject.warehouseName = undefined;
            }
            this.searchObject.qualificationId = !!this.qualificationId ? this.qualificationId : undefined;
            data.objectId = this.serializationService.serialize(componentData);
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          // Reset search criteria
          EmployeePlanningSearchComponent.prototype.resetSearchCriteria = function() {
            this.searchObject = {};
            this.companyId = undefined;
            this.siteId = undefined;
            this.warehouseId = undefined;
            this.qualificationId = undefined;
            this.criteriaName = undefined;
          };
          EmployeePlanningSearchComponent.prototype.loadSearchCriteria = function(event) {
            var criteria = event.criteria;
            if (!criteria) {
              this.resetSearchCriteria();
              return;
            }
            this.criteriaLoaded = Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__['cloneDeep'])(criteria);
            this.companyId = criteria.companyId;
            this.siteId = _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_12__['NumberUtils'].toString(
              criteria.siteId
            );
            this.warehouseId = criteria.warehouseId;
            this.qualificationId = criteria.qualificationId;
            this.criteriaName = event.name;
            this.onChangeCompany();
          };
          EmployeePlanningSearchComponent.prototype.saveSearchCriteriaAsked = function() {
            var criteriaToSave = {
              companyId: this.companyId,
              siteId: Number.parseInt(!!this.siteId ? this.siteId : '', this.radix),
              warehouseId: this.warehouseId,
              qualificationId: this.qualificationId
            };
            this.criteriaToSave = criteriaToSave;
          };
          var EmployeePlanningSearchComponent_1;
          // HMSMs constants
          EmployeePlanningSearchComponent.daysInAWeek = 7;
          EmployeePlanningSearchComponent.hoursInADay = 24;
          EmployeePlanningSearchComponent.minutesInAnHour = 60;
          EmployeePlanningSearchComponent.secondsInAMinute = 60;
          EmployeePlanningSearchComponent.milisecondsInASecond = 1000;
          EmployeePlanningSearchComponent = EmployeePlanningSearchComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-employee-planning-search',
                template: __webpack_require__(
                  /*! ./employee-planning-search.component.html */ './src/app/main/human-resources/employee-planning/search/employee-planning-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./employee-planning-search.component.scss */ './src/app/main/human-resources/employee-planning/search/employee-planning-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__['SessionService'],
                _employee_planning_search_service__WEBPACK_IMPORTED_MODULE_13__['EmployeePlanningSearchService']
              ])
            ],
            EmployeePlanningSearchComponent
          );
          return EmployeePlanningSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_11__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/human-resources/employee-planning/search/employee-planning-search.service.ts':
      /*!***************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/search/employee-planning-search.service.ts ***!
  \***************************************************************************************************/
      /*! exports provided: EmployeePlanningSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'EmployeePlanningSearchService',
          function() {
            return EmployeePlanningSearchService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-company.api */ './src/app/shared/api/bidt-company.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_qualification_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-qualification.api */ './src/app/shared/api/bidt-qualification.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-site.api */ './src/app/shared/api/bidt-site.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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

        var EmployeePlanningSearchService = /** @class */ (function(_super) {
          __extends(EmployeePlanningSearchService, _super);
          function EmployeePlanningSearchService(
            http,
            appConfigService,
            bidtSiteApi,
            bidtCompanyApi,
            bidtWarehouseApi,
            bidtQualificationApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtSiteApi = bidtSiteApi;
            _this.bidtCompanyApi = bidtCompanyApi;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            _this.bidtQualificationApi = bidtQualificationApi;
            return _this;
          }
          EmployeePlanningSearchService.prototype.findBidtCompanyByCriteria = function(criteria) {
            return _super.prototype.post.call(this, this.bidtCompanyApi.findByCriteria, criteria);
          };
          EmployeePlanningSearchService.prototype.findByCriteriaSP = function(input) {
            return _super.prototype.post.call(this, this.bidtSiteApi.findByCriteriaSP, input);
          };
          EmployeePlanningSearchService.prototype.findByCriteriaQualification = function() {
            return _super.prototype.post.call(this, this.bidtQualificationApi.findByCriteriaQualification);
          };
          /**************************************************************************
           * Warehouse api
           *************************************************************************/
          EmployeePlanningSearchService.prototype.findWarehousesBySite = function(input) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findBySiteId, input);
          };
          EmployeePlanningSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__['AppConfigService'],
                _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_4__['BidtSiteApi'],
                _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_2__['BidtCompanyApi'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_5__['BidtWarehouseApi'],
                _shared_api_bidt_qualification_api__WEBPACK_IMPORTED_MODULE_3__['BidtQualificationApi']
              ])
            ],
            EmployeePlanningSearchService
          );
          return EmployeePlanningSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.component.html':
      /*!*****************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.component.html ***!
  \*****************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div *ngIf="componentData && componentData.objectId" class="page-subtitle">\r\n        {{ serializationService.deserialize(componentData.objectId).companyName }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ "page.mainData" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div style="width: 50%">\r\n                <div class="grid-cell-content">\r\n                  <div class="form-group flex--2">\r\n                    <label class="form-label"> {{ componentData.componentId + ".company" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" disabled [(ngModel)]="searchObject.companyName" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".startDate" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" disabled [(ngModel)]="startDate" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".endDate" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" disabled [(ngModel)]="endDate" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".delta" | translate }} ({{\r\n                        componentData.componentId + ".days" | translate\r\n                      }})\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" disabled [(ngModel)]="delta" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div style="width: 50%">\r\n                <div class="grid-cell grid-cell-chart" style="box-shadow: none">\r\n                  <div class="grid-cell-content">\r\n                    <div class="row flex-row--justify-center">\r\n                      <div class="chart-container">\r\n                        <div class="chart-wrapper">\r\n                          <p-chart\r\n                            type="bar"\r\n                            [data]="data"\r\n                            [options]="chartOptions"\r\n                            width="100%"\r\n                            height="100%"\r\n                          ></p-chart>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content">\r\n                    <div class="row flex-row--justify-center">\r\n                      <div class="chart-container">\r\n                        <div class="chart-legend">\r\n                          <div class="chart-legend-label">\r\n                            <div class="chart-legend-label-color quantity"></div>\r\n                            <span class="chart-value">{{\r\n                              getComponentName() + ".employeeAvailability" | translate\r\n                            }}</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ componentData.componentId + ".employeeAvailability" | translate }}\r\n                  ({{ employeeAvailabilityTable ? employeeAvailabilityTable.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                [resizableColumns]="true"\r\n                #ptable\r\n                class="aw-table2"\r\n                [columns]="employeeAvailabilityTableCols"\r\n                [value]="employeeAvailabilityTable"\r\n                [scrollable]="true"\r\n                [(selection)]="selectedEA"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!eaTableLoading"> &nbsp;</span>\r\n\r\n                  <div *ngIf="eaTableLoading" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedEA.length > 0 }">\r\n                    <div class="aw-table-global-filter">\r\n                      <label class="aw-table-global-filter-label">\r\n                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableGlobalFilter\r\n                        class="aw-table-global-filter-input"\r\n                        type="text"\r\n                        placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                        (input)="ptable.filterGlobal($event.target.value, \'contains\')"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class="aw-table-actions">\r\n                      <button\r\n                        *ngIf="selectedEA.length === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="openViewBySite()"\r\n                      >\r\n                        {{ "global.open" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col class="aw-table-checkbox-wrapper" />\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th class="aw-table-checkbox-wrapper">\r\n                      <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ col.field }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td class="aw-table-checkbox-wrapper">\r\n                      <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      <span *ngIf="rowData[col.field] !== \'null\'">{{ rowData[col.field] }}</span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.component.scss':
      /*!*****************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.component.scss ***!
  \*****************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .table-border-left {\n  border-left: solid 1px #006ea9 !important; }\n\n:host .grid-cell.in-simulation {\n  border-left-color: #ffc107;\n  border-left-style: solid;\n  border-left-width: 8px; }\n\n:host .grid-cell-detail .form-control-potential-unit {\n  width: 4rem; }\n\n:host .grid-cell-scope .ancestor-actions,\n:host .grid-cell-scope .ancestor-data {\n  background-color: #f0f0f0; }\n\n:host .grid-cell-scope .ancestor-actions {\n  justify-content: flex-end;\n  padding: 8px; }\n\n:host .grid-cell-state-simulation {\n  background-color: #ffc107;\n  padding: 0; }\n\n:host .grid-cell-state-simulation .grid-cell-title {\n    color: #000; }\n\n:host .grid-cell-state-simulation .simulation-criterion:not(:last-of-type)::after {\n    content: " | "; }\n\n:host .grid-cell-chart .chart-container {\n  display: flex;\n  flex-direction: row; }\n\n@media screen and (max-width: 1280px) {\n    :host .grid-cell-chart .chart-container {\n      flex-direction: column; } }\n\n:host .grid-cell-chart .chart-container .chart-legend {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 8px; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color {\n        height: 0.75rem;\n        margin-right: 8px;\n        width: 2rem; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.quantity {\n          background-color: #006ea9; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.amount {\n          background-color: #d3c632; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.not-airworthy {\n          background-color: #f6685e; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-value {\n      font-weight: 700;\n      margin-left: 8px; }\n\n:host .grid-cell-chart .chart-container .chart-wrapper {\n    position: relative;\n    height: 18rem;\n    width: 30rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9odW1hbi1yZXNvdXJjZXMvZW1wbG95ZWUtcGxhbm5pbmcvdmlldy1ieS1jb21wYW55LWZvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9tb2RpZmllcnMuc2NzcyIsInNyYy9hcHAvbWFpbi9odW1hbi1yZXNvdXJjZXMvZW1wbG95ZWUtcGxhbm5pbmcvdmlldy1ieS1jb21wYW55LWZvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGh1bWFuLXJlc291cmNlc1xcZW1wbG95ZWUtcGxhbm5pbmdcXHZpZXctYnktY29tcGFueS1mb3JtXFx2aWV3LWJ5LWNvbXBhbnktZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9odW1hbi1yZXNvdXJjZXMvZW1wbG95ZWUtcGxhbm5pbmcvdmlldy1ieS1jb21wYW55LWZvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyIsInNyYy9hcHAvbWFpbi9odW1hbi1yZXNvdXJjZXMvZW1wbG95ZWUtcGxhbm5pbmcvdmlldy1ieS1jb21wYW55LWZvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSx3QkFBd0I7RUFDeEIsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UseUNBQWlDO0VBQWpDLHNDQUFpQztFQUFqQyxpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxvQ0FBNEI7S0FBNUIsaUNBQTRCO01BQTVCLGdDQUE0QjtVQUE1Qiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXLEVBQUE7O0FBS2I7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSxvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxzQ0FBc0MsRUFBQTs7QUN6SHhDO0VBRUkseUNBQXlDLEVBQUE7O0FBRjdDO0VBTUksMEJDWVk7RURYWix3QkMyQmdCO0VEMUJoQixzQkNnQ2MsRUFBQTs7QUR4Q2xCO0VBYU0sV0FBVyxFQUFBOztBQWJqQjs7RUFvQk0seUJDdkI4QixFQUFBOztBREdwQztFQXdCTSx5QkFBeUI7RUFDekIsWUNlWSxFQUFBOztBRHhDbEI7RUE4QkkseUJDWlk7RURhWixVQUFVLEVBQUE7O0FBL0JkO0lBa0NNLFdDcENtQixFQUFBOztBREV6QjtJQXNDTSxjQUFjLEVBQUE7O0FBdENwQjtFRW1CRSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FGMEJmO0lBOUNOO01BK0NRLHNCQUFzQixFQUFBLEVBNEN6Qjs7QUEzRkw7SUVjRSxhQUFhO0lBQ2Isc0JBQXNCO0lGc0NoQix1QkFBdUI7SUFDdkIsZ0JDZFUsRUFBQTs7QUR4Q2xCO01FbUJFLGFBQWE7TUFDYixtQkFBbUI7TUZ1Q1gsbUJBQW1CLEVBQUE7O0FBM0Q3QjtRQThEWSxlQUFlO1FBQ2YsaUJDdkJNO1FEd0JOLFdBQVcsRUFBQTs7QUFoRXZCO1VBbUVjLHlCQUF5QixFQUFBOztBQW5FdkM7VUF1RWMseUJBQXlCLEVBQUE7O0FBdkV2QztVQTJFYyx5QkN2RE0sRUFBQTs7QURwQnBCO01BaUZVLGdCQUFnQjtNQUNoQixnQkMxQ1EsRUFBQTs7QUR4Q2xCO0lBdUZRLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9odW1hbi1yZXNvdXJjZXMvZW1wbG95ZWUtcGxhbm5pbmcvdmlldy1ieS1jb21wYW55LWZvcm0vdmlldy1ieS1jb21wYW55LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS0tZmxleC1jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXNwbGF5LS1mbGV4LXJvdyB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktLW5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlaWdodC0tMTAwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taW4td2lkdGgtLWZpdC1jb250ZW50IHtcclxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb3NpdGlvbi0tcmVsYXRpdmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2Nyb2xsLXktLW5vbmUge1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC0tdW5zZWxlY3RhYmxlIHtcclxuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmlzaWJpbGl0eS0taGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLS0xMCB7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLndpZHRoLS0yMCB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLndpZHRoLS0zMCB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLndpZHRoLS00MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLndpZHRoLS01MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLndpZHRoLS02MCB7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLndpZHRoLS03MCB7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLndpZHRoLS04MCB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLndpZHRoLS05MCB7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLndpZHRoLS0xMDAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4uZmxleC0tMSB7XHJcbiAgZmxleDogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tMiB7XHJcbiAgZmxleDogMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tMyB7XHJcbiAgZmxleDogMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tNCB7XHJcbiAgZmxleDogNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tNSB7XHJcbiAgZmxleDogNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tYXV0byB7XHJcbiAgZmxleDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLWVuZCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tc3RhcnQge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1lbmQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LXN0YXJ0IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG4iLCJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuQGltcG9ydCBcIm1vZGlmaWVyc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC50YWJsZS1ib3JkZXItbGVmdCB7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4ICMwMDZlYTkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5ncmlkLWNlbGwuaW4tc2ltdWxhdGlvbiB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogJG9yYW5nZTtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6ICRtYXJnaW4tdmFsdWU7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLWRldGFpbCB7XHJcbiAgICAuZm9ybS1jb250cm9sLXBvdGVudGlhbC11bml0IHtcclxuICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLXNjb3BlIHtcclxuICAgIC5hbmNlc3Rvci1hY3Rpb25zLFxyXG4gICAgLmFuY2VzdG9yLWRhdGEge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLmFuY2VzdG9yLWFjdGlvbnMge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmdyaWQtY2VsbC1zdGF0ZS1zaW11bGF0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIC5ncmlkLWNlbGwtdGl0bGUge1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAuc2ltdWxhdGlvbi1jcml0ZXJpb246bm90KDpsYXN0LW9mLXR5cGUpOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiIHwgXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLWNoYXJ0IHtcclxuICAgIC5jaGFydC1jb250YWluZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNoYXJ0LWxlZ2VuZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgIC5jaGFydC1sZWdlbmQtbGFiZWwge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIC5jaGFydC1sZWdlbmQtbGFiZWwtY29sb3Ige1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDJyZW07XHJcblxyXG4gICAgICAgICAgICAmLnF1YW50aXR5IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2ZWE5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmFtb3VudCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QzYzYzMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5ub3QtYWlyd29ydGh5IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoYXJ0LXZhbHVlIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaGFydC13cmFwcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHJlbTtcclxuICAgICAgICB3aWR0aDogMzByZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.component.ts':
      /*!***************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.component.ts ***!
  \***************************************************************************************************************/
      /*! exports provided: ViewByCompanyFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ViewByCompanyFormComponent',
          function() {
            return ViewByCompanyFormComponent;
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
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
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
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _search_employee_planning_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../search/employee-planning-search.service */ './src/app/main/human-resources/employee-planning/search/employee-planning-search.service.ts'
        );
        /* harmony import */ var _view_by_company_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./view-by-company-form.service */ './src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.service.ts'
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

        var ViewByCompanyFormComponent = /** @class */ (function(_super) {
          __extends(ViewByCompanyFormComponent, _super);
          function ViewByCompanyFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            viewByCompanyFormService,
            employeePlanningSearchService,
            dateService,
            translateService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.viewByCompanyFormService = viewByCompanyFormService;
            _this.employeePlanningSearchService = employeePlanningSearchService;
            _this.dateService = dateService;
            _this.translateService = translateService;
            _this.init();
            _this.getSitesForCompany();
            _this.initChartOptions();
            _this.setEmployeeAvailabilityTableBasicCols();
            return _this;
          }
          ViewByCompanyFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            if (!!this.componentData.objectId) {
              this.searchObject = this.serializationService.deserialize(this.componentData.objectId);
              if (!!this.searchObject.companyName) {
                var context = '' + this.searchObject.companyName;
                this.displayComponentContext(context, this.isCreateOpenMode);
              }
              this.search();
              if (!!this.searchObject.startDate && !!this.searchObject.endDate) {
                this.startDate = this.dateService.dateToString(this.searchObject.startDate);
                this.endDate = this.dateService.dateToString(this.searchObject.endDate);
                this.delta = this.getNumberOfDays(this.searchObject.startDate, this.searchObject.endDate) + 1;
              }
            }
          };
          ViewByCompanyFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
              .HR_VIEW_BY_COMPANY_FORM;
          };
          ViewByCompanyFormComponent.prototype.init = function() {
            this.searchObject = {};
            this.startDate = undefined;
            this.endDate = undefined;
            this.delta = undefined;
            this.chartData = {
              labels: [],
              datasets: []
            };
            this.data = {
              labels: [],
              datasets: []
            };
            this.eaTableLoading = false;
            this.employeeAvailabilityTable = [];
            this.selectedEA = [];
            this.employeeAvailabilityTableCols = [];
            this.eaTableColsByCodeQualif = [];
          };
          ViewByCompanyFormComponent.prototype.getSitesForCompany = function() {
            var _this = this;
            var input = {
              bidtCompanyId: this.searchObject.companyId
            };
            this.employeePlanningSearchService.findByCriteriaSP(input).subscribe(function(results) {
              _this.sites = results || [];
            });
          };
          ViewByCompanyFormComponent.prototype.setEmployeeAvailabilityTableBasicCols = function() {
            var _this = this;
            var sitesLabel = this.getComponentName() + '.sites';
            var eaLabel = this.getComponentName() + '.employeeAvailability';
            var hoursLabel = this.getComponentName() + '.hours';
            this.translateService.get([sitesLabel, eaLabel, hoursLabel]).subscribe(function(results) {
              _this.employeeAvailabilityTableCols = [
                { field: results[sitesLabel] },
                { field: results[eaLabel] + ' (' + results[hoursLabel] + ')' }
              ];
            });
          };
          ViewByCompanyFormComponent.prototype.search = function() {
            var _this = this;
            this.eaTableLoading = true;
            this.viewByCompanyFormService.getViewByCompanyData(this.searchObject).subscribe(function(results) {
              if (!!results[0].staffPlanningViewByCompanyTableOutput) {
                // Chart
                _this.initChartData(results[0].staffPlanningViewByCompanyTableOutput);
                // Employee Availability table
                _this.setEmployeeAvailabilityTable(results[0].staffPlanningViewByCompanyTableOutput);
                _this.eaTableLoading = false;
              }
            });
          };
          /******************
           * Initialize chart
           *****************/
          ViewByCompanyFormComponent.prototype.initChartData = function(staffPlanningViewByCompanyTableOutput) {
            var _this = this;
            var radix = 10;
            var dataset = {
              data: []
            };
            staffPlanningViewByCompanyTableOutput.forEach(function(output) {
              if (!!dataset.data) {
                // dataset.label = output.siteName;
                if (!!output.availabilityHours) {
                  dataset.data.push(Number.parseInt(output.availabilityHours.split(':')[0], radix));
                } else {
                  dataset.data.push(0);
                }
              }
              if (!!_this.chartData && !!_this.chartData.labels && !!output.siteName) {
                _this.chartData.labels.push(output.siteName);
              }
            });
            if (!!this.chartData.datasets) {
              this.chartData.datasets.push(dataset);
            }
            this.chartData.datasets.forEach(function(set) {
              set.backgroundColor = '#006ea9';
              set.borderColor = '#006ea9';
            });
            this.data = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(this.chartData);
          };
          ViewByCompanyFormComponent.prototype.initChartOptions = function() {
            this.chartOptions = {
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true
                    }
                  }
                ]
              },
              legend: {
                display: false
              }
            };
          };
          /**************
           * Set EA table
           *************/
          ViewByCompanyFormComponent.prototype.setEmployeeAvailabilityTable = function(results) {
            var _this = this;
            var sitesLabel = this.getComponentName() + '.sites';
            var eaLabel = this.getComponentName() + '.employeeAvailability';
            var hoursLabel = this.getComponentName() + '.hours';
            this.translateService.get([sitesLabel, eaLabel, hoursLabel]).subscribe(function(labels) {
              var tableJSON = '[';
              var counter = 0;
              results.forEach(function(res) {
                var keys = [];
                var values = [];
                counter++;
                if (!!res.codeQualif) {
                  Object.keys(res.codeQualif).forEach(function(key) {
                    var col = { field: key + ' (' + labels[hoursLabel] + ')' };
                    _this.employeeAvailabilityTableCols.push(col); // sites, empAvailability, codeQualif(s)
                    _this.eaTableColsByCodeQualif.push(col); // codeQualif(s)
                    keys.push(key);
                  });
                  Object.values(res.codeQualif).forEach(function(value) {
                    values.push(value);
                  });
                }
                _this.employeeAvailabilityTableCols.forEach(function(col) {
                  col.alignment = 'left';
                });
                var json = '{"' + labels[sitesLabel] + '": "' + res.siteName + '",';
                json += ' "' + labels[eaLabel] + ' (' + labels[hoursLabel] + ')": "' + res.availabilityHours + '",';
                json += ' "' + keys[0] + ' (' + labels[hoursLabel] + ')": "' + values[0] + '",';
                json += ' "siteId": "' + res.siteId + '"';
                if (keys.length >= 1) {
                  for (var i = 1; i < keys.length; i++) {
                    var pairing = ',"' + keys[i] + ' (' + labels[hoursLabel] + ')": "' + values[i] + '"';
                    json = '' + json + pairing;
                  }
                }
                json = json + '}';
                tableJSON = counter === results.length ? '' + tableJSON + json : '' + tableJSON + json + ',';
              });
              tableJSON = tableJSON + ']';
              _this.employeeAvailabilityTable = _this.serializationService.deserialize(tableJSON);
            });
          };
          /*************************************
           * Employee Availability table actions
           ************************************/
          ViewByCompanyFormComponent.prototype.openViewBySite = function() {
            if (!!this.selectedEA && this.selectedEA.length === 1) {
              var componentData_1 = {
                startDate: this.searchObject.startDate,
                endDate: this.searchObject.endDate
              };
              componentData_1.siteId = this.selectedEA[0].siteId;
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
                    .HR_EMPLOYEE_PLANNING_FORM,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Read
              };
              componentData_1.siteName = this.sites.filter(function(site) {
                return site.value === '' + componentData_1.siteId;
              })[0].label;
              if (!!this.searchObject.companyId) {
                componentData_1.companyId = this.searchObject.companyId;
                componentData_1.companyName = this.searchObject.companyName;
              }
              data.objectId = this.serializationService.serialize(componentData_1);
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          /****************
           * Helper methods
           ***************/
          ViewByCompanyFormComponent.prototype.getNumberOfDays = function(startDate, endDate) {
            var hoursInADay = 24;
            var minutesInAnHour = 60;
            var secondsInAMinute = 60;
            var milisecondsInASecond = 1000;
            var oneDayMs = milisecondsInASecond * secondsInAMinute * minutesInAnHour * hoursInADay;
            var startDateMS = new Date(startDate).getTime();
            var endDateMS = new Date(endDate).getTime();
            var differenceMS = endDateMS - startDateMS;
            return Math.round(differenceMS / oneDayMs);
          };
          ViewByCompanyFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-view-by-company-form',
                template: __webpack_require__(
                  /*! ./view-by-company-form.component.html */ './src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./view-by-company-form.component.scss */ './src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__['TabService'],
                _view_by_company_form_service__WEBPACK_IMPORTED_MODULE_13__['ViewByCompanyFormService'],
                _search_employee_planning_search_service__WEBPACK_IMPORTED_MODULE_12__['EmployeePlanningSearchService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__['DateService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            ViewByCompanyFormComponent
          );
          return ViewByCompanyFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.service.ts':
      /*!*************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-company-form/view-by-company-form.service.ts ***!
  \*************************************************************************************************************/
      /*! exports provided: ViewByCompanyFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ViewByCompanyFormService',
          function() {
            return ViewByCompanyFormService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-employee.api */ './src/app/shared/api/bidt-employee.api.ts'
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

        var ViewByCompanyFormService = /** @class */ (function(_super) {
          __extends(ViewByCompanyFormService, _super);
          function ViewByCompanyFormService(
            http,
            appConfigService,
            // private readonly bidtSiteApi: BidtSiteApi,
            // private readonly bidtCompanyApi: BidtCompanyApi,
            bidtEmployeeApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtEmployeeApi = bidtEmployeeApi;
            return _this;
          }
          ViewByCompanyFormService.prototype.getViewByCompanyData = function(input) {
            return _super.prototype.post.call(this, this.bidtEmployeeApi.getViewByCompanyData, input);
          };
          ViewByCompanyFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])({
                providedIn: 'root'
              }),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_2__['BidtEmployeeApi']
              ])
            ],
            ViewByCompanyFormService
          );
          return ViewByCompanyFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.component.html':
      /*!****************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.component.html ***!
  \****************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle-container">\r\n        <div *ngIf="componentData && componentData.objectId" class="page-subtitle">\r\n          {{ componentContext }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button type="button" mat-menu-item (click)="refresh()">\r\n        {{ "global.refresh" | translate }}\r\n      </button>\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ "page.mainData" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div style="width: 50%">\r\n                <!-- <div class="grid-cell-content"></div> -->\r\n\r\n                <div class="grid-cell-content">\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".company" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" disabled [(ngModel)]="searchObject.companyName" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".site" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        disabled\r\n                        [(ngModel)]="searchObject.siteName"\r\n                        title="{{ searchObject.siteName }}"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".warehouseOrWorkshop" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        disabled\r\n                        [(ngModel)]="searchObject.warehouseName"\r\n                        title="{{ searchObject.warehouseName }}"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".period" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" disabled [(ngModel)]="period" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".totalAvailability" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" disabled [(ngModel)]="totalAvailability" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".delta" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" disabled [(ngModel)]="delta" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div style="width: 50%">\r\n                <div class="grid-cell grid-cell-chart" style="box-shadow: none">\r\n                  <div class="grid-cell-content">\r\n                    <div class="row flex-row--justify-center">\r\n                      <div class="chart-container">\r\n                        <div class="chart-wrapper">\r\n                          <p-chart\r\n                            [type]="chartType"\r\n                            [data]="cumulativeHoursData"\r\n                            [options]="cumulativeHoursChartOptions"\r\n                            width="100%"\r\n                            height="100%"\r\n                          ></p-chart>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content">\r\n                    <div class="row flex-row--justify-center">\r\n                      <div class="chart-container">\r\n                        <div class="chart-legend">\r\n                          <div class="chart-legend-label">\r\n                            <div class="chart-legend-label-color quantity"></div>\r\n                            <span class="chart-value">{{\r\n                              getComponentName() + ".cumulativeHoursAvailable" | translate\r\n                            }}</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".planning" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="row">\r\n                <div class="scheduler-header" [ngClass]="{ show: !eaTableLoading }">\r\n                  <div class="scheduler-header-btn" *ngIf="!dailyMode">\r\n                    <p-selectButton\r\n                      [(ngModel)]="displayType"\r\n                      [options]="displayTypeList"\r\n                      (onChange)="onDisplayTypeChange()"\r\n                    ></p-selectButton>\r\n                  </div>\r\n                  <div class="scheduler-header-btn" *ngIf="dailyMode">\r\n                    <button mat-raised-button (click)="backToEmployee()">\r\n                      {{ getComponentName() + ".backToEmployee" | translate }}\r\n                    </button>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="qualificationList"\r\n                        [showClear]="true"\r\n                        [(ngModel)]="selectedQualification"\r\n                        (onChange)="onQualificationChange()"\r\n                        placeholder="{{ placeHolderQualification }}"\r\n                        required\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <div class="form-control">\r\n                      <div class="italic-green" *ngIf="qualificationHoursAvailability">\r\n                        {{ getComponentName() + ".availability" | translate }}: {{ qualificationHoursAvailability }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="time-resolution">\r\n                    <p-slider\r\n                      [max]="component.TIME_RESOLUTION_MAX_ZOOM"\r\n                      [min]="component.TIME_RESOLUTION_MIN_ZOOM"\r\n                      [(ngModel)]="schedulerZoomLevel"\r\n                      (onChange)="onChangeTimeResolution($event)"\r\n                    ></p-slider>\r\n                  </div>\r\n\r\n                  <div class="scheduler-legend scheduler-header-btn-legend" *ngIf="dailyMode">\r\n                    <i\r\n                      class="fa fa-fw fa-info aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n                      aria-hidden="true"\r\n                      pTooltip="{{ \'legend\' | translate }}"\r\n                      tooltipPosition="left"\r\n                      (click)="openEmployeePlanningLegendDialog()"\r\n                    ></i>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="scheduler-wrap" [ngClass]="{ show: !eaTableLoading }">\r\n                  <ng-template pTemplate="emptymessage">\r\n                    <span *ngIf="!eaTableLoading"> &nbsp;</span>\r\n\r\n                    <div *ngIf="eaTableLoading" class="aw-table-loading-indicator">\r\n                      <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                      <div class="lds-hourglass"></div>\r\n                    </div>\r\n                  </ng-template>\r\n                  <bry-scheduler\r\n                    *ngIf="calendarMode"\r\n                    #scheduler\r\n                    [barMargin]="barMargin"\r\n                    [readOnly]="schedulerConfig[\'readOnly\']"\r\n                    [resourceMargin]="schedulerConfig[\'resourceMargin\']"\r\n                    [startDate]="schedulerConfig[\'startDate\']"\r\n                    [endDate]="schedulerConfig[\'endDate\']"\r\n                    [mode]="schedulerConfig[\'mode\']"\r\n                    [timeRanges]="schedulerConfig[\'timeRanges\']"\r\n                    [viewPreset]="schedulerConfig[\'viewPreset\']"\r\n                    [columns]="columnsEmployee"\r\n                    [events]="events"\r\n                    [resources]="resourcesEmployee"\r\n                    [eventRenderer]="schedulerConfig[\'eventRenderer\']"\r\n                    (onSchedulerEvents)="onSchedulerEvents($event)"\r\n                    [resourceTimeRanges]="resourceTimeRangesEmployee"\r\n                    [contextMenuFeature]="schedulerConfig[\'scheduleContextMenu\']"\r\n                    [responsiveLevels]="schedulerConfig[\'responsiveLevels\']"\r\n                    [resourceTimeRangesFeature]="schedulerConfig[\'resourceTimeRangesFeatures\']"\r\n                    [zoomOnTimeAxisDoubleClick]="schedulerConfig[\'zoomOnTimeAxisDoubleClick\']"\r\n                    [zoomOnMouseWheel]="schedulerConfig[\'zoomOnMouseWheel\']"\r\n                  ></bry-scheduler>\r\n                  <bry-scheduler\r\n                    *ngIf="!calendarMode"\r\n                    #scheduler\r\n                    [barMargin]="barMargin"\r\n                    [readOnly]="schedulerConfig[\'readOnly\']"\r\n                    [resourceMargin]="schedulerConfig[\'resourceMargin\']"\r\n                    [tickSize]="schedulerConfig[\'tickSize\']"\r\n                    [startDate]="schedulerConfig[\'startDate\']"\r\n                    [endDate]="schedulerConfig[\'endDate\']"\r\n                    [mode]="schedulerConfig[\'mode\']"\r\n                    [timeRanges]="schedulerConfig[\'timeRanges\']"\r\n                    [viewPreset]="schedulerConfig[\'viewPreset\']"\r\n                    [columns]="columnsQualification"\r\n                    [events]="events"\r\n                    [resources]="resourcesQualification"\r\n                    [eventRenderer]="schedulerConfig[\'eventRenderer\']"\r\n                    [resourceColumns]="schedulerConfig[\'resourceColumns\']"\r\n                    [resourceTimeRanges]="resourceTimeRangesQualification"\r\n                    [contextMenuFeature]="schedulerConfig[\'scheduleContextMenu\']"\r\n                    [responsiveLevels]="schedulerConfig[\'responsiveLevels\']"\r\n                    [resourceTimeRangesFeature]="schedulerConfig[\'resourceTimeRangesFeatures\']"\r\n                    [zoomOnTimeAxisDoubleClick]="schedulerConfig[\'zoomOnTimeAxisDoubleClick\']"\r\n                    [zoomOnMouseWheel]="schedulerConfig[\'zoomOnMouseWheel\']"\r\n                  ></bry-scheduler>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-employee-planning-form-legend\r\n  *ngIf="showEmployeePlanningLegendDialog"\r\n  [(display)]="showEmployeePlanningLegendDialog"\r\n></aw-dialog-employee-planning-form-legend>\r\n';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.component.scss':
      /*!****************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.component.scss ***!
  \****************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .main-block {\n  display: none; }\n\n:host .main-block.show {\n    display: initial; }\n\n:host .main-block .action-list .aw-btn {\n    margin-left: 8px; }\n\n:host .main-block .action-list .aw-btn:first-of-type {\n      margin-left: 0; }\n\n:host .row-actions {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  justify-content: flex-end; }\n\n:host .row-actions > .aw-btn {\n    margin-left: 8px; }\n\n:host .row-actions > .aw-btn:first-of-type {\n      margin-left: 0; }\n\n:host .scheduler-wrap {\n  height: 55.5vh;\n  visibility: hidden; }\n\n:host .scheduler-wrap.show {\n    visibility: visible; }\n\n:host .scheduler-header-btn {\n  align-items: center;\n  display: flex;\n  flex-direction: row; }\n\n:host .scheduler-header-dropdown {\n  padding-left: 2rem;\n  align-items: center;\n  display: flex;\n  flex-direction: row; }\n\n:host .scheduler-header {\n  margin-top: 1rem;\n  margin-bottom: 1rem; }\n\n:host .scheduler-header .scheduler-filters {\n    margin-right: 8px; }\n\n:host .flex-row--justify-center {\n  max-width: 100%; }\n\n:host .italic-green {\n  font-style: italic;\n  color: green;\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  padding-left: 1rem;\n  padding-top: 1rem;\n  vertical-align: middle; }\n\n:host .scheduler-header-btn-legend {\n  align-content: flex-end;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end; }\n\n:host .table-border-left {\n  border-left: solid 1px #006ea9 !important; }\n\n:host .table-border-right {\n  border-right: solid 1px #006ea9 !important; }\n\n:host .cell-grey {\n  background-color: #f0f0f0 !important; }\n\n:host .grid-cell.in-simulation {\n  border-left-color: #ffc107;\n  border-left-style: solid;\n  border-left-width: 8px; }\n\n:host .grid-cell-detail .form-control-potential-unit {\n  width: 4rem; }\n\n:host .grid-cell-scope .ancestor-actions,\n:host .grid-cell-scope .ancestor-data {\n  background-color: #f0f0f0; }\n\n:host .grid-cell-scope .ancestor-actions {\n  justify-content: flex-end;\n  padding: 8px; }\n\n:host .grid-cell-state-simulation {\n  background-color: #ffc107;\n  padding: 0; }\n\n:host .grid-cell-state-simulation .grid-cell-title {\n    color: #000; }\n\n:host .grid-cell-state-simulation .simulation-criterion:not(:last-of-type)::after {\n    content: " | "; }\n\n:host .grid-cell-chart .chart-container {\n  display: flex;\n  flex-direction: row;\n  max-width: 100%; }\n\n@media screen and (max-width: 1280px) {\n    :host .grid-cell-chart .chart-container {\n      flex-direction: column; } }\n\n:host .grid-cell-chart .chart-container .chart-legend {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 8px; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color {\n        height: 0.75rem;\n        margin-right: 8px;\n        width: 2rem; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.quantity {\n          background-color: #006ea9; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.amount {\n          background-color: #d3c632; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.not-airworthy {\n          background-color: #f6685e; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-value {\n      font-weight: 700;\n      margin-left: 8px; }\n\n:host .grid-cell-chart .chart-container .chart-wrapper {\n    position: relative;\n    height: 10rem;\n    width: 45rem;\n    max-width: 100%; }\n\n:host .availability-container {\n  display: flex;\n  flex-direction: column; }\n\n:host .availability-container > div {\n    margin-bottom: 0.5rem; }\n\n:host .availability-container .day {\n    width: 100%;\n    font-size: 1.3rem;\n    text-align: center; }\n\n:host .time-resolution {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  margin: 0 calc(2 * 8px);\n  justify-content: flex-end; }\n\n:host .time-resolution p-slider {\n    width: 10rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9odW1hbi1yZXNvdXJjZXMvZW1wbG95ZWUtcGxhbm5pbmcvdmlldy1ieS1zaXRlLWZvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9tb2RpZmllcnMuc2NzcyIsInNyYy9hcHAvbWFpbi9odW1hbi1yZXNvdXJjZXMvZW1wbG95ZWUtcGxhbm5pbmcvdmlldy1ieS1zaXRlLWZvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGh1bWFuLXJlc291cmNlc1xcZW1wbG95ZWUtcGxhbm5pbmdcXHZpZXctYnktc2l0ZS1mb3JtXFxlbXBsb3llZS1wbGFubmluZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2h1bWFuLXJlc291cmNlcy9lbXBsb3llZS1wbGFubmluZy92aWV3LWJ5LXNpdGUtZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIiwic3JjL2FwcC9tYWluL2h1bWFuLXJlc291cmNlcy9lbXBsb3llZS1wbGFubmluZy92aWV3LWJ5LXNpdGUtZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5Q0FBaUM7RUFBakMsc0NBQWlDO0VBQWpDLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLG9DQUE0QjtLQUE1QixpQ0FBNEI7TUFBNUIsZ0NBQTRCO1VBQTVCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVcsRUFBQTs7QUFLYjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLHNDQUFzQyxFQUFBOztBQ3pIeEM7RUFFSSxhQUFhLEVBQUE7O0FBRmpCO0lBS00sZ0JBQWdCLEVBQUE7O0FBTHRCO0lBVVEsZ0JDOEJVLEVBQUE7O0FEeENsQjtNQWFVLGNBQWMsRUFBQTs7QUFieEI7RUVtQkUsYUFBYTtFQUNiLG1CQUFtQjtFRkVqQixxQkFBcUI7RUFDckIseUJBQXlCLEVBQUE7O0FBdkI3QjtJQTBCTSxnQkNjWSxFQUFBOztBRHhDbEI7TUE2QlEsY0FBYyxFQUFBOztBQTdCdEI7RUFrQ0ksY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQW5DdEI7SUFzQ00sbUJBQW1CLEVBQUE7O0FBdEN6QjtFQTJDSSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQTdDdkI7RUFpREksa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBcER2QjtFQXdESSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBekR2QjtJQTJETSxpQkNuQlksRUFBQTs7QUR4Q2xCO0VBZ0VJLGVBQWUsRUFBQTs7QUFoRW5CO0VBb0VJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0IsRUFBQTs7QUEzRTFCO0VBK0VJLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QixFQUFBOztBQWxGN0I7RUFzRkkseUNBQXlDLEVBQUE7O0FBdEY3QztFQTBGSSwwQ0FBMEMsRUFBQTs7QUExRjlDO0VBOEZJLG9DQUFvQyxFQUFBOztBQTlGeEM7RUFrR0ksMEJDaEZZO0VEaUZaLHdCQ2pFZ0I7RURrRWhCLHNCQzVEYyxFQUFBOztBRHhDbEI7RUF5R00sV0FBVyxFQUFBOztBQXpHakI7O0VBZ0hNLHlCQ25IOEIsRUFBQTs7QURHcEM7RUFvSE0seUJBQXlCO0VBQ3pCLFlDN0VZLEVBQUE7O0FEeENsQjtFQTBISSx5QkN4R1k7RUR5R1osVUFBVSxFQUFBOztBQTNIZDtJQThITSxXQ2hJbUIsRUFBQTs7QURFekI7SUFrSU0sY0FBYyxFQUFBOztBQWxJcEI7RUVtQkUsYUFBYTtFQUNiLG1CQUFtQjtFRnFIZixlQUFlLEVBQUE7O0FBQ2Y7SUExSU47TUEySVEsc0JBQXNCLEVBQUEsRUE2Q3pCOztBQXhMTDtJRWNFLGFBQWE7SUFDYixzQkFBc0I7SUZrSWhCLHVCQUF1QjtJQUN2QixnQkMxR1UsRUFBQTs7QUR4Q2xCO01FbUJFLGFBQWE7TUFDYixtQkFBbUI7TUZtSVgsbUJBQW1CLEVBQUE7O0FBdko3QjtRQTBKWSxlQUFlO1FBQ2YsaUJDbkhNO1FEb0hOLFdBQVcsRUFBQTs7QUE1SnZCO1VBK0pjLHlCQUF5QixFQUFBOztBQS9KdkM7VUFtS2MseUJBQXlCLEVBQUE7O0FBbkt2QztVQXVLYyx5QkNuSk0sRUFBQTs7QURwQnBCO01BNktVLGdCQUFnQjtNQUNoQixnQkN0SVEsRUFBQTs7QUR4Q2xCO0lBbUxRLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWUsRUFBQTs7QUF0THZCO0VBNExJLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUE3TDFCO0lBZ01NLHFCQUFxQixFQUFBOztBQWhNM0I7SUFvTU0sV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTs7QUF0TXhCO0VBMk1JLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUFvQztFQUNwQyx5QkFBeUIsRUFBQTs7QUEvTTdCO0lBa05NLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vaHVtYW4tcmVzb3VyY2VzL2VtcGxveWVlLXBsYW5uaW5nL3ZpZXctYnktc2l0ZS1mb3JtL2VtcGxveWVlLXBsYW5uaW5nLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS0tZmxleC1jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXNwbGF5LS1mbGV4LXJvdyB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktLW5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlaWdodC0tMTAwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taW4td2lkdGgtLWZpdC1jb250ZW50IHtcclxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb3NpdGlvbi0tcmVsYXRpdmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2Nyb2xsLXktLW5vbmUge1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC0tdW5zZWxlY3RhYmxlIHtcclxuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmlzaWJpbGl0eS0taGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLS0xMCB7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLndpZHRoLS0yMCB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLndpZHRoLS0zMCB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLndpZHRoLS00MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLndpZHRoLS01MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLndpZHRoLS02MCB7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLndpZHRoLS03MCB7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLndpZHRoLS04MCB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLndpZHRoLS05MCB7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLndpZHRoLS0xMDAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4uZmxleC0tMSB7XHJcbiAgZmxleDogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tMiB7XHJcbiAgZmxleDogMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tMyB7XHJcbiAgZmxleDogMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tNCB7XHJcbiAgZmxleDogNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tNSB7XHJcbiAgZmxleDogNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tYXV0byB7XHJcbiAgZmxleDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLWVuZCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tc3RhcnQge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1lbmQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LXN0YXJ0IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG4iLCJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuQGltcG9ydCBcIm1vZGlmaWVyc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5tYWluLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgJi5zaG93IHtcclxuICAgICAgZGlzcGxheTogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9uLWxpc3Qge1xyXG4gICAgICAuYXctYnRuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJvdy1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAmID4gLmF3LWJ0biB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuc2NoZWR1bGVyLXdyYXAge1xyXG4gICAgaGVpZ2h0OiA1NS41dmg7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcblxyXG4gICAgJi5zaG93IHtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zY2hlZHVsZXItaGVhZGVyLWJ0biB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG5cclxuICAuc2NoZWR1bGVyLWhlYWRlci1kcm9wZG93biB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG5cclxuICAuc2NoZWR1bGVyLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIC5zY2hlZHVsZXItZmlsdGVycyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogJG1hcmdpbi12YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mbGV4LXJvdy0tanVzdGlmeS1jZW50ZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLml0YWxpYy1ncmVlbiB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcblxyXG4gIC5zY2hlZHVsZXItaGVhZGVyLWJ0bi1sZWdlbmQge1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG5cclxuICAudGFibGUtYm9yZGVyLWxlZnQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjMDA2ZWE5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGFibGUtYm9yZGVyLXJpZ2h0IHtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICMwMDZlYTkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jZWxsLWdyZXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY2VsbC5pbi1zaW11bGF0aW9uIHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogJG1hcmdpbi12YWx1ZTtcclxuICB9XHJcblxyXG4gIC5ncmlkLWNlbGwtZGV0YWlsIHtcclxuICAgIC5mb3JtLWNvbnRyb2wtcG90ZW50aWFsLXVuaXQge1xyXG4gICAgICB3aWR0aDogNHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ncmlkLWNlbGwtc2NvcGUge1xyXG4gICAgLmFuY2VzdG9yLWFjdGlvbnMsXHJcbiAgICAuYW5jZXN0b3ItZGF0YSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAuYW5jZXN0b3ItYWN0aW9ucyB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLXN0YXRlLXNpbXVsYXRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgLmdyaWQtY2VsbC10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaW11bGF0aW9uLWNyaXRlcmlvbjpub3QoOmxhc3Qtb2YtdHlwZSk6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCIgfCBcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ncmlkLWNlbGwtY2hhcnQge1xyXG4gICAgLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNoYXJ0LWxlZ2VuZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgIC5jaGFydC1sZWdlbmQtbGFiZWwge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIC5jaGFydC1sZWdlbmQtbGFiZWwtY29sb3Ige1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDJyZW07XHJcblxyXG4gICAgICAgICAgICAmLnF1YW50aXR5IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2ZWE5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmFtb3VudCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QzYzYzMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5ub3QtYWlyd29ydGh5IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoYXJ0LXZhbHVlIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaGFydC13cmFwcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICB3aWR0aDogNDVyZW07XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYXZhaWxhYmlsaXR5LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aW1lLXJlc29sdXRpb24ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luOiAwIGNhbGMoMiAqICN7JG1hcmdpbi12YWx1ZX0pO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICBwLXNsaWRlciB7XHJcbiAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.component.ts':
      /*!**************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.component.ts ***!
  \**************************************************************************************************************/
      /*! exports provided: EmployeePlanningFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'EmployeePlanningFormComponent',
          function() {
            return EmployeePlanningFormComponent;
          }
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/fesm5/common.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! lodash-es */ './node_modules/lodash-es/lodash.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! moment */ './node_modules/moment/moment.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          moment__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/components/scheduler/scheduler.component */ './src/app/shared/components/scheduler/scheduler.component.ts'
        );
        /* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/constants/lang-constants */ './src/app/shared/constants/lang-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
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
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _employee_planning_form_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./employee-planning-form.service */ './src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.service.ts'
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
        var _a;

        var EmployeePlanningFormComponent = /** @class */ (function(_super) {
          __extends(EmployeePlanningFormComponent, _super);
          function EmployeePlanningFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            employeePlanningFormService,
            dateService,
            translateService,
            datePipe
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.sessionService = sessionService;
            _this.employeePlanningFormService = employeePlanningFormService;
            _this.dateService = dateService;
            _this.translateService = translateService;
            _this.datePipe = datePipe;
            _this.calendarMode = true;
            _this.dailyMode = false;
            _this.dateAbsences = [];
            _this.barMargin = 10;
            _this.resourceTimeRangesEmployee = [];
            _this.resourceTimeRangesEmployeeDaily = [];
            _this.resourceTimeRangesEmployeeSearch = [];
            _this.resourceTimeRangesQualification = [];
            _this.timeRanges = true;
            _this.init();
            _this.initChart();
            _this.setSchedulerConfig();
            _this.setSchedulerColumnEmployeeList();
            _this.setSchedulerColumnQualificationList();
            _this.loadQualificationsList();
            _this.component = EmployeePlanningFormComponent_1;
            _this.displayType = EmployeePlanningFormComponent_1.employees;
            _this.schedulerTimeResolutionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_5__['Subject']();
            _this.displayTypeList = [
              {
                label: _this.translateService.instant(_this.getTranslateKey('calendarEmployee')),
                value: EmployeePlanningFormComponent_1.employees
              },
              {
                label: _this.translateService.instant(_this.getTranslateKey('calendarQualification')),
                value: EmployeePlanningFormComponent_1.qualifications
              }
            ];
            _this.placeHolderQualification = _this.translateService.instant(
              _this.getTranslateKey('qualificationFilter')
            );
            _this.registerSchedulerTimeResolutionObservable();
            return _this;
          }
          EmployeePlanningFormComponent_1 = EmployeePlanningFormComponent;
          /****************
           * Initialization
           ***************/
          EmployeePlanningFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.eventCounter = 1;
            this.resourceTimeRangeEmployeeCounter = 1;
            this.resourceTimeRangeQualificationCounter = 1;
            this.milisecondsInADay =
              this.component.hoursInADay *
              this.component.minutesInAnHour *
              this.component.secondsInAMinute *
              this.component.milisecondsInASecond;
            this.schedulerLoading = false;
            this.schedulerZoomLevel = EmployeePlanningFormComponent_1.TIME_RESOLUTION_MIN_ZOOM;
            if (!!this.componentData.objectId) {
              this.searchObject = this.serializationService.deserialize(this.componentData.objectId);
              this.setSchedulerDate();
              this.setComponentContext();
              this.search();
              if (!!this.searchObject.startDate && !!this.searchObject.endDate) {
                this.startDate = this.dateService.dateToString(this.searchObject.startDate);
                this.endDate = this.dateService.dateToString(this.searchObject.endDate);
                this.period = this.startDate + ' - ' + this.endDate;
                var deltaNumber = this.getNumberOfDays(this.searchObject.startDate, this.searchObject.endDate) + 1;
                this.delta = deltaNumber.toString();
                this.delta += ' ';
                this.delta += this.translateService.instant(this.getTranslateKey('days'));
              }
            }
          };
          EmployeePlanningFormComponent.prototype.ngAfterViewInit = function() {
            if (
              this.translateService.currentLang ===
              _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_10__['LangConstants'].FRENCH_CODE
            ) {
              this.scheduler.schedulerEngine.localeManager.locale = 'Fr';
            } else {
              this.scheduler.schedulerEngine.localeManager.locale = 'En';
            }
          };
          EmployeePlanningFormComponent.prototype.refresh = function() {
            this.init();
            this.initChart();
            this.events = [];
            this.ngOnInit();
            var startDate = new Date(this.searchObject.startDate);
            var endDate = new Date(this.searchObject.endDate);
            this.switchViewPresetCustomDayAndWeek();
            this.scheduler.schedulerEngine.setTimeSpan(startDate, endDate);
            this.dailyMode = false;
          };
          EmployeePlanningFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__['ComponentConstants']
              .HR_EMPLOYEE_PLANNING_FORM;
          };
          EmployeePlanningFormComponent.prototype.init = function() {
            // General info
            this.searchObject = {};
            this.delta = undefined;
            this.milisecondsInADay = 0;
            this.eaTableLoading = true;
            this.selectedEA = [];
            this.qualificationTableLoading = false;
            this.calendarMode = true;
            this.dailyMode = false;
            this.events = [];
            this.resourcesEmployee = [];
            this.resourcesQualification = [];
            this.resourceTimeRangesEmployee = [];
            this.resourceTimeRangesEmployeeDaily = [];
            this.resourceTimeRangesEmployeeSearch = [];
            this.resourceTimeRangesQualification = [];
            this.qualificationList = [];
            this.showEmployeePlanningLegendDialog = false;
            this.columnEmployeeCounter = 1;
            this.columnQualificationCounter = 1;
            this.displayType = EmployeePlanningFormComponent_1.employees;
            this.componentContext = '';
          };
          EmployeePlanningFormComponent.prototype.initChart = function() {
            this.chartType = 'line';
            this.cumulativeHoursData = {
              datasets: [
                {
                  data: [],
                  label: 'Cumulative hours available',
                  borderColor: '#006ea9',
                  backgroundColor: '#006ea9',
                  hoverBackgroundColor: '#006ea9',
                  fill: false
                }
              ],
              labels: []
            };
            this.setChartOptions();
          };
          EmployeePlanningFormComponent.prototype.setChartOptions = function() {
            this.cumulativeHoursChartOptions = {
              elements: {
                line: {
                  tension: 0
                }
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true
                    }
                  }
                ]
              },
              legend: {
                display: false
              },
              tooltips: {
                bodyFontColor:
                  _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__['AppConstants'].COLOR_BACKGROUND_PRIMARY
              }
            };
          };
          EmployeePlanningFormComponent.prototype.setChartData = function(results) {
            var _this = this;
            this.translateService.get(this.getComponentName() + '.cumulativeHoursAvailable').subscribe(function(res) {
              var chartdata = {
                datasets: [
                  {
                    data: [],
                    label: res,
                    borderColor: '#006ea9',
                    backgroundColor: '#006ea9',
                    hoverBackgroundColor: '#006ea9',
                    fill: false
                  }
                ],
                labels: []
              };
              if (!!results) {
                if (!!results[0] && !!results[0].datedata) {
                  var keys_1 = Object.keys(results[0].datedata);
                  var sortedKeys_1 = keys_1.sort();
                  var data_1 = [];
                  if (!!results[0].datedata) {
                    for (var i = 0; i < Object.keys(keys_1).length; i++) {
                      data_1[i] = 0;
                    }
                    results.forEach(function(result) {
                      if (!!result && !!result.datedata) {
                        for (var y = 0; y < Object.keys(keys_1).length; y++) {
                          var value = result.datedata[sortedKeys_1[y]];
                          if (value !== null && value !== undefined) {
                            data_1[y] = data_1[y] + value;
                          }
                        }
                      }
                    });
                  }
                  data_1.forEach(function(value) {
                    chartdata.datasets[0].data.push(value);
                  });
                  _this.cumulativeHoursData = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__['cloneDeep'])(chartdata);
                  sortedKeys_1.forEach(function(key) {
                    _this.cumulativeHoursData.labels.push(_this.dateService.dateToString(new Date(key)));
                  });
                }
              }
            });
          };
          EmployeePlanningFormComponent.prototype.search = function() {
            var _this = this;
            this.schedulerLoading = !this.isCreateOpenMode;
            this.eaTableLoading = true;
            this.qualificationTableLoading = true;
            this.employeePlanningFormService.getViewByCompanyData(this.searchObject).subscribe(function(results) {
              if (
                !!results[0].staffPlanningViewByCompanyTableOutput &&
                !!results[0].staffPlanningViewByCompanyTableOutput[0].availabilityHours
              ) {
                _this.totalAvailability =
                  results[0].staffPlanningViewByCompanyTableOutput[0].availabilityHours.split(':')[0] + ' H';
              }
              if (
                !!results[0].staffPlanningViewByCompanyTableOutput &&
                !!results[0].staffPlanningViewByCompanyTableOutput[0].codeQualif
              ) {
                _this.hoursAvailabilityPerQualification = new Map();
                _this.hoursAvailabilityPerQualification =
                  results[0].staffPlanningViewByCompanyTableOutput[0].codeQualif;
              }
              if (
                !!results[0].staffPlanningViewBySiteEmployeeAvailabilityTableOutput &&
                results[0].staffPlanningViewBySiteEmployeeAvailabilityTableOutput.length > 0
              ) {
                // chart
                _this.setChartData(results[0].staffPlanningViewBySiteEmployeeAvailabilityTableOutput);
                _this.planningEmployeeAvailability = results[0].staffPlanningViewBySiteEmployeeAvailabilityTableOutput;
                // employee availability
                _this.setDateAbsences(_this.planningEmployeeAvailability);
                _this.buildSchedulerResourceEmployeeList(_this.planningEmployeeAvailability);
                _this.buildResourceTimeRangesEmployee(_this.planningEmployeeAvailability);
                _this.buildResourceTimeRangesEmployeeDaily(_this.planningEmployeeAvailability);
              } else {
                _this.eaTableLoading = false;
              }
              if (
                !!results[0].staffPlanningViewBySiteQualificationAvailabilityTableOutput &&
                results[0].staffPlanningViewBySiteQualificationAvailabilityTableOutput.length > 0
              ) {
                _this.planningQualificationAvailability =
                  results[0].staffPlanningViewBySiteQualificationAvailabilityTableOutput;
                // qualification
                _this.buildSchedulerResourceQualificationList(
                  results[0].staffPlanningViewBySiteQualificationAvailabilityTableOutput
                );
                _this.buildResourceTimeRangesQualification(
                  results[0].staffPlanningViewBySiteQualificationAvailabilityTableOutput
                );
                _this.buildQualificationList(results[0].staffPlanningViewBySiteQualificationAvailabilityTableOutput);
              } else {
                _this.qualificationTableLoading = false;
              }
            });
            setTimeout(function() {
              _this.scheduler.schedulerEngine.zoomToFit();
              _this.schedulerZoomLevel =
                _this.scheduler.schedulerEngine.zoomLevel > EmployeePlanningFormComponent_1.TIME_RESOLUTION_MAX_ZOOM
                  ? EmployeePlanningFormComponent_1.TIME_RESOLUTION_MAX_ZOOM
                  : _this.scheduler.schedulerEngine.zoomLevel < EmployeePlanningFormComponent_1.TIME_RESOLUTION_MIN_ZOOM
                  ? EmployeePlanningFormComponent_1.TIME_RESOLUTION_MIN_ZOOM
                  : _this.scheduler.schedulerEngine.zoomLevel;
              _this.schedulerLoading = false;
            });
          };
          EmployeePlanningFormComponent.prototype.buildQualificationList = function(qualificationAvailability) {
            var _this = this;
            qualificationAvailability.forEach(function(qualification) {
              _this.qualificationList.push({ label: qualification.qualification, value: qualification });
            });
          };
          EmployeePlanningFormComponent.prototype.setSchedulerColumnEmployeeList = function() {
            this.columnsEmployee = [
              {
                field: 'name',
                text: this.translateService.instant(this.getTranslateKey('name')),
                htmlEncode: false,
                renderer: function(_a) {
                  var record = _a.record;
                  return (
                    '\n        <div class="info">\n                <a id ="' +
                    record.data.idGenerated +
                    '" class="employee-select">' +
                    record.data.name +
                    '</a>\n                <div class="desc" style="text-align:center;">(' +
                    record.data.hoursAvailability +
                    ' H)</div>\n        </div>\n        '
                  );
                },
                sortable: false
              },
              {
                field: 'qualifications',
                text: this.translateService.instant(this.getTranslateKey('qualifications')),
                htmlEncode: false,
                width: 250,
                sortable: false,
                renderer: function(_a) {
                  var record = _a.record;
                  return (
                    '\n          <div class="info">\n                  <div>\n                  ' +
                    record.data.qualification.join('<br>') +
                    '\n                  </div>\n          </div>\n          '
                  );
                }
              }
            ];
          };
          EmployeePlanningFormComponent.prototype.buildResourceTimeRangesEmployee = function(listeAvaibility) {
            var _this = this;
            listeAvaibility.forEach(function(currentAvailability) {
              if (currentAvailability.datedata) {
                var dateData_1 = currentAvailability.datedata;
                Object.keys(dateData_1).forEach(function(key) {
                  var startDateWorkTemplate = new Date(key);
                  if (currentAvailability.listBidtLaborTemplateHoursDTO) {
                    var workTemplate = currentAvailability.listBidtLaborTemplateHoursDTO.filter(function(
                      laborTemplate
                    ) {
                      return laborTemplate.thDayOfWeek === startDateWorkTemplate.getDay() + 1;
                    });
                    if (workTemplate && workTemplate.length > 0) {
                      _this.resourceTimeRangesEmployeeSearch.push(
                        _this.buildSchedulerResourceTimeRangeEmployee(
                          currentAvailability.employeeId,
                          new Date(key),
                          dateData_1[key]
                        )
                      );
                    } else {
                      _this.resourceTimeRangesEmployeeSearch.push(
                        _this.buildSchedulerResourceTimeRangeEmployeeWithCustomStyle(
                          currentAvailability.employeeId,
                          new Date(key)
                        )
                      );
                    }
                  }
                });
              }
            });
            this.resourceTimeRangesEmployee = this.resourceTimeRangesEmployeeSearch;
          };
          EmployeePlanningFormComponent.prototype.buildSchedulerResourceTimeRangeEmployee = function(
            employeeId,
            startDate,
            hoursAvailability
          ) {
            return {
              id: this.generateSchedulerResourceTimeRangeEmployeeId(),
              resourceId: employeeId.toString(),
              startDate: startDate,
              endDate: undefined,
              duration: 1,
              durationUnit: 'd',
              name: this.roundWithOneDigit(hoursAvailability).toString() + ' H',
              eventType: '',
              timeRangeColor: hoursAvailability === 0 ? 'red' : 'green'
            };
          };
          EmployeePlanningFormComponent.prototype.buildSchedulerResourceTimeRangeEmployeeWithCustomStyle = function(
            employeeId,
            startDate
          ) {
            return {
              id: this.generateSchedulerResourceTimeRangeEmployeeId(),
              resourceId: employeeId.toString(),
              startDate: startDate,
              endDate: undefined,
              duration: 1,
              durationUnit: 'd',
              eventType: '',
              style:
                'background : repeating-linear-gradient(45deg, rgba(155,155,155,0.5),' +
                ' rgba(155,155,155,0.5) 8px, transparent 8px, transparent 16px);color: #666'
            };
          };
          EmployeePlanningFormComponent.prototype.buildSchedulerResourceEmployeeList = function(listeAvaibility) {
            var _this = this;
            this.resourcesEmployee = listeAvaibility.map(function(element) {
              var hoursAvailability = 0;
              if (element.datedata) {
                var dateData_2 = element.datedata;
                Object.keys(element.datedata).forEach(function(key) {
                  return (hoursAvailability += dateData_2[key]);
                });
              }
              return _this.buildSchedulerResourceEmployeeFromAsset(element, hoursAvailability);
            });
            this.sortResources(this.resourcesEmployee);
          };
          EmployeePlanningFormComponent.prototype.buildSchedulerResourceEmployeeFromAsset = function(
            element,
            hoursAvailability
          ) {
            var _this = this;
            this.qualifications = [];
            if (!!element.qualificationsId) {
              element.qualificationsId.forEach(function(result) {
                _this.qualifications.push(
                  _this.qualificationLists.filter(function(type) {
                    return type.labelValueList.value === result.toString();
                  })[0].labelValueList.label
                );
              });
            }
            return {
              id: element.employeeId ? element.employeeId.toString() : '',
              name: element.employee,
              qualification: !!this.qualifications ? this.qualifications : undefined,
              idGenerated: this.generateSchedulerColumnsEmployeeId(),
              hoursAvailability: this.roundWithOneDigit(hoursAvailability),
              children: []
            };
          };
          EmployeePlanningFormComponent.prototype.buildResourceTimeRangesEmployeeDaily = function(listeAvaibility) {
            var _this = this;
            var days = this.getDates(this.searchObject.startDate, this.searchObject.endDate);
            days.forEach(function(day) {
              listeAvaibility.forEach(function(result) {
                var startDate = new Date(day.getTime());
                startDate.setHours(0);
                startDate.setMinutes(0);
                startDate.setSeconds(0);
                if (result.listBidtLaborTemplateHoursDTO) {
                  var workTemplate = result.listBidtLaborTemplateHoursDTO.filter(function(laborTemplate) {
                    return laborTemplate.thDayOfWeek === startDate.getDay() + 1;
                  });
                  if (!!workTemplate) {
                    workTemplate.forEach(function(wt) {
                      var startDateWorkTemplate = new Date(
                        startDate.getTime() + wt.thHourOfBeginning * _this.component.milisecondsInASecond
                      );
                      var endDateWorkTemplate = new Date(
                        startDate.getTime() + wt.thHourOfEnd * _this.component.milisecondsInASecond
                      );
                      _this.resourceTimeRangesEmployeeDaily.push(
                        _this.buildSchedulerResourceTimeRangeEmployeeDaily(
                          result.employeeId,
                          startDateWorkTemplate,
                          endDateWorkTemplate
                        )
                      );
                    });
                  }
                }
              });
            });
          };
          EmployeePlanningFormComponent.prototype.buildSchedulerResourceTimeRangeEmployeeDaily = function(
            employeeId,
            startDate,
            endDate
          ) {
            return {
              id: this.generateSchedulerResourceTimeRangeEmployeeId(),
              resourceId: employeeId.toString(),
              startDate: startDate,
              endDate: endDate,
              eventType: '',
              timeRangeColor: 'green'
            };
          };
          EmployeePlanningFormComponent.prototype.buildResourceTimeRangesQualification = function(
            qualificationAvailability
          ) {
            var _this = this;
            this.resourceTimeRangesQualification = [];
            qualificationAvailability.forEach(function(qualification) {
              if (qualification.datedata) {
                var dateData_3 = qualification.datedata;
                Object.keys(dateData_3).forEach(function(key) {
                  _this.resourceTimeRangesQualification.push(
                    _this.buildSchedulerResourceTimeRangeQualification(
                      qualification.qualification,
                      new Date(key),
                      dateData_3[key]
                    )
                  );
                });
              }
            });
          };
          // Only for daily View
          EmployeePlanningFormComponent.prototype.buildSchedulerEventsList = function(listeAvaibility) {
            var _this = this;
            this.events = [];
            this.dateAbsences.forEach(function(element) {
              var startDateWorkTemplate = new Date(element.key);
              var workTemplate = listeAvaibility.find(function(result) {
                return result.employeeId === element.employeeId;
              });
              if (workTemplate && workTemplate.listBidtLaborTemplateHoursDTO) {
                var workTemplatefilter = workTemplate.listBidtLaborTemplateHoursDTO.filter(function(laborTemplate) {
                  return laborTemplate.thDayOfWeek === startDateWorkTemplate.getDay() + 1;
                });
                if (!!workTemplatefilter) {
                  if (
                    element.type ===
                      _employee_planning_form_service__WEBPACK_IMPORTED_MODULE_22__['UpcomingEventStatus'].WORKORDER &&
                    element.end != undefined
                  ) {
                    var endDateWorkTemplate = new Date(element.end);
                    startDateWorkTemplate = new Date(element.start);
                    _this.events.push(
                      _this.buildSchedulerEventFromAsset(element, startDateWorkTemplate, endDateWorkTemplate)
                    );
                  } else {
                    workTemplatefilter.forEach(function(wt) {
                      var endDateWorkTemplate = new Date(element.key);
                      startDateWorkTemplate = new Date(element.key);
                      startDateWorkTemplate = new Date(
                        startDateWorkTemplate.getTime() + wt.thHourOfBeginning * _this.component.milisecondsInASecond
                      );
                      endDateWorkTemplate = new Date(
                        endDateWorkTemplate.getTime() + wt.thHourOfEnd * _this.component.milisecondsInASecond
                      );
                      _this.events.push(
                        _this.buildSchedulerEventFromAsset(element, startDateWorkTemplate, endDateWorkTemplate)
                      );
                    });
                  }
                }
              }
            });
          };
          EmployeePlanningFormComponent.prototype.buildSchedulerEventFromAsset = function(element, startDate, endDate) {
            var type = element.type ? element.type : '';
            return {
              id: this.generateSchedulerEventId(),
              resourceId: element.employeeId ? element.employeeId.toString() : '',
              name: element.type ? this.translateService.instant(this.getTranslateKey(element.type.toLowerCase())) : '',
              desc: element.name ? element.name : '',
              startDate: startDate,
              endDate: endDate,
              eventType: '',
              eventColor: EmployeePlanningFormComponent_1.EVENT_COLOR_EVENT[type],
              children: []
            };
          };
          EmployeePlanningFormComponent.prototype.setSchedulerColumnQualificationList = function() {
            this.columnsQualification = [
              {
                field: 'name',
                text: this.translateService.instant(this.getTranslateKey('qualifications')),
                htmlEncode: false,
                width: 150,
                renderer: function(_a) {
                  var record = _a.record;
                  return (
                    '\n        <div class="info">\n                <div>' +
                    record.data.name +
                    '</div>\n                <div class="desc">(' +
                    record.data.hoursAvailability +
                    ' H)</div>\n        </div>\n        '
                  );
                },
                sortable: false
              }
            ];
          };
          EmployeePlanningFormComponent.prototype.buildSchedulerResourceQualificationList = function(listeAvaibility) {
            var _this = this;
            this.resourcesQualification = listeAvaibility.map(function(element) {
              var hoursAvailability = 0;
              if (element.datedata) {
                var dateData_4 = element.datedata;
                Object.keys(element.datedata).forEach(function(key) {
                  return (hoursAvailability += dateData_4[key]);
                });
              }
              return _this.buildSchedulerResourceQualificationFromAsset(element, hoursAvailability);
            });
            this.sortResources(this.resourcesQualification);
          };
          EmployeePlanningFormComponent.prototype.sortResources = function(tabToSort) {
            tabToSort.sort(function(a, b) {
              return b.hoursAvailability - a.hoursAvailability;
            });
          };
          EmployeePlanningFormComponent.prototype.buildSchedulerResourceQualificationFromAsset = function(
            element,
            hoursAvailability
          ) {
            return {
              id: element.qualification ? element.qualification : '',
              name: element.qualification,
              idGenerated: this.generateSchedulerColumnsQualificationId(),
              hoursAvailability: this.roundWithOneDigit(hoursAvailability),
              children: []
            };
          };
          EmployeePlanningFormComponent.prototype.buildSchedulerResourceTimeRangeQualification = function(
            qualification,
            startDate,
            hoursAvailability
          ) {
            return {
              id: this.generateSchedulerResourceTimeRangeQualificationId(),
              resourceId: qualification,
              startDate: startDate,
              duration: 1,
              durationUnit: 'd',
              name: this.roundWithOneDigit(hoursAvailability).toString() + 'H',
              eventType: '',
              timeRangeColor: hoursAvailability === 0 ? 'red' : 'green'
            };
          };
          EmployeePlanningFormComponent.prototype.generateSchedulerResourceTimeRangeEmployeeId = function() {
            return this.resourceTimeRangeEmployeeCounter++;
          };
          EmployeePlanningFormComponent.prototype.generateSchedulerResourceTimeRangeQualificationId = function() {
            return this.resourceTimeRangeQualificationCounter++;
          };
          EmployeePlanningFormComponent.prototype.generateSchedulerEventId = function() {
            return this.eventCounter++;
          };
          EmployeePlanningFormComponent.prototype.generateSchedulerColumnsEmployeeId = function() {
            return this.columnEmployeeCounter++;
          };
          EmployeePlanningFormComponent.prototype.generateSchedulerColumnsQualificationId = function() {
            return this.columnQualificationCounter++;
          };
          EmployeePlanningFormComponent.prototype.getDates = function(startDate, stopDate) {
            var dateArray = new Array();
            var currentDate = new Date(startDate.valueOf());
            var endDate = new Date(stopDate.valueOf());
            while (currentDate <= endDate) {
              dateArray.push(new Date(currentDate));
              currentDate = this.addDays(currentDate, 1);
            }
            return dateArray;
          };
          EmployeePlanningFormComponent.prototype.addDays = function(currentDate, days) {
            var date = new Date(currentDate.valueOf());
            date.setDate(date.getDate() + days);
            return date;
          };
          EmployeePlanningFormComponent.prototype.roundWithOneDigit = function(numberWithDigit) {
            if (Number.isInteger(numberWithDigit)) {
              return numberWithDigit;
            } else {
              return numberWithDigit.toFixed(1);
            }
          };
          EmployeePlanningFormComponent.prototype.setDateAbsences = function(results) {
            var _this = this;
            this.dateAbsences = [];
            if (!!results) {
              // set table data
              if (!!results[0].datedata) {
                results.forEach(function(result) {
                  _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__['ListUtils']
                    .orEmpty(result.dateAbsences)
                    .forEach(function(resultFilter) {
                      resultFilter.employeeId = result.employeeId;
                      _this.dateAbsences.push(resultFilter);
                    });
                });
              }
            }
            this.eaTableLoading = false;
          };
          EmployeePlanningFormComponent.prototype.onQualificationChange = function() {
            if (this.selectedQualification) {
              if (this.selectedQualification.qualification && this.hoursAvailabilityPerQualification) {
                var hoursAvailability = this.hoursAvailabilityPerQualification[
                  this.selectedQualification.qualification
                ];
                if (hoursAvailability) {
                  this.qualificationHoursAvailability = this.roundWithOneDigit(hoursAvailability).toString() + ' H';
                }
              }
              this.buildSchedulerResourceQualificationListWithQualification();
              this.buildSchedulerResourceEMployeeListWithQualification();
            } else {
              this.qualificationHoursAvailability = undefined;
              this.buildSchedulerResourceEmployeeList(this.planningEmployeeAvailability);
              this.buildSchedulerResourceQualificationList(this.planningQualificationAvailability);
            }
          };
          EmployeePlanningFormComponent.prototype.buildSchedulerResourceEMployeeListWithQualification = function() {
            var _this = this;
            this.resourcesEmployee = this.planningEmployeeAvailability
              .filter(function(element) {
                if (
                  element.qualificationsId &&
                  _this.selectedQualification.idQualification &&
                  element.qualificationsId.includes(_this.selectedQualification.idQualification)
                ) {
                  return true;
                }
                return false;
              })
              .map(function(element) {
                var hoursAvailability = 0;
                if (element.datedata) {
                  var dateData_5 = element.datedata;
                  Object.keys(element.datedata).forEach(function(key) {
                    return (hoursAvailability += dateData_5[key]);
                  });
                }
                return _this.buildSchedulerResourceEmployeeFromAsset(element, hoursAvailability);
              });
            this.sortResources(this.resourcesEmployee);
          };
          EmployeePlanningFormComponent.prototype.buildSchedulerResourceQualificationListWithQualification = function() {
            var _this = this;
            this.resourcesQualification = this.planningQualificationAvailability
              .filter(function(element) {
                if (element.idQualification === _this.selectedQualification.idQualification) {
                  return true;
                }
                return false;
              })
              .map(function(element) {
                var hoursAvailability = 0;
                if (element.datedata) {
                  var dateData_6 = element.datedata;
                  Object.keys(element.datedata).forEach(function(key) {
                    return (hoursAvailability += dateData_6[key]);
                  });
                }
                return _this.buildSchedulerResourceQualificationFromAsset(element, hoursAvailability);
              });
          };
          // tslint:disable-next-line: no-any
          EmployeePlanningFormComponent.prototype.openEmployee = function(row) {
            var _this = this;
            var input = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_21__['ObjectUtils'].isDefined(row)
              ? Number(row.id)
              : _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_21__['ObjectUtils'].isDefined(this.selectedEA[0])
              ? Number(this.selectedEA[0].employeeId)
              : undefined;
            if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_21__['ObjectUtils'].isDefined(input)) {
              this.employeePlanningFormService.getEmployeeDetails(input).subscribe(function(res) {
                if (res.length === 1 && !!res[0]) {
                  var labelKey = 'transaction.EmployeeFormComponent';
                  var data = {
                    id: _this.tabService.generateId(),
                    componentId: 'EmployeeFormComponent',
                    objectId: res[0].bidtEmployeeDTO && _this.serializationService.serialize(res[0].bidtEmployeeDTO),
                    openMode:
                      _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read
                  };
                  _this.tabService.open(_this.tabService.create(data, labelKey, true));
                }
              });
            }
          };
          EmployeePlanningFormComponent.prototype.getNumberOfDays = function(startDate, endDate) {
            var startDateMS = new Date(startDate).getTime();
            var endDateMS = new Date(endDate).getTime();
            var differenceMS = endDateMS - startDateMS;
            return Math.round(differenceMS / this.milisecondsInADay);
          };
          EmployeePlanningFormComponent.prototype.getDate = function(isoString) {
            var date = new Date(isoString);
            var customDate = isNaN(new Date(date).getDate())
              ? isoString
              : '' + this.datePipe.transform(new Date(date), 'dd/MM');
            return customDate;
          };
          EmployeePlanningFormComponent.prototype.setComponentContext = function() {
            var _this = this;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__['forkJoin'])({
              company: this.searchObject.companyName
                ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__['of'])(this.searchObject.companyName)
                : this.employeePlanningFormService.findBidtCompanyById(this.searchObject.companyId).pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__['map'])(function(company) {
                      return company.companyName;
                    })
                  ),
              site: this.searchObject.siteName
                ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__['of'])(this.searchObject.siteName)
                : this.employeePlanningFormService.findBidtSiteById(this.searchObject.siteId).pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__['map'])(function(site) {
                      return site.siteName;
                    })
                  ),
              warehouse: this.searchObject.warehouseName
                ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__['of'])(this.searchObject.warehouseName)
                : this.searchObject.warehouseId
                ? this.employeePlanningFormService.getBidtWarehouseById(this.searchObject.warehouseId).pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__['map'])(function(warehouse) {
                      return warehouse.whName;
                    })
                  )
                : ' '
            }).subscribe(function(result) {
              _this.searchObject.companyName = result.company;
              _this.searchObject.siteName = result.site;
              if (!!_this.searchObject.warehouseId) {
                _this.searchObject.warehouseName = result.warehouse;
                _this.componentContext = result.company + ' | ' + result.site + ' | ' + result.warehouse;
              } else {
                _this.componentContext = result.company + ' | ' + result.site;
              }
              _this.displayComponentContext(_this.componentContext, _this.isCreateOpenMode);
            });
          };
          EmployeePlanningFormComponent.prototype.setSchedulerDate = function() {
            this.schedulerConfig = __assign({}, this.schedulerConfig, {
              startDate: this.searchObject.startDate,
              endDate: this.searchObject.endDate
            });
          };
          EmployeePlanningFormComponent.prototype.backToEmployee = function() {
            this.events = [];
            var startDate = new Date(this.searchObject.startDate);
            var endDate = new Date(this.searchObject.endDate);
            this.switchViewPresetCustomDayAndWeek();
            this.scheduler.schedulerEngine.setTimeSpan(startDate, endDate);
            this.resourceTimeRangesEmployee = this.resourceTimeRangesEmployeeSearch;
            this.dailyMode = !this.dailyMode;
          };
          EmployeePlanningFormComponent.prototype.onSchedulerEvents = function(event) {
            if (event.type === 'cellclick' && event.event.target.matches('.employee-select')) {
              var employee = this.resourcesEmployee.find(function(resource) {
                return (resource.idGenerated ? resource.idGenerated.toString() : '') === event.event.target.id;
              });
              if (!!employee) {
                this.openEmployee(employee);
              }
            } else if (
              event.type === 'timeaxisheaderclick' &&
              event.event.target.matches('.b-sch-header-timeaxis-cell') &&
              !this.dailyMode &&
              this.calendarMode
            ) {
              this.dailyMode = !this.dailyMode;
              if (this.dailyMode) {
                var startDate = moment__WEBPACK_IMPORTED_MODULE_4__(
                  event.event.target.innerHTML,
                  'DD/MM/YYYY'
                ).toDate();
                startDate.setHours(startDate.getHours());
                var endDate = new Date(startDate);
                var hoursPerDay = 24;
                endDate.setHours(startDate.getHours() + hoursPerDay);
                this.switchViewPresetHourAndDay();
                this.scheduler.schedulerEngine.setTimeSpan(startDate, endDate);
                this.buildSchedulerEventsList(this.planningEmployeeAvailability);
                this.resourceTimeRangesEmployee = this.resourceTimeRangesEmployeeDaily;
              }
            }
          };
          EmployeePlanningFormComponent.prototype.switchViewPresetHourAndDay = function() {
            this.schedulerConfig = __assign({}, this.schedulerConfig, {
              viewPreset: { name: EmployeePlanningFormComponent_1.hourAndDay }
            });
          };
          EmployeePlanningFormComponent.prototype.switchViewPresetCustomDayAndWeek = function() {
            this.schedulerConfig = __assign({}, this.schedulerConfig, {
              viewPreset: {
                name: EmployeePlanningFormComponent_1.dayAndWeek,
                displayDateFormat: EmployeePlanningFormComponent_1.displayDateFormat,
                timeResolution: {
                  unit: EmployeePlanningFormComponent_1.day,
                  increment: 1
                },
                headerConfig: {
                  middle: {
                    unit: EmployeePlanningFormComponent_1.day,
                    dateFormat: EmployeePlanningFormComponent_1.dateFormat
                  }
                }
              }
            });
          };
          EmployeePlanningFormComponent.prototype.openEmployeePlanningLegendDialog = function() {
            this.showEmployeePlanningLegendDialog = true;
          };
          EmployeePlanningFormComponent.prototype.onDisplayTypeChange = function() {
            this.calendarMode = this.displayType === EmployeePlanningFormComponent_1.employees;
          };
          EmployeePlanningFormComponent.prototype.setSchedulerConfig = function() {
            this.schedulerConfig = {
              appendTo: 'container',
              mode: 'horizontal',
              viewPreset: {
                name: EmployeePlanningFormComponent_1.dayAndWeek,
                displayDateFormat: EmployeePlanningFormComponent_1.displayDateFormat,
                timeResolution: {
                  unit: EmployeePlanningFormComponent_1.day,
                  increment: 1
                },
                headerConfig: {
                  middle: {
                    unit: EmployeePlanningFormComponent_1.day,
                    dateFormat: EmployeePlanningFormComponent_1.dateFormat
                  }
                }
              },
              responsiveLevels: {
                small: {
                  levelWidth: 800,
                  tickWidth: 65,
                  fillTicks: true,
                  rowHeight: 40
                },
                normal: {
                  levelWidth: '*',
                  tickWidth: 250,
                  fillTicks: false,
                  rowHeight: 50
                }
              },
              timeRanges: true,
              resourceMargin: 0,
              readOnly: true,
              tickSize: 90,
              resourceTimeRangesFeatures: { resourceTimeRanges: true },
              scheduleContextMenu: {
                items: {
                  addEvent: false
                },
                processHeaderItems: function() {
                  return false;
                }
              },
              zoomOnTimeAxisDoubleClick: false,
              zoomOnMouseWheel: false,
              eventRenderer: function(_a) {
                var eventRecord = _a.eventRecord;
                return (
                  '\n            <div class="info">\n                <div class="name" style="font-weight:bold;">' +
                  eventRecord.name +
                  '</div>\n                <div class="desc">' +
                  eventRecord.desc +
                  '</div>\n            </div>\n          '
                );
              },
              timeRangesFeature: {
                showCurrentTimeLine: true
              },
              startDate: new Date(this.searchObject.startDate),
              endDate: new Date(this.searchObject.endDate)
            };
          };
          EmployeePlanningFormComponent.prototype.loadQualificationsList = function() {
            var _this = this;
            this.employeePlanningFormService.findQualificationTitle().subscribe(function(results) {
              _this.qualificationLists = results || [];
            });
          };
          EmployeePlanningFormComponent.prototype.onChangeTimeResolution = function(event) {
            this.schedulerTimeResolutionChanged.next(event.value);
          };
          EmployeePlanningFormComponent.prototype.registerSchedulerTimeResolutionObservable = function() {
            var _this = this;
            this.schedulerTimeResolutionChanged
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__['distinctUntilChanged'])(),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__['takeUntil'])(this.unsubscribe)
              )
              .subscribe({
                next: function(value) {
                  _this.scheduler.schedulerEngine.zoomTo(value);
                }
              });
          };
          var EmployeePlanningFormComponent_1;
          EmployeePlanningFormComponent.EVENT_COLOR_EVENT =
            ((_a = {}),
            (_a[_employee_planning_form_service__WEBPACK_IMPORTED_MODULE_22__['UpcomingEventStatus'].ABSENCES] =
              'gray'),
            (_a[_employee_planning_form_service__WEBPACK_IMPORTED_MODULE_22__['UpcomingEventStatus'].HOLIDAYS] =
              'gray'),
            (_a[_employee_planning_form_service__WEBPACK_IMPORTED_MODULE_22__['UpcomingEventStatus'].TRAINING] =
              'orange'),
            (_a[_employee_planning_form_service__WEBPACK_IMPORTED_MODULE_22__['UpcomingEventStatus'].WORKORDER] =
              'blue'),
            _a);
          EmployeePlanningFormComponent.TIME_RESOLUTION_MAX_ZOOM = 15;
          EmployeePlanningFormComponent.TIME_RESOLUTION_MIN_ZOOM = 7;
          // Date constants
          EmployeePlanningFormComponent.MONDAY = 0;
          EmployeePlanningFormComponent.TUESDAY = 1;
          EmployeePlanningFormComponent.WEDNESDAY = 2;
          EmployeePlanningFormComponent.THURSDAY = 3;
          EmployeePlanningFormComponent.FRIDAY = 4;
          EmployeePlanningFormComponent.SATURDAY = 5;
          EmployeePlanningFormComponent.SUNDAY = 6;
          // Month constants
          EmployeePlanningFormComponent.JAN = 0;
          EmployeePlanningFormComponent.FEB = 1;
          EmployeePlanningFormComponent.MAR = 2;
          EmployeePlanningFormComponent.APR = 3;
          EmployeePlanningFormComponent.MAY = 4;
          EmployeePlanningFormComponent.JUN = 5;
          EmployeePlanningFormComponent.JUL = 6;
          EmployeePlanningFormComponent.AUG = 7;
          EmployeePlanningFormComponent.SEP = 8;
          EmployeePlanningFormComponent.OCT = 9;
          EmployeePlanningFormComponent.NOV = 10;
          EmployeePlanningFormComponent.DEC = 11;
          // HMSMs constants
          EmployeePlanningFormComponent.daysInAWeek = 7;
          EmployeePlanningFormComponent.hoursInADay = 24;
          EmployeePlanningFormComponent.minutesInAnHour = 60;
          EmployeePlanningFormComponent.secondsInAMinute = 60;
          EmployeePlanningFormComponent.milisecondsInASecond = 1000;
          // Types constants
          EmployeePlanningFormComponent.absences = 'ABSENCES';
          EmployeePlanningFormComponent.training = 'TRAINING';
          EmployeePlanningFormComponent.events = 'EVENT';
          EmployeePlanningFormComponent.jobs = 'JOBS';
          EmployeePlanningFormComponent.holidays = 'HOLIDAYS';
          EmployeePlanningFormComponent.employees = 'Employees';
          EmployeePlanningFormComponent.qualifications = 'Qualifications';
          EmployeePlanningFormComponent.dayAndWeek = 'dayAndWeek';
          EmployeePlanningFormComponent.hourAndDay = 'hourAndDay';
          EmployeePlanningFormComponent.day = 'day';
          EmployeePlanningFormComponent.dateFormat = 'DD/MM/YYYY';
          EmployeePlanningFormComponent.displayDateFormat = 'DD/MM/YYYY';
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['ViewChild'])(
                _shared_components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_7__['SchedulerComponent']
              ),
              __metadata(
                'design:type',
                _shared_components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_7__['SchedulerComponent']
              )
            ],
            EmployeePlanningFormComponent.prototype,
            'scheduler',
            void 0
          );
          EmployeePlanningFormComponent = EmployeePlanningFormComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Component'])({
                selector: 'aw-employee-planning-form',
                template: __webpack_require__(
                  /*! ./employee-planning-form.component.html */ './src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./employee-planning-form.component.scss */ './src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_13__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_14__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_15__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_16__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_18__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_17__['SessionService'],
                _employee_planning_form_service__WEBPACK_IMPORTED_MODULE_22__['EmployeePlanningFormService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_12__['DateService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateService'],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__['DatePipe']
              ])
            ],
            EmployeePlanningFormComponent
          );
          return EmployeePlanningFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_19__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.service.ts':
      /*!************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-form.service.ts ***!
  \************************************************************************************************************/
      /*! exports provided: UpcomingEventStatus, EmployeePlanningFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'UpcomingEventStatus', function() {
          return UpcomingEventStatus;
        });
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'EmployeePlanningFormService',
          function() {
            return EmployeePlanningFormService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-company.api */ './src/app/shared/api/bidt-company.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-employee.api */ './src/app/shared/api/bidt-employee.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_qualification_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-qualification.api */ './src/app/shared/api/bidt-qualification.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-site.api */ './src/app/shared/api/bidt-site.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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

        var UpcomingEventStatus;
        (function(UpcomingEventStatus) {
          UpcomingEventStatus['ABSENCES'] = 'ABSENCES';
          UpcomingEventStatus['TRAINING'] = 'TRAINING';
          UpcomingEventStatus['HOLIDAYS'] = 'HOLIDAYS';
          UpcomingEventStatus['WORKORDER'] = 'JOBS';
        })(UpcomingEventStatus || (UpcomingEventStatus = {}));
        var EmployeePlanningFormService = /** @class */ (function(_super) {
          __extends(EmployeePlanningFormService, _super);
          function EmployeePlanningFormService(
            http,
            appConfigService,
            bidtSiteApi,
            bidtCompanyApi,
            bidtEmployeeApi,
            bidtWarehouseApi,
            bidtQualificationApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtSiteApi = bidtSiteApi;
            _this.bidtCompanyApi = bidtCompanyApi;
            _this.bidtEmployeeApi = bidtEmployeeApi;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            _this.bidtQualificationApi = bidtQualificationApi;
            return _this;
          }
          EmployeePlanningFormService.prototype.findBidtSiteById = function(siteId) {
            return _super.prototype.post.call(this, this.bidtSiteApi.getById, siteId);
          };
          EmployeePlanningFormService.prototype.findBidtCompanyById = function(companyId) {
            return _super.prototype.post.call(this, this.bidtCompanyApi.getById, companyId);
          };
          EmployeePlanningFormService.prototype.findBidtEmployeeBySearchCriteria = function(searchCriteria) {
            return _super.prototype.post.call(
              this,
              this.bidtEmployeeApi.findBidtEmployeeBySearchCriteria,
              searchCriteria
            );
          };
          EmployeePlanningFormService.prototype.getViewByCompanyData = function(input) {
            return _super.prototype.post.call(this, this.bidtEmployeeApi.getViewByCompanyData, input);
          };
          EmployeePlanningFormService.prototype.getEmployeeDetails = function(input) {
            return _super.prototype.post.call(this, this.bidtEmployeeApi.getEmployeeDetails, input);
          };
          EmployeePlanningFormService.prototype.getBidtWarehouseById = function(id) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.getById, id);
          };
          EmployeePlanningFormService.prototype.findQualificationTitle = function() {
            return _super.prototype.post.call(this, this.bidtQualificationApi.findQualificationTitle);
          };
          EmployeePlanningFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__['AppConfigService'],
                _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_5__['BidtSiteApi'],
                _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_2__['BidtCompanyApi'],
                _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_3__['BidtEmployeeApi'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_6__['BidtWarehouseApi'],
                _shared_api_bidt_qualification_api__WEBPACK_IMPORTED_MODULE_4__['BidtQualificationApi']
              ])
            ],
            EmployeePlanningFormService
          );
          return EmployeePlanningFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component.html':
      /*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component.html ***!
  \*********************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="section">\r\n      <div class="section-content">\r\n        <div class="legend-item">\r\n          <div class="work-package availability"></div>\r\n          <div class="label">{{ getComponentName() + ".availability" | translate }}</div>\r\n        </div>\r\n\r\n        <div class="legend-item">\r\n          <div class="work-package jobs"></div>\r\n          <div class="label">{{ getComponentName() + ".workAssigned" | translate }}</div>\r\n        </div>\r\n\r\n        <div class="legend-item">\r\n          <div class="work-package training"></div>\r\n          <div class="label">{{ getComponentName() + ".training" | translate }}</div>\r\n        </div>\r\n\r\n        <div class="legend-item">\r\n          <div class="work-package absences"></div>\r\n          <div class="label">{{ getComponentName() + ".absent" | translate }}</div>\r\n        </div>\r\n\r\n        <div class="legend-item">\r\n          <div class="work-package holidays"></div>\r\n          <div class="label">{{ getComponentName() + ".holidays" | translate }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "close" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component.scss':
      /*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component.scss ***!
  \*********************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .legend-item {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  height: 2.25rem; }\n  :host .legend-item .label {\n    margin-left: 1rem; }\n  :host .legend-item .flight {\n    width: calc(21.21px * 2); }\n  :host .legend-item .flight.real {\n      background-color: #42a5f5;\n      height: 6px; }\n  :host .legend-item .flight.simulated {\n      background-color: #42a5f5;\n      height: 2px; }\n  :host .legend-item .upcoming-event {\n    height: 21.21px;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    width: 21.21px; }\n  :host .legend-item .upcoming-event.nok {\n      background-color: #e53935; }\n  :host .legend-item .upcoming-event.ok {\n      background-color: #43a047; }\n  :host .legend-item .upcoming-event.warn {\n      background-color: #fdd835; }\n  :host .legend-item .work-package {\n    height: 21.21px;\n    width: calc(21.21px * 2); }\n  :host .legend-item .work-package.absences {\n      background-color: #a0a0a0; }\n  :host .legend-item .work-package.holidays {\n      background-color: #a0a0a0; }\n  :host .legend-item .work-package.jobs {\n      background-color: #42a5f5; }\n  :host .legend-item .work-package.training {\n      background-color: #ffa726; }\n  :host .legend-item .work-package.availability {\n      background-color: #66bb6a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9odW1hbi1yZXNvdXJjZXMvZW1wbG95ZWUtcGxhbm5pbmcvdmlldy1ieS1zaXRlLWZvcm0vZW1wbG95ZWUtcGxhbm5pbmctbGVnZW5kLWRpYWxvZy9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcaHVtYW4tcmVzb3VyY2VzXFxlbXBsb3llZS1wbGFubmluZ1xcdmlldy1ieS1zaXRlLWZvcm1cXGVtcGxveWVlLXBsYW5uaW5nLWxlZ2VuZC1kaWFsb2dcXGVtcGxveWVlLXBsYW5uaW5nLWxlZ2VuZC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7RUFMbkI7SUFRTSxpQkFBaUIsRUFBQTtFQVJ2QjtJQVlNLHdCQUFnQyxFQUFBO0VBWnRDO01BZVEseUJBQXlCO01BQ3pCLFdBQVcsRUFBQTtFQWhCbkI7TUFvQlEseUJBQXlCO01BQ3pCLFdBQVcsRUFBQTtFQXJCbkI7SUEwQk0sZUE1QmU7SUE2QmYsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixjQTlCZSxFQUFBO0VBRXJCO01BK0JRLHlCQUF5QixFQUFBO0VBL0JqQztNQW1DUSx5QkFBeUIsRUFBQTtFQW5DakM7TUF1Q1EseUJBQXlCLEVBQUE7RUF2Q2pDO0lBNENNLGVBOUNlO0lBK0NmLHdCQUFnQyxFQUFBO0VBN0N0QztNQWdEUSx5QkFBeUIsRUFBQTtFQWhEakM7TUFvRFEseUJBQXlCLEVBQUE7RUFwRGpDO01Bd0RRLHlCQUF5QixFQUFBO0VBeERqQztNQTREUSx5QkFBeUIsRUFBQTtFQTVEakM7TUFnRVEseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2h1bWFuLXJlc291cmNlcy9lbXBsb3llZS1wbGFubmluZy92aWV3LWJ5LXNpdGUtZm9ybS9lbXBsb3llZS1wbGFubmluZy1sZWdlbmQtZGlhbG9nL2VtcGxveWVlLXBsYW5uaW5nLWxlZ2VuZC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZXZlbnQtd2lkdGg6IDIxLjIxcHg7XHJcblxyXG46aG9zdCB7XHJcbiAgLmxlZ2VuZC1pdGVtIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGhlaWdodDogMi4yNXJlbTtcclxuXHJcbiAgICAubGFiZWwge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZmxpZ2h0IHtcclxuICAgICAgd2lkdGg6IGNhbGMoI3skZXZlbnQtd2lkdGh9ICogMik7XHJcblxyXG4gICAgICAmLnJlYWwge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MmE1ZjU7XHJcbiAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuc2ltdWxhdGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJhNWY1O1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVwY29taW5nLWV2ZW50IHtcclxuICAgICAgaGVpZ2h0OiAkZXZlbnQtd2lkdGg7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgd2lkdGg6ICRldmVudC13aWR0aDtcclxuXHJcbiAgICAgICYubm9rIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUzOTM1O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLm9rIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDNhMDQ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLndhcm4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGQ4MzU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAud29yay1wYWNrYWdlIHtcclxuICAgICAgaGVpZ2h0OiAkZXZlbnQtd2lkdGg7XHJcbiAgICAgIHdpZHRoOiBjYWxjKCN7JGV2ZW50LXdpZHRofSAqIDIpO1xyXG5cclxuICAgICAgJi5hYnNlbmNlcyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EwYTBhMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5ob2xpZGF5cyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EwYTBhMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5qb2JzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJhNWY1O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnRyYWluaW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNzI2O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmF2YWlsYWJpbGl0eSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2YmI2YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component.ts':
      /*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component.ts ***!
  \*******************************************************************************************************************************************************/
      /*! exports provided: EmployeePlanningLegendDialogComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'EmployeePlanningLegendDialogComponent',
          function() {
            return EmployeePlanningLegendDialogComponent;
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

        var EmployeePlanningLegendDialogComponent = /** @class */ (function(_super) {
          __extends(EmployeePlanningLegendDialogComponent, _super);
          function EmployeePlanningLegendDialogComponent() {
            return (
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'EmployeePlanningLegendDialogComponent'
              ) || this
            );
          }
          EmployeePlanningLegendDialogComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-employee-planning-form-legend',
                template: __webpack_require__(
                  /*! ./employee-planning-legend-dialog.component.html */ './src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./employee-planning-legend-dialog.component.scss */ './src/app/main/human-resources/employee-planning/view-by-site-form/employee-planning-legend-dialog/employee-planning-legend-dialog.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            EmployeePlanningLegendDialogComponent
          );
          return EmployeePlanningLegendDialogComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      }
  }
]);
//# sourceMappingURL=default~human-resources-employee-planning-employee-planning-module~human-resources-human-resources-m~95477e71.js.map
