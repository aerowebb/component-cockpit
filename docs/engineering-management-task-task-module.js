(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['engineering-management-task-task-module'],
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

    /***/ './src/app/main/engineering-management/task/form/dialog-associated-tasks-popup/dialog-associated-tasks-popup.component.html':
      /*!**********************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-associated-tasks-popup/dialog-associated-tasks-popup.component.html ***!
  \**********************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div\r\n          class="form-group"\r\n          [ngClass]="{\r\n            required: !isReadOnlyForm,\r\n            disabled: isReadOnlyForm || associatedTasks.bireTaskDTO.taskCode !== undefined\r\n          }"\r\n        >\r\n          <label class="form-label">{{ getComponentName() + ".taskCode" | translate }}</label>\r\n\r\n          <div\r\n            class="form-control form-control-with-modal"\r\n            [ngClass]="{ disabled: isReadOnlyForm || associatedTasks.bireTaskDTO.taskCode !== undefined }"\r\n          >\r\n            <div\r\n              class="form-control-data"\r\n              (click)="associatedTasks.bireTaskDTO.taskCode === undefined && openTaskTableDialog()"\r\n            >\r\n              {{ associatedTasks.bireTaskDTO.taskCode }}\r\n            </div>\r\n\r\n            <div *ngIf="!!associatedTasks.bireTaskDTO.taskCode" class="btn-clear-wrapper">\r\n              <i\r\n                class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                aria-hidden="true"\r\n                (click)="\r\n                  associatedTasks.bireTaskDTO.taskCode = undefined;\r\n                  associatedTasks.bireTaskDTO.taskVersion = undefined;\r\n                  associatedTasks.bireTaskDTO.taskDesignation = undefined;\r\n                  associatedTasks.bireTaskDTO.groupCode = undefined;\r\n                  associatedTasks.bireTaskDTO.taskTypeCode = undefined\r\n                "\r\n              ></i>\r\n            </div>\r\n            <div class="btn-search-wrapper">\r\n              <i\r\n                class="fa fa-fw fa-search aw-icon btn-search"\r\n                aria-hidden="true"\r\n                (click)="associatedTasks.bireTaskDTO.taskCode === undefined && openTaskTableDialog()"\r\n              ></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="associatedTasks.bireTaskDTO.taskVersion" class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ getComponentName() + ".taskVersion" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input\r\n              type="text"\r\n              class="aw-input"\r\n              [(ngModel)]="associatedTasks.bireTaskDTO.taskVersion"\r\n              [disabled]="true"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="associatedTasks.bireTaskDTO.taskDesignation" class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".taskDesignation" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input\r\n              type="text"\r\n              class="aw-input"\r\n              [(ngModel)]="associatedTasks.bireTaskDTO.taskDesignation"\r\n              [disabled]="true"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="associatedTasks.bireTaskDTO.groupCode" class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".groupCode" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [options]="taskGroups"\r\n              [(ngModel)]="associatedTasks.bireTaskDTO.groupCode"\r\n              [disabled]="true"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="associatedTasks.bireTaskDTO.taskTypeCode" class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".taskTypeCode" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [options]="taskTypes"\r\n              [(ngModel)]="associatedTasks.bireTaskDTO.taskTypeCode"\r\n              [disabled]="true"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="isDisplayLinkType" class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ getComponentName() + ".linkType" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [options]="linkTypes"\r\n              [(ngModel)]="associatedTasks.linkType"\r\n              [disabled]="isReadOnlyForm"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".sequenceNo" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input\r\n              type="text"\r\n              class="aw-input"\r\n              [(ngModel)]="associatedTasks.sequenceNumber"\r\n              [disabled]="isReadOnlyForm"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOnlyForm"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="associate()"\r\n      color="primary"\r\n      [disabled]="!isValidAssociation()"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-task\r\n  *ngIf="showTaskTableDialog"\r\n  [(display)]="showTaskTableDialog"\r\n  (onSelected)="onSelectedTask($event)"\r\n></aw-dialog-search-task>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-associated-tasks-popup/dialog-associated-tasks-popup.component.ts':
      /*!********************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-associated-tasks-popup/dialog-associated-tasks-popup.component.ts ***!
  \********************************************************************************************************************************/
      /*! exports provided: DialogAssociatedTasksPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogAssociatedTasksPopupComponent',
          function() {
            return DialogAssociatedTasksPopupComponent;
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
        /* harmony import */ var _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/enums/table-column-filter-mode.enum */ './src/app/shared/enums/table-column-filter-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/enums/table-selection-mode.enum */ './src/app/shared/enums/table-selection-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _task_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../task-form.service */ './src/app/main/engineering-management/task/form/task-form.service.ts'
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

        var DialogAssociatedTasksPopupComponent = /** @class */ (function(_super) {
          __extends(DialogAssociatedTasksPopupComponent, _super);
          function DialogAssociatedTasksPopupComponent(taskFormService, propertiesService, messageService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'DialogAssociatedTasksPopupComponent'
              ) || this;
            _this.taskFormService = taskFormService;
            _this.propertiesService = propertiesService;
            _this.messageService = messageService;
            _this.onAssociated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.showTaskTableDialog = false;
            _this.taskGroups = [];
            _this.resultsTable = [];
            _this.selectedLinkType = undefined;
            _this.loadTaskGroups();
            _this.loadTaskTypes();
            _this.showNewTask = false;
            _this.keyMap = new Map();
            _this.keyMap.set(
              'taskApplicabilityCode',
              _this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .TASK_APPLICABILITY_CODE_MAP
              )
            );
            _this.keyMap.set(
              'taskTypeCode',
              _this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .TASK_TYPE_MAP
              )
            );
            _this.keyMap.set(
              'taskStatus',
              _this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .FUNC_OBJECT_STATUS_MAP
              )
            );
            return _this;
          }
          DialogAssociatedTasksPopupComponent.prototype.ngOnInit = function() {
            if (!this.associatedTasks) {
              this.associatedTasks = {
                bireTaskDTO: {
                  taskCode: undefined,
                  taskVersion: undefined
                },
                linkType: undefined,
                sequenceNumber: undefined
              };
            }
          };
          DialogAssociatedTasksPopupComponent.prototype.createNewTask = function() {
            this.showNewTask = true;
          };
          DialogAssociatedTasksPopupComponent.prototype.onNewTaskHide = function() {
            this.showNewTask = false;
          };
          DialogAssociatedTasksPopupComponent.prototype.cancel = function() {
            this.display = false;
          };
          DialogAssociatedTasksPopupComponent.prototype.openTaskTableDialog = function() {
            this.showTaskTableDialog = true;
            this.initTaskTableData();
          };
          DialogAssociatedTasksPopupComponent.prototype.associate = function() {
            if (!!this.linkTypes && !!this.associatedTasks && !!this.associatedTasks.bireTaskDTO) {
              var outputParam = {
                task: this.associatedTasks.bireTaskDTO,
                taskTask: {
                  taskCode: this.associatedTasks.bireTaskDTO.taskCode,
                  taskVersion: this.associatedTasks.bireTaskDTO.taskVersion,
                  sequenceNumber: this.associatedTasks.sequenceNumber,
                  taskLinkCode: this.isDisplayLinkType ? this.associatedTasks.linkType : this.linkTypes[0].value,
                  groupCode: this.associatedTasks.bireTaskDTO.groupCode
                }
              };
              this.onAssociated.emit(outputParam);
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'associate', 'this.linkTypes');
            }
            this.display = false;
          };
          DialogAssociatedTasksPopupComponent.prototype.initTaskTableData = function() {
            var taskTableCols = [
              {
                field: 'taskCode',
                alignment: 'center',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'taskVersion',
                alignment: 'center',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'taskDesignation',
                alignment: 'center',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'taskChapter',
                alignment: 'center',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'taskSection',
                alignment: 'center',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'taskSubject',
                alignment: 'center',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'taskTask',
                alignment: 'center',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'taskSubTask',
                alignment: 'center',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'taskStatus',
                alignment: 'center',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'taskApplicabilityDate',
                alignment: 'center',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input,
                isDate: true
              },
              {
                field: 'taskApplicabilityCode',
                alignment: 'center',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'repairCenterCode',
                alignment: 'center',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'groupCode',
                alignment: 'center',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'taskTypeCode',
                alignment: 'center',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'overhaul',
                alignment: 'center',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              }
            ];
            this.taskTableData = {
              componentId: 'DialogTask',
              tableCols: taskTableCols,
              tableRows: this.taskFormService.findBireTasksByCriteria(),
              dataKey: undefined,
              selectionMode:
                _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableSelectionMode'].Single,
              globalFilter: true
            };
          };
          DialogAssociatedTasksPopupComponent.prototype.loadTaskGroups = function() {
            var _this = this;
            this.taskFormService.getTaskGroups().subscribe(
              function(results) {
                _this.taskGroups =
                  results.filter(function(taskGroup) {
                    return taskGroup.value != undefined;
                  }) || [];
              },
              function() {
                _this.messageService.showErrorMessage(_this.getComponentName() + 'errorOnGetTaskGroups');
              }
            );
          };
          DialogAssociatedTasksPopupComponent.prototype.loadTaskTypes = function() {
            var _this = this;
            this.propertiesService.getValue('getTaskTypeMap').subscribe(
              function(results) {
                _this.taskTypes = results || [];
              },
              function() {
                _this.messageService.showErrorMessage(_this.getComponentName() + '.errorOnGetTaskTypes');
              }
            );
          };
          DialogAssociatedTasksPopupComponent.prototype.isValidAssociation = function() {
            if (!this.isDisplayLinkType) {
              if (
                !!this.associatedTasks &&
                !!this.associatedTasks.bireTaskDTO &&
                this.associatedTasks.bireTaskDTO.taskCode &&
                this.associatedTasks.bireTaskDTO.taskVersion
              ) {
                return true;
              }
            } else if (
              !!this.associatedTasks &&
              !!this.associatedTasks.bireTaskDTO &&
              this.associatedTasks.bireTaskDTO.taskCode &&
              this.associatedTasks.bireTaskDTO.taskVersion &&
              this.associatedTasks.linkType
            ) {
              return true;
            }
            return false;
          };
          /**************************************************************************
           * Task Dialog
           *************************************************************************/
          DialogAssociatedTasksPopupComponent.prototype.onSelectedTask = function(task) {
            if (!!this.associatedTasks && !!this.associatedTasks.bireTaskDTO && task) {
              if (task.groupCode) {
                var taskGroup = this.taskGroups.filter(function(group) {
                  return group.label === task.groupCode;
                });
                if (taskGroup[0]) {
                  task.groupCode = taskGroup[0].value;
                }
              }
              if (task.taskTypeCode) {
                var taskType = this.taskTypes.filter(function(type) {
                  return type.label === task.taskTypeCode;
                });
                if (taskType[0]) {
                  task.taskTypeCode = taskType[0].value;
                }
              }
              this.associatedTasks.bireTaskDTO.taskCode = task.taskCode;
              this.associatedTasks.bireTaskDTO.taskVersion = task.taskVersion;
              this.associatedTasks.bireTaskDTO.taskDesignation = task.taskDesignation;
              this.associatedTasks.bireTaskDTO.groupCode = task.groupCode;
              this.associatedTasks.bireTaskDTO.taskTypeCode = task.taskTypeCode;
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'onSelectedTask', 'this.associatedTasks');
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogAssociatedTasksPopupComponent.prototype,
            'associatedTasks',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogAssociatedTasksPopupComponent.prototype,
            'linkTypes',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogAssociatedTasksPopupComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogAssociatedTasksPopupComponent.prototype,
            'onAssociated',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogAssociatedTasksPopupComponent.prototype,
            'isDisplayLinkType',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogAssociatedTasksPopupComponent.prototype,
            'isNewForm',
            void 0
          );
          DialogAssociatedTasksPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-associated-tasks-popup',
                template: __webpack_require__(
                  /*! ./dialog-associated-tasks-popup.component.html */ './src/app/main/engineering-management/task/form/dialog-associated-tasks-popup/dialog-associated-tasks-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _task_form_service__WEBPACK_IMPORTED_MODULE_8__['TaskFormService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__['PropertiesService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService']
              ])
            ],
            DialogAssociatedTasksPopupComponent
          );
          return DialogAssociatedTasksPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-evolutions-popup/dialog-evolutions-popup.component.html':
      /*!**********************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-evolutions-popup/dialog-evolutions-popup.component.html ***!
  \**********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ getComponentName() + ".evolutionNumber" | translate }} </label>\r\n\r\n          <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOnlyForm }">\r\n            <div class="form-control-data" (click)="openEvolutionDialog()">{{ evolution.evolutionNumber }}</div>\r\n\r\n            <div *ngIf="evolution.evolutionNumber" class="btn-clear-wrapper">\r\n              <i\r\n                class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                aria-hidden="true"\r\n                (click)="evolution.evolutionNumber = undefined; evolution.evolutionRevisionNumber = undefined"\r\n              ></i>\r\n            </div>\r\n            <div class="btn-search-wrapper">\r\n              <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="openEvolutionDialog()"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div\r\n        *ngIf="evolution.evolutionRevisionNumber !== undefined && evolution.evolutionRevisionNumber !== null"\r\n        class="row"\r\n      >\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ getComponentName() + ".evolutionRevisionNumber" | translate }} </label>\r\n\r\n          <div class="form-control">\r\n            <input type="text" class="aw-input" [(ngModel)]="evolution.evolutionRevisionNumber" [disabled]="true" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ getComponentName() + ".taskEvolutionTypeCode" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [options]="linkTypes"\r\n              [(ngModel)]="evolution.taskEvolutionTypeCode"\r\n              [disabled]="isReadOnlyForm"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOnlyForm" mat-raised-button (click)="closeDialog()">{{ "global.close" | translate }}</button>\r\n\r\n    <button *ngIf="!isReadOnlyForm" mat-raised-button (click)="closeDialog()">{{ "global.cancel" | translate }}</button>\r\n\r\n    <button *ngIf="!isReadOnlyForm" color="primary" mat-raised-button [disabled]="!isValidEvolution()" (click)="add()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-evolution-popup\r\n  *ngIf="showEvolutionTableDialog"\r\n  [evolutionNumber]="evolution.evolutionNumber"\r\n  [evolutionRevisionNumber]="evolution.evolutionRevisionNumber"\r\n  [(display)]="showEvolutionTableDialog"\r\n  (onSelected)="onSelectedEvolution($event)"\r\n>\r\n</aw-dialog-search-evolution-popup>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-evolutions-popup/dialog-evolutions-popup.component.ts':
      /*!********************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-evolutions-popup/dialog-evolutions-popup.component.ts ***!
  \********************************************************************************************************************/
      /*! exports provided: DialogEvolutionsPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogEvolutionsPopupComponent',
          function() {
            return DialogEvolutionsPopupComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _task_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../task-form.service */ './src/app/main/engineering-management/task/form/task-form.service.ts'
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

        var DialogEvolutionsPopupComponent = /** @class */ (function(_super) {
          __extends(DialogEvolutionsPopupComponent, _super);
          function DialogEvolutionsPopupComponent(propertiesService, messageService, taskFormService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'DialogEvolutionsPopupComponent'
              ) || this;
            _this.propertiesService = propertiesService;
            _this.messageService = messageService;
            _this.taskFormService = taskFormService;
            _this.onAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.showEvolutionTableDialog = false;
            _this.linkTypes = [];
            _this.loadLinkTypes();
            return _this;
          }
          DialogEvolutionsPopupComponent.prototype.ngOnInit = function() {
            if (!this.evolution) {
              this.evolution = {};
            }
          };
          DialogEvolutionsPopupComponent.prototype.cancel = function() {
            this.display = false;
          };
          DialogEvolutionsPopupComponent.prototype.openEvolutionDialog = function() {
            this.showEvolutionTableDialog = true;
          };
          DialogEvolutionsPopupComponent.prototype.add = function() {
            if (!!this.evolution) {
              this.onAdded.emit(this.evolution);
              this.display = false;
            }
          };
          DialogEvolutionsPopupComponent.prototype.isValidEvolution = function() {
            if (
              !!this.evolution &&
              this.evolution.evolutionNumber &&
              this.evolution.evolutionRevisionNumber &&
              this.evolution.taskEvolutionTypeCode &&
              this.evolution.evolutionNumber.trim().length !== 0 &&
              this.evolution.evolutionRevisionNumber.trim().length !== 0 &&
              this.evolution.taskEvolutionTypeCode.trim().length !== 0
            ) {
              return true;
            } else {
              return false;
            }
          };
          DialogEvolutionsPopupComponent.prototype.loadLinkTypes = function() {
            var _this = this;
            this.propertiesService.getValue('getTaskEvolutionTypeMap').subscribe(
              function(results) {
                _this.linkTypes = results || [];
              },
              function() {
                _this.messageService.showErrorMessage(_this.getComponentName() + '.errorOnGetEvolutionLinkTypes');
              }
            );
          };
          /**************************************************************************
           * Evolution Dialog
           *************************************************************************/
          DialogEvolutionsPopupComponent.prototype.onSelectedEvolution = function(bireEvolutionDTO) {
            if (!!this.evolution && bireEvolutionDTO) {
              this.evolution.evolutionNumber = bireEvolutionDTO.evolutionNumber;
              this.evolution.evolutionRevisionNumber = bireEvolutionDTO.evolutionRevisionNumber;
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogEvolutionsPopupComponent.prototype,
            'evolution',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogEvolutionsPopupComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogEvolutionsPopupComponent.prototype,
            'onAdded',
            void 0
          );
          DialogEvolutionsPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-evolutions-popup',
                template: __webpack_require__(
                  /*! ./dialog-evolutions-popup.component.html */ './src/app/main/engineering-management/task/form/dialog-evolutions-popup/dialog-evolutions-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_3__['PropertiesService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__['MessageService'],
                _task_form_service__WEBPACK_IMPORTED_MODULE_5__['TaskFormService']
              ])
            ],
            DialogEvolutionsPopupComponent
          );
          return DialogEvolutionsPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-item-versions-popup/dialog-item-versions-popup.component.html':
      /*!****************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-item-versions-popup/dialog-item-versions-popup.component.html ***!
  \****************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n          <label class="form-label">{{ getComponentName() + ".itemGroup" | translate }}</label>\r\n\r\n          <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n            <div class="form-control-data" (click)="openItemTableDialog()">\r\n              {{ item.chapter }} <span *ngIf="item.section">- {{ item.section }}</span>\r\n              <span *ngIf="item.subject">- {{ item.subject }}</span> <span *ngIf="item.sheet">- {{ item.sheet }}</span>\r\n              <span *ngIf="item.marks">- {{ item.marks }}</span>\r\n            </div>\r\n\r\n            <div\r\n              *ngIf="item.chapter && item.section && item.subject && item.sheet && item.marks"\r\n              class="btn-clear-wrapper"\r\n            >\r\n              <i\r\n                class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                aria-hidden="true"\r\n                (click)="\r\n                  item.chapter = undefined;\r\n                  item.section = undefined;\r\n                  item.subject = undefined;\r\n                  item.sheet = undefined;\r\n                  item.marks = undefined;\r\n                  item.versionNumber = undefined\r\n                "\r\n              ></i>\r\n            </div>\r\n            <div class="btn-search-wrapper">\r\n              <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="openItemTableDialog()"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group required">\r\n          <label class="form-label">{{ getComponentName() + ".versionNumber" | translate }} </label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [options]="versions"\r\n              [(ngModel)]="item.versionNumber"\r\n              [disabled]="isReadOnlyForm || !item.chapter"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              (onClick)="checkFamilyVariantAndItem()"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group required">\r\n          <label class="form-label">{{ getComponentName() + ".taskItemTypeCode" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [options]="linkTypes"\r\n              [(ngModel)]="item.taskItemTypeCode"\r\n              [disabled]="isReadOnlyForm"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      color="primary"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="add()"\r\n      [disabled]="!isValidItem()"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-item\r\n  *ngIf="showItemTableDialog"\r\n  [(display)]="showItemTableDialog"\r\n  (onValidated)="onSelectedItem($event)"\r\n></aw-dialog-search-item>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-item-versions-popup/dialog-item-versions-popup.component.ts':
      /*!**************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-item-versions-popup/dialog-item-versions-popup.component.ts ***!
  \**************************************************************************************************************************/
      /*! exports provided: DialogItemVersionsPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogItemVersionsPopupComponent',
          function() {
            return DialogItemVersionsPopupComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _task_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../task-form.service */ './src/app/main/engineering-management/task/form/task-form.service.ts'
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

        var DialogItemVersionsPopupComponent = /** @class */ (function(_super) {
          __extends(DialogItemVersionsPopupComponent, _super);
          function DialogItemVersionsPopupComponent(messageService, propertiesService, taskFormService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'DialogItemVersionsPopupComponent'
              ) || this;
            _this.messageService = messageService;
            _this.propertiesService = propertiesService;
            _this.taskFormService = taskFormService;
            _this.onAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.versions = [];
            _this.linkTypes = [];
            _this.loadLinkTypes();
            return _this;
          }
          DialogItemVersionsPopupComponent.prototype.ngOnInit = function() {
            if (!this.item) {
              this.item = {};
            }
            this.init();
          };
          DialogItemVersionsPopupComponent.prototype.init = function() {
            if (!!this.item) {
              if (
                !!this.item &&
                !!this.item.familyCode &&
                !!this.item.variantCode &&
                !!this.item.structureType &&
                !!this.item.chapter &&
                !!this.item.section &&
                !!this.item.subject &&
                !!this.item.sheet &&
                !!this.item.marks
              ) {
                var versionInput = {
                  familyCode: this.item.familyCode,
                  variantCode: this.item.variantCode,
                  structureType: this.item.structureType,
                  chapter: this.item.chapter,
                  section: this.item.section,
                  subject: this.item.subject,
                  sheet: this.item.sheet,
                  marks: this.item.marks
                };
                this.loadVersions(versionInput);
              }
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'ngOnInit', 'this.item');
            }
          };
          DialogItemVersionsPopupComponent.prototype.cancel = function() {
            this.display = false;
          };
          DialogItemVersionsPopupComponent.prototype.isValidItem = function() {
            if (
              !!this.item &&
              this.item.familyCode &&
              this.item.chapter &&
              this.item.versionNumber &&
              this.item.taskItemTypeCode
            ) {
              return true;
            } else {
              return false;
            }
          };
          DialogItemVersionsPopupComponent.prototype.openItemTableDialog = function() {
            this.showItemTableDialog = true;
          };
          DialogItemVersionsPopupComponent.prototype.add = function() {
            if (!!this.item) {
              this.onAdded.emit(this.item);
              this.display = false;
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'add', 'this.item');
            }
          };
          DialogItemVersionsPopupComponent.prototype.checkFamilyVariantAndItem = function() {
            if (!!this.item && !this.item.chapter) {
              this.messageService.showErrorMessage(this.getComponentName() + '.selectFamilyVariantAndItem');
            }
          };
          DialogItemVersionsPopupComponent.prototype.loadVersions = function(bireItemDTOId) {
            var _this = this;
            this.taskFormService.findBireItemVersionsByItem(bireItemDTOId).subscribe(
              function(results) {
                _this.versions = results || [];
              },
              function() {
                _this.messageService.showErrorMessage(_this.getComponentName() + '.errorOnFindItemVersions');
              }
            );
          };
          DialogItemVersionsPopupComponent.prototype.loadLinkTypes = function() {
            var _this = this;
            this.propertiesService.getValue('getTaskItemTypeMap').subscribe(
              function(results) {
                _this.linkTypes = results || [];
              },
              function() {
                _this.messageService.showErrorMessage(_this.getComponentName() + '.errorOnGetEvolutionLinkTypes');
              }
            );
          };
          /**************************************************************************
           * Item Dialog
           *************************************************************************/
          DialogItemVersionsPopupComponent.prototype.onSelectedItem = function(item) {
            if (!!this.item && item) {
              this.item.familyCode = item.familyCode;
              this.item.variantCode = item.variantCode;
              this.item.structureType = item.structureType;
              this.item.chapter = item.chapter;
              this.item.section = item.section;
              this.item.subject = item.subject;
              this.item.sheet = item.sheet;
              this.item.marks = item.marks;
              if (
                !!item &&
                !!item.familyCode &&
                !!item.variantCode &&
                !!item.structureType &&
                !!item.chapter &&
                !!item.section &&
                !!item.subject &&
                !!item.sheet &&
                !!item.marks
              ) {
                this.inputBireItemDTOId = {
                  familyCode: item.familyCode,
                  variantCode: item.variantCode,
                  structureType: item.structureType,
                  chapter: item.chapter,
                  section: item.section,
                  subject: item.subject,
                  sheet: item.sheet,
                  marks: item.marks
                };
                this.loadVersions(this.inputBireItemDTOId);
              }
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'onSelectedItem', 'this.item');
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogItemVersionsPopupComponent.prototype,
            'item',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogItemVersionsPopupComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogItemVersionsPopupComponent.prototype,
            'onAdded',
            void 0
          );
          DialogItemVersionsPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-item-versions-popup',
                template: __webpack_require__(
                  /*! ./dialog-item-versions-popup.component.html */ './src/app/main/engineering-management/task/form/dialog-item-versions-popup/dialog-item-versions-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__['MessageService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_3__['PropertiesService'],
                _task_form_service__WEBPACK_IMPORTED_MODULE_5__['TaskFormService']
              ])
            ],
            DialogItemVersionsPopupComponent
          );
          return DialogItemVersionsPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-measure-formula-popup/dialog-measure-formula-popup.component.html':
      /*!********************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-measure-formula-popup/dialog-measure-formula-popup.component.html ***!
  \********************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="70">\r\n  <a-header>\r\n    <div class="modal-title">\r\n      {{ getComponentName() + ".measurePoint" | translate }} :\r\n\r\n      <span class="measure-code-result"> {{ selectedMeasurePointTitle }} ({{ selectedMeasurePoint }}) </span>\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n          <label class="form-label">{{ getComponentName() + ".measurePoint" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [(ngModel)]="document.measurePoint1"\r\n              [options]="measurePoints1"\r\n              placeholder="&nbsp;"\r\n              [showClear]="true"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".operator" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [(ngModel)]="document.operator"\r\n              [options]="operators"\r\n              placeholder="&nbsp;"\r\n              [showClear]="true"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group" [ngClass]="{ required: !isReadOpenMode && !!document.operator }">\r\n          <label class="form-label">{{ getComponentName() + ".measurePoint" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [(ngModel)]="document.measurePoint2"\r\n              [options]="measurePoints2"\r\n              placeholder="&nbsp;"\r\n              [showClear]="true"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="form-label">&nbsp;</label>\r\n          <div class="form-control">\r\n            <button type="button" mat-raised-button (click)="addOperator()" [disabled]="!isPageValid()">\r\n              {{ "global.add" | translate }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".formulaResult" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <textarea pInputTextarea [rows]="6" class="aw-textarea" [(ngModel)]="document.formula"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n  <a-footer>\r\n    <button mat-raised-button (click)="closeDialog()">{{ "global.cancel" | translate }}</button>\r\n    <button mat-raised-button color="primary" type="button" (click)="validate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-measure-formula-popup/dialog-measure-formula-popup.component.ts':
      /*!******************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-measure-formula-popup/dialog-measure-formula-popup.component.ts ***!
  \******************************************************************************************************************************/
      /*! exports provided: DialogMeasureFormulaPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogMeasureFormulaPopupComponent',
          function() {
            return DialogMeasureFormulaPopupComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

        var DialogMeasureFormulaPopupComponent = /** @class */ (function(_super) {
          __extends(DialogMeasureFormulaPopupComponent, _super);
          function DialogMeasureFormulaPopupComponent(sessionService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'DialogMeasureFormulaPopupComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.operators = [];
            _this.measurePoints1 = [];
            _this.measurePoints2 = [];
            _this.component = DialogMeasureFormulaPopupComponent_1;
            return _this;
          }
          DialogMeasureFormulaPopupComponent_1 = DialogMeasureFormulaPopupComponent;
          DialogMeasureFormulaPopupComponent.prototype.ngOnInit = function() {
            this.document = {};
            this.loadMeasurementPoints1();
            this.loadOperators();
            this.loadMeasurementPoints2();
            this.document.formula = this.selectedMeasurePointFormula;
          };
          DialogMeasureFormulaPopupComponent.prototype.loadMeasurementPoints1 = function() {
            var _this = this;
            if (this.measureList) {
              this.measurePoints1 = [];
              var measures = __spread(this.measureList);
              measures.forEach(function(obj) {
                if (
                  obj.counterCode &&
                  obj.unitCode &&
                  obj.unitCode !== _this.component.BOOLEAN &&
                  obj.unitCode !== _this.component.TEXT
                ) {
                  if (!!obj.counterRemarks) {
                    _this.measurePoints1.push({
                      label: obj.counterRemarks + ' (' + obj.counterCode + ')',
                      value: obj.counterCode
                    });
                  } else {
                    _this.measurePoints1.push({ label: '(' + obj.counterCode + ')', value: obj.counterCode });
                  }
                }
              });
            }
          };
          DialogMeasureFormulaPopupComponent.prototype.loadMeasurementPoints2 = function() {
            var _this = this;
            if (this.measureList) {
              this.measurePoints2 = [];
              var measures = __spread(this.measureList);
              measures.forEach(function(obj) {
                if (
                  obj.counterCode &&
                  obj.unitCode &&
                  obj.unitCode !== _this.component.BOOLEAN &&
                  obj.unitCode !== _this.component.TEXT
                ) {
                  if (!!obj.counterRemarks) {
                    _this.measurePoints2.push({
                      label: obj.counterRemarks + ' (' + obj.counterCode + ')',
                      value: obj.counterCode
                    });
                  } else {
                    _this.measurePoints2.push({ label: '(' + obj.counterCode + ')', value: obj.counterCode });
                  }
                }
              });
            }
          };
          DialogMeasureFormulaPopupComponent.prototype.loadOperators = function() {
            this.operators = [];
            this.operators.push({ label: '+', value: '+' });
            this.operators.push({ label: '-', value: '-' });
            this.operators.push({ label: '/', value: '/' });
            this.operators.push({ label: '*', value: '*' });
          };
          DialogMeasureFormulaPopupComponent.prototype.addOperator = function() {
            var formula = !!this.document.formula ? this.document.formula : '';
            if (!!this.document.measurePoint1) {
              formula = !!formula
                ? formula + ';[' + this.document.measurePoint1 + ']'
                : '[' + this.document.measurePoint1 + ']';
            }
            if (!!this.document.operator && !!this.document.measurePoint2) {
              formula = formula + ';(' + this.document.operator + ');[' + this.document.measurePoint2 + ']';
            }
            this.document.formula = formula;
          };
          DialogMeasureFormulaPopupComponent.prototype.cancel = function() {
            this.display = false;
          };
          DialogMeasureFormulaPopupComponent.prototype.validate = function() {
            this.onValidated.emit(this.document.formula);
            this.display = false;
          };
          DialogMeasureFormulaPopupComponent.prototype.isPageValid = function() {
            var isValidPage = true;
            if (!!this.document.operator) {
              isValidPage = !!this.document.measurePoint2;
            }
            if (!!this.document.measurePoint2) {
              isValidPage = !!this.document.operator;
            }
            return isValidPage && !!this.document.measurePoint1;
          };
          var DialogMeasureFormulaPopupComponent_1;
          DialogMeasureFormulaPopupComponent.BOOLEAN = 'BOOL';
          DialogMeasureFormulaPopupComponent.TEXT = 'TEXT';
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogMeasureFormulaPopupComponent.prototype,
            'measureList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogMeasureFormulaPopupComponent.prototype,
            'selectedMeasurePoint',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogMeasureFormulaPopupComponent.prototype,
            'selectedMeasurePointFormula',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogMeasureFormulaPopupComponent.prototype,
            'selectedMeasurePointTitle',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogMeasureFormulaPopupComponent.prototype,
            'onValidated',
            void 0
          );
          DialogMeasureFormulaPopupComponent = DialogMeasureFormulaPopupComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-measure-formula-popup',
                template: __webpack_require__(
                  /*! ./dialog-measure-formula-popup.component.html */ './src/app/main/engineering-management/task/form/dialog-measure-formula-popup/dialog-measure-formula-popup.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../task-form.component.scss */ './src/app/main/engineering-management/task/form/task-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__['SessionService']
              ])
            ],
            DialogMeasureFormulaPopupComponent
          );
          return DialogMeasureFormulaPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-measure-popup/dialog-measure-popup.component.html':
      /*!****************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-measure-popup/dialog-measure-popup.component.html ***!
  \****************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="50">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".measureTaskLink" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n          <label class="form-label">{{ getComponentName() + ".measurePoint" | translate }}</label>\r\n\r\n          <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode || isWriteOpenMode }">\r\n            <div class="form-control-data" (click)="showMeasurementPointDialog()">\r\n              {{ bireTaskMeasurementDTO.counterCode }}\r\n            </div>\r\n\r\n            <div *ngIf="bireTaskMeasurementDTO.counterCode" class="btn-clear-wrapper">\r\n              <i\r\n                class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                aria-hidden="true"\r\n                (click)="bireTaskMeasurementDTO.counterCode = undefined"\r\n              ></i>\r\n            </div>\r\n            <div class="btn-search-wrapper">\r\n              <i\r\n                class="fa fa-fw fa-search aw-icon btn-search"\r\n                aria-hidden="true"\r\n                (click)="showMeasurementPointDialog()"\r\n              ></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n          <label class="form-label">{{ getComponentName() + ".sequence" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input\r\n              #sequenceNumber="ngModel"\r\n              type="text"\r\n              class="aw-input"\r\n              [(ngModel)]="bireTaskMeasurementDTO.sequenceNumber"\r\n              [disabled]="isReadOpenMode"\r\n              [pKeyFilter]="inputValidationService.validatorOfNumber()"\r\n              [pValidateOnly]="true"\r\n            />\r\n            <p-message\r\n              *ngIf="sequenceNumber.invalid && (sequenceNumber.dirty || sequenceNumber.touched)"\r\n              severity="error"\r\n              [text]="inputValidationService.formatOfNumber()"\r\n            ></p-message>\r\n          </div>\r\n        </div>\r\n        <div class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".group" | translate }}</label>\r\n          <div class="form-control">\r\n            <input\r\n              type="text"\r\n              class="aw-input"\r\n              [(ngModel)]="bireTaskMeasurementDTO.groupCode"\r\n              [disabled]="\r\n                isReadOpenMode ||\r\n                (isWriteOpenMode &&\r\n                  hasRefMeasurementLinked &&\r\n                  !!bireTaskMeasurementDTO &&\r\n                  bireTaskMeasurementDTO.unitCode === component.BOOLEAN)\r\n              "\r\n              [ngClass]="{\r\n                \'background-grey\':\r\n                  !isCreateOpenMode &&\r\n                  hasRefMeasurementLinked &&\r\n                  !!bireTaskMeasurementDTO &&\r\n                  bireTaskMeasurementDTO.unitCode === component.BOOLEAN &&\r\n                  !!bireTaskMeasurementDTO.groupCode\r\n              }"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".description" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <textarea\r\n              pInputTextarea\r\n              [rows]="2"\r\n              class="aw-textarea"\r\n              [(ngModel)]="bireTaskMeasurementDTO.description"\r\n              [disabled]="isReadOpenMode"\r\n            ></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".additionalDescription" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <textarea\r\n              pInputTextarea\r\n              [rows]="2"\r\n              class="aw-textarea"\r\n              [(ngModel)]="bireTaskMeasurementDTO.additionalDescription"\r\n              [disabled]="isReadOpenMode"\r\n            ></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div\r\n        *ngIf="\r\n          !!bireTaskMeasurementDTO.unitCode &&\r\n          bireTaskMeasurementDTO.unitCode !== component.BOOLEAN &&\r\n          bireTaskMeasurementDTO.unitCode !== component.TEXT\r\n        "\r\n      >\r\n        <div class="row">\r\n          <div class="form-group">\r\n            <label class="form-label">{{ getComponentName() + ".minValue" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <input\r\n                #min="ngModel"\r\n                type="text"\r\n                class="aw-input"\r\n                [(ngModel)]="bireTaskMeasurementDTO.minValue"\r\n                [disabled]="isReadOpenMode"\r\n                [pKeyFilter]="inputValidationService.validatorOfNumber()"\r\n                [pValidateOnly]="true"\r\n              />\r\n              <p-message\r\n                *ngIf="min.invalid && (min.dirty || min.touched)"\r\n                severity="error"\r\n                [text]="inputValidationService.formatOfNumber()"\r\n              ></p-message>\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <label class="form-label">{{ getComponentName() + ".maxValue" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <input\r\n                #max="ngModel"\r\n                type="text"\r\n                class="aw-input"\r\n                [(ngModel)]="bireTaskMeasurementDTO.maxValue"\r\n                [disabled]="isReadOpenMode"\r\n                [pKeyFilter]="inputValidationService.validatorOfNumber()"\r\n                [pValidateOnly]="true"\r\n              />\r\n              <p-message\r\n                *ngIf="max.invalid && (max.dirty || max.touched)"\r\n                severity="error"\r\n                [text]="inputValidationService.formatOfNumber()"\r\n              ></p-message>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n  <a-footer>\r\n    <button *ngIf="isReadOpenMode" mat-raised-button (click)="closeDialog()">{{ "global.close" | translate }}</button>\r\n\r\n    <button *ngIf="!isReadOpenMode" mat-raised-button (click)="closeDialog()">{{ "global.cancel" | translate }}</button>\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      mat-raised-button\r\n      color="primary"\r\n      type="button"\r\n      (click)="validate()"\r\n      [disabled]="disableButton()"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n<aw-dialog-measure-search-popup\r\n  *ngIf="showAddMeasurementPointSearchDialog"\r\n  [(display)]="showAddMeasurementPointSearchDialog"\r\n  [data]="bireMeasurementRefDTO"\r\n  [openMode]="measureSearchDialogOpenMode"\r\n  (onMeasurementRowSelected)="onMeasurementRow($event)"\r\n>\r\n</aw-dialog-measure-search-popup>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-measure-popup/dialog-measure-popup.component.ts':
      /*!**************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-measure-popup/dialog-measure-popup.component.ts ***!
  \**************************************************************************************************************/
      /*! exports provided: DialogMeasurePopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogMeasurePopupComponent',
          function() {
            return DialogMeasurePopupComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/services/input-validation.service */ './src/app/shared/services/input-validation.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

        var DialogMeasurePopupComponent = /** @class */ (function(_super) {
          __extends(DialogMeasurePopupComponent, _super);
          function DialogMeasurePopupComponent(sessionService, inputValidationService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'DialogMeasurePopupComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.inputValidationService = inputValidationService;
            _this.onValidatedMeasurementPoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.component = DialogMeasurePopupComponent_1;
            return _this;
          }
          DialogMeasurePopupComponent_1 = DialogMeasurePopupComponent;
          Object.defineProperty(DialogMeasurePopupComponent.prototype, 'openMode', {
            set: function(mode) {
              if (!!mode) {
                this.measureSearchDialogOpenMode = mode;
              } else {
                this.measureSearchDialogOpenMode =
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Create;
              }
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(DialogMeasurePopupComponent.prototype, 'rowData', {
            set: function(data) {
              if (!!data) {
                this.bireTaskMeasurementDTO = data;
              } else {
                this.bireTaskMeasurementDTO = {};
              }
            },
            enumerable: true,
            configurable: true
          });
          DialogMeasurePopupComponent.prototype.ngOnInit = function() {
            this.updateOpenMode(this.measureSearchDialogOpenMode);
          };
          DialogMeasurePopupComponent.prototype.showMeasurementPointDialog = function() {
            if (this.isCreateOpenMode) {
              this.showAddMeasurementPointSearchDialog = true;
            } else {
              this.showAddMeasurementPointSearchDialog = false;
            }
          };
          DialogMeasurePopupComponent.prototype.cancel = function() {
            this.display = false;
          };
          DialogMeasurePopupComponent.prototype.validate = function() {
            if (!!this.bireTaskMeasurementDTO) {
              this.onValidatedMeasurementPoint.emit(this.bireTaskMeasurementDTO);
              this.display = false;
            }
          };
          DialogMeasurePopupComponent.prototype.onMeasurementRow = function(rowData) {
            if (!!rowData && !!this.bireTaskMeasurementDTO) {
              this.bireTaskMeasurementDTO.counterCode = rowData.counterCode;
              this.bireTaskMeasurementDTO.unitCode = rowData.unitCode;
              this.bireTaskMeasurementDTO.counterRemarks = rowData.counterRemarks;
            }
          };
          DialogMeasurePopupComponent.prototype.disableButton = function() {
            if (!!this.bireTaskMeasurementDTO.counterCode && !!this.bireTaskMeasurementDTO.sequenceNumber) {
              return false;
            }
            return true;
          };
          var DialogMeasurePopupComponent_1;
          DialogMeasurePopupComponent.BOOLEAN = 'BOOL';
          DialogMeasurePopupComponent.TEXT = 'TEXT';
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('openMode'),
              __metadata('design:type', Number),
              __metadata('design:paramtypes', [Number])
            ],
            DialogMeasurePopupComponent.prototype,
            'openMode',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('data'),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            DialogMeasurePopupComponent.prototype,
            'rowData',
            null
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogMeasurePopupComponent.prototype,
            'hasRefMeasurementLinked',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogMeasurePopupComponent.prototype,
            'onValidatedMeasurementPoint',
            void 0
          );
          DialogMeasurePopupComponent = DialogMeasurePopupComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-measure-popup',
                template: __webpack_require__(
                  /*! ./dialog-measure-popup.component.html */ './src/app/main/engineering-management/task/form/dialog-measure-popup/dialog-measure-popup.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../task-form.component.scss */ './src/app/main/engineering-management/task/form/task-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__['SessionService'],
                _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_2__['InputValidationService']
              ])
            ],
            DialogMeasurePopupComponent
          );
          return DialogMeasurePopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-measure-popup/dialog-measure-search-popup/dialog-measure-search-popup.component.html':
      /*!***************************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-measure-popup/dialog-measure-search-popup/dialog-measure-search-popup.component.html ***!
  \***************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="60">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".measureAdvancedSearch" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="search-dialog-container">\r\n      <div class="section search-criteria-section">\r\n        <h4 class="section-title">{{ "global.search" | translate }}</h4>\r\n\r\n        <div class="section-content">\r\n          <div class="column">\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <label class="form-label">{{ getComponentName() + ".unit" | translate }}</label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="unitCodeList"\r\n                    [(ngModel)]="bireMeasureRefDTO.unitCode"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n              <div class="form-group flex--2">\r\n                <label class="form-label">{{ getComponentName() + ".description" | translate }}</label>\r\n                <div class="form-control">\r\n                  <input type="text" class="aw-input" [(ngModel)]="bireMeasureRefDTO.counterRemarks" />\r\n                </div>\r\n              </div>\r\n              <div class="form-control"></div>\r\n            </div>\r\n\r\n            <div class="row search-criteria-footer">\r\n              <div class="search-actions">\r\n                <button mat-raised-button color="primary" type="button" (click)="search()">\r\n                  <span>{{ "global.toSearch" | translate }}</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section">\r\n        <h4 class="section-title">\r\n          {{ "global.results" | translate }} ({{\r\n            measurementPointTableDataSource ? measurementPointTableDataSource.dataCount : 0\r\n          }})\r\n        </h4>\r\n\r\n        <div class="section-content">\r\n          <a-table [dataSource]="measurementPointTableDataSource"> </a-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n  <a-footer>\r\n    <button mat-raised-button (click)="closeDialog()">{{ "global.cancel" | translate }}</button>\r\n    <button\r\n      color="primary"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="validate()"\r\n      [disabled]="!measurementPointTableDataSource.hasDataSelection"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-measure-popup/dialog-measure-search-popup/dialog-measure-search-popup.component.ts':
      /*!*************************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-measure-popup/dialog-measure-search-popup/dialog-measure-search-popup.component.ts ***!
  \*************************************************************************************************************************************************/
      /*! exports provided: DialogMeasureSearchPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogMeasureSearchPopupComponent',
          function() {
            return DialogMeasureSearchPopupComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../../shared/utils/array-utils */ './src/app/shared/utils/array-utils.ts'
        );
        /* harmony import */ var _task_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../task-form.service */ './src/app/main/engineering-management/task/form/task-form.service.ts'
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

        var DialogMeasureSearchPopupComponent = /** @class */ (function(_super) {
          __extends(DialogMeasureSearchPopupComponent, _super);
          function DialogMeasureSearchPopupComponent(sessionService, taskFormService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'DialogMeasureSearchPopupComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.taskFormService = taskFormService;
            _this.initMeasurementPointTableDataSource();
            _this.onMeasurementRowSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.unitCodeList = [];
            return _this;
          }
          Object.defineProperty(DialogMeasureSearchPopupComponent.prototype, 'setData', {
            set: function(data) {
              if (!!data) {
                this.bireMeasureRefDTO = data;
              } else {
                this.bireMeasureRefDTO = {};
              }
            },
            enumerable: true,
            configurable: true
          });
          DialogMeasureSearchPopupComponent.prototype.ngOnInit = function() {
            this.updateOpenMode(this.openMode);
            this.bindDropDownList();
          };
          DialogMeasureSearchPopupComponent.prototype.cancel = function() {
            this.display = false;
          };
          DialogMeasureSearchPopupComponent.prototype.validate = function() {
            if (
              this.measurementPointTableDataSource.hasDataSelection &&
              this.measurementPointTableDataSource.dataSelectionCount === 1
            ) {
              this.onMeasurementRowSelected.emit(this.measurementPointTableDataSource.dataSelection[0]);
              this.display = false;
            }
          };
          DialogMeasureSearchPopupComponent.prototype.bindDropDownList = function() {
            var _this = this;
            this.taskFormService.findAllBireUnitMeasures().subscribe(function(result) {
              if (!!result) {
                var labelValue_1 = [];
                result.forEach(function(res) {
                  labelValue_1.push({
                    label: res.label,
                    value: res.value
                  });
                });
                _this.unitCodeList = labelValue_1.sort(
                  _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_5__['ArrayUtils'].compareValues('label')
                );
              }
            });
          };
          DialogMeasureSearchPopupComponent.prototype.search = function() {
            var _this = this;
            this.measurementPointTableDataSource.setData([]);
            this.taskFormService
              .findBireMeasureReferencesBySearchCriteria(this.bireMeasureRefDTO)
              .subscribe(function(results) {
                if (results) {
                  _this.measurementPointTableDataSource.setData(results);
                }
              });
          };
          DialogMeasureSearchPopupComponent.prototype.initMeasurementPointTableDataSource = function() {
            this.measurementPointTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__[
              'TableDataSource'
            ]({
              allowMultiSelect: false,
              columns: [
                {
                  field: 'counterCode',
                  translateKey: this.getTranslateKey('counterCode'),
                  width: '15%'
                },
                {
                  field: 'unitCode',
                  translateKey: this.getTranslateKey('unit'),
                  width: '15%'
                },
                {
                  field: 'counterRemarks',
                  translateKey: this.getTranslateKey('description'),
                  width: '70%'
                }
              ],
              data: []
            });
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogMeasureSearchPopupComponent.prototype,
            'openMode',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('data'),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            DialogMeasureSearchPopupComponent.prototype,
            'setData',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogMeasureSearchPopupComponent.prototype,
            'onMeasurementRowSelected',
            void 0
          );
          DialogMeasureSearchPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-measure-search-popup',
                template: __webpack_require__(
                  /*! ./dialog-measure-search-popup.component.html */ './src/app/main/engineering-management/task/form/dialog-measure-popup/dialog-measure-search-popup/dialog-measure-search-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__['SessionService'],
                _task_form_service__WEBPACK_IMPORTED_MODULE_6__['TaskFormService']
              ])
            ],
            DialogMeasureSearchPopupComponent
          );
          return DialogMeasureSearchPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-measure-tool-popup/dialog-measure-tool-popup.component.html':
      /*!**************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-measure-tool-popup/dialog-measure-tool-popup.component.html ***!
  \**************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="60">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".searchPart" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="search-dialog-container">\r\n      <div class="section">\r\n        <h4 class="section-title">{{ "global.search" | translate }}</h4>\r\n\r\n        <div class="section-content">\r\n          <div class="column">\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".partType" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="pnTypeList"\r\n                    [(ngModel)]="selectedPnType"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".partNumber" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <input type="text" class="aw-input" [(ngModel)]="searchCriteria.pnCode" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".partDesignation" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <input type="text" class="aw-input" [(ngModel)]="searchCriteria.partDesignation" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="row search-criteria-footer">\r\n              <div class="search-actions">\r\n                <button type="button" color="primary" mat-raised-button (click)="search()">\r\n                  {{ "global.toSearch" | translate }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section">\r\n        <h4 class="section-title">\r\n          {{ "global.results" | translate }} ({{ partNumberTableDataSource ? partNumberTableDataSource.dataCount : 0 }})\r\n        </h4>\r\n\r\n        <div class="section-content">\r\n          <a-table [dataSource]="partNumberTableDataSource"> </a-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      {{ "global.cancel" | translate }}\r\n    </button>\r\n    <button mat-raised-button color="primary" type="button" (click)="validate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-measure-tool-popup/dialog-measure-tool-popup.component.ts':
      /*!************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-measure-tool-popup/dialog-measure-tool-popup.component.ts ***!
  \************************************************************************************************************************/
      /*! exports provided: DialogMeasureToolPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogMeasureToolPopupComponent',
          function() {
            return DialogMeasureToolPopupComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _task_form_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../task-form.service */ './src/app/main/engineering-management/task/form/task-form.service.ts'
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

        var DialogMeasureToolPopupComponent = /** @class */ (function(_super) {
          __extends(DialogMeasureToolPopupComponent, _super);
          function DialogMeasureToolPopupComponent(
            sessionService,
            propertiesService,
            translateService,
            taskFormService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Write,
                'DialogMeasureToolPopupComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.propertiesService = propertiesService;
            _this.translateService = translateService;
            _this.taskFormService = taskFormService;
            _this.initTableDataSource();
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.searchCriteria = {};
            _this.selectedPnType =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__[
                'AWPropertiesConstants'
              ].PN_TYPE_INGREDIENT_KEY;
            return _this;
          }
          DialogMeasureToolPopupComponent.prototype.ngOnInit = function() {
            this.init();
          };
          DialogMeasureToolPopupComponent.prototype.cancel = function() {
            this.display = false;
          };
          DialogMeasureToolPopupComponent.prototype.validate = function() {
            var selectedRow =
              this.partNumberTableDataSource.dataSelectionCount === 1
                ? this.partNumberTableDataSource.dataSelection[0]._obj
                : undefined;
            this.onValidated.emit(selectedRow);
            this.display = false;
          };
          DialogMeasureToolPopupComponent.prototype.search = function() {
            var _this = this;
            this.partNumberTableDataSource.setData([]);
            this.taskFormService
              .findPartNumbersAssociatedWithTaskOperations(this.searchCriteria)
              .subscribe(function(results) {
                if (!!results) {
                  _this.partNumberTableDataSource.setData(
                    results.map(function(row) {
                      return _this.createItemRow(row);
                    })
                  );
                }
              });
          };
          DialogMeasureToolPopupComponent.prototype.createItemRow = function(obj) {
            var birePnDTO = obj;
            var pnType;
            this.pnTypeMap.forEach(function(element) {
              if (birePnDTO.pnType && birePnDTO.pnType === element.value) {
                pnType = element.label;
              }
            });
            var itemRow = {
              partNumber: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_10__['StringUtils'].orEmpty(
                birePnDTO.pnCode
              ),
              partType: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_10__['StringUtils'].orEmpty(pnType),
              partDesignation: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_10__['StringUtils'].orEmpty(
                birePnDTO.articleDesignation
              ),
              _obj: obj
            };
            return itemRow;
          };
          DialogMeasureToolPopupComponent.prototype.init = function() {
            if (!!this.searchInput) {
              this.searchCriteria.taskCode = this.searchInput.taskCode;
              this.searchCriteria.taskVersion = this.searchInput.taskVersion;
            }
            this.handlePnType();
          };
          DialogMeasureToolPopupComponent.prototype.handlePnType = function() {
            var _this = this;
            this.selectedPnType = undefined;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__['GenericPropertyConstants']
                  .PN_TYPE_MAP
              )
              .subscribe(function(results) {
                _this.pnTypeMap = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_9__['ListUtils'].orEmpty(results);
                _this.pnTypeList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_9__['ListUtils']
                  .orEmpty(results)
                  .map(function(elt) {
                    if (
                      elt.value ===
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                        .PN_TYPE_INGREDIENT_KEY
                    ) {
                      elt.label = _this.translateService.instant(_this.getTranslateKey('ingredientTool'));
                    }
                    return {
                      label: elt.label,
                      value: elt.value
                    };
                  });
              });
          };
          DialogMeasureToolPopupComponent.prototype.initTableDataSource = function() {
            this.partNumberTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__[
              'TableDataSource'
            ]({
              allowMultiSelect: false,
              columns: [
                {
                  field: 'partType',
                  translateKey: this.getTranslateKey('partType'),
                  width: '25%'
                },
                {
                  field: 'partNumber',
                  translateKey: this.getTranslateKey('partNumber'),
                  width: '25%'
                },
                {
                  field: 'partDesignation',
                  translateKey: this.getTranslateKey('partDesignation'),
                  width: '50%'
                }
              ],
              data: []
            });
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogMeasureToolPopupComponent.prototype,
            'searchInput',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogMeasureToolPopupComponent.prototype,
            'onValidated',
            void 0
          );
          DialogMeasureToolPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-measure-tool-popup',
                template: __webpack_require__(
                  /*! ./dialog-measure-tool-popup.component.html */ './src/app/main/engineering-management/task/form/dialog-measure-tool-popup/dialog-measure-tool-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__['SessionService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__['PropertiesService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _task_form_service__WEBPACK_IMPORTED_MODULE_11__['TaskFormService']
              ])
            ],
            DialogMeasureToolPopupComponent
          );
          return DialogMeasureToolPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_8__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-operations-popup/dialog-operations-popup.component.html':
      /*!**********************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-operations-popup/dialog-operations-popup.component.html ***!
  \**********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm, disabled: isReadOnlyForm }">\r\n          <label class="form-label">{{ getComponentName() + ".opeCode" | translate }} </label>\r\n\r\n          <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOnlyForm }">\r\n            <div class="form-control-data" (click)="!isReadOnlyForm && openOperationTableDialog()">\r\n              {{ operation.opeCode }}\r\n            </div>\r\n\r\n            <div *ngIf="operation.opeCode" class="btn-clear-wrapper">\r\n              <i\r\n                class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                aria-hidden="true"\r\n                (click)="\r\n                  operation.opeCode = undefined; operation.opeVersion = undefined; operation.rangeCode = undefined\r\n                "\r\n              ></i>\r\n            </div>\r\n            <div class="btn-search-wrapper">\r\n              <i\r\n                class="fa fa-fw fa-search aw-icon btn-search"\r\n                aria-hidden="true"\r\n                (click)="!isReadOnlyForm && openOperationTableDialog()"\r\n              ></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="operation.opeVersion" class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ getComponentName() + ".opeVersion" | translate }} </label>\r\n\r\n          <div class="form-control">\r\n            <input type="text" class="aw-input" [(ngModel)]="operation.opeVersion" [disabled]="true" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="operation.rangeCode" class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ getComponentName() + ".rangeCode" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input type="text" class="aw-input" [(ngModel)]="operation.rangeCode" [disabled]="true" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOnlyForm"\r\n      color="primary"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="add()"\r\n      [disabled]="!isValidOperation()"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-table\r\n  *ngIf="showOperationTableDialog"\r\n  [data]="operationTableData"\r\n  [(display)]="showOperationTableDialog"\r\n  (onSelected)="onSelectedOperation($event)"\r\n></aw-dialog-table>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-operations-popup/dialog-operations-popup.component.ts':
      /*!********************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-operations-popup/dialog-operations-popup.component.ts ***!
  \********************************************************************************************************************/
      /*! exports provided: DialogOperationsPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogOperationsPopupComponent',
          function() {
            return DialogOperationsPopupComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/enums/table-column-filter-mode.enum */ './src/app/shared/enums/table-column-filter-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/enums/table-selection-mode.enum */ './src/app/shared/enums/table-selection-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _task_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../task-form.service */ './src/app/main/engineering-management/task/form/task-form.service.ts'
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

        var DialogOperationsPopupComponent = /** @class */ (function(_super) {
          __extends(DialogOperationsPopupComponent, _super);
          function DialogOperationsPopupComponent(taskFormService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'DialogOperationsPopupComponent'
              ) || this;
            _this.taskFormService = taskFormService;
            _this.onAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.showOperationTableDialog = false;
            _this.initOperationTableData();
            return _this;
          }
          DialogOperationsPopupComponent.prototype.ngOnInit = function() {
            if (!this.operation) {
              this.operation = {};
            }
          };
          DialogOperationsPopupComponent.prototype.cancel = function() {
            this.display = false;
          };
          DialogOperationsPopupComponent.prototype.openOperationTableDialog = function() {
            this.showOperationTableDialog = true;
          };
          DialogOperationsPopupComponent.prototype.add = function() {
            if (!!this.operation) {
              this.onAdded.emit(this.operation);
              this.display = false;
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'add', 'this.operation');
            }
          };
          DialogOperationsPopupComponent.prototype.initOperationTableData = function() {
            var operationTableCols = [
              {
                field: 'opeCode',
                alignment: 'left',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opeVersion',
                alignment: 'left',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'rangeCode',
                alignment: 'left',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opeDesignation',
                alignment: 'left',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__['TableColumnFilterMode']
                    .Input
              }
            ];
            this.operationTableData = {
              componentId: 'DialogOperation',
              tableCols: operationTableCols,
              tableRows: this.taskFormService.findBireOperationsBySearchCriteria({}),
              dataKey: undefined,
              selectionMode:
                _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableSelectionMode'].Single,
              globalFilter: true
            };
          };
          DialogOperationsPopupComponent.prototype.isValidOperation = function() {
            if (!!this.operation && this.operation.opeCode && this.operation.opeVersion && this.operation.rangeCode) {
              return true;
            } else {
              return false;
            }
          };
          /**************************************************************************
           * Operation Dialog
           *************************************************************************/
          DialogOperationsPopupComponent.prototype.onSelectedOperation = function(operation) {
            if (!!this.operation && operation) {
              this.operation.opeCode = operation.opeCode;
              this.operation.opeVersion = operation.opeVersion;
              this.operation.rangeCode = operation.rangeCode;
              this.operation.opeDesignation = operation.opeDesignation;
              this.operation.opeDurationTime = operation.opeDurationTime;
              this.operation.opeManHour = operation.opeManHour;
              this.operation.opeQualification = operation.opeQualification;
              this.operation.opeCost = operation.opeCost;
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'onSelectedOperation', 'this.operation');
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogOperationsPopupComponent.prototype,
            'operation',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogOperationsPopupComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogOperationsPopupComponent.prototype,
            'onAdded',
            void 0
          );
          DialogOperationsPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-operations-popup',
                template: __webpack_require__(
                  /*! ./dialog-operations-popup.component.html */ './src/app/main/engineering-management/task/form/dialog-operations-popup/dialog-operations-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [_task_form_service__WEBPACK_IMPORTED_MODULE_5__['TaskFormService']])
            ],
            DialogOperationsPopupComponent
          );
          return DialogOperationsPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-qualifications-popup/dialog-qualifications-popup.component.html':
      /*!******************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-qualifications-popup/dialog-qualifications-popup.component.html ***!
  \******************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group required">\r\n          <label class="form-label">{{ getComponentName() + ".qualificationCode" | translate }} </label>\r\n\r\n          <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOnlyForm }">\r\n            <div class="form-control-data" (click)="quickSearchQualification()">\r\n              {{ qualification.qualificationCode }}\r\n            </div>\r\n\r\n            <div *ngIf="qualification.qualificationCode" class="btn-clear-wrapper">\r\n              <i\r\n                class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                aria-hidden="true"\r\n                (click)="qualification.qualificationCode = undefined; qualification.qualificationName = undefined"\r\n              ></i>\r\n            </div>\r\n            <div class="btn-search-wrapper">\r\n              <i\r\n                class="fa fa-fw fa-search aw-icon btn-search"\r\n                aria-hidden="true"\r\n                (click)="quickSearchQualification()"\r\n              ></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="qualification.qualificationName" class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".qualificationName" | translate }} </label>\r\n\r\n          <div class="form-control">\r\n            <input type="text" class="aw-input" [(ngModel)]="qualification.qualificationName" [disabled]="true" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOnlyForm"\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="add()"\r\n      [disabled]="!qualification.qualificationCode"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-qualification\r\n  *ngIf="showQuickSearchQualificationPopup"\r\n  [(display)]="showQuickSearchQualificationPopup"\r\n  [qualification-code]="qualification.qualificationCode"\r\n  (onSelected)="setSelectedQualification($event)"\r\n></aw-dialog-search-qualification>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-qualifications-popup/dialog-qualifications-popup.component.ts':
      /*!****************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-qualifications-popup/dialog-qualifications-popup.component.ts ***!
  \****************************************************************************************************************************/
      /*! exports provided: DialogQualificationsPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogQualificationsPopupComponent',
          function() {
            return DialogQualificationsPopupComponent;
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

        var DialogQualificationsPopupComponent = /** @class */ (function(_super) {
          __extends(DialogQualificationsPopupComponent, _super);
          function DialogQualificationsPopupComponent() {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'DialogQualificationsPopupComponent'
              ) || this;
            _this.onAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.showQuickSearchQualificationPopup = false;
            return _this;
          }
          DialogQualificationsPopupComponent.prototype.ngOnInit = function() {
            if (!this.qualification) {
              this.qualification = {};
            }
          };
          DialogQualificationsPopupComponent.prototype.cancel = function() {
            this.display = false;
          };
          DialogQualificationsPopupComponent.prototype.add = function() {
            this.onAdded.emit(this.qualification);
            this.display = false;
          };
          DialogQualificationsPopupComponent.prototype.quickSearchQualification = function() {
            this.showQuickSearchQualificationPopup = true;
          };
          DialogQualificationsPopupComponent.prototype.setSelectedQualification = function(event) {
            this.qualification = event;
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogQualificationsPopupComponent.prototype,
            'qualification',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogQualificationsPopupComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogQualificationsPopupComponent.prototype,
            'onAdded',
            void 0
          );
          DialogQualificationsPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-qualifications-popup',
                template: __webpack_require__(
                  /*! ./dialog-qualifications-popup.component.html */ './src/app/main/engineering-management/task/form/dialog-qualifications-popup/dialog-qualifications-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [])
            ],
            DialogQualificationsPopupComponent
          );
          return DialogQualificationsPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-search-evolution-popup/dialog-search-evolution-popup.component.html':
      /*!**********************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-search-evolution-popup/dialog-search-evolution-popup.component.html ***!
  \**********************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="70">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="search-dialog-container">\r\n      <div class="section search-criteria-section">\r\n        <h4 class="section-title">{{ "global.search" | translate }}</h4>\r\n\r\n        <div class="section-content">\r\n          <div class="column">\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ getComponentName() + ".evolutionNumber" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <input class="aw-input" type="text" [(ngModel)]="searchCriteria.evolutionNumber" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ getComponentName() + ".evolutionRevisionNumber" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <input class="aw-input" type="text" [(ngModel)]="searchCriteria.evolutionRevisionNumber" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ getComponentName() + ".evolutionSummary" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <input class="aw-input" type="text" [(ngModel)]="searchCriteria.evolutionSummary" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="row search-criteria-footer">\r\n              <div class="search-actions">\r\n                <button type="button" mat-raised-button color="primary" (click)="search()">\r\n                  <span>{{ "global.toSearch" | translate }}</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section">\r\n        <h4 class="section-title">\r\n          {{ "global.results" | translate }} ({{ evolutionTableDataSource ? evolutionTableDataSource.dataCount : 0 }})\r\n        </h4>\r\n\r\n        <div class="section-content">\r\n          <a-table [dataSource]="evolutionTableDataSource"> </a-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="cancel()">\r\n      {{ "global.cancel" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [disabled]="!evolutionTableDataSource.dataSelection"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-search-evolution-popup/dialog-search-evolution-popup.component.ts':
      /*!********************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-search-evolution-popup/dialog-search-evolution-popup.component.ts ***!
  \********************************************************************************************************************************/
      /*! exports provided: DialogSearchEvolutionPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchEvolutionPopupComponent',
          function() {
            return DialogSearchEvolutionPopupComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _task_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../task-form.service */ './src/app/main/engineering-management/task/form/task-form.service.ts'
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

        var DialogSearchEvolutionPopupComponent = /** @class */ (function(_super) {
          __extends(DialogSearchEvolutionPopupComponent, _super);
          function DialogSearchEvolutionPopupComponent(taskFormService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'DialogSearchEvolutionPopupComponent'
              ) || this;
            _this.taskFormService = taskFormService;
            _this.init();
            _this.initEvolutionTableDataSource();
            return _this;
          }
          DialogSearchEvolutionPopupComponent.prototype.ngOnInit = function() {
            if (!!this.evolutionNumber) {
              this.searchCriteria.evolutionNumber = this.evolutionNumber;
            }
            if (!!this.evolutionRevisionNumber) {
              this.searchCriteria.evolutionRevisionNumber = this.evolutionRevisionNumber;
            }
          };
          DialogSearchEvolutionPopupComponent.prototype.cancel = function() {
            _super.prototype.closeDialog.call(this);
          };
          DialogSearchEvolutionPopupComponent.prototype.search = function() {
            var _this = this;
            this.clearTable();
            this.evolutionTableLoading = true;
            this.taskFormService.findBireEvolutionsByEvolutionCriteria(this.searchCriteria).subscribe(function(result) {
              _this.evolutionTableDataSource.addData(result.list);
              _this.evolutionTableLoading = false;
            });
          };
          DialogSearchEvolutionPopupComponent.prototype.validate = function() {
            this.onSelected.emit(this.evolutionTableDataSource.dataSelection[0]);
            _super.prototype.closeDialog.call(this);
          };
          DialogSearchEvolutionPopupComponent.prototype.clearTable = function() {
            this.evolutionTableLoading = false;
          };
          DialogSearchEvolutionPopupComponent.prototype.init = function() {
            this.searchCriteria = {};
            this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.clearTable();
          };
          DialogSearchEvolutionPopupComponent.prototype.initEvolutionTableDataSource = function() {
            this.evolutionTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__[
              'TableDataSource'
            ]({
              allowMultiSelect: false,
              columns: [
                {
                  field: 'evolutionNumber',
                  translateKey: this.getTranslateKey('evolutionNumber'),
                  width: '12.5%'
                },
                {
                  field: 'evolutionRevisionNumber',
                  translateKey: this.getTranslateKey('evolutionRevisionNumber'),
                  width: '12.5%'
                },
                {
                  field: 'statusState',
                  translateKey: this.getTranslateKey('statusState'),
                  width: '15%'
                },
                {
                  field: 'evolutionSummary',
                  translateKey: this.getTranslateKey('evolutionSummary'),
                  width: '70%'
                }
              ],
              data: []
            });
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogSearchEvolutionPopupComponent.prototype,
            'evolutionNumber',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogSearchEvolutionPopupComponent.prototype,
            'evolutionRevisionNumber',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogSearchEvolutionPopupComponent.prototype,
            'onSelected',
            void 0
          );
          DialogSearchEvolutionPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-search-evolution-popup',
                template: __webpack_require__(
                  /*! ./dialog-search-evolution-popup.component.html */ './src/app/main/engineering-management/task/form/dialog-search-evolution-popup/dialog-search-evolution-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [_task_form_service__WEBPACK_IMPORTED_MODULE_4__['TaskFormService']])
            ],
            DialogSearchEvolutionPopupComponent
          );
          return DialogSearchEvolutionPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-tils-popup/dialog-tils-popup.component.html':
      /*!**********************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-tils-popup/dialog-tils-popup.component.html ***!
  \**********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="25">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ getComponentName() + ".technicalLevel" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [options]="technicalLevels"\r\n              [(ngModel)]="til.technicalLevel"\r\n              [disabled]="isReadOnlyForm"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              appendTo="body"\r\n              (onChange)="onTilSelected($event)"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="til.tilDescription" class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ getComponentName() + ".tilDescription" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input type="text" class="aw-input" [(ngModel)]="til.tilDescription" [disabled]="true" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOnlyForm"\r\n      color="primary"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="add()"\r\n      [disabled]="!til.tilName"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/dialog-tils-popup/dialog-tils-popup.component.ts':
      /*!********************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/dialog-tils-popup/dialog-tils-popup.component.ts ***!
  \********************************************************************************************************/
      /*! exports provided: DialogTilsPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogTilsPopupComponent',
          function() {
            return DialogTilsPopupComponent;
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
        /* harmony import */ var _task_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../task-form.service */ './src/app/main/engineering-management/task/form/task-form.service.ts'
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

        var DialogTilsPopupComponent = /** @class */ (function(_super) {
          __extends(DialogTilsPopupComponent, _super);
          function DialogTilsPopupComponent(taskFormService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'DialogTilsPopupComponent'
              ) || this;
            _this.taskFormService = taskFormService;
            _this.onAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.descriptions = [];
            _this.technicalLevels = [];
            _this.tilNames = [];
            _this.til = {};
            _this.loadTechnicalLevels();
            return _this;
          }
          DialogTilsPopupComponent.prototype.ngOnInit = function() {
            if (this.tilInput === null) {
              this.tilInput = {};
            }
            if (!this.til) {
              this.til = {};
            }
          };
          DialogTilsPopupComponent.prototype.cancel = function() {
            this.display = false;
          };
          DialogTilsPopupComponent.prototype.add = function() {
            this.onAdded.emit(this.til);
            this.display = false;
          };
          DialogTilsPopupComponent.prototype.loadTechnicalLevels = function() {
            var _this = this;
            this.taskFormService.findAllBireTils().subscribe(function(results) {
              results.forEach(function(result) {
                if (result.technicalLevel !== null && result.technicalLevel !== undefined && !!result.tilName) {
                  var tempName = {
                    value: result.technicalLevel,
                    label: result.tilName
                  };
                  _this.technicalLevels.push(tempName);
                } else {
                  _super.prototype.throwUnboundLocalError.call(
                    _this,
                    'loadTechnicalLevels',
                    'result.technicalLevel && result.tilName'
                  );
                }
                if (result.technicalLevel !== null && result.technicalLevel !== undefined) {
                  var tempDescription = {
                    value: result.technicalLevel,
                    label: result.tilDescription || ''
                  };
                  _this.descriptions.push(tempDescription);
                } else {
                  _super.prototype.throwUnboundLocalError.call(_this, 'loadTechnicalLevels', 'result.technicalLevel');
                }
              });
              if (!!_this.tilInput) {
                _this.til = _this.tilInput;
              }
            });
          };
          DialogTilsPopupComponent.prototype.onTilSelected = function(event) {
            if (event.value === null) {
              this.til.tilName = undefined;
              this.til.tilDescription = undefined;
            } else {
              this.til.tilName = this.technicalLevels.filter(function(name) {
                return name.value === event.value;
              })[0].label;
              this.til.tilDescription = this.descriptions.filter(function(description) {
                return description.value === event.value;
              })[0].label;
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogTilsPopupComponent.prototype,
            'tilInput',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogTilsPopupComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogTilsPopupComponent.prototype,
            'onAdded',
            void 0
          );
          DialogTilsPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-tils-popup',
                template: __webpack_require__(
                  /*! ./dialog-tils-popup.component.html */ './src/app/main/engineering-management/task/form/dialog-tils-popup/dialog-tils-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [_task_form_service__WEBPACK_IMPORTED_MODULE_3__['TaskFormService']])
            ],
            DialogTilsPopupComponent
          );
          return DialogTilsPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/task-form.component.html':
      /*!********************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/task-form.component.html ***!
  \********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <h2 class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </h2>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle" *ngIf="!isCreateOpenMode && componentData && componentData.id">- {{ subtitle }}</div>\r\n      </div>\r\n      <div *ngIf="!isCreateOpenMode && previousTaskVersion">\r\n        <a (click)="openTaskForm(previousTaskVersion)">\r\n          <span>- {{ previousTaskVersion.taskCode }}:{{ previousTaskVersion.taskVersion }}</span>\r\n          <span *ngIf="previousTaskVersionLastMP"> // {{ previousTaskVersionLastMP.programCode }}</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class="object-status" *ngIf="task.taskStatus" (click)="showStatus()">\r\n      {{ task.taskStatus | formatSelectOption: statuses }}\r\n    </div>\r\n  </div>\r\n  <div class="page-actions">\r\n    <button mat-raised-button id="edit" *ngIf="isReadOpenMode && !isCreateOpenMode" (click)="editTask()">\r\n      {{ "global.edit" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode && !isCreateOpenMode"\r\n      type="button"\r\n      color="warn"\r\n      mat-raised-button\r\n      (click)="cancelTask()"\r\n    >\r\n      {{ "global.cancel" | translate }}\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" class="btn-with-spinner" color="primary" mat-raised-button (click)="saveTask()">\r\n      <span class="lds-hourglass" *ngIf="showSaveSpinner"></span>\r\n      {{ "global.save" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item (click)="openStatusUpdatesPopup()">{{ "updates" | translate }}</button>\r\n      <button *ngIf="showUpgradeButton" type="button" mat-menu-item (click)="upgradeTask()">\r\n        {{ getComponentName() + ".upgrade" | translate }}\r\n      </button>\r\n      <button mat-menu-item (click)="refresh()">{{ "global.refresh" | translate }}</button>\r\n      <button mat-menu-item (click)="updateFavoriteState()">{{ "addToFavorite" | translate }}</button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <mat-tab-group animationDuration="0ms" dynamicHeight>\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <span [ngClass]="{ highlight: highlightHome }">{{ "home" | translate }}</span>\r\n        </ng-template>\r\n\r\n        <div class="grid-row">\r\n          <div class="grid-cell--6 grid-cell--no-padding">\r\n            <div class="grid-row">\r\n              <div class="grid-cell--12">\r\n                <div class="grid-cell grid-cell--container">\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ "page.mainData" | translate }}\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content">\r\n                    <div class="column">\r\n                      <div class="row">\r\n                        <div id="taskCode" class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                          <label class="form-label">{{ getComponentName() + ".taskCode" | translate }} </label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="task.taskCode"\r\n                              [disabled]="isReadOpenMode || !isCreateOpenMode"\r\n                              maxlength="50"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="taskVersion" class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                          <label class="form-label">{{ getComponentName() + ".taskVersion" | translate }} </label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="task.taskVersion"\r\n                              [disabled]="isReadOpenMode || !isCreateOpenMode"\r\n                              maxlength="50"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="taskType" class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                          <label class="form-label">{{ getComponentName() + ".taskType" | translate }}</label>\r\n\r\n                          <div\r\n                            class="form-control"\r\n                            [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.TASK_TYPE) }"\r\n                          >\r\n                            <p-dropdown\r\n                              class="aw-dropdown fixed-width"\r\n                              [options]="taskTypes"\r\n                              [(ngModel)]="task.taskTypeCode"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="row">\r\n                        <div id="applicabilityDate" class="form-group">\r\n                          <label class="form-label">{{ "global.applicabilityDate" | translate }}</label>\r\n\r\n                          <div\r\n                            class="form-control"\r\n                            [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.APPLICABILITY_DATE) }"\r\n                          >\r\n                            <p-calendar\r\n                              showButtonBar="true"\r\n                              [monthNavigator]="true"\r\n                              [yearNavigator]="true"\r\n                              [yearRange]="sessionService.calendarYearRange"\r\n                              class="aw-calendar"\r\n                              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                              [locale]="sessionService.calendarFormat"\r\n                              [(ngModel)]="task.taskApplicabilityDate"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></p-calendar>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="taskGroups" class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".group" | translate }}</label>\r\n\r\n                          <div\r\n                            class="form-control"\r\n                            [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.TASK_GROUP) }"\r\n                          >\r\n                            <p-dropdown\r\n                              class="aw-dropdown  fixed-width"\r\n                              [options]="taskGroups"\r\n                              [(ngModel)]="task.groupCode"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="taskApplicabilityCode" class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".taskApplicabilityCode" | translate\r\n                          }}</label>\r\n\r\n                          <div\r\n                            class="form-control"\r\n                            [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.APPLICABILITY_CODE) }"\r\n                          >\r\n                            <p-dropdown\r\n                              class="aw-dropdown  fixed-width"\r\n                              [options]="applicabilities"\r\n                              [(ngModel)]="task.taskApplicabilityCode"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="row">\r\n                        <div id="taskDesignation" class="form-group flex--2">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".taskDesignation" | translate\r\n                          }}</label>\r\n\r\n                          <div\r\n                            class="form-control"\r\n                            [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.DESIGNATION) }"\r\n                          >\r\n                            <div *ngIf="taskDesignationDiff && isReadOpenMode" [innerHTML]="taskDesignationDiff"></div>\r\n                            <textarea\r\n                              *ngIf="!taskDesignationDiff || !isReadOpenMode"\r\n                              pInputTextarea\r\n                              [rows]="3"\r\n                              class="aw-textarea"\r\n                              [(ngModel)]="task.taskDesignation"\r\n                              [disabled]="isReadOpenMode"\r\n                              maxlength="1000"\r\n                            ></textarea>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="isCritical" class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".isCritical" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <p-checkbox\r\n                              class="aw-checkbox"\r\n                              binary="true"\r\n                              [(ngModel)]="isCritical"\r\n                              [disabled]="isReadOpenMode"\r\n                              (onChange)="changeIsCriticalDynamicAttribute()"\r\n                            ></p-checkbox>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-row">\r\n              <div class="grid-cell--12">\r\n                <div class="grid-cell grid-cell--container">\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ "page.additionalData" | translate }}\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content">\r\n                    <div class="column">\r\n                      <div class="row">\r\n                        <div id="mroCenter" class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".mroCenter" | translate }}</label>\r\n\r\n                          <div\r\n                            class="form-control"\r\n                            [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.MRO_CENTER) }"\r\n                          >\r\n                            <p-dropdown\r\n                              class="aw-dropdown  fixed-width"\r\n                              [options]="mroCenters"\r\n                              [(ngModel)]="task.repairCenterCode"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="inspectionPerEsm" class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".inspectionPerEsm" | translate\r\n                          }}</label>\r\n\r\n                          <div\r\n                            class="form-control"\r\n                            [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.INSPECTION_ESM) }"\r\n                          >\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="task.inspectionPerEsm"\r\n                              [disabled]="isReadOpenMode"\r\n                              maxlength="300"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="overhaul" class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".overhaul" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <p-checkbox\r\n                              class="aw-checkbox"\r\n                              binary="true"\r\n                              [(ngModel)]="task.overhaul"\r\n                              [disabled]="isReadOpenMode"\r\n                              [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.OVERHAUL) }"\r\n                            ></p-checkbox>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="row">\r\n                        <div id="taskZone" class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".taskZone" | translate }}</label>\r\n\r\n                          <div class="form-control" [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.ZONE) }">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="task.taskZone"\r\n                              [disabled]="isReadOpenMode"\r\n                              maxlength="300"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngIf="isCostSettingEnabled" id="cost" class="form-group cost-field">\r\n                          <label class="form-label">\r\n                            {{ componentData.componentId + ".cost" | translate }}\r\n                            <span *ngIf="currency">({{ currency }})</span>\r\n                          </label>\r\n\r\n                          <div\r\n                            class="form-control"\r\n                            [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.TOTAL_COST) }"\r\n                          >\r\n                            <input type="text" class="aw-input" [disabled]="true" [ngModel]="totalCost" />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group"></div>\r\n                      </div>\r\n\r\n                      <div class="row">\r\n                        <div id="taskDescription" class="form-group flex--3">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".taskDescription" | translate\r\n                          }}</label>\r\n\r\n                          <div\r\n                            class="form-control"\r\n                            [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.DESCRIPTION) }"\r\n                          >\r\n                            <div *ngIf="taskDescriptionDiff && isReadOpenMode" [innerHTML]="taskDescriptionDiff"></div>\r\n                            <textarea\r\n                              *ngIf="!taskDescriptionDiff || !isReadOpenMode"\r\n                              pInputTextarea\r\n                              [rows]="5"\r\n                              class="aw-textarea"\r\n                              [(ngModel)]="task.taskDescription"\r\n                              [disabled]="isReadOpenMode"\r\n                              [maxlength]="15000"\r\n                            ></textarea>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="grid-cell--6 grid-cell--no-padding">\r\n            <div class="grid-row">\r\n              <div class="grid-cell--12">\r\n                <div class="grid-cell grid-cell--container">\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ componentData.componentId + ".referenceManual" | translate }}\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content">\r\n                    <div class="column">\r\n                      <div class="row" [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.REFERENCE_MANUAL) }">\r\n                        <div id="taskChapter" class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".taskChapter" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="task.taskChapter"\r\n                              [disabled]="isReadOpenMode"\r\n                              maxlength="5"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="taskSection" class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".taskSection" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="task.taskSection"\r\n                              [disabled]="isReadOpenMode"\r\n                              maxlength="5"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="taskSubject" class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".taskSubject" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="task.taskSubject"\r\n                              [disabled]="isReadOpenMode"\r\n                              maxlength="6"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="taskTask" class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".taskTask" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="task.taskTask"\r\n                              [disabled]="isReadOpenMode"\r\n                              maxlength="50"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="taskSubTask" class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".taskSubTask" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="task.taskSubTask"\r\n                              [disabled]="isReadOpenMode"\r\n                              maxlength="50"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-row">\r\n              <div class="grid-cell--12">\r\n                <div class="grid-cell grid-cell--container">\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ componentData.componentId + ".maintenancePrograms" | translate }} ({{\r\n                          maintenanceProgramsTableDataSource ? maintenanceProgramsTableDataSource.dataCount : 0\r\n                        }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content grid-cell-content-with-section">\r\n                    <div class="section">\r\n                      <div\r\n                        class="section-content"\r\n                        [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.MAINTENANCE_PROGRAMS) }"\r\n                      >\r\n                        <a-table [dataSource]="maintenanceProgramsTableDataSource">\r\n                          <ng-template columnDef="programCode" let-rowData="rowData">\r\n                            <a (click)="openMaintenanceProgramsForm(rowData)">{{ rowData.programCode }}</a>\r\n                          </ng-template>\r\n                        </a-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-row">\r\n              <div class="grid-cell--12">\r\n                <div class="grid-cell grid-cell--container">\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ componentData.componentId + ".shopManuals" | translate }} ({{\r\n                          shopManualsTableDataSource ? shopManualsTableDataSource.dataCount : 0\r\n                        }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content grid-cell-content-with-section">\r\n                    <div class="section">\r\n                      <div class="section-content">\r\n                        <a-table [dataSource]="shopManualsTableDataSource"> </a-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <span [ngClass]="{ highlight: highlightTaskCard }">{{ getComponentName() + ".taskCard" | translate }}</span>\r\n        </ng-template>\r\n\r\n        <div class="grid-row">\r\n          <div class="grid-cell--12">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ getComponentName() + ".ope" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content grid-cell-content-with-section">\r\n                <div class="section">\r\n                  <h4 class="section-title">\r\n                    {{ componentData.componentId + ".operation" | translate }} ({{\r\n                      operationTableDataSource ? operationTableDataSource.dataCount : 0\r\n                    }})\r\n                  </h4>\r\n\r\n                  <div class="section-content" [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.OPERATIONS) }">\r\n                    <a-table [dataSource]="operationTableDataSource">\r\n                      <ng-template tableActionsDef>\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && operationTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          color="warn"\r\n                          (click)="deleteOperation()"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="operationTableDataSource.dataSelectionCount === 1"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="openOperation()"\r\n                        >\r\n                          {{ "global.open" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && !operationTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="createOperation()"\r\n                        >\r\n                          {{ "global.add" | translate }}\r\n                        </button>\r\n                      </ng-template>\r\n                      <ng-template columnDef="ope" let-rowData="rowData">\r\n                        <a (click)="openOperationForm(rowData)">{{ rowData.ope }}</a>\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-row">\r\n          <div class="grid-cell--6">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ componentData.componentId + ".superiorTasks" | translate }} ({{\r\n                      superiorTableDataSource ? superiorTableDataSource.dataCount : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content grid-cell-content-with-section">\r\n                <div class="section">\r\n                  <div\r\n                    class="section-content"\r\n                    [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.SUPERIOR_TASKS) }"\r\n                  >\r\n                    <a-table [dataSource]="superiorTableDataSource">\r\n                      <ng-template tableActionsDef>\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && superiorTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          color="warn"\r\n                          (click)="deleteSuperiorTask()"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && superiorTableDataSource.dataSelectionCount === 1"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="editSuperiorTask()"\r\n                        >\r\n                          {{ "global.edit" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="superiorTableDataSource.dataSelectionCount === 1"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="openSuperiorTask()"\r\n                        >\r\n                          {{ "global.open" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && !superiorTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="createSuperiorTask()"\r\n                        >\r\n                          {{ "global.add" | translate }}\r\n                        </button>\r\n                      </ng-template>\r\n                      <ng-template columnDef="taskCode" let-rowData="rowData">\r\n                        <a (click)="openTaskForm(rowData)">{{ rowData.taskCode }}</a>\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="grid-cell--6">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ componentData.componentId + ".topDownTaskStructure" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content grid-cell-content-with-section">\r\n                <div class="section">\r\n                  <div\r\n                    class="section-content"\r\n                    [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.TOP_DOWN_STRUCTURE) }"\r\n                  >\r\n                    <p-treeTable\r\n                      #ptreetableTopDown\r\n                      class="aw-tree-table2"\r\n                      [value]="topDownTreeTable"\r\n                      [columns]="topDownTaskStructureTableCols"\r\n                      selectionMode="checkbox"\r\n                      [(selection)]="selectedTopDownNodes"\r\n                      (onNodeSelect)="onRowSelected($event.node)"\r\n                      (onNodeUnselect)="onRowUnSelected($event.node)"\r\n                      [scrollable]="true"\r\n                      [resizableColumns]="true"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isLoadingTopDownTreeTable"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isLoadingTopDownTreeTable" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedTopDownNodes.length > 0 }">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptreetableTopDownGlobalFilter\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="ptreetableTopDown.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class="aw-table-actions">\r\n                            <button\r\n                              *ngIf="\r\n                                !isReadOpenMode &&\r\n                                selectedTopDownNodes.length === 1 &&\r\n                                selectedTopDownNodes[0].parent !== null\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              color="warn"\r\n                              (click)="deleteTopDownTask()"\r\n                            >\r\n                              {{ "global.delete" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="!isReadOpenMode && selectedTopDownNodes.length === 1"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="editTopDownTask()"\r\n                            >\r\n                              {{ "global.edit" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="selectedTopDownNodes.length === 1"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="openTopDownTask()"\r\n                            >\r\n                              {{ "global.open" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="!isReadOpenMode && selectedTopDownNodes.length === 0"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="createTopDownTask()"\r\n                            >\r\n                              {{ "global.add" | translate }}\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col class="aw-table-checkbox-wrapper" [ngClass]="{ \'display--none\': isReadOpenMode }" />\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th class="aw-table-checkbox-wrapper" [ngClass]="{ \'display--none\': isReadOpenMode }">\r\n                            <p-treeTableHeaderCheckbox class="aw-table-checkbox"></p-treeTableHeaderCheckbox>\r\n                          </th>\r\n\r\n                          <th ttResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                            {{ componentData.componentId + "." + col.field | translate }}\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">\r\n                        <tr>\r\n                          <td class="aw-table-checkbox-wrapper" [ngClass]="{ \'display--none\': isReadOpenMode }">\r\n                            <p-treeTableCheckbox class="aw-table-checkbox" [value]="rowNode"></p-treeTableCheckbox>\r\n                          </td>\r\n\r\n                          <td *ngFor="let col of columns; let i = index" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                            <p-treeTableToggler [rowNode]="rowNode" *ngIf="i == 0"></p-treeTableToggler>\r\n\r\n                            <span [ngSwitch]="col.field">\r\n                              <a *ngSwitchCase="\'taskCode\'" (click)="openTaskForm(rowData[\'bireTaskDTO\'])">{{\r\n                                rowData["bireTaskDTO"][col.field]\r\n                              }}</a>\r\n\r\n                              <span *ngSwitchCase="\'sequenceNumber\'"> {{ rowData[col.field] }} </span>\r\n\r\n                              <span *ngSwitchDefault> {{ rowData["bireTaskDTO"][col.field] }} </span>\r\n                            </span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-treeTable>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-row">\r\n          <div class="grid-cell--6">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ componentData.componentId + ".anterior" | translate }} ({{\r\n                      anteriorTaskTableDataSource ? anteriorTaskTableDataSource.dataCount : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content grid-cell-content-with-section">\r\n                <div class="section">\r\n                  <div\r\n                    class="section-content"\r\n                    [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.ANTERIOR_TASKS) }"\r\n                  >\r\n                    <a-table [dataSource]="anteriorTaskTableDataSource">\r\n                      <ng-template tableActionsDef>\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && anteriorTaskTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          color="warn"\r\n                          (click)="deleteAnterior()"\r\n                          [disabled]="!anteriorTaskTableDataSource.hasDataSelection"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && anteriorTaskTableDataSource.dataSelectionCount === 1"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="editAnterior()"\r\n                        >\r\n                          {{ "global.edit" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="anteriorTaskTableDataSource.dataSelectionCount === 1"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="openMaintenancePrograms()"\r\n                        >\r\n                          {{ "global.open" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && !anteriorTaskTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="createAnterior()"\r\n                        >\r\n                          {{ "global.add" | translate }}\r\n                        </button>\r\n                      </ng-template>\r\n                      <ng-template columnDef="taskCode" let-rowData="rowData">\r\n                        <a (click)="openTaskForm(rowData)">{{ rowData.taskCode }}</a>\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="grid-cell--6">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ componentData.componentId + ".posterior" | translate }} ({{\r\n                      posteriorTaskTableDataSource ? posteriorTaskTableDataSource.dataCount : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content grid-cell-content-with-section">\r\n                <div class="section">\r\n                  <div\r\n                    class="section-content"\r\n                    [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.POSTERIOR_TASKS) }"\r\n                  >\r\n                    <a-table [dataSource]="posteriorTaskTableDataSource">\r\n                      <ng-template tableActionsDef>\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && posteriorTaskTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          color="warn"\r\n                          (click)="deletePosterior()"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && posteriorTaskTableDataSource.dataSelectionCount === 1"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="editPosterior()"\r\n                        >\r\n                          {{ "global.edit" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="posteriorTaskTableDataSource.dataSelectionCount === 1"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="openPosterior()"\r\n                        >\r\n                          {{ "global.open" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && !posteriorTaskTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="createPosterior()"\r\n                        >\r\n                          {{ "global.add" | translate }}\r\n                        </button>\r\n                      </ng-template>\r\n                      <ng-template columnDef="taskCode" let-rowData="rowData">\r\n                        <a (click)="openTaskForm(rowData)">{{ rowData.taskCode }}</a>\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-row">\r\n          <div class="grid-cell--12">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ componentData.componentId + ".linkedTasks" | translate }} ({{\r\n                      linkedTaskTableDataSource ? linkedTaskTableDataSource.dataCount : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content grid-cell-content-with-section">\r\n                <div class="section">\r\n                  <div\r\n                    class="section-content"\r\n                    [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.LINKED_TASK) }"\r\n                  >\r\n                    <a-table [dataSource]="linkedTaskTableDataSource">\r\n                      <ng-template tableActionsDef>\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && linkedTaskTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          color="warn"\r\n                          (click)="deleteLinkedTasks()"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && linkedTaskTableDataSource.dataSelectionCount === 1"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="editLinkedTasks()"\r\n                        >\r\n                          {{ "global.edit" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="linkedTaskTableDataSource.dataSelectionCount === 1"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="openLinkedTasks()"\r\n                        >\r\n                          {{ "global.open" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && !linkedTaskTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="createLinkedTasks()"\r\n                        >\r\n                          {{ "global.add" | translate }}\r\n                        </button>\r\n                      </ng-template>\r\n                      <ng-template columnDef="taskCode" let-rowData="rowData">\r\n                        <a (click)="openTaskForm(rowData)">{{ rowData.taskCode }}</a>\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <span [ngClass]="{ highlight: highlightImpacts }">{{ getComponentName() + ".impacts" | translate }}</span>\r\n        </ng-template>\r\n\r\n        <div class="grid-row">\r\n          <div class="grid-cell--6">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ componentData.componentId + ".evolutions" | translate }} ({{\r\n                      evolutionsTableDataSource ? evolutionsTableDataSource.dataCount : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content grid-cell-content-with-section">\r\n                <div class="section">\r\n                  <div class="section-content" [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.EVOLUTIONS) }">\r\n                    <a-table [dataSource]="evolutionsTableDataSource">\r\n                      <ng-template tableActionsDef>\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && evolutionsTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          color="warn"\r\n                          (click)="deleteEvolution()"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && evolutionsTableDataSource.dataSelectionCount === 1"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="openEvolution()"\r\n                        >\r\n                          {{ "global.open" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && !evolutionsTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="createEvolution()"\r\n                        >\r\n                          {{ "global.add" | translate }}\r\n                        </button>\r\n                      </ng-template>\r\n                      <ng-template columnDef="evolutionNumber" let-rowData="rowData">\r\n                        <a (click)="openEvolutionForm(rowData)">{{ rowData.evolutionNumber }}</a>\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="grid-cell--6">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ componentData.componentId + ".maintainedItems" | translate }} ({{\r\n                      maintainedItemsTableDataSource ? maintainedItemsTableDataSource.dataCount : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content grid-cell-content-with-section">\r\n                <div class="section">\r\n                  <div class="section-content" [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.ITEMLINKED) }">\r\n                    <a-table [dataSource]="maintainedItemsTableDataSource">\r\n                      <ng-template tableActionsDef>\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && maintainedItemsTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          color="warn"\r\n                          (click)="deleteMaintainedItem()"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && maintainedItemsTableDataSource.dataSelectionCount === 1"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="openMaintainedItem()"\r\n                        >\r\n                          {{ "global.open" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && !maintainedItemsTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="createMaintainedItem()"\r\n                        >\r\n                          {{ "global.add" | translate }}\r\n                        </button>\r\n                      </ng-template>\r\n                      <ng-template columnDef="item" let-rowData="rowData">\r\n                        <a (click)="openItem(rowData)">{{ rowData.item }}</a>\r\n                      </ng-template>\r\n                      <ng-template columnDef="field" let-rowData="rowData">\r\n                        <a (click)="openField(rowData)">{{ rowData.field }}</a>\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <span [ngClass]="{ highlight: highlightPrerequisites }"\r\n            >{{ getComponentName() + ".prerequisites" | translate }}\r\n          </span>\r\n        </ng-template>\r\n\r\n        <div class="grid-row">\r\n          <div class="grid-cell--6">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ componentData.componentId + ".qualifications" | translate }} ({{\r\n                      qualificationsTableDataSource ? qualificationsTableDataSource.dataCount : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content grid-cell-content-with-section">\r\n                <div class="section">\r\n                  <div\r\n                    class="section-content"\r\n                    [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.ASSOCIATED_QUALIFICATIONS) }"\r\n                  >\r\n                    <a-table [dataSource]="qualificationsTableDataSource">\r\n                      <ng-template tableActionsDef>\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && qualificationsTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          color="warn"\r\n                          (click)="deleteQualification()"\r\n                          [disabled]="!qualificationsTableDataSource.hasDataSelection"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && qualificationsTableDataSource.dataSelectionCount === 1"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="openQualification()"\r\n                        >\r\n                          {{ "global.open" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && !qualificationsTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="createQualification()"\r\n                        >\r\n                          {{ "global.add" | translate }}\r\n                        </button>\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="grid-cell--6">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ componentData.componentId + ".til" | translate }} ({{\r\n                      tilTableDataSource ? tilTableDataSource.dataCount : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content grid-cell-content-with-section">\r\n                <div class="section">\r\n                  <div\r\n                    class="section-content"\r\n                    [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.TECHNICAL_LEVEL) }"\r\n                  >\r\n                    <a-table [dataSource]="tilTableDataSource">\r\n                      <ng-template tableActionsDef>\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && tilTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          color="warn"\r\n                          (click)="deleteTil()"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && tilTableDataSource.dataSelectionCount === 1"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="openTil()"\r\n                        >\r\n                          {{ "global.open" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && !tilTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="createTil()"\r\n                        >\r\n                          {{ "global.add" | translate }}\r\n                        </button>\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <span [ngClass]="{ highlight: highlightAttributes }"> {{ "attributes" | translate }}</span>\r\n        </ng-template>\r\n\r\n        <div class="grid-row">\r\n          <div id="attributesPanel" class="grid-cell--12">\r\n            <div #attributesAnchor class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ componentData.componentId + ".attributes" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n              <div\r\n                class="grid-cell-content grid-cell-content-with-section"\r\n                [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.ATTRIBUTES) }"\r\n              >\r\n                <aw-dynamic-attributes [attributes]="dynamicAttributesForTask" [isReadOpenMode]="isReadOpenMode">\r\n                </aw-dynamic-attributes>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <span [ngClass]="{ highlight: highlightDocuments }">{{ "documents" | translate }}</span>\r\n        </ng-template>\r\n\r\n        <div class="grid-row">\r\n          <div class="grid-cell--12" (click)="selectPageTocEntry(component.DOCUMENTS_ANCHOR_ID)">\r\n            <div\r\n              class="grid-cell grid-cell--container"\r\n              [ngClass]="{ active: isPageTocEntrySelected(component.DOCUMENTS_ANCHOR_ID) }"\r\n            >\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ getComponentName() + ".documents" | translate }} ({{\r\n                      documentsTableDataSource ? documentsTableDataSource.dataCount : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content" [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.DOCUMENTS) }">\r\n                <a-table [dataSource]="documentsTableDataSource">\r\n                  <ng-template tableActionsDef>\r\n                    <button\r\n                      *ngIf="!isReadOpenMode && documentsTableDataSource.hasDataSelection"\r\n                      type="button"\r\n                      mat-raised-button\r\n                      color="warn"\r\n                      (click)="deleteDocuments()"\r\n                    >\r\n                      {{ "global.delete" | translate }}\r\n                    </button>\r\n\r\n                    <button\r\n                      *ngIf="!isReadOpenMode && documentsTableDataSource.dataSelectionCount === 1"\r\n                      type="button"\r\n                      mat-raised-button\r\n                      (click)="editDocument()"\r\n                    >\r\n                      {{ "global.edit" | translate }}\r\n                    </button>\r\n\r\n                    <button\r\n                      *ngIf="!isReadOpenMode && !documentsTableDataSource.hasDataSelection"\r\n                      type="button"\r\n                      mat-raised-button\r\n                      (click)="addDocument()"\r\n                    >\r\n                      {{ "global.add" | translate }}\r\n                    </button>\r\n                  </ng-template>\r\n                  <ng-template columnDef="docName" let-rowData="rowData">\r\n                    <a (click)="downloadDocument(rowData)">{{ rowData.docName }}</a>\r\n                  </ng-template>\r\n                  <ng-template columnDef="docExtension" let-rowData="rowData">\r\n                    {{ showDocExtension(rowData) }}\r\n                  </ng-template>\r\n                  <ng-template columnDef="docPublicationDate" let-rowData="rowData">\r\n                    {{ rowData.docPublicationDate | date: "yyyy/MM/dd":"":translateService.currentLang }}\r\n                  </ng-template>\r\n                  <ng-template columnDef="docSource" let-rowData="rowData">\r\n                    {{ rowData.docSource }}\r\n                    <i\r\n                      *ngIf="validateUrl(rowData.docSource)"\r\n                      class="fa fa-fw fa-external-link aw-icon aw-icon-with-border"\r\n                      aria-hidden="true"\r\n                      pTooltip="{{ \'global.open\' | translate }}"\r\n                      tooltipPosition="top"\r\n                      (click)="openUrl(rowData.docSource)"\r\n                    ></i>\r\n                  </ng-template>\r\n                </a-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <span [ngClass]="{ highlight: highlightMeasurementPoint }">{{ "measurementPoints" | translate }}</span>\r\n        </ng-template>\r\n        <div class="grid-row">\r\n          <div\r\n            #measurementPointsAnchor\r\n            class="grid-cell--12"\r\n            (click)="selectPageTocEntry(component.MEASUREMENT_POINTS_ANCHOR_ID)"\r\n          >\r\n            <div\r\n              class="grid-cell grid-cell--container"\r\n              [ngClass]="{ active: isPageTocEntrySelected(component.MEASUREMENT_POINTS_ANCHOR_ID) }"\r\n            >\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ getComponentName() + ".measurementPoints" | translate }} ({{\r\n                      measurementPointsTableDataSource ? measurementPointsTableDataSource.dataCount : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n              <div\r\n                class="grid-cell-content"\r\n                [ngClass]="{ highlight: isUpdatedField(TaskFieldsConstant.MEASUREMENT_POINT) }"\r\n              >\r\n                <a-table [dataSource]="measurementPointsTableDataSource">\r\n                  <ng-template tableActionsDef>\r\n                    <button\r\n                      mat-raised-button\r\n                      *ngIf="!isReadOpenMode && measurementPointsTableDataSource.hasDataSelection"\r\n                      type="button"\r\n                      (click)="deleteMeasurementPoints(measurementPointsTableDataSource.dataSelection)"\r\n                    >\r\n                      {{ "global.delete" | translate }}\r\n                    </button>\r\n\r\n                    <button\r\n                      mat-raised-button\r\n                      *ngIf="!isReadOpenMode && measurementPointsTableDataSource.dataSelectionCount === 1"\r\n                      type="button"\r\n                      (click)="updateMeasurementPoint()"\r\n                    >\r\n                      {{ "global.update" | translate }}\r\n                    </button>\r\n\r\n                    <button\r\n                      mat-raised-button\r\n                      color="warn"\r\n                      *ngIf="measurementPointsTableDataSource.dataSelectionCount === 1"\r\n                      type="button"\r\n                      (click)="openMeasurementPoint()"\r\n                    >\r\n                      {{ "global.open" | translate }}\r\n                    </button>\r\n\r\n                    <button\r\n                      *ngIf="!isReadOpenMode && !measurementPointsTableDataSource.hasDataSelection"\r\n                      mat-raised-button\r\n                      type="button"\r\n                      (click)="addMeasurementPoint()"\r\n                    >\r\n                      {{ "global.add" | translate }}\r\n                    </button>\r\n                    <button\r\n                      *ngIf="!isReadOpenMode && measurementPointsTableDataSource.dataSelectionCount === 1"\r\n                      mat-raised-button\r\n                      type="button"\r\n                      (click)="toolMeasurementPoint()"\r\n                    >\r\n                      {{ getComponentName() + ".tool" | translate }}\r\n                    </button>\r\n                    <button\r\n                      mat-raised-button\r\n                      *ngIf="!isReadOpenMode && showMeasurementPointLinkButton()"\r\n                      type="button"\r\n                      (click)="linkMeasurementPoints()"\r\n                    >\r\n                      {{ getComponentName() + ".link" | translate }}\r\n                    </button>\r\n                    <button\r\n                      mat-raised-button\r\n                      *ngIf="!isReadOpenMode && showMeasurementPointUnLinkButton()"\r\n                      type="button"\r\n                      (click)="unLinkMeasurementPoints()"\r\n                    >\r\n                      {{ getComponentName() + ".unLink" | translate }}\r\n                    </button>\r\n                    <button\r\n                      *ngIf="!isReadOpenMode && showMeasurementPointFormulaButton()"\r\n                      mat-raised-button\r\n                      type="button"\r\n                      (click)="formulaMeasurementPoint()"\r\n                    >\r\n                      {{ getComponentName() + ".formula" | translate }}\r\n                    </button>\r\n                  </ng-template>\r\n                </a-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n\r\n    <aw-dialog-search-operation\r\n      *ngIf="showOperationDialog"\r\n      [(display)]="showOperationDialog"\r\n      (onValidated)="onAddOperation($event)"\r\n    ></aw-dialog-search-operation>\r\n\r\n    <aw-dialog-operations-popup\r\n      *ngIf="showOperationFormDialog"\r\n      [(display)]="showOperationFormDialog"\r\n      [isReadOnlyForm]="isReadOnlyOperationDialog"\r\n      [operation]="currentOperation"\r\n    ></aw-dialog-operations-popup>\r\n\r\n    <aw-dialog-evolutions-popup\r\n      *ngIf="showEvolutionsDialog"\r\n      [evolution]="currentEvolution"\r\n      [(display)]="showEvolutionsDialog"\r\n      [isReadOnlyForm]="isReadOnlyEvolutionsDialog"\r\n      (onAdded)="onAddEvolution($event)"\r\n    >\r\n    </aw-dialog-evolutions-popup>\r\n\r\n    <aw-dialog-item-versions-popup\r\n      *ngIf="showMaintainedItemsDialog"\r\n      [item]="currentMaintainedItem"\r\n      [(display)]="showMaintainedItemsDialog"\r\n      [isReadOnlyForm]="isReadOnlyMaintainedItemsDialog"\r\n      (onAdded)="onAddedMaintainedItem($event)"\r\n    ></aw-dialog-item-versions-popup>\r\n\r\n    <aw-dialog-search-qualification\r\n      *ngIf="showQualificationsDialog"\r\n      [(display)]="showQualificationsDialog"\r\n      (onSelected)="onAddedQualification($event)"\r\n    >\r\n    </aw-dialog-search-qualification>\r\n\r\n    <aw-dialog-tils-popup\r\n      *ngIf="showTilDialog"\r\n      [tilInput]="currentTil"\r\n      [(display)]="showTilDialog"\r\n      [isReadOnlyForm]="isReadOnlyTilDialog"\r\n      (onAdded)="onAddedTil($event)"\r\n    ></aw-dialog-tils-popup>\r\n\r\n    <aw-dialog-associated-tasks-popup\r\n      *ngIf="showSuperiorTasksDialog"\r\n      [isNewForm]="isCreateOpenMode"\r\n      [linkTypes]="superior"\r\n      [isDisplayLinkType]="false"\r\n      [associatedTasks]="currentSuperiorTask"\r\n      [(display)]="showSuperiorTasksDialog"\r\n      [isReadOnlyForm]="isReadOnlySuperiorTasksDialog"\r\n      (onAssociated)="onAssociatedSuperiorTask($event)"\r\n    ></aw-dialog-associated-tasks-popup>\r\n\r\n    <aw-dialog-associated-tasks-popup\r\n      *ngIf="showTopDownTasksDialog"\r\n      [linkTypes]="topDown"\r\n      [isNewForm]="isCreateOpenMode"\r\n      [isDisplayLinkType]="false"\r\n      [associatedTasks]="currentTopDownTask"\r\n      [(display)]="showTopDownTasksDialog"\r\n      [isReadOnlyForm]="isReadOnlyTopDownTasksDialog"\r\n      (onAssociated)="onAssociatedTopDownTask($event)"\r\n    >\r\n    </aw-dialog-associated-tasks-popup>\r\n\r\n    <aw-dialog-associated-tasks-popup\r\n      *ngIf="showAnteriorTasksDialog"\r\n      [linkTypes]="anterior"\r\n      [isNewForm]="isCreateOpenMode"\r\n      [isDisplayLinkType]="false"\r\n      [associatedTasks]="currentAnterior"\r\n      [(display)]="showAnteriorTasksDialog"\r\n      [isReadOnlyForm]="isReadOnlyAnteriorDialog"\r\n      (onAssociated)="onAssociatedAnteriorTask($event)"\r\n    ></aw-dialog-associated-tasks-popup>\r\n\r\n    <aw-dialog-associated-tasks-popup\r\n      *ngIf="showPosteriorDialog"\r\n      [linkTypes]="posterior"\r\n      [isNewForm]="isCreateOpenMode"\r\n      [isDisplayLinkType]="false"\r\n      [associatedTasks]="currentPosterior"\r\n      [(display)]="showPosteriorDialog"\r\n      [isReadOnlyForm]="isReadOnlyPosteriorDialog"\r\n      (onAssociated)="onAssociatedPosteriorTask($event)"\r\n    >\r\n    </aw-dialog-associated-tasks-popup>\r\n\r\n    <aw-dialog-associated-tasks-popup\r\n      *ngIf="showLinkedTasksDialog"\r\n      [linkTypes]="linked"\r\n      [isNewForm]="isCreateOpenMode"\r\n      [isDisplayLinkType]="true"\r\n      [associatedTasks]="currentLinkedTask"\r\n      [(display)]="showLinkedTasksDialog"\r\n      [isReadOnlyForm]="isReadOnlyLinkedTasksDialog"\r\n      (onAssociated)="onAssociatedLinkedTask($event)"\r\n    >\r\n    </aw-dialog-associated-tasks-popup>\r\n\r\n    <aw-task-import-popup\r\n      *ngIf="showDocumentDialog"\r\n      [document]="currentDocument"\r\n      [(display)]="showDocumentDialog"\r\n      [isReadOnlyForm]="isReadOnlyDocumentDialog"\r\n      (onValidated)="updateDocument($event)"\r\n    ></aw-task-import-popup>\r\n\r\n    <aw-status-update-history\r\n      *ngIf="showStatusUpdatesPopup"\r\n      [object]="task"\r\n      [data]="tableStatusUpdatesData"\r\n      [deleteApi]="deleteApi"\r\n      [(display)]="showStatusUpdatesPopup"\r\n      [keyMap]="updatesKeyMap"\r\n      [isStatusEditable]="false"\r\n      (onUpdated)="updateObjectStatusFromStatusUpdatesHistory($event)"\r\n    >\r\n    </aw-status-update-history>\r\n\r\n    <aw-dynamic-attributes-history\r\n      *ngIf="showDynamicAttributesHistoric"\r\n      [attributes]="dynamicAttributesForTask"\r\n      [history]="dynamicAttributesHistoric"\r\n      showDelete="true"\r\n      [deleteApi]="taskHistoryApi.removeHBireTaskAttribute"\r\n      [(display)]="showDynamicAttributesHistoric"\r\n    ></aw-dynamic-attributes-history>\r\n\r\n    <aw-task-import-popup\r\n      *ngIf="showAddDocumentDialog"\r\n      [document]="currentDocument"\r\n      [(display)]="showAddDocumentDialog"\r\n      [isReadOnlyForm]="isReadOnlyDocumentDialog"\r\n      (onValidated)="addNewDocument($event)"\r\n    ></aw-task-import-popup>\r\n\r\n    <aw-dialog-measure-popup\r\n      *ngIf="showMeasurementPointDialog"\r\n      [(display)]="showMeasurementPointDialog"\r\n      [openMode]="measurementPointDialogOpenMode"\r\n      [hasRefMeasurementLinked]="isLinkedRefMeasurementCode"\r\n      [data]="measurementPointRowData"\r\n      (onValidatedMeasurementPoint)="onValidatedMeasurementRow($event)"\r\n    ></aw-dialog-measure-popup>\r\n    <aw-dialog-measure-tool-popup\r\n      *ngIf="showAddMeasurementPointToolDialog"\r\n      [(display)]="showAddMeasurementPointToolDialog"\r\n      (onValidated)="setSelectedTool($event)"\r\n      [searchInput]="pnTaskSearchInput"\r\n    >\r\n    </aw-dialog-measure-tool-popup>\r\n\r\n    <aw-dialog-measure-formula-popup\r\n      *ngIf="showAddMeasurementPointFormulaDialog"\r\n      [selectedMeasurePoint]="\r\n        measurementPointsTableDataSource.dataSelection[0] &&\r\n        measurementPointsTableDataSource.dataSelection[0].counterCode\r\n      "\r\n      [selectedMeasurePointTitle]="\r\n        measurementPointsTableDataSource.dataSelection[0] &&\r\n        measurementPointsTableDataSource.dataSelection[0].counterRemarks\r\n      "\r\n      [selectedMeasurePointFormula]="\r\n        measurementPointsTableDataSource.dataSelection[0] && measurementPointsTableDataSource.dataSelection[0].formula\r\n      "\r\n      [measureList]="measurementPointsTableDataSource.dataSrc"\r\n      [(display)]="showAddMeasurementPointFormulaDialog"\r\n      (onValidated)="setFormula($event)"\r\n    ></aw-dialog-measure-formula-popup>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/task-form.component.scss':
      /*!********************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/task-form.component.scss ***!
  \********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .grid-cell-content.grid-cell-content-with-section.description {\n  width: 100%; }\n\n:host .section-margin {\n  margin-top: 30px; }\n\n:host .highlight {\n  border-bottom: solid yellow; }\n\n:host .background-grey {\n  background: #595959 !important; }\n\n:host .measure-code-result {\n  color: dodgerblue !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9lbmdpbmVlcmluZy1tYW5hZ2VtZW50L3Rhc2svZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcZW5naW5lZXJpbmctbWFuYWdlbWVudFxcdGFza1xcZm9ybVxcdGFzay1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBSVEsV0FBVyxFQUFBOztBQUpuQjtFQVNJLGdCQUFnQixFQUFBOztBQVRwQjtFQWdCSSwyQkFBMkIsRUFBQTs7QUFoQi9CO0VBb0JJLDhCQUE0QyxFQUFBOztBQXBCaEQ7RUF1QkksNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2VuZ2luZWVyaW5nLW1hbmFnZW1lbnQvdGFzay9mb3JtL3Rhc2stZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuXHJcbjpob3N0IHtcclxuICAuZ3JpZC1jZWxsLWNvbnRlbnQge1xyXG4gICAgJi5ncmlkLWNlbGwtY29udGVudC13aXRoLXNlY3Rpb24ge1xyXG4gICAgICAmLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuc2VjdGlvbi1tYXJnaW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4gIC5oaWdobGlnaHQge1xyXG4gICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCB5ZWxsb3c7XHJcbiAgICAvLyAgLW1vei1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCB5ZWxsb3c7XHJcbiAgICAvLyAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHllbGxvdztcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHllbGxvdztcclxuICB9XHJcblxyXG4gIC5iYWNrZ3JvdW5kLWdyZXkge1xyXG4gICAgYmFja2dyb3VuZDogJHNlY29uZGFyeS10ZXh0LWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tZWFzdXJlLWNvZGUtcmVzdWx0IHtcclxuICAgIGNvbG9yOiBkb2RnZXJibHVlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/task-form.component.ts':
      /*!******************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/task-form.component.ts ***!
  \******************************************************************************/
      /*! exports provided: TaskFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TaskFormComponent', function() {
          return TaskFormComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _modules_purchase_contract_utils_label_value_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../modules/purchase-contract/utils/label-value-helper */ './src/app/modules/purchase-contract/utils/label-value-helper.ts'
        );
        /* harmony import */ var _shared_api_task_history_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/task-history.api */ './src/app/shared/api/task-history.api.ts'
        );
        /* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/components/component-sidebar/page-toc.service */ './src/app/shared/components/component-sidebar/page-toc.service.ts'
        );
        /* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/components/dynamic-attributes/dynamic-attributes.service */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.service.ts'
        );
        /* harmony import */ var _shared_components_dynamic_attributes_enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/components/dynamic-attributes/enums/dynamic-attribute-type.enum */ './src/app/shared/components/dynamic-attributes/enums/dynamic-attribute-type.enum.ts'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/constants/bire-unit-measure-constants */ './src/app/shared/constants/bire-unit-measure-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_constants_task_fields_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/constants/task-fields-constants */ './src/app/shared/constants/task-fields-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/enums/table-column-filter-mode.enum */ './src/app/shared/enums/table-column-filter-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/enums/table-selection-mode.enum */ './src/app/shared/enums/table-selection-mode.enum.ts'
        );
        /* harmony import */ var _shared_pipes_format_select_option_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/pipes/format-select-option.pipe */ './src/app/shared/pipes/format-select-option.pipe.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_dassault_field_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../shared/services/dassault/field.service */ './src/app/shared/services/dassault/field.service.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_services_update_historic_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ../../../../shared/services/update-historic.service */ './src/app/shared/services/update-historic.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_bire_family_variant_utils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ../../../../shared/utils/bire-family-variant-utils */ './src/app/shared/utils/bire-family-variant-utils.ts'
        );
        /* harmony import */ var _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ../../../../shared/utils/dto-utils */ './src/app/shared/utils/dto-utils.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ../../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ../../../../shared/utils/label-value-utils */ './src/app/shared/utils/label-value-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_settings_utils__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! ../../../../shared/utils/settings-utils */ './src/app/shared/utils/settings-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _shared_utils_url_utils__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
          /*! ../../../../shared/utils/url-utils */ './src/app/shared/utils/url-utils.ts'
        );
        /* harmony import */ var _shared_utils_workflow_utils__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
          /*! ../../../../shared/utils/workflow-utils */ './src/app/shared/utils/workflow-utils.ts'
        );
        /* harmony import */ var _object_status_object_status_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
          /*! ../../../object-status/object-status.component */ './src/app/main/object-status/object-status.component.ts'
        );
        /* harmony import */ var _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
          /*! ../../../overlay/overlay.service */ './src/app/main/overlay/overlay.service.ts'
        );
        /* harmony import */ var _search_task_search_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
          /*! ../search/task-search.service */ './src/app/main/engineering-management/task/search/task-search.service.ts'
        );
        /* harmony import */ var _task_form_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
          /*! ./task-form.service */ './src/app/main/engineering-management/task/form/task-form.service.ts'
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

        var TaskFormComponent = /** @class */ (function(_super) {
          __extends(TaskFormComponent, _super);
          function TaskFormComponent(
            favoriteService,
            loaderService,
            messageService,
            pageTocService,
            serializationService,
            tabService,
            sessionService,
            translateService,
            taskFormService,
            taskSearchService,
            confirmationService,
            propertiesService,
            dynamicAttributesService,
            updateHistoricService,
            taskHistoryApi,
            dateService,
            davFieldService,
            _overlayService,
            _formatSelectOption
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                pageTocService
              ) || this;
            _this.sessionService = sessionService;
            _this.translateService = translateService;
            _this.taskFormService = taskFormService;
            _this.taskSearchService = taskSearchService;
            _this.confirmationService = confirmationService;
            _this.propertiesService = propertiesService;
            _this.dynamicAttributesService = dynamicAttributesService;
            _this.updateHistoricService = updateHistoricService;
            _this.taskHistoryApi = taskHistoryApi;
            _this.dateService = dateService;
            _this.davFieldService = davFieldService;
            _this._overlayService = _overlayService;
            _this._formatSelectOption = _formatSelectOption;
            _this.TaskFieldsConstant =
              _shared_constants_task_fields_constants__WEBPACK_IMPORTED_MODULE_12__['TaskFieldsConstant'];
            _this.component = TaskFormComponent_1;
            _this.selectedPnType =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__[
                'AWPropertiesConstants'
              ].PN_TYPE_INGREDIENT_KEY;
            _this.bireUnitMeasureConstants =
              _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_9__['BireUnitMeasureConstants'];
            _super.prototype.registerPageTocEntryObservable.call(_this);
            // Dynamic historic
            _this.showDynamicAttributesHistoric = false;
            _this.tabTaskFieldsId = 'fields';
            _this.tabTaskCardId = 'card';
            _this.tabImpactsId = 'impacts';
            _this.tabManualsId = 'manuals';
            _this.tabPrerequisitesId = 'prerequisites';
            _this.tabDocumentsId = 'documents';
            _this.tabAttributesId = 'attributes';
            _this.tabStructureId = 'structure';
            _this.tabOtherLinksId = 'other';
            _this.currentTabId = _this.tabTaskFieldsId;
            _this.currentSubTabId = _this.tabStructureId;
            _this.currentOperation = undefined;
            _this.currentOperationIndex = undefined;
            _this.isReadOnlyOperationDialog = true;
            _this.showOperationDialog = false;
            _this.currentSuperiorTask = undefined;
            _this.currentSuperiorTaskIndex = undefined;
            _this.isReadOnlySuperiorTasksDialog = true;
            _this.showSuperiorTasksDialog = false;
            _this.currentTopDownTask = undefined;
            _this.currentTopDownTaskIndex = undefined;
            _this.isReadOnlyTopDownTasksDialog = true;
            _this.showTopDownTasksDialog = false;
            _this.currentAnterior = undefined;
            _this.currentAnteriorIndex = undefined;
            _this.isReadOnlyAnteriorDialog = true;
            _this.showAnteriorTasksDialog = false;
            _this.currentPosterior = undefined;
            _this.currentPosteriorIndex = undefined;
            _this.isReadOnlyPosteriorDialog = true;
            _this.showPosteriorDialog = false;
            _this.currentLinkedTask = undefined;
            _this.currentLinkedTaskIndex = undefined;
            _this.isReadOnlyLinkedTasksDialog = true;
            _this.showLinkedTasksDialog = false;
            _this.currentEvolution = undefined;
            _this.currentEvolutionIndex = undefined;
            _this.isReadOnlyEvolutionsDialog = true;
            _this.showEvolutionsDialog = false;
            _this.currentMaintainedItem = undefined;
            _this.currentMaintainedItemIndex = undefined;
            _this.isReadOnlyMaintainedItemsDialog = true;
            _this.showMaintainedItemsDialog = false;
            _this.currentQualifications = undefined;
            _this.currentQualificationsIndex = undefined;
            _this.isReadOnlyQualificationsDialog = true;
            _this.showQualificationsDialog = false;
            _this.currentTil = undefined;
            _this.currentTilIndex = undefined;
            _this.isReadOnlyTilDialog = true;
            _this.showTilDialog = false;
            _this.currentDocument = undefined;
            _this.currentDocumentIndex = undefined;
            _this.isReadOnlyDocumentDialog = true;
            _this.showDocumentDialog = false;
            _this.showAddDocumentDialog = false;
            _this.bireDocumentDisplayed = [];
            _this.newQualification = false;
            _this.highlightUpdate = false;
            _this.dmp = new diff_match_patch();
            _this.showMeasurementPointDialog = false;
            _this.measurementPointRowData = undefined;
            _this.measurementPointDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Create;
            _this.showAddMeasurementPointToolDialog = false;
            _this.showAddMeasurementPointFormulaDialog = false;
            _this.init();
            _this.initCostSettingDisplay();
            _this.initOperationTableDataSource();
            _this.initEvolutionsTableDataSource();
            _this.initMaintainedItemsTableDataSource();
            _this.initShopManualsTableDataSource();
            _this.initMaintenanceProgramsTableDataSource();
            _this.initQualificationsTableDataSource();
            _this.initTilTableDataSource();
            _this.initDocumentsTableDataSource();
            _this.initSuperiorTableDataSource();
            _this.initAnteriorTaskTableDataSource();
            _this.initPosteriorTaskTableDataSource();
            _this.initMeasurementPointsTableDataSource();
            _this.initLinkedTaskTableDataSource();
            _this.totalCost = 0;
            _this.showUpgradeButton = false;
            _this.loadCurrency();
            _this.setTableCols();
            _this.loadTaskType();
            _this.loadStatus();
            _this.loadApplicability();
            _this.loadMROCenter();
            _this.loadTaskGroup();
            _this.loadLinkTypes();
            _this.loadStructureTypes();
            _this.loadAssociatedTaskLinkTypes();
            _this.loadTechnicalLevels();
            _this.loadDocumentTaskCategories();
            // Lang change events
            _this.translateService.onLangChange.subscribe(function(_) {
              _this.bireAttributesForTask = [];
              _this.dynamicAttributesForTask = [];
              _this.getBireAttributesForTask();
            });
            _this.isLoadingTopDownTreeTable = false;
            _this.userWorkflowSubject.subscribe(function(userWorkflow) {
              _this.updateWorkflowStatusList();
            });
            return _this;
          }
          TaskFormComponent_1 = TaskFormComponent;
          TaskFormComponent.prototype.getComponentName = function() {
            return 'TaskFormComponent';
          };
          TaskFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.setContext();
            this.loadTask();
          };
          TaskFormComponent.prototype.refresh = function() {
            this.reloadTask();
            this.setContext();
          };
          TaskFormComponent.prototype.setContext = function(openMode) {
            if (!this.componentData.objectId) {
              this.componentContext = 'tab.createMode';
              this.componentData.openMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Create;
            } else {
              var componentInputData = this.serializationService.deserialize(this.componentData.objectId);
              this.componentContext = componentInputData.taskCode + ' - ' + componentInputData.taskVersion;
              this.componentData.openMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read;
            }
            this.updateOpenMode(openMode ? openMode : this.componentData.openMode);
            this.displayComponentContext(this.componentContext, this.isCreateOpenMode);
            this.setTableOfContent();
          };
          TaskFormComponent.prototype.cancelTask = function() {
            if (this.isCreateOpenMode) {
              this.init();
              this.initAttributeValue();
            } else {
              this.reloadTask();
              this.updateOpenMode(
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read
              );
            }
          };
          TaskFormComponent.prototype.initAttributeValue = function() {
            var leafs = this.dynamicAttributesService.getLeafs(this.dynamicAttributesForTask);
            leafs.forEach(function(attribute) {
              attribute.value = undefined;
            });
          };
          TaskFormComponent.prototype.editTask = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Write
            );
          };
          TaskFormComponent.prototype.loadTask = function() {
            var _this = this;
            this.linkedTaskTableDataSource.setData([]);
            if (!!this.componentData.objectId) {
              var taskTemp_1 = {
                taskCode: this.serializationService.deserialize(this.componentData.objectId).taskCode,
                taskVersion: this.serializationService.deserialize(this.componentData.objectId).taskVersion
              };
              this.subtitle = taskTemp_1.taskCode + ':' + taskTemp_1.taskVersion;
              this.taskFormService.findBireTask(taskTemp_1).subscribe(
                function(result) {
                  _this.task = result || {};
                  if (_this.task.taskApplicabilityDate) {
                    _this.task.taskApplicabilityDate = new Date(_this.task.taskApplicabilityDate.toString());
                  }
                  if (_this.task && _this.task.taskCode && _this.task.taskVersion) {
                    _this.taskVersion = Number(_this.task.taskVersion);
                    var id = {
                      taskCode: _this.task.taskCode,
                      taskVersion: _this.task.taskVersion
                    };
                    var taskId = {
                      taskCode: _this.task.taskCode,
                      taskVersion: _this.task.taskVersion
                    };
                    // Task fields tab
                    _this.getSubContracting(taskId);
                    // Task Card tab
                    _this.loadOperationTable(id);
                    _this.loadAssociatedTasksTables(taskId);
                    // Impacts tab
                    _this.loadEvolutionsTable(id);
                    _this.loadItemsTable(id);
                    // Manuals tab
                    _this.loadShopManualsTable(id);
                    _this.loadMaintenanceProgramsTable(id, taskId);
                    // Prerequisites tab
                    _this.loadQualificationsTable(taskId);
                    _this.loadTilTable(taskId);
                    // Documents tab
                    _this.loadDocumentsTable(id);
                    // Attributes tab
                    _this.getBireTaskAttributes();
                    // Measurement Points tab
                    _this.loadMeasurementPointsTable(id);
                    // Load changes
                    _this.isHighlightTaskUpdate(taskTemp_1);
                    if (!_this.task.taskStatus) {
                      _this.task.taskStatus =
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__[
                          'AWPropertiesConstants'
                        ].FUNC_OBJECT_STATUS_ON_GOING_KEY;
                    }
                  }
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLoadTask'));
                }
              );
            } else {
              if (!this.task.taskStatus) {
                this.task.taskStatus =
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__[
                    'AWPropertiesConstants'
                  ].FUNC_OBJECT_STATUS_ON_GOING_KEY;
              }
            }
          };
          TaskFormComponent.prototype.reloadTask = function() {
            this.init();
            this.loadTask();
          };
          /**
           * upgradeButtonVisibility() - This function is used to display upgrade button for creating new version of Task.
           * @param currentTask - Current Task Input
           * @param maintenanceProgramTableResult - Maintenance program Table Result
           *
           * If length of value is zero, then it is a RMP.
           */
          TaskFormComponent.prototype.upgradeButtonVisibility = function(currentTask, maintenanceProgram) {
            var _this = this;
            maintenanceProgram.forEach(function(elements) {
              var planDTO = { planCode: elements.planCode };
              _this.taskFormService.findBirePlanAttributesByPlanCode(planDTO).subscribe(function(value) {
                if (
                  value.length === TaskFormComponent_1.MAINTENANCE_PROGRAM_TYPE_RMP &&
                  elements.statusState ===
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                      .FUNC_OBJECT_STATUS_APPROVED_KEY
                ) {
                  _this.taskFormService.checkAndReturnNewVersionNumberByTask(currentTask).subscribe(function(result) {
                    if (!!result) {
                      _this.showUpgradeButton = true;
                    }
                  });
                }
              });
            });
          };
          TaskFormComponent.prototype.isValidTask = function() {
            if (
              this.task.taskTypeCode &&
              this.task.taskCode &&
              this.task.taskVersion &&
              this.task.taskTypeCode.trim().length !== 0 &&
              this.task.taskCode.trim().length !== 0 &&
              this.task.taskVersion.trim().length !== 0
            ) {
              return true;
            } else {
              return false;
            }
          };
          TaskFormComponent.prototype.saveTask = function() {
            var _this = this;
            if (!!this.task.taskCode && !!this.task.taskVersion && !!this.task.taskTypeCode) {
              var task = {
                taskCode: this.task.taskCode,
                taskVersion: this.task.taskVersion
              };
              if (
                _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].isNullOrEmpty(
                  this.task.taskCode
                ) ||
                _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].isNullOrEmpty(
                  this.task.taskVersion
                ) ||
                _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].isNullOrEmpty(
                  this.task.taskTypeCode
                )
              ) {
                this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
              } else {
                if (!!task) {
                  if (
                    this.componentData.openMode ===
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Create
                  ) {
                    // creation
                    this.taskFormService.findBireTask(task).subscribe(function(res) {
                      // If task not found, create it
                      if (!res) {
                        _this.save();
                      } else {
                        _this.messageService.showErrorMessage(_this.getTranslateKey('taskAlreadyExists'));
                      }
                    });
                  } else {
                    // updation
                    this.taskFormService.findBireTask(task).subscribe(function(res) {
                      // If task found, update it
                      if (res) {
                        _this.save();
                      } else {
                        _this.messageService.showErrorMessage('global.internalServerError');
                      }
                    });
                  }
                }
              }
            } else {
              this.messageService.showErrorMessage('global.missingFields');
            }
          };
          TaskFormComponent.prototype.changeIsCriticalDynamicAttribute = function() {
            var _this = this;
            this.dynamicAttributesForTask[0].attributes.forEach(function(result, index) {
              _this.dynamicAttributesForTask[0].attributes[index].value = _this.isCritical;
            });
          };
          TaskFormComponent.prototype.save = function() {
            var _this = this;
            this.qualificationAdded.forEach(function(qual) {
              if (!!qual.averageHourRate) {
                var rate = qual.averageHourRate.split(' ');
                qual.averageHourRate = rate[0];
              }
            });
            if (!!this.task.taskCode && !!this.task.taskVersion && !!this.dynamicAttributesForTask) {
              var bireTaskAttributes = this.dynamicAttributesService.toBireTaskAttribute(
                this.task.taskCode,
                this.task.taskVersion,
                this.dynamicAttributesForTask
              );
              var removedItems = __spread(this.maintainedItemRemoved);
              removedItems.forEach(function(item) {
                _this.structureType.forEach(function(str) {
                  if (str.label === item.structureType) {
                    item.structureType = str.value;
                  }
                });
                _this.getTaskItemTypeMap.forEach(function(taskItem) {
                  if (taskItem.label === item.taskItemTypeCode) {
                    item.taskItemTypeCode = taskItem.value;
                  }
                });
              });
              this.createUpdateBireTaskMeasurementList = [];
              this.measurementPointsTableDataSource.dataSrc.forEach(function(mpoint) {
                _this.createUpdateBireTaskMeasurementList.push({
                  counterCode: mpoint.counterCode,
                  taskCode: _this.task.taskCode,
                  taskVersion: _this.task.taskVersion,
                  sequenceNumber: mpoint.sequenceNumber,
                  groupCode: mpoint.groupCode,
                  formula: mpoint.formula,
                  toolPartNumber: mpoint.toolPartNumber,
                  minValue: mpoint.minValue,
                  maxValue: mpoint.maxValue,
                  description: mpoint.description,
                  additionalDescription: mpoint.additionalDescription
                });
              });
              var saveTaskId = {
                bireTaskDTO: this.task,
                bireOperationAddedList: this.operationAdded,
                bireOperationDeletedList: this.operationRemoved,
                bireTaskEvolutionAddedList: this.evolutionAdded,
                bireTaskEvolutionDeletedList: this.evolutionRemoved,
                bireTilTaskAddedList: this.tilAdded,
                bireTilTaskDeletedList: this.tilRemoved,
                bireQualificationAddedList: this.qualificationAdded,
                bireQualificationDeletedList: this.qualificationRemoved,
                bireTaskItemAddedList: this.maintainedItemAdded,
                bireTaskItemDeletedList: removedItems,
                bireDocumentAddedList: this.documentsAdded,
                bireDocumentDeletedList: this.documentsRemoved,
                bireDocumentUpdatedList: this.documentsUpdated,
                bireTaskMeasureAddedList: this.measurementPointsAdded,
                bireTaskAttributeUpdatedList: bireTaskAttributes,
                // TODO: Add a proper list for that
                bireTaskLinkAddedList: this.bireTaskLinkAddedList,
                bireTaskLinkUpdatedList: this.bireTaskLinkUpdatedList,
                bireTaskLinkDeletedList: this.bireTaskLinkDeletedList,
                createUpdateBireTaskMeasurementList: this.createUpdateBireTaskMeasurementList,
                removeBireTaskMeasurementList: this.removeBireTaskMeasurementList
              };
              this.showSaveSpinner = true;
              this.taskFormService.saveTask(saveTaskId).subscribe(
                function(result) {
                  _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnSaveTask'));
                  _this.updateOpenMode(
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read
                  );
                  _this.componentData.objectId = _this.serializationService.serialize(_this.task);
                  _this.refresh();
                  _this.showSaveSpinner = false;
                },
                function(error) {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSaveTask'));
                  _this.showSaveSpinner = false;
                }
              );
            } else {
              _super.prototype.throwUnboundLocalError.call(
                this,
                'saveTask',
                'this.task.taskCode && this.task.taskVersion && this.dynamicAttributesForTask'
              );
            }
          };
          TaskFormComponent.prototype.init = function() {
            this.task = {};
            // Historic popup
            this.showStatusUpdatesPopup = false;
            this.updatesKeyMap = new Map();
            this.keyMap = new Map();
            this.keyMap.set('structureType', this.propertiesService.getValue('getStructureTypeMap'));
            this.keyMap.set('itemType', this.propertiesService.getValue('getItemTypeMap'));
            this.keyMap.set(
              'itemFamilyCode',
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__['GenericPropertyConstants']
                  .ITEM_FAMILY_CODE_MAP
              )
            );
            this.keyMap.set('taskItemTypeCode', this.propertiesService.getValue('getTaskItemTypeMap'));
            this.deleteApi = this.taskHistoryApi.removeBireTaskHistory;
            this.bireTaskLinkAddedList = [];
            this.bireTaskLinkUpdatedList = [];
            this.bireTaskLinkDeletedList = [];
            this.operationAdded = [];
            this.operationRemoved = [];
            this.superiorTaskTable = [];
            this.selectedSuperiorTask = [];
            this.topDownTaskInput = {};
            this.topDownTreeTable = [];
            this.selectedTopDownNodes = [];
            this.selectedTopDownNodesStore = [];
            this.anteriorTable = [];
            this.selectedAnterior = [];
            this.posteriorTable = [];
            this.selectedPosterior = [];
            this.linkedTasksInput = {};
            this.linkedTasksTable = [];
            this.selectedLinkedTasks = [];
            this.documentsAdded = [];
            this.documentsRemoved = [];
            this.documentsUpdated = [];
            this.evolutionAdded = [];
            this.evolutionRemoved = [];
            this.maintainedItemAdded = [];
            this.maintainedItemRemoved = [];
            this.qualificationAdded = [];
            this.qualificationRemoved = [];
            this.tilAdded = [];
            this.tilRemoved = [];
            this.tilName = [];
            this.tilDescription = [];
            this.technicalLevels = undefined;
            this.technicalLevel = [];
            this.createUpdateBireTaskMeasurementList = [];
            this.removeBireTaskMeasurementList = [];
            this.attributeIdValueMap = new Map();
            this.bireAttributesForTask = [];
            this.dynamicAttributesForTask = [];
            this.bireTaskAttributes = [];
            this.getBireAttributesForTask();
            this.getTaskItemTypeMap = [];
            this.getTaskItemTypeMaps();
          };
          TaskFormComponent.prototype.getTaskItemTypeMaps = function() {
            var _this = this;
            this.propertiesService.getValue('getTaskItemTypeMap').subscribe(function(results) {
              _this.getTaskItemTypeMap = results || [];
            });
          };
          TaskFormComponent.prototype.getSubContracting = function(bireTaskDTO) {
            var _this = this;
            this.taskFormService.getSubContracting(bireTaskDTO).subscribe(function(result) {
              _this.subContracting = result || '';
            });
          };
          TaskFormComponent.prototype.loadOperationTable = function(bireTaskDTOId) {
            var _this = this;
            var total = 0;
            this.taskFormService.findBireTaskOperationsByTask(bireTaskDTOId).subscribe(
              function(results) {
                results.forEach(function(res) {
                  res.ope = res.opeCode + '-' + res.opeVersion;
                });
                _this.operationTableDataSource.setData(results || []);
                _this.sortOperationTable();
                results.forEach(function(result) {
                  var cost = result.opeCost != undefined ? Number.parseInt(result.opeCost.toString(), 0) : undefined;
                  if (cost !== undefined) {
                    total = total + cost;
                  }
                });
                _this.totalCost = total;
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFindTaskOperations'));
              }
            );
            this.operationTableDataSource.setData(this.operationTableDataSource.dataSrc);
          };
          TaskFormComponent.prototype.loadAssociatedTasksTables = function(task) {
            var _this = this;
            this.isLoadingTopDownTreeTable = true;
            this.taskFormService.getTaskLinkInAdequate(task).subscribe(function(result) {
              _this.isLoadingTopDownTreeTable = false;
              if (
                !!result.superiorTasks &&
                !!result.taskTreeNode &&
                !!result.anteriorInSequence &&
                !!result.posteriorInSequence &&
                !!result.linkedTasks
              ) {
                _this.convertTaskTypeInTreeNode(result.taskTreeNode);
                _this.setTaskInNodes(result.taskTreeNode);
                _this.currentTaskSelfLink = result.currentTask;
                var superiorTasks = result.superiorTasks;
                superiorTasks.forEach(function(superiorTask) {
                  if (!!superiorTask.bireTaskDTO) {
                    _this.superiorTableDataSource.addData([superiorTask.bireTaskDTO]);
                  } else {
                    _super.prototype.throwUnboundLocalError.call(
                      _this,
                      'loadAssociatedTaskTables',
                      'superiorTask.bireTaskDTO'
                    );
                  }
                });
                superiorTasks.forEach(function(superiorTask) {
                  if (!!superiorTask.bireTaskDTO) {
                    var taskGroup = _this.taskGroups.filter(function(group) {
                      return !!superiorTask.bireTaskDTO && group.value === superiorTask.bireTaskDTO.groupCode;
                    });
                    if (superiorTask.bireTaskDTO.groupCode && taskGroup) {
                      superiorTask.bireTaskDTO.groupCode = taskGroup[0].label;
                    }
                    var taskType = _this.taskTypes.filter(function(type) {
                      return !!superiorTask.bireTaskDTO && type.value === superiorTask.bireTaskDTO.taskTypeCode;
                    });
                    if (superiorTask.bireTaskDTO.taskTypeCode && taskType) {
                      superiorTask.bireTaskDTO.taskTypeCode = taskType[0].label;
                    }
                    var temp = {
                      bireTaskDTO: {
                        taskCode: superiorTask.bireTaskDTO.taskCode,
                        taskVersion: superiorTask.bireTaskDTO.taskVersion,
                        taskDesignation: superiorTask.bireTaskDTO.taskDesignation,
                        groupCode: superiorTask.bireTaskDTO.groupCode,
                        taskTypeCode: superiorTask.bireTaskDTO.taskTypeCode
                      },
                      linkType: superiorTask.linkType,
                      sequenceNumber: superiorTask.sequenceNumber
                    };
                    _this.superiorTaskTable.push(temp);
                  } else {
                    _super.prototype.throwUnboundLocalError.call(
                      _this,
                      'loadAssociatedTaskTables',
                      'superiorTask.bireTaskDTO'
                    );
                  }
                });
                _this.superiorTableDataSource.setData(
                  superiorTasks.map(function(superiorTask) {
                    return superiorTask.bireTaskDTO;
                  })
                );
                _this.topDownTreeTable = [];
                _this.topDownTreeTable.push(result.taskTreeNode);
                _this.topDownTreeTable = __spread(_this.topDownTreeTable);
                _this.topDownTreeTable[0].expanded = true;
                var anteriorTasks = result.anteriorInSequence;
                var anteriorTasksRows_1 = [];
                anteriorTasks.forEach(function(anteriorTask) {
                  if (!!anteriorTask.bireTaskDTO) {
                    var taskGroup = _this.taskGroups.filter(function(group) {
                      return !!anteriorTask.bireTaskDTO && group.value === anteriorTask.bireTaskDTO.groupCode;
                    });
                    if (anteriorTask.bireTaskDTO.groupCode && taskGroup) {
                      anteriorTask.bireTaskDTO.groupCode = taskGroup[0].label;
                    }
                    var taskType = _this.taskTypes.filter(function(type) {
                      return !!anteriorTask.bireTaskDTO && type.value === anteriorTask.bireTaskDTO.taskTypeCode;
                    });
                    if (anteriorTask.bireTaskDTO.taskTypeCode && taskType) {
                      anteriorTask.bireTaskDTO.taskTypeCode = taskType[0].label;
                    }
                    if (!!anteriorTask.sequenceNumber) {
                      anteriorTask.bireTaskDTO.sequenceNumber = anteriorTask.sequenceNumber;
                    }
                    anteriorTasksRows_1.push(anteriorTask.bireTaskDTO);
                    var temp = {
                      bireTaskDTO: {
                        taskCode: anteriorTask.bireTaskDTO.taskCode,
                        taskVersion: anteriorTask.bireTaskDTO.taskVersion,
                        taskDesignation: anteriorTask.bireTaskDTO.taskDesignation,
                        groupCode: anteriorTask.bireTaskDTO.groupCode,
                        taskTypeCode: anteriorTask.bireTaskDTO.taskTypeCode
                      },
                      linkType: anteriorTask.linkType,
                      sequenceNumber: anteriorTask.sequenceNumber,
                      linkedTaskMain: anteriorTask.linkedTaskMain
                    };
                    _this.anteriorTable.push(temp);
                  } else {
                    _super.prototype.throwUnboundLocalError.call(
                      _this,
                      'loadAssociatedTaskTables',
                      'anteriorTask.bireTaskDTO'
                    );
                  }
                });
                _this.anteriorTaskTableDataSource.setData(anteriorTasksRows_1);
                var posteriorTasks = result.posteriorInSequence;
                var posteriorTasksRows_1 = [];
                posteriorTasks.forEach(function(posteriorTask) {
                  if (!!posteriorTask.bireTaskDTO) {
                    var taskGroup = _this.taskGroups.filter(function(group) {
                      return !!posteriorTask.bireTaskDTO && group.value === posteriorTask.bireTaskDTO.groupCode;
                    });
                    if (posteriorTask.bireTaskDTO.groupCode && taskGroup) {
                      posteriorTask.bireTaskDTO.groupCode = taskGroup[0].label;
                    }
                    var taskType = _this.taskTypes.filter(function(type) {
                      return !!posteriorTask.bireTaskDTO && type.value === posteriorTask.bireTaskDTO.taskTypeCode;
                    });
                    if (posteriorTask.bireTaskDTO.taskTypeCode && taskType) {
                      posteriorTask.bireTaskDTO.taskTypeCode = taskType[0].label;
                    }
                    if (!!posteriorTask.sequenceNumber) {
                      posteriorTask.bireTaskDTO.sequenceNumber = posteriorTask.sequenceNumber;
                    }
                    posteriorTasksRows_1.push(posteriorTask.bireTaskDTO);
                    var temp = {
                      bireTaskDTO: {
                        taskCode: posteriorTask.bireTaskDTO.taskCode,
                        taskVersion: posteriorTask.bireTaskDTO.taskVersion,
                        taskDesignation: posteriorTask.bireTaskDTO.taskDesignation,
                        groupCode: posteriorTask.bireTaskDTO.groupCode,
                        taskTypeCode: posteriorTask.bireTaskDTO.taskTypeCode
                      },
                      linkType: posteriorTask.linkType,
                      sequenceNumber: posteriorTask.sequenceNumber,
                      linkedTaskMain: posteriorTask.linkedTaskMain
                    };
                    _this.posteriorTable.push(temp);
                  } else {
                    _super.prototype.throwUnboundLocalError.call(
                      _this,
                      'loadAssociatedTaskTables',
                      'posteriorTask.bireTaskDTO'
                    );
                  }
                });
                _this.posteriorTaskTableDataSource.setData(posteriorTasksRows_1);
                var linkedTasks_1 = result.linkedTasks;
                linkedTasks_1.forEach(function(linkedTask) {
                  if (!!linkedTask.bireTaskDTO) {
                    var taskGroup = _this.taskGroups.filter(function(group) {
                      return !!linkedTask.bireTaskDTO && group.value === linkedTask.bireTaskDTO.groupCode;
                    });
                    if (linkedTask.bireTaskDTO.groupCode && taskGroup && taskGroup.length > 0) {
                      linkedTask.bireTaskDTO.groupCode = taskGroup[0].label;
                    }
                    var taskType = _this.taskTypes.filter(function(type) {
                      return !!linkedTask.bireTaskDTO && type.value === linkedTask.bireTaskDTO.taskTypeCode;
                    });
                    if (linkedTask.bireTaskDTO.taskTypeCode && taskType && taskType.length > 0) {
                      linkedTask.bireTaskDTO.taskTypeCode = taskType[0].label;
                    }
                    var linkType = void 0;
                    if (_this.linked !== undefined && _this.linked.length > 0 && linkedTasks_1.length > 0) {
                      linkType = _modules_purchase_contract_utils_label_value_helper__WEBPACK_IMPORTED_MODULE_2__[
                        'LabelValueHelper'
                      ].getLabelByValue(_this.linked, linkedTask.linkType);
                    }
                    if (!!linkType && !!linkedTask.bireTaskDTO.taskCode && !!linkedTask.bireTaskDTO.taskVersion) {
                      var linkedInput = {
                        linkType: linkType,
                        taskCode: linkedTask.bireTaskDTO.taskCode,
                        taskVersion: linkedTask.bireTaskDTO.taskVersion,
                        taskDesignation: linkedTask.bireTaskDTO.taskDesignation,
                        taskGroup: linkedTask.bireTaskDTO.groupCode,
                        taskType: linkedTask.bireTaskDTO.taskTypeCode
                      };
                      _this.linkedTaskTableDataSource.addData([linkedInput]);
                      var temp = {
                        bireTaskDTO: {
                          taskCode: linkedTask.bireTaskDTO.taskCode,
                          taskVersion: linkedTask.bireTaskDTO.taskVersion,
                          taskDesignation: linkedTask.bireTaskDTO.taskDesignation,
                          groupCode: linkedTask.bireTaskDTO.groupCode,
                          taskTypeCode: linkedTask.bireTaskDTO.taskTypeCode
                        },
                        linkType: linkedTask.linkType,
                        sequenceNumber: linkedTask.sequenceNumber
                      };
                      _this.linkedTasksTable.push(temp);
                    } else {
                      _super.prototype.throwUnboundLocalError.call(
                        _this,
                        'loadAssociatedTaskTables',
                        'linkType && linkedTask.bireTaskDTO.taskCode && linkedTask.bireTaskDTO.taskVersion'
                      );
                    }
                  } else {
                    _super.prototype.throwUnboundLocalError.call(
                      _this,
                      'loadAssociatedTaskTables',
                      'linkedTask.bireTaskDTO'
                    );
                  }
                });
              } else {
                _super.prototype.throwUnboundLocalError.call(
                  _this,
                  'loadAssociatedTasksTables',
                  'result.superiorTasks &&\n           result.taskTreeNode &&\n           result.anteriorInSequence &&\n           result.posteriorInSequence &&\n           result.linkedTasks'
                );
              }
            });
            this.superiorTableDataSource.setData(this.superiorTableDataSource.dataSrc);
            this.linkedTaskTableDataSource.setData(this.linkedTaskTableDataSource.dataSrc);
            // Adding object status if necessary
            if (!!this.task.taskStatus && !this.getLabelValueByValue(this.propertyStatus, this.task.taskStatus)) {
              var currentState = this.getLabelValueByValue(this.propertyObjectStatus, this.task.taskStatus);
              if (currentState) {
                this.taskStatus.unshift(currentState);
                this.updateWorkflowStatusList();
              }
            }
          };
          TaskFormComponent.prototype.getLabelValueByValue = function(references, value) {
            return references.find(function(lv) {
              return lv.value === value;
            });
          };
          TaskFormComponent.prototype.updateWorkflowStatusList = function() {
            this.workflowStatus = _shared_utils_workflow_utils__WEBPACK_IMPORTED_MODULE_38__[
              'WorkflowUtils'
            ].filterWorkflowStatusList(this.userWorkflow, this.taskStatus, this.task.taskStatus);
          };
          TaskFormComponent.prototype.convertTaskTypeInTreeNode = function(node) {
            var _this = this;
            _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_32__['LabelValueUtils'].stringValueToLabel(
              node.data.bireTaskDTO,
              'taskTypeCode',
              this.taskTypes
            );
            if (!!node.children && node.children.length > 0) {
              node.children.forEach(function(child) {
                return _this.convertTaskTypeInTreeNode(child);
              });
            }
          };
          TaskFormComponent.prototype.setTaskInNodes = function(node) {
            var _this = this;
            node.data.bireTaskDTO.task = node.data.bireTaskDTO.taskCode + '-' + node.data.bireTaskDTO.taskVersion;
            if (!!node.children && node.children.length > 0) {
              node.children.forEach(function(child) {
                return _this.setTaskInNodes(child);
              });
            }
          };
          TaskFormComponent.prototype.loadEvolutionsTable = function(bireTaskDTOId) {
            var _this = this;
            this.taskFormService.findBireTaskEvolutionsByTask(bireTaskDTOId).subscribe(function(results) {
              _this.evolutionsTableDataSource.setData(
                _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_33__['ListUtils']
                  .orEmpty(results)
                  .map(function(result) {
                    return _this.createEvolutionRow(result);
                  })
              );
              _this.fillDesignationInEvolutionTable();
            });
            this.evolutionsTableDataSource.setData(this.evolutionsTableDataSource.dataSrc);
          };
          TaskFormComponent.prototype.loadItemsTable = function(bireTaskDTOId) {
            var _this = this;
            this.maintainedItemsTableDataSource.setData([]);
            this.maintainedItemsTableDataSource.isLoading = true;
            this.taskFormService.findBireTaskItemsWithItemByTask(bireTaskDTOId).subscribe(function(results) {
              _this.maintainedItemsTableDataSource.isLoading = false;
              _this.maintainedItemsTableDataSource.setData(
                _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_33__['ListUtils']
                  .orEmpty(results)
                  .map(function(result) {
                    return _this.createMaintainedItemRow(result);
                  })
              );
            });
          };
          TaskFormComponent.prototype.loadShopManualsTable = function(bireTaskDTOId) {
            var _this = this;
            this.taskFormService.findBireSmTasksByTask(bireTaskDTOId).subscribe(
              function(results) {
                _this.shopManualsTableDataSource.setData(results || []);
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFindShopManuals'));
              }
            );
          };
          /**
           * loadMaintenanceProgramsTable() - This function is used to load Maintenance Program Table.
           * @param bireTaskDTOId - Current Task Id
           * @param bireTaskDTO - Current Task
           */
          TaskFormComponent.prototype.loadMaintenanceProgramsTable = function(bireTaskDTOId, bireTaskDTO) {
            var _this = this;
            this.taskFormService.findBireMaintenanceProgramsByTask(bireTaskDTO).subscribe(
              function(results) {
                _this.upgradeButtonVisibility(bireTaskDTOId, results);
                _this.maintenanceProgramsTableDataSource.setData(results || []);
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFindMaintenancePrograms'));
              }
            );
          };
          TaskFormComponent.prototype.loadQualificationsTable = function(bireTaskDTO) {
            var _this = this;
            this.taskFormService.findBireQualificationsBySearchCriteria(bireTaskDTO).subscribe(
              function(results) {
                if (results) {
                  results.list.forEach(function(res) {
                    if (!!res.averageHourRate) {
                      res.averageHourRate = res.averageHourRate + ' ' + _this.currency;
                    }
                  });
                  _this.qualificationsTableDataSource.setData(results.list || []);
                }
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFindQualifications'));
              }
            );
          };
          TaskFormComponent.prototype.loadTilTable = function(bireTaskDTO) {
            var _this = this;
            this.taskFormService.findBireTilTasksByTask(bireTaskDTO).subscribe(
              function(results) {
                _this.tilTableDataSource.setData(results || []);
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFindTilTasks'));
              }
            );
          };
          TaskFormComponent.prototype.loadDocumentsTable = function(bireTaskDTOId) {
            var _this = this;
            this.documentsTableDataSource.setData([]);
            this.documentsTableDataSource.isLoading = true;
            this.taskFormService.findBireDocumentsByTask(bireTaskDTOId).subscribe(
              function(results) {
                _this.documentsTableDataSource.isLoading = false;
                _this.documentsTableDataSource.setData(results || []);
                _this.bireDocumentDisplayed = [];
                _this.documentsTableDataSource.dataSrc.forEach(function(doc) {
                  _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_32__['LabelValueUtils'].stringValueToLabel(
                    doc,
                    'docCategory',
                    _this.documentCategories
                  );
                  _this.bireDocumentDisplayed.push(_this.getCustomDocumentRow(doc));
                });
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFindDocuments'));
              }
            );
          };
          TaskFormComponent.prototype.initOperationTableDataSource = function() {
            this.operationTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'opeSequenceNumber',
                  translateKey: this.getTranslateKey('opeSequenceNumber'),
                  width: '10%'
                },
                {
                  field: 'ope',
                  translateKey: this.getTranslateKey('ope'),
                  width: '20%'
                },
                {
                  field: 'opeVersion',
                  translateKey: this.getTranslateKey('opeVersion'),
                  width: '7.5%'
                },
                {
                  field: 'opeDesignation',
                  translateKey: this.getTranslateKey('opeDesignation'),
                  width: '27.5%'
                },
                {
                  field: 'opeDurationTime',
                  translateKey: this.getTranslateKey('opeDurationTime'),
                  width: '10%'
                },
                {
                  field: 'opeManHour',
                  translateKey: this.getTranslateKey('opeManHour'),
                  width: '7.5%'
                },
                {
                  field: 'opeQualification',
                  translateKey: this.getTranslateKey('opeQualification'),
                  width: '10%'
                },
                {
                  field: 'opeCost',
                  translateKey: this.getTranslateKey('opeCost'),
                  width: '7.5%'
                }
              ],
              data: []
            });
          };
          TaskFormComponent.prototype.initEvolutionsTableDataSource = function() {
            this.evolutionsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'evolutionNumber',
                  translateKey: this.getTranslateKey('evolutionNumber'),
                  width: '20%'
                },
                {
                  field: 'evolutionRevisionNumber',
                  translateKey: this.getTranslateKey('evolutionRevisionNumber'),
                  width: '20%'
                },
                {
                  field: 'designation',
                  translateKey: this.getTranslateKey('designation'),
                  width: '40%'
                },
                {
                  field: 'taskEvolutionTypeCode',
                  translateKey: this.getTranslateKey('taskEvolutionTypeCode'),
                  width: '20%'
                }
              ],
              data: []
            });
          };
          TaskFormComponent.prototype.initMaintainedItemsTableDataSource = function() {
            this.maintainedItemsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'familyVariant',
                  translateKey: this.getTranslateKey('familyVariant'),
                  width: '22.5%'
                },
                {
                  field: 'item',
                  translateKey: this.getTranslateKey('item'),
                  width: '12.5%'
                },
                {
                  field: 'designation',
                  translateKey: this.getTranslateKey('designation'),
                  width: '40%'
                },
                {
                  field: 'versionNumber',
                  translateKey: this.getTranslateKey('versionNumber'),
                  width: '12.5%'
                },
                {
                  field: 'linkType',
                  translateKey: this.getTranslateKey('linkType'),
                  width: '12.5%'
                }
              ],
              data: []
            });
            if (this.sessionService.isSpecificDassault) {
              this.maintainedItemsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__[
                'TableDataSource'
              ]({
                allowMultiSelect: true,
                columns: [
                  {
                    field: 'familyVariant',
                    translateKey: this.getTranslateKey('familyVariant'),
                    width: '12%'
                  },
                  {
                    field: 'item',
                    translateKey: this.getTranslateKey('item'),
                    width: '12%'
                  },
                  {
                    field: 'designation',
                    translateKey: this.getTranslateKey('designation'),
                    width: '40%'
                  },
                  {
                    field: 'versionNumber',
                    translateKey: this.getTranslateKey('versionNumber'),
                    width: '12%'
                  },
                  {
                    field: 'linkType',
                    translateKey: this.getTranslateKey('linkType'),
                    width: '12%'
                  },
                  {
                    field: 'field',
                    translateKey: this.getTranslateKey('field'),
                    width: '12%'
                  }
                ],
                data: []
              });
            }
          };
          TaskFormComponent.prototype.initShopManualsTableDataSource = function() {
            this.shopManualsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'taskCode',
                  translateKey: this.getTranslateKey('taskCode'),
                  width: '20%'
                },
                {
                  field: 'taskDescription',
                  translateKey: this.getTranslateKey('taskDescription'),
                  width: '45%'
                },
                {
                  field: 'smVersionStart',
                  translateKey: this.getTranslateKey('smVersionStart'),
                  width: '17.5%'
                },
                {
                  field: 'smVersionEnd',
                  translateKey: this.getTranslateKey('smVersionEnd'),
                  width: '17.5%'
                }
              ],
              data: []
            });
          };
          TaskFormComponent.prototype.initMaintenanceProgramsTableDataSource = function() {
            this.maintenanceProgramsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'programCode',
                  translateKey: this.getTranslateKey('programCode'),
                  width: '17.5%'
                },
                {
                  field: 'programName',
                  translateKey: this.getTranslateKey('programName'),
                  width: '17.5%'
                },
                {
                  field: 'programRevisionNumber',
                  translateKey: this.getTranslateKey('programRevisionNumber'),
                  width: '17.5%'
                },
                {
                  field: 'programDesignation',
                  translateKey: this.getTranslateKey('programDesignation'),
                  width: '17.5%'
                },
                {
                  field: 'reference',
                  translateKey: this.getTranslateKey('reference'),
                  width: '15%'
                },
                {
                  field: 'periodicity',
                  translateKey: this.getTranslateKey('periodicity'),
                  width: '15%'
                }
              ],
              data: []
            });
          };
          TaskFormComponent.prototype.initQualificationsTableDataSource = function() {
            this.qualificationsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'qualificationCode',
                  translateKey: this.getTranslateKey('qualificationCode'),
                  width: '10%'
                },
                {
                  field: 'qualificationName',
                  translateKey: this.getTranslateKey('qualificationName'),
                  width: '20%'
                },
                {
                  field: 'qualificationDescription',
                  translateKey: this.getTranslateKey('qualificationDescription'),
                  width: '50%'
                },
                {
                  field: 'averageHourRate',
                  translateKey: this.getTranslateKey('averageHourRate'),
                  width: '20%'
                }
              ],
              data: []
            });
          };
          TaskFormComponent.prototype.initTilTableDataSource = function() {
            this.tilTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'tilName',
                  translateKey: this.getTranslateKey('tilName'),
                  width: '25%'
                },
                {
                  field: 'tilDescription',
                  translateKey: this.getTranslateKey('tilDescription'),
                  width: '75%'
                }
              ],
              data: []
            });
          };
          TaskFormComponent.prototype.initDocumentsTableDataSource = function() {
            this.documentsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'docName',
                  translateKey: this.getTranslateKey('docName'),
                  width: '37.5%'
                },
                {
                  field: 'docCategory',
                  translateKey: this.getTranslateKey('docCategory'),
                  width: '10.5%'
                },
                {
                  field: 'docSource',
                  translateKey: this.getTranslateKey('docSource'),
                  width: '20.5%'
                },
                {
                  field: 'docExtension',
                  translateKey: this.getTranslateKey('docExtension'),
                  width: '10.5%'
                },
                {
                  field: 'docSize',
                  translateKey: this.getTranslateKey('docSize'),
                  width: '10.5%'
                },
                {
                  field: 'docPublicationDate',
                  translateKey: this.getTranslateKey('docPublicationDate'),
                  width: '10.5%'
                }
              ],
              data: []
            });
          };
          TaskFormComponent.prototype.initMeasurementPointsTableDataSource = function() {
            this.measurementPointsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'counterCode',
                  translateKey: this.getTranslateKey('measureCode'),
                  width: '10%'
                },
                {
                  field: 'counterRemarks',
                  translateKey: this.getTranslateKey('mpTitle'),
                  width: '10%'
                },
                {
                  field: 'description',
                  translateKey: this.getTranslateKey('mpDescription'),
                  width: '30%'
                },
                {
                  field: 'unitCode',
                  translateKey: this.getTranslateKey('unit'),
                  width: '10%'
                },
                {
                  field: 'toolPartNumber',
                  translateKey: this.getTranslateKey('tool'),
                  width: '10%'
                },
                {
                  field: 'formula',
                  translateKey: this.getTranslateKey('formula'),
                  width: '10%'
                },
                {
                  field: 'sequenceNumber',
                  translateKey: this.getTranslateKey('sequence'),
                  width: '10%'
                },
                {
                  field: 'groupCode',
                  translateKey: this.getTranslateKey('mpGroup'),
                  width: '10%'
                }
              ],
              data: []
            });
          };
          TaskFormComponent.prototype.initSuperiorTableDataSource = function() {
            this.superiorTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'taskCode',
                  translateKey: this.getTranslateKey('taskCode'),
                  width: '20%'
                },
                {
                  field: 'taskVersion',
                  translateKey: this.getTranslateKey('taskVersion'),
                  width: '7.5%'
                },
                {
                  field: 'taskDesignation',
                  translateKey: this.getTranslateKey('taskDesignation'),
                  width: '47.5%'
                },
                {
                  field: 'groupCode',
                  translateKey: this.getTranslateKey('groupCode'),
                  width: '12.5%'
                },
                {
                  field: 'taskTypeCode',
                  translateKey: this.getTranslateKey('taskTypeCode'),
                  width: '12.5%'
                }
              ],
              data: []
            });
          };
          TaskFormComponent.prototype.initAnteriorTaskTableDataSource = function() {
            this.anteriorTaskTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'taskCode',
                  translateKey: this.getTranslateKey('taskCode'),
                  width: '20%'
                },
                {
                  field: 'taskVersion',
                  translateKey: this.getTranslateKey('taskVersion'),
                  width: '7.5%'
                },
                {
                  field: 'taskDesignation',
                  translateKey: this.getTranslateKey('taskDesignation'),
                  width: '37.5%'
                },
                {
                  field: 'groupCode',
                  translateKey: this.getTranslateKey('groupCode'),
                  width: '12.5%'
                },
                {
                  field: 'taskTypeCode',
                  translateKey: this.getTranslateKey('taskTypeCode'),
                  width: '12.5%'
                },
                {
                  field: 'sequenceNumber',
                  translateKey: this.getTranslateKey('sequenceNumber'),
                  width: '10%'
                }
              ],
              data: []
            });
          };
          TaskFormComponent.prototype.initPosteriorTaskTableDataSource = function() {
            this.posteriorTaskTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'taskCode',
                  translateKey: this.getTranslateKey('taskCode'),
                  width: '20%'
                },
                {
                  field: 'taskVersion',
                  translateKey: this.getTranslateKey('taskVersion'),
                  width: '7.5%'
                },
                {
                  field: 'taskDesignation',
                  translateKey: this.getTranslateKey('taskDesignation'),
                  width: '37.5%'
                },
                {
                  field: 'groupCode',
                  translateKey: this.getTranslateKey('groupCode'),
                  width: '12.5%'
                },
                {
                  field: 'taskTypeCode',
                  translateKey: this.getTranslateKey('taskTypeCode'),
                  width: '12.5%'
                },
                {
                  field: 'sequenceNumber',
                  translateKey: this.getTranslateKey('sequenceNumber'),
                  width: '10%'
                }
              ],
              data: []
            });
          };
          TaskFormComponent.prototype.initLinkedTaskTableDataSource = function() {
            this.linkedTaskTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'taskCode',
                  translateKey: this.getTranslateKey('taskCode'),
                  width: '20%'
                },
                {
                  field: 'taskVersion',
                  translateKey: this.getTranslateKey('taskVersion'),
                  width: '7.5%'
                },
                {
                  field: 'taskDesignation',
                  translateKey: this.getTranslateKey('taskDesignation'),
                  width: '35%'
                },
                {
                  field: 'taskGroup',
                  translateKey: this.getTranslateKey('taskGroup'),
                  width: '12.5%'
                },
                {
                  field: 'taskType',
                  translateKey: this.getTranslateKey('taskType'),
                  width: '12.5%'
                },
                {
                  field: 'linkType',
                  translateKey: this.getTranslateKey('linkType'),
                  width: '12.5%'
                }
              ],
              data: []
            });
          };
          TaskFormComponent.prototype.setTableCols = function() {
            this.topDownTaskStructureTableCols = [
              { field: 'taskCode', alignment: 'left', width: '20%' },
              { field: 'taskVersion', alignment: 'left', width: '7.5%' },
              { field: 'taskDesignation', alignment: 'left', width: '37.5%' },
              { field: 'groupCode', alignment: 'left', width: '12.5%' },
              { field: 'taskTypeCode', alignment: 'left', width: '12.5%' },
              { field: 'sequenceNumber', alignment: 'right', width: '10%' }
            ];
          };
          TaskFormComponent.prototype.loadMROCenter = function() {
            var _this = this;
            this.taskSearchService.findMROCenter().subscribe(
              function(results) {
                _this.mroCenters = results || [];
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorONGetMROCenter'));
              }
            );
          };
          TaskFormComponent.prototype.loadTaskType = function() {
            var _this = this;
            this.propertiesService.getValue('getTaskTypeMap').subscribe(
              function(results) {
                _this.taskTypes = results || [];
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('.errorOnGetTaskTypes'));
              }
            );
          };
          TaskFormComponent.prototype.loadDocumentTaskCategories = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__['GenericPropertyConstants']
                  .DOC_TASK_CATEGORY_MAP
              )
              .subscribe(
                function(results) {
                  _this.documentCategories = results || [];
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('.errorOnGetDocumentTaskCategories'));
                }
              );
          };
          TaskFormComponent.prototype.loadStatus = function() {
            var _this = this;
            this.propertiesService.getValue('getFuncObjectStatusMap').subscribe(
              function(results) {
                _this.statuses = results || [];
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('.errorOnGetStatuses'));
              }
            );
            this.taskFormService.getFuncObjectStatusMap().subscribe(function(results) {
              _this.propertyStatus = results;
              _this.taskStatus = __spread(results);
              _this.updateWorkflowStatusList();
            });
            this.taskFormService.getObjectStatusMap().subscribe(
              function(results) {
                _this.propertyObjectStatus = results;
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetObjectStatus'));
              }
            );
          };
          TaskFormComponent.prototype.loadApplicability = function() {
            var _this = this;
            this.propertiesService.getValue('getTaskApplicabilityCodeMap').subscribe(
              function(results) {
                _this.applicabilities = results || [];
                _this.task.taskApplicabilityCode = results[0].value;
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('.errorOnGetApplicabilities'));
              }
            );
          };
          TaskFormComponent.prototype.loadTaskGroup = function() {
            var _this = this;
            this.taskSearchService.getTaskGroups().subscribe(
              function(results) {
                _this.taskGroups =
                  results.filter(function(taskGroup) {
                    return taskGroup.value != undefined;
                  }) || [];
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetTaskGroups'));
              }
            );
          };
          TaskFormComponent.prototype.loadLinkTypes = function() {
            var _this = this;
            this.propertiesService.getValue('getTaskEvolutionTypeMap').subscribe(
              function(results) {
                _this.evolutionLinkTypes = results || [];
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('.errorOnGetEvolutionLinkTypes'));
              }
            );
            this.propertiesService.getValue('getTaskItemTypeMap').subscribe(
              function(results) {
                _this.itemLinkTypes = results || [];
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('.errorOnGetEvolutionLinkTypes'));
              }
            );
          };
          TaskFormComponent.prototype.loadAssociatedTaskLinkTypes = function() {
            var _this = this;
            this.propertiesService.getValue('getTaskLinkMap').subscribe(
              function(results) {
                if (_this.translateService.currentLang === 'en') {
                  var linkType = {
                    label: 'Download Structure',
                    value: '7'
                  };
                  results.push(linkType);
                } else {
                  var linkType = {
                    label: 'Structure descendante',
                    value: '7'
                  };
                  results.push(linkType);
                }
                _this.associatedLinkTypes = results || [];
                _this.superior = _this.associatedLinkTypes.filter(function(type) {
                  return type.value === '3';
                });
                _this.topDown = _this.associatedLinkTypes.filter(function(type) {
                  return type.value === '7';
                });
                _this.anterior = _this.associatedLinkTypes.filter(function(type) {
                  return type.value === '1';
                });
                _this.posterior = _this.associatedLinkTypes.filter(function(type) {
                  return type.value === '2';
                });
                _this.linked = _this.associatedLinkTypes.filter(function(type) {
                  return type.value === '4' || type.value === '5' || type.value === '6';
                });
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('.errorOnGetEvolutionLinkTypes'));
              }
            );
          };
          TaskFormComponent.prototype.loadStructureTypes = function() {
            var _this = this;
            this.propertiesService.getValue('getStructureTypeMap').subscribe(
              function(results) {
                _this.structureType = results || [];
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLoadStructureType'));
              }
            );
          };
          /*************************************************************************
           * Task Fields tab
           *************************************************************************/
          TaskFormComponent.prototype.openTaskFieldsTab = function() {
            this.currentTabId = this.tabTaskFieldsId;
          };
          /*************************************************************************
           * Task Card tab
           *************************************************************************/
          TaskFormComponent.prototype.openTaskCardTab = function() {
            this.currentTabId = this.tabTaskCardId;
            this.openStructureTab();
          };
          // Operation table
          TaskFormComponent.prototype.createOperation = function() {
            this.currentOperation = undefined;
            this.isReadOnlyOperationDialog = false;
            this.showOperationDialog = true;
          };
          TaskFormComponent.prototype.openOperation = function() {
            if (this.operationTableDataSource.dataSelectionCount === 1) {
              this.currentOperation = this.operationTableDataSource.dataSelection[0];
              this.currentOperationIndex = undefined;
              this.isReadOnlyOperationDialog = true;
              this.showOperationFormDialog = true;
            }
          };
          TaskFormComponent.prototype.openEditOperationDialog = function() {
            if (this.operationTableDataSource.dataSelectionCount === 1) {
              this.currentOperation = this.operationTableDataSource.dataSelection[0];
              this.currentOperationIndex = undefined;
              this.isReadOnlyOperationDialog = false;
              this.showOperationFormDialog = true;
            }
          };
          TaskFormComponent.prototype.openOperationForm = function(operation) {
            // open operation form when operation screen is ready
            if (!!operation && !!operation.opeCode && !!operation.opeVersion && !!operation.rangeCode) {
              var operationFormId = {
                opeCode: operation.opeCode,
                opeVersion: operation.opeVersion,
                rangeCode: operation.rangeCode
              };
              var labelKey = 'transaction.OperationFormComponent';
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
                    .ENG_OPERATION_FORM,
                objectId: this.serializationService.serialize(operationFormId),
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read,
                opeCode: operation.opeCode,
                opeVersion: operation.opeVersion,
                rangeCode: operation.rangeCode
              };
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          TaskFormComponent.prototype.deleteOperation = function() {
            var _this = this;
            var partialMessageKey =
              this.operationTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedOperations'
                : 'confirmDeleteSelectedOperation';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.operationTableDataSource.dataSelection.forEach(function(operation) {
                  if (!!operation.rangeCode && !!operation.opeCode && !!operation.opeVersion) {
                    var operationId = {
                      rangeCode: operation.rangeCode,
                      opeCode: operation.opeCode,
                      opeVersion: operation.opeVersion
                    };
                    var operationsAddedWithoutSelection = _this.operationAdded.filter(function(operationAdded) {
                      return !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireOperationDTO(
                        operation,
                        operationAdded
                      );
                    });
                    if (_this.operationAdded.length !== operationsAddedWithoutSelection.length) {
                      _this.operationAdded = operationsAddedWithoutSelection;
                    } else {
                      _this.operationRemoved.push(operationId);
                    }
                  } else {
                    _super.prototype.throwUnboundLocalError.call(
                      _this,
                      'deleteOperation',
                      'operation.rangeCode && operation.opeCode && operation.opeVersion'
                    );
                  }
                });
                _this.operationTableDataSource.dataSrc.filter(function(operation) {
                  return !_this.operationTableDataSource.dataSelection.some(function(selOperation) {
                    return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireOperationDTO(
                      operation,
                      selOperation
                    );
                  });
                });
                _this.sortOperationTable();
                _this.operationTableDataSource.deleteData(_this.operationTableDataSource.dataSelection);
                _this.operationTableDataSource.setData(_this.operationTableDataSource.dataSrc);
                _this.operationTableDataSource.dataSelection = [];
              }
            });
          };
          // Structure tab
          TaskFormComponent.prototype.openStructureTab = function() {
            this.currentSubTabId = this.tabStructureId;
          };
          // 1. Superior task table
          TaskFormComponent.prototype.createSuperiorTask = function() {
            this.currentSuperiorTask = undefined;
            this.isReadOnlySuperiorTasksDialog = false;
            this.showSuperiorTasksDialog = true;
          };
          TaskFormComponent.prototype.editSuperiorTask = function() {
            var _this = this;
            if (this.superiorTableDataSource.dataSelectionCount === 1) {
              this.currentSuperiorTaskIndex = this.superiorTableDataSource.dataSrc.findIndex(function(superior) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                  superior,
                  _this.superiorTableDataSource.dataSelection[0]
                );
              });
              var selectedsuperior_1 = __assign({}, this.superiorTableDataSource.dataSelection[0]);
              var inSuperiorTable = this.superiorTaskTable.filter(function(superior) {
                return superior.bireTaskDTO.taskCode === selectedsuperior_1.taskCode;
              });
              var linkedSuperior = {
                bireTaskDTO: selectedsuperior_1,
                linkType: undefined,
                sequenceNumber: inSuperiorTable[0].sequenceNumber
              };
              var superiorTask = this.superiorTaskTable.filter(function(task) {
                if (!!task.bireTaskDTO) {
                  _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                    task.bireTaskDTO,
                    selectedsuperior_1
                  );
                }
              });
              if (superiorTask.length > 0 && superiorTask[0] !== null && superiorTask[0] !== undefined) {
                linkedSuperior.linkType = superiorTask[0].linkType;
                linkedSuperior.sequenceNumber = superiorTask[0].sequenceNumber;
              }
              this.currentSuperiorTask = __assign({}, linkedSuperior);
              var taskType = this.taskTypes.filter(function(type) {
                return (
                  !!_this.currentSuperiorTask &&
                  !!_this.currentSuperiorTask.bireTaskDTO &&
                  type.label === _this.currentSuperiorTask.bireTaskDTO.taskTypeCode
                );
              });
              if (taskType[0]) {
                this.currentSuperiorTask.bireTaskDTO.taskTypeCode = taskType[0].value;
              }
              var taskGroup = this.taskGroups.filter(function(group) {
                return (
                  !!_this.currentSuperiorTask &&
                  !!_this.currentSuperiorTask.bireTaskDTO &&
                  group.label === _this.currentSuperiorTask.bireTaskDTO.groupCode
                );
              });
              if (taskGroup[0]) {
                this.currentSuperiorTask.bireTaskDTO.groupCode = taskGroup[0].value;
              }
              this.isReadOnlySuperiorTasksDialog = false;
              this.showSuperiorTasksDialog = true;
              this.superiorTableDataSource.setData(this.superiorTableDataSource.dataSrc);
            }
          };
          TaskFormComponent.prototype.openSuperiorTask = function() {
            var _this = this;
            if (this.superiorTableDataSource.dataSelectionCount === 1) {
              var selectedsuperior_2 = __assign({}, this.superiorTableDataSource.dataSelection[0]);
              var inSuperiorTable = this.superiorTaskTable.filter(function(superior) {
                return superior.bireTaskDTO.taskCode === selectedsuperior_2.taskCode;
              });
              var linkedSuperior = {
                bireTaskDTO: selectedsuperior_2,
                linkType: undefined,
                sequenceNumber: inSuperiorTable[0].sequenceNumber
              };
              var superiorTask = this.superiorTaskTable.filter(function(task) {
                if (!!task.bireTaskDTO) {
                  _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                    task.bireTaskDTO,
                    selectedsuperior_2
                  );
                }
              });
              if (!!superiorTask && !!superiorTask[0]) {
                linkedSuperior.linkType = superiorTask[0].linkType;
                linkedSuperior.sequenceNumber = superiorTask[0].sequenceNumber;
              }
              this.currentSuperiorTask = __assign({}, linkedSuperior);
              var taskType = this.taskTypes.filter(function(type) {
                return (
                  !!_this.currentSuperiorTask &&
                  !!_this.currentSuperiorTask.bireTaskDTO &&
                  type.label === _this.currentSuperiorTask.bireTaskDTO.taskTypeCode
                );
              });
              if (taskType[0]) {
                this.currentSuperiorTask.bireTaskDTO.taskTypeCode = taskType[0].value;
              }
              var taskGroup = this.taskGroups.filter(function(group) {
                return (
                  !!_this.currentSuperiorTask &&
                  !!_this.currentSuperiorTask.bireTaskDTO &&
                  group.label === _this.currentSuperiorTask.bireTaskDTO.groupCode
                );
              });
              if (taskGroup[0]) {
                this.currentSuperiorTask.bireTaskDTO.groupCode = taskGroup[0].value;
              }
              this.isReadOnlySuperiorTasksDialog = true;
              this.showSuperiorTasksDialog = true;
            }
          };
          TaskFormComponent.prototype.openTaskForm = function(task) {
            var labelKey = 'transaction.TaskFormComponent';
            var taskId = {
              taskCode: task.taskCode,
              taskVersion: task.taskVersion
            };
            var data = {
              id: this.tabService.generateId(),
              componentId: 'TaskFormComponent',
              objectId: this.serializationService.serialize(taskId),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          TaskFormComponent.prototype.deleteSuperiorTask = function() {
            var _this = this;
            var partialMessageKey =
              this.selectedSuperiorTask.length > 1
                ? 'confirmDeleteSelectedSuperiorTasks'
                : 'confirmDeleteSelectedSuperiorTask';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.superiorTableDataSource.dataSelection.forEach(function(task) {
                  if (
                    !!task &&
                    !!task.taskCode &&
                    !!task.taskVersion &&
                    !!_this.task &&
                    !!_this.task.taskCode &&
                    !!_this.task.taskVersion
                  ) {
                    var temp = {
                      birTaskCode: task.taskCode,
                      birTaskVersion: task.taskVersion,
                      taskCode: _this.task.taskCode,
                      taskVersion: _this.task.taskVersion
                    };
                    var tasksAddedWithoutSelection = _this.bireTaskLinkAddedList.filter(function(taskAdded) {
                      return taskAdded.birTaskCode === task.taskCode && taskAdded.birTaskVersion === task.taskVersion;
                    });
                    if (_this.bireTaskLinkAddedList.length !== tasksAddedWithoutSelection.length) {
                      _this.bireTaskLinkAddedList = tasksAddedWithoutSelection;
                    } else {
                      _this.bireTaskLinkDeletedList.push(temp);
                    }
                    _this.superiorTableDataSource.setData(
                      _this.superiorTableDataSource.dataSrc.filter(function(element) {
                        return !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                          element,
                          task
                        );
                      })
                    );
                  } else {
                    _super.prototype.throwUnboundLocalError.call(_this, 'deleteSuperiorTask', 'task && Task');
                  }
                });
                _this.superiorTableDataSource.dataSelection = [];
              }
            });
          };
          // 2. Top-down Tasks Structure table
          TaskFormComponent.prototype.onRowSelected = function(node) {
            this.deactivePartialSelection(node);
            this.selectedTopDownNodesStore.push(node);
            this.selectedTopDownNodes = __spread(this.selectedTopDownNodesStore);
            this.topDownTreeTable = __spread(this.topDownTreeTable);
            this.topDownTreeTable[0].expanded = true;
            this.selectedTopDownNodes = __spread(this.selectedTopDownNodes);
          };
          TaskFormComponent.prototype.onRowUnSelected = function(node) {
            this.deactivePartialSelection(node);
            this.selectedTopDownNodesStore = this.selectedTopDownNodesStore.filter(function(value) {
              return value !== node;
            });
            this.selectedTopDownNodes = __spread(this.selectedTopDownNodesStore);
            this.topDownTreeTable = __spread(this.topDownTreeTable);
            this.selectedTopDownNodes = __spread(this.selectedTopDownNodes);
          };
          TaskFormComponent.prototype.deactivePartialSelection = function(node) {
            if (node.parent != undefined) {
              node.parent.partialSelected = false;
              this.deactivePartialSelection(node.parent);
            }
          };
          TaskFormComponent.prototype.createTopDownTask = function() {
            this.currentTopDownTask = undefined;
            this.newQualification = true;
            this.isReadOnlyTopDownTasksDialog = false;
            this.showTopDownTasksDialog = true;
          };
          TaskFormComponent.prototype.editTopDownTask = function() {
            if (this.selectedTopDownNodes.length === 1) {
              this.newQualification = false;
              this.currentTopDownTask = __assign({}, this.selectedTopDownNodes[0].data);
              if (!!this.currentTopDownTask) {
                var bTaskDTO = __assign({}, this.currentTopDownTask.bireTaskDTO);
                _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_32__['LabelValueUtils'].labelToStringValue(
                  bTaskDTO,
                  'taskTypeCode',
                  this.taskTypes
                );
                this.currentTopDownTask.bireTaskDTO = bTaskDTO;
                this.currentTopDownTask.linkType = '3';
                if (
                  !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_34__['ObjectUtils'].isDefined(
                    this.selectedTopDownNodes[0].parent
                  )
                ) {
                  this.currentTopDownTask.linkType = TaskFormComponent_1.TASK_LINK_CODE_SELF;
                }
                this.isReadOnlyTopDownTasksDialog = false;
                this.showTopDownTasksDialog = true;
              } else {
                _super.prototype.throwUnboundLocalError.call(this, 'editTopDownTask', 'this.currentTopDownTask');
              }
            }
          };
          TaskFormComponent.prototype.openTopDownTask = function() {
            if (this.selectedTopDownNodes.length === 1) {
              this.currentTopDownTask = __assign({}, this.selectedTopDownNodes[0].data);
              if (!!this.currentTopDownTask) {
                var bTaskDTO = __assign({}, this.currentTopDownTask.bireTaskDTO);
                _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_32__['LabelValueUtils'].labelToStringValue(
                  bTaskDTO,
                  'taskTypeCode',
                  this.taskTypes
                );
                this.currentTopDownTask.bireTaskDTO = bTaskDTO;
                this.currentTopDownTask.linkType = '3';
                this.isReadOnlyTopDownTasksDialog = true;
                this.showTopDownTasksDialog = true;
              } else {
                _super.prototype.throwUnboundLocalError.call(this, 'openTopDownTask', 'this.currentTopDownTask');
              }
            }
          };
          TaskFormComponent.prototype.deleteTopDownTask = function() {
            var _this = this;
            var partialMessageKey =
              this.selectedTopDownNodes.length > 1
                ? 'confirmDeleteSelectedTopDownTasks'
                : 'confirmDeleteSelectedTopDownTask';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                if (!!_this.selectedTopDownNodes) {
                  var selectedNode_1 = _this.selectedTopDownNodes[0];
                  if (!!selectedNode_1.parent) {
                    var parentOfSelectedNode = selectedNode_1.parent;
                    var siblingsOfSelectedNode = parentOfSelectedNode.children;
                    var inAddedList = _this.bireTaskLinkAddedList.some(function(task) {
                      return task.birTaskCode === _this.selectedTopDownNodes[0].data.bireTaskDTO.taskCode;
                    });
                    if (inAddedList) {
                      _this.bireTaskLinkAddedList = _this.bireTaskLinkAddedList.filter(function(task) {
                        return task.birTaskCode !== _this.selectedTopDownNodes[0].data.bireTaskDTO.taskCode;
                      });
                    }
                    siblingsOfSelectedNode =
                      siblingsOfSelectedNode &&
                      siblingsOfSelectedNode.filter(function(sibling) {
                        return sibling.data.bireTaskDTO.taskCode !== selectedNode_1.data.bireTaskDTO.taskCode;
                      });
                    var taskTaskId = {
                      birTaskCode: selectedNode_1.data.bireTaskDTO.taskCode,
                      birTaskVersion: selectedNode_1.data.bireTaskDTO.taskVersion,
                      taskCode: selectedNode_1.parent.data.bireTaskDTO.taskCode,
                      taskVersion: selectedNode_1.parent.data.bireTaskDTO.taskVersion
                    };
                    _this.bireTaskLinkDeletedList.push(taskTaskId);
                    parentOfSelectedNode.children = siblingsOfSelectedNode;
                    selectedNode_1.parent = parentOfSelectedNode;
                    _this.selectedTopDownNodes = [];
                    _this.selectedTopDownNodesStore = [];
                    _this.topDownTreeTable = __spread(_this.topDownTreeTable);
                    _this.topDownTreeTable[0].expanded = true;
                  }
                }
              }
            });
          };
          // Other links tab
          TaskFormComponent.prototype.openOtherLinksTab = function() {
            this.currentSubTabId = this.tabOtherLinksId;
          };
          // 1. Anterior table
          TaskFormComponent.prototype.createAnterior = function() {
            this.currentAnterior = undefined;
            this.isReadOnlyAnteriorDialog = false;
            this.showAnteriorTasksDialog = true;
          };
          TaskFormComponent.prototype.editAnterior = function() {
            var _this = this;
            if (this.anteriorTaskTableDataSource.dataSelectionCount === 1) {
              this.currentAnteriorIndex = this.anteriorTaskTableDataSource.dataSrc.findIndex(function(anterior) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                  anterior,
                  _this.anteriorTaskTableDataSource.dataSelection[0]
                );
              });
              var selectedAnterior_1 = __assign({}, this.anteriorTaskTableDataSource.dataSelection[0]);
              var inAnteriorTable = this.anteriorTable.filter(function(anterior) {
                return anterior.bireTaskDTO.taskCode === selectedAnterior_1.taskCode;
              });
              var linkedAnterior = {
                bireTaskDTO: selectedAnterior_1,
                linkType: undefined,
                sequenceNumber: inAnteriorTable[0].sequenceNumber
              };
              var anteriorTask = this.anteriorTable.filter(function(task) {
                if (!!task.bireTaskDTO) {
                  _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                    task.bireTaskDTO,
                    selectedAnterior_1
                  );
                }
              });
              if (!!anteriorTask && !!anteriorTask[0]) {
                linkedAnterior.linkType = anteriorTask[0].linkType;
                linkedAnterior.sequenceNumber = anteriorTask[0].sequenceNumber;
              }
              this.currentAnterior = __assign({}, linkedAnterior);
              var taskType = this.taskTypes.filter(function(type) {
                return (
                  !!_this.currentAnterior &&
                  !!_this.currentAnterior.bireTaskDTO &&
                  type.label === _this.currentAnterior.bireTaskDTO.taskTypeCode
                );
              });
              if (taskType[0]) {
                this.currentAnterior.bireTaskDTO.taskTypeCode = taskType[0].value;
              }
              var taskGroup = this.taskGroups.filter(function(group) {
                return (
                  !!_this.currentAnterior &&
                  !!_this.currentAnterior.bireTaskDTO &&
                  group.label === _this.currentAnterior.bireTaskDTO.groupCode
                );
              });
              if (taskGroup[0]) {
                this.currentAnterior.bireTaskDTO.groupCode = taskGroup[0].value;
              }
              this.isReadOnlyAnteriorDialog = false;
              this.showAnteriorTasksDialog = true;
            }
          };
          TaskFormComponent.prototype.openAnterior = function() {
            var _this = this;
            if (this.anteriorTaskTableDataSource.dataSelectionCount === 1) {
              var selectedAnterior_2 = __assign({}, this.anteriorTaskTableDataSource.dataSelection[0]);
              var inAnteriorTable = this.anteriorTable.filter(function(anterior) {
                return anterior.bireTaskDTO.taskCode === selectedAnterior_2.taskCode;
              });
              var linkedAnterior = {
                bireTaskDTO: selectedAnterior_2,
                linkType: undefined,
                sequenceNumber: inAnteriorTable[0].sequenceNumber
              };
              var anteriorTask = this.anteriorTable.filter(function(task) {
                if (!!task.bireTaskDTO) {
                  _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                    task.bireTaskDTO,
                    selectedAnterior_2
                  );
                }
              });
              if (!!anteriorTask && !!anteriorTask[0]) {
                linkedAnterior.linkType = anteriorTask[0].linkType;
                linkedAnterior.sequenceNumber = anteriorTask[0].sequenceNumber;
              }
              this.currentAnterior = __assign({}, linkedAnterior);
              var taskType = this.taskTypes.filter(function(type) {
                return (
                  !!_this.currentAnterior &&
                  !!_this.currentAnterior.bireTaskDTO &&
                  type.label === _this.currentAnterior.bireTaskDTO.taskTypeCode
                );
              });
              if (taskType[0]) {
                this.currentAnterior.bireTaskDTO.taskTypeCode = taskType[0].value;
              }
              var taskGroup = this.taskGroups.filter(function(group) {
                return (
                  !!_this.currentAnterior &&
                  !!_this.currentAnterior.bireTaskDTO &&
                  group.label === _this.currentAnterior.bireTaskDTO.groupCode
                );
              });
              if (taskGroup[0]) {
                this.currentAnterior.bireTaskDTO.groupCode = taskGroup[0].value;
              }
              this.isReadOnlyAnteriorDialog = true;
              this.showAnteriorTasksDialog = true;
            }
          };
          TaskFormComponent.prototype.getLinkTaskByTask = function(linkedTaskTable, selectedAnterior) {
            return linkedTaskTable.find(function(task) {
              return (
                !!task.bireTaskDTO &&
                _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                  task.bireTaskDTO,
                  selectedAnterior
                )
              );
            });
          };
          TaskFormComponent.prototype.deleteAnterior = function() {
            var _this = this;
            var partialMessageKey =
              this.selectedAnterior.length > 1 ? 'confirmDeleteSelectedAnteriors' : 'confirmDeleteSelectedAnterior';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.anteriorTaskTableDataSource.dataSelection.forEach(function(task) {
                  if (
                    !!task &&
                    !!_this.task &&
                    !!task.taskCode &&
                    !!task.taskVersion &&
                    !!_this.task.taskCode &&
                    !!_this.task.taskVersion
                  ) {
                    var temp = {
                      birTaskCode: task.taskCode,
                      birTaskVersion: task.taskVersion,
                      taskCode: _this.task.taskCode,
                      taskVersion: _this.task.taskVersion
                    };
                    var anteriorTask = _this.getLinkTaskByTask(_this.anteriorTable, task);
                    if (anteriorTask && anteriorTask.linkedTaskMain) {
                      temp = {
                        birTaskCode: _this.task.taskCode,
                        birTaskVersion: _this.task.taskVersion,
                        taskCode: task.taskCode,
                        taskVersion: task.taskVersion
                      };
                    }
                    var tasksAddedWithoutSelection = _this.bireTaskLinkAddedList.filter(function(taskAdded) {
                      return taskAdded.birTaskCode === task.taskCode && taskAdded.birTaskVersion === task.taskVersion;
                    });
                    if (_this.bireTaskLinkAddedList.length !== tasksAddedWithoutSelection.length) {
                      _this.bireTaskLinkAddedList = tasksAddedWithoutSelection;
                    } else {
                      _this.bireTaskLinkDeletedList.push(temp);
                    }
                    _this.anteriorTaskTableDataSource.setData(
                      _this.anteriorTaskTableDataSource.dataSrc.filter(function(element) {
                        return !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                          element,
                          task
                        );
                      })
                    );
                  } else {
                    _super.prototype.throwUnboundLocalError.call(_this, 'deleteAnterior', 'task && this.task');
                  }
                });
                _this.anteriorTaskTableDataSource.dataSelection = [];
              }
            });
          };
          // 2. Posterior table
          TaskFormComponent.prototype.createPosterior = function() {
            this.currentPosterior = undefined;
            this.isReadOnlyPosteriorDialog = false;
            this.showPosteriorDialog = true;
          };
          TaskFormComponent.prototype.editPosterior = function() {
            var _this = this;
            if (this.posteriorTaskTableDataSource.dataSelectionCount === 1) {
              this.currentPosteriorIndex = this.posteriorTaskTableDataSource.dataSrc.findIndex(function(posterior) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                  posterior,
                  _this.posteriorTaskTableDataSource.dataSelection[0]
                );
              });
              var selectedPosterior_1 = __assign({}, this.posteriorTaskTableDataSource.dataSelection[0]);
              var inPosteriorTable = this.posteriorTable.filter(function(posterior) {
                return posterior.bireTaskDTO.taskCode === selectedPosterior_1.taskCode;
              });
              var linkedPosterior = {
                bireTaskDTO: selectedPosterior_1,
                linkType: undefined,
                sequenceNumber: inPosteriorTable[0].sequenceNumber
              };
              var posteriorTask = this.posteriorTable.filter(function(task) {
                if (!!task.bireTaskDTO) {
                  _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                    task.bireTaskDTO,
                    selectedPosterior_1
                  );
                }
              });
              if (!!posteriorTask && !!posteriorTask[0]) {
                linkedPosterior.linkType = posteriorTask[0].linkType;
                linkedPosterior.sequenceNumber = posteriorTask[0].sequenceNumber;
              }
              this.currentPosterior = __assign({}, linkedPosterior);
              var taskType = this.taskTypes.filter(function(type) {
                return (
                  !!_this.currentPosterior &&
                  !!_this.currentPosterior.bireTaskDTO &&
                  type.label === _this.currentPosterior.bireTaskDTO.taskTypeCode
                );
              });
              if (taskType[0]) {
                this.currentPosterior.bireTaskDTO.taskTypeCode = taskType[0].value;
              }
              var taskGroup = this.taskGroups.filter(function(group) {
                return (
                  !!_this.currentPosterior &&
                  !!_this.currentPosterior.bireTaskDTO &&
                  group.label === _this.currentPosterior.bireTaskDTO.groupCode
                );
              });
              if (taskGroup[0]) {
                this.currentPosterior.bireTaskDTO.groupCode = taskGroup[0].value;
              }
              this.isReadOnlyPosteriorDialog = false;
              this.showPosteriorDialog = true;
              this.posteriorTaskTableDataSource.setData(this.posteriorTaskTableDataSource.dataSrc);
            }
          };
          TaskFormComponent.prototype.openPosterior = function() {
            var _this = this;
            if (this.posteriorTaskTableDataSource.dataSelectionCount === 1) {
              var selectedPosterior_2 = __assign({}, this.posteriorTaskTableDataSource.dataSelection[0]);
              var inPosteriorTable = this.posteriorTable.filter(function(posterior) {
                return posterior.bireTaskDTO.taskCode === selectedPosterior_2.taskCode;
              });
              var linkedPosterior = {
                bireTaskDTO: selectedPosterior_2,
                linkType: undefined,
                sequenceNumber: inPosteriorTable[0].sequenceNumber
              };
              if (!!linkedPosterior && !!linkedPosterior[0]) {
                linkedPosterior.linkType = linkedPosterior[0].linkType;
                linkedPosterior.sequenceNumber = linkedPosterior[0].sequenceNumber;
              }
              this.currentPosterior = __assign({}, linkedPosterior);
              var taskType = this.taskTypes.filter(function(type) {
                return (
                  !!_this.currentPosterior &&
                  !!_this.currentPosterior.bireTaskDTO &&
                  type.label === _this.currentPosterior.bireTaskDTO.taskTypeCode
                );
              });
              if (taskType[0]) {
                this.currentPosterior.bireTaskDTO.taskTypeCode = taskType[0].value;
              }
              var taskGroup = this.taskGroups.filter(function(group) {
                return (
                  !!_this.currentPosterior &&
                  !!_this.currentPosterior.bireTaskDTO &&
                  group.label === _this.currentPosterior.bireTaskDTO.groupCode
                );
              });
              if (taskGroup[0]) {
                this.currentPosterior.bireTaskDTO.groupCode = taskGroup[0].value;
              }
              this.isReadOnlyPosteriorDialog = true;
              this.showPosteriorDialog = true;
            }
          };
          TaskFormComponent.prototype.deletePosterior = function() {
            var _this = this;
            var partialMessageKey =
              this.selectedPosterior.length > 1 ? 'confirmDeleteSelectedPosteriors' : 'confirmDeleteSelectedPosterior';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.posteriorTaskTableDataSource.dataSelection.forEach(function(task) {
                  if (
                    !!task &&
                    !!_this.task &&
                    !!task.taskCode &&
                    !!task.taskVersion &&
                    !!_this.task.taskCode &&
                    !!_this.task.taskVersion
                  ) {
                    var temp = {
                      birTaskCode: task.taskCode,
                      birTaskVersion: task.taskVersion,
                      taskCode: _this.task.taskCode,
                      taskVersion: _this.task.taskVersion
                    };
                    var posteriorTask = _this.getLinkTaskByTask(_this.posteriorTable, task);
                    if (posteriorTask && posteriorTask.linkedTaskMain) {
                      temp = {
                        birTaskCode: _this.task.taskCode,
                        birTaskVersion: _this.task.taskVersion,
                        taskCode: task.taskCode,
                        taskVersion: task.taskVersion
                      };
                    }
                    var tasksAddedWithoutSelection = _this.bireTaskLinkAddedList.filter(function(taskAdded) {
                      return taskAdded.birTaskCode === task.taskCode && taskAdded.birTaskVersion === task.taskVersion;
                    });
                    if (_this.bireTaskLinkAddedList.length !== tasksAddedWithoutSelection.length) {
                      _this.bireTaskLinkAddedList = tasksAddedWithoutSelection;
                    } else {
                      _this.bireTaskLinkDeletedList.push(temp);
                    }
                    _this.posteriorTaskTableDataSource.setData(
                      _this.posteriorTaskTableDataSource.dataSrc.filter(function(element) {
                        return !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                          element,
                          task
                        );
                      })
                    );
                  } else {
                    _super.prototype.throwUnboundLocalError.call(_this, 'deletePosterior', 'task && this.task');
                  }
                });
                _this.posteriorTaskTableDataSource.dataSelection = [];
              }
            });
          };
          // 3. Linked Tasks table
          TaskFormComponent.prototype.createLinkedTasks = function() {
            this.currentLinkedTask = undefined;
            this.isReadOnlyLinkedTasksDialog = false;
            this.showLinkedTasksDialog = true;
          };
          TaskFormComponent.prototype.editLinkedTasks = function() {
            var _this = this;
            if (this.linkedTaskTableDataSource.dataSelectionCount === 1) {
              this.currentLinkedTaskIndex = this.linkedTaskTableDataSource.dataSrc.findIndex(function(linked) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                  linked,
                  _this.linkedTaskTableDataSource.dataSelection[0]
                );
              });
              var selectedLinked_1 = __assign({}, this.linkedTaskTableDataSource.dataSelection[0]);
              var inLinkedTable = this.linkedTasksTable.filter(function(linked) {
                return linked.bireTaskDTO.taskCode === selectedLinked_1.taskCode;
              });
              var linkedLinked = {
                bireTaskDTO: {
                  taskCode: selectedLinked_1.taskCode,
                  taskVersion: selectedLinked_1.taskVersion,
                  taskDesignation: selectedLinked_1.taskDesignation,
                  groupCode: selectedLinked_1.taskGroup,
                  taskTypeCode: selectedLinked_1.taskType
                },
                linkType: selectedLinked_1.linkType,
                sequenceNumber: inLinkedTable[0].sequenceNumber
              };
              var linkedTask = this.linkedTasksTable.filter(function(task) {
                if (!!task.bireTaskDTO) {
                  _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                    task.bireTaskDTO,
                    selectedLinked_1
                  );
                }
              });
              if (!!linkedTask && !!linkedTask[0]) {
                linkedLinked.sequenceNumber = linkedTask[0].sequenceNumber;
              }
              this.currentLinkedTask = __assign({}, linkedLinked);
              if (this.currentLinkedTask.linkType) {
                var linkType = this.associatedLinkTypes.filter(function(type) {
                  return !!_this.currentLinkedTask && type.label === _this.currentLinkedTask.linkType;
                });
                if (linkType[0]) {
                  this.currentLinkedTask.linkType = linkType[0].value;
                }
              }
              if (!!this.currentLinkedTask.bireTaskDTO && this.currentLinkedTask.bireTaskDTO.taskTypeCode) {
                var taskType = this.taskTypes.filter(function(type) {
                  return (
                    !!_this.currentLinkedTask &&
                    !!_this.currentLinkedTask.bireTaskDTO &&
                    type.label === _this.currentLinkedTask.bireTaskDTO.taskTypeCode
                  );
                });
                if (taskType[0]) {
                  this.currentLinkedTask.bireTaskDTO.taskTypeCode = taskType[0].value;
                }
              } else {
                _super.prototype.throwUnboundLocalError.call(
                  this,
                  'editLinkedTasks',
                  'this.currentLinkedTask && this.currentLinkedTask.bireTaskDTO'
                );
              }
              if (!!this.currentLinkedTask.bireTaskDTO && this.currentLinkedTask.bireTaskDTO.groupCode) {
                var taskGroup = this.taskGroups.filter(function(group) {
                  return (
                    !!_this.currentLinkedTask &&
                    !!_this.currentLinkedTask.bireTaskDTO &&
                    group.label === _this.currentLinkedTask.bireTaskDTO.groupCode
                  );
                });
                if (taskGroup[0]) {
                  this.currentLinkedTask.bireTaskDTO.groupCode = taskGroup[0].value;
                }
              }
              this.isReadOnlyLinkedTasksDialog = false;
              this.showLinkedTasksDialog = true;
              this.linkedTaskTableDataSource.setData(this.linkedTaskTableDataSource.dataSrc);
            }
          };
          TaskFormComponent.prototype.openLinkedTasks = function() {
            var _this = this;
            if (this.linkedTaskTableDataSource.dataSelectionCount === 1) {
              var selectedLinked_2 = __assign({}, this.linkedTaskTableDataSource.dataSelection[0]);
              var inLinkedTable = this.linkedTasksTable.filter(function(linked) {
                return linked.bireTaskDTO.taskCode === selectedLinked_2.taskCode;
              });
              var linkedLinked = {
                bireTaskDTO: {
                  taskCode: selectedLinked_2.taskCode,
                  taskVersion: selectedLinked_2.taskVersion,
                  taskDesignation: selectedLinked_2.taskDesignation,
                  groupCode: selectedLinked_2.taskGroup,
                  taskTypeCode: selectedLinked_2.taskType
                },
                linkType: selectedLinked_2.linkType,
                sequenceNumber: inLinkedTable[0].sequenceNumber
              };
              var linkedTask = this.linkedTasksTable.filter(function(task) {
                if (!!task.bireTaskDTO) {
                  _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                    task.bireTaskDTO,
                    selectedLinked_2
                  );
                }
              });
              if (!!linkedTask && !!linkedTask[0]) {
                linkedLinked.sequenceNumber = linkedTask[0].sequenceNumber;
              }
              this.currentLinkedTask = __assign({}, linkedLinked);
              if (this.currentLinkedTask.linkType) {
                var linkType = this.associatedLinkTypes.filter(function(type) {
                  return !!_this.currentLinkedTask && type.label === _this.currentLinkedTask.linkType;
                });
                if (linkType[0]) {
                  this.currentLinkedTask.linkType = linkType[0].value;
                }
              }
              var taskType = this.taskTypes.filter(function(type) {
                return (
                  !!_this.currentLinkedTask &&
                  !!_this.currentLinkedTask.bireTaskDTO &&
                  type.label === _this.currentLinkedTask.bireTaskDTO.taskTypeCode
                );
              });
              if (taskType[0]) {
                this.currentLinkedTask.bireTaskDTO.taskTypeCode = taskType[0].value;
              }
              var taskGroup = this.taskGroups.filter(function(group) {
                return (
                  !!_this.currentLinkedTask &&
                  !!_this.currentLinkedTask.bireTaskDTO &&
                  group.label === _this.currentLinkedTask.bireTaskDTO.groupCode
                );
              });
              if (taskGroup[0]) {
                this.currentLinkedTask.bireTaskDTO.groupCode = taskGroup[0].value;
              }
              this.isReadOnlyLinkedTasksDialog = true;
              this.showLinkedTasksDialog = true;
            }
          };
          TaskFormComponent.prototype.deleteLinkedTasks = function() {
            var _this = this;
            var partialMessageKey =
              this.selectedLinkedTasks.length > 1
                ? 'confirmDeleteSelectedLinkedTasks'
                : 'confirmDeleteSelectedLinkedTask';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.linkedTaskTableDataSource.dataSelection.forEach(function(task) {
                  if (
                    !!task &&
                    !!_this.task &&
                    !!task.taskCode &&
                    !!task.taskVersion &&
                    !!_this.task.taskCode &&
                    !!_this.task.taskVersion
                  ) {
                    var temp = {
                      taskCode: _this.task.taskCode,
                      taskVersion: _this.task.taskVersion,
                      birTaskCode: task.taskCode,
                      birTaskVersion: task.taskVersion
                    };
                    var tasksAddedWithoutSelection = _this.bireTaskLinkAddedList.filter(function(taskAdded) {
                      return taskAdded.birTaskCode === task.taskCode && taskAdded.birTaskVersion === task.taskVersion;
                    });
                    if (_this.bireTaskLinkAddedList.length !== tasksAddedWithoutSelection.length) {
                      _this.bireTaskLinkAddedList = tasksAddedWithoutSelection;
                    } else {
                      _this.bireTaskLinkDeletedList.push(temp);
                    }
                    _this.linkedTaskTableDataSource.setData(
                      _this.linkedTaskTableDataSource.dataSrc.filter(function(element) {
                        return !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                          element,
                          task
                        );
                      })
                    );
                  } else {
                    _super.prototype.throwUnboundLocalError.call(_this, 'deleteLinkedTasks', 'task && this.task');
                  }
                });
                _this.linkedTaskTableDataSource.dataSelection = [];
              }
            });
          };
          /*************************************************************************
           * Impacts tab
           *************************************************************************/
          TaskFormComponent.prototype.openImpactsTab = function() {
            this.currentTabId = this.tabImpactsId;
          };
          // 1. Evolutions table
          TaskFormComponent.prototype.createEvolution = function() {
            this.currentEvolution = undefined;
            this.isReadOnlyEvolutionsDialog = false;
            this.showEvolutionsDialog = true;
          };
          TaskFormComponent.prototype.editEvolution = function() {
            var _this = this;
            if (this.evolutionsTableDataSource.dataSelectionCount === 1) {
              this.currentEvolutionIndex = this.evolutionsTableDataSource.dataSrc.findIndex(function(evolution) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskEvolutionDTO(
                  evolution,
                  _this.evolutionsTableDataSource.dataSelection[0]
                );
              });
              this.currentEvolution = __assign({}, this.evolutionsTableDataSource.dataSelection[0]);
              this.isReadOnlyEvolutionsDialog = false;
              this.showEvolutionsDialog = true;
            }
          };
          TaskFormComponent.prototype.openEvolution = function() {
            var _this = this;
            if (this.evolutionsTableDataSource.dataSelectionCount === 1) {
              this.currentEvolution = __assign({}, this.evolutionsTableDataSource.dataSelection[0]);
              var evolutionLinkType = this.evolutionLinkTypes.filter(function(type) {
                return !!_this.currentEvolution && type.label === _this.currentEvolution.taskEvolutionTypeCode;
              });
              if (evolutionLinkType) {
                this.currentEvolution.taskEvolutionTypeCode = evolutionLinkType[0].value;
              }
              this.currentEvolutionIndex = undefined;
              this.isReadOnlyEvolutionsDialog = true;
              this.showEvolutionsDialog = true;
            }
          };
          TaskFormComponent.prototype.openEvolutionForm = function(evolution) {
            var labelKey = 'transaction.EvolutionFormComponent';
            var evolutionId = {
              evolutionNumber: evolution.evolutionNumber,
              evolutionRevisionNumber: evolution.evolutionRevisionNumber
            };
            var data = {
              id: this.tabService.generateId(),
              componentId: 'EvolutionFormComponent',
              objectId: this.serializationService.serialize(evolutionId),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          TaskFormComponent.prototype.deleteEvolution = function() {
            var _this = this;
            var partialMessageKey =
              this.evolutionsTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedEvolutions'
                : 'confirmDeleteSelectedEvolution';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.evolutionsTableDataSource.dataSelection.forEach(function(selectedEvolution) {
                  selectedEvolution._obj.taskCode = _this.task.taskCode;
                  selectedEvolution._obj.taskVersion = _this.task.taskVersion;
                  if (!!_this.evolutionAdded) {
                    var evolutionAddedWithoutSelection = _this.evolutionAdded.filter(function(evolution) {
                      return !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__[
                        'DTOUtils'
                      ].equalsBireTaskEvolutionDTO(selectedEvolution, evolution);
                    });
                    if (_this.evolutionAdded.length !== evolutionAddedWithoutSelection.length) {
                      _this.evolutionAdded = evolutionAddedWithoutSelection;
                      if (
                        !!selectedEvolution &&
                        !!selectedEvolution.evolutionRevisionNumber &&
                        !!selectedEvolution._obj.taskCode &&
                        !!selectedEvolution._obj.evolutionNumber &&
                        !!selectedEvolution._obj.taskVersion
                      ) {
                        var evolutionId = {
                          evolutionRevisionNumber: selectedEvolution.evolutionRevisionNumber,
                          taskCode: selectedEvolution._obj.taskCode,
                          evolutionNumber: selectedEvolution._obj.evolutionNumber,
                          taskVersion: selectedEvolution._obj.taskVersion
                        };
                        _this.evolutionRemoved.push(evolutionId);
                      }
                    } else {
                      var isRemoved = _this.evolutionAdded.some(function(evolution) {
                        return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__[
                          'DTOUtils'
                        ].equalsBireTaskEvolutionDTO(selectedEvolution, evolution);
                      });
                      if (
                        !isRemoved &&
                        !!selectedEvolution &&
                        !!selectedEvolution.evolutionRevisionNumber &&
                        !!selectedEvolution._obj.taskCode &&
                        !!selectedEvolution._obj.evolutionNumber &&
                        !!selectedEvolution._obj.taskVersion
                      ) {
                        var evolutionId = {
                          evolutionRevisionNumber: selectedEvolution.evolutionRevisionNumber,
                          taskCode: selectedEvolution._obj.taskCode,
                          evolutionNumber: selectedEvolution._obj.evolutionNumber,
                          taskVersion: selectedEvolution._obj.taskVersion
                        };
                        _this.evolutionRemoved.push(evolutionId);
                      }
                    }
                  }
                });
                _this.evolutionsTableDataSource.setData(
                  _this.evolutionsTableDataSource.dataSrc.filter(function(evolution) {
                    return !_this.evolutionsTableDataSource.dataSelection.some(function(selectedEvolution) {
                      return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__[
                        'DTOUtils'
                      ].equalsBireTaskEvolutionDTO(evolution, selectedEvolution);
                    });
                  })
                );
                _this.fillDesignationInEvolutionTable();
                _this.evolutionsTableDataSource.dataSelection = [];
              }
            });
          };
          // 2. Maintained items table
          TaskFormComponent.prototype.createMaintainedItem = function() {
            this.currentMaintainedItem = undefined;
            this.isReadOnlyMaintainedItemsDialog = false;
            this.showMaintainedItemsDialog = true;
          };
          TaskFormComponent.prototype.editMaintainedItem = function() {
            var _this = this;
            if (this.maintainedItemsTableDataSource.dataSelectionCount === 1) {
              this.currentMaintainedItemIndex = this.maintainedItemsTableDataSource.dataSrc.findIndex(function(item) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskItemDTO(
                  item,
                  _this.maintainedItemsTableDataSource.dataSelection[0]
                );
              });
              this.currentMaintainedItem = this.maintainedItemsTableDataSource.dataSelection[0];
              this.isReadOnlyMaintainedItemsDialog = false;
              this.showMaintainedItemsDialog = true;
            }
          };
          TaskFormComponent.prototype.openMaintainedItem = function() {
            var _this = this;
            if (this.maintainedItemsTableDataSource.dataSelectionCount === 1) {
              this.currentMaintainedItem = __assign({}, this.maintainedItemsTableDataSource.dataSelection[0]);
              var structureType = this.structureType.filter(function(type) {
                return !!_this.currentMaintainedItem && type.label === _this.currentMaintainedItem.structureType;
              });
              var taskItemTypeCode = this.itemLinkTypes.filter(function(type) {
                return !!_this.currentMaintainedItem && type.label === _this.currentMaintainedItem.taskItemTypeCode;
              });
              if (structureType) {
                this.currentMaintainedItem.structureType = structureType[0].value;
              }
              if (taskItemTypeCode) {
                this.currentMaintainedItem.taskItemTypeCode = taskItemTypeCode[0].value;
              }
              this.currentMaintainedItemIndex = undefined;
              this.isReadOnlyMaintainedItemsDialog = true;
              this.showMaintainedItemsDialog = true;
            }
          };
          TaskFormComponent.prototype.deleteMaintainedItem = function() {
            var _this = this;
            var partialMessageKey =
              this.maintainedItemsTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedMaintainedItems'
                : 'confirmDeleteSelectedMaintainedItem';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.maintainedItemsTableDataSource.dataSelection.forEach(function(selectedItem) {
                  var itemsAddedWithoutSelection = _this.maintainedItemAdded.filter(function(item) {
                    return !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskItemDTO(
                      selectedItem,
                      item
                    );
                  });
                  if (_this.maintainedItemAdded.length !== itemsAddedWithoutSelection.length) {
                    _this.maintainedItemAdded = itemsAddedWithoutSelection;
                  } else {
                    var isRemoved = _this.maintainedItemAdded.some(function(item) {
                      return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskItemDTO(
                        selectedItem,
                        item
                      );
                    });
                    if (!isRemoved) {
                      if (
                        !!_this.task &&
                        !!_this.task.taskCode &&
                        !!_this.task.taskVersion &&
                        !!selectedItem &&
                        !!selectedItem._obj.subject &&
                        !!selectedItem._obj.versionNumber &&
                        !!selectedItem._obj.chapter &&
                        !!selectedItem._obj.structureType &&
                        !!selectedItem._obj.variantCode &&
                        !!selectedItem._obj.familyCode &&
                        !!selectedItem._obj.marks &&
                        !!selectedItem._obj.sheet &&
                        !!selectedItem._obj.section &&
                        !!selectedItem._obj.taskItemTypeCode
                      ) {
                        var itemId = {
                          taskCode: _this.task.taskCode,
                          subject: selectedItem._obj.subject,
                          versionNumber: selectedItem._obj.versionNumber,
                          chapter: selectedItem._obj.chapter,
                          structureType: selectedItem._obj.structureType,
                          variantCode: selectedItem._obj.variantCode,
                          familyCode: selectedItem._obj.familyCode,
                          marks: selectedItem._obj.marks,
                          taskVersion: _this.task.taskVersion,
                          sheet: selectedItem._obj.sheet,
                          section: selectedItem._obj.section,
                          taskItemTypeCode: selectedItem._obj.taskItemTypeCode
                        };
                        _this.maintainedItemRemoved.push(itemId);
                      }
                    }
                  }
                });
                _this.maintainedItemsTableDataSource.setData(
                  _this.maintainedItemsTableDataSource.dataSrc.filter(function(maintainedItem) {
                    return !_this.maintainedItemsTableDataSource.dataSelection.some(function(selectedItem) {
                      return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskItemDTO(
                        maintainedItem,
                        selectedItem
                      );
                    });
                  })
                );
                _this.maintainedItemsTableDataSource.dataSelection = [];
              }
            });
          };
          /*************************************************************************
           * Manuals tab
           *************************************************************************/
          TaskFormComponent.prototype.openManualsTab = function() {
            this.currentTabId = this.tabManualsId;
          };
          // Maintenance program table
          TaskFormComponent.prototype.openMaintenancePrograms = function() {
            if (this.maintenanceProgramsTableDataSource.dataSelectionCount === 1) {
              // TODO open maintenance
            }
          };
          TaskFormComponent.prototype.openMaintenanceProgramsForm = function(maintenanceRow) {
            // TODO open clicked maintenance program row
            var openMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read;
            if (!!maintenanceRow && !!maintenanceRow.programCode) {
              var birePlanDTOId = {
                planCode: maintenanceRow.programCode
              };
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
                    .ENG_MAINTENANCE_PROGRAM_FORM,
                openMode: openMode,
                objectId: this.serializationService.serialize(birePlanDTOId)
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'openMaintenanceProgramsForm', 'maintenanceRow');
            }
          };
          /*************************************************************************
           * Prerequisites tab
           *************************************************************************/
          TaskFormComponent.prototype.openPrerequisitesTab = function() {
            this.currentTabId = this.tabPrerequisitesId;
          };
          // 1. Qualifications tab
          TaskFormComponent.prototype.createQualification = function() {
            this.currentQualifications = undefined;
            this.isReadOnlyQualificationsDialog = false;
            this.showQualificationsDialog = true;
          };
          TaskFormComponent.prototype.editQualification = function() {
            var _this = this;
            if (this.qualificationsTableDataSource.dataSelectionCount === 1) {
              this.currentQualificationsIndex = this.qualificationsTableDataSource.dataSrc.findIndex(function(
                qualification
              ) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireQualificationDTO(
                  qualification,
                  _this.qualificationsTableDataSource.dataSelection[0]
                );
              });
              this.currentQualifications = this.qualificationsTableDataSource.dataSelection[0];
              this.isReadOnlyQualificationsDialog = false;
              this.showQualificationsDialog = true;
            }
          };
          TaskFormComponent.prototype.openQualification = function() {
            if (this.qualificationsTableDataSource.dataSelectionCount === 1) {
              this.currentQualifications = this.qualificationsTableDataSource.dataSelection[0];
              this.currentQualificationsIndex = undefined;
              this.isReadOnlyQualificationsDialog = true;
              this.showQualificationsDialog = true;
            }
          };
          TaskFormComponent.prototype.deleteQualification = function() {
            var _this = this;
            var partialMessageKey =
              this.qualificationsTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedQualifications'
                : 'confirmDeleteSelectedQualification';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.qualificationsTableDataSource.dataSelection.forEach(function(selectedQualification) {
                  if (
                    !!_this.task &&
                    !!_this.task.taskCode &&
                    !!_this.task.taskVersion &&
                    !!selectedQualification &&
                    !!selectedQualification.qualificationCode
                  ) {
                    var qualificationId = {
                      taskCode: _this.task.taskCode,
                      taskVersion: _this.task.taskVersion,
                      qualificationCode: selectedQualification.qualificationCode
                    };
                    var qualificationsAddedWithoutSelection = _this.qualificationAdded.filter(function(
                      addedQualification
                    ) {
                      return !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__[
                        'DTOUtils'
                      ].equalsBireQualificationDTO(selectedQualification, addedQualification);
                    });
                    if (_this.qualificationAdded.length !== qualificationsAddedWithoutSelection.length) {
                      _this.qualificationAdded = qualificationsAddedWithoutSelection;
                      _this.qualificationRemoved.push(qualificationId);
                    } else {
                      var isRemoved = _this.qualificationAdded.some(function(addedQualificaiton) {
                        return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__[
                          'DTOUtils'
                        ].equalsBireQualificationDTO(selectedQualification, addedQualificaiton);
                      });
                      if (!isRemoved) {
                        _this.qualificationRemoved.push(qualificationId);
                      }
                    }
                  } else {
                    _super.prototype.throwUnboundLocalError.call(_this, 'deleteQualification', 'selectedQualification');
                  }
                });
                _this.qualificationsTableDataSource.setData(
                  _this.qualificationsTableDataSource.dataSrc.filter(function(qualification) {
                    return !_this.qualificationsTableDataSource.dataSelection.some(function(selectedQualification) {
                      return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__[
                        'DTOUtils'
                      ].equalsBireQualificationDTO(qualification, selectedQualification);
                    });
                  })
                );
                _this.qualificationsTableDataSource.setData(_this.qualificationsTableDataSource.dataSrc);
                _this.qualificationsTableDataSource.dataSelection = [];
              }
            });
          };
          // 2. TILs tab
          TaskFormComponent.prototype.createTil = function() {
            this.currentTil = undefined;
            this.isReadOnlyTilDialog = false;
            this.showTilDialog = true;
            this.tilTableDataSource.setData(this.tilTableDataSource.dataSrc);
          };
          TaskFormComponent.prototype.editTil = function() {
            var _this = this;
            if (this.tilTableDataSource.dataSelectionCount === 1) {
              this.currentTilIndex = this.tilTableDataSource.dataSrc.findIndex(function(til) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTilTaskDTO(
                  til,
                  _this.tilTableDataSource.dataSelection[0]
                );
              });
              this.currentTil = this.tilTableDataSource.dataSelection[0];
              this.isReadOnlyTilDialog = false;
              this.showTilDialog = true;
            }
          };
          TaskFormComponent.prototype.openTil = function() {
            if (this.tilTableDataSource.dataSelectionCount === 1) {
              this.currentTil = __assign({}, this.tilTableDataSource.dataSelection[0]);
              this.currentTilIndex = undefined;
              this.isReadOnlyTilDialog = true;
              this.showTilDialog = true;
            }
          };
          TaskFormComponent.prototype.loadTechnicalLevels = function() {
            var _this = this;
            this.taskFormService.findAllBireTils().subscribe(function(results) {
              results.forEach(function(result) {
                if (!!result && !!result.tilName && !!result.technicalLevel && !!result.tilDescription) {
                  _this.tilName.push(result.tilName);
                  _this.technicalLevel.push(result.technicalLevel.toString());
                  _this.tilDescription.push(result.tilDescription);
                }
              });
            });
          };
          TaskFormComponent.prototype.deleteTil = function() {
            var _this = this;
            var partialMessageKey =
              this.tilTableDataSource.dataSelectionCount > 1 ? 'confirmDeleteSelectedTils' : 'confirmDeleteSelectedTil';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.tilTableDataSource.dataSelection.forEach(function(tilSelected) {
                  var tillAddedWithoutSelection = _this.tilAdded.filter(function(addedTil) {
                    return !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTilTaskDTO(
                      tilSelected,
                      addedTil
                    );
                  });
                  if (_this.tilAdded.length !== tillAddedWithoutSelection.length) {
                    _this.tilAdded = tillAddedWithoutSelection;
                    if (
                      !!_this.task &&
                      !!_this.task.taskCode &&
                      !!_this.task.taskVersion &&
                      !!tilSelected &&
                      tilSelected.technicalLevel !== null &&
                      tilSelected.technicalLevel !== undefined
                    ) {
                      var tilId = {
                        taskCode: _this.task.taskCode,
                        taskVersion: _this.task.taskVersion,
                        technicalLevel: tilSelected.technicalLevel
                      };
                      _this.tilRemoved.push(tilId);
                    }
                  } else {
                    var isRemoved = _this.tilAdded.some(function(addedTil) {
                      return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTilTaskDTO(
                        tilSelected,
                        addedTil
                      );
                    });
                    if (!isRemoved) {
                      if (
                        !!_this.task &&
                        !!_this.task.taskCode &&
                        !!_this.task.taskVersion &&
                        !!tilSelected &&
                        tilSelected.technicalLevel !== null &&
                        tilSelected.technicalLevel !== undefined
                      ) {
                        var tilId = {
                          taskCode: _this.task.taskCode,
                          taskVersion: _this.task.taskVersion,
                          technicalLevel: tilSelected.technicalLevel
                        };
                        _this.tilRemoved.push(tilId);
                      }
                    }
                  }
                });
                _this.tilTableDataSource.setData(
                  _this.tilTableDataSource.dataSrc.filter(function(til) {
                    return !_this.tilTableDataSource.dataSelection.some(function(tilSelected) {
                      return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTilTaskDTO(
                        til,
                        tilSelected
                      );
                    });
                  })
                );
                _this.tilTableDataSource.dataSelection = [];
              }
            });
          };
          /*************************************************************************
           * Documents tab
           *************************************************************************/
          TaskFormComponent.prototype.openDocumentsTab = function() {
            this.currentTabId = this.tabDocumentsId;
          };
          TaskFormComponent.prototype.deleteDocuments = function() {
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
                    return !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireDocumentDTO(
                      selectedDocument,
                      documentAdded
                    );
                  });
                  // list of added objects contains the selection
                  if (_this.documentsAdded.length !== documentsAddedWithoutSelection.length) {
                    // Remove selection from added objects
                    _this.documentsAdded = documentsAddedWithoutSelection;
                  } else {
                    var isRemoved = _this.documentsAdded.some(function(documentAdded) {
                      return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireDocumentDTO(
                        selectedDocument,
                        documentAdded
                      );
                    });
                    if (!isRemoved && !!selectedDocument && !!selectedDocument.docCode) {
                      var documentId = { docCode: selectedDocument.docCode };
                      _this.documentsRemoved.push(documentId);
                    }
                  }
                });
                _this.documentsTableDataSource.setData(
                  _this.documentsTableDataSource.dataSrc.filter(function(document) {
                    return !_this.documentsTableDataSource.dataSelection.some(function(selectedDocument) {
                      return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireDocumentDTO(
                        document,
                        selectedDocument
                      );
                    });
                  })
                );
                _this.documentsTableDataSource.dataSelection = [];
              }
            });
          };
          TaskFormComponent.prototype.getCustomDocumentRow = function(newDocument) {
            return {
              _obj: newDocument,
              docCode: newDocument.docCode,
              docExtension: this.showDocExtension(newDocument),
              docCategory: newDocument.docCategory,
              docName: newDocument.docName,
              docPublicationDate: this.dateService.dateToString(newDocument.docPublicationDate),
              docSize: this.showDocSize(newDocument),
              docSource: newDocument.docSource
            };
          };
          TaskFormComponent.prototype.openUrl = function(url) {
            _shared_utils_url_utils__WEBPACK_IMPORTED_MODULE_37__['UrlUtils'].openUrl(url);
          };
          TaskFormComponent.prototype.validateUrl = function(url) {
            return _shared_utils_url_utils__WEBPACK_IMPORTED_MODULE_37__['UrlUtils'].validateUrl(url);
          };
          TaskFormComponent.prototype.addDocument = function() {
            this.currentDocumentIndex = -1;
            this.currentDocument = undefined;
            this.isReadOnlyDocumentDialog = false;
            this.showAddDocumentDialog = true;
            this.documentsTableDataSource.setData(this.documentsTableDataSource.dataSrc);
          };
          TaskFormComponent.prototype.editDocument = function() {
            var _this = this;
            if (this.documentsTableDataSource.dataSelectionCount === 1) {
              this.currentDocumentIndex = this.documentsTableDataSource.dataSrc.findIndex(function(document) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireDocumentDTO(
                  document,
                  _this.documentsTableDataSource.dataSelection[0]
                );
              });
              this.currentDocument = __assign({}, this.documentsTableDataSource.dataSelection[0]);
              _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_32__['LabelValueUtils'].labelToStringValue(
                this.currentDocument,
                'docCategory',
                this.documentCategories
              );
              this.isReadOnlyDocumentDialog = false;
              this.showDocumentDialog = true;
            }
          };
          TaskFormComponent.prototype.openDocument = function() {
            if (this.documentsTableDataSource.dataSelectionCount === 1) {
              this.currentDocument = __assign({}, this.documentsTableDataSource.dataSelection[0]);
              _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_32__['LabelValueUtils'].labelToStringValue(
                this.currentDocument,
                'docCategory',
                this.documentCategories
              );
              this.currentDocumentIndex = undefined;
              this.isReadOnlyDocumentDialog = true;
              this.showDocumentDialog = true;
            }
          };
          TaskFormComponent.prototype.showDocExtension = function(document) {
            return _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_31__['FileUtils']
              .getExtension(document.docName)
              .toUpperCase();
          };
          TaskFormComponent.prototype.showDocSize = function(document) {
            return document.docFile
              ? _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_31__['FileUtils'].getFormattedSize(
                  document.docFile.length
                )
              : '';
          };
          /*************************************************************************
           * Attributes tab
           *************************************************************************/
          TaskFormComponent.prototype.openAttributesTab = function() {
            this.currentTabId = this.tabAttributesId;
          };
          TaskFormComponent.prototype.getBireAttributesForTask = function() {
            var _this = this;
            this.taskFormService
              .findBireAttributesByCategory(
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                  .MCH_ATTRIBUTE_CATEGORY_ALL_KEY
              )
              .subscribe(
                function(results) {
                  var _a;
                  (_a = _this.bireAttributesForTask).push.apply(_a, __spread(results));
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFindAttributesByCategory'));
                }
              );
            this.taskFormService
              .findBireAttributesByCategory(
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                  .MCH_ATTRIBUTE_CATEGORY_TASK_KEY
              )
              .subscribe(
                function(results) {
                  var _a;
                  (_a = _this.bireAttributesForTask).push.apply(_a, __spread(results));
                  setTimeout(function() {
                    _this.dynamicAttributesForTask = _this.dynamicAttributesService.from(_this.bireAttributesForTask);
                    _this.getBireTaskAttributes();
                  });
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFindAttributesByCategory'));
                }
              );
          };
          TaskFormComponent.prototype.getBireTaskAttributes = function() {
            var _this = this;
            this.taskFormService.findBireTaskAttributeByTask(this.task).subscribe(
              function(results) {
                _this.bireTaskAttributes = results;
                _this.dynamicAttributesService.setValues(_this.dynamicAttributesForTask, _this.bireTaskAttributes);
                _this.dynamicAttributesForTask[0].attributes.forEach(function(result) {
                  if (
                    result.type ===
                    _shared_components_dynamic_attributes_enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_6__[
                      'DynamicAttributeType'
                    ].Boolean
                  ) {
                    _this.isCritical = result.value;
                  } else if (
                    result.type ===
                    _shared_components_dynamic_attributes_enums_dynamic_attribute_type_enum__WEBPACK_IMPORTED_MODULE_6__[
                      'DynamicAttributeType'
                    ].Text
                  ) {
                    _this.isCritical = result.value === 'true';
                  }
                });
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFindAttributesByTask'));
              }
            );
          };
          /*************************************************************************
           * Operations dialog
           *************************************************************************/
          TaskFormComponent.prototype.onAddOperation = function(operation) {
            if (operation) {
              var searchInDisplayedTable = this.operationTableDataSource.dataSrc.find(function(value) {
                return (
                  value.opeCode === operation.opeCode &&
                  value.rangeCode === operation.rangeCode &&
                  value.opeDesignation === operation.opeDesignation
                );
              });
              if (!searchInDisplayedTable) {
                operation.ope = operation.opeCode + '-' + operation.opeVersion;
                this.operationTableDataSource.setData(__spread(this.operationTableDataSource.dataSrc, [operation]));
                this.sortOperationTable();
                this.operationAdded.push(operation);
              } else {
                this.messageService.showErrorMessage(this.getTranslateKey('operationExists'));
              }
            }
          };
          /*************************************************************************
           * Evolutions dialog
           *************************************************************************/
          TaskFormComponent.prototype.onAddEvolution = function(evolution) {
            if (evolution) {
              var searchInDisplayedTable = this.evolutionsTableDataSource.dataSrc.find(function(row) {
                return (
                  row._obj.evolutionNumber === evolution.evolutionNumber &&
                  row._obj.evolutionRevisionNumber === evolution.evolutionRevisionNumber
                );
              });
              if (!searchInDisplayedTable) {
                this.evolutionsTableDataSource.setData(
                  __spread(this.evolutionsTableDataSource.dataSrc, [this.createEvolutionRow(evolution)])
                );
                this.fillDesignationInEvolutionTable();
                this.evolutionAdded.push(evolution);
              } else {
                this.messageService.showErrorMessage(this.getTranslateKey('evolutionExists'));
              }
            }
          };
          /*************************************************************************
           * Maintained items dialog
           *************************************************************************/
          TaskFormComponent.prototype.onAddedMaintainedItem = function(item) {
            var _this = this;
            if (item) {
              var searchInDisplayedTable = this.maintainedItemsTableDataSource.dataSrc.find(function(row) {
                return (
                  row._obj.familyCode === item.familyCode &&
                  row._obj.structureType === item.structureType &&
                  row._obj.variantCode === item.variantCode &&
                  row._obj.chapter === item.chapter &&
                  row._obj.section === item.section &&
                  row._obj.subject === item.subject &&
                  row._obj.sheet === item.sheet &&
                  row._obj.marks === item.marks &&
                  row._obj.versionNumber === item.versionNumber &&
                  row._obj.taskItemTypeCode === item.taskItemTypeCode
                );
              });
              if (!searchInDisplayedTable) {
                this.maintainedItemAdded = __spread(this.maintainedItemAdded, [item]);
                var input = {
                  familyCode: item.familyCode,
                  chapter: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].orEmpty(
                    item.chapter
                  ),
                  subject: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].orEmpty(
                    item.subject
                  ),
                  variantCode: item.variantCode,
                  section: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].orEmpty(
                    item.section
                  ),
                  sheet: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].orEmpty(item.sheet),
                  marks: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].orEmpty(item.marks),
                  structureType: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].orEmpty(
                    item.structureType
                  )
                };
                this.taskFormService.findBireItem(input).subscribe(function(result) {
                  var taskItemWithItem = item;
                  taskItemWithItem.bireItemDTO = result;
                  _this.maintainedItemsTableDataSource.setData(
                    __spread(_this.maintainedItemsTableDataSource.dataSrc, [
                      _this.createMaintainedItemRow(taskItemWithItem)
                    ])
                  );
                });
              } else {
                this.messageService.showErrorMessage(this.getTranslateKey('itemExists'));
              }
            }
          };
          /*************************************************************************
           * Qualifications dialog
           *************************************************************************/
          TaskFormComponent.prototype.onAddedQualification = function(qualification) {
            if (qualification) {
              var searchInDisplayedTable = this.qualificationsTableDataSource.dataSrc.find(function(value) {
                return (
                  value.qualificationCode === qualification.qualificationCode &&
                  value.qualificationName === qualification.qualificationName &&
                  value.qualificationDescription === qualification.qualificationDescription
                );
              });
              if (!searchInDisplayedTable) {
                this.qualificationAdded.push(qualification);
                this.qualificationsTableDataSource.setData(
                  __spread(this.qualificationsTableDataSource.dataSrc, [qualification])
                );
              } else {
                this.messageService.showErrorMessage(this.getTranslateKey('qualificationExists'));
              }
            }
          };
          /*************************************************************************
           * Til dialog
           *************************************************************************/
          TaskFormComponent.prototype.onAddedTil = function(til) {
            if (til) {
              var searchInDisplayedTable = this.tilTableDataSource.dataSrc.find(function(value) {
                return (
                  value.technicalLevel === til.technicalLevel &&
                  value.tilName === til.tilName &&
                  value.tilDescription === til.tilDescription
                );
              });
              var bireTilTask = {
                technicalLevel: til.technicalLevel
              };
              if (!searchInDisplayedTable) {
                this.tilTableDataSource.addData([til]);
                this.tilAdded.push(bireTilTask);
              } else {
                this.messageService.showErrorMessage(this.getTranslateKey('tilExists'));
              }
            }
          };
          /*************************************************************************
           * SuperiorTask dialog
           *************************************************************************/
          TaskFormComponent.prototype.onAssociatedSuperiorTask = function(output) {
            var isParentTask = !!output.task && output.task.taskCode === this.task.taskCode;
            var inOtherAssociatedTaskTables =
              (!!this.topDownTreeTable[0].children &&
                this.topDownTreeTable[0].children.some(function(topDownTask) {
                  return !!output.task && topDownTask.data.bireTaskDTO.taskCode === output.task.taskCode;
                })) ||
              this.anteriorTaskTableDataSource.dataSrc.some(function(anteriorTask) {
                return !!output.task && anteriorTask.taskCode === output.task.taskCode;
              }) ||
              this.posteriorTaskTableDataSource.dataSrc.some(function(posteriorTask) {
                return !!output.task && posteriorTask.taskCode === output.task.taskCode;
              }) ||
              this.linkedTaskTableDataSource.dataSrc.some(function(linkedTask) {
                return !!output.task && linkedTask.taskCode === output.task.taskCode;
              });
            if (isParentTask) {
              this.messageService.showErrorMessage(this.getTranslateKey('cannotLinkWithSelf'));
            }
            if (!inOtherAssociatedTaskTables && !isParentTask) {
              if (this.currentSuperiorTaskIndex !== null && this.currentSuperiorTaskIndex !== undefined) {
                var previousSuperiorTask = this.superiorTableDataSource.dataSrc[this.currentSuperiorTaskIndex];
                if (
                  !!output &&
                  !!output.task &&
                  !!output.taskTask &&
                  _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                    output.task,
                    previousSuperiorTask
                  )
                ) {
                  this.superiorTaskTable[this.currentSuperiorTaskIndex].sequenceNumber = output.taskTask.sequenceNumber;
                  var isInsideAddedList = this.bireTaskLinkAddedList.find(function(element) {
                    return (
                      !!output.taskTask &&
                      element.birTaskCode === output.taskTask.birTaskCode &&
                      element.birTaskVersion === output.taskTask.birTaskVersion &&
                      element.taskCode === output.taskTask.taskCode &&
                      element.taskVersion === output.taskTask.taskVersion
                    );
                  });
                  var isInsideUpdatedList = this.bireTaskLinkUpdatedList.find(function(element) {
                    return (
                      !!output.taskTask &&
                      element.birTaskCode === output.taskTask.birTaskCode &&
                      element.birTaskVersion === output.taskTask.birTaskVersion &&
                      element.taskCode === output.taskTask.taskCode &&
                      element.taskVersion === output.taskTask.taskVersion
                    );
                  });
                  output.taskTask.birTaskCode = output.task.taskCode;
                  output.taskTask.birTaskVersion = output.task.taskVersion;
                  output.taskTask.taskCode = this.task.taskCode;
                  output.taskTask.taskVersion = this.task.taskVersion;
                  if (isInsideAddedList) {
                    var index = this.bireTaskLinkAddedList.indexOf(isInsideAddedList);
                    this.bireTaskLinkAddedList[index] = output.taskTask;
                  } else if (isInsideUpdatedList) {
                    var index = this.bireTaskLinkUpdatedList.indexOf(isInsideUpdatedList);
                    this.bireTaskLinkUpdatedList[index] = output.taskTask;
                  } else {
                    this.bireTaskLinkUpdatedList.push(output.taskTask);
                  }
                  var temp = __assign({}, output.task);
                  if (output.task.taskTypeCode) {
                    var taskType = this.taskTypes.filter(function(type) {
                      return !!output.task && type.value === output.task.taskTypeCode;
                    });
                    if (taskType[0]) {
                      temp.taskTypeCode = taskType[0].label;
                    }
                  }
                  if (output.task.groupCode) {
                    var taskGroup = this.taskGroups.filter(function(group) {
                      return !!output && !!output.task && group.value === output.task.groupCode;
                    });
                    if (taskGroup[0]) {
                      temp.groupCode = taskGroup[0].label;
                    }
                  }
                  this.superiorTableDataSource.replaceData(
                    this.superiorTableDataSource.dataSrc[this.currentSuperiorTaskIndex],
                    temp
                  );
                }
              } else {
                var searchInDisplayedTable = this.superiorTableDataSource.dataSrc.find(function(value) {
                  return (
                    !!output &&
                    !!output.task &&
                    value.taskCode === output.task.taskCode &&
                    value.taskVersion === output.task.taskVersion
                  );
                });
                if (!searchInDisplayedTable) {
                  if (output.task && output.taskTask) {
                    var linkedOutput = {
                      bireTaskDTO: output.task,
                      linkType: output.taskTask.taskLinkCode,
                      sequenceNumber: output.taskTask.sequenceNumber
                    };
                    var temp = __assign({}, linkedOutput);
                    if (!!temp && !!temp.bireTaskDTO) {
                      if (output.task.taskTypeCode) {
                        var taskType = this.taskTypes.filter(function(type) {
                          return !!output && !!output.task && type.value === output.task.taskTypeCode;
                        });
                        if (!!temp && !!temp.bireTaskDTO && taskType[0]) {
                          temp.bireTaskDTO.taskTypeCode = taskType[0].label;
                        } else {
                          _super.prototype.throwUnboundLocalError.call(
                            this,
                            'onAssociatedSuperiorTask',
                            'temp && temp.bireTaskDTO'
                          );
                        }
                      }
                      if (output.task.groupCode) {
                        var taskGroup = this.taskGroups.filter(function(group) {
                          return !!output && !!output.task && group.value === output.task.groupCode;
                        });
                        if (!!temp && !!temp.bireTaskDTO && taskGroup[0]) {
                          temp.bireTaskDTO.groupCode = taskGroup[0].label;
                        } else {
                          _super.prototype.throwUnboundLocalError.call(
                            this,
                            'onAssociatedSuperiorTask',
                            'temp && temp.bireTaskDTO'
                          );
                        }
                      }
                      this.superiorTaskTable.push(temp);
                      this.superiorTableDataSource.addData([temp.bireTaskDTO]);
                      output.taskTask.birTaskCode = output.task.taskCode;
                      output.taskTask.birTaskVersion = output.task.taskVersion;
                      output.taskTask.taskCode = this.task.taskCode;
                      output.taskTask.taskVersion = this.task.taskVersion;
                      this.bireTaskLinkAddedList.push(output.taskTask);
                    } else {
                      _super.prototype.throwUnboundLocalError.call(
                        this,
                        'onAssociatedSuperiorTask',
                        'temp && temp.bireTaskDTO'
                      );
                    }
                  }
                } else {
                  this.messageService.showErrorMessage(this.getTranslateKey('superiorAlreadyExists'));
                }
              }
              this.currentSuperiorTaskIndex = undefined;
              this.superiorTableDataSource.setData(this.superiorTableDataSource.dataSrc);
              this.superiorTableDataSource.dataSelection = [];
            }
          };
          /*************************************************************************
           * TopDownTask dialog
           *************************************************************************/
          TaskFormComponent.prototype.onAssociatedTopDownTask = function(output) {
            var isParentTask = !!output.task && output.task.taskCode === this.task.taskCode;
            var inOtherAssociatedTaskTables =
              this.superiorTableDataSource.dataSrc.some(function(superiorTask) {
                return !!output.task && superiorTask.taskCode === output.task.taskCode;
              }) ||
              this.anteriorTaskTableDataSource.dataSrc.some(function(anteriorTask) {
                return !!output.task && anteriorTask.taskCode === output.task.taskCode;
              }) ||
              this.posteriorTaskTableDataSource.dataSrc.some(function(posteriorTask) {
                return !!output.task && posteriorTask.taskCode === output.task.taskCode;
              }) ||
              this.linkedTaskTableDataSource.dataSrc.some(function(linkedTask) {
                return !!output.task && linkedTask.taskCode === output.task.taskCode;
              });
            var isSelfLink =
              this.currentTopDownTask && this.currentTopDownTask.linkType === TaskFormComponent_1.TASK_LINK_CODE_SELF;
            if (isParentTask && !isSelfLink) {
              this.messageService.showErrorMessage(this.getTranslateKey('cannotLinkWithSelf'));
            } else if (!inOtherAssociatedTaskTables) {
              if (!!output.taskTask && !!output.task) {
                output.taskTask.birTaskCode = output.task.taskCode;
                output.taskTask.birTaskVersion = output.task.taskVersion;
                output.taskTask.taskCode = this.task.taskCode;
                output.taskTask.taskVersion = this.task.taskVersion;
                output.task.task = output.task.taskCode + '-' + output.task.taskVersion;
                if (isSelfLink) {
                  output.taskTask.taskLinkCode = TaskFormComponent_1.TASK_LINK_CODE_SELF;
                }
                var tempTableParentNode = __assign({}, this.topDownTreeTable[0]);
                var firstChildren = tempTableParentNode.children;
                var newChild = {
                  bireTaskDTO: output.task,
                  linkType: output.taskTask && output.taskTask.taskLinkCode,
                  sequenceNumber: output.taskTask && output.taskTask.sequenceNumber
                };
                if (!!firstChildren) {
                  var inFirstChildren = firstChildren.filter(function(child) {
                    return !!output.task && child.data.bireTaskDTO.taskCode === output.task.taskCode;
                  });
                  if (this.newQualification && inFirstChildren.length === 0 && !!output.taskTask) {
                    // new task
                    var newChildNode = {
                      children: [],
                      data: newChild,
                      parent: tempTableParentNode
                    };
                    _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_32__['LabelValueUtils'].stringValueToLabel(
                      newChildNode.data.bireTaskDTO,
                      'taskTypeCode',
                      this.taskTypes
                    );
                    firstChildren.push(newChildNode);
                    this.bireTaskLinkAddedList.push(output.taskTask);
                    this.topDownTreeTable[0] = __assign({}, tempTableParentNode);
                    this.topDownTreeTable = __spread(this.topDownTreeTable);
                    this.topDownTreeTable[0].expanded = true;
                    this.onRowUnSelected(newChildNode);
                  } else {
                    var inAddedList = this.bireTaskLinkAddedList.filter(function(task) {
                      return !!output.task && task.taskCode === output.task.taskCode;
                    });
                    var inUpdatedList = this.bireTaskLinkUpdatedList.filter(function(task) {
                      return !!output.task && task.taskCode === output.task.taskCode;
                    });
                    if (inAddedList.length === 1 && !!output.taskTask) {
                      // updating newly added node
                      var indexInAddedList = this.bireTaskLinkAddedList.findIndex(function(task) {
                        return !!output.task && output.task.taskCode === task.taskCode;
                      });
                      this.bireTaskLinkAddedList[indexInAddedList] = output.taskTask;
                    } else if (inUpdatedList.length === 1 && !!output.taskTask) {
                      // updating node existing in DB which has already been updated in this session
                      var indexInUpdatedList = this.bireTaskLinkUpdatedList.findIndex(function(task) {
                        return !!output.task && output.task.taskCode === task.taskCode;
                      });
                      this.bireTaskLinkUpdatedList[indexInUpdatedList] = output.taskTask;
                    } else if (
                      isSelfLink &&
                      !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_34__['ObjectUtils'].isDefined(
                        this.currentTaskSelfLink
                      )
                    ) {
                      this.bireTaskLinkAddedList.push(output.taskTask);
                    } else {
                      // updating node existing in DB for the first time
                      this.bireTaskLinkUpdatedList.push(output.taskTask);
                    }
                    this.selectedTopDownNodes[0].data.sequenceNumber = output.taskTask.sequenceNumber;
                    this.onRowUnSelected(this.selectedTopDownNodes[0]);
                  }
                }
                this.selectedTopDownNodes = [];
              }
            }
          };
          /*************************************************************************
           * Anterior dialog
           *************************************************************************/
          TaskFormComponent.prototype.onAssociatedAnteriorTask = function(output) {
            var isParentTask = !!output.task && output.task.taskCode === this.task.taskCode;
            var inOtherAssociatedTaskTables =
              this.superiorTableDataSource.dataSrc.some(function(superiorTask) {
                return !!output.task && superiorTask.taskCode === output.task.taskCode;
              }) ||
              (!!this.topDownTreeTable[0].children &&
                this.topDownTreeTable[0].children.some(function(topDownTask) {
                  return !!output.task && topDownTask.data.bireTaskDTO.taskCode === output.task.taskCode;
                })) ||
              this.posteriorTaskTableDataSource.dataSrc.some(function(posteriorTask) {
                return !!output.task && posteriorTask.taskCode === output.task.taskCode;
              }) ||
              this.linkedTaskTableDataSource.dataSrc.some(function(linkedTask) {
                return !!output.task && linkedTask.taskCode === output.task.taskCode;
              });
            if (isParentTask) {
              this.messageService.showErrorMessage(this.getTranslateKey('cannotLinkWithSelf'));
            }
            if (!inOtherAssociatedTaskTables && !isParentTask) {
              if (this.currentAnteriorIndex !== null && this.currentAnteriorIndex !== undefined) {
                var previousAnteriorTask = this.anteriorTaskTableDataSource.dataSrc[this.currentAnteriorIndex];
                if (
                  !!output &&
                  !!output.task &&
                  !!output.taskTask &&
                  _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                    output.task,
                    previousAnteriorTask
                  )
                ) {
                  var anteriorTask = this.anteriorTable[this.currentAnteriorIndex];
                  anteriorTask.sequenceNumber = output.taskTask.sequenceNumber;
                  var isInsideAddedList = this.bireTaskLinkAddedList.find(function(element) {
                    return (
                      !!output &&
                      !!output.taskTask &&
                      element.birTaskCode === output.taskTask.birTaskCode &&
                      element.birTaskVersion === output.taskTask.birTaskVersion &&
                      element.taskCode === output.taskTask.taskCode &&
                      element.taskVersion === output.taskTask.taskVersion
                    );
                  });
                  var isInsideUpdatedList = this.bireTaskLinkUpdatedList.find(function(element) {
                    return (
                      !!output &&
                      !!output.taskTask &&
                      element.birTaskCode === output.taskTask.birTaskCode &&
                      element.birTaskVersion === output.taskTask.birTaskVersion &&
                      element.taskCode === output.taskTask.taskCode &&
                      element.taskVersion === output.taskTask.taskVersion
                    );
                  });
                  if (anteriorTask.linkedTaskMain) {
                    output.taskTask.birTaskCode = this.task.taskCode;
                    output.taskTask.birTaskVersion = this.task.taskVersion;
                    output.taskTask.taskLinkCode = anteriorTask.linkType;
                  } else {
                    output.taskTask.birTaskCode = output.task.taskCode;
                    output.taskTask.birTaskVersion = output.task.taskVersion;
                    output.taskTask.taskCode = this.task.taskCode;
                    output.taskTask.taskVersion = this.task.taskVersion;
                  }
                  if (isInsideAddedList) {
                    var index = this.bireTaskLinkAddedList.indexOf(isInsideAddedList);
                    this.bireTaskLinkAddedList[index] = output.taskTask;
                  } else if (isInsideUpdatedList) {
                    var index = this.bireTaskLinkUpdatedList.indexOf(isInsideUpdatedList);
                    this.bireTaskLinkUpdatedList[index] = output.taskTask;
                  } else {
                    this.bireTaskLinkUpdatedList.push(output.taskTask);
                  }
                  var temp = __assign({}, output.task);
                  if (output.task.taskTypeCode) {
                    var taskType = this.taskTypes.filter(function(type) {
                      return !!output && !!output.task && type.value === output.task.taskTypeCode;
                    });
                    if (taskType[0]) {
                      temp.taskTypeCode = taskType[0].label;
                    }
                  }
                  if (output.task.groupCode) {
                    var taskGroup = this.taskGroups.filter(function(group) {
                      return !!output && !!output.task && group.value === output.task.groupCode;
                    });
                    if (taskGroup[0]) {
                      temp.groupCode = taskGroup[0].label;
                    }
                  }
                  temp.sequenceNumber = output.taskTask.sequenceNumber;
                  this.anteriorTaskTableDataSource.replaceData(
                    this.anteriorTaskTableDataSource.dataSrc[this.currentAnteriorIndex],
                    temp
                  );
                }
              } else {
                var searchInDisplayedTable = this.anteriorTaskTableDataSource.dataSrc.find(function(value) {
                  return (
                    !!output &&
                    !!output.task &&
                    value.taskCode === output.task.taskCode &&
                    value.taskVersion === output.task.taskVersion
                  );
                });
                if (!searchInDisplayedTable) {
                  if (output.task && output.taskTask) {
                    var linkedOutput = {
                      bireTaskDTO: output.task,
                      linkType: output.taskTask.taskLinkCode,
                      sequenceNumber: output.taskTask.sequenceNumber
                    };
                    var temp = __assign({}, linkedOutput);
                    if (!!temp && !!temp.bireTaskDTO) {
                      if (output.task.taskTypeCode) {
                        var taskType = this.taskTypes.filter(function(type) {
                          return !!output && !!output.task && type.value === output.task.taskTypeCode;
                        });
                        if (taskType[0]) {
                          temp.bireTaskDTO.taskTypeCode = taskType[0].label;
                        }
                      }
                      if (output.task.groupCode) {
                        var taskGroup = this.taskGroups.filter(function(group) {
                          return !!output && !!output.task && group.value === output.task.groupCode;
                        });
                        if (taskGroup[0]) {
                          temp.bireTaskDTO.groupCode = taskGroup[0].label;
                        }
                      }
                      this.anteriorTable.push(temp);
                      temp.bireTaskDTO.sequenceNumber = output.taskTask.sequenceNumber;
                      this.anteriorTaskTableDataSource.addData([temp.bireTaskDTO]);
                      output.taskTask.birTaskCode = output.task.taskCode;
                      output.taskTask.birTaskVersion = output.task.taskVersion;
                      output.taskTask.taskCode = this.task.taskCode;
                      output.taskTask.taskVersion = this.task.taskVersion;
                      this.bireTaskLinkAddedList.push(output.taskTask);
                    } else {
                      _super.prototype.throwUnboundLocalError.call(
                        this,
                        'onAssociatedAnteriorTask',
                        'temp && temp.bireTaskDTO'
                      );
                    }
                  }
                }
              }
              this.currentAnteriorIndex = undefined;
              this.anteriorTaskTableDataSource.dataSelection = [];
            }
          };
          /*************************************************************************
           * PosteriorTask dialog
           *************************************************************************/
          TaskFormComponent.prototype.onAssociatedPosteriorTask = function(output) {
            var isParentTask = !!output.task && output.task.taskCode === this.task.taskCode;
            var inOtherAssociatedTaskTables =
              this.superiorTableDataSource.dataSrc.some(function(superiorTask) {
                return !!output.task && superiorTask.taskCode === output.task.taskCode;
              }) ||
              (!!this.topDownTreeTable[0].children &&
                this.topDownTreeTable[0].children.some(function(topDownTask) {
                  return !!output.task && topDownTask.data.bireTaskDTO.taskCode === output.task.taskCode;
                })) ||
              this.anteriorTaskTableDataSource.dataSrc.some(function(anteriorTask) {
                return !!output.task && anteriorTask.taskCode === output.task.taskCode;
              }) ||
              this.linkedTaskTableDataSource.dataSrc.some(function(linkedTask) {
                return !!output.task && linkedTask.taskCode === output.task.taskCode;
              });
            if (isParentTask) {
              this.messageService.showErrorMessage(this.getTranslateKey('cannotLinkWithSelf'));
            }
            if (!inOtherAssociatedTaskTables && !isParentTask) {
              if (this.currentPosteriorIndex !== null && this.currentPosteriorIndex !== undefined) {
                var previousPosteriorTask = this.posteriorTaskTableDataSource.dataSrc[this.currentPosteriorIndex];
                if (
                  !!output &&
                  !!output.task &&
                  !!output.taskTask &&
                  _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsBireTaskDTO(
                    output.task,
                    previousPosteriorTask
                  )
                ) {
                  var posteriorTask = this.posteriorTable[this.currentPosteriorIndex];
                  posteriorTask.sequenceNumber = output.taskTask.sequenceNumber;
                  var isInsideAddedList = this.bireTaskLinkAddedList.find(function(element) {
                    return (
                      !!output &&
                      !!output.taskTask &&
                      element.birTaskCode === output.taskTask.birTaskCode &&
                      element.birTaskVersion === output.taskTask.birTaskVersion &&
                      element.taskCode === output.taskTask.taskCode &&
                      element.taskVersion === output.taskTask.taskVersion
                    );
                  });
                  var isInsideUpdatedList = this.bireTaskLinkUpdatedList.find(function(element) {
                    return (
                      !!output &&
                      !!output.taskTask &&
                      element.birTaskCode === output.taskTask.birTaskCode &&
                      element.birTaskVersion === output.taskTask.birTaskVersion &&
                      element.taskCode === output.taskTask.taskCode &&
                      element.taskVersion === output.taskTask.taskVersion
                    );
                  });
                  if (posteriorTask.linkedTaskMain) {
                    output.taskTask.birTaskCode = this.task.taskCode;
                    output.taskTask.birTaskVersion = this.task.taskVersion;
                    output.taskTask.taskLinkCode = posteriorTask.linkType;
                  } else {
                    output.taskTask.birTaskCode = output.task.taskCode;
                    output.taskTask.birTaskVersion = output.task.taskVersion;
                    output.taskTask.taskCode = this.task.taskCode;
                    output.taskTask.taskVersion = this.task.taskVersion;
                  }
                  if (isInsideAddedList) {
                    var index = this.bireTaskLinkAddedList.indexOf(isInsideAddedList);
                    this.bireTaskLinkAddedList[index] = output.taskTask;
                  } else if (isInsideUpdatedList) {
                    var index = this.bireTaskLinkUpdatedList.indexOf(isInsideUpdatedList);
                    this.bireTaskLinkUpdatedList[index] = output.taskTask;
                  } else {
                    this.bireTaskLinkUpdatedList.push(output.taskTask);
                  }
                  var temp = __assign({}, output.task);
                  if (output.task.taskTypeCode) {
                    var taskType = this.taskTypes.filter(function(type) {
                      return !!output && !!output.task && type.value === output.task.taskTypeCode;
                    });
                    if (taskType[0]) {
                      temp.taskTypeCode = taskType[0].label;
                    }
                  }
                  if (output.task.groupCode) {
                    var taskGroup = this.taskGroups.filter(function(group) {
                      return !!output && !!output.task && group.value === output.task.groupCode;
                    });
                    if (taskGroup[0]) {
                      temp.groupCode = taskGroup[0].label;
                    }
                  }
                  temp.sequenceNumber = output.taskTask.sequenceNumber;
                  this.posteriorTaskTableDataSource.replaceData(
                    this.posteriorTaskTableDataSource.dataSrc[this.currentPosteriorIndex],
                    temp
                  );
                }
              } else {
                var searchInDisplayedTable = this.posteriorTaskTableDataSource.dataSrc.find(function(value) {
                  return (
                    !!output &&
                    !!output.task &&
                    value.taskCode === output.task.taskCode &&
                    value.taskVersion === output.task.taskVersion
                  );
                });
                if (!searchInDisplayedTable) {
                  if (output.task && output.taskTask) {
                    var linkedOutput = {
                      bireTaskDTO: output.task,
                      linkType: output.taskTask.taskLinkCode,
                      sequenceNumber: output.taskTask.sequenceNumber
                    };
                    var temp = __assign({}, linkedOutput);
                    if (!!temp && !!temp.bireTaskDTO) {
                      if (output.task.taskTypeCode) {
                        var taskType = this.taskTypes.filter(function(type) {
                          return !!output && !!output.task && type.value === output.task.taskTypeCode;
                        });
                        if (taskType[0]) {
                          temp.bireTaskDTO.taskTypeCode = taskType[0].label;
                        }
                      }
                      if (output.task.groupCode) {
                        var taskGroup = this.taskGroups.filter(function(group) {
                          return !!output && !!output.task && group.value === output.task.groupCode;
                        });
                        if (taskGroup[0]) {
                          temp.bireTaskDTO.groupCode = taskGroup[0].label;
                        }
                      }
                      this.posteriorTable.push(temp);
                      temp.bireTaskDTO.sequenceNumber = output.taskTask.sequenceNumber;
                      this.posteriorTaskTableDataSource.addData([temp.bireTaskDTO]);
                      output.taskTask.birTaskCode = output.task.taskCode;
                      output.taskTask.birTaskVersion = output.task.taskVersion;
                      output.taskTask.taskCode = this.task.taskCode;
                      output.taskTask.taskVersion = this.task.taskVersion;
                      this.bireTaskLinkAddedList.push(output.taskTask);
                    } else {
                      _super.prototype.throwUnboundLocalError.call(
                        this,
                        'onAssociatedPosteriorTask',
                        'temp && temp.bireTaskDTO'
                      );
                    }
                  }
                }
              }
              this.currentPosteriorIndex = undefined;
              this.posteriorTaskTableDataSource.dataSelection = [];
            }
          };
          /*************************************************************************
           * LinkedTask dialog
           *************************************************************************/
          TaskFormComponent.prototype.onAssociatedLinkedTask = function(output) {
            var isParentTask = !!output.task && output.task.taskCode === this.task.taskCode;
            var inOtherAssociatedTaskTables =
              this.superiorTableDataSource.dataSrc.some(function(superiorTask) {
                return !!output.task && superiorTask.taskCode === output.task.taskCode;
              }) ||
              (!!this.topDownTreeTable[0].children &&
                this.topDownTreeTable[0].children.some(function(topDownTask) {
                  return !!output.task && topDownTask.data.bireTaskDTO.taskCode === output.task.taskCode;
                })) ||
              this.anteriorTaskTableDataSource.dataSrc.some(function(anteriorTask) {
                return !!output.task && anteriorTask.taskCode === output.task.taskCode;
              }) ||
              this.posteriorTaskTableDataSource.dataSrc.some(function(posteriorTask) {
                return !!output.task && posteriorTask.taskCode === output.task.taskCode;
              });
            if (isParentTask) {
              this.messageService.showErrorMessage(this.getTranslateKey('cannotLinkWithSelf'));
            }
            if (!inOtherAssociatedTaskTables && !isParentTask) {
              if (this.currentLinkedTaskIndex !== null && this.currentLinkedTaskIndex !== undefined) {
                var previousLinkedTask = this.linkedTaskTableDataSource.dataSrc[this.currentLinkedTaskIndex];
                if (
                  !!output &&
                  !!output.task &&
                  !!output.taskTask &&
                  !!output.taskTask.taskLinkCode &&
                  !!output.task.taskCode &&
                  !!output.task.taskVersion
                ) {
                  var tempOutput = {
                    linkType: output.taskTask.taskLinkCode,
                    taskCode: output.task.taskCode,
                    taskVersion: output.task.taskVersion,
                    taskDesignation: output.task.taskDesignation,
                    taskType: output.task.taskTypeCode,
                    taskGroup: output.task.groupCode
                  };
                  if (output.taskTask.taskLinkCode) {
                    var linkType = this.associatedLinkTypes.filter(function(type) {
                      return !!output && !!output.taskTask && type.value === output.taskTask.taskLinkCode;
                    });
                    if (linkType[0]) {
                      tempOutput.linkType = linkType[0].label;
                    }
                  }
                  if (output.task.taskTypeCode) {
                    var taskType = this.taskTypes.filter(function(type) {
                      return !!output && !!output.task && type.value === output.task.taskTypeCode;
                    });
                    if (taskType[0]) {
                      tempOutput.taskType = taskType[0].label;
                    }
                  }
                  if (output.task.groupCode) {
                    var taskGroup = this.taskGroups.filter(function(group) {
                      return !!output && !!output.task && group.value === output.task.groupCode;
                    });
                    if (taskGroup[0]) {
                      tempOutput.taskGroup = taskGroup[0].label;
                    }
                  }
                  if (
                    _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_30__['DTOUtils'].equalsLinkedTasksTableDTO(
                      tempOutput,
                      previousLinkedTask
                    )
                  ) {
                    var isInsideAddedList = this.bireTaskLinkAddedList.find(function(element) {
                      return (
                        !!output &&
                        !!output.taskTask &&
                        element.birTaskCode === output.taskTask.birTaskCode &&
                        element.birTaskVersion === output.taskTask.birTaskVersion &&
                        element.taskCode === output.taskTask.taskCode &&
                        element.taskVersion === output.taskTask.taskVersion
                      );
                    });
                    var isInsideUpdatedList = this.bireTaskLinkUpdatedList.find(function(element) {
                      return (
                        !!output &&
                        !!output.taskTask &&
                        element.birTaskCode === output.taskTask.birTaskCode &&
                        element.birTaskVersion === output.taskTask.birTaskVersion &&
                        element.taskCode === output.taskTask.taskCode &&
                        element.taskVersion === output.taskTask.taskVersion
                      );
                    });
                    output.taskTask.birTaskCode = output.task.taskCode;
                    output.taskTask.birTaskVersion = output.task.taskVersion;
                    output.taskTask.taskCode = this.task.taskCode;
                    output.taskTask.taskVersion = this.task.taskVersion;
                    if (isInsideAddedList) {
                      var index = this.bireTaskLinkAddedList.indexOf(isInsideAddedList);
                      this.bireTaskLinkAddedList[index] = output.taskTask;
                    } else if (isInsideUpdatedList) {
                      var index = this.bireTaskLinkUpdatedList.indexOf(isInsideUpdatedList);
                      this.bireTaskLinkUpdatedList[index] = output.taskTask;
                    } else {
                      this.bireTaskLinkUpdatedList.push(output.taskTask);
                    }
                    var temp = __assign({}, tempOutput);
                    if (output.taskTask.taskLinkCode) {
                      var linkType = this.associatedLinkTypes.filter(function(type) {
                        return !!output && !!output.taskTask && type.value === output.taskTask.taskLinkCode;
                      });
                      if (linkType[0]) {
                        temp.linkType = linkType[0].label;
                      }
                    }
                    if (output.task.taskTypeCode) {
                      var taskType = this.taskTypes.filter(function(type) {
                        return !!output && !!output.task && type.value === output.task.taskTypeCode;
                      });
                      if (taskType[0]) {
                        temp.taskType = taskType[0].label;
                      }
                    }
                    if (output.task.groupCode) {
                      var taskGroup = this.taskGroups.filter(function(group) {
                        return !!output && !!output.task && group.value === output.task.groupCode;
                      });
                      if (taskGroup[0]) {
                        temp.taskGroup = taskGroup[0].label;
                      }
                    }
                    this.linkedTaskTableDataSource.replaceData(
                      this.linkedTaskTableDataSource.dataSrc[this.currentLinkedTaskIndex],
                      temp
                    );
                    this.linkedTasksTable[this.currentLinkedTaskIndex].sequenceNumber = output.taskTask.sequenceNumber;
                  }
                }
              } else {
                var searchInDisplayedTable = this.linkedTaskTableDataSource.dataSrc.find(function(value) {
                  return (
                    !!output &&
                    !!output.task &&
                    value.taskCode === output.task.taskCode &&
                    value.taskVersion === output.task.taskVersion
                  );
                });
                if (!searchInDisplayedTable) {
                  if (output.task && output.taskTask) {
                    var linkedOutput = {
                      bireTaskDTO: output.task,
                      linkType: output.taskTask.taskLinkCode,
                      sequenceNumber: output.taskTask.sequenceNumber
                    };
                    if (!!output.taskTask.taskLinkCode && !!output.task.taskCode && !!output.task.taskVersion) {
                      var tableOutput = {
                        taskCode: output.task.taskCode,
                        taskVersion: output.task.taskVersion,
                        taskDesignation: output.task.taskDesignation,
                        taskType: output.task.taskTypeCode,
                        taskGroup: output.task.groupCode,
                        linkType: output.taskTask.taskLinkCode
                      };
                      var temp = __assign({}, linkedOutput);
                      if (!!temp && !!temp.bireTaskDTO) {
                        if (output.taskTask.taskLinkCode) {
                          var linkType = this.associatedLinkTypes.filter(function(type) {
                            return !!output && !!output.taskTask && type.value === output.taskTask.taskLinkCode;
                          });
                          if (linkType[0]) {
                            temp.linkType = linkType[0].label;
                            tableOutput.linkType = linkType[0].label;
                          }
                        }
                        if (output.task.taskTypeCode) {
                          var taskType = this.taskTypes.filter(function(type) {
                            return !!output && !!output.task && type.value === output.task.taskTypeCode;
                          });
                          if (taskType[0]) {
                            temp.bireTaskDTO.taskTypeCode = taskType[0].label;
                            tableOutput.taskType = taskType[0].label;
                          }
                        }
                        if (output.task.groupCode) {
                          var taskGroup = this.taskGroups.filter(function(group) {
                            return !!output && !!output.task && group.value === output.task.groupCode;
                          });
                          if (taskGroup[0]) {
                            temp.bireTaskDTO.groupCode = taskGroup[0].label;
                            tableOutput.taskGroup = taskGroup[0].label;
                          }
                        }
                        this.linkedTasksTable.push(temp);
                        this.linkedTaskTableDataSource.addData([tableOutput]);
                        output.taskTask.birTaskCode = output.task.taskCode;
                        output.taskTask.birTaskVersion = output.task.taskVersion;
                        output.taskTask.taskCode = this.task.taskCode;
                        output.taskTask.taskVersion = this.task.taskVersion;
                        this.bireTaskLinkAddedList.push(output.taskTask);
                      }
                    } else {
                      _super.prototype.throwUnboundLocalError.call(
                        this,
                        'onAssociatedLinkedTask',
                        'temp && temp.bireTaskDTO'
                      );
                    }
                  }
                }
              }
              this.currentLinkedTaskIndex = undefined;
              this.linkedTaskTableDataSource.setData(this.linkedTaskTableDataSource.dataSrc);
              this.linkedTaskTableDataSource.dataSelection = [];
            }
          };
          /**************************************************************************
           * Document Dialog
           *************************************************************************/
          TaskFormComponent.prototype.addNewDocument = function(newDocument) {
            var searchInDisplayedList = this.documentsTableDataSource.dataSrc.find(function(value) {
              return value.docName === newDocument.docName;
            });
            if (!searchInDisplayedList) {
              this.documentsAdded.push(newDocument);
              this.bireDocumentDisplayed.push(this.getCustomDocumentRow(newDocument));
              var doc = __assign({}, newDocument);
              _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_32__['LabelValueUtils'].stringValueToLabel(
                doc,
                'docCategory',
                this.documentCategories
              );
              this.documentsTableDataSource.addData([doc]);
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('warningOnFileExists'));
            }
          };
          TaskFormComponent.prototype.updateDocument = function(updatedDocument) {
            if (
              this.currentDocumentIndex !== null &&
              this.currentDocumentIndex !== undefined &&
              this.currentDocumentIndex >= 0
            ) {
              if (!this.hasDuplicateDocument(updatedDocument)) {
                var inAddedList = this.documentsAdded.some(function(doc) {
                  return doc.docCode === updatedDocument.docCode;
                });
                var inUpdatedList = this.documentsUpdated.some(function(doc) {
                  return doc.docCode === updatedDocument.docCode;
                });
                if (inAddedList) {
                  // added but unsaved
                  var indexInAddedList = this.documentsAdded.findIndex(function(doc) {
                    return doc.docCode === updatedDocument.docCode;
                  });
                  this.documentsAdded[indexInAddedList] = updatedDocument;
                } else if (inUpdatedList) {
                  // DB value already updated
                  var indexInUpdatedList = this.documentsUpdated.findIndex(function(doc) {
                    return doc.docCode === updatedDocument.docCode;
                  });
                  this.documentsUpdated[indexInUpdatedList] = updatedDocument;
                } else {
                  // non updated DB value
                  this.documentsUpdated.push(updatedDocument);
                }
                var document_1 = __assign({}, updatedDocument);
                _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_32__['LabelValueUtils'].stringValueToLabel(
                  document_1,
                  'docCategory',
                  this.documentCategories
                );
                this.documentsTableDataSource.replaceData(this.documentsTableDataSource.dataSelection[0], document_1);
                this.bireDocumentDisplayed[this.currentDocumentIndex] = this.getCustomDocumentRow(updatedDocument);
                this.documentsTableDataSource.dataSelection = [];
              } else {
                this.messageService.showErrorMessage(this.getTranslateKey('warningOnFileExists'));
              }
            }
          };
          TaskFormComponent.prototype.hasDuplicateDocument = function(rowData) {
            var measurementPointList = __spread(this.documentsTableDataSource.dataSrc);
            if (this.documentsTableDataSource.hasDataSelection) {
              var selectedMeasurementRow_1 = this.documentsTableDataSource.dataSelection[0];
              // Return all the rows except selected rows
              measurementPointList = this.documentsTableDataSource.dataSrc.filter(function(mprow) {
                return selectedMeasurementRow_1.docName !== mprow.docName;
              });
            }
            // check whether any other rows have same counter code of row data or not
            var hasAnyDuplicateRow = measurementPointList.some(function(row) {
              return row.docName === rowData.docName;
            });
            return hasAnyDuplicateRow;
          };
          TaskFormComponent.prototype.downloadDocument = function(event) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_31__['FileUtils'].downloadFile(
              event.docFile,
              event.docName
            );
          };
          // Currency
          TaskFormComponent.prototype.loadCurrency = function() {
            var _this = this;
            this.taskFormService.getLocalCurrency().subscribe(function(result) {
              var currencyRegexp = /^[a-zA-Z]+ \(([A-Z]+)\)$/;
              var mo = result.match(currencyRegexp);
              _this.currency = mo ? mo[1] : result;
            });
          };
          // History popup management
          TaskFormComponent.prototype.openStatusUpdatesPopup = function() {
            if (!!this.task && !!this.task.taskCode && !!this.task.taskVersion) {
              var taskId = {
                taskCode: this.task.taskCode,
                taskVersion: this.task.taskVersion
              };
              this.showStatusUpdatesPopup = true;
              var columns = [
                {
                  field: 'timestamp',
                  width: '200px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input,
                  isDate: true
                },
                {
                  field: 'statusUser',
                  width: '200px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'action',
                  width: '200px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'statusState',
                  width: '250px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'taskTypeCode',
                  width: '250px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'taskDesignation',
                  width: '200px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'taskDescription',
                  width: '200px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'groupCode',
                  width: '200px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'repairCenterCode',
                  width: '250px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'taskChapter',
                  width: '250px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'taskSection',
                  width: '200px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'taskSubject',
                  width: '200px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'taskTask',
                  width: '200px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'taskSubTask',
                  width: '250px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'taskStatus',
                  width: '250px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'taskApplicabilityDate',
                  width: '200px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input,
                  isDate: true
                },
                {
                  field: 'taskApplicabilityCode',
                  width: '200px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'overhaul',
                  width: '200px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input
                },
                {
                  field: 'inspectionPerEsm',
                  width: '200px',
                  filterMode:
                    _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_14__['TableColumnFilterMode']
                      .Input
                }
              ];
              this.updatesKeyMap.set('statusState', this.propertiesService.getValue('getFuncObjectStatusMap'));
              this.updatesKeyMap.set('taskTypeCode', this.propertiesService.getValue('getTaskTypeMap'));
              this.updatesKeyMap.set('taskStatus', this.propertiesService.getValue('getFuncObjectStatusMap'));
              this.updatesKeyMap.set(
                'taskApplicabilityCode',
                this.propertiesService.getValue('getTaskApplicabilityCodeMap')
              );
              this.updatesKeyMap.set('repairCenterCode', this.taskSearchService.findMROCenter());
              this.updatesKeyMap.set('groupCode', this.taskSearchService.getTaskGroups());
              this.tableStatusUpdatesData = {
                componentId: 'TaskFormComponent',
                tableCols: columns,
                tableRows: this.updateHistoricService.findBireTaskHistoric(taskId),
                dataKey: undefined,
                selectionMode:
                  _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_15__['TableSelectionMode'].Multiple,
                globalFilter: false
              };
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'openStatusUpdatesPopup', 'this.task');
            }
          };
          TaskFormComponent.prototype.updateObjectStatusFromStatusUpdatesHistory = function(event) {
            var input = {
              statusDate: event.statusDate,
              statusState: event.statusState,
              statusUser: event.statusUser
            };
            // tslint:disable-next-line:no-empty
            this.taskFormService.updateStaus(input).subscribe(function() {});
          };
          TaskFormComponent.prototype.openHistoricAttributes = function() {
            if (!!this.task && !!this.task.taskCode && !!this.task.taskVersion && !!this.dynamicAttributesForTask) {
              this.showDynamicAttributesHistoric = true;
              var attributeIds = this.dynamicAttributesService.toBireTaskAttributeId(
                this.task.taskCode,
                this.task.taskVersion,
                this.dynamicAttributesForTask
              );
              this.dynamicAttributesHistoric = this.taskFormService.findHBireTaskAttributesByAttributeId(attributeIds);
            } else {
              _super.prototype.throwUnboundLocalError.call(
                this,
                'openHistoricAttributes',
                'this.task && task.taskCode && this.task.taskVersion && this.dynamicAttributesForTask'
              );
            }
          };
          ///////////////////////////////////////////////////////////////////////////////
          TaskFormComponent.prototype.openItem = function(input) {
            var objectId = {
              familyCode: input._obj.familyCode,
              chapter: input._obj.chapter,
              section: input._obj.section,
              sheet: input._obj.sheet,
              marks: input._obj.marks,
              subject: input._obj.subject,
              structureType: input._obj.structureType,
              variantCode: input._obj.variantCode
            };
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants'].ENG_ITEM_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          TaskFormComponent.prototype.openField = function(input) {
            if (!!this.task.taskCode) {
              var taskDmc = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].orEmpty(
                this.task.taskTask
              );
              var familyVariantCode = _shared_utils_bire_family_variant_utils__WEBPACK_IMPORTED_MODULE_29__[
                'BireFamilyVariantUtil'
              ].buildFamilyVariantCodeWithoutStructureType(input._obj.familyCode, input._obj.variantCode);
              if (!familyVariantCode) {
                return;
              }
              this.davFieldService
                .buildTaskFieldLink({ familyVariantCode: familyVariantCode, taskDmc: taskDmc })
                .subscribe(function(data) {
                  window.open(data);
                });
            }
          };
          TaskFormComponent.prototype.isHighlightTaskUpdate = function(taskTemp) {
            var _this = this;
            this.taskFormService.isHighlightUpdate().subscribe(function(result) {
              _this.highlightUpdate = result;
              if (result) {
                _this.getUpdatedFields(taskTemp);
              }
            });
          };
          TaskFormComponent.prototype.getUpdatedFields = function(taskTemp) {
            var _this = this;
            this.taskFormService.getTaskLastUpdatedFields(taskTemp).subscribe(function(result) {
              _this.updatedFieldIds = result;
              if (_this.updatedFieldIds.length > 0) {
                _this.getPrevisousTaskVersion(taskTemp);
              }
            });
          };
          TaskFormComponent.prototype.getPrevisousTaskVersion = function(taskTemp) {
            var _this = this;
            this.resetHightlightTabs();
            this.taskFormService.getPreviousTaskByTaskVersion(taskTemp).subscribe(function(result) {
              if (result) {
                _this.taskFormService.findLastBireMaintenanceProgramsByTask(result).subscribe(function(lastMP) {
                  _this.previousTaskVersionLastMP = lastMP;
                });
                _this.previousTaskVersion = result;
                _this.getDiff();
              }
            });
          };
          TaskFormComponent.prototype.isUpdatedField = function(field) {
            if (this.highlightUpdate && this.updatedFieldIds && this.updatedFieldIds.indexOf(field) !== -1) {
              this.highlightTabs(field);
              return true;
            }
            return false;
          };
          TaskFormComponent.prototype.resetHightlightTabs = function() {
            this.highlightHome = false;
            this.highlightTaskCard = false;
            this.highlightImpacts = false;
            this.highlightPrerequisites = false;
            this.highlightAttributes = false;
            this.highlightDocuments = false;
            this.highlightMeasurementPoint = false;
          };
          TaskFormComponent.prototype.getDiff = function() {
            if (!this.highlightUpdate) {
              return;
            }
            var descDiff = this.dmp.diff_main(this.previousTaskVersion.taskDescription, this.task.taskDescription);
            var designDiff = this.dmp.diff_main(this.previousTaskVersion.taskDesignation, this.task.taskDesignation);
            this.dmp.diff_cleanupSemantic(designDiff);
            this.dmp.diff_cleanupSemantic(descDiff);
            this.taskDesignationDiff = this.dmp.diff_prettyHtml(designDiff);
            this.taskDescriptionDiff = this.dmp.diff_prettyHtml(descDiff);
          };
          TaskFormComponent.prototype.highlightTabs = function(field) {
            if (field) {
              if (
                field.startsWith(
                  _shared_constants_task_fields_constants__WEBPACK_IMPORTED_MODULE_12__['TaskFieldsConstant'].TASK_CARD
                )
              ) {
                this.highlightTaskCard = true;
              } else if (
                field.startsWith(
                  _shared_constants_task_fields_constants__WEBPACK_IMPORTED_MODULE_12__['TaskFieldsConstant'].IMPACTS
                )
              ) {
                this.highlightImpacts = true;
              } else if (
                field.startsWith(
                  _shared_constants_task_fields_constants__WEBPACK_IMPORTED_MODULE_12__['TaskFieldsConstant']
                    .PREREQUISITES
                )
              ) {
                this.highlightPrerequisites = true;
              } else if (
                field.startsWith(
                  _shared_constants_task_fields_constants__WEBPACK_IMPORTED_MODULE_12__['TaskFieldsConstant'].ATTRIBUTES
                )
              ) {
                this.highlightAttributes = true;
              } else if (
                field.startsWith(
                  _shared_constants_task_fields_constants__WEBPACK_IMPORTED_MODULE_12__['TaskFieldsConstant'].DOCUMENTS
                )
              ) {
                this.highlightDocuments = true;
              } else if (
                field.startsWith(
                  _shared_constants_task_fields_constants__WEBPACK_IMPORTED_MODULE_12__['TaskFieldsConstant']
                    .MEASUREMENT_POINT
                )
              ) {
                this.highlightMeasurementPoint = true;
              } else {
                this.highlightHome = true;
              }
            }
          };
          TaskFormComponent.prototype.createEvolutionRow = function(evolution) {
            var evolutionLinkType = this.evolutionLinkTypes.filter(function(type) {
              return type.value === evolution.taskEvolutionTypeCode;
            });
            var evolutionRow = {
              evolutionNumber: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].orEmpty(
                evolution.evolutionNumber
              ),
              evolutionRevisionNumber: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].orEmpty(
                evolution.evolutionRevisionNumber
              ),
              designation: '',
              taskEvolutionTypeCode: evolutionLinkType.length ? evolutionLinkType[0].label : '',
              _obj: evolution
            };
            return evolutionRow;
          };
          TaskFormComponent.prototype.createMaintainedItemRow = function(obj) {
            var selectedLinkType = this.itemLinkTypes.find(function(type) {
              return type.value === obj.taskItemTypeCode;
            });
            var selectedStructureType = this.structureType.find(function(structureType) {
              return structureType.value === obj.structureType;
            });
            var familyVariant = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].orEmpty(
              obj.familyCode
            );
            familyVariant +=
              selectedStructureType &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].isNullOrEmpty(
                selectedStructureType.label
              )
                ? '-' +
                  _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].orEmpty(
                    selectedStructureType.label
                  )
                : '';
            familyVariant += _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].isNullOrEmpty(
              obj.variantCode
            )
              ? ''
              : '-' + _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].orEmpty(obj.variantCode);
            var item = obj.chapter + '-' + obj.section + '-' + obj.subject + '-' + obj.sheet + '-' + obj.marks;
            var row = {
              familyVariant: familyVariant,
              item: item,
              designation: !!obj.bireItemDTO && !!obj.bireItemDTO.name ? obj.bireItemDTO.name : '',
              linkType: selectedLinkType
                ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].orEmpty(
                    selectedLinkType.label
                  )
                : '',
              versionNumber: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].orEmpty(
                obj.versionNumber
              ),
              field: this.translateService.instant(this.getTranslateKey('openField')),
              _obj: obj
            };
            return row;
          };
          TaskFormComponent.prototype.fillDesignationInEvolutionTable = function() {
            var _this = this;
            this.evolutionsTableDataSource.dataSrc.forEach(function(row) {
              var input = {
                evolutionRevisionNumber: row._obj.evolutionRevisionNumber,
                evolutionNumber: row._obj.evolutionNumber
              };
              _this.taskFormService.findBireEvolution(input).subscribe(
                function(result) {
                  row.designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_36__['StringUtils'].orEmpty(
                    result.evolutionSummary
                  );
                },
                function() {
                  row.designation = '';
                }
              );
            });
          };
          TaskFormComponent.prototype.setTableOfContent = function() {
            var _this = this;
            var documentsKey = this.getTranslateKey('documents');
            var generalKey = this.getTranslateKey('general');
            var descriptionKey = this.getTranslateKey('taskDescription');
            var impactsKey = this.getTranslateKey('impacts');
            var mainInformationKey = this.getTranslateKey('mainData');
            var manualsKey = this.getTranslateKey('manuals');
            var prerequisitesKey = this.getTranslateKey('prerequisites');
            var taskCardKey = this.getTranslateKey('taskCard');
            var measurementPointsKey = this.getTranslateKey('measurementPoints');
            this.translateService
              .get([
                documentsKey,
                generalKey,
                descriptionKey,
                impactsKey,
                mainInformationKey,
                manualsKey,
                prerequisitesKey,
                taskCardKey,
                measurementPointsKey
              ])
              .subscribe(function(results) {
                var documentsLabel = !!results ? results[documentsKey] : 'Documents';
                var generalLabel = !!results ? results[generalKey] : 'General';
                var descriptionLabel = !!results ? results[descriptionKey] : 'Description';
                var impactsLabel = !!results ? results[impactsKey] : 'Impacts';
                var mainInformationLabel = !!results ? results[mainInformationKey] : 'Main Information';
                var manualsLabel = !!results ? results[manualsKey] : 'Manuals';
                var prerequisitesLabel = !!results ? results[prerequisitesKey] : 'Prerequisites';
                var taskCardLabel = !!results ? results[taskCardKey] : 'Task Card';
                var measurementPointsLabel = !!results ? results[measurementPointsKey] : 'Measurement Points';
                _this.toc = [
                  {
                    id: 'mainInformationAnchor',
                    anchor: _this.mainInformationEltRef,
                    label: mainInformationLabel
                  },
                  {
                    id: 'taskCardAnchor',
                    anchor: _this.taskCardEltRef,
                    label: taskCardLabel
                  },
                  {
                    id: 'generalAnchor',
                    anchor: _this.generalEltRef,
                    label: generalLabel
                  },
                  {
                    id: 'descriptionTabAnchor',
                    anchor: _this.descriptionElRef,
                    label: descriptionLabel
                  },
                  {
                    id: 'impactsAnchor',
                    anchor: _this.impactsEltRef,
                    label: impactsLabel
                  },
                  {
                    id: 'manualsAnchor',
                    anchor: _this.manualsEltRef,
                    label: manualsLabel
                  },
                  {
                    id: 'prerequisitesAnchor',
                    anchor: _this.prerequisitesEltRef,
                    label: prerequisitesLabel
                  },
                  {
                    id: 'documentsAnchor',
                    anchor: _this.documentsEltRef,
                    label: documentsLabel
                  },
                  {
                    id: 'measurementPointsAnchor',
                    anchor: _this.measurementPointsEltRef,
                    label: measurementPointsLabel
                  }
                ];
                _super.prototype.selectPageTocEntry.call(_this, _this.component.MAIN_INFORMATION_ANCHOR_ID);
              });
          };
          TaskFormComponent.prototype.sortOperationTable = function() {
            this.operationTableDataSource.dataSrc.sort(function(e1, e2) {
              if (
                !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_34__['ObjectUtils'].isDefined(e1.opeSequenceNumber)
              ) {
                return 1;
              } else if (
                !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_34__['ObjectUtils'].isDefined(e2.opeSequenceNumber)
              ) {
                return -1;
              } else {
                var s1 = e1.opeSequenceNumber;
                var s2 = e2.opeSequenceNumber;
                return s1 < s2 ? -1 : s1 > s2 ? 1 : 0;
              }
            });
          };
          /**************************************************************************
           * Measurement Points
           *************************************************************************/
          TaskFormComponent.prototype.loadMeasurementPointsTable = function(bireTaskDTOId) {
            var _this = this;
            this.measurementPointsTableDataSource.setData([]);
            this.taskFormService.findAllBireTaskMeasurementPoint(bireTaskDTOId).subscribe(
              function(results) {
                if (!!results) {
                  _this.measurementPointsTableDataSource.setData(results);
                  _this.sortMeasurementPointsTable();
                }
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFindTilTasks'));
              }
            );
          };
          TaskFormComponent.prototype.sortMeasurementPointsTable = function() {
            this.measurementPointsTableDataSource.dataSrc.sort(function(a, b) {
              if (!!a.groupCode && !!b.groupCode && a.groupCode !== b.groupCode) {
                var groupCodeA = a.groupCode.toLowerCase();
                var groupCodeB = b.groupCode.toLowerCase();
                return groupCodeA > groupCodeB ? 1 : -1;
              } else if (!a.groupCode && b.groupCode && b.groupCode.toLowerCase()) {
                return -1;
              } else if (!b.groupCode && a.groupCode && a.groupCode.toLowerCase()) {
                return 1;
              } else {
                return !!a.sequenceNumber && !!b.sequenceNumber ? a.sequenceNumber - b.sequenceNumber : 0;
              }
            });
            this.measurementPointsTableDataSource.setData(this.measurementPointsTableDataSource.dataSrc);
          };
          TaskFormComponent.prototype.getMaxLinkedGroupNumber = function() {
            var _this = this;
            var maxLinkedGroupId = 0;
            var linkNumber = [];
            this.measurementPointsTableDataSource.dataSrc.forEach(function(row) {
              if (!!row.groupCode && row.groupCode.indexOf(_this.component.LINK_MEASURE_ROW) === 0) {
                var linkRow = Number(row.groupCode.replace(_this.component.LINK_MEASURE_ROW, '').trim());
                linkNumber.push(linkRow);
              }
            });
            if (linkNumber.length > 0) {
              maxLinkedGroupId = Math.max.apply(Math, __spread(linkNumber));
            }
            return maxLinkedGroupId;
          };
          TaskFormComponent.prototype.addMeasurementPoint = function() {
            this.measurementPointRowData = undefined;
            this.measurementPointDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Create;
            this.showMeasurementPointDialog = true;
          };
          TaskFormComponent.prototype.updateMeasurementPoint = function() {
            var _this = this;
            if (
              this.measurementPointsTableDataSource.hasDataSelection &&
              this.measurementPointsTableDataSource.dataSelectionCount === 1
            ) {
              this.measurementPointRowData = __assign({}, this.measurementPointsTableDataSource.dataSelection[0]);
              var counterCode_1 = this.measurementPointRowData.counterCode;
              this.isLinkedRefMeasurementCode = this.measurementPointsTableDataSource.dataSrc
                .filter(function(row) {
                  return !!row.counterCode && row.counterCode !== counterCode_1;
                })
                .some(function(mpoint) {
                  return (
                    !!_this.measurementPointRowData &&
                    mpoint.unitCode === _this.component.BOOLEAN &&
                    !!mpoint.groupCode &&
                    mpoint.groupCode === _this.measurementPointRowData.groupCode
                  );
                });
              this.measurementPointDialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Write;
              this.showMeasurementPointDialog = true;
            }
          };
          TaskFormComponent.prototype.openMeasurementPoint = function() {
            if (this.measurementPointsTableDataSource.dataSelectionCount === 1) {
              this.measurementPointDialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read;
              this.measurementPointRowData = __assign({}, this.measurementPointsTableDataSource.dataSelection[0]);
              this.showMeasurementPointDialog = true;
            }
          };
          TaskFormComponent.prototype.onValidatedMeasurementRow = function(rowData) {
            var _this = this;
            if (!!rowData) {
              if (!this.hasDuplicateMeasureCode(rowData)) {
                if (this.measurementPointsTableDataSource.hasDataSelection) {
                  this.measurementPointsTableDataSource.replaceData(
                    this.measurementPointsTableDataSource.dataSelection[0],
                    rowData
                  );
                  this.measurementPointsTableDataSource.dataSelection = [];
                } else {
                  this.measurementPointsTableDataSource.addData([rowData]);
                }
                this.measurementPointRowData = undefined;
                this.sortMeasurementPointsTable();
                this.removeBireTaskMeasurementList.forEach(function(element, index) {
                  if (element.counterCode === rowData.counterCode) {
                    _this.removeBireTaskMeasurementList.splice(index, 1);
                  }
                });
              } else {
                this.messageService.showErrorMessage(this.getTranslateKey('duplicateMeasureCode'));
              }
            }
          };
          TaskFormComponent.prototype.hasDuplicateMeasureCode = function(rowData) {
            var measurementPointList = __spread(this.measurementPointsTableDataSource.dataSrc);
            if (this.measurementPointsTableDataSource.hasDataSelection) {
              var selectedMeasurementRow_2 = this.measurementPointsTableDataSource.dataSelection[0];
              // Return all the rows except selected rows
              measurementPointList = this.measurementPointsTableDataSource.dataSrc.filter(function(mprow) {
                return selectedMeasurementRow_2.counterCode !== mprow.counterCode;
              });
            }
            // check whether any other rows have same counter code of row data or not
            var hasAnyDuplicateRow = measurementPointList.some(function(row) {
              return row.counterCode === rowData.counterCode;
            });
            return hasAnyDuplicateRow;
          };
          TaskFormComponent.prototype.showMeasurementPointFormulaButton = function() {
            var hasRowsBooleanType = false;
            if (
              this.measurementPointsTableDataSource.dataSelectionCount === 1 &&
              this.measurementPointsTableDataSource.dataSelection[0].unitCode &&
              this.measurementPointsTableDataSource.dataSelection[0].unitCode !== this.component.BOOLEAN &&
              this.measurementPointsTableDataSource.dataSelection[0].unitCode !== this.component.TEXT
            ) {
              hasRowsBooleanType = true;
            }
            return hasRowsBooleanType;
          };
          TaskFormComponent.prototype.showMeasurementPointLinkButton = function() {
            var _this = this;
            var hasRowsBooleanType = false;
            if (
              this.measurementPointsTableDataSource.hasDataSelection &&
              this.measurementPointsTableDataSource.dataSelectionCount > 1
            ) {
              hasRowsBooleanType = this.measurementPointsTableDataSource.dataSelection.every(function(mpRow) {
                return mpRow.unitCode === _this.component.BOOLEAN && !mpRow.groupCode;
              });
            }
            return hasRowsBooleanType;
          };
          TaskFormComponent.prototype.showMeasurementPointUnLinkButton = function() {
            var _this = this;
            var hasRowsLinked = false;
            if (this.measurementPointsTableDataSource.dataSelectionCount === 1) {
              hasRowsLinked = this.measurementPointsTableDataSource.dataSelection.some(function(mpRow) {
                return !!mpRow.groupCode && mpRow.unitCode === _this.component.BOOLEAN;
              });
            }
            return hasRowsLinked;
          };
          TaskFormComponent.prototype.deleteMeasurementPoints = function(selectedRows) {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(
                selectedRows.length === 1
                  ? 'confirmDeleteSelectedMeasurementPoint'
                  : 'confirmDeleteSelectedMeasurementPoints'
              ),
              accept: function() {
                selectedRows.map(function(receipt) {
                  return _this.removeBireTaskMeasurementList.push({
                    counterCode: receipt.counterCode,
                    taskCode: _this.task.taskCode,
                    taskVersion: _this.task.taskVersion
                  });
                });
                var measurementPointList = _this.measurementPointsTableDataSource.dataSrc.filter(function(mprow) {
                  return !selectedRows.some(function(deletedRow) {
                    return (
                      deletedRow.counterCode === mprow.counterCode && deletedRow.sequenceNumber === mprow.sequenceNumber
                    );
                  });
                });
                _this.measurementPointsTableDataSource.setData(measurementPointList);
                _this.sortMeasurementPointsTable();
              }
            });
          };
          TaskFormComponent.prototype.linkMeasurementPoints = function() {
            var _this = this;
            if (this.measurementPointsTableDataSource.dataSelectionCount > 1) {
              var maxLinkedGroupId_1 = this.getMaxLinkedGroupNumber() + 1;
              this.measurementPointsTableDataSource.dataSelection.forEach(function(mpoint) {
                mpoint.groupCode = _this.component.LINK_MEASURE_ROW + ' ' + maxLinkedGroupId_1;
              });
            }
          };
          TaskFormComponent.prototype.unLinkMeasurementPoints = function() {
            var _this = this;
            if (this.measurementPointsTableDataSource.dataSelectionCount === 1) {
              var relatedGroupCodeList = this.measurementPointsTableDataSource.dataSrc.filter(function(mpoint) {
                return mpoint.groupCode === _this.measurementPointsTableDataSource.dataSelection[0].groupCode;
              });
              if (!!relatedGroupCodeList) {
                relatedGroupCodeList.forEach(function(mpoints) {
                  mpoints.groupCode = undefined;
                });
              }
            }
          };
          TaskFormComponent.prototype.toolMeasurementPoint = function() {
            if (this.task) {
              this.pnTaskSearchInput = {
                taskCode: this.task.taskCode,
                taskVersion: this.task.taskVersion
              };
            }
            this.showAddMeasurementPointToolDialog = true;
          };
          TaskFormComponent.prototype.formulaMeasurementPoint = function() {
            this.showAddMeasurementPointFormulaDialog = true;
          };
          TaskFormComponent.prototype.setSelectedTool = function(event) {
            this.measurementPointsTableDataSource.dataSelection[0].toolPartNumber = !!event ? event.pnCode : '';
            this.measurementPointsTableDataSource.update();
          };
          TaskFormComponent.prototype.setFormula = function(event) {
            this.measurementPointsTableDataSource.dataSelection[0].formula = event;
            this.measurementPointsTableDataSource.update();
          };
          TaskFormComponent.prototype.showStatus = function() {
            var _this = this;
            var overlayRef = this._overlayService.openWithPositionCenter({
              content: _object_status_object_status_component__WEBPACK_IMPORTED_MODULE_39__['ObjectStatusComponent'],
              data: {
                currentAuthor: this.task.statusUser,
                currentDate: this.task.statusDate,
                currentStatus: {
                  label: this._formatSelectOption.transform(this.task.taskStatus, this.workflowStatus),
                  value: this.task.taskStatus
                },
                nextStatuses: this.workflowStatus
              }
            });
            overlayRef.afterClosed$.subscribe({
              next: function(event) {
                if (event.data) {
                  _this.task.taskStatus = event.data;
                  _this.saveTask();
                }
              }
            });
          };
          /**
           * upgradeTask() - This function is used to create Task with the new Version.
           * @returns void
           */
          TaskFormComponent.prototype.upgradeTask = function() {
            var _this = this;
            if (!!this.componentData.objectId) {
              var currentTask_1 = {
                taskCode: this.serializationService.deserialize(this.componentData.objectId).taskCode,
                taskVersion: this.serializationService.deserialize(this.componentData.objectId).taskVersion
              };
              this.taskFormService
                .checkAndReturnNewVersionNumberByTask(currentTask_1)
                .subscribe(function(newTaskVersion) {
                  var partialMessageKey = _this.getTranslateKey('upgradeConfirmation');
                  // TODO: need to add util to get complete plan code
                  _this.confirmationService.confirm({
                    interpolateParams: { taskversion: currentTask_1.taskCode + ' : ' + newTaskVersion },
                    messageKey: partialMessageKey,
                    accept: function() {
                      _this.taskFormService
                        .checkNewVersionNumberAndUpgradeBireTaskData(currentTask_1)
                        .subscribe(function(upgradeTask) {
                          if (!!_this.componentData) {
                            _this.componentData.objectId = _this.serializationService.serialize({
                              taskCode: upgradeTask.taskCode,
                              taskVersion: upgradeTask.taskVersion
                            });
                          }
                          _this.ngOnInit();
                        });
                    }
                  });
                });
            }
          };
          TaskFormComponent.prototype.initCostSettingDisplay = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__['GenericPropertyConstants']
                  .AEROWEBB_CONFIGURATION_MAP
              )
              .subscribe(function(awConfiguration) {
                _this.isCostSettingEnabled = _shared_utils_settings_utils__WEBPACK_IMPORTED_MODULE_35__[
                  'SettingsUtils'
                ].isPropertyEnabled(
                  awConfiguration,
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                    .DISPLAY_COST
                );
              });
          };
          var TaskFormComponent_1;
          TaskFormComponent.DOCUMENTS_ANCHOR_ID = 'documentsAnchor';
          TaskFormComponent.GENERAL_ANCHOR_ID = 'generalAnchor';
          TaskFormComponent.DESCRIPTION_ANCHOR_ID = 'descriptionTabAnchor';
          TaskFormComponent.IMPACTS_ANCHOR_ID = 'impactsAnchor';
          TaskFormComponent.MAIN_INFORMATION_ANCHOR_ID = 'mainInformationAnchor';
          TaskFormComponent.MANUALS_ANCHOR_ID = 'manualsAnchor';
          TaskFormComponent.PREREQUISITES_ANCHOR_ID = 'prerequisitesAnchor';
          TaskFormComponent.TASK_CARD_ANCHOR_ID = 'taskCardAnchor';
          TaskFormComponent.MEASUREMENT_POINTS_ANCHOR_ID = 'measurementPointsAnchor';
          TaskFormComponent.LINK_MEASURE_ROW = 'Linked';
          TaskFormComponent.MAINTENANCE_PROGRAM_TYPE_RMP = 0;
          TaskFormComponent.TASK_LINK_CODE_SELF = '-1';
          TaskFormComponent.BOOLEAN = 'BOOL';
          TaskFormComponent.TEXT = 'TEXT';
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(TaskFormComponent_1.DOCUMENTS_ANCHOR_ID),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            TaskFormComponent.prototype,
            'documentsEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(TaskFormComponent_1.GENERAL_ANCHOR_ID),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            TaskFormComponent.prototype,
            'generalEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                TaskFormComponent_1.DESCRIPTION_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            TaskFormComponent.prototype,
            'descriptionElRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(TaskFormComponent_1.IMPACTS_ANCHOR_ID),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            TaskFormComponent.prototype,
            'impactsEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                TaskFormComponent_1.MAIN_INFORMATION_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            TaskFormComponent.prototype,
            'mainInformationEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(TaskFormComponent_1.MANUALS_ANCHOR_ID),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            TaskFormComponent.prototype,
            'manualsEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                TaskFormComponent_1.PREREQUISITES_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            TaskFormComponent.prototype,
            'prerequisitesEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(TaskFormComponent_1.TASK_CARD_ANCHOR_ID),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            TaskFormComponent.prototype,
            'taskCardEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                TaskFormComponent_1.MEASUREMENT_POINTS_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            TaskFormComponent.prototype,
            'measurementPointsEltRef',
            void 0
          );
          TaskFormComponent = TaskFormComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-task-form',
                template: __webpack_require__(
                  /*! ./task-form.component.html */ './src/app/main/engineering-management/task/form/task-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./task-form.component.scss */ './src/app/main/engineering-management/task/form/task-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_20__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_21__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_22__['MessageService'],
                _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_4__['PageTocService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_24__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_26__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_25__['SessionService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _task_form_service__WEBPACK_IMPORTED_MODULE_42__['TaskFormService'],
                _search_task_search_service__WEBPACK_IMPORTED_MODULE_41__['TaskSearchService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_17__['ConfirmationService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_23__['PropertiesService'],
                _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_5__[
                  'DynamicAttributesService'
                ],
                _shared_services_update_historic_service__WEBPACK_IMPORTED_MODULE_27__['UpdateHistoricService'],
                _shared_api_task_history_api__WEBPACK_IMPORTED_MODULE_3__['TaskHistoryApi'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_19__['DateService'],
                _shared_services_dassault_field_service__WEBPACK_IMPORTED_MODULE_18__['DavFieldService'],
                _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_40__['OverlayService'],
                _shared_pipes_format_select_option_pipe__WEBPACK_IMPORTED_MODULE_16__['FormatSelectOptionPipe']
              ])
            ],
            TaskFormComponent
          );
          return TaskFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_28__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/task-form.service.ts':
      /*!****************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/task-form.service.ts ***!
  \****************************************************************************/
      /*! exports provided: TaskFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TaskFormService', function() {
          return TaskFormService;
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
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_api_status_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/status-management.api */ './src/app/shared/api/status-management.api.ts'
        );
        /* harmony import */ var _shared_api_task_business_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/api/task-business.api */ './src/app/shared/api/task-business.api.ts'
        );
        /* harmony import */ var _shared_api_task_history_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/api/task-history.api */ './src/app/shared/api/task-history.api.ts'
        );
        /* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/api/task-management.api */ './src/app/shared/api/task-management.api.ts'
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

        var TaskFormService = /** @class */ (function(_super) {
          __extends(TaskFormService, _super);
          function TaskFormService(
            http,
            appConfigService,
            taskHistoryApi,
            taskManagementApi,
            taskBusinessApi,
            productStructureManagementApi,
            aircraftMaintenanceApi,
            statusManagementApi,
            propertiesService
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.taskHistoryApi = taskHistoryApi;
            _this.taskManagementApi = taskManagementApi;
            _this.taskBusinessApi = taskBusinessApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
            _this.statusManagementApi = statusManagementApi;
            _this.propertiesService = propertiesService;
            return _this;
          }
          TaskFormService.prototype.findBireTaskOperationsByTask = function(bireTaskDTOId) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBireTaskOperationsByTask, bireTaskDTOId);
          };
          TaskFormService.prototype.getSubContracting = function(bireTaskDTO) {
            return _super.prototype.post.call(
              this,
              this.aircraftMaintenanceApi.getSubcontractingTypeByTask,
              bireTaskDTO
            );
          };
          TaskFormService.prototype.getTaskLinkInAdequate = function(bireTaskDTO) {
            return _super.prototype.post.call(this, this.taskManagementApi.getTaskLinkInAdequate, bireTaskDTO);
          };
          TaskFormService.prototype.findBireTaskEvolutionsByTask = function(bireTaskDTOId) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBireTaskEvolutionsByTask, bireTaskDTOId);
          };
          TaskFormService.prototype.findBireTaskItemsWithItemByTask = function(bireTaskDTOId) {
            return _super.prototype.post.call(
              this,
              this.taskManagementApi.findBireTaskItemsWithItemByTask,
              bireTaskDTOId
            );
          };
          TaskFormService.prototype.findBireSmTasksByTask = function(bireTaskDTOId) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBireSmTasksByTask, bireTaskDTOId);
          };
          TaskFormService.prototype.findBireQualificationsBySearchCriteria = function(bireTaskDTO) {
            var params = {
              bireTask: bireTaskDTO,
              bireQualification: {}
            };
            return _super.prototype.post.call(
              this,
              this.taskManagementApi.findBireQualificationsBySearchCriteria,
              params
            );
          };
          TaskFormService.prototype.findBireDocumentsByTask = function(bireTaskDTOId) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBireDocumentsByTask, bireTaskDTOId);
          };
          TaskFormService.prototype.findBireTilTasksByTask = function(bireTaskDTO) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBireTilTasksByTask, bireTaskDTO);
          };
          TaskFormService.prototype.findBireMaintenanceProgramsByTask = function(bireTaskDTO) {
            return _super.prototype.post.call(
              this,
              this.taskManagementApi.findBireMaintenanceProgramsByTask,
              bireTaskDTO
            );
          };
          TaskFormService.prototype.findLastBireMaintenanceProgramsByTask = function(bireTaskDTO) {
            return _super.prototype.post.call(
              this,
              this.taskManagementApi.findLastBireMaintenanceProgramsByTask,
              bireTaskDTO
            );
          };
          TaskFormService.prototype.findAllBireTils = function() {
            return _super.prototype.post.call(this, this.taskManagementApi.findAllBireTils);
          };
          TaskFormService.prototype.getTaskGroups = function() {
            return _super.prototype.post.call(this, this.taskManagementApi.findAllBireTaskGroups);
          };
          TaskFormService.prototype.findBireOperationsBySearchCriteria = function(criteria) {
            return _super.prototype.post.call(
              this,
              this.taskManagementApi.findBireOperationsBySearchCriteria,
              criteria
            );
          };
          TaskFormService.prototype.findBireTasksByCriteria = function() {
            var criteria = {
              bireTaskDTO: {
                taskCode: '',
                taskVersion: ''
              },
              familyCode: '',
              structureType: '',
              variantCode: '',
              taskTypeCodeExcluded: ''
            };
            return _super.prototype.post.call(this, this.taskManagementApi.findBireTasksByCriteria, criteria);
          };
          TaskFormService.prototype.findBireTask = function(input) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBireTask, input);
          };
          TaskFormService.prototype.findBireEvolutionsByEvolutionCriteria = function(
            criteria,
            familyCode,
            structureType,
            variantCode
          ) {
            var params = {
              bireEvolutionDTO: criteria,
              familyCode: familyCode,
              structureType: structureType,
              variantCode: variantCode
            };
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireEvolutionsByEvolutionCriteria,
              params
            );
          };
          TaskFormService.prototype.findBireItemsBySearchCriteria = function(familyCode, structureType, variantCode) {
            var params = {
              bireItemDTOCriteria: {
                familyCode: familyCode,
                structureType: structureType,
                variantCode: variantCode
              },
              pnCode: undefined,
              attribute: undefined
            };
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireItemsBySearchCriteria,
              params
            );
          };
          TaskFormService.prototype.findFamilyVariant = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findFamilyVariant, input);
          };
          TaskFormService.prototype.findBireAttributesByCategory = function(category) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireAttributesByCategory,
              category
            );
          };
          TaskFormService.prototype.findBireTaskAttributeByTask = function(task) {
            var taskId = {
              taskCode: task.taskCode,
              taskVersion: task.taskVersion
            };
            return _super.prototype.post.call(this, this.taskManagementApi.findBireTaskAttributeByTask, taskId);
          };
          TaskFormService.prototype.saveTask = function(task) {
            return _super.prototype.post.call(this, this.taskManagementApi.saveTask, task);
          };
          TaskFormService.prototype.findBireItemVersionsByItem = function(item) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireItemVersionsByItem,
              item
            );
          };
          TaskFormService.prototype.getLocalCurrency = function() {
            return _super.prototype.post.call(this, this.taskManagementApi.getLocalCurrency);
          };
          TaskFormService.prototype.getFuncObjectStatusMap = function() {
            return this.propertiesService.getValue('getFuncObjectStatusMap');
          };
          TaskFormService.prototype.getObjectStatusMap = function() {
            return this.propertiesService.getValue('getObjectStatusMap');
          };
          TaskFormService.prototype.findHBireTaskAttributesByAttributeId = function(ids) {
            return _super.prototype.post.call(this, this.taskHistoryApi.findHBireTaskAttributesByAttributeId, ids);
          };
          TaskFormService.prototype.findBireEvolution = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBireEvolution, input);
          };
          TaskFormService.prototype.findBireItem = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBireItem, input);
          };
          TaskFormService.prototype.updateStaus = function(input) {
            return _super.prototype.post.call(this, this.statusManagementApi.updateStatusGlobal, input);
          };
          TaskFormService.prototype.findAllBireUnitMeasures = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireUnitMeasures);
          };
          TaskFormService.prototype.findBireMeasureReferencesBySearchCriteria = function(bireMeasureReferenceDTO) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireMeasureReferencesBySearchCriteria,
              bireMeasureReferenceDTO
            );
          };
          TaskFormService.prototype.findAllBireTaskMeasurementPoint = function(input) {
            return _super.prototype.post.call(this, this.taskManagementApi.findAllBireTaskMeasurementPoint, input);
          };
          TaskFormService.prototype.getTaskLastUpdatedFields = function(input) {
            return _super.prototype.post.call(this, this.taskBusinessApi.getTaskLastUpdatedFields, input);
          };
          TaskFormService.prototype.getPreviousTaskByTaskVersion = function(input) {
            return _super.prototype.post.call(this, this.taskBusinessApi.getPreviousTaskByTaskVersion, input);
          };
          TaskFormService.prototype.isHighlightUpdate = function() {
            return _super.prototype.post.call(this, this.taskBusinessApi.isHighlightUpdate);
          };
          TaskFormService.prototype.findPartNumbersAssociatedWithTaskOperations = function(input) {
            return _super.prototype.post.call(
              this,
              this.taskManagementApi.findPartNumbersAssociatedWithTaskOperations,
              input
            );
          };
          /**
           * checkNewVersionNumberAndUpgradeBireTaskData() - This function is used to return information of new Task Version.
           * @param input - Current Task Id
           */
          TaskFormService.prototype.checkNewVersionNumberAndUpgradeBireTaskData = function(input) {
            return _super.prototype.post.call(
              this,
              this.taskBusinessApi.checkNewVersionNumberAndUpgradeBireTaskData,
              input
            );
          };
          /**
           * checkAndReturnNewVersionNumberByTask() - This function is used to return new version of Task.
           * @param input - Current Task Id
           */
          TaskFormService.prototype.checkAndReturnNewVersionNumberByTask = function(input) {
            return _super.prototype.post.call(this, this.taskBusinessApi.checkAndReturnNewVersionNumberByTask, input);
          };
          /**
           * findBirePlanAttributesByPlanCode() - This function is used to check Plan Type.
           * @param bireMaintenancePlanDTO - Plan Code
           */
          TaskFormService.prototype.findBirePlanAttributesByPlanCode = function(bireMaintenancePlanDTO) {
            return _super.prototype.post.call(
              this,
              this.taskManagementApi.findBirePlanAttributesByPlanCode,
              bireMaintenancePlanDTO
            );
          };
          TaskFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__['AppConfigService'],
                _shared_api_task_history_api__WEBPACK_IMPORTED_MODULE_6__['TaskHistoryApi'],
                _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_7__['TaskManagementApi'],
                _shared_api_task_business_api__WEBPACK_IMPORTED_MODULE_5__['TaskBusinessApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_2__['AircraftMaintenanceApi'],
                _shared_api_status_management_api__WEBPACK_IMPORTED_MODULE_4__['StatusManagementApi'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_10__['PropertiesService']
              ])
            ],
            TaskFormService
          );
          return TaskFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/task-import-popup/task-import-popup.component.html':
      /*!**********************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/task-import-popup/task-import-popup.component.html ***!
  \**********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".docManagement" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".docName" | translate }}</label>\r\n\r\n        <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n          <div class="form-control-data">\r\n            {{ document.docName }}\r\n          </div>\r\n\r\n          <div class="btn-file-upload-wrapper">\r\n            <p-fileUpload\r\n              #fileUploader\r\n              *ngIf="!isReadOnlyForm"\r\n              class="aw-fileupload"\r\n              name="document[]"\r\n              customUpload="true"\r\n              mode="basic"\r\n              auto="true"\r\n              chooseLabel=""\r\n              (uploadHandler)="uploadDocument($event, fileUploader)"\r\n            ></p-fileUpload>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".docCategory" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            [options]="categories"\r\n            [(ngModel)]="document.docCategory"\r\n            [showClear]="false"\r\n            placeholder="&nbsp;"\r\n            [disabled]="isReadOnlyForm"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".docSource" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <input class="aw-input" type="text" [(ngModel)]="document.docSource" [disabled]="isReadOnlyForm" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".docPublicationDate" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <p-calendar\r\n            showButtonBar="true"\r\n            [monthNavigator]="true"\r\n            [yearNavigator]="true"\r\n            [yearRange]="sessionService.calendarYearRange"\r\n            class="aw-calendar"\r\n            [dateFormat]="sessionService.dateFormatPrimeNG"\r\n            [locale]="sessionService.calendarFormat"\r\n            [(ngModel)]="document.docPublicationDate"\r\n            [disabled]="isReadOnlyForm"\r\n            appendTo="body"\r\n          ></p-calendar>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".docDescription" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <textarea\r\n            class="aw-textarea"\r\n            [rows]="3"\r\n            pInputTextarea\r\n            [(ngModel)]="document.docDescription"\r\n            [disabled]="isReadOnlyForm"\r\n          ></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">{{ "global.cancel" | translate }}</button>\r\n    <button\r\n      *ngIf="!isReadOnlyForm"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="validate()"\r\n      color="primary"\r\n      [disabled]="!document.docFile && !document.docSource"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/task/form/task-import-popup/task-import-popup.component.ts':
      /*!********************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/form/task-import-popup/task-import-popup.component.ts ***!
  \********************************************************************************************************/
      /*! exports provided: TaskImportPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'TaskImportPopupComponent',
          function() {
            return TaskImportPopupComponent;
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

        var TaskImportPopupComponent = /** @class */ (function(_super) {
          __extends(TaskImportPopupComponent, _super);
          function TaskImportPopupComponent(sessionService, messageService, propertiesService) {
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
            _this.loadCategories();
            return _this;
          }
          Object.defineProperty(TaskImportPopupComponent.prototype, 'display', {
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
          TaskImportPopupComponent.prototype.ngOnInit = function() {
            if (!this.document) {
              this.document = {};
            }
          };
          TaskImportPopupComponent.prototype.cancel = function() {
            this.display = false;
          };
          TaskImportPopupComponent.prototype.validate = function() {
            this.onValidated.emit(this.document);
            this.display = false;
          };
          TaskImportPopupComponent.prototype.loadCategories = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .DOC_TASK_CATEGORY_MAP
              )
              .subscribe(
                function(results) {
                  _this.categories = results || [];
                },
                function() {
                  _this.messageService.showErrorMessage(_this.componentId + '.errorOnGetDocumentTaskCategories');
                }
              );
          };
          TaskImportPopupComponent.prototype.uploadDocument = function(event, fileUploader) {
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
                    _this.document.docType = _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_7__['FileUtils']
                      .getExtension(file_1.name)
                      .toUpperCase();
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
            TaskImportPopupComponent.prototype,
            'display',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            TaskImportPopupComponent.prototype,
            'displayChange',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            TaskImportPopupComponent.prototype,
            'document',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            TaskImportPopupComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            TaskImportPopupComponent.prototype,
            'onValidated',
            void 0
          );
          TaskImportPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-task-import-popup',
                template: __webpack_require__(
                  /*! ./task-import-popup.component.html */ './src/app/main/engineering-management/task/form/task-import-popup/task-import-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__['SessionService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__['MessageService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__['PropertiesService']
              ])
            ],
            TaskImportPopupComponent
          );
          return TaskImportPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/task/search/task-search.component.html':
      /*!************************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/search/task-search.component.html ***!
  \************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ "page.searchPage" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button type="button" mat-raised-button (click)="openNewTask()" *ngIf="hasUpdateAccessRight">\r\n      {{ "global.create" | translate }}\r\n    </button>\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row search-criteria-header">\r\n                  <i\r\n                    class="fa fa-fw fa-undo aw-icon aw-icon-with-border search-criteria-action"\r\n                    aria-hidden="true"\r\n                    pTooltip="{{ \'global.reset\' | translate }}"\r\n                    tooltipPosition="top"\r\n                    (click)="resetSearchCriteria()"\r\n                  ></i>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".familyVariant" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="familyVariants"\r\n                        [(ngModel)]="familyVariantSearchObject"\r\n                        [showClear]="true"\r\n                        (keyup.enter)="search()"\r\n                        placeholder="&nbsp;"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".taskMaintenanceProgram" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="taskMaintenanceProgram"\r\n                        [(ngModel)]="maintenanceProgramSearchObject"\r\n                        placeholder="&nbsp;"\r\n                        (keyup.enter)="search()"\r\n                        [showClear]="true"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".notApproved" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-checkbox binary="true" class="aw-checkbox" [(ngModel)]="notApproved"></p-checkbox>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".taskCode" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="searchObject.taskCode" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".taskVersion" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="searchObject.taskVersion" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".repairCenterCode" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="mroCenters"\r\n                        [(ngModel)]="searchObject.repairCenterCode"\r\n                        [showClear]="true"\r\n                        (keyup.enter)="search()"\r\n                        placeholder="&nbsp;"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".taskStatus" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="statuses"\r\n                        [(ngModel)]="searchObject.taskStatus"\r\n                        [showClear]="true"\r\n                        (keyup.enter)="search()"\r\n                        placeholder="&nbsp;"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".taskTypeCode" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="taskTypes"\r\n                        [(ngModel)]="searchObject.taskTypeCode"\r\n                        placeholder="&nbsp;"\r\n                        (keyup.enter)="search()"\r\n                        [showClear]="true"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".groupCode" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="taskGroups"\r\n                        [(ngModel)]="searchObject.groupCode"\r\n                        placeholder="&nbsp;"\r\n                        (keyup.enter)="search()"\r\n                        [showClear]="true"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="advanced-criteria" [ngClass]="{ \'display--none\': !showAdvancedCriteria }">\r\n                  <div class="row">\r\n                    <div class="display--flex-row flex--1">\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ componentData.componentId + ".taskChapter" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" class="aw-input" [(ngModel)]="searchObject.taskChapter" />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ componentData.componentId + ".taskSection" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" class="aw-input" [(ngModel)]="searchObject.taskSection" />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ componentData.componentId + ".taskSubject" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" class="aw-input" [(ngModel)]="searchObject.taskSubject" />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentData.componentId + ".taskTask" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" class="aw-input" [(ngModel)]="searchObject.taskTask" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentData.componentId + ".taskSubTask" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" class="aw-input" [(ngModel)]="searchObject.taskSubTask" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".taskDesignation" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" class="aw-input" [(ngModel)]="searchObject.taskDesignation" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".taskDescription" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" class="aw-input" [(ngModel)]="searchObject.taskDescription" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".taskApplicabilityCode" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          [options]="applicabilities"\r\n                          [(ngModel)]="searchObject.taskApplicabilityCode"\r\n                          placeholder="&nbsp;"\r\n                          (keyup.enter)="search()"\r\n                          [showClear]="true"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row search-criteria-footer">\r\n                  <button mat-button (click)="showAdvancedCriteria = !showAdvancedCriteria">\r\n                    <ng-container *ngIf="showAdvancedCriteria">\r\n                      <mat-icon>remove</mat-icon>\r\n                      {{ "global.collapseCriteria" | translate }}\r\n                    </ng-container>\r\n                    <ng-container *ngIf="!showAdvancedCriteria">\r\n                      <mat-icon>add</mat-icon>\r\n                      {{ "global.expandCriteria" | translate }}\r\n                    </ng-container>\r\n                  </button>\r\n\r\n                  <div class="search-actions">\r\n                    <button\r\n                      type="button"\r\n                      mat-raised-button\r\n                      class="btn-with-spinner"\r\n                      (click)="search()"\r\n                      color="primary"\r\n                      appKeyPress\r\n                      [keyCode]="\'Enter\'"\r\n                      (keyPress)="search()"\r\n                    >\r\n                      <span *ngIf="isLoading" class="lds-hourglass"></span>\r\n                      {{ "global.toSearch" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ "global.results" | translate }} ({{ taskTableDataSource ? taskTableDataSource.dataCount : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <a-table [dataSource]="taskTableDataSource">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    *ngIf="\r\n                      taskTableDataSource && taskTableDataSource.dataCount > 0 && !taskTableDataSource.hasDataSelection\r\n                    "\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="exportTable()"\r\n                  >\r\n                    {{ "global.export" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf="hasManageAccessRight && taskTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    color="warn"\r\n                    (click)="deleteTasks()"\r\n                  >\r\n                    {{ "global.delete" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf="taskTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="openSelectedTasks()"\r\n                  >\r\n                    {{ "global.open" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n                <ng-template columnDef="taskCode" let-rowData="rowData">\r\n                  <a (click)="openTaskLink(rowData)"> {{ rowData.taskCode }} </a>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/task/search/task-search.component.ts':
      /*!**********************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/search/task-search.component.ts ***!
  \**********************************************************************************/
      /*! exports provided: TaskSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TaskSearchComponent', function() {
          return TaskSearchComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/export.service */ './src/app/shared/services/export.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/utils/label-value-utils */ './src/app/shared/utils/label-value-utils.ts'
        );
        /* harmony import */ var _task_search_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./task-search.service */ './src/app/main/engineering-management/task/search/task-search.service.ts'
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

        var TaskSearchComponent = /** @class */ (function(_super) {
          __extends(TaskSearchComponent, _super);
          function TaskSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            translateService,
            taskSearchService,
            propertiesService,
            exportService,
            confirmationService,
            dateService
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
            _this.taskSearchService = taskSearchService;
            _this.propertiesService = propertiesService;
            _this.exportService = exportService;
            _this.confirmationService = confirmationService;
            _this.dateService = dateService;
            _this.isLoading = false;
            _this.filteredRowsNb = 0;
            _this.familyVariants = [];
            _this.familyCode = '';
            _this.variantCode = '';
            _this.structureType = '';
            _this.mroCenters = [];
            _this.statuses = [];
            _this.taskTypes = [];
            _this.taskGroups = [];
            _this.applicabilities = [];
            _this.familyVariantSearchObject = undefined;
            _this.searchObject = {};
            _this.showAdvancedCriteria = false;
            _this.resultsTableExportName = 'task-search-list';
            _this.maintenanceProgramSearchObject = undefined;
            _this.taskMaintenanceProgram = [];
            _this.notApproved = false;
            _this.loadFamilyVariant();
            _this.loadMROCenter();
            _this.loadStatus();
            _this.loadTaskType();
            _this.loadTaskGroup();
            _this.loadApplicability();
            _this.initTaskTableDataSource();
            _this.loadTaskMaintenanceProgram();
            return _this;
          }
          TaskSearchComponent.prototype.initTaskTableDataSource = function() {
            this.taskTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'taskCode',
                  translateKey: this.getTranslateKey('taskCode'),
                  width: '16%'
                },
                {
                  field: 'taskVersion',
                  translateKey: this.getTranslateKey('taskVersion'),
                  width: '10%'
                },
                {
                  field: 'taskDesignation',
                  translateKey: this.getTranslateKey('taskDesignation'),
                  width: '30%'
                },
                {
                  field: 'taskStatus',
                  translateKey: this.getTranslateKey('taskStatus'),
                  width: '10%'
                },
                {
                  field: 'taskTypeCode',
                  translateKey: this.getTranslateKey('taskTypeCode'),
                  width: '10%'
                },
                {
                  field: 'groupCode',
                  translateKey: this.getTranslateKey('groupCode'),
                  width: '10%'
                },
                {
                  field: 'taskApplicabilityDateString',
                  translateKey: this.getTranslateKey('taskApplicabilityDateString'),
                  width: '14%'
                }
              ],
              data: []
            });
          };
          TaskSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__['ComponentConstants']
              .ENG_TASK_SEARCH;
          };
          TaskSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
          };
          TaskSearchComponent.prototype.deleteTasks = function() {
            var _this = this;
            var partialMessageKey =
              this.taskTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedTasks'
                : 'confirmDeleteSelectedTask';
            var tasks = new Array();
            this.taskTableDataSource.dataSelection.forEach(function(task) {
              if (!!task && !!task.taskCode && !!task.taskVersion) {
                var taskId = {
                  taskCode: task.taskCode,
                  taskVersion: task.taskVersion
                };
                tasks.push(taskId);
              } else {
                _super.prototype.throwUnboundLocalError.call(
                  _this,
                  'deleteTasks',
                  'task && task.taskCode && task.taskVersion'
                );
              }
            });
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.taskSearchService.removeBireTask(tasks).subscribe(function() {
                  _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteTask'));
                  _this.taskTableDataSource.dataSelection = [];
                  _this.search();
                });
              }
            });
          };
          TaskSearchComponent.prototype.exportTable = function() {
            var taskExportData = [];
            this.taskTableDataSource.dataSrc.forEach(function(task) {
              var item = {
                taskCode: task.taskCode,
                taskVersion: task.taskVersion,
                taskDesignation: task.taskDesignation,
                taskChapter: task.taskChapter,
                taskSection: task.taskSection,
                taskSubject: task.taskSubject,
                taskTask: task.taskTask,
                taskSubTask: task.taskSubTask,
                taskStatus: task.taskStatus,
                taskApplicabilityDate: task.taskApplicabilityDate,
                taskApplicabilityCode: task.taskApplicabilityCode,
                repairCenterCode: task.repairCenterCode,
                groupCode: task.groupCode,
                taskTypeCode: task.taskTypeCode,
                overhaul: task.overhaul
              };
              taskExportData.push(item);
            });
            this.exportService.toExcel(taskExportData, this.resultsTableExportName, this.componentData.componentId);
          };
          TaskSearchComponent.prototype.openNewTask = function() {
            this.openTask(
              undefined,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Create
            );
          };
          TaskSearchComponent.prototype.openTaskLink = function(task) {
            if (task) {
              if (task.taskCode && task.taskCode.trim().length > 0) {
                this.openTask(
                  task,
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Read
                );
              } else {
                this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingTaskCode'));
              }
            }
          };
          TaskSearchComponent.prototype.openSelectedTasks = function() {
            var _this = this;
            this.taskTableDataSource.dataSelection.forEach(function(task) {
              if (task) {
                if (task.taskCode && task.taskCode.trim().length > 0) {
                  _this.openTask(
                    task,
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Read
                  );
                } else {
                  _this.messageService.showWarningMessage(_this.getTranslateKey('errorOnMissingTaskCode'));
                }
              }
            });
          };
          TaskSearchComponent.prototype.resetResultsTable = function(table) {
            table.reset();
            table.filters = {};
          };
          TaskSearchComponent.prototype.resetSearchCriteria = function() {
            this.searchObject = {};
            this.familyVariantSearchObject = undefined;
            this.maintenanceProgramSearchObject = undefined;
          };
          TaskSearchComponent.prototype.search = function() {
            var _this = this;
            this.isLoading = true;
            _super.prototype.scrollToAnchor.call(this, this.resultsContainerAnchor);
            this.taskTableDataSource.dataSelection = [];
            this.taskTableDataSource.setData([]);
            var familyCode = '';
            var structureType = '';
            var variantCode = '';
            var maintenanceProgramPlanCode = '';
            if (this.familyVariantSearchObject != undefined) {
              var familyVariantParam = this.familyVariantSearchObject.split('-');
              var param0 = 0;
              var param1 = 1;
              var param2 = 2;
              familyCode = familyVariantParam[param0];
              structureType = familyVariantParam[param1];
              variantCode = familyVariantParam[param2];
            }
            if (this.maintenanceProgramSearchObject != undefined) {
              maintenanceProgramPlanCode = this.maintenanceProgramSearchObject;
            }
            var searchId = {
              bireTaskDTO: this.searchObject,
              familyCode: familyCode,
              structureType: structureType,
              variantCode: variantCode,
              notApproved: this.notApproved,
              maintenanceProgramPlanCode: maintenanceProgramPlanCode
            };
            this.taskSearchService.findBireTasksByCriteria(searchId).subscribe(function(results) {
              if (results) {
                _this.isLoading = false;
                results.list.forEach(function(res) {
                  res.taskApplicabilityDateString = _this.dateService.dateToString(res.taskApplicabilityDate);
                });
                _this.taskTableDataSource.setData(results.list);
                _this.taskTableDataSource.dataSrc.forEach(function(element) {
                  _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_16__['LabelValueUtils'].stringValueToLabel(
                    element,
                    'taskApplicabilityCode',
                    _this.applicabilities
                  );
                  _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_16__['LabelValueUtils'].stringValueToLabel(
                    element,
                    'taskTypeCode',
                    _this.taskTypes
                  );
                  _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_16__['LabelValueUtils'].stringValueToLabel(
                    element,
                    'repairCenterCode',
                    _this.mroCenters
                  );
                  _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_16__['LabelValueUtils'].stringValueToLabel(
                    element,
                    'taskStatus',
                    _this.statuses
                  );
                  _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_16__['LabelValueUtils'].stringValueToLabel(
                    element,
                    'groupCode',
                    _this.taskGroups
                  );
                });
                _this.filteredRowsNb = _this.taskTableDataSource.dataCount;
                _super.prototype.differ.call(_this, function() {
                  _super.prototype.scrollToAnchor.call(_this, _this.resultsContainerAnchor);
                });
              }
            });
          };
          // tslint:disable-next-line:no-any
          TaskSearchComponent.prototype.onFilter = function(event) {
            this.filteredRowsNb = event.filteredValue.length;
          };
          TaskSearchComponent.prototype.openTask = function(object, openMode) {
            if (object != undefined) {
              var labelKey = 'transaction.TaskFormComponent';
              var data = {
                id: this.tabService.generateId(),
                componentId: 'TaskFormComponent',
                objectId: this.serializationService.serialize(object),
                openMode: openMode
              };
              this.tabService.open(this.tabService.create(data, labelKey, true));
            } else {
              var labelKey = 'transaction.TaskFormComponent';
              var data = {
                id: this.tabService.generateId(),
                componentId: 'TaskFormComponent',
                objectId: undefined,
                openMode: openMode
              };
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          TaskSearchComponent.prototype.loadFamilyVariant = function() {
            var _this = this;
            var id = {
              useCase:
                _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_3__['BidoFunctionTypeConstants']
                  .UC_MCH_TASK,
              module:
                _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_3__['BidoFunctionTypeConstants']
                  .MODULE_FAMILY
            };
            this.taskSearchService.findFamilyVariant(id).subscribe(function(results) {
              if (results) {
                results.forEach(function(result) {
                  if (!!result.labelValueDTO) {
                    _this.familyVariants.push(result.labelValueDTO);
                  } else {
                    _super.prototype.throwUnboundLocalError.call(_this, 'loadFamilyVariant', 'result.labelValueDTO');
                  }
                });
              }
            });
          };
          TaskSearchComponent.prototype.loadMROCenter = function() {
            var _this = this;
            this.taskSearchService.findMROCenter().subscribe(function(results) {
              _this.mroCenters = results || [];
            });
          };
          TaskSearchComponent.prototype.loadStatus = function() {
            var _this = this;
            this.propertiesService.getValue('getFuncObjectStatusMap').subscribe(function(results) {
              _this.statuses = results || [];
            });
          };
          TaskSearchComponent.prototype.loadTaskType = function() {
            var _this = this;
            this.propertiesService.getValue('getTaskTypeMap').subscribe(function(results) {
              _this.taskTypes = results || [];
            });
          };
          TaskSearchComponent.prototype.loadTaskGroup = function() {
            var _this = this;
            this.taskSearchService.getTaskGroups().subscribe(function(results) {
              _this.taskGroups =
                results.filter(function(taskGroup) {
                  return taskGroup.value != undefined;
                }) || [];
            });
          };
          TaskSearchComponent.prototype.loadApplicability = function() {
            var _this = this;
            this.propertiesService.getValue('getTaskApplicabilityCodeMap').subscribe(function(results) {
              _this.applicabilities = results || [];
            });
          };
          TaskSearchComponent.prototype.loadTaskMaintenanceProgram = function() {
            var _this = this;
            this.taskSearchService.getMaintenanceProgram().subscribe(function(results) {
              _this.taskMaintenanceProgram = results || [];
            });
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('resultsContainerAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            TaskSearchComponent.prototype,
            'resultsContainerAnchor',
            void 0
          );
          TaskSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-task-search',
                template: __webpack_require__(
                  /*! ./task-search.component.html */ './src/app/main/engineering-management/task/search/task-search.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_13__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_14__['TabService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _task_search_service__WEBPACK_IMPORTED_MODULE_17__['TaskSearchService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__['PropertiesService'],
                _shared_services_export_service__WEBPACK_IMPORTED_MODULE_8__['ExportService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_6__['ConfirmationService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_7__['DateService']
              ])
            ],
            TaskSearchComponent
          );
          return TaskSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_15__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/task/search/task-search.service.ts':
      /*!********************************************************************************!*\
  !*** ./src/app/main/engineering-management/task/search/task-search.service.ts ***!
  \********************************************************************************/
      /*! exports provided: TaskSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TaskSearchService', function() {
          return TaskSearchService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
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

        var TaskSearchService = /** @class */ (function(_super) {
          __extends(TaskSearchService, _super);
          function TaskSearchService(http, appConfigService, productStructureManagementApi, taskManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.taskManagementApi = taskManagementApi;
            return _this;
          }
          TaskSearchService.prototype.findBireTasksByCriteria = function(criteria) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBireTasksByCriteria, criteria);
          };
          TaskSearchService.prototype.findFamilyVariant = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findFamilyVariant, input);
          };
          TaskSearchService.prototype.findMROCenter = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireSiteForTask);
          };
          TaskSearchService.prototype.getTaskGroups = function() {
            return _super.prototype.post.call(this, this.taskManagementApi.findAllBireTaskGroups);
          };
          TaskSearchService.prototype.removeBireTask = function(bireTaskDTOId) {
            return _super.prototype.post.call(this, this.taskManagementApi.removeBireTask, bireTaskDTOId);
          };
          TaskSearchService.prototype.getMaintenanceProgram = function() {
            return _super.prototype.post.call(this, this.taskManagementApi.findAllAvailableRMP);
          };
          TaskSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__['AppConfigService'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_3__['TaskManagementApi']
              ])
            ],
            TaskSearchService
          );
          return TaskSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/engineering-management/task/task.module.ts':
      /*!*****************************************************************!*\
  !*** ./src/app/main/engineering-management/task/task.module.ts ***!
  \*****************************************************************/
      /*! exports provided: TaskModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TaskModule', function() {
          return TaskModule;
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
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/keyfilter */ './node_modules/primeng/keyfilter.js'
        );
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/listbox */ './node_modules/primeng/listbox.js'
        );
        /* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_listbox__WEBPACK_IMPORTED_MODULE_6__
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
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! primeng/treetable */ './node_modules/primeng/treetable.js'
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_treetable__WEBPACK_IMPORTED_MODULE_10__
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
        /* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ './src/app/shared/components/component-sidebar/component-sidebar.mdule.ts'
        );
        /* harmony import */ var _shared_components_dialog_bire_document_dialog_bire_document_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/components/dialog-bire-document/dialog-bire-document.module */ './src/app/shared/components/dialog-bire-document/dialog-bire-document.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_evolution_dialog_search_evolution_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-evolution/dialog-search-evolution.module */ './src/app/shared/components/dialog-search-evolution/dialog-search-evolution.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_item_dialog_search_item_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-item/dialog-search-item.module */ './src/app/shared/components/dialog-search-item/dialog-search-item.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_operation_dialog_search_operation_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-operation/dialog-search-operation.module */ './src/app/shared/components/dialog-search-operation/dialog-search-operation.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_part_dialog_search_part_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-part/dialog-search-part.module */ './src/app/shared/components/dialog-search-part/dialog-search-part.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_qualification_dialog_search_qualification_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-qualification/dialog-search-qualification.module */ './src/app/shared/components/dialog-search-qualification/dialog-search-qualification.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_task_dialog_search_task_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-task/dialog-search-task.module */ './src/app/shared/components/dialog-search-task/dialog-search-task.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../shared/components/dialog-table/dialog-table.module */ './src/app/shared/components/dialog-table/dialog-table.module.ts'
        );
        /* harmony import */ var _shared_components_dynamic_attributes_history_dynamic_attributes_history_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../../shared/components/dynamic-attributes-history/dynamic-attributes-history.module */ './src/app/shared/components/dynamic-attributes-history/dynamic-attributes-history.module.ts'
        );
        /* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../shared/components/dynamic-attributes/dynamic-attributes.module */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_status_update_history_status_update_history_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../../shared/components/status-update-history/status-update-history.module */ './src/app/shared/components/status-update-history/status-update-history.module.ts'
        );
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ../../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _form_dialog_associated_tasks_popup_dialog_associated_tasks_popup_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ./form/dialog-associated-tasks-popup/dialog-associated-tasks-popup.component */ './src/app/main/engineering-management/task/form/dialog-associated-tasks-popup/dialog-associated-tasks-popup.component.ts'
        );
        /* harmony import */ var _form_dialog_evolutions_popup_dialog_evolutions_popup_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ./form/dialog-evolutions-popup/dialog-evolutions-popup.component */ './src/app/main/engineering-management/task/form/dialog-evolutions-popup/dialog-evolutions-popup.component.ts'
        );
        /* harmony import */ var _form_dialog_item_versions_popup_dialog_item_versions_popup_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ./form/dialog-item-versions-popup/dialog-item-versions-popup.component */ './src/app/main/engineering-management/task/form/dialog-item-versions-popup/dialog-item-versions-popup.component.ts'
        );
        /* harmony import */ var _form_dialog_measure_formula_popup_dialog_measure_formula_popup_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ./form/dialog-measure-formula-popup/dialog-measure-formula-popup.component */ './src/app/main/engineering-management/task/form/dialog-measure-formula-popup/dialog-measure-formula-popup.component.ts'
        );
        /* harmony import */ var _form_dialog_measure_popup_dialog_measure_popup_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./form/dialog-measure-popup/dialog-measure-popup.component */ './src/app/main/engineering-management/task/form/dialog-measure-popup/dialog-measure-popup.component.ts'
        );
        /* harmony import */ var _form_dialog_measure_popup_dialog_measure_search_popup_dialog_measure_search_popup_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ./form/dialog-measure-popup/dialog-measure-search-popup/dialog-measure-search-popup.component */ './src/app/main/engineering-management/task/form/dialog-measure-popup/dialog-measure-search-popup/dialog-measure-search-popup.component.ts'
        );
        /* harmony import */ var _form_dialog_measure_tool_popup_dialog_measure_tool_popup_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! ./form/dialog-measure-tool-popup/dialog-measure-tool-popup.component */ './src/app/main/engineering-management/task/form/dialog-measure-tool-popup/dialog-measure-tool-popup.component.ts'
        );
        /* harmony import */ var _form_dialog_operations_popup_dialog_operations_popup_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
          /*! ./form/dialog-operations-popup/dialog-operations-popup.component */ './src/app/main/engineering-management/task/form/dialog-operations-popup/dialog-operations-popup.component.ts'
        );
        /* harmony import */ var _form_dialog_qualifications_popup_dialog_qualifications_popup_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
          /*! ./form/dialog-qualifications-popup/dialog-qualifications-popup.component */ './src/app/main/engineering-management/task/form/dialog-qualifications-popup/dialog-qualifications-popup.component.ts'
        );
        /* harmony import */ var _form_dialog_search_evolution_popup_dialog_search_evolution_popup_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
          /*! ./form/dialog-search-evolution-popup/dialog-search-evolution-popup.component */ './src/app/main/engineering-management/task/form/dialog-search-evolution-popup/dialog-search-evolution-popup.component.ts'
        );
        /* harmony import */ var _form_dialog_tils_popup_dialog_tils_popup_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
          /*! ./form/dialog-tils-popup/dialog-tils-popup.component */ './src/app/main/engineering-management/task/form/dialog-tils-popup/dialog-tils-popup.component.ts'
        );
        /* harmony import */ var _form_task_form_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
          /*! ./form/task-form.component */ './src/app/main/engineering-management/task/form/task-form.component.ts'
        );
        /* harmony import */ var _form_task_form_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
          /*! ./form/task-form.service */ './src/app/main/engineering-management/task/form/task-form.service.ts'
        );
        /* harmony import */ var _form_task_import_popup_task_import_popup_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
          /*! ./form/task-import-popup/task-import-popup.component */ './src/app/main/engineering-management/task/form/task-import-popup/task-import-popup.component.ts'
        );
        /* harmony import */ var _search_task_search_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
          /*! ./search/task-search.component */ './src/app/main/engineering-management/task/search/task-search.component.ts'
        );
        /* harmony import */ var _search_task_search_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
          /*! ./search/task-search.service */ './src/app/main/engineering-management/task/search/task-search.service.ts'
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
          primeng_listbox__WEBPACK_IMPORTED_MODULE_6__['ListboxModule'],
          primeng_fileupload__WEBPACK_IMPORTED_MODULE_4__['FileUploadModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_8__['TableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__['TooltipModule'],
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_5__['KeyFilterModule'],
          primeng_message__WEBPACK_IMPORTED_MODULE_7__['MessageModule'],
          primeng_treetable__WEBPACK_IMPORTED_MODULE_10__['TreeTableModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_14__[
            'ComponentSidebarModule'
          ],
          _shared_components_dialog_bire_document_dialog_bire_document_module__WEBPACK_IMPORTED_MODULE_15__[
            'DialogBireDocumentModule'
          ],
          _shared_components_dialog_search_evolution_dialog_search_evolution_module__WEBPACK_IMPORTED_MODULE_16__[
            'DialogSearchEvolutionModule'
          ],
          _shared_components_dialog_search_item_dialog_search_item_module__WEBPACK_IMPORTED_MODULE_17__[
            'DialogSearchItemModule'
          ],
          _shared_components_dialog_search_operation_dialog_search_operation_module__WEBPACK_IMPORTED_MODULE_18__[
            'DialogSearchOperationModule'
          ],
          _shared_components_dialog_search_qualification_dialog_search_qualification_module__WEBPACK_IMPORTED_MODULE_20__[
            'DialogSearchQualificationModule'
          ],
          _shared_components_dialog_search_task_dialog_search_task_module__WEBPACK_IMPORTED_MODULE_21__[
            'DialogSearchTaskModule'
          ],
          _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_22__['DialogTableModule'],
          _shared_components_dynamic_attributes_history_dynamic_attributes_history_module__WEBPACK_IMPORTED_MODULE_23__[
            'DynamicAttributesHistoryModule'
          ],
          _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_24__[
            'DynamicAttributesModule'
          ],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_25__['ModalModule'],
          _shared_components_status_update_history_status_update_history_module__WEBPACK_IMPORTED_MODULE_26__[
            'StatusUpdateHistoryModule'
          ],
          _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_27__['TableModule'],
          _shared_components_dialog_search_part_dialog_search_part_module__WEBPACK_IMPORTED_MODULE_19__[
            'DialogSearchPartModule'
          ]
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _form_dialog_associated_tasks_popup_dialog_associated_tasks_popup_component__WEBPACK_IMPORTED_MODULE_29__[
            'DialogAssociatedTasksPopupComponent'
          ],
          _form_dialog_evolutions_popup_dialog_evolutions_popup_component__WEBPACK_IMPORTED_MODULE_30__[
            'DialogEvolutionsPopupComponent'
          ],
          _form_dialog_item_versions_popup_dialog_item_versions_popup_component__WEBPACK_IMPORTED_MODULE_31__[
            'DialogItemVersionsPopupComponent'
          ],
          _form_dialog_operations_popup_dialog_operations_popup_component__WEBPACK_IMPORTED_MODULE_36__[
            'DialogOperationsPopupComponent'
          ],
          _form_dialog_measure_popup_dialog_measure_popup_component__WEBPACK_IMPORTED_MODULE_33__[
            'DialogMeasurePopupComponent'
          ],
          _form_dialog_measure_popup_dialog_measure_search_popup_dialog_measure_search_popup_component__WEBPACK_IMPORTED_MODULE_34__[
            'DialogMeasureSearchPopupComponent'
          ],
          _form_dialog_measure_tool_popup_dialog_measure_tool_popup_component__WEBPACK_IMPORTED_MODULE_35__[
            'DialogMeasureToolPopupComponent'
          ],
          _form_dialog_measure_formula_popup_dialog_measure_formula_popup_component__WEBPACK_IMPORTED_MODULE_32__[
            'DialogMeasureFormulaPopupComponent'
          ],
          _form_dialog_qualifications_popup_dialog_qualifications_popup_component__WEBPACK_IMPORTED_MODULE_37__[
            'DialogQualificationsPopupComponent'
          ],
          _form_dialog_tils_popup_dialog_tils_popup_component__WEBPACK_IMPORTED_MODULE_39__['DialogTilsPopupComponent'],
          _form_dialog_search_evolution_popup_dialog_search_evolution_popup_component__WEBPACK_IMPORTED_MODULE_38__[
            'DialogSearchEvolutionPopupComponent'
          ],
          _form_task_import_popup_task_import_popup_component__WEBPACK_IMPORTED_MODULE_42__['TaskImportPopupComponent']
        ];
        var DYNAMIC_COMPONENTS = [
          _form_task_form_component__WEBPACK_IMPORTED_MODULE_40__['TaskFormComponent'],
          _search_task_search_component__WEBPACK_IMPORTED_MODULE_43__['TaskSearchComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _form_task_form_service__WEBPACK_IMPORTED_MODULE_41__['TaskFormService'],
          _search_task_search_service__WEBPACK_IMPORTED_MODULE_44__['TaskSearchService']
        ];
        var TaskModule = /** @class */ (function() {
          function TaskModule() {}
          TaskModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_11__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_12__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_13__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_28__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            TaskModule
          );
          return TaskModule;
        })();

        /***/
      },

    /***/ './src/app/shared/constants/task-fields-constants.ts':
      /*!***********************************************************!*\
  !*** ./src/app/shared/constants/task-fields-constants.ts ***!
  \***********************************************************/
      /*! exports provided: TaskFieldsConstant */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TaskFieldsConstant', function() {
          return TaskFieldsConstant;
        });
        var TaskFieldsConstant = /** @class */ (function() {
          function TaskFieldsConstant() {}
          TaskFieldsConstant.DESIGNATION = 'designation';
          TaskFieldsConstant.DESCRIPTION = 'description';
          TaskFieldsConstant.ATA_ITEM = 'ataItem';
          TaskFieldsConstant.TASK_GROUP = 'taskGroup';
          TaskFieldsConstant.TASK_TYPE = 'taskType';
          TaskFieldsConstant.TASK_REFERENCE = 'taskReference';
          TaskFieldsConstant.TASK_VALIDATION_LEVEL = 'validationLevel';
          TaskFieldsConstant.STATUS = 'status';
          TaskFieldsConstant.APPLICABILITY_DATE = 'applicabilityDate';
          TaskFieldsConstant.GENERAL_SECTION = 'generalSection';
          TaskFieldsConstant.MRO_CENTER = 'MROCenter';
          TaskFieldsConstant.INSPECTION_ESM = 'General.InspectionESM';
          TaskFieldsConstant.OVERHAUL = 'General.Overhaul';
          TaskFieldsConstant.ZONE = 'General.Zone';
          TaskFieldsConstant.APPLICABILITY_CODE = 'General.ApplicabilityCode';
          TaskFieldsConstant.SUB_CONTRACTING = 'General.SubContracting';
          TaskFieldsConstant.TOTAL_COST = 'General.TotalCost';
          TaskFieldsConstant.REFERENCE_MANUAL = 'General.ReferenceManual';
          TaskFieldsConstant.ATTRIBUTES = 'General.Attributs';
          TaskFieldsConstant.OPERATIONS = 'TaskCard.Operations';
          TaskFieldsConstant.EVOLUTIONS = 'Impacts.Evolutions';
          TaskFieldsConstant.ITEMLINKED = 'Impacts.ItemVersions';
          TaskFieldsConstant.TECHNICAL_LEVEL = 'Prerequisites.TechnicalLevel';
          TaskFieldsConstant.DOCUMENTS = 'Documents';
          TaskFieldsConstant.MAINTENANCE_PROGRAMS = 'Manuals.MaintenancePrograms';
          TaskFieldsConstant.TOP_DOWN_STRUCTURE = 'TaskCard.TopDownStructure';
          TaskFieldsConstant.SUPERIOR_TASKS = 'TaskCard.SuperiorTasks';
          TaskFieldsConstant.ANTERIOR_TASKS = 'TaskCard.AnteriorInSequence';
          TaskFieldsConstant.POSTERIOR_TASKS = 'TaskCard.PosteriorInSequence';
          TaskFieldsConstant.LINKED_TASK = 'TaskCard.LinkedTasks';
          TaskFieldsConstant.SHOP_MANUALS = 'Manuals.ShopManuals';
          TaskFieldsConstant.ASSOCIATED_QUALIFICATIONS = 'Prerequisites.AssociatedQualifications';
          TaskFieldsConstant.TASK_CARD = 'TaskCard';
          TaskFieldsConstant.IMPACTS = 'Impacts';
          TaskFieldsConstant.PREREQUISITES = 'Prerequisites';
          TaskFieldsConstant.MEASUREMENT_POINT = 'MeasurementPoint';
          return TaskFieldsConstant;
        })();

        /***/
      },

    /***/ './src/app/shared/utils/array-utils.ts':
      /*!*********************************************!*\
  !*** ./src/app/shared/utils/array-utils.ts ***!
  \*********************************************/
      /*! exports provided: ArrayUtils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ArrayUtils', function() {
          return ArrayUtils;
        });
        var ArrayUtils = /** @class */ (function() {
          function ArrayUtils() {}
          ArrayUtils.compareValues = function(key, order) {
            if (order === void 0) {
              order = 'asc';
            }
            return function(a, b) {
              if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
              }
              var varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
              var varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
              var comparison = 0;
              if (varA > varB) {
                comparison = 1;
              } else if (varA < varB) {
                comparison = -1;
              }
              return order === 'desc' ? comparison * -1 : comparison;
            };
          };
          return ArrayUtils;
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
//# sourceMappingURL=engineering-management-task-task-module.js.map
