(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~administration-business-partner-business-partner-module~administration-contact-contact-modul~f04412b6'],
  {
    /***/ './src/app/shared/components/manage-search-criteria/manage-search-criteria.component.html':
      /*!************************************************************************************************!*\
  !*** ./src/app/shared/components/manage-search-criteria/manage-search-criteria.component.html ***!
  \************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<i\r\n  *ngIf="isAdd()"\r\n  class="fa fa-fw fa-star-o aw-icon aw-icon-with-border search-criteria-action"\r\n  aria-hidden="true"\r\n  pTooltip="{{ \'ManageSearchCriteriaComponent.createContext\' | translate }}"\r\n  tooltipPosition="top"\r\n  [class.disabled]="!canChange"\r\n  (click)="onClickCreateSearchCriteria()"\r\n></i>\r\n<i\r\n  *ngIf="!isAdd()"\r\n  class="fa fa-fw fa-star aw-icon aw-icon-with-border search-criteria-action"\r\n  aria-hidden="true"\r\n  pTooltip="{{ \'ManageSearchCriteriaComponent.updateContext\' | translate }}"\r\n  tooltipPosition="top"\r\n  [class.disabled]="!canChange"\r\n  (click)="onClickUpdateSearchCriteria()"\r\n></i>\r\n<i\r\n  class="fa fa-fw fa-cog aw-icon aw-icon-with-border search-criteria-action"\r\n  aria-hidden="true"\r\n  pTooltip="{{ \'ManageSearchCriteriaComponent.contextTooltip\' | translate }}"\r\n  tooltipPosition="top"\r\n  [class.disabled]="!canChange"\r\n  (click)="onClickOpenSearchCriteria()"\r\n></i>\r\n<i\r\n  class="fa fa-fw fa-undo aw-icon aw-icon-with-border search-criteria-action"\r\n  aria-hidden="true"\r\n  pTooltip="{{ \'global.reset\' | translate }}"\r\n  tooltipPosition="top"\r\n  [class.disabled]="!canChange"\r\n  (click)="onClickResetSearchCriteria()"\r\n></i>\r\n\r\n<!-- Form modal -->\r\n<a-modal class="aw-modal" *ngIf="showAddOrUpdateCriteria" [(visible)]="showAddOrUpdateCriteria">\r\n  <a-header>\r\n    <div class="modal-title fixed-size-modal">{{ "ManageSearchCriteriaComponent.modalTitle" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="fixed-size-modal">\r\n      <div class="search-dialog-container">\r\n        <div class="row">\r\n          <div class="form-group">\r\n            <label class="form-label">{{ "global.name" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <input type="text" class="aw-input" [(ngModel)]="name" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label class="form-label">{{ "global.public" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-checkbox class="aw-checkbox" binary="true" [(ngModel)]="isPublic"></p-checkbox>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="cancelContext()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button type="button" mat-raised-button color="primary" (click)="onClickValidAddOrUpdateCriteria()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<!-- Table modal -->\r\n<a-modal class="aw-modal" *ngIf="showSearchCriteriaModal" [(visible)]="showSearchCriteriaModal">\r\n  <a-header>\r\n    <div class="modal-title fixed-size-modal">{{ "ManageSearchCriteriaComponent.modalTitle" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="fixed-size-modal">\r\n      <p-table\r\n        [resizableColumns]="true"\r\n        class="aw-table2"\r\n        [value]="searchCriteriaList"\r\n        selectionMode="single"\r\n        [(selection)]="selectedSearchCriteriaFromTable"\r\n      >\r\n        <ng-template pTemplate="caption">\r\n          <div class="aw-table-header">\r\n            <div class="aw-table-global-filter"></div>\r\n\r\n            <div class="aw-table-actions">\r\n              <button\r\n                *ngIf="hasManageAccessRight && visibility.showDelete()"\r\n                type="button"\r\n                mat-raised-button\r\n                color="warn"\r\n                (click)="onClickDeleteContext()"\r\n              >\r\n                {{ "global.delete" | translate }}\r\n              </button>\r\n\r\n              <button *ngIf="visibility.showUpdate()" type="button" mat-raised-button (click)="onClickUpdateContext()">\r\n                {{ "global.update" | translate }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate="header">\r\n          <tr>\r\n            <th>{{ "global.name" | translate }}</th>\r\n            <th>{{ "global.public" | translate }}</th>\r\n            <th>{{ "global.default" | translate }}</th>\r\n          </tr>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate="body" let-rowData>\r\n          <tr [pSelectableRow]="rowData">\r\n            <td>{{ rowData.description }}</td>\r\n            <td class="col-center">\r\n              <p-checkbox class="aw-checkbox" binary="true" [(ngModel)]="rowData.public" [disabled]="true"></p-checkbox>\r\n            </td>\r\n            <td class="col-center">\r\n              <i *ngIf="rowData.favorite" class="fa fa-fw fa-star aw-icon" (click)="onClickUnsetFavorite(rowData)"></i>\r\n              <i *ngIf="!rowData.favorite" class="fa fa-fw fa-star-o aw-icon" (click)="onClickSetFavorite(rowData)"></i>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="showSearchCriteriaModal = false">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="onClickSelectSearchCriteria()"\r\n      [disabled]="!enable.selectSearchCriteria()"\r\n    >\r\n      {{ "global.select" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/manage-search-criteria/manage-search-criteria.component.scss':
      /*!************************************************************************************************!*\
  !*** ./src/app/shared/components/manage-search-criteria/manage-search-criteria.component.scss ***!
  \************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host {\n  display: flex; }\n  :host .fixed-size-modal {\n    min-width: 30rem;\n    max-width: 30rem; }\n  :host .col-center {\n    text-align: center;\n    vertical-align: middle; }\n  :host .col-center .aw-checkbox {\n      margin-top: 0 !important; }\n  :host .disabled {\n    visibility: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWFuYWdlLXNlYXJjaC1jcml0ZXJpYS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxtYW5hZ2Utc2VhcmNoLWNyaXRlcmlhXFxtYW5hZ2Utc2VhcmNoLWNyaXRlcmlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYSxFQUFBO0VBRGY7SUFLSSxnQkFGaUI7SUFHakIsZ0JBSGlCLEVBQUE7RUFIckI7SUFVSSxrQkFBa0I7SUFDbEIsc0JBQXNCLEVBQUE7RUFYMUI7TUFjTSx3QkFBd0IsRUFBQTtFQWQ5QjtJQW1CSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21hbmFnZS1zZWFyY2gtY3JpdGVyaWEvbWFuYWdlLXNlYXJjaC1jcml0ZXJpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAkbW9kYWwtd2lkdGg6IDMwcmVtO1xyXG4gIC5maXhlZC1zaXplLW1vZGFsIHtcclxuICAgIG1pbi13aWR0aDogJG1vZGFsLXdpZHRoO1xyXG4gICAgbWF4LXdpZHRoOiAkbW9kYWwtd2lkdGg7XHJcbiAgfVxyXG5cclxuICAuY29sLWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICAgIC5hdy1jaGVja2JveCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kaXNhYmxlZCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/shared/components/manage-search-criteria/manage-search-criteria.component.ts':
      /*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/manage-search-criteria/manage-search-criteria.component.ts ***!
  \**********************************************************************************************/
      /*! exports provided: ManageSearchCriteriaComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ManageSearchCriteriaComponent',
          function() {
            return ManageSearchCriteriaComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _services_confirmation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _services_search_critieria_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../services/search-critieria.service */ './src/app/shared/services/search-critieria.service.ts'
        );
        /* harmony import */ var _utils_object_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../utils/object-utils */ './src/app/shared/utils/object-utils.ts'
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

        var ManageSearchCriteriaComponent = /** @class */ (function() {
          function ManageSearchCriteriaComponent(
            searchCriteriaService,
            confirmationService,
            translateService,
            messageService
          ) {
            var _this = this;
            this.searchCriteriaService = searchCriteriaService;
            this.confirmationService = confirmationService;
            this.translateService = translateService;
            this.messageService = messageService;
            this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.onSavedAsked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            // manage visibility
            this.visibility = {
              showDelete: function() {
                return _utils_object_utils__WEBPACK_IMPORTED_MODULE_5__['ObjectUtils'].isDefined(
                  _this.selectedSearchCriteriaFromTable
                );
              },
              showUpdate: function() {
                return _utils_object_utils__WEBPACK_IMPORTED_MODULE_5__['ObjectUtils'].isDefined(
                  _this.selectedSearchCriteriaFromTable
                );
              }
            };
            // manage enabled / disabled inputs
            this.enable = {
              selectSearchCriteria: function() {
                return _utils_object_utils__WEBPACK_IMPORTED_MODULE_5__['ObjectUtils'].isDefined(
                  _this.selectedSearchCriteriaFromTable
                );
              }
            };
            if (this.canChange === undefined) {
              this.canChange = true;
            }
          }
          Object.defineProperty(ManageSearchCriteriaComponent.prototype, 'objectFromPage', {
            get: function() {
              return this._objectFromPage || {};
            },
            set: function(anObject) {
              this._objectFromPage = anObject;
              if (this.isAdd()) {
                this.showAddOrUpdateCriteria = true;
              } else {
                this.updateSearchCriteria();
              }
            },
            enumerable: true,
            configurable: true
          });
          ManageSearchCriteriaComponent.prototype.onClickCreateSearchCriteria = function() {
            if (!this.canChange) {
              return;
            }
            this.name = '';
            this.isPublic = false;
            this.getSearchCriteriaFromPage();
          };
          ManageSearchCriteriaComponent.prototype.onClickUpdateSearchCriteria = function() {
            if (!this.canChange) {
              return;
            }
            if (!this.isAllowedToUpdate(this.selectedSearchCriteria)) {
              this.messageService.showWarningMessage('ManageSearchCriteriaComponent.contextCreatedByAnotherUser');
              return;
            }
            this.getSearchCriteriaFromPage();
          };
          ManageSearchCriteriaComponent.prototype.onClickOpenSearchCriteria = function() {
            if (!this.canChange) {
              return;
            }
            this.getSearchCriteriaList(false);
            this.selectedSearchCriteriaFromTable = undefined;
            this.showSearchCriteriaModal = true;
          };
          ManageSearchCriteriaComponent.prototype.onClickValidAddOrUpdateCriteria = function() {
            if (this.isAdd() && !this.selectedSearchCriteriaFromTable) {
              this.createSearchCriteria();
            } else {
              this.updateSearchCriteriaName();
            }
          };
          ManageSearchCriteriaComponent.prototype.onClickSelectSearchCriteria = function() {
            this.loadSearchCriteria();
            this.showSearchCriteriaModal = false;
          };
          ManageSearchCriteriaComponent.prototype.onClickResetSearchCriteria = function() {
            if (!this.canChange) {
              return;
            }
            this.selectedSearchCriteria = undefined;
            this.selectedSearchCriteriaFromTable = undefined;
            this.loadSearchCriteria();
          };
          ManageSearchCriteriaComponent.prototype.onClickDeleteContext = function() {
            if (!this.isAllowedToUpdate(this.selectedSearchCriteriaFromTable)) {
              this.messageService.showWarningMessage('ManageSearchCriteriaComponent.contextCreatedByAnotherUser');
              return;
            }
            this.deleteSearchCriteria();
          };
          ManageSearchCriteriaComponent.prototype.onClickUpdateContext = function() {
            if (!this.isAllowedToUpdate(this.selectedSearchCriteriaFromTable)) {
              this.messageService.showWarningMessage('ManageSearchCriteriaComponent.contextCreatedByAnotherUser');
              return;
            }
            if (this.selectedSearchCriteriaFromTable) {
              this.name = this.selectedSearchCriteriaFromTable.description;
              this.isPublic = this.selectedSearchCriteriaFromTable.public;
              this.showAddOrUpdateCriteria = true;
            }
          };
          ManageSearchCriteriaComponent.prototype.onClickSetFavorite = function(searchCriteria) {
            this.searchCriteriaList.forEach(function(element) {
              element.favorite = element.contextId === searchCriteria.contextId;
            });
            searchCriteria.preferenceId = this.componentId;
            this.searchCriteriaService.setAsFavorite(searchCriteria).subscribe();
          };
          ManageSearchCriteriaComponent.prototype.onClickUnsetFavorite = function(searchCriteria) {
            this.searchCriteriaList.forEach(function(element) {
              if (element.contextId === searchCriteria.contextId) {
                element.favorite = false;
              }
            });
            searchCriteria.preferenceId = this.componentId;
            this.searchCriteriaService.removeAsFavorite(searchCriteria).subscribe();
          };
          ManageSearchCriteriaComponent.prototype.ngOnInit = function() {
            this.initData();
            this.init();
          };
          ManageSearchCriteriaComponent.prototype.init = function() {
            this.getSearchCriteriaList(true);
          };
          ManageSearchCriteriaComponent.prototype.initData = function() {
            this.showSearchCriteriaModal = false;
            this.showAddOrUpdateCriteria = false;
            this.selectedSearchCriteria = undefined;
            this.searchCriteriaList = [];
            this.name = '';
            this.isPublic = false;
          };
          ManageSearchCriteriaComponent.prototype.getSelectedSearchCriteriaName = function() {
            if (!this.selectedSearchCriteria) {
              return '';
            } else {
              return this.selectedSearchCriteria.description ? this.selectedSearchCriteria.description : '';
            }
          };
          ManageSearchCriteriaComponent.prototype.validForm = function() {
            var _this = this;
            var toReturn = true;
            var msg = '';
            if (
              !_utils_object_utils__WEBPACK_IMPORTED_MODULE_5__['ObjectUtils'].isDefined(this.name) ||
              this.name === ''
            ) {
              msg = 'ManageSearchCriteriaComponent.enterName';
              toReturn = false;
            } else {
              this.searchCriteriaList.forEach(function(context) {
                if (_this.selectedSearchCriteriaFromTable) {
                  // it's an update
                  if (
                    _this.selectedSearchCriteriaFromTable.contextId !== context.contextId &&
                    _this.name === context.description
                  ) {
                    msg = 'ManageSearchCriteriaComponent.nameAlreadyExists';
                    toReturn = false;
                  }
                } else {
                  // it's an add
                  if (_this.name === context.description) {
                    msg = 'ManageSearchCriteriaComponent.nameAlreadyExists';
                    toReturn = false;
                  }
                }
              });
            }
            if (msg !== '') {
              this.messageService.showWarningMessage(msg);
            }
            return toReturn;
          };
          ManageSearchCriteriaComponent.prototype.getSearchCriteriaList = function(load) {
            var _this = this;
            this.searchCriteriaList = [];
            this.searchCriteriaService.listContext(this.componentId).subscribe(function(data) {
              _this.searchCriteriaList = __spread(_this.searchCriteriaList, data);
              _this.searchCriteriaList.forEach(function(criteria) {
                if (criteria.favorite && criteria.favorite === true && load) {
                  _this.selectedSearchCriteriaFromTable = criteria;
                  _this.loadSearchCriteria();
                }
              });
            });
          };
          ManageSearchCriteriaComponent.prototype.isAllowedToUpdate = function(searchCriteria) {
            return searchCriteria !== undefined && searchCriteria.creator !== undefined && searchCriteria.creator;
          };
          ManageSearchCriteriaComponent.prototype.deleteSearchCriteria = function() {
            var _this = this;
            var confirmMessageKey = 'ManageSearchCriteriaComponent.confirmDeleteContext';
            this.confirmationService.confirmDelete({
              messageKey: this.translateService.instant(confirmMessageKey),
              accept: function() {
                if (_this.selectedSearchCriteriaFromTable && _this.selectedSearchCriteriaFromTable.contextId) {
                  _this.searchCriteriaService
                    .deleteContext(_this.selectedSearchCriteriaFromTable)
                    .subscribe(function(data) {
                      if (data) {
                        _this.messageService.showSuccessMessage(
                          'ManageSearchCriteriaComponent.contextDeletedSuccessfully'
                        );
                        if (_this.selectedSearchCriteria && _this.selectedSearchCriteriaFromTable) {
                          if (
                            _this.selectedSearchCriteria.contextId === _this.selectedSearchCriteriaFromTable.contextId
                          ) {
                            _this.selectedSearchCriteria = undefined;
                          }
                        }
                        _this.selectedSearchCriteriaFromTable = undefined;
                        _this.getSearchCriteriaList(false);
                      }
                    });
                }
              }
            });
          };
          ManageSearchCriteriaComponent.prototype.getSearchCriteriaFromPage = function() {
            this.onSavedAsked.emit();
          };
          ManageSearchCriteriaComponent.prototype.updateSearchCriteriaName = function() {
            var _this = this;
            if (!this.validForm()) {
              return;
            }
            if (!this.selectedSearchCriteriaFromTable) {
              return;
            }
            var param = {
              preferenceId: this.componentId,
              description: this.name,
              contextId: this.selectedSearchCriteriaFromTable.contextId,
              values: this.selectedSearchCriteriaFromTable.values,
              public: this.isPublic
            };
            this.searchCriteriaService.saveContext(param).subscribe(function(data) {
              _this.messageService.showSuccessMessage('ManageSearchCriteriaComponent.contextSavedSucessfully');
              _this.searchCriteriaList.forEach(function(element, index) {
                if (element.contextId === data.contextId) {
                  _this.searchCriteriaList[index] = data;
                  _this.searchCriteriaList = __spread(_this.searchCriteriaList);
                  _this.selectedSearchCriteriaFromTable = _this.searchCriteriaList[index];
                  if (_this.selectedSearchCriteria && _this.selectedSearchCriteriaFromTable) {
                    if (_this.selectedSearchCriteria.contextId === _this.selectedSearchCriteriaFromTable.contextId) {
                      _this.selectedSearchCriteria = _this.selectedSearchCriteriaFromTable;
                    }
                  }
                }
              });
              _this.showAddOrUpdateCriteria = false;
            });
          };
          ManageSearchCriteriaComponent.prototype.updateSearchCriteria = function() {
            var _this = this;
            if (!this.selectedSearchCriteria) {
              return;
            }
            var param = {
              preferenceId: this.componentId,
              description: this.selectedSearchCriteria.description,
              contextId: this.selectedSearchCriteria.contextId,
              values: JSON.stringify(this._objectFromPage),
              public: this.selectedSearchCriteria.public
            };
            this.searchCriteriaService.saveContext(param).subscribe(function(data) {
              _this.messageService.showSuccessMessage('ManageSearchCriteriaComponent.contextSavedSucessfully');
              _this.onSelected.emit({ name: data.description, criteria: _this.getCriteriaFromDto(data) });
            });
          };
          ManageSearchCriteriaComponent.prototype.createSearchCriteria = function() {
            var _this = this;
            if (!this.validForm()) {
              return;
            }
            var param = {
              preferenceId: this.componentId,
              description: this.name,
              contextId: undefined,
              values: JSON.stringify(this._objectFromPage),
              public: this.isPublic
            };
            this.searchCriteriaService.saveContext(param).subscribe(function(data) {
              _this.messageService.showSuccessMessage('ManageSearchCriteriaComponent.contextSavedSucessfully');
              _this.searchCriteriaList.push(data);
              _this.searchCriteriaList = __spread(_this.searchCriteriaList);
              _this.selectedSearchCriteria = data;
              _this.onSelected.emit({ name: data.description, criteria: _this.getCriteriaFromDto(data) });
              _this.showAddOrUpdateCriteria = false;
            });
          };
          ManageSearchCriteriaComponent.prototype.getCriteriaFromDto = function(searchCriteria) {
            return searchCriteria && searchCriteria.values ? JSON.parse(searchCriteria.values) : undefined;
          };
          ManageSearchCriteriaComponent.prototype.loadSearchCriteria = function() {
            if (this.selectedSearchCriteriaFromTable && this.selectedSearchCriteriaFromTable.values) {
              var criteria = this.getCriteriaFromDto(this.selectedSearchCriteriaFromTable);
              this.handleDates(criteria);
              this.selectedSearchCriteria = this.selectedSearchCriteriaFromTable;
              this.onSelected.emit({ name: this.selectedSearchCriteriaFromTable.description, criteria: criteria });
            } else {
              this.selectedSearchCriteria = undefined;
              this.onSelected.emit({ name: undefined, criteria: undefined });
            }
          };
          ManageSearchCriteriaComponent.prototype.cancelContext = function() {
            this.showAddOrUpdateCriteria = false;
            var param = {
              preferenceId: this.componentId,
              description: this.name,
              contextId: undefined,
              values: JSON.stringify(this.objectFromPage),
              public: this.isPublic
            };
            this.onSelected.emit({ name: undefined, criteria: this.getCriteriaFromDto(param) });
          };
          ManageSearchCriteriaComponent.prototype.isAdd = function() {
            return !this.selectedSearchCriteria;
          };
          ManageSearchCriteriaComponent.prototype.handleDates = function(object) {
            var _this = this;
            if (object instanceof Array) {
              object.forEach(function(element) {
                return _this.handleDates(element);
              });
            } else if (object instanceof Object) {
              Object.getOwnPropertyNames(object).forEach(function(property) {
                if (object[property] instanceof Array) {
                  object[property].forEach(function(element) {
                    return _this.handleDates(element);
                  });
                } else if (object[property] instanceof Object) {
                  _this.handleDates(object[property]);
                } else if (object[property] instanceof String || typeof object[property] === 'string') {
                  if (!!object[property] && _this.isMatchingDatePattern(object[property])) {
                    object[property] = new Date(object[property]);
                  }
                }
              });
            }
          };
          ManageSearchCriteriaComponent.prototype.isMatchingDatePattern = function(value) {
            return /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)$/.test(value);
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            ManageSearchCriteriaComponent.prototype,
            'objectFromPage',
            null
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            ManageSearchCriteriaComponent.prototype,
            'componentId',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            ManageSearchCriteriaComponent.prototype,
            'canChange',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(), __metadata('design:type', Object)],
            ManageSearchCriteriaComponent.prototype,
            'onSelected',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(), __metadata('design:type', Object)],
            ManageSearchCriteriaComponent.prototype,
            'onSavedAsked',
            void 0
          );
          ManageSearchCriteriaComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-manage-search-criteria',
                template: __webpack_require__(
                  /*! ./manage-search-criteria.component.html */ './src/app/shared/components/manage-search-criteria/manage-search-criteria.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./manage-search-criteria.component.scss */ './src/app/shared/components/manage-search-criteria/manage-search-criteria.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _services_search_critieria_service__WEBPACK_IMPORTED_MODULE_4__['SearchCriteriaService'],
                _services_confirmation_service__WEBPACK_IMPORTED_MODULE_2__['ConfirmationService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _services_message_service__WEBPACK_IMPORTED_MODULE_3__['MessageService']
              ])
            ],
            ManageSearchCriteriaComponent
          );
          return ManageSearchCriteriaComponent;
        })();

        /***/
      },

    /***/ './src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts':
      /*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts ***!
  \*******************************************************************************************/
      /*! exports provided: ManageSearchCriteriaModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ManageSearchCriteriaModule',
          function() {
            return ManageSearchCriteriaModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! primeng/checkbox */ './node_modules/primeng/checkbox.js'
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_1__
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
        /* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _manage_search_criteria_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./manage-search-criteria.component */ './src/app/shared/components/manage-search-criteria/manage-search-criteria.component.ts'
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
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_1__['CheckboxModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__['DropdownModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__['TooltipModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_3__['TableModule']
        ];
        var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_8__['ModalModule']];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _manage_search_criteria_component__WEBPACK_IMPORTED_MODULE_9__['ManageSearchCriteriaComponent']
        ];
        var ManageSearchCriteriaModule = /** @class */ (function() {
          function ManageSearchCriteriaModule() {}
          ManageSearchCriteriaModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS),
                exports: __spread(COMPONENTS),
                imports: __spread(
                  [
                    _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_5__['AngularCommonSharedModule'],
                    _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_6__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _app_common_shared_module__WEBPACK_IMPORTED_MODULE_7__['AppCommonSharedModule']
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                )
              })
            ],
            ManageSearchCriteriaModule
          );
          return ManageSearchCriteriaModule;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=default~administration-business-partner-business-partner-module~administration-contact-contact-modul~f04412b6.js.map
