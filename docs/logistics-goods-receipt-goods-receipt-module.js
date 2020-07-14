(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['logistics-goods-receipt-goods-receipt-module'],
  {
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

    /***/ './src/app/main/logistics/goods-receipt/form/dialog-add-item/dialog-add-item.component.html':
      /*!**************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/form/dialog-add-item/dialog-add-item.component.html ***!
  \**************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="40">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <div class="form-control aw-selectbutton-wrapper">\r\n          <p-selectButton\r\n            [(ngModel)]="selectedChoiceItem"\r\n            [options]="choiceListItem"\r\n            (onChange)="resetChoiceItem()"\r\n          ></p-selectButton>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row" *ngIf="selectedChoiceItem === component.CURRENT_PACKAGE && createWithPackage">\r\n      <div class="form-group required">\r\n        <label class="form-label">{{ getComponentName() + ".packageNumber" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            placeholder="&nbsp;"\r\n            [showClear]="true"\r\n            [(ngModel)]="packageDto"\r\n            [options]="packageList"\r\n            appendTo="body"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row" *ngIf="selectedChoiceItem === component.NEW_PACKAGE && createWithPackage">\r\n      <div class="form-group required">\r\n        <label class="form-label">{{ getComponentName() + ".packageType" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            [showClear]="true"\r\n            placeholder="&nbsp;"\r\n            [(ngModel)]="this.packageDto.packageType"\r\n            [options]="packagesTypesList"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row" *ngIf="selectedChoiceItem === component.NEW_PACKAGE && createWithPackage">\r\n      <div class="form-group">\r\n        <div class="form-control aw-selectbutton-wrapper">\r\n          <p-selectButton\r\n            [(ngModel)]="selectedChoicePackage"\r\n            [options]="choiceListPackage"\r\n            (onChange)="resetChoicePackage()"\r\n          ></p-selectButton>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group required" *ngIf="!isPackageCodeGenerated">\r\n        <label class="form-label">{{ getComponentName() + ".packageNumber" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="packageDto.externalPackageCode" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group required">\r\n        <label class="form-label">{{ getComponentName() + ".article" | translate }}</label>\r\n\r\n        <div class="form-control form-control-with-modal">\r\n          <div class="form-control-data" (click)="openSearchPnDialog()">\r\n            {{ article }}\r\n          </div>\r\n\r\n          <div *ngIf="article" class="btn-clear-wrapper">\r\n            <i\r\n              class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n              aria-hidden="true"\r\n              (click)="article = undefined"\r\n            ></i>\r\n          </div>\r\n          <div class="btn-search-wrapper">\r\n            <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="openSearchPnDialog()"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="articleDesignation" *ngIf="pnUse">\r\n      {{ pnUse.articleDesignation }}\r\n    </div>\r\n    <div class="row">\r\n      <div class="form-group required">\r\n        <label class="form-label">{{ getComponentName() + ".quantity" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <input\r\n            type="number"\r\n            name="docName"\r\n            [min]="0"\r\n            oninput="validity.valid||(value=\'\');"\r\n            class="aw-input"\r\n            [(ngModel)]="quantity"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div\r\n        class="form-group"\r\n        [ngClass]="{\r\n          \'visibility--hidden\': !(pnUse && pnUse.quantityUnit)\r\n        }"\r\n      >\r\n        <label class="form-label">{{ "unit" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <div class="form-control-generic" *ngIf="pnUse && pnUse.pnCode && pnUse.quantityUnit">\r\n            {{ pnUse.quantityUnit }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">{{ "global.cancel" | translate }}</button>\r\n    <button type="button" color="primary" mat-raised-button (click)="validate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-pn\r\n  *ngIf="searchPnDialogVisible"\r\n  [(display)]="searchPnDialogVisible"\r\n  (onSelected)="onSelectPn($event)"\r\n  [withAllTypes]="true"\r\n  [showPartTypeSelection]="true"\r\n></aw-dialog-search-pn>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/form/dialog-add-item/dialog-add-item.component.scss':
      /*!**************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/form/dialog-add-item/dialog-add-item.component.scss ***!
  \**************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .articleDesignation {\n  font-style: italic;\n  padding: 0px 0 0 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvZ29vZHMtcmVjZWlwdC9mb3JtL2RpYWxvZy1hZGQtaXRlbS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbG9naXN0aWNzXFxnb29kcy1yZWNlaXB0XFxmb3JtXFxkaWFsb2ctYWRkLWl0ZW1cXGRpYWxvZy1hZGQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL2dvb2RzLXJlY2VpcHQvZm9ybS9kaWFsb2ctYWRkLWl0ZW0vZGlhbG9nLWFkZC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5hcnRpY2xlRGVzaWduYXRpb24ge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgcGFkZGluZzogMHB4IDAgMCAxNnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/form/dialog-add-item/dialog-add-item.component.ts':
      /*!************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/form/dialog-add-item/dialog-add-item.component.ts ***!
  \************************************************************************************************/
      /*! exports provided: DialogAddItemComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DialogAddItemComponent', function() {
          return DialogAddItemComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../delivery-folder-search.service */ './src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts'
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

        var DialogAddItemComponent = /** @class */ (function(_super) {
          __extends(DialogAddItemComponent, _super);
          function DialogAddItemComponent(
            sessionService,
            logisticsService,
            propertiesService,
            deliveryFolderSearchService,
            messageService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read,
                'DialogAddItemComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.logisticsService = logisticsService;
            _this.propertiesService = propertiesService;
            _this.deliveryFolderSearchService = deliveryFolderSearchService;
            _this.messageService = messageService;
            _this.component = DialogAddItemComponent_1;
            _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.init();
            return _this;
          }
          DialogAddItemComponent_1 = DialogAddItemComponent;
          DialogAddItemComponent.prototype.ngOnInit = function() {
            this.loadDropDowns();
          };
          DialogAddItemComponent.prototype.loadDropDowns = function() {
            var _this = this;
            var packageTypes = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                .PACKAGE_TYPE_MAP
            );
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['forkJoin'])({ packageTypes: packageTypes }).subscribe({
              next: function(results) {
                _this.packagesTypesList = results.packageTypes;
                _this.packageList = _this.loadPackageList();
                _this.getChoiceListItem();
                _this.getChoiceListPackage();
              }
            });
          };
          DialogAddItemComponent.prototype.loadPackageList = function() {
            return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_8__['ListUtils']
              .orEmpty(this.packageDtoList)
              .filter(function(pack) {
                return !!pack.packageCode;
              })
              .map(function(bidtPackage) {
                var unit = {
                  label: bidtPackage.packageCode,
                  value: bidtPackage
                };
                return unit;
              });
          };
          DialogAddItemComponent.prototype.getChoiceListItem = function() {
            this.choiceListItem = this.deliveryFolderSearchService.loadCreationChoiceList();
            this.selectedChoiceItem =
              this.choiceListItem && this.choiceListItem.length ? this.choiceListItem[0].value : '';
          };
          DialogAddItemComponent.prototype.getChoiceListPackage = function() {
            this.choiceListPackage = this.deliveryFolderSearchService.loadCreationChoiceListPackageNumber();
            this.selectedChoicePackage =
              this.choiceListPackage && this.choiceListPackage.length ? this.choiceListPackage[0].value : '';
          };
          DialogAddItemComponent.prototype.onSelectPn = function(pn) {
            this.article = pn.pnCode;
            this.pnUse = pn;
          };
          DialogAddItemComponent.prototype.openSearchPnDialog = function() {
            this.searchPnDialogVisible = true;
          };
          DialogAddItemComponent.prototype.validate = function() {
            var _this = this;
            if (this.validateInputs()) {
              // C50
              var input = {
                material: this.pnUse,
                packageDto: this.packageDto,
                createWithPackage: this.createWithPackage,
                quantity: this.quantity,
                bidtDeliveryFolder: this.deliveryFolder,
                isPackageCodeGenerated: this.isPackageCodeGenerated
              };
              this.logisticsService.addReceiptItem(input).subscribe(function(res) {
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnCreate'));
                _this.onCreate.emit(res);
                _this.closeDialog();
              });
            }
          };
          DialogAddItemComponent.prototype.init = function() {
            this.searchPnDialogVisible = false;
            this.createWithPackage = true;
            this.isPackageCodeGenerated = true;
          };
          DialogAddItemComponent.prototype.validateInputs = function() {
            return !!this.article && this.packageDto !== undefined && !!this.quantity;
          };
          DialogAddItemComponent.prototype.resetChoiceItem = function() {
            this.changeModeItem();
          };
          DialogAddItemComponent.prototype.changeModeItem = function() {
            switch (this.selectedChoiceItem) {
              case this.component.CURRENT_PACKAGE:
                this.packageDto = undefined;
                this.createWithPackage = true;
                break;
              case this.component.NEW_PACKAGE:
                this.packageDto = {};
                this.createWithPackage = true;
                break;
              case this.component.WWITHOUT_PACKAGE:
                this.packageDto = {};
                this.createWithPackage = false;
                break;
              default:
                break;
            }
          };
          DialogAddItemComponent.prototype.resetChoicePackage = function() {
            this.changeModePackage();
          };
          DialogAddItemComponent.prototype.changeModePackage = function() {
            switch (this.selectedChoicePackage) {
              case this.component.GENERATE:
                this.isPackageCodeGenerated = true;
                break;
              case this.component.ENTER:
                this.isPackageCodeGenerated = false;
                break;
              default:
                break;
            }
          };
          var DialogAddItemComponent_1;
          DialogAddItemComponent.GENERATE = '0';
          DialogAddItemComponent.ENTER = '1';
          DialogAddItemComponent.CURRENT_PACKAGE = '0';
          DialogAddItemComponent.NEW_PACKAGE = '1';
          DialogAddItemComponent.WWITHOUT_PACKAGE = '2';
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogAddItemComponent.prototype,
            'deliveryFolder',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogAddItemComponent.prototype,
            'packageDtoList',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogAddItemComponent.prototype,
            'onCreate',
            void 0
          );
          DialogAddItemComponent = DialogAddItemComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-add-item',
                template: __webpack_require__(
                  /*! ./dialog-add-item.component.html */ './src/app/main/logistics/goods-receipt/form/dialog-add-item/dialog-add-item.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-add-item.component.scss */ './src/app/main/logistics/goods-receipt/form/dialog-add-item/dialog-add-item.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__['SessionService'],
                _logistics_service__WEBPACK_IMPORTED_MODULE_9__['LogisticsService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__['PropertiesService'],
                _delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_10__['DeliveryFolderSearchService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__['MessageService']
              ])
            ],
            DialogAddItemComponent
          );
          return DialogAddItemComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/form/dialog-add-material/dialog-add-material.component.html':
      /*!**********************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/form/dialog-add-material/dialog-add-material.component.html ***!
  \**********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="55">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="section">\r\n      <h4 class="section-title">\r\n        {{ getComponentName() + ".item" | translate }}\r\n      </h4>\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <div class="form-control aw-selectbutton-wrapper">\r\n            <p-selectButton\r\n              [(ngModel)]="selectedChoiceItem"\r\n              [options]="choiceListItem"\r\n              (onChange)="resetChoiceItem()"\r\n            ></p-selectButton>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row" *ngIf="selectedChoiceItem === component.EXISTING_ITEM">\r\n        <div class="form-group required flex--3" [ngClass]="isDraftStatus ? \'flex--4\' : \'flex--3\'">\r\n          <label class="form-label">{{ getComponentName() + ".item" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              placeholder="&nbsp;"\r\n              [showClear]="true"\r\n              [(ngModel)]="item"\r\n              [options]="itemsList"\r\n              appendTo="body"\r\n              (onChange)="onChangeItem(item)"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class="form-group flex--1" *ngIf="item">\r\n          <label class="form-label">{{\r\n            getComponentName() + (isDraftStatus ? ".quantity" : ".missingQuantity") | translate\r\n          }}</label>\r\n\r\n          <div class="form-control">\r\n            {{ getMissingQuantity() }}\r\n            <ng-container *ngIf="pnChoose && pnChoose.pnCode && pnChoose.quantityUnit">\r\n              {{ pnChoose.quantityUnit }}\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row" *ngIf="selectedChoiceItem === component.NEW_ITEM">\r\n        <div class="form-group">\r\n          <div class="form-control aw-selectbutton-wrapper">\r\n            <p-selectButton\r\n              [(ngModel)]="selectedChoiceItemPackage"\r\n              [options]="choiceListItemPackage"\r\n              (onChange)="resetChoiceItemPackage()"\r\n            ></p-selectButton>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div\r\n        class="row"\r\n        *ngIf="\r\n          selectedChoiceItemPackage === component.CURRENT_PACKAGE &&\r\n          createWithPackage &&\r\n          selectedChoiceItem === component.NEW_ITEM\r\n        "\r\n      >\r\n        <div class="form-group required">\r\n          <label class="form-label">{{ getComponentName() + ".packageNumber" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              placeholder="&nbsp;"\r\n              [showClear]="true"\r\n              [(ngModel)]="packageDto"\r\n              [options]="packageList"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div\r\n        class="row"\r\n        *ngIf="\r\n          selectedChoiceItemPackage === component.NEW_PACKAGE &&\r\n          createWithPackage &&\r\n          selectedChoiceItem === component.NEW_ITEM\r\n        "\r\n      >\r\n        <div class="form-group">\r\n          <div class="form-control aw-selectbutton-wrapper">\r\n            <p-selectButton\r\n              [(ngModel)]="selectedChoicePackage"\r\n              [options]="choiceListPackage"\r\n              (onChange)="resetChoicePackage()"\r\n            ></p-selectButton>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group required" *ngIf="!isPackageCodeGenerated">\r\n          <label class="form-label">{{ getComponentName() + ".packageNumber" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input type="text" class="aw-input" [(ngModel)]="packageDto.externalPackageCode" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div\r\n        class="row"\r\n        *ngIf="\r\n          selectedChoiceItemPackage === component.NEW_PACKAGE &&\r\n          createWithPackage &&\r\n          selectedChoiceItem === component.NEW_ITEM\r\n        "\r\n      >\r\n        <div class="form-group required">\r\n          <label class="form-label">{{ getComponentName() + ".packageType" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              [(ngModel)]="this.packageDto.packageType"\r\n              [options]="packagesTypesList"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row" *ngIf="selectedChoiceItem === component.NEW_ITEM">\r\n        <div class="form-group required">\r\n          <label class="form-label">{{ getComponentName() + ".article" | translate }}</label>\r\n\r\n          <div class="form-control form-control-with-modal">\r\n            <div class="form-control-data" (click)="openSearchPnDialog()">\r\n              {{ article }}\r\n            </div>\r\n\r\n            <div *ngIf="article" class="btn-clear-wrapper">\r\n              <i\r\n                class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                aria-hidden="true"\r\n                (click)="article = undefined"\r\n              ></i>\r\n            </div>\r\n            <div>\r\n              <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="openSearchPnDialog()"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="article-designation" *ngIf="pnChoose">\r\n        {{ pnChoose.articleDesignation }}\r\n      </div>\r\n      <div class="row" *ngIf="selectedChoiceItem === component.NEW_ITEM">\r\n        <div class="form-group required">\r\n          <label class="form-label">{{ getComponentName() + ".quantity" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input\r\n              type="number"\r\n              name="docName"\r\n              class="aw-input"\r\n              min="0"\r\n              oninput="validity.valid||(value=\'\');"\r\n              [(ngModel)]="quantityItem"\r\n              (blur)="updateRemainingQuantity()"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div\r\n          class="form-group"\r\n          [ngClass]="{\r\n            \'visibility--hidden\': !(pnChoose && pnChoose.quantityUnit)\r\n          }"\r\n        >\r\n          <label class="form-label">{{ "unit" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <div class="form-control-generic" *ngIf="pnChoose && pnChoose.pnCode && pnChoose.quantityUnit">\r\n              {{ pnChoose.quantityUnit }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="section">\r\n      <h4 class="section-title">\r\n        {{ getComponentName() + ".asset" | translate }}\r\n      </h4>\r\n      <div class="section-content">\r\n        <div class="row">\r\n          <div class="form-group flex--3">\r\n            <div class="form-control aw-selectbutton-wrapper" *ngIf="!isTracabilityBySN">\r\n              <p-selectButton\r\n                [(ngModel)]="selectedChoicePackagingNumber"\r\n                [options]="choiceListPackagingNumber"\r\n                (onChange)="resetChoicePackagingnumber()"\r\n              ></p-selectButton>\r\n            </div>\r\n          </div>\r\n          <div\r\n            class="form-group flex--1"\r\n            *ngIf="(item || (pnChoose && stockMvtTable && stockMvtTable.length > 0)) && !isDraftStatus"\r\n          >\r\n            <label class="form-label">{{ getComponentName() + ".quantityToReceipt" | translate }}</label>\r\n\r\n            <div class="form-control required">\r\n              <input\r\n                type="number"\r\n                name="docName"\r\n                class="aw-input"\r\n                [(ngModel)]="quantity"\r\n                min="0"\r\n                oninput="validity.valid||(value=\'\');"\r\n                (blur)="updateRemainingQuantity()"\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div\r\n          class="row"\r\n          style="justify-content: space-between; align-items: center; margin-bottom: 8px;"\r\n          *ngIf="item || (pnChoose && stockMvtTable && stockMvtTable.length > 0)"\r\n        >\r\n          <div>\r\n            {{ getComponentName() + ".missingQuantity" | translate }}: <span class="bold">{{ remainingQuantity }}</span>\r\n            <ng-container *ngIf="pnChoose && pnChoose.pnCode && pnChoose.quantityUnit">\r\n              {{ pnChoose.quantityUnit }}\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n\r\n        <p-table\r\n          #ptableStockMvt\r\n          class="aw-table2"\r\n          [resizableColumns]="true"\r\n          [scrollable]="true"\r\n          [value]="stockMvtTable"\r\n          [customSort]="false"\r\n        >\r\n          <ng-template pTemplate="colgroup">\r\n            <colgroup>\r\n              <col style="width: 20%;" *ngIf="!isGeneratedPackagingNumber" />\r\n              <col style="width: 20%;" *ngIf="isTracabilityBySN || isTracabilityByBatchAndSn" />\r\n              <col style="width: 20%;" *ngIf="isTracabilityByBatch" />\r\n              <col style="width: 20%;" *ngIf="!isTracabilityByPackagingBatch" />\r\n              <col style="width: 20%;" *ngIf="isTracabilityByBatch" />\r\n              <col style="width: 20%;" *ngIf="!(isTracabilityBySN || isTracabilityByBatchAndSn)" />\r\n              <col style="width: 64px;" />\r\n            </colgroup>\r\n          </ng-template>\r\n          <ng-template pTemplate="header">\r\n            <tr>\r\n              <th style="text-align: left;" *ngIf="!isGeneratedPackagingNumber">\r\n                {{ getComponentName() + ".packagingNumber" | translate }}\r\n              </th>\r\n              <th style="text-align: left;" *ngIf="isTracabilityBySN || isTracabilityByBatchAndSn">\r\n                {{ getComponentName() + ".sn" | translate }}\r\n              </th>\r\n              <th style="text-align: left;" *ngIf="isTracabilityByBatch">\r\n                {{ getComponentName() + ".manufacturingBatch" | translate }}\r\n              </th>\r\n              <th style="text-align: left;" *ngIf="!isTracabilityByPackagingBatch">\r\n                {{ getComponentName() + ".manufacuringDate" | translate }}\r\n              </th>\r\n              <th style="text-align: left;" *ngIf="isTracabilityByBatch || isTracabilityByPackagingBatch">\r\n                {{ getComponentName() + ".expirationDate" | translate }}\r\n              </th>\r\n              <th style="text-align: left;" *ngIf="!(isTracabilityBySN || isTracabilityByBatchAndSn)">\r\n                {{ getComponentName() + ".quantity" | translate }}\r\n                <ng-container *ngIf="pnChoose && pnChoose.pnCode && pnChoose.quantityUnit">\r\n                  ({{ pnChoose.quantityUnit }})\r\n                </ng-container>\r\n              </th>\r\n              <th style="text-align: center;"></th>\r\n            </tr>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate="body" let-rowData let-rowIndex="rowIndex">\r\n            <tr>\r\n              <td style="text-align: left;" *ngIf="!isGeneratedPackagingNumber">\r\n                <div style="display: flex; align-items: baseline">\r\n                  <div class="form-control required">\r\n                    <input\r\n                      class="aw-input"\r\n                      type="text"\r\n                      [(ngModel)]="rowData.stockMvtBatchNumber"\r\n                      [disabled]="!rowData.isEditable"\r\n                      [required]="!isGeneratedPackagingNumber"\r\n                    />\r\n                  </div>\r\n\r\n                  <button\r\n                    mat-icon-button\r\n                    color="accent"\r\n                    (click)="fillByBatch(rowData, rowData.stockMvtBatchNumber, false)"\r\n                    *ngIf="rowData.isEditable"\r\n                  >\r\n                    <mat-icon>search</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n\r\n              <td style="text-align: left;" *ngIf="isTracabilityBySN || isTracabilityByBatchAndSn">\r\n                <div style="display: flex; align-items: baseline" *ngIf="isAssetUnknow || !rowData.isEditable">\r\n                  <div class="form-control required">\r\n                    <input\r\n                      type="text"\r\n                      class="aw-input"\r\n                      [(ngModel)]="rowData.stockMvtSn"\r\n                      [disabled]="!rowData.isEditable"\r\n                    />\r\n                  </div>\r\n\r\n                  <button mat-icon-button color="accent" (click)="fillBySn(rowData)" *ngIf="rowData.isEditable">\r\n                    <mat-icon>search</mat-icon>\r\n                  </button>\r\n                </div>\r\n\r\n                <div class="form-control form-control-with-modal" *ngIf="!isAssetUnknow && rowData.isEditable">\r\n                  <div class="form-control-data" (click)="openAssetDialog()">\r\n                    {{ selectedAssetName }}\r\n                  </div>\r\n\r\n                  <div *ngIf="selectedAssetName" class="btn-clear-wrapper">\r\n                    <i\r\n                      class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                      aria-hidden="true"\r\n                      (click)="selectedAssetName = undefined"\r\n                    ></i>\r\n                  </div>\r\n                  <div class="btn-search-wrapper">\r\n                    <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="openAssetDialog()"></i>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n\r\n              <td style="text-align: left;" *ngIf="isTracabilityByBatch">\r\n                <div style="display: flex; align-items: baseline">\r\n                  <div class="form-control required">\r\n                    <input\r\n                      class="aw-input"\r\n                      type="text"\r\n                      [(ngModel)]="rowData.manufacturingBatch"\r\n                      [disabled]="!rowData.isEditable"\r\n                      [required]="isTracabilityByBatch"\r\n                    />\r\n                  </div>\r\n\r\n                  <button\r\n                    mat-icon-button\r\n                    color="accent"\r\n                    (click)="fillByBatch(rowData, rowData.manufacturingBatch, true)"\r\n                    *ngIf="rowData.isEditable"\r\n                  >\r\n                    <mat-icon>search</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n\r\n              <td style="text-align: left;" *ngIf="!isTracabilityByPackagingBatch">\r\n                <div class="form-control required">\r\n                  <p-calendar\r\n                    showButtonBar="true"\r\n                    [monthNavigator]="true"\r\n                    [yearNavigator]="true"\r\n                    [yearRange]="sessionService.calendarYearRange"\r\n                    class="aw-calendar"\r\n                    appendTo="body"\r\n                    [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                    [locale]="sessionService.calendarFormat"\r\n                    [(ngModel)]="rowData.manufacturingDate"\r\n                    [disabled]="!rowData.isEditable"\r\n                  ></p-calendar>\r\n                </div>\r\n              </td>\r\n\r\n              <td style="text-align: left;" *ngIf="isTracabilityByBatch || isTracabilityByPackagingBatch">\r\n                <div class="form-control required">\r\n                  <p-calendar\r\n                    showButtonBar="true"\r\n                    [monthNavigator]="true"\r\n                    [yearNavigator]="true"\r\n                    [yearRange]="sessionService.calendarYearRange"\r\n                    class="aw-calendar"\r\n                    appendTo="body"\r\n                    [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                    [locale]="sessionService.calendarFormat"\r\n                    [(ngModel)]="rowData.expirationDate"\r\n                    [disabled]="!rowData.isEditable"\r\n                  ></p-calendar>\r\n                </div>\r\n              </td>\r\n\r\n              <td *ngIf="!(isTracabilityBySN || isTracabilityByBatchAndSn)">\r\n                <div class="form-control required">\r\n                  <input\r\n                    class="aw-input"\r\n                    type="number"\r\n                    [(ngModel)]="rowData.stockMvtQuantity"\r\n                    [disabled]="!rowData.isEditable"\r\n                    [required]="true"\r\n                    [min]="0"\r\n                    [max]="remainingQuantity"\r\n                    oninput="validity.valid||(value=\'\');"\r\n                  />\r\n                </div>\r\n              </td>\r\n\r\n              <td>\r\n                <button\r\n                  mat-icon-button\r\n                  class="mat-elevation-z1"\r\n                  color="warn"\r\n                  (click)="deleteStockItem(rowData)"\r\n                  *ngIf="!rowData.isEditable"\r\n                >\r\n                  <mat-icon>remove</mat-icon>\r\n                </button>\r\n\r\n                <button\r\n                  mat-icon-button\r\n                  class="mat-elevation-z1"\r\n                  (click)="updateStockMvtTable(rowData)"\r\n                  *ngIf="rowData.isEditable"\r\n                >\r\n                  <mat-icon>done</mat-icon>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </p-table>\r\n      </div>\r\n      <div class="section-content" *ngIf="!isNotReceiptDone">\r\n        <div class="row">\r\n          <div class="form-group">\r\n            <label class="form-label warning">{{ getComponentName() + ".warnigDeliver" | translate }}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="section-content" *ngIf="!isNotQuantityOver">\r\n        <div class="row">\r\n          <div class="form-group">\r\n            <label class="form-label warning">{{ getComponentName() + ".warnigQuanttity" | translate }}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">{{ "global.cancel" | translate }}</button>\r\n    <button\r\n      type="button"\r\n      color="primary"\r\n      mat-raised-button\r\n      [disabled]="disableButton && isNotReceiptDone"\r\n      (click)="validateAssetListForPackage()"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-pn\r\n  *ngIf="searchPnDialogVisible"\r\n  [(display)]="searchPnDialogVisible"\r\n  [withAllTypes]="true"\r\n  [showPartTypeSelection]="true"\r\n  (onSelected)="checkPn($event)"\r\n></aw-dialog-search-pn>\r\n<aw-dialog-search-equipment\r\n  *ngIf="assetDialogVisible"\r\n  [(display)]="assetDialogVisible"\r\n  [selectionMultiple]="false"\r\n  [searchAllEquipment]="true"\r\n  [pnChoose]="article"\r\n  (onSelected)="onSelectAsset($event)"\r\n></aw-dialog-search-equipment>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/form/dialog-add-material/dialog-add-material.component.scss':
      /*!**********************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/form/dialog-add-material/dialog-add-material.component.scss ***!
  \**********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .article-designation {\n  font-style: italic;\n  padding: 0px 0 0 16px; }\n\n:host .form-label.warning {\n  color: #a82525 !important;\n  font-style: italic; }\n\n:host td div.form-control-with-modal {\n  display: flex;\n  flex-direction: row;\n  border-bottom-color: #595959;\n  border-left-color: transparent;\n  border-radius: 0;\n  border-right-color: transparent;\n  border-style: solid;\n  border-top-color: transparent;\n  border-width: 1px;\n  padding: 5px;\n  transition: border-bottom-color 0.25s ease-in-out; }\n\n:host td div.form-control-data {\n  color: inherit;\n  flex-grow: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: 1.42857143;\n  padding: 2px 0 4px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvZ29vZHMtcmVjZWlwdC9mb3JtL2RpYWxvZy1hZGQtbWF0ZXJpYWwvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcZ29vZHMtcmVjZWlwdFxcZm9ybVxcZGlhbG9nLWFkZC1tYXRlcmlhbFxcZGlhbG9nLWFkZC1tYXRlcmlhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFIekI7RUFRTSx5QkFBNEI7RUFDNUIsa0JBQWtCLEVBQUE7O0FBVHhCO0VBY0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlEQUFpRCxFQUFBOztBQXhCckQ7RUE0QkksY0FBYztFQUNkLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9nb29kcy1yZWNlaXB0L2Zvcm0vZGlhbG9nLWFkZC1tYXRlcmlhbC9kaWFsb2ctYWRkLW1hdGVyaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5hcnRpY2xlLWRlc2lnbmF0aW9uIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHBhZGRpbmc6IDBweCAwIDAgMTZweDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWxhYmVsIHtcclxuICAgICYud2FybmluZyB7XHJcbiAgICAgIGNvbG9yOiAkcmVkLWRhcmsxICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRkIGRpdi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM1OTU5NTk7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIHRkIGRpdi5mb3JtLWNvbnRyb2wtZGF0YSB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICAgIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG4gIH1cclxufVxyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/form/dialog-add-material/dialog-add-material.component.ts':
      /*!********************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/form/dialog-add-material/dialog-add-material.component.ts ***!
  \********************************************************************************************************/
      /*! exports provided: DialogAddMaterialComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogAddMaterialComponent',
          function() {
            return DialogAddMaterialComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bire_measure_reference_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/constants/bire-measure-reference-constants */ './src/app/shared/constants/bire-measure-reference-constants.ts'
        );
        /* harmony import */ var _shared_constants_bire_rating_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/constants/bire-rating-constants */ './src/app/shared/constants/bire-rating-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../../shared/utils/bido-equipment-utils */ './src/app/shared/utils/bido-equipment-utils.ts'
        );
        /* harmony import */ var _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../../shared/utils/bido-family-variant-utils */ './src/app/shared/utils/bido-family-variant-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../../shared/utils/number-utils */ './src/app/shared/utils/number-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../delivery-folder-search.service */ './src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts'
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

        var DialogAddMaterialComponent = /** @class */ (function(_super) {
          __extends(DialogAddMaterialComponent, _super);
          function DialogAddMaterialComponent(
            sessionService,
            messageService,
            propertiesService,
            deliveryFolderSearchService,
            logisticsService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Read,
                'DialogAddMaterialComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.messageService = messageService;
            _this.propertiesService = propertiesService;
            _this.deliveryFolderSearchService = deliveryFolderSearchService;
            _this.logisticsService = logisticsService;
            _this.component = DialogAddMaterialComponent_1;
            _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.init();
            return _this;
          }
          DialogAddMaterialComponent_1 = DialogAddMaterialComponent;
          DialogAddMaterialComponent.prototype.ngOnInit = function() {
            this.loadDropDowns();
            this.isDraftStatus =
              this.bidtDeliveryFolder.dfStatus ===
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                .RECEIPT_FOLDER_STATUS_DRAFT;
          };
          DialogAddMaterialComponent.prototype.init = function() {
            this.isExistingItem = true;
            this.choiceListItemPackage = [];
            this.choiceListPackage = [];
            this.choiceListPackagingNumber = [];
            this.choiceListItem = [];
            this.itemsList = [];
            this.resetModelValues();
            this.resetTraceabilityvalues();
          };
          DialogAddMaterialComponent.prototype.resetModelValues = function() {
            this.item = undefined;
            this.pnChoose = undefined;
            this.quantity = 1;
            this.isNotQuantityOver = true;
            this.isNotReceiptDone = true;
            this.stockMvtTable = [];
            this.isPackageCodeGenerated = true;
            this.isGeneratedPackagingNumber = true;
            this.disableButton = false;
            this.isAssetUnknow = true;
            this.assetDialogVisible = false;
            this.searchPnDialogVisible = false;
            this.createWithPackage = true;
          };
          DialogAddMaterialComponent.prototype.initializeStockMvtTable = function() {
            this.stockMvtTable = [];
            this.stockMvtTable.push(this.getInitialRow());
          };
          DialogAddMaterialComponent.prototype.getInitialRow = function() {
            return {
              id: this.stockMvtTable.length,
              stockMvtBatchNumber: undefined,
              stockMvtQuantity: undefined,
              isEditable: true,
              manufacturingBatch: undefined,
              manufacturingDate: undefined,
              expirationDate: undefined,
              stockMvtSn: undefined
            };
          };
          DialogAddMaterialComponent.prototype.loadDropDowns = function() {
            var _this = this;
            var packageTypes = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                .PACKAGE_TYPE_MAP
            );
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['forkJoin'])({ packageTypes: packageTypes }).subscribe({
              next: function(results) {
                _this.packagesTypesList = results.packageTypes;
                _this.itemsList = [];
                _this.itemsList = _this.loadItemsList();
                _this.packageList = _this.loadPackageList();
                _this.getChoiceListPackagingNumber();
                _this.getChoiceListItemPackage();
                _this.getChoiceListPackage();
                _this.getChoiceListItem();
                _this.getChoiceListAsset();
              }
            });
          };
          DialogAddMaterialComponent.prototype.loadPackageList = function() {
            return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__['ListUtils']
              .orEmpty(this.packageDtoList)
              .filter(function(pack) {
                return !!pack.packageCode;
              })
              .map(function(bidtPackage) {
                var unit = {
                  label: bidtPackage.packageCode,
                  value: bidtPackage
                };
                return unit;
              });
          };
          DialogAddMaterialComponent.prototype.loadItemsList = function() {
            return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__['ListUtils']
              .orEmpty(this.itemsDtoList)
              .filter(function(item) {
                return !!item.dfiCode;
              })
              .map(function(bidtItem) {
                var unit = {
                  label:
                    bidtItem.dfiCode + ' : ' + bidtItem.birePnPnCode + ' (' + bidtItem.birePn.articleDesignation + ')',
                  value: bidtItem
                };
                return unit;
              });
          };
          DialogAddMaterialComponent.prototype.getChoiceListPackagingNumber = function() {
            this.choiceListPackagingNumber = this.deliveryFolderSearchService.loadCreationChoiceListPackagingNumber();
            this.setSelectedChoicePackagingNumber();
          };
          DialogAddMaterialComponent.prototype.setSelectedChoicePackagingNumber = function() {
            this.selectedChoicePackagingNumber =
              this.choiceListPackagingNumber && this.choiceListPackagingNumber.length
                ? this.choiceListPackagingNumber[0].value
                : '';
          };
          DialogAddMaterialComponent.prototype.getChoiceListItemPackage = function() {
            this.choiceListItemPackage = this.deliveryFolderSearchService.loadCreationChoiceList();
            this.selectedChoiceItemPackage =
              this.choiceListItemPackage && this.choiceListItemPackage.length
                ? this.choiceListItemPackage[0].value
                : '';
          };
          DialogAddMaterialComponent.prototype.getChoiceListPackage = function() {
            this.choiceListPackage = this.deliveryFolderSearchService.loadCreationChoiceListPackageNumber();
            this.selectedChoicePackage =
              this.choiceListPackage && this.choiceListPackage.length ? this.choiceListPackage[0].value : '';
          };
          DialogAddMaterialComponent.prototype.getChoiceListItem = function() {
            this.choiceListItem = this.deliveryFolderSearchService.loadCreationChoiceListItem();
            this.selectedChoiceItem =
              this.choiceListItem && this.choiceListItem.length ? this.choiceListItem[0].value : '';
          };
          DialogAddMaterialComponent.prototype.getChoiceListAsset = function() {
            this.choiceListAsset = this.deliveryFolderSearchService.loadCreationAssetChoice();
            this.selectedChoiceAsset =
              this.choiceListAsset && this.choiceListAsset.length ? this.choiceListAsset[0].value : '';
          };
          DialogAddMaterialComponent.prototype.onChangeItem = function(item) {
            var missingQuantity = this.getMissingQuantity();
            this.quantity = this.isDraftStatus ? missingQuantity : missingQuantity > 0 ? 1 : 0;
            this.checkPn(item.birePn);
            this.remainingQuantity = this.quantity;
            this.isNotReceiptDone = this.checkIsNotReceiptdone(item);
            this.isNotQuantityOver = this.checkQuanntityOnSelectedItem(item);
          };
          DialogAddMaterialComponent.prototype.checkIsNotReceiptdone = function(item) {
            return item.bidtPackage &&
              item.bidtPackage.packageStatus ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                  .PACKAGE_STATUS_DELIVERED
              ? false
              : true;
          };
          DialogAddMaterialComponent.prototype.resetTraceabilityvalues = function() {
            this.disableButton = true;
            this.isTracabilityByPackagingBatch = false;
            this.isTracabilityBySN = false;
            this.isTracabilityByBatchAndSn = false;
            this.isTracabilityByBatch = false;
            this.isAssetUnknow = true;
          };
          DialogAddMaterialComponent.prototype.checkPn = function(pn) {
            this.initializeStockMvtTable();
            this.resetTraceabilityvalues();
            if (pn) {
              this.article = pn.pnCode;
              this.pnChoose = pn;
              switch (pn.traceability) {
                case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                  .PN_TRACEABILITY_BY_BATCH:
                  this.isTracabilityByBatch = true;
                  break;
                case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                  .PN_TRACEABILITY_BY_SN:
                  this.isTracabilityBySN = true;
                  break;
                case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                  .PN_TRACEABILITY_BY_PACKAGING_BATCH:
                  this.isTracabilityByPackagingBatch = true;
                  break;
                case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                  .PN_TRACEABILITY_BY_PACKAGING_BATCH_AND_SN:
                  this.isTracabilityByBatchAndSn = true;
                  break;
                default:
                  this.isTracabilityBySN = true;
                  break;
              }
            }
          };
          DialogAddMaterialComponent.prototype.updateRemainingQuantity = function() {
            if (this.getMissingQuantity() && this.quantity && this.getMissingQuantity() < this.quantity) {
              this.quantity = this.getMissingQuantity();
              this.messageService.showWarningMessage(this.getTranslateKey('warning'));
            } else if (this.quantityItem && this.quantity && this.quantityItem < this.quantity) {
              this.quantity = this.quantityItem;
              this.messageService.showWarningMessage(this.getTranslateKey('warning'));
            }
            var computedQuantity = this.quantity ? this.quantity : this.quantityItem;
            if (this.stockMvtTable.length === 1 && !this.isStockMvtTableComplete(this.stockMvtTable[0])) {
              this.remainingQuantity = computedQuantity;
            } else {
              var totalStockMvtQuantity_1 = 0;
              this.stockMvtTable.forEach(function(item) {
                totalStockMvtQuantity_1 += Number(item.stockMvtQuantity || 0);
              });
              this.remainingQuantity = computedQuantity - totalStockMvtQuantity_1;
              if (
                !this.stockMvtTable.length ||
                this.isStockMvtTableComplete(this.stockMvtTable[this.stockMvtTable.length - 1])
              ) {
                this.addNewStockInTable();
              }
            }
          };
          DialogAddMaterialComponent.prototype.openSearchPnDialog = function() {
            this.searchPnDialogVisible = true;
          };
          DialogAddMaterialComponent.prototype.getMissingQuantity = function() {
            var missingQuantity = 0;
            if (this.item) {
              var actualQuantity = this.getMaterialTotalQuantityOfItem(this.item);
              missingQuantity = Number(this.item.quantity) - actualQuantity;
            }
            return missingQuantity;
          };
          DialogAddMaterialComponent.prototype.checkQuanntityOnSelectedItem = function(bidtDfItemDTO) {
            var actualQuantity = this.getMaterialTotalQuantityOfItem(bidtDfItemDTO);
            return actualQuantity < Number(bidtDfItemDTO.quantity);
          };
          DialogAddMaterialComponent.prototype.checkQuantity = function() {
            if (this.item) {
              var actualQuantity = this.getMaterialTotalQuantityOfItem(this.item);
              var newQuantity = actualQuantity + this.quantity;
              return newQuantity <= Number(this.item.quantity);
            } else {
              return this.quantity <= this.quantityItem;
            }
          };
          DialogAddMaterialComponent.prototype.getMaterialTotalQuantityOfItem = function(bidtDfItemDTO) {
            var totalQuantity = 0;
            if (bidtDfItemDTO.bidtStockMvts && bidtDfItemDTO.bidtStockMvts.length > 0) {
              bidtDfItemDTO.bidtStockMvts.forEach(function(mvt) {
                totalQuantity = totalQuantity + Number(mvt.stockMvtQuantity);
              });
            }
            return totalQuantity;
          };
          DialogAddMaterialComponent.prototype.resetChoiceItem = function() {
            this.changeModeItem();
          };
          DialogAddMaterialComponent.prototype.changeModeItem = function() {
            this.resetModelValues();
            switch (this.selectedChoiceItem) {
              case this.component.EXISTING_ITEM:
                this.isExistingItem = true;
                this.disableButton = true;
                this.quantityItem = 0;
                break;
              case this.component.NEW_ITEM:
                this.isExistingItem = false;
                this.article = undefined;
                this.disableButton = false;
                this.remainingQuantity = 0;
                this.quantity = 0;
                break;
              default:
                break;
            }
          };
          DialogAddMaterialComponent.prototype.resetChoicePackagingnumber = function() {
            this.initializeStockMvtTable();
            this.updateRemainingQuantity();
            this.changeModePackagingNumber();
          };
          DialogAddMaterialComponent.prototype.changeModePackagingNumber = function() {
            switch (this.selectedChoicePackagingNumber) {
              case this.component.GENERATE:
                this.isGeneratedPackagingNumber = true;
                break;
              case this.component.ENTER:
                this.isGeneratedPackagingNumber = false;
                break;
              default:
                break;
            }
          };
          DialogAddMaterialComponent.prototype.resetChoiceItemPackage = function() {
            this.changeModeItemPackage();
          };
          DialogAddMaterialComponent.prototype.changeModeItemPackage = function() {
            switch (this.selectedChoiceItemPackage) {
              case this.component.CURRENT_PACKAGE:
                this.packageDto = undefined;
                this.createWithPackage = true;
                break;
              case this.component.NEW_PACKAGE:
                this.packageDto = {};
                this.createWithPackage = true;
                break;
              case this.component.WWITHOUT_PACKAGE:
                this.packageDto = {};
                this.createWithPackage = false;
                break;
              default:
                break;
            }
          };
          DialogAddMaterialComponent.prototype.resetChoicePackage = function() {
            this.changeModePackage();
          };
          DialogAddMaterialComponent.prototype.changeModePackage = function() {
            switch (this.selectedChoicePackage) {
              case this.component.GENERATE:
                this.isPackageCodeGenerated = true;
                break;
              case this.component.ENTER:
                this.isPackageCodeGenerated = false;
                break;
              default:
                break;
            }
          };
          DialogAddMaterialComponent.prototype.resetChoiceAsset = function() {
            this.isGeneratedPackagingNumber = true;
            this.setSelectedChoicePackagingNumber();
            this.changeModeAsset();
          };
          DialogAddMaterialComponent.prototype.changeModeAsset = function() {
            switch (this.selectedChoiceAsset) {
              case this.component.ASSET_UNKNOW:
                this.isAssetUnknow = true;
                break;
              case this.component.ASSET_KNOW:
                this.isAssetUnknow = false;
                break;
              default:
                break;
            }
          };
          DialogAddMaterialComponent.prototype.openAssetDialog = function() {
            this.assetDialogVisible = true;
          };
          DialogAddMaterialComponent.prototype.onSelectAsset = function(equipment) {
            if (equipment.sn) {
              this.stockMvtTable[this.stockMvtTable.length - 1].stockMvtSn = equipment.sn;
            }
            if (equipment.batchNumber) {
              this.stockMvtTable[this.stockMvtTable.length - 1].stockMvtBatchNumber = equipment.batchNumber;
            }
            this.selectedAssetName = _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_11__[
              'BidoEquipmentUtils'
            ].createAssetRepresentation(equipment);
          };
          DialogAddMaterialComponent.prototype.updateStockMvtTable = function() {
            if (this.stockMvtTable.length > 0) {
              var rowData = this.stockMvtTable[this.stockMvtTable.length - 1];
              if (!this.isStockMvtTableComplete(rowData)) {
                return;
              }
              if (this.isTracabilityBySN || this.isTracabilityByBatchAndSn) {
                rowData.stockMvtQuantity = '1';
              }
              if (this.remainingQuantity < Number(rowData.stockMvtQuantity)) {
                this.messageService.showWarningMessage(this.getTranslateKey('warning'));
                return;
              }
              this.stockMvtTable.pop();
              rowData.isEditable = false;
              this.remainingQuantity = this.remainingQuantity - Number(rowData.stockMvtQuantity);
              this.stockMvtTable.push(rowData);
              this.addNewStockInTable();
            }
          };
          DialogAddMaterialComponent.prototype.isAddBtnVisible = function() {
            return (
              this.remainingQuantity > 0 &&
              this.stockMvtTable.every(function(row) {
                return !row.isEditable;
              })
            );
          };
          DialogAddMaterialComponent.prototype.addNewStockInTable = function() {
            this.selectedAssetName = '';
            if (this.remainingQuantity > 0) {
              this.disableButton = true;
              this.stockMvtTable.push(this.getInitialRow());
            } else {
              this.disableButton = false;
            }
          };
          DialogAddMaterialComponent.prototype.isExpirationDateMandatory = function() {
            return !!this.pnChoose && !!this.pnChoose.hasExpirationDate;
          };
          DialogAddMaterialComponent.prototype.isStockMvtTableComplete = function(rowData) {
            var complete = false;
            if (this.isTracabilityByBatch) {
              complete =
                rowData.manufacturingBatch &&
                (!this.isExpirationDateMandatory() || !!rowData.expirationDate) &&
                (this.isGeneratedPackagingNumber || rowData.stockMvtBatchNumber) &&
                rowData.stockMvtQuantity
                  ? true
                  : false;
            } else if (this.isTracabilityBySN) {
              complete = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_15__['ObjectUtils'].isDefined(
                rowData.stockMvtSn
              );
            } else if (this.isTracabilityByPackagingBatch) {
              complete =
                rowData.stockMvtQuantity &&
                (!this.isExpirationDateMandatory() || !!rowData.expirationDate) &&
                (this.isGeneratedPackagingNumber || rowData.stockMvtBatchNumber)
                  ? true
                  : false;
            } else if (this.isTracabilityByBatchAndSn) {
              complete =
                rowData.stockMvtSn &&
                (!this.isExpirationDateMandatory() || !!rowData.expirationDate) &&
                (this.isGeneratedPackagingNumber || rowData.stockMvtBatchNumber)
                  ? true
                  : false;
            }
            return complete;
          };
          DialogAddMaterialComponent.prototype.validateAssetListForPackage = function() {
            var _this = this;
            var input = [];
            this.stockMvtTable.forEach(function(mvtObject) {
              input.push(_this.updateAssetRequestBody(mvtObject));
            });
            this.logisticsService.addReceiptMaterialList(input).subscribe(function(res) {
              _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnCreate'));
              _this.onCreate.emit((res && res.length && res[0]) || undefined);
              _this.closeDialog();
            });
          };
          DialogAddMaterialComponent.prototype.updateAssetRequestBody = function(mvtObject) {
            var receiptMaterialObject = {
              bidtDeliveyFolder: this.bidtDeliveryFolder,
              bidtDfItem: this.item ? this.item : undefined,
              bidtStockMvt: this.getBidtStockMvtObject(mvtObject),
              birePnDTO: this.pnChoose ? this.pnChoose : undefined,
              createWithPackage: this.createWithPackage,
              isExistingItem: this.isExistingItem,
              isPackageCodeGenerated: this.isPackageCodeGenerated,
              packageDTO: this.packageDto,
              quantityItem: this.quantity ? this.quantity : this.quantityItem
            };
            if (mvtObject) {
              receiptMaterialObject.manufacturingBatchNumber = mvtObject.manufacturingBatch
                ? mvtObject.manufacturingBatch
                : undefined;
              receiptMaterialObject.manufacturingDate = mvtObject.manufacturingDate
                ? mvtObject.manufacturingDate
                : undefined;
              receiptMaterialObject.expirationDate = mvtObject.expirationDate ? mvtObject.expirationDate : undefined;
            }
            return receiptMaterialObject;
          };
          DialogAddMaterialComponent.prototype.getBidtStockMvtObject = function(bidtObject) {
            var stockMvtObject = {};
            if (bidtObject) {
              stockMvtObject.stockMvtSn = bidtObject.stockMvtSn ? bidtObject.stockMvtSn : undefined;
              stockMvtObject.stockMvtQuantity = bidtObject.stockMvtQuantity
                ? bidtObject.stockMvtQuantity.toString()
                : undefined;
              stockMvtObject.stockMvtBatchNumber = bidtObject.stockMvtBatchNumber
                ? bidtObject.stockMvtBatchNumber
                : undefined;
            }
            return stockMvtObject;
          };
          DialogAddMaterialComponent.prototype.deleteStockItem = function(row) {
            this.stockMvtTable = this.stockMvtTable.filter(function(data) {
              return row.id !== data.id;
            });
            this.updateListId();
            this.updateRemainingQuantity();
          };
          DialogAddMaterialComponent.prototype.updateListId = function() {
            var newId = 0;
            this.stockMvtTable.forEach(function(row) {
              row.id = newId;
              newId++;
            });
          };
          DialogAddMaterialComponent.prototype.fillByBatch = function(row, batchNumber, isManufacturingBatchType) {
            var _this = this;
            if (
              this.pnChoose &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__['StringUtils'].isNullOrEmpty(batchNumber)
            ) {
              var logUnknownEquipment_1 = function() {
                _this.messageService.showWarningMessage(
                  _this.getTranslateKey(
                    isManufacturingBatchType ? 'warningOnUnknownBatchNumber' : 'warningOnUnknownPackagingNumber'
                  )
                );
              };
              var existingRow =
                isManufacturingBatchType &&
                this.stockMvtTable.slice(0, -1).find(function(r) {
                  return !!r.manufacturingBatch && r.manufacturingBatch === row.manufacturingBatch;
                });
              if (!!existingRow) {
                row.manufacturingDate = existingRow.manufacturingDate;
                row.expirationDate = existingRow.expirationDate;
                if (!isManufacturingBatchType) {
                  row.stockMvtQuantity = existingRow.stockMvtQuantity;
                }
              } else {
                this.logisticsService
                  .findEquipmentByPnAndBatchNumber({
                    pnCode: this.pnChoose.pnCode,
                    batchNumber: batchNumber
                  })
                  .subscribe(function(equipment) {
                    row.manufacturingDate = undefined;
                    row.expirationDate = undefined;
                    row.stockMvtQuantity = undefined;
                    row.stockMvtSn = undefined;
                    if (!!equipment) {
                      if (
                        _this.isTracabilityByBatchAndSn ||
                        (isManufacturingBatchType &&
                          equipment.batchType ===
                            _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__[
                              'AWPropertiesConstants'
                            ].BATCH_TYPE_MANUFACTURING_KEY) ||
                        (!isManufacturingBatchType &&
                          equipment.batchType ===
                            _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__[
                              'AWPropertiesConstants'
                            ].BATCH_TYPE_PACKAGING_KEY)
                      ) {
                        row.manufacturingDate = equipment.manufacturingDate;
                        if (!isManufacturingBatchType) {
                          row.stockMvtQuantity = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_15__[
                            'ObjectUtils'
                          ].isDefined(equipment.quantity)
                            ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_14__['NumberUtils'].toString(
                                _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_14__['NumberUtils'].roundNumber(
                                  equipment.quantity
                                )
                              )
                            : undefined;
                        }
                        if (_this.isTracabilityByBatchAndSn) {
                          row.stockMvtSn = equipment.sn;
                        }
                        if (
                          !isManufacturingBatchType &&
                          equipment.batchType ===
                            _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__[
                              'AWPropertiesConstants'
                            ].BATCH_TYPE_PACKAGING_KEY &&
                          _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_15__['ObjectUtils'].isDefined(
                            equipment.equEquipmentCode
                          )
                        ) {
                          _this.logisticsService
                            .findEquipment({ equipmentCode: equipment.equEquipmentCode })
                            .subscribe({
                              next: function(fatherEquipment) {
                                row.manufacturingBatch = fatherEquipment.batchNumber;
                              }
                            });
                        }
                        if (!_this.isTracabilityByBatchAndSn && !_this.isTracabilityByPackagingBatch) {
                          // Expiration date
                          _this.logisticsService
                            .findBidoEquipmentCounter({
                              equipmentCode: equipment.equipmentCode,
                              counterCode:
                                _shared_constants_bire_measure_reference_constants__WEBPACK_IMPORTED_MODULE_3__[
                                  'BireMeasureReferenceConstants'
                                ].BIRE_MEASURE_REFERENCE_COUNTER_CODE_CALENDAR_LIMIT,
                              familyCode: _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_12__[
                                'BidoFamilyVariantUtils'
                              ].getFamilyCodeFromFamilyVariantCode(equipment.familyVariantCode),
                              ratingCode:
                                _shared_constants_bire_rating_constants__WEBPACK_IMPORTED_MODULE_4__[
                                  'BireRatingConstants'
                                ].DEFAULT
                            })
                            .subscribe(function(bidoEquipmentCounter) {
                              if (bidoEquipmentCounter) {
                                row.expirationDate = bidoEquipmentCounter.dateLimit;
                              }
                            });
                        }
                      }
                    } else {
                      logUnknownEquipment_1();
                    }
                  });
              }
            }
          };
          DialogAddMaterialComponent.prototype.fillBySn = function(row) {
            var _this = this;
            if (this.pnChoose) {
              this.logisticsService
                .findEquipmentByPnAndSn({
                  pnCode: this.pnChoose.pnCode,
                  sn: row.stockMvtSn
                })
                .subscribe(function(equipment) {
                  if (equipment) {
                    row.manufacturingDate = equipment.manufacturingDate;
                    row.stockMvtBatchNumber = equipment.logisticsSequenceCode;
                    row.stockMvtQuantity = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_15__[
                      'ObjectUtils'
                    ].isDefined(equipment.quantity)
                      ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_14__['NumberUtils'].toString(
                          _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_14__['NumberUtils'].roundNumber(
                            equipment.quantity
                          )
                        )
                      : undefined;
                  } else {
                    row.manufacturingDate = undefined;
                    row.stockMvtBatchNumber = undefined;
                    row.stockMvtQuantity = undefined;
                    _this.messageService.showWarningMessage(_this.getTranslateKey('warningOnUnknownSn'));
                  }
                });
            }
          };
          var DialogAddMaterialComponent_1;
          DialogAddMaterialComponent.GENERATE = '0';
          DialogAddMaterialComponent.ENTER = '1';
          DialogAddMaterialComponent.EXISTING_ITEM = '0';
          DialogAddMaterialComponent.NEW_ITEM = '1';
          DialogAddMaterialComponent.CURRENT_PACKAGE = '0';
          DialogAddMaterialComponent.NEW_PACKAGE = '1';
          DialogAddMaterialComponent.WWITHOUT_PACKAGE = '2';
          DialogAddMaterialComponent.ASSET_UNKNOW = '0';
          DialogAddMaterialComponent.ASSET_KNOW = '1';
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogAddMaterialComponent.prototype,
            'bidtDeliveryFolder',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogAddMaterialComponent.prototype,
            'itemsDtoList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogAddMaterialComponent.prototype,
            'packageDtoList',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogAddMaterialComponent.prototype,
            'onCreate',
            void 0
          );
          DialogAddMaterialComponent = DialogAddMaterialComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-add-material',
                template: __webpack_require__(
                  /*! ./dialog-add-material.component.html */ './src/app/main/logistics/goods-receipt/form/dialog-add-material/dialog-add-material.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-add-material.component.scss */ './src/app/main/logistics/goods-receipt/form/dialog-add-material/dialog-add-material.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__['SessionService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__['MessageService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_8__['PropertiesService'],
                _delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_18__['DeliveryFolderSearchService'],
                _logistics_service__WEBPACK_IMPORTED_MODULE_17__['LogisticsService']
              ])
            ],
            DialogAddMaterialComponent
          );
          return DialogAddMaterialComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_10__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/form/dialog-add-package/dialog-add-package.component.html':
      /*!********************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/form/dialog-add-package/dialog-add-package.component.html ***!
  \********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="scan">\r\n          <i class="fa fa-fw fa-qrcode" aria-hidden="true"></i>\r\n\r\n          <label class="form-label">{{ getComponentName() + ".scanPackage" | translate }}</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <div class="form-control aw-selectbutton-wrapper">\r\n            <p-selectButton\r\n              [(ngModel)]="selectedChoice"\r\n              [options]="choiceList"\r\n              (onChange)="resetChoice()"\r\n            ></p-selectButton>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group required" *ngIf="selectedChoice === component.ENTER">\r\n          <label class="form-label">{{ getComponentName() + ".packageNumber" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input type="text" class="aw-input" [(ngModel)]="packageNumber" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="row">\r\n        <div class="form-group required">\r\n          <label class="form-label">{{ getComponentName() + ".packageType" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              [(ngModel)]="selectedPackageType"\r\n              [options]="packagesTypesList"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group required">\r\n          <label class="form-label">{{ getComponentName() + ".article" | translate }}</label>\r\n\r\n          <div class="form-control form-control-with-modal">\r\n            <div class="form-control-data" (click)="openSearchPnDialog()">\r\n              {{ article }}\r\n            </div>\r\n\r\n            <div *ngIf="article" class="btn-clear-wrapper">\r\n              <i\r\n                class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                aria-hidden="true"\r\n                (click)="article = undefined"\r\n              ></i>\r\n            </div>\r\n            <div class="btn-search-wrapper">\r\n              <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="openSearchPnDialog()"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="row">\r\n        <div class="form-group required">\r\n          <label class="form-label">{{ getComponentName() + ".quantity" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input\r\n              type="number"\r\n              name="docName"\r\n              class="aw-input"\r\n              [(ngModel)]="quantity"\r\n              min="0"\r\n              oninput="validity.valid||(value=\'\');"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div\r\n          class="form-group"\r\n          [ngClass]="{\r\n            \'visibility--hidden\': !(pnUse && pnUse.unitOfIssue)\r\n          }"\r\n        >\r\n          <label class="form-label">{{ "unit" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <div class="form-control-generic" *ngIf="pnUse && pnUse.pnCode && pnUse.unitOfIssue">\r\n              {{ pnUse.unitOfIssue | formatSelectOption: unitOfIssueOptions }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">{{ "global.cancel" | translate }}</button>\r\n\r\n    <button type="button" color="primary" mat-raised-button (click)="validate()" [disabled]="!isFormValid()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-pn\r\n  *ngIf="searchPnDialogVisible"\r\n  [(display)]="searchPnDialogVisible"\r\n  (onSelected)="onSelectPn($event)"\r\n  [withAllTypes]="true"\r\n  [showPartTypeSelection]="true"\r\n></aw-dialog-search-pn>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/form/dialog-add-package/dialog-add-package.component.scss':
      /*!********************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/form/dialog-add-package/dialog-add-package.component.scss ***!
  \********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .scan {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  margin-bottom: 4rem; }\n  :host .scan i {\n    cursor: pointer;\n    font-size: 12rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvZ29vZHMtcmVjZWlwdC9mb3JtL2RpYWxvZy1hZGQtcGFja2FnZS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbG9naXN0aWNzXFxnb29kcy1yZWNlaXB0XFxmb3JtXFxkaWFsb2ctYWRkLXBhY2thZ2VcXGRpYWxvZy1hZGQtcGFja2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUIsRUFBQTtFQU52QjtJQVNNLGVBQWU7SUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL2dvb2RzLXJlY2VpcHQvZm9ybS9kaWFsb2ctYWRkLXBhY2thZ2UvZGlhbG9nLWFkZC1wYWNrYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5zY2FuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxMnJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/form/dialog-add-package/dialog-add-package.component.ts':
      /*!******************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/form/dialog-add-package/dialog-add-package.component.ts ***!
  \******************************************************************************************************/
      /*! exports provided: DialogAddPackageComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogAddPackageComponent',
          function() {
            return DialogAddPackageComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../delivery-folder-search.service */ './src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts'
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

        var DialogAddPackageComponent = /** @class */ (function(_super) {
          __extends(DialogAddPackageComponent, _super);
          function DialogAddPackageComponent(
            logisticsService,
            propertiesService,
            deliveryFolderSearchService,
            messageService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read,
                'DialogAddPackageComponent'
              ) || this;
            _this.logisticsService = logisticsService;
            _this.propertiesService = propertiesService;
            _this.deliveryFolderSearchService = deliveryFolderSearchService;
            _this.messageService = messageService;
            _this.searchPnDialogVisible = false;
            _this.isGenerated = true;
            _this.component = DialogAddPackageComponent_1;
            _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.loadUnitOfIssueOptions();
            return _this;
          }
          DialogAddPackageComponent_1 = DialogAddPackageComponent;
          DialogAddPackageComponent.prototype.isFormValid = function() {
            return (
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_7__['ObjectUtils'].isDefined(this.quantity) &&
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_7__['ObjectUtils'].isDefined(this.pnUse)
            );
          };
          DialogAddPackageComponent.prototype.validate = function() {
            var _this = this;
            if (this.validateInputs()) {
              var input = {
                packageCode: this.packageNumber,
                bidtDeliveryFolder: this.bidtDeliveryFolder,
                material: this.pnUse,
                quantity: this.quantity,
                isGenerated: this.isGenerated,
                packageType: this.selectedPackageType
              };
              this.logisticsService.addReceiptPackage(input).subscribe(function(res) {
                _this.messageService.showSuccessMessage('DialogAddPackageComponent.packageCreateSucces');
                _this.onCreate.emit(res);
                _this.closeDialog();
              });
            }
          };
          DialogAddPackageComponent.prototype.ngOnInit = function() {
            this.loadDropDowns();
          };
          DialogAddPackageComponent.prototype.loadDropDowns = function() {
            var _this = this;
            var packageTypes = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                .PACKAGE_TYPE_MAP
            );
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['forkJoin'])({ packageTypes: packageTypes }).subscribe({
              next: function(results) {
                _this.packagesTypesList = results.packageTypes;
                _this.choiceList = _this.deliveryFolderSearchService.loadCreationChoiceListPackage();
                _this.selectedChoice = _this.choiceList && _this.choiceList.length ? _this.choiceList[0].value : '';
              }
            });
          };
          DialogAddPackageComponent.prototype.validateInputs = function() {
            if (this.isGenerated) {
              return !!this.pnUse && !!this.quantity;
            } else {
              return (
                !!this.pnUse &&
                _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_7__['ObjectUtils'].isDefined(this.packageNumber) &&
                !!this.quantity
              );
            }
          };
          DialogAddPackageComponent.prototype.onSelectPn = function(pn) {
            this.article = pn.pnCode;
            this.pnUse = pn;
          };
          DialogAddPackageComponent.prototype.openSearchPnDialog = function() {
            this.searchPnDialogVisible = true;
          };
          DialogAddPackageComponent.prototype.resetChoice = function() {
            this.changeMode();
          };
          DialogAddPackageComponent.prototype.changeMode = function() {
            switch (this.selectedChoice) {
              case this.component.GENERATE:
                this.isGenerated = true;
                break;
              case this.component.ENTER:
                this.isGenerated = false;
                break;
              default:
                break;
            }
          };
          DialogAddPackageComponent.prototype.loadUnitOfIssueOptions = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                  .UNIT_OF_ISSUE_MAP
              )
              .subscribe(function(results) {
                _this.unitOfIssueOptions = results;
              });
          };
          var DialogAddPackageComponent_1;
          DialogAddPackageComponent.GENERATE = '0';
          DialogAddPackageComponent.ENTER = '1';
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogAddPackageComponent.prototype,
            'bidtDeliveryFolder',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogAddPackageComponent.prototype,
            'onCreate',
            void 0
          );
          DialogAddPackageComponent = DialogAddPackageComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-add-package',
                template: __webpack_require__(
                  /*! ./dialog-add-package.component.html */ './src/app/main/logistics/goods-receipt/form/dialog-add-package/dialog-add-package.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-add-package.component.scss */ './src/app/main/logistics/goods-receipt/form/dialog-add-package/dialog-add-package.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _logistics_service__WEBPACK_IMPORTED_MODULE_8__['LogisticsService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__['PropertiesService'],
                _delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_9__['DeliveryFolderSearchService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__['MessageService']
              ])
            ],
            DialogAddPackageComponent
          );
          return DialogAddPackageComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/form/dialog-create-litigation/dialog-create-litigation.component.html':
      /*!********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/form/dialog-create-litigation/dialog-create-litigation.component.html ***!
  \********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="row">\r\n      <div class="form-group required">\r\n        <label class="form-label">{{ getComponentName() + ".type" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <p-dropdown class="aw-dropdown fixed-width" placeholder="&nbsp;" [showClear]="true"></p-dropdown>\r\n        </div>\r\n      </div>\r\n      <div class="form-group required">\r\n        <label class="form-label">{{ getComponentName() + ".typeOfItemInDispute" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            placeholder="&nbsp;"\r\n            [showClear]="true"\r\n            [(ngModel)]="litigationItem"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="row">\r\n      <div class="form-group required">\r\n        <label class="form-label">{{ getComponentName() + ".comment" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <textarea class="aw-textarea" [rows]="3" maxlength="300" pInputTextarea></textarea>\r\n        </div>\r\n      </div>\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".isBlockingLitigation" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <p-checkbox binary="true"></p-checkbox>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="row">\r\n      <div class="form-group required">\r\n        <label class="form-label">{{ getComponentName() + ".observationDate" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <p-calendar\r\n            showButtonBar="true"\r\n            [monthNavigator]="true"\r\n            [yearNavigator]="true"\r\n            [yearRange]="sessionService.calendarYearRange"\r\n            class="aw-calendar"\r\n            [dateFormat]="sessionService.dateFormatPrimeNG"\r\n            [locale]="sessionService.calendarFormat"\r\n            appendTo="body"\r\n            disabled\r\n          ></p-calendar>\r\n        </div>\r\n      </div>\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".foundBy" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <input class="aw-input" type="text" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="row">\r\n      <div class="form-group required">\r\n        <label class="form-label">{{ getComponentName() + ".responsibleTreatment" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <p-dropdown class="aw-dropdown fixed-width" placeholder="&nbsp;" [showClear]="true"></p-dropdown>\r\n        </div>\r\n      </div>\r\n      <div class="form-group required">\r\n        <label class="form-label">{{ getComponentName() + ".qualityController" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <p-dropdown class="aw-dropdown fixed-width" placeholder="&nbsp;" [showClear]="true"></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="row">\r\n      <div class="form-group required">\r\n        <label class="form-label">{{ getComponentName() + ".actionPlan" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <p-dropdown class="aw-dropdown fixed-width" placeholder="&nbsp;" [showClear]="true"></p-dropdown>\r\n        </div>\r\n      </div>\r\n      <div class="form-group"></div>\r\n    </div>\r\n  </a-content>\r\n  <a-footer>\r\n    <button type="button" color="primary" mat-raised-button (click)="validate()">\r\n      <span>{{ "global.validate" | translate }}</span>\r\n    </button>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/form/dialog-create-litigation/dialog-create-litigation.component.scss':
      /*!********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/form/dialog-create-litigation/dialog-create-litigation.component.scss ***!
  \********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL2dvb2RzLXJlY2VpcHQvZm9ybS9kaWFsb2ctY3JlYXRlLWxpdGlnYXRpb24vZGlhbG9nLWNyZWF0ZS1saXRpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/form/dialog-create-litigation/dialog-create-litigation.component.ts':
      /*!******************************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/form/dialog-create-litigation/dialog-create-litigation.component.ts ***!
  \******************************************************************************************************************/
      /*! exports provided: DialogCreateLitigationComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogCreateLitigationComponent',
          function() {
            return DialogCreateLitigationComponent;
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

        var DialogCreateLitigationComponent = /** @class */ (function(_super) {
          __extends(DialogCreateLitigationComponent, _super);
          function DialogCreateLitigationComponent(sessionService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Read,
                'DialogCreateLitigationComponent'
              ) || this;
            _this.sessionService = sessionService;
            return _this;
          }
          DialogCreateLitigationComponent.prototype.ngOnInit = function() {
            // TODO
          };
          DialogCreateLitigationComponent.prototype.validate = function() {
            // TODO
          };
          DialogCreateLitigationComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-create-litigation',
                template: __webpack_require__(
                  /*! ./dialog-create-litigation.component.html */ './src/app/main/logistics/goods-receipt/form/dialog-create-litigation/dialog-create-litigation.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-create-litigation.component.scss */ './src/app/main/logistics/goods-receipt/form/dialog-create-litigation/dialog-create-litigation.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__['SessionService']
              ])
            ],
            DialogCreateLitigationComponent
          );
          return DialogCreateLitigationComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/form/dialog-document-categories/dialog-document-categories.component.html':
      /*!************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/form/dialog-document-categories/dialog-document-categories.component.html ***!
  \************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="20">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <textarea class="aw-textarea" [rows]="7" [(ngModel)]="dialogContent" disabled="true"></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">{{ "global.close" | translate }}</button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/form/dialog-document-categories/dialog-document-categories.component.ts':
      /*!**********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/form/dialog-document-categories/dialog-document-categories.component.ts ***!
  \**********************************************************************************************************************/
      /*! exports provided: DialogDocumentCategoriesReceiptFolderComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogDocumentCategoriesReceiptFolderComponent',
          function() {
            return DialogDocumentCategoriesReceiptFolderComponent;
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
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
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

        var DialogDocumentCategoriesReceiptFolderComponent = /** @class */ (function(_super) {
          __extends(DialogDocumentCategoriesReceiptFolderComponent, _super);
          function DialogDocumentCategoriesReceiptFolderComponent(propertiesService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read,
                'DialogDocumentCategoriesReceiptFolderComponent'
              ) || this;
            _this.propertiesService = propertiesService;
            return _this;
          }
          DialogDocumentCategoriesReceiptFolderComponent.prototype.ngOnInit = function() {
            var _this = this;
            this.numberOfDocs = 1;
            this.dialogContent = '';
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .DOC_ASSET_CATEGORY_MAP
              )
              .subscribe(function(docCategorieMap) {
                if (
                  _this.bidtDfTypeOperationDTO.docCategories &&
                  _this.bidtDfTypeOperationDTO.docCategories.length > 0
                ) {
                  _this.bidtDfTypeOperationDTO.docCategories.forEach(function(categorieOpe) {
                    if (_this.numberOfDocs === 1) {
                      _this.dialogContent =
                        _this.numberOfDocs +
                        '. ' +
                        docCategorieMap.filter(function(categorie) {
                          return categorie.value === categorieOpe;
                        })[0].label;
                      _this.numberOfDocs++;
                    } else {
                      _this.dialogContent =
                        _this.dialogContent +
                        '\r\r' +
                        _this.numberOfDocs +
                        '. ' +
                        docCategorieMap.filter(function(categorie) {
                          return categorie.value === categorieOpe;
                        })[0].label;
                      _this.dialogContent = _this.dialogContent.replace(/\r?\n/g, '</br>');
                      _this.numberOfDocs++;
                    }
                  });
                }
              });
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogDocumentCategoriesReceiptFolderComponent.prototype,
            'bidtDfTypeOperationDTO',
            void 0
          );
          DialogDocumentCategoriesReceiptFolderComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-document-categories',
                template: __webpack_require__(
                  /*! ./dialog-document-categories.component.html */ './src/app/main/logistics/goods-receipt/form/dialog-document-categories/dialog-document-categories.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_3__['PropertiesService']
              ])
            ],
            DialogDocumentCategoriesReceiptFolderComponent
          );
          return DialogDocumentCategoriesReceiptFolderComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/form/goods-receipt-form.component.html':
      /*!*************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/form/goods-receipt-form.component.html ***!
  \*************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <h2 class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </h2>\r\n\r\n      <div class="page-subtitle">\r\n        <div *ngIf="!isCreateOpenMode && deliveryFolder.dfCode" class="page-subtitle">\r\n          - {{ deliveryFolder.dfCode }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="object-status" *ngIf="deliveryFolder.dfStatus" (click)="showStatus()">\r\n      {{ deliveryFolder.dfStatus | formatSelectOption: deliveryFolderStatuses }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item (click)="scanAsset()" *ngIf="!isDeliveryFolderDraftStatus()">\r\n        {{ componentData.componentId + ".scanAsset" | translate }}\r\n      </button>\r\n\r\n      <button mat-menu-item (click)="refresh()">\r\n        {{ "global.refresh" | translate }}\r\n      </button>\r\n      <button mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <mat-tab-group animationDuration="0ms" dynamicHeight>\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          {{ "home" | translate }}\r\n        </ng-template>\r\n\r\n        <div class="grid-row">\r\n          <div class="grid-cell--6">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ "page.mainData" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content grid-cell-content-with-section">\r\n                <div class="column">\r\n                  <div class="section">\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ getComponentName() + ".folderNum" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-generic">\r\n                            {{ deliveryFolder.dfCode }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ getComponentName() + ".type" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-generic">\r\n                            {{ deliveryFolder.bidtDfType?.dftDesignation | extractTranslation }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ getComponentName() + ".control" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <div\r\n                            class="alert alert--nok"\r\n                            *ngIf="\r\n                              deliveryFolder.criticality === awPropertiesConstants.LOGISTICAL_CRITICALITY_IMMEDIATE\r\n                            "\r\n                          >\r\n                            {{ componentData.componentId + ".immediate" | translate }}\r\n                          </div>\r\n\r\n                          <div\r\n                            class="alert alert--warning"\r\n                            *ngIf="deliveryFolder.criticality === awPropertiesConstants.LOGISTICAL_CRITICALITY_URGENT"\r\n                          >\r\n                            {{ componentData.componentId + ".urgent" | translate }}\r\n                          </div>\r\n\r\n                          <div\r\n                            class="alert alert--ok"\r\n                            *ngIf="deliveryFolder.criticality === awPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE"\r\n                          >\r\n                            {{ componentData.componentId + ".routine" | translate }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ getComponentName() + ".created" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-generic">\r\n                            {{ deliveryFolder.statusDate | date: "shortDate":"":translateService.currentLang }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="section">\r\n                    <h4 class="section-title">\r\n                      {{ "origin" | translate }}\r\n                    </h4>\r\n                  </div>\r\n\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".refDocumentNum" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <div class="form-control-generic" *ngIf="!shipmentFolderLinked">\r\n                          <a (click)="openOrder(deliveryFolder.bidtTransferOrder?.id)">{{\r\n                            deliveryFolder.bidtTransferOrder?.torCode\r\n                          }}</a>\r\n                        </div>\r\n                        <div class="form-control-generic" *ngIf="shipmentFolderLinked">\r\n                          <a (click)="openShipmentFolder()"> {{ shipmentFolderLinked.dfCode }} </a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".refDocType" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          *ngIf="!shipmentFolderLinked && deliveryFolder.bidtTransferOrder"\r\n                          class="aw-input"\r\n                          type="text"\r\n                          disabled\r\n                          [ngModel]="\r\n                            toNumber(deliveryFolder.bidtTransferOrder.torType)\r\n                              | formatSelectOption: torTypeList\r\n                              | extractTranslation\r\n                          "\r\n                        />\r\n                        <div class="form-control-generic" *ngIf="shipmentFolderLinked">\r\n                          {{ this.shipmentFolderLinkedType }}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".refStatus" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          *ngIf="!shipmentFolderLinked && deliveryFolder.bidtTransferOrder"\r\n                          class="aw-input"\r\n                          type="text"\r\n                          disabled\r\n                          [ngModel]="\r\n                            deliveryFolder.bidtTransferOrder.torStatus\r\n                              | formatSelectOption: transfertOrderStatusMap\r\n                              | extractTranslation\r\n                          "\r\n                        />\r\n                        <div class="form-control-generic" *ngIf="shipmentFolderLinked">\r\n                          {{ shipmentFolderLinked.dfStatus | formatSelectOption: shipmentFolderStatuses }}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="grid-cell--3">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ getComponentName() + ".provider" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content">\r\n                <div class="column">\r\n                  <div class="row" *ngIf="deliveryFolder.bidoCustomerSender?.customerCode">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".partner" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <div class="form-control-generic">\r\n                          {{ deliveryFolder.bidoCustomerSender?.customerCode }}\r\n                          <ng-container *ngIf="deliveryFolder.bidoCustomerSender?.customerName">\r\n                            <span style="padding: 0 8px">-</span>\r\n                            {{ deliveryFolder.bidoCustomerSender?.customerName }}\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="row" *ngIf="deliveryFolder.bidtSiteSender?.siteCode">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".site" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <div class="form-control-generic">\r\n                          {{ deliveryFolder.bidtSiteSender?.siteCode }}\r\n                          <ng-container *ngIf="deliveryFolder.bidtSiteSender?.siteName">\r\n                            <span style="padding: 0 8px">-</span>\r\n                            {{ deliveryFolder.bidtSiteSender?.siteName }}\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="row" *ngIf="deliveryFolder.bidtWarehouseSender?.whCode">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".shop" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <div class="form-control-generic">\r\n                          {{ deliveryFolder.bidtWarehouseSender?.whCode }}\r\n                          <ng-container *ngIf="deliveryFolder.bidtWarehouseSender?.whName">\r\n                            <span style="padding: 0 8px">-</span>\r\n                            {{ deliveryFolder.bidtWarehouseSender?.whName }}\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div #receipentAnchor class="grid-cell--3">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ getComponentName() + ".recipient" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content">\r\n                <div class="column">\r\n                  <div class="row" *ngIf="deliveryFolder.bidoCustomerReceiver?.customerCode">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".partner" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <div class="form-control-generic">\r\n                          {{ deliveryFolder.bidoCustomerReceiver?.customerCode }}\r\n                          <ng-container *ngIf="deliveryFolder.bidoCustomerReceiver?.customerName">\r\n                            <span style="padding: 0 8px">-</span>\r\n                            {{ deliveryFolder.bidoCustomerReceiver?.customerName }}\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="row" *ngIf="deliveryFolder.bidtSiteReceiver?.siteCode">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".site" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <div class="form-control-generic">\r\n                          {{ deliveryFolder.bidtSiteReceiver?.siteCode }}\r\n                          <ng-container *ngIf="deliveryFolder.bidtSiteReceiver?.siteName">\r\n                            <span style="padding: 0 8px">-</span>\r\n                            {{ deliveryFolder.bidtSiteReceiver?.siteName }}\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="row" *ngIf="deliveryFolder.bidtWarehouseReceiver?.whCode">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".shop" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <div class="form-control-generic">\r\n                          {{ deliveryFolder.bidtWarehouseReceiver?.whCode }}\r\n                          <ng-container *ngIf="deliveryFolder.bidtWarehouseReceiver?.whName">\r\n                            <span style="padding: 0 8px">-</span>\r\n                            {{ deliveryFolder.bidtWarehouseReceiver?.whName }}\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".expectedDate" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <div class="form-control-generic">\r\n                          {{ deliveryFolder.plannedDate | date: "shortDate":"":translateService.currentLang }}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-row">\r\n          <div #parcelAnchor class="grid-cell--12">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ componentData.componentId + ".parcel" | translate }} ({{\r\n                      parcelTableData ? parcelTableData.length : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content grid-cell-content-with-section">\r\n                <div class="section">\r\n                  <div class="section-content">\r\n                    <!-- Counter ROW -->\r\n                    <!-- <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">&nbsp;</label>\r\n                        <div class="form-control">\r\n                          <label class="form-label">{{ componentData.componentId + ".expected" | translate }}</label>\r\n                          <span> {{ pExpected }} </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group">\r\n                        <label class="form-label">&nbsp;</label>\r\n                        <div class="form-control">\r\n                          <label class="form-label">{{ componentData.componentId + ".received" | translate }}</label>\r\n                          <span> {{ pReceived }} </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group">\r\n                        <label class="form-label">&nbsp;</label>\r\n                        <div class="form-control">\r\n                          <label class="form-label">{{ componentData.componentId + ".accepted" | translate }}</label>\r\n                          <span> {{ pAccepted }} </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group">\r\n                        <label class="form-label">&nbsp;</label>\r\n                        <div class="form-control">\r\n                          <label class="form-label">{{ componentData.componentId + ".inDispute" | translate }}</label>\r\n                          <span> {{ pDispute }} </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>-->\r\n\r\n                    <!-- Table -->\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      #ptableParcels\r\n                      class="aw-table2"\r\n                      [columns]="parcelTableCols"\r\n                      [value]="parcelTableData"\r\n                      [(selection)]="selectedParcels"\r\n                      [scrollable]="true"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedParcels.length > 0 }">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableMeasuresGlobalFilter\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="ptableParcels.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n                          <div class="aw-table-actions">\r\n                            <button\r\n                              *ngIf="\r\n                                selectedParcels.length > 0 &&\r\n                                isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                                !isDeliveryFolderPerformedStatus()\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              color="warn"\r\n                              (click)="deleteReceiptPackage()"\r\n                            >\r\n                              {{ "global.delete" | translate }}\r\n                            </button>\r\n                            <button\r\n                              *ngIf="\r\n                                selectedParcels.length === 0 &&\r\n                                isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                                !isDeliveryFolderPerformedStatus()\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="addPackageDialog()"\r\n                            >\r\n                              {{ componentData.componentId + ".addPackage" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="selectedParcels.length > 0 && isUserCanAddHaveRightOnDeliveryFolder()"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="openSelectedGoods()"\r\n                            >\r\n                              {{ componentData.componentId + ".createLitigation" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="\r\n                                selectedParcels.length > 0 &&\r\n                                isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                                !isDeliveryFolderPerformedStatus()\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="validateOperations()"\r\n                            >\r\n                              {{ componentData.componentId + ".validateOperations" | translate }}\r\n                            </button>\r\n\r\n                            <div class="aw-table-icon-actions">\r\n                              <i\r\n                                class="fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n                                aria-hidden="true"\r\n                                tooltipPosition="top"\r\n                              ></i>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col class="aw-table-checkbox-wrapper" />\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th class="aw-table-checkbox-wrapper">\r\n                            <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                          </th>\r\n                          <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                            <div *ngIf="col.isDynamic">\r\n                              {{ col.value }}\r\n                            </div>\r\n                            <div *ngIf="!col.isDynamic">\r\n                              {{ componentData.componentId + "." + col.field | translate }}\r\n                            </div>\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                          <td class="aw-table-checkbox-wrapper">\r\n                            <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                          </td>\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchCase="\'packageNum\'">\r\n                              {{ rowData["packageCode"] }}\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'status\'">\r\n                              {{ rowData["packageStatus"] }}\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'progress\'">\r\n                              <p-progressBar\r\n                                [ngClass]="{ green: rowData[col.field] === component.PROGRESS_MAX }"\r\n                                [value]="rowData[col.field]"\r\n                              ></p-progressBar>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="awPropertiesConstants.LOGISTICAL_OPERATION_PHYSICAL_RECEIPT">\r\n                              <p-checkbox\r\n                                *ngIf="\r\n                                  !isDeliveryFolderDraftStatus() &&\r\n                                  isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                                  rowData[\'isGoodStatus\']\r\n                                "\r\n                                [(ngModel)]="rowData[\'received\']"\r\n                                (onChange)="onChangeReceivedAndCompliance(rowData, col.field)"\r\n                                binary="true"\r\n                                [disabled]="rowData[\'isDisable\']"\r\n                              ></p-checkbox>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="awPropertiesConstants.LOGISTICAL_OPERATION_PACKAGING_CONTROL">\r\n                              <p-checkbox\r\n                                *ngIf="!isDeliveryFolderDraftStatus() && isUserCanAddHaveRightOnDeliveryFolder()"\r\n                                [(ngModel)]="rowData[\'packagingCtrl\']"\r\n                                (onChange)="onChangeReceivedAndCompliance(rowData)"\r\n                                binary="true"\r\n                                [disabled]="rowData[\'isDisable\']"\r\n                              ></p-checkbox>\r\n                            </span>\r\n\r\n                            <span *ngSwitchDefault>\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          {{ componentData.componentId + ".posts" | translate }}\r\n        </ng-template>\r\n\r\n        <div class="grid-row">\r\n          <div #postsAnchor class="grid-cell--12">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ componentData.componentId + ".posts" | translate }} ({{\r\n                      postsTableData ? postsTableData.length : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content grid-cell-content-with-section">\r\n                <div class="section">\r\n                  <div class="section-content">\r\n                    <!-- Counter ROW -->\r\n                    <!-- <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">&nbsp;</label>\r\n                        <div class="form-control">\r\n                          <label class="form-label">{{ componentData.componentId + ".planned" | translate }}</label>\r\n                          <span> {{ iPlanned }} </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group">\r\n                        <label class="form-label">&nbsp;</label>\r\n                        <div class="form-control">\r\n                          <label class="form-label">{{ componentData.componentId + ".inProgress" | translate }}</label>\r\n                          <span> {{ iProgress }} </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group">\r\n                        <label class="form-label">&nbsp;</label>\r\n                        <div class="form-control">\r\n                          <label class="form-label">{{ componentData.componentId + ".released" | translate }}</label>\r\n                          <span> {{ iReleased }} </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group">\r\n                        <label class="form-label">&nbsp;</label>\r\n                        <div class="form-control">\r\n                          <label class="form-label">{{ componentData.componentId + ".inDispute" | translate }}</label>\r\n                          <span> {{ iDispute }} </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>-->\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      #ptablePosts\r\n                      class="aw-table2"\r\n                      [columns]="postsTableCols"\r\n                      [value]="postsTableData"\r\n                      [(selection)]="selectedPost"\r\n                      [scrollable]="true"\r\n                      [paginator]="false"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header" [ngClass]="{ \'rows-selected\': isEmpty(selectedPost) > 0 }">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableMeasuresGlobalFilter\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="ptablePosts.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n                          <div class="aw-table-actions">\r\n                            <button\r\n                              *ngIf="\r\n                                selectedPost.length > 0 &&\r\n                                isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                                !isDeliveryFolderPerformedStatus()\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              color="warn"\r\n                              (click)="deleteReceiptItem()"\r\n                            >\r\n                              {{ "global.delete" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="\r\n                                selectedPost.length === 0 &&\r\n                                isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                                !isDeliveryFolderPerformedStatus()\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="addItemDialog()"\r\n                            >\r\n                              {{ componentData.componentId + ".addItem" | translate }}\r\n                            </button>\r\n\r\n                            <!--    <button\r\n                              *ngIf="!!selectedPost && isEmpty(selectedPost) > 0"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="openSelectedPost()"\r\n                            >\r\n                              {{ "global.open" | translate }}\r\n                            </button>-->\r\n\r\n                            <div class="aw-table-icon-actions">\r\n                              <i\r\n                                class="fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n                                aria-hidden="true"\r\n                                tooltipPosition="top"\r\n                              ></i>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col class="aw-table-checkbox-wrapper" />\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th class="aw-table-checkbox-wrapper">\r\n                            <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                          </th>\r\n                          <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                            <div *ngIf="col.isDynamic">\r\n                              {{ col.value }}\r\n                            </div>\r\n                            <div *ngIf="!col.isDynamic">\r\n                              {{ componentData.componentId + "." + col.field | translate }}\r\n                            </div>\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                          <td class="aw-table-checkbox-wrapper">\r\n                            <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                          </td>\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchCase="\'refeArticle\'">\r\n                              <div>\r\n                                <a (click)="openPartNumberLink(rowData)">{{ rowData["birePnPnCode"] }}</a>\r\n                              </div>\r\n                              <div>\r\n                                <i>{{ rowData["articleDesignation"] }}</i>\r\n                              </div>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'quantity\'">\r\n                              <span>\r\n                                {{ rowData[col.field] | formatNumber }}\r\n                              </span>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="awPropertiesConstants.LOGISTICAL_OPERATION_QUALITY_CONTROL">\r\n                              <p-checkbox\r\n                                *ngIf="\r\n                                  !isDeliveryFolderDraftStatus() ||\r\n                                  (rowData[\'isHide\'] && isUserCanAddHaveRightOnDeliveryFolder())\r\n                                "\r\n                                [(ngModel)]="rowData[\'controlQuantity\']"\r\n                                (onChange)="onChangeItemControl(rowData, col.field)"\r\n                                binary="true"\r\n                                [disabled]="rowData[\'isDisable\']"\r\n                              ></p-checkbox>\r\n                            </span>\r\n                            <span *ngSwitchCase="\'progress\'">\r\n                              <p-progressBar\r\n                                [ngClass]="{ green: rowData[col.field] === component.PROGRESS_MAX }"\r\n                                [value]="rowData[col.field]"\r\n                              ></p-progressBar>\r\n                            </span>\r\n                            <span *ngSwitchDefault>\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          {{ getComponentName() + ".materials" | translate }}\r\n        </ng-template>\r\n\r\n        <div class="grid-row">\r\n          <div #materialsAnchor class="grid-cell--12">\r\n            <div class="grid-cell grid-cell--container ">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ getComponentName() + ".materials" | translate }} ({{\r\n                      materialTableData ? materialTableData.length : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content">\r\n                <!-- Counter ROW -->\r\n                <!-- <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">&nbsp;</label>\r\n                    <div class="form-control">\r\n                      <label class="form-label">{{ getComponentName() + ".expected" | translate }}</label>\r\n                      <span> {{ mExpected }} </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">&nbsp;</label>\r\n                    <div class="form-control">\r\n                      <label class="form-label">{{ getComponentName() + ".receptionOK" | translate }}</label>\r\n                      <span> {{ mOK }} </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">&nbsp;</label>\r\n                    <div class="form-control">\r\n                      <label class="form-label">{{ getComponentName() + ".inDispute" | translate }}</label>\r\n                      <span> {{ mDispute }} </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group"></div>\r\n                </div>-->\r\n\r\n                <!-- MATERIAL TABLE -->\r\n                <p-table\r\n                  [resizableColumns]="true"\r\n                  #ptableMaterials\r\n                  class="aw-table2"\r\n                  [columns]="materialTableCols"\r\n                  [value]="materialTableData"\r\n                  [(selection)]="selectedMaterials"\r\n                  [scrollable]="true"\r\n                >\r\n                  <ng-template pTemplate="emptymessage">\r\n                    <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n                    <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                      <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                      <div class="lds-hourglass"></div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="caption">\r\n                    <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedMaterials.length > 0 }">\r\n                      <div class="aw-table-global-filter">\r\n                        <label class="aw-table-global-filter-label">\r\n                          <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                        </label>\r\n\r\n                        <input\r\n                          #ptableMeasuresGlobalFilter\r\n                          class="aw-table-global-filter-input"\r\n                          type="text"\r\n                          placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                          (input)="ptableMaterials.filterGlobal($event.target.value, \'contains\')"\r\n                        />\r\n                      </div>\r\n                      <div class="aw-table-actions">\r\n                        <button\r\n                          *ngIf="\r\n                            selectedMaterials.length > 0 &&\r\n                            isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                            !isDeliveryFolderPerformedStatus()\r\n                          "\r\n                          type="button"\r\n                          mat-raised-button\r\n                          color="warn"\r\n                          (click)="deleteReceiptMaterial()"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="\r\n                            selectedMaterials.length === 0 &&\r\n                            isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                            !isDeliveryFolderPerformedStatus()\r\n                          "\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="addMaterialDialog()"\r\n                        >\r\n                          {{ componentData.componentId + ".addMaterial" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="\r\n                            selectedMaterials.length > 0 &&\r\n                            isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                            !isDeliveryFolderPerformedStatus()\r\n                          "\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="openLitigationDialog()"\r\n                        >\r\n                          {{ componentData.componentId + ".createLitigation" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="\r\n                            selectedMaterials.length > 0 &&\r\n                            isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                            !isDeliveryFolderPerformedStatus()\r\n                          "\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="validateMaterialOperations()"\r\n                        >\r\n                          {{ componentData.componentId + ".validateOperations" | translate }}\r\n                        </button>\r\n                        <button\r\n                          type="button"\r\n                          mat-raised-button\r\n                          *ngIf="isNextMvtContainStockPilling"\r\n                          (click)="toStockpilling()"\r\n                        >\r\n                          {{ getComponentName() + ".stockpilling" | translate }}\r\n                        </button>\r\n                        <button\r\n                          type="button"\r\n                          mat-raised-button\r\n                          *ngIf="isNextMvtContainCrossDocking"\r\n                          (click)="toCrossDocking()"\r\n                        >\r\n                          {{ getComponentName() + ".crossDocking" | translate }}\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="colgroup" let-columns>\r\n                    <colgroup>\r\n                      <col class="aw-table-checkbox-wrapper" />\r\n                      <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                    </colgroup>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="header" let-columns>\r\n                    <tr>\r\n                      <th class="aw-table-checkbox-wrapper">\r\n                        <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                      </th>\r\n                      <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                        <div *ngIf="col.isDynamic">\r\n                          {{ col.value }}\r\n                        </div>\r\n                        <div *ngIf="!col.isDynamic">\r\n                          {{ componentData.componentId + "." + col.field | translate }}\r\n                        </div>\r\n                      </th>\r\n                    </tr>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                    <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                      <td class="aw-table-checkbox-wrapper">\r\n                        <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                      </td>\r\n                      <td\r\n                        *ngFor="let col of columns"\r\n                        [ngSwitch]="col.field"\r\n                        [ngStyle]="{ \'text-align\': col.alignment }"\r\n                      >\r\n                        <span *ngSwitchCase="\'refeArticle\'">\r\n                          <div>\r\n                            <a (click)="openPartNumberLink(rowData[\'item\'])">{{ rowData["pnCode"] }}</a>\r\n                          </div>\r\n                          <div>\r\n                            <span>{{ rowData["pnDesignation"] }}</span>\r\n                          </div>\r\n                        </span>\r\n                        <span *ngSwitchCase="\'batchNumber\'">\r\n                          <div *ngIf="rowData[\'batchNumber\']">\r\n                            <a (click)="openLink(rowData[\'bidoEquipment\'])">{{ rowData["batchNumber"] }} </a>\r\n                          </div>\r\n                          <div *ngIf="rowData[\'batchNumber\']">\r\n                            <span>{{ rowData["equipmentStatus"] }} </span>\r\n                          </div>\r\n                        </span>\r\n                        <span *ngSwitchCase="\'sn\'">\r\n                          <div *ngIf="rowData[\'bidoEquipment\']">\r\n                            <a (click)="openLinkEquipment(rowData[\'bidoEquipment\'].equipmentCode)"\r\n                              >{{ rowData["bidoEquipment"].sn }}\r\n                            </a>\r\n                          </div>\r\n                          <div *ngIf="rowData[\'bidoEquipment\'] && !rowData[\'batchNumber\']">\r\n                            <span>{{ rowData["equipmentStatus"] }} </span>\r\n                          </div>\r\n                        </span>\r\n\r\n                        <span *ngSwitchCase="\'manufacturingBatch\'">\r\n                          <div *ngIf="rowData[\'manufacturingBatch\']">\r\n                            <a (click)="openMfgBatch(rowData[\'manufacturingBatch\'].equipmentCode)"\r\n                              >{{ rowData["manufacturingBatch"].batchNumber }}\r\n                            </a>\r\n                          </div>\r\n                          <div *ngIf="rowData[\'manufacturingBatch\'] && !rowData[\'batchNumber\']">\r\n                            <span>{{ rowData["equipmentStatus"] }} </span>\r\n                          </div>\r\n                        </span>\r\n                        <span *ngSwitchCase="\'expirationDate\'">\r\n                          {{ rowData["expirationDate"] | date: "yyyy/MM/dd":"":translateService.currentLang }}\r\n                        </span>\r\n\r\n                        <span *ngSwitchCase="\'qty\'">\r\n                          {{ rowData["quantity"] | formatNumber }}\r\n                        </span>\r\n                        <span *ngSwitchCase="\'packageNum\'">\r\n                          <div *ngIf="rowData.isContener">\r\n                            <a>{{ rowData[col.field] }}</a>\r\n                          </div>\r\n                          <div *ngIf="rowData.isContener">\r\n                            <span> {{ rowData["bidtpackageStatus"] }}</span>\r\n                          </div>\r\n\r\n                          <div *ngIf="!rowData.isContener">{{ rowData[col.field] }}</div>\r\n                        </span>\r\n                        <span *ngSwitchCase="awPropertiesConstants.LOGISTICAL_OPERATION_DOCUMENT_CONTROL">\r\n                          <div>\r\n                            <p-checkbox\r\n                              *ngIf="\r\n                                !isDeliveryFolderDraftStatus() &&\r\n                                !rowData[\'isDisable\'] &&\r\n                                isUserCanAddHaveRightOnDeliveryFolder()\r\n                              "\r\n                              [(ngModel)]="rowData[\'documentary\']"\r\n                              (onChange)="onChangeMaterialControl(rowData, col.field)"\r\n                              binary="true"\r\n                            ></p-checkbox>\r\n                            <i\r\n                              *ngIf="\r\n                                !isDeliveryFolderDraftStatus() &&\r\n                                !rowData[\'isDisable\'] &&\r\n                                isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                                rowData[\'_operationDocumentary\'].bidtDfTypeOperation &&\r\n                                rowData[\'_operationDocumentary\'].bidtDfTypeOperation.docCategories\r\n                              "\r\n                              (click)="openDocumentDialog(rowData[\'_operationDocumentary\'].bidtDfTypeOperation)"\r\n                              class="fa fa-book icon"\r\n                              aria-hidden="true"\r\n                            ></i>\r\n                          </div>\r\n                        </span>\r\n                        <span *ngSwitchCase="awPropertiesConstants.LOGISTICAL_OPERATION_VISUAL_CONTROL">\r\n                          <div>\r\n                            <p-checkbox\r\n                              *ngIf="\r\n                                !isDeliveryFolderDraftStatus() &&\r\n                                !rowData[\'isDisable\'] &&\r\n                                isUserCanAddHaveRightOnDeliveryFolder()\r\n                              "\r\n                              [(ngModel)]="rowData[\'visual\']"\r\n                              (onChange)="onChangeMaterialControl(rowData, col.field)"\r\n                              binary="true"\r\n                            ></p-checkbox>\r\n                            <i\r\n                              *ngIf="\r\n                                !isDeliveryFolderDraftStatus() &&\r\n                                !rowData[\'isDisable\'] &&\r\n                                isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                                rowData[\'_operationVisual\'].bidtDfTypeOperation &&\r\n                                rowData[\'_operationVisual\'].bidtDfTypeOperation.docCategories\r\n                              "\r\n                              (click)="openDocumentDialog(rowData[\'_operationVisual\'].bidtDfTypeOperation)"\r\n                              class="fa fa-book icon"\r\n                              aria-hidden="true"\r\n                            ></i>\r\n                          </div>\r\n                        </span>\r\n                        <span *ngSwitchCase="awPropertiesConstants.LOGISTICAL_OPERATION_PHYSICAL_RECEIPT">\r\n                          <div>\r\n                            <p-checkbox\r\n                              *ngIf="\r\n                                !isDeliveryFolderDraftStatus() &&\r\n                                !rowData[\'isDisable\'] &&\r\n                                isUserCanAddHaveRightOnDeliveryFolder()\r\n                              "\r\n                              [(ngModel)]="rowData[\'physical\']"\r\n                              (onChange)="onChangeMaterialControl(rowData, col.field)"\r\n                              binary="true"\r\n                            ></p-checkbox>\r\n                            <i\r\n                              *ngIf="\r\n                                !isDeliveryFolderDraftStatus() &&\r\n                                !rowData[\'isDisable\'] &&\r\n                                isUserCanAddHaveRightOnDeliveryFolder() &&\r\n                                rowData[\'_operationPhysical\'].bidtDfTypeOperation &&\r\n                                rowData[\'_operationPhysical\'].bidtDfTypeOperation.docCategories\r\n                              "\r\n                              (click)="openDocumentDialog(rowData[\'_operationPhysical\'].bidtDfTypeOperation)"\r\n                              class="fa fa-book icon"\r\n                              aria-hidden="true"\r\n                            ></i>\r\n                          </div>\r\n                        </span>\r\n                        <span *ngSwitchCase="\'progress\'">\r\n                          <p-progressBar\r\n                            [ngClass]="{ green: rowData[col.field] === component.PROGRESS_MAX }"\r\n                            [value]="rowData[col.field]"\r\n                          ></p-progressBar>\r\n                        </span>\r\n                        <span *ngSwitchDefault>\r\n                          {{ rowData[col.field] }}\r\n                        </span>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </p-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          {{ componentData.componentId + ".documents" | translate }}\r\n        </ng-template>\r\n\r\n        <div class="grid-row">\r\n          <div class="grid-cell--12">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ componentData.componentId + ".documents" | translate }} ({{ documentTableDataSource.dataCount }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content grid-cell-content-with-section">\r\n                <div class="section">\r\n                  <div class="section-content">\r\n                    <a-table [dataSource]="documentTableDataSource">\r\n                      <ng-template tableActionsDef>\r\n                        <p-fileUpload\r\n                          #fileUploader\r\n                          auto="true"\r\n                          chooseLabel="{{ \'global.upload\' | translate }}"\r\n                          customUpload="true"\r\n                          mode="basic"\r\n                          name="document[]"\r\n                          (uploadHandler)="uploadDocument($event, fileUploader)"\r\n                          *ngIf="!documentTableDataSource.hasDataSelection && isUserCanAddHaveRightOnDeliveryFolder()"\r\n                        >\r\n                        </p-fileUpload>\r\n\r\n                        <button\r\n                          *ngIf="documentTableDataSource.hasDataSelection && isUserCanAddHaveRightOnDeliveryFolder()"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="downloadFiles()"\r\n                        >\r\n                          {{ "global.download" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="documentTableDataSource.hasDataSelection && isUserCanAddHaveRightOnDeliveryFolder()"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          color="warn"\r\n                          (click)="deleteDocuments()"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n                      </ng-template>\r\n\r\n                      <ng-template columnDef="documentPublicationDate" let-rowData="rowData">\r\n                        {{ rowData["documentPublicationDate"] | date: "shortDate":"":translateService.currentLang }}\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-create-litigation *ngIf="showLitigation" [(display)]="showLitigation"></aw-dialog-create-litigation>\r\n<aw-dialog-add-package\r\n  [bidtDeliveryFolder]="deliveryFolder"\r\n  *ngIf="openAddPackageDialog"\r\n  [(display)]="openAddPackageDialog"\r\n  (onCreate)="onCreatePackage($event)"\r\n></aw-dialog-add-package>\r\n<aw-dialog-add-item\r\n  *ngIf="openAddItemDialog"\r\n  [(display)]="openAddItemDialog"\r\n  [deliveryFolder]="deliveryFolder"\r\n  [packageDtoList]="packageList"\r\n  (onCreate)="onCreateItem($event)"\r\n></aw-dialog-add-item>\r\n<aw-dialog-add-material\r\n  *ngIf="openAddMaterialDialog"\r\n  [(display)]="openAddMaterialDialog"\r\n  [bidtDeliveryFolder]="deliveryFolder"\r\n  [itemsDtoList]="itemsList"\r\n  [packageDtoList]="packageList"\r\n  (onCreate)="onCreateMaterial($event)"\r\n></aw-dialog-add-material>\r\n<aw-dialog-document-categories\r\n  *ngIf="openDocumentCategorieDialog"\r\n  [(display)]="openDocumentCategorieDialog"\r\n  [bidtDfTypeOperationDTO]="selectedOperation"\r\n></aw-dialog-document-categories>\r\n\r\n<aw-goods-receipt-scan-asset\r\n  [(display)]="assetScanDialogVisible"\r\n  (onValidate)="onScanAssetBatchNumber($event)"\r\n  [keepDialogOpened]="true"\r\n  *ngIf="assetScanDialogVisible"\r\n></aw-goods-receipt-scan-asset>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/form/goods-receipt-form.component.scss':
      /*!*************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/form/goods-receipt-form.component.scss ***!
  \*************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .alert {\n  display: inline-block;\n  text-transform: none !important;\n  font-weight: 600;\n  width: 8em;\n  text-align: center; }\n  :host .alert.alert--ok {\n    background-color: #4caf50; }\n  :host .alert.alert--warning {\n    background-color: #ffc107; }\n  :host .alert.alert--nok {\n    background-color: #f6685e; }\n  :host .alert.alert--none {\n    background-color: #c8d4d6; }\n  :host .custom-width {\n  width: 50%; }\n  :host .padding-class {\n  padding-left: 0.5em; }\n  :host .label-class {\n  padding-right: 0.5em;\n  display: inline-block;\n  width: 2.5em; }\n  :host .span-label {\n  color: #007ad9; }\n  :host .custom-div {\n  padding-left: 1.2em; }\n  :host .custom-anchor {\n  padding: 0.7em 0; }\n  :host .custom-control {\n  padding-top: 0.4em; }\n  :host ::ng-deep .green .ui-progressbar .ui-progressbar-value {\n  border: 0 none;\n  margin: 0;\n  background: #4caf50 !important; }\n  :host .icon {\n  margin-left: 8px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvZ29vZHMtcmVjZWlwdC9mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxsb2dpc3RpY3NcXGdvb2RzLXJlY2VpcHRcXGZvcm1cXGdvb2RzLXJlY2VpcHQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvZ29vZHMtcmVjZWlwdC9mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFSSxxQkFBcUI7RUFDckIsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7RUFOdEI7SUFTTSx5QkNTZ0IsRUFBQTtFRGxCdEI7SUFhTSx5QkNNVSxFQUFBO0VEbkJoQjtJQWlCTSx5QkNJYyxFQUFBO0VEckJwQjtJQXFCTSx5QkNHUyxFQUFBO0VEeEJmO0VBMEJJLFVBQVUsRUFBQTtFQTFCZDtFQThCSSxtQkFBbUIsRUFBQTtFQTlCdkI7RUFrQ0ksb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7RUFwQ2hCO0VBd0NJLGNBQWMsRUFBQTtFQXhDbEI7RUE0Q0ksbUJBQW1CLEVBQUE7RUE1Q3ZCO0VBZ0RJLGdCQUFnQixFQUFBO0VBaERwQjtFQW9ESSxrQkFBa0IsRUFBQTtFQXBEdEI7RUEwRFEsY0FBYztFQUNkLFNBQVM7RUFDVCw4QkFBb0MsRUFBQTtFQTVENUM7RUFrRUksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL2dvb2RzLXJlY2VpcHQvZm9ybS9nb29kcy1yZWNlaXB0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbjpob3N0IHtcclxuICAuYWxlcnQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB3aWR0aDogOGVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICYuYWxlcnQtLW9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1ub25lIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXkxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS13aWR0aCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLnBhZGRpbmctY2xhc3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcclxuICB9XHJcblxyXG4gIC5sYWJlbC1jbGFzcyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyLjVlbTtcclxuICB9XHJcblxyXG4gIC5zcGFuLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjMDA3YWQ5O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1kaXYge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjJlbTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tYW5jaG9yIHtcclxuICAgIHBhZGRpbmc6IDAuN2VtIDA7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZy10b3A6IDAuNGVtO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5ncmVlbiB7XHJcbiAgICAudWktcHJvZ3Jlc3NiYXIge1xyXG4gICAgICAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgICAgIGJvcmRlcjogMCBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/form/goods-receipt-form.component.ts':
      /*!***********************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/form/goods-receipt-form.component.ts ***!
  \***********************************************************************************/
      /*! exports provided: GoodsReceiptFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'GoodsReceiptFormComponent',
          function() {
            return GoodsReceiptFormComponent;
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
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/constants/bidt-stock-mvt-type-constants */ './src/app/shared/constants/bidt-stock-mvt-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_bire_measure_reference_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/constants/bire-measure-reference-constants */ './src/app/shared/constants/bire-measure-reference-constants.ts'
        );
        /* harmony import */ var _shared_constants_bire_rating_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/constants/bire-rating-constants */ './src/app/shared/constants/bire-rating-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/pipes/extract-translation.pipe */ './src/app/shared/pipes/extract-translation.pipe.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../../shared/utils/bido-family-variant-utils */ './src/app/shared/utils/bido-family-variant-utils.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ../../../../shared/utils/select-item-utils */ './src/app/shared/utils/select-item-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _administration_catalog_catalog_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ../../../administration/catalog/catalog.service */ './src/app/main/administration/catalog/catalog.service.ts'
        );
        /* harmony import */ var _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ../../../overlay/overlay.service */ './src/app/main/overlay/overlay.service.ts'
        );
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _stock_movements_search_search_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ../../stock-movements/search/search.service */ './src/app/main/logistics/stock-movements/search/search.service.ts'
        );
        /* harmony import */ var _goods_receipt_form_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./goods-receipt-form.service */ './src/app/main/logistics/goods-receipt/form/goods-receipt-form.service.ts'
        );
        /* harmony import */ var _status_good_receipt_status_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ./status/good-receipt-status.component */ './src/app/main/logistics/goods-receipt/form/status/good-receipt-status.component.ts'
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

        var GoodsReceiptFormComponent = /** @class */ (function(_super) {
          __extends(GoodsReceiptFormComponent, _super);
          function GoodsReceiptFormComponent(
            favoriteService,
            loaderService,
            messageService,
            pageTocService,
            serializationService,
            tabService,
            translateService,
            sessionService,
            confirmationService,
            logisticService,
            propertiesService,
            catalogService,
            overlayService,
            extractTranslationPipe,
            searchService,
            goodsReceiptFormService
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
            _this.translateService = translateService;
            _this.sessionService = sessionService;
            _this.confirmationService = confirmationService;
            _this.logisticService = logisticService;
            _this.propertiesService = propertiesService;
            _this.catalogService = catalogService;
            _this.overlayService = overlayService;
            _this.extractTranslationPipe = extractTranslationPipe;
            _this.searchService = searchService;
            _this.goodsReceiptFormService = goodsReceiptFormService;
            _this.LOG_TYPE_MAP = 138;
            _this.deliveryFolderStatuses = [];
            _this.shipmentFolderStatuses = [];
            _this.torTypeList = [];
            _this.transfertOrderStatusMap = [];
            // Package Counters
            _this.pExpected = 0;
            _this.pReceived = 0;
            _this.pAccepted = 0;
            _this.pDispute = 0;
            // Item Counters
            _this.iPlanned = 0;
            _this.iProgress = 0;
            _this.iReleased = 0;
            _this.iDispute = 0;
            // Material Counters
            _this.mExpected = 0;
            _this.mOK = 0;
            _this.mDispute = 0;
            _this.component = GoodsReceiptFormComponent_1;
            _this.getAllMaps();
            _this.init();
            return _this;
          }
          GoodsReceiptFormComponent_1 = GoodsReceiptFormComponent;
          GoodsReceiptFormComponent.prototype.getAllMaps = function() {
            var _this = this;
            var deliveryFolderStatuses$ = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__['GenericPropertyConstants']
                .RECEIPT_FOLDER_STATUS_MAP
            );
            var shipmentFolderStatuses$ = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__['GenericPropertyConstants']
                .SHIPMENT_FOLDER_STATUS_MAP
            );
            var packageStatusMap$ = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__['GenericPropertyConstants']
                .PACKAGE_STATUS_MAP
            );
            var documentTypes$ = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__['GenericPropertyConstants']
                .DOC_PARTNER_CATEGORY_MAP
            );
            // status equipment maps
            var opeartionalStatusMap$ = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__['GenericPropertyConstants']
                .OPERATIONAL_STATUS_MAP
            );
            var batchStatusMap$ = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__['GenericPropertyConstants']
                .BATCH_EQUIPMENT_STATUS_MAP
            );
            var transferOrderStatusMap$ = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__['GenericPropertyConstants']
                .TRANSFER_FOLDER_STATUS_MAP
            );
            this.torTypeList = [];
            this.goodsReceiptFormService.fetchTrasnfertOrderTypeList().subscribe(function(results) {
              _this.torTypeList = results;
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])([
              deliveryFolderStatuses$,
              shipmentFolderStatuses$,
              packageStatusMap$,
              documentTypes$,
              opeartionalStatusMap$,
              batchStatusMap$,
              transferOrderStatusMap$
            ]).subscribe({
              next: function(_a) {
                var _b = __read(_a, 7),
                  deliveryFolderStatuses = _b[0],
                  shipmentFolderStatuses = _b[1],
                  packageStatusMap = _b[2],
                  documentTypes = _b[3],
                  opeartionalStatusMap = _b[4],
                  batchStatusMap = _b[5],
                  transferOrderStatusMap = _b[6];
                _this.deliveryFolderStatuses = deliveryFolderStatuses;
                _this.shipmentFolderStatuses = shipmentFolderStatuses;
                _this.packageStatusMap = packageStatusMap;
                _this.documentTypes = !!documentTypes
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_27__['SelectItemUtils'].fromLabelValues(
                      documentTypes
                    )
                  : [];
                _this.opeartionalStatusMap = !!opeartionalStatusMap
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_27__['SelectItemUtils'].fromLabelValues(
                      opeartionalStatusMap
                    )
                  : [];
                _this.opeartionalStatusMap = _this.opeartionalStatusMap.concat(
                  !!batchStatusMap
                    ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_27__['SelectItemUtils'].fromLabelValues(
                        batchStatusMap
                      )
                    : []
                );
                _this.transfertOrderStatusMap = transferOrderStatusMap;
              }
            });
          };
          GoodsReceiptFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
              .LOG_GOODS_RECEIPT_FORM;
          };
          GoodsReceiptFormComponent.prototype.ngOnInit = function() {
            var _this = this;
            _super.prototype.ngOnInit.call(this);
            this.awPropertiesConstants =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants'];
            if (this.componentData.objectId) {
              this.deliveryFolderId = this.serializationService.deserialize(this.componentData.objectId);
              this.logisticService
                .findReceiptFolderWithAllObjectsById(this.deliveryFolderId)
                .subscribe(function(deliveryFolder) {
                  _this.deliveryFolder = deliveryFolder;
                  _this.findNextMvtReceiptFolder();
                  if (_this.deliveryFolder.externalDeliveryNumber) {
                    var searchCriteria = {
                      folderStatusExcluded: [],
                      deliveryFolder: {
                        dfCode: _this.deliveryFolder.externalDeliveryNumber
                      }
                    };
                    _this.logisticService
                      .findDeliveryFoldersByCriteria(searchCriteria)
                      .subscribe(function(deliveryFolderList) {
                        _this.shipmentFolderLinked = deliveryFolderList[0];
                        _this.shipmentFolderLinkedType = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_28__[
                          'StringUtils'
                        ].orEmpty(
                          _this.extractTranslationPipe.transform(_this.shipmentFolderLinked.bidtDfType.dftDesignation)
                        );
                      });
                  }
                  _this.goodsReceiptFormService
                    .findDocumentByDeliveryFolderId(deliveryFolder.id)
                    .subscribe(function(documentDtolist) {
                      _this.deliveryFolder.bidtDocuments = documentDtolist;
                      _this.documentTableDataSource.setData(
                        _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__['ListUtils'].orEmpty(
                          _this.deliveryFolder.bidtDocuments
                        )
                      );
                    });
                  var logTypes = _this.catalogService.fetchPropertyValuesTableData(_this.LOG_TYPE_MAP);
                  var pnTypes = _this.propertiesService.getValue(
                    _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__[
                      'GenericPropertyConstants'
                    ].PN_TYPE_MAP
                  );
                  var packageTypes = _this.propertiesService.getValue(
                    _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__[
                      'GenericPropertyConstants'
                    ].PACKAGE_TYPE_MAP
                  );
                  Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])({
                    logTypes: logTypes,
                    pnTypes: pnTypes,
                    packageTypes: packageTypes
                  }).subscribe({
                    next: function(results) {
                      _this.pnTypeList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__['ListUtils'].orEmpty(
                        results.pnTypes
                      );
                      _this.catalogPropertiesTableDTO = results.logTypes;
                      _this.packageTypeList = results.packageTypes;
                      _this.loadTableData();
                    }
                  });
                });
            }
          };
          GoodsReceiptFormComponent.prototype.findNextMvtReceiptFolder = function() {
            var _this = this;
            this.goodsReceiptFormService.findNextMvtReceiptFolder(this.deliveryFolder).subscribe(function(result) {
              _this.nextMvtList = result.bidtStockMvtDtoList;
              _this.isNextMvtContainStockPilling = result.containMvtStockPilling;
              _this.isNextMvtContainCrossDocking = result.containMvtCrossDocking;
            });
          };
          GoodsReceiptFormComponent.prototype.init = function() {
            this.deliveryFolder = {};
            this.parcelColsDynamicNumber = 0;
            this.postsColsDynamicNumber = 0;
            this.materialsColsDynamicNumber = 0;
            this.deleteDocument = [];
            this.isNextMvtContainStockPilling = false;
            this.isNextMvtContainCrossDocking = false;
            this.assetScanDialogVisible = false;
            this.packageList = [];
            this.itemsList = [];
            this.selectedPost = [];
            this.selectedParcels = [];
            this.postsTableData = [];
            this.parcelTableData = [];
            this.selectedMaterials = [];
            this.materialTableData = [];
            this.loadTableColumns();
            this.documentTableDataSource.setData([]);
          };
          ///////////////////////////////////////////////////////////////////////////////
          /********************************
           * Load Table Columns
           ********************************/
          GoodsReceiptFormComponent.prototype.loadTableColumns = function() {
            this.parcelTableCols = [
              { field: 'packageNum', alignment: 'left', isDynamic: false, width: '10%' },
              { field: 'packageType', alignment: 'left', isDynamic: false, width: '10%' },
              { field: 'status', alignment: 'left', isDynamic: false, width: '10%' }
            ];
            this.postsTableCols = [
              { field: 'dfiCode', alignment: 'left', isDynamic: false, width: '10%' },
              { field: 'refeArticle', alignment: 'left', isDynamic: false },
              { field: 'quantity', alignment: 'left', isDynamic: false, width: '5%' },
              { field: 'unit', alignment: 'left', isDynamic: false, width: '5%' },
              { field: 'dfiStatus', alignment: 'left', isDynamic: false, width: '10%' },
              { field: 'packageNumber', alignment: 'left', isDynamic: false, width: '10%' },
              { field: 'litigate', alignment: 'left', isDynamic: false, width: '10%' }
            ];
            this.materialTableCols = [
              { field: 'dfiCode', alignment: 'left', isDynamic: false, width: '5%' },
              { field: 'refeArticle', alignment: 'left', isDynamic: false, width: '20%' },
              { field: 'batchNumber', alignment: 'left', isDynamic: false, width: '10%' },
              { field: 'sn', alignment: 'left', isDynamic: false, width: '10%' },
              { field: 'manufacturingBatch', alignment: 'left', isDynamic: false, width: '10%' },
              { field: 'expirationDate', alignment: 'left', isDynamic: false, width: '10%' },
              { field: 'qty', alignment: 'left', isDynamic: false, width: '5%' },
              { field: 'unit', alignment: 'left', isDynamic: false, width: '5%' },
              { field: 'packageNum', alignment: 'left', isDynamic: false, width: '10%' }
            ];
            this.documentTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                { field: 'documentName', translateKey: this.getTranslateKey('name'), width: '90%' },
                { field: 'documentPublicationDate', translateKey: this.getTranslateKey('dateAdded'), width: '10%' }
              ],
              data: []
            });
          };
          GoodsReceiptFormComponent.prototype.refresh = function() {
            var _this = this;
            this.parcelColsDynamicNumber = 0;
            this.postsColsDynamicNumber = 0;
            this.materialsColsDynamicNumber = 0;
            this.deleteDocument = [];
            this.documentTableDataSource.setData([]);
            this.deliveryFolder = {};
            this.packageList = [];
            this.packageList = [];
            this.itemsList = [];
            this.parcelTableData = [];
            this.parcelTableCols = [];
            this.postsTableData = [];
            this.postsTableCols = [];
            this.materialTableData = [];
            this.materialTableCols = [];
            this.selectedPost = [];
            this.postsTableData = [];
            this.loadTableColumns();
            this.isLoading = true;
            this.logisticService
              .findReceiptFolderWithAllObjectsById(this.deliveryFolderId)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                  _this.isLoading = false;
                })
              )
              .subscribe(function(deliveryFolder) {
                _this.deliveryFolder = deliveryFolder;
                _this.findNextMvtReceiptFolder();
                _this.goodsReceiptFormService
                  .findDocumentByDeliveryFolderId(deliveryFolder.id)
                  .subscribe(function(documentDtolist) {
                    _this.deliveryFolder.bidtDocuments = documentDtolist;
                    _this.documentTableDataSource.setData(
                      _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__['ListUtils'].orEmpty(
                        _this.deliveryFolder.bidtDocuments
                      )
                    );
                    _this.loadTableData();
                  });
              });
          };
          /********************************
           * Load Table Date
           ********************************/
          GoodsReceiptFormComponent.prototype.loadTableData = function() {
            // Fetch Package Table Data
            this.renderPackageTableData();
            // Fetch Items Table Data
            this.renderItemsTableData();
            this.sortTables();
          };
          GoodsReceiptFormComponent.prototype.sortTables = function() {
            this.sortPackages();
            this.sortItems();
            this.sortMaterials();
          };
          GoodsReceiptFormComponent.prototype.sortPackages = function() {
            if (this.parcelTableData && this.parcelTableData.length > 0) {
              this.parcelTableData.sort(function(a, b) {
                return a.packageCode.localeCompare(b.packageCode);
              });
            }
          };
          GoodsReceiptFormComponent.prototype.sortItems = function() {
            if (this.postsTableData && this.postsTableData.length > 0) {
              this.postsTableData.sort(function(a, b) {
                return Number(a.dfiCode) - Number(b.dfiCode);
              });
            }
          };
          GoodsReceiptFormComponent.prototype.sortMaterials = function() {
            if (this.materialTableData && this.materialTableData.length > 0) {
              this.materialTableData.sort(function(a, b) {
                if (a.dfiCode.localeCompare(b.dfiCode) === 0 && a.bidoEquipment && b.bidoEquipment) {
                  if (a.bidoEquipment.sn && b.bidoEquipment.sn) {
                    return a.bidoEquipment.sn.localeCompare(b.bidoEquipment.sn);
                  } else {
                    return a.bidoEquipment.batchNumber.localeCompare(b.bidoEquipment.batchNumber);
                  }
                } else {
                  return Number(a.dfiCode) - Number(b.dfiCode);
                }
              });
            }
          };
          GoodsReceiptFormComponent.prototype.getPackageStatus = function(key) {
            return this.packageStatusMap.filter(function(status) {
              return status.value === key;
            })[0].label;
          };
          GoodsReceiptFormComponent.prototype.getItemStatus = function(key) {
            return this.deliveryFolderStatuses.filter(function(status) {
              return status.value === key;
            })[0].label;
          };
          GoodsReceiptFormComponent.prototype.getOperationnalStatus = function(key) {
            return this.opeartionalStatusMap.filter(function(status) {
              return status.value === key;
            })[0].label;
          };
          GoodsReceiptFormComponent.prototype.getPackageType = function(key) {
            return this.packageTypeList.filter(function(type) {
              return type.value === key;
            })[0].label;
          };
          /********************************
           * Fetch Package Table data
           ********************************/
          GoodsReceiptFormComponent.prototype.renderPackageTableData = function() {
            var _this = this;
            var operationsList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__['ListUtils']
              .orEmpty(this.deliveryFolder.bidtDfItems)
              .filter(function(item) {
                return !!item.bidtPackage && !!item.bidtPackage.bidtPackageOperations;
              })
              .map(function(item) {
                return item.bidtPackage.bidtPackageOperations;
              })
              .reduce(function(acc, val) {
                return acc.concat(val);
              }, []);
            var input = {
              operations: operationsList,
              bidtDfTypeDTOId: this.deliveryFolder.bidtDfType.id
            };
            this.goodsReceiptFormService.getBidtDfTypeOperationsByDfType(input).subscribe(function(operationsResult) {
              var operations = operationsResult.map(function(operation) {
                var operationList = _this.catalogPropertiesTableDTO.filter(function(ope) {
                  return ope.propertiesKey === operation.packopeDesignation;
                });
                var tableColumn = {
                  field: '' + operation.packopeDesignation,
                  alignment: 'center',
                  value:
                    _this.translateService.currentLang.toUpperCase() ===
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                      .PROPERTY_EN
                      ? operationList[0].enPropertiesValue
                      : operationList[0].frPropertiesValue,
                  isDynamic: true,
                  sequenceCode: Number(operation.packopeCode),
                  width: '7%'
                };
                _this.parcelColsDynamicNumber++;
                return tableColumn;
              });
              operations.sort(function(a, b) {
                return a.sequenceCode - b.sequenceCode;
              });
              _this.parcelTableCols = _this.parcelTableCols.concat(operations);
              _this.parcelTableCols = __spread(_this.parcelTableCols, [
                { field: 'progress', alignment: 'center', isDynamic: false, width: '10%' }
              ]);
              _this.parcelTableCols = _this.parcelTableCols.reduce(function(unique, column) {
                return unique.every(function(elt) {
                  return elt.field !== column.field;
                })
                  ? __spread(unique, [column])
                  : unique;
              }, []);
              if (
                _this.deliveryFolder.bidtDfItems &&
                _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__['ListUtils'].orEmpty(
                  _this.deliveryFolder.bidtDfItems
                )
              ) {
                var packageAllreadyAdded_1 = [];
                _this.deliveryFolder.bidtDfItems.forEach(function(items) {
                  if (
                    !!items.bidtPackage &&
                    !!items.bidtPackage.id &&
                    !packageAllreadyAdded_1.includes(items.bidtPackage.id)
                  ) {
                    packageAllreadyAdded_1.push(items.bidtPackage.id);
                    var bidtPackage_1 = items.bidtPackage;
                    var operationRowList = operationsResult.filter(function(opeDTO) {
                      return opeDTO.bidtPackageId === bidtPackage_1.id;
                    });
                    var operationQuality = _this.getPackageOperation(
                      operationRowList,
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                        .LOGISTICAL_OPERATION_QUALITY_CONTROL
                    );
                    var operationReceived = _this.getPackageOperation(
                      operationRowList,
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                        .LOGISTICAL_OPERATION_PHYSICAL_RECEIPT
                    );
                    var operationPackaging = _this.getPackageOperation(
                      operationRowList,
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                        .LOGISTICAL_OPERATION_PACKAGING_CONTROL
                    );
                    var packageData = {
                      id: bidtPackage_1.id,
                      isDisable: _this.isItemOnGoingOrPerformed(items),
                      packageCode: bidtPackage_1.externalPackageCode
                        ? bidtPackage_1.externalPackageCode
                        : bidtPackage_1.packageCode,
                      packageStatus: _this.getPackageStatus(bidtPackage_1.packageStatus),
                      isGoodStatus: _this.isGoodPackageStatus(bidtPackage_1.packageStatus),
                      packageType: bidtPackage_1.packageType
                        ? _this.getPackageType(bidtPackage_1.packageType)
                        : undefined,
                      bidtPackageOperations: operationRowList,
                      quality: !!operationQuality
                        ? _this.isStatusPerformed(operationQuality.packopeStatus)
                          ? true
                          : false
                        : undefined,
                      packagingCtrl: !!operationPackaging
                        ? _this.isStatusPerformed(operationPackaging.packopeStatus)
                          ? true
                          : false
                        : undefined,
                      progress: 0,
                      received: !!operationReceived
                        ? _this.isStatusPerformed(operationReceived.packopeStatus)
                          ? true
                          : false
                        : undefined
                    };
                    packageData.progress = _this.calculateProgress([
                      packageData.packagingCtrl,
                      packageData.received,
                      packageData.quality
                    ]);
                    _this.parcelTableData.push(packageData);
                    _this.packageList.push(bidtPackage_1);
                  }
                });
                _this.parcelTableData = _this.parcelTableData.reduce(function(unique, bidtPackage) {
                  return unique.every(function(elt) {
                    return elt.packageCode !== bidtPackage.packageCode;
                  })
                    ? __spread(unique, [bidtPackage])
                    : unique;
                }, []);
                _this.packageList = _this.packageList.reduce(function(unique, bidtPackage) {
                  return unique.every(function(elt) {
                    return elt.packageCode !== bidtPackage.packageCode;
                  })
                    ? __spread(unique, [bidtPackage])
                    : unique;
                }, []);
                _this.sortPackages();
              }
            });
          };
          GoodsReceiptFormComponent.prototype.isItemOnGoingOrPerformed = function(item) {
            if (item.bidtDfItemOperations && item.bidtDfItemOperations.length > 0) {
              return (
                item.dfiStatus ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                    .RECEIPT_FOLDER_STATUS_ON_GOING ||
                item.dfiStatus ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                    .RECEIPT_FOLDER_STATUS_PERFORMED
              );
            } else {
              return this.isOneMaterialOperationPerformed(item);
            }
          };
          GoodsReceiptFormComponent.prototype.getPackageOperation = function(bidtPackageOperationDTOList, colField) {
            var bidtPackageOperation = bidtPackageOperationDTOList.filter(function(operation) {
              return operation.packopeDesignation === colField;
            });
            if (bidtPackageOperation.length > 0) {
              return bidtPackageOperation[0];
            } else {
              return undefined;
            }
          };
          GoodsReceiptFormComponent.prototype.isStatusPerformed = function(key) {
            if (
              key ===
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                .LOGISTICAL_OPERATION_STATUS_PERFORMED
            ) {
              return true;
            } else {
              return false;
            }
          };
          GoodsReceiptFormComponent.prototype.isGoodPackageStatus = function(key) {
            return (
              key !==
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                .PACKAGE_STATUS_AWAITING
            );
          };
          /********************************
           * Fetch Items Table data
           ********************************/
          GoodsReceiptFormComponent.prototype.renderItemsTableData = function() {
            var _this = this;
            var operations = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__['ListUtils']
              .orEmpty(this.deliveryFolder.bidtDfItems)
              .filter(function(item) {
                return !!item.bidtDfItemOperations;
              })
              .map(function(item) {
                return item.bidtDfItemOperations;
              })
              .reduce(function(acc, val) {
                return acc.concat(val);
              }, [])
              .map(function(operation) {
                var operationList = _this.catalogPropertiesTableDTO.filter(function(ope) {
                  return ope.propertiesKey === operation.dfioDesignation;
                });
                var tableColumn = {
                  field: '' + operation.dfioDesignation,
                  alignment: 'center',
                  value:
                    _this.translateService.currentLang.toUpperCase() ===
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                      .PROPERTY_EN
                      ? operationList[0].enPropertiesValue
                      : operationList[0].frPropertiesValue,
                  isDynamic: true,
                  sequenceCode: Number(operation.dfioCode),
                  width: '10%'
                };
                _this.postsColsDynamicNumber++;
                return tableColumn;
              });
            operations.sort(function(a, b) {
              return a.sequenceCode - b.sequenceCode;
            });
            this.postsTableCols = this.postsTableCols.concat(operations);
            this.postsTableCols = __spread(this.postsTableCols, [
              { field: 'progress', alignment: 'center', isDynamic: false, width: '10%' }
            ]);
            this.postsTableCols = this.postsTableCols.reduce(function(unique, column) {
              return unique.every(function(elt) {
                return elt.field !== column.field;
              })
                ? __spread(unique, [column])
                : unique;
            }, []);
            this.postsTableData = [];
            this.materialTableData = [];
            if (
              !!this.deliveryFolder &&
              !!this.deliveryFolder.bidtDfItems &&
              this.deliveryFolder.bidtDfItems.length > 0
            ) {
              var cloneItemList = __spread(this.deliveryFolder.bidtDfItems);
              cloneItemList.sort(function(a, b) {
                if (!!a.dfiCode && !!b.dfiCode) {
                  return parseInt(a.dfiCode, 10) - parseInt(b.dfiCode, 10);
                }
                return -1;
              });
              this.itemsList = [];
              cloneItemList.forEach(function(item, index) {
                var _a;
                var i = index;
                _this.itemsList.push(item);
                var operationQuality = _this.getItemOperation(
                  item.bidtDfItemOperations,
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                    .LOGISTICAL_OPERATION_QUALITY_CONTROL
                );
                var disable = _this.isOneMaterialOperationPerformed(item);
                var hide = false;
                if (item.bidtPackage) {
                  hide = true;
                  if (
                    item.bidtPackage.packageStatus ===
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                      .PACKAGE_STATUS_DELIVERED
                  ) {
                    hide = false;
                  }
                }
                var postData = {
                  item: i++,
                  id: item.id,
                  bidtDeliveryFolder: item.bidtDeliveryFolder,
                  articleDesignation: !!item.birePn ? item.birePn.articleDesignation : undefined,
                  birePnPnCode: item.birePnPnCode,
                  bidtDfItemOperations: item.bidtDfItemOperations,
                  quantity: item.quantity,
                  unit: item.birePn ? item.birePn.quantityUnit : undefined,
                  dfiCode: item.dfiCode,
                  isHide: hide,
                  isDisable: disable,
                  dfiStatus: _this.getItemStatus(item.dfiStatus),
                  packageNumber: !!item.bidtPackage
                    ? item.bidtPackage.externalPackageCode
                      ? item.bidtPackage.externalPackageCode
                      : item.bidtPackage.packageCode
                    : undefined,
                  progress: 0,
                  controlQuantity: !!operationQuality
                    ? _this.isStatusPerformed(operationQuality.dfioStatus)
                      ? true
                      : false
                    : undefined
                };
                postData.progress = _this.calculateProgresssItem(item);
                _this.postsTableData.push(postData);
                _this.sortItems();
                if (!!item.bidtStockMvts && item.bidtStockMvts.length > 0) {
                  (_a = _this.materialTableData).push.apply(_a, __spread(_this.renderMaterialsTableData(item)));
                }
              });
              this.materialTableData.forEach(function(material) {
                if (material.item && material.item.birePn && material.sn) {
                  var equipmentInput = {
                    sn: material.sn,
                    pnCode: material.item.birePn.pnCode
                  };
                  _this.goodsReceiptFormService
                    .findBidoEquipmentsByPnAndSn(equipmentInput)
                    .subscribe(function(equipment) {
                      material.bidoEquipment = equipment[0];
                      if (equipment[0] && equipment[0].operationalStatus) {
                        material.equipmentStatus = _this.getOperationnalStatus(equipment[0].operationalStatus);
                      }
                      _this.sortMaterials();
                    });
                } else if (material.item && material.item.birePn && material._obj.stockMvtBatchNumber) {
                  var equipmentInput = {
                    batchNumber: material._obj.stockMvtBatchNumber,
                    pnCode: material.item.birePn.pnCode
                  };
                  _this.goodsReceiptFormService
                    .findBidoEquipmentByPnAndBatchNumber(equipmentInput)
                    .subscribe(function(equipment) {
                      material.bidoEquipment = equipment;
                      if (equipment && equipment.equipmentCode) {
                        _this.logisticService
                          .findBidoEquipmentCounter({
                            equipmentCode: equipment.equipmentCode,
                            counterCode:
                              _shared_constants_bire_measure_reference_constants__WEBPACK_IMPORTED_MODULE_9__[
                                'BireMeasureReferenceConstants'
                              ].BIRE_MEASURE_REFERENCE_COUNTER_CODE_CALENDAR_LIMIT,
                            familyCode: _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_24__[
                              'BidoFamilyVariantUtils'
                            ].getFamilyCodeFromFamilyVariantCode(equipment.familyVariantCode),
                            ratingCode:
                              _shared_constants_bire_rating_constants__WEBPACK_IMPORTED_MODULE_10__[
                                'BireRatingConstants'
                              ].DEFAULT
                          })
                          .subscribe(function(bidoEquipmentCounter) {
                            if (bidoEquipmentCounter) {
                              material.expirationDate = bidoEquipmentCounter.dateLimit;
                            }
                          });
                      }
                      if (
                        material.item.birePn.traceability ===
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                          .PN_TRACEABILITY_BY_BATCH
                      ) {
                        _this.goodsReceiptFormService
                          .getManufacturingBatchByEquipment(equipment)
                          .subscribe(function(manufacturingBatch) {
                            material.manufacturingBatch = manufacturingBatch;
                          });
                      }
                      if (equipment.operationalStatus) {
                        material.equipmentStatus = _this.getOperationnalStatus(equipment.operationalStatus);
                      }
                    });
                  _this.sortMaterials();
                }
                if (material._operations.length > 0) {
                  var operationsList = material._operations.map(function(operation) {
                    return operation.bidtStockMvtOperationDTO;
                  });
                  _this.goodsReceiptFormService
                    .getOperationCategories(operationsList)
                    .subscribe(function(dfOperationsList) {
                      if (dfOperationsList.dfTypeOperationList && dfOperationsList.dfTypeOperationList.length > 0) {
                        dfOperationsList.dfTypeOperationList.forEach(function(dfOperation) {
                          material._operations.filter(function(ope) {
                            return (
                              !!ope.bidtStockMvtOperationDTO &&
                              ope.bidtStockMvtOperationDTO.bidtDfTypeOperationId === dfOperation.id
                            );
                          })[0].bidtDfTypeOperation = dfOperation;
                        });
                      }
                    });
                }
              });
            }
          };
          GoodsReceiptFormComponent.prototype.getItemOperation = function(bidtPackageOperationDTOList, colField) {
            var bidtDfItemOperation = bidtPackageOperationDTOList.filter(function(operation) {
              return operation.dfioDesignation === colField;
            });
            if (bidtDfItemOperation.length > 0) {
              return bidtDfItemOperation[0];
            } else {
              return undefined;
            }
          };
          GoodsReceiptFormComponent.prototype.isOneMaterialOperationPerformed = function(item) {
            var state = false;
            if (item.bidtStockMvts && item.bidtStockMvts.length > 0) {
              item.bidtStockMvts
                .filter(function(stock) {
                  return !!stock.bidtStockMvtOperations && stock.bidtStockMvtOperations.length > 0;
                })
                .forEach(function(stockWithOperation) {
                  stockWithOperation.bidtStockMvtOperations.forEach(function(operation) {
                    if (
                      operation.smoStatus ===
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                        .LOGISTICAL_OPERATION_STATUS_PERFORMED
                    ) {
                      state = true;
                    }
                  });
                });
            }
            return state;
          };
          /********************************
           * Fetch Material Table data
           ********************************/
          GoodsReceiptFormComponent.prototype.renderMaterialsTableData = function(rowData) {
            var _this = this;
            var operations = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__['ListUtils']
              .orEmpty(rowData.bidtStockMvts)
              .filter(function(material) {
                return !!material.bidtStockMvtOperations;
              })
              .map(function(material) {
                return material.bidtStockMvtOperations;
              })
              .reduce(function(acc, val) {
                return acc.concat(val);
              }, [])
              .map(function(operation) {
                var operationList = _this.catalogPropertiesTableDTO.filter(function(ope) {
                  return ope.propertiesKey === operation.smoDesignation;
                });
                var tableColumn = {
                  field: '' + operation.smoDesignation,
                  alignment: 'center',
                  value:
                    _this.translateService.currentLang.toUpperCase() ===
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                      .PROPERTY_EN
                      ? operationList[0].enPropertiesValue
                      : operationList[0].frPropertiesValue,
                  isDynamic: true,
                  sequenceCode: Number(operation.smoCode),
                  width: '10%'
                };
                _this.materialsColsDynamicNumber++;
                return tableColumn;
              });
            operations.sort(function(a, b) {
              return a.sequenceCode - b.sequenceCode;
            });
            this.materialTableCols = this.materialTableCols.concat(operations);
            this.materialTableCols = __spread(this.materialTableCols, [
              { field: 'progress', alignment: 'center', isDynamic: false, width: '7%' }
            ]);
            this.materialTableCols = this.materialTableCols.reduce(function(unique, column) {
              return unique.every(function(elt) {
                return elt.field !== column.field;
              })
                ? __spread(unique, [column])
                : unique;
            }, []);
            var materialList = [];
            if (!!rowData.bidtStockMvts && rowData.bidtStockMvts.length > 0) {
              rowData.bidtStockMvts.forEach(function(material) {
                var operationsDatas = [];
                var operationDocumentary = _this.getMaterialOperation(
                  material.bidtStockMvtOperations,
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                    .LOGISTICAL_OPERATION_DOCUMENT_CONTROL
                );
                if (operationDocumentary) {
                  operationsDatas.push(operationDocumentary);
                }
                var operationVisual = _this.getMaterialOperation(
                  material.bidtStockMvtOperations,
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                    .LOGISTICAL_OPERATION_VISUAL_CONTROL
                );
                if (operationVisual) {
                  operationsDatas.push(operationVisual);
                }
                var operationPhysical = _this.getMaterialOperation(
                  material.bidtStockMvtOperations,
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                    .LOGISTICAL_OPERATION_PHYSICAL_RECEIPT
                );
                if (operationPhysical) {
                  operationsDatas.push(operationPhysical);
                }
                var disable = false;
                if (material.bidtStockMvtOperations && material.bidtStockMvtOperations.length > 0) {
                  if (rowData.bidtDfItemOperations && rowData.bidtDfItemOperations.length > 0) {
                    disable = _this.isItemOperationNotPerformed(rowData);
                  } else if (rowData.bidtPackage) {
                    disable = true;
                    if (
                      rowData.bidtPackage.packageStatus ===
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                        .PACKAGE_STATUS_DELIVERED
                    ) {
                      disable = false;
                    }
                  }
                }
                var materialCustom = {
                  _obj: material,
                  _operations: operationsDatas,
                  _operationDocumentary: operationDocumentary,
                  _operationVisual: operationVisual,
                  _operationPhysical: operationPhysical,
                  item: rowData,
                  isDisable: disable,
                  pnCode: rowData.birePn ? rowData.birePn.pnCode : undefined,
                  pnDesignation: rowData.birePn ? rowData.birePn.articleDesignation : undefined,
                  sn: material.stockMvtSn ? material.stockMvtSn : undefined,
                  batchNumber: material.stockMvtBatchNumber ? material.stockMvtBatchNumber : undefined,
                  unit: rowData.birePn ? rowData.birePn.quantityUnit : undefined,
                  quantity: material.stockMvtQuantity,
                  packageNum: rowData.bidtPackage
                    ? rowData.bidtPackage.externalPackageCode
                      ? rowData.bidtPackage.externalPackageCode
                      : rowData.bidtPackage.packageCode
                    : undefined,
                  bidtpackageStatus: rowData.bidtPackage
                    ? _this.getPackageStatus(rowData.bidtPackage.packageStatus)
                    : undefined,
                  dfiCode: rowData.dfiCode,
                  isContener: rowData.bidtPackage ? true : false,
                  documentary:
                    !!operationDocumentary && operationDocumentary.bidtStockMvtOperationDTO
                      ? _this.isStatusPerformed(operationDocumentary.bidtStockMvtOperationDTO.smoStatus)
                        ? true
                        : false
                      : undefined,
                  visual:
                    !!operationVisual && operationVisual.bidtStockMvtOperationDTO
                      ? _this.isStatusPerformed(operationVisual.bidtStockMvtOperationDTO.smoStatus)
                        ? true
                        : false
                      : undefined,
                  physical:
                    !!operationPhysical && operationPhysical.bidtStockMvtOperationDTO
                      ? _this.isStatusPerformed(operationPhysical.bidtStockMvtOperationDTO.smoStatus)
                        ? true
                        : false
                      : undefined
                };
                materialCustom.progress = _this.calculateProgress([
                  materialCustom.documentary,
                  materialCustom.visual,
                  materialCustom.physical
                ]);
                materialList.push(materialCustom);
              });
            }
            return materialList;
          };
          GoodsReceiptFormComponent.prototype.isItemOperationNotPerformed = function(item) {
            var count = 0;
            item.bidtDfItemOperations.forEach(function(itemOperation) {
              if (
                itemOperation.dfioStatus ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .LOGISTICAL_OPERATION_STATUS_PERFORMED
              ) {
                count++;
              }
            });
            return item.bidtDfItemOperations.length === count ? false : true;
          };
          GoodsReceiptFormComponent.prototype.getMaterialOperation = function(bidtPackageOperationDTOList, colField) {
            var bidtStockMvtOperation = bidtPackageOperationDTOList.filter(function(operation) {
              return operation.smoDesignation === colField;
            });
            if (bidtStockMvtOperation.length > 0) {
              var operationRowData = {
                bidtStockMvtOperationDTO: bidtStockMvtOperation[0]
              };
              return operationRowData;
            } else {
              return undefined;
            }
          };
          GoodsReceiptFormComponent.prototype.calculateProgress = function(boolList) {
            var maxProgress = 100;
            var specificCase = 3;
            var numberCol = 0;
            boolList.forEach(function(bool) {
              if (bool !== undefined) {
                numberCol++;
              }
            });
            var progressForOneOpe = Math.floor(maxProgress / numberCol);
            var count = numberCol === specificCase ? 1 : 0;
            boolList.forEach(function(bool) {
              if (bool) {
                count = count + progressForOneOpe;
              }
            });
            return count;
          };
          GoodsReceiptFormComponent.prototype.calculateProgresssItem = function(item) {
            var waitingQuantity = Number(item.quantity);
            var receiptQuantity = 0;
            var multiplier = 100;
            if (item.bidtStockMvts && item.bidtStockMvts.length > 0) {
              item.bidtStockMvts
                .filter(function(stockMvt) {
                  return !!stockMvt.bidtStockMvtOperations && stockMvt.bidtStockMvtOperations.length > 0;
                })
                .forEach(function(stockMvt) {
                  var nbOperation = stockMvt.bidtStockMvtOperations.length;
                  var nbOperationDone = 0;
                  stockMvt.bidtStockMvtOperations.forEach(function(operation) {
                    if (
                      operation.smoStatus ===
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                        .LOGISTICAL_OPERATION_STATUS_PERFORMED
                    ) {
                      nbOperationDone++;
                    }
                  });
                  if (nbOperation === nbOperationDone) {
                    receiptQuantity = receiptQuantity + Number(stockMvt.stockMvtQuantity);
                  }
                });
            }
            return Math.floor((receiptQuantity / waitingQuantity) * multiplier);
          };
          /********************************
           * Validate Operations
           ********************************/
          GoodsReceiptFormComponent.prototype.validateOperations = function() {
            var _this = this;
            var partialMessageKey = this.getTranslateKey('validateParcel');
            this.confirmationService.confirm({
              messageKey: partialMessageKey,
              accept: function() {
                var imputList = [];
                _this.selectedParcels.forEach(function(packageCustom) {
                  packageCustom.bidtPackageOperations.forEach(function(operation) {
                    var updatepackageInput = {
                      operationId: Number(operation.id),
                      bidtDeliveryFolderDto: _this.deliveryFolder,
                      newStatus:
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                          .LOGISTICAL_OPERATION_STATUS_PERFORMED
                    };
                    imputList.push(updatepackageInput);
                  });
                });
                _this.performPackageOperations(imputList);
              }
            });
          };
          /********************************
           * Open Selected Posts
           ********************************/
          GoodsReceiptFormComponent.prototype.openLitigationDialog = function() {
            this.showLitigation = true;
          };
          /********************************
           * Is Object Empty
           ********************************/
          GoodsReceiptFormComponent.prototype.isEmpty = function(obj) {
            return !!obj && Object.keys(obj).length > 0 ? Object.keys(obj).length : 0;
          };
          GoodsReceiptFormComponent.prototype.onChangeReceivedAndCompliance = function(rowData, colField) {
            var operationCheck = this.getPackageOperation(rowData.bidtPackageOperations, colField);
            if (operationCheck) {
              if (this.isStatusPerformed(operationCheck.packopeStatus)) {
                operationCheck.packopeStatus =
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__[
                    'AWPropertiesConstants'
                  ].LOGISTICAL_OPERATION_STATUS_PLANNED;
              } else {
                operationCheck.packopeStatus =
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__[
                    'AWPropertiesConstants'
                  ].LOGISTICAL_OPERATION_STATUS_PERFORMED;
              }
              var updatepackageInput = {
                operationId: Number(operationCheck.id),
                bidtDeliveryFolderDto: this.deliveryFolder,
                newStatus: operationCheck.packopeStatus
              };
              this.performPackageOperations([updatepackageInput]);
            }
          };
          /**********************************************
           * Operation on Package
           **********************************************/
          GoodsReceiptFormComponent.prototype.performPackageOperations = function(operationCheckList) {
            var _this = this;
            this.logisticService.performPackageOperations(operationCheckList).subscribe(function(res) {
              _this.selectedParcels = [];
              _this.refresh();
            });
          };
          GoodsReceiptFormComponent.prototype.onChangeItemControl = function(rowData, colField) {
            var operationCheck = this.getItemOperation(rowData.bidtDfItemOperations, colField);
            if (operationCheck) {
              if (this.isStatusPerformed(operationCheck.dfioStatus)) {
                operationCheck.dfioStatus =
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__[
                    'AWPropertiesConstants'
                  ].LOGISTICAL_OPERATION_STATUS_PLANNED;
              } else {
                operationCheck.dfioStatus =
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__[
                    'AWPropertiesConstants'
                  ].LOGISTICAL_OPERATION_STATUS_PERFORMED;
              }
              var updateBidtDfItemOperationInput = {
                operationId: operationCheck.id,
                newStatus: operationCheck.dfioStatus
              };
              this.performItemOperations([updateBidtDfItemOperationInput]);
            }
          };
          /**********************************************
           * Operation on Item
           **********************************************/
          GoodsReceiptFormComponent.prototype.performItemOperations = function(res) {
            var _this = this;
            this.logisticService.performItemOperations(res).subscribe(function(result) {
              _this.selectedPost = [];
              _this.refresh();
            });
          };
          GoodsReceiptFormComponent.prototype.onChangeMaterialControl = function(rowData, colField) {
            var operationCheck = this.getMaterialOperation(rowData._obj.bidtStockMvtOperations, colField);
            if (operationCheck && operationCheck.bidtStockMvtOperationDTO) {
              if (this.isStatusPerformed(operationCheck.bidtStockMvtOperationDTO.smoStatus)) {
                operationCheck.bidtStockMvtOperationDTO.smoStatus =
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__[
                    'AWPropertiesConstants'
                  ].LOGISTICAL_OPERATION_STATUS_PLANNED;
              } else {
                operationCheck.bidtStockMvtOperationDTO.smoStatus =
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__[
                    'AWPropertiesConstants'
                  ].LOGISTICAL_OPERATION_STATUS_PERFORMED;
              }
              var input = {
                bidtStockMvt: rowData._obj,
                operationId: operationCheck.bidtStockMvtOperationDTO.id,
                bidtDfItem: rowData.item,
                newStatus: operationCheck.bidtStockMvtOperationDTO.smoStatus
              };
              this.performStockMovementOperations([input]);
            }
          };
          /**********************************************
           * Operation on Material
           **********************************************/
          GoodsReceiptFormComponent.prototype.performStockMovementOperations = function(input) {
            var _this = this;
            this.logisticService.performStockMovementOperations(input).subscribe(function() {
              _this.selectedMaterials = [];
              _this.refresh();
            });
          };
          /********************************
           * Validate Operations
           ********************************/
          GoodsReceiptFormComponent.prototype.validateMaterialOperations = function() {
            var _this = this;
            var partialMessageKey = this.getTranslateKey('validateAsset');
            this.confirmationService.confirm({
              messageKey: partialMessageKey,
              accept: function() {
                var imputList = [];
                _this.selectedMaterials.forEach(function(material) {
                  material._obj.bidtStockMvtOperations.forEach(function(operation) {
                    var updatepackageInput = {
                      bidtStockMvt: material._obj,
                      operationId: operation.id,
                      bidtDfItem: material.item,
                      newStatus:
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                          .LOGISTICAL_OPERATION_STATUS_PERFORMED
                    };
                    imputList.push(updatepackageInput);
                  });
                });
                _this.performStockMovementOperations(imputList);
              }
            });
          };
          GoodsReceiptFormComponent.prototype.addPackageDialog = function() {
            this.openAddPackageDialog = true;
          };
          GoodsReceiptFormComponent.prototype.addItemDialog = function() {
            this.openAddItemDialog = true;
          };
          GoodsReceiptFormComponent.prototype.addMaterialDialog = function() {
            this.openAddMaterialDialog = true;
          };
          GoodsReceiptFormComponent.prototype.openDocumentDialog = function(dfTypeOperation) {
            this.selectedOperation = dfTypeOperation;
            this.openDocumentCategorieDialog = true;
          };
          GoodsReceiptFormComponent.prototype.openSelectedGoods = function() {
            // TODO
          };
          /***********************************************
           * Control Quantity Visibility
           ***********************************************/
          GoodsReceiptFormComponent.prototype.getControlQuantityVisibility = function(rowData) {
            var COMPLETED = 100;
            var isQuantityEnabled = false;
            this.parcelTableData.filter(function(res) {
              if (res.progress === COMPLETED && rowData.packageNumber === res.packageCode) {
                isQuantityEnabled = true;
              }
            });
            return isQuantityEnabled;
          };
          GoodsReceiptFormComponent.prototype.getPresentialVisibility = function(rowData) {
            var isPresentialEnabled = false;
            this.postsTableData.filter(function(res) {
              if (res.controlQuantity && rowData.packageNum === res.bidtPackageId) {
                isPresentialEnabled = true;
              }
            });
            return isPresentialEnabled;
          };
          /************************************
           * Delete Package
           ************************************/
          GoodsReceiptFormComponent.prototype.deleteReceiptPackage = function() {
            var _this = this;
            this.selectedParcels.forEach(function(res) {
              var input = {
                id: res.id
              };
              // C54
              _this.logisticService.deleteReceiptPackage(input).subscribe(function(data) {
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeletePackages'));
                _this.selectedParcels = [];
                _this.refresh();
              });
            });
          };
          /************************************
           * Delete Item
           ************************************/
          GoodsReceiptFormComponent.prototype.deleteReceiptItem = function() {
            var _this = this;
            this.selectedPost.forEach(function(res) {
              var input = {
                id: res.id
              };
              // C53
              _this.logisticService.deleteReceiptItem(input).subscribe(function(data) {
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteItems'));
                _this.selectedPost = [];
                _this.refresh();
              });
            });
          };
          /************************************
           * Delete Materials
           ************************************/
          GoodsReceiptFormComponent.prototype.deleteReceiptMaterial = function() {
            var _this = this;
            this.selectedMaterials.forEach(function(res) {
              var input = {
                id: res._obj.id
              };
              // C55
              _this.logisticService.deleteReceiptMaterial(input).subscribe(function(data) {
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteMaterial'));
                _this.selectedMaterials = [];
                _this.refresh();
              });
            });
          };
          // on create package
          GoodsReceiptFormComponent.prototype.onCreatePackage = function(event) {
            this.refresh();
          };
          // on create item
          GoodsReceiptFormComponent.prototype.onCreateItem = function(event) {
            this.refresh();
          };
          // on create material
          GoodsReceiptFormComponent.prototype.onCreateMaterial = function(event) {
            this.refresh();
          };
          GoodsReceiptFormComponent.prototype.showStatus = function() {
            var _this = this;
            if (
              this.deliveryFolder.dfStatus !==
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                .RECEIPT_FOLDER_STATUS_CANCELED
            ) {
              var overlayRef = this.overlayService.openWithPositionCenter({
                content:
                  _status_good_receipt_status_component__WEBPACK_IMPORTED_MODULE_34__['GoodReceiptStatusComponent'],
                data: this.deliveryFolder
              });
              overlayRef.afterClosed$.subscribe({
                next: function(event) {
                  if (event.data) {
                    if (
                      event.data ===
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                        .RECEIPT_FOLDER_STATUS_ON_GOING
                    ) {
                      var input = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__['ListUtils']
                        .orEmpty(_this.deliveryFolder.bidtDfItems)
                        .map(function(dfItem) {
                          return {
                            bidtDfItemDTO: dfItem,
                            newStatus:
                              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__[
                                'AWPropertiesConstants'
                              ].RECEIPT_FOLDER_STATUS_ON_GOING
                          };
                        });
                      _this.goodsReceiptFormService.updateItemsStatus(input).subscribe(function() {
                        _this.refresh();
                      });
                    } else {
                      _this.deliveryFolder.dfStatus = event.data;
                      _this.save();
                    }
                  }
                }
              });
            }
          };
          GoodsReceiptFormComponent.prototype.save = function() {
            var _this = this;
            this.goodsReceiptFormService.addOrUpdateReceiptFolder(this.deliveryFolder).subscribe({
              next: function(deliveryFolder) {
                _this.deliveryFolderId = {
                  id: deliveryFolder.id
                };
                _this.refresh();
              }
            });
          };
          GoodsReceiptFormComponent.prototype.openLinkEquipment = function(code) {
            if (code) {
              this.openEquipment(
                code,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read
              );
            }
          };
          GoodsReceiptFormComponent.prototype.openEquipment = function(objectId, openMode) {
            var labelKey = 'transaction.EquipmentFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'EquipmentFormComponent',
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
          GoodsReceiptFormComponent.prototype.openLink = function(equipment) {
            if (equipment.sn) {
              this.openEquipment(
                equipment.equipmentCode,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read
              );
            } else {
              this.openSelectedBatch(equipment.equipmentCode);
            }
          };
          GoodsReceiptFormComponent.prototype.openSelectedBatch = function(code) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .LOG_PACKAGING_BATCH_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read
            };
            data.objectId = code;
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          GoodsReceiptFormComponent.prototype.uploadDocument = function(event, fileUploader) {
            var _this = this;
            if (!!event.files) {
              var file_1 = event.files[0];
              // Check if the file already exists
              var fileExists = this.documentTableDataSource.data.some(function(document) {
                return document.documentName === file_1.name;
              });
              if (fileExists) {
                this.messageService.showWarningMessage('global.warningOnFileExists');
              } else {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_25__['FileUtils'].getFileContentAsBase64(
                  file_1,
                  function(fileContent) {
                    if (!!fileContent) {
                      var selectedDocumentType = _this.documentTypes.find(function(documentType) {
                        return !!file_1.type && documentType.value === file_1.type;
                      });
                      var document_1 = {
                        documentContent: fileContent,
                        documentName: file_1.name,
                        documentType: !!selectedDocumentType
                          ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_28__['StringUtils'].orEmpty(
                              selectedDocumentType.label
                            )
                          : '',
                        documentPublicationDate: new Date()
                      };
                      _this.deliveryFolder.bidtDocuments = __spread(
                        _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__['ListUtils'].orEmpty(
                          _this.deliveryFolder.bidtDocuments
                        ),
                        [document_1]
                      );
                      _this.documentTableDataSource.addData([document_1]);
                      _this.saveBidtDocuments();
                    }
                  }
                );
              }
              fileUploader.clear();
            }
          };
          GoodsReceiptFormComponent.prototype.downloadFiles = function() {
            this.documentTableDataSource.dataSelection.forEach(function(documentRow) {
              if (!!documentRow) {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_25__['FileUtils'].downloadFile(
                  documentRow.documentContent,
                  documentRow.documentName
                );
              }
            });
          };
          GoodsReceiptFormComponent.prototype.saveBidtDocuments = function() {
            var _this = this;
            if (this.deliveryFolder.bidtDocuments) {
              var saveDocumentDeliveryFolderInput = {
                deliveryFolderDTO: this.deliveryFolder,
                documentList: this.deliveryFolder.bidtDocuments
              };
              this.goodsReceiptFormService.saveDocuments(saveDocumentDeliveryFolderInput).subscribe(function(document) {
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnCreateDocument'));
              });
            }
          };
          GoodsReceiptFormComponent.prototype.deleteDocuments = function() {
            var _this = this;
            this.documentTableDataSource.dataSelection.forEach(function(selection) {
              _this.deleteDocument.push(_this.goodsReceiptFormService.deleteByid(selection.id));
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])(this.deleteDocument).subscribe(function(result) {
              _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteDocument'));
              _this.refresh();
            });
          };
          GoodsReceiptFormComponent.prototype.isDeliveryFolderDraftStatus = function() {
            if (
              this.deliveryFolder.dfStatus ===
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                .RECEIPT_FOLDER_STATUS_DRAFT
            ) {
              return true;
            } else {
              return false;
            }
          };
          GoodsReceiptFormComponent.prototype.isDeliveryFolderPerformedStatus = function() {
            if (
              this.deliveryFolder.dfStatus ===
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                .RECEIPT_FOLDER_STATUS_PERFORMED
            ) {
              return true;
            } else {
              return false;
            }
          };
          GoodsReceiptFormComponent.prototype.isUserCanAddHaveRightOnDeliveryFolder = function() {
            return this.sessionService.hasUserRightByUseCase(
              _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_7__['BidoFunctionTypeConstants']
                .UC_MM_RECEIVING,
              _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_7__['BidoFunctionTypeConstants']
                .DEGREE_MANAGE
            );
          };
          GoodsReceiptFormComponent.prototype.openMfgBatch = function(objectId) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .LOG_MANUFACTURING_BATCH_FORM,
              objectId: objectId ? this.serializationService.serialize({ customerCode: objectId }) : undefined,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /**********************************
           * OPEN PART NUMBER UC
           **********************************/
          GoodsReceiptFormComponent.prototype.openPartNumberLink = function(item) {
            this.openPN(
              item.birePnPnCode,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read
            );
          };
          GoodsReceiptFormComponent.prototype.openPN = function(objectId, openMode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .ENG_PART_NUMBER_FORM,
              objectId: objectId,
              openMode: openMode
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /**********************************
           * open shipment folder
           **********************************/
          GoodsReceiptFormComponent.prototype.openShipmentFolder = function() {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .LOG_GOODS_SHIPMENT_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read,
              objectId: this.serializationService.serialize({ id: this.shipmentFolderLinked.id })
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /**********************************
           * go to stockpilling
           **********************************/
          GoodsReceiptFormComponent.prototype.toStockpilling = function() {
            var _this = this;
            this.searchService.findByCriteria(this.getSearchCriteriaStockpilling()).subscribe(function(mvtList) {
              var params = {
                searchParameters: _this.getSearchCriteriaStockpilling(),
                bidtStockList: mvtList,
                bidtReceiptFolder: _this.deliveryFolder
              };
              var data = {
                id: _this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                    .LOG_STOCK_MOVEMENTS_FORM_STOCKPILLING,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read,
                objectId: _this.serializationService.serialize(params)
              };
              var labelKey = 'transaction.' + data.componentId;
              _this.tabService.open(_this.tabService.create(data, labelKey, true));
            });
          };
          GoodsReceiptFormComponent.prototype.getSearchCriteriaStockpilling = function() {
            var searchCriteria = {
              mvtStatus: [],
              mvtStatusExcluded: [
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .MM_MVT_STATUS_CANCELED_KEY,
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .MM_MVT_STATUS_EXECUTED_KEY
              ],
              untilPlannedDate: new Date(),
              untilRealDate: undefined,
              stockMvt: {
                bidtSiteByBidtSiteIssueId: undefined,
                bidtSiteByBidtSiteReceiptId: this.deliveryFolder.bidtSiteReceiver
                  ? this.deliveryFolder.bidtSiteReceiver.siteId
                  : undefined,
                bidtWarehouseByBidtWarehouseIssueId: undefined,
                bidtWarehouseByBidtWarehouseReceiptId: this.deliveryFolder.bidtWarehouseReceiver
                  ? this.deliveryFolder.bidtWarehouseReceiver.wareHouseId
                  : undefined,
                bidtStockMvtTypeId:
                  _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_8__[
                    'BidtStockMvtTypeConstant'
                  ].STORAGE
              },
              finalReceiverCustomerCode: undefined,
              finalReceiverSiteId: undefined,
              finalReceiverWarehouseId: undefined,
              pnCode: undefined,
              withAlternatives: false,
              criticality: undefined,
              dfShipmentSearch: false
            };
            return searchCriteria;
          };
          /**********************************
           * go to crossDocking
           **********************************/
          GoodsReceiptFormComponent.prototype.toCrossDocking = function() {
            var _this = this;
            this.searchService.findByCriteria(this.getSearchCriteriaCrossDocking()).subscribe(function(mvtList) {
              var params = {
                searchParameters: _this.getSearchCriteriaCrossDocking(),
                bidtStockList: mvtList,
                bidtReceiptFolder: _this.deliveryFolder
              };
              var data = {
                id: _this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                    .LOG_STOCK_MOVEMENTS_FORM,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read,
                objectId: _this.serializationService.serialize(params)
              };
              var labelKey = 'transaction.' + data.componentId;
              _this.tabService.open(_this.tabService.create(data, labelKey, true));
            });
          };
          GoodsReceiptFormComponent.prototype.getSearchCriteriaCrossDocking = function() {
            var searchCriteria = {
              mvtStatus: [],
              mvtStatusExcluded: [
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .MM_MVT_STATUS_CANCELED_KEY,
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .MM_MVT_STATUS_EXECUTED_KEY
              ],
              untilPlannedDate: new Date(),
              stockMvt: {
                bidtSiteByBidtSiteReceiptId: this.deliveryFolder.bidtSiteReceiver
                  ? this.deliveryFolder.bidtSiteReceiver.siteId
                  : undefined,
                bidtWarehouseByBidtWarehouseReceiptId: this.deliveryFolder.bidtWarehouseReceiver
                  ? this.deliveryFolder.bidtWarehouseReceiver.wareHouseId
                  : undefined,
                bidtStockMvtTypeId:
                  _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_8__[
                    'BidtStockMvtTypeConstant'
                  ].CROSS_DOCKING
              },
              withAlternatives: false,
              dfShipmentSearch: false
            };
            return searchCriteria;
          };
          /**********************************
           * OPEN TRANSFERT ORDER
           **********************************/
          GoodsReceiptFormComponent.prototype.openOrder = function(id) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .LOG_TRANSFER_ORDER_FORM,
              objectId: this.serializationService.serialize(id),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_13__['ComponentOpenMode'].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          GoodsReceiptFormComponent.prototype.toNumber = function(str) {
            return Number(str);
          };
          GoodsReceiptFormComponent.prototype.scanAsset = function() {
            this.assetScanDialogVisible = true;
          };
          GoodsReceiptFormComponent.prototype.onScanAssetBatchNumber = function(batchNumber) {
            var matchingAsset = this.materialTableData.find(function(elt) {
              return elt._obj.stockMvtBatchNumber === batchNumber;
            });
            if (!matchingAsset) {
              this.messageService.showErrorMessage(this.getTranslateKey('noAssetWithBatchNumber'));
            } else {
              var bidtDfItem = matchingAsset.item;
              var bidtPackage = bidtDfItem.bidtPackage;
              var bidtPackageOperation = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__['ListUtils']
                .orEmpty(bidtPackage.bidtPackageOperations)
                .find(function(operation) {
                  return (
                    operation.packopeDesignation ===
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                      .LOGISTICAL_OPERATION_PHYSICAL_RECEIPT
                  );
                });
              if (
                !!bidtPackageOperation &&
                bidtPackageOperation.packopeStatus !==
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                    .LOGISTICAL_OPERATION_STATUS_PERFORMED
              ) {
                this.messageService.showErrorMessage(this.getTranslateKey('physicalReceiptOnPackageNotPerformed'));
              } else {
                var operationCheck = this.getMaterialOperation(
                  matchingAsset._obj.bidtStockMvtOperations,
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                    .LOGISTICAL_OPERATION_VISUAL_CONTROL
                );
                if (operationCheck && operationCheck.bidtStockMvtOperationDTO) {
                  if (this.isStatusPerformed(operationCheck.bidtStockMvtOperationDTO.smoStatus)) {
                    this.messageService.showWarningMessage(this.getTranslateKey('visualControlAlreadyPerformed'));
                  } else {
                    var input = {
                      bidtStockMvt: matchingAsset._obj,
                      operationId: operationCheck.bidtStockMvtOperationDTO.id,
                      bidtDfItem: matchingAsset.item,
                      newStatus:
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                          .LOGISTICAL_OPERATION_STATUS_PERFORMED
                    };
                    this.performStockMovementOperations([input]);
                  }
                }
              }
            }
          };
          var GoodsReceiptFormComponent_1;
          GoodsReceiptFormComponent.PROGRESS_MAX = 100;
          GoodsReceiptFormComponent = GoodsReceiptFormComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-goods-receipt-form',
                template: __webpack_require__(
                  /*! ./goods-receipt-form.component.html */ './src/app/main/logistics/goods-receipt/form/goods-receipt-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./goods-receipt-form.component.scss */ './src/app/main/logistics/goods-receipt/form/goods-receipt-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_16__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_17__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_18__['MessageService'],
                _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_4__['PageTocService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_20__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_22__['TabService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_21__['SessionService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_15__['ConfirmationService'],
                _logistics_service__WEBPACK_IMPORTED_MODULE_31__['LogisticsService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_19__['PropertiesService'],
                _administration_catalog_catalog_service__WEBPACK_IMPORTED_MODULE_29__['CatalogService'],
                _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_30__['OverlayService'],
                _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_14__['ExtractTranslationPipe'],
                _stock_movements_search_search_service__WEBPACK_IMPORTED_MODULE_32__['SearchService'],
                _goods_receipt_form_service__WEBPACK_IMPORTED_MODULE_33__['GoodsReceiptFormService']
              ])
            ],
            GoodsReceiptFormComponent
          );
          return GoodsReceiptFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_23__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/goods-receipt.module.ts':
      /*!**********************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/goods-receipt.module.ts ***!
  \**********************************************************************/
      /*! exports provided: GoodsReceiptModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'GoodsReceiptModule', function() {
          return GoodsReceiptModule;
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
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/inputtextarea */ './node_modules/primeng/inputtextarea.js'
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/overlaypanel */ './node_modules/primeng/overlaypanel.js'
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/primeng */ './node_modules/primeng/primeng.js'
        );
        /* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_primeng__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/progressbar */ './node_modules/primeng/progressbar.js'
        );
        /* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__
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
        /* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ './src/app/shared/components/component-sidebar/component-sidebar.mdule.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-customer/dialog-search-customer.module */ './src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_equipment_dialog_search_equipment_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-equipment/dialog-search-equipment.module */ './src/app/shared/components/dialog-search-equipment/dialog-search-equipment.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-pn/dialog-search-pn.module */ './src/app/shared/components/dialog-search-pn/dialog-search-pn.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _administration_catalog_catalog_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../administration/catalog/catalog.service */ './src/app/main/administration/catalog/catalog.service.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _stock_movements_search_search_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../stock-movements/search/search.service */ './src/app/main/logistics/stock-movements/search/search.service.ts'
        );
        /* harmony import */ var _transfer_order_shared_transfer_order_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../transfer-order/shared/transfer-order-service */ './src/app/main/logistics/transfer-order/shared/transfer-order-service.ts'
        );
        /* harmony import */ var _delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./delivery-folder-search.service */ './src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts'
        );
        /* harmony import */ var _form_dialog_add_item_dialog_add_item_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./form/dialog-add-item/dialog-add-item.component */ './src/app/main/logistics/goods-receipt/form/dialog-add-item/dialog-add-item.component.ts'
        );
        /* harmony import */ var _form_dialog_add_material_dialog_add_material_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./form/dialog-add-material/dialog-add-material.component */ './src/app/main/logistics/goods-receipt/form/dialog-add-material/dialog-add-material.component.ts'
        );
        /* harmony import */ var _form_dialog_add_package_dialog_add_package_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./form/dialog-add-package/dialog-add-package.component */ './src/app/main/logistics/goods-receipt/form/dialog-add-package/dialog-add-package.component.ts'
        );
        /* harmony import */ var _form_dialog_create_litigation_dialog_create_litigation_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ./form/dialog-create-litigation/dialog-create-litigation.component */ './src/app/main/logistics/goods-receipt/form/dialog-create-litigation/dialog-create-litigation.component.ts'
        );
        /* harmony import */ var _form_dialog_document_categories_dialog_document_categories_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ./form/dialog-document-categories/dialog-document-categories.component */ './src/app/main/logistics/goods-receipt/form/dialog-document-categories/dialog-document-categories.component.ts'
        );
        /* harmony import */ var _form_goods_receipt_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ./form/goods-receipt-form.component */ './src/app/main/logistics/goods-receipt/form/goods-receipt-form.component.ts'
        );
        /* harmony import */ var _form_goods_receipt_form_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ./form/goods-receipt-form.service */ './src/app/main/logistics/goods-receipt/form/goods-receipt-form.service.ts'
        );
        /* harmony import */ var _search_dialog_asset_scan_dialog_asset_scan_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ./search/dialog-asset-scan/dialog-asset-scan.component */ './src/app/main/logistics/goods-receipt/search/dialog-asset-scan/dialog-asset-scan.component.ts'
        );
        /* harmony import */ var _search_dialog_create_receipt_dialog_create_receipt_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./search/dialog-create-receipt/dialog-create-receipt.component */ './src/app/main/logistics/goods-receipt/search/dialog-create-receipt/dialog-create-receipt.component.ts'
        );
        /* harmony import */ var _search_dialog_package_scan_dialog_package_scan_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ./search/dialog-package-scan/dialog-package-scan.component */ './src/app/main/logistics/goods-receipt/search/dialog-package-scan/dialog-package-scan.component.ts'
        );
        /* harmony import */ var _search_external_good_receipt_search_components__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! ./search/external-good-receipt-search.components */ './src/app/main/logistics/goods-receipt/search/external-good-receipt-search.components.ts'
        );
        /* harmony import */ var _search_local_good_receipt_search_components__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
          /*! ./search/local-good-receipt-search.components */ './src/app/main/logistics/goods-receipt/search/local-good-receipt-search.components.ts'
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
          primeng_table__WEBPACK_IMPORTED_MODULE_9__['TableModule'],
          primeng_primeng__WEBPACK_IMPORTED_MODULE_6__['FileUploadModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__['TooltipModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__['DropdownModule'],
          _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_19__['TableModule'],
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__['CheckboxModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__['SelectButtonModule'],
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule'],
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__['OverlayPanelModule'],
          primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__['ProgressBarModule'],
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4__['InputTextareaModule'],
          _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_14__[
            'ComponentSidebarModule'
          ],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_18__['ModalModule'],
          _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_15__[
            'DialogSearchCustomerModule'
          ]
        ];
        var INTERNAL_MODULES = [
          _shared_components_dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_17__[
            'DialogSearchPnModule'
          ],
          _shared_components_dialog_search_equipment_dialog_search_equipment_module__WEBPACK_IMPORTED_MODULE_16__[
            'DialogSearchEquipmentModule'
          ]
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [];
        var DYNAMIC_COMPONENTS = [
          _form_goods_receipt_form_component__WEBPACK_IMPORTED_MODULE_30__['GoodsReceiptFormComponent'],
          _search_local_good_receipt_search_components__WEBPACK_IMPORTED_MODULE_36__['LocalGoodReceiptSearchComponent'],
          _search_external_good_receipt_search_components__WEBPACK_IMPORTED_MODULE_35__[
            'ExternalGoodReceiptSearchComponent'
          ],
          _form_dialog_create_litigation_dialog_create_litigation_component__WEBPACK_IMPORTED_MODULE_28__[
            'DialogCreateLitigationComponent'
          ],
          _search_dialog_asset_scan_dialog_asset_scan_component__WEBPACK_IMPORTED_MODULE_32__[
            'DialogGoodsReceiptAssetScanComponent'
          ],
          _search_dialog_package_scan_dialog_package_scan_component__WEBPACK_IMPORTED_MODULE_34__[
            'DialogGoodsReceiptPackageScanComponent'
          ],
          _search_dialog_create_receipt_dialog_create_receipt_component__WEBPACK_IMPORTED_MODULE_33__[
            'DialogCreateReceiptComponent'
          ],
          _form_dialog_add_package_dialog_add_package_component__WEBPACK_IMPORTED_MODULE_27__[
            'DialogAddPackageComponent'
          ],
          _form_dialog_add_item_dialog_add_item_component__WEBPACK_IMPORTED_MODULE_25__['DialogAddItemComponent'],
          _form_dialog_add_material_dialog_add_material_component__WEBPACK_IMPORTED_MODULE_26__[
            'DialogAddMaterialComponent'
          ],
          _form_dialog_document_categories_dialog_document_categories_component__WEBPACK_IMPORTED_MODULE_29__[
            'DialogDocumentCategoriesReceiptFolderComponent'
          ]
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _form_goods_receipt_form_service__WEBPACK_IMPORTED_MODULE_31__['GoodsReceiptFormService'],
          _delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_24__['DeliveryFolderSearchService'],
          _administration_catalog_catalog_service__WEBPACK_IMPORTED_MODULE_20__['CatalogService'],
          _stock_movements_search_search_service__WEBPACK_IMPORTED_MODULE_22__['SearchService'],
          _transfer_order_shared_transfer_order_service__WEBPACK_IMPORTED_MODULE_23__['TransferOrderService']
        ];
        var GoodsReceiptModule = /** @class */ (function() {
          function GoodsReceiptModule() {}
          GoodsReceiptModule = __decorate(
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
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_21__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            GoodsReceiptModule
          );
          return GoodsReceiptModule;
        })();

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/search/dialog-asset-scan/dialog-asset-scan.component.html':
      /*!********************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/search/dialog-asset-scan/dialog-asset-scan.component.html ***!
  \********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="25">\r\n  <a-content>\r\n    <div class="column container">\r\n      <i class="fa fa-fw fa-qrcode icon" aria-hidden="true"></i>\r\n\r\n      <span class="label">\r\n        {{ getComponentName() + ".scan" | translate }}\r\n      </span>\r\n\r\n      <input #codeInput type="text" class="aw-input" [(ngModel)]="code" (keyup)="onScan(code)" />\r\n    </div>\r\n  </a-content>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/search/dialog-asset-scan/dialog-asset-scan.component.scss':
      /*!********************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/search/dialog-asset-scan/dialog-asset-scan.component.scss ***!
  \********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .container {\n  align-items: center; }\n  :host .container input {\n    opacity: 0; }\n  :host .container .icon {\n    font-size: 8rem; }\n  :host .container .label {\n    font-size: 1.25rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvZ29vZHMtcmVjZWlwdC9zZWFyY2gvZGlhbG9nLWFzc2V0LXNjYW4vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcZ29vZHMtcmVjZWlwdFxcc2VhcmNoXFxkaWFsb2ctYXNzZXQtc2NhblxcZGlhbG9nLWFzc2V0LXNjYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBbUIsRUFBQTtFQUZ2QjtJQUtNLFVBQVUsRUFBQTtFQUxoQjtJQVNNLGVBQWUsRUFBQTtFQVRyQjtJQWFNLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvZ29vZHMtcmVjZWlwdC9zZWFyY2gvZGlhbG9nLWFzc2V0LXNjYW4vZGlhbG9nLWFzc2V0LXNjYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogOHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/search/dialog-asset-scan/dialog-asset-scan.component.ts':
      /*!******************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/search/dialog-asset-scan/dialog-asset-scan.component.ts ***!
  \******************************************************************************************************/
      /*! exports provided: DialogGoodsReceiptAssetScanComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogGoodsReceiptAssetScanComponent',
          function() {
            return DialogGoodsReceiptAssetScanComponent;
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
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

        var DialogGoodsReceiptAssetScanComponent = /** @class */ (function(_super) {
          __extends(DialogGoodsReceiptAssetScanComponent, _super);
          // ////////////////////////////////////////////////////////////////////////////
          function DialogGoodsReceiptAssetScanComponent(messageService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read,
                'DialogGoodsReceiptAssetScanComponent'
              ) || this;
            _this.messageService = messageService;
            _this.keepDialogOpened = false;
            _this.onValidate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.code = '';
            _this.registerCodeObservable();
            return _this;
          }
          DialogGoodsReceiptAssetScanComponent_1 = DialogGoodsReceiptAssetScanComponent;
          // ////////////////////////////////////////////////////////////////////////////
          DialogGoodsReceiptAssetScanComponent.prototype.ngAfterViewInit = function() {
            this.codeInputElt.nativeElement.focus();
          };
          // ////////////////////////////////////////////////////////////////////////////
          DialogGoodsReceiptAssetScanComponent.prototype.onScan = function(searchTextValue) {
            this.codeChanged.next(searchTextValue);
          };
          // ////////////////////////////////////////////////////////////////////////////
          DialogGoodsReceiptAssetScanComponent.prototype.registerCodeObservable = function() {
            var _this = this;
            this.codeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__['Subject']();
            this.codeChanged
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['debounceTime'])(
                  DialogGoodsReceiptAssetScanComponent_1.CODE_DEBOUNCE_TIME
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['distinctUntilChanged'])(),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['takeUntil'])(this.unsubscribe)
              )
              .subscribe({
                next: function(value) {
                  if (value) {
                    try {
                      _this.onValidate.emit(value);
                      if (!_this.keepDialogOpened) {
                        _this.closeDialog();
                      }
                    } catch (error) {
                      _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnParsing'));
                    }
                  }
                }
              });
          };
          var DialogGoodsReceiptAssetScanComponent_1;
          DialogGoodsReceiptAssetScanComponent.CODE_DEBOUNCE_TIME = 1000;
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogGoodsReceiptAssetScanComponent.prototype,
            'keepDialogOpened',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogGoodsReceiptAssetScanComponent.prototype,
            'onValidate',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('codeInput'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            DialogGoodsReceiptAssetScanComponent.prototype,
            'codeInputElt',
            void 0
          );
          DialogGoodsReceiptAssetScanComponent = DialogGoodsReceiptAssetScanComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-goods-receipt-scan-asset',
                template: __webpack_require__(
                  /*! ./dialog-asset-scan.component.html */ './src/app/main/logistics/goods-receipt/search/dialog-asset-scan/dialog-asset-scan.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-asset-scan.component.scss */ './src/app/main/logistics/goods-receipt/search/dialog-asset-scan/dialog-asset-scan.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__['MessageService']
              ])
            ],
            DialogGoodsReceiptAssetScanComponent
          );
          return DialogGoodsReceiptAssetScanComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/search/dialog-create-receipt/dialog-create-receipt.component.html':
      /*!****************************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/search/dialog-create-receipt/dialog-create-receipt.component.html ***!
  \****************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="75">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="section">\r\n      <div class="section-content">\r\n        <div class="row">\r\n          <div class="form-group required">\r\n            <label class="form-label">{{ getComponentName() + ".receptionType" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                appendTo="body"\r\n                class="aw-dropdown fixed-width"\r\n                placeholder="&nbsp;"\r\n                [options]="dfTypes"\r\n                [showClear]="true"\r\n                [(ngModel)]="selectedDfType"\r\n                (onChange)="onSelectedDfTypeChange()"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group required">\r\n            <label class="form-label">{{ getComponentName() + ".expectedDate" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-calendar\r\n                showButtonBar="true"\r\n                [monthNavigator]="true"\r\n                [yearNavigator]="true"\r\n                [yearRange]="sessionService.calendarYearRange"\r\n                appendTo="body"\r\n                class="aw-calendar"\r\n                [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                [locale]="sessionService.calendarFormat"\r\n                [(ngModel)]="selectedPlannedDate"\r\n              ></p-calendar>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group" style="height: 47px;">\r\n            <label class="form-label"> {{ getComponentName() + ".critical" | translate }} </label>\r\n\r\n            <div class="form-control aw-selectbutton-wrapper">\r\n              <p-selectButton [options]="criticalities" [(ngModel)]="selectedCriticality"></p-selectButton>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="section">\r\n      <h4 class="section-title">{{ getComponentName() + ".recipient" | translate }}</h4>\r\n\r\n      <div class="section-content">\r\n        <div class="row">\r\n          <div class="form-group required">\r\n            <label class="form-label">{{ getComponentName() + ".site" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                appendTo="body"\r\n                class="aw-dropdown fixed-width"\r\n                placeholder="&nbsp;"\r\n                [options]="sites"\r\n                [showClear]="true"\r\n                [(ngModel)]="selectedRecipientSite"\r\n                (onChange)="onChangeRecipientSite()"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group flex--2" style="height: 47px;">\r\n            <label class="form-label">\r\n              {{ selectedRecipientWarehouseCategory | formatSelectOption: warehouseCategories }}\r\n            </label>\r\n\r\n            <div class="form-control aw-selectbutton-wrapper aw-selectbutton-with-dropdown">\r\n              <p-selectButton\r\n                [options]="warehouseCategories"\r\n                [(ngModel)]="selectedRecipientWarehouseCategory"\r\n                (onChange)="onChangeRecipientWarehouseCategory()"\r\n              ></p-selectButton>\r\n\r\n              <p-dropdown\r\n                appendTo="body"\r\n                class="aw-dropdown"\r\n                placeholder="&nbsp;"\r\n                [options]="recipientWarehouses"\r\n                [showClear]="true"\r\n                [(ngModel)]="selectedRecipientWarehouse"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="section">\r\n      <h4 class="section-title">{{ getComponentName() + ".sender" | translate }}</h4>\r\n\r\n      <div class="section-content">\r\n        <div class="row" *ngIf="!showPartnerDropdown || contextComponent == componentContext.LOCALE">\r\n          <div class="form-group required">\r\n            <label class="form-label">{{ getComponentName() + ".site" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                appendTo="body"\r\n                class="aw-dropdown fixed-width"\r\n                placeholder="&nbsp;"\r\n                [options]="sites"\r\n                [showClear]="true"\r\n                [(ngModel)]="selectedShipperSite"\r\n                (onChange)="onChangeShipperSite()"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group flex--2" style="height: 47px;">\r\n            <label class="form-label">\r\n              {{ selectedShipperWarehouseCategory | formatSelectOption: warehouseCategories }}\r\n            </label>\r\n\r\n            <div class="form-control aw-selectbutton-wrapper aw-selectbutton-with-dropdown">\r\n              <p-selectButton\r\n                [options]="warehouseCategories"\r\n                [(ngModel)]="selectedShipperWarehouseCategory"\r\n                (onChange)="onChangeShipperWarehouseCategory()"\r\n              ></p-selectButton>\r\n\r\n              <p-dropdown\r\n                appendTo="body"\r\n                class="aw-dropdown"\r\n                placeholder="&nbsp;"\r\n                [options]="shipperWarehouses"\r\n                [showClear]="true"\r\n                [(ngModel)]="selectedShipperWarehouse"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="row" *ngIf="showPartnerDropdown && contextComponent == componentContext.EXTERNAL">\r\n        <div class="form-group required">\r\n          <label class="form-label">{{ getComponentName() + ".partner" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              appendTo="body"\r\n              class="aw-dropdown fixed-width"\r\n              placeholder="&nbsp;"\r\n              [options]="businessPartnerList"\r\n              [showClear]="true"\r\n              [(ngModel)]="bidoCustomerSender"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class="form-group"></div>\r\n        <div class="form-group"></div>\r\n      </div>\r\n    </div>\r\n    <div class="section">\r\n      <div\r\n        class="section-content"\r\n        *ngIf="selectedRecipientWarehouse && selectedRecipientWarehouse === selectedShipperWarehouse"\r\n      >\r\n        <div class="row">\r\n          <div class="form-group">\r\n            <label class="form-label warning">{{ getComponentName() + ".warningMessage" | translate }}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button mat-raised-button type="button" (click)="closeDialog()">{{ "global.cancel" | translate }}</button>\r\n\r\n    <button\r\n      mat-raised-button\r\n      type="button"\r\n      color="primary"\r\n      [disabled]="!canValidate() || !isSitesOk()"\r\n      (click)="validate()"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/search/dialog-create-receipt/dialog-create-receipt.component.scss':
      /*!****************************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/search/dialog-create-receipt/dialog-create-receipt.component.scss ***!
  \****************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .form-label.warning {\n  color: #a82525 !important;\n  font-style: italic; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvZ29vZHMtcmVjZWlwdC9zZWFyY2gvZGlhbG9nLWNyZWF0ZS1yZWNlaXB0L2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxsb2dpc3RpY3NcXGdvb2RzLXJlY2VpcHRcXHNlYXJjaFxcZGlhbG9nLWNyZWF0ZS1yZWNlaXB0XFxkaWFsb2ctY3JlYXRlLXJlY2VpcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFHTSx5QkFBNEI7RUFDNUIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9nb29kcy1yZWNlaXB0L3NlYXJjaC9kaWFsb2ctY3JlYXRlLXJlY2VpcHQvZGlhbG9nLWNyZWF0ZS1yZWNlaXB0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5mb3JtLWxhYmVsIHtcclxuICAgICYud2FybmluZyB7XHJcbiAgICAgIGNvbG9yOiAkcmVkLWRhcmsxICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/search/dialog-create-receipt/dialog-create-receipt.component.ts':
      /*!**************************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/search/dialog-create-receipt/dialog-create-receipt.component.ts ***!
  \**************************************************************************************************************/
      /*! exports provided: ComponentContext, DialogCreateReceiptComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ComponentContext', function() {
          return ComponentContext;
        });
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogCreateReceiptComponent',
          function() {
            return DialogCreateReceiptComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/pipes/extract-translation.pipe */ './src/app/shared/pipes/extract-translation.pipe.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../delivery-folder-search.service */ './src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts'
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

        var ComponentContext;
        (function(ComponentContext) {
          ComponentContext[(ComponentContext['LOCALE'] = 0)] = 'LOCALE';
          ComponentContext[(ComponentContext['EXTERNAL'] = 1)] = 'EXTERNAL';
        })(ComponentContext || (ComponentContext = {}));
        var DialogCreateReceiptComponent = /** @class */ (function(_super) {
          __extends(DialogCreateReceiptComponent, _super);
          function DialogCreateReceiptComponent(
            sessionService,
            extractTranslationPipe,
            dfSearchService,
            logisticsService,
            messageService,
            propertiesService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Read,
                'DialogCreateReceiptComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.extractTranslationPipe = extractTranslationPipe;
            _this.dfSearchService = dfSearchService;
            _this.logisticsService = logisticsService;
            _this.messageService = messageService;
            _this.propertiesService = propertiesService;
            _this.componentContext = ComponentContext;
            _this.onValidate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.init();
            _this.loadSites();
            _this.loadWarehouseCategories();
            return _this;
          }
          ///////////////////////////////////////////////////////////////////////////////
          DialogCreateReceiptComponent.prototype.canValidate = function() {
            return this.selectedDfType &&
              (this.selectedRecipientWarehouse ||
                (this.bidoCustomerReceiver && this.bidoCustomerReceiver.customerCode)) &&
              (this.selectedShipperWarehouse || (this.bidoCustomerSender && this.bidoCustomerSender.customerCode)) &&
              this.selectedRecipientWarehouse !== this.selectedShipperWarehouse
              ? true
              : false;
          };
          DialogCreateReceiptComponent.prototype.isSitesOk = function() {
            if (
              this.selectedDfType &&
              this.selectedDfType.transferType ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                  .MM_TRANSFER_TYPE_INTRA_SITE_KEY
            ) {
              return this.selectedRecipientSite === this.selectedShipperSite;
            } else if (
              this.selectedDfType &&
              this.selectedDfType.transferType ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                  .MM_TRANSFER_TYPE_INTER_SITE_KEY
            ) {
              return this.selectedRecipientSite !== this.selectedShipperSite;
            } else {
              return true;
            }
          };
          DialogCreateReceiptComponent.prototype.onChangeRecipientSite = function() {
            this.onChangeRecipientWarehouseCategory();
          };
          DialogCreateReceiptComponent.prototype.onChangeRecipientWarehouseCategory = function() {
            var _this = this;
            this.unselectRecipientWarehouse();
            if (this.selectedRecipientSite) {
              this.loadWareHouses(this.selectedRecipientSite, this.selectedRecipientWarehouseCategory).subscribe({
                next: function(warehouses) {
                  _this.recipientWarehouses = warehouses;
                }
              });
            }
          };
          DialogCreateReceiptComponent.prototype.onChangeShipperSite = function() {
            this.onChangeShipperWarehouseCategory();
          };
          DialogCreateReceiptComponent.prototype.onChangeShipperWarehouseCategory = function() {
            var _this = this;
            this.unselectShipperWarehouse();
            if (this.selectedShipperSite) {
              this.loadWareHouses(this.selectedShipperSite, this.selectedShipperWarehouseCategory).subscribe({
                next: function(warehouses) {
                  _this.shipperWarehouses = warehouses;
                }
              });
            }
          };
          DialogCreateReceiptComponent.prototype.validate = function() {
            var _this = this;
            var input = {
              bidtDfTypeId: this.selectedDfType && this.selectedDfType.id,
              bidtSiteByBidtSiteReceiverId: this.selectedRecipientSite,
              bidtSiteByBidtSiteSenderId: this.selectedShipperSite,
              bidtWarehouseByBidtWarehouseReceiverId: this.selectedRecipientWarehouse,
              bidtWarehouseByBidtWarehouseSenderId: this.selectedShipperWarehouse,
              criticality: this.selectedCriticality,
              plannedDate: this.selectedPlannedDate,
              bidoCustomerReceiver: this.bidoCustomerReceiver,
              bidoCustomerSender: this.bidoCustomerSender
            };
            this.logisticsService.addOrUpdateReceiptFolder(input).subscribe(function(res) {
              _this.onValidate.emit(res);
              _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnCreate'));
              _this.closeDialog();
            });
          };
          ///////////////////////////////////////////////////////////////////////////////
          DialogCreateReceiptComponent.prototype.init = function() {
            this.criticalities = [];
            this.dfTypes = [];
            this.recipientWarehouses = [];
            this.shipperWarehouses = [];
            this.sites = [];
            this.warehouseCategories = [];
            this.bidoCustomerReceiver = {};
            this.selectedCriticality =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__[
                'AWPropertiesConstants'
              ].LOGISTICAL_CRITICALITY_ROUTINE;
            this.selectedDfType = undefined;
            this.selectedPlannedDate = new Date();
            this.selectedRecipientSite = undefined;
            this.selectedRecipientWarehouse = undefined;
            this.selectedRecipientWarehouseCategory = undefined;
            this.selectedShipperSite = undefined;
            this.selectedShipperWarehouse = undefined;
            this.selectedShipperWarehouseCategory = undefined;
            this.showPartnerDropdown = false;
            this.businessPartnerList = [];
            this.loadCriticalities();
            this.loadDfTypes();
            this.loadSites();
            this.loadWarehouseCategories();
            this.loadBusinessPartnerList();
          };
          DialogCreateReceiptComponent.prototype.loadCriticalities = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__['GenericPropertyConstants']
                  .LOGISTICAL_CRITICALITY_MAP
              )
              .subscribe({
                next: function(criticalities) {
                  _this.criticalities = criticalities.map(function(criticality) {
                    return {
                      label: criticality.label,
                      value: criticality.value
                    };
                  });
                }
              });
          };
          DialogCreateReceiptComponent.prototype.loadDfTypes = function() {
            var _this = this;
            this.logisticsService.findReceiptDfTypes().subscribe({
              next: function(dfTypes) {
                if (_this.contextComponent === _this.componentContext.LOCALE) {
                  _this.dfTypes = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__['ListUtils']
                    .orEmpty(dfTypes)
                    .filter(function(dfType) {
                      return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__['StringUtils'].isNullOrEmpty(
                        dfType.dftDesignation
                      );
                    })
                    .filter(function(dfType) {
                      return (
                        dfType.transferType ===
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                          .MM_TRANSFER_TYPE_INTRA_SITE_KEY
                      );
                    })
                    .map(function(dfType) {
                      return {
                        label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__['StringUtils'].orEmpty(
                          _this.extractTranslationPipe.transform(dfType.dftDesignation)
                        ),
                        value: dfType
                      };
                    })
                    .sort(function(s1, s2) {
                      return s1.label.localeCompare(s2.label);
                    });
                  _this.selectedDfType = _this.dfTypes.length === 1 ? _this.dfTypes[0].value : undefined;
                } else {
                  _this.dfTypes = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__['ListUtils']
                    .orEmpty(dfTypes)
                    .filter(function(dfType) {
                      return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__['StringUtils'].isNullOrEmpty(
                        dfType.dftDesignation
                      );
                    })
                    .filter(function(dfType) {
                      return (
                        dfType.transferType ===
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__[
                            'AWPropertiesConstants'
                          ].MM_TRANSFER_TYPE_INTER_SITE_KEY ||
                        dfType.transferType ===
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__[
                            'AWPropertiesConstants'
                          ].MM_TRANSFER_TYPE_EXTERNAL_KEY
                      );
                    })
                    .map(function(dfType) {
                      return {
                        label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__['StringUtils'].orEmpty(
                          _this.extractTranslationPipe.transform(dfType.dftDesignation)
                        ),
                        value: dfType
                      };
                    })
                    .sort(function(s1, s2) {
                      return s1.label.localeCompare(s2.label);
                    });
                  _this.selectedDfType = _this.dfTypes.length === 1 ? _this.dfTypes[0].value : undefined;
                }
              }
            });
          };
          DialogCreateReceiptComponent.prototype.loadBusinessPartnerList = function() {
            var _this = this;
            this.logisticsService.findAllBidoCustomer().subscribe(function(results) {
              _this.businessPartnerList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__['ListUtils']
                .orEmpty(results)
                .filter(function(customer) {
                  return !!customer.customerCode;
                })
                .map(function(customer) {
                  return {
                    label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__['StringUtils'].isNullOrEmpty(
                      customer.customerName
                    )
                      ? customer.customerCode
                      : customer.customerName + ' (' + customer.customerCode + ')',
                    value: customer
                  };
                });
            });
          };
          DialogCreateReceiptComponent.prototype.onSelectedDfTypeChange = function() {
            this.showPartnerDropdown =
              (this.selectedDfType &&
                this.selectedDfType.transferType ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                    .MM_TRANSFER_TYPE_INTRA_SITE_KEY) ||
              (this.selectedDfType &&
                this.selectedDfType.transferType ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                    .MM_TRANSFER_TYPE_INTER_SITE_KEY)
                ? false
                : true;
          };
          DialogCreateReceiptComponent.prototype.loadSites = function() {
            var _this = this;
            this.dfSearchService.findAllSiteList().subscribe({
              next: function(sites) {
                _this.sites = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__['ListUtils']
                  .orEmpty(sites)
                  .map(function(site) {
                    return {
                      label: site.siteCode + ' - ' + site.siteName,
                      value: site.siteId
                    };
                  })
                  .sort(function(s1, s2) {
                    return s1.label.localeCompare(s2.label);
                  });
              }
            });
          };
          DialogCreateReceiptComponent.prototype.loadWarehouseCategories = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__['GenericPropertyConstants']
                  .WAREHOUSE_CATEGORY_MAP
              )
              .subscribe({
                next: function(warehouseCategories) {
                  _this.warehouseCategories = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__['ListUtils']
                    .orEmpty(warehouseCategories)
                    .sort(function(s1, s2) {
                      return s1.value.localeCompare(s2.value);
                    });
                  var warehouseCategory =
                    _this.warehouseCategories.length > 0 ? _this.warehouseCategories[0].value : undefined;
                  _this.selectedRecipientWarehouseCategory = warehouseCategory;
                  _this.selectedShipperWarehouseCategory = warehouseCategory;
                }
              });
          };
          DialogCreateReceiptComponent.prototype.loadWareHouses = function(site, warehouseCategory) {
            return this.dfSearchService.getWarehousesBySiteId(site).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['map'])(function(warehouses) {
                return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__['ListUtils']
                  .orEmpty(warehouses)
                  .filter(function(warehouse) {
                    return warehouse.whCategory === warehouseCategory;
                  })
                  .map(function(warehouse) {
                    return {
                      label: warehouse.whCode + ' - ' + warehouse.whName,
                      value: warehouse.wareHouseId
                    };
                  })
                  .sort(function(s1, s2) {
                    return s1.label.localeCompare(s2.label);
                  });
              })
            );
          };
          DialogCreateReceiptComponent.prototype.unselectRecipientWarehouse = function() {
            this.recipientWarehouses = [];
            this.selectedRecipientWarehouse = undefined;
          };
          DialogCreateReceiptComponent.prototype.unselectShipperWarehouse = function() {
            this.shipperWarehouses = [];
            this.selectedShipperWarehouse = undefined;
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogCreateReceiptComponent.prototype,
            'contextComponent',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogCreateReceiptComponent.prototype,
            'onValidate',
            void 0
          );
          DialogCreateReceiptComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-create-receipt',
                template: __webpack_require__(
                  /*! ./dialog-create-receipt.component.html */ './src/app/main/logistics/goods-receipt/search/dialog-create-receipt/dialog-create-receipt.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-create-receipt.component.scss */ './src/app/main/logistics/goods-receipt/search/dialog-create-receipt/dialog-create-receipt.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__['SessionService'],
                _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_5__['ExtractTranslationPipe'],
                _delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_13__['DeliveryFolderSearchService'],
                _logistics_service__WEBPACK_IMPORTED_MODULE_12__['LogisticsService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__['MessageService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__['PropertiesService']
              ])
            ],
            DialogCreateReceiptComponent
          );
          return DialogCreateReceiptComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_9__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/search/dialog-package-scan/dialog-package-scan.component.html':
      /*!************************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/search/dialog-package-scan/dialog-package-scan.component.html ***!
  \************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="25">\r\n  <a-content>\r\n    <div class="column container">\r\n      <i class="fa fa-fw fa-qrcode icon" aria-hidden="true"></i>\r\n\r\n      <span class="label">\r\n        {{ getComponentName() + ".scan" | translate }}\r\n      </span>\r\n\r\n      <input #codeInput type="text" class="aw-input" [(ngModel)]="code" (keyup)="onScan(code)" />\r\n    </div>\r\n  </a-content>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/search/dialog-package-scan/dialog-package-scan.component.scss':
      /*!************************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/search/dialog-package-scan/dialog-package-scan.component.scss ***!
  \************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .container {\n  align-items: center; }\n  :host .container input {\n    opacity: 0; }\n  :host .container .icon {\n    font-size: 8rem; }\n  :host .container .label {\n    font-size: 1.25rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvZ29vZHMtcmVjZWlwdC9zZWFyY2gvZGlhbG9nLXBhY2thZ2Utc2Nhbi9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbG9naXN0aWNzXFxnb29kcy1yZWNlaXB0XFxzZWFyY2hcXGRpYWxvZy1wYWNrYWdlLXNjYW5cXGRpYWxvZy1wYWNrYWdlLXNjYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBbUIsRUFBQTtFQUZ2QjtJQUtNLFVBQVUsRUFBQTtFQUxoQjtJQVNNLGVBQWUsRUFBQTtFQVRyQjtJQWFNLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvZ29vZHMtcmVjZWlwdC9zZWFyY2gvZGlhbG9nLXBhY2thZ2Utc2Nhbi9kaWFsb2ctcGFja2FnZS1zY2FuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICBmb250LXNpemU6IDhyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/search/dialog-package-scan/dialog-package-scan.component.ts':
      /*!**********************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/search/dialog-package-scan/dialog-package-scan.component.ts ***!
  \**********************************************************************************************************/
      /*! exports provided: DialogGoodsReceiptPackageScanComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogGoodsReceiptPackageScanComponent',
          function() {
            return DialogGoodsReceiptPackageScanComponent;
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
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

        var DialogGoodsReceiptPackageScanComponent = /** @class */ (function(_super) {
          __extends(DialogGoodsReceiptPackageScanComponent, _super);
          // ////////////////////////////////////////////////////////////////////////////
          function DialogGoodsReceiptPackageScanComponent(messageService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read,
                'DialogGoodsReceiptPackageScanComponent'
              ) || this;
            _this.messageService = messageService;
            _this.onValidate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.code = '';
            _this.registerCodeObservable();
            return _this;
          }
          DialogGoodsReceiptPackageScanComponent_1 = DialogGoodsReceiptPackageScanComponent;
          // ////////////////////////////////////////////////////////////////////////////
          DialogGoodsReceiptPackageScanComponent.prototype.ngAfterViewInit = function() {
            this.codeInputElt.nativeElement.focus();
          };
          // ////////////////////////////////////////////////////////////////////////////
          DialogGoodsReceiptPackageScanComponent.prototype.onScan = function(searchTextValue) {
            this.codeChanged.next(searchTextValue);
          };
          // ////////////////////////////////////////////////////////////////////////////
          DialogGoodsReceiptPackageScanComponent.prototype.registerCodeObservable = function() {
            var _this = this;
            this.codeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__['Subject']();
            this.codeChanged
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['debounceTime'])(
                  DialogGoodsReceiptPackageScanComponent_1.CODE_DEBOUNCE_TIME
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['distinctUntilChanged'])(),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['takeUntil'])(this.unsubscribe)
              )
              .subscribe({
                next: function(value) {
                  if (value) {
                    try {
                      _this.onValidate.emit(value);
                      _this.closeDialog();
                    } catch (error) {
                      _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnParsing'));
                    }
                  }
                }
              });
          };
          var DialogGoodsReceiptPackageScanComponent_1;
          DialogGoodsReceiptPackageScanComponent.CODE_DEBOUNCE_TIME = 1000;
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogGoodsReceiptPackageScanComponent.prototype,
            'onValidate',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('codeInput'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            DialogGoodsReceiptPackageScanComponent.prototype,
            'codeInputElt',
            void 0
          );
          DialogGoodsReceiptPackageScanComponent = DialogGoodsReceiptPackageScanComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-goods-receipt-scan',
                template: __webpack_require__(
                  /*! ./dialog-package-scan.component.html */ './src/app/main/logistics/goods-receipt/search/dialog-package-scan/dialog-package-scan.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-package-scan.component.scss */ './src/app/main/logistics/goods-receipt/search/dialog-package-scan/dialog-package-scan.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__['MessageService']
              ])
            ],
            DialogGoodsReceiptPackageScanComponent
          );
          return DialogGoodsReceiptPackageScanComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/search/external-good-receipt-search.components.ts':
      /*!************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/search/external-good-receipt-search.components.ts ***!
  \************************************************************************************************/
      /*! exports provided: ExternalGoodReceiptSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ExternalGoodReceiptSearchComponent',
          function() {
            return ExternalGoodReceiptSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/pipes/extract-translation.pipe */ './src/app/shared/pipes/extract-translation.pipe.ts'
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
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _transfer_order_shared_transfer_order_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../transfer-order/shared/transfer-order-service */ './src/app/main/logistics/transfer-order/shared/transfer-order-service.ts'
        );
        /* harmony import */ var _delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../delivery-folder-search.service */ './src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts'
        );
        /* harmony import */ var _goods_receipt_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./goods-receipt-search.component */ './src/app/main/logistics/goods-receipt/search/goods-receipt-search.component.ts'
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

        var ExternalGoodReceiptSearchComponent = /** @class */ (function(_super) {
          __extends(ExternalGoodReceiptSearchComponent, _super);
          function ExternalGoodReceiptSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            translateService,
            dfSearchService,
            logisticsService,
            propertiesService,
            transferOrderService,
            extractTranslationPipe
          ) {
            var _this =
              _super.call(
                this,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                sessionService,
                translateService,
                dfSearchService,
                logisticsService,
                propertiesService,
                transferOrderService,
                extractTranslationPipe
              ) || this;
            _this.sessionService = sessionService;
            _this.translateService = translateService;
            _this.dfSearchService = dfSearchService;
            _this.logisticsService = logisticsService;
            _this.propertiesService = propertiesService;
            _this.transferOrderService = transferOrderService;
            _this.extractTranslationPipe = extractTranslationPipe;
            return _this;
          }
          ExternalGoodReceiptSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .LOG_EXTERNAL_GOODS_RECEIPT_SEARCH;
          };
          Object.defineProperty(ExternalGoodReceiptSearchComponent.prototype, 'getCurrentComponentContext', {
            get: function() {
              return _goods_receipt_search_component__WEBPACK_IMPORTED_MODULE_14__['ComponentContext'].EXTERNAL;
            },
            enumerable: true,
            configurable: true
          });
          ExternalGoodReceiptSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-local-goods-receipt-search',
                template: __webpack_require__(
                  /*! ./goods-receipt-search.component.html */ './src/app/main/logistics/goods-receipt/search/goods-receipt-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./goods-receipt-search.component.scss */ './src/app/main/logistics/goods-receipt/search/goods-receipt-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__['SessionService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_13__['DeliveryFolderSearchService'],
                _logistics_service__WEBPACK_IMPORTED_MODULE_11__['LogisticsService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__['PropertiesService'],
                _transfer_order_shared_transfer_order_service__WEBPACK_IMPORTED_MODULE_12__['TransferOrderService'],
                _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_3__['ExtractTranslationPipe']
              ])
            ],
            ExternalGoodReceiptSearchComponent
          );
          return ExternalGoodReceiptSearchComponent;
        })(_goods_receipt_search_component__WEBPACK_IMPORTED_MODULE_14__['GoodsReceiptSearchComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/search/goods-receipt-search.component.html':
      /*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/search/goods-receipt-search.component.html ***!
  \*****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <h2 class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button type="button" mat-raised-button (click)="scanPackage()">\r\n      {{ componentData.componentId + ".scanPackage" | translate }}\r\n    </button>\r\n\r\n    <button type="button" mat-raised-button (click)="scanAsset()">\r\n      {{ componentData.componentId + ".scanAsset" | translate }}\r\n    </button>\r\n\r\n    <button *ngIf="isCreateButtonnIsVisible()" type="button" mat-raised-button (click)="create()">\r\n      {{ "global.create" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item (click)="updateFavoriteState()">{{ "addToFavorite" | translate }}</button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="section">\r\n                <h4 class="section-title">{{ componentData.componentId + ".recipient" | translate }}</h4>\r\n\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group required">\r\n                      <label class="form-label">{{ componentData.componentId + ".site" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          placeholder="&nbsp;"\r\n                          [options]="recipientSites"\r\n                          [showClear]="true"\r\n                          [(ngModel)]="selectedRecipientSite"\r\n                          (onChange)="onChangeRecipientSite()"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group flex--2" style="height: 47px;">\r\n                      <label class="form-label">\r\n                        {{ selectedRecipientWarehouseCategory | formatSelectOption: warehouseCategories }}\r\n                      </label>\r\n\r\n                      <div class="form-control aw-selectbutton-wrapper aw-selectbutton-with-dropdown">\r\n                        <p-selectButton\r\n                          [options]="warehouseCategories"\r\n                          [(ngModel)]="selectedRecipientWarehouseCategory"\r\n                          (onChange)="onChangeRecipientWarehouseCategory()"\r\n                        ></p-selectButton>\r\n\r\n                        <p-dropdown\r\n                          appendTo="body"\r\n                          class="aw-dropdown fixed-width"\r\n                          placeholder="&nbsp;"\r\n                          [options]="recipientWarehouses"\r\n                          [showClear]="true"\r\n                          [(ngModel)]="selectedRecipientWarehouse"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <h4 class="section-title">{{ componentData.componentId + ".sender" | translate }}</h4>\r\n\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".site" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          placeholder="&nbsp;"\r\n                          [options]="shipperSites"\r\n                          [showClear]="true"\r\n                          [(ngModel)]="selectedShipperSite"\r\n                          (onChange)="onChangeShipperSite()"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group flex--2" style="height: 47px;">\r\n                      <label class="form-label">\r\n                        {{ selectedShipperWarehouseCategory | formatSelectOption: warehouseCategories }}\r\n                      </label>\r\n\r\n                      <div class="form-control aw-selectbutton-wrapper aw-selectbutton-with-dropdown">\r\n                        <p-selectButton\r\n                          [options]="warehouseCategories"\r\n                          [(ngModel)]="selectedShipperWarehouseCategory"\r\n                          (onChange)="onChangeShipperWarehouseCategory()"\r\n                        ></p-selectButton>\r\n\r\n                        <p-dropdown\r\n                          appendTo="body"\r\n                          class="aw-dropdown fixed-width"\r\n                          placeholder="&nbsp;"\r\n                          [options]="shipperWarehouses"\r\n                          [showClear]="true"\r\n                          [(ngModel)]="selectedShipperWarehouse"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <h4 class="section-title">{{ componentData.componentId + ".receptionFolder" | translate }}</h4>\r\n\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentData.componentId + ".folderNumber" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input class="aw-input" type="text" [(ngModel)]="selectedDfCode" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentData.componentId + ".receptionType" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          placeholder="&nbsp;"\r\n                          [options]="dfTypes"\r\n                          [showClear]="true"\r\n                          [(ngModel)]="selectedDfType"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group" style="height: 47px;">\r\n                      <label class="form-label"> {{ componentData.componentId + ".critical" | translate }} </label>\r\n\r\n                      <div class="form-control aw-selectbutton-wrapper">\r\n                        <p-selectButton [options]="criticalities" [(ngModel)]="selectedCriticality"></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentData.componentId + ".status" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          placeholder="&nbsp;"\r\n                          [options]="dfStatuses"\r\n                          [showClear]="true"\r\n                          [(ngModel)]="selectedStatus"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentData.componentId + ".expectedDate" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-calendar\r\n                          showButtonBar="true"\r\n                          [monthNavigator]="true"\r\n                          [yearNavigator]="true"\r\n                          [yearRange]="sessionService.calendarYearRange"\r\n                          class="aw-calendar"\r\n                          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                          [locale]="sessionService.calendarFormat"\r\n                          [(ngModel)]="selectedPlannedDate"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".packageNumber" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input class="aw-input" type="text" [(ngModel)]="selectedPackageCode" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".pn" | translate }}</label>\r\n\r\n                      <div class="form-control form-control-with-modal">\r\n                        <div class="form-control-data" (click)="openItemPnDialog()">\r\n                          {{ selectedItemPn?.pnCode }}\r\n                        </div>\r\n\r\n                        <div *ngIf="selectedItemPn" class="btn-clear-wrapper">\r\n                          <i\r\n                            class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                            aria-hidden="true"\r\n                            (click)="clearItemPn()"\r\n                          ></i>\r\n                        </div>\r\n                        <div class="btn-search-wrapper">\r\n                          <i\r\n                            class="fa fa-fw fa-search aw-icon btn-search"\r\n                            aria-hidden="true"\r\n                            (click)="openItemPnDialog()"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <h4 class="section-title">{{ componentData.componentId + ".asset" | translate }}</h4>\r\n\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".pn" | translate }}</label>\r\n\r\n                      <div class="form-control form-control-with-modal">\r\n                        <div class="form-control-data" (click)="openAssetPnDialog()">\r\n                          {{ selectedAssetPn?.pnCode }}\r\n                        </div>\r\n\r\n                        <div *ngIf="selectedAssetPn" class="btn-clear-wrapper">\r\n                          <i\r\n                            class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                            aria-hidden="true"\r\n                            (click)="clearAssetPn()"\r\n                          ></i>\r\n                        </div>\r\n                        <div class="btn-search-wrapper">\r\n                          <i\r\n                            class="fa fa-fw fa-search aw-icon btn-search"\r\n                            aria-hidden="true"\r\n                            (click)="openAssetPnDialog()"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".sn" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input class="aw-input" type="text" [(ngModel)]="selectedSn" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".packagingNumber" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input class="aw-input" type="text" [(ngModel)]="selectedBatchNumber" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group"></div>\r\n                  </div>\r\n\r\n                  <div class="row">\r\n                    <div class="form-group flex--3">\r\n                      <label class="form-label">{{ componentData.componentId + ".designation" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input class="aw-input" type="text" [(ngModel)]="selectedDesignation" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="advanced-criteria" [ngClass]="{ \'display--none\': !advancedCriteriaVisible }">\r\n                    <div class="section">\r\n                      <h4 class="section-title">{{ componentData.componentId + ".referenceDocument" | translate }}</h4>\r\n\r\n                      <div class="section-content">\r\n                        <div class="row">\r\n                          <div class="form-group">\r\n                            <label class="form-label">{{ getComponentName() + ".documentType" | translate }} </label>\r\n\r\n                            <div class="form-control">\r\n                              <p-dropdown\r\n                                class="aw-dropdown fixed-width"\r\n                                placeholder="&nbsp;"\r\n                                [options]="documentTypes"\r\n                                [showClear]="true"\r\n                                [(ngModel)]="selectedDocumentType"\r\n                              ></p-dropdown>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class="form-group">\r\n                            <label class="form-label">\r\n                              {{ componentData.componentId + ".documentNumber" | translate }}\r\n                            </label>\r\n\r\n                            <div class="form-control">\r\n                              <input\r\n                                class="aw-input"\r\n                                type="text"\r\n                                [disabled]="!selectedDocumentType"\r\n                                [(ngModel)]="selectedDocumentCode"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class="form-group flex--2"></div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row search-criteria-footer">\r\n                    <button mat-button (click)="advancedCriteriaVisible = !advancedCriteriaVisible">\r\n                      <ng-container *ngIf="advancedCriteriaVisible">\r\n                        <mat-icon>remove</mat-icon>\r\n                        {{ "global.collapseCriteria" | translate }}\r\n                      </ng-container>\r\n                      <ng-container *ngIf="!advancedCriteriaVisible">\r\n                        <mat-icon>add</mat-icon>\r\n                        {{ "global.expandCriteria" | translate }}\r\n                      </ng-container>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row search-criteria-footer">\r\n                    <div class="search-actions">\r\n                      <button\r\n                        appKeyPress\r\n                        mat-raised-button\r\n                        color="primary"\r\n                        type="button"\r\n                        [disabled]="!canSearch()"\r\n                        [keyCode]="\'Enter\'"\r\n                        (click)="search()"\r\n                        (keyPress)="search()"\r\n                      >\r\n                        {{ "global.toSearch" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.results" | translate }} ({{ dfTable ? dfTable.length : 0 }})</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                #ptableResult\r\n                class="aw-table2"\r\n                [columns]="dfTableColumns"\r\n                [resizableColumns]="true"\r\n                [scrollable]="true"\r\n                [value]="dfTable"\r\n                [(selection)]="selectedDfs"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!dfTableLoading"> &nbsp;</span>\r\n\r\n                  <div *ngIf="dfTableLoading" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedDfs.length > 0 }">\r\n                    <div class="aw-table-global-filter">\r\n                      <label class="aw-table-global-filter-label">\r\n                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        class="aw-table-global-filter-input"\r\n                        type="text"\r\n                        placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                        (input)="ptableResult.filterGlobal($event.target.value, \'contains\')"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class="aw-table-actions">\r\n                      <button\r\n                        mat-raised-button\r\n                        color="warn"\r\n                        type="button"\r\n                        (click)="deleteDf()"\r\n                        *ngIf="selectedDfs.length > 0"\r\n                      >\r\n                        {{ "global.delete" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        mat-raised-button\r\n                        type="button"\r\n                        (click)="openDf(selectedDfs[0]._obj)"\r\n                        *ngIf="selectedDfs.length == 1"\r\n                      >\r\n                        {{ "open" | translate }}\r\n                      </button>\r\n                    </div>\r\n\r\n                    <div class="aw-table-icon-actions">\r\n                      <i\r\n                        aria-hidden="true"\r\n                        class="fa fa-fw aw-icon aw-icon-with-border"\r\n                        [ngClass]="{\r\n                          \'fa-th-list\': dfTableViewMode == viewMode.COLLAPSE,\r\n                          \'fa-list\': dfTableViewMode == viewMode.EXPAND\r\n                        }"\r\n                        (click)="toogleViewMode()"\r\n                        *ngIf="dfTable.length > 0"\r\n                        pTooltip="{{ \'GoodsReceiptSearchComponent.changedView\' | translate }}"\r\n                        tooltipPosition="top"\r\n                      ></i>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col class="aw-table-checkbox-wrapper" />\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th class="aw-table-checkbox-wrapper">\r\n                      <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ componentData.componentId + "." + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td class="aw-table-checkbox-wrapper">\r\n                      <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      <ng-container *ngSwitchCase="\'receptionFile\'">\r\n                        <div class="bold">\r\n                          <a (click)="openDf(rowData[\'_obj\'])">{{ rowData["code"] }}</a>\r\n                        </div>\r\n\r\n                        <div class="italic">\r\n                          {{ rowData["designation"] | extractTranslation }}\r\n                        </div>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngSwitchCase="\'referenceDocument\'">\r\n                        <div class="bold">\r\n                          <a (click)="openDocument(rowData)">{{ rowData["docCode"] }}</a>\r\n                        </div>\r\n\r\n                        <div class="italic">\r\n                          {{ rowData["docType"] }}\r\n                        </div>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngSwitchCase="\'sender\'">\r\n                        <div class="bold">\r\n                          {{ rowData["shipperSiteName"] }}\r\n                        </div>\r\n\r\n                        <div class="italic">\r\n                          {{ rowData["shipperWarehouseName"] }}\r\n                        </div>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngSwitchCase="\'recipient\'">\r\n                        <div class="bold">\r\n                          {{ rowData["recipientSiteName"] }}\r\n                        </div>\r\n\r\n                        <div class="italic">\r\n                          {{ rowData["recipientWarehouseName"] }}\r\n                        </div>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngSwitchCase="\'articles\'">\r\n                        <ng-container\r\n                          *ngIf="dfTableViewMode == viewMode.COLLAPSE && rowData[\'itemsNb\'] > 1; else articleTemplate"\r\n                        >\r\n                          {{ rowData["itemsNb"] }} {{ "items" | translate }}\r\n                        </ng-container>\r\n                        <ng-template #articleTemplate>\r\n                          <div class="bold">\r\n                            <a (click)="openArticle(rowData[\'itemPn\'])">{{ rowData["itemPn"] }}</a>\r\n                          </div>\r\n\r\n                          <div class="italic">\r\n                            {{ rowData["itemDesignation"] }}\r\n                          </div>\r\n                        </ng-template>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngSwitchCase="\'quantity\'">\r\n                        <span class="bold">\r\n                          {{ rowData["quantity"] }}\r\n                        </span>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngSwitchCase="\'status\'">\r\n                        <div class="bold">\r\n                          {{ rowData["status"] | formatSelectOption: dfStatuses }}\r\n                        </div>\r\n\r\n                        <div>\r\n                          {{ rowData["statusDate"] | date: appConstants.JS_DATE }}\r\n                        </div>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngSwitchCase="\'expectedOn\'">\r\n                        <span class="bold">\r\n                          {{ rowData["plannedDate"] | date: appConstants.JS_DATE }}\r\n                        </span>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngSwitchCase="\'situation\'">\r\n                        <span\r\n                          class="alert alert--nok"\r\n                          *ngIf="rowData[\'criticality\'] === awPropertiesConstants.LOGISTICAL_CRITICALITY_IMMEDIATE"\r\n                        >\r\n                          {{ componentData.componentId + ".immediate" | translate }}\r\n                        </span>\r\n                        <span\r\n                          class="alert alert--warning"\r\n                          *ngIf="rowData[\'criticality\'] === awPropertiesConstants.LOGISTICAL_CRITICALITY_URGENT"\r\n                        >\r\n                          {{ componentData.componentId + ".urgent" | translate }}\r\n                        </span>\r\n                        <span\r\n                          class="alert alert--ok"\r\n                          *ngIf="rowData[\'criticality\'] === awPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE"\r\n                        >\r\n                          {{ componentData.componentId + ".routine" | translate }}\r\n                        </span>\r\n                      </ng-container>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-dialog-create-receipt\r\n    [(display)]="createDialogVisible"\r\n    (onValidate)="openDf($event)"\r\n    [contextComponent]="getCurrentComponentContext"\r\n    *ngIf="createDialogVisible"\r\n  ></aw-dialog-create-receipt>\r\n\r\n  <aw-goods-receipt-scan\r\n    [(display)]="packageScanDialogVisible"\r\n    (onValidate)="loadByPackageCode($event)"\r\n    *ngIf="packageScanDialogVisible"\r\n  ></aw-goods-receipt-scan>\r\n\r\n  <aw-goods-receipt-scan-asset\r\n    [(display)]="assetScanDialogVisible"\r\n    (onValidate)="loadByAssetBatchNumber($event)"\r\n    *ngIf="assetScanDialogVisible"\r\n  ></aw-goods-receipt-scan-asset>\r\n\r\n  <aw-dialog-search-pn\r\n    [showPartTypeSelection]="true"\r\n    [(display)]="assetPnDialogVisible"\r\n    (onSelected)="onSelectAssetPn($event)"\r\n    *ngIf="assetPnDialogVisible"\r\n  ></aw-dialog-search-pn>\r\n\r\n  <aw-dialog-search-pn\r\n    [showPartTypeSelection]="true"\r\n    [(display)]="itemPnDialogVisible"\r\n    (onSelected)="onSelectItemPn($event)"\r\n    *ngIf="itemPnDialogVisible"\r\n  ></aw-dialog-search-pn>\r\n</div>\r\n\r\n<!-- <aw-dialog-search-customer\r\n    *ngIf="showCustomerDialog"\r\n    [(display)]="showCustomerDialog"\r\n    [customer-code]="selectedPartnerCode"\r\n    (onSelected)="onSelectedCustomer($event)"\r\n  ></aw-dialog-search-customer> -->\r\n\r\n<!-- <div class="row" *ngIf="selectedProvider === component.EXTERNAL_SENDER">\r\n  <div class="form-group">\r\n    <label class="form-label">{{ componentData.componentId + ".partner" | translate }}</label>\r\n\r\n    <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n      <div class="form-control-data" (click)="openCustomerDialog()">\r\n        {{ selectedPartner }}\r\n        <span *ngIf="selectedPartner">({{ selectedPartner }})</span>\r\n      </div>\r\n\r\n      <div *ngIf="selectedPartnerCode" class="btn-clear-wrapper">\r\n        <i\r\n          class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n          aria-hidden="true"\r\n          (click)="resetCustomerCode()"\r\n        ></i>\r\n      </div>\r\n      <div class="btn-search-wrapper">\r\n        <i\r\n          class="fa fa-fw fa-search aw-icon btn-search"\r\n          aria-hidden="true"\r\n          (click)="openCustomerDialog()"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/search/goods-receipt-search.component.scss':
      /*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/search/goods-receipt-search.component.scss ***!
  \*****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .alert {\n  font-weight: 600;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvZ29vZHMtcmVjZWlwdC9zZWFyY2gvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcZ29vZHMtcmVjZWlwdFxcc2VhcmNoXFxnb29kcy1yZWNlaXB0LXNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL2dvb2RzLXJlY2VpcHQvc2VhcmNoL2dvb2RzLXJlY2VpcHQtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5hbGVydCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/search/goods-receipt-search.component.ts':
      /*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/search/goods-receipt-search.component.ts ***!
  \***************************************************************************************/
      /*! exports provided: ComponentContext, GoodsReceiptSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ComponentContext', function() {
          return ComponentContext;
        });
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'GoodsReceiptSearchComponent',
          function() {
            return GoodsReceiptSearchComponent;
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
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/utils/number-utils */ './src/app/shared/utils/number-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
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

        var ComponentContext;
        (function(ComponentContext) {
          ComponentContext[(ComponentContext['LOCALE'] = 0)] = 'LOCALE';
          ComponentContext[(ComponentContext['EXTERNAL'] = 1)] = 'EXTERNAL';
        })(ComponentContext || (ComponentContext = {}));
        var DocumentType;
        (function(DocumentType) {
          DocumentType[(DocumentType['DOCUMENT_TYPE_SHIPPING_FOLDER'] = 1)] = 'DOCUMENT_TYPE_SHIPPING_FOLDER';
          DocumentType[(DocumentType['DOCUMENT_TYPE_TRANSFER_ORDER'] = 2)] = 'DOCUMENT_TYPE_TRANSFER_ORDER';
        })(DocumentType || (DocumentType = {}));
        var ViewMode;
        (function(ViewMode) {
          ViewMode[(ViewMode['COLLAPSE'] = 0)] = 'COLLAPSE';
          ViewMode[(ViewMode['EXPAND'] = 1)] = 'EXPAND';
        })(ViewMode || (ViewMode = {}));
        var GoodsReceiptSearchComponent = /** @class */ (function(_super) {
          __extends(GoodsReceiptSearchComponent, _super);
          function GoodsReceiptSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            translateService,
            dfSearchService,
            logisticsService,
            propertiesService,
            transferOrderService,
            extractTranslationPipe
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.sessionService = sessionService;
            _this.translateService = translateService;
            _this.dfSearchService = dfSearchService;
            _this.logisticsService = logisticsService;
            _this.propertiesService = propertiesService;
            _this.transferOrderService = transferOrderService;
            _this.extractTranslationPipe = extractTranslationPipe;
            _this.appConstants = _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__['AppConstants'];
            _this.awPropertiesConstants =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants'];
            _this.viewMode = ViewMode;
            _this.init();
            return _this;
          }
          GoodsReceiptSearchComponent.prototype.canSearch = function() {
            return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_13__['ObjectUtils'].isDefined(
              this.selectedRecipientSite
            );
          };
          GoodsReceiptSearchComponent.prototype.clearAssetPn = function() {
            this.selectedAssetPn = undefined;
          };
          GoodsReceiptSearchComponent.prototype.clearItemPn = function() {
            this.selectedItemPn = undefined;
          };
          GoodsReceiptSearchComponent.prototype.create = function() {
            this.createDialogVisible = true;
          };
          GoodsReceiptSearchComponent.prototype.deleteDf = function() {
            var _this = this;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])(
              this.selectedDfs.map(function(df) {
                return _this.logisticsService.deleteDeliveryFolder({
                  id: df._obj.id
                });
              })
            ).subscribe({
              next: function() {
                _this.search();
              }
            });
          };
          GoodsReceiptSearchComponent.prototype.onChangeRecipientSite = function() {
            this.onChangeRecipientWarehouseCategory();
          };
          GoodsReceiptSearchComponent.prototype.onChangeRecipientWarehouseCategory = function() {
            var _this = this;
            this.unselectRecipientWarehouse();
            if (this.selectedRecipientSite) {
              this.loadWareHouses(this.selectedRecipientSite, this.selectedRecipientWarehouseCategory).subscribe({
                next: function(warehouses) {
                  _this.recipientWarehouses = warehouses;
                }
              });
            }
          };
          GoodsReceiptSearchComponent.prototype.onChangeShipperSite = function() {
            this.onChangeShipperWarehouseCategory();
          };
          GoodsReceiptSearchComponent.prototype.onChangeShipperWarehouseCategory = function() {
            var _this = this;
            this.unselectShipperWarehouse();
            if (this.selectedShipperSite) {
              this.loadWareHouses(this.selectedShipperSite, this.selectedShipperWarehouseCategory).subscribe({
                next: function(warehouses) {
                  _this.shipperWarehouses = warehouses;
                }
              });
            }
          };
          GoodsReceiptSearchComponent.prototype.loadByAssetBatchNumber = function(batchNumber) {
            var _this = this;
            this.logisticsService
              .findDeliveryFoldersByCriteria({
                batchNumber: batchNumber,
                folderStatusExcluded: [
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                    .RECEIPT_FOLDER_STATUS_PERFORMED
                ],
                deliveryFolder: {}
              })
              .subscribe({
                next: function(bidtDeliveryFolders) {
                  if (!bidtDeliveryFolders || bidtDeliveryFolders.length === 0) {
                    // No match
                    _this.messageService.showErrorMessage(_this.getTranslateKey('noMatchingDeliveryFolder'));
                  } else if (bidtDeliveryFolders.length === 1) {
                    // One match
                    var bidtDeliveryFolder_1 = bidtDeliveryFolders[0];
                    if (
                      !_this.userSiteId ||
                      !_this.userWarehouseId ||
                      !bidtDeliveryFolder_1.bidtSiteReceiver ||
                      !bidtDeliveryFolder_1.bidtWarehouseReceiver ||
                      _this.userSiteId !== bidtDeliveryFolder_1.bidtSiteReceiver.siteId ||
                      _this.userWarehouseId !== bidtDeliveryFolder_1.bidtWarehouseReceiver.wareHouseId
                    ) {
                      _this.messageService.showErrorMessage(_this.getTranslateKey('missingRights'));
                    } else {
                      var bidtDfItems = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                        .orEmpty(bidtDeliveryFolder_1.bidtDfItems)
                        .filter(function(item) {
                          return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                            .orEmpty(item.bidtStockMvts)
                            .some(function(stockMvt) {
                              return stockMvt.stockMvtBatchNumber === batchNumber;
                            });
                        });
                      var assetsToUpdate$ = bidtDfItems
                        .map(function(bidtDfItem) {
                          var bidtPackage = bidtDfItem.bidtPackage;
                          var bidtPackageOperation = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                            .orEmpty(bidtPackage.bidtPackageOperations)
                            .find(function(operation) {
                              return (
                                operation.packopeDesignation ===
                                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__[
                                  'AWPropertiesConstants'
                                ].LOGISTICAL_OPERATION_PHYSICAL_RECEIPT
                              );
                            });
                          var bidtStockMvt = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                            .orEmpty(bidtDfItem.bidtStockMvts)
                            .find(function(stockMvt) {
                              return stockMvt.stockMvtBatchNumber === batchNumber;
                            });
                          var bidtStockMvtOperation = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__[
                            'ListUtils'
                          ]
                            .orEmpty(bidtStockMvt.bidtStockMvtOperations)
                            .find(function(operation) {
                              return (
                                operation.smoDesignation ===
                                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__[
                                  'AWPropertiesConstants'
                                ].LOGISTICAL_OPERATION_VISUAL_CONTROL
                              );
                            });
                          if (
                            bidtDeliveryFolder_1.dfStatus !==
                              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__[
                                'AWPropertiesConstants'
                              ].RECEIPT_FOLDER_STATUS_DRAFT &&
                            !!bidtPackageOperation &&
                            bidtPackageOperation.packopeStatus ===
                              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__[
                                'AWPropertiesConstants'
                              ].LOGISTICAL_OPERATION_STATUS_PERFORMED &&
                            !!bidtStockMvtOperation &&
                            bidtStockMvtOperation.smoStatus !==
                              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__[
                                'AWPropertiesConstants'
                              ].LOGISTICAL_OPERATION_STATUS_PERFORMED
                          ) {
                            return _this.logisticsService.performStockMovementOperations([
                              {
                                bidtDfItem: bidtDfItem,
                                bidtStockMvt: bidtStockMvt,
                                newStatus:
                                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__[
                                    'AWPropertiesConstants'
                                  ].LOGISTICAL_OPERATION_STATUS_PERFORMED,
                                operationId: bidtStockMvtOperation.id
                              }
                            ]);
                          } else {
                            return undefined;
                          }
                        })
                        .filter(function(elt) {
                          return elt !== undefined;
                        });
                      // Perform visual check on given asset
                      if (assetsToUpdate$.length > 0) {
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])(assetsToUpdate$).subscribe(function() {
                          _this.messageService.showSuccessMessage(_this.getTranslateKey('visualCheckPerformed'));
                          _this.openDf({ id: bidtDeliveryFolder_1.id });
                        });
                      } else {
                        _this.openDf({ id: bidtDeliveryFolder_1.id });
                      }
                    }
                  } else {
                    // Several matches
                    _this.dfs = bidtDeliveryFolders;
                    _this.createDfTable();
                    _super.prototype.differ.call(_this, function() {
                      _super.prototype.scrollToAnchor.call(_this, _this.resultsContainerAnchor);
                    });
                  }
                }
              });
          };
          GoodsReceiptSearchComponent.prototype.loadByPackageCode = function(packageCode) {
            var _this = this;
            this.logisticsService.findDeliveryFoldersByPackageCode(packageCode).subscribe({
              next: function(bidtDeliveryFolders) {
                if (!bidtDeliveryFolders || bidtDeliveryFolders.length === 0) {
                  // No match
                  _this.messageService.showErrorMessage(_this.getTranslateKey('noMatchingDeliveryFolder'));
                } else if (bidtDeliveryFolders.length === 1) {
                  // One match
                  if (
                    !_this.userSiteId ||
                    !_this.userWarehouseId ||
                    !bidtDeliveryFolders[0].bidtSiteReceiver ||
                    !bidtDeliveryFolders[0].bidtWarehouseReceiver ||
                    _this.userSiteId !== bidtDeliveryFolders[0].bidtSiteReceiver.siteId ||
                    _this.userWarehouseId !== bidtDeliveryFolders[0].bidtWarehouseReceiver.wareHouseId
                  ) {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('missingRights'));
                  } else {
                    var bidtPackage = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                      .orEmpty(bidtDeliveryFolders[0].bidtDfItems)
                      .find(function(dfItem) {
                        return (
                          !!dfItem.bidtPackage &&
                          (dfItem.bidtPackage.packageCode === packageCode ||
                            dfItem.bidtPackage.externalPackageCode === packageCode)
                        );
                      }).bidtPackage;
                    var bidtPackageOperation = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                      .orEmpty(bidtPackage.bidtPackageOperations)
                      .find(function(operation) {
                        return (
                          operation.packopeDesignation ===
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__[
                            'AWPropertiesConstants'
                          ].LOGISTICAL_OPERATION_PHYSICAL_RECEIPT
                        );
                      });
                    // Perform physical receipt if delivery folder is not draft
                    if (
                      bidtDeliveryFolders[0].dfStatus !==
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                          .RECEIPT_FOLDER_STATUS_DRAFT &&
                      !!bidtPackageOperation &&
                      bidtPackageOperation.packopeStatus !==
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                          .LOGISTICAL_OPERATION_STATUS_PERFORMED
                    ) {
                      _this.logisticsService
                        .performPackageOperations([
                          {
                            bidtDeliveryFolderDto: bidtDeliveryFolders[0],
                            newStatus:
                              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__[
                                'AWPropertiesConstants'
                              ].LOGISTICAL_OPERATION_STATUS_PERFORMED,
                            operationId: bidtPackageOperation.id
                          }
                        ])
                        .subscribe(function() {
                          _this.messageService.showSuccessMessage(_this.getTranslateKey('packageReceived'));
                          _this.openDf({ id: bidtDeliveryFolders[0].id });
                        });
                    } else {
                      _this.openDf({ id: bidtDeliveryFolders[0].id });
                    }
                  }
                } else {
                  // Several matches
                  _this.dfs = bidtDeliveryFolders;
                  _this.createDfTable();
                  _super.prototype.differ.call(_this, function() {
                    _super.prototype.scrollToAnchor.call(_this, _this.resultsContainerAnchor);
                  });
                }
              }
            });
          };
          GoodsReceiptSearchComponent.prototype.onSelectAssetPn = function(pn) {
            this.selectedAssetPn = pn;
          };
          GoodsReceiptSearchComponent.prototype.onSelectItemPn = function(pn) {
            this.selectedItemPn = pn;
          };
          GoodsReceiptSearchComponent.prototype.openArticle = function(pn) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                  .LOG_MATERIAL_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read,
              objectId: this.serializationService.serialize({ pnCode: pn })
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          GoodsReceiptSearchComponent.prototype.openAssetPnDialog = function() {
            this.assetPnDialogVisible = true;
          };
          GoodsReceiptSearchComponent.prototype.openDf = function(df) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                  .LOG_GOODS_RECEIPT_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read,
              objectId: this.serializationService.serialize({ id: df.id })
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          GoodsReceiptSearchComponent.prototype.openItemPnDialog = function() {
            this.itemPnDialogVisible = true;
          };
          GoodsReceiptSearchComponent.prototype.openDocument = function(dfRow) {
            var _this = this;
            if (dfRow._obj.bidtTransferOrder) {
              // Transfer Order
              // TODO: add objectId
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                    .LOG_TRANSFER_ORDER_FORM,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            } else if (dfRow.docCode) {
              var searchCriteria = {
                folderStatusExcluded: [],
                deliveryFolder: {
                  dfCode: dfRow.docCode
                }
              };
              this.logisticsService
                .findDeliveryFoldersByCriteria(searchCriteria)
                .subscribe(function(deliveryFolderList) {
                  // Delivery Folder
                  var data = {
                    id: _this.tabService.generateId(),
                    componentId:
                      _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
                        .LOG_GOODS_SHIPMENT_FORM,
                    openMode:
                      _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read,
                    objectId: _this.serializationService.serialize({ id: deliveryFolderList[0].id })
                  };
                  var labelKey = 'transaction.' + data.componentId;
                  _this.tabService.open(_this.tabService.create(data, labelKey, true));
                });
            }
          };
          GoodsReceiptSearchComponent.prototype.scanPackage = function() {
            this.packageScanDialogVisible = true;
          };
          GoodsReceiptSearchComponent.prototype.scanAsset = function() {
            this.assetScanDialogVisible = true;
          };
          GoodsReceiptSearchComponent.prototype.search = function() {
            var _this = this;
            this.dfs = [];
            this.dfTableLoading = true;
            this.selectedDfs = [];
            var searchCriteria = {
              assetDesignation: this.selectedDesignation,
              assetPn: this.selectedAssetPn ? this.selectedAssetPn.pnCode : undefined,
              batchNumber: this.selectedBatchNumber,
              folderStatusExcluded: this.selectedStatus
                ? []
                : [
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                      .RECEIPT_FOLDER_STATUS_PERFORMED
                  ],
              itemPn: this.selectedItemPn ? this.selectedItemPn.pnCode : undefined,
              packageCode: this.selectedPackageCode,
              sn: this.selectedSn,
              shippingFolderCode:
                this.selectedDocumentType === DocumentType.DOCUMENT_TYPE_SHIPPING_FOLDER
                  ? this.selectedDocumentCode
                  : undefined,
              torCode:
                this.selectedDocumentType === DocumentType.DOCUMENT_TYPE_TRANSFER_ORDER
                  ? this.selectedDocumentCode
                  : undefined,
              deliveryFolder: {
                bidtDfTypeId: this.selectedDfType,
                bidtSiteByBidtSiteReceiverId: this.selectedRecipientSite,
                bidtSiteByBidtSiteSenderId: this.selectedShipperSite,
                bidtWarehouseByBidtWarehouseReceiverId: this.selectedRecipientWarehouse,
                bidtWarehouseByBidtWarehouseSenderId: this.selectedShipperWarehouse,
                criticality: this.selectedCriticality,
                dfCode: this.selectedDfCode,
                dfStatus: this.selectedStatus,
                plannedDate: this.selectedPlannedDate
                  ? moment__WEBPACK_IMPORTED_MODULE_1__(this.selectedPlannedDate)
                      .endOf('day')
                      .toDate()
                  : undefined
              },
              folderCategorie: this.selectedDfType
                ? undefined
                : _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                    .DELIVERY_CATEGORY_RECEIPT,
              transferType:
                this.getCurrentComponentContext === ComponentContext.LOCALE
                  ? [
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                        .MM_TRANSFER_TYPE_INTRA_SITE_KEY
                    ]
                  : [
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                        .MM_TRANSFER_TYPE_INTER_SITE_KEY,
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                        .MM_TRANSFER_TYPE_EXTERNAL_KEY
                    ]
            };
            this.logisticsService
              .findDeliveryFoldersByCriteria(searchCriteria)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                  _this.dfTableLoading = false;
                })
              )
              .subscribe({
                next: function(dfs) {
                  _this.dfs = dfs;
                  _this.createDfTable();
                  _super.prototype.differ.call(_this, function() {
                    _super.prototype.scrollToAnchor.call(_this, _this.resultsContainerAnchor);
                  });
                }
              });
          };
          GoodsReceiptSearchComponent.prototype.toogleViewMode = function() {
            this.dfTableViewMode = this.dfTableViewMode === ViewMode.COLLAPSE ? ViewMode.EXPAND : ViewMode.COLLAPSE;
            this.createDfTable();
          };
          // ////////////////////////////////////////////////////////////////////////////
          GoodsReceiptSearchComponent.prototype.createDfTable = function() {
            var _this = this;
            if (this.dfTableViewMode === ViewMode.COLLAPSE) {
              this.dfTable = this.dfs.map(function(df) {
                return _this.createDfTableRowForCollapseView(df);
              });
            } else {
              this.dfTable = this.dfs
                .map(function(df) {
                  return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                    .orEmpty(df.bidtDfItems)
                    .map(function(dfItem) {
                      return _this.createDfTableRowForExpandView(df, dfItem);
                    });
                })
                .reduce(function(acc, curr) {
                  return acc.concat(curr);
                }, []);
            }
          };
          GoodsReceiptSearchComponent.prototype.createDfTableRow = function(df) {
            var dfRow = {
              code: df.dfCode,
              criticality: df.criticality,
              designation: df.bidtDfType ? df.bidtDfType.dftDesignation : '',
              plannedDate: df.plannedDate,
              recipientSiteName: df.bidtSiteReceiver ? df.bidtSiteReceiver.siteName : '',
              recipientWarehouseName: df.bidtWarehouseReceiver ? df.bidtWarehouseReceiver.whName : '',
              shipperSiteName: df.bidtSiteSender ? df.bidtSiteSender.siteName : '',
              shipperWarehouseName: df.bidtWarehouseSender ? df.bidtWarehouseSender.whName : '',
              status: df.dfStatus,
              statusDate: df.statusDate,
              _obj: df
            };
            this.retrieveDocData(df, dfRow);
            return dfRow;
          };
          GoodsReceiptSearchComponent.prototype.createDfTableRowForCollapseView = function(df) {
            var items = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils'].orEmpty(df.bidtDfItems);
            var quantity = items
              .filter(function(item) {
                return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__['StringUtils'].isNullOrEmpty(
                  item.quantity
                );
              })
              .map(function(item) {
                return _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_12__['NumberUtils'].fromString(
                  item.quantity
                );
              })
              .reduce(function(a, b) {
                return a + b;
              }, 0);
            var itemDesignation;
            var itemPn;
            if (items.length === 1 && items[0] && items[0].birePn) {
              itemDesignation = items[0].birePn.articleDesignation;
              itemPn = items[0].birePn.pnCode;
            }
            return __assign(
              { itemDesignation: itemDesignation, itemPn: itemPn, quantity: quantity, itemsNb: items.length },
              this.createDfTableRow(df)
            );
          };
          GoodsReceiptSearchComponent.prototype.createDfTableRowForExpandView = function(df, dfItem) {
            var itemDesignation;
            var itemPn;
            var quantity = 0;
            if (dfItem && dfItem.birePn) {
              itemDesignation = dfItem.birePn.articleDesignation;
              itemPn = dfItem.birePn.pnCode;
              quantity = dfItem.quantity
                ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_12__['NumberUtils'].fromString(dfItem.quantity)
                : 0;
            }
            return __assign(
              { itemDesignation: itemDesignation, itemPn: itemPn, quantity: quantity },
              this.createDfTableRow(df)
            );
          };
          GoodsReceiptSearchComponent.prototype.formatSites = function(sites) {
            return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
              .orEmpty(sites)
              .map(function(site) {
                return {
                  label: site.siteCode + ' - ' + site.siteName,
                  value: site.siteId
                };
              })
              .sort(function(s1, s2) {
                return s1.label.localeCompare(s2.label);
              });
          };
          GoodsReceiptSearchComponent.prototype.init = function() {
            var _this = this;
            this.criticalities = [];
            this.dfs = [];
            this.dfStatuses = [];
            this.dfTypes = [];
            this.documentTypes = [];
            this.recipientSites = [];
            this.recipientWarehouses = [];
            this.shipperSites = [];
            this.shipperWarehouses = [];
            this.warehouseCategories = [];
            this.selectedAssetPn = undefined;
            this.selectedBatchNumber = undefined;
            this.selectedCriticality = undefined;
            this.selectedDesignation = undefined;
            this.selectedDfCode = undefined;
            this.selectedDfType = undefined;
            this.selectedDocumentCode = undefined;
            this.selectedDocumentType = undefined;
            this.selectedItemPn = undefined;
            this.selectedPackageCode = undefined;
            this.selectedPlannedDate = undefined;
            this.selectedRecipientSite = undefined;
            this.selectedRecipientWarehouse = undefined;
            this.selectedRecipientWarehouseCategory = undefined;
            this.selectedShipperSite = undefined;
            this.selectedShipperWarehouse = undefined;
            this.selectedShipperWarehouseCategory = undefined;
            this.selectedSn = undefined;
            this.selectedStatus = undefined;
            this.dfTable = [];
            this.dfTableLoading = false;
            this.dfTableViewMode = ViewMode.COLLAPSE;
            this.selectedDfs = [];
            this.advancedCriteriaVisible = false;
            this.assetPnDialogVisible = false;
            this.createDialogVisible = false;
            this.itemPnDialogVisible = false;
            this.packageScanDialogVisible = false;
            this.assetScanDialogVisible = false;
            this.sessionService.getUserSiteId().subscribe({
              next: function(site) {
                _this.userSiteId = site ? site.siteId : undefined;
                _this.selectedRecipientSite = site ? site.siteId : undefined;
              }
            });
            this.sessionService.getUserWarehouseId().subscribe({
              next: function(warehouse) {
                _this.userWarehouseId = warehouse ? warehouse.wareHouseId : undefined;
                _this.selectedRecipientWarehouseCategory = warehouse ? warehouse.whCategory : undefined;
                _this.loadWareHouses(_this.selectedRecipientSite, _this.selectedRecipientWarehouseCategory).subscribe({
                  next: function(warehouses) {
                    _this.recipientWarehouses = warehouses;
                    if (warehouse && warehouse.wareHouseId) {
                      _this.selectedRecipientWarehouse = warehouse ? warehouse.wareHouseId : undefined;
                    }
                  }
                });
              }
            });
            this.loadCriticalities();
            this.loadDfStatuses();
            this.loadDfTypes();
            this.loadDocumentTypes();
            this.loadRecipientSites();
            this.loadShipperSites();
            this.loadWarehouseCategories();
            this.setDfTableColumns();
          };
          GoodsReceiptSearchComponent.prototype.loadCriticalities = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__['GenericPropertyConstants']
                  .LOGISTICAL_CRITICALITY_MAP
              )
              .subscribe({
                next: function(criticalities) {
                  _this.criticalities = __spread(
                    [
                      {
                        label: _this.translateService.instant(_this.getTranslateKey('all')),
                        value: undefined
                      }
                    ],
                    criticalities.map(function(criticality) {
                      return {
                        label: criticality.label,
                        value: criticality.value
                      };
                    })
                  );
                }
              });
          };
          GoodsReceiptSearchComponent.prototype.loadDfStatuses = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__['GenericPropertyConstants']
                  .RECEIPT_FOLDER_STATUS_MAP
              )
              .subscribe({
                next: function(dfStatuses) {
                  _this.dfStatuses = dfStatuses;
                }
              });
          };
          GoodsReceiptSearchComponent.prototype.loadDfTypes = function() {
            var _this = this;
            if (this.getCurrentComponentContext === ComponentContext.LOCALE) {
              this.logisticsService.findReceiptDfTypes().subscribe({
                next: function(dfTypes) {
                  _this.dfTypes = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                    .orEmpty(dfTypes)
                    .filter(function(dfType) {
                      return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__['StringUtils'].isNullOrEmpty(
                        dfType.dftDesignation
                      );
                    })
                    .filter(function(dfType) {
                      return (
                        dfType.transferType ===
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                          .MM_TRANSFER_TYPE_INTRA_SITE_KEY
                      );
                    })
                    .map(function(dfType) {
                      return {
                        label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__['StringUtils'].orEmpty(
                          _this.extractTranslationPipe.transform(dfType.dftDesignation)
                        ),
                        value: dfType.id
                      };
                    })
                    .sort(function(s1, s2) {
                      return s1.label.localeCompare(s2.label);
                    });
                  _this.selectedDfType = _this.dfTypes.length === 1 ? _this.dfTypes[0].value : undefined;
                }
              });
            } else if (this.getCurrentComponentContext === ComponentContext.EXTERNAL) {
              this.logisticsService.findReceiptDfTypes().subscribe({
                next: function(dfTypes) {
                  _this.dfTypes = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                    .orEmpty(dfTypes)
                    .filter(function(dfType) {
                      return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__['StringUtils'].isNullOrEmpty(
                        dfType.dftDesignation
                      );
                    })
                    .filter(function(dfType) {
                      return (
                        dfType.transferType ===
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__[
                            'AWPropertiesConstants'
                          ].MM_TRANSFER_TYPE_INTER_SITE_KEY ||
                        dfType.transferType ===
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__[
                            'AWPropertiesConstants'
                          ].MM_TRANSFER_TYPE_EXTERNAL_KEY
                      );
                    })
                    .map(function(dfType) {
                      return {
                        label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__['StringUtils'].orEmpty(
                          _this.extractTranslationPipe.transform(dfType.dftDesignation)
                        ),
                        value: dfType.id
                      };
                    })
                    .sort(function(s1, s2) {
                      return s1.label.localeCompare(s2.label);
                    });
                  _this.selectedDfType = _this.dfTypes.length === 1 ? _this.dfTypes[0].value : undefined;
                }
              });
            }
            this.transferOrderService.fetchTypeList().subscribe(function(res) {
              _this.typeList = res;
            });
          };
          GoodsReceiptSearchComponent.prototype.loadDocumentTypes = function() {
            this.documentTypes = [
              {
                label: this.translateService.instant('shippingFolder'),
                value: DocumentType.DOCUMENT_TYPE_SHIPPING_FOLDER
              },
              {
                label: this.translateService.instant('transferOrder'),
                value: DocumentType.DOCUMENT_TYPE_TRANSFER_ORDER
              }
            ];
          };
          GoodsReceiptSearchComponent.prototype.loadRecipientSites = function() {
            var _this = this;
            this.dfSearchService.findAllSiteList().subscribe({
              next: function(sites) {
                _this.recipientSites = _this.formatSites(sites);
              }
            });
          };
          GoodsReceiptSearchComponent.prototype.loadShipperSites = function() {
            var _this = this;
            this.dfSearchService.findAllBireSite().subscribe({
              next: function(sites) {
                _this.shipperSites = _this.formatSites(sites);
              }
            });
          };
          GoodsReceiptSearchComponent.prototype.loadWarehouseCategories = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__['GenericPropertyConstants']
                  .WAREHOUSE_CATEGORY_MAP
              )
              .subscribe({
                next: function(warehouseCategories) {
                  _this.warehouseCategories = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                    .orEmpty(warehouseCategories)
                    .sort(function(s1, s2) {
                      return s1.value.localeCompare(s2.value);
                    });
                  var warehouseCategory =
                    _this.warehouseCategories.length > 0 ? _this.warehouseCategories[0].value : undefined;
                  _this.selectedRecipientWarehouseCategory = warehouseCategory;
                  _this.selectedShipperWarehouseCategory = warehouseCategory;
                }
              });
          };
          GoodsReceiptSearchComponent.prototype.loadWareHouses = function(site, warehouseCategory) {
            return this.dfSearchService.getWarehousesBySiteId(site).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(warehouses) {
                return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                  .orEmpty(warehouses)
                  .filter(function(warehouse) {
                    return warehouse.whCategory === warehouseCategory;
                  })
                  .map(function(warehouse) {
                    return {
                      label: warehouse.whCode + ' - ' + warehouse.whName,
                      value: warehouse.wareHouseId
                    };
                  })
                  .sort(function(s1, s2) {
                    return s1.label.localeCompare(s2.label);
                  });
              })
            );
          };
          GoodsReceiptSearchComponent.prototype.retrieveDocData = function(df, dfRow) {
            if (df.bidtTransferOrder) {
              dfRow.docCode = df.bidtTransferOrder.torCode;
              dfRow.docType = this.typeList
                .filter(function(ty) {
                  return ty.value.toString() === df.bidtTransferOrder.torType;
                })
                .map(function(res) {
                  return res.label;
                })[0];
            } else if (df.externalDeliveryNumber) {
              dfRow.docCode = df.externalDeliveryNumber;
            }
          };
          GoodsReceiptSearchComponent.prototype.setDfTableColumns = function() {
            this.dfTableColumns = [
              { field: 'receptionFile', alignment: 'left', width: '12.5%' },
              { field: 'referenceDocument', alignment: 'left', width: '12.5%' },
              { field: 'sender', alignment: 'left', width: '12.5%' },
              { field: 'recipient', alignment: 'left', width: '12.5%' },
              { field: 'articles', alignment: 'left', width: '20%' },
              { field: 'quantity', alignment: 'left', width: '7.5%' },
              { field: 'status', alignment: 'left', width: '7.5%' },
              { field: 'expectedOn', alignment: 'left', width: '7.5%' },
              { field: 'situation', alignment: 'left', width: '7.5%' }
            ];
          };
          GoodsReceiptSearchComponent.prototype.unselectRecipientWarehouse = function() {
            this.recipientWarehouses = [];
            this.selectedRecipientWarehouse = undefined;
          };
          GoodsReceiptSearchComponent.prototype.unselectShipperWarehouse = function() {
            this.shipperWarehouses = [];
            this.selectedShipperWarehouse = undefined;
          };
          GoodsReceiptSearchComponent.prototype.isCreateButtonnIsVisible = function() {
            return this.sessionService.hasUserRightByUseCase(
              _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_6__['BidoFunctionTypeConstants']
                .UC_MM_RECEIVING,
              _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_6__['BidoFunctionTypeConstants']
                .DEGREE_MANAGE
            );
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('resultsContainerAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            GoodsReceiptSearchComponent.prototype,
            'resultsContainerAnchor',
            void 0
          );
          return GoodsReceiptSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/search/local-good-receipt-search.components.ts':
      /*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/search/local-good-receipt-search.components.ts ***!
  \*********************************************************************************************/
      /*! exports provided: LocalGoodReceiptSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'LocalGoodReceiptSearchComponent',
          function() {
            return LocalGoodReceiptSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/pipes/extract-translation.pipe */ './src/app/shared/pipes/extract-translation.pipe.ts'
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
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../goods-receipt/delivery-folder-search.service */ './src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts'
        );
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _transfer_order_shared_transfer_order_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../transfer-order/shared/transfer-order-service */ './src/app/main/logistics/transfer-order/shared/transfer-order-service.ts'
        );
        /* harmony import */ var _goods_receipt_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./goods-receipt-search.component */ './src/app/main/logistics/goods-receipt/search/goods-receipt-search.component.ts'
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

        var LocalGoodReceiptSearchComponent = /** @class */ (function(_super) {
          __extends(LocalGoodReceiptSearchComponent, _super);
          function LocalGoodReceiptSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            translateService,
            dfSearchService,
            logisticsService,
            propertiesService,
            transferOrderService,
            extractTranslationPipe
          ) {
            var _this =
              _super.call(
                this,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                sessionService,
                translateService,
                dfSearchService,
                logisticsService,
                propertiesService,
                transferOrderService,
                extractTranslationPipe
              ) || this;
            _this.sessionService = sessionService;
            _this.translateService = translateService;
            _this.dfSearchService = dfSearchService;
            _this.logisticsService = logisticsService;
            _this.propertiesService = propertiesService;
            _this.transferOrderService = transferOrderService;
            _this.extractTranslationPipe = extractTranslationPipe;
            return _this;
          }
          LocalGoodReceiptSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .LOG_LOCAL_GOODS_RECEIPT_SEARCH;
          };
          Object.defineProperty(LocalGoodReceiptSearchComponent.prototype, 'getCurrentComponentContext', {
            get: function() {
              return _goods_receipt_search_component__WEBPACK_IMPORTED_MODULE_14__['ComponentContext'].LOCALE;
            },
            enumerable: true,
            configurable: true
          });
          LocalGoodReceiptSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-local-goods-receipt-search',
                template: __webpack_require__(
                  /*! ./goods-receipt-search.component.html */ './src/app/main/logistics/goods-receipt/search/goods-receipt-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./goods-receipt-search.component.scss */ './src/app/main/logistics/goods-receipt/search/goods-receipt-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__['SessionService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_11__[
                  'DeliveryFolderSearchService'
                ],
                _logistics_service__WEBPACK_IMPORTED_MODULE_12__['LogisticsService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__['PropertiesService'],
                _transfer_order_shared_transfer_order_service__WEBPACK_IMPORTED_MODULE_13__['TransferOrderService'],
                _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_3__['ExtractTranslationPipe']
              ])
            ],
            LocalGoodReceiptSearchComponent
          );
          return LocalGoodReceiptSearchComponent;
        })(_goods_receipt_search_component__WEBPACK_IMPORTED_MODULE_14__['GoodsReceiptSearchComponent']);

        /***/
      },

    /***/ './src/app/main/overlay/overlay.service.ts':
      /*!*************************************************!*\
  !*** ./src/app/main/overlay/overlay.service.ts ***!
  \*************************************************/
      /*! exports provided: OverlayService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'OverlayService', function() {
          return OverlayService;
        });
        /* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/cdk/overlay */ './node_modules/@angular/cdk/esm5/overlay.es5.js'
        );
        /* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/cdk/portal */ './node_modules/@angular/cdk/esm5/portal.es5.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _overlay_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./overlay-ref */ './src/app/main/overlay/overlay-ref.ts'
        );
        /* harmony import */ var _overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./overlay.component */ './src/app/main/overlay/overlay.component.ts'
        );
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

        var OverlayService = /** @class */ (function() {
          function OverlayService(_injector, _overlay) {
            this._injector = _injector;
            this._overlay = _overlay;
          }
          // //////////////////////////////////////////////////////////////////////////
          OverlayService.prototype.openWithPositionAbsolute = function(params) {
            return this.open(params, this.getConfig(params, this.getPositionAbsolute(params)));
          };
          OverlayService.prototype.openWithPositionCenter = function(params) {
            return this.open(
              params,
              this.getConfig(
                __assign({}, params, {
                  hasVisibleBackdrop: params.hasVisibleBackdrop !== undefined ? params.hasVisibleBackdrop : true
                }),
                this.getPositionCenter()
              )
            );
          };
          OverlayService.prototype.openWithPositionRelative = function(params) {
            return this.open(params, this.getConfig(params, this.getPositionRelative(params)));
          };
          // //////////////////////////////////////////////////////////////////////////
          OverlayService.prototype.createInjector = function(overlayRef, injector) {
            var tokens = new WeakMap([[_overlay_ref__WEBPACK_IMPORTED_MODULE_3__['OverlayRef'], overlayRef]]);
            return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__['PortalInjector'](injector, tokens);
          };
          OverlayService.prototype.getConfig = function(params, positionStrategy) {
            var hasBackdrop = params.hasBackdrop !== undefined ? params.hasBackdrop : true;
            return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__['OverlayConfig']({
              hasBackdrop: hasBackdrop,
              positionStrategy: positionStrategy,
              backdropClass: hasBackdrop && params.hasVisibleBackdrop ? 'cdk-overlay-dark-backdrop' : '',
              height: params.height,
              scrollStrategy: this._overlay.scrollStrategies.reposition(),
              width: params.width
            });
          };
          OverlayService.prototype.getPositionAbsolute = function(params) {
            var positionStrategy = this._overlay
              .position()
              .global()
              .bottom(params.positions.bottom)
              .left(params.positions.left)
              .right(params.positions.right)
              .top(params.positions.top);
            return positionStrategy;
          };
          OverlayService.prototype.getPositionCenter = function() {
            var positionStrategy = this._overlay
              .position()
              .global()
              .centerHorizontally()
              .centerVertically();
            return positionStrategy;
          };
          OverlayService.prototype.getPositionRelative = function(params) {
            var positionStrategy = this._overlay
              .position()
              .flexibleConnectedTo(params.origin)
              .withPositions(params.positions || [])
              .withFlexibleDimensions(false)
              .withPush(false);
            return positionStrategy;
          };
          OverlayService.prototype.open = function(params, overlayConfig) {
            var cdkOverlayRef = this._overlay.create(overlayConfig);
            var overlayRef = new _overlay_ref__WEBPACK_IMPORTED_MODULE_3__['OverlayRef'](
              cdkOverlayRef,
              params.content,
              params.data
            );
            var injector = this.createInjector(overlayRef, this._injector);
            cdkOverlayRef.attach(
              new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__['ComponentPortal'](
                _overlay_component__WEBPACK_IMPORTED_MODULE_4__['OverlayComponent'],
                undefined,
                injector
              )
            );
            return overlayRef;
          };
          OverlayService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__['Injectable'])({
                providedIn: 'root'
              }),
              __metadata('design:paramtypes', [
                _angular_core__WEBPACK_IMPORTED_MODULE_2__['Injector'],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__['Overlay']
              ])
            ],
            OverlayService
          );
          return OverlayService;
        })();

        /***/
      },

    /***/ './src/app/shared/constants/bire-measure-reference-constants.ts':
      /*!**********************************************************************!*\
  !*** ./src/app/shared/constants/bire-measure-reference-constants.ts ***!
  \**********************************************************************/
      /*! exports provided: BireMeasureReferenceConstants */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'BireMeasureReferenceConstants',
          function() {
            return BireMeasureReferenceConstants;
          }
        );
        var BireMeasureReferenceConstants = /** @class */ (function() {
          function BireMeasureReferenceConstants() {}
          // Calendar Limit
          BireMeasureReferenceConstants.BIRE_MEASURE_REFERENCE_COUNTER_CODE_CALENDAR_LIMIT = 'CAL';
          // References for Maintenance Program
          BireMeasureReferenceConstants.BIRE_MEASURE_REFERENCE_COUNTER_CODE_PRE_FLIGHT = 'BF';
          BireMeasureReferenceConstants.BIRE_MEASURE_REFERENCE_COUNTER_CODE_POST_FLIGHT = 'AF';
          BireMeasureReferenceConstants.BIRE_MEASURE_REFERENCE_COUNTER_CODE_DAILY = 'DAILY';
          BireMeasureReferenceConstants.BIRE_MEASURE_REFERENCE_COUNTER_CODE_TSN = 'TSN';
          return BireMeasureReferenceConstants;
        })();

        /***/
      },

    /***/ './src/app/shared/constants/bire-rating-constants.ts':
      /*!***********************************************************!*\
  !*** ./src/app/shared/constants/bire-rating-constants.ts ***!
  \***********************************************************/
      /*! exports provided: BireRatingConstants */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'BireRatingConstants', function() {
          return BireRatingConstants;
        });
        var BireRatingConstants = /** @class */ (function() {
          function BireRatingConstants() {}
          BireRatingConstants.DEFAULT = '_';
          return BireRatingConstants;
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
//# sourceMappingURL=logistics-goods-receipt-goods-receipt-module.js.map
