(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['maintenance-update-logbook-update-logbook-module'],
  {
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

    /***/ './src/app/main/maintenance/update-logbook/form/dialog-record-report/dialog-record-report.component.html':
      /*!***************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/update-logbook/form/dialog-record-report/dialog-record-report.component.html ***!
  \***************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal style="height: 28em;" class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".logbookUpdate" | translate }} {{ reportTitle() }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group">\r\n      <label class="form-label"></label>\r\n\r\n      <div class="form-control">\r\n        <textarea pInputTextArea [rows]="15" type="text" class="aw-textarea" [(ngModel)]="message" disabled></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="close()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/update-logbook/form/dialog-record-report/dialog-record-report.component.ts':
      /*!*************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/update-logbook/form/dialog-record-report/dialog-record-report.component.ts ***!
  \*************************************************************************************************************/
      /*! exports provided: DialogRecordReportComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogRecordReportComponent',
          function() {
            return DialogRecordReportComponent;
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
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

        var DialogRecordReportComponent = /** @class */ (function(_super) {
          __extends(DialogRecordReportComponent, _super);
          function DialogRecordReportComponent() {
            return (
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'DialogRecordReportComponent'
              ) || this
            );
          }
          Object.defineProperty(DialogRecordReportComponent.prototype, 'report', {
            set: function(obj) {
              this.reportObject = obj;
              this.setMessage();
            },
            enumerable: true,
            configurable: true
          });
          DialogRecordReportComponent.prototype.reportTitle = function() {
            var headerTitle = '';
            if (!!this.reportObject && !!this.reportObject.workPackageNumber) {
              headerTitle = String(this.reportObject.workPackageNumber);
            }
            return headerTitle;
          };
          DialogRecordReportComponent.prototype.setMessage = function() {
            this.message = '';
            if (!!this.reportObject && !!this.reportObject.messages) {
              this.message = this.reportObject.messages
                .map(function(x) {
                  return x.listMessages;
                })
                .filter(function(list) {
                  return !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_3__['ListUtils'].isNullOrEmpty(list);
                })
                .reduce(function(acc, x) {
                  return acc.concat(x);
                }, [])
                .map(function(y) {
                  return y.message;
                })
                .filter(function(message) {
                  return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_4__['StringUtils'].isNullOrEmpty(message);
                })
                .join('\n');
            }
          };
          DialogRecordReportComponent.prototype.close = function() {
            this.display = false;
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            DialogRecordReportComponent.prototype,
            'report',
            null
          );
          DialogRecordReportComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-record-report',
                template: __webpack_require__(
                  /*! ./dialog-record-report.component.html */ './src/app/main/maintenance/update-logbook/form/dialog-record-report/dialog-record-report.component.html'
                )
              }),
              __metadata('design:paramtypes', [])
            ],
            DialogRecordReportComponent
          );
          return DialogRecordReportComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/update-logbook/form/update-logbook-form.component.html':
      /*!*****************************************************************************************!*\
  !*** ./src/app/main/maintenance/update-logbook/form/update-logbook-form.component.html ***!
  \*****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ getComponentName() + ".title" | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div *ngIf="!isCreateOpenMode && componentData && componentData.objectId" class="page-subtitle">\r\n          <span *ngIf="bidoEquipmentDTO.equipmentFunction === \'1-air\'">\r\n            - WP {{ workPackage.projectNumber }}, {{ getComponentName() + ".aircraft" | translate }}\r\n            {{ subtitleAsset }}</span\r\n          >\r\n          <span *ngIf="bidoEquipmentDTO.equipmentFunction === \'2-eng\'">\r\n            - WP {{ workPackage.projectNumber }}, {{ getComponentName() + ".engine" | translate }}\r\n            {{ subtitleAsset }}</span\r\n          >\r\n          <span\r\n            *ngIf="bidoEquipmentDTO.equipmentFunction !== \'1-air\' && bidoEquipmentDTO.equipmentFunction !== \'2-eng\'"\r\n          >\r\n            - WP {{ workPackage.projectNumber }}, {{ getComponentName() + ".equipment" | translate }}\r\n            {{ subtitleAsset }}</span\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button *ngIf="recordEvent" type="button" mat-raised-button class="custom-margin" (click)="report()">\r\n      {{ componentData.componentId + ".report" | translate }}\r\n    </button>\r\n    <button\r\n      type="button"\r\n      mat-raised-button\r\n      class="custom-margin"\r\n      (click)="onClickConfirm()"\r\n      *ngIf="workPackage && !workPackage.maintenancePlanUpdatedAttributeId"\r\n    >\r\n      <i class="fa fa-fw fa-check"></i>\r\n      {{ getComponentName() + ".confirmUpdateLogbook" | translate }}\r\n    </button>\r\n    <button\r\n      type="button"\r\n      mat-raised-button\r\n      class="custom-margin"\r\n      (click)="onClickRevert()"\r\n      *ngIf="workPackage && workPackage.maintenancePlanUpdatedAttributeId"\r\n    >\r\n      <i class="fa fa-fw fa-times"></i>\r\n      {{ getComponentName() + ".revertUpdateLogbook" | translate }}\r\n    </button>\r\n  </div>\r\n\r\n  <button\r\n    id="actions"\r\n    mat-icon-button\r\n    class="mat-elevation-z1"\r\n    matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n    matTooltipPosition="above"\r\n    aria-label="Show all actions"\r\n    [matMenuTriggerFor]="actions"\r\n  >\r\n    <mat-icon>more_horiz</mat-icon>\r\n  </button>\r\n\r\n  <mat-menu #actions="matMenu">\r\n    <button type="button" mat-menu-item (click)="onClickRefresh()">{{ "global.refresh" | translate }}</button>\r\n    <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n      {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n    </button>\r\n  </mat-menu>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <!-- Main -->\r\n      <div class="grid-row">\r\n        <!-- Main information -->\r\n        <div class="grid-cell--6">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".mainInformation" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <div class="form-group flex--2">\r\n                    <label class="form-label">{{ getComponentName() + ".name" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="workPackage.projectName" [disabled]="true" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--1">\r\n                    <label class="form-label">{{ getComponentName() + ".status" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="wpStatusList"\r\n                        [(ngModel)]="workPackage.statusState"\r\n                        [showClear]="true"\r\n                        placeholder="&nbsp;"\r\n                        [disabled]="true"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group flex--2">\r\n                    <label class="form-label">{{ getComponentName() + ".asset" | translate }}</label>\r\n                    <div class="form-control form-control-with-actions" style="margin-top: 10px">\r\n                      <span class="spanMargin" *ngIf="bidoEquipmentDTO.equipmentFunction === \'1-air\'"\r\n                        >{{ getComponentName() + ".aircraft" | translate }} {{ subtitleAsset }}</span\r\n                      >\r\n\r\n                      <span class="spanMargin" *ngIf="bidoEquipmentDTO.equipmentFunction === \'2-eng\'"\r\n                        >{{ getComponentName() + ".engine" | translate }} {{ subtitleAsset }}</span\r\n                      >\r\n\r\n                      <span\r\n                        class="spanMargin"\r\n                        *ngIf="\r\n                          bidoEquipmentDTO.equipmentFunction !== \'1-air\' &&\r\n                          bidoEquipmentDTO.equipmentFunction !== \'2-eng\'\r\n                        "\r\n                        >{{ getComponentName() + ".equipment" | translate }} {{ subtitleAsset }}</span\r\n                      >\r\n                      <div class="form-control-actions">\r\n                        <i\r\n                          class="fa fa-fw fa-external-link aw-icon"\r\n                          aria-hidden="true"\r\n                          pTooltip="{{ \'global.open\' | translate }}"\r\n                          tooltipPosition="top"\r\n                          (click)="openLogbookAsset()"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--1">\r\n                    <label class="form-label">{{ getComponentName() + ".logbookUpdateStatus" | translate }}</label>\r\n                    <div class="form-control" style="margin-top: 10px">\r\n                      <!-- <input type="text" class="aw-input" [(ngModel)]="workPackage.statusState" [disabled]="true" /> -->\r\n                      <span *ngIf="warningCount === 0" class="alert alert--ok">\r\n                        {{ getComponentName() + ".alertOk" | translate }}\r\n                      </span>\r\n\r\n                      <span *ngIf="warningCount >= 1" class="alert alert--nok">\r\n                        {{ getComponentName() + ".alertNok" | translate }}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group flex--2">\r\n                    <label class="form-label">{{ getComponentName() + ".mroCenter" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [(ngModel)]="workPackage.bireRepairCenterCode"\r\n                        [disabled]="true"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--1">\r\n                    <label class="form-label">{{ getComponentName() + ".assignedTo" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [(ngModel)]="workPackage.receivingAssignedTo"\r\n                        [disabled]="true"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".startDate" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-calendar showButtonBar="true" [monthNavigator]="true" [yearNavigator]="true" [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="workPackage.projectStartDate"\r\n                        [disabled]="true"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".dueDate" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-calendar showButtonBar="true" [monthNavigator]="true" [yearNavigator]="true" [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="workPackage.projectDueDate"\r\n                        [disabled]="true"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".endDate" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-calendar showButtonBar="true" [monthNavigator]="true" [yearNavigator]="true" [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="workPackage.projectEndDate"\r\n                        [disabled]="true"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Summary -->\r\n        <div class="grid-cell--6">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container loading-indicator">\r\n                <div class="grid-cell-title">\r\n                  <span>{{ getComponentName() + ".summary" | translate }}</span>\r\n                  <div *ngIf="isSummaryTableLoading" class="lds-hourglass"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="row">\r\n                <div class="table-summary-wrapper">\r\n                  <p-table\r\n                    [resizableColumns]="true"\r\n                    class="aw-table2 summary"\r\n                    [columns]="summaryDataCols"\r\n                    [value]="summaryData"\r\n                  >\r\n                    <ng-template pTemplate="colgroup" let-columns>\r\n                      <colgroup>\r\n                        <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="header" let-columns>\r\n                      <tr>\r\n                        <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          <span> {{ getComponentName() + "." + col.field | translate }} </span>\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="body" let-columns="columns" let-rowData>\r\n                      <tr>\r\n                        <td\r\n                          *ngFor="let col of columns"\r\n                          [ngSwitch]="col.field"\r\n                          [ngStyle]="{ \'text-align\': col.alignment }"\r\n                        >\r\n                          <span\r\n                            *ngSwitchCase="\'nok\'"\r\n                            class="control-result"\r\n                            [ngClass]="{ toBeRecorded: rowData[\'nok\'] > 0 }"\r\n                          >\r\n                            {{ rowData[col.field] }}\r\n                          </span>\r\n\r\n                          <span *ngSwitchCase="\'ok\'" class="control-result" [ngClass]="{ ok: rowData[\'ok\'] > 0 }">\r\n                            {{ rowData[col.field] }}\r\n                          </span>\r\n\r\n                          <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n              <div class="row" style="width: 100%">\r\n                <div class="form-group"></div>\r\n                <div class="form-group"></div>\r\n                <div class="form-group"></div>\r\n                <div class="form-group"></div>\r\n              </div>\r\n              <div class="row">\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ getComponentName() + ".recordDate" | translate }}</label>\r\n                  <div class="form-control">\r\n                    <p-calendar\r\n                      showButtonBar="true"\r\n                      [monthNavigator]="true"\r\n                      [yearNavigator]="true"\r\n                      [yearRange]="sessionService.calendarYearRange"\r\n                      class="aw-calendar"\r\n                      [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                      [locale]="sessionService.calendarFormat"\r\n                      [disabled]="isReadOpenMode"\r\n                      [(ngModel)]="recordDate"\r\n                      [showTime]="true"\r\n                    ></p-calendar>\r\n                  </div>\r\n                </div>\r\n                <div class="form-group"></div>\r\n                <div class="form-group" style="align-items: center;margin-top: 2em;">\r\n                  <button type="button" mat-raised-button (click)="onClickRecordAllEvent()">\r\n                    {{ getComponentName() + ".recordAllEvents" | translate }}\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Work orders -->\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container grid-cell-configuration-control">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container loading-indicator">\r\n                <div class="grid-cell-title">\r\n                  {{ getComponentName() + ".workOrders" | translate }}\r\n                  <div *ngIf="isEventCreatedLoading" class="lds-hourglass"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="list-with-details">\r\n                  <div class="list">\r\n                    <p-treeTable\r\n                      #ptable\r\n                      class="aw-tree-table2"\r\n                      [value]="workOrderStructure"\r\n                      selectionMode="single"\r\n                      [(selection)]="workOrderStructureSelection"\r\n                      [scrollable]="true"\r\n                      (onNodeSelect)="selectWorkOrderStructureNode()"\r\n                      (onNodeUnselect)="selectWorkOrderStructureNode()"\r\n                      [resizableColumns]="true"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isLoadingWorkOrderTable"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isLoadingWorkOrderTable" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              [(ngModel)]="searchWorkOrderStructureGlobalFilter"\r\n                              (keyup)="filterWorkOrderStructureWithGlobalFilter(searchWorkOrderStructureGlobalFilter)"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class="aw-table-icon-actions">\r\n                            <i\r\n                              class="fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n                              aria-hidden="true"\r\n                              pTooltip="{{\r\n                                getComponentName() + (workOrderUpdateFiltersVisible ? \'.hideFilters\' : \'.showFilters\')\r\n                                  | translate\r\n                              }}"\r\n                              tooltipPosition="top"\r\n                              [ngClass]="{ active: workOrderUpdateFiltersVisible }"\r\n                              (click)="opFilters.toggle($event)"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup">\r\n                        <colgroup>\r\n                          <col style="width: 20%" />\r\n                          <col style="width: 80%" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header">\r\n                        <tr>\r\n                          <th ttResizableColumn style="text-align: center"></th>\r\n                          <th ttResizableColumn style="text-align: left"></th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowNode let-rowData="rowData">\r\n                        <tr [ttSelectableRow]="rowNode">\r\n                          <td style="text-align: center">\r\n                            <span *ngIf="rowData.control === \'OK\'" class="alert alert--ok">\r\n                              {{ "ConfigurationControlComponent.ok" | translate }}\r\n                            </span>\r\n                            <span *ngIf="rowData.control === \'NOK\'" class="alert alert--nok">\r\n                              {{ "ConfigurationControlComponent.nok" | translate }}\r\n                            </span>\r\n                            <span *ngIf="rowData.control === \'WARN\'" class="alert alert--warning">\r\n                              {{ "ConfigurationControlComponent.warning" | translate }}\r\n                            </span>\r\n                          </td>\r\n                          <td style="text-align: left">\r\n                            <div class="display--flex-row flex-row--align-start">\r\n                              <p-treeTableToggler [rowNode]="rowNode"></p-treeTableToggler>\r\n\r\n                              <div>\r\n                                <ng-container>\r\n                                  <span class="node fl-node">{{ rowData.woCode }}</span>\r\n                                  <span\r\n                                    *ngIf="rowData.description"\r\n                                    class="node asset"\r\n                                    style="display: flex; white-space: normal"\r\n                                    >{{ rowData.description }}</span\r\n                                  >\r\n                                </ng-container>\r\n                              </div>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-treeTable>\r\n                  </div>\r\n\r\n                  <div class="details">\r\n                    <div class="column" *ngIf="selectedWorkOrder !== undefined">\r\n                      <div class="section">\r\n                        <div class="section-content">\r\n                          <div class="row configuration-control-node-action-list">\r\n                            <div class="row">\r\n                              <div class="form-group">\r\n                                <label class="form-label">{{ getComponentName() + ".status" | translate }}</label>\r\n                                <div class="form-control">\r\n                                  <input\r\n                                    type="text"\r\n                                    class="aw-input"\r\n                                    [(ngModel)]="selectedWorkOrder.status"\r\n                                    [disabled]="true"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">{{ getComponentName() + ".closedDate" | translate }}</label>\r\n                                <div class="form-control">\r\n                                  <p-calendar\r\n                                    showButtonBar="true"\r\n                                    [monthNavigator]="true"\r\n                                    [yearNavigator]="true"\r\n                                    [yearRange]="sessionService.calendarYearRange"\r\n                                    class="aw-calendar"\r\n                                    [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                                    [locale]="sessionService.calendarFormat"\r\n                                    [(ngModel)]="selectedWorkOrder.closedDate"\r\n                                    [disabled]="true"\r\n                                  ></p-calendar>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group flex--1">\r\n                                <label class="form-label">{{ getComponentName() + ".closedBy" | translate }}</label>\r\n                                <div class="form-control">\r\n                                  <input\r\n                                    type="text"\r\n                                    class="aw-input"\r\n                                    [(ngModel)]="selectedWorkOrder.closedBy"\r\n                                    [disabled]="true"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <!-- WO information -->\r\n                      <div class="section">\r\n                        <div class="section-content">\r\n                          <p-table\r\n                            [resizableColumns]="true"\r\n                            #ptable\r\n                            class="aw-table2"\r\n                            [columns]="tableDataCols"\r\n                            [value]="tableData"\r\n                            [(selection)]="selectedTableData"\r\n                          >\r\n                            <ng-template pTemplate="colgroup" let-columns>\r\n                              <colgroup>\r\n                                <col class="aw-table-checkbox-wrapper" />\r\n                                <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                              </colgroup>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate="caption">\r\n                              <div\r\n                                class="aw-table-header"\r\n                                [ngClass]="{ \'rows-selected\': selectedTableData.length > 0 }"\r\n                              >\r\n                                <div class="aw-table-global-filter">\r\n                                  <label class="aw-table-global-filter-label">\r\n                                    <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                                  </label>\r\n\r\n                                  <input\r\n                                    #ptableGlobalFilter\r\n                                    class="aw-table-global-filter-input"\r\n                                    type="text"\r\n                                    placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                                    (input)="ptable.filterGlobal($event.target.value, \'contains\')"\r\n                                  />\r\n                                </div>\r\n\r\n                                <div class="aw-table-actions">\r\n                                  <button\r\n                                    *ngIf="selectedTableData.length !== 0"\r\n                                    type="button"\r\n                                    mat-raised-button\r\n                                    (click)="onClickRecordEvent()"\r\n                                  >\r\n                                    {{ getComponentName() + ".recordEvent" | translate }}\r\n                                  </button>\r\n                                </div>\r\n                              </div>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate="header" let-columns>\r\n                              <tr>\r\n                                <th class="aw-table-checkbox-wrapper">\r\n                                  <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                                </th>\r\n                                <th\r\n                                  pResizableColumn\r\n                                  *ngFor="let col of columns"\r\n                                  [ngStyle]="{ \'text-align\': col.alignment }"\r\n                                >\r\n                                  {{ getComponentName() + "." + col.field | translate }}\r\n                                </th>\r\n                              </tr>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                              <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                                <td class="aw-table-checkbox-wrapper">\r\n                                  <p-tableCheckbox\r\n                                    class="aw-table-checkbox"\r\n                                    [value]="rowData"\r\n                                    [disabled]="!enableSelect(rowData)"\r\n                                  ></p-tableCheckbox>\r\n                                </td>\r\n\r\n                                <td\r\n                                  *ngFor="let col of columns"\r\n                                  [ngSwitch]="col.field"\r\n                                  [ngStyle]="{ \'text-align\': col.alignment }"\r\n                                >\r\n                                  <span\r\n                                    *ngSwitchCase="\'control\'"\r\n                                    [class.ok]="rowData[col.field] === \'OK\'"\r\n                                    [class.nok]="rowData[col.field] === \'NOK\'"\r\n                                    >{{ rowData[col.field] }}</span\r\n                                  >\r\n\r\n                                  <span *ngSwitchCase="\'eventKey\'">\r\n                                    <a (click)="onClickEventKey(rowData)">{{ rowData[col.field] }}</a>\r\n                                  </span>\r\n\r\n                                  <span *ngSwitchCase="\'eventDate\'">\r\n                                    <span>{{ rowData[col.field] | date: "yyyy/MM/dd HH:mm:ss" }}</span>\r\n                                  </span>\r\n\r\n                                  <span *ngSwitchDefault style="display: contents;"> {{ rowData[col.field] }} </span>\r\n                                </td>\r\n                              </tr>\r\n                            </ng-template>\r\n                          </p-table>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p-overlayPanel\r\n    #opFilters\r\n    class="aw-overlay"\r\n    (onShow)="workOrderFiltersVisible = true"\r\n    (onHide)="workOrderFiltersVisible = false"\r\n  >\r\n    <div class="row">\r\n      <div class="form-group flex--auto">\r\n        <label class="form-label"> &nbsp; </label>\r\n\r\n        <div class="form-control aw-selectbutton-wrapper">\r\n          <p-selectButton\r\n            [(ngModel)]="selectedControlList"\r\n            [options]="searchControlList"\r\n            multiple="multiple"\r\n          ></p-selectButton>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="row action-list">\r\n      <button type="button" mat-raised-button (click)="resetWorkOrderStructureCriteria()">\r\n        {{ getComponentName() + ".reset" | translate }}\r\n      </button>\r\n      <button\r\n        type="button"\r\n        mat-raised-button\r\n        (click)="opFilters.hide(); workOrderFiltersVisible = false; filterWorkOrderStructureWithCriteria()"\r\n      >\r\n        {{ getComponentName() + ".filter" | translate }}\r\n      </button>\r\n    </div>\r\n  </p-overlayPanel>\r\n</div>\r\n\r\n<aw-valid-wo-line\r\n  *ngIf="showValidationModal"\r\n  [(display)]="showValidationModal"\r\n  [elementsToValidate]="selectedTableData"\r\n  (onFinished)="validationFinished()"\r\n></aw-valid-wo-line>\r\n\r\n<aw-dialog-record-report\r\n  *ngIf="showRecordReport"\r\n  [(display)]="showRecordReport"\r\n  [report]="dialogRecordReportInput"\r\n></aw-dialog-record-report>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/update-logbook/form/update-logbook-form.component.scss':
      /*!*****************************************************************************************!*\
  !*** ./src/app/main/maintenance/update-logbook/form/update-logbook-form.component.scss ***!
  \*****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .grid-cell-configuration-control .list-with-details .details,\n:host .grid-cell-configuration-control .list-with-details .list {\n  max-height: 50rem; }\n\n:host .grid-cell-configuration-control .list-with-details .details {\n  flex-grow: 1; }\n\n:host .grid-cell-configuration-control .list-with-details .details .configuration-control-node-action-list {\n    justify-content: flex-end; }\n\n:host .grid-cell-configuration-control .list-with-details .details .configuration-control-node-action-list > button {\n      margin-right: 8px; }\n\n:host .grid-cell-configuration-control .list-with-details .details .configuration-control-node-action-list > button:last-of-type {\n        margin-right: 0; }\n\n:host .grid-cell-configuration-control .list-with-details .details .configuration-control-node-image > img {\n    max-width: 100%;\n    min-width: 100%; }\n\n:host .grid-cell-configuration-control .list-with-details .list {\n  max-width: 40%;\n  min-width: 40%; }\n\n:host .grid-cell-summary .table-summary-wrapper {\n  margin: 0 auto;\n  max-width: 90%; }\n\n:host .issue-asset,\n:host .receipt-asset {\n  padding: 2px; }\n\n:host .issue-asset {\n  background-color: #92cf94; }\n\n:host .receipt-asset {\n  background-color: #fbc3bf; }\n\n:host .fl-node {\n  font-weight: 600; }\n\n:host .node {\n  margin-left: 2px; }\n\n:host td > span {\n  display: block;\n  padding: calc(8px - 4px); }\n\n:host td > span.ok {\n    background-color: #4caf50; }\n\n:host td > span.nok {\n    background-color: #f6685e; }\n\n:host td > span.warning {\n    background-color: #ffc107; }\n\n:host td > span.toBeRecorded {\n    background-color: #f6685e; }\n\n:host .alert {\n  display: inline-block;\n  max-width: 7rem;\n  text-transform: uppercase;\n  width: 100%;\n  font-weight: 600;\n  text-align: center;\n  width: 5rem; }\n\n:host .alert.alert--ok {\n    background-color: #4caf50; }\n\n:host .alert.alert--warning {\n    background-color: #ffc107; }\n\n:host .alert.alert--nok {\n    background-color: #f6685e; }\n\n:host .custom-margin {\n  margin-right: 5px !important; }\n\n::ng-deep .grid-cell-configuration-control .list .asset-check-wrapper {\n  max-width: 5rem;\n  min-width: 5rem; }\n\n::ng-deep .grid-cell-configuration-control .list .asset-check-wrapper .asset-check {\n  color: initial;\n  font-style: initial; }\n\n::ng-deep .grid-cell-configuration-control .list .asset-type {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  font-size: 1.25rem;\n  margin: 0 8px; }\n\n::ng-deep .grid-cell-configuration-control .list .asset-data {\n  display: flex;\n  flex-direction: column; }\n\n::ng-deep .grid-cell-configuration-control .list .structure {\n  display: inline-block;\n  font-weight: 600; }\n\n::ng-deep .grid-cell-configuration-control .list .asset {\n  font-style: italic; }\n\n::ng-deep .aw-overlay .action-list {\n  justify-content: flex-end; }\n\n::ng-deep .aw-overlay .action-list .aw-btn {\n    margin-left: 8px; }\n\n::ng-deep .aw-overlay .action-list .aw-btn:first-of-type {\n      margin-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS91cGRhdGUtbG9nYm9vay9mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxtYWludGVuYW5jZVxcdXBkYXRlLWxvZ2Jvb2tcXGZvcm1cXHVwZGF0ZS1sb2dib29rLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvdXBkYXRlLWxvZ2Jvb2svZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIiwic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL3VwZGF0ZS1sb2dib29rL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFLUSxpQkFBaUIsRUFBQTs7QUFMekI7RUFTUSxZQUFZLEVBQUE7O0FBVHBCO0lBWVUseUJBQXlCLEVBQUE7O0FBWm5DO01BZVksaUJDMEJNLEVBQUE7O0FEekNsQjtRQWtCYyxlQUFlLEVBQUE7O0FBbEI3QjtJQXlCWSxlQUFlO0lBQ2YsZUFBZSxFQUFBOztBQTFCM0I7RUFnQ1EsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFqQ3RCO0VBd0NNLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBekNwQjs7RUErQ0ksWUFBWSxFQUFBOztBQS9DaEI7RUFtREkseUJBQTZDLEVBQUE7O0FBbkRqRDtFQXVESSx5QkFBMkMsRUFBQTs7QUF2RC9DO0VBMkRJLGdCQUFnQixFQUFBOztBQTNEcEI7RUErREksZ0JBQWdCLEVBQUE7O0FBL0RwQjtFQW1FSSxjQUFjO0VBQ2Qsd0JBQXFDLEVBQUE7O0FBcEV6QztJQXNFTSx5QkNwRGdCLEVBQUE7O0FEbEJ0QjtJQXlFTSx5QkNwRGMsRUFBQTs7QURyQnBCO0lBNEVNLHlCQ3pEVSxFQUFBOztBRG5CaEI7SUFnRk0seUJDM0RjLEVBQUE7O0FEckJwQjtFQXFGSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBM0ZmO0lBOEZNLHlCQzVFZ0IsRUFBQTs7QURsQnRCO0lBa0dNLHlCQy9FVSxFQUFBOztBRG5CaEI7SUFzR00seUJDakZjLEVBQUE7O0FEckJwQjtFQTJHSSw0QkFBNEIsRUFBQTs7QUFJaEM7RUFDRSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTs7QUFHckI7RUVyR0UsYUFBYTtFQUNiLG1CQUFtQjtFRnVHbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQ3JGZ0IsRUFBQTs7QUR3RmxCO0VFbEhFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUZxSHhCO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHlCQUF5QixFQUFBOztBQUQzQjtJQUlJLGdCQ3pHYyxFQUFBOztBRHFHbEI7TUFPTSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL3VwZGF0ZS1sb2dib29rL2Zvcm0vdXBkYXRlLWxvZ2Jvb2stZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5ncmlkLWNlbGwtY29uZmlndXJhdGlvbi1jb250cm9sIHtcclxuICAgIC5saXN0LXdpdGgtZGV0YWlscyB7XHJcbiAgICAgIC5kZXRhaWxzLFxyXG4gICAgICAubGlzdCB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTByZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gICAgICAgIC5jb25maWd1cmF0aW9uLWNvbnRyb2wtbm9kZS1hY3Rpb24tbGlzdCB7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAgICYgPiBidXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29uZmlndXJhdGlvbi1jb250cm9sLW5vZGUtaW1hZ2Uge1xyXG4gICAgICAgICAgJiA+IGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmxpc3Qge1xyXG4gICAgICAgIG1heC13aWR0aDogNDAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogNDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLXN1bW1hcnkge1xyXG4gICAgLnRhYmxlLXN1bW1hcnktd3JhcHBlciB7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pc3N1ZS1hc3NldCxcclxuICAucmVjZWlwdC1hc3NldCB7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgfVxyXG5cclxuICAuaXNzdWUtYXNzZXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkZ3JlZW4tbGlnaHQxLCAyMCUpO1xyXG4gIH1cclxuXHJcbiAgLnJlY2VpcHQtYXNzZXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcmVkLWxpZ2h0MSwgMjAlKTtcclxuICB9XHJcblxyXG4gIC5mbC1ub2RlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAubm9kZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIH1cclxuXHJcbiAgdGQgPiBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC0gNHB4KTtcclxuICAgICYub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgfVxyXG4gICAgJi5ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuICAgICYud2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgICAmLnRvQmVSZWNvcmRlZCB7XHJcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICR5ZWxsb3cxO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hbGVydCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDdyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDVyZW07XHJcblxyXG4gICAgJi5hbGVydC0tb2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLXdhcm5pbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1tYXJnaW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZ3JpZC1jZWxsLWNvbmZpZ3VyYXRpb24tY29udHJvbCAubGlzdCAuYXNzZXQtY2hlY2std3JhcHBlciB7XHJcbiAgbWF4LXdpZHRoOiA1cmVtO1xyXG4gIG1pbi13aWR0aDogNXJlbTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5ncmlkLWNlbGwtY29uZmlndXJhdGlvbi1jb250cm9sIC5saXN0IC5hc3NldC1jaGVjay13cmFwcGVyIC5hc3NldC1jaGVjayB7XHJcbiAgY29sb3I6IGluaXRpYWw7XHJcbiAgZm9udC1zdHlsZTogaW5pdGlhbDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5ncmlkLWNlbGwtY29uZmlndXJhdGlvbi1jb250cm9sIC5saXN0IC5hc3NldC10eXBlIHtcclxuICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgbWFyZ2luOiAwICRtYXJnaW4tdmFsdWU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZ3JpZC1jZWxsLWNvbmZpZ3VyYXRpb24tY29udHJvbCAubGlzdCAuYXNzZXQtZGF0YSB7XHJcbiAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5ncmlkLWNlbGwtY29uZmlndXJhdGlvbi1jb250cm9sIC5saXN0IC5zdHJ1Y3R1cmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmdyaWQtY2VsbC1jb25maWd1cmF0aW9uLWNvbnRyb2wgLmxpc3QgLmFzc2V0IHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYXctb3ZlcmxheSAuYWN0aW9uLWxpc3Qge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gIC5hdy1idG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFV0aWxzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBidXR0b24tY29sb3IoJGJhY2tncm91bmQtY29sb3IsICRjb2xvciwgJGJvcmRlci1jb2xvcjogbnVsbCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogJGNvbG9yO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIsXHJcbiAgJjpub3QoOmRpc2FibGVkKS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpZigkYm9yZGVyLWNvbG9yID09IG51bGwsICRjb2xvciwgJGJvcmRlci1jb2xvcik7XHJcbiAgICBjb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmxleC1jb2x1bW4oKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleC1yb3coKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQoKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuXHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWRpc2FibGVkKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWRpc2FibGVkO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1mb2N1cygpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxufVxyXG5cclxuQG1peGluIGlucHV0LWhvdmVyKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VhcmNoLWNyaXRlcmlhLWNvbnRhaW5lciB7XHJcbiAgLmFkdmFuY2VkLWNyaXRlcmlhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtY3JpdGVyaWEtZm9vdGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAuYXctYnRuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlY3Rpb24tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiA0KTtcclxuXHJcbiAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgJi5yZXF1aXJlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkKCk7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hbGVydCB7XHJcbiAgICAgICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICYgPiBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0LW92ZXJmbG93LWhpZGRlbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdyaWQgZm9ybSBjb250cm9scyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJNZWRpdW1cIjtcclxuXHJcbiAgJiA+IGlucHV0ICsgcC1tZXNzYWdlID4gLnVpLW1lc3NhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjpmb2N1cyxcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiKDI1NSwgMjU1LCAyNTUpIDYwJSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgIC5hdy1pY29uIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4sXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0biB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcblxyXG4gICAgICAmLmF3LWNhbGVuZGFyIC51aS1pbnB1dHRleHQsXHJcbiAgICAgICYuYXctZHJvcGRvd24gLnVpLWRyb3Bkb3duLFxyXG4gICAgICAmLmF3LWlucHV0LFxyXG4gICAgICAmLmF3LXRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1jYWxlbmRhciB7XHJcbiAgICAgIC8vIEZJWE1FOiBmaXggYW4gVUkgaXNzdWUgb24gUHJpbWVORyBjYWxlbmRhciBjb21wb25lbnQ7IHRvIHJlbW92ZSB3aGVuIGlzc3VlIHdpbGwgYmUgZml4ZWQgdXBzdHJlYW1cclxuICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgICAgIC5hdy1pY29uOm5vdCgucmVhZC1vbmx5LWxpbmspIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jazsgLy8gbm9uZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY29udHJvbC1kYXRhIHtcclxuICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tbmltcCxcclxuICAgIC5idG4tZXh0ZXJuYWwtbGluay13cmFwcGVyLFxyXG4gICAgLmJ0bi1jbGVhci13cmFwcGVyLFxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyLFxyXG4gICAgLmJ0bi1zZWFyY2gtd3JhcHBlciB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlciB7XHJcbiAgICAgIC5hdy1maWxldXBsb2FkIHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51aS1idXR0b24ge1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxlOTM0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tY2xlYXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tc2VhcmNoIHtcclxuICAgICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1yYWRpb2J1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICYgPiAuYXctcmFkaW9idXR0b24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMiAqICN7JG1hcmdpbi12YWx1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLWdlbmVyaWMge1xyXG4gIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG5cclxuICAmID4gYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IC5hbGVydCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDVyZW07XHJcblxyXG4gICAgJi5hbGVydC0tbm9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0tb2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLXdhcm5pbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNhbGVuZGFyIHtcclxuICAmLnVpLWlucHV0d3JhcHBlci1mb2N1cyB7XHJcbiAgICAudWktY2FsZW5kYXIgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuQG1peGluIGdyaWQtY2hlY2tib3gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRjaGVja2JveC1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRjaGVja2JveC1oZWlnaHQ7XHJcblxyXG4gIC51aS1jaGtib3gge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLWNoa2JveC1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1kcm9wZG93biB7XHJcbiAgLnVpLWRyb3Bkb3duIHtcclxuICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWZvY3VzIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uLFxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbiB7XHJcbiAgICAgIHJpZ2h0OiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgQGluY2x1ZGUgdGV4dC1vdmVyZmxvdy1oaWRkZW4oKTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyICogMS43NXJlbSk7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZpeGVkLXdpZHRoIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZmlsZXVwbG9hZCB7XHJcbiAgQGV4dGVuZCAuYXctYnRuO1xyXG5cclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICAudWktZmlsZXVwbG9hZC1jaG9vc2Uge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAwICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1idXR0b24tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtaW5wdXQoKSB7XHJcbiAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6Zm9jdXMge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRleHRhcmVhIHtcclxuICBAaW5jbHVkZSBncmlkLWlucHV0KCk7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1pbi1oZWlnaHQ6ICRmb3JtLWNvbnRyb2wtaGVpZ2h0O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXJhZGlvYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG4gIHdpZHRoOiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG5cclxuICAudWktcmFkaW9idXR0b24ge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLXJhZGlvYnV0dG9uLWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcblxyXG4gICAgICAgIC51aS1yYWRpb2J1dHRvbi1pY29uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gY2FsZW5kYXItcGFuZWwge1xyXG4gIC51aS1kYXRlcGlja2VyOm5vdCgudWktZGF0ZXBpY2tlci1pbmxpbmUpIHtcclxuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRyb3Bkb3duLXBhbmVsIHtcclxuICAudWktZHJvcGRvd24tcGFuZWwge1xyXG4gICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoICRib3JkZXItc3R5bGUgJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cclxuICAgIC51aS1kcm9wZG93bi1pdGVtcy13cmFwcGVyIC51aS1kcm9wZG93bi1saXN0IHtcclxuICAgICAgLnVpLWRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgcGFkZGluZzogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnVpLXN0YXRlLWhpZ2hsaWdodCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/maintenance/update-logbook/form/update-logbook-form.component.ts':
      /*!***************************************************************************************!*\
  !*** ./src/app/main/maintenance/update-logbook/form/update-logbook-form.component.ts ***!
  \***************************************************************************************/
      /*! exports provided: UpdateLogbookFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'UpdateLogbookFormComponent',
          function() {
            return UpdateLogbookFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! lodash-es */ './node_modules/lodash-es/lodash.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bidm_attribute_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/constants/bidm-attribute-constants */ './src/app/shared/constants/bidm-attribute-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/constants/control-config-constants */ './src/app/shared/constants/control-config-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../shared/utils/number-utils */ './src/app/shared/utils/number-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../../shared/utils/select-item-utils */ './src/app/shared/utils/select-item-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _update_logbook_form_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./update-logbook-form.service */ './src/app/main/maintenance/update-logbook/form/update-logbook-form.service.ts'
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

        var UpdateLogbookFormComponent = /** @class */ (function(_super) {
          __extends(UpdateLogbookFormComponent, _super);
          function UpdateLogbookFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            updateLogbookFormService,
            translateService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.sessionService = sessionService;
            _this.updateLogbookFormService = updateLogbookFormService;
            _this.translateService = translateService;
            _this.ELEMENT_OK = 'OK';
            _this.ELEMENT_NOK = 'NOK';
            _this.TYPE_KEY_TASK = 'TA';
            _this.TYPE_KEY_EVOLUTION = 'EA';
            _this.TYPE_KEY_ASSEMBLY = 'AS';
            _this.TYPE_KEY_DISASSEMBLY = 'DI';
            _this.isLoadingWorkOrderTable = false;
            _this.isSummaryTableLoading = false;
            _this.recordDate = new Date();
            _this.isEventCreatedLoading = false;
            _this.workOrderStructure = [];
            _this.workOrderStructureSrc = [];
            _this.workOrderFiltersVisible = false;
            _this.workOrderStructureSelection = undefined;
            _this.selectedWorkOrderStructure = undefined;
            _this.searchWorkOrderStructureGlobalFilter = '';
            _this.setSearchControlList();
            _this.setWorkOrderStructureGlobalFilter();
            return _this;
          }
          UpdateLogbookFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
              .MAI_UPDATE_LOGBOOK_FORM;
          };
          UpdateLogbookFormComponent.prototype.ngOnInit = function() {
            var _this = this;
            _super.prototype.ngOnInit.call(this);
            if (this.componentData.objectId) {
              var objectId = this.serializationService.deserialize(this.componentData.objectId);
              this.projectId = objectId.wpId;
              this.assetCode = objectId.assetCode;
            }
            this.initData();
            this.initTables();
            this.updateLogbookFormService.loadMROCenterList().subscribe(function(result) {
              _this.mroCenterList = result;
              _this.updateLogbookFormService.loadUserList().subscribe(function(res) {
                _this.userList = res;
                _this.updateLogbookFormService
                  .loadGenProps(
                    _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__[
                      'GenericPropertyConstants'
                    ].WORK_PACKAGE_TYPE_MAP
                  )
                  .subscribe(function(r) {
                    _this.typeList = r;
                    _this.init();
                    _this.setDefaultSearchControlList();
                  });
              });
            });
          };
          // init screen
          UpdateLogbookFormComponent.prototype.init = function() {
            this.getWpStatusList();
            this.getWoStatusList();
            this.getWorkPackage();
          };
          // init data
          UpdateLogbookFormComponent.prototype.initData = function() {
            var _this = this;
            this.workPackage = {};
            this.workOrderList = [];
            this.selectedWorkOrder = undefined;
            this.tableData = [];
            this.selectedTableData = [];
            this.tableDataCols = [];
            this.summaryData = [];
            this.summaryDataCols = [];
            this.wpStatusList = [];
            this.woStatusList = [];
            this.bidoEquipmentDTO = {};
            this.dialogRecordReportInput = { messages: [] };
            this.showRecordReport = false;
            this.recordEvent = false;
            this.showValidationModal = false;
            var taskAppliedKey = this.getTranslateKey('taskApplied');
            var evolutionAppliedKey = this.getTranslateKey('evolutionApplied');
            this.translateService.get([taskAppliedKey, evolutionAppliedKey]).subscribe(function(results) {
              _this.taskAppliedLabel = !!results ? results[taskAppliedKey] : 'Task Applied';
              _this.evolutionAppliedLabel = !!results ? results[evolutionAppliedKey] : 'Evolution Applied';
            });
          };
          // init tables
          UpdateLogbookFormComponent.prototype.initTables = function() {
            this.tableDataCols = [
              { field: 'control', width: '5rem', alignment: 'center' },
              { field: 'typeLabel', alignment: 'left', width: '8rem' },
              { field: 'id', alignment: 'left', width: '8rem' },
              { field: 'description', alignment: 'left', width: '18rem' },
              { field: 'eventKey', alignment: 'left', width: '8rem' },
              { field: 'eventDate', alignment: 'left' }
            ];
            this.summaryDataCols = [
              { field: 'logbookUpdate', alignment: 'left' },
              { field: 'ok', alignment: 'center' },
              { field: 'nok', alignment: 'center' }
            ];
            this.workOrderListCols = [
              { field: 'woControl', width: '5rem', alignment: 'center' },
              { field: 'woCode', alignment: 'left' }
            ];
          };
          // get data from server
          UpdateLogbookFormComponent.prototype.getWpStatusList = function() {
            var _this = this;
            this.updateLogbookFormService.loadWorkPackageStatusList().subscribe(function(res) {
              return (_this.wpStatusList = res);
            });
          };
          // get data from server
          UpdateLogbookFormComponent.prototype.getWoStatusList = function() {
            var _this = this;
            this.updateLogbookFormService.loadWorkOrderStatusList().subscribe(function(res) {
              return (_this.woStatusList = res);
            });
          };
          // get data from server
          UpdateLogbookFormComponent.prototype.getWorkPackage = function() {
            var _this = this;
            this.updateLogbookFormService.findBidmProjectWithAttributesId(this.projectId).subscribe(function(result) {
              if (result === null) {
                _this.messageService.showErrorMessage(_this.getTranslateKey('notFound'));
              } else {
                _this.displayComponentContext(
                  _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_19__['NumberUtils'].toString(
                    result.projectNumber
                  ),
                  false
                );
                _this.workPackage = result;
                _this.workPackage.bireRepairCenterCode = _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_21__[
                  'SelectItemUtils'
                ].formatSelectItem(result.bireRepairCenterCode, _this.mroCenterList);
                _this.workPackage.receivingAssignedTo = _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_21__[
                  'SelectItemUtils'
                ].formatSelectItem(result.receivingAssignedTo, _this.userList);
                _this.loadAsset();
                _this.getWorkOrders();
              }
            });
          };
          // confirm logbook
          UpdateLogbookFormComponent.prototype.onClickConfirm = function() {
            var _this = this;
            var bidmProjectAttributeDTO = {
              projectId: this.workPackage.projectId,
              attributeValue: 'true',
              attributeName:
                _shared_constants_bidm_attribute_constants__WEBPACK_IMPORTED_MODULE_6__['BidmAttributeConstants']
                  .IS_MAINTENANCE_PLAN_UPDATED
            };
            this.updateLogbookFormService.createBidmProjectAttribute(bidmProjectAttributeDTO).subscribe(function(data) {
              if (!!data) {
                _this.workPackage.maintenancePlanUpdatedAttributeId = data.id;
              }
            });
          };
          // revert logbook
          UpdateLogbookFormComponent.prototype.onClickRevert = function() {
            var _this = this;
            if (!this.workPackage.maintenancePlanUpdatedAttributeId) {
              return;
            }
            this.updateLogbookFormService
              .removeBidmProjectAttribute(this.workPackage.maintenancePlanUpdatedAttributeId)
              .subscribe(function() {
                _this.workPackage.maintenancePlanUpdatedAttributeId = undefined;
              });
          };
          UpdateLogbookFormComponent.prototype.selectWorkOrderStructureNode = function() {
            if (this.workOrderStructureSelection) {
              this.selectedTableData = [];
              this.tableData = [];
              this.selectedWorkOrder = this.workOrderStructureSelection.data;
              this.tableData = __spread(this.selectedWorkOrder.woLogbookUpdateLineDTOs);
            }
          };
          UpdateLogbookFormComponent.prototype.loadWorkOrderStructure = function() {
            var _this = this;
            this.isLoadingWorkOrderTable = true;
            this.updateLogbookFormService.getWorkOrdersForLogbookUpdate(this.projectId).subscribe(function(result) {
              if (result) {
                _this.getTreeStructure(result);
                _this.workOrderStructure = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(
                  _this.workOrderStructureSrc
                );
                _this.showFirstWorkOrderStructureNode();
                _this.loadSummary();
                _this.isLoadingWorkOrderTable = false;
              }
            });
          };
          UpdateLogbookFormComponent.prototype.getTreeStructure = function(data) {
            var _this = this;
            data.forEach(function(element) {
              _this.workOrderStructureSrc.push(_this.createWorkOrderStructureTreeNode(element));
            });
          };
          UpdateLogbookFormComponent.prototype.createWorkOrderStructureTreeNode = function(data) {
            var _this = this;
            var output = {};
            output.data = {
              woCode: data.woCode,
              control: data.control,
              description: data.description,
              woId: data.woId,
              status: data.status,
              closedDate: data.closedDate,
              closedBy: data.closedBy,
              woLogbookUpdateLineDTOs: data.woLogbookUpdateLineDTOs
            };
            output.children = [];
            if (!!data.children && data.children.length > 0) {
              data.children.forEach(function(asset) {
                if (!!asset && !!output.children) {
                  output.children.push(_this.createWorkOrderStructureTreeNode(asset));
                }
              });
            }
            return output;
          };
          UpdateLogbookFormComponent.prototype.showFirstWorkOrderStructureNode = function() {
            if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_18__['ListUtils'].isEmpty(this.workOrderStructure)) {
              this.workOrderStructure[0].expanded = true;
              this.workOrderStructureSelection = this.workOrderStructure[0];
              this.selectedWorkOrder = this.workOrderStructureSelection.data;
              this.tableData = this.selectedWorkOrder.woLogbookUpdateLineDTOs;
            }
          };
          // get data from server
          UpdateLogbookFormComponent.prototype.getWorkOrders = function() {
            this.loadWorkOrderStructure();
          };
          UpdateLogbookFormComponent.prototype.setWorkOrderStructureGlobalFilter = function() {
            var _this = this;
            this.searchWorkOrderStructureGlobalFilterChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__['Subject']();
            this.searchWorkOrderStructureGlobalFilterChanged
              .pipe(
                // tslint:disable-next-line: no-magic-numbers
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['debounceTime'])(500),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['distinctUntilChanged'])(),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['takeUntil'])(this.unsubscribe)
              )
              .subscribe(function(searchTextValue) {
                _this.filterWorkOrderStructure(searchTextValue);
              });
          };
          UpdateLogbookFormComponent.prototype.filterWorkOrderStructureWithGlobalFilter = function(searchTextValue) {
            this.searchWorkOrderStructureGlobalFilterChanged.next(searchTextValue);
          };
          // load data on screen
          UpdateLogbookFormComponent.prototype.loadSummary = function() {
            var _this = this;
            var taskOk = 0;
            var taskNok = 0;
            this.warningCount = 0;
            this.workOrderStructure.forEach(function(wo) {
              if (!!wo) {
                if (!!wo.data && Object.keys(wo.data).length > 0) {
                  if (wo.data.control === 'NOK') {
                    _this.warningCount = _this.warningCount + 1;
                  }
                  var logbookData = wo.data.woLogbookUpdateLineDTOs;
                  if (logbookData) {
                    logbookData.forEach(function(subWo) {
                      if (subWo.typeKey === _this.TYPE_KEY_TASK) {
                        subWo.typeLabel = _this.taskAppliedLabel;
                        if (subWo.control === _this.ELEMENT_OK) {
                          taskOk++;
                        } else {
                          taskNok++;
                        }
                      }
                    });
                  }
                  var childrens = wo.children;
                  if (!!childrens && childrens.length > 0) {
                    childrens.forEach(function(child) {
                      var bookData = child.data.woLogbookUpdateLineDTOs;
                      if (bookData) {
                        bookData.forEach(function(subWo) {
                          if (subWo.typeKey === _this.TYPE_KEY_TASK) {
                            subWo.typeLabel = _this.taskAppliedLabel;
                            if (subWo.control === _this.ELEMENT_OK) {
                              taskOk++;
                            } else {
                              taskNok++;
                            }
                          }
                        });
                      }
                    });
                  }
                }
              }
            });
            var evoOk = 0;
            var evoNok = 0;
            this.workOrderStructure.forEach(function(wo) {
              if (!!wo && !!wo.data && Object.keys(wo.data).length > 0) {
                if (wo.data.control === 'NOK') {
                  _this.warningCount = _this.warningCount + 1;
                }
                var logbookData = wo.data.woLogbookUpdateLineDTOs;
                if (logbookData) {
                  logbookData.forEach(function(subWo) {
                    if (subWo.typeKey === _this.TYPE_KEY_EVOLUTION) {
                      subWo.typeLabel = _this.evolutionAppliedLabel;
                      if (subWo.control === _this.ELEMENT_OK) {
                        evoOk++;
                      } else {
                        evoNok++;
                      }
                    }
                  });
                }
                var childrens = wo.children;
                if (!!childrens && childrens.length > 0) {
                  childrens.forEach(function(child) {
                    var bookData = child.data.woLogbookUpdateLineDTOs;
                    if (bookData) {
                      bookData.forEach(function(subWo) {
                        if (subWo.typeKey === _this.TYPE_KEY_EVOLUTION) {
                          subWo.typeLabel = _this.evolutionAppliedLabel;
                          if (subWo.control === _this.ELEMENT_OK) {
                            evoOk++;
                          } else {
                            evoNok++;
                          }
                        }
                      });
                    }
                  });
                }
              }
            });
            var asOk = 0;
            var asNok = 0;
            this.workOrderStructure.forEach(function(wo) {
              if (!!wo.data && Object.keys(wo.data).length > 0) {
                if (wo.data.control === 'NOK') {
                  _this.warningCount = _this.warningCount + 1;
                }
                var logbookData = wo.data.woLogbookUpdateLineDTOs;
                if (logbookData) {
                  logbookData.forEach(function(subWo) {
                    if (subWo.typeKey === _this.TYPE_KEY_ASSEMBLY) {
                      subWo.typeLabel = 'Assembly';
                      if (subWo.control === _this.ELEMENT_OK) {
                        asOk++;
                      } else {
                        asNok++;
                      }
                    }
                  });
                }
                var childrens = wo.children;
                if (!!childrens && childrens.length > 0) {
                  childrens.forEach(function(child) {
                    var bookData = child.data.woLogbookUpdateLineDTOs;
                    if (bookData) {
                      bookData.forEach(function(subWo) {
                        if (subWo.typeKey === _this.TYPE_KEY_ASSEMBLY) {
                          subWo.typeLabel = 'Assembly';
                          if (subWo.control === _this.ELEMENT_OK) {
                            asOk++;
                          } else {
                            asNok++;
                          }
                        }
                      });
                    }
                  });
                }
              }
            });
            var diOk = 0;
            var diNok = 0;
            this.workOrderStructure.forEach(function(wo) {
              if (!!wo.data && Object.keys(wo.data).length > 0) {
                if (wo.data.control === 'NOK') {
                  _this.warningCount = _this.warningCount + 1;
                }
                var logbookData = wo.data.woLogbookUpdateLineDTOs;
                if (logbookData) {
                  logbookData.forEach(function(subWo) {
                    if (subWo.typeKey === _this.TYPE_KEY_DISASSEMBLY) {
                      subWo.typeLabel = 'Disassembly';
                      if (subWo.control === _this.ELEMENT_OK) {
                        diOk++;
                      } else {
                        diNok++;
                      }
                    }
                  });
                }
                var childrens = wo.children;
                if (!!childrens && childrens.length > 0) {
                  childrens.forEach(function(child) {
                    var bookData = child.data.woLogbookUpdateLineDTOs;
                    if (bookData) {
                      bookData.forEach(function(subWo) {
                        if (subWo.typeKey === _this.TYPE_KEY_DISASSEMBLY) {
                          subWo.typeLabel = 'Disassembly';
                          if (subWo.control === _this.ELEMENT_OK) {
                            diOk++;
                          } else {
                            diNok++;
                          }
                        }
                      });
                    }
                  });
                }
              }
            });
            this.warningCount = this.warningCount + taskNok + evoNok;
            this.summaryData = [
              { logbookUpdate: this.taskAppliedLabel, ok: taskOk, nok: taskNok },
              { logbookUpdate: this.evolutionAppliedLabel, ok: evoOk, nok: evoNok }
            ];
          };
          // load data on screen
          UpdateLogbookFormComponent.prototype.loadWorkOrder = function(wo) {
            this.tableData = wo.woLogbookUpdateLineDTOs;
          };
          // process event
          UpdateLogbookFormComponent.prototype.onClickRefresh = function() {
            this.workOrderStructureSrc = [];
            this.workOrderStructure = [];
            this.getWorkPackage();
          };
          // process event
          UpdateLogbookFormComponent.prototype.onSelectWorkOrder = function() {
            if (!!this.selectedWorkOrder) {
              this.loadWorkOrder(this.selectedWorkOrder);
            }
          };
          // process event
          UpdateLogbookFormComponent.prototype.onClickRecordEvent = function() {
            var _this = this;
            if (!this.selectedTableData) {
              return;
            }
            if (!!this.selectedWorkOrder) {
              if (!this.recordDate) {
                this.messageService.showErrorMessage(this.getTranslateKey('recordDateEmpty'));
              } else {
                var proj = {
                  projectId: this.projectId,
                  woId: this.selectedWorkOrder.woId.toString(),
                  woScheduledEndDate: this.recordDate
                };
                this.isEventCreatedLoading = true;
                this.updateLogbookFormService.updateMaintenancePlanFromWorkOrder(proj).subscribe(
                  function(data) {
                    _this.isEventCreatedLoading = false;
                    _this.dialogRecordReportInput.workPackageNumber = _this.workPackage.projectNumber;
                    var recordReportOutput = {
                      listMessages: data
                    };
                    var recordReportOutputList = [];
                    recordReportOutputList.push(recordReportOutput);
                    _this.dialogRecordReportInput.messages = recordReportOutputList;
                    _this.recordEvent = true;
                    _this.selectedTableData = [];
                    _this.onClickRefresh();
                  },
                  function(err) {
                    _this.isEventCreatedLoading = false;
                  }
                );
              }
            }
          };
          // process event
          UpdateLogbookFormComponent.prototype.onClickEventKey = function(woLine) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                  .FLE_EVENT_CREATE,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read
            };
            var dto = {
              notificationCode: woLine.eventKey,
              bidoNotificationTypeDTO: {}
            };
            if (!!dto) {
              data.objectId = this.serializationService.serialize(dto);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          UpdateLogbookFormComponent.prototype.filterWorkOrderStructureWithCriteria = function() {
            this.filterWorkOrderStructure();
          };
          UpdateLogbookFormComponent.prototype.resetWorkOrderStructureCriteria = function() {
            this.setDefaultSearchControlList();
          };
          // process enable
          UpdateLogbookFormComponent.prototype.enableSelect = function(rowData) {
            return rowData.control === this.ELEMENT_NOK;
          };
          // modal return
          UpdateLogbookFormComponent.prototype.validationFinished = function() {
            this.showValidationModal = false;
            // TODO
          };
          UpdateLogbookFormComponent.prototype.openLogbookAsset = function() {
            if (!!this.bidoEquipmentDTO && !!this.bidoEquipmentDTO.equipmentFunction) {
              this.openAssetUC(
                this.workPackage.assetCode,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read,
                this.bidoEquipmentDTO.equipmentFunction
              );
            }
          };
          UpdateLogbookFormComponent.prototype.openAssetUC = function(objectId, openMode, functionNm) {
            var labelNm;
            var componentName;
            if (
              !functionNm ||
              functionNm ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_MAJOR_EQUIPMENT_KEY
            ) {
              labelNm = 'transaction.EquipmentFormComponent';
              componentName = 'EquipmentFormComponent';
            } else {
              if (
                functionNm ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_ENGINE_KEY
              ) {
                labelNm = 'transaction.EngineFormComponent';
                componentName = 'EngineFormComponent';
              } else if (
                functionNm ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_AIRCRAFT_KEY
              ) {
                labelNm = 'transaction.AircraftFormComponent';
                componentName = 'AircraftFormComponent';
              }
            }
            var labelKey = labelNm;
            var data = {
              id: this.tabService.generateId(),
              componentId: componentName,
              openMode: openMode
            };
            if (!!objectId) {
              var equipmentId = {
                equipmentCode: objectId
              };
              data.objectId = this.serializationService.serialize(equipmentId);
            }
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          UpdateLogbookFormComponent.prototype.loadAsset = function() {
            var _this = this;
            var input = {
              equipmentCode: this.assetCode
            };
            this.updateLogbookFormService.findBidoEquipment(input).subscribe(function(result) {
              _this.bidoEquipmentDTO = result;
              if (
                _this.bidoEquipmentDTO.equipmentFunction !==
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                    .FAMILY_FUNCTION_AIRCRAFT_KEY &&
                _this.bidoEquipmentDTO.equipmentFunction !==
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                    .FAMILY_FUNCTION_ENGINE_KEY
              ) {
                _this.subtitleAsset = '';
                if (!!_this.bidoEquipmentDTO.pnCode && !!_this.bidoEquipmentDTO.sn) {
                  _this.subtitleAsset = _this.bidoEquipmentDTO.pnCode + ' / ' + _this.bidoEquipmentDTO.sn;
                }
                if (!!_this.bidoEquipmentDTO.pnCode && !_this.bidoEquipmentDTO.sn) {
                  _this.subtitleAsset = '' + _this.bidoEquipmentDTO.pnCode;
                }
                if (!_this.bidoEquipmentDTO.pnCode && !!_this.bidoEquipmentDTO.sn) {
                  _this.subtitleAsset = '' + _this.bidoEquipmentDTO.sn;
                }
                if (!!_this.bidoEquipmentDTO.equipmentDesignation) {
                  _this.subtitleAsset = _this.subtitleAsset + ' (' + _this.bidoEquipmentDTO.equipmentDesignation + ')';
                }
              } else if (
                _this.bidoEquipmentDTO.equipmentFunction ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_AIRCRAFT_KEY
              ) {
                if (!!_this.workPackage.aircraftMsn) {
                  _this.subtitleAsset = '' + _this.workPackage.aircraftMsn;
                }
              } else if (
                _this.bidoEquipmentDTO.equipmentFunction ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_ENGINE_KEY
              ) {
                if (!!_this.bidoEquipmentDTO.sn) {
                  _this.subtitleAsset = '' + _this.bidoEquipmentDTO.sn;
                }
                if (!!_this.bidoEquipmentDTO.equipmentDesignation) {
                  _this.subtitleAsset = _this.subtitleAsset + ' (' + _this.bidoEquipmentDTO.equipmentDesignation + ')';
                }
              }
            });
          };
          UpdateLogbookFormComponent.prototype.matchAssetStructureNode = function(node, searchText) {
            var _this = this;
            if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_18__['ListUtils'].isNullOrEmpty(node.children)) {
              node.children = node.children.filter(function(child) {
                return _this.matchAssetStructureNode(child, searchText);
              });
            }
            var nodeData = node.data;
            // Asset
            var asset = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__['StringUtils']
              .orEmpty(nodeData.woCode)
              .toLowerCase();
            var assetMatch =
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__['StringUtils'].isNullOrEmpty(searchText) ||
              asset.includes(searchText);
            // Control
            var controlMatch = true;
            if (
              !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_18__['ListUtils'].isNullOrEmpty(
                this.selectedControlList
              )
            ) {
              var nodeControl = nodeData.control === 'OK' ? '9' : nodeData.control === 'NOK' ? '10' : '11';
              controlMatch =
                _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_20__['ObjectUtils'].isDefined(nodeControl) &&
                this.selectedControlList.includes(nodeControl);
            }
            // Description
            var name = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__['StringUtils']
              .orEmpty(nodeData.description)
              .toLowerCase();
            var nameMatch =
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__['StringUtils'].isNullOrEmpty(searchText) ||
              name.includes(searchText);
            return (
              _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_18__['ListUtils'].orEmpty(node.children).length > 0 ||
              ((assetMatch || nameMatch) && controlMatch)
            );
          };
          UpdateLogbookFormComponent.prototype.setSearchControlList = function() {
            var _this = this;
            var alertNokKey = this.getTranslateKey('filterNok');
            var alertOkKey = this.getTranslateKey('filterOk');
            this.translateService.get([alertNokKey, alertOkKey]).subscribe(function(results) {
              var alertNokLabel = results ? results[alertNokKey] : 'NOK';
              var alertOkLabel = results ? results[alertOkKey] : 'OK';
              _this.searchControlList = [
                {
                  label: alertOkLabel,
                  value:
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                      .ICON_GREEN
                },
                {
                  label: alertNokLabel,
                  value:
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                      .ICON_RED
                }
              ];
            });
          };
          UpdateLogbookFormComponent.prototype.setDefaultSearchControlList = function() {
            this.selectedControlList = [
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                .ICON_GREEN,
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants']
                .ICON_YELLOW,
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_8__['ControlConfigConstants'].ICON_RED
            ];
          };
          UpdateLogbookFormComponent.prototype.filterWorkOrderStructure = function(searchTextValue) {
            var _this = this;
            this.workOrderStructureSelection = undefined;
            this.workOrderStructure = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(
              this.workOrderStructureSrc
            );
            this.workOrderStructure = this.workOrderStructure.filter(function(elt) {
              return _this.matchAssetStructureNode(elt, !!searchTextValue ? searchTextValue.toLowerCase() : undefined);
            });
            this.showFirstWorkOrderStructureNode();
          };
          UpdateLogbookFormComponent.prototype.onClickRecordAllEvent = function() {
            var _this = this;
            this.isEventCreatedLoading = true;
            if (!this.recordDate) {
              this.messageService.showErrorMessage(this.getTranslateKey('recordDateEmpty'));
            } else {
              var workOrderArr_1 = [];
              this.workOrderStructure.forEach(function(node) {
                if (!!node && !!node.data && !!node.data.woId && !!node.data.woCode) {
                  var workOrderDTO = {
                    projectId: _this.projectId,
                    bidWoId: node.data.woId.toString(),
                    woScheduledEndDate: _this.recordDate,
                    woCode: node.data.woCode
                  };
                  workOrderArr_1.push(workOrderDTO);
                }
              });
              this.updateLogbookFormService
                .recordAllEvents(workOrderArr_1)
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['finalize'])(function() {
                    _this.isEventCreatedLoading = false;
                  })
                )
                .subscribe(function(data) {
                  _this.selectedTableData = [];
                  _this.onClickRefresh();
                  _this.dialogRecordReportInput.workPackageNumber = _this.workPackage.projectNumber;
                  _this.dialogRecordReportInput.messages = data;
                  _this.recordEvent = true;
                });
            }
          };
          UpdateLogbookFormComponent.prototype.report = function() {
            this.showRecordReport = true;
          };
          UpdateLogbookFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-update-logbook-form',
                template: __webpack_require__(
                  /*! ./update-logbook-form.component.html */ './src/app/main/maintenance/update-logbook/form/update-logbook-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./update-logbook-form.component.scss */ './src/app/main/maintenance/update-logbook/form/update-logbook-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_11__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_16__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_15__['SessionService'],
                _update_logbook_form_service__WEBPACK_IMPORTED_MODULE_23__['UpdateLogbookFormService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            UpdateLogbookFormComponent
          );
          return UpdateLogbookFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_17__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/update-logbook/form/update-logbook-form.service.ts':
      /*!*************************************************************************************!*\
  !*** ./src/app/main/maintenance/update-logbook/form/update-logbook-form.service.ts ***!
  \*************************************************************************************/
      /*! exports provided: UpdateLogbookFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'UpdateLogbookFormService',
          function() {
            return UpdateLogbookFormService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/aircraft-maintenance.api */ './src/app/shared/api/aircraft-maintenance.api.ts'
        );
        /* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/am-project-management.api */ './src/app/shared/api/am-project-management.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/api/user-profile-management.api */ './src/app/shared/api/user-profile-management.api.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/utils/array-utils */ './src/app/shared/utils/array-utils.ts'
        );
        /* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/utils/select-item-utils */ './src/app/shared/utils/select-item-utils.ts'
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

        var UpdateLogbookFormService = /** @class */ (function(_super) {
          __extends(UpdateLogbookFormService, _super);
          function UpdateLogbookFormService(
            http,
            appConfigService,
            amProjectManagementApi,
            aircraftMaintenanceApi,
            propertiesService,
            fleetManagementApi,
            productStructureManagementApi,
            userProfileManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.amProjectManagementApi = amProjectManagementApi;
            _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
            _this.propertiesService = propertiesService;
            _this.fleetManagementApi = fleetManagementApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.userProfileManagementApi = userProfileManagementApi;
            return _this;
          }
          UpdateLogbookFormService.prototype.findBidmProjectWithAttributesId = function(projectId) {
            return _super.prototype.post.call(
              this,
              this.amProjectManagementApi.findBidmProjectWithAttributesId,
              projectId
            );
          };
          UpdateLogbookFormService.prototype.loadWorkPackageStatusList = function() {
            return this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__['GenericPropertyConstants']
                  .AIRM_PROJECT_STATUS_MAP
              )
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(function(results) {
                  var statusList = !!results
                    ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_15__['SelectItemUtils'].fromLabelValues(
                        results
                      )
                    : [];
                  return statusList.filter(function(status) {
                    return (
                      status.value !==
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                          .AIRM_PROJECT_STATUS_SCHEDULED &&
                      status.value !==
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                          .AIRM_PROJECT_STATUS_SIMULATED
                    );
                  });
                })
              );
          };
          UpdateLogbookFormService.prototype.loadWorkOrderStatusList = function() {
            return this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__['GenericPropertyConstants']
                  .AIRM_OPERATION_STATUS_MAP
              )
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(function(results) {
                  var statusList = !!results
                    ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_15__['SelectItemUtils'].fromLabelValues(
                        results
                      )
                    : [];
                  return statusList.filter(function(status) {
                    return (
                      status.value !==
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                          .AIRM_PROJECT_STATUS_SCHEDULED &&
                      status.value !==
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                          .AIRM_PROJECT_STATUS_SIMULATED
                    );
                  });
                })
              );
          };
          UpdateLogbookFormService.prototype.getBidmWorkOrdersStructureByProject = function(projectId) {
            var projectIdDto = { projectId: projectId };
            return _super.prototype.post.call(
              this,
              this.aircraftMaintenanceApi.getBidmWorkOrdersStructureByProject,
              projectIdDto
            );
          };
          UpdateLogbookFormService.prototype.getWorkOrdersForLogbookUpdate = function(projectId) {
            var projectIdDto = { projectId: projectId };
            return _super.prototype.post.call(
              this,
              this.aircraftMaintenanceApi.getWorkOrdersForLogbookUpdate,
              projectIdDto
            );
          };
          UpdateLogbookFormService.prototype.findBidoEquipment = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipment, input);
          };
          UpdateLogbookFormService.prototype.updateMaintenancePlanFromWorkOrder = function(bidmWorkOrderDTOId) {
            return _super.prototype.post.call(
              this,
              this.aircraftMaintenanceApi.updateMaintenancePlanFromWorkOrder,
              bidmWorkOrderDTOId
            );
          };
          UpdateLogbookFormService.prototype.loadMROCenterList = function() {
            return this.findAuthorizedBireSite().pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(function(results) {
                var mroCenterList = !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_15__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
                return mroCenterList.map(function(mro) {
                  mro.label = mro.label ? mro.label + ' (' + mro.value + ')' : mro.value;
                  return mro;
                });
              })
            );
          };
          UpdateLogbookFormService.prototype.findAuthorizedBireSite = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAuthorizedBireSite);
          };
          UpdateLogbookFormService.prototype.loadUserList = function() {
            return this.findUsersWithUseCase().pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(function(results) {
                return !!results
                  ? results
                      .map(function(user) {
                        return {
                          label: user.firstname + ' ' + user.lastname,
                          value: user.userId
                        };
                      })
                      .sort(
                        _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_14__['ArrayUtils'].compareValues('label')
                      )
                  : [];
              })
            );
          };
          UpdateLogbookFormService.prototype.findUsersWithUseCase = function() {
            return _super.prototype.post.call(
              this,
              this.userProfileManagementApi.findBidoUsersWithUseCase,
              _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_9__['BidoFunctionTypeConstants']
                .UC_AIRM_RECEPTION
            );
          };
          UpdateLogbookFormService.prototype.loadGenProps = function(key) {
            return this.propertiesService.getValue(key).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(function(results) {
                return !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_15__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
              })
            );
          };
          UpdateLogbookFormService.prototype.recordAllEvents = function(bidmWorkOrderDTO) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.recordAllEvents, bidmWorkOrderDTO);
          };
          UpdateLogbookFormService.prototype.createBidmProjectAttribute = function(input) {
            return _super.prototype.post.call(this, this.amProjectManagementApi.createBidmProjectAttribute, input);
          };
          UpdateLogbookFormService.prototype.removeBidmProjectAttribute = function(input) {
            return _super.prototype.post.call(this, this.amProjectManagementApi.removeBidmProjectAttribute, input);
          };
          UpdateLogbookFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_12__['AppConfigService'],
                _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_4__['AMProjectManagementApi'],
                _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__['AircraftMaintenanceApi'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_13__['PropertiesService'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_5__['FleetManagementApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_6__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_7__['UserProfileManagementApi']
              ])
            ],
            UpdateLogbookFormService
          );
          return UpdateLogbookFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_11__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/maintenance/update-logbook/form/valid-wo-line/valid-wo-line.component.html':
      /*!*************************************************************************************************!*\
  !*** ./src/app/main/maintenance/update-logbook/form/valid-wo-line/valid-wo-line.component.html ***!
  \*************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + "." | translate }}</label>\r\n\r\n      <div class="form-control"></div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="cancel()">\r\n      {{ "global.close" | translate }}\r\n    </button>\r\n    <button type="button" color="primary" mat-raised-button (click)="validate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/update-logbook/form/valid-wo-line/valid-wo-line.component.scss':
      /*!*************************************************************************************************!*\
  !*** ./src/app/main/maintenance/update-logbook/form/valid-wo-line/valid-wo-line.component.scss ***!
  \*************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvdXBkYXRlLWxvZ2Jvb2svZm9ybS92YWxpZC13by1saW5lL3ZhbGlkLXdvLWxpbmUuY29tcG9uZW50LnNjc3MifQ== */';

        /***/
      },

    /***/ './src/app/main/maintenance/update-logbook/form/valid-wo-line/valid-wo-line.component.ts':
      /*!***********************************************************************************************!*\
  !*** ./src/app/main/maintenance/update-logbook/form/valid-wo-line/valid-wo-line.component.ts ***!
  \***********************************************************************************************/
      /*! exports provided: ValidWoLineComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ValidWoLineComponent', function() {
          return ValidWoLineComponent;
        });
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

        // TODO: should be put in its own module
        var ValidWoLineComponent = /** @class */ (function(_super) {
          __extends(ValidWoLineComponent, _super);
          function ValidWoLineComponent() {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'ValidWoLineComponent'
              ) || this;
            _this.initData();
            return _this;
          }
          ValidWoLineComponent.prototype.getComponentName = function() {
            return 'ValidWoLineComponent';
          };
          // init data
          ValidWoLineComponent.prototype.initData = function() {
            if (!this.elementsToValidate) {
              this.elementsToValidate = [];
            }
          };
          // process event
          ValidWoLineComponent.prototype.cancel = function() {
            _super.prototype.closeDialog.call(this);
          };
          // process event
          ValidWoLineComponent.prototype.validate = function() {
            // TODO : validation
            _super.prototype.closeDialog.call(this);
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            ValidWoLineComponent.prototype,
            'elementsToValidate',
            void 0
          );
          ValidWoLineComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-valid-wo-line',
                template: __webpack_require__(
                  /*! ./valid-wo-line.component.html */ './src/app/main/maintenance/update-logbook/form/valid-wo-line/valid-wo-line.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./valid-wo-line.component.scss */ './src/app/main/maintenance/update-logbook/form/valid-wo-line/valid-wo-line.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            ValidWoLineComponent
          );
          return ValidWoLineComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/update-logbook/update-logbook.module.ts':
      /*!**************************************************************************!*\
  !*** ./src/app/main/maintenance/update-logbook/update-logbook.module.ts ***!
  \**************************************************************************/
      /*! exports provided: UpdateLogbookModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'UpdateLogbookModule', function() {
          return UpdateLogbookModule;
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
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/overlaypanel */ './node_modules/primeng/overlaypanel.js'
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_3__
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
        /* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/tree */ './node_modules/primeng/tree.js'
        );
        /* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tree__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/treetable */ './node_modules/primeng/treetable.js'
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_treetable__WEBPACK_IMPORTED_MODULE_8__
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
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _form_dialog_record_report_dialog_record_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./form/dialog-record-report/dialog-record-report.component */ './src/app/main/maintenance/update-logbook/form/dialog-record-report/dialog-record-report.component.ts'
        );
        /* harmony import */ var _form_update_logbook_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./form/update-logbook-form.component */ './src/app/main/maintenance/update-logbook/form/update-logbook-form.component.ts'
        );
        /* harmony import */ var _form_update_logbook_form_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./form/update-logbook-form.service */ './src/app/main/maintenance/update-logbook/form/update-logbook-form.service.ts'
        );
        /* harmony import */ var _form_valid_wo_line_valid_wo_line_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./form/valid-wo-line/valid-wo-line.component */ './src/app/main/maintenance/update-logbook/form/valid-wo-line/valid-wo-line.component.ts'
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
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__['DropdownModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_5__['TableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__['TooltipModule'],
          primeng_treetable__WEBPACK_IMPORTED_MODULE_8__['TreeTableModule'],
          primeng_tree__WEBPACK_IMPORTED_MODULE_7__['TreeModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4__['SelectButtonModule'],
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_3__['OverlayPanelModule']
        ];
        var INTERNAL_MODULES = [_shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_12__['ModalModule']];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _form_dialog_record_report_dialog_record_report_component__WEBPACK_IMPORTED_MODULE_14__[
            'DialogRecordReportComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [
          _form_update_logbook_form_component__WEBPACK_IMPORTED_MODULE_15__['UpdateLogbookFormComponent'],
          _form_valid_wo_line_valid_wo_line_component__WEBPACK_IMPORTED_MODULE_17__['ValidWoLineComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [_form_update_logbook_form_service__WEBPACK_IMPORTED_MODULE_16__['UpdateLogbookFormService']];
        var UpdateLogbookModule = /** @class */ (function() {
          function UpdateLogbookModule() {}
          UpdateLogbookModule = __decorate(
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
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_13__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            UpdateLogbookModule
          );
          return UpdateLogbookModule;
        })();

        /***/
      },

    /***/ './src/app/shared/constants/bidm-attribute-constants.ts':
      /*!**************************************************************!*\
  !*** ./src/app/shared/constants/bidm-attribute-constants.ts ***!
  \**************************************************************/
      /*! exports provided: BidmAttributeConstants */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'BidmAttributeConstants', function() {
          return BidmAttributeConstants;
        });
        var BidmAttributeConstants = /** @class */ (function() {
          function BidmAttributeConstants() {}
          BidmAttributeConstants.IS_MAINTENANCE_PLAN_UPDATED = '1';
          BidmAttributeConstants.IS_ASSET_STRUCTURE_UPDATED = '2';
          BidmAttributeConstants.ACRS_EVENT_CODE = '3';
          BidmAttributeConstants.FLIGHT_NUMBER = '4';
          BidmAttributeConstants.GONOGOWP_FOR_FLIGHT = '5';
          BidmAttributeConstants.WORK_PACKAGE_SYSTEM_SOURCE_ID = '6';
          BidmAttributeConstants.WORK_PACKAGE_SYSTEM_SOURCE_REFERENCE = '7';
          BidmAttributeConstants.WORK_ORDER_SYSTEM_SOURCE_ID = '8';
          BidmAttributeConstants.WORK_ORDER_SYSTEM_SOURCE_REFERENCE = '9';
          return BidmAttributeConstants;
        })();

        /***/
      },

    /***/ './src/app/shared/constants/control-config-constants.ts':
      /*!**************************************************************!*\
  !*** ./src/app/shared/constants/control-config-constants.ts ***!
  \**************************************************************/
      /*! exports provided: ControlConfigConstants */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ControlConfigConstants', function() {
          return ControlConfigConstants;
        });
        var ControlConfigConstants = /** @class */ (function() {
          function ControlConfigConstants() {}
          ControlConfigConstants.ICON_GREEN = '9';
          ControlConfigConstants.ICON_RED = '10';
          ControlConfigConstants.ICON_YELLOW = '11';
          ControlConfigConstants.ICON_NONE = '12';
          ControlConfigConstants.CUSTOMIZATION_STATUS_NONE = '0';
          ControlConfigConstants.CUSTOMIZATION_STATUS_OK_ASSUMED = '10';
          ControlConfigConstants.CUSTOMIZATION_STATUS_OK_CUSTOMIZED = '11';
          ControlConfigConstants.CUSTOMIZATION_STATUS_WARNING_NO_ALTERNATIVE = '21';
          ControlConfigConstants.ICON_GREEN_LIGHT_CODE = '0';
          ControlConfigConstants.ICON_RED_LIGHT_CODE = '1';
          ControlConfigConstants.ICON_YELLOW_LIGHT_CODE = '2';
          ControlConfigConstants.ICON_NONE_LIGHT_CODE = '3';
          ControlConfigConstants.ICON_EQUIPMENT_CODE = '5';
          ControlConfigConstants.ICON_GREEN_ROUND_CODE = '6';
          ControlConfigConstants.ICON_ITEM_CODE = '4';
          ControlConfigConstants.ICON_YELLOW_TRIANGLE_CODE = '7';
          ControlConfigConstants.ICON_RED_SQUARE_CODE = '8';
          ControlConfigConstants.ICON_GREEN_LED_CODE = '9';
          ControlConfigConstants.ICON_YELLOW_LED_CODE = '11';
          ControlConfigConstants.ICON_RED_LED_CODE = '10';
          ControlConfigConstants.ICON_NONE_LED_CODE = '12';
          ControlConfigConstants.OME_CHECK_EQUIPMENT_MISSING = 'MISSING';
          ControlConfigConstants.OME_CHECK_EQUIPMENT_TO_REMOVE = 'REMOVE';
          ControlConfigConstants.OME_CHECK_EQUIPMENT_TO_REPLACE = 'REPLACE';
          ControlConfigConstants.OME_CHECK_CORRECTIVE_ACTION_SUGGESTED = 'SUGGESTED';
          ControlConfigConstants.OME_CHECK_CORRECTIVE_ACTION_VALIDATED = 'VALIDATED';
          ControlConfigConstants.OME_CHECK_CORRECTIVE_ACTION_ON_GOING = 'ON_GOING';
          return ControlConfigConstants;
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
      }
  }
]);
//# sourceMappingURL=maintenance-update-logbook-update-logbook-module.js.map
