(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['collaborative-cockpit-collaborative-cockpit-module'],
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

    /***/ './node_modules/primeng/keyfilter.js':
      /*!*******************************************!*\
  !*** ./node_modules/primeng/keyfilter.js ***!
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
            /*! ./components/keyfilter/keyfilter */ './node_modules/primeng/components/keyfilter/keyfilter.js'
          )
        );

        /***/
      },

    /***/ './node_modules/primeng/message.js':
      /*!*****************************************!*\
  !*** ./node_modules/primeng/message.js ***!
  \*****************************************/
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
            /*! ./components/message/message */ './node_modules/primeng/components/message/message.js'
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

    /***/ './node_modules/primeng/radiobutton.js':
      /*!*********************************************!*\
  !*** ./node_modules/primeng/radiobutton.js ***!
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
            /*! ./components/radiobutton/radiobutton */ './node_modules/primeng/components/radiobutton/radiobutton.js'
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

    /***/ './src/app/main/collaborative-cockpit/collaborative-cockpit.module.ts':
      /*!****************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/collaborative-cockpit.module.ts ***!
  \****************************************************************************/
      /*! exports provided: CollaborativeCockpitModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'CollaborativeCockpitModule',
          function() {
            return CollaborativeCockpitModule;
          }
        );
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
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/checkbox */ './node_modules/primeng/checkbox.js'
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/dialog */ './node_modules/primeng/dialog.js'
        );
        /* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dialog__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/fileupload */ './node_modules/primeng/fileupload.js'
        );
        /* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/inputtextarea */ './node_modules/primeng/inputtextarea.js'
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/keyfilter */ './node_modules/primeng/keyfilter.js'
        );
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! primeng/overlaypanel */ './node_modules/primeng/overlaypanel.js'
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! primeng/radiobutton */ './node_modules/primeng/radiobutton.js'
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_10__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_11__
        );
        /* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! primeng/splitbutton */ './node_modules/primeng/splitbutton.js'
        );
        /* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_splitbutton__WEBPACK_IMPORTED_MODULE_12__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_13__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! primeng/treetable */ './node_modules/primeng/treetable.js'
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_treetable__WEBPACK_IMPORTED_MODULE_15__
        );
        /* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! primeng/tristatecheckbox */ './node_modules/primeng/tristatecheckbox.js'
        );
        /* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_16__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_assets_selection_assets_selection_dialog_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../shared/components/dialog-assets-selection/assets-selection-dialog.module */ './src/app/shared/components/dialog-assets-selection/assets-selection-dialog.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../shared/components/dialog-search-customer/dialog-search-customer.module */ './src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_equipment_dialog_search_equipment_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../shared/components/dialog-search-equipment/dialog-search-equipment.module */ './src/app/shared/components/dialog-search-equipment/dialog-search-equipment.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_item_dialog_search_item_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../shared/components/dialog-search-item/dialog-search-item.module */ './src/app/shared/components/dialog-search-item/dialog-search-item.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../shared/components/dialog-table/dialog-table.module */ './src/app/shared/components/dialog-table/dialog-table.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _engineering_data_exchange_search_engineering_data_exchange_search_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./engineering-data-exchange-search/engineering-data-exchange-search.component */ './src/app/main/collaborative-cockpit/engineering-data-exchange-search/engineering-data-exchange-search.component.ts'
        );
        /* harmony import */ var _engineering_data_exchange_search_engineering_data_exchange_search_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ./engineering-data-exchange-search/engineering-data-exchange-search.service */ './src/app/main/collaborative-cockpit/engineering-data-exchange-search/engineering-data-exchange-search.service.ts'
        );
        /* harmony import */ var _engineering_data_exchange_search_import_report_popup_import_report_popup_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ./engineering-data-exchange-search/import-report-popup/import-report-popup.component */ './src/app/main/collaborative-cockpit/engineering-data-exchange-search/import-report-popup/import-report-popup.component.ts'
        );
        /* harmony import */ var _fleet_data_exchange_fleet_data_exchange_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ./fleet-data-exchange/fleet-data-exchange.component */ './src/app/main/collaborative-cockpit/fleet-data-exchange/fleet-data-exchange.component.ts'
        );
        /* harmony import */ var _fleet_data_exchange_fleet_data_exchange_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ./fleet-data-exchange/fleet-data-exchange.service */ './src/app/main/collaborative-cockpit/fleet-data-exchange/fleet-data-exchange.service.ts'
        );
        /* harmony import */ var _flight_data_exchange_flight_data_exchange_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ./flight-data-exchange/flight-data-exchange.component */ './src/app/main/collaborative-cockpit/flight-data-exchange/flight-data-exchange.component.ts'
        );
        /* harmony import */ var _flight_data_exchange_flight_data_exchange_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./flight-data-exchange/flight-data-exchange.service */ './src/app/main/collaborative-cockpit/flight-data-exchange/flight-data-exchange.service.ts'
        );
        /* harmony import */ var _hr_data_exchange_hr_data_exchange_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ./hr-data-exchange/hr-data-exchange.component */ './src/app/main/collaborative-cockpit/hr-data-exchange/hr-data-exchange.component.ts'
        );
        /* harmony import */ var _hr_data_exchange_hr_data_exchange_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! ./hr-data-exchange/hr-data-exchange.service */ './src/app/main/collaborative-cockpit/hr-data-exchange/hr-data-exchange.service.ts'
        );
        /* harmony import */ var _logistic_data_exchange_logistic_data_exchange_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
          /*! ./logistic-data-exchange/logistic-data-exchange.component */ './src/app/main/collaborative-cockpit/logistic-data-exchange/logistic-data-exchange.component.ts'
        );
        /* harmony import */ var _logistic_data_exchange_logistic_data_exchange_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
          /*! ./logistic-data-exchange/logistic-data-exchange.service */ './src/app/main/collaborative-cockpit/logistic-data-exchange/logistic-data-exchange.service.ts'
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

        var PRIMENG_MODULES = [
          primeng_calendar__WEBPACK_IMPORTED_MODULE_2__['CalendarModule'],
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__['CheckboxModule'],
          primeng_dialog__WEBPACK_IMPORTED_MODULE_4__['DialogModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__['DropdownModule'],
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__['InputTextareaModule'],
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_10__['RadioButtonModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_11__['SelectButtonModule'],
          primeng_splitbutton__WEBPACK_IMPORTED_MODULE_12__['SplitButtonModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_13__['TableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__['TooltipModule'],
          primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_16__['TriStateCheckboxModule'],
          primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__['FileUploadModule'],
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_8__['KeyFilterModule'],
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_9__['OverlayPanelModule'],
          primeng_treetable__WEBPACK_IMPORTED_MODULE_15__['TreeTableModule']
        ];
        var COMPONENTS = [
          _engineering_data_exchange_search_import_report_popup_import_report_popup_component__WEBPACK_IMPORTED_MODULE_29__[
            'ImportReportPopupComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [
          _engineering_data_exchange_search_engineering_data_exchange_search_component__WEBPACK_IMPORTED_MODULE_27__[
            'EngineeringDataExchangeSearchComponent'
          ],
          _fleet_data_exchange_fleet_data_exchange_component__WEBPACK_IMPORTED_MODULE_30__[
            'FleetDataExchangeComponent'
          ],
          _flight_data_exchange_flight_data_exchange_component__WEBPACK_IMPORTED_MODULE_32__[
            'FlightDataExchangeComponent'
          ],
          _hr_data_exchange_hr_data_exchange_component__WEBPACK_IMPORTED_MODULE_34__['HrDataExchangeComponent'],
          _logistic_data_exchange_logistic_data_exchange_component__WEBPACK_IMPORTED_MODULE_36__[
            'LogisticDataExchangeComponent'
          ]
        ];
        var SERVICES = [
          _engineering_data_exchange_search_engineering_data_exchange_search_service__WEBPACK_IMPORTED_MODULE_28__[
            'EgineeringDataExchangeSearchService'
          ],
          _fleet_data_exchange_fleet_data_exchange_service__WEBPACK_IMPORTED_MODULE_31__['FleetDataExchangeService'],
          _flight_data_exchange_flight_data_exchange_service__WEBPACK_IMPORTED_MODULE_33__['FlightDataExchangeService'],
          _hr_data_exchange_hr_data_exchange_service__WEBPACK_IMPORTED_MODULE_35__['HrDataExchangeService'],
          _logistic_data_exchange_logistic_data_exchange_service__WEBPACK_IMPORTED_MODULE_37__[
            'LogisticDataExchangeService'
          ]
        ];
        var CollaborativeCockpitModule = /** @class */ (function() {
          function CollaborativeCockpitModule() {}
          CollaborativeCockpitModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_17__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_18__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_19__['AppCommonSharedModule'],
                    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_25__['ModalModule'],
                    _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_21__[
                      'DialogSearchCustomerModule'
                    ],
                    _shared_components_dialog_search_equipment_dialog_search_equipment_module__WEBPACK_IMPORTED_MODULE_22__[
                      'DialogSearchEquipmentModule'
                    ],
                    _shared_components_dialog_search_item_dialog_search_item_module__WEBPACK_IMPORTED_MODULE_23__[
                      'DialogSearchItemModule'
                    ],
                    _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_24__[
                      'DialogTableModule'
                    ],
                    _shared_components_dialog_assets_selection_assets_selection_dialog_module__WEBPACK_IMPORTED_MODULE_20__[
                      'AssetsSelectionDialogModule'
                    ],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_26__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  PRIMENG_MODULES
                ),
                providers: __spread(SERVICES, [_angular_common__WEBPACK_IMPORTED_MODULE_0__['DatePipe']])
              })
            ],
            CollaborativeCockpitModule
          );
          return CollaborativeCockpitModule;
        })();

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/engineering-data-exchange-search/engineering-data-exchange-search.component.html':
      /*!*****************************************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/engineering-data-exchange-search/engineering-data-exchange-search.component.html ***!
  \*****************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle">\r\n        {{ "page.searchPage" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="row">\r\n                <div class="section flex--1">\r\n                  <h4 class="section-title">{{ componentData.componentId + ".type" | translate }}</h4>\r\n                  <div class="section-content">\r\n                    <div class="form-group form-group-select-buton">\r\n                      <label class="form-label"> &nbsp; </label>\r\n\r\n                      <div class="form-control aw-selectbutton-wrapper">\r\n                        <p-selectButton\r\n                          [(ngModel)]="type"\r\n                          [options]="propertyTypeList"\r\n                          (onChange)="onTypeChange($event)"\r\n                        ></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="section flex--1">\r\n                  <h4 class="section-title">{{ componentData.componentId + ".format" | translate }}</h4>\r\n                  <div class="section-content">\r\n                    <div class="form-group form-group-select-buton">\r\n                      <label class="form-label"> &nbsp; </label>\r\n\r\n                      <div class="form-control aw-selectbutton-wrapper">\r\n                        <p-selectButton\r\n                          [(ngModel)]="format"\r\n                          [options]="propertyFormatList"\r\n                          (onChange)="onFormatChange($event)"\r\n                        ></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="section flex--1"></div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <h4 class="section-title">{{ componentData.componentId + ".data" | translate }}</h4>\r\n                <div class="section-content">\r\n                  <div class="form-group form-group-select-buton">\r\n                    <label class="form-label"> &nbsp; </label>\r\n\r\n                    <div class="form-control aw-selectbutton-wrapper">\r\n                      <p-selectButton\r\n                        [(ngModel)]="data"\r\n                        [options]="propertyDataList"\r\n                        (onChange)="setSearchCriteriaVisibility($event)"\r\n                      ></p-selectButton>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section" *ngIf="showSearchCriteria">\r\n                <div class="row">\r\n                  <div class="form-group flex--4" [ngClass]="{ required: true }">\r\n                    <label class="form-label"> {{ componentData.componentId + ".family" | translate }} </label>\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        (onChange)="onFamilyChange($event)"\r\n                        class="aw-dropdown fixed-width"\r\n                        [(ngModel)]="selectedFamily"\r\n                        [options]="familyValues"\r\n                        placeholder="&nbsp;"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--4" [ngClass]="{ required: true }">\r\n                    <label class="form-label"> {{ componentData.componentId + ".variant" | translate }} </label>\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        (onChange)="setImportSectionVisibility($event)"\r\n                        class="aw-dropdown fixed-width"\r\n                        [showClear]="true"\r\n                        [(ngModel)]="selectedVariant"\r\n                        [options]="variantValues"\r\n                        placeholder="&nbsp;"\r\n                      >\r\n                      </p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--4"></div>\r\n                  <div class="form-group flex--4"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row" *ngIf="visibilityImport()">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title" *ngIf="format === EXCEL && data === IPC">\r\n                  {{ componentData.componentId + ".importExcelIpc" | translate }}\r\n                </h3>\r\n\r\n                <h3 class="grid-cell-title" *ngIf="format === EXCEL && data === MAINTENANCE">\r\n                  {{ componentData.componentId + ".importExcelMaintenance" | translate }}\r\n                </h3>\r\n\r\n                <h3 class="grid-cell-title" *ngIf="format === EXCEL && data === LOGISTIC">\r\n                  {{ componentData.componentId + ".importExcelLogistics" | translate }}\r\n                </h3>\r\n\r\n                <h3 class="grid-cell-title" *ngIf="format === EXCEL && data === FEEDBACK">\r\n                  {{ componentData.componentId + ".importExcelExperienceFeedback" | translate }}\r\n                </h3>\r\n\r\n                <h3 class="grid-cell-title" *ngIf="format === EXCEL && data === FUNCTIONAL">\r\n                  {{ componentData.componentId + ".importFunctionalLocations" | translate }}\r\n                </h3>\r\n\r\n                <h3 class="grid-cell-title" *ngIf="format === EXCEL && data === AMG">\r\n                  {{ componentData.componentId + ".importExcelAmg" | translate }}\r\n                </h3>\r\n\r\n                <h3 class="grid-cell-title" *ngIf="format === \'XML\' && data === \'IPC\'">\r\n                  {{ componentData.componentId + ".importXmlIpc" | translate }}\r\n                </h3>\r\n\r\n                <h3 class="grid-cell-title" *ngIf="format === \'XML\' && data === \'Maintenance\'">\r\n                  {{ componentData.componentId + ".importXmlMaintenance" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div *ngIf="validTypeFormatDataCombination()" class="grid-row">\r\n                  <div class="form-group">\r\n                    <span\r\n                      class="form-label"\r\n                      (click)="openTemplate(loadTemplate())"\r\n                      style="cursor: pointer; text-decoration: underline; color: blue; width: min-content"\r\n                    >\r\n                      {{ loadTemplate() }}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf="selectedVariant !== \'\' && showSearchCriteria" class="grid-row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".selectedFamilyVariant" | translate }}:\r\n                      {{ familyAndVariantSelected() }}\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class="grid-row  grid-cell--6">\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".fileToImport" | translate }}</label>\r\n\r\n                    <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n                      <div class="form-control-data">\r\n                        {{ fileName }}\r\n                      </div>\r\n\r\n                      <div class="btn-file-upload-wrapper">\r\n                        <p-fileUpload\r\n                          #fileUploader\r\n                          *ngIf="!isReadOpenMode"\r\n                          class="aw-fileupload"\r\n                          name="document[]"\r\n                          customUpload="true"\r\n                          mode="basic"\r\n                          auto="true"\r\n                          chooseLabel=""\r\n                          (uploadHandler)="uploadDocument($event, fileUploader)"\r\n                          [disabled]="enableImport()"\r\n                        >\r\n                        </p-fileUpload>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- <div class="form-group">\r\n                    <label class="form-label selectedFV">\r\n                      {{ componentData.componentId + ".fileToImport" | translate }}\r\n                    </label>\r\n                    <div style="width: 28rem" class="form-control form-control-with-btn selectedFV" [ngClass]="{ disabled: isReadOpenMode }">\r\n                      <input class="aw-input" type="text" [(ngModel)]="fileName" [disabled]="true" />\r\n\r\n                      <div>\r\n                        <p-fileUpload\r\n                          #fileUploader\r\n                          class="aw-fileupload"\r\n                          name="document"\r\n                          customUpload="true"\r\n                          mode="basic"\r\n                          auto="true"\r\n                          chooseLabel="{{\'global.upload\' | translate}}"\r\n                          (uploadHandler)="uploadDocument($event, fileUploader)"\r\n                          [disabled]="enableImport()"\r\n                        ></p-fileUpload>\r\n                      </div>\r\n                    </div>\r\n                  </div> -->\r\n                </div>\r\n\r\n                <div class="grid-row">\r\n                  <div class="form-group">\r\n                    <label *ngIf="format === \'EXCEL\' && data === \'IPC\'" class="form-label selectedFV">\r\n                      {{ componentData.componentId + ".ipcCheckbox" | translate }}\r\n                    </label>\r\n                    <label *ngIf="format === \'EXCEL\' && data === \'Maintenance\'" class="form-label selectedFV">\r\n                      {{ componentData.componentId + ".maintenanceCheckbox" | translate }}\r\n                    </label>\r\n                    <label *ngIf="format === \'XML\' && data === \'IPC\'" class="form-label selectedFV">\r\n                      {{ componentData.componentId + ".ipcCheckbox" | translate }}\r\n                    </label>\r\n                    <label *ngIf="format === \'XML\' && data === \'Maintenance\'" class="form-label selectedFV">\r\n                      {{ componentData.componentId + ".maintenanceCheckbox" | translate }}\r\n                    </label>\r\n                    <label *ngIf="data === \'Logistics\'" class="form-label selectedFV">\r\n                      {{ componentData.componentId + ".logisticsCheckbox" | translate }}\r\n                    </label>\r\n                    <label *ngIf="data === \'Experience Feedback\'" class="form-label selectedFV">\r\n                      {{ componentData.componentId + ".experienceFeedbackCheckbox" | translate }}\r\n                    </label>\r\n                    <div class="form-control">\r\n                      <p-checkbox\r\n                        *ngIf="format === \'EXCEL\' && data === \'IPC\'"\r\n                        binary="true"\r\n                        class="aw-checkbox"\r\n                        [(ngModel)]="ipcExcelCheckbox"\r\n                        [disabled]=""\r\n                      ></p-checkbox>\r\n                      <p-checkbox\r\n                        *ngIf="format === \'EXCEL\' && data === \'Maintenance\'"\r\n                        binary="true"\r\n                        class="aw-checkbox"\r\n                        [(ngModel)]="maintenanceExcelCheckbox"\r\n                        [disabled]=""\r\n                      ></p-checkbox>\r\n                      <p-checkbox\r\n                        *ngIf="format === \'XML\' && data === \'IPC\'"\r\n                        binary="true"\r\n                        class="aw-checkbox"\r\n                        [(ngModel)]="ipcXmlCheckbox"\r\n                        [disabled]=""\r\n                      ></p-checkbox>\r\n                      <p-checkbox\r\n                        *ngIf="format === \'XML\' && data === \'Maintenance\'"\r\n                        binary="true"\r\n                        class="aw-checkbox"\r\n                        [(ngModel)]="maintenanceXmlCheckbox"\r\n                        [disabled]=""\r\n                      ></p-checkbox>\r\n                      <p-checkbox\r\n                        *ngIf="data === \'Logistics\'"\r\n                        binary="true"\r\n                        class="aw-checkbox"\r\n                        [(ngModel)]="logisticsCheckbox"\r\n                        [disabled]=""\r\n                      ></p-checkbox>\r\n                      <p-checkbox\r\n                        *ngIf="data === \'Experience Feedback\'"\r\n                        binary="true"\r\n                        class="aw-checkbox"\r\n                        [(ngModel)]="experienceFeedbackCheckbox"\r\n                        [disabled]=""\r\n                      ></p-checkbox>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div *ngIf="format !== \'\'" class="grid-row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <button\r\n                      *ngIf="format === \'XML\'"\r\n                      type="button"\r\n                      class="btn-with-spinner"\r\n                      mat-raised-button\r\n                      (click)="simulate()"\r\n                    >\r\n                      <span class="lds-hourglass" *ngIf="showSimulateSpinner"></span>\r\n                      {{ componentData.componentId + ".simulateFile" | translate }}\r\n                    </button>\r\n\r\n                    &nbsp;&nbsp;&nbsp;\r\n\r\n                    <button type="button" mat-raised-button class="btn-with-spinner" (click)="import()">\r\n                      <span class="lds-hourglass" *ngIf="showSpinner"></span>\r\n                      {{ componentData.componentId + ".importFile" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row" *ngIf="visibilityImport()">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainer class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ componentData.componentId + ".importReportList" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                [resizableColumns]="true"\r\n                #ptable\r\n                class="aw-table2"\r\n                [columns]="reportTableCols"\r\n                [value]="importReport"\r\n                [(selection)]="selectedReports"\r\n                [scrollable]="true"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n                  <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedReports.length > 0 }">\r\n                    <div class="aw-table-global-filter">\r\n                      <label class="aw-table-global-filter-label">\r\n                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableGlobalFilter\r\n                        class="aw-table-global-filter-input"\r\n                        type="text"\r\n                        placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                        (input)="ptable.filterGlobal($event.target.value, \'contains\')"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class="aw-table-actions">\r\n                      <div class="aw-btn-group aw-table-actions">\r\n                        <button\r\n                          *ngIf="hasManageAccessRight && selectedReports.length > 0"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          color="warn"\r\n                          (click)="deleteReports()"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col class="aw-table-checkbox-wrapper" />\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th class="aw-table-checkbox-wrapper">\r\n                      <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ componentData.componentId + "." + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td class="aw-table-checkbox-wrapper">\r\n                      <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td\r\n                      style="overflow: hidden; text-overflow: ellipsis;"\r\n                      *ngFor="let col of columns"\r\n                      [ngSwitch]="col.field"\r\n                      [ngStyle]="{ \'text-align\': col.alignment }"\r\n                    >\r\n                      <div *ngSwitchCase="\'reportName\'">\r\n                        <span\r\n                          (click)="openReportDetail(rowData)"\r\n                          style="cursor: pointer; text-decoration: underline; color: blue"\r\n                        >\r\n                          {{ rowData[col.field] }}\r\n                        </span>\r\n                      </div>\r\n                      <div *ngSwitchCase="\'familyCode\'">\r\n                        <span> {{ rowData.labelValueDTO.label }} </span>\r\n                      </div>\r\n                      <div *ngSwitchCase="\'statusDate\'">\r\n                        <span>\r\n                          {{ rowData[col.field] | date: "yyyy/MM/dd HH:mm":"":translateService.currentLang }}\r\n                        </span>\r\n                      </div>\r\n                      <div *ngSwitchDefault>{{ rowData[col.field] }}</div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- For Type Export > Excel > IPC -->\r\n      <div class="grid-row" *ngIf="visibilityExportExcelIpc()">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainer class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header" *ngIf="selectedVariant !== \'\'">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ componentData.componentId + ".exportIPC" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n            <div *ngIf="selectedVariant !== \'\'" class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="grid-row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <div class="form-control">\r\n                      <button type="button" class="btn-with-spinner" mat-raised-button (click)="exportExcelIpc()">\r\n                        <span class="lds-hourglass" *ngIf="showSpinner"></span>\r\n                        {{ componentData.componentId + ".export" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- For Type Export > Excel > Maintenance -->\r\n      <div class="grid-row" *ngIf="visibilityExportExcelMaintenance()">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainer class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header" *ngIf="selectedVariant !== \'\'">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ componentData.componentId + ".maintenanceData" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n            <div *ngIf="selectedVariant !== \'\'" class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="grid-row">\r\n                  <div class="form-group flex--4">\r\n                    <label class="form-label"> {{ componentData.componentId + ".taskGroup" | translate }} </label>\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [(ngModel)]="selectedTaskGroup"\r\n                        [options]="taskGroups"\r\n                        [showClear]="true"\r\n                        placeholder="&nbsp;"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group flex--4"></div>\r\n                  <div class="form-group flex--4"></div>\r\n                  <div class="form-group flex--4"></div>\r\n                </div>\r\n                <div class="grid-row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <div class="form-control">\r\n                      <button\r\n                        type="button"\r\n                        class="btn-with-spinner"\r\n                        mat-raised-button\r\n                        (click)="exportMaintenanceExcel()"\r\n                      >\r\n                        <span class="lds-hourglass" *ngIf="showSpinner"></span>\r\n                        {{ componentData.componentId + ".export" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- For Type Export > XML > IPC -->\r\n      <div class="grid-row" *ngIf="visibilityExportXmlIpc()">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainer class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header" *ngIf="selectedVariant !== \'\'">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ componentData.componentId + ".exportIPC" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n            <div *ngIf="selectedVariant !== \'\'" class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="grid-row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".selectedFamilyVariant" | translate }}:\r\n                      {{ familyAndVariantSelected() }}\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class="grid-row">\r\n                  <div class="grid-cell--3">\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".identifyRevision" | translate }}:\r\n                      </label>\r\n                      <div class="form-control">\r\n                        <p-calendar\r\n                          showButtonBar="true"\r\n                          [monthNavigator]="true"\r\n                          [yearNavigator]="true"\r\n                          [yearRange]="sessionService.calendarYearRange"\r\n                          class="aw-calendar"\r\n                          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                          [locale]="sessionService.calendarFormat"\r\n                          [(ngModel)]="ipcExportData.lastPublicationDate"\r\n                          appendTo="body"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="grid-row">\r\n                  <div class="grid-cell--12">\r\n                    <div class="grid-cell grid-cell--container">\r\n                      <div class="grid-cell-content grid-cell-content-with-section">\r\n                        <div class="section">\r\n                          <h4 class="section-title">\r\n                            {{ componentData.componentId + ".selectExportData" | translate }}\r\n                          </h4>\r\n                          <div class="section-content">\r\n                            <div class="form-group">\r\n                              <label class="form-label">\r\n                                {{ componentData.componentId + ".ipcStructureCheckbox" | translate }}\r\n                              </label>\r\n\r\n                              <div class="form-control">\r\n                                <p-checkbox\r\n                                  binary="true"\r\n                                  class="aw-checkbox general-type-checkbox"\r\n                                  [(ngModel)]="ipcExportData.withFamilyVariant"\r\n                                ></p-checkbox>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="section">\r\n                          <h4 class="section-title">{{ componentData.componentId + ".itemFilter" | translate }}</h4>\r\n                          <div class="section-content">\r\n                            <div class="column">\r\n                              <!-- Item -->\r\n                              <div class="row">\r\n                                <div class="form-group flex--3">\r\n                                  <!-- <label class="form-label">{{ getComponentName() + ".itemGroup" | translate }}</label> -->\r\n\r\n                                  <div class="form-control form-control-with-modal">\r\n                                    <div class="form-control-data" (click)="openItemTableDialog()">\r\n                                      {{ ipcExportData.chapter }}\r\n                                      <span *ngIf="ipcExportData.section"> - {{ ipcExportData.section }}</span>\r\n                                      <span *ngIf="ipcExportData.subject"> - {{ ipcExportData.subject }}</span>\r\n                                      <span *ngIf="ipcExportData.sheet"> - {{ ipcExportData.sheet }}</span>\r\n                                      <span *ngIf="ipcExportData.mark"> - {{ ipcExportData.mark }}</span>\r\n                                    </div>\r\n\r\n                                    <div\r\n                                      *ngIf="\r\n                                        ipcExportData.chapter &&\r\n                                        ipcExportData.section &&\r\n                                        ipcExportData.subject &&\r\n                                        ipcExportData.sheet &&\r\n                                        ipcExportData.mark\r\n                                      "\r\n                                      class="btn-clear-wrapper"\r\n                                    >\r\n                                      <i\r\n                                        class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                                        aria-hidden="true"\r\n                                        (click)="\r\n                                          ipcExportData.chapter = undefined;\r\n                                          ipcExportData.section = undefined;\r\n                                          ipcExportData.subject = undefined;\r\n                                          ipcExportData.sheet = undefined;\r\n                                          ipcExportData.mark = undefined;\r\n                                          ipcExportData.versionNumber = undefined\r\n                                        "\r\n                                      ></i>\r\n                                    </div>\r\n                                    <div class="btn-search-wrapper">\r\n                                      <i\r\n                                        class="fa fa-fw fa-search aw-icon btn-search"\r\n                                        aria-hidden="true"\r\n                                        (click)="openItemTableDialog()"\r\n                                      ></i>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class="form-group flex--3"></div>\r\n                                <div class="form-group flex--3"></div>\r\n                              </div>\r\n\r\n                              <!-- Checkbox -->\r\n                              <div class="row">\r\n                                <div class="form-group flex--4">\r\n                                  <label class="form-label">{{\r\n                                    componentData.componentId + ".part" | translate\r\n                                  }}</label>\r\n                                  <div class="form-control">\r\n                                    <p-checkbox class="aw-checkbox" binary="true" [(ngModel)]="ipcExportData.withPn">\r\n                                    </p-checkbox>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class="form-group flex--4">\r\n                                  <label class="form-label">{{\r\n                                    componentData.componentId + ".refMgmt" | translate\r\n                                  }}</label>\r\n                                  <div class="form-control">\r\n                                    <p-checkbox\r\n                                      class="aw-checkbox"\r\n                                      binary="true"\r\n                                      [(ngModel)]="ipcExportData.withMeasureReference"\r\n                                    ></p-checkbox>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class="form-group flex--4">\r\n                                  <label class="form-label">{{\r\n                                    componentData.componentId + ".measureUnit" | translate\r\n                                  }}</label>\r\n                                  <div class="form-control">\r\n                                    <p-checkbox\r\n                                      class="aw-checkbox"\r\n                                      binary="true"\r\n                                      [(ngModel)]="ipcExportData.withUnitMeasure"\r\n                                    ></p-checkbox>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class="form-group flex--4"></div>\r\n                              </div>\r\n\r\n                              <div class="row">\r\n                                <div class="form-group flex--4">\r\n                                  <label class="form-label">{{\r\n                                    componentData.componentId + ".evolution" | translate\r\n                                  }}</label>\r\n                                  <div class="form-control">\r\n                                    <p-checkbox\r\n                                      class="aw-checkbox"\r\n                                      binary="true"\r\n                                      [(ngModel)]="ipcExportData.withEvolution"\r\n                                    ></p-checkbox>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class="form-group flex--4">\r\n                                  <label class="form-label">{{\r\n                                    componentData.componentId + ".sbad" | translate\r\n                                  }}</label>\r\n                                  <div class="form-control">\r\n                                    <p-checkbox class="aw-checkbox" binary="true" [(ngModel)]="ipcExportData.withSb">\r\n                                    </p-checkbox>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class="form-group flex--4">\r\n                                  <label class="form-label">{{\r\n                                    componentData.componentId + ".modification" | translate\r\n                                  }}</label>\r\n                                  <div class="form-control">\r\n                                    <p-checkbox\r\n                                      class="aw-checkbox"\r\n                                      binary="true"\r\n                                      [(ngModel)]="ipcExportData.withModification"\r\n                                    ></p-checkbox>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class="form-group flex--4"></div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <!-- <div class="section">\r\n                          <h4 class="section-title">\r\n                            {{ componentData.componentId + ".selectExportData" | translate }}\r\n                          </h4>\r\n\r\n                          <div class="section-content">\r\n                            <div class="column">\r\n                              <div class="grid-row">\r\n                                <div class="form-group">\r\n                                  <label class="form-label">\r\n                                    {{ componentData.componentId + ".ipcStructureCheckbox" | translate }}\r\n                                  </label>\r\n\r\n                                  <div class="form-control">\r\n                                    <p-checkbox\r\n                                      binary="true"\r\n                                      class="aw-checkbox general-type-checkbox"\r\n                                      [(ngModel)]="ipcExportData.withFamilyVariant"\r\n                                    ></p-checkbox>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class="grid-row">\r\n                                <div class="section">\r\n                                <div class="section-title-wrapper">\r\n                                  <h4 class="section-title">\r\n                                    {{ componentData.componentId + ".itemFilter" | translate }}\r\n                                  </h4>\r\n                                </div>\r\n\r\n                                <div class="section-content">\r\n                                  <div class="column">\r\n                                    <div class="grid-row">\r\n                                      <div class="form-group">\r\n                                        <div class="grid-cell--3">\r\n                                          <label class="form-label">\r\n                                            {{ componentData.componentId + ".selectCode" | translate }}\r\n                                          </label>\r\n                                          <div class="form-control">\r\n                                            <p-dropdown\r\n                                              class="aw-dropdown fixed-width"\r\n                                              [showClear]="true"\r\n                                              [options]="ataCodes"\r\n                                              [(ngModel)]="selectedATACode"\r\n                                              placeholder="&nbsp;"\r\n                                              (onChange)="setATACodeComponents($event)"\r\n                                            ></p-dropdown>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class="grid-row">\r\n                                      <div class="form-group">\r\n                                        <label class="form-label">\r\n                                          {{ componentData.componentId + ".searchCode" | translate }}\r\n                                        </label>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class="grid-row">\r\n                                      <div class="grid-cell--2">\r\n                                        <div class="form-group">\r\n                                          <div class="form-control" style="display: inherit">\r\n                                            <input\r\n                                              type="text"\r\n                                              class="aw-input minus-input"\r\n                                              [(ngModel)]="ipcExportData.chapter"\r\n                                            />\r\n                                            <h2>-</h2>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class="grid-cell--2">\r\n                                        <div class="form-group">\r\n                                          <div class="form-control" style="display: inherit">\r\n                                            <input\r\n                                              type="text"\r\n                                              class="aw-input minus-input"\r\n                                              [(ngModel)]="ipcExportData.section"\r\n                                            />\r\n                                            <h2>-</h2>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class="grid-cell--2">\r\n                                        <div class="form-group">\r\n                                          <div class="form-control" style="display: inherit">\r\n                                            <input\r\n                                              type="text"\r\n                                              class="aw-input minus-input"\r\n                                              [(ngModel)]="ipcExportData.subject"\r\n                                            />\r\n                                            <h2>-</h2>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class="grid-cell--2">\r\n                                        <div class="form-group">\r\n                                          <div class="form-control" style="display: inherit">\r\n                                            <input\r\n                                              type="text"\r\n                                              class="aw-input minus-input"\r\n                                              [(ngModel)]="ipcExportData.sheet"\r\n                                            />\r\n                                            <h2>-</h2>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class="grid-cell--2">\r\n                                        <div class="form-group">\r\n                                          <div\r\n                                            class="form-control form-control-with-btn"\r\n                                            style="display: inherit"\r\n                                            [ngClass]="{ disabled: isReadOpenMode }"\r\n                                          >\r\n                                            <input\r\n                                              type="text"\r\n                                              class="aw-input minus-input"\r\n                                              [(ngModel)]="ipcExportData.mark"\r\n                                            />\r\n                                            <i\r\n                                              class="fa fa-fw fa-search aw-icon"\r\n                                              aria-hidden="true"\r\n                                              pTooltip="{{ \'global.search\' | translate }}"\r\n                                              tooltipPosition="top"\r\n                                              (click)="openItemTableDialog()"\r\n                                            ></i>\r\n                                            &nbsp;\r\n                                            <i\r\n                                              class="fa fa-fw fa-undo aw-icon"\r\n                                              aria-hidden="true"\r\n                                              pTooltip="{{ \'global.reset\' | translate }}"\r\n                                              tooltipPosition="top"\r\n                                              (click)="resetATAData()"\r\n                                            ></i>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class="grid-row">\r\n                                      <div class="grid-cell--3">\r\n                                        <div class="form-group">\r\n                                          <label class="form-label">{{\r\n                                            componentData.componentId + ".part" | translate\r\n                                          }}</label>\r\n                                          <div class="form-control">\r\n                                            <p-checkbox\r\n                                              class="aw-checkbox"\r\n                                              binary="true"\r\n                                              [(ngModel)]="ipcExportData.withPn"\r\n                                            ></p-checkbox>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n\r\n                                    <div class="grid-row">\r\n                                      <div class="grid-cell--3">\r\n                                        <div class="form-group">\r\n                                          <label class="form-label">{{\r\n                                            componentData.componentId + ".evolution" | translate\r\n                                          }}</label>\r\n                                          <div class="form-control">\r\n                                            <p-checkbox\r\n                                              class="aw-checkbox"\r\n                                              binary="true"\r\n                                              [(ngModel)]="ipcExportData.withEvolution"\r\n                                            ></p-checkbox>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class="grid-cell--3">\r\n                                        <div class="form-group">\r\n                                          <label class="form-label">{{\r\n                                            componentData.componentId + ".refMgmt" | translate\r\n                                          }}</label>\r\n                                          <div class="form-control">\r\n                                            <p-checkbox\r\n                                              class="aw-checkbox"\r\n                                              binary="true"\r\n                                              [(ngModel)]="ipcExportData.withMeasureReference"\r\n                                            ></p-checkbox>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class="grid-cell--3">\r\n                                        <div class="form-group">\r\n                                          <label class="form-label">{{\r\n                                            componentData.componentId + ".sbad" | translate\r\n                                          }}</label>\r\n                                          <div class="form-control">\r\n                                            <p-checkbox\r\n                                              class="aw-checkbox"\r\n                                              binary="true"\r\n                                              [(ngModel)]="ipcExportData.withSb"\r\n                                            ></p-checkbox>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n\r\n                                    <div class="grid-row">\r\n                                      <div class="grid-cell--3">\r\n                                        <div class="form-group">\r\n                                          <label class="form-label">{{\r\n                                            componentData.componentId + ".modification" | translate\r\n                                          }}</label>\r\n                                          <div class="form-control">\r\n                                            <p-checkbox\r\n                                              class="aw-checkbox"\r\n                                              binary="true"\r\n                                              [(ngModel)]="ipcExportData.withModification"\r\n                                            ></p-checkbox>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class="grid-cell--3">\r\n                                        <div class="form-group">\r\n                                          <label class="form-label">{{\r\n                                            componentData.componentId + ".measureUnit" | translate\r\n                                          }}</label>\r\n                                          <div class="form-control">\r\n                                            <p-checkbox\r\n                                              class="aw-checkbox"\r\n                                              binary="true"\r\n                                              [(ngModel)]="ipcExportData.withUnitMeasure"\r\n                                            ></p-checkbox>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        </div> -->\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <div class="form-control">\r\n                      <button type="button" class="btn-with-spinner" mat-raised-button (click)="exportIPC()">\r\n                        <span class="lds-hourglass" *ngIf="showSpinner"></span>\r\n                        {{ componentData.componentId + ".export" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- For Type Export > XML > Maintenance -->\r\n      <div class="grid-row" *ngIf="visibilityExportXmlMaintenance()">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainer class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header" *ngIf="selectedVariant !== \'\'">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ componentData.componentId + ".maintenanceData" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n            <div *ngIf="selectedVariant !== \'\'" class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="grid-row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".selectedfamilyAndVariant" | translate }}:\r\n                      {{ familyAndVariantSelected() }}\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-row">\r\n                  <div class="grid-cell--12">\r\n                    <div class="grid-cell grid-cell--container">\r\n                      <div class="grid-cell-header">\r\n                        <div class="grid-cell-title-container">\r\n                          <h3 class="grid-cell-title">{{ componentData.componentId + ".dataToExport" | translate }}</h3>\r\n                        </div>\r\n                      </div>\r\n                      <div class="grid-cell-content grid-cell-content-with-section">\r\n                        <div class="section">\r\n                          <h4 class="section-title">{{ componentData.componentId + ".taskData" | translate }}</h4>\r\n\r\n                          <div class="section-content">\r\n                            <div class="grid-row">\r\n                              <div class="form-group">\r\n                                <label class="form-label">{{\r\n                                  componentData.componentId + ".shopManual" | translate\r\n                                }}</label>\r\n                                <div class="form-control">\r\n                                  <p-checkbox\r\n                                    class="aw-checkbox"\r\n                                    binary="true"\r\n                                    [(ngModel)]="maintenanceExportData.withShopManual"\r\n                                  ></p-checkbox>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">{{ componentData.componentId + ".range" | translate }}</label>\r\n                                <div class="form-control">\r\n                                  <p-checkbox\r\n                                    class="aw-checkbox"\r\n                                    binary="true"\r\n                                    [(ngModel)]="maintenanceExportData.withRange"\r\n                                  ></p-checkbox>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">{{\r\n                                  componentData.componentId + ".taskStructure" | translate\r\n                                }}</label>\r\n                                <div class="form-control">\r\n                                  <p-checkbox\r\n                                    class="aw-checkbox"\r\n                                    binary="true"\r\n                                    [(ngModel)]="maintenanceExportData.withTaskStructure"\r\n                                  ></p-checkbox>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">{{\r\n                                  componentData.componentId + ".taskGroup" | translate\r\n                                }}</label>\r\n                                <div class="form-control">\r\n                                  <p-checkbox\r\n                                    class="aw-checkbox"\r\n                                    binary="true"\r\n                                    [(ngModel)]="maintenanceExportData.withTaskGroup"\r\n                                  ></p-checkbox>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">{{\r\n                                  componentData.componentId + ".maintainProg" | translate\r\n                                }}</label>\r\n                                <div class="form-control">\r\n                                  <p-checkbox\r\n                                    class="aw-checkbox"\r\n                                    binary="true"\r\n                                    [(ngModel)]="maintenanceExportData.withMaintenancePlan"\r\n                                  ></p-checkbox>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class="section">\r\n                          <h4 class="section-title">{{ componentData.componentId + ".catalogData" | translate }}</h4>\r\n\r\n                          <div class="section-content">\r\n                            <div class="grid-row">\r\n                              <div class="form-group">\r\n                                <label class="form-label">{{\r\n                                  componentData.componentId + ".qualification" | translate\r\n                                }}</label>\r\n                                <div class="form-control">\r\n                                  <p-checkbox\r\n                                    class="aw-checkbox"\r\n                                    binary="true"\r\n                                    [(ngModel)]="maintenanceExportData.withQualification"\r\n                                  ></p-checkbox>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">{{\r\n                                  componentData.componentId + ".techIntervLevel" | translate\r\n                                }}</label>\r\n                                <div class="form-control">\r\n                                  <p-checkbox\r\n                                    class="aw-checkbox"\r\n                                    binary="true"\r\n                                    [(ngModel)]="maintenanceExportData.withTechnicalLevel"\r\n                                  ></p-checkbox>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">{{\r\n                                  componentData.componentId + ".damage" | translate\r\n                                }}</label>\r\n                                <div class="form-control">\r\n                                  <p-checkbox\r\n                                    class="aw-checkbox"\r\n                                    binary="true"\r\n                                    [(ngModel)]="maintenanceExportData.withDamage"\r\n                                  ></p-checkbox>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">{{\r\n                                  componentData.componentId + ".localisation" | translate\r\n                                }}</label>\r\n                                <div class="form-control">\r\n                                  <p-checkbox\r\n                                    class="aw-checkbox"\r\n                                    binary="true"\r\n                                    label=""\r\n                                    [(ngModel)]="maintenanceExportData.withLocalisation"\r\n                                  ></p-checkbox>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">{{\r\n                                  componentData.componentId + ".consumable" | translate\r\n                                }}</label>\r\n                                <div class="form-control">\r\n                                  <p-checkbox\r\n                                    class="aw-checkbox"\r\n                                    binary="true"\r\n                                    [(ngModel)]="maintenanceExportData.withComponent"\r\n                                  ></p-checkbox>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="grid-row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <div class="form-control">\r\n                      <button\r\n                        type="button"\r\n                        class="btn-with-spinner"\r\n                        mat-raised-button\r\n                        class="search"\r\n                        (click)="exportMaintenance()"\r\n                      >\r\n                        <span class="lds-hourglass" *ngIf="showSpinner"></span>\r\n                        <span>{{ componentData.componentId + ".export" | translate }}</span>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- For Type Export > XML > EIPC -->\r\n      <div class="grid-row" *ngIf="visibilityExportXmlEipc()">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainer class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header" *ngIf="selectedVariant !== \'\'">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ componentData.componentId + ".eipcData" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n            <div *ngIf="selectedVariant !== \'\'" class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="grid-row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".selectedfamilyAndVariant" | translate }}:\r\n                      {{ familyAndVariantSelected() }}\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class="grid-row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <div class="form-control">\r\n                      <button\r\n                        type="button"\r\n                        class="btn-with-spinner"\r\n                        mat-raised-button\r\n                        class="search"\r\n                        (click)="exportEIPC()"\r\n                      >\r\n                        <span class="lds-hourglass" *ngIf="showSpinner"></span>\r\n                        <span>{{ componentData.componentId + ".export" | translate }}</span>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <aw-import-report-popup\r\n        *ngIf="showImportReportMessage"\r\n        [importReportMessage]="importReportMessage"\r\n        [(display)]="showImportReportMessage"\r\n      ></aw-import-report-popup>\r\n\r\n      <aw-dialog-search-item\r\n        *ngIf="showItemTableDialog"\r\n        [(display)]="showItemTableDialog"\r\n        (onValidated)="onSelectedItem($event)"\r\n      ></aw-dialog-search-item>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/engineering-data-exchange-search/engineering-data-exchange-search.component.scss':
      /*!*****************************************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/engineering-data-exchange-search/engineering-data-exchange-search.component.scss ***!
  \*****************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host {\n  /*.criteria-checkboxes,\r\n  .form-group {\r\n    margin-right: 20px;\r\n    max-width: 15rem;\r\n    min-width: 10rem;\r\n    width: 20%;\r\n\r\n    &:last-of-type {\r\n      margin-right: 0;\r\n    }\r\n  }\r\n\r\n  .minus-input {\r\n    margin-right: 2px;\r\n    max-width: 4rem;\r\n    min-width: 1rem;\r\n    width: 20%;\r\n  }\r\n\r\n  .plus-input {\r\n    margin-right: 20px;\r\n    max-width: 35rem;\r\n    min-width: 25rem;\r\n    width: 20%;\r\n  }\r\n\r\n  .search-criteria-primary {\r\n    justify-content: flex-start;\r\n\r\n    .criteria-checkboxes {\r\n      display: flex;\r\n      flex-direction: column;\r\n\r\n      p-checkbox:first-of-type {\r\n        margin-top: 30px;\r\n      }\r\n\r\n      p-checkbox:nth-of-type(2) {\r\n        margin-top: 5px;\r\n      }\r\n    }\r\n  }*/ }\n  :host .form-group-select-buton {\n    margin-top: 0 !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb2xsYWJvcmF0aXZlLWNvY2twaXQvZW5naW5lZXJpbmctZGF0YS1leGNoYW5nZS1zZWFyY2gvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGNvbGxhYm9yYXRpdmUtY29ja3BpdFxcZW5naW5lZXJpbmctZGF0YS1leGNoYW5nZS1zZWFyY2hcXGVuZ2luZWVyaW5nLWRhdGEtZXhjaGFuZ2Utc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbGxhYm9yYXRpdmUtY29ja3BpdC9lbmdpbmVlcmluZy1kYXRhLWV4Y2hhbmdlLXNlYXJjaC9lbmdpbmVlcmluZy1kYXRhLWV4Y2hhbmdlLXNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3lDRSxFREFDO0VBMUNMO0lBNkNJLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb2xsYWJvcmF0aXZlLWNvY2twaXQvZW5naW5lZXJpbmctZGF0YS1leGNoYW5nZS1zZWFyY2gvZW5naW5lZXJpbmctZGF0YS1leGNoYW5nZS1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLyouY3JpdGVyaWEtY2hlY2tib3hlcyxcclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDE1cmVtO1xyXG4gICAgbWluLXdpZHRoOiAxMHJlbTtcclxuICAgIHdpZHRoOiAyMCU7XHJcblxyXG4gICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWludXMtaW5wdXQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICBtYXgtd2lkdGg6IDRyZW07XHJcbiAgICBtaW4td2lkdGg6IDFyZW07XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuXHJcbiAgLnBsdXMtaW5wdXQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzNXJlbTtcclxuICAgIG1pbi13aWR0aDogMjVyZW07XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1wcmltYXJ5IHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAuY3JpdGVyaWEtY2hlY2tib3hlcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICBwLWNoZWNrYm94OmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAtY2hlY2tib3g6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0qL1xyXG5cclxuICAuZm9ybS1ncm91cC1zZWxlY3QtYnV0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIC8qLmNyaXRlcmlhLWNoZWNrYm94ZXMsXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcclxuICAgIG1pbi13aWR0aDogMTByZW07XHJcbiAgICB3aWR0aDogMjAlO1xyXG5cclxuICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1pbnVzLWlucHV0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgbWF4LXdpZHRoOiA0cmVtO1xyXG4gICAgbWluLXdpZHRoOiAxcmVtO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcblxyXG4gIC5wbHVzLWlucHV0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1heC13aWR0aDogMzVyZW07XHJcbiAgICBtaW4td2lkdGg6IDI1cmVtO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtY3JpdGVyaWEtcHJpbWFyeSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgLmNyaXRlcmlhLWNoZWNrYm94ZXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgcC1jaGVja2JveDpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwLWNoZWNrYm94Om50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9Ki8gfVxuICA6aG9zdCAuZm9ybS1ncm91cC1zZWxlY3QtYnV0b24ge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDsgfVxuIl19 */';

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/engineering-data-exchange-search/engineering-data-exchange-search.component.ts':
      /*!***************************************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/engineering-data-exchange-search/engineering-data-exchange-search.component.ts ***!
  \***************************************************************************************************************************/
      /*! exports provided: EngineeringDataExchangeSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'EngineeringDataExchangeSearchComponent',
          function() {
            return EngineeringDataExchangeSearchComponent;
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
        /* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/enums/table-column-filter-mode.enum */ './src/app/shared/enums/table-column-filter-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/enums/table-selection-mode.enum */ './src/app/shared/enums/table-selection-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _engineering_data_exchange_search_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./engineering-data-exchange-search.service */ './src/app/main/collaborative-cockpit/engineering-data-exchange-search/engineering-data-exchange-search.service.ts'
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

        var EngineeringDataExchangeSearchComponent = /** @class */ (function(_super) {
          __extends(EngineeringDataExchangeSearchComponent, _super);
          function EngineeringDataExchangeSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            translateService,
            confirmationService,
            engineeringDataExchangeSearchService,
            datepipe,
            propertiesService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.sessionService = sessionService;
            _this.translateService = translateService;
            _this.confirmationService = confirmationService;
            _this.engineeringDataExchangeSearchService = engineeringDataExchangeSearchService;
            _this.datepipe = datepipe;
            _this.propertiesService = propertiesService;
            _this.EXPORT = 'Export';
            _this.LOADING = 'Loading';
            _this.EXCEL = 'EXCEL';
            _this.XML = 'XML';
            _this.IPC = 'IPC';
            _this.MAINTENANCE = 'Maintenance';
            _this.LOGISTIC = 'Logistics';
            _this.FEEDBACK = 'Experience Feedback';
            _this.FUNCTIONAL = 'Functional locations';
            _this.EIPC = 'EIPC - Detailed Parts List';
            _this.AMG = 'Guidelines';
            _this.searchObject = {};
            _this.familyValues = [];
            _this.variantValues = [];
            _this.familyCode = '';
            _this.variantCode = '';
            _this.structureType = '';
            _this.familyName = '';
            _this.variantName = '';
            _this.propertyVariant = [];
            _this.propertyDataExportXml = [];
            _this.propertyDataExportExcel = [];
            _this.propertyDataLoadingExcel = [];
            _this.propertyDataLoadingXml = [];
            _this.propertyDataList = [];
            _this.propertyTypeList = [];
            _this.propertyFormatList = [];
            _this.taskGroups = [];
            _this.selectedTaskGroup = '';
            _this.selectedReports = [];
            _this.showSpinner = false;
            _this.showSimulateSpinner = false;
            _this.ataCodes = [];
            _this.ataData = [];
            _this.selectedATACode = '';
            _this.ipcExcelCheckbox = false;
            _this.maintenanceExcelCheckbox = false;
            _this.ipcXmlCheckbox = false;
            _this.maintenanceXmlCheckbox = false;
            _this.logisticsCheckbox = false;
            _this.experienceFeedbackCheckbox = false;
            _this.amgExcelCheckbox = false;
            _this.showSearchCriteria = false;
            _this.showImportPanel = false;
            _this.showImportReportList = false;
            _this.showImportDataPanel = false;
            _this.showExportIPCPanel = false;
            _this.showExportIPCPanelExcel = false;
            _this.showExportMaintenancePanel = false;
            _this.showExportEIPCPanel = false;
            _this.file = undefined;
            _this.fileName = '';
            _this.importReportMessage = '';
            _this.showImportReportMessage = false;
            _this.ipcExportData = {};
            _this.ipcExportData.withFamilyVariant = true;
            _this.maintenanceExportData = {};
            _this.eipcExportData = {};
            _this.keyMap = new Map();
            _this.keyMap.set('structureType', _this.propertiesService.getValue('getStructureTypeMap'));
            _this.keyMap.set('itemType', _this.propertiesService.getValue('getItemTypeMap'));
            _this.keyMap.set(
              'itemFamilyCode',
              _this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__['GenericPropertyConstants']
                  .ITEM_FAMILY_CODE_MAP
              )
            );
            _this.translateService.onLangChange.subscribe(function(_) {
              _this.loadDropDownLists();
            });
            return _this;
          }
          EngineeringDataExchangeSearchComponent.prototype.visibilityExportExcelIpc = function() {
            return this.canDisplayForm(this.EXPORT, this.EXCEL, this.IPC);
          };
          EngineeringDataExchangeSearchComponent.prototype.visibilityExportExcelMaintenance = function() {
            return this.canDisplayForm(this.EXPORT, this.EXCEL, this.MAINTENANCE);
          };
          EngineeringDataExchangeSearchComponent.prototype.visibilityExportXmlIpc = function() {
            return this.canDisplayForm(this.EXPORT, this.XML, this.IPC);
          };
          EngineeringDataExchangeSearchComponent.prototype.visibilityExportXmlMaintenance = function() {
            return this.canDisplayForm(this.EXPORT, this.XML, this.MAINTENANCE);
          };
          EngineeringDataExchangeSearchComponent.prototype.visibilityExportXmlEipc = function() {
            return this.canDisplayForm(this.EXPORT, this.XML, this.EIPC);
          };
          EngineeringDataExchangeSearchComponent.prototype.visibilityImport = function() {
            return this.canDisplayForm(this.LOADING, this.format, this.data);
          };
          EngineeringDataExchangeSearchComponent.prototype.canDisplayForm = function(type, format, data) {
            if (!format) {
              return false;
            }
            if (!data) {
              return false;
            }
            if (this.type !== type) {
              return false;
            }
            if (this.format !== format) {
              return false;
            }
            if (this.data !== data) {
              return false;
            }
            if (this.type === this.LOADING) {
              if (this.data === this.LOGISTIC || this.data === this.FUNCTIONAL || this.data === this.AMG) {
                return true;
              }
            }
            if (!this.validFamilyVariantCombination()) {
              return false;
            }
            return true;
          };
          EngineeringDataExchangeSearchComponent.prototype.getComponentName = function() {
            return 'EngineeringDataExchangeSearchComponent';
          };
          EngineeringDataExchangeSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
            this.loadDropDownLists();
          };
          EngineeringDataExchangeSearchComponent.prototype.setTableCols = function() {
            if (this.data === this.LOGISTIC || this.data === this.FUNCTIONAL || this.data === this.AMG) {
              this.reportTableCols = [
                { field: 'reportCode', alignment: 'center' },
                { field: 'reportName', alignment: 'center', width: '28%' },
                { field: 'statusUser', alignment: 'center' },
                { field: 'statusDate', alignment: 'center' }
              ];
            } else {
              this.reportTableCols = [
                { field: 'familyCode', alignment: 'center', width: '18%' },
                { field: 'reportCode', alignment: 'center', width: '18%' },
                { field: 'reportName', alignment: 'center', width: '28%' },
                { field: 'statusUser', alignment: 'center', width: '18%' },
                { field: 'statusDate', alignment: 'center', width: '18%' }
              ];
            }
          };
          EngineeringDataExchangeSearchComponent.prototype.deleteReports = function() {
            var _this = this;
            if (this.selectedReports !== []) {
              var partialMessageKey_1 =
                this.selectedReports.length > 1 ? 'confirmDeleteSelectedReports' : 'confirmDeleteSelectedReport';
              var reports_1 = new Array();
              this.selectedReports.forEach(function(report) {
                if (report && report.bireReportDTO.reportId) {
                  var reportId = {
                    reportId: report.bireReportDTO.reportId
                  };
                  reports_1.push(reportId);
                }
              });
              if (!!reports_1 && !!this.data) {
                var removeDataInput_1 = {
                  bireReportDTOId: reports_1,
                  data: this.data
                };
                this.confirmationService.confirmDelete({
                  messageKey: this.getTranslateKey(partialMessageKey_1),
                  accept: function() {
                    _this.engineeringDataExchangeSearchService.removeReportsByReportId(removeDataInput_1).subscribe(
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
              } else {
                _super.prototype.throwUnboundLocalError.call(this, 'deleteReports', 'reports && this.data');
              }
            }
          };
          EngineeringDataExchangeSearchComponent.prototype.openReportDetail = function(object) {
            var _this = this;
            if (
              !!object &&
              !!object.bireReportDTO &&
              !!object.bireReportDTO.reportId &&
              !!object.bireReportDTO.reportName
            ) {
              var bireReportDTOId = {
                reportId: object.bireReportDTO.reportId
              };
              if (this.data === this.LOGISTIC) {
                if (!!object.reportContent && !!object.reportName) {
                  if (object.reportName.includes('.txt')) {
                    this.downLoadFiles(object.reportContent, object.reportName);
                  } else {
                    this.downLoadFiles(object.reportContent, object.reportName + '.txt');
                  }
                }
              } else if (this.data === this.FUNCTIONAL) {
                this.engineeringDataExchangeSearchService
                  .openFLIMportReportContent(bireReportDTOId)
                  .subscribe(function(result) {
                    if (!!object.bireReportDTO.reportName && object.bireReportDTO.reportName.includes('.txt')) {
                      _this.downLoadFiles(result, object.bireReportDTO.reportName);
                    } else {
                      _this.downLoadFiles(result, object.bireReportDTO.reportName + '.txt');
                    }
                  });
              } else {
                this.engineeringDataExchangeSearchService
                  .openImportReportContent(bireReportDTOId)
                  .subscribe(function(result) {
                    if (!!object.bireReportDTO.reportName && object.bireReportDTO.reportName.includes('.txt')) {
                      _this.downLoadFiles(result, object.bireReportDTO.reportName);
                    } else {
                      _this.downLoadFiles(result, object.bireReportDTO.reportName + '.txt');
                    }
                  });
              }
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'openReportDetail', 'object');
            }
          };
          // tslint:disable-next-line:no-any
          EngineeringDataExchangeSearchComponent.prototype.onTypeChange = function(event) {
            this.format = undefined;
            if (event.value === null) {
              this.data = undefined;
              this.resetScreen();
            } else {
              this.propertyFormatList = this.formats;
              if (this.propertyFormatList && this.propertyFormatList.length > 0) {
                this.format = this.propertyFormatList[0].value;
              }
              this.changedTypeFormat();
            }
          };
          // tslint:disable-next-line:no-any
          EngineeringDataExchangeSearchComponent.prototype.onFormatChange = function(event) {
            this.changedTypeFormat();
          };
          EngineeringDataExchangeSearchComponent.prototype.changedTypeFormat = function() {
            this.resetScreen();
            this.data = undefined;
            if (this.type === 'Loading') {
              this.showExportIPCPanel = false;
              this.showExportIPCPanelExcel = false;
              this.showExportMaintenancePanel = false;
              this.showExportEIPCPanel = false;
              if (this.data === '' || this.data === undefined) {
                this.showImportDataPanel = false;
                this.showImportPanel = false;
              }
              if (this.format === 'XML') {
                this.propertyDataList = this.propertyDataLoadingXml;
              } else if (this.format === 'EXCEL') {
                this.propertyDataList = this.propertyDataLoadingExcel;
              } else {
                this.propertyDataList = [];
                this.data = undefined;
              }
            } else if (this.type === 'Export') {
              this.showImportDataPanel = false;
              this.showImportPanel = false;
              if (this.data === '' || this.data === undefined) {
                this.showExportIPCPanel = false;
                this.showExportIPCPanelExcel = false;
                this.showExportMaintenancePanel = false;
                this.showExportEIPCPanel = false;
              }
              if (this.format === 'XML') {
                this.propertyDataList = this.propertyDataExportXml;
              } else if (this.format === 'EXCEL') {
                this.propertyDataList = this.propertyDataExportExcel;
              } else {
                this.propertyDataList = [];
                this.data = undefined;
              }
            } else {
              this.showImportDataPanel = false;
              this.showImportPanel = false;
              this.propertyDataList = [];
              this.data = undefined;
            }
          };
          // tslint:disable-next-line:no-any
          EngineeringDataExchangeSearchComponent.prototype.onFamilyChange = function(event) {
            var _this = this;
            this.variantValues = [];
            this.selectedVariant = '';
            if (event.value === '' || event.value === null) {
              this.selectedVariant = '';
              this.showImportDataPanel = false;
              this.showImportPanel = false;
              this.showExportIPCPanel = false;
              this.showExportIPCPanelExcel = false;
              this.showExportMaintenancePanel = false;
              this.showExportEIPCPanel = false;
            } else {
              if (this.selectedVariant === '') {
                this.showImportDataPanel = false;
                this.showImportPanel = false;
                this.showExportIPCPanel = false;
                this.showExportIPCPanelExcel = false;
                this.showExportMaintenancePanel = false;
                this.showExportEIPCPanel = false;
              }
              this.getFamilyVariantOutputDTO.forEach(function(object) {
                if (object.familyLabelValueDTO.label === _this.selectedFamily) {
                  if (object.variantLabelValueDTO !== []) {
                    object.variantLabelValueDTO.forEach(function(variant) {
                      _this.variantValues.push(variant.variantLabelValue);
                    });
                  }
                }
              });
              this.familyAndVariantSelected();
            }
          };
          // tslint:disable-next-line:no-any
          EngineeringDataExchangeSearchComponent.prototype.onVariantChange = function(event) {
            if (this.selectedVariant !== '') {
              this.familyAndVariantSelected();
            }
          };
          EngineeringDataExchangeSearchComponent.prototype.familyAndVariantSelected = function() {
            var _this = this;
            this.getFamilyVariantOutputDTO.forEach(function(familyObject) {
              if (familyObject.familyLabelValueDTO.label === _this.selectedFamily) {
                familyObject.variantLabelValueDTO.forEach(function(variantObject) {
                  if (variantObject.variantLabelValue.label === _this.selectedVariant) {
                    _this.variantCode = variantObject.variantCode;
                    _this.variantName = variantObject.variantName;
                    _this.structureType = variantObject.structureType;
                  }
                });
              }
            });
            return this.selectedFamily + '/' + this.variantCode + '-' + this.variantName + '/' + this.structureType;
          };
          EngineeringDataExchangeSearchComponent.prototype.getFamilyVariantComponents = function() {
            var _this = this;
            this.getFamilyVariantOutputDTO.forEach(function(familyObject) {
              if (familyObject.familyLabelValueDTO.label === _this.selectedFamily) {
                familyObject.variantLabelValueDTO.forEach(function(variantObject) {
                  if (variantObject.variantLabelValue.label === _this.selectedVariant) {
                    _this.familyCode = variantObject.familyCode;
                    _this.structureType = variantObject.structureType;
                    _this.variantCode = variantObject.variantCode;
                    _this.familyName = variantObject.familyName;
                    _this.variantName = variantObject.variantName;
                  }
                });
              }
            });
          };
          EngineeringDataExchangeSearchComponent.prototype.resetCheckboxes = function() {
            this.ipcExcelCheckbox = false;
            this.maintenanceExcelCheckbox = false;
            this.logisticsCheckbox = false;
            this.experienceFeedbackCheckbox = false;
            this.ipcXmlCheckbox = false;
            this.ipcExcelCheckbox = false;
            this.maintenanceXmlCheckbox = false;
            this.amgExcelCheckbox = false;
          };
          EngineeringDataExchangeSearchComponent.prototype.import = function() {
            var _this = this;
            if (this.fileName !== '') {
              var partialMessageKey = this.getTranslateKey('importData');
              this.confirmationService.confirm({
                interpolateParams: { 'importData.fileName': this.fileName },
                contextKeys: [this.getTranslateKey('importData.line1')],
                messageKey: partialMessageKey,
                accept: function() {
                  _this.showSpinner = true;
                  _this.getFamilyVariantComponents();
                  // Importing Excel file
                  var isExcel =
                    _this.file &&
                    (_this.showDocExtension(_this.file) === 'xlsx' ||
                      _this.showDocExtension(_this.file) === 'xls' ||
                      (_this.data === _this.AMG && _this.showDocExtension(_this.file) === 'zip'));
                  if (_this.format === 'EXCEL' && isExcel) {
                    if (!!_this.file && !!_this.fileName && !!_this.file.docFile && !!_this.data) {
                      var excelInput = {
                        fileName: _this.fileName,
                        excelSource: _this.file && _this.file.docFile,
                        withOldDataRemoving: false,
                        familyCodeSelected: _this.familyCode,
                        structureTypeSelected: _this.structureType,
                        variantCodeSelected: _this.variantCode,
                        data: _this.data
                      };
                      switch (_this.data) {
                        case _this.IPC:
                          {
                            excelInput.withOldDataRemoving = _this.ipcExcelCheckbox;
                          }
                          break;
                        case _this.MAINTENANCE:
                          {
                            excelInput.withOldDataRemoving = _this.maintenanceExcelCheckbox;
                          }
                          break;
                        case _this.LOGISTIC:
                          {
                            excelInput.withOldDataRemoving = _this.logisticsCheckbox;
                          }
                          break;
                        case _this.FEEDBACK:
                          {
                            excelInput.withOldDataRemoving = _this.experienceFeedbackCheckbox;
                          }
                          break;
                        case _this.AMG:
                          {
                            excelInput.withOldDataRemoving = _this.amgExcelCheckbox;
                          }
                          break;
                        default:
                          break;
                      }
                      _this.engineeringDataExchangeSearchService.saveEngineeringExcelDataExchange(excelInput).subscribe(
                        function(result) {
                          _this.fileName = '';
                          _this.importReportMessage = result;
                          _this.showImportReportMessage = true;
                          _this.loadImportReportList();
                          _this.showSpinner = false;
                        },
                        function(error) {
                          _this.messageService.showErrorMessage(error.error.errorDesc);
                          _this.showSpinner = false;
                        }
                      );
                    } else {
                      _super.prototype.throwUnboundLocalError.call(_this, 'import', 'this.file');
                      _this.showSpinner = false;
                    }
                  } else if (_this.format === 'EXCEL' && !isExcel) {
                    _this.fileName = '';
                    if (_this.data === _this.AMG) {
                      _this.messageService.showErrorMessage(_this.getTranslateKey('notExcelOrZip'));
                    } else {
                      _this.messageService.showErrorMessage(_this.getTranslateKey('notExcel'));
                    }
                    _this.showSpinner = false;
                  }
                  // Import Xml File
                  if (!!_this.file && _this.format === 'XML' && _this.showDocExtension(_this.file) === 'xml') {
                    if (!!_this.fileName && !!_this.file.docFile && !!_this.data) {
                      var xmlInput = {
                        fileName: _this.fileName,
                        xmlSource: _this.file && _this.file.docFile,
                        familyCode: _this.familyCode,
                        structureType: _this.structureType,
                        variantCode: _this.variantCode,
                        withDeletion: false,
                        simulate: false,
                        data: _this.data
                      };
                      switch (_this.data) {
                        case _this.IPC:
                          {
                            xmlInput.withDeletion = _this.ipcXmlCheckbox;
                          }
                          break;
                        case _this.MAINTENANCE:
                          {
                            xmlInput.withDeletion = _this.maintenanceXmlCheckbox;
                          }
                          break;
                        default:
                          break;
                      }
                      _this.engineeringDataExchangeSearchService.saveEngineeringXMLDataExchange(xmlInput).subscribe(
                        function(result) {
                          _this.fileName = '';
                          _this.importReportMessage = result;
                          _this.showImportReportMessage = true;
                          _this.loadImportReportList();
                          _this.showSpinner = false;
                        },
                        function(error) {
                          _this.messageService.showErrorMessage(error.error.errorDesc);
                          _this.showSpinner = false;
                        }
                      );
                    } else {
                      _super.prototype.throwUnboundLocalError.call(_this, 'import', 'this.file');
                      _this.showSpinner = false;
                    }
                  } else if (!!_this.file && _this.format === 'XML' && _this.showDocExtension(_this.file) !== 'xml') {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('notXml'));
                    _this.showSpinner = false;
                  }
                }
              });
            }
          };
          EngineeringDataExchangeSearchComponent.prototype.simulate = function() {
            var _this = this;
            if (this.fileName !== '') {
              var partialMessageKey = this.getTranslateKey('importData');
              this.confirmationService.confirm({
                interpolateParams: { 'importData.fileName': this.fileName },
                contextKeys: [this.getTranslateKey('importData.line1')],
                messageKey: partialMessageKey,
                accept: function() {
                  _this.showSimulateSpinner = true;
                  _this.getFamilyVariantComponents();
                  if (
                    !!_this.file &&
                    !!_this.fileName &&
                    !!_this.file.docFile &&
                    !!_this.familyCode &&
                    !!_this.structureType &&
                    !!_this.variantCode &&
                    !!_this.data
                  ) {
                    if (_this.format === 'XML' && _this.showDocExtension(_this.file) === 'xml') {
                      var xmlInput = {
                        fileName: _this.fileName,
                        xmlSource: _this.file.docFile,
                        familyCode: _this.familyCode,
                        structureType: _this.structureType,
                        variantCode: _this.variantCode,
                        withDeletion: false,
                        simulate: true,
                        data: _this.data
                      };
                      switch (_this.data) {
                        case _this.IPC:
                          {
                            xmlInput.withDeletion = _this.ipcXmlCheckbox;
                          }
                          break;
                        case _this.MAINTENANCE:
                          {
                            xmlInput.withDeletion = _this.maintenanceXmlCheckbox;
                          }
                          break;
                        default:
                          break;
                      }
                      _this.engineeringDataExchangeSearchService.saveEngineeringXMLDataExchange(xmlInput).subscribe(
                        function(result) {
                          _this.fileName = '';
                          _this.importReportMessage = result;
                          _this.showImportReportMessage = true;
                          _this.showSimulateSpinner = false;
                        },
                        function(error) {
                          _this.messageService.showErrorMessage(error.error.errorDesc);
                          _this.showSimulateSpinner = false;
                        }
                      );
                    } else if (_this.format === 'XML' && _this.showDocExtension(_this.file) !== 'xml') {
                      _this.fileName = '';
                      _this.messageService.showErrorMessage(_this.getTranslateKey('notXml'));
                      _this.showSimulateSpinner = false;
                    }
                  }
                }
              });
            }
          };
          EngineeringDataExchangeSearchComponent.prototype.downLoadFiles = function(docFile, docName) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_17__['FileUtils'].downloadFile(docFile, docName);
          };
          EngineeringDataExchangeSearchComponent.prototype.exportIPC = function() {
            var _this = this;
            this.getFamilyVariantComponents();
            this.showSpinner = true;
            this.ipcExportData.familyCode = this.familyCode;
            this.ipcExportData.structureType = this.structureType;
            this.ipcExportData.variantCode = this.variantCode;
            if (this.ipcExportData.lastPublicationDate) {
              this.ipcExportData.lastPublicationDate = new Date(this.ipcExportData.lastPublicationDate).toISOString();
            }
            var currDate = new Date();
            var customDate =
              this.datepipe.transform(currDate, 'dd-MM-yyyy_HH') + 'h' + this.datepipe.transform(currDate, 'mm');
            this.engineeringDataExchangeSearchService.exportReferentialFile(this.ipcExportData).subscribe(
              function(result) {
                _this.showSpinner = false;
                if (result !== null) {
                  var fileName = 'IPC_' + _this.familyName + '_' + _this.variantCode + '_' + customDate + '.zip';
                  _this.getFamilyVariantComponents();
                  _this.downLoadFiles(result, fileName);
                } else {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnExport'));
                }
              },
              function() {
                _this.showSpinner = false;
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnExport'));
              }
            );
          };
          EngineeringDataExchangeSearchComponent.prototype.exportExcelIpc = function() {
            var _this = this;
            this.getFamilyVariantComponents();
            this.showSpinner = true;
            this.ipcExportData.familyCode = this.familyCode;
            this.ipcExportData.structureType = this.structureType;
            this.ipcExportData.variantCode = this.variantCode;
            if (this.ipcExportData.lastPublicationDate) {
              this.ipcExportData.lastPublicationDate = new Date(this.ipcExportData.lastPublicationDate).toISOString();
            }
            var currDate = new Date();
            var customDate =
              this.datepipe.transform(currDate, 'dd-MM-yyyy_HH') + 'h' + this.datepipe.transform(currDate, 'mm');
            this.engineeringDataExchangeSearchService.exportReferentialFileExcel(this.ipcExportData).subscribe(
              function(result) {
                _this.showSpinner = false;
                if (result !== null) {
                  var fileName = 'IPC_' + _this.familyName + '_' + _this.variantCode + '_' + customDate + '.xls';
                  _this.getFamilyVariantComponents();
                  _this.downLoadFiles(result, fileName);
                } else {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnExport'));
                }
              },
              function() {
                _this.showSpinner = false;
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnExport'));
              }
            );
          };
          EngineeringDataExchangeSearchComponent.prototype.exportMaintenance = function() {
            var _this = this;
            this.getFamilyVariantComponents();
            this.showSpinner = true;
            this.maintenanceExportData.familyCode = this.familyCode;
            this.maintenanceExportData.structureType = this.structureType;
            this.maintenanceExportData.variantCode = this.variantCode;
            var currDate = new Date();
            var customDate =
              this.datepipe.transform(currDate, 'dd-MM-yyyy_HH') + 'h' + this.datepipe.transform(currDate, 'mm');
            this.engineeringDataExchangeSearchService.exportMaintenanceFile(this.maintenanceExportData).subscribe(
              function(result) {
                _this.showSpinner = false;
                if (result !== null) {
                  var fileName =
                    'Maintenance_' + _this.familyName + '_' + _this.variantCode + '_' + customDate + '.zip';
                  _this.getFamilyVariantComponents();
                  _this.downLoadFiles(result, fileName);
                } else {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnExport'));
                }
              },
              function() {
                _this.showSpinner = false;
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnExport'));
              }
            );
          };
          EngineeringDataExchangeSearchComponent.prototype.exportMaintenanceExcel = function() {
            var _this = this;
            this.getFamilyVariantComponents();
            this.showSpinner = true;
            this.maintenanceExportData.familyCode = this.familyCode;
            this.maintenanceExportData.structureType = this.structureType;
            this.maintenanceExportData.variantCode = this.variantCode;
            this.maintenanceExportData.taskGroupCode = this.selectedTaskGroup;
            var currDate = new Date();
            var customDate =
              this.datepipe.transform(currDate, 'dd-MM-yyyy_HH') + 'h' + this.datepipe.transform(currDate, 'mm');
            this.engineeringDataExchangeSearchService.exportMaintenanceFileExcel(this.maintenanceExportData).subscribe(
              function(result) {
                _this.showSpinner = false;
                if (result !== null) {
                  var fileName =
                    'Maintenance_' + _this.familyName + '_' + _this.variantCode + '_' + customDate + '.xls';
                  _this.getFamilyVariantComponents();
                  _this.downLoadFiles(result, fileName);
                } else {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnExport'));
                }
              },
              function() {
                _this.showSpinner = false;
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnExport'));
              }
            );
          };
          EngineeringDataExchangeSearchComponent.prototype.exportEIPC = function() {
            var _this = this;
            this.getFamilyVariantComponents();
            this.showSpinner = true;
            this.eipcExportData.familyCode = this.familyCode;
            this.eipcExportData.structureType = this.structureType;
            this.eipcExportData.variantCode = this.variantCode;
            var currDate = new Date().getTime();
            this.engineeringDataExchangeSearchService.exportDetailPartsList(this.eipcExportData).subscribe(
              function(result) {
                _this.showSpinner = false;
                if (result !== null) {
                  var fileName = 'EIPC_' + _this.familyName + '_' + _this.variantCode + '_DPLIST_' + currDate + '.xml';
                  _this.getFamilyVariantComponents();
                  _this.downLoadFiles(result, fileName);
                } else {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnExport'));
                }
              },
              function() {
                _this.showSpinner = false;
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnExport'));
              }
            );
          };
          EngineeringDataExchangeSearchComponent.prototype.loadDropDownLists = function() {
            var _this = this;
            var familyVariantInput = {
              useCase:
                _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_3__['BidoFunctionTypeConstants']
                  .UC_MCH_TASK,
              module:
                _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_3__['BidoFunctionTypeConstants']
                  .MODULE_FAMILY
            };
            this.engineeringDataExchangeSearchService.getFamilyVariant(familyVariantInput).subscribe(
              function(results) {
                _this.getFamilyVariantOutputDTO = results;
                results.forEach(function(result) {
                  _this.familyValues.push(result.familyLabelValueDTO);
                  _this.selectedFamily = _this.familyValues[0].label;
                  result.variantLabelValueDTO.forEach(function(object) {
                    _this.variantValues.push(object.variantLabelValue);
                  });
                });
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetFamilyVariant'));
              }
            );
            var dataListBySearchCriteriaInput = {
              format: 'EXCEL',
              type: 'Loading'
            };
            this.engineeringDataExchangeSearchService
              .findDataListBySearchCriteria(dataListBySearchCriteriaInput)
              .subscribe(
                function(results) {
                  _this.propertyDataLoadingExcel = results;
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetDataList'));
                }
              );
            dataListBySearchCriteriaInput = {
              format: 'XML',
              type: 'Loading'
            };
            this.engineeringDataExchangeSearchService
              .findDataListBySearchCriteria(dataListBySearchCriteriaInput)
              .subscribe(
                function(results) {
                  _this.propertyDataLoadingXml = results;
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetDataList'));
                }
              );
            dataListBySearchCriteriaInput = {
              format: 'XML',
              type: 'Export'
            };
            this.engineeringDataExchangeSearchService
              .findDataListBySearchCriteria(dataListBySearchCriteriaInput)
              .subscribe(
                function(results) {
                  _this.propertyDataExportXml = results;
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetDataList'));
                }
              );
            dataListBySearchCriteriaInput = {
              format: 'EXCEL',
              type: 'Export'
            };
            this.engineeringDataExchangeSearchService
              .findDataListBySearchCriteria(dataListBySearchCriteriaInput)
              .subscribe(
                function(results) {
                  _this.propertyDataExportExcel = [];
                  if (results) {
                    results.forEach(function(element) {
                      if (element.value !== _this.EIPC) {
                        _this.propertyDataExportExcel.push(element);
                      }
                    });
                    _this.propertyDataExportExcel = __spread(_this.propertyDataExportExcel);
                  }
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetDataList'));
                }
              );
            this.getTypeList();
            this.engineeringDataExchangeSearchService.findAllBireTaskGroup().subscribe(function(data) {
              _this.taskGroups = data;
            });
          };
          EngineeringDataExchangeSearchComponent.prototype.getTypeList = function() {
            var _this = this;
            this.engineeringDataExchangeSearchService.findTypeList().subscribe(
              function(results) {
                _this.propertyTypeList = results;
                if (_this.propertyTypeList && _this.propertyTypeList.length > 0) {
                  _this.type = _this.propertyTypeList[0].value;
                  /*if (this.format !== undefined) {
                  this.changedTypeFormat();
                }*/
                  _this.getFormatList();
                }
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetTypeList'));
              }
            );
          };
          EngineeringDataExchangeSearchComponent.prototype.getFormatList = function() {
            var _this = this;
            this.engineeringDataExchangeSearchService.findFormatList().subscribe(
              function(results) {
                _this.propertyFormatList = results;
                _this.formats = results;
                _this.onTypeChange({ value: _this.type });
                /*if (this.propertyFormatList && this.propertyFormatList.length > 0) {
              this.format = this.propertyFormatList[0].value;
              if (this.type !== undefined) {
                this.changedTypeFormat();
              }
            }*/
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetFormatList'));
              }
            );
          };
          EngineeringDataExchangeSearchComponent.prototype.loadImportReportList = function() {
            var _this = this;
            this.getFamilyVariantComponents();
            this.importReport = [];
            if (this.type === 'Loading') {
              var loadImportReportsInput = {
                familyCode: this.familyCode,
                structureType: this.structureType,
                variantCode: this.variantCode,
                data: this.data,
                reportCode: '',
                format: this.format
              };
              if (this.format === 'EXCEL') {
                switch (this.data) {
                  case this.IPC:
                    {
                      loadImportReportsInput.reportCode = 'TCI_IMPORT_REPORT';
                    }
                    break;
                  case this.MAINTENANCE:
                    {
                      loadImportReportsInput.reportCode = 'TASK_IMPORT_REPORT';
                    }
                    break;
                  case this.LOGISTIC:
                    {
                      loadImportReportsInput.reportCode = 'LOGISTICS_IMPORT_REPORT';
                    }
                    break;
                  case this.FEEDBACK:
                    {
                      loadImportReportsInput.reportCode = 'EXPERIENCE_IMPORT_REPORT';
                    }
                    break;
                  case this.FUNCTIONAL:
                    {
                      loadImportReportsInput.reportCode = 'FL_STRUCTURE_IMPORT_REPORT';
                    }
                    break;
                  case this.AMG:
                    {
                      loadImportReportsInput.reportCode = 'AMG_IMPORT_REPORT';
                    }
                    break;
                  default:
                    break;
                }
              } else if (this.format === 'XML') {
                switch (this.data) {
                  case this.IPC:
                    {
                      loadImportReportsInput.reportCode = 'REFERENTIAL_IMPORT_REPORT_CODE';
                    }
                    break;
                  case this.MAINTENANCE:
                    {
                      loadImportReportsInput.reportCode = 'MAINTENANCE_IMPORT_REPORT_CODE';
                    }
                    break;
                  default:
                    break;
                }
              }
              this.engineeringDataExchangeSearchService
                .refreshEngineeringDataExchange(loadImportReportsInput)
                .subscribe(
                  function(results) {
                    _this.importReport = results;
                    _this.importReport.forEach(function(report) {
                      report.reportId = report.bireReportDTO.reportId;
                      report.familyCode = report.bireReportDTO.familyCode;
                      report.structureType = report.bireReportDTO.structureType;
                      report.variantCode = report.bireReportDTO.variantCode;
                      report.reportCode = report.bireReportDTO.reportCode;
                      report.reportName = report.bireReportDTO.reportName;
                      report.reportContent = report.bireReportDTO.reportContent;
                      report.reportDescription = report.bireReportDTO.reportDescription;
                      report.statusState = report.bireReportDTO.statusState;
                      report.statusUser = report.bireReportDTO.statusUser;
                      report.statusDate = report.bireReportDTO.statusDate;
                    });
                  },
                  function() {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLoadImportReports'));
                  }
                );
            }
          };
          EngineeringDataExchangeSearchComponent.prototype.showDocExtension = function(document) {
            return _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_17__['FileUtils'].getExtension(document.docName);
          };
          EngineeringDataExchangeSearchComponent.prototype.uploadDocument = function(event, fileUploader) {
            var _this = this;
            // if (!!event.files) {
            var file = event.files[0];
            {
              // if (!!this.file && !!this.file.docName) {
              _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_17__['FileUtils'].getFileContentAsBase64(file, function(
                fileContent
              ) {
                if (fileContent) {
                  _this.file = {
                    docFile: fileContent,
                    docName: file.name,
                    docPublicationDate: new Date()
                  };
                  _this.fileName = _this.file.docName;
                }
              });
              // } else {
              //   super.throwUnboundLocalError('uploadDocument', 'this.file && this.file.docName');
              // }
            }
            fileUploader.clear();
            // }
          };
          EngineeringDataExchangeSearchComponent.prototype.loadImportComponents = function() {
            this.setFamilyAndVariantDropdowns();
            this.fileName = '';
          };
          EngineeringDataExchangeSearchComponent.prototype.loadExportComponents = function() {
            this.setFamilyAndVariantDropdowns();
            this.ipcExportData = {};
            this.maintenanceExportData = {};
          };
          EngineeringDataExchangeSearchComponent.prototype.resetScreen = function() {
            this.showSearchCriteria = false;
            this.showImportPanel = false;
            this.showImportReportList = false;
            this.showImportDataPanel = false;
            this.showExportIPCPanel = false;
            this.showExportIPCPanelExcel = false;
            this.showExportMaintenancePanel = false;
            this.showExportEIPCPanel = false;
            this.resetCheckboxes();
            this.loadImportComponents();
            this.loadExportComponents();
          };
          EngineeringDataExchangeSearchComponent.prototype.loadTemplate = function() {
            var templateName = '';
            if (this.format === 'EXCEL') {
              switch (this.data) {
                case this.IPC:
                  {
                    templateName = 'TEMPLATE_IPC_FILE.xls';
                  }
                  break;
                case this.MAINTENANCE:
                  {
                    templateName = 'TEMPLATE_TASK_FILE.xls';
                  }
                  break;
                case this.LOGISTIC:
                  {
                    templateName = 'TEMPLATE_LOGISTICS_FILE.xls';
                  }
                  break;
                case this.FEEDBACK:
                  {
                    templateName = 'TEMPLATE_EXPERIENCE_FILE.xls';
                  }
                  break;
                case this.FUNCTIONAL:
                  {
                    templateName = 'TEMPLATE_FL_FILE.xls';
                  }
                  break;
                case this.AMG:
                  {
                    templateName = 'TEMPLATE_AMG_FILE.xls';
                  }
                  break;
                default:
                  break;
              }
            } else if (this.format === 'XML') {
              switch (this.data) {
                case this.IPC:
                  {
                    templateName = 'Template_REFERENTIAL_DATA_IMPORT.xsd';
                  }
                  break;
                case this.MAINTENANCE:
                  {
                    templateName = 'Template_MAINTENANCE_DATA_IMPORT.xsd';
                  }
                  break;
                default:
                  break;
              }
            }
            return templateName;
          };
          EngineeringDataExchangeSearchComponent.prototype.openTemplate = function(templateName) {
            var _this = this;
            if (!!this.data && !!this.format) {
              var getTemplateInput = {
                data: this.data,
                format: this.format
              };
              /*const partialMessageKey = this.getTranslateKey('openReport');
            this.confirmationService.confirm({
              interpolateParams: { 'openReport.reportName': templateName },
              messageKey: partialMessageKey,
              accept: () => {
                this.engineeringDataExchangeSearchService.getTemplate(getTemplateInput).subscribe((result) => {
                  this.downLoadFiles(result, templateName);
                });
              }
            });*/
              this.engineeringDataExchangeSearchService.getTemplate(getTemplateInput).subscribe(function(result) {
                _this.downLoadFiles(result, templateName);
              });
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'openTemplate', 'this.data && this.format');
            }
          };
          /********************************
           * Validation Assisting Functions
           *******************************/
          EngineeringDataExchangeSearchComponent.prototype.enableImport = function() {
            if (!!this.format && !!this.data) {
              return false;
            } else {
              return true;
            }
          };
          EngineeringDataExchangeSearchComponent.prototype.validTypeFormatDataCombination = function() {
            if (!!this.type && !!this.format && !!this.data) {
              return true;
            } else {
              return false;
            }
          };
          EngineeringDataExchangeSearchComponent.prototype.validFamilyVariantCombination = function() {
            if (!!this.selectedFamily && !!this.selectedVariant) {
              return true;
            } else {
              return false;
            }
          };
          EngineeringDataExchangeSearchComponent.prototype.loadATACodes = function(
            familyCode,
            structureType,
            variantCode
          ) {
            var _this = this;
            this.ataCodes = [];
            this.ataData = [];
            var input = {
              familyCode: familyCode,
              structureType: structureType,
              variantCode: variantCode
            };
            this.engineeringDataExchangeSearchService.loadATAcodes(input).subscribe(function(results) {
              _this.ataData = results;
              results.forEach(function(result) {
                _this.ataCodes.push(result.labelValueDTO);
              });
            });
          };
          // tslint:disable-next-line:no-any
          EngineeringDataExchangeSearchComponent.prototype.setATACodeComponents = function(event) {
            var _this = this;
            if (event.value !== '' || event.value !== null) {
              this.ataData.forEach(function(ata) {
                if (_this.selectedATACode === ata.labelValueDTO.label) {
                  _this.ipcExportData.section = ata.bireItemDTO.section;
                  _this.ipcExportData.subject = ata.bireItemDTO.subject;
                  _this.ipcExportData.chapter = ata.bireItemDTO.chapter;
                  _this.ipcExportData.sheet = ata.bireItemDTO.sheet;
                  _this.ipcExportData.mark = ata.bireItemDTO.marks;
                }
              });
            } else {
              this.ipcExportData.section = '';
              this.ipcExportData.subject = '';
              this.ipcExportData.chapter = '';
              this.ipcExportData.sheet = '';
              this.ipcExportData.mark = '';
            }
          };
          EngineeringDataExchangeSearchComponent.prototype.resetATAData = function() {
            this.selectedATACode = '';
            this.ipcExportData.chapter = '';
            this.ipcExportData.section = '';
            this.ipcExportData.sheet = '';
            this.ipcExportData.subject = '';
            this.ipcExportData.mark = '';
          };
          EngineeringDataExchangeSearchComponent.prototype.setFamilyAndVariantDropdowns = function() {
            var _this = this;
            this.familyValues = [];
            this.variantValues = [];
            var results = this.getFamilyVariantOutputDTO;
            if (results && results.length > 0) {
              results.forEach(function(result) {
                _this.familyValues.push(result.familyLabelValueDTO);
                _this.selectedFamily = _this.familyValues[0].label;
              });
              results[0].variantLabelValueDTO.forEach(function(variantValue) {
                _this.variantValues.push(variantValue.variantLabelValue);
              });
            }
            this.selectedVariant = undefined;
          };
          // tslint:disable-next-line:no-any
          EngineeringDataExchangeSearchComponent.prototype.setSearchCriteriaVisibility = function(event) {
            this.showSearchCriteria = this.validTypeFormatDataCombination() ? this.checkSearchCriteria() : false;
            this.setTableCols();
            this.resetCheckboxes();
            this.fileName = '';
            this.setFamilyAndVariantDropdowns();
            this.importReport = [];
            if (event.value === null || event.value === '') {
              this.showImportDataPanel = false;
              this.showImportPanel = false;
              this.showExportIPCPanel = false;
              this.showExportIPCPanelExcel = false;
              this.showExportMaintenancePanel = false;
              this.showExportEIPCPanel = false;
            } else {
              if (this.format === 'EXCEL') {
                this.showImportDataPanel = false;
                this.showImportPanel = false;
                this.showExportIPCPanel = false;
                this.showExportIPCPanelExcel = false;
                this.showExportMaintenancePanel = false;
                this.showExportEIPCPanel = false;
                if (this.data === this.LOGISTIC || this.data === this.FUNCTIONAL || this.data === this.AMG) {
                  this.loadImportReportList();
                  if (this.validTypeFormatDataCombination()) {
                    this.showImportDataPanel = true;
                    this.showImportPanel = true;
                  } else {
                    this.showImportDataPanel = false;
                    this.showImportPanel = false;
                  }
                }
              } else if (this.format === 'XML') {
                this.showImportDataPanel = false;
                this.showImportPanel = false;
                this.showExportIPCPanel = false;
                this.showExportIPCPanelExcel = false;
                this.showExportMaintenancePanel = false;
                this.showExportEIPCPanel = false;
              }
            }
          };
          EngineeringDataExchangeSearchComponent.prototype.setImportSectionVisibility = function() {
            this.resetCheckboxes();
            this.fileName = '';
            if (this.format === 'EXCEL') {
              this.showExportIPCPanel = false;
              this.showExportIPCPanelExcel = false;
              this.showExportMaintenancePanel = false;
              this.showExportEIPCPanel = false;
              this.importReport = [];
              if (this.validTypeFormatDataCombination() && this.validFamilyVariantCombination()) {
                this.loadImportReportList();
                this.showImportDataPanel = true;
                this.showImportPanel = true;
              } else {
                this.showImportDataPanel = false;
                this.showImportPanel = false;
              }
            } else if (this.format === 'XML') {
              if (this.type === 'Loading') {
                if (this.data !== null || this.data !== '') {
                  this.loadImportReportList();
                  this.showImportDataPanel = true;
                  this.showImportPanel = true;
                } else {
                  this.importReport = [];
                  this.showImportDataPanel = false;
                  this.showImportPanel = false;
                }
              } else {
                this.showImportDataPanel = false;
                this.showImportPanel = false;
                if (this.validTypeFormatDataCombination() && this.validFamilyVariantCombination()) {
                  switch (this.data) {
                    case this.IPC:
                      {
                        this.ipcExportData = {};
                        this.ipcExportData.withFamilyVariant = true;
                        this.showExportIPCPanel = true;
                        this.showExportIPCPanelExcel = false;
                        this.showExportMaintenancePanel = false;
                        this.showExportEIPCPanel = false;
                        this.getFamilyVariantComponents();
                        this.loadATACodes(this.familyCode, this.structureType, this.variantCode);
                      }
                      break;
                    case this.MAINTENANCE:
                      {
                        this.maintenanceExportData = {
                          withShopManual: true,
                          withRange: true,
                          withTaskStructure: true,
                          withTaskGroup: true,
                          withMaintenancePlan: true
                        };
                        this.showExportIPCPanel = false;
                        this.showExportIPCPanelExcel = false;
                        this.showExportMaintenancePanel = true;
                        this.showExportEIPCPanel = false;
                      }
                      break;
                    case 'EIPC - Detailed Parts List':
                      {
                        this.eipcExportData = {};
                        this.showExportIPCPanel = false;
                        this.showExportIPCPanelExcel = false;
                        this.showExportMaintenancePanel = false;
                        this.showExportEIPCPanel = true;
                      }
                      break;
                    default:
                      {
                        this.eipcExportData = {};
                        this.showExportIPCPanel = false;
                        this.showExportIPCPanelExcel = false;
                        this.showExportMaintenancePanel = false;
                        this.showExportEIPCPanel = false;
                      }
                      break;
                  }
                } else {
                  this.showExportIPCPanel = false;
                  this.showExportIPCPanelExcel = false;
                  this.showExportMaintenancePanel = false;
                  this.showExportEIPCPanel = false;
                }
              }
            }
          };
          EngineeringDataExchangeSearchComponent.prototype.checkSearchCriteria = function() {
            var returnValue = false;
            if (this.type === 'Loading') {
              if (this.format === 'EXCEL') {
                returnValue =
                  this.data === this.LOGISTIC || this.data === this.FUNCTIONAL || this.data === this.AMG ? false : true;
              } else if (this.format === 'XML') {
                returnValue = true;
              }
            } else {
              if (this.format === 'EXCEL') {
                returnValue = true;
              } else if (this.format === 'XML') {
                this.showExportXMLData();
                returnValue = true;
              } else {
                returnValue = false;
              }
            }
            return returnValue;
          };
          // For export
          EngineeringDataExchangeSearchComponent.prototype.openItemTableDialog = function() {
            this.initItemTableData();
            this.showItemTableDialog = true;
          };
          EngineeringDataExchangeSearchComponent.prototype.initItemTableData = function() {
            this.getFamilyVariantComponents();
            var itemTableCols = [
              {
                field: 'familyCode',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'structureType',
                alignment: 'left',
                width: '20%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'variantCode',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'name',
                alignment: 'left',
                width: '30%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'chapter',
                alignment: 'left',
                width: '8%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'section',
                alignment: 'left',
                width: '8%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'subject',
                alignment: 'left',
                width: '8%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'sheet',
                alignment: 'left',
                width: '8%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'marks',
                alignment: 'left',
                width: '8%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'functionCode',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'itemNumber',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'itemType',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'fLocType',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'itemFamilyCode',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'configurableArticle',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__['TableColumnFilterMode']
                    .Input
              }
            ];
            this.itemTableData = {
              componentId: 'DialogItem',
              tableCols: itemTableCols,
              tableRows: this.engineeringDataExchangeSearchService.findBireItemsBySearchCriteria(
                this.familyCode,
                this.structureType,
                this.variantCode
              ),
              dataKey: undefined,
              selectionMode:
                _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_7__['TableSelectionMode'].Single,
              globalFilter: true
            };
          };
          // To handle export data panel visibility
          EngineeringDataExchangeSearchComponent.prototype.showExportXMLData = function() {
            if (this.type && this.format && this.data) {
              this.showExportPanel = true;
              this.exportPanel = this.data === this.IPC ? '0' : this.data === this.MAINTENANCE ? '1' : '2';
            } else {
              this.showExportPanel = false;
            }
          };
          /**************
           * Items dialog
           **************/
          EngineeringDataExchangeSearchComponent.prototype.onSelectedItem = function(item) {
            var _this = this;
            if (item) {
              this.ipcExportData.chapter = item.chapter;
              this.ipcExportData.section = item.section;
              this.ipcExportData.subject = item.subject;
              this.ipcExportData.sheet = item.sheet;
              this.ipcExportData.mark = item.marks;
            }
            this.ataData.forEach(function(ata) {
              if (
                ata.bireItemDTO.chapter === item.chapter &&
                ata.bireItemDTO.section === item.section &&
                ata.bireItemDTO.subject === item.subject &&
                ata.bireItemDTO.sheet === item.sheet &&
                ata.bireItemDTO.marks === item.marks
              ) {
                _this.selectedATACode = ata.labelValueDTO.label;
              }
            });
          };
          EngineeringDataExchangeSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Component'])({
                selector: 'aw-engineering-data-exchange-search',
                template: __webpack_require__(
                  /*! ./engineering-data-exchange-search.component.html */ './src/app/main/collaborative-cockpit/engineering-data-exchange-search/engineering-data-exchange-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./engineering-data-exchange-search.component.scss */ './src/app/main/collaborative-cockpit/engineering-data-exchange-search/engineering-data-exchange-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_13__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_15__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_14__['SessionService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__['ConfirmationService'],
                _engineering_data_exchange_search_service__WEBPACK_IMPORTED_MODULE_18__[
                  'EgineeringDataExchangeSearchService'
                ],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__['DatePipe'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__['PropertiesService']
              ])
            ],
            EngineeringDataExchangeSearchComponent
          );
          return EngineeringDataExchangeSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_16__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/engineering-data-exchange-search/engineering-data-exchange-search.service.ts':
      /*!*************************************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/engineering-data-exchange-search/engineering-data-exchange-search.service.ts ***!
  \*************************************************************************************************************************/
      /*! exports provided: EgineeringDataExchangeSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'EgineeringDataExchangeSearchService',
          function() {
            return EgineeringDataExchangeSearchService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_engineering_data_exchange_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/engineering-data-exchange.api */ './src/app/shared/api/engineering-data-exchange.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_maintenance_export_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/api/maintenance-export.api */ './src/app/shared/api/maintenance-export.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_api_referential_export_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/api/referential-export.api */ './src/app/shared/api/referential-export.api.ts'
        );
        /* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/api/task-management.api */ './src/app/shared/api/task-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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

        var EgineeringDataExchangeSearchService = /** @class */ (function(_super) {
          __extends(EgineeringDataExchangeSearchService, _super);
          function EgineeringDataExchangeSearchService(
            http,
            appConfigService,
            productStructureManagementApi,
            engineeringDataExchangeApi,
            maintenanceExportApi,
            referentialExportApi,
            fleetManagementApi,
            taskManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.engineeringDataExchangeApi = engineeringDataExchangeApi;
            _this.maintenanceExportApi = maintenanceExportApi;
            _this.referentialExportApi = referentialExportApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.taskManagementApi = taskManagementApi;
            return _this;
          }
          EgineeringDataExchangeSearchService.prototype.getFamilyVariant = function(familyVariantInput) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireFamilyVariant,
              familyVariantInput
            );
          };
          EgineeringDataExchangeSearchService.prototype.findDataListBySearchCriteria = function(
            findDataListBySearchCriteria
          ) {
            return _super.prototype.post.call(
              this,
              this.engineeringDataExchangeApi.findDataListBySearchCriteria,
              findDataListBySearchCriteria
            );
          };
          EgineeringDataExchangeSearchService.prototype.findFormatList = function() {
            return _super.prototype.post.call(this, this.engineeringDataExchangeApi.findFormatList);
          };
          EgineeringDataExchangeSearchService.prototype.findTypeList = function() {
            return _super.prototype.post.call(this, this.engineeringDataExchangeApi.findTypeList);
          };
          EgineeringDataExchangeSearchService.prototype.findBireVariantVersionsByFamilyCode = function() {
            return _super.prototype.post.call(this, this.engineeringDataExchangeApi.findTypeList);
          };
          EgineeringDataExchangeSearchService.prototype.saveEngineeringExcelDataExchange = function(getExcelDataInput) {
            return _super.prototype.post.call(
              this,
              this.engineeringDataExchangeApi.saveEngineeringExcelDataExchange,
              getExcelDataInput
            );
          };
          EgineeringDataExchangeSearchService.prototype.saveEngineeringXMLDataExchange = function(getXMLDataInput) {
            return _super.prototype.post.call(
              this,
              this.engineeringDataExchangeApi.saveEngineeringXMLDataExchange,
              getXMLDataInput
            );
          };
          EgineeringDataExchangeSearchService.prototype.refreshEngineeringDataExchange = function(
            refreshArchivedImportReportInput
          ) {
            return _super.prototype.post.call(
              this,
              this.engineeringDataExchangeApi.refreshEngineeringDataExchange,
              refreshArchivedImportReportInput
            );
          };
          EgineeringDataExchangeSearchService.prototype.removeReportsByReportId = function(reports) {
            return _super.prototype.post.call(this, this.engineeringDataExchangeApi.removeReportsByReportId, reports);
          };
          EgineeringDataExchangeSearchService.prototype.exportReferentialFile = function(exportInput) {
            return _super.prototype.post.call(this, this.referentialExportApi.exportReferentialFile, exportInput);
          };
          EgineeringDataExchangeSearchService.prototype.exportReferentialFileExcel = function(exportInput) {
            return _super.prototype.post.call(this, this.referentialExportApi.exportReferentialFileExcel, exportInput);
          };
          EgineeringDataExchangeSearchService.prototype.exportMaintenanceFile = function(exportInput) {
            return _super.prototype.post.call(this, this.maintenanceExportApi.exportMaintenanceFile, exportInput);
          };
          EgineeringDataExchangeSearchService.prototype.exportMaintenanceFileExcel = function(exportInput) {
            return _super.prototype.post.call(this, this.maintenanceExportApi.exportMaintenanceFileExcel, exportInput);
          };
          EgineeringDataExchangeSearchService.prototype.exportDetailPartsList = function(exportInput) {
            return _super.prototype.post.call(this, this.referentialExportApi.exportDetailPartsList, exportInput);
          };
          EgineeringDataExchangeSearchService.prototype.getTemplate = function(input) {
            return _super.prototype.post.call(
              this,
              this.engineeringDataExchangeApi.fetchEngineeringDataExchangeTemplate,
              input
            );
          };
          EgineeringDataExchangeSearchService.prototype.openImportReportContent = function(input) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireReportContentOfBireReport,
              input
            );
          };
          EgineeringDataExchangeSearchService.prototype.openFLIMportReportContent = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoReportContentOfBidoReport, input);
          };
          EgineeringDataExchangeSearchService.prototype.loadATAcodes = function(input) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireItemsByFamilyAndVariantCodes,
              input
            );
          };
          EgineeringDataExchangeSearchService.prototype.findAllBireTaskGroup = function() {
            return _super.prototype.post.call(this, this.taskManagementApi.findAllBireTaskGroups);
          };
          EgineeringDataExchangeSearchService.prototype.findBireItemsBySearchCriteria = function(
            familyCode,
            structureType,
            variantCode
          ) {
            var params = {
              bireItemDTOCriteria: {
                familyCode: familyCode,
                structureType: structureType,
                variantCode: variantCode
              }
            };
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireItemsBySearchCriteria,
              params
            );
          };
          EgineeringDataExchangeSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__['AppConfigService'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_5__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_engineering_data_exchange_api__WEBPACK_IMPORTED_MODULE_2__['EngineeringDataExchangeApi'],
                _shared_api_maintenance_export_api__WEBPACK_IMPORTED_MODULE_4__['MaintenanceExportApi'],
                _shared_api_referential_export_api__WEBPACK_IMPORTED_MODULE_6__['ReferentialExportApi'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__['FleetManagementApi'],
                _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_7__['TaskManagementApi']
              ])
            ],
            EgineeringDataExchangeSearchService
          );
          return EgineeringDataExchangeSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/engineering-data-exchange-search/import-report-popup/import-report-popup.component.html':
      /*!************************************************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/engineering-data-exchange-search/import-report-popup/import-report-popup.component.html ***!
  \************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal style="height: 28em;" class="aw-modal" [(visible)]="displayValue">\r\n  <a-header>\r\n    <div class="modal-title">{{ componentId + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group" style="overflow: hidden">\r\n      <label class="form-label"></label>\r\n\r\n      <div class="form-control" style="height: auto">\r\n        <textarea\r\n          pInputTextArea\r\n          [cols]="60"\r\n          [rows]="15"\r\n          type="text"\r\n          class="aw-textarea"\r\n          [(ngModel)]="importReportMessage"\r\n          disabled\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="close()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/engineering-data-exchange-search/import-report-popup/import-report-popup.component.scss':
      /*!************************************************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/engineering-data-exchange-search/import-report-popup/import-report-popup.component.scss ***!
  \************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.textbox {\n  background-color: white; }\n\n.modal-height {\n  height: 28rem; }\n\n.textarea-height {\n  height: 18rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb2xsYWJvcmF0aXZlLWNvY2twaXQvZW5naW5lZXJpbmctZGF0YS1leGNoYW5nZS1zZWFyY2gvaW1wb3J0LXJlcG9ydC1wb3B1cC9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcY29sbGFib3JhdGl2ZS1jb2NrcGl0XFxlbmdpbmVlcmluZy1kYXRhLWV4Y2hhbmdlLXNlYXJjaFxcaW1wb3J0LXJlcG9ydC1wb3B1cFxcaW1wb3J0LXJlcG9ydC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vY29sbGFib3JhdGl2ZS1jb2NrcGl0L2VuZ2luZWVyaW5nLWRhdGEtZXhjaGFuZ2Utc2VhcmNoL2ltcG9ydC1yZXBvcnQtcG9wdXAvaW1wb3J0LXJlcG9ydC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vZGFsLWhlaWdodCB7XHJcbiAgaGVpZ2h0OiAyOHJlbTtcclxufVxyXG5cclxuLnRleHRhcmVhLWhlaWdodCB7XHJcbiAgaGVpZ2h0OiAxOHJlbTtcclxufVxyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/engineering-data-exchange-search/import-report-popup/import-report-popup.component.ts':
      /*!**********************************************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/engineering-data-exchange-search/import-report-popup/import-report-popup.component.ts ***!
  \**********************************************************************************************************************************/
      /*! exports provided: ImportReportPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ImportReportPopupComponent',
          function() {
            return ImportReportPopupComponent;
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

        var ImportReportPopupComponent = /** @class */ (function() {
          function ImportReportPopupComponent() {
            this.componentId = 'ImportReportPopupComponent';
            this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          }
          Object.defineProperty(ImportReportPopupComponent.prototype, 'display', {
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
          ImportReportPopupComponent.prototype.ngOnInit = function() {
            if (this.importReportMessage === '') {
              this.close();
            }
          };
          ImportReportPopupComponent.prototype.close = function() {
            this.display = false;
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            ImportReportPopupComponent.prototype,
            'display',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            ImportReportPopupComponent.prototype,
            'displayChange',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            ImportReportPopupComponent.prototype,
            'importReportMessage',
            void 0
          );
          ImportReportPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-import-report-popup',
                template: __webpack_require__(
                  /*! ./import-report-popup.component.html */ './src/app/main/collaborative-cockpit/engineering-data-exchange-search/import-report-popup/import-report-popup.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./import-report-popup.component.scss */ './src/app/main/collaborative-cockpit/engineering-data-exchange-search/import-report-popup/import-report-popup.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            ImportReportPopupComponent
          );
          return ImportReportPopupComponent;
        })();

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/fleet-data-exchange/fleet-data-exchange.component.html':
      /*!***************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/fleet-data-exchange/fleet-data-exchange.component.html ***!
  \***************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ componentData.componentId + ".fleetDataExchange" | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle">\r\n        {{ "page.searchPage" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <!--Type format data-->\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="row">\r\n                <div class="section flex--1">\r\n                  <h4 class="section-title">{{ componentData.componentId + ".type" | translate }}</h4>\r\n                  <div class="section-content">\r\n                    <div class="form-group form-group-select-buton">\r\n                      <label class="form-label"> &nbsp; </label>\r\n\r\n                      <div class="form-control aw-selectbutton-wrapper">\r\n                        <p-selectButton\r\n                          [(ngModel)]="type"\r\n                          [options]="propertyTypeList"\r\n                          (onChange)="onTypeChange($event)"\r\n                        ></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="section flex--1">\r\n                  <h4 class="section-title">{{ componentData.componentId + ".format" | translate }}</h4>\r\n                  <div class="section-content">\r\n                    <div class="form-group form-group-select-buton">\r\n                      <label class="form-label"> &nbsp; </label>\r\n\r\n                      <div class="form-control aw-selectbutton-wrapper">\r\n                        <p-selectButton\r\n                          [(ngModel)]="format"\r\n                          [options]="propertyFormatList"\r\n                          (onChange)="onFormatChange()"\r\n                        ></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="section flex--1"></div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <h4 class="section-title">{{ componentData.componentId + ".data" | translate }}</h4>\r\n                <div class="section-content">\r\n                  <div class="form-group form-group-select-buton">\r\n                    <label class="form-label"> &nbsp; </label>\r\n\r\n                    <div class="form-control aw-selectbutton-wrapper">\r\n                      <p-selectButton\r\n                        [(ngModel)]="data"\r\n                        [options]="propertyDataList"\r\n                        (onChange)="onDataChange()"\r\n                      ></p-selectButton>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section" *ngIf="showSearchCriteria">\r\n                <div class="row">\r\n                  <div class="form-group flex--4" [ngClass]="{ required: true }">\r\n                    <label class="form-label"> {{ componentData.componentId + ".family" | translate }} </label>\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        (onChange)="changeFamilyType($event)"\r\n                        class="aw-dropdown fixed-width"\r\n                        [(ngModel)]="family"\r\n                        [options]="propertyFamilyList"\r\n                        placeholder="&nbsp;"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--4" [ngClass]="{ required: true }">\r\n                    <label class="form-label"> {{ componentData.componentId + ".variant" | translate }} </label>\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        (onChange)="changedVariantType($event)"\r\n                        class="aw-dropdown fixed-width"\r\n                        [showClear]="true"\r\n                        [(ngModel)]="variant"\r\n                        [options]="propertyVariantList"\r\n                        placeholder="&nbsp;"\r\n                      >\r\n                      </p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--4"></div>\r\n                  <div class="form-group flex--4"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- For Export>Excel>Asset -->\r\n      <div class="grid-row" *ngIf="showAssetPanel()">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ componentData.componentId + ".assestDataExport" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label selectedFV">\r\n                        {{ componentData.componentId + ".familyVariantSelected" | translate }}:\r\n                        {{ familyAndVariantSelected() }}\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <h4 class="section-title">\r\n                  {{ componentData.componentId + ".topAsset" | translate }}\r\n                </h4>\r\n\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".assetCode" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control form-control-with-btn" [ngClass]="{ disabled: isReadOpenMode }">\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [(ngModel)]="assetDataExport.equipmentCriteria.equipmentCode"\r\n                        />\r\n                        <i\r\n                          class="fa fa-fw fa-search aw-icon"\r\n                          aria-hidden="true"\r\n                          pTooltip="{{ \'global.search\' | translate }}"\r\n                          tooltipPosition="top"\r\n                          (click)="openAdvanceSearchDialog()"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">P/N</label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [(ngModel)]="assetDataExport.equipmentCriteria.pnCode"\r\n                          [disabled]="true"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">S/N</label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [(ngModel)]="assetDataExport.equipmentCriteria.sn"\r\n                          [disabled]="true"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".name" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" class="aw-input" [(ngModel)]="nameTxt" [disabled]="true" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".designation" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [(ngModel)]="assetDataExport.equipmentCriteria.equipmentDesignation"\r\n                          [disabled]="true"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <h4 class="section-title">{{ componentData.componentId + ".selAssestDataExport" | translate }}:</h4>\r\n\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".familyVariant" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="assetDataExport.familyVariantCodeSelected"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        P/N\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="assetDataExport.pnSelected"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        S/N\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="assetDataExport.snSelected"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".assetCode" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="assetDataExport.codeSelected"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".ownerCode" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="assetDataExport.ownerCodeSelected"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".operatorCode" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="assetDataExport.operatorCodeSelected"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".registration" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="assetDataExport.registrationSelected"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".designation" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="assetDataExport.designationSelected"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".function" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="assetDataExport.functionSelected"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".operationStatus" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="assetDataExport.operationalStatusSelected"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".eisDate" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="assetDataExport.eisDateSelected"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".superiorAssetCode" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="assetDataExport.superiorAssetCodeSelected"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".functionCode" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="assetDataExport.functionCodeSelected"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".lifeRestriction" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="assetDataExport.lifeRestrictionSelected"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="row search-criteria-footer">\r\n                    <div class="search-actions">\r\n                      <button type="button" class="btn-with-spinner" mat-raised-button (click)="export()">\r\n                        <span class="lds-hourglass" *ngIf="showSpinner"></span>\r\n                        {{ componentData.componentId + ".export" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="showTabs()" class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3\r\n                  class="grid-cell-title"\r\n                  *ngIf="data === component.fleet"\r\n                  [ngClass]="{ active: tabFleetId === currentTabsId }"\r\n                  (click)="openFleetTab()"\r\n                >\r\n                  {{ componentData.componentId + ".importFleet" | translate }}\r\n                </h3>\r\n\r\n                <h3\r\n                  class="grid-cell-title"\r\n                  *ngIf="data === component.counterUpdates"\r\n                  [ngClass]="{ active: tabCounterId === currentTabsId }"\r\n                  (click)="openCounterTab()"\r\n                >\r\n                  {{ componentData.componentId + ".importCounterUpdates" | translate }}\r\n                </h3>\r\n\r\n                <h3\r\n                  class="grid-cell-title"\r\n                  *ngIf="type === component.loading && format === component.excel && data === component.flights"\r\n                  [ngClass]="{ active: tabExcelFlightsId === currentTabsId }"\r\n                  (click)="openFlightsTab()"\r\n                >\r\n                  {{ componentData.componentId + ".importExcelFlights" | translate }}\r\n                </h3>\r\n\r\n                <h3\r\n                  class="grid-cell-title"\r\n                  *ngIf="data === component.usageModel"\r\n                  [ngClass]="{ active: tabUsageId === currentTabsId }"\r\n                  (click)="openUsageTab()"\r\n                >\r\n                  {{ componentData.componentId + ".importUsageModel" | translate }}\r\n                </h3>\r\n\r\n                <h3\r\n                  class="grid-cell-title"\r\n                  *ngIf="type === component.loading && data === component.configEvents"\r\n                  [ngClass]="{ active: tabImportConfigurationId === currentTabsId }"\r\n                  (click)="openImportConfigurationTab()"\r\n                >\r\n                  {{ componentData.componentId + ".importConfiguration" | translate }}\r\n                </h3>\r\n\r\n                <h3\r\n                  class="grid-cell-title"\r\n                  *ngIf="type === component.loading && format === component.xml && data === component.flights"\r\n                  [ngClass]="{ active: tabImportXmlFlightId === currentTabsId }"\r\n                  (click)="openImportFlightTab()"\r\n                >\r\n                  {{ componentData.componentId + ".importXmlFlights" | translate }}\r\n                </h3>\r\n\r\n                <h3\r\n                  class="grid-cell-title"\r\n                  *ngIf="data === component.globalImport"\r\n                  [ngClass]="{ active: tabGlobalImportId === currentTabsId }"\r\n                  (click)="openGlobalImportTab()"\r\n                >\r\n                  {{ componentData.componentId + ".importGlobal" | translate }}\r\n                </h3>\r\n\r\n                <h3\r\n                  class="grid-cell-title"\r\n                  *ngIf="type === component.export && data === component.configEvents"\r\n                  [ngClass]="{ active: tabExportConfigurationId === currentTabsId }"\r\n                  (click)="openExportConfigurationTab()"\r\n                >\r\n                  {{ componentData.componentId + ".exportConfiguration" | translate }}\r\n                </h3>\r\n\r\n                <h3\r\n                  class="grid-cell-title"\r\n                  *ngIf="type === component.export && format === component.xml && data === component.flights"\r\n                  [ngClass]="{ active: tabExportXmlFlightId === currentTabsId }"\r\n                  (click)="openExportFlightTab()"\r\n                >\r\n                  {{ componentData.componentId + ".exportXmlFlights" | translate }}\r\n                </h3>\r\n\r\n                <h3\r\n                  class="grid-cell-title"\r\n                  *ngIf="data === component.globalExport"\r\n                  [ngClass]="{ active: tabGlobalExportId === currentTabsId }"\r\n                  (click)="openGlobalExportTab()"\r\n                >\r\n                  {{ componentData.componentId + ".exportGlobal" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf="showImportPanel && showReportTables()" class="grid-cell-content">\r\n              <div class="column">\r\n                <div *ngIf="data !== \'Global\'" class="grid-row">\r\n                  <div class="form-group">\r\n                    <label class="form-label selectedFV">\r\n                      <span\r\n                        (click)="openTemplate(loadTemplate())"\r\n                        style="cursor: pointer; text-decoration: underline; color: blue"\r\n                      >\r\n                        {{ loadTemplate() }}\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n\r\n                <div\r\n                  *ngIf="\r\n                    showSearchCriteria &&\r\n                    type === component.loading &&\r\n                    format === component.excel &&\r\n                    data === component.fleet\r\n                  "\r\n                  class="grid-row"\r\n                >\r\n                  <div class="form-group">\r\n                    <label class="form-label selectedFV">\r\n                      <span>\r\n                        {{ componentData.componentId + ".familyVariant" | translate }}:\r\n                        {{ familyAndVariantSelected() }}\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-row grid-cell--3">\r\n                  <div class="form-group">\r\n                    <label\r\n                      class="form-label selectedFV"\r\n                      *ngIf="type === component.loading && format === component.excel && data === component.fleet"\r\n                    >\r\n                      {{ componentData.componentId + ".fleetDataFileToImport" | translate }}\r\n                    </label>\r\n                    <label\r\n                      class="form-label selectedFV"\r\n                      *ngIf="\r\n                        type === component.loading && format === component.excel && data === component.counterUpdates\r\n                      "\r\n                    >\r\n                      {{ componentData.componentId + ".counterUpdatesFileToImport" | translate }}\r\n                    </label>\r\n                    <label\r\n                      class="form-label selectedFV"\r\n                      *ngIf="type === component.loading && format === component.excel && data === component.flights"\r\n                    >\r\n                      {{ componentData.componentId + ".excelFlightsFileToImport" | translate }}\r\n                    </label>\r\n                    <label\r\n                      class="form-label selectedFV"\r\n                      *ngIf="type === component.loading && format === component.excel && data === \'Usage Model\'"\r\n                    >\r\n                      {{ componentData.componentId + ".usageModelFileToImport" | translate }}\r\n                    </label>\r\n                    <label\r\n                      class="form-label selectedFV"\r\n                      *ngIf="type === component.loading && format === component.xml && data === component.configEvents"\r\n                    >\r\n                      {{ componentData.componentId + ".configurationAndEventsFileToImport" | translate }}\r\n                    </label>\r\n                    <label\r\n                      class="form-label selectedFV"\r\n                      *ngIf="type === component.loading && format === component.xml && data === component.flights"\r\n                    >\r\n                      {{ componentData.componentId + ".xmlFlightsFileToImport" | translate }}\r\n                    </label>\r\n                    <label\r\n                      class="form-label selectedFV"\r\n                      *ngIf="type === component.loading && format === component.zip && data === \'Global Import\'"\r\n                    >\r\n                      {{ componentData.componentId + ".globalImportFileToImport" | translate }}\r\n                    </label>\r\n                    <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n                      <div class="form-control-data">\r\n                        {{ fileName }}\r\n                      </div>\r\n\r\n                      <div class="btn-file-upload-wrapper">\r\n                        <p-fileUpload\r\n                          #fileUploader\r\n                          *ngIf="!isReadOpenMode"\r\n                          class="aw-fileupload"\r\n                          name="document[]"\r\n                          customUpload="true"\r\n                          mode="basic"\r\n                          auto="true"\r\n                          chooseLabel=""\r\n                          [disabled]="enableImport()"\r\n                          (uploadHandler)="uploadDocument($event, fileUploader)"\r\n                        ></p-fileUpload>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label\r\n                      *ngIf="\r\n                        showSearchCriteria &&\r\n                        type === component.loading &&\r\n                        format === component.excel &&\r\n                        data === component.fleet\r\n                      "\r\n                      class="form-label selectedFV"\r\n                    >\r\n                      {{ componentData.componentId + ".oldEquipCheckbox" | translate }}\r\n                    </label>\r\n                    <label\r\n                      *ngIf="\r\n                        type === component.loading && format === component.excel && data === component.counterUpdates\r\n                      "\r\n                      class="form-label selectedFV"\r\n                    >\r\n                      {{ componentData.componentId + ".simPropagationChkBox" | translate }}\r\n                    </label>\r\n                    <div class="form-control">\r\n                      <p-checkbox\r\n                        *ngIf="\r\n                          showSearchCriteria &&\r\n                          type === component.loading &&\r\n                          format === component.excel &&\r\n                          data === component.fleet\r\n                        "\r\n                        binary="true"\r\n                        class="aw-checkbox"\r\n                        [(ngModel)]="oldEquipCheckbox"\r\n                      ></p-checkbox>\r\n                      <p-checkbox\r\n                        *ngIf="\r\n                          type === component.loading && format === component.excel && data === component.counterUpdates\r\n                        "\r\n                        binary="true"\r\n                        class="aw-checkbox"\r\n                        [(ngModel)]="simPropagationCheckbox"\r\n                      ></p-checkbox>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div\r\n              *ngIf="\r\n                tabExportReportId !== currentTabsId &&\r\n                type === component.export &&\r\n                ((format == component.xml && (data === component.configEvents || data === component.flights)) ||\r\n                  (format == component.zip && data === component.globalExport))\r\n              "\r\n              class="grid-cell-content grid-cell-content-with-section"\r\n            >\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group flex--1">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".exportData" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-calendar\r\n                          showButtonBar="true"\r\n                          [monthNavigator]="true"\r\n                          [yearNavigator]="true"\r\n                          [yearRange]="sessionService.calendarYearRange"\r\n                          class="aw-calendar"\r\n                          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                          [locale]="sessionService.calendarFormat"\r\n                          [(ngModel)]="exportDataFrom"\r\n                          [disabled]="isReadOnlyForm"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group flex--3"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div\r\n                *ngIf="\r\n                  (format == component.xml && (data === component.configEvents || data === component.flights)) ||\r\n                  (format == component.zip && data === component.globalExport)\r\n                "\r\n                class="section"\r\n              >\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".lockAsset" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox binary="true" class="aw-checkbox" [(ngModel)]="lockAssetCheckbox"></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".exportEngineeringData" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox binary="true" class="aw-checkbox" [(ngModel)]="exportEngineeringData"></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <h4 class="section-title">\r\n                  {{ componentData.componentId + ".assetSelection" | translate }}\r\n                </h4>\r\n\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      #ptableAssetSelection\r\n                      class="aw-table2"\r\n                      [columns]="assetSelectionTableCols"\r\n                      [value]="superiorTable"\r\n                      [(selection)]="selectedAssetTask"\r\n                      [scrollable]="true"\r\n                    >\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedAssetTask.length > 0 }">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableAssetSelectionGlobalFilter\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="ptableAssetSelection.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class="aw-table-actions">\r\n                            <button\r\n                              *ngIf="selectedAssetTask.length > 0"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="deleteAssets()"\r\n                            >\r\n                              {{ "global.delete" | translate }}\r\n                            </button>\r\n\r\n                            <button type="button" mat-raised-button (click)="openAssetsSelectionDialog()">\r\n                              {{ "global.add" | translate }}\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col class="aw-table-checkbox-wrapper" />\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th class="aw-table-checkbox-wrapper">\r\n                            <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                          </th>\r\n\r\n                          <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                            {{ componentData.componentId + "." + col.field | translate }}\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                          <td class="aw-table-checkbox-wrapper">\r\n                            <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                          </td>\r\n\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment, \'min-width\': \'75rem\' }"\r\n                          >\r\n                            <div *ngSwitchDefault>\r\n                              {{ rowData[col.field] }}\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n\r\n                  <div class="row search-criteria-footer">\r\n                    <div class="search-actions">\r\n                      <button type="button" class="btn-with-spinner" mat-raised-button (click)="export()">\r\n                        <span class="lds-hourglass" *ngIf="showSpinner"></span>\r\n                        {{ componentData.componentId + ".export" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf="showImportPanel && showReportTables()" class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <button\r\n                      *ngIf="type === component.loading && format === component.xml && data === component.configEvents"\r\n                      type="button"\r\n                      mat-raised-button\r\n                      (click)="import(1)"\r\n                      [ngClass]="{ inactive: fileName === \'\' }"\r\n                    >\r\n                      {{ componentData.componentId + ".simulate" | translate }}\r\n                    </button>\r\n                    <button\r\n                      type="button"\r\n                      class="btn-with-spinner"\r\n                      mat-raised-button\r\n                      (click)="import(0)"\r\n                      [ngClass]="{ inactive: fileName === \'\' }"\r\n                    >\r\n                      <span class="lds-hourglass" *ngIf="showSpinner"></span>\r\n                      {{ componentData.componentId + ".importFile" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="showTabs()" class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3\r\n                  class="grid-cell-title"\r\n                  *ngIf="showImportReports()"\r\n                  [ngClass]="{ active: tabImportReportId === currentTabsId }"\r\n                  (click)="openImportReportsTab()"\r\n                >\r\n                  {{ componentData.componentId + ".importReports" | translate }} ({{ reports ? reports.length : 0 }})\r\n                </h3>\r\n\r\n                <h3\r\n                  class="grid-cell-title"\r\n                  *ngIf="showExportReports()"\r\n                  [ngClass]="{ active: tabExportReportId === currentTabsId }"\r\n                  (click)="openExportReportsTab()"\r\n                >\r\n                  {{ componentData.componentId + ".exportReports" | translate }} ({{ reports ? reports.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <!--For archived import reports-->\r\n            <div class="grid-cell-content">\r\n              <div\r\n                *ngIf="showImportPanel && type && format && data"\r\n                [ngClass]="{ display: tabImportReportId === currentTabsId ? \'flex\' : \'none\' }"\r\n              >\r\n                <p-table\r\n                  [resizableColumns]="true"\r\n                  #ptableImportReports\r\n                  class="aw-table2"\r\n                  [columns]="reportTableCols"\r\n                  [value]="reports"\r\n                  [(selection)]="selectedReports"\r\n                  [scrollable]="true"\r\n                >\r\n                  <ng-template pTemplate="emptymessage">\r\n                    <span *ngIf="!isReportLoading"> &nbsp;</span>\r\n\r\n                    <div *ngIf="isReportLoading" class="aw-table-loading-indicator">\r\n                      <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                      <div class="lds-hourglass"></div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="caption">\r\n                    <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedReports.length > 0 }">\r\n                      <div class="aw-table-global-filter">\r\n                        <label class="aw-table-global-filter-label">\r\n                          <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                        </label>\r\n\r\n                        <input\r\n                          #ptableImportReportGlobalFilter\r\n                          class="aw-table-global-filter-input"\r\n                          type="text"\r\n                          placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                          (input)="ptableImportReports.filterGlobal($event.target.value, \'contains\')"\r\n                        />\r\n                      </div>\r\n\r\n                      <div class="aw-table-actions">\r\n                        <button\r\n                          *ngIf="selectedReports.length > 0"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="deleteReports()"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="colgroup" let-columns>\r\n                    <colgroup>\r\n                      <col class="aw-table-checkbox-wrapper" />\r\n                      <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                    </colgroup>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="header" let-columns>\r\n                    <tr>\r\n                      <th class="aw-table-checkbox-wrapper">\r\n                        <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                      </th>\r\n\r\n                      <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                        {{ componentData.componentId + "." + col.field | translate }}\r\n                      </th>\r\n                    </tr>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                    <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                      <td class="aw-table-checkbox-wrapper">\r\n                        <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                      </td>\r\n\r\n                      <td\r\n                        *ngFor="let col of columns"\r\n                        [ngSwitch]="col.field"\r\n                        [ngStyle]="{ \'text-align\': col.alignment }"\r\n                      >\r\n                        <div *ngSwitchCase="\'reportName\'">\r\n                          <span\r\n                            (click)="openReportDetail(rowData)"\r\n                            style="cursor: pointer; text-decoration: underline; color: blue"\r\n                          >\r\n                            {{ rowData[col.field] }}\r\n                          </span>\r\n                        </div>\r\n                        <div *ngSwitchCase="\'statusDate\'">\r\n                          <span>\r\n                            {{ rowData[col.field] | date: "dd/MM/yyyy HH:mm:ss":"":translateService.currentLang }}\r\n                          </span>\r\n                        </div>\r\n                        <div *ngSwitchDefault>\r\n                          {{ rowData[col.field] }}\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </p-table>\r\n              </div>\r\n\r\n              <div\r\n                *ngIf="\r\n                  tabExportReportId !== currentTabsId &&\r\n                  type === component.export &&\r\n                  ((format == component.xml && (data === component.configEvents || data === component.flights)) ||\r\n                    (format == component.zip && data === component.globalExport))\r\n                "\r\n                [ngClass]="{ display: tabExportReportId === currentTabsId ? \'flex\' : \'none\' }"\r\n              >\r\n                <p-table\r\n                  [resizableColumns]="true"\r\n                  #ptableExportReports\r\n                  class="aw-table2"\r\n                  [columns]="exportReportTableCols"\r\n                  [value]="reports"\r\n                  [(selection)]="selectedExportReports"\r\n                  [scrollable]="true"\r\n                >\r\n                  <ng-template pTemplate="emptymessage">\r\n                    <span *ngIf="!isReportLoading"> &nbsp;</span>\r\n\r\n                    <div *ngIf="isReportLoading" class="aw-table-loading-indicator">\r\n                      <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                      <div class="lds-hourglass"></div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="caption">\r\n                    <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedExportReports.length > 0 }">\r\n                      <div class="aw-table-global-filter">\r\n                        <label class="aw-table-global-filter-label">\r\n                          <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                        </label>\r\n\r\n                        <input\r\n                          #ptableExportReportGlobalFilter\r\n                          class="aw-table-global-filter-input"\r\n                          type="text"\r\n                          placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                          (input)="ptableExportReports.filterGlobal($event.target.value, \'contains\')"\r\n                        />\r\n                      </div>\r\n\r\n                      <div class="aw-table-actions">\r\n                        <button\r\n                          *ngIf="selectedExportReports.length > 0"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="deleteExportReports()"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="colgroup" let-columns>\r\n                    <colgroup>\r\n                      <col class="aw-table-checkbox-wrapper" />\r\n                      <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                    </colgroup>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="header" let-columns>\r\n                    <tr>\r\n                      <th class="aw-table-checkbox-wrapper">\r\n                        <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                      </th>\r\n\r\n                      <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                        {{ componentData.componentId + "." + col.field | translate }}\r\n                      </th>\r\n                    </tr>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                    <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                      <td class="aw-table-checkbox-wrapper">\r\n                        <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                      </td>\r\n\r\n                      <td\r\n                        *ngFor="let col of columns"\r\n                        [ngSwitch]="col.field"\r\n                        [ngStyle]="{ \'text-align\': col.alignment }"\r\n                      >\r\n                        <div *ngSwitchCase="\'reportName\'">\r\n                          <span\r\n                            (click)="openReportDetail(rowData)"\r\n                            style="cursor: pointer; text-decoration: underline; color: blue"\r\n                          >\r\n                            {{ rowData[col.field] }}\r\n                          </span>\r\n                        </div>\r\n                        <div *ngSwitchCase="\'statusDate\'">\r\n                          <span>\r\n                            {{ rowData[col.field] | date: "dd/MM/yyyy HH:mm:ss":"":translateService.currentLang }}\r\n                          </span>\r\n                        </div>\r\n                        <div *ngSwitchDefault>\r\n                          {{ rowData[col.field] }}\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </p-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-dialog-search-equipment\r\n    *ngIf="showQuickSearchEquipmentDialog"\r\n    [(display)]="showQuickSearchEquipmentDialog"\r\n    [equipment-code]="assetCodeTxt"\r\n    [family-variant]="getFamilyVariant()"\r\n    (onSelected)="setSelectedAsset($event)"\r\n  ></aw-dialog-search-equipment>\r\n\r\n  <aw-assets-selection-dialog\r\n    *ngIf="showAssetsSelectionDialog"\r\n    [(display)]="showAssetsSelectionDialog"\r\n    [showAssetsSelectionDialog]="showAssetsSelectionDialog"\r\n    (onSelected)="setSelectedAssetsFromSelectionDilog($event)"\r\n  ></aw-assets-selection-dialog>\r\n\r\n  <aw-import-report-popup\r\n    *ngIf="showImportReportMessage"\r\n    [importReportMessage]="importReportMessage"\r\n    [(display)]="showImportReportMessage"\r\n  ></aw-import-report-popup>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/fleet-data-exchange/fleet-data-exchange.component.scss':
      /*!***************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/fleet-data-exchange/fleet-data-exchange.component.scss ***!
  \***************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .selectedFV {\n  width: 200%; }\n\n:host .form-group-select-buton {\n  margin-top: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb2xsYWJvcmF0aXZlLWNvY2twaXQvZmxlZXQtZGF0YS1leGNoYW5nZS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcY29sbGFib3JhdGl2ZS1jb2NrcGl0XFxmbGVldC1kYXRhLWV4Y2hhbmdlXFxmbGVldC1kYXRhLWV4Y2hhbmdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBVyxFQUFBOztBQUZmO0VBTUksd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbGxhYm9yYXRpdmUtY29ja3BpdC9mbGVldC1kYXRhLWV4Y2hhbmdlL2ZsZWV0LWRhdGEtZXhjaGFuZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLnNlbGVjdGVkRlYge1xyXG4gICAgd2lkdGg6IDIwMCU7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1ncm91cC1zZWxlY3QtYnV0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/fleet-data-exchange/fleet-data-exchange.component.ts':
      /*!*************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/fleet-data-exchange/fleet-data-exchange.component.ts ***!
  \*************************************************************************************************/
      /*! exports provided: FleetDataExchangeComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FleetDataExchangeComponent',
          function() {
            return FleetDataExchangeComponent;
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
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _fleet_data_exchange_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./fleet-data-exchange.service */ './src/app/main/collaborative-cockpit/fleet-data-exchange/fleet-data-exchange.service.ts'
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

        var FileExtensions;
        (function(FileExtensions) {
          FileExtensions['txt'] = 'txt';
          FileExtensions['xls'] = 'xls';
          FileExtensions['xlsx'] = 'xlsx';
          FileExtensions['xml'] = 'xml';
          FileExtensions['zip'] = 'zip';
        })(FileExtensions || (FileExtensions = {}));
        var FleetDataExchangeComponent = /** @class */ (function(_super) {
          __extends(FleetDataExchangeComponent, _super);
          function FleetDataExchangeComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            translateService,
            confirmationService,
            fleetDataExchangeService,
            datepipe,
            sessionService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.translateService = translateService;
            _this.confirmationService = confirmationService;
            _this.fleetDataExchangeService = fleetDataExchangeService;
            _this.datepipe = datepipe;
            _this.sessionService = sessionService;
            _this.component = FleetDataExchangeComponent_1;
            _this.showExportComponents = false;
            _this.showImportComponents = false;
            _this.tabFleetId = 'fleet';
            _this.tabImportReportId = 'importReports';
            _this.tabCounterId = 'counterUpdates';
            _this.tabExcelFlightsId = 'flights';
            _this.tabUsageId = 'usageModel';
            _this.tabImportConfigurationId = 'importConfiguration';
            _this.tabImportXmlFlightId = 'importFlight';
            _this.tabGlobalImportId = 'globalImport';
            _this.tabExportConfigurationId = 'exportConfiguration';
            _this.tabExportXmlFlightId = 'exportFlight';
            _this.tabGlobalExportId = 'globalExport';
            _this.tabExportReportId = 'exportReports';
            _this.showSearchCriteria = false;
            _this.getFamilyVariantOutputDTO = [];
            _this.familyCode = '';
            _this.structureType = '';
            _this.variantCode = '';
            _this.familyName = '';
            _this.variantName = '';
            _this.exportDataFrom = undefined;
            _this.tabAssetSelectionId = 'assetSelection';
            _this.tabExportReportId = 'exportReport';
            _this.currentTabId = _this.tabAssetSelectionId;
            _this.propertyDataList = [];
            _this.propertyTypeList = [];
            _this.propertyFormatList = [
              { label: _this.getTranslation('excel'), value: _this.component.excel },
              { label: _this.getTranslation('xml'), value: _this.component.xml },
              { label: _this.getTranslation('zip'), value: _this.component.zip }
            ];
            _this.propertyFamilyList = [];
            _this.propertyVariantList = [];
            _this.assetDataExportCheckbox = _this.resetAssetExpChkBoxes();
            _this.lockAssetCheckbox = false;
            _this.exportEngineeringData = true;
            _this.oldEquipCheckbox = false;
            _this.simPropagationCheckbox = false;
            _this.showSpinner = false;
            _this.assetDataExport = {
              equipmentCriteria: {},
              familyVariantCodeSelected: true,
              codeSelected: true,
              pnSelected: true,
              snSelected: true,
              designationSelected: true,
              eisDateSelected: true,
              functionCodeSelected: true,
              functionSelected: true,
              lifeRestrictionSelected: true,
              operationalStatusSelected: true,
              registrationSelected: true,
              superiorAssetCodeSelected: true,
              operatorCodeSelected: true,
              ownerCodeSelected: true
            };
            _this.importReportMessage = '';
            _this.showImportReportMessage = false;
            _this.showAssetsSelectionDialog = false;
            _this.translateService.onLangChange.subscribe(function(_) {
              _this.loadDropDownLists();
            });
            _this.equipment = {
              bidoEquipmentDTO: {},
              type: ''
            };
            _this.setTableCols();
            _this.selectedReports = [];
            _this.selectedExportReports = [];
            _this.selectedAssetTask = [];
            _this.superiorTable = [];
            _this.isReportLoading = false;
            return _this;
          }
          FleetDataExchangeComponent_1 = FleetDataExchangeComponent;
          FleetDataExchangeComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
            this.equipment = {
              bidoEquipmentDTO: {},
              type: ''
            };
            this.loadDropDownLists();
          };
          FleetDataExchangeComponent.prototype.getComponentName = function() {
            return 'FleetDataExchangeComponent';
          };
          // Load Dropdown with data at initial
          FleetDataExchangeComponent.prototype.loadDropDownLists = function() {
            var _this = this;
            this.fleetDataExchangeService.findTypeList().subscribe(
              function(results) {
                _this.propertyTypeList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_15__['ListUtils']
                  .orEmpty(results)
                  .map(function(elt) {
                    // FIXME
                    if (elt.value === 'Loading') {
                      elt.label = _this.translateService.instant('loading');
                    } else if (elt.value === 'Export') {
                      elt.label = _this.translateService.instant('export');
                    }
                    return elt;
                  });
                _this.type = _this.component.loading;
                _this.initializePropertyDataList();
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetTypeList'));
              }
            );
          };
          FleetDataExchangeComponent.prototype.loadFamilyVariantDropdowns = function() {
            var _this = this;
            var familyVariantInput = {
              useCase:
                _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_4__['BidoFunctionTypeConstants']
                  .UC_MCH_TASK,
              module:
                _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_4__['BidoFunctionTypeConstants']
                  .MODULE_FAMILY,
              familyCode: '',
              familyName: '',
              structureType: ''
            };
            this.fleetDataExchangeService.getBireFamilyVariant(familyVariantInput).subscribe(
              function(results) {
                var list = new Array();
                results.forEach(function(variantElement) {
                  list.push(variantElement.familyLabelValueDTO);
                  _this.getFamilyVariantOutputDTO = results;
                });
                _this.propertyFamilyList = list;
                _this.family = list[0].label;
                _this.loadVariantsForSelectedFamily();
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetFamilyVariantList'));
              }
            );
          };
          FleetDataExchangeComponent.prototype.getFamilyVariant = function() {
            this.getFamilyVariantComponents();
            return this.familyCode + '-' + this.variantCode;
          };
          FleetDataExchangeComponent.prototype.loadVariantsForSelectedFamily = function() {
            var _this = this;
            this.propertyVariantList = [];
            var list = [];
            this.getFamilyVariantOutputDTO.forEach(function(result) {
              if (result.familyLabelValueDTO.label === _this.family) {
                result.variantLabelValueDTO.forEach(function(object) {
                  var element = {
                    label: object.variantCode + '-' + object.structureType + '-' + object.variantName,
                    value: object.variantLabelValue.value
                  };
                  list.push(element);
                });
                _this.propertyVariantList = list;
              }
            });
          };
          FleetDataExchangeComponent.prototype.familyAndVariantSelected = function() {
            this.getFamilyVariantComponents();
            return this.family + '/' + this.variantCode + '-' + this.variantName + '/' + this.structureType;
          };
          // Change event of Type and format
          FleetDataExchangeComponent.prototype.onTypeChange = function(event) {
            this.format = undefined;
            if (event.value === null) {
              this.data = undefined;
              this.resetScreen();
            } else if (event.value === this.component.loading) {
              this.propertyFormatList = [
                { label: this.getTranslation('excel'), value: this.component.excel },
                { label: this.getTranslation('xml'), value: this.component.xml },
                { label: this.getTranslation('zip'), value: this.component.zip }
              ];
              this.initializePropertyDataList();
              this.data = undefined;
            } else if (event.value === this.component.export) {
              this.propertyFormatList = [
                { label: this.getTranslation('excel'), value: this.component.excel },
                { label: this.getTranslation('xml'), value: this.component.xml },
                { label: this.getTranslation('zip'), value: this.component.zip }
              ];
              this.format = this.component.excel;
              // Pre-select 'Asset'
              this.propertyDataList = [{ label: this.getTranslation('equipmentText'), value: this.component.asset }];
              this.data = this.component.asset;
              this.onDataChangeInit();
            }
            if (this.data !== this.component.asset) {
              this.showSearchCriteria = false;
            }
            this.clearSearchProperties();
            this.selectImportOrExportComponents();
            this.reports = [];
            this.fileName = '';
            this.selectedReports = [];
            this.resetScreen();
          };
          FleetDataExchangeComponent.prototype.onFormatChange = function() {
            this.data = undefined;
            if (this.format === null) {
              this.propertyDataList = [];
            }
            this.showSearchCriteria = false;
            this.selectImportOrExportComponents();
            this.resetScreen();
            if (!!this.format) {
              if (this.type === this.component.loading) {
                if (this.format === this.component.excel) {
                  this.initializePropertyDataList();
                } else if (this.format === this.component.xml) {
                  this.propertyDataList = [
                    { label: this.getTranslation('configEvents'), value: this.component.configEvents }
                  ];
                  this.data = this.component.configEvents;
                  this.onDataChange();
                } else if (this.format === this.component.zip) {
                  this.resetScreen();
                  this.propertyDataList = [
                    { label: this.getTranslation('globalImport'), value: this.component.globalImport }
                  ];
                  this.data = this.component.globalImport;
                  this.showSearchCriteria = this.validSearchCombination() ? this.checkSearchCriteria() : false;
                  this.alterImportTableCols();
                  this.loadReportList();
                  this.currentTabsId = this.tabGlobalImportId;
                } else {
                  this.propertyDataList = [];
                }
              } else if (this.type === this.component.export) {
                if (this.format === this.component.excel) {
                  this.propertyDataList = [
                    { label: this.getTranslation('equipmentText'), value: this.component.asset }
                  ];
                  // Pre-select 'Asset'
                  this.data = this.component.asset;
                  this.onDataChangeInit();
                } else if (this.format === this.component.xml) {
                  this.propertyDataList = [
                    { label: this.getTranslation('configEvents'), value: this.component.configEvents }
                  ];
                  this.data = this.component.configEvents;
                  this.onDataChange();
                } else if (this.format === this.component.zip) {
                  this.propertyDataList = [
                    { label: this.getTranslation('globalExport'), value: this.component.globalExport }
                  ];
                  this.data = this.component.globalExport;
                  this.onDataChange();
                }
              }
            }
          };
          FleetDataExchangeComponent.prototype.initializePropertyDataList = function() {
            this.format = this.component.excel;
            this.propertyDataList = [
              { label: this.getTranslation('fleet'), value: this.component.fleet },
              { label: this.getTranslation('counterUpdates'), value: this.component.counterUpdates },
              { label: this.getTranslation('usageModel'), value: this.component.usageModel }
            ];
          };
          FleetDataExchangeComponent.prototype.validFamilyVariantCombination = function() {
            if (!!this.family && !!this.variant) {
              return true;
            } else {
              return false;
            }
          };
          FleetDataExchangeComponent.prototype.validSearchCombination = function() {
            if (!!this.type && !!this.format && !!this.data) {
              return true;
            } else {
              return false;
            }
          };
          FleetDataExchangeComponent.prototype.selectImportOrExportComponents = function() {
            if (this.validSearchCombination()) {
              if (this.type === this.component.loading) {
                this.showImportComponents = true;
                this.showExportComponents = false;
              } else if (this.type === this.component.export) {
                this.showExportComponents = true;
                this.showImportComponents = false;
              } else {
                this.showImportComponents = false;
                this.showExportComponents = false;
              }
            }
          };
          FleetDataExchangeComponent.prototype.showImportReports = function() {
            var returnValue = false;
            if (this.type === this.component.loading) {
              if (this.format === this.component.excel) {
                switch (this.data) {
                  case this.component.fleet:
                    if (!!this.family && !!this.variant) {
                      returnValue = true;
                    }
                    break;
                  case this.component.counterUpdates:
                    returnValue = true;
                    break;
                  case this.component.flights:
                    returnValue = true;
                    break;
                  case this.component.usageModel:
                    returnValue = true;
                    break;
                  default:
                    returnValue = false;
                    break;
                }
              } else if (this.format === this.component.xml) {
                switch (this.data) {
                  case this.component.configEvents:
                    returnValue = true;
                    break;
                  case this.component.flights:
                    returnValue = true;
                    break;
                  default:
                    returnValue = false;
                    break;
                }
              } else if (this.format === this.component.zip) {
                returnValue = true;
              }
            }
            return returnValue;
          };
          FleetDataExchangeComponent.prototype.showExportReports = function() {
            var returnValue = false;
            if (this.type === this.component.export) {
              if (this.format === this.component.excel) {
                returnValue = false;
              } else if (this.format === this.component.xml) {
                switch (this.data) {
                  case this.component.configEvents:
                    returnValue = true;
                    break;
                  case this.component.flights:
                    returnValue = true;
                    break;
                  default:
                    return false;
                }
              } else if (this.format === this.component.zip && this.data === this.component.globalExport) {
                returnValue = true;
              }
            }
            return returnValue;
          };
          FleetDataExchangeComponent.prototype.showTabs = function() {
            var returnValue = false;
            if (this.data === this.component.fleet || this.data === this.component.asset) {
              if (!!this.variant && this.variant !== '') {
                if (this.showImportReports() || this.showExportReports()) {
                  returnValue = true;
                }
              }
            } else {
              if (this.showImportReports() || this.showExportReports()) {
                return true;
              }
            }
            return returnValue;
          };
          FleetDataExchangeComponent.prototype.loadTemplate = function() {
            var templateName = '';
            if (this.format === this.component.excel) {
              switch (this.data) {
                case this.component.fleet:
                  {
                    templateName = 'TEMPLATE_FLEET_DATA.xls';
                  }
                  break;
                case this.component.counterUpdates:
                  {
                    templateName = 'TEMPLATE_COUNTER.xls';
                  }
                  break;
                case this.component.flights:
                  {
                    templateName = 'Template_FLIGHTS_IMPORT.xls';
                  }
                  break;
                case this.component.usageModel:
                  {
                    templateName = 'TEMPLATE_USAGE_MODEL.xls';
                  }
                  break;
                default:
                  break;
              }
            } else if (this.format === this.component.xml) {
              switch (this.data) {
                case this.component.configEvents:
                  {
                    templateName = 'CONF_EVENT.xsd';
                  }
                  break;
                case this.component.flights:
                  {
                    templateName = 'Template_FLIGHTS_IMPORT.xsd';
                  }
                  break;
                default:
                  break;
              }
            }
            return templateName;
          };
          FleetDataExchangeComponent.prototype.openTemplate = function(templateName) {
            var _this = this;
            if (!!this.type && !!this.data && !!this.format) {
              var getTemplateInput = {
                type: this.type,
                data: this.data,
                format: this.format
              };
              this.fleetDataExchangeService.getTemplate(getTemplateInput).subscribe(function(result) {
                _this.downLoadFiles(result, templateName);
              });
            } else {
              _super.prototype.throwUnboundLocalError.call(
                this,
                'openTemplate',
                'this.type && this.data && this.format'
              );
            }
          };
          FleetDataExchangeComponent.prototype.downLoadFiles = function(docFile, docName) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_14__['FileUtils'].downloadFile(docFile, docName);
          };
          FleetDataExchangeComponent.prototype.resetScreen = function() {
            this.clearSearchProperties();
            this.getFamilyVariantComponents();
            this.file = {};
            this.fileName = '';
            this.resetCheckboxes();
            this.superiorTable = [];
            this.reports = [];
            this.exportDataFrom = undefined;
            this.assetDataExport.equipmentCriteria = {};
          };
          FleetDataExchangeComponent.prototype.resetCheckboxes = function() {
            this.oldEquipCheckbox = false;
            this.simPropagationCheckbox = false;
            this.lockAssetCheckbox = false;
            this.exportEngineeringData = true;
            this.assetDataExport.familyVariantCodeSelected = true;
            this.assetDataExport.codeSelected = true;
            this.assetDataExport.pnSelected = true;
            this.assetDataExport.snSelected = true;
            this.assetDataExport.designationSelected = true;
            this.assetDataExport.eisDateSelected = true;
            this.assetDataExport.functionCodeSelected = true;
            this.assetDataExport.functionSelected = true;
            this.assetDataExport.lifeRestrictionSelected = true;
            this.assetDataExport.operationalStatusSelected = true;
            this.assetDataExport.registrationSelected = true;
            this.assetDataExport.superiorAssetCodeSelected = true;
            this.assetDataExport.operatorCodeSelected = true;
            this.assetDataExport.ownerCodeSelected = true;
          };
          FleetDataExchangeComponent.prototype.onDataChangeInit = function() {
            this.resetScreen();
            if (this.data === this.component.fleet || this.data === this.component.asset) {
              this.loadFamilyVariantDropdowns();
            }
            this.showSearchCriteria = this.validSearchCombination() ? this.checkSearchCriteria() : false;
            this.alterImportTableCols();
            this.loadReportList();
          };
          // Event to show search panel
          FleetDataExchangeComponent.prototype.onDataChange = function() {
            this.onDataChangeInit();
            if (this.type === this.component.loading) {
              if (this.format === this.component.excel) {
                switch (this.data) {
                  case this.component.fleet:
                    {
                      if (this.validFamilyVariantCombination()) {
                        this.currentTabsId = this.tabFleetId;
                      }
                    }
                    break;
                  case this.component.counterUpdates:
                    this.currentTabsId = this.tabCounterId;
                    break;
                  case this.component.flights:
                    this.currentTabsId = this.tabExcelFlightsId;
                    break;
                  case this.component.usageModel:
                    this.currentTabsId = this.tabUsageId;
                    break;
                  default:
                    break;
                }
              } else if (this.format === this.component.xml) {
                switch (this.data) {
                  case this.component.configEvents:
                    this.currentTabsId = this.tabImportConfigurationId;
                    break;
                  case this.component.flights:
                    this.currentTabsId = this.tabImportXmlFlightId;
                    break;
                  default:
                    break;
                }
              } else if (this.format === this.component.zip) {
                this.data = this.component.globalImport;
                this.currentTabsId = this.tabGlobalImportId;
              }
            } else if (this.type === this.component.export) {
              if (this.format === this.component.excel) {
                if (this.data === this.component.asset) {
                  if (!!this.family && !!this.variant) {
                    // show form for asset data export
                  }
                }
              } else {
                switch (this.data) {
                  case this.component.configEvents:
                    this.currentTabsId = this.tabExportConfigurationId;
                    break;
                  case this.component.flights:
                    this.currentTabsId = this.tabExportXmlFlightId;
                    break;
                  case this.component.globalExport:
                    this.currentTabsId = this.tabGlobalExportId;
                    break;
                  default:
                    break;
                }
              }
            }
          };
          FleetDataExchangeComponent.prototype.checkSearchCriteria = function() {
            var returnValue = false;
            if (this.type === this.component.loading) {
              if (this.format === this.component.excel) {
                if (this.data === this.component.fleet) {
                  this.showImportPanel = false;
                  returnValue = true;
                } else {
                  this.showImportPanel = true;
                  returnValue = false;
                }
              } else if (this.format === this.component.xml || this.format === this.component.zip) {
                this.showImportPanel = true;
                returnValue = false;
              }
            } else {
              this.showImportPanel = false;
              if (this.format === this.component.xml) {
                returnValue = false;
              } else if (this.format === this.component.excel) {
                if (this.data === this.component.asset) {
                  returnValue = true;
                }
              } else {
                returnValue = false;
              }
            }
            return returnValue;
          };
          FleetDataExchangeComponent.prototype.showReportTables = function() {
            var returnValue = false;
            if (!(this.currentTabsId === this.tabImportReportId) && !(this.currentTabsId === this.tabExportReportId)) {
              returnValue = true;
            }
            return returnValue;
          };
          FleetDataExchangeComponent.prototype.showAssetPanel = function() {
            var returnValue = false;
            if (this.data === this.component.asset) {
              if (!!this.family && !!this.variant && this.variant !== '') {
                returnValue = true;
              }
            }
            return returnValue;
          };
          // Clearing search parmeters
          FleetDataExchangeComponent.prototype.clearSearchProperties = function() {
            this.family = undefined;
            this.variant = undefined;
            this.getFamilyVariantComponents();
          };
          // Change event of family dropdown
          FleetDataExchangeComponent.prototype.changeFamilyType = function() {
            this.variant = undefined;
            if (!this.family) {
              this.showImportPanel = false;
            } else {
              this.loadVariantsForSelectedFamily();
            }
          };
          // Change event of variant dropdown
          FleetDataExchangeComponent.prototype.changedVariantType = function() {
            if (this.variant !== '' && !!this.variant) {
              this.familyAndVariantSelected();
              this.showImportPanel = true;
              if (this.type === this.component.loading) {
                this.currentTabsId = this.tabFleetId;
              } else {
                if (this.data === this.component.asset) {
                  this.showAssetPanel();
                }
              }
              this.loadReportList();
            } else {
              this.showImportPanel = false;
              this.showAssetPanel();
            }
          };
          // Modifying table columns depending on search criteria
          FleetDataExchangeComponent.prototype.alterImportTableCols = function() {
            this.reports = [];
            if (this.type === this.component.loading) {
              if (this.showSearchCriteria) {
                this.reportTableCols = [
                  { field: 'familyVariantCode', alignment: 'center' },
                  { field: 'reportCode', alignment: 'center' },
                  { field: 'reportName', alignment: 'center', width: '25rem' },
                  { field: 'statusUser', alignment: 'center' },
                  { field: 'statusDate', alignment: 'center' }
                ];
              } else {
                this.reportTableCols = [
                  { field: 'reportCode', alignment: 'center' },
                  { field: 'reportName', alignment: 'center', width: '25rem' },
                  { field: 'statusUser', alignment: 'center' },
                  { field: 'statusDate', alignment: 'center' }
                ];
              }
            }
          };
          FleetDataExchangeComponent.prototype.getFamilyVariantComponents = function() {
            var _this = this;
            if (this.variant !== '' && !!this.variant) {
              this.propertyVariantList.forEach(function(variant) {
                if (variant.value === _this.variant) {
                  _this.getFamilyVariantOutputDTO.forEach(function(familyObject) {
                    if (familyObject.familyLabelValueDTO.label === _this.family) {
                      familyObject.variantLabelValueDTO.forEach(function(variantObject) {
                        if (variantObject.variantLabelValue.label === variant.value) {
                          _this.familyCode = variantObject.familyCode;
                          _this.structureType = variantObject.structureType;
                          _this.variantCode = variantObject.variantCode;
                          _this.familyName = variantObject.familyName;
                          _this.variantName = variantObject.variantName;
                        }
                      });
                    }
                  });
                }
              });
            } else {
              this.familyCode = undefined;
              this.structureType = undefined;
              this.variantCode = undefined;
              this.familyName = undefined;
              this.variantName = undefined;
            }
          };
          // Event to delete report entry
          FleetDataExchangeComponent.prototype.deleteReports = function() {
            var _this = this;
            if (this.selectedReports !== []) {
              var partialMessageKey_1 =
                this.selectedReports.length > 1 ? 'confirmDeleteSelectedReports' : 'confirmDeleteSelectedReport';
              var reports_1 = new Array();
              this.selectedReports.forEach(function(report) {
                if (report && report.reportId) {
                  var reportId = {
                    reportId: report.reportId
                  };
                  reports_1.push(reportId);
                }
              });
              this.confirmationService.confirmDelete({
                messageKey: this.getTranslateKey(partialMessageKey_1),
                accept: function() {
                  _this.fleetDataExchangeService.deleteReportEntry(reports_1).subscribe(
                    function(results) {
                      var messageKey =
                        partialMessageKey_1 === 'confirmDeleteSelectedReports'
                          ? _this.getTranslateKey('successOnDeleteReports')
                          : _this.getTranslateKey('successOnDeleteReport');
                      _this.messageService.showSuccessMessage(messageKey);
                      _this.selectedReports = [];
                      _this.loadReportList();
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
          FleetDataExchangeComponent.prototype.deleteExportReports = function() {
            var _this = this;
            if (this.selectedExportReports !== []) {
              var partialMessageKey_2 =
                this.selectedExportReports.length > 1 ? 'confirmDeleteSelectedReports' : 'confirmDeleteSelectedReport';
              var reports_2 = new Array();
              this.selectedExportReports.forEach(function(report) {
                if (report && report.reportId) {
                  var reportId = {
                    reportId: report.reportId
                  };
                  reports_2.push(reportId);
                }
              });
              this.confirmationService.confirmDelete({
                messageKey: this.getTranslateKey(partialMessageKey_2),
                accept: function() {
                  _this.fleetDataExchangeService.deleteReportEntry(reports_2).subscribe(
                    function(results) {
                      var messageKey =
                        partialMessageKey_2 === 'confirmDeleteSelectedReports'
                          ? _this.getTranslateKey('successOnDeleteReports')
                          : _this.getTranslateKey('successOnDeleteReport');
                      _this.messageService.showSuccessMessage(messageKey);
                      _this.selectedExportReports = [];
                      _this.loadReportList();
                    },
                    function() {
                      var messageKey =
                        partialMessageKey_2 === 'confirmDeleteSelectedReports'
                          ? _this.getTranslateKey('errorOnDeleteReports')
                          : _this.getTranslateKey('errorOnDeleteReport');
                      _this.messageService.showSuccessMessage(messageKey);
                    }
                  );
                }
              });
            }
          };
          FleetDataExchangeComponent.prototype.deleteAssets = function() {
            var _this = this;
            if (this.selectedAssetTask !== []) {
              var partialMessageKey = 'global.deleteConfirmationMsg';
              this.confirmationService.confirmDelete({
                messageKey: partialMessageKey,
                accept: function() {
                  _this.superiorTable = _this.superiorTable.filter(function(asset) {
                    return !_this.selectedAssetTask.includes(asset);
                  });
                  _this.selectedAssetTask = [];
                }
              });
            }
          };
          FleetDataExchangeComponent.prototype.openReportDetail = function(object) {
            var _this = this;
            if (!!object && !!object.reportId) {
              var bireReportDTOId = {
                reportId: object.reportId
              };
              this.fleetDataExchangeService.openImportReportContent(bireReportDTOId).subscribe(function(result) {
                if (!!object && !!object.reportName) {
                  if (
                    object.reportName.includes('.' + FileExtensions.txt) ||
                    object.reportName.includes('.' + FileExtensions.zip)
                  ) {
                    _this.downLoadFiles(result, object.reportName);
                  } else if (_this.type === _this.component.loading) {
                    _this.downLoadFiles(result, object.reportName + '.' + FileExtensions.txt);
                  } else if (_this.type === _this.component.export) {
                    _this.downLoadFiles(result, object.reportName + '.' + FileExtensions.zip);
                  }
                } else {
                  _super.prototype.throwUnboundLocalError.call(_this, 'openReportDetail', 'object.reportName');
                }
              });
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'openReportDetail', 'object.reportId');
            }
          };
          FleetDataExchangeComponent.prototype.enableImport = function() {
            if (!!this.format && !!this.data) {
              return false;
            } else {
              return true;
            }
          };
          FleetDataExchangeComponent.prototype.showDocExtension = function(document) {
            return _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_14__['FileUtils'].getExtension(document.docName);
          };
          // function is called with parameter 1 if simulate button is clicked, else called with 0
          FleetDataExchangeComponent.prototype.import = function(simulate) {
            var _this = this;
            if (this.fileName !== '') {
              var partialMessageKey = this.getTranslateKey('importData');
              this.confirmationService.confirm({
                interpolateParams: { 'importData.fileName': this.fileName },
                contextKeys: [this.getTranslateKey('importData.line1')],
                messageKey: partialMessageKey,
                delayCallback: true,
                accept: function() {
                  // Importing Excel file
                  _this.showSpinner = true;
                  var isExcel =
                    _this.showDocExtension(_this.file) === FileExtensions.xlsx ||
                    _this.showDocExtension(_this.file) === FileExtensions.xls;
                  if (_this.format === _this.component.excel && isExcel) {
                    var excelInput = {
                      fileName: _this.fileName,
                      excelSource: _this.file.docFile,
                      removingChoice: false,
                      familyCodeSelected: undefined,
                      variantCodeSelected: undefined,
                      isSimulated: simulate,
                      data: _this.data
                    };
                    switch (_this.data) {
                      case _this.component.fleet:
                        {
                          if (_this.validFamilyVariantCombination()) {
                            _this.getFamilyVariantComponents();
                            excelInput.familyCodeSelected = _this.familyCode;
                            excelInput.variantCodeSelected = _this.variantCode;
                            excelInput.removingChoice = _this.oldEquipCheckbox;
                          }
                        }
                        break;
                      case _this.component.counterUpdates:
                        excelInput.isSimulated = _this.simPropagationCheckbox;
                        break;
                      case _this.component.flights:
                      case _this.component.usageModel:
                      default:
                        break;
                    }
                    _this.fleetDataExchangeService.saveExcelFleetDataExchange(excelInput).subscribe(
                      function(result) {
                        _this.fileName = '';
                        var importReport = result + '\n' + _this.getTranslation('importReportError');
                        _this.importReportMessage = importReport;
                        _this.showImportReportMessage = true;
                        _this.loadReportList();
                        _this.showSpinner = false;
                      },
                      function() {
                        if (simulate) {
                          _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSimulate'));
                          _this.showSpinner = false;
                        } else {
                          _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnImport'));
                          _this.showSpinner = false;
                        }
                      }
                    );
                  } else if (_this.format === _this.component.excel && !isExcel) {
                    _this.fileName = '';
                    _this.messageService.showErrorMessage(_this.getTranslateKey('notExcel'));
                    _this.showSpinner = false;
                  }
                  // Import Xml File
                  if (_this.format === _this.component.xml || _this.format === _this.component.zip) {
                    if (!!_this.file && !!_this.fileName && !!_this.data && !!_this.file.docFile) {
                      var xmlInput = {
                        fileName: _this.fileName,
                        xmlSource: _this.file.docFile,
                        simulated: simulate,
                        data: _this.data
                      };
                      var zipInput = {
                        fileName: _this.fileName,
                        zipSource: _this.file.docFile,
                        isSimulated: simulate
                      };
                      switch (_this.data) {
                        case _this.component.configEvents:
                          if (_this.showDocExtension(_this.file) === _this.component.xml.toLowerCase()) {
                            xmlInput.simulated = simulate ? true : false;
                            _this.importXmlData(xmlInput);
                          } else {
                            _this.messageService.showErrorMessage(_this.getTranslateKey('notXml'));
                            _this.showSpinner = false;
                          }
                          break;
                        case _this.component.flights:
                          if (_this.showDocExtension(_this.file) === _this.component.xml.toLowerCase()) {
                            _this.importXmlData(xmlInput);
                          } else {
                            _this.messageService.showErrorMessage(_this.getTranslateKey('notXml'));
                            _this.showSpinner = false;
                          }
                          break;
                        case _this.component.globalImport:
                          if (_this.showDocExtension(_this.file) === _this.component.zip.toLowerCase()) {
                            _this.importZipData(zipInput);
                          } else {
                            _this.messageService.showErrorMessage(_this.getTranslateKey('notZip'));
                            _this.showSpinner = false;
                          }
                          break;
                        default:
                          {
                            _this.showSpinner = false;
                          }
                          break;
                      }
                    } else {
                      _super.prototype.throwUnboundLocalError.call(
                        _this,
                        'import',
                        'this.fileName && this.file && this.data && this.file.docFile'
                      );
                      _this.showSpinner = false;
                    }
                  }
                }
              });
            }
          };
          FleetDataExchangeComponent.prototype.importXmlData = function(xmlInput) {
            var _this = this;
            this.fleetDataExchangeService.saveXmlFleetDataExchange(xmlInput).subscribe(
              function(result) {
                _this.fileName = '';
                _this.importReportMessage = result;
                _this.showImportReportMessage = true;
                _this.loadReportList();
                _this.showSpinner = false;
                _this.showSpinner = false;
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnImport'));
              }
            );
          };
          FleetDataExchangeComponent.prototype.importZipData = function(zipInput) {
            var _this = this;
            this.fleetDataExchangeService.saveZipFleetDataExchange(zipInput).subscribe(
              function(result) {
                _this.fileName = '';
                _this.loadReportList();
                _this.showSpinner = false;
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnImport'));
              }
            );
          };
          FleetDataExchangeComponent.prototype.export = function() {
            var _this = this;
            this.showSpinner = true;
            var excelInput = __assign({}, this.assetDataExport);
            var xmlInput = {
              equipmentCode: [],
              date: new Date(),
              lockAsset: false
            };
            this.superiorTable.forEach(function(row) {
              xmlInput.equipmentCode.push(row.equipmentCode);
            });
            if (this.format === this.component.excel) {
              if (this.data === this.component.asset) {
                this.getFamilyVariantComponents();
                if (!!excelInput && !!excelInput.equipmentCriteria) {
                  excelInput.equipmentCriteria.familyVariantCode = this.familyCode + '-' + this.variantCode;
                  this.fleetDataExchangeService
                    .exportAssetData(excelInput)
                    .pipe(
                      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                        _this.showSpinner = false;
                      })
                    )
                    .subscribe(function(bytes) {
                      _this.fleetDataExchangeService.getServerDate().subscribe(function(result) {
                        var templateName =
                          _this.translateService.instant(_this.getTranslateKey('assetDataExportFileNamePrefix')) +
                          '_' +
                          _this.familyName +
                          '_' +
                          _this.variantCode +
                          '_' +
                          _this.datepipe.transform(result, _this.component.dateFormat) +
                          'h' +
                          _this.datepipe.transform(result, _this.component.monthFormat) +
                          '.' +
                          FileExtensions.xls;
                        _this.downLoadFiles(bytes, templateName);
                      });
                    });
                } else {
                  this.showSpinner = false;
                  _super.prototype.throwUnboundLocalError.call(this, 'export', 'excelInput');
                }
              }
            } else if (this.format === this.component.xml || this.format === this.component.zip) {
              if (this.superiorTable.length !== 0) {
                xmlInput.date = this.exportDataFrom;
                switch (this.data) {
                  case this.component.configEvents:
                    {
                      xmlInput.lockAsset = this.lockAssetCheckbox;
                      this.fleetDataExchangeService
                        .exportConfEventData(xmlInput)
                        .pipe(
                          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                            _this.showSpinner = false;
                          })
                        )
                        .subscribe(function(bytes) {
                          _this.fleetDataExchangeService.getServerDate().subscribe(function(result) {
                            var templateName =
                              _this.translateService.instant(_this.getTranslateKey('eventDataExportFileNamePrefix')) +
                              '_' +
                              _this.datepipe.transform(result, _this.component.dateFormat) +
                              'h' +
                              _this.datepipe.transform(result, _this.component.monthFormat) +
                              '.' +
                              FileExtensions.zip;
                            _this.downLoadFiles(bytes, templateName);
                            _this.loadReportList();
                          });
                        });
                    }
                    break;
                  case this.component.flights:
                    {
                      this.fleetDataExchangeService
                        .exportFlightsData(xmlInput)
                        .pipe(
                          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                            _this.showSpinner = false;
                          })
                        )
                        .subscribe(function(bytes) {
                          _this.fleetDataExchangeService.getServerDate().subscribe(function(result) {
                            var templateName =
                              _this.translateService.instant(_this.getTranslateKey('flightsDataExportFileNamePrefix')) +
                              '_' +
                              _this.datepipe.transform(result, _this.component.dateFormat) +
                              'h' +
                              _this.datepipe.transform(result, _this.component.monthFormat) +
                              '.' +
                              FileExtensions.zip;
                            _this.downLoadFiles(bytes, templateName);
                            _this.loadReportList();
                          });
                        });
                    }
                    break;
                  case this.component.globalExport:
                    {
                      xmlInput.lockAsset = this.lockAssetCheckbox;
                      xmlInput.exportEngineeringData = this.exportEngineeringData;
                      this.fleetDataExchangeService
                        .exportGlobalData(xmlInput)
                        .pipe(
                          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                            _this.showSpinner = false;
                          })
                        )
                        .subscribe(function(bytes) {
                          _this.fleetDataExchangeService.getServerDate().subscribe(function(result) {
                            var templateName =
                              _this.translateService.instant(_this.getTranslateKey('globalExportFileNamePrefix')) +
                              '_' +
                              _this.datepipe.transform(result, _this.component.dateFormat) +
                              'h' +
                              _this.datepipe.transform(result, _this.component.monthFormat) +
                              '.' +
                              FileExtensions.zip;
                            _this.downLoadFiles(bytes, templateName);
                            _this.loadReportList();
                          });
                        });
                    }
                    break;
                  default: {
                    this.showSpinner = false;
                    break;
                  }
                }
              } else {
                this.showSpinner = false;
                this.messageService.showErrorMessage(this.getTranslateKey('addAssets'));
              }
            }
          };
          FleetDataExchangeComponent.prototype.loadReportList = function() {
            this.getFamilyVariantComponents();
            this.reports = [];
            if (!!this.data && !!this.format && !!this.type) {
              var input = {
                data: this.data,
                format: this.format,
                type: this.type,
                reportCode: ''
              };
              if (this.type === this.component.loading) {
                // 'Loading'
                if (this.format === this.component.excel) {
                  // 'Excel'
                  switch (this.data) {
                    case this.component.fleet:
                      {
                        if (
                          !!this.familyCode &&
                          !!this.variantCode &&
                          !!this.structureType &&
                          this.validFamilyVariantCombination()
                        ) {
                          input.bireVariantVersionId = {
                            familyCode: this.familyCode,
                            variantCode: this.variantCode,
                            structureType: this.structureType
                          };
                          input.reportCode = 'FLEET_IMPORT_REPORT';
                          this.hitFetchAPI(input);
                        }
                      }
                      break;
                    case this.component.counterUpdates:
                      {
                        input.reportCode = 'COUNTER_IMPORT_REPORT';
                        this.hitFetchAPI(input);
                      }
                      break;
                    case this.component.flights:
                      {
                        input.reportCode = 'XLS_MISSION_IMPORT_REPORT_CODE';
                        this.hitFetchAPI(input);
                      }
                      break;
                    case this.component.usageModel:
                      {
                        input.reportCode = 'USAGE_IMPORT_REPORT';
                        this.hitFetchAPI(input);
                      }
                      break;
                    default:
                      break;
                  }
                } else if (this.format === this.component.xml) {
                  switch (this.data) {
                    case this.component.configEvents:
                      {
                        input.reportCode = 'XML_CONF_EVENT_IMPORT_REPORT';
                        this.hitFetchAPI(input);
                      }
                      break;
                    case this.component.flights:
                      {
                        input.reportCode = 'XML_MISSION_IMPORT_REPORT_CODE';
                        this.hitFetchAPI(input);
                      }
                      break;
                    default:
                      break;
                  }
                } else if (this.format === this.component.zip) {
                  input.reportCode = 'ZIP_GLOBAL_IMPORT_REPORT';
                  this.hitFetchAPI(input);
                }
              } else if (this.type === this.component.export) {
                if (this.format === this.component.xml) {
                  switch (this.data) {
                    case this.component.configEvents:
                      {
                        input.reportCode = 'ZIP_CONF_EVENT_EXPORT_REPORT';
                        this.hitFetchAPI(input);
                      }
                      break;
                    case this.component.flights:
                      {
                        input.reportCode = 'ZIP_MISSION_EXPORT_REPORT';
                        this.hitFetchAPI(input);
                      }
                      break;
                    default:
                      break;
                  }
                } else if (this.format === this.component.zip && this.data === this.component.globalExport) {
                  input.reportCode = 'ZIP_GLOBAL_EXPORT_REPORT';
                  this.hitFetchAPI(input);
                }
              }
            }
          };
          FleetDataExchangeComponent.prototype.hitFetchAPI = function(input) {
            var _this = this;
            // this.clearSearchProperties();
            this.isReportLoading = true;
            this.fleetDataExchangeService.fetchFleetDataExchangeReport(input).subscribe(function(result) {
              _this.reports = result;
              _this.isReportLoading = false;
            });
          };
          // For Doc Import
          FleetDataExchangeComponent.prototype.uploadDocument = function(event, fileUploader) {
            var _this = this;
            // if (!!event.files) {
            var file = event.files[0];
            {
              // if (!!this.file && !!this.file.docName) {
              _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_14__['FileUtils'].getFileContentAsBase64(file, function(
                fileContent
              ) {
                if (fileContent) {
                  _this.file = {
                    docFile: fileContent,
                    docName: file.name,
                    docPublicationDate: new Date()
                  };
                  _this.fileName = _this.file.docName;
                }
              });
            }
            fileUploader.clear();
            // }
          };
          // Method to set table columns
          FleetDataExchangeComponent.prototype.setTableCols = function() {
            this.assetSelectionTableCols = [
              { field: 'equipmentText', width: '150px' },
              { field: 'equipmentFamilyVariantCode', width: '70px' },
              { field: 'equipmentRegistration', width: '70px' },
              { field: 'equipmentPn', width: '70px' },
              { field: 'equipmentDesignation', width: '80px' },
              { field: 'equipmentFunction', width: '60px' },
              { field: 'equipmentSn', width: '70px' },
              { field: 'equipmentSupAsset', width: '80px' },
              { field: 'equipmentOwner', width: '60px' },
              { field: 'equipmentOperator', width: '60px' },
              { field: 'equipmentLocation', width: '60px' },
              { field: 'equipmentOperationalStatus', width: '100px' },
              { field: 'equipmentCode', width: '100px' }
            ];
            this.exportReportTableCols = [
              { field: 'reportCode', alignment: 'center' },
              { field: 'reportName', alignment: 'center' },
              { field: 'statusUser', alignment: 'center' },
              { field: 'statusDate', alignment: 'center' }
            ];
          };
          // Tab Navigation
          FleetDataExchangeComponent.prototype.openAssetSelectionTab = function() {
            this.currentTabId = this.tabAssetSelectionId;
          };
          FleetDataExchangeComponent.prototype.openExportReportTab = function() {
            this.currentTabId = this.tabExportReportId;
          };
          FleetDataExchangeComponent.prototype.openAdvanceSearchDialog = function() {
            this.showQuickSearchEquipmentDialog = true;
          };
          FleetDataExchangeComponent.prototype.setSelectedAsset = function(event) {
            if (!!this.assetDataExport && !!this.assetDataExport.equipmentCriteria) {
              this.assetDataExport.equipmentCriteria.equipmentCode = event.equipmentCode;
              this.assetDataExport.equipmentCriteria.pnCode = event.pnCode;
              this.assetDataExport.equipmentCriteria.sn = event.sn;
              this.assetDataExport.equipmentCriteria.equipmentDesignation = event.equipmentDesignation;
              this.assetDataExport.equipmentCriteria.familyVariantCode = event.familyVariantCode;
            } else {
              _super.prototype.throwUnboundLocalError.call(
                this,
                'setSelectedAsset',
                'this.assetDataExport && this.assetDataExport.equipmentCriteria'
              );
            }
          };
          FleetDataExchangeComponent.prototype.setSelectedAssetsFromSelectionDilog = function(event) {
            var _this = this;
            event.forEach(function(e) {
              var inSuperiorTable = _this.superiorTable.filter(function(asset) {
                return asset.equipmentCode === e.equipmentCode;
              });
              if (inSuperiorTable.length === 0) {
                _this.superiorTable.push(e);
              }
            });
          };
          // Resetting chkboxes
          FleetDataExchangeComponent.prototype.resetAssetExpChkBoxes = function() {
            this.assetCodeTxt = '';
            this.pnCodeTxt = '';
            this.snCodeTxt = '';
            // this.nameTxt = ;     // TODO How to make name
            this.designationTxt = '';
            return [
              'Family Variant',
              'pn',
              'sn',
              'Asset Code',
              'Owner Code',
              'Operator Code',
              'Registration',
              'Designation',
              'Function',
              'Operational Status',
              'EIS Date',
              'Superior asset code',
              'Function code',
              'Life restriction'
            ];
          };
          FleetDataExchangeComponent.prototype.getTranslation = function(label) {
            return this.translateService.instant(this.getTranslateKey(label));
          };
          /**********
           * Open Tabs
           **********/
          FleetDataExchangeComponent.prototype.openFleetTab = function() {
            this.currentTabsId = this.tabFleetId;
          };
          FleetDataExchangeComponent.prototype.openCounterTab = function() {
            this.currentTabsId = this.tabCounterId;
          };
          FleetDataExchangeComponent.prototype.openFlightsTab = function() {
            this.currentTabsId = this.tabExcelFlightsId;
          };
          FleetDataExchangeComponent.prototype.openUsageTab = function() {
            this.currentTabsId = this.tabUsageId;
          };
          FleetDataExchangeComponent.prototype.openImportConfigurationTab = function() {
            this.currentTabsId = this.tabImportConfigurationId;
          };
          FleetDataExchangeComponent.prototype.openImportFlightTab = function() {
            this.currentTabsId = this.tabImportXmlFlightId;
          };
          FleetDataExchangeComponent.prototype.openGlobalImportTab = function() {
            this.currentTabsId = this.tabGlobalImportId;
          };
          FleetDataExchangeComponent.prototype.openExportConfigurationTab = function() {
            this.currentTabsId = this.tabExportConfigurationId;
          };
          FleetDataExchangeComponent.prototype.openExportFlightTab = function() {
            this.currentTabsId = this.tabExportXmlFlightId;
          };
          FleetDataExchangeComponent.prototype.openGlobalExportTab = function() {
            this.currentTabsId = this.tabGlobalExportId;
          };
          FleetDataExchangeComponent.prototype.openImportReportsTab = function() {
            this.currentTabsId = this.tabImportReportId;
          };
          FleetDataExchangeComponent.prototype.openExportReportsTab = function() {
            this.currentTabsId = this.tabExportReportId;
          };
          /*************************
           * Asset(s) selection popup
           *************************/
          FleetDataExchangeComponent.prototype.openAssetsSelectionDialog = function() {
            this.showAssetsSelectionDialog = true;
          };
          var FleetDataExchangeComponent_1;
          FleetDataExchangeComponent.asset = 'Asset';
          FleetDataExchangeComponent.loading = 'Loading';
          FleetDataExchangeComponent.configEvents = 'Configuration and Events';
          FleetDataExchangeComponent.flights = 'Flights';
          FleetDataExchangeComponent.globalExport = 'Global Export';
          FleetDataExchangeComponent.globalImport = 'Global Import';
          FleetDataExchangeComponent.excel = 'Excel';
          FleetDataExchangeComponent.xml = 'Xml';
          FleetDataExchangeComponent.zip = 'Zip';
          FleetDataExchangeComponent.export = 'Export';
          FleetDataExchangeComponent.counterUpdates = 'Counter Updates';
          FleetDataExchangeComponent.usageModel = 'Usage Model';
          FleetDataExchangeComponent.fleet = 'Fleet';
          FleetDataExchangeComponent.dateFormat = 'dd-MM-yyyy_HH';
          FleetDataExchangeComponent.monthFormat = 'mm';
          FleetDataExchangeComponent = FleetDataExchangeComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Component'])({
                selector: 'aw-fleet-data-exchange',
                template: __webpack_require__(
                  /*! ./fleet-data-exchange.component.html */ './src/app/main/collaborative-cockpit/fleet-data-exchange/fleet-data-exchange.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./fleet-data-exchange.component.scss */ './src/app/main/collaborative-cockpit/fleet-data-exchange/fleet-data-exchange.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__['TabService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_6__['ConfirmationService'],
                _fleet_data_exchange_service__WEBPACK_IMPORTED_MODULE_16__['FleetDataExchangeService'],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__['DatePipe'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__['SessionService']
              ])
            ],
            FleetDataExchangeComponent
          );
          return FleetDataExchangeComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_13__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/fleet-data-exchange/fleet-data-exchange.service.ts':
      /*!***********************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/fleet-data-exchange/fleet-data-exchange.service.ts ***!
  \***********************************************************************************************/
      /*! exports provided: FleetDataExchangeService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FleetDataExchangeService',
          function() {
            return FleetDataExchangeService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
        );
        /* harmony import */ var _shared_api_engineering_data_exchange_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/api/engineering-data-exchange.api */ './src/app/shared/api/engineering-data-exchange.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/api/fleet-business.api */ './src/app/shared/api/fleet-business.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_api_standard_export_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/api/standard-export.api */ './src/app/shared/api/standard-export.api.ts'
        );
        /* harmony import */ var _shared_api_standard_import_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/api/standard-import.api */ './src/app/shared/api/standard-import.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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

        var FleetDataExchangeService = /** @class */ (function(_super) {
          __extends(FleetDataExchangeService, _super);
          function FleetDataExchangeService(
            http,
            appConfigService,
            engineeringDataExchangeApi,
            productStructureManagementApi,
            fleetManagementApi,
            standardImportController,
            bidtWarehouseApi,
            standardExportController,
            fleetBusinessController
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.engineeringDataExchangeApi = engineeringDataExchangeApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.standardImportController = standardImportController;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            _this.standardExportController = standardExportController;
            _this.fleetBusinessController = fleetBusinessController;
            return _this;
          }
          FleetDataExchangeService.prototype.findTypeList = function() {
            return _super.prototype.post.call(this, this.engineeringDataExchangeApi.findTypeList);
          };
          FleetDataExchangeService.prototype.getBireFamilyVariant = function(familyVariantInput) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireFamilyVariant,
              familyVariantInput
            );
          };
          FleetDataExchangeService.prototype.getImportFlightReports = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoReportsByReportCode);
          };
          FleetDataExchangeService.prototype.getImportFleetReports = function(variantVersionInput) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoReportsByFamilyVariantCodeAndFleetImportReportCode,
              variantVersionInput
            );
          };
          FleetDataExchangeService.prototype.deleteReportEntry = function(reportId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.removeBidoReport, reportId);
          };
          FleetDataExchangeService.prototype.saveExcelFleetDataExchange = function(excelInput) {
            return _super.prototype.post.call(this, this.fleetManagementApi.saveExcelFleetDataExchange, excelInput);
          };
          FleetDataExchangeService.prototype.saveXmlFleetDataExchange = function(xmlInput) {
            return _super.prototype.post.call(this, this.fleetManagementApi.saveXmlFleetDataExchange, xmlInput);
          };
          FleetDataExchangeService.prototype.saveZipFleetDataExchange = function(zipInput) {
            return _super.prototype.post.call(this, this.fleetManagementApi.saveZipFleetDataExchange, zipInput);
          };
          FleetDataExchangeService.prototype.fetchFleetDataExchangeReport = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.fetchFleetDataExchangeReport, input);
          };
          FleetDataExchangeService.prototype.getTemplate = function(input) {
            return _super.prototype.post.call(this, this.standardImportController.getImportFleetDataTemplate, input);
          };
          FleetDataExchangeService.prototype.openImportReportContent = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoReportContentOfBidoReport, input);
          };
          FleetDataExchangeService.prototype.exportConfEventData = function(input) {
            return _super.prototype.post.call(this, this.standardExportController.exportConfEvent, input);
          };
          FleetDataExchangeService.prototype.exportFlightsData = function(input) {
            return _super.prototype.post.call(this, this.standardExportController.exportFlights, input);
          };
          FleetDataExchangeService.prototype.exportGlobalData = function(input) {
            return _super.prototype.post.call(this, this.standardExportController.exportGlobal, input);
          };
          FleetDataExchangeService.prototype.exportAssetData = function(input) {
            return _super.prototype.post.call(this, this.fleetBusinessController.exportAssetData, input);
          };
          FleetDataExchangeService.prototype.getServerDate = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.getServerDate);
          };
          /***********************************
           * Asset(s) Selection popup services
           ***********************************/
          FleetDataExchangeService.prototype.getWarehouseDropdownList = function() {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.getWarehouses);
          };
          FleetDataExchangeService.prototype.getBidoFleetsBySearchCriteria = function(criteria) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoFleetsBySearchCriteria, criteria);
          };
          FleetDataExchangeService.prototype.getAssetTypeList = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.initializeAssetTypeList);
          };
          FleetDataExchangeService.prototype.getFunctionList = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.initializeFunctionList);
          };
          FleetDataExchangeService.prototype.getFamilyVariantList = function(assetType) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.initializeFamilyVariantList,
              assetType
            );
          };
          FleetDataExchangeService.prototype.findAssetList = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAssetList, input);
          };
          FleetDataExchangeService.prototype.getOperationalStatusList = function(assetType) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.initializeOperationalStatusList,
              assetType
            );
          };
          FleetDataExchangeService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])({
                providedIn: 'root'
              }),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__['AppConfigService'],
                _shared_api_engineering_data_exchange_api__WEBPACK_IMPORTED_MODULE_3__['EngineeringDataExchangeApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_6__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_5__['FleetManagementApi'],
                _shared_api_standard_import_api__WEBPACK_IMPORTED_MODULE_8__['StandardImportApi'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_2__['BidtWarehouseApi'],
                _shared_api_standard_export_api__WEBPACK_IMPORTED_MODULE_7__['StandardExportApi'],
                _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_4__['FleetBusinessApi']
              ])
            ],
            FleetDataExchangeService
          );
          return FleetDataExchangeService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/flight-data-exchange/flight-data-exchange.component.html':
      /*!*****************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/flight-data-exchange/flight-data-exchange.component.html ***!
  \*****************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <h2 class="page-title">\r\n        {{ componentData.componentId + ".flightDataExchange" | translate }}\r\n      </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="row">\r\n                <div class="section flex--1">\r\n                  <h4 class="section-title">{{ componentData.componentId + ".type" | translate }}</h4>\r\n                  <div class="section-content">\r\n                    <div class="form-group form-group-select-buton">\r\n                      <label class="form-label"> &nbsp; </label>\r\n\r\n                      <div class="form-control aw-selectbutton-wrapper">\r\n                        <p-selectButton\r\n                          [(ngModel)]="type"\r\n                          [options]="propertyTypeList"\r\n                          (onChange)="onTypeChange($event)"\r\n                        ></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="section flex--1">\r\n                  <h4 class="section-title">{{ componentData.componentId + ".format" | translate }}</h4>\r\n                  <div class="section-content">\r\n                    <div class="form-group form-group-select-buton">\r\n                      <label class="form-label"> &nbsp; </label>\r\n\r\n                      <div class="form-control aw-selectbutton-wrapper">\r\n                        <p-selectButton\r\n                          [(ngModel)]="format"\r\n                          [options]="propertyFormatList"\r\n                          (onChange)="onFormatChange()"\r\n                        ></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="section flex--1"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title active" *ngIf="type === component.loading && format === component.xml">\r\n                  {{ componentData.componentId + ".importXmlFlights" | translate }}\r\n                </h3>\r\n\r\n                <h3 class="grid-cell-title active" *ngIf="type === component.loading && format === component.excel">\r\n                  {{ componentData.componentId + ".importExcelFlights" | translate }}\r\n                </h3>\r\n                <h3 class="grid-cell-title" *ngIf="type === component.export && format === component.xml">\r\n                  {{ componentData.componentId + ".exportXmlFlights" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div *ngIf="type === component.loading" class="grid-row">\r\n                  <div class="form-group">\r\n                    <label class="form-label selectedFV">\r\n                      <span\r\n                        (click)="openTemplate(loadTemplate())"\r\n                        style="cursor: pointer; text-decoration: underline; color: blue"\r\n                      >\r\n                        {{ loadTemplate() }}\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-row grid-cell--3">\r\n                  <div class="form-group">\r\n                    <label\r\n                      class="form-label selectedFV"\r\n                      *ngIf="type === component.loading && format === component.excel"\r\n                    >\r\n                      {{ componentData.componentId + ".excelFlightsFileToImport" | translate }}\r\n                    </label>\r\n\r\n                    <label class="form-label selectedFV" *ngIf="type === component.loading && format === component.xml">\r\n                      {{ componentData.componentId + ".xmlFlightsFileToImport" | translate }}\r\n                    </label>\r\n\r\n                    <div\r\n                      *ngIf="type === component.loading"\r\n                      class="form-control form-control-with-modal"\r\n                      [ngClass]="{ disabled: isReadOpenMode }"\r\n                    >\r\n                      <div class="form-control-data">\r\n                        {{ fileName }}\r\n                      </div>\r\n\r\n                      <div class="btn-file-upload-wrapper">\r\n                        <p-fileUpload\r\n                          #fileUploader\r\n                          *ngIf="!isReadOpenMode"\r\n                          class="aw-fileupload"\r\n                          name="document[]"\r\n                          customUpload="true"\r\n                          mode="basic"\r\n                          auto="true"\r\n                          chooseLabel=""\r\n                          [disabled]="enableImport()"\r\n                          (uploadHandler)="uploadDocument($event, fileUploader)"\r\n                        ></p-fileUpload>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div\r\n              *ngIf="type === component.export && format == component.xml"\r\n              class="grid-cell-content grid-cell-content-with-section"\r\n            >\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group flex--1">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".exportData" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-calendar\r\n                          showButtonBar="true"\r\n                          [monthNavigator]="true"\r\n                          [yearNavigator]="true"\r\n                          [yearRange]="sessionService.calendarYearRange"\r\n                          class="aw-calendar"\r\n                          [(ngModel)]="exportDataFrom"\r\n                          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                          [locale]="sessionService.calendarFormat"\r\n                          [(ngModel)]="exportDataFrom"\r\n                          [disabled]="isReadOnlyForm"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group flex--3"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class="section">\r\n                <h4 class="section-title">\r\n                  {{ componentData.componentId + ".assetSelection" | translate }}\r\n                </h4>\r\n\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      #ptableAssetSelection\r\n                      class="aw-table2"\r\n                      [columns]="assetSelectionTableCols"\r\n                      [value]="superiorTable"\r\n                      [(selection)]="selectedAssetTask"\r\n                      [scrollable]="true"\r\n                    >\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedAssetTask.length > 0 }">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableAssetSelectionGlobalFilter\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="ptableAssetSelection.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class="aw-table-actions">\r\n                            <button\r\n                              *ngIf="selectedAssetTask.length > 0"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="deleteAssets()"\r\n                            >\r\n                              {{ "global.delete" | translate }}\r\n                            </button>\r\n\r\n                            <button type="button" mat-raised-button (click)="openAssetsSelectionDialog()">\r\n                              {{ "global.add" | translate }}\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col class="aw-table-checkbox-wrapper" />\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th class="aw-table-checkbox-wrapper">\r\n                            <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                          </th>\r\n\r\n                          <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                            {{ componentData.componentId + "." + col.field | translate }}\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                          <td class="aw-table-checkbox-wrapper">\r\n                            <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                          </td>\r\n\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment, \'min-width\': \'75rem\' }"\r\n                          >\r\n                            <div *ngSwitchDefault>\r\n                              {{ rowData[col.field] }}\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n\r\n                  <div class="row search-criteria-footer">\r\n                    <div class="search-actions">\r\n                      <button type="button" class="btn-with-spinner" mat-raised-button (click)="export()">\r\n                        <span class="lds-hourglass" *ngIf="showSpinner"></span>\r\n                        {{ componentData.componentId + ".export" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content" *ngIf="type === component.loading">\r\n              <div class="column">\r\n                <div class="row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <button\r\n                      type="button"\r\n                      class="aw-btn"\r\n                      mat-raised-button\r\n                      (click)="import(0)"\r\n                      [ngClass]="{ inactive: fileName === \'\' }"\r\n                    >\r\n                      <span class="lds-hourglass" *ngIf="showSpinner"></span>\r\n                      {{ componentData.componentId + ".importFile" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title active" *ngIf="type === component.loading">\r\n                  {{ componentData.componentId + ".importReports" | translate }} ({{ reports ? reports.length : 0 }})\r\n                </h3>\r\n                <h3 class="grid-cell-title" *ngIf="type === component.export">\r\n                  {{ componentData.componentId + ".exportReports" | translate }} ({{ reports ? reports.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <!--For archived import reports-->\r\n            <div class="grid-cell-content">\r\n              <div *ngIf="type === component.loading">\r\n                <p-table\r\n                  [resizableColumns]="true"\r\n                  #ptableImportReports\r\n                  class="aw-table2"\r\n                  [columns]="reportTableCols"\r\n                  [value]="reports"\r\n                  [(selection)]="selectedReports"\r\n                  [scrollable]="true"\r\n                >\r\n                  <ng-template pTemplate="emptymessage">\r\n                    <span *ngIf="!isReportLoading"> &nbsp;</span>\r\n\r\n                    <div *ngIf="isReportLoading" class="aw-table-loading-indicator">\r\n                      <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                      <div class="lds-hourglass"></div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="caption">\r\n                    <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedReports.length > 0 }">\r\n                      <div class="aw-table-global-filter">\r\n                        <label class="aw-table-global-filter-label">\r\n                          <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                        </label>\r\n\r\n                        <input\r\n                          #ptableImportReportGlobalFilter\r\n                          class="aw-table-global-filter-input"\r\n                          type="text"\r\n                          placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                          (input)="ptableImportReports.filterGlobal($event.target.value, \'contains\')"\r\n                        />\r\n                      </div>\r\n\r\n                      <div class="aw-table-actions">\r\n                        <button\r\n                          mat-raised-button\r\n                          *ngIf="selectedReports.length > 0"\r\n                          type="button"\r\n                          class="aw-btn aw-table-action"\r\n                          (click)="deleteReports()"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="colgroup" let-columns>\r\n                    <colgroup>\r\n                      <col class="aw-table-checkbox-wrapper" />\r\n                      <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                    </colgroup>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="header" let-columns>\r\n                    <tr>\r\n                      <th class="aw-table-checkbox-wrapper">\r\n                        <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                      </th>\r\n\r\n                      <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                        {{ componentData.componentId + "." + col.field | translate }}\r\n                      </th>\r\n                    </tr>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                    <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                      <td class="aw-table-checkbox-wrapper">\r\n                        <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                      </td>\r\n\r\n                      <td\r\n                        *ngFor="let col of columns"\r\n                        [ngSwitch]="col.field"\r\n                        [ngStyle]="{ \'text-align\': col.alignment }"\r\n                      >\r\n                        <div *ngSwitchCase="\'reportName\'">\r\n                          <span\r\n                            (click)="openReportDetail(rowData)"\r\n                            style="cursor: pointer; text-decoration: underline; color: blue"\r\n                          >\r\n                            {{ rowData[col.field] }}\r\n                          </span>\r\n                        </div>\r\n                        <div *ngSwitchCase="\'statusDate\'">\r\n                          <span>\r\n                            {{ rowData[col.field] | date: "dd/MM/yyyy HH:mm:ss":"":translateService.currentLang }}\r\n                          </span>\r\n                        </div>\r\n                        <div *ngSwitchDefault>\r\n                          {{ rowData[col.field] }}\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </p-table>\r\n              </div>\r\n              <div *ngIf="type === component.export">\r\n                <p-table\r\n                  [resizableColumns]="true"\r\n                  #ptableExportReports\r\n                  class="aw-table2"\r\n                  [columns]="exportReportTableCols"\r\n                  [value]="reports"\r\n                  [(selection)]="selectedExportReports"\r\n                  [scrollable]="true"\r\n                >\r\n                  <ng-template pTemplate="emptymessage">\r\n                    <span *ngIf="!isReportLoading"> &nbsp;</span>\r\n\r\n                    <div *ngIf="isReportLoading" class="aw-table-loading-indicator">\r\n                      <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                      <div class="lds-hourglass"></div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="caption">\r\n                    <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedExportReports.length > 0 }">\r\n                      <div class="aw-table-global-filter">\r\n                        <label class="aw-table-global-filter-label">\r\n                          <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                        </label>\r\n\r\n                        <input\r\n                          #ptableExportReportGlobalFilter\r\n                          class="aw-table-global-filter-input"\r\n                          type="text"\r\n                          placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                          (input)="ptableExportReports.filterGlobal($event.target.value, \'contains\')"\r\n                        />\r\n                      </div>\r\n\r\n                      <div class="aw-table-actions">\r\n                        <button\r\n                          *ngIf="selectedExportReports.length > 0"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="deleteExportReports()"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="colgroup" let-columns>\r\n                    <colgroup>\r\n                      <col class="aw-table-checkbox-wrapper" />\r\n                      <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                    </colgroup>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="header" let-columns>\r\n                    <tr>\r\n                      <th class="aw-table-checkbox-wrapper">\r\n                        <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                      </th>\r\n\r\n                      <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                        {{ componentData.componentId + "." + col.field | translate }}\r\n                      </th>\r\n                    </tr>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                    <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                      <td class="aw-table-checkbox-wrapper">\r\n                        <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                      </td>\r\n\r\n                      <td\r\n                        *ngFor="let col of columns"\r\n                        [ngSwitch]="col.field"\r\n                        [ngStyle]="{ \'text-align\': col.alignment }"\r\n                      >\r\n                        <div *ngSwitchCase="\'reportName\'">\r\n                          <span\r\n                            (click)="openReportDetail(rowData)"\r\n                            style="cursor: pointer; text-decoration: underline; color: blue"\r\n                          >\r\n                            {{ rowData[col.field] }}\r\n                          </span>\r\n                        </div>\r\n                        <div *ngSwitchCase="\'statusDate\'">\r\n                          <span>\r\n                            {{ rowData[col.field] | date: "dd/MM/yyyy HH:mm:ss":"":translateService.currentLang }}\r\n                          </span>\r\n                        </div>\r\n                        <div *ngSwitchDefault>\r\n                          {{ rowData[col.field] }}\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </p-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-assets-selection-dialog\r\n  *ngIf="showAssetsSelectionDialog"\r\n  [(display)]="showAssetsSelectionDialog"\r\n  [showAssetsSelectionDialog]="showAssetsSelectionDialog"\r\n  (onSelected)="setSelectedAssetsFromSelectionDilog($event)"\r\n></aw-assets-selection-dialog>\r\n\r\n<aw-import-report-popup\r\n  *ngIf="showImportReportMessage"\r\n  [importReportMessage]="importReportMessage"\r\n  [(display)]="showImportReportMessage"\r\n></aw-import-report-popup>\r\n';

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/flight-data-exchange/flight-data-exchange.component.ts':
      /*!***************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/flight-data-exchange/flight-data-exchange.component.ts ***!
  \***************************************************************************************************/
      /*! exports provided: FlightDataExchangeComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FlightDataExchangeComponent',
          function() {
            return FlightDataExchangeComponent;
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
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _flight_data_exchange_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./flight-data-exchange.service */ './src/app/main/collaborative-cockpit/flight-data-exchange/flight-data-exchange.service.ts'
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

        var FileExtensions;
        (function(FileExtensions) {
          FileExtensions['txt'] = 'txt';
          FileExtensions['xls'] = 'xls';
          FileExtensions['xlsx'] = 'xlsx';
          FileExtensions['xml'] = 'xml';
          FileExtensions['zip'] = 'zip';
        })(FileExtensions || (FileExtensions = {}));
        var FlightDataExchangeComponent = /** @class */ (function(_super) {
          __extends(FlightDataExchangeComponent, _super);
          function FlightDataExchangeComponent(
            favoriteService,
            loaderService,
            messageService,
            translateService,
            serializationService,
            tabService,
            flightDataExchangeService,
            sessionService,
            datepipe,
            confirmationService
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
            _this.translateService = translateService;
            _this.flightDataExchangeService = flightDataExchangeService;
            _this.sessionService = sessionService;
            _this.datepipe = datepipe;
            _this.confirmationService = confirmationService;
            _this.component = FlightDataExchangeComponent_1;
            _this.showExportComponents = false;
            _this.showImportComponents = false;
            _this.isReportLoading = false;
            _this.exportDataFrom = undefined;
            _this.propertyDataList = [];
            _this.propertyTypeList = [];
            _this.propertyFormatList = [
              { label: _this.getTranslation('excel'), value: _this.component.excel },
              { label: _this.getTranslation('xml'), value: _this.component.xml }
            ];
            _this.reports = [];
            _this.selectedReports = [];
            _this.initImportTableCols();
            _this.setExportTableCols();
            _this.type = _this.component.loading;
            _this.format = _this.component.excel;
            _this.selectedAssetTask = [];
            _this.selectedExportReports = [];
            _this.superiorTable = [];
            _this.importReportMessage = '';
            _this.showImportReportMessage = false;
            _this.showAssetsSelectionDialog = false;
            _this.translateService.onLangChange.subscribe(function(_) {
              _this.loadDropDownLists();
            });
            return _this;
          }
          FlightDataExchangeComponent_1 = FlightDataExchangeComponent;
          FlightDataExchangeComponent.prototype.getComponentName = function() {
            return 'FlightDataExchangeComponent';
          };
          FlightDataExchangeComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
            this.loadDropDownLists();
            this.loadReportList();
          };
          // Change event of Type and format
          FlightDataExchangeComponent.prototype.onTypeChange = function(event) {
            this.format = undefined;
            this.propertyFormatList = [];
            if (event.value === this.component.loading) {
              this.format = this.component.excel;
              this.propertyFormatList = [
                { label: this.getTranslation('excel'), value: this.component.excel },
                { label: this.getTranslation('xml'), value: this.component.xml }
              ];
            } else if (event.value === this.component.export) {
              this.showAssetsSelectionDialog = false;
              this.propertyFormatList = [{ label: this.getTranslation('xml'), value: this.component.xml }];
              this.format = this.component.xml;
              this.onDataChangeInit();
            }
            this.selectImportOrExportComponents();
            this.resetScreen();
            this.loadReportList();
          };
          FlightDataExchangeComponent.prototype.onDataChangeInit = function() {
            this.resetScreen();
            this.initImportTableCols();
            this.loadReportList();
          };
          FlightDataExchangeComponent.prototype.onFormatChange = function() {
            if (this.format === null) {
              this.propertyDataList = [];
            }
            this.selectImportOrExportComponents();
            if (!!this.format) {
              if (this.format === this.component.excel) {
                this.format = this.component.excel;
              } else if (this.format === this.component.xml) {
                this.format = this.component.xml;
              }
            }
            this.loadReportList();
          };
          FlightDataExchangeComponent.prototype.selectImportOrExportComponents = function() {
            if (this.validSearchCombination()) {
              if (this.type === this.component.loading) {
                this.showImportComponents = true;
                this.showExportComponents = false;
              } else if (this.type === this.component.export) {
                this.showExportComponents = true;
                this.showImportComponents = false;
              } else {
                this.showImportComponents = false;
                this.showExportComponents = false;
              }
            }
          };
          FlightDataExchangeComponent.prototype.validSearchCombination = function() {
            if (!!this.type && !!this.format) {
              return true;
            } else {
              return false;
            }
          };
          FlightDataExchangeComponent.prototype.openTemplate = function(templateName) {
            var _this = this;
            if (!!this.type && !!this.format) {
              var getTemplateInput = {
                type: this.type,
                format: this.format,
                data: this.component.flights
              };
              this.flightDataExchangeService.getTemplate(getTemplateInput).subscribe(function(result) {
                _this.downLoadFiles(result, templateName);
              });
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'openTemplate', 'this.type && this.format');
            }
          };
          FlightDataExchangeComponent.prototype.downLoadFiles = function(docFile, docName) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_13__['FileUtils'].downloadFile(docFile, docName);
          };
          FlightDataExchangeComponent.prototype.loadTemplate = function() {
            var templateName = '';
            if (this.format === this.component.excel) {
              templateName = 'Template_FLIGHTS_IMPORT.xls';
            } else if (this.format === this.component.xml) {
              templateName = 'Template_FLIGHTS_IMPORT.xsd';
            }
            return templateName;
          };
          FlightDataExchangeComponent.prototype.enableImport = function() {
            if (!!this.format) {
              return false;
            } else {
              return true;
            }
          };
          // For Doc Import
          FlightDataExchangeComponent.prototype.uploadDocument = function(event, fileUploader) {
            var _this = this;
            // if (!!event.files) {
            var file = event.files[0];
            {
              // if (!!this.file && !!this.file.docName) {
              _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_13__['FileUtils'].getFileContentAsBase64(file, function(
                fileContent
              ) {
                if (fileContent) {
                  _this.file = {
                    docFile: fileContent,
                    docName: file.name,
                    docPublicationDate: new Date()
                  };
                  _this.fileName = _this.file.docName;
                }
              });
            }
            fileUploader.clear();
            // }
          };
          // function is called with parameter 1 if simulate button is clicked, else called with 0
          FlightDataExchangeComponent.prototype.import = function(simulate) {
            var _this = this;
            if (this.fileName !== '') {
              var partialMessageKey = this.getTranslateKey('importData');
              this.confirmationService.confirm({
                interpolateParams: { 'importData.fileName': this.fileName },
                contextKeys: [this.getTranslateKey('importData.line1')],
                messageKey: partialMessageKey,
                delayCallback: true,
                accept: function() {
                  // Importing Excel file
                  _this.showSpinner = true;
                  var isExcel =
                    _this.showDocExtension(_this.file) === FileExtensions.xlsx ||
                    _this.showDocExtension(_this.file) === FileExtensions.xls;
                  if (_this.format === _this.component.excel && isExcel) {
                    var excelInput = {
                      fileName: _this.fileName,
                      excelSource: _this.file.docFile,
                      removingChoice: false,
                      familyCodeSelected: undefined,
                      variantCodeSelected: undefined,
                      isSimulated: simulate,
                      data: _this.component.flights
                    };
                    _this.flightDataExchangeService.saveExcelFleetDataExchange(excelInput).subscribe(
                      function(result) {
                        _this.fileName = '';
                        var importReport = result + '\n' + _this.getTranslation('importReportError');
                        _this.importReportMessage = importReport;
                        _this.showImportReportMessage = true;
                        _this.loadReportList();
                        _this.showSpinner = false;
                      },
                      function() {
                        if (simulate) {
                          _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSimulate'));
                          _this.showSpinner = false;
                        } else {
                          _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnImport'));
                          _this.showSpinner = false;
                        }
                      }
                    );
                  } else if (_this.format === _this.component.excel && !isExcel) {
                    _this.fileName = '';
                    _this.messageService.showErrorMessage(_this.getTranslateKey('notExcel'));
                    _this.showSpinner = false;
                  }
                  // Import Xml File
                  if (_this.format === _this.component.xml) {
                    if (!!_this.file && !!_this.fileName && !!_this.file.docFile) {
                      var xmlInput = {
                        fileName: _this.fileName,
                        xmlSource: _this.file.docFile,
                        simulated: simulate,
                        data: _this.component.flights
                      };
                      if (_this.showDocExtension(_this.file) === _this.component.xml.toLowerCase()) {
                        _this.importXmlData(xmlInput);
                      } else {
                        _this.messageService.showErrorMessage(_this.getTranslateKey('notXml'));
                        _this.showSpinner = false;
                      }
                    } else {
                      _super.prototype.throwUnboundLocalError.call(
                        _this,
                        'import',
                        'this.fileName && this.file && this.data && this.file.docFile'
                      );
                      _this.showSpinner = false;
                    }
                  }
                }
              });
            }
          };
          FlightDataExchangeComponent.prototype.importXmlData = function(xmlInput) {
            var _this = this;
            this.flightDataExchangeService.saveXmlFleetDataExchange(xmlInput).subscribe(
              function(result) {
                _this.fileName = '';
                _this.importReportMessage = result;
                _this.showImportReportMessage = true;
                _this.loadReportList();
                _this.showSpinner = false;
                _this.showSpinner = false;
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnImport'));
              }
            );
          };
          FlightDataExchangeComponent.prototype.export = function() {
            var _this = this;
            this.showSpinner = true;
            var xmlInput = {
              equipmentCode: [],
              date: new Date(),
              lockAsset: false
            };
            this.superiorTable.forEach(function(row) {
              xmlInput.equipmentCode.push(row.equipmentCode);
            });
            if (this.type === this.component.export) {
              if (this.format === this.component.xml) {
                if (this.superiorTable.length !== 0) {
                  xmlInput.date = this.exportDataFrom;
                  this.flightDataExchangeService
                    .exportFlightsData(xmlInput)
                    .pipe(
                      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                        _this.showSpinner = false;
                      })
                    )
                    .subscribe(function(bytes) {
                      _this.flightDataExchangeService.getServerDate().subscribe(function(result) {
                        var templateName =
                          _this.translateService.instant(_this.getTranslateKey('flightsDataExportFileNamePrefix')) +
                          '_' +
                          _this.datepipe.transform(result, _this.component.dateFormat) +
                          'h' +
                          _this.datepipe.transform(result, _this.component.monthFormat) +
                          '.' +
                          FileExtensions.zip;
                        _this.downLoadFiles(bytes, templateName);
                        _this.loadReportList();
                      });
                    });
                } else {
                  this.showSpinner = false;
                  this.messageService.showErrorMessage(this.getTranslateKey('addAssets'));
                }
              }
            }
          };
          FlightDataExchangeComponent.prototype.showImportReports = function() {
            var returnValue = false;
            if (this.type === this.component.loading) {
              if (this.format === this.component.excel) {
                returnValue = true;
              } else if (this.format === this.component.xml) {
                returnValue = true;
              }
            }
            return returnValue;
          };
          // Event to delete report entry
          FlightDataExchangeComponent.prototype.deleteReports = function() {
            var _this = this;
            if (this.selectedReports !== []) {
              var partialMessageKey_1 =
                this.selectedReports.length > 1 ? 'confirmDeleteSelectedReports' : 'confirmDeleteSelectedReport';
              var reports_1 = new Array();
              this.selectedReports.forEach(function(report) {
                if (report && report.reportId) {
                  var reportId = {
                    reportId: report.reportId
                  };
                  reports_1.push(reportId);
                }
              });
              this.confirmationService.confirmDelete({
                messageKey: this.getTranslateKey(partialMessageKey_1),
                accept: function() {
                  _this.flightDataExchangeService.deleteReportEntry(reports_1).subscribe(
                    function(results) {
                      var messageKey =
                        partialMessageKey_1 === 'confirmDeleteSelectedReports'
                          ? _this.getTranslateKey('successOnDeleteReports')
                          : _this.getTranslateKey('successOnDeleteReport');
                      _this.messageService.showSuccessMessage(messageKey);
                      _this.selectedReports = [];
                      _this.loadReportList();
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
          FlightDataExchangeComponent.prototype.deleteExportReports = function() {
            var _this = this;
            if (this.selectedExportReports !== []) {
              var partialMessageKey_2 =
                this.selectedExportReports.length > 1 ? 'confirmDeleteSelectedReports' : 'confirmDeleteSelectedReport';
              var reports_2 = new Array();
              this.selectedExportReports.forEach(function(report) {
                if (report && report.reportId) {
                  var reportId = {
                    reportId: report.reportId
                  };
                  reports_2.push(reportId);
                }
              });
              this.confirmationService.confirmDelete({
                messageKey: this.getTranslateKey(partialMessageKey_2),
                accept: function() {
                  _this.flightDataExchangeService.deleteReportEntry(reports_2).subscribe(
                    function(results) {
                      var messageKey =
                        partialMessageKey_2 === 'confirmDeleteSelectedReports'
                          ? _this.getTranslateKey('successOnDeleteReports')
                          : _this.getTranslateKey('successOnDeleteReport');
                      _this.messageService.showSuccessMessage(messageKey);
                      _this.selectedExportReports = [];
                      _this.loadReportList();
                    },
                    function() {
                      var messageKey =
                        partialMessageKey_2 === 'confirmDeleteSelectedReports'
                          ? _this.getTranslateKey('errorOnDeleteReports')
                          : _this.getTranslateKey('errorOnDeleteReport');
                      _this.messageService.showSuccessMessage(messageKey);
                    }
                  );
                }
              });
            }
          };
          FlightDataExchangeComponent.prototype.deleteAssets = function() {
            var _this = this;
            if (this.selectedAssetTask !== []) {
              var partialMessageKey = 'global.deleteConfirmationMsg';
              this.confirmationService.confirmDelete({
                messageKey: partialMessageKey,
                accept: function() {
                  _this.superiorTable = _this.superiorTable.filter(function(asset) {
                    return !_this.selectedAssetTask.includes(asset);
                  });
                  _this.selectedAssetTask = [];
                }
              });
            }
          };
          FlightDataExchangeComponent.prototype.openReportDetail = function(object) {
            var _this = this;
            if (!!object && !!object.reportId) {
              var bireReportDTOId = {
                reportId: object.reportId
              };
              this.flightDataExchangeService.openImportReportContent(bireReportDTOId).subscribe(function(result) {
                if (!!object && !!object.reportName) {
                  if (
                    object.reportName.includes('.' + FileExtensions.txt) ||
                    object.reportName.includes('.' + FileExtensions.zip)
                  ) {
                    _this.downLoadFiles(result, object.reportName);
                  } else if (_this.type === _this.component.loading) {
                    _this.downLoadFiles(result, object.reportName + '.' + FileExtensions.txt);
                  } else if (_this.type === _this.component.export) {
                    _this.downLoadFiles(result, object.reportName + '.' + FileExtensions.zip);
                  }
                } else {
                  _super.prototype.throwUnboundLocalError.call(_this, 'openReportDetail', 'object.reportName');
                }
              });
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'openReportDetail', 'object.reportId');
            }
          };
          // Method to set table columns
          FlightDataExchangeComponent.prototype.setExportTableCols = function() {
            this.assetSelectionTableCols = [
              { field: 'equipmentText', width: '10%' },
              { field: 'equipmentFamilyVariantCode', width: '10%' },
              { field: 'equipmentRegistration', width: '10%' },
              { field: 'equipmentPn', width: '5%' },
              { field: 'equipmentDesignation', width: '10%' },
              { field: 'equipmentFunction', width: '10%' },
              { field: 'equipmentSn', width: '5%' },
              { field: 'equipmentSupAsset', width: '10%' },
              { field: 'equipmentOwner', width: '5%' },
              { field: 'equipmentOperator', width: '10%' },
              { field: 'equipmentLocation', width: '10%' },
              { field: 'equipmentOperationalStatus', width: '10%' },
              { field: 'equipmentCode', width: '5%' }
            ];
            this.exportReportTableCols = [
              { field: 'reportCode', alignment: 'center' },
              { field: 'reportName', alignment: 'center' },
              { field: 'statusUser', alignment: 'center' },
              { field: 'statusDate', alignment: 'center' }
            ];
          };
          // Modifying table columns depending on search criteria
          FlightDataExchangeComponent.prototype.initImportTableCols = function() {
            this.reportTableCols = [
              { field: 'reportCode', alignment: 'center' },
              { field: 'reportName', alignment: 'center', width: '25rem' },
              { field: 'statusUser', alignment: 'center' },
              { field: 'statusDate', alignment: 'center' }
            ];
          };
          FlightDataExchangeComponent.prototype.loadReportList = function() {
            this.selectedReports = [];
            this.reports = [];
            if (!!this.format && !!this.type) {
              var input = {
                data: this.getTranslation('flights'),
                format: this.format,
                type: this.type,
                reportCode: ''
              };
              if (this.type === this.component.loading) {
                // 'Loading'
                if (this.format === this.component.excel) {
                  // 'Excel'
                  input.reportCode = 'XLS_MISSION_IMPORT_REPORT_CODE';
                  this.hitFetchAPI(input);
                } else if (this.format === this.component.xml) {
                  input.reportCode = 'XML_MISSION_IMPORT_REPORT_CODE';
                  this.hitFetchAPI(input);
                }
              } else if (this.type === this.component.export) {
                if (this.format === this.component.xml) {
                  input.reportCode = 'ZIP_MISSION_EXPORT_REPORT';
                  this.hitFetchAPI(input);
                }
              }
            }
          };
          FlightDataExchangeComponent.prototype.setSelectedAssetsFromSelectionDilog = function(event) {
            var _this = this;
            event.forEach(function(e) {
              var inSuperiorTable = _this.superiorTable.filter(function(asset) {
                return asset.equipmentCode === e.equipmentCode;
              });
              if (inSuperiorTable.length === 0) {
                _this.superiorTable.push(e);
              }
            });
          };
          FlightDataExchangeComponent.prototype.hitFetchAPI = function(input) {
            var _this = this;
            this.isReportLoading = true;
            this.flightDataExchangeService.fetchFleetDataExchangeReport(input).subscribe(function(result) {
              _this.reports = result;
              _this.isReportLoading = false;
            });
          };
          FlightDataExchangeComponent.prototype.resetScreen = function() {
            this.file = {};
            this.fileName = '';
            this.superiorTable = [];
            this.reports = [];
            this.exportDataFrom = undefined;
          };
          // Load Dropdown with data at initial
          FlightDataExchangeComponent.prototype.loadDropDownLists = function() {
            var _this = this;
            this.flightDataExchangeService.findTypeList().subscribe(
              function(results) {
                _this.propertyTypeList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_14__['ListUtils']
                  .orEmpty(results)
                  .map(function(elt) {
                    // FIXME
                    if (elt.value === 'Loading') {
                      elt.label = _this.translateService.instant('loading');
                    } else if (elt.value === 'Export') {
                      elt.label = _this.translateService.instant('export');
                    }
                    return elt;
                  });
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetTypeList'));
              }
            );
          };
          FlightDataExchangeComponent.prototype.getTranslation = function(label) {
            return this.translateService.instant(this.getTranslateKey(label));
          };
          FlightDataExchangeComponent.prototype.showDocExtension = function(document) {
            return _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_13__['FileUtils'].getExtension(document.docName);
          };
          /*************************
           * Asset(s) selection popup
           *************************/
          FlightDataExchangeComponent.prototype.openAssetsSelectionDialog = function() {
            this.showAssetsSelectionDialog = true;
          };
          var FlightDataExchangeComponent_1;
          FlightDataExchangeComponent.loading = 'Loading';
          FlightDataExchangeComponent.excel = 'Excel';
          FlightDataExchangeComponent.xml = 'Xml';
          FlightDataExchangeComponent.export = 'Export';
          FlightDataExchangeComponent.flights = 'Flights';
          FlightDataExchangeComponent.dateFormat = 'dd-MM-yyyy_HH';
          FlightDataExchangeComponent.monthFormat = 'mm';
          FlightDataExchangeComponent = FlightDataExchangeComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Component'])({
                selector: 'aw-flight-data-exchange',
                template: __webpack_require__(
                  /*! ./flight-data-exchange.component.html */ './src/app/main/collaborative-cockpit/flight-data-exchange/flight-data-exchange.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__['MessageService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__['TabService'],
                _flight_data_exchange_service__WEBPACK_IMPORTED_MODULE_15__['FlightDataExchangeService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__['SessionService'],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__['DatePipe'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__['ConfirmationService']
              ])
            ],
            FlightDataExchangeComponent
          );
          return FlightDataExchangeComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_12__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/flight-data-exchange/flight-data-exchange.service.ts':
      /*!*************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/flight-data-exchange/flight-data-exchange.service.ts ***!
  \*************************************************************************************************/
      /*! exports provided: FlightDataExchangeService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FlightDataExchangeService',
          function() {
            return FlightDataExchangeService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_engineering_data_exchange_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/engineering-data-exchange.api */ './src/app/shared/api/engineering-data-exchange.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_api_standard_export_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/api/standard-export.api */ './src/app/shared/api/standard-export.api.ts'
        );
        /* harmony import */ var _shared_api_standard_import_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/api/standard-import.api */ './src/app/shared/api/standard-import.api.ts'
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

        var FlightDataExchangeService = /** @class */ (function(_super) {
          __extends(FlightDataExchangeService, _super);
          function FlightDataExchangeService(
            http,
            appConfigService,
            engineeringDataExchangeApi,
            standardImportApi,
            fleetManagementApi,
            productStructureManagementApi,
            standardExportController
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.engineeringDataExchangeApi = engineeringDataExchangeApi;
            _this.standardImportApi = standardImportApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.standardExportController = standardExportController;
            return _this;
          }
          FlightDataExchangeService.prototype.findTypeList = function() {
            return _super.prototype.post.call(this, this.engineeringDataExchangeApi.findTypeList);
          };
          FlightDataExchangeService.prototype.getTemplate = function(input) {
            return _super.prototype.post.call(this, this.standardImportApi.getImportFleetDataTemplate, input);
          };
          FlightDataExchangeService.prototype.openImportReportContent = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoReportContentOfBidoReport, input);
          };
          FlightDataExchangeService.prototype.exportFlightsData = function(input) {
            return _super.prototype.post.call(this, this.standardExportController.exportFlights, input);
          };
          FlightDataExchangeService.prototype.deleteReportEntry = function(reportId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.removeBidoReport, reportId);
          };
          FlightDataExchangeService.prototype.saveExcelFleetDataExchange = function(excelInput) {
            return _super.prototype.post.call(this, this.fleetManagementApi.saveExcelFleetDataExchange, excelInput);
          };
          FlightDataExchangeService.prototype.saveXmlFleetDataExchange = function(xmlInput) {
            return _super.prototype.post.call(this, this.fleetManagementApi.saveXmlFleetDataExchange, xmlInput);
          };
          FlightDataExchangeService.prototype.getServerDate = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.getServerDate);
          };
          FlightDataExchangeService.prototype.fetchFleetDataExchangeReport = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.fetchFleetDataExchangeReport, input);
          };
          FlightDataExchangeService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])({
                providedIn: 'root'
              }),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__['AppConfigService'],
                _shared_api_engineering_data_exchange_api__WEBPACK_IMPORTED_MODULE_2__['EngineeringDataExchangeApi'],
                _shared_api_standard_import_api__WEBPACK_IMPORTED_MODULE_6__['StandardImportApi'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__['FleetManagementApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_standard_export_api__WEBPACK_IMPORTED_MODULE_5__['StandardExportApi']
              ])
            ],
            FlightDataExchangeService
          );
          return FlightDataExchangeService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/hr-data-exchange/hr-data-exchange.component.html':
      /*!*********************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/hr-data-exchange/hr-data-exchange.component.html ***!
  \*********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle">\r\n        {{ "page.searchPage" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label"></label>\r\n                    <div class="form-control">\r\n                      <span\r\n                        (click)="openTemplate(loadTemplate())"\r\n                        style="cursor: pointer; text-decoration: underline; color: blue"\r\n                      >\r\n                        {{ loadTemplate() }}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row grid-cell--6">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{\r\n                      componentData.componentId + ".employeeFileToImport" | translate\r\n                    }}</label>\r\n\r\n                    <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n                      <div class="form-control-data">\r\n                        {{ fileName }}\r\n                      </div>\r\n\r\n                      <div class="btn-file-upload-wrapper">\r\n                        <p-fileUpload\r\n                          #fileUploader\r\n                          *ngIf="!isReadOpenMode"\r\n                          class="aw-fileupload"\r\n                          name="document[]"\r\n                          customUpload="true"\r\n                          mode="basic"\r\n                          auto="true"\r\n                          chooseLabel=""\r\n                          (uploadHandler)="uploadDocument($event, fileUploader)"\r\n                        ></p-fileUpload>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <button type="button" class="btn-with-spinner" mat-raised-button (click)="import()">\r\n                      <span class="lds-hourglass" *ngIf="showSpinner"></span>\r\n                      <i class="fa fa-fw fa-plus" aria-hidden="true"></i>\r\n                      <span>{{ componentData.componentId + ".importFile" | translate }}</span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-import-report-popup\r\n  *ngIf="showImportReportMessage"\r\n  [importReportMessage]="importReportMessage"\r\n  [(display)]="showImportReportMessage"\r\n></aw-import-report-popup>\r\n';

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/hr-data-exchange/hr-data-exchange.component.ts':
      /*!*******************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/hr-data-exchange/hr-data-exchange.component.ts ***!
  \*******************************************************************************************/
      /*! exports provided: HrDataExchangeComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'HrDataExchangeComponent',
          function() {
            return HrDataExchangeComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _hr_data_exchange_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./hr-data-exchange.service */ './src/app/main/collaborative-cockpit/hr-data-exchange/hr-data-exchange.service.ts'
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

        var HrDataExchangeComponent = /** @class */ (function(_super) {
          __extends(HrDataExchangeComponent, _super);
          function HrDataExchangeComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            confirmationService,
            hrDataExchangeService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.confirmationService = confirmationService;
            _this.hrDataExchangeService = hrDataExchangeService;
            _this.fileName = '';
            _this.showImportReportMessage = false;
            _this.importReportMessage = '';
            _this.showSpinner = false;
            return _this;
          }
          HrDataExchangeComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
          };
          HrDataExchangeComponent.prototype.getComponentName = function() {
            return 'HrDataExchangeComponent';
          };
          // For Doc Import
          HrDataExchangeComponent.prototype.uploadDocument = function(event, fileUploader) {
            var _this = this;
            if (event.files) {
              var file_1 = event.files[0];
              {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_9__['FileUtils'].getFileContentAsBase64(
                  file_1,
                  function(fileContent) {
                    if (fileContent) {
                      _this.file = {
                        docFile: fileContent,
                        docName: file_1.name,
                        docPublicationDate: new Date()
                      };
                      _this.fileName = _this.file.docName;
                    }
                  }
                );
              }
              fileUploader.clear();
            }
          };
          HrDataExchangeComponent.prototype.openTemplate = function(templateName) {
            var _this = this;
            this.hrDataExchangeService.getImportEmployee().subscribe(function(result) {
              _this.downLoadFiles(result, templateName);
            });
            // const partialMessageKey = this.getTranslateKey('openReport');
            // this.confirmationService.confirm({
            //   interpolateParams: { 'openReport.reportName': templateName },
            //   messageKey: partialMessageKey,
            //   accept: () => {
            //     this.hrDataExchangeService.getImportEmployee().subscribe((result) => {
            //       this.downLoadFiles(result, templateName);
            //     });
            //   }
            // });
          };
          HrDataExchangeComponent.prototype.downLoadFiles = function(docFile, docName) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_9__['FileUtils'].downloadFile(docFile, docName);
          };
          HrDataExchangeComponent.prototype.loadTemplate = function() {
            return 'TEMPLATE_EMPLOYEE.xls';
          };
          HrDataExchangeComponent.prototype.showDocExtension = function(document) {
            return _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_9__['FileUtils'].getExtension(document.docName);
          };
          /**
           * function is called with parameter 1 if simulate button is clicked, else called with 0
           */
          HrDataExchangeComponent.prototype.import = function() {
            var _this = this;
            if (this.fileName !== '') {
              var partialMessageKey = this.getTranslateKey('importData');
              this.confirmationService.confirm({
                interpolateParams: { 'importData.fileName': this.fileName },
                contextKeys: [this.getTranslateKey('importData.line1')],
                messageKey: partialMessageKey,
                accept: function() {
                  // Importing Excel file
                  _this.showSpinner = true;
                  if (_this.fileName && _this.file.docFile) {
                    var excelInput = {
                      fileName: _this.fileName,
                      excelSource: _this.file.docFile
                    };
                    _this.hrDataExchangeService.importEmployeeFromExcel(excelInput).subscribe(function(result) {
                      _this.fileName = '';
                      _this.showImportReportMessage = true;
                      _this.importReportMessage = result.reportRepresentation;
                      _this.showSpinner = false;
                    });
                  }
                }
              });
            }
          };
          HrDataExchangeComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-hr-data-exchange',
                template: __webpack_require__(
                  /*! ./hr-data-exchange.component.html */ './src/app/main/collaborative-cockpit/hr-data-exchange/hr-data-exchange.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_7__['TabService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_2__['ConfirmationService'],
                _hr_data_exchange_service__WEBPACK_IMPORTED_MODULE_10__['HrDataExchangeService']
              ])
            ],
            HrDataExchangeComponent
          );
          return HrDataExchangeComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_8__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/hr-data-exchange/hr-data-exchange.service.ts':
      /*!*****************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/hr-data-exchange/hr-data-exchange.service.ts ***!
  \*****************************************************************************************/
      /*! exports provided: HrDataExchangeService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'HrDataExchangeService', function() {
          return HrDataExchangeService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_standard_import_bidt_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/standard-import-bidt.api */ './src/app/shared/api/standard-import-bidt.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

        var HrDataExchangeService = /** @class */ (function(_super) {
          __extends(HrDataExchangeService, _super);
          function HrDataExchangeService(http, appConfigService, standardImportBidtApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.standardImportBidtApi = standardImportBidtApi;
            return _this;
          }
          HrDataExchangeService.prototype.getImportEmployee = function() {
            return _super.prototype.post.call(this, this.standardImportBidtApi.getImportEmployeeXLS);
          };
          HrDataExchangeService.prototype.importEmployeeFromExcel = function(file) {
            return _super.prototype.post.call(this, this.standardImportBidtApi.importEmployeeFromExcel, file);
          };
          HrDataExchangeService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_standard_import_bidt_api__WEBPACK_IMPORTED_MODULE_2__['StandardImportBidtApi']
              ])
            ],
            HrDataExchangeService
          );
          return HrDataExchangeService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/logistic-data-exchange/logistic-data-exchange.component.html':
      /*!*********************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/logistic-data-exchange/logistic-data-exchange.component.html ***!
  \*********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle">\r\n        {{ "page.searchPage" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label"></label>\r\n                    <div class="form-control">\r\n                      <span\r\n                        (click)="openTemplate(loadTemplate())"\r\n                        style="cursor: pointer; text-decoration: underline; color: blue"\r\n                      >\r\n                        {{ loadTemplate() }}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row  grid-cell--6">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{\r\n                      componentData.componentId + ".materialFileToImport" | translate\r\n                    }}</label>\r\n\r\n                    <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n                      <div class="form-control-data">\r\n                        {{ fileName }}\r\n                      </div>\r\n\r\n                      <div class="btn-file-upload-wrapper">\r\n                        <p-fileUpload\r\n                          #fileUploader\r\n                          *ngIf="!isReadOpenMode"\r\n                          class="aw-fileupload"\r\n                          name="document[]"\r\n                          customUpload="true"\r\n                          mode="basic"\r\n                          auto="true"\r\n                          chooseLabel=""\r\n                          (uploadHandler)="uploadDocument($event, fileUploader)"\r\n                        ></p-fileUpload>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <button type="button" class="btn-with-spinner" mat-raised-button (click)="import()">\r\n                      <span class="lds-hourglass" *ngIf="showSpinner"></span>\r\n                      <i class="fa fa-fw fa-plus" aria-hidden="true"></i>\r\n                      <span>{{ componentData.componentId + ".importFile" | translate }}</span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-import-report-popup\r\n  *ngIf="showImportReportMessage"\r\n  [importReportMessage]="importReportMessage"\r\n  [(display)]="showImportReportMessage"\r\n></aw-import-report-popup>\r\n';

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/logistic-data-exchange/logistic-data-exchange.component.ts':
      /*!*******************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/logistic-data-exchange/logistic-data-exchange.component.ts ***!
  \*******************************************************************************************************/
      /*! exports provided: LogisticDataExchangeComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'LogisticDataExchangeComponent',
          function() {
            return LogisticDataExchangeComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _logistic_data_exchange_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./logistic-data-exchange.service */ './src/app/main/collaborative-cockpit/logistic-data-exchange/logistic-data-exchange.service.ts'
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

        var LogisticDataExchangeComponent = /** @class */ (function(_super) {
          __extends(LogisticDataExchangeComponent, _super);
          function LogisticDataExchangeComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            confirmationService,
            logisticDataExchangeService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.confirmationService = confirmationService;
            _this.logisticDataExchangeService = logisticDataExchangeService;
            _this.fileName = '';
            _this.showImportReportMessage = false;
            _this.importReportMessage = '';
            _this.showSpinner = false;
            return _this;
          }
          LogisticDataExchangeComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
          };
          LogisticDataExchangeComponent.prototype.getComponentName = function() {
            return 'LogisticDataExchangeComponent';
          };
          // For Doc Import
          LogisticDataExchangeComponent.prototype.uploadDocument = function(event, fileUploader) {
            var _this = this;
            if (event.files) {
              var file_1 = event.files[0];
              {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_9__['FileUtils'].getFileContentAsBase64(
                  file_1,
                  function(fileContent) {
                    if (fileContent) {
                      _this.file = {
                        docFile: fileContent,
                        docName: file_1.name,
                        docPublicationDate: new Date()
                      };
                      _this.fileName = _this.file.docName;
                    }
                  }
                );
              }
              fileUploader.clear();
            }
          };
          LogisticDataExchangeComponent.prototype.openTemplate = function(templateName) {
            var _this = this;
            this.logisticDataExchangeService.getImportMaterial().subscribe(function(result) {
              _this.downLoadFiles(result, templateName);
            });
            // const partialMessageKey = this.getTranslateKey('openReport');
            // this.confirmationService.confirm({
            //   interpolateParams: { 'openReport.reportName': templateName },
            //   messageKey: partialMessageKey,
            //   accept: () => {
            //     this.logisticDataExchangeService.getImportMaterial().subscribe((result) => {
            //       this.downLoadFiles(result, templateName);
            //     });
            //   }
            // });
          };
          LogisticDataExchangeComponent.prototype.downLoadFiles = function(docFile, docName) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_9__['FileUtils'].downloadFile(docFile, docName);
          };
          LogisticDataExchangeComponent.prototype.loadTemplate = function() {
            return 'TEMPLATE_MATERIAL.xls';
          };
          LogisticDataExchangeComponent.prototype.showDocExtension = function(document) {
            return _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_9__['FileUtils'].getExtension(document.docName);
          };
          /**
           * function is called with parameter 1 if simulate button is clicked, else called with 0
           */
          LogisticDataExchangeComponent.prototype.import = function() {
            var _this = this;
            if (this.fileName !== '') {
              var partialMessageKey = this.getTranslateKey('importData');
              this.confirmationService.confirm({
                interpolateParams: { 'importData.fileName': this.fileName },
                contextKeys: [this.getTranslateKey('importData.line1')],
                messageKey: partialMessageKey,
                accept: function() {
                  _this.showSpinner = true;
                  // Importing Excel file
                  if (!!_this.fileName && !!_this.file.docFile) {
                    var excelInput = {
                      fileName: _this.fileName,
                      excelSource: _this.file.docFile
                    };
                    _this.logisticDataExchangeService.importMaterialFromExcel(excelInput).subscribe(function(result) {
                      _this.fileName = '';
                      _this.showImportReportMessage = true;
                      _this.importReportMessage = result.reportRepresentation;
                      _this.showSpinner = false;
                    });
                  }
                }
              });
            }
          };
          LogisticDataExchangeComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-logistic-data-exchange',
                template: __webpack_require__(
                  /*! ./logistic-data-exchange.component.html */ './src/app/main/collaborative-cockpit/logistic-data-exchange/logistic-data-exchange.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_7__['TabService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_2__['ConfirmationService'],
                _logistic_data_exchange_service__WEBPACK_IMPORTED_MODULE_10__['LogisticDataExchangeService']
              ])
            ],
            LogisticDataExchangeComponent
          );
          return LogisticDataExchangeComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_8__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/collaborative-cockpit/logistic-data-exchange/logistic-data-exchange.service.ts':
      /*!*****************************************************************************************************!*\
  !*** ./src/app/main/collaborative-cockpit/logistic-data-exchange/logistic-data-exchange.service.ts ***!
  \*****************************************************************************************************/
      /*! exports provided: LogisticDataExchangeService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'LogisticDataExchangeService',
          function() {
            return LogisticDataExchangeService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_standard_import_bidt_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/standard-import-bidt.api */ './src/app/shared/api/standard-import-bidt.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

        var LogisticDataExchangeService = /** @class */ (function(_super) {
          __extends(LogisticDataExchangeService, _super);
          function LogisticDataExchangeService(http, appConfigService, standardImportBidtApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.standardImportBidtApi = standardImportBidtApi;
            return _this;
          }
          LogisticDataExchangeService.prototype.getImportMaterial = function() {
            return _super.prototype.post.call(this, this.standardImportBidtApi.getImportMaterialXLS);
          };
          LogisticDataExchangeService.prototype.importMaterialFromExcel = function(file) {
            return _super.prototype.post.call(this, this.standardImportBidtApi.importMaterialFromExcel, file);
          };
          LogisticDataExchangeService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_standard_import_bidt_api__WEBPACK_IMPORTED_MODULE_2__['StandardImportBidtApi']
              ])
            ],
            LogisticDataExchangeService
          );
          return LogisticDataExchangeService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-assets-selection/assets-selection-dialog.component.html':
      /*!**************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-assets-selection/assets-selection-dialog.component.html ***!
  \**************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="90">\r\n  <a-header>\r\n    <div class="modal-title">{{ "assetsSelectionDialog.title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="search-dialog-container">\r\n      <div class="section search-criteria-section">\r\n        <h4 class="section-title">{{ "assetsSelectionDialog.searchCriteria" | translate }}</h4>\r\n\r\n        <div class="section-content">\r\n          <div class="column">\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <div class="form-control">\r\n                  <p-radioButton\r\n                    inputId="opt1"\r\n                    class="aw-radio"\r\n                    name="group1"\r\n                    value="asset"\r\n                    [(ngModel)]="radio"\r\n                    (click)="radioButtonClick(\'asset\')"\r\n                    label="{{ \'assetsSelectionDialog.asset\' | translate }}"\r\n                  >\r\n                  </p-radioButton>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <div class="form-control">\r\n                  <p-radioButton\r\n                    inputId="opt2"\r\n                    class="aw-radio criteria-radio-margin"\r\n                    name="group1"\r\n                    value="fleet"\r\n                    [(ngModel)]="radio"\r\n                    (click)="radioButtonClick(\'fleet\')"\r\n                    label="{{ \'assetsSelectionDialog.fleet\' | translate }}"\r\n                  ></p-radioButton>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group"></div>\r\n            </div>\r\n\r\n            <div class="row" *ngIf="radio === component.assetValue">\r\n              <div class="form-group">\r\n                <label class="form-label">{{ "assetsSelectionDialog.assetType" | translate }}</label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="assetTypes"\r\n                    [(ngModel)]="searchObject.assetType"\r\n                    (onChange)="onChangeAssetType($event)"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label">{{ "assetsSelectionDialog.familyVariant" | translate }}</label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="familyVariants"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    [(ngModel)]="searchObject.familyVariantCode"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label">{{ "assetsSelectionDialog.opStatus" | translate }}</label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="opStatuses"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    [(ngModel)]="searchObject.operationStatus"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="row" *ngIf="radio === component.assetValue">\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{\r\n                    (searchObject.assetType === awPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY\r\n                      ? "assetsSelectionDialog.msn"\r\n                      : searchObject.assetType === awPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY\r\n                      ? "assetsSelectionDialog.esn"\r\n                      : "assetsSelectionDialog.equipmentSn"\r\n                    ) | translate\r\n                  }}\r\n                </label>\r\n                <div class="form-control">\r\n                  <input type="text" class="aw-input" [(ngModel)]="searchObject.snCriteria" />\r\n                </div>\r\n              </div>\r\n              <div class="form-group" *ngIf="searchObject.assetType !== \'Tool\'">\r\n                <label class="form-label"> {{ "assetsSelectionDialog.operator" | translate }} </label>\r\n\r\n                <div class="form-control form-control-with-modal">\r\n                  <div class="form-control-data" (click)="openCustomerQuickSearchDialog()">\r\n                    {{ searchObject.operationCriteria }}\r\n                  </div>\r\n                  <div class="btn-search-wrapper">\r\n                    <i\r\n                      class="fa fa-fw fa-search aw-icon btn-search"\r\n                      aria-hidden="true"\r\n                      (click)="openCustomerQuickSearchDialog()"\r\n                    ></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ "assetsSelectionDialog.warehouse" | translate }} </label>\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="warehouses"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    [(ngModel)]="searchObject.warehouseCriteria"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group" *ngIf="searchObject.assetType === \'Equipment\'">\r\n                <label class="form-label"> {{ "assetsSelectionDialog.function" | translate }} </label>\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="functions"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    [(ngModel)]="searchObject.assetFunction"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="row" *ngIf="radio === component.fleetValue">\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ "assetsSelectionDialog.fleet" | translate }} </label>\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="fleets"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    [(ngModel)]="searchObject.fleetType"\r\n                    (onChange)="searchAssets()"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group"></div>\r\n\r\n              <div class="form-group"></div>\r\n            </div>\r\n\r\n            <div class="row search-criteria-footer">\r\n              <div class="search-actions">\r\n                <button type="button" mat-raised-button color="primary" (click)="searchAssets()">\r\n                  <span>{{ "global.toSearch" | translate }}</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section results-section">\r\n        <h4 class="section-title">\r\n          {{ "assetsSelectionDialog.assetsList" | translate }} ({{ assetsTable.list ? assetsTable.list.length : 0 }})\r\n        </h4>\r\n\r\n        <div class="section-content">\r\n          <p-table\r\n            [resizableColumns]="true"\r\n            #ptable\r\n            class="aw-table2"\r\n            [columns]="assetsTableCols"\r\n            [value]="assetsTable.list"\r\n            [style]="{ margin: \'0 auto\', width: \'100%\' }"\r\n            [(selection)]="selectedAssets"\r\n            (onFilter)="onFilter($event)"\r\n            [scrollable]="true"\r\n            scrollHeight="400px"\r\n          >\r\n            <ng-template pTemplate="emptymessage">\r\n              <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n              <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                <div class="lds-hourglass"></div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="caption">\r\n              <div class="aw-table-header">\r\n                <div class="aw-table-global-filter">\r\n                  <label class="aw-table-global-filter-label">\r\n                    <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    #ptableGlobalFilter\r\n                    type="text"\r\n                    class="aw-table-global-filter-input"\r\n                    placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                    (input)="ptable.filterGlobal($event.target.value, \'contains\')"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="colgroup" let-columns>\r\n              <colgroup>\r\n                <col style="width: 3rem; text-align: center;" />\r\n                <col *ngFor="let col of columns" [style.width]="col.width" />\r\n              </colgroup>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="header" let-columns>\r\n              <tr>\r\n                <th class="aw-table-checkbox-header">\r\n                  <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                </th>\r\n                <th pResizableColumn *ngFor="let col of columns" [pSortableColumn]="col.field" [ngSwitch]="col.field">\r\n                  <span *ngSwitchCase="\'equipmentSn\'">\r\n                    {{\r\n                      (searchObject.assetType === awPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY\r\n                        ? "assetsSelectionDialog.msn"\r\n                        : searchObject.assetType === awPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY\r\n                        ? "assetsSelectionDialog.esn"\r\n                        : "assetsSelectionDialog.equipmentSn"\r\n                      ) | translate\r\n                    }}\r\n                  </span>\r\n                  <span *ngSwitchDefault>\r\n                    {{ "assetsSelectionDialog" + "." + col.field | translate }}\r\n                  </span>\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n              <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                <td class="aw-table-checkbox-wrapper">\r\n                  <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                </td>\r\n\r\n                <td *ngFor="let col of columns">\r\n                  <span> {{ rowData[col.field] }} </span>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </p-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" *ngIf="!isReadOpenMode" mat-raised-button (click)="onCancel()">\r\n      <i class="fa fa-fw fa-times" aria-hidden="true"></i> <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      type="button"\r\n      *ngIf="!isReadOpenMode"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="onValidate()"\r\n      [disabled]="selectedAssets.length === 0"\r\n      [ngClass]="{ inactive: selectedAssets.length === 0 }"\r\n    >\r\n      <i class="fa fa-fw fa-check" aria-hidden="true"></i> <span>{{ "global.validate" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-customer\r\n  *ngIf="showCustomerQuickSearchPopup"\r\n  [(display)]="showCustomerQuickSearchPopup"\r\n  [customer-code]="searchObject.operationCriteria"\r\n  (onSelected)="setSelectedBusinessPartner($event)"\r\n>\r\n</aw-dialog-search-customer>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/dialog-assets-selection/assets-selection-dialog.component.scss':
      /*!**************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-assets-selection/assets-selection-dialog.component.scss ***!
  \**************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .form-group {\n  margin-right: 30px;\n  width: 30%;\n  margin-top: 0px; }\n  :host .form-group:last-of-type {\n    margin-right: 0; }\n  :host .search-criteria-primary .aw-button-level3 {\n  font-size: 0.9rem;\n  max-height: 30px;\n  min-height: 30px;\n  min-width: 50px; }\n  :host .dialog-panel-result {\n  margin-top: 25px; }\n  :host .panel-result-footer {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 30px; }\n  :host .search-action-right {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nLWFzc2V0cy1zZWxlY3Rpb24vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZGlhbG9nLWFzc2V0cy1zZWxlY3Rpb25cXGFzc2V0cy1zZWxlY3Rpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlLEVBQUE7RUFKbkI7SUFNTSxlQUFlLEVBQUE7RUFOckI7RUFXTSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7RUFkckI7RUFrQkksZ0JBQWdCLEVBQUE7RUFsQnBCO0VBc0JJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGdCQUFnQixFQUFBO0VBekJwQjtFQTZCSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RpYWxvZy1hc3NldHMtc2VsZWN0aW9uL2Fzc2V0cy1zZWxlY3Rpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1wcmltYXJ5IHtcclxuICAgIC5hdy1idXR0b24tbGV2ZWwzIHtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmRpYWxvZy1wYW5lbC1yZXN1bHQge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1yZXN1bHQtZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtYWN0aW9uLXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/shared/components/dialog-assets-selection/assets-selection-dialog.component.ts':
      /*!************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-assets-selection/assets-selection-dialog.component.ts ***!
  \************************************************************************************************/
      /*! exports provided: AssetsSelectionDialogComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AssetsSelectionDialogComponent',
          function() {
            return AssetsSelectionDialogComponent;
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
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _assets_selection_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./assets-selection-dialog.service */ './src/app/shared/components/dialog-assets-selection/assets-selection-dialog.service.ts'
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

        var AssetsSelectionDialogComponent = /** @class */ (function(_super) {
          __extends(AssetsSelectionDialogComponent, _super);
          function AssetsSelectionDialogComponent(assetSelectionDialogService, messageService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'assetsSelectionDialog'
              ) || this;
            _this.assetSelectionDialogService = assetSelectionDialogService;
            _this.messageService = messageService;
            _this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.component = AssetsSelectionDialogComponent_1;
            _this.awPropertiesConstants =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants'];
            _this.showCustomerQuickSearchPopup = false;
            _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.minimize = false;
            _this.radio = _this.component.assetValue;
            _this.oldRadioValue = _this.component.assetValue;
            _this.searchObject = {};
            _this.assetTypes = [];
            _this.familyVariants = [];
            _this.opStatuses = [];
            _this.warehouses = [];
            _this.functions = [];
            _this.fleets = [];
            _this.assetsTable = {
              list: [],
              moreResults: false
            };
            _this.totalFilteredRows = 0;
            _this.selectedAssets = [];
            _this.assetsTableCols = [
              { field: 'equipmentText', width: '250px' },
              { field: 'equipmentFamilyVariantCode', width: '100px' },
              { field: 'equipmentRegistration', width: '100px' },
              { field: 'equipmentPn', width: '100px' },
              { field: 'equipmentDesignation', width: '110px' },
              { field: 'equipmentFunction', width: '90px' },
              { field: 'equipmentSn', width: '100px' },
              { field: 'equipmentSupAsset', width: '110px' },
              { field: 'equipmentOwner', width: '90px' },
              { field: 'equipmentOperator', width: '90px' },
              { field: 'equipmentLocation', width: '90px' },
              { field: 'equipmentOperationalStatus', width: '150px' },
              { field: 'equipmentCode', width: '150px' }
            ];
            _this.loadDropdowns();
            _this.isLoading = false;
            return _this;
          }
          AssetsSelectionDialogComponent_1 = AssetsSelectionDialogComponent;
          // tslint:disable-next-line:no-any
          AssetsSelectionDialogComponent.prototype.onFilter = function(event) {
            this.totalFilteredRows = event.filteredValue.length;
          };
          // Fetching Dropdown data
          AssetsSelectionDialogComponent.prototype.loadDropdowns = function() {
            var _this = this;
            // Asset type dropdown
            this.assetSelectionDialogService.getAssetTypeList().subscribe(function(results) {
              _this.assetTypes = results || [];
              _this.searchObject.assetType = _this.assetTypes[0].value;
              _this.hitFamilyVariantDropdownApi(_this.searchObject.assetType);
              _this.hitOperationalStatusDropdownApi(_this.searchObject.assetType);
            });
            // Warehouse dropdown
            this.assetSelectionDialogService.getWarehouseDropdownList().subscribe(function(results) {
              _this.warehouses = results || [];
            });
            // Function dropdown
            this.assetSelectionDialogService.getFunctionList().subscribe(function(results) {
              _this.functions = results || [];
            });
            // Fleet dropdown
            this.assetSelectionDialogService.getBidoFleetsBySearchCriteria({}).subscribe(function(result) {
              result.list.forEach(function(bidoFleetDTO) {
                var fleet = {
                  label: !!bidoFleetDTO.fleetName
                    ? bidoFleetDTO.fleetCode + ' - ' + bidoFleetDTO.fleetName
                    : bidoFleetDTO.fleetCode,
                  value: bidoFleetDTO.fleetId
                };
                _this.fleets.push(fleet);
              });
            });
          };
          // tslint:disable-next-line:no-any
          AssetsSelectionDialogComponent.prototype.onChangeAssetType = function(event) {
            if (event.value === '' || !this.notUndefinedAndNull(event.value)) {
              // Family variant dropdown
              this.hitFamilyVariantDropdownApi(event.value);
              this.hitOperationalStatusDropdownApi(event.value);
            }
          };
          AssetsSelectionDialogComponent.prototype.hitFamilyVariantDropdownApi = function(assetType) {
            var _this = this;
            this.assetSelectionDialogService.getFamilyVariantList(assetType).subscribe(function(results) {
              _this.familyVariants = results || [];
            });
          };
          AssetsSelectionDialogComponent.prototype.hitOperationalStatusDropdownApi = function(assetType) {
            var _this = this;
            this.assetSelectionDialogService.getOperationalStatusList(assetType).subscribe(function(results) {
              _this.opStatuses = results || [];
            });
          };
          AssetsSelectionDialogComponent.prototype.notUndefinedAndNull = function(property) {
            var value = property !== undefined && property !== null ? false : true;
            return value;
          };
          AssetsSelectionDialogComponent.prototype.onCancel = function() {
            this.display = false;
          };
          AssetsSelectionDialogComponent.prototype.onValidate = function() {
            this.onSelected.emit(this.selectedAssets);
            this.display = false;
          };
          AssetsSelectionDialogComponent.prototype.openCustomerQuickSearchDialog = function() {
            this.showCustomerQuickSearchPopup = true;
          };
          AssetsSelectionDialogComponent.prototype.resetSearchCriteria = function() {
            this.radio = this.component.assetValue;
            this.searchObject.assetType = this.assetTypes[0].label;
            this.hitFamilyVariantDropdownApi(this.assetTypes[0].value);
            this.searchObject = {};
          };
          AssetsSelectionDialogComponent.prototype.searchAssets = function() {
            var _this = this;
            this.minimize = true;
            this.isLoading = true;
            this.assetSelectionDialogService.findAssetList(this.searchObject).subscribe(function(results) {
              _this.assetsTable = results;
              _this.totalFilteredRows = _this.assetsTable.list.length;
              _this.isLoading = false;
            });
          };
          AssetsSelectionDialogComponent.prototype.radioButtonClick = function(newRadioValue) {
            if (this.oldRadioValue !== newRadioValue) {
              this.searchObject = {};
              if (newRadioValue === this.component.assetValue) {
                this.searchObject.assetType =
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__[
                    'AWPropertiesConstants'
                  ].FAMILY_FUNCTION_AIRCRAFT_KEY;
              }
              this.oldRadioValue = newRadioValue;
              this.radio = newRadioValue;
              this.assetsTable.list = [];
            }
          };
          AssetsSelectionDialogComponent.prototype.setSelectedBusinessPartner = function(event) {
            if (Object.keys(event).length === 0) {
              this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
            }
            this.searchObject.operationCriteria = event.customerCode;
          };
          var AssetsSelectionDialogComponent_1;
          AssetsSelectionDialogComponent.assetValue = 'asset';
          AssetsSelectionDialogComponent.fleetValue = 'fleet';
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            AssetsSelectionDialogComponent.prototype,
            'showAssetsSelectionDialog',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(), __metadata('design:type', Object)],
            AssetsSelectionDialogComponent.prototype,
            'onSelected',
            void 0
          );
          AssetsSelectionDialogComponent = AssetsSelectionDialogComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-assets-selection-dialog',
                template: __webpack_require__(
                  /*! ./assets-selection-dialog.component.html */ './src/app/shared/components/dialog-assets-selection/assets-selection-dialog.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./assets-selection-dialog.component.scss */ './src/app/shared/components/dialog-assets-selection/assets-selection-dialog.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _assets_selection_dialog_service__WEBPACK_IMPORTED_MODULE_5__['AssetsSelectionDialogService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__['MessageService']
              ])
            ],
            AssetsSelectionDialogComponent
          );
          return AssetsSelectionDialogComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__['DialogComponent']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-assets-selection/assets-selection-dialog.module.ts':
      /*!*********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-assets-selection/assets-selection-dialog.module.ts ***!
  \*********************************************************************************************/
      /*! exports provided: AssetsSelectionDialogModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AssetsSelectionDialogModule',
          function() {
            return AssetsSelectionDialogModule;
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
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/inputtextarea */ './node_modules/primeng/inputtextarea.js'
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/message */ './node_modules/primeng/message.js'
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_message__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/overlaypanel */ './node_modules/primeng/overlaypanel.js'
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/radiobutton */ './node_modules/primeng/radiobutton.js'
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_7__
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
        /* harmony import */ var _dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../dialog-search-customer/dialog-search-customer.module */ './src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts'
        );
        /* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _assets_selection_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./assets-selection-dialog.component */ './src/app/shared/components/dialog-assets-selection/assets-selection-dialog.component.ts'
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
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_3__['InputTextareaModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_7__['TableModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__['DropdownModule'],
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__['RadioButtonModule'],
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__['OverlayPanelModule'],
          primeng_message__WEBPACK_IMPORTED_MODULE_4__['MessageModule']
        ];
        var INTERNAL_MODULES = [
          _dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_11__[
            'DialogSearchCustomerModule'
          ],
          _modal_modal_module__WEBPACK_IMPORTED_MODULE_12__['ModalModule']
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _assets_selection_dialog_component__WEBPACK_IMPORTED_MODULE_13__['AssetsSelectionDialogComponent']
        ];
        var AssetsSelectionDialogModule = /** @class */ (function() {
          function AssetsSelectionDialogModule() {}
          AssetsSelectionDialogModule = __decorate(
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
                )
              })
            ],
            AssetsSelectionDialogModule
          );
          return AssetsSelectionDialogModule;
        })();

        /***/
      },

    /***/ './src/app/shared/components/dialog-assets-selection/assets-selection-dialog.service.ts':
      /*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-assets-selection/assets-selection-dialog.service.ts ***!
  \**********************************************************************************************/
      /*! exports provided: AssetsSelectionDialogService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AssetsSelectionDialogService',
          function() {
            return AssetsSelectionDialogService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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

        var AssetsSelectionDialogService = /** @class */ (function(_super) {
          __extends(AssetsSelectionDialogService, _super);
          function AssetsSelectionDialogService(
            http,
            appConfigService,
            productStructureManagementApi,
            fleetManagementApi,
            bidtWarehouseApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            return _this;
          }
          /***********************************
           * Asset(s) Selection popup services
           ***********************************/
          AssetsSelectionDialogService.prototype.getWarehouseDropdownList = function() {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.getWarehouses);
          };
          AssetsSelectionDialogService.prototype.getBidoFleetsBySearchCriteria = function(criteria) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoFleetsBySearchCriteria, criteria);
          };
          AssetsSelectionDialogService.prototype.getAssetTypeList = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.initializeAssetTypeList);
          };
          AssetsSelectionDialogService.prototype.getFunctionList = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.initializeFunctionList);
          };
          AssetsSelectionDialogService.prototype.getFamilyVariantList = function(assetType) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.initializeFamilyVariantList,
              assetType
            );
          };
          AssetsSelectionDialogService.prototype.findAssetList = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAssetList, input);
          };
          AssetsSelectionDialogService.prototype.getOperationalStatusList = function(assetType) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.initializeOperationalStatusList,
              assetType
            );
          };
          AssetsSelectionDialogService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])({
                providedIn: 'root'
              }),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__['AppConfigService'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__['FleetManagementApi'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_2__['BidtWarehouseApi']
              ])
            ],
            AssetsSelectionDialogService
          );
          return AssetsSelectionDialogService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__['AbstractAwHttpService']);

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
//# sourceMappingURL=collaborative-cockpit-collaborative-cockpit-module.js.map
