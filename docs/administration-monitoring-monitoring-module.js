(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['administration-monitoring-monitoring-module'],
  {
    /***/ './node_modules/file-saver/dist/FileSaver.min.js':
      /*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        (function(a, b) {
          if (true)
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = b),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          else {
          }
        })(this, function() {
          'use strict';
          function b(a, b) {
            return (
              'undefined' == typeof b
                ? (b = { autoBom: !1 })
                : 'object' != typeof b &&
                  (console.warn('Deprecated: Expected third argument to be a object'), (b = { autoBom: !b })),
              b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)
                ? new Blob(['\uFEFF', a], { type: a.type })
                : a
            );
          }
          function c(b, c, d) {
            var e = new XMLHttpRequest();
            e.open('GET', b),
              (e.responseType = 'blob'),
              (e.onload = function() {
                a(e.response, c, d);
              }),
              (e.onerror = function() {
                console.error('could not download file');
              }),
              e.send();
          }
          function d(a) {
            var b = new XMLHttpRequest();
            return b.open('HEAD', a, !1), b.send(), 200 <= b.status && 299 >= b.status;
          }
          function e(a) {
            try {
              a.dispatchEvent(new MouseEvent('click'));
            } catch (c) {
              var b = document.createEvent('MouseEvents');
              b.initMouseEvent('click', !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
            }
          }
          var f =
              'object' == typeof window && window.window === window
                ? window
                : 'object' == typeof self && self.self === self
                ? self
                : 'object' == typeof global && global.global === global
                ? global
                : void 0,
            a =
              f.saveAs ||
              ('object' != typeof window || window !== f
                ? function() {}
                : 'download' in HTMLAnchorElement.prototype
                ? function(b, g, h) {
                    var i = f.URL || f.webkitURL,
                      j = document.createElement('a');
                    (g = g || b.name || 'download'),
                      (j.download = g),
                      (j.rel = 'noopener'),
                      'string' == typeof b
                        ? ((j.href = b),
                          j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, (j.target = '_blank')))
                        : ((j.href = i.createObjectURL(b)),
                          setTimeout(function() {
                            i.revokeObjectURL(j.href);
                          }, 4e4),
                          setTimeout(function() {
                            e(j);
                          }, 0));
                  }
                : 'msSaveOrOpenBlob' in navigator
                ? function(f, g, h) {
                    if (((g = g || f.name || 'download'), 'string' != typeof f)) navigator.msSaveOrOpenBlob(b(f, h), g);
                    else if (d(f)) c(f, g, h);
                    else {
                      var i = document.createElement('a');
                      (i.href = f),
                        (i.target = '_blank'),
                        setTimeout(function() {
                          e(i);
                        });
                    }
                  }
                : function(a, b, d, e) {
                    if (
                      ((e = e || open('', '_blank')),
                      e && (e.document.title = e.document.body.innerText = 'downloading...'),
                      'string' == typeof a)
                    )
                      return c(a, b, d);
                    var g = 'application/octet-stream' === a.type,
                      h = /constructor/i.test(f.HTMLElement) || f.safari,
                      i = /CriOS\/[\d]+/.test(navigator.userAgent);
                    if ((i || (g && h)) && 'object' == typeof FileReader) {
                      var j = new FileReader();
                      (j.onloadend = function() {
                        var a = j.result;
                        (a = i ? a : a.replace(/^data:[^;]*;/, 'data:attachment/file;')),
                          e ? (e.location.href = a) : (location = a),
                          (e = null);
                      }),
                        j.readAsDataURL(a);
                    } else {
                      var k = f.URL || f.webkitURL,
                        l = k.createObjectURL(a);
                      e ? (e.location = l) : (location.href = l),
                        (e = null),
                        setTimeout(function() {
                          k.revokeObjectURL(l);
                        }, 4e4);
                    }
                  });
          (f.saveAs = a.saveAs = a), true && (module.exports = a);
        });

        //# sourceMappingURL=FileSaver.min.js.map

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

    /***/ './src/app/main/administration/monitoring/form/dialog-librairies-report/dialog-librairies-report.component.html':
      /*!**********************************************************************************************************************!*\
  !*** ./src/app/main/administration/monitoring/form/dialog-librairies-report/dialog-librairies-report.component.html ***!
  \**********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal style="height: 28em;" class="aw-modal" [(visible)]="displayValue" [width]="600">\r\n  <a-header>\r\n    <div class="modal-title">{{ componentId + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group" style="overflow: hidden">\r\n      <label class="form-label"></label>\r\n\r\n      <div class="form-control" style="height: auto">\r\n        <textarea\r\n          pInputTextArea\r\n          [cols]="100"\r\n          [rows]="30"\r\n          type="text"\r\n          class="aw-textarea"\r\n          [(ngModel)]="importReportMessage"\r\n          disabled\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/administration/monitoring/form/dialog-librairies-report/dialog-librairies-report.component.ts':
      /*!********************************************************************************************************************!*\
  !*** ./src/app/main/administration/monitoring/form/dialog-librairies-report/dialog-librairies-report.component.ts ***!
  \********************************************************************************************************************/
      /*! exports provided: DialogLibrairiesReportComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogLibrairiesReportComponent',
          function() {
            return DialogLibrairiesReportComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
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
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var DialogLibrairiesReportComponent = /** @class */ (function() {
          function DialogLibrairiesReportComponent() {
            this.componentId = 'DialogLibrairiesReportComponent';
            this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          }
          Object.defineProperty(DialogLibrairiesReportComponent.prototype, 'display', {
            get: function() {
              return this.displayValue;
            },
            set: function(displayValue) {
              this.displayValue = displayValue;
              this.displayChange.emit(this.displayValue);
            },
            enumerable: true,
            configurable: true
          });
          DialogLibrairiesReportComponent.prototype.ngOnInit = function() {
            // TODO
          };
          DialogLibrairiesReportComponent.prototype.closeDialog = function() {
            this.display = false;
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            DialogLibrairiesReportComponent.prototype,
            'display',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogLibrairiesReportComponent.prototype,
            'displayChange',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogLibrairiesReportComponent.prototype,
            'importReportMessage',
            void 0
          );
          DialogLibrairiesReportComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-librairies-report',
                template: __webpack_require__(
                  /*! ./dialog-librairies-report.component.html */ './src/app/main/administration/monitoring/form/dialog-librairies-report/dialog-librairies-report.component.html'
                )
              }),
              __metadata('design:paramtypes', [])
            ],
            DialogLibrairiesReportComponent
          );
          return DialogLibrairiesReportComponent;
        })();

        /***/
      },

    /***/ './src/app/main/administration/monitoring/form/monitoring-form.component.html':
      /*!************************************************************************************!*\
  !*** ./src/app/main/administration/monitoring/form/monitoring-form.component.html ***!
  \************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item (click)="refresh()">{{ "global.refresh" | translate }}</button>\r\n      <button mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <mat-tab-group animationDuration="0ms" dynamicHeight>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ "home" | translate }}\r\n          </ng-template>\r\n          <!-- SPRING AND DATABASE -->\r\n          <div class="grid-row">\r\n            <div class="grid-cell--6">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container loading-indicator">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".spring" | translate }}\r\n                      <div *ngIf="panelLoading" class="lds-hourglass"></div>\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".creationDate" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="monitoringData.creationDate"\r\n                        [showTime]="true"\r\n                        [disabled]="true"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".architectureType" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="true"\r\n                        [(ngModel)]="monitoringData.architecturalType"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell--6">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container loading-indicator">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".database" | translate }}\r\n                      <div *ngIf="panelLoading" class="lds-hourglass"></div>\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".dbURL" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="true"\r\n                        title="{{ monitoringData.dbUrl }}"\r\n                        [(ngModel)]="dbURLString"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".dbUser" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [disabled]="true" [(ngModel)]="monitoringData.dbUser" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- LIBRAIRIES -->\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container loading-indicator">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".libraries" | translate }}\r\n                      <div *ngIf="panelLoading" class="lds-hourglass"></div>\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <button type="button" mat-raised-button (click)="openReportDialog()">\r\n                    <span>{{ componentData.componentId + ".refreshLibraries" | translate }}</span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + ".performances" | translate }}\r\n          </ng-template>\r\n          <!-- SERVICE PERFORMANCE -->\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container loading-indicator">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".servicePerformance" | translate }}\r\n                      <div *ngIf="panelLoading" class="lds-hourglass"></div>\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content  grid-cell-content-with-section">\r\n                  <div *ngIf="!panelLoading" class="grid-cell--12">\r\n                    <div class="section">\r\n                      <div class="section-content">\r\n                        <div class="row">\r\n                          <div class="form-group">\r\n                            <label class="form-label">\r\n                              <b class="fontClass">{{ componentData.componentId + ".note" | translate }}</b>\r\n                            </label>\r\n\r\n                            <div class="form-control">\r\n                              <ul style="list-style-type:disc;">\r\n                                <li class="fontClass">\r\n                                  {{ componentData.componentId + ".statsReportHelp" | translate }}\r\n                                </li>\r\n                                <li class="fontClass">\r\n                                  {{ componentData.componentId + ".detailedStatsHelp" | translate }}\r\n                                </li>\r\n                              </ul>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class="row">\r\n                          <div class="form-group">\r\n                            <label class="form-label">\r\n                              {{ componentData.componentId + ".report" | translate }}\r\n                            </label>\r\n\r\n                            <div class="form-control">\r\n                              <textarea\r\n                                pInputTextarea\r\n                                [rows]="5"\r\n                                class="aw-textarea"\r\n                                [disabled]="true"\r\n                                style="background: #E5EAF3; font: caption; font-size: small"\r\n                                [(ngModel)]="monitoringData.serviceReport"\r\n                                maxlength="300"\r\n                              ></textarea>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class="row" style="margin-left: 15px">\r\n                          <button type="button" class="btn-with-spinner" mat-raised-button (click)="fetchStats(0)">\r\n                            <span class="lds-hourglass" *ngIf="resetStatLoader"></span>\r\n                            {{ componentData.componentId + ".resetStats" | translate }}\r\n                          </button>\r\n                          &nbsp;&nbsp;\r\n                          <button type="button" class="btn-with-spinner" mat-raised-button (click)="fetchStats(1)">\r\n                            <span class="lds-hourglass" *ngIf="refreshStatLoader"></span>\r\n                            {{ componentData.componentId + ".refreshStats" | translate }}\r\n                          </button>\r\n                          &nbsp;&nbsp;\r\n                          <button type="button" class="btn-with-spinner" mat-raised-button (click)="fetchStats(2)">\r\n                            <span class="lds-hourglass" *ngIf="detailedStatLoader"></span>\r\n                            {{ componentData.componentId + ".detailedStats" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="grid-cell--8">\r\n                    <div class="section">\r\n                      <h4 class="section-title">\r\n                        {{ componentData.componentId + ".log4jConf" | translate }}\r\n                      </h4>\r\n\r\n                      <div class="section-content">\r\n                        <div\r\n                          class="row"\r\n                          *ngFor="let conf of monitoringData.log4jConfigurationList; let caseIndex = index"\r\n                        >\r\n                          <div class="form-group">\r\n                            <label class="form-label">{{ conf.logText }}</label>\r\n                          </div>\r\n\r\n                          <div class="form-control" style="margin: auto">\r\n                            <p-selectButton\r\n                              [options]="levelList"\r\n                              [(ngModel)]="conf.betweenText"\r\n                              (click)="changeLogLevel(conf)"\r\n                            ></p-selectButton>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="grid-cell--12">\r\n                    <div class="section">\r\n                      <h4 class="section-title">\r\n                        {{ componentData.componentId + ".jobsMonitoring" | translate }}\r\n                      </h4>\r\n\r\n                      <div class="section-content">\r\n                        <div class="form-group">\r\n                          <div class="form-control">\r\n                            <textarea\r\n                              pInputTextarea\r\n                              [rows]="5"\r\n                              class="aw-textarea"\r\n                              [disabled]="true"\r\n                              style="background: #E5EAF3; font: caption; font-size: small"\r\n                              [(ngModel)]="monitoringData.jobMonitoring"\r\n                              maxlength="300"\r\n                            ></textarea>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- LIBRAIRIES REPORT -->\r\n<aw-dialog-librairies-report\r\n  *ngIf="showLibrariesReportDialog"\r\n  [(display)]="showLibrariesReportDialog"\r\n  [importReportMessage]="monitoringData.libraryReport"\r\n></aw-dialog-librairies-report>\r\n';

        /***/
      },

    /***/ './src/app/main/administration/monitoring/form/monitoring-form.component.scss':
      /*!************************************************************************************!*\
  !*** ./src/app/main/administration/monitoring/form/monitoring-form.component.scss ***!
  \************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .fontClass {\n  color: #007ad9;\n  font-style: italic; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hZG1pbmlzdHJhdGlvbi9tb25pdG9yaW5nL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGFkbWluaXN0cmF0aW9uXFxtb25pdG9yaW5nXFxmb3JtXFxtb25pdG9yaW5nLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FkbWluaXN0cmF0aW9uL21vbml0b3JpbmcvZm9ybS9tb25pdG9yaW5nLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmZvbnRDbGFzcyB7XHJcbiAgICBjb2xvcjogIzAwN2FkOTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/administration/monitoring/form/monitoring-form.component.ts':
      /*!**********************************************************************************!*\
  !*** ./src/app/main/administration/monitoring/form/monitoring-form.component.ts ***!
  \**********************************************************************************/
      /*! exports provided: MonitoringFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MonitoringFormComponent',
          function() {
            return MonitoringFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/components/component-sidebar/page-toc.service */ './src/app/shared/components/component-sidebar/page-toc.service.ts'
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
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _monitoring_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./monitoring-form.service */ './src/app/main/administration/monitoring/form/monitoring-form.service.ts'
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

        var MonitoringFormComponent = /** @class */ (function(_super) {
          __extends(MonitoringFormComponent, _super);
          // ****************************************************************************
          function MonitoringFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            pageTocService,
            translateService,
            monitoringFormService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                pageTocService
              ) || this;
            _this.sessionService = sessionService;
            _this.translateService = translateService;
            _this.monitoringFormService = monitoringFormService;
            _this.component = MonitoringFormComponent_1;
            _super.prototype.registerPageTocEntryObservable.call(_this);
            return _this;
          }
          MonitoringFormComponent_1 = MonitoringFormComponent;
          MonitoringFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
              .ADM_MONITORING;
          };
          MonitoringFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.setTableOfContent();
            this.init();
          };
          MonitoringFormComponent.prototype.refresh = function() {
            this.init();
          };
          /**********************************
           * SET TABLE OF CONTENT
           **********************************/
          MonitoringFormComponent.prototype.setTableOfContent = function() {
            var _this = this;
            var springKey = this.getTranslateKey('spring');
            var databaseKey = this.getTranslateKey('database');
            var performanceKey = this.getTranslateKey('servicePerformance');
            var librariesKey = this.getTranslateKey('libraries');
            this.translateService
              .get([springKey, databaseKey, performanceKey, librariesKey])
              .subscribe(function(results) {
                var springLabel = !!results ? results[springKey] : 'Spring';
                var dbLabel = !!results ? results[databaseKey] : 'Database';
                var performanceLabel = !!results ? results[performanceKey] : 'Service Performance';
                var librariesLabel = !!results ? results[librariesKey] : 'Librairies';
                _this.toc = [
                  {
                    id: 'springAnchor',
                    anchor: _this.springEltRef,
                    label: springLabel
                  },
                  {
                    id: 'databaseAnchor',
                    anchor: _this.dbEltRef,
                    label: dbLabel
                  },
                  {
                    id: 'servicePerformanceAnchor',
                    anchor: _this.performanceEltRef,
                    label: performanceLabel
                  },
                  {
                    id: 'librariesAnchor',
                    anchor: _this.librariesEltRef,
                    label: librariesLabel
                  }
                ];
                _super.prototype.selectPageTocEntry.call(_this, _this.component.SPRING_ANCHOR_ID);
              });
          };
          /**********************************
           * INIT METHOD
           **********************************/
          MonitoringFormComponent.prototype.init = function() {
            this.monitoringData = {};
            this.setConfigurationList();
            this.loadMonitoringData();
          };
          /**********************************
           * SET CONFIGURATION SELECT BUTTON LIST
           **********************************/
          MonitoringFormComponent.prototype.setConfigurationList = function() {
            this.levelList = [
              {
                label: 'Debug',
                value: 'DEBUG'
              },
              {
                label: 'Info',
                value: 'INFO'
              },
              {
                label: 'Error',
                value: 'ERROR'
              }
            ];
          };
          /**********************************
           * LOAD SCREEN DATA
           **********************************/
          MonitoringFormComponent.prototype.loadMonitoringData = function() {
            var _this = this;
            this.panelLoading = true;
            this.monitoringFormService.adminMonitoring().subscribe(
              function(data) {
                _this.monitoringData = data;
                if (!!_this.monitoringData.dbUrl) {
                  var endIndex = 40;
                  if (_this.monitoringData.dbUrl.length > endIndex) {
                    _this.dbURLString = _this.monitoringData.dbUrl.substring(0, endIndex) + '...';
                  } else {
                    _this.dbURLString = _this.monitoringData.dbUrl;
                  }
                }
                _this.panelLoading = false;
              },
              function(error) {
                _this.panelLoading = false;
              }
            );
          };
          MonitoringFormComponent.prototype.openReportDialog = function() {
            this.showLibrariesReportDialog = true;
          };
          /**********************************
           * LOAD STATS
           **********************************/
          MonitoringFormComponent.prototype.fetchStats = function(stat) {
            var _this = this;
            switch (stat) {
              case 0: {
                this.resetStatLoader = true;
                this.monitoringFormService.reset().subscribe(
                  function(data) {
                    _this.monitoringData.serviceReport = data;
                    _this.resetStatLoader = false;
                  },
                  function(error) {
                    _this.resetStatLoader = false;
                  }
                );
                break;
              }
              case 1: {
                this.refreshStatLoader = true;
                this.monitoringFormService.refresh().subscribe(
                  function(data) {
                    _this.monitoringData.serviceReport = data;
                    _this.refreshStatLoader = false;
                  },
                  function(error) {
                    _this.refreshStatLoader = false;
                  }
                );
                break;
              }
              default: {
                this.detailedStatLoader = true;
                this.monitoringFormService.detailed().subscribe(
                  function(data) {
                    _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_12__['FileUtils'].downloadFile(
                      data.content,
                      data.fileName
                    );
                    _this.detailedStatLoader = false;
                  },
                  function(error) {
                    _this.detailedStatLoader = false;
                  }
                );
                break;
              }
            }
          };
          /**********************************
           * Change Log Level
           **********************************/
          MonitoringFormComponent.prototype.changeLogLevel = function(conf) {
            var _this = this;
            this.monitoringFormService.changeLogLevel(conf).subscribe(
              function() {
                // TODO
              },
              function(error) {
                _this.detailedStatLoader = false;
              }
            );
          };
          var MonitoringFormComponent_1;
          MonitoringFormComponent.SPRING_ANCHOR_ID = 'springAnchor';
          MonitoringFormComponent.DATABASE_ANCHOR_ID = 'databaseAnchor';
          MonitoringFormComponent.SERVICE_PERFORMANCE_ANCHOR_ID = 'servicePerformanceAnchor';
          MonitoringFormComponent.LIBRARIES_ANCHOR_ID = 'librariesAnchor';
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                MonitoringFormComponent_1.SPRING_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            MonitoringFormComponent.prototype,
            'springEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                MonitoringFormComponent_1.DATABASE_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            MonitoringFormComponent.prototype,
            'dbEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                MonitoringFormComponent_1.SERVICE_PERFORMANCE_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            MonitoringFormComponent.prototype,
            'performanceEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                MonitoringFormComponent_1.LIBRARIES_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            MonitoringFormComponent.prototype,
            'librariesEltRef',
            void 0
          );
          MonitoringFormComponent = MonitoringFormComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-monitoring-form',
                template: __webpack_require__(
                  /*! ./monitoring-form.component.html */ './src/app/main/administration/monitoring/form/monitoring-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./monitoring-form.component.scss */ './src/app/main/administration/monitoring/form/monitoring-form.component.scss'
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
                _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_2__['PageTocService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _monitoring_form_service__WEBPACK_IMPORTED_MODULE_13__['MonitoringFormService']
              ])
            ],
            MonitoringFormComponent
          );
          return MonitoringFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/administration/monitoring/form/monitoring-form.service.ts':
      /*!********************************************************************************!*\
  !*** ./src/app/main/administration/monitoring/form/monitoring-form.service.ts ***!
  \********************************************************************************/
      /*! exports provided: MonitoringFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MonitoringFormService', function() {
          return MonitoringFormService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-business.api */ './src/app/shared/api/fleet-business.api.ts'
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

        var MonitoringFormService = /** @class */ (function(_super) {
          __extends(MonitoringFormService, _super);
          function MonitoringFormService(http, appConfigService, fleetBusinessApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.fleetBusinessApi = fleetBusinessApi;
            return _this;
          }
          MonitoringFormService.prototype.adminMonitoring = function() {
            return _super.prototype.post.call(this, this.fleetBusinessApi.adminMonitoring);
          };
          /**********************************
           * STATS OPERATIONS
           **********************************/
          MonitoringFormService.prototype.reset = function() {
            return _super.prototype.post.call(this, this.fleetBusinessApi.resetStats);
          };
          MonitoringFormService.prototype.refresh = function() {
            return _super.prototype.post.call(this, this.fleetBusinessApi.refreshStats);
          };
          MonitoringFormService.prototype.detailed = function() {
            return _super.prototype.post.call(this, this.fleetBusinessApi.detailedStats);
          };
          MonitoringFormService.prototype.changeLogLevel = function(conf) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.changeLogLevel, conf);
          };
          MonitoringFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_2__['FleetBusinessApi']
              ])
            ],
            MonitoringFormService
          );
          return MonitoringFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/administration/monitoring/monitoring.module.ts':
      /*!*********************************************************************!*\
  !*** ./src/app/main/administration/monitoring/monitoring.module.ts ***!
  \*********************************************************************/
      /*! exports provided: MonitoringModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MonitoringModule', function() {
          return MonitoringModule;
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
        /* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/dialog */ './node_modules/primeng/dialog.js'
        );
        /* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dialog__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ './src/app/shared/components/component-sidebar/component-sidebar.mdule.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _form_dialog_librairies_report_dialog_librairies_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./form/dialog-librairies-report/dialog-librairies-report.component */ './src/app/main/administration/monitoring/form/dialog-librairies-report/dialog-librairies-report.component.ts'
        );
        /* harmony import */ var _form_monitoring_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./form/monitoring-form.component */ './src/app/main/administration/monitoring/form/monitoring-form.component.ts'
        );
        /* harmony import */ var _form_monitoring_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./form/monitoring-form.service */ './src/app/main/administration/monitoring/form/monitoring-form.service.ts'
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
          primeng_dialog__WEBPACK_IMPORTED_MODULE_2__['DialogModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__['TooltipModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_3__['SelectButtonModule'],
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule'],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_9__['ModalModule'],
          _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_8__[
            'ComponentSidebarModule'
          ]
        ];
        var INTERNAL_MODULES = [];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _form_dialog_librairies_report_dialog_librairies_report_component__WEBPACK_IMPORTED_MODULE_11__[
            'DialogLibrairiesReportComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [
          _form_monitoring_form_component__WEBPACK_IMPORTED_MODULE_12__['MonitoringFormComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [_form_monitoring_form_service__WEBPACK_IMPORTED_MODULE_13__['MonitoringFormService']];
        var MonitoringModule = /** @class */ (function() {
          function MonitoringModule() {}
          MonitoringModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_5__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_6__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_7__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_10__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            MonitoringModule
          );
          return MonitoringModule;
        })();

        /***/
      },

    /***/ './src/app/shared/utils/file-utils.ts':
      /*!********************************************!*\
  !*** ./src/app/shared/utils/file-utils.ts ***!
  \********************************************/
      /*! exports provided: FileUtils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'FileUtils', function() {
          return FileUtils;
        });
        /* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! file-saver */ './node_modules/file-saver/dist/FileSaver.min.js'
        );
        /* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          file_saver__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _number_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./number-utils */ './src/app/shared/utils/number-utils.ts'
        );

        var FileUtils = /** @class */ (function() {
          function FileUtils() {}
          FileUtils.downloadFile = function(file, fileName) {
            if (!!file && !!fileName) {
              var byteCharacters = atob(file.toString());
              var byteNumbers = new Array(byteCharacters.length);
              for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
              }
              file_saver__WEBPACK_IMPORTED_MODULE_0__['saveAs'](new Blob([new Uint8Array(byteNumbers)]), fileName);
            }
          };
          FileUtils.getExtension = function(fileName) {
            return !!fileName && fileName.includes('.') ? fileName.substring(fileName.lastIndexOf('.') + 1) : '';
          };
          FileUtils.getFileContentAsBase64 = function(file, callback) {
            if (!!file) {
              var reader_1 = new FileReader();
              reader_1.onloadend = function() {
                var fileContent = reader_1.result; // tslint:disable-line:no-any
                fileContent = fileContent.substring(fileContent.indexOf(',') + 1); // Remove data:*/*;base64,
                callback(fileContent);
              };
              reader_1.readAsDataURL(file);
            }
          };
          FileUtils.getFormattedSize = function(size) {
            if (!!size) {
              return size / FileUtils.KILOOCTET < FileUtils.KILOOCTET
                ? _number_utils__WEBPACK_IMPORTED_MODULE_1__['NumberUtils'].roundNumber(size / FileUtils.KILOOCTET) +
                    ' Ko'
                : _number_utils__WEBPACK_IMPORTED_MODULE_1__['NumberUtils'].roundNumber(
                    size / FileUtils.KILOOCTET / FileUtils.KILOOCTET
                  ) + ' Mo';
            } else {
              return '';
            }
          };
          FileUtils.KIBIOCTET = 1024;
          FileUtils.KILOOCTET = 1000;
          return FileUtils;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=administration-monitoring-monitoring-module.js.map
