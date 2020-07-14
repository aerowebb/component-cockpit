(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['engineering-management-item-part-number-form-item-part-number-form-module'],
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

    /***/ './src/app/main/engineering-management/item-part-number-form/form/item-part-number.component.html':
      /*!********************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item-part-number-form/form/item-part-number.component.html ***!
  \********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <h2 class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </h2>\r\n\r\n      <div class="page-subtitle">\r\n        <div *ngIf="!isCreateOpenMode" class="page-subtitle">\r\n          <span *ngIf="!!designation">\r\n            - {{ serializationService.deserialize(componentData.objectId)["pnCode"] }} ({{ designation }})\r\n          </span>\r\n          <span *ngIf="designation === null || designation === undefined || designation === \'\'">\r\n            - {{ serializationService.deserialize(componentData.objectId)["pnCode"] }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button *ngIf="isReadOpenMode && hasUpdateAccessRight" type="button" mat-raised-button (click)="editItemPN()">\r\n      {{ "global.edit" | translate }}\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode && !isCreateOpenMode" type="button" mat-raised-button (click)="cancel()">\r\n      {{ "global.cancel" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      class="btn-with-spinner"\r\n      color="primary"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="saveItemPN()"\r\n    >\r\n      <span class="lds-hourglass" *ngIf="showSaveSpinner"></span>\r\n      {{ "global.save" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      *ngIf="!isCreateOpenMode"\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button *ngIf="!isCreateOpenMode" mat-menu-item (click)="openStatusUpdatesPopup()">\r\n        {{ "global.updates" | translate }}\r\n      </button>\r\n      <button *ngIf="isReadOpenMode && !isCreateOpenMode" mat-menu-item (click)="reloadItemPN()">\r\n        {{ "global.refresh" | translate }}\r\n      </button>\r\n      <button *ngIf="!isCreateOpenMode" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ "page." + (isFavoriteEntry ? "removeFromFavorites" : "addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <mat-tab-group animationDuration="0ms" dynamicHeight>\r\n        <!-- HOME -->\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + ".home" | translate }}\r\n          </ng-template>\r\n\r\n          <div class="grid-row">\r\n            <!-- MAIN INFORMATION -->\r\n            <div #mainAnchor class="grid-cell--4" (click)="selectPageTocEntry(component.MAIN_ANCHOR_ID)">\r\n              <div\r\n                class="grid-cell grid-cell--container"\r\n                [ngClass]="{ active: isPageTocEntrySelected(component.MAIN_ANCHOR_ID) }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ "page.mainData" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- ROW 1 -->\r\n                <div class="grid-cell-content">\r\n                  <div class="form-group flex--2">\r\n                    <label class="form-label"> {{ componentData.componentId + ".familyVariant" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="familyVariant" disabled />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--2">\r\n                    <label class="form-label"> {{ componentData.componentId + ".item" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" disabled [(ngModel)]="item" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--2">\r\n                    <label class="form-label"> {{ componentData.componentId + ".version" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" disabled [(ngModel)]="pageData.versionNumber" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- ROW 2 -->\r\n                <div class="grid-cell-content">\r\n                  <div class="form-group flex--2">\r\n                    <label class="form-label"> {{ componentData.componentId + ".designation" | translate }} </label>\r\n\r\n                    <div class="form-control text-area">\r\n                      <textarea\r\n                        class="aw-textarea"\r\n                        [rows]="2"\r\n                        pInputTextarea\r\n                        autoResize="autoResize"\r\n                        [(ngModel)]="designation"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></textarea>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--1 required">\r\n                    <label class="form-label"> {{ componentData.componentId + ".pn" | translate }} </label>\r\n\r\n                    <div class="form-control" [ngClass]="{ \'form-control-with-btn\': isCreateOpenMode }">\r\n                      <input type="text" class="aw-input" [(ngModel)]="pageData.pnCode" disabled />\r\n\r\n                      <i\r\n                        *ngIf="isCreateOpenMode"\r\n                        class="fa fa-fw fa-search aw-icon"\r\n                        aria-hidden="true"\r\n                        pTooltip="{{ \'global.search\' | translate }}"\r\n                        tooltipPosition="top"\r\n                        (click)="openPNSearchPopup()"\r\n                      ></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- ROW 3 -->\r\n                <div class="grid-cell-content">\r\n                  <div class="form-group flex--1">\r\n                    <label class="form-label"> {{ componentData.componentId + ".isnATA" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="isnATA" disabled />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--1 required">\r\n                    <label class="form-label"> {{ componentData.componentId + ".availabilityISN" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        placeholder="&nbsp;"\r\n                        [showClear]="true"\r\n                        [(ngModel)]="pageData.isnAta"\r\n                        [options]="isnOptions"\r\n                        (onChange)="onChangeATA()"\r\n                        [disabled]="isReadOpenMode || hasVersionPnExist"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--1"></div>\r\n                </div>\r\n\r\n                <!-- ROW 4 -->\r\n                <div class="grid-cell-content">\r\n                  <div class="form-group flex--1">\r\n                    <label class="form-label"> {{ componentData.componentId + ".ipcQuantity" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [(ngModel)]="pageData.pnQuantityTci"\r\n                        [disabled]="isReadOpenMode"\r\n                        [maxlength]="3"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--1">\r\n                    <label class="form-label"> {{ componentData.componentId + ".mplQuantity" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [(ngModel)]="pageData.pnQuantityMpl"\r\n                        [disabled]="isReadOpenMode"\r\n                        [maxlength]="3"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group flex--1"></div>\r\n                </div>\r\n\r\n                <!-- ROW 5 -->\r\n                <div class="grid-cell-content">\r\n                  <div class="form-group flex--1">\r\n                    <label class="form-label"> {{ componentData.componentId + ".qtyAsRequired" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-checkbox\r\n                        class="aw-checkbox"\r\n                        binary="true"\r\n                        [(ngModel)]="pageData.ar"\r\n                        (onChange)="onChangeQtyAsRequired()"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-checkbox>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--1">\r\n                    <label class="form-label"> {{ componentData.componentId + ".qtyToRefer" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-checkbox\r\n                        class="aw-checkbox"\r\n                        binary="true"\r\n                        [(ngModel)]="pageData.rf"\r\n                        (onChange)="onChangeQtyToRefer()"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-checkbox>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group flex--1"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- RULES -->\r\n            <div #ruleAnchor class="grid-cell--4" (click)="selectPageTocEntry(component.RULES_ANCHOR_ID)">\r\n              <div\r\n                class="grid-cell grid-cell--container"\r\n                [ngClass]="{ active: isPageTocEntrySelected(component.RULES_ANCHOR_ID) }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".rules" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div class="form-group flex--3">\r\n                    <label class="form-label">{{ componentData.componentId + ".configurationRule" | translate }}</label>\r\n\r\n                    <div class="form-control text-area">\r\n                      <textarea\r\n                        class="aw-textarea"\r\n                        [rows]="3"\r\n                        pInputTextarea\r\n                        autoResize="autoResize"\r\n                        [(ngModel)]="pageData.configurationRule"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></textarea>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--1"></div>\r\n\r\n                  <div class="form-group flex--1">\r\n                    <button\r\n                      *ngIf="!isReadOpenMode"\r\n                      style="width: 90%"\r\n                      type="button"\r\n                      mat-raised-button\r\n                      (click)="addConfigurationRule()"\r\n                    >\r\n                      <div style="padding-left: inherit">{{ componentData.componentId + ".addRule" | translate }}</div>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div class="form-group flex--3">\r\n                    <label class="form-label">{{ componentData.componentId + ".usedWith" | translate }}</label>\r\n\r\n                    <div class="form-control text-area">\r\n                      <textarea\r\n                        class="aw-textarea"\r\n                        [rows]="3"\r\n                        pInputTextarea\r\n                        autoResize="autoResize"\r\n                        [(ngModel)]="pageData.usedWith"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></textarea>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--1"></div>\r\n\r\n                  <div class="form-group flex--1">\r\n                    <button\r\n                      *ngIf="!isReadOpenMode"\r\n                      style="width: 90%"\r\n                      type="button"\r\n                      mat-raised-button\r\n                      (click)="addUsedWithRule()"\r\n                    >\r\n                      <div style="padding-left: inherit">{{ componentData.componentId + ".addRule" | translate }}</div>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- ALTERNATIVES -->\r\n            <div\r\n              #alternativesAnchor\r\n              class="grid-cell--4"\r\n              (click)="selectPageTocEntry(component.ALTERNATIVES_ANCHOR_ID)"\r\n            >\r\n              <div\r\n                class="grid-cell grid-cell--container"\r\n                [ngClass]="{ active: isPageTocEntrySelected(component.ALTERNATIVES_ANCHOR_ID) }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".alternatives" | translate }}\r\n                      ({{ alternativesListDataSource.dataCount }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <a-table [dataSource]="alternativesListDataSource">\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && alternativesListDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        color="warn"\r\n                        (click)="deleteSelectedAlternatives()"\r\n                      >\r\n                        {{ "global.delete" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        type="button"\r\n                        *ngIf="!isReadOpenMode && !alternativesListDataSource.hasDataSelection"\r\n                        mat-raised-button\r\n                        (click)="createAlternative()"\r\n                      >\r\n                        {{ "global.add" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && alternativesListDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="editAlternative()"\r\n                      >\r\n                        {{ "global.edit" | translate }}\r\n                      </button>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <!-- ADDITIONAL INFORMATION-->\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + ".general" | translate }}\r\n          </ng-template>\r\n\r\n          <div class="grid-row">\r\n            <!-- ADDITIONAL INFORMATION-->\r\n            <div #generalAnchor class="grid-cell--6" (click)="selectPageTocEntry(component.GENERAL_ANCHOR_ID)">\r\n              <div\r\n                class="grid-cell grid-cell--container"\r\n                [ngClass]="{ active: isPageTocEntrySelected(component.GENERAL_ANCHOR_ID) }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ componentData.componentId + ".general" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- ROW 1 -->\r\n                <div class="grid-cell-content">\r\n                  <div class="form-group flex--2">\r\n                    <label class="form-label"> {{ componentData.componentId + ".applicability" | translate }} </label>\r\n\r\n                    <div class="form-control" [ngClass]="{ \' form-control-with-btn\': !isReadOpenMode }">\r\n                      <input type="text" class="aw-input" [(ngModel)]="pageData.applicability" disabled />\r\n                      <i\r\n                        *ngIf="!isReadOpenMode"\r\n                        class="fa fa-fw fa-search aw-icon"\r\n                        aria-hidden="true"\r\n                        pTooltip="{{ \'global.search\' | translate }}"\r\n                        tooltipPosition="top"\r\n                        (click)="openApplicabilityDialog()"\r\n                      ></i>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div *ngIf="repairabilityEnabled" class="form-group flex--2">\r\n                    <label class="form-label"> {{ componentData.componentId + ".repairability" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        placeholder="&nbsp;"\r\n                        [showClear]="true"\r\n                        [(ngModel)]="pageData.repairableState"\r\n                        [options]="repairabilityOptions"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--2">\r\n                    <label class="form-label"> {{ componentData.componentId + ".alternativeType" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        placeholder="&nbsp;"\r\n                        [showClear]="true"\r\n                        [(ngModel)]="pageData.pnAlternativeType"\r\n                        [options]="alternativeTypeOptions"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--2">\r\n                    <label class="form-label"> {{ componentData.componentId + ".pnEffectivity" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [(ngModel)]="pageData.pnEffectivity"\r\n                        [disabled]="isReadOpenMode"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- ROW 2 -->\r\n                <div class="grid-cell-content">\r\n                  <div class="form-group flex--2">\r\n                    <label class="form-label"> {{ componentData.componentId + ".isnAecma" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="isnAecma" disabled />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--2">\r\n                    <label class="form-label"> {{ componentData.componentId + ".availabilityISN" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        placeholder="&nbsp;"\r\n                        [showClear]="true"\r\n                        [(ngModel)]="pageData.isnAecma"\r\n                        [options]="isnOptions"\r\n                        (onChange)="onChangeAecma()"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--2">\r\n                    <label class="form-label"> {{ componentData.componentId + ".npNotProcurable" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-checkbox\r\n                        class="aw-checkbox"\r\n                        binary="true"\r\n                        [(ngModel)]="pageData.procurability"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-checkbox>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- ROW 3 -->\r\n                <div class="grid-cell-content">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".comment" | translate }}</label>\r\n\r\n                    <div class="form-control text-area">\r\n                      <textarea\r\n                        class="aw-textarea"\r\n                        [rows]="3"\r\n                        pInputTextarea\r\n                        autoResize="autoResize"\r\n                        [(ngModel)]="pageData.remarks"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- ATTRIBUTES-->\r\n            <div class="grid-cell--6">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ componentData.componentId + ".attributes" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <aw-dynamic-attributes\r\n                    [attributes]="dynamicAttributesForItemPartNumber"\r\n                    [isReadOpenMode]="isReadOpenMode"\r\n                  >\r\n                  </aw-dynamic-attributes>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <!-- CONFIGURATION -->\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + ".configurationPacks" | translate }}\r\n          </ng-template>\r\n\r\n          <div class="grid-row">\r\n            <div\r\n              #configurtaionAnchor\r\n              class="grid-cell--12"\r\n              (click)="selectPageTocEntry(component.CONFIGURATION_ANCHOR_ID)"\r\n            >\r\n              <div\r\n                class="grid-cell grid-cell--container"\r\n                [ngClass]="{ active: isPageTocEntrySelected(component.CONFIGURATION_ANCHOR_ID) }"\r\n              >\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".configurationPacks" | translate }}({{\r\n                        configPackListDataSource.dataCount\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n                <div class="grid-cell-content">\r\n                  <a-table [dataSource]="configPackListDataSource">\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && configPackListDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="showPacksDialog()"\r\n                      >\r\n                        {{ componentData.componentId + ".showPacks" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && configPackListDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="verifyPacksCompatibiltiyDialog()"\r\n                        pTooltip="{{ getComponentName() + \'.verifyPacksTooltip\' | translate }}"\r\n                      >\r\n                        {{ componentData.componentId + ".verifyPackCompatibility" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && configPackListDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        color="warn"\r\n                        (click)="deleteSelectedPacks()"\r\n                      >\r\n                        {{ "global.delete" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && configPackListDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="editConfigPack()"\r\n                      >\r\n                        {{ "global.edit" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && configPackListDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="openConfigPackDialog()"\r\n                      >\r\n                        {{ "global.open" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        type="button"\r\n                        *ngIf="!isReadOpenMode && !configPackListDataSource.hasDataSelection"\r\n                        mat-raised-button\r\n                        (click)="addConfigPacksDialog()"\r\n                      >\r\n                        {{ "global.add" | translate }}\r\n                      </button>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- POPUP ZONE -->\r\n<aw-add-rule-popup\r\n  *ngIf="showAddConfigurationRulePopup"\r\n  (onValidate)="onConfigurationRuleValidate($event)"\r\n  [(display)]="showAddConfigurationRulePopup"\r\n  [propertyOptions]="configurationRulePropertyOptions"\r\n  [input]="applicabilityInput"\r\n></aw-add-rule-popup>\r\n\r\n<aw-add-rule-popup\r\n  *ngIf="showAddUsedWithRulePopup"\r\n  (onValidate)="onUsedWithRuleValidate($event)"\r\n  [(display)]="showAddUsedWithRulePopup"\r\n  [propertyOptions]="usedWithPropertyOptions"\r\n  [input]="applicabilityInput"\r\n></aw-add-rule-popup>\r\n\r\n<aw-alternatives-pn-popup\r\n  *ngIf="showAlternativePnPopup"\r\n  [(display)]="showAlternativePnPopup"\r\n  [inputAlternative]="currentAlternative"\r\n  (onCreate)="onCreateAlternative($event)"\r\n  (onUpdate)="onUpdateAlternative($event)"\r\n  [alternativePnOptions]="alternativePnOptions"\r\n  [interchangeabilityOptions]="interchangeabilityOptions"\r\n  [newAlternative]="isNewAlternative"\r\n></aw-alternatives-pn-popup>\r\n\r\n<aw-dialog-table\r\n  *ngIf="showApplicabilityPopup"\r\n  [(display)]="showApplicabilityPopup"\r\n  [data]="applicabilityTableData"\r\n  (onSelected)="setSelectedApplicability($event)"\r\n></aw-dialog-table>\r\n\r\n<!-- <aw-dialog-table\r\n  *ngIf="showPnPopup"\r\n  [(display)]="showPnPopup"\r\n  [data]="pnTableData"\r\n  (onSelected)="setSelectedPn($event)"\r\n></aw-dialog-table> -->\r\n\r\n<aw-dialog-status\r\n  *ngIf="showStatusUpdatesPopup"\r\n  [(display)]="showStatusUpdatesPopup"\r\n  [item]="pageData"\r\n  [itemId]="itemId"\r\n  [isStatusEditable]="!isReadOpenMode"\r\n>\r\n</aw-dialog-status>\r\n\r\n<aw-add-config-pack\r\n  *ngIf="showAddConfigurationPackPopup"\r\n  (onAdded)="onConfigurationPackAdd($event)"\r\n  (onEdit)="onConfigurationPackEdit($event)"\r\n  [input]="dataConfPack"\r\n  [pageData]="pageData"\r\n  [(display)]="showAddConfigurationPackPopup"\r\n></aw-add-config-pack>\r\n\r\n<aw-config-pack-compatibility-popup\r\n  *ngIf="showConfigurationPackCompatibilityPopup"\r\n  [(display)]="showConfigurationPackCompatibilityPopup"\r\n  [input]="configPackListDataSource.dataSelection[0]"\r\n></aw-config-pack-compatibility-popup>\r\n\r\n<aw-show-packs-popup\r\n  *ngIf="showPacksPopup"\r\n  [(display)]="showPacksPopup"\r\n  [input]="configPackListDataSource.dataSelection[0]"\r\n  [data]="pageData"\r\n  (onAdd)="onAddAssociatedPacks($event)"\r\n  [associatedpackLists]="associatedPackDTO"\r\n></aw-show-packs-popup>\r\n\r\n<aw-dialog-search-part\r\n  *ngIf="showPnPopup"\r\n  [pnType]="selectedPnType"\r\n  [disablePartTypeDropdown]="true"\r\n  [(display)]="showPnPopup"\r\n  (onValidated)="setSelectedPn($event)"\r\n  [searchObject]="pnSearchObject"\r\n></aw-dialog-search-part>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/item-part-number-form/form/item-part-number.component.scss':
      /*!********************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item-part-number-form/form/item-part-number.component.scss ***!
  \********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .disable-search-border {\n  border: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9lbmdpbmVlcmluZy1tYW5hZ2VtZW50L2l0ZW0tcGFydC1udW1iZXItZm9ybS9mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxlbmdpbmVlcmluZy1tYW5hZ2VtZW50XFxpdGVtLXBhcnQtbnVtYmVyLWZvcm1cXGZvcm1cXGl0ZW0tcGFydC1udW1iZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2VuZ2luZWVyaW5nLW1hbmFnZW1lbnQvaXRlbS1wYXJ0LW51bWJlci1mb3JtL2Zvcm0vaXRlbS1wYXJ0LW51bWJlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbjpob3N0IHtcclxuICAuZGlzYWJsZS1zZWFyY2gtYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/engineering-management/item-part-number-form/form/item-part-number.component.ts':
      /*!******************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item-part-number-form/form/item-part-number.component.ts ***!
  \******************************************************************************************************/
      /*! exports provided: ItemPartNumberComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ItemPartNumberComponent',
          function() {
            return ItemPartNumberComponent;
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
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
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
        /* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/enums/table-selection-mode.enum */ './src/app/shared/enums/table-selection-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../../shared/utils/label-value-utils */ './src/app/shared/utils/label-value-utils.ts'
        );
        /* harmony import */ var _item_part_number_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./item-part-number.service */ './src/app/main/engineering-management/item-part-number-form/form/item-part-number.service.ts'
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

        var ItemPartNumberComponent = /** @class */ (function(_super) {
          __extends(ItemPartNumberComponent, _super);
          function ItemPartNumberComponent(
            favoriteService,
            loaderService,
            messageService,
            pageTocService,
            serializationService,
            tabService,
            itemPartNumberService,
            propertiesService,
            dynamicAttributesService,
            translateService,
            confirmationService,
            dateService
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
            _this.itemPartNumberService = itemPartNumberService;
            _this.propertiesService = propertiesService;
            _this.dynamicAttributesService = dynamicAttributesService;
            _this.translateService = translateService;
            _this.confirmationService = confirmationService;
            _this.dateService = dateService;
            _this.vintageConfigDateStr = 'vintageConfigDateStr';
            _this.component = ItemPartNumberComponent_1;
            _this.hasVersionPnExist = false;
            _this.configPackListDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_6__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                { field: 'configurationCode', translateKey: _this.getTranslateKey('configurationCode') },
                {
                  field: 'configurationName',
                  translateKey: _this.getTranslateKey('configurationName')
                },
                {
                  field: _this.vintageConfigDateStr,
                  translateKey: _this.getTranslateKey(_this.vintageConfigDateStr)
                }
              ],
              data: []
            });
            _this.init();
            _this.setAlternativesListCols();
            _this.loadDropdowns();
            _this.registerPageTocEntryObservable();
            // Lang change events
            _this.translateService.onLangChange.subscribe(function(_) {
              _this.attributesForItemPartNumber = [];
              _this.itemPartNumberAttributes = [];
              _this.getAttributesForItemPartNumber();
            });
            return _this;
          }
          ItemPartNumberComponent_1 = ItemPartNumberComponent;
          ItemPartNumberComponent.prototype.ngOnInit = function() {
            var _this = this;
            _super.prototype.ngOnInit.call(this);
            if (this.componentData) {
              this.updateOpenMode(this.componentData.openMode);
              if (!!this.componentData.objectId) {
                this.setTableOfContent();
                var pageData = this.serializationService.deserialize(this.componentData.objectId);
                if (this.isCreateOpenMode) {
                  this.pageData = pageData;
                  if (!!this.pageData.isnAta) {
                    this.isnATA = this.isnOptions.filter(function(isn) {
                      return isn.value === _this.pageData.isnAta;
                    })[0].label;
                  }
                  this.onInitPageData();
                } else {
                  var input = {
                    chapter: pageData.chapter || '',
                    familyCode: pageData.familyCode || '',
                    isnAta: pageData.isnAta || '',
                    marks: pageData.marks || '',
                    pnCode: pageData.pnCode || '',
                    section: pageData.section || '',
                    sheet: pageData.sheet || '',
                    structureType: pageData.structureType || '',
                    subject: pageData.subject || '',
                    variantCode: pageData.variantCode || '',
                    versionNumber: pageData.versionNumber || ''
                  };
                  this.itemPartNumberService.findBireVersionPn(input).subscribe(function(result) {
                    _this.hasVersionPnExist = true;
                    _this.pageData = result;
                    if (!!_this.pageData.isnAta) {
                      var isn = _this.isnOptions.filter(function(isnOption) {
                        return isnOption.value === _this.pageData.isnAta;
                      })[0];
                      if (!!isn) {
                        _this.isnATA = isn.label;
                      }
                    }
                    _this.onInitPageData();
                  });
                }
              }
            }
          };
          ItemPartNumberComponent.prototype.setTableOfContent = function() {
            var _this = this;
            var mainKey = this.getTranslateKey('main');
            var rulesKey = this.getTranslateKey('rules');
            var alternativesKey = this.getTranslateKey('alternatives');
            var generalKey = this.getTranslateKey('general');
            var configPackKey = this.getTranslateKey('configPack');
            this.translateService
              .get([mainKey, rulesKey, alternativesKey, generalKey, configPackKey])
              .subscribe(function(results) {
                var mainLabel = !!results ? results[mainKey] : 'Main Information';
                var rulesLabel = !!results ? results[rulesKey] : 'Rules';
                var alternativesLabel = !!results ? results[alternativesKey] : 'Alternatives';
                var generalLabel = !!results ? results[generalKey] : 'General';
                var configLabel = !!results ? results[configPackKey] : 'Configuration';
                _this.toc = [
                  {
                    id: 'mainAnchor',
                    anchor: _this.mainEltRef,
                    label: mainLabel
                  },
                  {
                    id: 'rulesAnchor',
                    anchor: _this.rulesEltRef,
                    label: rulesLabel
                  },
                  {
                    id: 'alternativesAnchor',
                    anchor: _this.alternativesEltRef,
                    label: alternativesLabel
                  },
                  {
                    id: 'generalAnchor',
                    anchor: _this.generalEltRef,
                    label: generalLabel
                  },
                  {
                    id: 'configurtaionAnchor',
                    anchor: _this.configEltRef,
                    label: configLabel
                  }
                ];
              });
          };
          ItemPartNumberComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
              .ENG_ITEM_PART_NUMBER_FORM;
          };
          ItemPartNumberComponent.prototype.openStatusUpdatesPopup = function() {
            this.showStatusUpdatesPopup = true;
          };
          ItemPartNumberComponent.prototype.reloadItemPN = function() {
            this.init();
            this.setAlternativesListCols();
            this.loadDropdowns();
            this.ngOnInit();
          };
          ItemPartNumberComponent.prototype.editItemPN = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Write
            );
          };
          ItemPartNumberComponent.prototype.cancel = function() {
            if (this.isCreateOpenMode) {
              this.init();
            } else {
              this.reloadItemPN();
              this.updateOpenMode(
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read
              );
            }
          };
          ItemPartNumberComponent.prototype.saveItemPN = function() {
            var _this = this;
            if (!this.pageData.pnCode || !this.pageData.isnAta) {
              this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
            } else {
              var alternativeTable_1 = [];
              this.alternativesListDataSource.dataSrc.forEach(function(alt) {
                var row = JSON.parse(JSON.stringify(alt));
                _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_21__['LabelValueUtils'].labelToStringValue(
                  row,
                  'interchangeability',
                  _this.interchangeabilityOptions
                );
                alternativeTable_1.push(row);
              });
              var attributesInput_1 = [];
              this.dynamicAttributesForItemPartNumber.forEach(function(attributes) {
                attributes.attributes.forEach(function(attr) {
                  var row = {
                    attributeId: attr.id,
                    attributeValue: _this.dynamicAttributesService.attributeValueToString(attr),
                    pnCode: _this.pageData.pnCode,
                    versionNumber: _this.pageData.versionNumber,
                    section: _this.pageData.section,
                    marks: _this.pageData.marks,
                    chapter: _this.pageData.chapter,
                    variantCode: _this.pageData.variantCode,
                    familyCode: _this.pageData.familyCode,
                    subject: _this.pageData.subject,
                    sheet: _this.pageData.sheet,
                    structureType: _this.pageData.structureType,
                    isnAta: _this.pageData.isnAta,
                    statusState: _this.pageData.statusState,
                    statusUser: _this.pageData.statusUser,
                    statusDate: _this.pageData.statusDate
                  };
                  attributesInput_1.push(row);
                });
              });
              var saveInput = {
                bireItemVersionDTOId: this.pageData,
                bireAlternativePnDTOAddedList: alternativeTable_1,
                bireVpAttributeInput: {
                  bireVersionPnDTOId: this.pageData,
                  bireVpAttributeDataList: attributesInput_1
                }
              };
              if (this.isCreateOpenMode) {
                saveInput.createBireVersionPnDTO = this.pageData;
              } else {
                saveInput.updateBireVersionPnDTO = this.pageData;
              }
              this.save(saveInput);
            }
          };
          ItemPartNumberComponent.prototype.openPNSearchPopup = function() {
            this.selectedPnType =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__[
                'AWPropertiesConstants'
              ].PN_TYPE_PART_KEY;
            var isToolSearch = false;
            if (!!this.bireItemDTO && !!this.bireItemDTO.itemFamilyCode) {
              if (
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_GROUND_SUPPORT_EQUIPMENT_KEY === this.bireItemDTO.itemFamilyCode
              ) {
                this.selectedPnType =
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__[
                    'AWPropertiesConstants'
                  ].PN_TYPE_GROUND_SUPPORT_EQUIPMENT_KEY;
              } else if (
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_PILOT_EQUIPMENT_KEY === this.bireItemDTO.itemFamilyCode
              ) {
                this.selectedPnType =
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__[
                    'AWPropertiesConstants'
                  ].PN_TYPE_PILOT_EQUIPMENT_KEY;
              } else if (
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_TOOL_KEY === this.bireItemDTO.itemFamilyCode
              ) {
                isToolSearch = true;
              }
            }
            this.pnSearchObject = {
              pn: this.pageData.pnCode,
              type: this.selectedPnType,
              toolSearch: isToolSearch
            };
            this.showPnPopup = true;
          };
          ItemPartNumberComponent.prototype.onChangeQtyAsRequired = function() {
            this.pageData.rf = !this.pageData.ar;
          };
          ItemPartNumberComponent.prototype.onChangeQtyToRefer = function() {
            this.pageData.ar = !this.pageData.rf;
          };
          ItemPartNumberComponent.prototype.openApplicabilityDialog = function() {
            this.showApplicabilityPopup = true;
          };
          ItemPartNumberComponent.prototype.onChangeATA = function() {
            var _this = this;
            if (!!this.componentData.objectId) {
              if (this.isCreateOpenMode) {
                this.isnATA = !!this.pageData.isnAta
                  ? this.isnOptions.filter(function(isn) {
                      return isn.value === _this.pageData.isnAta;
                    })[0].label
                  : '';
              }
            }
          };
          ItemPartNumberComponent.prototype.onChangeAecma = function() {
            var _this = this;
            this.isnAecma = !!this.pageData.isnAecma
              ? this.isnOptions.filter(function(isn) {
                  return isn.value === _this.pageData.isnAecma;
                })[0].label
              : '';
          };
          ItemPartNumberComponent.prototype.addConfigurationRule = function() {
            this.showAddConfigurationRulePopup = true;
          };
          ItemPartNumberComponent.prototype.addUsedWithRule = function() {
            this.showAddUsedWithRulePopup = true;
          };
          ItemPartNumberComponent.prototype.onConfigurationRuleValidate = function(event) {
            this.pageData.configurationRule =
              this.pageData.configurationRule === null || this.pageData.configurationRule === undefined
                ? '' + event
                : this.pageData.configurationRule + '\n' + event;
          };
          ItemPartNumberComponent.prototype.onUsedWithRuleValidate = function(event) {
            this.pageData.usedWith =
              this.pageData.usedWith === null || this.pageData.usedWith === undefined
                ? '' + event
                : this.pageData.usedWith + '\n' + event;
          };
          ItemPartNumberComponent.prototype.deleteSelectedAlternatives = function() {
            var _this = this;
            this.alternativesListDataSource.dataSelection.forEach(function(alt) {
              var inDB = _this.alternativesListFromDB.some(function(alternative) {
                return alternative.pnPnCode === alt.pnPnCode;
              });
              if (inDB) {
                _this.removedAlternatives.push(alt);
              }
              _this.alternativesListDataSource.deleteDataSelection();
            });
          };
          ItemPartNumberComponent.prototype.createAlternative = function() {
            this.currentAlternative = {};
            this.isNewAlternative = true;
            this.showAlternativePnPopup = true;
            this.alternativesListDataSource.dataSelection = [];
          };
          ItemPartNumberComponent.prototype.editAlternative = function() {
            var _this = this;
            var currAlternative = __assign({}, this.alternativesListDataSource.dataSelection[0]);
            _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_21__['LabelValueUtils'].labelToStringValue(
              currAlternative,
              'interchangeability',
              this.interchangeabilityOptions
            );
            this.currentAlternative = currAlternative;
            this.currentAlternativeIndex = this.alternativesListDataSource.dataSrc.findIndex(function(alternative) {
              return alternative.pnPnCode === _this.currentAlternative.pnPnCode;
            });
            this.isNewAlternative = false;
            this.showAlternativePnPopup = true;
            this.alternativesListDataSource.dataSelection = [];
          };
          ItemPartNumberComponent.prototype.onCreateAlternative = function(event) {
            var pnPnCodeExists = this.alternativesListDataSource.dataSrc.some(function(alt) {
              return alt.pnPnCode === event.pnPnCode;
            });
            if (!pnPnCodeExists) {
              var alternative = {
                pnPnCode: event.pnPnCode,
                interchangeability: event.interchangeability || '',
                pnCode: this.pageData.pnCode,
                chapter: this.pageData.chapter,
                familyCode: this.pageData.familyCode,
                marks: this.pageData.marks,
                section: this.pageData.section,
                sheet: this.pageData.sheet,
                structureType: this.pageData.structureType,
                subject: this.pageData.subject,
                variantCode: this.pageData.variantCode,
                versionNumber: this.pageData.versionNumber
              };
              _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_21__['LabelValueUtils'].stringValueToLabel(
                alternative,
                'interchangeability',
                this.interchangeabilityOptions
              );
              this.alternativesListDataSource.addData([alternative]);
            }
          };
          ItemPartNumberComponent.prototype.onUpdateAlternative = function(event) {
            if (event.interchangeability === null || event.interchangeability === undefined) {
              event.interchangeability = '';
            }
            _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_21__['LabelValueUtils'].stringValueToLabel(
              event,
              'interchangeability',
              this.interchangeabilityOptions
            );
            this.alternativesListDataSource.replaceData(
              this.alternativesListDataSource.dataSrc[this.currentAlternativeIndex],
              event
            );
            this.currentAlternativeIndex = -1;
          };
          ItemPartNumberComponent.prototype.setSelectedApplicability = function(event) {
            this.pageData.applicability =
              this.pageData.applicability === null || this.pageData.applicability === undefined
                ? this.generateApplicabilityString(event)
                : this.pageData.applicability + '/' + this.generateApplicabilityString(event);
          };
          ItemPartNumberComponent.prototype.setSelectedPn = function(event) {
            this.pageData.pnCode = !!event.birePnDTO ? event.birePnDTO.pnCode : undefined;
          };
          // tslint:disable-next-line:no-any
          ItemPartNumberComponent.prototype.navigateToSelectedSectionFromSummary = function(
            anchorId,
            elementRef,
            event
          ) {
            _super.prototype.selectPageTocEntry.call(this, anchorId);
            _super.prototype.scrollToAnchorAndStopPropagation.call(this, elementRef, event);
          };
          ItemPartNumberComponent.prototype.onInitPageData = function() {
            this.item =
              '' +
              this.pageData.chapter +
              '-' +
              ('' + this.pageData.section) +
              '-' +
              ('' + this.pageData.subject) +
              '-' +
              ('' + this.pageData.sheet) +
              '-' +
              ('' + this.pageData.marks);
            this.itemId =
              this.pageData.familyCode +
              '-' +
              this.pageData.variantCode +
              '/' +
              ('' + this.item) +
              '/' +
              ('' + this.pageData.pnCode) +
              '/' +
              ('' + this.pageData.isnAta);
            this.familyVariant = this.pageData.familyCode + '-' + this.pageData.variantCode;
            this.loadAlternativePnDropdown();
            this.loadPropertyDropdown();
            this.loadInterchangeabilityDropdown();
            this.initApplicabilityData();
            this.initConfigurationPackData();
            this.initPnData();
            this.initItemData();
          };
          ItemPartNumberComponent.prototype.initItemData = function() {
            var _this = this;
            var bireItemDTOId = this.pageData;
            this.itemPartNumberService.findBireItem(bireItemDTOId).subscribe(function(results) {
              _this.bireItemDTO = results;
            });
          };
          ItemPartNumberComponent.prototype.init = function() {
            this.repairabilityEnabled = false;
            this.pageData = {};
            this.item = '';
            this.familyVariant = '';
            this.isnATA = '';
            this.isnAecma = '';
            this.repairabilityOptions = [];
            this.alternativeTypeOptions = [];
            this.isnOptions = [];
            this.configurationRulePropertyOptions = [];
            this.usedWithPropertyOptions = [];
            this.alternativePnOptions = [];
            this.interchangeabilityOptions = [];
            this.showAddConfigurationRulePopup = false;
            this.showAddUsedWithRulePopup = false;
            this.showAlternativePnPopup = false;
            this.showPnPopup = false;
            this.showApplicabilityPopup = false;
            this.isNewAlternative = undefined;
            this.attributesForItemPartNumber = [];
            this.dynamicAttributesForItemPartNumber = [];
            this.itemPartNumberAttributes = [];
            this.designation = '';
            this.itemId = '';
            this.alternativesListFromDB = [];
            this.removedAlternatives = [];
            this.createBireConfigurationDTO = [];
            this.updateBireConfigurationDTO = [];
            this.removeBireConfigurationDTOId = [];
            this.createBireConfigurationPackDTOList = [];
            this.associatedPackDTO = [];
            this.hasVersionPnExist = false;
            this.getAttributesForItemPartNumber();
          };
          ItemPartNumberComponent.prototype.initPnData = function() {
            var pnTableCols = [
              { field: 'pnCode', alignment: 'left' },
              { field: 'articleDesignation', alignment: 'left' },
              { field: 'manufacturerOtanCode', alignment: 'left' },
              { field: 'otanPnReference', alignment: 'left' },
              { field: 'quantityUnit', alignment: 'left' }
            ];
            this.pnTableData = {
              componentId: 'DialogPn',
              tableCols: pnTableCols,
              tableRows: this.itemPartNumberService.findBirePnsBySearchCriteria({}, '', '', ''),
              dataKey: undefined,
              selectionMode:
                _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableSelectionMode'].Single,
              globalFilter: true
            };
          };
          ItemPartNumberComponent.prototype.initApplicabilityData = function() {
            var applicabilityTableCols = [
              { field: 'modelCode', alignment: 'left' },
              { field: 'modelName', alignment: 'left' }
            ];
            this.applicabilityInput = {
              familyCode: this.pageData.familyCode || '',
              structureType: this.pageData.structureType || '',
              variantCode: this.pageData.variantCode || ''
            };
            this.applicabilityTableData = {
              componentId: 'DialogApplicability',
              tableCols: applicabilityTableCols,
              tableRows: this.itemPartNumberService.findBireModelsByVariantPk(this.applicabilityInput),
              dataKey: undefined,
              selectionMode:
                _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_11__['TableSelectionMode'].Multiple,
              globalFilter: true
            };
          };
          ItemPartNumberComponent.prototype.setAlternativesListCols = function() {
            this.alternativesListDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_6__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                { field: 'pnPnCode', translateKey: this.getTranslateKey('pnPnCode') },
                {
                  field: 'interchangeability',
                  translateKey: this.getTranslateKey('interchangeability')
                }
              ],
              data: []
            });
          };
          ItemPartNumberComponent.prototype.getAttributesForItemPartNumber = function() {
            var _this = this;
            this.itemPartNumberService
              .findBireAttributesByCategory(
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                  .MCH_ATTRIBUTE_CATEGORY_ALL_KEY
              )
              .subscribe(
                function(results) {
                  var _a;
                  (_a = _this.attributesForItemPartNumber).push.apply(_a, __spread(results));
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFindAttributesByCategory'));
                }
              );
            this.itemPartNumberService
              .findBireAttributesByCategory(
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                  .MCH_ATTRIBUTE_CATEGORY_ITEM_PN_KEY
              )
              .subscribe(
                function(results) {
                  var _a;
                  (_a = _this.attributesForItemPartNumber).push.apply(_a, __spread(results));
                  _this.dynamicAttributesForItemPartNumber = _this.dynamicAttributesService.from(
                    _this.attributesForItemPartNumber
                  );
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFindAttributesByCategory'));
                }
              );
          };
          ItemPartNumberComponent.prototype.loadAttributesAndAlternativesTableData = function() {
            var _this = this;
            var input = this.pageData;
            this.alternativesListDataSource.setData([]);
            this.itemPartNumberService.getItemPartNumberDetails(input).subscribe(function(results) {
              if (!!results) {
                _this.alternativesListFromDB = results.bireAlternativePnDTO;
                _this.itemPartNumberAttributes = results.attributeDTO;
                results.bireAlternativePnDTO.forEach(function(result) {
                  var interchangeability = _this.interchangeabilityOptions.filter(function(option) {
                    return option.value === result.interchangeability;
                  })[0];
                  if (!!interchangeability) {
                    result.interchangeability = interchangeability.label;
                  }
                });
                _this.alternativesListDataSource.addData(results.bireAlternativePnDTO);
                _this.dynamicAttributesService.setValues(
                  _this.dynamicAttributesForItemPartNumber,
                  _this.itemPartNumberAttributes
                );
              }
            });
          };
          ItemPartNumberComponent.prototype.loadDropdowns = function() {
            this.loadRepairabilityDropdown();
            this.loadAlternativeTypeDropdown();
            this.loadISNDropdown();
          };
          ItemPartNumberComponent.prototype.loadRepairabilityDropdown = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                  .REPAIRABILITY_MAP
              )
              .subscribe(function(results) {
                _this.repairabilityOptions = results;
              });
          };
          ItemPartNumberComponent.prototype.loadAlternativeTypeDropdown = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                  .ALTERNATIVE_TYPE_MAP
              )
              .subscribe(function(results) {
                _this.alternativeTypeOptions = results;
              });
          };
          ItemPartNumberComponent.prototype.loadISNDropdown = function() {
            var _this = this;
            this.itemPartNumberService.getISNOptions().subscribe(function(results) {
              _this.isnOptions = results;
              if (!!_this.pageData.isnAta) {
                _this.isnATA = _this.isnOptions.filter(function(isn) {
                  return isn.value === _this.pageData.isnAta;
                })[0].label;
              }
              if (!!_this.pageData.isnAecma) {
                _this.isnATA = _this.isnOptions.filter(function(isn) {
                  return isn.value === _this.pageData.isnAecma;
                })[0].label;
              }
            });
          };
          ItemPartNumberComponent.prototype.loadPropertyDropdown = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                  .PN_PROPERTY_MAP
              )
              .subscribe(function(results) {
                results.forEach(function(property) {
                  if (property.value === '4' || property.value === '5') {
                    _this.usedWithPropertyOptions.push(property);
                  } else {
                    _this.configurationRulePropertyOptions.push(property);
                  }
                });
              });
          };
          ItemPartNumberComponent.prototype.loadAlternativePnDropdown = function() {
            var _this = this;
            var input = this.pageData;
            this.itemPartNumberService.getPartNumberStructure(input).subscribe(function(results) {
              results.forEach(function(result) {
                if (!!result.pn) {
                  var option = {
                    label: result.pn,
                    value: result.pn
                  };
                  _this.alternativePnOptions.push(option);
                }
              });
              _this.alternativePnOptions = _this.alternativePnOptions.filter(function(pn) {
                return pn.label !== _this.pageData.pnCode;
              });
              if (results.length > 0) {
                _this.designation = results[0].description || '';
              }
              var context =
                !!_this.componentData.objectId &&
                !!_this.serializationService.deserialize(_this.componentData.objectId).pnCode
                  ? !!_this.designation
                    ? _this.serializationService.deserialize(_this.componentData.objectId).pnCode +
                      ' (' +
                      _this.designation +
                      ')'
                    : '' + _this.serializationService.deserialize(_this.componentData.objectId).pnCode
                  : 'tab.createMode';
              _this.displayComponentContext(context, _this.isCreateOpenMode);
            });
          };
          ItemPartNumberComponent.prototype.loadInterchangeabilityDropdown = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                  .PN_INTERCHANGEABILITY_MAP
              )
              .subscribe(function(results) {
                _this.interchangeabilityOptions = results;
                _this.loadAttributesAndAlternativesTableData();
              });
          };
          ItemPartNumberComponent.prototype.generateApplicabilityString = function(event) {
            var result = '';
            if (event.length === 0) {
              result = '';
            } else if (event.length === 1) {
              result = '' + event[0].modelCode;
            } else if (event.length > 1) {
              result = '' + event[0].modelCode;
              for (var i = 1; i < event.length; i++) {
                result = result + '/' + event[i].modelCode;
              }
            }
            return result;
          };
          ItemPartNumberComponent.prototype.save = function(input) {
            var _this = this;
            this.showSaveSpinner = true;
            var observables = [
              this.itemPartNumberService.saveItemPartNumber(input),
              this.itemPartNumberService.removeBireAlternativePnList(this.removedAlternatives),
              this.itemPartNumberService.saveBireConfigurationAndPacks(this.saveConfigurationPacks())
            ];
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])(observables)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                  _this.showSaveSpinner = false;
                })
              )
              .subscribe(function() {
                var messageKey = _this.isCreateOpenMode ? 'successOnSaveItemPN' : 'successOnUpdateItemPN';
                _this.messageService.showSuccessMessage(_this.getTranslateKey(messageKey));
                var context = _this.pageData.pnCode + ' (' + _this.designation + ')';
                _this.displayComponentContext(context, _this.isCreateOpenMode);
                _this.updateOpenMode(
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Write
                );
                _this.componentData.openMode = 1;
                _this.componentData.objectId = _this.serializationService.serialize(_this.pageData);
                _this.reloadItemPN();
              });
          };
          /**
           * Configuraiton packs operations
           */
          ItemPartNumberComponent.prototype.initConfigurationPackData = function() {
            var _this = this;
            var bireItemVersionDTO = {
              chapter: this.pageData.chapter,
              familyCode: this.pageData.familyCode,
              marks: this.pageData.marks,
              section: this.pageData.section,
              sheet: this.pageData.sheet,
              statusDate: this.pageData.statusDate,
              statusState: this.pageData.statusState,
              statusUser: this.pageData.statusUser,
              structureType: this.pageData.structureType,
              subject: this.pageData.subject,
              variantCode: this.pageData.variantCode,
              versionNumber: this.pageData.versionNumber
            };
            this.configPackListDataSource.setData([]);
            this.itemPartNumberService.findBireConfigurationsByItemVersion(bireItemVersionDTO).subscribe(function(res) {
              res.forEach(function(data) {
                data[_this.vintageConfigDateStr] = _this.dateService.dateToString(data.vintageConfigDate);
                _this.configPackListDataSource.addData([data]);
              });
            });
          };
          ItemPartNumberComponent.prototype.openConfigPackDialog = function() {
            this.dataConfPack = {
              componentId: 'AddConfigPackComponent',
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read,
              object: this.configPackListDataSource.dataSelection[0],
              selectedRow: undefined
            };
            this.showAddConfigurationPackPopup = true;
          };
          ItemPartNumberComponent.prototype.addConfigPacksDialog = function() {
            this.dataConfPack = {
              componentId: 'AddConfigPackComponent',
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Write,
              object: {},
              selectedRow: undefined
            };
            this.showAddConfigurationPackPopup = true;
          };
          ItemPartNumberComponent.prototype.editConfigPack = function() {
            this.dataConfPack = {
              componentId: 'AddConfigPackComponent',
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Write,
              object: this.configPackListDataSource.dataSelection[0],
              selectedRow: undefined
            };
            this.showAddConfigurationPackPopup = true;
          };
          ItemPartNumberComponent.prototype.onConfigurationPackAdd = function(ev) {
            var searchInDisplayedList = this.configPackListDataSource.dataSrc.find(function(value) {
              return value.configurationCode === ev.configurationCode;
            });
            if (!searchInDisplayedList) {
              if (!!ev) {
                var bireConfigurationDTO = {
                  chapter: this.pageData.chapter,
                  familyCode: this.pageData.familyCode,
                  marks: this.pageData.marks,
                  section: this.pageData.section,
                  sheet: this.pageData.sheet,
                  statusDate: this.pageData.statusDate,
                  statusState: this.pageData.statusState,
                  statusUser: this.pageData.statusUser,
                  structureType: this.pageData.structureType,
                  subject: this.pageData.subject,
                  variantCode: this.pageData.variantCode,
                  versionNumber: this.pageData.versionNumber,
                  configurationCode: ev.configurationCode,
                  configurationName: ev.configurationName,
                  vintageConfigDate: ev.vintageConfigDate
                };
                this.createBireConfigurationDTO.push(bireConfigurationDTO);
                bireConfigurationDTO[this.vintageConfigDateStr] = this.dateService.dateToString(
                  bireConfigurationDTO.vintageConfigDate
                );
                this.configPackListDataSource.addData([bireConfigurationDTO]);
              }
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyConfCodeExisting'));
            }
          };
          ItemPartNumberComponent.prototype.onConfigurationPackEdit = function(ev) {
            var _this = this;
            this.configPackListDataSource.dataSrc.filter(function(res, index) {
              if (ev.configurationCode === res.configurationCode) {
                _this.configPackListDataSource.dataSrc[index][
                  _this.vintageConfigDateStr
                ] = _this.dateService.dateToString(ev.vintageConfigDate);
                _this.configPackListDataSource.replaceData(res, ev);
                // Check if its in create
                var isInCreate_1 = false;
                var indexCreate_1 = -1;
                _this.createBireConfigurationDTO.filter(function(resp, indexC) {
                  if (resp.configurationCode === ev.configurationCode) {
                    isInCreate_1 = true;
                    indexCreate_1 = indexC;
                  }
                });
                if (isInCreate_1) {
                  _this.createBireConfigurationDTO[indexCreate_1] = ev;
                } else {
                  // this.updateBireConfigurationDTO.filter((data, indexU) => {
                  //   if (data.configurationCode === ev.configurationCode) {
                  //     this.updateBireConfigurationDTO[indexU] = ev;
                  //   }
                  // });
                  _this.updateBireConfigurationDTO.push(ev);
                }
              }
            });
            this.configPackListDataSource.dataSelection = [];
          };
          ItemPartNumberComponent.prototype.verifyPacksCompatibiltiyDialog = function() {
            this.showConfigurationPackCompatibilityPopup = true;
          };
          ItemPartNumberComponent.prototype.showPacksDialog = function() {
            this.showPacksPopup = true;
          };
          ItemPartNumberComponent.prototype.onAddAssociatedPacks = function(ev) {
            var _this = this;
            var confCodeStr =
              '' +
              this.pageData.familyCode +
              this.pageData.variantCode +
              ('' + this.pageData.chapter) +
              ('' + this.pageData.section) +
              ('' + this.pageData.subject) +
              ('' + this.pageData.sheet) +
              ('' + this.pageData.marks) +
              ('' + this.pageData.versionNumber);
            ev.forEach(function(code) {
              confCodeStr = confCodeStr.concat(code.packBaseOptionCode);
            });
            var searchInDisplayedList = this.configPackListDataSource.dataSrc.find(function(value) {
              return value.configurationCode === confCodeStr;
            });
            if (!searchInDisplayedList) {
              var preCode_1 = this.configPackListDataSource.dataSelection[0].configurationCode;
              this.configPackListDataSource.dataSelection[0].configurationCode = confCodeStr;
              // Check if its in create
              var isInCreate_2 = false;
              var indexCreate_2 = -1;
              this.createBireConfigurationDTO.filter(function(resp, indexC) {
                if (resp.configurationCode === _this.configPackListDataSource.dataSelection[0].configurationCode) {
                  isInCreate_2 = true;
                  indexCreate_2 = indexC;
                }
              });
              if (isInCreate_2) {
                this.createBireConfigurationDTO.splice(indexCreate_2, 1);
              } else {
                this.removeBireConfigurationDTOId.push({
                  configurationCode: preCode_1
                });
              }
              var isFound_1 = false;
              var index_1 = -1;
              this.createBireConfigurationPackDTOList.filter(function(res, i) {
                if (res.configurationCode === preCode_1) {
                  isFound_1 = true;
                  index_1 = i;
                }
              });
              if (isFound_1) {
                // this.createBireConfigurationPackDTOList.splice(index, 1);
                this.createBireConfigurationPackDTOList[
                  index_1
                ].configurationCode = this.configPackListDataSource.dataSelection[0].configurationCode;
              }
              ev.forEach(function(code) {
                code.configurationCode = _this.configPackListDataSource.dataSelection[0].configurationCode;
                var isAvailable = false;
                _this.createBireConfigurationPackDTOList.filter(function(res) {
                  if (
                    res.configurationCode === code.configurationCode &&
                    res.packBaseOptionCode === code.packBaseOptionCode
                  ) {
                    isAvailable = true;
                  }
                });
                if (!isAvailable) {
                  var dto = {
                    configurationCode: code.configurationCode,
                    familyCode: _this.pageData.familyCode,
                    structureType: _this.pageData.structureType,
                    variantCode: _this.pageData.variantCode,
                    chapter: _this.pageData.chapter,
                    section: _this.pageData.section,
                    subject: _this.pageData.subject,
                    sheet: _this.pageData.sheet,
                    marks: _this.pageData.marks,
                    packBaseOptionCode: code.packBaseOptionCode
                  };
                  _this.createBireConfigurationPackDTOList.push(dto);
                }
                _this.addToAssociateMap(code.configurationCode, code.packBaseOptionCode);
              });
              this.createBireConfigurationDTO.push(this.configPackListDataSource.dataSelection[0]);
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyConfCodeExisting'));
            }
            this.configPackListDataSource.dataSelection = [];
          };
          ItemPartNumberComponent.prototype.addToAssociateMap = function(code, packCode) {
            var isFound = false;
            var codeIndex = -1;
            this.associatedPackDTO.filter(function(dto, index) {
              if (dto.packName === code) {
                isFound = true;
                codeIndex = index;
              }
            });
            if (!isFound) {
              this.associatedPackDTO.push({
                packName: code,
                associatedList: [packCode]
              });
            } else {
              this.associatedPackDTO[codeIndex].associatedList.push(packCode);
            }
          };
          ItemPartNumberComponent.prototype.deleteSelectedPacks = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey('confirmDeleteSelectedPacks'),
              accept: function() {
                _this.configPackListDataSource.dataSelection.forEach(function(element) {
                  var searchInAddedList = _this.removeBireConfigurationDTOId.find(function(value) {
                    return value.configurationCode === element.configurationCode;
                  });
                  if (searchInAddedList) {
                    var indexInAddedList = _this.removeBireConfigurationDTOId.indexOf(searchInAddedList);
                    _this.removeBireConfigurationDTOId.splice(indexInAddedList, 1);
                  } else {
                    var bireItemMaintenanceDTOId = {
                      configurationCode: element.configurationCode
                    };
                    var clone = __assign({}, bireItemMaintenanceDTOId);
                    _this.removeBireConfigurationDTOId.push(clone);
                  }
                  _this.configPackListDataSource.deleteDataSelection();
                });
              }
            });
          };
          ItemPartNumberComponent.prototype.saveConfigurationPacks = function() {
            var saveBireConfigurationAndPacksInput = {
              bireItemDTO: this.pageData,
              createBireConfigurationDTO: this.createBireConfigurationDTO,
              updateBireConfigurationDTO: this.updateBireConfigurationDTO,
              removeBireConfigurationDTOId: this.removeBireConfigurationDTOId,
              createBireConfigurationPackDTOList: this.createBireConfigurationPackDTOList
            };
            return saveBireConfigurationAndPacksInput;
          };
          var ItemPartNumberComponent_1;
          ItemPartNumberComponent.MAIN_ANCHOR_ID = 'mainAnchor';
          ItemPartNumberComponent.RULES_ANCHOR_ID = 'rulesAnchor';
          ItemPartNumberComponent.ALTERNATIVES_ANCHOR_ID = 'alternativesAnchor';
          ItemPartNumberComponent.GENERAL_ANCHOR_ID = 'generalAnchor';
          ItemPartNumberComponent.CONFIGURATION_ANCHOR_ID = 'configurtaionAnchor';
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(ItemPartNumberComponent_1.MAIN_ANCHOR_ID),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ItemPartNumberComponent.prototype,
            'mainEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                ItemPartNumberComponent_1.RULES_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ItemPartNumberComponent.prototype,
            'rulesEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                ItemPartNumberComponent_1.ALTERNATIVES_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ItemPartNumberComponent.prototype,
            'alternativesEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                ItemPartNumberComponent_1.GENERAL_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ItemPartNumberComponent.prototype,
            'generalEltRef',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                ItemPartNumberComponent_1.CONFIGURATION_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ItemPartNumberComponent.prototype,
            'configEltRef',
            void 0
          );
          ItemPartNumberComponent = ItemPartNumberComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-item-part-number',
                template: __webpack_require__(
                  /*! ./item-part-number.component.html */ './src/app/main/engineering-management/item-part-number-form/form/item-part-number.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./item-part-number.component.scss */ './src/app/main/engineering-management/item-part-number-form/form/item-part-number.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_14__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_15__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_16__['MessageService'],
                _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_4__['PageTocService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_18__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_19__['TabService'],
                _item_part_number_service__WEBPACK_IMPORTED_MODULE_22__['ItemPartNumberService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_17__['PropertiesService'],
                _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_5__[
                  'DynamicAttributesService'
                ],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_12__['ConfirmationService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_13__['DateService']
              ])
            ],
            ItemPartNumberComponent
          );
          return ItemPartNumberComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_20__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/item-part-number-form/form/item-part-number.service.ts':
      /*!****************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item-part-number-form/form/item-part-number.service.ts ***!
  \****************************************************************************************************/
      /*! exports provided: ItemPartNumberService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ItemPartNumberService', function() {
          return ItemPartNumberService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_product_structure_business_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/product-structure-business.api */ './src/app/shared/api/product-structure-business.api.ts'
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

        var ItemPartNumberService = /** @class */ (function(_super) {
          __extends(ItemPartNumberService, _super);
          function ItemPartNumberService(
            http,
            appConfigService,
            productStructureManagement,
            productStructureBusinessApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.productStructureManagement = productStructureManagement;
            _this.productStructureBusinessApi = productStructureBusinessApi;
            return _this;
          }
          ItemPartNumberService.prototype.getISNOptions = function() {
            return _super.prototype.post.call(this, this.productStructureManagement.findAllIsnAtasAsStrings);
          };
          ItemPartNumberService.prototype.findBireVersionPNsByItemVersion = function(input) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagement.findBireVersionPnsByItemVersion,
              input
            );
          };
          ItemPartNumberService.prototype.getPartNumberStructure = function(bireItemDTOId) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagement.getPartNumberStructure,
              bireItemDTOId
            );
          };
          ItemPartNumberService.prototype.getItemPartNumberDetails = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagement.getItemPartNumberDetails, input);
          };
          ItemPartNumberService.prototype.findBireModelsByVariantPk = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagement.findBireModelsByVariantPK, input);
          };
          ItemPartNumberService.prototype.findBirePnsBySearchCriteria = function(
            criteria,
            familyCode,
            structureType,
            variantCode
          ) {
            var params = {
              birePnDTOCriteria: criteria,
              familyCode: familyCode,
              structureType: structureType,
              variantCode: variantCode
            };
            return _super.prototype.post.call(
              this,
              this.productStructureManagement.findBirePnsBySearchCriteria,
              params
            );
          };
          ItemPartNumberService.prototype.findBireItemsBySearchCriteria = function(
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
              this.productStructureManagement.findBireItemsBySearchCriteria,
              params
            );
          };
          ItemPartNumberService.prototype.getItemPartNumberPropertyValue = function(input) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagement.getItemPartNumberPropertyValue,
              input
            );
          };
          ItemPartNumberService.prototype.findBireAttributesByCategory = function(category) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagement.findBireAttributesByCategoryForPnTab,
              category
            );
          };
          ItemPartNumberService.prototype.saveItemPartNumber = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagement.saveItemPartNumber, input);
          };
          ItemPartNumberService.prototype.findBireVersionPn = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagement.findBireVersionPn, input);
          };
          ItemPartNumberService.prototype.removeBireAlternativePnList = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagement.removeBireAlternativePnList, input);
          };
          ItemPartNumberService.prototype.findBireConfigurationsByItemVersion = function(input) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagement.findBireConfigurationsByItemVersion,
              input
            );
          };
          ItemPartNumberService.prototype.verifyEvolutionInterdependenceForConfiguration = function(input) {
            return _super.prototype.post.call(
              this,
              this.productStructureBusinessApi.verifyEvolutionInterdependenceForConfiguration,
              input
            );
          };
          ItemPartNumberService.prototype.findBirePackBaseOptionsByItemDropDown = function(input) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagement.findBirePackBaseOptionsByItemDropDown,
              input
            );
          };
          ItemPartNumberService.prototype.saveBireConfigurationAndPacks = function(input) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagement.saveBireConfigurationAndPacks,
              input
            );
          };
          ItemPartNumberService.prototype.findBireConfigurationPacksByItemVersionAndConfigurationCode = function(
            input
          ) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagement.findBireConfigurationPacksByItemVersionAndConfigurationCode,
              input
            );
          };
          ItemPartNumberService.prototype.findBireItem = function(bireItemDTOId) {
            return _super.prototype.post.call(this, this.productStructureManagement.findBireItem, bireItemDTOId);
          };
          ItemPartNumberService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])({
                providedIn: 'root'
              }),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__['AppConfigService'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_product_structure_business_api__WEBPACK_IMPORTED_MODULE_2__['ProductStructureBusinessApi']
              ])
            ],
            ItemPartNumberService
          );
          return ItemPartNumberService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/engineering-management/item-part-number-form/item-part-number-form.module.ts':
      /*!***************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item-part-number-form/item-part-number-form.module.ts ***!
  \***************************************************************************************************/
      /*! exports provided: ItemPartNumberFormModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ItemPartNumberFormModule',
          function() {
            return ItemPartNumberFormModule;
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
        /* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ './src/app/shared/components/component-sidebar/component-sidebar.mdule.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_item_dialog_search_item_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-item/dialog-search-item.module */ './src/app/shared/components/dialog-search-item/dialog-search-item.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_part_dialog_search_part_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-part/dialog-search-part.module */ './src/app/shared/components/dialog-search-part/dialog-search-part.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_status_dialog_status_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/components/dialog-status/dialog-status.module */ './src/app/shared/components/dialog-status/dialog-status.module.ts'
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
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _form_item_part_number_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./form/item-part-number.component */ './src/app/main/engineering-management/item-part-number-form/form/item-part-number.component.ts'
        );
        /* harmony import */ var _form_item_part_number_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./form/item-part-number.service */ './src/app/main/engineering-management/item-part-number-form/form/item-part-number.service.ts'
        );
        /* harmony import */ var _popups_add_associated_config_pack_popup_add_associated_config_pack_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./popups/add-associated-config-pack-popup/add-associated-config-pack-popup.component */ './src/app/main/engineering-management/item-part-number-form/popups/add-associated-config-pack-popup/add-associated-config-pack-popup.component.ts'
        );
        /* harmony import */ var _popups_add_config_pack_add_config_pack_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./popups/add-config-pack/add-config-pack.component */ './src/app/main/engineering-management/item-part-number-form/popups/add-config-pack/add-config-pack.component.ts'
        );
        /* harmony import */ var _popups_add_rule_popup_add_rule_popup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./popups/add-rule-popup/add-rule-popup.component */ './src/app/main/engineering-management/item-part-number-form/popups/add-rule-popup/add-rule-popup.component.ts'
        );
        /* harmony import */ var _popups_alternatives_pn_popup_alternatives_pn_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./popups/alternatives-pn-popup/alternatives-pn-popup.component */ './src/app/main/engineering-management/item-part-number-form/popups/alternatives-pn-popup/alternatives-pn-popup.component.ts'
        );
        /* harmony import */ var _popups_config_pack_compatibility_popup_config_pack_compatibility_popup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./popups/config-pack-compatibility-popup/config-pack-compatibility-popup.component */ './src/app/main/engineering-management/item-part-number-form/popups/config-pack-compatibility-popup/config-pack-compatibility-popup.component.ts'
        );
        /* harmony import */ var _popups_show_packs_popup_show_packs_popup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ./popups/show-packs-popup/show-packs-popup.component */ './src/app/main/engineering-management/item-part-number-form/popups/show-packs-popup/show-packs-popup.component.ts'
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
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__['TooltipModule'],
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__['RadioButtonModule'],
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__['InputTextareaModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_7__['TableModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_12__[
            'ComponentSidebarModule'
          ],
          _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_16__['DialogTableModule'],
          _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_17__[
            'DynamicAttributesModule'
          ],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_18__['ModalModule'],
          _shared_components_dialog_status_dialog_status_module__WEBPACK_IMPORTED_MODULE_15__['DialogStatusModule'],
          _shared_components_dialog_search_item_dialog_search_item_module__WEBPACK_IMPORTED_MODULE_13__[
            'DialogSearchItemModule'
          ],
          _shared_components_dialog_search_part_dialog_search_part_module__WEBPACK_IMPORTED_MODULE_14__[
            'DialogSearchPartModule'
          ]
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _popups_add_rule_popup_add_rule_popup_component__WEBPACK_IMPORTED_MODULE_25__['AddRulePopupComponent'],
          _popups_alternatives_pn_popup_alternatives_pn_popup_component__WEBPACK_IMPORTED_MODULE_26__[
            'AlternativesPnPopupComponent'
          ],
          _popups_add_config_pack_add_config_pack_component__WEBPACK_IMPORTED_MODULE_24__['AddConfigPackComponent'],
          _popups_config_pack_compatibility_popup_config_pack_compatibility_popup_component__WEBPACK_IMPORTED_MODULE_27__[
            'ConfigPackCompatibilityPopupComponent'
          ],
          _popups_show_packs_popup_show_packs_popup_component__WEBPACK_IMPORTED_MODULE_28__['ShowPacksPopupComponent'],
          _popups_add_associated_config_pack_popup_add_associated_config_pack_popup_component__WEBPACK_IMPORTED_MODULE_23__[
            'AddAssociatedConfigPackPopupComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [
          _form_item_part_number_component__WEBPACK_IMPORTED_MODULE_21__['ItemPartNumberComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [_form_item_part_number_service__WEBPACK_IMPORTED_MODULE_22__['ItemPartNumberService']];
        var ItemPartNumberFormModule = /** @class */ (function() {
          function ItemPartNumberFormModule() {}
          ItemPartNumberFormModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_9__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_10__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_11__['AppCommonSharedModule'],
                    _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_19__['TableModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_20__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            ItemPartNumberFormModule
          );
          return ItemPartNumberFormModule;
        })();

        /***/
      },

    /***/ './src/app/main/engineering-management/item-part-number-form/popups/add-associated-config-pack-popup/add-associated-config-pack-popup.component.html':
      /*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item-part-number-form/popups/add-associated-config-pack-popup/add-associated-config-pack-popup.component.html ***!
  \***********************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="form-group required">\r\n        <label class="form-label">{{ getComponentName() + ".packBaseOptionCode" | translate }}</label>\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            [options]="optionCodeList"\r\n            [(ngModel)]="selectedOptionCode"\r\n            [showClear]="true"\r\n            placeholder="&nbsp;"\r\n            appendTo="body"\r\n            [disabled]="isReadOpenMode"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="onCancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button type="button" color="primary" mat-raised-button (click)="validate()" [disabled]="!selectedOptionCode">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/item-part-number-form/popups/add-associated-config-pack-popup/add-associated-config-pack-popup.component.ts':
      /*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item-part-number-form/popups/add-associated-config-pack-popup/add-associated-config-pack-popup.component.ts ***!
  \*********************************************************************************************************************************************************/
      /*! exports provided: AddAssociatedConfigPackPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AddAssociatedConfigPackPopupComponent',
          function() {
            return AddAssociatedConfigPackPopupComponent;
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
        /* harmony import */ var _form_item_part_number_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../form/item-part-number.service */ './src/app/main/engineering-management/item-part-number-form/form/item-part-number.service.ts'
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

        var AddAssociatedConfigPackPopupComponent = /** @class */ (function(_super) {
          __extends(AddAssociatedConfigPackPopupComponent, _super);
          function AddAssociatedConfigPackPopupComponent(sessionService, itemPartNumberService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'AddAssociatedConfigPackPopupComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.itemPartNumberService = itemPartNumberService;
            _this.onAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          AddAssociatedConfigPackPopupComponent.prototype.ngOnInit = function() {
            var _this = this;
            var bireConf = this.data;
            if (!!bireConf) {
              var bireItem = {
                familyCode: bireConf.familyCode,
                structureType: bireConf.structureType,
                variantCode: bireConf.variantCode,
                chapter: bireConf.chapter,
                section: bireConf.section,
                subject: bireConf.subject,
                sheet: bireConf.sheet,
                marks: bireConf.marks
              };
              this.itemPartNumberService.findBirePackBaseOptionsByItemDropDown(bireItem).subscribe(function(res) {
                _this.optionCodeList = res;
              });
            }
          };
          AddAssociatedConfigPackPopupComponent.prototype.validate = function() {
            this.onAdded.emit(this.selectedOptionCode);
            this.display = false;
          };
          AddAssociatedConfigPackPopupComponent.prototype.onCancel = function() {
            this.display = false;
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            AddAssociatedConfigPackPopupComponent.prototype,
            'onAdded',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            AddAssociatedConfigPackPopupComponent.prototype,
            'data',
            void 0
          );
          AddAssociatedConfigPackPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-add-associated-config-pack-popup',
                template: __webpack_require__(
                  /*! ./add-associated-config-pack-popup.component.html */ './src/app/main/engineering-management/item-part-number-form/popups/add-associated-config-pack-popup/add-associated-config-pack-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__['SessionService'],
                _form_item_part_number_service__WEBPACK_IMPORTED_MODULE_4__['ItemPartNumberService']
              ])
            ],
            AddAssociatedConfigPackPopupComponent
          );
          return AddAssociatedConfigPackPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/item-part-number-form/popups/add-config-pack/add-config-pack.component.html':
      /*!*************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item-part-number-form/popups/add-config-pack/add-config-pack.component.html ***!
  \*************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".configurationCode" | translate }}</label>\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="bireConfigurationDTO.configurationCode" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".configurationName" | translate }}</label>\r\n        <div class="form-control">\r\n          <input\r\n            type="text"\r\n            class="aw-input"\r\n            maxlength="100"\r\n            [(ngModel)]="bireConfigurationDTO.configurationName"\r\n            [disabled]="isReadOpenMode"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class="form-group required">\r\n        <label class="form-label">{{ getComponentName() + ".vintageConfigDate" | translate }}</label>\r\n        <div class="form-control">\r\n          <p-calendar\r\n            showButtonBar="true"\r\n            [monthNavigator]="true"\r\n            [yearNavigator]="true"\r\n            [yearRange]="sessionService.calendarYearRange"\r\n            class="aw-calendar"\r\n            [dateFormat]="sessionService.dateFormatPrimeNG"\r\n            [locale]="sessionService.calendarFormat"\r\n            [(ngModel)]="bireConfigurationDTO.vintageConfigDate"\r\n            appendTo="body"\r\n            [disabled]="isReadOpenMode"\r\n          ></p-calendar>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="onCancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      type="button"\r\n      *ngIf="!isReadOpenMode"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [disabled]="!bireConfigurationDTO.vintageConfigDate"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/item-part-number-form/popups/add-config-pack/add-config-pack.component.ts':
      /*!***********************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item-part-number-form/popups/add-config-pack/add-config-pack.component.ts ***!
  \***********************************************************************************************************************/
      /*! exports provided: AddConfigPackComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AddConfigPackComponent', function() {
          return AddConfigPackComponent;
        });
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

        var AddConfigPackComponent = /** @class */ (function(_super) {
          __extends(AddConfigPackComponent, _super);
          function AddConfigPackComponent(sessionService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'AddConfigPackComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.onAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          AddConfigPackComponent.prototype.ngOnInit = function() {
            this.bireConfigurationDTO = {};
            if (!!this.pageData && !!this.input && !!this.input.object && Object.keys(this.input.object).length === 0) {
              this.bireConfigurationDTO.configurationCode =
                '' +
                this.pageData.familyCode +
                this.pageData.variantCode +
                this.pageData.chapter +
                this.pageData.section +
                this.pageData.subject +
                this.pageData.sheet +
                this.pageData.marks +
                this.pageData.versionNumber;
              this.updateOpenMode(this.input.openMode);
            } else {
              if (!!this.input && !!this.input.object && Object.keys(this.input.object).length > 0) {
                this.bireConfigurationDTO = this.input.object;
                this.updateOpenMode(this.input.openMode);
              }
            }
          };
          AddConfigPackComponent.prototype.validate = function() {
            if (!!this.input && !!this.input.object && Object.keys(this.input.object).length > 0) {
              this.onEdit.emit(this.bireConfigurationDTO);
            } else {
              this.onAdded.emit(this.bireConfigurationDTO);
            }
            this.display = false;
          };
          AddConfigPackComponent.prototype.onCancel = function() {
            this.display = false;
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            AddConfigPackComponent.prototype,
            'input',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            AddConfigPackComponent.prototype,
            'pageData',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            AddConfigPackComponent.prototype,
            'onAdded',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            AddConfigPackComponent.prototype,
            'onEdit',
            void 0
          );
          AddConfigPackComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-add-config-pack',
                template: __webpack_require__(
                  /*! ./add-config-pack.component.html */ './src/app/main/engineering-management/item-part-number-form/popups/add-config-pack/add-config-pack.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__['SessionService']
              ])
            ],
            AddConfigPackComponent
          );
          return AddConfigPackComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/item-part-number-form/popups/add-rule-popup/add-rule-popup.component.html':
      /*!***********************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item-part-number-form/popups/add-rule-popup/add-rule-popup.component.html ***!
  \***********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".addRule" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="form-group required">\r\n        <label class="form-label">{{ getComponentName() + ".property" | translate }}</label>\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            placeholder="&nbsp;"\r\n            [showClear]="propertySelected !== \'\'"\r\n            appendTo="body"\r\n            [options]="propertiesOptionsList"\r\n            [(ngModel)]="propertySelected"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group required">\r\n        <label class="form-label">{{ getComponentName() + ".item" | translate }}</label>\r\n        <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n          <div class="form-control-data" (click)="openItemTableDialog()">\r\n            {{ item.chapter }} <span *ngIf="item.section">- {{ item.section }}</span>\r\n            <span *ngIf="item.subject">- {{ item.subject }}</span> <span *ngIf="item.sheet">- {{ item.sheet }}</span>\r\n            <span *ngIf="item.marks">- {{ item.marks }}</span>\r\n          </div>\r\n\r\n          <div\r\n            *ngIf="item.chapter && item.section && item.subject && item.sheet && item.marks"\r\n            class="btn-clear-wrapper"\r\n          >\r\n            <i\r\n              class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n              aria-hidden="true"\r\n              (click)="\r\n                item.chapter = undefined;\r\n                item.section = undefined;\r\n                item.subject = undefined;\r\n                item.sheet = undefined;\r\n                item.marks = undefined;\r\n                item.versionNumber = undefined\r\n              "\r\n            ></i>\r\n          </div>\r\n          <div class="btn-search-wrapper">\r\n            <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="openItemTableDialog()"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".isn" | translate }}</label>\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            placeholder="&nbsp;"\r\n            [showClear]="isnSelected !== \'\'"\r\n            appendTo="body"\r\n            [options]="isnOptionsList"\r\n            [(ngModel)]="isnSelected"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group flex--2">\r\n        <label class="form-label"> {{ getComponentName() + ".applicability" | translate }} </label>\r\n\r\n        <div class="form-control form-control-with-btn">\r\n          <input type="text" class="aw-input" disabled [ngModel]="applicability" />\r\n          <i\r\n            class="fa fa-fw fa-search aw-icon"\r\n            aria-hidden="true"\r\n            pTooltip="{{ \'global.search\' | translate }}"\r\n            tooltipPosition="top"\r\n            (click)="openApplicabilityDialog()"\r\n          ></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="onCancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button type="button" color="primary" mat-raised-button (click)="validate()" [disabled]="disableItemInput()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-item\r\n  *ngIf="showItemPopup"\r\n  [(display)]="showItemPopup"\r\n  (onValidated)="onSelectedItem($event)"\r\n></aw-dialog-search-item>\r\n\r\n<aw-dialog-table\r\n  *ngIf="showApplicabilityPopup"\r\n  [(display)]="showApplicabilityPopup"\r\n  [data]="applicabilityTableData"\r\n  (onSelected)="setSelectedApplicability($event)"\r\n></aw-dialog-table>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/item-part-number-form/popups/add-rule-popup/add-rule-popup.component.scss':
      /*!***********************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item-part-number-form/popups/add-rule-popup/add-rule-popup.component.scss ***!
  \***********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.aw-modal ::ng-deep.ng-tns-c5-21 {\n  align-content: center;\n  width: 40%; }\n\n:host .separator {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9lbmdpbmVlcmluZy1tYW5hZ2VtZW50L2l0ZW0tcGFydC1udW1iZXItZm9ybS9wb3B1cHMvYWRkLXJ1bGUtcG9wdXAvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGVuZ2luZWVyaW5nLW1hbmFnZW1lbnRcXGl0ZW0tcGFydC1udW1iZXItZm9ybVxccG9wdXBzXFxhZGQtcnVsZS1wb3B1cFxcYWRkLXJ1bGUtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZW5naW5lZXJpbmctbWFuYWdlbWVudC9pdGVtLXBhcnQtbnVtYmVyLWZvcm0vcG9wdXBzL2FkZC1ydWxlLXBvcHVwL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFDRixFQUFBOztBQUVBO0VDZ0JFLGFBQWE7RUFDYixtQkFBbUI7RURiakIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2VuZ2luZWVyaW5nLW1hbmFnZW1lbnQvaXRlbS1wYXJ0LW51bWJlci1mb3JtL3BvcHVwcy9hZGQtcnVsZS1wb3B1cC9hZGQtcnVsZS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbi5hdy1tb2RhbCA6Om5nLWRlZXAubmctdG5zLWM1LTIxIHtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQwJVxyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgLnNlcGFyYXRvciB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/engineering-management/item-part-number-form/popups/add-rule-popup/add-rule-popup.component.ts':
      /*!*********************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item-part-number-form/popups/add-rule-popup/add-rule-popup.component.ts ***!
  \*********************************************************************************************************************/
      /*! exports provided: AddRulePopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AddRulePopupComponent', function() {
          return AddRulePopupComponent;
        });
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
        /* harmony import */ var _form_item_part_number_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../form/item-part-number.service */ './src/app/main/engineering-management/item-part-number-form/form/item-part-number.service.ts'
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

        var AddRulePopupComponent = /** @class */ (function(_super) {
          __extends(AddRulePopupComponent, _super);
          function AddRulePopupComponent(itemPartNumberService, messageaService, propertiesService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'AddRulePopupComponent'
              ) || this;
            _this.itemPartNumberService = itemPartNumberService;
            _this.messageaService = messageaService;
            _this.propertiesService = propertiesService;
            _this.onValidate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.init();
            _this.loadISNDropdown();
            return _this;
          }
          AddRulePopupComponent.prototype.ngOnInit = function() {
            if (!!this.propertyOptions) {
              this.propertiesOptionsList = this.propertyOptions;
            }
            this.initApplicabilityData();
            this.initItemData();
          };
          AddRulePopupComponent.prototype.validate = function() {
            var _this = this;
            var input = {
              propertyKey: this.propertySelected,
              bireItemDTO: this.item,
              isn: this.isnSelected,
              applicability: this.applicability
            };
            this.itemPartNumberService.getItemPartNumberPropertyValue(input).subscribe(
              function(result) {
                _this.onValidate.emit(result);
                _this.display = false;
              },
              function(error) {
                _this.messageaService.showWarningMessage(error.error.errorDesc);
              }
            );
          };
          AddRulePopupComponent.prototype.onCancel = function() {
            this.init();
            this.display = false;
          };
          AddRulePopupComponent.prototype.openApplicabilityDialog = function() {
            this.showApplicabilityPopup = true;
          };
          AddRulePopupComponent.prototype.setSelectedApplicability = function(event) {
            this.applicability =
              this.applicability === null || this.applicability === undefined
                ? this.generateApplicabilityString(event)
                : this.applicability + '/' + this.generateApplicabilityString(event);
          };
          AddRulePopupComponent.prototype.openItemTableDialog = function() {
            this.showItemPopup = true;
          };
          AddRulePopupComponent.prototype.onSelectedItem = function(event) {
            this.item.familyCode = event.familyCode || '';
            this.item.variantCode = event.variantCode || '';
            this.item.structureType = event.structureType || '';
            this.item.chapter = event.chapter || '';
            this.item.section = event.section || '';
            this.item.sheet = event.sheet || '';
            this.item.subject = event.subject || '';
            this.item.marks = event.marks || '';
          };
          AddRulePopupComponent.prototype.disableItemInput = function() {
            var response = true;
            response =
              this.propertySelected === null ||
              this.propertySelected === undefined ||
              this.item === null ||
              this.item === undefined ||
              this.item.chapter === null ||
              this.item.chapter === undefined ||
              this.item.section === null ||
              this.item.section === undefined ||
              this.item.subject === null ||
              this.item.subject === undefined ||
              this.item.sheet === null ||
              this.item.sheet === undefined ||
              this.item.marks === null ||
              this.item.sheet === undefined
                ? true
                : false;
            return response;
          };
          AddRulePopupComponent.prototype.init = function() {
            this.propertySelected = '';
            this.propertiesOptionsList = [];
            this.isnSelected = '';
            this.isnOptionsList = [];
            this.applicability = '';
            this.item = {};
            this.showItemPopup = false;
            this.showApplicabilityPopup = false;
            this.keyMap = new Map();
            this.keyMap.set('structureType', this.propertiesService.getValue('getStructureTypeMap'));
            this.keyMap.set('itemType', this.propertiesService.getValue('getItemTypeMap'));
            this.keyMap.set(
              'itemFamilyCode',
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .ITEM_FAMILY_CODE_MAP
              )
            );
          };
          AddRulePopupComponent.prototype.loadISNDropdown = function() {
            var _this = this;
            this.itemPartNumberService.getISNOptions().subscribe(function(results) {
              _this.isnOptionsList = results;
            });
          };
          AddRulePopupComponent.prototype.initApplicabilityData = function() {
            var applicabilityTableCols = [
              { field: 'modelCode', alignment: 'left' },
              { field: 'modelName', alignment: 'left' }
            ];
            this.applicabilityTableData = {
              componentId: 'DialogApplicability',
              tableCols: applicabilityTableCols,
              tableRows: this.itemPartNumberService.findBireModelsByVariantPk(this.input),
              dataKey: undefined,
              selectionMode:
                _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableSelectionMode'].Multiple,
              globalFilter: true
            };
          };
          AddRulePopupComponent.prototype.generateApplicabilityString = function(event) {
            var result = '';
            if (event.length === 0) {
              result = '';
            } else if (event.length === 1) {
              result = '' + event[0].modelCode;
            } else if (event.length > 1) {
              result = '' + event[0].modelCode;
              for (var i = 1; i < event.length; i++) {
                result = result + '/' + event[i].modelCode;
              }
            }
            return result;
          };
          AddRulePopupComponent.prototype.initItemData = function() {
            var itemTableCols = [
              {
                field: 'familyCode',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'structureType',
                alignment: 'left',
                width: '20%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'variantCode',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'name',
                alignment: 'left',
                width: '30%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'chapter',
                alignment: 'left',
                width: '8%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'section',
                alignment: 'left',
                width: '8%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'subject',
                alignment: 'left',
                width: '8%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'sheet',
                alignment: 'left',
                width: '8%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'marks',
                alignment: 'left',
                width: '8%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'functionCode',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'itemNumber',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'itemType',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'fLocType',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'itemFamilyCode',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'configurableArticle',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_3__['TableColumnFilterMode']
                    .Input
              }
            ];
            this.itemTableData = {
              componentId: 'DialogItem',
              tableCols: itemTableCols,
              tableRows: !!this.input
                ? this.itemPartNumberService.findBireItemsBySearchCriteria(
                    this.input.familyCode || '',
                    this.input.structureType || '',
                    this.input.variantCode || ''
                  )
                : this.itemPartNumberService.findBireItemsBySearchCriteria('', '', ''),
              dataKey: undefined,
              selectionMode:
                _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_4__['TableSelectionMode'].Single,
              globalFilter: true
            };
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            AddRulePopupComponent.prototype,
            'propertyOptions',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            AddRulePopupComponent.prototype,
            'input',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            AddRulePopupComponent.prototype,
            'onValidate',
            void 0
          );
          AddRulePopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-add-rule-popup',
                template: __webpack_require__(
                  /*! ./add-rule-popup.component.html */ './src/app/main/engineering-management/item-part-number-form/popups/add-rule-popup/add-rule-popup.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./add-rule-popup.component.scss */ './src/app/main/engineering-management/item-part-number-form/popups/add-rule-popup/add-rule-popup.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _form_item_part_number_service__WEBPACK_IMPORTED_MODULE_8__['ItemPartNumberService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__['PropertiesService']
              ])
            ],
            AddRulePopupComponent
          );
          return AddRulePopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/item-part-number-form/popups/alternatives-pn-popup/alternatives-pn-popup.component.html':
      /*!*************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item-part-number-form/popups/alternatives-pn-popup/alternatives-pn-popup.component.html ***!
  \*************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".alternativesPnManagement" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="form-group" [ngClass]="{ required: newAlternative }">\r\n        <label class="form-label">{{ getComponentName() + ".alternativePN" | translate }}</label>\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            placeholder="&nbsp;"\r\n            [showClear]="true"\r\n            appendTo="body"\r\n            [options]="alternativePnOptionsList"\r\n            [(ngModel)]="alternative.pnPnCode"\r\n            [disabled]="!newAlternative"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".interchangeability" | translate }}</label>\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            placeholder="&nbsp;"\r\n            [showClear]="true"\r\n            appendTo="body"\r\n            [options]="interchangeabilityOptionsList"\r\n            [(ngModel)]="alternative.interchangeability"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="onCancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [disabled]="alternative.pnPnCode === null || alternative.pnPnCode === undefined"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/item-part-number-form/popups/alternatives-pn-popup/alternatives-pn-popup.component.ts':
      /*!***********************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item-part-number-form/popups/alternatives-pn-popup/alternatives-pn-popup.component.ts ***!
  \***********************************************************************************************************************************/
      /*! exports provided: AlternativesPnPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AlternativesPnPopupComponent',
          function() {
            return AlternativesPnPopupComponent;
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

        var AlternativesPnPopupComponent = /** @class */ (function(_super) {
          __extends(AlternativesPnPopupComponent, _super);
          function AlternativesPnPopupComponent() {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'AlternativesPnPopupComponent'
              ) || this;
            _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.init();
            return _this;
          }
          AlternativesPnPopupComponent.prototype.ngOnInit = function() {
            this.alternative = this.inputAlternative;
            this.alternativePnOptionsList = this.alternativePnOptions;
            this.interchangeabilityOptionsList = this.interchangeabilityOptions;
          };
          AlternativesPnPopupComponent.prototype.onCancel = function() {
            this.init();
            this.display = false;
          };
          AlternativesPnPopupComponent.prototype.validate = function() {
            if (this.newAlternative) {
              this.onCreate.emit(this.alternative);
              this.display = false;
            } else {
              this.onUpdate.emit(this.alternative);
              this.display = false;
            }
          };
          AlternativesPnPopupComponent.prototype.init = function() {
            this.alternative = {};
            this.alternativePnOptionsList = [];
            this.interchangeabilityOptionsList = [];
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            AlternativesPnPopupComponent.prototype,
            'inputAlternative',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            AlternativesPnPopupComponent.prototype,
            'alternativePnOptions',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            AlternativesPnPopupComponent.prototype,
            'interchangeabilityOptions',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            AlternativesPnPopupComponent.prototype,
            'newAlternative',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            AlternativesPnPopupComponent.prototype,
            'onCreate',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            AlternativesPnPopupComponent.prototype,
            'onUpdate',
            void 0
          );
          AlternativesPnPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-alternatives-pn-popup',
                template: __webpack_require__(
                  /*! ./alternatives-pn-popup.component.html */ './src/app/main/engineering-management/item-part-number-form/popups/alternatives-pn-popup/alternatives-pn-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [])
            ],
            AlternativesPnPopupComponent
          );
          return AlternativesPnPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/item-part-number-form/popups/config-pack-compatibility-popup/config-pack-compatibility-popup.component.html':
      /*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item-part-number-form/popups/config-pack-compatibility-popup/config-pack-compatibility-popup.component.html ***!
  \*********************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".configurationCompatibilityResult" | translate }}</label>\r\n        <div class="form-control">\r\n          <textarea\r\n            class="aw-textarea"\r\n            [rows]="5"\r\n            pInputTextarea\r\n            [(ngModel)]="compatibilityResult"\r\n            [disabled]="true"\r\n          ></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="onCancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/item-part-number-form/popups/config-pack-compatibility-popup/config-pack-compatibility-popup.component.ts':
      /*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item-part-number-form/popups/config-pack-compatibility-popup/config-pack-compatibility-popup.component.ts ***!
  \*******************************************************************************************************************************************************/
      /*! exports provided: ConfigPackCompatibilityPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ConfigPackCompatibilityPopupComponent',
          function() {
            return ConfigPackCompatibilityPopupComponent;
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
        /* harmony import */ var _form_item_part_number_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../form/item-part-number.service */ './src/app/main/engineering-management/item-part-number-form/form/item-part-number.service.ts'
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

        var ConfigPackCompatibilityPopupComponent = /** @class */ (function(_super) {
          __extends(ConfigPackCompatibilityPopupComponent, _super);
          function ConfigPackCompatibilityPopupComponent(sessionService, itemPartNumberService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'ConfigPackCompatibilityPopupComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.itemPartNumberService = itemPartNumberService;
            return _this;
          }
          ConfigPackCompatibilityPopupComponent.prototype.ngOnInit = function() {
            this.verifyPacksCompatibility();
          };
          ConfigPackCompatibilityPopupComponent.prototype.onCancel = function() {
            this.display = false;
          };
          ConfigPackCompatibilityPopupComponent.prototype.verifyPacksCompatibility = function() {
            var _this = this;
            this.itemPartNumberService
              .verifyEvolutionInterdependenceForConfiguration(this.input)
              .subscribe(function(res) {
                _this.compatibilityResult = res;
              });
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            ConfigPackCompatibilityPopupComponent.prototype,
            'input',
            void 0
          );
          ConfigPackCompatibilityPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-config-pack-compatibility-popup',
                template: __webpack_require__(
                  /*! ./config-pack-compatibility-popup.component.html */ './src/app/main/engineering-management/item-part-number-form/popups/config-pack-compatibility-popup/config-pack-compatibility-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__['SessionService'],
                _form_item_part_number_service__WEBPACK_IMPORTED_MODULE_4__['ItemPartNumberService']
              ])
            ],
            ConfigPackCompatibilityPopupComponent
          );
          return ConfigPackCompatibilityPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/item-part-number-form/popups/show-packs-popup/show-packs-popup.component.html':
      /*!***************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item-part-number-form/popups/show-packs-popup/show-packs-popup.component.html ***!
  \***************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="30">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }} ({{ packsDataSource.dataCount }})</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n      <div class="form-control">\r\n        <a-table [dataSource]="packsDataSource">\r\n          <ng-template tableActionsDef>\r\n            <button\r\n              *ngIf="!isReadOpenMode && packsDataSource.hasDataSelection"\r\n              type="button"\r\n              mat-raised-button\r\n              color="warn"\r\n              (click)="deleteSelectedPacks()"\r\n            >\r\n              {{ "global.delete" | translate }}\r\n            </button>\r\n\r\n            <button\r\n              type="button"\r\n              *ngIf="!isReadOpenMode && !packsDataSource.hasDataSelection"\r\n              mat-raised-button\r\n              (click)="addPacksDialog()"\r\n            >\r\n              {{ "global.add" | translate }}\r\n            </button>\r\n          </ng-template>\r\n        </a-table>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOpenMode" type="button" mat-raised-button (click)="onCancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="onCancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" color="primary" type="button" mat-raised-button (click)="onValidate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-add-associated-config-pack-popup\r\n  *ngIf="showAssociatedPackPopup"\r\n  [(display)]="showAssociatedPackPopup"\r\n  (onAdded)="onAssociatedPackAdd($event)"\r\n  [data]="data"\r\n></aw-add-associated-config-pack-popup>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/item-part-number-form/popups/show-packs-popup/show-packs-popup.component.ts':
      /*!*************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item-part-number-form/popups/show-packs-popup/show-packs-popup.component.ts ***!
  \*************************************************************************************************************************/
      /*! exports provided: ShowPacksPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ShowPacksPopupComponent',
          function() {
            return ShowPacksPopupComponent;
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
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _form_item_part_number_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../form/item-part-number.service */ './src/app/main/engineering-management/item-part-number-form/form/item-part-number.service.ts'
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

        var ShowPacksPopupComponent = /** @class */ (function(_super) {
          __extends(ShowPacksPopupComponent, _super);
          function ShowPacksPopupComponent(
            messageaService,
            sessionService,
            itemPartNumberService,
            confirmationService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'ShowPacksPopupComponent'
              ) || this;
            _this.messageaService = messageaService;
            _this.sessionService = sessionService;
            _this.itemPartNumberService = itemPartNumberService;
            _this.confirmationService = confirmationService;
            _this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          ShowPacksPopupComponent.prototype.ngOnInit = function() {
            this.packsDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [{ field: 'packBaseOptionCode', translateKey: this.getTranslateKey('packBaseOptionCode') }],
              data: []
            });
            this.fetchTableData();
          };
          ShowPacksPopupComponent.prototype.fetchTableData = function() {
            var _this = this;
            var configurationPackListInput = {
              bireItemVersionDTO: this.data,
              configurationCode: this.input.configurationCode
            };
            this.itemPartNumberService
              .findBireConfigurationPacksByItemVersionAndConfigurationCode(configurationPackListInput)
              .subscribe(function(res) {
                _this.packsDataSource.setData(res);
                _this.associatedpackLists.forEach(function(dto) {
                  if (dto.packName === _this.input.configurationCode) {
                    dto.associatedList.forEach(function(row) {
                      _this.packsDataSource.addData([
                        {
                          configurationCode: dto.packName,
                          packBaseOptionCode: row
                        }
                      ]);
                    });
                  }
                });
              });
          };
          ShowPacksPopupComponent.prototype.onCancel = function() {
            this.display = false;
          };
          ShowPacksPopupComponent.prototype.addPacksDialog = function() {
            this.showAssociatedPackPopup = true;
          };
          ShowPacksPopupComponent.prototype.onAssociatedPackAdd = function(ev) {
            var isFound = false;
            this.packsDataSource.dataSrc.filter(function(packs) {
              if (packs.packBaseOptionCode === ev) {
                isFound = true;
              }
            });
            if (!isFound) {
              this.packsDataSource.addData([
                {
                  configurationCode: this.input.configurationCode,
                  familyCode: this.input.familyCode,
                  structureType: this.input.structureType,
                  variantCode: this.input.variantCode,
                  chapter: this.input.chapter,
                  section: this.input.section,
                  subject: this.input.subject,
                  sheet: this.input.sheet,
                  marks: this.input.marks,
                  packBaseOptionCode: ev
                }
              ]);
            } else {
              this.messageaService.showErrorMessage(this.getTranslateKey('errorAlreadyConfCodeExisting'));
            }
          };
          ShowPacksPopupComponent.prototype.onValidate = function() {
            this.onAdd.emit(this.packsDataSource.dataSrc);
            this.onCancel();
          };
          ShowPacksPopupComponent.prototype.deleteSelectedPacks = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey('confirmDeleteSelectedPacks'),
              accept: function() {
                _this.packsDataSource.deleteDataSelection();
              }
            });
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            ShowPacksPopupComponent.prototype,
            'input',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            ShowPacksPopupComponent.prototype,
            'onAdd',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            ShowPacksPopupComponent.prototype,
            'data',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            ShowPacksPopupComponent.prototype,
            'associatedpackLists',
            void 0
          );
          ShowPacksPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-show-packs-popup',
                template: __webpack_require__(
                  /*! ./show-packs-popup.component.html */ './src/app/main/engineering-management/item-part-number-form/popups/show-packs-popup/show-packs-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__['MessageService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__['SessionService'],
                _form_item_part_number_service__WEBPACK_IMPORTED_MODULE_7__['ItemPartNumberService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__['ConfirmationService']
              ])
            ],
            ShowPacksPopupComponent
          );
          return ShowPacksPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__['DialogComponent']);

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
//# sourceMappingURL=engineering-management-item-part-number-form-item-part-number-form-module.js.map
