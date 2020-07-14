(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['maintenance-configuration-control-configuration-control-module'],
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

    /***/ './node_modules/primeng/components/togglebutton/togglebutton.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/primeng/components/togglebutton/togglebutton.js ***!
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
        var forms_1 = __webpack_require__(/*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js');
        exports.TOGGLEBUTTON_VALUE_ACCESSOR = {
          provide: forms_1.NG_VALUE_ACCESSOR,
          useExisting: core_1.forwardRef(function() {
            return ToggleButton;
          }),
          multi: true
        };
        var ToggleButton = /** @class */ (function() {
          function ToggleButton() {
            this.onLabel = 'Yes';
            this.offLabel = 'No';
            this.iconPos = 'left';
            this.onChange = new core_1.EventEmitter();
            this.checked = false;
            this.focus = false;
            this.onModelChange = function() {};
            this.onModelTouched = function() {};
          }
          ToggleButton.prototype.ngAfterViewInit = function() {
            this.checkbox = this.checkboxViewChild.nativeElement;
          };
          ToggleButton.prototype.toggle = function(event) {
            if (!this.disabled) {
              this.checked = !this.checked;
              this.onModelChange(this.checked);
              this.onModelTouched();
              this.onChange.emit({
                originalEvent: event,
                checked: this.checked
              });
              this.checkbox.focus();
            }
          };
          ToggleButton.prototype.onFocus = function() {
            this.focus = true;
          };
          ToggleButton.prototype.onBlur = function() {
            this.focus = false;
            this.onModelTouched();
          };
          ToggleButton.prototype.writeValue = function(value) {
            this.checked = value;
          };
          ToggleButton.prototype.registerOnChange = function(fn) {
            this.onModelChange = fn;
          };
          ToggleButton.prototype.registerOnTouched = function(fn) {
            this.onModelTouched = fn;
          };
          ToggleButton.prototype.setDisabledState = function(val) {
            this.disabled = val;
          };
          Object.defineProperty(ToggleButton.prototype, 'hasOnLabel', {
            get: function() {
              return this.onLabel && this.onLabel.length > 0;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(ToggleButton.prototype, 'hasOffLabel', {
            get: function() {
              return this.onLabel && this.onLabel.length > 0;
            },
            enumerable: true,
            configurable: true
          });
          __decorate([core_1.Input(), __metadata('design:type', String)], ToggleButton.prototype, 'onLabel', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], ToggleButton.prototype, 'offLabel', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], ToggleButton.prototype, 'onIcon', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], ToggleButton.prototype, 'offIcon', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Boolean)], ToggleButton.prototype, 'disabled', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Object)], ToggleButton.prototype, 'style', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], ToggleButton.prototype, 'styleClass', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], ToggleButton.prototype, 'inputId', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Number)], ToggleButton.prototype, 'tabindex', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], ToggleButton.prototype, 'iconPos', void 0);
          __decorate(
            [core_1.Output(), __metadata('design:type', core_1.EventEmitter)],
            ToggleButton.prototype,
            'onChange',
            void 0
          );
          __decorate(
            [core_1.ViewChild('checkbox'), __metadata('design:type', core_1.ElementRef)],
            ToggleButton.prototype,
            'checkboxViewChild',
            void 0
          );
          ToggleButton = __decorate(
            [
              core_1.Component({
                selector: 'p-toggleButton',
                template:
                  '\n        <div [ngClass]="{\'ui-button ui-togglebutton ui-widget ui-state-default ui-corner-all\': true, \'ui-button-text-only\': (!onIcon && !offIcon), \n                \'ui-button-text-icon-left\': (onIcon && offIcon && hasOnLabel && hasOffLabel && iconPos === \'left\'), \n                \'ui-button-text-icon-right\': (onIcon && offIcon && hasOnLabel && hasOffLabel && iconPos === \'right\'),\'ui-button-icon-only\': (onIcon && offIcon && !hasOnLabel && !hasOffLabel),\n                \'ui-state-active\': checked,\'ui-state-focus\':focus,\'ui-state-disabled\':disabled}" [ngStyle]="style" [class]="styleClass" \n                (click)="toggle($event)" (keydown.enter)="toggle($event)">\n            <div class="ui-helper-hidden-accessible">\n                <input #checkbox type="checkbox" [attr.id]="inputId" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [attr.tabindex]="tabindex">\n            </div>\n            <span *ngIf="onIcon||offIcon" class="ui-button-icon-left" [class]="checked ? this.onIcon : this.offIcon" [ngClass]="{\'ui-button-icon-left\': (iconPos === \'left\'), \n            \'ui-button-icon-right\': (iconPos === \'right\')}"></span>\n            <span class="ui-button-text ui-unselectable-text">{{checked ? hasOnLabel ? onLabel : \'ui-btn\' : hasOffLabel ? offLabel : \'ui-btn\'}}</span>\n        </div>\n    ',
                providers: [exports.TOGGLEBUTTON_VALUE_ACCESSOR]
              })
            ],
            ToggleButton
          );
          return ToggleButton;
        })();
        exports.ToggleButton = ToggleButton;
        var ToggleButtonModule = /** @class */ (function() {
          function ToggleButtonModule() {}
          ToggleButtonModule = __decorate(
            [
              core_1.NgModule({
                imports: [common_1.CommonModule],
                exports: [ToggleButton],
                declarations: [ToggleButton]
              })
            ],
            ToggleButtonModule
          );
          return ToggleButtonModule;
        })();
        exports.ToggleButtonModule = ToggleButtonModule;
        //# sourceMappingURL=togglebutton.js.map

        /***/
      },

    /***/ './node_modules/primeng/togglebutton.js':
      /*!**********************************************!*\
  !*** ./node_modules/primeng/togglebutton.js ***!
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
            /*! ./components/togglebutton/togglebutton */ './node_modules/primeng/components/togglebutton/togglebutton.js'
          )
        );

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/asset-view-scope/asset-view-scope.component.html':
      /*!*********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/asset-view-scope/asset-view-scope.component.html ***!
  \*********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="grid-cell-header">\r\n  <div class="grid-cell-title-container loading-indicator">\r\n    <div class="grid-cell-title">\r\n      <span *ngIf="isAssetAircraft">{{ getComponentName() + ".aircraft" | translate }}</span>\r\n      <span *ngIf="isAssetEngine">{{ getComponentName() + ".engine" | translate }}</span>\r\n      <span *ngIf="isAssetEquipment">{{ getComponentName() + ".equipment" | translate }}</span>\r\n      <span *ngIf="isGroundEquipment">{{ getComponentName() + ".groundEquipment" | translate }}</span>\r\n      <div *ngIf="alertLoading || assetLoading" class="lds-hourglass"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="grid-cell-content">\r\n  <div class="column">\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".designation" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="asset.equipmentDesignation" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="isAssetAircraft" class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".registration" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="asset.registration" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n      <div *ngIf="isAssetEngine || isAssetEquipment" class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".sn" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <div class="form-control-generic">\r\n            <a (click)="openAsset()">{{ asset.sn }}</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".configurationStatus" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <div class="form-control-generic">\r\n            <span *ngIf="alert === controlConfigConstants.ICON_GREEN" class="alert alert--ok">\r\n              {{ getComponentName() + ".alertOk" | translate }}\r\n            </span>\r\n\r\n            <span *ngIf="alert === controlConfigConstants.ICON_RED" class="alert alert--nok">\r\n              {{ getComponentName() + ".alertNok" | translate }}\r\n            </span>\r\n\r\n            <span *ngIf="alert === controlConfigConstants.ICON_YELLOW" class="alert alert--warning">\r\n              {{ getComponentName() + ".alertWarning" | translate }}\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".familyVariant" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="asset.familyVariantCode" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="isAssetAircraft" class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".msn" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <div class="form-control-generic">\r\n            <a (click)="openAsset()">{{ asset.sn }}</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf="isAssetEngine || isAssetEquipment" class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".pn" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="asset.pnCode" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".assetStatus" | translate }} </label>\r\n\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="assetStatus" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="isGroundEquipment" class="form-group">\r\n        <label class="form-label">\r\n          {{ getComponentName() + ".groundEquipmentType" | translate }}\r\n        </label>\r\n\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            [options]="groundEquipmentTypes"\r\n            [(ngModel)]="asset.equipmentFunction"\r\n            [showClear]="true"\r\n            placeholder="&nbsp;"\r\n            [disabled]="true"\r\n          >\r\n          </p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row" *ngIf="!isGroundEquipment">\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ tsnLabel }} </label>\r\n\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="assetTsn" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ csnLabel }} </label>\r\n\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="assetCsn" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/asset-view-scope/asset-view-scope.component.ts':
      /*!*******************************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/asset-view-scope/asset-view-scope.component.ts ***!
  \*******************************************************************************************************/
      /*! exports provided: AssetViewScopeComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AssetViewScopeComponent',
          function() {
            return AssetViewScopeComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/constants/control-config-constants */ './src/app/shared/constants/control-config-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/types/generic-component */ './src/app/shared/types/generic-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _configuration_control_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../configuration-control.service */ './src/app/main/maintenance/configuration-control/configuration-control.service.ts'
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

        var AssetViewScopeComponent = /** @class */ (function(_super) {
          __extends(AssetViewScopeComponent, _super);
          function AssetViewScopeComponent(
            configurationControlService,
            propertiesService,
            serializationService,
            tabService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Write
              ) || this;
            _this.configurationControlService = configurationControlService;
            _this.propertiesService = propertiesService;
            _this.serializationService = serializationService;
            _this.tabService = tabService;
            _this.controlConfigConstants =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_4__['ControlConfigConstants'];
            _this.onBeforeLoad();
            return _this;
          }
          Object.defineProperty(AssetViewScopeComponent.prototype, 'alert', {
            get: function() {
              return this._alert;
            },
            set: function(value) {
              if (!!value) {
                this._alert = value;
                this.onLoad();
              }
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(AssetViewScopeComponent.prototype, 'asset', {
            get: function() {
              return this._asset;
            },
            set: function(value) {
              if (!!value) {
                this._asset = value;
                this.onLoad();
              }
            },
            enumerable: true,
            configurable: true
          });
          AssetViewScopeComponent.prototype.getComponentName = function() {
            return 'AppliedConfigurationManagementAssetViewScopeComponent';
          };
          // ****************************************************************************
          AssetViewScopeComponent.prototype.onBeforeLoad = function() {
            this.alertLoading = false;
            this.assetCsn = '';
            this.assetLoading = false;
            this.assetStatus = '';
            this.assetTsn = '';
            this.csnLabel = '';
            this.tsnLabel = '';
            this._alert = '';
            this._asset = {};
            this.loadCsnLabel();
            this.loadTsnLabel();
          };
          AssetViewScopeComponent.prototype.onLoad = function() {
            if (this.asset.equipmentCode) {
              this.loadCsnAndTsnValues(this.asset.equipmentCode);
            }
            this.setAssetStatus();
            if (this.isGroundEquipment) {
              this.loadGroundEquipmentFunctionList();
            }
          };
          // ****************************************************************************
          AssetViewScopeComponent.prototype.openAsset = function() {
            if (this.asset.equipmentCode) {
              if (this.isAssetAircraft) {
                this.openAircraft(this.asset.equipmentCode);
              } else if (this.isAssetEngine) {
                this.openEngine(this.asset.equipmentCode);
              } else if (this.isAssetEquipment) {
                this.openEquipment(this.asset.equipmentCode);
              }
            }
          };
          AssetViewScopeComponent.prototype.loadCsnAndTsnValues = function(equipmentCode) {
            var _this = this;
            this.assetLoading = true;
            var input = {
              equipmentCode: equipmentCode
            };
            this.configurationControlService
              .findCsnAndTsnValues(input)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['finalize'])(function() {
                  _this.assetLoading = false;
                })
              )
              .subscribe(function(result) {
                if (result) {
                  _this.assetCsn = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__['StringUtils'].orEmpty(
                    result.csn
                  );
                  _this.assetTsn = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__['StringUtils'].orEmpty(
                    result.tsn
                  );
                }
              });
          };
          AssetViewScopeComponent.prototype.loadCsnLabel = function() {
            var _this = this;
            this.configurationControlService.getStandardCycleCounterLabel().subscribe(function(result) {
              _this.csnLabel = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__['StringUtils'].orEmpty(result);
            });
          };
          AssetViewScopeComponent.prototype.loadTsnLabel = function() {
            var _this = this;
            this.configurationControlService.getStandardTimeCounterLabel().subscribe(function(result) {
              _this.tsnLabel = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__['StringUtils'].orEmpty(result);
            });
          };
          AssetViewScopeComponent.prototype.loadGroundEquipmentFunctionList = function() {
            var _this = this;
            this.configurationControlService.fetchGroundEquipmentFunctionList().subscribe(function(results) {
              _this.groundEquipmentTypes = results;
            });
          };
          AssetViewScopeComponent.prototype.openAircraft = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
                  .FLE_AIRCRAFT_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetViewScopeComponent.prototype.openEngine = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
                  .FLE_ENGINE_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetViewScopeComponent.prototype.openEquipment = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
                  .FLE_EQUIPMENT_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          AssetViewScopeComponent.prototype.setAssetStatus = function() {
            var _this = this;
            if (this.isAssetAircraft) {
              var familyVariantInput =
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_AIRCRAFT_KEY;
              this.configurationControlService.getStatusMap(familyVariantInput).subscribe(function(results) {
                var status = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                  .orEmpty(results)
                  .find(function(elt) {
                    return elt.value === _this._asset.operationalStatus;
                  });
                _this.assetStatus = status ? status.label : '';
              });
            } else {
              this.propertiesService
                .getValue(
                  _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                    .OPERATIONAL_STATUS_MAP
                )
                .subscribe(function(results) {
                  var status = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                    .orEmpty(results)
                    .find(function(elt) {
                      return elt.value === _this._asset.operationalStatus;
                    });
                  _this.assetStatus = status ? status.label : '';
                });
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            AssetViewScopeComponent.prototype,
            'isAssetAircraft',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            AssetViewScopeComponent.prototype,
            'isAssetEngine',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            AssetViewScopeComponent.prototype,
            'isAssetEquipment',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            AssetViewScopeComponent.prototype,
            'isGroundEquipment',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', String),
              __metadata('design:paramtypes', [String])
            ],
            AssetViewScopeComponent.prototype,
            'alert',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            AssetViewScopeComponent.prototype,
            'asset',
            null
          );
          AssetViewScopeComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-configuration-control-asset-view-scope',
                template: __webpack_require__(
                  /*! ./asset-view-scope.component.html */ './src/app/main/maintenance/configuration-control/asset-view-scope/asset-view-scope.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../share.scss */ './src/app/main/maintenance/configuration-control/share.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _configuration_control_service__WEBPACK_IMPORTED_MODULE_13__['ConfigurationControlService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__['PropertiesService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__['TabService']
              ])
            ],
            AssetViewScopeComponent
          );
          return AssetViewScopeComponent;
        })(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_10__['GenericComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/configuration-control.component.html':
      /*!*********************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/configuration-control.component.html ***!
  \*********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ componentContext }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      *ngIf="workPackageMovementsUpdated"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="cancelAllWorkPackageMovement()"\r\n    >\r\n      {{ getComponentName() + ".cancel" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!workPackageMovementsUpdated"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="confirmAllWorkPackageMovement()"\r\n    >\r\n      {{ getComponentName() + ".confirm" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item [matMenuTriggerFor]="navigations">\r\n        {{ "global.goTo" | translate }}\r\n      </button>\r\n\r\n      <button mat-menu-item (click)="onReload()">{{ "global.refresh" | translate }}</button>\r\n      <button mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n    <mat-menu #navigations="matMenu">\r\n      <button *ngIf="!isCreateOpenMode" type="button" mat-menu-item (click)="navigationLinkList[0].command()">\r\n        {{ navigationLinkList[0].label | translate }}\r\n      </button>\r\n      <button\r\n        *ngIf="!isCreateOpenMode && !isGroundEquipment"\r\n        type="button"\r\n        mat-menu-item\r\n        (click)="navigationLinkList[1].command()"\r\n      >\r\n        {{ navigationLinkList[1].label | translate }}\r\n      </button>\r\n      <button\r\n        *ngIf="!isCreateOpenMode && !isGroundEquipment"\r\n        type="button"\r\n        mat-menu-item\r\n        (click)="navigationLinkList[2].command()"\r\n      >\r\n        {{ navigationLinkList[2].label | translate }}\r\n      </button>\r\n      <button\r\n        *ngIf="!isCreateOpenMode && !isGroundEquipment"\r\n        type="button"\r\n        mat-menu-item\r\n        (click)="navigationLinkList[3].command()"\r\n      >\r\n        {{ navigationLinkList[3].label | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--6">\r\n          <div class="grid-cell grid-cell--container grid-cell-scope">\r\n            <aw-configuration-control-asset-view-scope\r\n              [alert]="globalStatus"\r\n              [asset]="asset"\r\n              [isGroundEquipment]="isGroundEquipment"\r\n              [isAssetAircraft]="isTopAssetAircraft"\r\n              [isAssetEngine]="isTopAssetEngine"\r\n              [isAssetEquipment]="isTopAssetEquipment"\r\n            ></aw-configuration-control-asset-view-scope>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-cell--6">\r\n          <div class="grid-cell grid-cell--container grid-cell-summary">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container loading-indicator">\r\n                <div class="grid-cell-title">\r\n                  <span>{{ getComponentName() + ".summary" | translate }}</span>\r\n                  <div *ngIf="assetStructureLoading" class="lds-hourglass"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="table-summary-wrapper" [ngClass]="{ \'visibility--hidden\': assetStructureLoading }">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      class="aw-table-control-summary"\r\n                      [columns]="summaryTableColList"\r\n                      [value]="summaryTable"\r\n                    >\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th\r\n                            pResizableColumn\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchCase="\'category\'"> </span>\r\n\r\n                            <span *ngSwitchDefault> {{ getComponentName() + "." + col.field | translate }} </span>\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-columns="columns" let-rowData>\r\n                        <tr>\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchCase="\'nok\'" class="control-result" [ngClass]="{ nok: rowData[\'nok\'] > 0 }">\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngSwitchCase="\'warning\'"\r\n                              class="control-result"\r\n                              [ngClass]="{ warning: rowData[\'nok\'] == 0 && rowData[\'warning\'] > 0 }"\r\n                            >\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngSwitchCase="\'ok\'"\r\n                              class="control-result"\r\n                              [ngClass]="{ ok: rowData[\'nok\'] == 0 && rowData[\'warning\'] == 0 && rowData[\'ok\'] >= 0 }"\r\n                            >\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'category\'">\r\n                              {{ getComponentName() + "." + rowData[col.field] | translate }}\r\n                            </span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div\r\n                *ngIf="workPackageMovementsVisible"\r\n                class="section"\r\n                [ngClass]="{ \'visibility--hidden\': assetStructureLoading }"\r\n              >\r\n                <h4 class="section-title">\r\n                  {{ getComponentName() + ".workPackageMovements" | translate }}\r\n                </h4>\r\n\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ getComponentName() + ".confirmedRemovals" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <div class="form-control-generic">\r\n                          <span *ngIf="workPackageRemovals === workPackageConfirmedRemovals" class="alert alert--ok">\r\n                            {{ workPackageConfirmedRemovals }} / {{ workPackageRemovals }}\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf="workPackageRemovals !== workPackageConfirmedRemovals"\r\n                            class="alert alert--warning"\r\n                          >\r\n                            {{ workPackageConfirmedRemovals }} / {{ workPackageRemovals }}\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ getComponentName() + ".confirmedInstallations" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <div class="form-control-generic">\r\n                          <span\r\n                            *ngIf="workPackageInstallations === workPackageConfirmedInstallations"\r\n                            class="alert alert--ok"\r\n                          >\r\n                            {{ workPackageConfirmedInstallations }} / {{ workPackageInstallations }}\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf="workPackageInstallations !== workPackageConfirmedInstallations"\r\n                            class="alert alert--warning"\r\n                          >\r\n                            {{ workPackageConfirmedInstallations }} / {{ workPackageInstallations }}\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div #configurationControlAnchor class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container grid-cell-configuration-control">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container loading-indicator">\r\n                <div class="grid-cell-title">\r\n                  <a class="header-link" (click)="scrollToAnchor(configurationControlEltRef)">\r\n                    <i class="material-icons">link</i>\r\n                  </a>\r\n                  {{ getComponentName() + ".configurationControl" | translate }}\r\n                  <div *ngIf="assetStructureLoading" class="lds-hourglass"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div *ngIf="!assetStructureLoading" class="column">\r\n                <div class="list-with-details">\r\n                  <div class="list">\r\n                    <p-treeTable\r\n                      #ptable\r\n                      class="aw-tree-table2"\r\n                      [value]="assetStructure"\r\n                      selectionMode="single"\r\n                      [(selection)]="assetStructureSelection"\r\n                      [scrollable]="true"\r\n                      (onNodeSelect)="selectAssetStructureNode()"\r\n                      (onNodeUnselect)="selectAssetStructureNode()"\r\n                      [resizableColumns]="true"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!maintenancePlanTableLoading"> &nbsp;</span>\r\n\r\n                        <div *ngIf="maintenancePlanTableLoading" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              [(ngModel)]="searchAssetStructureGlobalFilter"\r\n                              (keyup)="filterAssetStructureWithGlobalFilter(searchAssetStructureGlobalFilter)"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class="aw-table-icon-actions">\r\n                            <i\r\n                              class="fa fa-fw fa-long-arrow-right aw-icon aw-icon-with-border"\r\n                              [ngClass]="{ active: assetStructureFilterRemovalVisible }"\r\n                              aria-hidden="true"\r\n                              pTooltip="{{ getComponentName() + \'.showRemoval\' | translate }}"\r\n                              tooltipPosition="top"\r\n                              (click)="showRemovals()"\r\n                              *ngIf="workPackageCode"\r\n                            ></i>\r\n\r\n                            <i\r\n                              class="fa fa-fw fa-long-arrow-left aw-icon aw-icon-with-border"\r\n                              [ngClass]="{ active: assetStructureFilterInstallationVisible }"\r\n                              aria-hidden="true"\r\n                              pTooltip="{{ getComponentName() + \'.showInstallation\' | translate }}"\r\n                              tooltipPosition="top"\r\n                              (click)="showInstallations()"\r\n                              *ngIf="workPackageCode"\r\n                            ></i>\r\n\r\n                            <i\r\n                              class="fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n                              aria-hidden="true"\r\n                              pTooltip="{{\r\n                                getComponentName() + (assetStructureFiltersVisible ? \'.hideFilters\' : \'.showFilters\')\r\n                                  | translate\r\n                              }}"\r\n                              tooltipPosition="top"\r\n                              [ngClass]="{ active: assetStructureFiltersVisible }"\r\n                              (click)="opFilters.toggle($event)"\r\n                            ></i>\r\n                            <i\r\n                              class="fa fa-fw fa-question aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n                              aria-hidden="true"\r\n                              (click)="openHelpDialog()"\r\n                              pTooltip="{{ \'leftsidebar.help\' | translate }}"\r\n                              tooltipPosition="bottom"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup">\r\n                        <colgroup>\r\n                          <col style="width: 20%" />\r\n                          <col style="width: 80%" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header">\r\n                        <tr>\r\n                          <th ttResizableColumn style="text-align: center">\r\n                            {{ getComponentName() + ".control" | translate }}\r\n                          </th>\r\n\r\n                          <th ttResizableColumn style="text-align: left">\r\n                            {{ getComponentName() + ".designation" | translate }}\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowNode let-rowData="rowData">\r\n                        <tr [ttSelectableRow]="rowNode">\r\n                          <td style="text-align: center">\r\n                            <span\r\n                              *ngIf="rowData.checkGlobalResult === controlConfigConstants.ICON_GREEN"\r\n                              class="alert alert--ok"\r\n                            >\r\n                              {{ getComponentName() + ".ok" | translate }}\r\n                            </span>\r\n                            <span\r\n                              *ngIf="rowData.checkGlobalResult === controlConfigConstants.ICON_RED"\r\n                              class="alert alert--nok"\r\n                            >\r\n                              {{ getComponentName() + ".nok" | translate }}\r\n                            </span>\r\n                            <span\r\n                              *ngIf="rowData.checkGlobalResult === controlConfigConstants.ICON_YELLOW"\r\n                              class="alert alert--warning"\r\n                            >\r\n                              {{ getComponentName() + ".warning" | translate }}\r\n                            </span>\r\n                          </td>\r\n\r\n                          <td style="text-align: left">\r\n                            <div class="display--flex-row flex-row--align-start">\r\n                              <p-treeTableToggler [rowNode]="rowNode"></p-treeTableToggler>\r\n\r\n                              <div>\r\n                                <ng-container *ngIf="rowData.bidoEquipment">\r\n                                  <div>\r\n                                    <i class="fa fa-fw" aria-hidden="true" style="visibility: hidden"></i>\r\n                                    <span class="node">{{ rowData.structure }}</span>\r\n                                  </div>\r\n\r\n                                  <ng-container *ngIf="rowData.installedStockMvtData && rowData.removedStockMvtData">\r\n                                    <div\r\n                                      *ngIf="rowData.asset"\r\n                                      [ngClass]="{\r\n                                        \'issue-asset\': !rowData.installedStockMvtData.bidoNotificationNotificationCode,\r\n                                        \'issue-asset-validated\':\r\n                                          rowData.installedStockMvtData.bidoNotificationNotificationCode\r\n                                      }"\r\n                                    >\r\n                                      <i class="fa fa-fw" aria-hidden="true" style="visibility: hidden"></i>\r\n                                      <i class="fa fa-fw fa-long-arrow-left" aria-hidden="true"></i>\r\n                                      <ng-container\r\n                                        *ngTemplateOutlet="equipmentlink; context: { equipment: rowData.bidoEquipment }"\r\n                                      ></ng-container>\r\n                                    </div>\r\n\r\n                                    <div\r\n                                      *ngIf="rowData.replacedAsset"\r\n                                      [ngClass]="{\r\n                                        \'receipt-asset\': !rowData.removedStockMvtData.bidoNotificationNotificationCode,\r\n                                        \'receipt-asset-validated\':\r\n                                          rowData.removedStockMvtData.bidoNotificationNotificationCode\r\n                                      }"\r\n                                    >\r\n                                      <i class="fa fa-fw" aria-hidden="true" style="visibility: hidden"></i>\r\n                                      <i class="fa fa-fw fa-long-arrow-right" aria-hidden="true"></i>\r\n                                      <ng-container\r\n                                        *ngTemplateOutlet="\r\n                                          equipmentlink;\r\n                                          context: { equipment: rowData.replacedBidoEquipment }\r\n                                        "\r\n                                      ></ng-container>\r\n                                    </div>\r\n                                  </ng-container>\r\n\r\n                                  <ng-container *ngIf="rowData.installedStockMvtData && !rowData.removedStockMvtData">\r\n                                    <div\r\n                                      *ngIf="rowData.asset"\r\n                                      [ngClass]="{\r\n                                        \'issue-asset\': !rowData.installedStockMvtData.bidoNotificationNotificationCode,\r\n                                        \'issue-asset-validated\':\r\n                                          rowData.installedStockMvtData.bidoNotificationNotificationCode\r\n                                      }"\r\n                                    >\r\n                                      <i class="fa fa-fw" aria-hidden="true" style="visibility: hidden"></i>\r\n                                      <i class="fa fa-fw fa-long-arrow-left" aria-hidden="true"></i>\r\n                                      <ng-container\r\n                                        *ngTemplateOutlet="equipmentlink; context: { equipment: rowData.bidoEquipment }"\r\n                                      ></ng-container>\r\n                                    </div>\r\n                                  </ng-container>\r\n\r\n                                  <ng-container *ngIf="!rowData.installedStockMvtData && rowData.removedStockMvtData">\r\n                                    <div\r\n                                      *ngIf="rowData.asset || rowData.replacedAsset"\r\n                                      [ngClass]="{\r\n                                        \'receipt-asset\': !rowData.removedStockMvtData.bidoNotificationNotificationCode,\r\n                                        \'receipt-asset-validated\':\r\n                                          rowData.removedStockMvtData.bidoNotificationNotificationCode\r\n                                      }"\r\n                                    >\r\n                                      <i class="fa fa-fw" aria-hidden="true" style="visibility: hidden"></i>\r\n                                      <i class="fa fa-fw fa-long-arrow-right" aria-hidden="true"></i>\r\n                                      <ng-container\r\n                                        *ngTemplateOutlet="\r\n                                          equipmentlink;\r\n                                          context: { equipment: rowData.bidoEquipment || rowData.replacedBidoEquipment }\r\n                                        "\r\n                                      ></ng-container>\r\n                                    </div>\r\n                                  </ng-container>\r\n\r\n                                  <ng-container *ngIf="!rowData.installedStockMvtData && !rowData.removedStockMvtData">\r\n                                    <div *ngIf="rowData.asset">\r\n                                      <i class="fa fa-fw" aria-hidden="true" style="visibility: hidden"></i>\r\n                                      <ng-container\r\n                                        *ngTemplateOutlet="equipmentlink; context: { equipment: rowData.bidoEquipment }"\r\n                                      ></ng-container>\r\n                                    </div>\r\n                                  </ng-container>\r\n                                </ng-container>\r\n\r\n                                <ng-container *ngIf="rowData.bidoFl">\r\n                                  <i\r\n                                    *ngIf="isFlAircraft(rowData.bidoFl)"\r\n                                    class="fa fa-fw fa-plane"\r\n                                    aria-hidden="true"\r\n                                  ></i>\r\n                                  <i *ngIf="isFlEngine(rowData.bidoFl)" class="fa fa-fw fa-cog" aria-hidden="true"></i>\r\n                                  <i\r\n                                    *ngIf="!isFlAircraft(rowData.bidoFl) && !isFlEngine(rowData.bidoFl)"\r\n                                    class="fa fa-fw fa-cogs"\r\n                                    aria-hidden="true"\r\n                                  ></i>\r\n                                  <span class="node fl-node">{{ rowData.structure }}</span>\r\n                                  <span *ngIf="rowData.bidoEquipment" class="asset">\r\n                                    <ng-container\r\n                                      *ngTemplateOutlet="equipmentlink; context: { equipment: rowData.bidoEquipment }"\r\n                                    ></ng-container>\r\n                                  </span>\r\n                                </ng-container>\r\n\r\n                                <ng-container *ngIf="rowData.bireItem">\r\n                                  <i\r\n                                    *ngIf="isItemAircraft(rowData.bireItem)"\r\n                                    class="fa fa-fw fa-plane"\r\n                                    aria-hidden="true"\r\n                                  ></i>\r\n                                  <i\r\n                                    *ngIf="isItemEngine(rowData.bireItem)"\r\n                                    class="fa fa-fw fa-cog"\r\n                                    aria-hidden="true"\r\n                                  ></i>\r\n                                  <i\r\n                                    *ngIf="!isItemAircraft(rowData.bireItem) && !isItemEngine(rowData.bireItem)"\r\n                                    class="fa fa-fw fa-cogs"\r\n                                    aria-hidden="true"\r\n                                  ></i>\r\n                                  <span class="node item-node">\r\n                                    <span class="chapter">{{ rowData.bireItem.chapter }}</span>\r\n                                    -\r\n                                    <span class="section">{{ rowData.bireItem.section }}</span>\r\n                                    -\r\n                                    <span class="subject">{{ rowData.bireItem.subject }}</span>\r\n                                    -\r\n                                    <span class="sheet">{{ rowData.bireItem.sheet }}</span>\r\n                                    -\r\n                                    <span class="marks">{{ rowData.bireItem.marks }}</span>\r\n                                  </span>\r\n                                  <div class="node asset">{{ rowData.bireItem.name }}</div>\r\n\r\n                                  <div *ngIf="!rowData.uniqueBidoEquipmentChild" class="node asset">\r\n                                    <span\r\n                                      [ngClass]="{\r\n                                        alert: true,\r\n                                        \'alert--mandatory\': rowData.itemMandatory,\r\n                                        \'alert--not-mandatory\': !rowData.itemMandatory\r\n                                      }"\r\n                                    >\r\n                                      <span *ngIf="rowData.equipmentAssetCount == 0">{{\r\n                                        getComponentName() + ".empty" | translate\r\n                                      }}</span>\r\n                                      <span *ngIf="rowData.equipmentAssetCount > 1">{{\r\n                                        getComponentName() + ".several" | translate\r\n                                      }}</span>\r\n                                    </span>\r\n                                  </div>\r\n\r\n                                  <div *ngIf="rowData.uniqueBidoEquipmentChild" class="asset">\r\n                                    <ng-container\r\n                                      *ngTemplateOutlet="\r\n                                        equipmentlink;\r\n                                        context: { equipment: rowData.uniqueBidoEquipmentChild }\r\n                                      "\r\n                                    ></ng-container>\r\n                                  </div>\r\n                                </ng-container>\r\n\r\n                                <ng-container *ngIf="rowData.functionCode">\r\n                                  <span class="node function-code-node">{{ rowData.structure }}</span>\r\n                                  <span class="node asset">{{ rowData.asset }}</span>\r\n                                </ng-container>\r\n                              </div>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-treeTable>\r\n                  </div>\r\n\r\n                  <div class="details">\r\n                    <div\r\n                      class="column"\r\n                      [ngClass]="{\r\n                        \'visibility--hidden\': assetStructureLoading || !assetStructureSelection\r\n                      }"\r\n                    >\r\n                      <div class="section">\r\n                        <div class="section-content">\r\n                          <div class="row configuration-control-node-action-list">\r\n                            <button\r\n                              *ngIf="\r\n                                asset &&\r\n                                assetStructureSelection &&\r\n                                assetStructureSelection.data &&\r\n                                assetStructureSelection.data.bidoEquipment &&\r\n                                asset.equipmentCode === assetStructureSelection.data.bidoEquipment.equipmentCode\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="openFunctionalLocationAssignment(asset)"\r\n                            >\r\n                              {{ "assignFunctionalLocation" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="\r\n                                workPackageCode &&\r\n                                assetStructureSelection &&\r\n                                assetStructureSelection.data &&\r\n                                assetStructureSelection.data.bidoEquipment &&\r\n                                assetStructureSelection.data.bidoEquipment.equipmentFunction !==\r\n                                  awPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              class="btn-with-spinner"\r\n                              (click)="generateFormFAA8130(assetStructureSelection.data.bidoEquipment)"\r\n                              [disabled]="showLoaderGenerateFormFAA8130"\r\n                            >\r\n                              <span class="lds-hourglass" *ngIf="showLoaderGenerateFormFAA8130"></span>\r\n                              {{ "formFAA8130" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="\r\n                                workPackageCode &&\r\n                                assetStructureSelection &&\r\n                                assetStructureSelection.data &&\r\n                                assetStructureSelection.data.bidoEquipment &&\r\n                                assetStructureSelection.data.bidoEquipment.equipmentFunction !==\r\n                                  awPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY\r\n                              "\r\n                              type="button"\r\n                              class="btn-with-spinner"\r\n                              mat-raised-button\r\n                              (click)="generateFormEASA1(assetStructureSelection.data.bidoEquipment)"\r\n                              [disabled]="showLoaderGenerateFormEASA1"\r\n                            >\r\n                              <span class="lds-hourglass" *ngIf="showLoaderGenerateFormEASA1"></span>\r\n                              {{ "formEASA1" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="\r\n                                assetStructureSelection &&\r\n                                assetStructureSelection.data &&\r\n                                assetStructureSelection.data.bidoEquipment &&\r\n                                assetStructureSelection.data.bidoEquipment.equipmentFunction !==\r\n                                  awPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY &&\r\n                                !assetStructureSelection.data.installedStockMvtData &&\r\n                                !assetStructureSelection.data.removedStockMvtData\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="removeEquipment()"\r\n                            >\r\n                              {{ getComponentName() + ".remove" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="\r\n                                assetStructureSelection &&\r\n                                assetStructureSelection.data &&\r\n                                assetStructureSelection.data.bidoEquipment &&\r\n                                !assetStructureSelection.data.installedStockMvtData &&\r\n                                !assetStructureSelection.data.removedStockMvtData\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="installEquipment()"\r\n                            >\r\n                              {{ getComponentName() + ".install" | translate }}\r\n                            </button>\r\n\r\n                            <p-splitButton\r\n                              *ngIf="\r\n                                assetStructureSelection &&\r\n                                assetStructureSelection.data &&\r\n                                assetStructureSelection.data.bireItem &&\r\n                                assetStructureSelection.data.uniqueBidoEquipmentChild &&\r\n                                assetStructureSelection.data.uniqueBidoEquipmentChild.equipmentFunction !==\r\n                                  awPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY\r\n                              "\r\n                              class="aw-split-btn aw-table-action"\r\n                              appendTo="body"\r\n                              label="{{ getComponentName() + \'.removeByWo\' | translate }}"\r\n                              (onClick)="removeEquipmentFromWP()"\r\n                              [model]="removeItems"\r\n                            ></p-splitButton>\r\n\r\n                            <p-splitButton\r\n                              *ngIf="\r\n                                assetStructureSelection &&\r\n                                assetStructureSelection.data &&\r\n                                assetStructureSelection.data.bireItem &&\r\n                                !assetStructureSelection.data.installedStockMvtData &&\r\n                                !assetStructureSelection.data.removedStockMvtData\r\n                              "\r\n                              class="aw-split-btn aw-table-action"\r\n                              appendTo="body"\r\n                              label="{{ getComponentName() + \'.installByWo\' | translate }}"\r\n                              (onClick)="installEquipmentFromWP()"\r\n                              [model]="installItems"\r\n                            ></p-splitButton>\r\n\r\n                            <button\r\n                              *ngIf="\r\n                                assetStructureSelection &&\r\n                                assetStructureSelection.data &&\r\n                                assetStructureSelection.data.bidoFl\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="openFl()"\r\n                            >\r\n                              {{ getComponentName() + ".open" | translate }}\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="section">\r\n                        <div class="grid-cell-content">\r\n                          <div class="column">\r\n                            <div class="row">\r\n                              <div class="form-group" *ngIf="assetStructureSelection.data.bireItem">\r\n                                <label class="form-label"> {{ getComponentName() + ".item" | translate }} </label>\r\n\r\n                                <div class="form-control">\r\n                                  <input\r\n                                    type="text"\r\n                                    class="aw-input"\r\n                                    value="{{ getItemKey(assetStructureSelection.data.bireItem) }}"\r\n                                    [disabled]="true"\r\n                                  />\r\n                                  <div class="asset">\r\n                                    <i>{{ assetStructureSelection.data.bireItem.name }}</i>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div\r\n                                class="form-group"\r\n                                *ngIf="\r\n                                  !assetStructureSelection.data.bireItem &&\r\n                                  ((assetStructureSelection.data.bidoEquipment &&\r\n                                    assetStructureSelection.data.bidoEquipment.equipmentDesignation) ||\r\n                                    (assetStructureSelection.data.uniqueBidoEquipmentChild &&\r\n                                      assetStructureSelection.data.uniqueBidoEquipmentChild.equipmentDesignation))\r\n                                "\r\n                              >\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".designation" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <input\r\n                                    *ngIf="assetStructureSelection.data.bidoEquipment"\r\n                                    type="text"\r\n                                    class="aw-input"\r\n                                    [(ngModel)]="assetStructureSelection.data.bidoEquipment.equipmentDesignation"\r\n                                    [disabled]="true"\r\n                                  />\r\n                                  <input\r\n                                    *ngIf="assetStructureSelection.data.uniqueBidoEquipmentChild"\r\n                                    type="text"\r\n                                    class="aw-input"\r\n                                    [(ngModel)]="\r\n                                      assetStructureSelection.data.uniqueBidoEquipmentChild.equipmentDesignation\r\n                                    "\r\n                                    [disabled]="true"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n                              <div class="form-group" *ngIf="assetStructureSelection.data.bidoFl">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".functionLocation" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <input\r\n                                    type="text"\r\n                                    class="aw-input"\r\n                                    [(ngModel)]="assetStructureSelection.data.structure"\r\n                                    [disabled]="true"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n                              <div\r\n                                class="form-group"\r\n                                *ngIf="\r\n                                  (assetStructureSelection.data.bidoEquipment &&\r\n                                    !isAssetEngine(assetStructureSelection.data.bidoEquipment) &&\r\n                                    assetStructureSelection.data.bidoEquipment.pnCode) ||\r\n                                  (assetStructureSelection.data.uniqueBidoEquipmentChild &&\r\n                                    !isAssetEngine(assetStructureSelection.data.uniqueBidoEquipmentChild) &&\r\n                                    assetStructureSelection.data.uniqueBidoEquipmentChild.pnCode)\r\n                                "\r\n                              >\r\n                                <label class="form-label">P/N</label>\r\n                                <div class="form-control">\r\n                                  <input\r\n                                    *ngIf="assetStructureSelection.data.bidoEquipment"\r\n                                    type="text"\r\n                                    class="aw-input"\r\n                                    [(ngModel)]="assetStructureSelection.data.bidoEquipment.pnCode"\r\n                                    [disabled]="true"\r\n                                  />\r\n                                  <input\r\n                                    *ngIf="assetStructureSelection.data.uniqueBidoEquipmentChild"\r\n                                    type="text"\r\n                                    class="aw-input"\r\n                                    [(ngModel)]="assetStructureSelection.data.uniqueBidoEquipmentChild.pnCode"\r\n                                    [disabled]="true"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n                              <div\r\n                                class="form-group"\r\n                                *ngIf="\r\n                                  (assetStructureSelection.data.bidoEquipment &&\r\n                                    assetStructureSelection.data.bidoEquipment.sn) ||\r\n                                  (assetStructureSelection.data.uniqueBidoEquipmentChild &&\r\n                                    assetStructureSelection.data.uniqueBidoEquipmentChild.sn)\r\n                                "\r\n                              >\r\n                                <label\r\n                                  class="form-label"\r\n                                  *ngIf="\r\n                                    isAssetAircraft(\r\n                                      assetStructureSelection.data.bidoEquipment ||\r\n                                        assetStructureSelection.data.uniqueBidoEquipmentChild\r\n                                    )\r\n                                  "\r\n                                  >MSN</label\r\n                                >\r\n                                <label\r\n                                  class="form-label"\r\n                                  *ngIf="\r\n                                    isAssetEngine(\r\n                                      assetStructureSelection.data.bidoEquipment ||\r\n                                        assetStructureSelection.data.uniqueBidoEquipmentChild\r\n                                    )\r\n                                  "\r\n                                  >ESN</label\r\n                                >\r\n                                <label\r\n                                  class="form-label"\r\n                                  *ngIf="\r\n                                    isAssetEquipment(\r\n                                      assetStructureSelection.data.bidoEquipment ||\r\n                                        assetStructureSelection.data.uniqueBidoEquipmentChild\r\n                                    )\r\n                                  "\r\n                                  >S/N</label\r\n                                >\r\n                                <div class="form-control">\r\n                                  <input\r\n                                    *ngIf="assetStructureSelection.data.bidoEquipment"\r\n                                    type="text"\r\n                                    class="aw-input"\r\n                                    [(ngModel)]="assetStructureSelection.data.bidoEquipment.sn"\r\n                                    [disabled]="true"\r\n                                  />\r\n                                  <input\r\n                                    *ngIf="assetStructureSelection.data.uniqueBidoEquipmentChild"\r\n                                    type="text"\r\n                                    class="aw-input"\r\n                                    [(ngModel)]="assetStructureSelection.data.uniqueBidoEquipmentChild.sn"\r\n                                    [disabled]="true"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <h4 class="section-title">\r\n                          {{ getComponentName() + ".controls" | translate }}\r\n                          ({{ controlTable ? controlTable.length : 0 }})\r\n                        </h4>\r\n\r\n                        <div class="section-content">\r\n                          <p-table\r\n                            [resizableColumns]="true"\r\n                            class="aw-table2"\r\n                            [columns]="controlTableColList"\r\n                            [value]="controlTable"\r\n                            [scrollable]="true"\r\n                            dataKey="_id"\r\n                          >\r\n                            <ng-template pTemplate="colgroup" let-columns>\r\n                              <colgroup>\r\n                                <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                                <col class="row-expand-wrapper" />\r\n                              </colgroup>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate="header" let-columns>\r\n                              <tr>\r\n                                <th\r\n                                  pResizableColumn\r\n                                  *ngFor="let col of columns"\r\n                                  [ngStyle]="{ \'text-align\': col.alignment }"\r\n                                >\r\n                                  {{ getComponentName() + "." + col.field | translate }}\r\n                                </th>\r\n\r\n                                <th class="row-expand-wrapper"></th>\r\n                              </tr>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate="body" let-columns="columns" let-rowData let-expanded="expanded">\r\n                              <tr>\r\n                                <td\r\n                                  *ngFor="let col of columns"\r\n                                  [ngSwitch]="col.field"\r\n                                  [ngStyle]="{ \'text-align\': col.alignment }"\r\n                                >\r\n                                  <span *ngSwitchCase="\'causeIdList\'">\r\n                                    {{ rowData[col.field] }}\r\n                                  </span>\r\n\r\n                                  <span *ngSwitchCase="\'control\'">\r\n                                    <span\r\n                                      *ngIf="rowData[col.field] === controlConfigConstants.ICON_GREEN"\r\n                                      class="configuration-control-alert configuration-control-alert--ok"\r\n                                    >\r\n                                      {{ getComponentName() + ".ok" | translate }}\r\n                                    </span>\r\n                                    <span\r\n                                      *ngIf="rowData[col.field] === controlConfigConstants.ICON_RED"\r\n                                      class="configuration-control-alert configuration-control-alert--nok"\r\n                                    >\r\n                                      {{ getComponentName() + ".nok" | translate }}\r\n                                    </span>\r\n                                    <span\r\n                                      *ngIf="rowData[col.field] === controlConfigConstants.ICON_YELLOW"\r\n                                      class="configuration-control-alert configuration-control-alert--warning"\r\n                                    >\r\n                                      {{ getComponentName() + ".warning" | translate }}\r\n                                    </span>\r\n                                  </span>\r\n\r\n                                  <span *ngSwitchCase="\'category\'">\r\n                                    <span\r\n                                      *ngIf="\r\n                                        !!assetStructureSelection &&\r\n                                        !!assetStructureSelection.data &&\r\n                                        !!assetStructureSelection.data.bidoEquipment\r\n                                      "\r\n                                    >\r\n                                      <a\r\n                                        *ngIf="\r\n                                          rowData[col.field] ===\r\n                                          component.SUMMARY_TABLE_AIRWORTHINESS_DOCUMENT_COMPLIANCE_LABEL\r\n                                        "\r\n                                        (click)="openAirworthinessDocumentComplianceTable()"\r\n                                        >{{ getComponentName() + "." + rowData[col.field] | translate }}</a\r\n                                      >\r\n                                      <a\r\n                                        *ngIf="rowData[col.field] === component.SUMMARY_TABLE_LLP_POTENTIAL_LABEL"\r\n                                        (click)="openLLPPotentialTable()"\r\n                                        >{{ getComponentName() + "." + rowData[col.field] | translate }}</a\r\n                                      >\r\n                                      <span\r\n                                        *ngIf="\r\n                                          rowData[col.field] ===\r\n                                          component.SUMMARY_TABLE_APPLICABLE_CONFIGURATION_COMPLIANCE_LABEL\r\n                                        "\r\n                                        >{{ getComponentName() + "." + rowData[col.field] | translate }}</span\r\n                                      >\r\n                                    </span>\r\n                                    <span\r\n                                      *ngIf="\r\n                                        !!assetStructureSelection &&\r\n                                        !!assetStructureSelection.data &&\r\n                                        assetStructureSelection.data.bidoEquipment === null\r\n                                      "\r\n                                    >\r\n                                      {{ getComponentName() + "." + rowData[col.field] | translate }}\r\n                                    </span>\r\n                                    <!-- {{ getComponentName() + "." + rowData[col.field] | translate }} -->\r\n                                  </span>\r\n                                  <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                                </td>\r\n\r\n                                <td class="row-expand-wrapper" [pRowToggler]="rowData">\r\n                                  <i\r\n                                    class="fa fa-fw aw-icon aw-icon-with-border"\r\n                                    [ngClass]="{\r\n                                      \'fa-minus\': expanded,\r\n                                      \'fa-plus\': !expanded,\r\n                                      \'visibility--hidden\': rowData[\'causeList\'].length === 0\r\n                                    }"\r\n                                    aria-hidden="true"\r\n                                    pTooltip="{{ \'global.showTableRowDetails\' | translate }}"\r\n                                    tooltipPosition="left"\r\n                                    (click)="toggleControlsTableRowDetailsVisibility(rowData)"\r\n                                  ></i>\r\n                                </td>\r\n                              </tr>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate="rowexpansion" let-rowData let-columns="columns">\r\n                              <tr class="row-expanded overflow">\r\n                                <td [attr.colspan]="columns.length + 1">\r\n                                  <div *ngFor="let cause of rowData[\'causeList\']">\r\n                                    {{ cause }}\r\n                                  </div>\r\n                                </td>\r\n                              </tr>\r\n                            </ng-template>\r\n                          </p-table>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="section">\r\n                        <aw-removal-equipment\r\n                          *ngIf="\r\n                            asset.familyVariantCode &&\r\n                            assetStructureSelection &&\r\n                            assetStructureSelection.data.removedStockMvtData &&\r\n                            equipmentCode &&\r\n                            workPackage\r\n                          "\r\n                          [(assetStructureSelection)]="assetStructureSelection.data"\r\n                          [equipmentCode]="equipmentCode"\r\n                          [familyVariantCode]="asset.familyVariantCode"\r\n                          [workPackage]="workPackage"\r\n                          [isGroundEquipment]="isGroundEquipment"\r\n                        ></aw-removal-equipment>\r\n                      </div>\r\n                      <div class="section">\r\n                        <aw-installation-equipment\r\n                          *ngIf="\r\n                            asset.familyVariantCode &&\r\n                            assetStructureSelection &&\r\n                            assetStructureSelection.data.installedStockMvtData &&\r\n                            equipmentCode &&\r\n                            workPackage\r\n                          "\r\n                          [(assetStructureSelection)]="assetStructureSelection.data"\r\n                          [equipmentCode]="equipmentCode"\r\n                          [familyVariantCode]="asset.familyVariantCode"\r\n                          [workPackage]="workPackage"\r\n                          [isGroundEquipment]="isGroundEquipment"\r\n                        ></aw-installation-equipment>\r\n                      </div>\r\n\r\n                      <div *ngIf="showLLPPotentialSection" class="section">\r\n                        <h4 class="section-title">\r\n                          {{ getComponentName() + ".llpPotential" | translate }} ({{\r\n                            llpPotentialTable ? llpPotentialTable.length : 0\r\n                          }})\r\n                        </h4>\r\n\r\n                        <div class="section-content">\r\n                          <p-table\r\n                            [resizableColumns]="true"\r\n                            #ptableLLP\r\n                            class="aw-table2"\r\n                            [columns]="llpPotentialTableCols"\r\n                            [value]="llpPotentialTable"\r\n                            [scrollable]="true"\r\n                          >\r\n                            <ng-template pTemplate="emptymessage">\r\n                              <span *ngIf="!llpTableLoading"> &nbsp;</span>\r\n\r\n                              <div *ngIf="llpTableLoading" class="aw-table-loading-indicator">\r\n                                <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                                <div class="lds-hourglass"></div>\r\n                              </div>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate="colgroup" let-columns>\r\n                              <colgroup>\r\n                                <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                              </colgroup>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate="header" let-columns>\r\n                              <tr>\r\n                                <th\r\n                                  pResizableColumn\r\n                                  *ngFor="let col of columns"\r\n                                  [ngStyle]="{ \'text-align\': col.alignment }"\r\n                                >\r\n                                  {{ componentData.componentId + "." + col.field | translate }}\r\n                                </th>\r\n                              </tr>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                              <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                                <td\r\n                                  *ngFor="let col of columns"\r\n                                  [ngStyle]="{ \'text-align\': col.alignment }"\r\n                                  [ngSwitch]="col.field"\r\n                                >\r\n                                  <span class="control-result" *ngSwitchCase="\'control\'">\r\n                                    <span\r\n                                      *ngIf="rowData[col.field] === \'ok\'"\r\n                                      class="configuration-control-alert configuration-control-alert--ok"\r\n                                      >{{ componentData.componentId + "." + rowData[col.field] | translate }}</span\r\n                                    >\r\n                                    <span\r\n                                      *ngIf="rowData[col.field] === \'nok\'"\r\n                                      class="configuration-control-alert configuration-control-alert--nok"\r\n                                      >{{ componentData.componentId + "." + rowData[col.field] | translate }}</span\r\n                                    >\r\n                                    <span\r\n                                      *ngIf="rowData[col.field] === \'warning\'"\r\n                                      class="configuration-control-alert configuration-control-alert--warning"\r\n                                      >{{ componentData.componentId + "." + rowData[col.field] | translate }}</span\r\n                                    >\r\n                                  </span>\r\n                                  <span *ngSwitchDefault>\r\n                                    {{ rowData[col.field] }}\r\n                                  </span>\r\n                                </td>\r\n                              </tr>\r\n                            </ng-template>\r\n                          </p-table>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div *ngIf="showAirworthinessDocumentSection" class="section">\r\n                        <h4 class="section-title">\r\n                          {{ getComponentName() + ".airworthinessDocuments" | translate }} ({{\r\n                            airworthinessDocumentsTable ? airworthinessDocumentsTable.length : 0\r\n                          }})\r\n                        </h4>\r\n\r\n                        <div class="section-content">\r\n                          <p-table\r\n                            [resizableColumns]="true"\r\n                            #ptableAW\r\n                            class="aw-table2"\r\n                            [columns]="airworthinessDocumentsTableCols"\r\n                            [value]="airworthinessDocumentsTable"\r\n                            [scrollable]="true"\r\n                            dataKey="_id"\r\n                          >\r\n                            <ng-template pTemplate="emptymessage">\r\n                              <span *ngIf="!airworthinessDocumentsTableLoading"> &nbsp;</span>\r\n\r\n                              <div *ngIf="airworthinessDocumentsTableLoading" class="aw-table-loading-indicator">\r\n                                <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                                <div class="lds-hourglass"></div>\r\n                              </div>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate="colgroup" let-columns>\r\n                              <colgroup>\r\n                                <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                                <col class="row-expand-wrapper" />\r\n                              </colgroup>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate="header" let-columns>\r\n                              <tr>\r\n                                <th\r\n                                  pResizableColumn\r\n                                  *ngFor="let col of columns"\r\n                                  [ngStyle]="{ \'text-align\': col.alignment }"\r\n                                >\r\n                                  {{ componentData.componentId + "." + col.field | translate }}\r\n                                </th>\r\n\r\n                                <th class="row-expand-wrapper"></th>\r\n                              </tr>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                              <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                                <td\r\n                                  *ngFor="let col of columns"\r\n                                  [ngStyle]="{ \'text-align\': col.alignment }"\r\n                                  [ngSwitch]="col.field"\r\n                                >\r\n                                  <span class="control-result" *ngSwitchCase="\'control\'">\r\n                                    <span\r\n                                      *ngIf="rowData[col.field] === \'POSITIVE\'"\r\n                                      class="configuration-control-alert configuration-control-alert--ok"\r\n                                      >{{ componentData.componentId + ".ok" | translate }}</span\r\n                                    >\r\n                                    <span\r\n                                      *ngIf="rowData[col.field] === \'NEGATIVE\'"\r\n                                      class="configuration-control-alert configuration-control-alert--nok"\r\n                                      >{{ componentData.componentId + ".nok" | translate }}</span\r\n                                    >\r\n                                    <!-- <span\r\n                                      *ngIf="rowData[col.field] === \'warning\'"\r\n                                      class="configuration-control-alert configuration-control-alert--warning"\r\n                                      >{{ componentData.componentId + "." + rowData[col.field] | translate }}</span\r\n                                    > -->\r\n                                  </span>\r\n\r\n                                  <span *ngSwitchCase="\'document\'">\r\n                                    <a (click)="openEvolution(rowData)">{{ rowData[col.field] }}</a>\r\n                                  </span>\r\n\r\n                                  <span *ngSwitchDefault>\r\n                                    {{ rowData[col.field] }}\r\n                                  </span>\r\n                                </td>\r\n\r\n                                <td class="row-expand-wrapper" [pRowToggler]="rowData">\r\n                                  <i\r\n                                    class="fa fa-fw aw-icon aw-icon-with-border"\r\n                                    [ngClass]="{\r\n                                      \'fa-minus\': rowData.expanded,\r\n                                      \'fa-plus\': !rowData.expanded,\r\n                                      \'visibility--hidden\': rowData.control === \'POSITIVE\'\r\n                                    }"\r\n                                    aria-hidden="true"\r\n                                    pTooltip="{{ \'global.showTableRowDetails\' | translate }}"\r\n                                    tooltipPosition="left"\r\n                                    (click)="toggleADTableRowDetailsVisibility(rowData)"\r\n                                  ></i>\r\n                                </td>\r\n                              </tr>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate="rowexpansion" let-rowData let-columns="columns">\r\n                              <tr class="row-expanded">\r\n                                <td [attr.colspan]="columns.length + 1">\r\n                                  <span *ngIf="rowData.message === \'D\' || rowData.message === \'T\'; else otherMessage">{{\r\n                                    getTranslatedText(rowData.message)\r\n                                  }}</span>\r\n                                  <ng-template>\r\n                                    <span #otherMessage>\r\n                                      {{ rowData.message }}\r\n                                    </span>\r\n                                  </ng-template>\r\n                                </td>\r\n                              </tr>\r\n                            </ng-template>\r\n                          </p-table>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <p-overlayPanel\r\n    #opFilters\r\n    class="aw-overlay"\r\n    (onShow)="assetStructureFiltersVisible = true"\r\n    (onHide)="assetStructureFiltersVisible = false"\r\n  >\r\n    <div class="row">\r\n      <div class="form-group flex--auto">\r\n        <label class="form-label"> &nbsp; </label>\r\n\r\n        <div class="form-control aw-selectbutton-wrapper">\r\n          <p-selectButton\r\n            [(ngModel)]="selectedControlList"\r\n            [options]="searchControlList"\r\n            multiple="multiple"\r\n          ></p-selectButton>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row action-list">\r\n      <button type="button" mat-raised-button (click)="resetAssetStructureCriteria()">\r\n        {{ getComponentName() + ".reset" | translate }}\r\n      </button>\r\n\r\n      <button\r\n        type="button"\r\n        mat-raised-button\r\n        (click)="opFilters.hide(); assetStructureFiltersVisible = false; filterAssetStrucreWithCriteria()"\r\n      >\r\n        {{ getComponentName() + ".filter" | translate }}\r\n      </button>\r\n    </div>\r\n  </p-overlayPanel>\r\n\r\n  <aw-dialog-search-equipment\r\n    *ngIf="dialogSearchAssetVisible"\r\n    [(display)]="dialogSearchAssetVisible"\r\n    (onSelected)="onSelectedAsset($event)"\r\n  ></aw-dialog-search-equipment>\r\n\r\n  <aw-dialog-help *ngIf="showHelpDialog" [(display)]="showHelpDialog"></aw-dialog-help>\r\n\r\n  <aw-dialog-work-order-creation\r\n    *ngIf="showInstallByWorkPackageDialog"\r\n    [(display)]="showInstallByWorkPackageDialog"\r\n    [(mvtWay)]="mvtWay"\r\n    [(woPn)]="woPn"\r\n    [(woSn)]="woSn"\r\n    [(woAssetDesignation)]="woAssetDesignation"\r\n    [(woAssetFunction)]="woAssetFunction"\r\n    [(woFunctionCode)]="woFunctionCode"\r\n    [(woItemPk)]="woItemPk"\r\n    [(topAssetDTOId)]="topAssetDTOId"\r\n    [displayDescription]="true"\r\n    [displayOperation]="true"\r\n    [displayStatus]="false"\r\n    [displayWorkCenter]="false"\r\n    (onValidated)="onCreateWorkPackage($event)"\r\n  ></aw-dialog-work-order-creation>\r\n</div>\r\n\r\n<ng-template #equipmentlink let-equipment="equipment">\r\n  <a (click)="openSelectedAsset(equipment)" class="asset">\r\n    <i *ngIf="isAssetAircraft(equipment) || isAssetEngine(equipment)">\r\n      <b>{{ equipment.familyVariantCode }}</b\r\n      >&nbsp;|\r\n    </i>\r\n    <i *ngIf="equipment.pnCode && !isAssetEngine(equipment)"\r\n      >P/N&nbsp;\r\n      <b>{{ equipment.pnCode }}</b>\r\n      &nbsp;&nbsp;|&nbsp;&nbsp;\r\n    </i>\r\n    <i *ngIf="isAssetAircraft(equipment)"\r\n      >MSN&nbsp;\r\n      <b>{{ equipment.sn }}</b>\r\n      <i *ngIf="equipment.registration"\r\n        >&nbsp;|&nbsp;\r\n        <b>{{ equipment.registration }}</b>\r\n      </i>\r\n    </i>\r\n    <i *ngIf="isAssetEngine(equipment)"\r\n      >ESN&nbsp;\r\n      <b>{{ equipment.sn }}</b>\r\n    </i>\r\n    <i *ngIf="!isAssetAircraft(equipment) && !isAssetEngine(equipment)"\r\n      >S/N&nbsp;\r\n      <b>{{ equipment.sn }}</b>\r\n    </i>\r\n  </a>\r\n</ng-template>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/configuration-control.component.scss':
      /*!*********************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/configuration-control.component.scss ***!
  \*********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .grid-cell-configuration-control .list-with-details .details,\n:host .grid-cell-configuration-control .list-with-details .list {\n  max-height: 50rem; }\n\n:host .grid-cell-configuration-control .list-with-details .details {\n  flex-grow: 1; }\n\n:host .grid-cell-configuration-control .list-with-details .details .configuration-control-node-action-list {\n    justify-content: flex-end; }\n\n:host .grid-cell-configuration-control .list-with-details .details .configuration-control-node-action-list > button {\n      margin-right: 8px; }\n\n:host .grid-cell-configuration-control .list-with-details .details .configuration-control-node-action-list > button:last-of-type {\n        margin-right: 0; }\n\n:host .grid-cell-configuration-control .list-with-details .details .configuration-control-node-image > img {\n    max-width: 100%;\n    min-width: 100%; }\n\n:host .grid-cell-configuration-control .list-with-details .list {\n  max-width: 40%;\n  min-width: 40%; }\n\n:host .grid-cell-summary .table-summary-wrapper {\n  margin: 0 auto;\n  max-width: 90%; }\n\n:host .issue-asset,\n:host .issue-asset-validated,\n:host .receipt-asset,\n:host .receipt-asset-validated {\n  padding: 2px; }\n\n:host .issue-asset {\n  background-color: #92cf94; }\n\n:host .issue-asset-validated {\n  border: 1px solid #92cf94; }\n\n:host .receipt-asset {\n  background-color: #fbc3bf; }\n\n:host .receipt-asset-validated {\n  border: 1px solid #fbc3bf; }\n\n:host .fl-node {\n  font-weight: 600; }\n\n:host .function-code-node {\n  font-weight: 600; }\n\n:host .item-node {\n  font-weight: 600; }\n\n:host .node {\n  margin-left: 2px; }\n\n:host .alert {\n  display: inline-block;\n  max-width: 7rem;\n  text-transform: uppercase;\n  width: 100%; }\n\n:host .alert.alert--ok {\n    background-color: #4caf50; }\n\n:host .alert.alert--warning {\n    background-color: #ffc107; }\n\n:host .alert.alert--nok {\n    background-color: #f6685e; }\n\n:host .alert.alert--not-mandatory {\n    font-weight: 600;\n    color: #c8d4d6; }\n\n:host .alert.alert--mandatory {\n    font-weight: 600;\n    color: #f6685e; }\n\n::ng-deep .grid-cell-configuration-control .list .asset-check-wrapper {\n  max-width: 5rem;\n  min-width: 5rem; }\n\n::ng-deep .grid-cell-configuration-control .list .asset-check-wrapper .asset-check {\n  color: initial;\n  font-style: initial; }\n\n::ng-deep .grid-cell-configuration-control .list .asset-type {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  font-size: 1.25rem;\n  margin: 0 8px; }\n\n::ng-deep .grid-cell-configuration-control .list .asset-data {\n  display: flex;\n  flex-direction: column; }\n\n::ng-deep .grid-cell-configuration-control .list .structure {\n  display: inline-block;\n  font-weight: 600; }\n\n::ng-deep .grid-cell-configuration-control .list .asset {\n  font-style: italic; }\n\n::ng-deep .aw-overlay .action-list {\n  justify-content: flex-end; }\n\n::ng-deep .aw-overlay .action-list .aw-btn {\n    margin-left: 8px; }\n\n::ng-deep .aw-overlay .action-list .aw-btn:first-of-type {\n      margin-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb25maWd1cmF0aW9uLWNvbnRyb2wvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXG1haW50ZW5hbmNlXFxjb25maWd1cmF0aW9uLWNvbnRyb2xcXGNvbmZpZ3VyYXRpb24tY29udHJvbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb25maWd1cmF0aW9uLWNvbnRyb2wvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb25maWd1cmF0aW9uLWNvbnRyb2wvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFLUSxpQkFBaUIsRUFBQTs7QUFMekI7RUFTUSxZQUFZLEVBQUE7O0FBVHBCO0lBWVUseUJBQXlCLEVBQUE7O0FBWm5DO01BZVksaUJDMEJNLEVBQUE7O0FEekNsQjtRQWtCYyxlQUFlLEVBQUE7O0FBbEI3QjtJQXlCWSxlQUFlO0lBQ2YsZUFBZSxFQUFBOztBQTFCM0I7RUFnQ1EsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFqQ3RCO0VBd0NNLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBekNwQjs7OztFQWlESSxZQUFZLEVBQUE7O0FBakRoQjtFQXFESSx5QkFBNkMsRUFBQTs7QUFyRGpEO0VBeURJLHlCQUE2QyxFQUFBOztBQXpEakQ7RUE2REkseUJBQTJDLEVBQUE7O0FBN0QvQztFQWlFSSx5QkFBMkMsRUFBQTs7QUFqRS9DO0VBcUVJLGdCQUFnQixFQUFBOztBQXJFcEI7RUF5RUksZ0JBQWdCLEVBQUE7O0FBekVwQjtFQTZFSSxnQkFBZ0IsRUFBQTs7QUE3RXBCO0VBaUZJLGdCQUFnQixFQUFBOztBQWpGcEI7RUFxRkkscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQXhGZjtJQTJGTSx5QkN6RWdCLEVBQUE7O0FEbEJ0QjtJQStGTSx5QkM1RVUsRUFBQTs7QURuQmhCO0lBbUdNLHlCQzlFYyxFQUFBOztBRHJCcEI7SUF1R00sZ0JBQWdCO0lBQ2hCLGNDaEZTLEVBQUE7O0FEeEJmO0lBNEdNLGdCQUFnQjtJQUNoQixjQ3hGYyxFQUFBOztBRDZGcEI7RUFDRSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTs7QUFHckI7RUV4R0UsYUFBYTtFQUNiLG1CQUFtQjtFRjBHbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQ3hGZ0IsRUFBQTs7QUQyRmxCO0VFckhFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUZ3SHhCO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHlCQUF5QixFQUFBOztBQUQzQjtJQUlJLGdCQzVHYyxFQUFBOztBRHdHbEI7TUFPTSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL2NvbmZpZ3VyYXRpb24tY29udHJvbC9jb25maWd1cmF0aW9uLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbjpob3N0IHtcclxuICAuZ3JpZC1jZWxsLWNvbmZpZ3VyYXRpb24tY29udHJvbCB7XHJcbiAgICAubGlzdC13aXRoLWRldGFpbHMge1xyXG4gICAgICAuZGV0YWlscyxcclxuICAgICAgLmxpc3Qge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgICAgICAuY29uZmlndXJhdGlvbi1jb250cm9sLW5vZGUtYWN0aW9uLWxpc3Qge1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgICAmID4gYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbmZpZ3VyYXRpb24tY29udHJvbC1ub2RlLWltYWdlIHtcclxuICAgICAgICAgICYgPiBpbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5saXN0IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDQwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmdyaWQtY2VsbC1zdW1tYXJ5IHtcclxuICAgIC50YWJsZS1zdW1tYXJ5LXdyYXBwZXIge1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaXNzdWUtYXNzZXQsXHJcbiAgLmlzc3VlLWFzc2V0LXZhbGlkYXRlZCxcclxuICAucmVjZWlwdC1hc3NldCxcclxuICAucmVjZWlwdC1hc3NldC12YWxpZGF0ZWQge1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gIH1cclxuXHJcbiAgLmlzc3VlLWFzc2V0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGdyZWVuLWxpZ2h0MSwgMjAlKTtcclxuICB9XHJcblxyXG4gIC5pc3N1ZS1hc3NldC12YWxpZGF0ZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRlbigkZ3JlZW4tbGlnaHQxLCAyMCUpO1xyXG4gIH1cclxuXHJcbiAgLnJlY2VpcHQtYXNzZXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcmVkLWxpZ2h0MSwgMjAlKTtcclxuICB9XHJcblxyXG4gIC5yZWNlaXB0LWFzc2V0LXZhbGlkYXRlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGVuKCRyZWQtbGlnaHQxLCAyMCUpO1xyXG4gIH1cclxuXHJcbiAgLmZsLW5vZGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIC5mdW5jdGlvbi1jb2RlLW5vZGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIC5pdGVtLW5vZGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIC5ub2RlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgfVxyXG5cclxuICAuYWxlcnQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiA3cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICYuYWxlcnQtLW9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1ub3QtbWFuZGF0b3J5IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICRncmV5MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1tYW5kYXRvcnkge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmdyaWQtY2VsbC1jb25maWd1cmF0aW9uLWNvbnRyb2wgLmxpc3QgLmFzc2V0LWNoZWNrLXdyYXBwZXIge1xyXG4gIG1heC13aWR0aDogNXJlbTtcclxuICBtaW4td2lkdGg6IDVyZW07XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZ3JpZC1jZWxsLWNvbmZpZ3VyYXRpb24tY29udHJvbCAubGlzdCAuYXNzZXQtY2hlY2std3JhcHBlciAuYXNzZXQtY2hlY2sge1xyXG4gIGNvbG9yOiBpbml0aWFsO1xyXG4gIGZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZ3JpZC1jZWxsLWNvbmZpZ3VyYXRpb24tY29udHJvbCAubGlzdCAuYXNzZXQtdHlwZSB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIG1hcmdpbjogMCAkbWFyZ2luLXZhbHVlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmdyaWQtY2VsbC1jb25maWd1cmF0aW9uLWNvbnRyb2wgLmxpc3QgLmFzc2V0LWRhdGEge1xyXG4gIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZ3JpZC1jZWxsLWNvbmZpZ3VyYXRpb24tY29udHJvbCAubGlzdCAuc3RydWN0dXJlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5ncmlkLWNlbGwtY29uZmlndXJhdGlvbi1jb250cm9sIC5saXN0IC5hc3NldCB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmF3LW92ZXJsYXkgLmFjdGlvbi1saXN0IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAuYXctYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBVdGlscyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gYnV0dG9uLWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCAkY29sb3IsICRib3JkZXItY29sb3I6IG51bGwpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICBjb2xvcjogJGNvbG9yO1xyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyLFxyXG4gICY6bm90KDpkaXNhYmxlZCkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIGJvcmRlci1jb2xvcjogaWYoJGJvcmRlci1jb2xvciA9PSBudWxsLCAkY29sb3IsICRib3JkZXItY29sb3IpO1xyXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgtY29sdW1uKCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1peGluIGZsZXgtcm93KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuQG1peGluIGlucHV0KCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcblxyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1kaXNhYmxlZCgpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZm9jdXMoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1ob3ZlcigpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlYXJjaC1jcml0ZXJpYS1jb250YWluZXIge1xyXG4gIC5hZHZhbmNlZC1jcml0ZXJpYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWNyaXRlcmlhLWZvb3RlciB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC8gMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgLmF3LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNCk7XHJcblxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgICYucmVxdWlyZWQge1xyXG4gICAgICBAaW5jbHVkZSBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCgpO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWxlcnQge1xyXG4gICAgICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAmID4gYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1vdmVyZmxvdy1oaWRkZW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHcmlkIGZvcm0gY29udHJvbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViTWVkaXVtXCI7XHJcblxyXG4gICYgPiBpbnB1dCArIHAtbWVzc2FnZSA+IC51aS1tZXNzYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6Zm9jdXMsXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYigyNTUsIDI1NSwgMjU1KSA2MCUsIHRyYW5zcGFyZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICAuYXctaWNvbiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuLFxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG5cclxuICAgICAgJi5hdy1jYWxlbmRhciAudWktaW5wdXR0ZXh0LFxyXG4gICAgICAmLmF3LWRyb3Bkb3duIC51aS1kcm9wZG93bixcclxuICAgICAgJi5hdy1pbnB1dCxcclxuICAgICAgJi5hdy10ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctY2FsZW5kYXIge1xyXG4gICAgICAvLyBGSVhNRTogZml4IGFuIFVJIGlzc3VlIG9uIFByaW1lTkcgY2FsZW5kYXIgY29tcG9uZW50OyB0byByZW1vdmUgd2hlbiBpc3N1ZSB3aWxsIGJlIGZpeGVkIHVwc3RyZWFtXHJcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAuYXctaWNvbjpub3QoLnJlYWQtb25seS1saW5rKSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IC8vIG5vbmVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wtZGF0YSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gICAgICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLW5pbXAsXHJcbiAgICAuYnRuLWV4dGVybmFsLWxpbmstd3JhcHBlcixcclxuICAgIC5idG4tY2xlYXItd3JhcHBlcixcclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlcixcclxuICAgIC5idG4tc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIge1xyXG4gICAgICAuYXctZmlsZXVwbG9hZCB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudWktYnV0dG9uIHtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZTkzNFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLWNsZWFyIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLXNlYXJjaCB7XHJcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtcmFkaW9idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAmID4gLmF3LXJhZGlvYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDIgKiAjeyRtYXJnaW4tdmFsdWV9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1nZW5lcmljIHtcclxuICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuXHJcbiAgJiA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuYWxlcnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jYWxlbmRhciB7XHJcbiAgJi51aS1pbnB1dHdyYXBwZXItZm9jdXMge1xyXG4gICAgLnVpLWNhbGVuZGFyIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNoZWNrYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkY2hlY2tib3gtaGVpZ2h0O1xyXG4gIHdpZHRoOiAkY2hlY2tib3gtaGVpZ2h0O1xyXG5cclxuICAudWktY2hrYm94IHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1jaGtib3gtYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZHJvcGRvd24ge1xyXG4gIC51aS1kcm9wZG93biB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1mb2N1cyB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbixcclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24ge1xyXG4gICAgICByaWdodDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3ctaGlkZGVuKCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMiAqIDEuNzVyZW0pO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5maXhlZC13aWR0aCAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZpbGV1cGxvYWQge1xyXG4gIEBleHRlbmQgLmF3LWJ0bjtcclxuXHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLnVpLWZpbGV1cGxvYWQtY2hvb3NlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMCAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudWktYnV0dG9uLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWlucHV0KCkge1xyXG4gIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmZvY3VzIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZXh0YXJlYSB7XHJcbiAgQGluY2x1ZGUgZ3JpZC1pbnB1dCgpO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4taGVpZ2h0OiAkZm9ybS1jb250cm9sLWhlaWdodDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1yYWRpb2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuICB3aWR0aDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuXHJcbiAgLnVpLXJhZGlvYnV0dG9uIHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1yYWRpb2J1dHRvbi1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cclxuICAgICAgICAudWktcmFkaW9idXR0b24taWNvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGNhbGVuZGFyLXBhbmVsIHtcclxuICAudWktZGF0ZXBpY2tlcjpub3QoLnVpLWRhdGVwaWNrZXItaW5saW5lKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkcm9wZG93bi1wYW5lbCB7XHJcbiAgLnVpLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHJcbiAgICAudWktZHJvcGRvd24taXRlbXMtd3JhcHBlciAudWktZHJvcGRvd24tbGlzdCB7XHJcbiAgICAgIC51aS1kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi51aS1zdGF0ZS1oaWdobGlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/configuration-control.component.ts':
      /*!*******************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/configuration-control.component.ts ***!
  \*******************************************************************************************/
      /*! exports provided: ConfigurationControlComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ConfigurationControlComponent',
          function() {
            return ConfigurationControlComponent;
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
          /*! ../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bidm_attribute_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/constants/bidm-attribute-constants */ './src/app/shared/constants/bidm-attribute-constants.ts'
        );
        /* harmony import */ var _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/constants/bidt-stock-mvt-constants */ './src/app/shared/constants/bidt-stock-mvt-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/constants/control-config-constants */ './src/app/shared/constants/control-config-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_bire_item_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../shared/utils/bire-item-utils */ './src/app/shared/utils/bire-item-utils.ts'
        );
        /* harmony import */ var _shared_utils_boolean_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../shared/utils/boolean-utils */ './src/app/shared/utils/boolean-utils.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _configuration_control_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./configuration-control.service */ './src/app/main/maintenance/configuration-control/configuration-control.service.ts'
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

        var SearchStockMvtStatus;
        (function(SearchStockMvtStatus) {
          SearchStockMvtStatus[(SearchStockMvtStatus['ALL'] = 1)] = 'ALL';
          SearchStockMvtStatus[(SearchStockMvtStatus['INSTALLATIONS'] = 2)] = 'INSTALLATIONS';
          SearchStockMvtStatus[(SearchStockMvtStatus['REMOVALS'] = 3)] = 'REMOVALS';
        })(SearchStockMvtStatus || (SearchStockMvtStatus = {}));
        var ConfigurationControlComponent = /** @class */ (function(_super) {
          __extends(ConfigurationControlComponent, _super);
          // *****************************************************************************
          function ConfigurationControlComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            configurationControlService,
            propertiesService,
            translateService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.sessionService = sessionService;
            _this.configurationControlService = configurationControlService;
            _this.propertiesService = propertiesService;
            _this.translateService = translateService;
            _this.component = ConfigurationControlComponent_1;
            _this.controlConfigConstants =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants'];
            _this.awPropertiesConstants =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants'];
            _this.init();
            _this.setTableCols();
            _this.onBeforeLoadOnce();
            _this.onBeforeLoad();
            return _this;
          }
          ConfigurationControlComponent_1 = ConfigurationControlComponent;
          ConfigurationControlComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
              .MAI_CONFIGURATION_CONTROL;
          };
          ConfigurationControlComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.updateOpenMode(this.componentData.openMode);
            if (!this.componentData.objectId) {
              this.messageService.showErrorMessage('global.errorOnNavigate');
            } else {
              var inputData = this.serializationService.deserialize(this.componentData.objectId);
              this.equipmentCode = inputData.equipmentCodeList[0];
              this.workPackageCode = inputData.workPackage;
              this.onLoad();
            }
          };
          ConfigurationControlComponent.prototype.setNavigationLinkList = function() {
            var _this = this;
            var airworthinessStatusKey = this.getTranslateKey('airworthinessStatus');
            var assetAtDateKey = this.getTranslateKey('assetAtDate');
            var assetReviewKey = this.getTranslateKey('assetReview');
            var maintenancePlanningKey = !this.isGroundEquipment
              ? this.getTranslateKey('maintenancePlanning')
              : this.getTranslateKey('groundMaintenancePlanning');
            this.translateService
              .get([airworthinessStatusKey, assetAtDateKey, assetReviewKey, maintenancePlanningKey])
              .subscribe(function(results) {
                var airworthinessStatusLabel = results ? results[airworthinessStatusKey] : 'Airworthiness Status';
                var assetAtDateLabel = results ? results[assetAtDateKey] : 'Asset at Date';
                var assetReviewLabel = results ? results[assetReviewKey] : 'Asset Review';
                var maintenancePlanningLabel = results ? results[maintenancePlanningKey] : 'Maintenance Planning';
                if (!_this.isGroundEquipment) {
                  _this.navigationLinkList = [
                    {
                      label: airworthinessStatusLabel,
                      command: function() {
                        _this.openAirworthinessStatus();
                      }
                    },
                    {
                      label: maintenancePlanningLabel,
                      command: function() {
                        _this.openMaintenancePlanning();
                      }
                    },
                    {
                      label: assetReviewLabel,
                      command: function() {
                        _this.openAssetReview();
                      }
                    },
                    {
                      label: assetAtDateLabel,
                      command: function() {
                        _this.openAssetAtDate();
                      }
                    }
                  ];
                } else {
                  _this.navigationLinkList = [
                    {
                      label: maintenancePlanningLabel,
                      command: function() {
                        _this.openGroundMaintenancePlanning();
                      }
                    }
                  ];
                }
              });
          };
          // ****************************************************************************
          ConfigurationControlComponent.prototype.init = function() {
            this.showAirworthinessDocumentSection = false;
            this.airworthinessDocumentsTable = [];
            this.airworthinessDocumentsTableCols = [];
            this.airworthinessDocumentsTableLoading = false;
            this.showLLPPotentialSection = false;
            this.llpPotentialTable = [];
            this.llpPotentialTableCols = [];
            this.llpTableLoading = false;
          };
          ConfigurationControlComponent.prototype.onBeforeLoad = function() {
            this.aircraftStatusList = [];
            this.assetStructure = [];
            this.assetStructureFilterInstallationVisible = false;
            this.assetStructureFilterRemovalVisible = false;
            this.assetStructureFiltersVisible = false;
            this.assetStructureLoading = false;
            this.assetStructureSelection = undefined;
            this.assetStructureSrc = [];
            this.componentContext = '';
            this.controlTable = [];
            this.currentWorkOrder = undefined;
            this.currentWorkOrderCode = undefined;
            this.currentWorkOrderDescription = undefined;
            this.globalStatus =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__[
                'ControlConfigConstants'
              ].ICON_RED;
            this.workPackageAttributeList = [];
            this.workPackageConfirmedInstallations = 0;
            this.workPackageConfirmedRemovals = 0;
            this.workPackageInstallations = 0;
            this.workPackageMovementsUpdated = false;
            this.workPackageMovementsVisible = false;
            this.workPackageRemovals = 0;
            this.dialogSearchAssetVisible = false;
            this.showLoaderGenerateFormEASA1 = false;
            this.showLoaderGenerateFormFAA8130 = false;
            this.initAssetStructureGlobalFilter();
            this.loadAircraftStatusList();
          };
          ConfigurationControlComponent.prototype.onLoad = function() {
            this.loadAsset();
            this.initDisplayWithKardex();
            this.loadWorkPackage();
            this.setDefaultSearchControlList();
            this.setDefaultSearchStockMvtStatusList();
          };
          ConfigurationControlComponent.prototype.onReload = function() {
            this.onBeforeLoad();
            this.onLoad();
          };
          ConfigurationControlComponent.prototype.onBeforeLoadOnce = function() {
            this.setAssetStructureGlobalFilter();
            this.setControlTableColList();
            this.setSearchControlList();
            this.setSearchStockMvtStatusList();
            this.setSummaryTableColList();
          };
          Object.defineProperty(ConfigurationControlComponent.prototype, 'isTopAssetAircraft', {
            // ****************************************************************************
            get: function() {
              return (
                !!this.asset &&
                !!this.asset.equipmentFunction &&
                this.asset.equipmentFunction ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                    .ITEM_FAMILY_CODE_AIRCRAFT_KEY
              );
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(ConfigurationControlComponent.prototype, 'isTopAssetEngine', {
            get: function() {
              return (
                !!this.asset &&
                !!this.asset.equipmentFunction &&
                this.asset.equipmentFunction ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                    .ITEM_FAMILY_CODE_ENGINE_KEY
              );
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(ConfigurationControlComponent.prototype, 'isTopAssetEquipment', {
            get: function() {
              return (
                !!this.asset &&
                !!this.asset.equipmentFunction &&
                !this.isTopAssetAircraft &&
                !this.isTopAssetEngine &&
                !this.isGroundEquipment
              );
            },
            enumerable: true,
            configurable: true
          });
          ConfigurationControlComponent.prototype.cancelAllWorkPackageMovement = function() {
            var _this = this;
            var attributeToRemove = this.getAssetStructureUpdatedAttribute();
            if (attributeToRemove && attributeToRemove.id) {
              this.configurationControlService.removeBidmProjectAttribute(attributeToRemove.id).subscribe(function() {
                _this.workPackageAttributeList = _this.workPackageAttributeList.filter(function(attribute) {
                  return attribute.id !== attributeToRemove.id;
                });
                _this.workPackageMovementsUpdated = false;
              });
            }
          };
          ConfigurationControlComponent.prototype.confirmAllWorkPackageMovement = function() {
            var _this = this;
            var input = {
              projectId: this.workPackage.projectId,
              attributeName:
                _shared_constants_bidm_attribute_constants__WEBPACK_IMPORTED_MODULE_6__['BidmAttributeConstants']
                  .IS_ASSET_STRUCTURE_UPDATED,
              attributeValue: 'true'
            };
            this.configurationControlService.createBidmProjectAttribute(input).subscribe(function(result) {
              _this.workPackageAttributeList = _this.workPackageAttributeList || [];
              _this.workPackageAttributeList.push(result);
              _this.workPackageMovementsUpdated = true;
            });
          };
          ConfigurationControlComponent.prototype.filterAssetStrucreWithCriteria = function() {
            this.filterAssetStructure();
          };
          ConfigurationControlComponent.prototype.filterAssetStructureWithGlobalFilter = function(searchTextValue) {
            this.searchAssetStructureGlobalFilterChanged.next(searchTextValue);
          };
          // TODO: replace 'RemoveAssetComponent' by a constant
          ConfigurationControlComponent.prototype.installEquipment = function() {
            var asset = this.assetStructureSelection.data;
            if (asset.bidoEquipment && asset.bidoEquipment.equipmentCode) {
              this.openInstallEquipmentPage(asset.bidoEquipment.equipmentCode);
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('erroOnOpenRemoval'));
            }
          };
          ConfigurationControlComponent.prototype.openInstallEquipmentPage = function(equipmentCode) {
            var objectId = {
              superiorAssetCode: equipmentCode,
              date: new Date()
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Write,
              componentId: 'InstallAssetComponent',
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ConfigurationControlComponent.prototype.installEquipmentFromWP = function() {
            this.woPn = undefined;
            this.woSn = undefined;
            this.woAssetDesignation = undefined;
            this.woAssetFunction = undefined;
            this.mvtWay =
              _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_7__[
                'BidtStockMvtConstants'
              ].MVT_WAY_DEBIT;
            this.installRemoveFromWP();
          };
          ConfigurationControlComponent.prototype.removeEquipmentFromWP = function() {
            this.woPn = undefined;
            this.woSn = undefined;
            this.woAssetDesignation = undefined;
            this.woAssetFunction = undefined;
            this.mvtWay =
              _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_7__[
                'BidtStockMvtConstants'
              ].MVT_WAY_CREDIT;
            this.installRemoveFromWP();
          };
          ConfigurationControlComponent.prototype.removeEquipmentFromRegularization = function() {
            if (this.assetStructureSelection && this.assetStructureSelection.data) {
              var data = this.assetStructureSelection.data;
              if (data.uniqueBidoEquipmentChild && data.uniqueBidoEquipmentChild.equipmentCode) {
                this.openRemoveEquipmentPage(data.uniqueBidoEquipmentChild.equipmentCode);
              } else {
                this.messageService.showErrorMessage(this.getTranslateKey('erroOnOpenRemoval'));
              }
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('erroOnOpenRemoval'));
            }
          };
          ConfigurationControlComponent.prototype.installEquipmentFromRegularization = function() {
            if (this.assetStructureSelection && this.assetStructureSelection.data) {
              var data = this.assetStructureSelection.data;
              if (data.uniqueBidoEquipmentChild && data.uniqueBidoEquipmentChild.equipmentCode) {
                this.openInstallEquipmentPage(data.uniqueBidoEquipmentChild.equipmentCode);
              } else {
                this.messageService.showErrorMessage(this.getTranslateKey('erroOnOpenRemoval'));
              }
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('erroOnOpenRemoval'));
            }
          };
          ConfigurationControlComponent.prototype.installRemoveFromWP = function() {
            if (this.assetStructureSelection) {
              var data = this.assetStructureSelection.data;
              this.showInstallByWorkPackageDialog = true;
              if (
                data.uniqueBidoEquipmentChild &&
                this.mvtWay ===
                  _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_7__['BidtStockMvtConstants']
                    .MVT_WAY_CREDIT
              ) {
                this.woPn = data.uniqueBidoEquipmentChild.pnCode;
                this.woSn = data.uniqueBidoEquipmentChild.sn;
                this.woAssetFunction = data.uniqueBidoEquipmentChild.equipmentFunction;
                this.woAssetDesignation = data.uniqueBidoEquipmentChild.equipmentDesignation;
              }
              this.topAssetDTOId = { equipmentCode: this.asset.equipmentCode };
              if (data.bireItem) {
                this.woItemPk = {
                  familyCode: data.bireItem.familyCode,
                  chapter: data.bireItem.chapter,
                  subject: data.bireItem.subject,
                  variantCode: data.bireItem.variantCode,
                  section: data.bireItem.section,
                  sheet: data.bireItem.sheet,
                  marks: data.bireItem.marks,
                  structureType: data.bireItem.structureType
                };
              } else if (data.functionCode) {
                this.woFunctionCode = data.functionCode;
              }
            }
          };
          ConfigurationControlComponent.prototype.isAssetAircraft = function(asset) {
            return (
              !!asset.equipmentFunction &&
              asset.equipmentFunction ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_AIRCRAFT_KEY
            );
          };
          ConfigurationControlComponent.prototype.isAssetEngine = function(asset) {
            return (
              !!asset.equipmentFunction &&
              asset.equipmentFunction ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_ENGINE_KEY
            );
          };
          ConfigurationControlComponent.prototype.isAssetEquipment = function(asset) {
            return !this.isAssetAircraft(asset) && !this.isAssetEngine(asset) && !this.isGroundEquipment;
          };
          ConfigurationControlComponent.prototype.isAssetGroundEquipment = function(asset) {
            return (
              asset.equipmentFunction ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_GROUND_SUPPORT_EQUIPMENT_KEY ||
              asset.equipmentFunction ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_TOOL_KEY ||
              asset.equipmentFunction ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_PILOT_EQUIPMENT_KEY
            );
          };
          ConfigurationControlComponent.prototype.isFlAircraft = function(fl) {
            return (
              !!fl.flFunction &&
              fl.flFunction ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_AIRCRAFT_KEY
            );
          };
          ConfigurationControlComponent.prototype.isFlEngine = function(fl) {
            return (
              !!fl.flFunction &&
              fl.flFunction ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_ENGINE_KEY
            );
          };
          ConfigurationControlComponent.prototype.isItemAircraft = function(item) {
            return (
              !!item.itemFamilyCode &&
              item.itemFamilyCode ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_AIRCRAFT_KEY
            );
          };
          ConfigurationControlComponent.prototype.isItemEngine = function(item) {
            return (
              !!item.itemFamilyCode &&
              item.itemFamilyCode ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_ENGINE_KEY
            );
          };
          ConfigurationControlComponent.prototype.openAsset = function() {
            var equipment = this.assetStructureSelection.data.bidoEquipment;
            this.openSelectedAsset(equipment);
          };
          ConfigurationControlComponent.prototype.getItemKey = function(item) {
            return _shared_utils_bire_item_utils__WEBPACK_IMPORTED_MODULE_20__['BireItemUtils'].createItemKey(item);
          };
          ConfigurationControlComponent.prototype.openSelectedAsset = function(equipment) {
            if (equipment && equipment.equipmentCode) {
              if (this.isAssetAircraft(equipment)) {
                this.openAircraft(equipment.equipmentCode);
              } else if (this.isAssetEngine(equipment)) {
                this.openEngine(equipment.equipmentCode);
              } else if (this.isAssetEquipment(equipment)) {
                this.openEquipment(equipment.equipmentCode);
              } else if (this.isAssetGroundEquipment(equipment)) {
                this.openGroundEquipment(equipment.equipmentCode);
              }
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('erroOnOpenAsset'));
            }
          };
          ConfigurationControlComponent.prototype.openAirworthinessStatus = function() {
            var objectId = {
              equipmentCodeList: [this.equipmentCode]
            };
            var data = {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM,
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Write,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          // TODO: change the way parameters are passed to AssetAtDate
          ConfigurationControlComponent.prototype.openAssetAtDate = function() {
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .FLE_ASSET_AT_DATE_FORM,
              objectId:
                'structure-----' +
                this.serializationService.serialize({
                  equipmentCode: this.equipmentCode,
                  function:
                    this.asset.equipmentFunction ===
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                      .FAMILY_FUNCTION_AIRCRAFT_KEY
                      ? 'Aircraft'
                      : this.asset.equipmentFunction ===
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                          .FAMILY_FUNCTION_ENGINE_KEY
                      ? 'Engine'
                      : 'Equipment',
                  registration: this.asset.registration,
                  snCode: this.asset.sn,
                  pnCode: this.asset.pnCode,
                  designation: this.asset.equipmentDesignation,
                  familyVariant: this.asset.familyVariantCode
                })
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ConfigurationControlComponent.prototype.openAssetReview = function() {
            var objectId = {
              equipmentCodeList: [this.equipmentCode]
            };
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .MAI_ASSET_REVIEW_FORM,
              objectId: this.serializationService.serialize(objectId),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ConfigurationControlComponent.prototype.openMaintenancePlanning = function() {
            if (!!this.equipmentCode) {
              var objectId = {
                equipmentCode: this.equipmentCode
              };
              var data = {
                id: this.tabService.generateId(),
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Write,
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                    .MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_FORM,
                objectId: this.serializationService.serialize(objectId)
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          ConfigurationControlComponent.prototype.openGroundMaintenancePlanning = function() {
            var objectId = {
              equipmentCode: this.equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .LOG_TOOLS_MAINTENANCE_PLANNING_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ConfigurationControlComponent.prototype.openFl = function() {
            var data = {
              id: this.tabService.generateId(),
              componentId: 'FunctionalLocationFormComponent',
              objectId: this.serializationService.serialize(this.assetStructureSelection.data.bidoFl),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          // TODO: replace 'RemoveAssetComponent' by a constant
          ConfigurationControlComponent.prototype.removeEquipment = function() {
            var asset = this.assetStructureSelection.data;
            if (asset.bidoEquipment && asset.bidoEquipment.equipmentCode) {
              this.openRemoveEquipmentPage(asset.bidoEquipment.equipmentCode);
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('erroOnOpenRemoval'));
            }
          };
          ConfigurationControlComponent.prototype.openRemoveEquipmentPage = function(equipmentCode) {
            if (equipmentCode) {
              var objectId = {
                assetCode: [equipmentCode],
                date: new Date(),
                superiorAssetCode: equipmentCode
              };
              var data = {
                id: this.tabService.generateId(),
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
                componentId: 'RemoveAssetComponent',
                objectId: this.serializationService.serialize(objectId)
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('erroOnOpenRemoval'));
            }
          };
          ConfigurationControlComponent.prototype.resetAssetStructureCriteria = function() {
            this.setDefaultSearchControlList();
            this.setDefaultSearchStockMvtStatusList();
          };
          ConfigurationControlComponent.prototype.selectAssetStructureNode = function() {
            var _this = this;
            this.showAirworthinessDocumentSection = false;
            this.showLLPPotentialSection = false;
            if (this.assetStructureSelection) {
              this.setControlTable();
              this.setRemoveItems();
              this.setInstallItems();
              var data = this.assetStructureSelection.data;
              if (this.workPackageCode && data.workOrderId) {
                var input = {
                  projectId: this.workPackageCode,
                  woId: data.workOrderId
                };
                this.configurationControlService.findWorkOrder(input).subscribe(function(result) {
                  _this.currentWorkOrder = result;
                  _this.currentWorkOrderCode = result.woCode;
                  _this.currentWorkOrderDescription = result.woDescription;
                });
              }
            }
          };
          ConfigurationControlComponent.prototype.addControlTableRow = function(
            id,
            causeIdList,
            causeList,
            controlList,
            category
          ) {
            var hasRedFlag = controlList
              .filter(_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_24__['ObjectUtils'].isDefined)
              .some(function(control) {
                return (
                  control ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                    .ICON_RED
                );
              });
            var hasYellowFlag = controlList
              .filter(_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_24__['ObjectUtils'].isDefined)
              .some(function(control) {
                return (
                  control ===
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                    .ICON_YELLOW
                );
              });
            var controlRow = {
              category: category,
              causeIdList: causeIdList
                .filter(_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_24__['ObjectUtils'].isDefined)
                .join(', '),
              causeList: causeList.filter(function(elt) {
                return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_25__['StringUtils'].isNullOrEmpty(elt);
              }),
              control: hasRedFlag
                ? _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                    .ICON_RED
                : hasYellowFlag
                ? _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                    .ICON_YELLOW
                : _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                    .ICON_GREEN,
              _id: id,
              _expand: false
            };
            this.controlTable = __spread(this.controlTable, [controlRow]);
          };
          ConfigurationControlComponent.prototype.calculateCheckGlobalResultForAssetStructureNode = function(asset) {
            var checkList = [
              asset.checkCoreResult,
              asset.checkConfigurationResult,
              asset.checkStructureResult,
              asset.checkPotentialResult,
              asset.checkReferentialResult,
              asset.checkMelResult,
              asset.checkLogbookResult,
              asset.checkFlResult
            ].filter(function(check) {
              return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_24__['ObjectUtils'].isDefined(check);
            });
            return checkList.some(function(check) {
              return (
                check ===
                _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                  .ICON_RED
              );
            })
              ? _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                  .ICON_RED
              : checkList.some(function(check) {
                  return (
                    check ===
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                      .ICON_YELLOW
                  );
                })
              ? _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                  .ICON_YELLOW
              : _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                  .ICON_GREEN;
          };
          ConfigurationControlComponent.prototype.calculateWorkPackageMovements = function(assetStructure) {
            var _this = this;
            assetStructure.forEach(function(node) {
              var nodeData = node.data;
              if (nodeData.removedStockMvtData) {
                if (nodeData.removedStockMvtData.bidoNotificationNotificationCode) {
                  _this.workPackageConfirmedRemovals++;
                }
                _this.workPackageRemovals++;
              }
              if (nodeData.installedStockMvtData) {
                if (nodeData.installedStockMvtData.bidoNotificationNotificationCode) {
                  _this.workPackageConfirmedInstallations++;
                }
                _this.workPackageInstallations++;
              }
              if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_23__['ListUtils'].isNullOrEmpty(node.children)) {
                _this.calculateWorkPackageMovements(node.children);
              }
            });
          };
          ConfigurationControlComponent.prototype.createAssetStructureTreeNode = function(asset) {
            var _this = this;
            asset.checkGlobalResult = this.calculateCheckGlobalResultForAssetStructureNode(asset);
            var node = {
              data: asset,
              expanded: false,
              children: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_23__['ListUtils']
                .orEmpty(asset.children)
                .map(function(childAsset) {
                  return _this.createAssetStructureTreeNode(childAsset);
                })
            };
            return node;
          };
          ConfigurationControlComponent.prototype.filterAssetStructure = function(searchTextValue) {
            var _this = this;
            this.assetStructureSelection = undefined;
            this.assetStructure = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(this.assetStructureSrc);
            this.assetStructure = this.assetStructure.filter(function(elt) {
              return _this.matchAssetStructureNode(elt, !!searchTextValue ? searchTextValue.toLowerCase() : undefined);
            });
            this.showFirstAssetStructureNode();
            this.updateSummaryTable();
          };
          ConfigurationControlComponent.prototype.initAssetStructureGlobalFilter = function() {
            this.searchAssetStructureGlobalFilter = '';
          };
          ConfigurationControlComponent.prototype.initSummaryTable = function() {
            this.summaryTable = [
              {
                category: ConfigurationControlComponent_1.SUMMARY_TABLE_GLOBAL_LABEL,
                nok: 0,
                ok: 0,
                warning: 0
              },
              {
                category: ConfigurationControlComponent_1.SUMMARY_TABLE_APPLICABLE_CONFIGURATION_COMPLIANCE_LABEL,
                nok: 0,
                ok: 0,
                warning: 0
              },
              {
                category: ConfigurationControlComponent_1.SUMMARY_TABLE_AIRWORTHINESS_DOCUMENT_COMPLIANCE_LABEL,
                nok: 0,
                ok: 0,
                warning: 0
              },
              {
                category: ConfigurationControlComponent_1.SUMMARY_TABLE_LLP_POTENTIAL_LABEL,
                nok: 0,
                ok: 0,
                warning: 0
              }
            ];
          };
          ConfigurationControlComponent.prototype.loadAsset = function() {
            var _this = this;
            var input = {
              equipmentCode: this.equipmentCode
            };
            this.configurationControlService.findBidoEquipment(input).subscribe(function(asset) {
              _this.asset = asset;
              // Set component context
              _this.componentContext = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_25__['StringUtils'].isEmpty(
                _this.componentContext
              )
                ? ''
                : _this.componentContext + ' / ';
              if (_this.isTopAssetAircraft) {
                _this.translateService.get(_this.getTranslateKey('aircraft')).subscribe(function(translation) {
                  var aircraftLabel = translation || 'Aircraft';
                  _this.componentContext += aircraftLabel + ' ' + _this.asset.registration;
                });
              } else {
                if (!!_this.asset.equipmentDesignation) {
                  _this.componentContext += _this.asset.equipmentDesignation + ' / ' + _this.asset.sn;
                } else {
                  _this.componentContext += '' + _this.asset.sn;
                }
              }
              if (
                asset.equipmentFunction ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                    .ITEM_FAMILY_CODE_GROUND_SUPPORT_EQUIPMENT_KEY ||
                asset.equipmentFunction ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                    .ITEM_FAMILY_CODE_TOOL_KEY ||
                asset.equipmentFunction ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                    .ITEM_FAMILY_CODE_PILOT_EQUIPMENT_KEY
              ) {
                _this.isGroundEquipment = true;
              }
              _super.prototype.displayComponentContext.call(_this, _this.componentContext, false);
              _this.setNavigationLinkList();
            });
          };
          ConfigurationControlComponent.prototype.loadAssetStructure = function() {
            var _this = this;
            this.assetStructureLoading = true;
            var input = {
              checkConfiguration: true,
              checkFl: true,
              checkLogbook: true,
              checkMel: true,
              checkPotential: true,
              checkReferential: true,
              checkStructure: true,
              equipmentCode: this.equipmentCode,
              projectId: this.workPackageCode,
              withAllCounters: true,
              withFunctionalLocations: true,
              withMelFlag: true,
              withItemStructure: this.displayWithKardex
            };
            this.configurationControlService.controlConfiguration(input).subscribe(function(result) {
              if (result) {
                _this.assetStructureSrc = [_this.createAssetStructureTreeNode(result)];
                _this.assetStructure = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(
                  _this.assetStructureSrc
                );
                _this.showFirstAssetStructureNode();
                _this.updateSummaryTable();
                _this.updateGlobalStatus();
                _this.calculateWorkPackageMovements(_this.assetStructureSrc);
              }
              _this.assetStructureLoading = false;
            });
          };
          ConfigurationControlComponent.prototype.matchAssetStructureNode = function(node, searchText) {
            var _this = this;
            if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_23__['ListUtils'].isNullOrEmpty(node.children)) {
              node.children = node.children.filter(function(child) {
                return _this.matchAssetStructureNode(child, searchText);
              });
            }
            var nodeData = node.data;
            // Asset
            var asset = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_25__['StringUtils']
              .orEmpty(nodeData.asset)
              .toLowerCase();
            var assetMatch =
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_25__['StringUtils'].isNullOrEmpty(searchText) ||
              asset.includes(searchText);
            // Control
            var controlMatch = true;
            if (
              !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_23__['ListUtils'].isNullOrEmpty(
                this.selectedControlList
              )
            ) {
              var nodeControl = nodeData.checkGlobalResult;
              controlMatch =
                _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_24__['ObjectUtils'].isDefined(nodeControl) &&
                this.selectedControlList.includes(nodeControl);
            }
            // Stock status
            var stockStatusMatch = this.selectedStockMvtStatusList
              .map(function(status) {
                if (status === SearchStockMvtStatus.ALL) {
                  return true;
                } else if (status === SearchStockMvtStatus.INSTALLATIONS) {
                  return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_24__['ObjectUtils'].isDefined(
                    nodeData.installedStockMvtData
                  );
                } else if (status === SearchStockMvtStatus.REMOVALS) {
                  return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_24__['ObjectUtils'].isDefined(
                    nodeData.removedStockMvtData
                  );
                } else {
                  return true;
                }
              })
              .some(function(match) {
                return match;
              });
            // Structure
            var name = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_25__['StringUtils']
              .orEmpty(nodeData.structure)
              .toLowerCase();
            var nameMatch =
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_25__['StringUtils'].isNullOrEmpty(searchText) ||
              name.includes(searchText);
            return (
              _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_23__['ListUtils'].orEmpty(node.children).length > 0 ||
              ((assetMatch || nameMatch) && controlMatch && stockStatusMatch)
            );
          };
          ConfigurationControlComponent.prototype.openAircraft = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .FLE_AIRCRAFT_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ConfigurationControlComponent.prototype.openEngine = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .FLE_ENGINE_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ConfigurationControlComponent.prototype.openEquipment = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .FLE_EQUIPMENT_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ConfigurationControlComponent.prototype.openGroundEquipment = function(equipmentCode) {
            var objectId = {
              equipmentCode: equipmentCode
            };
            var data = {
              id: this.tabService.generateId(),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read,
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants'].LOG_TOOL_FORM,
              objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ConfigurationControlComponent.prototype.setAssetStructureGlobalFilter = function() {
            var _this = this;
            this.searchAssetStructureGlobalFilterChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__['Subject']();
            this.searchAssetStructureGlobalFilterChanged
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['debounceTime'])(
                  ConfigurationControlComponent_1.SEARCH_TEXT_DEBOUNCE_TIME
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['distinctUntilChanged'])(),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['takeUntil'])(this.unsubscribe)
              )
              .subscribe(function(searchTextValue) {
                _this.filterAssetStructure(searchTextValue);
              });
          };
          ConfigurationControlComponent.prototype.setControlTable = function() {
            this.controlTable = [];
            var asset = this.assetStructureSelection.data;
            if (
              asset.checkConfigurationResult ||
              asset.checkCoreResult ||
              asset.checkFlResult ||
              asset.checkMelResult ||
              asset.checkCoreResult ||
              asset.checkStructureResult
            ) {
              this.addControlTableRow(
                ConfigurationControlComponent_1.CONTROLS_TABLE_CHECK_OTHER_ID,
                [
                  asset.checkConfigurationCause,
                  asset.checkCoreCause,
                  asset.checkFlCause,
                  asset.checkMelCause,
                  asset.checkReferentialCause,
                  asset.checkStructureCause
                ],
                [
                  asset.checkConfigurationCauseAlt,
                  asset.checkCoreCauseAlt,
                  asset.checkFlCauseAlt,
                  asset.checkMelCauseAlt,
                  asset.checkReferentialCauseAlt,
                  asset.checkStructureCauseAlt
                ],
                [
                  asset.checkConfigurationResult,
                  asset.checkCoreResult,
                  asset.checkFlResult,
                  asset.checkMelResult,
                  asset.checkReferentialResult,
                  asset.checkStructureResult
                ],
                ConfigurationControlComponent_1.SUMMARY_TABLE_APPLICABLE_CONFIGURATION_COMPLIANCE_LABEL
              );
            }
            if (asset.checkLogbookResult) {
              this.addControlTableRow(
                ConfigurationControlComponent_1.CONTROLS_TABLE_CHECK_LOGBOOK_ID,
                [asset.checkLogbookCause],
                [asset.checkLogbookCauseAlt],
                [asset.checkLogbookResult],
                ConfigurationControlComponent_1.SUMMARY_TABLE_AIRWORTHINESS_DOCUMENT_COMPLIANCE_LABEL
              );
            }
            if (asset.checkPotentialResult) {
              this.addControlTableRow(
                ConfigurationControlComponent_1.CONTROLS_TABLE_CHECK_POTENTIAL_ID,
                [asset.checkPotentialCause],
                [asset.checkPotentialCauseAlt],
                [asset.checkPotentialResult],
                ConfigurationControlComponent_1.SUMMARY_TABLE_LLP_POTENTIAL_LABEL
              );
            }
          };
          ConfigurationControlComponent.prototype.setControlTableColList = function() {
            this.controlTableColList = [
              { field: 'control', alignment: 'center', width: '12.5%' },
              { field: 'category', alignment: 'left', width: '40%' },
              { field: 'causeIdList', alignment: 'left', width: '47.5%' }
            ];
          };
          ConfigurationControlComponent.prototype.setDefaultSearchControlList = function() {
            this.selectedControlList = [
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_GREEN,
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_YELLOW,
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants'].ICON_RED
            ];
          };
          ConfigurationControlComponent.prototype.setDefaultSearchStockMvtStatusList = function() {
            this.selectedStockMvtStatusList = [
              SearchStockMvtStatus.ALL,
              SearchStockMvtStatus.REMOVALS,
              SearchStockMvtStatus.INSTALLATIONS
            ];
          };
          ConfigurationControlComponent.prototype.setSearchControlList = function() {
            var _this = this;
            var alertNokKey = this.getTranslateKey('nok');
            var alertOkKey = this.getTranslateKey('ok');
            var alertWarningKey = this.getTranslateKey('warning');
            this.translateService.get([alertNokKey, alertOkKey, alertWarningKey]).subscribe(function(results) {
              var alertNokLabel = results ? results[alertNokKey] : 'NOK';
              var alertOkLabel = results ? results[alertOkKey] : 'OK';
              var alertWarningLabel = results ? results[alertWarningKey] : 'WARNING';
              _this.searchControlList = [
                {
                  label: alertOkLabel,
                  value:
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                      .ICON_GREEN
                },
                {
                  label: alertWarningLabel,
                  value:
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                      .ICON_YELLOW
                },
                {
                  label: alertNokLabel,
                  value:
                    _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                      .ICON_RED
                }
              ];
            });
          };
          ConfigurationControlComponent.prototype.setSearchStockMvtStatusList = function() {
            var _this = this;
            var allKey = this.getTranslateKey('all');
            var installationsKey = this.getTranslateKey('installations');
            var removalsKey = this.getTranslateKey('removals');
            this.translateService.get([allKey, installationsKey, removalsKey]).subscribe(function(results) {
              var allLabel = results ? results[allKey] : 'All';
              var installationsLabel = results ? results[installationsKey] : 'Installations';
              var removalsLabel = results ? results[removalsKey] : 'Removals';
              _this.searchStockMvtStatusList = [
                {
                  label: allLabel,
                  value: SearchStockMvtStatus.ALL
                },
                {
                  label: removalsLabel,
                  value: SearchStockMvtStatus.REMOVALS
                },
                {
                  label: installationsLabel,
                  value: SearchStockMvtStatus.INSTALLATIONS
                }
              ];
            });
          };
          ConfigurationControlComponent.prototype.setSummaryTableColList = function() {
            this.summaryTableColList = [
              { field: 'category', alignment: 'left', width: '47.5%' },
              { field: 'ok', alignment: 'center', width: '17.5%' },
              { field: 'warning', alignment: 'center', width: '17.5%' },
              { field: 'nok', alignment: 'center', width: '17.5%' }
            ];
          };
          ConfigurationControlComponent.prototype.showFirstAssetStructureNode = function() {
            if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_23__['ListUtils'].isEmpty(this.assetStructure)) {
              this.assetStructure[0].expanded = true;
              this.assetStructureSelection = this.assetStructure[0];
              this.selectAssetStructureNode();
              this.updateSummaryTable();
            }
          };
          ConfigurationControlComponent.prototype.updateSummaryTable = function() {
            var _this = this;
            this.initSummaryTable();
            this.assetStructure.forEach(function(asset) {
              return _this.updateSummaryTableWithAssetStructureTreeNode(asset);
            });
            this.updateSummaryTableRowGlobal();
          };
          ConfigurationControlComponent.prototype.updateSummaryTableRow = function(rowIndex, checkResult) {
            this.summaryTable[rowIndex].nok +=
              checkResult ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants'].ICON_RED
                ? 1
                : 0;
            this.summaryTable[rowIndex].ok +=
              checkResult ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_GREEN
                ? 1
                : 0;
            this.summaryTable[rowIndex].warning +=
              checkResult ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_YELLOW
                ? 1
                : 0;
          };
          ConfigurationControlComponent.prototype.updateSummaryTableRowGlobal = function() {
            var index = ConfigurationControlComponent_1.SUMMARY_TABLE_GLOBAL_INDEX;
            this.summaryTable[index].nok = this.summaryTable
              .slice(1)
              .map(function(row) {
                return row.nok;
              })
              .reduce(function(a, b) {
                return a + b;
              }, 0);
            this.summaryTable[index].ok = this.summaryTable
              .slice(1)
              .map(function(row) {
                return row.ok;
              })
              .reduce(function(a, b) {
                return a + b;
              }, 0);
            this.summaryTable[index].warning = this.summaryTable
              .slice(1)
              .map(function(row) {
                return row.warning;
              })
              .reduce(function(a, b) {
                return a + b;
              }, 0);
          };
          ConfigurationControlComponent.prototype.updateGlobalStatus = function() {
            var index = ConfigurationControlComponent_1.SUMMARY_TABLE_GLOBAL_INDEX;
            this.globalStatus =
              this.summaryTable[index].nok > 0
                ? _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                    .ICON_RED
                : this.summaryTable[index].warning > 0
                ? _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                    .ICON_YELLOW
                : _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                    .ICON_GREEN;
          };
          ConfigurationControlComponent.prototype.updateSummaryTableWithAssetStructureTreeNode = function(node) {
            var _this = this;
            var asset = node.data;
            // Applicable configuration compliance
            var applicableConfigurationComplianceIndex =
              ConfigurationControlComponent_1.SUMMARY_TABLE_APPLICABLE_CONFIGURATION_COMPLIANCE_INDEX;
            this.updateSummaryTableRow(applicableConfigurationComplianceIndex, asset.checkConfigurationResult);
            this.updateSummaryTableRow(applicableConfigurationComplianceIndex, asset.checkCoreResult);
            this.updateSummaryTableRow(applicableConfigurationComplianceIndex, asset.checkFlResult);
            this.updateSummaryTableRow(applicableConfigurationComplianceIndex, asset.checkMelResult);
            this.updateSummaryTableRow(applicableConfigurationComplianceIndex, asset.checkReferentialResult);
            this.updateSummaryTableRow(applicableConfigurationComplianceIndex, asset.checkStructureResult);
            // Airworthiness document compliance
            this.updateSummaryTableRow(
              ConfigurationControlComponent_1.SUMMARY_TABLE_AIRWORTHINESS_DOCUMENT_COMPLIANCE_INDEX,
              asset.checkLogbookResult
            );
            // LLP potential
            this.updateSummaryTableRow(
              ConfigurationControlComponent_1.SUMMARY_TABLE_LLP_POTENTIAL_INDEX,
              asset.checkPotentialResult
            );
            // Children
            if (node.children) {
              node.children.forEach(function(childAsset) {
                return _this.updateSummaryTableWithAssetStructureTreeNode(childAsset);
              });
            }
          };
          ConfigurationControlComponent.prototype.initDisplayWithKardex = function() {
            var _this = this;
            if (!!this.workPackageCode) {
              this.displayWithKardex = false;
              this.loadAssetStructure();
            } else {
              this.propertiesService
                .getConfigurationValue(
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                    .FM_APPLIED_CONF_DISPLAYED_WITH_KARDEX
                )
                .subscribe(function(result) {
                  _this.displayWithKardex = _shared_utils_boolean_utils__WEBPACK_IMPORTED_MODULE_21__[
                    'BooleanUtils'
                  ].isTrue(result);
                  _this.loadAssetStructure();
                });
            }
          };
          ConfigurationControlComponent.prototype.loadAircraftStatusList = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__['GenericPropertyConstants']
                  .AIRCRAFT_STATUS_MAP
              )
              .subscribe(function(results) {
                _this.aircraftStatusList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_23__['ListUtils'].orEmpty(
                  results
                );
              });
          };
          ConfigurationControlComponent.prototype.searchAsset = function() {
            this.dialogSearchAssetVisible = true;
          };
          ConfigurationControlComponent.prototype.loadWorkPackage = function() {
            var _this = this;
            if (this.workPackageCode) {
              this.configurationControlService.findBidmProject(this.workPackageCode).subscribe(function(result) {
                _this.workPackage = result;
                _this.workPackageMovementsVisible = true;
                _this.loadWorkPackageAttributeList();
                // Set component context
                var componentContext = 'WP n\u00B0' + _this.workPackage.projectNumber;
                _this.componentContext = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_25__[
                  'StringUtils'
                ].isEmpty(_this.componentContext)
                  ? componentContext
                  : componentContext + ' / ' + _this.componentContext;
                _super.prototype.displayComponentContext.call(_this, _this.componentContext, false);
              });
            }
          };
          ConfigurationControlComponent.prototype.loadWorkPackageAttributeList = function() {
            var _this = this;
            if (this.workPackage.projectId) {
              var input = {
                projectId: this.workPackage.projectId
              };
              this.configurationControlService.findBidmProjectAttributesByWorkOrder(input).subscribe(function(result) {
                _this.workPackageAttributeList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_23__[
                  'ListUtils'
                ].orEmpty(result);
                _this.checkIfWorkPackageHasAssetStructureUpdatedAttribute();
              });
            }
          };
          ConfigurationControlComponent.prototype.toggleControlsTableRowDetailsVisibility = function(row) {
            row._expand = !row._expand;
          };
          ConfigurationControlComponent.prototype.getAssetStructureUpdatedAttribute = function() {
            return this.workPackageAttributeList.find(function(attribute) {
              return (
                attribute.attributeName ===
                  _shared_constants_bidm_attribute_constants__WEBPACK_IMPORTED_MODULE_6__['BidmAttributeConstants']
                    .IS_ASSET_STRUCTURE_UPDATED &&
                !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_25__['StringUtils'].isNullOrEmpty(
                  attribute.attributeValue
                ) &&
                (attribute.attributeValue.toUpperCase() === 'X' ||
                  attribute.attributeValue.toUpperCase() === 'TRUE' ||
                  attribute.attributeValue === '1')
              );
            });
          };
          ConfigurationControlComponent.prototype.checkIfWorkPackageHasAssetStructureUpdatedAttribute = function() {
            this.workPackageMovementsUpdated = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_24__[
              'ObjectUtils'
            ].isDefined(this.getAssetStructureUpdatedAttribute());
          };
          // Airworthiness Documents' section
          ConfigurationControlComponent.prototype.openAirworthinessDocumentComplianceTable = function() {
            var _this = this;
            if (!this.showAirworthinessDocumentSection) {
              this.airworthinessDocumentsTable = [];
              this.showAirworthinessDocumentSection = true;
              this.showLLPPotentialSection = false;
              this.airworthinessDocumentsTableLoading = true;
              var bidoEquipment = !!this.assetStructureSelection
                ? this.assetStructureSelection.data.bidoEquipment
                : undefined;
              if (!!bidoEquipment) {
                this.airworthinessDocumentsTableLoading = true;
                this.configurationControlService.getADCompliance(bidoEquipment).subscribe(function(results) {
                  results.forEach(function(res) {
                    res._id = Math.random();
                    if (res.control === 'NEGATIVE') {
                      res.expanded = false;
                    }
                  });
                  _this.airworthinessDocumentsTable = results || [];
                  _this.airworthinessDocumentsTableLoading = false;
                });
              }
            }
          };
          ConfigurationControlComponent.prototype.openEvolution = function(row) {
            var evolutionId = {
              evolutionNumber: row.evolutionNumber,
              evolutionRevisionNumber: row.evolutionRevisionNumber
            };
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .ENG_EVOLUTION_FORM,
              objectId: this.serializationService.serialize(evolutionId),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__['ComponentOpenMode'].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ConfigurationControlComponent.prototype.toggleADTableRowDetailsVisibility = function(row) {
            row.expanded = !row.expanded;
          };
          ConfigurationControlComponent.prototype.getTranslatedText = function(input) {
            var response = '';
            var key = this.getComponentName() + '.' + input;
            this.translateService.get(key).subscribe(function(value) {
              response = value;
            });
            return response;
          };
          // LLP Potential section
          ConfigurationControlComponent.prototype.setTableCols = function() {
            this.airworthinessDocumentsTableCols = [
              { field: 'control', alignment: 'center', width: '12.5%' },
              { field: 'document', alignment: 'left' },
              { field: 'type', alignment: 'left' },
              { field: 'familyVariant', alignment: 'left' },
              { field: 'compliance', alignment: 'left' }
            ];
            this.llpPotentialTableCols = [
              { field: 'control', alignment: 'center', width: '12.5%' },
              { field: 'counterCode', alignment: 'left' },
              { field: 'cumulatedCounterValue', alignment: 'left' },
              { field: 'remainingValue', alignment: 'left' },
              { field: 'referenceValue', alignment: 'left' }
            ];
          };
          ConfigurationControlComponent.prototype.openLLPPotentialTable = function() {
            var _this = this;
            if (!this.showLLPPotentialSection) {
              this.llpPotentialTable = [];
              this.showLLPPotentialSection = true;
              this.showAirworthinessDocumentSection = false;
              var equipmentCode = !!this.assetStructureSelection
                ? this.assetStructureSelection.data.bidoEquipment.equipmentCode
                : undefined;
              if (!!equipmentCode) {
                this.llpTableLoading = true;
                this.configurationControlService.getLLPPotential(equipmentCode).subscribe(function(result) {
                  result.forEach(function(res) {
                    _this.llpPotentialTable.push(_this.getLLPRow(res));
                  });
                  _this.llpTableLoading = false;
                });
              }
            }
          };
          ConfigurationControlComponent.prototype.getLLPRow = function(row) {
            var llpRow = {
              control: this.getAlertIcon(row),
              counterCode: row.counterCode,
              cumulatedCounterValue: row.cumulatedCounterValue,
              remainingValue: row.remainingValue,
              referenceValue: row.referenceValue,
              _obj: row
            };
            return llpRow;
          };
          ConfigurationControlComponent.prototype.getAlertIcon = function(row) {
            if (
              row &&
              row.aPotentialAlertData &&
              row.aPotentialAlertData.potentialAlertLevel !== null &&
              row.aPotentialAlertData.potentialAlertLevel !== undefined
            ) {
              return this.getColorByIconCode(row.aPotentialAlertData.potentialAlertLevel);
            }
            return 'nok';
          };
          ConfigurationControlComponent.prototype.getColorByIconCode = function(iconCode) {
            switch (iconCode) {
              case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_GREEN_LIGHT_CODE:
                return 'ok';
              case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_YELLOW_LIGHT_CODE:
                return 'warning';
              case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_RED_LIGHT_CODE:
                return 'nok';
              case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_NONE_LIGHT_CODE:
                return 'ok';
              case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_GREEN_LED_CODE:
                return 'ok';
              case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_YELLOW_LED_CODE:
                return 'warning';
              case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_RED_LED_CODE:
                return 'nok';
              case _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_9__['ControlConfigConstants']
                .ICON_NONE_LED_CODE:
                return 'ok';
              default:
                return 'nok';
            }
          };
          ConfigurationControlComponent.prototype.openHelpDialog = function() {
            this.showHelpDialog = true;
          };
          ConfigurationControlComponent.prototype.openFunctionalLocationAssignment = function(asset) {
            this.configurationControlService.openFunctionalLocationAssignment(asset);
          };
          ConfigurationControlComponent.prototype.generateFormEASA1 = function(asset) {
            var _this = this;
            this.showLoaderGenerateFormEASA1 = true;
            var input = {
              equipmentCode: asset.equipmentCode || '',
              isSpecific: this.sessionService.isSpecificDassault,
              projectId: this.workPackage.projectId || ''
            };
            this.configurationControlService
              .generateEASACertificate(input)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['finalize'])(function() {
                  _this.showLoaderGenerateFormEASA1 = false;
                })
              )
              .subscribe({
                next: function(fileContent) {
                  _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_22__['FileUtils'].downloadFile(
                    fileContent.fileContent,
                    fileContent.fileName
                  );
                }
              });
          };
          ConfigurationControlComponent.prototype.generateFormFAA8130 = function(asset) {
            var _this = this;
            this.showLoaderGenerateFormFAA8130 = true;
            var input = {
              equipmentCode: asset.equipmentCode || '',
              isSpecific: this.sessionService.isSpecificDassault,
              projectId: this.workPackage.projectId || ''
            };
            this.configurationControlService
              .generateFAACertificate(input)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['finalize'])(function() {
                  _this.showLoaderGenerateFormFAA8130 = false;
                })
              )
              .subscribe({
                next: function(fileContent) {
                  _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_22__['FileUtils'].downloadFile(
                    fileContent.fileContent,
                    fileContent.fileName
                  );
                }
              });
          };
          ConfigurationControlComponent.prototype.showInstallations = function() {
            var _this = this;
            this.assetStructureFilterInstallationVisible = !this.assetStructureFilterInstallationVisible;
            this.assetStructureSelection = undefined;
            this.assetStructure = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(this.assetStructureSrc);
            if (this.assetStructureFilterInstallationVisible) {
              if (this.assetStructureFilterRemovalVisible) {
                this.assetStructure = this.assetStructure.filter(function(node) {
                  return _this.matchAssetStructureNodeByInstallationAndRemoval(node);
                });
              } else {
                this.assetStructure = this.assetStructure.filter(function(node) {
                  return _this.matchAssetStructureNodeByInstallation(node);
                });
              }
              this.expandAssetStructure(this.assetStructure);
            } else if (this.assetStructureFilterRemovalVisible) {
              this.assetStructure = this.assetStructure.filter(function(node) {
                return _this.matchAssetStructureNodeByRemoval(node);
              });
              this.expandAssetStructure(this.assetStructure);
            }
            if (!this.assetStructureFilterInstallationVisible && !this.assetStructureFilterRemovalVisible) {
              this.showFirstAssetStructureNode();
            }
            this.updateSummaryTable();
          };
          ConfigurationControlComponent.prototype.showRemovals = function() {
            var _this = this;
            this.assetStructureFilterRemovalVisible = !this.assetStructureFilterRemovalVisible;
            this.assetStructureSelection = undefined;
            this.assetStructure = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['cloneDeep'])(this.assetStructureSrc);
            if (this.assetStructureFilterRemovalVisible) {
              if (this.assetStructureFilterInstallationVisible) {
                this.assetStructure = this.assetStructure.filter(function(node) {
                  return _this.matchAssetStructureNodeByInstallationAndRemoval(node);
                });
              } else {
                this.assetStructure = this.assetStructure.filter(function(node) {
                  return _this.matchAssetStructureNodeByRemoval(node);
                });
              }
              this.expandAssetStructure(this.assetStructure);
            } else if (this.assetStructureFilterInstallationVisible) {
              this.assetStructure = this.assetStructure.filter(function(node) {
                return _this.matchAssetStructureNodeByInstallation(node);
              });
              this.expandAssetStructure(this.assetStructure);
            }
            if (!this.assetStructureFilterInstallationVisible && !this.assetStructureFilterRemovalVisible) {
              this.showFirstAssetStructureNode();
            }
            this.updateSummaryTable();
          };
          ConfigurationControlComponent.prototype.matchAssetStructureNodeByInstallation = function(node) {
            var _this = this;
            if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_23__['ListUtils'].isNullOrEmpty(node.children)) {
              node.children = node.children.filter(function(nodeChild) {
                return _this.matchAssetStructureNodeByInstallation(nodeChild);
              });
            }
            var nodeData = node.data;
            return (
              _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_23__['ListUtils'].orEmpty(node.children).length > 0 ||
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_24__['ObjectUtils'].isDefined(
                nodeData.installedStockMvtData
              )
            );
          };
          ConfigurationControlComponent.prototype.matchAssetStructureNodeByInstallationAndRemoval = function(node) {
            var _this = this;
            if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_23__['ListUtils'].isNullOrEmpty(node.children)) {
              node.children = node.children.filter(function(nodeChild) {
                return _this.matchAssetStructureNodeByInstallationAndRemoval(nodeChild);
              });
            }
            var nodeData = node.data;
            return (
              _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_23__['ListUtils'].orEmpty(node.children).length > 0 ||
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_24__['ObjectUtils'].isDefined(
                nodeData.installedStockMvtData
              ) ||
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_24__['ObjectUtils'].isDefined(
                nodeData.removedStockMvtData
              )
            );
          };
          ConfigurationControlComponent.prototype.matchAssetStructureNodeByRemoval = function(node) {
            var _this = this;
            if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_23__['ListUtils'].isNullOrEmpty(node.children)) {
              node.children = node.children.filter(function(nodeChild) {
                return _this.matchAssetStructureNodeByRemoval(nodeChild);
              });
            }
            var nodeData = node.data;
            return (
              _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_23__['ListUtils'].orEmpty(node.children).length > 0 ||
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_24__['ObjectUtils'].isDefined(
                nodeData.removedStockMvtData
              )
            );
          };
          ConfigurationControlComponent.prototype.expandAssetStructure = function(nodes) {
            var _this = this;
            nodes.forEach(function(node) {
              node.expanded = true;
              if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_23__['ListUtils'].isNullOrEmpty(node.children)) {
                _this.expandAssetStructure(node.children);
              }
            });
          };
          ConfigurationControlComponent.prototype.onCreateWorkPackage = function(data) {
            var _this = this;
            this.configurationControlService.createWorkPackage(data.woManagementInputDTO).subscribe(
              function() {
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnWOCreation'));
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnWOCreation'));
              }
            );
          };
          ConfigurationControlComponent.prototype.setRemoveItems = function() {
            var _this = this;
            var removeByWo = this.getTranslateKey('removeByWo');
            var removeByRegul = this.getTranslateKey('removeByRegul');
            this.translateService.get([removeByWo, removeByRegul]).subscribe({
              next: function(results) {
                _this.removeItems = [
                  {
                    label: results[removeByWo],
                    command: function() {
                      _this.removeEquipmentFromWP();
                    }
                  },
                  {
                    label: results[removeByRegul],
                    command: function() {
                      _this.removeEquipmentFromRegularization();
                    }
                  }
                ];
              }
            });
          };
          ConfigurationControlComponent.prototype.setInstallItems = function() {
            var _this = this;
            var installByWo = this.getTranslateKey('installByWo');
            var installByRegul = this.getTranslateKey('installByRegul');
            this.translateService.get([installByWo, installByRegul]).subscribe({
              next: function(results) {
                _this.installItems = [
                  {
                    label: results[installByWo],
                    command: function() {
                      _this.installEquipmentFromWP();
                    }
                  }
                ];
                if (_this.assetStructureSelection && _this.assetStructureSelection.data) {
                  var data = _this.assetStructureSelection.data;
                  if (data.uniqueBidoEquipmentChild && data.uniqueBidoEquipmentChild.equipmentCode) {
                    _this.installItems = [
                      {
                        label: results[installByWo],
                        command: function() {
                          _this.installEquipmentFromWP();
                        }
                      },
                      {
                        label: results[installByRegul],
                        command: function() {
                          _this.installEquipmentFromRegularization();
                        }
                      }
                    ];
                  }
                }
              }
            });
          };
          var ConfigurationControlComponent_1;
          ConfigurationControlComponent.SUMMARY_TABLE_AIRWORTHINESS_DOCUMENT_COMPLIANCE_LABEL =
            'checkAirworthinessDocumentCompliance';
          ConfigurationControlComponent.SUMMARY_TABLE_APPLICABLE_CONFIGURATION_COMPLIANCE_LABEL =
            'checkAppliableConfigurationCompliance';
          ConfigurationControlComponent.SUMMARY_TABLE_GLOBAL_LABEL = 'checkGlobal';
          ConfigurationControlComponent.SUMMARY_TABLE_LLP_POTENTIAL_LABEL = 'checkLlpPotential';
          ConfigurationControlComponent.SEARCH_TEXT_DEBOUNCE_TIME = 500;
          ConfigurationControlComponent.SUMMARY_TABLE_AIRWORTHINESS_DOCUMENT_COMPLIANCE_INDEX = 2;
          ConfigurationControlComponent.SUMMARY_TABLE_APPLICABLE_CONFIGURATION_COMPLIANCE_INDEX = 1;
          ConfigurationControlComponent.SUMMARY_TABLE_GLOBAL_INDEX = 0;
          ConfigurationControlComponent.SUMMARY_TABLE_LLP_POTENTIAL_INDEX = 3;
          ConfigurationControlComponent.CONTROLS_TABLE_CHECK_LOGBOOK_ID = 1;
          ConfigurationControlComponent.CONTROLS_TABLE_CHECK_OTHER_ID = 3;
          ConfigurationControlComponent.CONTROLS_TABLE_CHECK_POTENTIAL_ID = 2;
          ConfigurationControlComponent.CONFIGURATION_CONTROL_ANCHOR_ID = 'configurationControlAnchor';
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])(
                ConfigurationControlComponent_1.CONFIGURATION_CONTROL_ANCHOR_ID
              ),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ConfigurationControlComponent.prototype,
            'configurationControlEltRef',
            void 0
          );
          ConfigurationControlComponent = ConfigurationControlComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-configuration-control',
                template: __webpack_require__(
                  /*! ./configuration-control.component.html */ './src/app/main/maintenance/configuration-control/configuration-control.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./configuration-control.component.scss */ './src/app/main/maintenance/configuration-control/configuration-control.component.scss'
                  ),
                  __webpack_require__(/*! ./share.scss */ './src/app/main/maintenance/configuration-control/share.scss')
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_12__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_13__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_14__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_16__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_18__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_17__['SessionService'],
                _configuration_control_service__WEBPACK_IMPORTED_MODULE_26__['ConfigurationControlService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_15__['PropertiesService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            ConfigurationControlComponent
          );
          return ConfigurationControlComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_19__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/configuration-control.module.ts':
      /*!****************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/configuration-control.module.ts ***!
  \****************************************************************************************/
      /*! exports provided: ConfigurationControlModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ConfigurationControlModule',
          function() {
            return ConfigurationControlModule;
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
        /* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/chart */ './node_modules/primeng/chart.js'
        );
        /* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_chart__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/checkbox */ './node_modules/primeng/checkbox.js'
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/dragdrop */ './node_modules/primeng/dragdrop.js'
        );
        /* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dragdrop__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__
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
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/overlaypanel */ './node_modules/primeng/overlaypanel.js'
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! primeng/radiobutton */ './node_modules/primeng/radiobutton.js'
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10__
        );
        /* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! primeng/splitbutton */ './node_modules/primeng/splitbutton.js'
        );
        /* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_splitbutton__WEBPACK_IMPORTED_MODULE_11__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_12__
        );
        /* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! primeng/togglebutton */ './node_modules/primeng/togglebutton.js'
        );
        /* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_togglebutton__WEBPACK_IMPORTED_MODULE_13__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__
        );
        /* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! primeng/tree */ './node_modules/primeng/tree.js'
        );
        /* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tree__WEBPACK_IMPORTED_MODULE_15__
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! primeng/treetable */ './node_modules/primeng/treetable.js'
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_treetable__WEBPACK_IMPORTED_MODULE_16__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_asset_rev_search_asset_rev_search_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../shared/components/asset-rev-search/asset-rev-search.module */ './src/app/shared/components/asset-rev-search/asset-rev-search.module.ts'
        );
        /* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ './src/app/shared/components/component-sidebar/component-sidebar.mdule.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-customer/dialog-search-customer.module */ './src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_equipment_dialog_search_equipment_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-equipment/dialog-search-equipment.module */ './src/app/shared/components/dialog-search-equipment/dialog-search-equipment.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_task_dialog_search_task_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-task/dialog-search-task.module */ './src/app/shared/components/dialog-search-task/dialog-search-task.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../shared/components/dialog-table/dialog-table.module */ './src/app/shared/components/dialog-table/dialog-table.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_work_package_dialog_work_package_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../../shared/components/dialog-work-package/dialog-work-package.module */ './src/app/shared/components/dialog-work-package/dialog-work-package.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_work_package_list_work_package_list_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ../../../shared/components/work-package-list/work-package-list.module */ './src/app/shared/components/work-package-list/work-package-list.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _asset_view_scope_asset_view_scope_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ./asset-view-scope/asset-view-scope.component */ './src/app/main/maintenance/configuration-control/asset-view-scope/asset-view-scope.component.ts'
        );
        /* harmony import */ var _configuration_control_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ./configuration-control.component */ './src/app/main/maintenance/configuration-control/configuration-control.component.ts'
        );
        /* harmony import */ var _configuration_control_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ./configuration-control.service */ './src/app/main/maintenance/configuration-control/configuration-control.service.ts'
        );
        /* harmony import */ var _dialog_help_dialog_help_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./dialog-help/dialog-help.component */ './src/app/main/maintenance/configuration-control/dialog-help/dialog-help.component.ts'
        );
        /* harmony import */ var _dialog_work_order_dialog_work_order_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ./dialog-work-order/dialog-work-order.component */ './src/app/main/maintenance/configuration-control/dialog-work-order/dialog-work-order.component.ts'
        );
        /* harmony import */ var _dialog_work_order_dialog_work_order_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! ./dialog-work-order/dialog-work-order.service */ './src/app/main/maintenance/configuration-control/dialog-work-order/dialog-work-order.service.ts'
        );
        /* harmony import */ var _installation_equipment_installation_equipment_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
          /*! ./installation-equipment/installation-equipment.component */ './src/app/main/maintenance/configuration-control/installation-equipment/installation-equipment.component.ts'
        );
        /* harmony import */ var _removal_equipment_removal_equipment_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
          /*! ./removal-equipment/removal-equipment.component */ './src/app/main/maintenance/configuration-control/removal-equipment/removal-equipment.component.ts'
        );
        /* harmony import */ var _search_configuration_control_search_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
          /*! ./search/configuration-control-search.component */ './src/app/main/maintenance/configuration-control/search/configuration-control-search.component.ts'
        );
        /* harmony import */ var _search_configuration_control_search_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
          /*! ./search/configuration-control-search.service */ './src/app/main/maintenance/configuration-control/search/configuration-control-search.service.ts'
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
          primeng_chart__WEBPACK_IMPORTED_MODULE_2__['ChartModule'],
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__['CheckboxModule'],
          primeng_dragdrop__WEBPACK_IMPORTED_MODULE_4__['DragDropModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__['DropdownModule'],
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__['KeyFilterModule'],
          primeng_message__WEBPACK_IMPORTED_MODULE_7__['MessageModule'],
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__['OverlayPanelModule'],
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9__['RadioButtonModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10__['SelectButtonModule'],
          primeng_splitbutton__WEBPACK_IMPORTED_MODULE_11__['SplitButtonModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_12__['TableModule'],
          primeng_togglebutton__WEBPACK_IMPORTED_MODULE_13__['ToggleButtonModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__['TooltipModule'],
          primeng_treetable__WEBPACK_IMPORTED_MODULE_16__['TreeTableModule'],
          primeng_tree__WEBPACK_IMPORTED_MODULE_15__['TreeModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_asset_rev_search_asset_rev_search_module__WEBPACK_IMPORTED_MODULE_20__[
            'AssetRevSearchModule'
          ],
          _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_21__[
            'ComponentSidebarModule'
          ],
          _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_22__[
            'DialogSearchCustomerModule'
          ],
          _shared_components_dialog_search_equipment_dialog_search_equipment_module__WEBPACK_IMPORTED_MODULE_23__[
            'DialogSearchEquipmentModule'
          ],
          _shared_components_dialog_search_task_dialog_search_task_module__WEBPACK_IMPORTED_MODULE_24__[
            'DialogSearchTaskModule'
          ],
          _shared_components_work_package_list_work_package_list_module__WEBPACK_IMPORTED_MODULE_28__[
            'WorkPackageListModule'
          ],
          _shared_components_dialog_work_package_dialog_work_package_module__WEBPACK_IMPORTED_MODULE_26__[
            'DialogWorkPackageModule'
          ],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_27__['ModalModule'],
          _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_25__['DialogTableModule']
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _asset_view_scope_asset_view_scope_component__WEBPACK_IMPORTED_MODULE_30__['AssetViewScopeComponent'],
          _dialog_help_dialog_help_component__WEBPACK_IMPORTED_MODULE_33__['DialogHelpComponent'],
          _dialog_work_order_dialog_work_order_component__WEBPACK_IMPORTED_MODULE_34__[
            'DialogWorkOrderCreationComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [
          _search_configuration_control_search_component__WEBPACK_IMPORTED_MODULE_38__[
            'ConfigurationControlSearchComponent'
          ],
          _configuration_control_component__WEBPACK_IMPORTED_MODULE_31__['ConfigurationControlComponent'],
          _installation_equipment_installation_equipment_component__WEBPACK_IMPORTED_MODULE_36__[
            'InstallationEquipmentComponent'
          ],
          _removal_equipment_removal_equipment_component__WEBPACK_IMPORTED_MODULE_37__['RemovalEquipmentComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _search_configuration_control_search_service__WEBPACK_IMPORTED_MODULE_39__[
            'ConfigurationControlSearchService'
          ],
          _configuration_control_service__WEBPACK_IMPORTED_MODULE_32__['ConfigurationControlService'],
          _dialog_work_order_dialog_work_order_service__WEBPACK_IMPORTED_MODULE_35__['DialogWorkOrderCreationService']
        ];
        var ConfigurationControlModule = /** @class */ (function() {
          function ConfigurationControlModule() {}
          ConfigurationControlModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_17__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_18__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_19__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_29__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            ConfigurationControlModule
          );
          return ConfigurationControlModule;
        })();

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/configuration-control.service.ts':
      /*!*****************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/configuration-control.service.ts ***!
  \*****************************************************************************************/
      /*! exports provided: ConfigurationControlService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ConfigurationControlService',
          function() {
            return ConfigurationControlService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_api_work_order_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../..//shared/api/work-order-management.api */ './src/app/shared/api/work-order-management.api.ts'
        );
        /* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/api/aircraft-maintenance.api */ './src/app/shared/api/aircraft-maintenance.api.ts'
        );
        /* harmony import */ var _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/api/airworthiness-management.api */ './src/app/shared/api/airworthiness-management.api.ts'
        );
        /* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/api/am-project-management.api */ './src/app/shared/api/am-project-management.api.ts'
        );
        /* harmony import */ var _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/api/asset-management.api */ './src/app/shared/api/asset-management.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/api/fleet-business.api */ './src/app/shared/api/fleet-business.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_history_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/api/fleet-history.api */ './src/app/shared/api/fleet-history.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_business_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/api/product-structure-business.api */ './src/app/shared/api/product-structure-business.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
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

        var ConfigurationControlService = /** @class */ (function(_super) {
          __extends(ConfigurationControlService, _super);
          function ConfigurationControlService(
            http,
            appConfigService,
            aircraftMaintenanceApi,
            airworthinessManagementApi,
            amProjectManagementApi,
            assetManagementApi,
            bidtWarehouseApi,
            fleetBusinessApi,
            fleetHistoryApi,
            fleetManagementApi,
            productStructureBusinessApi,
            productStructureManagementApi,
            serializationService,
            workOrderManagementApi,
            tabService
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
            _this.airworthinessManagementApi = airworthinessManagementApi;
            _this.amProjectManagementApi = amProjectManagementApi;
            _this.assetManagementApi = assetManagementApi;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            _this.fleetBusinessApi = fleetBusinessApi;
            _this.fleetHistoryApi = fleetHistoryApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.productStructureBusinessApi = productStructureBusinessApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.serializationService = serializationService;
            _this.workOrderManagementApi = workOrderManagementApi;
            _this.tabService = tabService;
            return _this;
          }
          ConfigurationControlService.prototype.getAssetAtDate = function(equipmentCode, notificationCode) {
            var _this = this;
            return this.findBidoNotification({ notificationCode: notificationCode }).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['concatMap'])(function(notification) {
                return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_21__['ObjectUtils'].isDefined(
                  notification.reportingPeriodStartDate
                )
                  ? _this.findBidoEquipmentByEquipmentCodeFromDate({
                      equipmentCode: equipmentCode,
                      notificationStartDate: notification.reportingPeriodStartDate
                    })
                  : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['of'])(undefined);
              })
            );
          };
          ConfigurationControlService.prototype.getFunctionLocationLabel = function(bidoNotificationDTO) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.getFunctionLocationLabel,
              bidoNotificationDTO
            );
          };
          ConfigurationControlService.prototype.getFunctionLocationAtDate = function(equipmentCode, notificationCode) {
            var _this = this;
            return this.findBidoNotification({ notificationCode: notificationCode }).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['concatMap'])(function(notification) {
                return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_21__['ObjectUtils'].isDefined(
                  notification.reportingPeriodStartDate
                )
                  ? _this.getFunctionLocationLabel({
                      reportingPeriodStartDate: notification.reportingPeriodStartDate,
                      equipmentCode: equipmentCode,
                      bidoNotificationTypeDTO: {}
                    })
                  : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['of'])(undefined);
              })
            );
          };
          ConfigurationControlService.prototype.openEvent = function(notificationCode) {
            var objectId = {
              notificationCode: notificationCode
            };
            var data = {
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_15__['ComponentConstants']
                  .FLE_EVENT_CREATE,
              id: this.tabService.generateId(),
              objectId: this.serializationService.serialize(objectId),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__['ComponentOpenMode'].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ConfigurationControlService.prototype.openFunctionalLocationAssignment = function(equipment) {
            var data = {
              componentId: 'FunctionalLocationAssignmentComponent',
              id: this.tabService.generateId(),
              objectId: this.serializationService.serialize(equipment),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__['ComponentOpenMode'].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ConfigurationControlService.prototype.openWorkOrder = function(workOrder) {
            if (workOrder) {
              var objectId = {
                projectId: workOrder.projectId,
                woId: workOrder.woId
              };
              var data = {
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_15__['ComponentConstants']
                    .MAI_WORK_ORDER_FORM,
                id: this.tabService.generateId(),
                objectId: this.serializationService.serialize(objectId),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__['ComponentOpenMode'].Read
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          /**************************************************************************
           * Airworthiness management api
           *************************************************************************/
          ConfigurationControlService.prototype.findWorkOrder = function(input) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.findBidmWorkOrder, input);
          };
          /**************************************************************************
           * Airworthiness management api
           *************************************************************************/
          ConfigurationControlService.prototype.findCsnAndTsnValues = function(input) {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.findCsnAndTsnValues, input);
          };
          /**************************************************************************
           * Am project management api
           *************************************************************************/
          ConfigurationControlService.prototype.createBidmProjectAttribute = function(input) {
            return _super.prototype.post.call(this, this.amProjectManagementApi.createBidmProjectAttribute, input);
          };
          ConfigurationControlService.prototype.findBidmProject = function(projectId) {
            return _super.prototype.post.call(this, this.amProjectManagementApi.findBidmProject, projectId);
          };
          ConfigurationControlService.prototype.findBidmProjectAttributesByWorkOrder = function(input) {
            return _super.prototype.post.call(
              this,
              this.amProjectManagementApi.findBidmProjectAttributesByWorkOrder,
              input
            );
          };
          ConfigurationControlService.prototype.generateEASACertificate = function(bidmProjectReportDTOId) {
            return _super.prototype.post.call(
              this,
              this.amProjectManagementApi.generateEASACertificate,
              bidmProjectReportDTOId
            );
          };
          ConfigurationControlService.prototype.generateFAACertificate = function(bidmProjectReportDTOId) {
            return _super.prototype.post.call(
              this,
              this.amProjectManagementApi.generateFAACertificate,
              bidmProjectReportDTOId
            );
          };
          ConfigurationControlService.prototype.removeBidmProjectAttribute = function(input) {
            return _super.prototype.post.call(this, this.amProjectManagementApi.removeBidmProjectAttribute, input);
          };
          /**************************************************************************
           * Bidt warehouse api
           *************************************************************************/
          ConfigurationControlService.prototype.getById = function(input) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.getById, input);
          };
          ConfigurationControlService.prototype.findAllWarehouseForRemoval = function(input) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findAllWarehouseForRemoval, input);
          };
          ConfigurationControlService.prototype.findAllWarehouseForRemovalWithData = function(input) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findAllWarehouseForRemovalWithData, input);
          };
          /**************************************************************************
           * Fleet business api
           *************************************************************************/
          ConfigurationControlService.prototype.controlConfiguration = function(input) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.controlConfiguration, input);
          };
          ConfigurationControlService.prototype.dismantleEquipment = function(input) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.dismantleOneEquipment, input);
          };
          ConfigurationControlService.prototype.getItemListToInstallEquipment = function(input) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.getItemListToInstallEquipment, input);
          };
          ConfigurationControlService.prototype.getFunctionLocationListToInstallEquipment = function(input) {
            return _super.prototype.post.call(
              this,
              this.fleetBusinessApi.getFunctionLocationListToInstallEquipment,
              input
            );
          };
          ConfigurationControlService.prototype.installEquipment = function(input) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.installOneEquipment, input);
          };
          /**************************************************************************
           * Fleet history api
           *************************************************************************/
          ConfigurationControlService.prototype.findBidoEquipmentByEquipmentCodeFromDate = function(input) {
            return _super.prototype.post.call(
              this,
              this.fleetHistoryApi.findBidoEquipmentByEquipmentCodeFromDate,
              input
            );
          };
          /**************************************************************************
           * Fleet management api
           *************************************************************************/
          ConfigurationControlService.prototype.findBidoEquipment = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipment, input);
          };
          ConfigurationControlService.prototype.findBidoEquipmentLabelValue = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentLabelValue, input);
          };
          ConfigurationControlService.prototype.findBidoEquipmentSuperiorAsset = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentSuperiorAsset, input);
          };
          ConfigurationControlService.prototype.findBidoFl = function(bidoNotificationDTOId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoFl, bidoNotificationDTOId);
          };
          ConfigurationControlService.prototype.findBidoFlEquipmentByEquipmentCodeFromDate = function(
            bidoNotificationDTOId
          ) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoFlEquipmentByEquipmentCodeFromDate,
              bidoNotificationDTOId
            );
          };
          ConfigurationControlService.prototype.findBidoNotification = function(bidoNotificationDTOId) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoNotification,
              bidoNotificationDTOId
            );
          };
          /**************************************************************************
           * Product structure management api
           *************************************************************************/
          ConfigurationControlService.prototype.getStandardCycleCounterLabel = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.getStandardCycleCounterLabel);
          };
          ConfigurationControlService.prototype.getStandardTimeCounterLabel = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.getStandardTimeCounterLabel);
          };
          /**********************
           * Asset management api
           *********************/
          ConfigurationControlService.prototype.getLLPPotential = function(equipmentCode) {
            return _super.prototype.post.call(this, this.assetManagementApi.getLLPPotential, equipmentCode);
          };
          /********************************
           * Product Structure Business API
           *******************************/
          ConfigurationControlService.prototype.getADCompliance = function(input) {
            return _super.prototype.post.call(this, this.productStructureBusinessApi.getADCompliance, input);
          };
          ConfigurationControlService.prototype.getStatusMap = function(input) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.initializeOperationalStatusList,
              input
            );
          };
          ConfigurationControlService.prototype.fetchGroundEquipmentFunctionList = function() {
            return _super.prototype.post.call(this, this.assetManagementApi.fetchGroundEquipmentFunctionList);
          };
          ConfigurationControlService.prototype.createWorkPackage = function(input) {
            return _super.prototype.post.call(this, this.workOrderManagementApi.create, input);
          };
          ConfigurationControlService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_18__['AppConfigService'],
                _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_5__['AircraftMaintenanceApi'],
                _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_6__['AirworthinessManagementApi'],
                _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_7__['AMProjectManagementApi'],
                _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_8__['AssetManagementApi'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_9__['BidtWarehouseApi'],
                _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_10__['FleetBusinessApi'],
                _shared_api_fleet_history_api__WEBPACK_IMPORTED_MODULE_11__['FleetHistoryApi'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_12__['FleetManagementApi'],
                _shared_api_product_structure_business_api__WEBPACK_IMPORTED_MODULE_13__['ProductStructureBusinessApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_14__[
                  'ProductStructureManagementApi'
                ],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_19__['SerializationService'],
                _shared_api_work_order_management_api__WEBPACK_IMPORTED_MODULE_4__['WorkOrderManagementApi'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_20__['TabService']
              ])
            ],
            ConfigurationControlService
          );
          return ConfigurationControlService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_17__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/dialog-help/dialog-help.component.html':
      /*!***********************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/dialog-help/dialog-help.component.html ***!
  \***********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="60">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="section">\r\n      <h4 class="section-title marginClass">\r\n        <b>{{ getComponentName() + ".checkFailureCauses" | translate }}</b>\r\n      </h4>\r\n      <div class="section-content">\r\n        <div style="text-align:center">\r\n          <b>{{ getComponentName() + ".failureMismatchHeader" | translate }}</b>\r\n        </div>\r\n        <br />\r\n\r\n        <!-- FAILURE MISMATCH -->\r\n        <div *ngFor="let key of getKeys(failureMismatchLabelCodeMap)">\r\n          <div class="row">\r\n            <span class="widthClass">\r\n              <label class="form-label">{{ key }}</label>\r\n            </span>\r\n            <label class="form-label">{{\r\n              getComponentName() + "." + failureMismatchLabelCodeMap[key] | translate\r\n            }}</label>\r\n          </div>\r\n        </div>\r\n        <br />\r\n\r\n        <!-- FAILURE WARNING -->\r\n        <div style="text-align:center">\r\n          <b>{{ getComponentName() + ".failureWarningHeader" | translate }}</b>\r\n        </div>\r\n        <br />\r\n        <div *ngFor="let key of getKeys(failureWarningLabelCodeMap)">\r\n          <div class="row">\r\n            <span class="widthClass">\r\n              <label class="form-label">{{ key }}</label>\r\n            </span>\r\n            <label class="form-label">{{\r\n              getComponentName() + "." + failureWarningLabelCodeMap[key] | translate\r\n            }}</label>\r\n          </div>\r\n        </div>\r\n        <br />\r\n\r\n        <!-- FAILURE OTHER CODES -->\r\n        <div style="text-align:center">\r\n          <b>{{ getComponentName() + ".failureOtherHeader" | translate }}</b>\r\n        </div>\r\n        <br />\r\n        <div *ngFor="let key of getKeys(failureOtherLabelCodeMap)">\r\n          <div class="row">\r\n            <span class="widthClass">\r\n              <label class="form-label">{{ key }}</label>\r\n            </span>\r\n            <label class="form-label">{{ getComponentName() + "." + failureOtherLabelCodeMap[key] | translate }}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- OTHER ERROR -->\r\n    <div class="section">\r\n      <h4 class="section-title marginClass">\r\n        <b>{{ getComponentName() + ".otherErrorTypes" | translate }}</b>\r\n      </h4>\r\n      <div class="section-content">\r\n        <div *ngFor="let key of getKeys(failureOtherErrorLabelCodeMap)">\r\n          <div class="row">\r\n            <span class="widthClass">\r\n              <label class="form-label">{{ key }}</label>\r\n            </span>\r\n            <label class="form-label">{{\r\n              getComponentName() + "." + failureOtherErrorLabelCodeMap[key] | translate\r\n            }}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/dialog-help/dialog-help.component.scss':
      /*!***********************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/dialog-help/dialog-help.component.scss ***!
  \***********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.widthClass {\n  width: 15em;\n  padding-bottom: 3px; }\n\n.marginClass {\n  margin-left: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb25maWd1cmF0aW9uLWNvbnRyb2wvZGlhbG9nLWhlbHAvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXG1haW50ZW5hbmNlXFxjb25maWd1cmF0aW9uLWNvbnRyb2xcXGRpYWxvZy1oZWxwXFxkaWFsb2ctaGVscC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvY29uZmlndXJhdGlvbi1jb250cm9sL2RpYWxvZy1oZWxwL2RpYWxvZy1oZWxwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZHRoQ2xhc3Mge1xyXG4gIHdpZHRoOiAxNWVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5tYXJnaW5DbGFzcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/dialog-help/dialog-help.component.ts':
      /*!*********************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/dialog-help/dialog-help.component.ts ***!
  \*********************************************************************************************/
      /*! exports provided: DialogHelpComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DialogHelpComponent', function() {
          return DialogHelpComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
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

        var DialogHelpComponent = /** @class */ (function(_super) {
          __extends(DialogHelpComponent, _super);
          function DialogHelpComponent(translateService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read,
                'DialogHelpComponent'
              ) || this;
            _this.translateService = translateService;
            _this.failureMismatchLabelCodeMap = new Object();
            _this.failureWarningLabelCodeMap = new Object();
            _this.failureOtherLabelCodeMap = new Object();
            _this.failureOtherErrorLabelCodeMap = new Object();
            return _this;
          }
          DialogHelpComponent_1 = DialogHelpComponent;
          DialogHelpComponent.prototype.ngOnInit = function() {
            this.init();
          };
          /*************************************************************************
           * INIT
           *************************************************************************/
          DialogHelpComponent.prototype.init = function() {
            this.failureMismatchLabelCodeMap = new Object();
            this.failureWarningLabelCodeMap = new Object();
            this.failureOtherLabelCodeMap = new Object();
            this.failureOtherErrorLabelCodeMap = new Object();
            this.setMapForMismatchCodes();
            this.setMapForWarningCodes();
            this.setMapForOtherLabelCodes();
            this.setMapForOtherErrorCodes();
          };
          /*************************************************************************
           * SET MAP FOR MISMATCH CODES
           *************************************************************************/
          DialogHelpComponent.prototype.setMapForMismatchCodes = function() {
            var _this = this;
            DialogHelpComponent_1.FAILURE_CONFIG_MISMATCH_CODES.forEach(function(code, index) {
              _this.failureMismatchLabelCodeMap[code] = DialogHelpComponent_1.FAILURE_CONFIG_MISMATCH_LABEL[index];
            });
          };
          /*************************************************************************
           * SET MAP FOR WARNING CODES
           *************************************************************************/
          DialogHelpComponent.prototype.setMapForWarningCodes = function() {
            var _this = this;
            DialogHelpComponent_1.FAILURE_CONFIG_WARNING_CODES.forEach(function(code, index) {
              _this.failureWarningLabelCodeMap[code] = DialogHelpComponent_1.FAILURE_CONFIG_WARNING_LABEL[index];
            });
          };
          /*************************************************************************
           * SET MAP FOR OTHER LABEL CODES
           *************************************************************************/
          DialogHelpComponent.prototype.setMapForOtherLabelCodes = function() {
            var _this = this;
            DialogHelpComponent_1.FAILURE_CONFIG_OTHER_CODES.forEach(function(code, index) {
              _this.failureOtherLabelCodeMap[code] = DialogHelpComponent_1.FAILURE_CONFIG_OTHER_LABEL[index];
            });
          };
          /*************************************************************************
           * SET MAP FOR OTHER ERROR CODES
           *************************************************************************/
          DialogHelpComponent.prototype.setMapForOtherErrorCodes = function() {
            var _this = this;
            DialogHelpComponent_1.OTHER_ERROR_CODES.forEach(function(code, index) {
              _this.failureOtherErrorLabelCodeMap[code] = DialogHelpComponent_1.OTHER_ERROR_LABEL[index];
            });
          };
          /*************************************************************************
           * FETCH OBJECT KEYS
           *************************************************************************/
          DialogHelpComponent.prototype.getKeys = function(obj) {
            return Object.keys(obj);
          };
          var DialogHelpComponent_1;
          DialogHelpComponent.FAILURE_CONFIG_MISMATCH_CODES = [
            'CONF_E0',
            'CONF_E1',
            'CONF_E2',
            'CONF_E3',
            'CONF_E4',
            'CONF_E5',
            'CONF_E6',
            'CONF_E7',
            'CONF_E8'
          ];
          DialogHelpComponent.FAILURE_CONFIG_MISMATCH_LABEL = [
            'MSG_ERROR_CONFIGURATION_CONTROL_0',
            'MSG_ERROR_CONFIGURATION_CONTROL_1',
            'MSG_ERROR_CONFIGURATION_CONTROL_2',
            'MSG_ERROR_CONFIGURATION_CONTROL_3',
            'MSG_ERROR_CONFIGURATION_CONTROL_4',
            'MSG_ERROR_CONFIGURATION_CONTROL_5',
            'MSG_ERROR_CONFIGURATION_CONTROL_6',
            'MSG_ERROR_CONFIGURATION_CONTROL_7',
            'MSG_ERROR_CONFIGURATION_CONTROL_8'
          ];
          DialogHelpComponent.FAILURE_CONFIG_WARNING_CODES = ['CONF_W0', 'CONF_W1', 'CONF_W2', 'CONF_W3'];
          DialogHelpComponent.FAILURE_CONFIG_WARNING_LABEL = [
            'MSG_WARNING_CONFIGURATION_CONTROL_0',
            'MSG_WARNING_CONFIGURATION_CONTROL_1',
            'MSG_WARNING_CONFIGURATION_CONTROL_2',
            'MSG_WARNING_CONFIGURATION_CONTROL_3'
          ];
          DialogHelpComponent.FAILURE_CONFIG_OTHER_CODES = ['CAL', 'POT'];
          DialogHelpComponent.FAILURE_CONFIG_OTHER_LABEL = [
            'MSG_CALENDER_LIMIT_REACHED',
            'MSG_LIMIT_POTENTIAL_REACHED'
          ];
          DialogHelpComponent.OTHER_ERROR_CODES = [
            'REF',
            'QTY',
            'RATING',
            'MEL',
            'FL-QTY',
            'FL-MODEL',
            'FL-FUNCTION',
            'FL-VARIANT	'
          ];
          DialogHelpComponent.OTHER_ERROR_LABEL = [
            'MSG_ASSET_REFRENTIAL_DATA',
            'MSG_ASSET_QUANTITY',
            'MSG_DIFF_ENGINE_RATING',
            'MSG_EQUIP_FROM_MEL',
            'MSG_DIFF_BETWEEN_ASSET_QUANTITY_AND_FL_QUANTITY',
            'MSG_DIFF_BETWEEN_ASSET_QUANTITY_AND_FL_MODELS',
            'MSG_DIFF_BETWEEN_ASSET_QUANTITY_AND_FL_FUNCTION',
            'MSG_DIFF_BETWEEN_ASSET_QUANTITY_AND_FL_VARIANTS'
          ];
          DialogHelpComponent = DialogHelpComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-help',
                template: __webpack_require__(
                  /*! ./dialog-help.component.html */ './src/app/main/maintenance/configuration-control/dialog-help/dialog-help.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-help.component.scss */ './src/app/main/maintenance/configuration-control/dialog-help/dialog-help.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']])
            ],
            DialogHelpComponent
          );
          return DialogHelpComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/dialog-work-order/dialog-work-order.component.html':
      /*!***********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/dialog-work-order/dialog-work-order.component.html ***!
  \***********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" width="70">\r\n  <a-header>\r\n    <div class="modal-title" *ngIf="mvtWay === bidtStockMvtConstants.MVT_WAY_DEBIT">\r\n      {{ getComponentName() + ".titleInstall" | translate }} {{ displayWoItem }}\r\n    </div>\r\n    <div class="modal-title" *ngIf="mvtWay === bidtStockMvtConstants.MVT_WAY_CREDIT">\r\n      {{ getComponentName() + ".titleRemove" | translate }} {{ displayWoItem }}\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="grid-row">\r\n      <div class="grid-cell--6">\r\n        <div class="grid-cell-header">\r\n          <div class="grid-cell-title-container loading-indicator">\r\n            <h3 class="grid-cell-title">\r\n              <span>{{ "global.workPackage" | translate }}</span>\r\n            </h3>\r\n          </div>\r\n        </div>\r\n        <div class="grid-cell grid-cell--container grid-cell-scope">\r\n          <div class="aw-table-actions" style="float: right;">\r\n            <button\r\n              *ngIf="bidmProjectDtos.length > 0"\r\n              type="button"\r\n              mat-raised-button\r\n              [ngClass]="{ active: workPackageListToAddVisible }"\r\n              (click)="opWorkPackageToAdd.toggle($event)"\r\n            >\r\n              {{ getComponentName() + ".addToWP" | translate }} &nbsp;\r\n              <i class="fa fa-fw fa-chevron-down" aria-hidden="true"></i>\r\n            </button>\r\n\r\n            <button type="button" mat-raised-button (click)="resetWP()">\r\n              {{ getComponentName() + ".createWP" | translate }}\r\n            </button>\r\n          </div>\r\n\r\n          <div class="row" *ngIf="displayName">\r\n            <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n              <label class="form-label">{{ "global.name" | translate }}</label>\r\n\r\n              <div class="form-control">\r\n                <input\r\n                  name="name"\r\n                  type="text"\r\n                  class="aw-input"\r\n                  [disabled]="woManagementInputDTO.projectId"\r\n                  [(ngModel)]="woManagementInputDTO.projectName"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="row" *ngIf="displayMroCenter">\r\n            <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n              <label class="form-label">{{ "global.mroCenter" | translate }}</label>\r\n\r\n              <div class="form-control">\r\n                <p-dropdown\r\n                  name="mroCenter"\r\n                  class="aw-dropdown fixed-width"\r\n                  [options]="mroCenterList"\r\n                  [(ngModel)]="woManagementInputDTO.projectMroCenterCode"\r\n                  [disabled]="woManagementInputDTO.projectId"\r\n                  [showClear]="true"\r\n                  placeholder="&nbsp;"\r\n                  appendTo="body"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="row" *ngIf="displayAssignedTo">\r\n            <div class="form-group">\r\n              <label class="form-label">{{ "global.assignedTo" | translate }}</label>\r\n\r\n              <div class="form-control">\r\n                <p-dropdown\r\n                  name="assignedTo"\r\n                  class="aw-dropdown fixed-width"\r\n                  [options]="userList"\r\n                  [showClear]="true"\r\n                  [(ngModel)]="woManagementInputDTO.projectAssignedTo"\r\n                  [disabled]="woManagementInputDTO.projectId"\r\n                  placeholder="&nbsp;"\r\n                  appendTo="body"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="row">\r\n            <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n              <label class="form-label">{{ "global.type" | translate }}</label>\r\n\r\n              <div class="form-control">\r\n                <p-dropdown\r\n                  name="type"\r\n                  class="aw-dropdown fixed-width"\r\n                  [options]="typeList"\r\n                  [showClear]="true"\r\n                  [(ngModel)]="woManagementInputDTO.projectType"\r\n                  [disabled]="woManagementInputDTO.projectId"\r\n                  placeholder="&nbsp;"\r\n                  appendTo="body"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="row" *ngIf="displayOperation">\r\n            <div class="form-group">\r\n              <label class="form-label">{{ "global.operation" | translate }}</label>\r\n\r\n              <div class="form-control">\r\n                <p-dropdown\r\n                  name="operation"\r\n                  class="aw-dropdown fixed-width"\r\n                  [options]="operationList"\r\n                  [showClear]="true"\r\n                  [(ngModel)]="woManagementInputDTO.projectOperationCode"\r\n                  [disabled]="woManagementInputDTO.projectId"\r\n                  placeholder="&nbsp;"\r\n                  appendTo="body"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="row" *ngIf="displayStartDate || displayDueDate">\r\n            <div *ngIf="displayStartDate" class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n              <label class="form-label">{{ "global.startDate" | translate }}</label>\r\n\r\n              <div class="form-control">\r\n                <p-calendar\r\n                  name="startDate"\r\n                  class="aw-calendar"\r\n                  [(ngModel)]="woManagementInputDTO.projectStartDate"\r\n                  [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                  [locale]="sessionService.calendarFormat"\r\n                  [showTime]="true"\r\n                  [disabled]="woManagementInputDTO.projectId"\r\n                  appendTo="body"\r\n                ></p-calendar>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf="displayDueDate" class="form-group">\r\n              <label class="form-label">{{ "global.dueDate" | translate }}</label>\r\n\r\n              <div class="form-control">\r\n                <p-calendar\r\n                  name="dueDate"\r\n                  class="aw-calendar"\r\n                  [(ngModel)]="woManagementInputDTO.projectDueDate"\r\n                  [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                  [locale]="sessionService.calendarFormat"\r\n                  [disabled]="woManagementInputDTO.projectId"\r\n                  [showTime]="true"\r\n                  appendTo="body"\r\n                ></p-calendar>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="row" *ngIf="displayDescription">\r\n            <div class="form-group">\r\n              <label class="form-label">{{ "global.description" | translate }}</label>\r\n\r\n              <div class="form-control">\r\n                <textarea\r\n                  class="aw-textarea"\r\n                  [rows]="3"\r\n                  pInputTextarea\r\n                  [(ngModel)]="woManagementInputDTO.projectDescription"\r\n                  [disabled]="woManagementInputDTO.projectId"\r\n                ></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="grid-cell--6">\r\n        <div class="grid-cell-header">\r\n          <div class="grid-cell-title-container loading-indicator">\r\n            <h3 class="grid-cell-title">\r\n              <span>{{ getComponentName() + ".workOrder" | translate }}</span>\r\n            </h3>\r\n          </div>\r\n        </div>\r\n        <div class="grid-cell grid-cell--container grid-cell-scope">\r\n          <div class="row">\r\n            <div class="form-group">\r\n              <label class="form-label">{{ "global.description" | translate }}</label>\r\n\r\n              <div class="form-control">\r\n                <textarea\r\n                  class="aw-textarea"\r\n                  [rows]="3"\r\n                  pInputTextarea\r\n                  [(ngModel)]="woManagementInputDTO.woDescription"\r\n                ></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="row" *ngIf="mvtWay === bidtStockMvtConstants.MVT_WAY_DEBIT">\r\n            <div class="form-group">\r\n              <label class="form-label">\r\n                {{ getComponentName() + ".assetCode" | translate }}\r\n              </label>\r\n\r\n              <div class="form-control form-control-with-btn" [ngClass]="{ disabled: isReadOpenMode }">\r\n                <input type="text" class="aw-input" [(ngModel)]="woAssetCode" />\r\n                <i\r\n                  class="fa fa-fw fa-search aw-icon"\r\n                  aria-hidden="true"\r\n                  pTooltip="{{ \'global.search\' | translate }}"\r\n                  tooltipPosition="top"\r\n                  (click)="addAsset()"\r\n                ></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="row" *ngIf="mvtWay === bidtStockMvtConstants.MVT_WAY_CREDIT">\r\n            <div class="form-group">\r\n              <label class="form-label">\r\n                {{ getComponentName() + ".workshop" | translate }}\r\n              </label>\r\n\r\n              <div class="form-control">\r\n                <p-dropdown\r\n                  class="aw-dropdown fixed-width"\r\n                  [options]="warehouseList"\r\n                  [(ngModel)]="woManagementInputDTO.movementWarehouseId"\r\n                  placeholder="&nbsp;"\r\n                  [showClear]="true"\r\n                  appendTo="body"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="row">\r\n            <div class="form-group">\r\n              <label class="form-label">\r\n                {{ getComponentName() + ".asset" | translate }}\r\n              </label>\r\n              <div class="form-control" [ngClass]="{ disabled: isReadOpenMode }">\r\n                {{ assetRepresentation }}\r\n              </div>\r\n              <div class="form-control" [ngClass]="{ disabled: isReadOpenMode }">\r\n                {{ woAssetDesignation }}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="section" *ngIf="mvtWay === bidtStockMvtConstants.MVT_WAY_DEBIT">\r\n            <h4 class="section-title">\r\n              {{ getComponentName() + ".task" | translate }}\r\n            </h4>\r\n            <div class="section-content">\r\n              <div class="row">\r\n                <div class="form-group">\r\n                  <label class="form-label">\r\n                    {{ getComponentName() + ".taskCode" | translate }}\r\n                  </label>\r\n                  <div *ngIf="!isUpdateMode" class="form-control form-control-with-modal">\r\n                    <div class="form-control-data" (click)="openTaskDialog()">\r\n                      {{ woManagementInputDTO.woTaskCode }}\r\n                    </div>\r\n                    <div class="btn-search-wrapper">\r\n                      <i\r\n                        class="fa fa-fw fa-search aw-icon btn-search"\r\n                        aria-hidden="true"\r\n                        (click)="openTaskDialog()"\r\n                      ></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ getComponentName() + ".taskVersion" | translate }}</label>\r\n\r\n                  <div class="form-control">\r\n                    <input\r\n                      name="taskVersion"\r\n                      type="text"\r\n                      class="aw-input"\r\n                      [(ngModel)]="woManagementInputDTO.woTaskVersion"\r\n                      [disabled]="true"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class="form-group flex--2">\r\n                  <label class="form-label">{{ getComponentName() + ".taskDesignation" | translate }}</label>\r\n\r\n                  <div class="form-control">\r\n                    <input\r\n                      name="taskDesignation"\r\n                      type="text"\r\n                      class="aw-input"\r\n                      [title]="taskDesignation"\r\n                      [(ngModel)]="taskDesignation"\r\n                      [disabled]="true"\r\n                    />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">{{ "global.cancel" | translate }}</button>\r\n\r\n    <button type="button" mat-raised-button color="primary" [disabled]="!isValid()" (click)="validate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-equipment\r\n  *ngIf="dialogAddAssetVisible"\r\n  [(display)]="dialogAddAssetVisible"\r\n  [selectionMultiple]="false"\r\n  [isGroundEquipment]="isGroundEquipment"\r\n  [equipmentFunction]="equipmentFunctionToSearch"\r\n  (onSelected)="setSelectedAsset($event)"\r\n></aw-dialog-search-equipment>\r\n\r\n<aw-dialog-search-task\r\n  *ngIf="displayTaskDialog"\r\n  [(display)]="displayTaskDialog"\r\n  [familyCode]="familyCode"\r\n  [variantCode]="variantCode"\r\n  (onSelected)="onSelectedTask($event)"\r\n>\r\n</aw-dialog-search-task>\r\n\r\n<p-overlayPanel\r\n  #opWorkPackageToAdd\r\n  (onShow)="workPackageListToAddVisible = true"\r\n  (onHide)="workPackageListToAddVisible = false"\r\n>\r\n  <aw-work-package-list\r\n    [addToVisible]="true"\r\n    [workPackageList]="bidmProjectDtos"\r\n    [workPackageStatusList]="workPackageStatusList"\r\n    (onAddTo)="opWorkPackageToAdd.hide(); workPackageListToAddVisible = false; addToWorkPackage($event)"\r\n  >\r\n  </aw-work-package-list>\r\n</p-overlayPanel>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/dialog-work-order/dialog-work-order.component.scss':
      /*!***********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/dialog-work-order/dialog-work-order.component.scss ***!
  \***********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .warning-messages {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #595959;\n  padding: 8px;\n  margin-bottom: 1rem; }\n  :host .warning-messages .warning-messages__header {\n    color: #fba643; }\n  :host .warning-messages .warning-messages__header > i {\n      font-size: 1rem;\n      margin-right: calc(8px / 2); }\n  :host .warning-messages ul {\n    margin-bottom: 0;\n    padding-left: calc(8px * 3); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb25maWd1cmF0aW9uLWNvbnRyb2wvZGlhbG9nLXdvcmstb3JkZXIvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXG1haW50ZW5hbmNlXFxjb25maWd1cmF0aW9uLWNvbnRyb2xcXGRpYWxvZy13b3JrLW9yZGVyXFxkaWFsb2ctd29yay1vcmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb25maWd1cmF0aW9uLWNvbnRyb2wvZGlhbG9nLXdvcmstb3JkZXIvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb25maWd1cmF0aW9uLWNvbnRyb2wvZGlhbG9nLXdvcmstb3JkZXIvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ2VFLGFBQWE7RUFDYixzQkFBc0I7RURacEIseUJFSjBCO0VGSzFCLFlFb0NjO0VGbkNkLG1CQUFtQixFQUFBO0VBTnZCO0lBU00sY0VrQnVCLEVBQUE7RUYzQjdCO01BWVEsZUFBZTtNQUNmLDJCQUF3QyxFQUFBO0VBYmhEO0lBa0JNLGdCQUFnQjtJQUNoQiwyQkFBd0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvY29uZmlndXJhdGlvbi1jb250cm9sL2RpYWxvZy13b3JrLW9yZGVyL2RpYWxvZy13b3JrLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLndhcm5pbmctbWVzc2FnZXMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgcGFkZGluZzogJG1hcmdpbi12YWx1ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgLndhcm5pbmctbWVzc2FnZXNfX2hlYWRlciB7XHJcbiAgICAgIGNvbG9yOiAkY3JpdGljYWwtdmFsdWUtZGFyaztcclxuXHJcbiAgICAgICYgPiBpIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBVdGlscyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gYnV0dG9uLWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCAkY29sb3IsICRib3JkZXItY29sb3I6IG51bGwpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICBjb2xvcjogJGNvbG9yO1xyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyLFxyXG4gICY6bm90KDpkaXNhYmxlZCkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIGJvcmRlci1jb2xvcjogaWYoJGJvcmRlci1jb2xvciA9PSBudWxsLCAkY29sb3IsICRib3JkZXItY29sb3IpO1xyXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgtY29sdW1uKCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1peGluIGZsZXgtcm93KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuQG1peGluIGlucHV0KCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcblxyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1kaXNhYmxlZCgpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZm9jdXMoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1ob3ZlcigpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlYXJjaC1jcml0ZXJpYS1jb250YWluZXIge1xyXG4gIC5hZHZhbmNlZC1jcml0ZXJpYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWNyaXRlcmlhLWZvb3RlciB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC8gMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgLmF3LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNCk7XHJcblxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgICYucmVxdWlyZWQge1xyXG4gICAgICBAaW5jbHVkZSBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCgpO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWxlcnQge1xyXG4gICAgICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAmID4gYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1vdmVyZmxvdy1oaWRkZW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHcmlkIGZvcm0gY29udHJvbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViTWVkaXVtXCI7XHJcblxyXG4gICYgPiBpbnB1dCArIHAtbWVzc2FnZSA+IC51aS1tZXNzYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6Zm9jdXMsXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYigyNTUsIDI1NSwgMjU1KSA2MCUsIHRyYW5zcGFyZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICAuYXctaWNvbiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuLFxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG5cclxuICAgICAgJi5hdy1jYWxlbmRhciAudWktaW5wdXR0ZXh0LFxyXG4gICAgICAmLmF3LWRyb3Bkb3duIC51aS1kcm9wZG93bixcclxuICAgICAgJi5hdy1pbnB1dCxcclxuICAgICAgJi5hdy10ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctY2FsZW5kYXIge1xyXG4gICAgICAvLyBGSVhNRTogZml4IGFuIFVJIGlzc3VlIG9uIFByaW1lTkcgY2FsZW5kYXIgY29tcG9uZW50OyB0byByZW1vdmUgd2hlbiBpc3N1ZSB3aWxsIGJlIGZpeGVkIHVwc3RyZWFtXHJcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAuYXctaWNvbjpub3QoLnJlYWQtb25seS1saW5rKSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IC8vIG5vbmVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wtZGF0YSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gICAgICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLW5pbXAsXHJcbiAgICAuYnRuLWV4dGVybmFsLWxpbmstd3JhcHBlcixcclxuICAgIC5idG4tY2xlYXItd3JhcHBlcixcclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlcixcclxuICAgIC5idG4tc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIge1xyXG4gICAgICAuYXctZmlsZXVwbG9hZCB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudWktYnV0dG9uIHtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZTkzNFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLWNsZWFyIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLXNlYXJjaCB7XHJcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtcmFkaW9idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAmID4gLmF3LXJhZGlvYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDIgKiAjeyRtYXJnaW4tdmFsdWV9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1nZW5lcmljIHtcclxuICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuXHJcbiAgJiA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuYWxlcnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jYWxlbmRhciB7XHJcbiAgJi51aS1pbnB1dHdyYXBwZXItZm9jdXMge1xyXG4gICAgLnVpLWNhbGVuZGFyIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNoZWNrYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkY2hlY2tib3gtaGVpZ2h0O1xyXG4gIHdpZHRoOiAkY2hlY2tib3gtaGVpZ2h0O1xyXG5cclxuICAudWktY2hrYm94IHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1jaGtib3gtYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZHJvcGRvd24ge1xyXG4gIC51aS1kcm9wZG93biB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1mb2N1cyB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbixcclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24ge1xyXG4gICAgICByaWdodDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3ctaGlkZGVuKCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMiAqIDEuNzVyZW0pO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5maXhlZC13aWR0aCAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZpbGV1cGxvYWQge1xyXG4gIEBleHRlbmQgLmF3LWJ0bjtcclxuXHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLnVpLWZpbGV1cGxvYWQtY2hvb3NlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMCAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudWktYnV0dG9uLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWlucHV0KCkge1xyXG4gIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmZvY3VzIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZXh0YXJlYSB7XHJcbiAgQGluY2x1ZGUgZ3JpZC1pbnB1dCgpO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4taGVpZ2h0OiAkZm9ybS1jb250cm9sLWhlaWdodDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1yYWRpb2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuICB3aWR0aDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuXHJcbiAgLnVpLXJhZGlvYnV0dG9uIHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1yYWRpb2J1dHRvbi1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cclxuICAgICAgICAudWktcmFkaW9idXR0b24taWNvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGNhbGVuZGFyLXBhbmVsIHtcclxuICAudWktZGF0ZXBpY2tlcjpub3QoLnVpLWRhdGVwaWNrZXItaW5saW5lKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkcm9wZG93bi1wYW5lbCB7XHJcbiAgLnVpLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHJcbiAgICAudWktZHJvcGRvd24taXRlbXMtd3JhcHBlciAudWktZHJvcGRvd24tbGlzdCB7XHJcbiAgICAgIC51aS1kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi51aS1zdGF0ZS1oaWdobGlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/dialog-work-order/dialog-work-order.component.ts':
      /*!*********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/dialog-work-order/dialog-work-order.component.ts ***!
  \*********************************************************************************************************/
      /*! exports provided: WPType, DialogWorkOrderCreationComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'WPType', function() {
          return WPType;
        });
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogWorkOrderCreationComponent',
          function() {
            return DialogWorkOrderCreationComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! moment */ './node_modules/moment/moment.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          moment__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/constants/bidt-stock-mvt-constants */ './src/app/shared/constants/bidt-stock-mvt-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_bire_item_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/utils/bire-item-utils */ './src/app/shared/utils/bire-item-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/utils/select-item-utils */ './src/app/shared/utils/select-item-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _dialog_work_order_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./dialog-work-order.service */ './src/app/main/maintenance/configuration-control/dialog-work-order/dialog-work-order.service.ts'
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

        var WPType;
        (function(WPType) {
          WPType[(WPType['ACRS'] = 1)] = 'ACRS';
          WPType[(WPType['GO_NO_GO'] = 2)] = 'GO_NO_GO';
        })(WPType || (WPType = {}));
        var DialogWorkOrderCreationComponent = /** @class */ (function(_super) {
          __extends(DialogWorkOrderCreationComponent, _super);
          function DialogWorkOrderCreationComponent(
            sessionService,
            dialogWorkPackageService,
            messageService,
            propertiesService,
            translateService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Write,
                'DialogWorkOrderCreationComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.dialogWorkPackageService = dialogWorkPackageService;
            _this.messageService = messageService;
            _this.propertiesService = propertiesService;
            _this.translateService = translateService;
            _this.wpType = WPType.ACRS;
            _this.bidtStockMvtConstants =
              _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_5__['BidtStockMvtConstants'];
            _this.init();
            _this.loadMroCenterList();
            _this.loadOperationList();
            _this.loadStatusList();
            _this.loadTypeList();
            _this.loadUserList();
            _this.loadWorkPackageStatusList();
            return _this;
          }
          DialogWorkOrderCreationComponent.prototype.ngOnInit = function() {
            this.fetchDefaultType();
            this.woManagementInputDTO.projectStartDate = this.startDate;
            this.getProjectList();
            if (this.woItemPk) {
              this.displayWoItem = _shared_utils_bire_item_utils__WEBPACK_IMPORTED_MODULE_12__[
                'BireItemUtils'
              ].createItemKey(this.woItemPk);
            }
            if (
              this.mvtWay ===
              _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_5__['BidtStockMvtConstants']
                .MVT_WAY_CREDIT
            ) {
              this.getWarehouseList();
            }
            this.initAssetRepresentation();
          };
          DialogWorkOrderCreationComponent.prototype.isValid = function() {
            return (
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__['StringUtils'].isNullOrEmpty(
                this.woManagementInputDTO.projectName
              ) &&
              !!this.woManagementInputDTO.projectStartDate &&
              !!this.woManagementInputDTO.projectType &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__['StringUtils'].isNullOrEmpty(
                this.woManagementInputDTO.projectMroCenterCode
              )
            );
          };
          DialogWorkOrderCreationComponent.prototype.validate = function() {
            if (
              this.woManagementInputDTO.projectStartDate &&
              this.woManagementInputDTO.projectDueDate &&
              moment__WEBPACK_IMPORTED_MODULE_2__(this.woManagementInputDTO.projectStartDate).isAfter(
                moment__WEBPACK_IMPORTED_MODULE_2__(this.woManagementInputDTO.projectDueDate)
              )
            ) {
              this.messageService.showWarningMessage(this.getComponentName() + '.errorOnDates');
            } else {
              this.woManagementInputDTO.movementWay = this.mvtWay;
              this.woManagementInputDTO.topAssetDtoId = this.topAssetDTOId;
              this.woManagementInputDTO.woItemDTOId = this.woItemPk;
              this.woManagementInputDTO.woFunctionCode = this.woFunctionCode;
              this.woManagementInputDTO.movementPnCode = this.woPn;
              this.woManagementInputDTO.movementSn = this.woSn;
              this.woManagementInputDTO.woPn = this.woPn;
              this.woManagementInputDTO.woSn = this.woSn;
              this.woManagementInputDTO.woFunctionCode = this.woFunctionCode;
              this.onValidated.emit({ woManagementInputDTO: this.woManagementInputDTO });
              this.closeDialog();
            }
          };
          DialogWorkOrderCreationComponent.prototype.init = function() {
            this.displayAssignedTo = true;
            this.displayDescription = true;
            this.displayDueDate = true;
            this.displayMroCenter = true;
            this.displayName = true;
            this.displayOperation = true;
            this.displayStartDate = true;
            this.displayStatus = true;
            this.displayWorkCenter = true;
            this.startDate = new Date();
            this.mroCenterList = [];
            this.operationList = [];
            this.selectedWorkCenter = undefined;
            this.typeList = [];
            this.statusList = [];
            this.userList = [];
            this.bidmProjectDtos = [];
            this.bidtWarehouseDTOs = [];
            this.woManagementInputDTO = {
              movementWay: this.mvtWay,
              topAssetDtoId: this.topAssetDTOId,
              woType:
                this.mvtWay ===
                _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_5__['BidtStockMvtConstants']
                  .MVT_WAY_DEBIT
                  ? _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                      .AIRM_WORK_ORDER_TYPE_MANUAL
                  : _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                      .AIRM_WORK_ORDER_TYPE_SN_CHANGE
            };
            this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          };
          DialogWorkOrderCreationComponent.prototype.loadMroCenterList = function() {
            var _this = this;
            /* this.dialogWorkPackageService.findAllMroCenter().subscribe((results) => {
          this.mroCenterList = !!results ? SelectItemUtils.fromLabelValues(results) : [];
        });*/
            this.dialogWorkPackageService.findAuthorizedBireSite().subscribe(function(results) {
              if (!!results) {
                results.forEach(function(elt) {
                  if (!!elt.label) {
                    elt.label = elt.value + '-' + elt.label;
                  }
                });
              }
              _this.mroCenterList = !!results
                ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_14__['SelectItemUtils'].fromLabelValues(
                    results
                  )
                : [];
            });
          };
          DialogWorkOrderCreationComponent.prototype.loadOperationList = function() {
            var _this = this;
            this.dialogWorkPackageService.findAllBidoOperation().subscribe(function(results) {
              _this.operationList = _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_14__[
                'SelectItemUtils'
              ].fromLabelValues(results);
            });
          };
          DialogWorkOrderCreationComponent.prototype.loadStatusList = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                  .AIRM_PROJECT_STATUS_MAP
              )
              .subscribe(function(results) {
                _this.statusList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__['ListUtils'].orEmpty(results);
              });
          };
          DialogWorkOrderCreationComponent.prototype.loadWorkPackageStatusList = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                  .AIRM_PROJECT_STATUS_MAP
              )
              .subscribe(function(results) {
                _this.workPackageStatusList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__[
                  'ListUtils'
                ].orEmpty(results);
              });
          };
          DialogWorkOrderCreationComponent.prototype.loadTypeList = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                  .WORK_PACKAGE_TYPE_MAP
              )
              .subscribe(function(results) {
                _this.typeList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__['ListUtils'].orEmpty(results);
              });
          };
          DialogWorkOrderCreationComponent.prototype.fetchDefaultType = function() {
            if (this.wpType) {
              this.woManagementInputDTO.projectType = '' + this.wpType;
            }
          };
          DialogWorkOrderCreationComponent.prototype.loadUserList = function() {
            var _this = this;
            this.dialogWorkPackageService
              .findBidoUsersWithUseCase(
                _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_4__['BidoFunctionTypeConstants']
                  .UC_AIRM_RECEPTION
              )
              .subscribe(function(results) {
                var resultUserList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__['ListUtils']
                  .orEmpty(results)
                  .map(function(result) {
                    var userName =
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__['StringUtils'].orEmpty(result.lastname) +
                      ' ' +
                      _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__['StringUtils'].orEmpty(result.firstname);
                    return {
                      label: userName.trim(),
                      value: result.userId
                    };
                  });
                _this.userList = resultUserList.sort(function(a, b) {
                  return a.label > b.label ? 1 : a.label < b.label ? -1 : 0;
                });
              });
          };
          // get data from server
          DialogWorkOrderCreationComponent.prototype.getWarehouseList = function() {
            var _this = this;
            if (this.woPn) {
              this.dialogWorkPackageService.findAllWarehouseByProduct(this.woPn).subscribe(function(results) {
                _this.bidtWarehouseDTOs = results;
                _this.warehouseList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__['ListUtils']
                  .orEmpty(results)
                  .filter(function(warehouse) {
                    return !!warehouse.whCode;
                  })
                  .map(function(warehouse) {
                    return {
                      label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__['StringUtils'].isNullOrEmpty(
                        warehouse.whName
                      )
                        ? warehouse.whCode
                        : warehouse.whCode + ' - ' + warehouse.whName,
                      value: warehouse.wareHouseId
                    };
                  });
              });
            }
          };
          DialogWorkOrderCreationComponent.prototype.getProjectList = function() {
            var _this = this;
            if (this.topAssetDTOId && this.topAssetDTOId.equipmentCode) {
              this.dialogWorkPackageService
                .findUnfinishedProjectByEquipmentCode(this.topAssetDTOId.equipmentCode)
                .subscribe(function(results) {
                  _this.bidmProjectDtos = results.filter(function(project) {
                    return (
                      project.statusState !==
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                        .AIRM_PROJECT_STATUS_CLOSE
                    );
                  });
                  _this.projectList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__['ListUtils']
                    .orEmpty(_this.bidmProjectDtos)
                    .map(function(project) {
                      return {
                        label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__['StringUtils'].isNullOrEmpty(
                          project.projectName
                        )
                          ? '' + project.projectNumber
                          : project.projectNumber + ' - ' + project.projectName,
                        value: project.projectId
                      };
                    });
                });
            }
          };
          DialogWorkOrderCreationComponent.prototype.addAsset = function() {
            this.dialogAddAssetVisible = true;
          };
          DialogWorkOrderCreationComponent.prototype.setSelectedAsset = function(event) {
            this.woAssetCode = event.equipmentCode;
            this.woPn = event.pnCode;
            this.woSn = event.sn;
            this.woAssetDesignation = event.equipmentDesignation;
            this.initAssetRepresentation();
          };
          DialogWorkOrderCreationComponent.prototype.openTaskDialog = function() {
            this.displayTaskDialog = true;
          };
          DialogWorkOrderCreationComponent.prototype.onSelectedTask = function(task) {
            this.woTaskDesignation = task.taskDesignation;
            this.woManagementInputDTO.woTaskCode = task.taskCode;
            this.woManagementInputDTO.woTaskVersion = task.taskVersion;
            this.woManagementInputDTO.woDescription = task.taskDescription;
            this.woManagementInputDTO.woType =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__[
                'AWPropertiesConstants'
              ].AIRM_WORK_ORDER_TYPE_TASK;
          };
          DialogWorkOrderCreationComponent.prototype.addToWorkPackage = function(workPackage) {
            this.woManagementInputDTO.projectId = workPackage.projectId;
            this.woManagementInputDTO.projectName = workPackage.projectName;
            this.woManagementInputDTO.projectMroCenterCode = workPackage.bireRepairCenterCode;
            this.woManagementInputDTO.projectAssignedTo = workPackage.receivingAssignedTo;
            this.woManagementInputDTO.projectType = workPackage.projectType;
            this.woManagementInputDTO.projectOperationCode = workPackage.bidoOperationCode;
            this.woManagementInputDTO.projectStartDate = workPackage.projectStartDate;
            this.woManagementInputDTO.projectDueDate = workPackage.projectDueDate;
            this.woManagementInputDTO.projectDescription = workPackage.projectDescription;
          };
          DialogWorkOrderCreationComponent.prototype.resetWP = function() {
            this.woManagementInputDTO.projectId = undefined;
            this.woManagementInputDTO.projectName = undefined;
            this.woManagementInputDTO.projectMroCenterCode = undefined;
            this.woManagementInputDTO.projectAssignedTo = undefined;
            this.woManagementInputDTO.projectType = undefined;
            this.woManagementInputDTO.projectOperationCode = undefined;
            this.woManagementInputDTO.projectStartDate = undefined;
            this.woManagementInputDTO.projectDueDate = undefined;
            this.woManagementInputDTO.projectDescription = undefined;
          };
          DialogWorkOrderCreationComponent.prototype.initAssetRepresentation = function() {
            var _this = this;
            if (this.woSn) {
              var pnDataKey_1 = 'global.pn';
              var snDataKey_1 =
                this.woAssetFunction ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_ENGINE_KEY
                  ? 'global.esn'
                  : 'global.sn';
              this.translateService.get([pnDataKey_1, snDataKey_1]).subscribe(function(results) {
                var pnLabel = !!results ? results[pnDataKey_1] : 'P/N';
                var snLabel = !!results ? results[snDataKey_1] : 'S/N';
                _this.assetRepresentation = '';
                if (_this.woPn) {
                  _this.assetRepresentation += pnLabel + ' ' + _this.woPn + ' ';
                }
                _this.assetRepresentation += snLabel + ' ' + _this.woSn;
              });
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogWorkOrderCreationComponent.prototype,
            'displayAssignedTo',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogWorkOrderCreationComponent.prototype,
            'displayDescription',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogWorkOrderCreationComponent.prototype,
            'displayDueDate',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogWorkOrderCreationComponent.prototype,
            'displayMroCenter',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogWorkOrderCreationComponent.prototype,
            'displayName',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogWorkOrderCreationComponent.prototype,
            'displayOperation',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogWorkOrderCreationComponent.prototype,
            'displayStartDate',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogWorkOrderCreationComponent.prototype,
            'displayStatus',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogWorkOrderCreationComponent.prototype,
            'displayWorkCenter',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogWorkOrderCreationComponent.prototype,
            'startDate',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogWorkOrderCreationComponent.prototype,
            'warningMessageList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogWorkOrderCreationComponent.prototype,
            'wpType',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogWorkOrderCreationComponent.prototype,
            'mvtWay',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogWorkOrderCreationComponent.prototype,
            'woPn',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogWorkOrderCreationComponent.prototype,
            'woSn',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogWorkOrderCreationComponent.prototype,
            'woAssetFunction',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogWorkOrderCreationComponent.prototype,
            'woAssetDesignation',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogWorkOrderCreationComponent.prototype,
            'woFunctionCode',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogWorkOrderCreationComponent.prototype,
            'woItemPk',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogWorkOrderCreationComponent.prototype,
            'topAssetDTOId',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogWorkOrderCreationComponent.prototype,
            'onValidated',
            void 0
          );
          DialogWorkOrderCreationComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-work-order-creation',
                template: __webpack_require__(
                  /*! ./dialog-work-order.component.html */ './src/app/main/maintenance/configuration-control/dialog-work-order/dialog-work-order.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-work-order.component.scss */ './src/app/main/maintenance/configuration-control/dialog-work-order/dialog-work-order.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__['SessionService'],
                _dialog_work_order_service__WEBPACK_IMPORTED_MODULE_16__['DialogWorkOrderCreationService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__['MessageService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__['PropertiesService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            DialogWorkOrderCreationComponent
          );
          return DialogWorkOrderCreationComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_11__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/dialog-work-order/dialog-work-order.service.ts':
      /*!*******************************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/dialog-work-order/dialog-work-order.service.ts ***!
  \*******************************************************************************************************/
      /*! exports provided: DialogWorkOrderCreationService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogWorkOrderCreationService',
          function() {
            return DialogWorkOrderCreationService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/am-project-management.api */ './src/app/shared/api/am-project-management.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-site.api */ './src/app/shared/api/bidt-site.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
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
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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

        var DialogWorkOrderCreationService = /** @class */ (function(_super) {
          __extends(DialogWorkOrderCreationService, _super);
          function DialogWorkOrderCreationService(
            http,
            appConfigService,
            fleetManagementApi,
            productStructureManagementApi,
            userProfileManagementApi,
            bidtSiteApi,
            bidtWarehouseApi,
            aMProjectManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.fleetManagementApi = fleetManagementApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.userProfileManagementApi = userProfileManagementApi;
            _this.bidtSiteApi = bidtSiteApi;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            _this.aMProjectManagementApi = aMProjectManagementApi;
            return _this;
          }
          /**************************************************************************
           * Fleet management api
           *************************************************************************/
          DialogWorkOrderCreationService.prototype.findAllBidoOperation = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoOperations);
          };
          /**************************************************************************
           * Product structure management api
           *************************************************************************/
          DialogWorkOrderCreationService.prototype.findAllBireSite = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireSite);
          };
          DialogWorkOrderCreationService.prototype.findAllMroCenter = function() {
            return _super.prototype.post.call(this, this.bidtSiteApi.findSiteByUsecaseCodeStockStatus);
          };
          DialogWorkOrderCreationService.prototype.findAuthorizedBireSite = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAuthorizedBireSite);
          };
          /**************************************************************************
           * User profile management api
           *************************************************************************/
          DialogWorkOrderCreationService.prototype.findBidoUsersWithUseCase = function(useCase) {
            return _super.prototype.post.call(this, this.userProfileManagementApi.findBidoUsersWithUseCase, useCase);
          };
          /**************************************************************************
           * Warehouse management api
           *************************************************************************/
          DialogWorkOrderCreationService.prototype.findAllWarehouseByProduct = function(pn) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findByProduct, pn);
          };
          /**************************************************************************
           * Project management api
           *************************************************************************/
          DialogWorkOrderCreationService.prototype.findUnfinishedProjectByEquipmentCode = function(equipmentCode) {
            return _super.prototype.post.call(
              this,
              this.aMProjectManagementApi.findUnfinishedProjectByEquipmentCode,
              equipmentCode
            );
          };
          DialogWorkOrderCreationService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__['AppConfigService'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_5__['FleetManagementApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_6__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_7__['UserProfileManagementApi'],
                _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_3__['BidtSiteApi'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_4__['BidtWarehouseApi'],
                _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_2__['AMProjectManagementApi']
              ])
            ],
            DialogWorkOrderCreationService
          );
          return DialogWorkOrderCreationService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/installation-equipment/installation-equipment.component.html':
      /*!*********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/installation-equipment/installation-equipment.component.html ***!
  \*********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<h4 class="section-title">\r\n  {{ getComponentName() + ".installation" | translate }}\r\n</h4>\r\n\r\n<div class="section-content">\r\n  <div class="row">\r\n    <div class="form-group">\r\n      <label class="form-label">\r\n        {{ getComponentName() + ".woCode" | translate }}\r\n      </label>\r\n\r\n      <div class="form-control">\r\n        <div class="form-control-generic">\r\n          <a (click)="openWorkOrder()">{{ workOrderCode }}</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group flex--2">\r\n      <label class="form-label">\r\n        {{ getComponentName() + ".woDescription" | translate }}\r\n      </label>\r\n\r\n      <div class="form-control">\r\n        <textarea\r\n          class="aw-textarea"\r\n          [rows]="2"\r\n          pInputTextarea\r\n          autoResize="autoResize"\r\n          [(ngModel)]="workOrderDescription"\r\n          [disabled]="true"\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row">\r\n    <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n      <label class="form-label">\r\n        {{ getComponentName() + ".date" | translate }}\r\n      </label>\r\n\r\n      <div class="form-control">\r\n        <p-calendar\r\n          showButtonBar="true"\r\n          [monthNavigator]="true"\r\n          [yearNavigator]="true"\r\n          [yearRange]="sessionService.calendarYearRange"\r\n          class="aw-calendar"\r\n          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n          [(ngModel)]="installationDate"\r\n          [showTime]="true"\r\n          appendTo="body"\r\n          [readonlyInput]="true"\r\n          [disabled]="stockMvt.bidoNotificationNotificationCode"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n      <label class="form-label">\r\n        {{ getComponentName() + ".newOperationalStatus" | translate }}\r\n      </label>\r\n\r\n      <div class="form-control">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          [options]="operationalStatusList"\r\n          [(ngModel)]="installationNewOperationalStatus"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n          [disabled]="stockMvt.bidoNotificationNotificationCode"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">\r\n        {{ getComponentName() + ".warehouse" | translate }}\r\n      </label>\r\n\r\n      <div class="form-control">\r\n        <div class="form-control-generic">\r\n          {{ installationWarehouseName }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row">\r\n    <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n      <label class="form-label">\r\n        {{ getComponentName() + ".superiorAsset" | translate }}\r\n      </label>\r\n\r\n      <div class="form-control">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          [options]="superiorAssetList"\r\n          [(ngModel)]="installationSuperiorAsset"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n          (onChange)="onChangeSuperiorAsset()"\r\n          [disabled]="stockMvt.bidoNotificationNotificationCode"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">\r\n        {{ getComponentName() + ".functionLocation" | translate }}\r\n      </label>\r\n\r\n      <div class="form-control">\r\n        <p-dropdown\r\n          *ngIf="!stockMvt.bidoNotificationNotificationCode"\r\n          class="aw-dropdown fixed-width"\r\n          [options]="functionLocationList"\r\n          [(ngModel)]="installationFunctionLocation"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n          (onChange)="onChangeFunctionLocation()"\r\n        ></p-dropdown>\r\n        <div class="form-control-generic" *ngIf="stockMvt.bidoNotificationNotificationCode">\r\n          {{ installationFunctionLocationName }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group" *ngIf="!stockMvt.bidoNotificationNotificationCode">\r\n      <label class="form-label">\r\n        {{ getComponentName() + ".item" | translate }}\r\n      </label>\r\n\r\n      <div class="form-control">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          [options]="itemList"\r\n          [(ngModel)]="installationItem"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n          (onChange)="onChangeItem()"\r\n          [disabled]="stockMvt.bidoNotificationNotificationCode"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class="form-group" *ngIf="stockMvt.bidoNotificationNotificationCode"></div>\r\n  </div>\r\n\r\n  <div class="row flex-row--justify-end">\r\n    <button type="button" mat-raised-button (click)="openEvent()" *ngIf="stockMvt.bidoNotificationNotificationCode">\r\n      {{ "openEvent" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="validate()"\r\n      class="btn-with-spinner"\r\n      color="primary"\r\n      *ngIf="!stockMvt.bidoNotificationNotificationCode"\r\n      [disabled]="!installationDate || !installationNewOperationalStatus || !installationSuperiorAsset"\r\n    >\r\n      <span class="lds-hourglass" *ngIf="saving"></span>\r\n      <span *ngIf="saving">&nbsp;</span>\r\n      {{ "validate" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/installation-equipment/installation-equipment.component.ts':
      /*!*******************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/installation-equipment/installation-equipment.component.ts ***!
  \*******************************************************************************************************************/
      /*! exports provided: InstallationEquipmentComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'InstallationEquipmentComponent',
          function() {
            return InstallationEquipmentComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! moment */ './node_modules/moment/moment.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          moment__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/types/generic-component */ './src/app/shared/types/generic-component.ts'
        );
        /* harmony import */ var _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/utils/bido-equipment-utils */ './src/app/shared/utils/bido-equipment-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _configuration_control_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../configuration-control.service */ './src/app/main/maintenance/configuration-control/configuration-control.service.ts'
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

        var InstallationEquipmentComponent = /** @class */ (function(_super) {
          __extends(InstallationEquipmentComponent, _super);
          function InstallationEquipmentComponent(
            messageService,
            sessionService,
            configurationControlService,
            propertiesService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Write
              ) || this;
            _this.messageService = messageService;
            _this.sessionService = sessionService;
            _this.configurationControlService = configurationControlService;
            _this.propertiesService = propertiesService;
            return _this;
          }
          Object.defineProperty(InstallationEquipmentComponent.prototype, 'assetStructureSelection', {
            get: function() {
              return this._assetStructureSelection;
            },
            set: function(value) {
              if (value) {
                this._assetStructureSelection = value;
                this.onBeforeLoad();
                this.stockMvt = this.assetStructureSelection.installedStockMvtData;
                this.onLoad();
              }
            },
            enumerable: true,
            configurable: true
          });
          InstallationEquipmentComponent.prototype.getComponentName = function() {
            return 'InstallationEquipmentComponent'; // TODO: use a constant
          };
          InstallationEquipmentComponent.prototype.ngOnInit = function() {
            this.onLoad();
          };
          InstallationEquipmentComponent.prototype.onBeforeLoad = function() {
            this.functionLocationList = [];
            this.installationDate = undefined;
            this.installationFunctionLocation = undefined;
            this.installationFunctionLocationName = '';
            this.installationItem = undefined;
            this.installationNewOperationalStatus = undefined;
            this.installationSuperiorAsset = undefined;
            this.installationWarehouseName = '';
            this.itemList = [];
            this.operationalStatusList = [];
            this.stockMvt = {};
            this.superiorAssetList = [];
            this.workOrder = undefined;
            this.workOrderCode = '';
            this.workOrderDescription = '';
            this.saving = false;
          };
          InstallationEquipmentComponent.prototype.onLoad = function() {
            this.setComponentOpenMode();
            this.loadOperationalStatusList();
            this.loadWarehouse();
            this.loadWorkOrder();
            if (this.stockMvt.bidoNotificationNotificationCode) {
              this.installationDate = this.stockMvt.stockMvtDate;
              this.loadFunctionLocationFromNotification();
              this.loadSuperiorAsset();
            } else {
              this.installationDate = new Date();
              this.loadSuperiorAssetList();
            }
          };
          // //////////////////////////////////////////////////////////////////////////
          InstallationEquipmentComponent.prototype.onChangeFunctionLocation = function() {
            if (
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_12__['ObjectUtils'].isDefined(
                this.installationFunctionLocation
              )
            ) {
              this.loadItemList();
            } else {
              this.installationItem = undefined;
            }
          };
          InstallationEquipmentComponent.prototype.onChangeItem = function() {
            if (
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_12__['ObjectUtils'].isDefined(this.installationItem)
            ) {
              this.loadFunctionLocationList();
            } else {
              this.installationFunctionLocation = undefined;
            }
          };
          InstallationEquipmentComponent.prototype.onChangeSuperiorAsset = function() {
            if (
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_12__['ObjectUtils'].isDefined(
                this.installationSuperiorAsset
              )
            ) {
              this.loadItemList();
            } else {
              this.functionLocationList = [];
              this.installationItem = undefined;
              this.installationFunctionLocation = undefined;
              this.itemList = [];
            }
          };
          InstallationEquipmentComponent.prototype.openEvent = function() {
            this.configurationControlService.openEvent(this.stockMvt.bidoNotificationNotificationCode);
          };
          InstallationEquipmentComponent.prototype.openWorkOrder = function() {
            this.configurationControlService.openWorkOrder(this.workOrder);
          };
          InstallationEquipmentComponent.prototype.validate = function() {
            var _this = this;
            if (
              this.installationDate &&
              moment__WEBPACK_IMPORTED_MODULE_1__(this.installationDate).isBefore(
                moment__WEBPACK_IMPORTED_MODULE_1__(this.workPackage.projectStartDate)
              )
            ) {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnSelectedDateAfterWpStartDate'));
            } else {
              this.saving = true;
              var input = {
                date: this.installationDate,
                hasFunctionCode: this.functionLocationList.length > 0,
                newOperationalStatus: this.installationNewOperationalStatus,
                selectedFl: this.installationFunctionLocation,
                selectedItem: this.installationItem,
                stockMvt: this.stockMvt,
                superiorAssetCode: this.installationSuperiorAsset.equipmentCode,
                workOrderCode: this.assetStructureSelection.workOrderId,
                workPackageCode: this.workPackage.projectId
              };
              this.configurationControlService
                .installEquipment(input)
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['finalize'])(function() {
                    _this.saving = false;
                  })
                )
                .subscribe(function(updatedStockMvt) {
                  _this.stockMvt = updatedStockMvt;
                  _this.assetStructureSelection.installedStockMvtData = _this.stockMvt;
                  _this.loadFunctionLocationFromNotification();
                  _this.setComponentOpenMode();
                  _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnInstallEquipment'));
                });
            }
          };
          InstallationEquipmentComponent.prototype.loadFunctionLocationFromNotification = function() {
            var _this = this;
            if (this.stockMvt.bidoNotificationNotificationCode) {
              this.configurationControlService
                .getFunctionLocationAtDate(
                  this.assetStructureSelection.bidoEquipment
                    ? this.assetStructureSelection.bidoEquipment.equipmentCode
                    : '',
                  this.stockMvt.bidoNotificationNotificationCode
                )
                .subscribe(function(flAtDate) {
                  _this.installationFunctionLocationName = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__[
                    'StringUtils'
                  ].orEmpty(flAtDate);
                });
            }
          };
          InstallationEquipmentComponent.prototype.loadFunctionLocationList = function() {
            var _this = this;
            if (
              this.assetStructureSelection.bidoEquipment &&
              this.installationSuperiorAsset &&
              this.installationSuperiorAsset.equipmentCode &&
              this.stockMvt.bidmWorkOrderWoId
            ) {
              var bireItemId = this.installationItem
                ? {
                    chapter: this.installationItem.chapter,
                    familyCode: this.installationItem.familyCode,
                    marks: this.installationItem.marks,
                    section: this.installationItem.section,
                    sheet: this.installationItem.sheet,
                    structureType: this.installationItem.structureType,
                    subject: this.installationItem.subject,
                    variantCode: this.installationItem.variantCode
                  }
                : undefined;
              var input = {
                date: this.installationDate,
                selectedItem: bireItemId,
                superiorAssetCode: this.installationSuperiorAsset.equipmentCode,
                workOrderCode: this.stockMvt.bidmWorkOrderWoId,
                workPackageCode: this.workPackage.projectId
              };
              this.configurationControlService
                .getFunctionLocationListToInstallEquipment(input)
                .subscribe(function(list) {
                  _this.functionLocationList = list;
                  if (list.length === 1) {
                    _this.installationFunctionLocation = list[0].value;
                  }
                });
            }
          };
          InstallationEquipmentComponent.prototype.loadItemList = function() {
            var _this = this;
            if (
              this.assetStructureSelection.bidoEquipment &&
              this.assetStructureSelection.bidoEquipment.equipmentCode &&
              this.installationSuperiorAsset &&
              this.installationSuperiorAsset.equipmentCode
            ) {
              var input = {
                equipmentCode: this.assetStructureSelection.bidoEquipment.equipmentCode,
                flItems: this.installationFunctionLocation ? this.installationFunctionLocation.flItems : undefined,
                superiorAssetCode: this.installationSuperiorAsset.equipmentCode
              };
              this.configurationControlService.getItemListToInstallEquipment(input).subscribe(function(list) {
                _this.itemList = list;
                if (list.length === 1) {
                  _this.installationItem = list[0].value;
                  _this.loadFunctionLocationList();
                }
              });
            }
          };
          InstallationEquipmentComponent.prototype.loadOperationalStatusFromNotification = function() {
            var _this = this;
            if (this.stockMvt.bidoNotificationNotificationCode) {
              this.configurationControlService
                .getAssetAtDate(this.equipmentCode, this.stockMvt.bidoNotificationNotificationCode)
                .subscribe(function(assetAtDate) {
                  if (assetAtDate) {
                    var matchingStatus = _this.operationalStatusList.find(function(elt) {
                      return elt.value === assetAtDate.operationalStatus;
                    });
                    _this.installationNewOperationalStatus = matchingStatus ? matchingStatus.value : undefined;
                  }
                });
            }
          };
          InstallationEquipmentComponent.prototype.loadOperationalStatusList = function() {
            var _this = this;
            var observable = this.isGroundEquipment
              ? this.propertiesService.getValue(
                  _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__['GenericPropertyConstants']
                    .GROUND_EQUIPMENT_STATUS_MAP
                )
              : this.propertiesService.getValue(
                  _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__['GenericPropertyConstants']
                    .OPERATIONAL_STATUS_MAP
                );
            observable.subscribe(function(list) {
              _this.operationalStatusList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                .orEmpty(list)
                .filter(function(elt) {
                  return (
                    elt.value !==
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                        .OPERATIONAL_STATUS_SPARE_KEY &&
                    elt.value !==
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                        .OPERATIONAL_STATUS_SCRAPPED_KEY
                  );
                })
                .sort(function(elt1, elt2) {
                  return elt1.label.localeCompare(elt2.label);
                });
              _this.loadOperationalStatusFromNotification();
            });
          };
          InstallationEquipmentComponent.prototype.loadSuperiorAsset = function() {
            var _this = this;
            if (
              this.assetStructureSelection.bidoEquipment &&
              this.assetStructureSelection.bidoEquipment.equEquipmentCode
            ) {
              this.configurationControlService
                .findBidoEquipment({
                  equipmentCode: this.assetStructureSelection.bidoEquipment.equEquipmentCode
                })
                .subscribe(function(asset) {
                  _this.superiorAssetList = [
                    {
                      label: _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_10__[
                        'BidoEquipmentUtils'
                      ].toString(asset),
                      value: asset
                    }
                  ];
                  _this.installationSuperiorAsset = asset;
                  _this.loadItemList();
                });
            }
          };
          InstallationEquipmentComponent.prototype.loadSuperiorAssetList = function() {
            var _this = this;
            if (
              this.assetStructureSelection.bidoEquipment &&
              this.assetStructureSelection.bidoEquipment.pnCode &&
              this.equipmentCode &&
              this.familyVariantCode
            ) {
              var input = {
                equipmentCode: this.equipmentCode,
                fatherFamilyVariantCode: this.familyVariantCode,
                pnCode: this.assetStructureSelection.bidoEquipment.pnCode
              };
              this.configurationControlService.findBidoEquipmentSuperiorAsset(input).subscribe(function(list) {
                _this.superiorAssetList = list;
                if (list.length === 1) {
                  _this.installationSuperiorAsset = list[0].value;
                  _this.loadItemList();
                }
              });
            }
          };
          InstallationEquipmentComponent.prototype.loadWarehouse = function() {
            var _this = this;
            if (this.stockMvt.bidtWarehouseId) {
              this.configurationControlService.getById(this.stockMvt.bidtWarehouseId).subscribe(function(warehouse) {
                _this.installationWarehouseName = warehouse
                  ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__['StringUtils'].orEmpty(warehouse.whName)
                  : '';
              });
            }
          };
          InstallationEquipmentComponent.prototype.loadWorkOrder = function() {
            var _this = this;
            if (this.stockMvt.bidmWorkOrderWoId) {
              var input = {
                projectId: this.workPackage.projectId,
                woId: this.stockMvt.bidmWorkOrderWoId
              };
              this.configurationControlService.findWorkOrder(input).subscribe(function(workOrder) {
                _this.workOrder = workOrder;
                _this.workOrderCode = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__['StringUtils'].orEmpty(
                  _this.workOrder.woCode
                );
                _this.workOrderDescription = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__[
                  'StringUtils'
                ].orEmpty(_this.workOrder.woDescription);
              });
            }
          };
          InstallationEquipmentComponent.prototype.setComponentOpenMode = function() {
            this.updateOpenMode(
              this.stockMvt.bidoNotificationNotificationCode
                ? _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Read
                : _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Write
            );
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            InstallationEquipmentComponent.prototype,
            'equipmentCode',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            InstallationEquipmentComponent.prototype,
            'familyVariantCode',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            InstallationEquipmentComponent.prototype,
            'workPackage',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            InstallationEquipmentComponent.prototype,
            'isGroundEquipment',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            InstallationEquipmentComponent.prototype,
            'assetStructureSelection',
            null
          );
          InstallationEquipmentComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-installation-equipment',
                template: __webpack_require__(
                  /*! ./installation-equipment.component.html */ './src/app/main/maintenance/configuration-control/installation-equipment/installation-equipment.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__['MessageService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__['SessionService'],
                _configuration_control_service__WEBPACK_IMPORTED_MODULE_14__['ConfigurationControlService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__['PropertiesService']
              ])
            ],
            InstallationEquipmentComponent
          );
          return InstallationEquipmentComponent;
        })(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_9__['GenericComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/removal-equipment/removal-equipment.component.html':
      /*!***********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/removal-equipment/removal-equipment.component.html ***!
  \***********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<h4 class="section-title">\r\n  {{ getComponentName() + ".removal" | translate }}\r\n</h4>\r\n\r\n<div class="section-content">\r\n  <div class="row">\r\n    <div class="form-group">\r\n      <label class="form-label">\r\n        {{ getComponentName() + ".woCode" | translate }}\r\n      </label>\r\n\r\n      <div class="form-control">\r\n        <div class="form-control-generic">\r\n          <a (click)="openWorkOrder()">{{ workOrderCode }}</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group flex--2">\r\n      <label class="form-label">\r\n        {{ getComponentName() + ".woDescription" | translate }}\r\n      </label>\r\n\r\n      <div class="form-control">\r\n        <textarea\r\n          class="aw-textarea"\r\n          [rows]="2"\r\n          pInputTextarea\r\n          autoResize="autoResize"\r\n          [(ngModel)]="workOrderDescription"\r\n          [disabled]="true"\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row">\r\n    <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n      <label class="form-label">\r\n        {{ getComponentName() + ".date" | translate }}\r\n      </label>\r\n\r\n      <div class="form-control">\r\n        <p-calendar\r\n          showButtonBar="true"\r\n          [monthNavigator]="true"\r\n          [yearNavigator]="true"\r\n          [yearRange]="sessionService.calendarYearRange"\r\n          class="aw-calendar"\r\n          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n          [(ngModel)]="removalDate"\r\n          [showTime]="true"\r\n          appendTo="body"\r\n          [readonlyInput]="true"\r\n          [disabled]="stockMvt.bidoNotificationNotificationCode"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n      <label class="form-label">\r\n        {{ getComponentName() + ".newOperationalStatus" | translate }}\r\n      </label>\r\n\r\n      <div class="form-control">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          [options]="operationalStatusList"\r\n          [(ngModel)]="removalNewOperationalStatus"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n          [disabled]="stockMvt.bidoNotificationNotificationCode"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">\r\n        {{ getComponentName() + ".warehouse" | translate }}\r\n      </label>\r\n\r\n      <div class="form-control">\r\n        <div class="form-control-generic">\r\n          {{ removalWarehouseName }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row">\r\n    <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n      <label class="form-label">\r\n        {{ getComponentName() + ".superiorAsset" | translate }}\r\n      </label>\r\n\r\n      <div class="form-control">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          [options]="superiorAssetList"\r\n          [(ngModel)]="removalSuperiorAsset"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n          (onChange)="onChangeSuperiorAsset()"\r\n          [disabled]="\r\n            stockMvt.bidoNotificationNotificationCode ||\r\n            (removalSuperiorAsset && superiorAssetList && superiorAssetList.length === 1)\r\n          "\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">\r\n        {{ getComponentName() + ".functionLocation" | translate }}\r\n      </label>\r\n\r\n      <div class="form-control">\r\n        <p-dropdown\r\n          *ngIf="!stockMvt.bidoNotificationNotificationCode"\r\n          class="aw-dropdown fixed-width"\r\n          [options]="functionLocationList"\r\n          [(ngModel)]="removalFunctionLocation"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n          (onChange)="onChangeFunctionLocation()"\r\n          [disabled]="removalFunctionLocation && functionLocationList && functionLocationList.length === 1"\r\n        ></p-dropdown>\r\n        <div class="form-control-generic" *ngIf="stockMvt.bidoNotificationNotificationCode">\r\n          {{ removalFunctionLocationName }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group" *ngIf="!stockMvt.bidoNotificationNotificationCode">\r\n      <label class="form-label">\r\n        {{ getComponentName() + ".item" | translate }}\r\n      </label>\r\n\r\n      <div class="form-control">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          [options]="itemList"\r\n          [(ngModel)]="removalItem"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n          (onChange)="onChangeItem()"\r\n          [disabled]="stockMvt.bidoNotificationNotificationCode || (removalItem && itemList && itemList.length === 1)"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class="form-group" *ngIf="stockMvt.bidoNotificationNotificationCode"></div>\r\n  </div>\r\n\r\n  <div class="row">\r\n    <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n      <label class="form-label">\r\n        {{ getComponentName() + ".removalReason" | translate }}\r\n      </label>\r\n\r\n      <div class="form-control">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          [options]="removalReasonList"\r\n          [(ngModel)]="removalReason"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n          [disabled]="stockMvt.bidoNotificationNotificationCode"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row flex-row--justify-end">\r\n    <button type="button" mat-raised-button (click)="openEvent()" *ngIf="stockMvt.bidoNotificationNotificationCode">\r\n      {{ "openEvent" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      type="button"\r\n      mat-raised-button\r\n      class="btn-with-spinner"\r\n      color="primary"\r\n      (click)="validate()"\r\n      *ngIf="!stockMvt.bidoNotificationNotificationCode"\r\n      [disabled]="!removalDate || !removalReason || !removalNewOperationalStatus"\r\n    >\r\n      <span class="lds-hourglass" *ngIf="saving"></span>\r\n      <span *ngIf="saving">&nbsp;</span>\r\n      {{ "validate" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/removal-equipment/removal-equipment.component.ts':
      /*!*********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/removal-equipment/removal-equipment.component.ts ***!
  \*********************************************************************************************************/
      /*! exports provided: RemovalEquipmentComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'RemovalEquipmentComponent',
          function() {
            return RemovalEquipmentComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/types/generic-component */ './src/app/shared/types/generic-component.ts'
        );
        /* harmony import */ var _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/utils/bido-equipment-utils */ './src/app/shared/utils/bido-equipment-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _configuration_control_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../configuration-control.service */ './src/app/main/maintenance/configuration-control/configuration-control.service.ts'
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

        var RemovalEquipmentComponent = /** @class */ (function(_super) {
          __extends(RemovalEquipmentComponent, _super);
          function RemovalEquipmentComponent(
            messageService,
            sessionService,
            configurationControlService,
            propertiesService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Write
              ) || this;
            _this.messageService = messageService;
            _this.sessionService = sessionService;
            _this.configurationControlService = configurationControlService;
            _this.propertiesService = propertiesService;
            return _this;
          }
          Object.defineProperty(RemovalEquipmentComponent.prototype, 'assetStructureSelection', {
            get: function() {
              return this._assetStructureSelection;
            },
            set: function(value) {
              if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_11__['ObjectUtils'].isDefined(value)) {
                this._assetStructureSelection = value;
                this.onBeforeLoad();
                this.stockMvt = this.assetStructureSelection.removedStockMvtData;
                this.onLoad();
              }
            },
            enumerable: true,
            configurable: true
          });
          RemovalEquipmentComponent.prototype.getComponentName = function() {
            return 'RemovalEquipmentComponent'; // TODO: use a constant
          };
          RemovalEquipmentComponent.prototype.ngOnInit = function() {
            this.onLoad();
          };
          RemovalEquipmentComponent.prototype.onBeforeLoad = function() {
            this.functionLocationList = [];
            this.itemList = [];
            this.operationalStatusList = [];
            this.removalDate = new Date();
            this.removalFunctionLocation = undefined;
            this.removalFunctionLocationName = '';
            this.removalItem = undefined;
            this.removalNewOperationalStatus = undefined;
            this.removalReason = undefined;
            this.removalReasonList = [];
            this.removalSuperiorAsset = undefined;
            this.removalWarehouse = undefined;
            this.removalWarehouseName = '';
            this.stockMvt = {};
            this.superiorAssetList = [];
            this.workOrder = undefined;
            this.workOrderCode = '';
            this.workOrderDescription = '';
            this.saving = false;
          };
          RemovalEquipmentComponent.prototype.onLoad = function() {
            this.setComponentOpenMode();
            this.loadFunctionLocationFromNotification();
            this.loadNotification();
            this.loadOperationalStatusList();
            this.loadRemovalReasonList();
            this.loadWarehouse();
            this.loadWorkOrder();
            this.loadSuperiorAsset(
              this.assetStructureSelection.bidoEquipment && this.assetStructureSelection.bidoEquipment.equEquipmentCode
                ? this.assetStructureSelection.bidoEquipment.equEquipmentCode
                : this.equipmentCode
            );
          };
          // //////////////////////////////////////////////////////////////////////////
          RemovalEquipmentComponent.prototype.onChangeFunctionLocation = function() {
            if (
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_11__['ObjectUtils'].isDefined(
                this.removalFunctionLocation
              )
            ) {
              this.loadItemList();
            } else {
              this.removalItem = undefined;
            }
          };
          RemovalEquipmentComponent.prototype.onChangeItem = function() {
            if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_11__['ObjectUtils'].isDefined(this.removalItem)) {
              this.loadFunctionLocationList();
            } else {
              this.removalFunctionLocation = undefined;
            }
          };
          RemovalEquipmentComponent.prototype.onChangeSuperiorAsset = function() {
            if (
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_11__['ObjectUtils'].isDefined(
                this.removalSuperiorAsset
              )
            ) {
              this.loadItemList();
            } else {
              this.functionLocationList = [];
              this.removalItem = undefined;
              this.removalFunctionLocation = undefined;
              this.itemList = [];
            }
          };
          RemovalEquipmentComponent.prototype.openEvent = function() {
            this.configurationControlService.openEvent(this.stockMvt.bidoNotificationNotificationCode);
          };
          RemovalEquipmentComponent.prototype.openWorkOrder = function() {
            this.configurationControlService.openWorkOrder(this.workOrder);
          };
          RemovalEquipmentComponent.prototype.validate = function() {
            var _this = this;
            this.saving = true;
            var input = {
              date: this.removalDate,
              newOperationalStatus: this.removalNewOperationalStatus,
              removalReason: this.removalReason,
              stockMvt: this.stockMvt,
              warehouseCode: this.removalWarehouse ? this.removalWarehouse.wareHouseId : undefined,
              workOrderCode: this.assetStructureSelection.workOrderId,
              workPackageCode: this.workPackage.projectId
            };
            this.configurationControlService
              .dismantleEquipment(input)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['finalize'])(function() {
                  _this.saving = false;
                })
              )
              .subscribe(function(updatedStockMvt) {
                _this.stockMvt = updatedStockMvt;
                _this.assetStructureSelection.removedStockMvtData = _this.stockMvt;
                _this.loadFunctionLocationFromNotification();
                _this.setComponentOpenMode();
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDismantleEquipment'));
              });
          };
          RemovalEquipmentComponent.prototype.loadFunctionLocationFromNotification = function() {
            var _this = this;
            if (this.stockMvt.bidoNotificationNotificationCode) {
              this.configurationControlService
                .getFunctionLocationAtDate(this.equipmentCode, this.stockMvt.bidoNotificationNotificationCode)
                .subscribe(function(flAtDate) {
                  _this.removalFunctionLocationName = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__[
                    'StringUtils'
                  ].orEmpty(flAtDate);
                });
            }
          };
          RemovalEquipmentComponent.prototype.loadFunctionLocationList = function() {
            var _this = this;
            if (
              this.assetStructureSelection.bidoEquipment &&
              this.removalSuperiorAsset &&
              this.removalSuperiorAsset.equipmentCode &&
              this.stockMvt.bidmWorkOrderWoId
            ) {
              var bireItemId = this.removalItem
                ? {
                    chapter: this.removalItem.chapter,
                    familyCode: this.removalItem.familyCode,
                    marks: this.removalItem.marks,
                    section: this.removalItem.section,
                    sheet: this.removalItem.sheet,
                    structureType: this.removalItem.structureType,
                    subject: this.removalItem.subject,
                    variantCode: this.removalItem.variantCode
                  }
                : undefined;
              var input = {
                date: this.removalDate,
                selectedItem: bireItemId,
                superiorAssetCode: this.removalSuperiorAsset.equipmentCode,
                workOrderCode: this.stockMvt.bidmWorkOrderWoId,
                workPackageCode: this.workPackage.projectId
              };
              this.configurationControlService
                .getFunctionLocationListToInstallEquipment(input)
                .subscribe(function(list) {
                  _this.functionLocationList = list;
                  if (list.length === 1) {
                    _this.removalFunctionLocation = list[0].value;
                  }
                });
            }
          };
          RemovalEquipmentComponent.prototype.loadItemList = function() {
            var _this = this;
            if (
              this.assetStructureSelection.bidoEquipment &&
              this.assetStructureSelection.bidoEquipment.equipmentCode &&
              this.removalSuperiorAsset &&
              this.removalSuperiorAsset.equipmentCode
            ) {
              var input = {
                equipmentCode: this.assetStructureSelection.bidoEquipment.equipmentCode,
                superiorAssetCode: this.removalSuperiorAsset.equipmentCode
              };
              this.configurationControlService.getItemListToInstallEquipment(input).subscribe(function(list) {
                _this.itemList = list;
                if (list.length === 1) {
                  _this.removalItem = list[0].value;
                  _this.loadFunctionLocationList();
                }
              });
            }
          };
          RemovalEquipmentComponent.prototype.loadNotification = function() {
            var _this = this;
            if (this.stockMvt.bidoNotificationNotificationCode) {
              this.configurationControlService
                .findBidoNotification({ notificationCode: this.stockMvt.bidoNotificationNotificationCode })
                .subscribe(function(notification) {
                  if (notification) {
                    var matchingReason = _this.removalReasonList.find(function(elt) {
                      return elt.value === notification.eventReason;
                    });
                    _this.removalReason = matchingReason ? matchingReason.value : undefined;
                  }
                });
            }
          };
          RemovalEquipmentComponent.prototype.loadOperationalStatusFromNotification = function() {
            var _this = this;
            if (this.stockMvt.bidoNotificationNotificationCode) {
              this.configurationControlService
                .getAssetAtDate(this.equipmentCode, this.stockMvt.bidoNotificationNotificationCode)
                .subscribe(function(assetAtDate) {
                  if (assetAtDate) {
                    var matchingStatus = _this.operationalStatusList.find(function(elt) {
                      return elt.value === assetAtDate.operationalStatus;
                    });
                    _this.removalNewOperationalStatus = matchingStatus ? matchingStatus.value : undefined;
                  }
                });
            }
          };
          RemovalEquipmentComponent.prototype.loadOperationalStatusList = function() {
            var _this = this;
            var observable = this.isGroundEquipment
              ? this.propertiesService.getValue(
                  _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__['GenericPropertyConstants']
                    .GROUND_EQUIPMENT_STATUS_MAP
                )
              : this.propertiesService.getValue(
                  _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__['GenericPropertyConstants']
                    .OPERATIONAL_STATUS_MAP
                );
            observable.subscribe(function(list) {
              _this.operationalStatusList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__['ListUtils']
                .orEmpty(list)
                .filter(function(elt) {
                  return (
                    elt.value !==
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                      .OPERATIONAL_STATUS_IN_OPERATION_KEY
                  );
                })
                .sort(function(elt1, elt2) {
                  return elt1.label.localeCompare(elt2.label);
                });
              _this.loadOperationalStatusFromNotification();
            });
          };
          RemovalEquipmentComponent.prototype.loadRemovalReasonList = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__['GenericPropertyConstants']
                  .REMOVAL_REASON_MAP
              )
              .subscribe(function(list) {
                _this.removalReasonList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__['ListUtils']
                  .orEmpty(list)
                  .sort(function(e1, e2) {
                    return e1.label.localeCompare(e2.label);
                  });
              });
          };
          RemovalEquipmentComponent.prototype.loadSuperiorAsset = function(equipmentCode) {
            var _this = this;
            this.configurationControlService
              .findBidoEquipment({
                equipmentCode: equipmentCode
              })
              .subscribe(function(asset) {
                _this.superiorAssetList = [
                  {
                    label: _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_9__[
                      'BidoEquipmentUtils'
                    ].toString(asset),
                    value: asset
                  }
                ];
                _this.removalSuperiorAsset = asset;
                _this.loadItemList();
              });
          };
          RemovalEquipmentComponent.prototype.loadWarehouse = function() {
            var _this = this;
            if (this.stockMvt.bidtWarehouseId) {
              this.configurationControlService.getById(this.stockMvt.bidtWarehouseId).subscribe(function(warehouse) {
                _this.removalWarehouse = warehouse;
                if (_this.removalWarehouse) {
                  _this.removalWarehouseName = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__[
                    'StringUtils'
                  ].orEmpty(_this.removalWarehouse.whName);
                  if (!_this.stockMvt.bidoNotificationNotificationCode) {
                    if (
                      !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_11__['ObjectUtils'].isDefined(
                        _this.removalWarehouse.whType
                      )
                    ) {
                      _this.removalNewOperationalStatus =
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__[
                          'AWPropertiesConstants'
                        ].OPERATIONAL_STATUS_SPARE_KEY;
                    } else if (
                      _this.removalWarehouse.whType ===
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                        .MM_WAREHOUSE_TYPE_REPAIR_KEY
                    ) {
                      _this.removalNewOperationalStatus =
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__[
                          'AWPropertiesConstants'
                        ].OPERATIONAL_STATUS_MAINTENANCE_KEY;
                    } else if (
                      _this.removalWarehouse.whType ===
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                        .MM_WAREHOUSE_TYPE_UNSERVICEABLE_KEY
                    ) {
                      _this.removalNewOperationalStatus =
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__[
                          'AWPropertiesConstants'
                        ].OPERATIONAL_STATUS_IN_STOCK_KEY;
                    } else if (
                      _this.removalWarehouse.whType ===
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                        .MM_WAREHOUSE_TYPE_SCRAP_KEY
                    ) {
                      _this.removalNewOperationalStatus =
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__[
                          'AWPropertiesConstants'
                        ].OPERATIONAL_STATUS_SCRAPPED_KEY;
                    } else if (
                      _this.removalWarehouse.whType ===
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                        .MM_WAREHOUSE_TYPE_USED_KEY
                    ) {
                      _this.removalNewOperationalStatus =
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__[
                          'AWPropertiesConstants'
                        ].OPERATIONAL_STATUS_SPARE_KEY;
                    } else if (
                      _this.removalWarehouse.whType ===
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                        .MM_WAREHOUSE_TYPE_NEW_KEY
                    ) {
                      _this.removalNewOperationalStatus =
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__[
                          'AWPropertiesConstants'
                        ].OPERATIONAL_STATUS_SPARE_KEY;
                    }
                  }
                }
              });
            }
          };
          RemovalEquipmentComponent.prototype.loadWorkOrder = function() {
            var _this = this;
            if (this.workPackage.projectId && this.stockMvt.bidmWorkOrderWoId) {
              var input = {
                projectId: this.workPackage.projectId,
                woId: this.stockMvt.bidmWorkOrderWoId
              };
              this.configurationControlService.findWorkOrder(input).subscribe(function(workOrder) {
                _this.workOrder = workOrder;
                _this.workOrderCode = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__['StringUtils'].orEmpty(
                  _this.workOrder.woCode
                );
                _this.workOrderDescription = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__[
                  'StringUtils'
                ].orEmpty(_this.workOrder.woDescription);
              });
            }
          };
          RemovalEquipmentComponent.prototype.setComponentOpenMode = function() {
            this.updateOpenMode(
              this.stockMvt.bidoNotificationNotificationCode
                ? _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Read
                : _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Write
            );
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            RemovalEquipmentComponent.prototype,
            'equipmentCode',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            RemovalEquipmentComponent.prototype,
            'familyVariantCode',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            RemovalEquipmentComponent.prototype,
            'workPackage',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            RemovalEquipmentComponent.prototype,
            'isGroundEquipment',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            RemovalEquipmentComponent.prototype,
            'assetStructureSelection',
            null
          );
          RemovalEquipmentComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-removal-equipment',
                template: __webpack_require__(
                  /*! ./removal-equipment.component.html */ './src/app/main/maintenance/configuration-control/removal-equipment/removal-equipment.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__['SessionService'],
                _configuration_control_service__WEBPACK_IMPORTED_MODULE_13__['ConfigurationControlService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__['PropertiesService']
              ])
            ],
            RemovalEquipmentComponent
          );
          return RemovalEquipmentComponent;
        })(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_8__['GenericComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/search/configuration-control-search.component.html':
      /*!***********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/search/configuration-control-search.component.html ***!
  \***********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ "global.search" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show All Actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<aw-asset-rev-search (onOpenClick)="openSelection($event)"></aw-asset-rev-search>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/search/configuration-control-search.component.ts':
      /*!*********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/search/configuration-control-search.component.ts ***!
  \*********************************************************************************************************/
      /*! exports provided: ConfigurationControlSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ConfigurationControlSearchComponent',
          function() {
            return ConfigurationControlSearchComponent;
          }
        );
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
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _configuration_control_search_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./configuration-control-search.service */ './src/app/main/maintenance/configuration-control/search/configuration-control-search.service.ts'
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

        var ConfigurationControlSearchComponent = /** @class */ (function(_super) {
          __extends(ConfigurationControlSearchComponent, _super);
          function ConfigurationControlSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            searchService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.searchService = searchService;
            _this.loadWareHouseList();
            return _this;
          }
          ConfigurationControlSearchComponent.prototype.openSelection = function(event) {
            if (!!event.output) {
              // getting scope for AssetReview
              var warehouse = void 0;
              if (event.warehouseId) {
                var selectedWarehouse = this.wareHouseList.find(function(wareHouse) {
                  return wareHouse.value === event.warehouseId;
                });
                if (selectedWarehouse) {
                  warehouse = selectedWarehouse.label;
                }
              }
              var equipmentList = [];
              var fvList = [];
              var funcList = [];
              var scope = {
                warehouse: warehouse,
                equipmentCodeList: __spread(equipmentList, [event.output.equipmentCode]),
                familyVariantList: __spread(fvList, [event.output.familyVariant]),
                functionList: __spread(funcList, [event.output.function])
              };
              // opening configuration control
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
                    .MAI_CONFIGURATION_CONTROL,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                objectId: this.serializationService.serialize(scope)
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          ConfigurationControlSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
          };
          ConfigurationControlSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
              .MAI_CONFIGURATION_CONTROL_SEARCH;
          };
          ConfigurationControlSearchComponent.prototype.loadWareHouseList = function() {
            var _this = this;
            this.searchService.findAllWarehouse().subscribe(function(results) {
              _this.wareHouseList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_9__['ListUtils']
                .orEmpty(results)
                .filter(function(warehouse) {
                  return !!warehouse.whCode;
                })
                .map(function(warehouse) {
                  return {
                    label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_10__['StringUtils'].isNullOrEmpty(
                      warehouse.whName
                    )
                      ? warehouse.whCode
                      : warehouse.whCode + ' - ' + warehouse.whName,
                    value: warehouse.wareHouseId
                  };
                });
            });
          };
          ConfigurationControlSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-configuration-control-search',
                template: __webpack_require__(
                  /*! ./configuration-control-search.component.html */ './src/app/main/maintenance/configuration-control/search/configuration-control-search.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_7__['TabService'],
                _configuration_control_search_service__WEBPACK_IMPORTED_MODULE_11__['ConfigurationControlSearchService']
              ])
            ],
            ConfigurationControlSearchComponent
          );
          return ConfigurationControlSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_8__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/search/configuration-control-search.service.ts':
      /*!*******************************************************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/search/configuration-control-search.service.ts ***!
  \*******************************************************************************************************/
      /*! exports provided: ConfigurationControlSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ConfigurationControlSearchService',
          function() {
            return ConfigurationControlSearchService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
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

        var ConfigurationControlSearchService = /** @class */ (function(_super) {
          __extends(ConfigurationControlSearchService, _super);
          function ConfigurationControlSearchService(http, appConfigService, bidtWarehouseApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            return _this;
          }
          /**************************************************************************
           * Bidt warehouse api
           *************************************************************************/
          ConfigurationControlSearchService.prototype.findAllWarehouse = function() {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findAll);
          };
          ConfigurationControlSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])({
                providedIn: 'root'
              }),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_2__['BidtWarehouseApi']
              ])
            ],
            ConfigurationControlSearchService
          );
          return ConfigurationControlSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/maintenance/configuration-control/share.scss':
      /*!*******************************************************************!*\
  !*** ./src/app/main/maintenance/configuration-control/share.scss ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.configuration-control-alert {\n  text-align: center; }\n\n.configuration-control-alert.configuration-control-alert--nok {\n  background-color: #f6685e; }\n\n.configuration-control-alert.configuration-control-alert--ok {\n  background-color: #4caf50; }\n\n.configuration-control-alert.configuration-control-alert--warning {\n  background-color: #ffc107; }\n\n.aw-table2 .configuration-control-alert {\n  display: inline-block;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb25maWd1cmF0aW9uLWNvbnRyb2wvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXG1haW50ZW5hbmNlXFxjb25maWd1cmF0aW9uLWNvbnRyb2xcXHNoYXJlLnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvY29uZmlndXJhdGlvbi1jb250cm9sL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx5QkNpQmtCLEVBQUE7O0FEZHBCO0VBQ0UseUJDVW9CLEVBQUE7O0FEUHRCO0VBQ0UseUJDT2MsRUFBQTs7QURKaEI7RUFDRSxxQkFBcUI7RUFDckIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb25maWd1cmF0aW9uLWNvbnRyb2wvc2hhcmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuXHJcbi5jb25maWd1cmF0aW9uLWNvbnRyb2wtYWxlcnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbmZpZ3VyYXRpb24tY29udHJvbC1hbGVydC5jb25maWd1cmF0aW9uLWNvbnRyb2wtYWxlcnQtLW5vayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbn1cclxuXHJcbi5jb25maWd1cmF0aW9uLWNvbnRyb2wtYWxlcnQuY29uZmlndXJhdGlvbi1jb250cm9sLWFsZXJ0LS1vayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxufVxyXG5cclxuLmNvbmZpZ3VyYXRpb24tY29udHJvbC1hbGVydC5jb25maWd1cmF0aW9uLWNvbnRyb2wtYWxlcnQtLXdhcm5pbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbn1cclxuXHJcbi5hdy10YWJsZTIgLmNvbmZpZ3VyYXRpb24tY29udHJvbC1hbGVydCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iXX0= */';

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

    /***/ './src/app/shared/constants/bidt-stock-mvt-constants.ts':
      /*!**************************************************************!*\
  !*** ./src/app/shared/constants/bidt-stock-mvt-constants.ts ***!
  \**************************************************************/
      /*! exports provided: BidtStockMvtConstants */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'BidtStockMvtConstants', function() {
          return BidtStockMvtConstants;
        });
        var BidtStockMvtConstants = /** @class */ (function() {
          function BidtStockMvtConstants() {}
          BidtStockMvtConstants.MVT_WAY_CREDIT = 'C';
          BidtStockMvtConstants.MVT_WAY_DEBIT = 'D';
          BidtStockMvtConstants.MVT_WAY_TRANSFER = 'T';
          BidtStockMvtConstants.MVT_RECONDITIONING = 'MVT_RECONDITIONING';
          BidtStockMvtConstants.MVT_RELATED_FL = 'MVT_RELATED_FL';
          BidtStockMvtConstants.MVT_STORAGE_COUNTER_RESET = 'MVT_STORAGE_COUNTER_RESET';
          BidtStockMvtConstants.MVT_STATUS_STEP_WAY_BEFORE_TRANSFERT = 0;
          BidtStockMvtConstants.MVT_STATUS_STEP_WAY_TRANSFERT = 1;
          BidtStockMvtConstants.MVT_STATUS_STEP_WAY_DEBIT = 2;
          BidtStockMvtConstants.MVT_STATUS_STEP_WAY_CREDIT = 3;
          return BidtStockMvtConstants;
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
//# sourceMappingURL=maintenance-configuration-control-configuration-control-module.js.map
