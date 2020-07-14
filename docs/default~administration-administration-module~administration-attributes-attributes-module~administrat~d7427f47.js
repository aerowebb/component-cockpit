(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~administration-administration-module~administration-attributes-attributes-module~administrat~d7427f47'],
  {
    /***/ './node_modules/primeng/components/tooltip/tooltip.js':
      /*!************************************************************!*\
  !*** ./node_modules/primeng/components/tooltip/tooltip.js ***!
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
        var domhandler_1 = __webpack_require__(
          /*! ../dom/domhandler */ './node_modules/primeng/components/dom/domhandler.js'
        );
        var Tooltip = /** @class */ (function() {
          function Tooltip(el, zone) {
            this.el = el;
            this.zone = zone;
            this.tooltipPosition = 'right';
            this.tooltipEvent = 'hover';
            this.appendTo = 'body';
            this.tooltipZIndex = 'auto';
            this.escape = true;
          }
          Tooltip.prototype.ngAfterViewInit = function() {
            var _this = this;
            this.zone.runOutsideAngular(function() {
              if (_this.tooltipEvent === 'hover') {
                _this.mouseEnterListener = _this.onMouseEnter.bind(_this);
                _this.mouseLeaveListener = _this.onMouseLeave.bind(_this);
                _this.clickListener = _this.onClick.bind(_this);
                _this.el.nativeElement.addEventListener('mouseenter', _this.mouseEnterListener);
                _this.el.nativeElement.addEventListener('mouseleave', _this.mouseLeaveListener);
                _this.el.nativeElement.addEventListener('click', _this.clickListener);
              } else if (_this.tooltipEvent === 'focus') {
                _this.focusListener = _this.onFocus.bind(_this);
                _this.blurListener = _this.onBlur.bind(_this);
                _this.el.nativeElement.addEventListener('focus', _this.focusListener);
                _this.el.nativeElement.addEventListener('blur', _this.blurListener);
              }
            });
          };
          Tooltip.prototype.onMouseEnter = function(e) {
            if (!this.container && !this.showTimeout) {
              this.activate();
            }
          };
          Tooltip.prototype.onMouseLeave = function(e) {
            this.deactivate();
          };
          Tooltip.prototype.onFocus = function(e) {
            this.activate();
          };
          Tooltip.prototype.onBlur = function(e) {
            this.deactivate();
          };
          Tooltip.prototype.onClick = function(e) {
            this.deactivate();
          };
          Tooltip.prototype.activate = function() {
            var _this = this;
            this.active = true;
            this.clearHideTimeout();
            if (this.showDelay)
              this.showTimeout = setTimeout(function() {
                _this.show();
              }, this.showDelay);
            else this.show();
            if (this.life) {
              var duration = this.showDelay ? this.life + this.showDelay : this.life;
              this.hideTimeout = setTimeout(function() {
                _this.hide();
              }, duration);
            }
          };
          Tooltip.prototype.deactivate = function() {
            var _this = this;
            this.active = false;
            this.clearShowTimeout();
            if (this.hideDelay) {
              this.clearHideTimeout(); //life timeout
              this.hideTimeout = setTimeout(function() {
                _this.hide();
              }, this.hideDelay);
            } else {
              this.hide();
            }
          };
          Object.defineProperty(Tooltip.prototype, 'text', {
            get: function() {
              return this._text;
            },
            set: function(text) {
              this._text = text;
              if (this.active) {
                if (this._text) {
                  if (this.container && this.container.offsetParent) this.updateText();
                  else this.show();
                } else {
                  this.hide();
                }
              }
            },
            enumerable: true,
            configurable: true
          });
          Tooltip.prototype.create = function() {
            this.container = document.createElement('div');
            var tooltipArrow = document.createElement('div');
            tooltipArrow.className = 'ui-tooltip-arrow';
            this.container.appendChild(tooltipArrow);
            this.tooltipText = document.createElement('div');
            this.tooltipText.className = 'ui-tooltip-text ui-shadow ui-corner-all';
            this.updateText();
            if (this.positionStyle) {
              this.container.style.position = this.positionStyle;
            }
            this.container.appendChild(this.tooltipText);
            if (this.appendTo === 'body') document.body.appendChild(this.container);
            else if (this.appendTo === 'target')
              domhandler_1.DomHandler.appendChild(this.container, this.el.nativeElement);
            else domhandler_1.DomHandler.appendChild(this.container, this.appendTo);
            this.container.style.display = 'inline-block';
          };
          Tooltip.prototype.show = function() {
            if (!this.text || this.disabled) {
              return;
            }
            this.create();
            this.align();
            domhandler_1.DomHandler.fadeIn(this.container, 250);
            if (this.tooltipZIndex === 'auto') this.container.style.zIndex = ++domhandler_1.DomHandler.zindex;
            else this.container.style.zIndex = this.tooltipZIndex;
            this.bindDocumentResizeListener();
          };
          Tooltip.prototype.hide = function() {
            this.remove();
          };
          Tooltip.prototype.updateText = function() {
            if (this.escape) {
              this.tooltipText.innerHTML = '';
              this.tooltipText.appendChild(document.createTextNode(this._text));
            } else {
              this.tooltipText.innerHTML = this._text;
            }
          };
          Tooltip.prototype.align = function() {
            var position = this.tooltipPosition;
            switch (position) {
              case 'top':
                this.alignTop();
                if (this.isOutOfBounds()) {
                  this.alignBottom();
                  if (this.isOutOfBounds()) {
                    this.alignRight();
                    if (this.isOutOfBounds()) {
                      this.alignLeft();
                    }
                  }
                }
                break;
              case 'bottom':
                this.alignBottom();
                if (this.isOutOfBounds()) {
                  this.alignTop();
                  if (this.isOutOfBounds()) {
                    this.alignRight();
                    if (this.isOutOfBounds()) {
                      this.alignLeft();
                    }
                  }
                }
                break;
              case 'left':
                this.alignLeft();
                if (this.isOutOfBounds()) {
                  this.alignRight();
                  if (this.isOutOfBounds()) {
                    this.alignTop();
                    if (this.isOutOfBounds()) {
                      this.alignBottom();
                    }
                  }
                }
                break;
              case 'right':
                this.alignRight();
                if (this.isOutOfBounds()) {
                  this.alignLeft();
                  if (this.isOutOfBounds()) {
                    this.alignTop();
                    if (this.isOutOfBounds()) {
                      this.alignBottom();
                    }
                  }
                }
                break;
            }
          };
          Tooltip.prototype.getHostOffset = function() {
            if (this.appendTo === 'body' || this.appendTo === 'target') {
              var offset = this.el.nativeElement.getBoundingClientRect();
              var targetLeft = offset.left + domhandler_1.DomHandler.getWindowScrollLeft();
              var targetTop = offset.top + domhandler_1.DomHandler.getWindowScrollTop();
              return { left: targetLeft, top: targetTop };
            } else {
              return { left: 0, top: 0 };
            }
          };
          Tooltip.prototype.alignRight = function() {
            this.preAlign('right');
            var hostOffset = this.getHostOffset();
            var left = hostOffset.left + domhandler_1.DomHandler.getOuterWidth(this.el.nativeElement);
            var top =
              hostOffset.top +
              (domhandler_1.DomHandler.getOuterHeight(this.el.nativeElement) -
                domhandler_1.DomHandler.getOuterHeight(this.container)) /
                2;
            this.container.style.left = left + 'px';
            this.container.style.top = top + 'px';
          };
          Tooltip.prototype.alignLeft = function() {
            this.preAlign('left');
            var hostOffset = this.getHostOffset();
            var left = hostOffset.left - domhandler_1.DomHandler.getOuterWidth(this.container);
            var top =
              hostOffset.top +
              (domhandler_1.DomHandler.getOuterHeight(this.el.nativeElement) -
                domhandler_1.DomHandler.getOuterHeight(this.container)) /
                2;
            this.container.style.left = left + 'px';
            this.container.style.top = top + 'px';
          };
          Tooltip.prototype.alignTop = function() {
            this.preAlign('top');
            var hostOffset = this.getHostOffset();
            var left =
              hostOffset.left +
              (domhandler_1.DomHandler.getOuterWidth(this.el.nativeElement) -
                domhandler_1.DomHandler.getOuterWidth(this.container)) /
                2;
            var top = hostOffset.top - domhandler_1.DomHandler.getOuterHeight(this.container);
            this.container.style.left = left + 'px';
            this.container.style.top = top + 'px';
          };
          Tooltip.prototype.alignBottom = function() {
            this.preAlign('bottom');
            var hostOffset = this.getHostOffset();
            var left =
              hostOffset.left +
              (domhandler_1.DomHandler.getOuterWidth(this.el.nativeElement) -
                domhandler_1.DomHandler.getOuterWidth(this.container)) /
                2;
            var top = hostOffset.top + domhandler_1.DomHandler.getOuterHeight(this.el.nativeElement);
            this.container.style.left = left + 'px';
            this.container.style.top = top + 'px';
          };
          Tooltip.prototype.preAlign = function(position) {
            this.container.style.left = -999 + 'px';
            this.container.style.top = -999 + 'px';
            var defaultClassName = 'ui-tooltip ui-widget ui-tooltip-' + position;
            this.container.className = this.tooltipStyleClass
              ? defaultClassName + ' ' + this.tooltipStyleClass
              : defaultClassName;
          };
          Tooltip.prototype.isOutOfBounds = function() {
            var offset = this.container.getBoundingClientRect();
            var targetTop = offset.top;
            var targetLeft = offset.left;
            var width = domhandler_1.DomHandler.getOuterWidth(this.container);
            var height = domhandler_1.DomHandler.getOuterHeight(this.container);
            var viewport = domhandler_1.DomHandler.getViewport();
            return (
              targetLeft + width > viewport.width ||
              targetLeft < 0 ||
              targetTop < 0 ||
              targetTop + height > viewport.height
            );
          };
          Tooltip.prototype.onWindowResize = function(e) {
            this.hide();
          };
          Tooltip.prototype.bindDocumentResizeListener = function() {
            var _this = this;
            this.zone.runOutsideAngular(function() {
              _this.resizeListener = _this.onWindowResize.bind(_this);
              window.addEventListener('resize', _this.resizeListener);
            });
          };
          Tooltip.prototype.unbindDocumentResizeListener = function() {
            if (this.resizeListener) {
              window.removeEventListener('resize', this.resizeListener);
              this.resizeListener = null;
            }
          };
          Tooltip.prototype.unbindEvents = function() {
            if (this.tooltipEvent === 'hover') {
              this.el.nativeElement.removeEventListener('mouseenter', this.mouseEnterListener);
              this.el.nativeElement.removeEventListener('mouseleave', this.mouseLeaveListener);
              this.el.nativeElement.removeEventListener('click', this.clickListener);
            } else if (this.tooltipEvent === 'focus') {
              this.el.nativeElement.removeEventListener('focus', this.focusListener);
              this.el.nativeElement.removeEventListener('blur', this.blurListener);
            }
            this.unbindDocumentResizeListener();
          };
          Tooltip.prototype.remove = function() {
            if (this.container && this.container.parentElement) {
              if (this.appendTo === 'body') document.body.removeChild(this.container);
              else if (this.appendTo === 'target') this.el.nativeElement.removeChild(this.container);
              else domhandler_1.DomHandler.removeChild(this.container, this.appendTo);
            }
            this.unbindDocumentResizeListener();
            this.clearTimeouts();
            this.container = null;
          };
          Tooltip.prototype.clearShowTimeout = function() {
            if (this.showTimeout) {
              clearTimeout(this.showTimeout);
              this.showTimeout = null;
            }
          };
          Tooltip.prototype.clearHideTimeout = function() {
            if (this.hideTimeout) {
              clearTimeout(this.hideTimeout);
              this.hideTimeout = null;
            }
          };
          Tooltip.prototype.clearTimeouts = function() {
            this.clearShowTimeout();
            this.clearHideTimeout();
          };
          Tooltip.prototype.ngOnDestroy = function() {
            this.unbindEvents();
            this.remove();
          };
          __decorate([core_1.Input(), __metadata('design:type', String)], Tooltip.prototype, 'tooltipPosition', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], Tooltip.prototype, 'tooltipEvent', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Object)], Tooltip.prototype, 'appendTo', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], Tooltip.prototype, 'positionStyle', void 0);
          __decorate(
            [core_1.Input(), __metadata('design:type', String)],
            Tooltip.prototype,
            'tooltipStyleClass',
            void 0
          );
          __decorate([core_1.Input(), __metadata('design:type', String)], Tooltip.prototype, 'tooltipZIndex', void 0);
          __decorate(
            [core_1.Input('tooltipDisabled'), __metadata('design:type', Boolean)],
            Tooltip.prototype,
            'disabled',
            void 0
          );
          __decorate([core_1.Input(), __metadata('design:type', Boolean)], Tooltip.prototype, 'escape', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Number)], Tooltip.prototype, 'showDelay', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Number)], Tooltip.prototype, 'hideDelay', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Number)], Tooltip.prototype, 'life', void 0);
          __decorate(
            [core_1.Input('pTooltip'), __metadata('design:type', String), __metadata('design:paramtypes', [String])],
            Tooltip.prototype,
            'text',
            null
          );
          Tooltip = __decorate(
            [
              core_1.Directive({
                selector: '[pTooltip]'
              }),
              __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone])
            ],
            Tooltip
          );
          return Tooltip;
        })();
        exports.Tooltip = Tooltip;
        var TooltipModule = /** @class */ (function() {
          function TooltipModule() {}
          TooltipModule = __decorate(
            [
              core_1.NgModule({
                imports: [common_1.CommonModule],
                exports: [Tooltip],
                declarations: [Tooltip]
              })
            ],
            TooltipModule
          );
          return TooltipModule;
        })();
        exports.TooltipModule = TooltipModule;
        //# sourceMappingURL=tooltip.js.map

        /***/
      },

    /***/ './node_modules/primeng/tooltip.js':
      /*!*****************************************!*\
  !*** ./node_modules/primeng/tooltip.js ***!
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
            /*! ./components/tooltip/tooltip */ './node_modules/primeng/components/tooltip/tooltip.js'
          )
        );

        /***/
      },

    /***/ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts':
      /*!**********************************************************************************!*\
  !*** ./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts ***!
  \**********************************************************************************/
      /*! exports provided: DynamicComponentLoaderModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DynamicComponentLoaderModule',
          function() {
            return DynamicComponentLoaderModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var _dynamic_component_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./dynamic-component-loader.service */ './src/app/main/dynamic-component-loader/dynamic-component-loader.service.ts'
        );
        /* harmony import */ var _dynamic_component_manifest_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./dynamic-component-manifest.interface */ './src/app/main/dynamic-component-loader/dynamic-component-manifest.interface.ts'
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

        var DynamicComponentLoaderModule = /** @class */ (function() {
          function DynamicComponentLoaderModule() {}
          DynamicComponentLoaderModule_1 = DynamicComponentLoaderModule;
          DynamicComponentLoaderModule.forRoot = function(manifests) {
            return {
              ngModule: DynamicComponentLoaderModule_1,
              providers: [
                _dynamic_component_loader_service__WEBPACK_IMPORTED_MODULE_2__['DynamicComponentLoader'],
                {
                  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModuleFactoryLoader'],
                  useClass: _angular_core__WEBPACK_IMPORTED_MODULE_0__['SystemJsNgModuleLoader']
                },
                // provider for Angular CLI to analyze
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__['ROUTES'], useValue: manifests, multi: true },
                // provider for DynamicComponentLoader to analyze
                {
                  provide:
                    _dynamic_component_manifest_interface__WEBPACK_IMPORTED_MODULE_3__['DYNAMIC_COMPONENT_MANIFESTS'],
                  useValue: manifests
                }
              ]
            };
          };
          // tslint:disable-next-line:no-any
          DynamicComponentLoaderModule.forChild = function(components) {
            return {
              ngModule: DynamicComponentLoaderModule_1,
              providers: [
                {
                  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ANALYZE_FOR_ENTRY_COMPONENTS'],
                  useValue: components,
                  multi: true
                },
                // provider for @angular/router to parse
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__['ROUTES'], useValue: [], multi: true },
                // provider for DynamicComponentLoader to analyze
                {
                  provide: _dynamic_component_manifest_interface__WEBPACK_IMPORTED_MODULE_3__['DYNAMIC_COMPONENT'],
                  useValue: components
                }
              ]
            };
          };
          var DynamicComponentLoaderModule_1;
          DynamicComponentLoaderModule = DynamicComponentLoaderModule_1 = __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])()],
            DynamicComponentLoaderModule
          );
          return DynamicComponentLoaderModule;
        })();

        /***/
      },

    /***/ './src/app/main/dynamic-component-loader/dynamic-component-loader.service.ts':
      /*!***********************************************************************************!*\
  !*** ./src/app/main/dynamic-component-loader/dynamic-component-loader.service.ts ***!
  \***********************************************************************************/
      /*! exports provided: DynamicComponentLoader */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DynamicComponentLoader', function() {
          return DynamicComponentLoader;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _dynamic_component_manifest_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./dynamic-component-manifest.interface */ './src/app/main/dynamic-component-loader/dynamic-component-manifest.interface.ts'
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
        var __param =
          (undefined && undefined.__param) ||
          function(paramIndex, decorator) {
            return function(target, key) {
              decorator(target, key, paramIndex);
            };
          };

        var DynamicComponentLoader = /** @class */ (function() {
          function DynamicComponentLoader(manifests, injector, loader, loaderService) {
            this.manifests = manifests;
            this.injector = injector;
            this.loader = loader;
            this.loaderService = loaderService;
          }
          // Retrieve a ComponentFactory, based on the specified componentId (defined in the DynamicComponentManifest array).
          DynamicComponentLoader.prototype.getComponentFactory = function(componentId, injector) {
            var _this = this;
            var manifest = this.manifests.find(function(m) {
              return m.componentId === componentId;
            });
            if (!manifest) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(
                'DynamicComponentLoader: Unknown componentId "' + componentId + '"'
              );
            }
            this.loaderService.showModuleLoadingBar();
            var p = this.loader.load(manifest.loadChildren).then(function(ngModuleFactory) {
              var moduleRef = ngModuleFactory.create(injector || _this.injector);
              var dynamicComponentTypes = moduleRef.injector.get(
                _dynamic_component_manifest_interface__WEBPACK_IMPORTED_MODULE_3__['DYNAMIC_COMPONENT']
              );
              if (!dynamicComponentTypes) {
                throw _this.dynamicComponentLoaderError(componentId);
              }
              var requestedDynamicComponentType = dynamicComponentTypes.find(function(dynamicComponentType) {
                return dynamicComponentType.prototype.getComponentName.apply(undefined) === componentId;
              });
              if (!requestedDynamicComponentType) {
                throw _this.dynamicComponentLoaderError(componentId);
              }
              return moduleRef.componentFactoryResolver.resolveComponentFactory(requestedDynamicComponentType);
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(p);
          };
          DynamicComponentLoader.prototype.dynamicComponentLoaderError = function(componentId) {
            var message =
              'DynamicComponentLoader: Dynamic module for componentId "' +
              componentId +
              '" does not contain DYNAMIC_COMPONENT as a provider.';
            return new Error(message);
          };
          DynamicComponentLoader = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])(),
              __param(
                0,
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Inject'])(
                  _dynamic_component_manifest_interface__WEBPACK_IMPORTED_MODULE_3__['DYNAMIC_COMPONENT_MANIFESTS']
                )
              ),
              __metadata('design:paramtypes', [
                Array,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injector'],
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModuleFactoryLoader'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_2__['LoaderService']
              ])
            ],
            DynamicComponentLoader
          );
          return DynamicComponentLoader;
        })();

        /***/
      },

    /***/ './src/app/main/dynamic-component-loader/dynamic-component-manifest.interface.ts':
      /*!***************************************************************************************!*\
  !*** ./src/app/main/dynamic-component-loader/dynamic-component-manifest.interface.ts ***!
  \***************************************************************************************/
      /*! exports provided: DYNAMIC_COMPONENT, DYNAMIC_COMPONENT_MANIFESTS */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DYNAMIC_COMPONENT', function() {
          return DYNAMIC_COMPONENT;
        });
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DYNAMIC_COMPONENT_MANIFESTS',
          function() {
            return DYNAMIC_COMPONENT_MANIFESTS;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );

        // tslint:disable-next-line:no-any
        var DYNAMIC_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['InjectionToken']('DYNAMIC_COMPONENT');
        // tslint:disable-next-line:no-any
        var DYNAMIC_COMPONENT_MANIFESTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['InjectionToken'](
          'DYNAMIC_COMPONENT_MANIFESTS'
        );

        /***/
      }
  }
]);
//# sourceMappingURL=default~administration-administration-module~administration-attributes-attributes-module~administrat~d7427f47.js.map
