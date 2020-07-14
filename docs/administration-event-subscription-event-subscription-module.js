(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['administration-event-subscription-event-subscription-module'],
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

    /***/ './src/app/main/administration/event-subscription/event-subscription.component.html':
      /*!******************************************************************************************!*\
  !*** ./src/app/main/administration/event-subscription/event-subscription.component.html ***!
  \******************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ "global.search" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button type="button" mat-raised-button (click)="create()" *ngIf="hasUpdateAccessRight">\r\n      {{ "global.create" | translate }}\r\n    </button>\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button type="button" mat-menu-item (click)="refresh()">\r\n        {{ "global.refresh" | translate }}\r\n      </button>\r\n\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".eventSubscriptionList" | translate }} ({{\r\n                    evtSubscriptionsTableDataSource ? evtSubscriptionsTableDataSource.dataCount : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Event subscriptions table -->\r\n\r\n            <div class="grid-cell-content">\r\n              <a-table [dataSource]="evtSubscriptionsTableDataSource">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    type="button"\r\n                    *ngIf="evtSubscriptionsTableDataSource.hasDataSelection"\r\n                    color="warn"\r\n                    mat-raised-button\r\n                    (click)="deleteSelectedEventSubscription()"\r\n                  >\r\n                    {{ "global.delete" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    type="button"\r\n                    mat-raised-button\r\n                    *ngIf="evtSubscriptionsTableDataSource.hasDataSelection"\r\n                    (click)="viewSelectedEventSubscription()"\r\n                  >\r\n                    {{ "global.open" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef="newEventsOnly" let-rowData="rowData">\r\n                  <i *ngIf="rowData.newEventsOnly" class="fa fa-fw fa-check" aria-hidden="true"></i>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef="doNotNotifyOnForms" let-rowData="rowData">\r\n                  <i *ngIf="rowData.doNotNotifyOnForms" class="fa fa-fw fa-check" aria-hidden="true"></i>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/administration/event-subscription/event-subscription.component.ts':
      /*!****************************************************************************************!*\
  !*** ./src/app/main/administration/event-subscription/event-subscription.component.ts ***!
  \****************************************************************************************/
      /*! exports provided: EventSubscriptionComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'EventSubscriptionComponent',
          function() {
            return EventSubscriptionComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/services/export.service */ './src/app/shared/services/export.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _event_subscription_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./event-subscription.service */ './src/app/main/administration/event-subscription/event-subscription.service.ts'
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

        var EventSubscriptionComponent = /** @class */ (function(_super) {
          __extends(EventSubscriptionComponent, _super);
          // private readonly resultsTableExportName: string;
          function EventSubscriptionComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            exportService,
            eventSubscriptionService,
            confirmationService
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
            _this.exportService = exportService;
            _this.eventSubscriptionService = eventSubscriptionService;
            _this.confirmationService = confirmationService;
            _this.filteredRowsNb = 0;
            _this.isReadOnlyForm = false;
            // this.resultsTableExportName = 'Subscriptions-List';
            _this.currentEventSubscription = undefined;
            _this.currentEventSubscriptionIndex = undefined;
            _this.dataForEventSubscriptionExcelExport = [];
            _this.loadEventSubscriptionData();
            _this.initEvtSubscriptionsTableDataSource();
            return _this;
          }
          EventSubscriptionComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
          };
          EventSubscriptionComponent.prototype.initEvtSubscriptionsTableDataSource = function() {
            this.evtSubscriptionsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'subscriptionName',
                  translateKey: this.getTranslateKey('subscriptionName'),
                  width: '20%'
                },
                {
                  field: 'eventType',
                  translateKey: this.getTranslateKey('eventType'),
                  width: '20%'
                },
                {
                  field: 'familyVariantCode',
                  translateKey: this.getTranslateKey('familyVariantCode'),
                  width: '10%'
                },
                {
                  field: 'operatorCode',
                  translateKey: this.getTranslateKey('operatorCode'),
                  width: '10%'
                },
                {
                  field: 'chapter',
                  translateKey: this.getTranslateKey('chapter'),
                  width: '10%'
                },
                {
                  field: 'eventPriority',
                  translateKey: this.getTranslateKey('eventPriority'),
                  width: '10%'
                },
                {
                  field: 'newEventsOnly',
                  translateKey: this.getTranslateKey('newEventsOnly'),
                  width: '10%'
                },
                {
                  field: 'doNotNotifyOnForms',
                  translateKey: this.getTranslateKey('doNotNotifyOnForms'),
                  width: '10%'
                }
              ],
              data: []
            });
          };
          EventSubscriptionComponent.prototype.getComponentName = function() {
            return 'EventSubscriptionComponent';
          };
          // tslint:disable-next-line:no-any
          EventSubscriptionComponent.prototype.onFilter = function(event) {
            this.filteredRowsNb = event.filteredValue.length;
          };
          EventSubscriptionComponent.prototype.loadEventSubscriptionData = function() {
            var _this = this;
            this.eventSubscriptionService.loadEventSubscriptionTableData().subscribe(function(results) {
              _this.evtSubscriptionsTableDataSource.setData(results.list);
              _this.filteredRowsNb = _this.evtSubscriptionsTableDataSource.dataSelectionCount;
              _this.evtSubscriptionsTableDataSource.update();
            });
          };
          EventSubscriptionComponent.prototype.refresh = function() {
            this.loadEventSubscriptionData();
            this.evtSubscriptionsTableDataSource.dataSelection = [];
          };
          EventSubscriptionComponent.prototype.openEventSubscription = function(object, openMode) {
            if (!!object) {
              var labelKey = 'transaction.EventSubscriptonFormComponent';
              var data = {
                id: this.tabService.generateId(),
                componentId: 'EventSubscriptonFormComponent',
                objectId: this.serializationService.serialize(object),
                openMode: openMode
              };
              this.tabService.open(this.tabService.create(data, labelKey, true));
            } else {
              var labelKey = 'transaction.EventSubscriptonFormComponent';
              var data = {
                id: this.tabService.generateId(),
                componentId: 'EventSubscriptonFormComponent',
                objectId: undefined,
                openMode: openMode
              };
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          // public exportTable(): void {
          //   this.eventSubscriptionsTable.list.forEach((subscription) => {
          //     const data: DTOForEventSubscriptionExcelExport = {
          //       subscriptionName: subscription.subscriptionName,
          //       eventType: subscription.eventType,
          //       familyVariantCode: subscription.familyVariantCode,
          //       operatorCode: subscription.operatorCode,
          //       chapter: subscription.chapter,
          //       eventPriority: subscription.eventPriority,
          //       newEventsOnly: subscription.newEventsOnly,
          //       doNotNotifyOnForms: subscription.doNotNotifyOnForms
          //     };
          //     this.dataForEventSubscriptionExcelExport.push(data);
          //   });
          //   if (!!this.componentData) {
          //     this.exportService.toExcel(
          //       this.dataForEventSubscriptionExcelExport,
          //       this.resultsTableExportName,
          //       this.componentData.componentId
          //     );
          //   } else {
          //     super.throwUnboundLocalError('exportTable', 'this.componentData');
          //   }
          // }
          EventSubscriptionComponent.prototype.create = function() {
            this.openEventSubscription(
              undefined,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Create
            );
          };
          EventSubscriptionComponent.prototype.viewSelectedEventSubscription = function() {
            var _this = this;
            this.evtSubscriptionsTableDataSource.dataSelection.forEach(function(subscription) {
              if (subscription) {
                if (subscription.subscriptionName && subscription.subscriptionName.length > 0) {
                  _this.openEventSubscription(
                    subscription,
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read
                  );
                } else {
                  _this.messageService.showErrorMessage('errorOnMissingSubscriptionName');
                }
              }
            });
          };
          EventSubscriptionComponent.prototype.deleteSelectedEventSubscription = function() {
            var _this = this;
            var partialMessageKey = 'global.deleteConfirmationMsg';
            this.confirmationService.confirmDelete({
              messageKey: partialMessageKey,
              accept: function() {
                var ids = [];
                _this.evtSubscriptionsTableDataSource.dataSelection.forEach(function(subscription) {
                  if (!!subscription.subscriptionId) {
                    ids.push(subscription.subscriptionId);
                  } else {
                    _super.prototype.throwUnboundLocalError.call(
                      _this,
                      'deleteSelectedEventSubscription',
                      'subscription.subscriptionId'
                    );
                  }
                });
                _this.eventSubscriptionService.deleteSubscriptions(ids).subscribe(
                  function(result) {
                    _this.messageService.showSuccessMessage('global.deleteSuccessMsg');
                    _this.refresh();
                  },
                  function() {
                    _this.messageService.showErrorMessage('global.deleteErrorMsg');
                  }
                );
              }
            });
          };
          EventSubscriptionComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-event-subscription',
                template: __webpack_require__(
                  /*! ./event-subscription.component.html */ './src/app/main/administration/event-subscription/event-subscription.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__['TabService'],
                _shared_services_export_service__WEBPACK_IMPORTED_MODULE_4__['ExportService'],
                _event_subscription_service__WEBPACK_IMPORTED_MODULE_11__['EventSubscriptionService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__['ConfirmationService']
              ])
            ],
            EventSubscriptionComponent
          );
          return EventSubscriptionComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/administration/event-subscription/event-subscription.module.ts':
      /*!*************************************************************************************!*\
  !*** ./src/app/main/administration/event-subscription/event-subscription.module.ts ***!
  \*************************************************************************************/
      /*! exports provided: EventSubscriptionModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'EventSubscriptionModule',
          function() {
            return EventSubscriptionModule;
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
        /* harmony import */ var _shared_components_dialog_search_contact_dialog_search_contact_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-contact/dialog-search-contact.module */ './src/app/shared/components/dialog-search-contact/dialog-search-contact.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-customer/dialog-search-customer.module */ './src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _event_subscription_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./event-subscription.component */ './src/app/main/administration/event-subscription/event-subscription.component.ts'
        );
        /* harmony import */ var _event_subscription_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./event-subscription.service */ './src/app/main/administration/event-subscription/event-subscription.service.ts'
        );
        /* harmony import */ var _event_subscripton_form_contacts_popup_contacts_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./event-subscripton-form/contacts-popup/contacts-popup.component */ './src/app/main/administration/event-subscription/event-subscripton-form/contacts-popup/contacts-popup.component.ts'
        );
        /* harmony import */ var _event_subscripton_form_event_subscripton_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./event-subscripton-form/event-subscripton-form.component */ './src/app/main/administration/event-subscription/event-subscripton-form/event-subscripton-form.component.ts'
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
          _shared_components_dialog_search_contact_dialog_search_contact_module__WEBPACK_IMPORTED_MODULE_12__[
            'DialogSearchContactModule'
          ],
          _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_13__[
            'DialogSearchCustomerModule'
          ],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_14__['ModalModule'],
          _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_15__['TableModule']
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _event_subscripton_form_contacts_popup_contacts_popup_component__WEBPACK_IMPORTED_MODULE_19__[
            'ContactsPopupComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [
          _event_subscription_component__WEBPACK_IMPORTED_MODULE_17__['EventSubscriptionComponent'],
          _event_subscripton_form_event_subscripton_form_component__WEBPACK_IMPORTED_MODULE_20__[
            'EventSubscriptonFormComponent'
          ]
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [_event_subscription_service__WEBPACK_IMPORTED_MODULE_18__['EventSubscriptionService']];
        var EventSubscriptionModule = /** @class */ (function() {
          function EventSubscriptionModule() {}
          EventSubscriptionModule = __decorate(
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
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_16__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            EventSubscriptionModule
          );
          return EventSubscriptionModule;
        })();

        /***/
      },

    /***/ './src/app/main/administration/event-subscription/event-subscription.service.ts':
      /*!**************************************************************************************!*\
  !*** ./src/app/main/administration/event-subscription/event-subscription.service.ts ***!
  \**************************************************************************************/
      /*! exports provided: EventSubscriptionService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'EventSubscriptionService',
          function() {
            return EventSubscriptionService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
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

        var EventSubscriptionService = /** @class */ (function(_super) {
          __extends(EventSubscriptionService, _super);
          function EventSubscriptionService(http, appConfigService, fleetManagementApi, productStructureManagement) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.fleetManagementApi = fleetManagementApi;
            _this.productStructureManagement = productStructureManagement;
            return _this;
          }
          EventSubscriptionService.prototype.loadEventSubscriptionTableData = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoSubscriptionsBySearchCriteria);
          };
          EventSubscriptionService.prototype.deleteSubscriptions = function(ids) {
            return _super.prototype.post.call(this, this.fleetManagementApi.removeBidoSubscription, ids);
          };
          /******
           * FORM
           ******/
          EventSubscriptionService.prototype.loadEventTypes = function() {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findAllBidoNotificationTypeByTypeCategoryCatalog
            );
          };
          EventSubscriptionService.prototype.loadFamilyVariants = function() {
            return _super.prototype.post.call(this, this.productStructureManagement.findAllBireVariantVersions);
          };
          EventSubscriptionService.prototype.loadSubscription = function(id) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.getSubscriptionDataAndContactListBySubscriptionId,
              id
            );
          };
          EventSubscriptionService.prototype.findBidoCustomersBySearchCriteria = function(criteria) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoCustomersBySearchCriteria,
              criteria
            );
          };
          EventSubscriptionService.prototype.saveCatalog = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.saveCatalog, input);
          };
          EventSubscriptionService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])({
                providedIn: 'root'
              }),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__['AppConfigService'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__['FleetManagementApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__[
                  'ProductStructureManagementApi'
                ]
              ])
            ],
            EventSubscriptionService
          );
          return EventSubscriptionService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/administration/event-subscription/event-subscripton-form/contacts-popup/contacts-popup.component.html':
      /*!****************************************************************************************************************************!*\
  !*** ./src/app/main/administration/event-subscription/event-subscripton-form/contacts-popup/contacts-popup.component.html ***!
  \****************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group required">\r\n      <label class="form-label">{{ getComponentName() + ".contactName" | translate }}</label>\r\n      <div class="form-control form-control-with-btn">\r\n        <input\r\n          type="button"\r\n          style="text-align: left"\r\n          class="aw-input"\r\n          [(ngModel)]="contact.contactName"\r\n          (click)="quickSearchContact()"\r\n        />\r\n        <i\r\n          style="padding-bottom: 2%"\r\n          class="fa fa-fw fa-search aw-icon btn-search"\r\n          aria-hidden="true"\r\n          (click)="quickSearchContact()"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".customer" | translate }}</label>\r\n      <div class="form-control">\r\n        <input\r\n          type="text"\r\n          style="width: 47%; border-bottom-color: black"\r\n          class="aw-input"\r\n          [(ngModel)]="contact.customerCode"\r\n          disabled\r\n        />\r\n        &nbsp; &nbsp;\r\n        <input\r\n          type="text"\r\n          style="width: 47%; border-bottom-color: black"\r\n          class="aw-input"\r\n          [(ngModel)]="contact.customerName"\r\n          disabled\r\n        />\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="cancel()">{{ "global.cancel" | translate }}</button>\r\n    <button type="button" mat-raised-button color="primary" (click)="associate()" [disabled]="!enableAssociateButton()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-contact\r\n  *ngIf="showQuickSearchContactPopup"\r\n  [(display)]="showQuickSearchContactPopup"\r\n  [contact-name]="contact.contactName"\r\n  (onSelected)="setSelectedContact($event)"\r\n></aw-dialog-search-contact>\r\n';

        /***/
      },

    /***/ './src/app/main/administration/event-subscription/event-subscripton-form/contacts-popup/contacts-popup.component.ts':
      /*!**************************************************************************************************************************!*\
  !*** ./src/app/main/administration/event-subscription/event-subscripton-form/contacts-popup/contacts-popup.component.ts ***!
  \**************************************************************************************************************************/
      /*! exports provided: ContactsPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ContactsPopupComponent', function() {
          return ContactsPopupComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
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

        var ContactsPopupComponent = /** @class */ (function(_super) {
          __extends(ContactsPopupComponent, _super);
          function ContactsPopupComponent(messageService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'ContactsPopupComponent'
              ) || this;
            _this.messageService = messageService;
            _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.showQuickSearchContactPopup = false;
            return _this;
          }
          ContactsPopupComponent.prototype.ngOnInit = function() {
            if (!this.contact) {
              this.contact = {};
            }
          };
          ContactsPopupComponent.prototype.quickSearchContact = function() {
            this.showQuickSearchContactPopup = true;
          };
          ContactsPopupComponent.prototype.associate = function() {
            if (!!this.contact) {
              this.onCreate.emit(this.contact);
              this.display = false;
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'associate', 'this.contact');
            }
          };
          ContactsPopupComponent.prototype.cancel = function() {
            this.display = false;
          };
          ContactsPopupComponent.prototype.enableAssociateButton = function() {
            if (!!this.contact && !!this.contact.contactName && this.contact.contactName.trim().length !== 0) {
              return true;
            } else {
              return false;
            }
          };
          /*************************************************************************
           * Dialog Search Customer
           *************************************************************************/
          ContactsPopupComponent.prototype.setSelectedContact = function(event) {
            if (!!this.contact) {
              if (Object.keys(event).length === 0) {
                this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
              }
              this.contact.contactName = event.contactName;
              this.contact.customerCode = event.customerCode;
              this.contact.customerName = event.customerName;
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'setSelectedContact', 'this.contact');
            }
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            ContactsPopupComponent.prototype,
            'displayChange',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            ContactsPopupComponent.prototype,
            'contact',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            ContactsPopupComponent.prototype,
            'onCreate',
            void 0
          );
          ContactsPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-contacts-popup',
                template: __webpack_require__(
                  /*! ./contacts-popup.component.html */ './src/app/main/administration/event-subscription/event-subscripton-form/contacts-popup/contacts-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__['MessageService']
              ])
            ],
            ContactsPopupComponent
          );
          return ContactsPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/administration/event-subscription/event-subscripton-form/event-subscripton-form.component.html':
      /*!*********************************************************************************************************************!*\
  !*** ./src/app/main/administration/event-subscription/event-subscripton-form/event-subscripton-form.component.html ***!
  \*********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div *ngIf="!isCreateOpenMode && componentData && componentData.objectId" class="page-subtitle">\r\n          - {{ serializationService.deserialize(componentData.objectId)["subscriptionName"] }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button *ngIf="isReadOpenMode && hasUpdateAccessRight" type="button" mat-raised-button (click)="editSubscription()">\r\n      {{ "global.edit" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode && !isCreateOpenMode"\r\n      type="button"\r\n      color="warn"\r\n      mat-raised-button\r\n      (click)="cancelSubscription()"\r\n    >\r\n      {{ "global.cancel" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      class="btn-with-spinner"\r\n      color="primary"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="saveSubscription()"\r\n    >\r\n      <span class="lds-hourglass" *ngIf="showSaveSpinner"></span>\r\n      {{ "global.save" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item (click)="reloadSubscription()">{{ "global.refresh" | translate }}</button>\r\n      <button mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <div class="grid-cell-title">\r\n                  <span>{{ "page.mainData" | translate }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="grid-cell-content">\r\n              <div class="grid-cell--12">\r\n                <div class="grid-row">\r\n                  <div class="form-group required">\r\n                    <label class="form-label">{{ componentData.componentId + ".subscriptionName" | translate }} </label>\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [(ngModel)]="subscription.subscriptionName"\r\n                        [disabled]="isReadOpenMode || !isCreateOpenMode"\r\n                        maxlength="100"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".eventType" | translate }} </label>\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="eventTypes"\r\n                        [(ngModel)]="subscription.eventType"\r\n                        [showClear]="true"\r\n                        placeholder="&nbsp;"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"\r\n                      >{{ componentData.componentId + ".familyVariantCode" | translate }}\r\n                    </label>\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="familyVariants"\r\n                        [(ngModel)]="subscription.familyVariantCode"\r\n                        [showClear]="true"\r\n                        placeholder="&nbsp;"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class="grid-cell--12">\r\n                <div class="grid-row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".operatorCode" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="submit"\r\n                        (click)="quickSearchBusinessPartner()"\r\n                        style="width: 40%; text-align: left"\r\n                        class="aw-input"\r\n                        [(ngModel)]="subscription.operatorCode"\r\n                        [disabled]="isReadOpenMode"\r\n                      />&nbsp;&nbsp;\r\n                      <i\r\n                        *ngIf="!isReadOpenMode"\r\n                        class="fa fa-fw fa-search"\r\n                        aria-hidden="true"\r\n                        (click)="quickSearchBusinessPartner()"\r\n                      ></i\r\n                      >&nbsp;&nbsp;\r\n                      <input\r\n                        type="submit"\r\n                        style="width: 40%; text-align: left"\r\n                        class="aw-input"\r\n                        [(ngModel)]="operatorName"\r\n                        [disabled]="isReadOpenMode"\r\n                        maxlength="50"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".eventPriority" | translate }} </label>\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="eventPriorities"\r\n                        [(ngModel)]="subscription.eventPriority"\r\n                        [showClear]="true"\r\n                        placeholder="&nbsp;"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".chapter" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [(ngModel)]="subscription.chapter"\r\n                        [disabled]="isReadOpenMode"\r\n                        maxlength="2"\r\n                        style="width:30%"\r\n                      />\r\n                      &nbsp;&nbsp;\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [(ngModel)]="subscription.section"\r\n                        [disabled]="isReadOpenMode"\r\n                        maxlength="2"\r\n                        style="width:30%"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class="grid-cell--12">\r\n                <div class="grid-row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".newEventsOnly" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-checkbox\r\n                        class="aw-checkbox"\r\n                        binary="true"\r\n                        [(ngModel)]="subscription.newEventsOnly"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-checkbox>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{\r\n                      componentData.componentId + ".doNotNotifyOnForms" | translate\r\n                    }}</label>\r\n                    <div class="form-control">\r\n                      <p-checkbox\r\n                        class="aw-checkbox"\r\n                        binary="true"\r\n                        [(ngModel)]="subscription.doNotNotifyOnForms"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-checkbox>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Contacts table -->\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ componentData.componentId + ".contacts" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content  grid-cell-content-with-section">\r\n              <div class="section">\r\n                <h4 class="section-title">\r\n                  {{ componentData.componentId + ".contactsLinkedToSubscription" | translate }}\r\n                </h4>\r\n\r\n                <div class="section-content">\r\n                  <a-table [dataSource]="contactsTableDataSource">\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && !contactsTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="addNewContact()"\r\n                      >\r\n                        {{ "global.add" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && contactsTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        color="warn"\r\n                        mat-raised-button\r\n                        (click)="deleteContact()"\r\n                      >\r\n                        {{ "global.delete" | translate }}\r\n                      </button>\r\n                    </ng-template>\r\n\r\n                    <ng-template columnDef="opeCode" let-rowData="rowData">\r\n                      <a (click)="openOperationForm(rowData)">{{ rowData.opeCode }}</a>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- POPUP ZONE -->\r\n<aw-dialog-search-customer\r\n  *ngIf="showQuickSearchBusinessPartnerPopup"\r\n  [(display)]="showQuickSearchBusinessPartnerPopup"\r\n  [customer-code]="subscription.operatorCode"\r\n  (onSelected)="setSelectedBusinessPartner($event)"\r\n>\r\n</aw-dialog-search-customer>\r\n\r\n<aw-contacts-popup\r\n  *ngIf="showContactsPopup"\r\n  [(display)]="showContactsPopup"\r\n  [contact]="currentContact"\r\n  (onCreate)="createContact($event)"\r\n></aw-contacts-popup>\r\n';

        /***/
      },

    /***/ './src/app/main/administration/event-subscription/event-subscripton-form/event-subscripton-form.component.ts':
      /*!*******************************************************************************************************************!*\
  !*** ./src/app/main/administration/event-subscription/event-subscripton-form/event-subscripton-form.component.ts ***!
  \*******************************************************************************************************************/
      /*! exports provided: EventSubscriptonFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'EventSubscriptonFormComponent',
          function() {
            return EventSubscriptonFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
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
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/utils/bido-family-variant-utils */ './src/app/shared/utils/bido-family-variant-utils.ts'
        );
        /* harmony import */ var _event_subscription_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../event-subscription.service */ './src/app/main/administration/event-subscription/event-subscription.service.ts'
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

        var EventSubscriptonFormComponent = /** @class */ (function(_super) {
          __extends(EventSubscriptonFormComponent, _super);
          function EventSubscriptonFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            eventSubscriptionService,
            confirmationService,
            propertiesService
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
            _this.eventSubscriptionService = eventSubscriptionService;
            _this.confirmationService = confirmationService;
            _this.propertiesService = propertiesService;
            _this.tabContactsId = 'contacts';
            _this.initContactsTableDataSource();
            _this.init();
            return _this;
          }
          EventSubscriptonFormComponent.prototype.initContactsTableDataSource = function() {
            this.contactsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                { field: 'customerCode', translateKey: this.getTranslateKey('customerCode'), width: '40%' },
                { field: 'customerName', translateKey: this.getTranslateKey('customerName'), width: '30%' },
                { field: 'contactName', translateKey: this.getTranslateKey('contactName'), width: '30%' }
              ],
              data: []
            });
          };
          EventSubscriptonFormComponent.prototype.init = function() {
            this.subscription = {};
            this.operatorName = undefined;
            this.eventTypes = [];
            this.familyVariants = [];
            this.eventSubscriptionsTable = { list: [], moreResults: false };
            this.currentTabId = this.tabContactsId;
            this.contactsTableDataSource.dataSelection = [];
            this.currentContact = {};
            this.currentContactIndex = undefined;
            this.existingSubscriptions = [];
            this.loadEventTypes();
            this.loadFamilyVariants();
            this.loadEventPriorities();
            this.getExistingSubscriptionNames();
            this.showQuickSearchBusinessPartnerPopup = false;
            this.showContactsPopup = false;
          };
          EventSubscriptonFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            if (this.componentData) {
              this.updateOpenMode(this.componentData.openMode);
              var subscriptionContext = this.isCreateOpenMode
                ? 'tab.createMode'
                : !!this.componentData.objectId &&
                  this.serializationService.deserialize(this.componentData.objectId).subscriptionName;
              this.displayComponentContext(subscriptionContext, this.isCreateOpenMode);
              this.loadSubscription();
            }
          };
          EventSubscriptonFormComponent.prototype.loadEventTypes = function() {
            var _this = this;
            this.eventSubscriptionService.loadEventTypes().subscribe(
              function(results) {
                _this.eventTypes = results;
              },
              function() {
                _this.messageService.showErrorMessage('errorOnLoadingEventTypes');
              }
            );
          };
          EventSubscriptonFormComponent.prototype.loadFamilyVariants = function() {
            var _this = this;
            this.eventSubscriptionService.loadFamilyVariants().subscribe(
              function(results) {
                results.forEach(function(result) {
                  var label1 = result.familyname ? result.familyname : result.familyCode;
                  var label2 = result.variantName ? result.variantName : result.variantCode;
                  var label = label1 + '-' + label2;
                  var value = _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_11__[
                    'BidoFamilyVariantUtils'
                  ].buildFamilyVariantCode(result.familyCode, result.variantCode);
                  if (!!label && !!value) {
                    var familyVariant = {
                      label: label,
                      value: value
                    };
                    _this.familyVariants.push(familyVariant);
                  } else {
                    _super.prototype.throwUnboundLocalError.call(_this, 'loadFamilyVariants', 'label && value');
                  }
                });
              },
              function() {
                _this.messageService.showErrorMessage('errorOnLoadingFamilyVariants');
              }
            );
          };
          EventSubscriptonFormComponent.prototype.loadEventPriorities = function() {
            var _this = this;
            this.propertiesService.getValue('getEventPriorityMap').subscribe(
              function(results) {
                _this.eventPriorities = results;
              },
              function() {
                _this.messageService.showErrorMessage('errorOnLoadingEventPriorities');
              }
            );
          };
          EventSubscriptonFormComponent.prototype.loadSubscription = function() {
            var _this = this;
            if (!!this.componentData && !!this.componentData.objectId) {
              var subscriptionId_1 = this.serializationService.deserialize(this.componentData.objectId).subscriptionId;
              this.eventSubscriptionService.loadSubscription(subscriptionId_1).subscribe(function(results) {
                if (!!results.bidoSubscriptionDTO && !!results.bidoContactDTO) {
                  var bidoCustomerDTO = {
                    customerCode: results.bidoSubscriptionDTO.operatorCode
                  };
                  _this.eventSubscriptionService
                    .findBidoCustomersBySearchCriteria(bidoCustomerDTO)
                    .subscribe(function(result) {
                      if (result) {
                        _this.operatorName = result.list[0].customerName;
                      }
                    });
                  _this.subscription = results.bidoSubscriptionDTO;
                  _this.subscription.subscriptionId = subscriptionId_1;
                  _this.contactsTableDataSource.setData(results.bidoContactDTO);
                  _this.contactsTableDataSource.update();
                }
              });
            }
          };
          EventSubscriptonFormComponent.prototype.getExistingSubscriptionNames = function() {
            var _this = this;
            this.eventSubscriptionService.loadEventSubscriptionTableData().subscribe(function(results) {
              results.list.forEach(function(result) {
                if (!!result.subscriptionName) {
                  _this.existingSubscriptions.push(result.subscriptionName);
                } else {
                  _super.prototype.throwUnboundLocalError.call(
                    _this,
                    'getExistingSubscriptionName',
                    'result.subscriptionName'
                  );
                }
              });
            });
          };
          EventSubscriptonFormComponent.prototype.getComponentName = function() {
            return 'EventSubscriptonFormComponent';
          };
          EventSubscriptonFormComponent.prototype.reloadSubscription = function() {
            this.init();
            this.loadSubscription();
          };
          EventSubscriptonFormComponent.prototype.editSubscription = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write
            );
          };
          EventSubscriptonFormComponent.prototype.saveSubscription = function() {
            var _this = this;
            this.eventSubscriptionService.loadEventSubscriptionTableData().subscribe(function(subscriptionData) {
              _this.eventSubscriptionsTable = subscriptionData;
              var input = {
                bidoSubscriptionList: {
                  bidoSubscriptionDTO: _this.subscription,
                  bidoContactDTO: _this.contactsTableDataSource.data
                }
              };
              var create = 0;
              var update = 1;
              if (!_this.subscription.subscriptionName || _this.subscription.subscriptionName.trim().length === 0) {
                _this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
              } else if (!_this.contactsTableDataSource.hasData) {
                _this.messageService.showErrorMessage(_this.getTranslateKey('addContact'));
              } else {
                if (!!_this.componentData && _this.componentData.openMode === create) {
                  if (_this.existingSubscriptions.includes(_this.subscription.subscriptionName)) {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('nameAlreadyUsed'));
                  } else {
                    _this.showSaveSpinner = true;
                    _this.eventSubscriptionService.saveCatalog(input).subscribe(
                      function(result) {
                        _this.messageService.showSuccessMessage('global.successOnSave');
                        _this.eventSubscriptionService.loadEventSubscriptionTableData().subscribe(function(results) {
                          results.list.forEach(function(re) {
                            if (
                              !!input.bidoSubscriptionList &&
                              !!input.bidoSubscriptionList.bidoSubscriptionDTO &&
                              re.subscriptionName === input.bidoSubscriptionList.bidoSubscriptionDTO.subscriptionName &&
                              re.subscriptionId
                            ) {
                              _this.eventSubscriptionService
                                .loadSubscription(re.subscriptionId)
                                .subscribe(function(res) {
                                  if (
                                    !!res.bidoSubscriptionDTO &&
                                    !!res.bidoContactDTO &&
                                    !!res.bidoSubscriptionDTO.operatorCode
                                  ) {
                                    var bidoCustomerDTO = {
                                      customerCode: !!res.bidoSubscriptionDTO && res.bidoSubscriptionDTO.operatorCode
                                    };
                                    _this.eventSubscriptionService
                                      .findBidoCustomersBySearchCriteria(bidoCustomerDTO)
                                      .subscribe(function(r) {
                                        if (r) {
                                          _this.operatorName = r.list[0].customerName;
                                        }
                                      });
                                    _this.subscription = res.bidoSubscriptionDTO;
                                    _this.contactsTableDataSource.setData(res.bidoContactDTO);
                                    _this.contactsTableDataSource.update();
                                  }
                                });
                            }
                          });
                        });
                        if (!!_this.componentData) {
                          _this.componentData.objectId = _this.serializationService.serialize(_this.subscription);
                          if (!!_this.subscription.subscriptionName) {
                            _this.displayComponentContext(_this.subscription.subscriptionName, _this.isWriteOpenMode);
                            _this.updateOpenMode(
                              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode']
                                .Write
                            );
                            _this.componentData.openMode = 1;
                          } else {
                            _super.prototype.throwUnboundLocalError.call(
                              _this,
                              'saveSubscription',
                              'this.subscription.subscriptionName'
                            );
                          }
                        } else {
                          _super.prototype.throwUnboundLocalError.call(_this, 'saveSubscription', 'this.componentData');
                        }
                        _this.showSaveSpinner = false;
                      },
                      function() {
                        _this.messageService.showErrorMessage('global.errorOnSave');
                        _this.showSaveSpinner = false;
                      }
                    );
                  }
                } else if (!!_this.componentData && _this.componentData.openMode === update) {
                  var dataInDB_1 = false;
                  _this.eventSubscriptionsTable.list.forEach(function(sub) {
                    if (sub.subscriptionName === _this.subscription.subscriptionName) {
                      dataInDB_1 = true;
                    }
                  });
                  if (dataInDB_1) {
                    _this.showSaveSpinner = true;
                    _this.eventSubscriptionService.saveCatalog(input).subscribe(
                      function(result) {
                        _this.messageService.showSuccessMessage('global.successOnSave');
                        _this.eventSubscriptionService.loadEventSubscriptionTableData().subscribe(function(results) {
                          results.list.forEach(function(re) {
                            if (
                              !!input.bidoSubscriptionList &&
                              !!input.bidoSubscriptionList.bidoSubscriptionDTO &&
                              !!re.subscriptionId &&
                              re.subscriptionName === input.bidoSubscriptionList.bidoSubscriptionDTO.subscriptionName
                            ) {
                              _this.eventSubscriptionService
                                .loadSubscription(re.subscriptionId)
                                .subscribe(function(res) {
                                  if (
                                    !!res.bidoSubscriptionDTO &&
                                    !!res.bidoSubscriptionDTO.operatorCode &&
                                    !!res.bidoContactDTO
                                  ) {
                                    var bidoCustomerDTO = {
                                      customerCode: res.bidoSubscriptionDTO.operatorCode
                                    };
                                    _this.eventSubscriptionService
                                      .findBidoCustomersBySearchCriteria(bidoCustomerDTO)
                                      .subscribe(function(r) {
                                        if (r) {
                                          _this.operatorName = r.list[0].customerName;
                                        }
                                      });
                                    _this.subscription = res.bidoSubscriptionDTO;
                                    _this.contactsTableDataSource.setData(res.bidoContactDTO);
                                    _this.contactsTableDataSource.update();
                                  }
                                });
                            }
                          });
                        });
                        _this.updateOpenMode(
                          _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write
                        );
                        if (!!_this.componentData) {
                          _this.componentData.objectId = _this.serializationService.serialize(_this.subscription);
                        }
                        _this.showSaveSpinner = false;
                      },
                      function() {
                        _this.messageService.showErrorMessage('global.errorOnSave');
                        _this.showSaveSpinner = false;
                      }
                    );
                  } else {
                    _this.messageService.showErrorMessage('global.internalServerError');
                  }
                }
              }
            });
          };
          EventSubscriptonFormComponent.prototype.cancelSubscription = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read
            );
            this.reloadSubscription();
          };
          EventSubscriptonFormComponent.prototype.quickSearchBusinessPartner = function() {
            this.showQuickSearchBusinessPartnerPopup = true;
          };
          EventSubscriptonFormComponent.prototype.openContactsTab = function() {
            this.currentTabId = this.tabContactsId;
          };
          /*******
           * Popup
           *******/
          EventSubscriptonFormComponent.prototype.addNewContact = function() {
            this.showContactsPopup = true;
            this.currentContact = {};
          };
          EventSubscriptonFormComponent.prototype.deleteContact = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: 'global.confirmSelectedDataDelete',
              accept: function() {
                _this.contactsTableDataSource.dataSelection.forEach(function(selectedContact) {
                  _this.contactsTableDataSource.setData(
                    _this.contactsTableDataSource.data.filter(function(contact) {
                      return contact.contactName !== selectedContact.contactName;
                    })
                  );
                  _this.contactsTableDataSource.update();
                });
                _this.contactsTableDataSource.dataSelection = [];
              }
            });
          };
          EventSubscriptonFormComponent.prototype.createContact = function(event) {
            var inContactsTable = this.contactsTableDataSource.data.filter(function(contact) {
              return contact.contactName === event.contactName;
            });
            if (inContactsTable.length === 0) {
              this.contactsTableDataSource.addData([event]);
            }
          };
          /*************************************************************************
           * Dialog Search Customer
           *************************************************************************/
          EventSubscriptonFormComponent.prototype.setSelectedBusinessPartner = function(event) {
            if (Object.keys(event).length === 0) {
              this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
            }
            this.subscription.operatorCode = event.customerCode;
            this.operatorName = event.customerName;
          };
          EventSubscriptonFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-event-subscripton-form',
                template: __webpack_require__(
                  /*! ./event-subscripton-form.component.html */ './src/app/main/administration/event-subscription/event-subscripton-form/event-subscripton-form.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__['TabService'],
                _event_subscription_service__WEBPACK_IMPORTED_MODULE_12__['EventSubscriptionService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__['ConfirmationService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__['PropertiesService']
              ])
            ],
            EventSubscriptonFormComponent
          );
          return EventSubscriptonFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_10__['FormPageComponent']);

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
//# sourceMappingURL=administration-event-subscription-event-subscription-module.js.map
