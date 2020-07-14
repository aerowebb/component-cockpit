(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['administration-attributes-attributes-module'],
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

    /***/ './src/app/main/administration/attributes/attributes.module.ts':
      /*!*********************************************************************!*\
  !*** ./src/app/main/administration/attributes/attributes.module.ts ***!
  \*********************************************************************/
      /*! exports provided: AttributesModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AttributesModule', function() {
          return AttributesModule;
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
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/overlaypanel */ './node_modules/primeng/overlaypanel.js'
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/radiobutton */ './node_modules/primeng/radiobutton.js'
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__
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
        /* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/components/dialog-table/dialog-table.module */ './src/app/shared/components/dialog-table/dialog-table.module.ts'
        );
        /* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/components/dynamic-attributes/dynamic-attributes.module */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts'
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
        /* harmony import */ var _form_attribute_form_list_popup_attribute_form_list_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./form/attribute-form-list-popup/attribute-form-list-popup.component */ './src/app/main/administration/attributes/form/attribute-form-list-popup/attribute-form-list-popup.component.ts'
        );
        /* harmony import */ var _form_attributes_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./form/attributes-form.component */ './src/app/main/administration/attributes/form/attributes-form.component.ts'
        );
        /* harmony import */ var _form_attributes_form_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./form/attributes-form.service */ './src/app/main/administration/attributes/form/attributes-form.service.ts'
        );
        /* harmony import */ var _search_attributes_search_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./search/attributes-search.component */ './src/app/main/administration/attributes/search/attributes-search.component.ts'
        );
        /* harmony import */ var _search_attributes_search_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./search/attributes-search.service */ './src/app/main/administration/attributes/search/attributes-search.service.ts'
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
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6__['OverlayPanelModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_9__['TableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__['TooltipModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__['SelectButtonModule'],
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__['RadioButtonModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_14__['DialogTableModule'],
          _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_15__[
            'DynamicAttributesModule'
          ],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_16__['ModalModule'],
          _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_17__['TableModule']
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _form_attribute_form_list_popup_attribute_form_list_popup_component__WEBPACK_IMPORTED_MODULE_19__[
            'AttributeFormListPopupComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [
          _search_attributes_search_component__WEBPACK_IMPORTED_MODULE_22__['AttributesSearchComponent'],
          _form_attributes_form_component__WEBPACK_IMPORTED_MODULE_20__['AttributesFormComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _search_attributes_search_service__WEBPACK_IMPORTED_MODULE_23__['AttributesSearchService'],
          _form_attributes_form_service__WEBPACK_IMPORTED_MODULE_21__['AttributesFormService']
        ];
        var AttributesModule = /** @class */ (function() {
          function AttributesModule() {}
          AttributesModule = __decorate(
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
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_18__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            AttributesModule
          );
          return AttributesModule;
        })();

        /***/
      },

    /***/ './src/app/main/administration/attributes/form/attribute-form-list-popup/attribute-form-list-popup.component.html':
      /*!************************************************************************************************************************!*\
  !*** ./src/app/main/administration/attributes/form/attribute-form-list-popup/attribute-form-list-popup.component.html ***!
  \************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".valuetitle" | translate }}</div>\r\n  </a-header>\r\n  <a-content>\r\n    <div class="search-dialog-container">\r\n      <div class="section search-criteria-section">\r\n        <div class="grid-row">\r\n          <div class="grid-cell--12">\r\n            <div class="grid-row">\r\n              <div class="form-group required">\r\n                <label class="form-label"> {{ getComponentName() + ".textEn" | translate }}</label>\r\n                <div class="form-control ">\r\n                  <input type="text" class="aw-input" [disabled]="isReadOpenMode" [(ngModel)]="attributeValue.textEn" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="grid-row">\r\n              <div class="form-group required">\r\n                <label class="form-label"> {{ getComponentName() + ".textFr" | translate }} </label>\r\n                <div class="form-control">\r\n                  <input type="text" class="aw-input" [disabled]="isReadOpenMode" [(ngModel)]="attributeValue.textFr" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n    <button type="button" mat-raised-button color="primary" [disabled]="checkEmpty()" (click)="validate()">\r\n      <span>{{ "global.validate" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/administration/attributes/form/attribute-form-list-popup/attribute-form-list-popup.component.ts':
      /*!**********************************************************************************************************************!*\
  !*** ./src/app/main/administration/attributes/form/attribute-form-list-popup/attribute-form-list-popup.component.ts ***!
  \**********************************************************************************************************************/
      /*! exports provided: AttributeFormListPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AttributeFormListPopupComponent',
          function() {
            return AttributeFormListPopupComponent;
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
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
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

        var AttributeFormListPopupComponent = /** @class */ (function(_super) {
          __extends(AttributeFormListPopupComponent, _super);
          function AttributeFormListPopupComponent(sessionService, messageService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Read,
                'AttributeFormListPopupComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.messageService = messageService;
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.setDefaultValue();
            return _this;
          }
          Object.defineProperty(AttributeFormListPopupComponent.prototype, 'setEngineeringData', {
            set: function(attributeValueDTO) {
              if (!!attributeValueDTO) {
                this.attributeValue = attributeValueDTO;
              }
            },
            enumerable: true,
            configurable: true
          });
          AttributeFormListPopupComponent.prototype.ngOnInit = function() {
            this.updateOpenMode(this.openMode);
          };
          AttributeFormListPopupComponent.prototype.checkEmpty = function() {
            return (
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_5__['StringUtils'].isNullOrEmpty(
                this.attributeValue.textEn
              ) ||
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_5__['StringUtils'].isNullOrEmpty(
                this.attributeValue.textFr
              )
            );
          };
          AttributeFormListPopupComponent.prototype.validate = function() {
            if (!!this.attributeValue) {
              this.onValidated.emit(this.attributeValue);
              this.closeDialog();
            }
          };
          AttributeFormListPopupComponent.prototype.setDefaultValue = function() {
            this.attributeValue = {
              attributeId: '',
              attributeValue: '',
              textEn: '',
              textFr: ''
            };
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('attributeValue'),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            AttributeFormListPopupComponent.prototype,
            'setEngineeringData',
            null
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            AttributeFormListPopupComponent.prototype,
            'openMode',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            AttributeFormListPopupComponent.prototype,
            'onValidated',
            void 0
          );
          AttributeFormListPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-attribute-form-list-popup',
                template: __webpack_require__(
                  /*! ./attribute-form-list-popup.component.html */ './src/app/main/administration/attributes/form/attribute-form-list-popup/attribute-form-list-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__['SessionService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__['MessageService']
              ])
            ],
            AttributeFormListPopupComponent
          );
          return AttributeFormListPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/administration/attributes/form/attributes-form.component.html':
      /*!************************************************************************************!*\
  !*** ./src/app/main/administration/attributes/form/attributes-form.component.html ***!
  \************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ pageSubtitle }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="page-actions">\r\n    <button\r\n      *ngIf="isReadOpenMode && hasUpdateAccessRight && isSaveRequired"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="edit()"\r\n    >\r\n      {{ "global.edit" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode && !isCreateOpenMode"\r\n      type="button"\r\n      color="warn"\r\n      mat-raised-button\r\n      (click)="cancel()"\r\n    >\r\n      {{ "global.cancel" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      class="btn-with-spinner"\r\n      color="primary"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="validate()"\r\n    >\r\n      <span class="lds-hourglass" *ngIf="saving"></span>\r\n      {{ "global.save" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item (click)="refresh()">{{ "global.refresh" | translate }}</button>\r\n      <button mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <mat-tab-group animationDuration="0ms" dynamicHeight>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ "home" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ componentName + ".mainInformation" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div class="column">\r\n                    <div class="section">\r\n                      <div class="section-content">\r\n                        <div class="row">\r\n                          <div class="row flex--2">\r\n                            <div class="form-group form-group-type">\r\n                              <label class="form-label"> &nbsp; </label>\r\n\r\n                              <div class="form-control aw-selectbutton-wrapper">\r\n                                <p-selectButton\r\n                                  [(ngModel)]="selectedAttributeCategory"\r\n                                  [options]="searchCategoryList"\r\n                                  (onChange)="checkAttributeCategory()"\r\n                                  [disabled]="!enableSelectButton"\r\n                                ></p-selectButton>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class="form-group flex--2">\r\n                            <label class="form-label"> &nbsp; </label>\r\n\r\n                            <div class="form-control aw-selectbutton-wrapper">\r\n                              <p-selectButton\r\n                                [(ngModel)]="selectedValueType"\r\n                                [options]="valueTypeList"\r\n                                [disabled]="isReadOpenMode || attributesFormsInput.isStandard"\r\n                              ></p-selectButton>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="section">\r\n                      <div class="section-content">\r\n                        <div class="column">\r\n                          <div class="row">\r\n                            <div class="form-group form-group-category">\r\n                              <label class="form-label">\r\n                                {{ componentData.componentId + ".category" | translate }}</label\r\n                              >\r\n                              <div class="form-control">\r\n                                <p-dropdown\r\n                                  class="aw-dropdown fixed-width"\r\n                                  [(ngModel)]="attributesFormsInput.attributeCategory"\r\n                                  placeholder="&nbsp;"\r\n                                  [options]="isEngineering ? engineeringCategoryList : fleetCategoryList"\r\n                                  [disabled]="isReadOpenMode || isWriteOpenMode"\r\n                                ></p-dropdown>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class="row">\r\n                            <div class="form-group " [ngClass]="{ required: isCreateOpenMode }">\r\n                              <label class="form-label">\r\n                                {{ componentData.componentId + ".nameEn" | translate }}\r\n                              </label>\r\n                              <div class="form-control">\r\n                                <input\r\n                                  type="text"\r\n                                  class="aw-input"\r\n                                  [disabled]="isReadOpenMode || isWriteOpenMode"\r\n                                  [(ngModel)]="attributesFormsInput.attributeNameEn"\r\n                                />\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class="form-group " [ngClass]="{ required: isCreateOpenMode }">\r\n                              <label class="form-label">\r\n                                {{ componentData.componentId + ".nameFr" | translate }}\r\n                              </label>\r\n                              <div class="form-control">\r\n                                <input\r\n                                  type="text"\r\n                                  class="aw-input"\r\n                                  [disabled]="isReadOpenMode || isWriteOpenMode"\r\n                                  [(ngModel)]="attributesFormsInput.attributeNameFr"\r\n                                />\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class="row">\r\n                            <div class="form-group">\r\n                              <label class="form-label">\r\n                                {{ componentData.componentId + ".descriptionEn" | translate }}\r\n                              </label>\r\n                              <div class="form-control text-area">\r\n                                <textarea\r\n                                  class="aw-textarea"\r\n                                  [rows]="3"\r\n                                  pInputTextarea\r\n                                  autoResize="autoResize"\r\n                                  [(ngModel)]="attributesFormsInput.attributeDescriptionEn"\r\n                                  [disabled]="isReadOpenMode || attributesFormsInput.isStandard"\r\n                                ></textarea>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class="form-group">\r\n                              <label class="form-label">\r\n                                {{ componentData.componentId + ".descriptionFr" | translate }}\r\n                              </label>\r\n                              <div class="form-control text-area">\r\n                                <textarea\r\n                                  class="aw-textarea"\r\n                                  [rows]="3"\r\n                                  pInputTextarea\r\n                                  autoResize="autoResize"\r\n                                  [(ngModel)]="attributesFormsInput.attributeDescriptionFr"\r\n                                  [disabled]="isReadOpenMode || attributesFormsInput.isStandard"\r\n                                ></textarea>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class="section">\r\n                      <div class="section-content">\r\n                        <div class="row"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab *ngIf="showValuesManagement()">\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + ".valueTitle" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".importTitle" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div class="section" *ngIf="!isCreateOpenMode">\r\n                    <div class="section-content">\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label"></label>\r\n                          <div class="form-control">\r\n                            <span\r\n                              (click)="openTemplate(loadTemplate())"\r\n                              style="cursor: pointer; text-decoration: underline; color: blue"\r\n                            >\r\n                              {{ loadTemplate() }}\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ componentData.componentId + ".fileToImport" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <label class="form-label"> </label>\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="fileName"\r\n                              disabled\r\n                              style="border-bottom-color: #000"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label"> </label>\r\n                          <div class="form-control ">\r\n                            <label class="form-label"> </label>\r\n                            <div class="grid-cell--2" style="padding-top: 2.7em; width: 17%">\r\n                              <p-fileUpload\r\n                                #fileUploader\r\n                                *ngIf="!isReadOpenMode"\r\n                                chooseLabel=""\r\n                                title="Upload"\r\n                                ngClass="defaultUpload"\r\n                                name="document[]"\r\n                                customUpload="true"\r\n                                mode="basic"\r\n                                auto="true"\r\n                                (uploadHandler)="uploadDocument($event, fileUploader)"\r\n                              ></p-fileUpload>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <button\r\n                          *ngIf="!isReadOpenMode"\r\n                          [disabled]="checkImport()"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="import()"\r\n                        >\r\n                          <i class="fa fa-fw fa-plus" aria-hidden="true"></i>\r\n                          <span>{{ getComponentName() + ".importFile" | translate }}</span>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Attributes values management : engineering table -->\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 *ngIf="isEngineering" class="grid-cell-title">\r\n                      {{ "global.results" | translate }}\r\n                      ({{ engineeringTableDataSource ? engineeringTableDataSource.dataCount : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div class="section">\r\n                    <div class="section-content">\r\n                      <div class="row">\r\n                        <a-table [dataSource]="engineeringTableDataSource" *ngIf="isEngineering">\r\n                          <ng-template tableActionsDef>\r\n                            <button\r\n                              *ngIf="!isReadOpenMode && engineeringTableDataSource.hasDataSelection"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              color="warn"\r\n                              (click)="deleteEngineeringList()"\r\n                            >\r\n                              {{ "global.delete" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="!isReadOpenMode && engineeringTableDataSource.dataSelectionCount === 1"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="editEngineeringList()"\r\n                            >\r\n                              {{ "global.edit" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="!isReadOpenMode && !engineeringTableDataSource.hasDataSelection"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="createEngineeringList()"\r\n                            >\r\n                              {{ "global.add" | translate }}\r\n                            </button>\r\n                          </ng-template>\r\n                        </a-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- Attributes values management : fleet table -->\r\n\r\n                  <div class="section">\r\n                    <h4 *ngIf="!isEngineering" class="section-title">\r\n                      {{ "global.results" | translate }}\r\n                      ({{ fleetTableDataSource ? fleetTableDataSource.dataCount : 0 }})\r\n                    </h4>\r\n                    <div class="section-content">\r\n                      <div class="row">\r\n                        <a-table [dataSource]="fleetTableDataSource" *ngIf="!isEngineering">\r\n                          <ng-template tableActionsDef>\r\n                            <button\r\n                              *ngIf="!isReadOpenMode && fleetTableDataSource.hasDataSelection"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              color="warn"\r\n                              (click)="deleteFleetList()"\r\n                            >\r\n                              {{ "global.delete" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="!isReadOpenMode && fleetTableDataSource.dataSelectionCount === 1"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="editFleetList()"\r\n                            >\r\n                              {{ "global.edit" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="!isReadOpenMode && !fleetTableDataSource.hasDataSelection"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="createFleetList()"\r\n                            >\r\n                              {{ "global.add" | translate }}\r\n                            </button>\r\n                          </ng-template>\r\n                        </a-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n  <aw-attribute-form-list-popup\r\n    *ngIf="showListPopup"\r\n    [(display)]="showListPopup"\r\n    [openMode]="dialogOpenMode"\r\n    [attributeValue]="attributePopupDataInput"\r\n    (onValidated)="onAddEngineeringdata($event)"\r\n  >\r\n  </aw-attribute-form-list-popup>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/administration/attributes/form/attributes-form.component.scss':
      /*!************************************************************************************!*\
  !*** ./src/app/main/administration/attributes/form/attributes-form.component.scss ***!
  \************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '::ng-deep .defaultUpload .ui-fileupload-choose .pi-plus:before {\n  content: "\\e934"; }\n\n::ng-deep .defaultUpload .ui-button {\n  color: #007ad9;\n  background: none;\n  border: none;\n  font-size: 19px; }\n\n::ng-deep .defaultUpload .ui-fileupload-choose:not(.ui-state-disabled):hover {\n  color: #007ad9;\n  background: none;\n  border: none;\n  font-size: 19px; }\n\n:host .form-group-type {\n  flex: initial !important; }\n\n:host .form-group-category {\n  max-width: 18rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hZG1pbmlzdHJhdGlvbi9hdHRyaWJ1dGVzL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGFkbWluaXN0cmF0aW9uXFxhdHRyaWJ1dGVzXFxmb3JtXFxhdHRyaWJ1dGVzLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFHTSxnQkFBZ0IsRUFBQTs7QUFNdEI7RUFFSyxjQUFhO0VBQ2IsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUxwQjtFQVFJLGNBQWE7RUFDYixnQkFBZTtFQUNmLFlBQVc7RUFDWCxlQUFlLEVBQUE7O0FBS25CO0VBRUksd0JBQXdCLEVBQUE7O0FBRjVCO0VBS0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FkbWluaXN0cmF0aW9uL2F0dHJpYnV0ZXMvZm9ybS9hdHRyaWJ1dGVzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOjpuZy1kZWVwIC5kZWZhdWx0VXBsb2Fke1xyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSAge1xyXG4gICAgIC5waS1wbHVzOmJlZm9yZXtcclxuICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZGVmYXVsdFVwbG9hZHtcclxuICAudWktYnV0dG9uIHtcclxuICAgICBjb2xvcjojMDA3YWQ5O1xyXG4gICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgICBib3JkZXI6bm9uZTtcclxuICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgfVxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZTpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlcntcclxuICAgIGNvbG9yOiMwMDdhZDk7XHJcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAuZm9ybS1ncm91cC10eXBlIHtcclxuICAgIGZsZXg6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmZvcm0tZ3JvdXAtY2F0ZWdvcnkge1xyXG4gICAgbWF4LXdpZHRoOiAxOHJlbTtcclxuICB9XHJcbn0iXX0= */';

        /***/
      },

    /***/ './src/app/main/administration/attributes/form/attributes-form.component.ts':
      /*!**********************************************************************************!*\
  !*** ./src/app/main/administration/attributes/form/attributes-form.component.ts ***!
  \**********************************************************************************/
      /*! exports provided: AttributesFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AttributesFormComponent',
          function() {
            return AttributesFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_accessible_functions_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/accessible-functions-constants */ './src/app/shared/constants/accessible-functions-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_constants_report_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/constants/report-constants */ './src/app/shared/constants/report-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
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
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/utils/array-utils */ './src/app/shared/utils/array-utils.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _search_attributes_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../search/attributes-search.component */ './src/app/main/administration/attributes/search/attributes-search.component.ts'
        );
        /* harmony import */ var _attributes_form_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./attributes-form.service */ './src/app/main/administration/attributes/form/attributes-form.service.ts'
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

        var AttributeCategory;
        (function(AttributeCategory) {
          AttributeCategory[(AttributeCategory['Engineering'] = 1)] = 'Engineering';
          AttributeCategory[(AttributeCategory['Fleet'] = 2)] = 'Fleet';
        })(AttributeCategory || (AttributeCategory = {}));
        var ValueType;
        (function(ValueType) {
          ValueType['Text'] = 'Text';
          ValueType['Boolean'] = 'Boolean';
          ValueType['Date'] = 'Date';
          ValueType['EnumeratedValueList'] = 'List';
        })(ValueType || (ValueType = {}));
        var AttributesFormComponent = /** @class */ (function(_super) {
          __extends(AttributesFormComponent, _super);
          function AttributesFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            attributesFormService,
            propertiesService,
            confirmationService,
            translateService,
            sessionService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.attributesFormService = attributesFormService;
            _this.propertiesService = propertiesService;
            _this.confirmationService = confirmationService;
            _this.translateService = translateService;
            _this.sessionService = sessionService;
            _this.componentName = 'AttributesFormComponent';
            _this.currentEngineeringData = undefined;
            _this.currentFleetData = undefined;
            _this.fleetData = undefined;
            _this.currentEngineeringIndex = -1;
            _this.currentFleetIndex = -1;
            _this.engineeringValueList = [];
            _this.fleetValueList = [];
            _this.pageSubtitle = undefined;
            _this.attributePopupDataInput = undefined;
            _this.fleetDataInput = undefined;
            _this.initEngineeringTableDataSource();
            _this.initFleetTableDataSource();
            _this.setAttributeCategoryList();
            _this.setValueTypeList();
            _this.initSearchObject();
            return _this;
          }
          AttributesFormComponent.prototype.initSearchObject = function() {
            this.selectedAttributeCategory = AttributeCategory.Engineering;
            this.selectedValueType = ValueType.Text;
          };
          AttributesFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__['ComponentConstants']
              .ADM_ATTRIBUTES_FORM;
          };
          AttributesFormComponent.prototype.showValuesManagement = function() {
            return this.selectedValueType === ValueType.EnumeratedValueList;
          };
          Object.defineProperty(AttributesFormComponent.prototype, 'isSaveRequired', {
            get: function() {
              if (!!this.attributesFormsInput) {
                return this.attributesFormsInput.isStandard ? this.showValuesManagement() : true;
              }
              return true;
            },
            enumerable: true,
            configurable: true
          });
          AttributesFormComponent.prototype.initEngineeringTableDataSource = function() {
            this.engineeringTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'textEn',
                  translateKey: this.getTranslateKey('textEn')
                },
                {
                  field: 'textFr',
                  translateKey: this.getTranslateKey('textFr')
                }
              ],
              data: []
            });
          };
          AttributesFormComponent.prototype.initFleetTableDataSource = function() {
            this.fleetTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'textEn',
                  translateKey: this.getTranslateKey('textEn')
                },
                {
                  field: 'textFr',
                  translateKey: this.getTranslateKey('textFr')
                }
              ],
              data: []
            });
          };
          AttributesFormComponent.prototype.setValueTypeList = function() {
            var _this = this;
            var textKey = this.getTranslateKey('text');
            var booleanKey = this.getTranslateKey('boolean');
            var dateKey = this.getTranslateKey('date');
            var listKey = this.getTranslateKey('list');
            this.translateService.get([textKey, booleanKey, dateKey, listKey]).subscribe(function(results) {
              var textLabel = !!results ? results[textKey] : 'Text';
              var booleanLabel = !!results ? results[booleanKey] : 'Boolean';
              var dateLabel = !!results ? results[dateKey] : 'Date';
              var listLabel = !!results ? results[listKey] : 'Enumerated Values List';
              _this.valueTypeList = [
                { label: textLabel, value: ValueType.Text },
                { label: booleanLabel, value: ValueType.Boolean },
                { label: dateLabel, value: ValueType.Date },
                { label: listLabel, value: ValueType.EnumeratedValueList }
              ];
            });
          };
          AttributesFormComponent.prototype.setAttributeCategoryList = function() {
            var _this = this;
            var engineeringKey = this.getTranslateKey('engineering');
            var fleetKey = this.getTranslateKey('fleet');
            this.translateService.get([engineeringKey, fleetKey]).subscribe(function(results) {
              var engineeringLabel = !!results ? results[engineeringKey] : 'Engineering';
              var fleetLabel = !!results ? results[fleetKey] : 'Fleet';
              _this.searchCategoryList = [];
              _this.sessionService
                .getAccessibleFunctions([
                  _shared_constants_accessible_functions_constants__WEBPACK_IMPORTED_MODULE_3__[
                    'AccessibleFunctionsConstants'
                  ].ATTRIBUTES_TRANSACTION
                ])
                .subscribe(function(categoryResults) {
                  var categories =
                    categoryResults.accessibleFunctionsPerEntryComponent[
                      _shared_constants_accessible_functions_constants__WEBPACK_IMPORTED_MODULE_3__[
                        'AccessibleFunctionsConstants'
                      ].ATTRIBUTES_TRANSACTION
                    ];
                  if (
                    categories.includes(
                      _search_attributes_search_component__WEBPACK_IMPORTED_MODULE_20__['AttributesSearchComponent']
                        .ENGINEERING_TAB
                    )
                  ) {
                    _this.searchCategoryList = _this.searchCategoryList.concat({
                      label: engineeringLabel,
                      value: AttributeCategory.Engineering
                    });
                  }
                  if (
                    categories.includes(
                      _search_attributes_search_component__WEBPACK_IMPORTED_MODULE_20__['AttributesSearchComponent']
                        .FLEET_TAB
                    )
                  ) {
                    _this.searchCategoryList = _this.searchCategoryList.concat({
                      label: fleetLabel,
                      value: AttributeCategory.Fleet
                    });
                  }
                });
            });
          };
          AttributesFormComponent.prototype.getTranslateKey = function(key) {
            return _super.prototype.getTranslateKey.call(this, key, this.componentName);
          };
          AttributesFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.updateOpenMode(this.componentData.openMode);
            this.saving = false;
            if (!!this.componentData.objectId) {
              this.enableSelectButton = false;
              this.isEngineering = this.serializationService.deserialize(this.componentData.objectId).isEngineering;
              if (this.isEngineering) {
                this.selectedAttributeCategory = AttributeCategory.Engineering;
                this.loadEngineeringDropDowns();
                this.loadEngineeringAttributesData();
              } else {
                this.selectedAttributeCategory = AttributeCategory.Fleet;
                this.loadFleetDropDowns();
                this.loadFleetAttributesData();
              }
            } else {
              this.isEngineering = true;
              this.enableSelectButton = true;
              this.loadEngineeringDropDowns();
              this.loadFleetDropDowns();
            }
            this.initObjects();
            this.selectModule = 'engineering';
            this.attributesFormsInput.attributeType = 'Text';
            this.showListPopup = false;
            this.attributesFormsInput.attributeCategory = '1-all';
          };
          AttributesFormComponent.prototype.reset = function() {
            this.attributesFormsInput.attributeCategory = '1-all';
            this.attributesFormsInput.attributeNameFr = undefined;
            this.attributesFormsInput.attributeNameEn = undefined;
            this.attributesFormsInput.attributeType = 'Text';
            this.attributesFormsInput.attributeDescriptionEn = undefined;
            this.attributesFormsInput.attributeDescriptionFr = undefined;
          };
          AttributesFormComponent.prototype.checkAttributeCategory = function() {
            this.reset();
            this.isEngineering = this.selectedAttributeCategory === AttributeCategory.Engineering;
          };
          AttributesFormComponent.prototype.checkModuleEngineering = function() {
            this.reset();
            this.isEngineering = true;
          };
          AttributesFormComponent.prototype.checkModuleFleet = function() {
            this.reset();
            this.isEngineering = false;
          };
          AttributesFormComponent.prototype.loadEngineeringDropDowns = function() {
            var _this = this;
            this.engineeringCategoryList = [];
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                  .MCH_ATTRIBUTE_CATEGORY_MAP
              )
              .subscribe(function(results) {
                _this.engineeringCategoryList = results;
              });
          };
          AttributesFormComponent.prototype.loadFleetDropDowns = function() {
            var _this = this;
            this.fleetCategoryList = [];
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                  .ATTRIBUTE_CATEGORY_MAP
              )
              .subscribe(function(results) {
                _this.fleetCategoryList = results;
              });
          };
          AttributesFormComponent.prototype.initObjects = function() {
            this.fileName = '';
            this.attributesFormsInput = {};
            this.enginerringattributeFormInput = {
              attributeId: '',
              attributeNameEn: undefined,
              attributeNameFr: undefined,
              bireAttributeValueDatas: []
            };
            this.fleetattributeFormInput = {
              attributeId: '',
              attributeNameEn: undefined,
              attributeNameFr: undefined,
              bidoAttributeValueDatas: []
            };
          };
          AttributesFormComponent.prototype.cancel = function() {
            if (this.isCreateOpenMode) {
              this.initObjects();
            } else {
              this.initObjects();
              this.componentData.openMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read;
              this.ngOnInit();
              this.updateOpenMode(
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read
              );
            }
          };
          AttributesFormComponent.prototype.edit = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Write
            );
          };
          AttributesFormComponent.prototype.refresh = function() {
            this.ngOnInit();
          };
          AttributesFormComponent.prototype.loadPageSubtitle = function() {
            this.pageSubtitle =
              this.translateService.currentLang === 'en'
                ? this.attributesFormsInput.attributeNameEn
                : this.attributesFormsInput.attributeNameFr;
          };
          AttributesFormComponent.prototype.loadEngineeringAttributesData = function() {
            var _this = this;
            if (!!this.componentData.objectId) {
              this.engineeringValueList = [];
              var data = this.serializationService.deserialize(this.componentData.objectId);
              if (data.engineeringAttributeId) {
                this.engineeringAttributeId = {
                  attributeId: data.engineeringAttributeId.attributeId
                };
                this.attributesFormService
                  .getEnginerringAttribiuteData(this.engineeringAttributeId)
                  .subscribe(function(results) {
                    if (results) {
                      // Sort attribute list as per text english
                      if (!!results.bireAttributeValueDatas) {
                        results.bireAttributeValueDatas.sort(
                          _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_17__['ArrayUtils'].compareValues('textEn')
                        );
                      }
                      _this.enginerringattributeFormInput = results;
                      _this.loadEnginerringListData(_this.enginerringattributeFormInput);
                      _this.attributesFormsInput = {
                        attributeDescriptionEn: results.attributeDescriptionEn,
                        attributeDescriptionFr: results.attributeDescriptionFr,
                        attributeCategory: results.attributeCategory,
                        attributeType: results.attributeType,
                        isStandard: results.isStandard,
                        attributeNameEn: results.attributeNameEn,
                        attributeNameFr: results.attributeNameFr
                      };
                      _this.loadPageSubtitle();
                      if (results.attributeType) {
                        _this.selectedValueType = results.attributeType;
                      }
                      if (_this.attributesFormsInput.attributeNameEn) {
                        _this.displayComponentContext(
                          _this.attributesFormsInput.attributeNameEn,
                          _this.isCreateOpenMode
                        );
                      }
                    }
                  });
              }
            }
          };
          AttributesFormComponent.prototype.loadFleetAttributesData = function() {
            var _this = this;
            if (!!this.componentData.objectId) {
              this.fleetValueList = [];
              var data = this.serializationService.deserialize(this.componentData.objectId);
              if (data.fleetAttributeId) {
                this.fleetAttributeId = {
                  attributeId: data.fleetAttributeId.attributeId
                };
                this.attributesFormService.getFleetAttribiuteData(this.fleetAttributeId).subscribe(function(results) {
                  if (results) {
                    // Sort attribute list as per text english
                    if (!!results.bidoAttributeValueDatas) {
                      results.bidoAttributeValueDatas.sort(
                        _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_17__['ArrayUtils'].compareValues('textEn')
                      );
                    }
                    _this.fleetattributeFormInput = results;
                    _this.loadFleetListData(_this.fleetattributeFormInput);
                    _this.attributesFormsInput = {
                      attributeDescriptionEn: results.attributeDescriptionEn,
                      attributeDescriptionFr: results.attributeDescriptionFr,
                      attributeCategory: results.attributeCategory,
                      attributeType: results.attributeType,
                      isStandard: results.isStandard,
                      attributeNameEn: results.attributeNameEn,
                      attributeNameFr: results.attributeNameFr
                    };
                    _this.loadPageSubtitle();
                    if (results.attributeType) {
                      _this.selectedValueType = results.attributeType;
                    }
                    if (_this.attributesFormsInput.attributeNameEn) {
                      _this.displayComponentContext(_this.attributesFormsInput.attributeNameEn, _this.isCreateOpenMode);
                    }
                  }
                });
              }
            }
          };
          AttributesFormComponent.prototype.loadEnginerringListData = function(engineeringData) {
            if (!!engineeringData.bireAttributeValueDatas) {
              this.engineeringValueList = engineeringData.bireAttributeValueDatas;
              this.engineeringTableDataSource.setData(
                this.engineeringValueList.map(function(data) {
                  var row = {
                    textEn: data.textEn,
                    textFr: data.textFr,
                    obj: data
                  };
                  return row;
                })
              );
            }
          };
          AttributesFormComponent.prototype.loadFleetListData = function(fleetData) {
            if (!!fleetData.bidoAttributeValueDatas) {
              this.fleetValueList = fleetData.bidoAttributeValueDatas;
              this.fleetTableDataSource.setData(
                this.fleetValueList.map(function(data) {
                  var row = {
                    textEn: data.textEn,
                    textFr: data.textFr,
                    obj: data
                  };
                  return row;
                })
              );
            }
          };
          AttributesFormComponent.prototype.createEngineeringList = function() {
            this.currentEngineeringIndex = -1;
            this.attributePopupDataInput = undefined;
            this.currentEngineeringData = undefined;
            this.showListPopup = true;
            this.dialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Create;
          };
          AttributesFormComponent.prototype.createFleetList = function() {
            this.currentFleetIndex = -1;
            this.attributePopupDataInput = undefined;
            this.currentFleetData = undefined;
            this.showListPopup = true;
            this.dialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Create;
          };
          AttributesFormComponent.prototype.editEngineeringList = function() {
            var _this = this;
            if (
              !!this.engineeringTableDataSource.dataSelection &&
              this.engineeringTableDataSource.dataSelectionCount === 1
            ) {
              this.currentEngineeringIndex = this.engineeringTableDataSource.data.findIndex(function(x) {
                return (
                  x.obj.textEn === _this.engineeringTableDataSource.dataSelection[0].textEn &&
                  x.obj.textFr === _this.engineeringTableDataSource.dataSelection[0].textFr
                );
              });
              this.attributePopupDataInput = {
                attributeId: this.engineeringTableDataSource.dataSelection[0].obj.attributeId,
                attributeValue: this.engineeringTableDataSource.dataSelection[0].obj.attributeValue,
                textEn: this.engineeringTableDataSource.dataSelection[0].textEn,
                textFr: this.engineeringTableDataSource.dataSelection[0].textFr
              };
              this.showListPopup = true;
              this.dialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Write;
            }
          };
          AttributesFormComponent.prototype.editFleetList = function() {
            var _this = this;
            if (!!this.fleetTableDataSource.dataSelection && this.fleetTableDataSource.dataSelectionCount === 1) {
              this.currentFleetIndex = this.fleetTableDataSource.data.findIndex(function(x) {
                return (
                  x.textEn === _this.fleetTableDataSource.dataSelection[0].textEn &&
                  x.textFr === _this.fleetTableDataSource.dataSelection[0].textFr
                );
              });
              this.attributePopupDataInput = {
                attributeId: this.fleetTableDataSource.dataSelection[0].obj.attributeId,
                attributeValue: this.fleetTableDataSource.dataSelection[0].obj.attributeValue,
                textEn: this.fleetTableDataSource.dataSelection[0].textEn,
                textFr: this.fleetTableDataSource.dataSelection[0].textFr
              };
              this.showListPopup = true;
              this.dialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Write;
            }
          };
          AttributesFormComponent.prototype.onAddEngineeringdata = function(attributeValue) {
            var _this = this;
            var isDuplicateData = false;
            if (this.isEngineering) {
              if (!!attributeValue && !!attributeValue.attributeId) {
                isDuplicateData = this.engineeringTableDataSource.dataSrc.some(function(element) {
                  return (
                    element.obj.attributeValue !== attributeValue.attributeValue &&
                    element.textEn === attributeValue.textEn &&
                    element.textFr === attributeValue.textFr
                  );
                });
              } else {
                isDuplicateData = this.engineeringTableDataSource.dataSrc.some(function(element, index) {
                  return (
                    _this.currentEngineeringIndex !== index &&
                    element.textEn === attributeValue.textEn &&
                    element.textFr === attributeValue.textFr
                  );
                });
              }
              if (isDuplicateData) {
                this.messageService.showWarningMessage(this.getTranslateKey('duplicatesValue'));
              } else {
                this.addEditEngineeringData(attributeValue);
                this.engineeringTableDataSource.dataSelection = [];
              }
            } else {
              if (!!attributeValue && !!attributeValue.attributeId) {
                isDuplicateData = this.fleetValueList.some(function(element) {
                  return (
                    element.attributeValue !== attributeValue.attributeValue &&
                    element.textEn === attributeValue.textEn &&
                    element.textFr === attributeValue.textFr
                  );
                });
              } else {
                isDuplicateData = this.fleetValueList.some(function(element, index) {
                  return (
                    _this.currentEngineeringIndex !== index &&
                    element.textEn === attributeValue.textEn &&
                    element.textFr === attributeValue.textFr
                  );
                });
              }
              if (isDuplicateData) {
                this.messageService.showWarningMessage(this.getTranslateKey('duplicatesValue'));
              } else {
                this.addEditFleetData(attributeValue);
                this.fleetTableDataSource.dataSelection = [];
              }
            }
          };
          AttributesFormComponent.prototype.addFleetData = function(engineeringData) {
            var row = {
              textEn: engineeringData.textEn,
              textFr: engineeringData.textFr,
              obj: engineeringData
            };
            return row;
          };
          AttributesFormComponent.prototype.addData = function(engineeringData) {
            var row = {
              textEn: engineeringData.textEn,
              textFr: engineeringData.textFr,
              obj: engineeringData
            };
            return row;
          };
          AttributesFormComponent.prototype.deleteEngineeringList = function() {
            var _this = this;
            var partialMessageKey =
              this.engineeringTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedValues'
                : 'confirmDeleteSelectedValue';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.engineeringValueList = _this.engineeringValueList.filter(function(list) {
                  return !_this.engineeringTableDataSource.dataSelection.some(function(row) {
                    return !!list.textEn && !!row.textEn && list.textEn === row.textEn;
                  });
                });
                _this.engineeringTableDataSource.setData(
                  _this.engineeringTableDataSource.data.filter(function(data) {
                    return !_this.engineeringTableDataSource.dataSelection.some(function(row) {
                      return data.textEn === row.textEn;
                    });
                  })
                );
                _this.engineeringTableDataSource.dataSelection = [];
              }
            });
          };
          AttributesFormComponent.prototype.deleteFleetList = function() {
            var _this = this;
            var partialMessageKey =
              this.fleetTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedValues'
                : 'confirmDeleteSelectedValue';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.fleetValueList = _this.fleetValueList.filter(function(list) {
                  return !_this.fleetTableDataSource.dataSelection.some(function(row) {
                    return !!list.textEn && !!row.textEn && list.textEn === row.textEn;
                  });
                });
                _this.fleetTableDataSource.setData(
                  _this.fleetTableDataSource.data.filter(function(data) {
                    return !_this.fleetTableDataSource.dataSelection.some(function(row) {
                      return data.textEn === row.textEn;
                    });
                  })
                );
                _this.fleetTableDataSource.dataSelection = [];
              }
            });
          };
          AttributesFormComponent.prototype.isEngineeringAttribute = function() {
            return this.selectedAttributeCategory === AttributeCategory.Engineering;
          };
          AttributesFormComponent.prototype.validate = function() {
            var _this = this;
            this.saving = true;
            if (this.isEngineeringAttribute()) {
              this.engineeringValueList.forEach(function(value) {
                value.attributeId = !!_this.componentData.objectId ? _this.engineeringAttributeId.attributeId : '';
              });
              this.enginerringattributeFormInput = {
                attributeId: !!this.componentData.objectId ? this.engineeringAttributeId.attributeId : '',
                attributeDescriptionEn: this.attributesFormsInput.attributeDescriptionEn,
                attributeDescriptionFr: this.attributesFormsInput.attributeDescriptionFr,
                attributeCategory: this.attributesFormsInput.attributeCategory,
                attributeType: this.selectedValueType,
                attributeNameFr: this.attributesFormsInput.attributeNameFr,
                attributeNameEn: this.attributesFormsInput.attributeNameEn,
                bireAttributeValueDatas: this.engineeringValueList,
                isStandard: this.attributesFormsInput.isStandard
              };
              if (
                _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__['StringUtils'].isNullOrEmpty(
                  this.enginerringattributeFormInput.attributeNameEn &&
                    this.enginerringattributeFormInput.attributeNameFr
                )
              ) {
                this.saving = false;
                this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
              } else {
                this.attributesFormService.saveFormEnginerringAttributes(this.enginerringattributeFormInput).subscribe(
                  function(results) {
                    _this.saving = false;
                    if (!!_this.enginerringattributeFormInput.attributeNameEn) {
                      var data = {
                        isEngineering: true,
                        engineeringAttributeId: results
                      };
                      _this.componentData.objectId = _this.serializationService.serialize(data);
                      _this.loadEngineeringAttributesData();
                      _this.updateOpenMode(
                        _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Write
                      );
                      _this.displayComponentContext(
                        _this.enginerringattributeFormInput.attributeNameEn,
                        _this.isCreateOpenMode
                      );
                      _this.componentData.openMode =
                        _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Write;
                    }
                    _this.messageService.showSuccessMessage(
                      _this.getTranslateKey(!!_this.componentData.objectId ? 'onUpdateSave' : 'onCreateSave')
                    );
                  },
                  function(err) {
                    // FAILED
                    _this.saving = false;
                    _this.messageService.showErrorMessage(err.error.errorDetail);
                  }
                );
              }
            } else {
              this.fleetValueList.forEach(function(value) {
                value.attributeId = !!_this.componentData.objectId ? _this.fleetAttributeId.attributeId : '';
              });
              this.fleetattributeFormInput = {
                attributeId: !!this.componentData.objectId ? this.fleetAttributeId.attributeId : '',
                attributeDescriptionEn: this.attributesFormsInput.attributeDescriptionEn,
                attributeDescriptionFr: this.attributesFormsInput.attributeDescriptionFr,
                attributeCategory: this.attributesFormsInput.attributeCategory,
                // attributeType: this.attributesFormsInput.attributeType,
                attributeType: this.selectedValueType,
                attributeNameFr: this.attributesFormsInput.attributeNameFr,
                attributeNameEn: this.attributesFormsInput.attributeNameEn,
                bidoAttributeValueDatas: this.fleetValueList,
                isStandard: this.attributesFormsInput.isStandard
              };
              if (
                _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__['StringUtils'].isNullOrEmpty(
                  this.fleetattributeFormInput.attributeNameEn && this.fleetattributeFormInput.attributeNameFr
                )
              ) {
                this.saving = false;
                this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
              } else {
                this.attributesFormService.saveFormfleetAttributes(this.fleetattributeFormInput).subscribe(
                  function(results) {
                    _this.saving = false;
                    if (!!_this.fleetattributeFormInput.attributeNameEn) {
                      var data = {
                        isEngineering: false,
                        fleetAttributeId: results
                      };
                      _this.componentData.objectId = _this.serializationService.serialize(data);
                      _this.loadFleetAttributesData();
                      _this.updateOpenMode(
                        _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Write
                      );
                      _this.displayComponentContext(
                        _this.fleetattributeFormInput.attributeNameEn,
                        _this.isCreateOpenMode
                      );
                    }
                    _this.messageService.showSuccessMessage(
                      _this.getTranslateKey(!!_this.componentData.objectId ? 'onUpdateSave' : 'onCreateSave')
                    );
                  },
                  function(err) {
                    // FAILED
                    _this.saving = false;
                    _this.messageService.showErrorMessage(err.error.errorDetail);
                  }
                );
              }
            }
          };
          // IMPORT
          AttributesFormComponent.prototype.openTemplate = function(templateName) {
            var _this = this;
            var partialMessageKey = this.getTranslateKey('openReport');
            this.confirmationService.confirm({
              interpolateParams: { 'openReport.reportName': templateName },
              messageKey: partialMessageKey,
              accept: function() {
                var templateService = _this.isEngineering
                  ? _this.attributesFormService.getEnginerringImportTemplate()
                  : _this.attributesFormService.getFleetImportTemplate();
                templateService.subscribe(function(result) {
                  _this.downLoadFiles(result, templateName);
                });
              }
            });
          };
          AttributesFormComponent.prototype.downLoadFiles = function(docFile, docName) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_18__['FileUtils'].downloadFile(docFile, docName);
          };
          AttributesFormComponent.prototype.loadTemplate = function() {
            return 'TEMPLATE_ATTRIBIUTE_VALUE.xls';
          };
          AttributesFormComponent.prototype.uploadDocument = function(event, fileUploader) {
            var _this = this;
            if (event.files) {
              var file_1 = event.files[0];
              {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_18__['FileUtils'].getFileContentAsBase64(
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
          AttributesFormComponent.prototype.checkImport = function() {
            return !this.fileName ? true : false;
          };
          AttributesFormComponent.prototype.getFirstErrorMessage = function(report) {
            var errorMsg;
            if (report && report.messages && report.messages.length > 0) {
              report.messages.forEach(function(message) {
                if (
                  message.severity ===
                  _shared_constants_report_constants__WEBPACK_IMPORTED_MODULE_6__['ReportConstants'].SEVERITY_ERROR
                ) {
                  errorMsg = message.message;
                  return;
                }
              });
            }
            return errorMsg;
          };
          AttributesFormComponent.prototype.import = function() {
            var _this = this;
            if (this.fileName !== '') {
              var partialMessageKey = this.getTranslateKey('importData');
              this.confirmationService.confirm({
                interpolateParams: { 'importData.fileName': this.fileName },
                contextKeys: [this.getTranslateKey('importData.line1')],
                messageKey: partialMessageKey,
                accept: function() {
                  // Importing Excel file
                  if (_this.isEngineering && !!_this.fileName && !!_this.file.docFile) {
                    _this.enginerringattributeFormInput.attributeType = _this.attributesFormsInput.attributeType;
                    var excelInput = {
                      fileName: _this.fileName,
                      excelSource: _this.file.docFile,
                      attributeId: _this.engineeringAttributeId.attributeId,
                      bireAttributeDTO: _this.enginerringattributeFormInput
                    };
                    _this.attributesFormService.importEnginerringAttributeValue(excelInput).subscribe(function(result) {
                      var errorMsg = _this.getFirstErrorMessage(result);
                      if (errorMsg) {
                        _this.messageService.showRawErrorMessage(errorMsg);
                      } else {
                        _this.loadEngineeringAttributesData();
                        _this.messageService.showSuccessMessage(
                          _this.getTranslateKey(!!_this.componentData.objectId ? 'onUpdateSave' : 'onCreateSave')
                        );
                      }
                    });
                  }
                  if (!_this.isEngineering && !!_this.fileName && !!_this.file.docFile) {
                    _this.fleetattributeFormInput.attributeType = _this.attributesFormsInput.attributeType;
                    var excelInput = {
                      fileName: _this.fileName,
                      excelSource: _this.file.docFile,
                      attributeId: _this.fleetAttributeId.attributeId,
                      bidoAttributeDTO: _this.fleetattributeFormInput
                    };
                    _this.attributesFormService.importFleetAttributeValue(excelInput).subscribe(
                      function(result) {
                        var errorMsg = _this.getFirstErrorMessage(result);
                        if (errorMsg) {
                          _this.messageService.showRawErrorMessage(errorMsg);
                        } else {
                          _this.loadFleetAttributesData();
                          _this.messageService.showSuccessMessage(_this.getTranslateKey('valuesImported'));
                        }
                      },
                      function(err) {
                        // FAILED
                        _this.messageService.showErrorMessage(err.error.errorDetail);
                      }
                    );
                  }
                }
              });
            }
          };
          AttributesFormComponent.prototype.addEditEngineeringData = function(attributeValue) {
            if (this.currentEngineeringIndex === -1) {
              this.engineeringTableDataSource.addData([this.addData(attributeValue)]);
              this.engineeringValueList = __spread(this.engineeringValueList, [attributeValue]);
            } else {
              this.engineeringTableDataSource.replaceData(
                this.engineeringTableDataSource.dataSelection[0],
                this.addData(attributeValue)
              );
              this.engineeringTableDataSource.dataSelection = [];
              this.engineeringValueList[this.currentEngineeringIndex] = attributeValue;
            }
          };
          AttributesFormComponent.prototype.addEditFleetData = function(attributeValue) {
            if (this.currentFleetIndex === -1) {
              this.fleetTableDataSource.addData([this.addData(attributeValue)]);
              this.fleetValueList = __spread(this.fleetValueList, [attributeValue]);
            } else {
              this.fleetTableDataSource.replaceData(
                this.fleetTableDataSource.dataSelection[0],
                this.addData(attributeValue)
              );
              this.fleetValueList[this.currentFleetIndex] = attributeValue;
            }
          };
          AttributesFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-attributes-form',
                template: __webpack_require__(
                  /*! ./attributes-form.component.html */ './src/app/main/administration/attributes/form/attributes-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./attributes-form.component.scss */ './src/app/main/administration/attributes/form/attributes-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_13__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_15__['TabService'],
                _attributes_form_service__WEBPACK_IMPORTED_MODULE_21__['AttributesFormService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__['PropertiesService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__['ConfirmationService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_14__['SessionService']
              ])
            ],
            AttributesFormComponent
          );
          return AttributesFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_16__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/administration/attributes/form/attributes-form.service.ts':
      /*!********************************************************************************!*\
  !*** ./src/app/main/administration/attributes/form/attributes-form.service.ts ***!
  \********************************************************************************/
      /*! exports provided: AttributesFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AttributesFormService', function() {
          return AttributesFormService;
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
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_api_standard_import_ps_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/standard-import-ps-api */ './src/app/shared/api/standard-import-ps-api.ts'
        );
        /* harmony import */ var _shared_api_standard_import_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/api/standard-import.api */ './src/app/shared/api/standard-import.api.ts'
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

        var AttributesFormService = /** @class */ (function(_super) {
          __extends(AttributesFormService, _super);
          function AttributesFormService(
            http,
            appConfigService,
            productStructureManagementApi,
            fleetManagementApi,
            standardImportPsApi,
            standardImportApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.standardImportPsApi = standardImportPsApi;
            _this.standardImportApi = standardImportApi;
            return _this;
          }
          AttributesFormService.prototype.saveFormEnginerringAttributes = function(category) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.saveBireAttribute, category);
          };
          AttributesFormService.prototype.saveFormfleetAttributes = function(category) {
            return _super.prototype.post.call(this, this.fleetManagementApi.saveBidoAttribute, category);
          };
          AttributesFormService.prototype.getEnginerringAttribiuteData = function(selectedAttribute) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireAttribute,
              selectedAttribute
            );
          };
          AttributesFormService.prototype.getFleetAttribiuteData = function(selectedAttribute) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoAttribute, selectedAttribute);
          };
          AttributesFormService.prototype.getEnginerringImportTemplate = function() {
            return _super.prototype.post.call(this, this.standardImportPsApi.getImportAttributeValuesBireXLS);
          };
          AttributesFormService.prototype.getFleetImportTemplate = function() {
            return _super.prototype.post.call(this, this.standardImportApi.getImportAttributeValuesBidoXLS);
          };
          AttributesFormService.prototype.importEnginerringAttributeValue = function(file) {
            return _super.prototype.post.call(this, this.standardImportPsApi.importAttributeValuesBireFromExcel, file);
          };
          AttributesFormService.prototype.importFleetAttributeValue = function(file) {
            return _super.prototype.post.call(this, this.standardImportApi.importattributevaluesfromexcel, file);
          };
          AttributesFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__['AppConfigService'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__['FleetManagementApi'],
                _shared_api_standard_import_ps_api__WEBPACK_IMPORTED_MODULE_4__['StandardImportPsApi'],
                _shared_api_standard_import_api__WEBPACK_IMPORTED_MODULE_5__['StandardImportApi']
              ])
            ],
            AttributesFormService
          );
          return AttributesFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/administration/attributes/search/attributes-search.component.html':
      /*!****************************************************************************************!*\
  !*** ./src/app/main/administration/attributes/search/attributes-search.component.html ***!
  \****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ "page.searchPage" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button type="button" mat-raised-button (click)="openNewAttributeForm()" *ngIf="hasUpdateAccessRight">\r\n      {{ "global.create" | translate }}\r\n    </button>\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <!-- All attributes table -->\r\n\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 *ngIf="selectedType === component.TYPE_ALL" class="grid-cell-title">\r\n                  {{ "global.list" | translate }} ({{ allTableDataSource ? allTableDataSource.dataCount : 0 }})\r\n                </h3>\r\n                <h3 *ngIf="selectedType === component.TYPE_ENGINEERING" class="grid-cell-title">\r\n                  {{ "global.list" | translate }} ({{\r\n                    engineeringTableDataSource ? engineeringTableDataSource.dataCount : 0\r\n                  }})\r\n                </h3>\r\n                <h3 *ngIf="selectedType === component.TYPE_FLEET" class="grid-cell-title">\r\n                  {{ "global.list" | translate }} ({{ fleetTableDataSource ? fleetTableDataSource.dataCount : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="row">\r\n                <div class="form-group form-group-type">\r\n                  <label class="form-label"> &nbsp; </label>\r\n                  <div class="form-control aw-selectbutton-wrapper">\r\n                    <p-selectButton [options]="types" [(ngModel)]="selectedType"></p-selectButton>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="form-group form-group-category" *ngIf="selectedType === component.TYPE_ENGINEERING">\r\n                  <label class="form-label"> &nbsp; </label>\r\n                  <div class="form-control">\r\n                    <p-dropdown\r\n                      class="aw-dropdown fixed-width"\r\n                      [(ngModel)]="categoryEngineeringValue"\r\n                      placeholder="&nbsp;"\r\n                      [options]="engineeringCategoryList"\r\n                      (onChange)="reloadEngineeringAttributeList()"\r\n                    ></p-dropdown>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="form-group form-group-category" *ngIf="selectedType === component.TYPE_FLEET">\r\n                  <label class="form-label"> &nbsp; </label>\r\n                  <div class="form-control">\r\n                    <p-dropdown\r\n                      class="aw-dropdown fixed-width"\r\n                      [(ngModel)]="categoryFleetValue"\r\n                      [options]="fleetCategoryList"\r\n                      placeholder="&nbsp;"\r\n                      (onChange)="reloadFleetAttributeList()"\r\n                    >\r\n                    </p-dropdown>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <a-table [dataSource]="allTableDataSource" *ngIf="selectedType === component.TYPE_ALL">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    *ngIf="allTableDataSource.hasData && !allTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="exportAllTable()"\r\n                  >\r\n                    {{ "global.export" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf="hasManageAccessRight && allTableDataSource.hasDataSelection && isStandardCheckEnginerring()"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    color="warn"\r\n                    (click)="deleteSelectedAllAttributeConfirm()"\r\n                  >\r\n                    {{ "global.delete" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf="allTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="openSelectedAttribute()"\r\n                  >\r\n                    {{ "global.open" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef="isStandard" let-rowData="rowData">\r\n                  <i\r\n                    *ngIf="rowData.isStandard !== null && rowData.isStandard"\r\n                    class="fa fa-fw fa-check"\r\n                    aria-hidden="true"\r\n                  >\r\n                  </i>\r\n                </ng-template>\r\n              </a-table>\r\n\r\n              <!-- Engineering attributes table -->\r\n\r\n              <a-table [dataSource]="engineeringTableDataSource" *ngIf="selectedType === component.TYPE_ENGINEERING">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    *ngIf="engineeringTableDataSource.hasData && !engineeringTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="exportEngineeringTable()"\r\n                  >\r\n                    {{ "global.export" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf="\r\n                      hasManageAccessRight &&\r\n                      engineeringTableDataSource.hasDataSelection &&\r\n                      isStandardCheckEnginerring()\r\n                    "\r\n                    type="button"\r\n                    mat-raised-button\r\n                    color="warn"\r\n                    (click)="deleteSelectedEngineeringAttribute()"\r\n                  >\r\n                    {{ "global.delete" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf="engineeringTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="openSelectedAttribute()"\r\n                  >\r\n                    {{ "global.open" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef="isStandard" let-rowData="rowData">\r\n                  <i\r\n                    *ngIf="rowData.isStandard !== null && rowData.isStandard"\r\n                    class="fa fa-fw fa-check"\r\n                    aria-hidden="true"\r\n                  >\r\n                  </i>\r\n                </ng-template>\r\n              </a-table>\r\n\r\n              <!-- Fleet attributes table -->\r\n\r\n              <a-table [dataSource]="fleetTableDataSource" *ngIf="selectedType === component.TYPE_FLEET">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    *ngIf="fleetTableDataSource.hasData && !fleetTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="exportFleetTable()"\r\n                  >\r\n                    {{ "global.export" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf="hasManageAccessRight && fleetTableDataSource.hasDataSelection && isStandardCheckFleet()"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    color="warn"\r\n                    (click)="deleteSelectedFleetAttribute()"\r\n                  >\r\n                    {{ "global.delete" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf="fleetTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="openSelectedAttribute()"\r\n                  >\r\n                    {{ "global.open" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef="isStandard" let-rowData="rowData">\r\n                  <i\r\n                    *ngIf="rowData.isStandard !== null && rowData.isStandard"\r\n                    class="fa fa-fw fa-check"\r\n                    aria-hidden="true"\r\n                  >\r\n                  </i>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/administration/attributes/search/attributes-search.component.scss':
      /*!****************************************************************************************!*\
  !*** ./src/app/main/administration/attributes/search/attributes-search.component.scss ***!
  \****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .form-group-type {\n  flex: initial !important; }\n\n:host .form-group-category {\n  max-width: 18rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hZG1pbmlzdHJhdGlvbi9hdHRyaWJ1dGVzL3NlYXJjaC9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcYWRtaW5pc3RyYXRpb25cXGF0dHJpYnV0ZXNcXHNlYXJjaFxcYXR0cmlidXRlcy1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx3QkFBd0IsRUFBQTs7QUFGNUI7RUFLSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vYWRtaW5pc3RyYXRpb24vYXR0cmlidXRlcy9zZWFyY2gvYXR0cmlidXRlcy1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmZvcm0tZ3JvdXAtdHlwZSB7XHJcbiAgICBmbGV4OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5mb3JtLWdyb3VwLWNhdGVnb3J5IHtcclxuICAgIG1heC13aWR0aDogMThyZW07XHJcbiAgfVxyXG59Il19 */';

        /***/
      },

    /***/ './src/app/main/administration/attributes/search/attributes-search.component.ts':
      /*!**************************************************************************************!*\
  !*** ./src/app/main/administration/attributes/search/attributes-search.component.ts ***!
  \**************************************************************************************/
      /*! exports provided: AttributesSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AttributesSearchComponent',
          function() {
            return AttributesSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_accessible_functions_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/accessible-functions-constants */ './src/app/shared/constants/accessible-functions-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
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
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _attributes_search_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./attributes-search.service */ './src/app/main/administration/attributes/search/attributes-search.service.ts'
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

        var PossibleTypes;
        (function(PossibleTypes) {
          PossibleTypes['All'] = 'all';
          PossibleTypes['Engineering'] = 'engineering';
          PossibleTypes['Fleet'] = 'fleet';
        })(PossibleTypes || (PossibleTypes = {}));
        var AttributesSearchComponent = /** @class */ (function(_super) {
          __extends(AttributesSearchComponent, _super);
          function AttributesSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            attributesSearchService,
            confirmationService,
            exportService,
            propertiesService,
            sessionService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.attributesSearchService = attributesSearchService;
            _this.confirmationService = confirmationService;
            _this.exportService = exportService;
            _this.propertiesService = propertiesService;
            _this.sessionService = sessionService;
            _this.accessibleCategories = [];
            _this.component = AttributesSearchComponent_1;
            // load categories dropdown
            _this.initAllTableDataSource();
            _this.initEngineeringTableDataSource();
            _this.initFleetTableDataSource();
            _this.engineeringCategoryList = [];
            _this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                  .MCH_ATTRIBUTE_CATEGORY_MAP
              )
              .subscribe(function(results) {
                _this.engineeringCategoryList = results;
              });
            _this.fleetCategoryList = [];
            _this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                  .ATTRIBUTE_CATEGORY_MAP
              )
              .subscribe(function(results) {
                _this.fleetCategoryList = results;
              });
            _this.isLoading = false;
            return _this;
          }
          AttributesSearchComponent_1 = AttributesSearchComponent;
          AttributesSearchComponent.prototype.ngOnInit = function() {
            var _this = this;
            this.categoryEngineeringValue = '1-all';
            this.categoryFleetValue = '1-all';
            this.filtersVisible = false;
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
            this.sessionService
              .getAccessibleFunctions([
                _shared_constants_accessible_functions_constants__WEBPACK_IMPORTED_MODULE_3__[
                  'AccessibleFunctionsConstants'
                ].ATTRIBUTES_TRANSACTION
              ])
              .subscribe(function(results) {
                _this.accessibleCategories =
                  results.accessibleFunctionsPerEntryComponent[
                    _shared_constants_accessible_functions_constants__WEBPACK_IMPORTED_MODULE_3__[
                      'AccessibleFunctionsConstants'
                    ].ATTRIBUTES_TRANSACTION
                  ];
                _this.types = [{ label: 'All', value: 'all' }];
                _this.selectedType = 'all';
                if (_this.accessibleCategories.includes(AttributesSearchComponent_1.ENGINEERING_TAB)) {
                  _this.types = _this.types.concat({ label: 'Engineering', value: 'engineering' });
                }
                if (_this.accessibleCategories.includes(AttributesSearchComponent_1.FLEET_TAB)) {
                  _this.types = _this.types.concat({ label: 'Fleet', value: 'fleet' });
                }
                _this.reloadAllAttributeList();
              });
            this.reloadEngineeringAttributeList();
            this.reloadFleetAttributeList();
          };
          AttributesSearchComponent.prototype.initEngineeringTableDataSource = function() {
            this.engineeringTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                { field: 'attributeNameEn', translateKey: this.getTranslateKey('attributeNameEn'), width: '30%' },
                { field: 'attributeCategory', translateKey: this.getTranslateKey('attributeCategory'), width: '20%' },
                {
                  field: 'attributeDescriptionEn',
                  translateKey: this.getTranslateKey('attributeDescriptionEn'),
                  width: '20%'
                },
                { field: 'attributeType', translateKey: this.getTranslateKey('attributeType'), width: '20%' },
                { field: 'isStandard', translateKey: this.getTranslateKey('isStandard'), width: '10%' }
              ],
              data: []
            });
          };
          AttributesSearchComponent.prototype.initFleetTableDataSource = function() {
            this.fleetTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                { field: 'attributeNameEn', translateKey: this.getTranslateKey('attributeNameEn'), width: '30%' },
                { field: 'attributeCategory', translateKey: this.getTranslateKey('attributeCategory'), width: '20%' },
                {
                  field: 'attributeDescriptionEn',
                  translateKey: this.getTranslateKey('attributeDescriptionEn'),
                  width: '20%'
                },
                { field: 'attributeType', translateKey: this.getTranslateKey('attributeType'), width: '20%' },
                { field: 'isStandard', translateKey: this.getTranslateKey('isStandard'), width: '10%' }
              ],
              data: []
            });
          };
          AttributesSearchComponent.prototype.initAllTableDataSource = function() {
            this.allTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                { field: 'attributeNameEn', translateKey: this.getTranslateKey('attributeNameEn'), width: '30%' },
                { field: 'attributeCategory', translateKey: this.getTranslateKey('attributeCategory'), width: '20%' },
                {
                  field: 'attributeDescriptionEn',
                  translateKey: this.getTranslateKey('attributeDescriptionEn'),
                  width: '20%'
                },
                { field: 'attributeType', translateKey: this.getTranslateKey('attributeType'), width: '20%' },
                { field: 'isStandard', translateKey: this.getTranslateKey('isStandard'), width: '10%' }
              ],
              data: []
            });
          };
          AttributesSearchComponent.prototype.reloadAllAttributeList = function() {
            var _this = this;
            this.initAllTableDataSource();
            if (this.accessibleCategories.includes(AttributesSearchComponent_1.ENGINEERING_TAB)) {
              this.attributesSearchService.getAllEngineeringAttributeList().subscribe(function(resultsBire) {
                if (resultsBire) {
                  _this.allTableDataSource.addData(resultsBire);
                  _this.allBireAttributes = resultsBire;
                  _this.allTableDataSource.dataSrc.forEach(function(attribute) {
                    _this.engineeringCategoryList.forEach(function(value) {
                      if (value.value === attribute.attributeCategory) {
                        attribute.attributeCategory = value.label;
                        return;
                      }
                    });
                  });
                  _this.allTableDataSource.update();
                }
              });
            }
            if (this.accessibleCategories.includes(AttributesSearchComponent_1.FLEET_TAB)) {
              this.attributesSearchService.getAllFleetAttributeList().subscribe(function(resultsBido) {
                _this.isLoading = false;
                if (resultsBido) {
                  _this.allTableDataSource.addData(resultsBido);
                  _this.allBidoAttributes = resultsBido;
                  _this.allTableDataSource.dataSrc.forEach(function(attribute) {
                    _this.fleetCategoryList.forEach(function(value) {
                      if (value.value === attribute.attributeCategory) {
                        attribute.attributeCategory = value.label;
                        return;
                      }
                    });
                  });
                  _this.allTableDataSource.data.forEach(function(attribute) {
                    _this.fleetCategoryList.forEach(function(value) {
                      if (value.value === attribute.attributeCategory) {
                        attribute.attributeCategory = value.label;
                        return;
                      }
                    });
                  });
                  _this.allTableDataSource.update();
                }
              });
            }
            this.allTableDataSource.dataSelection = [];
          };
          AttributesSearchComponent.prototype.toggleFilterVisibility = function() {
            this.filtersVisible = !this.filtersVisible;
          };
          AttributesSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__['ComponentConstants']
              .ADM_ATTRIBUTES_SEARCH;
          };
          AttributesSearchComponent.prototype.resetSearchCriteria = function() {
            this.categoryEngineeringValue = '1-all';
            this.categoryFleetValue = '1-all';
            this.reloadEngineeringAttributeList();
            this.reloadFleetAttributeList();
          };
          AttributesSearchComponent.prototype.reloadEngineeringAttributeList = function() {
            var _this = this;
            this.isLoading = true;
            _super.prototype.scrollToAnchor.call(this, this.resultsContainerAnchor);
            this.attributesSearchService
              .getEngineeringAttributeList(this.categoryEngineeringValue)
              .subscribe(function(results) {
                _this.isLoading = false;
                if (results) {
                  _this.engineeringTableDataSource.setData(results);
                  _this.engineeringTableDataSource.dataSrc.forEach(function(attribute) {
                    _this.engineeringCategoryList.forEach(function(value) {
                      if (value.value === attribute.attributeCategory) {
                        attribute.attributeCategory = value.label;
                        return;
                      }
                    });
                  });
                  _this.engineeringTableDataSource.update();
                }
              });
          };
          AttributesSearchComponent.prototype.reloadFleetAttributeList = function() {
            var _this = this;
            this.isLoading = true;
            _super.prototype.scrollToAnchor.call(this, this.resultsContainerAnchor);
            this.attributesSearchService.getFleetAttributeList(this.categoryFleetValue).subscribe(function(results) {
              _this.isLoading = false;
              if (results) {
                _this.fleetTableDataSource.setData(results);
                _this.fleetTableDataSource.dataSelection = [];
                _this.fleetTableDataSource.dataSrc.forEach(function(attribute) {
                  _this.fleetCategoryList.forEach(function(value) {
                    if (value.value === attribute.attributeCategory) {
                      attribute.attributeCategory = value.label;
                      return;
                    }
                  });
                });
                _this.fleetTableDataSource.update();
              }
            });
          };
          AttributesSearchComponent.prototype.openNewAttributeForm = function() {
            this.openEngineeringAttribute(
              undefined,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Create
            );
          };
          AttributesSearchComponent.prototype.openSelectedAttribute = function() {
            var _this = this;
            if (this.selectedType === PossibleTypes.Fleet) {
              this.fleetTableDataSource.dataSelection.forEach(function(attribute) {
                if (!!attribute) {
                  if (
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_17__['StringUtils'].isNullOrEmpty(
                      attribute.attributeId
                    )
                  ) {
                    _this.messageService.showWarningMessage(_this.getTranslateKey('errorOnMissingAttributeId'));
                  } else {
                    _this.openFleetAttribute(
                      attribute.attributeId,
                      _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Read
                    );
                  }
                }
              });
            }
            if (this.selectedType === PossibleTypes.Engineering) {
              this.engineeringTableDataSource.dataSelection.forEach(function(attribute) {
                if (!!attribute) {
                  if (
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_17__['StringUtils'].isNullOrEmpty(
                      attribute.attributeId
                    )
                  ) {
                    _this.messageService.showWarningMessage(_this.getTranslateKey('errorOnMissingAttributeId'));
                  } else {
                    _this.openEngineeringAttribute(
                      attribute.attributeId,
                      _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Read
                    );
                  }
                }
              });
            }
            if (this.selectedType === PossibleTypes.All) {
              this.allTableDataSource.dataSelection.forEach(function(attribute) {
                if (!!attribute) {
                  if (
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_17__['StringUtils'].isNullOrEmpty(
                      attribute.attributeId
                    )
                  ) {
                    _this.messageService.showWarningMessage(_this.getTranslateKey('errorOnMissingAttributeId'));
                  } else {
                    if (!!attribute.bireAttributeValueDatas) {
                      _this.openEngineeringAttribute(
                        attribute.attributeId,
                        _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Read
                      );
                    } else {
                      _this.openFleetAttribute(
                        attribute.attributeId,
                        _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Read
                      );
                    }
                  }
                }
              });
              this.allTableDataSource.dataSelection.forEach(function(attribute) {
                if (!!attribute) {
                  if (
                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_17__['StringUtils'].isNullOrEmpty(
                      attribute.attributeId
                    )
                  ) {
                    _this.messageService.showWarningMessage(_this.getTranslateKey('errorOnMissingAttributeId'));
                  } else {
                    if (!!attribute.bireAttributeValueDatas) {
                      _this.openEngineeringAttribute(
                        attribute.attributeId,
                        _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Read
                      );
                    } else {
                      _this.openFleetAttribute(
                        attribute.attributeId,
                        _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Read
                      );
                    }
                  }
                }
              });
            }
          };
          AttributesSearchComponent.prototype.openEngineeringAttribute = function(objectId, openMode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__['ComponentConstants']
                  .ADM_ATTRIBUTES_FORM,
              openMode: openMode
            };
            if (!!objectId) {
              var attributeFormId = {
                attributeId: objectId
              };
              var obj = {
                isEngineering: true,
                engineeringAttributeId: attributeFormId
              };
              data.objectId = this.serializationService.serialize(obj);
            }
            var labelKey =
              'transaction.' +
              _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__['ComponentConstants']
                .ADM_ATTRIBUTES_FORM;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AttributesSearchComponent.prototype.openFleetAttribute = function(objectId, openMode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__['ComponentConstants']
                  .ADM_ATTRIBUTES_FORM,
              openMode: openMode
            };
            if (!!objectId) {
              var attributeFormId = {
                attributeId: objectId
              };
              var obj = {
                isEngineering: false,
                fleetAttributeId: attributeFormId
              };
              data.objectId = this.serializationService.serialize(obj);
            }
            var labelKey =
              'transaction.' +
              _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__['ComponentConstants']
                .ADM_ATTRIBUTES_FORM;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AttributesSearchComponent.prototype.deleteSelectedAllAttributeConfirm = function() {
            var _this = this;
            var deleteMessage =
              this.allTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedAttributes'
                : 'confirmDeleteSelectedAttribute';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(deleteMessage),
              accept: function() {
                _this.deleteSelectedAllAttribute();
              }
            });
          };
          AttributesSearchComponent.prototype.deleteSelectedAllAttribute = function() {
            var _this = this;
            var removeBireAttributeIdList = [];
            var removeBidoAttributeIdList = [];
            this.allTableDataSource.dataSelection.forEach(function(attribute) {
              // find among bire attributes
              _this.allBireAttributes.forEach(function(bireAttribute) {
                if (attribute.attributeId === bireAttribute.attributeId) {
                  var attributeID = {
                    attributeId: attribute.attributeId
                  };
                  removeBireAttributeIdList.push(attributeID);
                }
              });
              // find among bido attributes
              _this.allBidoAttributes.forEach(function(bidoAttribute) {
                if (attribute.attributeId === bidoAttribute.attributeId) {
                  var attributeID = {
                    attributeId: attribute.attributeId
                  };
                  removeBidoAttributeIdList.push(attributeID);
                }
              });
            });
            if (removeBireAttributeIdList.length === 0 && removeBidoAttributeIdList.length === 0) {
              return;
            }
            var bire$ = this.attributesSearchService.removeEngineeringAttributes(removeBireAttributeIdList);
            var bido$ = this.attributesSearchService.removeFleetAttributes(removeBidoAttributeIdList);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['forkJoin'])([bire$, bido$]).subscribe(
              function() {
                _this.messageService.showSuccessMessage(_this.getTranslateKey('onSuccessDeleteAttributes'));
                _this.reloadEngineeringAttributeList();
                _this.reloadFleetAttributeList();
                _this.reloadAllAttributeList();
                _this.allTableDataSource.dataSelection = [];
                _this.fleetTableDataSource.dataSelection = [];
                _this.engineeringTableDataSource.dataSelection = [];
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnDeleteAttributes'));
              }
            );
          };
          AttributesSearchComponent.prototype.deleteSelectedEngineeringAttribute = function() {
            var _this = this;
            var deleteMessage =
              this.engineeringTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedAttributes'
                : 'confirmDeleteSelectedAttribute';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(deleteMessage),
              accept: function() {
                var removeAttributeIdList = [];
                _this.engineeringTableDataSource.dataSelection.forEach(function(attribute) {
                  if (!!attribute.attributeId && !!removeAttributeIdList) {
                    var attributeID = {
                      attributeId: attribute.attributeId
                    };
                    removeAttributeIdList.push(attributeID);
                  }
                });
                _this.attributesSearchService.removeEngineeringAttributes(removeAttributeIdList).subscribe(
                  function(results) {
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('onSuccessDeleteAttributes'));
                    _this.reloadEngineeringAttributeList();
                    _this.reloadAllAttributeList();
                  },
                  function() {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnDeleteAttributes'));
                  }
                );
                _this.engineeringTableDataSource.dataSelection = [];
                _this.allTableDataSource.dataSelection = [];
              }
            });
          };
          AttributesSearchComponent.prototype.deleteSelectedFleetAttribute = function() {
            var _this = this;
            var deleteMessage =
              this.fleetTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedAttributes'
                : 'confirmDeleteSelectedAttribute';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(deleteMessage),
              accept: function() {
                var removeAttributeIdList = [];
                _this.fleetTableDataSource.dataSelection.forEach(function(attribute) {
                  if (!!attribute.attributeId && !!removeAttributeIdList) {
                    var attributeID = {
                      attributeId: attribute.attributeId
                    };
                    removeAttributeIdList.push(attributeID);
                  }
                });
                _this.attributesSearchService.removeFleetAttributes(removeAttributeIdList).subscribe(
                  function(results) {
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('onSuccessDeleteAttributes'));
                    _this.reloadFleetAttributeList();
                    _this.reloadAllAttributeList();
                  },
                  function() {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnDeleteAttributes'));
                  }
                );
                _this.fleetTableDataSource.dataSelection = [];
                _this.allTableDataSource.dataSelection = [];
              }
            });
          };
          AttributesSearchComponent.prototype.exportAllTable = function() {
            var temp = [];
            this.allTableDataSource.dataSrc.forEach(function(data) {
              var obj = {
                attributeNameEn: data.attributeNameEn,
                attributeDescriptionEn: data.attributeDescriptionEn,
                attributeType: data.attributeType,
                isStandard: data.isStandard
              };
              temp.push(obj);
            });
            this.exportService.toExcel(
              temp,
              AttributesSearchComponent_1.ALL_TABLE_EXPORT_NAME,
              this.componentData.componentId
            );
          };
          AttributesSearchComponent.prototype.exportEngineeringTable = function() {
            var temp = [];
            this.engineeringTableDataSource.dataSrc.forEach(function(data) {
              var obj = {
                attributeNameEn: data.attributeNameEn,
                attributeDescriptionEn: data.attributeDescriptionEn,
                attributeType: data.attributeType,
                isStandard: data.isStandard
              };
              temp.push(obj);
            });
            this.exportService.toExcel(
              temp,
              AttributesSearchComponent_1.ENGINERRING_TABLE_EXPORT_NAME,
              this.componentData.componentId
            );
          };
          AttributesSearchComponent.prototype.exportFleetTable = function() {
            var temp = [];
            this.fleetTableDataSource.dataSrc.forEach(function(data) {
              var obj = {
                attributeNameEn: data.attributeNameEn,
                attributeDescriptionEn: data.attributeDescriptionEn,
                attributeType: data.attributeType,
                isStandard: data.isStandard
              };
              temp.push(obj);
            });
            this.exportService.toExcel(
              temp,
              AttributesSearchComponent_1.FLEET_TABLE_EXPORT_NAME,
              this.componentData.componentId
            );
          };
          AttributesSearchComponent.prototype.isStandardCheckEnginerring = function() {
            return this.engineeringTableDataSource.dataSelection.every(function(data) {
              return !data.isStandard;
            });
          };
          AttributesSearchComponent.prototype.isStandardCheckFleet = function() {
            return this.fleetTableDataSource.dataSelection.every(function(data) {
              return !data.isStandard;
            });
          };
          var AttributesSearchComponent_1;
          AttributesSearchComponent.ENGINERRING_TABLE_EXPORT_NAME = 'engineering-attribute-list';
          AttributesSearchComponent.FLEET_TABLE_EXPORT_NAME = 'fleet-attribute-list';
          AttributesSearchComponent.ALL_TABLE_EXPORT_NAME = 'all-attribute-list';
          AttributesSearchComponent.ENGINEERING_TAB = 'ENGINEERING_TAB';
          AttributesSearchComponent.FLEET_TAB = 'FLEET_TAB';
          AttributesSearchComponent.TYPE_ALL = PossibleTypes.All;
          AttributesSearchComponent.TYPE_ENGINEERING = PossibleTypes.Engineering;
          AttributesSearchComponent.TYPE_FLEET = PossibleTypes.Fleet;
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('resultsContainerAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            AttributesSearchComponent.prototype,
            'resultsContainerAnchor',
            void 0
          );
          AttributesSearchComponent = AttributesSearchComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-attributes-search',
                template: __webpack_require__(
                  /*! ./attributes-search.component.html */ './src/app/main/administration/attributes/search/attributes-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./attributes-search.component.scss */ './src/app/main/administration/attributes/search/attributes-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_13__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_15__['TabService'],
                _attributes_search_service__WEBPACK_IMPORTED_MODULE_18__['AttributesSearchService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_7__['ConfirmationService'],
                _shared_services_export_service__WEBPACK_IMPORTED_MODULE_8__['ExportService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__['PropertiesService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_14__['SessionService']
              ])
            ],
            AttributesSearchComponent
          );
          return AttributesSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_16__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/administration/attributes/search/attributes-search.service.ts':
      /*!************************************************************************************!*\
  !*** ./src/app/main/administration/attributes/search/attributes-search.service.ts ***!
  \************************************************************************************/
      /*! exports provided: AttributesSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AttributesSearchService',
          function() {
            return AttributesSearchService;
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

        var AttributesSearchService = /** @class */ (function(_super) {
          __extends(AttributesSearchService, _super);
          function AttributesSearchService(http, appConfigService, productStructureManagementApi, fleetManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.fleetManagementApi = fleetManagementApi;
            return _this;
          }
          AttributesSearchService.prototype.getAllEngineeringAttributeList = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBireAttributes);
          };
          AttributesSearchService.prototype.getEngineeringAttributeList = function(category) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireAttributesByCategory,
              category
            );
          };
          AttributesSearchService.prototype.getAllFleetAttributeList = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoAttributes);
          };
          AttributesSearchService.prototype.getFleetAttributeList = function(category) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoAttributesByAttributeCategory,
              category
            );
          };
          AttributesSearchService.prototype.removeEngineeringAttributes = function(selectedAttribute) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.removeBireAttribute,
              selectedAttribute
            );
          };
          AttributesSearchService.prototype.removeFleetAttributes = function(selectedAttribute) {
            return _super.prototype.post.call(this, this.fleetManagementApi.removeBidoAttribute, selectedAttribute);
          };
          AttributesSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__['AppConfigService'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__['FleetManagementApi']
              ])
            ],
            AttributesSearchService
          );
          return AttributesSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__['AbstractAwHttpService']);

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
      }
  }
]);
//# sourceMappingURL=administration-attributes-attributes-module.js.map
