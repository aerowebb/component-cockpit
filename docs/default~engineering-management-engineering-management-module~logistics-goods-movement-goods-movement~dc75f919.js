(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~engineering-management-engineering-management-module~logistics-goods-movement-goods-movement~dc75f919'],
  {
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

    /***/ './node_modules/primeng/inputswitch.js':
      /*!*********************************************!*\
  !*** ./node_modules/primeng/inputswitch.js ***!
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
            /*! ./components/inputswitch/inputswitch */ './node_modules/primeng/components/inputswitch/inputswitch.js'
          )
        );

        /***/
      },

    /***/ './node_modules/primeng/progressbar.js':
      /*!*********************************************!*\
  !*** ./node_modules/primeng/progressbar.js ***!
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
            /*! ./components/progressbar/progressbar */ './node_modules/primeng/components/progressbar/progressbar.js'
          )
        );

        /***/
      },

    /***/ './src/app/main/logistics/procurement-request/search/procurement-request-popup/procurement-request-popup.component.html':
      /*!******************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/search/procurement-request-popup/procurement-request-popup.component.html ***!
  \******************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="80">\r\n  <a-header>\r\n    <div class="modal-title" *ngIf="!isReadOpenMode">\r\n      {{ getComponentName() + ".createProcurementRequest" | translate }}\r\n    </div>\r\n    <div class="modal-title" *ngIf="isReadOpenMode">\r\n      {{ getComponentName() + ".modifyProcurementRequest" | translate }}\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="row">\r\n      <div class="form-group required">\r\n        <label class="form-label">{{ "type" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <p-selectButton\r\n            [options]="procurementRequestTypes"\r\n            [(ngModel)]="procurementRequest.procType"\r\n            (onChange)="onChangeProcurementRequestType()"\r\n            [disabled]="isReadOpenMode"\r\n          ></p-selectButton>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div\r\n        class="form-group"\r\n        [ngClass]="\r\n          procurementRequest.procType == awPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE_ES ? \'required\' : \'\'\r\n        "\r\n        *ngIf="\r\n          procurementRequest.procType == awPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE ||\r\n          procurementRequest.procType == awPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE_WITH_EXCHANCE ||\r\n          procurementRequest.procType == awPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE_ES\r\n        "\r\n      >\r\n        <label class="form-label">{{ getComponentName() + ".originalDocumentReference" | translate }}</label>\r\n\r\n        <div class="form-control" *ngIf="inputWorkOrder">\r\n          {{ wo?.woCode }}\r\n        </div>\r\n\r\n        <div class="form-control form-control-with-modal" *ngIf="!inputWorkOrder">\r\n          <div class="form-control-data" (click)="openWoDialog()">\r\n            {{ wo?.woCode }}\r\n          </div>\r\n\r\n          <div *ngIf="wo" class="btn-clear-wrapper">\r\n            <i class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear" aria-hidden="true" (click)="eraseWo()"></i>\r\n          </div>\r\n          <div class="btn-search-wrapper">\r\n            <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="openWoDialog()"></i>\r\n          </div>\r\n        </div>\r\n        <div class="italic" style="padding: 8px 0 0 16px;" *ngIf="wo && wo?.woDescription">\r\n          {{ wo?.woDescription }}\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group"></div>\r\n    </div>\r\n\r\n    <ng-container *ngIf="procurementRequest.procType">\r\n      <div class="row">\r\n        <div class="form-group" style="max-width: 16rem;">\r\n          <label class="form-label">{{ "status" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-selectButton\r\n              [options]="procurementRequestStatuses"\r\n              [(ngModel)]="procurementRequest.procStatus"\r\n              [disabled]="isReadOpenMode"\r\n            ></p-selectButton>\r\n          </div>\r\n        </div>\r\n\r\n        <div style="margin-top: 32px;">\r\n          <ng-container *ngIf="procurementRequest.procStatus == awPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT">\r\n            <div class="bold">\r\n              {{ getComponentName() + ".draftRow1" | translate }}\r\n            </div>\r\n\r\n            <div class="bold">\r\n              {{ getComponentName() + ".draftRow2" | translate }}\r\n            </div>\r\n          </ng-container>\r\n          <ng-container\r\n            *ngIf="procurementRequest.procStatus == awPropertiesConstants.PROCUREMENT_REQUEST_STATUS_RELEASED"\r\n          >\r\n            <div class="bold">\r\n              {{ getComponentName() + ".releasedRow1" | translate }}\r\n            </div>\r\n\r\n            <div class="bold">\r\n              {{ getComponentName() + ".releasedRow2" | translate }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group" [class.required]="!isReadOpenMode">\r\n          <label class="form-label">{{ getComponentName() + ".articleCode" | translate }}</label>\r\n\r\n          <div class="form-control" *ngIf="inputPn">\r\n            {{ pn?.pnCode }}\r\n          </div>\r\n\r\n          <div class="form-control form-control-with-modal" *ngIf="!inputPn" [ngClass]="{ disabled: isReadOpenMode }">\r\n            <div class="form-control-data" (click)="openPnDialog()">\r\n              {{ pn?.pnCode }}\r\n            </div>\r\n\r\n            <div *ngIf="!isReadOpenMode && pn" class="btn-clear-wrapper">\r\n              <i\r\n                class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                aria-hidden="true"\r\n                (click)="erasePn()"\r\n              ></i>\r\n            </div>\r\n            <div class="btn-search-wrapper">\r\n              <i\r\n                *ngIf="!isReadOpenMode"\r\n                class="fa fa-fw fa-search aw-icon btn-search"\r\n                aria-hidden="true"\r\n                (click)="openPnDialog()"\r\n              ></i>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="italic" style="padding: 8px 0 0 16px;" *ngIf="pn && pn.articleDesignation">\r\n            {{ pn.articleDesignation }}\r\n          </div>\r\n        </div>\r\n\r\n        <div class="display--flex-row flex--1">\r\n          <div class="form-group required">\r\n            <label class="form-label">\r\n              <div style="display: inline;">\r\n                {{ getComponentName() + ".quantity" | translate }}\r\n                <span class="italic" style="display: inline;" *ngIf="pn && requestedQuantity && pn.quantityPerIssue">\r\n                  ({{ "distributionQuantity" | translate }} = {{ pn.quantityPerIssue | formatNumber }})\r\n                </span>\r\n              </div>\r\n            </label>\r\n\r\n            <div class="form-control">\r\n              <input type="number" name="quantity" class="aw-input" [(ngModel)]="requestedQuantity" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label class="form-label">{{ "unit" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <div class="form-control-generic" *ngIf="pn && requestedQuantity && pn.quantityUnit">\r\n                {{ pn.quantityUnit }}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div\r\n          class="form-group"\r\n          [ngClass]="{\r\n            required: procurementRequest.procStatus != awPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n          }"\r\n        >\r\n          <label class="form-label">{{ getComponentName() + ".expectedDate" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-calendar\r\n              appendTo="body"\r\n              class="aw-calendar"\r\n              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n              [locale]="sessionService.calendarFormat"\r\n              [(ngModel)]="procurementRequest.requestedDate"\r\n              showButtonBar="true"\r\n              [monthNavigator]="true"\r\n              [yearNavigator]="true"\r\n              [yearRange]="sessionService.calendarYearRange"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n\r\n        <div\r\n          class="form-group"\r\n          style="height: 47px;"\r\n          [ngClass]="{\r\n            required: procurementRequest.procStatus != awPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n          }"\r\n        >\r\n          <label class="form-label">{{ getComponentName() + ".criticity" | translate }}</label>\r\n\r\n          <div class="form-control aw-selectbutton-wrapper">\r\n            <p-selectButton [options]="criticalities" [(ngModel)]="procurementRequest.criticality"></p-selectButton>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">\r\n            {{ "criticityReason" | translate }}\r\n          </label>\r\n\r\n          <div class="form-control text-area">\r\n            <textarea\r\n              pInputTextarea\r\n              autoResize="autoResize"\r\n              class="aw-textarea"\r\n              [rows]="2"\r\n              [(ngModel)]="procurementRequest.criticalityReason"\r\n            ></textarea>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group" [ngClass]="{ \'visibility--hidden\': !isExpectedSnVisible() }">\r\n          <label class="form-label"> {{ getComponentName() + ".expectedSn" | translate }} </label>\r\n\r\n          <div class="form-control">\r\n            <input\r\n              class="aw-input"\r\n              name="value"\r\n              type="text"\r\n              [(ngModel)]="procurementRequest.procComment"\r\n              [disabled]="isReadOpenMode"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section">\r\n        <h4 class="section-title">{{ getComponentName() + ".recipient" | translate }}</h4>\r\n\r\n        <div class="section-content">\r\n          <div class="row">\r\n            <div class="form-group required">\r\n              <label class="form-label"> {{ getComponentName() + ".site" | translate }} </label>\r\n              <div class="form-control">\r\n                <p-dropdown\r\n                  appendTo="body"\r\n                  class="aw-dropdown fixed-width"\r\n                  placeholder="&nbsp;"\r\n                  [disabled]="isReadOpenMode || inputWorkOrder"\r\n                  [options]="sites"\r\n                  [showClear]="true"\r\n                  [(ngModel)]="procurementRequest.bidtSiteByBidtSiteReceiptId"\r\n                  (onChange)="updateWarehouses()"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-group required">\r\n              <label\r\n                class="form-label"\r\n                *ngIf="\r\n                  procurementRequest.procType == awPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE ||\r\n                  procurementRequest.procType == awPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE_ES ||\r\n                  procurementRequest.procType ==\r\n                    awPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE_WITH_EXCHANCE\r\n                "\r\n              >\r\n                {{ getComponentName() + ".workshop" | translate }}\r\n              </label>\r\n              <label\r\n                class="form-label"\r\n                *ngIf="\r\n                  procurementRequest.procType == awPropertiesConstants.PROCUREMENT_REQUEST_TYPE_STOCK_LEVELING ||\r\n                  procurementRequest.procType == awPropertiesConstants.PROCUREMENT_REQUEST_TYPE_STOCK_LEVELING_ES ||\r\n                  procurementRequest.procType == awPropertiesConstants.PROCUREMENT_REQUEST_TYPE_DEPLOYEMENT_BATCH\r\n                "\r\n              >\r\n                {{ getComponentName() + ".warehouse" | translate }}\r\n              </label>\r\n              <label\r\n                class="form-label"\r\n                *ngIf="procurementRequest.procType == awPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MISCELLANEOUS"\r\n              >\r\n                {{ getComponentName() + ".warehouse" | translate }} / {{ getComponentName() + ".workshop" | translate }}\r\n              </label>\r\n\r\n              <div class="form-control">\r\n                <p-dropdown\r\n                  appendTo="body"\r\n                  class="aw-dropdown fixed-width"\r\n                  placeholder="&nbsp;"\r\n                  [disabled]="isReadOpenMode || inputWorkOrder"\r\n                  [options]="warehouses"\r\n                  [showClear]="true"\r\n                  [(ngModel)]="procurementRequest.bidtWarehouseByBidtWarehouseReceiptId"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section">\r\n        <h4 class="section-title">{{ getComponentName() + ".desiredPotential" | translate }}</h4>\r\n\r\n        <div class="section-content">\r\n          <div class="row" *ngIf="units.length == 0">\r\n            <div class="form-group">\r\n              <div class="form-control">\r\n                <div class="form-control-generic italic">\r\n                  {{ getComponentName() + ".noPotentialUnit" | translate }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="row">\r\n            <div class="form-group" *ngIf="units.length > 0">\r\n              <label class="form-label"> {{ getComponentName() + ".value" | translate }} </label>\r\n\r\n              <div class="form-control">\r\n                <input\r\n                  class="aw-input"\r\n                  name="value"\r\n                  type="number"\r\n                  [(ngModel)]="procurementRequest.requestedPotential"\r\n                />\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-group" *ngIf="units.length > 0">\r\n              <label class="form-label">\r\n                {{ getComponentName() + ".unit" | translate }}\r\n              </label>\r\n\r\n              <div class="form-control">\r\n                <p-dropdown\r\n                  appendTo="body"\r\n                  class="aw-dropdown fixed-width"\r\n                  placeholder="&nbsp;"\r\n                  [options]="units"\r\n                  [showClear]="true"\r\n                  [(ngModel)]="procurementRequest.potentialUnit"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-group">\r\n              <label class="form-label">{{ getComponentName() + ".calendarPotential" | translate }}</label>\r\n\r\n              <div class="form-control">\r\n                <p-calendar\r\n                  appendTo="body"\r\n                  class="aw-calendar"\r\n                  [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                  [locale]="sessionService.calendarFormat"\r\n                  [(ngModel)]="procurementRequest.calendarPotential"\r\n                  showButtonBar="true"\r\n                  [monthNavigator]="true"\r\n                  [yearNavigator]="true"\r\n                  [yearRange]="sessionService.calendarYearRange"\r\n                ></p-calendar>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-group" *ngIf="units.length == 0"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">{{ "global.cancel" | translate }}</button>\r\n\r\n    <button\r\n      type="button"\r\n      class="btn-with-spinner"\r\n      color="primary"\r\n      mat-raised-button\r\n      (click)="validate()"\r\n      [disabled]="\r\n        !procurementRequest.procType ||\r\n        !pn ||\r\n        !requestedQuantity ||\r\n        !procurementRequest.bidtSiteByBidtSiteReceiptId ||\r\n        !procurementRequest.bidtWarehouseByBidtWarehouseReceiptId ||\r\n        (procurementRequest.procStatus != awPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT &&\r\n          (!procurementRequest.criticality || !procurementRequest.requestedDate)) ||\r\n        (procurementRequest.procType == awPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE_ES && !wo)\r\n      "\r\n    >\r\n      <span class="lds-hourglass" *ngIf="saving"></span>\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-pn\r\n  *ngIf="showPnDialog"\r\n  [(display)]="showPnDialog"\r\n  (onSelected)="onSelectPn($event)"\r\n  [showPartTypeSelection]="true"\r\n  [checkContainer]="true"\r\n  [withAllTypes]="true"\r\n  [withSparePartClass]="true"\r\n  [isSparePartClassPredefined]="\r\n    procurementRequest.procType == awPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE_ES ||\r\n    procurementRequest.procType == awPropertiesConstants.PROCUREMENT_REQUEST_TYPE_STOCK_LEVELING_ES\r\n  "\r\n></aw-dialog-search-pn>\r\n\r\n<aw-dialog-search-work-order *ngIf="showWoDialog" [(display)]="showWoDialog" (onSelected)="onSelectWo($event)">\r\n</aw-dialog-search-work-order>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/procurement-request/search/procurement-request-popup/procurement-request-popup.component.ts':
      /*!****************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/search/procurement-request-popup/procurement-request-popup.component.ts ***!
  \****************************************************************************************************************************/
      /*! exports provided: ProcurementRequestPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ProcurementRequestPopupComponent',
          function() {
            return ProcurementRequestPopupComponent;
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
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../../shared/utils/bido-family-variant-utils */ './src/app/shared/utils/bido-family-variant-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../../shared/utils/logistic-utils */ './src/app/shared/utils/logistic-utils.ts'
        );
        /* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../../shared/utils/number-utils */ './src/app/shared/utils/number-utils.ts'
        );
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
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

        var ComponentContext;
        (function(ComponentContext) {
          ComponentContext[(ComponentContext['DEFAULT'] = 0)] = 'DEFAULT';
          ComponentContext[(ComponentContext['WORK_ORDER'] = 1)] = 'WORK_ORDER';
        })(ComponentContext || (ComponentContext = {}));
        var ProcurementRequestPopupComponent = /** @class */ (function(_super) {
          __extends(ProcurementRequestPopupComponent, _super);
          function ProcurementRequestPopupComponent(
            sessionService,
            confirmationService,
            logisticsService,
            messageService,
            propertiesService,
            serializationService,
            tabService,
            translateService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read,
                'ProcurementRequestPopupComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.confirmationService = confirmationService;
            _this.logisticsService = logisticsService;
            _this.messageService = messageService;
            _this.propertiesService = propertiesService;
            _this.serializationService = serializationService;
            _this.tabService = tabService;
            _this.translateService = translateService;
            _this.awPropertiesConstants =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants'];
            _this.onValidate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.criticalities = [];
            _this.procurementRequestStatuses = [];
            _this.procurementRequestTypes = [];
            _this.sites = [];
            _this.units = [];
            _this.warehouses = [];
            _this.pn = undefined;
            _this.wo = undefined;
            _this.procurementRequest = {};
            _this.requestedQuantity = undefined;
            _this.showPnDialog = false;
            _this.showWoDialog = false;
            _this.loadCriticalities();
            _this.loadSites();
            _this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                  .ENGINEERING_PN_TYPES_MAP
              )
              .subscribe({
                next: function(pnTypes) {
                  _this.engineeringPnTypes = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__[
                    'ListUtils'
                  ].orEmpty(pnTypes);
                }
              });
            return _this;
          }
          ProcurementRequestPopupComponent.prototype.ngOnInit = function() {
            this.initCurrentComponentContext();
            this.loadProcurementRequestTypes();
            this.loadProcurementRequestStatuses();
            if (this.inputProcurementRequest) {
              // Edit mode
              this.updateOpenMode(
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read
              );
              this.initWithProcurementRequest();
              this.loadWarehouses(this.procurementRequest.bidtSiteByBidtSiteReceiptId);
              if (!!this.inputWorkOrder) {
                this.wo = this.inputWorkOrder;
              }
            } else {
              // Create mode
              this.updateOpenMode(
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Write
              );
              this.procurementRequest = {
                procStatus:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                    .PROCUREMENT_REQUEST_STATUS_RELEASED,
                requestedDate: new Date()
              };
              this.initWithPn(this.inputPn);
              this.initWithWorkOrder(this.inputWorkPackage, this.inputWorkOrder, this.inputWorkOrderStatus);
              if (!this.inputWorkOrder) {
                this.loadUserSite();
              }
            }
          };
          // ////////////////////////////////////////////////////////////////////////////
          ProcurementRequestPopupComponent.prototype.erasePn = function() {
            this.pn = undefined;
          };
          ProcurementRequestPopupComponent.prototype.eraseWo = function() {
            this.wo = undefined;
          };
          ProcurementRequestPopupComponent.prototype.onChangeProcurementRequestType = function() {
            if (!this.isWorkOrderContext) {
              this.updateWarehouses();
            }
          };
          ProcurementRequestPopupComponent.prototype.onSelectPn = function(pn) {
            this.pn = pn;
            this.loadUnits(pn);
            if (this.isWorkOrderContext) {
              this.procurementRequest.procType =
                pn.sparePartClassCode ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                  .SPC_REPAIRABLE_KEY
                  ? _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                      .PROCUREMENT_REQUEST_TYPE_MAINTENANCE_ES
                  : _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                      .PROCUREMENT_REQUEST_TYPE_MAINTENANCE;
            }
          };
          ProcurementRequestPopupComponent.prototype.onSelectWo = function(workOrder) {
            var _this = this;
            this.wo = workOrder;
            this.procurementRequest.requestedDate =
              workOrder.woScheduledStartDate || this.procurementRequest.requestedDate;
            this.loadProcurementRequestStatuses();
            if (workOrder.bidtWarehouseId) {
              this.logisticsService.getWarehouseById(workOrder.bidtWarehouseId).subscribe({
                next: function(warehouse) {
                  if (warehouse) {
                    _this.procurementRequest.bidtWarehouseByBidtWarehouseReceiptId = warehouse.wareHouseId;
                    _this.procurementRequest.bidtSiteByBidtSiteReceiptId = warehouse.bidtSiteId;
                    _this.loadWarehouses(_this.procurementRequest.bidtSiteByBidtSiteReceiptId);
                  }
                }
              });
            }
            if (
              this.procurementRequest.procType ===
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                .PROCUREMENT_REQUEST_TYPE_MAINTENANCE_ES
            ) {
              this.logisticsService.findBirePn({ pnCode: workOrder.assetPn }).subscribe({
                next: function(pn) {
                  if (pn) {
                    _this.onSelectPn(pn);
                  }
                }
              });
            }
          };
          ProcurementRequestPopupComponent.prototype.openPnDialog = function() {
            if (!this.isReadOpenMode) {
              this.showPnDialog = true;
            }
          };
          ProcurementRequestPopupComponent.prototype.openWoDialog = function() {
            this.showWoDialog = true;
          };
          ProcurementRequestPopupComponent.prototype.updateWarehouses = function() {
            this.procurementRequest.bidtWarehouseByBidtWarehouseReceiptId = undefined;
            this.warehouses = [];
            if (this.procurementRequest.bidtSiteByBidtSiteReceiptId) {
              this.loadWarehouses(this.procurementRequest.bidtSiteByBidtSiteReceiptId);
            }
          };
          ProcurementRequestPopupComponent.prototype.validate = function() {
            var _this = this;
            if (
              moment__WEBPACK_IMPORTED_MODULE_2__(this.procurementRequest.requestedDate).isBefore(
                moment__WEBPACK_IMPORTED_MODULE_2__(),
                'day'
              )
            ) {
              this.messageService.showWarningMessage(this.getTranslateKey('warningOnRequestDateInPast'));
            } else if (Number(this.requestedQuantity) <= 0) {
              this.messageService.showWarningMessage(this.getTranslateKey('warningOnNegativeQuantity'));
            } else {
              this.saving = true;
              // regression Here on edit, items has no more id !!
              this.addItemDataToProcurementRequest();
              this.addWorkOrderDataToProcurementRequest();
              this.logisticsService.checkQuantityConsistency(this.procurementRequest).subscribe({
                next: function(consistent) {
                  if (consistent) {
                    _this.checkSimilarProcurementRequestThenUpdate();
                  } else {
                    _this.confirmationService.confirm({
                      messageKey: _this.getTranslateKey('quantityNotConsistent'),
                      contextKeys: [_this.getTranslateKey('confirmContinue')],
                      accept: function() {
                        _this.checkSimilarProcurementRequestThenUpdate();
                      }
                    });
                  }
                }
              });
            }
          };
          ProcurementRequestPopupComponent.prototype.checkSimilarProcurementRequestThenUpdate = function() {
            var _this = this;
            var procurementRequestCriteria = {
              assetCode: this.isWorkOrderContext && this.inputWorkPackage ? this.inputWorkPackage.assetCode : undefined,
              procReqItemQuantity: this.requestedQuantity,
              procReqItemPnCode: this.pn ? this.pn.pnCode : undefined,
              withAlternatives: true,
              bidtProcurementRequest: {
                bidtSiteByBidtSiteReceiptId: this.procurementRequest.bidtSiteByBidtSiteReceiptId
              },
              procReqStatusExcluded: [
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                  .PROCUREMENT_REQUEST_STATUS_CANCELED,
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                  .PROCUREMENT_REQUEST_STATUS_CLOSED
              ]
            };
            this.logisticsService.findProcurementRequestsByCriteria(procurementRequestCriteria).subscribe({
              next: function(existingProcurementRequests) {
                if (
                  _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__['ListUtils'].isNullOrEmpty(
                    existingProcurementRequests
                  )
                ) {
                  _this.checkPnIsInApplicableConfigurationThenUpdate();
                } else {
                  var existingProcCode = existingProcurementRequests[0].procCode;
                  _this.confirmationService.confirm({
                    interpolateParams: { procCode: existingProcCode },
                    messageKey: _this.getTranslateKey('similarProcurementRequest'),
                    contextKeys: [_this.getTranslateKey('confirmContinue')],
                    accept: function() {
                      _this.checkPnIsInApplicableConfigurationThenUpdate();
                    }
                  });
                }
              }
            });
          };
          ProcurementRequestPopupComponent.prototype.isPnTypePresentInEngineeringPnTypes = function(pn) {
            return this.engineeringPnTypes.some(function(pnType) {
              return pnType.value === pn.pnType;
            });
          };
          ProcurementRequestPopupComponent.prototype.checkPnIsInApplicableConfigurationThenUpdate = function() {
            var _this = this;
            if (!this.isWorkOrderContext || !this.isPnTypePresentInEngineeringPnTypes(this.pn)) {
              this.updateProcurementRequest();
            } else {
              if (this.inputWorkPackage && this.inputWorkPackage.assetCode) {
                this.logisticsService
                  .findEquipment({ equipmentCode: this.inputWorkPackage.assetCode })
                  .pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['concatMap'])(function(equipment) {
                      var input = {
                        familyCode: _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_15__[
                          'BidoFamilyVariantUtils'
                        ].getFamilyCodeFromFamilyVariantCode(equipment.familyVariantCode),
                        structureType:
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__[
                            'AWPropertiesConstants'
                          ].STRUCTURE_TYPE_IPC_KEY,
                        variantCode: _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_15__[
                          'BidoFamilyVariantUtils'
                        ].getVariantCodeFromFamilyVariantCode(equipment.familyVariantCode),
                        pnCode: _this.pn.pnCode
                      };
                      return _this.logisticsService.findBireVersionPnsByFamilyAndVariantAndPnCode(input);
                    })
                  )
                  .subscribe({
                    next: function(bireVersionPns) {
                      if (
                        _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__['ListUtils'].isNullOrEmpty(
                          bireVersionPns
                        )
                      ) {
                        _this.confirmationService.confirm({
                          messageKey: _this.getTranslateKey('pnNotInApplicableConfiguration'),
                          contextKeys: [_this.getTranslateKey('confirmContinue')],
                          accept: function() {
                            _this.updateProcurementRequest();
                          }
                        });
                      } else {
                        _this.updateProcurementRequest();
                      }
                    }
                  });
              } else {
                this.updateProcurementRequest();
              }
            }
          };
          Object.defineProperty(ProcurementRequestPopupComponent.prototype, 'isDefaultContext', {
            // ////////////////////////////////////////////////////////////////////////////
            get: function() {
              return this.currentComponentContext === ComponentContext.DEFAULT;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(ProcurementRequestPopupComponent.prototype, 'isWorkOrderContext', {
            get: function() {
              return this.currentComponentContext === ComponentContext.WORK_ORDER;
            },
            enumerable: true,
            configurable: true
          });
          ProcurementRequestPopupComponent.prototype.addItemDataToProcurementRequest = function() {
            // correction regression by 'someone' on edit mode
            if (
              !!this.inputProcurementRequest &&
              !!this.procurementRequest.bidtProcReqItems &&
              !!this.procurementRequest.bidtProcReqItems[0]
            ) {
              this.procurementRequest.bidtProcReqItems[0] = __assign({}, this.procurementRequest.bidtProcReqItems[0], {
                birePn: this.pn,
                birePnPnCode: this.pn ? this.pn.pnCode : undefined,
                requestedQuantity: this.requestedQuantity
              });
            } else {
              this.procurementRequest.bidtProcReqItems = [
                {
                  birePn: this.pn,
                  birePnPnCode: this.pn ? this.pn.pnCode : undefined,
                  requestedQuantity: this.requestedQuantity
                }
              ];
            }
          };
          ProcurementRequestPopupComponent.prototype.addWorkOrderDataToProcurementRequest = function() {
            if (this.wo) {
              var workOrder = this.wo;
              this.procurementRequest.bidmWorkOrderProjectId = workOrder.projectId;
              this.procurementRequest.bidmWorkOrderWoId = workOrder.woId;
            }
          };
          ProcurementRequestPopupComponent.prototype.initCurrentComponentContext = function() {
            this.currentComponentContext = this.inputWorkOrder ? ComponentContext.WORK_ORDER : ComponentContext.DEFAULT;
          };
          ProcurementRequestPopupComponent.prototype.initWithPn = function(pn) {
            this.pn = pn;
          };
          ProcurementRequestPopupComponent.prototype.initWithProcurementRequest = function() {
            this.procurementRequest = this.inputProcurementRequest;
            this.procurementRequest.bidtProcReqItems = [this.inputBidtProcReqItem];
            this.pn =
              this.procurementRequest.bidtProcReqItems && this.procurementRequest.bidtProcReqItems.length === 1
                ? this.procurementRequest.bidtProcReqItems[0].birePn
                : undefined;
            this.requestedQuantity =
              this.procurementRequest.bidtProcReqItems &&
              this.procurementRequest.bidtProcReqItems.length === 1 &&
              this.procurementRequest.bidtProcReqItems[0].requestedQuantity
                ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_18__['NumberUtils']
                    .roundNumber(
                      _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_18__['NumberUtils'].fromString(
                        this.procurementRequest.bidtProcReqItems[0].requestedQuantity
                      ),
                      2
                    )
                    .toString()
                : undefined;
            if (this.pn) {
              this.loadUnits(this.pn);
            }
          };
          ProcurementRequestPopupComponent.prototype.initWithWorkOrder = function(
            workPackage,
            workOrder,
            workOrderStatus
          ) {
            var _this = this;
            if (workPackage && workOrder) {
              this.procurementRequest.procType =
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__[
                  'AWPropertiesConstants'
                ].PROCUREMENT_REQUEST_TYPE_MAINTENANCE;
              this.procurementRequest.requestedDate =
                workOrder.woScheduledStartDate || this.procurementRequest.requestedDate;
              this.wo = workOrder;
              this.logisticsService.findAllBireSite().subscribe({
                next: function(sites) {
                  var matchingSite = sites.find(function(site) {
                    return site.siteCode === workPackage.bireRepairCenterCode;
                  });
                  if (matchingSite) {
                    _this.procurementRequest.bidtSiteByBidtSiteReceiptId = matchingSite.siteId;
                    if (workOrder.bidtWarehouseId) {
                      _this.logisticsService.getWarehouseById(workOrder.bidtWarehouseId).subscribe({
                        next: function(warehouse) {
                          if (warehouse) {
                            _this.procurementRequest.bidtWarehouseByBidtWarehouseReceiptId = warehouse.wareHouseId;
                            _this.loadWarehouses(_this.procurementRequest.bidtSiteByBidtSiteReceiptId);
                          }
                        }
                      });
                    }
                  }
                }
              });
              if (
                workOrderStatus &&
                (workOrderStatus ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                    .AIRM_OPERATION_STATUS_PLANNED ||
                  workOrderStatus ===
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                      .AIRM_OPERATION_STATUS_RELEASED)
              ) {
                this.procurementRequest.procStatus =
                  workOrderStatus ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                    .AIRM_OPERATION_STATUS_PLANNED
                    ? _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                        .PROCUREMENT_REQUEST_STATUS_PLANNED
                    : _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                        .PROCUREMENT_REQUEST_STATUS_RELEASED;
              }
            }
          };
          ProcurementRequestPopupComponent.prototype.loadCriticalities = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                  .LOGISTICAL_CRITICALITY_MAP
              )
              .subscribe({
                next: function(criticalities) {
                  _this.criticalities = _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_17__[
                    'LogisticalUtils'
                  ].sortCriticities(criticalities);
                }
              });
          };
          ProcurementRequestPopupComponent.prototype.loadProcurementRequestStatuses = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                  .PROCUREMENT_REQUEST_STATUS_MAP
              )
              .subscribe({
                next: function(procurementRequestStatuses) {
                  var draftStatus = procurementRequestStatuses.find(function(e) {
                    return (
                      e.value ===
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                        .PROCUREMENT_REQUEST_STATUS_DRAFT
                    );
                  });
                  var plannedStatus = procurementRequestStatuses.find(function(e) {
                    return (
                      e.value ===
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                        .PROCUREMENT_REQUEST_STATUS_PLANNED
                    );
                  });
                  var releasedStatus = procurementRequestStatuses.find(function(e) {
                    return (
                      e.value ===
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                        .PROCUREMENT_REQUEST_STATUS_RELEASED
                    );
                  });
                  _this.procurementRequestStatuses = [draftStatus];
                  if ((_this.isWorkOrderContext && _this.inputWorkOrder) || !!_this.wo) {
                    if (
                      _this.inputWorkOrderStatus ===
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                          .AIRM_OPERATION_STATUS_PLANNED ||
                      (!!_this.wo &&
                        _this.wo.calculatedStatus ===
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__[
                            'AWPropertiesConstants'
                          ].AIRM_OPERATION_STATUS_PLANNED)
                    ) {
                      _this.procurementRequestStatuses.push(plannedStatus);
                    } else if (
                      _this.inputWorkOrderStatus ===
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                          .AIRM_OPERATION_STATUS_RELEASED ||
                      (!!_this.wo &&
                        _this.wo.calculatedStatus ===
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__[
                            'AWPropertiesConstants'
                          ].AIRM_OPERATION_STATUS_RELEASED)
                    ) {
                      _this.procurementRequestStatuses.push(releasedStatus);
                    }
                  } else {
                    _this.procurementRequestStatuses.push(releasedStatus);
                  }
                }
              });
          };
          ProcurementRequestPopupComponent.prototype.loadProcurementRequestTypes = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                  .PROCUREMENT_REQUEST_TYPE_MAP
              )
              .subscribe({
                next: function(types) {
                  var allowedTypes = _this.isWorkOrderContext
                    ? [
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                          .PROCUREMENT_REQUEST_TYPE_MAINTENANCE,
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                          .PROCUREMENT_REQUEST_TYPE_MAINTENANCE_WITH_EXCHANCE,
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                          .PROCUREMENT_REQUEST_TYPE_MAINTENANCE_ES
                      ]
                    : types.map(function(type) {
                        return type.value;
                      });
                  _this.procurementRequestTypes = types
                    .filter(function(type) {
                      return allowedTypes.includes(type.value);
                    })
                    .sort(function(s1, s2) {
                      return s1.label.localeCompare(s2.label);
                    });
                }
              });
          };
          ProcurementRequestPopupComponent.prototype.loadSites = function() {
            var _this = this;
            this.logisticsService.findAllBireSite().subscribe({
              next: function(sites) {
                _this.sites = sites
                  .map(function(res) {
                    return {
                      label: res.siteCode + ' - ' + res.siteName,
                      value: res.siteId
                    };
                  })
                  .sort(function(s1, s2) {
                    return s1.label.localeCompare(s2.label);
                  });
              }
            });
          };
          ProcurementRequestPopupComponent.prototype.loadUnits = function(pn) {
            var _this = this;
            this.logisticsService.findBidoCounterReferencesByPnCode({ pnCode: pn.pnCode }).subscribe({
              next: function(counterReferences) {
                _this.units = counterReferences
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
          };
          ProcurementRequestPopupComponent.prototype.loadUserSite = function() {
            var _this = this;
            this.sessionService.getUserSiteId().subscribe({
              next: function(site) {
                _this.procurementRequest.bidtSiteByBidtSiteReceiptId = site ? site.siteId : undefined;
                if (_this.procurementRequest.bidtSiteByBidtSiteReceiptId) {
                  _this.loadUserWarehouse(_this.procurementRequest.bidtSiteByBidtSiteReceiptId);
                }
              }
            });
          };
          ProcurementRequestPopupComponent.prototype.loadUserWarehouse = function(siteId) {
            var _this = this;
            this.sessionService.getUserWarehouseId().subscribe({
              next: function(warehouse) {
                if (warehouse && warehouse.wareHouseId) {
                  _this.loadWarehouses(siteId);
                  _this.procurementRequest.bidtWarehouseByBidtWarehouseReceiptId = warehouse
                    ? warehouse.wareHouseId
                    : undefined;
                }
              }
            });
          };
          ProcurementRequestPopupComponent.prototype.loadWarehouses = function(siteId) {
            var _this = this;
            this.logisticsService.getWarehousesBySiteId(siteId).subscribe({
              next: function(warehouses) {
                var whCategory =
                  _this.procurementRequest.procType ===
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                      .PROCUREMENT_REQUEST_TYPE_MAINTENANCE ||
                  _this.procurementRequest.procType ===
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                      .PROCUREMENT_REQUEST_TYPE_MAINTENANCE_WITH_EXCHANCE
                    ? _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                        .WAREHOUSE_CATEGORY_WORKSHOP
                    : _this.procurementRequest.procType ===
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                          .PROCUREMENT_REQUEST_TYPE_STOCK_LEVELING ||
                      _this.procurementRequest.procType ===
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                          .PROCUREMENT_REQUEST_TYPE_DEPLOYEMENT_BATCH
                    ? _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                        .WAREHOUSE_CATEGORY_WAREHOUSE
                    : undefined;
                _this.warehouses = warehouses
                  .filter(function(warehouse) {
                    return !whCategory || warehouse.whCategory === whCategory;
                  })
                  .map(function(warehouse) {
                    return {
                      label: '' + warehouse.whCode + (warehouse.whName ? ' - ' + warehouse.whName : ''),
                      value: warehouse.wareHouseId
                    };
                  })
                  .sort(function(s1, s2) {
                    return s1.label.localeCompare(s2.label);
                  });
              }
            });
          };
          ProcurementRequestPopupComponent.prototype.openProcurementRequest = function(procurementRequest) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__['ComponentConstants']
                  .LOG_PROCUREMENT_REQUEST_FORM,
              objectId: this.serializationService.serialize({ id: procurementRequest.id }),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ProcurementRequestPopupComponent.prototype.updateProcurementRequest = function() {
            var _this = this;
            var service$ = this.inputProcurementRequest
              ? this.logisticsService.addOrUpdateProcurementRequest(this.procurementRequest)
              : this.isWorkOrderContext || this.wo
              ? this.logisticsService.createProcurementRequestFromWorkOrder(this.procurementRequest)
              : this.logisticsService.createProcurementRequest(this.procurementRequest);
            service$.subscribe({
              next: function(procurementRequest) {
                var message = _this.inputProcurementRequest
                  ? 'successOnUpdateProcurementRequest'
                  : 'successOnCreateProcurementRequest';
                _this.messageService.showSuccessMessage(_this.getTranslateKey(message));
                _this.onValidate.emit(procurementRequest);
                _this.closeDialog();
                if (_this.isDefaultContext) {
                  _this.openProcurementRequest(procurementRequest);
                }
              }
            });
          };
          ProcurementRequestPopupComponent.prototype.isExpectedSnVisible = function() {
            return (
              !!this.pn &&
              !!this.pn.traceability &&
              (this.pn.traceability ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                  .PN_TRACEABILITY_BY_BATCH ||
                this.pn.traceability ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                    .PN_TRACEABILITY_BY_SN ||
                this.pn.traceability ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__['AWPropertiesConstants']
                    .PN_TRACEABILITY_BY_PACKAGING_BATCH_AND_SN)
            );
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('pn'), __metadata('design:type', Object)],
            ProcurementRequestPopupComponent.prototype,
            'inputPn',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('procurementRequest'),
              __metadata('design:type', Object)
            ],
            ProcurementRequestPopupComponent.prototype,
            'inputProcurementRequest',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('bidtProcReqItem'),
              __metadata('design:type', Object)
            ],
            ProcurementRequestPopupComponent.prototype,
            'inputBidtProcReqItem',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('workOrder'),
              __metadata('design:type', Object)
            ],
            ProcurementRequestPopupComponent.prototype,
            'inputWorkOrder',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('workOrderStatus'),
              __metadata('design:type', String)
            ],
            ProcurementRequestPopupComponent.prototype,
            'inputWorkOrderStatus',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('workPackage'),
              __metadata('design:type', Object)
            ],
            ProcurementRequestPopupComponent.prototype,
            'inputWorkPackage',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            ProcurementRequestPopupComponent.prototype,
            'onValidate',
            void 0
          );
          ProcurementRequestPopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-procurement-request-popup',
                template: __webpack_require__(
                  /*! ./procurement-request-popup.component.html */ './src/app/main/logistics/procurement-request/search/procurement-request-popup/procurement-request-popup.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_12__['SessionService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__['ConfirmationService'],
                _logistics_service__WEBPACK_IMPORTED_MODULE_19__['LogisticsService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__['MessageService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_10__['PropertiesService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_11__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__['TabService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            ProcurementRequestPopupComponent
          );
          return ProcurementRequestPopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_14__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/procurement-request/search/procurement-request-popup/procurement-request-popup.module.ts':
      /*!*************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/search/procurement-request-popup/procurement-request-popup.module.ts ***!
  \*************************************************************************************************************************/
      /*! exports provided: ProcurementRequestPopupModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ProcurementRequestPopupModule',
          function() {
            return ProcurementRequestPopupModule;
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
        /* harmony import */ var _shared_components_dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../../shared/components/dialog-search-pn/dialog-search-pn.module */ './src/app/shared/components/dialog-search-pn/dialog-search-pn.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_work_order_dialog_search_work_order_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../../shared/components/dialog-search-work-order/dialog-search-work-order.module */ './src/app/shared/components/dialog-search-work-order/dialog-search-work-order.module.ts'
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
        /* harmony import */ var _procurement_request_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./procurement-request-popup.component */ './src/app/main/logistics/procurement-request/search/procurement-request-popup/procurement-request-popup.component.ts'
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
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_17__['ModalModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_14__[
            'DialogSearchPnModule'
          ],
          _shared_components_dialog_search_work_order_dialog_search_work_order_module__WEBPACK_IMPORTED_MODULE_15__[
            'DialogSearchWorkOrderModule'
          ]
        ];
        var ProcurementRequestPopupModule = /** @class */ (function() {
          function ProcurementRequestPopupModule() {}
          ProcurementRequestPopupModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                exports: [
                  _procurement_request_popup_component__WEBPACK_IMPORTED_MODULE_19__['ProcurementRequestPopupComponent']
                ],
                declarations: [
                  _procurement_request_popup_component__WEBPACK_IMPORTED_MODULE_19__['ProcurementRequestPopupComponent']
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
                )
              })
            ],
            ProcurementRequestPopupModule
          );
          return ProcurementRequestPopupModule;
        })();

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-work-order/dialog-search-work-order.component.html':
      /*!****************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-work-order/dialog-search-work-order.component.html ***!
  \****************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="65">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n\r\n    <i class="material-icons aw-icon aw-icon-with-border" (click)="onCancel()">close</i>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="search-dialog-container">\r\n      <div class="section search-criteria-section">\r\n        <h4 class="section-title">{{ "global.search" | translate }}</h4>\r\n\r\n        <div class="section-content">\r\n          <div class="column">\r\n            <div class="row">\r\n              <div class="col">\r\n                <div class="form-group">\r\n                  <label class="form-label"> {{ getComponentName() + ".bidmProjectNumber" | translate }} </label>\r\n\r\n                  <div class="form-control">\r\n                    <input class="aw-input" type="text" [(ngModel)]="searchObject.projectCriteria.projectNumber" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ getComponentName() + ".woCode" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <input class="aw-input" type="text" [(ngModel)]="searchObject.workOrderCriteria.woCode" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ getComponentName() + ".woType" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="propertyWoType"\r\n                    [(ngModel)]="searchObject.workOrderCriteria.woType"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ getComponentName() + ".statusState" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="status"\r\n                    [(ngModel)]="searchObject.workOrderCriteria.calculatedStatus"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ getComponentName() + ".woDescription" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <input class="aw-input" type="text" [(ngModel)]="searchObject.workOrderCriteria.woDescription" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ getComponentName() + ".site" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    appendTo="body"\r\n                    class="aw-dropdown fixed-width"\r\n                    placeholder="&nbsp;"\r\n                    [options]="sites"\r\n                    [showClear]="true"\r\n                    [(ngModel)]="bidtSiteId"\r\n                    (onChange)="updateWarehouses()"\r\n                    [disabled]="disable"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label"> {{ getComponentName() + ".workshop" | translate }} </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    appendTo="body"\r\n                    class="aw-dropdown fixed-width"\r\n                    placeholder="&nbsp;"\r\n                    [options]="warehouses"\r\n                    [showClear]="true"\r\n                    [(ngModel)]="searchObject.workOrderCriteria.bidtWarehouseId"\r\n                    [disabled]="disable"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <label class="form-label">{{ getComponentName() + ".pn" | translate }}</label>\r\n\r\n                <div class="form-control form-control-with-modal">\r\n                  <div class="form-control-data" (click)="openPnDialog()">\r\n                    {{ pn?.pnCode }}\r\n                  </div>\r\n\r\n                  <div *ngIf="pn" class="btn-clear-wrapper">\r\n                    <i\r\n                      class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                      aria-hidden="true"\r\n                      (click)="erasePn()"\r\n                    ></i>\r\n                  </div>\r\n                  <div class="btn-search-wrapper">\r\n                    <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="openPnDialog()"></i>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="italic" style="padding: 8px 0 0 16px;" *ngIf="pn && pn.articleDesignation">\r\n                  {{ pn.articleDesignation }}\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".sn" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <input class="aw-input" type="text" [(ngModel)]="searchObject.workOrderCriteria.assetSn" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="row search-criteria-footer">\r\n              <div class="search-actions">\r\n                <button type="button" color="primary" mat-raised-button (click)="searchWorkOrders()">\r\n                  <span>{{ "global.toSearch" | translate }}</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section results-section">\r\n        <h4 class="section-title">\r\n          {{ "global.results" | translate }} ({{ resultsTable.list ? resultsTable.list.length : 0 }})\r\n        </h4>\r\n\r\n        <div class="section-content">\r\n          <p-table\r\n            [resizableColumns]="true"\r\n            #ptable\r\n            class="aw-table2"\r\n            [columns]="resultsTableCols"\r\n            [value]="resultsTable.list"\r\n            [(selection)]="selectedObject"\r\n            selectionMode="single"\r\n            dataKey="woCode"\r\n            [scrollable]="true"\r\n            (onRowUnselect)="onRowUnselect()"\r\n          >\r\n            <ng-template pTemplate="emptymessage">\r\n              <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n              <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                <div class="lds-hourglass"></div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="caption">\r\n              <div class="aw-table-header">\r\n                <div class="aw-table-global-filter">\r\n                  <label class="aw-table-global-filter-label">\r\n                    <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    #ptableGlobalFilter\r\n                    class="aw-table-global-filter-input"\r\n                    type="text"\r\n                    placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                    (input)="ptable.filterGlobal($event.target.value, \'contains\')"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="colgroup" let-columns>\r\n              <colgroup>\r\n                <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n              </colgroup>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="header" let-columns>\r\n              <tr>\r\n                <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                  {{ getComponentName() + "." + col.field | translate }}\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n              <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                  <span *ngIf="!col.isDate && col.field !== \'woType\' && col.field !== \'calculatedStatus\'">\r\n                    {{ rowData[col.field] }}\r\n                  </span>\r\n                  <span\r\n                    *ngIf="\r\n                      !col.isDate && rowData[col.field] && (col.field === \'woType\' || col.field === \'calculatedStatus\')\r\n                    "\r\n                  >\r\n                    {{ getComponentName() + "." + rowData[col.field] | translate }}\r\n                  </span>\r\n                  <span *ngIf="col.isDate">\r\n                    {{ rowData[col.field] | date: "short":"":translateService.currentLang }}\r\n                  </span>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </p-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="onCancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isOneObjectSelected()" color="primary" type="button" mat-raised-button (click)="onValidate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-pn\r\n  *ngIf="showPnDialog"\r\n  [(display)]="showPnDialog"\r\n  (onSelected)="onSelectPn($event)"\r\n  [showPartTypeSelection]="true"\r\n></aw-dialog-search-pn>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-work-order/dialog-search-work-order.component.ts':
      /*!**************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-work-order/dialog-search-work-order.component.ts ***!
  \**************************************************************************************************/
      /*! exports provided: DialogSearchWorkOrderComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchWorkOrderComponent',
          function() {
            return DialogSearchWorkOrderComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _main_logistics_logistics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../main/logistics/logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _main_maintenance_work_package_form_popups_dialog_work_order_edition_dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service */ './src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _dialog_search_work_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./dialog-search-work-order.service */ './src/app/shared/components/dialog-search-work-order/dialog-search-work-order.service.ts'
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

        var DialogSearchWorkOrderComponent = /** @class */ (function(_super) {
          __extends(DialogSearchWorkOrderComponent, _super);
          function DialogSearchWorkOrderComponent(
            dialogSearchWorkOrderService,
            sessionService,
            translateService,
            messageService,
            logisticsService,
            dialogWorkOrderEditService
          ) {
            var _this =
              _super.call(
                this,
                _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Write,
                'DialogSearchWorkOrderComponent'
              ) || this;
            _this.dialogSearchWorkOrderService = dialogSearchWorkOrderService;
            _this.sessionService = sessionService;
            _this.translateService = translateService;
            _this.messageService = messageService;
            _this.logisticsService = logisticsService;
            _this.dialogWorkOrderEditService = dialogWorkOrderEditService;
            _this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.isLoading = false;
            _this.resultsTable = {
              list: [],
              moreResults: false
            };
            _this.searchObject = {
              projectCriteria: {},
              workOrderCriteria: {}
            };
            _this.selectedObject = {};
            _this.showPnDialog = false;
            _this.resultsTableCols = [
              { field: 'bidmProjectNumber', alignment: 'left', width: '100px' },
              { field: 'woCode', alignment: 'left', width: '100px' },
              { field: 'woType', alignment: 'left', width: '100px' },
              { field: 'calculatedStatus', alignment: 'left', width: '100px' },
              { field: 'woDescription', alignment: 'left', width: '250px' }
            ];
            _this.propertyWoType = [];
            _this.status = [];
            _this.sites = [];
            _this.warehouses = [];
            _this.loadPrCategories();
            _this.loadSites();
            _this.loadStatus();
            _this.loadUser();
            return _this;
          }
          DialogSearchWorkOrderComponent.prototype.ngOnInit = function() {
            if (!!this.sourceSearchObject) {
              this.bidtSiteId = this.sourceSearchObject.projectCriteria.bireRepairCenterCode;
              this.updateWarehouses();
              this.searchObject.workOrderCriteria.bidtWarehouseId = this.sourceSearchObject.workOrderCriteria.bidtWarehouseId;
              this.disable = true;
            }
          };
          DialogSearchWorkOrderComponent.prototype.searchWorkOrders = function() {
            var _this = this;
            this.isLoading = true;
            var site = this.sitesList.find(function(s) {
              return s.siteId === Number(_this.bidtSiteId);
            });
            if (!!site) {
              this.searchObject.projectCriteria.bireRepairCenterCode = site.siteCode;
            }
            this.dialogSearchWorkOrderService.findWorkOrder(this.searchObject).subscribe(
              function(results) {
                if (results) {
                  _this.resultsTable = results;
                  _this.isLoading = false;
                }
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSearch'));
              }
            );
          };
          DialogSearchWorkOrderComponent.prototype.onValidate = function() {
            this.onSelected.emit(this.selectedObject);
            this.selectedObject = {};
            this.display = false;
          };
          // Clean the selectedObject object if the row is unselect
          DialogSearchWorkOrderComponent.prototype.onRowUnselect = function() {
            this.selectedObject = {};
          };
          // Clean all the object on rerender
          DialogSearchWorkOrderComponent.prototype.onShow = function() {
            this.selectedObject = {};
            this.resultsTable = {
              list: [],
              moreResults: false
            };
          };
          /*
      <summary>Close the pop up on cancel</summary>
      */
          DialogSearchWorkOrderComponent.prototype.onCancel = function() {
            this.selectedObject = {};
            this.resultsTable = {
              list: [],
              moreResults: false
            };
            this.display = false;
          };
          DialogSearchWorkOrderComponent.prototype.isOneObjectSelected = function() {
            return !this.selectedObject.woCode;
          };
          DialogSearchWorkOrderComponent.prototype.loadPrCategories = function() {
            var _this = this;
            this.dialogSearchWorkOrderService.getAirmWorkOrderTypeList().subscribe(
              function(result) {
                _this.propertyWoType = result;
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetWoTypeList'));
              }
            );
          };
          DialogSearchWorkOrderComponent.prototype.loadSites = function() {
            var _this = this;
            this.sitesList = [];
            this.logisticsService.findAllBireSite().subscribe({
              next: function(sites) {
                _this.sitesList = sites;
                _this.sites = sites
                  .map(function(res) {
                    return {
                      label: res.siteCode + ' - ' + res.siteName,
                      value: !!res.siteId ? res.siteId.toString() : ''
                    };
                  })
                  .sort(function(s1, s2) {
                    return s1.label.localeCompare(s2.label);
                  });
              }
            });
          };
          DialogSearchWorkOrderComponent.prototype.loadStatus = function() {
            this.status.push({
              value:
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .AIRM_OPERATION_STATUS_SIMULATED,
              label: this.translateService.instant('simulated')
            });
            this.status.push({
              value:
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .AIRM_OPERATION_STATUS_PLANNED,
              label: this.translateService.instant('planned')
            });
            this.status.push({
              value:
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .AIRM_OPERATION_STATUS_RELEASED,
              label: this.translateService.instant('released')
            });
            this.status.push({
              value:
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .AIRM_OPERATION_STATUS_ONGOING,
              label: this.translateService.instant('onGoing')
            });
            this.status.push({
              value:
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .AIRM_OPERATION_STATUS_TO_BE_CONFIRMED,
              label: this.translateService.instant('toBeConfirmed')
            });
            this.status.push({
              value:
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .AIRM_OPERATION_STATUS_PERFORMED,
              label: this.translateService.instant('performed')
            });
            this.status.push({
              value:
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .AIRM_PROJECT_STATUS_CLOSE,
              label: this.translateService.instant('closed')
            });
          };
          DialogSearchWorkOrderComponent.prototype.loadUser = function() {
            var _this = this;
            var param = {
              useCaseCode:
                _constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_6__['BidoFunctionTypeConstants']
                  .UC_AIRM_RECEPTION
            };
            this.dialogWorkOrderEditService.findUsersWithUseCaseForWorkOrder(param).subscribe(function(data) {
              _this.userList = data.map(function(user) {
                return {
                  label: user.lastname + ' ' + user.firstname,
                  value: user.userId
                };
              });
            });
          };
          DialogSearchWorkOrderComponent.prototype.loadWarehouses = function(siteId) {
            var _this = this;
            this.logisticsService.getWarehousesBySiteId(siteId).subscribe({
              next: function(warehouses) {
                _this.warehouses = warehouses
                  .map(function(warehouse) {
                    return {
                      label: '' + warehouse.whCode + (warehouse.whName ? ' - ' + warehouse.whName : ''),
                      value: warehouse.wareHouseId
                    };
                  })
                  .sort(function(s1, s2) {
                    return s1.label.localeCompare(s2.label);
                  });
              }
            });
          };
          DialogSearchWorkOrderComponent.prototype.updateWarehouses = function() {
            this.searchObject.workOrderCriteria.bidtWarehouseId = undefined;
            this.warehouses = [];
            if (this.bidtSiteId && !isNaN(Number(this.bidtSiteId))) {
              this.loadWarehouses(Number(this.bidtSiteId));
            }
          };
          DialogSearchWorkOrderComponent.prototype.openPnDialog = function() {
            this.showPnDialog = true;
          };
          DialogSearchWorkOrderComponent.prototype.onSelectPn = function(pn) {
            this.pn = pn;
            this.searchObject.workOrderCriteria.assetPn = this.pn.articleDesignation;
          };
          DialogSearchWorkOrderComponent.prototype.erasePn = function() {
            this.pn = undefined;
            this.searchObject.workOrderCriteria.assetPn = undefined;
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(), __metadata('design:type', Object)],
            DialogSearchWorkOrderComponent.prototype,
            'onSelected',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogSearchWorkOrderComponent.prototype,
            'sourceSearchObject',
            void 0
          );
          DialogSearchWorkOrderComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-search-work-order',
                template: __webpack_require__(
                  /*! ./dialog-search-work-order.component.html */ './src/app/shared/components/dialog-search-work-order/dialog-search-work-order.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _dialog_search_work_order_service__WEBPACK_IMPORTED_MODULE_10__['DialogSearchWorkOrderService'],
                _services_session_service__WEBPACK_IMPORTED_MODULE_9__['SessionService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _services_message_service__WEBPACK_IMPORTED_MODULE_8__['MessageService'],
                _main_logistics_logistics_service__WEBPACK_IMPORTED_MODULE_2__['LogisticsService'],
                _main_maintenance_work_package_form_popups_dialog_work_order_edition_dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_3__[
                  'DialogWorkOrderEditService'
                ]
              ])
            ],
            DialogSearchWorkOrderComponent
          );
          return DialogSearchWorkOrderComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__['DialogComponent']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-work-order/dialog-search-work-order.module.ts':
      /*!***********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-work-order/dialog-search-work-order.module.ts ***!
  \***********************************************************************************************/
      /*! exports provided: DialogSearchWorkOrderModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchWorkOrderModule',
          function() {
            return DialogSearchWorkOrderModule;
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
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _main_logistics_logistics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../main/logistics/logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _main_maintenance_work_package_form_popups_dialog_work_order_edition_dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service */ './src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service.ts'
        );
        /* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../dialog-search-pn/dialog-search-pn.module */ './src/app/shared/components/dialog-search-pn/dialog-search-pn.module.ts'
        );
        /* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dialog_search_work_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./dialog-search-work-order.component */ './src/app/shared/components/dialog-search-work-order/dialog-search-work-order.component.ts'
        );
        /* harmony import */ var _dialog_search_work_order_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./dialog-search-work-order.service */ './src/app/shared/components/dialog-search-work-order/dialog-search-work-order.service.ts'
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
          primeng_table__WEBPACK_IMPORTED_MODULE_3__['TableModule']
        ];
        var INTERNAL_MODULES = [
          _dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_9__['DialogSearchPnModule'],
          _modal_modal_module__WEBPACK_IMPORTED_MODULE_10__['ModalModule']
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _dialog_search_work_order_component__WEBPACK_IMPORTED_MODULE_11__['DialogSearchWorkOrderComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _dialog_search_work_order_service__WEBPACK_IMPORTED_MODULE_12__['DialogSearchWorkOrderService'],
          _main_maintenance_work_package_form_popups_dialog_work_order_edition_dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_5__[
            'DialogWorkOrderEditService'
          ],
          _main_logistics_logistics_service__WEBPACK_IMPORTED_MODULE_4__['LogisticsService']
        ];
        var DialogSearchWorkOrderModule = /** @class */ (function() {
          function DialogSearchWorkOrderModule() {}
          DialogSearchWorkOrderModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS),
                exports: __spread(COMPONENTS),
                imports: __spread(
                  [
                    _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_6__['AngularCommonSharedModule'],
                    _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_7__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _app_common_shared_module__WEBPACK_IMPORTED_MODULE_8__['AppCommonSharedModule']
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            DialogSearchWorkOrderModule
          );
          return DialogSearchWorkOrderModule;
        })();

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-work-order/dialog-search-work-order.service.ts':
      /*!************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-work-order/dialog-search-work-order.service.ts ***!
  \************************************************************************************************/
      /*! exports provided: DialogSearchWorkOrderService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchWorkOrderService',
          function() {
            return DialogSearchWorkOrderService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/aircraft-maintenance.api */ './src/app/shared/api/aircraft-maintenance.api.ts'
        );
        /* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../services/app-config.service */ './src/app/shared/services/app-config.service.ts'
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

        var DialogSearchWorkOrderService = /** @class */ (function(_super) {
          __extends(DialogSearchWorkOrderService, _super);
          function DialogSearchWorkOrderService(http, appConfigService, aircraftMaintenanceApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
            return _this;
          }
          DialogSearchWorkOrderService.prototype.findWorkOrder = function(criteria) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.findBidmWorkOrdersByCriteria, criteria);
          };
          DialogSearchWorkOrderService.prototype.getAirmWorkOrderTypeList = function() {
            return _super.prototype.get.call(this, this.aircraftMaintenanceApi.getAirmWorkOrderTypeList);
          };
          DialogSearchWorkOrderService.prototype.getAirmProjectStatusList = function() {
            return _super.prototype.get.call(this, this.aircraftMaintenanceApi.getAirmProjectStatusList);
          };
          DialogSearchWorkOrderService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_2__['AircraftMaintenanceApi']
              ])
            ],
            DialogSearchWorkOrderService
          );
          return DialogSearchWorkOrderService;
        })(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

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
      },

    /***/ './src/app/shared/utils/logistic-utils.ts':
      /*!************************************************!*\
  !*** ./src/app/shared/utils/logistic-utils.ts ***!
  \************************************************/
      /*! exports provided: LogisticalUtils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'LogisticalUtils', function() {
          return LogisticalUtils;
        });
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! moment */ './node_modules/moment/moment.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          moment__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../constants/bidt-stock-mvt-constants */ './src/app/shared/constants/bidt-stock-mvt-constants.ts'
        );
        /* harmony import */ var _list_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _number_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./number-utils */ './src/app/shared/utils/number-utils.ts'
        );
        /* harmony import */ var _string_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./string-utils */ './src/app/shared/utils/string-utils.ts'
        );

        var LogisticalUtils = /** @class */ (function() {
          function LogisticalUtils() {}
          LogisticalUtils.sortCriticities = function(criticities) {
            return criticities.sort(function(c1, _c2) {
              if (
                c1.value ===
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .LOGISTICAL_CRITICALITY_ROUTINE
              ) {
                return -1;
              } else if (
                c1.value ===
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .LOGISTICAL_CRITICALITY_IMMEDIATE
              ) {
                return 1;
              }
              return 0;
            });
          };
          LogisticalUtils.getServedIndicators = function(procurementRequest) {
            if (procurementRequest.bidtWarehouseReceipt && procurementRequest.bidtWarehouseReceipt.whCategory) {
              var procurementRequestItems = this.buildProcurementRequestItemsRows(procurementRequest);
              return this.computeProcurementRequestProgress(procurementRequestItems);
            } else {
              return undefined;
            }
          };
          LogisticalUtils.buildProcurementRequestItemsRows = function(procurementRequest) {
            var _this = this;
            return _list_utils__WEBPACK_IMPORTED_MODULE_3__['ListUtils']
              .orEmpty(procurementRequest.bidtProcReqItems)
              .map(function(bidtProcReqItem) {
                return _this.buildProcurementRequestItemRow(bidtProcReqItem);
              })
              .sort(function(x, y) {
                if (x.obj.statusDate && y.obj.statusDate) {
                  return moment__WEBPACK_IMPORTED_MODULE_0__(x.obj.statusDate).isBefore(y.obj.statusDate) ? -1 : 1;
                } else if (x.obj.statusDate) {
                  return -1;
                } else {
                  return 1;
                }
              });
          };
          LogisticalUtils.buildProcurementRequestItemRow = function(procurementRequestItem) {
            var progress = this.computeProcurementRequestItemProgress(
              procurementRequestItem.workshopEntries,
              procurementRequestItem.requestedQuantity
            );
            return {
              obj: procurementRequestItem,
              allNb: progress.allNb,
              servedNb: progress.servedNb,
              bookedNb: progress.bookedNb,
              notBookedNb: progress.notBookedNb,
              warehouseName: undefined,
              siteName: undefined
            };
          };
          LogisticalUtils.computeProcurementRequestReverseItemProgress = function(stockMvts) {
            var filteredStockMvts = _list_utils__WEBPACK_IMPORTED_MODULE_3__['ListUtils']
              .orEmpty(stockMvts)
              .filter(function(stockMvt) {
                return (
                  stockMvt.stockMvtWay ===
                  _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                    .MVT_WAY_CREDIT
                );
              });
            var reversedStockMvts = filteredStockMvts.filter(function(stockMvt) {
              return (
                stockMvt.mvtStatus ===
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .MM_MVT_STATUS_EXECUTED_KEY
              );
            });
            var allNb = filteredStockMvts
              .map(function(stockMvt) {
                return stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0;
              })
              .reduce(function(acc, x) {
                return acc + x;
              }, 0);
            var reversedNb = reversedStockMvts
              .map(function(stockMvt) {
                return stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0;
              })
              .reduce(function(acc, x) {
                return acc + x;
              }, 0);
            var notReversedNb = allNb - reversedNb;
            return { allNb: allNb, reversedNb: reversedNb, notReversedNb: notReversedNb };
          };
          LogisticalUtils.computeProcurementRequestItemProgress = function(stockMvts, requestedQuantity) {
            var filteredStockMvts = _list_utils__WEBPACK_IMPORTED_MODULE_3__['ListUtils']
              .orEmpty(stockMvts)
              .filter(function(stockMvt) {
                return (
                  stockMvt.stockMvtWay ===
                  _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                    .MVT_WAY_CREDIT
                );
              });
            var servedStockMvts = filteredStockMvts.filter(function(stockMvt) {
              return (
                stockMvt.mvtStatus ===
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .MM_MVT_STATUS_EXECUTED_KEY
              );
            });
            var servedNb = servedStockMvts
              .map(function(stockMvt) {
                return stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0;
              })
              .reduce(function(acc, x) {
                return acc + x;
              }, 0);
            var bookedNb = filteredStockMvts
              .filter(function(stockMvt) {
                return (
                  stockMvt.mvtStatus !==
                    _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                      .MM_MVT_STATUS_EXECUTED_KEY &&
                  stockMvt.mvtStatus !==
                    _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                      .MM_MVT_STATUS_CANCELED_KEY &&
                  (!_string_utils__WEBPACK_IMPORTED_MODULE_5__['StringUtils'].isNullOrEmpty(stockMvt.stockMvtSn) ||
                    !_string_utils__WEBPACK_IMPORTED_MODULE_5__['StringUtils'].isNullOrEmpty(
                      stockMvt.stockMvtBatchNumber
                    ))
                );
              })
              .map(function(stockMvt) {
                return stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0;
              })
              .reduce(function(acc, x) {
                return acc + x;
              }, 0);
            var notServedNb = _string_utils__WEBPACK_IMPORTED_MODULE_5__['StringUtils'].isNullOrEmpty(requestedQuantity)
              ? 0
              : Math.max(
                  0,
                  _number_utils__WEBPACK_IMPORTED_MODULE_4__['NumberUtils'].fromString(requestedQuantity) -
                    servedNb -
                    bookedNb
                );
            return {
              allNb: filteredStockMvts.length,
              bookedNb: bookedNb,
              notBookedNb: notServedNb,
              servedNb: servedNb
            };
          };
          LogisticalUtils.computeProcurementRequestProgress = function(procurementRequestItems) {
            var procurementRequestQuantity = _list_utils__WEBPACK_IMPORTED_MODULE_3__['ListUtils']
              .orEmpty(procurementRequestItems)
              .map(function(e) {
                return e.obj.requestedQuantity;
              })
              .filter(function(quantity) {
                return !_string_utils__WEBPACK_IMPORTED_MODULE_5__['StringUtils'].isNullOrEmpty(quantity);
              })
              .map(function(quantity) {
                return _number_utils__WEBPACK_IMPORTED_MODULE_4__['NumberUtils'].fromString(quantity);
              })
              .reduce(function(acc, x) {
                return acc + x;
              }, 0);
            var procurementRequestProgress = _list_utils__WEBPACK_IMPORTED_MODULE_3__['ListUtils']
              .orEmpty(procurementRequestItems)
              .reduce(
                function(a, b) {
                  return {
                    bookedNb: a.bookedNb + b.bookedNb,
                    notBookedNb: a.notBookedNb + b.notBookedNb,
                    servedNb: a.servedNb + b.servedNb
                  };
                },
                {
                  bookedNb: 0,
                  notBookedNb: 0,
                  servedNb: 0
                }
              );
            return {
              bookedNb: procurementRequestProgress.bookedNb,
              notBookedNb: procurementRequestProgress.notBookedNb,
              isServed: procurementRequestProgress.servedNb === procurementRequestQuantity,
              servedNb: procurementRequestProgress.servedNb
            };
          };
          LogisticalUtils.isReversedTransfer = function(mvts) {
            return mvts.some(function(mvt) {
              return (
                mvt.stockMvtWay ===
                  _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                    .MVT_WAY_CREDIT &&
                mvt.mvtStatus ===
                  _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                    .MM_MVT_STATUS_EXECUTED_KEY
              );
            });
          };
          LogisticalUtils.isReversingTransfer = function(mvts) {
            return (
              mvts.some(function(mvt) {
                return (
                  mvt.stockMvtWay ===
                    _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                      .MVT_WAY_DEBIT &&
                  mvt.mvtStatus ===
                    _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                      .MM_MVT_STATUS_EXECUTED_KEY
                );
              }) &&
              mvts.some(function(mvt) {
                return (
                  mvt.stockMvtWay ===
                    _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                      .MVT_WAY_CREDIT &&
                  mvt.mvtStatus !==
                    _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                      .MM_MVT_STATUS_EXECUTED_KEY
                );
              })
            );
          };
          LogisticalUtils.isExecutingTransfer = function(mvts) {
            return (
              !mvts.some(function(mvt) {
                return (
                  mvt.stockMvtWay ===
                    _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                      .MVT_WAY_DEBIT &&
                  mvt.mvtStatus ===
                    _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                      .MM_MVT_STATUS_EXECUTED_KEY
                );
              }) &&
              !mvts.some(function(mvt) {
                return (
                  mvt.stockMvtWay ===
                    _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                      .MVT_WAY_CREDIT &&
                  mvt.mvtStatus ===
                    _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                      .MM_MVT_STATUS_EXECUTED_KEY
                );
              })
            );
          };
          LogisticalUtils.isWaitingTransfer = function(mvts) {
            return mvts.some(function(mvt) {
              return (
                mvt.stockMvtWay ===
                  _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                    .MVT_WAY_TRANSFER &&
                mvt.mvtStatus !==
                  _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                    .MM_MVT_STATUS_EXECUTED_KEY
              );
            });
          };
          return LogisticalUtils;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=default~engineering-management-engineering-management-module~logistics-goods-movement-goods-movement~dc75f919.js.map
