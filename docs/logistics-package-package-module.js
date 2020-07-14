(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['logistics-package-package-module'],
  {
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

    /***/ './node_modules/primeng/selectbutton.js':
      /*!**********************************************!*\
  !*** ./node_modules/primeng/selectbutton.js ***!
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
            /*! ./components/selectbutton/selectbutton */ './node_modules/primeng/components/selectbutton/selectbutton.js'
          )
        );

        /***/
      },

    /***/ './src/app/main/logistics/package/form/package-form.component.html':
      /*!*************************************************************************!*\
  !*** ./src/app/main/logistics/package/form/package-form.component.html ***!
  \*************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n\r\n        <i\r\n          class="fa fa-fw fa-info aw-icon aw-icon-with-border"\r\n          aria-hidden="true"\r\n          pTooltip="{{ \'page.info\' | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle">\r\n        PK4000918\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-primary-actions">\r\n    <button type="button" mat-raised-button>\r\n      {{ getComponentName() + ".createLitigation" | translate }}\r\n    </button>\r\n    <button type="button" mat-raised-button>\r\n      {{ "global.refresh" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <!-- MAIN INFO PANEL -->\r\n        <div #mainInfoAnchor class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ "page.mainData" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content  grid-cell-content-with-section">\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <!-- ROW 1 -->\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".number" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input class="aw-input" type="text" disabled [(ngModel)]="mainInfo.number" />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".type" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input class="aw-input" type="text" disabled [(ngModel)]="mainInfo.type" />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".weight" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input class="aw-input" type="text" disabled [(ngModel)]="mainInfo.weight" />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".volume" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input class="aw-input" type="text" disabled [(ngModel)]="mainInfo.volume" />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".modeOfTransport" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input class="aw-input" type="text" disabled [(ngModel)]="mainInfo.modeOfTransport" />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".status" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input class="aw-input" type="text" disabled [(ngModel)]="mainInfo.status" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class="section">\r\n                <h4 class="section-title">{{ componentData.componentId + ".recepient" | translate }}</h4>\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".site" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input class="aw-input" type="text" disabled [(ngModel)]="mainInfo.site" />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".wareHouse" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input class="aw-input" type="text" disabled [(ngModel)]="mainInfo.wareHouse" />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".shippedDate" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <p-calendar\r\n                          showButtonBar="true"\r\n                          [monthNavigator]="true"\r\n                          [yearNavigator]="true"\r\n                          [yearRange]="sessionService.calendarYearRange"\r\n                          class="aw-calendar"\r\n                          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                          [locale]="sessionService.calendarFormat"\r\n                          appendTo="body"\r\n                          [(ngModel)]="mainInfo.shippedDate"\r\n                          disabled\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".receiptDate" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <p-calendar\r\n                          showButtonBar="true"\r\n                          [monthNavigator]="true"\r\n                          [yearNavigator]="true"\r\n                          [yearRange]="sessionService.calendarYearRange"\r\n                          class="aw-calendar"\r\n                          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                          [locale]="sessionService.calendarFormat"\r\n                          appendTo="body"\r\n                          [(ngModel)]="mainInfo.receiptDate"\r\n                          disabled\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group"></div>\r\n                    <div class="form-group"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class="section">\r\n                <h4 class="section-title">{{ getComponentName() + ".receiptFolder" | translate }}</h4>\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".reference" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input class="aw-input" type="text" disabled [(ngModel)]="mainInfo.reference" />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".receiptType" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input class="aw-input" type="text" disabled [(ngModel)]="mainInfo.receiptType" />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".folderStatus" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input class="aw-input" type="text" disabled [(ngModel)]="mainInfo.folderStatus" />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".criticity" | translate }}</label>\r\n\r\n                      <div class="form-control critcity-span">\r\n                        <span class="critictiy-alert package--warning">\r\n                          {{ mainInfo.criticity }}\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group"></div>\r\n                    <div class="form-group"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".items" | translate }} ({{ itemTable ? itemTable.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                [resizableColumns]="true"\r\n                #ptableResult\r\n                class="aw-table2"\r\n                [columns]="itemTableCols"\r\n                [value]="itemTable"\r\n                [(selection)]="selectedItems"\r\n                [scrollable]="true"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n                  <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedItems.length > 0 }">\r\n                    <div class="aw-table-global-filter">\r\n                      <label class="aw-table-global-filter-label">\r\n                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableEquipmentGlobalFilter\r\n                        class="aw-table-global-filter-input"\r\n                        type="text"\r\n                        placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                        (input)="ptableResult.filterGlobal($event.target.value, \'contains\')"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class="aw-table-actions">\r\n                      <div class="aw-table-icon-actions">\r\n                        <i\r\n                          class="fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n                          aria-hidden="true"\r\n                          tooltipPosition="top"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col class="aw-table-checkbox-wrapper" />\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th class="aw-table-checkbox-wrapper">\r\n                      <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ componentData.componentId + "." + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td class="aw-table-checkbox-wrapper">\r\n                      <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      <span *ngSwitchCase="\'criticity\'">\r\n                        <span *ngIf="rowData.criticity === \'Immediate\'" class="package-alert package--nok">\r\n                          {{ rowData[col.field] }}\r\n                        </span>\r\n                        <span *ngIf="rowData.criticity === \'Urgent\'" class=" package-alert package--warning">\r\n                          {{ rowData[col.field] }}\r\n                        </span>\r\n                        <span *ngIf="rowData.criticity === \'Routline\'" class=" package-alert package--ok">\r\n                          {{ rowData[col.field] }}\r\n                        </span>\r\n                      </span>\r\n                      <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".documents" | translate }} ({{ documentTable ? documentTable.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                [resizableColumns]="true"\r\n                #ptableResult\r\n                class="aw-table2"\r\n                [columns]="documentTableCols"\r\n                [value]="documentTable"\r\n                [(selection)]="selectedDocuments"\r\n                [scrollable]="true"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n                  <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedDocuments.length > 0 }">\r\n                    <div class="aw-table-global-filter">\r\n                      <label class="aw-table-global-filter-label">\r\n                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableEquipmentGlobalFilter\r\n                        class="aw-table-global-filter-input"\r\n                        type="text"\r\n                        placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                        (input)="ptableResult.filterGlobal($event.target.value, \'contains\')"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col class="aw-table-checkbox-wrapper" />\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th class="aw-table-checkbox-wrapper">\r\n                      <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ componentData.componentId + "." + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td class="aw-table-checkbox-wrapper">\r\n                      <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/package/form/package-form.component.scss':
      /*!*************************************************************************!*\
  !*** ./src/app/main/logistics/package/form/package-form.component.scss ***!
  \*************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .critictiy-alert {\n  font-weight: 400;\n  text-align: center;\n  width: 100%; }\n\n:host .package--nok {\n  background-color: #f6685e; }\n\n:host .package--ok {\n  background-color: #4caf50; }\n\n:host .package--warning {\n  background-color: #ffc107; }\n\n:host .critcity-span {\n  padding: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvcGFja2FnZS9mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxsb2dpc3RpY3NcXHBhY2thZ2VcXGZvcm1cXHBhY2thZ2UtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvcGFja2FnZS9mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFKZjtFQVFJLHlCQ2VnQixFQUFBOztBRHZCcEI7RUFZSSx5QkNRa0IsRUFBQTs7QURwQnRCO0VBZ0JJLHlCQ0tZLEVBQUE7O0FEckJoQjtFQW1CSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9wYWNrYWdlL2Zvcm0vcGFja2FnZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG46aG9zdCB7XHJcbiAgLmNyaXRpY3RpeS1hbGVydCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucGFja2FnZS0tbm9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gIH1cclxuXHJcbiAgLnBhY2thZ2UtLW9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgfVxyXG5cclxuICAucGFja2FnZS0td2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gIH1cclxuICAuY3JpdGNpdHktc3BhbiB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/logistics/package/form/package-form.component.ts':
      /*!***********************************************************************!*\
  !*** ./src/app/main/logistics/package/form/package-form.component.ts ***!
  \***********************************************************************/
      /*! exports provided: PackageFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'PackageFormComponent', function() {
          return PackageFormComponent;
        });
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
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _package_form_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./package-form.service */ './src/app/main/logistics/package/form/package-form.service.ts'
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

        var PackageFormComponent = /** @class */ (function(_super) {
          __extends(PackageFormComponent, _super);
          function PackageFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            packageFormService
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
            _this.sessionService = sessionService;
            _this.packageFormService = packageFormService;
            _this.mainInfo = {};
            _this.loadTableCols();
            return _this;
          }
          PackageFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
              .LOG_PACKAGE_FORM_COMPONENT;
          };
          PackageFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.loadMainInformation();
            this.loadItems();
            this.loadDocuments();
          };
          PackageFormComponent.prototype.loadTableCols = function() {
            this.itemTableCols = [
              { field: 'article', alignment: 'left' },
              { field: 'designation', alignment: 'left' },
              { field: 'snLot', alignment: 'left' },
              { field: 'operationalStatus', alignment: 'left' },
              { field: 'quantity', alignment: 'left' },
              { field: 'shippingFile', alignment: 'left' },
              { field: 'receiptType', alignment: 'left' },
              { field: 'criticity', alignment: 'left' }
            ];
            this.documentTableCols = [
              { field: 'name', alignment: 'left' },
              { field: 'comment', alignment: 'left' },
              { field: 'type', alignment: 'left' },
              { field: 'extension', alignment: 'left' },
              { field: 'cut', alignment: 'left' },
              { field: 'expectedShipmentDate', alignment: 'left' }
            ];
          };
          PackageFormComponent.prototype.loadMainInformation = function() {
            this.mainInfo = {
              number: 'PK400918',
              type: 'Palette',
              weight: '21 kg',
              volume: '8 L',
              modeOfTransport: 'Routier',
              status: 'Attente Prise en Charge',
              site: 'BA113 - Mont-de-Marsan',
              wareHouse: 'Magash General',
              shippedDate: new Date('12/12/2019'),
              receiptDate: new Date('12/13/2019'),
              reference: 'RF8548515',
              receiptType: 'Retour de Reparation',
              folderStatus: 'Planifie',
              criticity: 'Urgent'
            };
          };
          PackageFormComponent.prototype.loadItems = function() {
            this.itemTable = [];
            this.selectedItems = [];
            this.itemTable = this.packageFormService.getItems();
          };
          PackageFormComponent.prototype.loadDocuments = function() {
            this.documentTable = [];
            this.selectedDocuments = [];
            this.documentTable = [];
          };
          PackageFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-package-form',
                template: __webpack_require__(
                  /*! ./package-form.component.html */ './src/app/main/logistics/package/form/package-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./package-form.component.scss */ './src/app/main/logistics/package/form/package-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_8__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__['SessionService'],
                _package_form_service__WEBPACK_IMPORTED_MODULE_10__['PackageFormService']
              ])
            ],
            PackageFormComponent
          );
          return PackageFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_9__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/package/form/package-form.service.ts':
      /*!*********************************************************************!*\
  !*** ./src/app/main/logistics/package/form/package-form.service.ts ***!
  \*********************************************************************/
      /*! exports provided: PackageFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'PackageFormService', function() {
          return PackageFormService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

        var PackageFormService = /** @class */ (function(_super) {
          __extends(PackageFormService, _super);
          function PackageFormService(http, appConfigService) {
            return _super.call(this, http, appConfigService) || this;
          }
          PackageFormService.prototype.getItems = function() {
            return [
              {
                article: 'AB789-101',
                designation: '### DESIGNATION DU P/N ###',
                snLot: '101278-01',
                operationalStatus: 'Bon Etat',
                quantity: 1,
                shippingFile: 'SF4034987',
                receiptType: 'Retour de Reparation',
                criticity: 'Urgent'
              },
              {
                article: 'PK4000432',
                designation: '### DESIGNATION DU P/N ###',
                snLot: '101278-01',
                operationalStatus: 'A Controler',
                quantity: 1,
                shippingFile: 'SF4034987',
                receiptType: 'Retour de Reparation',
                criticity: 'Routline'
              }
            ];
          };
          PackageFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__['AppConfigService']
              ])
            ],
            PackageFormService
          );
          return PackageFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_2__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/logistics/package/package.module.ts':
      /*!**********************************************************!*\
  !*** ./src/app/main/logistics/package/package.module.ts ***!
  \**********************************************************/
      /*! exports provided: PackageModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'PackageModule', function() {
          return PackageModule;
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
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/inputswitch */ './node_modules/primeng/inputswitch.js'
        );
        /* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_inputswitch__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ './src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _form_package_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./form/package-form.component */ './src/app/main/logistics/package/form/package-form.component.ts'
        );
        /* harmony import */ var _form_package_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./form/package-form.service */ './src/app/main/logistics/package/form/package-form.service.ts'
        );
        /* harmony import */ var _search_package_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./search/package-search.component */ './src/app/main/logistics/package/search/package-search.component.ts'
        );
        /* harmony import */ var _search_package_search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./search/package-search.service */ './src/app/main/logistics/package/search/package-search.service.ts'
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
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__['TooltipModule'],
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__['DropdownModule'],
          primeng_inputswitch__WEBPACK_IMPORTED_MODULE_3__['InputSwitchModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_4__['SelectButtonModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_5__['TableModule']
        ];
        var INTERNAL_MODULES = [];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [];
        var DYNAMIC_COMPONENTS = [
          _form_package_form_component__WEBPACK_IMPORTED_MODULE_12__['PackageFormComponent'],
          _search_package_search_component__WEBPACK_IMPORTED_MODULE_14__['PackageSearchComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _form_package_form_service__WEBPACK_IMPORTED_MODULE_13__['PackageFormService'],
          _search_package_search_service__WEBPACK_IMPORTED_MODULE_15__['PackageSearchService']
        ];
        var PackageModule = /** @class */ (function() {
          function PackageModule() {}
          PackageModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_7__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_8__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_9__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_11__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS),
                    _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_10__[
                      'ManageSearchCriteriaModule'
                    ]
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            PackageModule
          );
          return PackageModule;
        })();

        /***/
      },

    /***/ './src/app/main/logistics/package/search/package-search.component.html':
      /*!*****************************************************************************!*\
  !*** ./src/app/main/logistics/package/search/package-search.component.html ***!
  \*****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n\r\n        <i\r\n          class="fa fa-fw fa-info aw-icon aw-icon-with-border"\r\n          aria-hidden="true"\r\n          pTooltip="{{ \'page.info\' | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle">{{ "page.searchPage" | translate }}</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-primary-actions"><!-- Remove enclosing tag if empty --></div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row" *ngIf="!hideSearchCriteria">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="column">\r\n                <!-- TODO -->\r\n                <!-- <div class="row search-criteria-header">\r\n                  <aw-manage-search-criteria></aw-manage-search-criteria>\r\n                </div> -->\r\n\r\n                <div class="section">\r\n                  <h4 class="section-title">{{ componentData.componentId + ".package" | translate }}</h4>\r\n\r\n                  <div class="section-content">\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ componentData.componentId + ".criticity" | translate }}</label>\r\n                        <div class="form-control aw-selectbutton-wrapper">\r\n                          <p-selectButton [options]="types" [(ngModel)]="selectedType"></p-selectButton>\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ componentData.componentId + ".reference" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" class="aw-input" />\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ componentData.componentId + ".type" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width"\r\n                            placeholder="&nbsp;"\r\n                            [showClear]="true"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ componentData.componentId + ".status" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width"\r\n                            placeholder="&nbsp;"\r\n                            [showClear]="true"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ componentData.componentId + ".shippedDate" | translate }}</label>\r\n\r\n                        <div class="form-control group-control">\r\n                          <div class="form-sub-control">\r\n                            <p-selectButton\r\n                              [options]="dateExpeditionList"\r\n                              [(ngModel)]="selectedDateExpedition"\r\n                            ></p-selectButton>\r\n                          </div>\r\n                          <div class="form-sub-control">\r\n                            <p-dropdown\r\n                              class="aw-dropdown fixed-width"\r\n                              placeholder="&nbsp;"\r\n                              [showClear]="true"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group ">\r\n                        <label class="form-label"> {{ componentData.componentId + ".receiptDate" | translate }} </label>\r\n\r\n                        <div class="form-control group-control">\r\n                          <div class="form-sub-control">\r\n                            <p-selectButton\r\n                              [options]="dateReceptionList"\r\n                              [(ngModel)]="selectedDateReception"\r\n                            ></p-selectButton>\r\n                          </div>\r\n                          <div class="form-sub-control">\r\n                            <p-dropdown\r\n                              class="aw-dropdown fixed-width"\r\n                              placeholder="&nbsp;"\r\n                              [showClear]="true"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group"></div>\r\n                      <div class="form-group"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- Post -->\r\n                <div class="section">\r\n                  <h4 class="section-title">{{ componentData.componentId + ".item" | translate }}</h4>\r\n\r\n                  <div class="section-content">\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ componentData.componentId + ".partNumber" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" class="aw-input" />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ componentData.componentId + ".designation" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" class="aw-input" />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ componentData.componentId + ".sn" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" class="aw-input" />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ componentData.componentId + ".batchNumber" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" class="aw-input" />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- Document Attachment -->\r\n                <div class="section">\r\n                  <h4 class="section-title">{{ componentData.componentId + ".attachedDocument" | translate }}</h4>\r\n\r\n                  <div class="section-content">\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".documentType" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width"\r\n                            placeholder="&nbsp;"\r\n                            [showClear]="true"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".documentReferences" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" class="aw-input" />\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group"></div>\r\n                      <div class="form-group"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- ACTION -->\r\n                <div class="section">\r\n                  <div class="section-content">\r\n                    <div class="row search-criteria-footer">\r\n                      <div class="search-actions">\r\n                        <button\r\n                          type="button"\r\n                          mat-raised-button\r\n                          (click)="search()"\r\n                          appKeyPress\r\n                          color="primary"\r\n                          [keyCode]="\'Enter\'"\r\n                          (keyPress)="search()"\r\n                        >\r\n                          {{ "global.toSearch" | translate }}\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row" *ngIf="hideSearchCriteria">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ "global.results" | translate }} ({{ resultsTable ? resultsTable.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                [resizableColumns]="true"\r\n                #ptableResult\r\n                class="aw-table2"\r\n                [columns]="resultTableCols"\r\n                [value]="resultsTable"\r\n                [(selection)]="selectedResults"\r\n                [scrollable]="true"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n                  <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedResults.length > 0 }">\r\n                    <div class="aw-table-global-filter">\r\n                      <label class="aw-table-global-filter-label">\r\n                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableEquipmentGlobalFilter\r\n                        class="aw-table-global-filter-input"\r\n                        type="text"\r\n                        placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                        (input)="ptableResult.filterGlobal($event.target.value, \'contains\')"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class="aw-table-actions">\r\n                      <div class="aw-table-icon-actions">\r\n                        <i\r\n                          class="fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n                          aria-hidden="true"\r\n                          tooltipPosition="top"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col class="aw-table-checkbox-wrapper" />\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th class="aw-table-checkbox-wrapper">\r\n                      <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ componentData.componentId + "." + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td class="aw-table-checkbox-wrapper">\r\n                      <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      <span *ngSwitchCase="\'package\'">\r\n                        <div class="code">\r\n                          <div class="info">\r\n                            <span>\r\n                              <b>\r\n                                <a (click)="openPackageDetails(rowData)"> {{ rowData[col.field] }}</a></b\r\n                              ></span\r\n                            >\r\n                          </div>\r\n                          <div class="info">\r\n                            <span>\r\n                              <i> {{ rowData["description"] }} </i></span\r\n                            >\r\n                          </div>\r\n                        </div>\r\n                      </span>\r\n                      <span *ngSwitchCase="\'receiptFolder\'">\r\n                        <div class="code">\r\n                          <div class="info">\r\n                            <span>\r\n                              <b>\r\n                                <a> {{ rowData[col.field] }}</a></b\r\n                              ></span\r\n                            >\r\n                          </div>\r\n                          <div class="info">\r\n                            <span>\r\n                              <i> {{ rowData["receptionDescription"] }} </i></span\r\n                            >\r\n                          </div>\r\n                        </div>\r\n                      </span>\r\n                      <span *ngSwitchCase="\'situation\'">\r\n                        <span *ngIf="rowData.situation === \'Immediate\'" class="package-alert package--nok">\r\n                          {{ rowData[col.field] }}\r\n                        </span>\r\n                        <span *ngIf="rowData.situation === \'Urgent\'" class=" package-alert package--warning">\r\n                          {{ rowData[col.field] }}\r\n                        </span>\r\n                        <span *ngIf="rowData.situation === \'Routine\'" class=" package-alert package--ok">\r\n                          {{ rowData[col.field] }}\r\n                        </span>\r\n                      </span>\r\n                      <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/package/search/package-search.component.scss':
      /*!*****************************************************************************!*\
  !*** ./src/app/main/logistics/package/search/package-search.component.scss ***!
  \*****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .section-content .search-criteria-footer {\n  justify-content: flex-end; }\n\n:host .group-control {\n  display: flex; }\n\n:host .group-control .form-sub-control {\n    flex-direction: column;\n    width: 100%; }\n\n:host .group-control .form-sub-control > p-selectButton {\n      display: flex;\n      align-items: flex-end;\n      height: 2.5rem; }\n\n:host .code {\n  display: inline-table;\n  width: 100%; }\n\n:host ::ng-deep .info {\n  overflow: hidden;\n  padding-bottom: 0.4em;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n:host .package-alert {\n  font-weight: 600;\n  text-align: center;\n  display: inline-block;\n  width: 50%; }\n\n:host .package--nok {\n  background-color: #f6685e; }\n\n:host .package--ok {\n  background-color: #4caf50; }\n\n:host .package--warning {\n  background-color: #ffc107; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvcGFja2FnZS9zZWFyY2gvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xccGFja2FnZVxcc2VhcmNoXFxwYWNrYWdlLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvcGFja2FnZS9zZWFyY2gvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdNLHlCQUF5QixFQUFBOztBQUgvQjtFQU9JLGFBQWEsRUFBQTs7QUFQakI7SUFTTSxzQkFBc0I7SUFDdEIsV0FBVyxFQUFBOztBQVZqQjtNQVlRLGFBQWE7TUFDYixxQkFBcUI7TUFDckIsY0M0Q29CLEVBQUE7O0FEMUQ1QjtFQW9CSSxxQkFBcUI7RUFDckIsV0FBVyxFQUFBOztBQXJCZjtFQXlCSSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUE1QnZCO0VBZ0NJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFVBQVUsRUFBQTs7QUFuQ2Q7RUF1Q0kseUJDakJnQixFQUFBOztBRHRCcEI7RUEyQ0kseUJDeEJrQixFQUFBOztBRG5CdEI7RUErQ0kseUJDM0JZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9wYWNrYWdlL3NlYXJjaC9wYWNrYWdlLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG46aG9zdCB7XHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICAuc2VhcmNoLWNyaXRlcmlhLWZvb3RlciB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ncm91cC1jb250cm9sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAuZm9ybS1zdWItY29udHJvbCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAmID4gcC1zZWxlY3RCdXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIGhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb2RlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5pbmZvIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40ZW07XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG5cclxuICAucGFja2FnZS1hbGVydCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5wYWNrYWdlLS1ub2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgfVxyXG5cclxuICAucGFja2FnZS0tb2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICB9XHJcblxyXG4gIC5wYWNrYWdlLS13YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/logistics/package/search/package-search.component.ts':
      /*!***************************************************************************!*\
  !*** ./src/app/main/logistics/package/search/package-search.component.ts ***!
  \***************************************************************************/
      /*! exports provided: PackageSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'PackageSearchComponent', function() {
          return PackageSearchComponent;
        });
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
        /* harmony import */ var _package_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./package-search.service */ './src/app/main/logistics/package/search/package-search.service.ts'
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

        var PackageSearchComponent = /** @class */ (function(_super) {
          __extends(PackageSearchComponent, _super);
          function PackageSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            packageSearchService
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
            _this.packageSearchService = packageSearchService;
            _this.hideSearchCriteria = false;
            _this.bindSelectButtons();
            return _this;
          }
          PackageSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
              .LOG_PACKAGE_SEARCH_COMPONENT;
          };
          PackageSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
            this.loadTableCols();
            this.resultsTable = [];
            this.selectedResults = [];
          };
          PackageSearchComponent.prototype.search = function() {
            this.resultsTable = [];
            this.selectedResults = [];
            this.hideSearchCriteria = true;
            this.resultsTable = this.packageSearchService.getPackages();
          };
          PackageSearchComponent.prototype.openPackageDetails = function(rowData) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
                  .LOG_PACKAGE_FORM_COMPONENT,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          PackageSearchComponent.prototype.loadTableCols = function() {
            this.resultTableCols = [
              { field: 'package', alignment: 'left' },
              { field: 'receiptFolder', alignment: 'left' },
              { field: 'status', alignment: 'left' },
              { field: 'shippedDate', alignment: 'left' },
              { field: 'receiptDate', alignment: 'left' },
              { field: 'situation', alignment: 'left' }
            ];
          };
          PackageSearchComponent.prototype.bindSelectButtons = function() {
            this.types = [
              { label: 'Immediate', value: 'Immediate' },
              { label: 'Urgent', value: 'Urgent' },
              { label: 'Routine', value: 'Routine' }
            ];
            this.dateExpeditionList = [
              { label: 'Before', value: 'Before' },
              { label: 'Le', value: 'Le' },
              { label: 'After', value: 'After' }
            ];
            this.dateReceptionList = [
              { label: 'Before', value: 'Before' },
              { label: 'Le', value: 'Le' },
              { label: 'After', value: 'After' }
            ];
            this.selectedType = 'Immediate';
            this.selectedDateExpedition = 'Le';
            this.selectedDateReception = 'Le';
          };
          PackageSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-package-search',
                template: __webpack_require__(
                  /*! ./package-search.component.html */ './src/app/main/logistics/package/search/package-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./package-search.component.scss */ './src/app/main/logistics/package/search/package-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_7__['TabService'],
                _package_search_service__WEBPACK_IMPORTED_MODULE_9__['PackageSearchService']
              ])
            ],
            PackageSearchComponent
          );
          return PackageSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_8__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/package/search/package-search.service.ts':
      /*!*************************************************************************!*\
  !*** ./src/app/main/logistics/package/search/package-search.service.ts ***!
  \*************************************************************************/
      /*! exports provided: PackageSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'PackageSearchService', function() {
          return PackageSearchService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

        var PackageSearchService = /** @class */ (function(_super) {
          __extends(PackageSearchService, _super);
          function PackageSearchService(http, appConfigService) {
            return _super.call(this, http, appConfigService) || this;
          }
          PackageSearchService.prototype.getPackages = function() {
            return [
              {
                package: 'PK4000432',
                description: 'Caisse en Bois',
                receiptFolder: 'RF8541980',
                receptionDescription: 'Lot de Deploiement',
                status: 'Valide',
                shippedDate: '12/12/2019',
                receiptDate: '14/12/2019',
                situation: 'Immediate'
              },
              {
                package: 'PK4000918',
                description: 'Palette',
                receiptFolder: 'RF8548515',
                receptionDescription: 'Retour de Reparation',
                status: 'Attente Prise en Charge',
                shippedDate: '12/12/2019',
                receiptDate: '13/12/2019',
                situation: 'Urgent'
              },
              {
                package: 'PK4000545',
                description: 'Conteneur Specialise',
                receiptFolder: 'RF7763901',
                receptionDescription: 'Reception Material Neuf',
                status: 'En Cours',
                shippedDate: '12/12/2019',
                receiptDate: '21/12/2019',
                situation: 'Routine'
              }
            ];
          };
          PackageSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__['AppConfigService']
              ])
            ],
            PackageSearchService
          );
          return PackageSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_2__['AbstractAwHttpService']);

        /***/
      }
  }
]);
//# sourceMappingURL=logistics-package-package-module.js.map
