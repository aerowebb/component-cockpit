(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['maintenance-extract-tasks-applications-extract-tasks-applications-module'],
  {
    /***/ './src/app/main/maintenance/extract-tasks-applications/extract-tasks-applications.module.ts':
      /*!**************************************************************************************************!*\
  !*** ./src/app/main/maintenance/extract-tasks-applications/extract-tasks-applications.module.ts ***!
  \**************************************************************************************************/
      /*! exports provided: ExtractTasksApplicationsModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ExtractTasksApplicationsModule',
          function() {
            return ExtractTasksApplicationsModule;
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
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_equipment_dialog_search_equipment_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-equipment/dialog-search-equipment.module */ './src/app/shared/components/dialog-search-equipment/dialog-search-equipment.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_task_dialog_search_task_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-task/dialog-search-task.module */ './src/app/shared/components/dialog-search-task/dialog-search-task.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _search_extract_tasks_applications_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./search/extract-tasks-applications-search.component */ './src/app/main/maintenance/extract-tasks-applications/search/extract-tasks-applications-search.component.ts'
        );
        /* harmony import */ var _search_extract_tasks_applications_search_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./search/extract-tasks-applications-search.service */ './src/app/main/maintenance/extract-tasks-applications/search/extract-tasks-applications-search.service.ts'
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
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_3__['TooltipModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_2__['TableModule'],
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_dialog_search_task_dialog_search_task_module__WEBPACK_IMPORTED_MODULE_8__[
            'DialogSearchTaskModule'
          ],
          _shared_components_dialog_search_equipment_dialog_search_equipment_module__WEBPACK_IMPORTED_MODULE_7__[
            'DialogSearchEquipmentModule'
          ]
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [];
        var DYNAMIC_COMPONENTS = [
          _search_extract_tasks_applications_search_component__WEBPACK_IMPORTED_MODULE_10__[
            'ExtractTasksApplicationsSearchComponent'
          ]
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _search_extract_tasks_applications_search_service__WEBPACK_IMPORTED_MODULE_11__[
            'ExtractTasksApplicationsSearchService'
          ]
        ];
        var ExtractTasksApplicationsModule = /** @class */ (function() {
          function ExtractTasksApplicationsModule() {}
          ExtractTasksApplicationsModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_4__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_5__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_6__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_9__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            ExtractTasksApplicationsModule
          );
          return ExtractTasksApplicationsModule;
        })();

        /***/
      },

    /***/ './src/app/main/maintenance/extract-tasks-applications/search/extract-tasks-applications-search.component.html':
      /*!*********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/extract-tasks-applications/search/extract-tasks-applications-search.component.html ***!
  \*********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle">- {{ "page.searchPage" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item (click)="refresh()">{{ "global.refresh" | translate }}</button>\r\n      <button mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <!-- ASSET SELECTION -->\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="section">\r\n                <h4 class="section-title">\r\n                  {{ componentData.componentId + ".assetsSelection" | translate }}\r\n                  ({{ assetsList ? assetsList.length : 0 }})\r\n                </h4>\r\n                <div class="section-content">\r\n                  <div style="width: 100%">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      #assetsTable\r\n                      class="aw-table2"\r\n                      [columns]="assetsCols"\r\n                      [value]="assetsList"\r\n                      [(selection)]="selectedAssets"\r\n                      [scrollable]="true"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isLoadingData"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isLoadingData" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableCusCustomerGlobalFilter\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="assetsTable.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class="aw-table-actions">\r\n                            <button\r\n                              *ngIf="hasManageAccessRight && selectedAssets.length > 0"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              color="warn"\r\n                              (click)="deleteSelectedAsset()"\r\n                            >\r\n                              {{ "global.delete" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="selectedAssets.length === 0"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="showAssetDialog()"\r\n                            >\r\n                              {{ "global.add" | translate }}\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col class="aw-table-checkbox-wrapper" />\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                          <col class="row-expand-wrapper" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th class="aw-table-checkbox-wrapper">\r\n                            <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                          </th>\r\n                          <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                            <span>{{ componentData.componentId + "." + col.field | translate }}</span>\r\n                          </th>\r\n                          <th class="row-expand-wrapper"></th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                          <td class="aw-table-checkbox-wrapper">\r\n                            <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                          </td>\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <div *ngSwitchCase="\'asset\'" title="{{ rowData[col.field] }}">\r\n                              <span>\r\n                                {{ rowData[col.field] }}\r\n                              </span>\r\n                            </div>\r\n                            <div *ngSwitchCase="\'equipmentDesignation\'" title="{{ rowData[col.field] }}">\r\n                              <span>\r\n                                {{ rowData[col.field] }}\r\n                              </span>\r\n                            </div>\r\n                            <span *ngSwitchDefault>\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n                          </td>\r\n                          <td class="row-expand-wrapper" [pRowToggler]="rowData">\r\n                            <i\r\n                              class="fa fa-fw aw-icon aw-icon-with-border"\r\n                              [ngClass]="{\r\n                                \'fa-minus\': rowData._expand,\r\n                                \'fa-plus\': !rowData._expand\r\n                              }"\r\n                              aria-hidden="true"\r\n                              pTooltip="{{ \'global.showTableRowDetails\' | translate }}"\r\n                              tooltipPosition="left"\r\n                              (click)="toggleResultTableRowDetailsVisibility(rowData)"\r\n                            ></i>\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr *ngIf="rowData._expand" class="row-expanded">\r\n                          <td [attr.colspan]="columns.length + 1">\r\n                            <div class="row">\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".registration" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <span>{{ rowData.registration }}</span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".ownerCustomerCode" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <span>{{ rowData.ownerCustomerCode }}</span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".operatorCustomerCode" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <span>{{ rowData.operatorCustomerCode }}</span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".location" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <span>{{ rowData.location }}</span>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class="row">\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".equipmentCode" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <span>{{ rowData.equipmentCode }}</span>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- TASK SELECTION -->\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="section">\r\n                <h4 class="section-title">\r\n                  {{ componentData.componentId + ".tasksSelection" | translate }}\r\n                  ({{ tasksList ? tasksList.length : 0 }})\r\n                </h4>\r\n                <div class="section-content">\r\n                  <div style="width: 100%">\r\n                    <p-table\r\n                      [resizableColumns]="true"\r\n                      #tasksTable\r\n                      class="aw-table2"\r\n                      [columns]="tasksCols"\r\n                      [value]="tasksList"\r\n                      [(selection)]="selectedTasks"\r\n                      [scrollable]="true"\r\n                    >\r\n                      <ng-template pTemplate="emptymessage">\r\n                        <span *ngIf="!isLoadingData"> &nbsp;</span>\r\n\r\n                        <div *ngIf="isLoadingData" class="aw-table-loading-indicator">\r\n                          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                          <div class="lds-hourglass"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="caption">\r\n                        <div class="aw-table-header">\r\n                          <div class="aw-table-global-filter">\r\n                            <label class="aw-table-global-filter-label">\r\n                              <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableCusCustomerGlobalFilter\r\n                              class="aw-table-global-filter-input"\r\n                              type="text"\r\n                              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                              (input)="tasksTable.filterGlobal($event.target.value, \'contains\')"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class="aw-table-actions">\r\n                            <button\r\n                              *ngIf="hasManageAccessRight && selectedTasks.length > 0"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              color="warn"\r\n                              (click)="deleteSelectedTasks()"\r\n                            >\r\n                              {{ "global.delete" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf="selectedTasks.length === 0"\r\n                              type="button"\r\n                              mat-raised-button\r\n                              (click)="openTaskDialog()"\r\n                            >\r\n                              {{ "global.add" | translate }}\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="colgroup" let-columns>\r\n                        <colgroup>\r\n                          <col class="aw-table-checkbox-wrapper" />\r\n                          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                          <col class="row-expand-wrapper" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="header" let-columns>\r\n                        <tr>\r\n                          <th class="aw-table-checkbox-wrapper">\r\n                            <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                          </th>\r\n                          <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                            <span>{{ componentData.componentId + "." + col.field | translate }}</span>\r\n                          </th>\r\n                          <th class="row-expand-wrapper"></th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                        <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                          <td class="aw-table-checkbox-wrapper">\r\n                            <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                          </td>\r\n                          <td\r\n                            *ngFor="let col of columns"\r\n                            [ngSwitch]="col.field"\r\n                            [ngStyle]="{ \'text-align\': col.alignment }"\r\n                          >\r\n                            <div *ngSwitchCase="\'taskDesignation\'" title="{{ rowData[col.field] }}">\r\n                              <span>\r\n                                {{ rowData[col.field] }}\r\n                              </span>\r\n                            </div>\r\n                            <span *ngSwitchDefault tooltipPosition="bottom">\r\n                              {{ rowData[col.field] }}\r\n                            </span>\r\n                          </td>\r\n                          <td class="row-expand-wrapper" [pRowToggler]="rowData">\r\n                            <i\r\n                              class="fa fa-fw aw-icon aw-icon-with-border"\r\n                              [ngClass]="{\r\n                                \'fa-minus\': rowData._expand,\r\n                                \'fa-plus\': !rowData._expand\r\n                              }"\r\n                              aria-hidden="true"\r\n                              pTooltip="{{ \'global.showTableRowDetails\' | translate }}"\r\n                              tooltipPosition="left"\r\n                              (click)="toggleTaskTableRowDetailsVisibility(rowData)"\r\n                            ></i>\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <tr *ngIf="rowData._expand" class="row-expanded">\r\n                          <td [attr.colspan]="columns.length + 1">\r\n                            <div class="row">\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".taskChapter" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <span>{{ rowData.taskChapter }}</span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".taskSection" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <span>{{ rowData.taskSection }}</span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".taskSubject" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <span>{{ rowData.taskSubject }}</span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".overhaul" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <span>\r\n                                    <i *ngIf="rowData[\'overhaul\']" class="fa fa-fw fa-check" aria-hidden="true"></i>\r\n                                  </span>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class="row">\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".repairCenterCode" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <span>{{ rowData.repairCenterCode }}</span>\r\n                                </div>\r\n                              </div>\r\n                              <div class="form-group">\r\n                                <label class="form-label">\r\n                                  {{ getComponentName() + ".groupCode" | translate }}\r\n                                </label>\r\n\r\n                                <div class="form-control">\r\n                                  <span>{{ rowData.groupCode }}</span>\r\n                                </div>\r\n                              </div>\r\n                              <div class="form-group"></div>\r\n                              <div class="form-group"></div>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- SEARCH CRITERIA -->\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".taskToApplyBefore" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        appendTo="body"\r\n                        [(ngModel)]="toDate"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group"></div>\r\n                  <div class="form-group"></div>\r\n                  <div class="form-group"></div>\r\n                </div>\r\n\r\n                <div class="row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <button type="button" mat-raised-button (click)="search()">\r\n                      <div *ngIf="panelLoading" class="lds-hourglass padding-class"></div>\r\n                      {{ componentData.componentId + ".extractTasksApplication" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- RESULT TABLE -->\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ componentData.componentId + ".tasksApplicationExtraction" | translate }} ({{\r\n                    extractTableList ? extractTableList.length : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                [resizableColumns]="true"\r\n                #extractTable\r\n                class="aw-table2"\r\n                [columns]="extractTableCols"\r\n                [value]="extractTableList"\r\n                [scrollable]="true"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!isLoadingData"> &nbsp;</span>\r\n\r\n                  <div *ngIf="isLoadingData" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header">\r\n                    <div class="aw-table-global-filter">\r\n                      <label class="aw-table-global-filter-label">\r\n                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableCusCustomerGlobalFilter\r\n                        class="aw-table-global-filter-input"\r\n                        type="text"\r\n                        placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                        (input)="extractTable.filterGlobal($event.target.value, \'contains\')"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class="aw-table-actions">\r\n                      <button\r\n                        *ngIf="extractTableList && extractTableList.length > 0"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="exportTable()"\r\n                      >\r\n                        {{ "global.export" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                    <col class="row-expand-wrapper" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      <span>{{ componentData.componentId + "." + col.field | translate }}</span>\r\n                    </th>\r\n                    <th class="row-expand-wrapper"></th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      <div *ngSwitchCase="\'taskDescription\'" title="{{ rowData[col.field] }}">\r\n                        <span>\r\n                          {{ rowData[col.field] }}\r\n                        </span>\r\n                      </div>\r\n                      <span *ngSwitchDefault tooltipPosition="bottom">\r\n                        {{ rowData[col.field] }}\r\n                      </span>\r\n                    </td>\r\n                    <td class="row-expand-wrapper" [pRowToggler]="rowData">\r\n                      <i\r\n                        class="fa fa-fw aw-icon aw-icon-with-border"\r\n                        [ngClass]="{\r\n                          \'fa-minus\': rowData._expand,\r\n                          \'fa-plus\': !rowData._expand\r\n                        }"\r\n                        aria-hidden="true"\r\n                        pTooltip="{{ \'global.showTableRowDetails\' | translate }}"\r\n                        tooltipPosition="left"\r\n                        (click)="toggleExtractTaskTableRowDetailsVisibility(rowData)"\r\n                      ></i>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf="rowData._expand" class="row-expanded">\r\n                    <td [attr.colspan]="columns.length + 1">\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".counterCode" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <span>{{ rowData.counterCode }}</span>\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".taskPeriodicity" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <span>{{ rowData.taskPeriodicity }}</span>\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".ageing" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <span>{{ rowData.ageing }}</span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".unitCode" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <span>{{ rowData.unitCode }}</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".assetDescription" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <span>{{ rowData.assetDescription }}</span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".topAircraftRegistration" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <span>{{ rowData.topAircraftRegistration }}</span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".nha" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <span>{{ rowData.nha }}</span>\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".nextTerm" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <span>{{ rowData.nextTerm }}</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".wpNumber" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <span>{{ rowData.wpNumber }}</span>\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".woCode" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <span>{{ rowData.woCode }}</span>\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group"></div>\r\n                        <div class="form-group"></div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- ASSET SELECTION DIALOG -->\r\n<aw-dialog-search-equipment\r\n  *ngIf="dialogAddAssetVisible"\r\n  [(display)]="dialogAddAssetVisible"\r\n  (onSelected)="onAddAsset($event)"\r\n  [selectionMultiple]="true"\r\n></aw-dialog-search-equipment>\r\n\r\n<!-- TASK SELECTION DIALOG -->\r\n<aw-dialog-search-task\r\n  *ngIf="showItemTaskSearchPopup"\r\n  [(display)]="showItemTaskSearchPopup"\r\n  (onSelected)="addTask($event)"\r\n  [selectionMultiple]="true"\r\n></aw-dialog-search-task>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/extract-tasks-applications/search/extract-tasks-applications-search.component.scss':
      /*!*********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/extract-tasks-applications/search/extract-tasks-applications-search.component.scss ***!
  \*********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .padding-class {\n  padding-right: 0.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9leHRyYWN0LXRhc2tzLWFwcGxpY2F0aW9ucy9zZWFyY2gvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXG1haW50ZW5hbmNlXFxleHRyYWN0LXRhc2tzLWFwcGxpY2F0aW9uc1xcc2VhcmNoXFxleHRyYWN0LXRhc2tzLWFwcGxpY2F0aW9ucy1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvZXh0cmFjdC10YXNrcy1hcHBsaWNhdGlvbnMvc2VhcmNoL2V4dHJhY3QtdGFza3MtYXBwbGljYXRpb25zLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAucGFkZGluZy1jbGFzcyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/maintenance/extract-tasks-applications/search/extract-tasks-applications-search.component.ts':
      /*!*******************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/extract-tasks-applications/search/extract-tasks-applications-search.component.ts ***!
  \*******************************************************************************************************************/
      /*! exports provided: ExtractTasksApplicationsSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ExtractTasksApplicationsSearchComponent',
          function() {
            return ExtractTasksApplicationsSearchComponent;
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
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/export.service */ './src/app/shared/services/export.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _extract_tasks_applications_search_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./extract-tasks-applications-search.service */ './src/app/main/maintenance/extract-tasks-applications/search/extract-tasks-applications-search.service.ts'
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

        var ExtractTasksApplicationsSearchComponent = /** @class */ (function(_super) {
          __extends(ExtractTasksApplicationsSearchComponent, _super);
          function ExtractTasksApplicationsSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            confirmationService,
            propertiesService,
            exportService,
            extractTasksApplicationsSearchService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.sessionService = sessionService;
            _this.confirmationService = confirmationService;
            _this.propertiesService = propertiesService;
            _this.exportService = exportService;
            _this.extractTasksApplicationsSearchService = extractTasksApplicationsSearchService;
            return _this;
          }
          ExtractTasksApplicationsSearchComponent_1 = ExtractTasksApplicationsSearchComponent;
          ExtractTasksApplicationsSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__['ComponentConstants']
              .MAI_EXTRACT_TASKS_APPLICATIONS;
          };
          ExtractTasksApplicationsSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
            this.loadDropdowns();
            this.loadTableColumns();
            this.init();
          };
          ExtractTasksApplicationsSearchComponent.prototype.init = function() {
            this.assetsList = [];
            this.selectedAssets = [];
            this.tasksList = [];
            this.selectedTasks = [];
            this.extractTableList = [];
          };
          ExtractTasksApplicationsSearchComponent.prototype.refresh = function() {
            this.init();
          };
          /**************************************************************************
           * Load Dropdowns
           *************************************************************************/
          ExtractTasksApplicationsSearchComponent.prototype.loadDropdowns = function() {
            var _this = this;
            var getTaskTypeMap = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                .TASK_TYPE_MAP
            );
            var getFuncObjectStatusMap = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                .FUNC_OBJECT_STATUS_MAP
            );
            var applicability = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                .TASK_APPLICABILITY_CODE_MAP
            );
            var propertyStatus = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                .OPERATIONAL_STATUS_MAP
            );
            var propertyFunction = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                .ITEM_FAMILY_CODE_MAP
            );
            var getTaskGroupMap = this.extractTasksApplicationsSearchService.getTaskGroups();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['forkJoin'])([
              getTaskTypeMap,
              getFuncObjectStatusMap,
              applicability,
              propertyStatus,
              propertyFunction,
              getTaskGroupMap
            ]).subscribe(function(_a) {
              var _b = __read(_a, 6),
                getTaskTypeResult = _b[0],
                getFuncObjectStatusResult = _b[1],
                getApplicability = _b[2],
                getPropertyStatus = _b[3],
                getPropertyFunction = _b[4],
                getTaskGroupResult = _b[5];
              _this.taskTypeList = getTaskTypeResult.filter(function(obj) {
                return (
                  obj.value !==
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                    .TASK_TYPE_VISIT_KEY
                );
              });
              _this.taskStatusList = getFuncObjectStatusResult;
              _this.modApplicabilityList = getApplicability;
              _this.propertyStatus = getPropertyStatus;
              _this.propertyFunctions = getPropertyFunction;
              _this.taskGroupList = getTaskGroupResult;
            });
          };
          ExtractTasksApplicationsSearchComponent.prototype.formatKeyToLabel = function(key, list) {
            if (!!key) {
              var selectedData = list.find(function(data) {
                return data.value === key;
              });
              return !!selectedData && !!selectedData.label ? selectedData.label : '';
            } else {
              return '';
            }
          };
          /**************************************************************************
           * Table Columns
           *************************************************************************/
          ExtractTasksApplicationsSearchComponent.prototype.loadTableColumns = function() {
            this.assetsCols = [
              { field: 'asset', alignment: 'left' },
              { field: 'familyVariantCode', alignment: 'left' },
              { field: 'pnCode', alignment: 'left' },
              { field: 'equipmentDesignation', alignment: 'left' },
              { field: 'equipmentFunction', alignment: 'left' },
              { field: 'sn', alignment: 'left' },
              { field: 'fatherEquipment', alignment: 'left' },
              { field: 'operationalStatus', alignment: 'left' }
            ];
            this.tasksCols = [
              { field: 'code', alignment: 'left', width: '10%' },
              { field: 'version', alignment: 'left', width: '10%' },
              { field: 'taskDesignation', alignment: 'left', width: '25%' },
              { field: 'taskTask', alignment: 'left', width: '10%' },
              { field: 'taskSubTask', alignment: 'left', width: '10%' },
              { field: 'taskStatus', alignment: 'left', width: '5%' },
              { field: 'taskApplicabilityCode', alignment: 'left', width: '15%' },
              { field: 'taskTypeCode', alignment: 'left', width: '15%' }
            ];
            this.extractTableCols = [
              { field: 'taskCode', alignment: 'left', width: '10%' },
              { field: 'taskVersion', alignment: 'left', width: '10%' },
              { field: 'taskDescription', alignment: 'left', width: '35%' },
              { field: 'taskType', alignment: 'left', width: '10%' },
              { field: 'assetPn', alignment: 'left', width: '10%' },
              { field: 'assetSn', alignment: 'left', width: '10%' },
              { field: 'assetItem', alignment: 'left', width: '15%' }
            ];
          };
          /**************************************************************************
           * Asset Table and Dialog Operations
           *************************************************************************/
          ExtractTasksApplicationsSearchComponent.prototype.deleteSelectedAsset = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey('confirmDeleteSelectedAssets'),
              accept: function() {
                _this.selectedAssets.forEach(function(element) {
                  var indexInDisplayedList = _this.assetsList.indexOf(element);
                  _this.assetsList.splice(indexInDisplayedList, 1);
                });
                _this.selectedAssets = [];
              }
            });
          };
          ExtractTasksApplicationsSearchComponent.prototype.showAssetDialog = function() {
            this.dialogAddAssetVisible = true;
          };
          ExtractTasksApplicationsSearchComponent.prototype.onAddAsset = function(newAssetList) {
            var _this = this;
            var isFound = false;
            newAssetList.forEach(function(data) {
              _this.assetsList.filter(function(row) {
                if (row.equipmentCode === data.equipmentCode) {
                  isFound = true;
                }
              });
            });
            if (isFound) {
              this.messageService.showErrorMessage(this.getTranslateKey('duplicateAsset'));
            } else {
              newAssetList.forEach(function(data) {
                _this.assetsList.push({
                  asset: data.equipmentCode,
                  equipmentCode: data.equipmentCode,
                  equipmentDesignation: data.equipmentDesignation,
                  equipmentFunction: _this.formatKeyToLabel(data.equipmentFunction, _this.propertyFunctions),
                  familyVariantCode: data.familyVariantCode,
                  fatherEquipment: data.fatherEquipment,
                  location: undefined,
                  operationalStatus: _this.formatKeyToLabel(data.operationalStatus, _this.propertyStatus),
                  operatorCustomerCode: data.operatorCustomerCode,
                  ownerCustomerCode: data.ownerCustomerCode,
                  pnCode: data.pnCode,
                  registration: data.registration,
                  sn: data.sn,
                  _expand: false
                });
              });
              // Setting asset name
              this.assetsList.forEach(function(row) {
                if (!!row && !!row.equipmentCode) {
                  _this.fetchEquipmentName(row.equipmentCode, function(name) {
                    row.asset = name;
                  });
                }
              });
            }
          };
          ExtractTasksApplicationsSearchComponent.prototype.toggleResultTableRowDetailsVisibility = function(row) {
            row._expand = !row._expand;
          };
          ExtractTasksApplicationsSearchComponent.prototype.fetchEquipmentName = function(assetCode, callback) {
            var equipmentId = {
              equipmentCode: assetCode
            };
            this.extractTasksApplicationsSearchService.getEquipmentName(equipmentId).subscribe(function(res) {
              callback(res);
            });
          };
          /**************************************************************************
           * Task Table and Dialog Operations
           *************************************************************************/
          ExtractTasksApplicationsSearchComponent.prototype.deleteSelectedTasks = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey('confirmDeleteSelectedTasks'),
              accept: function() {
                _this.selectedTasks.forEach(function(element) {
                  var indexInDisplayedList = _this.tasksList.indexOf(element);
                  _this.tasksList.splice(indexInDisplayedList, 1);
                });
                _this.selectedTasks = [];
              }
            });
          };
          ExtractTasksApplicationsSearchComponent.prototype.openTaskDialog = function() {
            this.showItemTaskSearchPopup = true;
          };
          ExtractTasksApplicationsSearchComponent.prototype.addTask = function(taskListAdded) {
            var _this = this;
            this.showItemTaskSearchPopup = false;
            var isFound = false;
            taskListAdded.forEach(function(data) {
              _this.tasksList.filter(function(row) {
                if (row.taskCode === data.taskCode) {
                  isFound = true;
                }
              });
            });
            if (isFound) {
              this.messageService.showErrorMessage(this.getTranslateKey('duplicateTask'));
            } else {
              taskListAdded.forEach(function(task) {
                _this.tasksList.push({
                  groupCode: _this.formatKeyToLabel(task.groupCode, _this.taskGroupList),
                  overhaul: task.overhaul,
                  repairCenterCode: task.repairCenterCode,
                  taskApplicabilityCode: _this.formatKeyToLabel(task.taskApplicabilityCode, _this.modApplicabilityList),
                  taskChapter: task.taskChapter,
                  taskCode: task.taskCode,
                  code: task.taskCode,
                  taskDesignation: task.taskDesignation,
                  taskSection: task.taskSection,
                  taskStatus: _this.formatKeyToLabel(task.taskStatus, _this.taskStatusList),
                  taskSubTask: task.taskSubTask,
                  taskSubject: task.taskSubject,
                  taskTask: task.taskTask,
                  taskTypeCode: _this.formatKeyToLabel(task.taskTypeCode, _this.taskTypeList),
                  taskVersion: task.taskVersion,
                  version: task.taskVersion,
                  _expand: false
                });
              });
            }
          };
          ExtractTasksApplicationsSearchComponent.prototype.toggleTaskTableRowDetailsVisibility = function(row) {
            row._expand = !row._expand;
          };
          /**************************************************************************
           * Extract Tasks
           *************************************************************************/
          ExtractTasksApplicationsSearchComponent.prototype.search = function() {
            var _this = this;
            if (this.validate()) {
              var assetList_1 = [];
              this.assetsList.forEach(function(row) {
                if (!!row && !!row.equipmentCode) {
                  assetList_1.push(row.equipmentCode);
                }
              });
              this.panelLoading = true;
              var extractTaskApplicationInputDTO = {
                selectedEquipmentCodes: assetList_1,
                selectedTaskKeys: this.tasksList,
                toDate: this.toDate
              };
              this.extractTasksApplicationsSearchService
                .extractTasksApplicationsFromAssetCodeListAndTaskKeyList(extractTaskApplicationInputDTO)
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['finalize'])(function() {
                    _this.panelLoading = false;
                  })
                )
                .subscribe(function(res) {
                  _this.extractTableList = res;
                });
            }
          };
          /**************************************************************************
           * Validate Screen
           *************************************************************************/
          ExtractTasksApplicationsSearchComponent.prototype.validate = function() {
            var MAX_ALLOWED_SIZE = 10;
            if (this.assetsList.length === 0) {
              this.messageService.showWarningMessage(this.getTranslateKey('noAssetSelected'));
              return false;
            }
            if (this.tasksList.length === 0) {
              this.messageService.showWarningMessage(this.getTranslateKey('noTaskSelected'));
              return false;
            }
            if (this.assetsList.length > MAX_ALLOWED_SIZE) {
              this.messageService.showWarningMessage(this.getTranslateKey('assetSelectionLimitReached'));
              return false;
            }
            if (this.tasksList.length > MAX_ALLOWED_SIZE) {
              this.messageService.showWarningMessage(this.getTranslateKey('taskSelectionLimitReached'));
              return false;
            }
            return true;
          };
          /**************************************************************************
           * Extract Task Application Table Operations
           *************************************************************************/
          ExtractTasksApplicationsSearchComponent.prototype.exportTable = function() {
            var table = this.extractTableList.map(function(data) {
              return {
                taskCode: data.taskCode,
                taskVersion: data.taskVersion,
                taskDescription: data.taskDescription,
                taskType: data.taskType,
                counterCode: data.counterCode,
                taskPeriodicity: data.taskPeriodicity,
                ageing: data.ageing,
                unitCode: data.unitCode,
                assetPn: data.assetPn,
                assetSn: data.assetSn,
                assetDescription: data.assetDescription,
                assetItem: data.assetItem,
                topAircraftRegistration: data.topAircraftRegistration,
                nha: data.nha,
                nextTerm: data.nextTerm,
                wpNumber: data.wpNumber,
                woCode: data.woCode
              };
            });
            this.exportService.toExcel(
              table,
              ExtractTasksApplicationsSearchComponent_1.TASK_TABLE_EXPORT_NAME,
              this.componentData.componentId
            );
          };
          ExtractTasksApplicationsSearchComponent.prototype.toggleExtractTaskTableRowDetailsVisibility = function(row) {
            row._expand = !row._expand;
          };
          var ExtractTasksApplicationsSearchComponent_1;
          ExtractTasksApplicationsSearchComponent.TASK_TABLE_EXPORT_NAME = 'task-list';
          ExtractTasksApplicationsSearchComponent = ExtractTasksApplicationsSearchComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-extract-tasks-applications-search',
                template: __webpack_require__(
                  /*! ./extract-tasks-applications-search.component.html */ './src/app/main/maintenance/extract-tasks-applications/search/extract-tasks-applications-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./extract-tasks-applications-search.component.scss */ './src/app/main/maintenance/extract-tasks-applications/search/extract-tasks-applications-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_13__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_15__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_14__['SessionService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_7__['ConfirmationService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__['PropertiesService'],
                _shared_services_export_service__WEBPACK_IMPORTED_MODULE_8__['ExportService'],
                _extract_tasks_applications_search_service__WEBPACK_IMPORTED_MODULE_17__[
                  'ExtractTasksApplicationsSearchService'
                ]
              ])
            ],
            ExtractTasksApplicationsSearchComponent
          );
          return ExtractTasksApplicationsSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_16__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/extract-tasks-applications/search/extract-tasks-applications-search.service.ts':
      /*!*****************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/extract-tasks-applications/search/extract-tasks-applications-search.service.ts ***!
  \*****************************************************************************************************************/
      /*! exports provided: ExtractTasksApplicationsSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ExtractTasksApplicationsSearchService',
          function() {
            return ExtractTasksApplicationsSearchService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/airworthiness-management.api */ './src/app/shared/api/airworthiness-management.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/task-management.api */ './src/app/shared/api/task-management.api.ts'
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

        var ExtractTasksApplicationsSearchService = /** @class */ (function(_super) {
          __extends(ExtractTasksApplicationsSearchService, _super);
          function ExtractTasksApplicationsSearchService(
            http,
            appConfigService,
            airworthinessManagementApi,
            taskManagementApi,
            fleetManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.airworthinessManagementApi = airworthinessManagementApi;
            _this.taskManagementApi = taskManagementApi;
            _this.fleetManagementApi = fleetManagementApi;
            return _this;
          }
          /**************************************************************************
           * API call to extract tasks applications
           *************************************************************************/
          ExtractTasksApplicationsSearchService.prototype.extractTasksApplicationsFromAssetCodeListAndTaskKeyList = function(
            input
          ) {
            return _super.prototype.post.call(
              this,
              this.airworthinessManagementApi.extractTasksApplicationsFromAssetCodeListAndTaskKeyList,
              input
            );
          };
          ExtractTasksApplicationsSearchService.prototype.getTaskGroups = function() {
            return _super.prototype.post.call(this, this.taskManagementApi.findAllBireTaskGroups);
          };
          ExtractTasksApplicationsSearchService.prototype.getEquipmentName = function(bidoEquipmentDTOId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.getEquipmentName, bidoEquipmentDTOId);
          };
          ExtractTasksApplicationsSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__['AppConfigService'],
                _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_2__['AirworthinessManagementApi'],
                _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_4__['TaskManagementApi'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__['FleetManagementApi']
              ])
            ],
            ExtractTasksApplicationsSearchService
          );
          return ExtractTasksApplicationsSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__['AbstractAwHttpService']);

        /***/
      }
  }
]);
//# sourceMappingURL=maintenance-extract-tasks-applications-extract-tasks-applications-module.js.map
