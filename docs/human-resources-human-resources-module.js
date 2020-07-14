(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['human-resources-human-resources-module'],
  {
    /***/ './node_modules/file-saver/dist/FileSaver.min.js':
      /*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        (function(a, b) {
          if (true)
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = b),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          else {
          }
        })(this, function() {
          'use strict';
          function b(a, b) {
            return (
              'undefined' == typeof b
                ? (b = { autoBom: !1 })
                : 'object' != typeof b &&
                  (console.warn('Deprecated: Expected third argument to be a object'), (b = { autoBom: !b })),
              b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)
                ? new Blob(['\uFEFF', a], { type: a.type })
                : a
            );
          }
          function c(b, c, d) {
            var e = new XMLHttpRequest();
            e.open('GET', b),
              (e.responseType = 'blob'),
              (e.onload = function() {
                a(e.response, c, d);
              }),
              (e.onerror = function() {
                console.error('could not download file');
              }),
              e.send();
          }
          function d(a) {
            var b = new XMLHttpRequest();
            return b.open('HEAD', a, !1), b.send(), 200 <= b.status && 299 >= b.status;
          }
          function e(a) {
            try {
              a.dispatchEvent(new MouseEvent('click'));
            } catch (c) {
              var b = document.createEvent('MouseEvents');
              b.initMouseEvent('click', !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
            }
          }
          var f =
              'object' == typeof window && window.window === window
                ? window
                : 'object' == typeof self && self.self === self
                ? self
                : 'object' == typeof global && global.global === global
                ? global
                : void 0,
            a =
              f.saveAs ||
              ('object' != typeof window || window !== f
                ? function() {}
                : 'download' in HTMLAnchorElement.prototype
                ? function(b, g, h) {
                    var i = f.URL || f.webkitURL,
                      j = document.createElement('a');
                    (g = g || b.name || 'download'),
                      (j.download = g),
                      (j.rel = 'noopener'),
                      'string' == typeof b
                        ? ((j.href = b),
                          j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, (j.target = '_blank')))
                        : ((j.href = i.createObjectURL(b)),
                          setTimeout(function() {
                            i.revokeObjectURL(j.href);
                          }, 4e4),
                          setTimeout(function() {
                            e(j);
                          }, 0));
                  }
                : 'msSaveOrOpenBlob' in navigator
                ? function(f, g, h) {
                    if (((g = g || f.name || 'download'), 'string' != typeof f)) navigator.msSaveOrOpenBlob(b(f, h), g);
                    else if (d(f)) c(f, g, h);
                    else {
                      var i = document.createElement('a');
                      (i.href = f),
                        (i.target = '_blank'),
                        setTimeout(function() {
                          e(i);
                        });
                    }
                  }
                : function(a, b, d, e) {
                    if (
                      ((e = e || open('', '_blank')),
                      e && (e.document.title = e.document.body.innerText = 'downloading...'),
                      'string' == typeof a)
                    )
                      return c(a, b, d);
                    var g = 'application/octet-stream' === a.type,
                      h = /constructor/i.test(f.HTMLElement) || f.safari,
                      i = /CriOS\/[\d]+/.test(navigator.userAgent);
                    if ((i || (g && h)) && 'object' == typeof FileReader) {
                      var j = new FileReader();
                      (j.onloadend = function() {
                        var a = j.result;
                        (a = i ? a : a.replace(/^data:[^;]*;/, 'data:attachment/file;')),
                          e ? (e.location.href = a) : (location = a),
                          (e = null);
                      }),
                        j.readAsDataURL(a);
                    } else {
                      var k = f.URL || f.webkitURL,
                        l = k.createObjectURL(a);
                      e ? (e.location = l) : (location.href = l),
                        (e = null),
                        setTimeout(function() {
                          k.revokeObjectURL(l);
                        }, 4e4);
                    }
                  });
          (f.saveAs = a.saveAs = a), true && (module.exports = a);
        });

        //# sourceMappingURL=FileSaver.min.js.map

        /***/
      },

    /***/ './node_modules/primeng/dialog.js':
      /*!****************************************!*\
  !*** ./node_modules/primeng/dialog.js ***!
  \****************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /* Shorthand */

        function __export(m) {
          for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
        Object.defineProperty(exports, '__esModule', { value: true });
        __export(
          __webpack_require__(/*! ./components/dialog/dialog */ './node_modules/primeng/components/dialog/dialog.js')
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

    /***/ './src/app/main/human-resources/employee-form/employee-form.component.html':
      /*!*********************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/employee-form.component.html ***!
  \*********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div *ngIf="!isCreateOpenMode && componentData && componentData.objectId" class="page-subtitle">\r\n          - {{ employeeName }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button *ngIf="isReadOpenMode && hasUpdateAccessRight" type="button" mat-raised-button (click)="editEmployee()">\r\n      {{ "global.edit" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode && !isCreateOpenMode"\r\n      type="button"\r\n      color="warn"\r\n      mat-raised-button\r\n      (click)="cancelEmployee()"\r\n    >\r\n      {{ "global.cancel" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      class="btn-with-spinner"\r\n      color="primary"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="saveEmployee()"\r\n    >\r\n      <span class="lds-hourglass" *ngIf="showSaveSpinner"></span>\r\n      {{ "global.save" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button *ngIf="!isReadOpenMode" type="button" mat-menu-item (click)="editEmployeeCard()">\r\n        <span>{{ componentData.componentId + ".editCard" | translate }}</span>\r\n      </button>\r\n\r\n      <button *ngIf="isReadOpenMode && !isCreateOpenMode" type="button" mat-menu-item (click)="reloadEmployee()">\r\n        {{ "global.refresh" | translate }}\r\n      </button>\r\n\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <mat-tab-group animationDuration="0ms" dynamicHeight>\r\n        <!-- Home -->\r\n        <mat-tab id="homeTab">\r\n          <ng-template mat-tab-label>\r\n            {{ "home" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ "page.mainData" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div class="column">\r\n                    <div class="row">\r\n                      <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                        <label class="form-label">{{\r\n                          componentData.componentId + ".employeeFirstName" | translate\r\n                        }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            type="text"\r\n                            class="aw-input"\r\n                            [(ngModel)]="employeeFormData.employeeFirstName"\r\n                            maxlength="30"\r\n                            [disabled]="isReadOpenMode"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                        <label class="form-label">{{\r\n                          componentData.componentId + ".employeeLastName" | translate\r\n                        }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            type="text"\r\n                            class="aw-input"\r\n                            [(ngModel)]="employeeFormData.employeeLastName"\r\n                            maxlength="30"\r\n                            [disabled]="isReadOpenMode"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{\r\n                          componentData.componentId + ".employeeNumber" | translate\r\n                        }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            type="text"\r\n                            class="aw-input"\r\n                            [(ngModel)]="employeeFormData.employeeNumber"\r\n                            maxlength="20"\r\n                            [disabled]="isReadOpenMode"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{\r\n                          componentData.componentId + ".employeeBirthday" | translate\r\n                        }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <p-calendar\r\n                            showButtonBar="true"\r\n                            [monthNavigator]="true"\r\n                            [yearNavigator]="true"\r\n                            [yearRange]="sessionService.calendarYearRange"\r\n                            class="aw-calendar"\r\n                            [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                            [locale]="sessionService.calendarFormat"\r\n                            [(ngModel)]="employeeFormData.employeeBirthday"\r\n                            [disabled]="isReadOpenMode"\r\n                          ></p-calendar>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="row">\r\n                      <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                        <label class="form-label">{{\r\n                          componentData.componentId + ".bidtCompanyName" | translate\r\n                        }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width"\r\n                            [options]="companies"\r\n                            [(ngModel)]="selectedCompany"\r\n                            (onChange)="loadSites()"\r\n                            [showClear]="true"\r\n                            placeholder="&nbsp;"\r\n                            [disabled]="isReadOpenMode"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                        <label class="form-label">{{ componentData.componentId + ".bidtSiteName" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width"\r\n                            [options]="sites"\r\n                            (onChange)="loadWarehousesBysite()"\r\n                            [(ngModel)]="employeeFormData.bidtSiteId"\r\n                            [showClear]="true"\r\n                            placeholder="&nbsp;"\r\n                            [disabled]="isReadOpenMode"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".warehouseOrWorkshop" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width"\r\n                            [options]="warehouses"\r\n                            [(ngModel)]="employeeFormData.bidtWarehouseId"\r\n                            [showClear]="true"\r\n                            placeholder="&nbsp;"\r\n                            [disabled]="isReadOpenMode"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ componentData.componentId + ".location" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            type="text"\r\n                            class="aw-input"\r\n                            [disabled]="isReadOpenMode"\r\n                            [(ngModel)]="employeeFormData.employeeComment"\r\n                            maxlength="300"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="grid-row">\r\n            <div class="grid-cell--equally">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ componentData.componentId + ".contactInfo" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div class="section">\r\n                    <div class="section-content">\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".employeeAdress" | translate\r\n                          }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="employeeFormData.employeeAdress"\r\n                              [disabled]="isReadOpenMode"\r\n                              maxlength="300"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".employeeZipCode" | translate\r\n                          }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="employeeFormData.employeeZipCode"\r\n                              [disabled]="isReadOpenMode"\r\n                              maxlength="20"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".employeeCity" | translate\r\n                          }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="employeeFormData.employeeCity"\r\n                              [disabled]="isReadOpenMode"\r\n                              maxlength="100"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".employeeCountry" | translate\r\n                          }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <p-dropdown\r\n                              class="aw-dropdown fixed-width"\r\n                              [options]="countries"\r\n                              [(ngModel)]="employeeFormData.employeeCountry"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".employeeWorkPhone" | translate\r\n                          }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="employeeFormData.employeeWorkPhone"\r\n                              [disabled]="isReadOpenMode"\r\n                              maxlength="20"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".employeePersonnalPhone" | translate\r\n                          }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="employeeFormData.employeePersonnalPhone"\r\n                              [disabled]="isReadOpenMode"\r\n                              maxlength="20"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".employeeMail" | translate\r\n                          }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="employeeFormData.employeeMail"\r\n                              [disabled]="isReadOpenMode"\r\n                              maxlength="150"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell--grow3 grid-cell--no-padding">\r\n              <div class="grid-row">\r\n                <div class="grid-cell--equally">\r\n                  <div class="grid-cell grid-cell--container">\r\n                    <div class="grid-cell-header">\r\n                      <div class="grid-cell-title-container">\r\n                        <h3 class="grid-cell-title">{{ componentData.componentId + ".contract" | translate }}</h3>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="grid-cell-content grid-cell-content-with-section">\r\n                      <div class="section">\r\n                        <div class="section-content">\r\n                          <div class="row">\r\n                            <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                              <label class="form-label">{{\r\n                                componentData.componentId + ".startDate" | translate\r\n                              }}</label>\r\n\r\n                              <div class="form-control">\r\n                                <p-calendar\r\n                                  showButtonBar="true"\r\n                                  [monthNavigator]="true"\r\n                                  [yearNavigator]="true"\r\n                                  [yearRange]="sessionService.calendarYearRange"\r\n                                  class="aw-calendar"\r\n                                  [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                                  [locale]="sessionService.calendarFormat"\r\n                                  [(ngModel)]="selectedContractEmployeeStartDate"\r\n                                  [disabled]="isReadOpenMode"\r\n                                ></p-calendar>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                              <label class="form-label">{{\r\n                                componentData.componentId + ".contractName" | translate\r\n                              }}</label>\r\n\r\n                              <div class="form-control">\r\n                                <p-dropdown\r\n                                  class="aw-dropdown fixed-width"\r\n                                  [options]="contractNames"\r\n                                  [(ngModel)]="selectedContractName"\r\n                                  (onChange)="loadContractTypesOnChange()"\r\n                                  [showClear]="true"\r\n                                  placeholder="&nbsp;"\r\n                                  [disabled]="isReadOpenMode"\r\n                                ></p-dropdown>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class="form-group">\r\n                              <label class="form-label">{{\r\n                                componentData.componentId + ".contractType" | translate\r\n                              }}</label>\r\n\r\n                              <div class="form-control">\r\n                                <input\r\n                                  type="text"\r\n                                  class="aw-input"\r\n                                  [(ngModel)]="selectedContractTypeName"\r\n                                  [disabled]="true"\r\n                                />\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class="form-group">\r\n                              <label class="form-label">{{ componentData.componentId + ".endDate" | translate }}</label>\r\n\r\n                              <div class="form-control">\r\n                                <p-calendar\r\n                                  showButtonBar="true"\r\n                                  [monthNavigator]="true"\r\n                                  [yearNavigator]="true"\r\n                                  [yearRange]="sessionService.calendarYearRange"\r\n                                  class="aw-calendar"\r\n                                  [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                                  [locale]="sessionService.calendarFormat"\r\n                                  [(ngModel)]="selectedContractEmployeeEndDate"\r\n                                  [disabled]="isReadOpenMode"\r\n                                ></p-calendar>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-row">\r\n                <div class="grid-cell--equally">\r\n                  <div class="grid-cell grid-cell--container">\r\n                    <div class="grid-cell-header">\r\n                      <div class="grid-cell-title-container">\r\n                        <h3 class="grid-cell-title">{{ componentData.componentId + ".salary" | translate }}</h3>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="grid-cell-content grid-cell-content-with-section">\r\n                      <div class="section">\r\n                        <div class="section-content">\r\n                          <div class="row">\r\n                            <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                              <label class="form-label">{{\r\n                                componentData.componentId + ".grossSalary" | translate\r\n                              }}</label>\r\n\r\n                              <div class="form-control">\r\n                                <input\r\n                                  #salaryValue="ngModel"\r\n                                  type="text"\r\n                                  class="aw-input"\r\n                                  [(ngModel)]="salaryFormData.salaryValue"\r\n                                  [disabled]="isReadOpenMode"\r\n                                  [pKeyFilter]="inputValidationService.validatorOfPositiveNumber()"\r\n                                  [pValidateOnly]="true"\r\n                                />\r\n                                <p-message\r\n                                  *ngIf="salaryValue.invalid && (salaryValue.dirty || salaryValue.touched)"\r\n                                  severity="error"\r\n                                  [text]="inputValidationService.formatOfPositiveNumber()"\r\n                                ></p-message>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                              <label class="form-label">{{ componentData.componentId + ".period" | translate }}</label>\r\n\r\n                              <div class="form-control">\r\n                                <p-dropdown\r\n                                  class="aw-dropdown fixed-width"\r\n                                  [options]="periods"\r\n                                  [(ngModel)]="salaryFormData.salaryPayPeriod"\r\n                                  [showClear]="true"\r\n                                  placeholder="&nbsp;"\r\n                                  [disabled]="isReadOpenMode"\r\n                                ></p-dropdown>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class="form-group">\r\n                              <label class="form-label">{{\r\n                                componentData.componentId + ".internalCost" | translate\r\n                              }}</label>\r\n\r\n                              <div class="form-control">\r\n                                <input\r\n                                  #salaryInternalCost="ngModel"\r\n                                  type="text"\r\n                                  class="aw-input"\r\n                                  [(ngModel)]="salaryFormData.salaryInternalCost"\r\n                                  [disabled]="isReadOpenMode"\r\n                                  [pKeyFilter]="inputValidationService.validatorOfPositiveNumber()"\r\n                                  [pValidateOnly]="true"\r\n                                />\r\n                                <p-message\r\n                                  *ngIf="\r\n                                    salaryInternalCost.invalid &&\r\n                                    (salaryInternalCost.dirty || salaryInternalCost.touched)\r\n                                  "\r\n                                  severity="error"\r\n                                  [text]="inputValidationService.formatOfPositiveNumber()"\r\n                                ></p-message>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class="form-group">\r\n                              <label class="form-label">{{\r\n                                componentData.componentId + ".currency" | translate\r\n                              }}</label>\r\n\r\n                              <div class="form-control">\r\n                                <input\r\n                                  type="text"\r\n                                  class="aw-input"\r\n                                  [(ngModel)]="selectedSalaryCurrency"\r\n                                  [disabled]="true"\r\n                                />\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-row">\r\n                <div class="grid-cell--equally">\r\n                  <div class="grid-cell grid-cell--container">\r\n                    <div class="grid-cell-header">\r\n                      <div class="grid-cell-title-container">\r\n                        <h3 class="grid-cell-title">{{ componentData.componentId + ".management" | translate }}</h3>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="grid-cell-content grid-cell-content-with-section">\r\n                      <div class="section">\r\n                        <div class="section-content">\r\n                          <div class="row">\r\n                            <div class="form-group flex--2">\r\n                              <label class="form-label">{{\r\n                                componentData.componentId + ".superior" | translate\r\n                              }}</label>\r\n\r\n                              <div\r\n                                class="form-control form-control-with-modal"\r\n                                [ngClass]="{ disabled: isReadOpenMode }"\r\n                              >\r\n                                <div class="form-control-data" (click)="openSuperiorPopup()">\r\n                                  {{ superiorFormData.employeeLastName }} {{ superiorFormData.employeeFirstName }}\r\n                                </div>\r\n\r\n                                <div *ngIf="superiorFormData.employeeNumber" class="btn-clear-wrapper">\r\n                                  <i\r\n                                    class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                                    aria-hidden="true"\r\n                                    (click)="refreshSuperior()"\r\n                                  ></i>\r\n                                </div>\r\n                                <div class="btn-search-wrapper">\r\n                                  <i\r\n                                    class="fa fa-fw fa-search aw-icon btn-search"\r\n                                    aria-hidden="true"\r\n                                    (click)="openSuperiorPopup()"\r\n                                  ></i>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class="form-group flex--2"></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab id="qualificationsTab">\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + ".qualifications" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".qualifications" | translate }} ({{\r\n                        bidtQualifEmployeeDisplayed ? bidtQualifEmployeeDisplayed.length : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <p-table\r\n                    [resizableColumns]="true"\r\n                    #ptableQualification\r\n                    class="aw-table2"\r\n                    [columns]="qualificationsTableCols"\r\n                    [value]="bidtQualifEmployeeDisplayed"\r\n                    [(selection)]="selectedQualifications"\r\n                    [scrollable]="true"\r\n                  >\r\n                    <ng-template pTemplate="emptymessage">\r\n                      <span *ngIf="!isLoadingQualificationTable"> &nbsp;</span>\r\n\r\n                      <div *ngIf="isLoadingQualificationTable" class="aw-table-loading-indicator">\r\n                        <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                        <div class="lds-hourglass"></div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="caption">\r\n                      <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedQualifications.length > 0 }">\r\n                        <div class="aw-table-global-filter">\r\n                          <label class="aw-table-global-filter-label">\r\n                            <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableQualificationGlobalFilter\r\n                            class="aw-table-global-filter-input"\r\n                            type="text"\r\n                            placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                            (input)="ptableQualification.filterGlobal($event.target.value, \'contains\')"\r\n                          />\r\n                        </div>\r\n\r\n                        <div class="aw-table-actions">\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedQualifications.length > 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            color="warn"\r\n                            (click)="deleteQualification()"\r\n                          >\r\n                            {{ "global.delete" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedQualifications.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="editQualification()"\r\n                          >\r\n                            {{ "global.edit" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="selectedQualifications.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="openQualification()"\r\n                          >\r\n                            {{ "global.open" | translate }}\r\n                          </button>\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedQualifications.length === 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="createQualification()"\r\n                          >\r\n                            {{ "global.add" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="colgroup" let-columns>\r\n                      <colgroup>\r\n                        <col class="aw-table-checkbox-wrapper" />\r\n                        <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="header" let-columns>\r\n                      <tr>\r\n                        <th class="aw-table-checkbox-wrapper">\r\n                          <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          {{ componentData.componentId + "." + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                      <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                        <td class="aw-table-checkbox-wrapper">\r\n                          <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                        </td>\r\n\r\n                        <td\r\n                          *ngFor="let col of columns"\r\n                          [ngSwitch]="col.field"\r\n                          [ngStyle]="{ \'text-align\': col.alignment }"\r\n                        >\r\n                          <span *ngSwitchCase="\'qualifOngoing\'">\r\n                            <span *ngIf="rowData[col.field] !== null && rowData[col.field]">\r\n                              <i class="fa fa-fw fa-check" aria-hidden="true"></i>\r\n                            </span>\r\n                          </span>\r\n                          <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".qualificationRenewal" | translate }} ({{\r\n                        qualificationRenewalTableDataSource ? qualificationRenewalTableDataSource.dataCount : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".startDate" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <p-calendar\r\n                          showButtonBar="true"\r\n                          [monthNavigator]="true"\r\n                          [yearNavigator]="true"\r\n                          [yearRange]="sessionService.calendarYearRange"\r\n                          class="aw-calendar"\r\n                          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                          [locale]="sessionService.calendarFormat"\r\n                          [(ngModel)]="qualificationRenewalStartDateFilter"\r\n                          [disabled]="isReadOpenMode"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ componentData.componentId + ".endDate" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <p-calendar\r\n                          showButtonBar="true"\r\n                          [monthNavigator]="true"\r\n                          [yearNavigator]="true"\r\n                          [yearRange]="sessionService.calendarYearRange"\r\n                          class="aw-calendar"\r\n                          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                          [locale]="sessionService.calendarFormat"\r\n                          [(ngModel)]="qualificationRenewalEndDateFilter"\r\n                          [disabled]="isReadOpenMode"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n                    <button\r\n                      *ngIf="!isReadOpenMode"\r\n                      type="button"\r\n                      mat-raised-button\r\n                      (click)="filterQualificationRenewalDates()"\r\n                    >\r\n                      {{ componentData.componentId + ".filter" | translate }}\r\n                    </button>\r\n                  </div>\r\n\r\n                  <a-table [dataSource]="qualificationRenewalTableDataSource"> </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".training" | translate }} ({{\r\n                        bidtTrainingDisplayed ? bidtTrainingDisplayed.length : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <p-table\r\n                    [resizableColumns]="true"\r\n                    #ptableTraining\r\n                    class="aw-table2"\r\n                    [columns]="trainingsTableCols"\r\n                    [value]="bidtTrainingDisplayed"\r\n                    [(selection)]="selectedTrainings"\r\n                    [scrollable]="true"\r\n                  >\r\n                    <ng-template pTemplate="emptymessage">\r\n                      <span *ngIf="!isLoadingTrainingTable"> &nbsp;</span>\r\n\r\n                      <div *ngIf="isLoadingTrainingTable" class="aw-table-loading-indicator">\r\n                        <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                        <div class="lds-hourglass"></div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="caption">\r\n                      <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedTrainings.length > 0 }">\r\n                        <div class="aw-table-global-filter">\r\n                          <label class="aw-table-global-filter-label">\r\n                            <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableTrainingGlobalFilter\r\n                            class="aw-table-global-filter-input"\r\n                            type="text"\r\n                            placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                            (input)="ptableTraining.filterGlobal($event.target.value, \'contains\')"\r\n                          />\r\n                        </div>\r\n\r\n                        <div class="aw-table-actions">\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedTrainings.length > 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            color="warn"\r\n                            (click)="deleteTraining()"\r\n                          >\r\n                            {{ "global.delete" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedTrainings.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="editTraining()"\r\n                          >\r\n                            {{ "global.edit" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="selectedTrainings.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="openTraining()"\r\n                          >\r\n                            {{ "global.open" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedTrainings.length === 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="createTraining()"\r\n                          >\r\n                            {{ "global.add" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="colgroup" let-columns>\r\n                      <colgroup>\r\n                        <col class="aw-table-checkbox-wrapper" />\r\n                        <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="header" let-columns>\r\n                      <tr>\r\n                        <th class="aw-table-checkbox-wrapper">\r\n                          <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          {{ componentData.componentId + "." + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                      <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                        <td class="aw-table-checkbox-wrapper">\r\n                          <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                        </td>\r\n\r\n                        <td\r\n                          *ngFor="let col of columns"\r\n                          [ngSwitch]="col.field"\r\n                          [ngStyle]="{ \'text-align\': col.alignment }"\r\n                        >\r\n                          <span *ngSwitchCase="\'trainingPerformed\'">\r\n                            <i *ngIf="rowData[col.field]" class="fa fa-fw fa-check" aria-hidden="true"></i>\r\n                          </span>\r\n                          <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab id="licenseTab">\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + ".license" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ componentData.componentId + ".license" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div class="section">\r\n                    <div class="section-content">\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".licenseNumber" | translate\r\n                          }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="licenseFormData.licenseNumber"\r\n                              [disabled]="isReadOpenMode"\r\n                              maxlength="50"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".licenseIssuingCountry" | translate\r\n                          }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="licenseFormData.licenseIssuingCountry"\r\n                              [disabled]="isReadOpenMode"\r\n                              maxlength="50"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".licenseIssueDate" | translate\r\n                          }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <p-calendar\r\n                              showButtonBar="true"\r\n                              [monthNavigator]="true"\r\n                              [yearNavigator]="true"\r\n                              [yearRange]="sessionService.calendarYearRange"\r\n                              class="aw-calendar"\r\n                              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                              [locale]="sessionService.calendarFormat"\r\n                              [(ngModel)]="selectedLicenseIssueDate"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></p-calendar>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".licenseValidatingDate" | translate\r\n                          }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <p-calendar\r\n                              showButtonBar="true"\r\n                              [monthNavigator]="true"\r\n                              [yearNavigator]="true"\r\n                              [yearRange]="sessionService.calendarYearRange"\r\n                              class="aw-calendar"\r\n                              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                              [locale]="sessionService.calendarFormat"\r\n                              [(ngModel)]="selectedLicenseValidatingDate"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></p-calendar>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".categories" | translate }} ({{\r\n                        categoryLevelTableData ? categoryLevelTableData.length : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div class="section">\r\n                    <div class="section-content">\r\n                      <p-table\r\n                        [resizableColumns]="true"\r\n                        #ptableCategories\r\n                        class="aw-table2"\r\n                        [columns]="licensesTableCols"\r\n                        [value]="categoryLevelTableData"\r\n                      >\r\n                        <ng-template pTemplate="emptymessage">\r\n                          <span *ngIf="!isLoadingCategoryTable"> &nbsp;</span>\r\n\r\n                          <div *ngIf="isLoadingCategoryTable" class="aw-table-loading-indicator">\r\n                            <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                            <div class="lds-hourglass"></div>\r\n                          </div>\r\n                        </ng-template>\r\n\r\n                        <ng-template pTemplate="caption">\r\n                          <div class="aw-table-header"></div>\r\n                        </ng-template>\r\n\r\n                        <ng-template pTemplate="colgroup" let-columns>\r\n                          <colgroup>\r\n                            <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                          </colgroup>\r\n                        </ng-template>\r\n\r\n                        <ng-template pTemplate="header" let-columns>\r\n                          <tr>\r\n                            <th>{{ componentData.componentId + ".categoryLevelHeader" | translate }}</th>\r\n\r\n                            <th\r\n                              pResizableColumn\r\n                              *ngFor="let col of columns"\r\n                              [ngStyle]="{ \'text-align\': col.alignment }"\r\n                            >\r\n                              {{ showHeaderText(col.field) | translate }}\r\n                            </th>\r\n                          </tr>\r\n                        </ng-template>\r\n\r\n                        <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                          <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                            <td>{{ showCategory(rowIndex) }}</td>\r\n\r\n                            <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                              <p-checkbox\r\n                                class="aw-table-checkbox"\r\n                                binary="true"\r\n                                [(ngModel)]="rowData[col.field]"\r\n                                [disabled]="isReadOpenMode"\r\n                              ></p-checkbox>\r\n                            </td>\r\n                          </tr>\r\n                        </ng-template>\r\n                      </p-table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab id="worksTab">\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + ".works" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row" [style.display]="!showFlightTab ? \'none\' : \'\'">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".flights" | translate }} ({{\r\n                        flightsDisplayed ? flightsDisplayed.length : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <p-table\r\n                    [resizableColumns]="true"\r\n                    #ptableFlights\r\n                    class="aw-table2"\r\n                    [columns]="flightsTableCols"\r\n                    [value]="flightsDisplayed"\r\n                    [scrollable]="true"\r\n                  >\r\n                    <ng-template pTemplate="emptymessage">\r\n                      <span *ngIf="!isLoadingFlightsTable"> &nbsp;</span>\r\n\r\n                      <div *ngIf="isLoadingFlightsTable" class="aw-table-loading-indicator">\r\n                        <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                        <div class="lds-hourglass"></div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="caption">\r\n                      <div class="aw-table-header">\r\n                        <div class="aw-table-global-filter">\r\n                          <label class="aw-table-global-filter-label">\r\n                            <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableFlightsGlobalFilter\r\n                            class="aw-table-global-filter-input"\r\n                            type="text"\r\n                            placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                            (input)="ptableFlights.filterGlobal($event.target.value, \'contains\')"\r\n                          />\r\n                        </div>\r\n                        <div class="aw-table-actions">\r\n                          <div class="aw-table-icon-actions" *ngIf="!isLoadingFlightsTable">\r\n                            <i\r\n                              class="fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n                              aria-hidden="true"\r\n                              pTooltip="{{\r\n                                \'global\' + (flightFiltersVisible ? \'.hideFilters\' : \'.showFilters\') | translate\r\n                              }}"\r\n                              tooltipPosition="top"\r\n                              [ngClass]="{ active: flightFiltersVisible }"\r\n                              (click)="flightFilters.toggle($event)"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="colgroup" let-columns>\r\n                      <colgroup>\r\n                        <col\r\n                          *ngFor="let col of columns"\r\n                          [ngStyle]="{ \'text-align\': col.alignment, width: col.width }"\r\n                        />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="header" let-columns>\r\n                      <tr>\r\n                        <th\r\n                          pResizableColumn\r\n                          *ngFor="let col of columns"\r\n                          [ngStyle]="{ \'text-align\': col.alignment, width: col.width }"\r\n                        >\r\n                          {{ componentData.componentId + "." + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                      <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                        <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment, width: col.width }">\r\n                          {{ rowData[col.field] }}\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="grid-row">\r\n            <div class="grid-cell--6">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">{{ componentData.componentId + ".workTemplate" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content grid-cell-content-with-section">\r\n                  <div class="section">\r\n                    <div class="section-content">\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".ltName" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <p-dropdown\r\n                              class="aw-dropdown fixed-width"\r\n                              [options]="workTemplateNames"\r\n                              [(ngModel)]="selectedWorkTemplateName"\r\n                              (onChange)="setWorkTemplatedata()"\r\n                              [showClear]="true"\r\n                              placeholder="&nbsp;"\r\n                              [disabled]="isReadOpenMode"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".ltDayPerWeek" | translate\r\n                          }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="laborTemplateFormData.ltDayPerWeek"\r\n                              [disabled]="true"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".ltHourPerWeek" | translate\r\n                          }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="laborTemplateFormData.ltHourPerWeek"\r\n                              [disabled]="true"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="section">\r\n                    <h4 class="section-title">{{ "global.workingDay" | translate }}</h4>\r\n\r\n                    <div class="section-content">\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ "global.hours" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="laborTemplateFormData.ltNbHourWd"\r\n                              [disabled]="true"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".ltIsMonday" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <p-checkbox\r\n                              class="aw-checkbox"\r\n                              binary="true"\r\n                              [(ngModel)]="laborTemplateFormData.ltIsMonday"\r\n                              [disabled]="true"\r\n                            ></p-checkbox>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".ltIsTuesday" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <p-checkbox\r\n                              class="aw-checkbox"\r\n                              binary="true"\r\n                              [(ngModel)]="laborTemplateFormData.ltIsTuesday"\r\n                              [disabled]="true"\r\n                            ></p-checkbox>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".ltIsWednesday" | translate\r\n                          }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <p-checkbox\r\n                              class="aw-checkbox"\r\n                              binary="true"\r\n                              [(ngModel)]="laborTemplateFormData.ltIsWednesday"\r\n                              [disabled]="true"\r\n                            ></p-checkbox>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".ltIsThursday" | translate\r\n                          }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <p-checkbox\r\n                              class="aw-checkbox"\r\n                              binary="true"\r\n                              [(ngModel)]="laborTemplateFormData.ltIsThursday"\r\n                              [disabled]="true"\r\n                            ></p-checkbox>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ componentData.componentId + ".ltIsFriday" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <p-checkbox\r\n                              class="aw-checkbox"\r\n                              binary="true"\r\n                              [(ngModel)]="laborTemplateFormData.ltIsFriday"\r\n                              [disabled]="true"\r\n                            ></p-checkbox>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="section">\r\n                    <h4 class="section-title">{{ "global.weekEnd" | translate }}</h4>\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ "global.hours" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            type="text"\r\n                            class="aw-input"\r\n                            [(ngModel)]="laborTemplateFormData.ltNbHourWe"\r\n                            [disabled]="true"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ componentData.componentId + ".ltIsSaturday" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <p-checkbox\r\n                            class="aw-checkbox"\r\n                            binary="true"\r\n                            [(ngModel)]="laborTemplateFormData.ltIsSaturday"\r\n                            [disabled]="true"\r\n                          ></p-checkbox>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ componentData.componentId + ".ltIsSunday" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <p-checkbox\r\n                            class="aw-checkbox"\r\n                            binary="true"\r\n                            [(ngModel)]="laborTemplateFormData.ltIsSunday"\r\n                            [disabled]="true"\r\n                          ></p-checkbox>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group"></div>\r\n                      <div class="form-group"></div>\r\n                      <div class="form-group"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell--6">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".hourlyCosts" | translate }} ({{\r\n                        bidtHourlyCostDisplayed ? bidtHourlyCostDisplayed.length : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <p-table\r\n                    [resizableColumns]="true"\r\n                    #ptableHourlyCost\r\n                    class="aw-table2"\r\n                    [columns]="hourlyCostsTableCols"\r\n                    [value]="bidtHourlyCostDisplayed"\r\n                    [(selection)]="selectedHourlyCosts"\r\n                    [scrollable]="true"\r\n                  >\r\n                    <ng-template pTemplate="emptymessage">\r\n                      <span *ngIf="!isLoadingHourlyCostTable"> &nbsp;</span>\r\n\r\n                      <div *ngIf="isLoadingHourlyCostTable" class="aw-table-loading-indicator">\r\n                        <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                        <div class="lds-hourglass"></div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="caption">\r\n                      <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedHourlyCosts.length > 0 }">\r\n                        <div class="aw-table-global-filter">\r\n                          <label class="aw-table-global-filter-label">\r\n                            <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableHourlyCostGlobalFilter\r\n                            class="aw-table-global-filter-input"\r\n                            type="text"\r\n                            placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                            (input)="ptableHourlyCost.filterGlobal($event.target.value, \'contains\')"\r\n                          />\r\n                        </div>\r\n\r\n                        <div class="aw-table-actions">\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedHourlyCosts.length > 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            color="warn"\r\n                            (click)="deleteHourlyCost()"\r\n                          >\r\n                            {{ "global.delete" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedHourlyCosts.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="editHourlyCost()"\r\n                          >\r\n                            {{ "global.edit" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="selectedHourlyCosts.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="openHourlyCost()"\r\n                          >\r\n                            {{ "global.open" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedHourlyCosts.length === 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="createHourlyCost()"\r\n                          >\r\n                            {{ "global.add" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="colgroup" let-columns>\r\n                      <colgroup>\r\n                        <col class="aw-table-checkbox-wrapper" />\r\n                        <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="header" let-columns>\r\n                      <tr>\r\n                        <th class="aw-table-checkbox-wrapper">\r\n                          <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          {{ componentData.componentId + "." + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                      <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                        <td class="aw-table-checkbox-wrapper">\r\n                          <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                        </td>\r\n\r\n                        <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          {{ rowData[col.field] }}\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="grid-row">\r\n            <div class="grid-cell--6">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".evaluation" | translate }} ({{\r\n                        bidtEvaluationDisplayed ? bidtEvaluationDisplayed.length : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <p-table\r\n                    [resizableColumns]="true"\r\n                    #ptableEvaluation\r\n                    class="aw-table2"\r\n                    [columns]="evaluationsTableCols"\r\n                    [value]="bidtEvaluationDisplayed"\r\n                    [(selection)]="selectedEvaluations"\r\n                    [scrollable]="true"\r\n                  >\r\n                    <ng-template pTemplate="emptymessage">\r\n                      <span *ngIf="!isLoadingEvaluationTable"> &nbsp;</span>\r\n\r\n                      <div *ngIf="isLoadingEvaluationTable" class="aw-table-loading-indicator">\r\n                        <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                        <div class="lds-hourglass"></div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="caption">\r\n                      <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedEvaluations.length > 0 }">\r\n                        <div class="aw-table-global-filter">\r\n                          <label class="aw-table-global-filter-label">\r\n                            <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableEvaluationGlobalFilter\r\n                            class="aw-table-global-filter-input"\r\n                            type="text"\r\n                            placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                            (input)="ptableEvaluation.filterGlobal($event.target.value, \'contains\')"\r\n                          />\r\n                        </div>\r\n\r\n                        <div class="aw-table-actions">\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedEvaluations.length > 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            color="warn"\r\n                            (click)="deleteEvaluation()"\r\n                          >\r\n                            {{ "global.delete" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedEvaluations.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="editEvaluation()"\r\n                          >\r\n                            {{ "global.edit" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="selectedEvaluations.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="openEvaluation()"\r\n                          >\r\n                            {{ "global.open" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedEvaluations.length === 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="createEvaluation()"\r\n                          >\r\n                            {{ "global.add" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="colgroup" let-columns>\r\n                      <colgroup>\r\n                        <col class="aw-table-checkbox-wrapper" />\r\n                        <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="header" let-columns>\r\n                      <tr>\r\n                        <th class="aw-table-checkbox-wrapper">\r\n                          <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          {{ componentData.componentId + "." + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                      <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                        <td class="aw-table-checkbox-wrapper">\r\n                          <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                        </td>\r\n\r\n                        <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          <span> {{ rowData[col.field] }} </span>\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="grid-cell--6">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ "global.documents" | translate }} ({{\r\n                        bidtDocumentDisplayed ? bidtDocumentDisplayed.length : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <p-table\r\n                    [resizableColumns]="true"\r\n                    #ptableDocuments\r\n                    class="aw-table2"\r\n                    [columns]="documentsTableCols"\r\n                    [value]="bidtDocumentDisplayed"\r\n                    [(selection)]="selectedDocuments"\r\n                    [scrollable]="true"\r\n                  >\r\n                    <ng-template pTemplate="emptymessage">\r\n                      <span *ngIf="!isLoadingDocumentTable"> &nbsp;</span>\r\n\r\n                      <div *ngIf="isLoadingDocumentTable" class="aw-table-loading-indicator">\r\n                        <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                        <div class="lds-hourglass"></div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="caption">\r\n                      <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedDocuments.length > 0 }">\r\n                        <div class="aw-table-global-filter">\r\n                          <label class="aw-table-global-filter-label">\r\n                            <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableDocumentsGlobalFilter\r\n                            class="aw-table-global-filter-input"\r\n                            type="text"\r\n                            placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                            (input)="ptableDocuments.filterGlobal($event.target.value, \'contains\')"\r\n                          />\r\n                        </div>\r\n\r\n                        <div class="aw-table-actions">\r\n                          <p-fileUpload\r\n                            #fileUploader\r\n                            *ngIf="!isReadOpenMode && selectedDocuments.length === 0"\r\n                            class="aw-fileupload aw-table-action"\r\n                            name="document[]"\r\n                            customUpload="true"\r\n                            mode="basic"\r\n                            auto="true"\r\n                            chooseLabel="{{ \'global.upload\' | translate }}"\r\n                            (uploadHandler)="uploadDocument($event, fileUploader)"\r\n                          ></p-fileUpload>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedDocuments.length === 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="linkUrl()"\r\n                          >\r\n                            {{ componentData.componentId + ".linkUrl" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="showDownloadDocButton()"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="downloadFiles()"\r\n                          >\r\n                            {{ "global.download" | translate }}\r\n                          </button>\r\n\r\n                          <button *ngIf="showGoToDocButton()" type="button" mat-raised-button (click)="goToDoc()">\r\n                            {{ "global.goTo" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedDocuments.length > 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            color="warn"\r\n                            (click)="deleteSelectedDocuments()"\r\n                          >\r\n                            {{ "global.delete" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedDocuments.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="editDocument()"\r\n                          >\r\n                            {{ "global.edit" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="selectedDocuments.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="openDocument()"\r\n                          >\r\n                            {{ "global.open" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="colgroup" let-columns>\r\n                      <colgroup>\r\n                        <col class="aw-table-checkbox-wrapper" />\r\n                        <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="header" let-columns>\r\n                      <tr>\r\n                        <th class="aw-table-checkbox-wrapper">\r\n                          <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          {{ componentData.componentId + "." + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                      <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                        <td class="aw-table-checkbox-wrapper">\r\n                          <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                        </td>\r\n\r\n                        <td\r\n                          *ngFor="let col of columns"\r\n                          [ngSwitch]="col.field"\r\n                          [ngStyle]="{ \'text-align\': col.alignment }"\r\n                        >\r\n                          {{ rowData[col.field] }}\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Display only in edit and read mode -->\r\n          <div [style.visibility]="!isCreateOpenMode ? \'visible\' : \'hidden\'">\r\n            <div class="grid-row" [style.display]="!showWorkTab ? \'none\' : \'\'">\r\n              <div class="grid-cell--12">\r\n                <div class="grid-cell grid-cell--container">\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ componentData.componentId + ".works" | translate }} ({{\r\n                          worksDisplayed ? worksDisplayed.length : 0\r\n                        }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      #ptableWorks\r\n                      class="aw-table2"\r\n                      [columns]="worksTableCols"\r\n                      [value]="worksDisplayed"\r\n                      [scrollable]="true"\r\n                      dataKey="rowIndex"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isLoadingWorksTable"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isLoadingWorksTable" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableHolidaysGlobalFilter\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="ptableWorks.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class="aw-table-actions">\r\n                            <button type="button" mat-raised-button (click)="onExportWorks()">\r\n                              {{ "global.export" | translate }}\r\n                            </button>\r\n                            <div class="aw-table-icon-actions" *ngIf="!isLoadingWorksTable">\r\n                              <i\r\n                                class="fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n                                aria-hidden="true"\r\n                                pTooltip="{{\r\n                                  \'global\' + (workFiltersVisible ? \'.hideFilters\' : \'.showFilters\') | translate\r\n                                }}"\r\n                                tooltipPosition="top"\r\n                                [ngClass]="{ active: workFiltersVisible }"\r\n                                (click)="workFilters.toggle($event)"\r\n                              ></i>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col\r\n                            *ngFor="let col of columns"\r\n                            [ngStyle]="{ \'text-align\': col.alignment, width: col.width }"\r\n                          />\r\n                          <col [ngStyle]="{ width: \'3%\' }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th\r\n                            pResizableColumn\r\n                            *ngFor="let col of columns"\r\n                            [ngStyle]="{ \'text-align\': col.alignment, width: col.width }"\r\n                          >\r\n                            {{ componentData.componentId + "." + col.field | translate }}\r\n                          </th>\r\n                          <th [ngStyle]="{ width: \'3%\' }"></th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngStyle]="{ \'text-align\': col.alignment, width: col.width }"\r\n                            [ngSwitch]="col.field"\r\n                          >\r\n                            <a *ngSwitchCase="\'originText\'" (click)="openOrigin(rowData)">{{ rowData[col.field] }}</a>\r\n\r\n                            <a *ngSwitchCase="\'workOrder\'" (click)="openWorkOrder(rowData)">{{ rowData[col.field] }}</a>\r\n\r\n                            <span *ngSwitchDefault>\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n                          </td>\r\n                          <td class="row-expand-wrapper" [pRowToggler]="rowData" [ngStyle]="{ width: \'3%\' }">\r\n                            <i\r\n                              class="fa fa-fw aw-icon aw-icon-with-border"\r\n                              [ngClass]="rowData.expand ? \'fa-minus\' : \'fa-plus\'"\r\n                              aria-hidden="true"\r\n                              pTooltip="{{ \'global.showTableRowDetails\' | translate }}"\r\n                              tooltipPosition="top"\r\n                              (click)="toggleRowDetailsVisibility(rowData)"\r\n                            ></i>\r\n                          </td>\r\n                        </tr>\r\n                        <tr *ngIf="rowData.expand" class="row-expanded">\r\n                          <td [attr.colspan]="columns.length + 1">\r\n                            <div class="column forced-backgroung">\r\n                              <div class="row">\r\n                                <div class="form-group flex--1">\r\n                                  <label class="form-label">\r\n                                    {{ getComponentName() + "." + "relatedItem" | translate }}\r\n                                  </label>\r\n\r\n                                  <div class="form-control">\r\n                                    <a *ngIf="rowData[\'isRelatedItemEnabled\']" (click)="openRelatedItem(rowData)">{{\r\n                                      rowData["relatedItem"]\r\n                                    }}</a>\r\n                                    <span *ngIf="!rowData[\'isRelatedItemEnabled\']" (click)="openRelatedItem(rowData)">{{\r\n                                      rowData["relatedItem"]\r\n                                    }}</span>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class="form-group flex--1">\r\n                                  <label class="form-label">\r\n                                    {{ getComponentName() + "." + "totalElapsed" | translate }}\r\n                                  </label>\r\n\r\n                                  <div class="form-control">\r\n                                    <input\r\n                                      type="text"\r\n                                      class="aw-input"\r\n                                      [(ngModel)]="rowData.totalElapsed"\r\n                                      [disabled]="true"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class="form-group flex--1">\r\n                                  <label class="form-label">\r\n                                    {{ getComponentName() + "." + "openingDate" | translate }}\r\n                                  </label>\r\n\r\n                                  <div class="form-control">\r\n                                    <input\r\n                                      type="text"\r\n                                      class="aw-input"\r\n                                      [(ngModel)]="rowData.openingDate"\r\n                                      [disabled]="true"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class="form-group flex--1">\r\n                                  <label class="form-label">\r\n                                    {{ getComponentName() + "." + "closingDate" | translate }}\r\n                                  </label>\r\n\r\n                                  <div class="form-control">\r\n                                    <input\r\n                                      type="text"\r\n                                      class="aw-input"\r\n                                      [(ngModel)]="rowData.closingDate"\r\n                                      [disabled]="true"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-row" [style.display]="!showAcrsEventTab ? \'none\' : \'\'">\r\n              <div class="grid-cell--12">\r\n                <div class="grid-cell grid-cell--container">\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ getComponentName() + "." + "acrs" | translate }} ({{\r\n                          acrsEventTable.list ? acrsEventTable.list.length : 0\r\n                        }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      #ptableAcrsEvent\r\n                      class="aw-table2"\r\n                      [columns]="acrsEventTableColList"\r\n                      [value]="acrsEventTable.list"\r\n                      [(selection)]="acrsEventTableSelectionList"\r\n                      [scrollable]="true"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isLoadingAcrsEventTable"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isLoadingAcrsEventTable" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="caption">\r\n                        <div\r\n                          class="aw-table-header"\r\n                          [ngClass]="{ \'rows-selected\': acrsEventTableSelectionList.length > 0 }"\r\n                        >\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="ptableAcrsEvent.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col class="aw-table-checkbox-wrapper" />\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th class="aw-table-checkbox-wrapper">\r\n                            <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                          </th>\r\n\r\n                          <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                            {{ componentData.componentId + "." + col.field | translate }}\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                          <td class="aw-table-checkbox-wrapper">\r\n                            <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                          </td>\r\n\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <span *ngSwitchCase="\'eventCode\'">\r\n                              <a (click)="openEvent(rowData)">{{ rowData[col.field] }}</a>\r\n                            </span>\r\n\r\n                            <span *ngSwitchCase="\'asset\'">\r\n                              <a (click)="openEquipment(rowData)">{{ rowData[col.field] }}</a>\r\n                            </span>\r\n\r\n                            <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab id="homeTab">\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + ".hrManagement" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <div class="grid-cell--6">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".expense" | translate }} ({{\r\n                        bidtExpenseDisplayed ? bidtExpenseDisplayed.length : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <p-table\r\n                    [resizableColumns]="true"\r\n                    #ptableExpenses\r\n                    class="aw-table2"\r\n                    [columns]="expensesTableCols"\r\n                    [value]="bidtExpenseDisplayed"\r\n                    [(selection)]="selectedExpenses"\r\n                    [scrollable]="true"\r\n                  >\r\n                    <ng-template pTemplate="emptymessage">\r\n                      <span *ngIf="!isLoadingExpenseTable"> &nbsp;</span>\r\n\r\n                      <div *ngIf="isLoadingExpenseTable" class="aw-table-loading-indicator">\r\n                        <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                        <div class="lds-hourglass"></div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="caption">\r\n                      <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedExpenses.length > 0 }">\r\n                        <div class="aw-table-global-filter">\r\n                          <label class="aw-table-global-filter-label">\r\n                            <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableExpensesGlobalFilter\r\n                            class="aw-table-global-filter-input"\r\n                            type="text"\r\n                            placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                            (input)="ptableExpenses.filterGlobal($event.target.value, \'contains\')"\r\n                          />\r\n                        </div>\r\n\r\n                        <div class="aw-table-actions">\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedExpenses.length > 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            color="warn"\r\n                            (click)="deleteExpense()"\r\n                          >\r\n                            {{ "global.delete" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedExpenses.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="editExpense()"\r\n                          >\r\n                            {{ "global.edit" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="selectedExpenses.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="openExpense()"\r\n                          >\r\n                            {{ "global.open" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedExpenses.length === 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="createExpense()"\r\n                          >\r\n                            {{ "global.add" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="colgroup" let-columns>\r\n                      <colgroup>\r\n                        <col class="aw-table-checkbox-wrapper" />\r\n                        <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="header" let-columns>\r\n                      <tr>\r\n                        <th class="aw-table-checkbox-wrapper">\r\n                          <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          {{ componentData.componentId + "." + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                      <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                        <td class="aw-table-checkbox-wrapper">\r\n                          <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                        </td>\r\n\r\n                        <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          {{ rowData[col.field] }}\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="grid-cell--6">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".holidays" | translate }} ({{\r\n                        bidtHolidayDisplayed ? bidtHolidayDisplayed.length : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <p-table\r\n                    [resizableColumns]="true"\r\n                    #ptableHolidays\r\n                    class="aw-table2"\r\n                    [columns]="holidaysTableCols"\r\n                    [value]="bidtHolidayDisplayed"\r\n                    [(selection)]="selectedHolidays"\r\n                    [scrollable]="true"\r\n                  >\r\n                    <ng-template pTemplate="emptymessage">\r\n                      <span *ngIf="!isLoadingHolidaysTable"> &nbsp;</span>\r\n\r\n                      <div *ngIf="isLoadingHolidaysTable" class="aw-table-loading-indicator">\r\n                        <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                        <div class="lds-hourglass"></div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="caption">\r\n                      <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedHolidays.length > 0 }">\r\n                        <div class="aw-table-global-filter">\r\n                          <label class="aw-table-global-filter-label">\r\n                            <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableHolidaysGlobalFilter\r\n                            class="aw-table-global-filter-input"\r\n                            type="text"\r\n                            placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                            (input)="ptableHolidays.filterGlobal($event.target.value, \'contains\')"\r\n                          />\r\n                        </div>\r\n\r\n                        <div class="aw-table-actions">\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedHolidays.length > 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            color="warn"\r\n                            (click)="deleteHoliday()"\r\n                          >\r\n                            {{ "global.delete" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedHolidays.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="editHoliday()"\r\n                          >\r\n                            {{ "global.edit" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="selectedHolidays.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="openHoliday()"\r\n                          >\r\n                            {{ "global.open" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedHolidays.length === 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="createHoliday()"\r\n                          >\r\n                            {{ "global.add" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="colgroup" let-columns>\r\n                      <colgroup>\r\n                        <col class="aw-table-checkbox-wrapper" />\r\n                        <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="header" let-columns>\r\n                      <tr>\r\n                        <th class="aw-table-checkbox-wrapper">\r\n                          <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          {{ componentData.componentId + "." + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                      <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                        <td class="aw-table-checkbox-wrapper">\r\n                          <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                        </td>\r\n\r\n                        <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          {{ rowData[col.field] }}\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="grid-row">\r\n            <div class="grid-cell--6">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".absence" | translate }} ({{\r\n                        bidtAbsenceDisplayed ? bidtAbsenceDisplayed.length : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <p-table\r\n                    [resizableColumns]="true"\r\n                    #ptableAbsence\r\n                    class="aw-table2"\r\n                    [columns]="absencesTableCols"\r\n                    [value]="bidtAbsenceDisplayed"\r\n                    [(selection)]="selectedAbsences"\r\n                    [scrollable]="true"\r\n                  >\r\n                    <ng-template pTemplate="emptymessage">\r\n                      <span *ngIf="!isLoadingAbsenceTable"> &nbsp;</span>\r\n\r\n                      <div *ngIf="isLoadingAbsenceTable" class="aw-table-loading-indicator">\r\n                        <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                        <div class="lds-hourglass"></div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="caption">\r\n                      <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedAbsences.length > 0 }">\r\n                        <div class="aw-table-global-filter">\r\n                          <label class="aw-table-global-filter-label">\r\n                            <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableAbsenceGlobalFilter\r\n                            class="aw-table-global-filter-input"\r\n                            type="text"\r\n                            placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                            (input)="ptableAbsence.filterGlobal($event.target.value, \'contains\')"\r\n                          />\r\n                        </div>\r\n\r\n                        <div class="aw-table-actions">\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedAbsences.length > 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            color="warn"\r\n                            (click)="deleteAbsence()"\r\n                          >\r\n                            {{ "global.delete" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedAbsences.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="editAbsence()"\r\n                          >\r\n                            {{ "global.edit" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="selectedAbsences.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="openAbsence()"\r\n                          >\r\n                            {{ "global.open" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedAbsences.length === 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="createAbsence()"\r\n                          >\r\n                            {{ "global.add" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="colgroup" let-columns>\r\n                      <colgroup>\r\n                        <col class="aw-table-checkbox-wrapper" />\r\n                        <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="header" let-columns>\r\n                      <tr>\r\n                        <th class="aw-table-checkbox-wrapper">\r\n                          <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          {{ componentData.componentId + "." + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                      <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                        <td class="aw-table-checkbox-wrapper">\r\n                          <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                        </td>\r\n\r\n                        <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          {{ rowData[col.field] }}\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell--6">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".medicalExamination" | translate }} ({{\r\n                        bidtMedicalExaminationDisplayed ? bidtMedicalExaminationDisplayed.length : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <p-table\r\n                    [resizableColumns]="true"\r\n                    #ptableMedicalExaminations\r\n                    class="aw-table2"\r\n                    [columns]="medicalExaminationsTableCols"\r\n                    [value]="bidtMedicalExaminationDisplayed"\r\n                    [(selection)]="selectedMedicalExaminations"\r\n                    [scrollable]="true"\r\n                  >\r\n                    <ng-template pTemplate="emptymessage">\r\n                      <span *ngIf="!isLoadingMedicalExaminationTable"> &nbsp;</span>\r\n\r\n                      <div *ngIf="isLoadingMedicalExaminationTable" class="aw-table-loading-indicator">\r\n                        <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                        <div class="lds-hourglass"></div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="caption">\r\n                      <div\r\n                        class="aw-table-header"\r\n                        [ngClass]="{ \'rows-selected\': selectedMedicalExaminations.length > 0 }"\r\n                      >\r\n                        <div class="aw-table-global-filter">\r\n                          <label class="aw-table-global-filter-label">\r\n                            <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableMedicalExaminationsGlobalFilter\r\n                            class="aw-table-global-filter-input"\r\n                            type="text"\r\n                            placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                            (input)="ptableMedicalExaminations.filterGlobal($event.target.value, \'contains\')"\r\n                          />\r\n                        </div>\r\n\r\n                        <div class="aw-table-actions">\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedMedicalExaminations.length > 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            color="warn"\r\n                            (click)="deleteMedicalExamination()"\r\n                          >\r\n                            {{ "global.delete" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedMedicalExaminations.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="editMedicalExamination()"\r\n                          >\r\n                            {{ "global.edit" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="selectedMedicalExaminations.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="openMedicalExamination()"\r\n                          >\r\n                            {{ "global.open" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedMedicalExaminations.length === 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="createMedicalExamination()"\r\n                          >\r\n                            {{ "global.add" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="colgroup" let-columns>\r\n                      <colgroup>\r\n                        <col class="aw-table-checkbox-wrapper" />\r\n                        <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="header" let-columns>\r\n                      <tr>\r\n                        <th class="aw-table-checkbox-wrapper">\r\n                          <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          {{ componentData.componentId + "." + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                      <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                        <td class="aw-table-checkbox-wrapper">\r\n                          <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                        </td>\r\n\r\n                        <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          {{ rowData[col.field] }}\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-dialog-search-employee\r\n    *ngIf="showSuperiorPopup"\r\n    [(display)]="!!showSuperiorPopup"\r\n    [employee-name]="superiorFormData.employeeLastName"\r\n    (onSelected)="setSelectedSuperior($event)"\r\n  ></aw-dialog-search-employee>\r\n\r\n  <aw-absence-popup-form\r\n    [isReadOnlyForm]="isReadOnlyAbsenceDialog"\r\n    *ngIf="showAbsencePopup"\r\n    [(display)]="showAbsencePopup"\r\n    [component-data]="dataAbsence"\r\n    (onValidated)="saveAbsence($event)"\r\n  ></aw-absence-popup-form>\r\n\r\n  <aw-evaluation-popup-form\r\n    [isReadOnlyForm]="isReadOnlyEvaluationDialog"\r\n    *ngIf="showEvaluationPopup"\r\n    [(display)]="showEvaluationPopup"\r\n    [component-data]="dataEvaluation"\r\n    (onValidated)="saveEvaluation($event)"\r\n  ></aw-evaluation-popup-form>\r\n\r\n  <aw-expense-popup-form\r\n    [isReadOnlyForm]="isReadOnlyExpenseDialog"\r\n    *ngIf="showExpensePopup"\r\n    [(display)]="showExpensePopup"\r\n    [component-data]="dataExpense"\r\n    (onValidated)="saveExpense($event)"\r\n  ></aw-expense-popup-form>\r\n\r\n  <aw-holidays-popup-form\r\n    [isReadOnlyForm]="isReadOnlyHolidayDialog"\r\n    *ngIf="showHolidayPopup"\r\n    [(display)]="showHolidayPopup"\r\n    [component-data]="dataHoliday"\r\n    (onValidated)="saveHoliday($event)"\r\n  ></aw-holidays-popup-form>\r\n\r\n  <aw-hourly-costs-popup-form\r\n    [isReadOnlyForm]="isReadOnlyHourlyCostDialog"\r\n    *ngIf="showHourlyCostPopup"\r\n    [(display)]="showHourlyCostPopup"\r\n    [component-data]="dataHourlyCost"\r\n    (onValidated)="saveHourlyCost($event)"\r\n  ></aw-hourly-costs-popup-form>\r\n\r\n  <aw-medical-examination-popup-form\r\n    [isReadOnlyForm]="isReadOnlyMedicalExaminationDialog"\r\n    *ngIf="showMedicalExaminationPopup"\r\n    [(display)]="showMedicalExaminationPopup"\r\n    [component-data]="dataMedicalExamination"\r\n    (onValidated)="saveMedicalExamination($event)"\r\n  ></aw-medical-examination-popup-form>\r\n\r\n  <aw-qualification-popup-form\r\n    [isReadOnlyForm]="isReadOnlyQualificationDialog"\r\n    *ngIf="showQualificationPopup"\r\n    [(display)]="showQualificationPopup"\r\n    [component-data]="dataQualification"\r\n    (onValidated)="saveQualification($event)"\r\n  ></aw-qualification-popup-form>\r\n\r\n  <aw-training-popup-form\r\n    [isReadOnlyForm]="isReadOnlyTrainingDialog"\r\n    *ngIf="showTrainingPopup"\r\n    [(display)]="showTrainingPopup"\r\n    [component-data]="dataTraining"\r\n    (onValidated)="saveTraining($event)"\r\n  ></aw-training-popup-form>\r\n\r\n  <aw-document-popup-form\r\n    *ngIf="showDocumentDialog"\r\n    [document]="currentDocument"\r\n    [(display)]="showDocumentDialog"\r\n    [isReadOnlyForm]="isReadOnlyDocumentDialog"\r\n    (onValidated)="updateDocument($event)"\r\n  ></aw-document-popup-form>\r\n\r\n  <aw-document-url-popup-form\r\n    *ngIf="showDocumentUrlDialog"\r\n    [document]="currentDocument"\r\n    [(display)]="showDocumentUrlDialog"\r\n    [isReadOnlyForm]="isReadOnlyDocumentDialog"\r\n    (onValidated)="updateDocumentUrl($event)"\r\n  ></aw-document-url-popup-form>\r\n\r\n  <p-overlayPanel\r\n    #workFilters\r\n    class="aw-overlay"\r\n    (onShow)="workFiltersVisible = true"\r\n    (onHide)="workFiltersVisible = false"\r\n    [dismissable]="false"\r\n  >\r\n    <aw-work-flight-table-filters\r\n      [searchCriteria]="searchCriteriaWork"\r\n      (onFilter)="workFilters.hide(); workFiltersVisible = false; filterWorkWithCriteria()"\r\n      (onReset)="resetWorkTableFilters()"\r\n    >\r\n    </aw-work-flight-table-filters>\r\n  </p-overlayPanel>\r\n\r\n  <p-overlayPanel\r\n    #flightFilters\r\n    class="aw-overlay"\r\n    (onShow)="flightFiltersVisible = true"\r\n    (onHide)="flightFiltersVisible = false"\r\n    [dismissable]="false"\r\n  >\r\n    <aw-work-flight-table-filters\r\n      [searchCriteria]="searchCriteriaFlight"\r\n      (onFilter)="flightFilters.hide(); flightFiltersVisible = false; filterFlightWithCriteria()"\r\n      (onReset)="resetFlightTableFilters()"\r\n    >\r\n    </aw-work-flight-table-filters>\r\n  </p-overlayPanel>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/employee-form.component.scss':
      /*!*********************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/employee-form.component.scss ***!
  \*********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .custom-calendar-margin {\n  margin-right: 6em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9odW1hbi1yZXNvdXJjZXMvZW1wbG95ZWUtZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcaHVtYW4tcmVzb3VyY2VzXFxlbXBsb3llZS1mb3JtXFxlbXBsb3llZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2h1bWFuLXJlc291cmNlcy9lbXBsb3llZS1mb3JtL2VtcGxveWVlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmN1c3RvbS1jYWxlbmRhci1tYXJnaW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2ZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/employee-form.component.ts':
      /*!*******************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/employee-form.component.ts ***!
  \*******************************************************************************/
      /*! exports provided: EmployeeFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'EmployeeFormComponent', function() {
          return EmployeeFormComponent;
        });
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
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/components/component-sidebar/page-toc.service */ './src/app/shared/components/component-sidebar/page-toc.service.ts'
        );
        /* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/components/dynamic-attributes/dynamic-attributes.service */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.service.ts'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bido_notification_type_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/constants/bido-notification-type-constants */ './src/app/shared/constants/bido-notification-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/services/export.service */ './src/app/shared/services/export.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/services/input-validation.service */ './src/app/shared/services/input-validation.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_page_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../shared/services/page.service */ './src/app/shared/services/page.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../../shared/utils/bido-equipment-utils */ './src/app/shared/utils/bido-equipment-utils.ts'
        );
        /* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ../../../shared/utils/file-utils */ './src/app/shared/utils/file-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _employee_form_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ./employee-form.service */ './src/app/main/human-resources/employee-form/employee-form.service.ts'
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

        var EmployeeFormComponent = /** @class */ (function(_super) {
          __extends(EmployeeFormComponent, _super);
          function EmployeeFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            pageTocService,
            dynamicAttributesService,
            inputValidationService,
            sessionService,
            translateService,
            confirmationService,
            employeeFormService,
            propertiesService,
            pageService,
            dateService,
            exportService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                pageTocService
              ) || this;
            _this.dynamicAttributesService = dynamicAttributesService;
            _this.inputValidationService = inputValidationService;
            _this.sessionService = sessionService;
            _this.translateService = translateService;
            _this.confirmationService = confirmationService;
            _this.employeeFormService = employeeFormService;
            _this.propertiesService = propertiesService;
            _this.pageService = pageService;
            _this.dateService = dateService;
            _this.exportService = exportService;
            _this.registerPageTocEntrySelectedObservable();
            _this.searchCriteriaWork = {};
            _this.searchCriteriaFlight = {};
            _this.showMedicalExaminationPopup = false;
            _this.selectedContractTypeName = '';
            _this.selectedSalaryCurrency = '';
            _this.selectedWorkTemplateName = undefined;
            _this.companies = [];
            _this.countries = [];
            _this.warehouses = [];
            _this.sites = [];
            _this.periods = [];
            _this.contractNames = [];
            _this.contractTypes = [];
            _this.salaryDevises = [];
            _this.expenseTypes = [];
            _this.workTemplatesTableCols = [];
            _this.hourlyCostsTableCols = [];
            _this.qualificationsTableCols = [];
            _this.licensesTableCols = [];
            _this.trainingsTableCols = [];
            _this.evaluationsTableCols = [];
            _this.absencesTableCols = [];
            _this.holidaysTableCols = [];
            _this.expensesTableCols = [];
            _this.medicalExaminationsTableCols = [];
            _this.documentsTableCols = [];
            _this.categoryLevelTableData = [];
            _this.siteDTO = {};
            _this.employeeFormData = {};
            _this.superiorFormData = {};
            _this.siteFormData = {};
            _this.contractFormData = {};
            _this.salaryFormData = {};
            _this.laborTemplateFormData = {};
            _this.licenseFormData = {};
            _this.isFormValidated = false;
            _this.employeeName = '';
            _this.employeeDetails = {};
            _this.selectedWorkTemplates = [];
            _this.selectedHourlyCosts = [];
            _this.selectedQualifications = [];
            _this.selectedLicenses = [];
            _this.selectedTrainings = [];
            _this.selectedEvaluations = [];
            _this.selectedAbsences = [];
            _this.selectedHolidays = [];
            _this.selectedExpenses = [];
            _this.selectedMedicalExaminations = [];
            _this.selectedDocuments = [];
            _this.bidtDocumentDisplayed = [];
            _this.bidtDocumentAddedList = [];
            _this.bidtDocumentUpdatedList = [];
            _this.bidtDocumentDeletedList = [];
            _this.bidtHourlyCostDisplayed = [];
            _this.currentHourlyCosts = {};
            _this.bidtQualifEmployeeDisplayed = [];
            _this.bidtTrainingDisplayed = [];
            _this.bidtEvaluationDisplayed = [];
            _this.bidtAbsenceDisplayed = [];
            _this.bidtHolidayDisplayed = [];
            _this.bidtExpenseDisplayed = [];
            _this.bidtMedicalExaminationDisplayed = [];
            _this.documentCategories = [];
            _this.worksDisplayed = [];
            _this.flightsDisplayed = [];
            _this.works = [];
            _this.flights = [];
            _this.categoryTypes = [];
            _this.categoryLevels = [];
            _this.holidayStatusList = [];
            _this.absenceTypes = [];
            _this.evaluationTypes = [];
            _this.requestedByList = [];
            _this.tabWorkTemplateId = 'work-template';
            _this.tabHourlyCostsId = 'hoyrly-costs';
            _this.tabQualificationId = 'qualification';
            _this.tabLicenseId = 'license';
            _this.tabTrainingId = 'training';
            _this.tabEvaluationId = 'evaluation';
            _this.tabAbsenceId = 'absence';
            _this.tabHolidaysId = 'holidays';
            _this.tabExpenseId = 'expense';
            _this.tabMedicalExaminationId = 'medical-examination';
            _this.tabDocumentsId = 'documents';
            _this.currentTabId = _this.tabWorkTemplateId;
            _this.workFiltersVisible = false;
            _this.flightFiltersVisible = false;
            _this.acrsEventTable = { list: [], moreResults: false };
            _this.acrsEventTableSelectionList = [];
            _this.eventStatusList = [];
            _this.loadCountries();
            _this.loadContractNames();
            _this.loadContractTypes();
            _this.loadSalaryDevices();
            _this.loadWorktemplateNames();
            _this.loadExpenseType();
            _this.loadHolidayStatus();
            _this.loadAbsenceType();
            _this.loadEvaluationType();
            _this.loadRequestedbyList();
            _this.loadEventStatus();
            // Fill table column information
            _this.initTableColumnField();
            _this.registerPageTocEntryObservable();
            _this.initQualificationRenewalTableDataSource();
            _this.initQualificationRenewalDates();
            return _this;
          }
          EmployeeFormComponent_1 = EmployeeFormComponent;
          EmployeeFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
              .HR_EMPLOYEE_FORM;
          };
          EmployeeFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            if (this.componentData) {
              this.updateOpenMode(this.componentData.openMode);
              if (!this.isCreateOpenMode && this.componentData.objectId) {
                var employee = this.serializationService.deserialize(this.componentData.objectId);
                this.employeeName = employee.employeeFirstName + ' ' + employee.employeeLastName;
              }
              var context = this.isCreateOpenMode ? 'tab.createMode' : this.employeeName;
              this.displayComponentContext(context, this.isCreateOpenMode);
              this.loadEmployee();
            }
            this.loadCategories();
          };
          EmployeeFormComponent.prototype.initQualificationRenewalTableDataSource = function() {
            this.qualificationRenewalTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_7__[
              'TableDataSource'
            ]({
              allowMultiSelect: false,
              enableSelection: false,
              columns: [
                {
                  field: 'qualification',
                  translateKey: this.getTranslateKey('qualification')
                },
                {
                  field: 'worksNumber',
                  translateKey: this.getTranslateKey('worksNumber')
                },
                {
                  field: 'workingHoursNumber',
                  translateKey: this.getTranslateKey('workingHoursNumber')
                },
                {
                  field: 'theoreticalHoursNumber',
                  translateKey: this.getTranslateKey('theoreticalHoursNumber')
                }
              ],
              data: []
            });
          };
          EmployeeFormComponent.prototype.loadCategories = function() {
            var _this = this;
            this.employeeFormService
              .findDocumentCategories(EmployeeFormComponent_1.DOCUMENT_CATEGORY_ID)
              .subscribe(function(data) {
                _this.documentCategories = data;
              });
          };
          EmployeeFormComponent.prototype.createContentTable = function() {
            var _this = this;
            var mainDataKey = 'page.mainData';
            var generalKey = 'global.general';
            var qualificationKey = this.getTranslateKey('qualification');
            var qualificationRenewalKey = this.getTranslateKey('qualificationRenewal');
            var licenseKey = this.getTranslateKey('license');
            var worksKey = this.getTranslateKey('works');
            var acrsKey = this.getTranslateKey('acrs');
            var flightsKey = this.getTranslateKey('flights');
            var trainingKey = this.getTranslateKey('training');
            var workTemplateKey = this.getTranslateKey('workTemplate');
            var hourlyCostsKey = this.getTranslateKey('hourlyCosts');
            var evaluationKey = this.getTranslateKey('evaluation');
            var expenseKey = this.getTranslateKey('expense');
            var absenceKey = this.getTranslateKey('absence');
            var holidaysKey = this.getTranslateKey('holidays');
            var medicalExaminationKey = this.getTranslateKey('medicalExamination');
            var documentsKey = this.getTranslateKey('documents');
            this.translateService
              .get([
                mainDataKey,
                generalKey,
                qualificationKey,
                qualificationRenewalKey,
                licenseKey,
                worksKey,
                acrsKey,
                flightsKey,
                trainingKey,
                workTemplateKey,
                hourlyCostsKey,
                evaluationKey,
                expenseKey,
                absenceKey,
                holidaysKey,
                medicalExaminationKey,
                documentsKey
              ])
              .subscribe(function(results) {
                var mainDataLabel = !!results ? results[mainDataKey] : 'Main Information';
                var generalLabel = !!results ? results[generalKey] : 'Additional Information';
                var qualificationLabel = !!results ? results[qualificationKey] : 'Qualification';
                var qualificationRenewalLabel = !!results ? results[qualificationRenewalKey] : 'Qualification Renewal';
                var licenseLabel = !!results ? results[licenseKey] : 'License';
                var worksLabel = !!results ? results[worksKey] : 'Works';
                var acrsLabel = !!results ? results[acrsKey] : 'ACRS';
                var flightsLabel = !!results ? results[flightsKey] : 'Flights';
                var trainingLabel = !!results ? results[trainingKey] : 'Training';
                var workTemplateLabel = !!results ? results[workTemplateKey] : 'Work Template';
                var hourlyCostsLabel = !!results ? results[hourlyCostsKey] : 'Hourly Costs';
                var evaluationLabel = !!results ? results[evaluationKey] : 'Evaluation';
                var expenseLabel = !!results ? results[expenseKey] : 'Expense';
                var absenceLabel = !!results ? results[absenceKey] : 'Absence';
                var holidaysLabel = !!results ? results[holidaysKey] : 'Holidays';
                var medicalExaminationLabel = !!results ? results[medicalExaminationKey] : 'Medical Examination';
                var documentsLabel = !!results ? results[documentsKey] : 'Documents';
                _this.toc = [
                  {
                    id: 'mainDataAnchor',
                    anchor: _this.mainDataAnchor,
                    label: mainDataLabel
                  },
                  {
                    id: 'generalDataAnchor',
                    anchor: _this.generalDataAnchor,
                    label: generalLabel
                  },
                  {
                    id: 'qualificationDataAnchor',
                    anchor: _this.qualificationDataAnchor,
                    label: qualificationLabel
                  },
                  {
                    id: 'qualificationRenewalAnchor',
                    anchor: _this.qualificationRenewalAnchor,
                    label: qualificationRenewalLabel
                  },
                  {
                    id: 'licenseDataAnchor',
                    anchor: _this.licenseDataAnchor,
                    label: licenseLabel
                  }
                ];
                if (_this.showWorkTab) {
                  _this.toc.push({
                    id: 'workDataAnchor',
                    anchor: _this.workDataAnchor,
                    label: worksLabel
                  });
                }
                if (_this.showAcrsEventTab) {
                  _this.toc.push({
                    id: 'acrsEventAnchor',
                    anchor: _this.acrsEventAnchor,
                    label: acrsLabel
                  });
                }
                if (_this.showFlightTab) {
                  _this.toc.push({
                    id: 'flightDataAnchor',
                    anchor: _this.flightDataAnchor,
                    label: flightsLabel
                  });
                }
                var tocTemp = [
                  {
                    id: 'trainingDataAnchor',
                    anchor: _this.trainingDataAnchor,
                    label: trainingLabel
                  },
                  {
                    id: 'workTemplateDataAnchor',
                    anchor: _this.workTemplateDataAnchor,
                    label: workTemplateLabel
                  },
                  {
                    id: 'hourlyCostDataAnchor',
                    anchor: _this.hourlyCostDataAnchor,
                    label: hourlyCostsLabel
                  },
                  {
                    id: 'evaluationDataAnchor',
                    anchor: _this.evaluationDataAnchor,
                    label: evaluationLabel
                  },
                  {
                    id: 'expenseDataAnchor',
                    anchor: _this.expenseDataAnchor,
                    label: expenseLabel
                  },
                  {
                    id: 'absenceDataAnchor',
                    anchor: _this.absenceDataAnchor,
                    label: absenceLabel
                  },
                  {
                    id: 'holidayDataAnchor',
                    anchor: _this.holidayDataAnchor,
                    label: holidaysLabel
                  },
                  {
                    id: 'medicalExaminationDataAnchor',
                    anchor: _this.medicalExaminationDataAnchor,
                    label: medicalExaminationLabel
                  },
                  {
                    id: 'documentDataAnchor',
                    anchor: _this.documentDataAnchor,
                    label: documentsLabel
                  }
                ];
                _this.toc = _this.toc.concat(tocTemp);
                setTimeout(function() {
                  _this.setSelectedAnchor('mainDataAnchor');
                });
              });
          };
          EmployeeFormComponent.prototype.registerPageTocEntrySelectedObservable = function() {
            var _this = this;
            this.pageTocService.pageTocEntrySelected$
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['takeUntil'])(this.unsubscribe))
              .subscribe(function(pageTocEntrySelected) {
                _this.selectedAnchor = pageTocEntrySelected;
              });
          };
          EmployeeFormComponent.prototype.isSelectedAnchor = function(anchorId) {
            return anchorId === this.selectedAnchor;
          };
          EmployeeFormComponent.prototype.setSelectedAnchor = function(anchorId) {
            this.pageTocService.setAnchorSelected(anchorId);
            this.selectedAnchor = anchorId;
          };
          EmployeeFormComponent.prototype.loadExpenseType = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__['GenericPropertyConstants']
                  .HR_EXPENSE_TYPE_MAP
              )
              .subscribe(function(results) {
                _this.expenseTypes = results;
              });
          };
          EmployeeFormComponent.prototype.loadHolidayStatus = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__['GenericPropertyConstants']
                  .HR_ABSENCE_STATUS_MAP
              )
              .subscribe(function(results) {
                _this.holidayStatusList = results;
              });
          };
          EmployeeFormComponent.prototype.loadAbsenceType = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__['GenericPropertyConstants']
                  .HR_ABSENCE_TYPE_MAP
              )
              .subscribe(function(results) {
                _this.absenceTypes = results;
              });
          };
          EmployeeFormComponent.prototype.loadEvaluationType = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__['GenericPropertyConstants']
                  .HR_EVALUATION_TYPE_MAP
              )
              .subscribe(function(results) {
                _this.evaluationTypes = results;
              });
          };
          EmployeeFormComponent.prototype.loadRequestedbyList = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__['GenericPropertyConstants']
                  .HR_TRAINING_ASKED_BY_MAP
              )
              .subscribe(function(results) {
                _this.requestedByList = JSON.parse(JSON.stringify(results));
              });
          };
          EmployeeFormComponent.prototype.getTypeName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
              .HR_EMPLOYEE_FORM;
          };
          EmployeeFormComponent.prototype.showCategory = function(index) {
            return this.categoryTypes[index] && this.categoryTypes[index].label;
          };
          EmployeeFormComponent.prototype.showHeaderText = function(col) {
            var headerValue = col.replace('level', '');
            var headerTextObj =
              this.categoryLevels &&
              this.categoryLevels.filter(function(level) {
                return level.value === headerValue;
              })[0];
            return headerTextObj && headerTextObj.label;
          };
          EmployeeFormComponent.prototype.initTableColumnField = function() {
            var _this = this;
            this.hourlyCostsTableCols = [
              { field: 'costType', alignment: 'left' },
              { field: 'costText', alignment: 'left' }
            ];
            this.qualificationsTableCols = [
              { field: 'qualificationType', alignment: 'left' },
              { field: 'qualificationTitle', alignment: 'left' },
              { field: 'qualifEmployeeInstitution', alignment: 'left' },
              { field: 'qualifEmployeeStartDate', alignment: 'left' },
              { field: 'qualifEmployeeEndDate', alignment: 'left' },
              { field: 'qualifOngoing', alignment: 'left' }
            ];
            var getCategoryTypeMap = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__['GenericPropertyConstants']
                .HR_CATEGORY_TYPE_MAP
            );
            var getCategorylevelMap = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__['GenericPropertyConstants']
                .HR_CATEGORY_LEVEL_MAP
            );
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__['forkJoin'])([getCategoryTypeMap, getCategorylevelMap]).subscribe(
              function(results) {
                if (results[1] !== null && results[1] !== undefined) {
                  results[1].forEach(function(level) {
                    _this.licensesTableCols.push({ field: 'level' + level.value, alignment: 'center' });
                  });
                  _this.categoryLevels = results[1];
                }
                // reset table checkboxes
                if (results[0] !== null && results[0] !== undefined) {
                  _this.categoryTypes = results[0];
                  results[0].forEach(function(categoryType) {
                    var obj = {};
                    _this.licensesTableCols.forEach(function(col) {
                      obj[col.field] = false;
                    });
                    obj.categoryType = categoryType.value;
                    _this.categoryLevelTableData.push(obj);
                  });
                }
              }
            );
            this.trainingsTableCols = [
              { field: 'trainingName', alignment: 'left' },
              { field: 'trainingStartDate', alignment: 'left' },
              { field: 'trainingEndDate', alignment: 'left' },
              { field: 'trainingPerformed', alignment: 'left' },
              { field: 'trainingAskedBy', alignment: 'left' },
              { field: 'trainingInstructor', alignment: 'left' },
              { field: 'trainingCenter', alignment: 'left' },
              { field: 'trainingComment', alignment: 'left' }
            ];
            this.evaluationsTableCols = [
              { field: 'evaluationDate', alignment: 'left' },
              { field: 'evaluationType', alignment: 'left' },
              { field: 'evaluator', alignment: 'left' },
              { field: 'evaluationComment', alignment: 'left' }
            ];
            this.absencesTableCols = [
              { field: 'absenceStartDate', alignment: 'left' },
              { field: 'absenceEndDate', alignment: 'left' },
              { field: 'absenceType', alignment: 'left' },
              { field: 'absenceDescription', alignment: 'left' }
            ];
            this.holidaysTableCols = [
              { field: 'holidayStartDate', alignment: 'left' },
              { field: 'holidayEndDate', alignment: 'left' },
              { field: 'holidayStatus', alignment: 'left' },
              { field: 'holidayValidator', alignment: 'left' }
            ];
            this.expensesTableCols = [
              { field: 'expenseDate', alignment: 'left' },
              { field: 'expenseType', alignment: 'left' },
              { field: 'expenseValue', alignment: 'left' },
              { field: 'expenseDescription', alignment: 'left' }
            ];
            this.medicalExaminationsTableCols = [
              { field: 'visitDate', alignment: 'left' },
              { field: 'visitExpiration', alignment: 'left' },
              { field: 'visitComment', alignment: 'left' }
            ];
            this.documentsTableCols = [
              { field: 'documentName', alignment: 'left' },
              { field: 'documentCategory', alignment: 'left' },
              { field: 'documentType', alignment: 'left' },
              { field: 'documentContent', alignment: 'left' },
              { field: 'documentPublicationDate', alignment: 'left' }
            ];
            this.worksTableCols = [
              { field: 'projectNumber', alignment: 'left', width: '10%' },
              { field: 'projectAsset', alignment: 'left', width: '22%' },
              { field: 'workOrder', alignment: 'left', width: '10%' },
              { field: 'originText', alignment: 'left', width: '17%' },
              { field: 'type', alignment: 'left', width: '10%' },
              { field: 'qualif', alignment: 'left', width: '7%' },
              { field: 'description', alignment: 'left', width: '25%' },
              { field: 'statusText', alignment: 'left', width: '6%' }
            ];
            this.flightsTableCols = [
              { field: 'assetText', alignment: 'left', width: '28%' },
              { field: 'chronoNumber', alignment: 'left', width: '12%' },
              { field: 'missionCode', alignment: 'left', width: '12%' },
              { field: 'flightType', alignment: 'left', width: '12%' },
              { field: 'startDateText', alignment: 'left', width: '12%' },
              { field: 'endDateText', alignment: 'left', width: '12%' },
              { field: 'flightStatus', alignment: 'left', width: '12%' }
              // { field: 'missionNumber', alignment: 'left' },
              // { field: 'missionDepartureLocation', alignment: 'left' },
              // { field: 'missionArrivalLocation', alignment: 'left' },
              // { field: 'duration', alignment: 'left' },
              // { field: 'ifrDuration', alignment: 'left' },
              // { field: 'cycleNumber', alignment: 'left' },
              // { field: 'engineStartDateText', alignment: 'left' },
              // { field: 'engineStopDateText', alignment: 'left' },
              // { field: 'pilot', alignment: 'left' },
              // { field: 'copilot', alignment: 'left' }
            ];
            this.acrsEventTableColList = [
              { field: 'eventCode', alignment: 'left', width: '15%' },
              { field: 'eventDate', alignment: 'left', width: '10%' },
              { field: 'asset', alignment: 'left', width: '25%' },
              { field: 'eventDescription', alignment: 'left', width: '40%' },
              { field: 'eventStatus', alignment: 'left', width: '10%' }
            ];
          };
          EmployeeFormComponent.prototype.checkValidation = function() {
            var isPageValid = false;
            if (
              !!this.employeeFormData.employeeFirstName &&
              !!this.employeeFormData.employeeLastName &&
              !!this.selectedCompany &&
              !!this.employeeFormData.bidtSiteId &&
              !!this.selectedContractEmployeeStartDate &&
              !!this.selectedContractName &&
              !!this.salaryFormData.salaryValue &&
              !!this.salaryFormData.salaryPayPeriod
            ) {
              isPageValid = true;
            }
            return isPageValid;
          };
          EmployeeFormComponent.prototype.loadCountries = function() {
            var _this = this;
            this.propertiesService.getCountries().subscribe(function(results) {
              _this.countries = results;
            });
          };
          EmployeeFormComponent.prototype.loadContractNames = function() {
            var _this = this;
            this.employeeFormService.findAllContractNames({}).subscribe(function(results) {
              _this.contractNameDTOList = results;
              _this.contractNames = _this.contractNameDTOList.map(function(element) {
                var labelValue = {
                  label: '',
                  value: ''
                };
                if (element.id !== null && element.id !== undefined) {
                  labelValue = {
                    label: element.contractName || '',
                    value: element.id.toString() || ''
                  };
                }
                return labelValue;
              });
            });
          };
          EmployeeFormComponent.prototype.loadContractTypes = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__['GenericPropertyConstants']
                  .HR_CONTRACT_TYPE_MAP
              )
              .subscribe(function(results) {
                _this.contractTypes = results;
              });
          };
          EmployeeFormComponent.prototype.loadContractTypesOnChange = function() {
            var _this = this;
            if (this.selectedContractName) {
              var selectedContractNameObj_1 = this.contractNameDTOList.filter(function(name) {
                if (name.id !== null && name.id !== undefined) {
                  return name.id.toString() === _this.selectedContractName;
                }
                return false;
              })[0];
              var contractName =
                this.contractTypes &&
                this.contractTypes.filter(function(contractType) {
                  return contractType.value === (selectedContractNameObj_1 && selectedContractNameObj_1.contractType);
                })[0];
              this.selectedContractTypeName = contractName && contractName.label;
            } else {
              this.selectedContractTypeName = '';
            }
          };
          EmployeeFormComponent.prototype.loadSalaryDevices = function() {
            var _this = this;
            var getCurrenciesObservable = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__['GenericPropertyConstants']
                .CURRENCY_MAP
            );
            var defaultCurrencyObservable = this.employeeFormService.getLocalCurrency();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__['forkJoin'])([
              defaultCurrencyObservable,
              getCurrenciesObservable
            ]).subscribe(function(results) {
              _this.salaryDevises = results[1];
              var selectedCurrency =
                _this.salaryDevises &&
                _this.salaryDevises.filter(function(currency) {
                  return currency.label === results[0];
                })[0];
              _this.salaryFormData.salaryDevise = selectedCurrency.value;
              _this.selectedSalaryCurrency = selectedCurrency && selectedCurrency.label;
            });
          };
          EmployeeFormComponent.prototype.displaySalaryCurrency = function(salaryDeviseId) {
            if (salaryDeviseId !== null && salaryDeviseId !== undefined) {
              var selectedCurrency =
                this.salaryDevises &&
                this.salaryDevises.filter(function(currency) {
                  return currency.value === salaryDeviseId;
                })[0];
              this.selectedSalaryCurrency = selectedCurrency && selectedCurrency.label;
            }
          };
          EmployeeFormComponent.prototype.loadSites = function() {
            var _this = this;
            this.sites = [];
            if (
              this.selectedCompany !== null &&
              this.selectedCompany !== undefined &&
              this.siteDTOList !== null &&
              this.siteDTOList !== undefined
            ) {
              this.siteDTOList.forEach(function(element) {
                if (
                  element.bidtCompanyId !== null &&
                  element.bidtCompanyId !== undefined &&
                  element.bidtCompanyId.toString() === _this.selectedCompany
                ) {
                  var labelValue = {
                    label: element.siteCode + ' - ' + element.siteName,
                    value: element.siteId
                  };
                  _this.sites.push(labelValue);
                }
              });
            }
          };
          EmployeeFormComponent.prototype.loadWarehousesBysite = function() {
            var _this = this;
            if (this.employeeFormData.bidtSiteId) {
              this.warehouses = [];
              var siteId = this.employeeFormData.bidtSiteId.toString();
              this.employeeFormService.findWarehousesBySite(siteId).subscribe(function(results) {
                if (!!results) {
                  _this.warehouses = results.map(function(bidtWarehouseDTO) {
                    return {
                      label: bidtWarehouseDTO.whName,
                      value: bidtWarehouseDTO.wareHouseId
                    };
                  });
                }
              });
            }
          };
          EmployeeFormComponent.prototype.loadEmployee = function() {
            var _this = this;
            var companiesObservable = this.employeeFormService.findBidtCompanyByCriteria({});
            var siteObservable = this.employeeFormService.findBidtSiteByCriteria({});
            var periodObservable = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__['GenericPropertyConstants']
                .HR_SALARY_PERIOD_MAP
            );
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__['forkJoin'])([
              companiesObservable,
              siteObservable,
              periodObservable
            ]).subscribe(function(results) {
              var periodIndex = 2;
              _this.companies = results[0];
              _this.siteDTOList = results[1];
              _this.periods = results[periodIndex];
              _this.employeeFormData.bidtSiteId = undefined;
              if (_this.componentData.objectId || _this.empID) {
                var employeeTemp = {};
                if (_this.componentData.objectId) {
                  employeeTemp = {
                    id: _this.serializationService.deserialize(_this.componentData.objectId).id
                  };
                } else if (_this.empID) {
                  employeeTemp = {
                    id: _this.empID
                  };
                }
                if (employeeTemp.id) {
                  _this.employeeFormService.getEmployeeDetails(employeeTemp.id).subscribe(
                    function(result) {
                      _this.employeeDetails = result[0];
                      if (_this.employeeDetails) {
                        // make a copy of all tab and section data
                        _this.employeeFormData = __assign({}, _this.employeeDetails.bidtEmployeeDTO || {});
                        _this.salaryFormData = __assign({}, _this.employeeDetails.bidtSalaryDTO || {});
                        _this.contractFormData = __assign({}, _this.employeeDetails.bidtContractDTO || {});
                        _this.laborTemplateFormData = __assign({}, _this.employeeDetails.bidtLaborTemplateDTO || {});
                        _this.superiorFormData = __assign({}, _this.employeeDetails.bidtSuperiorData || {});
                        _this.licenseFormData = __assign({}, _this.employeeDetails.bidtLicenseDTO || {});
                        // set selected site and company
                        var selectedSite =
                          _this.siteDTOList &&
                          _this.siteDTOList.filter(function(siteObj) {
                            return (
                              _this.employeeDetails.bidtEmployeeDTO &&
                              siteObj.siteId === _this.employeeDetails.bidtEmployeeDTO.bidtSiteId
                            );
                          })[0];
                        _this.selectedCompany =
                          selectedSite &&
                          selectedSite.bidtCompanyId !== undefined &&
                          selectedSite.bidtCompanyId !== null
                            ? selectedSite.bidtCompanyId.toString()
                            : undefined;
                        // load sites for selected company
                        _this.loadSites();
                        // load warehouses
                        _this.loadWarehousesBysite();
                        if (_this.employeeFormData.employeeBirthday) {
                          _this.employeeFormData.employeeBirthday = new Date(_this.employeeFormData.employeeBirthday);
                        }
                        if (_this.employeeFormData.contractEmployeeStartDate) {
                          _this.selectedContractEmployeeStartDate = new Date(
                            _this.employeeFormData.contractEmployeeStartDate
                          );
                        }
                        if (_this.employeeFormData.contractEmployeeEndDate) {
                          _this.selectedContractEmployeeEndDate = new Date(
                            _this.employeeFormData.contractEmployeeEndDate
                          );
                        }
                        if (_this.licenseFormData.licenseIssueDate) {
                          _this.selectedLicenseIssueDate = new Date(_this.licenseFormData.licenseIssueDate);
                        }
                        if (_this.licenseFormData.licenseValidatingDate) {
                          _this.selectedLicenseValidatingDate = new Date(_this.licenseFormData.licenseValidatingDate);
                        }
                        if (_this.laborTemplateFormData.ltName) {
                          _this.selectedWorkTemplateName = _this.laborTemplateFormData.ltName;
                          _this.calculateTemplateData();
                        }
                        var contractName =
                          _this.contractNames &&
                          _this.contractNames.filter(function(contractObj) {
                            return contractObj.label === _this.contractFormData.contractName;
                          })[0];
                        _this.selectedContractName = contractName && contractName.value;
                        _this.initOnEmployeeLoad();
                      }
                    },
                    function() {
                      _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLoadEmployee'));
                    }
                  );
                }
              } else {
                // reset dropdowns and textboxes values when employee is being created
                _this.employeeFormData = {};
                _this.salaryFormData = {
                  salaryInternalCost: '0',
                  salaryValue: '0'
                };
                _this.contractFormData = {};
                _this.superiorFormData = {};
                _this.selectedCompany = undefined;
                _this.sites = [];
                _this.warehouses = [];
                _this.selectedContractEmployeeEndDate = undefined;
                _this.selectedContractEmployeeStartDate = undefined;
                _this.selectedContractName = undefined;
                _this.selectedContractTypeName = undefined;
                if (_this.periods.length > 0) {
                  _this.salaryFormData.salaryPayPeriod = _this.periods[0].value;
                }
              }
            });
          };
          EmployeeFormComponent.prototype.initQualificationRenewalDates = function() {
            this.qualificationRenewalEndDateFilter = new Date();
            this.qualificationRenewalStartDateFilter = new Date();
            this.qualificationRenewalStartDateFilter.setFullYear(
              this.qualificationRenewalEndDateFilter.getFullYear() - 1
            );
          };
          EmployeeFormComponent.prototype.onExportWorks = function() {
            var dataToExport = [];
            this.worksDisplayed.forEach(function(elem) {
              dataToExport.push({
                projectNumber: elem.projectNumber,
                projectAsset: elem.projectAsset,
                workOrder: elem.workOrder,
                originText: elem.originText,
                type: elem.type,
                qualif: elem.qualif,
                description: elem.description,
                statusText: elem.statusText
              });
            });
            var name =
              this.employeeFormData.employeeLastName + '-' + this.employeeFormData.employeeFirstName + '-Works-List';
            this.exportService.toExcel(dataToExport, name, this.componentData.componentId);
          };
          EmployeeFormComponent.prototype.initOnEmployeeLoad = function() {
            var _this = this;
            this.isLoadingAcrsEventTable = true;
            this.loadContractTypesOnChange();
            this.displaySalaryCurrency(this.salaryFormData.salaryDevise);
            this.salaryFormData.salaryInternalCost = this.salaryFormData.salaryInternalCost || '0';
            this.salaryFormData.salaryValue = this.salaryFormData.salaryValue || '0';
            if (this.employeeDetails.bidtEmployeeDTO && this.employeeDetails.bidtEmployeeDTO.id) {
              this.isLoadingHourlyCostTable = true;
              this.employeeFormService
                .findHourlyCostsByEmployeeId(this.employeeDetails.bidtEmployeeDTO.id)
                .subscribe(function(results) {
                  _this.bidtHourlyCostDisplayed = results || [];
                  _this.isLoadingHourlyCostTable = false;
                });
              this.bidtQualifEmployeeDisplayed = [];
              this.isLoadingQualificationTable = true;
              this.employeeFormService
                .findQualificationsByEmployeeId(this.employeeDetails.bidtEmployeeDTO.id)
                .subscribe(function(results) {
                  _this.bidtQualifEmployeeDisplayed = [];
                  if (results !== null && results !== undefined) {
                    results.forEach(function(obj) {
                      _this.bidtQualifEmployeeDisplayed.push(_this.convertToQualificationRowObj(obj));
                    });
                  }
                  _this.isLoadingQualificationTable = false;
                });
              var licenseId = {
                bidtLicenseId: this.employeeDetails.bidtEmployeeDTO.bidtLicenseId
              };
              this.employeeFormService.findByLicenseId(licenseId).subscribe(function(results) {
                _this.bidtCategoryDisplayed = results || [];
                _this.categoryLevelTableData.forEach(function(rowObj) {
                  _this.bidtCategoryDisplayed.forEach(function(categoryObj) {
                    if (rowObj.categoryType === categoryObj.categoryType) {
                      rowObj['level' + categoryObj.categoryLevel] = true;
                    }
                  });
                });
              });
              this.loadQualificationRenewal();
              this.bidtTrainingDisplayed = [];
              this.isLoadingTrainingTable = true;
              this.employeeFormService
                .findTrainingByEmployeeId(this.employeeDetails.bidtEmployeeDTO.id)
                .subscribe(function(results) {
                  _this.bidtTrainingDisplayed = [];
                  if (results) {
                    if (results !== null && results !== undefined) {
                      results.forEach(function(obj) {
                        _this.bidtTrainingDisplayed.push(_this.convertToTrainingRowObj(obj));
                      });
                    }
                  }
                  _this.isLoadingTrainingTable = false;
                });
              this.isLoadingEvaluationTable = true;
              this.bidtEvaluationDisplayed = [];
              this.employeeFormService
                .findEvaluationsByEmployeeId(this.employeeDetails.bidtEmployeeDTO.id)
                .subscribe(function(results) {
                  _this.bidtEvaluationDisplayed = [];
                  if (results !== null && results !== undefined) {
                    results.forEach(function(obj) {
                      _this.bidtEvaluationDisplayed.push(_this.convertToEvaluationRowObj(obj));
                    });
                  }
                  _this.isLoadingEvaluationTable = false;
                });
              this.isLoadingAbsenceTable = true;
              this.bidtAbsenceDisplayed = [];
              this.employeeFormService
                .findAbsenceByEmployeeId(this.employeeDetails.bidtEmployeeDTO.id)
                .subscribe(function(results) {
                  _this.bidtAbsenceDisplayed = [];
                  if (results !== null && results !== undefined) {
                    results.forEach(function(obj) {
                      _this.bidtAbsenceDisplayed.push(_this.convertToAbsenceRowObj(obj));
                    });
                  }
                  _this.isLoadingAbsenceTable = false;
                });
              this.isLoadingHolidaysTable = true;
              this.bidtHolidayDisplayed = [];
              this.employeeFormService
                .findHolidaysByEmployeeId(this.employeeDetails.bidtEmployeeDTO.id)
                .subscribe(function(results) {
                  _this.bidtHolidayDisplayed = [];
                  if (results !== null && results !== undefined) {
                    results.forEach(function(obj) {
                      _this.bidtHolidayDisplayed.push(_this.convertToHolidayRowObj(obj));
                    });
                  }
                  _this.isLoadingHolidaysTable = false;
                });
              this.isLoadingExpenseTable = true;
              this.bidtExpenseDisplayed = [];
              this.employeeFormService
                .findExpenseByEmployeeId(this.employeeDetails.bidtEmployeeDTO.id)
                .subscribe(function(results) {
                  _this.bidtExpenseDisplayed = [];
                  if (results !== null && results !== undefined) {
                    results.forEach(function(obj) {
                      _this.bidtExpenseDisplayed.push(_this.convertToExpenseRowObj(obj));
                    });
                  }
                  _this.isLoadingExpenseTable = false;
                });
              this.isLoadingMedicalExaminationTable = true;
              this.bidtMedicalExaminationDisplayed = [];
              this.employeeFormService
                .findByEmployeeIdMedicalEmployee(this.employeeDetails.bidtEmployeeDTO.id)
                .subscribe(function(results) {
                  _this.bidtMedicalExaminationDisplayed = [];
                  if (results !== null && results !== undefined) {
                    results.forEach(function(obj) {
                      _this.bidtMedicalExaminationDisplayed.push(_this.convertToMedicalExaminationRowObj(obj));
                    });
                  }
                  _this.isLoadingMedicalExaminationTable = false;
                });
              this.isLoadingDocumentTable = true;
              this.bidtDocumentDisplayed = [];
              this.employeeFormService
                .findDocumentByEmployeeId(this.employeeDetails.bidtEmployeeDTO.id)
                .subscribe(function(results) {
                  _this.bidtDocumentDisplayed = [];
                  if (results !== null && results !== undefined) {
                    results.forEach(function(obj) {
                      _this.bidtDocumentDisplayed.push(_this.convertToDocumentRowObj(obj));
                    });
                  }
                  _this.isLoadingDocumentTable = false;
                });
              this.resetWorkTableFilters();
              this.resetFlightTableFilters();
              this.isLoadingWorksTable = true;
              this.isLoadingFlightsTable = true;
              this.worksDisplayed = [];
              this.flightsDisplayed = [];
              var acrsEventListInput = {
                status:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                    .EVENT_STATUS_CLOSED_KEY,
                typeCode:
                  _shared_constants_bido_notification_type_constants__WEBPACK_IMPORTED_MODULE_9__[
                    'BidoNotificationTypeConstants'
                  ].ACRS_TYPE_CODE,
                user: this.employeeFormData.employeeFirstName + ' ' + this.employeeFormData.employeeLastName
              };
              Object(rxjs__WEBPACK_IMPORTED_MODULE_3__['forkJoin'])([
                this.employeeFormService.getWorksByEmployee(this.searchCriteriaWork),
                this.employeeFormService.getFlightsByEmployee(this.searchCriteriaFlight),
                this.employeeFormService.findAcrsEventListByUser(acrsEventListInput)
              ])
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['finalize'])(function() {
                    _this.isLoadingAcrsEventTable = true;
                  })
                )
                .subscribe(function(results) {
                  _this.worksDisplayed = [];
                  _this.flightsDisplayed = [];
                  _this.isLoadingWorksTable = false;
                  _this.isLoadingFlightsTable = false;
                  if (results[0] !== null && results[0] !== undefined && results[0].length > 0) {
                    results[0].forEach(function(obj, index) {
                      _this.worksDisplayed.push(_this.convertToWorkRowObj(obj, index));
                    });
                  }
                  if (results[1] !== null && results[1] !== undefined && results[1].length > 0) {
                    results[1].forEach(function(obj) {
                      _this.flightsDisplayed.push(_this.convertToFlightRowObj(obj));
                    });
                  }
                  if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__['ObjectUtils'].isDefined(results[2])) {
                    _this.acrsEventTable.moreResults = results[2].moreResults;
                    _this.acrsEventTable.list = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_28__['ListUtils']
                      .orEmpty(results[2].list)
                      .map(function(notification) {
                        var matchingStatus = _this.eventStatusList.find(function(elt) {
                          return elt.value === notification.status;
                        });
                        var acrsEventRow = {
                          asset: '',
                          eventCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_30__['StringUtils'].orEmpty(
                            notification.notificationCode
                          ),
                          eventDate: _this.dateService.dateToString(notification.reportingDate),
                          eventDescription: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_30__[
                            'StringUtils'
                          ].orEmpty(notification.notificationDescription),
                          eventStatus: matchingStatus
                            ? matchingStatus.label
                            : _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_30__['StringUtils'].orEmpty(
                                notification.status
                              ),
                          _obj: notification
                        };
                        _this.employeeFormService
                          .findBidoEquipment({ equipmentCode: notification.equipmentCode })
                          .subscribe(function(equipment) {
                            acrsEventRow.asset = _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_26__[
                              'BidoEquipmentUtils'
                            ].toString(equipment);
                          });
                        return acrsEventRow;
                      });
                  }
                  _this.showWorkTab = !!results[0].length;
                  _this.showFlightTab = !!results[1].length;
                  _this.showAcrsEventTab = results[2].list.length > 0;
                  _this.createContentTable();
                });
            }
          };
          EmployeeFormComponent.prototype.loadQualificationRenewal = function() {
            var _this = this;
            var criteria = {
              employeeId: this.employeeFormData.id,
              dateFrom: this.qualificationRenewalStartDateFilter,
              dateTo: this.qualificationRenewalEndDateFilter
            };
            this.employeeFormService.findWorksInformationByCriteria(criteria).subscribe(function(results) {
              if (results !== null && results !== undefined) {
                _this.qualificationRenewalTableDataSource.setData(results);
              }
            });
          };
          EmployeeFormComponent.prototype.loadWorks = function() {
            var _this = this;
            this.isLoadingWorksTable = true;
            this.worksDisplayed = [];
            this.employeeFormService.getWorksByEmployee(this.searchCriteriaWork).subscribe(function(results) {
              results.forEach(function(obj, index) {
                _this.worksDisplayed.push(_this.convertToWorkRowObj(obj, index));
              });
              _this.isLoadingWorksTable = false;
            });
          };
          EmployeeFormComponent.prototype.loadFlights = function() {
            var _this = this;
            this.isLoadingFlightsTable = true;
            this.flightsDisplayed = [];
            this.employeeFormService.getFlightsByEmployee(this.searchCriteriaFlight).subscribe(function(results) {
              results.forEach(function(obj) {
                _this.flightsDisplayed.push(_this.convertToFlightRowObj(obj));
              });
              _this.isLoadingFlightsTable = false;
            });
          };
          EmployeeFormComponent.prototype.loadWorktemplateNames = function() {
            var _this = this;
            this.workTemplateNames = [];
            this.employeeFormService.findAllWorkTemplateNames().subscribe(function(results) {
              if (results !== null && results !== undefined && results.list !== null && results.list !== undefined) {
                results.list.forEach(function(element) {
                  if (element !== null && element !== undefined) {
                    element.ltHourPerWeek = element.ltHourPerWeek && _this.getHourWithSecond(element.ltHourPerWeek);
                    element.ltNbHourWd = element.ltNbHourWd && _this.getHourWithSecond(element.ltNbHourWd);
                    element.ltNbHourWe = element.ltNbHourWe && _this.getHourWithSecond(element.ltNbHourWe);
                    var labelValue = {
                      label: element.ltName || '',
                      value: element.ltName || ''
                    };
                    _this.workTemplateNames.push(labelValue);
                  }
                });
                _this.workTemplateNameList = results.list || [];
              }
            });
          };
          EmployeeFormComponent.prototype.cancelEmployee = function() {
            if (this.isWriteOpenMode) {
              this.updateOpenMode(
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read
              );
            }
            this.reloadEmployee();
            this.resetSelectedRow();
          };
          EmployeeFormComponent.prototype.editEmployee = function() {
            this.checkValidation();
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
            );
          };
          EmployeeFormComponent.prototype.editEmployeeCard = function() {
            var _this = this;
            this.employeeFormService.generateEmployeeCard(this.employeeFormData).subscribe(
              function(result) {
                var file = result || {};
                if (!!file.fileContent && !!file.fileName) {
                  var byteCharacters = atob(file.fileContent.toString());
                  var byteNumbers = new Array(byteCharacters.length);
                  for (var i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                  }
                  var fileURL = URL.createObjectURL(
                    new Blob([new Uint8Array(byteNumbers)], { type: 'application/pdf' })
                  );
                  window.open(fileURL);
                }
              },
              function(error) {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSaveEmployee'));
              }
            );
          };
          EmployeeFormComponent.prototype.reloadEmployee = function() {
            this.loadEmployee();
          };
          EmployeeFormComponent.prototype.saveEmployee = function() {
            var _this = this;
            if (!this.checkValidation()) {
              this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
              return;
            }
            // this.employeeFormData.employeeBirthday = new Date(this.employeeFormData.employeeBirthday);
            this.employeeFormData.contractEmployeeStartDate =
              this.selectedContractEmployeeStartDate && this.selectedContractEmployeeStartDate.toISOString();
            this.employeeFormData.contractEmployeeEndDate =
              this.selectedContractEmployeeEndDate && this.selectedContractEmployeeEndDate.toISOString();
            this.contractFormData =
              this.contractNameDTOList &&
              this.contractNameDTOList.filter(function(contract) {
                return contract.id && contract.id.toString() === _this.selectedContractName;
              })[0];
            this.licenseFormData.licenseValidatingDate =
              this.selectedLicenseValidatingDate && this.selectedLicenseValidatingDate.toISOString();
            this.licenseFormData.licenseIssueDate =
              this.selectedLicenseIssueDate && this.selectedLicenseIssueDate.toISOString();
            var saveEmployeeObj = {
              bidtEmployeeDTO: this.employeeFormData,
              bidtSalaryDTO: this.salaryFormData,
              bidContractDTO: this.contractFormData,
              bidtLaborTemplateDTO: this.laborTemplateFormData,
              superiorId: this.superiorFormData.id,
              bidtLicenseDTO: this.licenseFormData,
              bidtCategoryDTO: [],
              bidtTrainingDTO: [],
              bidtEvaluationDTO: [],
              bidtMedicalVisitDTO: [],
              bidtAbsenceDTO: [],
              bidtHolidayDTO: [],
              bidtExpenseDTO: [],
              bidtHourlyCostDTO: [],
              bidtQualifEmployeeDTO: [],
              bidtDocumentDTO: []
            };
            if (this.bidtHourlyCostDisplayed.length > 0) {
              this.bidtHourlyCostDisplayed.forEach(function(hourlyCost) {
                if (hourlyCost.bitHourlyCostDTO) {
                  hourlyCost.bitHourlyCostDTO.bidtEmployeeId = _this.employeeFormData.id;
                  saveEmployeeObj.bidtHourlyCostDTO = saveEmployeeObj.bidtHourlyCostDTO || [];
                  saveEmployeeObj.bidtHourlyCostDTO.push(hourlyCost.bitHourlyCostDTO);
                }
              });
            }
            if (this.bidtQualifEmployeeDisplayed.length > 0) {
              this.bidtQualifEmployeeDisplayed.forEach(function(qualif) {
                if (qualif._obj.bidtQualifEmployeeDTO) {
                  qualif._obj.bidtQualifEmployeeDTO.bidtEmployeeId = _this.employeeFormData.id;
                  saveEmployeeObj.bidtQualifEmployeeDTO = saveEmployeeObj.bidtQualifEmployeeDTO || [];
                  saveEmployeeObj.bidtQualifEmployeeDTO.push(qualif._obj.bidtQualifEmployeeDTO);
                }
              });
            }
            if (this.bidtTrainingDisplayed.length > 0) {
              this.bidtTrainingDisplayed.forEach(function(training) {
                training._obj.bidtEmployeeId = _this.employeeFormData.id;
                var typeValue =
                  _this.requestedByList &&
                  _this.requestedByList.filter(function(requestor) {
                    return requestor.label === training.trainingAskedBy;
                  })[0];
                training._obj.trainingAskedBy = typeValue && typeValue.value;
                saveEmployeeObj.bidtTrainingDTO = saveEmployeeObj.bidtTrainingDTO || [];
                saveEmployeeObj.bidtTrainingDTO.push(training._obj);
              });
            }
            if (this.bidtMedicalExaminationDisplayed.length > 0) {
              this.bidtMedicalExaminationDisplayed.forEach(function(medicalExam) {
                medicalExam._obj.bidtEmployeeId = _this.employeeFormData.id;
                saveEmployeeObj.bidtMedicalVisitDTO = saveEmployeeObj.bidtMedicalVisitDTO || [];
                saveEmployeeObj.bidtMedicalVisitDTO.push(medicalExam._obj);
              });
            }
            if (this.bidtExpenseDisplayed.length > 0) {
              this.bidtExpenseDisplayed.forEach(function(expense) {
                expense._obj.bidtEmployeeId = _this.employeeFormData.id;
                var typeValue =
                  _this.expenseTypes &&
                  _this.expenseTypes.filter(function(expenseType) {
                    return expenseType.label === expense.expenseType;
                  })[0];
                expense._obj.expenseType = typeValue && typeValue.value;
                saveEmployeeObj.bidtExpenseDTO = saveEmployeeObj.bidtExpenseDTO || [];
                saveEmployeeObj.bidtExpenseDTO.push(expense._obj);
              });
            }
            if (this.bidtAbsenceDisplayed.length > 0) {
              this.bidtAbsenceDisplayed.forEach(function(absence) {
                absence._obj.bidtEmployeeByBidtEmployeeId = _this.employeeFormData.id;
                var typeValue =
                  _this.absenceTypes &&
                  _this.absenceTypes.filter(function(type) {
                    return type.label === absence.absenceType;
                  })[0];
                absence._obj.absenceType = typeValue && typeValue.value;
                saveEmployeeObj.bidtAbsenceDTO = saveEmployeeObj.bidtAbsenceDTO || [];
                saveEmployeeObj.bidtAbsenceDTO.push(absence._obj);
              });
            }
            if (this.bidtHolidayDisplayed.length > 0) {
              this.bidtHolidayDisplayed.forEach(function(holiday) {
                var holidayStatusValue =
                  _this.holidayStatusList &&
                  _this.holidayStatusList.filter(function(status) {
                    return status.label === holiday.holidayStatus;
                  })[0];
                var holidayStatus = holidayStatusValue && holidayStatusValue.value;
                var absenceHoliday = {
                  bidtEmployeeByBidtEmployeeId: _this.employeeFormData.id,
                  absenceStartDate: holiday._obj.holidayStartDate,
                  absenceEndDate: holiday._obj.holidayEndDate,
                  absenceStatus: holidayStatus,
                  bidtEmployeeByBidtEmployeeId2Id: holiday._obj.bidtEmployeeByBidtEmployeeId2Id
                };
                saveEmployeeObj.bidtHolidayDTO = saveEmployeeObj.bidtHolidayDTO || [];
                saveEmployeeObj.bidtHolidayDTO.push(absenceHoliday);
              });
            }
            if (this.bidtEvaluationDisplayed.length > 0) {
              this.bidtEvaluationDisplayed.forEach(function(evaluation) {
                if (evaluation._obj.bidtEvaluationDTO !== null && evaluation._obj.bidtEvaluationDTO !== undefined) {
                  evaluation._obj.bidtEvaluationDTO.bidtEmployeeByBidtEmployeeId = _this.employeeFormData.id;
                  var evaluationTypeValue =
                    _this.evaluationTypes &&
                    _this.evaluationTypes.filter(function(type) {
                      if (evaluation._obj.bidtEvaluationDTO) {
                        return type.label === evaluation._obj.bidtEvaluationDTO.evaluationType;
                      }
                      return false;
                    })[0];
                  evaluation._obj.bidtEvaluationDTO.evaluationType = evaluationTypeValue && evaluationTypeValue.value;
                  saveEmployeeObj.bidtEvaluationDTO = saveEmployeeObj.bidtEvaluationDTO || [];
                  saveEmployeeObj.bidtEvaluationDTO.push(evaluation._obj.bidtEvaluationDTO);
                }
              });
            }
            if (this.bidtDocumentDisplayed.length > 0) {
              this.bidtDocumentDisplayed.forEach(function(doc) {
                doc._obj.bidtEmployeeId = _this.employeeFormData.id;
                saveEmployeeObj.bidtDocumentDTO = saveEmployeeObj.bidtDocumentDTO || [];
                saveEmployeeObj.bidtDocumentDTO.push(doc._obj);
              });
            }
            this.categoryLevelTableData.forEach(function(rowObj) {
              _this.licensesTableCols.forEach(function(colObj) {
                if (rowObj[colObj.field] === true) {
                  var bidtCategoryDTOObj = {
                    bidtLicenseId: _this.employeeFormData.bidtLicenseId,
                    categoryType: rowObj.categoryType,
                    categoryLevel: colObj.field.replace('level', '')
                  };
                  saveEmployeeObj.bidtCategoryDTO = saveEmployeeObj.bidtCategoryDTO || [];
                  saveEmployeeObj.bidtCategoryDTO.push(bidtCategoryDTOObj);
                }
              });
            });
            this.showSaveSpinner = true;
            this.employeeFormService
              .saveEmployees(saveEmployeeObj)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['finalize'])(function() {
                  _this.showSaveSpinner = false;
                })
              )
              .subscribe(function(result) {
                if (_this.isCreateOpenMode) {
                  _this.empID = result;
                  _this.employeeFormData.id = result;
                }
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnSaveEmployee'));
                _this.loadEmployee();
                if (_this.isCreateOpenMode) {
                  // In order to show tabs
                  _this.componentData.objectId = _this.serializationService.serialize(_this.employeeFormData);
                  _this.employeeName =
                    _this.employeeFormData.employeeFirstName + ' ' + _this.employeeFormData.employeeLastName;
                  _this.displayComponentContext(_this.employeeName, _this.isCreateOpenMode);
                  _this.updateOpenMode(
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read
                  );
                  _this.createContentTable();
                }
              });
            this.resetSelectedRow();
          };
          EmployeeFormComponent.prototype.openSuperiorPopup = function() {
            this.showSuperiorPopup = !this.isReadOpenMode ? true : false;
          };
          EmployeeFormComponent.prototype.refreshSuperior = function() {
            this.superiorFormData = {};
          };
          EmployeeFormComponent.prototype.setSelectedSuperior = function(superior) {
            this.superiorFormData = superior;
          };
          EmployeeFormComponent.prototype.openWorkTemplateTab = function() {
            this.currentTabId = this.tabWorkTemplateId;
          };
          EmployeeFormComponent.prototype.openHourlyCostsTab = function() {
            this.currentTabId = this.tabHourlyCostsId;
          };
          EmployeeFormComponent.prototype.openQualificationTab = function() {
            this.currentTabId = this.tabQualificationId;
          };
          EmployeeFormComponent.prototype.openLicenseTab = function() {
            this.currentTabId = this.tabLicenseId;
          };
          EmployeeFormComponent.prototype.openTrainingTab = function() {
            this.currentTabId = this.tabTrainingId;
          };
          EmployeeFormComponent.prototype.openEvaluationTab = function() {
            this.currentTabId = this.tabEvaluationId;
          };
          EmployeeFormComponent.prototype.openAbsenceTab = function() {
            this.currentTabId = this.tabAbsenceId;
          };
          EmployeeFormComponent.prototype.openHolidaysTab = function() {
            this.currentTabId = this.tabHolidaysId;
          };
          EmployeeFormComponent.prototype.openExpenseTab = function() {
            this.currentTabId = this.tabExpenseId;
          };
          EmployeeFormComponent.prototype.openMedicalExaminationTab = function() {
            this.currentTabId = this.tabMedicalExaminationId;
          };
          /**
           * Convert template form data hours into second on load
           */
          EmployeeFormComponent.prototype.calculateTemplateData = function() {
            this.laborTemplateFormData.ltHourPerWeek =
              this.laborTemplateFormData.ltHourPerWeek &&
              this.getHourWithSecond(this.laborTemplateFormData.ltHourPerWeek);
            this.laborTemplateFormData.ltNbHourWd =
              this.laborTemplateFormData.ltNbHourWd && this.getHourWithSecond(this.laborTemplateFormData.ltNbHourWd);
            this.laborTemplateFormData.ltNbHourWe =
              this.laborTemplateFormData.ltNbHourWe && this.getHourWithSecond(this.laborTemplateFormData.ltNbHourWe);
          };
          EmployeeFormComponent.prototype.setWorkTemplatedata = function() {
            var _this = this;
            if (this.selectedWorkTemplateName) {
              this.laborTemplateFormData =
                this.workTemplateNameList &&
                this.workTemplateNameList.filter(function(template) {
                  return template.ltName === _this.selectedWorkTemplateName;
                })[0];
            } else {
              this.laborTemplateFormData = {};
            }
          };
          /****
           * Convert hour into second
           */
          EmployeeFormComponent.prototype.getHourWithSecond = function(valueInSecond) {
            if (valueInSecond !== null && valueInSecond !== undefined) {
              var second = 3600;
              return valueInSecond / second;
            }
            return 0;
          };
          /***********************************************************************************
           * Documents Tab
           ***********************************************************************************/
          EmployeeFormComponent.prototype.openDocumentsTab = function() {
            this.currentTabId = this.tabDocumentsId;
          };
          /*
          Documents handler functions
      */
          EmployeeFormComponent.prototype.addNewDocument = function(newDocument) {
            var searchInDisplayedList = this.bidtDocumentDisplayed.find(function(value) {
              return value.documentName === newDocument.documentName;
            });
            if (!searchInDisplayedList) {
              this.bidtDocumentAddedList.push(newDocument);
              this.bidtDocumentDisplayed.push(this.convertToDocumentRowObj(newDocument));
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('errorFileAlreadyExist'));
            }
          };
          EmployeeFormComponent.prototype.deleteSelectedDocuments = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: 'global.confirmSelectedDataDelete',
              accept: function() {
                _this.selectedDocuments.forEach(function(element) {
                  var searchInAddedList = _this.bidtDocumentAddedList.find(function(value) {
                    return value.documentName === element.documentName;
                  });
                  var searchInUpdatedList = _this.bidtDocumentUpdatedList.find(function(value) {
                    return value.documentName === element.documentName;
                  });
                  if (searchInAddedList) {
                    var indexInAddedList = _this.bidtDocumentAddedList.indexOf(searchInAddedList);
                    _this.bidtDocumentAddedList.splice(indexInAddedList, 1);
                  } else if (searchInUpdatedList) {
                    var indexInUpdatedList = _this.bidtDocumentUpdatedList.indexOf(searchInUpdatedList);
                    _this.bidtDocumentUpdatedList.splice(indexInUpdatedList, 1);
                    _this.bidtDocumentDeletedList.push(element._obj);
                  } else {
                    _this.bidtDocumentDeletedList.push(element._obj);
                  }
                  var indexInDisplayedList = _this.bidtDocumentDisplayed.indexOf(element);
                  _this.bidtDocumentDisplayed.splice(indexInDisplayedList, 1);
                });
                _this.bidtDocumentDeletedList = __spread(_this.bidtDocumentDeletedList);
                _this.selectedDocuments = [];
              }
            });
          };
          EmployeeFormComponent.prototype.updateDocument = function(updatedDocument) {
            var previousDocumentObject = this.bidtDocumentDisplayed[this.currentDocumentIndex];
            var searchInAddedList = this.bidtDocumentAddedList.find(function(value) {
              return value.documentName === previousDocumentObject.documentName;
            });
            var searchInUpdatedList = this.bidtDocumentUpdatedList.find(function(value) {
              return value.documentCode === previousDocumentObject._obj.documentCode;
            });
            if (searchInAddedList) {
              var indexInAddedList = this.bidtDocumentAddedList.indexOf(searchInAddedList);
              this.bidtDocumentAddedList[indexInAddedList] = updatedDocument;
            } else if (searchInUpdatedList) {
              var indexInUpdatedList = this.bidtDocumentUpdatedList.indexOf(searchInUpdatedList);
              this.bidtDocumentUpdatedList[indexInUpdatedList] = updatedDocument;
            } else {
              this.bidtDocumentUpdatedList.push(updatedDocument);
            }
            this.bidtDocumentDisplayed[this.currentDocumentIndex] = this.convertToDocumentRowObj(updatedDocument);
            this.selectedDocuments = [];
          };
          // File handler utilities
          EmployeeFormComponent.prototype.showDocExtension = function(document) {
            return _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_27__['FileUtils']
              .getExtension(document.documentName)
              .toUpperCase();
          };
          EmployeeFormComponent.prototype.showDocSize = function(document) {
            return document.documentContent
              ? _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_27__['FileUtils'].getFormattedSize(
                  document.documentContent.length
                )
              : '';
          };
          EmployeeFormComponent.prototype.uploadDocument = function(event, fileUploader) {
            var _this = this;
            if (event.files) {
              var file_1 = event.files[0];
              _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_27__['FileUtils'].getFileContentAsBase64(
                file_1,
                function(fileContent) {
                  if (fileContent) {
                    var document_1 = {
                      documentContent: fileContent,
                      documentName: file_1.name,
                      documentPublicationDate: new Date()
                    };
                    _this.addNewDocument(document_1);
                  }
                }
              );
              fileUploader.clear();
            }
          };
          EmployeeFormComponent.prototype.editDocument = function() {
            var _this = this;
            if (this.selectedDocuments.length === 1) {
              this.currentDocumentIndex = this.bidtDocumentDisplayed.findIndex(function(document) {
                return document === _this.selectedDocuments[0];
              });
              this.currentDocument = __assign({}, this.selectedDocuments[0]._obj);
              this.isReadOnlyDocumentDialog = false;
              if (!this.currentDocument.documentSource) {
                this.showDocumentDialog = true;
              } else {
                this.showDocumentUrlDialog = true;
              }
            }
          };
          EmployeeFormComponent.prototype.openDocument = function() {
            if (this.selectedDocuments.length === 1) {
              this.currentDocument = this.selectedDocuments[0]._obj;
              this.isReadOnlyDocumentDialog = true;
              if (!this.currentDocument.documentSource) {
                this.showDocumentDialog = true;
              } else {
                this.showDocumentUrlDialog = true;
              }
            }
          };
          EmployeeFormComponent.prototype.downloadFiles = function() {
            this.selectedDocuments.forEach(function(document) {
              if (!!document._obj.documentContent) {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_27__['FileUtils'].downloadFile(
                  document._obj.documentContent,
                  document.documentName
                );
              }
            });
          };
          /***********************************************************************************
           * Medical Examination Tab
           ***********************************************************************************/
          EmployeeFormComponent.prototype.openMedicalExamination = function() {
            this.isReadOnlyMedicalExaminationDialog = true;
            if (this.selectedMedicalExaminations.length === 1) {
              this.currentMedicalExaminations = __assign({}, this.selectedMedicalExaminations[0]._obj);
              this.currentMedicalExaminationIndex = this.bidtMedicalExaminationDisplayed.indexOf(
                this.selectedMedicalExaminations[0]
              );
              this.showMedicalExaminationPopup = true;
              this.dataMedicalExamination = {
                componentId: 'MedicalExaminationPopupFormComponent',
                selectedRow: [],
                object: this.currentMedicalExaminations,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read
              };
            }
          };
          EmployeeFormComponent.prototype.createMedicalExamination = function() {
            this.currentMedicalExaminationIndex = -1;
            this.currentMedicalExaminations = {};
            this.showMedicalExaminationPopup = true;
            this.isNewMedicalExamination = true;
            this.isReadOnlyMedicalExaminationDialog = false;
            this.dataMedicalExamination = {
              componentId: 'MedicalExaminationPopupFormComponent',
              selectedRow: undefined,
              object: this.currentMedicalExaminations,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
            };
          };
          EmployeeFormComponent.prototype.editMedicalExamination = function() {
            this.isNewMedicalExamination = false;
            this.isReadOnlyMedicalExaminationDialog = false;
            if (this.selectedMedicalExaminations.length === 1) {
              this.currentMedicalExaminations = __assign({}, this.selectedMedicalExaminations[0]._obj);
              this.currentMedicalExaminationIndex = this.bidtMedicalExaminationDisplayed.indexOf(
                this.selectedMedicalExaminations[0]
              );
              this.showMedicalExaminationPopup = true;
              this.dataMedicalExamination = {
                componentId: 'MedicalExaminationPopupFormComponent',
                selectedRow: [],
                object: this.currentMedicalExaminations,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
              };
            }
          };
          EmployeeFormComponent.prototype.deleteMedicalExamination = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: 'global.confirmSelectedDataDelete',
              accept: function() {
                _this.selectedMedicalExaminations.forEach(function(element) {
                  var indexInDisplayedList = _this.bidtMedicalExaminationDisplayed.indexOf(element);
                  _this.bidtMedicalExaminationDisplayed.splice(indexInDisplayedList, 1);
                });
                _this.currentMedicalExaminationIndex = -1;
                _this.selectedMedicalExaminations = [];
              }
            });
          };
          EmployeeFormComponent.prototype.saveMedicalExamination = function(medicalExamObj) {
            if (!!medicalExamObj) {
              if (this.currentMedicalExaminationIndex > -1) {
                this.bidtMedicalExaminationDisplayed[
                  this.currentMedicalExaminationIndex
                ] = this.convertToMedicalExaminationRowObj(medicalExamObj);
              } else {
                this.bidtMedicalExaminationDisplayed = __spread(this.bidtMedicalExaminationDisplayed, [
                  this.convertToMedicalExaminationRowObj(medicalExamObj)
                ]);
              }
            }
            this.currentMedicalExaminationIndex = -1;
            this.selectedMedicalExaminations = [];
          };
          /***********************************************************************************
           * Absence Tab
           ***********************************************************************************/
          EmployeeFormComponent.prototype.openAbsence = function() {
            this.isNewAbsence = false;
            this.isReadOnlyAbsenceDialog = true;
            if (this.selectedAbsences.length === 1) {
              this.currentAbsences = __assign({}, this.selectedAbsences[0]._obj);
              this.currentAbsenceIndex = this.bidtAbsenceDisplayed.indexOf(this.selectedAbsences[0]);
              this.showAbsencePopup = true;
              this.dataAbsence = {
                componentId: 'AbsencePopupFormComponent',
                selectedRow: [],
                object: this.currentAbsences,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
              };
            }
          };
          EmployeeFormComponent.prototype.createAbsence = function() {
            this.currentAbsenceIndex = -1;
            this.currentAbsences = {};
            this.showAbsencePopup = true;
            this.isNewAbsence = true;
            this.isReadOnlyAbsenceDialog = false;
            this.dataAbsence = {
              componentId: 'AbsencePopupFormComponent',
              selectedRow: undefined,
              object: this.currentAbsences,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
            };
          };
          EmployeeFormComponent.prototype.editAbsence = function() {
            this.isNewAbsence = false;
            this.isReadOnlyAbsenceDialog = false;
            if (this.selectedAbsences.length === 1) {
              this.currentAbsences = __assign({}, this.selectedAbsences[0]._obj);
              this.currentAbsenceIndex = this.bidtAbsenceDisplayed.indexOf(this.selectedAbsences[0]);
              this.showAbsencePopup = true;
              this.dataAbsence = {
                componentId: 'AbsencePopupFormComponent',
                selectedRow: [],
                object: this.currentAbsences,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
              };
            }
          };
          EmployeeFormComponent.prototype.deleteAbsence = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: 'global.confirmSelectedDataDelete',
              accept: function() {
                _this.selectedAbsences.forEach(function(element) {
                  var indexInDisplayedList = _this.bidtAbsenceDisplayed.indexOf(element);
                  _this.bidtAbsenceDisplayed.splice(indexInDisplayedList, 1);
                });
                _this.currentAbsenceIndex = -1;
                _this.selectedAbsences = [];
              }
            });
          };
          EmployeeFormComponent.prototype.saveAbsence = function(absenceObj) {
            if (!!absenceObj) {
              if (this.currentAbsenceIndex > -1) {
                this.bidtAbsenceDisplayed[this.currentAbsenceIndex] = this.convertToAbsenceRowObj(absenceObj);
              } else {
                this.bidtAbsenceDisplayed = __spread(this.bidtAbsenceDisplayed, [
                  this.convertToAbsenceRowObj(absenceObj)
                ]);
              }
            }
            this.currentAbsenceIndex = -1;
            this.selectedAbsences = [];
          };
          /***********************************************************************************
           * Evaluation Tab
           ***********************************************************************************/
          EmployeeFormComponent.prototype.openEvaluation = function() {
            this.isNewEvaluation = false;
            this.isReadOnlyEvaluationDialog = true;
            if (this.selectedEvaluations.length === 1) {
              this.currentEvaluations = __assign({}, this.selectedEvaluations[0]._obj);
              this.currentEvaluationIndex = this.bidtEvaluationDisplayed.indexOf(this.selectedEvaluations[0]);
              this.showEvaluationPopup = true;
              this.dataEvaluation = {
                componentId: 'EvaluationPopupFormComponent',
                selectedRow: this.selectedEvaluations,
                object: this.currentEvaluations,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
              };
            }
          };
          EmployeeFormComponent.prototype.createEvaluation = function() {
            this.currentEvaluationIndex = -1;
            this.currentEvaluations = {};
            this.showEvaluationPopup = true;
            this.isNewEvaluation = true;
            this.isReadOnlyEvaluationDialog = false;
            this.dataEvaluation = {
              componentId: 'EvaluationPopupFormComponent',
              selectedRow: undefined,
              object: this.currentEvaluations,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
            };
          };
          EmployeeFormComponent.prototype.editEvaluation = function() {
            this.isNewEvaluation = false;
            this.isReadOnlyEvaluationDialog = false;
            if (this.selectedEvaluations.length === 1) {
              this.currentEvaluations = __assign({}, this.selectedEvaluations[0]._obj);
              this.currentEvaluationIndex = this.bidtEvaluationDisplayed.indexOf(this.selectedEvaluations[0]);
              this.showEvaluationPopup = true;
              this.dataEvaluation = {
                componentId: 'EvaluationPopupFormComponent',
                selectedRow: this.selectedEvaluations,
                object: this.currentEvaluations,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
              };
            }
          };
          EmployeeFormComponent.prototype.deleteEvaluation = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: 'global.confirmSelectedDataDelete',
              accept: function() {
                _this.selectedEvaluations.forEach(function(element) {
                  var indexInDisplayedList = _this.bidtEvaluationDisplayed.indexOf(element);
                  _this.bidtEvaluationDisplayed.splice(indexInDisplayedList, 1);
                });
                _this.currentEvaluationIndex = -1;
                _this.selectedEvaluations = [];
              }
            });
          };
          EmployeeFormComponent.prototype.saveEvaluation = function(evaluationObj) {
            if (!!evaluationObj) {
              if (this.currentEvaluationIndex > -1) {
                this.bidtEvaluationDisplayed[this.currentEvaluationIndex] = this.convertToEvaluationRowObj(
                  evaluationObj
                );
              } else {
                this.bidtEvaluationDisplayed = __spread(this.bidtEvaluationDisplayed, [
                  this.convertToEvaluationRowObj(evaluationObj)
                ]);
              }
            }
            this.currentEvaluationIndex = -1;
            this.selectedEvaluations = [];
          };
          /***********************************************************************************
           * Expense Tab
           ***********************************************************************************/
          EmployeeFormComponent.prototype.openExpense = function() {
            this.isNewExpense = false;
            this.isReadOnlyExpenseDialog = true;
            if (this.selectedExpenses.length === 1) {
              this.currentExpenses = __assign({}, this.selectedExpenses[0]._obj);
              this.currentExpenseIndex = this.bidtExpenseDisplayed.indexOf(this.selectedExpenses[0]);
              this.showExpensePopup = true;
              this.dataExpense = {
                componentId: 'ExpensePopupFormComponent',
                selectedRow: this.selectedExpenses,
                object: this.currentExpenses,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
              };
            }
          };
          EmployeeFormComponent.prototype.createExpense = function() {
            this.currentExpenseIndex = -1;
            this.currentExpenses = {};
            this.showExpensePopup = true;
            this.isNewExpense = true;
            this.isReadOnlyExpenseDialog = false;
            this.dataExpense = {
              componentId: 'ExpensePopupFormComponent',
              selectedRow: undefined,
              object: this.currentExpenses,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
            };
          };
          EmployeeFormComponent.prototype.editExpense = function() {
            this.isNewExpense = false;
            this.isReadOnlyExpenseDialog = false;
            if (this.selectedExpenses.length === 1) {
              this.currentExpenses = __assign({}, this.selectedExpenses[0]._obj);
              this.currentExpenseIndex = this.bidtExpenseDisplayed.indexOf(this.selectedExpenses[0]);
              this.showExpensePopup = true;
              this.dataExpense = {
                componentId: 'ExpensePopupFormComponent',
                selectedRow: this.selectedExpenses,
                object: this.currentExpenses,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
              };
            }
          };
          EmployeeFormComponent.prototype.deleteExpense = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: 'global.confirmSelectedDataDelete',
              accept: function() {
                _this.selectedExpenses.forEach(function(element) {
                  var indexInDisplayedList = _this.bidtExpenseDisplayed.indexOf(element);
                  _this.bidtExpenseDisplayed.splice(indexInDisplayedList, 1);
                });
                _this.currentExpenseIndex = -1;
                _this.selectedExpenses = [];
              }
            });
          };
          EmployeeFormComponent.prototype.saveExpense = function(expenseObj) {
            if (!!expenseObj) {
              if (this.currentExpenseIndex > -1) {
                this.bidtExpenseDisplayed[this.currentExpenseIndex] = this.convertToExpenseRowObj(expenseObj);
              } else {
                this.bidtExpenseDisplayed = __spread(this.bidtExpenseDisplayed, [
                  this.convertToExpenseRowObj(expenseObj)
                ]);
              }
            }
            this.currentExpenseIndex = -1;
            this.selectedExpenses = [];
          };
          /***********************************************************************************
           * Holidays Tab
           ***********************************************************************************/
          EmployeeFormComponent.prototype.openHoliday = function() {
            this.isNewHoliday = false;
            this.isReadOnlyHolidayDialog = true;
            if (this.selectedHolidays.length === 1) {
              this.currentHolidays = __assign({}, this.selectedHolidays[0]._obj);
              this.currentHolidayIndex = this.bidtHolidayDisplayed.indexOf(this.selectedHolidays[0]);
              this.showHolidayPopup = true;
              this.dataHoliday = {
                componentId: 'HolidaysPopupFormComponent',
                selectedRow: [],
                object: this.currentHolidays,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
              };
            }
          };
          EmployeeFormComponent.prototype.createHoliday = function() {
            this.currentHolidayIndex = -1;
            this.currentHolidays = {};
            this.showHolidayPopup = true;
            this.isNewHoliday = true;
            this.isReadOnlyHolidayDialog = false;
            this.dataHoliday = {
              componentId: 'HolidaysPopupFormComponent',
              selectedRow: undefined,
              object: this.currentHolidays,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
            };
          };
          EmployeeFormComponent.prototype.editHoliday = function() {
            this.isNewHoliday = false;
            this.isReadOnlyHolidayDialog = false;
            if (this.selectedHolidays.length === 1) {
              this.currentHolidays = __assign({}, this.selectedHolidays[0]._obj);
              this.currentHolidayIndex = this.bidtHolidayDisplayed.indexOf(this.selectedHolidays[0]);
              this.showHolidayPopup = true;
              this.dataHoliday = {
                componentId: 'HolidaysPopupFormComponent',
                selectedRow: [],
                object: this.currentHolidays,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
              };
            }
          };
          EmployeeFormComponent.prototype.deleteHoliday = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: 'global.confirmSelectedDataDelete',
              accept: function() {
                _this.selectedHolidays.forEach(function(element) {
                  var indexInDisplayedList = _this.bidtHolidayDisplayed.indexOf(element);
                  _this.bidtHolidayDisplayed.splice(indexInDisplayedList, 1);
                });
                _this.currentHolidayIndex = -1;
                _this.selectedHolidays = [];
              }
            });
          };
          EmployeeFormComponent.prototype.saveHoliday = function(holidayObj) {
            if (!!holidayObj) {
              if (this.currentHolidayIndex > -1) {
                this.bidtHolidayDisplayed[this.currentHolidayIndex] = this.convertToHolidayRowObj(holidayObj);
              } else {
                this.bidtHolidayDisplayed = __spread(this.bidtHolidayDisplayed, [
                  this.convertToHolidayRowObj(holidayObj)
                ]);
              }
            }
            this.currentHolidayIndex = -1;
            this.selectedHolidays = [];
          };
          /***********************************************************************************
           * HourlyCosts Tab
           ***********************************************************************************/
          EmployeeFormComponent.prototype.openHourlyCost = function() {
            this.isNewHourlyCost = false;
            this.isReadOnlyHourlyCostDialog = true;
            if (this.selectedHourlyCosts.length === 1) {
              this.currentHourlyCosts = JSON.parse(JSON.stringify(this.selectedHourlyCosts[0]));
              this.currentHourlyCostIndex = this.bidtHourlyCostDisplayed.indexOf(this.selectedHourlyCosts[0]);
              this.showHourlyCostPopup = true;
              this.dataHourlyCost = {
                componentId: 'HourlyCostsPopupFormComponent',
                selectedRow: [],
                object: this.currentHourlyCosts,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read
              };
            }
          };
          EmployeeFormComponent.prototype.createHourlyCost = function() {
            this.currentHourlyCosts = {};
            this.showHourlyCostPopup = true;
            this.currentHourlyCostIndex = -1;
            this.isReadOnlyHourlyCostDialog = false;
            this.dataHourlyCost = {
              componentId: 'HourlyCostsPopupFormComponent',
              selectedRow: undefined,
              object: this.currentHourlyCosts,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
            };
          };
          EmployeeFormComponent.prototype.editHourlyCost = function() {
            this.isNewHourlyCost = false;
            this.isReadOnlyHourlyCostDialog = false;
            if (this.selectedHourlyCosts.length === 1) {
              this.currentHourlyCosts = JSON.parse(JSON.stringify(this.selectedHourlyCosts[0]));
              this.currentHourlyCostIndex = this.bidtHourlyCostDisplayed.indexOf(this.selectedHourlyCosts[0]);
              this.showHourlyCostPopup = true;
              this.dataHourlyCost = {
                componentId: 'HourlyCostsPopupFormComponent',
                selectedRow: [],
                object: this.currentHourlyCosts,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
              };
            }
          };
          EmployeeFormComponent.prototype.deleteHourlyCost = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: 'global.confirmSelectedDataDelete',
              accept: function() {
                _this.selectedHourlyCosts.forEach(function(element) {
                  var indexInDisplayedList = _this.bidtHourlyCostDisplayed.indexOf(element);
                  _this.bidtHourlyCostDisplayed.splice(indexInDisplayedList, 1);
                });
                _this.currentHourlyCostIndex = -1;
                _this.selectedHourlyCosts = [];
              }
            });
          };
          EmployeeFormComponent.prototype.saveHourlyCost = function(hourlyCostObj) {
            if (!!hourlyCostObj) {
              if (this.currentHourlyCostIndex > -1) {
                this.bidtHourlyCostDisplayed[this.currentHourlyCostIndex] = hourlyCostObj;
              } else {
                this.bidtHourlyCostDisplayed = __spread(this.bidtHourlyCostDisplayed, [hourlyCostObj]);
              }
            }
            this.currentHourlyCostIndex = -1;
            this.selectedHourlyCosts = [];
          };
          /***********************************************************************************
           * Qualification Tab
           ***********************************************************************************/
          EmployeeFormComponent.prototype.openQualification = function() {
            this.isNewQualification = false;
            this.isReadOnlyQualificationDialog = true;
            if (this.selectedQualifications.length === 1) {
              this.currentQualifications = __assign({}, this.selectedQualifications[0]._obj);
              this.currentQualificationIndex = this.bidtQualifEmployeeDisplayed.indexOf(this.selectedQualifications[0]);
              this.showQualificationPopup = true;
              this.dataQualification = {
                componentId: 'QualificationPopupFormComponent',
                selectedRow: [],
                object: this.currentQualifications,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
              };
            }
          };
          EmployeeFormComponent.prototype.createQualification = function() {
            this.currentQualificationIndex = -1;
            this.currentQualifications = {};
            this.showQualificationPopup = true;
            this.isNewQualification = true;
            this.isReadOnlyQualificationDialog = false;
            this.dataQualification = {
              componentId: 'QualificationPopupFormComponent',
              selectedRow: undefined,
              object: this.currentQualifications,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
            };
          };
          EmployeeFormComponent.prototype.editQualification = function() {
            this.isNewQualification = false;
            this.isReadOnlyQualificationDialog = false;
            if (this.selectedQualifications.length === 1) {
              this.currentQualifications = __assign({}, this.selectedQualifications[0]._obj);
              this.currentQualificationIndex = this.bidtQualifEmployeeDisplayed.indexOf(this.selectedQualifications[0]);
              this.showQualificationPopup = true;
              this.dataQualification = {
                componentId: 'QualificationPopupFormComponent',
                selectedRow: [],
                object: this.currentQualifications,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
              };
            }
          };
          EmployeeFormComponent.prototype.deleteQualification = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: 'global.confirmSelectedDataDelete',
              accept: function() {
                _this.selectedQualifications.forEach(function(element) {
                  var indexInDisplayedList = _this.bidtQualifEmployeeDisplayed.indexOf(element);
                  _this.bidtQualifEmployeeDisplayed.splice(indexInDisplayedList, 1);
                });
                _this.currentQualificationIndex = -1;
                _this.selectedQualifications = [];
              }
            });
          };
          EmployeeFormComponent.prototype.saveQualification = function(qualificationObj) {
            if (!!qualificationObj) {
              if (this.currentQualificationIndex > -1) {
                this.bidtQualifEmployeeDisplayed[this.currentQualificationIndex] = this.convertToQualificationRowObj(
                  qualificationObj
                );
              } else {
                this.bidtQualifEmployeeDisplayed = __spread(this.bidtQualifEmployeeDisplayed, [
                  this.convertToQualificationRowObj(qualificationObj)
                ]);
              }
            }
            this.currentQualificationIndex = -1;
            this.selectedQualifications = [];
          };
          /***********************************************************************************
           * Qualification Renewal dates filter
           ***********************************************************************************/
          EmployeeFormComponent.prototype.filterQualificationRenewalDates = function() {
            if (this.qualificationRenewalStartDateFilter && this.qualificationRenewalEndDateFilter) {
              if (this.qualificationRenewalStartDateFilter < this.qualificationRenewalEndDateFilter) {
                this.loadQualificationRenewal();
              } else {
                this.messageService.showErrorMessage(this.getTranslateKey('errorOnDates'));
              }
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnMissingDates'));
            }
          };
          /***********************************************************************************
           * Training Tab
           ***********************************************************************************/
          EmployeeFormComponent.prototype.openTraining = function() {
            this.isNewTraining = false;
            this.isReadOnlyTrainingDialog = true;
            if (this.selectedTrainings.length === 1) {
              this.currentTrainings = __assign({}, this.selectedTrainings[0]._obj);
              this.currentTrainingIndex = this.bidtTrainingDisplayed.indexOf(this.selectedTrainings[0]);
              this.showTrainingPopup = true;
              this.dataTraining = {
                componentId: 'TrainingPopupFormComponent',
                selectedRow: [],
                object: this.currentTrainings,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
              };
            }
          };
          EmployeeFormComponent.prototype.createTraining = function() {
            this.currentTrainingIndex = -1;
            this.currentTrainings = {};
            this.showTrainingPopup = true;
            this.isNewTraining = true;
            this.isReadOnlyTrainingDialog = false;
            this.dataTraining = {
              componentId: 'TrainingPopupFormComponent',
              selectedRow: undefined,
              object: this.currentTrainings,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
            };
          };
          EmployeeFormComponent.prototype.editTraining = function() {
            this.isNewTraining = false;
            this.isReadOnlyTrainingDialog = false;
            if (this.selectedTrainings.length === 1) {
              this.currentTrainings = __assign({}, this.selectedTrainings[0]._obj);
              this.currentTrainingIndex = this.bidtTrainingDisplayed.indexOf(this.selectedTrainings[0]);
              this.showTrainingPopup = true;
              this.dataTraining = {
                componentId: 'TrainingPopupFormComponent',
                selectedRow: [],
                object: this.currentTrainings,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Write
              };
            }
          };
          EmployeeFormComponent.prototype.deleteTraining = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: 'global.confirmSelectedDataDelete',
              accept: function() {
                _this.selectedTrainings.forEach(function(element) {
                  var indexInDisplayedList = _this.bidtTrainingDisplayed.indexOf(element);
                  _this.bidtTrainingDisplayed.splice(indexInDisplayedList, 1);
                });
                _this.currentTrainingIndex = -1;
                _this.selectedTrainings = [];
              }
            });
          };
          EmployeeFormComponent.prototype.saveTraining = function(trainingObj) {
            if (!!trainingObj) {
              if (this.currentTrainingIndex > -1) {
                this.bidtTrainingDisplayed[this.currentTrainingIndex] = this.convertToTrainingRowObj(trainingObj);
              } else {
                this.bidtTrainingDisplayed = __spread(this.bidtTrainingDisplayed, [
                  this.convertToTrainingRowObj(trainingObj)
                ]);
              }
            }
            this.currentTrainingIndex = -1;
            this.selectedTrainings = [];
          };
          EmployeeFormComponent.prototype.convertToTrainingRowObj = function(obj) {
            return {
              trainingName: obj.trainingName,
              trainingAskedBy: obj.trainingAskedBy,
              trainingCenter: obj.trainingCenter,
              trainingComment: obj.trainingComment,
              trainingEndDate:
                obj.trainingEndDate && moment__WEBPACK_IMPORTED_MODULE_2__(obj.trainingEndDate).format('YYYY/MM/DD A'),
              trainingInstructor: obj.trainingInstructor,
              trainingPerformed: obj.trainingPerformed && obj.trainingPerformed === 1 ? true : false,
              trainingStartDate:
                obj.trainingStartDate &&
                moment__WEBPACK_IMPORTED_MODULE_2__(obj.trainingStartDate).format('YYYY/MM/DD A'),
              _obj: obj
            };
          };
          EmployeeFormComponent.prototype.convertToQualificationRowObj = function(obj) {
            return {
              qualifEmployeeEndDate:
                obj.bidtQualifEmployeeDTO &&
                obj.bidtQualifEmployeeDTO.qualifEmployeeEndDate &&
                this.dateService.dateToString(new Date(obj.bidtQualifEmployeeDTO.qualifEmployeeEndDate)),
              qualifEmployeeInstitution:
                obj.bidtQualifEmployeeDTO && obj.bidtQualifEmployeeDTO.qualifEmployeeInstitution,
              qualifEmployeeStartDate:
                obj.bidtQualifEmployeeDTO &&
                obj.bidtQualifEmployeeDTO.qualifEmployeeStartDate &&
                this.dateService.dateToString(new Date(obj.bidtQualifEmployeeDTO.qualifEmployeeStartDate)),
              qualificationTitle: obj.qualificationTitle,
              qualificationType: obj.qualificationType,
              qualifOngoing: obj.bidtQualifEmployeeDTO && obj.bidtQualifEmployeeDTO.qualifOngoing,
              _obj: obj
            };
          };
          EmployeeFormComponent.prototype.convertToAbsenceRowObj = function(obj) {
            return {
              absenceDescription: obj.absenceDescription,
              absenceEndDate:
                obj.absenceEndDate && moment__WEBPACK_IMPORTED_MODULE_2__(obj.absenceEndDate).format('YYYY/MM/DD A'),
              absenceStartDate:
                obj.absenceStartDate &&
                moment__WEBPACK_IMPORTED_MODULE_2__(obj.absenceStartDate).format('YYYY/MM/DD A'),
              absenceType: obj.absenceType,
              _obj: obj
            };
          };
          EmployeeFormComponent.prototype.convertToEvaluationRowObj = function(obj) {
            return {
              evaluationComment: obj.bidtEvaluationDTO && obj.bidtEvaluationDTO.evaluationComment,
              evaluationDate:
                obj.bidtEvaluationDTO &&
                obj.bidtEvaluationDTO.evaluationDate &&
                this.dateService.dateToString(new Date(obj.bidtEvaluationDTO.evaluationDate)),
              evaluationType: obj.bidtEvaluationDTO && obj.bidtEvaluationDTO.evaluationType,
              evaluator: obj.evaluator,
              _obj: obj
            };
          };
          EmployeeFormComponent.prototype.convertToHolidayRowObj = function(obj) {
            return {
              holidayEndDate:
                obj.holidayEndDate && moment__WEBPACK_IMPORTED_MODULE_2__(obj.holidayEndDate).format('YYYY/MM/DD A'),
              holidayStartDate:
                obj.holidayStartDate &&
                moment__WEBPACK_IMPORTED_MODULE_2__(obj.holidayStartDate).format('YYYY/MM/DD A'),
              holidayStatus: obj.holidayStatus,
              holidayValidator: obj.holidayValidator,
              _obj: obj
            };
          };
          EmployeeFormComponent.prototype.convertToDocumentRowObj = function(obj) {
            return {
              documentContent: this.showDocSize(obj),
              documentName: obj.documentName,
              documentPublicationDate:
                obj.documentPublicationDate && this.dateService.dateToString(new Date(obj.documentPublicationDate)),
              documentType: this.showDocExtension(obj),
              documentCategory: this.getDocumentCategoryText(obj.documentCategory),
              documentSource: obj.documentSource,
              _obj: obj
            };
          };
          EmployeeFormComponent.prototype.getDocumentCategoryText = function(docCategory) {
            var toReturn;
            if (!docCategory) {
              return toReturn;
            }
            this.documentCategories.forEach(function(elem) {
              if (elem.propertiesKey === docCategory) {
                toReturn = elem.enPropertiesValue;
              }
            });
            return toReturn;
          };
          EmployeeFormComponent.prototype.convertToMedicalExaminationRowObj = function(obj) {
            return {
              visitComment: obj.visitComment,
              visitDate: obj.visitDate && this.dateService.dateToString(new Date(obj.visitDate)),
              visitExpiration: obj.visitExpiration && this.dateService.dateToString(new Date(obj.visitExpiration)),
              _obj: obj
            };
          };
          EmployeeFormComponent.prototype.convertToExpenseRowObj = function(obj) {
            return {
              expenseDate: obj.expenseDate && this.dateService.dateToString(new Date(obj.expenseDate)),
              expenseDescription: obj.expenseDescription,
              expenseType: obj.expenseType,
              expenseValue: obj.expenseValue,
              _obj: obj
            };
          };
          EmployeeFormComponent.prototype.convertToWorkRowObj = function(obj, index) {
            return {
              origin: obj.origin,
              originText: obj.originText,
              type: obj.type,
              openingDate: obj.openingDate && this.dateService.dateWithHourMinSecToString(obj.openingDate),
              closingDate: obj.closingDate && this.dateService.dateWithHourMinSecToString(obj.closingDate),
              description: obj.description,
              projectNumber: obj.projectNumber,
              projectAsset: obj.projectAsset,
              statusText: obj.statusText,
              totalElapsed: obj.totalElapsed,
              qualif: obj.qualification,
              relatedItem: obj.relatedItem,
              workOrder: obj.treeNodeText,
              isRelatedItemEnabled: obj.isRelatedItemEnabled,
              _obj: obj,
              rowIndex: index
            };
          };
          EmployeeFormComponent.prototype.convertToFlightRowObj = function(obj) {
            return {
              missionCode: obj.missionCode,
              missionType: obj.missionType,
              missionNumber: obj.missionNumber,
              startDateText: obj.startDateText && this.dateService.dateToString(obj.startDateText),
              endDateText: obj.endDateText && this.dateService.dateToString(obj.endDateText),
              assetText: obj.assetText,
              pilot: obj.pilot,
              copilot: obj.copilot,
              dayMission: obj.dayMission,
              engineStartDateText: obj.engineStartDateText && this.dateService.dateToString(obj.engineStartDateText),
              engineStopDateText: obj.engineStopDateText && this.dateService.dateToString(obj.engineStopDateText),
              missionDepartureLocation: obj.missionDepartureLocation,
              missionArrivalLocation: obj.missionArrivalLocation,
              chronoNumber: obj.chronoNumber,
              duration: obj.duration,
              ifrDuration: obj.ifrDuration,
              cycleNumber: obj.cycleNumber,
              flightStatus: obj.flightStatus,
              flightType: obj.flightType,
              _obj: obj
            };
          };
          EmployeeFormComponent.prototype.resetSelectedRow = function() {
            this.selectedQualifications = [];
            this.selectedLicenses = [];
            this.selectedTrainings = [];
            this.selectedHourlyCosts = [];
            this.selectedEvaluations = [];
            this.selectedAbsences = [];
            this.selectedHolidays = [];
            this.selectedExpenses = [];
            this.selectedMedicalExaminations = [];
            this.selectedDocuments = [];
          };
          EmployeeFormComponent.prototype.filterWorkWithCriteria = function() {
            this.loadWorks();
          };
          EmployeeFormComponent.prototype.filterFlightWithCriteria = function() {
            this.loadFlights();
          };
          EmployeeFormComponent.prototype.resetWorkTableFilters = function() {
            var toDate = new Date();
            var fromDate = new Date(toDate);
            fromDate.setMonth(toDate.getMonth() - EmployeeFormComponent_1.DATE_DIFF);
            if (this.employeeDetails.bidtEmployeeDTO) {
              this.searchCriteriaWork = {
                employeeId: this.employeeDetails.bidtEmployeeDTO.id,
                fromEndTimeFilter: fromDate,
                fromStartTimeFilter: fromDate,
                toEndTimeFilter: toDate,
                toStartTimeTimeFilter: toDate
              };
            }
          };
          EmployeeFormComponent.prototype.resetFlightTableFilters = function() {
            var toDate = new Date();
            var fromDate = new Date(toDate);
            fromDate.setMonth(toDate.getMonth() - EmployeeFormComponent_1.DATE_DIFF);
            if (this.employeeDetails.bidtEmployeeDTO) {
              this.searchCriteriaFlight = {
                employeeId: this.employeeDetails.bidtEmployeeDTO.id,
                fromEndTimeFilter: fromDate,
                fromStartTimeFilter: fromDate,
                toEndTimeFilter: toDate,
                toStartTimeTimeFilter: toDate
              };
            }
          };
          EmployeeFormComponent.prototype.openOrigin = function(row) {
            var openMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read;
            if (row._obj && row.origin && row._obj.bidmWorkOrderData) {
              var bidmWorkOrderData = row._obj.bidmWorkOrderData;
              var arr = row.origin.split('#');
              if (
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                  .AIRM_WORK_ORDER_TYPE_TASK === bidmWorkOrderData.woType
              ) {
                var objectId = {
                  taskCode: arr[0],
                  taskVersion: arr[1]
                };
                var labelKey = 'transaction.TaskFormComponent';
                var data = {
                  id: this.tabService.generateId(),
                  componentId: 'TaskFormComponent',
                  objectId: this.serializationService.serialize(objectId),
                  openMode: openMode
                };
                this.tabService.open(this.tabService.create(data, labelKey, true));
              } else if (
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                  .AIRM_WORK_ORDER_TYPE_EVOLUTION === bidmWorkOrderData.woType
              ) {
                var objectId = {
                  evolutionNumber: arr[1],
                  evolutionRevisionNumber: '' + arr[2]
                };
                var labelKey = 'transaction.EvolutionFormComponent';
                var data = {
                  id: this.tabService.generateId(),
                  componentId: 'EvolutionFormComponent',
                  objectId: this.serializationService.serialize(objectId),
                  openMode: openMode
                };
                this.tabService.open(this.tabService.create(data, labelKey, true));
              } else if (
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                  .AIRM_WORK_ORDER_TYPE_DEFECT === bidmWorkOrderData.woType
              ) {
                var data = {
                  id: this.tabService.generateId(),
                  componentId:
                    _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
                      .FLE_DEFECT_FORM,
                  openMode:
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read
                };
                var defectId = {
                  notificationCode: arr[0]
                };
                data.objectId = this.serializationService.serialize(defectId);
                var labelKey = 'transaction.' + data.componentId;
                this.tabService.open(this.tabService.create(data, labelKey, true));
              }
            }
          };
          EmployeeFormComponent.prototype.openRelatedItem = function(row) {
            var openMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read;
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants'].ENG_ITEM_FORM,
              openMode: openMode
            };
            if (!!row && row._obj.bidmWorkOrderData) {
              var itemFormId = {
                familyCode: row._obj.bidmWorkOrderData.bireItemFamilyCode,
                chapter: row._obj.bidmWorkOrderData.bireItemChapter,
                section: row._obj.bidmWorkOrderData.bireItemSection,
                sheet: row._obj.bidmWorkOrderData.bireItemSheet,
                marks: row._obj.bidmWorkOrderData.bireItemMarks,
                subject: row._obj.bidmWorkOrderData.bireItemSubject,
                structureType:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                    .STRUCTURE_TYPE_IPC_KEY,
                variantCode: row._obj.bidmWorkOrderData.bireItemVariantCode
              };
              data.objectId = this.serializationService.serialize(itemFormId);
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          EmployeeFormComponent.prototype.toggleRowDetailsVisibility = function(row) {
            row.expand = !row.expand;
          };
          EmployeeFormComponent.prototype.loadEventStatus = function() {
            var _this = this;
            this.employeeFormService.getEventStatusValues().subscribe(function(results) {
              _this.eventStatusList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_28__['ListUtils'].orEmpty(
                results
              );
            });
          };
          EmployeeFormComponent.prototype.openEvent = function(acrsEventRow) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                acrsEventRow._obj.bidoNotificationTypeDTO &&
                acrsEventRow._obj.bidoNotificationTypeDTO.typeCategory ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__['AWPropertiesConstants']
                    .EVENT_CATEGORY_DEFECT_KEY
                  ? _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
                      .FLE_DEFECT_FORM
                  : _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
                      .FLE_EVENT_CREATE,
              objectId: this.serializationService.serialize(acrsEventRow._obj),
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          EmployeeFormComponent.prototype.openEquipment = function(acrsEventRow) {
            var _this = this;
            var input = {
              equipmentCode: acrsEventRow.asset
            };
            this.employeeFormService.findBidoEquipment(input).subscribe(function(result) {
              _this.pageService.openAsset(result.equipmentCode, result.equipmentFunction);
            });
          };
          EmployeeFormComponent.prototype.openWorkOrder = function(row) {
            if (row._obj.bidmWorkOrderData) {
              var objectId = {
                projectId: row._obj.bidmWorkOrderData.projectId,
                woId: row._obj.bidmWorkOrderData.woId
              };
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__['ComponentConstants']
                    .MAI_WORK_ORDER_FORM,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__['ComponentOpenMode'].Read,
                objectId: this.serializationService.serialize(objectId)
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          EmployeeFormComponent.prototype.linkUrl = function() {
            var _this = this;
            if (this.selectedDocuments.length === 1) {
              this.currentDocumentIndex = this.bidtDocumentDisplayed.findIndex(function(document) {
                return document === _this.selectedDocuments[0];
              });
              this.currentDocument = __assign({}, this.selectedDocuments[0]._obj);
              this.isReadOnlyDocumentDialog = false;
              this.showDocumentUrlDialog = true;
            } else {
              this.currentDocumentIndex = -1;
              this.currentDocument = {};
              this.showDocumentUrlDialog = true;
            }
          };
          EmployeeFormComponent.prototype.updateDocumentUrl = function(doc) {
            if (this.currentDocumentIndex === -1) {
              this.addNewDocument(doc);
            } else {
              this.updateDocument(doc);
            }
          };
          EmployeeFormComponent.prototype.showDownloadDocButton = function() {
            var toReturn = true;
            if (this.selectedDocuments.length === 0) {
              toReturn = false;
            } else {
              this.selectedDocuments.forEach(function(doc) {
                if (!!doc.documentSource) {
                  toReturn = false;
                }
              });
            }
            return toReturn;
          };
          EmployeeFormComponent.prototype.showGoToDocButton = function() {
            var toReturn = true;
            if (this.selectedDocuments.length === 0) {
              toReturn = false;
            } else {
              this.selectedDocuments.forEach(function(doc) {
                if (!doc.documentSource) {
                  toReturn = false;
                }
              });
            }
            return toReturn;
          };
          EmployeeFormComponent.prototype.goToDoc = function() {
            this.selectedDocuments.forEach(function(doc) {
              window.open(doc.documentSource);
            });
          };
          var EmployeeFormComponent_1;
          EmployeeFormComponent.DATE_DIFF = 18;
          EmployeeFormComponent.DOCUMENT_CATEGORY_ID = 120;
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('mainDataAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            EmployeeFormComponent.prototype,
            'mainDataAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('generalDataAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            EmployeeFormComponent.prototype,
            'generalDataAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('qualificationDataAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            EmployeeFormComponent.prototype,
            'qualificationDataAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('qualificationRenewalAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            EmployeeFormComponent.prototype,
            'qualificationRenewalAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('licenseDataAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            EmployeeFormComponent.prototype,
            'licenseDataAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('trainingDataAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            EmployeeFormComponent.prototype,
            'trainingDataAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('workTemplateDataAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            EmployeeFormComponent.prototype,
            'workTemplateDataAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('hourlyCostDataAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            EmployeeFormComponent.prototype,
            'hourlyCostDataAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('evaluationDataAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            EmployeeFormComponent.prototype,
            'evaluationDataAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('expenseDataAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            EmployeeFormComponent.prototype,
            'expenseDataAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('absenceDataAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            EmployeeFormComponent.prototype,
            'absenceDataAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('holidayDataAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            EmployeeFormComponent.prototype,
            'holidayDataAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('medicalExaminationDataAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            EmployeeFormComponent.prototype,
            'medicalExaminationDataAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('documentDataAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            EmployeeFormComponent.prototype,
            'documentDataAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('workDataAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            EmployeeFormComponent.prototype,
            'workDataAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('flightDataAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            EmployeeFormComponent.prototype,
            'flightDataAnchor',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('acrsEventAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            EmployeeFormComponent.prototype,
            'acrsEventAnchor',
            void 0
          );
          EmployeeFormComponent = EmployeeFormComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-employee-form',
                template: __webpack_require__(
                  /*! ./employee-form.component.html */ './src/app/main/human-resources/employee-form/employee-form.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_16__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_18__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_19__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_22__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_24__['TabService'],
                _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_5__['PageTocService'],
                _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_6__[
                  'DynamicAttributesService'
                ],
                _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_17__['InputValidationService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_23__['SessionService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__['ConfirmationService'],
                _employee_form_service__WEBPACK_IMPORTED_MODULE_31__['EmployeeFormService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_21__['PropertiesService'],
                _shared_services_page_service__WEBPACK_IMPORTED_MODULE_20__['PageService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_14__['DateService'],
                _shared_services_export_service__WEBPACK_IMPORTED_MODULE_15__['ExportService']
              ])
            ],
            EmployeeFormComponent
          );
          return EmployeeFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_25__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/popups/absence-popup-form/absence-popup-form.component.html':
      /*!****************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/popups/absence-popup-form/absence-popup-form.component.html ***!
  \****************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ componentData.componentId + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ componentData.componentId + ".from" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-calendar\r\n              showButtonBar="true"\r\n              [monthNavigator]="true"\r\n              [yearNavigator]="true"\r\n              [yearRange]="sessionService.calendarYearRange"\r\n              class="aw-calendar custom-calendar-margin"\r\n              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n              [locale]="sessionService.calendarFormat"\r\n              [disabled]="isReadOnlyForm"\r\n              appendTo="body"\r\n              [(ngModel)]="selectedFrom"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="form-label">AM</label>\r\n\r\n          <div class="form-control">\r\n            <p-radioButton class="aw-radiobutton" value="AM" [(ngModel)]="selectedFromAM"></p-radioButton>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="form-label">PM</label>\r\n\r\n          <div class="form-control">\r\n            <p-radioButton class="aw-radiobutton" value="PM" [(ngModel)]="selectedFromAM"></p-radioButton>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ componentData.componentId + ".to" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-calendar\r\n              showButtonBar="true"\r\n              [monthNavigator]="true"\r\n              [yearNavigator]="true"\r\n              [yearRange]="sessionService.calendarYearRange"\r\n              class="aw-calendar custom-calendar-margin"\r\n              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n              [locale]="sessionService.calendarFormat"\r\n              [disabled]="isReadOnlyForm"\r\n              appendTo="body"\r\n              [(ngModel)]="selectedTo"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="form-label">AM</label>\r\n\r\n          <div class="form-control">\r\n            <p-radioButton class="aw-radiobutton" value="AM" [(ngModel)]="selectedToAM"></p-radioButton>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="form-label">PM</label>\r\n\r\n          <div class="form-control">\r\n            <p-radioButton class="aw-radiobutton" value="PM" [(ngModel)]="selectedToAM"></p-radioButton>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ componentData.componentId + ".type" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [options]="absenceTypes"\r\n              [showClear]="true"\r\n              appendTo="body"\r\n              placeholder="&nbsp;"\r\n              [(ngModel)]="absenceDTO.absenceType"\r\n              [disabled]="isReadOnlyForm"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ componentData.componentId + ".comment" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <textarea\r\n              class="aw-textarea"\r\n              [rows]="3"\r\n              pInputTextarea\r\n              [disabled]="isReadOnlyForm"\r\n              [(ngModel)]="absenceDTO.absenceDescription"\r\n              maxlength="300"\r\n            ></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOnlyForm"\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [disabled]="\r\n        selectedFrom === undefined ||\r\n        selectedFrom === null ||\r\n        selectedTo === undefined ||\r\n        selectedTo === null ||\r\n        absenceDTO.absenceType === undefined ||\r\n        absenceDTO.absenceType === null\r\n      "\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/popups/absence-popup-form/absence-popup-form.component.ts':
      /*!**************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/popups/absence-popup-form/absence-popup-form.component.ts ***!
  \**************************************************************************************************************/
      /*! exports provided: AbsencePopupFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AbsencePopupFormComponent',
          function() {
            return AbsencePopupFormComponent;
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

        var AbsencePopupFormComponent = /** @class */ (function(_super) {
          __extends(AbsencePopupFormComponent, _super);
          function AbsencePopupFormComponent(messageService, sessionService, propertiesService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read,
                'AbsencePopupFormComponent'
              ) || this;
            _this.messageService = messageService;
            _this.sessionService = sessionService;
            _this.propertiesService = propertiesService;
            _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.absenceDTO = {};
            _this.loadAbsenceType();
            _this.selectedFromAM = 'AM';
            _this.selectedToAM = 'PM';
            return _this;
          }
          Object.defineProperty(AbsencePopupFormComponent.prototype, 'display', {
            get: function() {
              return this.displayValue;
            },
            set: function(displayValue) {
              this.displayValue = displayValue;
              this.displayChange.emit(this.displayValue);
            },
            enumerable: true,
            configurable: true
          });
          AbsencePopupFormComponent.prototype.ngOnInit = function() {
            if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
              this.absenceDTO = this.componentData.object || {};
              var hourValue = 12;
              if (this.absenceDTO.absenceStartDate) {
                this.selectedFrom = new Date(this.absenceDTO.absenceStartDate);
                var fromHour = this.selectedFrom.getHours();
                this.selectedFromAM = fromHour < hourValue ? 'AM' : 'PM';
              }
              if (this.absenceDTO.absenceEndDate) {
                this.selectedTo = new Date(this.absenceDTO.absenceEndDate);
                var toHour = this.selectedTo.getHours();
                this.selectedToAM = toHour < hourValue ? 'AM' : 'PM';
              }
            }
          };
          AbsencePopupFormComponent.prototype.getTypeName = function() {
            return 'AbsencePopupFormComponent';
          };
          AbsencePopupFormComponent.prototype.validate = function() {
            if (this.selectedFrom && this.selectedTo && this.absenceDTO.absenceType) {
              // the service count the total day only if selectedFrom's value is strictly before 14h/02pm and selectedTo's value is strictly after 14h/02pm
              var addedMilliSeconds = 43200000; // 12h
              var addedMilliSecondsFromMidnightToThreeAM = 10800000; // 3h
              var hourFromMidnightToThreeAMValue = 3;
              var hourHalfdayValue = 12;
              var hourValueForAfternoon = 14;
              if (this.selectedFromAM === 'PM') {
                var timestamp = this.selectedFrom.getTime();
                if (this.selectedFrom.getHours() < hourHalfdayValue) {
                  timestamp = timestamp + addedMilliSeconds;
                  if (this.selectedFrom.getHours() < hourFromMidnightToThreeAMValue) {
                    timestamp = timestamp + addedMilliSecondsFromMidnightToThreeAM;
                  }
                  this.absenceDTO.absenceStartDate = new Date(timestamp).toISOString();
                } else if (this.selectedFrom.getHours() <= hourValueForAfternoon) {
                  timestamp = timestamp + addedMilliSecondsFromMidnightToThreeAM;
                  this.absenceDTO.absenceStartDate = new Date(timestamp).toISOString();
                } else {
                  this.absenceDTO.absenceStartDate = new Date(this.selectedFrom).toISOString();
                }
              } else if (this.selectedFromAM === 'AM') {
                if (this.selectedFrom.getHours() >= hourHalfdayValue) {
                  var timestamp = this.selectedFrom.getTime();
                  timestamp = timestamp - addedMilliSeconds;
                  this.absenceDTO.absenceStartDate = new Date(timestamp).toISOString();
                } else {
                  this.absenceDTO.absenceStartDate = new Date(this.selectedFrom).toISOString();
                }
              }
              if (this.selectedToAM === 'PM') {
                var timestamp = this.selectedTo.getTime();
                if (this.selectedTo.getHours() < hourHalfdayValue) {
                  timestamp = timestamp + addedMilliSeconds;
                  if (this.selectedTo.getHours() < hourFromMidnightToThreeAMValue) {
                    timestamp = timestamp + addedMilliSecondsFromMidnightToThreeAM;
                  }
                  this.absenceDTO.absenceEndDate = new Date(timestamp).toISOString();
                } else if (this.selectedTo.getHours() <= hourValueForAfternoon) {
                  timestamp = timestamp + addedMilliSecondsFromMidnightToThreeAM;
                  this.absenceDTO.absenceEndDate = new Date(timestamp).toISOString();
                } else {
                  this.absenceDTO.absenceEndDate = new Date(this.selectedTo).toISOString();
                }
              } else if (this.selectedToAM === 'AM') {
                if (this.selectedTo.getHours() >= hourHalfdayValue) {
                  var timestamp = this.selectedTo.getTime();
                  timestamp = timestamp - addedMilliSeconds;
                  this.absenceDTO.absenceEndDate = new Date(timestamp).toISOString();
                } else {
                  this.absenceDTO.absenceEndDate = new Date(this.selectedTo).toISOString();
                }
              }
              if (
                this.absenceDTO.absenceEndDate &&
                this.absenceDTO.absenceStartDate &&
                new Date(this.absenceDTO.absenceEndDate) < new Date(this.absenceDTO.absenceStartDate)
              ) {
                this.messageService.showErrorMessage(this.getTranslateKey('fromDateGreaterThanToDateError'));
                return;
              }
              this.onValidated.emit(this.absenceDTO);
              this.display = false;
            } else {
              this.messageService.showErrorMessage('global.missingFields');
            }
          };
          AbsencePopupFormComponent.prototype.cancel = function() {
            this.display = false;
          };
          AbsencePopupFormComponent.prototype.loadAbsenceType = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__['GenericPropertyConstants']
                  .HR_ABSENCE_TYPE_MAP
              )
              .subscribe(function(results) {
                _this.absenceTypes = JSON.parse(JSON.stringify(results));
                _this.absenceTypes = _this.absenceTypes.filter(function(element) {
                  return (
                    element.value !==
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                      .HR_ABSENCE_TYPE_HOLIDAY
                  );
                });
                _this.absenceTypes.map(function(absence) {
                  return (absence.value = absence.label);
                });
              });
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            AbsencePopupFormComponent.prototype,
            'display',
            null
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            AbsencePopupFormComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            AbsencePopupFormComponent.prototype,
            'displayChange',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            AbsencePopupFormComponent.prototype,
            'onValidated',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('component-data'),
              __metadata('design:type', Object)
            ],
            AbsencePopupFormComponent.prototype,
            'componentData',
            void 0
          );
          AbsencePopupFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-absence-popup-form',
                template: __webpack_require__(
                  /*! ./absence-popup-form.component.html */ './src/app/main/human-resources/employee-form/popups/absence-popup-form/absence-popup-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../../employee-form.component.scss */ './src/app/main/human-resources/employee-form/employee-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__['MessageService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__['SessionService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__['PropertiesService']
              ])
            ],
            AbsencePopupFormComponent
          );
          return AbsencePopupFormComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/popups/evaluation-popup-form/evaluation-popup-form.component.html':
      /*!**********************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/popups/evaluation-popup-form/evaluation-popup-form.component.html ***!
  \**********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ componentData.componentId + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ componentData.componentId + ".date" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-calendar\r\n              showButtonBar="true"\r\n              [monthNavigator]="true"\r\n              [yearNavigator]="true"\r\n              [yearRange]="sessionService.calendarYearRange"\r\n              class="aw-calendar"\r\n              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n              [locale]="sessionService.calendarFormat"\r\n              appendTo="body"\r\n              [disabled]="isReadOnlyForm"\r\n              [(ngModel)]="evaluationDate"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ componentData.componentId + ".evaluator" | translate }}</label>\r\n\r\n          <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOnlyForm }">\r\n            <div class="form-control-data" (click)="openEvaluatorPopup()">{{ bidtEvaluationsOutputDTO.evaluator }}</div>\r\n\r\n            <div *ngIf="bidtEvaluationsOutputDTO.evaluator" class="btn-clear-wrapper">\r\n              <i\r\n                class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                aria-hidden="true"\r\n                (click)="bidtEvaluationsOutputDTO.evaluator = undefined"\r\n              ></i>\r\n            </div>\r\n            <div class="btn-search-wrapper">\r\n              <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="openEvaluatorPopup()"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ componentData.componentId + ".type" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              [disabled]="isReadOnlyForm"\r\n              class="aw-dropdown fixed-width"\r\n              [(ngModel)]="evaluationDTO.evaluationType"\r\n              [options]="evaluationTypes"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ componentData.componentId + ".evaluation" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input\r\n              type="text"\r\n              class="aw-input"\r\n              [(ngModel)]="evaluationDTO.evaluationComment"\r\n              [disabled]="isReadOnlyForm"\r\n              maxlength="300"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOnlyForm"\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [disabled]="\r\n        evaluationDate === undefined ||\r\n        evaluationDate === null ||\r\n        bidtEvaluationsOutputDTO.evaluator === undefined ||\r\n        bidtEvaluationsOutputDTO.evaluator === null\r\n      "\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-employee\r\n  *ngIf="showEvaluatorPopup"\r\n  [(display)]="!!showEvaluatorPopup"\r\n  [employee-name]="bidtEvaluationsOutputDTO.evaluator"\r\n  (onSelected)="setSelectedEvaluator($event)"\r\n></aw-dialog-search-employee>\r\n';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/popups/evaluation-popup-form/evaluation-popup-form.component.ts':
      /*!********************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/popups/evaluation-popup-form/evaluation-popup-form.component.ts ***!
  \********************************************************************************************************************/
      /*! exports provided: EvaluationPopupFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'EvaluationPopupFormComponent',
          function() {
            return EvaluationPopupFormComponent;
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
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
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

        var EvaluationPopupFormComponent = /** @class */ (function(_super) {
          __extends(EvaluationPopupFormComponent, _super);
          function EvaluationPopupFormComponent(messageService, sessionService, propertiesService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read,
                'EvaluationPopupFormComponent'
              ) || this;
            _this.messageService = messageService;
            _this.sessionService = sessionService;
            _this.propertiesService = propertiesService;
            _this.showEvaluatorPopup = false;
            _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.evaluationDTO = {};
            _this.loadEvaluationType();
            return _this;
          }
          Object.defineProperty(EvaluationPopupFormComponent.prototype, 'display', {
            get: function() {
              return this.displayValue;
            },
            set: function(displayValue) {
              this.displayValue = displayValue;
              this.displayChange.emit(this.displayValue);
            },
            enumerable: true,
            configurable: true
          });
          EvaluationPopupFormComponent.prototype.ngOnInit = function() {
            if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
              this.bidtEvaluationsOutputDTO = this.componentData.object || {};
              this.bidtEvaluationsOutputDTO.bidtEvaluationDTO = this.bidtEvaluationsOutputDTO.bidtEvaluationDTO || {};
              this.evaluationDTO = this.bidtEvaluationsOutputDTO.bidtEvaluationDTO;
              if (this.evaluationDTO && !!this.evaluationDTO.evaluationDate) {
                this.evaluationDate = new Date(this.evaluationDTO.evaluationDate);
              }
            }
          };
          EvaluationPopupFormComponent.prototype.getTypeName = function() {
            return 'EvaluationPopupFormComponent';
          };
          EvaluationPopupFormComponent.prototype.validate = function() {
            if (this.evaluationDate && this.bidtEvaluationsOutputDTO.evaluator) {
              this.evaluationDTO.evaluationDate = this.evaluationDate.toISOString();
              this.onValidated.emit(this.bidtEvaluationsOutputDTO);
              this.display = false;
            } else {
              this.messageService.showErrorMessage('global.missingFields');
            }
          };
          EvaluationPopupFormComponent.prototype.cancel = function() {
            this.display = false;
          };
          EvaluationPopupFormComponent.prototype.loadEvaluationType = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .HR_EVALUATION_TYPE_MAP
              )
              .subscribe(function(results) {
                _this.evaluationTypes = JSON.parse(JSON.stringify(results));
                _this.evaluationTypes.map(function(evaluation) {
                  evaluation.value = evaluation.label;
                });
              });
          };
          EvaluationPopupFormComponent.prototype.openEvaluatorPopup = function() {
            this.showEvaluatorPopup = this.isReadOnlyForm ? false : true;
          };
          EvaluationPopupFormComponent.prototype.setSelectedEvaluator = function(evaluator) {
            this.bidtEvaluationsOutputDTO.evaluator = evaluator.employeeLastName;
            this.evaluationDTO.bidtEmployeeByBidtEmployeeId2Id = evaluator.id;
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            EvaluationPopupFormComponent.prototype,
            'display',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            EvaluationPopupFormComponent.prototype,
            'displayChange',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            EvaluationPopupFormComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            EvaluationPopupFormComponent.prototype,
            'onValidated',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('component-data'),
              __metadata('design:type', Object)
            ],
            EvaluationPopupFormComponent.prototype,
            'componentData',
            void 0
          );
          EvaluationPopupFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-evaluation-popup-form',
                template: __webpack_require__(
                  /*! ./evaluation-popup-form.component.html */ './src/app/main/human-resources/employee-form/popups/evaluation-popup-form/evaluation-popup-form.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__['MessageService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__['SessionService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__['PropertiesService']
              ])
            ],
            EvaluationPopupFormComponent
          );
          return EvaluationPopupFormComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/popups/expense-popup-form/expense-popup-form.component.html':
      /*!****************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/popups/expense-popup-form/expense-popup-form.component.html ***!
  \****************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ componentData.componentId + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ componentData.componentId + ".date" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-calendar\r\n              showButtonBar="true"\r\n              [monthNavigator]="true"\r\n              [yearNavigator]="true"\r\n              [yearRange]="sessionService.calendarYearRange"\r\n              class="aw-calendar"\r\n              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n              [locale]="sessionService.calendarFormat"\r\n              [disabled]="isReadOnlyForm"\r\n              [(ngModel)]="expenseDate"\r\n              appendTo="body"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ componentData.componentId + ".type" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [options]="expenseTypes"\r\n              [(ngModel)]="expenseDTO.expenseType"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              [disabled]="isReadOnlyForm"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ componentData.componentId + ".value" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input\r\n              #expenseValue="ngModel"\r\n              type="text"\r\n              class="aw-input"\r\n              [disabled]="isReadOnlyForm"\r\n              [(ngModel)]="expenseDTO.expenseValue"\r\n              [pKeyFilter]="inputValidationService.validatorOfPositiveNumber()"\r\n              [pValidateOnly]="true"\r\n              maxlength="50"\r\n            />\r\n            <p-message\r\n              *ngIf="expenseValue.invalid && (expenseValue.dirty || expenseValue.touched)"\r\n              severity="error"\r\n              [text]="inputValidationService.formatOfPositiveNumber()"\r\n            ></p-message>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ componentData.componentId + ".description" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <textarea\r\n              class="aw-textarea"\r\n              [rows]="3"\r\n              pInputTextarea\r\n              [(ngModel)]="expenseDTO.expenseDescription"\r\n              [disabled]="isReadOnlyForm"\r\n              maxlength="300"\r\n            ></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOnlyForm"\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [disabled]="\r\n        expenseDTO.expenseValue === undefined ||\r\n        expenseDTO.expenseValue === null ||\r\n        expenseDTO.expenseType === undefined ||\r\n        expenseDTO.expenseType === null ||\r\n        expenseDate === undefined ||\r\n        expenseDate === null ||\r\n        expenseDTO.expenseValue === \'\' ||\r\n        (expenseValue.invalid && (expenseValue.dirty || expenseValue.touched))\r\n      "\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/popups/expense-popup-form/expense-popup-form.component.ts':
      /*!**************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/popups/expense-popup-form/expense-popup-form.component.ts ***!
  \**************************************************************************************************************/
      /*! exports provided: ExpensePopupFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ExpensePopupFormComponent',
          function() {
            return ExpensePopupFormComponent;
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
        /* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/input-validation.service */ './src/app/shared/services/input-validation.service.ts'
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

        var ExpensePopupFormComponent = /** @class */ (function(_super) {
          __extends(ExpensePopupFormComponent, _super);
          function ExpensePopupFormComponent(
            inputValidationService,
            messageService,
            sessionService,
            propertiesService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read,
                'ExpensePopupFormComponent'
              ) || this;
            _this.inputValidationService = inputValidationService;
            _this.messageService = messageService;
            _this.sessionService = sessionService;
            _this.propertiesService = propertiesService;
            _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.expenseDTO = {};
            _this.expenseTypes = [];
            _this.loadExpenseType();
            return _this;
          }
          Object.defineProperty(ExpensePopupFormComponent.prototype, 'display', {
            get: function() {
              return this.displayValue;
            },
            set: function(displayValue) {
              this.displayValue = displayValue;
              this.displayChange.emit(this.displayValue);
            },
            enumerable: true,
            configurable: true
          });
          ExpensePopupFormComponent.prototype.ngOnInit = function() {
            if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
              this.expenseDTO = this.componentData.object || {};
              if (this.expenseDTO && !!this.expenseDTO.expenseDate) {
                this.expenseDate = new Date(this.expenseDTO.expenseDate);
              }
              this.expenseDTO.expenseValue = this.expenseDTO.expenseValue || '0';
            }
          };
          ExpensePopupFormComponent.prototype.getTypeName = function() {
            return 'ExpensePopupFormComponent';
          };
          ExpensePopupFormComponent.prototype.validate = function() {
            if (this.expenseDTO.expenseType && this.expenseDTO.expenseValue && this.expenseDate) {
              this.expenseDTO.expenseDate = this.expenseDate.toISOString();
              this.onValidated.emit(this.expenseDTO);
              this.display = false;
            } else {
              this.messageService.showErrorMessage('global.missingFields');
            }
          };
          ExpensePopupFormComponent.prototype.cancel = function() {
            this.display = false;
          };
          ExpensePopupFormComponent.prototype.loadExpenseType = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .HR_EXPENSE_TYPE_MAP
              )
              .subscribe(function(results) {
                _this.expenseTypes = JSON.parse(JSON.stringify(results));
                _this.expenseTypes.map(function(element) {
                  element.value = element.label;
                });
              });
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            ExpensePopupFormComponent.prototype,
            'display',
            null
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            ExpensePopupFormComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            ExpensePopupFormComponent.prototype,
            'displayChange',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            ExpensePopupFormComponent.prototype,
            'onValidated',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('component-data'),
              __metadata('design:type', Object)
            ],
            ExpensePopupFormComponent.prototype,
            'componentData',
            void 0
          );
          ExpensePopupFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-expense-popup-form',
                template: __webpack_require__(
                  /*! ./expense-popup-form.component.html */ './src/app/main/human-resources/employee-form/popups/expense-popup-form/expense-popup-form.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_3__['InputValidationService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__['MessageService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__['SessionService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__['PropertiesService']
              ])
            ],
            ExpensePopupFormComponent
          );
          return ExpensePopupFormComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/popups/holidays-popup-form/holidays-popup-form.component.html':
      /*!******************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/popups/holidays-popup-form/holidays-popup-form.component.html ***!
  \******************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ componentData.componentId + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ componentData.componentId + ".from" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-calendar\r\n              showButtonBar="true"\r\n              [monthNavigator]="true"\r\n              [yearNavigator]="true"\r\n              [yearRange]="sessionService.calendarYearRange"\r\n              class="aw-calendar custom-calendar-margin"\r\n              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n              [locale]="sessionService.calendarFormat"\r\n              [disabled]="isReadOnlyForm"\r\n              appendTo="body"\r\n              [(ngModel)]="startDate"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="form-label">AM</label>\r\n\r\n          <div class="form-control">\r\n            <p-radioButton class="aw-radiobutton" value="AM" [(ngModel)]="selectedFromAM"></p-radioButton>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="form-label">PM</label>\r\n\r\n          <div class="form-control">\r\n            <p-radioButton class="aw-radiobutton" value="PM" [(ngModel)]="selectedFromAM"></p-radioButton>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ componentData.componentId + ".to" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-calendar\r\n              showButtonBar="true"\r\n              [monthNavigator]="true"\r\n              [yearNavigator]="true"\r\n              [yearRange]="sessionService.calendarYearRange"\r\n              class="aw-calendar custom-calendar-margin"\r\n              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n              [locale]="sessionService.calendarFormat"\r\n              [disabled]="isReadOnlyForm"\r\n              appendTo="body"\r\n              [(ngModel)]="endDate"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="form-label">AM</label>\r\n\r\n          <div class="form-control">\r\n            <p-radioButton class="aw-radiobutton" value="AM" [(ngModel)]="selectedToAM"></p-radioButton>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="form-label">PM</label>\r\n\r\n          <div class="form-control">\r\n            <p-radioButton class="aw-radiobutton" value="PM" [(ngModel)]="selectedToAM"></p-radioButton>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ componentData.componentId + ".status" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [(ngModel)]="holidayDTO.holidayStatus"\r\n              [options]="holidayStatusList"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              [disabled]="isReadOnlyForm"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ componentData.componentId + ".validator" | translate }}</label>\r\n\r\n          <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOnlyForm }">\r\n            <div class="form-control-data" (click)="openValidatorPopup()">{{ holidayDTO.holidayValidator }}</div>\r\n\r\n            <div *ngIf="holidayDTO.holidayValidator" class="btn-clear-wrapper">\r\n              <i\r\n                class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                aria-hidden="true"\r\n                (click)="holidayDTO.holidayValidator = undefined"\r\n              ></i>\r\n            </div>\r\n            <div class="btn-search-wrapper">\r\n              <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="openValidatorPopup()"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOnlyForm"\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [disabled]="startDate === undefined || startDate === null || endDate === undefined || endDate === null"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-employee\r\n  *ngIf="showValidatorPopup"\r\n  [(display)]="!!showValidatorPopup"\r\n  [employee-name]="holidayDTO.holidayValidator"\r\n  (onSelected)="setSelectedValidator($event)"\r\n></aw-dialog-search-employee>\r\n';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/popups/holidays-popup-form/holidays-popup-form.component.ts':
      /*!****************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/popups/holidays-popup-form/holidays-popup-form.component.ts ***!
  \****************************************************************************************************************/
      /*! exports provided: HolidaysPopupFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'HolidaysPopupFormComponent',
          function() {
            return HolidaysPopupFormComponent;
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
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
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

        var HolidaysPopupFormComponent = /** @class */ (function(_super) {
          __extends(HolidaysPopupFormComponent, _super);
          function HolidaysPopupFormComponent(messageService, sessionService, propertiesService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read,
                'HolidaysPopupFormComponent'
              ) || this;
            _this.messageService = messageService;
            _this.sessionService = sessionService;
            _this.propertiesService = propertiesService;
            _this.showValidatorPopup = false;
            _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.holidayDTO = {};
            _this.selectedFromAM = 'AM';
            _this.selectedToAM = 'PM';
            _this.loadHolidayStatus();
            return _this;
          }
          Object.defineProperty(HolidaysPopupFormComponent.prototype, 'display', {
            get: function() {
              return this.displayValue;
            },
            set: function(displayValue) {
              this.displayValue = displayValue;
              this.displayChange.emit(this.displayValue);
            },
            enumerable: true,
            configurable: true
          });
          HolidaysPopupFormComponent.prototype.ngOnInit = function() {
            if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
              this.holidayDTO = this.componentData.object || {};
              var hourValue = 12;
              if (this.holidayDTO.holidayStartDate) {
                this.startDate = new Date(this.holidayDTO.holidayStartDate);
                var fromHour = new Date(this.holidayDTO.holidayStartDate).getHours();
                this.selectedFromAM = fromHour < hourValue ? 'AM' : 'PM';
              }
              if (this.holidayDTO.holidayEndDate) {
                this.endDate = new Date(this.holidayDTO.holidayEndDate);
                var toHour = new Date(this.holidayDTO.holidayEndDate).getHours();
                this.selectedToAM = toHour < hourValue ? 'AM' : 'PM';
              }
            }
          };
          HolidaysPopupFormComponent.prototype.getTypeName = function() {
            return 'HolidaysPopupFormComponent';
          };
          HolidaysPopupFormComponent.prototype.validate = function() {
            if (this.startDate && this.endDate) {
              // the service count the total day only if startDate's value is strictly before 14h/02pm and endDate's value is strictly after 14h/02pm
              var addedMilliSeconds = 43200000; // 12h
              var addedMilliSecondsFromMidnightToThreeAM = 10800000; // 3h
              var hourFromMidnightToThreeAMValue = 3;
              var hourHalfdayValue = 12;
              var hourValueForAfternoon = 14;
              if (this.selectedFromAM === 'PM') {
                var timestamp = this.startDate.getTime();
                if (this.startDate.getHours() < hourHalfdayValue) {
                  timestamp = timestamp + addedMilliSeconds;
                  if (this.startDate.getHours() < hourFromMidnightToThreeAMValue) {
                    timestamp = timestamp + addedMilliSecondsFromMidnightToThreeAM;
                  }
                  this.holidayDTO.holidayStartDate = new Date(timestamp).toISOString();
                } else if (this.startDate.getHours() <= hourValueForAfternoon) {
                  timestamp = timestamp + addedMilliSecondsFromMidnightToThreeAM;
                  this.holidayDTO.holidayStartDate = new Date(timestamp).toISOString();
                } else {
                  this.holidayDTO.holidayStartDate = new Date(this.startDate).toISOString();
                }
              } else if (this.selectedFromAM === 'AM') {
                if (this.startDate.getHours() >= hourHalfdayValue) {
                  var timestamp = this.startDate.getTime();
                  timestamp = timestamp - addedMilliSeconds;
                  this.holidayDTO.holidayStartDate = new Date(timestamp).toISOString();
                } else {
                  this.holidayDTO.holidayStartDate = new Date(this.startDate).toISOString();
                }
              }
              if (this.selectedToAM === 'PM') {
                var timestamp = this.endDate.getTime();
                if (this.endDate.getHours() < hourHalfdayValue) {
                  timestamp = timestamp + addedMilliSeconds;
                  if (this.endDate.getHours() < hourFromMidnightToThreeAMValue) {
                    timestamp = timestamp + addedMilliSecondsFromMidnightToThreeAM;
                  }
                  this.holidayDTO.holidayEndDate = new Date(timestamp).toISOString();
                } else if (this.endDate.getHours() <= hourValueForAfternoon) {
                  timestamp = timestamp + addedMilliSecondsFromMidnightToThreeAM;
                  this.holidayDTO.holidayEndDate = new Date(timestamp).toISOString();
                } else {
                  this.holidayDTO.holidayEndDate = new Date(this.endDate).toISOString();
                }
              } else if (this.selectedToAM === 'AM') {
                if (this.endDate.getHours() >= hourHalfdayValue) {
                  var timestamp = this.endDate.getTime();
                  timestamp = timestamp - addedMilliSeconds;
                  this.holidayDTO.holidayEndDate = new Date(timestamp).toISOString();
                } else {
                  this.holidayDTO.holidayEndDate = new Date(this.endDate).toISOString();
                }
              }
              if (
                this.holidayDTO.holidayEndDate &&
                this.holidayDTO.holidayStartDate &&
                new Date(this.holidayDTO.holidayEndDate) < new Date(this.holidayDTO.holidayStartDate)
              ) {
                this.messageService.showErrorMessage(this.getTranslateKey('fromDateGreaterThanToDateError'));
                return;
              }
              this.onValidated.emit(this.holidayDTO);
              this.display = false;
            } else {
              this.messageService.showErrorMessage('global.missingFields');
            }
          };
          HolidaysPopupFormComponent.prototype.cancel = function() {
            this.display = false;
          };
          HolidaysPopupFormComponent.prototype.loadHolidayStatus = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .HR_ABSENCE_STATUS_MAP
              )
              .subscribe(function(results) {
                _this.holidayStatusList = JSON.parse(JSON.stringify(results));
                _this.holidayStatusList.map(function(holiday) {
                  return (holiday.value = holiday.label);
                });
              });
          };
          HolidaysPopupFormComponent.prototype.openValidatorPopup = function() {
            this.showValidatorPopup = true;
          };
          HolidaysPopupFormComponent.prototype.setSelectedValidator = function(validator) {
            this.holidayDTO.holidayValidator = validator.employeeLastName;
            this.holidayDTO.bidtEmployeeByBidtEmployeeId2Id = validator.id;
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            HolidaysPopupFormComponent.prototype,
            'display',
            null
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            HolidaysPopupFormComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            HolidaysPopupFormComponent.prototype,
            'displayChange',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            HolidaysPopupFormComponent.prototype,
            'onValidated',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('component-data'),
              __metadata('design:type', Object)
            ],
            HolidaysPopupFormComponent.prototype,
            'componentData',
            void 0
          );
          HolidaysPopupFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-holidays-popup-form',
                template: __webpack_require__(
                  /*! ./holidays-popup-form.component.html */ './src/app/main/human-resources/employee-form/popups/holidays-popup-form/holidays-popup-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ../../employee-form.component.scss */ './src/app/main/human-resources/employee-form/employee-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__['MessageService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__['SessionService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__['PropertiesService']
              ])
            ],
            HolidaysPopupFormComponent
          );
          return HolidaysPopupFormComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/popups/hourly-costs-popup-form/hourly-costs-popup-form.component.html':
      /*!**************************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/popups/hourly-costs-popup-form/hourly-costs-popup-form.component.html ***!
  \**************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ componentData.componentId + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ componentData.componentId + ".type" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [options]="hourlyCostTypes"\r\n              [disabled]="isReadOnlyForm"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              [(ngModel)]="hourlyCostsDTO.hcDayType"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">\r\n            {{ componentData.componentId + ".cost" | translate }} <span *ngIf="currencyLebel">{{ currencyLebel }}</span>\r\n          </label>\r\n\r\n          <div class="form-control">\r\n            <input\r\n              #hcCost="ngModel"\r\n              type="text"\r\n              class="aw-input"\r\n              [(ngModel)]="hourlyCostsDTO.hcCost"\r\n              [disabled]="isReadOnlyForm"\r\n              [pKeyFilter]="inputValidationService.validatorOfPositiveNumber()"\r\n              [pValidateOnly]="true"\r\n            />\r\n            <p-message\r\n              *ngIf="hcCost.invalid && (hcCost.dirty || hcCost.touched)"\r\n              severity="error"\r\n              [text]="inputValidationService.formatOfPositiveNumber()"\r\n            ></p-message>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOnlyForm"\r\n      type="button"\r\n      mat-raised-button\r\n      color="primary"\r\n      (click)="validate()"\r\n      [disabled]="\r\n        hourlyCostsDTO.hcDayType === undefined ||\r\n        hourlyCostsDTO.hcDayType === null ||\r\n        hourlyCostsDTO.hcCost === undefined ||\r\n        hourlyCostsDTO.hcCost === null ||\r\n        hourlyCostsDTO.hcCost === \'\' ||\r\n        (hcCost.invalid && (hcCost.dirty || hcCost.touched))\r\n      "\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/popups/hourly-costs-popup-form/hourly-costs-popup-form.component.ts':
      /*!************************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/popups/hourly-costs-popup-form/hourly-costs-popup-form.component.ts ***!
  \************************************************************************************************************************/
      /*! exports provided: HourlyCostsPopupFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'HourlyCostsPopupFormComponent',
          function() {
            return HourlyCostsPopupFormComponent;
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
        /* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/input-validation.service */ './src/app/shared/services/input-validation.service.ts'
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
        /* harmony import */ var _employee_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../employee-form.service */ './src/app/main/human-resources/employee-form/employee-form.service.ts'
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

        var HourlyCostsPopupFormComponent = /** @class */ (function(_super) {
          __extends(HourlyCostsPopupFormComponent, _super);
          function HourlyCostsPopupFormComponent(
            inputValidationService,
            messageService,
            sessionService,
            propertiesService,
            employeeFormService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read,
                'HourlyCostsPopupFormComponent'
              ) || this;
            _this.inputValidationService = inputValidationService;
            _this.messageService = messageService;
            _this.sessionService = sessionService;
            _this.propertiesService = propertiesService;
            _this.employeeFormService = employeeFormService;
            _this.currencyLebel = '';
            _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.hourlyCostsDTO = {};
            _this.hourlyCostsOutputDTO = {};
            _this.loadHourlyCostType();
            return _this;
          }
          Object.defineProperty(HourlyCostsPopupFormComponent.prototype, 'display', {
            get: function() {
              return this.displayValue;
            },
            set: function(displayValue) {
              this.displayValue = displayValue;
              this.displayChange.emit(this.displayValue);
            },
            enumerable: true,
            configurable: true
          });
          HourlyCostsPopupFormComponent.prototype.ngOnInit = function() {
            var _this = this;
            if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
              this.hourlyCostsOutputDTO = this.componentData.object || {};
              if (!this.hourlyCostsOutputDTO.bitHourlyCostDTO) {
                this.hourlyCostsOutputDTO.bitHourlyCostDTO = {};
              }
              this.hourlyCostsDTO = this.hourlyCostsOutputDTO.bitHourlyCostDTO;
              this.hourlyCostsDTO.hcCost = this.hourlyCostsDTO.hcCost || 0;
            }
            this.employeeFormService.getLocalCurrency().subscribe(function(result) {
              _this.currencyLebel = result;
            });
          };
          HourlyCostsPopupFormComponent.prototype.getTypeName = function() {
            return 'HourlyCostsPopupFormComponent';
          };
          HourlyCostsPopupFormComponent.prototype.validate = function() {
            var _this = this;
            if (this.hourlyCostsDTO.hcDayType && Number(this.hourlyCostsDTO.hcCost) >= 0) {
              var costType = this.hourlyCostTypes.filter(function(costObj) {
                return costObj.value === _this.hourlyCostsDTO.hcDayType;
              })[0];
              var decimalPrecision = 2;
              var decimalFactor = 100;
              this.hourlyCostsOutputDTO.costType = costType.label;
              if (this.hourlyCostsOutputDTO.bitHourlyCostDTO) {
                this.hourlyCostsOutputDTO.bitHourlyCostDTO.hcCost = this.hourlyCostsDTO.hcCost;
              }
              var costText = parseFloat(
                (Math.round(Number(this.hourlyCostsDTO.hcCost) * decimalFactor) / decimalFactor).toString()
              ).toFixed(decimalPrecision);
              this.hourlyCostsOutputDTO.costText = costText + ' ' + this.currencyLebel;
              this.onValidated.emit(this.hourlyCostsOutputDTO);
              this.display = false;
            } else {
              this.messageService.showErrorMessage('global.missingFields');
            }
          };
          HourlyCostsPopupFormComponent.prototype.cancel = function() {
            this.display = false;
          };
          HourlyCostsPopupFormComponent.prototype.loadHourlyCostType = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .HR_HC_DAY_TYPE_MAP
              )
              .subscribe(function(results) {
                _this.hourlyCostTypes = results;
              });
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            HourlyCostsPopupFormComponent.prototype,
            'display',
            null
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            HourlyCostsPopupFormComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            HourlyCostsPopupFormComponent.prototype,
            'displayChange',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            HourlyCostsPopupFormComponent.prototype,
            'onValidated',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('component-data'),
              __metadata('design:type', Object)
            ],
            HourlyCostsPopupFormComponent.prototype,
            'componentData',
            void 0
          );
          HourlyCostsPopupFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-hourly-costs-popup-form',
                template: __webpack_require__(
                  /*! ./hourly-costs-popup-form.component.html */ './src/app/main/human-resources/employee-form/popups/hourly-costs-popup-form/hourly-costs-popup-form.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_3__['InputValidationService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__['MessageService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__['SessionService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__['PropertiesService'],
                _employee_form_service__WEBPACK_IMPORTED_MODULE_8__['EmployeeFormService']
              ])
            ],
            HourlyCostsPopupFormComponent
          );
          return HourlyCostsPopupFormComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/popups/medical-examination-popup-form/medical-examination-popup-form.component.html':
      /*!****************************************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/popups/medical-examination-popup-form/medical-examination-popup-form.component.html ***!
  \****************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ componentData.componentId + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ componentData.componentId + ".date" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-calendar\r\n              showButtonBar="true"\r\n              [monthNavigator]="true"\r\n              [yearNavigator]="true"\r\n              [yearRange]="sessionService.calendarYearRange"\r\n              class="aw-calendar"\r\n              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n              [locale]="sessionService.calendarFormat"\r\n              [disabled]="isReadOnlyForm"\r\n              [(ngModel)]="visitDate"\r\n              appendTo="body"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ componentData.componentId + ".endOfValidity" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-calendar\r\n              showButtonBar="true"\r\n              [monthNavigator]="true"\r\n              [yearNavigator]="true"\r\n              [yearRange]="sessionService.calendarYearRange"\r\n              class="aw-calendar"\r\n              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n              [locale]="sessionService.calendarFormat"\r\n              [disabled]="isReadOnlyForm"\r\n              appendTo="body"\r\n              [(ngModel)]="visitExpiration"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ componentData.componentId + ".comment" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <textarea\r\n              class="aw-textarea"\r\n              [rows]="3"\r\n              pInputTextarea\r\n              [disabled]="isReadOnlyForm"\r\n              [(ngModel)]="medicalExaminationObj.visitComment"\r\n              maxlength="300"\r\n            ></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOnlyForm"\r\n      type="button"\r\n      color="primary"\r\n      mat-raised-button\r\n      (click)="validate()"\r\n      [disabled]="visitDate === undefined || visitDate === null"\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/popups/medical-examination-popup-form/medical-examination-popup-form.component.ts':
      /*!**************************************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/popups/medical-examination-popup-form/medical-examination-popup-form.component.ts ***!
  \**************************************************************************************************************************************/
      /*! exports provided: MedicalExaminationPopupFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MedicalExaminationPopupFormComponent',
          function() {
            return MedicalExaminationPopupFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
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

        var MedicalExaminationPopupFormComponent = /** @class */ (function(_super) {
          __extends(MedicalExaminationPopupFormComponent, _super);
          function MedicalExaminationPopupFormComponent(messageService, sessionService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Read,
                'MedicalExaminationPopupFormComponent'
              ) || this;
            _this.messageService = messageService;
            _this.sessionService = sessionService;
            _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.medicalExaminationObj = {};
            return _this;
          }
          Object.defineProperty(MedicalExaminationPopupFormComponent.prototype, 'display', {
            get: function() {
              return this.displayValue;
            },
            set: function(displayValue) {
              this.displayValue = displayValue;
              this.displayChange.emit(this.displayValue);
            },
            enumerable: true,
            configurable: true
          });
          MedicalExaminationPopupFormComponent.prototype.ngOnInit = function() {
            if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
              this.medicalExaminationObj = this.componentData.object || {};
              if (this.medicalExaminationObj && !!this.medicalExaminationObj.visitDate) {
                this.visitDate = new Date(this.medicalExaminationObj.visitDate);
              }
              if (this.medicalExaminationObj && !!this.medicalExaminationObj.visitExpiration) {
                this.visitExpiration = new Date(this.medicalExaminationObj.visitExpiration);
              }
            }
          };
          MedicalExaminationPopupFormComponent.prototype.getTypeName = function() {
            return 'MedicalExaminationPopupFormComponent';
          };
          MedicalExaminationPopupFormComponent.prototype.validate = function() {
            if (this.visitDate) {
              this.medicalExaminationObj.visitDate = this.visitDate.toISOString();
              this.medicalExaminationObj.visitExpiration = this.visitExpiration && this.visitExpiration.toISOString();
              this.onValidated.emit(this.medicalExaminationObj);
              this.display = false;
            } else {
              this.messageService.showErrorMessage('global.missingFields');
            }
          };
          MedicalExaminationPopupFormComponent.prototype.cancel = function() {
            this.display = false;
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            MedicalExaminationPopupFormComponent.prototype,
            'display',
            null
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            MedicalExaminationPopupFormComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            MedicalExaminationPopupFormComponent.prototype,
            'displayChange',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            MedicalExaminationPopupFormComponent.prototype,
            'onValidated',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('component-data'),
              __metadata('design:type', Object)
            ],
            MedicalExaminationPopupFormComponent.prototype,
            'componentData',
            void 0
          );
          MedicalExaminationPopupFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-medical-examination-popup-form',
                template: __webpack_require__(
                  /*! ./medical-examination-popup-form.component.html */ './src/app/main/human-resources/employee-form/popups/medical-examination-popup-form/medical-examination-popup-form.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__['MessageService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__['SessionService']
              ])
            ],
            MedicalExaminationPopupFormComponent
          );
          return MedicalExaminationPopupFormComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/popups/qualification-popup-form/qualification-popup-form.component.html':
      /*!****************************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/popups/qualification-popup-form/qualification-popup-form.component.html ***!
  \****************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ componentData.componentId + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ componentData.componentId + ".type" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [options]="qualificationTypes"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              [disabled]="isReadOnlyForm"\r\n              [(ngModel)]="selectedQualificationType"\r\n              (onChange)="loadTitles()"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ componentData.componentId + ".qualificationTitle" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [options]="qualificationTitles"\r\n              [(ngModel)]="selectedQualificationTitle"\r\n              [disabled]="isReadOnlyForm"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ componentData.componentId + ".institution" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input\r\n              [(ngModel)]="bidtQualifEmployeeDTO.qualifEmployeeInstitution"\r\n              type="text"\r\n              class="aw-input"\r\n              [disabled]="isReadOnlyForm"\r\n              maxlength="100"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ componentData.componentId + ".obtainingDate" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-calendar\r\n              showButtonBar="true"\r\n              [monthNavigator]="true"\r\n              [yearNavigator]="true"\r\n              [yearRange]="sessionService.calendarYearRange"\r\n              class="aw-calendar"\r\n              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n              [locale]="sessionService.calendarFormat"\r\n              [(ngModel)]="qualifEmployeeStartDate"\r\n              appendTo="body"\r\n              [disabled]="isReadOnlyForm"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ componentData.componentId + ".endingDate" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-calendar\r\n              showButtonBar="true"\r\n              [monthNavigator]="true"\r\n              [yearNavigator]="true"\r\n              [yearRange]="sessionService.calendarYearRange"\r\n              class="aw-calendar"\r\n              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n              [locale]="sessionService.calendarFormat"\r\n              [(ngModel)]="qualifEmployeeEndDate"\r\n              appendTo="body"\r\n              [disabled]="isReadOnlyForm"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ componentData.componentId + ".qualifOngoing" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-checkbox\r\n              binary="true"\r\n              class="aw-checkbox general-type-checkbox"\r\n              [(ngModel)]="bidtQualifEmployeeDTO.qualifOngoing"\r\n              [disabled]="isReadOnlyForm"\r\n            ></p-checkbox>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOnlyForm"\r\n      type="button"\r\n      color="primary"\r\n      mat-raised-button\r\n      (click)="validate()"\r\n      [disabled]="\r\n        selectedQualificationType === undefined ||\r\n        selectedQualificationType === null ||\r\n        selectedQualificationTitle === undefined ||\r\n        selectedQualificationTitle === null\r\n      "\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/popups/qualification-popup-form/qualification-popup-form.component.ts':
      /*!**************************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/popups/qualification-popup-form/qualification-popup-form.component.ts ***!
  \**************************************************************************************************************************/
      /*! exports provided: QualificationPopupFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'QualificationPopupFormComponent',
          function() {
            return QualificationPopupFormComponent;
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
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
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
        /* harmony import */ var _qualification_popup_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./qualification-popup-form.service */ './src/app/main/human-resources/employee-form/popups/qualification-popup-form/qualification-popup-form.service.ts'
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

        var QualificationPopupFormComponent = /** @class */ (function(_super) {
          __extends(QualificationPopupFormComponent, _super);
          function QualificationPopupFormComponent(
            qualificationPopupFormService,
            messageService,
            sessionService,
            propertiesService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read,
                'QualificationPopupFormComponent'
              ) || this;
            _this.qualificationPopupFormService = qualificationPopupFormService;
            _this.messageService = messageService;
            _this.sessionService = sessionService;
            _this.propertiesService = propertiesService;
            _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.qualificationTitles = [];
            _this.qualificationTypes = [];
            _this.qualificationTitlesCache = [];
            _this.qualifEmployeeDTO = {};
            _this.bidtQualifEmployeeDTO = {};
            _this.loadQualificationType();
            return _this;
          }
          Object.defineProperty(QualificationPopupFormComponent.prototype, 'display', {
            get: function() {
              return this.displayValue;
            },
            set: function(displayValue) {
              this.displayValue = displayValue;
              this.displayChange.emit(this.displayValue);
            },
            enumerable: true,
            configurable: true
          });
          QualificationPopupFormComponent.prototype.ngOnInit = function() {
            var _this = this;
            this.qualificationPopupFormService.findQualificationTitle().subscribe(function(results) {
              _this.qualificationTitlesCache = results;
              if (_this.componentData && _this.componentData.componentId) {
                _this.qualifEmployeeDTO = _this.componentData.object || {};
                if (!_this.qualifEmployeeDTO.bidtQualifEmployeeDTO) {
                  _this.qualifEmployeeDTO.bidtQualifEmployeeDTO = {};
                }
                _this.bidtQualifEmployeeDTO = _this.qualifEmployeeDTO.bidtQualifEmployeeDTO;
                if (_this.bidtQualifEmployeeDTO && !!_this.bidtQualifEmployeeDTO.qualifEmployeeStartDate) {
                  _this.qualifEmployeeStartDate = new Date(_this.bidtQualifEmployeeDTO.qualifEmployeeStartDate);
                }
                if (_this.bidtQualifEmployeeDTO && !!_this.bidtQualifEmployeeDTO.qualifEmployeeEndDate) {
                  _this.qualifEmployeeEndDate = new Date(_this.bidtQualifEmployeeDTO.qualifEmployeeEndDate);
                }
                _this.showQualificationType();
                _this.loadTitles();
              }
            });
          };
          QualificationPopupFormComponent.prototype.getTypeName = function() {
            return 'QualificationPopupFormComponent';
          };
          QualificationPopupFormComponent.prototype.validate = function() {
            var _this = this;
            if (
              this.qualifEmployeeDTO.bidtQualifEmployeeDTO &&
              this.selectedQualificationTitle &&
              this.selectedQualificationType
            ) {
              this.qualifEmployeeDTO.bidtQualifEmployeeDTO.qualifEmployeeEndDate =
                this.qualifEmployeeEndDate && this.qualifEmployeeEndDate.toISOString();
              this.qualifEmployeeDTO.bidtQualifEmployeeDTO.qualifEmployeeStartDate =
                this.qualifEmployeeStartDate && this.qualifEmployeeStartDate.toISOString();
              this.qualifEmployeeDTO.qualificationType = this.qualificationTypes.filter(function(types) {
                return types.value === _this.selectedQualificationType;
              })[0].label;
              this.qualifEmployeeDTO.bidtQualifEmployeeDTO.bidtQualificationId = Number(
                this.selectedQualificationTitle
              );
              this.qualifEmployeeDTO.qualificationTitle = this.qualificationTitles.filter(function(title) {
                return title.value === _this.selectedQualificationTitle;
              })[0].label;
              this.onValidated.emit(this.qualifEmployeeDTO);
              this.display = false;
            } else {
              this.messageService.showErrorMessage('global.missingFields');
            }
          };
          QualificationPopupFormComponent.prototype.cancel = function() {
            this.display = false;
          };
          QualificationPopupFormComponent.prototype.showQualificationType = function() {
            var _this = this;
            var temp = this.qualificationTypes.filter(function(qualifType) {
              return qualifType.label === _this.qualifEmployeeDTO.qualificationType;
            })[0];
            this.selectedQualificationType = temp && temp.value;
          };
          QualificationPopupFormComponent.prototype.loadQualificationType = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .HR_QUALIFICATION_TYPE_MAP
              )
              .subscribe(function(results) {
                _this.qualificationTypes = results;
              });
          };
          QualificationPopupFormComponent.prototype.loadTitles = function() {
            var _this = this;
            this.qualificationTitles = [];
            if (this.selectedQualificationType) {
              var titlesTemp = this.qualificationTitlesCache.filter(function(title) {
                return title.bidtQualificationData.qualificationType === _this.selectedQualificationType;
              });
              titlesTemp.forEach(function(title) {
                _this.qualificationTitles.push({
                  label: title.labelValueList.label,
                  value: title.labelValueList.value
                });
              });
              // show selected title
              var selectedTitleObj = this.qualificationTitles.filter(function(title) {
                return title.label === _this.qualifEmployeeDTO.qualificationTitle;
              })[0];
              this.selectedQualificationTitle = selectedTitleObj && selectedTitleObj.value;
            }
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            QualificationPopupFormComponent.prototype,
            'display',
            null
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            QualificationPopupFormComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            QualificationPopupFormComponent.prototype,
            'displayChange',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            QualificationPopupFormComponent.prototype,
            'onValidated',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('component-data'),
              __metadata('design:type', Object)
            ],
            QualificationPopupFormComponent.prototype,
            'componentData',
            void 0
          );
          QualificationPopupFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-qualification-popup-form',
                template: __webpack_require__(
                  /*! ./qualification-popup-form.component.html */ './src/app/main/human-resources/employee-form/popups/qualification-popup-form/qualification-popup-form.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _qualification_popup_form_service__WEBPACK_IMPORTED_MODULE_7__['QualificationPopupFormService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__['MessageService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__['SessionService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__['PropertiesService']
              ])
            ],
            QualificationPopupFormComponent
          );
          return QualificationPopupFormComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/popups/qualification-popup-form/qualification-popup-form.service.ts':
      /*!************************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/popups/qualification-popup-form/qualification-popup-form.service.ts ***!
  \************************************************************************************************************************/
      /*! exports provided: QualificationPopupFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'QualificationPopupFormService',
          function() {
            return QualificationPopupFormService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_bidt_qualification_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/api/bidt-qualification.api */ './src/app/shared/api/bidt-qualification.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
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

        var QualificationPopupFormService = /** @class */ (function(_super) {
          __extends(QualificationPopupFormService, _super);
          function QualificationPopupFormService(http, appConfigService, bidtQualificationApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtQualificationApi = bidtQualificationApi;
            return _this;
          }
          QualificationPopupFormService.prototype.findQualificationTitle = function() {
            return _super.prototype.post.call(this, this.bidtQualificationApi.findQualificationTitle);
          };
          QualificationPopupFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_bidt_qualification_api__WEBPACK_IMPORTED_MODULE_2__['BidtQualificationApi']
              ])
            ],
            QualificationPopupFormService
          );
          return QualificationPopupFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/popups/training-popup-form/training-popup-form.component.html':
      /*!******************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/popups/training-popup-form/training-popup-form.component.html ***!
  \******************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ componentData.componentId + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ componentData.componentId + ".trainingTitle" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input\r\n              type="text"\r\n              class="aw-input"\r\n              [disabled]="isReadOnlyForm"\r\n              [(ngModel)]="trainingDTO.trainingName"\r\n              maxlength="100"\r\n            />\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group"></div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group flex--2" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ componentData.componentId + ".startTime" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-calendar\r\n              showButtonBar="true"\r\n              [monthNavigator]="true"\r\n              [yearNavigator]="true"\r\n              [yearRange]="sessionService.calendarYearRange"\r\n              class="aw-calendar"\r\n              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n              [locale]="sessionService.calendarFormat"\r\n              [disabled]="isReadOnlyForm"\r\n              appendTo="body"\r\n              [(ngModel)]="selectedTrainingStartDate"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="form-label">AM</label>\r\n\r\n          <div class="form-control">\r\n            <p-radioButton class="aw-radiobutton" value="AM" [(ngModel)]="selectedFromAM"></p-radioButton>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="form-label">PM</label>\r\n\r\n          <div class="form-control">\r\n            <p-radioButton class="aw-radiobutton" value="PM" [(ngModel)]="selectedFromAM"></p-radioButton>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group flex--2" [ngClass]="{ required: !isReadOnlyForm }">\r\n          <label class="form-label">{{ componentData.componentId + ".endTime" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-calendar\r\n              showButtonBar="true"\r\n              [monthNavigator]="true"\r\n              [yearNavigator]="true"\r\n              [yearRange]="sessionService.calendarYearRange"\r\n              class="aw-calendar"\r\n              [dateFormat]="sessionService.dateFormatPrimeNG"\r\n              [locale]="sessionService.calendarFormat"\r\n              [disabled]="isReadOnlyForm"\r\n              appendTo="body"\r\n              [(ngModel)]="selectedTrainingEndDate"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="form-label">AM</label>\r\n\r\n          <div class="form-control">\r\n            <p-radioButton class="aw-radiobutton" value="AM" [(ngModel)]="selectedToAM"></p-radioButton>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="form-label">PM</label>\r\n\r\n          <div class="form-control">\r\n            <p-radioButton class="aw-radiobutton" value="PM" [(ngModel)]="selectedToAM"></p-radioButton>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ componentData.componentId + ".performed" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-checkbox\r\n              binary="true"\r\n              class="aw-checkbox"\r\n              [(ngModel)]="trainingDTO.trainingPerformed"\r\n              [disabled]="isReadOnlyForm"\r\n            ></p-checkbox>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ componentData.componentId + ".requestedBy" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [options]="requestedByList"\r\n              [(ngModel)]="trainingDTO.trainingAskedBy"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              [disabled]="isReadOnlyForm"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="form-label">{{ componentData.componentId + ".instructor" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input\r\n              type="text"\r\n              class="aw-input"\r\n              [disabled]="isReadOnlyForm"\r\n              [(ngModel)]="trainingDTO.trainingInstructor"\r\n              maxlength="100"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <label class="form-label">{{ componentData.componentId + ".center" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input\r\n              type="text"\r\n              class="aw-input"\r\n              [disabled]="isReadOnlyForm"\r\n              [(ngModel)]="trainingDTO.trainingCenter"\r\n              maxlength="100"\r\n            />\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label class="form-label">{{ componentData.componentId + ".comment" | translate }}</label>\r\n\r\n          <div class="form-control">\r\n            <input\r\n              type="text"\r\n              class="aw-input"\r\n              [disabled]="isReadOnlyForm"\r\n              [(ngModel)]="trainingDTO.trainingComment"\r\n              maxlength="300"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOnlyForm" type="button" mat-raised-button (click)="cancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOnlyForm"\r\n      type="button"\r\n      color="primary"\r\n      mat-raised-button\r\n      (click)="validate()"\r\n      [disabled]="\r\n        trainingDTO.trainingName === undefined ||\r\n        trainingDTO.trainingName === null ||\r\n        trainingDTO.trainingName.trim().length === 0 ||\r\n        selectedTrainingStartDate === undefined ||\r\n        selectedTrainingStartDate === null ||\r\n        selectedTrainingEndDate === undefined ||\r\n        selectedTrainingEndDate === null\r\n      "\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/popups/training-popup-form/training-popup-form.component.ts':
      /*!****************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/popups/training-popup-form/training-popup-form.component.ts ***!
  \****************************************************************************************************************/
      /*! exports provided: TrainingPopupFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'TrainingPopupFormComponent',
          function() {
            return TrainingPopupFormComponent;
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
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
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

        var TrainingPopupFormComponent = /** @class */ (function(_super) {
          __extends(TrainingPopupFormComponent, _super);
          function TrainingPopupFormComponent(messageService, sessionService, propertiesService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read,
                'TrainingPopupFormComponent'
              ) || this;
            _this.messageService = messageService;
            _this.sessionService = sessionService;
            _this.propertiesService = propertiesService;
            _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.trainingDTO = {};
            _this.selectedFromAM = 'AM';
            _this.selectedToAM = 'PM';
            _this.loadRequestedbyList();
            return _this;
          }
          Object.defineProperty(TrainingPopupFormComponent.prototype, 'display', {
            get: function() {
              return this.displayValue;
            },
            set: function(displayValue) {
              this.displayValue = displayValue;
              this.displayChange.emit(this.displayValue);
            },
            enumerable: true,
            configurable: true
          });
          TrainingPopupFormComponent.prototype.ngOnInit = function() {
            if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
              this.trainingDTO = this.componentData.object || {};
              if (this.trainingDTO && this.trainingDTO.trainingStartDate) {
                this.selectedTrainingStartDate = new Date(this.trainingDTO.trainingStartDate);
              }
              if (this.trainingDTO && this.trainingDTO.trainingEndDate) {
                this.selectedTrainingEndDate = new Date(this.trainingDTO.trainingEndDate);
              }
              var hourValue = 12;
              if (this.trainingDTO.trainingStartDate) {
                var startTime = new Date(this.trainingDTO.trainingStartDate);
                var fromHour = startTime.getHours();
                this.selectedFromAM = fromHour < hourValue ? 'AM' : 'PM';
              }
              if (this.trainingDTO.trainingEndDate) {
                var endTime = new Date(this.trainingDTO.trainingEndDate);
                var toHour = endTime.getHours();
                this.selectedToAM = toHour < hourValue ? 'AM' : 'PM';
              }
            }
          };
          TrainingPopupFormComponent.prototype.getTypeName = function() {
            return 'TrainingPopupFormComponent';
          };
          TrainingPopupFormComponent.prototype.validate = function() {
            if (this.trainingDTO.trainingName && this.selectedTrainingStartDate && this.selectedTrainingEndDate) {
              var addedMilliSeconds = 43200000;
              var hourValue = 12;
              if (this.selectedFromAM === 'PM') {
                if (this.selectedTrainingStartDate.getHours() < hourValue) {
                  var timestamp = this.selectedTrainingStartDate.getTime();
                  timestamp = timestamp + addedMilliSeconds;
                  this.trainingDTO.trainingStartDate = new Date(timestamp).toISOString();
                } else {
                  this.trainingDTO.trainingStartDate =
                    this.selectedTrainingStartDate && this.selectedTrainingStartDate.toISOString();
                }
              } else if (this.selectedFromAM === 'AM') {
                if (this.selectedTrainingStartDate.getHours() >= hourValue) {
                  var timestamp = this.selectedTrainingStartDate.getTime();
                  timestamp = timestamp - addedMilliSeconds;
                  this.trainingDTO.trainingStartDate = new Date(timestamp).toISOString();
                } else {
                  this.trainingDTO.trainingStartDate =
                    this.selectedTrainingStartDate && this.selectedTrainingStartDate.toISOString();
                }
              }
              if (this.selectedToAM === 'PM') {
                if (this.selectedTrainingEndDate.getHours() < hourValue) {
                  var timestamp = this.selectedTrainingEndDate.getTime();
                  timestamp = timestamp + addedMilliSeconds;
                  this.trainingDTO.trainingEndDate = new Date(timestamp).toISOString();
                } else {
                  this.trainingDTO.trainingEndDate =
                    this.selectedTrainingEndDate && this.selectedTrainingEndDate.toISOString();
                }
              } else if (this.selectedToAM === 'AM') {
                if (this.selectedTrainingEndDate.getHours() >= hourValue) {
                  var timestamp = this.selectedTrainingEndDate.getTime();
                  timestamp = timestamp - addedMilliSeconds;
                  this.trainingDTO.trainingEndDate = new Date(timestamp).toISOString();
                } else {
                  this.trainingDTO.trainingEndDate =
                    this.selectedTrainingEndDate && this.selectedTrainingEndDate.toISOString();
                }
              }
              if (
                this.trainingDTO.trainingEndDate &&
                this.trainingDTO.trainingStartDate &&
                new Date(this.trainingDTO.trainingEndDate) < new Date(this.trainingDTO.trainingStartDate)
              ) {
                this.messageService.showErrorMessage(this.getTranslateKey('fromDateGreaterThanToDateError'));
                return;
              }
              this.trainingDTO.trainingPerformed = this.trainingDTO.trainingPerformed ? 1 : 0;
              this.onValidated.emit(this.trainingDTO);
              this.display = false;
            } else {
              this.messageService.showErrorMessage('global.missingFields');
            }
          };
          TrainingPopupFormComponent.prototype.cancel = function() {
            this.display = false;
          };
          TrainingPopupFormComponent.prototype.loadRequestedbyList = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__['GenericPropertyConstants']
                  .HR_TRAINING_ASKED_BY_MAP
              )
              .subscribe(function(results) {
                _this.requestedByList = JSON.parse(JSON.stringify(results));
                _this.requestedByList.map(function(requestedBy) {
                  return (requestedBy.value = requestedBy.label);
                });
              });
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            TrainingPopupFormComponent.prototype,
            'display',
            null
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            TrainingPopupFormComponent.prototype,
            'isReadOnlyForm',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            TrainingPopupFormComponent.prototype,
            'displayChange',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            TrainingPopupFormComponent.prototype,
            'onValidated',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('component-data'),
              __metadata('design:type', Object)
            ],
            TrainingPopupFormComponent.prototype,
            'componentData',
            void 0
          );
          TrainingPopupFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-training-popup-form',
                template: __webpack_require__(
                  /*! ./training-popup-form.component.html */ './src/app/main/human-resources/employee-form/popups/training-popup-form/training-popup-form.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__['MessageService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__['SessionService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__['PropertiesService']
              ])
            ],
            TrainingPopupFormComponent
          );
          return TrainingPopupFormComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/work-flight-table-filters/work-flight-table-filters.component.html':
      /*!***********************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/work-flight-table-filters/work-flight-table-filters.component.html ***!
  \***********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="row">\r\n  <div class="form-group">\r\n    <label class="form-label"> {{ getComponentName() + ".filterOnStart" | translate }} </label>\r\n    <div class="form-control"></div>\r\n  </div>\r\n\r\n  <div class="form-group">\r\n    <label class="form-label"> {{ getComponentName() + ".from" | translate }} </label>\r\n    <div class="form-control">\r\n      <p-calendar\r\n        showButtonBar="true"\r\n        [monthNavigator]="true"\r\n        [yearNavigator]="true"\r\n        [yearRange]="sessionService.calendarYearRange"\r\n        class="aw-calendar"\r\n        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n        [locale]="sessionService.calendarFormat"\r\n        [(ngModel)]="searchCriteria.fromStartTimeFilter"\r\n        appendTo="body"\r\n        class="aw-calendar"\r\n      ></p-calendar>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="form-group">\r\n    <label class="form-label"> {{ getComponentName() + ".to" | translate }} </label>\r\n    <div class="form-control">\r\n      <p-calendar\r\n        showButtonBar="true"\r\n        [monthNavigator]="true"\r\n        [yearNavigator]="true"\r\n        [yearRange]="sessionService.calendarYearRange"\r\n        class="aw-calendar"\r\n        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n        [locale]="sessionService.calendarFormat"\r\n        [(ngModel)]="searchCriteria.toStartTimeTimeFilter"\r\n        appendTo="body"\r\n      ></p-calendar>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="row">\r\n  <div class="form-group">\r\n    <label class="form-label"> {{ getComponentName() + ".filterOnEnd" | translate }} </label>\r\n    <div class="form-control"></div>\r\n  </div>\r\n  <div class="form-group">\r\n    <label class="form-label"> {{ getComponentName() + ".from" | translate }} </label>\r\n    <div class="form-control">\r\n      <p-calendar\r\n        showButtonBar="true"\r\n        [monthNavigator]="true"\r\n        [yearNavigator]="true"\r\n        [yearRange]="sessionService.calendarYearRange"\r\n        class="aw-calendar"\r\n        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n        [locale]="sessionService.calendarFormat"\r\n        [(ngModel)]="searchCriteria.fromEndTimeFilter"\r\n        appendTo="body"\r\n      ></p-calendar>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="form-group">\r\n    <label class="form-label"> {{ getComponentName() + ".to" | translate }} </label>\r\n    <div class="form-control">\r\n      <p-calendar\r\n        showButtonBar="true"\r\n        [monthNavigator]="true"\r\n        [yearNavigator]="true"\r\n        [yearRange]="sessionService.calendarYearRange"\r\n        class="aw-calendar"\r\n        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n        [locale]="sessionService.calendarFormat"\r\n        [(ngModel)]="searchCriteria.toEndTimeFilter"\r\n        appendTo="body"\r\n      ></p-calendar>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="row action-list">\r\n  <button type="button" mat-raised-button (click)="reset()">\r\n    {{ "global.reset" | translate }}\r\n  </button>\r\n\r\n  <button type="button" mat-raised-button (click)="filter()">\r\n    {{ "global.filter" | translate }}\r\n  </button>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/work-flight-table-filters/work-flight-table-filters.component.scss':
      /*!***********************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/work-flight-table-filters/work-flight-table-filters.component.scss ***!
  \***********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .action-list {\n  justify-content: flex-end; }\n  :host .action-list .aw-btn {\n    margin-left: 8px; }\n  :host .action-list .aw-btn:first-of-type {\n      margin-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9odW1hbi1yZXNvdXJjZXMvZW1wbG95ZWUtZm9ybS93b3JrLWZsaWdodC10YWJsZS1maWx0ZXJzL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxodW1hbi1yZXNvdXJjZXNcXGVtcGxveWVlLWZvcm1cXHdvcmstZmxpZ2h0LXRhYmxlLWZpbHRlcnNcXHdvcmstZmxpZ2h0LXRhYmxlLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vaHVtYW4tcmVzb3VyY2VzL2VtcGxveWVlLWZvcm0vd29yay1mbGlnaHQtdGFibGUtZmlsdGVycy9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUkseUJBQXlCLEVBQUE7RUFGN0I7SUFLTSxnQkNxQ1ksRUFBQTtFRDFDbEI7TUFRUSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2h1bWFuLXJlc291cmNlcy9lbXBsb3llZS1mb3JtL3dvcmstZmxpZ2h0LXRhYmxlLWZpbHRlcnMvd29yay1mbGlnaHQtdGFibGUtZmlsdGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuXHJcbjpob3N0IHtcclxuICAuYWN0aW9uLWxpc3Qge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAuYXctYnRuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-form/work-flight-table-filters/work-flight-table-filters.component.ts':
      /*!*********************************************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-form/work-flight-table-filters/work-flight-table-filters.component.ts ***!
  \*********************************************************************************************************************/
      /*! exports provided: WorkFlightTableFiltersComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'WorkFlightTableFiltersComponent',
          function() {
            return WorkFlightTableFiltersComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/types/generic-component */ './src/app/shared/types/generic-component.ts'
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

        var WorkFlightTableFiltersComponent = /** @class */ (function(_super) {
          __extends(WorkFlightTableFiltersComponent, _super);
          function WorkFlightTableFiltersComponent(sessionService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write
              ) || this;
            _this.sessionService = sessionService;
            _this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.searchCriteria = _this.searchCriteria || {};
            return _this;
          }
          WorkFlightTableFiltersComponent.prototype.getComponentName = function() {
            return 'WorkFlightTableFiltersComponent';
          };
          WorkFlightTableFiltersComponent.prototype.filter = function() {
            this.onFilter.emit();
          };
          WorkFlightTableFiltersComponent.prototype.reset = function() {
            this.onReset.emit();
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            WorkFlightTableFiltersComponent.prototype,
            'searchCriteria',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            WorkFlightTableFiltersComponent.prototype,
            'onFilter',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            WorkFlightTableFiltersComponent.prototype,
            'onReset',
            void 0
          );
          WorkFlightTableFiltersComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-work-flight-table-filters',
                template: __webpack_require__(
                  /*! ./work-flight-table-filters.component.html */ './src/app/main/human-resources/employee-form/work-flight-table-filters/work-flight-table-filters.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./work-flight-table-filters.component.scss */ './src/app/main/human-resources/employee-form/work-flight-table-filters/work-flight-table-filters.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__['SessionService']
              ])
            ],
            WorkFlightTableFiltersComponent
          );
          return WorkFlightTableFiltersComponent;
        })(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_3__['GenericComponent']);

        /***/
      },

    /***/ './src/app/main/human-resources/employee-search/employee-search.component.html':
      /*!*************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-search/employee-search.component.html ***!
  \*************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle">\r\n        {{ "page.searchPage" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-primary-actions">\r\n    <button type="button" mat-raised-button (click)="openNewEmployee()" *ngIf="hasUpdateAccessRight">\r\n      {{ "global.create" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row search-criteria-header">\r\n                  <i\r\n                    class="fa fa-fw fa-undo aw-icon aw-icon-with-border search-criteria-action"\r\n                    aria-hidden="true"\r\n                    pTooltip="{{ \'global.reset\' | translate }}"\r\n                    tooltipPosition="top"\r\n                    (click)="resetSearchCriteria()"\r\n                  ></i>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".employeeFirstName" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [(ngModel)]="searchObject.bidtEmployeeDTO.employeeFirstName"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".employeeLastName" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="searchObject.bidtEmployeeDTO.employeeLastName" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".employeeNumber" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="searchObject.bidtEmployeeDTO.employeeNumber" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".bidtCompanyName" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="companies"\r\n                        [(ngModel)]="searchObject.companyId"\r\n                        [showClear]="true"\r\n                        placeholder="&nbsp;"\r\n                        (onChange)="loadSites()"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".bidtSiteName" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="sites"\r\n                        [(ngModel)]="searchObject.bidtEmployeeDTO.bidtSiteId"\r\n                        [showClear]="true"\r\n                        placeholder="&nbsp;"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <button\r\n                      type="button"\r\n                      mat-raised-button\r\n                      (click)="search()"\r\n                      color="primary"\r\n                      appKeyPress\r\n                      [keyCode]="\'Enter\'"\r\n                      (keyPress)="search()"\r\n                    >\r\n                      {{ "global.toSearch" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ "global.results" | translate }} ({{ resultsTable.list ? resultsTable.list.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                [resizableColumns]="true"\r\n                #ptable\r\n                class="aw-table2"\r\n                [columns]="resultsTableCols"\r\n                [value]="resultsTable.list"\r\n                [(selection)]="selectedEmployees"\r\n                [scrollable]="true"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n                  <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedEmployees.length > 0 }">\r\n                    <div class="aw-table-global-filter">\r\n                      <label class="aw-table-global-filter-label">\r\n                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableGlobalFilter\r\n                        class="aw-table-global-filter-input"\r\n                        type="text"\r\n                        placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                        (input)="ptable.filterGlobal($event.target.value, \'contains\')"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class="aw-table-actions">\r\n                      <button\r\n                        *ngIf="resultsTable.list && resultsTable.list.length > 0 && selectedEmployees.length === 0"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="exportTable()"\r\n                      >\r\n                        {{ "global.export" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="hasManageAccessRight && selectedEmployees.length > 0"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="deleteSelectedEmployees()"\r\n                      >\r\n                        {{ "global.delete" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="selectedEmployees.length > 0"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="openSelectedEmployees()"\r\n                      >\r\n                        {{ "global.open" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col class="aw-table-checkbox-wrapper" />\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th class="aw-table-checkbox-wrapper">\r\n                      <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ componentData.componentId + "." + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td class="aw-table-checkbox-wrapper">\r\n                      <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ rowData[col.field] }}\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-search/employee-search.component.scss':
      /*!*************************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-search/employee-search.component.scss ***!
  \*************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .form-group {\n  margin-right: 20px;\n  max-width: 15rem;\n  min-width: 10rem;\n  width: 20%; }\n  :host .form-group:last-of-type {\n    margin-right: 0; }\n  :host .search-criteria-primary {\n  justify-content: flex-start; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9odW1hbi1yZXNvdXJjZXMvZW1wbG95ZWUtc2VhcmNoL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxodW1hbi1yZXNvdXJjZXNcXGVtcGxveWVlLXNlYXJjaFxcZW1wbG95ZWUtc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBO0VBTGQ7SUFRTSxlQUFlLEVBQUE7RUFSckI7RUFhSSwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vaHVtYW4tcmVzb3VyY2VzL2VtcGxveWVlLXNlYXJjaC9lbXBsb3llZS1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcclxuICAgIG1pbi13aWR0aDogMTByZW07XHJcbiAgICB3aWR0aDogMjAlO1xyXG5cclxuICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1wcmltYXJ5IHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/human-resources/employee-search/employee-search.component.ts':
      /*!***********************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-search/employee-search.component.ts ***!
  \***********************************************************************************/
      /*! exports provided: EmployeeSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'EmployeeSearchComponent',
          function() {
            return EmployeeSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/services/export.service */ './src/app/shared/services/export.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _employee_search_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./employee-search.service */ './src/app/main/human-resources/employee-search/employee-search.service.ts'
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

        var EmployeeSearchComponent = /** @class */ (function(_super) {
          __extends(EmployeeSearchComponent, _super);
          function EmployeeSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            employeeSearchService,
            exportService,
            confirmationService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.employeeSearchService = employeeSearchService;
            _this.exportService = exportService;
            _this.confirmationService = confirmationService;
            _this.resultsTableExportName = 'employee-list';
            _this.searchObject = { bidtEmployeeDTO: {} };
            _this.companies = [];
            _this.sites = [];
            _this.resultsTable = { list: [], moreResults: false };
            _this.selectedEmployees = [];
            _this.siteDTOList = [];
            _this.resultsTableCols = [
              { field: 'employeeLastName', alignment: 'left' },
              { field: 'employeeFirstName', alignment: 'left' },
              { field: 'employeeNumber', alignment: 'left' },
              { field: 'bidtCompanyName', alignment: 'left' },
              { field: 'bidtSiteName', alignment: 'left' }
            ];
            _this.loadCompanies();
            _this.loadSites();
            return _this;
          }
          EmployeeSearchComponent.prototype.getComponentName = function() {
            return 'EmployeeSearchComponent';
          };
          EmployeeSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
          };
          EmployeeSearchComponent.prototype.resetSearchCriteria = function() {
            this.searchObject = { bidtEmployeeDTO: {}, companyId: undefined };
            // reload sites data
            this.loadSites();
          };
          EmployeeSearchComponent.prototype.loadCompanies = function() {
            var _this = this;
            this.employeeSearchService.findBidtCompanyByCriteria({}).subscribe(function(results) {
              _this.companies = results;
            });
          };
          EmployeeSearchComponent.prototype.loadSites = function() {
            var _this = this;
            this.sites = [];
            if (this.searchObject.companyId !== null && this.searchObject.companyId !== undefined) {
              this.siteDTOList.forEach(function(element) {
                if (
                  element.bidtCompanyId &&
                  _this.searchObject.companyId &&
                  element.bidtCompanyId.toString() === _this.searchObject.companyId.toString()
                ) {
                  var labelValue = {
                    label: element.siteCode + ' - ' + element.siteName,
                    value: (element.siteId && element.siteId.toString()) || ''
                  };
                  _this.sites.push(labelValue);
                }
              });
              if (this.sites.length > 0) {
                this.searchObject.bidtEmployeeDTO.bidtSiteId = Number.parseInt(this.sites[0].value, 0);
              }
            } else {
              this.employeeSearchService.findBidtSiteByCriteria({}).subscribe(function(results) {
                _this.siteDTOList = results;
                _this.sites = _this.siteDTOList.map(function(element) {
                  var labelValue = {
                    label: element.siteCode + ' - ' + element.siteName,
                    value: (element.siteId && element.siteId.toString()) || ''
                  };
                  return labelValue;
                });
                _this.searchObject.bidtEmployeeDTO.bidtSiteId = undefined;
              });
            }
          };
          EmployeeSearchComponent.prototype.resetResultsTable = function(table) {
            table.reset();
            table.filters = {};
          };
          EmployeeSearchComponent.prototype.search = function() {
            var _this = this;
            this.employeeSearchService.findEmployeeBySearchCriteria(this.searchObject).subscribe(function(result) {
              _this.setResultsTable(result);
            });
          };
          EmployeeSearchComponent.prototype.setResultsTable = function(result) {
            var _this = this;
            if (!!result) {
              this.resultsTable = result;
              this.resultsTable.list.forEach(function(element) {
                if (element.bidtSiteId !== null && element.bidtSiteId !== undefined) {
                  element.bidtCompanyName = _this.formatCompany(element.bidtSiteId);
                  element.bidtSiteName = _this.formatSite(element.bidtSiteId);
                }
              });
            }
            this.selectedEmployees = [];
          };
          EmployeeSearchComponent.prototype.exportTable = function() {
            var tableList = this.resultsTable.list.map(function(row) {
              var tableRow = {
                employeeLastName: row.employeeLastName,
                employeeFirstName: row.employeeFirstName,
                employeeNumber: row.employeeNumber,
                bidtCompanyName: row.bidtCompanyName,
                bidtSiteName: row.bidtSiteName
              };
              return tableRow;
            });
            this.exportService.toExcel(tableList, this.resultsTableExportName, this.componentData.componentId);
          };
          EmployeeSearchComponent.prototype.formatCompany = function(siteId) {
            var selectedSite = this.siteDTOList.find(function(siteObj) {
              return siteObj.siteId === siteId;
            });
            var selectedCompany = this.companies.find(function(company) {
              if (selectedSite && selectedSite.bidtCompanyId !== null && selectedSite.bidtCompanyId !== undefined) {
                return company.value === selectedSite.bidtCompanyId.toString();
              } else {
                return false;
              }
            });
            return selectedCompany ? selectedCompany.label : '';
          };
          EmployeeSearchComponent.prototype.formatSite = function(siteId) {
            var selectedSite = this.sites.find(function(site) {
              return site.value === siteId.toString();
            });
            return selectedSite ? selectedSite.label : '';
          };
          EmployeeSearchComponent.prototype.deleteSelectedEmployees = function() {
            var _this = this;
            var selectedBidtEmployees = [];
            this.confirmationService.confirmDelete({
              messageKey: 'global.confirmSelectedDataDelete',
              accept: function() {
                _this.selectedEmployees.forEach(function(employee) {
                  selectedBidtEmployees.push(employee);
                });
                _this.employeeSearchService.deleteEmployees(selectedBidtEmployees).subscribe(
                  function(result) {
                    _this.search();
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteEmployee'));
                  },
                  function(error) {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnDeleteEmployee'));
                  }
                );
                _this.selectedEmployees = [];
              }
            });
          };
          EmployeeSearchComponent.prototype.openEmployee = function(openMode, object) {
            var labelKey = 'transaction.EmployeeFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'EmployeeFormComponent',
              objectId: object && this.serializationService.serialize(object),
              openMode: openMode
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          EmployeeSearchComponent.prototype.openNewEmployee = function() {
            this.openEmployee(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Create
            );
          };
          EmployeeSearchComponent.prototype.openSelectedEmployees = function() {
            var _this = this;
            this.selectedEmployees.forEach(function(employee) {
              _this.openEmployee(
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Read,
                employee
              );
            });
            this.selectedEmployees = [];
          };
          EmployeeSearchComponent.prototype.resetTableFilter = function() {
            this.globalFilterTxt = '';
          };
          EmployeeSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-employee-search',
                template: __webpack_require__(
                  /*! ./employee-search.component.html */ './src/app/main/human-resources/employee-search/employee-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./employee-search.component.scss */ './src/app/main/human-resources/employee-search/employee-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_8__['TabService'],
                _employee_search_service__WEBPACK_IMPORTED_MODULE_10__['EmployeeSearchService'],
                _shared_services_export_service__WEBPACK_IMPORTED_MODULE_3__['ExportService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_2__['ConfirmationService']
              ])
            ],
            EmployeeSearchComponent
          );
          return EmployeeSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_9__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/human-resources/employee-search/employee-search.service.ts':
      /*!*********************************************************************************!*\
  !*** ./src/app/main/human-resources/employee-search/employee-search.service.ts ***!
  \*********************************************************************************/
      /*! exports provided: EmployeeSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'EmployeeSearchService', function() {
          return EmployeeSearchService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/bidt-company.api */ './src/app/shared/api/bidt-company.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_contract_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/api/bidt-contract.api */ './src/app/shared/api/bidt-contract.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/api/bidt-employee.api */ './src/app/shared/api/bidt-employee.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/api/bidt-site.api */ './src/app/shared/api/bidt-site.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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

        var EmployeeSearchService = /** @class */ (function(_super) {
          __extends(EmployeeSearchService, _super);
          function EmployeeSearchService(
            http,
            appConfigService,
            bidtCompanyApi,
            bidtEmployeeApi,
            bidtSiteApi,
            bidtContractApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtCompanyApi = bidtCompanyApi;
            _this.bidtEmployeeApi = bidtEmployeeApi;
            _this.bidtSiteApi = bidtSiteApi;
            _this.bidtContractApi = bidtContractApi;
            return _this;
          }
          /**************************************************************************
           * Employee api
           *************************************************************************/
          EmployeeSearchService.prototype.findEmployeeBySearchCriteria = function(criteria) {
            return _super.prototype.post.call(this, this.bidtEmployeeApi.findEmployeeBySearchCriteria, criteria);
          };
          /**************************************************************************
           * Contract api
           *************************************************************************/
          EmployeeSearchService.prototype.deleteEmployees = function(employeList) {
            return _super.prototype.post.call(this, this.bidtContractApi.deleteEmployee, employeList);
          };
          /**************************************************************************
           * Company api
           *************************************************************************/
          EmployeeSearchService.prototype.findBidtCompanyByCriteria = function(criteria) {
            return _super.prototype.post.call(this, this.bidtCompanyApi.findByCriteria, criteria);
          };
          /**************************************************************************
           * Site api
           *************************************************************************/
          EmployeeSearchService.prototype.findBidtSiteByCriteria = function(criteria) {
            return _super.prototype.post.call(this, this.bidtSiteApi.findAll, criteria);
          };
          EmployeeSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__['AppConfigService'],
                _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_2__['BidtCompanyApi'],
                _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_4__['BidtEmployeeApi'],
                _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_5__['BidtSiteApi'],
                _shared_api_bidt_contract_api__WEBPACK_IMPORTED_MODULE_3__['BidtContractApi']
              ])
            ],
            EmployeeSearchService
          );
          return EmployeeSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/human-resources/human-resources.module.ts':
      /*!****************************************************************!*\
  !*** ./src/app/main/human-resources/human-resources.module.ts ***!
  \****************************************************************/
      /*! exports provided: HumanResourcesModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'HumanResourcesModule', function() {
          return HumanResourcesModule;
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
        /* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/dialog */ './node_modules/primeng/dialog.js'
        );
        /* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dialog__WEBPACK_IMPORTED_MODULE_3__
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
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/inputtextarea */ './node_modules/primeng/inputtextarea.js'
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/keyfilter */ './node_modules/primeng/keyfilter.js'
        );
        /* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/message */ './node_modules/primeng/message.js'
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_message__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! primeng/overlaypanel */ './node_modules/primeng/overlaypanel.js'
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! primeng/radiobutton */ './node_modules/primeng/radiobutton.js'
        );
        /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_10__
        );
        /* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! primeng/splitbutton */ './node_modules/primeng/splitbutton.js'
        );
        /* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_splitbutton__WEBPACK_IMPORTED_MODULE_11__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_12__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__
        );
        /* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! primeng/tristatecheckbox */ './node_modules/primeng/tristatecheckbox.js'
        );
        /* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_14__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../shared/components/component-sidebar/component-sidebar.mdule */ './src/app/shared/components/component-sidebar/component-sidebar.mdule.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_employee_dialog_search_employee_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../shared/components/dialog-search-employee/dialog-search-employee.module */ './src/app/shared/components/dialog-search-employee/dialog-search-employee.module.ts'
        );
        /* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../shared/components/dynamic-attributes/dynamic-attributes.service */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.service.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./employee-form/employee-form.component */ './src/app/main/human-resources/employee-form/employee-form.component.ts'
        );
        /* harmony import */ var _employee_form_employee_form_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./employee-form/employee-form.service */ './src/app/main/human-resources/employee-form/employee-form.service.ts'
        );
        /* harmony import */ var _employee_form_popups_absence_popup_form_absence_popup_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./employee-form/popups/absence-popup-form/absence-popup-form.component */ './src/app/main/human-resources/employee-form/popups/absence-popup-form/absence-popup-form.component.ts'
        );
        /* harmony import */ var _employee_form_popups_document_popup_form_document_popup_form_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./employee-form/popups/document-popup-form/document-popup-form.module */ './src/app/main/human-resources/employee-form/popups/document-popup-form/document-popup-form.module.ts'
        );
        /* harmony import */ var _employee_form_popups_document_url_popup_form_document_url_popup_form_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ./employee-form/popups/document-url-popup-form/document-url-popup-form.module */ './src/app/main/human-resources/employee-form/popups/document-url-popup-form/document-url-popup-form.module.ts'
        );
        /* harmony import */ var _employee_form_popups_evaluation_popup_form_evaluation_popup_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ./employee-form/popups/evaluation-popup-form/evaluation-popup-form.component */ './src/app/main/human-resources/employee-form/popups/evaluation-popup-form/evaluation-popup-form.component.ts'
        );
        /* harmony import */ var _employee_form_popups_expense_popup_form_expense_popup_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ./employee-form/popups/expense-popup-form/expense-popup-form.component */ './src/app/main/human-resources/employee-form/popups/expense-popup-form/expense-popup-form.component.ts'
        );
        /* harmony import */ var _employee_form_popups_holidays_popup_form_holidays_popup_form_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ./employee-form/popups/holidays-popup-form/holidays-popup-form.component */ './src/app/main/human-resources/employee-form/popups/holidays-popup-form/holidays-popup-form.component.ts'
        );
        /* harmony import */ var _employee_form_popups_hourly_costs_popup_form_hourly_costs_popup_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ./employee-form/popups/hourly-costs-popup-form/hourly-costs-popup-form.component */ './src/app/main/human-resources/employee-form/popups/hourly-costs-popup-form/hourly-costs-popup-form.component.ts'
        );
        /* harmony import */ var _employee_form_popups_medical_examination_popup_form_medical_examination_popup_form_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./employee-form/popups/medical-examination-popup-form/medical-examination-popup-form.component */ './src/app/main/human-resources/employee-form/popups/medical-examination-popup-form/medical-examination-popup-form.component.ts'
        );
        /* harmony import */ var _employee_form_popups_qualification_popup_form_qualification_popup_form_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ./employee-form/popups/qualification-popup-form/qualification-popup-form.component */ './src/app/main/human-resources/employee-form/popups/qualification-popup-form/qualification-popup-form.component.ts'
        );
        /* harmony import */ var _employee_form_popups_qualification_popup_form_qualification_popup_form_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! ./employee-form/popups/qualification-popup-form/qualification-popup-form.service */ './src/app/main/human-resources/employee-form/popups/qualification-popup-form/qualification-popup-form.service.ts'
        );
        /* harmony import */ var _employee_form_popups_training_popup_form_training_popup_form_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
          /*! ./employee-form/popups/training-popup-form/training-popup-form.component */ './src/app/main/human-resources/employee-form/popups/training-popup-form/training-popup-form.component.ts'
        );
        /* harmony import */ var _employee_form_work_flight_table_filters_work_flight_table_filters_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
          /*! ./employee-form/work-flight-table-filters/work-flight-table-filters.component */ './src/app/main/human-resources/employee-form/work-flight-table-filters/work-flight-table-filters.component.ts'
        );
        /* harmony import */ var _employee_planning_employee_planning_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
          /*! ./employee-planning/employee-planning.module */ './src/app/main/human-resources/employee-planning/employee-planning.module.ts'
        );
        /* harmony import */ var _employee_search_employee_search_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
          /*! ./employee-search/employee-search.component */ './src/app/main/human-resources/employee-search/employee-search.component.ts'
        );
        /* harmony import */ var _employee_search_employee_search_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
          /*! ./employee-search/employee-search.service */ './src/app/main/human-resources/employee-search/employee-search.service.ts'
        );
        /* harmony import */ var _staff_alert_staff_alert_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
          /*! ./staff-alert/staff-alert.module */ './src/app/main/human-resources/staff-alert/staff-alert.module.ts'
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

        var INTERNAL_MODULES = [_shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_22__['TableModule']];
        var PRIMENG_MODULES = [
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule'],
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__['CheckboxModule'],
          primeng_dialog__WEBPACK_IMPORTED_MODULE_3__['DialogModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__['DropdownModule'],
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__['InputTextareaModule'],
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_9__['OverlayPanelModule'],
          primeng_radiobutton__WEBPACK_IMPORTED_MODULE_10__['RadioButtonModule'],
          primeng_splitbutton__WEBPACK_IMPORTED_MODULE_11__['SplitButtonModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_12__['TableModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__['TooltipModule'],
          primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_14__['TriStateCheckboxModule'],
          primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__['FileUploadModule'],
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_7__['KeyFilterModule'],
          primeng_message__WEBPACK_IMPORTED_MODULE_8__['MessageModule'],
          _employee_planning_employee_planning_module__WEBPACK_IMPORTED_MODULE_38__['EmployeePlanningModule']
        ];
        var COMPONENTS = [
          _employee_form_work_flight_table_filters_work_flight_table_filters_component__WEBPACK_IMPORTED_MODULE_37__[
            'WorkFlightTableFiltersComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [
          _employee_search_employee_search_component__WEBPACK_IMPORTED_MODULE_39__['EmployeeSearchComponent'],
          _employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_24__['EmployeeFormComponent'],
          _employee_form_popups_absence_popup_form_absence_popup_form_component__WEBPACK_IMPORTED_MODULE_26__[
            'AbsencePopupFormComponent'
          ],
          _employee_form_popups_evaluation_popup_form_evaluation_popup_form_component__WEBPACK_IMPORTED_MODULE_29__[
            'EvaluationPopupFormComponent'
          ],
          _employee_form_popups_expense_popup_form_expense_popup_form_component__WEBPACK_IMPORTED_MODULE_30__[
            'ExpensePopupFormComponent'
          ],
          _employee_form_popups_holidays_popup_form_holidays_popup_form_component__WEBPACK_IMPORTED_MODULE_31__[
            'HolidaysPopupFormComponent'
          ],
          _employee_form_popups_hourly_costs_popup_form_hourly_costs_popup_form_component__WEBPACK_IMPORTED_MODULE_32__[
            'HourlyCostsPopupFormComponent'
          ],
          _employee_form_popups_medical_examination_popup_form_medical_examination_popup_form_component__WEBPACK_IMPORTED_MODULE_33__[
            'MedicalExaminationPopupFormComponent'
          ],
          _employee_form_popups_qualification_popup_form_qualification_popup_form_component__WEBPACK_IMPORTED_MODULE_34__[
            'QualificationPopupFormComponent'
          ],
          _employee_form_popups_training_popup_form_training_popup_form_component__WEBPACK_IMPORTED_MODULE_36__[
            'TrainingPopupFormComponent'
          ]
        ];
        var SERVICES = [
          _employee_search_employee_search_service__WEBPACK_IMPORTED_MODULE_40__['EmployeeSearchService'],
          _employee_form_employee_form_service__WEBPACK_IMPORTED_MODULE_25__['EmployeeFormService'],
          _employee_form_popups_qualification_popup_form_qualification_popup_form_service__WEBPACK_IMPORTED_MODULE_35__[
            'QualificationPopupFormService'
          ],
          _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_20__[
            'DynamicAttributesService'
          ]
        ];
        var HumanResourcesModule = /** @class */ (function() {
          function HumanResourcesModule() {}
          HumanResourcesModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_15__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_16__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_17__['AppCommonSharedModule'],
                    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_21__['ModalModule'],
                    _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_18__[
                      'ComponentSidebarModule'
                    ],
                    _shared_components_dialog_search_employee_dialog_search_employee_module__WEBPACK_IMPORTED_MODULE_19__[
                      'DialogSearchEmployeeModule'
                    ],
                    _employee_form_popups_document_popup_form_document_popup_form_module__WEBPACK_IMPORTED_MODULE_27__[
                      'DocumentPopupFormModule'
                    ],
                    _employee_form_popups_document_url_popup_form_document_url_popup_form_module__WEBPACK_IMPORTED_MODULE_28__[
                      'DocumentUrlPopupFormModule'
                    ],
                    _staff_alert_staff_alert_module__WEBPACK_IMPORTED_MODULE_41__['StaffAlertModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_23__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  PRIMENG_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            HumanResourcesModule
          );
          return HumanResourcesModule;
        })();

        /***/
      },

    /***/ './src/app/shared/constants/bido-notification-type-constants.ts':
      /*!**********************************************************************!*\
  !*** ./src/app/shared/constants/bido-notification-type-constants.ts ***!
  \**********************************************************************/
      /*! exports provided: BidoNotificationTypeConstants */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'BidoNotificationTypeConstants',
          function() {
            return BidoNotificationTypeConstants;
          }
        );
        var BidoNotificationTypeConstants = /** @class */ (function() {
          function BidoNotificationTypeConstants() {}
          // Maintenance
          BidoNotificationTypeConstants.ACRS_TYPE_CODE = 'ACRS';
          BidoNotificationTypeConstants.TASK_APPLIED_TYPE_CODE = 'TA';
          BidoNotificationTypeConstants.EVOLUTION_APPLIED_TYPE_CODE = 'EA';
          BidoNotificationTypeConstants.ASSEMBLY_TYPE_CODE = 'AS';
          BidoNotificationTypeConstants.DISASSEMBLY_TYPE_CODE = 'DI';
          BidoNotificationTypeConstants.FORM1_TYPE_CODE = 'FORM1';
          return BidoNotificationTypeConstants;
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
      },

    /***/ './src/app/shared/utils/file-utils.ts':
      /*!********************************************!*\
  !*** ./src/app/shared/utils/file-utils.ts ***!
  \********************************************/
      /*! exports provided: FileUtils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'FileUtils', function() {
          return FileUtils;
        });
        /* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! file-saver */ './node_modules/file-saver/dist/FileSaver.min.js'
        );
        /* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          file_saver__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _number_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./number-utils */ './src/app/shared/utils/number-utils.ts'
        );

        var FileUtils = /** @class */ (function() {
          function FileUtils() {}
          FileUtils.downloadFile = function(file, fileName) {
            if (!!file && !!fileName) {
              var byteCharacters = atob(file.toString());
              var byteNumbers = new Array(byteCharacters.length);
              for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
              }
              file_saver__WEBPACK_IMPORTED_MODULE_0__['saveAs'](new Blob([new Uint8Array(byteNumbers)]), fileName);
            }
          };
          FileUtils.getExtension = function(fileName) {
            return !!fileName && fileName.includes('.') ? fileName.substring(fileName.lastIndexOf('.') + 1) : '';
          };
          FileUtils.getFileContentAsBase64 = function(file, callback) {
            if (!!file) {
              var reader_1 = new FileReader();
              reader_1.onloadend = function() {
                var fileContent = reader_1.result; // tslint:disable-line:no-any
                fileContent = fileContent.substring(fileContent.indexOf(',') + 1); // Remove data:*/*;base64,
                callback(fileContent);
              };
              reader_1.readAsDataURL(file);
            }
          };
          FileUtils.getFormattedSize = function(size) {
            if (!!size) {
              return size / FileUtils.KILOOCTET < FileUtils.KILOOCTET
                ? _number_utils__WEBPACK_IMPORTED_MODULE_1__['NumberUtils'].roundNumber(size / FileUtils.KILOOCTET) +
                    ' Ko'
                : _number_utils__WEBPACK_IMPORTED_MODULE_1__['NumberUtils'].roundNumber(
                    size / FileUtils.KILOOCTET / FileUtils.KILOOCTET
                  ) + ' Mo';
            } else {
              return '';
            }
          };
          FileUtils.KIBIOCTET = 1024;
          FileUtils.KILOOCTET = 1000;
          return FileUtils;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=human-resources-human-resources-module.js.map
