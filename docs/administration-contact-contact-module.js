(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['administration-contact-contact-module'],
  {
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

    /***/ './src/app/main/administration/contact/contact.module.ts':
      /*!***************************************************************!*\
  !*** ./src/app/main/administration/contact/contact.module.ts ***!
  \***************************************************************/
      /*! exports provided: ContactModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ContactModule', function() {
          return ContactModule;
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
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/inputtextarea */ './node_modules/primeng/inputtextarea.js'
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/keyfilter */ './node_modules/primeng/keyfilter.js'
        );
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-customer/dialog-search-customer.module */ './src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_status_dialog_status_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/components/dialog-status/dialog-status.module */ './src/app/shared/components/dialog-status/dialog-status.module.ts'
        );
        /* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ './src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./form/contact-form.component */ './src/app/main/administration/contact/form/contact-form.component.ts'
        );
        /* harmony import */ var _form_contact_form_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./form/contact-form.service */ './src/app/main/administration/contact/form/contact-form.service.ts'
        );
        /* harmony import */ var _search_contact_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./search/contact-search.component */ './src/app/main/administration/contact/search/contact-search.component.ts'
        );
        /* harmony import */ var _search_contact_search_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./search/contact-search.service */ './src/app/main/administration/contact/search/contact-search.service.ts'
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
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_2__['InputTextareaModule'],
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_3__['KeyFilterModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_4__['TableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__['TooltipModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_9__[
            'DialogSearchCustomerModule'
          ],
          _shared_components_dialog_status_dialog_status_module__WEBPACK_IMPORTED_MODULE_10__['DialogStatusModule'],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_12__['ModalModule'],
          _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_13__['TableModule']
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var DYNAMIC_COMPONENTS = [
          _form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__['ContactFormComponent'],
          _search_contact_search_component__WEBPACK_IMPORTED_MODULE_17__['ContactSearchComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _form_contact_form_service__WEBPACK_IMPORTED_MODULE_16__['ContactFormService'],
          _search_contact_search_service__WEBPACK_IMPORTED_MODULE_18__['ContactSearchService']
        ];
        var ContactModule = /** @class */ (function() {
          function ContactModule() {}
          ContactModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_6__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_7__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_8__['AppCommonSharedModule'],
                    _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_11__[
                      'ManageSearchCriteriaModule'
                    ],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_14__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            ContactModule
          );
          return ContactModule;
        })();

        /***/
      },

    /***/ './src/app/main/administration/contact/form/contact-form.component.html':
      /*!******************************************************************************!*\
  !*** ./src/app/main/administration/contact/form/contact-form.component.html ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div *ngIf="!isCreateOpenMode && componentData && componentData.objectId" class="page-subtitle">\r\n          - {{ serializationService.deserialize(componentData.objectId)["contactName"] }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button *ngIf="isReadOpenMode && hasUpdateAccessRight" type="button" mat-raised-button (click)="editContact()">\r\n      {{ "global.edit" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode && !isCreateOpenMode"\r\n      type="button"\r\n      mat-raised-button\r\n      color="warn"\r\n      (click)="cancelContact()"\r\n    >\r\n      {{ "global.cancel" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      class="btn-with-spinner"\r\n      color="primary"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="saveContact()"\r\n    >\r\n      <span class="lds-hourglass" *ngIf="showSaveSpinner"></span>\r\n      {{ "global.save" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item (click)="reloadContact()">{{ "global.refresh" | translate }}</button>\r\n      <button mat-menu-item (click)="openStatusUpdatesPopup()">{{ "global.updates" | translate }}</button>\r\n      <button mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ getComponentName() + ".contact" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".name" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [(ngModel)]="contactListOutputDTO.contactName"\r\n                        disabled="true"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                    <label class="form-label">{{ componentData.componentId + ".firstName" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [(ngModel)]="contactListOutputDTO.firstName"\r\n                        [disabled]="componentData.objectId || isReadOpenMode"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                    <label class="form-label">{{ componentData.componentId + ".lastName" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [(ngModel)]="contactListOutputDTO.lastName"\r\n                        [disabled]="componentData.objectId || isReadOpenMode"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                    <label class="form-label">{{ componentData.componentId + ".businessPartner" | translate }}</label>\r\n\r\n                    <div\r\n                      class="form-control form-control-with-modal"\r\n                      [ngClass]="{ disabled: isReadOpenMode || isWriteOpenMode }"\r\n                    >\r\n                      <div class="form-control-data" (click)="openCustomerDialog()">\r\n                        {{ contactListOutputDTO.customerCode }}\r\n                        <span *ngIf="businessPartnerName">({{ businessPartnerName }})</span>\r\n                      </div>\r\n\r\n                      <div *ngIf="contactListOutputDTO.customerCode && isCreateOpenMode" class="btn-clear-wrapper">\r\n                        <i\r\n                          class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                          aria-hidden="true"\r\n                          (click)="resetCustomerCode()"\r\n                        ></i>\r\n                      </div>\r\n                      <div *ngIf="isCreateOpenMode" class="btn-search-wrapper">\r\n                        <i\r\n                          class="fa fa-fw fa-search aw-icon btn-search"\r\n                          aria-hidden="true"\r\n                          (click)="openCustomerDialog()"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".primaryContact" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <p-checkbox\r\n                        class="aw-checkbox"\r\n                        binary="true"\r\n                        [(ngModel)]="contactListOutputDTO.primaryContact"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-checkbox>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".title" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [(ngModel)]="contactListOutputDTO.title"\r\n                        [disabled]="isReadOpenMode"\r\n                        maxlength="10"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".officePhone" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [(ngModel)]="contactListOutputDTO.phone1"\r\n                        [disabled]="isReadOpenMode"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".mobilePhone" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [(ngModel)]="contactListOutputDTO.phone2"\r\n                        [disabled]="isReadOpenMode"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".eMail" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [(ngModel)]="contactListOutputDTO.email"\r\n                        [disabled]="isReadOpenMode"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".address" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <textarea\r\n                        class="aw-textarea"\r\n                        [rows]="3"\r\n                        pInputTextarea\r\n                        [disabled]="isReadOpenMode"\r\n                        [(ngModel)]="contactListOutputDTO.address"\r\n                      ></textarea>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".town" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="isReadOpenMode"\r\n                        [(ngModel)]="contactListOutputDTO.town"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".country" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="isReadOpenMode"\r\n                        [(ngModel)]="contactListOutputDTO.country"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".fax" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [(ngModel)]="contactListOutputDTO.fax"\r\n                        [disabled]="isReadOpenMode"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-search-customer\r\n  *ngIf="showCustomerDialog"\r\n  [(display)]="showCustomerDialog"\r\n  [customer-code]="contactListOutputDTO.customerCode"\r\n  (onSelected)="onSelectedCustomer($event)"\r\n></aw-dialog-search-customer>\r\n<aw-dialog-status\r\n  *ngIf="showStatusUpdatesPopup"\r\n  [isStatusEditable]="false"\r\n  [item]="contactListOutputDTO"\r\n  [itemId]="contactListOutputDTO.contactName"\r\n  [(display)]="showStatusUpdatesPopup"\r\n></aw-dialog-status>\r\n';

        /***/
      },

    /***/ './src/app/main/administration/contact/form/contact-form.component.ts':
      /*!****************************************************************************!*\
  !*** ./src/app/main/administration/contact/form/contact-form.component.ts ***!
  \****************************************************************************/
      /*! exports provided: ContactFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ContactFormComponent', function() {
          return ContactFormComponent;
        });
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
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _search_contact_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../search/contact-search.service */ './src/app/main/administration/contact/search/contact-search.service.ts'
        );
        /* harmony import */ var _contact_form_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./contact-form.service */ './src/app/main/administration/contact/form/contact-form.service.ts'
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

        var ContactFormComponent = /** @class */ (function(_super) {
          __extends(ContactFormComponent, _super);
          function ContactFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            contactFormService,
            contactSearchService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.contactFormService = contactFormService;
            _this.contactSearchService = contactSearchService;
            // Historic popup
            _this.showStatusUpdatesPopup = false;
            _this.contactListOutputDTO = {};
            _this.showCustomerDialog = false;
            return _this;
          }
          ContactFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
              .ADM_CONTACT_FORM;
          };
          ContactFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            if (!!this.componentData) {
              this.updateOpenMode(this.componentData.openMode);
              var context = !!this.componentData.objectId
                ? this.serializationService.deserialize(this.componentData.objectId).contactName
                : 'tab.createMode';
              this.displayComponentContext(context, this.isCreateOpenMode);
              this.loadContact();
            }
          };
          ContactFormComponent.prototype.openCustomerDialog = function() {
            if (this.isCreateOpenMode) {
              this.showCustomerDialog = true;
            } else {
              this.showCustomerDialog = false;
            }
          };
          /** Loading contact info */
          ContactFormComponent.prototype.loadContact = function() {
            var _this = this;
            if (!!this.componentData && !!this.componentData.objectId) {
              var contactListOutput = this.serializationService.deserialize(this.componentData.objectId);
              var bidoContactDTO = {
                customerCode: contactListOutput.customerCode,
                contactName: contactListOutput.contactName
              };
              this.contactSearchService.findBidoContactBySearchCriteria(bidoContactDTO).subscribe(function(result) {
                _this.contactListOutputDTO = result[0].bidoContactDTO;
              });
            }
          };
          /** Edit Contact */
          ContactFormComponent.prototype.editContact = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write
            );
          };
          ContactFormComponent.prototype.init = function() {
            this.contactListOutputDTO = {};
            this.businessPartnerName = undefined;
          };
          /** Refresh Screen */
          ContactFormComponent.prototype.reloadContact = function() {
            var _this = this;
            var bidoContactDTO = {
              customerCode: this.contactListOutputDTO.customerCode,
              contactName: this.contactListOutputDTO.contactName
            };
            this.contactSearchService.findBidoContactBySearchCriteria(bidoContactDTO).subscribe(function(result) {
              _this.contactListOutputDTO = result[0].bidoContactDTO;
            });
          };
          /** Cancel Changes */
          ContactFormComponent.prototype.cancelContact = function() {
            if (this.isWriteOpenMode) {
              this.updateOpenMode(
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read
              );
              this.reloadContact();
            } else {
              this.init();
            }
          };
          /** Saving Contact */
          ContactFormComponent.prototype.saveContact = function() {
            var _this = this;
            if (this.validateContact()) {
              var isUpdate_1 =
                !!this.componentData &&
                this.componentData.openMode ===
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Create
                  ? ''
                  : 'update';
              // TODO getting blank DTO
              var contactDTO = {
                address: '',
                businessPartner: '',
                contactName: '',
                country: '',
                customerCode: '',
                email: '',
                fax: '',
                firstName: '',
                lastName: '',
                phone1: '',
                phone2: '',
                primaryContact: false,
                statusDate: new Date(),
                statusState: '',
                statusUser: '',
                title: '',
                town: ''
              };
              for (var p in this.contactListOutputDTO) {
                // tslint:disable-next-line:prefer-conditional-expression
                if (this.contactListOutputDTO.hasOwnProperty(p)) {
                  if (p === 'email') {
                    contactDTO[p] = this.contactListOutputDTO[p];
                    contactDTO[p] = contactDTO.email;
                  } else {
                    contactDTO[p] = this.contactListOutputDTO[p];
                  }
                }
              }
              var saveContactInput = {
                bidoContactDTO: contactDTO,
                isForUpdate: isUpdate_1
              };
              this.showSaveSpinner = true;
              this.contactFormService.saveContact(saveContactInput).subscribe(function(result) {
                var messageKey = 'successOnUpdateContact';
                if (!!_this.componentData && isUpdate_1 === '') {
                  messageKey = 'successOnSaveContact';
                  var bidoContactDTO = {
                    customerCode: _this.contactListOutputDTO.customerCode,
                    contactName: _this.contactListOutputDTO.firstName + ' ' + _this.contactListOutputDTO.lastName
                  };
                  _this.componentData.objectId = _this.serializationService.serialize(bidoContactDTO);
                  _this.componentData.openMode =
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read;
                }
                _this.messageService.showSuccessMessage(_this.getTranslateKey(messageKey));
                _this.ngOnInit();
                _this.showSaveSpinner = false;
              });
            } else {
              this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
              this.showSaveSpinner = false;
              return;
            }
          };
          /** Validate Contact Form */
          ContactFormComponent.prototype.validateContact = function() {
            if (
              !this.contactListOutputDTO.firstName ||
              !this.contactListOutputDTO.lastName ||
              !this.contactListOutputDTO.customerCode
            ) {
              return false;
            } else {
              return true;
            }
          };
          /** On selecting business partner */
          ContactFormComponent.prototype.onSelectedCustomer = function(event) {
            this.contactListOutputDTO.customerCode = event.customerCode;
            this.businessPartnerName = event.customerName;
          };
          ContactFormComponent.prototype.openStatusUpdatesPopup = function() {
            this.showStatusUpdatesPopup = true;
          };
          ContactFormComponent.prototype.resetCustomerCode = function() {
            this.contactListOutputDTO.customerCode = '';
            this.businessPartnerName = undefined;
          };
          ContactFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-contact-form',
                template: __webpack_require__(
                  /*! ./contact-form.component.html */ './src/app/main/administration/contact/form/contact-form.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_7__['TabService'],
                _contact_form_service__WEBPACK_IMPORTED_MODULE_10__['ContactFormService'],
                _search_contact_search_service__WEBPACK_IMPORTED_MODULE_9__['ContactSearchService']
              ])
            ],
            ContactFormComponent
          );
          return ContactFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_8__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/administration/contact/form/contact-form.service.ts':
      /*!**************************************************************************!*\
  !*** ./src/app/main/administration/contact/form/contact-form.service.ts ***!
  \**************************************************************************/
      /*! exports provided: ContactFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ContactFormService', function() {
          return ContactFormService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
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

        var ContactFormService = /** @class */ (function(_super) {
          __extends(ContactFormService, _super);
          function ContactFormService(http, appConfigService, fleetManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.fleetManagementApi = fleetManagementApi;
            return _this;
          }
          ContactFormService.prototype.saveContact = function(saveContactInput) {
            return _super.prototype.post.call(this, this.fleetManagementApi.saveContact, saveContactInput);
          };
          ContactFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__['FleetManagementApi']
              ])
            ],
            ContactFormService
          );
          return ContactFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/administration/contact/search/contact-search.component.html':
      /*!**********************************************************************************!*\
  !*** ./src/app/main/administration/contact/search/contact-search.component.html ***!
  \**********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ "page.searchPage" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button type="button" mat-raised-button (click)="openNewContact()" *ngIf="hasUpdateAccessRight">\r\n      {{ "global.create" | translate }}\r\n    </button>\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row search-criteria-header">\r\n                  <aw-manage-search-criteria\r\n                    [componentId]="CONTACT_SEARCH_CRITERIA_ID"\r\n                    (onSelected)="loadSearchCriteria($event)"\r\n                    (onSavedAsked)="saveSearchCriteriaAsked()"\r\n                    [objectFromPage]="criteriaToSave"\r\n                  ></aw-manage-search-criteria>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".businessPartner" | translate }} </label>\r\n                    <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n                      <div class="form-control-data" (click)="openCustomerDialog()">\r\n                        {{ bidoCustomerDTO.customerCode }}\r\n                        <span *ngIf="bidoCustomerDTO.customerName">({{ bidoCustomerDTO.customerName }})</span>\r\n                      </div>\r\n\r\n                      <div *ngIf="bidoCustomerDTO.customerCode" class="btn-clear-wrapper">\r\n                        <i\r\n                          class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                          aria-hidden="true"\r\n                          (click)="resetCustomer()"\r\n                        ></i>\r\n                      </div>\r\n                      <div class="btn-search-wrapper">\r\n                        <i\r\n                          class="fa fa-fw fa-search aw-icon btn-search"\r\n                          aria-hidden="true"\r\n                          (click)="openCustomerDialog()"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group" style="width: 20%">\r\n                    <label class="form-label"> {{ componentData.componentId + ".contactName" | translate }} </label>\r\n\r\n                    <div class="form-control"><input type="text" class="aw-input" [(ngModel)]="contactName" /></div>\r\n                  </div>\r\n                </div>\r\n                <div class="row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <button\r\n                      type="button"\r\n                      mat-raised-button\r\n                      class="btn-with-spinner"\r\n                      color="primary"\r\n                      (click)="search()"\r\n                      appKeyPress\r\n                      [keyCode]="\'Enter\'"\r\n                      (keyPress)="search()"\r\n                    >\r\n                      <span *ngIf="isLoading" class="lds-hourglass"></span>\r\n                      {{ "global.toSearch" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <!-- Contacts table -->\r\n\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ "global.results" | translate }}\r\n                  ({{ contactTableDataSource ? contactTableDataSource.dataCount : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <a-table [dataSource]="contactTableDataSource">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    *ngIf="hasManageAccessRight && contactTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    color="warn"\r\n                    (click)="deleteContacts()"\r\n                  >\r\n                    {{ "global.delete" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf="contactTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="openSelectedContacts()"\r\n                  >\r\n                    {{ "global.open" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-search-customer\r\n  *ngIf="showCustomerDialog"\r\n  [(display)]="showCustomerDialog"\r\n  [customer-code]="bidoCustomerDTO.customerCode"\r\n  (onSelected)="onSelectedCustomer($event)"\r\n></aw-dialog-search-customer>\r\n';

        /***/
      },

    /***/ './src/app/main/administration/contact/search/contact-search.component.ts':
      /*!********************************************************************************!*\
  !*** ./src/app/main/administration/contact/search/contact-search.component.ts ***!
  \********************************************************************************/
      /*! exports provided: ContactSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ContactSearchComponent', function() {
          return ContactSearchComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
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
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _contact_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./contact-search.service */ './src/app/main/administration/contact/search/contact-search.service.ts'
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

        var ContactSearchComponent = /** @class */ (function(_super) {
          __extends(ContactSearchComponent, _super);
          function ContactSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            contactSearchService,
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
            _this.contactSearchService = contactSearchService;
            _this.confirmationService = confirmationService;
            _this.CONTACT_SEARCH_CRITERIA_ID =
              _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__['AppConstants'].CONTACT_SEARCH_CRITERIA_ID;
            _this.showCustomerDialog = false;
            _this.initContactTableDataSource();
            return _this;
          }
          ContactSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
              .ADM_CONTACT_SEARCH;
          };
          ContactSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.bidoCustomerDTO = {};
            this.isLoading = false;
            this.displayComponentContext('global.search', true);
          };
          ContactSearchComponent.prototype.initContactTableDataSource = function() {
            this.contactTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'businessPartner',
                  translateKey: this.getTranslateKey('businessPartner')
                },
                {
                  field: 'contactName',
                  translateKey: this.getTranslateKey('contactName')
                },
                {
                  field: 'title',
                  translateKey: this.getTranslateKey('title')
                },
                {
                  field: 'phone1',
                  translateKey: this.getTranslateKey('phone1')
                },
                {
                  field: 'phone2',
                  translateKey: this.getTranslateKey('phone2')
                }
              ],
              data: []
            });
          };
          ContactSearchComponent.prototype.loadSearchCriteria = function(event) {
            var criteria = event.criteria;
            if (!criteria) {
              this.resetSearchCriteria();
              return;
            }
            this.criteriaName = event.name;
            this.bidoCustomerDTO.customerCode = criteria.customerCode;
            this.contactName = criteria.customerName;
          };
          ContactSearchComponent.prototype.saveSearchCriteriaAsked = function() {
            var criteriaToSave = {
              customerCode: this.bidoCustomerDTO.customerCode,
              customerName: this.contactName
            };
            this.criteriaToSave = criteriaToSave;
          };
          /** Resetting Search Filters */
          ContactSearchComponent.prototype.resetSearchCriteria = function() {
            this.bidoCustomerDTO = {};
            this.contactName = '';
          };
          ContactSearchComponent.prototype.openCustomerDialog = function() {
            this.showCustomerDialog = true;
          };
          /** Getting Selected Business Partner */
          ContactSearchComponent.prototype.onSelectedCustomer = function(event) {
            this.bidoCustomerDTO = event;
          };
          /** Search Contact By Criteria */
          ContactSearchComponent.prototype.search = function() {
            var _this = this;
            this.isLoading = true;
            _super.prototype.scrollToAnchor.call(this, this.resultsContainerAnchor);
            this.contactTableDataSource.setData([]);
            var bidoContactDTO = {
              customerCode: this.bidoCustomerDTO.customerCode,
              contactName: this.contactName
            };
            this.contactSearchService.findBidoContactBySearchCriteria(bidoContactDTO).subscribe(function(result) {
              _this.isLoading = false;
              _this.renderContactTable(result);
              _this.contactTableDataSource.dataSelection = [];
            });
          };
          /** Filling contact table */
          ContactSearchComponent.prototype.renderContactTable = function(result) {
            var contactListDTO = [];
            result.forEach(function(results) {
              results.bidoContactDTO.businessPartner = results.businessPartner;
              contactListDTO.push(results.bidoContactDTO);
            });
            this.contactTableDataSource.setData(contactListDTO);
            this.contactTableDataSource.update();
          };
          /** Create Event */
          ContactSearchComponent.prototype.openNewContact = function() {
            this.openContacts(
              undefined,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Create
            );
          };
          /** Open Selected Contact */
          ContactSearchComponent.prototype.openContacts = function(objectId, openMode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
                  .ADM_CONTACT_FORM,
              openMode: openMode
            };
            if (!!objectId) {
              data.objectId = this.serializationService.serialize(objectId);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /** Open Contacts per screen */
          ContactSearchComponent.prototype.openSelectedContacts = function() {
            var _this = this;
            this.contactTableDataSource.dataSelection.forEach(function(contact) {
              if (!!contact) {
                _this.openContacts(
                  contact,
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Read
                );
              }
            });
          };
          /** Delete selected contacts */
          ContactSearchComponent.prototype.deleteContacts = function() {
            var _this = this;
            var confirmMessageKey =
              this.contactTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedContact'
                : 'confirmDeleteSelectedContacts';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(confirmMessageKey),
              accept: function() {
                var bidoContactDTOId = [];
                _this.contactTableDataSource.dataSelection.forEach(function(results) {
                  if (!!results.contactName) {
                    var bidoContact = {
                      contactName: results.contactName
                    };
                    bidoContactDTOId.push(bidoContact);
                  } else {
                    _super.prototype.throwUnboundLocalError.call(_this, 'deleteContacts', 'results.contactName');
                  }
                });
                _this.contactSearchService.deleteContacts(bidoContactDTOId).subscribe(function(result) {
                  _this.search();
                  _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteContact'));
                });
                _this.contactTableDataSource.dataSelection = [];
              }
            });
          };
          /** Reset Table filter */
          ContactSearchComponent.prototype.resetFilter = function() {
            this.filterTxt = undefined;
          };
          ContactSearchComponent.prototype.resetCustomer = function() {
            this.bidoCustomerDTO = {};
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('resultsContainerAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ContactSearchComponent.prototype,
            'resultsContainerAnchor',
            void 0
          );
          ContactSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-contact-search',
                template: __webpack_require__(
                  /*! ./contact-search.component.html */ './src/app/main/administration/contact/search/contact-search.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__['TabService'],
                _contact_search_service__WEBPACK_IMPORTED_MODULE_12__['ContactSearchService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__['ConfirmationService']
              ])
            ],
            ContactSearchComponent
          );
          return ContactSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_11__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/administration/contact/search/contact-search.service.ts':
      /*!******************************************************************************!*\
  !*** ./src/app/main/administration/contact/search/contact-search.service.ts ***!
  \******************************************************************************/
      /*! exports provided: ContactSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ContactSearchService', function() {
          return ContactSearchService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
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

        var ContactSearchService = /** @class */ (function(_super) {
          __extends(ContactSearchService, _super);
          function ContactSearchService(http, appConfigService, fleetManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.fleetManagementApi = fleetManagementApi;
            return _this;
          }
          ContactSearchService.prototype.findBidoContactBySearchCriteria = function(criteria) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoContactBySearchCriteria, criteria);
          };
          ContactSearchService.prototype.deleteContacts = function(criteria) {
            return _super.prototype.post.call(this, this.fleetManagementApi.removeBidoContact, criteria);
          };
          ContactSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__['FleetManagementApi']
              ])
            ],
            ContactSearchService
          );
          return ContactSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-status/dialog-status.component.html':
      /*!******************************************************************************!*\
  !*** ./src/app/shared/components/dialog-status/dialog-status.component.html ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".statusState" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          [options]="statusList"\r\n          [(ngModel)]="item.statusState"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n          [disabled]="!isStatusEditable"\r\n          appendTo="body"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".statusDate" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-calendar\r\n          showButtonBar="true"\r\n          [monthNavigator]="true"\r\n          [yearNavigator]="true"\r\n          [yearRange]="sessionService.calendarYearRange"\r\n          class="aw-calendar"\r\n          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n          [locale]="sessionService.calendarFormat"\r\n          [(ngModel)]="item.statusDate"\r\n          [disabled]="true"\r\n          [showTime]="true"\r\n          appendTo="body"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".statusUser" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <input class="aw-input" type="text" [(ngModel)]="item.statusUser" [disabled]="true" />\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">{{ "global.close" | translate }}</button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/dialog-status/dialog-status.component.ts':
      /*!****************************************************************************!*\
  !*** ./src/app/shared/components/dialog-status/dialog-status.component.ts ***!
  \****************************************************************************/
      /*! exports provided: DialogStatusComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DialogStatusComponent', function() {
          return DialogStatusComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../services/session.service */ './src/app/shared/services/session.service.ts'
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

        var DialogStatusComponent = /** @class */ (function(_super) {
          __extends(DialogStatusComponent, _super);
          function DialogStatusComponent(sessionService, propertiesService, messageService) {
            var _this =
              _super.call(
                this,
                _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'DialogStatusComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.propertiesService = propertiesService;
            _this.messageService = messageService;
            return _this;
          }
          DialogStatusComponent.prototype.ngOnInit = function() {
            this.loadStatusList();
          };
          DialogStatusComponent.prototype.close = function() {
            this.display = false;
          };
          DialogStatusComponent.prototype.loadStatusList = function() {
            var _this = this;
            var statusState = 'statusState';
            this.propertiesService
              .getObjectStatusList(
                this.isObjectTypeOfBireSbDTO,
                this.isObjectTypeOfBireEvolutionDTO,
                this.isObjectTypeOfBireMaintenancePlanDTO,
                this.item[statusState],
                this.isSapSession
              )
              .subscribe(
                function(result) {
                  _this.statusList = result;
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLoadStatusList'));
                }
              );
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogStatusComponent.prototype,
            'item',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogStatusComponent.prototype,
            'itemId',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('isStatusEditable'),
              __metadata('design:type', Boolean)
            ],
            DialogStatusComponent.prototype,
            'isStatusEditable',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('isObjectTypeOfBireSbDTO'),
              __metadata('design:type', Boolean)
            ],
            DialogStatusComponent.prototype,
            'isObjectTypeOfBireSbDTO',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('isObjectTypeOfBireEvolutionDTO'),
              __metadata('design:type', Boolean)
            ],
            DialogStatusComponent.prototype,
            'isObjectTypeOfBireEvolutionDTO',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('isObjectTypeOfBireMaintenancePlanDTO'),
              __metadata('design:type', Boolean)
            ],
            DialogStatusComponent.prototype,
            'isObjectTypeOfBireMaintenancePlanDTO',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('isSapSession'),
              __metadata('design:type', Boolean)
            ],
            DialogStatusComponent.prototype,
            'isSapSession',
            void 0
          );
          DialogStatusComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-status',
                template: __webpack_require__(
                  /*! ./dialog-status.component.html */ './src/app/shared/components/dialog-status/dialog-status.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _services_session_service__WEBPACK_IMPORTED_MODULE_5__['SessionService'],
                _services_properties_service__WEBPACK_IMPORTED_MODULE_4__['PropertiesService'],
                _services_message_service__WEBPACK_IMPORTED_MODULE_3__['MessageService']
              ])
            ],
            DialogStatusComponent
          );
          return DialogStatusComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__['DialogComponent']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-status/dialog-status.module.ts':
      /*!*************************************************************************!*\
  !*** ./src/app/shared/components/dialog-status/dialog-status.module.ts ***!
  \*************************************************************************/
      /*! exports provided: DialogStatusModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DialogStatusModule', function() {
          return DialogStatusModule;
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
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dialog_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./dialog-status.component */ './src/app/shared/components/dialog-status/dialog-status.component.ts'
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
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__['DropdownModule']
        ];
        var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__['ModalModule']];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [_dialog_status_component__WEBPACK_IMPORTED_MODULE_7__['DialogStatusComponent']];
        var DialogStatusModule = /** @class */ (function() {
          function DialogStatusModule() {}
          DialogStatusModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS),
                exports: __spread(COMPONENTS),
                imports: __spread(
                  [
                    _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__['AngularCommonSharedModule'],
                    _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__['AppCommonSharedModule']
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                )
              })
            ],
            DialogStatusModule
          );
          return DialogStatusModule;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=administration-contact-contact-module.js.map
