(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~human-resources-human-resources-module~human-resources-staff-alert-staff-alert-module'],
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

    /***/ './src/app/main/human-resources/staff-alert/form/staff-alert-form.component.html':
      /*!***************************************************************************************!*\
  !*** ./src/app/main/human-resources/staff-alert/form/staff-alert-form.component.html ***!
  \***************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ "page.searchPage" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button type="button" mat-raised-button (click)="newCalculation()">\r\n      {{ componentData.componentId + ".newCalculation" | translate }}\r\n    </button>\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "page.mainData" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".date" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="dateText"\r\n                        disabled\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".alertThreshold" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        maxlength="10"\r\n                        [(ngModel)]="searchObject.alertThreshold"\r\n                        disabled\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group"></div>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".superiorLastName" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control form-control-with-modal" [ngClass]="{ disabled: true }">\r\n                      <div class="form-control-data">{{ searchObject.superiorLastName }}</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".superiorFirstName" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        maxlength="10"\r\n                        [(ngModel)]="searchObject.superiorFirstName"\r\n                        disabled\r\n                      />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".superiorId" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        maxlength="10"\r\n                        [(ngModel)]="searchObject.superiorNumber"\r\n                        disabled\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div #documentTableAnchor class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ componentData.componentId + ".alertList" | translate }} ({{\r\n                    alertsListTable ? alertsListTable.length : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                [resizableColumns]="true"\r\n                #ptableAlerts\r\n                class="aw-table2"\r\n                [columns]="alertsListTableCols"\r\n                [value]="alertsListTableForDisplay"\r\n                [(selection)]="selectedAlerts"\r\n                [scrollable]="true"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n                  <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header">\r\n                    <div class="aw-table-global-filter">\r\n                      <label class="aw-table-global-filter-label">\r\n                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableAlertsGlobalFilter\r\n                        class="aw-table-global-filter-input"\r\n                        type="text"\r\n                        placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                        (input)="ptableAlerts.filterGlobal($event.target.value, \'contains\')"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class="aw-table-actions">\r\n                      <p-selectButton\r\n                        class="aw-table-btn"\r\n                        [(ngModel)]="selectedFilterAlert"\r\n                        [options]="filterAlertList"\r\n                        (onChange)="onChangeFilterAlert($event)"\r\n                      ></p-selectButton>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ componentData.componentId + "." + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td\r\n                      *ngFor="let col of columns"\r\n                      [ngSwitch]="col.field"\r\n                      [ngStyle]="{ \'text-align\': col.alignment }"\r\n                      [ngClass]="{\r\n                        \'critical-value-dark\':\r\n                          col.field === \'expiryDate\' && rowData.cellDesign === \'CRITICALVALUE_DARK\',\r\n                        \'calendar-yellow\': col.field === \'expiryDate\' && rowData.cellDesign === \'GOODVALUE_DARK\',\r\n                        \'bad-value-dark\': col.field === \'expiryDate\' && rowData.cellDesign === \'BADVALUE_DARK\'\r\n                      }"\r\n                    >\r\n                      <span *ngSwitchCase="\'title\'"\r\n                        ><span title="{{ rowData.title }}">{{ rowData[col.field] }}</span></span\r\n                      >\r\n                      <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/human-resources/staff-alert/form/staff-alert-form.component.scss':
      /*!***************************************************************************************!*\
  !*** ./src/app/main/human-resources/staff-alert/form/staff-alert-form.component.scss ***!
  \***************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .critical-value-dark {\n  background-color: #fba643 !important; }\n\n:host .critical-value-light {\n  background-color: #fecc8e !important; }\n\n:host .calendar-yellow {\n  background-color: #efefb0 !important; }\n\n:host .bad-value-dark {\n  background-color: #ff6758 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9odW1hbi1yZXNvdXJjZXMvc3RhZmYtYWxlcnQvZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX21vZGlmaWVycy5zY3NzIiwic3JjL2FwcC9tYWluL2h1bWFuLXJlc291cmNlcy9zdGFmZi1hbGVydC9mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxodW1hbi1yZXNvdXJjZXNcXHN0YWZmLWFsZXJ0XFxmb3JtXFxzdGFmZi1hbGVydC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5Q0FBaUM7RUFBakMsc0NBQWlDO0VBQWpDLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLG9DQUE0QjtLQUE1QixpQ0FBNEI7TUFBNUIsZ0NBQTRCO1VBQTVCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVcsRUFBQTs7QUFLYjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLHNDQUFzQyxFQUFBOztBQ3pIeEM7RUFFSSxvQ0FBaUQsRUFBQTs7QUFGckQ7RUFNSSxvQ0FBa0QsRUFBQTs7QUFOdEQ7RUFVSSxvQ0FBNkMsRUFBQTs7QUFWakQ7RUFjSSxvQ0FBNEMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vaHVtYW4tcmVzb3VyY2VzL3N0YWZmLWFsZXJ0L2Zvcm0vc3RhZmYtYWxlcnQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LS1mbGV4LWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktLWZsZXgtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlzcGxheS0tbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVpZ2h0LS0xMDAge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1pbi13aWR0aC0tZml0LWNvbnRlbnQge1xyXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvc2l0aW9uLS1yZWxhdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGwteS0tbm9uZSB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LS11bnNlbGVjdGFibGUge1xyXG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52aXNpYmlsaXR5LS1oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtLTEwIHtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTIwIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTMwIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTQwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTUwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTYwIHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTcwIHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTgwIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTkwIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5mbGV4LS0xIHtcclxuICBmbGV4OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0yIHtcclxuICBmbGV4OiAyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0zIHtcclxuICBmbGV4OiAzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS00IHtcclxuICBmbGV4OiA0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS01IHtcclxuICBmbGV4OiA1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS1hdXRvIHtcclxuICBmbGV4OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tY2VudGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tZW5kIHtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1hbGlnbi1zdGFydCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWVuZCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWp1c3RpZnktc3RhcnQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5AaW1wb3J0IFwibW9kaWZpZXJzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLmNyaXRpY2FsLXZhbHVlLWRhcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNyaXRpY2FsLXZhbHVlLWRhcmsgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jcml0aWNhbC12YWx1ZS1saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JpdGljYWwtdmFsdWUtbGlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jYWxlbmRhci15ZWxsb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhbGVuZGFyLXllbGxvdyAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJhZC12YWx1ZS1kYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWQtdmFsdWUtZGFyayAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/human-resources/staff-alert/form/staff-alert-form.component.ts':
      /*!*************************************************************************************!*\
  !*** ./src/app/main/human-resources/staff-alert/form/staff-alert-form.component.ts ***!
  \*************************************************************************************/
      /*! exports provided: StaffAlertFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'StaffAlertFormComponent',
          function() {
            return StaffAlertFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../../node_modules/@ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
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
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _staff_alert_form_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./staff-alert-form.service */ './src/app/main/human-resources/staff-alert/form/staff-alert-form.service.ts'
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

        var FilterAlert;
        (function(FilterAlert) {
          FilterAlert['Medical'] = 'MSG_TXT_MEDICAL';
          FilterAlert['Qualification'] = 'MSG_TXT_QUALIFICATION';
          FilterAlert['License'] = 'MSG_TXT_LICENSE';
          FilterAlert['Reset'] = 'Reset';
        })(FilterAlert || (FilterAlert = {}));
        var StaffAlertFormComponent = /** @class */ (function(_super) {
          __extends(StaffAlertFormComponent, _super);
          function StaffAlertFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            staffAlertFormService,
            dateService,
            translateService
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
            _this.sessionService = sessionService;
            _this.staffAlertFormService = staffAlertFormService;
            _this.dateService = dateService;
            _this.translateService = translateService;
            _this.filterAlert = FilterAlert;
            _this.init();
            _this.setFilterAssetList();
            return _this;
          }
          StaffAlertFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.searchObject =
              this.componentData.objectId && this.serializationService.deserialize(this.componentData.objectId);
            this.dateText = this.dateService.dateToString(this.searchObject.alertDate);
            this.calculate();
          };
          StaffAlertFormComponent.prototype.init = function() {
            this.warehouses = [];
            this.warehouse = '';
            this.alertsListTable = [];
            this.alertsListTableForDisplay = [];
            this.selectedAlerts = [];
            this.highThresholdTooltipText = '';
            this.lowThresholdTooltipText = '';
            this.selectedFilterAlert = FilterAlert.Reset;
            this.setTableCols();
          };
          StaffAlertFormComponent.prototype.setFilterAssetList = function() {
            var _this = this;
            var medicalAlerts = this.getComponentName() + '.medicalAlerts';
            var qualificationAlerts = this.getComponentName() + '.qualificationAlerts';
            var licenseAlerts = this.getComponentName() + '.licenseAlerts';
            var resetKey = this.getComponentName() + '.reset';
            this.translateService
              .get([medicalAlerts, qualificationAlerts, licenseAlerts, resetKey])
              .subscribe(function(results) {
                var medicalAlertsLabel = !!results ? results[medicalAlerts] : 'Medical Alerts';
                var qualificationAlertsLabel = !!results ? results[qualificationAlerts] : 'Qualification Alerts';
                var licenseAlertsLabel = !!results ? results[licenseAlerts] : 'License Alerts';
                var resetLabel = !!results ? results[resetKey] : '';
                _this.filterAlertList = [
                  { label: resetLabel, value: FilterAlert.Reset },
                  { label: medicalAlertsLabel, value: FilterAlert.Medical },
                  { label: qualificationAlertsLabel, value: FilterAlert.Qualification },
                  { label: licenseAlertsLabel, value: FilterAlert.License }
                ];
              });
          };
          StaffAlertFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .HR_STAFF_ALERT_FORM;
          };
          StaffAlertFormComponent.prototype.setTableCols = function() {
            this.alertsListTableCols = [
              { field: 'employeeLastName', alignment: 'left', width: '10%' },
              { field: 'employeeFirstName', alignment: 'left', width: '10%' },
              { field: 'employeeNumber', alignment: 'left', width: '7%' },
              { field: 'superior', alignment: 'left', width: '15%' },
              { field: 'type', alignment: 'left', width: '10%' },
              { field: 'title', alignment: 'left', width: '35%' },
              { field: 'expiryDate', alignment: 'left', width: '13%' }
            ];
          };
          // tslint:disable-next-line:no-any
          StaffAlertFormComponent.prototype.onChangeFilterAlert = function(event) {
            switch (event.value) {
              case 'Reset':
                this.alertsListTableForDisplay = JSON.parse(JSON.stringify(this.alertsListTable));
                break;
              case 'MSG_TXT_MEDICAL':
                this.alertsListTableForDisplay = JSON.parse(JSON.stringify(this.alertsListTable)).filter(function(
                  alert
                ) {
                  return alert._obj && alert._obj.type === 'MSG_TXT_MEDICAL';
                });
                break;
              case 'MSG_TXT_QUALIFICATION':
                this.alertsListTableForDisplay = JSON.parse(JSON.stringify(this.alertsListTable)).filter(function(
                  alert
                ) {
                  return alert._obj && alert._obj.type === 'MSG_TXT_QUALIFICATION';
                });
                break;
              case 'MSG_TXT_LICENSE':
                this.alertsListTableForDisplay = JSON.parse(JSON.stringify(this.alertsListTable)).filter(function(
                  alert
                ) {
                  return alert._obj && alert._obj.type === 'MSG_TXT_LICENSE';
                });
                break;
              default:
                this.alertsListTableForDisplay = JSON.parse(JSON.stringify(this.alertsListTable)).filter(function(
                  alert
                ) {
                  return alert._obj && alert._obj.type === event.value;
                });
                break;
            }
          };
          StaffAlertFormComponent.prototype.calculate = function() {
            var _this = this;
            this.isLoading = true;
            this.staffAlertFormService.findStaffAlerts(this.searchObject).subscribe(function(results) {
              results.forEach(function(res) {
                var alertRow = {};
                alertRow.expiryDate = _this.dateService.dateToString(res.expiry);
                alertRow.employeeFirstName = res.employeeFirstName;
                alertRow.employeeLastName = res.employeeLastName;
                alertRow.employeeNumber = res.employeeNumber;
                alertRow.superior = res.superior;
                alertRow.cellDesign = res.cellDesign;
                alertRow.title = res.title;
                alertRow._obj = res;
                if (!!res.type) {
                  var type = _this.getComponentName() + '.' + res.type;
                  _this.translateService.get(type).subscribe(function(result) {
                    if (!!result) {
                      alertRow.type = result;
                    }
                  });
                }
                _this.alertsListTable.push(alertRow);
              });
              _this.isLoading = false;
              _this.alertsListTableForDisplay = JSON.parse(JSON.stringify(_this.alertsListTable));
            });
          };
          StaffAlertFormComponent.prototype.openStockOperation = function() {
            // todo
          };
          StaffAlertFormComponent.prototype.newCalculation = function() {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
                  .HR_STAFF_ALERT_SEARCH,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          StaffAlertFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-staff-alert-form',
                template: __webpack_require__(
                  /*! ./staff-alert-form.component.html */ './src/app/main/human-resources/staff-alert/form/staff-alert-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./staff-alert-form.component.scss */ './src/app/main/human-resources/staff-alert/form/staff-alert-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__['SessionService'],
                _staff_alert_form_service__WEBPACK_IMPORTED_MODULE_12__['StaffAlertFormService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__['DateService'],
                _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            StaffAlertFormComponent
          );
          return StaffAlertFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/human-resources/staff-alert/form/staff-alert-form.service.ts':
      /*!***********************************************************************************!*\
  !*** ./src/app/main/human-resources/staff-alert/form/staff-alert-form.service.ts ***!
  \***********************************************************************************/
      /*! exports provided: StaffAlertFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'StaffAlertFormService', function() {
          return StaffAlertFormService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-employee.api */ './src/app/shared/api/bidt-employee.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-stock-mvt.api */ './src/app/shared/api/bidt-stock-mvt.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

        var StaffAlertFormService = /** @class */ (function(_super) {
          __extends(StaffAlertFormService, _super);
          function StaffAlertFormService(http, appConfigService, bidtStockMvt, bidtEmployeeApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtStockMvt = bidtStockMvt;
            _this.bidtEmployeeApi = bidtEmployeeApi;
            return _this;
          }
          StaffAlertFormService.prototype.calculate = function(input) {
            return _super.prototype.post.call(this, this.bidtStockMvt.findAlerts, input);
          };
          StaffAlertFormService.prototype.findStaffAlerts = function(input) {
            return _super.prototype.post.call(this, this.bidtEmployeeApi.findStaffAlerts, input);
          };
          StaffAlertFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__['AppConfigService'],
                _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_3__['BidtStockMvtApi'],
                _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_2__['BidtEmployeeApi']
              ])
            ],
            StaffAlertFormService
          );
          return StaffAlertFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/human-resources/staff-alert/search/staff-alert-search.component.html':
      /*!*******************************************************************************************!*\
  !*** ./src/app/main/human-resources/staff-alert/search/staff-alert-search.component.html ***!
  \*******************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ "page.searchPage" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row search-criteria-header">\r\n                  <i\r\n                    class="fa fa-fw fa-floppy-o aw-icon aw-icon-with-border search-criteria-action"\r\n                    aria-hidden="true"\r\n                    pTooltip="{{ \'global.save\' | translate }}"\r\n                    tooltipPosition="top"\r\n                  ></i>\r\n                  <i\r\n                    class="fa fa-fw fa-undo aw-icon aw-icon-with-border search-criteria-action"\r\n                    aria-hidden="true"\r\n                    pTooltip="{{ \'global.reset\' | translate }}"\r\n                    tooltipPosition="top"\r\n                    (click)="resetSearchCriteria()"\r\n                  ></i>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group required">\r\n                    <label class="form-label">{{ componentData.componentId + ".date" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="searchObject.alertDate"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentData.componentId + ".alertThreshold" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <div class="aw-input-group">\r\n                        <input\r\n                          #alertThreshold="ngModel"\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [(ngModel)]="searchObject.alertThreshold"\r\n                          [pKeyFilter]="inputValidationService.validatorOfPositiveInteger()"\r\n                          [pValidateOnly]="true"\r\n                          maxlength="10"\r\n                        />\r\n                        <p-message\r\n                          *ngIf="alertThreshold.invalid && (alertThreshold.dirty || alertThreshold.touched)"\r\n                          severity="error"\r\n                          [text]="inputValidationService.formatOfPositiveInteger()"\r\n                        ></p-message>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group"></div>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".superiorLastName" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n                      <div class="form-control-data" (click)="quickSearchSuperior()">\r\n                        {{ searchObject.superiorLastName }}\r\n                      </div>\r\n\r\n                      <div *ngIf="searchObject.superiorLastName" class="btn-clear-wrapper">\r\n                        <i\r\n                          class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                          aria-hidden="true"\r\n                          (click)="\r\n                            searchObject.superiorLastName = undefined;\r\n                            searchObject.superiorFirstName = undefined;\r\n                            searchObject.superiorId = undefined;\r\n                            searchObject.superiorNumber = undefined\r\n                          "\r\n                        ></i>\r\n                      </div>\r\n                      <div class="btn-search-wrapper">\r\n                        <i\r\n                          class="fa fa-fw fa-search aw-icon btn-search"\r\n                          aria-hidden="true"\r\n                          (click)="quickSearchSuperior()"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".superiorFirstName" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        maxlength="10"\r\n                        [(ngModel)]="searchObject.superiorFirstName"\r\n                        disabled\r\n                      />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".superiorId" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        maxlength="10"\r\n                        [(ngModel)]="searchObject.superiorNumber"\r\n                        disabled\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <button\r\n                      type="button"\r\n                      mat-raised-button\r\n                      (click)="calculate()"\r\n                      [disabled]="alertThreshold.invalid && (alertThreshold.dirty || alertThreshold.touched)"\r\n                    >\r\n                      {{ componentData.componentId + ".toCalculate" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-search-employee\r\n  *ngIf="showSuperiorPopup"\r\n  [(display)]="!!showSuperiorPopup"\r\n  [employee-name]="searchObject.superiorLastName"\r\n  (onSelected)="setSelectedSuperior($event)"\r\n></aw-dialog-search-employee>\r\n';

        /***/
      },

    /***/ './src/app/main/human-resources/staff-alert/search/staff-alert-search.component.scss':
      /*!*******************************************************************************************!*\
  !*** ./src/app/main/human-resources/staff-alert/search/staff-alert-search.component.scss ***!
  \*******************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaHVtYW4tcmVzb3VyY2VzL3N0YWZmLWFsZXJ0L3NlYXJjaC9zdGFmZi1hbGVydC1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */';

        /***/
      },

    /***/ './src/app/main/human-resources/staff-alert/search/staff-alert-search.component.ts':
      /*!*****************************************************************************************!*\
  !*** ./src/app/main/human-resources/staff-alert/search/staff-alert-search.component.ts ***!
  \*****************************************************************************************/
      /*! exports provided: StaffAlertSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'StaffAlertSearchComponent',
          function() {
            return StaffAlertSearchComponent;
          }
        );
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
        /* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/services/input-validation.service */ './src/app/shared/services/input-validation.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
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

        var StaffAlertSearchComponent = /** @class */ (function(_super) {
          __extends(StaffAlertSearchComponent, _super);
          function StaffAlertSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            inputValidationService
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
            _this.inputValidationService = inputValidationService;
            _this.init();
            _this.showSuperiorPopup = false;
            return _this;
          }
          StaffAlertSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
          };
          StaffAlertSearchComponent.prototype.init = function() {
            this.searchObject = {
              alertDate: new Date(),
              alertThreshold: 7
            };
          };
          StaffAlertSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
              .HR_STAFF_ALERT_SEARCH;
          };
          // opens material popup in search criteria
          StaffAlertSearchComponent.prototype.quickSearchSuperior = function() {
            this.showSuperiorPopup = true;
          };
          // calculates stocks on the basis of search criteria
          StaffAlertSearchComponent.prototype.calculate = function() {
            // Check for date.
            if (!!this.searchObject.alertDate) {
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__['ComponentConstants']
                    .HR_STAFF_ALERT_FORM,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read
              };
              var objectId = this.searchObject;
              if (!!objectId) {
                data.objectId = this.serializationService.serialize(objectId);
              }
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('enterSearchCriteria'));
            }
          };
          StaffAlertSearchComponent.prototype.setSelectedSuperior = function(event) {
            this.showSuperiorPopup = false;
            this.searchObject.superiorId = event.id;
            this.searchObject.superiorFirstName = event.employeeFirstName;
            this.searchObject.superiorLastName = event.employeeLastName;
            this.searchObject.superiorNumber = event.employeeNumber;
          };
          StaffAlertSearchComponent.prototype.resetSearchCriteria = function() {
            this.init();
          };
          StaffAlertSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-staff-alert-search',
                template: __webpack_require__(
                  /*! ./staff-alert-search.component.html */ './src/app/main/human-resources/staff-alert/search/staff-alert-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./staff-alert-search.component.scss */ './src/app/main/human-resources/staff-alert/search/staff-alert-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__['SessionService'],
                _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_4__['InputValidationService']
              ])
            ],
            StaffAlertSearchComponent
          );
          return StaffAlertSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/human-resources/staff-alert/search/staff-alert-search.service.ts':
      /*!***************************************************************************************!*\
  !*** ./src/app/main/human-resources/staff-alert/search/staff-alert-search.service.ts ***!
  \***************************************************************************************/
      /*! exports provided: StaffAlertSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'StaffAlertSearchService',
          function() {
            return StaffAlertSearchService;
          }
        );
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

        var StaffAlertSearchService = /** @class */ (function(_super) {
          __extends(StaffAlertSearchService, _super);
          function StaffAlertSearchService(http, appConfigService) {
            return _super.call(this, http, appConfigService) || this;
          }
          StaffAlertSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__['AppConfigService']
              ])
            ],
            StaffAlertSearchService
          );
          return StaffAlertSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_2__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/human-resources/staff-alert/staff-alert.module.ts':
      /*!************************************************************************!*\
  !*** ./src/app/main/human-resources/staff-alert/staff-alert.module.ts ***!
  \************************************************************************/
      /*! exports provided: StaffAlertModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'StaffAlertModule', function() {
          return StaffAlertModule;
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
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/keyfilter */ './node_modules/primeng/keyfilter.js'
        );
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/message */ './node_modules/primeng/message.js'
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_message__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var _node_modules_primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../node_modules/primeng/splitbutton */ './node_modules/primeng/splitbutton.js'
        );
        /* harmony import */ var _node_modules_primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          _node_modules_primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_employee_dialog_search_employee_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-employee/dialog-search-employee.module */ './src/app/shared/components/dialog-search-employee/dialog-search-employee.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/components/dialog-table/dialog-table.module */ './src/app/shared/components/dialog-table/dialog-table.module.ts'
        );
        /* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/components/dynamic-attributes/dynamic-attributes.module */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _form_staff_alert_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./form/staff-alert-form.component */ './src/app/main/human-resources/staff-alert/form/staff-alert-form.component.ts'
        );
        /* harmony import */ var _form_staff_alert_form_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./form/staff-alert-form.service */ './src/app/main/human-resources/staff-alert/form/staff-alert-form.service.ts'
        );
        /* harmony import */ var _search_staff_alert_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./search/staff-alert-search.component */ './src/app/main/human-resources/staff-alert/search/staff-alert-search.component.ts'
        );
        /* harmony import */ var _search_staff_alert_search_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./search/staff-alert-search.service */ './src/app/main/human-resources/staff-alert/search/staff-alert-search.service.ts'
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
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__['DropdownModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_7__['TableModule'],
          primeng_chart__WEBPACK_IMPORTED_MODULE_2__['ChartModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__['TooltipModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__['SelectButtonModule'],
          _node_modules_primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__['SplitButtonModule'],
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_4__['KeyFilterModule'],
          primeng_message__WEBPACK_IMPORTED_MODULE_5__['MessageModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_14__['DialogTableModule'],
          _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_15__[
            'DynamicAttributesModule'
          ],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_16__['ModalModule'],
          _shared_components_dialog_search_employee_dialog_search_employee_module__WEBPACK_IMPORTED_MODULE_13__[
            'DialogSearchEmployeeModule'
          ]
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [];
        var DYNAMIC_COMPONENTS = [
          _search_staff_alert_search_component__WEBPACK_IMPORTED_MODULE_20__['StaffAlertSearchComponent'],
          _form_staff_alert_form_component__WEBPACK_IMPORTED_MODULE_18__['StaffAlertFormComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _search_staff_alert_search_service__WEBPACK_IMPORTED_MODULE_21__['StaffAlertSearchService'],
          _form_staff_alert_form_service__WEBPACK_IMPORTED_MODULE_19__['StaffAlertFormService']
        ];
        var StaffAlertModule = /** @class */ (function() {
          function StaffAlertModule() {}
          StaffAlertModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_10__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_11__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_12__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_17__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            StaffAlertModule
          );
          return StaffAlertModule;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=default~human-resources-human-resources-module~human-resources-staff-alert-staff-alert-module.js.map
