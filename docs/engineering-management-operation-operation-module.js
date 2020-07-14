(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['engineering-management-operation-operation-module'],
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

    /***/ './node_modules/primeng/components/keyfilter/keyfilter.js':
      /*!****************************************************************!*\
  !*** ./node_modules/primeng/components/keyfilter/keyfilter.js ***!
  \****************************************************************/
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
        var domhandler_1 = __webpack_require__(
          /*! ../dom/domhandler */ './node_modules/primeng/components/dom/domhandler.js'
        );
        var forms_1 = __webpack_require__(/*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js');
        exports.KEYFILTER_VALIDATOR = {
          provide: forms_1.NG_VALIDATORS,
          useExisting: core_1.forwardRef(function() {
            return KeyFilter;
          }),
          multi: true
        };
        var KeyFilter = /** @class */ (function() {
          function KeyFilter(el) {
            this.el = el;
          }
          KeyFilter_1 = KeyFilter;
          Object.defineProperty(KeyFilter.prototype, 'pattern', {
            get: function() {
              return this._pattern;
            },
            set: function(_pattern) {
              this._pattern = _pattern;
              this.regex = KeyFilter_1.DEFAULT_MASKS[this._pattern] || this._pattern;
            },
            enumerable: true,
            configurable: true
          });
          KeyFilter.prototype.isNavKeyPress = function(e) {
            var k = e.keyCode;
            k = domhandler_1.DomHandler.getBrowser().safari ? KeyFilter_1.SAFARI_KEYS[k] || k : k;
            return (
              (k >= 33 && k <= 40) ||
              k == KeyFilter_1.KEYS.RETURN ||
              k == KeyFilter_1.KEYS.TAB ||
              k == KeyFilter_1.KEYS.ESC
            );
          };
          KeyFilter.prototype.isSpecialKey = function(e) {
            var k = e.keyCode;
            var c = e.charCode;
            return (
              k == 9 ||
              k == 13 ||
              k == 27 ||
              k == 16 ||
              k == 17 ||
              (k >= 18 && k <= 20) ||
              (domhandler_1.DomHandler.getBrowser().opera &&
                !e.shiftKey &&
                (k == 8 || (k >= 33 && k <= 35) || (k >= 36 && k <= 39) || (k >= 44 && k <= 45)))
            );
          };
          KeyFilter.prototype.getKey = function(e) {
            var k = e.keyCode || e.charCode;
            return domhandler_1.DomHandler.getBrowser().safari ? KeyFilter_1.SAFARI_KEYS[k] || k : k;
          };
          KeyFilter.prototype.getCharCode = function(e) {
            return e.charCode || e.keyCode || e.which;
          };
          KeyFilter.prototype.onKeyPress = function(e) {
            if (this.pValidateOnly) {
              return;
            }
            var browser = domhandler_1.DomHandler.getBrowser();
            if (e.ctrlKey || e.altKey) {
              return;
            }
            var k = this.getKey(e);
            if (k == 13) {
              return;
            }
            if (
              browser.mozilla &&
              (this.isNavKeyPress(e) ||
                k == KeyFilter_1.KEYS.BACKSPACE ||
                (k == KeyFilter_1.KEYS.DELETE && e.charCode == 0))
            ) {
              return;
            }
            var c = this.getCharCode(e);
            var cc = String.fromCharCode(c);
            var ok = true;
            if (browser.mozilla && (this.isSpecialKey(e) || !cc)) {
              return;
            }
            ok = this.regex.test(cc);
            if (!ok) {
              e.preventDefault();
            }
          };
          KeyFilter.prototype.onPaste = function(e) {
            var clipboardData = e.clipboardData || window.clipboardData.getData('text');
            if (clipboardData) {
              var pastedText = clipboardData;
              if (!this.regex.test(pastedText)) {
                e.preventDefault();
              }
            }
          };
          KeyFilter.prototype.validate = function(c) {
            if (this.pValidateOnly) {
              var value = this.el.nativeElement.value;
              if (value && !this.regex.test(value)) {
                return {
                  validatePattern: false
                };
              }
            }
          };
          var KeyFilter_1;
          KeyFilter.DEFAULT_MASKS = {
            pint: /[\d]/,
            int: /[\d\-]/,
            pnum: /[\d\.]/,
            money: /[\d\.\s,]/,
            num: /[\d\-\.]/,
            hex: /[0-9a-f]/i,
            email: /[a-z0-9_\.\-@]/i,
            alpha: /[a-z_]/i,
            alphanum: /[a-z0-9_]/i
          };
          KeyFilter.KEYS = {
            TAB: 9,
            RETURN: 13,
            ESC: 27,
            BACKSPACE: 8,
            DELETE: 46
          };
          KeyFilter.SAFARI_KEYS = {
            63234: 37,
            63235: 39,
            63232: 38,
            63233: 40,
            63276: 33,
            63277: 34,
            63272: 46,
            63273: 36,
            63275: 35 // end
          };
          __decorate(
            [core_1.Input(), __metadata('design:type', Boolean)],
            KeyFilter.prototype,
            'pValidateOnly',
            void 0
          );
          __decorate(
            [core_1.Input('pKeyFilter'), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])],
            KeyFilter.prototype,
            'pattern',
            null
          );
          __decorate(
            [
              core_1.HostListener('keypress', ['$event']),
              __metadata('design:type', Function),
              __metadata('design:paramtypes', [KeyboardEvent]),
              __metadata('design:returntype', void 0)
            ],
            KeyFilter.prototype,
            'onKeyPress',
            null
          );
          __decorate(
            [
              core_1.HostListener('paste', ['$event']),
              __metadata('design:type', Function),
              __metadata('design:paramtypes', [Object]),
              __metadata('design:returntype', void 0)
            ],
            KeyFilter.prototype,
            'onPaste',
            null
          );
          KeyFilter = KeyFilter_1 = __decorate(
            [
              core_1.Directive({
                selector: '[pKeyFilter]',
                providers: [exports.KEYFILTER_VALIDATOR]
              }),
              __metadata('design:paramtypes', [core_1.ElementRef])
            ],
            KeyFilter
          );
          return KeyFilter;
        })();
        exports.KeyFilter = KeyFilter;
        var KeyFilterModule = /** @class */ (function() {
          function KeyFilterModule() {}
          KeyFilterModule = __decorate(
            [
              core_1.NgModule({
                imports: [common_1.CommonModule],
                exports: [KeyFilter],
                declarations: [KeyFilter]
              })
            ],
            KeyFilterModule
          );
          return KeyFilterModule;
        })();
        exports.KeyFilterModule = KeyFilterModule;
        //# sourceMappingURL=keyfilter.js.map

        /***/
      },

    /***/ './node_modules/primeng/components/message/message.js':
      /*!************************************************************!*\
  !*** ./node_modules/primeng/components/message/message.js ***!
  \************************************************************/
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
        var UIMessage = /** @class */ (function() {
          function UIMessage() {}
          Object.defineProperty(UIMessage.prototype, 'icon', {
            get: function() {
              var icon = null;
              if (this.severity) {
                switch (this.severity) {
                  case 'success':
                    icon = 'pi pi-check';
                    break;
                  case 'info':
                    icon = 'pi pi-info-circle';
                    break;
                  case 'error':
                    icon = 'pi pi-times';
                    break;
                  case 'warn':
                    icon = 'pi pi-exclamation-triangle';
                    break;
                  default:
                    icon = 'pi pi-info-circle';
                    break;
                }
              }
              return icon;
            },
            enumerable: true,
            configurable: true
          });
          __decorate([core_1.Input(), __metadata('design:type', String)], UIMessage.prototype, 'severity', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], UIMessage.prototype, 'text', void 0);
          UIMessage = __decorate(
            [
              core_1.Component({
                selector: 'p-message',
                template:
                  '\n        <div aria-live="polite" class="ui-message ui-widget ui-corner-all" *ngIf="severity"\n        [ngClass]="{\'ui-message-info\': (severity === \'info\'),\n                \'ui-message-warn\': (severity === \'warn\'),\n                \'ui-message-error\': (severity === \'error\'),\n                \'ui-message-success\': (severity === \'success\')}">\n            <span class="ui-message-icon" [ngClass]="icon"></span>\n            <span class="ui-message-text" [innerHTML]="text"></span>\n        </div>\n    '
              })
            ],
            UIMessage
          );
          return UIMessage;
        })();
        exports.UIMessage = UIMessage;
        var MessageModule = /** @class */ (function() {
          function MessageModule() {}
          MessageModule = __decorate(
            [
              core_1.NgModule({
                imports: [common_1.CommonModule],
                exports: [UIMessage],
                declarations: [UIMessage]
              })
            ],
            MessageModule
          );
          return MessageModule;
        })();
        exports.MessageModule = MessageModule;
        //# sourceMappingURL=message.js.map

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

    /***/ './src/app/main/engineering-management/operation/form/dialog-components/dialog-components.component.html':
      /*!***************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/operation/form/dialog-components/dialog-components.component.html ***!
  \***************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".choosePnType" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [options]="componentTypeList"\r\n              [(ngModel)]="operationComponent.componentType"\r\n              placeholder="&nbsp;"\r\n              (onChange)="onComponentTypeSelected($event)"\r\n              [disabled]="!isNewComponentForm"\r\n              appendTo="body"\r\n            >\r\n            </p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group required">\r\n          <label class="form-label">{{ getComponentName() + ".componentCode" | translate }}</label>\r\n\r\n          <div\r\n            *ngIf="operationComponent.componentType === ingredientToolType"\r\n            class="form-control form-control-with-modal"\r\n            [ngClass]="{ disabled: !isNewComponentForm }"\r\n          >\r\n            <div class="form-control-data" (click)="isNewComponentForm && searchIngredientTool()">\r\n              {{ ingredientToolPnCode }}\r\n            </div>\r\n\r\n            <div *ngIf="ingredientToolPnCode" class="btn-clear-wrapper">\r\n              <i\r\n                class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                aria-hidden="true"\r\n                (click)="isNewComponentForm && (ingredientToolPnCode = undefined)"\r\n              ></i>\r\n            </div>\r\n            <div class="btn-search-wrapper">\r\n              <i\r\n                class="fa fa-fw fa-search aw-icon btn-search"\r\n                aria-hidden="true"\r\n                (click)="isNewComponentForm && searchIngredientTool()"\r\n              ></i>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngIf="operationComponent.componentType === partType"\r\n            class="form-control form-control-with-modal"\r\n            [ngClass]="{ disabled: !isNewComponentForm }"\r\n          >\r\n            <div class="form-control-data" (click)="isNewComponentForm && searchPart()">{{ partPnCode }}</div>\r\n\r\n            <div *ngIf="partPnCode" class="btn-clear-wrapper">\r\n              <i\r\n                class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                aria-hidden="true"\r\n                (click)="partPnCode = undefined"\r\n              ></i>\r\n            </div>\r\n            <div class="btn-search-wrapper">\r\n              <i\r\n                class="fa fa-fw fa-search aw-icon btn-search"\r\n                aria-hidden="true"\r\n                (click)="isNewComponentForm && searchPart()"\r\n              ></i>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngIf="operationComponent.componentType === subcontractingType"\r\n            class="form-control form-control-with-modal"\r\n            [ngClass]="{ disabled: !isNewComponentForm }"\r\n          >\r\n            <div class="form-control-data" (click)="isNewComponentForm && searchSubcontracting()">\r\n              {{ subcontractingPnCode }}\r\n            </div>\r\n\r\n            <div *ngIf="subcontractingPnCode" class="btn-clear-wrapper">\r\n              <i\r\n                class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                aria-hidden="true"\r\n                (click)="subcontractingPnCode = undefined"\r\n              ></i>\r\n            </div>\r\n            <div class="btn-search-wrapper">\r\n              <i\r\n                class="fa fa-fw fa-search aw-icon btn-search"\r\n                aria-hidden="true"\r\n                (click)="isNewComponentForm && searchSubcontracting()"\r\n              ></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div\r\n          class="form-group"\r\n          *ngIf="\r\n            operationComponent.componentType === ingredientToolType || operationComponent.componentType === partType\r\n          "\r\n        >\r\n          <label class="form-label">{{ getComponentName() + ".quantity" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input\r\n              #quantity="ngModel"\r\n              type="number"\r\n              pInputText\r\n              pKeyFilter="int"\r\n              [pValidateOnly]="true"\r\n              class="aw-input"\r\n              [(ngModel)]="operationComponent.quantity"\r\n              [disabled]="isReadOnlyComponentDialog"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOnlyComponentDialog" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOnlyComponentDialog" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOnlyComponentDialog"\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [disabled]="disableValidate()"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-part\r\n  *ngIf="showPnAfterDialog"\r\n  [(display)]="showPnAfterDialog"\r\n  [disablePartTypeDropdown]="true"\r\n  (onValidated)="onSelectedComponent($event)"\r\n  [searchObject]="partsSearch"\r\n  [pnType]="selectedPnType"\r\n></aw-dialog-search-part>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/operation/form/dialog-components/dialog-components.component.ts':
      /*!*************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/operation/form/dialog-components/dialog-components.component.ts ***!
  \*************************************************************************************************************/
      /*! exports provided: DialogComponentsComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogComponentsComponent',
          function() {
            return DialogComponentsComponent;
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
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/constants/lang-constants */ './src/app/shared/constants/lang-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/services/input-validation.service */ './src/app/shared/services/input-validation.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/utils/label-value-utils */ './src/app/shared/utils/label-value-utils.ts'
        );
        /* harmony import */ var _operation_form_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../operation-form.service */ './src/app/main/engineering-management/operation/form/operation-form.service.ts'
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

        var DialogComponentsComponent = /** @class */ (function(_super) {
          __extends(DialogComponentsComponent, _super);
          function DialogComponentsComponent(
            inputValidationService,
            loaderService,
            operationFormService,
            translateService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Read,
                'DialogComponentsComponent'
              ) || this;
            _this.inputValidationService = inputValidationService;
            _this.loaderService = loaderService;
            _this.operationFormService = operationFormService;
            _this.translateService = translateService;
            _this.keyMap = new Map();
            _this.keyMap.set('pnType', _this.operationFormService.getPnTypeMap());
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.displayComponentTMDialog = false;
            _this.displayComponentPSMDialog = false;
            _this.isNewComponentForm = false;
            _this.ingredientToolPnCode = undefined;
            _this.partPnCode = undefined;
            _this.subcontractingPnCode = undefined;
            _this.ingredientToolType =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__[
                'AWPropertiesConstants'
              ].PN_TYPE_INGREDIENT_KEY;
            _this.partType =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__[
                'AWPropertiesConstants'
              ].PN_TYPE_PART_KEY;
            _this.subcontractingType =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__[
                'AWPropertiesConstants'
              ].PN_TYPE_SUBCONTRACTING_KEY;
            _this.loadPnTypes();
            _this.translateService.onLangChange
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['takeUntil'])(_this.unsubscribe))
              .subscribe(function() {
                _this.loadComponentTypeList();
              });
            return _this;
          }
          DialogComponentsComponent.prototype.ngOnInit = function() {
            this.loaderService.hideLoadingBar();
            this.loadComponentTypeList();
            this.setIsNewComponentForm();
            this.setLayout();
            this.partsSearch = {};
            this.isValid =
              !!this.operationComponent &&
              !!this.operationComponent.pnCode &&
              this.operationComponent.pnCode.length > 0;
            if (!!this.operationComponent && !!this.operationComponent.pnCode) {
              _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_9__['LabelValueUtils'].labelToStringValue(
                this.operationComponent,
                'type',
                this.pnTypes
              );
              switch (this.operationComponent.type) {
                case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .PN_TYPE_PART_KEY: {
                  this.partPnCode = this.operationComponent.pnCode;
                  break;
                }
                case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .PN_TYPE_SUBCONTRACTING_KEY: {
                  this.subcontractingPnCode = this.operationComponent.pnCode;
                  break;
                }
                default: {
                  this.ingredientToolPnCode = this.operationComponent.pnCode;
                  break;
                }
              }
            }
          };
          DialogComponentsComponent.prototype.loadPnTypes = function() {
            var _this = this;
            this.operationFormService.getPnTypeMap().subscribe(function(results) {
              _this.pnTypes = results || [];
            });
          };
          DialogComponentsComponent.prototype.buildOperationPnElementFromBirePnDTO = function(pn) {
            this.operationComponent = {
              pnCode: pn.pnCode,
              name: pn.articleDesignation,
              type: pn.pnType,
              quantity: this.operationComponent.quantity,
              unit: pn.quantityUnit,
              componentType: this.operationComponent.componentType
            };
          };
          DialogComponentsComponent.prototype.setIsNewComponentForm = function() {
            if (!!this.operationComponent && !this.operationComponent.pnCode) {
              this.isNewComponentForm = true;
            }
          };
          DialogComponentsComponent.prototype.setLayout = function() {
            if (this.isNewComponentForm) {
              this.operationComponent.componentType = this.ingredientToolType;
            } else {
              if (!!this.operationComponent) {
                this.componentQuantity = this.operationComponent.quantity;
                if (
                  this.operationComponent.type ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                    .PN_TYPE_PART_KEY
                ) {
                  this.partPnCode = this.operationComponent.pnCode;
                } else if (
                  this.operationComponent.type ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                    .PN_TYPE_SUBCONTRACTING_KEY
                ) {
                  this.subcontractingPnCode = this.operationComponent.pnCode;
                } else {
                  this.ingredientToolPnCode = this.operationComponent.pnCode;
                }
              } else {
                _super.prototype.throwUnboundLocalError.call(this, 'setLayout', 'this.operationComponent');
              }
            }
          };
          DialogComponentsComponent.prototype.onComponentTypeSelected = function($event) {
            if (!!this.operationComponent) {
              switch ($event.value) {
                case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .PN_TYPE_PART_KEY: {
                  this.operationComponent.componentType = this.partType;
                  this.ingredientToolPnCode = '';
                  this.subcontractingPnCode = '';
                  this.componentQuantity = '';
                  this.operationComponent.type =
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__[
                      'AWPropertiesConstants'
                    ].PN_TYPE_PART_KEY;
                  break;
                }
                case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .PN_TYPE_SUBCONTRACTING_KEY: {
                  this.operationComponent.componentType = this.subcontractingType;
                  this.ingredientToolPnCode = '';
                  this.partPnCode = '';
                  this.componentQuantity = '';
                  this.operationComponent.type =
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__[
                      'AWPropertiesConstants'
                    ].PN_TYPE_SUBCONTRACTING_KEY;
                  break;
                }
                case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .PN_TYPE_STANDARD_TOOL_KEY: {
                  this.operationComponent.componentType = this.ingredientToolType;
                  this.partPnCode = '';
                  this.subcontractingPnCode = '';
                  this.componentQuantity = '';
                  this.operationComponent.type =
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__[
                      'AWPropertiesConstants'
                    ].PN_TYPE_STANDARD_TOOL_KEY;
                  break;
                }
                case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .PN_TYPE_SPECIFIC_TOOL_KEY: {
                  this.operationComponent.componentType = this.ingredientToolType;
                  this.partPnCode = '';
                  this.subcontractingPnCode = '';
                  this.componentQuantity = '';
                  this.operationComponent.type =
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__[
                      'AWPropertiesConstants'
                    ].PN_TYPE_SPECIFIC_TOOL_KEY;
                  break;
                }
                default: {
                  this.operationComponent.componentType = this.ingredientToolType;
                  this.partPnCode = '';
                  this.subcontractingPnCode = '';
                  this.componentQuantity = '';
                  this.operationComponent.type = undefined;
                  break;
                }
              }
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'onComponentTypeSelected', 'this.operationComponent');
            }
          };
          DialogComponentsComponent.prototype.loadComponentTypeList = function() {
            if (
              this.translateService.currentLang ===
              _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_4__['LangConstants'].ENGLISH_CODE
            ) {
              this.componentTypeList = [
                {
                  label: 'Ingredient/Tool',
                  value:
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                      .PN_TYPE_INGREDIENT_KEY
                },
                {
                  label: 'Part',
                  value:
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                      .PN_TYPE_PART_KEY
                },
                {
                  label: 'Subcontracting',
                  value:
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                      .PN_TYPE_SUBCONTRACTING_KEY
                }
              ];
            } else if (
              this.translateService.currentLang ===
              _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_4__['LangConstants'].FRENCH_CODE
            ) {
              this.componentTypeList = [
                {
                  label: 'Ingrédient/Outil',
                  value:
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                      .PN_TYPE_INGREDIENT_KEY
                },
                {
                  label: 'Article',
                  value:
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                      .PN_TYPE_PART_KEY
                },
                {
                  label: 'Sous-traitance',
                  value:
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                      .PN_TYPE_SUBCONTRACTING_KEY
                }
              ];
            }
          };
          DialogComponentsComponent.prototype.validate = function() {
            if (!!this.operationComponent) {
              this.onValidated.emit(this.operationComponent);
              this.display = false;
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'validate', 'this.operationComponent');
            }
          };
          DialogComponentsComponent.prototype.cancel = function() {
            var _this = this;
            var pnTypesList;
            this.operationFormService.getPnTypeMap().subscribe(function(results) {
              pnTypesList = results;
              if (!!_this.operationComponent && !!_this.operationComponent.type) {
                _this.operationComponent.type = pnTypesList.filter(function(pnType) {
                  return !!_this.operationComponent && pnType.value === _this.operationComponent.type;
                })[0].label;
              }
            });
            this.display = false;
          };
          DialogComponentsComponent.prototype.searchIngredientTool = function() {
            this.partsSearch = {
              type:
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .PN_TYPE_INGREDIENT_KEY
            };
            this.selectedPnType = this.partsSearch.type;
            this.showPnAfterDialog = true;
          };
          DialogComponentsComponent.prototype.searchPart = function() {
            this.partsSearch = {
              type:
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .PN_TYPE_PART_KEY
            };
            this.selectedPnType = this.partsSearch.type;
            this.showPnAfterDialog = true;
          };
          DialogComponentsComponent.prototype.searchSubcontracting = function() {
            this.partsSearch = {
              type:
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .PN_TYPE_SUBCONTRACTING_KEY
            };
            this.selectedPnType = this.partsSearch.type;
            this.showPnAfterDialog = true;
          };
          DialogComponentsComponent.prototype.disableValidate = function() {
            var response = true;
            switch (this.operationComponent.componentType) {
              case this.ingredientToolType:
                response = !!this.ingredientToolPnCode ? false : true;
                break;
              case this.partType:
                response = !!this.partPnCode ? false : true;
                break;
              case this.subcontractingType:
                response = !!this.subcontractingPnCode ? false : true;
                break;
              default:
                break;
            }
            return response;
          };
          /**************************************************************************
           * Component Dialog
           *************************************************************************/
          DialogComponentsComponent.prototype.onSelectedComponent = function(data) {
            var pn = data.birePnDTO;
            if (!!this.operationComponent && !!pn) {
              this.buildOperationPnElementFromBirePnDTO(pn);
              this.isValid =
                !!this.operationComponent &&
                !!this.operationComponent.pnCode &&
                this.operationComponent.pnCode.length > 0;
              if (
                !!this.operationComponent &&
                this.operationComponent.type ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                    .PN_TYPE_PART_KEY
              ) {
                this.ingredientToolType = '';
                this.partType = this.operationComponent.type;
                this.subcontractingType = '';
                this.partPnCode = this.operationComponent.pnCode;
              } else if (
                !!this.operationComponent &&
                this.operationComponent.type ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                    .PN_TYPE_SUBCONTRACTING_KEY
              ) {
                this.ingredientToolType = '';
                this.partType = '';
                this.subcontractingType = this.operationComponent.type;
                this.subcontractingPnCode = this.operationComponent.pnCode;
              } else {
                this.ingredientToolType =
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__[
                    'AWPropertiesConstants'
                  ].PN_TYPE_INGREDIENT_KEY;
                this.operationComponent.componentType = this.ingredientToolType;
                this.partType = '';
                this.subcontractingType = '';
                this.operationComponent.type = pn.pnType;
                this.ingredientToolPnCode = !!this.operationComponent ? this.operationComponent.pnCode : undefined;
              }
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'onSelectedComponent', 'pn');
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogComponentsComponent.prototype,
            'operationComponent',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogComponentsComponent.prototype,
            'isReadOnlyComponentDialog',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogComponentsComponent.prototype,
            'onValidated',
            void 0
          );
          DialogComponentsComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-component',
                template: __webpack_require__(
                  /*! ./dialog-components.component.html */ './src/app/main/engineering-management/operation/form/dialog-components/dialog-components.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_6__['InputValidationService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__['LoaderService'],
                _operation_form_service__WEBPACK_IMPORTED_MODULE_10__['OperationFormService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            DialogComponentsComponent
          );
          return DialogComponentsComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_8__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/operation/form/operation-form.component.html':
      /*!******************************************************************************************!*\
  !*** ./src/app/main/engineering-management/operation/form/operation-form.component.html ***!
  \******************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <h2 class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </h2>\r\n\r\n      <div class="page-subtitle" *ngIf="!isCreateOpenMode && componentData && componentData.objectId">\r\n        - {{ subtitle }}\r\n      </div>\r\n    </div>\r\n    <div\r\n      class="object-status"\r\n      [ngClass]="{ disabled: isCreateOpenMode }"\r\n      *ngIf="operation.statusState"\r\n      (click)="showStatus()"\r\n    >\r\n      {{ operation.statusState | formatSelectOption: statusList }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button *ngIf="isReadOpenMode && hasUpdateAccessRight" type="button" mat-raised-button (click)="edit()">\r\n      {{ "global.edit" | translate }}\r\n    </button>\r\n    <button\r\n      *ngIf="!isReadOpenMode && !isCreateOpenMode"\r\n      color="warn"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="cancelOperation()"\r\n    >\r\n      {{ "global.cancel" | translate }}\r\n    </button>\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      type="button"\r\n      color="primary"\r\n      class="btn-with-spinner"\r\n      mat-raised-button\r\n      (click)="saveOperation()"\r\n    >\r\n      <span class="lds-hourglass" *ngIf="showSaveSpinner"></span>\r\n      {{ "global.save" | translate }}\r\n    </button>\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item id="status" (click)="openStatusUpdatesPopup()">{{ "updates" | translate }}</button>\r\n      <button\r\n        mat-menu-item\r\n        id="refresh"\r\n        *ngIf="isReadOpenMode && componentData && componentData.objectId"\r\n        type="button"\r\n        (click)="reloadOperation()"\r\n      >\r\n        {{ "global.refresh" | translate }}\r\n      </button>\r\n      <button mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <mat-tab-group animationDuration="0ms" dynamicHeight>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ "home" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <div\r\n              #mainInformationAnchor\r\n              class="grid-cell--equally"\r\n              (click)="selectPageTocEntry(form.MAIN_INFORMATION_ANCHOR_ID)"\r\n            >\r\n              <div\r\n                class="grid-cell grid-cell--container"\r\n                [ngClass]="{ active: isPageTocEntrySelected(form.MAIN_INFORMATION_ANCHOR_ID) }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ "page.mainData" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div class="column">\r\n                    <div class="grid-row">\r\n                      <div class="form-group flex--2 required" [ngClass]="{ required: !isReadOpenMode }">\r\n                        <label class="form-label">{{ componentData.componentId + ".opeCode" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            class="aw-input"\r\n                            type="text"\r\n                            [(ngModel)]="operation.opeCode"\r\n                            [disabled]="!isCreateOpenMode"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group flex--2 required" [ngClass]="{ required: !isReadOpenMode }">\r\n                        <label class="form-label">{{ componentData.componentId + ".opeVersion" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            class="aw-input"\r\n                            type="text"\r\n                            [(ngModel)]="operation.opeVersion"\r\n                            [disabled]="!isCreateOpenMode"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group flex--2 required" [ngClass]="{ required: !isReadOpenMode }">\r\n                        <label class="form-label">{{ componentData.componentId + ".rangeCode" | translate }}</label>\r\n\r\n                        <div class="form-control form-control-with-modal" [ngClass]="{ disabled: !isCreateOpenMode }">\r\n                          <div class="form-control-data" (click)="isCreateOpenMode && searchRangeCode()">\r\n                            {{ operation.rangeCode }}\r\n                          </div>\r\n\r\n                          <div *ngIf="isCreateOpenMode && operation.rangeCode !== undefined" class="btn-clear-wrapper">\r\n                            <i\r\n                              class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                              aria-hidden="true"\r\n                              (click)="operation.rangeCode = undefined"\r\n                            ></i>\r\n                          </div>\r\n                          <div class="btn-search-wrapper">\r\n                            <i\r\n                              class="fa fa-fw fa-search aw-icon btn-search"\r\n                              aria-hidden="true"\r\n                              (click)="isCreateOpenMode && searchRangeCode()"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class="grid-row">\r\n                      <div class="form-group flex--1">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".ataChapter" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            type="text"\r\n                            class="aw-input"\r\n                            [(ngModel)]="operation.opeChapter"\r\n                            maxlength="2"\r\n                            [disabled]="isReadOpenMode"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group flex--1">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".ataSection" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            type="text"\r\n                            class="aw-input"\r\n                            [(ngModel)]="operation.opeSection"\r\n                            maxlength="2"\r\n                            [disabled]="isReadOpenMode"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group flex--1">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".ataSubject" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            type="text"\r\n                            class="aw-input"\r\n                            [(ngModel)]="operation.opeSubject"\r\n                            maxlength="2"\r\n                            [disabled]="isReadOpenMode"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group flex--1">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".ataSheet" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            type="text"\r\n                            class="aw-input"\r\n                            [(ngModel)]="operation.opeSheet"\r\n                            maxlength="5"\r\n                            [disabled]="isReadOpenMode"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group flex--2">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".ataMarks" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            type="text"\r\n                            class="aw-input"\r\n                            [(ngModel)]="operation.opeMarks"\r\n                            maxlength="5"\r\n                            [disabled]="isReadOpenMode"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class="grid-row">\r\n                      <div class="form-group flex--3">\r\n                        <label class="form-label">{{\r\n                          componentData.componentId + ".opeDesignation" | translate\r\n                        }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <textarea\r\n                            class="aw-textarea"\r\n                            [rows]="3"\r\n                            pInputTextarea\r\n                            [(ngModel)]="operation.opeDesignation"\r\n                            [disabled]="isReadOpenMode"\r\n                          ></textarea>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group flex--3">\r\n                        <label class="form-label">{{\r\n                          componentData.componentId + ".opeDescription" | translate\r\n                        }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <textarea\r\n                            class="aw-textarea"\r\n                            [rows]="3"\r\n                            pInputTextarea\r\n                            [(ngModel)]="operation.opeDescription"\r\n                            [disabled]="isReadOpenMode"\r\n                          ></textarea>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="grid-cell--equally">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ "page.additionalData" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n                <div class="grid-cell-content">\r\n                  <div class="column">\r\n                    <div class="grid-row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{\r\n                          componentData.componentId + ".technicalLevel" | translate\r\n                        }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width"\r\n                            [options]="technicalLevelsToDisplayList"\r\n                            [(ngModel)]="operation.technicalLevel"\r\n                            placeholder="&nbsp;"\r\n                            [showClear]="true"\r\n                            (onChange)="onTilSelected($event)"\r\n                            [disabled]="isReadOpenMode"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ componentData.componentId + ".opeWorkcenter" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width"\r\n                            [options]="workcentersToDisplayList"\r\n                            placeholder="&nbsp;"\r\n                            [(ngModel)]="operation.opeWorkcenter"\r\n                            [showClear]="true"\r\n                            [disabled]="isReadOpenMode"\r\n                            maxlength="50"\r\n                          >\r\n                          </p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{\r\n                          componentData.componentId + ".opeSequenceNumber" | translate\r\n                        }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            #sequenceNumber="ngModel"\r\n                            type="number"\r\n                            pKeyFilter="int"\r\n                            class="aw-input"\r\n                            [(ngModel)]="operation.opeSequenceNumber"\r\n                            [disabled]="isReadOpenMode"\r\n                            [pKeyFilter]="inputValidationService.validatorOfNumber()"\r\n                            [pValidateOnly]="true"\r\n                          />\r\n                          <!-- <p-message\r\n                            *ngIf="sequenceNumber.invalid && (sequenceNumber.dirty || sequenceNumber.touched)"\r\n                            severity="error"\r\n                            [text]="inputValidationService.formatOfNumber()"\r\n                          ></p-message> -->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class="grid-row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{\r\n                          componentData.componentId + ".opeQualification" | translate\r\n                        }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width"\r\n                            [options]="qualificationsToDisplayList"\r\n                            placeholder="&nbsp;"\r\n                            [(ngModel)]="operation.opeQualification"\r\n                            [showClear]="true"\r\n                            (onChange)="onChangeQualification($event)"\r\n                            [disabled]="isReadOpenMode"\r\n                          >\r\n                          </p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{\r\n                          componentData.componentId + ".opeDurationTime" | translate\r\n                        }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            #opeDurationTime="ngModel"\r\n                            type="text"\r\n                            [pKeyFilter]="inputValidationService.validatorOfPositiveNumber()"\r\n                            [pValidateOnly]="true"\r\n                            class="aw-input"\r\n                            [(ngModel)]="operation.opeDurationTime"\r\n                            (change)="calculateCost()"\r\n                            [disabled]="isReadOpenMode"\r\n                          />\r\n                          <p-message\r\n                            *ngIf="opeDurationTime.invalid && (opeDurationTime.dirty || opeDurationTime.touched)"\r\n                            severity="error"\r\n                            [text]="inputValidationService.formatOfPositiveNumber()"\r\n                          ></p-message>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ componentData.componentId + ".opeManHour" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            #opeManHour="ngModel"\r\n                            type="text"\r\n                            [pKeyFilter]="inputValidationService.validatorOfPositiveNumber()"\r\n                            [pValidateOnly]="true"\r\n                            class="aw-input"\r\n                            [(ngModel)]="operation.opeManHour"\r\n                            (change)="calculateCost()"\r\n                            [disabled]="isReadOpenMode"\r\n                          />\r\n                          <p-message\r\n                            *ngIf="opeManHour.invalid && (opeManHour.dirty || opeManHour.touched)"\r\n                            severity="error"\r\n                            [text]="inputValidationService.formatOfPositiveNumber()"\r\n                          ></p-message>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf="isCostSettingEnabled" class="grid-row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".opeCost" | translate }}\r\n                          <span *ngIf="qualifRateCurrency">({{ qualifRateCurrency }})</span>\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            #opeCost="ngModel"\r\n                            type="text"\r\n                            [pKeyFilter]="inputValidationService.validatorOfPositiveNumber()"\r\n                            [pValidateOnly]="true"\r\n                            class="aw-input"\r\n                            [(ngModel)]="operation.opeCost"\r\n                            [disabled]="isReadOpenMode || hasHourlyRateValue || !isCreateOpenMode"\r\n                          />\r\n                          <p-message\r\n                            *ngIf="opeCost.invalid && (opeCost.dirty || opeCost.touched)"\r\n                            severity="error"\r\n                            [text]="inputValidationService.formatOfPositiveNumber()"\r\n                          ></p-message>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group flex--3">\r\n                        <span [ngClass]="{ \'display--none\': !hasHourlyRateValue }">\r\n                          {{ componentData.componentId + ".hourlyRate" | translate }} = {{ qualifAverageHourRate }}\r\n                          {{ qualifRateCurrency }}\r\n                        </span>\r\n\r\n                        <span [ngClass]="{ \'display--none\': !hasHourlyRateValue }">\r\n                          {{ componentData.componentId + ".opeCost" | translate }} = [\r\n                          {{ componentData.componentId + ".opeHourlyRateQualification" | translate }} ] x [\r\n                          {{ componentData.componentId + ".opeManHour" | translate }} ] x [\r\n                          {{ componentData.componentId + ".durationTime" | translate }} ] +\r\n                          {{ componentData.componentId + ".opeSubcontractingCost" | translate }}\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="grid-row">\r\n            <div\r\n              #mainInformationAnchor\r\n              class="grid-cell--12"\r\n              (click)="selectPageTocEntry(form.MAIN_INFORMATION_ANCHOR_ID)"\r\n            >\r\n              <div\r\n                class="grid-cell grid-cell--container"\r\n                [ngClass]="{ active: isPageTocEntrySelected(form.MAIN_INFORMATION_ANCHOR_ID) }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".components" | translate }} ({{\r\n                        componentsTableDataSource ? componentsTableDataSource.dataCount : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n                <div class="grid-cell-content">\r\n                  <a-table [dataSource]="componentsTableDataSource">\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && componentsTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        color="warn"\r\n                        (click)="deleteComponents()"\r\n                      >\r\n                        {{ "global.delete" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && componentsTableDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="editComponents()"\r\n                      >\r\n                        {{ "global.edit" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && componentsTableDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="openComponents()"\r\n                      >\r\n                        {{ "global.open" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && !componentsTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="addComponent()"\r\n                      >\r\n                        {{ "global.add" | translate }}\r\n                      </button>\r\n                    </ng-template>\r\n                    <ng-template columnDef="pnCode" let-rowData="rowData">\r\n                      <a (click)="redirect(rowData)"> {{ rowData.pnCode }} </a>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab *ngIf="dynamicAttributes.length > 0">\r\n          <ng-template mat-tab-label>\r\n            {{ "global.attributes" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <div #mainDataAnchor class="grid-cell--12" (click)="selectPageTocEntry(form.ADD_INFORMATION_ANCHOR_ID)">\r\n              <div\r\n                class="grid-cell grid-cell--container"\r\n                [ngClass]="{ active: isPageTocEntrySelected(form.ADD_INFORMATION_ANCHOR_ID) }"\r\n              >\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <aw-dynamic-attributes\r\n                    [attributes]="dynamicAttributes"\r\n                    [isReadOpenMode]="isReadOpenMode"\r\n                  ></aw-dynamic-attributes>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ "global.documents" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <div #documentTableAnchor class="grid-cell--12" (click)="selectPageTocEntry(form.DOCUMENTS_ANCHOR_ID)">\r\n              <!-- Documents table -->\r\n\r\n              <div\r\n                class="grid-cell grid-cell--container"\r\n                [ngClass]="{ active: isPageTocEntrySelected(form.DOCUMENTS_ANCHOR_ID) }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ "global.documents" | translate }} ({{\r\n                        documentsTableDataSource ? documentsTableDataSource.dataCount : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <a-table [dataSource]="documentsTableDataSource">\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && documentsTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        color="warn"\r\n                        (click)="deleteDocuments()"\r\n                      >\r\n                        {{ "global.delete" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && documentsTableDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="editDocument()"\r\n                      >\r\n                        {{ "global.edit" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="documentsTableDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="openDocument()"\r\n                      >\r\n                        {{ "global.open" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && !documentsTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="addDocument()"\r\n                      >\r\n                        {{ "global.add" | translate }}\r\n                      </button>\r\n                    </ng-template>\r\n                    <ng-template columnDef="docName" let-rowData="rowData">\r\n                      <a (click)="downloadFile(rowData)">{{ rowData.docName }}</a>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-status-update-history\r\n    *ngIf="showStatusUpdatesPopup"\r\n    [object]="operation"\r\n    [data]="tableStatusUpdatesData"\r\n    [deleteApi]="deleteApi"\r\n    [(display)]="showStatusUpdatesPopup"\r\n    [keyMap]="updatesKeyMap"\r\n    [isStatusEditable]="false"\r\n    (onUpdated)="updateObjectStatusFromStatusUpdatesHistory($event)"\r\n  ></aw-status-update-history>\r\n\r\n  <aw-dialog-table\r\n    *ngIf="displayRangeCodeDialog"\r\n    [data]="rangeCodeTableData"\r\n    [(display)]="displayRangeCodeDialog"\r\n    (onSelected)="onSelectedRangeCode($event)"\r\n  ></aw-dialog-table>\r\n\r\n  <aw-dialog-component\r\n    *ngIf="displayComponentDialog"\r\n    [operationComponent]="currentComponent"\r\n    [(display)]="displayComponentDialog"\r\n    [isReadOnlyComponentDialog]="isReadOnlyComponentDialog"\r\n    (onValidated)="onValidateComponent($event)"\r\n  ></aw-dialog-component>\r\n\r\n  <aw-dialog-bire-document\r\n    *ngIf="showAddDocumentDialog"\r\n    [document]="currentDocument"\r\n    [(display)]="showAddDocumentDialog"\r\n    [isReadOnlyForm]="isReadOnlyDocumentDialog"\r\n    (onValidated)="onAddDocument($event)"\r\n  ></aw-dialog-bire-document>\r\n\r\n  <aw-operation-import-popup\r\n    *ngIf="displayDocumentDialog"\r\n    [document]="currentDocument"\r\n    [(display)]="displayDocumentDialog"\r\n    [isReadOnlyForm]="isReadOnlyDocumentDialog"\r\n    (onValidated)="addNewDocument($event)"\r\n  ></aw-operation-import-popup>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/operation/form/operation-form.component.ts':
      /*!****************************************************************************************!*\
  !*** ./src/app/main/engineering-management/operation/form/operation-form.component.ts ***!
  \****************************************************************************************/
      /*! exports provided: OperationFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'OperationFormComponent', function() {
          return OperationFormComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _shared_api_update_historic_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/update-historic.api */ './src/app/shared/api/update-historic.api.ts'
        );
        /* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/components/component-sidebar/page-toc.service */ './src/app/shared/components/component-sidebar/page-toc.service.ts'
        );
        /* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/components/dynamic-attributes/dynamic-attributes.service */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.service.ts'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/enums/table-column-filter-mode.enum */ './src/app/shared/enums/table-column-filter-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/enums/table-selection-mode.enum */ './src/app/shared/enums/table-selection-mode.enum.ts'
        );
        /* harmony import */ var _shared_pipes_format_select_option_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/pipes/format-select-option.pipe */ './src/app/shared/pipes/format-select-option.pipe.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/services/input-validation.service */ './src/app/shared/services/input-validation.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_services_update_historic_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../../../shared/services/update-historic.service */ './src/app/shared/services/update-historic.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../../shared/utils/dto-utils */ './src/app/shared/utils/dto-utils.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _shared_utils_settings_utils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ../../../../shared/utils/settings-utils */ './src/app/shared/utils/settings-utils.ts'
        );
        /* harmony import */ var _object_status_object_status_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ../../../object-status/object-status.component */ './src/app/main/object-status/object-status.component.ts'
        );
        /* harmony import */ var _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ../../../overlay/overlay.service */ './src/app/main/overlay/overlay.service.ts'
        );
        /* harmony import */ var _operation_form_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ./operation-form.service */ './src/app/main/engineering-management/operation/form/operation-form.service.ts'
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
        var __values =
          (undefined && undefined.__values) ||
          function(o) {
            var m = typeof Symbol === 'function' && o[Symbol.iterator],
              i = 0;
            if (m) return m.call(o);
            return {
              next: function() {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
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

        var OperationFormComponent = /** @class */ (function(_super) {
          __extends(OperationFormComponent, _super);
          function OperationFormComponent(
            messageService,
            tabService,
            loaderService,
            favoriteService,
            pageTocService,
            serializationService,
            inputValidationService,
            confirmationService,
            updateHistoricService,
            propertiesService,
            updateHistoricApi,
            dynamicAttributesService,
            translateService,
            operationFormService,
            dateService,
            _overlayService,
            _formatSelectOption
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                pageTocService
              ) || this;
            _this.inputValidationService = inputValidationService;
            _this.confirmationService = confirmationService;
            _this.updateHistoricService = updateHistoricService;
            _this.propertiesService = propertiesService;
            _this.updateHistoricApi = updateHistoricApi;
            _this.dynamicAttributesService = dynamicAttributesService;
            _this.translateService = translateService;
            _this.operationFormService = operationFormService;
            _this.dateService = dateService;
            _this._overlayService = _overlayService;
            _this._formatSelectOption = _formatSelectOption;
            _this.uploadedFiles = {};
            _this.form = OperationFormComponent_1;
            _this.keyMap = new Map();
            _this.keyMap.set('pnType', _this.operationFormService.getPnTypeMap());
            _this.tabOperationFieldsId = 'operation-fields';
            _this.tabComponentsId = 'components';
            _this.initComponentsTableDataSource();
            _this.initDocumentsTableDataSource();
            _this.tabDocumentsId = 'documents';
            _this.tabAttributesId = 'attributes';
            _super.prototype.registerPageTocEntryObservable.call(_this);
            _this.init();
            _this.loadPnTypes();
            _this.initCostSettingDisplay();
            _this.loadTechnicalLevelsList();
            _this.loadQualificationsList();
            _this.loadWorkCenterList();
            _this.loadOperationStatus();
            return _this;
          }
          OperationFormComponent_1 = OperationFormComponent;
          OperationFormComponent.prototype.getComponentName = function() {
            return 'OperationFormComponent';
          };
          OperationFormComponent.prototype.initComponentsTableDataSource = function() {
            this.componentsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_6__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'pnCode',
                  translateKey: this.getTranslateKey('pnCode')
                },
                {
                  field: 'name',
                  translateKey: this.getTranslateKey('name')
                },
                {
                  field: 'type',
                  translateKey: this.getTranslateKey('type')
                },
                {
                  field: 'quantity',
                  translateKey: this.getTranslateKey('quantity')
                },
                {
                  field: 'unit',
                  translateKey: this.getTranslateKey('unit')
                }
              ],
              data: []
            });
          };
          OperationFormComponent.prototype.initDocumentsTableDataSource = function() {
            this.documentsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_6__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'docName',
                  translateKey: this.getTranslateKey('docName')
                },
                {
                  field: 'docSource',
                  translateKey: this.getTranslateKey('docSource')
                },
                {
                  field: 'docExtension',
                  translateKey: this.getTranslateKey('docExtension')
                },
                {
                  field: 'docSize',
                  translateKey: this.getTranslateKey('docSize')
                },
                {
                  field: 'docPublicationDate',
                  translateKey: this.getTranslateKey('docPublicationDate')
                }
              ],
              data: []
            });
          };
          OperationFormComponent.prototype.loadPnTypes = function() {
            var _this = this;
            this.operationFormService.getPnTypeMap().subscribe(function(results) {
              _this.pnTypes = results || [];
            });
          };
          OperationFormComponent.prototype.init = function() {
            this.currentTabId = this.tabOperationFieldsId;
            this.operation = {};
            this.operations = [];
            this.pnTypes = [];
            // Status popup
            this.showStatusUpdatesPopup = false;
            this.deleteApi = this.updateHistoricApi.removeBireOperationHistory;
            this.updatesKeyMap = new Map();
            // Operation Fields Tab
            this.opeFieldsTable = [];
            this.selectedOpeFields = [];
            this.technicalLevelsToDisplayList = [];
            this.qualif = undefined;
            this.workcenter = undefined;
            this.qualificationsToDisplayList = [];
            this.workcentersToDisplayList = [];
            this.hasHourlyRateValue = false;
            this.qualifAverageHourRate = '';
            this.qualifRateCurrency = '';
            this.cost = undefined;
            // Components Tab
            this.components = [];
            this.addedComponentsList = [];
            this.removedComponentsList = [];
            this.updatedComponentsList = [];
            this.component = {};
            this.operationComponent = undefined;
            this.displayComponentDialog = false;
            this.currentComponent = {};
            this.currentComponentIndex = -1;
            this.isReadOnlyComponentDialog = true;
            // Documents Tab
            this.documentsAdded = [];
            this.documentsRemoved = [];
            this.currentDocument = undefined;
            this.currentDocumentIndex = undefined;
            this.isReadOnlyDocumentDialog = true;
            this.displayDocumentDialog = false;
            this.showAddDocumentDialog = false;
            // Attributes Tab
            this.dynamicAttributes = [];
            this.selectedOperations = [];
            this.filteredRowsNb = 0;
            this.delRow = 0;
            this.operationTableFilteredRowsNb = 0;
            this.currentTabId = this.tabOperationFieldsId;
          };
          OperationFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            if (this.componentData) {
              this.updateOpenMode(this.componentData.openMode);
              var context = !!this.componentData.objectId
                ? this.serializationService.deserialize(this.componentData.objectId).opeCode +
                  '|' +
                  this.serializationService.deserialize(this.componentData.objectId).opeVersion +
                  '|' +
                  this.serializationService.deserialize(this.componentData.objectId).rangeCode
                : 'tab.createMode';
              this.subtitle = context;
              this.displayComponentContext(context, this.isCreateOpenMode);
              this.loadOperation();
              this.setTableOfContent();
            }
          };
          OperationFormComponent.prototype.openStatusUpdatesPopup = function() {
            this.showStatusUpdatesPopup = true;
            var columns = [
              {
                field: 'timestamp',
                width: '200px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input,
                isDate: true
              },
              {
                field: 'statusUser',
                width: '200px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'action',
                width: '200px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'statusState',
                width: '250px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opeSequenceNumber',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opeDesignation',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opeDescription',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opeChapter',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opeSection',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opeSubject',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opeSheet',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opeMark',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opeCost',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opeDurationTime',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opeWorkcenter',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opeManHour',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opeQualification',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'technicalLevel',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              }
            ];
            this.updatesKeyMap.set('statusState', this.propertiesService.getValue('getFuncObjectStatusMap'));
            this.tableStatusUpdatesData = {
              componentId: 'OperationFormComponent.historicPopup',
              tableCols: columns,
              tableRows: this.updateHistoricService.findBireOperationHistoric(this.operationId),
              dataKey: undefined,
              selectionMode:
                _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_12__['TableSelectionMode'].Multiple,
              globalFilter: false
            };
          };
          OperationFormComponent.prototype.setTableOfContent = function() {
            var _this = this;
            var mainInformationKey = this.getTranslateKey('mainData');
            var addInformationKey = this.getTranslateKey('addInformation');
            var componentsKey = this.getTranslateKey('components');
            var documentsKey = this.getTranslateKey('documents');
            this.translateService
              .get([mainInformationKey, addInformationKey, componentsKey, documentsKey])
              .subscribe(function(results) {
                var mainInformationLabel = !!results ? results[mainInformationKey] : 'Main Information';
                var addInformationLabel = !!results ? results[addInformationKey] : 'Additional Information';
                var componentsLabel = !!results ? results[componentsKey] : 'Components';
                var documentsLabel = !!results ? results[documentsKey] : 'Documents';
                _this.toc = [
                  {
                    id: 'mainInformationAnchor',
                    anchor: _this.mainInformationElRef,
                    label: mainInformationLabel
                  },
                  {
                    id: 'mainDataAnchor',
                    anchor: _this.addInformationElRef,
                    label: addInformationLabel
                  },
                  {
                    id: 'componentTableAnchor',
                    anchor: _this.componentsElRef,
                    label: componentsLabel
                  },
                  {
                    id: 'documentTableAnchor',
                    anchor: _this.documentsElRef,
                    label: documentsLabel
                  }
                ];
                _super.prototype.selectPageTocEntry.call(_this, OperationFormComponent_1.MAIN_INFORMATION_ANCHOR_ID);
              });
          };
          OperationFormComponent.prototype.updateObjectStatusFromStatusUpdatesHistory = function(event) {
            var input = {
              statusDate: event.statusDate,
              statusState: event.statusState,
              statusUser: event.statusUser
            };
            // tslint:disable-next-line:no-empty
            this.operationFormService.updateStaus(input).subscribe(function() {});
          };
          OperationFormComponent.prototype.edit = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Write
            );
          };
          OperationFormComponent.prototype.loadOperation = function() {
            var _this = this;
            // Load dynamic attributes
            var observables = [
              this.getDynamicAttributesObservable(
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                  .MCH_ATTRIBUTE_CATEGORY_ALL_KEY
              ),
              this.getDynamicAttributesObservable(
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                  .MCH_ATTRIBUTE_CATEGORY_OPERATION_KEY
              )
            ];
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])(observables).subscribe(function(results) {
              if (results) {
                var flattenResults = results.reduce(function(acc, val) {
                  return acc.concat(val);
                }, []);
                _this.dynamicAttributes = _this.dynamicAttributesService.from(flattenResults);
                if (!!_this.componentData.objectId && !_this.isCreateOpenMode) {
                  _this.operationId = {
                    opeCode: _this.serializationService.deserialize(_this.componentData.objectId).opeCode,
                    opeVersion: _this.serializationService.deserialize(_this.componentData.objectId).opeVersion,
                    rangeCode: _this.serializationService.deserialize(_this.componentData.objectId).rangeCode
                  };
                  _this.operationFormService.findBireOperation(_this.operationId).subscribe(
                    function(result) {
                      _this.operation = result;
                      if (
                        _this.operation &&
                        _this.operation.opeCode &&
                        _this.operation.opeVersion &&
                        _this.operation.rangeCode
                      ) {
                        _this.loadComponents();
                        _this.loadDocuments(_this.operationId);
                        _this.loadAttributes();
                        _this.setHasHourlyRateValue();
                        if (_this.operation.opeQualification) {
                          _this.qualif = _this.qualifications.find(function(qualification) {
                            return qualification.qualificationCode === _this.operation.opeQualification;
                          });
                          _this.setQualifRateCurrencyLabelByValue();
                          if (!!_this.qualif) {
                            _this.qualifAverageHourRate = _this.qualif.averageHourRate;
                          } else {
                            _super.prototype.throwUnboundLocalError.call(_this, 'loadOperation', 'this.qualif');
                          }
                        }
                      }
                    },
                    function() {
                      _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetOperation'));
                    }
                  );
                } else {
                  _this.operation.statusState =
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__[
                      'AWPropertiesConstants'
                    ].AIRM_OPERATION_STATUS_ONGOING;
                }
              }
            });
          };
          OperationFormComponent.prototype.loadOperationStatus = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                  .FUNC_OBJECT_STATUS_MAP
              )
              .subscribe(
                function(results) {
                  _this.statusList = results;
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetFamilyVariant'));
                }
              );
          };
          OperationFormComponent.prototype.getDynamicAttributesObservable = function(attributeCategory) {
            return this.operationFormService.findBireAttributesByCategory(attributeCategory);
          };
          OperationFormComponent.prototype.reloadOperation = function() {
            this.init();
            this.loadPnTypes();
            this.loadTechnicalLevelsList();
            this.loadQualificationsList();
            this.loadWorkCenterList();
            this.loadOperation();
          };
          OperationFormComponent.prototype.saveOperation = function() {
            var _this = this;
            if (
              this.operation.opeCode === null ||
              this.operation.opeCode === undefined ||
              this.operation.opeVersion === null ||
              this.operation.opeVersion === undefined ||
              this.operation.rangeCode === null ||
              this.operation.rangeCode === undefined
            ) {
              this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
            } else {
              // Components
              var componentsUpdated = this.components.filter(function(component) {
                return !_this.addedComponentsList.some(function(addedComponents) {
                  return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__['DTOUtils'].equalsBireOperationPnDTO(
                    component,
                    addedComponents
                  );
                });
              });
              this.addedComponentsList = this.addedComponentsList.map(function(component) {
                return _this.fillComponent(component, _this.operation);
              });
              this.removedComponentsList = this.removedComponentsList.map(function(component) {
                return _this.fillComponent(component, _this.operation);
              });
              componentsUpdated = componentsUpdated.map(function(component) {
                return _this.fillComponent(component, _this.operation);
              });
              // Documents
              var documentsUpdated = this.documentsTableDataSource.dataSrc.filter(function(document) {
                return !_this.documentsAdded.some(function(documentAdded) {
                  return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__['DTOUtils'].equalsBireDocumentDTO(
                    document._obj,
                    documentAdded._obj
                  );
                });
              });
              this.bireOperationAttributes = this.dynamicAttributesService.toBireOperationAttributeId(
                this.operation.opeCode,
                this.operation.rangeCode,
                this.operation.opeVersion,
                this.dynamicAttributes
              );
              var saveBireOperationInput_1 = {
                bireOperation: this.operation,
                bireOperationPnAddedList: this.addedComponentsList,
                bireOperationPnRemovedList: this.removedComponentsList,
                bireOperationPnUpdatedList: componentsUpdated,
                bireOperationAttributes: this.bireOperationAttributes
              };
              saveBireOperationInput_1.bireDocumentAddedList = [];
              saveBireOperationInput_1.bireDocumentRemovedList = [];
              saveBireOperationInput_1.bireDocumentUpdatedList = [];
              this.documentsAdded.forEach(function(addedDoc) {
                if (!!saveBireOperationInput_1.bireDocumentAddedList && !!addedDoc._obj) {
                  saveBireOperationInput_1.bireDocumentAddedList.push(addedDoc._obj);
                }
              });
              this.documentsRemoved.forEach(function(removedDoc) {
                if (!!saveBireOperationInput_1.bireDocumentRemovedList && !!removedDoc._obj) {
                  saveBireOperationInput_1.bireDocumentRemovedList.push(removedDoc._obj);
                }
              });
              documentsUpdated.forEach(function(updatedDoc) {
                if (!!saveBireOperationInput_1.bireDocumentUpdatedList && !!updatedDoc._obj) {
                  saveBireOperationInput_1.bireDocumentUpdatedList.push(updatedDoc._obj);
                }
              });
              // Operation Fields
              if (this.isCreateOpenMode) {
                this.createOperation(saveBireOperationInput_1);
              } else {
                this.updateOperation(saveBireOperationInput_1);
              }
            }
          };
          OperationFormComponent.prototype.createOperation = function(saveBireOperationInput) {
            var _this = this;
            if (!!this.componentData) {
              this.showSaveSpinner = true;
              this.operationFormService.createBireOperation(saveBireOperationInput).subscribe(
                function() {
                  _this.save();
                  _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnCreateOperation'));
                  _this.showSaveSpinner = false;
                },
                function(error) {
                  _this.messageService.showErrorMessage(error.error.errorDesc);
                  _this.showSaveSpinner = false;
                }
              );
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'createOperation', 'this.componentData');
            }
          };
          OperationFormComponent.prototype.updateOperation = function(saveBireOperationInput) {
            var _this = this;
            this.showSaveSpinner = true;
            this.operationFormService.updateBireOperation(saveBireOperationInput).subscribe(
              function() {
                _this.save();
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnUpdateOperation'));
                _this.showSaveSpinner = false;
              },
              function(error) {
                _this.messageService.showErrorMessage(error.error.errorDesc);
                _this.showSaveSpinner = false;
              }
            );
          };
          OperationFormComponent.prototype.save = function() {
            var context = this.operation.opeCode + '|' + this.operation.opeVersion + '|' + this.operation.rangeCode;
            this.subtitle = context;
            this.displayComponentContext(context, this.isCreateOpenMode);
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Write
            );
            this.componentData.openMode = 1;
            if (!!this.operation.opeCode && !!this.operation.opeVersion && !!this.operation.rangeCode) {
              var operationId = {
                opeCode: this.operation.opeCode,
                opeVersion: this.operation.opeVersion,
                rangeCode: this.operation.rangeCode
              };
              this.componentData.objectId = this.serializationService.serialize(operationId);
              this.init();
              this.loadPnTypes();
              this.loadTechnicalLevelsList();
              this.loadQualificationsList();
              this.loadWorkCenterList();
              this.loadOperation();
            }
          };
          OperationFormComponent.prototype.cancelOperation = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read
            );
            this.reloadOperation();
          };
          OperationFormComponent.prototype.fillComponent = function(component, operation) {
            component.opeCode = operation.opeCode;
            component.opeVersion = operation.opeVersion;
            component.rangeCode = operation.rangeCode;
            return component;
          };
          OperationFormComponent.prototype.searchRangeCode = function() {
            var rangeCodeTableCols = [
              {
                field: 'rangeCode',
                alignment: 'left',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'description',
                alignment: 'left',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableColumnFilterMode']
                    .Input
              }
            ];
            try {
              this.rangeCodeTableData = {
                componentId: 'DialogRangeCode',
                tableCols: rangeCodeTableCols,
                tableRows: this.operationFormService.findAllBireRanges(undefined),
                dataKey: undefined,
                selectionMode:
                  _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_12__['TableSelectionMode'].Single,
                globalFilter: true
              };
              this.displayRangeCodeDialog = true;
            } catch (_a) {
              this.messageService.showErrorMessage('errorOnGetRangeCodes');
            }
          };
          // TODO when update functionality is implemented in StatusUpdatesHistoryComponent
          // public updateObjectStatusFromStatusUpdatesHistory(event: HBireOperationDTO): void {
          // }
          /**************************************************************************
           * Range Code Dialog
           *************************************************************************/
          OperationFormComponent.prototype.onSelectedRangeCode = function(operation) {
            if (operation) {
              this.operation.rangeCode = operation.rangeCode;
            }
          };
          /***********************************************************************************
           * Operation Fields Tab
           ***********************************************************************************/
          OperationFormComponent.prototype.openOperationFieldsTab = function() {
            this.currentTabId = this.tabOperationFieldsId;
          };
          OperationFormComponent.prototype.loadTechnicalLevelsList = function() {
            var _this = this;
            this.operationFormService.findAllBireTils(undefined).subscribe(
              function(results) {
                results.forEach(function(result) {
                  if (
                    !!result &&
                    result.technicalLevel !== null &&
                    result.technicalLevel !== undefined &&
                    !!result.tilName
                  ) {
                    var tempName = {
                      label: result.tilName,
                      value: result.technicalLevel
                    };
                    _this.technicalLevelsToDisplayList.push(tempName);
                  }
                });
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLoadTechnicalLevels'));
              }
            );
          };
          OperationFormComponent.prototype.onTilSelected = function(event) {
            if (!!this.til) {
              this.til.technicalLevel = parseInt(event.value, 10);
              this.operation.technicalLevel = this.til.technicalLevel;
              if (this.operation.technicalLevel !== undefined) {
                var til = this.technicalLevelsToDisplayList.filter(function(name) {
                  return name.value.toString() === event.value;
                })[0];
                if (!!til) {
                  this.til.tilName = til.label;
                }
              } else {
                _super.prototype.throwUnboundLocalError.call(this, 'onTilSelected', 'this.til');
              }
            }
          };
          /**
           * loadQualificationsList : load all the qualifications to display in the qualification dropdown
           */
          OperationFormComponent.prototype.loadQualificationsList = function() {
            var _this = this;
            this.operationFormService.findAllBireQualificationDatas(undefined).subscribe(
              function(results) {
                _this.qualifications = results;
                results.forEach(function(result) {
                  if (!!result.qualificationCode) {
                    var tempName = {
                      value: result.qualificationCode,
                      label: result.qualificationCode + ' - ' + result.qualificationName
                    };
                    _this.qualificationsToDisplayList.push(tempName);
                  } else {
                    _super.prototype.throwUnboundLocalError.call(
                      _this,
                      'loadQualificationsList',
                      'result.qualificationCode'
                    );
                  }
                });
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLoadQualification'));
              }
            );
          };
          /**
           * loadWorkCenterList : load all the work centers to display in the workcenter dropdown
           */
          OperationFormComponent.prototype.loadWorkCenterList = function() {
            var _this = this;
            this.operationFormService.findByCriteriaWorkshop().subscribe(
              function(results) {
                results.forEach(function(result) {
                  if (!!result.bidtWarehouseDTO.whCode) {
                    var tempName = {
                      value: result.bidtWarehouseDTO.whCode,
                      label: result.bidtWarehouseDTO.whCode + ' - ' + result.bidtWarehouseDTO.whName
                    };
                    _this.workcentersToDisplayList.push(tempName);
                  } else {
                    _super.prototype.throwUnboundLocalError.call(_this, 'loadWorkCentersList', 'result.workcenterCode');
                  }
                });
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLoadWorkCenter'));
              }
            );
          };
          /**
           * setHasHourlyRateValue : set the value of this.hasHourlyRateValue to true if the qualification
           *                         of the operation has an averageHourRate
           */
          OperationFormComponent.prototype.setHasHourlyRateValue = function() {
            var _this = this;
            this.hasHourlyRateValue = false;
            if (this.operation.opeQualification) {
              var selectedQualification = this.qualifications.find(function(qualification) {
                return qualification.qualificationCode === _this.operation.opeQualification;
              });
              if (selectedQualification && selectedQualification.averageHourRate) {
                this.hasHourlyRateValue = true;
              }
            }
          };
          /**
           * onChangeQualification : load the datas of the new selected qualification
           *                         in the dropdown + modify the operation (opeQualification)
           */
          OperationFormComponent.prototype.onChangeQualification = function(event) {
            var _this = this;
            if (event.value !== undefined) {
              var qual = this.qualificationsToDisplayList.filter(function(name) {
                return name.value === event.value;
              })[0];
              this.qualif = {
                qualificationCode: qual && qual.value,
                qualificationName: qual && qual.label
              };
              this.operation.opeQualification = this.qualif && this.qualif.qualificationCode;
              if (this.operation.opeQualification) {
                this.qualif = this.qualifications.find(function(qualification) {
                  return qualification.qualificationCode === _this.operation.opeQualification;
                });
                this.setQualifRateCurrencyLabelByValue(); // Assigne a value to this.qualifRateCurrency
                if (!!this.qualif) {
                  this.qualifAverageHourRate = this.qualif.averageHourRate;
                } else {
                  _super.prototype.throwUnboundLocalError.call(this, 'onChangeQualification', 'this.qualif');
                }
              }
              this.setHasHourlyRateValue();
              this.calculateCost();
            }
          };
          OperationFormComponent.prototype.setQualifRateCurrencyLabelByValue = function() {
            var _this = this;
            this.operationFormService.getCurrencyMap().subscribe(
              function(results) {
                var index = results.findIndex(function(element) {
                  return !!_this.qualif && (+element - 1).toString() === _this.qualif.rateCurrency;
                });
                _this.qualifRateCurrency = results[index] && results[index].label;
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetCurrency'));
              }
            );
          };
          /**
           * calculateCost : update opeCost when the operation is modified
           */
          OperationFormComponent.prototype.calculateCost = function() {
            var _this = this;
            if (
              this.operation !== undefined &&
              this.operation.opeManHour !== undefined &&
              this.operation.opeQualification !== undefined &&
              this.operation.opeDurationTime !== undefined
            ) {
              var calculateCostOfBireOperationInput = {
                operationManHour: this.operation.opeManHour,
                qualificationCode: this.operation.opeQualification,
                duration: this.operation.opeDurationTime,
                operationDTO: this.operation
              };
              this.operationFormService
                .calculateCostOfBireOperation(calculateCostOfBireOperationInput)
                .subscribe(function(resultsCalculateCostOfBireOperation) {
                  var cost;
                  cost = resultsCalculateCostOfBireOperation;
                  if (cost !== undefined && cost !== 0) {
                    _this.operation.opeCost = cost;
                  } else {
                    if (
                      !!_this.operation &&
                      !!_this.operation.opeManHour &&
                      !!_this.operation.opeQualification &&
                      !!_this.operation.opeDurationTime
                    ) {
                      _this.operationFormService
                        .calculateCostOfBireOperationForAircraftMaintenance(
                          _this.operation.opeManHour,
                          _this.operation.opeQualification,
                          _this.operation.opeDurationTime,
                          _this.operation
                        )
                        .subscribe(function(resultsCalculateCostOfBireOperationForAircraftMaintenance) {
                          _this.operation.opeCost = resultsCalculateCostOfBireOperationForAircraftMaintenance;
                        });
                    } else {
                      _super.prototype.throwUnboundLocalError.call(_this, 'calculateCost', 'this.operation');
                    }
                  }
                });
            }
          };
          /***********************************************************************************
           * Components Tab
           ***********************************************************************************/
          OperationFormComponent.prototype.openComponentsTab = function() {
            this.currentTabId = this.tabComponentsId;
          };
          OperationFormComponent.prototype.loadComponents = function() {
            var _this = this;
            this.componentsTableDataSource.setData([]);
            this.operationFormService.findBireOperationPnsByOperation(this.operationId).subscribe(
              function(resultsFindBireOperationPnsByOperation) {
                var e_1, _a;
                _this.components = resultsFindBireOperationPnsByOperation || [];
                if (_this.components) {
                  try {
                    for (var _b = __values(_this.components), _c = _b.next(); !_c.done; _c = _b.next()) {
                      var component = _c.value;
                      try {
                        _this.buildOperationPnElementFromBireOperationPnDTO(component);
                      } catch (_d) {
                        _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetComponents'));
                      }
                    }
                  } catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                  } finally {
                    try {
                      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    } finally {
                      if (e_1) throw e_1.error;
                    }
                  }
                }
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetComponents'));
              }
            );
          };
          OperationFormComponent.prototype.addComponent = function() {
            this.currentComponent = {};
            this.currentComponentIndex = -1;
            this.isReadOnlyComponentDialog = false;
            this.displayComponentDialog = true;
          };
          OperationFormComponent.prototype.editComponents = function() {
            var _this = this;
            if (this.componentsTableDataSource.dataSelectionCount === 1) {
              var selectedCompo_1 = this.buildBireOperationPnDTOFromOperationPnElement(
                this.componentsTableDataSource.dataSelection[0]
              );
              this.currentComponentIndex = this.components.findIndex(function(component) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__['DTOUtils'].equalsBireOperationPnDTO(
                  component,
                  selectedCompo_1
                );
              });
              this.currentComponent = __assign({}, this.componentsTableDataSource.dataSelection[0]);
              if (!!this.currentComponent && !!this.currentComponent.type) {
                var type = this.pnTypes.filter(function(pnType) {
                  return !!_this.currentComponent && pnType.label === _this.currentComponent.type;
                })[0];
                if (!!type) {
                  this.currentComponent.type = type.label;
                }
              }
              this.isReadOnlyComponentDialog = false;
              this.displayComponentDialog = true;
            }
          };
          OperationFormComponent.prototype.openComponents = function() {
            if (this.componentsTableDataSource.dataSelectionCount === 1) {
              this.redirect(this.componentsTableDataSource.dataSelection[0]);
            }
          };
          OperationFormComponent.prototype.deleteComponents = function() {
            var _this = this;
            var partialMessageKey =
              this.componentsTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedComponents'
                : 'confirmDeleteSelectedComponent';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.componentsTableDataSource.dataSelection.forEach(function(selectedOperationPn) {
                  var selectedComponent = _this.buildBireOperationPnDTOFromOperationPnElement(selectedOperationPn);
                  var componentsAddedWithoutSelection = _this.addedComponentsList.filter(function(componentAdded) {
                    return !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__['DTOUtils'].equalsBireOperationPnDTO(
                      selectedComponent,
                      componentAdded
                    );
                  });
                  // list of added objects contains the selection
                  if (_this.addedComponentsList.length !== componentsAddedWithoutSelection.length) {
                    // Remove selection from added objects
                    _this.addedComponentsList = componentsAddedWithoutSelection;
                  } else {
                    var isRemoved = _this.addedComponentsList.some(function(componentAdded) {
                      return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__['DTOUtils'].equalsBireOperationPnDTO(
                        selectedComponent,
                        componentAdded
                      );
                    });
                    if (!isRemoved) {
                      _this.removedComponentsList = __spread(_this.removedComponentsList, [selectedComponent]);
                    }
                  }
                });
                _this.components = _this.components.filter(function(component) {
                  return !_this.componentsTableDataSource.dataSelection.some(function(selectedOperationPn) {
                    var selectedComponent = _this.buildBireOperationPnDTOFromOperationPnElement(selectedOperationPn);
                    return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__['DTOUtils'].equalsBireOperationPnDTO(
                      component,
                      selectedComponent
                    );
                  });
                });
                _this.componentsTableDataSource.setData(
                  _this.componentsTableDataSource.dataSrc.filter(function(operationPn) {
                    return !_this.componentsTableDataSource.dataSelection.some(function(selectedOperationPn) {
                      return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__['DTOUtils'].equalsBireOperationPnDTO(
                        operationPn,
                        selectedOperationPn
                      );
                    });
                  })
                );
                _this.componentsTableDataSource.dataSelection = [];
              }
            });
          };
          /**************************************************************************
           * Component Dialog
           *************************************************************************/
          OperationFormComponent.prototype.onValidateComponent = function(opeCompo) {
            if (!!opeCompo) {
              if (
                opeCompo.type ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                  .PN_TYPE_SUBCONTRACTING_KEY
              ) {
                opeCompo.quantity = '1'; // Set the default quantity of subcontracting components
              }
              var opeCompoTyped = {
                pnCode: opeCompo.pnCode,
                name: opeCompo.name,
                type: undefined,
                quantity: opeCompo.quantity,
                unit: opeCompo.unit,
                componentType: opeCompo.componentType
              };
              var operationPn_1 = this.buildBireOperationPnDTOFromOperationPnElement(opeCompo);
              if (this.currentComponentIndex !== -1) {
                if (this.currentComponentIndex !== null && this.currentComponentIndex !== undefined) {
                  if (!!opeCompo.type) {
                    opeCompoTyped.type =
                      this.pnTypes.filter(function(pnType) {
                        return pnType.value === opeCompo.type;
                      })[0] &&
                      this.pnTypes.filter(function(pnType) {
                        return pnType.value === opeCompo.type;
                      })[0].label;
                  }
                  this.components[this.currentComponentIndex] = operationPn_1;
                  this.componentsTableDataSource.replaceData(
                    this.componentsTableDataSource.dataSelection[0],
                    this.addComponentRow(opeCompoTyped)
                  );
                  var updatedOperationComponentIndex = this.updatedComponentsList.findIndex(function(updatedComponent) {
                    return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__['DTOUtils'].equalsBireOperationPnDTO(
                      updatedComponent,
                      operationPn_1
                    );
                  });
                  if (updatedOperationComponentIndex !== -1) {
                    this.updatedComponentsList[updatedOperationComponentIndex] = operationPn_1;
                  } else {
                    this.updatedComponentsList = __spread(this.updatedComponentsList, [operationPn_1]);
                  }
                } else {
                  _super.prototype.throwUnboundLocalError.call(
                    this,
                    'onValidateComponent',
                    'this.currentComponentIndex'
                  );
                }
              } else {
                var rowWithPnCodeExists = this.componentsTableDataSource.dataSrc.some(function(comp) {
                  return comp.pnCode === opeCompo.pnCode;
                });
                if (!rowWithPnCodeExists) {
                  var isAdded = this.addedComponentsList.some(function(newAddedOperationPn) {
                    return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__['DTOUtils'].equalsBireOperationPnDTO(
                      operationPn_1,
                      newAddedOperationPn
                    );
                  });
                  if (isAdded) {
                    this.messageService.showWarningMessage(this.getTranslateKey('warningOnComponentExists'));
                  } else {
                    var component = this.buildBireOperationPnDTOFromOperationPnElement(opeCompo);
                    this.components = __spread(this.components, [component]);
                    this.addedComponentsList = __spread(this.addedComponentsList, [component]);
                    if (opeCompo.type !== null) {
                      opeCompoTyped.type =
                        this.pnTypes.filter(function(pnType) {
                          return pnType.value === opeCompo.type;
                        })[0] &&
                        this.pnTypes.filter(function(pnType) {
                          return pnType.value === opeCompo.type;
                        })[0].label;
                    }
                    this.componentsTableDataSource.addData([this.addComponentRow(opeCompoTyped)]);
                  }
                }
              }
              this.componentsTableDataSource.dataSelection = [];
            }
          };
          OperationFormComponent.prototype.addComponentRow = function(operationCompo) {
            var operationComponentRow = {
              pnCode: operationCompo.pnCode,
              name: operationCompo.name,
              type: operationCompo.type,
              quantity: operationCompo.quantity,
              unit: operationCompo.unit,
              componentType: operationCompo.componentType
            };
            return operationComponentRow;
          };
          OperationFormComponent.prototype.buildOperationPnElementFromBireOperationPnDTO = function(component) {
            var _this = this;
            if (!!component && !!component.pnCode) {
              var pnId = { pnCode: component.pnCode };
              this.operationFormService.findBirePn(pnId).subscribe(function(resultsFindBirePn) {
                var componentPnDTO = resultsFindBirePn;
                var componentPnDTOPnTypeLabel;
                if (componentPnDTO.pnType !== null && componentPnDTO.pnType !== undefined) {
                  var type = _this.pnTypes.filter(function(pnType) {
                    return pnType.value === componentPnDTO.pnType;
                  })[0];
                  if (!!type) {
                    componentPnDTOPnTypeLabel = type.label;
                  }
                }
                _this.operationComponent = {
                  pnCode: component.pnCode,
                  name: componentPnDTO.articleDesignation,
                  type: componentPnDTO.pnType,
                  quantity: component.quantity,
                  unit: componentPnDTO.quantityUnit
                };
                var operationComponentTyped = {
                  pnCode: component.pnCode,
                  name: componentPnDTO.articleDesignation,
                  type: componentPnDTOPnTypeLabel,
                  quantity: component.quantity,
                  unit: componentPnDTO.quantityUnit,
                  componentType: ''
                };
                switch (componentPnDTO.pnType) {
                  case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__[
                    'AWPropertiesConstants'
                  ].PN_TYPE_PART_KEY:
                    operationComponentTyped.componentType = componentPnDTO.pnType;
                    break;
                  case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__[
                    'AWPropertiesConstants'
                  ].PN_TYPE_SUBCONTRACTING_KEY:
                    operationComponentTyped.componentType = componentPnDTO.pnType;
                    break;
                  default:
                    operationComponentTyped.componentType =
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__[
                        'AWPropertiesConstants'
                      ].PN_TYPE_INGREDIENT_KEY;
                    break;
                }
                _this.componentsTableDataSource.addData([operationComponentTyped]);
              });
            }
          };
          OperationFormComponent.prototype.buildBireOperationPnDTOFromOperationPnElement = function(opeCompo) {
            var buildedComponent = {
              opeCode: this.operation.opeCode,
              opeVersion: this.operation.opeVersion,
              rangeCode: this.operation.rangeCode,
              pnCode: opeCompo.pnCode,
              quantity: opeCompo.quantity,
              unit: opeCompo.unit
            };
            return buildedComponent;
          };
          OperationFormComponent.prototype.redirect = function(rowData) {
            var _this = this;
            if (
              rowData.componentType ===
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                .PN_TYPE_PART_KEY
            ) {
              this.goToPartNumber(
                rowData.pnCode,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read
              );
            } else {
              if (!!rowData.pnCode) {
                var pnId = { pnCode: rowData.pnCode };
                this.operationFormService.findBirePn(pnId).subscribe(function(result) {
                  _this.goToMaterial(
                    result,
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read
                  );
                });
              }
            }
          };
          OperationFormComponent.prototype.goToPartNumber = function(objectId, openMode) {
            var labelKey = 'transaction.PartNumberFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'PartNumberFormComponent',
              objectId: objectId,
              openMode: openMode
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          OperationFormComponent.prototype.goToMaterial = function(objectId, openMode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .LOG_MATERIAL_FORM,
              openMode: openMode
            };
            if (!!objectId) {
              var materialFormId = {
                pnCode: objectId.pnCode,
                pnType: objectId.pnType
              };
              data.objectId = this.serializationService.serialize(materialFormId);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /***********************************************************************************
           * Documents Tab
           ***********************************************************************************/
          OperationFormComponent.prototype.openDocumentsTab = function() {
            this.currentTabId = this.tabDocumentsId;
          };
          OperationFormComponent.prototype.loadDocuments = function(operationId) {
            var _this = this;
            this.documentsTableDataSource.setData([]);
            this.operationFormService.findBireDocumentByOperation(operationId).subscribe(
              function(results) {
                results.forEach(function(result) {
                  _this.documentsTableDataSource.addData([_this.convertToDocumentRow(result)]);
                });
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetDocuments'));
              }
            );
          };
          OperationFormComponent.prototype.convertToDocumentRow = function(document) {
            var documentRow = {
              docName: document.docName,
              docSource: document.docSource,
              docExtension: this.formatDocExtension(document),
              docSize: this.formatDocSize(document),
              docPublicationDate: this.dateService.dateToString(document.docPublicationDate),
              docDescription: document.docDescription,
              _obj: document
            };
            return documentRow;
          };
          OperationFormComponent.prototype.formatDocExtension = function(document) {
            return _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_26__['FileUtils']
              .getExtension(document.docName)
              .toUpperCase();
          };
          OperationFormComponent.prototype.formatDocSize = function(document) {
            return !!document.docFile
              ? _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_26__['FileUtils'].getFormattedSize(
                  document.docFile.length
                )
              : '';
          };
          OperationFormComponent.prototype.uploadDocument = function(event, fileUploader) {
            var _this = this;
            if (event.files) {
              var file_1 = event.files[0];
              // Check if the file already exists
              var fileExists = this.documentsTableDataSource.dataSrc.some(function(document) {
                return document.docName === file_1.name;
              });
              if (fileExists) {
                this.messageService.showWarningMessage(this.getTranslateKey('warningOnFileExists'));
              } else {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_26__['FileUtils'].getFileContentAsBase64(
                  file_1,
                  function(fileContent) {
                    if (fileContent) {
                      var document_1 = {
                        docFile: fileContent,
                        docName: file_1.name,
                        docPublicationDate: new Date()
                      };
                      _this.documentsTableDataSource.addData([_this.convertToDocumentRow(document_1)]);
                      _this.documentsAdded = __spread(_this.documentsAdded, [_this.convertToDocumentRow(document_1)]);
                    }
                  }
                );
              }
              fileUploader.clear();
            }
          };
          OperationFormComponent.prototype.addDocument = function() {
            this.currentDocumentIndex = -1;
            this.currentDocument = undefined;
            this.isReadOnlyDocumentDialog = false;
            this.displayDocumentDialog = true;
          };
          OperationFormComponent.prototype.editDocument = function() {
            var _this = this;
            if (this.documentsTableDataSource.dataSelectionCount === 1) {
              this.currentDocumentIndex = this.documentsTableDataSource.dataSrc.findIndex(function(document) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__['DTOUtils'].equalsBireDocOperationDTO(
                  document._obj,
                  _this.documentsTableDataSource.dataSelection[0]._obj
                );
              });
              this.currentDocument = __assign({}, this.documentsTableDataSource.dataSelection[0]);
              this.isReadOnlyDocumentDialog = false;
              this.showAddDocumentDialog = true;
            }
          };
          OperationFormComponent.prototype.openDocument = function() {
            if (this.documentsTableDataSource.dataSelectionCount === 1) {
              this.currentDocument = this.documentsTableDataSource.dataSelection[0];
              this.currentDocumentIndex = undefined;
              this.isReadOnlyDocumentDialog = true;
              this.displayDocumentDialog = true;
            }
          };
          OperationFormComponent.prototype.downloadFile = function(document) {
            if (!!document._obj) {
              _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_26__['FileUtils'].downloadFile(
                document._obj.docFile,
                document.docName
              );
            }
          };
          OperationFormComponent.prototype.deleteDocuments = function() {
            var _this = this;
            var partialMessageKey =
              this.documentsTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedDocuments'
                : 'confirmDeleteSelectedDocument';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.documentsTableDataSource.dataSelection.forEach(function(selectedDocument) {
                  var documentsAddedWithoutSelection = _this.documentsAdded.filter(function(documentAdded) {
                    return !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__['DTOUtils'].equalsBireDocOperationDTO(
                      selectedDocument._obj,
                      documentAdded._obj
                    );
                  });
                  // list of added objects contains the selection
                  if (_this.documentsAdded.length !== documentsAddedWithoutSelection.length) {
                    // Remove selection from added objects
                    _this.documentsAdded = documentsAddedWithoutSelection;
                  } else {
                    var isRemoved = _this.documentsAdded.some(function(documentAdded) {
                      return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__[
                        'DTOUtils'
                      ].equalsBireDocOperationDTO(selectedDocument._obj, documentAdded._obj);
                    });
                    if (!isRemoved) {
                      _this.documentsRemoved = __spread(_this.documentsRemoved, [selectedDocument]);
                    }
                  }
                });
                _this.documentsTableDataSource.setData(
                  _this.documentsTableDataSource.dataSrc.filter(function(document) {
                    return !_this.documentsTableDataSource.dataSelection.some(function(selectedDocument) {
                      return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__[
                        'DTOUtils'
                      ].equalsBireDocOperationDTO(document._obj, selectedDocument._obj);
                    });
                  })
                );
                _this.documentsTableDataSource.dataSelection = [];
              }
            });
          };
          OperationFormComponent.prototype.showDocExtension = function(document) {
            return _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_26__['FileUtils']
              .getExtension(document.docName)
              .toUpperCase();
          };
          OperationFormComponent.prototype.showDocSize = function(document) {
            return document.docFile
              ? _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_26__['FileUtils'].getFormattedSize(
                  document.docFile.length
                )
              : '';
          };
          /**************************************************************************
           * Document Dialog
           *************************************************************************/
          OperationFormComponent.prototype.addNewDocument = function(newDocument) {
            var searchInDisplayedList = this.documentsTableDataSource.dataSrc.find(function(value) {
              return value.docName === newDocument.docName;
            });
            if (!searchInDisplayedList) {
              this.documentsAdded.push(this.convertToDocumentRow(newDocument));
              this.documentsTableDataSource.addData([this.convertToDocumentRow(newDocument)]);
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('errorFileAlreadyExist'));
            }
          };
          OperationFormComponent.prototype.onAddDocument = function(document) {
            if (!!document._obj) {
              document._obj.docName = document.docName;
              document._obj.docSource = document.docSource;
              if (!!document.docPublicationDate) {
                document._obj.docPublicationDate = new Date(document.docPublicationDate);
              }
              document._obj.docDescription = document.docDescription;
            }
            if (document) {
              if (this.currentDocumentIndex !== undefined) {
                this.documentsTableDataSource.replaceData(this.documentsTableDataSource.dataSrc[0], document);
              } else {
                var isAdded = this.documentsAdded.some(function(documentAdded) {
                  return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__['DTOUtils'].equalsBireDocOperationDTO(
                    document._obj,
                    documentAdded._obj
                  );
                });
                if (isAdded) {
                  this.messageService.showWarningMessage(this.getTranslateKey('warningOnDocumentExists'));
                } else {
                  this.documentsTableDataSource.addData([document]);
                  this.documentsAdded = __spread(this.documentsAdded, [document]);
                }
              }
            }
            this.documentsTableDataSource.dataSelection = [];
          };
          /***********************************************************************************
           * Attributes Tab
           ***********************************************************************************/
          OperationFormComponent.prototype.openAttributesTab = function() {
            this.currentTabId = this.tabAttributesId;
          };
          OperationFormComponent.prototype.loadAttributes = function() {
            var _this = this;
            this.operationFormService.findBireOperationAttributesByOperation(this.operation).subscribe(
              function(results) {
                _this.bireOperationAttributes = results;
                _this.dynamicAttributesService.setValues(_this.dynamicAttributes, _this.bireOperationAttributes);
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFindAttributesByOperation'));
              }
            );
          };
          OperationFormComponent.prototype.initCostSettingDisplay = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                  .AEROWEBB_CONFIGURATION_MAP
              )
              .subscribe(function(awConfiguration) {
                _this.isCostSettingEnabled = _shared_utils_settings_utils__WEBPACK_IMPORTED_MODULE_27__[
                  'SettingsUtils'
                ].isPropertyEnabled(
                  awConfiguration,
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                    .DISPLAY_COST
                );
              });
          };
          OperationFormComponent.prototype.showStatus = function() {
            var _this = this;
            var overlayRef = this._overlayService.openWithPositionCenter({
              content: _object_status_object_status_component__WEBPACK_IMPORTED_MODULE_28__['ObjectStatusComponent'],
              data: {
                currentAuthor: this.operation.statusUser,
                currentDate: this.operation.statusDate,
                currentStatus: {
                  label: this._formatSelectOption.transform(this.operation.statusState, this.statusList),
                  value: this.operation.statusState
                },
                nextStatuses: this.statusList
              }
            });
            overlayRef.afterClosed$.subscribe({
              next: function(event) {
                if (event.data) {
                  _this.operation.statusState = event.data;
                  _this.saveOperation();
                }
              }
            });
          };
          var OperationFormComponent_1;
          OperationFormComponent.MAIN_INFORMATION_ANCHOR_ID = 'mainInformationAnchor';
          OperationFormComponent.ADD_INFORMATION_ANCHOR_ID = 'mainDataAnchor';
          OperationFormComponent.COMPONENTS_ANCHOR_ID = 'componentTableAnchor';
          OperationFormComponent.DOCUMENTS_ANCHOR_ID = 'documentTableAnchor';
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            OperationFormComponent.prototype,
            'componentData',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                OperationFormComponent_1.MAIN_INFORMATION_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            OperationFormComponent.prototype,
            'mainInformationElRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                OperationFormComponent_1.ADD_INFORMATION_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            OperationFormComponent.prototype,
            'addInformationElRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                OperationFormComponent_1.COMPONENTS_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            OperationFormComponent.prototype,
            'componentsElRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                OperationFormComponent_1.DOCUMENTS_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            OperationFormComponent.prototype,
            'documentsElRef',
            void 0
          );
          OperationFormComponent = OperationFormComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-operation-form',
                template: __webpack_require__(
                  /*! ./operation-form.component.html */ './src/app/main/engineering-management/operation/form/operation-form.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_19__['MessageService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_22__['TabService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_18__['LoaderService'],
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_16__['FavoriteService'],
                _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_4__['PageTocService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_21__['SerializationService'],
                _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_17__['InputValidationService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_14__['ConfirmationService'],
                _shared_services_update_historic_service__WEBPACK_IMPORTED_MODULE_23__['UpdateHistoricService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_20__['PropertiesService'],
                _shared_api_update_historic_api__WEBPACK_IMPORTED_MODULE_3__['UpdateHistoricApi'],
                _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_5__[
                  'DynamicAttributesService'
                ],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _operation_form_service__WEBPACK_IMPORTED_MODULE_30__['OperationFormService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_15__['DateService'],
                _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_29__['OverlayService'],
                _shared_pipes_format_select_option_pipe__WEBPACK_IMPORTED_MODULE_13__['FormatSelectOptionPipe']
              ])
            ],
            OperationFormComponent
          );
          return OperationFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_24__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/operation/form/operation-form.service.ts':
      /*!**************************************************************************************!*\
  !*** ./src/app/main/engineering-management/operation/form/operation-form.service.ts ***!
  \**************************************************************************************/
      /*! exports provided: OperationFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'OperationFormService', function() {
          return OperationFormService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/aircraft-maintenance.api */ './src/app/shared/api/aircraft-maintenance.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_api_status_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/api/status-management.api */ './src/app/shared/api/status-management.api.ts'
        );
        /* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/api/task-management.api */ './src/app/shared/api/task-management.api.ts'
        );
        /* harmony import */ var _shared_api_user_profile_business_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/api/user-profile-business.api */ './src/app/shared/api/user-profile-business.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
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

        var OperationFormService = /** @class */ (function(_super) {
          __extends(OperationFormService, _super);
          function OperationFormService(
            http,
            appConfigService,
            aircraftMaintenanceApi,
            productStructureManagementApi,
            taskManagementApi,
            propertiesService,
            userProfileBusinessApi,
            statusManagementApi,
            bidtWarehouseApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.taskManagementApi = taskManagementApi;
            _this.propertiesService = propertiesService;
            _this.userProfileBusinessApi = userProfileBusinessApi;
            _this.statusManagementApi = statusManagementApi;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            return _this;
          }
          /*************************************************************************
           * Aircraft maintenance api
           *************************************************************************/
          OperationFormService.prototype.calculateCostOfBireOperationForAircraftMaintenance = function(
            operationManHour,
            qualificationCode,
            duration,
            operationDTO
          ) {
            var params = {
              operationManHour: operationManHour,
              qualificationCode: qualificationCode,
              duration: duration,
              operationDTO: operationDTO
            };
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.calculateCostOfBireOperation, params);
          };
          /*************************************************************************
           * Product structure management api
           *************************************************************************/
          OperationFormService.prototype.findBireAttributesByCategory = function(p) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBireAttributesByCategory, p);
          };
          OperationFormService.prototype.findBirePnForProductStructureManagement = function(p) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBirePn, p);
          };
          OperationFormService.prototype.createBireDocument = function(p) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.createBireDocument, p);
          };
          OperationFormService.prototype.updateBireDocument = function(p) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.updateBireDocument, p);
          };
          OperationFormService.prototype.removeBireDocument = function(p) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.removeBireDocument, p);
          };
          /*
           *    Dialog Components
           */
          OperationFormService.prototype.findBirePnsBySearchCriteriaPSM = function(p) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBirePnsBySearchCriteria, p);
          };
          /*************************************************************************
           * Task management api
           *************************************************************************/
          OperationFormService.prototype.findAllBireTils = function(p) {
            return _super.prototype.post.call(this, this.taskManagementApi.findAllBireTils, p);
          };
          OperationFormService.prototype.findAllBireQualificationDatas = function(p) {
            return _super.prototype.post.call(this, this.taskManagementApi.findAllBireQualificationDatas, p);
          };
          OperationFormService.prototype.findBireOperationPnsByOperation = function(p) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBireOperationPnsByOperation, p);
          };
          OperationFormService.prototype.findBirePn = function(pnId) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBirePn, pnId);
          };
          OperationFormService.prototype.findBireDocOperationByOperation = function(p) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBireDocOperationByOperation, p);
          };
          OperationFormService.prototype.findBireDocumentByOperation = function(p) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBireDocumentByOperation, p);
          };
          OperationFormService.prototype.calculateCostOfBireOperation = function(input) {
            return _super.prototype.post.call(this, this.taskManagementApi.calculateCostOfBireOperation, input);
          };
          OperationFormService.prototype.findBireOperationAttributesByOperation = function(operation) {
            return _super.prototype.post.call(
              this,
              this.taskManagementApi.findBireOperationAttributesByOperation,
              operation
            );
          };
          OperationFormService.prototype.updateBireOperation = function(input) {
            return _super.prototype.post.call(this, this.taskManagementApi.updateBireOperation, input);
          };
          OperationFormService.prototype.createBireOperation = function(input) {
            return _super.prototype.post.call(this, this.taskManagementApi.createBireOperation, input);
          };
          OperationFormService.prototype.createBireOperationPn = function(p) {
            return _super.prototype.post.call(this, this.taskManagementApi.createBireOperationPn, p);
          };
          OperationFormService.prototype.updateBireOperationPn = function(p) {
            return _super.prototype.post.call(this, this.taskManagementApi.updateBireOperationPn, p);
          };
          OperationFormService.prototype.removeBireOperationPn = function(p) {
            return _super.prototype.post.call(this, this.taskManagementApi.removeBireOperationPn, p);
          };
          OperationFormService.prototype.createBireDocOperation = function(p) {
            return _super.prototype.post.call(this, this.taskManagementApi.createBireDocOperation, p);
          };
          OperationFormService.prototype.removeBireDocOperation = function(p) {
            return _super.prototype.post.call(this, this.taskManagementApi.removeBireDocOperation, p);
          };
          OperationFormService.prototype.removeBireOperationAttribute = function(p) {
            return _super.prototype.post.call(this, this.taskManagementApi.removeBireOperationAttribute, p);
          };
          OperationFormService.prototype.createBireOperationAttribute = function(p) {
            return _super.prototype.post.call(this, this.taskManagementApi.createBireOperationAttribute, p);
          };
          OperationFormService.prototype.updateBireOperationAttribute = function(p) {
            return _super.prototype.post.call(this, this.taskManagementApi.updateBireOperationAttribute, p);
          };
          OperationFormService.prototype.findBireOperation = function(p) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBireOperation, p);
          };
          /*************************************************************************
           * Work Center api
           *************************************************************************/
          OperationFormService.prototype.findByCriteriaWorkshop = function() {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findByCriteriaWorkshop);
          };
          /*
           * Dialog Components
           */
          OperationFormService.prototype.findBirePnsBySearchCriteriaTM = function(p) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBirePnsBySearchCriteria, p);
          };
          /*
           * Dialog Range Codes
           */
          OperationFormService.prototype.findAllBireRanges = function(p) {
            return _super.prototype.post.call(this, this.taskManagementApi.findAllBireRanges, p);
          };
          /*************************************************************************
           * User profile business api
           *************************************************************************/
          OperationFormService.prototype.isBuildingBlockInstalled = function(p) {
            return _super.prototype.post.call(this, this.userProfileBusinessApi.isBuildingBlockInstalled, p);
          };
          /*************************************************************************
           * PropertiesService
           *************************************************************************/
          OperationFormService.prototype.getPnTypeMap = function() {
            return this.propertiesService.getValue('getPnTypeMap');
          };
          OperationFormService.prototype.getCurrencyMap = function() {
            return this.propertiesService.getValue('getCurrencyMap');
          };
          OperationFormService.prototype.updateStaus = function(input) {
            return _super.prototype.post.call(this, this.statusManagementApi.updateStatusGlobal, input);
          };
          OperationFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__['AppConfigService'],
                _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_2__['AircraftMaintenanceApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_6__['TaskManagementApi'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_10__['PropertiesService'],
                _shared_api_user_profile_business_api__WEBPACK_IMPORTED_MODULE_7__['UserProfileBusinessApi'],
                _shared_api_status_management_api__WEBPACK_IMPORTED_MODULE_5__['StatusManagementApi'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_3__['BidtWarehouseApi']
              ])
            ],
            OperationFormService
          );
          return OperationFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/engineering-management/operation/form/operation-import-popup/operation-import-popup.component.html':
      /*!*************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/operation/form/operation-import-popup/operation-import-popup.component.html ***!
  \*************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".docManagement" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".docName" | translate }}</label>\r\n\r\n        <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n          <div class="form-control-data">\r\n            {{ document.docName }}\r\n          </div>\r\n\r\n          <div class="btn-file-upload-wrapper">\r\n            <p-fileUpload\r\n              #fileUploader\r\n              *ngIf="!isReadOnlyForm"\r\n              class="aw-fileupload"\r\n              name="document[]"\r\n              customUpload="true"\r\n              mode="basic"\r\n              auto="true"\r\n              chooseLabel=""\r\n              (uploadHandler)="uploadDocument($event, fileUploader)"\r\n            ></p-fileUpload>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".docSource" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <input class="aw-input" type="text" [(ngModel)]="document.docSource" [disabled]="isReadOnlyForm" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".docPublicationDate" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <p-calendar\r\n            showButtonBar="true"\r\n            [monthNavigator]="true"\r\n            [yearNavigator]="true"\r\n            [yearRange]="sessionService.calendarYearRange"\r\n            class="aw-calendar"\r\n            [dateFormat]="sessionService.dateFormatPrimeNG"\r\n            [locale]="sessionService.calendarFormat"\r\n            [(ngModel)]="document.docPublicationDate"\r\n            [disabled]="isReadOnlyForm"\r\n            appendTo="body"\r\n          ></p-calendar>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".docDescription" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <textarea\r\n            class="aw-textarea"\r\n            [rows]="3"\r\n            pInputTextarea\r\n            [(ngModel)]="document.docDescription"\r\n            [disabled]="isReadOnlyForm"\r\n          ></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">{{ "global.cancel" | translate }}</button>\r\n    <button\r\n      *ngIf="!isReadOnlyForm"\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [disabled]="!document.docFile && !document.docSource"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/operation/form/operation-import-popup/operation-import-popup.component.ts':
      /*!***********************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/operation/form/operation-import-popup/operation-import-popup.component.ts ***!
  \***********************************************************************************************************************/
      /*! exports provided: OperationImportPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'OperationImportPopupComponent',
          function() {
            return OperationImportPopupComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
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

        var OperationImportPopupComponent = /** @class */ (function(_super) {
          __extends(OperationImportPopupComponent, _super);
          function OperationImportPopupComponent(sessionService, messageService, propertiesService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'SbadFormComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.messageService = messageService;
            _this.propertiesService = propertiesService;
            _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.loadTypes();
            return _this;
          }
          Object.defineProperty(OperationImportPopupComponent.prototype, 'display', {
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
          OperationImportPopupComponent.prototype.ngOnInit = function() {
            if (!this.document) {
              this.document = {};
            }
          };
          OperationImportPopupComponent.prototype.cancel = function() {
            this.display = false;
          };
          OperationImportPopupComponent.prototype.validate = function() {
            this.onValidated.emit(this.document);
            this.display = false;
          };
          OperationImportPopupComponent.prototype.loadTypes = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .DOC_PARTNER_CATEGORY_MAP
              )
              .subscribe(
                function(results) {
                  _this.types = results || [];
                },
                function() {
                  _this.messageService.showErrorMessage(_this.componentId + '.errorOnGetTypes');
                }
              );
          };
          OperationImportPopupComponent.prototype.uploadDocument = function(event, fileUploader) {
            var _this = this;
            if (event.files) {
              var file_1 = event.files[0];
              _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_7__['FileUtils'].getFileContentAsBase64(
                file_1,
                function(fileContent) {
                  if (fileContent) {
                    _this.document.docFile = fileContent;
                    _this.document.docName = file_1.name;
                    _this.document.docPublicationDate = new Date();
                  }
                }
              );
              fileUploader.clear();
            }
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            OperationImportPopupComponent.prototype,
            'display',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            OperationImportPopupComponent.prototype,
            'displayChange',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            OperationImportPopupComponent.prototype,
            'document',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            OperationImportPopupComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            OperationImportPopupComponent.prototype,
            'onValidated',
            void 0
          );
          OperationImportPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-operation-import-popup',
                template: __webpack_require__(
                  /*! ./operation-import-popup.component.html */ './src/app/main/engineering-management/operation/form/operation-import-popup/operation-import-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__['SessionService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__['MessageService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__['PropertiesService']
              ])
            ],
            OperationImportPopupComponent
          );
          return OperationImportPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/operation/operation.module.ts':
      /*!***************************************************************************!*\
  !*** ./src/app/main/engineering-management/operation/operation.module.ts ***!
  \***************************************************************************/
      /*! exports provided: OperationModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'OperationModule', function() {
          return OperationModule;
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
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/checkbox */ './node_modules/primeng/checkbox.js'
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/fileupload */ './node_modules/primeng/fileupload.js'
        );
        /* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_fileupload__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/inputtextarea */ './node_modules/primeng/inputtextarea.js'
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/keyfilter */ './node_modules/primeng/keyfilter.js'
        );
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/message */ './node_modules/primeng/message.js'
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_message__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__
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
        /* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ './src/app/shared/components/component-sidebar/component-sidebar.mdule.ts'
        );
        /* harmony import */ var _shared_components_dialog_bire_document_dialog_bire_document_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/components/dialog-bire-document/dialog-bire-document.module */ './src/app/shared/components/dialog-bire-document/dialog-bire-document.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_part_dialog_search_part_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-part/dialog-search-part.module */ './src/app/shared/components/dialog-search-part/dialog-search-part.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/components/dialog-table/dialog-table.module */ './src/app/shared/components/dialog-table/dialog-table.module.ts'
        );
        /* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/components/dynamic-attributes/dynamic-attributes.module */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_status_update_history_status_update_history_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../shared/components/status-update-history/status-update-history.module */ './src/app/shared/components/status-update-history/status-update-history.module.ts'
        );
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _form_dialog_components_dialog_components_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./form/dialog-components/dialog-components.component */ './src/app/main/engineering-management/operation/form/dialog-components/dialog-components.component.ts'
        );
        /* harmony import */ var _form_operation_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./form/operation-form.component */ './src/app/main/engineering-management/operation/form/operation-form.component.ts'
        );
        /* harmony import */ var _form_operation_form_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./form/operation-form.service */ './src/app/main/engineering-management/operation/form/operation-form.service.ts'
        );
        /* harmony import */ var _form_operation_import_popup_operation_import_popup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./form/operation-import-popup/operation-import-popup.component */ './src/app/main/engineering-management/operation/form/operation-import-popup/operation-import-popup.component.ts'
        );
        /* harmony import */ var _search_operation_search_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./search/operation-search.component */ './src/app/main/engineering-management/operation/search/operation-search.component.ts'
        );
        /* harmony import */ var _search_operation_search_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./search/operation-search.service */ './src/app/main/engineering-management/operation/search/operation-search.service.ts'
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
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__['CheckboxModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__['DropdownModule'],
          primeng_fileupload__WEBPACK_IMPORTED_MODULE_4__['FileUploadModule'],
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__['InputTextareaModule'],
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__['KeyFilterModule'],
          primeng_message__WEBPACK_IMPORTED_MODULE_7__['MessageModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_8__['TableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__['TooltipModule'],
          _shared_components_dialog_search_part_dialog_search_part_module__WEBPACK_IMPORTED_MODULE_15__[
            'DialogSearchPartModule'
          ]
        ];
        var INTERNAL_MODULES = [
          _shared_components_dialog_bire_document_dialog_bire_document_module__WEBPACK_IMPORTED_MODULE_14__[
            'DialogBireDocumentModule'
          ],
          _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_13__[
            'ComponentSidebarModule'
          ],
          _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_16__['DialogTableModule'],
          _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_17__[
            'DynamicAttributesModule'
          ],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_18__['ModalModule'],
          _shared_components_status_update_history_status_update_history_module__WEBPACK_IMPORTED_MODULE_19__[
            'StatusUpdateHistoryModule'
          ],
          _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_20__['TableModule']
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _form_dialog_components_dialog_components_component__WEBPACK_IMPORTED_MODULE_22__[
            'DialogComponentsComponent'
          ],
          _form_operation_import_popup_operation_import_popup_component__WEBPACK_IMPORTED_MODULE_25__[
            'OperationImportPopupComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [
          _form_operation_form_component__WEBPACK_IMPORTED_MODULE_23__['OperationFormComponent'],
          _search_operation_search_component__WEBPACK_IMPORTED_MODULE_26__['OperationSearchComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _form_operation_form_service__WEBPACK_IMPORTED_MODULE_24__['OperationFormService'],
          _search_operation_search_service__WEBPACK_IMPORTED_MODULE_27__['OperationSearchService']
        ];
        var OperationModule = /** @class */ (function() {
          function OperationModule() {}
          OperationModule = __decorate(
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
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_21__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            OperationModule
          );
          return OperationModule;
        })();

        /***/
      },

    /***/ './src/app/main/engineering-management/operation/search/operation-search.component.html':
      /*!**********************************************************************************************!*\
  !*** ./src/app/main/engineering-management/operation/search/operation-search.component.html ***!
  \**********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ "page.searchPage" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button type="button" mat-raised-button (click)="createNewOperation()" *ngIf="hasUpdateAccessRight">\r\n      {{ "global.create" | translate }}\r\n    </button>\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row search-criteria-header">\r\n                  <i\r\n                    class="fa fa-fw fa-undo aw-icon aw-icon-with-border search-criteria-action"\r\n                    aria-hidden="true"\r\n                    pTooltip="{{ \'global.reset\' | translate }}"\r\n                    tooltipPosition="top"\r\n                    (click)="resetSearchCriteria()"\r\n                  ></i>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".opeCode" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="searchObject.opeCode" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".opeVersion" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="searchObject.opeVersion" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".rangeCode" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="searchObject.rangeCode" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".opeSequenceNumber" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="searchObject.opeSequenceNumber" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="display--flex-row flex--1">\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentData.componentId + ".opeChapter" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" class="aw-input" [(ngModel)]="searchObject.opeChapter" maxlength="2" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentData.componentId + ".opeSection" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" class="aw-input" [(ngModel)]="searchObject.opeSection" maxlength="2" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentData.componentId + ".opeSubject" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" class="aw-input" [(ngModel)]="searchObject.opeSubject" maxlength="2" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="display--flex-row flex--1">\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentData.componentId + ".opeSheet" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" class="aw-input" [(ngModel)]="searchObject.opeSheet" maxlength="5" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentData.componentId + ".opeMarks" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" class="aw-input" [(ngModel)]="searchObject.opeMarks" maxlength="5" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--2"></div>\r\n                </div>\r\n\r\n                <div class="advanced-criteria" [ngClass]="{ \'display--none\': !showAdvancedCriteria }">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".opeDesignation" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" class="aw-input" [(ngModel)]="searchObject.opeDesignation" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".opeDescription" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" class="aw-input" [(ngModel)]="searchObject.opeDescription" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group flex--2"></div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row search-criteria-footer">\r\n                  <button mat-button (click)="showAdvancedCriteria = !showAdvancedCriteria">\r\n                    <ng-container *ngIf="showAdvancedCriteria">\r\n                      <mat-icon>remove</mat-icon>\r\n                      {{ "global.collapseCriteria" | translate }}\r\n                    </ng-container>\r\n                    <ng-container *ngIf="!showAdvancedCriteria">\r\n                      <mat-icon>add</mat-icon>\r\n                      {{ "global.expandCriteria" | translate }}\r\n                    </ng-container>\r\n                  </button>\r\n\r\n                  <div class="search-actions">\r\n                    <button\r\n                      type="button"\r\n                      mat-raised-button\r\n                      class="btn-with-spinner"\r\n                      (click)="search()"\r\n                      color="primary"\r\n                      appKeyPress\r\n                      [keyCode]="\'Enter\'"\r\n                      (keyPress)="search()"\r\n                    >\r\n                      <span *ngIf="isLoading" class="lds-hourglass"></span>\r\n                      {{ "global.toSearch" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ "global.results" | translate }} ({{\r\n                    operationTableDataSource ? operationTableDataSource.dataCount : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <a-table [dataSource]="operationTableDataSource">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    *ngIf="\r\n                      operationTableDataSource &&\r\n                      operationTableDataSource.hasData &&\r\n                      !operationTableDataSource.hasDataSelection\r\n                    "\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="exportTable()"\r\n                  >\r\n                    {{ "global.export" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf="hasManageAccessRight && operationTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    color="warn"\r\n                    (click)="deleteSelectedOperations()"\r\n                  >\r\n                    {{ "global.delete" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf="operationTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="openSelectedOperations()"\r\n                  >\r\n                    {{ "global.open" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n                <ng-template columnDef="opeCode" let-rowData="rowData">\r\n                  <a (click)="openOperationLink(rowData)"> {{ rowData.opeCode }} </a>\r\n                </ng-template>\r\n                <ng-template columnDef="isOperator" let-rowData="rowData">\r\n                  <i\r\n                    *ngIf="rowData.isOperator !== null && rowData.isOperator"\r\n                    class="fa fa-fw fa-check"\r\n                    aria-hidden="true"\r\n                  ></i>\r\n                </ng-template>\r\n                <ng-template columnDef="isOwner" let-rowData="rowData">\r\n                  <i\r\n                    *ngIf="rowData.isOwner !== null && rowData.isOwner"\r\n                    class="fa fa-fw fa-check"\r\n                    aria-hidden="true"\r\n                  ></i>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/operation/search/operation-search.component.ts':
      /*!********************************************************************************************!*\
  !*** ./src/app/main/engineering-management/operation/search/operation-search.component.ts ***!
  \********************************************************************************************/
      /*! exports provided: OperationSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'OperationSearchComponent',
          function() {
            return OperationSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/services/export.service */ './src/app/shared/services/export.service.ts'
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
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _operation_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./operation-search.service */ './src/app/main/engineering-management/operation/search/operation-search.service.ts'
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

        var OperationSearchComponent = /** @class */ (function(_super) {
          __extends(OperationSearchComponent, _super);
          function OperationSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            confirmationService,
            exportService,
            operationSearchService
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
            _this.confirmationService = confirmationService;
            _this.exportService = exportService;
            _this.operationSearchService = operationSearchService;
            _this.newItem = false;
            _this.resultsTableExportName = 'operation-list';
            _this.isLoading = false;
            _this.isReadOnlyForm = false;
            _this.isNewOperationForm = false;
            _this.newOperationForm = {};
            _this.operation = {};
            _this.searchObject = {};
            _this.initOperationTableDataSource();
            _this.showAdvancedCriteria = false;
            _this.exportList = [];
            return _this;
          }
          OperationSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .ENG_OPERATION_SEARCH;
          };
          OperationSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
          };
          OperationSearchComponent.prototype.initOperationTableDataSource = function() {
            this.operationTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'opeCode',
                  translateKey: this.getTranslateKey('opeCode')
                },
                {
                  field: 'opeVersion',
                  translateKey: this.getTranslateKey('opeVersion')
                },
                {
                  field: 'rangeCode',
                  translateKey: this.getTranslateKey('rangeCode')
                },
                {
                  field: 'opeDesignation',
                  translateKey: this.getTranslateKey('opeDesignation')
                }
              ],
              data: []
            });
          };
          OperationSearchComponent.prototype.openOperation = function(object, openMode) {
            var labelKey = 'transaction.OperationSearchComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'OperationFormComponent',
              objectId: this.serializationService.serialize(object),
              openMode: openMode
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          OperationSearchComponent.prototype.openOperationLink = function(object) {
            this.openOperation(
              object,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read
            );
          };
          OperationSearchComponent.prototype.createNewOperation = function() {
            this.openOperation(
              undefined,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Create
            );
          };
          OperationSearchComponent.prototype.openSelectedOperations = function() {
            var _this = this;
            this.operationTableDataSource.dataSelection.forEach(function(selectedOperation) {
              if (selectedOperation) {
                if (selectedOperation.opeCode && selectedOperation.opeVersion && selectedOperation.rangeCode) {
                  var selectedOperationId = {
                    opeCode: selectedOperation.opeCode,
                    opeVersion: selectedOperation.opeVersion,
                    rangeCode: selectedOperation.rangeCode
                  };
                  _this.openOperation(
                    selectedOperationId,
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read
                  );
                } else {
                  _this.messageService.showWarningMessage(_this.getTranslateKey('errorOnMissingCustomerCode'));
                }
              }
            });
          };
          OperationSearchComponent.prototype.deleteSelectedOperations = function() {
            var _this = this;
            var partialMessageKey =
              this.operationTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedOperations'
                : 'confirmDeleteSelectedOperation';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.operationTableDataSource.dataSelection.forEach(function(operation) {
                  if (operation && operation.opeCode && operation.opeVersion && operation.rangeCode) {
                    var operationId = {
                      opeCode: operation.opeCode,
                      rangeCode: operation.rangeCode,
                      opeVersion: operation.opeVersion
                    };
                    _this.operationSearchService.removeBireOperation(operationId).subscribe(function() {
                      _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteOperation'));
                      _this.search();
                    });
                  }
                });
              }
            });
          };
          OperationSearchComponent.prototype.resetResultsTable = function(table) {
            table.reset();
            table.filters = {};
          };
          OperationSearchComponent.prototype.saveSearchCriteria = function() {
            this.searchObject = this.newOperationForm;
          };
          OperationSearchComponent.prototype.resetSearchCriteria = function() {
            this.searchObject = {};
          };
          OperationSearchComponent.prototype.search = function() {
            var _this = this;
            this.isLoading = true;
            this.operationTableDataSource.setData([]);
            this.operationSearchService.findBireOperationsBySearchCriteria(this.searchObject).subscribe(
              function(result) {
                _this.isLoading = false;
                _this.setResultsTable(result);
              },
              function() {
                _this.isLoading = false;
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetResults'));
              }
            );
          };
          OperationSearchComponent.prototype.setResultsTable = function(resultsTable) {
            var _this = this;
            if (resultsTable) {
              this.operationTableDataSource.setData(resultsTable.list);
              this.operationTableDataSource.dataSrc.forEach(function(result) {
                var exportElement = {
                  opeCode: result.opeCode,
                  opeVersion: result.opeVersion,
                  rangeCode: result.rangeCode,
                  opeDesignation: result.opeDesignation
                };
                _this.exportList.push(exportElement);
              });
            }
            this.operationTableDataSource.dataSelection = [];
          };
          OperationSearchComponent.prototype.exportTable = function() {
            if (!!this.operationTableDataSource && !!this.componentData) {
              this.exportService.toExcel(this.exportList, this.resultsTableExportName, this.componentData.componentId);
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'exportTable', 'this.resultsTable');
            }
          };
          OperationSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-operation-search',
                template: __webpack_require__(
                  /*! ./operation-search.component.html */ './src/app/main/engineering-management/operation/search/operation-search.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__['TabService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__['ConfirmationService'],
                _shared_services_export_service__WEBPACK_IMPORTED_MODULE_5__['ExportService'],
                _operation_search_service__WEBPACK_IMPORTED_MODULE_12__['OperationSearchService']
              ])
            ],
            OperationSearchComponent
          );
          return OperationSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_11__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/operation/search/operation-search.service.ts':
      /*!******************************************************************************************!*\
  !*** ./src/app/main/engineering-management/operation/search/operation-search.service.ts ***!
  \******************************************************************************************/
      /*! exports provided: OperationSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'OperationSearchService', function() {
          return OperationSearchService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/task-management.api */ './src/app/shared/api/task-management.api.ts'
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

        var OperationSearchService = /** @class */ (function(_super) {
          __extends(OperationSearchService, _super);
          function OperationSearchService(http, appConfigService, taskManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.taskManagementApi = taskManagementApi;
            return _this;
          }
          OperationSearchService.prototype.findBireOperationsBySearchCriteria = function(criteria) {
            return _super.prototype.post.call(
              this,
              this.taskManagementApi.findBireOperationsBySearchCriteria,
              criteria
            );
          };
          OperationSearchService.prototype.removeBireOperation = function(p) {
            return _super.prototype.post.call(this, this.taskManagementApi.removeBireOperation, p);
          };
          OperationSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_2__['TaskManagementApi']
              ])
            ],
            OperationSearchService
          );
          return OperationSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/overlay/overlay.service.ts':
      /*!*************************************************!*\
  !*** ./src/app/main/overlay/overlay.service.ts ***!
  \*************************************************/
      /*! exports provided: OverlayService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'OverlayService', function() {
          return OverlayService;
        });
        /* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/cdk/overlay */ './node_modules/@angular/cdk/esm5/overlay.es5.js'
        );
        /* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/cdk/portal */ './node_modules/@angular/cdk/esm5/portal.es5.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _overlay_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./overlay-ref */ './src/app/main/overlay/overlay-ref.ts'
        );
        /* harmony import */ var _overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./overlay.component */ './src/app/main/overlay/overlay.component.ts'
        );
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

        var OverlayService = /** @class */ (function() {
          function OverlayService(_injector, _overlay) {
            this._injector = _injector;
            this._overlay = _overlay;
          }
          // //////////////////////////////////////////////////////////////////////////
          OverlayService.prototype.openWithPositionAbsolute = function(params) {
            return this.open(params, this.getConfig(params, this.getPositionAbsolute(params)));
          };
          OverlayService.prototype.openWithPositionCenter = function(params) {
            return this.open(
              params,
              this.getConfig(
                __assign({}, params, {
                  hasVisibleBackdrop: params.hasVisibleBackdrop !== undefined ? params.hasVisibleBackdrop : true
                }),
                this.getPositionCenter()
              )
            );
          };
          OverlayService.prototype.openWithPositionRelative = function(params) {
            return this.open(params, this.getConfig(params, this.getPositionRelative(params)));
          };
          // //////////////////////////////////////////////////////////////////////////
          OverlayService.prototype.createInjector = function(overlayRef, injector) {
            var tokens = new WeakMap([[_overlay_ref__WEBPACK_IMPORTED_MODULE_3__['OverlayRef'], overlayRef]]);
            return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__['PortalInjector'](injector, tokens);
          };
          OverlayService.prototype.getConfig = function(params, positionStrategy) {
            var hasBackdrop = params.hasBackdrop !== undefined ? params.hasBackdrop : true;
            return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__['OverlayConfig']({
              hasBackdrop: hasBackdrop,
              positionStrategy: positionStrategy,
              backdropClass: hasBackdrop && params.hasVisibleBackdrop ? 'cdk-overlay-dark-backdrop' : '',
              height: params.height,
              scrollStrategy: this._overlay.scrollStrategies.reposition(),
              width: params.width
            });
          };
          OverlayService.prototype.getPositionAbsolute = function(params) {
            var positionStrategy = this._overlay
              .position()
              .global()
              .bottom(params.positions.bottom)
              .left(params.positions.left)
              .right(params.positions.right)
              .top(params.positions.top);
            return positionStrategy;
          };
          OverlayService.prototype.getPositionCenter = function() {
            var positionStrategy = this._overlay
              .position()
              .global()
              .centerHorizontally()
              .centerVertically();
            return positionStrategy;
          };
          OverlayService.prototype.getPositionRelative = function(params) {
            var positionStrategy = this._overlay
              .position()
              .flexibleConnectedTo(params.origin)
              .withPositions(params.positions || [])
              .withFlexibleDimensions(false)
              .withPush(false);
            return positionStrategy;
          };
          OverlayService.prototype.open = function(params, overlayConfig) {
            var cdkOverlayRef = this._overlay.create(overlayConfig);
            var overlayRef = new _overlay_ref__WEBPACK_IMPORTED_MODULE_3__['OverlayRef'](
              cdkOverlayRef,
              params.content,
              params.data
            );
            var injector = this.createInjector(overlayRef, this._injector);
            cdkOverlayRef.attach(
              new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__['ComponentPortal'](
                _overlay_component__WEBPACK_IMPORTED_MODULE_4__['OverlayComponent'],
                undefined,
                injector
              )
            );
            return overlayRef;
          };
          OverlayService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__['Injectable'])({
                providedIn: 'root'
              }),
              __metadata('design:paramtypes', [
                _angular_core__WEBPACK_IMPORTED_MODULE_2__['Injector'],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__['Overlay']
              ])
            ],
            OverlayService
          );
          return OverlayService;
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
      },

    /***/ './src/app/shared/utils/settings-utils.ts':
      /*!************************************************!*\
  !*** ./src/app/shared/utils/settings-utils.ts ***!
  \************************************************/
      /*! exports provided: SettingsUtils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'SettingsUtils', function() {
          return SettingsUtils;
        });
        /* harmony import */ var _string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./string-utils */ './src/app/shared/utils/string-utils.ts'
        );

        var SettingsUtils = /** @class */ (function() {
          function SettingsUtils() {}
          SettingsUtils.isPropertyEnabled = function(settings, propertyInput) {
            var selectedProperty = settings.find(function(property) {
              return property.value === propertyInput;
            });
            return (
              !!selectedProperty &&
              !_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isNullOrEmpty(selectedProperty.label) &&
              (selectedProperty.label.trim().toUpperCase() === 'X' ||
                selectedProperty.label === '1' ||
                selectedProperty.label.trim().toUpperCase() === 'TRUE')
            );
          };
          return SettingsUtils;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=engineering-management-operation-operation-module.js.map
