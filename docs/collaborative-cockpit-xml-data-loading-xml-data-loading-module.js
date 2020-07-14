(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['collaborative-cockpit-xml-data-loading-xml-data-loading-module'],
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

    /***/ './node_modules/primeng/progressbar.js':
      /*!*********************************************!*\
  !*** ./node_modules/primeng/progressbar.js ***!
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
            /*! ./components/progressbar/progressbar */ './node_modules/primeng/components/progressbar/progressbar.js'
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

    /***/ './src/app/main/collaborative-cockpit/xml-data-loading/form/xml-data-loading-form.component.html':
      /*!*******************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/xml-data-loading/form/xml-data-loading-form.component.html ***!
  \*******************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle">\r\n        {{ "page.searchPage" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-primary-actions"><!-- Remove enclosing tag if empty --></div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <!-- ROW 1: DATA PANEL -->\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".data" | translate }}</label>\r\n                    <div class="form-control custom-margin">\r\n                      <p-selectButton\r\n                        [(ngModel)]="selectedData"\r\n                        [options]="dataList"\r\n                        (onChange)="checkDataControl()"\r\n                      ></p-selectButton>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- PANEL ENABLE BY displayEnginePanel -->\r\n                <div class="row" *ngIf="displayEnginePanel">\r\n                  <div class="form-group required">\r\n                    <label class="form-label">{{ componentData.componentId + ".wbmRevNum" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="wbmRevNum" />\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group"></div>\r\n                  <div class="form-group"></div>\r\n                  <div class="form-group"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- ROW 2: IMPORT PANEL -->\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title" *ngIf="selectedData === ipcData">\r\n                  {{ componentData.componentId + ".importIPCData" | translate }}\r\n                </h3>\r\n                <h3 class="grid-cell-title" *ngIf="selectedData === engineManualData">\r\n                  {{ componentData.componentId + ".importEngineManual" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <!-- IMPORT ROW -->\r\n              <div class="row grid-cell--12">\r\n                <div class="row grid-cell--5">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".fileToImport" | translate }}</label>\r\n\r\n                    <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n                      <div class="form-control-data">\r\n                        {{ fileName }}\r\n                      </div>\r\n\r\n                      <div class="btn-file-upload-wrapper">\r\n                        <p-fileUpload\r\n                          #fileUploader\r\n                          *ngIf="!isReadOpenMode"\r\n                          class="aw-fileupload"\r\n                          name="document[]"\r\n                          customUpload="true"\r\n                          mode="basic"\r\n                          auto="true"\r\n                          sizeLimit="100000000"\r\n                          chooseLabel=""\r\n                          (uploadHandler)="uploadDocument($event, fileUploader)"\r\n                        ></p-fileUpload>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row grid-cell--1">\r\n                  <div class="form-group">\r\n                    <label class="form-label"> &nbsp; </label>\r\n                    <div class="form-control">\r\n                      <button\r\n                        type="button"\r\n                        class="btn-with-spinner"\r\n                        mat-raised-button\r\n                        (click)="import()"\r\n                        [disabled]="!currentFile || importRunning"\r\n                      >\r\n                        <span class="lds-hourglass" *ngIf="importLoader || importRunning"></span>\r\n                        <i class="fa fa-fw fa-plus" aria-hidden="true"></i>\r\n                        {{ componentData.componentId + ".importFile" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="row grid-cell--1">\r\n                  <div *ngIf="displayEnginePanel">\r\n                    <label class="form-label"> &nbsp; </label>\r\n                    <div class="form-group">\r\n                      <div class="form-control">\r\n                        <button type="button" mat-raised-button (click)="changeRecord()">\r\n                          {{ componentData.componentId + ".changeRecord" | translate }}\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="row grid-cell--4"></div>\r\n              </div>\r\n\r\n              <!-- PROGRESS ROW -->\r\n              <ng-container *ngIf="!displayEnginePanel">\r\n                <div class="row grid-cell--12" *ngFor="let elt of importIpcSatuses">\r\n                  <div class="row grid-cell--6">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ elt.fileName }} </label>\r\n                      <div class="form-control">\r\n                        <p-progressBar [value]="elt.progress"></p-progressBar>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="row grid-cell--2">\r\n                    <div class="form-group">\r\n                      <label class="form-label"> &nbsp; </label>\r\n                      <div class="form-control">{{ elt.handled }}/ {{ elt.total }}</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n              <ng-container *ngIf="displayEnginePanel">\r\n                <div class="row grid-cell--12" *ngFor="let elt of importTasksSatuses">\r\n                  <div class="row grid-cell--6">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ elt.fileName }} </label>\r\n                      <div class="form-control">\r\n                        <p-progressBar [value]="elt.progress"></p-progressBar>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="row grid-cell--2">\r\n                    <div class="form-group">\r\n                      <label class="form-label"> &nbsp; </label>\r\n                      <div class="form-control">{{ elt.handled }}/ {{ elt.total }}</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- ROW 3: IMPORT REPORT LIST -->\r\n        <div class="grid-row">\r\n          <div class="grid-cell--12">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ componentData.componentId + ".importReports" | translate }} ({{\r\n                      selectedReports ? selectedReports.length : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <!--For import reports-->\r\n              <div class="grid-cell-content">\r\n                <p-table\r\n                  [resizableColumns]="true"\r\n                  #ptableImportReports\r\n                  class="aw-table2"\r\n                  [columns]="reportTableCols"\r\n                  [value]="reports"\r\n                  [(selection)]="selectedReports"\r\n                  [scrollable]="true"\r\n                >\r\n                  <ng-template pTemplate="emptymessage">\r\n                    <span *ngIf="!isReportLoading"> &nbsp;</span>\r\n\r\n                    <div *ngIf="isReportLoading" class="aw-table-loading-indicator">\r\n                      <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                      <div class="lds-hourglass"></div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="caption">\r\n                    <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedReports.length > 0 }">\r\n                      <div class="aw-table-global-filter">\r\n                        <label class="aw-table-global-filter-label">\r\n                          <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                        </label>\r\n\r\n                        <input\r\n                          #ptableImportReportGlobalFilter\r\n                          class="aw-table-global-filter-input"\r\n                          type="text"\r\n                          placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                          (input)="ptableImportReports.filterGlobal($event.target.value, \'contains\')"\r\n                        />\r\n                      </div>\r\n\r\n                      <div class="aw-table-actions">\r\n                        <button\r\n                          *ngIf="selectedReports.length > 0"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="deleteReports()"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="colgroup" let-columns>\r\n                    <colgroup>\r\n                      <col class="aw-table-checkbox-wrapper" />\r\n                      <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                    </colgroup>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="header" let-columns>\r\n                    <tr>\r\n                      <th class="aw-table-checkbox-wrapper">\r\n                        <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                      </th>\r\n\r\n                      <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                        {{ componentData.componentId + "." + col.field | translate }}\r\n                      </th>\r\n                    </tr>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                    <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                      <td class="aw-table-checkbox-wrapper">\r\n                        <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                      </td>\r\n\r\n                      <td\r\n                        *ngFor="let col of columns"\r\n                        [ngSwitch]="col.field"\r\n                        [ngStyle]="{ \'text-align\': col.alignment }"\r\n                      >\r\n                        <div *ngSwitchCase="\'reportName\'">\r\n                          <span (click)="openReportDetail(rowData)" class="report-name">\r\n                            {{ rowData[col.field] }}\r\n                          </span>\r\n                        </div>\r\n                        <div *ngSwitchCase="\'statusDate\'">\r\n                          <span>\r\n                            {{ rowData[col.field] | date: "dd/MM/yyyy HH:mm:ss":"":translateService.currentLang }}\r\n                          </span>\r\n                        </div>\r\n                        <div *ngSwitchDefault>\r\n                          {{ rowData[col.field] }}\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </p-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/xml-data-loading/form/xml-data-loading-form.component.scss':
      /*!*******************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/xml-data-loading/form/xml-data-loading-form.component.scss ***!
  \*******************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .custom-margin {\n  margin-top: 0.5em !important; }\n\n:host .report-name {\n  cursor: pointer;\n  text-decoration: underline;\n  color: blue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb2xsYWJvcmF0aXZlLWNvY2twaXQveG1sLWRhdGEtbG9hZGluZy9mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxjb2xsYWJvcmF0aXZlLWNvY2twaXRcXHhtbC1kYXRhLWxvYWRpbmdcXGZvcm1cXHhtbC1kYXRhLWxvYWRpbmctZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDRCQUE0QixFQUFBOztBQUZoQztFQU1JLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb2xsYWJvcmF0aXZlLWNvY2twaXQveG1sLWRhdGEtbG9hZGluZy9mb3JtL3htbC1kYXRhLWxvYWRpbmctZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuY3VzdG9tLW1hcmdpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJlcG9ydC1uYW1lIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/xml-data-loading/form/xml-data-loading-form.component.ts':
      /*!*****************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/xml-data-loading/form/xml-data-loading-form.component.ts ***!
  \*****************************************************************************************************/
      /*! exports provided: XmlDataLoadingFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'XmlDataLoadingFormComponent',
          function() {
            return XmlDataLoadingFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
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
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _xml_data_loading_form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./xml-data-loading-form.service */ './src/app/main/collaborative-cockpit/xml-data-loading/form/xml-data-loading-form.service.ts'
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

        var XmlDataLoadingFormComponent = /** @class */ (function(_super) {
          __extends(XmlDataLoadingFormComponent, _super);
          function XmlDataLoadingFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            confirmationService,
            translateService,
            xmlDataLoadingFormService
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
            _this.confirmationService = confirmationService;
            _this.translateService = translateService;
            _this.xmlDataLoadingFormService = xmlDataLoadingFormService;
            _this.retryCounter = 0;
            _this.ipcData = '0';
            _this.engineManualData = '1';
            _this.timeBeweenProgressBarUpdate = 2000;
            return _this;
          }
          XmlDataLoadingFormComponent_1 = XmlDataLoadingFormComponent;
          XmlDataLoadingFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
              .COL_XML_DATA_LOADING_FORM;
          };
          XmlDataLoadingFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.init();
          };
          XmlDataLoadingFormComponent.prototype.init = function() {
            // Setting data select buttons
            this.dataList = [
              {
                label: this.translateService.instant(this.getTranslateKey('ipc')),
                value: this.ipcData
              },
              {
                label: this.translateService.instant(this.getTranslateKey('engineManual')),
                value: this.engineManualData
              }
            ];
            this.selectedData = this.ipcData;
            // Setting table columns
            this.reportTableCols = [
              { field: 'familyCode' },
              { field: 'reportCode' },
              { field: 'reportName' },
              { field: 'author' },
              { field: 'statusDate', alignment: 'center' }
            ];
            this.selectedReports = [];
            this.updateStatusBar(false);
          };
          /**********************************
           * On Change Data select button
           **********************************/
          XmlDataLoadingFormComponent.prototype.checkDataControl = function() {
            this.displayEnginePanel = this.selectedData === this.ipcData ? false : true;
            this.updateStatusBar(false);
          };
          /**********************************
           * Import Functionality
           **********************************/
          XmlDataLoadingFormComponent.prototype.import = function() {
            var _this = this;
            if (this.validate()) {
              this.importLoader = true;
              this.importRunning = true;
              var importTaskDto = { wbRevNo: this.wbmRevNum };
              var observable = !this.displayEnginePanel
                ? this.xmlDataLoadingFormService.importIPC(this.currentFile)
                : this.xmlDataLoadingFormService.importTask(this.currentFile, importTaskDto);
              observable
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['finalize'])(function() {
                    _this.updateStatusBar(true);
                  })
                )
                .subscribe();
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('wbmRevNotFilled'));
            }
          };
          XmlDataLoadingFormComponent.prototype.validate = function() {
            return !this.displayEnginePanel || (this.displayEnginePanel && !!this.wbmRevNum);
          };
          XmlDataLoadingFormComponent.prototype.uploadDocument = function(event, fileUploader) {
            this.currentFile = event.files[0];
            this.fileName = this.currentFile.name;
            fileUploader.clear();
          };
          XmlDataLoadingFormComponent.prototype.updateStatusBar = function(reloadWhenEmpty) {
            var _this = this;
            var observable = !this.displayEnginePanel
              ? this.xmlDataLoadingFormService.getImportIpcStatus()
              : this.xmlDataLoadingFormService.getImportTaskStatus();
            observable.subscribe(function(results) {
              _this.importIpcSatuses = [];
              _this.importTasksSatuses = [];
              if (!!results) {
                results.forEach(function(result) {
                  if (!_this.displayEnginePanel) {
                    _this.importIpcSatuses.push(result);
                  } else {
                    _this.importTasksSatuses.push(result);
                    if (!!result.planCodeCharged) {
                      _this.planCodeCharged = result.planCodeCharged;
                    }
                  }
                });
                setTimeout(function() {
                  _this.updateStatusBar(false);
                }, _this.timeBeweenProgressBarUpdate);
              } else if (reloadWhenEmpty) {
                _this.retryCounter++;
                if (_this.retryCounter < XmlDataLoadingFormComponent_1.MAX_RETRY) {
                  setTimeout(function() {
                    _this.updateStatusBar(reloadWhenEmpty);
                  }, _this.timeBeweenProgressBarUpdate);
                } else {
                  _this.pageDefaults();
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOccurred'));
                }
              } else {
                _this.pageDefaults();
              }
            });
          };
          XmlDataLoadingFormComponent.prototype.pageDefaults = function() {
            this.importLoader = false;
            this.importRunning = false;
            this.loadImportReportList();
          };
          XmlDataLoadingFormComponent.prototype.loadImportReportList = function() {
            var _this = this;
            this.reports = [];
            var loadImportReportsInput = {
              reportCode: !this.displayEnginePanel ? 'IPD_IMPORT_REPORT' : 'TASK_IMPORT_REPORT'
            };
            this.xmlDataLoadingFormService.fetchXmlDataLoadingReport(loadImportReportsInput).subscribe(
              function(results) {
                _this.reports = results;
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLoadImportReports'));
              }
            );
          };
          /**********************************
           * On clicking report name
           **********************************/
          XmlDataLoadingFormComponent.prototype.openReportDetail = function(object) {
            var _this = this;
            if (!!object.reportId) {
              var bireReportDTOId = {
                reportId: object.reportId
              };
              this.xmlDataLoadingFormService.openImportReportContent(bireReportDTOId).subscribe(function(result) {
                if (!!object.reportName && object.reportName.includes('.txt')) {
                  _this.downLoadFiles(result, object.reportName);
                } else {
                  _this.downLoadFiles(result, object.reportName + '.txt');
                }
              });
            }
          };
          XmlDataLoadingFormComponent.prototype.downLoadFiles = function(docFile, docName) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_13__['FileUtils'].downloadFile(docFile, docName);
          };
          // Delete
          XmlDataLoadingFormComponent.prototype.deleteReports = function() {
            var _this = this;
            if (this.selectedReports !== []) {
              var partialMessageKey_1 =
                this.selectedReports.length > 1 ? 'confirmDeleteSelectedReports' : 'confirmDeleteSelectedReport';
              var reports_1 = [];
              this.selectedReports.forEach(function(report) {
                if (report && report.reportId) {
                  var reportId = {
                    reportId: report.reportId
                  };
                  reports_1.push(reportId);
                }
              });
              var removeDataInput_1 = {
                bireReportDTOId: reports_1,
                data: ''
              };
              this.confirmationService.confirmDelete({
                messageKey: this.getTranslateKey(partialMessageKey_1),
                accept: function() {
                  _this.xmlDataLoadingFormService.removeDataReportsByReportId(removeDataInput_1).subscribe(
                    function(result) {
                      var messageKey =
                        partialMessageKey_1 === 'confirmDeleteSelectedReports'
                          ? _this.getTranslateKey('successOnDeleteReports')
                          : _this.getTranslateKey('successOnDeleteReport');
                      _this.messageService.showSuccessMessage(messageKey);
                      _this.selectedReports = [];
                      _this.loadImportReportList();
                    },
                    function() {
                      var messageKey =
                        partialMessageKey_1 === 'confirmDeleteSelectedReports'
                          ? _this.getTranslateKey('errorOnDeleteReports')
                          : _this.getTranslateKey('errorOnDeleteReport');
                      _this.messageService.showSuccessMessage(messageKey);
                    }
                  );
                }
              });
            }
          };
          XmlDataLoadingFormComponent.prototype.openMaintenanceProgram = function(objectId, openMode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
                  .ENG_CHANGE_RECORD_FORM,
              openMode: openMode
            };
            if (!!objectId) {
              data.objectId = this.serializationService.serialize(objectId);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          XmlDataLoadingFormComponent.prototype.changeRecord = function() {
            if (!!this.planCodeCharged) {
              this.openMaintenanceProgram(
                this.planCodeCharged,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Read
              );
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('wbmRevNotFilled'));
            }
          };
          var XmlDataLoadingFormComponent_1;
          XmlDataLoadingFormComponent.MAX_RETRY = 3;
          XmlDataLoadingFormComponent = XmlDataLoadingFormComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-xml-data-loading-form',
                template: __webpack_require__(
                  /*! ./xml-data-loading-form.component.html */ './src/app/main/collaborative-cockpit/xml-data-loading/form/xml-data-loading-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./xml-data-loading-form.component.scss */ './src/app/main/collaborative-cockpit/xml-data-loading/form/xml-data-loading-form.component.scss'
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
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__['ConfirmationService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _xml_data_loading_form_service__WEBPACK_IMPORTED_MODULE_14__['XmlDataLoadingFormService']
              ])
            ],
            XmlDataLoadingFormComponent
          );
          return XmlDataLoadingFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_12__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/xml-data-loading/form/xml-data-loading-form.service.ts':
      /*!***************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/xml-data-loading/form/xml-data-loading-form.service.ts ***!
  \***************************************************************************************************/
      /*! exports provided: XmlDataLoadingFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'XmlDataLoadingFormService',
          function() {
            return XmlDataLoadingFormService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_mhiael_import_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/mhiael/import.api */ './src/app/shared/api/mhiael/import.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_mhiael_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-mhiael-http */ './src/app/shared/http/abstract-aw-mhiael-http.ts'
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

        var XmlDataLoadingFormService = /** @class */ (function(_super) {
          __extends(XmlDataLoadingFormService, _super);
          function XmlDataLoadingFormService(http, appConfigService, mhiaelImportApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.mhiaelImportApi = mhiaelImportApi;
            return _this;
          }
          XmlDataLoadingFormService.prototype.importIPC = function(file) {
            return _super.prototype.postFile.call(this, this.mhiaelImportApi.importIPC, file);
          };
          XmlDataLoadingFormService.prototype.importTask = function(file, data) {
            return _super.prototype.postFile.call(this, this.mhiaelImportApi.importTask, file, data);
          };
          XmlDataLoadingFormService.prototype.getImportTaskStatus = function() {
            return _super.prototype.get.call(this, this.mhiaelImportApi.importTaskStatus);
          };
          XmlDataLoadingFormService.prototype.getImportIpcStatus = function() {
            return _super.prototype.get.call(this, this.mhiaelImportApi.importIPCStatus);
          };
          XmlDataLoadingFormService.prototype.removeDataReportsByReportId = function(reports) {
            return _super.prototype.post.call(this, this.mhiaelImportApi.removeDataReportsByReportId, reports);
          };
          XmlDataLoadingFormService.prototype.fetchXmlDataLoadingReport = function(refreshArchivedImportReportInput) {
            return _super.prototype.post.call(
              this,
              this.mhiaelImportApi.fetchXmlDataLoadingReport,
              refreshArchivedImportReportInput
            );
          };
          XmlDataLoadingFormService.prototype.openImportReportContent = function(input) {
            return _super.prototype.post.call(this, this.mhiaelImportApi.findBireReportContentOfBireReport, input);
          };
          XmlDataLoadingFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_mhiael_import_api__WEBPACK_IMPORTED_MODULE_2__['MhiaelImportApi']
              ])
            ],
            XmlDataLoadingFormService
          );
          return XmlDataLoadingFormService;
        })(_shared_http_abstract_aw_mhiael_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwMhiaelHttpService']);

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/xml-data-loading/xml-data-loading.module.ts':
      /*!****************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/xml-data-loading/xml-data-loading.module.ts ***!
  \****************************************************************************************/
      /*! exports provided: XmlDataLoadingModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'XmlDataLoadingModule', function() {
          return XmlDataLoadingModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! primeng/checkbox */ './node_modules/primeng/checkbox.js'
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/fileupload */ './node_modules/primeng/fileupload.js'
        );
        /* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_fileupload__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/progressbar */ './node_modules/primeng/progressbar.js'
        );
        /* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_progressbar__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _form_xml_data_loading_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./form/xml-data-loading-form.component */ './src/app/main/collaborative-cockpit/xml-data-loading/form/xml-data-loading-form.component.ts'
        );
        /* harmony import */ var _form_xml_data_loading_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./form/xml-data-loading-form.service */ './src/app/main/collaborative-cockpit/xml-data-loading/form/xml-data-loading-form.service.ts'
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
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__['TooltipModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4__['SelectButtonModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_5__['TableModule'],
          primeng_fileupload__WEBPACK_IMPORTED_MODULE_2__['FileUploadModule'],
          primeng_progressbar__WEBPACK_IMPORTED_MODULE_3__['ProgressBarModule'],
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_1__['CheckboxModule']
        ];
        var INTERNAL_MODULES = [_shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_10__['TableModule']];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [];
        var DYNAMIC_COMPONENTS = [
          _form_xml_data_loading_form_component__WEBPACK_IMPORTED_MODULE_12__['XmlDataLoadingFormComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [_form_xml_data_loading_form_service__WEBPACK_IMPORTED_MODULE_13__['XmlDataLoadingFormService']];
        var XmlDataLoadingModule = /** @class */ (function() {
          function XmlDataLoadingModule() {}
          XmlDataLoadingModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_7__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_8__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_9__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_11__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            XmlDataLoadingModule
          );
          return XmlDataLoadingModule;
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
//# sourceMappingURL=collaborative-cockpit-xml-data-loading-xml-data-loading-module.js.map
