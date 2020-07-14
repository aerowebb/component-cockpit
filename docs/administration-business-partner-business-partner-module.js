(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['administration-business-partner-business-partner-module'],
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

    /***/ './src/app/main/administration/business-partner/business-partner.module.ts':
      /*!*********************************************************************************!*\
  !*** ./src/app/main/administration/business-partner/business-partner.module.ts ***!
  \*********************************************************************************/
      /*! exports provided: BusinessPartnerModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'BusinessPartnerModule', function() {
          return BusinessPartnerModule;
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
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ './src/app/shared/components/component-sidebar/component-sidebar.mdule.ts'
        );
        /* harmony import */ var _shared_components_dialog_status_dialog_status_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/components/dialog-status/dialog-status.module */ './src/app/shared/components/dialog-status/dialog-status.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/components/dialog-table/dialog-table.module */ './src/app/shared/components/dialog-table/dialog-table.module.ts'
        );
        /* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/components/dynamic-attributes/dynamic-attributes.module */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts'
        );
        /* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ './src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _form_business_partner_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./form/business-partner-form.component */ './src/app/main/administration/business-partner/form/business-partner-form.component.ts'
        );
        /* harmony import */ var _form_business_partner_form_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./form/business-partner-form.service */ './src/app/main/administration/business-partner/form/business-partner-form.service.ts'
        );
        /* harmony import */ var _form_dialog_business_partner_bido_document_dialog_business_partner_bido_document_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./form/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component */ './src/app/main/administration/business-partner/form/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component.ts'
        );
        /* harmony import */ var _form_dialog_business_partner_cus_customer_dialog_business_partner_cus_customer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./form/dialog-business-partner-cus-customer/dialog-business-partner-cus-customer.component */ './src/app/main/administration/business-partner/form/dialog-business-partner-cus-customer/dialog-business-partner-cus-customer.component.ts'
        );
        /* harmony import */ var _form_dialog_business_partner_customer_evolution_dialog_business_partner_customer_evolution_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./form/dialog-business-partner-customer-evolution/dialog-business-partner-customer-evolution.component */ './src/app/main/administration/business-partner/form/dialog-business-partner-customer-evolution/dialog-business-partner-customer-evolution.component.ts'
        );
        /* harmony import */ var _search_business_partner_search_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./search/business-partner-search.component */ './src/app/main/administration/business-partner/search/business-partner-search.component.ts'
        );
        /* harmony import */ var _search_business_partner_search_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./search/business-partner-search.service */ './src/app/main/administration/business-partner/search/business-partner-search.service.ts'
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
          primeng_table__WEBPACK_IMPORTED_MODULE_6__['TableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__['TooltipModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_11__[
            'ComponentSidebarModule'
          ],
          _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_13__['DialogTableModule'],
          _shared_components_dialog_status_dialog_status_module__WEBPACK_IMPORTED_MODULE_12__['DialogStatusModule'],
          _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_14__[
            'DynamicAttributesModule'
          ],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_16__['ModalModule'],
          _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_17__['TableModule']
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _form_dialog_business_partner_bido_document_dialog_business_partner_bido_document_component__WEBPACK_IMPORTED_MODULE_21__[
            'DialogBusinessPartnerBidoDocumentComponent'
          ],
          _form_dialog_business_partner_cus_customer_dialog_business_partner_cus_customer_component__WEBPACK_IMPORTED_MODULE_22__[
            'DialogBusinessPartnerCusCustomerComponent'
          ],
          _form_dialog_business_partner_customer_evolution_dialog_business_partner_customer_evolution_component__WEBPACK_IMPORTED_MODULE_23__[
            'DialogBusinessPartnerCustomerEvolutionComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [
          _form_business_partner_form_component__WEBPACK_IMPORTED_MODULE_19__['BusinessPartnerFormComponent'],
          _search_business_partner_search_component__WEBPACK_IMPORTED_MODULE_24__['BusinessPartnerSearchComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _form_business_partner_form_service__WEBPACK_IMPORTED_MODULE_20__['BusinessPartnerFormService'],
          _search_business_partner_search_service__WEBPACK_IMPORTED_MODULE_25__['BusinessPartnerSearchService']
        ];
        var BusinessPartnerModule = /** @class */ (function() {
          function BusinessPartnerModule() {}
          BusinessPartnerModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_9__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_10__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_18__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS),
                    _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_15__[
                      'ManageSearchCriteriaModule'
                    ]
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            BusinessPartnerModule
          );
          return BusinessPartnerModule;
        })();

        /***/
      },

    /***/ './src/app/main/administration/business-partner/form/business-partner-form.component.html':
      /*!************************************************************************************************!*\
  !*** ./src/app/main/administration/business-partner/form/business-partner-form.component.html ***!
  \************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle" *ngIf="!isCreateOpenMode && componentData && componentData.objectId">\r\n          - {{ serializationService.deserialize(componentData.objectId)["customerCode"] }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      *ngIf="isReadOpenMode && hasUpdateAccessRight"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="editBusinessPartner()"\r\n    >\r\n      {{ "global.edit" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode && !isCreateOpenMode"\r\n      type="button"\r\n      color="warn"\r\n      mat-raised-button\r\n      (click)="cancelBusinessPartner()"\r\n    >\r\n      {{ "global.cancel" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      class="btn-with-spinner"\r\n      color="primary"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="saveBusinessPartner()"\r\n    >\r\n      <span class="lds-hourglass" *ngIf="showSaveSpinner"></span>\r\n      {{ "global.save" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item (click)="reloadBusinessPartner()">{{ "global.refresh" | translate }}</button>\r\n      <button mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div #page class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <mat-tab-group animationDuration="0ms" dynamicHeight>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ "home" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ "page.mainData" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div class="row">\r\n                    <div id="code" class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                      <label class="form-label">\r\n                        {{ "global.code" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [(ngModel)]="businessPartner.customerCode"\r\n                          [disabled]="isReadOpenMode || !isCreateOpenMode"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div id="name" class="form-group">\r\n                      <label class="form-label">\r\n                        {{ "global.name" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [(ngModel)]="businessPartner.customerName"\r\n                          [disabled]="isReadOpenMode"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div id="comments" class="form-group flex--2">\r\n                      <label class="form-label">\r\n                        {{ "global.comments" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <textarea\r\n                          class="aw-textarea"\r\n                          [rows]="3"\r\n                          pInputTextarea\r\n                          [(ngModel)]="businessPartner.comments"\r\n                          [disabled]="isReadOpenMode"\r\n                        ></textarea>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div id="icaoCode" class="form-group">\r\n                      <label class="form-label">\r\n                        {{ "global.icaoCode" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          [options]="icaoCodes"\r\n                          [(ngModel)]="businessPartner.icaoCode"\r\n                          [showClear]="true"\r\n                          placeholder="&nbsp;"\r\n                          [disabled]="isReadOpenMode"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                    <div id="isOwner" class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".isOwner" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="businessPartner.isOwner"\r\n                          [disabled]="isReadOpenMode"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div id="isOperator" class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".isOperator" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [(ngModel)]="businessPartner.isOperator"\r\n                          [disabled]="isReadOpenMode"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="row">\r\n                    <div id="website" class="form-group">\r\n                      <label class="form-label">\r\n                        {{ "global.website" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [(ngModel)]="businessPartner.webSite"\r\n                          [disabled]="isReadOpenMode"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div id="phone1" class="form-group">\r\n                      <label class="form-label">\r\n                        {{ "global.phone1" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [(ngModel)]="businessPartner.phone1"\r\n                          [disabled]="isReadOpenMode"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div id="phone2" class="form-group">\r\n                      <label class="form-label">\r\n                        {{ "global.phone2" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [(ngModel)]="businessPartner.phone2"\r\n                          [disabled]="isReadOpenMode"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div id="fax" class="form-group">\r\n                      <label class="form-label">\r\n                        {{ "global.fax" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [(ngModel)]="businessPartner.fax"\r\n                          [disabled]="isReadOpenMode"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div id="email" class="form-group">\r\n                      <label class="form-label">\r\n                        {{ "global.email" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [(ngModel)]="businessPartner.email"\r\n                          [disabled]="isReadOpenMode"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div id="otherType" class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".otherType" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          [options]="customerTypes"\r\n                          [(ngModel)]="businessPartner.customerType"\r\n                          [showClear]="true"\r\n                          placeholder="&nbsp;"\r\n                          [disabled]="isReadOpenMode"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ "global.airport" | translate }}/{{ "global.base" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div class="section">\r\n                    <div class="section-content">\r\n                      <div class="row">\r\n                        <div id="airportName" class="form-group">\r\n                          <label class="form-label">\r\n                            {{ "global.name" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="businessPartner.airport"\r\n                              [disabled]="isReadOpenMode"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="address" class="form-group flex--2">\r\n                          <label class="form-label">\r\n                            {{ "global.address" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <textarea\r\n                              class="aw-textarea"\r\n                              [rows]="3"\r\n                              pInputTextarea\r\n                              [(ngModel)]="businessPartner.address"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></textarea>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="town" class="form-group">\r\n                          <label class="form-label">\r\n                            {{ "global.town" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="businessPartner.town"\r\n                              [disabled]="isReadOpenMode"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="zone" class="form-group">\r\n                          <label class="form-label">\r\n                            {{ "global.zone" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <p-dropdown\r\n                              class="aw-dropdown fixed-width"\r\n                              [options]="zones"\r\n                              [(ngModel)]="businessPartner.zone"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              [disabled]="isReadOpenMode"\r\n                              (onChange)="updateCountries()"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="country" class="form-group">\r\n                          <label class="form-label">\r\n                            {{ "global.country" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <p-dropdown\r\n                              class="aw-dropdown fixed-width"\r\n                              [options]="countries"\r\n                              [(ngModel)]="businessPartner.country"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="airportIcaoCode" class="form-group">\r\n                          <label class="form-label">\r\n                            {{ "global.icaoCode" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <p-dropdown\r\n                              class="aw-dropdown fixed-width"\r\n                              [options]="icaoCodes"\r\n                              [(ngModel)]="businessPartner.airportIcaoCode"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ getComponentName() + ".activity" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div class="section">\r\n                    <div class="section-content"></div>\r\n                  </div>\r\n\r\n                  <aw-dynamic-attributes\r\n                    id="dynamicAttributes"\r\n                    [attributes]="dynamicAttributes"\r\n                    [workflowControls]="userWorkflow ? userWorkflow.listControlByIdentifier : []"\r\n                    [isReadOpenMode]="isReadOpenMode"\r\n                  >\r\n                  </aw-dynamic-attributes>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ "global.general" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <div class="grid-cell--6">\r\n              <!-- Customers list table -->\r\n\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".associatedBusinessPartner" | translate }}\r\n                      ({{ customerTableDataSource ? customerTableDataSource.dataCount : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <a-table [dataSource]="customerTableDataSource">\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && customerTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        color="warn"\r\n                        (click)="deleteCusCustomers()"\r\n                      >\r\n                        {{ "global.delete" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && customerTableDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="editCusCustomer()"\r\n                      >\r\n                        {{ "global.edit" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="customerTableDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="openCusCustomer()"\r\n                      >\r\n                        {{ "global.open" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && !customerTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="createCusCustomer()"\r\n                      >\r\n                        {{ "global.add" | translate }}\r\n                      </button>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell--6">\r\n              <!-- Contacts list table -->\r\n\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".listContacts" | translate }}\r\n                      ({{ contactTableDataSource ? contactTableDataSource.dataCount : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <a-table [dataSource]="contactTableDataSource">\r\n                    <ng-template columnDef="primaryContact" let-rowData="rowData">\r\n                      <div class="ui-g-12">\r\n                        <p-checkbox [(ngModel)]="rowData.primaryContact" [disabled]="isReadOpenMode" binary="true">\r\n                        </p-checkbox>\r\n                      </div>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="grid-row">\r\n            <div class="grid-cell--6">\r\n              <!-- Customer evolutions table -->\r\n\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".customizedEvolutionsCompliance" | translate }}\r\n                      ({{ customerEvolutionTableDataSource ? customerEvolutionTableDataSource.dataCount : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <a-table [dataSource]="customerEvolutionTableDataSource">\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && customerEvolutionTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        color="warn"\r\n                        (click)="deleteCustomerEvolutions()"\r\n                      >\r\n                        {{ "global.delete" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && customerEvolutionTableDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="editCustomerEvolution()"\r\n                      >\r\n                        {{ "global.edit" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="customerEvolutionTableDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="openCustomerEvolution()"\r\n                      >\r\n                        {{ "global.open" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && !customerEvolutionTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="createCustomerEvolution()"\r\n                      >\r\n                        {{ "global.add" | translate }}\r\n                      </button>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- New documents table -->\r\n\r\n            <div class="grid-cell--6">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ "global.documents" | translate }}\r\n                      ({{ documentTableDataSource ? documentTableDataSource.dataCount : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <a-table [dataSource]="documentTableDataSource">\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf="documentTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="downloadFiles()"\r\n                      >\r\n                        {{ "global.download" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && documentTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        color="warn"\r\n                        (click)="deleteDocuments()"\r\n                      >\r\n                        {{ "global.delete" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && documentTableDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="editDocument()"\r\n                      >\r\n                        {{ "global.edit" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="documentTableDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="openDocument()"\r\n                      >\r\n                        {{ "global.open" | translate }}\r\n                      </button>\r\n\r\n                      <p-fileUpload\r\n                        #fileUploader\r\n                        *ngIf="!isReadOpenMode && !documentTableDataSource.hasDataSelection"\r\n                        mode="basic"\r\n                        name="document[]"\r\n                        (uploadHandler)="uploadDocument($event, fileUploader)"\r\n                        chooseLabel="{{ \'global.upload\' | translate }}"\r\n                        customUpload="true"\r\n                        auto="true"\r\n                      >\r\n                      </p-fileUpload>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-dialog-business-partner-cus-customer\r\n    *ngIf="showCusCustomerDialog"\r\n    [(display)]="showCusCustomerDialog"\r\n    [cusCustomer]="currentCusCustomer"\r\n    [openMode]="cusCustomerDialogOpenMode"\r\n    (onValidated)="onAddCusCustomer($event)"\r\n  >\r\n  </aw-dialog-business-partner-cus-customer>\r\n\r\n  <aw-dialog-business-partner-customer-evolution\r\n    *ngIf="showCustomerEvolutionDialog"\r\n    [(display)]="showCustomerEvolutionDialog"\r\n    [customerEvolution]="currentCustomerEvolution"\r\n    [openMode]="customerEvolutionDialogOpenMode"\r\n    (onValidated)="onAddCustomerEvolution($event)"\r\n  >\r\n  </aw-dialog-business-partner-customer-evolution>\r\n\r\n  <aw-dialog-business-partner-bido-document\r\n    *ngIf="showDocumentDialog"\r\n    [(display)]="showDocumentDialog"\r\n    [document]="currentDocument"\r\n    [openMode]="documentDialogOpenMode"\r\n    [types]="documentTypes"\r\n    (onValidated)="onAddDocument($event)"\r\n  ></aw-dialog-business-partner-bido-document>\r\n  <aw-dialog-status\r\n    *ngIf="showStatusUpdatesPopup"\r\n    [isStatusEditable]="false"\r\n    [item]="businessPartner"\r\n    [itemId]="businessPartner.customerCode"\r\n    [(display)]="showStatusUpdatesPopup"\r\n  ></aw-dialog-status>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/administration/business-partner/form/business-partner-form.component.ts':
      /*!**********************************************************************************************!*\
  !*** ./src/app/main/administration/business-partner/form/business-partner-form.component.ts ***!
  \**********************************************************************************************/
      /*! exports provided: BusinessPartnerFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'BusinessPartnerFormComponent',
          function() {
            return BusinessPartnerFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/components/component-sidebar/page-toc.service */ './src/app/shared/components/component-sidebar/page-toc.service.ts'
        );
        /* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/components/dynamic-attributes/dynamic-attributes.service */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.service.ts'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/constants/bido-attribute-constants */ './src/app/shared/constants/bido-attribute-constants.ts'
        );
        /* harmony import */ var _shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/constants/bido-evolution-constants */ './src/app/shared/constants/bido-evolution-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/constants/lang-constants */ './src/app/shared/constants/lang-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../../shared/utils/dto-utils */ './src/app/shared/utils/dto-utils.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../../shared/utils/select-item-utils */ './src/app/shared/utils/select-item-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _business_partner_form_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./business-partner-form.service */ './src/app/main/administration/business-partner/form/business-partner-form.service.ts'
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

        var BusinessPartnerFormComponent = /** @class */ (function(_super) {
          __extends(BusinessPartnerFormComponent, _super);
          function BusinessPartnerFormComponent(
            favoriteService,
            loaderService,
            messageService,
            pageTocService,
            serializationService,
            tabService,
            translateService,
            businessPartnerFormService,
            confirmationService,
            dateService,
            dynamicAttributesService,
            propertiesService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                pageTocService
              ) || this;
            _this.translateService = translateService;
            _this.businessPartnerFormService = businessPartnerFormService;
            _this.confirmationService = confirmationService;
            _this.dateService = dateService;
            _this.dynamicAttributesService = dynamicAttributesService;
            _this.propertiesService = propertiesService;
            _this.component = BusinessPartnerFormComponent_1;
            _this.tabAttributesId = 'attributes';
            _this.tabDocumentsId = 'documents';
            _this.tabGeneralId = 'general';
            _super.prototype.registerPageTocEntryObservable.call(_this);
            _this.openGeneralTab();
            _this.initContactTableDataSource();
            _this.initCustomerTableDataSource();
            _this.initCustomerEvolutionTableDataSource();
            _this.initDocumentTableDataSource();
            _this.init();
            return _this;
          }
          BusinessPartnerFormComponent_1 = BusinessPartnerFormComponent;
          BusinessPartnerFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__['ComponentConstants']
              .ADM_BUSINESS_PARTNER_FORM;
          };
          BusinessPartnerFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.updateOpenMode(this.componentData.openMode);
            this.setTableOfContent();
            var context = !!this.componentData.objectId
              ? this.serializationService.deserialize(this.componentData.objectId).customerCode
              : 'tab.createMode';
            this.displayComponentContext(context, this.isCreateOpenMode);
            this.loadBusinessPartner();
            this.loadUserWorkflow(undefined);
          };
          BusinessPartnerFormComponent.prototype.cancelBusinessPartner = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read
            );
            this.reloadBusinessPartner();
          };
          BusinessPartnerFormComponent.prototype.downloadFiles = function() {
            this.documentTableDataSource.dataSelection.forEach(function(documentRow) {
              _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_23__['FileUtils'].downloadFile(
                documentRow._obj.docFile,
                documentRow._obj.docName
              );
            });
          };
          BusinessPartnerFormComponent.prototype.editBusinessPartner = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
            );
          };
          BusinessPartnerFormComponent.prototype.reloadBusinessPartner = function() {
            this.init();
            this.loadBusinessPartner();
          };
          BusinessPartnerFormComponent.prototype.saveBusinessPartner = function() {
            var _this = this;
            if (
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].isNullOrEmpty(
                this.businessPartner.customerCode
              )
            ) {
              this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
            } else {
              // Contacts
              this.contactTableDataSource.setData(
                this.contactTableDataSource.dataSrc.map(function(contact) {
                  return _this.fillContact(contact, _this.businessPartner);
                })
              );
              // CusCustomers
              this.cusCustomers = this.cusCustomers.map(function(cusCustomer) {
                return _this.fillCusCustomer(cusCustomer, _this.businessPartner);
              });
              // Customer evolutions
              this.customerEvolutionsAdded = this.customerEvolutionsAdded.map(function(customerEvolution) {
                return _this.fillCustomerEvolution(customerEvolution, _this.businessPartner);
              });
              this.customerEvolutionsRemoved = this.customerEvolutionsRemoved.map(function(customerEvolution) {
                return _this.fillCustomerEvolution(customerEvolution, _this.businessPartner);
              });
              this.customerEvolutionsUpdated = this.customerEvolutionsUpdated.map(function(customerEvolution) {
                return _this.fillCustomerEvolution(customerEvolution, _this.businessPartner);
              });
              // Documents
              this.documentsAdded = this.documentsAdded.map(function(document) {
                return _this.fillDocument(document, _this.businessPartner);
              });
              this.documentsRemoved = this.documentsRemoved.map(function(document) {
                return _this.fillDocument(document, _this.businessPartner);
              });
              this.documentsUpdated = this.documentsUpdated.map(function(document) {
                return _this.fillDocument(document, _this.businessPartner);
              });
              // Dynamic attributes
              if (!!this.businessPartner.customerCode) {
                this.businessPartner.bidoCustomerAttributeDatas = this.dynamicAttributesService.toBidoCustomerAttribute(
                  this.businessPartner.customerCode,
                  this.dynamicAttributes
                );
              }
              var saveBidoCustomerInput = {
                bidoCustomer: this.businessPartner,
                bidoContactList: this.contactTableDataSource.dataSrc,
                bidoCusCustomerList: this.cusCustomers,
                bidoCustomerEvolutionAddedList: this.customerEvolutionsAdded,
                bidoCustomerEvolutionRemovedList: this.customerEvolutionsRemoved,
                bidoCustomerEvolutionUpdatedList: this.customerEvolutionsUpdated,
                bidoDocumentationAddedList: this.documentsAdded,
                bidoDocumentationRemovedList: this.documentsRemoved,
                bidoDocumentationUpdatedList: this.documentsUpdated
              };
              if (this.isCreateOpenMode) {
                this.createBusinessPartner(saveBidoCustomerInput);
              } else {
                this.updateBusinessPartner(saveBidoCustomerInput);
              }
            }
          };
          BusinessPartnerFormComponent.prototype.updateCountries = function() {
            var _this = this;
            this.businessPartner.country = undefined;
            this.propertiesService.getCountriesInZone(this.businessPartner.zone).subscribe(function(results) {
              _this.countries = !!results
                ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_25__['SelectItemUtils'].fromLabelValues(
                    results
                  )
                : [];
            });
          };
          BusinessPartnerFormComponent.prototype.areSameDocument = function(obj1, obj2) {
            if (!obj1 || !obj2) {
              return false;
            } else {
              return !!obj1.docName && !!obj2.docName && obj1.docName === obj2.docName;
            }
          };
          BusinessPartnerFormComponent.prototype.createBusinessPartner = function(saveBidoCustomerInput) {
            var _this = this;
            this.showSaveSpinner = true;
            this.businessPartnerFormService.createBidoCustomer(saveBidoCustomerInput).subscribe(
              function() {
                if (!!_this.businessPartner.customerCode) {
                  var businessPartnerFormId = {
                    customerCode: _this.businessPartner.customerCode
                  };
                  _this.componentData.objectId = _this.serializationService.serialize(businessPartnerFormId);
                  _this.updateOpenMode(
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
                  );
                  _this.displayComponentContext(_this.businessPartner.customerCode, _this.isCreateOpenMode);
                  _this.onSavedBusinessPartner();
                  _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnCreateBusinessPartner'));
                }
                _this.showSaveSpinner = false;
              },
              function(error) {
                _this.showSaveSpinner = false;
              }
            );
          };
          BusinessPartnerFormComponent.prototype.createCusCustomerRow = function(cusCustomer) {
            var cusCustomerRow = {
              customerCode: cusCustomer.customerCode,
              customerLink: this.formatCustomerLink(cusCustomer),
              customerName: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(
                cusCustomer.customerName
              ),
              _obj: cusCustomer
            };
            return cusCustomerRow;
          };
          BusinessPartnerFormComponent.prototype.createCustomerEvolutionRow = function(customerEvolution) {
            var customerEvolutionRow = {
              customerCode: customerEvolution.customerCode,
              customizedCompliance: this.formatCustomizedCompliance(customerEvolution),
              evolutionNumber: customerEvolution.evolutionNumber,
              evolutionRevisionNumber: customerEvolution.evolutionRevisionNumber,
              evolutionType: customerEvolution.evolutionType,
              _obj: customerEvolution
            };
            return customerEvolutionRow;
          };
          BusinessPartnerFormComponent.prototype.createDocumentRow = function(document) {
            var selectedDocumentType = this.documentTypes.find(function(documentType) {
              return !!document.docCategory && documentType.value === document.docCategory;
            });
            var documentRow = {
              docEndOfValidityDate: this.dateService.dateToString(document.docEndOfValidityDate),
              docExtension: this.formatDocExtension(document),
              docName: document.docName,
              docPublicationDate: this.dateService.dateToString(document.docPublicationDate),
              docSize: this.formatDocSize(document),
              docCategory: !!selectedDocumentType
                ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__['StringUtils'].orEmpty(
                    selectedDocumentType.label
                  )
                : '',
              _obj: document
            };
            return documentRow;
          };
          BusinessPartnerFormComponent.prototype.fillContact = function(contact, businessPartner) {
            contact.customerCode = businessPartner.customerCode;
            return contact;
          };
          BusinessPartnerFormComponent.prototype.fillCusCustomer = function(cusCustomer, businessPartner) {
            cusCustomer.bidCustomerCode = businessPartner.customerCode;
            cusCustomer.bidCustomerName = businessPartner.customerName;
            return cusCustomer;
          };
          BusinessPartnerFormComponent.prototype.fillCustomerEvolution = function(customerEvolution, businessPartner) {
            customerEvolution.customerCode = businessPartner.customerCode;
            return customerEvolution;
          };
          BusinessPartnerFormComponent.prototype.fillDocument = function(document, businessPartner) {
            document.customerCode = businessPartner.customerCode;
            return document;
          };
          BusinessPartnerFormComponent.prototype.formatCustomerLink = function(cusCustomer) {
            if (!!cusCustomer.customerLink) {
              var selectedCustomerLink = this.customerLinks.find(function(customerLink) {
                return customerLink.value === cusCustomer.customerLink;
              });
              return !!selectedCustomerLink ? selectedCustomerLink.label : cusCustomer.customerLink;
            } else {
              return '';
            }
          };
          BusinessPartnerFormComponent.prototype.formatCustomizedCompliance = function(customerEvolution) {
            if (!!customerEvolution.customizedCompliance) {
              var selectedCustomizedCompliance = this.customizedCompliances.find(function(customizedCompliance) {
                return customizedCompliance.value === customerEvolution.customizedCompliance;
              });
              return !!selectedCustomizedCompliance
                ? selectedCustomizedCompliance.label
                : customerEvolution.customizedCompliance;
            } else {
              return '';
            }
          };
          BusinessPartnerFormComponent.prototype.formatDocExtension = function(document) {
            return _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_23__['FileUtils']
              .getExtension(document.docName)
              .toUpperCase();
          };
          BusinessPartnerFormComponent.prototype.formatDocSize = function(document) {
            return !!document.docFile
              ? _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_23__['FileUtils'].getFormattedSize(
                  document.docFile.length
                )
              : '';
          };
          BusinessPartnerFormComponent.prototype.getDynamicAttributesObservable = function(attributeCategory) {
            return this.businessPartnerFormService.findBidoAttributesByAttributeCategory(attributeCategory);
          };
          BusinessPartnerFormComponent.prototype.init = function() {
            this.businessPartner = {};
            this.countries = [];
            this.cusCustomers = [];
            this.customerEvolutions = [];
            this.customerEvolutionsAdded = [];
            this.customerEvolutionsRemoved = [];
            this.customerEvolutionsUpdated = [];
            this.customerLinks = [];
            this.customerTypes = [];
            this.customizedCompliances = [];
            this.documentsAdded = [];
            this.documentsRemoved = [];
            this.documentsUpdated = [];
            this.documents = [];
            this.documentTypes = [];
            this.dynamicAttributes = [];
            this.icaoCodes = [];
            this.zones = [];
            this.customerTableDataSource.dataSelection = [];
            this.customerEvolutionTableDataSource.dataSelection = [];
            this.documentTableDataSource.dataSelection = [];
            this.currentCusCustomer = undefined;
            this.currentCusCustomerIndex = -1;
            this.cusCustomerDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read;
            this.showCusCustomerDialog = false;
            this.currentCustomerEvolution = undefined;
            this.currentCustomerEvolutionIndex = -1;
            this.customerEvolutionDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read;
            this.showCustomerEvolutionDialog = false;
            this.currentDocument = undefined;
            this.currentDocumentIndex = -1;
            this.documentDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read;
            this.showDocumentDialog = false;
            this.loadCustomerLinks();
            this.loadCustomerTypes();
            this.loadCustomizedCompliances();
            this.loadDocumentTypes();
            this.loadIcaoCodes();
            this.loadZones();
          };
          BusinessPartnerFormComponent.prototype.loadBusinessPartner = function() {
            var _this = this;
            // Load dynamic attributes
            var observables = [
              this.getDynamicAttributesObservable(
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .FM_ATTRIBUTE_CATEGORY_ALL_KEY
              ),
              this.getDynamicAttributesObservable(
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .FM_ATTRIBUTE_CATEGORY_CUSTOMER_KEY
              )
            ];
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])(observables).subscribe(function(_a) {
              var _b = __read(_a, 2),
                allAttribute = _b[0],
                customerAttribute = _b[1];
              var attributes = [];
              attributes = !!allAttribute ? __spread(attributes, allAttribute) : attributes;
              attributes = !!customerAttribute ? __spread(attributes, customerAttribute) : attributes;
              _this.dynamicAttributes = _this.dynamicAttributesService.from(attributes);
              if (!!_this.componentData.objectId) {
                // Load business partner object
                var businessPartnerId = _this.serializationService.deserialize(_this.componentData.objectId);
                _this.businessPartnerFormService.findBidoCustomer(businessPartnerId).subscribe(function(result) {
                  if (!!result) {
                    _this.businessPartner = result;
                    if (!!_this.businessPartner && !!_this.businessPartner.customerCode) {
                      var customerCode = _this.businessPartner.customerCode;
                      _this.loadContacts(customerCode);
                      _this.loadCusCustomers(customerCode);
                      _this.loadCustomerEvolutions(customerCode);
                      _this.loadDocuments(customerCode);
                      if (!!_this.businessPartner.bidoCustomerAttributeDatas) {
                        _this.dynamicAttributesService.setValues(
                          _this.dynamicAttributes,
                          _this.businessPartner.bidoCustomerAttributeDatas
                        );
                      }
                    }
                  }
                });
              }
            });
          };
          BusinessPartnerFormComponent.prototype.loadContacts = function(customerCode) {
            var _this = this;
            this.businessPartnerFormService.findBidoContactsByCustomerCode(customerCode).subscribe(function(results) {
              _this.contactTableDataSource.setData(
                _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils'].orEmpty(results)
              );
            });
          };
          BusinessPartnerFormComponent.prototype.loadCusCustomers = function(customerCode) {
            var _this = this;
            this.businessPartnerFormService
              .findBidoCusCustomersByCustomerCode(customerCode)
              .subscribe(function(results) {
                _this.cusCustomers = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils']
                  .orEmpty(results)
                  .filter(function(cusCustomer) {
                    return !!cusCustomer.customerCode;
                  });
                _this.customerTableDataSource.setData(
                  _this.cusCustomers.map(function(cusCustomer) {
                    return _this.createCusCustomerRow(cusCustomer);
                  })
                );
              });
          };
          BusinessPartnerFormComponent.prototype.loadCustomerEvolutions = function(customerCode) {
            var _this = this;
            this.businessPartnerFormService
              .findBidoCustomerEvolutionsByCustomerCode(customerCode)
              .subscribe(function(results) {
                _this.customerEvolutions = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils']
                  .orEmpty(results)
                  .filter(function(customerEvolution) {
                    return (
                      !!customerEvolution.customerCode &&
                      !!customerEvolution.evolutionNumber &&
                      !!customerEvolution.evolutionRevisionNumber &&
                      !!customerEvolution.evolutionType
                    );
                  });
                _this.customerEvolutionTableDataSource.setData(
                  _this.customerEvolutions.map(function(customerEvolution) {
                    return _this.createCustomerEvolutionRow(customerEvolution);
                  })
                );
              });
          };
          BusinessPartnerFormComponent.prototype.loadCustomerTypes = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__['GenericPropertyConstants']
                  .CUSTOMER_TYPE_MAP
              )
              .subscribe(function(results) {
                _this.customerTypes = !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_25__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
              });
          };
          BusinessPartnerFormComponent.prototype.loadDocuments = function(customerCode) {
            var _this = this;
            this.businessPartnerFormService
              .findBidoDocumentationsByCustomerCode(customerCode)
              .subscribe(function(results) {
                _this.documents = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils']
                  .orEmpty(results)
                  .filter(function(document) {
                    return !!document.docName;
                  });
                _this.documentTableDataSource.setData(
                  _this.documents.map(function(document) {
                    return _this.createDocumentRow(document);
                  })
                );
              });
          };
          BusinessPartnerFormComponent.prototype.loadIcaoCodes = function() {
            var _this = this;
            var attributeId = {
              attributeId: _shared_constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_7__[
                'BidoAttributeConstants'
              ].ICAO_CODE.toString()
            };
            this.businessPartnerFormService.findBidoAttribute(attributeId).subscribe(function(result) {
              if (!!result && !!result.bidoAttributeValueDatas) {
                _this.icaoCodes = result.bidoAttributeValueDatas.map(function(attributeValueData) {
                  var label =
                    _this.translateService.currentLang ===
                    _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_11__['LangConstants'].FRENCH_CODE
                      ? attributeValueData.textFr
                      : attributeValueData.textEn;
                  var icaoCode = {
                    label: label,
                    value: attributeValueData.attributeValue
                  };
                  return icaoCode;
                });
              }
            });
          };
          BusinessPartnerFormComponent.prototype.loadZones = function() {
            var _this = this;
            this.propertiesService.getZones().subscribe(function(results) {
              _this.zones = !!results
                ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_25__['SelectItemUtils'].fromLabelValues(
                    results
                  )
                : [];
              _this.updateCountries();
            });
          };
          BusinessPartnerFormComponent.prototype.onSavedBusinessPartner = function() {
            this.documentsAdded = [];
            this.documentsRemoved = [];
            this.documentsUpdated = [];
            this.customerEvolutionsAdded = [];
            this.customerEvolutionsRemoved = [];
          };
          BusinessPartnerFormComponent.prototype.initContactTableDataSource = function() {
            this.contactTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__[
              'TableDataSource'
            ]({
              enableSelection: false,
              allowMultiSelect: true,
              columns: [
                {
                  field: 'contactName',
                  translateKey: this.getTranslateKey('contactName'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__['ColumnAlignment'].LEFT,
                  width: '70%'
                },
                {
                  field: 'primaryContact',
                  translateKey: this.getTranslateKey('primaryContact'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__['ColumnAlignment'].CENTER,
                  width: '30%'
                }
              ],
              data: []
            });
          };
          BusinessPartnerFormComponent.prototype.initCustomerTableDataSource = function() {
            this.customerTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'customerCode',
                  translateKey: this.getTranslateKey('customerCode'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__['ColumnAlignment'].LEFT,
                  width: '20%'
                },
                {
                  field: 'customerName',
                  translateKey: this.getTranslateKey('customerName'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__['ColumnAlignment'].LEFT,
                  width: '40%'
                },
                {
                  field: 'customerLink',
                  translateKey: this.getTranslateKey('customerLink'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__['ColumnAlignment'].LEFT,
                  width: '40%'
                }
              ],
              data: []
            });
          };
          BusinessPartnerFormComponent.prototype.initCustomerEvolutionTableDataSource = function() {
            this.customerEvolutionTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'evolutionNumber',
                  translateKey: this.getTranslateKey('evolutionNumber'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__['ColumnAlignment'].RIGHT,
                  width: '20%'
                },
                {
                  field: 'evolutionRevisionNumber',
                  translateKey: this.getTranslateKey('evolutionRevisionNumber'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__['ColumnAlignment'].RIGHT,
                  width: '40%'
                },
                {
                  field: 'customizedCompliance',
                  translateKey: this.getTranslateKey('customizedCompliance'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__['ColumnAlignment'].LEFT,
                  width: '40%'
                }
              ],
              data: []
            });
          };
          BusinessPartnerFormComponent.prototype.initDocumentTableDataSource = function() {
            this.documentTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'docName',
                  translateKey: this.getTranslateKey('docName'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__['ColumnAlignment'].LEFT,
                  width: '60%'
                },
                {
                  field: 'docCategory',
                  translateKey: this.getTranslateKey('docType'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__['ColumnAlignment'].LEFT,
                  width: '20%'
                },
                {
                  field: 'docPublicationDate',
                  translateKey: this.getTranslateKey('docPublicationDate'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__['ColumnAlignment'].LEFT,
                  width: '20%'
                }
              ],
              data: []
            });
          };
          BusinessPartnerFormComponent.prototype.updateBusinessPartner = function(saveBidoCustomerInput) {
            var _this = this;
            this.showSaveSpinner = true;
            this.businessPartnerFormService.updateBidoCustomer(saveBidoCustomerInput).subscribe(
              function() {
                _this.onSavedBusinessPartner();
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnCreateBusinessPartner'));
                _this.showSaveSpinner = false;
              },
              function(error) {
                _this.showSaveSpinner = false;
              }
            );
          };
          /**************************************************************************
           * Attributes tab
           *************************************************************************/
          BusinessPartnerFormComponent.prototype.openAttributesTab = function() {
            this.currentTabId = this.tabAttributesId;
          };
          /**************************************************************************
           * Documents tab
           *************************************************************************/
          BusinessPartnerFormComponent.prototype.deleteDocuments = function() {
            var _this = this;
            var partialMessageKey =
              this.documentTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedDocuments'
                : 'confirmDeleteSelectedDocument';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.documentTableDataSource.dataSelection.forEach(function(selectedDocumentRow) {
                  var documentsAddedWithoutSelection = _this.documentsAdded.filter(function(document) {
                    return !_this.areSameDocument(document, selectedDocumentRow._obj);
                  });
                  // list of added objects contains the selection
                  if (_this.documentsAdded.length !== documentsAddedWithoutSelection.length) {
                    // Remove selection from added objects
                    _this.documentsAdded = documentsAddedWithoutSelection;
                  } else {
                    var documentsUpdatedWithoutSelection = _this.documentsUpdated.filter(function(document) {
                      return !_this.areSameDocument(document, selectedDocumentRow._obj);
                    });
                    // list of updated objects contains the selection
                    if (_this.documentsUpdated.length !== documentsUpdatedWithoutSelection.length) {
                      // Remove selection from added objects
                      _this.documentsUpdated = documentsUpdatedWithoutSelection;
                    }
                    _this.documentsRemoved = __spread(_this.documentsRemoved, [selectedDocumentRow._obj]);
                  }
                });
                _this.documents = _this.documents.filter(function(document) {
                  return !_this.documentTableDataSource.dataSelection.some(function(selectedDocumentRow) {
                    return _this.areSameDocument(document, selectedDocumentRow._obj);
                  });
                });
                _this.documentTableDataSource.setData(
                  _this.documentTableDataSource.dataSrc.filter(function(documentRow) {
                    return !_this.documentTableDataSource.dataSelection.some(function(selectedDocumentRow) {
                      return _this.areSameDocument(documentRow._obj, selectedDocumentRow._obj);
                    });
                  })
                );
                _this.documentTableDataSource.dataSelection = [];
              }
            });
          };
          BusinessPartnerFormComponent.prototype.editDocument = function() {
            var _this = this;
            if (this.documentTableDataSource.dataSelectionCount === 1) {
              this.currentDocumentIndex = this.documents.findIndex(function(document) {
                return _this.areSameDocument(document, _this.documentTableDataSource.dataSelection[0]._obj);
              });
              this.currentDocument = __assign({}, this.documentTableDataSource.dataSelection[0]._obj);
              this.documentDialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write;
              this.showDocumentDialog = true;
            }
          };
          BusinessPartnerFormComponent.prototype.openDocument = function() {
            if (this.documentTableDataSource.dataSelection.length === 1) {
              this.currentDocument = this.documentTableDataSource.dataSelection[0]._obj;
              this.currentDocumentIndex = -1;
              this.documentDialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read;
              this.showDocumentDialog = true;
            }
          };
          BusinessPartnerFormComponent.prototype.openDocumentsTab = function() {
            this.currentTabId = this.tabDocumentsId;
          };
          BusinessPartnerFormComponent.prototype.uploadDocument = function(event, fileUploader) {
            var _this = this;
            if (!!event.files) {
              var file_1 = event.files[0];
              // Check if the file already exists
              var fileExists = this.documents.some(function(document) {
                return document.docName === file_1.name;
              });
              if (fileExists) {
                this.messageService.showWarningMessage('global.warningOnFileExists');
              } else {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_23__['FileUtils'].getFileContentAsBase64(
                  file_1,
                  function(fileContent) {
                    if (!!fileContent) {
                      var document_1 = {
                        docFile: fileContent,
                        docName: file_1.name,
                        docPublicationDate: new Date()
                      };
                      _this.documents = __spread(_this.documents, [document_1]);
                      _this.documentsAdded = __spread(_this.documentsAdded, [document_1]);
                      _this.documentTableDataSource.addData([_this.createDocumentRow(document_1)]);
                    }
                  }
                );
              }
              fileUploader.clear();
            }
          };
          /**************************************************************************
           * General tab
           *************************************************************************/
          BusinessPartnerFormComponent.prototype.createCusCustomer = function() {
            this.currentCusCustomer = undefined;
            this.cusCustomerDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Create;
            this.showCusCustomerDialog = true;
          };
          BusinessPartnerFormComponent.prototype.createCustomerEvolution = function() {
            this.currentCustomerEvolution = undefined;
            this.customerEvolutionDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Create;
            this.showCustomerEvolutionDialog = true;
          };
          BusinessPartnerFormComponent.prototype.deleteCusCustomers = function() {
            var _this = this;
            var partialMessageKey =
              this.documentTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedCusCustomers'
                : 'confirmDeleteSelectedCusCustomer';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.cusCustomers = _this.cusCustomers.filter(function(cusCustomer) {
                  return !_this.customerTableDataSource.dataSelection.some(function(selectedCusCustomerRow) {
                    return (
                      !!cusCustomer.customerCode &&
                      !!selectedCusCustomerRow.customerCode &&
                      cusCustomer.customerCode === selectedCusCustomerRow.customerCode
                    );
                  });
                });
                _this.customerTableDataSource.setData(
                  _this.customerTableDataSource.dataSrc.filter(function(cusCustomerRow) {
                    return !_this.customerTableDataSource.dataSelection.some(function(selectedCusCustomerRow) {
                      return cusCustomerRow.customerCode === selectedCusCustomerRow.customerCode;
                    });
                  })
                );
                _this.customerTableDataSource.dataSelection = [];
              }
            });
          };
          BusinessPartnerFormComponent.prototype.deleteCustomerEvolutions = function() {
            var _this = this;
            var partialMessageKey =
              this.customerEvolutionTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedCustomerEvolutions'
                : 'confirmDeleteSelectedCustomerEvolution';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.customerEvolutionTableDataSource.dataSelection.forEach(function(selectedCustomerEvolutionRow) {
                  var customerEvolutionsAddedWithoutSelection = _this.customerEvolutionsAdded.filter(function(
                    customerEvolution
                  ) {
                    return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_22__[
                      'DTOUtils'
                    ].equalsBidoCustomerEvolutionDTO(customerEvolution, selectedCustomerEvolutionRow._obj);
                  });
                  // list of added objects contains the selection
                  if (_this.customerEvolutionsAdded.length !== customerEvolutionsAddedWithoutSelection.length) {
                    // Remove selection from added objects
                    _this.customerEvolutionsAdded = customerEvolutionsAddedWithoutSelection;
                  } else {
                    var customerEvolutionsUpdatedWithoutSelection = _this.customerEvolutionsUpdated.filter(function(
                      customerEvolution
                    ) {
                      return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_22__[
                        'DTOUtils'
                      ].equalsBidoCustomerEvolutionDTO(customerEvolution, selectedCustomerEvolutionRow._obj);
                    });
                    // list of updated objects contains the selection
                    if (_this.customerEvolutionsUpdated.length !== customerEvolutionsUpdatedWithoutSelection.length) {
                      // Remove selection from added objects
                      _this.customerEvolutionsUpdated = customerEvolutionsUpdatedWithoutSelection;
                    }
                    _this.customerEvolutionsRemoved = __spread(_this.customerEvolutionsRemoved, [
                      selectedCustomerEvolutionRow._obj
                    ]);
                  }
                });
                _this.customerEvolutions = _this.customerEvolutions.filter(function(customerEvolution) {
                  return !_this.customerEvolutionTableDataSource.dataSelection.some(function(
                    selectedCustomerEvolutionRow
                  ) {
                    return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_22__[
                      'DTOUtils'
                    ].equalsBidoCustomerEvolutionDTO(customerEvolution, selectedCustomerEvolutionRow._obj);
                  });
                });
                _this.customerEvolutionTableDataSource.setData(
                  _this.customerEvolutionTableDataSource.dataSrc.filter(function(customerEvolutionRow) {
                    return !_this.customerEvolutionTableDataSource.dataSelection.some(function(
                      selectedCustomerEvolutionRow
                    ) {
                      return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_22__[
                        'DTOUtils'
                      ].equalsBidoCustomerEvolutionDTO(customerEvolutionRow._obj, selectedCustomerEvolutionRow._obj);
                    });
                  })
                );
                _this.customerEvolutionTableDataSource.dataSelection = [];
              }
            });
          };
          BusinessPartnerFormComponent.prototype.editCusCustomer = function() {
            var _this = this;
            if (this.customerTableDataSource.dataSelectionCount === 1) {
              this.currentCusCustomerIndex = this.cusCustomers.findIndex(function(cusCustomer) {
                return (
                  !!cusCustomer.customerCode &&
                  !!_this.customerTableDataSource.dataSelection[0]._obj.customerCode &&
                  cusCustomer.customerCode === _this.customerTableDataSource.dataSelection[0]._obj.customerCode
                );
              });
              this.currentCusCustomer = __assign({}, this.customerTableDataSource.dataSelection[0]._obj);
              this.cusCustomerDialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write;
              this.showCusCustomerDialog = true;
            }
          };
          BusinessPartnerFormComponent.prototype.editCustomerEvolution = function() {
            var _this = this;
            if (this.customerEvolutionTableDataSource.dataSelectionCount === 1) {
              this.currentCustomerEvolutionIndex = this.customerEvolutions.findIndex(function(customerEvolution) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_22__['DTOUtils'].equalsBidoCustomerEvolutionDTO(
                  customerEvolution,
                  _this.customerEvolutionTableDataSource.dataSelection[0]._obj
                );
              });
              this.currentCustomerEvolution = __assign({}, this.customerEvolutionTableDataSource.dataSelection[0]._obj);
              this.customerEvolutionDialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write;
              this.showCustomerEvolutionDialog = true;
            }
          };
          BusinessPartnerFormComponent.prototype.openCusCustomer = function() {
            if (this.customerTableDataSource.dataSelectionCount === 1) {
              this.currentCusCustomer = this.customerTableDataSource.dataSelection[0]._obj;
              this.currentCusCustomerIndex = -1;
              this.cusCustomerDialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read;
              this.showCusCustomerDialog = true;
            }
          };
          BusinessPartnerFormComponent.prototype.openCustomerEvolution = function() {
            if (this.customerEvolutionTableDataSource.dataSelectionCount === 1) {
              this.currentCustomerEvolution = this.customerEvolutionTableDataSource.dataSelection[0]._obj;
              this.currentCustomerEvolutionIndex = -1;
              this.customerEvolutionDialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read;
              this.showCustomerEvolutionDialog = true;
            }
          };
          BusinessPartnerFormComponent.prototype.openGeneralTab = function() {
            this.currentTabId = this.tabGeneralId;
          };
          BusinessPartnerFormComponent.prototype.loadCustomerLinks = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__['GenericPropertyConstants']
                  .CUSTOMER_LINK_MAP
              )
              .subscribe(function(results) {
                _this.customerLinks = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__['ListUtils'].orEmpty(
                  results
                );
              });
          };
          BusinessPartnerFormComponent.prototype.loadCustomizedCompliances = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__['GenericPropertyConstants']
                  .COMPLIANCE_MAP
              )
              .subscribe(function(results) {
                _this.customizedCompliances = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__[
                  'ListUtils'
                ].orEmpty(results);
              });
          };
          BusinessPartnerFormComponent.prototype.loadDocumentTypes = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__['GenericPropertyConstants']
                  .DOC_PARTNER_CATEGORY_MAP
              )
              .subscribe(function(results) {
                _this.documentTypes = !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_25__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
              });
          };
          /**************************************************************************
           * Cus Customer Dialog
           *************************************************************************/
          BusinessPartnerFormComponent.prototype.onAddCusCustomer = function(cusCustomer) {
            if (!!cusCustomer) {
              if (this.currentCusCustomerIndex !== -1) {
                this.cusCustomers[this.currentCusCustomerIndex] = cusCustomer;
                this.customerTableDataSource.replaceData(
                  this.customerTableDataSource.dataSelection[0],
                  this.createCusCustomerRow(cusCustomer)
                );
              } else {
                this.cusCustomers = __spread(this.cusCustomers, [cusCustomer]);
                this.customerTableDataSource.addData([this.createCusCustomerRow(cusCustomer)]);
              }
            }
            this.customerTableDataSource.dataSelection = [];
          };
          /**************************************************************************
           * Customer Evolution Dialog
           *************************************************************************/
          BusinessPartnerFormComponent.prototype.onAddCustomerEvolution = function(customerEvolution) {
            if (!!customerEvolution) {
              customerEvolution.evolutionType =
                _shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_8__[
                  'BidoEvolutionConstants'
                ].CODE_EVOLUTION;
              if (this.currentCustomerEvolutionIndex !== -1) {
                this.customerEvolutions[this.currentCustomerEvolutionIndex] = customerEvolution;
                this.customerEvolutionTableDataSource.replaceData(
                  this.customerEvolutionTableDataSource.dataSelection[0],
                  this.createCustomerEvolutionRow(customerEvolution)
                );
                var updatedCustomerEvolutionIndex = this.customerEvolutionsUpdated.findIndex(function(
                  customerEvolutionUpdated
                ) {
                  return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_22__[
                    'DTOUtils'
                  ].equalsBidoCustomerEvolutionDTO(customerEvolutionUpdated, customerEvolution);
                });
                if (updatedCustomerEvolutionIndex !== -1) {
                  this.customerEvolutionsUpdated[updatedCustomerEvolutionIndex] = customerEvolution;
                } else {
                  this.customerEvolutionsUpdated = __spread(this.customerEvolutionsUpdated, [customerEvolution]);
                }
              } else {
                var isAdded = this.customerEvolutionsAdded.some(function(customerEvolutionAdded) {
                  return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_22__[
                    'DTOUtils'
                  ].equalsBidoCustomerEvolutionDTO(customerEvolutionAdded, customerEvolution);
                });
                if (isAdded) {
                  this.messageService.showWarningMessage(this.getTranslateKey('warningOnCustomerEvolutionExists'));
                } else {
                  this.customerEvolutions = __spread(this.customerEvolutions, [customerEvolution]);
                  this.customerEvolutionsAdded = __spread(this.customerEvolutionsAdded, [customerEvolution]);
                  this.customerEvolutionTableDataSource.addData([this.createCustomerEvolutionRow(customerEvolution)]);
                }
              }
            }
            this.customerEvolutionTableDataSource.dataSelection = [];
          };
          /**************************************************************************
           * Document Dialog
           *************************************************************************/
          BusinessPartnerFormComponent.prototype.onAddDocument = function(document) {
            var _this = this;
            if (!!document) {
              if (this.currentDocumentIndex !== -1) {
                var isAdded = this.documentsAdded.some(function(documentAdded) {
                  return _this.areSameDocument(documentAdded, document);
                });
                if (isAdded) {
                  var indexInAddedList = this.documentsAdded.findIndex(function(doc) {
                    return _this.areSameDocument(doc, document);
                  });
                  this.documentsAdded[indexInAddedList] = document;
                } else if (!isAdded) {
                  this.documentsUpdated = __spread(this.documentsUpdated, [document]);
                }
                this.documentTableDataSource.replaceData(
                  this.documentTableDataSource.dataSelection[0],
                  this.createDocumentRow(document)
                );
              }
            }
            this.documentTableDataSource.dataSelection = [];
          };
          /**************************************************************************
           * Table Of Content
           *************************************************************************/
          BusinessPartnerFormComponent.prototype.setTableOfContent = function() {
            var _this = this;
            var mainDataKey = 'page.mainData';
            var generalKey = 'global.general';
            var associatedBusinessPartnerKey = this.getTranslateKey('associatedBusinessPartner');
            var listContactsKey = this.getTranslateKey('listContacts');
            var customizedEvolutionsComplianceKey = this.getTranslateKey('customizedEvolutionsCompliance');
            var documentsKey = 'global.documents';
            this.translateService
              .get([
                mainDataKey,
                generalKey,
                associatedBusinessPartnerKey,
                listContactsKey,
                customizedEvolutionsComplianceKey,
                documentsKey
              ])
              .subscribe(function(results) {
                var mainDataLabel = !!results ? results[mainDataKey] : 'Main Information';
                var generalLabel = !!results ? results[generalKey] : 'General';
                var associatedBusinessPartnerLabel = !!results
                  ? results[associatedBusinessPartnerKey]
                  : 'Associated Business Partner';
                var listContactsLabel = !!results ? results[listContactsKey] : 'List of Contacts';
                var customizedEvolutionsComplianceLabel = !!results
                  ? results[customizedEvolutionsComplianceKey]
                  : 'Customized Evolutions Compliance';
                var documentsLabel = !!results ? results[documentsKey] : 'Documents';
                _this.toc = [
                  {
                    id: 'mainInformationAnchor',
                    anchor: _this.mainInformationEltRef,
                    label: mainDataLabel
                  },
                  {
                    id: 'mainDataAnchor',
                    anchor: _this.mainDataEltRef,
                    label: generalLabel
                  },
                  {
                    id: 'cusCustomerTableAnchor',
                    anchor: _this.customerTableEltRef,
                    label: associatedBusinessPartnerLabel
                  },
                  {
                    id: 'contactTableAnchor',
                    anchor: _this.contactTableEltRef,
                    label: listContactsLabel
                  },
                  {
                    id: 'customerEvolutionTableAnchor',
                    anchor: _this.customerEvolutionEltRef,
                    label: customizedEvolutionsComplianceLabel
                  },
                  {
                    id: 'documentTableAnchor',
                    anchor: _this.documentTableEltRef,
                    label: documentsLabel
                  }
                ];
                _super.prototype.selectPageTocEntry.call(_this, _this.component.MAIN_INFORMATION_ANCHOR_ID);
              });
          };
          BusinessPartnerFormComponent.prototype.openStatusUpdatesPopup = function() {
            this.showStatusUpdatesPopup = true;
          };
          var BusinessPartnerFormComponent_1;
          BusinessPartnerFormComponent.CONTACT_TABLE_ANCHOR_ID = 'contactTableAnchor';
          BusinessPartnerFormComponent.CUSTOMER_EVOLUTION_ANCHOR_ID = 'customerEvolutionTableAnchor';
          BusinessPartnerFormComponent.CUSTOMER_TABLE_ANCHOR_ID = 'cusCustomerTableAnchor';
          BusinessPartnerFormComponent.DOCUMENT_TABLE_ANCHOR_ID = 'documentTableAnchor';
          BusinessPartnerFormComponent.MAIN_DATA_ANCHOR_ID = 'mainDataAnchor';
          BusinessPartnerFormComponent.MAIN_INFORMATION_ANCHOR_ID = 'mainInformationAnchor';
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                BusinessPartnerFormComponent_1.MAIN_INFORMATION_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            BusinessPartnerFormComponent.prototype,
            'mainInformationEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                BusinessPartnerFormComponent_1.MAIN_DATA_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            BusinessPartnerFormComponent.prototype,
            'mainDataEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                BusinessPartnerFormComponent_1.CUSTOMER_TABLE_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            BusinessPartnerFormComponent.prototype,
            'customerTableEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                BusinessPartnerFormComponent_1.CONTACT_TABLE_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            BusinessPartnerFormComponent.prototype,
            'contactTableEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                BusinessPartnerFormComponent_1.CUSTOMER_EVOLUTION_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            BusinessPartnerFormComponent.prototype,
            'customerEvolutionEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                BusinessPartnerFormComponent_1.DOCUMENT_TABLE_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            BusinessPartnerFormComponent.prototype,
            'documentTableEltRef',
            void 0
          );
          BusinessPartnerFormComponent = BusinessPartnerFormComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-business-partner-form',
                template: __webpack_require__(
                  /*! ./business-partner-form.component.html */ './src/app/main/administration/business-partner/form/business-partner-form.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_15__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_16__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_17__['MessageService'],
                _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_3__['PageTocService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_19__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_20__['TabService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _business_partner_form_service__WEBPACK_IMPORTED_MODULE_27__['BusinessPartnerFormService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__['ConfirmationService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_14__['DateService'],
                _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_4__[
                  'DynamicAttributesService'
                ],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_18__['PropertiesService']
              ])
            ],
            BusinessPartnerFormComponent
          );
          return BusinessPartnerFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_21__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/administration/business-partner/form/business-partner-form.service.ts':
      /*!********************************************************************************************!*\
  !*** ./src/app/main/administration/business-partner/form/business-partner-form.service.ts ***!
  \********************************************************************************************/
      /*! exports provided: BusinessPartnerFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'BusinessPartnerFormService',
          function() {
            return BusinessPartnerFormService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/user-profile-management.api */ './src/app/shared/api/user-profile-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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

        var BusinessPartnerFormService = /** @class */ (function(_super) {
          __extends(BusinessPartnerFormService, _super);
          function BusinessPartnerFormService(
            http,
            appConfigService,
            fleetManagementApi,
            productStructureManagementApi,
            userProfileManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.fleetManagementApi = fleetManagementApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.userProfileManagementApi = userProfileManagementApi;
            return _this;
          }
          /**************************************************************************
           * Fleet management api
           *************************************************************************/
          BusinessPartnerFormService.prototype.addBidoCusCustomers = function(cusCustomerData) {
            return _super.prototype.post.call(this, this.fleetManagementApi.addBidoCusCustomers, cusCustomerData);
          };
          BusinessPartnerFormService.prototype.createBidoCustomer = function(customer) {
            return _super.prototype.post.call(this, this.fleetManagementApi.createBidoCustomer, customer);
          };
          BusinessPartnerFormService.prototype.createBidoCustomerEvolution = function(customerEvolution) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.createBidoCustomerEvolution,
              customerEvolution
            );
          };
          BusinessPartnerFormService.prototype.createBidoDocumentation = function(documentation) {
            return _super.prototype.post.call(this, this.fleetManagementApi.createBidoDocumentation, documentation);
          };
          BusinessPartnerFormService.prototype.createBidoEvolution = function(evolution) {
            return _super.prototype.post.call(this, this.fleetManagementApi.createBidoEvolution, evolution);
          };
          BusinessPartnerFormService.prototype.findBidoAttribute = function(attributeId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoAttribute, attributeId);
          };
          BusinessPartnerFormService.prototype.findBidoAttributesByAttributeCategory = function(attributeCategory) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoAttributesByAttributeCategory,
              attributeCategory
            );
          };
          BusinessPartnerFormService.prototype.findBidoContactsByCustomerCode = function(customerCode) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoContactsByCustomerCode,
              customerCode
            );
          };
          BusinessPartnerFormService.prototype.findBidoCusCustomersByCustomerCode = function(customerCode) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoCusCustomersByCustomerCode,
              customerCode
            );
          };
          BusinessPartnerFormService.prototype.findBidoCustomer = function(customerId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoCustomer, customerId);
          };
          BusinessPartnerFormService.prototype.findBidoCustomerEvolutionsByCustomerCode = function(customerCode) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoCustomerEvolutionsByCustomerCode,
              customerCode
            );
          };
          BusinessPartnerFormService.prototype.findBidoCustomersBySearchCriteria = function(criteria) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoCustomersBySearchCriteria,
              criteria
            );
          };
          BusinessPartnerFormService.prototype.findBidoDocumentationsByCustomerCode = function(customerCode) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoDocumentationsByCustomerCode,
              customerCode
            );
          };
          BusinessPartnerFormService.prototype.removeAllBidoCusCustomersByCustomerCode = function(customerCode) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.removeAllBidoCusCustomersByCustomerCode,
              customerCode
            );
          };
          BusinessPartnerFormService.prototype.removeBidoCustomerEvolution = function(customerEvolutionId) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.removeBidoCustomerEvolution,
              customerEvolutionId
            );
          };
          BusinessPartnerFormService.prototype.removeBidoDocumentation = function(documentationId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.removeBidoDocumentation, documentationId);
          };
          BusinessPartnerFormService.prototype.updateBidoContact = function(contact) {
            return _super.prototype.post.call(this, this.fleetManagementApi.updateBidoContact, contact);
          };
          BusinessPartnerFormService.prototype.updateBidoCustomer = function(customer) {
            return _super.prototype.post.call(this, this.fleetManagementApi.updateBidoCustomer, customer);
          };
          BusinessPartnerFormService.prototype.updateBidoCustomerEvolution = function(customerEvolution) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.updateBidoCustomerEvolution,
              customerEvolution
            );
          };
          BusinessPartnerFormService.prototype.updateFieldsOfBidoDocumentation = function(
            documentationId,
            docName,
            docDescription,
            publicationDate,
            endOfValidityDate,
            docCategory,
            docVersion,
            docLanguage
          ) {
            var documentation = {
              docCode: documentationId.docCode
            };
            var params = {
              bidoDocumentationDTO: documentation,
              docName: docName,
              docDescription: docDescription,
              publicationDate: publicationDate,
              endOfValidityDate: endOfValidityDate,
              docCategory: docCategory,
              docVersion: docVersion,
              docLanguage: docLanguage
            };
            return _super.prototype.post.call(this, this.fleetManagementApi.updateFieldsOfBidoDocumentation, params);
          };
          /**************************************************************************
           * Product structure management api
           *************************************************************************/
          BusinessPartnerFormService.prototype.findBireEvolution = function(evolutionId) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBireEvolution, evolutionId);
          };
          BusinessPartnerFormService.prototype.findBireEvolutionsByEvolutionCriteria = function(
            evolution,
            familyCode,
            structureType,
            variantCode
          ) {
            var params = {
              bireEvolutionDTO: evolution,
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
          /**************************************************************************
           * User profile management api
           *************************************************************************/
          BusinessPartnerFormService.prototype.createFunctionType = function(functionType) {
            return _super.prototype.post.call(this, this.userProfileManagementApi.createFunctionType, functionType);
          };
          BusinessPartnerFormService.prototype.updateFunctionType = function(functionType) {
            return _super.prototype.post.call(this, this.userProfileManagementApi.updateFunctionType, functionType);
          };
          BusinessPartnerFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__['AppConfigService'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__['FleetManagementApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_4__['UserProfileManagementApi']
              ])
            ],
            BusinessPartnerFormService
          );
          return BusinessPartnerFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/administration/business-partner/form/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component.html':
      /*!******************************************************************************************************************************************************!*\
  !*** ./src/app/main/administration/business-partner/form/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component.html ***!
  \******************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".docName" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <input type="text" class="aw-input" [(ngModel)]="document.docName" [disabled]="isReadOpenMode" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".docPublicationDate" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-calendar\r\n          showButtonBar="true"\r\n          [monthNavigator]="true"\r\n          [yearNavigator]="true"\r\n          [yearRange]="sessionService.calendarYearRange"\r\n          class="aw-calendar"\r\n          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n          [locale]="sessionService.calendarFormat"\r\n          [(ngModel)]="document.docPublicationDate"\r\n          appendTo="body"\r\n          [disabled]="isReadOpenMode"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".docEndOfValidityDate" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-calendar\r\n          showButtonBar="true"\r\n          [monthNavigator]="true"\r\n          [yearNavigator]="true"\r\n          [yearRange]="sessionService.calendarYearRange"\r\n          class="aw-calendar"\r\n          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n          [locale]="sessionService.calendarFormat"\r\n          [(ngModel)]="document.docEndOfValidityDate"\r\n          appendTo="body"\r\n          [disabled]="isReadOpenMode"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".docType" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          [options]="types"\r\n          [(ngModel)]="document.docCategory"\r\n          [disabled]="isReadOpenMode"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n          appendTo="body"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".docDescription" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <textarea\r\n          class="aw-textarea"\r\n          pInputTextarea\r\n          [rows]="3"\r\n          [(ngModel)]="document.docDescription"\r\n          [disabled]="isReadOpenMode"\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOpenMode" type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" color="primary" mat-raised-button (click)="validate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/administration/business-partner/form/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component.ts':
      /*!****************************************************************************************************************************************************!*\
  !*** ./src/app/main/administration/business-partner/form/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component.ts ***!
  \****************************************************************************************************************************************************/
      /*! exports provided: DialogBusinessPartnerBidoDocumentComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogBusinessPartnerBidoDocumentComponent',
          function() {
            return DialogBusinessPartnerBidoDocumentComponent;
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

        var DialogBusinessPartnerBidoDocumentComponent = /** @class */ (function(_super) {
          __extends(DialogBusinessPartnerBidoDocumentComponent, _super);
          function DialogBusinessPartnerBidoDocumentComponent(sessionService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Read,
                'DialogBusinessPartnerBidoDocumentComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          DialogBusinessPartnerBidoDocumentComponent.prototype.ngOnInit = function() {
            this.updateOpenMode(this.openMode);
            if (!this.document) {
              this.document = {};
            }
          };
          DialogBusinessPartnerBidoDocumentComponent.prototype.validate = function() {
            this.onValidated.emit(this.document);
            this.closeDialog();
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogBusinessPartnerBidoDocumentComponent.prototype,
            'document',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogBusinessPartnerBidoDocumentComponent.prototype,
            'openMode',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogBusinessPartnerBidoDocumentComponent.prototype,
            'types',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogBusinessPartnerBidoDocumentComponent.prototype,
            'onValidated',
            void 0
          );
          DialogBusinessPartnerBidoDocumentComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-business-partner-bido-document',
                template: __webpack_require__(
                  /*! ./dialog-business-partner-bido-document.component.html */ './src/app/main/administration/business-partner/form/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__['SessionService']
              ])
            ],
            DialogBusinessPartnerBidoDocumentComponent
          );
          return DialogBusinessPartnerBidoDocumentComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/administration/business-partner/form/dialog-business-partner-cus-customer/dialog-business-partner-cus-customer.component.html':
      /*!****************************************************************************************************************************************************!*\
  !*** ./src/app/main/administration/business-partner/form/dialog-business-partner-cus-customer/dialog-business-partner-cus-customer.component.html ***!
  \****************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n      <label class="form-label">{{ getComponentName() + ".customerCode" | translate }}</label>\r\n\r\n      <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n        <div class="form-control-data" (click)="openCustomerDialog()">\r\n          {{ cusCustomer.customerCode }} <span *ngIf="cusCustomer.customerName">({{ cusCustomer.customerName }})</span>\r\n        </div>\r\n\r\n        <div *ngIf="cusCustomer.customerCode" class="btn-clear-wrapper">\r\n          <i\r\n            class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n            aria-hidden="true"\r\n            (click)="resetCusCustomer()"\r\n          ></i>\r\n        </div>\r\n        <div class="btn-search-wrapper">\r\n          <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="openCustomerDialog()"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".customerLink" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          [options]="customerLinks"\r\n          [(ngModel)]="cusCustomer.customerLink"\r\n          [disabled]="isReadOpenMode"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n          appendTo="body"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOpenMode" type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [disabled]="!cusCustomer.customerCode || cusCustomer.customerCode.length === 0"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-table\r\n  *ngIf="showCustomerDialog"\r\n  [data]="customerTableData"\r\n  [(display)]="showCustomerDialog"\r\n  (onSelected)="onSelectedCustomer($event)"\r\n></aw-dialog-table>\r\n';

        /***/
      },

    /***/ './src/app/main/administration/business-partner/form/dialog-business-partner-cus-customer/dialog-business-partner-cus-customer.component.ts':
      /*!**************************************************************************************************************************************************!*\
  !*** ./src/app/main/administration/business-partner/form/dialog-business-partner-cus-customer/dialog-business-partner-cus-customer.component.ts ***!
  \**************************************************************************************************************************************************/
      /*! exports provided: DialogBusinessPartnerCusCustomerComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogBusinessPartnerCusCustomerComponent',
          function() {
            return DialogBusinessPartnerCusCustomerComponent;
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
        /* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/utils/select-item-utils */ './src/app/shared/utils/select-item-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _business_partner_form_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../business-partner-form.service */ './src/app/main/administration/business-partner/form/business-partner-form.service.ts'
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

        var DialogBusinessPartnerCusCustomerComponent = /** @class */ (function(_super) {
          __extends(DialogBusinessPartnerCusCustomerComponent, _super);
          function DialogBusinessPartnerCusCustomerComponent(
            businessPartnerFormService,
            messageService,
            propertiesService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read,
                'DialogBusinessPartnerCusCustomerComponent'
              ) || this;
            _this.businessPartnerFormService = businessPartnerFormService;
            _this.messageService = messageService;
            _this.propertiesService = propertiesService;
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.showCustomerDialog = false;
            _this.initCustomerTableData();
            _this.loadCustomerLinks();
            return _this;
          }
          DialogBusinessPartnerCusCustomerComponent.prototype.ngOnInit = function() {
            this.updateOpenMode(this.openMode);
            if (!this.cusCustomer) {
              this.resetCusCustomer();
            }
          };
          DialogBusinessPartnerCusCustomerComponent.prototype.openCustomerDialog = function() {
            this.showCustomerDialog = true;
          };
          DialogBusinessPartnerCusCustomerComponent.prototype.resetCusCustomer = function() {
            this.cusCustomer = {};
          };
          DialogBusinessPartnerCusCustomerComponent.prototype.validate = function() {
            if (
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__['StringUtils'].isNullOrEmpty(
                this.cusCustomer.customerCode
              )
            ) {
              this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
            } else {
              this.onValidated.emit(this.cusCustomer);
              this.closeDialog();
            }
          };
          DialogBusinessPartnerCusCustomerComponent.prototype.initCustomerTableData = function() {
            var customerTableCols = [
              {
                field: 'customerCode',
                alignment: 'left',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input,
                width: '15rem'
              },
              {
                field: 'customerName',
                alignment: 'left',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input,
                width: '15rem'
              }
            ];
            this.customerTableData = {
              componentId: 'DialogCustomer',
              tableCols: customerTableCols,
              tableRows: this.businessPartnerFormService.findBidoCustomersBySearchCriteria({}),
              dataKey: undefined,
              selectionMode:
                _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableSelectionMode'].Single,
              globalFilter: true
            };
          };
          DialogBusinessPartnerCusCustomerComponent.prototype.loadCustomerLinks = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .CUSTOMER_LINK_MAP
              )
              .subscribe(function(results) {
                _this.customerLinks = !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_8__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
              });
          };
          /**************************************************************************
           * Customer Dialog
           *************************************************************************/
          DialogBusinessPartnerCusCustomerComponent.prototype.onSelectedCustomer = function(cusCustomer) {
            if (!!cusCustomer) {
              this.cusCustomer.customerCode = cusCustomer.customerCode;
              this.cusCustomer.customerName = cusCustomer.customerName;
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogBusinessPartnerCusCustomerComponent.prototype,
            'cusCustomer',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogBusinessPartnerCusCustomerComponent.prototype,
            'openMode',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogBusinessPartnerCusCustomerComponent.prototype,
            'onValidated',
            void 0
          );
          DialogBusinessPartnerCusCustomerComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-business-partner-cus-customer',
                template: __webpack_require__(
                  /*! ./dialog-business-partner-cus-customer.component.html */ './src/app/main/administration/business-partner/form/dialog-business-partner-cus-customer/dialog-business-partner-cus-customer.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _business_partner_form_service__WEBPACK_IMPORTED_MODULE_10__['BusinessPartnerFormService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__['PropertiesService']
              ])
            ],
            DialogBusinessPartnerCusCustomerComponent
          );
          return DialogBusinessPartnerCusCustomerComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/administration/business-partner/form/dialog-business-partner-customer-evolution/dialog-business-partner-customer-evolution.component.html':
      /*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/main/administration/business-partner/form/dialog-business-partner-customer-evolution/dialog-business-partner-customer-evolution.component.html ***!
  \****************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n      <label class="form-label">{{ getComponentName() + ".evolutionNumber" | translate }}</label>\r\n\r\n      <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n        <div class="form-control-data" (click)="openEvolutionDialog()">\r\n          {{ customerEvolution.evolutionNumber }}\r\n          <span *ngIf="customerEvolution.evolutionRevisionNumber"\r\n            >- {{ customerEvolution.evolutionRevisionNumber }}</span\r\n          >\r\n        </div>\r\n\r\n        <div *ngIf="customerEvolution.evolutionNumber" class="btn-clear-wrapper">\r\n          <i\r\n            class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n            aria-hidden="true"\r\n            (click)="resetCustomerEvolution()"\r\n          ></i>\r\n        </div>\r\n        <div class="btn-search-wrapper">\r\n          <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="openEvolutionDialog()"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".customizedCompliance" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          [options]="customizedCompliances"\r\n          [(ngModel)]="customerEvolution.customizedCompliance"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n          [disabled]="isReadOpenMode"\r\n          appendTo="body"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOpenMode" type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [disabled]="\r\n        customerEvolution.evolutionNumber === undefined ||\r\n        customerEvolution.evolutionNumber === null ||\r\n        customerEvolution.evolutionNumber.length === 0 ||\r\n        customerEvolution.evolutionRevisionNumber === undefined ||\r\n        customerEvolution.evolutionRevisionNumber === null ||\r\n        customerEvolution.evolutionRevisionNumber.length === 0\r\n      "\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-table\r\n  *ngIf="showEvolutionDialog"\r\n  [data]="evolutionTableData"\r\n  [keyMap]="keyMap"\r\n  [(display)]="showEvolutionDialog"\r\n  (onSelected)="onSelectedEvolution($event)"\r\n></aw-dialog-table>\r\n';

        /***/
      },

    /***/ './src/app/main/administration/business-partner/form/dialog-business-partner-customer-evolution/dialog-business-partner-customer-evolution.component.ts':
      /*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/main/administration/business-partner/form/dialog-business-partner-customer-evolution/dialog-business-partner-customer-evolution.component.ts ***!
  \**************************************************************************************************************************************************************/
      /*! exports provided: DialogBusinessPartnerCustomerEvolutionComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogBusinessPartnerCustomerEvolutionComponent',
          function() {
            return DialogBusinessPartnerCustomerEvolutionComponent;
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
        /* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/utils/select-item-utils */ './src/app/shared/utils/select-item-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _business_partner_form_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../business-partner-form.service */ './src/app/main/administration/business-partner/form/business-partner-form.service.ts'
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

        var DialogBusinessPartnerCustomerEvolutionComponent = /** @class */ (function(_super) {
          __extends(DialogBusinessPartnerCustomerEvolutionComponent, _super);
          function DialogBusinessPartnerCustomerEvolutionComponent(
            businessPartnerFormService,
            messageService,
            propertiesService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read,
                'DialogBusinessPartnerCustomerEvolutionComponent'
              ) || this;
            _this.businessPartnerFormService = businessPartnerFormService;
            _this.messageService = messageService;
            _this.propertiesService = propertiesService;
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.showEvolutionDialog = false;
            _this.initEvolutionTableData();
            _this.initKeyMap();
            _this.loadCustomizedCompliances();
            return _this;
          }
          DialogBusinessPartnerCustomerEvolutionComponent.prototype.ngOnInit = function() {
            this.updateOpenMode(this.openMode);
            if (!this.customerEvolution) {
              this.resetCustomerEvolution();
            }
          };
          DialogBusinessPartnerCustomerEvolutionComponent.prototype.openEvolutionDialog = function() {
            if (this.isReadOpenMode) {
              this.showEvolutionDialog = false;
            } else {
              this.showEvolutionDialog = true;
            }
          };
          DialogBusinessPartnerCustomerEvolutionComponent.prototype.resetCustomerEvolution = function() {
            this.customerEvolution = {};
          };
          DialogBusinessPartnerCustomerEvolutionComponent.prototype.validate = function() {
            if (
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__['StringUtils'].isNullOrEmpty(
                this.customerEvolution.evolutionNumber
              ) ||
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__['StringUtils'].isNullOrEmpty(
                this.customerEvolution.evolutionRevisionNumber
              )
            ) {
              this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
            } else {
              this.onValidated.emit(this.customerEvolution);
              this.closeDialog();
            }
          };
          DialogBusinessPartnerCustomerEvolutionComponent.prototype.initEvolutionTableData = function() {
            var evolutionTableCols = [
              {
                field: 'evolutionNumber',
                alignment: 'left',
                width: '7.5rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'evolutionRevisionNumber',
                alignment: 'left',
                width: '7.5rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'evolutionType',
                alignment: 'left',
                width: '7.5rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'evolutionLevel',
                alignment: 'left',
                width: '7.5rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'evolutionCompliance',
                alignment: 'left',
                width: '7.5rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'tracked',
                alignment: 'center',
                width: '5rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Tricheckbox
              },
              {
                field: 'evolutionSummary',
                alignment: 'left',
                width: '20rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              }
            ];
            this.evolutionTableData = {
              componentId: 'DialogEvolution',
              tableCols: evolutionTableCols,
              tableRows: this.businessPartnerFormService.findBireEvolutionsByEvolutionCriteria(
                {},
                undefined,
                undefined,
                undefined
              ),
              dataKey: undefined,
              selectionMode:
                _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableSelectionMode'].Single,
              globalFilter: true
            };
          };
          DialogBusinessPartnerCustomerEvolutionComponent.prototype.initKeyMap = function() {
            this.keyMap = new Map();
            this.keyMap.set(
              'evolutionCompliance',
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .COMPLIANCE_MAP
              )
            );
            this.keyMap.set(
              'evolutionType',
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .EVOLUTION_TYPE_MAP
              )
            );
          };
          DialogBusinessPartnerCustomerEvolutionComponent.prototype.loadCustomizedCompliances = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .COMPLIANCE_MAP
              )
              .subscribe(function(results) {
                _this.customizedCompliances = !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_8__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
              });
          };
          /**************************************************************************
           * Evolution Dialog
           *************************************************************************/
          DialogBusinessPartnerCustomerEvolutionComponent.prototype.onSelectedEvolution = function(customerEvolution) {
            if (!!customerEvolution) {
              this.customerEvolution.evolutionNumber = customerEvolution.evolutionNumber;
              this.customerEvolution.evolutionRevisionNumber = customerEvolution.evolutionRevisionNumber;
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogBusinessPartnerCustomerEvolutionComponent.prototype,
            'customerEvolution',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogBusinessPartnerCustomerEvolutionComponent.prototype,
            'openMode',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogBusinessPartnerCustomerEvolutionComponent.prototype,
            'onValidated',
            void 0
          );
          DialogBusinessPartnerCustomerEvolutionComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-business-partner-customer-evolution',
                template: __webpack_require__(
                  /*! ./dialog-business-partner-customer-evolution.component.html */ './src/app/main/administration/business-partner/form/dialog-business-partner-customer-evolution/dialog-business-partner-customer-evolution.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _business_partner_form_service__WEBPACK_IMPORTED_MODULE_10__['BusinessPartnerFormService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__['PropertiesService']
              ])
            ],
            DialogBusinessPartnerCustomerEvolutionComponent
          );
          return DialogBusinessPartnerCustomerEvolutionComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/administration/business-partner/search/business-partner-search.component.html':
      /*!****************************************************************************************************!*\
  !*** ./src/app/main/administration/business-partner/search/business-partner-search.component.html ***!
  \****************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ "page.searchPage" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button type="button" mat-raised-button (click)="openNewCustomer()" *ngIf="hasUpdateAccessRight">\r\n      {{ "global.create" | translate }}\r\n    </button>\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row search-criteria-header">\r\n                  <aw-manage-search-criteria\r\n                    [componentId]="SEARCH_CRITERIA_ID"\r\n                    (onSelected)="loadSearchCriteria($event)"\r\n                    (onSavedAsked)="saveSearchCriteriaAsked()"\r\n                    [objectFromPage]="searchCriteriaToSave"\r\n                    [canChange]="!searchCriteriaCalculated"\r\n                  ></aw-manage-search-criteria>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".businessPartnerCode" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="searchCriteria.customerCode" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".businessPartnerName" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="searchCriteria.customerName" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".businessPartnerCountry" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="countries"\r\n                        [(ngModel)]="searchCriteria.country"\r\n                        [showClear]="true"\r\n                        (keyup.enter)="search()"\r\n                        placeholder="&nbsp;"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".isOperator" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-checkbox\r\n                        class="aw-checkbox"\r\n                        binary="true"\r\n                        [(ngModel)]="searchCriteria.isOperator"\r\n                      ></p-checkbox>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".isOwner" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-checkbox class="aw-checkbox" binary="true" [(ngModel)]="searchCriteria.isOwner"></p-checkbox>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="advanced-criteria" [ngClass]="{ \'display--none\': !showAdvancedSearchCriteria }">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".businessPartnerType" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          [options]="customerTypes"\r\n                          [(ngModel)]="searchCriteria.customerType"\r\n                          [showClear]="true"\r\n                          placeholder="&nbsp;"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group flex--4"></div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row search-criteria-footer">\r\n                  <button mat-button (click)="showAdvancedSearchCriteria = !showAdvancedSearchCriteria">\r\n                    <ng-container *ngIf="showAdvancedSearchCriteria">\r\n                      <mat-icon>remove</mat-icon>\r\n                      {{ "global.collapseCriteria" | translate }}\r\n                    </ng-container>\r\n                    <ng-container *ngIf="!showAdvancedSearchCriteria">\r\n                      <mat-icon>add</mat-icon>\r\n                      {{ "global.expandCriteria" | translate }}\r\n                    </ng-container>\r\n                  </button>\r\n\r\n                  <div class="search-actions">\r\n                    <button\r\n                      type="button"\r\n                      mat-raised-button\r\n                      class="btn-with-spinner"\r\n                      color="primary"\r\n                      (click)="search()"\r\n                      appKeyPress\r\n                      [keyCode]="\'Enter\'"\r\n                      (keyPress)="search()"\r\n                    >\r\n                      <span *ngIf="customerTableDataSource.isLoading" class="lds-hourglass"></span>\r\n                      {{ "global.toSearch" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "results" | translate }} ({{ customerTableDataSource.dataCount }})</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <a-table [dataSource]="customerTableDataSource">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="exportCustomerTable()"\r\n                    *ngIf="customerTableDataSource.hasData && !customerTableDataSource.hasDataSelection"\r\n                  >\r\n                    {{ "global.export" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    type="button"\r\n                    mat-raised-button\r\n                    color="warn"\r\n                    (click)="deleteCustomers(customerTableDataSource.dataSelection)"\r\n                    *ngIf="hasManageAccessRight && customerTableDataSource.hasDataSelection"\r\n                  >\r\n                    {{ "global.delete" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="openCustomers(customerTableDataSource.dataSelection)"\r\n                    *ngIf="customerTableDataSource.hasDataSelection"\r\n                  >\r\n                    {{ "global.open" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef="customerCode" let-rowData="rowData">\r\n                  <a (click)="openCustomer(rowData.customerCode)">{{ rowData.customerCode }}</a>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef="isOperator" let-rowData="rowData">\r\n                  <i class="fa fa-fw fa-check" aria-hidden="true" *ngIf="rowData.isOperator"></i>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef="isOwner" let-rowData="rowData">\r\n                  <i class="fa fa-fw fa-check" aria-hidden="true" *ngIf="rowData.isOwner"></i>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/administration/business-partner/search/business-partner-search.component.ts':
      /*!**************************************************************************************************!*\
  !*** ./src/app/main/administration/business-partner/search/business-partner-search.component.ts ***!
  \**************************************************************************************************/
      /*! exports provided: BusinessPartnerSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'BusinessPartnerSearchComponent',
          function() {
            return BusinessPartnerSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/export.service */ './src/app/shared/services/export.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _business_partner_search_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./business-partner-search.service */ './src/app/main/administration/business-partner/search/business-partner-search.service.ts'
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

        var BusinessPartnerSearchComponent = /** @class */ (function(_super) {
          __extends(BusinessPartnerSearchComponent, _super);
          /* ***************************************************************************/
          function BusinessPartnerSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            businessPartnerSearchService,
            confirmationService,
            exportService,
            propertiesService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.businessPartnerSearchService = businessPartnerSearchService;
            _this.confirmationService = confirmationService;
            _this.exportService = exportService;
            _this.propertiesService = propertiesService;
            _this.SEARCH_CRITERIA_ID =
              _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__[
                'AppConstants'
              ].BUSINESS_PARTNER_SEARCH_CRITERIA_ID;
            _this.onBeforeLoad();
            return _this;
          }
          BusinessPartnerSearchComponent_1 = BusinessPartnerSearchComponent;
          BusinessPartnerSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
          };
          BusinessPartnerSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__['ComponentConstants']
              .ADM_BUSINESS_PARTNER_SEARCH;
          };
          BusinessPartnerSearchComponent.prototype.onBeforeLoad = function() {
            this.init();
            this.initCustomerTableDataSource();
            this.loadReferentialData();
          };
          // //////////////////////////////////////////////////////////////////////////
          BusinessPartnerSearchComponent.prototype.deleteCustomers = function(customers) {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(
                customers.length === 1
                  ? 'confirmDeleteSelectedBusinessPartner'
                  : 'confirmDeleteSelectedBusinessPartners'
              ),
              accept: function() {
                var observables = customers.map(function(customer) {
                  return _this.businessPartnerSearchService.removeBidoCustomer({
                    customerCode: customer.customerCode
                  });
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['forkJoin'])(observables).subscribe({
                  next: function() {
                    _this.customerTableDataSource.deleteDataSelection();
                    _this.messageService.showSuccessMessage(
                      _this.getTranslateKey(
                        customers.length === 1 ? 'successOnDeleteBusinessPartner' : 'successOnDeleteBusinessPartners'
                      )
                    );
                  }
                });
              }
            });
          };
          BusinessPartnerSearchComponent.prototype.exportCustomerTable = function() {
            this.exportService.toExcel(
              this.customerTableDataSource.sanitizedData,
              BusinessPartnerSearchComponent_1.CUSTOMER_TABLE_EXPORT_NAME,
              this.componentData.componentId
            );
          };
          BusinessPartnerSearchComponent.prototype.loadSearchCriteria = function(event) {
            var criteria = event.criteria;
            if (criteria) {
              // FIXME: Do not load criteria first time if we come from stock alert page
              if (!this.componentData.objectId) {
                this.searchCriteria = criteria;
              } else {
                this.componentData.objectId = undefined;
              }
              this.search();
            } else {
              this.clearSearchCriteria();
            }
          };
          BusinessPartnerSearchComponent.prototype.openCustomer = function(objectId) {
            this.businessPartnerSearchService.openCustomer(objectId);
          };
          BusinessPartnerSearchComponent.prototype.openNewCustomer = function() {
            this.businessPartnerSearchService.openCustomer(undefined);
          };
          BusinessPartnerSearchComponent.prototype.openCustomers = function(customers) {
            var _this = this;
            customers.forEach(function(customer) {
              _this.businessPartnerSearchService.openCustomer(customer.customerCode);
            });
          };
          BusinessPartnerSearchComponent.prototype.loadReferentialData = function() {
            var _this = this;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['forkJoin'])({
              countries: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_17__['ListUtils'].isEmpty(this.countries)
                ? this.propertiesService.getCountries()
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['of'])(this.countries),
              customerTypes: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_17__['ListUtils'].isEmpty(
                this.customerTypes
              )
                ? this.propertiesService.getValue(
                    _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__[
                      'GenericPropertyConstants'
                    ].CUSTOMER_TYPE_MAP
                  )
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['of'])(this.customerTypes)
            }).subscribe(function(result) {
              _this.countries = result.countries;
              _this.customerTypes = result.customerTypes;
            });
          };
          BusinessPartnerSearchComponent.prototype.search = function() {
            var _this = this;
            this.customerTableDataSource.setData([]);
            this.customerTableDataSource.isLoading = true;
            this.businessPartnerSearchService
              .findBidoCustomersBySearchCriteria(this.searchCriteria)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(function(result) {
                  return result.list
                    .filter(function(customer) {
                      return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_18__['StringUtils'].isNullOrEmpty(
                        customer.customerCode
                      );
                    })
                    .map(function(customer, i) {
                      var customerRow = {
                        country: _this.formatCountry(customer.country),
                        customerCode: customer.customerCode,
                        customerName: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_18__['StringUtils'].orEmpty(
                          customer.customerName
                        ),
                        customerType: _this.formatCustomerType(customer.customerType),
                        isOperator: customer.isOperator,
                        isOwner: customer.isOwner
                      };
                      return customerRow;
                    });
                }),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['finalize'])(function() {
                  _this.customerTableDataSource.isLoading = false;
                  _super.prototype.differ.call(_this, function() {
                    _super.prototype.scrollToAnchor.call(_this, _this.resultsContainerAnchor);
                  });
                })
              )
              .subscribe(function(customers) {
                _this.customerTableDataSource.setData(customers);
                _this.customerTableDataSource.addReferenceDataToColumn('country', _this.countries);
                _this.customerTableDataSource.addReferenceDataToColumn('customerType', _this.customerTypes);
              });
          };
          BusinessPartnerSearchComponent.prototype.clearSearchCriteria = function() {
            this.searchCriteria = {};
          };
          BusinessPartnerSearchComponent.prototype.saveSearchCriteriaAsked = function() {
            this.searchCriteriaToSave = this.searchCriteria;
          };
          BusinessPartnerSearchComponent.prototype.init = function() {
            this.countries = [];
            this.customerTypes = [];
            this.searchCriteria = {};
            this.showAdvancedSearchCriteria = false;
          };
          BusinessPartnerSearchComponent.prototype.initCustomerTableDataSource = function() {
            this.customerTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                { field: 'customerCode', width: '20%' },
                {
                  field: 'customerName',
                  translateKey: this.getTranslateKey('customerName'),
                  width: '20%'
                },
                {
                  field: 'isOwner',
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__['ColumnAlignment'].CENTER,
                  translateKey: this.getTranslateKey('isOwner'),
                  width: '10%'
                },
                {
                  field: 'isOperator',
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__['ColumnAlignment'].CENTER,
                  translateKey: this.getTranslateKey('isOperator'),
                  width: '10%'
                },
                {
                  field: 'customerType',
                  translateKey: this.getTranslateKey('customerType'),
                  width: '20%'
                },
                {
                  field: 'country',
                  translateKey: this.getTranslateKey('country'),
                  width: '20%'
                }
              ]
            });
          };
          BusinessPartnerSearchComponent.prototype.formatCountry = function(countryKey) {
            if (!!countryKey) {
              var matchingCountry = this.countries.find(function(country) {
                return country.value === countryKey;
              });
              return !!matchingCountry
                ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_18__['StringUtils'].orEmpty(matchingCountry.label)
                : '';
            } else {
              return '';
            }
          };
          BusinessPartnerSearchComponent.prototype.formatCustomerType = function(customerTypeKey) {
            if (!!customerTypeKey) {
              var matchingCustomerType = this.customerTypes.find(function(customerType) {
                return customerType.value === customerTypeKey;
              });
              return !!matchingCustomerType
                ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_18__['StringUtils'].orEmpty(
                    matchingCustomerType.label
                  )
                : '';
            } else {
              return '';
            }
          };
          var BusinessPartnerSearchComponent_1;
          BusinessPartnerSearchComponent.CUSTOMER_TABLE_EXPORT_NAME = 'business-partner-list';
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('resultsContainerAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            BusinessPartnerSearchComponent.prototype,
            'resultsContainerAnchor',
            void 0
          );
          BusinessPartnerSearchComponent = BusinessPartnerSearchComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-business-partner-search',
                template: __webpack_require__(
                  /*! ./business-partner-search.component.html */ './src/app/main/administration/business-partner/search/business-partner-search.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_10__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_11__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_12__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_15__['TabService'],
                _business_partner_search_service__WEBPACK_IMPORTED_MODULE_19__['BusinessPartnerSearchService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__['ConfirmationService'],
                _shared_services_export_service__WEBPACK_IMPORTED_MODULE_9__['ExportService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_13__['PropertiesService']
              ])
            ],
            BusinessPartnerSearchComponent
          );
          return BusinessPartnerSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_16__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/administration/business-partner/search/business-partner-search.service.ts':
      /*!************************************************************************************************!*\
  !*** ./src/app/main/administration/business-partner/search/business-partner-search.service.ts ***!
  \************************************************************************************************/
      /*! exports provided: BusinessPartnerSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'BusinessPartnerSearchService',
          function() {
            return BusinessPartnerSearchService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
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

        var BusinessPartnerSearchService = /** @class */ (function(_super) {
          __extends(BusinessPartnerSearchService, _super);
          function BusinessPartnerSearchService(
            http,
            appConfigService,
            fleetManagementApi,
            serializationService,
            tabService
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.fleetManagementApi = fleetManagementApi;
            _this.serializationService = serializationService;
            _this.tabService = tabService;
            return _this;
          }
          BusinessPartnerSearchService.prototype.openCustomer = function(objectId) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
                  .ADM_BUSINESS_PARTNER_FORM,
              objectId: objectId ? this.serializationService.serialize({ customerCode: objectId }) : undefined,
              openMode: objectId
                ? _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Read
                : _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Create
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          // //////////////////////////////////////////////////////////////////////////
          BusinessPartnerSearchService.prototype.findBidoCustomersBySearchCriteria = function(criteria) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoCustomersBySearchCriteria,
              criteria
            );
          };
          BusinessPartnerSearchService.prototype.removeBidoCustomer = function(bidoCustomerId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.removeBidoCustomer, bidoCustomerId);
          };
          BusinessPartnerSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__['AppConfigService'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__['FleetManagementApi'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_8__['TabService']
              ])
            ],
            BusinessPartnerSearchService
          );
          return BusinessPartnerSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__['AbstractAwHttpService']);

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
      },

    /***/ './src/app/shared/constants/bido-evolution-constants.ts':
      /*!**************************************************************!*\
  !*** ./src/app/shared/constants/bido-evolution-constants.ts ***!
  \**************************************************************/
      /*! exports provided: BidoEvolutionConstants */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'BidoEvolutionConstants', function() {
          return BidoEvolutionConstants;
        });
        var BidoEvolutionConstants = /** @class */ (function() {
          function BidoEvolutionConstants() {}
          BidoEvolutionConstants.CODE_MODIFICATION = 'MOD';
          BidoEvolutionConstants.CODE_EVOLUTION = 'EVOL';
          BidoEvolutionConstants.CODE_SB = 'SB';
          BidoEvolutionConstants.MODULE_HR = 'AD';
          BidoEvolutionConstants.CODE_AD = 'AD';
          return BidoEvolutionConstants;
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
//# sourceMappingURL=administration-business-partner-business-partner-module.js.map
