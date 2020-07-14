(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['logistics-stock-status-stock-status-module'],
  {
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

    /***/ './src/app/main/logistics/stock-status/form/stock-status-form.component.html':
      /*!***********************************************************************************!*\
  !*** ./src/app/main/logistics/stock-status/form/stock-status-form.component.html ***!
  \***********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle">\r\n        {{ "page.searchPage" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-primary-actions">\r\n    <button type="button" mat-raised-button (click)="newCalculation()">\r\n      {{ componentData.componentId + ".newCalculation" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <!-- Form -->\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "page.mainData" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="row">\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ componentData.componentId + ".materialCode" | translate }} </label>\r\n\r\n                  <div *ngIf="!!searchObject && !!searchObject.pnCode" class="form-control">\r\n                    <input type="text" class="aw-input" [(ngModel)]="searchObject.pnCode" [disabled]="true" />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="form-group">\r\n                  <label class="form-label"> {{ componentData.componentId + ".site" | translate }} </label>\r\n\r\n                  <div *ngIf="!!searchObject && !!searchObject.siteId" class="form-control">\r\n                    <input type="text" class="aw-input" [(ngModel)]="site" [disabled]="true" />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="form-group">\r\n                  <label class="form-label"> {{ componentData.componentId + ".warehouseId" | translate }} </label>\r\n\r\n                  <div *ngIf="!!warehouse && !!warehouse" class="form-control">\r\n                    <input type="text" class="aw-input" [(ngModel)]="warehouse" [disabled]="true" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="grid-cell-content">\r\n              <div class="row">\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ componentData.componentId + ".stockowner" | translate }} </label>\r\n\r\n                  <div *ngIf="!!searchObject && !!searchObject.stockOwnerCode" class="form-control">\r\n                    <input type="text" class="aw-input" [(ngModel)]="stockOwner" [disabled]="true" />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="form-group">\r\n                  <label class="form-label"> {{ componentData.componentId + ".startdate" | translate }} </label>\r\n\r\n                  <div class="form-control">\r\n                    <p-calendar\r\n                      showButtonBar="true"\r\n                      [monthNavigator]="true"\r\n                      [yearNavigator]="true"\r\n                      [yearRange]="sessionService.calendarYearRange"\r\n                      class="aw-calendar"\r\n                      [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                      [locale]="sessionService.calendarFormat"\r\n                      [(ngModel)]="searchObject.startDate"\r\n                      disabled\r\n                    >\r\n                    </p-calendar>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="form-group">\r\n                  <label class="form-label"> {{ componentData.componentId + ".enddate" | translate }} </label>\r\n\r\n                  <div class="form-control">\r\n                    <p-calendar\r\n                      showButtonBar="true"\r\n                      [monthNavigator]="true"\r\n                      [yearNavigator]="true"\r\n                      [yearRange]="sessionService.calendarYearRange"\r\n                      class="aw-calendar"\r\n                      [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                      [locale]="sessionService.calendarFormat"\r\n                      [(ngModel)]="searchObject.endDate"\r\n                      disabled\r\n                    ></p-calendar>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/stock-status/form/stock-status-form.component.scss':
      /*!***********************************************************************************!*\
  !*** ./src/app/main/logistics/stock-status/form/stock-status-form.component.scss ***!
  \***********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .grid-cell-chart .chart-container {\n  display: flex;\n  flex-direction: row; }\n\n@media screen and (max-width: 1280px) {\n    :host .grid-cell-chart .chart-container {\n      flex-direction: column; } }\n\n:host .grid-cell-chart .chart-container .chart-legend {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 8px; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color {\n        height: 0.75rem;\n        margin-right: 8px;\n        width: 2rem; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.quantity {\n          background-color: #0d3fc2; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.amount {\n          background-color: #d3c632; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.not-airworthy {\n          background-color: #f6685e; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-value {\n      font-weight: 700;\n      margin-left: 8px; }\n\n:host .grid-cell-chart .chart-container .chart-wrapper {\n    position: relative;\n    height: 18rem;\n    width: 70rem; }\n\n:host .critical-value-dark {\n  background-color: #fba643 !important; }\n\n:host .critical-value-light {\n  background-color: #fecc8e !important; }\n\n:host .calendar-yellow {\n  background-color: #efefb0 !important; }\n\n:host .bad-value-dark {\n  background-color: #ff6758 !important; }\n\n:host .critical-value-none {\n  background-color: none !important; }\n\n:host .critical-value-green {\n  background-color: #4caf50 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stc3RhdHVzL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9tb2RpZmllcnMuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stc3RhdHVzL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcc3RvY2stc3RhdHVzXFxmb3JtXFxzdG9jay1zdGF0dXMtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stc3RhdHVzL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stc3RhdHVzL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSx3QkFBd0I7RUFDeEIsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UseUNBQWlDO0VBQWpDLHNDQUFpQztFQUFqQyxpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxvQ0FBNEI7S0FBNUIsaUNBQTRCO01BQTVCLGdDQUE0QjtVQUE1Qiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXLEVBQUE7O0FBS2I7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSxvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxzQ0FBc0MsRUFBQTs7QUN6SHhDO0VDbUJFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QURmZjtJQUxOO01BTVEsc0JBQXNCLEVBQUEsRUE0Q3pCOztBQWxETDtJQ2NFLGFBQWE7SUFDYixzQkFBc0I7SURIaEIsdUJBQXVCO0lBQ3ZCLGdCRTJCVSxFQUFBOztBRnhDbEI7TUNtQkUsYUFBYTtNQUNiLG1CQUFtQjtNREZYLG1CQUFtQixFQUFBOztBQWxCN0I7UUFxQlksZUFBZTtRQUNmLGlCRWtCTTtRRmpCTixXQUFXLEVBQUE7O0FBdkJ2QjtVQTBCYyx5QkFBeUIsRUFBQTs7QUExQnZDO1VBOEJjLHlCQUF5QixFQUFBOztBQTlCdkM7VUFrQ2MseUJFZE0sRUFBQTs7QUZwQnBCO01Bd0NVLGdCQUFnQjtNQUNoQixnQkVEUSxFQUFBOztBRnhDbEI7SUE4Q1Esa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZLEVBQUE7O0FBaERwQjtFQXNESSxvQ0FBaUQsRUFBQTs7QUF0RHJEO0VBMERJLG9DQUFrRCxFQUFBOztBQTFEdEQ7RUE4REksb0NBQTZDLEVBQUE7O0FBOURqRDtFQWtFSSxvQ0FBNEMsRUFBQTs7QUFsRWhEO0VBc0VJLGlDQUFpQyxFQUFBOztBQXRFckM7RUF5RUksb0NBQTBDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay1zdGF0dXMvZm9ybS9zdG9jay1zdGF0dXMtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LS1mbGV4LWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktLWZsZXgtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlzcGxheS0tbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVpZ2h0LS0xMDAge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1pbi13aWR0aC0tZml0LWNvbnRlbnQge1xyXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvc2l0aW9uLS1yZWxhdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGwteS0tbm9uZSB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LS11bnNlbGVjdGFibGUge1xyXG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52aXNpYmlsaXR5LS1oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtLTEwIHtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTIwIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTMwIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTQwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTUwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTYwIHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTcwIHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTgwIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTkwIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5mbGV4LS0xIHtcclxuICBmbGV4OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0yIHtcclxuICBmbGV4OiAyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0zIHtcclxuICBmbGV4OiAzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS00IHtcclxuICBmbGV4OiA0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS01IHtcclxuICBmbGV4OiA1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS1hdXRvIHtcclxuICBmbGV4OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tY2VudGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tZW5kIHtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1hbGlnbi1zdGFydCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWVuZCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWp1c3RpZnktc3RhcnQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5AaW1wb3J0IFwibW9kaWZpZXJzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLmdyaWQtY2VsbC1jaGFydCB7XHJcbiAgICAuY2hhcnQtY29udGFpbmVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaGFydC1sZWdlbmQge1xyXG4gICAgICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcblxyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAuY2hhcnQtbGVnZW5kLWxhYmVsIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAuY2hhcnQtbGVnZW5kLWxhYmVsLWNvbG9yIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwLjc1cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICRtYXJnaW4tdmFsdWU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xyXG5cclxuICAgICAgICAgICAgJi5xdWFudGl0eSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBkM2ZjMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5hbW91bnQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2M2MzI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYubm90LWFpcndvcnRoeSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jaGFydC12YWx1ZSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2hhcnQtd3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMThyZW07XHJcbiAgICAgICAgd2lkdGg6IDcwcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY3JpdGljYWwtdmFsdWUtZGFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JpdGljYWwtdmFsdWUtZGFyayAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNyaXRpY2FsLXZhbHVlLWxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjcml0aWNhbC12YWx1ZS1saWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNhbGVuZGFyLXllbGxvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FsZW5kYXIteWVsbG93ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYmFkLXZhbHVlLWRhcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhZC12YWx1ZS1kYXJrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY3JpdGljYWwtdmFsdWUtbm9uZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jcml0aWNhbC12YWx1ZS1ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/logistics/stock-status/form/stock-status-form.component.ts':
      /*!*********************************************************************************!*\
  !*** ./src/app/main/logistics/stock-status/form/stock-status-form.component.ts ***!
  \*********************************************************************************/
      /*! exports provided: StockStatusFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'StockStatusFormComponent',
          function() {
            return StockStatusFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../shared/constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
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
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _administration_catalog_dynamic_catalog_components_logistics_stock_type_stock_type_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../administration/catalog/dynamic-catalog-components/logistics/stock-type/stock-type.service */ './src/app/main/administration/catalog/dynamic-catalog-components/logistics/stock-type/stock-type.service.ts'
        );
        /* harmony import */ var _material_form_material_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../material/form/material-form.service */ './src/app/main/logistics/material/form/material-form.service.ts'
        );
        /* harmony import */ var _stock_status_form_stock_status_form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../stock-status/form/stock-status-form.service */ './src/app/main/logistics/stock-status/form/stock-status-form.service.ts'
        );
        /* harmony import */ var _stock_valuation_search_stock_valuation_search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../stock-valuation/search/stock-valuation-search.service */ './src/app/main/logistics/stock-valuation/search/stock-valuation-search.service.ts'
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

        var StockStatusFormComponent = /** @class */ (function(_super) {
          __extends(StockStatusFormComponent, _super);
          function StockStatusFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            dateService,
            stockValuationSearchService,
            materialFormService,
            stockTypeService,
            stockStatusFormService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.sessionService = sessionService;
            _this.dateService = dateService;
            _this.stockValuationSearchService = stockValuationSearchService;
            _this.materialFormService = materialFormService;
            _this.stockTypeService = stockTypeService;
            _this.stockStatusFormService = stockStatusFormService;
            _this.displayFullScreen = false;
            _this.init();
            _this.initChart();
            _this.setOpenDocumentList();
            return _this;
          }
          StockStatusFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            // this.searchObject = {};
            if (!!this.componentData) {
              this.updateOpenMode(this.componentData.openMode);
              if (!!this.componentData.objectId) {
                this.searchObject = this.serializationService.deserialize(this.componentData.objectId);
                this.searchObject.startDate = new Date(
                  this.serializationService.deserialize(this.componentData.objectId).startDate
                );
                this.searchObject.endDate = new Date(
                  this.serializationService.deserialize(this.componentData.objectId).endDate
                );
              }
              this.loadSites();
              this.loadWarehouses();
              this.ownerDropDown();
            }
            this.calculate();
            this.loadSSTreeTable();
          };
          StockStatusFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .LOG_STOCK_STATUS_FORM;
          };
          StockStatusFormComponent.prototype.init = function() {
            this.selectedSD = {};
            this.warehouses = [];
            this.chartContentReady = false;
            this.warehouse = '';
            this.ssTreeTable = [];
            this.ssTreeTableCols = [
              { field: 'stockTitle', alignment: 'left' },
              { field: 'quOpen', alignment: 'left' },
              { field: 'quBlocked', alignment: 'left' },
              { field: 'quControlled', alignment: 'left' },
              { field: 'quTotal', alignment: 'left' },
              { field: 'lowThreshold', alignment: 'left' },
              { field: 'highThreshold', alignment: 'left' }
            ];
            this.isLoadingStructureTable = false;
            this.showDocumentDropdown = false;
          };
          StockStatusFormComponent.prototype.newCalculation = function() {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
                  .LOG_STOCK_STATUS_SEARCH,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          // load warehouse
          StockStatusFormComponent.prototype.loadWarehouses = function() {
            var _this = this;
            this.stockValuationSearchService.findAll().subscribe(function(results) {
              results.forEach(function(res) {
                if (_this.searchObject.warehouseId === res.wareHouseId) {
                  _this.warehouse = res.whName;
                }
              });
            });
          };
          // Load sites
          StockStatusFormComponent.prototype.loadSites = function() {
            var _this = this;
            this.materialFormService.findAllStockStatusSites().subscribe(function(result) {
              result.forEach(function(res) {
                if (_this.searchObject.siteId === Number(res.value)) {
                  _this.site = res.label;
                }
              });
            });
          };
          // get Stock owner drop down
          StockStatusFormComponent.prototype.ownerDropDown = function() {
            var _this = this;
            this.stockTypeService.getOwnerNameMap().subscribe(function(results) {
              results.forEach(function(res) {
                if (res.value === _this.searchObject.stockOwnerCode) {
                  _this.stockOwner = res.label;
                }
              });
            });
          };
          // display chart for evolution
          StockStatusFormComponent.prototype.initChart = function() {
            this.chartType = 'line';
            this.stockStatusVariationData = {
              datasets: [
                {
                  data: [],
                  label: 'Lower Threshold',
                  borderColor: '#0D3FC2',
                  backgroundColor: '#0D3FC2',
                  hoverBackgroundColor: '#0D3FC2',
                  fill: false
                },
                {
                  data: [],
                  label: 'Higher Threshold',
                  borderColor: '#FF00FF',
                  backgroundColor: '#FF00FF',
                  hoverBackgroundColor: '#FF00FF',
                  fill: false
                },
                {
                  data: [],
                  label: 'NA (No Stock Owner)',
                  borderColor: '#8B4513',
                  backgroundColor: '#8B4513',
                  hoverBackgroundColor: '#8B4513',
                  fill: false
                },
                {
                  data: [],
                  label: 'Receipt',
                  borderColor: '#00FF00',
                  backgroundColor: '#00FF00',
                  hoverBackgroundColor: '#00FF00',
                  fill: false
                },
                {
                  data: [],
                  label: 'Issue',
                  borderColor: '#FF4500',
                  backgroundColor: '#FF4500',
                  hoverBackgroundColor: '#FF4500',
                  fill: false
                },
                {
                  data: [],
                  label: 'Qunatity',
                  borderColor: '#6A5ACD',
                  backgroundColor: '#6A5ACD',
                  hoverBackgroundColor: '#6A5ACD',
                  fill: false
                }
              ],
              labels: []
            };
            this.setStockStatusChartOptions();
          };
          StockStatusFormComponent.prototype.setChartData = function(statusGraphs) {
            var _this = this;
            if (!!statusGraphs) {
              statusGraphs.forEach(function(st) {
                _this.stockStatusVariationData.labels.push(_this.dateService.dateToString(st.graphicDate));
                _this.stockStatusVariationData.datasets[0].data.push(st.graphicLowThreshold);
                _this.stockStatusVariationData.datasets[1].data.push(st.graphicHighThreshold);
                // tslint:disable-next-line:no-magic-numbers
                _this.stockStatusVariationData.datasets[2].data.push(st.graphicOwner);
                // tslint:disable-next-line:no-magic-numbers
                _this.stockStatusVariationData.datasets[3].data.push(st.graphicReceipt);
                // tslint:disable-next-line:no-magic-numbers
                _this.stockStatusVariationData.datasets[4].data.push(st.graphicIssue);
                // tslint:disable-next-line:no-magic-numbers
                _this.stockStatusVariationData.datasets[5].data.push(st.graphicValue);
              });
            }
            this.chartContentReady = true;
          };
          StockStatusFormComponent.prototype.setStockStatusChartOptions = function() {
            this.quantityChartOptions = {
              elements: {
                line: {
                  tension: 1
                }
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      stepSize: 10
                    }
                  }
                ]
              },
              legend: {
                display: true,
                position: 'bottom'
              },
              tooltips: {
                bodyFontColor:
                  _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__['AppConstants'].COLOR_BACKGROUND_PRIMARY
              }
            };
          };
          StockStatusFormComponent.prototype.calculate = function() {
            var _this = this;
            this.stockStatusFormService.getStockStatusGraph(this.searchObject).subscribe(function(result) {
              _this.setChartData(result);
            });
          };
          StockStatusFormComponent.prototype.loadSSTreeTable = function() {
            var _this = this;
            this.isLoadingStructureTable = true;
            this.stockStatusFormService.stockStatusSearch(this.searchObject).subscribe(function(result) {
              _this.isLoadingStructureTable = false;
              _this.ssTreeTable = result || [];
            });
          };
          StockStatusFormComponent.prototype.onRowSelected = function(node) {
            if (!!node.data) {
              this.selectedSD = node.data;
              this.selectedNode = node;
              if (!!this.selectedSD.lowThreshold && !!this.selectedSD.quTotal) {
                // tslint:disable-next-line:prefer-conditional-expression
                if (this.selectedSD.lowThreshold > this.selectedSD.quTotal) {
                  this.showDocumentDropdown = true;
                } else {
                  this.showDocumentDropdown = false;
                }
              } else {
                this.showDocumentDropdown = false;
              }
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'onRowSelected', 'node.data');
            }
          };
          StockStatusFormComponent.prototype.togglerEvent = function() {
            this.selectedSD = {};
            this.selectedNode = {};
          };
          StockStatusFormComponent.prototype.onRowUnSelected = function(node) {
            this.showDocumentDropdown = false;
          };
          StockStatusFormComponent.prototype.openStockOperation = function() {
            // todo
          };
          StockStatusFormComponent.prototype.setOpenDocumentList = function() {
            var _this = this;
            this.stockStatusFormService.getPurchaseDocumentCategory().subscribe(function(result) {
              _this.openDocumentList = result || [];
            });
          };
          StockStatusFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-stock-status-form',
                template: __webpack_require__(
                  /*! ./stock-status-form.component.html */ './src/app/main/logistics/stock-status/form/stock-status-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./stock-status-form.component.scss */ './src/app/main/logistics/stock-status/form/stock-status-form.component.scss'
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
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__['DateService'],
                _stock_valuation_search_stock_valuation_search_service__WEBPACK_IMPORTED_MODULE_15__[
                  'StockValuationSearchService'
                ],
                _material_form_material_form_service__WEBPACK_IMPORTED_MODULE_13__['MaterialFormService'],
                _administration_catalog_dynamic_catalog_components_logistics_stock_type_stock_type_service__WEBPACK_IMPORTED_MODULE_12__[
                  'StockTypeService'
                ],
                _stock_status_form_stock_status_form_service__WEBPACK_IMPORTED_MODULE_14__['StockStatusFormService']
              ])
            ],
            StockStatusFormComponent
          );
          return StockStatusFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-status/form/stock-status-form.service.ts':
      /*!*******************************************************************************!*\
  !*** ./src/app/main/logistics/stock-status/form/stock-status-form.service.ts ***!
  \*******************************************************************************/
      /*! exports provided: StockStatusFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'StockStatusFormService', function() {
          return StockStatusFormService;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../../node_modules/@angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-stock-mvt.api */ './src/app/shared/api/bidt-stock-mvt.api.ts'
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

        var StockStatusFormService = /** @class */ (function(_super) {
          __extends(StockStatusFormService, _super);
          function StockStatusFormService(http, appConfigService, bidtStockMvtApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtStockMvtApi = bidtStockMvtApi;
            return _this;
          }
          // makes a calculation on the base of search criteria
          StockStatusFormService.prototype.stockStatusSearch = function(searchCriteria) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.findssTreeNode, searchCriteria);
          };
          // get Doumemnt list
          StockStatusFormService.prototype.getPurchaseDocumentCategory = function() {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.findPurchaseDocumentCategory);
          };
          // Get Stock Status graph
          StockStatusFormService.prototype.getStockStatusGraph = function(searchCriteria) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.findstockstatusgraph, searchCriteria);
          };
          StockStatusFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])(),
              __metadata('design:paramtypes', [
                _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtApi']
              ])
            ],
            StockStatusFormService
          );
          return StockStatusFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-status/search/stock-status-search.component.html':
      /*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-status/search/stock-status-search.component.html ***!
  \***************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">{{ "transaction." + componentData.componentId | translate }}</div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle">\r\n        {{ criteriaName }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-primary-actions">\r\n    <button type="button" mat-raised-button (click)="onClickNewCalculation()" *ngIf="hasBeenCalculated">\r\n      <span>{{ componentData.componentId + ".newCalculation" | translate }}</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ componentData.componentId + ".mainInformation" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row search-criteria-header">\r\n                  <aw-manage-search-criteria\r\n                    [componentId]="SEARCH_CRITERIA_ID"\r\n                    (onSelected)="loadSearchCriteria($event)"\r\n                    (onSavedAsked)="saveSearchCriteriaAsked()"\r\n                    [objectFromPage]="criteriaToSave"\r\n                    [canChange]="!hasBeenCalculated"\r\n                  ></aw-manage-search-criteria>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group" [ngClass]="{ required: isPnCodeRequired }">\r\n                    <label class="form-label"> {{ componentData.componentId + ".materialCode" | translate }} </label>\r\n\r\n                    <div class="form-control form-control-with-modal" [ngClass]="{ disabled: hasBeenCalculated }">\r\n                      <div class="form-control-data" (click)="onClickSearchMaterial()">\r\n                        {{ searchObject.pnCode }}\r\n                      </div>\r\n\r\n                      <div *ngIf="searchObject.pnCode" class="btn-clear-wrapper">\r\n                        <i\r\n                          class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                          aria-hidden="true"\r\n                          (click)="clearPnCodeClass()"\r\n                        ></i>\r\n                      </div>\r\n                      <div class="btn-search-wrapper">\r\n                        <i\r\n                          class="fa fa-fw fa-search aw-icon btn-search"\r\n                          aria-hidden="true"\r\n                          (click)="onClickSearchMaterial()"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group" [ngClass]="{ required: isSiteRequired }">\r\n                    <label class="form-label">{{ getComponentName() + ".site" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        placeholder="&nbsp;"\r\n                        [options]="sites"\r\n                        [(ngModel)]="searchObject.siteId"\r\n                        (onChange)="getWarehouseList(); updateMandatoryFieldsClass()"\r\n                        appendTo="body"\r\n                        [showClear]="true"\r\n                        [disabled]="hasBeenCalculated"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group" [ngClass]="{ required: isWarehouseRequired }">\r\n                    <label class="form-label"> {{ componentData.componentId + ".warehouseId" | translate }} </label>\r\n\r\n                    <div style="width: 64%" class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="warehouses"\r\n                        [(ngModel)]="searchObject.warehouseId"\r\n                        [disabled]="hasBeenCalculated"\r\n                        placeholder="&nbsp;"\r\n                        [showClear]="true"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group required">\r\n                    <label class="form-label">{{ componentData.componentId + ".startdate" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="searchObject.startDate"\r\n                        [disabled]="hasBeenCalculated"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group required">\r\n                    <label class="form-label">{{ componentData.componentId + ".enddate" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="searchObject.endDate"\r\n                        [disabled]="hasBeenCalculated"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group ">\r\n                    <label class="form-label"> {{ componentData.componentId + ".stockowner" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="ownerName"\r\n                        [(ngModel)]="searchObject.stockOwnerCode"\r\n                        placeholder="&nbsp;"\r\n                        appendTo="body"\r\n                        [showClear]="true"\r\n                        [disabled]="hasBeenCalculated"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <div class="form-control">\r\n                      <p-checkbox\r\n                        class="aw-checkbox"\r\n                        binary="true"\r\n                        [(ngModel)]="searchObject.withAlternatives"\r\n                        [disabled]="hasBeenCalculated"\r\n                      ></p-checkbox>\r\n\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".withAlternatives" | translate }}\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <button type="button" mat-raised-button (click)="onClickCalculate()" [disabled]="hasBeenCalculated">\r\n                      {{ componentData.componentId + ".toCalculate" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row" *ngIf="hasBeenCalculated">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container grid-cell-chart">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container loading-indicator">\r\n                <div class="grid-cell-title">\r\n                  {{ getComponentName() + ".currentStock" | translate }}\r\n                  {{ searchObject.startDate | date: "yyyy/MM/dd" }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <p-treeTable\r\n                edTreeTableId\r\n                class="aw-tree-table2"\r\n                [value]="ssTreeTable"\r\n                [columns]="ssTreeTableCols"\r\n                selectionMode="single"\r\n                [(selection)]="selectedSD"\r\n                (onNodeSelect)="onRowSelected($event.node)"\r\n                [scrollable]="true"\r\n                (onNodeExpand)="togglerEvent()"\r\n                (onNodeCollapse)="togglerEvent()"\r\n                [resizableColumns]="true"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!isLoadingStructureTable"> &nbsp;</span>\r\n\r\n                  <div *ngIf="isLoadingStructureTable" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header">\r\n                    <div class="aw-table-actions">\r\n                      <button\r\n                        *ngIf="selectedSD && selectedSD.stockTitle !== undefined"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="consultStock()"\r\n                      >\r\n                        {{ componentData.componentId + ".consultStock" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th ttResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ componentData.componentId + "." + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">\r\n                  <tr [ttSelectableRow]="rowNode">\r\n                    <td\r\n                      style="overflow: hidden; text-overflow: ellipsis;"\r\n                      *ngFor="let col of columns; let i = index"\r\n                      [ngClass]="{\r\n                        \'critical-value-none\':\r\n                          col.field === \'quTotal\' && !rowData.lowThreshold && !rowData.highThreshold,\r\n                        \'critical-value-dark\':\r\n                          col.field === \'quTotal\' && rowData.lowThreshold && rowData.quTotal <= rowData.lowThreshold,\r\n                        \'critical-value-light\':\r\n                          col.field === \'quTotal\' && rowData.highThreshold && rowData.quTotal > rowData.highThreshold,\r\n                        \'critical-value-green\':\r\n                          col.field === \'quTotal\' &&\r\n                          rowData.lowThreshold === 0 &&\r\n                          rowData.quTotal < rowData.highThreshold\r\n                      }"\r\n                    >\r\n                      <p-treeTableToggler [rowNode]="rowNode" *ngIf="i == 0"></p-treeTableToggler>\r\n                      {{ rowData[col.field] }}\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-treeTable>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row" *ngIf="hasBeenCalculated && !showTable() && materialIsNotEmpty()">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container loading-indicator">\r\n                <div class="grid-cell-title">\r\n                  {{ getComponentName() + ".evolutionChart" | translate }}\r\n                  <div *ngIf="!chartContentReady" class="lds-hourglass"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div *ngIf="chartContentReady" class="chart-container">\r\n                <div class="grid-cell--container grid-cell-chart">\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container loading-indicator"></div>\r\n                  </div>\r\n                  <div class="grid-cell-content">\r\n                    <div class="row flex-row--justify-center">\r\n                      <div *ngIf="chartContentReady" class="chart-container">\r\n                        <div class="chart-wrapper">\r\n                          <p-chart\r\n                            [type]="chartType"\r\n                            [data]="stockStatusVariationData"\r\n                            [options]="quantityChartOptions"\r\n                            width="100%"\r\n                            height="100%"\r\n                          ></p-chart>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-search-material\r\n  *ngIf="showQuickSearchMaterialPopup"\r\n  [(display)]="showQuickSearchMaterialPopup"\r\n  [material-code]="searchObject.pnCode"\r\n  (onSelected)="setSelectedMaterial($event); updateMandatoryFieldsClass()"\r\n></aw-dialog-search-material>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/stock-status/search/stock-status-search.component.scss':
      /*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-status/search/stock-status-search.component.scss ***!
  \***************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .grid-cell-chart .chart-container {\n  display: flex;\n  flex-direction: row; }\n\n@media screen and (max-width: 1280px) {\n    :host .grid-cell-chart .chart-container {\n      flex-direction: column; } }\n\n:host .grid-cell-chart .chart-container .chart-legend {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 8px; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color {\n        height: 0.75rem;\n        margin-right: 8px;\n        width: 2rem; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.quantity {\n          background-color: #0d3fc2; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.amount {\n          background-color: #d3c632; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.not-airworthy {\n          background-color: #f6685e; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-value {\n      font-weight: 700;\n      margin-left: 8px; }\n\n:host .grid-cell-chart .chart-container .chart-wrapper {\n    position: relative;\n    height: 18rem;\n    width: 70rem; }\n\n:host .critical-value-dark {\n  background-color: #fba643 !important; }\n\n:host .critical-value-light {\n  background-color: #fecc8e !important; }\n\n:host .calendar-yellow {\n  background-color: #efefb0 !important; }\n\n:host .bad-value-dark {\n  background-color: #ff6758 !important; }\n\n:host .critical-value-none {\n  background-color: none !important; }\n\n:host .critical-value-green {\n  background-color: #4caf50 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stc3RhdHVzL3NlYXJjaC9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX21vZGlmaWVycy5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay1zdGF0dXMvc2VhcmNoL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxsb2dpc3RpY3NcXHN0b2NrLXN0YXR1c1xcc2VhcmNoXFxzdG9jay1zdGF0dXMtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay1zdGF0dXMvc2VhcmNoL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL21haW4vbG9naXN0aWNzL3N0b2NrLXN0YXR1cy9zZWFyY2gvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSx3QkFBd0I7RUFDeEIsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UseUNBQWlDO0VBQWpDLHNDQUFpQztFQUFqQyxpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxvQ0FBNEI7S0FBNUIsaUNBQTRCO01BQTVCLGdDQUE0QjtVQUE1Qiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXLEVBQUE7O0FBS2I7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSxvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxzQ0FBc0MsRUFBQTs7QUN6SHhDO0VDbUJFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QURmZjtJQUxOO01BTVEsc0JBQXNCLEVBQUEsRUE0Q3pCOztBQWxETDtJQ2NFLGFBQWE7SUFDYixzQkFBc0I7SURIaEIsdUJBQXVCO0lBQ3ZCLGdCRTJCVSxFQUFBOztBRnhDbEI7TUNtQkUsYUFBYTtNQUNiLG1CQUFtQjtNREZYLG1CQUFtQixFQUFBOztBQWxCN0I7UUFxQlksZUFBZTtRQUNmLGlCRWtCTTtRRmpCTixXQUFXLEVBQUE7O0FBdkJ2QjtVQTBCYyx5QkFBeUIsRUFBQTs7QUExQnZDO1VBOEJjLHlCQUF5QixFQUFBOztBQTlCdkM7VUFrQ2MseUJFZE0sRUFBQTs7QUZwQnBCO01Bd0NVLGdCQUFnQjtNQUNoQixnQkVEUSxFQUFBOztBRnhDbEI7SUE4Q1Esa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZLEVBQUE7O0FBaERwQjtFQXNESSxvQ0FBaUQsRUFBQTs7QUF0RHJEO0VBMERJLG9DQUFrRCxFQUFBOztBQTFEdEQ7RUE4REksb0NBQTZDLEVBQUE7O0FBOURqRDtFQWtFSSxvQ0FBNEMsRUFBQTs7QUFsRWhEO0VBc0VJLGlDQUFpQyxFQUFBOztBQXRFckM7RUF5RUksb0NBQTBDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay1zdGF0dXMvc2VhcmNoL3N0b2NrLXN0YXR1cy1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS0tZmxleC1jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXNwbGF5LS1mbGV4LXJvdyB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktLW5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlaWdodC0tMTAwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taW4td2lkdGgtLWZpdC1jb250ZW50IHtcclxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb3NpdGlvbi0tcmVsYXRpdmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2Nyb2xsLXktLW5vbmUge1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC0tdW5zZWxlY3RhYmxlIHtcclxuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmlzaWJpbGl0eS0taGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLS0xMCB7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLndpZHRoLS0yMCB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLndpZHRoLS0zMCB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLndpZHRoLS00MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLndpZHRoLS01MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLndpZHRoLS02MCB7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLndpZHRoLS03MCB7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLndpZHRoLS04MCB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLndpZHRoLS05MCB7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLndpZHRoLS0xMDAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4uZmxleC0tMSB7XHJcbiAgZmxleDogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tMiB7XHJcbiAgZmxleDogMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tMyB7XHJcbiAgZmxleDogMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tNCB7XHJcbiAgZmxleDogNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tNSB7XHJcbiAgZmxleDogNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tYXV0byB7XHJcbiAgZmxleDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLWVuZCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tc3RhcnQge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1lbmQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LXN0YXJ0IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG4iLCJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuQGltcG9ydCBcIm1vZGlmaWVyc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5ncmlkLWNlbGwtY2hhcnQge1xyXG4gICAgLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2hhcnQtbGVnZW5kIHtcclxuICAgICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgLmNoYXJ0LWxlZ2VuZC1sYWJlbCB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgLmNoYXJ0LWxlZ2VuZC1sYWJlbC1jb2xvciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMC43NXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgICAgICB3aWR0aDogMnJlbTtcclxuXHJcbiAgICAgICAgICAgICYucXVhbnRpdHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDNmYzI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYW1vdW50IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNjNjMyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLm5vdC1haXJ3b3J0aHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhcnQtdmFsdWUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNoYXJ0LXdyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDE4cmVtO1xyXG4gICAgICAgIHdpZHRoOiA3MHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNyaXRpY2FsLXZhbHVlLWRhcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNyaXRpY2FsLXZhbHVlLWRhcmsgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jcml0aWNhbC12YWx1ZS1saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JpdGljYWwtdmFsdWUtbGlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jYWxlbmRhci15ZWxsb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhbGVuZGFyLXllbGxvdyAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJhZC12YWx1ZS1kYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWQtdmFsdWUtZGFyayAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNyaXRpY2FsLXZhbHVlLW5vbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY3JpdGljYWwtdmFsdWUtZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFV0aWxzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBidXR0b24tY29sb3IoJGJhY2tncm91bmQtY29sb3IsICRjb2xvciwgJGJvcmRlci1jb2xvcjogbnVsbCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogJGNvbG9yO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIsXHJcbiAgJjpub3QoOmRpc2FibGVkKS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpZigkYm9yZGVyLWNvbG9yID09IG51bGwsICRjb2xvciwgJGJvcmRlci1jb2xvcik7XHJcbiAgICBjb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmxleC1jb2x1bW4oKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleC1yb3coKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQoKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuXHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWRpc2FibGVkKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWRpc2FibGVkO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1mb2N1cygpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxufVxyXG5cclxuQG1peGluIGlucHV0LWhvdmVyKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VhcmNoLWNyaXRlcmlhLWNvbnRhaW5lciB7XHJcbiAgLmFkdmFuY2VkLWNyaXRlcmlhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtY3JpdGVyaWEtZm9vdGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAuYXctYnRuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlY3Rpb24tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiA0KTtcclxuXHJcbiAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgJi5yZXF1aXJlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkKCk7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hbGVydCB7XHJcbiAgICAgICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICYgPiBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0LW92ZXJmbG93LWhpZGRlbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdyaWQgZm9ybSBjb250cm9scyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJNZWRpdW1cIjtcclxuXHJcbiAgJiA+IGlucHV0ICsgcC1tZXNzYWdlID4gLnVpLW1lc3NhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjpmb2N1cyxcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiKDI1NSwgMjU1LCAyNTUpIDYwJSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgIC5hdy1pY29uIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4sXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0biB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcblxyXG4gICAgICAmLmF3LWNhbGVuZGFyIC51aS1pbnB1dHRleHQsXHJcbiAgICAgICYuYXctZHJvcGRvd24gLnVpLWRyb3Bkb3duLFxyXG4gICAgICAmLmF3LWlucHV0LFxyXG4gICAgICAmLmF3LXRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1jYWxlbmRhciB7XHJcbiAgICAgIC8vIEZJWE1FOiBmaXggYW4gVUkgaXNzdWUgb24gUHJpbWVORyBjYWxlbmRhciBjb21wb25lbnQ7IHRvIHJlbW92ZSB3aGVuIGlzc3VlIHdpbGwgYmUgZml4ZWQgdXBzdHJlYW1cclxuICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgICAgIC5hdy1pY29uOm5vdCgucmVhZC1vbmx5LWxpbmspIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jazsgLy8gbm9uZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY29udHJvbC1kYXRhIHtcclxuICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tbmltcCxcclxuICAgIC5idG4tZXh0ZXJuYWwtbGluay13cmFwcGVyLFxyXG4gICAgLmJ0bi1jbGVhci13cmFwcGVyLFxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyLFxyXG4gICAgLmJ0bi1zZWFyY2gtd3JhcHBlciB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlciB7XHJcbiAgICAgIC5hdy1maWxldXBsb2FkIHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51aS1idXR0b24ge1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxlOTM0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tY2xlYXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tc2VhcmNoIHtcclxuICAgICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1yYWRpb2J1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICYgPiAuYXctcmFkaW9idXR0b24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMiAqICN7JG1hcmdpbi12YWx1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLWdlbmVyaWMge1xyXG4gIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG5cclxuICAmID4gYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IC5hbGVydCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDVyZW07XHJcblxyXG4gICAgJi5hbGVydC0tbm9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0tb2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLXdhcm5pbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNhbGVuZGFyIHtcclxuICAmLnVpLWlucHV0d3JhcHBlci1mb2N1cyB7XHJcbiAgICAudWktY2FsZW5kYXIgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuQG1peGluIGdyaWQtY2hlY2tib3gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRjaGVja2JveC1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRjaGVja2JveC1oZWlnaHQ7XHJcblxyXG4gIC51aS1jaGtib3gge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLWNoa2JveC1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1kcm9wZG93biB7XHJcbiAgLnVpLWRyb3Bkb3duIHtcclxuICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWZvY3VzIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uLFxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbiB7XHJcbiAgICAgIHJpZ2h0OiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgQGluY2x1ZGUgdGV4dC1vdmVyZmxvdy1oaWRkZW4oKTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyICogMS43NXJlbSk7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZpeGVkLXdpZHRoIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZmlsZXVwbG9hZCB7XHJcbiAgQGV4dGVuZCAuYXctYnRuO1xyXG5cclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICAudWktZmlsZXVwbG9hZC1jaG9vc2Uge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAwICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1idXR0b24tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtaW5wdXQoKSB7XHJcbiAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6Zm9jdXMge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRleHRhcmVhIHtcclxuICBAaW5jbHVkZSBncmlkLWlucHV0KCk7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1pbi1oZWlnaHQ6ICRmb3JtLWNvbnRyb2wtaGVpZ2h0O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXJhZGlvYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG4gIHdpZHRoOiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG5cclxuICAudWktcmFkaW9idXR0b24ge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLXJhZGlvYnV0dG9uLWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcblxyXG4gICAgICAgIC51aS1yYWRpb2J1dHRvbi1pY29uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gY2FsZW5kYXItcGFuZWwge1xyXG4gIC51aS1kYXRlcGlja2VyOm5vdCgudWktZGF0ZXBpY2tlci1pbmxpbmUpIHtcclxuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRyb3Bkb3duLXBhbmVsIHtcclxuICAudWktZHJvcGRvd24tcGFuZWwge1xyXG4gICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoICRib3JkZXItc3R5bGUgJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cclxuICAgIC51aS1kcm9wZG93bi1pdGVtcy13cmFwcGVyIC51aS1kcm9wZG93bi1saXN0IHtcclxuICAgICAgLnVpLWRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgcGFkZGluZzogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnVpLXN0YXRlLWhpZ2hsaWdodCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/logistics/stock-status/search/stock-status-search.component.ts':
      /*!*************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-status/search/stock-status-search.component.ts ***!
  \*************************************************************************************/
      /*! exports provided: StockStatusSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'StockStatusSearchComponent',
          function() {
            return StockStatusSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../../node_modules/@ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
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
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _administration_catalog_dynamic_catalog_components_logistics_stock_type_stock_type_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../administration/catalog/dynamic-catalog-components/logistics/stock-type/stock-type.service */ './src/app/main/administration/catalog/dynamic-catalog-components/logistics/stock-type/stock-type.service.ts'
        );
        /* harmony import */ var _material_form_material_form_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../material/form/material-form.service */ './src/app/main/logistics/material/form/material-form.service.ts'
        );
        /* harmony import */ var _stock_status_search_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./stock-status-search.service */ './src/app/main/logistics/stock-status/search/stock-status-search.service.ts'
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

        var StockStatusSearchComponent = /** @class */ (function(_super) {
          __extends(StockStatusSearchComponent, _super);
          function StockStatusSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            translateService,
            materialFormService,
            stockTypeService,
            stockStatusSearchService,
            dateService
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
            _this.translateService = translateService;
            _this.materialFormService = materialFormService;
            _this.stockTypeService = stockTypeService;
            _this.stockStatusSearchService = stockStatusSearchService;
            _this.dateService = dateService;
            _this.SEARCH_CRITERIA_ID =
              _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__[
                'AppConstants'
              ].STOCK_STATUS_SEARCH_CRITERIA_ID;
            return _this;
          }
          StockStatusSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.initData();
            this.initTables();
            this.initChart();
            this.init();
            if (!!this.componentData) {
              this.updateOpenMode(this.componentData.openMode);
              if (!!this.componentData.objectId) {
                this.searchObject = this.serializationService.deserialize(this.componentData.objectId);
                this.searchObject.startDate = new Date(
                  this.serializationService.deserialize(this.componentData.objectId).startDate
                );
                this.searchObject.endDate = new Date(
                  this.serializationService.deserialize(this.componentData.objectId).endDate
                );
                this.onClickCalculate();
              }
            }
            // this.displayComponentContext('global.search', true);
          };
          // init screen
          StockStatusSearchComponent.prototype.init = function() {
            this.getSiteList();
            this.getOwnerList();
          };
          // init data
          StockStatusSearchComponent.prototype.initData = function() {
            if (!this.searchObject) {
              this.searchObject = {
                startDate: new Date(),
                endDate: new Date()
              };
            }
            this.ssTreeTable = [];
            this.selectedSD = {};
            this.showQuickSearchMaterialPopup = false;
            this.hasBeenCalculated = false;
            this.chartContentReady = true;
            this.isLoadingStructureTable = false;
            this.warehouses = [];
            this.isPnCodeRequired = true;
            this.isSiteRequired = true;
            this.isWarehouseRequired = true;
            this.currLang = this.translateService.currentLang;
          };
          // init tables
          StockStatusSearchComponent.prototype.initTables = function() {
            this.ssTreeTableCols = [
              { field: 'stockTitle', alignment: 'left', width: '40%' },
              { field: 'quOpen', alignment: 'left' },
              { field: 'quBlocked', alignment: 'left' },
              { field: 'quControlled', alignment: 'left' },
              { field: 'quTotal', alignment: 'left' },
              { field: 'lowThreshold', alignment: 'left' },
              { field: 'highThreshold', alignment: 'left' }
            ];
          };
          // init chart
          StockStatusSearchComponent.prototype.initChart = function() {
            this.chartType = 'line';
            this.stockStatusVariationData = {
              datasets: [
                {
                  data: [],
                  label: 'Lower Threshold',
                  borderColor: '#0D3FC2',
                  backgroundColor: '#0D3FC2',
                  hoverBackgroundColor: '#0D3FC2',
                  fill: false
                },
                {
                  data: [],
                  label: 'Higher Threshold',
                  borderColor: '#FF00FF',
                  backgroundColor: '#FF00FF',
                  hoverBackgroundColor: '#FF00FF',
                  fill: false
                },
                {
                  data: [],
                  label: !!this.searchObject.stockOwnerCode
                    ? !!this.getStockLabel(this.searchObject.stockOwnerCode)
                      ? this.getStockLabel(this.searchObject.stockOwnerCode)
                      : 'NA (No Stock Owner)'
                    : 'NA (No Stock Owner)',
                  borderColor: '#8B4513',
                  backgroundColor: '#8B4513',
                  hoverBackgroundColor: '#8B4513',
                  fill: false
                },
                {
                  data: [],
                  label: 'Receipt',
                  borderColor: '#00FF00',
                  backgroundColor: '#00FF00',
                  hoverBackgroundColor: '#00FF00',
                  fill: false
                },
                {
                  data: [],
                  label: 'Issue',
                  borderColor: '#FF4500',
                  backgroundColor: '#FF4500',
                  hoverBackgroundColor: '#FF4500',
                  fill: false
                },
                {
                  data: [],
                  label: 'Quantity',
                  borderColor: '#6A5ACD',
                  backgroundColor: '#6A5ACD',
                  hoverBackgroundColor: '#6A5ACD',
                  fill: false
                }
              ],
              labels: []
            };
            this.setStockStatusChartOptions();
          };
          StockStatusSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
              .LOG_STOCK_STATUS_SEARCH;
          };
          StockStatusSearchComponent.prototype.onClickCalculate = function() {
            if (!!this.searchObject.startDate && !!this.searchObject.endDate) {
              if (this.searchObject.startDate <= this.searchObject.endDate) {
                if (!!this.searchObject.pnCode || (!!this.searchObject.siteId && !!this.searchObject.warehouseId)) {
                  if (!!this.searchObject.pnCode) {
                    this.initChart();
                    this.ssTreeTable = [];
                    this.hasBeenCalculated = true;
                    this.loadSSTreeTable();
                    if (!this.showTable()) {
                      this.calculateGraph();
                    }
                  }
                  if (!!this.searchObject.siteId && !!this.searchObject.warehouseId) {
                    this.ssTreeTable = [];
                    this.hasBeenCalculated = true;
                    this.loadSSTreeTable();
                  }
                } else {
                  this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
                }
              } else {
                this.messageService.showWarningMessage('TrainingPopupFormComponent.fromDateGreaterThanToDateError');
              }
            } else {
              this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
            }
          };
          // get data from server
          StockStatusSearchComponent.prototype.calculateGraph = function() {
            var _this = this;
            this.chartContentReady = false;
            this.stockStatusSearchService.getStockStatusGraph(this.searchObject).subscribe(function(result) {
              _this.setChartData(result);
            });
          };
          StockStatusSearchComponent.prototype.setChartData = function(statusGraphs) {
            var _this = this;
            if (!!statusGraphs) {
              statusGraphs.forEach(function(st) {
                _this.stockStatusVariationData.labels.push(_this.dateService.dateToString(st.graphicDate));
                _this.stockStatusVariationData.datasets[0].data.push(st.graphicLowThreshold);
                _this.stockStatusVariationData.datasets[1].data.push(st.graphicHighThreshold);
                // tslint:disable-next-line:no-magic-numbers
                _this.stockStatusVariationData.datasets[2].data.push(st.graphicOwner);
                // tslint:disable-next-line:no-magic-numbers
                _this.stockStatusVariationData.datasets[3].data.push(st.graphicReceipt);
                // tslint:disable-next-line:no-magic-numbers
                _this.stockStatusVariationData.datasets[4].data.push(st.graphicIssue);
                // tslint:disable-next-line:no-magic-numbers
                _this.stockStatusVariationData.datasets[5].data.push(st.graphicValue);
              });
            }
            this.chartContentReady = true;
          };
          StockStatusSearchComponent.prototype.setStockStatusChartOptions = function() {
            this.quantityChartOptions = {
              elements: {
                line: {
                  tension: 0
                }
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      stepSize: 10
                    }
                  }
                ]
              },
              legend: {
                display: true,
                position: 'bottom'
              },
              tooltips: {
                bodyFontColor:
                  _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__['AppConstants'].COLOR_BACKGROUND_PRIMARY
              }
            };
          };
          StockStatusSearchComponent.prototype.consultStock = function() {
            this.newCalculation(this.searchObject);
          };
          StockStatusSearchComponent.prototype.newCalculation = function(input) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
                  .LOG_STOCK_CONSULT_SEARCH,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Write,
              objectId: this.serializationService.serialize(input)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          // get data from server
          StockStatusSearchComponent.prototype.loadSSTreeTable = function() {
            var _this = this;
            this.isLoadingStructureTable = true;
            this.searchObject.withAlternatives = this.searchObject.withAlternatives || false;
            this.stockStatusSearchService.stockStatusSearch(this.searchObject).subscribe(function(result) {
              _this.isLoadingStructureTable = false;
              _this.ssTreeTable = result || [];
            });
          };
          // from modal
          StockStatusSearchComponent.prototype.setSelectedMaterial = function(event) {
            this.showQuickSearchMaterialPopup = false;
            this.searchObject.pnCode = event.pnCode;
          };
          StockStatusSearchComponent.prototype.resetSearchCriteria = function() {
            this.criteriaName = undefined;
            this.searchObject = {
              startDate: new Date(),
              endDate: new Date()
            };
          };
          StockStatusSearchComponent.prototype.loadSearchCriteria = function(event) {
            var criteria = event.criteria;
            if (!criteria) {
              this.resetSearchCriteria();
              return;
            }
            // do not load criteria first time if we come from stock alert page
            if (!this.componentData.objectId) {
              this.criteriaName = event.name;
              this.searchObject = criteria || {};
            } else {
              this.componentData.objectId = undefined;
            }
          };
          StockStatusSearchComponent.prototype.getStockLabel = function(stockOwner) {
            return this.ownerName.filter(function(row) {
              return row.value === stockOwner;
            })[0].label;
          };
          StockStatusSearchComponent.prototype.saveSearchCriteriaAsked = function() {
            var criteriaToSave = this.searchObject;
            this.criteriaToSave = criteriaToSave;
          };
          // get data from server
          StockStatusSearchComponent.prototype.getSiteList = function() {
            var _this = this;
            this.materialFormService.findAllStockStatusSites().subscribe(function(result) {
              var labelValue = [];
              result.forEach(function(res) {
                if (!!res) {
                  labelValue.push({
                    label: res.label,
                    value: Number(res.value)
                  });
                }
              });
              _this.sites = labelValue || [];
              _this.getWarehouseList();
            });
          };
          StockStatusSearchComponent.prototype.updateMandatoryFieldsClass = function() {
            if (!!this.searchObject.pnCode || !!this.searchObject.siteId) {
              if (!!this.searchObject.pnCode) {
                this.isSiteRequired = false;
                this.isWarehouseRequired = false;
              }
              if (!!this.searchObject.siteId) {
                this.isPnCodeRequired = false;
              }
            } else {
              this.isPnCodeRequired = true;
              this.isSiteRequired = true;
              this.isWarehouseRequired = true;
            }
          };
          StockStatusSearchComponent.prototype.clearPnCodeClass = function() {
            this.searchObject.pnCode = undefined;
            if (!!this.searchObject.siteId && !!this.searchObject.warehouseId) {
              this.isSiteRequired = true;
              this.isWarehouseRequired = true;
              this.isPnCodeRequired = false;
            } else {
              this.isSiteRequired = true;
              this.isWarehouseRequired = true;
              this.isPnCodeRequired = true;
            }
          };
          // get data from server
          StockStatusSearchComponent.prototype.getWarehouseList = function() {
            var _this = this;
            if (!!this.searchObject.siteId) {
              var siteId = this.searchObject.siteId.toString();
              this.materialFormService.findWarehouseBySite(siteId).subscribe(function(result) {
                var labelValue = [];
                if (!!result && result.length > 0) {
                  result.forEach(function(res) {
                    if (!!res && !!res.wareHouseId) {
                      labelValue.push({
                        label: res.whCode + '-' + res.whName,
                        value: res.wareHouseId
                      });
                    }
                  });
                  _this.warehouses = labelValue;
                } else {
                  _this.warehouses = [];
                  _this.searchObject.warehouseId = undefined;
                }
              });
            } else if (this.searchObject.siteId === null) {
              this.warehouses = [];
              this.searchObject.warehouseId = undefined;
            }
          };
          // event
          StockStatusSearchComponent.prototype.onClickSearchMaterial = function() {
            if (this.hasBeenCalculated) {
              return;
            }
            this.showQuickSearchMaterialPopup = true;
          };
          // get data from server
          StockStatusSearchComponent.prototype.getOwnerList = function() {
            var _this = this;
            this.stockTypeService.getOwnerNameMap().subscribe(function(results) {
              _this.ownerName = results;
            });
          };
          // event
          StockStatusSearchComponent.prototype.onRowSelected = function(node) {
            if (!!node.data) {
              this.selectedSD = node.data;
              this.selectedNode = node;
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'onRowSelected', 'node.data');
            }
          };
          // event
          StockStatusSearchComponent.prototype.togglerEvent = function() {
            this.selectedSD = {};
            this.selectedNode = {};
          };
          // event
          StockStatusSearchComponent.prototype.onClickNewCalculation = function() {
            this.hasBeenCalculated = false;
          };
          // visibility
          StockStatusSearchComponent.prototype.showTable = function() {
            return (
              this.searchObject.startDate !== undefined &&
              this.searchObject.endDate !== undefined &&
              this.searchObject.startDate.getFullYear() === this.searchObject.endDate.getFullYear() &&
              this.searchObject.startDate.getMonth() === this.searchObject.endDate.getMonth() &&
              this.searchObject.startDate.getDay() === this.searchObject.endDate.getDay()
            );
          };
          StockStatusSearchComponent.prototype.materialIsNotEmpty = function() {
            return (
              !!this.searchObject.pnCode &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__['StringUtils'].isEmpty(this.searchObject.pnCode)
            );
          };
          StockStatusSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-stock-status-search',
                template: __webpack_require__(
                  /*! ./stock-status-search.component.html */ './src/app/main/logistics/stock-status/search/stock-status-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./stock-status-search.component.scss */ './src/app/main/logistics/stock-status/search/stock-status-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__['SessionService'],
                _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _material_form_material_form_service__WEBPACK_IMPORTED_MODULE_15__['MaterialFormService'],
                _administration_catalog_dynamic_catalog_components_logistics_stock_type_stock_type_service__WEBPACK_IMPORTED_MODULE_14__[
                  'StockTypeService'
                ],
                _stock_status_search_service__WEBPACK_IMPORTED_MODULE_16__['StockStatusSearchService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__['DateService']
              ])
            ],
            StockStatusSearchComponent
          );
          return StockStatusSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_12__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-status/search/stock-status-search.service.ts':
      /*!***********************************************************************************!*\
  !*** ./src/app/main/logistics/stock-status/search/stock-status-search.service.ts ***!
  \***********************************************************************************/
      /*! exports provided: StockStatusSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'StockStatusSearchService',
          function() {
            return StockStatusSearchService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../../node_modules/@angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-stock-mvt.api */ './src/app/shared/api/bidt-stock-mvt.api.ts'
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

        var StockStatusSearchService = /** @class */ (function(_super) {
          __extends(StockStatusSearchService, _super);
          function StockStatusSearchService(http, appConfigService, bidtStockMvtApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtStockMvtApi = bidtStockMvtApi;
            return _this;
          }
          // makes a calculation on the base of search criteria
          StockStatusSearchService.prototype.stockStatusSearch = function(searchCriteria) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.findssTreeNode, searchCriteria);
          };
          // get Doumemnt list
          StockStatusSearchService.prototype.getPurchaseDocumentCategory = function() {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.findPurchaseDocumentCategory);
          };
          // Get Stock Status graph
          StockStatusSearchService.prototype.getStockStatusGraph = function(searchCriteria) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.findstockstatusgraph, searchCriteria);
          };
          StockStatusSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])(),
              __metadata('design:paramtypes', [
                _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtApi']
              ])
            ],
            StockStatusSearchService
          );
          return StockStatusSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-status/stock-status.module.ts':
      /*!********************************************************************!*\
  !*** ./src/app/main/logistics/stock-status/stock-status.module.ts ***!
  \********************************************************************/
      /*! exports provided: StockStatusModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'StockStatusModule', function() {
          return StockStatusModule;
        });
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
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/treetable */ './node_modules/primeng/treetable.js'
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_treetable__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var _node_modules_primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../node_modules/primeng/splitbutton */ './node_modules/primeng/splitbutton.js'
        );
        /* harmony import */ var _node_modules_primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          _node_modules_primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-material/dialog-search-material.module */ './src/app/shared/components/dialog-search-material/dialog-search-material.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/components/dialog-table/dialog-table.module */ './src/app/shared/components/dialog-table/dialog-table.module.ts'
        );
        /* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/components/dynamic-attributes/dynamic-attributes.module */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts'
        );
        /* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ './src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _material_form_material_form_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../material/form/material-form.service */ './src/app/main/logistics/material/form/material-form.service.ts'
        );
        /* harmony import */ var _stock_status_form_stock_status_form_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../stock-status/form/stock-status-form.service */ './src/app/main/logistics/stock-status/form/stock-status-form.service.ts'
        );
        /* harmony import */ var _stock_valuation_form_stock_valuation_form_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../stock-valuation/form/stock-valuation-form.service */ './src/app/main/logistics/stock-valuation/form/stock-valuation-form.service.ts'
        );
        /* harmony import */ var _stock_valuation_search_stock_valuation_search_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../stock-valuation/search/stock-valuation-search.service */ './src/app/main/logistics/stock-valuation/search/stock-valuation-search.service.ts'
        );
        /* harmony import */ var _form_stock_status_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./form/stock-status-form.component */ './src/app/main/logistics/stock-status/form/stock-status-form.component.ts'
        );
        /* harmony import */ var _search_stock_status_search_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./search/stock-status-search.component */ './src/app/main/logistics/stock-status/search/stock-status-search.component.ts'
        );
        /* harmony import */ var _search_stock_status_search_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./search/stock-status-search.service */ './src/app/main/logistics/stock-status/search/stock-status-search.service.ts'
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
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__['CheckboxModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__['DropdownModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_6__['TableModule'],
          primeng_chart__WEBPACK_IMPORTED_MODULE_2__['ChartModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__['TooltipModule'],
          primeng_treetable__WEBPACK_IMPORTED_MODULE_8__['TreeTableModule'],
          _node_modules_primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__['SplitButtonModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__['SelectButtonModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_14__['DialogTableModule'],
          _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_15__[
            'DynamicAttributesModule'
          ],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_17__['ModalModule'],
          _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_13__[
            'DialogSearchMaterialModule'
          ]
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [];
        var DYNAMIC_COMPONENTS = [
          _search_stock_status_search_component__WEBPACK_IMPORTED_MODULE_24__['StockStatusSearchComponent'],
          _form_stock_status_form_component__WEBPACK_IMPORTED_MODULE_23__['StockStatusFormComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _material_form_material_form_service__WEBPACK_IMPORTED_MODULE_19__['MaterialFormService'],
          _stock_valuation_search_stock_valuation_search_service__WEBPACK_IMPORTED_MODULE_22__[
            'StockValuationSearchService'
          ],
          _stock_valuation_form_stock_valuation_form_service__WEBPACK_IMPORTED_MODULE_21__['StockValuationFormService'],
          _stock_status_form_stock_status_form_service__WEBPACK_IMPORTED_MODULE_20__['StockStatusFormService'],
          _search_stock_status_search_service__WEBPACK_IMPORTED_MODULE_25__['StockStatusSearchService']
        ];
        var StockStatusModule = /** @class */ (function() {
          function StockStatusModule() {}
          StockStatusModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_10__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_11__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_12__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_18__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS),
                    _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_16__[
                      'ManageSearchCriteriaModule'
                    ]
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            StockStatusModule
          );
          return StockStatusModule;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=logistics-stock-status-stock-status-module.js.map
