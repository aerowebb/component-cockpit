(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['maintenance-work-order-work-order-module'],
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

    /***/ './src/app/main/maintenance/work-order/form/popups/dialog-edit-duration/dialog-edit-duration.component.html':
      /*!******************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/dialog-edit-duration/dialog-edit-duration.component.html ***!
  \******************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div>\r\n      <b>{{ getComponentName() + ".currentPerformedDuration" | translate }}:</b> {{ existingDuration }}\r\n    </div>\r\n    <div>\r\n      <b>{{ getComponentName() + ".currentElapsedTime" | translate }}:</b> {{ existingElapsed }}\r\n    </div>\r\n\r\n    <div class="form-group required">\r\n      <label class="form-label">{{ getComponentName() + ".performedDuration" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-calendar\r\n          showButtonBar="true"\r\n          [monthNavigator]="true"\r\n          [yearNavigator]="true"\r\n          [yearRange]="sessionService.calendarYearRange"\r\n          showTime="true"\r\n          [timeOnly]="true"\r\n          showSeconds="true"\r\n          [(ngModel)]="performedDuration"\r\n          class="aw-calendar"\r\n          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n          [locale]="sessionService.calendarFormat"\r\n          [disabled]="isReadOpenMode"\r\n          appendTo="body"\r\n          (onBlur)="calculateElapsed()"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n    <div class="form-group required">\r\n      <label class="form-label">{{ getComponentName() + ".elapsedTime" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-calendar\r\n          showButtonBar="true"\r\n          [monthNavigator]="true"\r\n          [yearNavigator]="true"\r\n          [yearRange]="sessionService.calendarYearRange"\r\n          showTime="true"\r\n          [timeOnly]="true"\r\n          showSeconds="true"\r\n          class="aw-calendar"\r\n          [(ngModel)]="elapsedTime"\r\n          appendTo="body"\r\n          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n          [locale]="sessionService.calendarFormat"\r\n          [disabled]="isReadOpenMode"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button type="button" color="primary" mat-raised-button (click)="validate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/popups/dialog-edit-duration/dialog-edit-duration.component.ts':
      /*!****************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/dialog-edit-duration/dialog-edit-duration.component.ts ***!
  \****************************************************************************************************************/
      /*! exports provided: DialogEditDurationComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogEditDurationComponent',
          function() {
            return DialogEditDurationComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

        var DialogEditDurationComponent = /** @class */ (function(_super) {
          __extends(DialogEditDurationComponent, _super);
          function DialogEditDurationComponent(sessionService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'DialogEditDurationComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.resetDuration();
            return _this;
          }
          DialogEditDurationComponent.prototype.resetDuration = function() {
            var date = new Date();
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            this.performedDuration = date;
            this.elapsedTime = date;
          };
          DialogEditDurationComponent.prototype.validate = function() {
            if (!!this.elapsedTime && !!this.performedDuration) {
              this.duration = {
                elapsedTime: this.elapsedTime,
                performedDuration: this.performedDuration
              };
              this.onValidated.emit(this.duration);
              this.closeDialog();
            }
          };
          DialogEditDurationComponent.prototype.calculateElapsed = function() {
            var cloneElapsed = this.elapsedTime;
            if (!!this.performedDuration && !!cloneElapsed) {
              if (!!cloneElapsed && this.performedDuration.getHours() > cloneElapsed.getHours()) {
                cloneElapsed.setHours(this.performedDuration.getHours());
              }
              if (!!cloneElapsed && this.performedDuration.getMinutes() > cloneElapsed.getMinutes()) {
                cloneElapsed.setMinutes(this.performedDuration.getMinutes());
              }
              if (!!cloneElapsed && this.performedDuration.getSeconds() > cloneElapsed.getSeconds()) {
                cloneElapsed.setSeconds(this.performedDuration.getSeconds());
              }
              this.elapsedTime = new Date(cloneElapsed);
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogEditDurationComponent.prototype,
            'existingDuration',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogEditDurationComponent.prototype,
            'existingElapsed',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogEditDurationComponent.prototype,
            'onValidated',
            void 0
          );
          DialogEditDurationComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-edit-duration',
                template: __webpack_require__(
                  /*! ./dialog-edit-duration.component.html */ './src/app/main/maintenance/work-order/form/popups/dialog-edit-duration/dialog-edit-duration.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__['SessionService']
              ])
            ],
            DialogEditDurationComponent
          );
          return DialogEditDurationComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/popups/dialog-import-work-order-document/dialog-import-work-order-document.component.html':
      /*!********************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/dialog-import-work-order-document/dialog-import-work-order-document.component.html ***!
  \********************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".docManagement" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".docName" | translate }}</label>\r\n\r\n        <div class="form-control form-control-with-modal">\r\n          <div class="form-control-data">\r\n            {{ woDocument.documentName }}\r\n          </div>\r\n\r\n          <div class="btn-file-upload-wrapper">\r\n            <p-fileUpload\r\n              #fileUploader\r\n              class="aw-fileupload"\r\n              name="document[]"\r\n              customUpload="true"\r\n              mode="basic"\r\n              auto="true"\r\n              chooseLabel=""\r\n              (uploadHandler)="uploadDocument($event, fileUploader)"\r\n            ></p-fileUpload>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".docSource" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <input class="aw-input" type="text" [(ngModel)]="woDocument.documentSource" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".docPublicationDate" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <p-calendar\r\n            showButtonBar="true"\r\n            [monthNavigator]="true"\r\n            [yearNavigator]="true"\r\n            [yearRange]="sessionService.calendarYearRange"\r\n            class="aw-calendar"\r\n            [dateFormat]="sessionService.dateFormatPrimeNG"\r\n            [locale]="sessionService.calendarFormat"\r\n            [(ngModel)]="woDocument.documentPublicationDate"\r\n            appendTo="body"\r\n          ></p-calendar>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".docDescription" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <textarea\r\n            class="aw-textarea"\r\n            [rows]="3"\r\n            pInputTextarea\r\n            [(ngModel)]="woDocument.documentDescription"\r\n          ></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">{{ "global.cancel" | translate }}</button>\r\n    <button\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [disabled]="!woDocument.documentContent && !woDocument.documentSource"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/popups/dialog-import-work-order-document/dialog-import-work-order-document.component.ts':
      /*!******************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/dialog-import-work-order-document/dialog-import-work-order-document.component.ts ***!
  \******************************************************************************************************************************************/
      /*! exports provided: DialogImportWorkOrderDocumentComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogImportWorkOrderDocumentComponent',
          function() {
            return DialogImportWorkOrderDocumentComponent;
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
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_bidm_document_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../../shared/utils/bidm-document-utils */ './src/app/shared/utils/bidm-document-utils.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
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

        var DialogImportWorkOrderDocumentComponent = /** @class */ (function(_super) {
          __extends(DialogImportWorkOrderDocumentComponent, _super);
          function DialogImportWorkOrderDocumentComponent(sessionService, messageService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write,
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
                  .MAI_DIALOG_IMPORT_ORDER_DOCUMENT
              ) || this;
            _this.sessionService = sessionService;
            _this.messageService = messageService;
            _this.onAddedWODoc = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onUpdatedWODoc = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          DialogImportWorkOrderDocumentComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .MAI_DIALOG_IMPORT_ORDER_DOCUMENT;
          };
          DialogImportWorkOrderDocumentComponent.prototype.ngOnInit = function() {
            this.updateOpenMode(this.openMode);
            if (
              this.openMode ===
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Create
            ) {
              this.woDocument = {};
            }
          };
          DialogImportWorkOrderDocumentComponent.prototype.validate = function() {
            if (
              this.openMode ===
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Create
            ) {
              this.onAddedWODoc.emit(this.woDocument);
            } else {
              this.onUpdatedWODoc.emit(this.woDocument);
            }
            this.closeDialog();
          };
          DialogImportWorkOrderDocumentComponent.prototype.uploadDocument = function(event, fileUploader) {
            var _this = this;
            if (!!event.files) {
              var file_1 = event.files[0];
              // Check if the file already exists
              var fileExists = this.woDocumentList.some(function(document) {
                return document.documentName === file_1.name;
              });
              if (fileExists) {
                this.messageService.showWarningMessage('global.warningOnFileExists');
              } else {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_8__['FileUtils'].getFileContentAsBase64(
                  file_1,
                  function(fileContent) {
                    if (!!fileContent) {
                      _this.woDocument = {
                        bidProjectId: _this.workOrder.projectId,
                        woId: _this.workOrder.woId,
                        documentCode: file_1.name,
                        documentName: file_1.name,
                        documentContent: fileContent,
                        documentDescription: _this.woDocument.documentDescription,
                        documentType: _shared_utils_bidm_document_utils__WEBPACK_IMPORTED_MODULE_7__[
                          'BidmDocumentUtils'
                        ].typeFile(file_1.name),
                        documentPublicationDate: moment__WEBPACK_IMPORTED_MODULE_1__().toDate(),
                        statusState: _this.workOrder.statusState,
                        statusUser: _this.workOrder.statusUser,
                        statusDate: _this.workOrder.statusDate
                      };
                    }
                  }
                );
              }
              fileUploader.clear();
            }
          };
          DialogImportWorkOrderDocumentComponent.prototype.closeDialog = function() {
            this.display = false;
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogImportWorkOrderDocumentComponent.prototype,
            'openMode',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogImportWorkOrderDocumentComponent.prototype,
            'woDocument',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogImportWorkOrderDocumentComponent.prototype,
            'woDocumentList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogImportWorkOrderDocumentComponent.prototype,
            'workOrder',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogImportWorkOrderDocumentComponent.prototype,
            'onUpdatedWODoc',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogImportWorkOrderDocumentComponent.prototype,
            'onAddedWODoc',
            void 0
          );
          DialogImportWorkOrderDocumentComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-import-work-order-document',
                template: __webpack_require__(
                  /*! ./dialog-import-work-order-document.component.html */ './src/app/main/maintenance/work-order/form/popups/dialog-import-work-order-document/dialog-import-work-order-document.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__['SessionService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__['MessageService']
              ])
            ],
            DialogImportWorkOrderDocumentComponent
          );
          return DialogImportWorkOrderDocumentComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/popups/dialog-job-card-time-tracking-entries/dialog-job-card-time-tracking-entries.component.html':
      /*!****************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/dialog-job-card-time-tracking-entries/dialog-job-card-time-tracking-entries.component.html ***!
  \****************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="search-dialog-container">\r\n      <div class="section results-section">\r\n        <h4 class="section-title">{{ "global.results" | translate }} ({{ resultList ? resultList.length : 0 }})</h4>\r\n\r\n        <div class="section-content">\r\n          <p-table\r\n            #ptable\r\n            [resizableColumns]="true"\r\n            class="aw-table2"\r\n            [columns]="resultsTableCols"\r\n            [value]="resultList"\r\n            [scrollable]="true"\r\n          >\r\n            <ng-template pTemplate="emptymessage">\r\n              <span *ngIf="!resultsTableLoading"> &nbsp;</span>\r\n\r\n              <div *ngIf="resultsTableLoading" class="aw-table-loading-indicator">\r\n                <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                <div class="lds-hourglass"></div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="caption">\r\n              <div class="aw-table-header">\r\n                <div class="aw-table-global-filter">\r\n                  <label class="aw-table-global-filter-label">\r\n                    <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    #ptableGlobalFilter\r\n                    class="aw-table-global-filter-input"\r\n                    type="text"\r\n                    placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                    (input)="ptable.filterGlobal($event.target.value, \'contains\')"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="colgroup" let-columns>\r\n              <colgroup>\r\n                <col *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment, width: col.width }" />\r\n              </colgroup>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="header" let-columns>\r\n              <tr>\r\n                <th\r\n                  pResizableColumn\r\n                  *ngFor="let col of columns"\r\n                  [ngStyle]="{ \'text-align\': col.alignment, width: col.width }"\r\n                >\r\n                  {{ getComponentName() + "." + col.field | translate }}\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n              <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                <td\r\n                  *ngFor="let col of columns"\r\n                  [ngSwitch]="col.field"\r\n                  [ngStyle]="{ \'text-align\': col.alignment, width: col.width }"\r\n                >\r\n                  <span *ngSwitchCase="\'status\'">\r\n                    <i\r\n                      *ngIf="rowData[\'isInDB\']"\r\n                      class="fa fa-fw fa-clock-o"\r\n                      aria-hidden="true"\r\n                      (click)="updateEntry(rowData)"\r\n                    ></i>\r\n                    <i\r\n                      *ngIf="!rowData[\'isInDB\']"\r\n                      class="fa fa-fw fa-save"\r\n                      aria-hidden="true"\r\n                      (click)="updateEntry(rowData)"\r\n                    ></i>\r\n                  </span>\r\n                  <span *ngSwitchCase="\'isEditable\'">\r\n                    <i\r\n                      *ngIf="rowData[col.field]"\r\n                      class="fa fa-fw fa-edit  custom-icon"\r\n                      aria-hidden="true"\r\n                      (click)="updateEntry(rowData)"\r\n                    ></i>\r\n                  </span>\r\n                  <span *ngSwitchCase="\'isDelete\'">\r\n                    <i\r\n                      *ngIf="rowData[col.field]"\r\n                      class="fa fa-fw fa-trash custom-icon"\r\n                      aria-hidden="true"\r\n                      (click)="deleteEntry(rowData)"\r\n                    ></i>\r\n                  </span>\r\n\r\n                  <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </p-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n    <button\r\n      type="button"\r\n      class="btn-with-spinner"\r\n      color="primary"\r\n      mat-raised-button\r\n      (click)="save()"\r\n      [disabled]="resultList.length === 0"\r\n    >\r\n      <span class="lds-hourglass" *ngIf="showSaveSpinner"></span>\r\n      {{ "global.save" | translate }}\r\n    </button>\r\n    <button type="button" color="primary" mat-raised-button (click)="validate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-edit-duration\r\n  *ngIf="displayEditDuration"\r\n  [existingDuration]="selectedDuration"\r\n  [existingElapsed]="selectedElapsed"\r\n  [(display)]="displayEditDuration"\r\n  (onValidated)="onValidateDuration($event)"\r\n></aw-dialog-edit-duration>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/popups/dialog-job-card-time-tracking-entries/dialog-job-card-time-tracking-entries.component.scss':
      /*!****************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/dialog-job-card-time-tracking-entries/dialog-job-card-time-tracking-entries.component.scss ***!
  \****************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .custom-icon {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3JrLW9yZGVyL2Zvcm0vcG9wdXBzL2RpYWxvZy1qb2ItY2FyZC10aW1lLXRyYWNraW5nLWVudHJpZXMvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXG1haW50ZW5hbmNlXFx3b3JrLW9yZGVyXFxmb3JtXFxwb3B1cHNcXGRpYWxvZy1qb2ItY2FyZC10aW1lLXRyYWNraW5nLWVudHJpZXNcXGRpYWxvZy1qb2ItY2FyZC10aW1lLXRyYWNraW5nLWVudHJpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL3dvcmstb3JkZXIvZm9ybS9wb3B1cHMvZGlhbG9nLWpvYi1jYXJkLXRpbWUtdHJhY2tpbmctZW50cmllcy9kaWFsb2ctam9iLWNhcmQtdGltZS10cmFja2luZy1lbnRyaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5jdXN0b20taWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/popups/dialog-job-card-time-tracking-entries/dialog-job-card-time-tracking-entries.component.ts':
      /*!**************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/dialog-job-card-time-tracking-entries/dialog-job-card-time-tracking-entries.component.ts ***!
  \**************************************************************************************************************************************************/
      /*! exports provided: DialogJobCardTimeTrackingEntriesComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogJobCardTimeTrackingEntriesComponent',
          function() {
            return DialogJobCardTimeTrackingEntriesComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _work_order_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../work-order-form.service */ './src/app/main/maintenance/work-order/form/work-order-form.service.ts'
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

        var DialogJobCardTimeTrackingEntriesComponent = /** @class */ (function(_super) {
          __extends(DialogJobCardTimeTrackingEntriesComponent, _super);
          function DialogJobCardTimeTrackingEntriesComponent(confirmationService, woFormService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'DialogJobCardTimeTrackingEntriesComponent'
              ) || this;
            _this.confirmationService = confirmationService;
            _this.woFormService = woFormService;
            _this.selectedRowIndex = -1;
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.durationInterface = {};
            return _this;
          }
          DialogJobCardTimeTrackingEntriesComponent.prototype.ngOnInit = function() {
            this.resultsTableCols = [
              { field: 'status', alignment: 'center', width: '5%' },
              { field: 'operation', alignment: 'left', width: '10%' },
              { field: 'clockInText', alignment: 'left', width: '15%' },
              { field: 'clockOutText', alignment: 'left', width: '15%' },
              { field: 'durationText', alignment: 'left', width: '15%' },
              { field: 'elapsedText', alignment: 'left', width: '15%' },
              { field: 'isEditable', alignment: 'center', width: '5%' },
              { field: 'performedBy', alignment: 'left', width: '15%' },
              { field: 'isDelete', alignment: 'center', width: '5%' }
            ];
            this.resultList = __spread(this.addedBidmTimeTracking, this.bidmTimeTrackingList);
          };
          /**
           * Save operation
           */
          DialogJobCardTimeTrackingEntriesComponent.prototype.save = function() {
            var _this = this;
            this.showSaveSpinner = true;
            this.woFormService
              .saveBidmTimeTracking(this.resultList)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['finalize'])(function() {
                  _this.showSaveSpinner = false;
                })
              )
              .subscribe(function(res) {
                _this.addedBidmTimeTracking = [];
                _this.fetchTimeTracking();
              });
          };
          /**
           * API To fetch time tracking list
           */
          DialogJobCardTimeTrackingEntriesComponent.prototype.fetchTimeTracking = function() {
            var _this = this;
            var input = {
              projectId: this.workOrder.projectId,
              woId: this.workOrder.woId,
              bidmOperationDTO: this.selectedOperations,
              opeCode: this.selectedOperations.bireOpeCode,
              opeVersion: this.selectedOperations.bireOpeVersion
            };
            this.woFormService.fetchBidmTimeTrackings(input).subscribe(function(res) {
              if (!!res) {
                _this.resultList = res;
              }
            });
          };
          /**
           * Delete time Tracking entry
           */
          DialogJobCardTimeTrackingEntriesComponent.prototype.deleteEntry = function(rowData) {
            var _this = this;
            this.confirmationService.confirm({
              messageKey: this.getTranslateKey('confirmDeleteSelectedTime'),
              accept: function() {
                if (!!rowData.bidmTimeTrackingDTO) {
                  if (!!rowData.bidmTimeTrackingDTO.timeTrackingId) {
                    var bidmTimeTrackingDTOId = {
                      timeTrackingId: rowData.bidmTimeTrackingDTO.timeTrackingId
                    };
                    _this.woFormService.removeBidmTimeTracking(bidmTimeTrackingDTOId).subscribe(function(res) {
                      if (!!rowData.bidmTimeTrackingDTO) {
                        var id_1 = rowData.bidmTimeTrackingDTO.timeTrackingId;
                        var index = _this.resultList.findIndex(function(row) {
                          return !!row.bidmTimeTrackingDTO && row.bidmTimeTrackingDTO.timeTrackingId === id_1;
                        });
                        _this.resultList.splice(index, 1);
                      }
                    });
                  } else {
                    _this.spliceEntry(rowData);
                  }
                }
              }
            });
          };
          DialogJobCardTimeTrackingEntriesComponent.prototype.spliceEntry = function(rowData) {
            var index = this.resultList.findIndex(function(res) {
              return (
                res.operation === rowData.operation &&
                res.durationText === rowData.durationText &&
                res.elapsedText === rowData.elapsedText
              );
            });
            this.resultList.splice(index, 1);
            var addedIndex = this.addedBidmTimeTracking.findIndex(function(res) {
              return (
                res.operation === rowData.operation &&
                res.durationText === rowData.durationText &&
                res.elapsedText === rowData.elapsedText
              );
            });
            if (!!addedIndex) {
              this.addedBidmTimeTracking.splice(addedIndex, 1);
            }
          };
          /**
           * Update time tracking entry
           */
          DialogJobCardTimeTrackingEntriesComponent.prototype.updateEntry = function(rowData) {
            if (!!rowData.bidmTimeTrackingDTO && !!rowData.bidmTimeTrackingDTO.timeTrackingId) {
              this.selectedRowIndex = this.resultList.findIndex(function(res) {
                return (
                  !!res.bidmTimeTrackingDTO &&
                  res.bidmTimeTrackingDTO.timeTrackingId === rowData.bidmTimeTrackingDTO.timeTrackingId
                );
              });
            } else {
              this.selectedRowIndex = this.resultList.findIndex(function(res) {
                return (
                  res.operation === rowData.operation &&
                  res.durationText === rowData.durationText &&
                  res.elapsedText === rowData.elapsedText
                );
              });
            }
            this.selectedDuration = rowData.durationText;
            this.selectedElapsed = rowData.elapsedText;
            this.displayEditDuration = true;
          };
          DialogJobCardTimeTrackingEntriesComponent.prototype.onValidateDuration = function(ev) {
            if (!!ev.performedDuration && !!ev.elapsedTime) {
              var TIME = 60;
              var NUM = 1000;
              var pHour = ev.performedDuration.getHours();
              var pMin = ev.performedDuration.getMinutes();
              var pSec = ev.performedDuration.getSeconds();
              var eHour = ev.elapsedTime.getHours();
              var eMin = ev.elapsedTime.getMinutes();
              var eSec = ev.elapsedTime.getSeconds();
              var newDuration = (pHour * TIME * TIME + pMin * TIME + pSec) * NUM;
              var newElapsed = (eHour * TIME * TIME + eMin * TIME + eSec) * NUM;
              this.resultList[this.selectedRowIndex].durationText = this.timeToDisplay(newDuration);
              this.resultList[this.selectedRowIndex].elapsedText = this.timeToDisplay(newElapsed);
              this.durationInterface.elapsedTime = ev.elapsedTime;
              this.durationInterface.performedDuration = ev.performedDuration;
            }
          };
          DialogJobCardTimeTrackingEntriesComponent.prototype.timeToDisplay = function(millisecond) {
            var secondInmillisecond = 1000;
            var hourInSecond = 3600;
            var minuteInSecond = 60;
            var secondModulo = 60;
            var check = 10;
            var second = Math.floor(millisecond / secondInmillisecond);
            var hours = Math.floor(second / hourInSecond);
            var minutes = Math.floor((second - hours * hourInSecond) / minuteInSecond);
            var seconds = second % secondModulo;
            var minutesDisplay = minutes.toString();
            var secondsDisplay = seconds.toString();
            if (minutes < check || seconds < check) {
              if (minutes < check) {
                minutesDisplay = '0' + minutes;
              }
              if (seconds < check) {
                secondsDisplay = '0' + seconds;
              }
              var displayLessTen = hours + ':' + minutesDisplay + ':' + secondsDisplay;
              return displayLessTen;
            }
            var display = hours + ':' + minutesDisplay + ':' + secondsDisplay;
            return display;
          };
          /**
           * Validate Operation
           */
          DialogJobCardTimeTrackingEntriesComponent.prototype.validate = function() {
            var _this = this;
            this.woFormService
              .saveBidmTimeTracking(this.resultList)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['finalize'])(function() {
                  _this.showSaveSpinner = false;
                })
              )
              .subscribe(function(res) {
                _this.addedBidmTimeTracking = [];
                var output = {
                  addedBidmTimeTracking: _this.addedBidmTimeTracking,
                  durationInterface: _this.durationInterface
                };
                _this.onValidated.emit(output);
                _this.closeDialog();
              });
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogJobCardTimeTrackingEntriesComponent.prototype,
            'workOrder',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogJobCardTimeTrackingEntriesComponent.prototype,
            'bidmTimeTrackingList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogJobCardTimeTrackingEntriesComponent.prototype,
            'addedBidmTimeTracking',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogJobCardTimeTrackingEntriesComponent.prototype,
            'selectedOperations',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogJobCardTimeTrackingEntriesComponent.prototype,
            'onValidated',
            void 0
          );
          DialogJobCardTimeTrackingEntriesComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-job-card-time-tracking-entries',
                template: __webpack_require__(
                  /*! ./dialog-job-card-time-tracking-entries.component.html */ './src/app/main/maintenance/work-order/form/popups/dialog-job-card-time-tracking-entries/dialog-job-card-time-tracking-entries.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-job-card-time-tracking-entries.component.scss */ './src/app/main/maintenance/work-order/form/popups/dialog-job-card-time-tracking-entries/dialog-job-card-time-tracking-entries.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__['ConfirmationService'],
                _work_order_form_service__WEBPACK_IMPORTED_MODULE_5__['WorkOrderFormService']
              ])
            ],
            DialogJobCardTimeTrackingEntriesComponent
          );
          return DialogJobCardTimeTrackingEntriesComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/popups/dialog-operation-check/dialog-operation-check-form.component.html':
      /*!***************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/dialog-operation-check/dialog-operation-check-form.component.html ***!
  \***************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\n  <a-header>\n    <div class="modal-title">{{ getComponentName() + ".operationValidation" | translate }}</div>\n  </a-header>\n\n  <a-content>\n    <div class="form-group required">\n      <label class="form-label">{{ getComponentName() + ".validationStatus" | translate }}</label>\n\n      <div class="form-control">\n        <p-selectButton [(ngModel)]="isValid" [options]="validationList"></p-selectButton>\n      </div>\n    </div>\n\n    <div class="form-group required">\n      <label class="form-label">{{ getComponentName() + ".comment" | translate }}</label>\n\n      <div class="form-control">\n        <textarea class="aw-textarea" [rows]="5" pInputTextarea [(ngModel)]="comment"></textarea>\n      </div>\n    </div>\n  </a-content>\n\n  <a-footer>\n    <button type="button" mat-raised-button (click)="closeDialog()">\n      <span>{{ "global.cancel" | translate }}</span>\n    </button>\n\n    <button type="button" color="primary" mat-raised-button [disabled]="showValidate()" (click)="validate()">\n      {{ "global.ok" | translate }}\n    </button>\n  </a-footer>\n</a-modal>\n';

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/popups/dialog-operation-check/dialog-operation-check-form.component.scss':
      /*!***************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/dialog-operation-check/dialog-operation-check-form.component.scss ***!
  \***************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2Uvd29yay1vcmRlci9mb3JtL3BvcHVwcy9kaWFsb2ctb3BlcmF0aW9uLWNoZWNrL2RpYWxvZy1vcGVyYXRpb24tY2hlY2stZm9ybS5jb21wb25lbnQuc2NzcyJ9 */';

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/popups/dialog-operation-check/dialog-operation-check-form.component.ts':
      /*!*************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/dialog-operation-check/dialog-operation-check-form.component.ts ***!
  \*************************************************************************************************************************/
      /*! exports provided: DialogOperationCheckFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogOperationCheckFormComponent',
          function() {
            return DialogOperationCheckFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

        var DialogOperationCheckFormComponent = /** @class */ (function(_super) {
          __extends(DialogOperationCheckFormComponent, _super);
          function DialogOperationCheckFormComponent(translateService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'DialogOperationCheckFormComponent'
              ) || this;
            _this.translateService = translateService;
            _this.onValidationOK = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onValidationKO = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          DialogOperationCheckFormComponent.prototype.ngOnInit = function() {
            // nothing
            this.validationList = [];
            this.isValid = false;
            this.validationList.push({
              label: this.translateService.instant(this.getTranslateKey('ok')),
              value: true
            });
            this.validationList.push({
              label: this.translateService.instant(this.getTranslateKey('nok')),
              value: false
            });
          };
          DialogOperationCheckFormComponent.prototype.showValidate = function() {
            return !this.comment;
          };
          DialogOperationCheckFormComponent.prototype.validate = function() {
            if (this.isValid) {
              this.onValidationOK.emit(this.comment);
            } else {
              this.onValidationKO.emit(this.comment);
            }
            this.closeDialog();
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogOperationCheckFormComponent.prototype,
            'onValidationOK',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogOperationCheckFormComponent.prototype,
            'onValidationKO',
            void 0
          );
          DialogOperationCheckFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-operation-check-form',
                template: __webpack_require__(
                  /*! ./dialog-operation-check-form.component.html */ './src/app/main/maintenance/work-order/form/popups/dialog-operation-check/dialog-operation-check-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-operation-check-form.component.scss */ './src/app/main/maintenance/work-order/form/popups/dialog-operation-check/dialog-operation-check-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']])
            ],
            DialogOperationCheckFormComponent
          );
          return DialogOperationCheckFormComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/popups/dialog-postponement/dialog-postponement-form.component.html':
      /*!*********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/dialog-postponement/dialog-postponement-form.component.html ***!
  \*********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".request" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group required">\r\n      <label class="form-label">{{ getComponentName() + ".reason" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <textarea class="aw-textarea" [rows]="5" pInputTextarea [(ngModel)]="request"></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button type="button" color="primary" mat-raised-button [disabled]="showValidate()" (click)="validate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/popups/dialog-postponement/dialog-postponement-form.component.scss':
      /*!*********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/dialog-postponement/dialog-postponement-form.component.scss ***!
  \*********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2Uvd29yay1vcmRlci9mb3JtL3BvcHVwcy9kaWFsb2ctcG9zdHBvbmVtZW50L2RpYWxvZy1wb3N0cG9uZW1lbnQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */';

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/popups/dialog-postponement/dialog-postponement-form.component.ts':
      /*!*******************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/dialog-postponement/dialog-postponement-form.component.ts ***!
  \*******************************************************************************************************************/
      /*! exports provided: DialogPostponementFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogPostponementFormComponent',
          function() {
            return DialogPostponementFormComponent;
          }
        );
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

        var DialogPostponementFormComponent = /** @class */ (function(_super) {
          __extends(DialogPostponementFormComponent, _super);
          function DialogPostponementFormComponent() {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'DialogPostponementFormComponent'
              ) || this;
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          DialogPostponementFormComponent.prototype.ngOnInit = function() {
            // nothing
          };
          DialogPostponementFormComponent.prototype.showValidate = function() {
            var response = !this.request ? true : false;
            return response;
          };
          DialogPostponementFormComponent.prototype.validate = function() {
            this.onValidated.emit(this.request);
            this.closeDialog();
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogPostponementFormComponent.prototype,
            'onValidated',
            void 0
          );
          DialogPostponementFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-postponement-form',
                template: __webpack_require__(
                  /*! ./dialog-postponement-form.component.html */ './src/app/main/maintenance/work-order/form/popups/dialog-postponement/dialog-postponement-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-postponement-form.component.scss */ './src/app/main/maintenance/work-order/form/popups/dialog-postponement/dialog-postponement-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            DialogPostponementFormComponent
          );
          return DialogPostponementFormComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/popups/dialog-stakeholder/dialog-stakeholder.component.html':
      /*!**************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/dialog-stakeholder/dialog-stakeholder.component.html ***!
  \**************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".stakeholder" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="row">\r\n      <div class="form-group required">\r\n        <div class="form-control">\r\n          <p-selectButton\r\n            [options]="stakeHolderTypes"\r\n            [(ngModel)]="selectedStakeHolder"\r\n            [disabled]="isReadOpenMode"\r\n            (onChange)="onChangeStakeHolderType()"\r\n          ></p-selectButton>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group required">\r\n        <label class="form-label">\r\n          {{ getComponentName() + ".stakeholderName" | translate }}\r\n        </label>\r\n\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            [options]="stakeholderList"\r\n            [(ngModel)]="stakeholder.woAssignedTo"\r\n            [showClear]="true"\r\n            placeholder="&nbsp;"\r\n            [disabled]="isReadOpenMode"\r\n            (onChange)="onAssignedUserChange()"\r\n            appendTo="body"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label">\r\n          {{ getComponentName() + ".qualification" | translate }}\r\n        </label>\r\n\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [ngModel]="stakeholder.employeeQualification" [disabled]="true" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" *ngIf="!isReadOpenMode" mat-raised-button (click)="closeDialog()">\r\n      {{ "global.cancel" | translate }}\r\n    </button>\r\n    <button type="button" *ngIf="isReadOpenMode" mat-raised-button (click)="closeDialog()">\r\n      {{ "global.close" | translate }}\r\n    </button>\r\n    <button type="button" *ngIf="!isReadOpenMode" mat-raised-button color="primary" (click)="validate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/popups/dialog-stakeholder/dialog-stakeholder.component.ts':
      /*!************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/dialog-stakeholder/dialog-stakeholder.component.ts ***!
  \************************************************************************************************************/
      /*! exports provided: DialogStakeholderComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogStakeholderComponent',
          function() {
            return DialogStakeholderComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _human_resources_employee_form_employee_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../human-resources/employee-form/employee-form.service */ './src/app/main/human-resources/employee-form/employee-form.service.ts'
        );
        /* harmony import */ var _work_package_form_popups_dialog_work_order_edition_dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service */ './src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service.ts'
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

        var DialogStakeholderComponent = /** @class */ (function(_super) {
          __extends(DialogStakeholderComponent, _super);
          function DialogStakeholderComponent(
            sessionService,
            messageService,
            dialogWorkOrderEditService,
            employeeFormService,
            translateService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Write,
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
                  .MAI_DIALOG_IMPORT_ORDER_DOCUMENT
              ) || this;
            _this.sessionService = sessionService;
            _this.messageService = messageService;
            _this.dialogWorkOrderEditService = dialogWorkOrderEditService;
            _this.employeeFormService = employeeFormService;
            _this.translateService = translateService;
            _this.onAddedStakeholder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onUpdatedStakeholder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          DialogStakeholderComponent.prototype.getComponentName = function() {
            return 'DialogStakeholderComponent';
          };
          DialogStakeholderComponent.prototype.ngOnInit = function() {
            this.updateOpenMode(this.openMode);
            if (
              this.openMode ===
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Create
            ) {
              this.stakeholder = {};
            }
            this.loadStakeHolderTypes();
            if (!!this.stakeholder && this.stakeholder.controller) {
              this.getControllers();
              this.selectedStakeHolder = 'CT';
            } else {
              this.selectedStakeHolder = 'OP';
              this.getUsersList();
            }
          };
          DialogStakeholderComponent.prototype.validate = function() {
            if (this.isScreenValidated()) {
              if (
                this.openMode ===
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Create
              ) {
                this.onAddedStakeholder.emit(this.stakeholder);
              } else {
                this.onUpdatedStakeholder.emit(this.stakeholder);
              }
              this.closeDialog();
            } else {
              this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
            }
          };
          DialogStakeholderComponent.prototype.getUsersList = function() {
            var _this = this;
            var param = {
              useCaseCode:
                _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_2__['BidoFunctionTypeConstants']
                  .UC_AIRM_EXECUTION
            };
            if (!!this.task) {
              param.taskCode = this.task.taskCode;
              param.taskVersion = this.task.taskVersion;
            }
            param.projectId = this.workOrder.projectId;
            param.startDate = this.workOrder.woScheduledStartDate;
            this.dialogWorkOrderEditService.findUsersWithUseCaseForWorkOrder(param).subscribe(function(data) {
              _this.stakeholderList = data.map(function(user) {
                return {
                  label: user.lastname + ' ' + user.firstname,
                  value: user.userId
                };
              });
              if (!!_this.stakeholder.woAssignedTo) {
                var inList = _this.stakeholderList.find(function(elem) {
                  return elem.value === _this.stakeholder.woAssignedTo;
                });
                if (!!inList) {
                  _this.stakeholder.woAssignedTo = inList.value;
                }
              }
              if (
                _this.openMode !==
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Read
              ) {
                _this.stakeholder.controller = false;
              }
            });
          };
          DialogStakeholderComponent.prototype.getControllers = function() {
            var _this = this;
            var param = {
              useCaseCode:
                _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_2__['BidoFunctionTypeConstants']
                  .UC_AIRM_QUALITY_CHECK
            };
            param.projectId = this.workOrder.projectId;
            param.startDate = this.workOrder.woScheduledStartDate;
            this.stakeholderList = [];
            if (
              this.openMode !==
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Read
            ) {
              this.stakeholder.woAssignedTo = -1;
            }
            this.dialogWorkOrderEditService.findUsersWithUseCaseForWorkOrder(param).subscribe(function(data) {
              _this.controllers = data;
              _this.stakeholderList = data.map(function(user) {
                return {
                  label: user.lastname + ' ' + user.firstname,
                  value: user.userId
                };
              });
              if (!!_this.stakeholder.woAssignedTo) {
                var inList = _this.stakeholderList.find(function(elem) {
                  return elem.value === _this.stakeholder.woAssignedTo;
                });
                _this.stakeholder.woAssignedTo = !!inList ? inList.value : undefined;
              }
              if (
                _this.openMode !==
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Read
              ) {
                _this.stakeholder.controller = true;
              }
            });
          };
          DialogStakeholderComponent.prototype.onAssignedUserChange = function() {
            var _this = this;
            if (!!this.stakeholder.woAssignedTo) {
              this.isControllerEnable = false;
              var employeeId = this.stakeholder.woAssignedTo;
              this.employeeFormService.getEmployeeQualificationText(employeeId.toString()).subscribe(function(result) {
                _this.stakeholder.employeeQualification = result;
              });
            }
          };
          DialogStakeholderComponent.prototype.onChangeStakeHolderType = function() {
            if (this.selectedStakeHolder === 'OP') {
              this.stakeholder.controller = false;
              this.getUsersList();
            } else {
              this.stakeholder.controller = true;
              this.getControllers();
            }
            this.stakeholder.woAssignedTo = -1;
            this.stakeholder.employeeQualification = '';
          };
          DialogStakeholderComponent.prototype.closeDialog = function() {
            this.display = false;
          };
          DialogStakeholderComponent.prototype.isScreenValidated = function() {
            if (
              this.stakeholder.woAssignedTo === null ||
              this.stakeholder.woAssignedTo === undefined ||
              this.stakeholder.woAssignedTo.toString().length === 0
            ) {
              return false;
            } else {
              return true;
            }
          };
          DialogStakeholderComponent.prototype.loadStakeHolderTypes = function() {
            this.stakeHolderTypes = [
              { label: '' + this.translateService.instant(this.getTranslateKey('operator')), value: 'OP' },
              { label: '' + this.translateService.instant(this.getTranslateKey('isController')), value: 'CT' }
            ];
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Number)],
            DialogStakeholderComponent.prototype,
            'openMode',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogStakeholderComponent.prototype,
            'stakeholder',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogStakeholderComponent.prototype,
            'onUpdatedStakeholder',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogStakeholderComponent.prototype,
            'onAddedStakeholder',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogStakeholderComponent.prototype,
            'task',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogStakeholderComponent.prototype,
            'workOrder',
            void 0
          );
          DialogStakeholderComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-stakeholder',
                template: __webpack_require__(
                  /*! ./dialog-stakeholder.component.html */ './src/app/main/maintenance/work-order/form/popups/dialog-stakeholder/dialog-stakeholder.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__['SessionService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _work_package_form_popups_dialog_work_order_edition_dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_9__[
                  'DialogWorkOrderEditService'
                ],
                _human_resources_employee_form_employee_form_service__WEBPACK_IMPORTED_MODULE_8__[
                  'EmployeeFormService'
                ],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            DialogStakeholderComponent
          );
          return DialogStakeholderComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/popups/last-update/wo-last-update-popup.component.html':
      /*!*********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/last-update/wo-last-update-popup.component.html ***!
  \*********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".number" | translate }} </label>\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="workOrder.woCode" disabled />\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".type" | translate }} </label>\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="type" disabled />\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".currentStatus" | translate }} </label>\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="status" disabled />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".lastUpdate" | translate }} </label>\r\n        <div class="form-control">\r\n          <p-calendar\r\n            showButtonBar="true"\r\n            [monthNavigator]="true"\r\n            [yearNavigator]="true"\r\n            [yearRange]="sessionService.calendarYearRange"\r\n            class="aw-calendar"\r\n            [dateFormat]="sessionService.dateFormatPrimeNG"\r\n            [locale]="sessionService.calendarFormat"\r\n            [(ngModel)]="workOrder.statusDate"\r\n            [disabled]="true"\r\n            appendTo="body"\r\n            placeholder="&nbsp;"\r\n          ></p-calendar>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".lastUpdateBy" | translate }} </label>\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="workOrder.statusUser" disabled />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".description" | translate }} </label>\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="workOrder.woDescription" disabled />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".sourceSystemId" | translate }} </label>\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="systemSourceIdValue" disabled />\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label"> {{ getComponentName() + ".sourceSystemReference" | translate }} </label>\r\n        <div class="form-control">\r\n          <input type="text" class="aw-input" [(ngModel)]="systemSourceReferenceValue" disabled />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">{{ "global.close" | translate }}</button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/popups/last-update/wo-last-update-popup.component.scss':
      /*!*********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/last-update/wo-last-update-popup.component.scss ***!
  \*********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2Uvd29yay1vcmRlci9mb3JtL3BvcHVwcy9sYXN0LXVwZGF0ZS93by1sYXN0LXVwZGF0ZS1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */';

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/popups/last-update/wo-last-update-popup.component.ts':
      /*!*******************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/last-update/wo-last-update-popup.component.ts ***!
  \*******************************************************************************************************/
      /*! exports provided: WOLastUpdatePopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'WOLastUpdatePopupComponent',
          function() {
            return WOLastUpdatePopupComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_bidm_attribute_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../../shared/constants/bidm-attribute-constants */ './src/app/shared/constants/bidm-attribute-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../../shared/utils/select-item-utils */ './src/app/shared/utils/select-item-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _work_order_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../work-order-form.service */ './src/app/main/maintenance/work-order/form/work-order-form.service.ts'
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

        var WOLastUpdatePopupComponent = /** @class */ (function(_super) {
          __extends(WOLastUpdatePopupComponent, _super);
          function WOLastUpdatePopupComponent(sessionService, woFormService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read,
                'WorkOrderLastUpdateComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.woFormService = woFormService;
            return _this;
          }
          WOLastUpdatePopupComponent.prototype.ngOnInit = function() {
            var _this = this;
            this.systemSourceIdValue = '';
            this.systemSourceReferenceValue = '';
            if (!!this.workOrder) {
              var bidmWorkOrderDTOId = {
                projectId: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_7__['StringUtils'].isNullOrEmpty(
                  this.workOrder.projectId
                )
                  ? ''
                  : '' + this.workOrder.projectId,
                woId: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_7__['StringUtils'].isNullOrEmpty(
                  this.workOrder.woId
                )
                  ? ''
                  : '' + this.workOrder.woId
              };
              this.woFormService.findWorkOrderAttributes(bidmWorkOrderDTOId).subscribe(function(r) {
                _this.attributeList = r;
                var attributeSystemSourceId = _this.attributeList.find(function(attribute) {
                  return (
                    attribute.attributeName ===
                    _shared_constants_bidm_attribute_constants__WEBPACK_IMPORTED_MODULE_1__['BidmAttributeConstants']
                      .WORK_ORDER_SYSTEM_SOURCE_ID
                  );
                });
                var attributeSystemSourceReference = _this.attributeList.find(function(attribute) {
                  return (
                    attribute.attributeName ===
                    _shared_constants_bidm_attribute_constants__WEBPACK_IMPORTED_MODULE_1__['BidmAttributeConstants']
                      .WORK_ORDER_SYSTEM_SOURCE_REFERENCE
                  );
                });
                _this.systemSourceIdValue =
                  !!attributeSystemSourceId && !!attributeSystemSourceId.attributeValue
                    ? attributeSystemSourceId.attributeValue
                    : '';
                _this.systemSourceReferenceValue =
                  !!attributeSystemSourceReference && !!attributeSystemSourceReference.attributeValue
                    ? attributeSystemSourceReference.attributeValue
                    : '';
              });
              this.woFormService
                .loadGenProps(
                  _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                    .AIRM_WORK_ORDER_TYPES_MAP
                )
                .subscribe(function(r) {
                  _this.typeList = r;
                  _this.type = _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_6__[
                    'SelectItemUtils'
                  ].formatSelectItem(_this.workOrder.woType, _this.typeList);
                });
              this.woFormService
                .loadGenProps(
                  _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                    .AIRM_OPERATION_STATUS_MAP
                )
                .subscribe(function(r) {
                  _this.statusList = r;
                  _this.status = _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_6__[
                    'SelectItemUtils'
                  ].formatSelectItem(_this.workOrder.statusState, _this.statusList);
                });
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            WOLastUpdatePopupComponent.prototype,
            'workOrder',
            void 0
          );
          WOLastUpdatePopupComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-wo-last-update-popup',
                template: __webpack_require__(
                  /*! ./wo-last-update-popup.component.html */ './src/app/main/maintenance/work-order/form/popups/last-update/wo-last-update-popup.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./wo-last-update-popup.component.scss */ './src/app/main/maintenance/work-order/form/popups/last-update/wo-last-update-popup.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__['SessionService'],
                _work_order_form_service__WEBPACK_IMPORTED_MODULE_8__['WorkOrderFormService']
              ])
            ],
            WOLastUpdatePopupComponent
          );
          return WOLastUpdatePopupComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/popups/last-update/wo-last-update-popup.module.ts':
      /*!****************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/popups/last-update/wo-last-update-popup.module.ts ***!
  \****************************************************************************************************/
      /*! exports provided: WOLastUpdatePopupModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'WOLastUpdatePopupModule',
          function() {
            return WOLastUpdatePopupModule;
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
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _wo_last_update_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./wo-last-update-popup.component */ './src/app/main/maintenance/work-order/form/popups/last-update/wo-last-update-popup.component.ts'
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
          primeng_table__WEBPACK_IMPORTED_MODULE_3__['TableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__['TooltipModule']
        ];
        var INTERNAL_MODULES = [_shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_8__['ModalModule']];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [_wo_last_update_popup_component__WEBPACK_IMPORTED_MODULE_9__['WOLastUpdatePopupComponent']];
        var WOLastUpdatePopupModule = /** @class */ (function() {
          function WOLastUpdatePopupModule() {}
          WOLastUpdatePopupModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS),
                exports: __spread(COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_5__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_6__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_7__['AppCommonSharedModule']
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                )
              })
            ],
            WOLastUpdatePopupModule
          );
          return WOLastUpdatePopupModule;
        })();

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/work-order-form.component.html':
      /*!*********************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/work-order-form.component.html ***!
  \*********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div #page *ngIf="loadedWorkflow">\r\n  <div class="page-header">\r\n    <div class="page-info">\r\n      <div>\r\n        <h2 class="page-title">\r\n          {{ "transaction." + componentData.componentId | translate }}\r\n        </h2>\r\n\r\n        <div class="page-subtitle">\r\n          <div *ngIf="!isCreateOpenMode && componentData && componentData.objectId" class="page-subtitle">\r\n            - {{ workOrder.woCode }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="object-status" *ngIf="woStatus.status" (click)="showStatus()">\r\n        {{ woStatus.status | formatSelectOption: statusList }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-actions">\r\n      <button id="openWo" type="button" mat-raised-button (click)="openWo()" *ngIf="showButtonStartWo()">\r\n        {{ getComponentName() + ".openWo" | translate }}\r\n      </button>\r\n\r\n      <button\r\n        id="confirmWo"\r\n        type="button"\r\n        mat-raised-button\r\n        (click)="clickConfirmWorkCompletion()"\r\n        *ngIf="showButtonConfirmWorkCompletion()"\r\n      >\r\n        {{ getComponentName() + ".confirm" | translate }}\r\n      </button>\r\n\r\n      <button\r\n        id="openWo"\r\n        type="button"\r\n        mat-raised-button\r\n        (click)="clickCancelWorkCompletion()"\r\n        *ngIf="showButtonCancelWorkCompletion()"\r\n      >\r\n        {{ getComponentName() + ".cancel" | translate }}\r\n      </button>\r\n\r\n      <button\r\n        id="addWo"\r\n        type="button"\r\n        mat-raised-button\r\n        (click)="displayWorkOrderScreenEdit()"\r\n        *ngIf="!isCreateOpenMode"\r\n      >\r\n        {{ getComponentName() + ".addWo" | translate }}\r\n      </button>\r\n\r\n      <button\r\n        id="request"\r\n        type="button"\r\n        mat-raised-button\r\n        (click)="requestOrCancelPostponement()"\r\n        *ngIf="!isReadOpenMode && !isQualificationOngoing && isAskRequestConf"\r\n      >\r\n        {{ getComponentName() + ".request" | translate }}\r\n      </button>\r\n\r\n      <button\r\n        id="cancelPost"\r\n        type="button"\r\n        mat-raised-button\r\n        (click)="requestOrCancelPostponement()"\r\n        *ngIf="!isReadOpenMode && !isQualificationOngoing && iscancelPostConf"\r\n      >\r\n        {{ getComponentName() + ".cancelPost" | translate }}\r\n      </button>\r\n\r\n      <button id="print" type="button" mat-raised-button (click)="printJobCard()" *ngIf="!isCreateOpenMode">\r\n        {{ getComponentName() + ".print" | translate }}\r\n      </button>\r\n\r\n      <button\r\n        id="actions"\r\n        mat-icon-button\r\n        *ngIf="!isCreateOpenMode"\r\n        class="mat-elevation-z1"\r\n        matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n        matTooltipPosition="above"\r\n        aria-label="Show all actions"\r\n        [matMenuTriggerFor]="actions"\r\n      >\r\n        <mat-icon>more_horiz</mat-icon>\r\n      </button>\r\n      <mat-menu #actions="matMenu">\r\n        <button\r\n          id="goTo"\r\n          mat-menu-item\r\n          [matMenuTriggerFor]="navigations"\r\n          *ngIf="!isCreateOpenMode && !isQualificationOngoing"\r\n        >\r\n          {{ "goTo" | translate }}\r\n        </button>\r\n\r\n        <button id="openField" *ngIf="showButtonOpenField()" mat-menu-item (click)="openField()">\r\n          {{ getComponentName() + ".openField" | translate }}\r\n        </button>\r\n\r\n        <button id="lastUpdate" mat-menu-item (click)="lastUpdateDetails()">\r\n          {{ getComponentName() + ".lastUpdate" | translate }}\r\n        </button>\r\n\r\n        <button id="refresh" *ngIf="!isCreateOpenMode" mat-menu-item (click)="refresh()">\r\n          {{ "global.refresh" | translate }}\r\n        </button>\r\n        <button id="favorites" *ngIf="!isCreateOpenMode" mat-menu-item (click)="updateFavoriteState()">\r\n          {{ (isFavoriteEntry ? "removeFromFavorite" : "addToFavorite") | translate }}\r\n        </button>\r\n\r\n        <button *ngIf="displayPrintIdLabel" mat-menu-item>\r\n          {{ getComponentName() + ".printIdLabel" | translate }}\r\n        </button>\r\n      </mat-menu>\r\n      <mat-menu #navigations="matMenu">\r\n        <button id="goodsMovements" mat-menu-item (click)="callGoodsMovement()">\r\n          {{ getComponentName() + ".goodsMovements" | translate }}\r\n        </button>\r\n        <button id="openStaffPlaning" *ngIf="showButtonOpenStaffPlanning()" mat-menu-item (click)="openStaffPlanning()">\r\n          {{ getComponentName() + ".staffPlanning" | translate }}\r\n        </button>\r\n      </mat-menu>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-wrapper">\r\n    <div class="page-container search-page-container">\r\n      <div class="page-content">\r\n        <mat-tab-group animationDuration="0ms" dynamicHeight>\r\n          <mat-tab id="homeTab">\r\n            <ng-template mat-tab-label>\r\n              {{ getComponentName() + ".home" | translate }}\r\n            </ng-template>\r\n\r\n            <div class="grid-row">\r\n              <!-- MAIN -->\r\n              <div\r\n                id="mainInformationPanel"\r\n                #mainAnchor\r\n                class="grid-cell--equally"\r\n                (click)="setSelectedAnchor(\'mainAnchor\')"\r\n              >\r\n                <div class="grid-cell grid-cell--container" [ngClass]="{ active: isSelectedAnchor(\'mainAnchor\') }">\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ getComponentName() + ".mainInformation" | translate }}\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content grid-cell-content-with-section">\r\n                    <div class="column">\r\n                      <!-- Row 1 -->\r\n                      <div class="row">\r\n                        <div id="woCode" class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".woNumber" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <input type="text" class="aw-input" [(ngModel)]="workOrder.woCode" disabled />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="woDescription" class="form-group flex--2">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".description" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <textarea\r\n                              class="aw-textarea"\r\n                              [rows]="2"\r\n                              pInputTextarea\r\n                              [(ngModel)]="woDescription"\r\n                              disabled\r\n                            ></textarea>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- Row 2 -->\r\n                      <div class="row">\r\n                        <div id="woType" class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".type" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <p-dropdown\r\n                              class="aw-dropdown fixed-width"\r\n                              [options]="woTypeList"\r\n                              [(ngModel)]="workOrder.woType"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              disabled\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="originText" class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".source" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <div class="space">\r\n                              <a class="link" (click)="consultWorkOrderOrigin()">\r\n                                {{ originText }}\r\n                              </a>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id="woTask" class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".task" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <div class="space">\r\n                              <a class="link" (click)="openTaskLink(bireTask)">\r\n                                {{ woTask }}\r\n                              </a>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- Row 3 -->\r\n                      <div class="row">\r\n                        <div id="bidtWorkCenter" class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".workshop" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <input type="text" class="aw-input" [(ngModel)]="bidtWorkCenter" disabled />\r\n                          </div>\r\n                        </div>\r\n                        <div id="woAssignedTo" class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".assignedTo" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <p-dropdown\r\n                              class="aw-dropdown fixed-width"\r\n                              [options]="woUserList"\r\n                              [(ngModel)]="workOrder.woAssignedTo"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              [disabled]="isReadOpenMode || disableDefectsTableButtonsInClosedStatus()"\r\n                              (onChange)="saveWorkOrder()"\r\n                              appendTo="body"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n                        <div id="qualificationNeeded" class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".qualification" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <input type="text" class="aw-input" [(ngModel)]="qualificationNeeded" disabled />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- Row 4 -->\r\n                      <div class="row">\r\n                        <div id="woEquipement" class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".asset" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <div class="space">\r\n                              <a class="link" (click)="goToAsset(wpEquipementDto)">\r\n                                {{ woEquipement }}\r\n                              </a>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div id="relatedItem" class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".item" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <div class="space">\r\n                              <a class="link" (click)="openItemLink(woItemDTO)">\r\n                                {{ relatedItem }}\r\n                              </a>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div id="filler" class="form-group"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- JOB CARD PROGRESS -->\r\n              <div\r\n                id="workInProgressPanel"\r\n                #progressAnchor\r\n                class="grid-cell--equally"\r\n                (click)="setSelectedAnchor(\'progressAnchor\')"\r\n              >\r\n                <div class="grid-cell grid-cell--container" [ngClass]="{ active: isSelectedAnchor(\'progressAnchor\') }">\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container loading-indicator">\r\n                      <div class="grid-cell-title">\r\n                        {{ getComponentName() + ".workInProgress" | translate }}\r\n                        <div *ngIf="isLoadingOperationsTable" class="lds-hourglass"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content grid-cell-content-with-section">\r\n                    <div class="row">\r\n                      <div id="woStatusProgressPercent" class="form-group">\r\n                        <label class="form-label">\r\n                          {{ getComponentName() + ".progress" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control" style="margin-top: 8px">\r\n                          <div class="form-control-data">\r\n                            <p-progressBar [ngClass]="woStatusProgressType" [value]="woStatusProgressPercent">\r\n                            </p-progressBar>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div id="startDate" class="form-group">\r\n                        <label class="form-label">\r\n                          {{ getComponentName() + ".openingDate" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <p-calendar\r\n                            showButtonBar="true"\r\n                            [monthNavigator]="true"\r\n                            [yearNavigator]="true"\r\n                            [yearRange]="sessionService.calendarYearRange"\r\n                            class="aw-calendar"\r\n                            [(ngModel)]="woStatus.startDate"\r\n                            showTime="true"\r\n                            disabled\r\n                            [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                            [locale]="sessionService.calendarFormat"\r\n                          ></p-calendar>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div id="endDate" class="form-group">\r\n                        <label class="form-label">\r\n                          {{ getComponentName() + ".closingDate" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <p-calendar\r\n                            showButtonBar="true"\r\n                            [monthNavigator]="true"\r\n                            [yearNavigator]="true"\r\n                            [yearRange]="sessionService.calendarYearRange"\r\n                            class="aw-calendar"\r\n                            [(ngModel)]="woStatus.endDate"\r\n                            showTime="true"\r\n                            disabled\r\n                            [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                            [locale]="sessionService.calendarFormat"\r\n                          ></p-calendar>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="row">\r\n                      <div id="woPerformedBy" class="form-group">\r\n                        <label class="form-label">\r\n                          {{ getComponentName() + ".performedBy" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" class="aw-input" [disabled]="true" [(ngModel)]="woPerformedBy" />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div id="woCheckedBy" class="form-group">\r\n                        <label class="form-label">\r\n                          {{ getComponentName() + ".checkedBy" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" class="aw-input" [disabled]="true" [(ngModel)]="woCheckedBy" />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group"></div>\r\n                    </div>\r\n\r\n                    <div class="row">\r\n                      <div id="woPos" class="form-group">\r\n                        <label class="form-label">\r\n                          {{ getComponentName() + ".woPostponementEvent" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <a\r\n                            class="link"\r\n                            (click)="openRequest()"\r\n                            *ngIf="\r\n                              woStatus.workPostponementRequestBidoNotificationData &&\r\n                              woStatus.workPostponementRequestBidoNotificationData.notificationCode\r\n                            "\r\n                          >\r\n                            {{ woStatus.workPostponementRequestBidoNotificationData.notificationCode }}\r\n                          </a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="row flex-row--justify-center">\r\n                      <div *ngIf="chartVisible" class="chart-container">\r\n                        <div class="grid-row">\r\n                          <div class="grid-cell--12">\r\n                            <div id="chart" class="chart-wrapper">\r\n                              <p-chart\r\n                                [type]="chartType"\r\n                                [data]="chartData"\r\n                                [options]="chartOptions"\r\n                                width="673px"\r\n                                height="144px"\r\n                              ></p-chart>\r\n                            </div>\r\n                          </div>\r\n                          <div class="grid-cell--12"></div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="row">\r\n                      <div id="totalDuration" class="form-group">\r\n                        <label class="form-label">\r\n                          {{ getComponentName() + ".totalDuration" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-data">\r\n                            {{ totalDuration }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div id="totalElapsed" class="form-group">\r\n                        <label class="form-label">\r\n                          {{ getComponentName() + ".totalElapsed" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-data">\r\n                            {{ totalElapsed }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div id="endOfWork" class="form-group">\r\n                        <label class="form-label">\r\n                          {{ getComponentName() + ".endOfWork" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-data">\r\n                            <p-calendar\r\n                              showButtonBar="true"\r\n                              [monthNavigator]="true"\r\n                              [yearNavigator]="true"\r\n                              [yearRange]="sessionService.calendarYearRange"\r\n                              class="aw-calendar"\r\n                              [(ngModel)]="woStatus.endOfWork"\r\n                              [showTime]="true"\r\n                              disabled\r\n                              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                              [locale]="sessionService.calendarFormat"\r\n                            ></p-calendar>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="grid-row">\r\n              <!-- WORK PACKAGE -->\r\n              <div\r\n                id="workPackagePanel"\r\n                #workPackageAnchor\r\n                class="grid-cell--grow2"\r\n                (click)="setSelectedAnchor(\'workPackageAnchor\')"\r\n              >\r\n                <div\r\n                  class="grid-cell grid-cell--container"\r\n                  [ngClass]="{ active: isSelectedAnchor(\'workPackageAnchor\') }"\r\n                >\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ getComponentName() + ".workPackage" | translate }}\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content grid-cell-content-with-section">\r\n                    <div class="row">\r\n                      <!-- PROJECT NUMBER -->\r\n                      <div id="projectNumber" class="form-group">\r\n                        <label class="form-label">\r\n                          {{ getComponentName() + ".projectNumber" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-data">\r\n                            <div class="space">\r\n                              <a class="link" (click)="openWorkPackageLink()">\r\n                                {{ workPackage.projectNumber }}\r\n                              </a>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <!-- MRO CENTER -->\r\n                      <div id="bireRepairCenterCode" class="form-group">\r\n                        <label class="form-label">\r\n                          {{ getComponentName() + ".mroCenter" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width"\r\n                            [options]="mroCenterList"\r\n                            [(ngModel)]="workPackage.bireRepairCenterCode"\r\n                            [showClear]="true"\r\n                            placeholder="&nbsp;"\r\n                            disabled\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                      <div id="filler2" class="form-group"></div>\r\n                    </div>\r\n                    <div class="row">\r\n                      <!-- Aircraft type -->\r\n                      <div id="wpAircraftType" class="form-group">\r\n                        <label class="form-label">\r\n                          {{ getComponentName() + ".aircraftType" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-data">\r\n                            <input type="text" class="aw-input" [(ngModel)]="wpAircraftType" disabled />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- Aircraft Pn -->\r\n                      <div id="aircraftRegistration" class="form-group">\r\n                        <label class="form-label">\r\n                          {{ getComponentName() + ".aircraftTn" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-data">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="workPackage.aircraftRegistration"\r\n                              disabled\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- Aircraft Sn -->\r\n                      <div id="aircraftMsn" class="form-group">\r\n                        <label class="form-label">\r\n                          {{ getComponentName() + ".aircraftSn" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <div class="form-control-data">\r\n                            <div class="space">\r\n                              <a class="link" (click)="goToAsset(wpEquipementDto)">\r\n                                {{ workPackage.aircraftMsn }}\r\n                              </a>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- MATERIAL AVAILABILITY -->\r\n              <div id="materialAvailabilityPanel" class="grid-cell--equally">\r\n                <aw-material-availability-indicators [procurementRequests]="procurementRequests">\r\n                </aw-material-availability-indicators>\r\n              </div>\r\n\r\n              <!-- OUTGOING CONFIGURATION -->\r\n              <div id="outgoingConfigurationPanel" class="grid-cell--equally">\r\n                <div\r\n                  class="grid-cell grid-cell--container"\r\n                  [ngClass]="{ active: isSelectedAnchor(\'workPackageAnchor\') }"\r\n                >\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ getComponentName() + ".outgoingConfiguration" | translate }}\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="row" *ngIf="!isCreateOpenMode">\r\n                    <div class="section outgoingConf grid-cell-content">\r\n                      <div class="section-content">\r\n                        <div class="row">\r\n                          <div class="row outgoingConf">\r\n                            <div id="ok2" class="form-group">\r\n                              <label class="form-label">\r\n                                {{ getComponentName() + ".ok" | translate }}\r\n                              </label>\r\n                              <div class="form-control readyOnlyField">\r\n                                <div\r\n                                  *ngIf="isLoadingOutgoingConf"\r\n                                  class="outgoing-conf-lds-hourglass lds-hourglass"\r\n                                ></div>\r\n                                <input\r\n                                  *ngIf="!isLoadingOutgoingConf"\r\n                                  type="text"\r\n                                  class="aw-input"\r\n                                  [ngClass]="{ ok: isConfOk() }"\r\n                                  [(ngModel)]="outgoinConfiguration.ok"\r\n                                  [disabled]="true"\r\n                                />\r\n                              </div>\r\n                            </div>\r\n                            <div id="warning2" class="form-group">\r\n                              <label class="form-label">\r\n                                {{ getComponentName() + ".warning" | translate }}\r\n                              </label>\r\n                              <div class="form-control readyOnlyField">\r\n                                <div\r\n                                  *ngIf="isLoadingOutgoingConf"\r\n                                  class="outgoing-conf-lds-hourglass lds-hourglass"\r\n                                ></div>\r\n                                <input\r\n                                  *ngIf="!isLoadingOutgoingConf"\r\n                                  type="text"\r\n                                  class="aw-input"\r\n                                  [ngClass]="{ \'outgoing-conf-warning\': isConfWarning() }"\r\n                                  [(ngModel)]="outgoinConfiguration.warning"\r\n                                  [disabled]="true"\r\n                                />\r\n                              </div>\r\n                            </div>\r\n                            <div id="nok2" class="form-group">\r\n                              <label class="form-label">\r\n                                {{ getComponentName() + ".nok" | translate }}\r\n                              </label>\r\n                              <div class="form-control readyOnlyField">\r\n                                <div\r\n                                  *ngIf="isLoadingOutgoingConf"\r\n                                  class="outgoing-conf-lds-hourglass lds-hourglass"\r\n                                ></div>\r\n                                <input\r\n                                  *ngIf="!isLoadingOutgoingConf"\r\n                                  type="text"\r\n                                  class="aw-input"\r\n                                  [ngClass]="{ \'outgoing-conf-nok\': isConfNok() }"\r\n                                  [(ngModel)]="outgoinConfiguration.nok"\r\n                                  [disabled]="true"\r\n                                />\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class="row aw-table-actions action-list" *ngIf="!isQualificationOngoing">\r\n                          <button\r\n                            id="controlBtnOutgoingConfigurationPanel"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="ctrlConfiguration()"\r\n                            class="ng-star-inserted"\r\n                          >\r\n                            {{ getComponentName() + ".controlBtn" | translate }}\r\n                          </button>\r\n                          <button\r\n                            id="openBtnOutgoingConfigurationPanel"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="openAppliedConfigurationManagement()"\r\n                            class="ng-star-inserted"\r\n                          >\r\n                            {{ getComponentName() + ".openBtn" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="grid-row">\r\n              <div\r\n                id="stakeholdersPanel"\r\n                #stakeholdersAnchor\r\n                class="grid-cell--12"\r\n                (click)="setSelectedAnchor(\'stakeholdersAnchor\')"\r\n              >\r\n                <div\r\n                  class="grid-cell grid-cell--container grid-cell-wo-table"\r\n                  [ngClass]="{ active: isSelectedAnchor(\'stakeholdersAnchor\') }"\r\n                >\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ getComponentName() + ".stakeholders" | translate }} ({{\r\n                          stakeholdersTableDataSource.dataCount\r\n                        }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content">\r\n                    <a-table id="stakeholdersTableDataSource" [dataSource]="stakeholdersTableDataSource">\r\n                      <ng-template tableActionsDef>\r\n                        <button\r\n                          id="deleteStakeholders"\r\n                          *ngIf="!isReadOpenMode && stakeholdersTableDataSource.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          color="warn"\r\n                          (click)="deleteStakeholders()"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n                        <button\r\n                          id="editStakeholders"\r\n                          *ngIf="!isReadOpenMode && stakeholdersTableDataSource.dataSelectionCount === 1"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="editStakeholder()"\r\n                        >\r\n                          {{ "global.open" | translate }}\r\n                        </button>\r\n                        <button\r\n                          id="addStakeholders"\r\n                          *ngIf="\r\n                            !isReadOpenMode &&\r\n                            !stakeholdersTableDataSource.hasDataSelection &&\r\n                            !disableDefectsTableButtonsInClosedStatus()\r\n                          "\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="addStakeholder()"\r\n                        >\r\n                          {{ "global.add" | translate }}\r\n                        </button>\r\n                      </ng-template>\r\n                      <ng-template columnDef="isController" let-rowData="rowData">\r\n                        <i *ngIf="rowData.isController" class="fa fa-fw fa-check" aria-hidden="true"></i>\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </mat-tab>\r\n\r\n          <mat-tab id="worksTab">\r\n            <ng-template mat-tab-label>\r\n              {{ getComponentName() + ".works" | translate }}\r\n            </ng-template>\r\n\r\n            <!-- OPERATIONS -->\r\n            <div class="grid-row">\r\n              <div\r\n                id="operationsPanel"\r\n                #operationsAnchor\r\n                class="grid-cell--12"\r\n                (click)="setSelectedAnchor(\'operationsAnchor\')"\r\n              >\r\n                <div\r\n                  class="grid-cell grid-cell--container grid-cell-wo-table"\r\n                  [ngClass]="{ active: isSelectedAnchor(\'operationsAnchor\') }"\r\n                >\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ getComponentName() + ".operations" | translate }} ({{ operationTable.length }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content">\r\n                    <p-table\r\n                      id="operationTable"\r\n                      [resizableColumns]="true"\r\n                      #ptableResults\r\n                      class="aw-table2"\r\n                      [value]="operationTable"\r\n                      [columns]="operationTableCols"\r\n                      [scrollable]="true"\r\n                      selectionMode="checkbox"\r\n                      [(selection)]="selectedOperations"\r\n                      dataKey="bireOpeCode"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isLoadingOperationTable"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isLoadingOperationTable" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableResultsGlobalFilter\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="ptableResults.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class="aw-table-actions">\r\n                            <button\r\n                              id="showHistoricOperationTable"\r\n                              *ngIf="selectedOperations.length === 1 && !isReadOpenMode"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="openStatusUpdatesPopup()"\r\n                            >\r\n                              {{ componentData.componentId + ".history" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              id="editDurationOperationTable"\r\n                              *ngIf="selectedOperations.length === 1 && !isReadOpenMode"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="openEditDuration()"\r\n                            >\r\n                              {{ componentData.componentId + ".editDuration" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              id="opeLogOperationTable"\r\n                              *ngIf="selectedOperations.length === 1 && !isReadOpenMode"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="openOperationLog()"\r\n                            >\r\n                              {{ componentData.componentId + ".opeLog" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              id="deleteOperationTable"\r\n                              *ngIf="selectedOperations.length > 0 && !isReadOpenMode"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              color="warn"\r\n                              (click)="deleteOperation()"\r\n                            >\r\n                              {{ "global.delete" | translate }}\r\n                            </button>\r\n\r\n                            <div class="form-control">\r\n                              <p-selectButton\r\n                                class="woDisplayType-btn"\r\n                                [(ngModel)]="tableDisplayType"\r\n                                [options]="tableDisplayTypeList"\r\n                                (onChange)="changeOperationTableCols()"\r\n                              ></p-selectButton>\r\n                            </div>\r\n\r\n                            <!-- <div *ngIf="!isLoadingOperationTable" class="aw-table-icon-actions">\r\n                          </div> -->\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col class="aw-table-checkbox-wrapper" />\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th class="aw-table-checkbox-wrapper">\r\n                            <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                          </th>\r\n\r\n                          <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                            {{ componentData.componentId + "." + col.field | translate }}\r\n                          </th>\r\n                          <th [ngStyle]="{ width: \'5%\', \'text-align\': \'center\' }" *ngIf="woStatus.isCritical === true">\r\n                            {{ componentData.componentId + ".check" | translate }}\r\n                          </th>\r\n                          <th [ngStyle]="{ width: \'2.5%\', \'text-align\': \'left\' }"></th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                          <td class="aw-table-checkbox-wrapper">\r\n                            <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                          </td>\r\n\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                            [ngSwitch]="col.field"\r\n                          >\r\n                            <span *ngSwitchCase="\'sequence\'">{{ rowData["opeSequence"] }}</span>\r\n\r\n                            <a *ngSwitchCase="\'bireOpeCode\'" (click)="openOperationUC(rowData)"\r\n                              >{{ rowData[col.field] }}-{{ rowData["bireOpeVersion"] }}</a\r\n                            >\r\n\r\n                            <span *ngSwitchCase="\'opePerformedDuration\'">\r\n                              <span\r\n                                *ngIf="\r\n                                  rowData[\'isOpeOnPerformed\'] === false &&\r\n                                  rowData[\'opeStatus\'] !== awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&\r\n                                  rowData[\'opeStatus\'] !== awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&\r\n                                  rowData[\'canStartOrEndDuration\'] &&\r\n                                  !isReadOpenMode\r\n                                "\r\n                                (click)="startOrEndDuration(rowData)"\r\n                              >\r\n                                <i class="fa fa-play" aria-hidden="true"></i>\r\n\r\n                                <a>\r\n                                  {{ rowData["opePerformedDurationDisplay"] }}\r\n                                </a>\r\n                              </span>\r\n\r\n                              <span\r\n                                *ngIf="\r\n                                  rowData[\'isOpeOnPerformed\'] === true &&\r\n                                  rowData[\'opeStatus\'] !== awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&\r\n                                  rowData[\'opeStatus\'] !== awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&\r\n                                  rowData[\'canStartOrEndDuration\']\r\n                                "\r\n                                (click)="startOrEndDuration(rowData)"\r\n                              >\r\n                                <i class="fa fa-stop" aria-hidden="true"></i>\r\n\r\n                                <a style="color: rgb(0, 200, 0); font-weight: bold">\r\n                                  {{ rowData["opePerformedDurationDisplay"] }}\r\n                                </a>\r\n                              </span>\r\n\r\n                              <span\r\n                                *ngIf="\r\n                                  (rowData[\'isOpeOnPerformed\'] === false &&\r\n                                    (rowData[\'opeStatus\'] === awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED ||\r\n                                      rowData[\'opeStatus\'] === awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE)) ||\r\n                                  isReadOpenMode ||\r\n                                  !rowData[\'canStartOrEndDuration\']\r\n                                "\r\n                              >\r\n                                <i class="fa fa-play" aria-hidden="true"></i>\r\n\r\n                                <span>\r\n                                  {{ rowData["opePerformedDurationDisplay"] }}\r\n                                </span>\r\n                              </span>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'opePerformedElapsed\'">\r\n                              <span *ngIf="rowData[\'isOpeOnElapsed\'] === false || !rowData[\'canStartOrEndDuration\']">\r\n                                {{ rowData["opePerformedElapsedDisplay"] }}\r\n                              </span>\r\n\r\n                              <span\r\n                                *ngIf="rowData[\'isOpeOnElapsed\'] === true && rowData[\'canStartOrEndDuration\']"\r\n                                (click)="startOrEndElapsed(rowData)"\r\n                              >\r\n                                <i class="fa fa-stop" aria-hidden="true"></i>\r\n\r\n                                <a style="color: rgb(0, 200, 0); font-weight: bold">\r\n                                  {{ rowData["opePerformedElapsedDisplay"] }}\r\n                                </a>\r\n                              </span>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'achievement\'">\r\n                              <span\r\n                                *ngIf="\r\n                                  rowData[\'opeStatus\'] !== awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&\r\n                                  rowData[\'opeStatus\'] !== awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&\r\n                                  woStatus.status !== awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE\r\n                                "\r\n                              >\r\n                                <i class="fa fa-unlock" aria-hidden="true" *ngIf="isReadOpenMode"></i>\r\n                                <i\r\n                                  class="fa fa-unlock"\r\n                                  aria-hidden="true"\r\n                                  *ngIf="!isReadOpenMode && rowData[\'canAchieveOperation\']"\r\n                                  (click)="performOperation(rowData, false)"\r\n                                ></i>\r\n                              </span>\r\n\r\n                              <span\r\n                                *ngIf="\r\n                                  rowData[\'opeStatus\'] === awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&\r\n                                  woStatus.status !== awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE\r\n                                "\r\n                              >\r\n                                <i class="fa fa-unlock-alt" aria-hidden="true" *ngIf="isReadOpenMode"></i>\r\n                                <i\r\n                                  class="fa fa-unlock-alt"\r\n                                  aria-hidden="true"\r\n                                  *ngIf="!isReadOpenMode && rowData[\'canAchieveOperation\']"\r\n                                  (click)="performOperation(rowData, false)"\r\n                                ></i>\r\n                              </span>\r\n\r\n                              <span\r\n                                *ngIf="\r\n                                  rowData[\'opeStatus\'] === awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&\r\n                                  woStatus.status !== awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE\r\n                                "\r\n                              >\r\n                                <i class="fa fa-lock" aria-hidden="true" *ngIf="isReadOpenMode"></i>\r\n                                <i\r\n                                  class="fa fa-lock"\r\n                                  aria-hidden="true"\r\n                                  *ngIf="!isReadOpenMode && rowData[\'canAchieveOperation\']"\r\n                                  (click)="performOperation(rowData, false)"\r\n                                ></i>\r\n                              </span>\r\n\r\n                              <span\r\n                                *ngIf="\r\n                                  (rowData[\'opeStatus\'] === awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE ||\r\n                                    rowData[\'opeStatus\'] === awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED) &&\r\n                                  woStatus.status === awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE\r\n                                "\r\n                              >\r\n                                <i class="fa fa-check" aria-hidden="true"></i>\r\n                              </span>\r\n                            </span>\r\n\r\n                            <p-progressBar\r\n                              *ngSwitchCase="\'opeStatusDisplay\'"\r\n                              [ngClass]="rowData[col.field]"\r\n                              [value]="rowData[\'opeStatusPercent\']"\r\n                            >\r\n                            </p-progressBar>\r\n\r\n                            <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                          </td>\r\n\r\n                          <td [ngStyle]="{ width: \'5%\', \'text-align\': \'center\' }" *ngIf="woStatus.isCritical === true">\r\n                            <span\r\n                              *ngIf="\r\n                                rowData[\'opeStatus\'] === awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&\r\n                                woStatus.status === awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&\r\n                                rowData[\'isCriticalTask\'] === true\r\n                              "\r\n                            >\r\n                              <i class="fa fa-times" aria-hidden="true" *ngIf="isReadOpenMode"></i>\r\n                              <i\r\n                                class="fa fa-times"\r\n                                aria-hidden="true"\r\n                                *ngIf="!isReadOpenMode"\r\n                                (click)="checkCriticalOperation(rowData, false)"\r\n                              ></i>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf="\r\n                                rowData[\'opeStatus\'] === awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&\r\n                                woStatus.status === awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&\r\n                                rowData[\'isCriticalTask\'] === true\r\n                              "\r\n                            >\r\n                              <i class="fa fa-check" aria-hidden="true" *ngIf="isReadOpenMode"></i>\r\n                              <i\r\n                                class="fa fa-check"\r\n                                aria-hidden="true"\r\n                                *ngIf="!isReadOpenMode"\r\n                                (click)="checkCriticalOperation(rowData, false)"\r\n                              ></i>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf="\r\n                                rowData[\'opeStatus\'] === awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&\r\n                                woStatus.status === awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&\r\n                                rowData[\'isCriticalTask\'] === true\r\n                              "\r\n                            >\r\n                              <i class="fa fa-check" aria-hidden="true" *ngIf="isReadOpenMode"></i>\r\n                              <i class="fa fa-check" aria-hidden="true" *ngIf="!isReadOpenMode"></i>\r\n                            </span>\r\n                          </td>\r\n                          <td\r\n                            class="row-expand-wrapper"\r\n                            [pRowToggler]="rowData"\r\n                            [ngStyle]="{ width: \'2.5%\', \'text-align\': \'center\' }"\r\n                          >\r\n                            <i\r\n                              class="fa fa-fw aw-icon aw-icon-with-border"\r\n                              [ngClass]="rowData._expand ? \'fa-minus\' : \'fa-plus\'"\r\n                              aria-hidden="true"\r\n                              pTooltip="{{ \'global.showTableRowDetails\' | translate }}"\r\n                              tooltipPosition="top"\r\n                              (click)="toggleWorkPackageExpand(rowData)"\r\n                            ></i>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="rowexpansion" let-rowData let-columns="columns">\r\n                        <tr class="row-expanded">\r\n                          <td [attr.colspan]="columns.length + 2">\r\n                            <div class="column forced-backgroung">\r\n                              <div class="row">\r\n                                <div class="form-group">\r\n                                  <label class="form-label">\r\n                                    {{ getComponentName() + "." + "startDate" | translate }}\r\n                                  </label>\r\n                                  <div class="form-control">\r\n                                    <input\r\n                                      type="text"\r\n                                      class="aw-input"\r\n                                      [disabled]="true"\r\n                                      [(ngModel)]="rowData.opeStartDateDisplay"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class="form-group">\r\n                                  <label class="form-label">\r\n                                    {{ getComponentName() + "." + "performedOn" | translate }}\r\n                                  </label>\r\n                                  <div class="form-control">\r\n                                    <input\r\n                                      type="text"\r\n                                      class="aw-input"\r\n                                      [disabled]="true"\r\n                                      [(ngModel)]="rowData.opePerformedOnDisplay"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class="form-group">\r\n                                  <label class="form-label">\r\n                                    {{ getComponentName() + "." + "performedBy" | translate }}\r\n                                  </label>\r\n                                  <div class="form-control">\r\n                                    <input\r\n                                      type="text"\r\n                                      class="aw-input"\r\n                                      [disabled]="true"\r\n                                      [(ngModel)]="rowData.opePerformedLastByDisplay"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class="form-group">\r\n                                  <label class="form-label">\r\n                                    {{ getComponentName() + "." + "checkedOn" | translate }}\r\n                                  </label>\r\n                                  <div class="form-control">\r\n                                    <input\r\n                                      type="text"\r\n                                      class="aw-input"\r\n                                      [disabled]="true"\r\n                                      [(ngModel)]="rowData.opeCheckOnDisplay"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class="form-group">\r\n                                  <label class="form-label">\r\n                                    {{ getComponentName() + "." + "checkedBy" | translate }}\r\n                                  </label>\r\n                                  <div class="form-control">\r\n                                    <input\r\n                                      type="text"\r\n                                      class="aw-input"\r\n                                      [disabled]="true"\r\n                                      [(ngModel)]="rowData.opeCheckByDisplay"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="row">\r\n                                <div class="form-group">\r\n                                  <label class="form-label">\r\n                                    {{ getComponentName() + "." + "stdDuration" | translate }}\r\n                                  </label>\r\n                                  <div class="form-control">\r\n                                    <input\r\n                                      type="text"\r\n                                      class="aw-input"\r\n                                      [disabled]="true"\r\n                                      [(ngModel)]="rowData.opeStdDurationDisplay"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class="form-group">\r\n                                  <label class="form-label">\r\n                                    {{ getComponentName() + "." + "qualification" | translate }}\r\n                                  </label>\r\n                                  <div class="form-control">\r\n                                    <input\r\n                                      type="text"\r\n                                      class="aw-input"\r\n                                      [disabled]="true"\r\n                                      [(ngModel)]="rowData.opeQualification"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n                                <div class="form-group">\r\n                                  <label class="form-label">\r\n                                    {{ getComponentName() + "." + "comment" | translate }}\r\n                                  </label>\r\n                                  <div class="form-control">\r\n                                    <input\r\n                                      type="text"\r\n                                      class="aw-input"\r\n                                      [disabled]="true"\r\n                                      [(ngModel)]="rowData.opeComment"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-row">\r\n              <!-- COMMENTS -->\r\n              <div\r\n                id="commentPanel"\r\n                #commentAnchor\r\n                class="grid-cell--equally"\r\n                (click)="setSelectedAnchor(\'commentAnchor\')"\r\n              >\r\n                <div class="grid-cell grid-cell--container" [ngClass]="{ active: isSelectedAnchor(\'commentAnchor\') }">\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ getComponentName() + ".comment" | translate }}\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content  grid-cell-content-with-section">\r\n                    <div class="column">\r\n                      <div class="row">\r\n                        <!-- Comments -->\r\n                        <div id="woComments" class="form-group  grid-cell--6" [ngClass]="{ required: !isCommentEdit }">\r\n                          <div class="form-control">\r\n                            <textarea\r\n                              class="aw-textarea"\r\n                              [rows]="2"\r\n                              pInputTextarea\r\n                              [(ngModel)]="woComments"\r\n                              [disabled]="!isCommentEdit"\r\n                            ></textarea>\r\n                          </div>\r\n\r\n                          <div class="aw-table-actions action-list">\r\n                            <button\r\n                              id="editCommentPanel"\r\n                              *ngIf="\r\n                                !isCommentEdit &&\r\n                                !isReadOpenMode &&\r\n                                !isQualificationOngoing &&\r\n                                !disableDefectsTableButtonsInClosedStatus()\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="editComments()"\r\n                            >\r\n                              {{ "global.edit" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              id="saveCommentPanel"\r\n                              *ngIf="isCommentEdit && !isQualificationOngoing"\r\n                              type="button"\r\n                              color="primary"\r\n                              mat-raised-button\r\n                              (click)="saveComents()"\r\n                            >\r\n                              {{ "global.save" | translate }}\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- ADDITIONAL WORK -->\r\n              <div\r\n                id="additionalWorkPanel"\r\n                #additionalWorkAnchor\r\n                class="grid-cell--equally"\r\n                (click)="setSelectedAnchor(\'additionalWorkAnchor\')"\r\n              >\r\n                <div\r\n                  class="grid-cell grid-cell--container"\r\n                  [ngClass]="{ active: isSelectedAnchor(\'additionalWorkAnchor\') }"\r\n                >\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ getComponentName() + ".additionalWork" | translate }}\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content  grid-cell-content-with-section">\r\n                    <div class="column">\r\n                      <div class="row">\r\n                        <!-- Additional work -->\r\n                        <div\r\n                          id="woAdditionalWork"\r\n                          class="form-group  grid-cell--6"\r\n                          [ngClass]="{ required: !isAdditionnalWorkEdit }"\r\n                        >\r\n                          <div class="form-control">\r\n                            <textarea\r\n                              class="aw-textarea"\r\n                              [rows]="2"\r\n                              pInputTextarea\r\n                              [(ngModel)]="woAdditionalWork"\r\n                              [disabled]="!isAdditionnalWorkEdit"\r\n                            ></textarea>\r\n                          </div>\r\n\r\n                          <div class="aw-table-actions action-list">\r\n                            <button\r\n                              id="editAdditionalWorkPanel"\r\n                              *ngIf="\r\n                                !isAdditionnalWorkEdit &&\r\n                                !isReadOpenMode &&\r\n                                !isQualificationOngoing &&\r\n                                !disableDefectsTableButtonsInClosedStatus()\r\n                              "\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="editAdditionalWork()"\r\n                            >\r\n                              {{ "global.edit" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              id="saveAdditionalWorkPanel"\r\n                              *ngIf="isAdditionnalWorkEdit && !isQualificationOngoing"\r\n                              type="button"\r\n                              color="primary"\r\n                              mat-raised-button\r\n                              (click)="saveAdditionalWork()"\r\n                            >\r\n                              {{ "global.save" | translate }}\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </mat-tab>\r\n\r\n          <mat-tab id="worksTab">\r\n            <ng-template mat-tab-label>\r\n              {{ getComponentName() + ".installRemove" | translate }}\r\n            </ng-template>\r\n\r\n            <!-- INSTALL REMOVE -->\r\n            <div class="grid-row">\r\n              <div\r\n                id="installRemovePanel"\r\n                #installRemoveAnchor\r\n                class="grid-cell--12"\r\n                (click)="setSelectedAnchor(\'installRemoveAnchor\')"\r\n              >\r\n                <div\r\n                  class="grid-cell grid-cell--container grid-cell-wo-table"\r\n                  [ngClass]="{ active: isSelectedAnchor(\'installRemove\') }"\r\n                >\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ getComponentName() + ".installRemove" | translate }} ({{ woAssetManagementTable.length }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content">\r\n                    <p-table\r\n                      id="woAssetManagementTable"\r\n                      #ptableWoAssetMangement\r\n                      class="aw-table2"\r\n                      [columns]="woAssetManagementTableCols"\r\n                      [value]="woAssetManagementTable"\r\n                      [(selection)]="selectedWoAssetManagements"\r\n                      [expandedRowKeys]="expandedWoAssetRows"\r\n                      (onRowSelect)="woAssetManagementReadyToExecute()"\r\n                      (onRowUnselect)="woAssetManagementReadyToExecute()"\r\n                      [rows]="TABLE_PAGINATION_DEFAULT_ROWS"\r\n                      dataKey="key"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isLoadingWoAssetManagementTable"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isLoadingWoAssetManagementTable" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="loadingbody" let-columns="columns">\r\n                        <tr style="height:34px">\r\n                          <td *ngFor="let col of columns">\r\n                            <div class="loading-text"></div>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="caption">\r\n                        <div\r\n                          class="aw-table-header"\r\n                          [ngClass]="{ \'rows-selected\': selectedWoAssetManagements.length > 0 }"\r\n                        >\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableDocumentGlobalFilter\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="ptableDocument.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class="aw-table-actions">\r\n                            <button\r\n                              class="btn-with-spinner"\r\n                              *ngIf="selectedWoAssetManagements.length === 1 && showPrintIdLabelButton()"\r\n                              type="button"\r\n                              mat-raised-button\r\n                            >\r\n                              <span>{{ componentData.componentId + ".printIdLabel" | translate }}</span>\r\n                            </button>\r\n                            <button\r\n                              id="executeSelectedDecisionTableDisplayed"\r\n                              class="btn-with-spinner"\r\n                              *ngIf="selectedWoAssetManagements.length > 0"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              [disabled]="woAssetManagementReadyToExecuteDecision || isUndoingWoAssetManagementDecision"\r\n                              (click)="executeSelectedDecision()"\r\n                            >\r\n                              <span class="lds-hourglass" *ngIf="isExecutingWoAssetManagementDecision"></span>\r\n                              <span>{{ componentData.componentId + ".executeDecision" | translate }}</span>\r\n                            </button>\r\n                            <button\r\n                              id="undoSelectedDecisionTableDisplayed"\r\n                              class="btn-with-spinner"\r\n                              *ngIf="selectedWoAssetManagements.length > 0"\r\n                              type="button"\r\n                              [disabled]="isUndoingWoAssetManagementDecision"\r\n                              mat-raised-button\r\n                              (click)="undoSelectedDecision()"\r\n                            >\r\n                              <span class="lds-hourglass" *ngIf="isUndoingWoAssetManagementDecision"></span>\r\n                              <span>{{ componentData.componentId + ".undoDecision" | translate }}</span>\r\n                            </button>\r\n                            <button\r\n                              id="addWoAssetManagementTableDisplayed"\r\n                              class="btn-with-spinner"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              [disabled]="isLoadingWoAssetManagementTable"\r\n                              (click)="addWoAssetManagement()"\r\n                            >\r\n                              <span class="lds-hourglass" *ngIf="isLoadingWoAssetManagementTable"></span>\r\n                              <span class="loading-message">{{ "global.add" | translate }}</span>\r\n                            </button>\r\n                            <button\r\n                              id="saveWoAssetManagementTableDisplayed"\r\n                              class="btn-with-spinner"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              *ngIf="woAssetManagementTable.length > 0"\r\n                              [disabled]="isSavingWoAssetManagementTable"\r\n                              (click)="saveWoAssetManagement()"\r\n                            >\r\n                              <span class="lds-hourglass" *ngIf="isSavingWoAssetManagementTable"></span>\r\n                              <span class="loading-message">{{ "global.save" | translate }}</span>\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col class="aw-table-checkbox-wrapper" />\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th class="aw-table-checkbox-wrapper">\r\n                            <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                          </th>\r\n                          <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                            {{ componentData.componentId + "." + col.field | translate }}\r\n                          </th>\r\n                          <th [ngStyle]="{ width: \'2.5%\', \'text-align\': \'left\' }"></th>\r\n                          <th [ngStyle]="{ width: \'2.5%\', \'text-align\': \'left\' }"></th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                          <td class="aw-table-checkbox-wrapper">\r\n                            <p-tableCheckbox\r\n                              *ngIf="!rowData.isLoading"\r\n                              class="aw-table-checkbox"\r\n                              [value]="rowData"\r\n                            ></p-tableCheckbox>\r\n                            <div *ngIf="rowData.isLoading" class="lds-hourglass"></div>\r\n                          </td>\r\n\r\n                          <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ width: col.width }">\r\n                            <span *ngSwitchCase="\'eventDate\'">\r\n                              <p-calendar\r\n                                showButtonBar="true"\r\n                                [monthNavigator]="true"\r\n                                [yearNavigator]="true"\r\n                                [yearRange]="sessionService.calendarYearRange"\r\n                                class="aw-calendar"\r\n                                [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                                [(ngModel)]="rowData.notificationDate"\r\n                                [showTime]="true"\r\n                                appendTo="body"\r\n                                [disabled]="!!rowData.bidoNotificationDTO"\r\n                                [readonlyInput]="true"\r\n                              ></p-calendar>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'decision\'">\r\n                              <span *ngIf="rowData.availableDecisions && rowData.availableDecisions.length > 0">\r\n                                <p-dropdown\r\n                                  class="aw-dropdown"\r\n                                  [options]="rowData.availableDecisions"\r\n                                  [(ngModel)]="rowData.notificationType"\r\n                                  appendTo="body"\r\n                                  [disabled]="!!rowData.bidoNotificationDTO || !!rowData.bidtStockMvtDTO"\r\n                                  (onChange)="updateWoAssetDecision(rowData)"\r\n                                ></p-dropdown>\r\n                              </span>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'superiorAsset\'">\r\n                              <span\r\n                                *ngIf="rowData.availableSuperiorAssets && rowData.availableSuperiorAssets.length > 0"\r\n                              >\r\n                                <p-dropdown\r\n                                  class="aw-dropdown fixed-width"\r\n                                  [options]="rowData.availableSuperiorAssets"\r\n                                  [(ngModel)]="rowData.selectedSuperiorBidoEquipmentDTO"\r\n                                  placeholder="&nbsp;"\r\n                                  appendTo="body"\r\n                                  [disabled]="!!rowData.bidoNotificationDTO"\r\n                                  (onChange)="updateWoAssetSuperiorAsset(rowData)"\r\n                                ></p-dropdown>\r\n                              </span>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'item\'">\r\n                              <span *ngIf="rowData.availableItems && rowData.availableItems.length > 0">\r\n                                <p-dropdown\r\n                                  class="aw-dropdown fixed-width"\r\n                                  [options]="rowData.availableItems"\r\n                                  [(ngModel)]="rowData.selectedBireItemDTO"\r\n                                  placeholder="&nbsp;"\r\n                                  appendTo="body"\r\n                                  [filter]="true"\r\n                                  [disabled]="!!rowData.bidoNotificationDTO"\r\n                                  (onChange)="updateWoAssetItem(rowData)"\r\n                                ></p-dropdown>\r\n                              </span>\r\n                              <span *ngIf="rowData.availableFunctionCodes && rowData.availableFunctionCodes.length > 0">\r\n                                <p-dropdown\r\n                                  class="aw-dropdown fixed-width"\r\n                                  [options]="rowData.availableFunctionCodes"\r\n                                  [(ngModel)]="rowData.selectedFunctionCode"\r\n                                  placeholder="&nbsp;"\r\n                                  appendTo="body"\r\n                                  [filter]="true"\r\n                                  [disabled]="!!rowData.bidoNotificationDTO"\r\n                                  (onChange)="updateWoAssetItem(rowData)"\r\n                                ></p-dropdown>\r\n                              </span>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'pn\'">\r\n                              <span *ngIf="rowData.availablePNs && rowData.availablePNs.length > 0">\r\n                                <p-dropdown\r\n                                  class="aw-dropdown fixed-width"\r\n                                  [options]="rowData.availablePNs"\r\n                                  [(ngModel)]="rowData.selectedPn"\r\n                                  [showClear]="true"\r\n                                  placeholder="&nbsp;"\r\n                                  appendTo="body"\r\n                                  [filter]="true"\r\n                                  [disabled]="!!rowData.bidoNotificationDTO"\r\n                                  (onChange)="updateWoAssetPn(rowData)"\r\n                                ></p-dropdown>\r\n                              </span>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'sn\'">\r\n                              <span *ngIf="rowData.availableEquipments && rowData.availableEquipments.length > 0">\r\n                                <p-dropdown\r\n                                  class="aw-dropdown fixed-width"\r\n                                  [options]="rowData.availableEquipments"\r\n                                  [(ngModel)]="rowData.selectedBidoEquipmentDTO"\r\n                                  [showClear]="true"\r\n                                  placeholder="&nbsp;"\r\n                                  appendTo="body"\r\n                                  [filter]="true"\r\n                                  [disabled]="!!rowData.bidoNotificationDTO"\r\n                                  (onChange)="updateWoAssetEquipment(rowData)"\r\n                                ></p-dropdown>\r\n                              </span>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'status\'">\r\n                              <span *ngIf="rowData.availableStatuses && rowData.availableStatuses.length > 0">\r\n                                <p-dropdown\r\n                                  class="aw-dropdown fixed-width"\r\n                                  [options]="rowData.availableStatuses"\r\n                                  [(ngModel)]="rowData.selectedStatus"\r\n                                  [showClear]="true"\r\n                                  placeholder="&nbsp;"\r\n                                  appendTo="body"\r\n                                  [filter]="true"\r\n                                  [disabled]="!!rowData.bidoNotificationDTO"\r\n                                  (onChange)="controlWoAsset(rowData)"\r\n                                ></p-dropdown>\r\n                              </span>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'event\'">\r\n                              <span *ngIf="rowData.bidoNotificationDTO">\r\n                                <a style="font-weight: bold;" (click)="openEvent(rowData.bidoNotificationDTO)">\r\n                                  {{ rowData.bidoNotificationDTO.notificationCode }}\r\n                                  <span\r\n                                    *ngIf="\r\n                                      rowData.notificationType === bidoNotificationTypeConstants.ASSEMBLY_TYPE_CODE\r\n                                    "\r\n                                  >\r\n                                    ({{ getComponentName() + ".install" | translate }})\r\n                                  </span>\r\n                                  <span\r\n                                    *ngIf="\r\n                                      rowData.notificationType === bidoNotificationTypeConstants.DISASSEMBLY_TYPE_CODE\r\n                                    "\r\n                                  >\r\n                                    ({{ getComponentName() + ".remove" | translate }})\r\n                                  </span>\r\n                                </a>\r\n                              </span>\r\n                              <span *ngIf="!rowData.bidoNotificationDTO">\r\n                                {{ getComponentName() + ".notCreated" | translate }}\r\n                              </span>\r\n                            </span>\r\n                            <span *ngSwitchDefault>\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n                          </td>\r\n                          <td>\r\n                            <span *ngIf="rowData.alertIcon" pTooltip="{{ rowData.alertMessage }}" tooltipPosition="top">\r\n                              <span\r\n                                *ngIf="rowData.alertIcon === controlConfigConstants.ICON_GREEN_LIGHT_CODE"\r\n                                class="alert alert--ok"\r\n                              >\r\n                                {{ getComponentName() + ".alertOk" | translate }}\r\n                              </span>\r\n                              <span\r\n                                *ngIf="rowData.alertIcon === controlConfigConstants.ICON_YELLOW_LIGHT_CODE"\r\n                                class="alert alert--warning"\r\n                              >\r\n                                {{ getComponentName() + ".alertWarning" | translate }}\r\n                              </span>\r\n                              <span\r\n                                *ngIf="rowData.alertIcon === controlConfigConstants.ICON_RED_LIGHT_CODE"\r\n                                class="alert alert--nok"\r\n                              >\r\n                                {{ getComponentName() + ".alertNok" | translate }}\r\n                              </span>\r\n                            </span>\r\n                            <span\r\n                              *ngIf="!!rowData.alertIcon"\r\n                              pTooltip="{{ rowData.alertMessage }}"\r\n                              tooltipPosition="top"\r\n                            >\r\n                              <span class="alert alert--ok">\r\n                                {{ getComponentName() + ".alertOk" | translate }}\r\n                              </span>\r\n                            </span>\r\n                          </td>\r\n                          <td\r\n                            class="row-expand-wrapper"\r\n                            [pRowToggler]="rowData"\r\n                            [ngStyle]="{ width: \'2.5%\', \'text-align\': \'center\' }"\r\n                          >\r\n                            <i\r\n                              class="fa fa-fw aw-icon aw-icon-with-border"\r\n                              [ngClass]="rowData._expand ? \'fa-minus\' : \'fa-plus\'"\r\n                              aria-hidden="true"\r\n                              pTooltip="{{ \'global.showTableRowDetails\' | translate }}"\r\n                              tooltipPosition="top"\r\n                              (click)="toggleInstallRemoveExpand(rowData)"\r\n                            ></i>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="rowexpansion" let-rowData let-columns="columns">\r\n                        <tr class="row-expanded">\r\n                          <td [attr.colspan]="columns.length + 2">\r\n                            <div class="column forced-backgroung">\r\n                              <div class="row">\r\n                                <div class="form-group">\r\n                                  <label class="form-label">\r\n                                    {{ getComponentName() + ".warehouse" | translate }}\r\n                                  </label>\r\n\r\n                                  <div\r\n                                    class="form-control"\r\n                                    *ngIf="rowData.availableWarehouses && rowData.availableWarehouses.length > 0"\r\n                                  >\r\n                                    <p-dropdown\r\n                                      class="aw-dropdown fixed-width"\r\n                                      [options]="rowData.availableWarehouses"\r\n                                      [(ngModel)]="rowData.selectedWarehouseId"\r\n                                      [showClear]="true"\r\n                                      placeholder="&nbsp;"\r\n                                      appendTo="body"\r\n                                      [disabled]="!!rowData.bidoNotificationDTO || workOrder.bidtWarehouseId"\r\n                                      [filter]="true"\r\n                                      (onChange)="updateWoAssetWarehouse(rowData)"\r\n                                    ></p-dropdown>\r\n                                  </div>\r\n                                </div>\r\n                                <div class="form-group">\r\n                                  <label\r\n                                    class="form-label"\r\n                                    *ngIf="\r\n                                      rowData.notificationType === bidoNotificationTypeConstants.DISASSEMBLY_TYPE_CODE\r\n                                    "\r\n                                  >\r\n                                    {{ getComponentName() + ".removalReason" | translate }}\r\n                                  </label>\r\n\r\n                                  <div\r\n                                    class="form-control"\r\n                                    *ngIf="\r\n                                      rowData.notificationType === bidoNotificationTypeConstants.DISASSEMBLY_TYPE_CODE\r\n                                    "\r\n                                  >\r\n                                    <p-dropdown\r\n                                      class="aw-dropdown fixed-width"\r\n                                      [options]="propertyRemovalReason"\r\n                                      [(ngModel)]="rowData.selectedRemovalReason"\r\n                                      [showClear]="true"\r\n                                      placeholder="&nbsp;"\r\n                                      appendTo="body"\r\n                                      [disabled]="!!rowData.bidoNotificationDTO"\r\n                                      [filter]="true"\r\n                                    ></p-dropdown>\r\n                                  </div>\r\n                                </div>\r\n                                <div class="form-group">\r\n                                  <label\r\n                                    class="form-label"\r\n                                    *ngIf="\r\n                                      rowData.notificationType === bidoNotificationTypeConstants.DISASSEMBLY_TYPE_CODE\r\n                                    "\r\n                                  >\r\n                                    {{ getComponentName() + ".reversement" | translate }}\r\n                                  </label>\r\n\r\n                                  <div\r\n                                    class="form-control"\r\n                                    *ngIf="\r\n                                      rowData.notificationType === bidoNotificationTypeConstants.DISASSEMBLY_TYPE_CODE\r\n                                    "\r\n                                  >\r\n                                    <p-checkbox\r\n                                      class="aw-checkbox"\r\n                                      [(ngModel)]="rowData.createReverseTransfer"\r\n                                      [disabled]="rowData[\'_existingReversal\']"\r\n                                      binary="true"\r\n                                    ></p-checkbox>\r\n                                  </div>\r\n                                </div>\r\n                                <div class="form-group">\r\n                                  <label class="form-label">\r\n                                    {{ getComponentName() + ".transferOrders" | translate }}\r\n                                  </label>\r\n\r\n                                  <div class="form-control">\r\n                                    <div class="form-control-generic">\r\n                                      <a\r\n                                        *ngFor="let transferOrder of rowData[\'transferOrders\'] || []"\r\n                                        style="margin-right: 8px; text-decoration: none;"\r\n                                        (click)="openTransferOrder(transferOrder)"\r\n                                      >\r\n                                        {{ transferOrder.torCode }}\r\n                                      </a>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="row">\r\n                                <div class="form-group">\r\n                                  <label class="form-label">\r\n                                    {{ getComponentName() + ".functionalLocation" | translate }}\r\n                                  </label>\r\n\r\n                                  <div\r\n                                    class="form-control"\r\n                                    *ngIf="rowData.availableFls && rowData.availableFls.length > 0"\r\n                                  >\r\n                                    <p-dropdown\r\n                                      class="aw-dropdown fixed-width"\r\n                                      [options]="rowData.availableFls"\r\n                                      [(ngModel)]="rowData.selectedFlCode"\r\n                                      [showClear]="true"\r\n                                      placeholder="&nbsp;"\r\n                                      appendTo="body"\r\n                                      [disabled]="!!rowData.bidoNotificationDTO"\r\n                                      [filter]="true"\r\n                                    ></p-dropdown>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </mat-tab>\r\n          <mat-tab id="procurementRequestsTab">\r\n            <ng-template mat-tab-label>\r\n              {{ getComponentName() + ".procurementRequests" | translate }}\r\n            </ng-template>\r\n            <div class="grid-row">\r\n              <div class="grid-cell--12">\r\n                <aw-procurement-requests-table\r\n                  [workOrder]="workOrder"\r\n                  [procurementRequests]="procurementRequests"\r\n                  (askParentRefresh)="refresh()"\r\n                  [statusState]="disableDefectsTableButtonsInClosedStatus()"\r\n                ></aw-procurement-requests-table>\r\n              </div>\r\n            </div>\r\n          </mat-tab>\r\n\r\n          <mat-tab id="defectsTab">\r\n            <ng-template mat-tab-label>\r\n              {{ getComponentName() + ".defects" | translate }}\r\n            </ng-template>\r\n\r\n            <!-- Defects -->\r\n            <div class="grid-row">\r\n              <div id="defectsPanel" #defectsAnchor class="grid-cell--12" (click)="setSelectedAnchor(\'defectsAnchor\')">\r\n                <div\r\n                  class="grid-cell grid-cell--container grid-cell-documents"\r\n                  [ngClass]="{ active: isSelectedAnchor(\'defectsAnchor\') }"\r\n                >\r\n                  <aw-defect-list\r\n                    [userWorkflow]="userWorkflow"\r\n                    [isAddAvailable]="!isQualificationOngoing"\r\n                    [equipmentName]="woEquipement"\r\n                    [acrsEventCodeList]="acrsEventCodeList"\r\n                    [workDataDefect]="workDataDefect"\r\n                    [statusState]="disableDefectsTableButtonsInClosedStatus()"\r\n                  ></aw-defect-list>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </mat-tab>\r\n\r\n          <mat-tab id="taskDocumentsTab">\r\n            <ng-template mat-tab-label>\r\n              {{ getComponentName() + ".taskDocuments" | translate }}\r\n            </ng-template>\r\n\r\n            <!-- Task Documents -->\r\n            <div class="grid-row">\r\n              <div\r\n                id="taskDocumentsPanel"\r\n                #taskDocumentsAnchor\r\n                class="grid-cell--12"\r\n                (click)="setSelectedAnchor(\'taskDocumentsAnchor\')"\r\n              >\r\n                <div\r\n                  class="grid-cell grid-cell--container grid-cell-documents"\r\n                  [ngClass]="{ active: isSelectedAnchor(\'documentsAnchor\') }"\r\n                >\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ getComponentName() + ".taskDocuments" | translate }} ({{\r\n                          documentTableDisplayed ? documentTableDisplayed.length : 0\r\n                        }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content">\r\n                    <p-table\r\n                      id="documentTableDisplayed"\r\n                      [resizableColumns]="true"\r\n                      #ptableDocument\r\n                      class="aw-table2"\r\n                      [columns]="documentsTableCols"\r\n                      [value]="documentTableDisplayed"\r\n                      [(selection)]="selectedDocuments"\r\n                      dataKey="docName"\r\n                      [scrollable]="true"\r\n                      [paginator]="true"\r\n                      [rows]="TABLE_PAGINATION_DEFAULT_ROWS"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isLoadingDocumentTable"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isLoadingDocumentTable" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedDocuments.length > 0 }">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableDocumentGlobalFilter\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="ptableDocument.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class="aw-table-actions">\r\n                            <button\r\n                              id="downloadDocumentTableDisplayed"\r\n                              *ngIf="selectedDocuments.length > 0"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="downloadTaskFiles()"\r\n                            >\r\n                              {{ "global.download" | translate }}\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col class="aw-table-checkbox-wrapper" />\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th class="aw-table-checkbox-wrapper">\r\n                            <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                          </th>\r\n\r\n                          <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                            {{ componentData.componentId + "." + col.field | translate }}\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex" class="overflow">\r\n                          <td class="aw-table-checkbox-wrapper">\r\n                            <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                          </td>\r\n\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchCase="\'docName\'">\r\n                              <a\r\n                                *ngIf="rowData[\'docExtension\'] !== \'JPG\' && rowData[\'docExtension\'] !== \'PNG\'"\r\n                                (click)="downloadFile(rowData)"\r\n                                >{{ rowData[col.field] }}\r\n                              </a>\r\n\r\n                              <a\r\n                                *ngIf="rowData[\'docExtension\'] === \'JPG\' || rowData[\'docExtension\'] === \'PNG\'"\r\n                                (click)="showIllustration(rowData[\'materialIllustration\'])"\r\n                                >{{ rowData[col.field] }}\r\n                              </a>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'docExtension\'"> {{ showDocExtension(rowData) }} </span>\r\n                            <span *ngSwitchCase="\'docPublicationDate\'">\r\n                              {{ rowData[col.field] | date: "yyyy/MM/dd" }}\r\n                            </span>\r\n                            <span *ngSwitchCase="\'docExternal\'">\r\n                              {{ rowData[col.field] }}\r\n                              <i\r\n                                *ngIf="validateUrl(rowData[col.field])"\r\n                                class="fa fa-fw fa-external-link aw-icon aw-icon-with-border"\r\n                                aria-hidden="true"\r\n                                pTooltip="{{ \'global.open\' | translate }}"\r\n                                tooltipPosition="top"\r\n                                (click)="openUrl(rowData[col.field])"\r\n                              ></i>\r\n                            </span>\r\n                            <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </mat-tab>\r\n\r\n          <mat-tab id="workOrderDocumentsTab">\r\n            <ng-template mat-tab-label>\r\n              {{ getComponentName() + ".workOrderDocuments" | translate }}\r\n            </ng-template>\r\n\r\n            <!-- WO Documents -->\r\n            <div class="grid-row">\r\n              <div\r\n                id="woDocumentsPanel"\r\n                #woDocumentsAnchor\r\n                class="grid-cell--12"\r\n                (click)="setSelectedAnchor(\'woDocumentsAnchor\')"\r\n              >\r\n                <div\r\n                  class="grid-cell grid-cell--container grid-cell-documents"\r\n                  [ngClass]="{ active: isSelectedAnchor(\'documentsAnchor\') }"\r\n                >\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 id="woBidmDocumentsTableDataTitle" class="grid-cell-title">\r\n                        {{ getComponentName() + ".woDocuments" | translate }} ({{ woBidmDocumentsTableData.dataCount }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content">\r\n                    <a-table id="woBidmDocumentsTableData" [dataSource]="woBidmDocumentsTableData">\r\n                      <ng-template tableActionsDef>\r\n                        <button\r\n                          id="deleteWoBidmDocumentsTableData"\r\n                          *ngIf="\r\n                            !isReadOpenMode &&\r\n                            woBidmDocumentsTableData.hasDataSelection &&\r\n                            !isQualificationOngoing &&\r\n                            !disableDefectsTableButtonsInClosedStatus()\r\n                          "\r\n                          type="button"\r\n                          mat-raised-button\r\n                          color="warn"\r\n                          (click)="deleteWODocs()"\r\n                        >\r\n                          {{ "global.delete" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          id="editWoBidmDocumentsTableData"\r\n                          *ngIf="\r\n                            !isReadOpenMode &&\r\n                            woBidmDocumentsTableData.dataSelectionCount === 1 &&\r\n                            !isQualificationOngoing\r\n                          "\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="openWOImportDocDialInEditMode()"\r\n                        >\r\n                          {{ "global.edit" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          id="addWoBidmDocumentsTableData"\r\n                          *ngIf="\r\n                            !isReadOpenMode &&\r\n                            !woBidmDocumentsTableData.hasDataSelection &&\r\n                            !isQualificationOngoing &&\r\n                            !disableDefectsTableButtonsInClosedStatus()\r\n                          "\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="openWOImportDocDialInCreateMode()"\r\n                        >\r\n                          {{ "global.add" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          id="downloadWoBidmDocumentsTableData"\r\n                          *ngIf="woBidmDocumentsTableData.hasDataSelection"\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="downloadWOFiles()"\r\n                        >\r\n                          {{ "global.download" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          id="saveWoBidmDocumentsTableData"\r\n                          *ngIf="!isReadOpenMode && wODocsHasBeeEdited && !isQualificationOngoing"\r\n                          type="button"\r\n                          color="primary"\r\n                          mat-raised-button\r\n                          (click)="saveWOBidmDoc()"\r\n                        >\r\n                          {{ "global.save" | translate }}\r\n                        </button>\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </div>\r\n      <aw-dialog-work-order-edition\r\n        *ngIf="displayWorkOrderEdit"\r\n        [(display)]="displayWorkOrderEdit"\r\n        [addWorkOrder]="addWorkOrder"\r\n        [workPackage]="workPackage"\r\n        [workOrders]="workOrderList"\r\n        (onValidated)="onAddWorkOrder($event)"\r\n      >\r\n      </aw-dialog-work-order-edition>\r\n\r\n      <aw-wo-last-update-popup\r\n        *ngIf="showLastUpdatePopup"\r\n        [workOrder]="workOrder"\r\n        [(display)]="showLastUpdatePopup"\r\n      ></aw-wo-last-update-popup>\r\n\r\n      <aw-dialog-postponement-form\r\n        *ngIf="displayRequestPostponement"\r\n        [(display)]="displayRequestPostponement"\r\n        (onValidated)="onValidateRequest($event)"\r\n      ></aw-dialog-postponement-form>\r\n\r\n      <aw-dialog-operation-check-form\r\n        *ngIf="displayOperationCheck"\r\n        [(display)]="displayOperationCheck"\r\n        (onValidationOK)="onOperationValidationOK($event)"\r\n        (onValidationKO)="onOperationValidationKO($event)"\r\n      ></aw-dialog-operation-check-form>\r\n\r\n      <aw-dialog-edit-duration\r\n        *ngIf="displayEditDuration"\r\n        [existingDuration]="timeToDisplay(selectedOperations[0].opePerformedDuration)"\r\n        [existingElapsed]="timeToDisplay(selectedOperations[0].opePerformedElapsed)"\r\n        [(display)]="displayEditDuration"\r\n        (onValidated)="onValidateDuration($event, 0)"\r\n      ></aw-dialog-edit-duration>\r\n\r\n      <aw-dialog-job-card-time-tracking-entries\r\n        *ngIf="displayTimeTracking"\r\n        [bidmTimeTrackingList]="bidmTimeTracking"\r\n        [addedBidmTimeTracking]="addedBidmTimeTracking"\r\n        [workOrder]="workOrder"\r\n        [selectedOperations]="selectedOperations[0]"\r\n        [(display)]="displayTimeTracking"\r\n        (onValidated)="onValidateTimeTracking($event)"\r\n      >\r\n      </aw-dialog-job-card-time-tracking-entries>\r\n\r\n      <aw-dialog-import-work-order-document\r\n        *ngIf="showAddWODocumentDialog"\r\n        [openMode]="openModeWOImportDoc"\r\n        [woDocument]="selectedWOBidmDocument"\r\n        [woDocumentList]="woBidmDocumentsResource"\r\n        [workOrder]="workOrder"\r\n        [(display)]="showAddWODocumentDialog"\r\n        (onUpdatedWODoc)="updateWODoc($event)"\r\n        (onAddedWODoc)="addWODoc($event)"\r\n      ></aw-dialog-import-work-order-document>\r\n\r\n      <aw-dialog-stakeholder\r\n        *ngIf="showAddStakeholderDialog"\r\n        [task]="bireTask"\r\n        [workOrder]="workOrder"\r\n        [openMode]="openModeStakeholder"\r\n        [(display)]="showAddStakeholderDialog"\r\n        (onUpdatedStakeholder)="onUpdateStakeholder($event)"\r\n        (onAddedStakeholder)="onAddStakeholder($event)"\r\n        [stakeholder]="selectedStakeholder"\r\n      ></aw-dialog-stakeholder>\r\n\r\n      <aw-dialog-update-logbook\r\n        *ngIf="showUpdateLogbookDialog"\r\n        [(display)]="showUpdateLogbookDialog"\r\n        [updateLogbookFromWorkOrderInput]="updateLogbookFromWorkOrderInput"\r\n        (onValidated)="updateLogbookFromWorkOrder($event)"\r\n      ></aw-dialog-update-logbook>\r\n\r\n      <aw-status-update-history\r\n        *ngIf="showOperationUpdatesPopup"\r\n        [object]="selectedOperation"\r\n        [data]="tableOperationUpdatesData"\r\n        [deleteApi]="deleteApi"\r\n        [(display)]="showOperationUpdatesPopup"\r\n        [keyMap]="updatesKeyMap"\r\n      ></aw-status-update-history>\r\n\r\n      <a-modal class="aw-modal" [(visible)]="currentIllustration">\r\n        <a-header>\r\n          <div class="close-wrapper">\r\n            <i class="aw-icon aw-icon-with-border material-icons" (click)="hideIllustration()">close</i>\r\n          </div>\r\n        </a-header>\r\n\r\n        <a-content>\r\n          <img *ngIf="currentIllustration" [src]="currentIllustration" />\r\n        </a-content>\r\n      </a-modal>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/work-order-form.component.scss':
      /*!*********************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/work-order-form.component.scss ***!
  \*********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .alignLeft {\n  text-align: left; }\n\n:host .procurement-alert {\n  font-weight: 600;\n  text-align: center;\n  display: inline-block;\n  width: 50%; }\n\n:host .procurement--nok {\n  background-color: #f6685e; }\n\n:host .procurement--ok {\n  background-color: #4caf50; }\n\n:host .procurement--warning {\n  background-color: #ffc107; }\n\n:host /deep/ p-progressbar.pla .ui-progressbar-value {\n  background: #c8d4d6; }\n\n:host /deep/ p-progressbar.ong .ui-progressbar-value {\n  background: #b8d0e8; }\n\n:host /deep/ p-progressbar.tbc .ui-progressbar-value {\n  background: #b8d0e8; }\n\n:host /deep/ p-progressbar.per .ui-progressbar-value {\n  background: #006ea9; }\n\n:host /deep/ p-progressbar.clo .ui-progressbar-value {\n  background: #4caf50; }\n\n:host /deep/ p-progressbar.pos .ui-progressbar-value {\n  background: #4caf50; }\n\n:host /deep/ p-progressbar.por .ui-progressbar-value {\n  background: #dddf00; }\n\n:host /deep/ .colored-field {\n  padding: 5px 0px !important; }\n\n:host /deep/ .colored-field input {\n    padding: 3px 0px !important;\n    width: 100px !important; }\n\n:host /deep/ .colored-field .error-field {\n    background-color: #f6685e !important; }\n\n:host /deep/ .colored-field .ok-field {\n    background-color: #4caf50 !important; }\n\n:host /deep/ .colored-field .warning-field {\n    background-color: #ffc107 !important; }\n\n:host .space {\n  padding-top: 8px; }\n\n:host .link {\n  cursor: pointer; }\n\n:host .ok {\n  background-color: #4caf50 !important;\n  width: 30%;\n  text-align: center; }\n\n:host .warning {\n  background-color: #ffc107 !important;\n  width: 30%;\n  text-align: center; }\n\n:host .nok {\n  background-color: #f6685e !important;\n  width: 30%;\n  text-align: center; }\n\n:host .grid-cell-work-package {\n  height: 35%; }\n\n:host .grid-cell-work-in-progress .chart-container {\n  display: flex;\n  flex-direction: row; }\n\n@media screen and (max-width: 1280px) {\n    :host .grid-cell-work-in-progress .chart-container {\n      flex-direction: row; } }\n\n:host .grid-cell-work-in-progress .chart-container .chart-legend {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 8px; }\n\n:host .grid-cell-work-in-progress .chart-container .chart-legend .chart-legend-label {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n\n:host .grid-cell-work-in-progress .chart-container .chart-legend .chart-legend-label .chart-legend-label-color {\n        height: 0.75rem;\n        margin-right: 8px;\n        width: 2rem; }\n\n:host .grid-cell-work-in-progress .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.airworthy {\n          background-color: #4caf50; }\n\n:host .grid-cell-work-in-progress .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.airworthy-with-alerts {\n          background-color: #ffc107; }\n\n:host .grid-cell-work-in-progress .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.not-airworthy {\n          background-color: #f6685e; }\n\n:host .grid-cell-work-in-progress .chart-container .chart-legend .chart-value {\n      font-weight: 700;\n      text-align: end;\n      padding-right: 5px; }\n\n:host .grid-cell-work-in-progress .chart-container .chart-wrapper {\n    position: relative;\n    height: 9rem;\n    width: 99%; }\n\n.grid-cell-work-in-progress {\n  padding-top: 10px;\n  height: 65%; }\n\n.outgoingConf.section {\n  flex-grow: 1;\n  text-align: center; }\n\n.outgoingConf.row {\n  flex-wrap: nowrap !important; }\n\n.outgoingConf .row {\n  flex: 1;\n  padding: 0; }\n\n.outgoingConf input {\n  text-align: center; }\n\n.outgoingConf .ok {\n  background-color: #4caf50 !important; }\n\n.outgoingConf .outgoing-conf-warning {\n  background-color: #ffc107 !important; }\n\n.outgoingConf .outgoing-conf-nok {\n  background-color: #f6685e !important; }\n\n.link {\n  padding-top: 24px;\n  padding-bottom: 8px;\n  color: #01579b; }\n\n.action-list {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 15px; }\n\n.action-list .aw-btn {\n    margin-left: 8px; }\n\n.action-list .aw-btn:first-of-type {\n      margin-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3JrLW9yZGVyL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXG1haW50ZW5hbmNlXFx3b3JrLW9yZGVyXFxmb3JtXFx3b3JrLW9yZGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2Uvd29yay1vcmRlci9mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2Uvd29yay1vcmRlci9mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFSSxnQkFBZ0IsRUFBQTs7QUFGcEI7RUFNSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixVQUFVLEVBQUE7O0FBVGQ7RUFhSSx5QkNRZ0IsRUFBQTs7QURyQnBCO0VBaUJJLHlCQ0NrQixFQUFBOztBRGxCdEI7RUFxQkkseUJDRlksRUFBQTs7QURuQmhCO0VBeUJJLG1CQ0RXLEVBQUE7O0FEeEJmO0VBNEJJLG1CQ05pQixFQUFBOztBRHRCckI7RUErQkksbUJDVGlCLEVBQUE7O0FEdEJyQjtFQWtDSSxtQkNYZ0IsRUFBQTs7QUR2QnBCO0VBcUNJLG1CQ25Ca0IsRUFBQTs7QURsQnRCO0VBd0NJLG1CQ3RCa0IsRUFBQTs7QURsQnRCO0VBMkNJLG1CQ2xCYSxFQUFBOztBRHpCakI7RUErQ0ksMkJBQTJCLEVBQUE7O0FBL0MvQjtJQWlETSwyQkFBMkI7SUFDM0IsdUJBQXVCLEVBQUE7O0FBbEQ3QjtJQXFETSxvQ0FBd0MsRUFBQTs7QUFyRDlDO0lBd0RNLG9DQUEwQyxFQUFBOztBQXhEaEQ7SUEyRE0sb0NBQW9DLEVBQUE7O0FBM0QxQztFQWdFSSxnQkFBZ0IsRUFBQTs7QUFoRXBCO0VBb0VJLGVBQWUsRUFBQTs7QUFwRW5CO0VBd0VJLG9DQUEwQztFQUMxQyxVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBMUV0QjtFQThFSSxvQ0FBb0M7RUFDcEMsVUFBVTtFQUNWLGtCQUFrQixFQUFBOztBQWhGdEI7RUFvRkksb0NBQXdDO0VBQ3hDLFVBQVU7RUFDVixrQkFBa0IsRUFBQTs7QUF0RnRCO0VBMEZJLFdBQVcsRUFBQTs7QUExRmY7RUVvQkUsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBRjRFZjtJQWpHTjtNQWtHUSxtQkFBbUIsRUFBQSxFQTZDdEI7O0FBL0lMO0lFZUUsYUFBYTtJQUNiLHNCQUFzQjtJRndGaEIsdUJBQXVCO0lBQ3ZCLGdCQ2hFVSxFQUFBOztBRHpDbEI7TUVvQkUsYUFBYTtNQUNiLG1CQUFtQjtNRnlGWCxtQkFBbUIsRUFBQTs7QUE5RzdCO1FBaUhZLGVBQWU7UUFDZixpQkN6RU07UUQwRU4sV0FBVyxFQUFBOztBQW5IdkI7VUFzSGMseUJDcEdRLEVBQUE7O0FEbEJ0QjtVQTBIYyx5QkN2R0UsRUFBQTs7QURuQmhCO1VBOEhjLHlCQ3pHTSxFQUFBOztBRHJCcEI7TUFvSVUsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixrQkFBa0IsRUFBQTs7QUF0STVCO0lBMklRLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVSxFQUFBOztBQU1sQjtFQUNFLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsT0FBTztFQUNQLFVBQVUsRUFBQTs7QUFHWjtFQUVJLGtCQUFrQixFQUFBOztBQUZ0QjtFQUtJLG9DQUEwQyxFQUFBOztBQUw5QztFQVNJLG9DQUFvQyxFQUFBOztBQVR4QztFQWFJLG9DQUF3QyxFQUFBOztBQUk1QztFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7O0FBSGxCO0lBTUksZ0JDMUpjLEVBQUE7O0FEb0psQjtNQVNNLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2Uvd29yay1vcmRlci9mb3JtL3dvcmstb3JkZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5hbGlnbkxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIC5wcm9jdXJlbWVudC1hbGVydCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5wcm9jdXJlbWVudC0tbm9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gIH1cclxuXHJcbiAgLnByb2N1cmVtZW50LS1vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gIH1cclxuXHJcbiAgLnByb2N1cmVtZW50LS13YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgfVxyXG5cclxuICAvZGVlcC8gcC1wcm9ncmVzc2Jhci5wbGEgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICRncmV5MTtcclxuICB9XHJcbiAgL2RlZXAvIHAtcHJvZ3Jlc3NiYXIub25nIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZS1saWdodDE7XHJcbiAgfVxyXG4gIC9kZWVwLyBwLXByb2dyZXNzYmFyLnRiYyAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZDogJGJsdWUtbGlnaHQxO1xyXG4gIH1cclxuICAvZGVlcC8gcC1wcm9ncmVzc2Jhci5wZXIgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICRibHVlLWRhcmsxO1xyXG4gIH1cclxuICAvZGVlcC8gcC1wcm9ncmVzc2Jhci5jbG8gLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICRncmVlbi1saWdodDE7XHJcbiAgfVxyXG4gIC9kZWVwLyBwLXByb2dyZXNzYmFyLnBvcyAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZDogJGdyZWVuLWxpZ2h0MTtcclxuICB9XHJcbiAgL2RlZXAvIHAtcHJvZ3Jlc3NiYXIucG9yIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkeWVsbG93MTtcclxuICB9XHJcblxyXG4gIC9kZWVwLyAuY29sb3JlZC1maWVsZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIHBhZGRpbmc6IDNweCAwcHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZXJyb3ItZmllbGQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm9rLWZpZWxkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLndhcm5pbmctZmllbGQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3BhY2Uge1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICB9XHJcblxyXG4gIC5saW5rIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLndhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5ub2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDEgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLXdvcmstcGFja2FnZSB7XHJcbiAgICBoZWlnaHQ6IDM1JTtcclxuICB9XHJcblxyXG4gIC5ncmlkLWNlbGwtd29yay1pbi1wcm9ncmVzcyB7XHJcbiAgICAuY2hhcnQtY29udGFpbmVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaGFydC1sZWdlbmQge1xyXG4gICAgICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcblxyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAuY2hhcnQtbGVnZW5kLWxhYmVsIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAuY2hhcnQtbGVnZW5kLWxhYmVsLWNvbG9yIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwLjc1cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICRtYXJnaW4tdmFsdWU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xyXG5cclxuICAgICAgICAgICAgJi5haXJ3b3J0aHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYWlyd29ydGh5LXdpdGgtYWxlcnRzIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLm5vdC1haXJ3b3J0aHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhcnQtdmFsdWUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaGFydC13cmFwcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiA5cmVtO1xyXG4gICAgICAgIHdpZHRoOiA5OSU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ncmlkLWNlbGwtd29yay1pbi1wcm9ncmVzcyB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgaGVpZ2h0OiA2NSU7XHJcbn1cclxuXHJcbi5vdXRnb2luZ0NvbmYuc2VjdGlvbiB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm91dGdvaW5nQ29uZi5yb3cge1xyXG4gIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vdXRnb2luZ0NvbmYgLnJvdyB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ub3V0Z29pbmdDb25mIHtcclxuICBpbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAub3V0Z29pbmctY29uZi13YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5vdXRnb2luZy1jb25mLW5vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmxpbmsge1xyXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgY29sb3I6ICMwMTU3OWI7XHJcbn1cclxuXHJcbi5hY3Rpb24tbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gIC5hdy1idG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFV0aWxzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBidXR0b24tY29sb3IoJGJhY2tncm91bmQtY29sb3IsICRjb2xvciwgJGJvcmRlci1jb2xvcjogbnVsbCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogJGNvbG9yO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIsXHJcbiAgJjpub3QoOmRpc2FibGVkKS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpZigkYm9yZGVyLWNvbG9yID09IG51bGwsICRjb2xvciwgJGJvcmRlci1jb2xvcik7XHJcbiAgICBjb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmxleC1jb2x1bW4oKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleC1yb3coKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQoKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuXHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWRpc2FibGVkKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWRpc2FibGVkO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1mb2N1cygpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxufVxyXG5cclxuQG1peGluIGlucHV0LWhvdmVyKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VhcmNoLWNyaXRlcmlhLWNvbnRhaW5lciB7XHJcbiAgLmFkdmFuY2VkLWNyaXRlcmlhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtY3JpdGVyaWEtZm9vdGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAuYXctYnRuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlY3Rpb24tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiA0KTtcclxuXHJcbiAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgJi5yZXF1aXJlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkKCk7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hbGVydCB7XHJcbiAgICAgICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICYgPiBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0LW92ZXJmbG93LWhpZGRlbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdyaWQgZm9ybSBjb250cm9scyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJNZWRpdW1cIjtcclxuXHJcbiAgJiA+IGlucHV0ICsgcC1tZXNzYWdlID4gLnVpLW1lc3NhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjpmb2N1cyxcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiKDI1NSwgMjU1LCAyNTUpIDYwJSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgIC5hdy1pY29uIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4sXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0biB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcblxyXG4gICAgICAmLmF3LWNhbGVuZGFyIC51aS1pbnB1dHRleHQsXHJcbiAgICAgICYuYXctZHJvcGRvd24gLnVpLWRyb3Bkb3duLFxyXG4gICAgICAmLmF3LWlucHV0LFxyXG4gICAgICAmLmF3LXRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1jYWxlbmRhciB7XHJcbiAgICAgIC8vIEZJWE1FOiBmaXggYW4gVUkgaXNzdWUgb24gUHJpbWVORyBjYWxlbmRhciBjb21wb25lbnQ7IHRvIHJlbW92ZSB3aGVuIGlzc3VlIHdpbGwgYmUgZml4ZWQgdXBzdHJlYW1cclxuICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgICAgIC5hdy1pY29uOm5vdCgucmVhZC1vbmx5LWxpbmspIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jazsgLy8gbm9uZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY29udHJvbC1kYXRhIHtcclxuICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tbmltcCxcclxuICAgIC5idG4tZXh0ZXJuYWwtbGluay13cmFwcGVyLFxyXG4gICAgLmJ0bi1jbGVhci13cmFwcGVyLFxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyLFxyXG4gICAgLmJ0bi1zZWFyY2gtd3JhcHBlciB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlciB7XHJcbiAgICAgIC5hdy1maWxldXBsb2FkIHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51aS1idXR0b24ge1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxlOTM0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tY2xlYXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tc2VhcmNoIHtcclxuICAgICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1yYWRpb2J1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICYgPiAuYXctcmFkaW9idXR0b24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMiAqICN7JG1hcmdpbi12YWx1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLWdlbmVyaWMge1xyXG4gIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG5cclxuICAmID4gYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IC5hbGVydCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDVyZW07XHJcblxyXG4gICAgJi5hbGVydC0tbm9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0tb2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLXdhcm5pbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNhbGVuZGFyIHtcclxuICAmLnVpLWlucHV0d3JhcHBlci1mb2N1cyB7XHJcbiAgICAudWktY2FsZW5kYXIgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuQG1peGluIGdyaWQtY2hlY2tib3gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRjaGVja2JveC1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRjaGVja2JveC1oZWlnaHQ7XHJcblxyXG4gIC51aS1jaGtib3gge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLWNoa2JveC1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1kcm9wZG93biB7XHJcbiAgLnVpLWRyb3Bkb3duIHtcclxuICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWZvY3VzIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uLFxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbiB7XHJcbiAgICAgIHJpZ2h0OiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgQGluY2x1ZGUgdGV4dC1vdmVyZmxvdy1oaWRkZW4oKTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyICogMS43NXJlbSk7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZpeGVkLXdpZHRoIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZmlsZXVwbG9hZCB7XHJcbiAgQGV4dGVuZCAuYXctYnRuO1xyXG5cclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICAudWktZmlsZXVwbG9hZC1jaG9vc2Uge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAwICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1idXR0b24tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtaW5wdXQoKSB7XHJcbiAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6Zm9jdXMge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRleHRhcmVhIHtcclxuICBAaW5jbHVkZSBncmlkLWlucHV0KCk7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1pbi1oZWlnaHQ6ICRmb3JtLWNvbnRyb2wtaGVpZ2h0O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXJhZGlvYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG4gIHdpZHRoOiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG5cclxuICAudWktcmFkaW9idXR0b24ge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLXJhZGlvYnV0dG9uLWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcblxyXG4gICAgICAgIC51aS1yYWRpb2J1dHRvbi1pY29uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gY2FsZW5kYXItcGFuZWwge1xyXG4gIC51aS1kYXRlcGlja2VyOm5vdCgudWktZGF0ZXBpY2tlci1pbmxpbmUpIHtcclxuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRyb3Bkb3duLXBhbmVsIHtcclxuICAudWktZHJvcGRvd24tcGFuZWwge1xyXG4gICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoICRib3JkZXItc3R5bGUgJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cclxuICAgIC51aS1kcm9wZG93bi1pdGVtcy13cmFwcGVyIC51aS1kcm9wZG93bi1saXN0IHtcclxuICAgICAgLnVpLWRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgcGFkZGluZzogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnVpLXN0YXRlLWhpZ2hsaWdodCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/form/work-order-form.component.ts':
      /*!*******************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/work-order-form.component.ts ***!
  \*******************************************************************************/
      /*! exports provided: WorkOrderFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'WorkOrderFormComponent', function() {
          return WorkOrderFormComponent;
        });
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
        /* harmony import */ var _modules_purchase_contract_utils_table_data_source_with_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../modules/purchase-contract/utils/table-data-source-with-history */ './src/app/modules/purchase-contract/utils/table-data-source-with-history.ts'
        );
        /* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/components/component-sidebar/page-toc.service */ './src/app/shared/components/component-sidebar/page-toc.service.ts'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/constants/bido-evolution-constants */ './src/app/shared/constants/bido-evolution-constants.ts'
        );
        /* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_bido_notification_type_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/constants/bido-notification-type-constants */ './src/app/shared/constants/bido-notification-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/constants/control-config-constants */ './src/app/shared/constants/control-config-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../shared/enums/table-column-filter-mode.enum */ './src/app/shared/enums/table-column-filter-mode.enum.ts'
        );
        /* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../shared/enums/table-selection-mode.enum */ './src/app/shared/enums/table-selection-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_dassault_field_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../../shared/services/dassault/field.service */ './src/app/shared/services/dassault/field.service.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_bidm_document_utils__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ../../../../shared/utils/bidm-document-utils */ './src/app/shared/utils/bidm-document-utils.ts'
        );
        /* harmony import */ var _shared_utils_bidm_work_order_utils__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ../../../../shared/utils/bidm-work-order-utils */ './src/app/shared/utils/bidm-work-order-utils.ts'
        );
        /* harmony import */ var _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ../../../../shared/utils/bido-equipment-utils */ './src/app/shared/utils/bido-equipment-utils.ts'
        );
        /* harmony import */ var _shared_utils_bire_item_utils__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ../../../../shared/utils/bire-item-utils */ './src/app/shared/utils/bire-item-utils.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! ../../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _shared_utils_image_utils__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
          /*! ../../../../shared/utils/image-utils */ './src/app/shared/utils/image-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
          /*! ../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _shared_utils_url_utils__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
          /*! ../../../../shared/utils/url-utils */ './src/app/shared/utils/url-utils.ts'
        );
        /* harmony import */ var _shared_utils_workflow_utils__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
          /*! ../../../../shared/utils/workflow-utils */ './src/app/shared/utils/workflow-utils.ts'
        );
        /* harmony import */ var _human_resources_employee_form_employee_form_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
          /*! ../../../human-resources/employee-form/employee-form.service */ './src/app/main/human-resources/employee-form/employee-form.service.ts'
        );
        /* harmony import */ var _logistics_logistics_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
          /*! ../../../logistics/logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
          /*! ../../../overlay/overlay.service */ './src/app/main/overlay/overlay.service.ts'
        );
        /* harmony import */ var _procurement_request_procurement_requests_table_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
          /*! ../../procurement-request/procurement-requests-table.service */ './src/app/main/maintenance/procurement-request/procurement-requests-table.service.ts'
        );
        /* harmony import */ var _work_package_form_work_package_form_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
          /*! ../../work-package/form/work-package-form.service */ './src/app/main/maintenance/work-package/form/work-package-form.service.ts'
        );
        /* harmony import */ var _status_work_order_status_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
          /*! ./status/work-order-status.component */ './src/app/main/maintenance/work-order/form/status/work-order-status.component.ts'
        );
        /* harmony import */ var _work_order_form_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
          /*! ./work-order-form.service */ './src/app/main/maintenance/work-order/form/work-order-form.service.ts'
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
        var __values =
          (undefined && undefined.__values) ||
          function(o) {
            var m = typeof Symbol === 'function' && o[Symbol.iterator],
              i = 0;
            if (m) return m.call(o);
            return {
              next: function() {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          };

        var WorkOrderFormComponent = /** @class */ (function(_super) {
          __extends(WorkOrderFormComponent, _super);
          function WorkOrderFormComponent(
            favoriteService,
            loaderService,
            messageService,
            pageTocService,
            serializationService,
            tabService,
            logisticsService,
            domSanitizer,
            employeeFormService,
            translateService,
            sessionService,
            woFormService,
            workPackageFormService,
            davFieldService,
            dateService,
            confirmationService,
            procurementRequestsTableService,
            propertiesService,
            _overlayService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                pageTocService
              ) || this;
            _this.logisticsService = logisticsService;
            _this.domSanitizer = domSanitizer;
            _this.employeeFormService = employeeFormService;
            _this.translateService = translateService;
            _this.sessionService = sessionService;
            _this.woFormService = woFormService;
            _this.workPackageFormService = workPackageFormService;
            _this.davFieldService = davFieldService;
            _this.dateService = dateService;
            _this.confirmationService = confirmationService;
            _this.procurementRequestsTableService = procurementRequestsTableService;
            _this.propertiesService = propertiesService;
            _this._overlayService = _overlayService;
            _this.TABLE_PAGINATION_DEFAULT_ROWS =
              _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_9__[
                'AppConstants'
              ].TABLE_PAGINATION_DEFAULT_ROWS;
            _this.workOrder = {};
            _this.workPackage = {};
            _this.outgoinConfiguration = { ok: undefined, warning: undefined, nok: undefined };
            _this.stockControlConf = { ok: undefined, warning: undefined, nok: undefined };
            _this.showSaveSpinner = false;
            _this.isPostPonement = false;
            _this.displayWorkOrderEdit = false;
            _this.acrsEventCodeList = [];
            _this.isWoNeedCheck = true;
            _this.displayRequestPostponement = false;
            _this.displayOperationCheck = false;
            _this.chartVisible = false;
            _this.isLoadingOutgoingConf = false;
            _this.isAskRequestConf = false;
            _this.iscancelPostConf = false;
            _this.isLoadingStockControlConf = false;
            _this.isCommentEdit = false;
            _this.isAdditionnalWorkEdit = false;
            _this.displayPrintIdLabel = false;
            _this.operationSelectedIndex = -1;
            _this.stakeholder = {};
            _this.expandedWoAssetRows = {};
            _this.woAssetManagementReadyToExecuteDecision = false;
            _this.documentTableDisplayed = [];
            _this.documentsTableCols = [];
            _this.selectedDocuments = [];
            _this.awPropertiesConstants =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants'];
            _this.bidoNotificationTypeConstants =
              _shared_constants_bido_notification_type_constants__WEBPACK_IMPORTED_MODULE_13__[
                'BidoNotificationTypeConstants'
              ];
            _this.controlConfigConstants =
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_15__['ControlConfigConstants'];
            _this.operationTable = [];
            _this.selectedOperations = [];
            _this.bidmTimeTracking = [];
            _this.addedBidmTimeTracking = [];
            _this.selectedWOBidmDocument = {};
            _this.woBidmDocumentsResource = [];
            _this.showAddWODocumentDialog = false;
            _this.wODocsHasBeeEdited = false;
            _this.isQualificationOngoing = false;
            _this.currentStakeholderIndex = -1;
            _this.woAssetManagementTable = [];
            _this.allWoAssetManagements = [];
            _this.selectedWoAssetManagements = [];
            _this.propertyRemovalReason = [];
            _this.expandedWoAssetRows = {};
            _this.updatesKeyMap = new Map();
            _this.initTablesHeader();
            _this.initDates();
            _this.initChart();
            _this.setLinkLists();
            // Load Status List
            _this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_16__['GenericPropertyConstants']
                  .PROCUREMENT_REQUEST_STATUS_MAP
              )
              .subscribe(function(res) {
                _this.procurementRequestStatusList = res;
              });
            _this.procurementRequestTypes = [];
            _this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_16__['GenericPropertyConstants']
                  .PROCUREMENT_REQUEST_TYPE_MAP
              )
              .subscribe(function(res) {
                _this.procurementRequestTypes = res;
              });
            _this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_16__['GenericPropertyConstants']
                  .REMOVAL_REASON_MAP
              )
              .subscribe(function(results) {
                _this.propertyRemovalReason = results;
              });
            _this.userWorkflowSubject.subscribe(function() {
              _this.updateWorkflowStatusList();
            });
            return _this;
          }
          WorkOrderFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_14__['ComponentConstants']
              .MAI_WORK_ORDER_FORM;
          };
          WorkOrderFormComponent.prototype.ngOnInit = function() {
            var _this = this;
            _super.prototype.ngOnInit.call(this);
            this.loadLists();
            this.woStatus = {
              costAndDuration: {}
            };
            if (this.sessionService.loggedUser) {
              this.woFormService.findBidoUserByLogin(this.sessionService.loggedUser.login).subscribe(function(user) {
                _this.user = user;
                if (user.employeeId) {
                  _this.woFormService.getEmployeeById(Number(user.employeeId)).subscribe(function(employee) {
                    _this.userText = _this.getEmployeeText(employee, user);
                  });
                  // Load screen if qualification is on going
                  _this.employeeFormService
                    .findQualificationsByEmployeeId(Number(user.employeeId))
                    .subscribe(function(qualifications) {
                      _this.findEmployeeQualificationDTO = qualifications;
                      _this.initWorkOrderWithQualificationOngoing();
                    });
                } else {
                  _this.userText = _this.getUserText(user);
                }
                if (_this.componentData.objectId) {
                  var objectId = _this.serializationService.deserialize(_this.componentData.objectId);
                  _this.bidmWorkOrderId = {
                    projectId: objectId.projectId,
                    woId: objectId.woId
                  };
                  _this.loadWorkOrder();
                  _this.loadBidmDocumentTableData();
                  _this.loadStakeholdersTable();
                  _this.initInstallRemoveStatuses();
                } else {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('notFound'));
                }
                _this.initToc();
              });
            }
          };
          WorkOrderFormComponent.prototype.setLinkLists = function() {
            this.setActionLinkList();
            this.setNavigationLinkList();
            this.loadPostponementConf();
          };
          WorkOrderFormComponent.prototype.getStakeholderNameById = function(stakeholderId) {
            var matchingUser = this.userList.find(function(user) {
              return user.value === stakeholderId;
            });
            return matchingUser ? matchingUser.label : undefined;
          };
          WorkOrderFormComponent.prototype.getEmployeeQualificationById = function(stakeholderRow) {
            var _this = this;
            if (
              stakeholderRow &&
              !stakeholderRow.qualification &&
              stakeholderRow._obj &&
              stakeholderRow._obj.woAssignedTo
            ) {
              this.employeeFormService
                .getEmployeeQualificationText(stakeholderRow._obj.woAssignedTo.toString())
                .subscribe(function(result) {
                  stakeholderRow.qualification = result;
                  _this.stakeholdersTableDataSource.update();
                });
            }
          };
          WorkOrderFormComponent.prototype.updateQualificationOnStakeholderDataSource = function() {
            var _this = this;
            this.stakeholdersTableDataSource.dataSrc.forEach(function(row) {
              _this.getEmployeeQualificationById(row);
            });
          };
          WorkOrderFormComponent.prototype.initWorkOrderWithQualificationOngoing = function() {
            var _this = this;
            if (this.qualificationNeeded && this.findEmployeeQualificationDTO) {
              var qualificationNeededCode_1 = this.qualificationNeeded.split(';');
              if (qualificationNeededCode_1[qualificationNeededCode_1.length - 1] === '') {
                qualificationNeededCode_1.length = qualificationNeededCode_1.length - 1;
              }
              var selectedQualificationsNeeded = this.findEmployeeQualificationDTO.filter(function(qualification) {
                return qualification.qualificationCode === qualificationNeededCode_1[0];
              });
              this.isQualificationOngoing = qualificationNeededCode_1.some(function(qualificationCode) {
                var qualification = _this.findEmployeeQualificationDTO.find(function(employeeQualification) {
                  return employeeQualification.qualificationCode === qualificationCode;
                });
                return (
                  !qualification ||
                  (!!qualification.bidtQualifEmployeeDTO && !!qualification.bidtQualifEmployeeDTO.qualifOngoing)
                );
              });
              if (selectedQualificationsNeeded) {
                var isSelectedQualifOngoing = selectedQualificationsNeeded.find(function(qualification) {
                  return qualification.bidtQualifEmployeeDTO && qualification.bidtQualifEmployeeDTO.qualifOngoing;
                });
                if (isSelectedQualifOngoing) {
                  this.isQualificationOngoing = true;
                }
                this.initEmployeeQualificationsStatus();
              }
            }
          };
          WorkOrderFormComponent.prototype.initEmployeeQualificationsStatus = function() {
            var _this = this;
            if (this.operationTable) {
              this.operationTable.forEach(function(operation) {
                if (operation) {
                  if (operation.opeQualification && !!_this.findEmployeeQualificationDTO) {
                    var qualification = _this.findEmployeeQualificationDTO.find(function(employeeQualification) {
                      return employeeQualification.qualificationCode === operation.opeQualification;
                    });
                    operation.canAchieveOperation =
                      !!qualification &&
                      !!qualification.bidtQualifEmployeeDTO &&
                      !qualification.bidtQualifEmployeeDTO.qualifOngoing;
                    operation.canStartOrEndDuration = !!qualification;
                  } else {
                    // Can always work on unqualified operation
                    operation.canAchieveOperation = true;
                    operation.canStartOrEndDuration = true;
                  }
                }
              });
            }
          };
          WorkOrderFormComponent.prototype.initBidmDocumentTableData = function() {
            this.woBidmDocumentsTableData = new _modules_purchase_contract_utils_table_data_source_with_history__WEBPACK_IMPORTED_MODULE_6__[
              'TableDataSourceWithHistory'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'docName',
                  translateKey: this.getTranslateKey('docName'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_8__['ColumnAlignment'].LEFT,
                  width: '30%'
                },
                {
                  field: 'docType',
                  translateKey: this.getTranslateKey('docType'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_8__['ColumnAlignment'].LEFT,
                  width: '30%'
                },
                {
                  field: 'docExtension',
                  translateKey: this.getTranslateKey('docExtension'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_8__['ColumnAlignment'].LEFT,
                  width: '15%'
                },
                {
                  field: 'docSize',
                  translateKey: this.getTranslateKey('docSize'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_8__['ColumnAlignment'].LEFT,
                  width: '15%'
                },
                {
                  field: 'docPublicationDate',
                  translateKey: this.getTranslateKey('docPublicationDate'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_8__['ColumnAlignment'].LEFT,
                  width: '10%'
                }
              ],
              data: [],
              allowUniqueValue: true,
              propertiesWitchIdentifyData: ['docName'],
              errorOnAddedDuplicate: this.translateService.instant('global.warningOnFileExists'),
              errorOnUpdatedDuplicate: this.translateService.instant('global.warningOnFileExists')
            });
          };
          WorkOrderFormComponent.prototype.initStakeholdersTableDataSource = function() {
            this.stakeholdersTableDataSource = new _modules_purchase_contract_utils_table_data_source_with_history__WEBPACK_IMPORTED_MODULE_6__[
              'TableDataSourceWithHistory'
            ]({
              allowMultiSelect: true,
              enableSelection: true,
              columns: [
                {
                  field: 'stakeholderName',
                  translateKey: this.getTranslateKey('stakeholderName')
                },
                {
                  field: 'qualification',
                  translateKey: this.getTranslateKey('qualification')
                },
                {
                  field: 'isController',
                  translateKey: this.getTranslateKey('isController')
                }
              ],
              data: [],
              allowUniqueValue: true,
              propertiesWitchIdentifyData: ['stakeholderName'],
              errorOnAddedDuplicate: this.translateService.instant('WorkOrderFormComponent.warningOnStakeholderExists'),
              errorOnUpdatedDuplicate: this.translateService.instant(
                'WorkOrderFormComponent.warningOnStakeholderExists'
              )
            });
          };
          WorkOrderFormComponent.prototype.createDocumentRow = function(document) {
            var documentRow = {
              docExtension: _shared_utils_bidm_document_utils__WEBPACK_IMPORTED_MODULE_31__[
                'BidmDocumentUtils'
              ].formatDocExtension(document),
              docName: document.documentName,
              docPublicationDate: this.dateService.momentToString(
                moment__WEBPACK_IMPORTED_MODULE_3__(Number(document.documentPublicationDate))
              ),
              docSize: _shared_utils_bidm_document_utils__WEBPACK_IMPORTED_MODULE_31__[
                'BidmDocumentUtils'
              ].formatDocSize(document),
              docType: document.documentType,
              isChecked: false,
              _obj: document
            };
            return documentRow;
          };
          WorkOrderFormComponent.prototype.openWOImportDocDialInEditMode = function() {
            this.openModeWOImportDoc =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Write;
            this.woBidmDocumentsResource = this.woBidmDocumentsTableData.dataSrc.map(function(row) {
              return row._obj;
            });
            this.selectedWOBidmDocument = this.woBidmDocumentsTableData.dataSelection[0]._obj;
            if (this.woBidmDocumentsResource && this.selectedWOBidmDocument) {
              this.showAddWODocumentDialog = true;
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('notFound'));
            }
          };
          WorkOrderFormComponent.prototype.openWOImportDocDialInCreateMode = function() {
            this.openModeWOImportDoc =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Create;
            this.woBidmDocumentsResource = this.woBidmDocumentsTableData.dataSrc.map(function(row) {
              return row._obj;
            });
            this.showAddWODocumentDialog = true;
          };
          WorkOrderFormComponent.prototype.loadBidmDocumentTableData = function() {
            var _this = this;
            this.woBidmDocumentsTableData.setData([]);
            this.woFormService.findBidmDocumentsByWorkOrder(this.bidmWorkOrderId).subscribe(function(result) {
              _this.woBidmDocumentsResource = __spread(result);
              _this.woBidmDocumentsTableData.setData(
                result.map(function(doc) {
                  return _this.createDocumentRow(doc);
                })
              );
            });
          };
          WorkOrderFormComponent.prototype.loadStakeholdersTable = function() {
            var _this = this;
            this.stakeholdersTableDataSource.setData([]);
            this.woFormService.userList$.subscribe(function(list) {
              _this.userList = list;
              _this.initWoUserList();
              _this.woFormService.findBidmWoAssignmentsByWorkOrder(_this.bidmWorkOrderId).subscribe(function(result) {
                result.forEach(function(elt) {
                  _this.employeeFormService
                    .getEmployeeQualificationText(elt.woAssignedTo.toString())
                    .subscribe(function(res) {
                      elt.employeeQualification = res;
                    });
                  if (_this.user && elt.woAssignedTo) {
                    _this.woFormService
                      .findUserById({ userId: elt.woAssignedTo.toString() })
                      .subscribe(function(receivingUser) {
                        if (_this.user && receivingUser.userId === _this.user.userId) {
                          _this.updateOpenMode(
                            _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode']
                              .Write
                          );
                        }
                      });
                  }
                });
                _this.stakeholdersTableDataSource.setData(
                  result.map(function(stakeholder) {
                    return _this.createStakeholderRow(stakeholder);
                  })
                );
                _this.updateQualificationOnStakeholderDataSource();
              });
            });
          };
          WorkOrderFormComponent.prototype.downloadTaskFiles = function() {
            this.selectedDocuments.forEach(function(documentRow) {
              if (!!documentRow._obj) {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_35__['FileUtils'].downloadFile(
                  documentRow._obj.docFile,
                  documentRow._obj.docName
                );
              }
            });
          };
          WorkOrderFormComponent.prototype.downloadWOFiles = function() {
            this.woBidmDocumentsTableData.dataSelection.forEach(function(documentRow) {
              if (!!documentRow._obj) {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_35__['FileUtils'].downloadFile(
                  documentRow._obj.documentContent,
                  documentRow._obj.documentName
                );
              }
            });
          };
          WorkOrderFormComponent.prototype.findBidmDocumentByDocumentRow = function(documentRow) {
            return this.woBidmDocumentsResource.find(function(elt) {
              return elt.documentName === documentRow.docName;
            });
          };
          WorkOrderFormComponent.prototype.updateWODoc = function(docToUpdate) {
            var _this = this;
            var index = this.woBidmDocumentsResource.findIndex(function(elt) {
              return elt.documentName === _this.woBidmDocumentsTableData.dataSelection[0].docName;
            });
            if (index !== -1) {
              this.woBidmDocumentsResource.splice(index, 1, docToUpdate);
            }
            this.woBidmDocumentsTableData.replaceData(
              this.woBidmDocumentsTableData.dataSelection[0],
              this.createDocumentRow(docToUpdate)
            );
            this.wODocsHasBeeEdited = true;
            this.setWODocAttributeAfterAnyUpdateAction();
          };
          WorkOrderFormComponent.prototype.addWODoc = function(docToAdd) {
            this.woBidmDocumentsTableData.addData([this.createDocumentRow(docToAdd)]);
            this.woBidmDocumentsResource.push(docToAdd);
            this.wODocsHasBeeEdited = true;
            this.setWODocAttributeAfterAnyUpdateAction();
          };
          WorkOrderFormComponent.prototype.setWODocAttributeAfterAnyUpdateAction = function() {
            this.woBidmDocumentsTableData.dataSelection = [];
            this.selectedWOBidmDocument = {};
            this.wODocsHasBeeEdited = true;
          };
          WorkOrderFormComponent.prototype.deleteWODocs = function() {
            var _this = this;
            var partialMessageKey =
              this.woBidmDocumentsTableData.dataSelectionCount > 1
                ? 'confirmDeleteSelectedDocuments'
                : 'confirmDeleteSelectedDocument';
            this.confirmationService.confirmDelete({
              messageKey: 'global.' + partialMessageKey,
              accept: function() {
                _this.woBidmDocumentsTableData.dataSelection.forEach(function(docTodDel) {
                  _this.woBidmDocumentsResource.filter(function(doc) {
                    return docTodDel.docName !== doc.documentName;
                  });
                });
                _this.woBidmDocumentsTableData.deleteDataSelection();
                _this.setWODocAttributeAfterAnyUpdateAction();
              }
            });
          };
          WorkOrderFormComponent.prototype.addStakeholder = function() {
            this.currentStakeholderIndex = -1;
            this.openModeStakeholder =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Create;
            this.showAddStakeholderDialog = true;
          };
          WorkOrderFormComponent.prototype.editStakeholder = function() {
            var _this = this;
            if (this.stakeholdersTableDataSource.hasDataSelection) {
              this.currentStakeholderIndex = this.stakeholdersTableDataSource.dataSrc.findIndex(function(stakeholder) {
                return stakeholder === _this.stakeholdersTableDataSource.dataSelection[0];
              });
              this.openModeStakeholder =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read;
              this.showAddStakeholderDialog = true;
            }
            this.selectedStakeholder = this.stakeholdersTableDataSource.dataSelection[0]._obj;
          };
          WorkOrderFormComponent.prototype.deleteStakeholders = function() {
            var _this = this;
            var partialMessageKey =
              this.stakeholdersTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedStakeholders'
                : 'confirmDeleteSelectedStakeholder';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.stakeholdersTableDataSource.dataSelection.forEach(function(stakeholder) {
                  if (!!stakeholder._obj) {
                    var stakeholderToDelete = {
                      woId: stakeholder._obj.woId,
                      projectId: stakeholder._obj.projectId,
                      woAssignedTo: stakeholder._obj.woAssignedTo
                    };
                    _this.woFormService.removeBidmWoAssignment(stakeholderToDelete).subscribe(function() {
                      _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteStakeholder'));
                      _this.stakeholdersTableDataSource.deleteDataSelection();
                      _this.loadStakeholdersTable();
                    });
                  }
                });
              }
            });
          };
          WorkOrderFormComponent.prototype.onAddStakeholder = function(event) {
            var _this = this;
            if (!!event && !!this.workOrder.projectId && !!this.workOrder.woId) {
              var saveBidmWoAssignmentInput = {
                projectId: this.workOrder.projectId,
                woId: this.workOrder.woId,
                woAssignedTo: event.woAssignedTo,
                controller: event.controller
              };
              var addedStakeholder = this.stakeholdersTableDataSource.addData([this.createStakeholderRow(event)]);
              if (addedStakeholder) {
                this.woFormService.createBidmWoAssignment(saveBidmWoAssignmentInput).subscribe(function(_result) {
                  _this.messageService.showSuccessMessage('global.successOnSave');
                  _this.loadStakeholdersTable();
                });
              }
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('propertyValueAlreadyExists'));
            }
          };
          WorkOrderFormComponent.prototype.onUpdateStakeholder = function(event) {
            var _this = this;
            if (!!event) {
              var saveBidmWoAssignmentInput = {
                projectId: this.workOrder.projectId,
                woId: this.workOrder.woId,
                woAssignedTo: event.woAssignedTo,
                controller: event.controller
              };
              var updatedStakeholder = this.stakeholdersTableDataSource.replaceData(
                this.stakeholdersTableDataSource.dataSelection[0],
                this.createStakeholderRow(event)
              );
              if (updatedStakeholder) {
                this.woFormService.updateBidmWoAssignment(saveBidmWoAssignmentInput).subscribe(function(_result) {
                  _this.messageService.showSuccessMessage('global.successOnSave');
                  _this.loadStakeholdersTable();
                  _this.updateQualificationOnStakeholderDataSource();
                });
              }
              this.stakeholdersTableDataSource.dataSelection = [];
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('propertyValueAlreadyExists'));
            }
          };
          WorkOrderFormComponent.prototype.createStakeholderRow = function(stakeholder) {
            var stakeholderRow = {
              stakeholderName: this.getStakeholderNameById(stakeholder.woAssignedTo),
              isController: stakeholder.controller,
              _obj: stakeholder
            };
            return stakeholderRow;
          };
          WorkOrderFormComponent.prototype.setActionLinkList = function() {
            var _this = this;
            var addWoLabelKey = this.getTranslateKey('addWo');
            var printLabelKey = this.getTranslateKey('print');
            var cancelPostLabelKey = this.getTranslateKey('cancelPost');
            var requestLabelKey = this.getTranslateKey('request');
            var confirmLabelKey = this.getTranslateKey('confirm');
            var cancelLabelKey = this.getTranslateKey('cancel');
            var openLabelKey = this.getTranslateKey('open');
            var closeLabelKey = this.getTranslateKey('close');
            this.translateService
              .get([
                addWoLabelKey,
                printLabelKey,
                cancelPostLabelKey,
                requestLabelKey,
                confirmLabelKey,
                cancelLabelKey,
                openLabelKey,
                closeLabelKey
              ])
              .subscribe(function(results) {
                var addWoLabel = results ? results[addWoLabelKey] : 'Add Work order';
                var printLabel = results ? results[printLabelKey] : 'Print';
                var cancelPostLabel = results ? results[cancelPostLabelKey] : 'Cancel Postponement Request';
                var requestLabel = results ? results[requestLabelKey] : 'Cancel Postponement Request';
                var confirmLabel = results ? results[confirmLabelKey] : 'Confirm Work Completion';
                var cancelLabel = results ? results[cancelLabelKey] : 'Cancel Work Completion';
                var openLabel = results ? results[openLabelKey] : 'Open Work Order';
                var closeLabel = results ? results[closeLabelKey] : 'Close Work Order';
                var tmpTab = [];
                tmpTab = [
                  {
                    label: printLabel,
                    command: function() {
                      _this.printJobCard();
                    }
                  }
                ];
                if (!_this.isQualificationOngoing) {
                  tmpTab.push({
                    label: addWoLabel,
                    command: function() {
                      _this.displayWorkOrderScreenEdit();
                    }
                  });
                }
                if (_this.isPostPonement) {
                  tmpTab.push({
                    label: cancelPostLabel,
                    command: function() {
                      _this.requestOrCancelPostponement();
                    }
                  });
                }
                if (
                  _this.totalElapsed === '0:00:00' &&
                  !!_this.woStatus &&
                  (_this.woStatus.status === _this.awPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED ||
                    _this.woStatus.status === _this.awPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED) &&
                  !_this.isPostPonement
                ) {
                  tmpTab.push({
                    label: requestLabel,
                    command: function() {
                      _this.requestOrCancelPostponement();
                    }
                  });
                }
                if (
                  (!!_this.woStatus &&
                    _this.woStatus.status === _this.awPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED) ||
                  (!!_this.woStatus &&
                    (_this.woStatus.status === _this.awPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED ||
                      _this.woStatus.status === _this.awPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED) &&
                    _this.operationTable.length === 0)
                ) {
                  tmpTab.push({
                    label: confirmLabel,
                    command: function() {
                      _this.stratOrRestartWo(false);
                    }
                  });
                }
                if (
                  (!!_this.woStatus &&
                    _this.woStatus.status === _this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&
                    !_this.isWoNeedCheck) ||
                  (!!_this.woStatus &&
                    _this.woStatus.status === _this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&
                    !_this.woStatus.isCritical)
                ) {
                  tmpTab.push({
                    label: cancelLabel,
                    command: function() {
                      _this.stratOrRestartWo(false);
                    }
                  });
                }
                if (
                  !!_this.woStatus &&
                  _this.woStatus.status === _this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&
                  _this.isWoNeedCheck &&
                  _this.woStatus.isCritical
                ) {
                  tmpTab.push({
                    label: openLabel,
                    command: function() {
                      _this.checkWorkOrder(false);
                    }
                  });
                }
                if (
                  !!_this.woStatus &&
                  _this.woStatus.status === _this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&
                  _this.isWoNeedCheck &&
                  _this.woStatus.isCritical
                ) {
                  tmpTab.push({
                    label: closeLabel,
                    command: function() {
                      _this.checkWorkOrder(false);
                    }
                  });
                }
                _this.actionLinkList = tmpTab;
              });
          };
          WorkOrderFormComponent.prototype.showButtonStartWo = function() {
            return (
              !!this.woStatus &&
              (this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED ||
                this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED) &&
              this.operationTable.length === 0
            );
          };
          WorkOrderFormComponent.prototype.showButtonConfirmWorkCompletion = function() {
            return (
              !!this.woStatus &&
              this.operationTable.length === 0 &&
              this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_ONGOING
            );
          };
          WorkOrderFormComponent.prototype.showButtonCancelWorkCompletion = function() {
            return (
              (!!this.woStatus &&
                this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&
                !this.isWoNeedCheck) ||
              (!!this.woStatus &&
                this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&
                this.isCritical()) ||
              (!!this.woStatus &&
                this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED &&
                this.isCriticalWithoutOperation()) ||
              (!!this.woStatus &&
                this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED &&
                this.isNotCriticalWithoutOperation())
            );
          };
          WorkOrderFormComponent.prototype.disableDefectsTableButtonsInClosedStatus = function() {
            return (
              !!this.workDataDefect &&
              !!this.workDataDefect.workOrder &&
              this.workDataDefect.workOrder.calculatedStatus === this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE
            );
          };
          WorkOrderFormComponent.prototype.setNavigationLinkList = function() {
            var _this = this;
            var logisticLabelKey = this.getTranslateKey('goodsMovements');
            var seeLabelKey = this.getTranslateKey('see');
            var openFieldLabelKey = this.getTranslateKey('openField');
            this.translateService.get([logisticLabelKey, seeLabelKey, openFieldLabelKey]).subscribe(function(results) {
              var goodsMovementsLabel = results ? results[logisticLabelKey] : 'Goods Movements';
              var seeLabel = results ? results[seeLabelKey] : 'See Postponed Task Event';
              var openFieldLabel = results ? results[openFieldLabelKey] : 'Open FIELD';
              var tmpTab = [];
              tmpTab = [
                {
                  label: goodsMovementsLabel,
                  command: function() {
                    _this.callGoodsMovement();
                  }
                }
              ];
              if (_this.isPostPonement) {
                tmpTab.push({
                  label: seeLabel,
                  command: function() {
                    _this.openRequest();
                  }
                });
              }
              if (_this.sessionService.isSpecificDassault && !!_this.woTask) {
                tmpTab.push({
                  label: openFieldLabel,
                  command: function() {
                    _this.openField();
                  }
                });
              }
              _this.navigationLinkList = tmpTab;
            });
          };
          WorkOrderFormComponent.prototype.displayWorkOrderScreenEdit = function() {
            var _this = this;
            if (this.workOrder.projectId) {
              this.workPackageFormService
                .getBidmWorkOrdersStructureByProject(this.workOrder.projectId)
                .subscribe(function(woList) {
                  _this.workOrderList = _this.flatDeep(woList);
                  if (_this.workOrder.projectId && _this.workOrder.woId) {
                    _this.addWorkOrder = {
                      projectId: _this.workOrder.projectId,
                      woId: _this.workOrder.woId
                    };
                    _this.displayWorkOrderEdit = true;
                  }
                });
            }
          };
          WorkOrderFormComponent.prototype.flatDeep = function(tree) {
            var _this = this;
            return tree.reduce(function(acc, val) {
              return __spread(acc, val ? [val.data] : [], val.children ? _this.flatDeep(val.children) : []);
            }, []);
          };
          WorkOrderFormComponent.prototype.onAddWorkOrder = function(isCreated) {
            if (isCreated) {
              this.updateInterface(false);
            }
          };
          WorkOrderFormComponent.prototype.loadLists = function() {
            var _this = this;
            this.woFormService.woStatusList$.subscribe(function(list) {
              return (_this.statusList = list);
            });
            this.woFormService.woTypeList$.subscribe(function(list) {
              return (_this.woTypeList = list);
            });
            this.woFormService.loadMROCenterList().subscribe(function(result) {
              return (_this.mroCenterList = result);
            });
          };
          WorkOrderFormComponent.prototype.updateWorkflowStatusList = function() {
            this.workflowStatus = _shared_utils_workflow_utils__WEBPACK_IMPORTED_MODULE_41__[
              'WorkflowUtils'
            ].filterWorkflowStatusList(
              this.userWorkflow,
              this.statusList,
              this.woStatus ? this.woStatus.status : undefined
            );
          };
          WorkOrderFormComponent.prototype.initToc = function() {
            this.toc = [
              {
                id: 'mainAnchor',
                anchor: this.mainAnchor,
                label: this.translateService.instant(this.getTranslateKey('mainInformation'))
              },
              {
                id: 'workPackageAnchor',
                anchor: this.workPackageAnchor,
                label: this.translateService.instant(this.getTranslateKey('workPackage'))
              },
              {
                id: 'progressAnchor',
                anchor: this.workOrderProgressAnchor,
                label: this.translateService.instant(this.getTranslateKey('workInProgress'))
              },
              {
                id: 'operationsAnchor',
                anchor: this.operationsAnchor,
                label: this.translateService.instant(this.getTranslateKey('operations'))
              },
              {
                id: 'commentAnchor',
                anchor: this.commentAnchor,
                label: this.translateService.instant(this.getTranslateKey('comment'))
              },
              {
                id: 'additionalWorkAnchor',
                anchor: this.additionalWorkAnchor,
                label: this.translateService.instant(this.getTranslateKey('additionalWork'))
              },
              {
                id: 'requestManagmentAnchor',
                anchor: this.requestManagmentAnchor,
                label: this.translateService.instant(this.getTranslateKey('requestManagment'))
              },
              {
                id: 'defectsAnchor',
                anchor: this.defectsAnchor,
                label: this.translateService.instant(this.getTranslateKey('defects'))
              },
              {
                id: 'taskDocumentsAnchor',
                anchor: this.taskDocumentsAnchor,
                label: this.translateService.instant(this.getTranslateKey('taskDocuments'))
              },
              {
                id: 'woDocumentsAnchor',
                anchor: this.woDocumentsAnchor,
                label: this.translateService.instant(this.getTranslateKey('woDocuments'))
              }
            ];
            this.registerPageTocEntrySelectedObservable();
          };
          WorkOrderFormComponent.prototype.registerPageTocEntrySelectedObservable = function() {
            var _this = this;
            this.pageTocService.pageTocEntrySelected$
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['takeUntil'])(this.unsubscribe))
              .subscribe(function(pageTocEntrySelected) {
                _this.selectedAnchor = pageTocEntrySelected;
              });
          };
          WorkOrderFormComponent.prototype.initDates = function() {
            this.dateStartPerformedDuration = undefined;
            this.dateEndPerformedDuration = undefined;
            this.dateStartElapsedDuration = undefined;
            this.dateEndElapsedDuration = undefined;
          };
          WorkOrderFormComponent.prototype.resetPerformedDates = function() {
            this.dateStartPerformedDuration = undefined;
            this.dateEndPerformedDuration = undefined;
          };
          WorkOrderFormComponent.prototype.resetElapsedDates = function() {
            this.dateStartElapsedDuration = undefined;
            this.dateEndElapsedDuration = undefined;
          };
          WorkOrderFormComponent.prototype.isSelectedAnchor = function(anchorId) {
            return anchorId === this.selectedAnchor;
          };
          WorkOrderFormComponent.prototype.setSelectedAnchor = function(anchorId) {
            this.pageTocService.setAnchorSelected(anchorId);
            this.selectedAnchor = anchorId;
          };
          WorkOrderFormComponent.prototype.onSelectEquipment = function(equipment) {
            this.assetRepresentation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_39__['StringUtils'].orEmpty(
              equipment.equipmentCode
            );
          };
          WorkOrderFormComponent.prototype.requestOrCancelPostponement = function() {
            if (!this.isPostPonement && !this.woStatus.workPostponementRequestBidoNotificationData) {
              this.displayRequestPostponement = true;
            } else {
              this.cancelPostponement();
            }
          };
          WorkOrderFormComponent.prototype.openRequest = function() {
            if (
              this.woStatus.workPostponementRequestBidoNotificationData &&
              this.woStatus.workPostponementRequestBidoNotificationData.notificationCode
            ) {
              var dto = {
                notificationCode: this.woStatus.workPostponementRequestBidoNotificationData.notificationCode,
                typeCode: this.woStatus.workPostponementRequestBidoNotificationData.typeCode
              };
              this.openEvent(dto);
            }
          };
          WorkOrderFormComponent.prototype.onValidateRequest = function(requestReason) {
            var _this = this;
            this.isPostPonement = true;
            this.setLinkLists();
            if (this.user && this.user.login) {
              var workPostponementInput = {
                bidmWorkOrderDTO: this.workOrder,
                postponementReason: requestReason
              };
              this.woFormService.createWorkPostponementRequest(workPostponementInput).subscribe(function() {
                var calculateWorkOrderImput = {
                  workOrderData: _this.workOrder,
                  fromLineMaintenance: false
                };
                _this.woFormService
                  .calculateWorkOrderStatus(calculateWorkOrderImput)
                  .subscribe(function(calculateWorkOrderOutput) {
                    _this.woStatus = calculateWorkOrderOutput.workOrderDetail;
                    _this.initWoDescription();
                    _this.setLinkLists();
                    _this.updateInterface(false);
                  });
              });
            }
          };
          WorkOrderFormComponent.prototype.cancelPostponement = function() {
            var _this = this;
            if (
              this.woStatus.workPostponementRequestBidoNotificationData &&
              this.woStatus.workPostponementRequestBidoNotificationData.notificationCode
            ) {
              var notificationId = {
                notificationCode: this.woStatus.workPostponementRequestBidoNotificationData.notificationCode
              };
              this.woFormService.cancelWorkPostponementRequest(notificationId).subscribe(function() {
                _this.isPostPonement = false;
                _this.setLinkLists();
                var calculateWorkOrderImput = {
                  workOrderData: _this.workOrder,
                  fromLineMaintenance: false
                };
                _this.woFormService
                  .calculateWorkOrderStatus(calculateWorkOrderImput)
                  .subscribe(function(calculateWorkOrderOutput) {
                    _this.woStatus = calculateWorkOrderOutput.workOrderDetail;
                    _this.initWoDescription();
                    _this.setLinkLists();
                    _this.updateInterface(false);
                  });
              });
            }
          };
          WorkOrderFormComponent.prototype.editAdditionalWork = function() {
            this.isAdditionnalWorkEdit = true;
          };
          WorkOrderFormComponent.prototype.saveAdditionalWork = function() {
            var missingFields = this.checkMandatoryFields({
              woAdditionalWork: this.woAdditionalWork
            });
            if (missingFields.length > 0) {
              this.messageService.showErrorMessage('global.missingFields');
            } else {
              this.workOrder.woAdditionalWork = this.woAdditionalWork;
              this.saveWorkOrder();
              this.isAdditionnalWorkEdit = false;
            }
          };
          WorkOrderFormComponent.prototype.editComments = function() {
            this.isCommentEdit = true;
          };
          WorkOrderFormComponent.prototype.saveComents = function() {
            var missingFields = this.checkMandatoryFields({
              woComments: this.woComments
            });
            if (missingFields.length > 0) {
              this.messageService.showErrorMessage('global.missingFields');
            } else {
              this.workOrder.woComments = this.woComments;
              this.saveWorkOrder();
              this.isCommentEdit = false;
            }
          };
          WorkOrderFormComponent.prototype.saveWOBidmDoc = function() {
            var _this = this;
            var missingFields = this.checkMandatoryFields({
              woBidmDocumentsTableData: this.woBidmDocumentsTableData.dataSrc
            });
            if (missingFields.length > 0) {
              this.messageService.showErrorMessage('global.missingFields');
            } else {
              this.workOrder.bidmDocumentAddedList = this.woBidmDocumentsTableData.getAddedList().map(function(elt) {
                return _this.findBidmDocumentByDocumentRow(elt);
              });
              this.workOrder.bidmDocumentUpdatedList = this.woBidmDocumentsTableData
                .getUpdatedList()
                .map(function(elt) {
                  return _this.findBidmDocumentByDocumentRow(elt);
                });
              this.workOrder.bidmDocumentDeletedList = this.woBidmDocumentsTableData
                .getDeletedList()
                .map(function(elt) {
                  return {
                    documentId: _this.findBidmDocumentByDocumentRow(elt).documentId
                  };
                });
              this.saveWorkOrder();
              this.woBidmDocumentsTableData.dataSelection = [];
              this.selectedWOBidmDocument = {};
              this.wODocsHasBeeEdited = false;
            }
          };
          WorkOrderFormComponent.prototype.saveWorkOrder = function(onSaveSucess) {
            var _this = this;
            if (this.componentData.objectId) {
              var param = {
                bidmWorkOrderDTO: this.workOrder,
                woComment: this.workOrder.woComments,
                woAdditionalData: this.workOrder.woAdditionalWork
              };
              this.woFormService.updateWorkOrder(param).subscribe(function() {
                _this.woBidmDocumentsTableData.clearHistory();
                _this.loadWorkOrder();
                if (onSaveSucess) {
                  onSaveSucess();
                }
                /* this.woFormService.findBidmWorkOrder(this.bidmWorkOrderId).subscribe((result) => {
                  this.woStatus = result.workOrderStatusDetail;
                  this.calculateAndUpdateBidmWorkOrderStatus();
                  this.initWoDescription();
                  this.setLinkLists();
                  if (this.woStatus.status) {
                    this.woStatusProgressType = this.woStatus.status.slice(2);
                  }
                  this.woStatusProgressPercent = Math.floor(Number(result.statusPercent)).toString();
                  this.updateInterface(false);
                });
                this.woFormService.findBidmDocumentsByWorkOrder(this.bidmWorkOrderId).subscribe((result: BidmDocumentDTO[]) => {
                  this.woBidmDocumentsResource = [...result];
                  this.woBidmDocumentsTableData.setData(result.map((doc) => this.createDocumentRow(doc)));
                });*/
              });
            }
          };
          WorkOrderFormComponent.prototype.callGoodsMovement = function() {
            var goodsMovementInput = {
              workOrderId: this.workOrder.woId,
              workPackageId: this.workOrder.projectId
            };
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_14__['ComponentConstants']
                  .LOG_GOODS_MOVEMENT_WORK_ORDER_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read,
              objectId: this.serializationService.serialize(goodsMovementInput)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          WorkOrderFormComponent.prototype.openStaffPlanning = function() {
            var defaultDateToAdd = 15;
            var startDate = this.woStatus.startDate ? this.woStatus.startDate : this.workPackage.projectStartDate;
            var endDate = this.woStatus.endDate
              ? this.woStatus.endDate
              : this.workPackage.projectEndDate
              ? this.workPackage.projectEndDate
              : moment__WEBPACK_IMPORTED_MODULE_3__(startDate)
                  .add(defaultDateToAdd, 'day')
                  .toDate();
            var componentData = {
              startDate: startDate,
              endDate: endDate
            };
            if (this.bidtWarehouseDTO) {
              this.openStaffPlanningFormWithWarehouse(componentData);
            } else if (this.workPackage && this.workPackage.bireRepairCenterCode) {
              this.openStaffPlanningFormWithWPReparirCenterCode(componentData);
            } else {
              this.openStaffPlanningSearch(componentData);
            }
          };
          WorkOrderFormComponent.prototype.openStaffPlanningFormWithWarehouse = function(componentData) {
            var _this = this;
            if (this.bidtWarehouseDTO && this.bidtWarehouseDTO.bidtSiteId) {
              componentData.warehouseId = this.workOrder.bidtWarehouseId;
              componentData.warehouseName = this.bidtWarehouseDTO.whName;
              this.woFormService.findBidtSiteById(this.bidtWarehouseDTO.bidtSiteId).subscribe(function(site) {
                _this.openStaffPlanningFormBySite(componentData, site);
              });
            }
          };
          WorkOrderFormComponent.prototype.openStaffPlanningFormWithWPReparirCenterCode = function(componentData) {
            var _this = this;
            if (this.workPackage && this.workPackage.bireRepairCenterCode) {
              this.woFormService
                .findBidtSiteByCriteria({ siteCode: this.workPackage.bireRepairCenterCode })
                .subscribe(function(sites) {
                  if (sites && sites.length > 0) {
                    _this.openStaffPlanningFormBySite(componentData, sites[0]);
                  }
                });
            }
          };
          WorkOrderFormComponent.prototype.openStaffPlanningFormBySite = function(componentData, site) {
            componentData.siteId = site.siteId;
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_14__['ComponentConstants']
                  .HR_EMPLOYEE_PLANNING_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
            };
            componentData.siteName = site.siteName;
            if (!!site.bidtCompanyId) {
              componentData.companyId = Number(site.bidtCompanyId);
            }
            data.objectId = this.serializationService.serialize(componentData);
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          WorkOrderFormComponent.prototype.openStaffPlanningSearch = function(componentData) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_14__['ComponentConstants']
                  .HR_EMPLOYEE_PLANNING_SEARCH,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
            };
            data.objectId = this.serializationService.serialize(componentData);
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          WorkOrderFormComponent.prototype.callMaterialAvailability = function() {
            var goodsMovementInput = {
              workOrderId: this.workOrder.woId,
              workPackageId: this.workOrder.projectId
            };
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_14__['ComponentConstants']
                  .LOG_MATERIAL_AVAILABILITY_WORK_ORDER_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read,
              objectId: this.serializationService.serialize(goodsMovementInput)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          WorkOrderFormComponent.prototype.deleteOperation = function() {
            // #TODO
          };
          /**
           * Operation on edit click
           */
          WorkOrderFormComponent.prototype.openEditDuration = function() {
            var _this = this;
            this.operationSelectedIndex = this.operationTable.findIndex(function(res) {
              return res.bireOpeCode === _this.selectedOperations[0].bireOpeCode;
            });
            this.displayEditDuration = true;
          };
          /**
           * Validate duration
           */
          WorkOrderFormComponent.prototype.onValidateDuration = function(ev, source) {
            if (ev.elapsedTime && ev.performedDuration) {
              var DEFAULT_DISPLAY_TIME = '0:00:00';
              var TIME = 60;
              var NUM = 1000;
              var pHour = ev.performedDuration.getHours();
              var pMin = ev.performedDuration.getMinutes();
              var pSec = ev.performedDuration.getSeconds();
              var eHour = ev.elapsedTime.getHours();
              var eMin = ev.elapsedTime.getMinutes();
              var eSec = ev.elapsedTime.getSeconds();
              var newDuration = (pHour * TIME * TIME + pMin * TIME + pSec) * NUM;
              var newElapsed = (eHour * TIME * TIME + eMin * TIME + eSec) * NUM;
              var actualDuration = newDuration;
              var actualElapsed = newElapsed;
              if (source === 0) {
                if (!!this.selectedOperations[0] && this.selectedOperations[0].opePerformedDuration) {
                  newDuration += this.selectedOperations[0].opePerformedDuration;
                }
                if (!!this.selectedOperations[0] && this.selectedOperations[0].opePerformedElapsed) {
                  newElapsed += this.selectedOperations[0].opePerformedElapsed;
                }
              }
              if (this.timeToDisplay(actualDuration) !== DEFAULT_DISPLAY_TIME) {
                this.operationTable[this.operationSelectedIndex].opePerformedDuration = newDuration;
                this.operationTable[this.operationSelectedIndex].opePerformedDurationDisplay = this.timeToDisplay(
                  newDuration
                );
                this.operationTable[this.operationSelectedIndex].opePerformedElapsed = newElapsed;
                this.operationTable[this.operationSelectedIndex].opePerformedElapsedDisplay = this.timeToDisplay(
                  newElapsed
                );
                if (
                  !this.operationTable[this.operationSelectedIndex].opeStartDateDisplay ||
                  !this.operationTable[this.operationSelectedIndex].opePerformedBy
                ) {
                  this.operationTable[this.operationSelectedIndex].opeStartDateDisplay = this.getFullDateFormatWithDate(
                    ev.performedDuration
                  );
                  if (!!this.sessionService.loggedUser && !!this.sessionService.loggedUser.login) {
                    this.operationTable[
                      this.operationSelectedIndex
                    ].opePerformedOnDisplay = this.sessionService.loggedUser.login;
                  }
                }
                if (source === 0) {
                  // add entry in log table
                  this.addedBidmTimeTracking.push({
                    bidmTimeTrackingDTO: {
                      bireOpeCode: this.selectedOperations[0].bireOpeCode,
                      bireOpeVersion: this.selectedOperations[0].bireOpeVersion,
                      ttPerformedClockOut: new Date(),
                      ttPerformedDuration: actualDuration,
                      ttPerformedElapsed: actualElapsed,
                      woId: this.workOrder.woId,
                      projectId: this.workOrder.projectId
                    },
                    isInDB: false,
                    performedBy: this.operationTable[this.operationSelectedIndex].opePerformedOnDisplay,
                    operation: this.selectedOperations[0].bireOpeCode,
                    clockOutText: this.dateService.dateWithHourMinSecToString(new Date()),
                    durationText: this.timeToDisplay(actualDuration),
                    duration: actualDuration,
                    elapsed: actualElapsed,
                    elapsedText: this.timeToDisplay(actualElapsed),
                    isDelete: true,
                    isEditable: true
                  });
                }
              }
            }
          };
          /**
           * Dialog Operation Log
           */
          WorkOrderFormComponent.prototype.openOperationLog = function() {
            this.fetchTimeTracking();
          };
          /**
           * API To fetch time tracking list
           */
          WorkOrderFormComponent.prototype.fetchTimeTracking = function() {
            var _this = this;
            var input = {
              projectId: this.workOrder.projectId,
              woId: this.workOrder.woId,
              bidmOperationDTO: this.selectedOperations[0],
              opeCode: this.selectedOperations[0].bireOpeCode,
              opeVersion: this.selectedOperations[0].bireOpeVersion
            };
            this.woFormService.fetchBidmTimeTrackings(input).subscribe(function(res) {
              if (!!res) {
                _this.bidmTimeTracking = res;
              }
              _this.displayTimeTracking = true;
            });
          };
          /**
           * Validate event of time tracking popup
           */
          WorkOrderFormComponent.prototype.onValidateTimeTracking = function(ev) {
            this.addedBidmTimeTracking = ev.addedBidmTimeTracking || [];
            if (
              !!ev.durationInterface &&
              !!ev.durationInterface.elapsedTime &&
              !!ev.durationInterface.performedDuration
            ) {
              this.onValidateDuration(ev.durationInterface, 1);
            }
          };
          WorkOrderFormComponent.prototype.refresh = function() {
            this.documentTableDisplayed = [];
            this.loadWorkOrder();
          };
          WorkOrderFormComponent.prototype.loadWorkOrder = function() {
            var _this = this;
            this.isLoadingOperationsTable = true;
            this.woFormService.findBidmWorkOrder(this.bidmWorkOrderId).subscribe(function(result) {
              if (result === null) {
                _this.messageService.showErrorMessage(_this.getTranslateKey('notFound'));
              } else {
                _this.displayComponentContext(
                  _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_39__['StringUtils'].orEmpty(
                    result.bidmWorkOrder.woCode
                  ),
                  false
                );
                _this.workOrderDTOIdList = [
                  {
                    projectId: result.bidmWorkOrder.projectId,
                    woId: result.bidmWorkOrder.woId
                  }
                ];
                _this.workOrder = result.bidmWorkOrder;
                _this.initWoAssetMangement();
                _this.procurementRequestsTableService
                  .findProcReqItemsAndStockQuantityIndicators(_this.workOrder, undefined)
                  .subscribe(function(proqReq) {
                    _this.procurementRequests = proqReq;
                  });
                _this.woAdditionalWork = result.bidmWorkOrder.woAdditionalWork;
                _this.woComments = result.bidmWorkOrder.woComments;
                _this.relatedItem = result.relatedItem;
                _this.woItemDTO = {
                  familyCode: _this.workOrder.bireItemFamilyCode,
                  variantCode: _this.workOrder.bireItemVariantCode,
                  chapter: _this.workOrder.bireItemChapter,
                  section: _this.workOrder.bireItemSection,
                  subject: _this.workOrder.bireItemSubject,
                  sheet: _this.workOrder.bireItemSheet,
                  marks: _this.workOrder.bireItemMarks,
                  structureType: _this.awPropertiesConstants.STRUCTURE_TYPE_IPC_KEY
                };
                _this.workPackage = result.bidmProjectData;
                if (_this.workPackage) {
                  var equipementId = {
                    equipmentCode: _this.workPackage.assetCode
                  };
                  _this.woStatus = result.workOrderStatusDetail;
                  _this.initWoDescription();
                  _this.setLinkLists();
                  _this.woFormService.findBidoEquipment(equipementId).subscribe(function(wpEquipementDtoDto) {
                    _this.wpEquipementDto = wpEquipementDtoDto;
                    if (
                      _this.workPackage &&
                      _this.workOrder &&
                      _this.wpEquipementDto &&
                      _this.wpEquipementDto.equipmentCode
                    ) {
                      _this.workDataDefect = {
                        workOrder: _this.workOrder,
                        workPackage: _this.workPackage,
                        equipementCode: _this.wpEquipementDto.equipmentCode
                      };
                    }
                    if (_this.woStatus.bidoEquipmentData) {
                      _this.wpEquipementDto = _this.woStatus.bidoEquipmentData;
                    }
                    if (_this.woStatus && _this.wpEquipementDto) {
                      _this.woEquipement = _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_33__[
                        'BidoEquipmentUtils'
                      ].toString(_this.wpEquipementDto);
                    }
                    if (
                      _this.wpEquipementDto &&
                      (_this.wpEquipementDto.equipmentFunction ===
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                          .ITEM_FAMILY_CODE_GROUND_SUPPORT_EQUIPMENT_KEY ||
                        _this.wpEquipementDto.equipmentFunction ===
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__[
                            'AWPropertiesConstants'
                          ].ITEM_FAMILY_CODE_TOOL_KEY ||
                        _this.wpEquipementDto.equipmentFunction ===
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__[
                            'AWPropertiesConstants'
                          ].ITEM_FAMILY_CODE_PILOT_EQUIPMENT_KEY)
                    ) {
                      _this.isGroundEquipment = true;
                    }
                  });
                }
                _this.calculateWorkOrderStatus();
                _this.woTask = result.woTask;
                if (
                  _this.woStatus.status ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                    .AIRM_OPERATION_STATUS_POSTPONEMENT_REQUESTED
                ) {
                  _this.isPostPonement = true;
                  _this.setLinkLists();
                }
                if (_this.woStatus.status) {
                  _this.woStatusProgressType = _this.woStatus.status.slice(2);
                  _this.woStatusProgressPercent = Math.floor(Number(result.statusPercent)).toString();
                }
                _this.loadUserWorkflow(_this.woStatus.status);
                _this.wpAircraftType = result.wpAircraftType;
                if (result.woAssignedTo) {
                  var userDtoId = {
                    userId: result.woAssignedTo
                  };
                  _this.woFormService.findUserById(userDtoId).subscribe(function(user) {
                    if (_this.user) {
                      if (user.userId === _this.user.userId) {
                        _this.updateOpenMode(
                          _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode']
                            .Write
                        );
                      } else if (result.bidmProjectData.receivingAssignedTo) {
                        _this.woFormService
                          .findUserById({ userId: result.bidmProjectData.receivingAssignedTo })
                          .subscribe(function(receivingUser) {
                            if (_this.user && receivingUser.userId === _this.user.userId) {
                              _this.updateOpenMode(
                                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__[
                                  'ComponentOpenMode'
                                ].Write
                              );
                            }
                          });
                      }
                    }
                    if (user.employeeId) {
                      _this.woFormService.getEmployeeById(Number(user.employeeId)).subscribe(function(employee) {
                        _this.woAssignedTo = '' + _this.getEmployeeText(employee, user);
                      });
                    } else {
                      _this.woAssignedTo = '' + _this.getUserText(user);
                    }
                  });
                } else {
                  _this.updateOpenMode(
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Write
                  );
                }
                if (result.woPerformedBy) {
                  var userDtoId = {
                    userId: result.woPerformedBy
                  };
                  _this.woFormService.findUserById(userDtoId).subscribe(function(user) {
                    if (user.employeeId) {
                      _this.woFormService.getEmployeeById(Number(user.employeeId)).subscribe(function(employee) {
                        _this.woPerformedBy =
                          _this.getEmployeeText(employee, user) +
                          ' (' +
                          moment__WEBPACK_IMPORTED_MODULE_3__(result.bidmWorkOrder.woPerformedOn).format(
                            'MM/DD/YYYY hh:mm'
                          ) +
                          ')';
                      });
                    } else {
                      _this.woPerformedBy =
                        _this.getUserText(user) +
                        ' (' +
                        moment__WEBPACK_IMPORTED_MODULE_3__(result.bidmWorkOrder.woPerformedOn).format(
                          'MM/DD/YYYY hh:mm'
                        ) +
                        ')';
                    }
                  });
                }
                if (result.woCheckedBy) {
                  var userDtoId = {
                    userId: result.woCheckedBy
                  };
                  _this.woFormService.findUserById(userDtoId).subscribe(function(user) {
                    if (user.employeeId) {
                      _this.woFormService.getEmployeeById(Number(user.employeeId)).subscribe(function(employee) {
                        _this.woCheckedBy =
                          _this.getEmployeeText(employee, user) +
                          ' (' +
                          moment__WEBPACK_IMPORTED_MODULE_3__(result.bidmWorkOrder.woCheckedOn).format(
                            'MM/DD/YYYY hh:mm'
                          ) +
                          ')';
                      });
                    } else {
                      _this.woCheckedBy =
                        _this.getUserText(user) +
                        ' (' +
                        moment__WEBPACK_IMPORTED_MODULE_3__(result.bidmWorkOrder.woCheckedOn).format(
                          'MM/DD/YYYY hh:mm'
                        ) +
                        ')';
                    }
                  });
                }
                _this.totalDuration = result.totalDuration;
                _this.totalElapsed = result.totalElapsed;
                _this.setLinkLists();
                _this.qualificationNeeded = result.qualificationNeeded;
                _this.initWorkOrderWithQualificationOngoing();
                var bireOperationDataDTO_1 = 'bireOperationData'; // #TODO: interface to be declared
                _this.operationTable = [];
                if (result.workOrderStatusDetail.bidmOperationDataList) {
                  result.workOrderStatusDetail.bidmOperationDataList.forEach(function(bidmOperation) {
                    var jobCardOperation = bidmOperation;
                    jobCardOperation.opeDesignation = bidmOperation[bireOperationDataDTO_1].ope_DESIGNATION;
                    jobCardOperation.opeQualification = bidmOperation[bireOperationDataDTO_1].ope_QUALIFICATION;
                    jobCardOperation.opeSequence = bidmOperation[bireOperationDataDTO_1].ope_SEQUENCE_NUMBER;
                    jobCardOperation.isOpeOnPerformed = false;
                    jobCardOperation.isOpeOnElapsed = false;
                    jobCardOperation.isCriticalTask = result.workOrderStatusDetail.isCritical;
                    _this.operationTable.push(jobCardOperation);
                  });
                  _this.initEmployeeQualificationsStatus();
                }
                // this.operationTable = result.workOrderStatusDetail.bidmOperationDataList || []; //.map((op) => op[bireOperationDataDTO]) || [];
                _this.updateInterface(true);
                _this.isLoadingOperationsTable = false;
                _this.initOperationTable();
                _this.ctrlStock();
                _this.loadWorkCenter();
                if (!!_this.workOrder.assetPn && !!_this.workOrder.assetSn) {
                  _this.displayPrintIdLabel = true;
                }
              }
            });
          };
          WorkOrderFormComponent.prototype.calculateWorkOrderStatus = function() {
            var _this = this;
            var calculateWorkOrderImput = {
              workOrderData: this.workOrder,
              fromLineMaintenance: false
            };
            this.woFormService
              .calculateWorkOrderStatus(calculateWorkOrderImput)
              .subscribe(function(calculateWorkOrderOutput) {
                _this.woStatus.status = calculateWorkOrderOutput.workOrderDetail.status;
                _this.originText = calculateWorkOrderOutput.originText;
                _this.setLinkLists();
                if (
                  !!_this.originText &&
                  _this.wpEquipementDto &&
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                    .AIRM_WORK_ORDER_TYPE_TASK === _this.workOrder.woType
                ) {
                  var assetWorkOrderOriginInput = {
                    woType: _this.workOrder.woType,
                    woSource: _this.workOrder.woSource,
                    evolutionType: _this.evolutionType,
                    familyVariantCode: _this.wpEquipementDto.familyVariantCode
                  };
                  _this.woFormService
                    .findWorkOrderOriginDetails(assetWorkOrderOriginInput)
                    .subscribe(function(assetOutput) {
                      if (!!assetOutput.bireTaskDTOId) {
                        // open task form
                        var bireTaskDTO = assetOutput.bireTaskDTOId;
                        _this.getTask(bireTaskDTO);
                      }
                    });
                } else if (
                  !!_this.woTask &&
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                    .AIRM_WORK_ORDER_TYPE_DEFECT === _this.workOrder.woType
                ) {
                  var bireTaskDTO = {
                    taskCode: _shared_utils_bidm_work_order_utils__WEBPACK_IMPORTED_MODULE_32__[
                      'BidmWorkOrderUtils'
                    ].getTaskCodeFromTaskId(_this.woTask),
                    taskVersion: _shared_utils_bidm_work_order_utils__WEBPACK_IMPORTED_MODULE_32__[
                      'BidmWorkOrderUtils'
                    ].getTaskVersionFromTaskId(_this.woTask)
                  };
                  _this.getTask(bireTaskDTO);
                } else if (_this.woStatus.bidmOperationDataList && _this.woStatus.bidmOperationDataList.length > 0) {
                  if (
                    _this.woStatus.bidmOperationDataList[0].bireTaskCode &&
                    _this.woStatus.bidmOperationDataList[0].bireTaskVersion
                  ) {
                    var bireTaskId = {
                      taskCode: _this.woStatus.bidmOperationDataList[0].bireTaskCode,
                      taskVersion: _this.woStatus.bidmOperationDataList[0].bireTaskVersion
                    };
                    _this.getTask(bireTaskId);
                  }
                }
                if (calculateWorkOrderOutput.evolutionType) {
                  _this.evolutionType = calculateWorkOrderOutput.evolutionType;
                }
              });
          };
          WorkOrderFormComponent.prototype.loadWorkCenter = function() {
            var _this = this;
            if (this.workOrder.bidtWarehouseId) {
              this.woFormService.getWarehouseById(this.workOrder.bidtWarehouseId).subscribe(function(warehouse) {
                _this.bidtWorkCenter = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_39__['StringUtils'].orEmpty(
                  warehouse.whName
                );
                _this.bidtWarehouseDTO = warehouse;
              });
            }
          };
          WorkOrderFormComponent.prototype.loadPostponementConf = function() {
            this.isAskRequestConf = false;
            this.iscancelPostConf = false;
            if (
              this.totalElapsed === '0:00:00' &&
              !!this.woStatus &&
              (this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED ||
                this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED) &&
              !this.isPostPonement
            ) {
              this.isAskRequestConf = true;
            }
            if (this.isPostPonement) {
              this.iscancelPostConf = true;
            }
          };
          WorkOrderFormComponent.prototype.updateInterface = function(withChart) {
            var _this = this;
            if (withChart) {
              this.opStatusList = this.woStatus.bidmOperationDataList
                ? this.woStatus.bidmOperationDataList.map(function(op) {
                    return op.opeStatus;
                  })
                : [];
              this.updateChart();
            }
            var status = this.statusList
              .filter(function(s) {
                return s.value === _this.woStatus.status;
              })
              .map(function(s) {
                return s.label;
              });
            this.pageTitle = this.workOrder.woCode + ' - ' + status;
          };
          WorkOrderFormComponent.prototype.initChart = function() {
            this.chartDataset = [
              {
                statusList: [
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                    .AIRM_OPERATION_STATUS_SIMULATED
                ],
                value: 0,
                color: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_9__['AppConstants'].COLOR_GREY,
                label: this.translateService.instant(this.getTranslateKey('chartSimulated'))
              },
              {
                statusList: [
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                    .AIRM_OPERATION_STATUS_PLANNED
                ],
                value: 0,
                color: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_9__['AppConstants'].COLOR_GREY,
                label: this.translateService.instant(this.getTranslateKey('chartPlanned'))
              },
              {
                statusList: [
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                    .AIRM_OPERATION_STATUS_RELEASED
                ],
                value: 0,
                color: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_9__['AppConstants'].COLOR_GREY,
                label: this.translateService.instant(this.getTranslateKey('chartReleased'))
              },
              {
                statusList: [
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                    .AIRM_OPERATION_STATUS_ONGOING
                ],
                value: 0,
                color: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_9__['AppConstants'].COLOR_BLUE_LIGHT,
                label: this.translateService.instant(this.getTranslateKey('chartOngoing'))
              },
              {
                statusList: [
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                    .AIRM_OPERATION_STATUS_TO_BE_CONFIRMED
                ],
                value: 0,
                color: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_9__['AppConstants'].COLOR_BLUE_LIGHT,
                label: this.translateService.instant(this.getTranslateKey('chartToBeConfirmed'))
              },
              {
                statusList: [
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                    .AIRM_OPERATION_STATUS_PERFORMED
                ],
                value: 0,
                color: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_9__['AppConstants'].COLOR_BLUE_DARK,
                label: this.translateService.instant(this.getTranslateKey('chartPerformed'))
              },
              {
                statusList: [
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                    .AIRM_OPERATION_STATUS_CLOSE
                ],
                value: 0,
                color: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_9__['AppConstants'].COLOR_GREEN,
                label: this.translateService.instant(this.getTranslateKey('chartClose'))
              } /*,
            {
              statusList: [AWPropertiesConstants.AIRM_OPERATION_STATUS_POSTPONED],
              value: 0,
              color: AppConstants.COLOR_GREEN,
              label: this.translateService.instant(this.getTranslateKey('chartPostponed'))
            },
            {
              statusList: [AWPropertiesConstants.AIRM_OPERATION_STATUS_POSTPONEMENT_REQUESTED],
              value: 0,
              color: AppConstants.COLOR_YELLOW,
              label: this.translateService.instant(this.getTranslateKey('chartPostponementRequest'))
            }*/
            ];
            this.chartType = 'bar';
            this.chartVisible = false;
            this.chartData = {
              datasets: [
                {
                  data: this.chartDataset.map(function(cd) {
                    return cd.value;
                  }),
                  backgroundColor: this.chartDataset.map(function(cd) {
                    return cd.color;
                  }),
                  hoverBackgroundColor: this.chartDataset.map(function(cd) {
                    return cd.color;
                  })
                }
              ],
              labels: this.chartDataset.map(function(cd) {
                return cd.label;
              })
            };
            this.setChartOptions();
            this.chartVisible = true;
          };
          WorkOrderFormComponent.prototype.updateChart = function() {
            // init charts values
            this.chartDataset.map(function(d) {
              d.value = 0;
              return d;
            });
            this.calculateChart();
            this.chartData.datasets[0].data = this.chartDataset.map(function(cd) {
              return cd.value;
            });
            this.chartData = __assign({}, this.chartData);
          };
          WorkOrderFormComponent.prototype.calculateChart = function() {
            var _this = this;
            this.opStatusList.forEach(function(status) {
              _this.chartDataset.forEach(function(cd) {
                if (cd.statusList.includes(status || '')) {
                  cd.value++;
                }
              });
            });
          };
          WorkOrderFormComponent.prototype.toggleWorkPackageExpand = function(row) {
            row._expand = !row._expand;
          };
          WorkOrderFormComponent.prototype.toggleInstallRemoveExpand = function(row) {
            row._expand = !row._expand;
          };
          WorkOrderFormComponent.prototype.setChartOptions = function() {
            this.chartOptions = {
              title: {
                display: true,
                text: this.translateService.instant(this.getTranslateKey('operations'))
              },
              legend: {
                display: false
              },
              tooltips: {
                bodyFontColor:
                  _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_9__['AppConstants'].COLOR_BACKGROUND_PRIMARY
              },
              scales: {
                xAxes: [
                  {
                    ticks: {
                      autoSkip: false
                    }
                  }
                ],
                yAxes: [
                  {
                    ticks: {
                      precision: 0
                    }
                  }
                ]
              }
            };
          };
          WorkOrderFormComponent.prototype.printJobCard = function() {
            var _this = this;
            this.showSaveSpinner = true;
            if (this.workOrder.woId && this.workOrder.projectId) {
              var bidmWorkOrderId = {
                woId: this.workOrder.woId,
                projectId: this.workOrder.projectId
              };
              this.woFormService.generateJobcard(bidmWorkOrderId).subscribe({
                next: function(jobcard) {
                  _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_35__['FileUtils'].downloadFile(
                    jobcard.fileContent,
                    jobcard.fileName
                  );
                  _this.showSaveSpinner = false;
                }
              });
            }
          };
          WorkOrderFormComponent.prototype.initTablesHeader = function() {
            this.operationTableCols = [
              { field: 'sequence', alignment: 'center', width: '2.5%' },
              { field: 'bireOpeCode', alignment: 'center', width: '10%' },
              { field: 'opeDesignation', alignment: 'left', width: '30%' },
              { field: 'opePerformedDuration', alignment: 'center', width: '10%' },
              { field: 'opePerformedElapsed', alignment: 'center', width: '10%' },
              { field: 'achievement', alignment: 'center', width: '7.5%' },
              { field: 'opeStatusDisplay', alignment: 'center', width: '7.5%' }
            ];
            this.documentsTableCols = [
              { field: 'docTask', alignment: 'left' },
              { field: 'docName', alignment: 'left' },
              { field: 'docExternal', alignment: 'left' },
              { field: 'docExtension', alignment: 'left' },
              { field: 'docSize', alignment: 'left' },
              { field: 'docPublicationDate', alignment: 'left' },
              { field: 'docDescription', alignment: 'left' }
            ];
            this.woAssetManagementTableCols = [
              { field: 'decision', alignment: 'left', width: '10%' },
              { field: 'superiorAsset', alignment: 'left', width: '10%' },
              { field: 'item', alignment: 'left', width: '10%' },
              { field: 'pn', alignment: 'left', width: '10%' },
              { field: 'sn', alignment: 'left', width: '10%' },
              { field: 'status', alignment: 'left', width: '10%' },
              { field: 'eventDate', alignment: 'left', width: '10%' },
              { field: 'event', alignment: 'left', width: '10%' }
            ];
            this.initBidmDocumentTableData();
            this.initStakeholdersTableDataSource();
          };
          WorkOrderFormComponent.prototype.initOperationTable = function() {
            var _this = this;
            var opeCheckUsers = [];
            var opePerformedUsers = [];
            var operationsList = [];
            this.operationTable.forEach(function(operationRow) {
              if (operationRow.opeStatus) {
                if (operationRow.opeStatus !== _this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE) {
                  _this.isWoNeedCheck = false;
                  _this.setLinkLists();
                }
                operationRow.opeStatusDisplay = operationRow.opeStatus.slice(2);
              }
              if (operationRow.opeOpeningDate) {
                operationRow.opeStartDateDisplay = _this.getFullDateFormatWithDate(operationRow.opeOpeningDate);
              }
              if (operationRow.opeCheckedOn) {
                operationRow.opeCheckOnDisplay = _this.getFullDateFormatWithDate(operationRow.opeCheckedOn);
              }
              var bireOperationDataDTO = 'bireOperationData';
              if (operationRow[bireOperationDataDTO].ope_DURATION_TIME) {
                _this.changeOpeStdDurationDisplay(operationRow, operationRow[bireOperationDataDTO].ope_DURATION_TIME);
              } else {
                var noDurationTime = 0;
                _this.changeOpeStdDurationDisplay(operationRow, noDurationTime);
              }
              if (operationRow.opePerformedOn) {
                operationRow.opePerformedOnDisplay = _this.getFullDateFormatWithDate(operationRow.opePerformedOn);
              }
              // initialize performed Duration and Elapsed duration
              if (!operationRow.opePerformedDuration && !operationRow.opePerformedElapsed) {
                operationRow.opePerformedDuration = 0;
                operationRow.opePerformedElapsed = 0;
              }
              _this.changeOpePerformedDurationDisplay(operationRow);
              _this.changeOpePerformedElapsedDisplay(operationRow);
              // create list of userDTOId for checkBy
              if (operationRow.opeCheckedBy) {
                var userDtoId = {
                  userId: operationRow.opeCheckedBy
                };
                opeCheckUsers.push(userDtoId);
              }
              // create list of userDTOId for performedBy
              if (operationRow.opePerformedLastBy) {
                var userDtoId = {
                  userId: operationRow.opePerformedLastBy
                };
                opePerformedUsers.push(userDtoId);
              }
              // create list of operation
              if (operationRow) {
                operationsList.push(operationRow);
              }
            });
            var observableListCheckBy = [];
            var observableListPerformedBy = [];
            var listStatusPercentWrapper = {};
            opeCheckUsers.forEach(function(user) {
              observableListCheckBy.push(_this.woFormService.findUserById(user));
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__['forkJoin'])(observableListCheckBy).subscribe(function(
              userCheckByList
            ) {
              var _loop_1 = function(i) {
                _this.operationTable[i].opeCheckedBy = userCheckByList[i].userId;
                if (!!userCheckByList[i].employeeId) {
                  _this.woFormService
                    .getEmployeeById(Number(userCheckByList[i].employeeId))
                    .subscribe(function(employee) {
                      _this.operationTable[i].opeCheckByDisplay = _this.getEmployeeText(employee, userCheckByList[i]);
                    });
                } else {
                  _this.operationTable[i].opeCheckByDisplay = _this.getUserText(userCheckByList[i]);
                }
              };
              for (var i = 0; i < userCheckByList.length; i++) {
                _loop_1(i);
              }
            });
            opePerformedUsers.forEach(function(user) {
              observableListPerformedBy.push(_this.woFormService.findUserById(user));
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__['forkJoin'])(observableListPerformedBy).subscribe(function(
              userPerformedByList
            ) {
              var _loop_2 = function(i) {
                _this.operationTable[i].opePerformedLastBy = userPerformedByList[i].userId;
                if (!!userPerformedByList[i].employeeId) {
                  _this.woFormService
                    .getEmployeeById(Number(userPerformedByList[i].employeeId))
                    .subscribe(function(employee) {
                      _this.operationTable[i].opePerformedLastByDisplay = _this.getEmployeeText(
                        employee,
                        userPerformedByList[i]
                      );
                    });
                } else {
                  _this.operationTable[i].opePerformedLastByDisplay = _this.getUserText(userPerformedByList[i]);
                }
              };
              for (var i = 0; i < userPerformedByList.length; i++) {
                _loop_2(i);
              }
            });
            operationsList.forEach(function(ope) {
              var bireOpeRow = 'bireOperationData';
              var bireOperationDtoRow = {
                opeDurationTime: ope[bireOpeRow].ope_DURATION_TIME
              };
              var progressFromOperationStatusInput = {
                bireOperationDto: bireOperationDtoRow,
                bidmOperationDto: ope
              };
              listStatusPercentWrapper[ope[bireOpeRow].ope_CODE] = _this.woFormService.getProgressFromOperationStatus(
                progressFromOperationStatusInput
              );
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__['forkJoin'])(listStatusPercentWrapper).subscribe(function(
              statusPercentList
            ) {
              Object.keys(statusPercentList).forEach(function(key) {
                var bireOpeRow = 'bireOperationData';
                var operationRow = _this.operationTable.find(function(row) {
                  return row[bireOpeRow].ope_CODE === key;
                });
                if (operationRow) {
                  operationRow.opeStatusPercent = Math.floor(statusPercentList[key]).toString();
                }
              });
            });
            this.operationTable.sort(function(a, b) {
              if (a.opeSequence !== undefined && b.opeSequence !== undefined && a.opeSequence !== b.opeSequence) {
                return a.opeSequence - b.opeSequence;
              } else {
                if (!!a.bireOpeCode && !!b.bireOpeCode) {
                  var boll = a.bireOpeCode.localeCompare(b.bireOpeCode);
                  return boll;
                } else {
                  return 0;
                }
              }
            });
          };
          WorkOrderFormComponent.prototype.getEmployeeText = function(employee, user) {
            if (employee.employeeNumber) {
              var opeDisplay = employee.employeeNumber + ' (' + user.firstname + ' ' + user.lastname + ')';
              return opeDisplay;
            } else {
              var opeDisplay = user.firstname + ' ' + user.lastname;
              return opeDisplay;
            }
          };
          WorkOrderFormComponent.prototype.getUserText = function(user) {
            var opeDisplay = user.firstname + ' ' + user.lastname;
            return opeDisplay;
          };
          WorkOrderFormComponent.prototype.resetCheck = function(row) {
            row.opeCheckedOn = undefined;
            row.opeCheckOnDisplay = undefined;
            row.opeCheckedBy = undefined;
            row.opeCheckByDisplay = undefined;
          };
          WorkOrderFormComponent.prototype.performOperation = function(row, eSign) {
            this.resetCheck(row);
            if (!row.isOpeOnElapsed) {
              if (
                row.opeStatus === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED ||
                row.opeStatus === this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE
              ) {
                if (!!row.opePerformedDuration || !!row.opePerformedElapsed) {
                  row.opeStatus = this.awPropertiesConstants.AIRM_OPERATION_STATUS_ONGOING;
                } else {
                  row.opeStatus = this.awPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED;
                }
                row.opeClosingDate = undefined;
                row.opePerformedBy = undefined;
                row.opePerformedOn = undefined;
                row.opePerformedOnDisplay = undefined;
                row.opePerformedWithEsign = false;
              } else {
                var currentDate = moment__WEBPACK_IMPORTED_MODULE_3__().unix();
                row.opeStatus = this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED;
                if (this.user) {
                  row.opePerformedBy = this.user.userId;
                  row.opePerformedLastBy = this.user.userId;
                  row.opePerformedLastByDisplay = this.userText;
                }
                if (!row.opeOpeningDate) {
                  row.opeOpeningDate = moment__WEBPACK_IMPORTED_MODULE_3__['unix'](currentDate).toDate();
                  row.opeStartDateDisplay = this.getFullDateFormatWithUnixTime(currentDate);
                }
                row.opeClosingDate = moment__WEBPACK_IMPORTED_MODULE_3__['unix'](currentDate).toDate();
                row.opePerformedOn = moment__WEBPACK_IMPORTED_MODULE_3__['unix'](currentDate).toDate();
                row.opePerformedOnDisplay = this.getFullDateFormatWithUnixTime(currentDate);
                row.opePerformedWithEsign = eSign;
                if (!row.isCriticalTask) {
                  this.checkOperation(row, eSign);
                }
              }
              // call save method
              this.saveOperation(row);
              // set workOrderStatusDetail with new value
            }
          };
          WorkOrderFormComponent.prototype.onOperationValidationOK = function(comment) {
            this.selectedOperationToCheck.opeComment = comment;
            this.validateOperationOK(this.selectedOperationToCheck, false);
          };
          WorkOrderFormComponent.prototype.onOperationValidationKO = function(comment) {
            this.selectedOperationToCheck.opeComment = comment;
            this.validateOperationKO(this.selectedOperationToCheck);
          };
          WorkOrderFormComponent.prototype.checkCriticalOperation = function(row, eSign) {
            this.displayOperationCheck = true;
            this.selectedOperationToCheck = row;
          };
          WorkOrderFormComponent.prototype.checkOperation = function(row, eSign) {
            if (row.opeStatus === this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE) {
              this.validateOperationKO(row);
            } else {
              this.validateOperationOK(row, eSign);
            }
          };
          WorkOrderFormComponent.prototype.validateOperationKO = function(row) {
            if (!row.isCriticalTask) {
              row.opeStatus = this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED;
            } else {
              row.opeStatus = this.awPropertiesConstants.AIRM_OPERATION_STATUS_ONGOING;
            }
            this.isWoNeedCheck = false;
            this.setLinkLists();
            if (this.user) {
              row.opeCheckedBy = this.user.userId;
              var currentDate = moment__WEBPACK_IMPORTED_MODULE_3__().unix();
              row.opeCheckedOn = moment__WEBPACK_IMPORTED_MODULE_3__['unix'](currentDate).toDate();
              row.opeCheckOnDisplay = this.getFullDateFormatWithUnixTime(currentDate);
            }
            row.opeCheckByDisplay = this.userText;
            row.opePerformedWithEsign = false;
            this.saveOperation(row);
          };
          WorkOrderFormComponent.prototype.validateOperationOK = function(row, eSign) {
            var currentDate = moment__WEBPACK_IMPORTED_MODULE_3__().unix();
            row.opeStatus = this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE;
            if (this.user) {
              if (row.isCriticalTask) {
                this.isWoNeedCheck = true;
                this.setLinkLists();
              }
              row.opeCheckedBy = this.user.userId;
              row.opeCheckByDisplay = this.userText;
              row.opeCheckedOn = moment__WEBPACK_IMPORTED_MODULE_3__['unix'](currentDate).toDate();
              row.opeCheckOnDisplay = this.getFullDateFormatWithUnixTime(currentDate);
              row.opePerformedWithEsign = eSign;
            }
            this.saveOperation(row);
          };
          WorkOrderFormComponent.prototype.checkWorkOrder = function(eSign) {
            var _this = this;
            var onSaveSucess;
            if (this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE) {
              this.woStatus.status = this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED;
              this.workOrder.woCheckedBy = undefined;
              this.woCheckedBy = undefined;
              this.workOrder.woCheckedOn = undefined;
              this.workOrder.woCheckedWithEsign = undefined;
              if (this.sessionService.isSpecificDassault) {
                onSaveSucess = function() {
                  _this.deleteLogbookNotificationFromWorkOrder();
                };
              }
            } else {
              var currentDate = moment__WEBPACK_IMPORTED_MODULE_3__().unix();
              this.woStatus.status = this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE;
              if (this.user) {
                this.workOrder.woCheckedBy = this.user.userId;
              }
              this.woCheckedBy =
                this.userText +
                ' (' +
                moment__WEBPACK_IMPORTED_MODULE_3__['unix'](currentDate).format('MM/DD/YYYY') +
                ')';
              this.workOrder.woCheckedOn = moment__WEBPACK_IMPORTED_MODULE_3__['unix'](currentDate).toDate();
              this.workOrder.woCheckedWithEsign = eSign;
              if (this.sessionService.isSpecificDassault) {
                onSaveSucess = function() {
                  _this.manageUpdateLogbookFromWorkOrder();
                };
              }
            }
            this.saveWorkOrder(onSaveSucess);
          };
          WorkOrderFormComponent.prototype.saveOperation = function(row) {
            var _this = this;
            var bidmOperationDtoRow = row;
            var bireOpeRow = 'bireOperationData';
            var bireOperationDtoRow = {
              opeDurationTime: row[bireOpeRow].ope_DURATION_TIME
            };
            var progressFromOperationStatusInput = {
              bireOperationDto: bireOperationDtoRow,
              bidmOperationDto: bidmOperationDtoRow
            };
            this.woFormService.updateBidmOperation(bidmOperationDtoRow).subscribe(function() {
              _this.woFormService
                .getProgressFromOperationStatus(progressFromOperationStatusInput)
                .subscribe(function(percent) {
                  if (row.opeStatus) {
                    row.opeStatusDisplay = row.opeStatus.slice(2);
                    row.opeStatusPercent = Math.floor(percent).toString();
                  }
                  var calculateWorkOrderImput = {
                    workOrderData: _this.workOrder,
                    fromLineMaintenance: false
                  };
                  _this.woFormService
                    .calculateAndUpdateBidmWorkOrderStatus(calculateWorkOrderImput)
                    .subscribe(function(newStatus) {
                      _this.woStatus.status = newStatus;
                      _this.woFormService.findBidmWorkOrder(_this.bidmWorkOrderId).subscribe(function(result) {
                        _this.woStatus = result.workOrderStatusDetail;
                        _this.initWoDescription();
                        _this.setLinkLists();
                        if (_this.woStatus.status) {
                          _this.woStatusProgressType = _this.woStatus.status.slice(2);
                        }
                        _this.woStatusProgressPercent = Math.floor(Number(result.statusPercent)).toString();
                        _this.updateInterface(true);
                      });
                    });
                });
            });
          };
          WorkOrderFormComponent.prototype.initWoDescription = function() {
            if (!!this.woStatus && !!this.woStatus.taskDesignation) {
              var jcDescription = this.woStatus.taskDesignation;
              if (this.sessionService.isSpecificDassault) {
                if (!!this.woStatus.taskDescription) {
                  jcDescription += '\n' + this.woStatus.taskDescription;
                }
              }
              this.woDescription = jcDescription;
            } else {
              this.woDescription = this.workOrder.woDescription;
            }
          };
          WorkOrderFormComponent.prototype.timeToDisplay = function(millisecond) {
            var secondInmillisecond = 1000;
            var hourInSecond = 3600;
            var minuteInSecond = 60;
            var secondModulo = 60;
            var check = 10;
            var second = Math.floor(millisecond / secondInmillisecond);
            var hours = Math.floor(second / hourInSecond);
            var minutes = Math.floor((second - hours * hourInSecond) / minuteInSecond);
            var seconds = second % secondModulo;
            var minutesDisplay = minutes.toString();
            var secondsDisplay = seconds.toString();
            if (minutes < check || seconds < check) {
              if (minutes < check) {
                minutesDisplay = '0' + minutes;
              }
              if (seconds < check) {
                secondsDisplay = '0' + seconds;
              }
              var displayLessTen = hours + ':' + minutesDisplay + ':' + secondsDisplay;
              return displayLessTen;
            }
            var display = hours + ':' + minutesDisplay + ':' + secondsDisplay;
            return display;
          };
          WorkOrderFormComponent.prototype.changeOpePerformedDurationDisplay = function(row) {
            if (row.opePerformedDuration !== undefined) {
              row.opePerformedDurationDisplay = this.timeToDisplay(row.opePerformedDuration);
            }
          };
          WorkOrderFormComponent.prototype.changeOpePerformedElapsedDisplay = function(row) {
            if (row.opePerformedElapsed !== undefined) {
              row.opePerformedElapsedDisplay = this.timeToDisplay(row.opePerformedElapsed);
            }
          };
          WorkOrderFormComponent.prototype.changeOpeStdDurationDisplay = function(row, num) {
            if (num !== undefined) {
              var durationTimeInmillisecond = 3600000;
              row.opeStdDurationDisplay = this.timeToDisplay(num * durationTimeInmillisecond);
            }
          };
          WorkOrderFormComponent.prototype.getFullDateFormatWithUnixTime = function(seconds) {
            var dateDisplay = moment__WEBPACK_IMPORTED_MODULE_3__['unix'](seconds);
            return dateDisplay.format('MM/DD/YYYY HH:mm');
          };
          WorkOrderFormComponent.prototype.getFullDateFormatWithSecond = function(second) {
            var dateDisplay = moment__WEBPACK_IMPORTED_MODULE_3__(second);
            return dateDisplay.format('MM/DD/YYYY HH:mm');
          };
          WorkOrderFormComponent.prototype.getFullDateFormatWithDate = function(date) {
            var dateDisplay = moment__WEBPACK_IMPORTED_MODULE_3__(date);
            return dateDisplay.format('MM/DD/YYYY HH:mm');
          };
          WorkOrderFormComponent.prototype.getTask = function(bireTaskId) {
            var _this = this;
            this.woFormService.findBireTask(bireTaskId).subscribe(function(task) {
              _this.bireTask = task;
              if (!_this.workOrder.woDescription) {
                _this.workOrder.woDescription = _this.bireTask.taskDescription;
              }
              _this.initDocumentTable();
              _this.initWoUserList();
            });
          };
          WorkOrderFormComponent.prototype.startOrEndDuration = function(operationRow) {
            this.resetCheck(operationRow);
            if (!operationRow.isOpeOnPerformed) {
              this.dateStartPerformedDuration = moment__WEBPACK_IMPORTED_MODULE_3__().valueOf();
              operationRow.isOpeOnPerformed = true;
              operationRow.opeStatus =
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__[
                  'AWPropertiesConstants'
                ].AIRM_OPERATION_STATUS_ONGOING;
              if (!operationRow.isOpeOnElapsed) {
                this.dateStartElapsedDuration = moment__WEBPACK_IMPORTED_MODULE_3__().valueOf();
                operationRow.isOpeOnElapsed = true;
              }
              if (!operationRow.opeOpeningDate) {
                var currentDate = moment__WEBPACK_IMPORTED_MODULE_3__().unix();
                operationRow.opeOpeningDate = moment__WEBPACK_IMPORTED_MODULE_3__['unix'](currentDate).toDate();
                operationRow.opeStartDateDisplay = this.getFullDateFormatWithUnixTime(currentDate);
              }
              if (this.user) {
                operationRow.opePerformedLastBy = this.user.userId;
                operationRow.opePerformedLastByDisplay = this.userText;
              }
            } else if (
              this.dateStartPerformedDuration &&
              operationRow.opePerformedDuration !== undefined &&
              this.dateStartElapsedDuration !== undefined
            ) {
              this.dateEndPerformedDuration = moment__WEBPACK_IMPORTED_MODULE_3__().valueOf();
              var duration = this.dateEndPerformedDuration - this.dateStartPerformedDuration;
              var elasped = this.dateEndPerformedDuration - this.dateStartElapsedDuration;
              operationRow.opePerformedDuration += duration;
              this.addBidmTimeTrackingData(
                operationRow,
                new Date(this.dateStartPerformedDuration),
                new Date(this.dateEndPerformedDuration),
                duration,
                elasped
              );
              this.changeOpePerformedDurationDisplay(operationRow);
              this.resetPerformedDates();
              operationRow.isOpeOnPerformed = false;
            }
            this.saveOperation(operationRow);
          };
          WorkOrderFormComponent.prototype.startOrEndElapsed = function(operationRow) {
            if (
              operationRow.isOpeOnElapsed &&
              this.dateStartElapsedDuration !== undefined &&
              operationRow.opePerformedElapsed !== undefined
            ) {
              this.dateEndElapsedDuration = moment__WEBPACK_IMPORTED_MODULE_3__().valueOf();
              var elasped = this.dateEndElapsedDuration - this.dateStartElapsedDuration;
              if (operationRow.isOpeOnPerformed) {
                this.startOrEndDuration(operationRow);
              } else {
                this.addBidmTimeTrackingData(
                  operationRow,
                  new Date(this.dateStartElapsedDuration),
                  new Date(this.dateEndElapsedDuration),
                  0,
                  elasped
                );
              }
              operationRow.opePerformedElapsed += elasped;
              this.changeOpePerformedElapsedDisplay(operationRow);
              this.resetElapsedDates();
              operationRow.isOpeOnElapsed = false;
              this.saveOperation(operationRow);
            }
          };
          WorkOrderFormComponent.prototype.addBidmTimeTrackingData = function(
            operationRow,
            dateIn,
            dateOut,
            duration,
            elapsed
          ) {
            var _this = this;
            // add entry in log table
            var bidmTimeTrackingToSave = {
              bidmTimeTrackingDTO: {
                bireOpeCode: operationRow.bireOpeCode,
                bireOpeVersion: operationRow.bireOpeVersion,
                ttPerformedClockOut: dateOut,
                ttPerformedClockIn: dateIn,
                ttPerformedDuration: duration,
                ttPerformedElapsed: elapsed,
                woId: this.workOrder.woId,
                projectId: this.workOrder.projectId
              },
              isInDB: false,
              performedBy: operationRow.opePerformedOnDisplay,
              operation: operationRow.bireOpeCode,
              clockOutText: this.dateService.dateWithHourMinSecToString(new Date()),
              durationText: this.timeToDisplay(duration),
              duration: duration,
              elapsed: elapsed,
              elapsedText: this.timeToDisplay(elapsed),
              isDelete: true,
              isEditable: true
            };
            this.woFormService.saveBidmTimeTracking([bidmTimeTrackingToSave]).subscribe(function() {
              _this.bidmTimeTracking.push(bidmTimeTrackingToSave);
            });
          };
          WorkOrderFormComponent.prototype.openWo = function() {
            var _this = this;
            if (
              this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED ||
              ((this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED ||
                this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED) &&
                !!this.operationTable)
            ) {
              this.woFormService.openBidmWorkOrder(this.bidmWorkOrderId).subscribe(function() {
                var calculateWorkOrderImput = {
                  workOrderData: _this.workOrder,
                  fromLineMaintenance: false
                };
                _this.woFormService
                  .calculateAndUpdateBidmWorkOrderStatus(calculateWorkOrderImput)
                  .subscribe(function(newStatus) {
                    _this.woStatus.status = newStatus;
                    _this.loadWorkOrder();
                  });
              });
            }
          };
          WorkOrderFormComponent.prototype.performWo = function(eSign) {
            this.setPerformed(eSign);
            this.woStatus.status = this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED;
            this.saveWorkOrder();
          };
          WorkOrderFormComponent.prototype.clickConfirmWorkCompletion = function() {
            var _this = this;
            if (
              this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_ONGOING &&
              this.isCriticalWithoutOperation()
            ) {
              this.woFormService.setWoToBeConfirmed(this.bidmWorkOrderId).subscribe(function() {
                _this.loadWorkOrder();
              });
            } else {
              this.stratOrRestartWo(false);
            }
          };
          WorkOrderFormComponent.prototype.clickCancelWorkCompletion = function() {
            var _this = this;
            if (
              this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED &&
              this.isCriticalWithoutOperation()
            ) {
              this.woFormService.unsetWoToBeConfirmed(this.bidmWorkOrderId).subscribe(function() {
                _this.loadWorkOrder();
              });
            } else {
              this.stratOrRestartWo(false);
            }
          };
          WorkOrderFormComponent.prototype.isCritical = function() {
            if (this.woStatus.isCritical) {
              return true;
            }
            return false;
          };
          WorkOrderFormComponent.prototype.isCriticalWithoutOperation = function() {
            if (this.woStatus.isCritical) {
              if (!this.operationTable || this.operationTable.length === 0) {
                return true;
              }
            }
            return false;
          };
          WorkOrderFormComponent.prototype.isNotCriticalWithoutOperation = function() {
            if (!this.woStatus.isCritical) {
              if (!this.operationTable || this.operationTable.length === 0) {
                return true;
              }
            }
            return false;
          };
          WorkOrderFormComponent.prototype.stratOrRestartWo = function(eSign) {
            var _this = this;
            var onSaveSucess;
            if (this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED) {
              this.cancelPerformed();
              // this.woStatus.status = this.awPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED;
            } else if (
              this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED ||
              ((this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED ||
                this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED ||
                this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_ONGOING) &&
                !!this.operationTable)
            ) {
              this.setPerformed(eSign);
              this.woStatus.status = this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED;
              /* if (!this.woStatus.isCritical) {
              this.setChecked(eSign);
              this.woStatus.status = this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE;
              if (this.sessionService.isSpecificDassault) {
                onSaveSucess = () => {
                  this.manageUpdateLogbookFromWorkOrder();
                };
              }
            }*/
            } else if (
              this.woStatus.status === this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE &&
              !this.woStatus.isCritical
            ) {
              this.cancelPerformed();
              this.cancelChecked();
              if (this.sessionService.isSpecificDassault) {
                onSaveSucess = function() {
                  _this.deleteLogbookNotificationFromWorkOrder();
                };
              }
              // this.woStatus.status = this.awPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED;
            }
            this.saveWorkOrder(onSaveSucess);
          };
          WorkOrderFormComponent.prototype.deleteLogbookNotificationFromWorkOrder = function() {
            var _this = this;
            if (this.workPackage.projectId && this.workOrder.woId) {
              var proj = {
                projectId: this.workPackage.projectId,
                woId: this.workOrder.woId
              };
              this.woFormService.deleteLogbookNotificationFromWorkOrder(proj).subscribe(
                function() {
                  _this.messageService.showSuccessMessage(
                    _this.getTranslateKey('successOnLogbookNotificationDeletion')
                  );
                },
                function(err) {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLogbookNotificationDeletion'));
                }
              );
            }
          };
          WorkOrderFormComponent.prototype.manageUpdateLogbookFromWorkOrder = function() {
            var _this = this;
            if (this.workPackage.projectId && this.workOrder.woId) {
              var proj = {
                projectId: this.workPackage.projectId,
                woId: this.workOrder.woId,
                woScheduledEndDate: moment__WEBPACK_IMPORTED_MODULE_3__().toDate()
              };
              this.woFormService.initializeUpdateLogbookFromWorkOrderInput(proj).subscribe(
                function(input) {
                  if (input.evolutionPnUpdateAvailable) {
                    _this.updateLogbookFromWorkOrderInput = input;
                    _this.showUpdateLogbookDialog = true;
                  } else {
                    _this.updateLogbookFromWorkOrder(input);
                  }
                },
                function(err) {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLogbookInitialization'));
                }
              );
            }
          };
          WorkOrderFormComponent.prototype.updateLogbookFromWorkOrder = function(input) {
            var _this = this;
            this.woFormService.updateLogbookFromWorkOrderInput(input).subscribe(
              function() {
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnLogbookUpdate'));
              },
              function(err) {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLogbookUpdate'));
              }
            );
          };
          WorkOrderFormComponent.prototype.cancelPerformed = function() {
            this.woPerformedBy = undefined;
            this.workOrder.woPerformedBy = undefined;
            this.workOrder.woPerformedOn = undefined;
            this.workOrder.woPerformedWithEsign = false;
          };
          WorkOrderFormComponent.prototype.setPerformed = function(eSign) {
            var currentDate = moment__WEBPACK_IMPORTED_MODULE_3__().unix();
            if (this.user) {
              this.woPerformedBy =
                this.userText +
                ' (' +
                moment__WEBPACK_IMPORTED_MODULE_3__['unix'](currentDate).format('MM/DD/YYYY') +
                ')';
              this.workOrder.woPerformedBy = this.user.userId;
            }
            this.workOrder.woPerformedOn = moment__WEBPACK_IMPORTED_MODULE_3__['unix'](currentDate).toDate();
            this.workOrder.woPerformedWithEsign = eSign;
          };
          WorkOrderFormComponent.prototype.cancelChecked = function() {
            this.workOrder.woCheckedWithEsign = false;
            this.woCheckedBy = undefined;
            this.workOrder.woCheckedBy = undefined;
            this.workOrder.woCheckedOn = undefined;
          };
          /*
    private setChecked(eSign: boolean) {
      const currentDate = moment().unix();
      if (this.user) {
        this.woCheckedBy = `${this.userText} (${moment.unix(currentDate).format('MM/DD/YYYY')})`;
        this.workOrder.woCheckedBy = this.user.userId;
      }
      this.workOrder.woCheckedOn = moment.unix(currentDate).toDate();
      this.workOrder.woCheckedWithEsign = eSign;
    } */
          WorkOrderFormComponent.prototype.ctrlConfiguration = function() {
            var _this = this;
            this.isLoadingOutgoingConf = true;
            var equipmentCode;
            if (!!this.wpEquipementDto) {
              equipmentCode = this.wpEquipementDto.equipmentCode;
            }
            var input = {
              checkConfiguration: true,
              checkFl: false,
              checkLogbook: false,
              checkMel: false,
              checkPotential: false,
              checkReferential: false,
              checkStructure: false,
              equipmentCode: equipmentCode || '',
              projectId: this.workPackage.projectId,
              withAllCounters: true,
              withFunctionalLocations: true,
              withMelFlag: true
            };
            this.woFormService.controlConfiguration(input).subscribe(function(controlConfigurationOutput) {
              _this.outgoinConfiguration = { ok: 0, warning: 0, nok: 0 };
              _this.checkConfiguration(controlConfigurationOutput);
              _this.isLoadingOutgoingConf = false;
            });
          };
          WorkOrderFormComponent.prototype.checkConfiguration = function(asset) {
            var _this = this;
            var e_1, _a;
            var checkList = [
              asset.checkConfigurationCause,
              asset.checkCoreCause,
              asset.checkFlCause,
              asset.checkMelCause,
              asset.checkReferentialCause,
              asset.checkStructureCause,
              asset.checkConfigurationCauseAlt,
              asset.checkCoreCauseAlt,
              asset.checkFlCauseAlt,
              asset.checkMelCauseAlt,
              asset.checkReferentialCauseAlt,
              asset.checkStructureCauseAlt,
              asset.checkConfigurationResult,
              asset.checkCoreResult,
              asset.checkFlResult,
              asset.checkMelResult,
              asset.checkReferentialResult,
              asset.checkStructureResult,
              asset.checkLogbookCause,
              asset.checkLogbookCauseAlt,
              asset.checkLogbookResult,
              asset.checkPotentialCause,
              asset.checkPotentialCauseAlt,
              asset.checkPotentialResult
            ];
            try {
              for (
                var checkList_1 = __values(checkList), checkList_1_1 = checkList_1.next();
                !checkList_1_1.done;
                checkList_1_1 = checkList_1.next()
              ) {
                var checkElement = checkList_1_1.value;
                if (checkElement) {
                  this.countConfiguration(checkElement);
                }
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (checkList_1_1 && !checkList_1_1.done && (_a = checkList_1.return)) _a.call(checkList_1);
              } finally {
                if (e_1) throw e_1.error;
              }
            }
            if (asset.children) {
              asset.children.forEach(function(childAsset) {
                return _this.checkConfiguration(childAsset);
              });
            }
          };
          WorkOrderFormComponent.prototype.countConfiguration = function(checkPart) {
            this.outgoinConfiguration.ok = this.outgoinConfiguration.ok || 0;
            this.outgoinConfiguration.warning = this.outgoinConfiguration.warning || 0;
            this.outgoinConfiguration.nok = this.outgoinConfiguration.nok || 0;
            this.outgoinConfiguration.ok +=
              checkPart ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_15__['ControlConfigConstants']
                .ICON_GREEN
                ? 1
                : 0;
            this.outgoinConfiguration.warning +=
              checkPart ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_15__['ControlConfigConstants']
                .ICON_YELLOW
                ? 1
                : 0;
            this.outgoinConfiguration.nok +=
              checkPart ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_15__['ControlConfigConstants']
                .ICON_RED
                ? 1
                : 0;
          };
          WorkOrderFormComponent.prototype.openAppliedConfigurationManagement = function() {
            if (this.workPackage.assetCode) {
              var objectId = {
                equipmentCodeList: [this.workPackage.assetCode],
                workPackage: this.workPackage.projectId
              };
              var data = {
                id: this.tabService.generateId(),
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read,
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_14__['ComponentConstants']
                    .MAI_CONFIGURATION_CONTROL,
                objectId: this.serializationService.serialize(objectId)
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            } else {
              // TODO
            }
          };
          WorkOrderFormComponent.prototype.goToAsset = function(equipment) {
            if (equipment) {
              switch (equipment.equipmentFunction) {
                case this.awPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY:
                  this.goToAircraft(
                    equipment.equipmentCode,
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
                  );
                  break;
                case this.awPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY:
                  this.goToEngine(
                    equipment.equipmentCode,
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
                  );
                  break;
                default:
                  this.goToEquipment(
                    equipment.equipmentCode,
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
                  );
                  break;
              }
            }
          };
          WorkOrderFormComponent.prototype.goToAircraft = function(aircraftCode, openMode) {
            var labelKey = 'transaction.AircraftFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'AircraftFormComponent',
              openMode: openMode
            };
            if (!!aircraftCode) {
              var equipmentId = {
                equipmentCode: aircraftCode
              };
              data.objectId = this.serializationService.serialize(equipmentId);
            }
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          WorkOrderFormComponent.prototype.goToEngine = function(engineCode, openMode) {
            var labelKey = 'transaction.EngineFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'EngineFormComponent',
              openMode: openMode
            };
            if (!!engineCode) {
              var equipmentId = {
                equipmentCode: engineCode
              };
              data.objectId = this.serializationService.serialize(equipmentId);
            }
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          WorkOrderFormComponent.prototype.goToEquipment = function(equipmentCode, openMode) {
            var labelKey = 'transaction.EquipmentFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'EquipmentFormComponent',
              openMode: openMode
            };
            if (!!equipmentCode) {
              var equipmentId = {
                equipmentCode: equipmentCode
              };
              data.objectId = this.serializationService.serialize(equipmentId);
            }
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          WorkOrderFormComponent.prototype.openTaskLink = function(task) {
            if (task) {
              if (task.taskCode && task.taskCode.trim().length > 0) {
                this.openTask(
                  task,
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
                );
              } else {
                this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingTaskCode'));
              }
            }
          };
          WorkOrderFormComponent.prototype.openTask = function(object, openMode) {
            if (object != undefined) {
              var labelKey = 'transaction.TaskFormComponent';
              var data = {
                id: this.tabService.generateId(),
                componentId: 'TaskFormComponent',
                objectId: this.serializationService.serialize(object),
                openMode: openMode
              };
              this.tabService.open(this.tabService.create(data, labelKey, true));
            } else {
              var labelKey = 'transaction.TaskFormComponent';
              var data = {
                id: this.tabService.generateId(),
                componentId: 'TaskFormComponent',
                objectId: undefined,
                openMode: openMode
              };
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          WorkOrderFormComponent.prototype.openEvolution = function(row) {
            var bireEvolutionDTOId = row.adSbModDTOId;
            var labelKey = 'transaction.EvolutionFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'EvolutionFormComponent',
              objectId: this.serializationService.serialize(bireEvolutionDTOId),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          WorkOrderFormComponent.prototype.openSB = function(row) {
            var bireSBDTOId = row.adSbModDTOId;
            var labelKey = 'transaction.SbadFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'SbadFormComponent',
              objectId: this.serializationService.serialize(bireSBDTOId),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          WorkOrderFormComponent.prototype.openModification = function(row) {
            var bireModificationDTOId = row.adSbModDTOId;
            var labelKey = 'transaction.ModificationFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_14__['ComponentConstants']
                  .ENG_MODIFICATION_FORM,
              objectId: bireModificationDTOId ? this.serializationService.serialize(bireModificationDTOId) : undefined,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          WorkOrderFormComponent.prototype.openAD = function(row) {
            var bireSBDTOId = row.adSbModDTOId;
            var labelKey = 'transaction.AirworthinessDirectiveFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'AirworthinessDirectiveFormComponent',
              objectId: this.serializationService.serialize(bireSBDTOId),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          WorkOrderFormComponent.prototype.openEvent = function(rowData) {
            var _this = this;
            var dto = {
              notificationCode: rowData.notificationCode,
              typeCode: rowData.typeCode
            };
            var bidoNotificationDTOId = {
              notificationCode: rowData.notificationCode
            };
            this.woFormService.findBidoNotification(bidoNotificationDTOId).subscribe(function(res) {
              if (
                !!res.bidoNotificationTypeDTO &&
                res.bidoNotificationTypeDTO.typeCategory === '5-def' &&
                dto.notificationCode
              ) {
                var notificationId = {
                  notificationCode: dto.notificationCode
                };
                _this.openDefect(notificationId);
              } else {
                _this.openEventUC(
                  dto,
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
                );
              }
            });
          };
          WorkOrderFormComponent.prototype.openEventUC = function(objectId, openMode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_14__['ComponentConstants']
                  .FLE_EVENT_CREATE,
              openMode: openMode
            };
            if (!!objectId) {
              var eventId = {
                notificationCode: objectId.notificationCode
              };
              data.objectId = this.serializationService.serialize(eventId);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          WorkOrderFormComponent.prototype.openDefect = function(eventId) {
            if (eventId) {
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_14__['ComponentConstants']
                    .FLE_DEFECT_FORM,
                objectId: this.serializationService.serialize(eventId),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          WorkOrderFormComponent.prototype.openItemLink = function(item) {
            if (!!item) {
              if (
                _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_39__['StringUtils'].isNullOrEmpty(item.familyCode)
              ) {
                this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingCode'));
              } else {
                this.openItem(
                  item,
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
                );
              }
            }
          };
          WorkOrderFormComponent.prototype.openItem = function(objectId, openMode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_14__['ComponentConstants'].ENG_ITEM_FORM,
              openMode: openMode
            };
            if (!!objectId) {
              var itemFormId = {
                familyCode: objectId.familyCode,
                chapter: objectId.chapter,
                section: objectId.section,
                sheet: objectId.sheet,
                marks: objectId.marks,
                subject: objectId.subject,
                structureType: objectId.structureType,
                variantCode: objectId.variantCode
              };
              data.objectId = this.serializationService.serialize(itemFormId);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          WorkOrderFormComponent.prototype.openWorkPackageLink = function() {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_14__['ComponentConstants']
                  .MAI_WORK_PACKAGE_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Write,
              objectId: this.serializationService.serialize({ wpId: this.workPackage.projectId })
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          WorkOrderFormComponent.prototype.consultWorkOrderOrigin = function() {
            var _this = this;
            if (!!this.originText && this.wpEquipementDto) {
              var assetWorkOrderOriginInput = {
                woType: this.workOrder.woType,
                woSource: this.workOrder.woSource,
                evolutionType: this.evolutionType,
                familyVariantCode: this.wpEquipementDto.familyVariantCode
              };
              this.woFormService.findWorkOrderOriginDetails(assetWorkOrderOriginInput).subscribe(function(result) {
                if (
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                    .AIRM_WORK_ORDER_TYPE_TASK === _this.workOrder.woType
                ) {
                  if (!!result.bireTaskDTOId) {
                    // open task form
                    var bireTaskDTO = result.bireTaskDTOId;
                    _this.openTask(
                      bireTaskDTO,
                      _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
                    );
                  }
                } else if (
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                    .AIRM_WORK_ORDER_TYPE_EVOLUTION === _this.workOrder.woType
                ) {
                  if (
                    _shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_11__['BidoEvolutionConstants']
                      .CODE_EVOLUTION === _this.evolutionType
                  ) {
                    if (!!result.bireEvolutionDTOId) {
                      // open evolution form
                      var bireEvolutionDTOId = {
                        adSbModDTOId: result.bireEvolutionDTOId
                      };
                      _this.openEvolution(bireEvolutionDTOId);
                    }
                  } else if (
                    _shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_11__['BidoEvolutionConstants']
                      .CODE_AD === _this.evolutionType
                  ) {
                    if (!!result.bireSbDTOId) {
                      // open Airworthiness Directive form
                      var bireSBDTOId = {
                        adSbModDTOId: result.bireSbDTOId
                      };
                      _this.openAD(bireSBDTOId);
                    }
                  } else if (
                    _shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_11__['BidoEvolutionConstants']
                      .CODE_SB === _this.evolutionType
                  ) {
                    if (!!result.bireSbDTOId) {
                      // open Service Bulletin form
                      var bireSbDTOId = {
                        adSbModDTOId: result.bireSbDTOId
                      };
                      _this.openSB(bireSbDTOId);
                    }
                  } else if (
                    _shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_11__['BidoEvolutionConstants']
                      .CODE_MODIFICATION === _this.evolutionType
                  ) {
                    if (!!result.bireModificationDTOId) {
                      // open modification form
                      var bireModificationDTOId = {
                        adSbModDTOId: result.bireModificationDTOId
                      };
                      _this.openModification(bireModificationDTOId);
                    }
                  }
                } else if (
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                    .AIRM_WORK_ORDER_TYPE_DEFECT === _this.workOrder.woType
                ) {
                  if (!!result.bidoNotificationDTOId) {
                    // open event form
                    var bidoNotificationDTOId = result.bidoNotificationDTOId;
                    _this.openDefect(bidoNotificationDTOId);
                  }
                } else if (
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                    .AIRM_WORK_ORDER_TYPE_SN_CHANGE === _this.workOrder.woType
                ) {
                  if (!!result.bidoEquipmentDTO) {
                    if (
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                        .ITEM_FAMILY_CODE_AIRCRAFT_KEY === result.bidoEquipmentDTO.equipmentFunction
                    ) {
                      // open aircraft
                      _this.goToAircraft(
                        result.bidoEquipmentDTO.equipmentCode,
                        _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
                      );
                    } else if (
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                        .ITEM_FAMILY_CODE_ENGINE_KEY === result.bidoEquipmentDTO.equipmentFunction
                    ) {
                      // open engine
                      _this.goToEngine(
                        result.bidoEquipmentDTO.equipmentCode,
                        _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
                      );
                    } else {
                      // open equipment
                      _this.goToEquipment(
                        result.bidoEquipmentDTO.equipmentCode,
                        _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
                      );
                    }
                  }
                }
              });
            } else if (
              !!this.originText &&
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                .AIRM_WORK_ORDER_TYPE_DEFECT === this.workOrder.woType
            ) {
              var bidoNotificationDTOId = { notificationCode: this.originText };
              this.openDefect(bidoNotificationDTOId);
            }
          };
          WorkOrderFormComponent.prototype.todo = function() {
            // #TODO
          };
          // documents
          WorkOrderFormComponent.prototype.initDocumentTable = function() {
            var _this = this;
            if (this.bireTask.taskCode && this.bireTask.taskVersion) {
              var bireTaskId = {
                taskCode: this.bireTask.taskCode,
                taskVersion: this.bireTask.taskVersion
              };
              this.woFormService.findBireDocTaskByTask(bireTaskId).subscribe(function(docTaskList) {
                docTaskList.forEach(function(docTask) {
                  var docRow = {
                    docTask: _this.bireTask.taskCode + '-' + _this.bireTask.taskVersion,
                    docName: docTask.docName,
                    docExtension: docTask.docType,
                    docDescription: docTask.docDescription,
                    docExternal: docTask.docSource,
                    docPublicationDate: docTask.docPublicationDate,
                    docIsIllustration: docTask.docIsIllustration,
                    docCode: docTask.docCode,
                    _obj: docTask,
                    docFile: docTask.docFile
                  };
                  var fileSize;
                  if (docTask.docFile) {
                    fileSize = _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_35__['FileUtils'].getFormattedSize(
                      docTask.docFile.length
                    );
                  }
                  docRow.docSize = fileSize;
                  if (docRow.docExtension === 'PNG' || docRow.docExtension === 'JPG') {
                    _this.processMaterialIllustration(docRow);
                  }
                  _this.documentTableDisplayed.push(docRow);
                });
              });
            }
          };
          WorkOrderFormComponent.prototype.showDocExtension = function(document) {
            return _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_35__['FileUtils']
              .getExtension(document.docName)
              .toUpperCase();
          };
          WorkOrderFormComponent.prototype.processMaterialIllustration = function(documentRow) {
            if (
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_38__['ObjectUtils'].isDefined(documentRow.docFile) &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_39__['StringUtils'].isNullOrEmpty(
                documentRow.docExtension
              )
            ) {
              documentRow.materialIllustration = this.domSanitizer.bypassSecurityTrustResourceUrl(
                '' +
                  _shared_utils_image_utils__WEBPACK_IMPORTED_MODULE_36__['ImageUtils'].getBase64Prefix(
                    documentRow.docExtension
                  ) +
                  documentRow.docFile
              );
            }
          };
          WorkOrderFormComponent.prototype.showIllustration = function(illustration) {
            this.currentIllustration = illustration;
          };
          WorkOrderFormComponent.prototype.hideIllustration = function() {
            this.currentIllustration = undefined;
          };
          WorkOrderFormComponent.prototype.isConfOk = function() {
            return (
              (this.outgoinConfiguration.nok === undefined ? 0 : this.outgoinConfiguration.nok) === 0 &&
              (this.outgoinConfiguration.warning === undefined ? 0 : this.outgoinConfiguration.warning) === 0 &&
              (this.outgoinConfiguration.ok === undefined ? 0 : this.outgoinConfiguration.ok) > 0
            );
          };
          WorkOrderFormComponent.prototype.isConfWarning = function() {
            return (
              (this.outgoinConfiguration.nok === undefined ? 0 : this.outgoinConfiguration.nok) === 0 &&
              (this.outgoinConfiguration.warning === undefined ? 0 : this.outgoinConfiguration.warning) > 0
            );
          };
          WorkOrderFormComponent.prototype.isConfNok = function() {
            return (this.outgoinConfiguration.nok === undefined ? 0 : this.outgoinConfiguration.nok) > 0;
          };
          WorkOrderFormComponent.prototype.ctrlStock = function() {
            var _this = this;
            this.isLoadingStockControlConf = true;
            if (this.workPackage.projectId && this.workOrder.woId) {
              var projectIdDto = {
                projectId: this.workPackage.projectId
              };
              var workOrderIdDto = {
                woId: this.workOrder.woId,
                projectId: this.workPackage.projectId
              };
              var input = {
                projectId: projectIdDto,
                workOrderId: workOrderIdDto,
                mvtStatusExcluded: [
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                    .MM_MVT_STATUS_EXECUTED_KEY,
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                    .MM_MVT_STATUS_CANCELED_KEY,
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                    .MM_MVT_STATUS_CLOSED_KEY
                ],
                date: moment__WEBPACK_IMPORTED_MODULE_3__().toDate()
              };
              this.woFormService.controlStock(input).subscribe(function(stockMvtList) {
                _this.stockControlConf = { ok: 0, warning: 0, nok: 0 };
                _this.checkStock(stockMvtList);
                _this.isLoadingStockControlConf = false;
              });
            }
          };
          WorkOrderFormComponent.prototype.checkStock = function(stockList) {
            var _this = this;
            stockList.forEach(function(stock) {
              _this.countStockConfig(stock);
            });
          };
          WorkOrderFormComponent.prototype.countStockConfig = function(stock) {
            this.stockControlConf.ok = this.stockControlConf.ok || 0;
            this.stockControlConf.warning = this.stockControlConf.warning || 0;
            this.stockControlConf.nok = this.stockControlConf.nok || 0;
            this.stockControlConf.ok +=
              stock.status ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_15__['ControlConfigConstants']
                .ICON_GREEN_LIGHT_CODE
                ? 1
                : 0;
            this.stockControlConf.warning +=
              stock.status ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_15__['ControlConfigConstants']
                .ICON_YELLOW_LIGHT_CODE
                ? 1
                : 0;
            this.stockControlConf.nok +=
              stock.status ===
              _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_15__['ControlConfigConstants']
                .ICON_RED_LIGHT_CODE
                ? 1
                : 0;
          };
          WorkOrderFormComponent.prototype.showButtonOpenField = function() {
            return this.sessionService.isSpecificDassault && !!this.woTask;
          };
          WorkOrderFormComponent.prototype.showButtonOpenStaffPlanning = function() {
            return this.sessionService.hasUserRightByUseCase(
              _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_12__['BidoFunctionTypeConstants']
                .UC_HR_EMPLOYEE,
              _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_12__['BidoFunctionTypeConstants']
                .DEGREE_DISPLAY
            );
          };
          WorkOrderFormComponent.prototype.openField = function() {
            if (this.woStatus && !!this.woStatus.bidoEquipmentData) {
              this.davFieldService
                .buildTaskFieldLink({
                  taskCodeAndVersion: this.woTask,
                  familyVariantCode: this.woStatus.bidoEquipmentData.familyVariantCode
                })
                .subscribe(function(data) {
                  window.open(data);
                });
            }
          };
          WorkOrderFormComponent.prototype.openOperationUC = function(rowData) {
            if (!!rowData.bireOpeCode && !!rowData.bireOpeVersion && !!rowData.bireOpeRangeCode) {
              var object = {
                opeCode: rowData.bireOpeCode,
                opeVersion: rowData.bireOpeVersion,
                rangeCode: rowData.bireOpeRangeCode
              };
              var labelKey = 'transaction.OperationSearchComponent';
              var data = {
                id: this.tabService.generateId(),
                componentId: 'OperationFormComponent',
                objectId: this.serializationService.serialize(object),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
              };
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          WorkOrderFormComponent.prototype.showStatus = function() {
            var _this = this;
            var overlayRef = this._overlayService.openWithPositionCenter({
              content: _status_work_order_status_component__WEBPACK_IMPORTED_MODULE_47__['WorkOrderStatusComponent'],
              data: {
                statusState: this.woStatus.status,
                statusDate: this.workOrder.statusDate,
                statusUser: this.workOrder.statusUser
              }
            });
            overlayRef.afterClosed$.subscribe({
              next: function(event) {
                if (event.data) {
                  if (_this.woStatus.status === _this.awPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED) {
                    _this.stratOrRestartWo(false);
                  } else if (_this.woStatus.status === _this.awPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED) {
                    _this.checkWorkOrder(false);
                  } else if (_this.woStatus.status === _this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE) {
                    /* if (!this.woStatus.isCritical) {
                          this.stratOrRestartWo(false);
                        } else {
                          this.checkWorkOrder(false);
                        } */
                    _this.checkWorkOrder(false);
                  }
                }
              }
            });
          };
          WorkOrderFormComponent.prototype.lastUpdateDetails = function() {
            this.showLastUpdatePopup = true;
          };
          WorkOrderFormComponent.prototype.addWoAssetManagement = function() {
            var _this = this;
            this.isLoadingWoAssetManagementTable = true;
            var input = {
              bidmWorkOrderDTOId: this.bidmWorkOrderId,
              woAssetManagementDTOs: this.allWoAssetManagements.length > 0 ? this.allWoAssetManagements : undefined
            };
            this.woFormService.addWoAssetManagementToWo(input).subscribe(function(result) {
              _this.addJobCardWoAssetManagementRow(result);
              _this.isLoadingWoAssetManagementTable = false;
            });
          };
          WorkOrderFormComponent.prototype.initInstallRemoveStatuses = function() {
            var _this = this;
            var observable = this.isGroundEquipment
              ? this.propertiesService.getValue(
                  _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_16__['GenericPropertyConstants']
                    .GROUND_EQUIPMENT_STATUS_MAP
                )
              : this.propertiesService.getValue(
                  _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_16__['GenericPropertyConstants']
                    .OPERATIONAL_STATUS_MAP
                );
            observable.subscribe(function(list) {
              _this.removeOperationalStatuses = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_37__['ListUtils']
                .orEmpty(list)
                .filter(function(elt) {
                  return (
                    elt.value !==
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                      .OPERATIONAL_STATUS_IN_OPERATION_KEY
                  );
                })
                .sort(function(elt1, elt2) {
                  return elt1.label.localeCompare(elt2.label);
                });
              _this.installOperationalStatuses = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_37__['ListUtils']
                .orEmpty(list)
                .filter(function(elt) {
                  return (
                    elt.value !==
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                        .OPERATIONAL_STATUS_SPARE_KEY &&
                    elt.value !==
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__['AWPropertiesConstants']
                        .OPERATIONAL_STATUS_SCRAPPED_KEY
                  );
                })
                .sort(function(elt1, elt2) {
                  return elt1.label.localeCompare(elt2.label);
                });
            });
          };
          WorkOrderFormComponent.prototype.initWoAssetMangement = function() {
            var _this = this;
            this.isLoadingWoAssetManagementTable = true;
            this.woAssetManagementTable = [];
            this.selectedWoAssetManagements = [];
            this.expandedWoAssetRows = {};
            this.woFormService.getByWorkOrder(this.bidmWorkOrderId).subscribe(function(result) {
              result.forEach(function(woAssetManagementDTO) {
                var row = _this.addJobCardWoAssetManagementRow(woAssetManagementDTO);
                _this.loadTransferOrders(woAssetManagementDTO, row);
              });
              _this.isLoadingWoAssetManagementTable = false;
            });
          };
          WorkOrderFormComponent.prototype.loadTransferOrders = function(woAssetManagementDTO, row) {
            if (
              !!row.selectedBidoEquipmentDTO &&
              !!row.selectedPn &&
              !!row.selectedBidoEquipmentDTO.sn &&
              !!this.workOrder.projectId &&
              !!this.workOrder.woId
            ) {
              var input = {
                projectId: this.workOrder.projectId,
                woId: this.workOrder.woId,
                assetPn: row.selectedPn,
                assetSn: row.selectedBidoEquipmentDTO.sn
              };
              this.logisticsService.findTransferOrdersByRemoval(input).subscribe({
                next: function(transferOrders) {
                  if (transferOrders && transferOrders.length > 0) {
                    row.transferOrders = transferOrders;
                    row.createReverseTransfer = true;
                    row._existingReversal = true;
                  }
                }
              });
            }
          };
          WorkOrderFormComponent.prototype.addJobCardWoAssetManagementRow = function(woAssetManagementDTO) {
            var row = __assign({}, woAssetManagementDTO, {
              key: this.woAssetManagementTable.length + '-id',
              availableDecisions: this.getAvailableDecisions(),
              availableEquipments: this.getAvailableEquipments(woAssetManagementDTO),
              availableSuperiorAssets: this.getAvailableSuperiorAssets(woAssetManagementDTO),
              availableWarehouses: this.getAvailableWarehouses(woAssetManagementDTO),
              availableItems: this.getAvailableItems(woAssetManagementDTO),
              availableFunctionCodes: this.getAvailableFunctionCodes(woAssetManagementDTO),
              availablePNs: this.getAvailablePns(woAssetManagementDTO),
              availableStatuses: this.getAvailableStatuses(woAssetManagementDTO),
              availableFls: this.getAvailableFls(woAssetManagementDTO),
              transferOrders: [],
              _obj: woAssetManagementDTO
            });
            if (!woAssetManagementDTO.bidoNotificationDTO) {
              this.expandedWoAssetRows[row.key] = true;
              row._expand = true;
            }
            if (this.workOrder.bidtWarehouseId) {
              row.selectedWarehouseId = this.workOrder.bidtWarehouseId;
              woAssetManagementDTO.selectedWarehouseId = this.workOrder.bidtWarehouseId;
            }
            row.isLoading = false;
            this.initWoAssetAlert(row);
            this.woAssetManagementTable.push(row);
            this.allWoAssetManagements.push(woAssetManagementDTO);
            return row;
          };
          WorkOrderFormComponent.prototype.updateJobCardWoAssetManagementRow = function(row, woAssetManagementDTO) {
            Object.assign(row, woAssetManagementDTO);
            this.loadTransferOrders(woAssetManagementDTO, row);
            row.availableEquipments = this.getAvailableEquipments(woAssetManagementDTO);
            row.availableSuperiorAssets = this.getAvailableSuperiorAssets(woAssetManagementDTO);
            row.availableWarehouses = this.getAvailableWarehouses(woAssetManagementDTO);
            row.availableItems = this.getAvailableItems(woAssetManagementDTO);
            row.availablePNs = this.getAvailablePns(woAssetManagementDTO);
            row.availableStatuses = this.getAvailableStatuses(woAssetManagementDTO);
            row.availableFls = this.getAvailableFls(woAssetManagementDTO);
            row.isLoading = false;
            row._obj = woAssetManagementDTO;
            this.initWoAssetAlert(row);
            this.woAssetManagementReadyToExecute();
          };
          WorkOrderFormComponent.prototype.initWoAssetAlert = function(row) {
            if (!row.alertIcon && !row.bidoNotificationDTO) {
              if (this.woAssetManagementIsReady(row)) {
                row.isReady = true;
                row.alertIcon =
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_15__[
                    'ControlConfigConstants'
                  ].ICON_GREEN_LIGHT_CODE;
              } else {
                row.alertIcon =
                  _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_15__[
                    'ControlConfigConstants'
                  ].ICON_RED_LIGHT_CODE;
              }
            }
          };
          WorkOrderFormComponent.prototype.getAvailableDecisions = function() {
            var decisionList = [];
            decisionList.push({
              label: this.translateService.instant(this.getTranslateKey('install')),
              value:
                _shared_constants_bido_notification_type_constants__WEBPACK_IMPORTED_MODULE_13__[
                  'BidoNotificationTypeConstants'
                ].ASSEMBLY_TYPE_CODE
            });
            decisionList.push({
              label: this.translateService.instant(this.getTranslateKey('remove')),
              value:
                _shared_constants_bido_notification_type_constants__WEBPACK_IMPORTED_MODULE_13__[
                  'BidoNotificationTypeConstants'
                ].DISASSEMBLY_TYPE_CODE
            });
            return decisionList;
          };
          WorkOrderFormComponent.prototype.getAvailableWarehouses = function(woAssetManagementDTO) {
            return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_37__['ListUtils']
              .orEmpty(woAssetManagementDTO.availableWarehouseList)
              .filter(function(warehouse) {
                return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_38__['ObjectUtils'].isDefined(
                  warehouse.whCode
                );
              })
              .map(function(warehouse) {
                return {
                  label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_39__['StringUtils'].isNullOrEmpty(
                    warehouse.whName
                  )
                    ? warehouse.whCode
                    : warehouse.whCode + ' - ' + warehouse.whName,
                  value: warehouse.wareHouseId
                };
              });
          };
          WorkOrderFormComponent.prototype.getAvailableSuperiorAssets = function(woAssetManagementDTO) {
            return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_37__['ListUtils']
              .orEmpty(woAssetManagementDTO.avaialableSuperiorAssetList)
              .filter(function(data) {
                return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_38__['ObjectUtils'].isDefined(
                  data.equipmentCode
                );
              })
              .map(function(data) {
                return {
                  label: _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_33__[
                    'BidoEquipmentUtils'
                  ].toString(data),
                  value: data
                };
              });
          };
          WorkOrderFormComponent.prototype.getAvailableEquipments = function(woAssetManagementDTO) {
            return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_37__['ListUtils']
              .orEmpty(woAssetManagementDTO.availableBidoEquipmentList)
              .filter(function(data) {
                return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_38__['ObjectUtils'].isDefined(
                  data.equipmentCode
                );
              })
              .map(function(data) {
                return {
                  label: data.sn,
                  value: data
                };
              });
          };
          WorkOrderFormComponent.prototype.getAvailableItems = function(woAssetManagementDTO) {
            return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_37__['ListUtils']
              .orEmpty(woAssetManagementDTO.availableItemDTOList)
              .map(function(data) {
                return {
                  label:
                    _shared_utils_bire_item_utils__WEBPACK_IMPORTED_MODULE_34__['BireItemUtils'].createItemKey(data) +
                    '-' +
                    data.name,
                  value: data
                };
              });
          };
          WorkOrderFormComponent.prototype.getAvailableFunctionCodes = function(woAssetManagementDTO) {
            return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_37__['ListUtils']
              .orEmpty(woAssetManagementDTO.availableFunctionCodeList)
              .map(function(data) {
                return {
                  label: data,
                  value: data
                };
              });
          };
          WorkOrderFormComponent.prototype.getAvailablePns = function(woAssetManagementDTO) {
            return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_37__['ListUtils']
              .orEmpty(woAssetManagementDTO.availablePNDTOList)
              .map(function(data) {
                return {
                  label: '' + data.pnCode,
                  value: data.pnCode
                };
              });
          };
          WorkOrderFormComponent.prototype.getAvailableStatuses = function(woAssetManagementDTO) {
            if (
              woAssetManagementDTO &&
              woAssetManagementDTO.notificationType ===
                _shared_constants_bido_notification_type_constants__WEBPACK_IMPORTED_MODULE_13__[
                  'BidoNotificationTypeConstants'
                ].ASSEMBLY_TYPE_CODE
            ) {
              return this.installOperationalStatuses;
            } else {
              return this.removeOperationalStatuses;
            }
          };
          WorkOrderFormComponent.prototype.getAvailableFls = function(woAssetManagementDTO) {
            return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_37__['ListUtils']
              .orEmpty(woAssetManagementDTO.availableFlDTOList)
              .map(function(data) {
                return {
                  label: data.bidoFlData ? data.bidoFlData.flCode : '',
                  value: data.bidoFlData ? data.bidoFlData.flCode : undefined
                };
              });
          };
          WorkOrderFormComponent.prototype.updateWoAssetDecision = function(rowData) {
            var _this = this;
            var input = {
              bidmWorkOrderDTOId: this.bidmWorkOrderId,
              woAssetManagementDTO: rowData,
              woAssetManagementDTOs: this.allWoAssetManagements.filter(function(woAssetManagement) {
                return woAssetManagement !== rowData._obj;
              }),
              decision: rowData.notificationType
            };
            rowData.alertIcon = undefined;
            rowData.alertMessage = undefined;
            rowData.isLoading = true;
            this.woFormService.woAssetManagementUpdateDecision(input).subscribe(function(result) {
              _this.updateJobCardWoAssetManagementRow(rowData, result);
              _this.isLoadingWoAssetManagementTable = false;
            });
          };
          WorkOrderFormComponent.prototype.updateWoAssetSuperiorAsset = function(rowData) {
            var _this = this;
            var input = {
              bidmWorkOrderDTOId: this.bidmWorkOrderId,
              woAssetManagementDTO: rowData,
              woAssetManagementDTOs: this.allWoAssetManagements.filter(function(woAssetManagement) {
                return woAssetManagement !== rowData._obj;
              }),
              selectedSuperiorBidoEquipmentDTO: rowData.selectedSuperiorBidoEquipmentDTO
            };
            rowData.alertIcon = undefined;
            rowData.alertMessage = undefined;
            rowData.isLoading = true;
            this.woFormService.woAssetManagementUpdateSuperiorAsset(input).subscribe(function(result) {
              _this.updateJobCardWoAssetManagementRow(rowData, result);
              _this.isLoadingWoAssetManagementTable = false;
            });
          };
          WorkOrderFormComponent.prototype.updateWoAssetEquipment = function(rowData) {
            var _this = this;
            var input = {
              bidmWorkOrderDTOId: this.bidmWorkOrderId,
              woAssetManagementDTO: rowData,
              woAssetManagementDTOs: this.allWoAssetManagements.filter(function(woAssetManagement) {
                return woAssetManagement !== rowData._obj;
              }),
              selectedBidoEquipmentDTO: rowData.selectedBidoEquipmentDTO
            };
            rowData.alertIcon = undefined;
            rowData.alertMessage = undefined;
            rowData.isLoading = true;
            this.woFormService.woAssetManagementUpdateSelectedEquipment(input).subscribe(function(result) {
              _this.updateJobCardWoAssetManagementRow(rowData, result);
              _this.isLoadingWoAssetManagementTable = false;
            });
          };
          WorkOrderFormComponent.prototype.updateWoAssetItem = function(rowData) {
            var _this = this;
            var input = {
              bidmWorkOrderDTOId: this.bidmWorkOrderId,
              woAssetManagementDTO: rowData,
              woAssetManagementDTOs: this.allWoAssetManagements.filter(function(woAssetManagement) {
                return woAssetManagement !== rowData._obj;
              }),
              selectedBireItemDTO: rowData.selectedBireItemDTO,
              selectedFunctionCode: rowData.selectedFunctionCode
            };
            rowData.alertIcon = undefined;
            rowData.alertMessage = undefined;
            rowData.isLoading = true;
            this.woFormService.woAssetManagementUpdateItemOrFunctionCode(input).subscribe(function(result) {
              _this.updateJobCardWoAssetManagementRow(rowData, result);
              _this.isLoadingWoAssetManagementTable = false;
            });
          };
          WorkOrderFormComponent.prototype.updateWoAssetPn = function(rowData) {
            var _this = this;
            var input = {
              bidmWorkOrderDTOId: this.bidmWorkOrderId,
              woAssetManagementDTO: rowData,
              woAssetManagementDTOs: this.allWoAssetManagements.filter(function(woAssetManagement) {
                return woAssetManagement !== rowData._obj;
              }),
              selectedPnCode: rowData.selectedPn
            };
            rowData.alertIcon = undefined;
            rowData.alertMessage = undefined;
            rowData.isLoading = true;
            this.woFormService.woAssetManagementUpdatePn(input).subscribe(function(result) {
              _this.updateJobCardWoAssetManagementRow(rowData, result);
              _this.isLoadingWoAssetManagementTable = false;
            });
          };
          WorkOrderFormComponent.prototype.updateWoAssetWarehouse = function(rowData) {
            var _this = this;
            var input = {
              bidmWorkOrderDTOId: this.bidmWorkOrderId,
              woAssetManagementDTO: rowData,
              woAssetManagementDTOs: this.allWoAssetManagements.filter(function(woAssetManagement) {
                return woAssetManagement !== rowData._obj;
              }),
              selectedWarehouseId: rowData.selectedWarehouseId
            };
            rowData.alertIcon = undefined;
            rowData.alertMessage = undefined;
            rowData.isLoading = true;
            this.woFormService.woAssetManagementUpdateSelectedWarehouse(input).subscribe(function(result) {
              _this.updateJobCardWoAssetManagementRow(rowData, result);
              _this.isLoadingWoAssetManagementTable = false;
            });
          };
          WorkOrderFormComponent.prototype.controlWoAsset = function(rowData) {
            var _this = this;
            var input = {
              bidmWorkOrderDTOId: this.bidmWorkOrderId,
              woAssetManagementDTO: rowData,
              woAssetManagementDTOs: this.allWoAssetManagements.filter(function(woAssetManagement) {
                return woAssetManagement !== rowData._obj;
              }),
              decision: rowData.notificationType
            };
            rowData.alertIcon = undefined;
            rowData.alertMessage = undefined;
            rowData.isLoading = true;
            this.woFormService.woAssetManagementControl(input).subscribe(function(result) {
              _this.updateJobCardWoAssetManagementRow(rowData, result);
            });
          };
          WorkOrderFormComponent.prototype.executeSelectedDecision = function() {
            var _this = this;
            var input = {
              bidmWorkOrderDTOId: this.bidmWorkOrderId,
              woAssetManagementDTOs: this.selectedWoAssetManagements
            };
            this.isExecutingWoAssetManagementDecision = true;
            this.woFormService.woAssetManagementExecuteDecisions(input).subscribe(function() {
              _this.initWoAssetMangement();
              _this.isExecutingWoAssetManagementDecision = false;
            });
          };
          WorkOrderFormComponent.prototype.undoSelectedDecision = function() {
            var _this = this;
            var input = {
              bidmWorkOrderDTOId: this.bidmWorkOrderId,
              woAssetManagementDTOs: this.selectedWoAssetManagements
            };
            this.isUndoingWoAssetManagementDecision = true;
            this.woFormService.woAssetManagementUndoDecisions(input).subscribe(function() {
              _this.initWoAssetMangement();
              _this.isUndoingWoAssetManagementDecision = false;
            });
          };
          WorkOrderFormComponent.prototype.woAssetManagementReadyToExecute = function() {
            var _this = this;
            var allReadyElements = [];
            var allAreReady = true;
            this.selectedWoAssetManagements.forEach(function(woAssetManagement) {
              if (_this.woAssetManagementIsReady(woAssetManagement)) {
                allReadyElements.push(woAssetManagement);
              } else {
                allAreReady = false;
              }
            });
            this.woAssetManagementReadyToExecuteDecision = !(allReadyElements.length > 0 && allAreReady);
          };
          WorkOrderFormComponent.prototype.saveWoAssetManagement = function() {
            var _this = this;
            this.isSavingWoAssetManagementTable = true;
            var input = {
              bidmWorkOrderDTOId: this.bidmWorkOrderId,
              woAssetManagementDTOs: this.woAssetManagementTable.length > 0 ? this.woAssetManagementTable : undefined
            };
            this.woFormService.woAssetManagementSave(input).subscribe(function(result) {
              _this.initWoAssetMangement();
              _this.isSavingWoAssetManagementTable = false;
            });
          };
          WorkOrderFormComponent.prototype.woAssetManagementIsReady = function(rowData) {
            if (
              !!rowData.bidoNotificationDTO ||
              !rowData.notificationDate ||
              !rowData.selectedPn ||
              !rowData.selectedBidoEquipmentDTO ||
              !rowData.selectedStatus
            ) {
              return false;
            }
            if (rowData.alertIcon === this.controlConfigConstants.ICON_RED_LIGHT_CODE) {
              return false;
            }
            return true;
          };
          WorkOrderFormComponent.prototype.openUrl = function(url) {
            _shared_utils_url_utils__WEBPACK_IMPORTED_MODULE_40__['UrlUtils'].openUrl(url);
          };
          WorkOrderFormComponent.prototype.validateUrl = function(url) {
            return _shared_utils_url_utils__WEBPACK_IMPORTED_MODULE_40__['UrlUtils'].validateUrl(url);
          };
          WorkOrderFormComponent.prototype.openStatusUpdatesPopup = function() {
            this.selectedOperation = this.selectedOperations[0];
            var bidmOperationId = {
              woId: this.selectedOperation.woId,
              projectId: this.selectedOperation.projectId,
              bireOpeCode: this.selectedOperation.bireOpeCode,
              bireOpeVersion: this.selectedOperation.bireOpeVersion
            };
            this.showOperationUpdatesPopup = true;
            var columns = [
              {
                field: 'timestamp',
                width: '200px',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_18__['TableColumnFilterMode']
                    .Input,
                isDate: true,
                alignment: 'left'
              },
              {
                field: 'opeStatus',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_18__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opeComment',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_18__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opeCheckedBy',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_18__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opeCheckedOn',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_18__['TableColumnFilterMode']
                    .Input,
                isDateWithHour: true
              },
              {
                field: 'opePerformedBy',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_18__['TableColumnFilterMode']
                    .Input
              },
              {
                field: 'opePerformedOn',
                alignment: 'left',
                width: '6.25rem',
                filterMode:
                  _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_18__['TableColumnFilterMode']
                    .Input,
                isDateWithHour: true
              }
            ];
            this.updatesKeyMap.set(
              'opeStatus',
              this.propertiesService.getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_16__['GenericPropertyConstants']
                  .AIRM_OPERATION_STATUS_MAP
              )
            );
            this.updatesKeyMap.set('opeCheckedBy', this.woFormService.findUsers());
            this.updatesKeyMap.set('opePerformedBy', this.woFormService.findUsers());
            this.tableOperationUpdatesData = {
              componentId: 'OperationComponent.historicPopup',
              tableCols: columns,
              tableRows: this.woFormService.findHBidmOperation(bidmOperationId),
              dataKey: undefined,
              selectionMode:
                _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_19__['TableSelectionMode'].Multiple,
              globalFilter: false
            };
          };
          /**
           * This method is to check the visibility of Print Id Label button
           * 1. The selected line should be removal only
           * 2. The selected line should be executed (has bidoNotifactionDTO)
           */
          WorkOrderFormComponent.prototype.showPrintIdLabelButton = function() {
            if (
              !!this.selectedWoAssetManagements &&
              this.selectedWoAssetManagements.length === 1 &&
              !!this.selectedWoAssetManagements[0]._obj &&
              this.selectedWoAssetManagements[0]._obj.notificationType ===
                _shared_constants_bido_notification_type_constants__WEBPACK_IMPORTED_MODULE_13__[
                  'BidoNotificationTypeConstants'
                ].DISASSEMBLY_TYPE_CODE &&
              !!this.selectedWoAssetManagements[0]._obj.bidoNotificationDTO
            ) {
              return true;
            }
            return false;
          };
          WorkOrderFormComponent.prototype.openTransferOrder = function(transferOrder) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_14__['ComponentConstants']
                  .LOG_TRANSFER_ORDER_FORM,
              objectId: this.serializationService.serialize(transferOrder.id),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_17__['ComponentOpenMode'].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          WorkOrderFormComponent.prototype.initWoUserList = function() {
            var _this = this;
            var param = {
              useCaseCode:
                _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_12__[
                  'BidoFunctionTypeConstants'
                ].UC_AIRM_EXECUTION
            };
            if (!!this.bireTask) {
              param.taskCode = this.bireTask.taskCode;
              param.taskVersion = this.bireTask.taskVersion;
            }
            param.projectId = this.workOrder.projectId;
            param.startDate = this.workOrder.woScheduledStartDate;
            this.woFormService.findUsersWithUseCaseForWorkOrder(param).subscribe(function(data) {
              _this.woUserList = data.map(function(user) {
                return {
                  label: user.lastname + ' ' + user.firstname,
                  value: user.userId
                };
              });
            });
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('mainAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            WorkOrderFormComponent.prototype,
            'mainAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('workPackageAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            WorkOrderFormComponent.prototype,
            'workPackageAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('progressAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            WorkOrderFormComponent.prototype,
            'workOrderProgressAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('generalAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            WorkOrderFormComponent.prototype,
            'generalAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('operationsAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            WorkOrderFormComponent.prototype,
            'operationsAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('commentAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            WorkOrderFormComponent.prototype,
            'commentAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('additionalWorkAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            WorkOrderFormComponent.prototype,
            'additionalWorkAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('taskDocumentsAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            WorkOrderFormComponent.prototype,
            'taskDocumentsAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('woDocumentsAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            WorkOrderFormComponent.prototype,
            'woDocumentsAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('defectsAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            WorkOrderFormComponent.prototype,
            'defectsAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('requestManagmentAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            WorkOrderFormComponent.prototype,
            'requestManagmentAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('installRemoveAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            WorkOrderFormComponent.prototype,
            'installRemoveAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('procurementRequestsTable'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            WorkOrderFormComponent.prototype,
            'procurementRequestTableAnchor',
            void 0
          );
          WorkOrderFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-work-order',
                template: __webpack_require__(
                  /*! ./work-order-form.component.html */ './src/app/main/maintenance/work-order/form/work-order-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./work-order-form.component.scss */ './src/app/main/maintenance/work-order/form/work-order-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_23__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_24__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_25__['MessageService'],
                _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_7__['PageTocService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_27__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_29__['TabService'],
                _logistics_logistics_service__WEBPACK_IMPORTED_MODULE_43__['LogisticsService'],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__['DomSanitizer'],
                _human_resources_employee_form_employee_form_service__WEBPACK_IMPORTED_MODULE_42__[
                  'EmployeeFormService'
                ],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_28__['SessionService'],
                _work_order_form_service__WEBPACK_IMPORTED_MODULE_48__['WorkOrderFormService'],
                _work_package_form_work_package_form_service__WEBPACK_IMPORTED_MODULE_46__['WorkPackageFormService'],
                _shared_services_dassault_field_service__WEBPACK_IMPORTED_MODULE_21__['DavFieldService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_22__['DateService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_20__['ConfirmationService'],
                _procurement_request_procurement_requests_table_service__WEBPACK_IMPORTED_MODULE_45__[
                  'ProcurementRequestsTableService'
                ],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_26__['PropertiesService'],
                _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_44__['OverlayService']
              ])
            ],
            WorkOrderFormComponent
          );
          return WorkOrderFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_30__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/work-order/work-order.module.ts':
      /*!******************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/work-order.module.ts ***!
  \******************************************************************/
      /*! exports provided: WorkOrderModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'WorkOrderModule', function() {
          return WorkOrderModule;
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
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/overlaypanel */ './node_modules/primeng/overlaypanel.js'
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6__
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
        /* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! primeng/splitbutton */ './node_modules/primeng/splitbutton.js'
        );
        /* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__
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
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! primeng/treetable */ './node_modules/primeng/treetable.js'
        );
        /* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_treetable__WEBPACK_IMPORTED_MODULE_12__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ './src/app/shared/components/component-sidebar/component-sidebar.mdule.ts'
        );
        /* harmony import */ var _shared_components_create_event_form_create_event_form_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/components/create-event-form/create-event-form.module */ './src/app/shared/components/create-event-form/create-event-form.module.ts'
        );
        /* harmony import */ var _shared_components_defect_list_defect_list_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../shared/components/defect-list/defect-list.module */ './src/app/shared/components/defect-list/defect-list.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_equipment_list_dialog_equipment_list_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../shared/components/dialog-equipment-list/dialog-equipment-list.module */ './src/app/shared/components/dialog-equipment-list/dialog-equipment-list.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_equipment_dialog_search_equipment_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-equipment/dialog-search-equipment.module */ './src/app/shared/components/dialog-search-equipment/dialog-search-equipment.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-pn/dialog-search-pn.module */ './src/app/shared/components/dialog-search-pn/dialog-search-pn.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_update_logbook_dialog_update_logbook_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../shared/components/dialog-update-logbook/dialog-update-logbook.component */ './src/app/shared/components/dialog-update-logbook/dialog-update-logbook.component.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_status_update_history_status_update_history_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../shared/components/status-update-history/status-update-history.module */ './src/app/shared/components/status-update-history/status-update-history.module.ts'
        );
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _human_resources_employee_form_employee_form_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ../../human-resources/employee-form/employee-form.service */ './src/app/main/human-resources/employee-form/employee-form.service.ts'
        );
        /* harmony import */ var _logistics_procurement_request_search_procurement_request_popup_procurement_request_popup_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ../../logistics/procurement-request/search/procurement-request-popup/procurement-request-popup.module */ './src/app/main/logistics/procurement-request/search/procurement-request-popup/procurement-request-popup.module.ts'
        );
        /* harmony import */ var _procurement_request_procurement_requests_table_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ../procurement-request/procurement-requests-table.module */ './src/app/main/maintenance/procurement-request/procurement-requests-table.module.ts'
        );
        /* harmony import */ var _work_package_form_popups_dialog_work_order_edition_dialog_work_order_edition_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ../work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.module */ './src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.module.ts'
        );
        /* harmony import */ var _work_package_form_work_package_form_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ../work-package/form/work-package-form.service */ './src/app/main/maintenance/work-package/form/work-package-form.service.ts'
        );
        /* harmony import */ var _work_package_work_package_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ../work-package/work-package.service */ './src/app/main/maintenance/work-package/work-package.service.ts'
        );
        /* harmony import */ var _form_popups_dialog_edit_duration_dialog_edit_duration_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./form/popups/dialog-edit-duration/dialog-edit-duration.component */ './src/app/main/maintenance/work-order/form/popups/dialog-edit-duration/dialog-edit-duration.component.ts'
        );
        /* harmony import */ var _form_popups_dialog_import_work_order_document_dialog_import_work_order_document_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ./form/popups/dialog-import-work-order-document/dialog-import-work-order-document.component */ './src/app/main/maintenance/work-order/form/popups/dialog-import-work-order-document/dialog-import-work-order-document.component.ts'
        );
        /* harmony import */ var _form_popups_dialog_job_card_time_tracking_entries_dialog_job_card_time_tracking_entries_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! ./form/popups/dialog-job-card-time-tracking-entries/dialog-job-card-time-tracking-entries.component */ './src/app/main/maintenance/work-order/form/popups/dialog-job-card-time-tracking-entries/dialog-job-card-time-tracking-entries.component.ts'
        );
        /* harmony import */ var _form_popups_dialog_operation_check_dialog_operation_check_form_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
          /*! ./form/popups/dialog-operation-check/dialog-operation-check-form.component */ './src/app/main/maintenance/work-order/form/popups/dialog-operation-check/dialog-operation-check-form.component.ts'
        );
        /* harmony import */ var _form_popups_dialog_postponement_dialog_postponement_form_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
          /*! ./form/popups/dialog-postponement/dialog-postponement-form.component */ './src/app/main/maintenance/work-order/form/popups/dialog-postponement/dialog-postponement-form.component.ts'
        );
        /* harmony import */ var _form_popups_dialog_stakeholder_dialog_stakeholder_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
          /*! ./form/popups/dialog-stakeholder/dialog-stakeholder.component */ './src/app/main/maintenance/work-order/form/popups/dialog-stakeholder/dialog-stakeholder.component.ts'
        );
        /* harmony import */ var _form_popups_last_update_wo_last_update_popup_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
          /*! ./form/popups/last-update/wo-last-update-popup.module */ './src/app/main/maintenance/work-order/form/popups/last-update/wo-last-update-popup.module.ts'
        );
        /* harmony import */ var _form_work_order_form_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
          /*! ./form/work-order-form.component */ './src/app/main/maintenance/work-order/form/work-order-form.component.ts'
        );
        /* harmony import */ var _form_work_order_form_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
          /*! ./form/work-order-form.service */ './src/app/main/maintenance/work-order/form/work-order-form.service.ts'
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

        var EXTERNAL_MODULES = [
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__['TooltipModule'],
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__['DropdownModule'],
          primeng_chart__WEBPACK_IMPORTED_MODULE_2__['ChartModule'],
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__['CheckboxModule'],
          _shared_components_dialog_equipment_list_dialog_equipment_list_module__WEBPACK_IMPORTED_MODULE_19__[
            'DialogEquipmentListModule'
          ],
          primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__['ProgressBarModule'],
          primeng_treetable__WEBPACK_IMPORTED_MODULE_12__['TreeTableModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__['SelectButtonModule'],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_23__['ModalModule'],
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6__['OverlayPanelModule'],
          _shared_components_dialog_search_equipment_dialog_search_equipment_module__WEBPACK_IMPORTED_MODULE_20__[
            'DialogSearchEquipmentModule'
          ],
          primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__['SplitButtonModule'],
          _work_package_form_popups_dialog_work_order_edition_dialog_work_order_edition_module__WEBPACK_IMPORTED_MODULE_30__[
            'DialogWorkOrderEditionModule'
          ],
          primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__['FileUploadModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_10__['TableModule']
        ];
        var INTERNAL_MODULES = [
          _procurement_request_procurement_requests_table_module__WEBPACK_IMPORTED_MODULE_29__[
            'ProcurementRequestsTableModule'
          ],
          _shared_components_defect_list_defect_list_module__WEBPACK_IMPORTED_MODULE_18__['DefectListModule'],
          _shared_components_create_event_form_create_event_form_module__WEBPACK_IMPORTED_MODULE_17__[
            'CreateEventFormModule'
          ],
          _shared_components_dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_21__[
            'DialogSearchPnModule'
          ],
          _logistics_procurement_request_search_procurement_request_popup_procurement_request_popup_module__WEBPACK_IMPORTED_MODULE_28__[
            'ProcurementRequestPopupModule'
          ],
          _form_popups_last_update_wo_last_update_popup_module__WEBPACK_IMPORTED_MODULE_39__['WOLastUpdatePopupModule'],
          _shared_components_status_update_history_status_update_history_module__WEBPACK_IMPORTED_MODULE_24__[
            'StatusUpdateHistoryModule'
          ]
        ];
        var API = [];
        var DYNAMIC_COMPONENTS = [
          _form_work_order_form_component__WEBPACK_IMPORTED_MODULE_40__['WorkOrderFormComponent'],
          _form_popups_dialog_postponement_dialog_postponement_form_component__WEBPACK_IMPORTED_MODULE_37__[
            'DialogPostponementFormComponent'
          ],
          _form_popups_dialog_job_card_time_tracking_entries_dialog_job_card_time_tracking_entries_component__WEBPACK_IMPORTED_MODULE_35__[
            'DialogJobCardTimeTrackingEntriesComponent'
          ],
          _form_popups_dialog_edit_duration_dialog_edit_duration_component__WEBPACK_IMPORTED_MODULE_33__[
            'DialogEditDurationComponent'
          ],
          _form_popups_dialog_import_work_order_document_dialog_import_work_order_document_component__WEBPACK_IMPORTED_MODULE_34__[
            'DialogImportWorkOrderDocumentComponent'
          ],
          _form_popups_dialog_operation_check_dialog_operation_check_form_component__WEBPACK_IMPORTED_MODULE_36__[
            'DialogOperationCheckFormComponent'
          ],
          _form_popups_dialog_stakeholder_dialog_stakeholder_component__WEBPACK_IMPORTED_MODULE_38__[
            'DialogStakeholderComponent'
          ],
          _shared_components_dialog_update_logbook_dialog_update_logbook_component__WEBPACK_IMPORTED_MODULE_22__[
            'DialogUpdateLogbookComponent'
          ]
        ];
        var SERVICES = [
          _form_work_order_form_service__WEBPACK_IMPORTED_MODULE_41__['WorkOrderFormService'],
          _work_package_form_work_package_form_service__WEBPACK_IMPORTED_MODULE_31__['WorkPackageFormService'],
          _work_package_work_package_service__WEBPACK_IMPORTED_MODULE_32__['WorkPackageService'],
          _human_resources_employee_form_employee_form_service__WEBPACK_IMPORTED_MODULE_27__['EmployeeFormService']
        ];
        var WorkOrderModule = /** @class */ (function() {
          function WorkOrderModule() {}
          WorkOrderModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: DYNAMIC_COMPONENTS,
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_13__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_14__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_15__['AppCommonSharedModule'],
                    _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_16__[
                      'ComponentSidebarModule'
                    ],
                    _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_25__['TableModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_26__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(API, SERVICES)
              })
            ],
            WorkOrderModule
          );
          return WorkOrderModule;
        })();

        /***/
      },

    /***/ './src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service.ts':
      /*!**************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service.ts ***!
  \**************************************************************************************************************************/
      /*! exports provided: DialogWorkOrderEditService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogWorkOrderEditService',
          function() {
            return DialogWorkOrderEditService;
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
        /* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../../shared/api/aircraft-maintenance.api */ './src/app/shared/api/aircraft-maintenance.api.ts'
        );
        /* harmony import */ var _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../../shared/api/airworthiness-management.api */ './src/app/shared/api/airworthiness-management.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../../shared/api/task-management.api */ './src/app/shared/api/task-management.api.ts'
        );
        /* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../../shared/api/user-profile-management.api */ './src/app/shared/api/user-profile-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./../../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
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

        var DialogWorkOrderEditService = /** @class */ (function(_super) {
          __extends(DialogWorkOrderEditService, _super);
          function DialogWorkOrderEditService(
            http,
            appConfigService,
            aircraftMaintenanceApi,
            airworthinessManagementApi,
            taskManagementApi,
            bidtWarehouseApi,
            fleetManagementApi,
            userProfileManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
            _this.airworthinessManagementApi = airworthinessManagementApi;
            _this.taskManagementApi = taskManagementApi;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.userProfileManagementApi = userProfileManagementApi;
            return _this;
          }
          /**************************************************************************
           * Fleet management api
           *************************************************************************/
          DialogWorkOrderEditService.prototype.findBidoCustomer = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoCustomer, input);
          };
          DialogWorkOrderEditService.prototype.createOrUpdateBidmWorkOrder = function(bidmWorkOrder) {
            return _super.prototype.post.call(
              this,
              this.aircraftMaintenanceApi.createOrUpdateBidmWorkOrder,
              bidmWorkOrder
            );
          };
          DialogWorkOrderEditService.prototype.findRelatedItemsFromTask = function(bireTaskDTOId) {
            return _super.prototype.post.call(this, this.taskManagementApi.findRelatedItemsFromTask, bireTaskDTOId);
          };
          DialogWorkOrderEditService.prototype.findRelatedItemsFromEvolution = function(bireEvolutionDTO) {
            return _super.prototype.post.call(
              this,
              this.taskManagementApi.findRelatedItemsFromEvolution,
              bireEvolutionDTO
            );
          };
          DialogWorkOrderEditService.prototype.findRelatedAssets = function(findRelatedAssetsInput) {
            return _super.prototype.post.call(this, this.taskManagementApi.findRelatedAssets, findRelatedAssetsInput);
          };
          DialogWorkOrderEditService.prototype.findOperationsFromTaskAndRelatedTasks = function(bireTaskDTOId) {
            return _super.prototype.post.call(
              this,
              this.taskManagementApi.findOperationsFromTaskAndRelatedTasks,
              bireTaskDTOId
            );
          };
          DialogWorkOrderEditService.prototype.findOperationsFromEvolution = function(bireEvolutionDTO) {
            return _super.prototype.post.call(
              this,
              this.taskManagementApi.findOperationsFromEvolution,
              bireEvolutionDTO
            );
          };
          DialogWorkOrderEditService.prototype.findWorkOrder = function(input) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.findBidmWorkOrder, input);
          };
          DialogWorkOrderEditService.prototype.findBidmWorkOrder = function(bidmWorkOrderDTOId) {
            return _super.prototype.post.call(
              this,
              this.aircraftMaintenanceApi.findBidmWorkOrderData,
              bidmWorkOrderDTOId
            );
          };
          DialogWorkOrderEditService.prototype.calculateWorkOrderStatus = function(input) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.calculateWorkOrderStatus, input);
          };
          DialogWorkOrderEditService.prototype.findWorkOrderOriginDetails = function(input) {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.findWorkOrderOriginDetails, input);
          };
          DialogWorkOrderEditService.prototype.findBidmOperationsByWorkOrder = function(input) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.findBidmOperationsByWorkOrder, input);
          };
          DialogWorkOrderEditService.prototype.loadWarehouseList = function(input) {
            if (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__['StringUtils'].isNullOrEmpty(input)) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['of'])([]);
            } else {
              return _super.prototype.post.call(this, this.bidtWarehouseApi.findByMandantAndSiteCode, input);
            }
          };
          DialogWorkOrderEditService.prototype.loadWareHouses = function() {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findAll);
          };
          DialogWorkOrderEditService.prototype.findUsersWithUseCaseForWorkOrder = function(input) {
            return _super.prototype.post.call(
              this,
              this.userProfileManagementApi.findUsersWithUseCaseForWorkOrder,
              input
            );
          };
          DialogWorkOrderEditService.prototype.findBireOperationPnsByOperation = function(p) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBireOperationPnsByOperation, p);
          };
          DialogWorkOrderEditService.prototype.findBirePn = function(input) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBirePn, input);
          };
          DialogWorkOrderEditService.prototype.initalizeWoProcurementRequestInput = function(input) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.initializeProcurementRequest, input);
          };
          DialogWorkOrderEditService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__['AppConfigService'],
                _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__['AircraftMaintenanceApi'],
                _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_4__['AirworthinessManagementApi'],
                _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_7__['TaskManagementApi'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_5__['BidtWarehouseApi'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__['FleetManagementApi'],
                _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_8__['UserProfileManagementApi']
              ])
            ],
            DialogWorkOrderEditService
          );
          return DialogWorkOrderEditService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__['AbstractAwHttpService']);

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

    /***/ './src/app/shared/components/dialog-update-logbook/dialog-update-logbook.component.ts':
      /*!********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-update-logbook/dialog-update-logbook.component.ts ***!
  \********************************************************************************************/
      /*! exports provided: DialogUpdateLogbookComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogUpdateLogbookComponent',
          function() {
            return DialogUpdateLogbookComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../utils/bido-equipment-utils */ './src/app/shared/utils/bido-equipment-utils.ts'
        );
        /* harmony import */ var _table_table_data_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
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

        var DialogUpdateLogbookComponent = /** @class */ (function(_super) {
          __extends(DialogUpdateLogbookComponent, _super);
          function DialogUpdateLogbookComponent(sessionService) {
            var _this =
              _super.call(
                this,
                _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'DialogUpdateLogbookComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.init();
            return _this;
          }
          DialogUpdateLogbookComponent.prototype.isValid = function() {
            return true;
          };
          DialogUpdateLogbookComponent.prototype.ngOnInit = function() {
            this.initializeLogBookEvolutionTableRows();
          };
          DialogUpdateLogbookComponent.prototype.validate = function() {
            this.onValidated.emit(this.updateLogbookFromWorkOrderInput);
            this.closeDialog();
          };
          DialogUpdateLogbookComponent.prototype.initializeLogBookEvolutionTableRows = function() {
            var _this = this;
            if (this.updateLogbookFromWorkOrderInput) {
              this.woCode = this.updateLogbookFromWorkOrderInput.bidmWorkOrderDTO.woCode;
              if (this.updateLogbookFromWorkOrderInput.woEvolutionInputList) {
                this.updateLogbookFromWorkOrderInput.woEvolutionInputList.forEach(function(input) {
                  var row = __assign({}, input, {
                    asset: _utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_4__['BidoEquipmentUtils'].toString(
                      input.workOrderEvolutionDTO.woRelatedAsset
                    ),
                    availablePnList: input.potentialNewPnList.map(function(newPn) {
                      return { label: newPn, value: newPn };
                    }),
                    evolution:
                      input.workOrderEvolutionDTO.evolutionNumber +
                      '-' +
                      input.workOrderEvolutionDTO.evolutionRevisionNumber
                  });
                  if (row.potentialNewPnList && row.potentialNewPnList.length === 1) {
                    row.workOrderEvolutionDTO.newPnCodeSelected = row.potentialNewPnList[0];
                  }
                  _this.logbookEvolutionTableRows.push(row);
                });
              }
            }
          };
          DialogUpdateLogbookComponent.prototype.init = function() {
            this.woCode = undefined;
            this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.logbookEvolutionTableRows = [];
            this.evolutionColumns = [
              {
                field: 'evolution',
                alignment: _table_table_data_source__WEBPACK_IMPORTED_MODULE_5__['ColumnAlignment'].LEFT,
                width: '33%'
              },
              {
                field: 'asset',
                alignment: _table_table_data_source__WEBPACK_IMPORTED_MODULE_5__['ColumnAlignment'].LEFT,
                width: '33%'
              },
              {
                field: 'availablePnList',
                alignment: _table_table_data_source__WEBPACK_IMPORTED_MODULE_5__['ColumnAlignment'].LEFT,
                width: '33%'
              }
            ];
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogUpdateLogbookComponent.prototype,
            'updateLogbookFromWorkOrderInput',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogUpdateLogbookComponent.prototype,
            'onValidated',
            void 0
          );
          DialogUpdateLogbookComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-update-logbook',
                template: __webpack_require__(
                  /*! ./dialog-update-logbook.html */ './src/app/shared/components/dialog-update-logbook/dialog-update-logbook.html'
                )
              }),
              __metadata('design:paramtypes', [
                _services_session_service__WEBPACK_IMPORTED_MODULE_2__['SessionService']
              ])
            ],
            DialogUpdateLogbookComponent
          );
          return DialogUpdateLogbookComponent;
        })(_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-update-logbook/dialog-update-logbook.html':
      /*!************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-update-logbook/dialog-update-logbook.html ***!
  \************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }} {{woCode}}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="grid-cell-content">\r\n      <p-table\r\n        [resizableColumns]="true"\r\n        #ptableImportReports\r\n        class="aw-table2"\r\n        [columns]="evolutionColumns"\r\n        [value]="logbookEvolutionTableRows"\r\n        [scrollable]="true"\r\n      >\r\n        <ng-template pTemplate="colgroup" let-columns>\r\n          <colgroup>\r\n            <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n          </colgroup>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate="header" let-columns>\r\n          <tr>\r\n            <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n              {{ getComponentName() + "." + col.field | translate }}\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n          <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n            <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n              <div *ngSwitchCase="\'availablePnList\'">\r\n                <p-dropdown\r\n                  *ngIf="rowData.availablePnList && rowData.availablePnList.length > 0"\r\n                  class="aw-dropdown fixed-width"\r\n                  [options]="rowData.availablePnList"\r\n                  [(ngModel)]="rowData.workOrderEvolutionDTO.newPnCodeSelected"\r\n                  appendTo="body"\r\n                  placeholder="&nbsp;"\r\n                ></p-dropdown>\r\n              </div>\r\n              <div *ngSwitchDefault>\r\n                {{ rowData[col.field] }}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">{{ "global.cancel" | translate }}</button>\r\n\r\n    <button type="button" mat-raised-button color="primary" (click)="validate()" [disabled]="!isValid()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

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

    /***/ './src/app/shared/utils/bidm-document-utils.ts':
      /*!*****************************************************!*\
  !*** ./src/app/shared/utils/bidm-document-utils.ts ***!
  \*****************************************************/
      /*! exports provided: BidmDocumentUtils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'BidmDocumentUtils', function() {
          return BidmDocumentUtils;
        });
        /* harmony import */ var _file_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./file-utils */ './src/app/shared/utils/file-utils.ts'
        );

        var BidmDocumentUtils = /** @class */ (function() {
          function BidmDocumentUtils() {}
          BidmDocumentUtils.areSameDocument = function(obj1, obj2) {
            if (!obj1 || !obj2) {
              return false;
            } else {
              return !!obj1.documentName && !!obj2.documentName && obj1.documentName === obj2.documentName;
            }
          };
          BidmDocumentUtils.formatDocExtension = function(document) {
            return _file_utils__WEBPACK_IMPORTED_MODULE_0__['FileUtils']
              .getExtension(document.documentName)
              .toUpperCase();
          };
          BidmDocumentUtils.typeFile = function(fileName) {
            return _file_utils__WEBPACK_IMPORTED_MODULE_0__['FileUtils'].getExtension(fileName).toUpperCase();
          };
          BidmDocumentUtils.formatDocSize = function(document) {
            return !!document.documentContent
              ? _file_utils__WEBPACK_IMPORTED_MODULE_0__['FileUtils'].getFormattedSize(document.documentContent.length)
              : '';
          };
          return BidmDocumentUtils;
        })();

        /***/
      },

    /***/ './src/app/shared/utils/bidm-work-order-utils.ts':
      /*!*******************************************************!*\
  !*** ./src/app/shared/utils/bidm-work-order-utils.ts ***!
  \*******************************************************/
      /*! exports provided: BidmWorkOrderUtils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'BidmWorkOrderUtils', function() {
          return BidmWorkOrderUtils;
        });
        var BidmWorkOrderUtils = /** @class */ (function() {
          function BidmWorkOrderUtils() {}
          BidmWorkOrderUtils.getTaskCodeFromTaskId = function(task) {
            if (!task) {
              return '';
            }
            return task.split(BidmWorkOrderUtils.TASK_CODE_VERSION_SEP)[0];
          };
          BidmWorkOrderUtils.getTaskVersionFromTaskId = function(task) {
            if (!task) {
              return '';
            }
            return task.split(BidmWorkOrderUtils.TASK_CODE_VERSION_SEP)[1];
          };
          BidmWorkOrderUtils.TASK_CODE_VERSION_SEP = '-';
          return BidmWorkOrderUtils;
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
      }
  }
]);
//# sourceMappingURL=maintenance-work-order-work-order-module.js.map
