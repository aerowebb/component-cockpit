(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~engineering-management-engineering-management-module~logistics-material-material-module~logi~30c40415'],
  {
    /***/ './node_modules/primeng/splitbutton.js':
      /*!*********************************************!*\
  !*** ./node_modules/primeng/splitbutton.js ***!
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
            /*! ./components/splitbutton/splitbutton */ './node_modules/primeng/components/splitbutton/splitbutton.js'
          )
        );

        /***/
      },

    /***/ './src/app/main/logistics/transfer-order/search/transfer-order-popup/transfer-order-popup.component.html':
      /*!***************************************************************************************************************!*\
  !*** ./src/app/main/logistics/transfer-order/search/transfer-order-popup/transfer-order-popup.component.html ***!
  \***************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="80">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".createTransferOrder" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="section">\r\n      <div class="section-content">\r\n        <div class="row">\r\n          <div class="form-group required">\r\n            <label class="form-label">{{ "type" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                appendTo="body"\r\n                class="aw-dropdown fixed-width"\r\n                placeholder="&nbsp;"\r\n                [showClear]="true"\r\n                [options]="typeList"\r\n                [(ngModel)]="selectedTransferOrderType"\r\n                [disabled]="createTransferOrderInput"\r\n                (onChange)="onSelectTranferType()"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group"></div>\r\n        </div>\r\n\r\n        <div class="row" *ngIf="!createTransferOrderInput">\r\n          <div class="form-group">\r\n            <div class="form-control aw-selectbutton-wrapper">\r\n              <p-selectButton [options]="articleNumberType" [(ngModel)]="selectedArticleNumber"></p-selectButton>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="row">\r\n          <div class="form-group" [ngClass]="selectedArticleNumber === MONO_ARTICLE ? \'required\' : \'\'">\r\n            <label class="form-label">{{ getComponentName() + ".articleCode" | translate }}</label>\r\n\r\n            <div\r\n              class="form-control form-control-with-modal"\r\n              *ngIf="!createTransferOrderInput"\r\n              [ngClass]="{ disabled: hasBeenCalculated }"\r\n            >\r\n              <div class="form-control-data" (click)="onClickSearchMaterial()">\r\n                {{ partDTO.pnCode }}\r\n              </div>\r\n\r\n              <div *ngIf="partDTO.pnCode" class="btn-clear-wrapper">\r\n                <i\r\n                  class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                  aria-hidden="true"\r\n                  (click)="clearPnCodeClass()"\r\n                ></i>\r\n              </div>\r\n              <div class="btn-search-wrapper">\r\n                <i\r\n                  class="fa fa-fw fa-search aw-icon btn-search"\r\n                  aria-hidden="true"\r\n                  (click)="onClickSearchMaterial()"\r\n                ></i>\r\n              </div>\r\n            </div>\r\n\r\n            <div\r\n              class="form-control form-control-with-modal"\r\n              *ngIf="createTransferOrderInput"\r\n              [ngClass]="{ disabled: createTransferOrderInput }"\r\n            >\r\n              <div class="form-control-data">\r\n                {{ partDTO.pnCode }}\r\n              </div>\r\n            </div>\r\n\r\n            <div\r\n              style="font-style: italic; padding: 8px 0 0 16px;"\r\n              *ngIf="partDTO.pnCode && partDTO.articleDesignation"\r\n            >\r\n              {{ partDTO.articleDesignation }}\r\n            </div>\r\n          </div>\r\n\r\n          <div class="display--flex-row flex--1">\r\n            <div class="form-group" [ngClass]="selectedArticleNumber === MONO_ARTICLE ? \'required\' : \'\'">\r\n              <label class="form-label">\r\n                <div style="display: inline;">\r\n                  {{ getComponentName() + ".quantity" | translate }}\r\n                </div>\r\n              </label>\r\n\r\n              <div class="form-control">\r\n                <input\r\n                  type="number"\r\n                  name="quantity"\r\n                  (blur)="changeQuantity()"\r\n                  class="aw-input"\r\n                  [(ngModel)]="quantity"\r\n                />\r\n              </div>\r\n            </div>\r\n\r\n            <div\r\n              class="form-group"\r\n              [ngClass]="{\r\n                \'visibility--hidden\': !(partDTO && partDTO.pnCode && partDTO.quantityPerIssue && partDTO.quantityUnit)\r\n              }"\r\n            >\r\n              <label class="form-label">{{ "unit" | translate }}</label>\r\n\r\n              <div class="form-control">\r\n                <div\r\n                  class="form-control-generic"\r\n                  *ngIf="partDTO && partDTO.pnCode && partDTO.quantityPerIssue && partDTO.quantityUnit"\r\n                >\r\n                  {{ partDTO.quantityUnit }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="row">\r\n          <div\r\n            class="form-group"\r\n            [ngClass]="{\r\n              required: bidtTransferOrderDTOInput.torStatus != awPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n            }"\r\n          >\r\n            <label class="form-label">{{ getComponentName() + ".expectedDate" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-calendar\r\n                showButtonBar="true"\r\n                [monthNavigator]="true"\r\n                [yearNavigator]="true"\r\n                [yearRange]="sessionService.calendarYearRange"\r\n                class="aw-calendar"\r\n                [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                [locale]="sessionService.calendarFormat"\r\n                appendTo="body"\r\n                [(ngModel)]="bidtTransferOrderDTOInput.receiptExpectedDate"\r\n                [disabled]="createTransferOrderInput"\r\n              ></p-calendar>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            class="form-group"\r\n            style="height: 47px;"\r\n            [ngClass]="{\r\n              required: bidtTransferOrderDTOInput.torStatus != awPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n            }"\r\n          >\r\n            <label class="form-label">{{ getComponentName() + ".criticity" | translate }}</label>\r\n\r\n            <div class="form-control aw-selectbutton-wrapper">\r\n              <p-selectButton\r\n                [disabled]="createTransferOrderInput"\r\n                [options]="criticityList"\r\n                [(ngModel)]="bidtTransferOrderDTOInput.criticality"\r\n              >\r\n              </p-selectButton>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="section" *ngIf="createTransferOrderInput">\r\n      <h4 class="section-title">{{ getComponentName() + ".procReq" | translate }}</h4>\r\n\r\n      <div class="section-content">\r\n        <div class="row">\r\n          <div\r\n            class="form-group"\r\n            [ngClass]="{\r\n              \'visibility--hidden\':\r\n                createTransferOrderInput.procReqItem?.birePn?.traceability !=\r\n                  awPropertiesConstants.PN_TRACEABILITY_BY_BATCH &&\r\n                createTransferOrderInput.procReqItem?.birePn?.traceability !=\r\n                  awPropertiesConstants.PN_TRACEABILITY_BY_SN &&\r\n                createTransferOrderInput.procReqItem?.birePn?.traceability !=\r\n                  awPropertiesConstants.PN_TRACEABILITY_BY_PACKAGING_BATCH_AND_SN\r\n            }"\r\n          >\r\n            <label class="form-label"> {{ getComponentName() + ".expectedSn" | translate }} </label>\r\n\r\n            <div class="form-control">\r\n              <input\r\n                class="aw-input"\r\n                name="value"\r\n                type="text"\r\n                [disabled]="true"\r\n                [(ngModel)]="createTransferOrderInput.procurmentRequest.procComment"\r\n              />\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label class="form-label">\r\n              {{ getComponentName() + ".requestedPotential" | translate }}\r\n            </label>\r\n\r\n            <div class="form-control">\r\n              <div class="form-control-generic">\r\n                {{ formattedRequestedPotential }} {{ createTransferOrderInput.procurmentRequest.potentialUnit }}\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label class="form-label">\r\n              {{ getComponentName() + ".expirationDate" | translate }}\r\n            </label>\r\n\r\n            <div class="form-control">\r\n              <div class="form-control-generic">\r\n                {{\r\n                  createTransferOrderInput.procurmentRequest.calendarPotential\r\n                    | date: "yyyy/MM/dd":"":translateService.currentLang\r\n                }}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="section">\r\n      <h4 class="section-title">{{ getComponentName() + ".supplier" | translate }}</h4>\r\n\r\n      <div class="section-content">\r\n        <div class="row">\r\n          <div class="form-group required">\r\n            <label class="form-label">{{ getComponentName() + ".site" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                appendTo="body"\r\n                class="aw-dropdown fixed-width"\r\n                placeholder="&nbsp;"\r\n                [options]="sitesShipment"\r\n                [showClear]="true"\r\n                [(ngModel)]="selectedShipperSite"\r\n                (onChange)="onChangeShipperSite()"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group required custom-width">\r\n            <label class="form-label">\r\n              {{ selectedShipperWarehouseCategory | formatSelectOption: warehouseCategories }}\r\n            </label>\r\n\r\n            <div class="form-control aw-selectbutton-wrapper aw-selectbutton-with-dropdown">\r\n              <p-selectButton\r\n                [options]="warehouseCategories"\r\n                [(ngModel)]="selectedShipperWarehouseCategory"\r\n                (onChange)="onChangeShipperWarehouseCategory()"\r\n              ></p-selectButton>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label class="form-label"> &nbsp;</label>\r\n\r\n            <div class="form-control" *ngIf="isMainWarehouse">\r\n              <p-dropdown\r\n                class="aw-dropdown fixed-width"\r\n                placeholder="&nbsp;"\r\n                [options]="shipperWarehouses"\r\n                [showClear]="true"\r\n                [(ngModel)]="selectedShipperWarehouse"\r\n              ></p-dropdown>\r\n            </div>\r\n            <div class="form-control error-context" *ngIf="!isMainWarehouse">\r\n              {{ getComponentName() + ".noMainWarehouse" | translate }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="section">\r\n      <h4 class="section-title">{{ getComponentName() + ".recipient" | translate }}</h4>\r\n\r\n      <div class="section-content">\r\n        <div class="row" *ngIf="!showPartnerDialogInput">\r\n          <div class="form-group required">\r\n            <label class="form-label">{{ getComponentName() + ".site" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                appendTo="body"\r\n                class="aw-dropdown fixed-width"\r\n                placeholder="&nbsp;"\r\n                [options]="sitesRecipient"\r\n                [showClear]="true"\r\n                [(ngModel)]="selectedRecipientSite"\r\n                (onChange)="onChangeRecipientSite()"\r\n                [disabled]="\r\n                  (selectedTransferOrderType &&\r\n                    selectedTransferOrderType.transferType === awPropertiesConstants.MM_TRANSFER_TYPE_INTRA_SITE_KEY) ||\r\n                  createTransferOrderInput\r\n                "\r\n              >\r\n              </p-dropdown>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group required custom-width">\r\n            <label class="form-label">\r\n              {{ selectedRecipientWarehouseCategory | formatSelectOption: warehouseCategories }}\r\n            </label>\r\n\r\n            <div class="form-control aw-selectbutton-wrapper aw-selectbutton-with-dropdown">\r\n              <p-selectButton\r\n                [options]="warehouseCategories"\r\n                [(ngModel)]="selectedRecipientWarehouseCategory"\r\n                (onChange)="onChangeRecipientWarehouseCategory()"\r\n                [disabled]="\r\n                  (selectedTransferOrderType &&\r\n                    selectedTransferOrderType.transferType === awPropertiesConstants.MM_TRANSFER_TYPE_INTER_SITE_KEY) ||\r\n                  createTransferOrderInput\r\n                "\r\n              ></p-selectButton>\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <label class="form-label"> &nbsp;</label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                appendTo="body"\r\n                class="aw-dropdown fixed-width"\r\n                placeholder="&nbsp;"\r\n                [options]="recipientWarehouses"\r\n                [showClear]="true"\r\n                [(ngModel)]="selectedRecipientWarehouse"\r\n                [disabled]="createTransferOrderInput"\r\n              >\r\n              </p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="row" *ngIf="showPartnerDialogInput">\r\n          <div class="form-group required">\r\n            <label class="form-label">{{ getComponentName() + ".partner" | translate }}</label>\r\n\r\n            <div class="form-control form-control-with-modal">\r\n              <div class="form-control-data" (click)="openRecipientCustomerDialog()">\r\n                {{ selectedFinalRecipientCustomerCode }}\r\n              </div>\r\n\r\n              <div *ngIf="selectedFinalRecipientCustomerCode" class="btn-clear-wrapper">\r\n                <i\r\n                  class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                  aria-hidden="true"\r\n                  (click)="unselectFinalRecipientCustomer()"\r\n                ></i>\r\n              </div>\r\n              <div class="btn-search-wrapper">\r\n                <i\r\n                  class="fa fa-fw fa-search aw-icon btn-search"\r\n                  aria-hidden="true"\r\n                  (click)="openRecipientCustomerDialog()"\r\n                ></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="form-group ng-star-inserted"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">{{ "global.cancel" | translate }}</button>\r\n\r\n    <button mat-raised-button type="button" color="primary" [disabled]="!canValidate()" (click)="validate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-pn\r\n  *ngIf="showQuickSearchMaterialPopup"\r\n  [(display)]="showQuickSearchMaterialPopup"\r\n  (onSelected)="setSelectedMaterial($event)"\r\n  [showPartTypeSelection]="true"\r\n  [checkContainer]="true"\r\n  [withAllTypes]="true"\r\n></aw-dialog-search-pn>\r\n\r\n<aw-dialog-search-customer\r\n  *ngIf="recipientCustomerDialogVisible"\r\n  [(display)]="recipientCustomerDialogVisible"\r\n  (onSelected)="onSelectRecipientCustomer($event)"\r\n></aw-dialog-search-customer>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/transfer-order/search/transfer-order-popup/transfer-order-popup.component.scss':
      /*!***************************************************************************************************************!*\
  !*** ./src/app/main/logistics/transfer-order/search/transfer-order-popup/transfer-order-popup.component.scss ***!
  \***************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .custom-icon {\n  font-size: 10em;\n  cursor: pointer; }\n\n:host .custom-align {\n  text-align: center; }\n\n:host .section-with-no-padding {\n  padding: 0em !important;\n  margin-top: 2em; }\n\n:host .custom-width {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content; }\n\n:host .error-context {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvdHJhbnNmZXItb3JkZXIvc2VhcmNoL3RyYW5zZmVyLW9yZGVyLXBvcHVwL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxsb2dpc3RpY3NcXHRyYW5zZmVyLW9yZGVyXFxzZWFyY2hcXHRyYW5zZmVyLW9yZGVyLXBvcHVwXFx0cmFuc2Zlci1vcmRlci1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBSG5CO0VBT0ksa0JBQWtCLEVBQUE7O0FBUHRCO0VBV0ksdUJBQXVCO0VBQ3ZCLGVBQWUsRUFBQTs7QUFabkI7RUFlSSw4QkFBc0I7RUFBdEIsMkJBQXNCO0VBQXRCLHNCQUFzQixFQUFBOztBQWYxQjtFQW1CSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy90cmFuc2Zlci1vcmRlci9zZWFyY2gvdHJhbnNmZXItb3JkZXItcG9wdXAvdHJhbnNmZXItb3JkZXItcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmN1c3RvbS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTBlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24td2l0aC1uby1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDBlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gIH1cclxuICAuY3VzdG9tLXdpZHRoIHtcclxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAuZXJyb3ItY29udGV4dCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxufVxyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/logistics/transfer-order/search/transfer-order-popup/transfer-order-popup.component.ts':
      /*!*************************************************************************************************************!*\
  !*** ./src/app/main/logistics/transfer-order/search/transfer-order-popup/transfer-order-popup.component.ts ***!
  \*************************************************************************************************************/
      /*! exports provided: TransferOrderPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'TransferOrderPopupComponent',
          function() {
            return TransferOrderPopupComponent;
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
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
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
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../../shared/utils/logistic-utils */ './src/app/shared/utils/logistic-utils.ts'
        );
        /* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../../shared/utils/number-utils */ './src/app/shared/utils/number-utils.ts'
        );
        /* harmony import */ var _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../goods-receipt/delivery-folder-search.service */ './src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts'
        );
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _shared_transfer_order_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../shared/transfer-order-service */ './src/app/main/logistics/transfer-order/shared/transfer-order-service.ts'
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

        var TransferOrderPopupComponent = /** @class */ (function(_super) {
          __extends(TransferOrderPopupComponent, _super);
          function TransferOrderPopupComponent(
            sessionService,
            messageService,
            propertiesService,
            logisticsService,
            translateService,
            transferOrderService,
            dfSearchService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Read,
                'TransferOrderPopupComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.messageService = messageService;
            _this.propertiesService = propertiesService;
            _this.logisticsService = logisticsService;
            _this.translateService = translateService;
            _this.transferOrderService = transferOrderService;
            _this.dfSearchService = dfSearchService;
            _this.MONO_ARTICLE = 0;
            _this.MULTI_ARTICLE = 1;
            _this.awPropertiesConstants =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants'];
            _this.whType =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__[
                'AWPropertiesConstants'
              ].WAREHOUSE_CATEGORY_WAREHOUSE;
            _this.onValidate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.component = TransferOrderPopupComponent_1;
            _this.init();
            return _this;
          }
          TransferOrderPopupComponent_1 = TransferOrderPopupComponent;
          TransferOrderPopupComponent.prototype.ngOnInit = function() {
            this.loadDropdown();
            this.partDTO = this.pn || {};
            if (this.createTransferOrderInput) {
              this.autoFillFields();
            }
          };
          TransferOrderPopupComponent.prototype.autoFillFields = function() {
            var _this = this;
            // fill expected date if defined
            if (this.createTransferOrderInput.procurmentRequest.requestedDate) {
              this.bidtTransferOrderDTOInput.receiptExpectedDate = moment__WEBPACK_IMPORTED_MODULE_2__(
                this.createTransferOrderInput.procurmentRequest.requestedDate
              )
                .subtract(1, 'days')
                .toDate();
            }
            if (this.createTransferOrderInput.procurmentRequest.requestedPotential) {
              this.formattedRequestedPotential = _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_13__['NumberUtils']
                .roundNumber(
                  _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_13__['NumberUtils'].fromString(
                    this.createTransferOrderInput.procurmentRequest.requestedPotential
                  ),
                  2
                )
                .toString();
            }
            // fill criticality
            this.bidtTransferOrderDTOInput.criticality = this.createTransferOrderInput.procurmentRequest.criticality;
            // fill receipt
            this.selectedRecipientSite = this.createTransferOrderInput.procurmentRequest.bidtSiteReceipt
              ? this.createTransferOrderInput.procurmentRequest.bidtSiteReceipt.siteId
              : undefined;
            this.selectedRecipientWarehouseCategory = this.createTransferOrderInput.procurmentRequest
              .bidtWarehouseReceipt
              ? this.createTransferOrderInput.procurmentRequest.bidtWarehouseReceipt.whCategory
              : undefined;
            this.selectedRecipientWarehouse = this.createTransferOrderInput.procurmentRequest.bidtWarehouseReceipt
              ? this.createTransferOrderInput.procurmentRequest.bidtWarehouseReceipt.wareHouseId
              : undefined;
            if (this.selectedRecipientSite) {
              this.loadWareHouses(this.selectedRecipientSite, this.selectedRecipientWarehouseCategory, true).subscribe({
                next: function(warehouses) {
                  _this.recipientWarehouses = warehouses;
                  if (_this.recipientWarehouses && _this.recipientWarehouses.length > 0) {
                    _this.selectedRecipientWarehouse = _this.recipientWarehouses[0].value;
                  } else {
                    _this.isMainWarehouse = false;
                  }
                }
              });
            }
            // fill quantity
            this.maxQuantity = Math.floor(this.createTransferOrderInput.notServedQuantity);
            this.quantity = Math.floor(this.createTransferOrderInput.notServedQuantity).toString();
          };
          TransferOrderPopupComponent.prototype.changeQuantity = function() {
            if (Number(this.quantity) > this.maxQuantity) {
              this.quantity = this.maxQuantity.toString();
              this.messageService.showWarningMessage(this.getTranslateKey('warningQuantity'));
            }
          };
          TransferOrderPopupComponent.prototype.init = function() {
            this.bidtTransferOrderDTOInput = {};
            this.partDTO = {};
            this.criticityList = [];
            this.logisticsTypeList = [];
            this.warehouseList = [];
            this.unitList = [];
            this.sitesShipment = [];
            this.sitesRecipient = [];
            this.recipientWarehouses = [];
            this.warehouseCategories = [];
            this.shipperWarehouses = [];
            this.articleNumberType = [];
            this.recipientCustomerDialogVisible = false;
            this.selectedFinalRecipientCustomerCode = undefined;
            this.selectedShipperSite = undefined;
            this.selectedShipperWarehouse = undefined;
            this.selectedShipperWarehouseCategory = undefined;
            this.selectedRecipientSite = undefined;
            this.selectedRecipientWarehouse = undefined;
            this.selectedRecipientWarehouseCategory = undefined;
            this.selectedArticleNumber = undefined;
            this.showPartnerDialogInput = false;
            this.isMainWarehouse = true;
            this.loadLogisticType();
            this.loadCriticity();
            this.loadSites();
            this.loadWarehouseCategories();
            this.loadArticleNumberType();
            this.bidtTransferOrderDTOInput.torStatus =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__[
                'AWPropertiesConstants'
              ].TRANSFER_ORDER_STATUS_PLANNED;
          };
          TransferOrderPopupComponent.prototype.loadArticleNumberType = function() {
            this.articleNumberType = [
              {
                label: this.translateService.instant(this.getComponentName() + '.monoArticle'),
                value: this.MONO_ARTICLE
              },
              {
                label: this.translateService.instant(this.getComponentName() + '.multiArticle'),
                value: this.MULTI_ARTICLE
              }
            ];
            this.selectedArticleNumber = this.articleNumberType[0].value;
          };
          TransferOrderPopupComponent.prototype.clearPnCodeClass = function() {
            this.partDTO.pnCode = undefined;
            this.unitList = [];
          };
          /***************************************
           * Load Dropdowns
           ***************************************/
          TransferOrderPopupComponent.prototype.loadDropdown = function() {
            var _this = this;
            this.transferOrderService.fetchTypeObjectList().subscribe(function(types) {
              _this.typeList = types.sort(function(a, b) {
                return a.label.localeCompare(b.label);
              });
              // fill type
              if (_this.createTransferOrderInput) {
                _this.selectedTransferOrderType = _this.typeList.filter(function(type) {
                  return (
                    type.value.id ===
                    Number(
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                        .TRANSFER_ORDER_TYPE_INTER_SITE
                    )
                  );
                })[0].value;
              }
            });
          };
          /************************************
           * Load Warehouse List on change
           ************************************/
          TransferOrderPopupComponent.prototype.loadWareHouseList = function() {
            this.warehouseList = [];
            this.shopList = [];
          };
          TransferOrderPopupComponent.prototype.onClickSearchMaterial = function() {
            if (this.hasBeenCalculated) {
              return;
            }
            this.showQuickSearchMaterialPopup = true;
          };
          TransferOrderPopupComponent.prototype.setSelectedMaterial = function(event) {
            this.showQuickSearchMaterialPopup = false;
            this.partDTO = event;
            this.onChangePn();
          };
          TransferOrderPopupComponent.prototype.loadLogisticType = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                  .WAREHOUSE_CATEGORY_MAP
              )
              .subscribe(function(res) {
                if (res && res.length) {
                  _this.logisticsTypeList = res.sort(function(s1, s2) {
                    return s1.value.localeCompare(s2.value);
                  });
                  _this.whType = _this.logisticsTypeList[0].value;
                }
              });
          };
          TransferOrderPopupComponent.prototype.loadCriticity = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                  .LOGISTICAL_CRITICALITY_MAP
              )
              .subscribe(function(res) {
                if (res && res.length) {
                  _this.criticityList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils'].orEmpty(
                    res
                  );
                  _this.criticityList = _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_12__[
                    'LogisticalUtils'
                  ].sortCriticities(_this.criticityList);
                }
              });
          };
          TransferOrderPopupComponent.prototype.onChangePn = function() {
            if (this.partDTO.pnCode) {
              this.loadUnits(this.partDTO.pnCode);
            }
          };
          TransferOrderPopupComponent.prototype.loadUnits = function(pnCode) {
            var _this = this;
            if (this.partDTO.pnCode) {
              this.logisticsService.findBidoCounterReferencesByPnCode({ pnCode: pnCode }).subscribe({
                next: function(counterReferences) {
                  _this.unitList = counterReferences
                    .map(function(counterReference) {
                      return {
                        label: counterReference.unitCode + ' (' + counterReference.counterCode + ')',
                        value: counterReference.counterCode
                      };
                    })
                    .sort(function(s1, s2) {
                      return s1.label.localeCompare(s2.label);
                    });
                }
              });
            }
          };
          TransferOrderPopupComponent.prototype.loadWarehouseCategories = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
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
          TransferOrderPopupComponent.prototype.openRecipientCustomerDialog = function() {
            this.recipientCustomerDialogVisible = true;
          };
          TransferOrderPopupComponent.prototype.onSelectRecipientCustomer = function(customer) {
            this.selectedFinalRecipientCustomerCode = customer.customerCode;
          };
          TransferOrderPopupComponent.prototype.unselectFinalRecipientCustomer = function() {
            this.selectedFinalRecipientCustomerCode = undefined;
          };
          TransferOrderPopupComponent.prototype.onChangeShipperSite = function() {
            var _this = this;
            this.onChangeShipperWarehouseCategory();
            if (
              !!this.selectedTransferOrderType &&
              this.selectedTransferOrderType.transferType ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                  .MM_TRANSFER_TYPE_INTRA_SITE_KEY
            ) {
              this.selectedRecipientSite = this.selectedShipperSite;
              this.onChangeRecipientSite();
            }
            if (
              !!this.selectedTransferOrderType &&
              this.selectedTransferOrderType.transferType ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                  .MM_TRANSFER_TYPE_INTER_SITE_KEY
            ) {
              if (this.selectedShipperSite === this.selectedRecipientSite) {
                this.selectedRecipientSite = undefined;
                this.onChangeRecipientSite();
              }
              this.sitesRecipient = this.sitesShipment;
              this.sitesRecipient = this.sitesShipment.filter(function(site) {
                return site.value !== _this.selectedShipperSite;
              });
            }
          };
          TransferOrderPopupComponent.prototype.onChangeShipperWarehouseCategory = function() {
            var _this = this;
            this.unselectShipperWarehouse();
            if (this.selectedShipperSite) {
              this.loadWareHouses(this.selectedShipperSite, this.selectedShipperWarehouseCategory, false).subscribe({
                next: function(warehouses) {
                  _this.shipperWarehouses = warehouses;
                }
              });
            }
          };
          TransferOrderPopupComponent.prototype.unselectShipperWarehouse = function() {
            this.shipperWarehouses = [];
            this.selectedShipperWarehouse = undefined;
          };
          TransferOrderPopupComponent.prototype.unselectRecipientWarehouse = function() {
            this.recipientWarehouses = [];
            this.selectedRecipientWarehouse = undefined;
          };
          TransferOrderPopupComponent.prototype.onChangeRecipientSite = function() {
            this.onChangeRecipientWarehouseCategory();
          };
          TransferOrderPopupComponent.prototype.onChangeRecipientWarehouseCategory = function() {
            var _this = this;
            this.unselectRecipientWarehouse();
            if (this.selectedRecipientSite) {
              this.loadWareHouses(this.selectedRecipientSite, this.selectedRecipientWarehouseCategory, false).subscribe(
                {
                  next: function(warehouses) {
                    _this.recipientWarehouses = warehouses;
                  }
                }
              );
            }
          };
          TransferOrderPopupComponent.prototype.loadWareHouses = function(site, warehouseCategory, onlyMain) {
            return this.dfSearchService.getWarehousesBySiteId(site).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(warehouses) {
                if (onlyMain) {
                  return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                    .orEmpty(warehouses)
                    .filter(function(warehouse) {
                      return (
                        warehouse.whCategory === warehouseCategory &&
                        warehouse.whType ===
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__[
                            'AWPropertiesConstants'
                          ].MM_WAREHOUSE_TYPE_MAIN
                      );
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
                } else {
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
                }
              })
            );
          };
          TransferOrderPopupComponent.prototype.loadSites = function() {
            var _this = this;
            this.dfSearchService.findAllBireSite().subscribe({
              next: function(sitesShipment) {
                _this.sitesShipment = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                  .orEmpty(sitesShipment)
                  .map(function(site) {
                    return {
                      label: site.siteCode + ' - ' + site.siteName,
                      value: site.siteId
                    };
                  })
                  .sort(function(s1, s2) {
                    return s1.label.localeCompare(s2.label);
                  });
                _this.sitesRecipient = _this.sitesShipment;
                if (
                  _this.createTransferOrderInput &&
                  _this.createTransferOrderInput.procurmentRequest.bidtSiteByBidtSiteIssueId
                ) {
                  _this.sitesShipment = _this.sitesShipment.filter(function(site) {
                    return site.value !== _this.createTransferOrderInput.procurmentRequest.bidtSiteByBidtSiteIssueId;
                  });
                }
              }
            });
          };
          TransferOrderPopupComponent.prototype.canValidate = function() {
            return (
              this.selectedTransferOrderType &&
              ((this.selectedArticleNumber === this.MONO_ARTICLE && this.partDTO.pnCode && this.quantity) ||
                this.selectedArticleNumber === this.MULTI_ARTICLE) &&
              this.bidtTransferOrderDTOInput.receiptExpectedDate &&
              this.bidtTransferOrderDTOInput.criticality &&
              this.selectedShipperSite &&
              this.selectedShipperWarehouse &&
              ((this.selectedRecipientSite && this.selectedRecipientWarehouse) ||
                this.selectedFinalRecipientCustomerCode)
            );
          };
          TransferOrderPopupComponent.prototype.validate = function() {
            var _this = this;
            var input = {
              bidtWarehouseByBidtWarehouseSenderId: this.selectedShipperWarehouse,
              bidoCustomerByFkBidtTraTorReceiBidoCusCustomerCode: this.selectedFinalRecipientCustomerCode,
              bidtSiteByBidtSiteReceiverId: this.selectedRecipientSite,
              bidtWarehouseByBidtWarehouseReceiverId: this.selectedRecipientWarehouse,
              bidtSiteByBidtSiteSenderId: this.selectedShipperSite,
              torType:
                this.selectedTransferOrderType && this.selectedTransferOrderType.id
                  ? this.selectedTransferOrderType.id.toString()
                  : undefined,
              torStatus: this.bidtTransferOrderDTOInput.torStatus,
              criticality: this.bidtTransferOrderDTOInput.criticality,
              receiptExpectedDate: this.bidtTransferOrderDTOInput.receiptExpectedDate,
              bidtProcReqItemId: this.createTransferOrderInput
                ? this.createTransferOrderInput.procReqItem.id
                : undefined,
              bidtProcReqItem: this.createTransferOrderInput ? this.createTransferOrderInput.procReqItem : undefined,
              bidtTorItems: [
                {
                  birePnPnCode: this.partDTO.pnCode,
                  quantity: Number(this.quantity)
                }
              ]
            };
            this.logisticsService.createTransferOrder(input).subscribe(function(res) {
              _this.onValidate.emit(res);
              _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnCreate'));
              _this.closeDialog();
            });
          };
          TransferOrderPopupComponent.prototype.onSelectTranferType = function() {
            var _this = this;
            this.sitesRecipient = this.sitesShipment;
            if (!!this.selectedTransferOrderType) {
              if (
                this.selectedTransferOrderType.transferType ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                  .MM_TRANSFER_TYPE_INTRA_SITE_KEY
              ) {
                this.bidtTransferOrderDTOInput.receiptExpectedDate = new Date();
                if (!!this.selectedShipperSite) {
                  this.selectedRecipientSite = this.selectedShipperSite;
                  this.onChangeRecipientSite();
                }
              }
              this.showPartnerDialogInput =
                this.selectedTransferOrderType.transferType ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                    .MM_TRANSFER_TYPE_INTRA_SITE_KEY ||
                this.selectedTransferOrderType.transferType ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                    .MM_TRANSFER_TYPE_INTER_SITE_KEY
                  ? false
                  : true;
              if (
                this.selectedTransferOrderType.transferType ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                  .MM_TRANSFER_TYPE_INTER_SITE_KEY
              ) {
                this.selectedRecipientWarehouseCategory =
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__[
                    'AWPropertiesConstants'
                  ].WAREHOUSE_CATEGORY_WAREHOUSE;
                if (!!this.selectedShipperSite) {
                  if (this.selectedRecipientSite === this.selectedShipperSite) {
                    this.selectedRecipientSite = undefined;
                    this.onChangeRecipientSite();
                  }
                  this.sitesRecipient = this.sitesShipment.filter(function(site) {
                    return site.value !== _this.selectedShipperSite;
                  });
                }
              }
            } else {
              this.showPartnerDialogInput = false;
            }
          };
          var TransferOrderPopupComponent_1;
          TransferOrderPopupComponent.RECIPIENT_INTERNAL = 0;
          TransferOrderPopupComponent.RECIPIENT_EXTERNAL = 1;
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            TransferOrderPopupComponent.prototype,
            'createTransferOrderInput',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            TransferOrderPopupComponent.prototype,
            'pn',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            TransferOrderPopupComponent.prototype,
            'onValidate',
            void 0
          );
          TransferOrderPopupComponent = TransferOrderPopupComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-transfer-order-popup',
                template: __webpack_require__(
                  /*! ./transfer-order-popup.component.html */ './src/app/main/logistics/transfer-order/search/transfer-order-popup/transfer-order-popup.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./transfer-order-popup.component.scss */ './src/app/main/logistics/transfer-order/search/transfer-order-popup/transfer-order-popup.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__['SessionService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__['MessageService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_8__['PropertiesService'],
                _logistics_service__WEBPACK_IMPORTED_MODULE_15__['LogisticsService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _shared_transfer_order_service__WEBPACK_IMPORTED_MODULE_16__['TransferOrderService'],
                _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_14__[
                  'DeliveryFolderSearchService'
                ]
              ])
            ],
            TransferOrderPopupComponent
          );
          return TransferOrderPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_10__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/transfer-order/search/transfer-order-popup/transfer-order-popup.module.ts':
      /*!**********************************************************************************************************!*\
  !*** ./src/app/main/logistics/transfer-order/search/transfer-order-popup/transfer-order-popup.module.ts ***!
  \**********************************************************************************************************/
      /*! exports provided: TransferOrderPopupModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'TransferOrderPopupModule',
          function() {
            return TransferOrderPopupModule;
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
        /* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/inputswitch */ './node_modules/primeng/inputswitch.js'
        );
        /* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/progressbar */ './node_modules/primeng/progressbar.js'
        );
        /* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../../shared/components/component-sidebar/component-sidebar.mdule */ './src/app/shared/components/component-sidebar/component-sidebar.mdule.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../../shared/components/dialog-search-customer/dialog-search-customer.module */ './src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../../shared/components/dialog-search-pn/dialog-search-pn.module */ './src/app/shared/components/dialog-search-pn/dialog-search-pn.module.ts'
        );
        /* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../../shared/components/manage-search-criteria/manage-search-criteria.module */ './src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../goods-receipt/delivery-folder-search.service */ './src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts'
        );
        /* harmony import */ var _transfer_order_search_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../transfer-order-search.service */ './src/app/main/logistics/transfer-order/search/transfer-order-search.service.ts'
        );
        /* harmony import */ var _transfer_order_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./transfer-order-popup.component */ './src/app/main/logistics/transfer-order/search/transfer-order-popup/transfer-order-popup.component.ts'
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
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__['TooltipModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__['DropdownModule'],
          primeng_fileupload__WEBPACK_IMPORTED_MODULE_4__['FileUploadModule'],
          primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5__['InputSwitchModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__['SelectButtonModule'],
          _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_18__['TableModule'],
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__['CheckboxModule'],
          _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_13__[
            'ComponentSidebarModule'
          ],
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_8__['TableModule'],
          primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__['ProgressBarModule'],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_17__['ModalModule'],
          _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_14__[
            'DialogSearchCustomerModule'
          ]
        ];
        var INTERNAL_MODULES = [
          _shared_components_dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_15__[
            'DialogSearchPnModule'
          ]
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _transfer_order_search_service__WEBPACK_IMPORTED_MODULE_20__['TransferOrderSearchService'],
          _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_19__['DeliveryFolderSearchService']
        ];
        var TransferOrderPopupModule = /** @class */ (function() {
          function TransferOrderPopupModule() {}
          TransferOrderPopupModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                exports: [_transfer_order_popup_component__WEBPACK_IMPORTED_MODULE_21__['TransferOrderPopupComponent']],
                declarations: [
                  _transfer_order_popup_component__WEBPACK_IMPORTED_MODULE_21__['TransferOrderPopupComponent']
                ],
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_10__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_11__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_12__['AppCommonSharedModule'],
                    _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_16__[
                      'ManageSearchCriteriaModule'
                    ]
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            TransferOrderPopupModule
          );
          return TransferOrderPopupModule;
        })();

        /***/
      },

    /***/ './src/app/main/logistics/transfer-order/search/transfer-order-search.service.ts':
      /*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/transfer-order/search/transfer-order-search.service.ts ***!
  \***************************************************************************************/
      /*! exports provided: TransferOrderSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'TransferOrderSearchService',
          function() {
            return TransferOrderSearchService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_bidt_df_type_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-df-type.api */ './src/app/shared/api/bidt-df-type.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-site.api */ './src/app/shared/api/bidt-site.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
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

        var TransferOrderSearchService = /** @class */ (function(_super) {
          __extends(TransferOrderSearchService, _super);
          function TransferOrderSearchService(
            http,
            appConfigService,
            bidtSite,
            bidtWarehouseApi,
            propertiesService,
            bidtDfTypeApi,
            bidtProductStructureManagementTypeApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtSite = bidtSite;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            _this.propertiesService = propertiesService;
            _this.bidtDfTypeApi = bidtDfTypeApi;
            _this.bidtProductStructureManagementTypeApi = bidtProductStructureManagementTypeApi;
            return _this;
          }
          TransferOrderSearchService.prototype.fetchPartnerList = function() {
            return [
              { label: 'Dassault 1', value: '0' },
              { label: 'Dassault 2', value: '1' },
              { label: 'DMAe', value: '2' },
              { label: 'Thales', value: '3' }
            ];
          };
          TransferOrderSearchService.prototype.fetchSiteList = function() {
            return _super.prototype.post.call(this, this.bidtSite.findAll);
          };
          TransferOrderSearchService.prototype.fetchWarehouseList = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                .WAREHOUSE_CATEGORY_MAP
            );
          };
          TransferOrderSearchService.prototype.getWarehousesBySiteId = function(siteId) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findBySiteId, siteId);
          };
          TransferOrderSearchService.prototype.fetchDocumentList = function() {
            return _super.prototype.post.call(this, this.bidtDfTypeApi.findShipmentDfTypes);
          };
          TransferOrderSearchService.prototype.getBirePnByPn = function(birePnPnCode) {
            return _super.prototype.post.call(
              this,
              this.bidtProductStructureManagementTypeApi.findBirePn,
              birePnPnCode
            );
          };
          TransferOrderSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__['AppConfigService'],
                _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_3__['BidtSiteApi'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_4__['BidtWarehouseApi'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__['PropertiesService'],
                _shared_api_bidt_df_type_api__WEBPACK_IMPORTED_MODULE_2__['BidtDfTypeApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_5__[
                  'ProductStructureManagementApi'
                ]
              ])
            ],
            TransferOrderSearchService
          );
          return TransferOrderSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__['AbstractAwHttpService']);

        /***/
      }
  }
]);
//# sourceMappingURL=default~engineering-management-engineering-management-module~logistics-material-material-module~logi~30c40415.js.map
