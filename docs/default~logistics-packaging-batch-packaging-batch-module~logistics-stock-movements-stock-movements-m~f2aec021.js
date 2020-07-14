(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~logistics-packaging-batch-packaging-batch-module~logistics-stock-movements-stock-movements-m~f2aec021'],
  {
    /***/ './node_modules/primeng/chart.js':
      /*!***************************************!*\
  !*** ./node_modules/primeng/chart.js ***!
  \***************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /* Shorthand */

        function __export(m) {
          for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
        Object.defineProperty(exports, '__esModule', { value: true });
        __export(
          __webpack_require__(/*! ./components/chart/chart */ './node_modules/primeng/components/chart/chart.js')
        );

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

    /***/ './src/app/main/logistics/packaging-batch/form/dialog-add-update/dialog-add-update.component.html':
      /*!********************************************************************************************************!*\
  !*** ./src/app/main/logistics/packaging-batch/form/dialog-add-update/dialog-add-update.component.html ***!
  \********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="50">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="section">\r\n      <div class="section-content">\r\n        <div class="row">\r\n          <div class="form-group">\r\n            <label class="form-label">{{ getComponentName() + ".batchNumber" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <input\r\n                name="value"\r\n                type="text"\r\n                class="aw-input"\r\n                [(ngModel)]="assemblyObject.batchNumber"\r\n                disabled="true"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <label class="form-label">{{ getComponentName() + ".quantity" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <input\r\n                name="value1"\r\n                type="number"\r\n                class="aw-input"\r\n                [(ngModel)]="assemblyObject.quantity"\r\n                max="{{ quantityMaxValue }}"\r\n                min="0"\r\n                [disabled]="fromStockMovement"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class="form-group" *ngIf="unit">\r\n            <label class="form-label">{{ getComponentName() + ".unit" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <input name="value1" class="aw-input" [(ngModel)]="unit" [disabled]="true" />\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <label class="form-label">{{ getComponentName() + ".operationalStatus" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                class="aw-dropdown fixed-width"\r\n                placeholder="&nbsp;"\r\n                [showClear]="true"\r\n                [(ngModel)]="assemblyObject.operationalStatus"\r\n                [options]="statusList"\r\n                appendTo="body"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="row">\r\n          <div class="form-group">\r\n            <label class="form-label">{{ getComponentName() + ".dateCreation" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-calendar\r\n                showButtonBar="true"\r\n                [monthNavigator]="true"\r\n                [yearNavigator]="true"\r\n                [yearRange]="sessionService.calendarYearRange"\r\n                class="aw-calendar"\r\n                [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                [locale]="sessionService.calendarFormat"\r\n                [(ngModel)]="assemblyObject.creationDate"\r\n                [disabled]="true"\r\n              >\r\n              </p-calendar>\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <label class="form-label">{{ getComponentName() + ".createdBy" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <input\r\n                name="value1"\r\n                type="text"\r\n                class="aw-input"\r\n                disabled="true"\r\n                [(ngModel)]="assemblyObject.statusUser"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class="form-group"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n    <button\r\n      type="button"\r\n      color="primary"\r\n      mat-raised-button\r\n      (click)="validate()"\r\n      [disabled]="assemblyObject.quantity < 0 || assemblyObject.quantity > quantityMaxValue"\r\n    >\r\n      <span>{{ "global.validate" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/packaging-batch/form/dialog-add-update/dialog-add-update.component.scss':
      /*!********************************************************************************************************!*\
  !*** ./src/app/main/logistics/packaging-batch/form/dialog-add-update/dialog-add-update.component.scss ***!
  \********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL3BhY2thZ2luZy1iYXRjaC9mb3JtL2RpYWxvZy1hZGQtdXBkYXRlL2RpYWxvZy1hZGQtdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */';

        /***/
      },

    /***/ './src/app/main/logistics/packaging-batch/form/dialog-add-update/dialog-add-update.component.ts':
      /*!******************************************************************************************************!*\
  !*** ./src/app/main/logistics/packaging-batch/form/dialog-add-update/dialog-add-update.component.ts ***!
  \******************************************************************************************************/
      /*! exports provided: DialogAddUpdateComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogAddUpdateComponent',
          function() {
            return DialogAddUpdateComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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

        var DialogAddUpdateComponent = /** @class */ (function(_super) {
          __extends(DialogAddUpdateComponent, _super);
          function DialogAddUpdateComponent(sessionService, propertiesService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write,
                'DialogAddUpdateComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.propertiesService = propertiesService;
            _this.onValidate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          DialogAddUpdateComponent_1 = DialogAddUpdateComponent;
          DialogAddUpdateComponent.prototype.ngOnInit = function() {
            var _this = this;
            this.assemblyObject = {
              quantity: 0
            };
            this.operationlStatusDisplayed = '';
            if (this.subAssemblyObject && this.subAssemblyObject.batchNumber) {
              var assemblyNumberArr = this.subAssemblyObject.batchNumber.split('-');
              var assemblyNumber = parseInt(assemblyNumberArr[1] || '0', 10) + 1;
              this.assemblyObject.batchNumber =
                assemblyNumber < DialogAddUpdateComponent_1.TEN
                  ? assemblyNumberArr[0].concat('-0', assemblyNumber.toString())
                  : assemblyNumberArr[0].concat('-', assemblyNumber.toString());
              this.assemblyObject.quantity = this.subAssemblyObject.quantity;
            }
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                  .BATCH_EQUIPMENT_STATUS_MAP
              )
              .subscribe(function(results) {
                _this.statusList = results;
              });
            this.assemblyObject.statusUser =
              this.subAssemblyObject.statusUser ||
              this.sessionService.userFirstName + ' ' + this.sessionService.userLastName;
            this.assemblyObject.operationalStatus =
              this.operatonalStatus &&
              this.statusList.filter(function(row) {
                return row.value === _this.operatonalStatus;
              }).length > 0
                ? this.operatonalStatus
                : _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                    .MM_BATCH_EQUIPMENT_STATUS_SERVICEABLE;
            this.assemblyObject.creationDate = new Date();
            this.quantityMaxValue = parseInt(this.quantity, 10);
          };
          DialogAddUpdateComponent.prototype.cancel = function() {
            this.display = false;
          };
          DialogAddUpdateComponent.prototype.validate = function() {
            this.onValidate.emit(this.assemblyObject);
          };
          var DialogAddUpdateComponent_1;
          DialogAddUpdateComponent.TEN = 10;
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogAddUpdateComponent.prototype,
            'subAssemblyObject',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogAddUpdateComponent.prototype,
            'quantity',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogAddUpdateComponent.prototype,
            'operatonalStatus',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogAddUpdateComponent.prototype,
            'unit',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogAddUpdateComponent.prototype,
            'fromStockMovement',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogAddUpdateComponent.prototype,
            'onValidate',
            void 0
          );
          DialogAddUpdateComponent = DialogAddUpdateComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-add-update',
                template: __webpack_require__(
                  /*! ./dialog-add-update.component.html */ './src/app/main/logistics/packaging-batch/form/dialog-add-update/dialog-add-update.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-add-update.component.scss */ './src/app/main/logistics/packaging-batch/form/dialog-add-update/dialog-add-update.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__['SessionService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__['PropertiesService']
              ])
            ],
            DialogAddUpdateComponent
          );
          return DialogAddUpdateComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/packaging-batch/form/document-upload-dialog/document-upload-dialog.component.html':
      /*!******************************************************************************************************************!*\
  !*** ./src/app/main/logistics/packaging-batch/form/document-upload-dialog/document-upload-dialog.component.html ***!
  \******************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".docManagement" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".docName" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <input type="text" class="aw-input" [(ngModel)]="document.docName" [disabled]="isReadOpenMode" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".docPublicationDate" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-calendar\r\n          showButtonBar="true"\r\n          [monthNavigator]="true"\r\n          [yearNavigator]="true"\r\n          [yearRange]="sessionService.calendarYearRange"\r\n          class="aw-calendar"\r\n          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n          [locale]="sessionService.calendarFormat"\r\n          [(ngModel)]="document.docPublicationDate"\r\n          appendTo="body"\r\n          [disabled]="isReadOpenMode"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".docEndOfValidityDate" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-calendar\r\n          showButtonBar="true"\r\n          [monthNavigator]="true"\r\n          [yearNavigator]="true"\r\n          [yearRange]="sessionService.calendarYearRange"\r\n          class="aw-calendar"\r\n          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n          [locale]="sessionService.calendarFormat"\r\n          [(ngModel)]="document.docEndOfValidityDate"\r\n          appendTo="body"\r\n          [disabled]="isReadOpenMode"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".docType" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          [options]="types"\r\n          [(ngModel)]="document.docCategory"\r\n          [disabled]="isReadOpenMode"\r\n          [showClear]="true"\r\n          placeholder="&nbsp;"\r\n          appendTo="body"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n      <label class="form-label">{{ getComponentName() + ".docDescription" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <textarea\r\n          class="aw-textarea"\r\n          pInputTextarea\r\n          [rows]="3"\r\n          [(ngModel)]="document.docDescription"\r\n          [disabled]="isReadOpenMode"\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" color="primary" mat-raised-button (click)="validate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/packaging-batch/form/document-upload-dialog/document-upload-dialog.component.scss':
      /*!******************************************************************************************************************!*\
  !*** ./src/app/main/logistics/packaging-batch/form/document-upload-dialog/document-upload-dialog.component.scss ***!
  \******************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL3BhY2thZ2luZy1iYXRjaC9mb3JtL2RvY3VtZW50LXVwbG9hZC1kaWFsb2cvZG9jdW1lbnQtdXBsb2FkLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */';

        /***/
      },

    /***/ './src/app/main/logistics/packaging-batch/form/document-upload-dialog/document-upload-dialog.component.ts':
      /*!****************************************************************************************************************!*\
  !*** ./src/app/main/logistics/packaging-batch/form/document-upload-dialog/document-upload-dialog.component.ts ***!
  \****************************************************************************************************************/
      /*! exports provided: DocumentUploadDialogComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DocumentUploadDialogComponent',
          function() {
            return DocumentUploadDialogComponent;
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

        var DocumentUploadDialogComponent = /** @class */ (function(_super) {
          __extends(DocumentUploadDialogComponent, _super);
          function DocumentUploadDialogComponent(sessionService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Read,
                'DocumentUploadDialogComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          DocumentUploadDialogComponent.prototype.ngOnInit = function() {
            this.updateOpenMode(this.openMode);
            if (!this.document) {
              this.document = {};
            }
          };
          DocumentUploadDialogComponent.prototype.validate = function() {
            this.onValidated.emit(this.document);
            this.closeDialog();
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DocumentUploadDialogComponent.prototype,
            'document',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DocumentUploadDialogComponent.prototype,
            'openMode',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DocumentUploadDialogComponent.prototype,
            'types',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DocumentUploadDialogComponent.prototype,
            'onValidated',
            void 0
          );
          DocumentUploadDialogComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-document-upload-dialog',
                template: __webpack_require__(
                  /*! ./document-upload-dialog.component.html */ './src/app/main/logistics/packaging-batch/form/document-upload-dialog/document-upload-dialog.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./document-upload-dialog.component.scss */ './src/app/main/logistics/packaging-batch/form/document-upload-dialog/document-upload-dialog.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__['SessionService']
              ])
            ],
            DocumentUploadDialogComponent
          );
          return DocumentUploadDialogComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/packaging-batch/form/packaging-batch-form.component.html':
      /*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/packaging-batch/form/packaging-batch-form.component.html ***!
  \*****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <h2 class="page-title">{{ "transaction." + componentData.componentId | translate }}</h2>\r\n\r\n      <div class="page-subtitle">\r\n        <div *ngIf="context" class="page-subtitle">- {{ context }}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div class="object-status" *ngIf="" (click)="showStatus()">\r\n        {{  | formatSelectOption:  }}\r\n      </div> -->\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button *ngIf="isReadOpenMode" type="button" mat-raised-button (click)="editBatch()">\r\n      {{ "global.edit" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      id="cancel"\r\n      *ngIf="!isReadOpenMode && !isCreateOpenMode"\r\n      color="warn"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="onCancel()"\r\n    >\r\n      {{ "global.cancel" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      class="btn-with-spinner"\r\n      color="primary"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="saveBatch()"\r\n    >\r\n      <span class="lds-hourglass" *ngIf="showSaveSpinner"></span>\r\n      {{ "global.save" | translate }}\r\n    </button>\r\n\r\n    <button type="button" mat-raised-button *ngIf="!isCreateOpenMode" (click)="showAddUpdatePopup()">\r\n      {{ getComponentName() + ".delotir" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item (click)="reloadBatch()">{{ "global.refresh" | translate }}</button>\r\n      <button mat-menu-item (click)="updateFavoriteState()">{{ "addToFavorite" | translate }}</button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <mat-tab-group animationDuration="0ms" dynamicHeight>\r\n        <!-- Home -->\r\n        <mat-tab id="homeTab">\r\n          <ng-template mat-tab-label>\r\n            {{ "home" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <!-- MAIN INFO PANEL -->\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ "page.mainData" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <!-- ROW 1 -->\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".familyVariant" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          class="aw-input"\r\n                          type="text"\r\n                          [disabled]="isReadOpenMode"\r\n                          [(ngModel)]="equipment.bidoEquipmentDTO.familyVariantCode"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".batchNumber" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          class="aw-input"\r\n                          type="text"\r\n                          [disabled]="isReadOpenMode"\r\n                          [(ngModel)]="equipment.bidoEquipmentDTO.batchNumber"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".pn" | translate }}</label>\r\n\r\n                      <div class="form-control ">\r\n                        <div *ngIf="isReadOpenMode" class="custom-anchor">\r\n                          <a>{{ equipment.bidoEquipmentDTO.pnCode }}</a>\r\n                        </div>\r\n                        <div *ngIf="!isReadOpenMode">\r\n                          <input\r\n                            class="aw-input"\r\n                            type="text"\r\n                            [disabled]="isReadOpenMode"\r\n                            [(ngModel)]="equipment.bidoEquipmentDTO.pnCode"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".quantity" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          class="aw-input"\r\n                          type="text"\r\n                          [disabled]="isReadOpenMode"\r\n                          [(ngModel)]="equipment.bidoEquipmentDTO.quantity"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".eisDate" | translate }}</label>\r\n                      <div class="form-control">\r\n                        <p-calendar\r\n                          showButtonBar="true"\r\n                          [monthNavigator]="true"\r\n                          [yearNavigator]="true"\r\n                          [yearRange]="sessionService.calendarYearRange"\r\n                          class="aw-calendar"\r\n                          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                          [locale]="sessionService.calendarFormat"\r\n                          [(ngModel)]="equipment.bidoEquipmentDTO.eisDate"\r\n                          [disabled]="isReadOpenMode"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div *ngIf="!isCreateOpenMode && !isReadOpenMode" class="form-group" style="margin-top:48px">\r\n                      <i\r\n                        class="fa fa-fw fa-level-down aw-icon aw-icon-with-border"\r\n                        aria-hidden="true"\r\n                        pTooltip="{{ componentData.componentId + \'.propagate\' | translate }}"\r\n                        tooltipPosition="top"\r\n                        (click)="propagate()"\r\n                      ></i>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- ROW 2 -->\r\n                  <div class="row">\r\n                    <div class="form-group flex--2">\r\n                      <label class="form-label">{{ getComponentName() + ".designation" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          maxlength="35"\r\n                          class="aw-input"\r\n                          [disabled]="isReadOpenMode"\r\n                          [(ngModel)]="equipment.bidoEquipmentDTO.equipmentDesignation"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".expirationDate" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <p-calendar\r\n                          showButtonBar="true"\r\n                          [monthNavigator]="true"\r\n                          [yearNavigator]="true"\r\n                          [yearRange]="sessionService.calendarYearRange"\r\n                          class="aw-calendar"\r\n                          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                          [locale]="sessionService.calendarFormat"\r\n                          appendTo="body"\r\n                          [(ngModel)]="mainInfo.expirationDate"\r\n                          [disabled]="isReadOpenMode"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div *ngIf="!isTool() && !isAircraft()" class="form-group">\r\n                      <label class="form-label">{{\r\n                        componentData.componentId + ".configurationTracked" | translate\r\n                      }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          class="aw-checkbox"\r\n                          binary="true"\r\n                          [(ngModel)]="configurationTracked"\r\n                          [disabled]="isReadOpenMode"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf="!isTool() && isAircraft()" class="form-group">\r\n                      <label class="form-label">{{\r\n                        componentData.componentId + ".configurationTracked" | translate\r\n                      }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          class="aw-checkbox"\r\n                          binary="true"\r\n                          [(ngModel)]="configurationTracked"\r\n                          [disabled]="isReadOpenMode"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".owner" | translate }}</label>\r\n\r\n                      <div\r\n                        class="form-control form-control-with-modal"\r\n                        [ngClass]="{ disabled: isReadOpenMode || !isCreateOpenMode }"\r\n                      >\r\n                        <div class="form-control-data" (click)="isCreateOpenMode ? searchOwners() : \'\'">\r\n                          {{ equipment.bidoEquipmentDTO.ownerCustomerCode }}\r\n                          <span *ngIf="ownerCustomerName">({{ ownerCustomerName }})</span>\r\n                        </div>\r\n\r\n                        <div *ngIf="equipment.bidoEquipmentDTO.ownerCustomerCode" class="btn-clear-wrapper">\r\n                          <i\r\n                            class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                            aria-hidden="true"\r\n                            (click)="equipment.ownerCustomerCode = undefined; ownerCustomerName = undefined"\r\n                          ></i>\r\n                        </div>\r\n                        <div class="btn-search-wrapper">\r\n                          <i\r\n                            class="fa fa-fw fa-search aw-icon btn-search"\r\n                            aria-hidden="true"\r\n                            (click)="searchOwners()"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".operator" | translate }}</label>\r\n\r\n                      <div\r\n                        class="form-control form-control-with-modal"\r\n                        [ngClass]="{ disabled: isReadOpenMode || !isCreateOpenMode }"\r\n                      >\r\n                        <div class="form-control-data" (click)="isCreateOpenMode ? searchOperators() : \'\'">\r\n                          {{ equipment.bidoEquipmentDTO.operatorCustomerCode }}\r\n                          <span *ngIf="operatorCustomerName">({{ operatorCustomerName }})</span>\r\n                        </div>\r\n\r\n                        <div *ngIf="equipment.bidoEquipmentDTO.operatorCustomerCode" class="btn-clear-wrapper">\r\n                          <i\r\n                            class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                            aria-hidden="true"\r\n                            (click)="equipment.operatorCustomerCode = undefined; operatorCustomerName = undefined"\r\n                          ></i>\r\n                        </div>\r\n                        <div class="btn-search-wrapper">\r\n                          <i\r\n                            class="fa fa-fw fa-search aw-icon btn-search"\r\n                            aria-hidden="true"\r\n                            (click)="searchOperators()"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- ROW 3 -->\r\n                  <div class="row">\r\n                    <div *ngIf="!isTool() && !isAircraft()" class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".manufacturer" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          maxlength="35"\r\n                          class="aw-input"\r\n                          [disabled]="isReadOpenMode"\r\n                          [(ngModel)]="equipment.bidoEquipmentDTO.snManufacturer"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf="!isTool() && isAircraft()" class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".acManuFacturer" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input "\r\n                          [disabled]="isReadOpenMode"\r\n                          [(ngModel)]="equipment.bidoEquipmentDTO.snManufacturer"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div *ngIf="!isTool() && !isAircraft()" class="form-group general-field">\r\n                      <label class="form-label">{{\r\n                        componentData.componentId + ".manufacturingDate" | translate\r\n                      }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <p-calendar\r\n                          showButtonBar="true"\r\n                          [monthNavigator]="true"\r\n                          [yearNavigator]="true"\r\n                          [yearRange]="sessionService.calendarYearRange"\r\n                          class="aw-calendar"\r\n                          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                          [locale]="sessionService.calendarFormat"\r\n                          [(ngModel)]="equipment.bidoEquipmentDTO.manufacturingDate"\r\n                          [disabled]="isReadOpenMode"\r\n                        >\r\n                        </p-calendar>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div *ngIf="!isTool() && isAircraft()" class="form-group general-field">\r\n                      <label class="form-label">{{\r\n                        componentData.componentId + ".manufacturingDate" | translate\r\n                      }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <p-calendar\r\n                          showButtonBar="true"\r\n                          [monthNavigator]="true"\r\n                          [yearNavigator]="true"\r\n                          [yearRange]="sessionService.calendarYearRange"\r\n                          class="aw-calendar"\r\n                          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                          [locale]="sessionService.calendarFormat"\r\n                          [(ngModel)]="equipment.bidoEquipmentDTO.manufacturingDate"\r\n                          [disabled]="isReadOpenMode"\r\n                        >\r\n                        </p-calendar>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div *ngIf="!isEngine() && !isAircraft() && !isTool()" class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".model" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" class="aw-input" [disabled]="true" [(ngModel)]="equipmentModelCodeAndName" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div *ngIf="isEngine() && !isAircraft() && !isTool()" class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".model" | translate }}</label>\r\n\r\n                      <div *ngIf="isCreateOpenMode" class="form-control">\r\n                        <input type="text" class="aw-input" [(ngModel)]="equipmentModelCodeAndName" [disabled]="true" />\r\n                      </div>\r\n\r\n                      <div\r\n                        *ngIf="!isCreateOpenMode"\r\n                        class="form-control form-control-with-modal"\r\n                        [ngClass]="{ disabled: isReadOpenMode }"\r\n                      >\r\n                        <div class="form-control-data" (click)="!isReadOpenMode ? searchModelCodePopup() : \'\'">\r\n                          {{ equipmentModelCodeAndName }}\r\n                        </div>\r\n                        <div class="btn-search-wrapper">\r\n                          <i\r\n                            class="fa fa-fw fa-edit aw-icon btn-search"\r\n                            aria-hidden="true"\r\n                            (click)="searchModelCodePopup()"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div *ngIf="!isTool() && !isAircraft() && isEngine()" class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".manApp" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          class="aw-checkbox"\r\n                          binary="true"\r\n                          [(ngModel)]="equipment.pMa"\r\n                          [disabled]="isReadOpenMode"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div *ngIf="!isEngine() && !isAircraft() && !isTool()" class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".rating" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [disabled]="true"\r\n                          [(ngModel)]="equipmentRatingCodeAndName"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div *ngIf="isEngine() && !isAircraft() && !isTool()" class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".rating" | translate }}</label>\r\n\r\n                      <div *ngIf="isCreateOpenMode" class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [(ngModel)]="equipmentRatingCodeAndName"\r\n                          [disabled]="true"\r\n                        />\r\n                      </div>\r\n\r\n                      <div\r\n                        *ngIf="!isCreateOpenMode"\r\n                        class="form-control form-control-with-modal"\r\n                        [ngClass]="{ disabled: isReadOpenMode }"\r\n                      >\r\n                        <div class="form-control-data" (click)="!isReadOpenMode ? searchRatingCodePopup() : \'\'">\r\n                          {{ equipmentRatingCodeAndName }}\r\n                        </div>\r\n                        <div class="btn-search-wrapper">\r\n                          <i\r\n                            class="fa fa-fw fa-edit aw-icon btn-search"\r\n                            aria-hidden="true"\r\n                            (click)="searchRatingCodePopup()"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".operationalStatus" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          placeholder="&nbsp;"\r\n                          [showClear]="true"\r\n                          [(ngModel)]="equipment.bidoEquipmentDTO.operationalStatus"\r\n                          [options]="statusList"\r\n                          [disabled]="isReadOpenMode"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Engineering References -->\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".engineeringReferences" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content  grid-cell-content-with-section">\r\n                  <div class="row">\r\n                    <div *ngIf="!isTool()" class="section">\r\n                      <div *ngIf="!isAircraft()" class="section-content">\r\n                        <div class="column">\r\n                          <div class="row">\r\n                            <div class="form-group">\r\n                              <label class="form-label">{{\r\n                                componentData.componentId + ".itemCode" | translate\r\n                              }}</label>\r\n                              <div class="form-control display--flex-row">\r\n                                <input\r\n                                  type="text"\r\n                                  class="aw-input flex--1"\r\n                                  [disabled]="isReadOpenMode"\r\n                                  [(ngModel)]="equipment.bidoEquipmentDTO.chapter"\r\n                                  maxlength="2"\r\n                                />\r\n                                <span style="margin-top:10px" class="separator">-</span>\r\n                                <input\r\n                                  type="text"\r\n                                  class="aw-input flex--1"\r\n                                  [disabled]="isReadOpenMode"\r\n                                  [(ngModel)]="equipment.section"\r\n                                  maxlength="2"\r\n                                />\r\n                                <span style="margin-top:10px" class="separator">-</span>\r\n                                <input\r\n                                  type="text"\r\n                                  class="aw-input flex--1"\r\n                                  [disabled]="isReadOpenMode"\r\n                                  [(ngModel)]="equipment.bidoEquipmentDTO.subject"\r\n                                  maxlength="2"\r\n                                />\r\n                                <span style="margin-top:10px" class="separator">-</span>\r\n                                <input\r\n                                  type="text"\r\n                                  class="aw-input flex--1"\r\n                                  [disabled]="isReadOpenMode"\r\n                                  [(ngModel)]="equipment.bidoEquipmentDTO.sheet"\r\n                                  maxlength="5"\r\n                                />\r\n                                <span style="margin-top:10px" class="separator">-</span>\r\n                                <input\r\n                                  type="text"\r\n                                  class="aw-input flex--1"\r\n                                  [disabled]="isReadOpenMode"\r\n                                  [(ngModel)]="equipment.bidoEquipmentDTO.marks"\r\n                                  maxlength="5"\r\n                                />\r\n\r\n                                <div class="btn-search-wrapper" *ngIf="!isReadOpenMode">\r\n                                  <i\r\n                                    class="fa fa-fw fa-search aw-icon btn-search"\r\n                                    aria-hidden="true"\r\n                                    (click)="openItemTableDialog()"\r\n                                  ></i>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class="form-group general-field">\r\n                              <label class="form-label">{{\r\n                                componentData.componentId + ".itemNumber" | translate\r\n                              }}</label>\r\n\r\n                              <div class="form-control">\r\n                                <input\r\n                                  type="text"\r\n                                  class="aw-input"\r\n                                  [(ngModel)]="equipment.itemNumber"\r\n                                  [disabled]="isReadOpenMode"\r\n                                />\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class="form-group general-field">\r\n                              <label class="form-label">{{\r\n                                componentData.componentId + ".functionCode" | translate\r\n                              }}</label>\r\n\r\n                              <div class="form-control">\r\n                                <input\r\n                                  type="text"\r\n                                  class="aw-input"\r\n                                  [(ngModel)]="equipment.bidoEquipmentDTO.functionCode"\r\n                                  [disabled]="isReadOpenMode"\r\n                                />\r\n                              </div>\r\n                            </div>\r\n                            <div class="form-group">\r\n                              <label class="form-label">{{\r\n                                componentData.componentId + ".position" | translate\r\n                              }}</label>\r\n\r\n                              <div class="form-control">\r\n                                <p-dropdown\r\n                                  class="aw-dropdown fixed-width"\r\n                                  [options]="propertyPositions"\r\n                                  [(ngModel)]="equipment.bidoEquipmentDTO.equiPosition"\r\n                                  [showClear]="true"\r\n                                  placeholder="&nbsp;"\r\n                                  [disabled]="isReadOpenMode"\r\n                                ></p-dropdown>\r\n                              </div>\r\n                            </div>\r\n                            <div *ngIf="!isEngine()" class="form-group">\r\n                              <label class="form-label">{{\r\n                                componentData.componentId + ".function" | translate\r\n                              }}</label>\r\n                              <div class="form-control">\r\n                                <p-dropdown\r\n                                  class="aw-dropdown fixed-width"\r\n                                  [options]="propertyFunctions"\r\n                                  [(ngModel)]="equipment.bidoEquipmentDTO.equipmentFunction"\r\n                                  [showClear]="true"\r\n                                  placeholder="&nbsp;"\r\n                                  [disabled]="isReadOpenMode"\r\n                                ></p-dropdown>\r\n                              </div>\r\n                            </div>\r\n                            <div *ngIf="!isEngine()" class="form-group">\r\n                              <label class="form-label">{{\r\n                                componentData.componentId + ".lifeRestriction" | translate\r\n                              }}</label>\r\n\r\n                              <div class="form-control">\r\n                                <p-checkbox\r\n                                  class="aw-checkbox"\r\n                                  binary="true"\r\n                                  [(ngModel)]="equipment.bidoEquipmentDTO.lifeRestriction"\r\n                                  [disabled]="isReadOpenMode"\r\n                                >\r\n                                </p-checkbox>\r\n                              </div>\r\n                            </div>\r\n                            <div *ngIf="!isEngine()" class="form-group general-field">\r\n                              <label class="form-label">{{\r\n                                componentData.componentId + ".manufacturingConfiguration" | translate\r\n                              }}</label>\r\n\r\n                              <div class="form-control">\r\n                                <p-checkbox\r\n                                  binary="true"\r\n                                  class="aw-checkbox"\r\n                                  [(ngModel)]="equipment.bidoEquipmentDTO.manufacturingConfiguration"\r\n                                  [disabled]="isReadOpenMode"\r\n                                ></p-checkbox>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell--6">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".geographicalLocation" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content  grid-cell-content-with-section">\r\n                  <div class="section">\r\n                    <div class="section-content">\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".zone" | translate }}</label>\r\n\r\n                          <div *ngIf="isCreateOpenMode" class="form-control">\r\n                            <p-dropdown\r\n                              class="aw-dropdown fixed-width"\r\n                              [options]="propertyZones"\r\n                              [(ngModel)]="equipment.bidoEquipmentDTO.zone"\r\n                              (onChange)="changeZone()"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></p-dropdown>\r\n                          </div>\r\n\r\n                          <div\r\n                            *ngIf="!isCreateOpenMode"\r\n                            class="form-control form-control-with-modal"\r\n                            [ngClass]="{ disabled: isReadOpenMode }"\r\n                          >\r\n                            <div class="form-control-data" (click)="!isReadOpenMode ? searchGeoLocation() : \'\'">\r\n                              {{ equipment.bidoEquipmentDTO.zone }}\r\n                            </div>\r\n                            <div *ngIf="equipment.bidoEquipmentDTO.zone" class="btn-clear-wrapper">\r\n                              <i\r\n                                class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                                aria-hidden="true"\r\n                                (click)="equipment.bidoEquipmentDTO.zone = undefined"\r\n                              ></i>\r\n                            </div>\r\n                            <div class="btn-search-wrapper">\r\n                              <i\r\n                                class="fa fa-fw fa-edit aw-icon btn-search"\r\n                                aria-hidden="true"\r\n                                (click)="searchGeoLocation()"\r\n                              ></i>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".country" | translate }}</label>\r\n\r\n                          <div *ngIf="isCreateOpenMode" class="form-control">\r\n                            <p-dropdown\r\n                              class="aw-dropdown fixed-width"\r\n                              [options]="propertyCountries"\r\n                              [(ngModel)]="equipment.bidoEquipmentDTO.country"\r\n                              (onChange)="changeCountry()"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                          <div *ngIf="!isCreateOpenMode" class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [disabled]="isReadOpenMode"\r\n                              [(ngModel)]="equipment.bidoEquipmentDTO.country"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".location" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <p-dropdown\r\n                              class="aw-dropdown fixed-width"\r\n                              [options]="propertyLocations"\r\n                              [(ngModel)]="locationValue"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell--6">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".usCounters" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content  grid-cell-content-with-section">\r\n                  <div class="section">\r\n                    <div class="section-content">\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".usage" | translate }}</label>\r\n\r\n                          <div\r\n                            class="form-control"\r\n                            [ngClass]="\r\n                              !equipment.usageCounterCalculationDTO.usageValue ||\r\n                              equipment.usageCounterCalculationDTO.usageValue === NOT_ACTIVATED\r\n                                ? COLOR_RED\r\n                                : COLOR_GREEN\r\n                            "\r\n                          >\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="equipment.usageCounterCalculationDTO.usageValue"\r\n                              [disabled]="isReadOpenMode"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".storage" | translate }}</label>\r\n\r\n                          <div\r\n                            class="form-control"\r\n                            [ngClass]="\r\n                              !equipment.usageCounterCalculationDTO.storageValue ||\r\n                              equipment.usageCounterCalculationDTO.storageValue === NOT_ACTIVATED\r\n                                ? COLOR_RED\r\n                                : COLOR_GREEN\r\n                            "\r\n                          >\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="equipment.usageCounterCalculationDTO.storageValue"\r\n                              [disabled]="isReadOpenMode"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".usageStorage" | translate\r\n                          }}</label>\r\n\r\n                          <div\r\n                            class="form-control"\r\n                            [ngClass]="\r\n                              !equipment.usageCounterCalculationDTO.usageStorageValue ||\r\n                              equipment.usageCounterCalculationDTO.usageStorageValue === NOT_ACTIVATED\r\n                                ? COLOR_RED\r\n                                : COLOR_GREEN\r\n                            "\r\n                          >\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="equipment.usageCounterCalculationDTO.usageStorageValue"\r\n                              [disabled]="isReadOpenMode"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab *ngIf="!isCreateOpenMode" id="structureTab">\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + ".batchInfo" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <!-- Batch Reference -->\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ getComponentName() + ".batchReference" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content  grid-cell-content-with-section">\r\n                  <div class="column">\r\n                    <div class="row">\r\n                      <!-- SECTION  1 -->\r\n                      <div class="section flex--2">\r\n                        <h4 class="section-title">\r\n                          {{ componentData.componentId + ".manufaturingBatch" | translate }}\r\n                        </h4>\r\n                        <div class="section-content">\r\n                          <div class="row">\r\n                            <div class="form-group">\r\n                              <label class="form-label">{{\r\n                                getComponentName() + ".manufaturingBatchNumber" | translate\r\n                              }}</label>\r\n\r\n                              <div class="form-control ">\r\n                                <div *ngIf="isReadOpenMode" class="custom-anchor">\r\n                                  <a (click)="openMfgBatch(equipment.manufacturingBatch.equipmentCode)">{{\r\n                                    equipment.manufacturingBatch && equipment.manufacturingBatch.batchNumber\r\n                                  }}</a>\r\n                                </div>\r\n                                <div *ngIf="!isReadOpenMode">\r\n                                  <input\r\n                                    class="aw-input"\r\n                                    type="text"\r\n                                    [disabled]="isReadOpenMode"\r\n                                    [(ngModel)]="\r\n                                      equipment.manufacturingBatch && equipment.manufacturingBatch.batchNumber\r\n                                    "\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class="form-group">\r\n                              <label class="form-label">{{ getComponentName() + ".batchQuantity" | translate }}</label>\r\n\r\n                              <div class="form-control">\r\n                                <input\r\n                                  class="aw-input"\r\n                                  type="text"\r\n                                  [disabled]="isReadOpenMode"\r\n                                  [(ngModel)]="equipment.manufacturingBatch && equipment.manufacturingBatch.quantity"\r\n                                />\r\n                              </div>\r\n                            </div>\r\n                            <div class="form-group">\r\n                              <label class="form-label">{{\r\n                                getComponentName() + ".manufaturingBatchDate" | translate\r\n                              }}</label>\r\n\r\n                              <div class="form-control">\r\n                                <p-calendar\r\n                                  showButtonBar="true"\r\n                                  [monthNavigator]="true"\r\n                                  [yearNavigator]="true"\r\n                                  [yearRange]="sessionService.calendarYearRange"\r\n                                  class="aw-calendar"\r\n                                  [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                                  [locale]="sessionService.calendarFormat"\r\n                                  appendTo="body"\r\n                                  [(ngModel)]="equipment.manufacturingBatch && equipment.manufacturingBatch.date"\r\n                                  [disabled]="isReadOpenMode"\r\n                                ></p-calendar>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- SECTION 2 -->\r\n                      <div class="section flex--2">\r\n                        <h4 class="section-title">\r\n                          {{ componentData.componentId + ".originalPackagingBatch" | translate }}\r\n                        </h4>\r\n                        <div class="section-content">\r\n                          <div class="row">\r\n                            <div class="form-group">\r\n                              <label class="form-label">{{\r\n                                getComponentName() + ".originalPackagingBatchNumber" | translate\r\n                              }}</label>\r\n\r\n                              <div class="form-control ">\r\n                                <div *ngIf="isReadOpenMode" class="custom-anchor">\r\n                                  <a (click)="openPackagingBatch(equipment.superiorPackagingBatch.equipmentCode)">{{\r\n                                    equipment.superiorPackagingBatch && equipment.superiorPackagingBatch.batchNumber\r\n                                  }}</a>\r\n                                </div>\r\n                                <div *ngIf="!isReadOpenMode">\r\n                                  <input\r\n                                    class="aw-input"\r\n                                    type="text"\r\n                                    [disabled]="isReadOpenMode"\r\n                                    [(ngModel)]="\r\n                                      equipment.superiorPackagingBatch && equipment.superiorPackagingBatch.batchNumber\r\n                                    "\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class="form-group">\r\n                              <label class="form-label">{{\r\n                                getComponentName() + ".originalPackagingBatchQuantity" | translate\r\n                              }}</label>\r\n\r\n                              <div class="form-control">\r\n                                <input\r\n                                  class="aw-input"\r\n                                  type="text"\r\n                                  [disabled]="isReadOpenMode"\r\n                                  [(ngModel)]="\r\n                                    equipment.superiorPackagingBatch && equipment.superiorPackagingBatch.quantity\r\n                                  "\r\n                                />\r\n                              </div>\r\n                            </div>\r\n                            <div class="form-group">\r\n                              <label class="form-label">{{\r\n                                getComponentName() + ".originalPackagingBatchDate" | translate\r\n                              }}</label>\r\n\r\n                              <div class="form-control">\r\n                                <p-calendar\r\n                                  showButtonBar="true"\r\n                                  [monthNavigator]="true"\r\n                                  [yearNavigator]="true"\r\n                                  [yearRange]="sessionService.calendarYearRange"\r\n                                  class="aw-calendar"\r\n                                  [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                                  [locale]="sessionService.calendarFormat"\r\n                                  appendTo="body"\r\n                                  [(ngModel)]="\r\n                                    equipment.superiorPackagingBatch && equipment.superiorPackagingBatch.date\r\n                                  "\r\n                                  [disabled]="isReadOpenMode"\r\n                                ></p-calendar>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Sub Assemblies -->\r\n            <div *ngIf="!isCreateOpenMode">\r\n              <div class="grid-cell--12">\r\n                <div class="grid-cell grid-cell--container">\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ getComponentName() + ".subAssemblies" | translate }}\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      #pSubAssemblyPosts\r\n                      class="aw-table2"\r\n                      [columns]="subAssemblyTableCols"\r\n                      [value]="subAssemblyTableData"\r\n                      [scrollable]="true"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isLoadingEventsTable"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isLoadingEventsTable" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableMeasuresGlobalFilter\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="pSubAssemblyPosts.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                            {{ componentData.componentId + "." + col.field | translate }}\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchCase="\'batchNumber\'">\r\n                              <a (click)="openPackagingBatch(rowData.equipmentCode)">{{ rowData[col.field] }}</a>\r\n                            </span>\r\n                            <span *ngSwitchCase="\'creationDate\'">\r\n                              {{ rowData[col.field] | date: "shortDate":"":translateService.currentLang }}\r\n                            </span>\r\n                            <span *ngSwitchCase="\'operationalStatus\'">{{\r\n                              rowData[col.field] | formatSelectOption: statusList\r\n                            }}</span>\r\n                            <span *ngSwitchCase="\'emp\'">\r\n                              {{ rowData["location"] }}\r\n                            </span>\r\n                            <span *ngSwitchCase="\'quantity\'">\r\n                              {{ rowData[col.field] | formatNumber }}\r\n                            </span>\r\n                            <span *ngSwitchCase="\'batchOriginQty\'">\r\n                              {{ rowData[col.field] | formatNumber }}\r\n                            </span>\r\n                            <span *ngSwitchDefault>\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab *ngIf="!isCreateOpenMode" id="stockTab">\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + ".stock" | translate }}\r\n          </ng-template>\r\n          <!-- Stock -->\r\n          <div class="grid-row">\r\n            <div *ngIf="!isCreateOpenMode">\r\n              <div class="grid-cell--12">\r\n                <div class="grid-cell grid-cell--container">\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ componentData.componentId + ".currentStock" | translate }}\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content grid-cell-content-with-section">\r\n                    <div *ngIf="!isReadOpenMode && !isCreateOpenMode" class="grid-cell-content-action">\r\n                      <button type="button" mat-raised-button (click)="createStockMovement()">\r\n                        {{ componentData.componentId + ".createStockMovement" | translate }}\r\n                      </button>\r\n                    </div>\r\n\r\n                    <div class="section">\r\n                      <div class="section-content">\r\n                        <div class="row">\r\n                          <div class="form-group">\r\n                            <label class="form-label">{{ componentData.componentId + ".site" | translate }}</label>\r\n\r\n                            <div class="form-control">\r\n                              <input\r\n                                type="text"\r\n                                class="aw-input"\r\n                                [(ngModel)]="equipment.stockOutputDto.site"\r\n                                [disabled]="true"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class="form-group">\r\n                            <label class="form-label">{{ componentData.componentId + ".warehouse" | translate }}</label>\r\n\r\n                            <div class="form-control">\r\n                              <input\r\n                                type="text"\r\n                                class="aw-input"\r\n                                [(ngModel)]="equipment.stockOutputDto.warehouse"\r\n                                [disabled]="true"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class="form-group">\r\n                            <label class="form-label">{{ componentData.componentId + ".zone" | translate }}</label>\r\n\r\n                            <div class="form-control">\r\n                              <input type="text" class="aw-input" [(ngModel)]="areaText" [disabled]="true" />\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class="form-group">\r\n                            <label class="form-label">{{ componentData.componentId + ".bin" | translate }}</label>\r\n\r\n                            <div class="form-control">\r\n                              <input\r\n                                type="text"\r\n                                class="aw-input"\r\n                                [(ngModel)]="equipment.stockOutputDto.storageBin"\r\n                                [disabled]="true"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell--12">\r\n                <div class="grid-cell grid-cell--container">\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 *ngIf="!awPropertiesConstants.MM_FULL_MODULE_ACTIVATED" class="grid-cell-title">\r\n                        {{ componentData.componentId + ".stockLog" | translate }} ({{\r\n                          bidoStockDisplayed ? bidoStockDisplayed.length : 0\r\n                        }})\r\n                      </h3>\r\n                      <h3 *ngIf="awPropertiesConstants.MM_FULL_MODULE_ACTIVATED" class="grid-cell-title">\r\n                        {{ componentData.componentId + ".stockLog" | translate }} ({{\r\n                          stockMvtTableDataSource.dataCount\r\n                        }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content grid-cell-content-with-section">\r\n                    <div class="section" *ngIf="!awPropertiesConstants.MM_FULL_MODULE_ACTIVATED">\r\n                      <div class="section-content">\r\n                        <div class="row">\r\n                          <div class="table-wrapper">\r\n                            <p-table\r\n                              [resizableColumns]="true"\r\n                              #ptableStock\r\n                              class="aw-table2"\r\n                              [columns]="stockTableCols"\r\n                              [value]="bidoStockDisplayed"\r\n                              [scrollable]="true"\r\n                              dataKey="code"\r\n                              [paginator]="true"\r\n                              [rows]="TABLE_PAGINATION_DEFAULT_ROWS"\r\n                            >\r\n                              <ng-template pTemplate="emptymessage">\r\n                                <span *ngIf="!isLoadingStockTable"> &nbsp;</span>\r\n\r\n                                <div *ngIf="isLoadingStockTable" class="aw-table-loading-indicator">\r\n                                  <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                                  <div class="lds-hourglass"></div>\r\n                                </div>\r\n                              </ng-template>\r\n\r\n                              <ng-template pTemplate="caption">\r\n                                <div class="aw-table-header">\r\n                                  <div class="aw-table-global-filter">\r\n                                    <label class="aw-table-global-filter-label">\r\n                                      <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                                    </label>\r\n\r\n                                    <input\r\n                                      #ptableStockGlobalFilter\r\n                                      class="aw-table-global-filter-input"\r\n                                      type="text"\r\n                                      placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                                      (input)="ptableStock.filterGlobal($event.target.value, \'contains\')"\r\n                                    />\r\n                                  </div>\r\n\r\n                                  <div class="aw-table-actions"></div>\r\n                                </div>\r\n                              </ng-template>\r\n\r\n                              <ng-template pTemplate="colgroup" let-columns>\r\n                                <colgroup>\r\n                                  <col\r\n                                    *ngFor="let col of columns"\r\n                                    [ngStyle]="{ width: col.width, \'text-align\': col.alignment }"\r\n                                  />\r\n                                  <col class="row-expand-wrapper" />\r\n                                  <col class="row-action-wrapper" />\r\n                                </colgroup>\r\n                              </ng-template>\r\n\r\n                              <ng-template pTemplate="header" let-columns>\r\n                                <tr>\r\n                                  <th\r\n                                    pResizableColumn\r\n                                    *ngFor="let col of columns"\r\n                                    [ngStyle]="{ width: col.width, \'text-align\': col.alignment }"\r\n                                  >\r\n                                    {{ componentData.componentId + "." + col.field | translate }}\r\n                                  </th>\r\n                                  <th class="row-expand-wrapper"></th>\r\n                                  <th class="row-action-wrapper"></th>\r\n                                </tr>\r\n                              </ng-template>\r\n\r\n                              <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                                <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                                  <td\r\n                                    *ngFor="let col of columns"\r\n                                    [ngSwitch]="col.field"\r\n                                    [ngStyle]="{ width: col.width, \'text-align\': col.alignment }"\r\n                                  >\r\n                                    <span *ngSwitchCase="\'stockMvtDate\'">\r\n                                      {{ rowData[col.field] | date: "shortDate":"":translateService.currentLang }}\r\n                                    </span>\r\n                                    <span *ngSwitchCase="\'code\'">\r\n                                      {{ rowData["code"] }}\r\n                                    </span>\r\n\r\n                                    <span *ngSwitchCase="\'document\'">\r\n                                      <a *ngIf="rowData[\'document\']" (click)="onClickDocument(rowData)">\r\n                                        {{ rowData["document"] }}</a\r\n                                      >\r\n                                    </span>\r\n                                    <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                                  </td>\r\n\r\n                                  <td class="row-expand-wrapper" [pRowToggler]="rowData">\r\n                                    <i\r\n                                      class="fa fa-fw aw-icon aw-icon-with-border"\r\n                                      [ngClass]="rowData._expand ? \'fa-minus\' : \'fa-plus\'"\r\n                                      aria-hidden="true"\r\n                                      pTooltip="{{ \'global.showTableRowDetails\' | translate }}"\r\n                                      tooltipPosition="top"\r\n                                      (click)="toggleRowDetailsVisibilityStock(rowData)"\r\n                                    ></i>\r\n                                  </td>\r\n                                </tr>\r\n                              </ng-template>\r\n\r\n                              <ng-template pTemplate="rowexpansion" let-rowData let-columns="columns">\r\n                                <tr class="row-expanded" *ngIf="rowData._expand">\r\n                                  <td [attr.colspan]="columns.length + 2">\r\n                                    <div class="row">\r\n                                      <div class="form-group">\r\n                                        <label class="form-label">\r\n                                          {{ getComponentName() + ".stockMvtBatchNumber" | translate }}\r\n                                        </label>\r\n\r\n                                        <div class="form-control">\r\n                                          <input\r\n                                            class="aw-input"\r\n                                            type="text"\r\n                                            [(ngModel)]="rowData.stockMvtBatchNumber"\r\n                                            [disabled]="true"\r\n                                          />\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class="form-group">\r\n                                        <label class="form-label">\r\n                                          {{ getComponentName() + ".bin" | translate }}\r\n                                        </label>\r\n                                        <div class="form-control">\r\n                                          <input\r\n                                            class="aw-input"\r\n                                            type="text"\r\n                                            [(ngModel)]="rowData.bin"\r\n                                            [disabled]="true"\r\n                                          />\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class="form-group">\r\n                                        <label class="form-label">\r\n                                          {{ getComponentName() + ".stockType" | translate }}\r\n                                        </label>\r\n\r\n                                        <div class="form-control">\r\n                                          <input\r\n                                            class="aw-input"\r\n                                            type="text"\r\n                                            [(ngModel)]="rowData.stockType"\r\n                                            [disabled]="true"\r\n                                          />\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class="form-group">\r\n                                        <label class="form-label">\r\n                                          {{ getComponentName() + ".valuation" | translate }}\r\n                                        </label>\r\n\r\n                                        <div class="form-control">\r\n                                          <input\r\n                                            class="aw-input"\r\n                                            type="text"\r\n                                            [(ngModel)]="rowData.valuation"\r\n                                            [disabled]="true"\r\n                                          />\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class="form-group">\r\n                                        <label class="form-label">\r\n                                          {{ getComponentName() + ".comments" | translate }}\r\n                                        </label>\r\n\r\n                                        <div class="form-control">\r\n                                          <input\r\n                                            class="aw-input"\r\n                                            type="text"\r\n                                            [(ngModel)]="rowData.comments"\r\n                                            [disabled]="true"\r\n                                          />\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </td>\r\n                                </tr>\r\n                              </ng-template>\r\n                            </p-table>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="section" *ngIf="awPropertiesConstants.MM_FULL_MODULE_ACTIVATED">\r\n                      <div class="section-content">\r\n                        <div class="row">\r\n                          <div class="table-wrapper">\r\n                            <a-table [dataSource]="stockMvtTableDataSource">\r\n                              <ng-template columnDef="movement" let-rowData="rowData">\r\n                                <div>\r\n                                  <a style="font-weight: 600;" (click)="openStockMovement(rowData)">\r\n                                    {{ rowData["stockMvtCode"] }}\r\n                                  </a>\r\n                                </div>\r\n\r\n                                <div>\r\n                                  {{ rowData["bidtStockMvtType"]?.smtName | extractTranslation }}\r\n                                </div>\r\n                              </ng-template>\r\n\r\n                              <ng-template columnDef="type" let-rowData="rowData">\r\n                                <i\r\n                                  *ngIf="rowData[\'bidtStockMvtType\']?.smtWay === bidtStockMvtConstants.MVT_WAY_CREDIT"\r\n                                  class="fa fa-fw fa-arrow-right procurement-type--in"\r\n                                  aria-hidden="true"\r\n                                ></i>\r\n                                <i\r\n                                  *ngIf="rowData[\'bidtStockMvtType\']?.smtWay === bidtStockMvtConstants.MVT_WAY_DEBIT"\r\n                                  class="fa fa-fw fa-arrow-right procurement-type--out"\r\n                                  aria-hidden="true"\r\n                                ></i>\r\n                                <i\r\n                                  *ngIf="rowData[\'bidtStockMvtType\']?.smtWay === bidtStockMvtConstants.MVT_WAY_TRANSFER"\r\n                                  class="fa fa-fw fa-arrow-right procurement-type--transfer"\r\n                                  aria-hidden="true"\r\n                                ></i>\r\n                              </ng-template>\r\n\r\n                              <ng-template columnDef="warehouseWorkshop" let-rowData="rowData">\r\n                                <div>\r\n                                  <div style="min-width: 3rem; display: inline-block;">\r\n                                    {{ getComponentName() + ".site" | translate }}\r\n                                  </div>\r\n                                  <span style="font-weight: 600">{{ rowData["siteName"] }}</span>\r\n                                </div>\r\n                                <div>\r\n                                  <span style="font-weight: 600">{{ rowData["warehousename"] }}</span>\r\n                                </div>\r\n                              </ng-template>\r\n\r\n                              <ng-template columnDef="outbound" let-rowData="rowData">\r\n                                <div *ngIf="rowData[\'bidtStorageBinZoneIssue\']?.sbNumber">\r\n                                  <div style="min-width: 2rem; display: inline-block;">\r\n                                    {{ getComponentName() + ".zone" | translate }}\r\n                                  </div>\r\n                                  <span style="font-weight: 600">\r\n                                    {{ rowData["bidtStorageBinZoneIssue"]?.sbNumber }}\r\n                                    <ng-container *ngIf="rowData[\'bidtStorageBinZoneIssue\']?.sbDescription">\r\n                                      - {{ rowData["bidtStorageBinZoneIssue"]?.sbDescription }}\r\n                                    </ng-container>\r\n                                  </span>\r\n                                </div>\r\n\r\n                                <div *ngIf="rowData[\'bidtStorageBinBinIssue\']?.sbNumber">\r\n                                  <div style="min-width: 3rem; display: inline-block;">\r\n                                    {{ getComponentName() + ".emp" | translate }}\r\n                                  </div>\r\n                                  <span style="font-weight: 600">{{\r\n                                    rowData["bidtStorageBinBinIssue"]?.sbNumber\r\n                                  }}</span>\r\n                                </div>\r\n                              </ng-template>\r\n\r\n                              <ng-template columnDef="inbound" let-rowData="rowData">\r\n                                <div *ngIf="rowData[\'bidtStorageBinZoneReceipt\']?.sbNumber">\r\n                                  <div style="min-width: 2rem; display: inline-block;">\r\n                                    {{ getComponentName() + ".zone" | translate }}\r\n                                  </div>\r\n                                  <span style="font-weight: 600">\r\n                                    {{ rowData["bidtStorageBinZoneReceipt"]?.sbNumber }}\r\n                                    <ng-container *ngIf="rowData[\'bidtStorageBinZoneReceipt\']?.sbDescription">\r\n                                      - {{ rowData["bidtStorageBinZoneReceipt"]?.sbDescription }}\r\n                                    </ng-container>\r\n                                  </span>\r\n                                </div>\r\n\r\n                                <div *ngIf="rowData[\'bidtStorageBinBinReceipt\']?.sbNumber">\r\n                                  <div style="min-width: 3rem; display: inline-block;">\r\n                                    {{ getComponentName() + ".emp" | translate }}\r\n                                  </div>\r\n                                  <span style="font-weight: 600">{{\r\n                                    rowData["bidtStorageBinBinReceipt"]?.sbNumber\r\n                                  }}</span>\r\n                                </div>\r\n                              </ng-template>\r\n\r\n                              <ng-template columnDef="status" let-rowData="rowData">\r\n                                <div>\r\n                                  <span style="font-weight: 600;">{{ rowData["smoStatus"].label }}</span>\r\n                                </div>\r\n\r\n                                <div>\r\n                                  {{\r\n                                    (rowData["_stockMvt"].stockMvtDate\r\n                                      ? rowData["_stockMvt"].stockMvtDate\r\n                                      : rowData["_stockMvt"].stockMvtPlannedDate\r\n                                    ) | date: "yyyy/MM/dd HH:mm":"":translateService.currentLang\r\n                                  }}\r\n                                </div>\r\n                              </ng-template>\r\n\r\n                              <ng-template columnDef="document" let-rowData="rowData">\r\n                                <div>\r\n                                  <a (click)="openDocOrigine(rowData)">{{ rowData["documentNum"] }}</a>\r\n                                </div>\r\n                                <div>\r\n                                  <i>{{ rowData["documentDescription"] }}</i>\r\n                                </div>\r\n                              </ng-template>\r\n                            </a-table>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <!--------table end ---------->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab *ngIf="!isCreateOpenMode" id="additionalTab">\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + ".additionalInfo" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <!-- Additional Information -->\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ getComponentName() + ".additionalInfo" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div *ngIf="!isTool()" class="section">\r\n                    <div class="section-content">\r\n                      <div class="column">\r\n                        <div class="row">\r\n                          <div *ngIf="!isAircraft()" class="form-group">\r\n                            <label class="form-label">{{ componentData.componentId + ".assetCode" | translate }}</label>\r\n\r\n                            <div class="form-control">\r\n                              <input\r\n                                type="text"\r\n                                maxlength="25"\r\n                                class="aw-input"\r\n                                [(ngModel)]="equipment.bidoEquipmentDTO.equipmentCode"\r\n                                [disabled]="isReadOpenMode"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf="isAircraft()" class="form-group">\r\n                            <label class="form-label">{{ componentData.componentId + ".assetCode" | translate }}</label>\r\n\r\n                            <div class="form-control">\r\n                              <input\r\n                                type="text"\r\n                                maxlength="25"\r\n                                class="aw-input"\r\n                                [(ngModel)]="equipment.bidoEquipmentDTO.equipmentCode"\r\n                                [disabled]="isReadOpenMode"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <aw-dynamic-attributes\r\n                          [showHistory]="true"\r\n                          [history]="dynamicAttributesHistoric"\r\n                          [attributes]="dynamicAttributes"\r\n                          [isReadOpenMode]="isReadOpenMode"\r\n                        >\r\n                        </aw-dynamic-attributes>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab *ngIf="!isCreateOpenMode" id="documentTab">\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + ".tabDocument" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <!-- Documents -->\r\n            <div *ngIf="!isCreateOpenMode">\r\n              <div class="grid-cell--12">\r\n                <div class="grid-cell grid-cell--container">\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ componentData.componentId + ".tabDocument" | translate }}\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content">\r\n                    <a-table [dataSource]="documentTableDataSource">\r\n                      <ng-template tableActionsDef>\r\n                        <button\r\n                          *ngIf="documentTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="downloadFiles()"\r\n                        >\r\n                          {{ "global.download" | translate }}\r\n                        </button>\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && documentTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          color="warn"\r\n                          (click)="deleteDocuments()"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && documentTableDataSource.dataSelectionCount === 1"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="editDocument()"\r\n                        >\r\n                          {{ "global.edit" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf="!isReadOpenMode && documentTableDataSource.dataSelectionCount === 1"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="openDocument()"\r\n                        >\r\n                          {{ "global.open" | translate }}\r\n                        </button>\r\n                        <p-fileUpload\r\n                          #fileUploader\r\n                          *ngIf="!isReadOpenMode && !documentTableDataSource.hasDataSelection"\r\n                          chooseLabel="{{ \'global.upload\' | translate }}"\r\n                          name="document[]"\r\n                          customUpload="true"\r\n                          mode="basic"\r\n                          auto="true"\r\n                          (uploadHandler)="uploadDocument($event, fileUploader)"\r\n                        ></p-fileUpload>\r\n                      </ng-template>\r\n                      <ng-template columnDef="docEndOfValidityDate" let-rowData="rowData">\r\n                        {{ rowData.docEndOfValidityDate | date: "shortDate":"":translateService.currentLang }}\r\n                      </ng-template>\r\n                      <ng-template columnDef="docExtension" let-rowData="rowData">\r\n                        <span> {{ showDocExtension(rowData) }} </span>\r\n                      </ng-template>\r\n                      <ng-template columnDef="docPublicationDate" let-rowData="rowData">\r\n                        <span>\r\n                          {{ rowData.docPublicationDate | date: "shortDate":"":translateService.currentLang }}\r\n                        </span>\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-table\r\n  *ngIf="showDialogOwner"\r\n  [(display)]="showDialogOwner"\r\n  [data]="dialogTableDataOwner"\r\n  (onSelected)="setSelectedOwner($event)"\r\n></aw-dialog-table>\r\n\r\n<aw-dialog-table\r\n  *ngIf="showDialogOperator"\r\n  [(display)]="showDialogOperator"\r\n  [data]="dialogTableDataOperator"\r\n  (onSelected)="setSelectedOperator($event)"\r\n></aw-dialog-table>\r\n\r\n<aw-dialog-table\r\n  *ngIf="showItemTableDialog"\r\n  [keyMap]="keyMap"\r\n  [data]="itemTableData"\r\n  [(display)]="showItemTableDialog"\r\n  (onSelected)="setSelectedItems($event)"\r\n></aw-dialog-table>\r\n\r\n<aw-dialog-add-update\r\n  *ngIf="openAddUpdatedialog"\r\n  [(display)]="openAddUpdatedialog"\r\n  [subAssemblyObject]="subAssemblyPopupObject"\r\n  [quantity]="equipment.bidoEquipmentDTO.quantity"\r\n  [operatonalStatus]="equipment.bidoEquipmentDTO.operationalStatus"\r\n  [unit]="packagingBatchUnit"\r\n  (onValidate)="updateSubAssembly($event)"\r\n>\r\n</aw-dialog-add-update>\r\n\r\n<aw-document-upload-dialog\r\n  *ngIf="showAddDocumentDialog"\r\n  [(display)]="showAddDocumentDialog"\r\n  [openMode]="documentDialogOpenMode"\r\n  [document]="currentDocument"\r\n  [types]="documentTypes"\r\n  (onValidated)="addNewDocument($event)"\r\n>\r\n</aw-document-upload-dialog>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/packaging-batch/form/packaging-batch-form.component.scss':
      /*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/packaging-batch/form/packaging-batch-form.component.scss ***!
  \*****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .value-red {\n  background-color: #f6685e !important; }\n\n:host .value-yellow {\n  background-color: #ffc107 !important; }\n\n:host .value-green {\n  background-color: #4caf50 !important; }\n\n:host .value-green,\n:host .value-red,\n:host .value-yellow {\n  padding: 0.5em; }\n\n:host .red {\n  color: #f6685e !important; }\n\n:host .green {\n  color: #4caf50 !important; }\n\n:host .custom-anchor {\n  padding: 0.7em 0; }\n\n:host .procurement-type--in {\n  color: #4caf50;\n  -webkit-transform: rotate(320deg);\n          transform: rotate(320deg); }\n\n:host .procurement-type--out {\n  color: #f6685e;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n:host .procurement-type--transfer {\n  color: #006ea9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvcGFja2FnaW5nLWJhdGNoL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xccGFja2FnaW5nLWJhdGNoXFxmb3JtXFxwYWNrYWdpbmctYmF0Y2gtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvcGFja2FnaW5nLWJhdGNoL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVJLG9DQUF3QyxFQUFBOztBQUY1QztFQU1JLG9DQUFvQyxFQUFBOztBQU54QztFQVVJLG9DQUEwQyxFQUFBOztBQVY5Qzs7O0VBZ0JJLGNBQWMsRUFBQTs7QUFoQmxCO0VBb0JJLHlCQUE2QixFQUFBOztBQXBCakM7RUF3QkkseUJBQStCLEVBQUE7O0FBeEJuQztFQTRCSSxnQkFBZ0IsRUFBQTs7QUE1QnBCO0VBZ0NJLGNDZGtCO0VEZWxCLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFqQzdCO0VBcUNJLGNDaEJnQjtFRGlCaEIsZ0NBQXdCO1VBQXhCLHdCQUF3QixFQUFBOztBQXRDNUI7RUEwQ0ksY0NuQmdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9wYWNrYWdpbmctYmF0Y2gvZm9ybS9wYWNrYWdpbmctYmF0Y2gtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC52YWx1ZS1yZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC52YWx1ZS15ZWxsb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnZhbHVlLWdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC52YWx1ZS1ncmVlbixcclxuICAudmFsdWUtcmVkLFxyXG4gIC52YWx1ZS15ZWxsb3cge1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgfVxyXG5cclxuICAucmVkIHtcclxuICAgIGNvbG9yOiAkcmVkLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmdyZWVuIHtcclxuICAgIGNvbG9yOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWFuY2hvciB7XHJcbiAgICBwYWRkaW5nOiAwLjdlbSAwO1xyXG4gIH1cclxuXHJcbiAgLnByb2N1cmVtZW50LXR5cGUtLWluIHtcclxuICAgIGNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzIwZGVnKTtcclxuICB9XHJcblxyXG4gIC5wcm9jdXJlbWVudC10eXBlLS1vdXQge1xyXG4gICAgY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnByb2N1cmVtZW50LXR5cGUtLXRyYW5zZmVyIHtcclxuICAgIGNvbG9yOiAkYmx1ZS1kYXJrMTtcclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/logistics/packaging-batch/form/packaging-batch-form.component.ts':
      /*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/packaging-batch/form/packaging-batch-form.component.ts ***!
  \***************************************************************************************/
      /*! exports provided: PackagingBatchFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PackagingBatchFormComponent',
          function() {
            return PackagingBatchFormComponent;
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
        /* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/components/dynamic-attributes/dynamic-attributes.service */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.service.ts'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/constants/bido-attribute-constants */ './src/app/shared/constants/bido-attribute-constants.ts'
        );
        /* harmony import */ var _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/constants/bidt-stock-mvt-constants */ './src/app/shared/constants/bidt-stock-mvt-constants.ts'
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
        /* harmony import */ var _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/constants/lang-constants */ './src/app/shared/constants/lang-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/enums/table-column-filter-mode.enum */ './src/app/shared/enums/table-column-filter-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/enums/table-selection-mode.enum */ './src/app/shared/enums/table-selection-mode.enum.ts'
        );
        /* harmony import */ var _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/pipes/extract-translation.pipe */ './src/app/shared/pipes/extract-translation.pipe.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ../../../../shared/utils/bido-family-variant-utils */ './src/app/shared/utils/bido-family-variant-utils.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ../../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ../../../../shared/utils/select-item-utils */ './src/app/shared/utils/select-item-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _packaging_batch_form_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ./packaging-batch-form.service */ './src/app/main/logistics/packaging-batch/form/packaging-batch-form.service.ts'
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

        var PackagingBatchFormComponent = /** @class */ (function(_super) {
          __extends(PackagingBatchFormComponent, _super);
          function PackagingBatchFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            dateService,
            propertiesService,
            confirmationService,
            dynamicAttributesService,
            translateService,
            packagingBatchFormService,
            logisticsService,
            extractTranslationPipe
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.sessionService = sessionService;
            _this.dateService = dateService;
            _this.propertiesService = propertiesService;
            _this.confirmationService = confirmationService;
            _this.dynamicAttributesService = dynamicAttributesService;
            _this.translateService = translateService;
            _this.packagingBatchFormService = packagingBatchFormService;
            _this.logisticsService = logisticsService;
            _this.extractTranslationPipe = extractTranslationPipe;
            _this.TABLE_PAGINATION_DEFAULT_ROWS =
              _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__[
                'AppConstants'
              ].TABLE_PAGINATION_DEFAULT_ROWS;
            // Color
            _this.COLOR_NONE = '';
            _this.COLOR_RED = 'red';
            _this.COLOR_GREEN = 'green';
            _this.COLOR_YELLOW = 'yellow';
            _this.NOT_ACTIVATED = 'Not Activated';
            _this.initInput();
            _this.bidtStockMvtConstants =
              _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_8__['BidtStockMvtConstants'];
            _this.awPropertiesConstants =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants'];
            return _this;
          }
          PackagingBatchFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
              .LOG_PACKAGING_BATCH_FORM;
          };
          PackagingBatchFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.updateOpenMode(this.componentData.openMode);
            this.assetCode = !!this.componentData.objectId ? this.componentData.objectId : '';
            this.displayComponentContext(this.assetCode, this.isCreateOpenMode);
            this.init();
          };
          /******************************************************
           * init
           ******************************************************/
          PackagingBatchFormComponent.prototype.initInput = function() {
            this.equipment = {
              bidoEquipmentDTO: {},
              stockOutputDto: {},
              usageCounterCalculationDTO: {},
              superiorAsset: {},
              manufacturingBatch: {},
              superiorPackagingBatch: {}
            };
            this.mainInfo = {};
            this.bidoStockDisplayed = [];
            this.documents = [];
            this.fatherEquipment = {};
            this.stockMvtStatuses = [];
            this.stockMovementRows = [];
            this.documentsAdded = [];
            this.documentsUpdated = [];
            this.currentDocumentIndex = -1;
            this.addedDocumentIndex = -1;
            this.documentDialogOpenMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read;
            this.showAddDocumentDialog = false;
            this.eventAdded = [];
            this.procurementRequestTypes = [];
            this.transferTypeList = [];
          };
          PackagingBatchFormComponent.prototype.onSavedAsset = function() {
            this.eventAdded = [];
            this.documentsAdded = [];
            this.documents = [];
            this.documentsUpdated = [];
            this.documentTableDataSource.dataSelection = [];
            _super.prototype.updateOpenMode.call(
              this,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
            );
          };
          PackagingBatchFormComponent.prototype.init = function() {
            var _this = this;
            this.stockTableCols = [
              { field: 'code', alignment: 'left', width: '10%' },
              { field: 'stockMvtDate', alignment: 'left', width: '11%' },
              { field: 'stockMvtWay', alignment: 'left', width: '7%' },
              { field: 'mvtStatus', alignment: 'left', width: '12%' },
              { field: 'site', alignment: 'left', width: '25%' },
              { field: 'warehouse', alignment: 'left', width: '25%' },
              { field: 'document', alignment: 'left', width: '10%' }
            ];
            this.subAssemblyTableCols = [
              { field: 'batchNumber', alignment: 'left', width: '10%' },
              { field: 'quantity', alignment: 'left', width: '11%' },
              { field: 'creationDate', alignment: 'left', width: '11%' },
              { field: 'batchOriginQty', alignment: 'left', width: '11%' },
              { field: 'operationalStatus', alignment: 'left', width: '11%' },
              { field: 'zone', alignment: 'left', width: '11%' },
              { field: 'emp', alignment: 'left', width: '11%' }
            ];
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__['GenericPropertyConstants']
                  .PROCUREMENT_REQUEST_TYPE_MAP
              )
              .subscribe(function(res) {
                _this.procurementRequestTypes = res;
              });
            this.initInput();
            this.fillDropdown();
            this.loadDocumentTypes();
            this.initDocumentTableDataSource();
            this.loadEquipment();
            this.initAttributeValue();
            this.initStockMvtTable();
            this.loadStovkMvtStatuses();
            this.getShipmentTypeValue();
          };
          /******************************************************
           * Fill Dropdowns
           ******************************************************/
          PackagingBatchFormComponent.prototype.getShipmentTypeValue = function() {
            var _this = this;
            this.packagingBatchFormService.getShipmentDfTypes().subscribe(function(res) {
              _this.transferTypeList = res;
            });
          };
          PackagingBatchFormComponent.prototype.fillDropdown = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__['GenericPropertyConstants']
                  .BATCH_EQUIPMENT_STATUS_MAP
              )
              .subscribe(function(results) {
                _this.statusList = results;
              });
            this.packagingBatchFormService.getPositionMap().subscribe(
              function(results) {
                _this.propertyPositions = results;
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetPosition'));
              }
            );
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__['GenericPropertyConstants']
                  .MVT_STATUS_MAP
              )
              .subscribe(function(results) {
                _this.movementsStatusMap = !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_31__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
              });
            var bireId = {
              attributeId: _shared_constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_7__[
                'BidoAttributeConstants'
              ].ASSET_LOCATION.toString()
            };
            this.packagingBatchFormService.getAssetSourceSystemIdList(bireId).subscribe(
              function(results) {
                _this.propertyLocations = results;
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetLocation'));
              }
            );
            this.packagingBatchFormService.getEquipmentFunctionList().subscribe(
              function(results) {
                _this.allFunctions = results;
                var valueLabel = [];
                valueLabel = results;
                _this.propertyFunctions = valueLabel.filter(function(el) {
                  if (
                    el.value !==
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                        .FAMILY_FUNCTION_AIRCRAFT_KEY &&
                    el.value !==
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                        .FAMILY_FUNCTION_ENGINE_KEY &&
                    el.value !==
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                        .FAMILY_FUNCTION_TOOL_KEY
                  ) {
                    return el;
                  }
                });
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetFunction'));
              }
            );
          };
          PackagingBatchFormComponent.prototype.initAttributeValue = function() {
            var leafs = this.dynamicAttributesService.getLeafs(this.dynamicAttributes);
            leafs.forEach(function(attribute) {
              attribute.value = undefined;
            });
          };
          /******************************************************
           * Cancel, Edit and Reload
           ******************************************************/
          PackagingBatchFormComponent.prototype.cancelBatch = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
            );
            this.reloadBatch();
          };
          PackagingBatchFormComponent.prototype.editBatch = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Write
            );
          };
          PackagingBatchFormComponent.prototype.reloadBatch = function() {
            this.init();
          };
          /******************************************************
           * init Document table columns
           ******************************************************/
          PackagingBatchFormComponent.prototype.initDocumentTableDataSource = function() {
            this.documentTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'docName',
                  translateKey: this.getTranslateKey('docName')
                },
                {
                  field: 'docPublicationDate',
                  translateKey: this.getTranslateKey('docPublicationDate')
                },
                {
                  field: 'docEndOfValidityDate',
                  translateKey: this.getTranslateKey('docEndOfValidityDate')
                },
                {
                  field: 'docCategory',
                  translateKey: this.getTranslateKey('docCategory')
                },
                {
                  field: 'docDescription',
                  translateKey: this.getTranslateKey('docDescription')
                }
              ],
              data: []
            });
          };
          PackagingBatchFormComponent.prototype.isTool = function() {
            return false;
          };
          PackagingBatchFormComponent.prototype.isAircraft = function() {
            return false;
          };
          PackagingBatchFormComponent.prototype.isEngine = function() {
            return false;
          };
          // Documents
          PackagingBatchFormComponent.prototype.loadDocumentTypes = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__['GenericPropertyConstants']
                  .DOC_ASSET_CATEGORY_MAP
              )
              .subscribe(function(results) {
                _this.documentTypes = !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_31__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
              });
          };
          PackagingBatchFormComponent.prototype.getDynamicAttributesObservable = function(attributeCategory) {
            return this.packagingBatchFormService.findBidoAttributesByAttributeCategory(attributeCategory);
          };
          /******************************************************
           * Load Equipment Data with Attributes
           ******************************************************/
          PackagingBatchFormComponent.prototype.loadEquipment = function() {
            var _this = this;
            var observables = [];
            observables = [
              this.getDynamicAttributesObservable(
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .FM_ATTRIBUTE_CATEGORY_ALL_KEY
              ),
              this.getDynamicAttributesObservable(
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .FM_ATTRIBUTE_CATEGORY_ALL_ASSETS_KEY
              )
            ];
            if (!this.isEngine() && !this.isAircraft() && !this.isTool()) {
              observables.push(
                this.getDynamicAttributesObservable(
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                    .FM_ATTRIBUTE_CATEGORY_EQUIPMENT_KEY
                )
              );
            }
            if (this.isEngine() && !this.isAircraft() && !this.isTool()) {
              observables.push(
                this.getDynamicAttributesObservable(
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                    .FM_ATTRIBUTE_CATEGORY_ENGINE_KEY
                )
              );
            }
            if (this.isAircraft() && !this.isEngine() && !this.isTool()) {
              observables.push(
                this.getDynamicAttributesObservable(
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                    .FM_ATTRIBUTE_CATEGORY_AIRCRAFT_KEY
                )
              );
            }
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])(observables).subscribe(
              function(results) {
                if (results) {
                  var filteredAttributesList_1 = [];
                  results.forEach(function(element) {
                    var innerElements = element.filter(function(element2) {
                      return (
                        element2.attributeId !==
                          _shared_constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_7__[
                            'BidoAttributeConstants'
                          ].ITEM_NUMBER.toString() &&
                        element2.attributeId !==
                          _shared_constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_7__[
                            'BidoAttributeConstants'
                          ].SAP_EQUIPMENT_CODE.toString() &&
                        element2.attributeId !==
                          _shared_constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_7__[
                            'BidoAttributeConstants'
                          ].ASSET_LOCATION.toString()
                      );
                    });
                    filteredAttributesList_1.push(innerElements);
                  });
                  var flattenResults = filteredAttributesList_1.reduce(function(acc, val) {
                    return acc.concat(val);
                  }, []);
                  flattenResults = _this.sortAttributes(flattenResults);
                  _this.dynamicAttributes = _this.dynamicAttributesService.from(flattenResults);
                  if (!!_this.assetCode) {
                    var assetId = {
                      bidoEquipmentDTOId: {
                        equipmentCode: _this.assetCode
                      },
                      assetfunction: ' '
                    };
                    _this.packagingBatchFormService.findBidoEquipmentAlternative(assetId).subscribe(
                      function(result) {
                        if (result) {
                          _this.equipment = __assign({}, result);
                          if (_this.equipment && _this.equipment.bidoEquipmentDTO) {
                            _this.loadSubAssemblies();
                            _this.equipment.bidoEquipmentDTO.quantity = _this.equipment.bidoEquipmentDTO.quantity
                              ? Math.trunc(_this.equipment.bidoEquipmentDTO.quantity)
                              : undefined;
                            if (_this.componentData) {
                              if (!_this.isAircraft() && !_this.isEngine()) {
                                _this.context = [
                                  _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__['StringUtils'].isNullOrEmpty(
                                    _this.equipment.bidoEquipmentDTO.pnCode
                                  )
                                    ? ''
                                    : 'P/N ' + _this.equipment.bidoEquipmentDTO.pnCode,
                                  _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__['StringUtils'].isNullOrEmpty(
                                    _this.equipment.bidoEquipmentDTO.sn
                                  )
                                    ? ''
                                    : 'S/N ' + _this.equipment.bidoEquipmentDTO.sn
                                ]
                                  .filter(function(s) {
                                    return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__[
                                      'StringUtils'
                                    ].isEmpty(s);
                                  })
                                  .join(' | ');
                              }
                              // Displaying description along with context
                              if (!!_this.equipment.bidoEquipmentDTO.equipmentDesignation) {
                                _this.context = [
                                  _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__['StringUtils'].isNullOrEmpty(
                                    _this.context
                                  )
                                    ? ''
                                    : _this.context,
                                  _this.equipment.bidoEquipmentDTO.equipmentDesignation
                                ]
                                  .filter(function(s) {
                                    return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__[
                                      'StringUtils'
                                    ].isEmpty(s);
                                  })
                                  .join(' | ');
                              }
                              _this.displayComponentContext(_this.context, _this.isCreateOpenMode);
                            }
                            if (!!_this.equipment.superiorAsset) {
                              _this.fatherEquipment = _this.equipment.superiorAsset;
                            }
                            _this.ownerCustomerName = _this.equipment.ownerCustomerName;
                            _this.equipment.bidoEquipmentDTO.equipmentFunction = !!_this.equipment.bidoEquipmentDTO
                              .equipmentFunction
                              ? _this.equipment.bidoEquipmentDTO.equipmentFunction
                              : undefined;
                            _this.operatorCustomerName = _this.equipment.operatorCustomerName;
                            _this.loadStocks();
                            _this.loadStockMvtMatMgmtFull();
                            _this.loadDocuments();
                            if (!!_this.equipment.bidoEquipmentDTO.bidoEquipmentAttributeList) {
                              var locationData = _this.equipment.bidoEquipmentDTO.bidoEquipmentAttributeList.filter(
                                function(el) {
                                  if (
                                    el.attributeId ===
                                    _shared_constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_7__[
                                      'BidoAttributeConstants'
                                    ].ASSET_LOCATION.toString()
                                  ) {
                                    return el;
                                  }
                                }
                              );
                              _this.locationValue = !!locationData[0] ? locationData[0].attributeValue : undefined;
                              _this.dynamicAttributesService.setValues(
                                _this.dynamicAttributes,
                                _this.equipment.bidoEquipmentDTO.bidoEquipmentAttributeList
                              );
                            }
                          }
                          _this.getBatchReference();
                          _this.loadExpirationDate();
                        }
                        if (!!_this.equipment.modelCode && !!_this.equipment.modelName) {
                          _this.equipmentModelCodeAndName =
                            _this.equipment.modelCode + ' - ' + _this.equipment.modelName;
                        }
                        if (!!_this.equipment.ratingCode && !!_this.equipment.ratingName) {
                          _this.equipmentRatingCodeAndName =
                            _this.equipment.ratingCode + ' - ' + _this.equipment.ratingName;
                        }
                        _this.openHistoricAttributes();
                      },
                      function(err) {
                        _this.messageService.showErrorMessage(err.error.errorDetail);
                      }
                    );
                  }
                }
              },
              function(err) {
                _this.messageService.showErrorMessage(err.error.errorDetail);
              }
            );
          };
          PackagingBatchFormComponent.prototype.loadExpirationDate = function() {
            var _this = this;
            this.logisticsService
              .findBidoEquipmentCounter({
                equipmentCode: this.assetCode,
                counterCode:
                  _shared_constants_bire_measure_reference_constants__WEBPACK_IMPORTED_MODULE_9__[
                    'BireMeasureReferenceConstants'
                  ].BIRE_MEASURE_REFERENCE_COUNTER_CODE_CALENDAR_LIMIT,
                familyCode: _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_28__[
                  'BidoFamilyVariantUtils'
                ].getFamilyCodeFromFamilyVariantCode(this.equipment.bidoEquipmentDTO.familyVariantCode),
                ratingCode:
                  _shared_constants_bire_rating_constants__WEBPACK_IMPORTED_MODULE_10__['BireRatingConstants'].DEFAULT
              })
              .subscribe(function(bidoEquipmentCounter) {
                if (bidoEquipmentCounter) {
                  _this.mainInfo.expirationDate = bidoEquipmentCounter.dateLimit;
                }
              });
          };
          PackagingBatchFormComponent.prototype.loadStockMvtMatMgmtFull = function() {
            var _this = this;
            if (
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                .MM_FULL_MODULE_ACTIVATED
            ) {
              this.stockMvtTableDataSource.setData([]);
              var equipMentCode = {
                equipmentCode: this.assetCode
              };
              this.packagingBatchFormService.findBidtStockMvtMmf(equipMentCode).subscribe(function(results) {
                if (!!results) {
                  if (!!results) {
                    if (!!results.bidtStockMvts) {
                      if (!!results.bidtStockInfoList[0].birePnDTO) {
                        _this.packagingBatchUnit = results.bidtStockInfoList[0].birePnDTO.quantityUnit;
                      }
                      results.bidtStockInfoList.forEach(function(movement) {
                        var movementRow = {
                          stockMvtCode: movement.stockMvt.stockMvtCode,
                          bidtStockMvtType: movement.stockMvt.bidtStockMvtType,
                          siteName: movement.site ? movement.site.siteCode + ' - ' + movement.site.siteName : undefined,
                          warehousename: movement.warehouse
                            ? movement.warehouse.whCode + ' - ' + movement.warehouse.whName
                            : undefined,
                          bidtStorageBinZoneIssue: movement.stockMvt.bidtStorageBinZoneIssue,
                          bidtStorageBinBinIssue: movement.stockMvt.bidtStorageBinBinIssue,
                          bidtStorageBinZoneReceipt: movement.stockMvt.bidtStorageBinZoneReceipt,
                          bidtStorageBinBinReceipt: movement.stockMvt.bidtStorageBinBinReceipt,
                          smoStatus: _this.getMvtStockStatus(movement.stockMvt.mvtStatus),
                          documentNum: movement.procurementRequest
                            ? movement.procurementRequest.procCode
                            : movement.transferOrder
                            ? movement.transferOrder.torCode
                            : movement.deliveryFolder
                            ? movement.deliveryFolder.dfCode
                            : undefined,
                          documentDescription: movement.procurementRequest
                            ? _this.getProcTypeDescription(movement.procurementRequest.procType || '')
                            : movement.transferOrder
                            ? _this.getTransferTypeDescription(movement.transferOrder.torType || '')
                            : movement.deliveryFolder
                            ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__['StringUtils'].orEmpty(
                                _this.extractTranslationPipe.transform(
                                  movement.deliveryFolder.bidtDfType.dftDesignation
                                )
                              )
                            : undefined,
                          statusDate: movement.stockMvt.statusDate,
                          _bidtSiteReceipt: movement.site,
                          _bidtWarehouseReceipt: movement.warehouse,
                          _procurementRequest: movement.procurementRequest,
                          _transferOrder: movement.transferOrder,
                          _deliveryFolder: movement.deliveryFolder,
                          _stockMvt: movement.stockMvt
                        };
                        _this.stockMovementRows.push(movementRow);
                      });
                      _this.stockMvtTableDataSource.setData(__spread(_this.stockMovementRows));
                    }
                    if (!!results.stockInformation) {
                      _this.equipment.stockOutputDto.site = results.stockInformation.siteText;
                      _this.equipment.stockOutputDto.warehouse = results.stockInformation.warehouseText;
                      _this.equipment.stockOutputDto.storageBin = results.stockInformation.storageBinText;
                      _this.areaText = results.stockInformation.areaText;
                    }
                  }
                }
              });
            }
          };
          PackagingBatchFormComponent.prototype.getProcTypeDescription = function(typeCode) {
            var typeValue = this.procurementRequestTypes.find(function(type) {
              return type.value === typeCode;
            });
            return typeValue ? typeValue.label : typeCode;
          };
          PackagingBatchFormComponent.prototype.getTransferTypeDescription = function(typeCode) {
            var typeValue = this.transferTypeList.find(function(type) {
              return (type.id && type.id.toString()) === typeCode;
            });
            return typeValue
              ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__['StringUtils'].orEmpty(
                  this.extractTranslationPipe.transform(typeValue.dftDesignation)
                )
              : typeCode;
          };
          PackagingBatchFormComponent.prototype.openDocOrigine = function(movementRow) {
            if (movementRow._procurementRequest) {
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                    .LOG_PROCUREMENT_REQUEST_FORM,
                objectId: this.serializationService.serialize({ id: movementRow._procurementRequest.id }),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            } else if (movementRow._transferOrder) {
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                    .LOG_TRANSFER_ORDER_FORM,
                objectId: this.serializationService.serialize(movementRow._transferOrder.id),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            } else if (movementRow._deliveryFolder) {
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                    .LOG_GOODS_RECEIPT_FORM,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read,
                objectId: this.serializationService.serialize({ id: movementRow._deliveryFolder.id })
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          PackagingBatchFormComponent.prototype.getMvtStockStatus = function(key) {
            return this.movementsStatusMap.filter(function(status) {
              return status.value === key;
            })[0];
          };
          PackagingBatchFormComponent.prototype.initStockMvtTable = function() {
            this.stockMvtTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__[
              'TableDataSource'
            ]({
              enableSelection: false,
              columns: [
                { field: 'movement', translateKey: this.getTranslateKey('movement'), width: '12.5%' },
                {
                  field: 'type',
                  translateKey: this.getTranslateKey('type'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__['ColumnAlignment'].CENTER,
                  width: '5%'
                },
                { field: 'warehouseWorkshop', translateKey: this.getTranslateKey('warehouseWorkshop'), width: '20%' },
                { field: 'outbound', translateKey: this.getTranslateKey('outbound'), width: '17.5%' },
                { field: 'inbound', translateKey: this.getTranslateKey('inbound'), width: '17.5%' },
                { field: 'status', translateKey: this.getTranslateKey('status'), width: '12.5%' },
                { field: 'document', translateKey: this.getTranslateKey('document'), width: '15%' }
              ],
              data: []
            });
          };
          PackagingBatchFormComponent.prototype.getBatchReference = function() {
            var _this = this;
            if (
              !this.equipment.manufacturingBatch &&
              this.equipment.superiorPackagingBatch &&
              this.equipment.superiorPackagingBatch.equipmentCode
            ) {
              this.packagingBatchFormService
                .getTopManufacturingBatch(this.equipment.superiorPackagingBatch.equipmentCode)
                .subscribe(function(manufacturingBatch) {
                  _this.equipment.manufacturingBatch = manufacturingBatch;
                });
            }
          };
          /******************************************************
           * Attributes
           ******************************************************/
          PackagingBatchFormComponent.prototype.sortAttributes = function(attributes) {
            var _this = this;
            return attributes.sort(function(attr1, attr2) {
              var attrLabel1 = _this.getAttributeLabel(attr1);
              var attrLabel2 = _this.getAttributeLabel(attr2);
              if (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__['StringUtils'].isNullOrEmpty(attrLabel1)) {
                return 1;
              }
              if (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__['StringUtils'].isNullOrEmpty(attrLabel2)) {
                return 1;
              }
              return attrLabel1.localeCompare(attrLabel2);
            });
          };
          PackagingBatchFormComponent.prototype.getAttributeLabel = function(attribute) {
            switch (this.translateService.currentLang) {
              case _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_13__['LangConstants'].ENGLISH_CODE:
                return !!attribute.attributeNameEn ? attribute.attributeNameEn : '';
              case _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_13__['LangConstants'].FRENCH_CODE:
                return !!attribute.attributeNameFr ? attribute.attributeNameFr : '';
              default:
                return '';
            }
          };
          /******************************************************
           * Load Stocks Table
           ******************************************************/
          PackagingBatchFormComponent.prototype.loadStocks = function() {
            if (
              !_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                .MM_FULL_MODULE_ACTIVATED
            ) {
              if (!!this.equipment.stockOutputDto && !!this.bidoStockDisplayed) {
                this.bidoStockDisplayed = this.equipment.stockOutputDto.stockTableDtos;
              }
            }
          };
          PackagingBatchFormComponent.prototype.openStockMovement = function(rowData) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .LOG_STOCK_MOVEMENT_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
            };
            var inputObject = {
              id: rowData._stockMvt && rowData._stockMvt.id,
              bidtProcReqItemId: rowData._stockMvt && rowData._stockMvt.bidtProcReqItemId
            };
            data.objectId = this.serializationService.serialize(inputObject);
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /******************************************************
           * Load Documents Table
           ******************************************************/
          PackagingBatchFormComponent.prototype.loadDocuments = function() {
            var _this = this;
            this.documentTableDataSource.setData([]);
            if (!!this.equipment.bidoDocumentationTableOutputDTOs) {
              this.documents = this.equipment.bidoDocumentationTableOutputDTOs;
              this.equipment.bidoDocumentationTableOutputDTOs.forEach(function(doc) {
                if (!!doc.bidoDocumentationDTO) {
                  var selectedDocumentType = _this.documentTypes.find(function(documentType) {
                    return (
                      !!doc.bidoDocumentationDTO &&
                      !!doc.bidoDocumentationDTO.docCategory &&
                      documentType.value === doc.bidoDocumentationDTO.docCategory
                    );
                  });
                  var newDoc = {
                    docExtension: _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_29__['FileUtils']
                      .getExtension(doc.bidoDocumentationDTO.docName)
                      .toUpperCase(),
                    docName: doc.bidoDocumentationDTO.docName,
                    docPublicationDate: _this.dateService.dateToString(doc.bidoDocumentationDTO.docPublicationDate),
                    docDescription: doc.bidoDocumentationDTO.docDescription,
                    docEndOfValidityDate: _this.dateService.dateToString(doc.bidoDocumentationDTO.docEndOfValidityDate),
                    docCategory: !!selectedDocumentType
                      ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__['StringUtils'].orEmpty(
                          selectedDocumentType.label
                        )
                      : '',
                    docCode: doc.bidoDocumentationDTO.docCode,
                    _obj: doc.bidoDocumentationDTO
                  };
                  _this.documentTableDataSource.addData([newDoc]);
                }
              });
            }
          };
          /******************************************************
           * Historic Attributes
           ******************************************************/
          PackagingBatchFormComponent.prototype.openHistoricAttributes = function() {
            if (
              !!this.equipment &&
              this.equipment.bidoEquipmentDTO &&
              !!this.equipment.bidoEquipmentDTO.equipmentCode
            ) {
              var attributeIds = this.dynamicAttributesService.toBireEquipmentAttributeId(
                this.equipment.bidoEquipmentDTO.equipmentCode,
                this.dynamicAttributes
              );
              this.dynamicAttributesHistoric = this.packagingBatchFormService.findHBidoEquipmentAttributesByAttributeId(
                attributeIds
              );
            }
          };
          PackagingBatchFormComponent.prototype.loadSubAssemblies = function() {
            var _this = this;
            if (!!this.equipment.bidoEquipmentDTO.equipmentCode) {
              this.subAssemblyTableData = [];
              this.packagingBatchFormService
                .findSubBatches(this.equipment.bidoEquipmentDTO.equipmentCode)
                .subscribe(function(result) {
                  if (result && result.length) {
                    _this.mapSubBatchResult(result);
                    _this.subAssemblyTableData.sort(function(a, b) {
                      if (!!a.batchNumber && !!b.batchNumber && a.batchNumber > b.batchNumber) {
                        return 1;
                      }
                      if (!!a.batchNumber && !!b.batchNumber && a.batchNumber < b.batchNumber) {
                        return -1;
                      }
                      return 0;
                    });
                  }
                });
            }
          };
          PackagingBatchFormComponent.prototype.mapSubBatchResult = function(result) {
            var _this = this;
            result.forEach(function(element) {
              _this.packagingBatchFormService.getStockInformationByAsset(element).subscribe(function(stockInfo) {
                var subAssemblyObj = {
                  equipmentCode: element.equipmentCode,
                  batchNumber: element.batchNumber,
                  quantity: element.quantity,
                  creationDate: element.manufacturingDate,
                  operationalStatus: element.operationalStatus,
                  zone: stockInfo.storageBinText,
                  location: stockInfo.areaText,
                  zoneId: stockInfo.storageBinId,
                  locationId: stockInfo.areaId,
                  batchOriginQty: Number(_this.equipment.bidoEquipmentDTO.quantity) + Number(element.quantity)
                };
                _this.subAssemblyTableData.push(subAssemblyObj);
              });
            });
          };
          PackagingBatchFormComponent.prototype.openPackagingBatch = function(equipmentCode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .LOG_PACKAGING_BATCH_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read,
              objectId: equipmentCode
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          PackagingBatchFormComponent.prototype.openMfgBatch = function(objectId) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                  .LOG_MANUFACTURING_BATCH_FORM,
              objectId: objectId ? this.serializationService.serialize({ customerCode: objectId }) : undefined,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          PackagingBatchFormComponent.prototype.toggleRowDetailsVisibilityStock = function(rowData) {
            rowData._expand = !rowData._expand;
          };
          PackagingBatchFormComponent.prototype.createStockMovement = function() {
            // TODO
          };
          /******************************************************
           * Open Work Order UC
           ******************************************************/
          PackagingBatchFormComponent.prototype.onClickDocument = function(row) {
            if (row.projectId && row.woId) {
              var objectId = {
                projectId: row.projectId,
                woId: row.woId
              };
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__['ComponentConstants']
                    .MAI_WORK_ORDER_FORM,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Write,
                objectId: this.serializationService.serialize(objectId)
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            } else {
              // TODO: open either purchase request or sales request
            }
          };
          /******************************************************
           * Search Owners
           ******************************************************/
          PackagingBatchFormComponent.prototype.searchOwners = function() {
            this.showDialogOwner = true;
            var itemCol = [
              { field: 'customerCode', alignment: 'left' },
              { field: 'customerName', alignment: 'left' }
            ];
            var bire = {
              isOwner: true,
              isOperator: false
            };
            this.dialogTableDataOwner = {
              componentId: 'PartnerPopupDialog',
              tableCols: itemCol,
              tableRows: this.packagingBatchFormService.findBidoCustomersBySearchCriteria(bire),
              dataKey: undefined,
              selectionMode:
                _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_16__['TableSelectionMode'].Single,
              globalFilter: true
            };
          };
          PackagingBatchFormComponent.prototype.setSelectedOwner = function(selectedObject) {
            if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
              if (selectedObject) {
                this.equipment.bidoEquipmentDTO.ownerCustomerCode = selectedObject.customerCode;
                this.ownerCustomerName = selectedObject.customerName;
              }
              this.showDialogOwner = false;
            }
          };
          /******************************************************
           * Search operators
           ******************************************************/
          PackagingBatchFormComponent.prototype.searchOperators = function() {
            this.showDialogOperator = true;
            var itemCol = [
              { field: 'customerCode', alignment: 'left' },
              { field: 'customerName', alignment: 'left' }
            ];
            var bire = {
              isOwner: false,
              isOperator: true
            };
            this.dialogTableDataOperator = {
              componentId: 'PartnerPopupDialog',
              tableCols: itemCol,
              tableRows: this.packagingBatchFormService.findBidoCustomersBySearchCriteria(bire),
              dataKey: undefined,
              selectionMode:
                _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_16__['TableSelectionMode'].Single,
              globalFilter: true
            };
          };
          PackagingBatchFormComponent.prototype.setSelectedOperator = function(selectedObject) {
            if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
              if (selectedObject) {
                this.equipment.bidoEquipmentDTO.operatorCustomerCode = selectedObject.customerCode;
                this.operatorCustomerName = selectedObject.customerName;
              }
              this.showDialogOwner = false;
            }
          };
          PackagingBatchFormComponent.prototype.openItemTableDialog = function() {
            if (!!this.equipment.bidoEquipmentDTO.familyVariantCode) {
              this.initItemTableData();
              this.showItemTableDialog = true;
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('familyVariantMissing'));
            }
          };
          /******************************************************
           * Item Table Data
           ******************************************************/
          PackagingBatchFormComponent.prototype.initItemTableData = function() {
            var itemTableCols = [
              {
                field: 'familyCode',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_15__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'variantCode',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_15__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'designation',
                alignment: 'left',
                width: '30%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_15__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'chapter',
                alignment: 'left',
                width: '5%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_15__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'section',
                alignment: 'left',
                width: '5%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_15__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'subject',
                alignment: 'left',
                width: '5%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_15__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'sheet',
                alignment: 'left',
                width: '5%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_15__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'marks',
                alignment: 'left',
                width: '5%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_15__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'itemNumber',
                alignment: 'left',
                width: '10%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_15__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'functionCode',
                alignment: 'left',
                width: '15%',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_15__['TableColumnFilterMode']
                    .Input
              }
            ];
            if (!!this.equipment && !!this.equipment.bidoEquipmentDTO.familyVariantCode) {
              var familyTab = this.equipment.bidoEquipmentDTO.familyVariantCode.split('-');
              var params = {
                bireItemDTOCriteria: {
                  familyCode: familyTab[0],
                  structureType:
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                      .STRUCTURE_TYPE_IPC_KEY,
                  variantCode: familyTab[1]
                },
                pnCode: this.equipment.bidoEquipmentDTO.pnCode
              };
              this.itemTableData = {
                componentId: 'DialogItem',
                tableCols: itemTableCols,
                tableRows: this.packagingBatchFormService.findBireItemsBySearchCriteria(params),
                dataKey: undefined,
                selectionMode:
                  _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_16__['TableSelectionMode'].Single,
                globalFilter: true
              };
            } else {
              _super.prototype.throwUnboundLocalError.call(
                this,
                'initItemTableData',
                'this.familyCode && this.structureType && this.variantCode'
              );
            }
          };
          PackagingBatchFormComponent.prototype.setSelectedItems = function(selectedObject) {
            if (!!this.equipment && !!this.equipment.bidoEquipmentDTO) {
              if (selectedObject) {
                var familyCode = selectedObject.familyCode;
                var variantCode = selectedObject.variantCode;
                this.equipment.bidoEquipmentDTO.familyVariantCode = familyCode + '-' + variantCode;
                this.equipment.bidoEquipmentDTO.section = selectedObject.section;
                this.equipment.bidoEquipmentDTO.marks = selectedObject.marks;
                this.equipment.bidoEquipmentDTO.chapter = selectedObject.chapter;
                this.equipment.bidoEquipmentDTO.sheet = selectedObject.sheet;
                this.equipment.bidoEquipmentDTO.subject = selectedObject.subject;
                this.equipment.bidoEquipmentDTO.statusDate = selectedObject.statusDate;
                this.equipment.bidoEquipmentDTO.statusUser = selectedObject.statusUser;
                this.equipment.bidoEquipmentDTO.statusState = selectedObject.statusState;
                this.equipment.itemNumber = selectedObject.itemNumber;
                this.equipment.bidoEquipmentDTO.equipmentDesignation = selectedObject.name;
                this.equipment.bidoEquipmentDTO.functionCode = selectedObject.functionCode;
              }
            }
          };
          PackagingBatchFormComponent.prototype.searchGeoLocation = function() {
            // TODO
          };
          PackagingBatchFormComponent.prototype.showAddUpdatePopup = function() {
            this.subAssemblyPopupObject = {};
            if (this.subAssemblyTableData && this.subAssemblyTableData.length) {
              var assemblyObject = this.subAssemblyTableData[this.subAssemblyTableData.length - 1];
              this.subAssemblyPopupObject.batchNumber = assemblyObject.batchNumber || '';
            } else {
              this.subAssemblyPopupObject.batchNumber = this.equipment.bidoEquipmentDTO.batchNumber;
            }
            this.subAssemblyPopupObject.statusUser = this.equipment.ownerCustomerName;
            this.subAssemblyPopupObject.quantity = 0;
            this.openAddUpdatedialog = true;
          };
          PackagingBatchFormComponent.prototype.updateSubAssembly = function(subAssemblyObject) {
            var _this = this;
            var bidoEquipmentObject = __assign({}, this.equipment.bidoEquipmentDTO);
            bidoEquipmentObject.equEquipmentCode = bidoEquipmentObject.equipmentCode;
            bidoEquipmentObject.quantity = subAssemblyObject.quantity;
            bidoEquipmentObject.batchNumber = subAssemblyObject.batchNumber;
            bidoEquipmentObject.operationalStatus = subAssemblyObject.batchNumber;
            bidoEquipmentObject.operationalStatus = subAssemblyObject.operationalStatus;
            bidoEquipmentObject.manufacturingDate = subAssemblyObject.creationDate;
            bidoEquipmentObject.statusUser = subAssemblyObject.statusUser;
            bidoEquipmentObject.equipmentCode = undefined;
            this.packagingBatchFormService.addOrUpdateBatch(bidoEquipmentObject).subscribe(function() {
              _this.loadSubAssemblies();
              _this.reloadBatch();
              _this.openAddUpdatedialog = false;
            });
          };
          PackagingBatchFormComponent.prototype.saveBatch = function() {
            var _this = this;
            if (this.isCreateOpenMode) {
              this.logisticsService.addOrUpdateBatch(this.equipment.bidoEquipmentDTO).subscribe({
                next: function(equipmentValue) {
                  _this.updateOpenMode(
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
                  );
                }
              });
            } else {
              this.updateAsset();
            }
          };
          PackagingBatchFormComponent.prototype.loadStovkMvtStatuses = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__['GenericPropertyConstants']
                  .MVT_STATUS_MAP
              )
              .subscribe({
                next: function(stockMvtStatuses) {
                  _this.stockMvtStatuses = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_30__['ListUtils'].orEmpty(
                    stockMvtStatuses
                  );
                }
              });
          };
          PackagingBatchFormComponent.prototype.onCancel = function() {
            _super.prototype.updateOpenMode.call(
              this,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read
            );
            this.reloadBatch();
          };
          PackagingBatchFormComponent.prototype.updateAsset = function() {
            var _this = this;
            if (!!this.equipment.bidoEquipmentDTO.equipmentCode) {
              this.equipment.bidoEquipmentAttributeDTOList = this.dynamicAttributesService.toBidoEquipmentAttribute(
                this.equipment.bidoEquipmentDTO.equipmentCode,
                this.dynamicAttributes
              );
              var object = {
                attributeId: _shared_constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_7__[
                  'BidoAttributeConstants'
                ].ASSET_LOCATION.toString(),
                equipmentCode: this.equipment.bidoEquipmentDTO.equipmentCode,
                attributeValue: this.locationValue
              };
              this.equipment.bidoEquipmentAttributeDTOList.push(object);
            }
            var assetOutputDto = {
              bidoEquipmentDTO: this.equipment.bidoEquipmentDTO,
              createBidoDocumentationTableOutputDTOs: this.documentsAdded,
              updateBidoDocumentationTableOutputDTOs: this.documentsUpdated,
              removeBidoDocumentationId: this.equipment.removeBidoDocumentationId,
              stockOutputDto: {},
              usageCounterCalculationDTO: {},
              superiorAsset: {},
              bidoEquipmentAttributeDTOList: this.equipment.bidoEquipmentAttributeDTOList,
              itemNumber: this.equipment.itemNumber,
              modelCode: this.equipment.modelCode,
              modelName: this.equipment.modelName,
              ratingCode: this.equipment.ratingCode,
              ratingName: this.equipment.ratingName
            };
            var bidoNotificationDTO = this.eventAdded;
            this.showSaveSpinner = true;
            this.logisticsService.updateAsset(assetOutputDto).subscribe(
              function() {
                _this.onSavedAsset();
                _this.createBidoNotification(bidoNotificationDTO);
                _this.reloadBatch();
                _this.messageService.showSuccessMessage('global.successOnSave');
                _this.showSaveSpinner = false;
              },
              function(err) {
                _this.messageService.showErrorMessage(err.error.errorDesc);
                _this.showSaveSpinner = false;
              }
            );
          };
          PackagingBatchFormComponent.prototype.createBidoNotification = function(bidoNotificationDTO) {
            var _this = this;
            this.logisticsService.createBidoNotification(bidoNotificationDTO).subscribe(function() {
              _this.onSavedAsset();
            });
          };
          PackagingBatchFormComponent.prototype.deleteDocuments = function() {
            var _this = this;
            var partialMessageKey =
              this.documentTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedDocuments'
                : 'confirmDeleteSelectedDocument';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                var temp = [];
                _this.documentTableDataSource.dataSelection.forEach(function(data) {
                  if (!!data && !!data._obj && !!data._obj.docCode) {
                    var codeId = {
                      docCode: data._obj.docCode
                    };
                    temp.push(codeId);
                  }
                });
                _this.equipment.removeBidoDocumentationId = temp;
                _this.documentTableDataSource.setData(
                  _this.documentTableDataSource.dataSrc.filter(function(data) {
                    return !_this.documentTableDataSource.dataSelection.some(function(row) {
                      return data.docName === row.docName;
                    });
                  })
                );
                _this.documents = _this.documents.filter(function(data) {
                  return !_this.documentTableDataSource.dataSelection.some(function(row) {
                    return !!data.bidoDocumentationDTO && data.bidoDocumentationDTO.docName === row.docName;
                  });
                });
                _this.documentsAdded = _this.documentsAdded.filter(function(data) {
                  return !_this.documentTableDataSource.dataSelection.some(function(row) {
                    return !!data.bidoDocumentationDTO && data.bidoDocumentationDTO.docName === row.docName;
                  });
                });
                _this.documentsUpdated = _this.documentsUpdated.filter(function(data) {
                  return !_this.documentTableDataSource.dataSelection.some(function(row) {
                    return !!data.bidoDocumentationDTO && data.bidoDocumentationDTO.docName === row.docName;
                  });
                });
                _this.documentTableDataSource.dataSelection = [];
              }
            });
          };
          PackagingBatchFormComponent.prototype.uploadDocument = function(event, fileUploader) {
            var _this = this;
            var flag = false;
            if (!!event.files) {
              var file_1 = event.files[0];
              this.documents.forEach(function(document) {
                if (!!document.bidoDocumentationDTO) {
                  if (document.bidoDocumentationDTO.docName === file_1.name) {
                    flag = true;
                  }
                }
              });
              if (flag) {
                this.messageService.showWarningMessage('global.warningOnFileExists');
              } else {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_29__['FileUtils'].getFileContentAsBase64(
                  file_1,
                  function(fileContent) {
                    var fileNameParts = file_1.name && file_1.name.includes('.') ? file_1.name.split('.') : [];
                    var docType =
                      fileNameParts.length > 0 ? fileNameParts[fileNameParts.length - 1].toUpperCase() : undefined;
                    if (!!fileContent) {
                      var document_1 = {
                        docType: docType,
                        docFile: fileContent,
                        docName: file_1.name,
                        docPublicationDate: new Date(),
                        equipmentCode: _this.equipment.bidoEquipmentDTO.equipmentCode
                      };
                      var bidoDoc = {
                        bidoDocumentationDTO: document_1
                      };
                      _this.documents = __spread(_this.documents, [bidoDoc]);
                      _this.documentsAdded = __spread(_this.documentsAdded, [bidoDoc]);
                      _this.documentTableDataSource.addData([_this.addData(document_1)]);
                    }
                  }
                );
              }
              fileUploader.clear();
            }
          };
          PackagingBatchFormComponent.prototype.openDocument = function() {
            if (this.documentTableDataSource.dataSelectionCount === 1) {
              this.currentDocumentIndex = -1;
              this.addedDocumentIndex = -1;
              this.currentDocument = this.documentTableDataSource.dataSelection[0]._obj;
              this.documentDialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Read;
              this.showAddDocumentDialog = true;
            }
          };
          PackagingBatchFormComponent.prototype.editDocument = function() {
            var _this = this;
            if (this.documentTableDataSource.dataSelectionCount === 1) {
              this.currentDocumentIndex = this.documents.findIndex(function(list) {
                return (
                  !!list.bidoDocumentationDTO &&
                  !!_this.documentTableDataSource.dataSelection[0].docName &&
                  list.bidoDocumentationDTO.docName === _this.documentTableDataSource.dataSelection[0].docName
                );
              });
              this.addedDocumentIndex = this.documentsAdded.findIndex(function(list) {
                return (
                  !!list.bidoDocumentationDTO &&
                  !!_this.documentTableDataSource.dataSelection[0].docName &&
                  list.bidoDocumentationDTO.docName === _this.documentTableDataSource.dataSelection[0].docName
                );
              });
              this.currentDocument = __assign({}, this.documentTableDataSource.dataSelection[0]._obj);
              this.documentDialogOpenMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__['ComponentOpenMode'].Write;
              this.showAddDocumentDialog = true;
            }
          };
          PackagingBatchFormComponent.prototype.addData = function(newDocument) {
            var selectedDocumentType = this.documentTypes.find(function(documentType) {
              return !!newDocument.docCategory && documentType.value === newDocument.docCategory;
            });
            var row = {
              docName: newDocument.docName,
              docDescription: newDocument.docDescription,
              docCategory: !!selectedDocumentType
                ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__['StringUtils'].orEmpty(
                    selectedDocumentType.label
                  )
                : '',
              docPublicationDate: this.dateService.dateToString(newDocument.docPublicationDate),
              docEndOfValidityDate: this.dateService.dateToString(newDocument.docEndOfValidityDate),
              _obj: newDocument
            };
            return row;
          };
          PackagingBatchFormComponent.prototype.addNewDocument = function(newDocument) {
            var _this = this;
            var bidoDoc = {
              bidoDocumentationDTO: newDocument
            };
            var fileExists = true;
            if (!!newDocument) {
              this.documentTableDataSource.dataSrc.forEach(function(doc, i) {
                if (doc.docName === newDocument.docName) {
                  if (_this.currentDocumentIndex === i) {
                    fileExists = true;
                  } else {
                    fileExists = false;
                    _this.messageService.showWarningMessage('global.warningOnFileExists');
                  }
                }
              });
              if (fileExists) {
                if (this.currentDocumentIndex !== -1) {
                  this.documents[this.currentDocumentIndex] = bidoDoc;
                  this.documentTableDataSource.replaceData(
                    this.documentTableDataSource.dataSrc[this.currentDocumentIndex],
                    this.addData(newDocument)
                  );
                  var updatedDocumentIndex = this.documentsUpdated.findIndex(function(obj) {
                    return (
                      !!obj.bidoDocumentationDTO &&
                      !!obj.bidoDocumentationDTO.docName &&
                      !!bidoDoc.bidoDocumentationDTO &&
                      !!bidoDoc.bidoDocumentationDTO.docName &&
                      obj.bidoDocumentationDTO.docName === bidoDoc.bidoDocumentationDTO.docName
                    );
                  });
                  if (newDocument.docCode) {
                    if (updatedDocumentIndex !== -1) {
                      this.documentsUpdated[updatedDocumentIndex] = bidoDoc;
                    } else {
                      this.documentsUpdated = __spread(this.documentsUpdated, [bidoDoc]);
                    }
                  } else {
                    if (this.addedDocumentIndex !== -1) {
                      this.documentsAdded[this.addedDocumentIndex] = bidoDoc;
                    } else {
                      this.documentsAdded = __spread(this.documentsAdded, [bidoDoc]);
                    }
                  }
                } else {
                  var isAdded = this.documentsAdded.some(function(documentAdded) {
                    return _this.areSameDocument(documentAdded, bidoDoc);
                  });
                  if (isAdded) {
                    this.messageService.showWarningMessage('global.warningOnDocumentExists');
                  } else {
                    this.documents = __spread(this.documents, [bidoDoc]);
                    this.documentsAdded = __spread(this.documentsAdded, [bidoDoc]);
                    this.documentTableDataSource.addData([this.addData(newDocument)]);
                  }
                }
              }
              this.documentTableDataSource.dataSelection = [];
            }
          };
          PackagingBatchFormComponent.prototype.areSameDocument = function(obj1, obj2) {
            if (!obj1 || !obj2) {
              return false;
            } else {
              return (
                !!obj1.bidoDocumentationDTO &&
                !!obj1.bidoDocumentationDTO.docName &&
                !!obj2.bidoDocumentationDTO &&
                !!obj2.bidoDocumentationDTO.docName &&
                obj1.bidoDocumentationDTO.docName === obj2.bidoDocumentationDTO.docName
              );
            }
          };
          PackagingBatchFormComponent.prototype.downloadFiles = function() {
            this.documentTableDataSource.dataSelection.forEach(function(documentRow) {
              if (!!documentRow._obj) {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_29__['FileUtils'].downloadFile(
                  documentRow._obj.docFile,
                  documentRow._obj.docName
                );
              }
            });
          };
          PackagingBatchFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-packaging-batch-form',
                template: __webpack_require__(
                  /*! ./packaging-batch-form.component.html */ './src/app/main/logistics/packaging-batch/form/packaging-batch-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./packaging-batch-form.component.scss */ './src/app/main/logistics/packaging-batch/form/packaging-batch-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_20__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_21__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_22__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_24__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_26__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_25__['SessionService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_19__['DateService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_23__['PropertiesService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_18__['ConfirmationService'],
                _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_3__[
                  'DynamicAttributesService'
                ],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _packaging_batch_form_service__WEBPACK_IMPORTED_MODULE_34__['PackagingBatchFormService'],
                _logistics_service__WEBPACK_IMPORTED_MODULE_33__['LogisticsService'],
                _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_17__['ExtractTranslationPipe']
              ])
            ],
            PackagingBatchFormComponent
          );
          return PackagingBatchFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_27__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/packaging-batch/form/packaging-batch-form.service.ts':
      /*!*************************************************************************************!*\
  !*** ./src/app/main/logistics/packaging-batch/form/packaging-batch-form.service.ts ***!
  \*************************************************************************************/
      /*! exports provided: PackagingBatchFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PackagingBatchFormService',
          function() {
            return PackagingBatchFormService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/asset-management.api */ './src/app/shared/api/asset-management.api.ts'
        );
        /* harmony import */ var _shared_api_bido_equipment_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/bido-equipment.api */ './src/app/shared/api/bido-equipment.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_df_type_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-df-type.api */ './src/app/shared/api/bidt-df-type.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-stock-mvt.api */ './src/app/shared/api/bidt-stock-mvt.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_history_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-history.api */ './src/app/shared/api/fleet-history.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
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

        var PackagingBatchFormService = /** @class */ (function(_super) {
          __extends(PackagingBatchFormService, _super);
          function PackagingBatchFormService(
            http,
            appConfigService,
            fleetManagementApi,
            fleetHistoryApi,
            productStructureManagementApi,
            assetManagementApi,
            bidoEquipmentApi,
            propertiesService,
            bidtStockMvtApi,
            bidtDfTypeApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.fleetManagementApi = fleetManagementApi;
            _this.fleetHistoryApi = fleetHistoryApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.assetManagementApi = assetManagementApi;
            _this.bidoEquipmentApi = bidoEquipmentApi;
            _this.propertiesService = propertiesService;
            _this.bidtStockMvtApi = bidtStockMvtApi;
            _this.bidtDfTypeApi = bidtDfTypeApi;
            return _this;
          }
          PackagingBatchFormService.prototype.findBidoEquipmentAlternative = function(asset) {
            return _super.prototype.post.call(this, this.assetManagementApi.getAssetByCode, asset);
          };
          PackagingBatchFormService.prototype.findBidoAttributesByAttributeCategory = function(category) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoAttributesByAttributeCategory,
              category
            );
          };
          PackagingBatchFormService.prototype.findHBidoEquipmentAttributesByAttributeId = function(ids) {
            return _super.prototype.post.call(
              this,
              this.fleetHistoryApi.findHBidoEquipmentAttributesByAttributeId,
              ids
            );
          };
          PackagingBatchFormService.prototype.findSubBatches = function(assetCode) {
            var obj = {
              equipmentCode: assetCode
            };
            return _super.prototype.post.call(this, this.bidoEquipmentApi.findSubBatches, obj);
          };
          PackagingBatchFormService.prototype.addOrUpdateBatch = function(equipmentObject) {
            return _super.prototype.post.call(this, this.bidoEquipmentApi.addOrUpdateBatch, equipmentObject);
          };
          PackagingBatchFormService.prototype.getTopManufacturingBatch = function(equipmentCode) {
            return _super.prototype.post.call(this, this.bidoEquipmentApi.getTopManufacturingBatch, equipmentCode);
          };
          PackagingBatchFormService.prototype.batchData = function() {
            return {
              manufaturingBatchNumber: '519000',
              batchQuantity: '1500',
              manufaturingBatchDate: new Date(),
              originalPackagingBatchNumber: '519000-01',
              originalPackagingBatchQuantity: '500',
              originalPackagingBatchDate: new Date(),
              batchNumber: '519000-10',
              expirationDate: new Date(),
              quantity: '150'
            };
          };
          PackagingBatchFormService.prototype.getAssetSourceSystemIdList = function(bireId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.getAssetSourceSystemIdList, bireId);
          };
          PackagingBatchFormService.prototype.findBidoCustomersBySearchCriteria = function(criteria) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBidoCustomersBySearchCriteria,
              criteria
            );
          };
          PackagingBatchFormService.prototype.findBireItemsBySearchCriteria = function(
            findBireItemsBySearchCriteriaInput
          ) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireItemsBySearchCriteria,
              findBireItemsBySearchCriteriaInput
            );
          };
          PackagingBatchFormService.prototype.getCountryZoneMap = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                .COUNTRY_ZONE_MAP
            );
          };
          PackagingBatchFormService.prototype.getPositionMap = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                .POSITION_MAP
            );
          };
          PackagingBatchFormService.prototype.getEquipmentFunctionList = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                .ITEM_FAMILY_CODE_MAP
            );
          };
          PackagingBatchFormService.prototype.findBidtStockMvtMmf = function(bidoEquipmentDTOId) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.findBidtStockMvtMmf, bidoEquipmentDTOId);
          };
          PackagingBatchFormService.prototype.getStockInformationByAsset = function(bidoEquipmentDTO) {
            return _super.prototype.post.call(this, this.bidoEquipmentApi.getStockInformationByAsset, bidoEquipmentDTO);
          };
          PackagingBatchFormService.prototype.getShipmentDfTypes = function() {
            return _super.prototype.post.call(this, this.bidtDfTypeApi.findShipmentDfTypes);
          };
          PackagingBatchFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_11__['AppConfigService'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_7__['FleetManagementApi'],
                _shared_api_fleet_history_api__WEBPACK_IMPORTED_MODULE_6__['FleetHistoryApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_8__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_2__['AssetManagementApi'],
                _shared_api_bido_equipment_api__WEBPACK_IMPORTED_MODULE_3__['BidoEquipmentApi'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__['PropertiesService'],
                _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_5__['BidtStockMvtApi'],
                _shared_api_bidt_df_type_api__WEBPACK_IMPORTED_MODULE_4__['BidtDfTypeApi']
              ])
            ],
            PackagingBatchFormService
          );
          return PackagingBatchFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_10__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/logistics/packaging-batch/packaging-batch.module.ts':
      /*!**************************************************************************!*\
  !*** ./src/app/main/logistics/packaging-batch/packaging-batch.module.ts ***!
  \**************************************************************************/
      /*! exports provided: PackagingBatchModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'PackagingBatchModule', function() {
          return PackagingBatchModule;
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
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/fileupload */ './node_modules/primeng/fileupload.js'
        );
        /* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/inputswitch */ './node_modules/primeng/inputswitch.js'
        );
        /* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_inputswitch__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/primeng */ './node_modules/primeng/primeng.js'
        );
        /* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_primeng__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/progressbar */ './node_modules/primeng/progressbar.js'
        );
        /* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_progressbar__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_10__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/components/dialog-table/dialog-table.module */ './src/app/shared/components/dialog-table/dialog-table.module.ts'
        );
        /* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/components/dynamic-attributes/dynamic-attributes.module */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts'
        );
        /* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ './src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts'
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
        /* harmony import */ var _form_dialog_add_update_dialog_add_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./form/dialog-add-update/dialog-add-update.component */ './src/app/main/logistics/packaging-batch/form/dialog-add-update/dialog-add-update.component.ts'
        );
        /* harmony import */ var _form_document_upload_dialog_document_upload_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./form/document-upload-dialog/document-upload-dialog.component */ './src/app/main/logistics/packaging-batch/form/document-upload-dialog/document-upload-dialog.component.ts'
        );
        /* harmony import */ var _form_packaging_batch_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./form/packaging-batch-form.component */ './src/app/main/logistics/packaging-batch/form/packaging-batch-form.component.ts'
        );
        /* harmony import */ var _form_packaging_batch_form_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./form/packaging-batch-form.service */ './src/app/main/logistics/packaging-batch/form/packaging-batch-form.service.ts'
        );
        /* harmony import */ var _search_packaging_batch_search_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./search/packaging-batch-search.component */ './src/app/main/logistics/packaging-batch/search/packaging-batch-search.component.ts'
        );
        /* harmony import */ var _search_packaging_batch_search_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./search/packaging-batch-search.service */ './src/app/main/logistics/packaging-batch/search/packaging-batch-search.service.ts'
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
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__['TooltipModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__['DropdownModule'],
          _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_19__['TableModule'],
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__['CheckboxModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_10__['TableModule'],
          _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_15__['DialogTableModule'],
          primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__['FileUploadModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9__['SelectButtonModule'],
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule'],
          _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_17__[
            'ManageSearchCriteriaModule'
          ],
          primeng_inputswitch__WEBPACK_IMPORTED_MODULE_6__['InputSwitchModule'],
          primeng_chart__WEBPACK_IMPORTED_MODULE_2__['ChartModule'],
          primeng_progressbar__WEBPACK_IMPORTED_MODULE_8__['ProgressBarModule'],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_18__['ModalModule'],
          _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_16__[
            'DynamicAttributesModule'
          ],
          primeng_primeng__WEBPACK_IMPORTED_MODULE_7__['InputTextareaModule']
        ];
        var INTERNAL_MODULES = [];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [];
        var DYNAMIC_COMPONENTS = [
          _form_packaging_batch_form_component__WEBPACK_IMPORTED_MODULE_23__['PackagingBatchFormComponent'],
          _search_packaging_batch_search_component__WEBPACK_IMPORTED_MODULE_25__['PackagingBatchSearchComponent'],
          _form_dialog_add_update_dialog_add_update_component__WEBPACK_IMPORTED_MODULE_21__['DialogAddUpdateComponent'],
          _form_document_upload_dialog_document_upload_dialog_component__WEBPACK_IMPORTED_MODULE_22__[
            'DocumentUploadDialogComponent'
          ]
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _form_packaging_batch_form_service__WEBPACK_IMPORTED_MODULE_24__['PackagingBatchFormService'],
          _search_packaging_batch_search_service__WEBPACK_IMPORTED_MODULE_26__['PackagingBatchSearchService']
        ];
        var PackagingBatchModule = /** @class */ (function() {
          function PackagingBatchModule() {}
          PackagingBatchModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_12__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_13__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_14__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_20__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES),
                exports: [
                  _form_dialog_add_update_dialog_add_update_component__WEBPACK_IMPORTED_MODULE_21__[
                    'DialogAddUpdateComponent'
                  ]
                ]
              })
            ],
            PackagingBatchModule
          );
          return PackagingBatchModule;
        })();

        /***/
      },

    /***/ './src/app/main/logistics/packaging-batch/search/packaging-batch-search.component.html':
      /*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/packaging-batch/search/packaging-batch-search.component.html ***!
  \*********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <h2 class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button type="button" mat-raised-button (click)="openNewPackaging()" *ngIf="hasUpdateAccessRight">\r\n      {{ "global.create" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item (click)="updateFavoriteState()">{{ "addToFavorite" | translate }}</button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="row search-criteria-header">\r\n                <aw-manage-search-criteria\r\n                  [componentId]="SEARCH_CRITERIA_ID"\r\n                  (onSelected)="loadSearchCriteria($event)"\r\n                  (onSavedAsked)="saveSearchCriteriaAsked()"\r\n                  [objectFromPage]="searchCriteriaToSave"\r\n                  [canChange]="!searchCriteriaCalculated"\r\n                ></aw-manage-search-criteria>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group ">\r\n                      <label class="form-label">{{ componentData.componentId + ".pn" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" [(ngModel)]="searchCriteria.pn" class="aw-input" />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group ">\r\n                      <label class="form-label">{{ componentData.componentId + ".batchNumber" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" [(ngModel)]="searchCriteria.batchNumber" class="aw-input" />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group ">\r\n                      <label class="form-label">{{ componentData.componentId + ".designation" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input type="text" [(ngModel)]="searchCriteria.designation" class="aw-input" />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group"></div>\r\n                  </div>\r\n\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{\r\n                        componentData.componentId + ".operationalStatus" | translate\r\n                      }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          placeholder="&nbsp;"\r\n                          [showClear]="true"\r\n                          [(ngModel)]="searchCriteria.operationalStatus"\r\n                          [options]="statusList"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".eisDate" | translate }}</label>\r\n                      <div class="form-control">\r\n                        <p-calendar\r\n                          showButtonBar="true"\r\n                          [monthNavigator]="true"\r\n                          [yearNavigator]="true"\r\n                          [yearRange]="sessionService.calendarYearRange"\r\n                          class="aw-calendar"\r\n                          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                          [locale]="sessionService.calendarFormat"\r\n                          [(ngModel)]="searchCriteria.date"\r\n                          appendTo="body"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group"></div>\r\n                    <div class="form-group"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- ACTION -->\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row search-criteria-footer">\r\n                    <div class="search-actions">\r\n                      <button\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="search()"\r\n                        color="primary"\r\n                        appKeyPress\r\n                        [keyCode]="\'Enter\'"\r\n                        (keyPress)="search()"\r\n                      >\r\n                        {{ componentData.componentId + ".toSearch" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ "global.results" | translate }} ({{ resultsTable ? resultsTable.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                [resizableColumns]="true"\r\n                #ptableResult\r\n                class="aw-table2"\r\n                [columns]="resultTableCols"\r\n                [value]="resultsTable"\r\n                [(selection)]="selectedResults"\r\n                [scrollable]="true"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n                  <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedResults.length > 0 }">\r\n                    <div class="aw-table-global-filter">\r\n                      <label class="aw-table-global-filter-label">\r\n                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableEquipmentGlobalFilter\r\n                        class="aw-table-global-filter-input"\r\n                        type="text"\r\n                        placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                        (input)="ptableResult.filterGlobal($event.target.value, \'contains\')"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class="aw-table-actions">\r\n                      <button\r\n                        *ngIf="selectedResults.length > 0"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="openSelectedBatch()"\r\n                      >\r\n                        {{ "global.open" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col class="aw-table-checkbox-wrapper" />\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th class="aw-table-checkbox-wrapper">\r\n                      <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ componentData.componentId + "." + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td class="aw-table-checkbox-wrapper">\r\n                      <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      <!-- Part Number -->\r\n                      <span *ngSwitchCase="\'batchNumber\'">\r\n                        <a (click)="openSelectedBatch(rowData)">{{ rowData[col.field] }}</a>\r\n                      </span>\r\n                      <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/packaging-batch/search/packaging-batch-search.component.scss':
      /*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/packaging-batch/search/packaging-batch-search.component.scss ***!
  \*********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .custom-width {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvcGFja2FnaW5nLWJhdGNoL3NlYXJjaC9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbG9naXN0aWNzXFxwYWNrYWdpbmctYmF0Y2hcXHNlYXJjaFxccGFja2FnaW5nLWJhdGNoLXNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhCQUFzQjtFQUF0QiwyQkFBc0I7RUFBdEIsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9wYWNrYWdpbmctYmF0Y2gvc2VhcmNoL3BhY2thZ2luZy1iYXRjaC1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmN1c3RvbS13aWR0aCB7XHJcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/logistics/packaging-batch/search/packaging-batch-search.component.ts':
      /*!*******************************************************************************************!*\
  !*** ./src/app/main/logistics/packaging-batch/search/packaging-batch-search.component.ts ***!
  \*******************************************************************************************/
      /*! exports provided: PackagingBatchSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PackagingBatchSearchComponent',
          function() {
            return PackagingBatchSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
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
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _packaging_batch_search_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./packaging-batch-search.service */ './src/app/main/logistics/packaging-batch/search/packaging-batch-search.service.ts'
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

        var PackagingBatchSearchComponent = /** @class */ (function(_super) {
          __extends(PackagingBatchSearchComponent, _super);
          function PackagingBatchSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            propertiesService,
            sessionService,
            packagingBatchSearchService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.propertiesService = propertiesService;
            _this.sessionService = sessionService;
            _this.packagingBatchSearchService = packagingBatchSearchService;
            return _this;
          }
          PackagingBatchSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
              .LOG_PACKAGING_BATCH_SEARCH;
          };
          PackagingBatchSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
            this.searchCriteria = {};
            this.resultsTable = [];
            this.selectedResults = [];
            this.loadTableCols();
          };
          /************************************
           * Load Tech Receipt Table Columns
           ************************************/
          PackagingBatchSearchComponent.prototype.loadTableCols = function() {
            this.resultTableCols = [
              { field: 'batchNumber', alignment: 'left' },
              { field: 'pn', alignment: 'left' },
              { field: 'quantity', alignment: 'left' },
              { field: 'designation', alignment: 'left' },
              { field: 'operationalStatus', alignment: 'left' },
              { field: 'date', alignment: 'left' },
              { field: 'assetCode', alignment: 'left' }
            ];
            this.loadDropdowns();
          };
          /************************************
           * Fetch Dropdown Data
           ************************************/
          PackagingBatchSearchComponent.prototype.loadDropdowns = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                  .BATCH_EQUIPMENT_STATUS_MAP
              )
              .subscribe(function(results) {
                _this.statusList = results;
              });
            this.loadFamilyVariantList();
          };
          PackagingBatchSearchComponent.prototype.loadFamilyVariantList = function() {
            var _this = this;
            var familyFunction = '';
            this.packagingBatchSearchService
              .findAllBireVariantVersionByFamilyFunction(familyFunction)
              .subscribe(function(results) {
                _this.familyVariantList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_12__['ListUtils']
                  .orEmpty(results)
                  .filter(function(familyVariant) {
                    return !!familyVariant.familyCode && !!familyVariant.variantCode;
                  })
                  .map(function(familyVariant) {
                    var label =
                      '' +
                      (familyVariant.familyName || familyVariant.familyCode) +
                      '-' +
                      ('' + (familyVariant.variantName || familyVariant.variantCode));
                    return {
                      label: label,
                      value: familyVariant
                    };
                  });
              });
          };
          /************************************
           * Load Tech Receipt
           ************************************/
          PackagingBatchSearchComponent.prototype.search = function() {
            var _this = this;
            this.hideSearchCriteria = true;
            var bidoObject = this.getbidoInputObject();
            this.resultsTable = [];
            this.packagingBatchSearchService.loadPackagingBatchData(bidoObject).subscribe(function(result) {
              if (result && result.length) {
                _this.mapBidoEqupmentOutput(result);
              }
            });
          };
          PackagingBatchSearchComponent.prototype.mapBidoEqupmentOutput = function(result) {
            var _this = this;
            result.forEach(function(element) {
              var tableObject = {
                batchNumber: element.batchNumber,
                pn: element.pnCode,
                designation: element.equipmentDesignation,
                operationalStatus: _this.getOprationalStatus(element.operationalStatus || ''),
                date: element.eisDate,
                assetCode: element.equipmentCode,
                quantity: element.quantity
              };
              _this.resultsTable.push(tableObject);
            });
          };
          PackagingBatchSearchComponent.prototype.getOprationalStatus = function(status) {
            var result = this.statusList.find(function(_a) {
              var value = _a.value;
              return value === status;
            });
            return result ? result.label : '';
          };
          PackagingBatchSearchComponent.prototype.getbidoInputObject = function() {
            var equpmantObject = {
              pnCode: this.searchCriteria.pn,
              batchNumber: this.searchCriteria.batchNumber,
              equipmentDesignation: this.searchCriteria.designation,
              operationalStatus: this.searchCriteria.operationalStatus,
              eisDate: this.searchCriteria.date
            };
            return equpmantObject;
          };
          /************************************
           * Open Selected Tech Receipt
           ************************************/
          PackagingBatchSearchComponent.prototype.openSelectedBatch = function(rowData) {
            if (!!rowData) {
              this.selectedResults = [];
              this.selectedResults.push(rowData);
            }
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
                  .LOG_PACKAGING_BATCH_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read
            };
            data.objectId = this.selectedResults[0].assetCode;
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /**********************************
           * Search Criteria
           **********************************/
          PackagingBatchSearchComponent.prototype.loadSearchCriteria = function(event) {
            var criteria = event.criteria;
            if (criteria) {
              if (!this.componentData.objectId) {
                this.searchCriteria = criteria;
              } else {
                this.componentData.objectId = undefined;
              }
              this.search();
            } else {
              this.clearSearchCriteria();
            }
          };
          PackagingBatchSearchComponent.prototype.clearSearchCriteria = function() {
            this.searchCriteria = {};
          };
          PackagingBatchSearchComponent.prototype.saveSearchCriteriaAsked = function() {
            this.searchCriteriaToSave = this.searchCriteria;
          };
          /**
           * Open item screen form
           */
          PackagingBatchSearchComponent.prototype.openNewPackaging = function() {
            this.openPackaging(
              undefined,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Create
            );
          };
          PackagingBatchSearchComponent.prototype.openPackaging = function(objectId, openMode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
                  .LOG_PACKAGING_BATCH_FORM,
              openMode: openMode
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('resultsContainerAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            PackagingBatchSearchComponent.prototype,
            'resultsContainerAnchor',
            void 0
          );
          PackagingBatchSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-packaging-batch-search',
                template: __webpack_require__(
                  /*! ./packaging-batch-search.component.html */ './src/app/main/logistics/packaging-batch/search/packaging-batch-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./packaging-batch-search.component.scss */ './src/app/main/logistics/packaging-batch/search/packaging-batch-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__['TabService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__['PropertiesService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__['SessionService'],
                _packaging_batch_search_service__WEBPACK_IMPORTED_MODULE_13__['PackagingBatchSearchService']
              ])
            ],
            PackagingBatchSearchComponent
          );
          return PackagingBatchSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_11__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/packaging-batch/search/packaging-batch-search.service.ts':
      /*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/packaging-batch/search/packaging-batch-search.service.ts ***!
  \*****************************************************************************************/
      /*! exports provided: PackagingBatchSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PackagingBatchSearchService',
          function() {
            return PackagingBatchSearchService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_bido_equipment_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/bido-equipment.api */ './src/app/shared/api/bido-equipment.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
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

        var PackagingBatchSearchService = /** @class */ (function(_super) {
          __extends(PackagingBatchSearchService, _super);
          function PackagingBatchSearchService(
            http,
            appConfigService,
            bidtWarehouseApi,
            bidoEquipmentApi,
            productStructureManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            _this.bidoEquipmentApi = bidoEquipmentApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            return _this;
          }
          PackagingBatchSearchService.prototype.findAllBireVariantVersionByFamilyFunction = function(familyFunction) {
            var param = {
              familyFunction: familyFunction
            };
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findAllBireVariantVersionByFamilyFunction,
              param
            );
          };
          PackagingBatchSearchService.prototype.loadPackagingBatchData = function(equipmentObj) {
            return _super.prototype.post.call(this, this.bidoEquipmentApi.findPackagingBatchesByCriteria, equipmentObj);
          };
          PackagingBatchSearchService.prototype.getWarehousesBySiteId = function(siteId) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findBySiteId, siteId);
          };
          PackagingBatchSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__['AppConfigService'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_3__['BidtWarehouseApi'],
                _shared_api_bido_equipment_api__WEBPACK_IMPORTED_MODULE_2__['BidoEquipmentApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__[
                  'ProductStructureManagementApi'
                ]
              ])
            ],
            PackagingBatchSearchService
          );
          return PackagingBatchSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__['AbstractAwHttpService']);

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
//# sourceMappingURL=default~logistics-packaging-batch-packaging-batch-module~logistics-stock-movements-stock-movements-m~f2aec021.js.map
