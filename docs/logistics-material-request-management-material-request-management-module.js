(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['logistics-material-request-management-material-request-management-module'],
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

    /***/ './node_modules/primeng/keyfilter.js':
      /*!*******************************************!*\
  !*** ./node_modules/primeng/keyfilter.js ***!
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
            /*! ./components/keyfilter/keyfilter */ './node_modules/primeng/components/keyfilter/keyfilter.js'
          )
        );

        /***/
      },

    /***/ './node_modules/primeng/message.js':
      /*!*****************************************!*\
  !*** ./node_modules/primeng/message.js ***!
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
            /*! ./components/message/message */ './node_modules/primeng/components/message/message.js'
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

    /***/ './src/app/main/logistics/material-request-management/form/material-request-management-form.component.html':
      /*!*****************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-management/form/material-request-management-form.component.html ***!
  \*****************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <h2 class="page-title">{{ "transaction." + componentData.componentId | translate }}</h2>\r\n\r\n      <div class="page-subtitle">\r\n        <div *ngIf="subtitle" class="page-subtitle">- {{ subtitle }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="onChangeCustomer()"\r\n      *ngIf="isUserHasRight(bidoFunctionTypeConstants.UC_MM_SUPPLIER_CHANGE, bidoFunctionTypeConstants.DEGREE_MANAGE)"\r\n    >\r\n      {{ getComponentName() + ".redirectRequest" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="onChangeSupplier()"\r\n      *ngIf="isUserHasRight(bidoFunctionTypeConstants.UC_MM_SUPPLIER_CHANGE, bidoFunctionTypeConstants.DEGREE_UPDATE)"\r\n    >\r\n      {{ getComponentName() + ".changeSupplier" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item (click)="reload()">\r\n        {{ "global.refresh" | translate }}\r\n      </button>\r\n      <!-- <button mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button> -->\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--8">\r\n          <div class="grid-cell grid-cell--container grid-cell-scope  grid-cell-item-structure">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container loading-indicator">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".procurementRequest" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ getComponentName() + ".requestNb" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <div class="form-control-generic">\r\n                          {{ procurementRequest.procCode }}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ getComponentName() + ".expirationDate" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <div class="form-control-generic">\r\n                          {{\r\n                            procurementRequest.calendarPotential | date: "yyyy/MM/dd":"":translateService.currentLang\r\n                          }}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ "status" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <div class="form-control-generic">\r\n                          {{ formatStatus(procurementRequest.procStatus) }}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ getComponentName() + ".criticity" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <div class="form-control-generic">\r\n                          <span\r\n                            *ngIf="\r\n                              procurementRequest.criticality === aWPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE\r\n                            "\r\n                            class="ok"\r\n                          >\r\n                            {{ componentData.componentId + ".routine" | translate }}\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf="\r\n                              procurementRequest.criticality === aWPropertiesConstants.LOGISTICAL_CRITICALITY_IMMEDIATE\r\n                            "\r\n                            class="nok"\r\n                          >\r\n                            {{ componentData.componentId + ".immediate" | translate }}\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf="\r\n                              procurementRequest.criticality === aWPropertiesConstants.LOGISTICAL_CRITICALITY_URGENT\r\n                            "\r\n                            class="warning"\r\n                          >\r\n                            {{ componentData.componentId + ".urgent" | translate }}\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ getComponentName() + ".expectedDate" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <div class="form-control-generic">\r\n                          {{ procurementRequest.requestedDate | date: "yyyy/MM/dd":"":translateService.currentLang }}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ getComponentName() + ".requestedPotential" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <div class="form-control-generic">\r\n                          {{ formattedRequestedPotential }} {{ procurementRequest.potentialUnit }}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div\r\n                      class="form-group flex--2"\r\n                      [ngClass]="{\r\n                        \'visibility--hidden\':\r\n                          procurementRequestItem?.birePn?.traceability !=\r\n                            aWPropertiesConstants.PN_TRACEABILITY_BY_BATCH &&\r\n                          procurementRequestItem?.birePn?.traceability != aWPropertiesConstants.PN_TRACEABILITY_BY_SN &&\r\n                          procurementRequestItem?.birePn?.traceability !=\r\n                            aWPropertiesConstants.PN_TRACEABILITY_BY_PACKAGING_BATCH_AND_SN\r\n                      }"\r\n                    >\r\n                      <label class="form-label"> {{ getComponentName() + ".expectedSn" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          class="aw-input"\r\n                          name="value"\r\n                          type="text"\r\n                          [disabled]="true"\r\n                          [(ngModel)]="procurementRequest.procComment"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div style="display: flex; margin-top: 32px;">\r\n                <div class="section" style="flex-grow: 1; margin-top: 0;">\r\n                  <h4 class="section-title" *ngIf="isProRecSupplierWarehouse">\r\n                    {{ getComponentName() + ".shipper" | translate }}\r\n                  </h4>\r\n                  <h4 class="section-title" *ngIf="!isProRecSupplierWarehouse">\r\n                    {{ getComponentName() + ".itemShipper" | translate }}\r\n                  </h4>\r\n\r\n                  <div class="section-content">\r\n                    <div class="row">\r\n                      <div class="form-group" *ngIf="procurementRequest.bidoCustomer">\r\n                        <label class="form-label">{{ getComponentName() + ".partner" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-generic">\r\n                            {{ procurementRequest.bidoCustomer.customerName }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group" *ngIf="procurementRequest.bidtSiteIssue">\r\n                        <label class="form-label">{{ getComponentName() + ".site" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-generic">\r\n                            {{ procurementRequest?.bidtSiteIssue?.siteCode }}\r\n                            <ng-container *ngIf="procurementRequest?.bidtSiteIssue?.siteName">\r\n                              - {{ procurementRequest?.bidtSiteIssue?.siteName }}\r\n                            </ng-container>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group" *ngIf="currentSupplierWarehouse">\r\n                        <label class="form-label">{{ "warehouse" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-generic">\r\n                            {{ currentSupplierWarehouse.whCode }}\r\n                            <ng-container *ngIf="currentSupplierWarehouse.whName">\r\n                              - {{ currentSupplierWarehouse.whName }}\r\n                            </ng-container>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="section" style="flex-grow: 1; margin-top: 0;">\r\n                  <h4 class="section-title">\r\n                    {{ componentData.componentId + ".recepient" | translate }}\r\n                  </h4>\r\n\r\n                  <div class="section-content">\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".site" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-generic">\r\n                            {{ procurementRequest?.bidtSiteReceipt?.siteCode }}\r\n                            <ng-container *ngIf="procurementRequest?.bidtSiteReceipt?.siteName">\r\n                              - {{ procurementRequest?.bidtSiteReceipt?.siteName }}\r\n                            </ng-container>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".warehouseAndWorkshop" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-generic">\r\n                            {{ procurementRequest?.bidtWarehouseReceipt?.whCode }}\r\n                            <ng-container *ngIf="procurementRequest?.bidtWarehouseReceipt?.whName">\r\n                              - {{ procurementRequest?.bidtWarehouseReceipt?.whName }}\r\n                            </ng-container>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group" *ngIf="workPackageAsset">\r\n                        <label class="form-label">\r\n                          <ng-container\r\n                            *ngIf="\r\n                              workPackageAsset.equipmentFunction == aWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY\r\n                            "\r\n                          >\r\n                            {{ "aircraft" | translate }}\r\n                          </ng-container>\r\n                          <ng-container\r\n                            *ngIf="\r\n                              workPackageAsset.equipmentFunction == aWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY\r\n                            "\r\n                          >\r\n                            {{ "engine" | translate }}\r\n                          </ng-container>\r\n                          <ng-container\r\n                            *ngIf="\r\n                              workPackageAsset.equipmentFunction !=\r\n                                aWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY &&\r\n                              workPackageAsset.equipmentFunction != aWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY\r\n                            "\r\n                          >\r\n                            {{ "equipment" | translate }}\r\n                          </ng-container>\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-generic">\r\n                            <a (click)="openWorkPackageAsset()">{{ workPackageAssetName }}</a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-cell--4">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".item" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <div class="column">\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".partNumber" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-generic">\r\n                            {{ procurementRequestItem.birePn?.pnCode }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".requestedQuantity" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-generic">\r\n                            {{ formatQuantity(procurementRequestItem.requestedQuantity) }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".designation" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-generic">\r\n                            {{ procurementRequestItem.birePn?.articleDesignation }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- <div class="row" *ngIf="itemIllustration">\r\n                    <img [src]="itemIllustration" class="img-dimension" />\r\n                  </div> -->\r\n                </div>\r\n\r\n                <div class="section">\r\n                  <h4 class="section-title">\r\n                    {{ componentData.componentId + ".advancement" | translate }}\r\n                  </h4>\r\n\r\n                  <div class="section-content">\r\n                    <div class="row" style="margin-bottom: 8px;">\r\n                      <div\r\n                        style="padding: 8px; color: #000; border-radius: 4px; margin-left: 16px;"\r\n                        [ngClass]="{\r\n                          \'served--nok\': servedNb == 0,\r\n                          \'served--ok\':\r\n                            servedNb > 0 &&\r\n                            isSameQuantity(servedNb.toString(), procurementRequestItem.requestedQuantity),\r\n                          \'served--warning\':\r\n                            servedNb > 0 &&\r\n                            !isSameQuantity(servedNb.toString(), procurementRequestItem.requestedQuantity)\r\n                        }"\r\n                      >\r\n                        <span *ngIf="servedNb == 0">\r\n                          {{ componentData.componentId + ".notServed" | translate }}\r\n                        </span>\r\n                        <span\r\n                          *ngIf="\r\n                            servedNb > 0 &&\r\n                            !isSameQuantity(servedNb.toString(), procurementRequestItem.requestedQuantity)\r\n                          "\r\n                        >\r\n                          {{ componentData.componentId + ".partiallyServed" | translate }}\r\n                        </span>\r\n                        <span\r\n                          *ngIf="\r\n                            servedNb > 0 &&\r\n                            isSameQuantity(servedNb.toString(), procurementRequestItem.requestedQuantity)\r\n                          "\r\n                        >\r\n                          {{ componentData.componentId + ".served" | translate }}\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="row">\r\n                      <div class="form-group flex-row--align-center">\r\n                        <div class="form-control">\r\n                          <div class="form-control-generic" style="font-size: 3rem; padding-bottom: 1rem;">\r\n                            {{ notServedNb }}\r\n                          </div>\r\n                        </div>\r\n                        <label class="form-label">\r\n                          <ng-container\r\n                            *ngIf="\r\n                              procurementRequest.procStatus ==\r\n                                aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED ||\r\n                              procurementRequest.procStatus ==\r\n                                aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED ||\r\n                              procurementRequest.procStatus == aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n                            "\r\n                          >\r\n                            {{ getComponentName() + ".notSelected" | translate }}\r\n                          </ng-container>\r\n                          <ng-container\r\n                            *ngIf="\r\n                              procurementRequest.procStatus !=\r\n                                aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED &&\r\n                              procurementRequest.procStatus !=\r\n                                aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED &&\r\n                              procurementRequest.procStatus != aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n                            "\r\n                          >\r\n                            {{ getComponentName() + ".notBooked" | translate }}\r\n                          </ng-container>\r\n                        </label>\r\n                      </div>\r\n\r\n                      <div class="form-group flex-row--align-center">\r\n                        <div class="form-control">\r\n                          <div class="form-control-generic" style="font-size: 3rem; padding-bottom: 1rem">\r\n                            {{ bookedNb }}\r\n                          </div>\r\n                        </div>\r\n                        <label class="form-label">\r\n                          <ng-container\r\n                            *ngIf="\r\n                              procurementRequest.procStatus ==\r\n                                aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED ||\r\n                              procurementRequest.procStatus ==\r\n                                aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED ||\r\n                              procurementRequest.procStatus == aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n                            "\r\n                          >\r\n                            {{ getComponentName() + ".selected" | translate }}\r\n                          </ng-container>\r\n                          <ng-container\r\n                            *ngIf="\r\n                              procurementRequest.procStatus !=\r\n                                aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED &&\r\n                              procurementRequest.procStatus !=\r\n                                aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED &&\r\n                              procurementRequest.procStatus != aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n                            "\r\n                          >\r\n                            {{ getComponentName() + ".booked" | translate }}\r\n                          </ng-container>\r\n                        </label>\r\n                      </div>\r\n\r\n                      <div class="form-group flex-row--align-center">\r\n                        <div class="form-control">\r\n                          <div class="form-control-generic" style="font-size: 3rem; padding-bottom: 1rem">\r\n                            {{ servedNb }}\r\n                          </div>\r\n                        </div>\r\n                        <label class="form-label">{{ getComponentName() + ".served" | translate }}</label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container  loading-indicator">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".suggestedAssets" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <div class="form-control aw-selectbutton-wrapper">\r\n                      <p-selectButton\r\n                        [(ngModel)]="selectedcandidateAssetCategory"\r\n                        [options]="candidateAssetCategoryList"\r\n                        (onChange)="updateCandidateAssetTableColumns()"\r\n                      ></p-selectButton>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group central-right-part">\r\n                    <i class="form-label" *ngIf="quantityInMovement > 0">\r\n                      {{ quantityInMovement | formatNumber }}\r\n                      {{ getComponentName() + ".quantityInMovement" | translate }}\r\n                    </i>\r\n                    <button\r\n                      type="button"\r\n                      mat-raised-button\r\n                      (click)="openCreateTransferDialog()"\r\n                      *ngIf="selectedcandidateAssetCategory === candidateAssetCategory.GLOBAL && remainingQuantity > 0"\r\n                    >\r\n                      {{ getComponentName() + ".createTransfer" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n\r\n                <p-table\r\n                  [resizableColumns]="true"\r\n                  #ptableResults\r\n                  class="aw-table2"\r\n                  [columns]="materialProposedTableCols"\r\n                  [value]="candidateAssets"\r\n                  [scrollable]="true"\r\n                >\r\n                  <ng-template pTemplate="emptymessage">\r\n                    <span *ngIf="!iscandidateAssetsLoading"> &nbsp;</span>\r\n\r\n                    <div *ngIf="iscandidateAssetsLoading" class="aw-table-loading-indicator">\r\n                      <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                      <div class="lds-hourglass"></div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="caption">\r\n                    <div class="aw-table-header">\r\n                      <div class="aw-table-global-filter">\r\n                        <label class="aw-table-global-filter-label">\r\n                          <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                        </label>\r\n\r\n                        <input\r\n                          #ptableResultsGlobalFilter\r\n                          class="aw-table-global-filter-input"\r\n                          type="text"\r\n                          placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                          (input)="ptableResults.filterGlobal($event.target.value, \'contains\')"\r\n                        />\r\n                      </div>\r\n\r\n                      <div class="table-actions">\r\n                        <!-- Temporary until more info pn 3490\r\n                          <p-splitButton\r\n                          *ngIf="potentialUnitList && potentialUnitList.length > 0"\r\n                          class="aw-split-btn"\r\n                          label="{{ getComponentName() + \'.potentialUnit\' | translate }} ({{ potentialUnitSelected }})"\r\n                          [model]="potentialUnitList"\r\n                        ></p-splitButton>-->\r\n\r\n                        <div class="aw-table-icon-actions" style="margin-left: 0px;">\r\n                          <i\r\n                            class="fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n                            aria-hidden="true"\r\n                            [ngClass]="{ active: filtersVisible }"\r\n                            (click)="opFilters.toggle($event)"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="colgroup" let-columns>\r\n                    <colgroup>\r\n                      <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                      <col\r\n                        *ngIf="selectedcandidateAssetCategory != candidateAssetCategory.GLOBAL"\r\n                        [ngStyle]="{ width: \'10%\' }"\r\n                      />\r\n                    </colgroup>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="header" let-columns>\r\n                    <tr>\r\n                      <th\r\n                        pResizableColumn\r\n                        *ngFor="let col of columns"\r\n                        [ngStyle]="{ \'text-align\': col.alignment }"\r\n                        [ngSwitch]="col.field"\r\n                      >\r\n                        <ng-container *ngSwitchCase="\'sn\'">\r\n                          <ng-container\r\n                            *ngIf="\r\n                              procurementRequestItem?.birePn?.traceability ==\r\n                                aWPropertiesConstants.PN_TRACEABILITY_BY_SN ||\r\n                              procurementRequestItem?.birePn?.traceability ==\r\n                                aWPropertiesConstants.PN_TRACEABILITY_BY_PACKAGING_BATCH_AND_SN\r\n                            "\r\n                          >\r\n                            {{ getComponentName() + ".sn" | translate }}\r\n                          </ng-container>\r\n                          <ng-container\r\n                            *ngIf="\r\n                              procurementRequestItem?.birePn?.traceability ==\r\n                              aWPropertiesConstants.PN_TRACEABILITY_BY_BATCH\r\n                            "\r\n                          >\r\n                            {{ getComponentName() + ".manufacturingBatch" | translate }}\r\n                          </ng-container>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngSwitchDefault>\r\n                          {{ getComponentName() + "." + col.field | translate }}\r\n                        </ng-container>\r\n                      </th>\r\n\r\n                      <th\r\n                        *ngIf="selectedcandidateAssetCategory != candidateAssetCategory.GLOBAL"\r\n                        style="text-align: center;"\r\n                      >\r\n                        Action\r\n                      </th>\r\n                    </tr>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                    <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                      <td\r\n                        *ngFor="let col of columns"\r\n                        [ngSwitch]="col.field"\r\n                        [ngStyle]="{ \'text-align\': col.alignment }"\r\n                      >\r\n                        <div *ngSwitchCase="\'msn\'">\r\n                          <div class="row">\r\n                            <a class="font-bold" (click)="openEquipment(rowData[\'topEquipment\'])">{{\r\n                              rowData["topEquipment"]?.sn\r\n                            }}</a>\r\n                          </div>\r\n\r\n                          <div class="row">\r\n                            {{ formatEquipmentStatus(rowData["topEquipment"]?.equipmentDesignation) }}\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase="\'locationForPicking\'">\r\n                          {{\r\n                            rowData["currentBidmProject"]\r\n                              ? formatSite(rowData["currentBidmProject"].bireRepairCenterCode)\r\n                              : rowData["topEquipmentLocation"]\r\n                          }}\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase="\'material\'">\r\n                          <div class="row">\r\n                            <a class="font-bold" (click)="openPart(rowData)">{{ rowData["pn"]?.pnCode }}</a>\r\n                          </div>\r\n\r\n                          <div class="row">\r\n                            <span class="italic">{{ rowData["equipment"]?.equipmentDesignation }}</span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase="\'sn\'">\r\n                          <div class="row">\r\n                            <a\r\n                              class="font-bold"\r\n                              (click)="openEquipment(rowData[\'equipment\'])"\r\n                              *ngIf="rowData[\'equipment\'].sn && !rowData[\'stockInformation\']?.manufacturingBatchNumber"\r\n                            >\r\n                              {{ rowData["equipment"]?.sn }}\r\n                            </a>\r\n                            <a\r\n                              class="bold"\r\n                              (click)="openManufacturingBatch(rowData[\'stockInformation\'].manufacturingBatchNumber)"\r\n                              *ngIf="!rowData[\'equipment\'].sn && rowData[\'stockInformation\']?.manufacturingBatchNumber"\r\n                            >\r\n                              {{ rowData["stockInformation"].manufacturingBatchNumber }}\r\n                            </a>\r\n                          </div>\r\n\r\n                          <div class="row" *ngIf="!rowData[\'equipment\'].batchNumber">\r\n                            <span class="italic">{{\r\n                              formatEquipmentStatus(rowData["equipment"]?.operationalStatus)\r\n                            }}</span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase="\'snBatch\'">\r\n                          <div class="row">\r\n                            <a\r\n                              class="font-bold"\r\n                              (click)="openEquipment(rowData[\'equipment\'])"\r\n                              *ngIf="rowData[\'equipment\'].sn && !rowData[\'stockInformation\']?.manufacturingBatchNumber"\r\n                            >\r\n                              {{ rowData["equipment"]?.sn }}\r\n                            </a>\r\n                            <a\r\n                              class="bold"\r\n                              (click)="openManufacturingBatch(rowData[\'stockInformation\'].manufacturingBatchNumber)"\r\n                              *ngIf="!rowData[\'equipment\'].sn && rowData[\'stockInformation\']?.manufacturingBatchNumber"\r\n                            >\r\n                              {{ rowData["stockInformation"].manufacturingBatchNumber }}\r\n                            </a>\r\n                          </div>\r\n\r\n                          <div class="row" *ngIf="!rowData[\'equipment\'].batchNumber">\r\n                            <span class="italic">{{\r\n                              formatEquipmentStatus(rowData["equipment"]?.operationalStatus)\r\n                            }}</span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase="\'quantity\'">\r\n                          {{ rowData["equipment"]?.quantity | formatNumber }}\r\n                          <ng-container *ngIf="rowData[\'stockInformation\'].stockMvtUnit">\r\n                            {{ rowData["stockInformation"].stockMvtUnit }}\r\n                          </ng-container>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase="\'batch\'">\r\n                          <div class="row">\r\n                            <a\r\n                              class="font-bold"\r\n                              (click)="\r\n                                rowData[\'equipment\']?.sn\r\n                                  ? openEquipment(rowData[\'equipment\'])\r\n                                  : openBatch(rowData[\'equipment\'].equipmentCode)\r\n                              "\r\n                              *ngIf="rowData[\'equipment\']"\r\n                            >\r\n                              {{ rowData["equipment"].batchNumber }}\r\n                            </a>\r\n                          </div>\r\n\r\n                          <div class="row" *ngIf="rowData[\'equipment\'].batchNumber">\r\n                            <span class="italic">{{\r\n                              formatEquipmentStatus(rowData["equipment"]?.operationalStatus)\r\n                            }}</span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase="\'location\'">\r\n                          <div class="row" *ngIf="rowData[\'siteReceipt\']?.siteName">\r\n                            <span class="font-bold">{{ rowData["siteReceipt"]?.siteName }}</span>\r\n                          </div>\r\n\r\n                          <div class="row">\r\n                            <span class="italic">{{ rowData["warehouseReceipt"]?.whName }}</span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase="\'technicalData\'">\r\n                          <div class="row" *ngIf="rowData[\'potentialValue\']">\r\n                            <span style="width: 5rem;">{{ getComponentName() + ".potential" | translate }}</span>\r\n                            <span class="font-bold"\r\n                              >{{ formatPotential(rowData["potentialValue"]) }} {{ rowData["potentialUnit"] }}</span\r\n                            >\r\n                          </div>\r\n\r\n                          <div class="row" *ngIf="rowData[\'calendarPotential\']">\r\n                            <span style="width: 5rem;">{{ getComponentName() + ".expiration" | translate }}</span>\r\n                            <span class="font-bold">{{\r\n                              rowData["calendarPotential"] | date: "yyyy/MM/dd":"":translateService.currentLang\r\n                            }}</span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase="\'availabilityAtDate\'">\r\n                          <div class="row">\r\n                            <span *ngIf="isCandidateAssetServed(rowData)" class="font-bold">\r\n                              {{ getComponentName() + ".served" | translate }}\r\n                            </span>\r\n\r\n                            <span\r\n                              class="font-bold"\r\n                              [ngClass]="{\r\n                                green:\r\n                                  !rowData[\'bookingProcurementRequest\'] ||\r\n                                  rowData[\'bookingProcurementRequest\'].id === procurementRequest.id,\r\n                                yellow:\r\n                                  rowData[\'bookingProcurementRequest\'] &&\r\n                                  rowData[\'bookingProcurementRequest\'].id !== procurementRequest.id\r\n                              }"\r\n                              *ngIf="isAvailableAtDate(rowData) && !isCandidateAssetServed(rowData)"\r\n                            >\r\n                              {{ "yes" | translate }}\r\n                              <span *ngIf="rowData[\'plannedAvailabilityDate\']">\r\n                                ({{\r\n                                  rowData["plannedAvailabilityDate"]\r\n                                    | date: "yyyy/MM/dd":"":translateService.currentLang\r\n                                }})\r\n                              </span>\r\n                            </span>\r\n                            <span class="font-bold red" *ngIf="!isAvailableAtDate(rowData)">\r\n                              {{ "no" | translate }}\r\n                              <span *ngIf="rowData[\'plannedAvailabilityDate\']">\r\n                                ({{\r\n                                  rowData["plannedAvailabilityDate"]\r\n                                    | date: "yyyy/MM/dd":"":translateService.currentLang\r\n                                }})\r\n                              </span>\r\n                            </span>\r\n                          </div>\r\n\r\n                          <div class="row">\r\n                            <span\r\n                              *ngIf="\r\n                                rowData[\'bookingProcurementRequest\'] &&\r\n                                rowData[\'bookingProcurementRequest\'].id === procurementRequest.id\r\n                              "\r\n                              style="font-style: italic;"\r\n                              class="green"\r\n                            >\r\n                              <ng-container\r\n                                *ngIf="\r\n                                  rowData[\'bookingProcurementRequest\']?.procStatus ==\r\n                                    aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED ||\r\n                                  rowData[\'bookingProcurementRequest\']?.procStatus ==\r\n                                    aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED ||\r\n                                  rowData[\'bookingProcurementRequest\']?.procStatus ==\r\n                                    aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n                                "\r\n                              >\r\n                                {{ getBookedQty(rowData) | formatNumber }}\r\n                                {{ getComponentName() + ".selectedBy" | translate }}\r\n                              </ng-container>\r\n                              <ng-container\r\n                                *ngIf="\r\n                                  rowData[\'bookingProcurementRequest\']?.procStatus !=\r\n                                    aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED &&\r\n                                  rowData[\'bookingProcurementRequest\']?.procStatus !=\r\n                                    aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED &&\r\n                                  rowData[\'bookingProcurementRequest\']?.procStatus !=\r\n                                    aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n                                "\r\n                              >\r\n                                {{ getBookedQty(rowData) | formatNumber }}\r\n                                {{ getComponentName() + ".bookedBy" | translate }}\r\n                              </ng-container>\r\n\r\n                              <a (click)="openTransferOrder(rowData[\'transferOrder\'])">{{\r\n                                rowData["transferOrder"]?.torCode\r\n                              }}</a>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf="\r\n                                rowData[\'bookingProcurementRequest\'] &&\r\n                                rowData[\'bookingProcurementRequest\'].id !== procurementRequest.id &&\r\n                                (!rowData[\'warehouseReceipt\'] ||\r\n                                  rowData[\'warehouseReceipt\'] !==\r\n                                    aWPropertiesConstants.MM_WAREHOUSE_TYPE_DEPLOYEMENT_BATCH)\r\n                              "\r\n                              style="font-style: italic;"\r\n                              class="yellow"\r\n                            >\r\n                              <ng-container\r\n                                *ngIf="\r\n                                  rowData[\'bookingProcurementRequest\']?.procStatus ==\r\n                                    aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED ||\r\n                                  rowData[\'bookingProcurementRequest\']?.procStatus ==\r\n                                    aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED ||\r\n                                  rowData[\'bookingProcurementRequest\']?.procStatus ==\r\n                                    aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n                                "\r\n                              >\r\n                                {{ getComponentName() + ".selectedFor" | translate }}\r\n                              </ng-container>\r\n                              <ng-container\r\n                                *ngIf="\r\n                                  rowData[\'bookingProcurementRequest\']?.procStatus !=\r\n                                    aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED &&\r\n                                  rowData[\'bookingProcurementRequest\']?.procStatus !=\r\n                                    aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED &&\r\n                                  rowData[\'bookingProcurementRequest\']?.procStatus !=\r\n                                    aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n                                "\r\n                              >\r\n                                {{ getComponentName() + ".bookedFor" | translate }}\r\n                              </ng-container>\r\n\r\n                              <a (click)="openProcurementRequest(rowData[\'bookingProcurementRequest\'])">\r\n                                {{ rowData["bookingProcurementRequest"].procCode }}\r\n                              </a>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf="\r\n                                rowData[\'bookingProcurementRequest\'] &&\r\n                                rowData[\'bookingProcurementRequest\'].id !== procurementRequest.id &&\r\n                                rowData[\'warehouseReceipt\'] ===\r\n                                  aWPropertiesConstants.MM_WAREHOUSE_TYPE_DEPLOYEMENT_BATCH\r\n                              "\r\n                              style="font-style: italic;"\r\n                              class="yellow"\r\n                            >\r\n                              {{ getComponentName() + ".bookedForDeploymentBatch" | translate }}\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase="\'satisfactionRate\'">\r\n                          <div class="row" *ngIf="!isCandidateAssetServed(rowData)">\r\n                            <div style="width: 100%; cursor: pointer;">\r\n                              <p-progressBar\r\n                                [ngClass]="{\r\n                                  green: calculateSatisfactionRate(rowData) == 100,\r\n                                  yellow: calculateSatisfactionRate(rowData) < 100,\r\n                                  red: calculateSatisfactionRate(rowData) < 40\r\n                                }"\r\n                                [value]="calculateSatisfactionRate(rowData)"\r\n                                (click)="openSatisfactionRateDetails(rowData)"\r\n                              ></p-progressBar>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </td>\r\n\r\n                      <td\r\n                        *ngIf="selectedcandidateAssetCategory != candidateAssetCategory.GLOBAL"\r\n                        style="text-align: center;"\r\n                      >\r\n                        <button\r\n                          style="margin: 0 auto"\r\n                          type="button"\r\n                          class="btn-with-spinner"\r\n                          mat-raised-button\r\n                          (click)="bookCandidateAsset(rowData)"\r\n                          *ngIf="\r\n                            !rowData[\'bookingProcurementRequest\'] &&\r\n                            isSelectBtnVisible() &&\r\n                            !isCandidateAssetServed(rowData) &&\r\n                            selectedcandidateAssetCategory != candidateAssetCategory.PICKING\r\n                          "\r\n                        >\r\n                          <span class="lds-hourglass" *ngIf="rowData[\'_bookCandidateAssetLoading\']"></span>\r\n                          {{ getComponentName() + ".select" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          style="margin: 0 auto"\r\n                          type="button"\r\n                          (click)="cancelBooking(rowData)"\r\n                          *ngIf="\r\n                            rowData[\'bookingProcurementRequest\'] &&\r\n                            rowData[\'bookingProcurementRequest\'].id == procurementRequest.id &&\r\n                            selectedcandidateAssetCategory != candidateAssetCategory.PICKING &&\r\n                            isCancelBookingBtnVisible(rowData)\r\n                          "\r\n                          mat-raised-button\r\n                          color="warn"\r\n                        >\r\n                          {{ getComponentName() + ".cancel" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          style="margin: 0 auto"\r\n                          type="button"\r\n                          (click)="cancelPicking(rowData)"\r\n                          *ngIf="\r\n                            rowData[\'currentBidmProject\'] &&\r\n                            selectedcandidateAssetCategory == candidateAssetCategory.PICKING\r\n                          "\r\n                          mat-raised-button\r\n                          color="warn"\r\n                        >\r\n                          {{ getComponentName() + ".cancel" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          style="margin: 0 auto"\r\n                          type="button"\r\n                          class="btn-with-spinner"\r\n                          mat-raised-button\r\n                          (click)="pick(rowData)"\r\n                          *ngIf="\r\n                            !rowData[\'currentBidmProject\'] &&\r\n                            selectedcandidateAssetCategory == candidateAssetCategory.PICKING\r\n                          "\r\n                        >\r\n                          <span class="lds-hourglass" *ngIf="saving"></span>\r\n                          {{ getComponentName() + ".pick" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          style="margin: 0 auto"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          color="accent"\r\n                          *ngIf="\r\n                            rowData[\'bookingProcurementRequest\'] &&\r\n                            rowData[\'bookingProcurementRequest\'].id != procurementRequest.id &&\r\n                            (rowData[\'bookingProcurementRequest\'].procStatus ==\r\n                              aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_RELEASED ||\r\n                              rowData[\'bookingProcurementRequest\'].procStatus ==\r\n                                aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_ONGOING) &&\r\n                            rowData[\'_hasPreemptionRight\'] &&\r\n                            isSelectBtnVisible()\r\n                          "\r\n                          (click)="confirmPreemptCandidateAsset(rowData)"\r\n                        >\r\n                          {{ getComponentName() + ".preempter" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          style="margin: 0 auto"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          *ngIf="\r\n                            rowData[\'bookingProcurementRequest\'] &&\r\n                            rowData[\'bookingProcurementRequest\'].id != procurementRequest.id &&\r\n                            rowData[\'bookingProcurementRequest\'].procStatus !=\r\n                              aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_RELEASED &&\r\n                            rowData[\'bookingProcurementRequest\'].procStatus !=\r\n                              aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_ONGOING &&\r\n                            isSelectBtnVisible()\r\n                          "\r\n                          (click)="preemptCandidateAsset(rowData)"\r\n                        >\r\n                          {{ getComponentName() + ".preempter" | translate }}\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </p-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <aw-dialog-image *ngIf="openImageDialog" [imgSrc]="dialogImgSrc"></aw-dialog-image> -->\r\n  <aw-change-customer-popup-form\r\n    [(display)]="openChangeCustomerDialog"\r\n    *ngIf="openChangeCustomerDialog"\r\n    [procurementRequest]="procurementRequest"\r\n  ></aw-change-customer-popup-form>\r\n\r\n  <aw-dialog-satisfaction-rate\r\n    [(display)]="showSatisfactionRateDialog"\r\n    *ngIf="showSatisfactionRateDialog"\r\n    [procurementRequest]="procurementRequest"\r\n    [candidateAsset]="selectedCandidateAsset"\r\n  ></aw-dialog-satisfaction-rate>\r\n\r\n  <aw-change-warehouse-and-quantity-popup-form\r\n    [(display)]="showChangeSupplierAndQuantityDialog"\r\n    *ngIf="showChangeSupplierAndQuantityDialog"\r\n    [procurementRequest]="procurementRequest"\r\n    [procurementRequestItem]="procurementRequestItem"\r\n    [oldQuantity]="notServedNb"\r\n    [totalQuantity]="notServedNb + bookedNb + servedNb"\r\n    (onValidated)="reload()"\r\n  ></aw-change-warehouse-and-quantity-popup-form>\r\n\r\n  <aw-transfer-order-popup\r\n    *ngIf="showCreateTransferOrderDialog"\r\n    [(display)]="showCreateTransferOrderDialog"\r\n    [pn]="procurementRequestItem.birePn"\r\n    [createTransferOrderInput]="this.createTransferOrderInput"\r\n    (onValidate)="onCreateTransferOrder()"\r\n  >\r\n  </aw-transfer-order-popup>\r\n</div>\r\n<p-overlayPanel #opFilters class="aw-overlay" (onShow)="filtersVisible = true" (onHide)="filtersVisible = false">\r\n  <div class="grid-cell-content grid-cell-content-with-section">\r\n    <div class="col">\r\n      <div class="section">\r\n        <h4 class="section-title">{{ getComponentName() + ".location" | translate }}</h4>\r\n\r\n        <div class="section-content">\r\n          <div class="row">\r\n            <div class="form-group" style="min-width: 350px;">\r\n              <label class="form-label"> {{ getComponentName() + ".site" | translate }} </label>\r\n              <div class="form-control">\r\n                <p-dropdown\r\n                  class="aw-dropdown fixed-width"\r\n                  placeholder="&nbsp;"\r\n                  [showClear]="true"\r\n                  [(ngModel)]="searchFilterObject.site"\r\n                  [options]="siteList"\r\n                  (onChange)="loadLocationWarehouses()"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-group">\r\n              <label\r\n                class="form-label"\r\n                *ngIf="locationWarehouseType === aWPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE"\r\n              >\r\n                {{ componentData.componentId + ".warehouse" | translate }}\r\n              </label>\r\n              <label\r\n                class="form-label"\r\n                *ngIf="locationWarehouseType === aWPropertiesConstants.WAREHOUSE_CATEGORY_WORKSHOP"\r\n              >\r\n                {{ componentData.componentId + ".workshop" | translate }}\r\n              </label>\r\n\r\n              <div class="form-control ">\r\n                <p-selectButton\r\n                  [options]="logisticsTypeList"\r\n                  [(ngModel)]="locationWarehouseType"\r\n                  (onChange)="loadLocationWarehouses()"\r\n                ></p-selectButton>\r\n              </div>\r\n            </div>\r\n            <div class="form-group" style="min-width: 400px;">\r\n              <label class="form-label">&nbsp;</label>\r\n              <div class="form-control">\r\n                <p-dropdown\r\n                  class="aw-dropdown fixed-width"\r\n                  placeholder="&nbsp;"\r\n                  [showClear]="true"\r\n                  [(ngModel)]="searchFilterObject.warehouse"\r\n                  [options]="warehouseList"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section">\r\n        <div class="section-content">\r\n          <div class="row">\r\n            <div class="form-group">\r\n              <label class="form-label"> {{ getComponentName() + ".snFilter" | translate }} </label>\r\n              <div class="form-control">\r\n                <input class="aw-input" name="sn" type="text" [(ngModel)]="searchFilterObject.sn" />\r\n              </div>\r\n            </div>\r\n            <div class="form-group">\r\n              <label class="form-label"> {{ getComponentName() + ".status" | translate }} </label>\r\n              <div class="form-control">\r\n                <p-dropdown\r\n                  class="aw-dropdown fixed-width"\r\n                  [options]="equipmentStatusListFilter"\r\n                  [showClear]="true"\r\n                  placeholder="&nbsp;"\r\n                  [(ngModel)]="searchFilterObject.status"\r\n                >\r\n                </p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section">\r\n        <h4 class="section-title">{{ getComponentName() + ".satisfactionRate" | translate }}</h4>\r\n        <div class="section-content">\r\n          <div class="form-group">\r\n            <div class="row" style="padding-bottom: 5px;">\r\n              <div class="flex--2">\r\n                <div class="form-control">\r\n                  <label class="form-label"> {{ getComponentName() + ".sameSiteFilter" | translate }} </label>\r\n                </div>\r\n              </div>\r\n              <div class="flex--1">\r\n                <div class="form-control aw-selectbutton-wrapper">\r\n                  <p-selectButton\r\n                    [(ngModel)]="searchFilterObject.sameSite"\r\n                    [options]="satifactionRateStatus"\r\n                  ></p-selectButton>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="row" style="padding-bottom: 5px;">\r\n              <div class="flex--2">\r\n                <div class="form-control">\r\n                  <label class="form-label"> {{ getComponentName() + ".bookingStatusFilter" | translate }} </label>\r\n                </div>\r\n              </div>\r\n              <div class="flex--1">\r\n                <div class="form-control aw-selectbutton-wrapper">\r\n                  <p-selectButton\r\n                    [(ngModel)]="searchFilterObject.bookingStatus"\r\n                    [options]="satifactionRateStatus"\r\n                  ></p-selectButton>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="row" style="padding-bottom: 5px;">\r\n              <div class="flex--2">\r\n                <div class="form-control">\r\n                  <label class="form-label"> {{ getComponentName() + ".availableAtDateFilter" | translate }} </label>\r\n                </div>\r\n              </div>\r\n              <div class="flex--1">\r\n                <div class="form-control aw-selectbutton-wrapper">\r\n                  <p-selectButton\r\n                    [(ngModel)]="searchFilterObject.availableAtDate"\r\n                    [options]="satifactionRateStatus"\r\n                  ></p-selectButton>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="row" style="padding-bottom: 5px;">\r\n              <div class="flex--2">\r\n                <div class="form-control">\r\n                  <label class="form-label"> {{ getComponentName() + ".potentialFilter" | translate }} </label>\r\n                </div>\r\n              </div>\r\n              <div class="flex--1">\r\n                <div class="form-control aw-selectbutton-wrapper">\r\n                  <p-selectButton\r\n                    [(ngModel)]="searchFilterObject.potential"\r\n                    [options]="satifactionRateStatus"\r\n                  ></p-selectButton>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="row" style="padding-bottom: 5px;">\r\n              <div class="flex--2">\r\n                <div class="form-control">\r\n                  <label class="form-label"> {{ getComponentName() + ".calendarPotentialFilter" | translate }} </label>\r\n                </div>\r\n              </div>\r\n              <div class="flex--1">\r\n                <div class="form-control aw-selectbutton-wrapper">\r\n                  <p-selectButton\r\n                    [(ngModel)]="searchFilterObject.calendarPotential"\r\n                    [options]="satifactionRateStatus"\r\n                  ></p-selectButton>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="row" style="padding-bottom: 5px;">\r\n              <div class="flex--2">\r\n                <div class="form-control">\r\n                  <label class="form-label">\r\n                    {{ getComponentName() + ".noUnconfirmedFailureFilter" | translate }}\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class="flex--1">\r\n                <div class="form-control aw-selectbutton-wrapper">\r\n                  <p-selectButton\r\n                    [(ngModel)]="searchFilterObject.noUnconfirmedFailure"\r\n                    [options]="satifactionRateStatus"\r\n                  ></p-selectButton>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row action-list" style="justify-content: flex-end;">\r\n      <button type="button" mat-raised-button (click)="opFilters.hide(); filtersVisible = false; resetFilters()">\r\n        {{ "global.reset" | translate }}\r\n      </button>\r\n\r\n      <button\r\n        type="button"\r\n        mat-raised-button\r\n        (click)="opFilters.hide(); filtersVisible = false; filterSearchResult()"\r\n        color="primary"\r\n        style="margin-left: 8px;"\r\n      >\r\n        {{ "global.filter" | translate }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</p-overlayPanel>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/material-request-management/form/material-request-management-form.component.ts':
      /*!***************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-management/form/material-request-management-form.component.ts ***!
  \***************************************************************************************************************/
      /*! exports provided: CandidateAssetCategory, SatisfactoryRateFilterState, MaterialRequestManagementFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'CandidateAssetCategory', function() {
          return CandidateAssetCategory;
        });
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SatisfactoryRateFilterState',
          function() {
            return SatisfactoryRateFilterState;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MaterialRequestManagementFormComponent',
          function() {
            return MaterialRequestManagementFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/platform-browser */ './node_modules/@angular/platform-browser/fesm5/platform-browser.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! moment */ './node_modules/moment/moment.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          moment__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/constants/bidt-stock-mvt-constants */ './src/app/shared/constants/bidt-stock-mvt-constants.ts'
        );
        /* harmony import */ var _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/constants/bidt-stock-mvt-type-constants */ './src/app/shared/constants/bidt-stock-mvt-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
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
        /* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/services/file.service */ './src/app/shared/services/file.service.ts'
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
        /* harmony import */ var _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../../shared/utils/bido-equipment-utils */ './src/app/shared/utils/bido-equipment-utils.ts'
        );
        /* harmony import */ var _shared_utils_image_utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../../shared/utils/image-utils */ './src/app/shared/utils/image-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ../../../../shared/utils/number-utils */ './src/app/shared/utils/number-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _procurement_request_search_procurement_request_search_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ../../procurement-request/search/procurement-request-search.service */ './src/app/main/logistics/procurement-request/search/procurement-request-search.service.ts'
        );
        /* harmony import */ var _material_request_management_form_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ./material-request-management-form.service */ './src/app/main/logistics/material-request-management/form/material-request-management-form.service.ts'
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

        var CandidateAssetCategory;
        (function(CandidateAssetCategory) {
          CandidateAssetCategory[(CandidateAssetCategory['GLOBAL'] = 0)] = 'GLOBAL';
          CandidateAssetCategory[(CandidateAssetCategory['LOCAL'] = 1)] = 'LOCAL';
          CandidateAssetCategory[(CandidateAssetCategory['PICKING'] = 2)] = 'PICKING';
          CandidateAssetCategory[(CandidateAssetCategory['WAREHOUSE'] = 3)] = 'WAREHOUSE';
        })(CandidateAssetCategory || (CandidateAssetCategory = {}));
        var SatisfactoryRateFilterState;
        (function(SatisfactoryRateFilterState) {
          SatisfactoryRateFilterState[(SatisfactoryRateFilterState['UNDEFINED'] = 0)] = 'UNDEFINED';
          SatisfactoryRateFilterState[(SatisfactoryRateFilterState['YES'] = 1)] = 'YES';
          SatisfactoryRateFilterState[(SatisfactoryRateFilterState['NO'] = 2)] = 'NO';
        })(SatisfactoryRateFilterState || (SatisfactoryRateFilterState = {}));
        var MaterialRequestManagementFormComponent = /** @class */ (function(_super) {
          __extends(MaterialRequestManagementFormComponent, _super);
          /* ***************************************************************************/
          function MaterialRequestManagementFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            dateService,
            translateService,
            confirmationService,
            domSanitizer,
            fileService,
            logisticsService,
            propertiesService,
            materialRequestManagementFormService,
            procurementRequestSearchService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.sessionService = sessionService;
            _this.dateService = dateService;
            _this.translateService = translateService;
            _this.confirmationService = confirmationService;
            _this.domSanitizer = domSanitizer;
            _this.fileService = fileService;
            _this.logisticsService = logisticsService;
            _this.propertiesService = propertiesService;
            _this.materialRequestManagementFormService = materialRequestManagementFormService;
            _this.procurementRequestSearchService = procurementRequestSearchService;
            _this.CRITICITY_GREEN = 'green';
            _this.CRITICITY_RED = 'red';
            _this.CRITICITY_YELLOW = 'yellow';
            _this.aWPropertiesConstants =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants'];
            _this.componentOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'];
            _this.candidateAssetCategory = CandidateAssetCategory;
            _this.bidoFunctionTypeConstants =
              _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_7__['BidoFunctionTypeConstants'];
            _this.init();
            _this.initMaterialProposedTableCols();
            _this.materialRequestManagementFormService.findAllSite().subscribe(function(sites) {
              _this.sites = sites;
            });
            _this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__['GenericPropertyConstants']
                  .PROCUREMENT_REQUEST_STATUS_MAP
              )
              .subscribe(function(statusList) {
                _this.statusList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__['ListUtils']
                  .orEmpty(statusList)
                  .sort(function(s1, s2) {
                    return s1.label.localeCompare(s2.label);
                  });
              });
            _this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__['GenericPropertyConstants']
                  .OPERATIONAL_STATUS_MAP
              )
              .subscribe(function(statusList) {
                _this.equipmentStatusList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__['ListUtils']
                  .orEmpty(statusList)
                  .sort(function(s1, s2) {
                    return s1.label.localeCompare(s2.label);
                  });
              });
            _this.materialRequestManagementFormService.getOperationalStatusMap(' ').subscribe(function(statusList) {
              _this.equipmentStatusListFilter = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__['ListUtils']
                .orEmpty(statusList)
                .sort(function(s1, s2) {
                  return s1.label.localeCompare(s2.label);
                });
            });
            _this.procurementRequestSearchService.getWarehouseCategoryMap().subscribe(function(res) {
              if (res && res.length) {
                _this.logisticsTypeList = res.sort(function(s1, s2) {
                  return s1.value.localeCompare(s2.value);
                });
                _this.locationWarehouseType = _this.logisticsTypeList[0].value;
              }
            });
            _this.procurementRequestSearchService.findAllBireSite().subscribe({
              next: function(sites) {
                _this.siteList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__['ListUtils']
                  .orEmpty(sites)
                  .filter(function(site) {
                    return (
                      !!site.siteId &&
                      !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_29__['StringUtils'].isNullOrEmpty(
                        site.siteName
                      )
                    );
                  })
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
            var localLevelKey = _this.getTranslateKey('localLevel');
            var globalLevelKey = _this.getTranslateKey('globalLevel');
            var pickingKey = _this.getTranslateKey('pickingOnAircraft');
            var warehouseLevelKey = _this.getTranslateKey('warehouseLevel');
            var yesKey = _this.getTranslateKey('yes');
            var noKey = _this.getTranslateKey('no');
            var undefinedKey = _this.getTranslateKey('undefined');
            _this.translateService
              .get([localLevelKey, globalLevelKey, pickingKey, warehouseLevelKey, yesKey, noKey, undefinedKey])
              .subscribe({
                next: function(results) {
                  var localLevelLabel = !!results ? results[localLevelKey] : 'Local';
                  var globalLevelLabel = !!results ? results[globalLevelKey] : 'Global';
                  var pickingLabel = !!results ? results[pickingKey] : 'Picking On Aircraft';
                  var warehouseLevelLabel = !!results ? results[warehouseLevelKey] : 'Warehouse';
                  _this.candidateAssetCategoryList = [
                    { label: warehouseLevelLabel, value: CandidateAssetCategory.WAREHOUSE },
                    { label: localLevelLabel, value: CandidateAssetCategory.LOCAL },
                    { label: globalLevelLabel, value: CandidateAssetCategory.GLOBAL },
                    { label: pickingLabel, value: CandidateAssetCategory.PICKING }
                  ];
                  var yesLabel = !!results ? results[yesKey] : 'Yes';
                  var noLabel = !!results ? results[noKey] : 'No';
                  var undefinedLabel = !!results ? results[undefinedKey] : 'Undefined';
                  _this.satifactionRateStatus = [
                    { label: undefinedLabel, value: SatisfactoryRateFilterState.UNDEFINED },
                    { label: yesLabel, value: SatisfactoryRateFilterState.YES },
                    { label: noLabel, value: SatisfactoryRateFilterState.NO }
                  ];
                }
              });
            return _this;
          }
          MaterialRequestManagementFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
              .LOG_MATERIAL_REQUEST_MANAGEMENT_FORM;
          };
          MaterialRequestManagementFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.updateOpenMode(this.componentData.openMode);
            this.load();
          };
          MaterialRequestManagementFormComponent.prototype.reload = function() {
            this.load();
          };
          MaterialRequestManagementFormComponent.prototype.load = function() {
            var _this = this;
            if (!this.isCreateOpenMode && this.componentData.objectId) {
              var _a = this.serializationService.deserialize(this.componentData.objectId),
                prId = _a.prId,
                prItemId_1 = _a.prItemId;
              this.logisticsService
                .findProcurementRequestByIdWithAllObjects({ id: prId })
                .subscribe(function(procurementRequest) {
                  var matchingProcurementRequestItem = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__[
                    'ListUtils'
                  ]
                    .orEmpty(procurementRequest.bidtProcReqItems)
                    .find(function(procurementRequestItem) {
                      return procurementRequestItem.id === prItemId_1;
                    });
                  if (matchingProcurementRequestItem) {
                    _this.procurementRequest = procurementRequest;
                    _this.procurementRequestItem = matchingProcurementRequestItem;
                    _this.subtitle = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_29__['StringUtils'].orEmpty(
                      procurementRequest.procCode
                    );
                    _this.displayComponentContext(
                      _this.isCreateOpenMode ? 'tab.createMode' : _this.subtitle,
                      _this.isCreateOpenMode
                    );
                    if (_this.procurementRequestItem.birePn) {
                      _this.logisticsService
                        .findBirePnMeasuresByPnCode({
                          pnCode: _this.procurementRequestItem.birePn.pnCode
                        })
                        .subscribe(function(pnMeasures) {
                          _this.setPotentialUnitList(pnMeasures);
                          _this.loadCandidateAssets();
                        });
                    }
                    _this.loadItemIllustration(_this.procurementRequestItem);
                  }
                  if (_this.procurementRequest.requestedPotential) {
                    _this.formattedRequestedPotential = _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_27__[
                      'NumberUtils'
                    ]
                      .roundNumber(
                        _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_27__['NumberUtils'].fromString(
                          _this.procurementRequest.requestedPotential
                        ),
                        2
                      )
                      .toString();
                  }
                  if (_this.procurementRequest.bidmWorkOrder && _this.procurementRequest.bidmWorkOrder.projectId) {
                    _this.logisticsService
                      .findWorkPackage(_this.procurementRequest.bidmWorkOrder.projectId)
                      .pipe(
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['concatMap'])(function(workPackage) {
                          return workPackage.assetCode
                            ? _this.logisticsService.findEquipment({ equipmentCode: workPackage.assetCode })
                            : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__['of'])(undefined);
                        })
                      )
                      .subscribe(function(workPackageAsset) {
                        _this.workPackageAsset = workPackageAsset;
                        _this.workPackageAssetName = _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_24__[
                          'BidoEquipmentUtils'
                        ].createAssetRepresentation(workPackageAsset);
                      });
                  }
                  _this.isProRecSupplierWarehouse = true;
                  if (
                    _this.procurementRequestItem.bidtWarehouseId !== null &&
                    !!_this.procurementRequestItem.bidtWarehouseId
                  ) {
                    _this.logisticsService.getWarehouseById(_this.procurementRequestItem.bidtWarehouseId).subscribe({
                      next: function(warehouse) {
                        _this.currentSupplierWarehouse = warehouse;
                        _this.isProRecSupplierWarehouse = false;
                      }
                    });
                  } else if (!!_this.procurementRequest.bidtWarehouseIssue) {
                    _this.currentSupplierWarehouse = _this.procurementRequest.bidtWarehouseIssue;
                  }
                });
            }
          };
          MaterialRequestManagementFormComponent.prototype.openEquipment = function(equipment) {
            if (equipment) {
              var componentId =
                equipment.equipmentFunction ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_AIRCRAFT_KEY
                  ? _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
                      .FLE_AIRCRAFT_FORM
                  : equipment.equipmentFunction ===
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                      .ITEM_FAMILY_CODE_ENGINE_KEY
                  ? _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
                      .FLE_ENGINE_FORM
                  : _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
                      .FLE_EQUIPMENT_FORM;
              var data = {
                componentId: componentId,
                id: this.tabService.generateId(),
                objectId: this.serializationService.serialize({ equipmentCode: equipment.equipmentCode }),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          MaterialRequestManagementFormComponent.prototype.openManufacturingBatch = function(manufacturingBatchNumber) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
                  .LOG_MANUFACTURING_BATCH_FORM,
              objectId: this.serializationService.serialize({ customerCode: manufacturingBatchNumber }),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          MaterialRequestManagementFormComponent.prototype.openPart = function(candidateAsset) {
            if (candidateAsset.pn) {
              var data = {
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
                    .ENG_PART_NUMBER_FORM,
                id: this.tabService.generateId(),
                objectId: candidateAsset.pn.pnCode,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          MaterialRequestManagementFormComponent.prototype.calculateSituation = function() {
            var _this = this;
            var stockMvts = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__['ListUtils']
              .orEmpty(this.procurementRequestItem.workshopEntries)
              .filter(function(stockMvt) {
                return (
                  stockMvt.stockMvtWay ===
                  _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_8__['BidtStockMvtConstants']
                    .MVT_WAY_CREDIT
                );
              });
            this.servedStockMvts = stockMvts.filter(function(stockMvt) {
              return (
                stockMvt.mvtStatus ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .MM_MVT_STATUS_EXECUTED_KEY
              );
            });
            this.servedNb = this.servedStockMvts
              .map(function(stockMvt) {
                return stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0;
              })
              .reduce(function(acc, x) {
                return acc + x;
              }, 0);
            this.bookedNb = this.candidateAssets
              .map(function(candidateAsset) {
                return _this.getBookedQty(candidateAsset);
              })
              .map(function(qty) {
                return _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_29__['StringUtils'].isNullOrEmpty(qty)
                  ? 0
                  : Number(qty);
              })
              .reduce(function(acc, x) {
                return acc + x;
              }, 0);
            if (
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_29__['StringUtils'].isNullOrEmpty(
                this.procurementRequestItem.requestedQuantity
              )
            ) {
              this.notServedNb = Math.max(
                0,
                _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_27__['NumberUtils'].fromString(
                  this.procurementRequestItem.requestedQuantity
                ) -
                  this.servedNb -
                  this.bookedNb
              );
            }
          };
          MaterialRequestManagementFormComponent.prototype.loadPreemptionRight = function(candidateAsset) {
            var _this = this;
            if (candidateAsset.stockInformation && candidateAsset.stockInformation.siteId) {
              this.materialRequestManagementFormService
                .findSiteById(candidateAsset.stockInformation.siteId)
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['concatMap'])(function(site) {
                    return _this.materialRequestManagementFormService.hasDisplayRights({
                      useCaseCode:
                        _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_7__[
                          'BidoFunctionTypeConstants'
                        ].UC_MM_PREEMPTION,
                      functionCode: site.siteCode
                    });
                  })
                )
                .subscribe({
                  next: function(hasPreemptionRight) {
                    candidateAsset._hasPreemptionRight = hasPreemptionRight;
                  }
                });
            }
          };
          MaterialRequestManagementFormComponent.prototype.loadCandidateAssets = function() {
            var _this = this;
            this.iscandidateAssetsLoading = true;
            this.candidateAssetsSrc = [];
            this.candidateAssets = [];
            this.resetFilters();
            if (this.selectedcandidateAssetCategory === CandidateAssetCategory.WAREHOUSE) {
              var searchCandidateWarehouse$ = this.logisticsService.searchWarehouseCandidateAssets({
                bidtProcurementRequest: __assign({}, this.procurementRequest, {
                  potentialUnit: this.potentialUnitSelected
                }),
                bidtProcReqItem: this.procurementRequestItem
              });
              var inputRemainigQuantity = {
                bidtProcReqItemDTO: this.procurementRequestItem,
                notServedQuantity: this.notServedNb
              };
              var calculateRemaining$ = this.logisticsService.calculateRemainingQuantity(inputRemainigQuantity);
              Object(rxjs__WEBPACK_IMPORTED_MODULE_4__['forkJoin'])([
                searchCandidateWarehouse$,
                calculateRemaining$
              ]).subscribe({
                next: function(_a) {
                  var _b = __read(_a, 2),
                    searchCandidateWarehouse = _b[0],
                    calculateRemaining = _b[1];
                  _this.candidateAssetsSrc = _this.sortCandidateAssets(searchCandidateWarehouse);
                  _this.candidateAssetsSrc.forEach(function(candidateAsset) {
                    _this.loadPreemptionRight(candidateAsset);
                  });
                  _this.candidateAssets = __spread(_this.candidateAssetsSrc);
                  _this.calculateSituation();
                  _this.calculateRemainingQuantity(calculateRemaining);
                  _this.iscandidateAssetsLoading = false;
                }
              });
            } else if (this.selectedcandidateAssetCategory === CandidateAssetCategory.LOCAL) {
              var searchCandidateLocal$ = this.logisticsService.searchLocalCandidateAssets({
                bidtProcurementRequest: __assign({}, this.procurementRequest, {
                  potentialUnit: this.potentialUnitSelected
                }),
                bidtProcReqItem: this.procurementRequestItem
              });
              var inputRemainigQuantity = {
                bidtProcReqItemDTO: this.procurementRequestItem,
                notServedQuantity: this.notServedNb
              };
              var calculateRemaining$ = this.logisticsService.calculateRemainingQuantity(inputRemainigQuantity);
              Object(rxjs__WEBPACK_IMPORTED_MODULE_4__['forkJoin'])([
                searchCandidateLocal$,
                calculateRemaining$
              ]).subscribe({
                next: function(_a) {
                  var _b = __read(_a, 2),
                    searchCandidateLocal = _b[0],
                    calculateRemaining = _b[1];
                  _this.candidateAssetsSrc = _this.sortCandidateAssets(searchCandidateLocal);
                  _this.candidateAssetsSrc.forEach(function(candidateAsset) {
                    _this.loadPreemptionRight(candidateAsset);
                  });
                  _this.candidateAssets = __spread(_this.candidateAssetsSrc);
                  _this.calculateSituation();
                  _this.calculateRemainingQuantity(calculateRemaining);
                  _this.iscandidateAssetsLoading = false;
                }
              });
            } else if (this.selectedcandidateAssetCategory === CandidateAssetCategory.GLOBAL) {
              var searchCandidateGlobal$ = this.logisticsService.searchGlobalCandidateAssets({
                bidtProcurementRequest: __assign({}, this.procurementRequest, {
                  potentialUnit: this.potentialUnitSelected
                }),
                bidtProcReqItem: this.procurementRequestItem
              });
              var inputRemainigQuantity = {
                bidtProcReqItemDTO: this.procurementRequestItem,
                notServedQuantity: this.notServedNb
              };
              var calculateRemaining$ = this.logisticsService.calculateRemainingQuantity(inputRemainigQuantity);
              Object(rxjs__WEBPACK_IMPORTED_MODULE_4__['forkJoin'])([
                searchCandidateGlobal$,
                calculateRemaining$
              ]).subscribe({
                next: function(_a) {
                  var _b = __read(_a, 2),
                    searchCandidateGlobal = _b[0],
                    calculateRemaining = _b[1];
                  _this.candidateAssetsSrc = _this.sortCandidateAssets(searchCandidateGlobal);
                  _this.candidateAssetsSrc.forEach(function(candidateAsset) {
                    _this.loadPreemptionRight(candidateAsset);
                  });
                  _this.candidateAssets = __spread(_this.candidateAssetsSrc);
                  _this.calculateSituation();
                  _this.calculateRemainingQuantity(calculateRemaining);
                  _this.iscandidateAssetsLoading = false;
                }
              });
            } else {
              var searchCandidateCanibalism$ = this.logisticsService.searchCandidateAssetsForCannibalism({
                bidtProcurementRequest: __assign({}, this.procurementRequest, {
                  potentialUnit: this.potentialUnitSelected
                }),
                bidtProcReqItem: this.procurementRequestItem
              });
              var inputRemainigQuantity = {
                bidtProcReqItemDTO: this.procurementRequestItem,
                notServedQuantity: this.notServedNb
              };
              var calculateRemaining$ = this.logisticsService.calculateRemainingQuantity(inputRemainigQuantity);
              Object(rxjs__WEBPACK_IMPORTED_MODULE_4__['forkJoin'])([
                searchCandidateCanibalism$,
                calculateRemaining$
              ]).subscribe({
                next: function(_a) {
                  var _b = __read(_a, 2),
                    searchCandidateCanibalism = _b[0],
                    calculateRemaining = _b[1];
                  _this.candidateAssetsSrc = _this.sortCandidateAssets(searchCandidateCanibalism);
                  _this.candidateAssets = __spread(_this.candidateAssetsSrc);
                  _this.calculateSituation();
                  _this.calculateRemainingQuantity(calculateRemaining);
                  _this.iscandidateAssetsLoading = false;
                }
              });
            }
          };
          MaterialRequestManagementFormComponent.prototype.calculateRemainingQuantity = function(calculateRemaining) {
            this.quantityInMovement = calculateRemaining.quantityInMovement;
            this.remainingQuantity = calculateRemaining.remainingQuantity;
            this.createTransferOrderInput = {
              procurmentRequest: this.procurementRequest,
              procReqItem: this.procurementRequestItem,
              notServedQuantity: this.remainingQuantity
            };
          };
          MaterialRequestManagementFormComponent.prototype.sortCandidateAssets = function(candidateAssets) {
            var _this = this;
            return candidateAssets.sort(function(c1, c2) {
              if (_this.isCandidateAssetServed(c1) && !_this.isCandidateAssetServed(c2)) {
                return -1;
              } else if (!_this.isCandidateAssetServed(c1) && _this.isCandidateAssetServed(c2)) {
                return 1;
              } else {
                if (
                  c1.bookingProcurementRequest &&
                  c1.bookingProcurementRequest.id === _this.procurementRequest.id &&
                  !(c2.bookingProcurementRequest && c2.bookingProcurementRequest.id === _this.procurementRequest.id)
                ) {
                  return -1;
                } else if (
                  c2.bookingProcurementRequest &&
                  c2.bookingProcurementRequest.id === _this.procurementRequest.id &&
                  !(c1.bookingProcurementRequest && c1.bookingProcurementRequest.id === _this.procurementRequest.id)
                ) {
                  return 1;
                } else {
                  var r1 = _this.calculateSatisfactionRate(c1);
                  var r2 = _this.calculateSatisfactionRate(c2);
                  if (r1 > r2) {
                    return -1;
                  } else if (r1 < r2) {
                    return 1;
                  } else {
                    var e1 = c1.equipment
                      ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_29__['StringUtils'].orEmpty(c1.equipment.sn)
                      : '';
                    var e2 = c2.equipment
                      ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_29__['StringUtils'].orEmpty(c2.equipment.sn)
                      : '';
                    return e1.localeCompare(e2);
                  }
                }
              }
            });
          };
          MaterialRequestManagementFormComponent.prototype.loadItemIllustration = function(procurementRequestItem) {
            var _this = this;
            if (
              procurementRequestItem.birePn &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_29__['StringUtils'].isNullOrEmpty(
                procurementRequestItem.birePn.pnCode
              )
            ) {
              this.fileService.findBireDocItemByPnCode(procurementRequestItem.birePn.pnCode).subscribe({
                next: function(docItem) {
                  if (
                    docItem &&
                    docItem.bireDocumentDTO &&
                    _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_28__['ObjectUtils'].isDefined(
                      docItem.bireDocumentDTO.docFile
                    ) &&
                    !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_29__['StringUtils'].isNullOrEmpty(
                      docItem.bireDocumentDTO.docType
                    )
                  ) {
                    _this.itemIllustration = _this.domSanitizer.bypassSecurityTrustResourceUrl(
                      '' +
                        _shared_utils_image_utils__WEBPACK_IMPORTED_MODULE_25__['ImageUtils'].getBase64Prefix(
                          docItem.bireDocumentDTO.docType
                        ) +
                        docItem.bireDocumentDTO.docFile
                    );
                  }
                }
              });
            }
          };
          MaterialRequestManagementFormComponent.prototype.init = function() {
            this.formattedRequestedPotential = '';
            this.selectedCandidateAsset = undefined;
            this.procurementRequest = {};
            this.procurementRequestItem = {};
            this.selectedcandidateAssetCategory = CandidateAssetCategory.WAREHOUSE;
            this.potentialUnitList = [];
            this.candidateAssetsSrc = [];
            this.candidateAssets = [];
            this.equipmentStatusList = [];
            this.statusList = [];
            this.servedNb = 0;
            this.bookedNb = 0;
            this.notServedNb = 0;
            this.iscandidateAssetsLoading = false;
            this.servedStockMvts = [];
            this.satifactionRateStatus = [];
            this.showCreateTransferOrderDialog = false;
            this.workPackageAsset = undefined;
            this.workPackageAssetName = '';
            this.searchFilterObject = {};
            this.searchFilterObject.sameSite = -1;
            this.searchFilterObject.availableAtDate = -1;
            this.searchFilterObject.potential = -1;
            this.searchFilterObject.calendarPotential = -1;
            this.searchFilterObject.bookingStatus = -1;
            this.searchFilterObject.noUnconfirmedFailure = -1;
            this.clearTables();
            this.materialProposedTableCols = [];
            this.siteList = [];
            this.warehouseList = [];
            this.logisticsTypeList = [];
            this.showChangeSupplierAndQuantityDialog = false;
          };
          MaterialRequestManagementFormComponent.prototype.initMaterialProposedTableCols = function() {
            this.materialProposedTableCols = this.getCandidateAssetTableColumnsForLocalCategory();
          };
          MaterialRequestManagementFormComponent.prototype.getCandidateAssetTableColumnsForPickingCategory = function() {
            return [
              { field: 'material', alignment: 'left', width: '15%' },
              { field: 'snBatch', alignment: 'left', width: '12.5%' },
              { field: 'msn', alignment: 'left', width: '15%' },
              { field: 'locationForPicking', alignment: 'left', width: '17.5%' },
              { field: 'technicalData', alignment: 'left', width: '15%' },
              { field: 'availabilityAtDate', alignment: 'left', width: '15%' },
              { field: 'satisfactionRate', alignment: 'left', width: '10%' }
            ];
          };
          MaterialRequestManagementFormComponent.prototype.getCandidateAssetTableColumnsForLocalCategory = function() {
            return [
              { field: 'material', alignment: 'left', width: '15%' },
              { field: 'batch', alignment: 'left', width: '12.5%' },
              { field: 'sn', alignment: 'left', width: '15%' },
              { field: 'quantity', alignment: 'right', width: '5%' },
              { field: 'location', alignment: 'left', width: '15%' },
              { field: 'technicalData', alignment: 'left', width: '12.5%' },
              { field: 'availabilityAtDate', alignment: 'left', width: '15%' },
              { field: 'satisfactionRate', alignment: 'left', width: '10%' }
            ];
          };
          MaterialRequestManagementFormComponent.prototype.clearTables = function() {
            this.materialProposedTable = [];
          };
          MaterialRequestManagementFormComponent.prototype.onChangeCustomer = function() {
            this.openChangeCustomerDialog = true;
          };
          MaterialRequestManagementFormComponent.prototype.resetFilters = function() {
            this.searchFilterObject.status = undefined;
            this.searchFilterObject.sn = undefined;
            this.searchFilterObject.site = undefined;
            this.searchFilterObject.warehouse = undefined;
            this.searchFilterObject.sameSite = SatisfactoryRateFilterState.UNDEFINED;
            this.searchFilterObject.availableAtDate = SatisfactoryRateFilterState.UNDEFINED;
            this.searchFilterObject.potential = SatisfactoryRateFilterState.UNDEFINED;
            this.searchFilterObject.calendarPotential = SatisfactoryRateFilterState.UNDEFINED;
            this.searchFilterObject.bookingStatus = SatisfactoryRateFilterState.UNDEFINED;
            this.searchFilterObject.noUnconfirmedFailure = SatisfactoryRateFilterState.UNDEFINED;
            this.warehouseList = [];
            this.locationWarehouseType = this.logisticsTypeList[0].value;
            this.candidateAssets = __spread(this.candidateAssetsSrc);
          };
          MaterialRequestManagementFormComponent.prototype.filterSearchResult = function() {
            var _this = this;
            this.candidateAssets = this.candidateAssetsSrc.filter(function(elt) {
              return (
                _this.statusFilterCriteria(elt) &&
                _this.snFilterCriteria(elt) &&
                _this.siteFilterCriteria(elt) &&
                _this.warehouseFilterCriteria(elt) &&
                _this.satifactoryRateSameSiteFilterCriteria(elt) &&
                _this.satisfactoryRateAvailableAtDateCriteria(elt) &&
                _this.satisfactoryRatePotentialCriteria(elt) &&
                _this.satisfactoryRateCalendarPotentialCriteria(elt) &&
                _this.statifactoryRateBookingStatusCriteria(elt) &&
                _this.satisfactoryRateNoUnconfirmedFailureCriteria(elt)
              );
            });
          };
          MaterialRequestManagementFormComponent.prototype.statusFilterCriteria = function(elt) {
            return (
              !this.searchFilterObject.status ||
              (!!elt.equipment && elt.equipment.operationalStatus === this.searchFilterObject.status)
            );
          };
          MaterialRequestManagementFormComponent.prototype.snFilterCriteria = function(elt) {
            return (
              !this.searchFilterObject.sn ||
              (!!elt.equipment &&
                !!elt.equipment.sn &&
                elt.equipment.sn.toUpperCase().includes(this.searchFilterObject.sn.toUpperCase()))
            );
          };
          MaterialRequestManagementFormComponent.prototype.siteFilterCriteria = function(elt) {
            return (
              !this.searchFilterObject.site ||
              (!!elt.siteReceipt && elt.siteReceipt.siteId === this.searchFilterObject.site)
            );
          };
          MaterialRequestManagementFormComponent.prototype.warehouseFilterCriteria = function(elt) {
            return (
              !this.searchFilterObject.warehouse ||
              (!!elt.warehouseReceipt && elt.warehouseReceipt.wareHouseId === this.searchFilterObject.warehouse)
            );
          };
          MaterialRequestManagementFormComponent.prototype.satifactoryRateSameSiteFilterCriteria = function(elt) {
            return (
              this.searchFilterObject.sameSite === SatisfactoryRateFilterState.UNDEFINED || // UNDEFINED
              (this.searchFilterObject.sameSite === SatisfactoryRateFilterState.YES && // YES
                !!elt.siteReceipt &&
                !!this.procurementRequest.bidtSiteReceipt &&
                elt.siteReceipt.siteId === this.procurementRequest.bidtSiteReceipt.siteId) ||
              (this.searchFilterObject.sameSite === SatisfactoryRateFilterState.NO && // NO
                !(
                  !!elt.siteReceipt &&
                  !!this.procurementRequest.bidtSiteReceipt &&
                  elt.siteReceipt.siteId === this.procurementRequest.bidtSiteReceipt.siteId
                ))
            );
          };
          MaterialRequestManagementFormComponent.prototype.satisfactoryRateAvailableAtDateCriteria = function(elt) {
            return (
              this.searchFilterObject.availableAtDate === SatisfactoryRateFilterState.UNDEFINED || // UNDEFINED
              (this.searchFilterObject.availableAtDate === SatisfactoryRateFilterState.YES && // YES
                !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_28__['ObjectUtils'].isDefined(
                  elt.plannedAvailabilityDate
                )) ||
              (this.searchFilterObject.availableAtDate === SatisfactoryRateFilterState.NO && // NO
                _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_28__['ObjectUtils'].isDefined(
                  elt.plannedAvailabilityDate
                ))
            );
          };
          MaterialRequestManagementFormComponent.prototype.satisfactoryRatePotentialCriteria = function(elt) {
            return (
              this.searchFilterObject.potential === SatisfactoryRateFilterState.UNDEFINED || // UNDEFINED
              (this.searchFilterObject.potential === SatisfactoryRateFilterState.YES && // YES
                ((!this.procurementRequest.requestedPotential &&
                  (!elt.potentialValue ||
                    _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_27__['NumberUtils'].fromString(
                      elt.potentialValue
                    ) > 0)) ||
                  (!!elt.potentialValue &&
                    !!this.procurementRequest.requestedPotential &&
                    _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_27__['NumberUtils'].fromString(
                      elt.potentialValue
                    ) >
                      _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_27__['NumberUtils'].fromString(
                        this.procurementRequest.requestedPotential
                      )))) ||
              (this.searchFilterObject.potential === SatisfactoryRateFilterState.NO && // NO
                !(
                  (!this.procurementRequest.requestedPotential &&
                    (!elt.potentialValue ||
                      _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_27__['NumberUtils'].fromString(
                        elt.potentialValue
                      ) > 0)) ||
                  (!!elt.potentialValue &&
                    !!this.procurementRequest.requestedPotential &&
                    _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_27__['NumberUtils'].fromString(
                      elt.potentialValue
                    ) >
                      _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_27__['NumberUtils'].fromString(
                        this.procurementRequest.requestedPotential
                      ))
                ))
            );
          };
          MaterialRequestManagementFormComponent.prototype.satisfactoryRateCalendarPotentialCriteria = function(elt) {
            return (
              this.searchFilterObject.calendarPotential === SatisfactoryRateFilterState.UNDEFINED || // UNDEFIND
              (this.searchFilterObject.calendarPotential === SatisfactoryRateFilterState.YES && // YES
                ((!!this.procurementRequest.requestedDate &&
                  !!this.procurementRequest.calendarPotential &&
                  !!elt.calendarPotential &&
                  moment__WEBPACK_IMPORTED_MODULE_3__(elt.calendarPotential).isAfter(
                    moment__WEBPACK_IMPORTED_MODULE_3__(this.procurementRequest.calendarPotential)
                  )) ||
                  !(
                    !!this.procurementRequest.requestedDate &&
                    !!this.procurementRequest.calendarPotential &&
                    !!elt.calendarPotential
                  ))) ||
              (this.searchFilterObject.calendarPotential === SatisfactoryRateFilterState.NO && // NO
                !(
                  (!!this.procurementRequest.requestedDate &&
                    !!this.procurementRequest.calendarPotential &&
                    !!elt.calendarPotential &&
                    moment__WEBPACK_IMPORTED_MODULE_3__(elt.calendarPotential).isAfter(
                      moment__WEBPACK_IMPORTED_MODULE_3__(this.procurementRequest.calendarPotential)
                    )) ||
                  !(
                    !!this.procurementRequest.requestedDate &&
                    !!this.procurementRequest.calendarPotential &&
                    !!elt.calendarPotential
                  )
                ))
            );
          };
          MaterialRequestManagementFormComponent.prototype.statifactoryRateBookingStatusCriteria = function(elt) {
            return (
              this.searchFilterObject.bookingStatus === SatisfactoryRateFilterState.UNDEFINED || // UNDEFINED
              (this.searchFilterObject.bookingStatus === SatisfactoryRateFilterState.YES && // YES
                (!_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_28__['ObjectUtils'].isDefined(
                  elt.bookingProcurementRequest
                ) ||
                  (!!elt.bookingProcurementRequest &&
                    elt.bookingProcurementRequest.id === this.procurementRequest.id))) ||
              (this.searchFilterObject.bookingStatus === SatisfactoryRateFilterState.NO && // NO
                !(
                  !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_28__['ObjectUtils'].isDefined(
                    elt.bookingProcurementRequest
                  ) ||
                  (!!elt.bookingProcurementRequest && elt.bookingProcurementRequest.id === this.procurementRequest.id)
                ))
            );
          };
          MaterialRequestManagementFormComponent.prototype.satisfactoryRateNoUnconfirmedFailureCriteria = function(
            elt
          ) {
            return (
              this.searchFilterObject.noUnconfirmedFailure === SatisfactoryRateFilterState.UNDEFINED || // UNDEFINED
              (this.searchFilterObject.noUnconfirmedFailure === SatisfactoryRateFilterState.YES && // YES
                !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_28__['ObjectUtils'].isDefined(
                  elt.unconfirmedFailure
                )) ||
              (this.searchFilterObject.noUnconfirmedFailure === SatisfactoryRateFilterState.NO && // NO
                _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_28__['ObjectUtils'].isDefined(
                  elt.unconfirmedFailure
                ))
            );
          };
          MaterialRequestManagementFormComponent.prototype.onGoBack = function() {
            var openMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read;
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
                  .LOG_MATERIAL_REQUEST_MANAGEMENT_SEARCH,
              openMode: openMode
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          MaterialRequestManagementFormComponent.prototype.deleteMaterial = function(rowData) {
            var criteriaInput = {
              id: Number(rowData.id)
            };
            this.logisticsService.deleteMaterial(criteriaInput).subscribe(function(results) {
              // Todo depend on response
            });
          };
          MaterialRequestManagementFormComponent.prototype.formatEquipmentStatus = function(statusValue) {
            var matchingStatus = this.equipmentStatusList.find(function(status) {
              return status.value === statusValue;
            });
            return matchingStatus
              ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_29__['StringUtils'].orEmpty(matchingStatus.label)
              : '';
          };
          MaterialRequestManagementFormComponent.prototype.formatStatus = function(statusValue) {
            var matchingStatus = this.statusList.find(function(status) {
              return status.value === statusValue;
            });
            return matchingStatus
              ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_29__['StringUtils'].orEmpty(matchingStatus.label)
              : '';
          };
          MaterialRequestManagementFormComponent.prototype.formatQuantity = function(quantity) {
            return quantity
              ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_27__['NumberUtils']
                  .roundNumber(
                    _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_27__['NumberUtils'].fromString(quantity),
                    2
                  )
                  .toString()
              : '';
          };
          MaterialRequestManagementFormComponent.prototype.formatPotential = function(potential) {
            return potential
              ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_27__['NumberUtils']
                  .roundNumber(
                    _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_27__['NumberUtils'].fromString(potential),
                    2
                  )
                  .toString()
              : '';
          };
          MaterialRequestManagementFormComponent.prototype.updateCandidateAssetTableColumns = function() {
            this.materialProposedTableCols =
              this.selectedcandidateAssetCategory === CandidateAssetCategory.PICKING
                ? this.getCandidateAssetTableColumnsForPickingCategory()
                : this.getCandidateAssetTableColumnsForLocalCategory();
            this.loadCandidateAssets();
          };
          MaterialRequestManagementFormComponent.prototype.isAvailableAtDate = function(candidateAsset) {
            return !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_28__['ObjectUtils'].isDefined(
              candidateAsset.plannedAvailabilityDate
            );
          };
          MaterialRequestManagementFormComponent.prototype.calculateSatisfactionRate = function(candidateAsset) {
            var rates = [];
            var rate = function(value) {
              rates.push(value ? 1 : 0);
            };
            // Availability at date
            rate(this.isAvailableAtDate(candidateAsset));
            // Not booked by another procurement request
            rate(
              !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_28__['ObjectUtils'].isDefined(
                candidateAsset.bookingProcurementRequest
              ) || candidateAsset.bookingProcurementRequest.id === this.procurementRequest.id
            );
            // Potential
            rate(
              !this.procurementRequest.requestedPotential ||
                (!!candidateAsset.potentialValue &&
                  _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_27__['NumberUtils'].fromString(
                    candidateAsset.potentialValue
                  ) >=
                    _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_27__['NumberUtils'].fromString(
                      this.procurementRequest.requestedPotential
                    ))
            );
            // Same site
            rate(
              !!candidateAsset.siteReceipt &&
                !!this.procurementRequest.bidtSiteReceipt &&
                candidateAsset.siteReceipt.siteId === this.procurementRequest.bidtSiteReceipt.siteId
            );
            // No Unconfirmed Failure
            rate(
              !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_28__['ObjectUtils'].isDefined(
                candidateAsset.unconfirmedFailure
              )
            );
            // Calendar potential
            if (!candidateAsset.calendarPotential) {
              rate(true);
            } else {
              rate(
                moment__WEBPACK_IMPORTED_MODULE_3__(candidateAsset.calendarPotential).isAfter(
                  moment__WEBPACK_IMPORTED_MODULE_3__(
                    this.procurementRequest.calendarPotential || this.procurementRequest.requestedDate
                  )
                )
              );
            }
            // tslint:disable-next-line:no-magic-numbers
            return _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_27__['NumberUtils'].roundNumber(
              (rates.filter(function(value) {
                return value === 1;
              }).length /
                rates.length) *
                100,
              0
            );
          };
          MaterialRequestManagementFormComponent.prototype.setPotentialUnitList = function(pnMeasures) {
            var _this = this;
            this.potentialUnitList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_26__['ListUtils']
              .orEmpty(pnMeasures)
              .map(function(pnMeasure) {
                return pnMeasure.counterCode;
              })
              .filter(function(counterCode) {
                return !!counterCode;
              })
              .sort(function(c1, c2) {
                return c1.localeCompare(c2);
              })
              .map(function(counterCode) {
                return {
                  label: counterCode,
                  command: function() {
                    _this.potentialUnitSelected = counterCode;
                    _this.loadCandidateAssets();
                  }
                };
              });
            if (this.potentialUnitList.length > 0) {
              this.potentialUnitSelected = this.potentialUnitList[0].label;
            }
          };
          MaterialRequestManagementFormComponent.prototype.formatSite = function(siteCode) {
            var matchingSite = this.sites.find(function(site) {
              return site.siteCode === siteCode;
            });
            return matchingSite
              ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_29__['StringUtils'].orEmpty(matchingSite.siteName)
              : '';
          };
          MaterialRequestManagementFormComponent.prototype.pick = function(rowData) {
            var _this = this;
            this.saving = true;
            this.logisticsService
              .cannibalizeAsset({
                bidtProcReqItem: this.procurementRequestItem,
                candidateAsset: rowData,
                requestedDate: this.procurementRequest.requestedDate
              })
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['finalize'])(function() {
                  _this.saving = false;
                })
              )
              .subscribe(function() {
                _this.reload();
              });
          };
          MaterialRequestManagementFormComponent.prototype.openSatisfactionRateDetails = function(candidateAsset) {
            this.selectedCandidateAsset = candidateAsset;
            this.showSatisfactionRateDialog = true;
          };
          MaterialRequestManagementFormComponent.prototype.isSameQuantity = function(qt1, qt2) {
            return this.formatQuantity(qt1) === this.formatQuantity(qt2);
          };
          MaterialRequestManagementFormComponent.prototype.openProcurementRequest = function(procurementRequest) {
            if (procurementRequest) {
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
                    .LOG_PROCUREMENT_REQUEST_FORM,
                objectId: this.serializationService.serialize({ id: procurementRequest.id }),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          MaterialRequestManagementFormComponent.prototype.openTransferOrder = function(transferOrder) {
            if (transferOrder) {
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
                    .LOG_TRANSFER_ORDER_FORM,
                objectId: this.serializationService.serialize(transferOrder.id),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          MaterialRequestManagementFormComponent.prototype.cancelBooking = function(rowData) {
            var _this = this;
            if (rowData.equipment) {
              this.logisticsService.isAssetBooked(rowData.equipment).subscribe({
                next: function(stockMvt) {
                  if (stockMvt) {
                    _this.logisticsService.cancelBookedAsset(stockMvt).subscribe({
                      next: function() {
                        _this.reload();
                      }
                    });
                  } else {
                    _this.messageService.showErrorMessage('errorOnCancelBookedAsset');
                  }
                }
              });
            }
          };
          MaterialRequestManagementFormComponent.prototype.cancelPicking = function(rowData) {
            var _this = this;
            if (rowData.currentBidmProject && rowData.currentBidmProject.projectId) {
              this.logisticsService
                .removeBidmProject({ projectId: rowData.currentBidmProject.projectId })
                .subscribe(function() {
                  _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnCancelPicking'));
                  _this.reload();
                });
            }
          };
          MaterialRequestManagementFormComponent.prototype.openBatch = function(code) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
                  .LOG_PACKAGING_BATCH_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read
            };
            data.objectId = code;
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          MaterialRequestManagementFormComponent.prototype.isSelectBtnVisible = function() {
            var procurementRequestQty = this.procurementRequestItem.requestedQuantity
              ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_27__['NumberUtils'].fromString(
                  this.procurementRequestItem.requestedQuantity
                )
              : undefined;
            return (
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_28__['ObjectUtils'].isDefined(
                procurementRequestQty
              ) && this.bookedNb + this.servedNb < procurementRequestQty
            );
          };
          MaterialRequestManagementFormComponent.prototype.bookCandidateAsset = function(candidateAsset) {
            var _this = this;
            if (candidateAsset.equipment) {
              candidateAsset._bookCandidateAssetLoading = true;
              var quantity = candidateAsset.equipment.sn
                ? '1'
                : this.procurementRequest.procType ===
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                      .PROCUREMENT_REQUEST_TYPE_STOCK_LEVELING ||
                  this.procurementRequest.procType ===
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                      .PROCUREMENT_REQUEST_TYPE_DEPLOYEMENT_BATCH
                ? (candidateAsset.equipment.quantity || 0).toString()
                : Math.min(this.notServedNb, candidateAsset.equipment.quantity || 0).toString();
              this.logisticsService
                .bookCandidateAsset({
                  quantity: quantity,
                  candidateAsset: candidateAsset,
                  bidtProcReqItem: this.procurementRequestItem
                })
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['finalize'])(function() {
                    candidateAsset._bookCandidateAssetLoading = false;
                  })
                )
                .subscribe({
                  next: function() {
                    _this.reload();
                  }
                });
            }
          };
          MaterialRequestManagementFormComponent.prototype.confirmPreemptCandidateAsset = function(candidateAsset) {
            var _this = this;
            this.confirmationService.confirm({
              messageKey: this.getTranslateKey('confirmPreempt'),
              accept: function() {
                _this.preemptCandidateAsset(candidateAsset);
              }
            });
          };
          MaterialRequestManagementFormComponent.prototype.preemptCandidateAsset = function(candidateAsset) {
            var _this = this;
            if (candidateAsset.equipment) {
              candidateAsset._bookCandidateAssetLoading = true;
              var quantity = candidateAsset.equipment.sn
                ? '1'
                : Math.min(this.notServedNb, candidateAsset.equipment.quantity || 0).toString();
              this.logisticsService
                .preemptCandidateAsset({
                  quantity: quantity,
                  candidateAsset: candidateAsset,
                  bidtProcReqItem: this.procurementRequestItem
                })
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['finalize'])(function() {
                    candidateAsset._bookCandidateAssetLoading = false;
                  })
                )
                .subscribe({
                  next: function() {
                    _this.reload();
                  }
                });
            }
          };
          MaterialRequestManagementFormComponent.prototype.openWorkPackageAsset = function() {
            if (this.workPackageAsset) {
              var componentId = void 0;
              if (
                this.workPackageAsset.equipmentFunction ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_AIRCRAFT_KEY
              ) {
                componentId =
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
                    .FLE_AIRCRAFT_FORM;
              } else if (
                this.workPackageAsset.equipmentFunction ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .ITEM_FAMILY_CODE_ENGINE_KEY
              ) {
                componentId =
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
                    .FLE_ENGINE_FORM;
              } else {
                componentId =
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
                    .FLE_EQUIPMENT_FORM;
              }
              var data = {
                componentId: componentId,
                id: this.tabService.generateId(),
                objectId: this.serializationService.serialize({
                  equipmentCode: this.workPackageAsset.equipmentCode
                }),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          MaterialRequestManagementFormComponent.prototype.isCancelBookingBtnVisible = function(candidateAsset) {
            return (
              !!candidateAsset.equipment &&
              !!candidateAsset.transferOrder &&
              !!candidateAsset.transferOrder.bidtTorItems &&
              !!candidateAsset.transferOrder.bidtTorItems
                .filter(function(torItem) {
                  return torItem && torItem.pickingMovements;
                })
                .map(function(torItem) {
                  return torItem.pickingMovements;
                })
                .reduce(function(acc, x) {
                  return acc.concat(x);
                })
                .some(function(stockMvt) {
                  return (
                    candidateAsset.equipment.sn === stockMvt.stockMvtSn &&
                    candidateAsset.equipment.batchNumber === stockMvt.stockMvtBatchNumber &&
                    (stockMvt.bidtStockMvtTypeId ===
                      _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__[
                        'BidtStockMvtTypeConstant'
                      ].PICKING ||
                      stockMvt.bidtStockMvtTypeId ===
                        _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__[
                          'BidtStockMvtTypeConstant'
                        ].CROSS_DOCKING) &&
                    stockMvt.mvtStatus !==
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                        .MM_MVT_STATUS_EXECUTED_KEY &&
                    stockMvt.mvtStatus !==
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                        .MM_MVT_STATUS_ON_GOING_KEY
                  );
                })
            );
          };
          MaterialRequestManagementFormComponent.prototype.isCandidateAssetServed = function(candidateAsset) {
            return (
              !!candidateAsset.equipment &&
              this.servedStockMvts.some(function(servedStockMvt) {
                return (
                  servedStockMvt.stockMvtSn === candidateAsset.equipment.sn &&
                  servedStockMvt.stockMvtBatchNumber === candidateAsset.equipment.batchNumber
                );
              })
            );
          };
          MaterialRequestManagementFormComponent.prototype.loadLocationWarehouses = function() {
            var _this = this;
            this.searchFilterObject.warehouse = undefined;
            this.warehouseList = [];
            if (!!this.searchFilterObject.site && this.locationWarehouseType) {
              this.loadWareHouses(this.searchFilterObject.site, this.locationWarehouseType).subscribe({
                next: function(warehouses) {
                  _this.warehouseList = warehouses;
                }
              });
            }
          };
          MaterialRequestManagementFormComponent.prototype.loadWareHouses = function(siteId, warehouseCategory) {
            return this.procurementRequestSearchService.getWarehousesBySiteId(siteId).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['map'])(function(warehouses) {
                return warehouses
                  .filter(function(warehouse) {
                    return (
                      !!warehouse.whCode &&
                      !!warehouse.whName &&
                      !!warehouse.whCategory &&
                      warehouseCategory === warehouse.whCategory
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
              })
            );
          };
          MaterialRequestManagementFormComponent.prototype.getBookedQty = function(candidateAsset) {
            if (candidateAsset.transferOrder && candidateAsset.transferOrder.bidtTorItems) {
              var matchingStockMvt = candidateAsset.transferOrder.bidtTorItems
                .filter(function(torItem) {
                  return torItem && torItem.pickingMovements;
                })
                .map(function(torItem) {
                  return torItem.pickingMovements;
                })
                .reduce(function(acc, x) {
                  return acc.concat(x);
                })
                .find(function(stockMvt) {
                  return (
                    candidateAsset.equipment.sn === stockMvt.stockMvtSn &&
                    candidateAsset.equipment.batchNumber === stockMvt.stockMvtBatchNumber &&
                    (stockMvt.bidtStockMvtTypeId ===
                      _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__[
                        'BidtStockMvtTypeConstant'
                      ].PICKING ||
                      stockMvt.bidtStockMvtTypeId ===
                        _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__[
                          'BidtStockMvtTypeConstant'
                        ].CROSS_DOCKING)
                  );
                });
              if (matchingStockMvt) {
                return _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_29__['StringUtils'].orEmpty(
                  matchingStockMvt.stockMvtQuantity
                );
              }
            }
            return '';
          };
          MaterialRequestManagementFormComponent.prototype.onChangeSupplier = function() {
            this.showChangeSupplierAndQuantityDialog = true;
          };
          MaterialRequestManagementFormComponent.prototype.isUserHasRight = function(right, degree) {
            return this.sessionService.hasUserRightByUseCase(right, degree);
          };
          MaterialRequestManagementFormComponent.prototype.onCreateTransferOrder = function() {
            this.reload();
          };
          MaterialRequestManagementFormComponent.prototype.openCreateTransferDialog = function() {
            this.showCreateTransferOrderDialog = true;
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('resultsContainerAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            MaterialRequestManagementFormComponent.prototype,
            'resultsContainerAnchor',
            void 0
          );
          MaterialRequestManagementFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-material-request-management-form',
                template: __webpack_require__(
                  /*! ./material-request-management-form.component.html */ './src/app/main/logistics/material-request-management/form/material-request-management-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../shared/style.scss */ './src/app/main/logistics/material-request-management/shared/style.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_15__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_17__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_18__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_20__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_22__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_21__['SessionService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_14__['DateService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__['ConfirmationService'],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__['DomSanitizer'],
                _shared_services_file_service__WEBPACK_IMPORTED_MODULE_16__['FileService'],
                _logistics_service__WEBPACK_IMPORTED_MODULE_30__['LogisticsService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_19__['PropertiesService'],
                _material_request_management_form_service__WEBPACK_IMPORTED_MODULE_32__[
                  'MaterialRequestManagementFormService'
                ],
                _procurement_request_search_procurement_request_search_service__WEBPACK_IMPORTED_MODULE_31__[
                  'ProcurementRequestSearchService'
                ]
              ])
            ],
            MaterialRequestManagementFormComponent
          );
          return MaterialRequestManagementFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_23__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/material-request-management/form/material-request-management-form.service.ts':
      /*!*************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-management/form/material-request-management-form.service.ts ***!
  \*************************************************************************************************************/
      /*! exports provided: MaterialRequestManagementFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MaterialRequestManagementFormService',
          function() {
            return MaterialRequestManagementFormService;
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
        /* harmony import */ var _shared_api_user_profile_business_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/api/user-profile-business.api */ './src/app/shared/api/user-profile-business.api.ts'
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

        var MaterialRequestManagementFormService = /** @class */ (function(_super) {
          __extends(MaterialRequestManagementFormService, _super);
          function MaterialRequestManagementFormService(
            http,
            appConfigService,
            bidtSiteApi,
            userProfileBusinessApi,
            productStructureManagementApi,
            fleetManagementApi,
            bidtWarehouseApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtSiteApi = bidtSiteApi;
            _this.userProfileBusinessApi = userProfileBusinessApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            return _this;
          }
          /**************************************************************************
           * User profile business api
           *************************************************************************/
          MaterialRequestManagementFormService.prototype.hasDisplayRights = function(input) {
            return _super.prototype.post.call(this, this.userProfileBusinessApi.hasDisplayRights, input);
          };
          /**************************************************************************
           * Bidt site api
           *************************************************************************/
          MaterialRequestManagementFormService.prototype.findAllSite = function() {
            return _super.prototype.post.call(this, this.bidtSiteApi.getSites);
          };
          MaterialRequestManagementFormService.prototype.findSiteById = function(input) {
            return _super.prototype.post.call(this, this.bidtSiteApi.getById, input);
          };
          /**************************************************************************
           * Bidt warehouse api
           *************************************************************************/
          MaterialRequestManagementFormService.prototype.getWarehousesBySiteId = function(siteId) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findBySiteId, siteId);
          };
          /**************************************************************************
           * search requested material api
           *************************************************************************/
          MaterialRequestManagementFormService.prototype.findProposedMaterials = function(partNumber) {
            var simpleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__['Observable'](function(observer) {
              var partNumber2 = partNumber === '70720041-00' ? '70720041-10' : '303-086-103-1';
              var searchResult = {
                list: [
                  {
                    sn: '69871',
                    pn: partNumber,
                    designation: '### DESIGNATION DU P/N ###',
                    site: 'Monte-de-Marsan',
                    warehouse: 'DRSU',
                    location: 'B523',
                    responsible: 'DMA6',
                    potential: '600 FH',
                    expiration: '90 Jours',
                    satisfactionRate: 100,
                    status: 'Disponible',
                    satisfactionColor: 'green',
                    buttonName: 'cancel'
                  },
                  {
                    sn: '54789',
                    pn: partNumber2,
                    designation: '### DESIGNATION DU P/N ###',
                    site: 'Toulouse',
                    warehouse: 'DRSU',
                    location: 'Transit',
                    responsible: 'DMA6',
                    potential: '500 FH',
                    expiration: '60 Jours',
                    satisfactionRate: 60,
                    status: 'Disponible',
                    message: 'Reserve pour DA S4000301',
                    satisfactionColor: 'yellow',
                    interchangebility: partNumber === '70720041-00' ? 'Two-Ways' : 'One-Way',
                    buttonName: 'book'
                  },
                  {
                    sn: '66399',
                    pn: partNumber,
                    designation: '### DESIGNATION DU P/N ###',
                    site: 'Saint Dizier',
                    warehouse: 'Ateller A',
                    location: 'Transit',
                    responsible: 'DMA6',
                    potential: '250 FH',
                    expiration: '72 Jours',
                    satisfactionRate: 40,
                    status: 'En attente de reparation',
                    message: 'Disporible a partir du 29/08/2019',
                    satisfactionColor: 'yellow',
                    buttonName: 'book'
                  },
                  {
                    sn: '66389',
                    pn: partNumber,
                    designation: '### DESIGNATION DU P/N ###',
                    site: 'Saint Dizier',
                    warehouse: 'Ateller A',
                    location: 'Transit',
                    responsible: 'DMA6',
                    potential: '250 FH',
                    expiration: '72 Jours',
                    satisfactionRate: 20,
                    status: 'En attente de reparation',
                    message: 'Disporible a partir du 01/09/2019',
                    satisfactionColor: 'red',
                    buttonName: 'preempter'
                  }
                ],
                moreResults: false
              };
              // observable execution
              observer.next(searchResult);
              observer.complete();
            });
            return simpleObservable;
          };
          MaterialRequestManagementFormService.prototype.getOperationalStatusMap = function(input) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.initializeOperationalStatusList,
              input
            );
          };
          MaterialRequestManagementFormService.prototype.findAllBidoCustomer = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoCustomer);
          };
          MaterialRequestManagementFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__['AppConfigService'],
                _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_3__['BidtSiteApi'],
                _shared_api_user_profile_business_api__WEBPACK_IMPORTED_MODULE_7__['UserProfileBusinessApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_6__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_5__['FleetManagementApi'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_4__['BidtWarehouseApi']
              ])
            ],
            MaterialRequestManagementFormService
          );
          return MaterialRequestManagementFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/logistics/material-request-management/form/popups/change-customer-popup-form/change-customer-popup-form.component.html':
      /*!*********************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-management/form/popups/change-customer-popup-form/change-customer-popup-form.component.html ***!
  \*********************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".writeRequest" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <ng-container>\r\n      <div class="section">\r\n        <h4 class="section-title">\r\n          {{ getComponentName() + ".currentSupplier" | translate }}\r\n        </h4>\r\n        <div class="section-content">\r\n          <div class="row">\r\n            <div class="form-group">\r\n              <label class="form-label">\r\n                {{ getComponentName() + ".site" | translate }}\r\n              </label>\r\n              <div class="form-control">\r\n                <div class="form-control-generic" *ngIf="procurementRequest.bidtSiteIssue">\r\n                  {{ procurementRequest?.bidtSiteIssue?.siteCode }}\r\n                  <ng-container *ngIf="procurementRequest?.bidtSiteIssue?.siteName">\r\n                    - {{ procurementRequest?.bidtSiteIssue?.siteName }}\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-group">\r\n              <label class="form-label">\r\n                {{ getComponentName() + ".warehouse" | translate }}\r\n              </label>\r\n              <div class="form-control">\r\n                <div class="form-control-generic" *ngIf="procurementRequest.bidtWarehouseIssue">\r\n                  {{ procurementRequest?.bidtWarehouseIssue?.whCode }}\r\n                  <ng-container *ngIf="procurementRequest?.bidtWarehouseIssue?.whName">\r\n                    - {{ procurementRequest?.bidtWarehouseIssue?.whName }}\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="row">\r\n            <div class="form-group">\r\n              <label class="form-label">{{ getComponentName() + ".partner" | translate }}</label>\r\n\r\n              <div class="form-control">\r\n                <div class="form-control-generic" *ngIf="procurementRequest.bidoCustomer">\r\n                  {{ procurementRequest.bidoCustomer.customerName }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section">\r\n        <h4 class="section-title">\r\n          {{ getComponentName() + ".newSupplier" | translate }}\r\n        </h4>\r\n        <div class="section-content">\r\n          <div class="row">\r\n            <div class="form-group">\r\n              <label class="form-label"> {{ getComponentName() + ".partner" | translate }} </label>\r\n              <div class="form-control">\r\n                <p-dropdown\r\n                  class="aw-dropdown fixed-width"\r\n                  [options]="customers"\r\n                  [showClear]="true"\r\n                  placeholder="&nbsp;"\r\n                  [(ngModel)]="newCustomer"\r\n                  appendTo="body"\r\n                >\r\n                </p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button type="button" color="primary" mat-raised-button (click)="validate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/material-request-management/form/popups/change-customer-popup-form/change-customer-popup-form.component.ts':
      /*!*******************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-management/form/popups/change-customer-popup-form/change-customer-popup-form.component.ts ***!
  \*******************************************************************************************************************************************/
      /*! exports provided: ChangeCustomerPopupFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ChangeCustomerPopupFormComponent',
          function() {
            return ChangeCustomerPopupFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/services/input-validation.service */ './src/app/shared/services/input-validation.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _material_request_management_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../material-request-management-form.service */ './src/app/main/logistics/material-request-management/form/material-request-management-form.service.ts'
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

        var ChangeCustomerPopupFormComponent = /** @class */ (function(_super) {
          __extends(ChangeCustomerPopupFormComponent, _super);
          function ChangeCustomerPopupFormComponent(
            inputValidationService,
            messageService,
            sessionService,
            propertiesService,
            materialRequestManagementFormService,
            logisticsService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Read,
                'ChangeCustomerPopupFormComponent'
              ) || this;
            _this.inputValidationService = inputValidationService;
            _this.messageService = messageService;
            _this.sessionService = sessionService;
            _this.propertiesService = propertiesService;
            _this.materialRequestManagementFormService = materialRequestManagementFormService;
            _this.logisticsService = logisticsService;
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          ChangeCustomerPopupFormComponent.prototype.ngOnInit = function() {
            var _this = this;
            this.updateOpenMode(this.openMode);
            this.newCustomer = {};
            if (!this.procurementRequest) {
              this.procurementRequest = {};
            }
            this.customers = [];
            this.materialRequestManagementFormService.findAllBidoCustomer().subscribe(function(customers) {
              customers.forEach(function(customer) {
                if (customer.isOwner && customer.customerCode) {
                  _this.customers.push({
                    label: customer.customerCode + (customer.customerName ? ' - ' + customer.customerName : ''),
                    value: customer
                  });
                }
              });
            });
          };
          ChangeCustomerPopupFormComponent.prototype.validate = function() {
            var _this = this;
            if (this.newCustomer) {
              this.procurementRequest.bidoCustomer = this.newCustomer;
              this.procurementRequest.bidoCustomerCustomerCode = this.newCustomer.customerCode;
              this.procurementRequest.bidoCustomerMandant = this.newCustomer.customerMandant;
              this.logisticsService.addOrUpdateProcurementRequest(this.procurementRequest).subscribe({
                next: function(procurementRequest) {
                  _this.onValidated.emit(_this.newCustomer);
                  _this.cancel();
                }
              });
            }
          };
          ChangeCustomerPopupFormComponent.prototype.cancel = function() {
            this.display = false;
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            ChangeCustomerPopupFormComponent.prototype,
            'procurementRequest',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            ChangeCustomerPopupFormComponent.prototype,
            'onValidated',
            void 0
          );
          ChangeCustomerPopupFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-change-customer-popup-form',
                template: __webpack_require__(
                  /*! ./change-customer-popup-form.component.html */ './src/app/main/logistics/material-request-management/form/popups/change-customer-popup-form/change-customer-popup-form.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_2__['InputValidationService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__['MessageService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__['SessionService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__['PropertiesService'],
                _material_request_management_form_service__WEBPACK_IMPORTED_MODULE_8__[
                  'MaterialRequestManagementFormService'
                ],
                _logistics_service__WEBPACK_IMPORTED_MODULE_7__['LogisticsService']
              ])
            ],
            ChangeCustomerPopupFormComponent
          );
          return ChangeCustomerPopupFormComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/material-request-management/form/popups/change-warehouse-and-quantity-popup-form/change-warehouse-and-quantity-popup-form.component.html':
      /*!*************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-management/form/popups/change-warehouse-and-quantity-popup-form/change-warehouse-and-quantity-popup-form.component.html ***!
  \*************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="50">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".changeSupplier" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <ng-container>\r\n      <div class="section">\r\n        <h4 class="section-title">\r\n          {{ getComponentName() + ".currentSupplier" | translate }}\r\n        </h4>\r\n        <div class="section-content">\r\n          <div class="row">\r\n            <div class="form-group">\r\n              <label class="form-label">\r\n                {{ getComponentName() + ".site" | translate }}\r\n              </label>\r\n              <div class="form-control">\r\n                <div class="form-control-generic" *ngIf="procurementRequest.bidtSiteIssue">\r\n                  {{ procurementRequest?.bidtSiteIssue?.siteCode }}\r\n                  <ng-container *ngIf="procurementRequest?.bidtSiteIssue?.siteName">\r\n                    - {{ procurementRequest?.bidtSiteIssue?.siteName }}\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-group">\r\n              <label class="form-label">\r\n                {{ getComponentName() + ".workshop" | translate }}\r\n              </label>\r\n              <div class="form-control">\r\n                <div class="form-control-generic" *ngIf="currentSupplierWarehouse">\r\n                  {{ currentSupplierWarehouse.whCode }}\r\n                  <ng-container *ngIf="currentSupplierWarehouse.whName">\r\n                    - {{ currentSupplierWarehouse.whName }}\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section">\r\n        <h4 class="section-title">\r\n          {{ getComponentName() + ".newSupplier" | translate }}\r\n        </h4>\r\n        <div class="section-content">\r\n          <div class="row">\r\n            <div class="form-group">\r\n              <label class="form-label">\r\n                {{ getComponentName() + ".site" | translate }}\r\n              </label>\r\n              <div class="form-control">\r\n                <div class="form-control-generic" *ngIf="procurementRequest.bidtSiteIssue">\r\n                  {{ procurementRequest?.bidtSiteIssue?.siteCode }}\r\n                  <ng-container *ngIf="procurementRequest?.bidtSiteIssue?.siteName">\r\n                    - {{ procurementRequest?.bidtSiteIssue?.siteName }}\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-group required">\r\n              <label class="form-label">\r\n                {{ getComponentName() + ".workshop" | translate }}\r\n              </label>\r\n              <div class="form-control">\r\n                <p-dropdown\r\n                  class="aw-dropdown fixed-width"\r\n                  [options]="warehouses"\r\n                  [showClear]="true"\r\n                  placeholder="&nbsp;"\r\n                  [(ngModel)]="newWarehouse"\r\n                  appendTo="body"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section">\r\n        <h4 class="section-title">\r\n          {{ getComponentName() + ".quantity" | translate }}\r\n        </h4>\r\n        <div class="section-content">\r\n          <div class="row">\r\n            <div class="form-group required">\r\n              <div class="form-control">\r\n                <input type="number" name="quantity" class="aw-input" [(ngModel)]="newQuantity" />\r\n              </div>\r\n              <span style="padding-left: 15px; color: red;" *ngIf="newQuantity > oldQuantity">\r\n                {{ getComponentName() + ".quantityErrorMessage" | translate }}\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      type="button"\r\n      color="primary"\r\n      mat-raised-button\r\n      (click)="validate()"\r\n      [disabled]="!newQuantity || !(newQuantity > 0) || newQuantity > oldQuantity || !newWarehouse"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/material-request-management/form/popups/change-warehouse-and-quantity-popup-form/change-warehouse-and-quantity-popup-form.component.ts':
      /*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-management/form/popups/change-warehouse-and-quantity-popup-form/change-warehouse-and-quantity-popup-form.component.ts ***!
  \***********************************************************************************************************************************************************************/
      /*! exports provided: ChangeWarehouseAndQuantityPopupFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ChangeWarehouseAndQuantityPopupFormComponent',
          function() {
            return ChangeWarehouseAndQuantityPopupFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../shared/services/input-validation.service */ './src/app/shared/services/input-validation.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _material_request_management_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../material-request-management-form.service */ './src/app/main/logistics/material-request-management/form/material-request-management-form.service.ts'
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

        var ChangeWarehouseAndQuantityPopupFormComponent = /** @class */ (function(_super) {
          __extends(ChangeWarehouseAndQuantityPopupFormComponent, _super);
          function ChangeWarehouseAndQuantityPopupFormComponent(
            inputValidationService,
            messageService,
            sessionService,
            propertiesService,
            materialRequestManagementFormService,
            logisticsService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read,
                'ChangeWarehouseAndQuantityPopupFormComponent'
              ) || this;
            _this.inputValidationService = inputValidationService;
            _this.messageService = messageService;
            _this.sessionService = sessionService;
            _this.propertiesService = propertiesService;
            _this.materialRequestManagementFormService = materialRequestManagementFormService;
            _this.logisticsService = logisticsService;
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          ChangeWarehouseAndQuantityPopupFormComponent.prototype.ngOnInit = function() {
            var _this = this;
            this.updateOpenMode(this.openMode);
            this.newQuantity = this.oldQuantity;
            this.warehouses = [];
            this.sessionService.getUserSiteId().subscribe({
              next: function(site) {
                if (site && !!site.siteId) {
                  _this.materialRequestManagementFormService
                    .getWarehousesBySiteId(site.siteId)
                    .subscribe(function(warehousesList) {
                      _this.warehouses = warehousesList
                        .filter(function(warehouse) {
                          return (
                            !!warehouse.whCode &&
                            !!warehouse.whName &&
                            !!warehouse.whCategory &&
                            warehouse.whCategory ===
                              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__[
                                'AWPropertiesConstants'
                              ].WAREHOUSE_CATEGORY_WAREHOUSE
                          );
                        })
                        .map(function(warehouse) {
                          return {
                            label: warehouse.whCode + ' - ' + warehouse.whName,
                            value: warehouse
                          };
                        })
                        .sort(function(s1, s2) {
                          return s1.label.localeCompare(s2.label);
                        });
                    });
                }
              }
            });
            if (this.procurementRequestItem.bidtWarehouseId === null && !!this.procurementRequest.bidtWarehouseIssue) {
              this.currentSupplierWarehouse = this.procurementRequest.bidtWarehouseIssue;
            } else if (!!this.procurementRequestItem.bidtWarehouseId) {
              this.logisticsService.getWarehouseById(this.procurementRequestItem.bidtWarehouseId).subscribe({
                next: function(warehouse) {
                  _this.currentSupplierWarehouse = warehouse;
                }
              });
            }
          };
          ChangeWarehouseAndQuantityPopupFormComponent.prototype.validate = function() {
            var _this = this;
            if (this.totalQuantity === this.newQuantity) {
              // maj warehouse procurement
              if (!!this.newWarehouse) {
                if (this.procurementRequestItem.bidtWarehouseId === null) {
                  this.procurementRequest.bidtWarehouseByBidtWarehouseIssueId = this.newWarehouse.wareHouseId;
                  this.procurementRequest.bidtWarehouseIssue = this.newWarehouse;
                  this.logisticsService.addOrUpdateProcurementRequest(this.procurementRequest).subscribe({
                    next: function() {
                      _this.onValidated.emit();
                      _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnChangeSupplier'));
                      _this.cancel();
                    }
                  });
                } else {
                  this.procurementRequestItem.bidtWarehouseId = this.newWarehouse.wareHouseId;
                  this.logisticsService.addOrUpdateItem(this.procurementRequestItem).subscribe({
                    next: function() {
                      _this.onValidated.emit();
                      _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnChangeSupplier'));
                      _this.cancel();
                    }
                  });
                }
              }
            } else if (this.totalQuantity > this.newQuantity) {
              // update current item quantity (remove)
              var newQty = Number(this.procurementRequestItem.requestedQuantity) - this.newQuantity;
              this.logisticsService
                .updateProcurementRequestItemQuantity({
                  itemId: this.procurementRequestItem.id,
                  newQuantity: newQty.toString(),
                  oldQuantity: this.procurementRequestItem.requestedQuantity
                })
                .subscribe({
                  next: function() {
                    // create item proc with warehouse data and new quanti
                    if (!!_this.procurementRequestItem.birePnPnCode) {
                      var input = {
                        bidtProcurementRequest: _this.procurementRequest,
                        pnCode: _this.procurementRequestItem.birePnPnCode,
                        quantity: _this.newQuantity.toString()
                      };
                      _this.logisticsService.createProcurementRequestItem(input).subscribe(function(newItem) {
                        if (!!_this.newWarehouse) {
                          newItem.bidtWarehouseId = _this.newWarehouse.wareHouseId;
                          _this.logisticsService.addOrUpdateItem(newItem).subscribe({
                            next: function() {
                              _this.onValidated.emit();
                              _this.messageService.showSuccessMessage(
                                _this.getTranslateKey('successOnChangeSupplierAndQuantity')
                              );
                              _this.cancel();
                            }
                          });
                        }
                      });
                    }
                  }
                });
            }
          };
          ChangeWarehouseAndQuantityPopupFormComponent.prototype.cancel = function() {
            this.display = false;
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            ChangeWarehouseAndQuantityPopupFormComponent.prototype,
            'procurementRequest',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            ChangeWarehouseAndQuantityPopupFormComponent.prototype,
            'procurementRequestItem',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            ChangeWarehouseAndQuantityPopupFormComponent.prototype,
            'oldQuantity',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            ChangeWarehouseAndQuantityPopupFormComponent.prototype,
            'totalQuantity',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            ChangeWarehouseAndQuantityPopupFormComponent.prototype,
            'onValidated',
            void 0
          );
          ChangeWarehouseAndQuantityPopupFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-change-warehouse-and-quantity-popup-form',
                template: __webpack_require__(
                  /*! ./change-warehouse-and-quantity-popup-form.component.html */ './src/app/main/logistics/material-request-management/form/popups/change-warehouse-and-quantity-popup-form/change-warehouse-and-quantity-popup-form.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_3__['InputValidationService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__['MessageService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__['SessionService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__['PropertiesService'],
                _material_request_management_form_service__WEBPACK_IMPORTED_MODULE_9__[
                  'MaterialRequestManagementFormService'
                ],
                _logistics_service__WEBPACK_IMPORTED_MODULE_8__['LogisticsService']
              ])
            ],
            ChangeWarehouseAndQuantityPopupFormComponent
          );
          return ChangeWarehouseAndQuantityPopupFormComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/material-request-management/form/popups/dialog-satisfaction-rate/dialog-satisfaction-rate.component.html':
      /*!*****************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-management/form/popups/dialog-satisfaction-rate/dialog-satisfaction-rate.component.html ***!
  \*****************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="45">\r\n  <a-header>\r\n    <div class="modal-title">\r\n      {{ getComponentName() + ".satisfactionRateDetails" | translate }}\r\n\r\n      <div style="margin: 0 auto; width: 8rem;">\r\n        <p-progressBar\r\n          [ngClass]="{\r\n            green: calculateSatisfactionRate() == 100,\r\n            yellow: calculateSatisfactionRate() < 100,\r\n            red: calculateSatisfactionRate() < 40\r\n          }"\r\n          [value]="calculateSatisfactionRate()"\r\n        ></p-progressBar>\r\n      </div>\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row" style="font-size: 1rem; font-weight: bold;">\r\n        {{ getComponentName() + ".intro" | translate }}\r\n      </div>\r\n\r\n      <div class="row">\r\n        <span>{{ getComponentName() + ".sameSite" | translate }}</span>\r\n        <div class="criteria-value ok" *ngIf="sameSite">{{ "yes" | translate }}</div>\r\n        <div class="criteria-value nok" *ngIf="!sameSite">{{ "no" | translate }}</div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <span>{{ getComponentName() + ".bookingStatus" | translate }}</span>\r\n        <div class="criteria-value ok" *ngIf="bookingStatus">{{ "yes" | translate }}</div>\r\n        <div class="criteria-value nok" *ngIf="!bookingStatus">{{ "no" | translate }}</div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <span>{{ getComponentName() + ".availableAtDate" | translate }}</span>\r\n        <div class="criteria-value ok" *ngIf="availableAtDate">{{ "yes" | translate }}</div>\r\n        <div class="criteria-value nok" *ngIf="!availableAtDate">{{ "no" | translate }}</div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <span>{{ getComponentName() + ".potential" | translate }}</span>\r\n        <div class="criteria-value ok" *ngIf="potential">{{ "yes" | translate }}</div>\r\n        <div class="criteria-value nok" *ngIf="!potential">{{ "no" | translate }}</div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <span>{{ getComponentName() + ".calendarPotential" | translate }}</span>\r\n        <div class="criteria-value ok" *ngIf="calendarPotential">{{ "yes" | translate }}</div>\r\n        <div class="criteria-value nok" *ngIf="!calendarPotential">{{ "no" | translate }}</div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <span>{{ getComponentName() + ".noUnconfirmedFailure" | translate }}</span>\r\n        <div class="criteria-value ok" *ngIf="noUnconfirmedFailure">{{ "yes" | translate }}</div>\r\n        <div class="criteria-value nok" *ngIf="!noUnconfirmedFailure">{{ "no" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      {{ "global.close" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/material-request-management/form/popups/dialog-satisfaction-rate/dialog-satisfaction-rate.component.scss':
      /*!*****************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-management/form/popups/dialog-satisfaction-rate/dialog-satisfaction-rate.component.scss ***!
  \*****************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .row {\n  margin: 0.5rem 0; }\n\n:host .row > span {\n  min-width: 40em;\n  max-width: 40em;\n  width: 40rem; }\n\n:host .criteria-value {\n  width: 6rem;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center; }\n\n:host .criteria-value.ok {\n    background-color: #4caf50; }\n\n:host .criteria-value.nok {\n    background-color: #f6685e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvbWF0ZXJpYWwtcmVxdWVzdC1tYW5hZ2VtZW50L2Zvcm0vcG9wdXBzL2RpYWxvZy1zYXRpc2ZhY3Rpb24tcmF0ZS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbG9naXN0aWNzXFxtYXRlcmlhbC1yZXF1ZXN0LW1hbmFnZW1lbnRcXGZvcm1cXHBvcHVwc1xcZGlhbG9nLXNhdGlzZmFjdGlvbi1yYXRlXFxkaWFsb2ctc2F0aXNmYWN0aW9uLXJhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbG9naXN0aWNzL21hdGVyaWFsLXJlcXVlc3QtbWFuYWdlbWVudC9mb3JtL3BvcHVwcy9kaWFsb2ctc2F0aXNmYWN0aW9uLXJhdGUvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGdCQUFnQixFQUFBOztBQUZwQjtFQU1JLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQVJoQjtFQVlJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBakIzQjtJQW9CTSx5QkNEZ0IsRUFBQTs7QURuQnRCO0lBd0JNLHlCQ0ZjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9tYXRlcmlhbC1yZXF1ZXN0LW1hbmFnZW1lbnQvZm9ybS9wb3B1cHMvZGlhbG9nLXNhdGlzZmFjdGlvbi1yYXRlL2RpYWxvZy1zYXRpc2ZhY3Rpb24tcmF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuXHJcbjpob3N0IHtcclxuICAucm93IHtcclxuICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgfVxyXG5cclxuICAucm93ID4gc3BhbiB7XHJcbiAgICBtaW4td2lkdGg6IDQwZW07XHJcbiAgICBtYXgtd2lkdGg6IDQwZW07XHJcbiAgICB3aWR0aDogNDByZW07XHJcbiAgfVxyXG5cclxuICAuY3JpdGVyaWEtdmFsdWUge1xyXG4gICAgd2lkdGg6IDZyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAmLm9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLm5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/logistics/material-request-management/form/popups/dialog-satisfaction-rate/dialog-satisfaction-rate.component.ts':
      /*!***************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-management/form/popups/dialog-satisfaction-rate/dialog-satisfaction-rate.component.ts ***!
  \***************************************************************************************************************************************/
      /*! exports provided: DialogSatisfactionRateComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSatisfactionRateComponent',
          function() {
            return DialogSatisfactionRateComponent;
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
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../../shared/utils/number-utils */ './src/app/shared/utils/number-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
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

        var DialogSatisfactionRateComponent = /** @class */ (function(_super) {
          __extends(DialogSatisfactionRateComponent, _super);
          function DialogSatisfactionRateComponent() {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read,
                'DialogSatisfactionRateComponent'
              ) || this;
            _this.candidateAsset = {};
            _this.procurementRequest = {};
            return _this;
          }
          DialogSatisfactionRateComponent.prototype.isAvailableAtDate = function() {
            return !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_5__['ObjectUtils'].isDefined(
              this.candidateAsset.plannedAvailabilityDate
            );
          };
          DialogSatisfactionRateComponent.prototype.calculateSatisfactionRate = function() {
            var rates = [];
            var rate = function(value) {
              rates.push(value ? 1 : 0);
            };
            // Availability at date
            this.availableAtDate = this.isAvailableAtDate();
            rate(this.availableAtDate);
            // Not booked by another procurement request
            this.bookingStatus =
              !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_5__['ObjectUtils'].isDefined(
                this.candidateAsset.bookingProcurementRequest
              ) || this.candidateAsset.bookingProcurementRequest.id === this.procurementRequest.id;
            rate(this.bookingStatus);
            // Potential
            this.potential =
              !this.procurementRequest.requestedPotential ||
              (!!this.candidateAsset.potentialValue &&
                _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_4__['NumberUtils'].fromString(
                  this.candidateAsset.potentialValue
                ) >=
                  _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_4__['NumberUtils'].fromString(
                    this.procurementRequest.requestedPotential
                  ));
            rate(this.potential);
            // Same site
            this.sameSite =
              !!this.candidateAsset.siteReceipt &&
              !!this.procurementRequest.bidtSiteReceipt &&
              this.candidateAsset.siteReceipt.siteId === this.procurementRequest.bidtSiteReceipt.siteId;
            rate(this.sameSite);
            // No Unconfirmed Failure
            this.noUnconfirmedFailure = !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_5__[
              'ObjectUtils'
            ].isDefined(this.candidateAsset.unconfirmedFailure);
            rate(this.noUnconfirmedFailure);
            // Calendar potential
            if (!this.candidateAsset.calendarPotential) {
              this.calendarPotential = true;
            } else {
              this.calendarPotential = moment__WEBPACK_IMPORTED_MODULE_1__(
                this.candidateAsset.calendarPotential
              ).isAfter(
                moment__WEBPACK_IMPORTED_MODULE_1__(
                  this.procurementRequest.calendarPotential || this.procurementRequest.requestedDate
                )
              );
            }
            rate(this.calendarPotential);
            // tslint:disable-next-line:no-magic-numbers
            return _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_4__['NumberUtils'].roundNumber(
              (rates.filter(function(value) {
                return value === 1;
              }).length /
                rates.length) *
                100,
              0
            );
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogSatisfactionRateComponent.prototype,
            'candidateAsset',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogSatisfactionRateComponent.prototype,
            'procurementRequest',
            void 0
          );
          DialogSatisfactionRateComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-satisfaction-rate',
                template: __webpack_require__(
                  /*! ./dialog-satisfaction-rate.component.html */ './src/app/main/logistics/material-request-management/form/popups/dialog-satisfaction-rate/dialog-satisfaction-rate.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-satisfaction-rate.component.scss */ './src/app/main/logistics/material-request-management/form/popups/dialog-satisfaction-rate/dialog-satisfaction-rate.component.scss'
                  ),
                  __webpack_require__(
                    /*! ../../../shared/style.scss */ './src/app/main/logistics/material-request-management/shared/style.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            DialogSatisfactionRateComponent
          );
          return DialogSatisfactionRateComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/material-request-management/material-request-management.module.ts':
      /*!**************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-management/material-request-management.module.ts ***!
  \**************************************************************************************************/
      /*! exports provided: MaterialRequestManagementModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MaterialRequestManagementModule',
          function() {
            return MaterialRequestManagementModule;
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
        /* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! primeng/primeng */ './node_modules/primeng/primeng.js'
        );
        /* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_primeng__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! primeng/progressbar */ './node_modules/primeng/progressbar.js'
        );
        /* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_progressbar__WEBPACK_IMPORTED_MODULE_10__
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! primeng/radiobutton */ './node_modules/primeng/radiobutton.js'
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_12__
        );
        /* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! primeng/splitbutton */ './node_modules/primeng/splitbutton.js'
        );
        /* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_splitbutton__WEBPACK_IMPORTED_MODULE_13__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_14__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__
        );
        /* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! primeng/tristatecheckbox */ './node_modules/primeng/tristatecheckbox.js'
        );
        /* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_16__
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
        /* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ './src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../shared/services/file.service */ './src/app/shared/services/file.service.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _procurement_request_search_procurement_request_search_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../procurement-request/search/procurement-request-search.service */ './src/app/main/logistics/procurement-request/search/procurement-request-search.service.ts'
        );
        /* harmony import */ var _transfer_order_search_transfer_order_popup_transfer_order_popup_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../transfer-order/search/transfer-order-popup/transfer-order-popup.module */ './src/app/main/logistics/transfer-order/search/transfer-order-popup/transfer-order-popup.module.ts'
        );
        /* harmony import */ var _transfer_order_shared_transfer_order_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../transfer-order/shared/transfer-order-service */ './src/app/main/logistics/transfer-order/shared/transfer-order-service.ts'
        );
        /* harmony import */ var _form_material_request_management_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./form/material-request-management-form.component */ './src/app/main/logistics/material-request-management/form/material-request-management-form.component.ts'
        );
        /* harmony import */ var _form_material_request_management_form_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ./form/material-request-management-form.service */ './src/app/main/logistics/material-request-management/form/material-request-management-form.service.ts'
        );
        /* harmony import */ var _form_popups_change_customer_popup_form_change_customer_popup_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ./form/popups/change-customer-popup-form/change-customer-popup-form.component */ './src/app/main/logistics/material-request-management/form/popups/change-customer-popup-form/change-customer-popup-form.component.ts'
        );
        /* harmony import */ var _form_popups_change_warehouse_and_quantity_popup_form_change_warehouse_and_quantity_popup_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ./form/popups/change-warehouse-and-quantity-popup-form/change-warehouse-and-quantity-popup-form.component */ './src/app/main/logistics/material-request-management/form/popups/change-warehouse-and-quantity-popup-form/change-warehouse-and-quantity-popup-form.component.ts'
        );
        /* harmony import */ var _form_popups_dialog_satisfaction_rate_dialog_satisfaction_rate_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ./form/popups/dialog-satisfaction-rate/dialog-satisfaction-rate.component */ './src/app/main/logistics/material-request-management/form/popups/dialog-satisfaction-rate/dialog-satisfaction-rate.component.ts'
        );
        /* harmony import */ var _search_material_request_management_search_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ./search/material-request-management-search.component */ './src/app/main/logistics/material-request-management/search/material-request-management-search.component.ts'
        );
        /* harmony import */ var _search_material_request_management_search_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./search/material-request-management-search.service */ './src/app/main/logistics/material-request-management/search/material-request-management-search.service.ts'
        );
        /* harmony import */ var _shared_popups_dialog_image_dialog_image_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ./shared/popups/dialog-image/dialog-image.component */ './src/app/main/logistics/material-request-management/shared/popups/dialog-image/dialog-image.component.ts'
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
          primeng_primeng__WEBPACK_IMPORTED_MODULE_9__['InputSwitchModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_14__['TableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__['TooltipModule'],
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__['KeyFilterModule'],
          primeng_message__WEBPACK_IMPORTED_MODULE_7__['MessageModule'],
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__['OverlayPanelModule'],
          primeng_progressbar__WEBPACK_IMPORTED_MODULE_10__['ProgressBarModule'],
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__['RadioButtonModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_12__['SelectButtonModule'],
          primeng_splitbutton__WEBPACK_IMPORTED_MODULE_13__['SplitButtonModule'],
          primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_16__['TriStateCheckboxModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_21__['ModalModule'],
          _transfer_order_search_transfer_order_popup_transfer_order_popup_module__WEBPACK_IMPORTED_MODULE_25__[
            'TransferOrderPopupModule'
          ]
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _shared_popups_dialog_image_dialog_image_component__WEBPACK_IMPORTED_MODULE_34__['DialogImageComponent'],
          _form_popups_change_customer_popup_form_change_customer_popup_form_component__WEBPACK_IMPORTED_MODULE_29__[
            'ChangeCustomerPopupFormComponent'
          ],
          _form_popups_change_warehouse_and_quantity_popup_form_change_warehouse_and_quantity_popup_form_component__WEBPACK_IMPORTED_MODULE_30__[
            'ChangeWarehouseAndQuantityPopupFormComponent'
          ],
          _form_popups_dialog_satisfaction_rate_dialog_satisfaction_rate_component__WEBPACK_IMPORTED_MODULE_31__[
            'DialogSatisfactionRateComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [
          _search_material_request_management_search_component__WEBPACK_IMPORTED_MODULE_32__[
            'MaterialRequestManagementSearchComponent'
          ],
          _form_material_request_management_form_component__WEBPACK_IMPORTED_MODULE_27__[
            'MaterialRequestManagementFormComponent'
          ]
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _search_material_request_management_search_service__WEBPACK_IMPORTED_MODULE_33__[
            'MaterialRequestManagementSearchService'
          ],
          _form_material_request_management_form_service__WEBPACK_IMPORTED_MODULE_28__[
            'MaterialRequestManagementFormService'
          ],
          _shared_services_file_service__WEBPACK_IMPORTED_MODULE_22__['FileService'],
          _procurement_request_search_procurement_request_search_service__WEBPACK_IMPORTED_MODULE_24__[
            'ProcurementRequestSearchService'
          ],
          _transfer_order_shared_transfer_order_service__WEBPACK_IMPORTED_MODULE_26__['TransferOrderService']
        ];
        var MaterialRequestManagementModule = /** @class */ (function() {
          function MaterialRequestManagementModule() {}
          MaterialRequestManagementModule = __decorate(
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
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_23__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS),
                    _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_20__[
                      'ManageSearchCriteriaModule'
                    ]
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            MaterialRequestManagementModule
          );
          return MaterialRequestManagementModule;
        })();

        /***/
      },

    /***/ './src/app/main/logistics/material-request-management/search/material-request-management-search.component.html':
      /*!*********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-management/search/material-request-management-search.component.html ***!
  \*********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle">\r\n        {{ "page.searchPage" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-primary-actions">\r\n    <button type="button" mat-raised-button (click)="openNewMaterialRequestSearch()">\r\n      {{ componentData.componentId + ".newSearch" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row" *ngIf="showSearchPanel">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row search-criteria-header">\r\n                  <aw-manage-search-criteria\r\n                    [componentId]="SEARCH_CRITERIA_ID"\r\n                    (onSelected)="loadSearchCriteria($event)"\r\n                    (onSavedAsked)="saveSearchCriteriaAsked()"\r\n                    [objectFromPage]="criteriaToSave"\r\n                    [canChange]="!hasBeenCalculated"\r\n                  ></aw-manage-search-criteria>\r\n                </div>\r\n                <div class="row">\r\n                  <div class="grid-cell--12">\r\n                    <div class="grid-cell-content grid-cell-content-with-section">\r\n                      <div class="section">\r\n                        <h4 class="section-title">\r\n                          {{ componentData.componentId + ".supplier" | translate }}\r\n                        </h4>\r\n                        <div class="section-content">\r\n                          <div class="row">\r\n                            <div class="form-group required">\r\n                              <label class="form-label">\r\n                                {{ componentData.componentId + ".site" | translate }}\r\n                              </label>\r\n                              <div class="form-control">\r\n                                <p-dropdown\r\n                                  class="aw-dropdown fixed-width"\r\n                                  [options]="materialRequestSites"\r\n                                  [showClear]="true"\r\n                                  placeholder="&nbsp;"\r\n                                  [(ngModel)]="searchObject.siteId"\r\n                                  (onChange)="loadWarehouses()"\r\n                                ></p-dropdown>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class="form-group required">\r\n                              <label class="form-label">\r\n                                {{ componentData.componentId + ".warehouseWorkCenter" | translate }}\r\n                              </label>\r\n                              <div class="form-control">\r\n                                <p-dropdown\r\n                                  class="aw-dropdown fixed-width"\r\n                                  [options]="materialRequestWorkCenters"\r\n                                  [showClear]="true"\r\n                                  placeholder="&nbsp;"\r\n                                  [(ngModel)]="searchObject.warehouseId"\r\n                                >\r\n                                </p-dropdown>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class="form-group required">\r\n                              <label class="form-label">\r\n                                {{ componentData.componentId + ".partner" | translate }}\r\n                              </label>\r\n                              <div class="form-control">\r\n                                <p-dropdown\r\n                                  class="aw-dropdown fixed-width"\r\n                                  [options]="materialRequestPartners"\r\n                                  [showClear]="true"\r\n                                  placeholder="&nbsp;"\r\n                                  [(ngModel)]="searchObject.partnerId"\r\n                                >\r\n                                </p-dropdown>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="section">\r\n                        <h4 class="section-title">\r\n                          {{ componentData.componentId + ".criticity" | translate }}\r\n                        </h4>\r\n                        <div class="section-content">\r\n                          <div class="row">\r\n                            <div class="form-group">\r\n                              <div class="form-control">\r\n                                <p-selectButton\r\n                                  [options]="materialRequestSelectItemList"\r\n                                  [(ngModel)]="searchObject.criticity"\r\n                                ></p-selectButton>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class="form-group">\r\n                              <label class="form-label">\r\n                                {{ componentData.componentId + ".desiredDate" | translate }}\r\n                              </label>\r\n                              <div class="form-control">\r\n                                <p-calendar\r\n                                  showButtonBar="true"\r\n                                  [monthNavigator]="true"\r\n                                  [yearNavigator]="true"\r\n                                  [yearRange]="sessionService.calendarYearRange"\r\n                                  class="aw-calendar"\r\n                                  [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                                  [locale]="sessionService.calendarFormat"\r\n                                  [readonlyInput]="true"\r\n                                  [(ngModel)]="searchObject.desiredDate"\r\n                                >\r\n                                </p-calendar>\r\n                              </div>\r\n                            </div>\r\n                            <div class="form-group"></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <button\r\n                      type="button"\r\n                      mat-raised-button\r\n                      (click)="search()"\r\n                      color="primary"\r\n                      appKeyPress\r\n                      [keyCode]="\'Enter\'"\r\n                      (keyPress)="search()"\r\n                    >\r\n                      {{ "global.toSearch" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ componentData.componentId + ".materialRequest" | translate }} ({{\r\n                    materialRequestTable ? materialRequestTable.length : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                [resizableColumns]="true"\r\n                #ptableResults\r\n                class="aw-table2"\r\n                [columns]="materialRequestTableCols"\r\n                [value]="materialRequestTable"\r\n                [(selection)]="selectedMaterialRequests"\r\n                [scrollable]="true"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n                  <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header">\r\n                    <div class="aw-table-icon-actions" style="margin-left: 0px;">\r\n                      <i\r\n                        class="fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n                        aria-hidden="true"\r\n                        pTooltip="{{\r\n                          getComponentName() + (filtersVisible ? \'.hideFilters\' : \'.showFilters\') | translate\r\n                        }}"\r\n                        tooltipPosition="top"\r\n                        [ngClass]="{ active: filtersVisible }"\r\n                        (click)="opFilters.toggle($event)"\r\n                      ></i>\r\n                    </div>\r\n                    <div class="aw-table-global-filter">\r\n                      <label class="aw-table-global-filter-label">\r\n                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableResultsGlobalFilter\r\n                        class="aw-table-global-filter-input"\r\n                        type="text"\r\n                        placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                        (input)="ptableResults.filterGlobal($event.target.value, \'contains\')"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                    <col [ngStyle]="{ width: \'10%\' }" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ componentData.componentId + "." + col.field | translate }}\r\n                    </th>\r\n                    <th></th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      <div *ngSwitchCase="\'illustration\'" class="flex--1 item-structure-node-image">\r\n                        <img [src]="rowData[col.field]" class="img-dimension" />\r\n                      </div>\r\n                      <div *ngSwitchCase="\'references\'">\r\n                        <div class="row">\r\n                          <div class="flex--2 font-bold">\r\n                            <a>{{ rowData["sn"] }}</a>\r\n                          </div>\r\n                        </div>\r\n                        <div class="row">\r\n                          <div class="flex--2">{{ componentData.componentId + ".createdBy" | translate }}</div>\r\n                          <div class="flex--2">\r\n                            <a>{{ rowData["createdBy"] }}</a>\r\n                          </div>\r\n                        </div>\r\n                        <div class="row">\r\n                          <div class="flex--2">{{ componentData.componentId + ".createdOn" | translate }}</div>\r\n                          <div class="flex--2 font-bold">{{ rowData["createdOn"] }}</div>\r\n                        </div>\r\n                        <div class="row">\r\n                          <div class="flex--2">{{ componentData.componentId + ".origin" | translate }}</div>\r\n                          <div class="flex--2 font-bold">{{ rowData["origin"] }}</div>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngSwitchCase="\'item\'">\r\n                        <div class="row">\r\n                          <div class="flex--2">{{ componentData.componentId + ".pn" | translate }}</div>\r\n                          <div class="flex--2 font-bold">\r\n                            <a>{{ rowData["pn"] }}</a>\r\n                          </div>\r\n                        </div>\r\n                        <div class="row">\r\n                          <div class="flex--2">{{ rowData["designation"] }}</div>\r\n                        </div>\r\n                        <div class="row">\r\n                          <div class="flex--2">{{ componentData.componentId + ".quantity" | translate }}</div>\r\n                          <div class="flex--2 font-bold">{{ rowData["quantity"] }}</div>\r\n                        </div>\r\n                        <div class="row">\r\n                          <div class="flex--2">{{ componentData.componentId + ".desiredPotential" | translate }}</div>\r\n                          <div class="flex--2 font-bold">\r\n                            {{ rowData["desiredPotential"] + " " + rowData["potentialUnit"] }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngSwitchCase="\'recepient\'">\r\n                        <div class="row">\r\n                          <div class="flex--2">{{ componentData.componentId + ".site" | translate }}</div>\r\n                          <div class="flex--2 font-bold">{{ rowData["site"] }}</div>\r\n                        </div>\r\n                        <div class="row">\r\n                          <div class="flex--2">{{ componentData.componentId + ".warehouse" | translate }}</div>\r\n                          <div class="flex--2 font-bold">{{ rowData["warehouse"] }}</div>\r\n                        </div>\r\n                        <div class="row">\r\n                          <div class="flex--2">{{ componentData.componentId + ".desiredOn" | translate }}</div>\r\n                          <div class="flex--2 font-bold">{{ rowData["desiredOn"] }}</div>\r\n                        </div>\r\n                        <div class="row">\r\n                          <div class="flex--2">{{ componentData.componentId + ".criticity" | translate }}</div>\r\n                          <div class="flex--2">\r\n                            <span style="text-align: center;">\r\n                              <span *ngIf="rowData[\'criticity\'] === \'green\'" class="ok">\r\n                                {{ componentData.componentId + ".routine" | translate }}\r\n                              </span>\r\n\r\n                              <span *ngIf="rowData[\'criticity\'] === \'red\'" class="nok">\r\n                                {{ componentData.componentId + ".immediate" | translate }}\r\n                              </span>\r\n\r\n                              <span *ngIf="rowData[\'criticity\'] === \'yellow\'" class="warning">\r\n                                {{ componentData.componentId + ".urgent" | translate }}\r\n                              </span>\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngSwitchCase="\'situation\'">\r\n                        <div class="row">\r\n                          <div class="flex--2">{{ componentData.componentId + ".status" | translate }}</div>\r\n                          <div class="flex--2 font-bold">{{ rowData["status"] }}</div>\r\n                        </div>\r\n                        <div class="row">\r\n                          <div class="flex--2">{{ componentData.componentId + ".progress" | translate }}</div>\r\n                          <div class="flex--2 font-bold">{{ rowData["progress"] }}</div>\r\n                        </div>\r\n                        <div class="row">\r\n                          <div class="flex--2">{{ componentData.componentId + ".served" | translate }}</div>\r\n                          <div class="flex--2 font-bold">{{ rowData["served"] }}</div>\r\n                        </div>\r\n                        <div class="row">\r\n                          <div class="flex--2">{{ componentData.componentId + ".booked" | translate }}</div>\r\n                          <div class="flex--2 font-bold">{{ rowData["booked"] }}</div>\r\n                        </div>\r\n                        <div class="row">\r\n                          <div class="flex--2">{{ componentData.componentId + ".notBooked" | translate }}</div>\r\n                          <div class="flex--2 font-bold">{{ rowData["notBooked"] }}</div>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngSwitchDefault>{{ rowData[col.field] }}</div>\r\n                    </td>\r\n                    <td>\r\n                      <button type="button" mat-raised-button (click)="manageMaterialRequest(rowData)">\r\n                        {{ componentData.componentId + ".manage" | translate }}\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <p-overlayPanel #opFilters class="aw-overlay" (onShow)="filtersVisible = true" (onHide)="filtersVisible = false">\r\n    <div class="row">\r\n      <div class="form-group flex--1">\r\n        <div class="form-control">\r\n          <label class="form-label"> {{ getComponentName() + ".criticity" | translate }} </label>\r\n        </div>\r\n      </div>\r\n      <div class="form-group flex--2">\r\n        <div class="form-control">\r\n          <p-selectButton\r\n            [options]="filterCriticityList"\r\n            multiple="multiple"\r\n            [(ngModel)]="searchFilterObject.criticity"\r\n          >\r\n          </p-selectButton>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="row">\r\n      <div class="form-group flex--1">\r\n        <div class="form-control">\r\n          <label class="form-label"> {{ getComponentName() + ".status" | translate }} </label>\r\n        </div>\r\n      </div>\r\n      <div class="form-group flex--2">\r\n        <div class="form-control">\r\n          <p-selectButton [options]="filterStatusList" multiple="multiple" [(ngModel)]="searchFilterObject.status">\r\n          </p-selectButton>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group flex--1">\r\n        <div class="form-control">\r\n          <label class="form-label"> {{ getComponentName() + ".progress" | translate }} </label>\r\n        </div>\r\n      </div>\r\n      <div class="form-group flex--2">\r\n        <div class="form-control">\r\n          <p-selectButton [options]="filterProgressList" multiple="multiple" [(ngModel)]="searchFilterObject.progress">\r\n          </p-selectButton>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group flex--1">\r\n        <div class="form-control">\r\n          <label class="form-label"> {{ getComponentName() + ".origin" | translate }} </label>\r\n        </div>\r\n      </div>\r\n      <div class="form-group flex--2">\r\n        <div class="form-control">\r\n          <p-selectButton [options]="filterOriginList" multiple="multiple" [(ngModel)]="searchFilterObject.origin">\r\n          </p-selectButton>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group flex--1">\r\n        <label class="form-label"> {{ getComponentName() + ".desiredDate" | translate }} </label>\r\n      </div>\r\n\r\n      <div class="form-group  flex--1">\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            [options]="filterDesiredDateOptions"\r\n            [showClear]="true"\r\n            placeholder="&nbsp;"\r\n            [(ngModel)]="searchFilterObject.desiredOption"\r\n          >\r\n          </p-dropdown>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group  flex--1">\r\n        <div class="form-control">\r\n          <p-calendar\r\n            showButtonBar="true"\r\n            [monthNavigator]="true"\r\n            [yearNavigator]="true"\r\n            [yearRange]="sessionService.calendarYearRange"\r\n            class="aw-calendar"\r\n            [dateFormat]="sessionService.dateFormatPrimeNG"\r\n            [locale]="sessionService.calendarFormat"\r\n            [(ngModel)]="searchFilterObject.desiredDate"\r\n          ></p-calendar>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row action-list">\r\n      <button type="button" mat-raised-button (click)="resetFilters()">\r\n        {{ "global.reset" | translate }}\r\n      </button>\r\n\r\n      <button type="button" mat-raised-button (click)="filterSearchResult()">\r\n        {{ "global.filter" | translate }}\r\n      </button>\r\n    </div>\r\n  </p-overlayPanel>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/material-request-management/search/material-request-management-search.component.ts':
      /*!*******************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-management/search/material-request-management-search.component.ts ***!
  \*******************************************************************************************************************/
      /*! exports provided: MaterialRequestManagementSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MaterialRequestManagementSearchComponent',
          function() {
            return MaterialRequestManagementSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _material_request_management_search_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./material-request-management-search.service */ './src/app/main/logistics/material-request-management/search/material-request-management-search.service.ts'
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

        var MaterialRequestManagementSearchComponent = /** @class */ (function(_super) {
          __extends(MaterialRequestManagementSearchComponent, _super);
          /* ***************************************************************************/
          function MaterialRequestManagementSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            dateService,
            translateService,
            materialRequestManagementSearchService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.sessionService = sessionService;
            _this.dateService = dateService;
            _this.translateService = translateService;
            _this.materialRequestManagementSearchService = materialRequestManagementSearchService;
            _this.SEARCH_CRITERIA_ID =
              _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__[
                'AppConstants'
              ].GOODS_MOVEMENT_SEARCH_CRITERIA_ID;
            _this.componentOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'];
            _this.init();
            _this.initSearchTableCols();
            _this.loadSites();
            _this.loadWarehouses();
            _this.loadPartners();
            _this.loadCriticityList();
            _this.loadFilterLists();
            return _this;
          }
          MaterialRequestManagementSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
              .LOG_MATERIAL_REQUEST_MANAGEMENT_SEARCH;
          };
          MaterialRequestManagementSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
          };
          MaterialRequestManagementSearchComponent.prototype.init = function() {
            this.clearResultTable();
            this.resetSearchCriteria();
            this.materialRequestSites = [];
            this.materialRequestWorkCenters = [];
            this.materialRequestPartners = [];
            this.materialRequestSelectItemList = [];
            this.materialRequestTableCols = [];
            this.showSearchPanel = true;
          };
          MaterialRequestManagementSearchComponent.prototype.initSearchTableCols = function() {
            this.materialRequestTableCols = [
              { field: 'references', alignment: 'left', width: '20%' },
              { field: 'item', alignment: 'left', width: '20%' },
              { field: 'recepient', alignment: 'left', width: '20%' },
              { field: 'situation', alignment: 'left', width: '20%' },
              { field: 'illustration', alignment: 'left', width: '20%' }
            ];
          };
          MaterialRequestManagementSearchComponent.prototype.clearResultTable = function() {
            this.materialRequestTable = [];
            this.selectedMaterialRequests = [];
          };
          MaterialRequestManagementSearchComponent.prototype.resetSearchCriteria = function() {
            this.criteriaName = undefined;
            this.searchObject = { criticity: 'all' };
            this.searchFilterObject = {
              criticity: [],
              origin: [],
              progress: [],
              status: []
            };
          };
          MaterialRequestManagementSearchComponent.prototype.loadSites = function() {
            var _this = this;
            this.materialRequestSites = [];
            this.materialRequestManagementSearchService.findAllSiteList().subscribe({
              next: function(siteList) {
                _this.materialRequestSites = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__['ListUtils']
                  .orEmpty(siteList)
                  .filter(function(site) {
                    return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_14__['ObjectUtils'].isDefined(
                      site.siteId
                    );
                  })
                  .map(function(site) {
                    return {
                      label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__['StringUtils'].isNullOrEmpty(
                        site.siteName
                      )
                        ? site.siteCode
                        : site.siteCode + ' - ' + site.siteName,
                      value: site.siteId
                    };
                  });
              }
            });
          };
          MaterialRequestManagementSearchComponent.prototype.loadWarehouses = function() {
            var _this = this;
            this.materialRequestWorkCenters = [];
            if (this.searchObject && this.searchObject.siteId) {
              this.materialRequestManagementSearchService.findWarehouseListBySite(this.searchObject.siteId).subscribe({
                next: function(results) {
                  _this.populateWarehouseList(results);
                }
              });
            } else {
              this.materialRequestManagementSearchService.findAllWarehouseList().subscribe({
                next: function(results) {
                  _this.populateWarehouseList(results);
                }
              });
            }
          };
          MaterialRequestManagementSearchComponent.prototype.loadPartners = function() {
            this.materialRequestPartners = [];
          };
          MaterialRequestManagementSearchComponent.prototype.loadCriticityList = function() {
            this.materialRequestSelectItemList = [
              { label: '' + this.translateService.instant(this.getTranslateKey('all')), value: 'all' },
              { label: '' + this.translateService.instant(this.getTranslateKey('routine')), value: 'routine' },
              { label: '' + this.translateService.instant(this.getTranslateKey('urgent')), value: 'urgent' },
              { label: '' + this.translateService.instant(this.getTranslateKey('immediate')), value: 'immediate' }
            ];
          };
          MaterialRequestManagementSearchComponent.prototype.loadFilterLists = function() {
            this.filterCriticityList = [
              { label: '' + this.translateService.instant(this.getTranslateKey('routine')), value: 'routine' },
              { label: '' + this.translateService.instant(this.getTranslateKey('urgent')), value: 'urgent' },
              { label: '' + this.translateService.instant(this.getTranslateKey('immediate')), value: 'immediate' }
            ];
            this.filterStatusList = [
              { label: '' + this.translateService.instant(this.getTranslateKey('routine')), value: 'routine' },
              { label: '' + this.translateService.instant(this.getTranslateKey('urgent')), value: 'urgent' },
              { label: '' + this.translateService.instant(this.getTranslateKey('immediate')), value: 'immediate' }
            ];
            this.filterOriginList = [
              { label: '' + this.translateService.instant(this.getTranslateKey('routine')), value: 'routine' },
              { label: '' + this.translateService.instant(this.getTranslateKey('urgent')), value: 'urgent' },
              { label: '' + this.translateService.instant(this.getTranslateKey('immediate')), value: 'immediate' }
            ];
            this.filterProgressList = [
              { label: '' + this.translateService.instant(this.getTranslateKey('routine')), value: 'routine' },
              { label: '' + this.translateService.instant(this.getTranslateKey('urgent')), value: 'urgent' },
              { label: '' + this.translateService.instant(this.getTranslateKey('immediate')), value: 'immediate' }
            ];
            this.filterDesiredDateOptions = [];
          };
          MaterialRequestManagementSearchComponent.prototype.search = function() {
            var _this = this;
            this.materialRequestTable = [];
            this.materialRequestManagementSearchService
              .findMaterialsRequested(this.searchObject)
              .subscribe(function(result) {
                if (result) {
                  _this.materialRequestTable = result.list;
                  _this.showSearchPanel = false;
                }
              });
          };
          MaterialRequestManagementSearchComponent.prototype.manageMaterialRequest = function(rowData) {
            var openMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Write;
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
                  .LOG_MATERIAL_REQUEST_MANAGEMENT_FORM,
              openMode: openMode
            };
            if (!!rowData) {
              data.objectId = this.serializationService.serialize(rowData);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          MaterialRequestManagementSearchComponent.prototype.openNewMaterialRequestSearch = function() {
            var openMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Write;
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
                  .LOG_MATERIAL_REQUEST_MANAGEMENT_SEARCH,
              openMode: openMode
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          MaterialRequestManagementSearchComponent.prototype.populateWarehouseList = function(warehouseList) {
            this.materialRequestWorkCenters = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__['ListUtils']
              .orEmpty(warehouseList)
              .filter(function(warehouse) {
                return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_14__['ObjectUtils'].isDefined(
                  warehouse.whCode
                );
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
          };
          MaterialRequestManagementSearchComponent.prototype.saveSearchCriteriaAsked = function() {
            var criteriaToSave = this.searchObject;
            this.criteriaToSave = criteriaToSave;
          };
          MaterialRequestManagementSearchComponent.prototype.loadSearchCriteria = function(event) {
            var criteria = event.criteria;
            if (!criteria) {
              this.resetSearchCriteria();
              return;
            }
            // do not load criteria first time if we come from another page
            if (!this.componentData.objectId) {
              this.criteriaName = event.name;
              this.searchObject = criteria || {};
            } else {
              this.componentData.objectId = undefined;
            }
            this.search();
          };
          MaterialRequestManagementSearchComponent.prototype.resetFilters = function() {
            //
          };
          MaterialRequestManagementSearchComponent.prototype.filterSearchResult = function() {
            //
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('resultsContainerAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            MaterialRequestManagementSearchComponent.prototype,
            'resultsContainerAnchor',
            void 0
          );
          MaterialRequestManagementSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-material-request-management-search',
                template: __webpack_require__(
                  /*! ./material-request-management-search.component.html */ './src/app/main/logistics/material-request-management/search/material-request-management-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../shared/style.scss */ './src/app/main/logistics/material-request-management/shared/style.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__['SessionService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__['DateService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _material_request_management_search_service__WEBPACK_IMPORTED_MODULE_16__[
                  'MaterialRequestManagementSearchService'
                ]
              ])
            ],
            MaterialRequestManagementSearchComponent
          );
          return MaterialRequestManagementSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_12__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/material-request-management/search/material-request-management-search.service.ts':
      /*!*****************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-management/search/material-request-management-search.service.ts ***!
  \*****************************************************************************************************************/
      /*! exports provided: MaterialRequestManagementSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MaterialRequestManagementSearchService',
          function() {
            return MaterialRequestManagementSearchService;
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
        /* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-site.api */ './src/app/shared/api/bidt-site.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
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

        var MaterialRequestManagementSearchService = /** @class */ (function(_super) {
          __extends(MaterialRequestManagementSearchService, _super);
          function MaterialRequestManagementSearchService(http, appConfigService, bidtWarehouseApi, bidtSiteApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            _this.bidtSiteApi = bidtSiteApi;
            return _this;
          }
          /**************************************************************************
           * Bidt site api
           *************************************************************************/
          MaterialRequestManagementSearchService.prototype.findAllSiteList = function() {
            return _super.prototype.post.call(this, this.bidtSiteApi.findSiteByUseCaseCode);
          };
          MaterialRequestManagementSearchService.prototype.findAllSite = function() {
            return _super.prototype.post.call(this, this.bidtSiteApi.getSites);
          };
          /**************************************************************************
           * Bidt warehouse api
           *************************************************************************/
          MaterialRequestManagementSearchService.prototype.findAllWarehouseList = function() {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findAll);
          };
          MaterialRequestManagementSearchService.prototype.findWarehouseListBySite = function(input) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findBySiteId, input);
          };
          /**************************************************************************
           * search requested material api
           *************************************************************************/
          MaterialRequestManagementSearchService.prototype.findMaterialsRequested = function(input) {
            var simpleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__['Observable'](function(observer) {
              var searchResult = {
                list: [
                  {
                    illustration: 'assets/img/illustration-1.jpg',
                    sn: 'S4000307',
                    createdBy: 'TO201792',
                    createdOn: '27/08/2019',
                    origin: 'Order de Travail',
                    pn: '303-086-103-0',
                    designation: '### DESIGNATION DU P/N ###',
                    quantity: '3',
                    desiredPotential: '450',
                    potentialUnit: 'FH',
                    site: 'Monte-de-Marsan',
                    warehouse: 'Ateller A',
                    desiredOn: '30/08/2019',
                    criticity: 'red',
                    status: 'Lance',
                    progress: 'Servi partiellement',
                    served: '1',
                    booked: '1',
                    notBooked: '1'
                  },
                  {
                    illustration: 'assets/img/illustration-2.jpg',
                    sn: 'S4000992',
                    createdBy: 'TO137901',
                    createdOn: '17/08/2019',
                    origin: 'Order de Travail',
                    pn: '303-722-001-0',
                    designation: '### DESIGNATION DU P/N ###',
                    quantity: '1',
                    desiredPotential: '200',
                    potentialUnit: 'FH',
                    site: 'Toulouse',
                    warehouse: 'DRSU',
                    desiredOn: '14/09/2019',
                    criticity: 'yellow',
                    status: 'Brouillon',
                    progress: 'Non Servi',
                    served: '0',
                    booked: '0',
                    notBooked: '1'
                  },
                  {
                    illustration: 'assets/img/illustration-3.png',
                    sn: 'S4000901',
                    createdBy: 'TO137901',
                    createdOn: '17/08/2019',
                    origin: 'Lot de Deploiement',
                    pn: '70720041-00',
                    designation: 'APU',
                    quantity: '28',
                    desiredPotential: '260',
                    potentialUnit: 'FH',
                    site: 'Monte-de-Marsan',
                    warehouse: 'DRSU',
                    desiredOn: '11/09/2019',
                    criticity: 'green',
                    status: 'Lance',
                    progress: 'Non Servi',
                    served: '0',
                    booked: '6',
                    notBooked: '22'
                  }
                ],
                moreResults: false
              };
              // observable execution
              observer.next(searchResult);
              observer.complete();
            });
            return simpleObservable;
          };
          MaterialRequestManagementSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__['AppConfigService'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_4__['BidtWarehouseApi'],
                _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_3__['BidtSiteApi']
              ])
            ],
            MaterialRequestManagementSearchService
          );
          return MaterialRequestManagementSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/logistics/material-request-management/shared/popups/dialog-image/dialog-image.component.html':
      /*!*******************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-management/shared/popups/dialog-image/dialog-image.component.html ***!
  \*******************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="illustration">\r\n      <img [src]="imgSrc" />\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/material-request-management/shared/popups/dialog-image/dialog-image.component.ts':
      /*!*****************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-management/shared/popups/dialog-image/dialog-image.component.ts ***!
  \*****************************************************************************************************************/
      /*! exports provided: DialogImageComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DialogImageComponent', function() {
          return DialogImageComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
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

        var DialogImageComponent = /** @class */ (function(_super) {
          __extends(DialogImageComponent, _super);
          function DialogImageComponent() {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Read,
                'DialogImageComponent'
              ) || this;
            _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          DialogImageComponent.prototype.ngOnInit = function() {
            this.updateOpenMode(this.openMode);
          };
          DialogImageComponent.prototype.getTypeName = function() {
            return 'DialogImageComponent';
          };
          DialogImageComponent.prototype.cancel = function() {
            this.display = false;
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogImageComponent.prototype,
            'imgSrc',
            void 0
          );
          DialogImageComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-image',
                template: __webpack_require__(
                  /*! ./dialog-image.component.html */ './src/app/main/logistics/material-request-management/shared/popups/dialog-image/dialog-image.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../popup-form.component.scss */ './src/app/main/logistics/material-request-management/shared/popups/popup-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            DialogImageComponent
          );
          return DialogImageComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/material-request-management/shared/popups/popup-form.component.scss':
      /*!****************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-management/shared/popups/popup-form.component.scss ***!
  \****************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .item-textbox {\n  width: 5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvbWF0ZXJpYWwtcmVxdWVzdC1tYW5hZ2VtZW50L3NoYXJlZC9wb3B1cHMvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcbWF0ZXJpYWwtcmVxdWVzdC1tYW5hZ2VtZW50XFxzaGFyZWRcXHBvcHVwc1xccG9wdXAtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL21hdGVyaWFsLXJlcXVlc3QtbWFuYWdlbWVudC9zaGFyZWQvcG9wdXBzL3BvcHVwLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLml0ZW0tdGV4dGJveCB7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/logistics/material-request-management/shared/style.scss':
      /*!******************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-management/shared/style.scss ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .served--nok {\n  background-color: #f6685e !important; }\n\n:host .served--ok {\n  background-color: #4caf50 !important; }\n\n:host .served--warning {\n  background-color: #ffc107 !important; }\n\n:host ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n:host .message {\n  color: #01579b;\n  font-size: 1rem;\n  text-align: center;\n  width: 100%; }\n\n:host .materials {\n  width: 100%; }\n\n:host .warehouse {\n  width: 100%; }\n\n:host .snBatch {\n  width: 100%; }\n\n:host .ok {\n  background-color: #4caf50 !important;\n  padding: 0.2em; }\n\n:host .warning {\n  background-color: #ffc107 !important;\n  padding: 0.2em; }\n\n:host .nok {\n  background-color: #f6685e !important;\n  padding: 0.2em; }\n\n:host .font-ok {\n  color: #4caf50 !important; }\n\n:host .font-warning {\n  color: #ffc107 !important; }\n\n:host .font-nok {\n  color: #f6685e !important; }\n\n:host .font-bold {\n  font-weight: bold; }\n\n:host .font-italic {\n  font-style: italic; }\n\n:host .select-box .arrow::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  margin-top: -1.5em;\n  border-top: 1.5em solid transparent;\n  border-bottom: 1.5em solid transparent;\n  border-left: 0.7em solid #01579b;\n  right: -0.45em; }\n\n:host .breadcrumbs {\n  padding: 0px !important; }\n\n:host .breadcrumbs-container {\n  background-color: transparent !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n  padding: 8px 8px 0px 8px !important; }\n\n:host .breadcrumbs-navigation {\n  overflow: hidden;\n  display: flex; }\n\n:host .breadcrumbs-navigation li {\n  float: left;\n  margin: 0 10px 0 0px; }\n\n:host .breadcrumbs-navigation .current {\n  float: left;\n  margin: 0 25px 0 15px; }\n\n:host .breadcrumbs-navigation .breadcrumbs-labels {\n  background-color: #01579b;\n  padding-right: 0.5rem;\n  float: left;\n  text-decoration: none;\n  position: relative;\n  white-space: nowrap;\n  color: #fff;\n  font-size: 20px;\n  padding-bottom: 6px;\n  padding-top: 7px; }\n\n:host .breadcrumbs-navigation .breadcrumbs-labels .title {\n    font-weight: bold;\n    font-size: 20px; }\n\n:host .breadcrumbs-navigation .breadcrumbs-labels .subtitle {\n    font-weight: initial;\n    font-style: italic;\n    font-size: 15px; }\n\n:host .breadcrumbs-navigation .current .breadcrumbs-labels {\n  background: #01579b; }\n\n:host .breadcrumbs-navigation .current .breadcrumbs-labels .title {\n    font-weight: bold;\n    font-size: 20px; }\n\n:host .breadcrumbs-navigation .current .breadcrumbs-labels .subtitle {\n    font-weight: initial;\n    font-style: italic;\n    font-size: 15px; }\n\n:host .breadcrumbs-navigation .breadcrumbs-labels::before {\n  content: "";\n  position: absolute;\n  top: 49%;\n  margin-top: -1.5em;\n  border-width: 1.5em 0 1.6em 1em;\n  border-style: solid;\n  border-color: #ddd #ddd #ddd #ddd;\n  left: -1em; }\n\n:host .breadcrumbs-navigation .current .breadcrumbs-labels::before {\n  border-color: #01579b #01579b #01579b #01579b; }\n\n:host .breadcrumbs-navigation .breadcrumbs-labels::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  margin-top: -1.5em;\n  border-top: 1.5em solid transparent;\n  border-bottom: 1.5em solid transparent;\n  border-left: 1em solid #01579b;\n  right: -1em; }\n\n:host .breadcrumbs-navigation .current .breadcrumbs-labels::after {\n  border-left-color: #01579b; }\n\n:host .breadcrumbs-navigation .current .breadcrumbs-labels {\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  padding-bottom: 6px;\n  padding-top: 7px; }\n\n:host .breadcrumbs-navigation .current::after,\n:host .breadcrumbs-navigation .current::before {\n  content: normal; }\n\n:host .section-without-margin {\n  margin-left: 0px !important;\n  margin-bottom: 1rem !important; }\n\n:host .col-width-20 {\n  width: 20% !important; }\n\n:host ::ng-deep .red .ui-progressbar .ui-progressbar-value {\n  border: 0 none;\n  margin: 0;\n  background: #f6685e !important; }\n\n:host ::ng-deep .yellow .ui-progressbar .ui-progressbar-value {\n  border: 0 none;\n  margin: 0;\n  background: #ffc107 !important; }\n\n:host ::ng-deep .green .ui-progressbar .ui-progressbar-value {\n  border: 0 none;\n  margin: 0;\n  background: #4caf50 !important; }\n\n:host span.green {\n  color: #4caf50 !important; }\n\n:host span.red {\n  color: #f6685e !important; }\n\n:host span.yellow {\n  color: #ffc107 !important; }\n\n:host .img-dimension {\n  height: 10rem; }\n\n:host .central-right-part {\n  display: block !important;\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvbWF0ZXJpYWwtcmVxdWVzdC1tYW5hZ2VtZW50L3NoYXJlZC9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbG9naXN0aWNzXFxtYXRlcmlhbC1yZXF1ZXN0LW1hbmFnZW1lbnRcXHNoYXJlZFxcc3R5bGUuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvbWF0ZXJpYWwtcmVxdWVzdC1tYW5hZ2VtZW50L3NoYXJlZC9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUksb0NBQXdDLEVBQUE7O0FBRjVDO0VBTUksb0NBQTBDLEVBQUE7O0FBTjlDO0VBVUksb0NBQW9DLEVBQUE7O0FBVnhDO0VBY0ksU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFoQnBCO0VBb0JJLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUF2QmY7RUEyQkksV0FBVyxFQUFBOztBQTNCZjtFQStCSSxXQUFXLEVBQUE7O0FBL0JmO0VBbUNJLFdBQVcsRUFBQTs7QUFuQ2Y7RUF1Q0ksb0NBQTBDO0VBQzFDLGNBQWMsRUFBQTs7QUF4Q2xCO0VBNENJLG9DQUFvQztFQUNwQyxjQUFjLEVBQUE7O0FBN0NsQjtFQWlESSxvQ0FBd0M7RUFDeEMsY0FBYyxFQUFBOztBQWxEbEI7RUFzREkseUJBQStCLEVBQUE7O0FBdERuQztFQTBESSx5QkFBeUIsRUFBQTs7QUExRDdCO0VBOERJLHlCQUE2QixFQUFBOztBQTlEakM7RUFrRUksaUJBQWlCLEVBQUE7O0FBbEVyQjtFQXNFSSxrQkFBa0IsRUFBQTs7QUF0RXRCO0VBMEVJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLGdDQUFnQztFQUNoQyxjQUFjLEVBQUE7O0FBakZsQjtFQXFGSSx1QkFBdUIsRUFBQTs7QUFyRjNCO0VBeUZJLHdDQUF3QztFQUN4QyxvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLG1DQUFtQyxFQUFBOztBQTVGdkM7RUFnR0ksZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTs7QUFqR2pCO0VBcUdJLFdBQVc7RUFDWCxvQkFBb0IsRUFBQTs7QUF0R3hCO0VBMEdJLFdBQVc7RUFDWCxxQkFBcUIsRUFBQTs7QUEzR3pCO0VBK0dJLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQXhIcEI7SUEySE0saUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTs7QUE1SHJCO0lBZ0lNLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZUFBZSxFQUFBOztBQWxJckI7RUF1SUksbUJDdElrQixFQUFBOztBRER0QjtJQXlJTSxpQkFBaUI7SUFDakIsZUFBZSxFQUFBOztBQTFJckI7SUE4SU0sb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7O0FBaEpyQjtFQXFKSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsVUFBVSxFQUFBOztBQTVKZDtFQWdLSSw2Q0MvSmtCLEVBQUE7O0FERHRCO0VBcUtJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDhCQUE4QjtFQUM5QixXQUFXLEVBQUE7O0FBNUtmO0VBZ0xJLDBCQy9La0IsRUFBQTs7QUREdEI7RUFvTEksWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQXhMcEI7O0VBNkxJLGVBQWUsRUFBQTs7QUE3TG5CO0VBaU1JLDJCQUEyQjtFQUMzQiw4QkFBOEIsRUFBQTs7QUFsTWxDO0VBc01JLHFCQUFxQixFQUFBOztBQXRNekI7RUE0TVEsY0FBYztFQUNkLFNBQVM7RUFDVCw4QkFBa0MsRUFBQTs7QUE5TTFDO0VBc05RLGNBQWM7RUFDZCxTQUFTO0VBQ1QsOEJBQThCLEVBQUE7O0FBeE50QztFQWdPUSxjQUFjO0VBQ2QsU0FBUztFQUNULDhCQUFvQyxFQUFBOztBQWxPNUM7RUF5T00seUJBQStCLEVBQUE7O0FBek9yQztFQTZPTSx5QkFBNkIsRUFBQTs7QUE3T25DO0VBaVBNLHlCQUF5QixFQUFBOztBQWpQL0I7RUFzUEksYUFBYSxFQUFBOztBQXRQakI7RUEwUEkseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvbWF0ZXJpYWwtcmVxdWVzdC1tYW5hZ2VtZW50L3NoYXJlZC9zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLnNlcnZlZC0tbm9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc2VydmVkLS1vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc2VydmVkLS13YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm1lc3NhZ2Uge1xyXG4gICAgY29sb3I6ICMwMTU3OWI7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tYXRlcmlhbHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAud2FyZWhvdXNlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnNuQmF0Y2gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAub2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMC4yZW07XHJcbiAgfVxyXG5cclxuICAud2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwLjJlbTtcclxuICB9XHJcblxyXG4gIC5ub2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDEgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4gIH1cclxuXHJcbiAgLmZvbnQtb2sge1xyXG4gICAgY29sb3I6ICRncmVlbi1saWdodDEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5mb250LXdhcm5pbmcge1xyXG4gICAgY29sb3I6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5mb250LW5vayB7XHJcbiAgICBjb2xvcjogJHJlZC1saWdodDEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5mb250LWJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAuZm9udC1pdGFsaWMge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdC1ib3ggLmFycm93OjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMS41ZW07XHJcbiAgICBib3JkZXItdG9wOiAxLjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDEuNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDAuN2VtIHNvbGlkICMwMTU3OWI7XHJcbiAgICByaWdodDogLTAuNDVlbTtcclxuICB9XHJcblxyXG4gIC5icmVhZGNydW1icyB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5icmVhZGNydW1icy1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDhweCA4cHggMHB4IDhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJyZWFkY3J1bWJzLW5hdmlnYXRpb24ge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAuYnJlYWRjcnVtYnMtbmF2aWdhdGlvbiBsaSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMCAxMHB4IDAgMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJyZWFkY3J1bWJzLW5hdmlnYXRpb24gLmN1cnJlbnQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDAgMjVweCAwIDE1cHg7XHJcbiAgfVxyXG5cclxuICAuYnJlYWRjcnVtYnMtbmF2aWdhdGlvbiAuYnJlYWRjcnVtYnMtbGFiZWxzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTU3OWI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YnRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJyZWFkY3J1bWJzLW5hdmlnYXRpb24gLmN1cnJlbnQgLmJyZWFkY3J1bWJzLWxhYmVscyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3VidGl0bGUge1xyXG4gICAgICBmb250LXdlaWdodDogaW5pdGlhbDtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGFycm93XHJcbiAgLmJyZWFkY3J1bWJzLW5hdmlnYXRpb24gLmJyZWFkY3J1bWJzLWxhYmVsczo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQ5JTtcclxuICAgIG1hcmdpbi10b3A6IC0xLjVlbTtcclxuICAgIGJvcmRlci13aWR0aDogMS41ZW0gMCAxLjZlbSAxZW07XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkICNkZGQgI2RkZCAjZGRkO1xyXG4gICAgbGVmdDogLTFlbTtcclxuICB9XHJcblxyXG4gIC5icmVhZGNydW1icy1uYXZpZ2F0aW9uIC5jdXJyZW50IC5icmVhZGNydW1icy1sYWJlbHM6OmJlZm9yZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRhY2NlbnQtY29sb3IgJGFjY2VudC1jb2xvciAkYWNjZW50LWNvbG9yICRhY2NlbnQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAvL2Fycm93XHJcbiAgLmJyZWFkY3J1bWJzLW5hdmlnYXRpb24gLmJyZWFkY3J1bWJzLWxhYmVsczo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEuNWVtO1xyXG4gICAgYm9yZGVyLXRvcDogMS41ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxLjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAxZW0gc29saWQgIzAxNTc5YjtcclxuICAgIHJpZ2h0OiAtMWVtO1xyXG4gIH1cclxuXHJcbiAgLmJyZWFkY3J1bWJzLW5hdmlnYXRpb24gLmN1cnJlbnQgLmJyZWFkY3J1bWJzLWxhYmVsczo6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAuYnJlYWRjcnVtYnMtbmF2aWdhdGlvbiAuY3VycmVudCAuYnJlYWRjcnVtYnMtbGFiZWxzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgfVxyXG5cclxuICAuYnJlYWRjcnVtYnMtbmF2aWdhdGlvbiAuY3VycmVudDo6YWZ0ZXIsXHJcbiAgLmJyZWFkY3J1bWJzLW5hdmlnYXRpb24gLmN1cnJlbnQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi13aXRob3V0LW1hcmdpbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29sLXdpZHRoLTIwIHtcclxuICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAucmVkIHtcclxuICAgIC51aS1wcm9ncmVzc2JhciB7XHJcbiAgICAgIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcbiAgICAgICAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAueWVsbG93IHtcclxuICAgIC51aS1wcm9ncmVzc2JhciB7XHJcbiAgICAgIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcbiAgICAgICAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5ncmVlbiB7XHJcbiAgICAudWktcHJvZ3Jlc3NiYXIge1xyXG4gICAgICAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgICAgIGJvcmRlcjogMCBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgJi5ncmVlbiB7XHJcbiAgICAgIGNvbG9yOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZWQge1xyXG4gICAgICBjb2xvcjogJHJlZC1saWdodDEgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmLnllbGxvdyB7XHJcbiAgICAgIGNvbG9yOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW1nLWRpbWVuc2lvbiB7XHJcbiAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNlbnRyYWwtcmlnaHQtcGFydCB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iXX0= */';

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

    /***/ './src/app/shared/services/file.service.ts':
      /*!*************************************************!*\
  !*** ./src/app/shared/services/file.service.ts ***!
  \*************************************************/
      /*! exports provided: FileService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'FileService', function() {
          return FileService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/platform-browser */ './node_modules/@angular/platform-browser/fesm5/platform-browser.js'
        );
        /* harmony import */ var _api_document_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../api/document.api */ './src/app/shared/api/document.api.ts'
        );
        /* harmony import */ var _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _utils_image_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../utils/image-utils */ './src/app/shared/utils/image-utils.ts'
        );
        /* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./app-config.service */ './src/app/shared/services/app-config.service.ts'
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

        var FileService = /** @class */ (function(_super) {
          __extends(FileService, _super);
          function FileService(http, appConfigService, domSanitizer, productStructureManagementApi, documentApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.domSanitizer = domSanitizer;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.documentApi = documentApi;
            return _this;
          }
          FileService.prototype.findIllustration = function(bireItemDtoId, bidoEquipementDTO) {
            var bidoBireId = {
              bidoEquipmentDTOId: { equipmentCode: bidoEquipementDTO.equipmentCode },
              bireItemDTOId: bireItemDtoId,
              sn: bidoEquipementDTO.sn
            };
            return _super.prototype.post.call(this, this.documentApi.findBidoBireDoc, bidoBireId);
          };
          FileService.prototype.findBireDocItemByPnCode = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBireDocItemByPnCode, input);
          };
          FileService.prototype.sanitizeAndGetBase64Prefix = function(illustrationDocument) {
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              '' +
                _utils_image_utils__WEBPACK_IMPORTED_MODULE_6__['ImageUtils'].getBase64Prefix(
                  illustrationDocument.docType
                ) +
                illustrationDocument.docFile
            );
          };
          FileService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _app_config_service__WEBPACK_IMPORTED_MODULE_7__['AppConfigService'],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__['DomSanitizer'],
                _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__['ProductStructureManagementApi'],
                _api_document_api__WEBPACK_IMPORTED_MODULE_3__['DocumentApi']
              ])
            ],
            FileService
          );
          return FileService;
        })(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__['AbstractAwHttpService']);

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

    /***/ './src/app/shared/utils/image-utils.ts':
      /*!*********************************************!*\
  !*** ./src/app/shared/utils/image-utils.ts ***!
  \*********************************************/
      /*! exports provided: ImageUtils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ImageUtils', function() {
          return ImageUtils;
        });
        /* harmony import */ var _string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./string-utils */ './src/app/shared/utils/string-utils.ts'
        );

        var ImageUtils = /** @class */ (function() {
          function ImageUtils() {}
          ImageUtils.getBase64Prefix = function(extension) {
            var formattedExtension = '';
            if (this.isJpg(extension)) {
              formattedExtension = ImageUtils.JPG_BASE64_ID;
            } else if (this.isPng(extension)) {
              formattedExtension = ImageUtils.PNG_BASE64_ID;
            }
            return _string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isEmpty(formattedExtension)
              ? ''
              : 'data:image/' + formattedExtension + ';base64,';
          };
          ImageUtils.isJpg = function(extension) {
            return this.isFormatMatching(extension, ImageUtils.JPG_EXTENSION_LIST);
          };
          ImageUtils.isPng = function(extension) {
            return this.isFormatMatching(extension, ImageUtils.PNG_EXTENSION_LIST);
          };
          ImageUtils.isFormatMatching = function(extension, validExtensionList) {
            if (_string_utils__WEBPACK_IMPORTED_MODULE_0__['StringUtils'].isNullOrEmpty(extension)) {
              return false;
            } else {
              var extensionToCheck_1 = extension.toLowerCase();
              return validExtensionList.some(function(elt) {
                return elt === extensionToCheck_1;
              });
            }
          };
          ImageUtils.JPG_BASE64_ID = 'jpg';
          ImageUtils.PNG_BASE64_ID = 'png';
          ImageUtils.JPG_EXTENSION_LIST = ['jpeg', 'jpg'];
          ImageUtils.PNG_EXTENSION_LIST = ['png'];
          return ImageUtils;
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
//# sourceMappingURL=logistics-material-request-management-material-request-management-module.js.map
