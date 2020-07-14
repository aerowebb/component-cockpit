(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~maintenance-component-cockpit-operation-component-cockpit-operation-module~maintenance-maint~95344441'],
  {
    /***/ './src/app/main/maintenance/component-cockpit-operation/component-cockpit-operation.module.ts':
      /*!****************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit-operation/component-cockpit-operation.module.ts ***!
  \****************************************************************************************************/
      /*! exports provided: ComponentCockpitOperationModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ComponentCockpitOperationModule',
          function() {
            return ComponentCockpitOperationModule;
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
        /* harmony import */ var _shared_api_workscope_component_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/api/workscope-component.api */ './src/app/shared/api/workscope-component.api.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ './src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _form_component_cockpit_operation_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./form/component-cockpit-operation-form.component */ './src/app/main/maintenance/component-cockpit-operation/form/component-cockpit-operation-form.component.ts'
        );
        /* harmony import */ var _form_component_cockpit_operation_form_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./form/component-cockpit-operation-form.service */ './src/app/main/maintenance/component-cockpit-operation/form/component-cockpit-operation-form.service.ts'
        );
        /* harmony import */ var _form_dialog_attribute_dialog_attribute_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./form/dialog-attribute/dialog-attribute.component */ './src/app/main/maintenance/component-cockpit-operation/form/dialog-attribute/dialog-attribute.component.ts'
        );
        /* harmony import */ var _form_dialog_item_selection_dialog_item_selection_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./form/dialog-item-selection/dialog-item-selection.component */ './src/app/main/maintenance/component-cockpit-operation/form/dialog-item-selection/dialog-item-selection.component.ts'
        );
        /* harmony import */ var _search_component_cockpit_operation_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./search/component-cockpit-operation-search.component */ './src/app/main/maintenance/component-cockpit-operation/search/component-cockpit-operation-search.component.ts'
        );
        /* harmony import */ var _search_component_cockpit_operation_search_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./search/component-cockpit-operation-search.service */ './src/app/main/maintenance/component-cockpit-operation/search/component-cockpit-operation-search.service.ts'
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
          primeng_chart__WEBPACK_IMPORTED_MODULE_2__['ChartModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__['TooltipModule'],
          _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_13__['TableModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__['DropdownModule'],
          _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_11__[
            'ManageSearchCriteriaModule'
          ],
          primeng_keyfilter__WEBPACK_IMPORTED_MODULE_4__['KeyFilterModule'],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_12__['ModalModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_5__['TableModule']
        ];
        var INTERNAL_MODULES = [];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [];
        var DYNAMIC_COMPONENTS = [
          _search_component_cockpit_operation_search_component__WEBPACK_IMPORTED_MODULE_19__[
            'ComponentCockpitOperationSearchComponent'
          ],
          _form_component_cockpit_operation_form_component__WEBPACK_IMPORTED_MODULE_15__[
            'ComponentCockpitOperationFormComponent'
          ],
          _form_dialog_attribute_dialog_attribute_component__WEBPACK_IMPORTED_MODULE_17__['DialogAttributeComponent'],
          _form_dialog_item_selection_dialog_item_selection_component__WEBPACK_IMPORTED_MODULE_18__[
            'DialogItemSelectionComponent'
          ]
        ];
        /******************************************************************************
         * Api's
         *************************************************************************** */
        var APIS = [_shared_api_workscope_component_api__WEBPACK_IMPORTED_MODULE_9__['WorkscopeComponentApi']];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _search_component_cockpit_operation_search_service__WEBPACK_IMPORTED_MODULE_20__[
            'ComponentCockpitOperationSearchService'
          ],
          _form_component_cockpit_operation_form_service__WEBPACK_IMPORTED_MODULE_16__[
            'ComponentCockpitOperationFormService'
          ]
        ];
        var ComponentCockpitOperationModule = /** @class */ (function() {
          function ComponentCockpitOperationModule() {}
          ComponentCockpitOperationModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                exports: [
                  _form_component_cockpit_operation_form_component__WEBPACK_IMPORTED_MODULE_15__[
                    'ComponentCockpitOperationFormComponent'
                  ]
                ],
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_7__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_8__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_10__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_14__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES, APIS)
              })
            ],
            ComponentCockpitOperationModule
          );
          return ComponentCockpitOperationModule;
        })();

        /***/
      },

    /***/ './src/app/main/maintenance/component-cockpit-operation/form/component-cockpit-operation-form.component.html':
      /*!*******************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit-operation/form/component-cockpit-operation-form.component.html ***!
  \*******************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div *ngIf="!isCreateOpenMode && componentData && componentData.objectId" class="page-subtitle">\r\n          - {{ subTitle }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions" *ngIf="!isFromWorkPackage">\r\n    <button\r\n      type="button"\r\n      *ngIf="!isReadOpenMode && !isCreateOpenMode && !isStatusClose"\r\n      mat-raised-button\r\n      (click)="close()"\r\n    >\r\n      {{ getComponentName() + ".close" | translate }}\r\n    </button>\r\n    <button\r\n      type="button"\r\n      *ngIf="!isReadOpenMode && !isCreateOpenMode && isStatusClose"\r\n      mat-raised-button\r\n      (click)="reopen()"\r\n    >\r\n      {{ getComponentName() + ".reopen" | translate }}\r\n    </button>\r\n\r\n    <button *ngIf="isReadOpenMode" type="button" mat-raised-button (click)="edit()">\r\n      {{ "global.edit" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode && !isCreateOpenMode"\r\n      type="button"\r\n      color="warn"\r\n      mat-raised-button\r\n      (click)="cancel()"\r\n    >\r\n      {{ "global.cancel" | translate }}\r\n    </button>\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      class="btn-with-spinner"\r\n      color="primary"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="save()"\r\n    >\r\n      <span class="lds-hourglass" *ngIf="showSaveSpinner"></span>\r\n      <span *ngIf="isCreateOpenMode">{{ "global.save" | translate }}</span>\r\n      <span *ngIf="!isCreateOpenMode">{{ "global.update" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button type="button" *ngIf="isReadOpenMode" mat-menu-item (click)="search()">\r\n        {{ "global.refresh" | translate }}\r\n      </button>\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--8">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container loading-indicator">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".projectHeader" | translate }}\r\n                  <div *ngIf="panelLoading" class="lds-hourglass"></div>\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".familyVariant" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        placeholder="&nbsp;"\r\n                        [showClear]="true"\r\n                        [disabled]="isReadOpenMode"\r\n                        [options]="familyVariants"\r\n                        [(ngModel)]="selectedFamilyVariant"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                    <label class="form-label">{{ getComponentName() + ".pn" | translate }}</label>\r\n                    <div class="form-control" *ngIf="!isReadOpenMode">\r\n                      <input type="text" class="aw-input" [(ngModel)]="bsdeProjectDTO.projectPn" />\r\n                    </div>\r\n                    <div class="form-control" *ngIf="isReadOpenMode">\r\n                      <div class="form-control-generic">\r\n                        <a (click)="openPartNumberLink()"> {{ bsdeProjectDTO.projectPn }} </a>\r\n                      </div>\r\n                    </div>\r\n                    <div class="custom-padding">\r\n                      <i>{{ partNumberDTO.description }}</i>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".sn" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control" *ngIf="!isReadOpenMode">\r\n                      <input type="text" class="aw-input" [(ngModel)]="bsdeProjectDTO.projectSn" />\r\n                    </div>\r\n                    <div class="form-control" *ngIf="isReadOpenMode">\r\n                      <div class="form-control-generic">\r\n                        <a (click)="openSNLink()"> {{ bsdeProjectDTO.projectSn }} </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".mroCenter" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        placeholder="&nbsp;"\r\n                        [showClear]="true"\r\n                        [disabled]="isReadOpenMode"\r\n                        [options]="mroCenters"\r\n                        [(ngModel)]="bsdeProjectDTO.repairCenterCode"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".customer" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        placeholder="&nbsp;"\r\n                        [showClear]="true"\r\n                        [disabled]="isReadOpenMode"\r\n                        [options]="customerList"\r\n                        [(ngModel)]="bsdeProjectDTO.customerCode"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".startDate" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="bsdeProjectDTO.projectStartDate"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".endDate" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="bsdeProjectDTO.projectEndDate"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="row">\r\n                  <div class="form-group flex--2">\r\n                    <label class="form-label">\r\n                      {{ componentData.componentId + ".projectName" | translate }}\r\n                    </label>\r\n\r\n                    <div class="form-control">\r\n                      <input\r\n                        type="text"\r\n                        class="aw-input"\r\n                        [disabled]="isReadOpenMode"\r\n                        [(ngModel)]="bsdeProjectDTO.projectName"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group flex--2">\r\n                    <label class="form-label">{{ getComponentName() + ".descripton" | translate }}</label>\r\n                    <div class="form-control">\r\n                      <textarea\r\n                        class="aw-textarea"\r\n                        [rows]="1"\r\n                        pInputTextarea\r\n                        [disabled]="isReadOpenMode"\r\n                        [(ngModel)]="bsdeProjectDTO.projectDescription"\r\n                      ></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="grid-cell--4">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ componentData.componentId + ".attributes" | translate }}\r\n                  ({{ attributesTableDataSource ? attributesTableDataSource.dataCount : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <a-table [dataSource]="attributesTableDataSource">\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && attributesTableDataSource.hasDataSelection"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        color="warn"\r\n                        (click)="deleteAttribute()"\r\n                      >\r\n                        {{ "global.delete" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && attributesTableDataSource.dataSelectionCount === 1"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="editAttributeDialog()"\r\n                      >\r\n                        {{ "global.edit" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf="!isReadOpenMode && attributesTableDataSource.dataSelectionCount === 0"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="openAttributeDialog()"\r\n                      >\r\n                        {{ "global.add" | translate }}\r\n                      </button>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="grid-row" *ngIf="!isCreateOpenMode">\r\n        <div class="grid-cell--4">\r\n          <div class="grid-cell-content">\r\n            <div class="column">\r\n              <div class="row">\r\n                <div class="grid-cell grid-cell--container grid-cell-scope">\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container  loading-indicator">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ getComponentName() + ".workscopeInformation" | translate }}\r\n                        <div *ngIf="workscopePanelLoading" class="lds-hourglass"></div>\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content custom-height">\r\n                    <div class="column">\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ getComponentName() + ".version" | translate }}</label>\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [disabled]="true"\r\n                              [(ngModel)]="workscopeInformationObject.versionNumber"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ getComponentName() + ".status" | translate }}</label>\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [disabled]="true"\r\n                              [(ngModel)]="workscopeInformationObject.status"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ getComponentName() + ".lastUpdate" | translate }}</label>\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [disabled]="true"\r\n                              [(ngModel)]="workscopeInformationObject.lastUpdate"\r\n                              title="{{ workscopeInformationObject.lastUpdate }}"\r\n                            />\r\n                            <span *ngIf="!!workscopeInformationObject.lastUpdateDate">\r\n                              ({{ workscopeInformationObject.lastUpdateDate | date: "yyyy/MM/dd" }})\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ getComponentName() + ".approvedItems" | translate }}</label>\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [disabled]="true"\r\n                              [(ngModel)]="workscopeInformationObject.approveItem"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ getComponentName() + ".draftItems" | translate }}</label>\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [disabled]="true"\r\n                              [(ngModel)]="workscopeInformationObject.draftItem"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ getComponentName() + ".removedItems" | translate }}</label>\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [disabled]="true"\r\n                              [(ngModel)]="workscopeInformationObject.removeItem"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="row search-criteria-footer">\r\n                    <div class="search-actions">\r\n                      <button type="button" mat-raised-button (click)="openWorkscopeForm()">\r\n                        {{ "global.open" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-cell--4">\r\n          <div class="grid-cell grid-cell--container grid-cell-scope">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container  loading-indicator">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".progress" | translate }}\r\n                  <div *ngIf="chartContentReady" class="lds-hourglass"></div>\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content custom-height">\r\n              <div class="column">\r\n                <div class="chart-container">\r\n                  <div class="chart-wrapper">\r\n                    <p-chart\r\n                      [type]="chartType"\r\n                      [data]="chartData"\r\n                      [options]="chartOptions"\r\n                      height="100%"\r\n                      width="100%"\r\n                    ></p-chart>\r\n                  </div>\r\n\r\n                  <div class="chart-legend">\r\n                    <div class="chart-legend-label">\r\n                      <div class="chart-legend-label-color completed"></div>\r\n                      {{ chartData.labels[0] }}\r\n                      <span class="chart-value">{{ progressChart.completed }} </span>\r\n                    </div>\r\n\r\n                    <div class="chart-legend-label">\r\n                      <div class="chart-legend-label-color not-completed"></div>\r\n                      {{ chartData.labels[1] }}\r\n                      <span class="chart-value">{{ progressChart.notCompleted }} </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="row search-criteria-footer">\r\n              <div class="search-actions">\r\n                <button type="button" mat-raised-button (click)="openInspectionForm()">\r\n                  {{ "global.open" | translate }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-cell--4">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container  loading-indicator">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".configureProgress" | translate }}\r\n                  <div *ngIf="chartContentReady" class="lds-hourglass"></div>\r\n                </h3>\r\n              </div>\r\n            </div>\r\n            <!-- TODO:Replace the chart binding if API is completed for Outgoing configuration Progress-->\r\n            <div class="grid-cell-content custom-height">\r\n              <div class="column">\r\n                <div class="chart-container">\r\n                  <div class="chart-wrapper">\r\n                    <p-chart\r\n                      [type]="chartType"\r\n                      [data]="chartData"\r\n                      [options]="chartOptions"\r\n                      height="100%"\r\n                      width="100%"\r\n                    ></p-chart>\r\n                  </div>\r\n\r\n                  <div class="chart-legend">\r\n                    <div class="chart-legend-label">\r\n                      <div class="chart-legend-label-color completed"></div>\r\n                      {{ chartData.labels[0] }}\r\n                      <span class="chart-value">{{ progressChart.completed }} </span>\r\n                    </div>\r\n\r\n                    <div class="chart-legend-label">\r\n                      <div class="chart-legend-label-color not-completed"></div>\r\n                      {{ chartData.labels[1] }}\r\n                      <span class="chart-value">{{ progressChart.notCompleted }} </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="row search-criteria-footer">\r\n              <div class="search-actions">\r\n                <button type="button" mat-raised-button (click)="openInspectionForm()">\r\n                  {{ "global.open" | translate }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-attribute\r\n  *ngIf="displayAttributeDialog"\r\n  [(display)]="displayAttributeDialog"\r\n  [attributeList]="attributeList"\r\n  [attribute]="attributesTableDataSource.dataSelection[0]"\r\n  [isEditMode]="isEditMode"\r\n  (addEditAttribute)="addEditAttribute($event)"\r\n></aw-dialog-attribute>\r\n\r\n<aw-dialog-item-selection\r\n  *ngIf="showItemSelectionDialog"\r\n  [(display)]="showItemSelectionDialog"\r\n  [pn]="bsdeProjectDTO.projectPn"\r\n  [bireItemDTOList]="bireItemDTOList"\r\n  (addBireItem)="addBireItem($event)"\r\n></aw-dialog-item-selection>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/component-cockpit-operation/form/component-cockpit-operation-form.component.scss':
      /*!*******************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit-operation/form/component-cockpit-operation-form.component.scss ***!
  \*******************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .custom-field-padding {\n  padding-top: 0.6em !important; }\n\n:host .chart-container {\n  display: flex;\n  flex-direction: row;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-right: auto;\n  margin-left: auto; }\n\n@media screen and (max-width: 1280px) {\n    :host .chart-container {\n      flex-direction: column; } }\n\n:host .chart-container .chart-legend {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 8px; }\n\n:host .chart-container .chart-legend .chart-legend-label {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n\n:host .chart-container .chart-legend .chart-legend-label .chart-legend-label-color {\n        height: 0.75rem;\n        margin-right: 8px;\n        width: 2rem; }\n\n:host .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.completed {\n          background-color: #4caf50; }\n\n:host .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.not-completed {\n          background-color: #ffc107; }\n\n:host .chart-container .chart-legend .chart-value {\n      font-weight: 700;\n      margin-left: 8px; }\n\n:host .chart-container .chart-wrapper {\n    position: relative;\n    height: 10rem;\n    width: 8rem;\n    margin-top: 0.5em; }\n\n:host .custom-height {\n  min-height: 12.438em; }\n\n:host .custom-span {\n  color: #01579b; }\n\n:host .custom-padding {\n  padding-left: 1.2em;\n  padding-top: 0.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb21wb25lbnQtY29ja3BpdC1vcGVyYXRpb24vZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX21vZGlmaWVycy5zY3NzIiwic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL2NvbXBvbmVudC1jb2NrcGl0LW9wZXJhdGlvbi9mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxtYWludGVuYW5jZVxcY29tcG9uZW50LWNvY2twaXQtb3BlcmF0aW9uXFxmb3JtXFxjb21wb25lbnQtY29ja3BpdC1vcGVyYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9jb21wb25lbnQtY29ja3BpdC1vcGVyYXRpb24vZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL2NvbXBvbmVudC1jb2NrcGl0LW9wZXJhdGlvbi9mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsaUNBQWlDLEVBQUE7O0FBR25DO0VBQ0Usd0JBQXdCO0VBQ3hCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlDQUFpQztFQUFqQyxzQ0FBaUM7RUFBakMsaUNBQWlDLEVBQUE7O0FBR25DO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0Usb0NBQTRCO0tBQTVCLGlDQUE0QjtNQUE1QixnQ0FBNEI7VUFBNUIsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVyxFQUFBOztBQUtiO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0Usa0NBQWtDLEVBQUE7O0FBR3BDO0VBQ0Usa0NBQWtDLEVBQUE7O0FBR3BDO0VBQ0Usb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0Usc0NBQXNDLEVBQUE7O0FDMUh4QztFQUVJLDZCQUE2QixFQUFBOztBQUZqQztFQ29CRSxhQUFhO0VBQ2IsbUJBQW1CO0VENkJqQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBN0NqQjtJQVBKO01BUU0sc0JBQXNCLEVBQUEsRUE2Q3pCOztBQXJESDtJQ2VFLGFBQWE7SUFDYixzQkFBc0I7SURGbEIsdUJBQXVCO0lBQ3ZCLGdCRTBCWSxFQUFBOztBRnpDbEI7TUNvQkUsYUFBYTtNQUNiLG1CQUFtQjtNRERiLG1CQUFtQixFQUFBOztBQXBCM0I7UUF1QlUsZUFBZTtRQUNmLGlCRWlCUTtRRmhCUixXQUFXLEVBQUE7O0FBekJyQjtVQTRCWSx5QkVWVSxFQUFBOztBRmxCdEI7VUFnQ1kseUJFYkksRUFBQTs7QUZuQmhCO01Bc0NRLGdCQUFnQjtNQUNoQixnQkVFVSxFQUFBOztBRnpDbEI7SUE0Q00sa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCLEVBQUE7O0FBL0N2QjtFQXdESSxvQkFBb0IsRUFBQTs7QUF4RHhCO0VBNERJLGNBQWMsRUFBQTs7QUE1RGxCO0VBZ0VJLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvY29tcG9uZW50LWNvY2twaXQtb3BlcmF0aW9uL2Zvcm0vY29tcG9uZW50LWNvY2twaXQtb3BlcmF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS0tZmxleC1jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXNwbGF5LS1mbGV4LXJvdyB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktLW5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlaWdodC0tMTAwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taW4td2lkdGgtLWZpdC1jb250ZW50IHtcclxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb3NpdGlvbi0tcmVsYXRpdmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2Nyb2xsLXktLW5vbmUge1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC0tdW5zZWxlY3RhYmxlIHtcclxuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmlzaWJpbGl0eS0taGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLS0xMCB7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLndpZHRoLS0yMCB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLndpZHRoLS0zMCB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLndpZHRoLS00MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLndpZHRoLS01MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLndpZHRoLS02MCB7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLndpZHRoLS03MCB7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLndpZHRoLS04MCB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLndpZHRoLS05MCB7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLndpZHRoLS0xMDAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4uZmxleC0tMSB7XHJcbiAgZmxleDogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tMiB7XHJcbiAgZmxleDogMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tMyB7XHJcbiAgZmxleDogMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tNCB7XHJcbiAgZmxleDogNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tNSB7XHJcbiAgZmxleDogNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tYXV0byB7XHJcbiAgZmxleDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLWVuZCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tc3RhcnQge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1lbmQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LXN0YXJ0IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG4iLCJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuQGltcG9ydCBcIm1vZGlmaWVyc1wiO1xyXG46aG9zdCB7XHJcbiAgLmN1c3RvbS1maWVsZC1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjZlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY2hhcnQtY29udGFpbmVyIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXJ0LWxlZ2VuZCB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcblxyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAuY2hhcnQtbGVnZW5kLWxhYmVsIHtcclxuICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAuY2hhcnQtbGVnZW5kLWxhYmVsLWNvbG9yIHtcclxuICAgICAgICAgIGhlaWdodDogMC43NXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgICAgIHdpZHRoOiAycmVtO1xyXG5cclxuICAgICAgICAgICYuY29tcGxldGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLm5vdC1jb21wbGV0ZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNoYXJ0LXZhbHVlIHtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXJ0LXdyYXBwZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGhlaWdodDogMTByZW07XHJcbiAgICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgIH1cclxuXHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jdXN0b20taGVpZ2h0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDEyLjQzOGVtO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1zcGFuIHtcclxuICAgIGNvbG9yOiAjMDE1NzliO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogMS4yZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbiAgfVxyXG59XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/maintenance/component-cockpit-operation/form/component-cockpit-operation-form.component.ts':
      /*!*****************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit-operation/form/component-cockpit-operation-form.component.ts ***!
  \*****************************************************************************************************************/
      /*! exports provided: ComponentCockpitOperationFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ComponentCockpitOperationFormComponent',
          function() {
            return ComponentCockpitOperationFormComponent;
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
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
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
        /* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../shared/utils/bido-family-variant-utils */ './src/app/shared/utils/bido-family-variant-utils.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _component_cockpit_operation_form_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./component-cockpit-operation-form.service */ './src/app/main/maintenance/component-cockpit-operation/form/component-cockpit-operation-form.service.ts'
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

        var ProjectStatus;
        (function(ProjectStatus) {
          ProjectStatus['CLOSE'] = '0';
          ProjectStatus['REOPEN'] = '1';
          ProjectStatus['OPEN'] = '3';
        })(ProjectStatus || (ProjectStatus = {}));
        var ComponentCockpitOperationFormComponent = /** @class */ (function(_super) {
          __extends(ComponentCockpitOperationFormComponent, _super);
          function ComponentCockpitOperationFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            sessionService,
            translateService,
            tabService,
            confirmationService,
            componentCockpitOperationFormService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.sessionService = sessionService;
            _this.translateService = translateService;
            _this.confirmationService = confirmationService;
            _this.componentCockpitOperationFormService = componentCockpitOperationFormService;
            _this.chartContentReady = false;
            _this.familyVariants = [];
            _this.initObjects();
            return _this;
          }
          ComponentCockpitOperationFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
              .MAI_COMPONENT_COCKPIT_OPERATION_FORM;
          };
          ComponentCockpitOperationFormComponent.prototype.ngOnInit = function() {
            if (!!this.cockpitComponentData) {
              this.componentData = this.cockpitComponentData;
              this.isFromWorkPackage = this.componentData.isFromWorkPackage || false;
            }
            _super.prototype.ngOnInit.call(this);
            this.updateOpenMode(this.componentData.openMode);
            this.initAttributeTableDataSource();
            this.initChart();
            this.loadDropDowns();
          };
          ComponentCockpitOperationFormComponent.prototype.edit = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Write
            );
            this.componentData.openMode =
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Write;
          };
          ComponentCockpitOperationFormComponent.prototype.cancel = function() {
            if (
              this.componentData.openMode !==
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Create
            ) {
              this.updateOpenMode(
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read
              );
              this.componentData.openMode =
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read;
            }
            this.initObjects();
            this.initAttributeTableDataSource();
            this.initChart();
            this.loadScreenData();
          };
          ComponentCockpitOperationFormComponent.prototype.search = function() {
            this.loadScreenData();
          };
          ComponentCockpitOperationFormComponent.prototype.close = function() {
            this.isStatusClose = true;
            this.isStatusReopen = false;
            this.bsdeProjectDTO.projectEndDate = new Date();
          };
          ComponentCockpitOperationFormComponent.prototype.reopen = function() {
            this.isStatusReopen = true;
            this.isStatusClose = false;
            this.bsdeProjectDTO.projectEndDate = undefined;
          };
          ComponentCockpitOperationFormComponent.prototype.initAttributeTableDataSource = function() {
            this.attributesTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'name',
                  translateKey: this.getTranslateKey('name'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__['ColumnAlignment'].LEFT
                },
                {
                  field: 'attributeValue',
                  translateKey: this.getTranslateKey('value'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__['ColumnAlignment'].LEFT
                }
              ],
              data: []
            });
          };
          ComponentCockpitOperationFormComponent.prototype.loadFamilyVariants = function() {
            var _this = this;
            this.familyVariants = [];
            this.componentCockpitOperationFormService.loadFamilyVariants().subscribe(
              function(results) {
                _this.familyVariantDTOList = results;
                results.forEach(function(result) {
                  var label1 = result.familyname ? result.familyname : result.familyCode;
                  var label2 = result.variantName ? result.variantName : result.variantCode;
                  var label = label1 + '-' + label2;
                  var value = _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_18__[
                    'BidoFamilyVariantUtils'
                  ].buildFamilyVariantCode(result.familyCode, result.variantCode);
                  if (!!label && !!value) {
                    var familyVariant = {
                      label: label,
                      value: value
                    };
                    _this.familyVariants.push(familyVariant);
                  } else {
                    _super.prototype.throwUnboundLocalError.call(_this, 'loadFamilyVariants', 'label && value');
                  }
                });
                _this.familyVariants.sort(function(a, b) {
                  return !!a.label && !!b.label && a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1;
                });
                _this.loadScreenData();
              },
              function() {
                _this.messageService.showErrorMessage('errorOnLoadingFamilyVariants');
              }
            );
          };
          ComponentCockpitOperationFormComponent.prototype.initObjects = function() {
            this.bidoEquipmentDTO = {};
            this.bireItemDTO = {};
            this.partNumberDTO = {};
            this.workscopeInformationObject = {};
            this.selectedFamilyVariant = undefined;
            this.bsdeProjectDTO = {
              projectStartDate: new Date()
            };
            this.removedAttributeList = [];
            this.progressChart = {
              completed: 0,
              notCompleted: 0
            };
            this.chartData = {
              datasets: [],
              labels: []
            };
            this.draft = this.translateService.instant(this.getTranslateKey('draft'));
            this.approved = this.translateService.instant(this.getTranslateKey('approve'));
          };
          // Load dropdowns
          ComponentCockpitOperationFormComponent.prototype.loadDropDowns = function() {
            var _this = this;
            var observables = [
              this.componentCockpitOperationFormService.findMROCenter(),
              this.componentCockpitOperationFormService.findAllCustomers()
            ];
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])(observables).subscribe(function(results) {
              _this.mroCenters = results[0] || [];
              _this.customerList = results[1] || [];
              _this.loadFamilyVariants();
            });
            this.loadAttributesDropdownList();
          };
          /**************************************************
           * To get dto of family variant
           **************************************************/
          ComponentCockpitOperationFormComponent.prototype.filterFamilyVariant = function(familyVariant) {
            if (familyVariant.split('-').length > 1) {
              var family_1 = familyVariant.split('-')[0];
              var variant_1 = familyVariant.split('-')[1];
              return this.familyVariantDTOList.filter(function(res) {
                return res.familyCode === family_1 && res.variantCode === variant_1;
              });
            }
            return [];
          };
          ComponentCockpitOperationFormComponent.prototype.loadAttributesDropdownList = function() {
            var _this = this;
            this.attributeList = [];
            this.componentCockpitOperationFormService.findBsdeAttributeList().subscribe(function(res) {
              res.forEach(function(dto) {
                if (!!dto.attributeId && !!dto.attributeName) {
                  _this.attributeList.push({
                    label: dto.attributeName,
                    value: dto.attributeId,
                    attributeDescription: dto.attributeDescription
                  });
                }
              });
              _this.attributeList.sort(function(a, b) {
                return !!a.label && !!b.label && a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1;
              });
            });
          };
          ComponentCockpitOperationFormComponent.prototype.loadScreenData = function() {
            this.fetchProjectDetails();
          };
          /**********************************
           * FETCH Component Cockpit DETAILS
           **********************************/
          ComponentCockpitOperationFormComponent.prototype.fetchProjectDetails = function() {
            var _this = this;
            if (!!this.componentData && !!this.componentData.objectId) {
              var projectNumber = parseInt(this.serializationService.deserialize(this.componentData.objectId), 10);
              if (!!projectNumber) {
                this.panelLoading = true;
                this.chartContentReady = true;
                this.componentCockpitOperationFormService
                  .findBsdeProjectByProjectNumber(projectNumber)
                  .pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                      _this.panelLoading = false;
                    })
                  )
                  .subscribe(function(result) {
                    _this.bsdeProjectDTO = result;
                    _this.bsdeProjectDTO.projectStartDate = _this.bsdeProjectDTO.projectStartDate
                      ? _this.bsdeProjectDTO.projectStartDate
                      : new Date();
                    if (!!_this.bsdeProjectDTO.projectPn || !!_this.bsdeProjectDTO.projectSn) {
                      var bidoEquipment = {
                        pnCode: _this.bsdeProjectDTO.projectPn,
                        sn: _this.bsdeProjectDTO.projectSn
                      };
                      _this.componentCockpitOperationFormService
                        .findBidoEquipmentsByPnAndSn(bidoEquipment)
                        .subscribe(function(res) {
                          _this.bidoEquipmentDTO = !!res && res.length > 0 ? res[0] : {};
                          _this.selectedFamilyVariant = !!_this.bidoEquipmentDTO.familyVariantCode
                            ? _this.bidoEquipmentDTO.familyVariantCode
                            : undefined;
                          _this.findBireItemByBidoEquipment();
                        });
                    }
                    _this.isStatusClose =
                      _this.bsdeProjectDTO.statusState ===
                      _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_7__[
                        'BidoFunctionTypeConstants'
                      ].UC_IWB_PROJECT_CLOSING;
                    // Setting Context of screen
                    if (!!result.projectNumber) {
                      _this.subTitle = 'N\u00B0 ' + result.projectNumber;
                      _this.tabTitle = [
                        _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__['StringUtils'].isNullOrEmpty(
                          result.projectNumber.toString()
                        )
                          ? ''
                          : 'N\u00B0 ' + result.projectNumber,
                        _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__['StringUtils'].isNullOrEmpty(
                          result.projectPn
                        )
                          ? ''
                          : 'P/N ' + result.projectPn,
                        _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__['StringUtils'].isNullOrEmpty(
                          result.projectSn
                        )
                          ? ''
                          : 'S/N ' + result.projectSn
                      ]
                        .filter(function(s) {
                          return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__['StringUtils'].isEmpty(s);
                        })
                        .join(' | ');
                    }
                    _this.displayComponentContext(_this.tabTitle, _this.isCreateOpenMode);
                    _this.loadAttributes(_this.bsdeProjectDTO.projectId);
                  });
                this.loadWorkscope(projectNumber);
              }
            }
          };
          ComponentCockpitOperationFormComponent.prototype.findBireItemByBidoEquipment = function() {
            var _this = this;
            if (!!this.bidoEquipmentDTO && !!this.selectedFamilyVariant) {
              var dto = this.filterFamilyVariant(this.selectedFamilyVariant);
              if (!!dto && dto.length > 0) {
                var bireItemDTOId = {
                  chapter: this.bidoEquipmentDTO.chapter,
                  section: this.bidoEquipmentDTO.section,
                  subject: this.bidoEquipmentDTO.subject,
                  sheet: this.bidoEquipmentDTO.sheet,
                  marks: this.bidoEquipmentDTO.marks,
                  structureType: dto[0].structureType,
                  familyCode: dto[0].familyCode,
                  variantCode: dto[0].variantCode
                };
                this.componentCockpitOperationFormService.findBireItem(bireItemDTOId).subscribe(function(bireItem) {
                  _this.bireItemDTO = bireItem;
                  _this.loadPNInformation();
                });
              }
            }
          };
          /*************************************
           * Load Inspection
           *************************************/
          ComponentCockpitOperationFormComponent.prototype.loadInspectionInformation = function(projectNumber) {
            var _this = this;
            // Reset Chart
            this.clearChartData();
            // Fill inspection progress chart
            var input = {
              projectNumber: projectNumber
            };
            this.componentCockpitOperationFormService
              .getCockpitInspection(input)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                  _this.chartContentReady = false;
                })
              )
              .subscribe(function(result) {
                var data = _this.buildInspectionTree(result);
                _this.calculateProgressChartData(data);
                // Fill chart data set
                _this.chartData.datasets[0].data = [_this.progressChart.completed, _this.progressChart.notCompleted];
                _this.chartData = __assign({}, _this.chartData);
              });
          };
          ComponentCockpitOperationFormComponent.prototype.buildInspectionTree = function(data) {
            var _this = this;
            var toReturn = [];
            if (!!data) {
              data.forEach(function(elt) {
                var eleClone = elt.data;
                if (!!eleClone) {
                  if (!!elt.sentenceAndDecisionList && elt.sentenceAndDecisionList.length > 0) {
                    elt.sentenceAndDecisionList.forEach(function(res) {
                      if (
                        !!res.decision &&
                        !!res.sentence &&
                        (res.decision !==
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__[
                            'AWPropertiesConstants'
                          ].SENTENCE_BBIS_ENTRY_MISSING_KEY ||
                          res.decision !==
                            _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__[
                              'AWPropertiesConstants'
                            ].SENTENCE_BBIS_LOST_KEY)
                      ) {
                        if (eleClone.totalCompletedInventory === undefined) {
                          eleClone.totalCompletedInventory = 0;
                        }
                        eleClone.totalCompletedInventory =
                          !eleClone.serializedPart && !!res.quantity && parseInt(res.quantity, 10) > 0
                            ? eleClone.totalCompletedInventory + parseInt(res.quantity, 10)
                            : eleClone.totalCompletedInventory + 1;
                      }
                    });
                  }
                }
                toReturn.push({
                  data: eleClone,
                  children: _this.buildInspectionTree(
                    _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__['ListUtils'].orEmpty(elt.children)
                  )
                });
              });
            }
            return toReturn;
          };
          /*************************************
           * Load Workscope
           *************************************/
          ComponentCockpitOperationFormComponent.prototype.loadWorkscope = function(projectNumber) {
            var _this = this;
            // Fill workscope panel
            var input = {
              projectNumber: projectNumber
            };
            this.workscopePanelLoading = true;
            this.componentCockpitOperationFormService
              .getWorkscope(input)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                  _this.workscopePanelLoading = false;
                  _this.loadInspectionInformation(projectNumber);
                })
              )
              .subscribe(function(result) {
                _this.getWorkscopeInformation(result);
                var workscopeStructure = _this.buildTree(result);
                _this.resetWorkscopeCounters();
                _this.updateWorkscopeInformation(workscopeStructure);
              });
          };
          ComponentCockpitOperationFormComponent.prototype.buildTree = function(data) {
            var _this = this;
            var toReturn = [];
            data.forEach(function(elt) {
              _this.updateVersionColumn(elt.data);
              toReturn.push({
                data: elt.data,
                children: _this.buildTree(elt.children || []),
                bireItemDTO: elt.bireItemDTO
              });
            });
            return toReturn;
          };
          ComponentCockpitOperationFormComponent.prototype.resetWorkscopeCounters = function() {
            this.workscopeInformationObject.approveItem = 0;
            this.workscopeInformationObject.draftItem = 0;
            this.workscopeInformationObject.removeItem = 0;
          };
          /***************************************************
           * Update counter of Workscope Information panel
           ***************************************************/
          ComponentCockpitOperationFormComponent.prototype.updateWorkscopeInformation = function(res) {
            var _this = this;
            res.forEach(function(workscope) {
              if (!!workscope.data) {
                var data = workscope.data;
                if (data.isRemoved && _this.workscopeInformationObject.removeItem !== undefined) {
                  _this.workscopeInformationObject.removeItem += 1;
                }
                if (data.workscopeVersionStatus === 1 && _this.workscopeInformationObject.approveItem !== undefined) {
                  _this.workscopeInformationObject.approveItem += 1;
                }
                if (data.workscopeVersionStatus === 0 && _this.workscopeInformationObject.draftItem !== undefined) {
                  _this.workscopeInformationObject.draftItem += 1;
                }
                if (!!workscope.children && workscope.children.length > 0) {
                  _this.updateWorkscopeInformation(workscope.children);
                }
              }
            });
          };
          /***********************************************
           * UPDATE VERSION COLUMN
           ***********************************************/
          ComponentCockpitOperationFormComponent.prototype.updateVersionColumn = function(data) {
            if (data.isWorkscope) {
              if (!data.workscopeVersionNumber || data.workscopeVersionStatus === 0) {
                data.workscopeVersionNumber = this.workscopeInformationObject.versionNumber;
                data.workscopeVersionStatus = this.workscopeInformationObject.status === this.draft ? 0 : 1;
              }
            } else {
              data.workscopeVersionNumber = undefined;
              data.workscopeVersionStatus = undefined;
            }
          };
          /**********************************************
           * Set Workscope Information Panel
           *********************************************/
          ComponentCockpitOperationFormComponent.prototype.getWorkscopeInformation = function(data) {
            this.workscopeInformationObject = {
              lastUpdate: this.bsdeProjectDTO.statusUser,
              lastUpdateDate: this.bsdeProjectDTO.statusDate,
              approveItem: 0,
              draftItem: 0,
              removeItem: 0
            };
            if (!!data && data.length > 0 && !!data[0].data) {
              this.workscopeInformationObject.versionNumber = data[0].data.workscopeVersionNumber;
              this.workscopeInformationObject.status =
                data[0].data.workscopeVersionStatus === 0 ? this.draft : this.approved;
            }
          };
          /***************************************
           * Load Attributes table
           ***************************************/
          ComponentCockpitOperationFormComponent.prototype.loadAttributes = function(projectId) {
            var _this = this;
            var id = {
              projectId: projectId
            };
            this.componentCockpitOperationFormService.findBsdeProjectAttributeByProjectId(id).subscribe(function(res) {
              var tableArr = [];
              res.forEach(function(dto) {
                tableArr.push({
                  attributeId: dto.attributeId,
                  attributeValue: dto.attributeValue,
                  projectId: _this.bsdeProjectDTO.projectId,
                  name: _this.getAttributeName(dto.attributeId)
                });
              });
              _this.attributesTableDataSource.setData(tableArr);
            });
          };
          ComponentCockpitOperationFormComponent.prototype.getAttributeName = function(id) {
            var dto = this.attributeList.filter(function(res) {
              return res.value === id;
            });
            return !!dto && dto.length > 0 ? dto[0].label : undefined;
          };
          /**********************************
           * CHART OPERATIONS
           **********************************/
          ComponentCockpitOperationFormComponent.prototype.initChart = function() {
            this.chartType = 'pie';
            this.chartData = {
              datasets: [
                {
                  data: [],
                  backgroundColor: [
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__['AppConstants'].COLOR_GREEN,
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__['AppConstants'].COLOR_ORANGE
                  ],
                  hoverBackgroundColor: [
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__['AppConstants'].COLOR_GREEN,
                    _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__['AppConstants'].COLOR_ORANGE
                  ]
                }
              ],
              labels: []
            };
            this.setChartLabels();
            this.setChartOptions();
          };
          ComponentCockpitOperationFormComponent.prototype.setChartLabels = function() {
            var _this = this;
            var completedKey = this.getTranslateKey('completed');
            var notCompletedKey = this.getTranslateKey('notCompleted');
            this.translateService.get([completedKey, notCompletedKey]).subscribe(function(results) {
              var completedLabel = results ? results[completedKey] : 'Completed';
              var notCompletedLabel = results ? results[notCompletedKey] : 'Not Completed';
              _this.chartData.labels = [completedLabel, notCompletedLabel];
            });
          };
          ComponentCockpitOperationFormComponent.prototype.setChartOptions = function() {
            this.chartOptions = {
              legend: {
                display: false
              },
              tooltips: {
                bodyFontColor:
                  _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__['AppConstants'].COLOR_BACKGROUND_PRIMARY
              }
            };
          };
          ComponentCockpitOperationFormComponent.prototype.calculateProgressChartData = function(data) {
            var _this = this;
            data.forEach(function(elt) {
              if (!!elt && !!elt.data) {
                var expectedQty = _this.getExpectedQuantity(elt.data) || '0';
                var realQty = _this.getRealQuantity(elt.data) || '0';
                _this.progressChart.completed += elt.data.totalCompletedInventory;
                if (
                  (expectedQty != undefined && parseInt(expectedQty, 10) > parseInt(realQty, 10)) ||
                  parseInt(expectedQty, 10) === parseInt(realQty, 10)
                ) {
                  _this.progressChart.notCompleted +=
                    parseInt(expectedQty, 10) - (elt.data.totalCompletedInventory || 0);
                }
                if (realQty != undefined && parseInt(expectedQty, 10) < parseInt(realQty, 10)) {
                  _this.progressChart.notCompleted += parseInt(realQty, 10) - (elt.data.totalCompletedInventory || 0);
                }
              }
              if (!!elt.children && elt.children.length > 0) {
                _this.calculateProgressChartData(elt.children);
              }
            });
          };
          ComponentCockpitOperationFormComponent.prototype.getExpectedQuantity = function(rowData) {
            var qty = rowData.quantity;
            rowData.expectedQuantity =
              qty !== undefined && qty.split(' ').length === 2
                ? qty.split(' ')[1].substring(1, qty.split(' ')[1].length - 1)
                : qty === '0'
                ? qty
                : undefined;
            return rowData.expectedQuantity;
          };
          ComponentCockpitOperationFormComponent.prototype.getRealQuantity = function(rowData) {
            var qty = rowData.quantity;
            rowData.realQuantity =
              qty !== undefined && qty.split(' ').length > 0 ? qty.split(' ')[0] : qty === '0' ? qty : undefined;
            return rowData.realQuantity;
          };
          ComponentCockpitOperationFormComponent.prototype.clearChartData = function() {
            this.chartData.datasets[0].data = [0, 0];
            this.progressChart = {
              completed: 0,
              notCompleted: 0
            };
          };
          /********************************************
           * Attribute Functionality
           ********************************************/
          ComponentCockpitOperationFormComponent.prototype.openAttributeDialog = function() {
            this.displayAttributeDialog = true;
            this.isEditMode = false;
          };
          ComponentCockpitOperationFormComponent.prototype.editAttributeDialog = function() {
            this.displayAttributeDialog = true;
            this.isEditMode = true;
          };
          ComponentCockpitOperationFormComponent.prototype.deleteAttribute = function() {
            var _this = this;
            var partialMessageKey =
              this.attributesTableDataSource.dataSelectionCount > 1
                ? 'confirmDeleteSelectedAttributes'
                : 'confirmDeleteSelectedAttribute';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(partialMessageKey),
              accept: function() {
                _this.attributesTableDataSource.dataSelection.forEach(function(res) {
                  var startIndex = _this.attributesTableDataSource.dataSrc.findIndex(function(code) {
                    return code.attributeId === res.attributeId;
                  });
                  _this.attributesTableDataSource.dataSrc.splice(startIndex, 1);
                  var id = {
                    attributeId: res.attributeId,
                    projectId: _this.bsdeProjectDTO.projectId
                  };
                  _this.removedAttributeList.push(id);
                });
                _this.attributesTableDataSource.setData(_this.attributesTableDataSource.dataSrc);
                _this.attributesTableDataSource.update();
                _this.attributesTableDataSource.dataSelection = [];
              }
            });
          };
          ComponentCockpitOperationFormComponent.prototype.addEditAttribute = function(event) {
            var _this = this;
            if (!!event.attributeId && !!event.attributeValue) {
              var index_1 = this.attributesTableDataSource.data.findIndex(function(res) {
                return res.attributeId === event.attributeId;
              });
              if (index_1 !== -1) {
                if (!this.isEditMode) {
                  var duplicateMsg = 'attributeAlreadyExists';
                  this.confirmationService.confirm({
                    messageKey: this.getTranslateKey(duplicateMsg),
                    accept: function() {
                      event.projectId = _this.bsdeProjectDTO.projectId;
                      _this.attributesTableDataSource.replaceData(_this.attributesTableDataSource.data[index_1], event);
                    }
                  });
                } else {
                  // Same attribute name
                  event.projectId = this.bsdeProjectDTO.projectId;
                  this.attributesTableDataSource.replaceData(this.attributesTableDataSource.data[index_1], event);
                }
              } else {
                if (this.attributesTableDataSource.dataSelection.length === 1 && this.isEditMode) {
                  var i = this.attributesTableDataSource.data.findIndex(function(res) {
                    return res.attributeId === _this.attributesTableDataSource.dataSelection[0].attributeId;
                  });
                  event.projectId = this.bsdeProjectDTO.projectId;
                  this.attributesTableDataSource.replaceData(this.attributesTableDataSource.data[i], event);
                } else {
                  this.attributesTableDataSource.addData([event]);
                }
              }
              this.attributesTableDataSource.dataSelection = [];
            }
          };
          /********************************************
           * Save
           ********************************************/
          ComponentCockpitOperationFormComponent.prototype.save = function() {
            var _this = this;
            if (this.isValidForm()) {
              this.showSaveSpinner = true;
              this.componentCockpitOperationFormService
                .findBsdeProjectsByProjectCriteria({ bsdeProjectDTOCriteria: {} })
                .subscribe(function(res) {
                  var dto = res.filter(function(project) {
                    return (
                      project.sn === _this.bsdeProjectDTO.projectSn && project.pn === _this.bsdeProjectDTO.projectPn
                    );
                  });
                  if (!!dto && dto.length > 0 && _this.isCreateOpenMode) {
                    _this.showSaveSpinner = false;
                    _this.messageService.showErrorMessage(_this.getTranslateKey('projectAlreadyExist'));
                  } else {
                    _this.findBirePn();
                  }
                });
            }
          };
          // Check if PN Exist
          ComponentCockpitOperationFormComponent.prototype.findBirePn = function() {
            var _this = this;
            var input = {
              pnCode: this.bsdeProjectDTO.projectPn ? this.bsdeProjectDTO.projectPn : ''
            };
            // Input for PN  Validity
            this.componentCockpitOperationFormService.findBirePn(input).subscribe(
              function(result) {
                if (result && result.pnCode) {
                  _this.checkBidoEquipmentsByPnAndSn();
                } else {
                  _this.showSaveSpinner = false;
                  _this.messageService.showErrorMessage(_this.getTranslateKey('pnDoesnotExist'));
                }
              },
              function(error) {
                _this.showSaveSpinner = false;
                _this.messageService.showErrorMessage(_this.getTranslateKey('pnDoesnotExist'));
              }
            );
          };
          // Find if PN and SN correspond to a equipment
          ComponentCockpitOperationFormComponent.prototype.checkBidoEquipmentsByPnAndSn = function() {
            var _this = this;
            var input = {
              pnCode: this.bsdeProjectDTO.projectPn ? this.bsdeProjectDTO.projectPn : this.bidoEquipmentDTO.pnCode,
              sn: this.bsdeProjectDTO.projectSn ? this.bsdeProjectDTO.projectSn : this.bidoEquipmentDTO.sn
            };
            // Input for PN SN Validity
            this.componentCockpitOperationFormService.findBidoEquipmentsByPnAndSn(input).subscribe(function(result) {
              // Equipment Exist
              if (!!result && result.length > 0) {
                if (
                  !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__['StringUtils'].isNullOrEmpty(
                    _this.selectedFamilyVariant
                  ) &&
                  _this.selectedFamilyVariant !== result[0].familyVariantCode
                ) {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('familyVariantError'));
                } else {
                  _this.selectedFamilyVariant = result[0].familyVariantCode;
                  _this.bidoEquipmentDTO = result[0];
                  if (!!_this.bidoEquipmentDTO.chapter) {
                    _this.findBireItemByBidoEquipment();
                    _this.saveBsdeProject();
                  } else {
                    _this.updateEquipment = true;
                    // Find Items associated with Part number
                    _this.componentCockpitOperationFormService
                      .findBireItemsBySearchCriteria(_this.bsdeProjectDTO.projectPn)
                      .subscribe(function(data) {
                        if (!!data && data.length > 0) {
                          _this.bireItemDTOList = data;
                          _this.showItemSelectionDialog = true;
                        }
                      });
                  }
                }
              } else {
                // Check if family Variant exist if PN SN does not correspond to equipment
                if (
                  _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__['StringUtils'].isNullOrEmpty(
                    _this.selectedFamilyVariant
                  )
                ) {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('familyVariantReq'));
                } else {
                  // Check if PN and Family Variant are consistant
                  var familyDTO = _this.filterFamilyVariant(_this.selectedFamilyVariant);
                  if (familyDTO.length > 0) {
                    _this.componentCockpitOperationFormService
                      .findBirePnsBySearchCriteria({
                        birePnDTOCriteria: {
                          pnCode: _this.bsdeProjectDTO.projectPn
                        },
                        familyCode: familyDTO[0].familyCode,
                        variantCode: familyDTO[0].variantCode,
                        structureType: familyDTO[0].structureType
                      })
                      .subscribe(function(res) {
                        if (!!res && res.list.length > 0) {
                          // Equipment does not exist
                          input.familyVariantCode = _this.selectedFamilyVariant;
                          input.equipmentFunction = '';
                          // Find Items associated with Part number
                          _this.componentCockpitOperationFormService
                            .findBireItemsBySearchCriteria(_this.bsdeProjectDTO.projectPn)
                            .subscribe(function(data) {
                              if (!!data && data.length > 0) {
                                if (data.length === 1) {
                                  input.chapter = data[0].chapter;
                                  input.section = data[0].section;
                                  input.subject = data[0].subject;
                                  input.sheet = data[0].sheet;
                                  input.marks = data[0].marks;
                                  _this.updateEquipment = false;
                                  _this.bireItemDTO = data[0];
                                  _this.createAsset(input);
                                } else {
                                  _this.bireItemDTOList = data;
                                  _this.showItemSelectionDialog = true;
                                }
                              } else {
                                _this.messageService.showErrorMessage(_this.getTranslateKey('noItemAssociated'));
                              }
                            });
                        } else {
                          _this.messageService.showErrorMessage(_this.getTranslateKey('pnNotConsistant'));
                        }
                      });
                  }
                }
              }
              _this.showSaveSpinner = false;
            });
          };
          ComponentCockpitOperationFormComponent.prototype.addBireItem = function(ev) {
            var input = {
              pnCode: this.bsdeProjectDTO.projectPn ? this.bsdeProjectDTO.projectPn : this.bidoEquipmentDTO.pnCode,
              sn: this.bsdeProjectDTO.projectSn ? this.bsdeProjectDTO.projectSn : this.bidoEquipmentDTO.sn,
              familyVariantCode: ev.familyCode + '-' + ev.variantCode,
              equipmentFunction: '',
              chapter: ev.chapter,
              section: ev.section,
              subject: ev.subject,
              sheet: ev.sheet,
              marks: ev.marks
            };
            this.bireItemDTO = ev;
            if (!this.updateEquipment) {
              this.createAsset(input);
            } else {
              this.bidoEquipmentDTO.chapter = ev.chapter;
              this.bidoEquipmentDTO.section = ev.section;
              this.bidoEquipmentDTO.subject = ev.subject;
              this.bidoEquipmentDTO.sheet = ev.sheet;
              this.bidoEquipmentDTO.marks = ev.marks;
              this.updateAsset(this.bidoEquipmentDTO);
            }
          };
          /****************************************************
           * Create Bido Equipment DTO
           ****************************************************/
          ComponentCockpitOperationFormComponent.prototype.createAsset = function(input) {
            var _this = this;
            this.componentCockpitOperationFormService
              .saveCreateAsset(input)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                  _this.showSaveSpinner = false;
                })
              )
              .subscribe(
                function(res) {
                  _this.findBidoEquipment(res);
                  _this.saveBsdeProject();
                },
                function(error) {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('pnNotConsistant'));
                }
              );
          };
          ComponentCockpitOperationFormComponent.prototype.findBidoEquipment = function(res) {
            var _this = this;
            this.componentCockpitOperationFormService.findBidoEquipment(res).subscribe(function(equipment) {
              _this.bidoEquipmentDTO = equipment;
            });
          };
          /****************************************************
           * Update Bido Equipment DTO
           ****************************************************/
          ComponentCockpitOperationFormComponent.prototype.updateAsset = function(input) {
            var _this = this;
            this.componentCockpitOperationFormService.updateEquipment(input).subscribe(function(res) {
              _this.bidoEquipmentDTO = res;
              _this.saveBsdeProject();
            });
          };
          ComponentCockpitOperationFormComponent.prototype.saveBsdeProject = function() {
            var _this = this;
            var bsdeProjectAttributeDTOList = [];
            this.attributesTableDataSource.data.forEach(function(res) {
              bsdeProjectAttributeDTOList.push({
                attributeId: res.attributeId,
                attributeValue: res.attributeValue,
                projectId: !!res.projectId ? res.projectId : undefined
              });
            });
            this.bsdeProjectDTO.statusState = this.isStatusClose
              ? ProjectStatus.CLOSE
              : this.isStatusReopen
              ? ProjectStatus.REOPEN
              : ProjectStatus.OPEN;
            var input = {
              bsdeProjectDTO: this.bsdeProjectDTO,
              bsdeProjectAttributeDTOList: bsdeProjectAttributeDTOList,
              removeBsdeProjectAttributeDTOIdList: this.removedAttributeList
            };
            this.componentCockpitOperationFormService
              .saveBsdeProject(input)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                  _this.showSaveSpinner = false;
                })
              )
              .subscribe(function(res) {
                if (!!res) {
                  _this.bsdeProjectDTO = res;
                  _this.componentData.objectId = _this.serializationService.serialize(res.projectNumber);
                  _this.fetchProjectDetails();
                  _this.messageService.showSuccessMessage('global.successOnSave');
                  _this.updateOpenMode(
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read
                  );
                }
              });
          };
          /********************************************
           * Validate Screen
           ********************************************/
          ComponentCockpitOperationFormComponent.prototype.isValidForm = function() {
            var isValid = true;
            if (
              this.componentData.openMode !==
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read
            ) {
              if (
                _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__['StringUtils'].isNullOrEmpty(
                  this.bsdeProjectDTO.projectPn
                ) ||
                _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__['StringUtils'].isNullOrEmpty(
                  this.bsdeProjectDTO.projectSn
                )
              ) {
                isValid = false;
                this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
              } else {
                if (
                  this.componentData.openMode !==
                    _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Create &&
                  !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__['StringUtils'].isNullOrEmpty(
                    this.selectedFamilyVariant
                  ) &&
                  this.selectedFamilyVariant !== this.bidoEquipmentDTO.familyVariantCode
                ) {
                  this.messageService.showErrorMessage(this.getTranslateKey('familyVariantError'));
                  isValid = false;
                }
              }
            }
            return isValid;
          };
          /**********************************
           * OPEN PART NUMBER UC
           **********************************/
          ComponentCockpitOperationFormComponent.prototype.openPartNumberLink = function() {
            if (!!this.bidoEquipmentDTO && !!this.bireItemDTO) {
              var bireVersionPnDTO = {
                subject: this.bidoEquipmentDTO.subject,
                sheet: this.bidoEquipmentDTO.sheet,
                marks: this.bidoEquipmentDTO.marks,
                chapter: this.bidoEquipmentDTO.chapter,
                section: this.bidoEquipmentDTO.section,
                pnCode: this.bsdeProjectDTO.projectPn,
                familyCode: this.bireItemDTO.familyCode,
                variantCode: this.bireItemDTO.variantCode,
                structureType: this.bireItemDTO.structureType
              };
              bireVersionPnDTO.isnAta = this.partNumberDTO.isn;
              bireVersionPnDTO.versionNumber = this.partNumberDTO.versionNumber;
              this.openItemPartNumber(
                bireVersionPnDTO,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read
              );
            }
          };
          ComponentCockpitOperationFormComponent.prototype.loadPNInformation = function() {
            var _this = this;
            if (!!this.bidoEquipmentDTO && !!this.bireItemDTO) {
              var bireVersionPnDTO = {
                subject: this.bidoEquipmentDTO.subject,
                sheet: this.bidoEquipmentDTO.sheet,
                marks: this.bidoEquipmentDTO.marks,
                chapter: this.bidoEquipmentDTO.chapter,
                section: this.bidoEquipmentDTO.section,
                pnCode: this.bsdeProjectDTO.projectPn,
                familyCode: this.bireItemDTO.familyCode,
                variantCode: this.bireItemDTO.variantCode,
                structureType: this.bireItemDTO.structureType
              };
              this.componentCockpitOperationFormService
                .getPartNumberStructure(bireVersionPnDTO)
                .subscribe(function(res) {
                  if (!!res && res.length > 0) {
                    var partNum = res.filter(function(dto) {
                      return (
                        !!dto.bireVersionPnDTO &&
                        _this.bsdeProjectDTO.projectPn === dto.bireVersionPnDTO.pnCode &&
                        _this.bsdeProjectDTO.projectSn
                      );
                    });
                    if (!!partNum && partNum.length > 0) {
                      _this.partNumberDTO = partNum[0];
                    }
                  }
                });
            }
          };
          /**
           * open item part number UC
           */
          ComponentCockpitOperationFormComponent.prototype.openItemPartNumber = function(objectId, openMode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .ENG_ITEM_PART_NUMBER_FORM,
              openMode: openMode
            };
            if (!!objectId) {
              data.objectId = this.serializationService.serialize(objectId);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /************************************
           * Open Equipment Card
           ************************************/
          ComponentCockpitOperationFormComponent.prototype.openSNLink = function() {
            if (!!this.bidoEquipmentDTO && !!this.bidoEquipmentDTO.equipmentCode) {
              var functionNm =
                this.bidoEquipmentDTO.equipmentFunction ||
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_TOOL_KEY;
              this.openEquipment(
                this.bidoEquipmentDTO.equipmentCode,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read,
                functionNm
              );
            }
          };
          ComponentCockpitOperationFormComponent.prototype.openEquipment = function(objectId, openMode, functionNm) {
            var labelKey;
            var componentName;
            if (
              !functionNm ||
              functionNm ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_MAJOR_EQUIPMENT_KEY
            ) {
              labelKey =
                'transaction.' +
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .FLE_EQUIPMENT_FORM;
              componentName =
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .FLE_EQUIPMENT_FORM;
            } else {
              if (
                functionNm ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_ENGINE_KEY
              ) {
                labelKey =
                  'transaction.' +
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                    .FLE_ENGINE_FORM;
                componentName =
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                    .FLE_ENGINE_FORM;
              } else if (
                functionNm ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_AIRCRAFT_KEY
              ) {
                labelKey =
                  'transaction.' +
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                    .FLE_AIRCRAFT_FORM;
                componentName =
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                    .FLE_AIRCRAFT_FORM;
              } else if (
                functionNm ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .FAMILY_FUNCTION_TOOL_KEY
              ) {
                labelKey =
                  'transaction.' +
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                    .LOG_TOOL_FORM;
                componentName =
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                    .LOG_TOOL_FORM;
              } else {
                // Open Equipment By default for other cases
                labelKey =
                  'transaction.' +
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                    .FLE_EQUIPMENT_FORM;
                componentName =
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                    .FLE_EQUIPMENT_FORM;
              }
            }
            var data = {
              id: this.tabService.generateId(),
              componentId: componentName,
              openMode: openMode
            };
            if (!!objectId) {
              var equipmentId = {
                equipmentCode: objectId
              };
              data.objectId = this.serializationService.serialize(equipmentId);
            }
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /************************************
           * Open Inspection Form
           ************************************/
          ComponentCockpitOperationFormComponent.prototype.openInspectionForm = function() {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .MAI_COCKPIT_INSPECTION_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read
            };
            if (!!this.bsdeProjectDTO) {
              var projectNumber = this.bsdeProjectDTO.projectNumber;
              data.objectId = this.serializationService.serialize(projectNumber);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /************************************
           * Open Workscope Form
           ************************************/
          ComponentCockpitOperationFormComponent.prototype.openWorkscopeForm = function() {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .MAI_COCKPIT_WORKSCOPE_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read
            };
            if (!!this.bsdeProjectDTO) {
              var projectNumber = this.bsdeProjectDTO.projectNumber;
              data.objectId = this.serializationService.serialize(projectNumber);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])('cockpitComponentData'),
              __metadata('design:type', Object)
            ],
            ComponentCockpitOperationFormComponent.prototype,
            'cockpitComponentData',
            void 0
          );
          ComponentCockpitOperationFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-component-cockpit-operation-form',
                template: __webpack_require__(
                  /*! ./component-cockpit-operation-form.component.html */ './src/app/main/maintenance/component-cockpit-operation/form/component-cockpit-operation-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./component-cockpit-operation-form.component.scss */ './src/app/main/maintenance/component-cockpit-operation/form/component-cockpit-operation-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_11__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__['SerializationService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_15__['SessionService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_16__['TabService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__['ConfirmationService'],
                _component_cockpit_operation_form_service__WEBPACK_IMPORTED_MODULE_21__[
                  'ComponentCockpitOperationFormService'
                ]
              ])
            ],
            ComponentCockpitOperationFormComponent
          );
          return ComponentCockpitOperationFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_17__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/component-cockpit-operation/form/component-cockpit-operation-form.service.ts':
      /*!***************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit-operation/form/component-cockpit-operation-form.service.ts ***!
  \***************************************************************************************************************/
      /*! exports provided: ComponentCockpitOperationFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ComponentCockpitOperationFormService',
          function() {
            return ComponentCockpitOperationFormService;
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
        /* harmony import */ var _shared_api_cockpit_component_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/cockpit-component.api */ './src/app/shared/api/cockpit-component.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_api_project_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/api/project-management.api */ './src/app/shared/api/project-management.api.ts'
        );
        /* harmony import */ var _shared_api_workscope_component_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/api/workscope-component.api */ './src/app/shared/api/workscope-component.api.ts'
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

        var ComponentCockpitOperationFormService = /** @class */ (function(_super) {
          __extends(ComponentCockpitOperationFormService, _super);
          function ComponentCockpitOperationFormService(
            http,
            appConfigService,
            productStructureManagementApi,
            fleetManagementApi,
            projectManagementApi,
            cockpitComponentApi,
            assetManagementApi,
            workscopeComponentApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.projectManagementApi = projectManagementApi;
            _this.cockpitComponentApi = cockpitComponentApi;
            _this.assetManagementApi = assetManagementApi;
            _this.workscopeComponentApi = workscopeComponentApi;
            return _this;
          }
          // Dropdown API's
          ComponentCockpitOperationFormService.prototype.findMroBireSite = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findMroBireSite);
          };
          ComponentCockpitOperationFormService.prototype.findBsdeProjectByProjectNumber = function(projectNumber) {
            return _super.prototype.post.call(
              this,
              this.projectManagementApi.findBsdeProjectByProjectNumber,
              projectNumber
            );
          };
          ComponentCockpitOperationFormService.prototype.findAllCustomers = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.findMroBireSite);
          };
          ComponentCockpitOperationFormService.prototype.findMROCenter = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireSiteForTask);
          };
          ComponentCockpitOperationFormService.prototype.getCockpitInspection = function(input) {
            return _super.prototype.post.call(this, this.cockpitComponentApi.getCockpitInspection, input);
          };
          ComponentCockpitOperationFormService.prototype.loadFamilyVariants = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireVariantVersions);
          };
          ComponentCockpitOperationFormService.prototype.findBidoEquipmentsByPnAndSn = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes, input);
          };
          ComponentCockpitOperationFormService.prototype.findBirePn = function(id) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBirePn, id);
          };
          ComponentCockpitOperationFormService.prototype.saveBsdeProject = function(input) {
            return _super.prototype.post.call(this, this.projectManagementApi.saveBsdeProject, input);
          };
          ComponentCockpitOperationFormService.prototype.findBsdeAttributeList = function() {
            return _super.prototype.post.call(this, this.projectManagementApi.findBsdeAttributeList);
          };
          ComponentCockpitOperationFormService.prototype.findBsdeProjectAttributesByProject = function() {
            return _super.prototype.post.call(this, this.projectManagementApi.findBsdeProjectAttributesByProject);
          };
          ComponentCockpitOperationFormService.prototype.saveCreateAsset = function(bidoEquipmentDTO) {
            return _super.prototype.post.call(this, this.assetManagementApi.createAsset, bidoEquipmentDTO);
          };
          ComponentCockpitOperationFormService.prototype.findBireItemByBidoEquipment = function(bidoEquipmentDTO) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findBireItemByBidoEquipment,
              bidoEquipmentDTO
            );
          };
          ComponentCockpitOperationFormService.prototype.findBidoEquipment = function(equipmentId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipment, equipmentId);
          };
          ComponentCockpitOperationFormService.prototype.findBsdeProjectAttributeByProjectId = function(input) {
            return _super.prototype.post.call(
              this,
              this.projectManagementApi.findBsdeProjectAttributeByProjectId,
              input
            );
          };
          ComponentCockpitOperationFormService.prototype.getWorkscope = function(input) {
            return _super.prototype.post.call(this, this.workscopeComponentApi.getWorkscope, input);
          };
          // Remove API
          ComponentCockpitOperationFormService.prototype.removeComponentCockpit = function(bsdeProjectDTOIds) {
            return _super.prototype.post.call(
              this,
              this.projectManagementApi.removeComponentCockpit,
              bsdeProjectDTOIds
            );
          };
          ComponentCockpitOperationFormService.prototype.getPartNumberStructure = function(bireItemDTOId) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.getPartNumberStructure,
              bireItemDTOId
            );
          };
          // Search API
          ComponentCockpitOperationFormService.prototype.findBsdeProjectsByProjectCriteria = function(obj) {
            return _super.prototype.post.call(this, this.projectManagementApi.findBsdeProjectsByProjectCriteria, obj);
          };
          // Bind Items Table
          ComponentCockpitOperationFormService.prototype.findBireItemsBySearchCriteria = function(pnCode) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findAllBireItemByPnCodeAndFamilyVariantAndItemNumberAndFunctionCode,
              pnCode
            );
          };
          ComponentCockpitOperationFormService.prototype.updateEquipment = function(bidoEquipmentDTO) {
            return _super.prototype.post.call(this, this.assetManagementApi.updateAsset, bidoEquipmentDTO);
          };
          ComponentCockpitOperationFormService.prototype.findBireItem = function(bireItemDTOId) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBireItem, bireItemDTOId);
          };
          ComponentCockpitOperationFormService.prototype.findBirePnsBySearchCriteria = function(params) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBirePnsBySearchCriteria,
              params
            );
          };
          ComponentCockpitOperationFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__['AppConfigService'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_5__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__['FleetManagementApi'],
                _shared_api_project_management_api__WEBPACK_IMPORTED_MODULE_6__['ProjectManagementApi'],
                _shared_api_cockpit_component_api__WEBPACK_IMPORTED_MODULE_3__['CockpitComponentApi'],
                _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_2__['AssetManagementApi'],
                _shared_api_workscope_component_api__WEBPACK_IMPORTED_MODULE_7__['WorkscopeComponentApi']
              ])
            ],
            ComponentCockpitOperationFormService
          );
          return ComponentCockpitOperationFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/maintenance/component-cockpit-operation/form/dialog-attribute/dialog-attribute.component.html':
      /*!********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit-operation/form/dialog-attribute/dialog-attribute.component.html ***!
  \********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group required">\r\n      <label class="form-label">{{ getComponentName() + ".attributeName" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          appendTo="body"\r\n          placeholder="&nbsp;"\r\n          [showClear]="true"\r\n          [options]="attributeList"\r\n          [(ngModel)]="attribute.attributeId"\r\n          (onChange)="changeAttribute()"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group" *ngIf="!!attribute.attributeId">\r\n      <label class="form-label">{{ getComponentName() + ".description" | translate }}</label>\r\n\r\n      <div class="form-control">\r\n        <textarea class="aw-textarea" [rows]="3" pInputTextarea [(ngModel)]="description" [disabled]="true"></textarea>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="form-group required">\r\n      <label class="form-label">{{ getComponentName() + ".attributeValue" | translate }}</label>\r\n\r\n      <div class="form-control"><input class="aw-input" type="text" [(ngModel)]="attribute.attributeValue" /></div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button type="button" mat-raised-button (click)="validate()">\r\n      {{ (isEditMode ? "global.update" : "global.add") | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/component-cockpit-operation/form/dialog-attribute/dialog-attribute.component.scss':
      /*!********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit-operation/form/dialog-attribute/dialog-attribute.component.scss ***!
  \********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvY29tcG9uZW50LWNvY2twaXQtb3BlcmF0aW9uL2Zvcm0vZGlhbG9nLWF0dHJpYnV0ZS9kaWFsb2ctYXR0cmlidXRlLmNvbXBvbmVudC5zY3NzIn0= */';

        /***/
      },

    /***/ './src/app/main/maintenance/component-cockpit-operation/form/dialog-attribute/dialog-attribute.component.ts':
      /*!******************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit-operation/form/dialog-attribute/dialog-attribute.component.ts ***!
  \******************************************************************************************************************/
      /*! exports provided: DialogAttributeComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogAttributeComponent',
          function() {
            return DialogAttributeComponent;
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

        var DialogAttributeComponent = /** @class */ (function(_super) {
          __extends(DialogAttributeComponent, _super);
          function DialogAttributeComponent(messageService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Read,
                'DialogAttributeComponent'
              ) || this;
            _this.messageService = messageService;
            _this.addEditAttribute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          DialogAttributeComponent.prototype.ngOnInit = function() {
            if (!this.attribute || !this.isEditMode) {
              this.attribute = {};
            } else {
              this.changeAttribute();
            }
          };
          DialogAttributeComponent.prototype.validate = function() {
            if (this.validateScreen()) {
              this.addEditAttribute.emit(this.attribute);
              this.closeDialog();
            } else {
              this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
            }
          };
          DialogAttributeComponent.prototype.validateScreen = function() {
            return !!this.attribute.attributeValue && !!this.attribute.attributeId;
          };
          DialogAttributeComponent.prototype.changeAttribute = function() {
            var _this = this;
            var dto = this.attributeList.filter(function(res) {
              return _this.attribute.attributeId === res.value;
            });
            if (!!dto && dto.length > 0) {
              this.description = dto[0].attributeDescription;
              this.attribute.name = dto[0].label;
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogAttributeComponent.prototype,
            'attribute',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogAttributeComponent.prototype,
            'attributeList',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogAttributeComponent.prototype,
            'addEditAttribute',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            DialogAttributeComponent.prototype,
            'isEditMode',
            void 0
          );
          DialogAttributeComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-attribute',
                template: __webpack_require__(
                  /*! ./dialog-attribute.component.html */ './src/app/main/maintenance/component-cockpit-operation/form/dialog-attribute/dialog-attribute.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-attribute.component.scss */ './src/app/main/maintenance/component-cockpit-operation/form/dialog-attribute/dialog-attribute.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__['MessageService']
              ])
            ],
            DialogAttributeComponent
          );
          return DialogAttributeComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/component-cockpit-operation/form/dialog-item-selection/dialog-item-selection.component.html':
      /*!******************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit-operation/form/dialog-item-selection/dialog-item-selection.component.html ***!
  \******************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="30">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="form-group required">\r\n      <label class="form-label">{{ getComponentName() + ".selectItem" | translate }} {{ pn }}</label>\r\n\r\n      <div class="form-control">\r\n        <p-dropdown\r\n          class="aw-dropdown fixed-width"\r\n          appendTo="body"\r\n          placeholder="&nbsp;"\r\n          [showClear]="true"\r\n          [options]="bireItemList"\r\n          [(ngModel)]="bireItemSelected"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.close" | translate }}</span>\r\n    </button>\r\n\r\n    <button type="button" mat-raised-button (click)="validate()">\r\n      {{ "global.add" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/component-cockpit-operation/form/dialog-item-selection/dialog-item-selection.component.ts':
      /*!****************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit-operation/form/dialog-item-selection/dialog-item-selection.component.ts ***!
  \****************************************************************************************************************************/
      /*! exports provided: DialogItemSelectionComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogItemSelectionComponent',
          function() {
            return DialogItemSelectionComponent;
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

        var DialogItemSelectionComponent = /** @class */ (function(_super) {
          __extends(DialogItemSelectionComponent, _super);
          function DialogItemSelectionComponent(messageService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Read,
                'DialogItemSelectionComponent'
              ) || this;
            _this.messageService = messageService;
            _this.addBireItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          DialogItemSelectionComponent.prototype.ngOnInit = function() {
            var _this = this;
            this.bireItemSelected = {};
            this.bireItemList = [];
            if (!!this.bireItemDTOList && this.bireItemDTOList.length > 0) {
              this.bireItemDTOList.forEach(function(res) {
                _this.bireItemList.push({
                  label:
                    res.familyCode +
                    '-' +
                    res.variantCode +
                    ' / ' +
                    [res.chapter, res.section, res.subject, res.sheet, res.marks].join('-') +
                    ' / ' +
                    res.name,
                  value: res
                });
              });
              if (this.bireItemList.length > 0) {
                this.bireItemSelected = this.bireItemList[0].value;
              }
            }
          };
          DialogItemSelectionComponent.prototype.validate = function() {
            if (this.validateScreen()) {
              this.addBireItem.emit(this.bireItemSelected);
              this.closeDialog();
            } else {
              this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
            }
          };
          DialogItemSelectionComponent.prototype.validateScreen = function() {
            return true;
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogItemSelectionComponent.prototype,
            'bireItemDTOList',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogItemSelectionComponent.prototype,
            'pn',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogItemSelectionComponent.prototype,
            'addBireItem',
            void 0
          );
          DialogItemSelectionComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-item-selection',
                template: __webpack_require__(
                  /*! ./dialog-item-selection.component.html */ './src/app/main/maintenance/component-cockpit-operation/form/dialog-item-selection/dialog-item-selection.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__['MessageService']
              ])
            ],
            DialogItemSelectionComponent
          );
          return DialogItemSelectionComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/component-cockpit-operation/search/component-cockpit-operation-search.component.html':
      /*!***********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit-operation/search/component-cockpit-operation-search.component.html ***!
  \***********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div class="page-subtitle"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button type="button" mat-raised-button (click)="openNewComponentCockpit()" *ngIf="hasUpdateAccessRight">\r\n      {{ "global.create" | translate }}\r\n    </button>\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container" style="height: auto;">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row search-criteria-header">\r\n                    <aw-manage-search-criteria\r\n                      [componentId]="SEARCH_CRITERIA_ID"\r\n                      (onSelected)="loadSearchCriteria($event)"\r\n                      (onSavedAsked)="saveSearchCriteriaAsked()"\r\n                      [objectFromPage]="criteriaToSave"\r\n                    ></aw-manage-search-criteria>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- MAIN -->\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentData.componentId + ".number" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          pKeyFilter="int"\r\n                          [(ngModel)]="searchObj.bsdeProjectDTOCriteria.projectNumber"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentData.componentId + ".name" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [maxlength]="19"\r\n                          [(ngModel)]="searchObj.bsdeProjectDTOCriteria.projectName"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentData.componentId + ".pn" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [maxlength]="50"\r\n                          [(ngModel)]="searchObj.bsdeProjectDTOCriteria.projectPn"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentData.componentId + ".sn" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [maxlength]="50"\r\n                          [(ngModel)]="searchObj.bsdeProjectDTOCriteria.projectSn"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentData.componentId + ".mroCenter" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          placeholder="&nbsp;"\r\n                          [(ngModel)]="searchObj.mroSiteText"\r\n                          [options]="mroCenterList"\r\n                          [showClear]="true"\r\n                          (keydown.enter)="search()"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group">\r\n                      <label class="form-label"> {{ componentData.componentId + ".customer" | translate }} </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          placeholder="&nbsp;"\r\n                          [showClear]="true"\r\n                          [(ngModel)]="searchObj.bsdeProjectDTOCriteria.customerCode"\r\n                          [options]="customerList"\r\n                          (keydown.enter)="search()"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group"></div>\r\n                    <div class="form-group"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- EXPANDABLE CONTENT -->\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="advanced-criteria" [ngClass]="{ \'display--none\': !showAdvancedCriteria }">\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ getComponentName() + ".description" | translate }} </label>\r\n\r\n                        <div class="form-control">\r\n                          <input\r\n                            type="text"\r\n                            class="aw-input"\r\n                            [maxlength]="150"\r\n                            [(ngModel)]="searchObj.bsdeProjectDTOCriteria.projectDescription"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".startDateStr" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control  display--flex-row">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width  flex--2"\r\n                            [options]="dateFilterList"\r\n                            appendTo="body"\r\n                            [(ngModel)]="searchObj.startDateCriteria"\r\n                            placeholder="&nbsp;"\r\n                          ></p-dropdown>\r\n                          &nbsp;&nbsp;\r\n                          <p-calendar\r\n                            showButtonBar="true"\r\n                            [monthNavigator]="true"\r\n                            [yearNavigator]="true"\r\n                            [yearRange]="sessionService.calendarYearRange"\r\n                            class="aw-calendar flex--4"\r\n                            [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                            [locale]="sessionService.calendarFormat"\r\n                            [(ngModel)]="searchObj.bsdeProjectDTOCriteria.projectStartDate"\r\n                            appendTo="body"\r\n                          >\r\n                          </p-calendar>\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".endDateStr" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control  display--flex-row">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width  flex--2"\r\n                            [options]="dateFilterList"\r\n                            appendTo="body"\r\n                            [(ngModel)]="searchObj.endDateCriteria"\r\n                            placeholder="&nbsp;"\r\n                          ></p-dropdown>\r\n                          &nbsp;&nbsp;\r\n                          <p-calendar\r\n                            showButtonBar="true"\r\n                            [monthNavigator]="true"\r\n                            [yearNavigator]="true"\r\n                            [yearRange]="sessionService.calendarYearRange"\r\n                            class="aw-calendar flex--4"\r\n                            [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                            [locale]="sessionService.calendarFormat"\r\n                            [(ngModel)]="searchObj.bsdeProjectDTOCriteria.projectEndDate"\r\n                            appendTo="body"\r\n                          ></p-calendar>\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group"></div>\r\n                    </div>\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label"> {{ componentData.componentId + ".lastUpdate" | translate }} </label>\r\n\r\n                        <div class="form-control  display--flex-row">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width  flex--2"\r\n                            [options]="dateFilterList"\r\n                            [(ngModel)]="searchObj.statusDateCriteria"\r\n                            placeholder="&nbsp;"\r\n                            appendTo="body"\r\n                          ></p-dropdown>\r\n                          &nbsp;&nbsp;\r\n                          <p-calendar\r\n                            showButtonBar="true"\r\n                            [monthNavigator]="true"\r\n                            [yearNavigator]="true"\r\n                            [yearRange]="sessionService.calendarYearRange"\r\n                            class="aw-calendar flex--4"\r\n                            [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                            [(ngModel)]="searchObj.bsdeProjectDTOCriteria.statusDate"\r\n                            [locale]="sessionService.calendarFormat"\r\n                            appendTo="body"\r\n                          ></p-calendar>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".lastUpdatedBy" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width"\r\n                            [options]="lastUpdateByList"\r\n                            [showClear]="true"\r\n                            placeholder="&nbsp;"\r\n                            [(ngModel)]="searchObj.lastUserCriteria"\r\n                            (keydown.enter)="search()"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class="form-group">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".currentStatus" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width"\r\n                            [options]="statusList"\r\n                            [(ngModel)]="searchObj.bsdeProjectDTOCriteria.statusStateText"\r\n                            [showClear]="true"\r\n                            appendTo="body"\r\n                            placeholder="&nbsp;"\r\n                            (keydown.enter)="search()"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group"></div>\r\n                    </div>\r\n\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".attributeName" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <p-dropdown\r\n                            class="aw-dropdown fixed-width"\r\n                            placeholder="&nbsp;"\r\n                            [options]="attributeNameList"\r\n                            [(ngModel)]="attributeNameVal"\r\n                            [showClear]="true"\r\n                            (keydown.enter)="search()"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group">\r\n                        <label class="form-label">\r\n                          {{ componentData.componentId + ".attributeValue" | translate }}\r\n                        </label>\r\n\r\n                        <div class="form-control">\r\n                          <input type="text" class="aw-input" [(ngModel)]="attributeValue" />\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group"></div>\r\n                      <div class="form-group"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class="row search-criteria-footer">\r\n                <button mat-button (click)="showAdvancedCriteria = !showAdvancedCriteria">\r\n                  <ng-container *ngIf="showAdvancedCriteria">\r\n                    <mat-icon>remove</mat-icon>\r\n                    {{ "global.collapseCriteria" | translate }}\r\n                  </ng-container>\r\n                  <ng-container *ngIf="!showAdvancedCriteria">\r\n                    <mat-icon>add</mat-icon>\r\n                    {{ "global.expandCriteria" | translate }}\r\n                  </ng-container>\r\n                </button>\r\n\r\n                <div class="search-actions">\r\n                  <button\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="search()"\r\n                    color="primary"\r\n                    appKeyPress\r\n                    [keyCode]="\'Enter\'"\r\n                    (keyPress)="search()"\r\n                  >\r\n                    {{ "global.toSearch" | translate }}\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- RESULT TABLE -->\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ "global.results" | translate }} ({{ resultsTable ? resultsTable.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <p-table\r\n                [resizableColumns]="true"\r\n                #ptableCockpit\r\n                class="aw-table2"\r\n                [columns]="tableCols"\r\n                [value]="resultsTable"\r\n                [(selection)]="selectedRows"\r\n                [scrollable]="true"\r\n                dataKey="projectNumber"\r\n              >\r\n                <ng-template pTemplate="emptymessage">\r\n                  <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n                  <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                    <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                    <div class="lds-hourglass"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="caption">\r\n                  <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedRows.length > 0 }">\r\n                    <div class="aw-table-global-filter">\r\n                      <label class="aw-table-global-filter-label">\r\n                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableEquipmentGlobalFilter\r\n                        class="aw-table-global-filter-input"\r\n                        type="text"\r\n                        placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                        (input)="ptableCockpit.filterGlobal($event.target.value, \'contains\')"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class="aw-table-actions">\r\n                      <button\r\n                        *ngIf="resultsTable && resultsTable.length > 0 && selectedRows.length === 0"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="exportTable()"\r\n                      >\r\n                        {{ "global.export" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="selectedRows.length > 0"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        color="warn"\r\n                        (click)="deleteSelectedCockpits()"\r\n                      >\r\n                        {{ "global.delete" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="selectedRows.length > 0"\r\n                        type="button"\r\n                        (click)="openWorkscopeUC()"\r\n                        mat-raised-button\r\n                      >\r\n                        {{ componentData.componentId + ".workscope" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="selectedRows.length > 0"\r\n                        type="button"\r\n                        (click)="openInspectionUC()"\r\n                        mat-raised-button\r\n                      >\r\n                        {{ componentData.componentId + ".inspection" | translate }}\r\n                      </button>\r\n\r\n                      <button *ngIf="selectedRows.length > 0" type="button" mat-raised-button>\r\n                        {{ componentData.componentId + ".outGoingConfiguration" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf="selectedRows.length > 0"\r\n                        type="button"\r\n                        mat-raised-button\r\n                        (click)="openComponentCockpit()"\r\n                      >\r\n                        {{ "global.open" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="colgroup" let-columns>\r\n                  <colgroup>\r\n                    <col class="aw-table-checkbox-wrapper" />\r\n                    <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                    <col class="row-expand-wrapper" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="header" let-columns>\r\n                  <tr>\r\n                    <th class="aw-table-checkbox-wrapper">\r\n                      <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      {{ componentData.componentId + "." + col.field | translate }}\r\n                    </th>\r\n\r\n                    <th class="row-expand-wrapper"></th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                  <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                    <td class="aw-table-checkbox-wrapper">\r\n                      <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                      <span *ngSwitchCase="\'projectNumber\'">\r\n                        <a (click)="openComponent(rowData)"> {{ rowData[col.field] }}</a>\r\n                      </span>\r\n                      <span *ngSwitchCase="\'projectName\'" pTooltip="{{ rowData[col.field] }}" tooltipPosition="bottom">\r\n                        {{ rowData[col.field] }}\r\n                      </span>\r\n\r\n                      <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                    </td>\r\n\r\n                    <td class="row-expand-wrapper" [pRowToggler]="rowData">\r\n                      <i\r\n                        class="fa fa-fw aw-icon aw-icon-with-border"\r\n                        [ngClass]="{\r\n                          \'fa-minus\': rowData._expand,\r\n                          \'fa-plus\': !rowData.expand\r\n                        }"\r\n                        aria-hidden="true"\r\n                        pTooltip="{{ \'global.showTableRowDetails\' | translate }}"\r\n                        tooltipPosition="left"\r\n                        (click)="toggleResultTableRowDetailsVisibility(rowData)"\r\n                      ></i>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf="rowData._expand" class="row-expanded">\r\n                    <td [attr.colspan]="columns.length + 1">\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".mroCenter" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <input class="aw-input" type="text" [(ngModel)]="rowData.mroCenter" [disabled]="true" />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".lastUpdate" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <input class="aw-input" type="text" [(ngModel)]="rowData.lastUpdated" [disabled]="true" />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group">\r\n                          <label class="form-label">\r\n                            {{ getComponentName() + ".lastUpdatedBy" | translate }}\r\n                          </label>\r\n\r\n                          <div class="form-control">\r\n                            <input class="aw-input" type="text" [(ngModel)]="rowData.lastUpdatedBy" [disabled]="true" />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/component-cockpit-operation/search/component-cockpit-operation-search.component.scss':
      /*!***********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit-operation/search/component-cockpit-operation-search.component.scss ***!
  \***********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvY29tcG9uZW50LWNvY2twaXQtb3BlcmF0aW9uL3NlYXJjaC9jb21wb25lbnQtY29ja3BpdC1vcGVyYXRpb24tc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */';

        /***/
      },

    /***/ './src/app/main/maintenance/component-cockpit-operation/search/component-cockpit-operation-search.component.ts':
      /*!*********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit-operation/search/component-cockpit-operation-search.component.ts ***!
  \*********************************************************************************************************************/
      /*! exports provided: ComponentCockpitOperationSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ComponentCockpitOperationSearchComponent',
          function() {
            return ComponentCockpitOperationSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../shared/constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_search_criteria_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/search-criteria.constants */ './src/app/shared/constants/search-criteria.constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/export.service */ './src/app/shared/services/export.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _component_cockpit_operation_search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./component-cockpit-operation-search.service */ './src/app/main/maintenance/component-cockpit-operation/search/component-cockpit-operation-search.service.ts'
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

        var ComponentCockpitOperationSearchComponent = /** @class */ (function(_super) {
          __extends(ComponentCockpitOperationSearchComponent, _super);
          function ComponentCockpitOperationSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            confirmationService,
            tabService,
            dateService,
            exportService,
            sessionService,
            componentCockpitOperationSearchService
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
            _this.confirmationService = confirmationService;
            _this.dateService = dateService;
            _this.exportService = exportService;
            _this.sessionService = sessionService;
            _this.componentCockpitOperationSearchService = componentCockpitOperationSearchService;
            _this.SEARCH_CRITERIA_ID =
              _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__[
                'AppConstants'
              ].BUSINESS_PARTNER_SEARCH_CRITERIA_ID;
            return _this;
          }
          ComponentCockpitOperationSearchComponent_1 = ComponentCockpitOperationSearchComponent;
          ComponentCockpitOperationSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .MAI_COMPONENT_COCKPIT_OPERATION_SEARCH;
          };
          ComponentCockpitOperationSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
            this.init();
          };
          /*************************************************************************
           * INIT
           *************************************************************************/
          ComponentCockpitOperationSearchComponent.prototype.init = function() {
            this.initDropdowns();
            this.selectedRows = [];
            this.dateFilterList = [];
            this.searchObj = {
              bsdeProjectDTOCriteria: {
                fromSap: false
              }
            };
            this.initTableCols();
          };
          /*************************************************************************
           * INIT TABLE COLS
           *************************************************************************/
          ComponentCockpitOperationSearchComponent.prototype.initTableCols = function() {
            this.tableCols = [
              { field: 'projectNumber', alignment: 'left', width: '10%' },
              { field: 'projectName', alignment: 'left', width: '20%' },
              { field: 'pn', alignment: 'left', width: '10%' },
              { field: 'sn', alignment: 'left', width: '10%' },
              { field: 'startDateStr', alignment: 'left', width: '10%' },
              { field: 'endDateStr', alignment: 'left', width: '10%' },
              { field: 'customer', alignment: 'left', width: '20%' },
              { field: 'currentStatus', alignment: 'left', width: '10%' },
              { field: 'mroCenter', alignment: 'left' },
              { field: 'lastUpdate', alignment: 'left' },
              { field: 'lastUpdatedBy', alignment: 'left' }
            ];
          };
          /*************************************************************************
           * INIT DROPDOWN
           *************************************************************************/
          ComponentCockpitOperationSearchComponent.prototype.initDropdowns = function() {
            var _this = this;
            this.componentCockpitOperationSearchService.findMroBireSite().subscribe(function(res) {
              _this.mroCenterList = res;
            });
            this.componentCockpitOperationSearchService.findAllCustomers().subscribe(function(res) {
              _this.customerList = res;
            });
            this.componentCockpitOperationSearchService.findBsdeAttributes().subscribe(function(res) {
              res.sort(function(a, b) {
                return !!a.label && !!b.label && a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1;
              });
              _this.attributeNameList = res;
            });
            this.componentCockpitOperationSearchService.fillStatusList().subscribe(function(res) {
              _this.statusList = res;
            });
            this.componentCockpitOperationSearchService.getAllUserList().subscribe(function(res) {
              // Conversion of the received LabelValues, in order to hide user's identity
              // (label = 'John Doe', value = 'jdoe')  => (label = 'jdoe', value = 'jdoe')
              res.forEach(function(elmt) {
                return (elmt.label = elmt.value);
              });
              res.sort(function(a, b) {
                return !!a.label && !!b.label && a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1;
              });
              _this.lastUpdateByList = res;
            });
            this.componentCockpitOperationSearchService.initDate().subscribe(function(res) {
              _this.dateFilterList = res;
              _this.searchObj.startDateCriteria =
                _shared_constants_search_criteria_constants__WEBPACK_IMPORTED_MODULE_3__[
                  'SearchCriteriaConstants'
                ].DATE_AFTER_KEY;
              _this.searchObj.endDateCriteria =
                _shared_constants_search_criteria_constants__WEBPACK_IMPORTED_MODULE_3__[
                  'SearchCriteriaConstants'
                ].DATE_AFTER_KEY;
              _this.searchObj.statusDateCriteria =
                _shared_constants_search_criteria_constants__WEBPACK_IMPORTED_MODULE_3__[
                  'SearchCriteriaConstants'
                ].DATE_AFTER_KEY;
            });
          };
          /*************************************************************************
           * SETTING ATTRIBUTES
           *************************************************************************/
          ComponentCockpitOperationSearchComponent.prototype.setAttributeDTO = function() {
            this.searchObj.attributes = {};
            this.attributesMap = new Map();
            if (!!this.attributeNameVal && !!this.attributeValue) {
              this.attributesMap.set(parseInt(this.attributeNameVal, 10), this.attributeValue);
            }
            var attributesConvMap = {};
            if (this.attributesMap.size !== 0) {
              this.attributesMap.forEach(function(value, key) {
                attributesConvMap[key] = value;
              });
              if (Object.keys(attributesConvMap).length > 0) {
                this.searchObj.attributes = __assign({}, attributesConvMap);
              }
            }
          };
          /*************************************************************************
           * SEARCH
           *************************************************************************/
          ComponentCockpitOperationSearchComponent.prototype.search = function() {
            var _this = this;
            this.resultsTable = [];
            this.selectedRows = [];
            this.isLoading = true;
            _super.prototype.scrollToAnchor.call(this, this.resultsContainerAnchor);
            this.setAttributeDTO();
            // If user exists
            var obj = __assign({}, this.searchObj);
            obj.lastUserCriteria = this.getStatusUserName(obj.lastUserCriteria);
            this.componentCockpitOperationSearchService.findBsdeProjectsByProjectCriteria(obj).subscribe(
              function(res) {
                res.forEach(function(row) {
                  _this.resultsTable.push({
                    projectNumber: row.projectNumber,
                    projectName: row.projectName,
                    pn: row.pn,
                    sn: row.sn,
                    startDate: row.startDate,
                    startDateStr:
                      !!row && !!row.startDate
                        ? _this.dateService.dateWithHourMinSecToString(row.startDate)
                        : undefined,
                    endDateStr:
                      !!row && !!row.endDate ? _this.dateService.dateWithHourMinSecToString(row.endDate) : undefined,
                    mroCenter: row.mroCenter,
                    customer: row.customer,
                    currentStatus: row.currentStatus,
                    lastUpdated: _this.dateService.dateWithHourToString(row.lastUpdated),
                    lastUpdatedBy: row.lastUpdatedBy,
                    statusState: row.statusState,
                    statusUser: row.statusUser,
                    statusDate: row.statusDate,
                    bsdeProjectDTO: row.bsdeProjectDTO,
                    _expand: false
                  });
                });
                _this.isLoading = false;
                _super.prototype.differ.call(_this, function() {
                  _super.prototype.scrollToAnchor.call(_this, _this.resultsContainerAnchor);
                });
              },
              function(error) {
                _this.isLoading = false;
              }
            );
          };
          ComponentCockpitOperationSearchComponent.prototype.getStatusUserName = function(value) {
            return !!value
              ? this.lastUpdateByList.filter(function(res) {
                  return res.value === value;
                })[0].label
              : undefined;
          };
          /*************************************************************************
           * EXPORT TABLE
           *************************************************************************/
          ComponentCockpitOperationSearchComponent.prototype.exportTable = function() {
            var table = this.resultsTable.map(function(row) {
              return {
                projectNumber: row.projectNumber,
                projectName: row.projectName,
                pn: row.pn,
                sn: row.sn,
                startDateStr: row.startDateStr,
                endDateStr: row.endDateStr,
                customer: row.customer,
                mroCenter: row.mroCenter,
                currentStatus: row.currentStatus,
                lastUpdatedStr: row.lastUpdated,
                lastUpdatedBy: row.lastUpdatedBy
              };
            });
            this.exportService.toExcel(
              table,
              ComponentCockpitOperationSearchComponent_1.COCKPIT_TABLE_EXPORT_NAME,
              this.componentData.componentId
            );
          };
          ComponentCockpitOperationSearchComponent.prototype.toggleResultTableRowDetailsVisibility = function(row) {
            row._expand = !row._expand;
          };
          /*************************************************************************
           * SAVE SEARCH
           *************************************************************************/
          ComponentCockpitOperationSearchComponent.prototype.loadSearchCriteria = function(event) {
            var criteria = event.criteria;
            if (!criteria) {
              this.resetSearchCriteria();
              return;
            }
            // do not load criteria first time if we come from stock alert page
            if (!this.componentData.objectId) {
              this.criteriaName = event.name;
              this.searchObj = criteria || {};
            } else {
              this.componentData.objectId = undefined;
            }
            this.search();
          };
          ComponentCockpitOperationSearchComponent.prototype.saveSearchCriteriaAsked = function() {
            var criteriaToSave = this.searchObj;
            this.criteriaToSave = criteriaToSave;
          };
          ComponentCockpitOperationSearchComponent.prototype.resetSearchCriteria = function() {
            this.criteriaName = undefined;
            this.searchObj = {
              bsdeProjectDTOCriteria: {
                fromSap: false
              },
              startDateCriteria:
                _shared_constants_search_criteria_constants__WEBPACK_IMPORTED_MODULE_3__['SearchCriteriaConstants']
                  .DATE_AFTER_KEY,
              endDateCriteria:
                _shared_constants_search_criteria_constants__WEBPACK_IMPORTED_MODULE_3__['SearchCriteriaConstants']
                  .DATE_AFTER_KEY,
              statusDateCriteria:
                _shared_constants_search_criteria_constants__WEBPACK_IMPORTED_MODULE_3__['SearchCriteriaConstants']
                  .DATE_AFTER_KEY
            };
            this.searchObj.attributes = {};
            this.attributeNameVal = undefined;
            this.attributeValue = undefined;
          };
          ComponentCockpitOperationSearchComponent.prototype.deleteSelectedCockpits = function() {
            var _this = this;
            var confirmMessageKey =
              this.selectedRows.length > 1 ? 'confirmDeleteSelectedCockpits' : 'confirmDeleteSelectedCockpit';
            this.confirmationService.confirmDelete({
              messageKey: this.getTranslateKey(confirmMessageKey),
              accept: function() {
                var bsdeProjectDTOIds = [];
                _this.selectedRows.forEach(function(cockpit) {
                  var projectId = {
                    projectId: cockpit.bsdeProjectDTO.projectId
                  };
                  bsdeProjectDTOIds.push(projectId);
                });
                _this.componentCockpitOperationSearchService.removeComponentCockpit(bsdeProjectDTOIds).subscribe(
                  function() {
                    _this.selectedRows = [];
                    _this.search();
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteCockpit'));
                  },
                  function() {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnDeleteCockpit'));
                  }
                );
              }
            });
          };
          /*************************************************************************
           * Open Component Cockpit Operation Form Create/Edit
           *************************************************************************/
          ComponentCockpitOperationSearchComponent.prototype.openNewComponentCockpit = function() {
            this.openComponent(
              undefined,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Create
            );
          };
          ComponentCockpitOperationSearchComponent.prototype.openComponentCockpit = function() {
            var _this = this;
            if (!!this.selectedRows) {
              this.selectedRows.forEach(function(row) {
                _this.openComponent(
                  row.bsdeProjectDTO,
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Read
                );
              });
            }
          };
          ComponentCockpitOperationSearchComponent.prototype.openComponent = function(bsdeProjectDTO, openMode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
                  .MAI_COMPONENT_COCKPIT_OPERATION_FORM,
              openMode:
                openMode ===
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Create
                  ? openMode
                  : _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Read
            };
            if (!!bsdeProjectDTO) {
              // const projectNumber: number = bsdeProjectDTO.projectNumber as number;exportTable
              data.objectId = this.serializationService.serialize(bsdeProjectDTO.projectNumber);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          /*************************************************************************
           * OPEN INSPECTION UC
           *************************************************************************/
          ComponentCockpitOperationSearchComponent.prototype.openInspectionUC = function() {
            this.openComponentCockpitInspection(
              this.selectedRows,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Create
            );
          };
          ComponentCockpitOperationSearchComponent.prototype.openComponentCockpitInspection = function(
            objectId,
            openMode
          ) {
            var _this = this;
            objectId.forEach(function(row) {
              var data = {
                id: _this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
                    .MAI_COCKPIT_INSPECTION_FORM,
                openMode: openMode
              };
              if (!!objectId && !!row.bsdeProjectDTO) {
                var projectNumber = row.bsdeProjectDTO.projectNumber;
                data.objectId = _this.serializationService.serialize(projectNumber);
              }
              var labelKey = 'transaction.' + data.componentId;
              _this.tabService.open(_this.tabService.create(data, labelKey, true));
            });
          };
          /*************************************************************************
           * OPEN WORKSCOPE UC
           *************************************************************************/
          ComponentCockpitOperationSearchComponent.prototype.openWorkscopeUC = function() {
            this.openComponentCockpitWorkscope(
              this.selectedRows,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Read
            );
          };
          ComponentCockpitOperationSearchComponent.prototype.openComponentCockpitWorkscope = function(
            objectId,
            openMode
          ) {
            var _this = this;
            objectId.forEach(function(row) {
              var data = {
                id: _this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
                    .MAI_COCKPIT_WORKSCOPE_FORM,
                openMode: openMode
              };
              if (!!objectId && !!row.bsdeProjectDTO) {
                var projectNumber = row.bsdeProjectDTO.projectNumber;
                data.objectId = _this.serializationService.serialize(projectNumber);
              }
              var labelKey = 'transaction.' + data.componentId;
              _this.tabService.open(_this.tabService.create(data, labelKey, true));
            });
          };
          ComponentCockpitOperationSearchComponent.prototype.openComponentCockpitUC = function(rowData) {
            // TODO until screen is developed
          };
          var ComponentCockpitOperationSearchComponent_1;
          ComponentCockpitOperationSearchComponent.COCKPIT_TABLE_EXPORT_NAME = 'component-cockpit-list';
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'])('resultsContainerAnchor'),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'])
            ],
            ComponentCockpitOperationSearchComponent.prototype,
            'resultsContainerAnchor',
            void 0
          );
          ComponentCockpitOperationSearchComponent = ComponentCockpitOperationSearchComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-component-cockpit-operation-search',
                template: __webpack_require__(
                  /*! ./component-cockpit-operation-search.component.html */ './src/app/main/maintenance/component-cockpit-operation/search/component-cockpit-operation-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./component-cockpit-operation-search.component.scss */ './src/app/main/maintenance/component-cockpit-operation/search/component-cockpit-operation-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_11__['SerializationService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__['ConfirmationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__['TabService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_6__['DateService'],
                _shared_services_export_service__WEBPACK_IMPORTED_MODULE_7__['ExportService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_12__['SessionService'],
                _component_cockpit_operation_search_service__WEBPACK_IMPORTED_MODULE_15__[
                  'ComponentCockpitOperationSearchService'
                ]
              ])
            ],
            ComponentCockpitOperationSearchComponent
          );
          return ComponentCockpitOperationSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_14__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/component-cockpit-operation/search/component-cockpit-operation-search.service.ts':
      /*!*******************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/component-cockpit-operation/search/component-cockpit-operation-search.service.ts ***!
  \*******************************************************************************************************************/
      /*! exports provided: ComponentCockpitOperationSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ComponentCockpitOperationSearchService',
          function() {
            return ComponentCockpitOperationSearchService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_api_project_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/project-management.api */ './src/app/shared/api/project-management.api.ts'
        );
        /* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/api/user-profile-management.api */ './src/app/shared/api/user-profile-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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

        var ComponentCockpitOperationSearchService = /** @class */ (function(_super) {
          __extends(ComponentCockpitOperationSearchService, _super);
          function ComponentCockpitOperationSearchService(
            http,
            appConfigService,
            productStructureManagementApi,
            fleetManagementApi,
            projectManagementApi,
            userProfileManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.projectManagementApi = projectManagementApi;
            _this.userProfileManagementApi = userProfileManagementApi;
            return _this;
          }
          // Dropdown API's
          ComponentCockpitOperationSearchService.prototype.findMroBireSite = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findMroBireSite);
          };
          ComponentCockpitOperationSearchService.prototype.findAllCustomers = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.findMroBireSite);
          };
          ComponentCockpitOperationSearchService.prototype.findBsdeAttributes = function() {
            return _super.prototype.post.call(this, this.projectManagementApi.findBsdeAttributes);
          };
          ComponentCockpitOperationSearchService.prototype.fillStatusList = function() {
            return _super.prototype.post.call(this, this.userProfileManagementApi.fillStatusDropDown);
          };
          ComponentCockpitOperationSearchService.prototype.getAllUserList = function() {
            return _super.prototype.post.call(this, this.userProfileManagementApi.getAllUsersDropdown);
          };
          ComponentCockpitOperationSearchService.prototype.initDate = function() {
            return _super.prototype.post.call(this, this.userProfileManagementApi.initDate);
          };
          // Search API
          ComponentCockpitOperationSearchService.prototype.findBsdeProjectsByProjectCriteria = function(obj) {
            return _super.prototype.post.call(this, this.projectManagementApi.findBsdeProjectsByProjectCriteria, obj);
          };
          // Remove API
          ComponentCockpitOperationSearchService.prototype.removeComponentCockpit = function(bsdeProjectDTOIds) {
            return _super.prototype.post.call(
              this,
              this.projectManagementApi.removeComponentCockpit,
              bsdeProjectDTOIds
            );
          };
          ComponentCockpitOperationSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__['AppConfigService'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__['FleetManagementApi'],
                _shared_api_project_management_api__WEBPACK_IMPORTED_MODULE_4__['ProjectManagementApi'],
                _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_5__['UserProfileManagementApi']
              ])
            ],
            ComponentCockpitOperationSearchService
          );
          return ComponentCockpitOperationSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/shared/api/workscope-component.api.ts':
      /*!*******************************************************!*\
  !*** ./src/app/shared/api/workscope-component.api.ts ***!
  \*******************************************************/
      /*! exports provided: WorkscopeComponentApi */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'WorkscopeComponentApi', function() {
          return WorkscopeComponentApi;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _abstract_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./abstract.api */ './src/app/shared/api/abstract.api.ts'
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

        var WorkscopeComponentApi = /** @class */ (function(_super) {
          __extends(WorkscopeComponentApi, _super);
          function WorkscopeComponentApi() {
            var _this = _super.call(this, WorkscopeComponentApi_1.baseUrl) || this;
            _this.getWorkscope = _super.prototype.appendToBaseUrl.call(_this, '/get_workscope');
            _this.getLoadWorkscope = _super.prototype.appendToBaseUrl.call(_this, '/get_load_workscope');
            _this.getWorkscopeTargetNumberAndVariantName = _super.prototype.appendToBaseUrl.call(
              _this,
              '/get_workscope_target_number_and_variant_name'
            );
            _this.loadWorkscopeTemplate = _super.prototype.appendToBaseUrl.call(_this, '/load_workscope_template');
            _this.saveWorkscope = _super.prototype.appendToBaseUrl.call(_this, '/save_workscope');
            _this.saveCauseRemoval = _super.prototype.appendToBaseUrl.call(_this, '/save_cause_removal');
            return _this;
          }
          WorkscopeComponentApi_1 = WorkscopeComponentApi;
          var WorkscopeComponentApi_1;
          WorkscopeComponentApi.baseUrl = '/workscope_component';
          WorkscopeComponentApi = WorkscopeComponentApi_1 = __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])(), __metadata('design:paramtypes', [])],
            WorkscopeComponentApi
          );
          return WorkscopeComponentApi;
        })(_abstract_api__WEBPACK_IMPORTED_MODULE_1__['AbstractApi']);

        /***/
      },

    /***/ './src/app/shared/constants/search-criteria.constants.ts':
      /*!***************************************************************!*\
  !*** ./src/app/shared/constants/search-criteria.constants.ts ***!
  \***************************************************************/
      /*! exports provided: SearchCriteriaConstants */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SearchCriteriaConstants',
          function() {
            return SearchCriteriaConstants;
          }
        );
        var SearchCriteriaConstants = /** @class */ (function() {
          function SearchCriteriaConstants() {}
          SearchCriteriaConstants.SB_AD = '001';
          SearchCriteriaConstants.DATE_AFTER_KEY = 'AFTER';
          SearchCriteriaConstants.DATE_BEFORE_KEY = 'BEFORE';
          SearchCriteriaConstants.DATE_AT_KEY = 'AT';
          return SearchCriteriaConstants;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=default~maintenance-component-cockpit-operation-component-cockpit-operation-module~maintenance-maint~95344441.js.map
