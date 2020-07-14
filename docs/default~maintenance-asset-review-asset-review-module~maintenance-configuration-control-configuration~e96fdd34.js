(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~maintenance-asset-review-asset-review-module~maintenance-configuration-control-configuration~e96fdd34'],
  {
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

    /***/ './node_modules/primeng/components/radiobutton/radiobutton.js':
      /*!********************************************************************!*\
  !*** ./node_modules/primeng/components/radiobutton/radiobutton.js ***!
  \********************************************************************/
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
        var forms_1 = __webpack_require__(/*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js');
        exports.RADIO_VALUE_ACCESSOR = {
          provide: forms_1.NG_VALUE_ACCESSOR,
          useExisting: core_1.forwardRef(function() {
            return RadioButton;
          }),
          multi: true
        };
        var RadioButton = /** @class */ (function() {
          function RadioButton(cd) {
            this.cd = cd;
            this.onClick = new core_1.EventEmitter();
            this.onFocus = new core_1.EventEmitter();
            this.onBlur = new core_1.EventEmitter();
            this.onModelChange = function() {};
            this.onModelTouched = function() {};
          }
          RadioButton.prototype.handleClick = function(event, radioButton, focus) {
            event.preventDefault();
            if (this.disabled) {
              return;
            }
            this.select(event);
            if (focus) {
              radioButton.focus();
            }
          };
          RadioButton.prototype.select = function(event) {
            if (!this.disabled) {
              this.inputViewChild.nativeElement.checked = true;
              this.checked = true;
              this.onModelChange(this.value);
              this.onClick.emit(event);
            }
          };
          RadioButton.prototype.writeValue = function(value) {
            this.checked = value == this.value;
            if (this.inputViewChild.nativeElement) {
              this.inputViewChild.nativeElement.checked = this.checked;
            }
            this.cd.markForCheck();
          };
          RadioButton.prototype.registerOnChange = function(fn) {
            this.onModelChange = fn;
          };
          RadioButton.prototype.registerOnTouched = function(fn) {
            this.onModelTouched = fn;
          };
          RadioButton.prototype.setDisabledState = function(val) {
            this.disabled = val;
          };
          RadioButton.prototype.onInputFocus = function(event) {
            this.focused = true;
            this.onFocus.emit(event);
          };
          RadioButton.prototype.onInputBlur = function(event) {
            this.focused = false;
            this.onModelTouched();
            this.onBlur.emit(event);
          };
          RadioButton.prototype.onChange = function(event) {
            this.select(event);
          };
          __decorate([core_1.Input(), __metadata('design:type', Object)], RadioButton.prototype, 'value', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], RadioButton.prototype, 'name', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Boolean)], RadioButton.prototype, 'disabled', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], RadioButton.prototype, 'label', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Number)], RadioButton.prototype, 'tabindex', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], RadioButton.prototype, 'inputId', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Object)], RadioButton.prototype, 'style', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], RadioButton.prototype, 'styleClass', void 0);
          __decorate(
            [core_1.Input(), __metadata('design:type', String)],
            RadioButton.prototype,
            'labelStyleClass',
            void 0
          );
          __decorate(
            [core_1.Output(), __metadata('design:type', core_1.EventEmitter)],
            RadioButton.prototype,
            'onClick',
            void 0
          );
          __decorate(
            [core_1.Output(), __metadata('design:type', core_1.EventEmitter)],
            RadioButton.prototype,
            'onFocus',
            void 0
          );
          __decorate(
            [core_1.Output(), __metadata('design:type', core_1.EventEmitter)],
            RadioButton.prototype,
            'onBlur',
            void 0
          );
          __decorate(
            [core_1.ViewChild('rb'), __metadata('design:type', core_1.ElementRef)],
            RadioButton.prototype,
            'inputViewChild',
            void 0
          );
          RadioButton = __decorate(
            [
              core_1.Component({
                selector: 'p-radioButton',
                template:
                  '\n        <div [ngStyle]="style" [ngClass]="\'ui-radiobutton ui-widget\'" [class]="styleClass">\n            <div class="ui-helper-hidden-accessible">\n                <input #rb type="radio" [attr.id]="inputId" [attr.name]="name" [attr.value]="value" [attr.tabindex]="tabindex" \n                    [checked]="checked" (change)="onChange($event)" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)" [disabled]="disabled">\n            </div>\n            <div (click)="handleClick($event, rb, true)"\n                [ngClass]="{\'ui-radiobutton-box ui-widget ui-state-default\':true,\n                \'ui-state-active\':rb.checked,\'ui-state-disabled\':disabled,\'ui-state-focus\':focused}">\n                <span class="ui-radiobutton-icon ui-clickable" [ngClass]="{\'pi pi-circle-on\':rb.checked}"></span>\n            </div>\n        </div>\n        <label (click)="select($event)" [class]="labelStyleClass"\n            [ngClass]="{\'ui-radiobutton-label\':true, \'ui-label-active\':rb.checked, \'ui-label-disabled\':disabled, \'ui-label-focus\':focused}"\n            *ngIf="label" [attr.for]="inputId">{{label}}</label>\n    ',
                providers: [exports.RADIO_VALUE_ACCESSOR]
              }),
              __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
            ],
            RadioButton
          );
          return RadioButton;
        })();
        exports.RadioButton = RadioButton;
        var RadioButtonModule = /** @class */ (function() {
          function RadioButtonModule() {}
          RadioButtonModule = __decorate(
            [
              core_1.NgModule({
                imports: [common_1.CommonModule],
                exports: [RadioButton],
                declarations: [RadioButton]
              })
            ],
            RadioButtonModule
          );
          return RadioButtonModule;
        })();
        exports.RadioButtonModule = RadioButtonModule;
        //# sourceMappingURL=radiobutton.js.map

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

    /***/ './node_modules/primeng/dragdrop.js':
      /*!******************************************!*\
  !*** ./node_modules/primeng/dragdrop.js ***!
  \******************************************/
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
            /*! ./components/dragdrop/dragdrop */ './node_modules/primeng/components/dragdrop/dragdrop.js'
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

    /***/ './src/app/shared/components/asset-rev-search/asset-rev-search.component.html':
      /*!************************************************************************************!*\
  !*** ./src/app/shared/components/asset-rev-search/asset-rev-search.component.html ***!
  \************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<!-- <div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ "transaction." + getComponentName() | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle">\r\n        {{ "page.searchPage" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n</div> -->\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row search-criteria-header">\r\n                    <aw-manage-search-criteria\r\n                      [componentId]="ASSETREVIEW_SEARCH_CRITERIA_ID"\r\n                      (onSelected)="loadSearchCriteria($event)"\r\n                      (onSavedAsked)="saveSearchCriteria()"\r\n                      [objectFromPage]="criteriaToSave"\r\n                    ></aw-manage-search-criteria>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <h4 class="section-title">{{ getComponentName() + ".mainCriteria" | translate }}</h4>\r\n\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group flex--2">\r\n                      <label class="form-label"> &nbsp; </label>\r\n\r\n                      <div class="form-control aw-selectbutton-wrapper">\r\n                        <p-selectButton\r\n                          [(ngModel)]="selectedSearchAsset"\r\n                          [options]="searchAssetList"\r\n                          (onChange)="onChangeSearchAsset()"\r\n                        ></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ getComponentName() + ".familyVariant" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          [(ngModel)]="searchObject.bireVariantVersion"\r\n                          placeholder="&nbsp;"\r\n                          [showClear]="true"\r\n                          [options]="familyVariantList"\r\n                          (keyup.enter)="search()"\r\n                          appendTo="body"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ getComponentName() + ".designation" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" [(ngModel)]="searchObject.designation" class="aw-input" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <h4 *ngIf="selectedSearchAsset === searchAsset.All" class="section-title">\r\n                  {{ getComponentName() + ".otherCriteria" | translate }}\r\n                </h4>\r\n                <h4 *ngIf="selectedSearchAsset === searchAsset.Aircraft" class="section-title">\r\n                  {{ getComponentName() + ".aircraftCriteria" | translate }}\r\n                </h4>\r\n                <h4 *ngIf="selectedSearchAsset === searchAsset.Engine" class="section-title">\r\n                  {{ getComponentName() + ".engineCriteria" | translate }}\r\n                </h4>\r\n                <h4 *ngIf="selectedSearchAsset === searchAsset.Equipment" class="section-title">\r\n                  {{ getComponentName() + ".equipmentCriteria" | translate }}\r\n                </h4>\r\n\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div\r\n                      class="form-group"\r\n                      [ngClass]="{\r\n                        \'display--none\':\r\n                          selectedSearchAsset === searchAsset.All || selectedSearchAsset === searchAsset.Equipment\r\n                      }"\r\n                    >\r\n                      <label class="form-label"> {{ getComponentName() + ".registration" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" [(ngModel)]="searchObject.registration" class="aw-input" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label *ngIf="selectedSearchAsset === searchAsset.Engine" class="form-label">\r\n                        {{ getComponentName() + ".esnCode" | translate }}\r\n                      </label>\r\n                      <label *ngIf="selectedSearchAsset === searchAsset.Aircraft" class="form-label">\r\n                        {{ getComponentName() + ".msnCode" | translate }}\r\n                      </label>\r\n                      <label\r\n                        *ngIf="selectedSearchAsset === searchAsset.All || selectedSearchAsset === searchAsset.Equipment"\r\n                        class="form-label"\r\n                      >\r\n                        {{ getComponentName() + ".snCode" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" [(ngModel)]="searchObject.snCode" class="aw-input" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div\r\n                      class="form-group"\r\n                      [ngClass]="{\r\n                        \'display--none\': selectedSearchAsset === searchAsset.Aircraft\r\n                      }"\r\n                    >\r\n                      <label class="form-label"> {{ getComponentName() + ".pnCode" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" [(ngModel)]="searchObject.pnCode" class="aw-input" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div\r\n                      class="form-group"\r\n                      [ngClass]="{\r\n                        \'display--none\':\r\n                          selectedSearchAsset !== searchAsset.All && selectedSearchAsset !== searchAsset.Equipment\r\n                      }"\r\n                    >\r\n                      <label class="form-label"> {{ getComponentName() + ".function" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          [options]="functionList"\r\n                          class="aw-dropdown fixed-width"\r\n                          [(ngModel)]="searchObject.equipmentFunctionKey"\r\n                          placeholder="&nbsp;"\r\n                          [showClear]="true"\r\n                          (keyup.enter)="search()"\r\n                          appendTo="body"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label" *ngIf="selectedSearchAsset === searchAsset.Aircraft">\r\n                        {{ getComponentName() + ".aircraftStatus" | translate }}\r\n                      </label>\r\n                      <label class="form-label" *ngIf="selectedSearchAsset !== searchAsset.Aircraft">\r\n                        {{ getComponentName() + ".operationalStatus" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          [options]="operationalStatusList"\r\n                          [(ngModel)]="searchObject.operationalStatusKey"\r\n                          [showClear]="true"\r\n                          placeholder="&nbsp;"\r\n                          (keyup.enter)="search()"\r\n                          appendTo="body"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div *ngIf="selectedSearchAsset === searchAsset.Aircraft" class="form-group"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="advanced-criteria" [ngClass]="{ \'display--none\': !showAdvancedCriteria }">\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ getComponentName() + ".assetCode" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" [(ngModel)]="searchObject.assetCode" class="aw-input" />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ getComponentName() + ".owner" | translate }} </label>\r\n\r\n                        <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n                          <div class="form-control-data" (click)="openOwnerDialog()">\r\n                            {{ searchObject.ownerCustomerCode }}\r\n                          </div>\r\n\r\n                          <div *ngIf="searchObject.ownerCustomerCode" class="btn-clear-wrapper">\r\n                            <i\r\n                              class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                              aria-hidden="true"\r\n                              (click)="searchObject.ownerCustomerCode = undefined"\r\n                            ></i>\r\n                          </div>\r\n                          <div class="btn-search-wrapper">\r\n                            <i\r\n                              class="fa fa-fw fa-search aw-icon btn-search"\r\n                              aria-hidden="true"\r\n                              (click)="openOwnerDialog()"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ getComponentName() + ".operator" | translate }} </label>\r\n\r\n                        <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n                          <div class="form-control-data" (click)="openOperatorDialog()">\r\n                            {{ searchObject.operatorCustomerCode }}\r\n                          </div>\r\n\r\n                          <div *ngIf="searchObject.operatorCustomerCode" class="btn-clear-wrapper">\r\n                            <i\r\n                              class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                              aria-hidden="true"\r\n                              (click)="searchObject.operatorCustomerCode = undefined"\r\n                            ></i>\r\n                          </div>\r\n                          <div class="btn-search-wrapper">\r\n                            <i\r\n                              class="fa fa-fw fa-search aw-icon btn-search"\r\n                              aria-hidden="true"\r\n                              (click)="openOperatorDialog()"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div\r\n                        class="form-group"\r\n                        [ngClass]="{ \'display--none\': selectedSearchAsset !== searchAsset.Engine }"\r\n                      >\r\n                        <label class="form-label"> {{ getComponentName() + ".modelCode" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" [(ngModel)]="searchObject.modelCode" class="aw-input" />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div *ngIf="selectedSearchAsset !== searchAsset.Engine" class="form-group"></div>\r\n                    </div>\r\n\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ getComponentName() + ".mpName" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" [(ngModel)]="searchObject.mpName" class="aw-input" />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ getComponentName() + ".mpRevision" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" [(ngModel)]="searchObject.mpRevision" class="aw-input" />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ getComponentName() + ".location" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width"\r\n                            [options]="locationList"\r\n                            [(ngModel)]="searchObject.location"\r\n                            placeholder="&nbsp;"\r\n                            [showClear]="true"\r\n                            (keyup.enter)="search()"\r\n                            appendTo="body"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div\r\n                        class="form-group"\r\n                        [ngClass]="{\r\n                          \'display--none\': selectedSearchAsset === searchAsset.Aircraft\r\n                        }"\r\n                      >\r\n                        <label class="form-label"> {{ getComponentName() + ".wareHouse" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width"\r\n                            [options]="wareHouseList"\r\n                            [(ngModel)]="searchObject.warehouseId"\r\n                            [showClear]="true"\r\n                            placeholder="&nbsp;"\r\n                            (keyup.enter)="search()"\r\n                            appendTo="body"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div *ngIf="selectedSearchAsset === searchAsset.Aircraft" class="form-group"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row search-criteria-footer">\r\n                    <button mat-button (click)="showAdvancedCriteria = !showAdvancedCriteria">\r\n                      <ng-container *ngIf="showAdvancedCriteria">\r\n                        <mat-icon>remove</mat-icon>\r\n                        {{ "global.collapseCriteria" | translate }}\r\n                      </ng-container>\r\n                      <ng-container *ngIf="!showAdvancedCriteria">\r\n                        <mat-icon>add</mat-icon>\r\n                        {{ "global.expandCriteria" | translate }}\r\n                      </ng-container>\r\n                    </button>\r\n\r\n                    <div class="search-actions">\r\n                      <button\r\n                        type="button"\r\n                        mat-raised-button\r\n                        class="btn-with-spinner"\r\n                        (click)="search()"\r\n                        color="primary"\r\n                        appKeyPress\r\n                        [keyCode]="\'Enter\'"\r\n                        (keyPress)="search()"\r\n                      >\r\n                        <span *ngIf="resultTableLoading" class="lds-hourglass"></span>\r\n                        {{ "global.toSearch" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ "global.results" | translate }} ({{ resultTable.list ? resultTable.list.length : 0\r\n                  }}<span *ngIf="resultTable.moreResults">+</span>)\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                [resizableColumns]="true"\r\n                #ptable\r\n                class="aw-table2"\r\n                [columns]="resultTableCols"\r\n                [value]="resultTable.list"\r\n                [(selection)]="selection"\r\n                [scrollable]="true"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!resultTableLoading"> &nbsp;</span>\r\n\r\n                  <div *ngIf="resultTableLoading" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selection.length > 0 }">\r\n                    <div class="aw-table-global-filter">\r\n                      <label class="aw-table-global-filter-label">\r\n                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableGlobalFilter\r\n                        class="aw-table-global-filter-input"\r\n                        type="text"\r\n                        placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                        (input)="ptable.filterGlobal($event.target.value, \'contains\')"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class="aw-table-actions">\r\n                      <button *ngIf="selection.length > 0" type="button" mat-raised-button (click)="createEvent()">\r\n                        {{ getComponentName() + ".createEvent" | translate }}\r\n                      </button>\r\n                      <button *ngIf="selection.length > 0" type="button" mat-raised-button (click)="openSelection()">\r\n                        {{ "global.open" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col class="aw-table-checkbox-wrapper" />\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th class="aw-table-checkbox-wrapper">\r\n                      <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ getComponentName() + "." + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td class="aw-table-checkbox-wrapper">\r\n                      <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ rowData[col.field] }}\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-dialog-search-customer\r\n    *ngIf="showOperatorDialog"\r\n    [(display)]="showOperatorDialog"\r\n    [customer-code]="searchObject.operator"\r\n    (onSelected)="onSelectOperator($event)"\r\n  ></aw-dialog-search-customer>\r\n\r\n  <aw-dialog-search-customer\r\n    *ngIf="showOwnerDialog"\r\n    [(display)]="showOwnerDialog"\r\n    [customer-code]="searchObject.owner"\r\n    (onSelected)="onSelectOwner($event)"\r\n  ></aw-dialog-search-customer>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/asset-rev-search/asset-rev-search.component.ts':
      /*!**********************************************************************************!*\
  !*** ./src/app/shared/components/asset-rev-search/asset-rev-search.component.ts ***!
  \**********************************************************************************/
      /*! exports provided: AssetRevSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AssetRevSearchComponent',
          function() {
            return AssetRevSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants/bido-attribute-constants */ './src/app/shared/constants/bido-attribute-constants.ts'
        );
        /* harmony import */ var _constants_component_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _constants_lang_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../constants/lang-constants */ './src/app/shared/constants/lang-constants.ts'
        );
        /* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _services_serialization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _services_tab_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _types_generic_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../types/generic-component */ './src/app/shared/types/generic-component.ts'
        );
        /* harmony import */ var _utils_list_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _utils_select_item_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../utils/select-item-utils */ './src/app/shared/utils/select-item-utils.ts'
        );
        /* harmony import */ var _utils_string_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _asset_rev_search_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./asset-rev-search.service */ './src/app/shared/components/asset-rev-search/asset-rev-search.service.ts'
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

        var SearchAsset;
        (function(SearchAsset) {
          SearchAsset[(SearchAsset['All'] = 1)] = 'All';
          SearchAsset[(SearchAsset['Aircraft'] = 2)] = 'Aircraft';
          SearchAsset[(SearchAsset['Equipment'] = 3)] = 'Equipment';
          SearchAsset[(SearchAsset['Engine'] = 4)] = 'Engine';
        })(SearchAsset || (SearchAsset = {}));
        var AssetRevSearchComponent = /** @class */ (function(_super) {
          __extends(AssetRevSearchComponent, _super);
          function AssetRevSearchComponent(
            assetReviewSearchService,
            propertiesService,
            translateService,
            tabService,
            serializationService
          ) {
            var _this =
              _super.call(
                this,
                _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__['ComponentOpenMode'].Write
              ) || this;
            _this.assetReviewSearchService = assetReviewSearchService;
            _this.propertiesService = propertiesService;
            _this.translateService = translateService;
            _this.tabService = tabService;
            _this.serializationService = serializationService;
            _this.ASSETREVIEW_SEARCH_CRITERIA_ID =
              _constants_app_constants__WEBPACK_IMPORTED_MODULE_2__['AppConstants'].ASSETREVIEW_SEARCH_CRITERIA_ID;
            _this.searchAsset = SearchAsset;
            _this.init();
            _this.setResultTableCols();
            _this.setSearchAssetList();
            _this.loadBusinessPartnerList();
            _this.loadFamilyVariantList();
            _this.loadFleetList();
            _this.loadFunctionList();
            _this.loadLocationList();
            _this.loadOperationalStatusList();
            _this.loadWareHouseList();
            return _this;
          }
          AssetRevSearchComponent.prototype.openSelection = function() {
            var _this = this;
            this.selection.forEach(function(sel) {
              var input = {
                warehouseId: _this.searchObject.warehouseId,
                output: sel
              };
              _this.onOpenClick.emit(input);
            });
          };
          AssetRevSearchComponent.prototype.ngOnInit = function() {
            // todo
          };
          AssetRevSearchComponent.prototype.getComponentName = function() {
            return 'AssetReviewSearchComponent';
          };
          AssetRevSearchComponent.prototype.loadSearchCriteria = function(event) {
            var criteria = event.criteria;
            if (!criteria) {
              this.initSearchObject();
              return;
            }
            this.criteriaName = event.name;
            this.searchObject = criteria.searchObject;
            this.selectedSearchAsset = criteria.selectedSearchAsset;
            this.searchObject.assetTypeSelected =
              !!this.selectedSearchAsset && this.selectedSearchAsset !== SearchAsset.All;
            this.search();
          };
          AssetRevSearchComponent.prototype.saveSearchCriteria = function() {
            var criteriaToSave = {
              searchObject: this.searchObject,
              selectedSearchAsset: this.selectedSearchAsset
            };
            this.criteriaToSave = criteriaToSave;
          };
          AssetRevSearchComponent.prototype.initSearchObject = function() {
            this.searchObject = {
              assetTypeSelected: false
            };
            this.selectedBusinessPartner = undefined;
            this.selectedSearchAsset = SearchAsset.All;
          };
          AssetRevSearchComponent.prototype.onChangeSearchAsset = function() {
            this.searchObject.assetTypeSelected =
              !!this.selectedSearchAsset && this.selectedSearchAsset !== SearchAsset.All;
            this.loadFamilyVariantList();
            this.loadOperationalStatusList();
            this.loadWareHouseList();
          };
          AssetRevSearchComponent.prototype.onSelectBusinessPartner = function() {
            this.loadFleetList();
          };
          AssetRevSearchComponent.prototype.onSelectOperator = function(operator) {
            this.searchObject.operatorCustomerCode = operator ? operator.customerCode : undefined;
          };
          AssetRevSearchComponent.prototype.onSelectOwner = function(owner) {
            this.searchObject.ownerCustomerCode = owner ? owner.customerCode : undefined;
          };
          AssetRevSearchComponent.prototype.openOperatorDialog = function() {
            this.showOperatorDialog = true;
          };
          AssetRevSearchComponent.prototype.openOwnerDialog = function() {
            this.showOwnerDialog = true;
          };
          AssetRevSearchComponent.prototype.search = function() {
            var _this = this;
            this.resultTableLoading = true;
            this.clearResultTable();
            _super.prototype.scrollToAnchor.call(this, this.resultsContainerAnchor);
            if (this.selectedSearchAsset === SearchAsset.Aircraft) {
              this.searchObject.itemFamilyCodeKey =
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__[
                  'AWPropertiesConstants'
                ].ITEM_FAMILY_CODE_AIRCRAFT_KEY;
            } else if (this.selectedSearchAsset === SearchAsset.Engine) {
              this.searchObject.itemFamilyCodeKey =
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__[
                  'AWPropertiesConstants'
                ].ITEM_FAMILY_CODE_ENGINE_KEY;
            } else {
              this.searchObject.itemFamilyCodeKey = undefined;
            }
            this.assetReviewSearchService.findAllAssetByCriteria(this.searchObject).subscribe(function(result) {
              _this.resultTableLoading = false;
              _this.resultTable.moreResults = result.moreResults;
              _this.resultTable.list = _utils_list_utils__WEBPACK_IMPORTED_MODULE_13__['ListUtils'].orEmpty(
                result.list
              );
              _super.prototype.differ.call(_this, function() {
                _super.prototype.scrollToAnchor.call(_this, _this.resultsContainerAnchor);
              });
            });
          };
          AssetRevSearchComponent.prototype.clearResultTable = function() {
            this.resultTable = { list: [], moreResults: false };
            this.selection = [];
          };
          AssetRevSearchComponent.prototype.init = function() {
            this.initSearchObject();
            this.clearResultTable();
            this.resultTableLoading = false;
            this.businessPartnerList = [];
            this.familyVariantList = [];
            this.fleetList = [];
            this.functionList = [];
            this.locationList = [];
            this.operationalStatusList = [];
            this.wareHouseList = [];
            this.onOpenClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          };
          AssetRevSearchComponent.prototype.loadBusinessPartnerList = function() {
            var _this = this;
            this.assetReviewSearchService.findAllBidoCustomer().subscribe(function(results) {
              _this.businessPartnerList = _utils_list_utils__WEBPACK_IMPORTED_MODULE_13__['ListUtils']
                .orEmpty(results)
                .filter(function(customer) {
                  return !!customer.customerCode;
                })
                .map(function(customer) {
                  return {
                    label: _utils_string_utils__WEBPACK_IMPORTED_MODULE_15__['StringUtils'].isNullOrEmpty(
                      customer.customerName
                    )
                      ? customer.customerCode
                      : customer.customerName + ' (' + customer.customerCode + ')',
                    value: customer.customerCode
                  };
                });
            });
          };
          AssetRevSearchComponent.prototype.loadFamilyVariantList = function() {
            var _this = this;
            var familyFunction;
            if (this.selectedSearchAsset === SearchAsset.Aircraft) {
              familyFunction =
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_AIRCRAFT_KEY;
            } else if (this.selectedSearchAsset === SearchAsset.Engine) {
              familyFunction =
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_ENGINE_KEY;
            } else {
              familyFunction = '';
            }
            this.assetReviewSearchService
              .findAllBireVariantVersionByFamilyFunction(familyFunction)
              .subscribe(function(results) {
                _this.familyVariantList = _utils_list_utils__WEBPACK_IMPORTED_MODULE_13__['ListUtils']
                  .orEmpty(results)
                  .filter(function(familyVariant) {
                    return !!familyVariant.familyCode && !!familyVariant.variantCode;
                  })
                  .map(function(familyVariant) {
                    var label =
                      '' +
                      (familyVariant.familyName || familyVariant.familyCode) +
                      '-' +
                      ('' + (familyVariant.variantName || familyVariant.variantCode));
                    return {
                      label: label,
                      value: familyVariant
                    };
                  });
              });
          };
          AssetRevSearchComponent.prototype.loadFleetList = function() {
            var _this = this;
            var criteria = this.selectedBusinessPartner ? { customerCode: this.selectedBusinessPartner } : {};
            this.assetReviewSearchService.findAllBidoFleetByCriteria(criteria).subscribe(function(results) {
              _this.fleetList = _utils_list_utils__WEBPACK_IMPORTED_MODULE_13__['ListUtils']
                .orEmpty(results)
                .filter(function(fleet) {
                  return !!fleet.fleetCode;
                })
                .map(function(fleet) {
                  return {
                    label: _utils_string_utils__WEBPACK_IMPORTED_MODULE_15__['StringUtils'].isNullOrEmpty(
                      fleet.fleetName
                    )
                      ? fleet.fleetCode
                      : fleet.fleetCode + ' - ' + fleet.fleetName,
                    value: fleet.fleetId
                  };
                });
            });
          };
          AssetRevSearchComponent.prototype.loadFunctionList = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                  .ITEM_FAMILY_CODE_MAP
              )
              .subscribe(function(results) {
                _this.functionList = _utils_select_item_utils__WEBPACK_IMPORTED_MODULE_14__[
                  'SelectItemUtils'
                ].fromLabelValues(
                  _utils_list_utils__WEBPACK_IMPORTED_MODULE_13__['ListUtils'].orEmpty(results).filter(function(elt) {
                    return (
                      elt.value !==
                        _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                          .ITEM_FAMILY_CODE_AIRCRAFT_KEY &&
                      elt.value !==
                        _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                          .ITEM_FAMILY_CODE_ENGINE_KEY
                    );
                  })
                );
              });
          };
          AssetRevSearchComponent.prototype.loadLocationList = function() {
            var _this = this;
            this.assetReviewSearchService
              .findAllBidoAttributeByAttributeId(
                _constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_4__['BidoAttributeConstants']
                  .ASSET_LOCATION
              )
              .subscribe(function(results) {
                _this.locationList = _utils_list_utils__WEBPACK_IMPORTED_MODULE_13__['ListUtils']
                  .orEmpty(results)
                  .map(function(location) {
                    return {
                      label:
                        _this.translateService.currentLang ===
                        _constants_lang_constants__WEBPACK_IMPORTED_MODULE_7__['LangConstants'].FRENCH_CODE
                          ? location.textFr
                          : location.textEn,
                      value: location.attributeValue
                    };
                  });
              });
          };
          AssetRevSearchComponent.prototype.loadOperationalStatusList = function() {
            var _this = this;
            var mapKey;
            switch (this.selectedSearchAsset) {
              case SearchAsset.Aircraft:
                mapKey =
                  _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                    .AIRCRAFT_STATUS_MAP;
                break;
              default:
                mapKey =
                  _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                    .OPERATIONAL_STATUS_MAP;
                break;
            }
            this.propertiesService.getValue(mapKey).subscribe(function(results) {
              _this.operationalStatusList = _utils_select_item_utils__WEBPACK_IMPORTED_MODULE_14__[
                'SelectItemUtils'
              ].fromLabelValues(_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__['ListUtils'].orEmpty(results));
            });
          };
          AssetRevSearchComponent.prototype.loadWareHouseList = function() {
            var _this = this;
            this.assetReviewSearchService.findAllWarehouse().subscribe(function(results) {
              _this.wareHouseList = _utils_list_utils__WEBPACK_IMPORTED_MODULE_13__['ListUtils']
                .orEmpty(results)
                .filter(function(warehouse) {
                  return !!warehouse.whCode;
                })
                .map(function(warehouse) {
                  return {
                    label: _utils_string_utils__WEBPACK_IMPORTED_MODULE_15__['StringUtils'].isNullOrEmpty(
                      warehouse.whName
                    )
                      ? warehouse.whCode
                      : warehouse.whCode + ' - ' + warehouse.whName,
                    value: warehouse.wareHouseId
                  };
                });
            });
          };
          AssetRevSearchComponent.prototype.setResultTableCols = function() {
            this.resultTableCols = [
              { field: 'familyVariant', alignment: 'left' },
              { field: 'registration', alignment: 'left' },
              { field: 'pnCode', alignment: 'left' },
              { field: 'snCode', alignment: 'left' },
              { field: 'designation', alignment: 'left' },
              { field: 'function', alignment: 'left' },
              { field: 'status', alignment: 'left' }
            ];
          };
          AssetRevSearchComponent.prototype.setSearchAssetList = function() {
            var _this = this;
            var allKey = 'global.all';
            var aircraftKey = 'global.aircraft';
            var engineKey = 'global.engine';
            var equipmentKey = 'global.equipment';
            this.translateService.get([allKey, aircraftKey, engineKey, equipmentKey]).subscribe(function(results) {
              var allLabel = !!results ? results[allKey] : 'All';
              var aircraftLabel = !!results ? results[aircraftKey] : 'Aircraft';
              var engineLabel = !!results ? results[engineKey] : 'Engine';
              var equipmentLabel = !!results ? results[equipmentKey] : 'Equipment';
              _this.searchAssetList = [
                { label: allLabel, value: SearchAsset.All },
                { label: aircraftLabel, value: SearchAsset.Aircraft },
                { label: engineLabel, value: SearchAsset.Engine },
                { label: equipmentLabel, value: SearchAsset.Equipment }
              ];
            });
          };
          /**
           * Open Event creation screen
           */
          AssetRevSearchComponent.prototype.createEvent = function() {
            var bidoNotificationDTO = {
              equipmentCode: this.selection[0].equipmentCode,
              bidoNotificationTypeDTO: {}
            };
            this.openEvent(
              bidoNotificationDTO,
              _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__['ComponentOpenMode'].Create
            );
          };
          AssetRevSearchComponent.prototype.openEvent = function(objectId, openMode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _constants_component_constants__WEBPACK_IMPORTED_MODULE_5__['ComponentConstants'].FLE_EVENT_CREATE,
              openMode: openMode
            };
            if (!!objectId) {
              data.objectId = this.serializationService.serialize(objectId);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            AssetRevSearchComponent.prototype,
            'onOpenClick',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('resultsContainerAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            AssetRevSearchComponent.prototype,
            'resultsContainerAnchor',
            void 0
          );
          AssetRevSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-asset-rev-search',
                template: __webpack_require__(
                  /*! ./asset-rev-search.component.html */ './src/app/shared/components/asset-rev-search/asset-rev-search.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _asset_rev_search_service__WEBPACK_IMPORTED_MODULE_16__['AssetRevSearchService'],
                _services_properties_service__WEBPACK_IMPORTED_MODULE_9__['PropertiesService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _services_tab_service__WEBPACK_IMPORTED_MODULE_11__['TabService'],
                _services_serialization_service__WEBPACK_IMPORTED_MODULE_10__['SerializationService']
              ])
            ],
            AssetRevSearchComponent
          );
          return AssetRevSearchComponent;
        })(_types_generic_component__WEBPACK_IMPORTED_MODULE_12__['GenericComponent']);

        /***/
      },

    /***/ './src/app/shared/components/asset-rev-search/asset-rev-search.module.ts':
      /*!*******************************************************************************!*\
  !*** ./src/app/shared/components/asset-rev-search/asset-rev-search.module.ts ***!
  \*******************************************************************************/
      /*! exports provided: AssetRevSearchModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AssetRevSearchModule', function() {
          return AssetRevSearchModule;
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
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/message */ './node_modules/primeng/message.js'
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_message__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/overlaypanel */ './node_modules/primeng/overlaypanel.js'
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/radiobutton */ './node_modules/primeng/radiobutton.js'
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__
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
        /* harmony import */ var _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-customer/dialog-search-customer.module */ './src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts'
        );
        /* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ './src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _asset_rev_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./asset-rev-search.component */ './src/app/shared/components/asset-rev-search/asset-rev-search.component.ts'
        );
        /* harmony import */ var _asset_rev_search_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./asset-rev-search.service */ './src/app/shared/components/asset-rev-search/asset-rev-search.service.ts'
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
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_1__['CheckboxModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__['DropdownModule'],
          primeng_message__WEBPACK_IMPORTED_MODULE_3__['MessageModule'],
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_4__['OverlayPanelModule'],
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__['RadioButtonModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__['SelectButtonModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_7__['TableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__['TooltipModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_12__[
            'DialogSearchCustomerModule'
          ],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_14__['ModalModule'],
          _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_13__[
            'ManageSearchCriteriaModule'
          ]
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [_asset_rev_search_component__WEBPACK_IMPORTED_MODULE_15__['AssetRevSearchComponent']];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [_asset_rev_search_service__WEBPACK_IMPORTED_MODULE_16__['AssetRevSearchService']];
        var AssetRevSearchModule = /** @class */ (function() {
          function AssetRevSearchModule() {}
          AssetRevSearchModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS),
                exports: __spread(COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_9__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_10__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_11__['AppCommonSharedModule']
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            AssetRevSearchModule
          );
          return AssetRevSearchModule;
        })();

        /***/
      },

    /***/ './src/app/shared/components/asset-rev-search/asset-rev-search.service.ts':
      /*!********************************************************************************!*\
  !*** ./src/app/shared/components/asset-rev-search/asset-rev-search.service.ts ***!
  \********************************************************************************/
      /*! exports provided: AssetRevSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AssetRevSearchService', function() {
          return AssetRevSearchService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
        );
        /* harmony import */ var _api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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

        var AssetRevSearchService = /** @class */ (function(_super) {
          __extends(AssetRevSearchService, _super);
          function AssetRevSearchService(
            http,
            appConfigService,
            bidtWarehouseApi,
            fleetManagementApi,
            productStructureManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            return _this;
          }
          /**************************************************************************
           * Bidt warehouse api
           *************************************************************************/
          AssetRevSearchService.prototype.findAllWarehouse = function() {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findAll);
          };
          /**************************************************************************
           * Fleet management api
           *************************************************************************/
          AssetRevSearchService.prototype.findAllBidoAttributeByAttributeId = function(attributeId) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoAttributeValuesByAttributeId,
              attributeId
            );
          };
          AssetRevSearchService.prototype.findAllBidoCustomer = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoCustomer);
          };
          AssetRevSearchService.prototype.findAllBidoFleetByCriteria = function(criteria) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoFleetByCriteria, criteria);
          };
          /**************************************************************************
           * Product structure management api
           *************************************************************************/
          AssetRevSearchService.prototype.findAllAssetByCriteria = function(criteria) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findAllAssetForAirworthinessControl,
              criteria
            );
          };
          AssetRevSearchService.prototype.findAllBireVariantVersionByFamilyFunction = function(familyFunction) {
            var param = {
              familyFunction: familyFunction
            };
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findAllBireVariantVersionByFamilyFunction,
              param
            );
          };
          AssetRevSearchService.prototype.getAllOperationalStatusForTools = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.getAllOperationalStatusForTools);
          };
          AssetRevSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])({
                providedIn: 'root'
              }),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _services_app_config_service__WEBPACK_IMPORTED_MODULE_6__['AppConfigService'],
                _api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_2__['BidtWarehouseApi'],
                _api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__['FleetManagementApi'],
                _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__['ProductStructureManagementApi']
              ])
            ],
            AssetRevSearchService
          );
          return AssetRevSearchService;
        })(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/shared/constants/bido-attribute-constants.ts':
      /*!**************************************************************!*\
  !*** ./src/app/shared/constants/bido-attribute-constants.ts ***!
  \**************************************************************/
      /*! exports provided: BidoAttributeConstants */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'BidoAttributeConstants', function() {
          return BidoAttributeConstants;
        });
        var BidoAttributeConstants = /** @class */ (function() {
          function BidoAttributeConstants() {}
          /**************************************************************************
           * Attribute Types
           *************************************************************************/
          BidoAttributeConstants.ATTRIBUTE_TYPE_TEXT = 'Text';
          BidoAttributeConstants.ATTRIBUTE_TYPE_DATE = 'Date';
          BidoAttributeConstants.ATTRIBUTE_TYPE_BOOLEAN = 'Boolean';
          BidoAttributeConstants.ATTRIBUTE_TYPE_LIST = 'List';
          /**************************************************************************
           * Standard Attributes
           *************************************************************************/
          BidoAttributeConstants.SAP_EQUIPMENT_CODE = 1;
          BidoAttributeConstants.ASSET_LOCATION = 2;
          BidoAttributeConstants.MANUFACTURER = 3;
          BidoAttributeConstants.ICAO_CODE = 4;
          BidoAttributeConstants.ITEM_NUMBER = 5;
          BidoAttributeConstants.EVENT_LOCATION = 6;
          BidoAttributeConstants.ASSET_SYSTEM_SOURCE_ID = 7;
          BidoAttributeConstants.ASSET_SYSTEM_SOURCE_REFERENCE = 8;
          BidoAttributeConstants.EVENT_SYSTEM_SOURCE_ID = 9;
          BidoAttributeConstants.EVENT_SYSTEM_SOURCE_REFERENCE = 10;
          BidoAttributeConstants.FUNCTIONAL_LOCATION = 11;
          BidoAttributeConstants.EVENT_IS_DEFERRED_DEFECT = 12;
          BidoAttributeConstants.EVENT_DD_DELAY_CATEGORY = 13;
          BidoAttributeConstants.EVENT_DD_DELAY_AUTHORIZED_VALUE = 14;
          BidoAttributeConstants.EVENT_DD_DELAY_AUTHORIZED_UNIT = 15;
          BidoAttributeConstants.EVENT_DD_TASK_PROPOSED_TO_PROCESS = 16;
          BidoAttributeConstants.EVENT_DD_DELAY_AUTHORIZATION_NUMBER = 17;
          BidoAttributeConstants.EVENT_DEFECT_LAST_AUTHOR = 18;
          BidoAttributeConstants.EVENT_DEFECT_CORRECTIVE_ACTION_LAST_AUTHOR = 19;
          BidoAttributeConstants.EVENT_DEFECT_DEFERRAL_LAST_AUTHOR = 20;
          BidoAttributeConstants.EVENT_DEFECT_DETECTION_CONTEXT = 21;
          BidoAttributeConstants.EVENT_DEFECT_CORRECTIVE_ACTION_DESCRIPTION = 22;
          BidoAttributeConstants.EVENT_DEFECT_LOG_NUMBER = 23;
          BidoAttributeConstants.EVENT_DEFECT_EXTENSION = 24;
          BidoAttributeConstants.EVENT_DEFECT_AUTHOR = 25;
          BidoAttributeConstants.EVENT_DEFECT_CORRECTIVE_ACTION_AUTHOR = 26;
          BidoAttributeConstants.EVENT_DEFECT_DEFERRAL_AUTHOR = 27;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_WO_CONTEXT = 28;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_AUTHORIZATION_NUMBER = 29;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_LIMIT_DATE = 30;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_REFUSAL_REASON = 31;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_AUTHOR = 32;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_DECISION_LAST_AUTHOR = 33;
          BidoAttributeConstants.MAINTENANCE_PLAN_ORIGINAL_DEADLINES = 34;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_FLIGHT_RESTRICTIONS = 35;
          BidoAttributeConstants.EVENT_DEFECT_FLIGHT_RESTRICTIONS = 36;
          BidoAttributeConstants.EVENT_DEFECT_IS_CRITICAL = 37;
          BidoAttributeConstants.FLIGHT_GONOGO_VALIDATION = 38;
          BidoAttributeConstants.EVENT_TASK_APPLIED_FLIGHT_CONTEXT = 39;
          BidoAttributeConstants.IGNORE_INITIAL_DEADLINE_NEXT_OCCURRENCE_CALCULATION = 40;
          BidoAttributeConstants.EVENT_DEFECT_INSPECTION_MEAN = 41;
          BidoAttributeConstants.EVENT_DEFECT_SRM_REFERENCE = 42;
          BidoAttributeConstants.EVENT_DEFECT_FRAME_FROM = 43;
          BidoAttributeConstants.EVENT_DEFECT_FRAME_FROM_DISTANCE = 44;
          BidoAttributeConstants.EVENT_DEFECT_FRAME_TO = 45;
          BidoAttributeConstants.EVENT_DEFECT_FRAME_TO_DISTANCE = 46;
          BidoAttributeConstants.EVENT_DEFECT_STRINGER_FROM = 47;
          BidoAttributeConstants.EVENT_DEFECT_STRINGER_FROM_DISTANCE = 48;
          BidoAttributeConstants.EVENT_DEFECT_STRINGER_TO = 49;
          BidoAttributeConstants.EVENT_DEFECT_STRINGER_TO_DISTANCE = 50;
          BidoAttributeConstants.EVENT_DEFECT_RIB_FROM = 51;
          BidoAttributeConstants.EVENT_DEFECT_RIB_FROM_DISTANCE = 52;
          BidoAttributeConstants.EVENT_DEFECT_RIB_TO = 53;
          BidoAttributeConstants.EVENT_DEFECT_RIB_TO_DISTANCE = 54;
          BidoAttributeConstants.EVENT_DEFECT_BEAM_FROM = 55;
          BidoAttributeConstants.EVENT_DEFECT_BEAM_FROM_DISTANCE = 56;
          BidoAttributeConstants.EVENT_DEFECT_BEAM_TO = 57;
          BidoAttributeConstants.EVENT_DEFECT_BEAM_TO_DISTANCE = 56;
          BidoAttributeConstants.EVENT_DEFECT_DEPTH = 59;
          BidoAttributeConstants.EVENT_DEFECT_LENGHT = 60;
          BidoAttributeConstants.EVENT_DEFECT_WIDTH = 61;
          BidoAttributeConstants.EVENT_DEFECT_SURFACE_AREA = 62;
          BidoAttributeConstants.FLIGHT_SYSTEM_SOURCE_ID = 63;
          BidoAttributeConstants.FLIGHT_SYSTEM_SOURCE_REFERENCE = 64;
          BidoAttributeConstants.EVENT_WORK_ORDER_SOURCE = 65;
          BidoAttributeConstants.EVENT_FAULT_CODE = 68;
          // Dassault *******************************************************************
          BidoAttributeConstants.DAV_HUMS_STATUS = 2000;
          BidoAttributeConstants.DAV_HUMS_MESSAGE = 2001;
          BidoAttributeConstants.DAV_MANUAL_FLIGHT_ENTRIES = 2003;
          return BidoAttributeConstants;
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
//# sourceMappingURL=default~maintenance-asset-review-asset-review-module~maintenance-configuration-control-configuration~e96fdd34.js.map
