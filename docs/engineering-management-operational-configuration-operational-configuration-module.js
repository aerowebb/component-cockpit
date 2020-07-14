(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['engineering-management-operational-configuration-operational-configuration-module'],
  {
    /***/ './src/app/main/engineering-management/operational-configuration/form/operational-configuration-form.component.html':
      /*!**************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/operational-configuration/form/operational-configuration-form.component.html ***!
  \**************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-subtitle">\r\n        <div *ngIf="!isCreateOpenMode && componentData && componentData.objectId" class="page-subtitle">\r\n          - {{ subTitle }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="object-status" *ngIf="selectedFunctionalLocationComponent.statusState" (click)="showStatus()">\r\n      {{ selectedFunctionalLocationComponent.statusState | formatSelectOption: flStatusList }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button *ngIf="isReadOpenMode && hasUpdateAccessRight" type="button" mat-raised-button (click)="edit()">\r\n      {{ "global.edit" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode && !isCreateOpenMode"\r\n      type="button"\r\n      color="warn"\r\n      mat-raised-button\r\n      (click)="cancel()"\r\n    >\r\n      {{ "global.cancel" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      class="btn-with-spinner"\r\n      color="primary"\r\n      type="button"\r\n      mat-raised-button\r\n      (click)="save()"\r\n    >\r\n      <span class="lds-hourglass" *ngIf="showSaveSpinner"></span>\r\n      {{ "global.save" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      id="actions"\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions="matMenu">\r\n      <button *ngIf="isReadOpenMode && !isCreateOpenMode" type="button" mat-menu-item (click)="refresh()">\r\n        {{ "global.refresh" | translate }}\r\n      </button>\r\n\r\n      <button id="updates" mat-menu-item (click)="openStatusUpdatesPopup()">\r\n        {{ "global.updates" | translate }}\r\n      </button>\r\n\r\n      <button id="favorites" mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <mat-tab-group animationDuration="0ms" dynamicHeight>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ "home" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <div class="grid-cell--equally no-padding">\r\n              <div class="grid-cell--12">\r\n                <div class="grid-cell grid-cell--container">\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container">\r\n                      <h3 class="grid-cell-title">{{ "page.mainData" | translate }}</h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="grid-cell-content">\r\n                    <div class="column">\r\n                      <div class="row">\r\n                        <div class="form-group" [ngClass]="{ required: isCreateOpenMode }">\r\n                          <label class="form-label">{{ componentData.componentId + ".flCode" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input\r\n                              type="text"\r\n                              class="aw-input"\r\n                              [(ngModel)]="selectedFunctionalLocationComponent.flCode"\r\n                              [disabled]="!isCreateOpenMode"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".familyVariant" | translate\r\n                          }}</label>\r\n                          <div class="form-control">\r\n                            <p-dropdown\r\n                              class="aw-dropdown fixed-width"\r\n                              [options]="familyVariants"\r\n                              [(ngModel)]="familyVariantCode"\r\n                              [showClear]="true"\r\n                              [disabled]="!isCreateOpenMode"\r\n                              placeholder="&nbsp;"\r\n                              appendTo="body"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="form-group" [ngClass]="{ required: !isReadOpenMode }">\r\n                          <label class="form-label">{{\r\n                            componentData.componentId + ".flDescriptionMain" | translate\r\n                          }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <textarea\r\n                              class="aw-textarea"\r\n                              [rows]="3"\r\n                              pInputTextarea\r\n                              [disabled]="isReadOpenMode"\r\n                              [(ngModel)]="selectedFunctionalLocationComponent.flDescription"\r\n                              maxlength="300"\r\n                            ></textarea>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div *ngIf="!isCreateOpenMode" class="grid-cell--12">\r\n                <div class="grid-cell grid-cell--container">\r\n                  <div class="grid-cell-header">\r\n                    <div class="grid-cell-title-container loading-indicator">\r\n                      <h3 class="grid-cell-title">\r\n                        {{ componentData.componentId + ".illustration" | translate }}\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf="!isCreateOpenMode" class="grid-cell--6">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container loading-indicator">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".structure" | translate }} ({{\r\n                        bireStructureDisplayed ? bireStructureDisplayed.length : 0\r\n                      }})\r\n                      <div *ngIf="bireStructurePanelLoading" class="lds-hourglass"></div>\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <p-treeTable\r\n                    #ptreetableStructure\r\n                    class="aw-tree-table2"\r\n                    [columns]="structureTableCols"\r\n                    [value]="bireStructureDisplayed"\r\n                    [(selection)]="selectedStructure"\r\n                    selectionMode="checkBox"\r\n                    [scrollable]="true"\r\n                    (onNodeSelect)="onRowSelected($event.node)"\r\n                    (onNodeUnselect)="onRowUnSelected($event.node)"\r\n                    [resizableColumns]="true"\r\n                  >\r\n                    <ng-template pTemplate="emptymessage">\r\n                      <span *ngIf="!isLoadingStructureTable"> &nbsp;</span>\r\n\r\n                      <div *ngIf="isLoadingStructureTable" class="aw-table-loading-indicator">\r\n                        <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                        <div class="lds-hourglass"></div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="caption">\r\n                      <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedStructure.length > 0 }">\r\n                        <div class="aw-table-global-filter">\r\n                          <label class="aw-table-global-filter-label">\r\n                            <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptreetableStructureGlobalFilter\r\n                            class="aw-table-global-filter-input"\r\n                            type="text"\r\n                            placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                            (input)="ptreetableStructure.filterGlobal($event.target.value, \'contains\')"\r\n                          />\r\n                        </div>\r\n\r\n                        <div class="aw-table-actions">\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedStructure.length > 0"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            color="warn"\r\n                            (click)="detachSelectedStructure()"\r\n                          >\r\n                            {{ "global.detach" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedStructure.length === 1 && !!selectedStructure[0].parent"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="editStructure()"\r\n                          >\r\n                            {{ "global.edit" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            *ngIf="!isReadOpenMode && selectedStructure.length === 1"\r\n                            type="button"\r\n                            mat-raised-button\r\n                            (click)="openStructure()"\r\n                          >\r\n                            {{ "global.open" | translate }}\r\n                          </button>\r\n\r\n                          <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="createStructure()">\r\n                            {{ "global.add" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="colgroup" let-columns>\r\n                      <colgroup>\r\n                        <col class="aw-table-checkbox-wrapper" />\r\n                        <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="header" let-columns>\r\n                      <tr>\r\n                        <th class="aw-table-checkbox-wrapper">\r\n                          <p-treeTableHeaderCheckbox class="aw-table-checkbox"></p-treeTableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th ttResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                          {{ componentData.componentId + "." + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">\r\n                      <tr>\r\n                        <td class="aw-table-checkbox-wrapper">\r\n                          <p-treeTableCheckbox class="aw-table-checkbox" [value]="rowNode"></p-treeTableCheckbox>\r\n                        </td>\r\n\r\n                        <td *ngFor="let col of columns; let i = index" [ngSwitch]="col.field">\r\n                          <p-treeTableToggler [rowNode]="rowNode" *ngIf="i == 0"></p-treeTableToggler>\r\n\r\n                          <span *ngSwitchCase="\'flCode\'" pTooltip="{{ rowData[col.field] }}" tooltipPosition="top">\r\n                            {{ rowData[col.field] }}\r\n                          </span>\r\n                          <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-treeTable>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab *ngIf="!isCreateOpenMode">\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + ".assets" | translate }}\r\n          </ng-template>\r\n          <div class="grid-row">\r\n            <div class="grid-cell--12">\r\n              <div class="grid-cell grid-cell--container">\r\n                <div class="grid-cell-header">\r\n                  <div class="grid-cell-title-container loading-indicator">\r\n                    <h3 class="grid-cell-title">\r\n                      {{ componentData.componentId + ".assets" | translate }} ({{\r\n                        assetTableDataSource ? assetTableDataSource.dataCount : 0\r\n                      }})\r\n                    </h3>\r\n                    <div *ngIf="assetPanelLoading" class="lds-hourglass"></div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell-content">\r\n                  <a-table [dataSource]="assetTableDataSource"> </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-dialog-status\r\n    *ngIf="displayStatusPopup"\r\n    [item]="currentAsset"\r\n    [itemId]="currentAssetId"\r\n    [(display)]="displayStatusPopup"\r\n  ></aw-dialog-status>\r\n\r\n  <aw-dialog-status\r\n    *ngIf="showStatusUpdatesPopup"\r\n    [isStatusEditable]="false"\r\n    [item]="statusDTO"\r\n    [itemId]="statusTitle"\r\n    [(display)]="showStatusUpdatesPopup"\r\n  ></aw-dialog-status>\r\n\r\n  <aw-dialog-search-functional-location\r\n    [title]="getComponentName() + \'.popupFunctionalLocationTitle\' | translate"\r\n    [familyVariant]="familyVariantCode ? [familyVariantCode] : undefined"\r\n    [authorizedFunctionsId]="propertyValueId"\r\n    [includeUndefinedFunction]="false"\r\n    [(display)]="showFlCodeTableDialog"\r\n    (onSelected)="addOrUpdateStructure($event)"\r\n  ></aw-dialog-search-functional-location>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/operational-configuration/form/operational-configuration-form.component.scss':
      /*!**************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/operational-configuration/form/operational-configuration-form.component.scss ***!
  \**************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .marginRight {\n  margin-right: 8px; }\n\n:host .delay-category {\n  max-width: 8rem; }\n\n:host .documentation-actions {\n  justify-content: flex-end; }\n\n:host .documentation-actions .aw-btn {\n    margin-left: 8px; }\n\n:host .documentation-actions .aw-btn:first-of-type {\n      margin-left: 0; }\n\n:host .no-padding {\n  padding: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9lbmdpbmVlcmluZy1tYW5hZ2VtZW50L29wZXJhdGlvbmFsLWNvbmZpZ3VyYXRpb24vZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcZW5naW5lZXJpbmctbWFuYWdlbWVudFxcb3BlcmF0aW9uYWwtY29uZmlndXJhdGlvblxcZm9ybVxcb3BlcmF0aW9uYWwtY29uZmlndXJhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2VuZ2luZWVyaW5nLW1hbmFnZW1lbnQvb3BlcmF0aW9uYWwtY29uZmlndXJhdGlvbi9mb3JtL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxpQkFBaUIsRUFBQTs7QUFGckI7RUFLSSxlQUFlLEVBQUE7O0FBTG5CO0VBU0kseUJBQXlCLEVBQUE7O0FBVDdCO0lBWU0sZ0JDOEJZLEVBQUE7O0FEMUNsQjtNQWVRLGNBQWMsRUFBQTs7QUFmdEI7RUFvQkkscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2VuZ2luZWVyaW5nLW1hbmFnZW1lbnQvb3BlcmF0aW9uYWwtY29uZmlndXJhdGlvbi9mb3JtL29wZXJhdGlvbmFsLWNvbmZpZ3VyYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuXHJcbjpob3N0IHtcclxuICAubWFyZ2luUmlnaHQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG4gIC5kZWxheS1jYXRlZ29yeSB7XHJcbiAgICBtYXgtd2lkdGg6IDhyZW07XHJcbiAgfVxyXG5cclxuICAuZG9jdW1lbnRhdGlvbi1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgLmF3LWJ0biB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubm8tcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/engineering-management/operational-configuration/form/operational-configuration-form.component.ts':
      /*!************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/operational-configuration/form/operational-configuration-form.component.ts ***!
  \************************************************************************************************************************/
      /*! exports provided: OperationalConfigurationFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'OperationalConfigurationFormComponent',
          function() {
            return OperationalConfigurationFormComponent;
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
        /* harmony import */ var _modules_purchase_contract_utils_label_value_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../modules/purchase-contract/utils/label-value-helper */ './src/app/modules/purchase-contract/utils/label-value-helper.ts'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_pipes_format_select_option_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/pipes/format-select-option.pipe */ './src/app/shared/pipes/format-select-option.pipe.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/services/input-validation.service */ './src/app/shared/services/input-validation.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _engineering_management_functional_location_form_functional_location_form_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../engineering-management/functional-location-form/functional-location-form.service */ './src/app/main/engineering-management/functional-location-form/functional-location-form.service.ts'
        );
        /* harmony import */ var _engineering_management_functional_location_search_functional_location_search_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../../engineering-management/functional-location-search/functional-location-search.service */ './src/app/main/engineering-management/functional-location-search/functional-location-search.service.ts'
        );
        /* harmony import */ var _object_status_object_status_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../object-status/object-status.component */ './src/app/main/object-status/object-status.component.ts'
        );
        /* harmony import */ var _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../overlay/overlay.service */ './src/app/main/overlay/overlay.service.ts'
        );
        /* harmony import */ var _operational_configuration_form_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./operational-configuration-form.service */ './src/app/main/engineering-management/operational-configuration/form/operational-configuration-form.service.ts'
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

        var OperationalConfigurationFormComponent = /** @class */ (function(_super) {
          __extends(OperationalConfigurationFormComponent, _super);
          function OperationalConfigurationFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            inputValidationService,
            sessionService,
            translateService,
            confirmationService,
            operationalConfigurationFormService,
            functionalLocationFormService,
            functionalLocationSearchService,
            propertiesService,
            overlayService,
            formatSelectOption
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
            _this.inputValidationService = inputValidationService;
            _this.sessionService = sessionService;
            _this.translateService = translateService;
            _this.confirmationService = confirmationService;
            _this.operationalConfigurationFormService = operationalConfigurationFormService;
            _this.functionalLocationFormService = functionalLocationFormService;
            _this.functionalLocationSearchService = functionalLocationSearchService;
            _this.propertiesService = propertiesService;
            _this.overlayService = overlayService;
            _this.formatSelectOption = formatSelectOption;
            _this.propertyValueId = 1087;
            _this.isUpdate = false;
            _this.showFamilyVariantPopup = false;
            _this.displayStatusPopup = false;
            _this.subTitle = '';
            _this.selectedFunctionalLocationComponent = {};
            // Tab Id's
            _this.tabGeneralId = 'general';
            _this.tabStructureId = 'structure';
            _this.tabAssetsId = 'assets';
            _this.currentTabId = _this.tabGeneralId;
            // General Tab
            _this.flFunctions = [];
            _this.loadFlFunction();
            _this.loadFlStatusList();
            _this.loadFamilyVariants();
            _this.initAssetTableDataSource();
            // Structure Tab
            _this.structureTableCols = [
              { field: 'flCode', alignment: 'left' },
              { field: 'flDescription', alignment: 'left' },
              { field: 'flFunction', alignment: 'left' }
            ];
            _this.bireStructureDisplayed = [];
            _this.bireStructureNodesStore = [];
            _this.structureTable = [];
            _this.selectedStructure = [];
            _this.structureTableAddedList = [];
            _this.showStatusUpdatesPopup = false;
            _this.statusDTO = {};
            return _this;
          }
          OperationalConfigurationFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__['ComponentConstants']
              .ENG_OPERATIONAL_CONFIGURATION_FORM;
          };
          OperationalConfigurationFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            if (this.componentData) {
              this.updateOpenMode(this.componentData.openMode);
              if (this.componentData.objectId && this.componentData.objectId.length > 0) {
                this.getFunctionalLocationComponentData();
                this.onInit();
              } else {
                this.selectedFunctionalLocationComponent = {
                  flFunction:
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                      .FAMILY_FUNCTION_AIRCRAFT_KEY,
                  statusState:
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                      .FLOC_STATUS_DRAFT_KEY
                };
                this.updateCurrentFlStatusState();
              }
            }
          };
          OperationalConfigurationFormComponent.prototype.onInit = function() {
            this.isUpdate = true;
            var savedFamilyVariantCode = this.familyVariantCode;
            this.findBidoFlVariantsByFlCode();
            this.findAssetsByFlCode();
            this.loadTreeTableStructure(savedFamilyVariantCode);
            this.setSubTitle();
            this.selectedStructure = [];
            this.assetTableDataSource.dataSelection = [];
          };
          OperationalConfigurationFormComponent.prototype.initAssetTableDataSource = function() {
            this.assetTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__[
              'TableDataSource'
            ]({
              allowMultiSelect: false,
              enableSelection: false,
              columns: [
                {
                  field: 'equipmentCode',
                  translateKey: this.getTranslateKey('equipmentCode')
                },
                {
                  field: 'pnCode',
                  translateKey: this.getTranslateKey('pnCode')
                },
                {
                  field: 'sn',
                  translateKey: this.getTranslateKey('sn')
                }
              ],
              data: []
            });
          };
          OperationalConfigurationFormComponent.prototype.refresh = function() {
            this.onInit();
          };
          OperationalConfigurationFormComponent.prototype.cancel = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read
            );
            this.onInit();
          };
          OperationalConfigurationFormComponent.prototype.edit = function() {
            this.updateOpenMode(
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Write
            );
          };
          OperationalConfigurationFormComponent.prototype.save = function() {
            var _this = this;
            if (
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                this.selectedFunctionalLocationComponent.flCode
              ) &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                this.selectedFunctionalLocationComponent.flDescription
              ) &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                this.familyVariantCode
              ) &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].isNullOrEmpty(
                this.selectedFunctionalLocationComponent.statusState
              )
            ) {
              this.selectedFunctionalLocationComponent.flIsOpeConf = true;
              // Handling family variant
              var flVariantInputAddedList = [];
              var bidoFlVariantDTORemovedList = [];
              if (this.initialFamilyVariantCode !== this.familyVariantCode) {
                var flVariantInput = {
                  bidoFlVariantDTO: {
                    familyVariantCode: this.familyVariantCode
                  }
                };
                flVariantInputAddedList.push(flVariantInput);
                if (this.initialFamilyVariantCode && this.selectedFunctionalLocationComponent.flCode) {
                  var deleteVariant = {
                    flCode: this.selectedFunctionalLocationComponent.flCode,
                    familyVariantCode: this.initialFamilyVariantCode
                  };
                  bidoFlVariantDTORemovedList.push(deleteVariant);
                }
              }
              var saveFunctionalLocationInput = {
                isUpdate: this.isUpdate,
                bidoFlDTO: this.selectedFunctionalLocationComponent,
                flVariantInputAddedList: flVariantInputAddedList,
                bidoFlVariantDTORemovedList: bidoFlVariantDTORemovedList,
                flModelAddedList: [],
                flModelRemovedList: []
              };
              this.showSaveSpinner = true;
              this.functionalLocationFormService.saveFlData(saveFunctionalLocationInput).subscribe(
                function(result) {
                  if (!_this.isCreateOpenMode) {
                    _this.operationalConfigurationFormService
                      .updateBidoOpeConfFls(_this.bidoOpeConfFlStructure)
                      .subscribe(
                        function() {
                          _this.messageService.showSuccessMessage('global.successOnSave');
                          _this.selectedFunctionalLocationComponent.flCode = result.flCode;
                          _this.onInit();
                          if (!!_this.componentData && !_this.componentData.objectId) {
                            _this.componentData.objectId = result.flCode;
                          }
                        },
                        function(error) {
                          _this.messageService.showErrorMessage('global.errorOnSave');
                          _this.showSaveSpinner = false;
                        }
                      );
                  } else {
                    _this.messageService.showSuccessMessage('global.successOnSave');
                    _this.selectedFunctionalLocationComponent.flCode = result.flCode;
                    _this.onInit();
                    if (!!_this.componentData && !_this.componentData.objectId) {
                      _this.componentData.objectId = result.flCode;
                    }
                  }
                },
                function(err) {
                  var errorCode = 500;
                  if (err.error.errorCode === errorCode) {
                    _this.messageService.showErrorMessage(_this.getComponentName() + '.pkBidoFl');
                  } else {
                    _this.messageService.showErrorMessage('global.errorOnSave');
                  }
                  _this.showSaveSpinner = false;
                }
              );
            } else {
              this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
            }
          };
          // To fill the functional location data in the popup
          OperationalConfigurationFormComponent.prototype.getFunctionalLocationComponentData = function() {
            if (this.componentData) {
              if (this.componentData.objectId && this.componentData.objectId.length > 0) {
                this.selectedFunctionalLocationComponent = this.serializationService.deserialize(
                  this.componentData.objectId
                );
              }
            }
          };
          OperationalConfigurationFormComponent.prototype.setSubTitle = function() {
            this.subTitle = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_21__['StringUtils'].orEmpty(
              this.selectedFunctionalLocationComponent.flDescription
            );
            this.displayComponentContext(this.subTitle, false);
          };
          OperationalConfigurationFormComponent.prototype.onFlStatusChanged = function(event) {
            var _this = this;
            if (
              event.value ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .FLOC_STATUS_CANCEL_KEY ||
              event.value ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                  .FLOC_STATUS_VALIDATED_KEY
            ) {
              this.confirmationService.confirm({
                messageKey: this.getTranslateKey('statusChangeConfirmationMsg.' + event.value),
                accept: function() {
                  _this.updateCurrentFlStatusState();
                },
                reject: function() {
                  _this.selectedFunctionalLocationComponent.statusState = _this.currentFlStatusState;
                }
              });
            }
          };
          OperationalConfigurationFormComponent.prototype.updateCurrentFlStatusState = function() {
            this.currentFlStatusState = this.selectedFunctionalLocationComponent.statusState;
          };
          // Asset table binding by flCode
          OperationalConfigurationFormComponent.prototype.findAssetsByFlCode = function() {
            var _this = this;
            this.assetTableDataSource.setData([]);
            if (!!this.selectedFunctionalLocationComponent.flCode) {
              var bidoFlDTOId = {
                flCode: this.selectedFunctionalLocationComponent.flCode
              };
              this.assetPanelLoading = true;
              this.functionalLocationFormService
                .findAssetsByFlCode(bidoFlDTOId)
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                    _this.assetPanelLoading = false;
                  })
                )
                .subscribe(
                  function(results) {
                    _this.assetTableDataSource.setData(results);
                  },
                  function() {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFindAssetsByFlCode'));
                  }
                );
            } else {
              _super.prototype.throwUnboundLocalError.call(
                this,
                'findAssetByFlCode',
                'this.selectedFunctionalLocationComponent.flCode'
              );
            }
            this.assetTableDataSource.setData(this.assetTableDataSource.dataSrc);
            this.assetTableDataSource.update();
          };
          OperationalConfigurationFormComponent.prototype.displayStatusForAsset = function() {
            if (!!this.assetTableDataSource.dataSelection && this.assetTableDataSource.dataSelectionCount === 1) {
              this.currentAsset = __assign({}, this.assetTableDataSource.dataSelection[0]);
              this.currentAssetId = !!this.selectedFunctionalLocationComponent
                ? 'Asset ' + this.selectedFunctionalLocationComponent.flCode + ' - ' + this.currentAsset.equipmentCode
                : '';
              this.displayStatusPopup = true;
            }
          };
          OperationalConfigurationFormComponent.prototype.openStatusPopup = function(bidoFlEquipmentDTO) {
            this.currentAsset = __assign({}, bidoFlEquipmentDTO);
            this.currentAssetId = !!this.selectedFunctionalLocationComponent
              ? 'Asset ' + this.selectedFunctionalLocationComponent.flCode + ' - ' + this.currentAsset.equipmentCode
              : '';
            this.displayStatusPopup = true;
          };
          // To bind dropdown function
          OperationalConfigurationFormComponent.prototype.loadFlFunction = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__['GenericPropertyConstants']
                  .ITEM_FAMILY_CODE_MAP
              )
              .subscribe(function(results) {
                _this.flFunctions = results || [];
              });
          };
          OperationalConfigurationFormComponent.prototype.loadFlStatusList = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__['GenericPropertyConstants']
                  .FLOC_STATUS_MAP
              )
              .subscribe(function(results) {
                _this.flStatusList = results || [];
              });
          };
          OperationalConfigurationFormComponent.prototype.loadFamilyVariants = function() {
            var _this = this;
            this.familyVariants = [];
            this.functionalLocationSearchService
              .findBireVariantVersionsByFamilyFunctionAlternative()
              .subscribe(function(results) {
                _this.familyVariants = results.map(function(element) {
                  return element.labelValue;
                });
              });
          };
          // Family-variant table binding by flCode
          OperationalConfigurationFormComponent.prototype.findBidoFlVariantsByFlCode = function() {
            var _this = this;
            this.familyVariantCode = undefined;
            this.initialFamilyVariantCode = undefined;
            if (!!this.selectedFunctionalLocationComponent.flCode) {
              var bidoFlDTOId = {
                flCode: this.selectedFunctionalLocationComponent.flCode
              };
              this.functionalLocationFormService.findFamilyVariantByFlCode(bidoFlDTOId).subscribe(
                function(results) {
                  if (results) {
                    _this.familyVariantCode = results[0] ? results[0].familyVariantCode : undefined;
                    _this.initialFamilyVariantCode = _this.familyVariantCode;
                  }
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFindBidoFlVariantsByFlCode'));
                }
              );
            } else {
              _super.prototype.throwUnboundLocalError.call(
                this,
                'findBidoFlVariantsByFlCode',
                'this.selectedFunctionalLocationComponent.flCode'
              );
            }
          };
          // Tab - Structure starts
          // Structure table
          OperationalConfigurationFormComponent.prototype.onRowSelected = function(node) {
            this.deactivePartialSelection(node);
            this.bireStructureNodesStore.push(node);
            this.selectedStructure = __spread(this.bireStructureNodesStore);
            this.bireStructureDisplayed = __spread(this.bireStructureDisplayed);
            this.selectedStructure = __spread(this.selectedStructure);
          };
          OperationalConfigurationFormComponent.prototype.onRowUnSelected = function(node) {
            this.deactivePartialSelection(node);
            this.bireStructureNodesStore = this.bireStructureNodesStore.filter(function(value) {
              return value !== node;
            });
            this.selectedStructure = __spread(this.bireStructureNodesStore);
            this.bireStructureDisplayed = __spread(this.bireStructureDisplayed);
            this.selectedStructure = __spread(this.selectedStructure);
          };
          OperationalConfigurationFormComponent.prototype.deactivePartialSelection = function(node) {
            // not to remove the null check
            if (node.parent !== null && node.parent !== undefined) {
              node.parent.partialSelected = false;
              this.deactivePartialSelection(node.parent);
            }
          };
          OperationalConfigurationFormComponent.prototype.loadTreeTableStructure = function(familyVariantCode) {
            var _this = this;
            if (!!this.selectedFunctionalLocationComponent.flCode) {
              this.bireStructurePanelLoading = true;
              var bidoFlDTOId = {
                flCode: this.selectedFunctionalLocationComponent.flCode
              };
              if (this.isCreateOpenMode) {
                this.findAndFetchStructureByFlCode(familyVariantCode);
              } else {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])({
                  tree: this.operationalConfigurationFormService.findOpeConfFlTreeNode(bidoFlDTOId),
                  structure: this.operationalConfigurationFormService.findBidoOpeConfByOpeConf(bidoFlDTOId)
                }).subscribe(function(results) {
                  if (!!results.tree) {
                    _this.displayFlStructureTree(results.tree);
                  }
                  _this.bidoOpeConfFlStructure = results.structure;
                });
              }
            } else {
              _super.prototype.throwUnboundLocalError.call(
                this,
                'loadTreeTableStructure',
                'this.selectedFunctionalLocationComponent.flCode'
              );
            }
          };
          OperationalConfigurationFormComponent.prototype.findAndFetchStructureByFlCode = function(familyVariantCode) {
            var _this = this;
            var bidoFlDTOId = {
              flCode: this.selectedFunctionalLocationComponent.flCode
            };
            this.operationalConfigurationFormService.findOpeConfFlTreeNode(bidoFlDTOId).subscribe(
              function(results) {
                if (!!results.data) {
                  _this.bireStructureDisplayed = [_this.fetchTreeTable(results)];
                  _this.findFlsTreeNodeByFamilyVariant(familyVariantCode);
                }
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetStructure'));
                _this.showSaveSpinner = false;
              }
            );
          };
          OperationalConfigurationFormComponent.prototype.displayFlStructureTree = function(results) {
            var treeTable = [this.fetchTreeTable(results)];
            this.statusDTO = results.data;
            this.statusTitle = this.statusDTO.flCode + ' - ' + this.statusDTO.flDescription;
            this.loadFunctionalLocationScreen(treeTable[0].data);
            this.updateFunctionalLocation(treeTable);
            this.bireStructureDisplayed = treeTable;
            this.bireStructurePanelLoading = false;
            this.updateOpenModeAfterSave();
          };
          OperationalConfigurationFormComponent.prototype.fetchOpeConfFl = function(flTrees) {
            var _this = this;
            var results = [];
            var parentOpeConf = {};
            parentOpeConf.opeConfFlCode = this.bireStructureDisplayed[0].data.flCode;
            parentOpeConf.flCode = this.bireStructureDisplayed[0].data.flCode;
            results.push(parentOpeConf);
            flTrees.forEach(function(tree) {
              if (tree.data) {
                var treeNode = _this.getFlTreeFromBidoFlDTO(tree.data);
                treeNode.data.flFlCode = _this.bireStructureDisplayed[0].data.flCode;
                if (
                  (treeNode.children && treeNode.children.length > 0) ||
                  tree.data.flFunction ===
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                      .ITEM_FAMILY_CODE_HARDPOINT_KEY
                ) {
                  var opeConfFl = {};
                  opeConfFl.opeConfFlCode = treeNode.data.flFlCode;
                  opeConfFl.flCode = treeNode.data.flCode;
                  opeConfFl.superiorFlCode = treeNode.data.flFlCode;
                  results.push(opeConfFl);
                  _this.fetchOpeConfFlChild(results, treeNode.data.flCode, tree.children);
                }
              }
            });
            return this.cleanDuplicates(results);
          };
          OperationalConfigurationFormComponent.prototype.cleanDuplicates = function(results) {
            var _this = this;
            var res = [];
            results.forEach(function(bidoOpeConfFl) {
              var _bidoOpeConfFl = results.find(function(_opeConfFl) {
                return (
                  _opeConfFl.flCode === bidoOpeConfFl.flCode &&
                  _opeConfFl.superiorFlCode !== bidoOpeConfFl.superiorFlCode
                );
              });
              if (_bidoOpeConfFl) {
                if (_this.opeConfFLHasMoreParentThan(bidoOpeConfFl, _bidoOpeConfFl, results, 0)) {
                  res.push(bidoOpeConfFl);
                }
              } else {
                if (
                  !res.find(function(opeConf) {
                    return opeConf.flCode === bidoOpeConfFl.flCode;
                  })
                ) {
                  res.push(bidoOpeConfFl);
                }
              }
            });
            return res;
          };
          OperationalConfigurationFormComponent.prototype.opeConfFLHasMoreParentThan = function(
            bidoOpeConfFl,
            _bidoOpeConfFl,
            results,
            counter
          ) {
            if (
              bidoOpeConfFl &&
              _bidoOpeConfFl &&
              bidoOpeConfFl.superiorFlCode &&
              _bidoOpeConfFl.superiorFlCode &&
              counter < results.length
            ) {
              return this.opeConfFLHasMoreParentThan(
                results.find(function(opeConf) {
                  return opeConf.flCode === bidoOpeConfFl.superiorFlCode;
                }),
                results.find(function(opeConf) {
                  return opeConf.flCode === _bidoOpeConfFl.superiorFlCode;
                }),
                results,
                counter + 1
              );
            } else if (bidoOpeConfFl && _bidoOpeConfFl && bidoOpeConfFl.superiorFlCode) {
              return true;
            } else {
              return false;
            }
          };
          OperationalConfigurationFormComponent.prototype.fetchOpeConfFlChild = function(
            results,
            parentFlCode,
            children
          ) {
            var _this = this;
            if (children) {
              children.forEach(function(treeNode) {
                if (
                  treeNode.data &&
                  treeNode.data.flFunction ===
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__['AWPropertiesConstants']
                      .ITEM_FAMILY_CODE_HARDPOINT_KEY
                ) {
                  if (treeNode.data.flCode) {
                    var opeConfFl = {};
                    opeConfFl.opeConfFlCode = _this.bireStructureDisplayed[0].data.flCode;
                    opeConfFl.flCode = treeNode.data.flCode;
                    opeConfFl.superiorFlCode = parentFlCode;
                    results.push(opeConfFl);
                    _this.fetchOpeConfFlChild(results, treeNode.data.flCode, treeNode.children);
                  }
                } else {
                  _this.fetchOpeConfFlChild(results, parentFlCode, treeNode.children);
                }
              });
            }
          };
          OperationalConfigurationFormComponent.prototype.findFlsTreeNodeByFamilyVariant = function(familyVariantCode) {
            var _this = this;
            if (familyVariantCode) {
              this.operationalConfigurationFormService
                .findFlsTreeNodeByFamilyVariant(familyVariantCode)
                .subscribe(function(flTrees) {
                  _this.computeOpeConfFl(flTrees);
                });
            } else {
              this.updateOpenModeAfterSave();
            }
          };
          OperationalConfigurationFormComponent.prototype.computeOpeConfFl = function(flTrees) {
            var _this = this;
            var opeConfFl = this.fetchOpeConfFl(flTrees);
            this.bidoOpeConfFlStructure = opeConfFl;
            if (!!opeConfFl && opeConfFl.length > 0) {
              //  TODO affichage du tableau point d'emport pas encore définis fonctionnellement
              // this.structureTableCols = [
              //   { field: 'hardpoint', alignment: 'left' },
              //   { field: 'load', alignment: 'left' }
              // ];
              this.operationalConfigurationFormService.createAllBidoOpeConfFl(opeConfFl).subscribe(function() {
                if (_this.selectedFunctionalLocationComponent.flCode) {
                  var bidoFlDTOId = {
                    flCode: _this.selectedFunctionalLocationComponent.flCode
                  };
                  _this.operationalConfigurationFormService
                    .findOpeConfFlTreeNode(bidoFlDTOId)
                    .subscribe(function(opeConfTree) {
                      if (!!opeConfTree) {
                        _this.displayFlStructureTree(opeConfTree);
                      }
                    });
                }
              });
            }
          };
          OperationalConfigurationFormComponent.prototype.updateOpenModeAfterSave = function() {
            if (this.isCreateOpenMode) {
              this.updateOpenMode(
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Write
              );
            } else {
              this.updateOpenMode(
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read
              );
            }
            this.showSaveSpinner = false;
          };
          OperationalConfigurationFormComponent.prototype.fetchTreeTable = function(results) {
            if (!!results.data) {
              return {
                data: results.data,
                children: results.children ? this.getChildren(results.children) : [],
                leaf: results.children ? results.children.length === 0 : true,
                expanded: results.children ? results.children.length !== 0 : false
              };
            }
            return {};
          };
          OperationalConfigurationFormComponent.prototype.loadFunctionalLocationScreen = function(data) {
            this.selectedFunctionalLocationComponent = __assign({}, data);
            this.updateCurrentFlStatusState();
          };
          // Function to update functional location
          OperationalConfigurationFormComponent.prototype.updateFunctionalLocation = function(treeTable) {
            var _this = this;
            var table = treeTable;
            table.map(function(result) {
              if (result.data.flFunction) {
                result.data.flFunction =
                  _modules_purchase_contract_utils_label_value_helper__WEBPACK_IMPORTED_MODULE_4__[
                    'LabelValueHelper'
                  ].getLabelByValue(_this.flFunctions, result.data.flFunction) || result.data.flFunction;
              }
              if (result.children) {
                _this.updateFunctionalLocation(result.children);
              }
            });
            return table;
          };
          OperationalConfigurationFormComponent.prototype.getChildren = function(results) {
            var _this = this;
            var childTreeNode = [];
            if (results) {
              results.sort(function(a, b) {
                if (!!a.data && !!a.data.flCode && !!b.data && !!b.data.flCode) {
                  var nameA = a.data.flCode.toLowerCase();
                  var nameB = b.data.flCode.toLowerCase();
                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }
                }
                return 0;
              });
              results.forEach(function(child) {
                var childTree = {
                  data: child.data,
                  leaf: !child.children || child.children.length === 0,
                  expanded: !!child.children && child.children.length !== 0
                };
                childTree.children = child.children && child.children.length > 0 ? child.children : [];
                childTreeNode.push(childTree);
                if (childTree.children && childTree.children.length > 0) {
                  _this.getChildren(childTree.children);
                }
              });
            }
            return childTreeNode;
          };
          OperationalConfigurationFormComponent.prototype.createStructure = function() {
            this.isNewStructure = true;
            this.showFlCodeTableDialog = true;
          };
          OperationalConfigurationFormComponent.prototype.editStructure = function() {
            if (this.selectedStructure.length === 1) {
              this.isNewStructure = false;
              this.currentStructure = this.selectedStructure[0].data;
              this.showFlCodeTableDialog = true;
            }
          };
          OperationalConfigurationFormComponent.prototype.openStructure = function() {
            if (this.selectedStructure.length === 1) {
              var labelKey = 'transaction.FunctionalLocationFormComponent';
              var data = {
                id: this.tabService.generateId(),
                componentId: 'FunctionalLocationFormComponent',
                objectId: this.serializationService.serialize(this.selectedStructure[0].data),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Read
              };
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          OperationalConfigurationFormComponent.prototype.addOrUpdateStructure = function(concernedStructure) {
            if (this.isNewStructure) {
              this.addNewStructure(concernedStructure);
            } else {
              this.updateConcernedStructure(concernedStructure);
            }
          };
          OperationalConfigurationFormComponent.prototype.addNewStructure = function(concernedStructure) {
            var _this = this;
            if (this.selectedStructure[0] && this.selectedStructure[0].data.flCode) {
              if (concernedStructure.flCode) {
                this.functionalLocationFormService
                  .findStructureByFlCode(concernedStructure.flCode)
                  .subscribe(function(flTree) {
                    if (flTree.data) {
                      flTree.data.flFlCode = _this.selectedStructure[0].data.flCode;
                      _this.addTreeNodeToStructure(flTree);
                      _this.selectedStructure = [];
                      _this.bireStructureNodesStore = [];
                    }
                  });
              }
            } else {
              if (!this.selectedStructure[0] && this.bireStructureDisplayed.length > 0) {
                // If none selected, add entry to root FL Code
                this.selectedStructure[0] = this.bireStructureDisplayed[0];
                this.addNewStructure(concernedStructure);
              }
            }
          };
          OperationalConfigurationFormComponent.prototype.addTreeNodeToStructure = function(tempTree) {
            var bireStructureChild = this.bireStructureDisplayed[0].children;
            if (!!bireStructureChild) {
              var searchInStructureTableChildren = this.searchRecursively(tempTree);
              if (!searchInStructureTableChildren) {
                var selectedStructureChild = this.selectedStructure[0].children;
                this.addAllBidoOpeConfFlFromTree(tempTree, this.selectedStructure[0].data.flCode);
                if (selectedStructureChild) {
                  selectedStructureChild.push(tempTree);
                  this.bireStructureDisplayed = __spread(this.updateFunctionalLocation(this.bireStructureDisplayed));
                }
              } else {
                this.messageService.showErrorMessage(
                  // Change it to, create a master entry or something
                  this.getTranslateKey('errorAlreadyConcernedStructureExist'),
                  '(' + searchInStructureTableChildren.join(', ') + ')'
                );
              }
            }
          };
          OperationalConfigurationFormComponent.prototype.addAllBidoOpeConfFlFromTree = function(tempTree, flCode) {
            var _this = this;
            this.bidoOpeConfFlStructure.push({
              flCode: tempTree.data.flCode,
              opeConfFlCode: this.bireStructureDisplayed[0].data.flCode,
              superiorFlCode: flCode
            });
            if (tempTree.children && tempTree.children.length > 0) {
              tempTree.children.forEach(function(childTmpTree) {
                return _this.addAllBidoOpeConfFlFromTree(childTmpTree, tempTree.data.flCode);
              });
            }
          };
          OperationalConfigurationFormComponent.prototype.searchRecursively = function(tempTree, result) {
            var _this = this;
            if (result === void 0) {
              result = { isPresent: undefined };
            }
            if (
              !!this.bidoOpeConfFlStructure.find(function(value) {
                return value.flCode === tempTree.data.flCode;
              })
            ) {
              if (!result.isPresent) {
                result.isPresent = [];
              }
              result.isPresent.push(tempTree.data.flCode);
            } else if (tempTree.children && tempTree.children.length > 0) {
              tempTree.children.forEach(function(childTempTree) {
                _this.searchRecursively(childTempTree, result);
              });
            }
            return result.isPresent;
          };
          OperationalConfigurationFormComponent.prototype.getFlTreeFromBidoFlDTO = function(concernedStructure) {
            var tempTree = {};
            tempTree.data = concernedStructure;
            tempTree.children = [];
            return tempTree;
          };
          OperationalConfigurationFormComponent.prototype.updateConcernedStructure = function(concernedStructure) {
            var _this = this;
            var searchInStructureTableChildren = this.bidoOpeConfFlStructure.find(function(value) {
              return value.flCode === concernedStructure.flCode;
            });
            if (!searchInStructureTableChildren) {
              var opeConfToUpdate_1 = this.bidoOpeConfFlStructure.find(function(value) {
                return value.flCode === _this.selectedStructure[0].data.flCode;
              });
              if (opeConfToUpdate_1) {
                this.bidoOpeConfFlStructure
                  .filter(function(opeConf) {
                    return opeConf.superiorFlCode === opeConfToUpdate_1.flCode;
                  })
                  .forEach(function(opeConf) {
                    opeConf.superiorFlCode = concernedStructure.flCode;
                  });
                opeConfToUpdate_1.flCode = concernedStructure.flCode;
              }
              this.selectedStructure[0].data = concernedStructure;
              this.bireStructureDisplayed = __spread(this.updateFunctionalLocation(this.bireStructureDisplayed));
              this.selectedStructure = [];
              this.bireStructureNodesStore = [];
            } else {
              this.messageService.showErrorMessage(
                // Change it to, create a master entry or something
                this.getTranslateKey('errorAlreadyConcernedStructureExist')
              );
            }
          };
          OperationalConfigurationFormComponent.prototype.detachSelectedStructure = function() {
            var _this = this;
            this.confirmationService.confirmDelete({
              messageKey: 'global.detachConfirmationMsg',
              accept: function() {
                _this.selectedStructure.forEach(function(element) {
                  _this.deleteCascadeOpeConf(
                    _this.bidoOpeConfFlStructure.find(function(opeConf) {
                      return opeConf.flCode === element.data.flCode;
                    })
                  );
                  if (!!element.parent && !!element.parent.children) {
                    element.parent.children = __spread(
                      element.parent.children.filter(function(child) {
                        return child.data.flCode !== element.data.flCode;
                      })
                    );
                  }
                  _this.bireStructureDisplayed = __spread(_this.bireStructureDisplayed);
                });
                _this.selectedStructure = [];
                _this.bireStructureNodesStore = [];
              }
            });
          };
          OperationalConfigurationFormComponent.prototype.deleteCascadeOpeConf = function(flCode) {
            if (flCode) {
              var listOfFlCodeToDelete_1 = [flCode];
              this.fetchListOfFlCodeToDelete(listOfFlCodeToDelete_1, flCode);
              this.bidoOpeConfFlStructure = this.bidoOpeConfFlStructure.filter(function(opeConf) {
                return !listOfFlCodeToDelete_1.find(function(opeConfToDelete) {
                  return opeConf.flCode === opeConfToDelete.flCode;
                });
              });
            }
          };
          OperationalConfigurationFormComponent.prototype.fetchListOfFlCodeToDelete = function(
            listOfFlCodeToDelete,
            flCode,
            counter
          ) {
            var _this = this;
            if (counter === void 0) {
              counter = 0;
            }
            var childToDelete = this.bidoOpeConfFlStructure.filter(function(confOpe) {
              return confOpe.superiorFlCode === flCode.flCode;
            });
            if (childToDelete.length > 0 && counter < this.bidoOpeConfFlStructure.length) {
              listOfFlCodeToDelete.push.apply(listOfFlCodeToDelete, __spread(childToDelete));
              childToDelete.forEach(function(opeConf) {
                _this.fetchListOfFlCodeToDelete(listOfFlCodeToDelete, opeConf, counter + 1);
              });
            }
          };
          /* Tab structure Ends */
          OperationalConfigurationFormComponent.prototype.showStatus = function() {
            var _this = this;
            var overlayRef = this.overlayService.openWithPositionCenter({
              content: _object_status_object_status_component__WEBPACK_IMPORTED_MODULE_24__['ObjectStatusComponent'],
              data: {
                currentAuthor: this.statusDTO.statusUser,
                currentDate: this.statusDTO.statusDate,
                currentStatus: {
                  label: this.formatSelectOption.transform(
                    this.selectedFunctionalLocationComponent.statusState,
                    this.flStatusList
                  ),
                  value: this.selectedFunctionalLocationComponent.statusState
                },
                nextStatuses: this.flStatusList
              }
            });
            overlayRef.afterClosed$.subscribe({
              next: function(event) {
                if (event.data) {
                  _this.selectedFunctionalLocationComponent.statusState = event.data;
                  _this.save();
                }
              }
            });
          };
          OperationalConfigurationFormComponent.prototype.openGeneralTab = function() {
            this.currentTabId = this.tabGeneralId;
          };
          OperationalConfigurationFormComponent.prototype.openStructureTab = function() {
            this.currentTabId = this.tabStructureId;
          };
          OperationalConfigurationFormComponent.prototype.openStatusUpdatesPopup = function() {
            this.showStatusUpdatesPopup = true;
          };
          OperationalConfigurationFormComponent.prototype.openAssetsTab = function() {
            this.currentTabId = this.tabAssetsId;
          };
          OperationalConfigurationFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-operational-configuration-form',
                template: __webpack_require__(
                  /*! ./operational-configuration-form.component.html */ './src/app/main/engineering-management/operational-configuration/form/operational-configuration-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./operational-configuration-form.component.scss */ './src/app/main/engineering-management/operational-configuration/form/operational-configuration-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_12__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_14__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_15__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_17__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_19__['TabService'],
                _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_13__['InputValidationService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_18__['SessionService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_11__['ConfirmationService'],
                _operational_configuration_form_service__WEBPACK_IMPORTED_MODULE_26__[
                  'OperationalConfigurationFormService'
                ],
                _engineering_management_functional_location_form_functional_location_form_service__WEBPACK_IMPORTED_MODULE_22__[
                  'FunctionalLocationFormService'
                ],
                _engineering_management_functional_location_search_functional_location_search_service__WEBPACK_IMPORTED_MODULE_23__[
                  'FunctionalLocationSearchService'
                ],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_16__['PropertiesService'],
                _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_25__['OverlayService'],
                _shared_pipes_format_select_option_pipe__WEBPACK_IMPORTED_MODULE_10__['FormatSelectOptionPipe']
              ])
            ],
            OperationalConfigurationFormComponent
          );
          return OperationalConfigurationFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_20__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/operational-configuration/form/operational-configuration-form.service.ts':
      /*!**********************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/operational-configuration/form/operational-configuration-form.service.ts ***!
  \**********************************************************************************************************************/
      /*! exports provided: OperationalConfigurationFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'OperationalConfigurationFormService',
          function() {
            return OperationalConfigurationFormService;
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
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

        var OperationalConfigurationFormService = /** @class */ (function(_super) {
          __extends(OperationalConfigurationFormService, _super);
          function OperationalConfigurationFormService(http, appConfigService, fleetManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.fleetManagementApi = fleetManagementApi;
            return _this;
          }
          OperationalConfigurationFormService.prototype.findOpeConfFlTreeNode = function(bidoFlDTOId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findOpeConfFlTreeNode, bidoFlDTOId);
          };
          OperationalConfigurationFormService.prototype.findBidoOpeConfByOpeConf = function(bidoFlDTOId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoOpeConfByOpeConf, bidoFlDTOId);
          };
          OperationalConfigurationFormService.prototype.createAllBidoOpeConfFl = function(opeConfFl) {
            return _super.prototype.post.call(this, this.fleetManagementApi.createAllBidoOpeConfFl, opeConfFl);
          };
          OperationalConfigurationFormService.prototype.updateBidoOpeConfFls = function(opeConfFls) {
            return _super.prototype.post.call(this, this.fleetManagementApi.updateBidoOpeConfFls, opeConfFls);
          };
          OperationalConfigurationFormService.prototype.findFlsTreeNodeByFamilyVariant = function(familyVariant) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findFlsTreeNodeByFamilyVariant,
              familyVariant
            );
          };
          OperationalConfigurationFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__['FleetManagementApi']
              ])
            ],
            OperationalConfigurationFormService
          );
          return OperationalConfigurationFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/engineering-management/operational-configuration/operational-configuration.module.ts':
      /*!***********************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/operational-configuration/operational-configuration.module.ts ***!
  \***********************************************************************************************************/
      /*! exports provided: OperationalConfigurationModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'OperationalConfigurationModule',
          function() {
            return OperationalConfigurationModule;
          }
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/fesm5/common.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/calendar */ './node_modules/primeng/calendar.js'
        );
        /* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_calendar__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/primeng */ './node_modules/primeng/primeng.js'
        );
        /* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_primeng__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-customer/dialog-search-customer.module */ './src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_functional_location_dialog_search_functional_location_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-functional-location/dialog-search-functional-location.module */ './src/app/shared/components/dialog-search-functional-location/dialog-search-functional-location.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_item_dialog_search_item_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-item/dialog-search-item.module */ './src/app/shared/components/dialog-search-item/dialog-search-item.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_model_dialog_search_model_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-model/dialog-search-model.module */ './src/app/shared/components/dialog-search-model/dialog-search-model.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_status_dialog_status_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/components/dialog-status/dialog-status.module */ './src/app/shared/components/dialog-status/dialog-status.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _flight_operations_flight_search_search_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../flight-operations/flight/search/search.service */ './src/app/main/flight-operations/flight/search/search.service.ts'
        );
        /* harmony import */ var _functional_location_form_functional_location_form_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../functional-location-form/functional-location-form.service */ './src/app/main/engineering-management/functional-location-form/functional-location-form.service.ts'
        );
        /* harmony import */ var _functional_location_search_functional_location_search_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../functional-location-search/functional-location-search.service */ './src/app/main/engineering-management/functional-location-search/functional-location-search.service.ts'
        );
        /* harmony import */ var _form_operational_configuration_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./form/operational-configuration-form.component */ './src/app/main/engineering-management/operational-configuration/form/operational-configuration-form.component.ts'
        );
        /* harmony import */ var _form_operational_configuration_form_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./form/operational-configuration-form.service */ './src/app/main/engineering-management/operational-configuration/form/operational-configuration-form.service.ts'
        );
        /* harmony import */ var _search_operational_configuration_search_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./search/operational-configuration-search.component */ './src/app/main/engineering-management/operational-configuration/search/operational-configuration-search.component.ts'
        );
        /* harmony import */ var _search_operational_configuration_search_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./search/operational-configuration-search.service */ './src/app/main/engineering-management/operational-configuration/search/operational-configuration-search.service.ts'
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
        var PRIMENG_MODULES = [
          primeng_primeng__WEBPACK_IMPORTED_MODULE_4__['TreeTableModule'],
          primeng_primeng__WEBPACK_IMPORTED_MODULE_4__['FileUploadModule'],
          primeng_primeng__WEBPACK_IMPORTED_MODULE_4__['KeyFilterModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__['TooltipModule'],
          primeng_calendar__WEBPACK_IMPORTED_MODULE_2__['CalendarModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__['DropdownModule'],
          primeng_primeng__WEBPACK_IMPORTED_MODULE_4__['CheckboxModule']
        ];
        var EXTERNAL_MODULES = [];
        var INTERNAL_MODULES = [
          _shared_components_dialog_status_dialog_status_module__WEBPACK_IMPORTED_MODULE_13__['DialogStatusModule'],
          _shared_components_dialog_search_item_dialog_search_item_module__WEBPACK_IMPORTED_MODULE_11__[
            'DialogSearchItemModule'
          ],
          _shared_components_dialog_search_model_dialog_search_model_module__WEBPACK_IMPORTED_MODULE_12__[
            'DialogSearchModelModule'
          ],
          _shared_components_dialog_search_functional_location_dialog_search_functional_location_module__WEBPACK_IMPORTED_MODULE_10__[
            'DialogSearchFunctionalLocationModule'
          ],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_14__['ModalModule'],
          primeng_primeng__WEBPACK_IMPORTED_MODULE_4__['MessageModule'],
          _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_15__['TableModule']
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [];
        var DYNAMIC_COMPONENTS = [
          _search_operational_configuration_search_component__WEBPACK_IMPORTED_MODULE_22__[
            'OperationalConfigurationSearchComponent'
          ],
          _form_operational_configuration_form_component__WEBPACK_IMPORTED_MODULE_20__[
            'OperationalConfigurationFormComponent'
          ]
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _flight_operations_flight_search_search_service__WEBPACK_IMPORTED_MODULE_17__['SearchService'],
          _functional_location_form_functional_location_form_service__WEBPACK_IMPORTED_MODULE_18__[
            'FunctionalLocationFormService'
          ],
          _functional_location_search_functional_location_search_service__WEBPACK_IMPORTED_MODULE_19__[
            'FunctionalLocationSearchService'
          ],
          _form_operational_configuration_form_service__WEBPACK_IMPORTED_MODULE_21__[
            'OperationalConfigurationFormService'
          ],
          _search_operational_configuration_search_service__WEBPACK_IMPORTED_MODULE_23__[
            'OperationalConfigurationSearchService'
          ]
        ];
        var OperationalConfigurationModule = /** @class */ (function() {
          function OperationalConfigurationModule() {}
          OperationalConfigurationModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_6__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_7__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_8__['AppCommonSharedModule'],
                    _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_9__[
                      'DialogSearchCustomerModule'
                    ],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_16__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES,
                  PRIMENG_MODULES
                ),
                providers: __spread(SERVICES, [_angular_common__WEBPACK_IMPORTED_MODULE_0__['DatePipe']])
              })
            ],
            OperationalConfigurationModule
          );
          return OperationalConfigurationModule;
        })();

        /***/
      },

    /***/ './src/app/main/engineering-management/operational-configuration/search/operational-configuration-search.component.html':
      /*!******************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/operational-configuration/search/operational-configuration-search.component.html ***!
  \******************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle">\r\n        {{ "page.searchPage" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-primary-actions">\r\n    <button type="button" mat-raised-button (click)="openNewFunctionalLocation()" *ngIf="hasUpdateAccessRight">\r\n      {{ "global.create" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row search-criteria-header">\r\n                  <i\r\n                    class="fa fa-fw fa-undo aw-icon aw-icon-with-border search-criteria-action"\r\n                    aria-hidden="true"\r\n                    pTooltip="{{ \'global.reset\' | translate }}"\r\n                    tooltipPosition="top"\r\n                    (click)="resetSearchCriteria()"\r\n                  ></i>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group flex--4">\r\n                    <label class="form-label"> {{ componentData.componentId + ".flCode" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="searchObject.bidoFlDTOCriteria.flCode" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--4">\r\n                    <label class="form-label"> {{ componentData.componentId + ".familyVariant" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="familyVariants"\r\n                        [(ngModel)]="familyVariantCode"\r\n                        [showClear]="true"\r\n                        placeholder="&nbsp;"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--4">\r\n                    <label class="form-label"> {{ componentData.componentId + ".flDescription" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <input type="text" class="aw-input" [(ngModel)]="searchObject.bidoFlDTOCriteria.flDescription" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group flex--4">\r\n                    <label class="form-label"> {{ componentData.componentId + ".statusState" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="flStatusList"\r\n                        [(ngModel)]="searchObject.bidoFlDTOCriteria.statusState"\r\n                        [showClear]="true"\r\n                        placeholder="&nbsp;"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <button\r\n                      type="button"\r\n                      mat-raised-button\r\n                      color="primary"\r\n                      (click)="search()"\r\n                      appKeyPress\r\n                      [keyCode]="\'Enter\'"\r\n                      (keyPress)="search()"\r\n                    >\r\n                      {{ "global.toSearch" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div #resultsContainerAnchor class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ "global.results" | translate }} ({{\r\n                    resultsTableDataSource ? resultsTableDataSource.dataCount : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <a-table [dataSource]="resultsTableDataSource">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    *ngIf="!resultsTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="exportTable()"\r\n                  >\r\n                    {{ "global.export" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf="hasManageAccessRight && resultsTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    color="warn"\r\n                    (click)="deleteSelectedOperationalConfiguration()"\r\n                  >\r\n                    {{ "global.delete" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf="resultsTableDataSource.hasDataSelection"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="openSelectedOperationalconfiguration()"\r\n                  >\r\n                    {{ "global.open" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/engineering-management/operational-configuration/search/operational-configuration-search.component.ts':
      /*!****************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/operational-configuration/search/operational-configuration-search.component.ts ***!
  \****************************************************************************************************************************/
      /*! exports provided: OperationalConfigurationSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'OperationalConfigurationSearchComponent',
          function() {
            return OperationalConfigurationSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _modules_purchase_contract_utils_label_value_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../modules/purchase-contract/utils/label-value-helper */ './src/app/modules/purchase-contract/utils/label-value-helper.ts'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/confirmation.service */ './src/app/shared/services/confirmation.service.ts'
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
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _engineering_management_functional_location_search_functional_location_search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../engineering-management/functional-location-search/functional-location-search.service */ './src/app/main/engineering-management/functional-location-search/functional-location-search.service.ts'
        );
        /* harmony import */ var _operational_configuration_search_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./operational-configuration-search.service */ './src/app/main/engineering-management/operational-configuration/search/operational-configuration-search.service.ts'
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

        var OperationalConfigurationSearchComponent = /** @class */ (function(_super) {
          __extends(OperationalConfigurationSearchComponent, _super);
          function OperationalConfigurationSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            functionalLocationSearchService,
            operationalConfigurationSearchService,
            propertiesService,
            exportService,
            confirmationService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.functionalLocationSearchService = functionalLocationSearchService;
            _this.operationalConfigurationSearchService = operationalConfigurationSearchService;
            _this.propertiesService = propertiesService;
            _this.exportService = exportService;
            _this.confirmationService = confirmationService;
            _this.familyVariants = [];
            _this.flFunctions = [];
            _this.flStatusList = [];
            _this.searchObject = {
              bidoFlDTOCriteria: {},
              familyVariantCode: undefined
            };
            _this.isReadOnlyForm = false;
            _this.displayModelPopin = false;
            _this.loadfamilyVariant();
            _this.loadFlFunction();
            _this.loadFlStatusList();
            _this.showFunctionalLocationModelDialog = false;
            _this.resultsTableExportName = 'operationalConfiguration-search-list';
            _this.initResultsTableDataSource();
            return _this;
          }
          OperationalConfigurationSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
              .ENG_OPERATIONAL_CONFIGURATION_SEARCH;
          };
          // To bind dropdown family variant
          OperationalConfigurationSearchComponent.prototype.loadfamilyVariant = function() {
            var _this = this;
            this.functionalLocationSearchService
              .findBireVariantVersionsByFamilyFunctionAlternative()
              .subscribe(function(results) {
                var list = [];
                results.forEach(function(element) {
                  list.push(element.labelValue);
                });
                _this.familyVariants = list || [];
              });
          };
          // To bind dropdown function
          OperationalConfigurationSearchComponent.prototype.loadFlFunction = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__['GenericPropertyConstants']
                  .ITEM_FAMILY_CODE_MAP
              )
              .subscribe(function(results) {
                _this.flFunctions = results || [];
              });
          };
          OperationalConfigurationSearchComponent.prototype.loadFlStatusList = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__['GenericPropertyConstants']
                  .FLOC_STATUS_MAP
              )
              .subscribe(function(results) {
                _this.flStatusList = results || [];
              });
          };
          OperationalConfigurationSearchComponent.prototype.showDialog = function() {
            this.displayModelPopin = true;
            this.searchObject = this.searchObject;
          };
          /*
       <summary>Set selected customer code in corresponding input box</summary>
       */
          OperationalConfigurationSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
          };
          OperationalConfigurationSearchComponent.prototype.initResultsTableDataSource = function() {
            this.resultsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'flCode',
                  translateKey: this.getTranslateKey('flCode')
                },
                {
                  field: 'familyVariantLabel',
                  translateKey: this.getTranslateKey('familyVariantCode')
                },
                {
                  field: 'flDescription',
                  translateKey: this.getTranslateKey('flDescription')
                },
                {
                  field: 'statusStateLabel',
                  translateKey: this.getTranslateKey('statusState')
                }
              ],
              data: []
            });
          };
          OperationalConfigurationSearchComponent.prototype.resetSearchCriteria = function() {
            this.searchObject = {
              bidoFlDTOCriteria: {},
              familyVariantCode: undefined
            };
            this.loadfamilyVariant();
          };
          /* Search functional location */
          OperationalConfigurationSearchComponent.prototype.search = function() {
            this.loadFunctionalLocations();
          };
          // To bind the table function locations
          OperationalConfigurationSearchComponent.prototype.loadFunctionalLocations = function() {
            var _this = this;
            this.searchObject.bidoFlDTOCriteria.flIsOpeConf = true;
            var criteria = {
              bidoFlDTOCriteria: this.searchObject.bidoFlDTOCriteria,
              familyVariantCode: this.familyVariantCode ? [this.familyVariantCode] : undefined
            };
            this.operationalConfigurationSearchService.searchOperationalConfigurationList(criteria).subscribe(
              function(results) {
                if (results) {
                  var rows = results.list.map(function(result) {
                    return {
                      bidoFlDTO: result.bidoFlDTO,
                      flCode: result.bidoFlDTO ? result.bidoFlDTO.flCode : '',
                      flDescription: result.bidoFlDTO ? result.bidoFlDTO.flDescription : '',
                      familyVariantCode: result.familyVariantCode,
                      familyVariantLabel: _modules_purchase_contract_utils_label_value_helper__WEBPACK_IMPORTED_MODULE_1__[
                        'LabelValueHelper'
                      ].getLabelByValue(_this.familyVariants, result.familyVariantCode),
                      statusStateLabel: _modules_purchase_contract_utils_label_value_helper__WEBPACK_IMPORTED_MODULE_1__[
                        'LabelValueHelper'
                      ].getLabelByValue(_this.flStatusList, (result.bidoFlDTO || {}).statusState)
                    };
                  });
                  _this.resultsTableDataSource.setData(rows);
                }
              },
              function() {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetFLResults'));
              }
            );
          };
          OperationalConfigurationSearchComponent.prototype.openOperationalconfigurationLink = function(
            functionLocation
          ) {
            if (functionLocation) {
              var matchingFlFunction = this.flFunctions.find(function(flFunction) {
                return flFunction.label === functionLocation.flFunction;
              });
              var selectedObjectId = {
                flCode: functionLocation.flCode,
                flDescription: functionLocation.flDescription,
                flFunction: matchingFlFunction ? matchingFlFunction.value : undefined,
                flIsMel: functionLocation.flIsMel,
                flNominalQuantity: functionLocation.flNominalQuantity,
                flRequiredQuantity: functionLocation.flRequiredQuantity,
                flComments: functionLocation.flComments,
                flDelayCategory: functionLocation.flDelayCategory
              };
              this.openOperationalconfiguration(
                selectedObjectId,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Read
              );
            }
          };
          /* Open Functional Location form for selected rows in consult mode */
          OperationalConfigurationSearchComponent.prototype.openSelectedOperationalconfiguration = function() {
            var _this = this;
            this.resultsTableDataSource.dataSelection.forEach(function(opConfigRow) {
              if (opConfigRow && opConfigRow.bidoFlDTO) {
                var selectedObjectId = __assign({}, opConfigRow.bidoFlDTO);
                _this.openOperationalconfiguration(
                  selectedObjectId,
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Read
                );
              }
            });
          };
          /* Delete selected functional location */
          OperationalConfigurationSearchComponent.prototype.deleteSelectedOperationalConfiguration = function() {
            var _this = this;
            if (this.resultsTableDataSource.hasDataSelection) {
              this.confirmationService.confirmDelete({
                messageKey: 'global.deleteConfirmationMsg',
                accept: function() {
                  var selectedBireFunctionalLocationDTOId = new Array();
                  _this.resultsTableDataSource.dataSelection.forEach(function(opConfigRow) {
                    if (opConfigRow && opConfigRow.bidoFlDTO) {
                      var flCode = opConfigRow.bidoFlDTO.flCode;
                      if (!!flCode) {
                        var bireFunctionalLocationDTOId = {
                          flCode: flCode
                        };
                        selectedBireFunctionalLocationDTOId.push(bireFunctionalLocationDTOId);
                      } else {
                        _super.prototype.throwUnboundLocalError.call(
                          _this,
                          'deleteSelectedOperationalConfiguration',
                          'functionLocation.flCode'
                        );
                      }
                    }
                  });
                  _this.functionalLocationSearchService
                    .removeFunctionalLocation(selectedBireFunctionalLocationDTOId)
                    .subscribe(
                      function(result) {
                        _this.messageService.showSuccessMessage('global.deleteSuccessMsg');
                      },
                      function() {
                        _this.messageService.showErrorMessage('global.deleteErrorMsg');
                      }
                    );
                  _this.resultsTableDataSource.deleteDataSelection();
                }
              });
            }
          };
          OperationalConfigurationSearchComponent.prototype.exportTable = function() {
            if (!!this.componentData) {
              this.exportService.toExcel(
                this.resultsTableDataSource.sanitizedData.map(function(opConfRow) {
                  return {
                    familyVariant: opConfRow.familyVariantLabel,
                    flDescription: opConfRow.bidoFlDTO ? opConfRow.bidoFlDTO.flDescription : undefined,
                    statusState: opConfRow.statusStateLabel
                  };
                }),
                this.resultsTableExportName,
                this.componentData.componentId
              );
            } else {
              _super.prototype.throwUnboundLocalError.call(this, 'exportTable', 'this.componentData');
            }
          };
          // To open create popup for function location
          OperationalConfigurationSearchComponent.prototype.openNewFunctionalLocation = function() {
            this.openOperationalconfiguration(
              undefined,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Create
            );
          };
          // tslint:disable-next-line:no-any
          OperationalConfigurationSearchComponent.prototype.openOperationalconfiguration = function(
            objectId,
            openMode
          ) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__['ComponentConstants']
                  .ENG_OPERATIONAL_CONFIGURATION_FORM,
              objectId: objectId != undefined ? this.serializationService.serialize(objectId) : undefined,
              openMode: openMode
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
            this.resultsTableDataSource.dataSelection = [];
          };
          OperationalConfigurationSearchComponent.prototype.resetFilter = function() {
            this.globalFilterTxt = undefined;
          };
          OperationalConfigurationSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-operational-configuration-search',
                template: __webpack_require__(
                  /*! ./operational-configuration-search.component.html */ './src/app/main/engineering-management/operational-configuration/search/operational-configuration-search.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_12__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__['TabService'],
                _engineering_management_functional_location_search_functional_location_search_service__WEBPACK_IMPORTED_MODULE_15__[
                  'FunctionalLocationSearchService'
                ],
                _operational_configuration_search_service__WEBPACK_IMPORTED_MODULE_16__[
                  'OperationalConfigurationSearchService'
                ],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__['PropertiesService'],
                _shared_services_export_service__WEBPACK_IMPORTED_MODULE_7__['ExportService'],
                _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_6__['ConfirmationService']
              ])
            ],
            OperationalConfigurationSearchComponent
          );
          return OperationalConfigurationSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_14__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/engineering-management/operational-configuration/search/operational-configuration-search.service.ts':
      /*!**************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/operational-configuration/search/operational-configuration-search.service.ts ***!
  \**************************************************************************************************************************/
      /*! exports provided: OperationalConfigurationSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'OperationalConfigurationSearchService',
          function() {
            return OperationalConfigurationSearchService;
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
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

        var OperationalConfigurationSearchService = /** @class */ (function(_super) {
          __extends(OperationalConfigurationSearchService, _super);
          function OperationalConfigurationSearchService(http, appConfigService, fleetManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.fleetManagementApi = fleetManagementApi;
            return _this;
          }
          OperationalConfigurationSearchService.prototype.searchOperationalConfigurationList = function(criteria) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findOperationalConfigurationBySearchCriteria,
              criteria
            );
          };
          OperationalConfigurationSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__['FleetManagementApi']
              ])
            ],
            OperationalConfigurationSearchService
          );
          return OperationalConfigurationSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/flight-operations/flight/search/search.service.ts':
      /*!************************************************************************!*\
  !*** ./src/app/main/flight-operations/flight/search/search.service.ts ***!
  \************************************************************************/
      /*! exports provided: SearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'SearchService', function() {
          return SearchService;
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
        /* harmony import */ var _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-business.api */ './src/app/shared/api/fleet-business.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
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

        var SearchService = /** @class */ (function(_super) {
          __extends(SearchService, _super);
          function SearchService(http, appConfigService, bidtEmployeeApi, fleetBusinessApi, fleetManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtEmployeeApi = bidtEmployeeApi;
            _this.fleetBusinessApi = fleetBusinessApi;
            _this.fleetManagementApi = fleetManagementApi;
            return _this;
          }
          /**************************************************************************
           * Bidt employee api
           *************************************************************************/
          SearchService.prototype.findAllEmployeeByQualificationCode = function(qualificationCode) {
            return _super.prototype.post.call(
              this,
              this.bidtEmployeeApi.findAllEmployeeByQualificationCode,
              qualificationCode
            );
          };
          SearchService.prototype.findAllBidoCustomerBySearchCriteria = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoCustomerBySearchCriteria, input);
          };
          /**************************************************************************
           * Fleet business api
           *************************************************************************/
          SearchService.prototype.generateFlightLogbookPDF = function(input) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.generateFlightLogbookPDF, input);
          };
          /**************************************************************************
           * Fleet management api
           *************************************************************************/
          SearchService.prototype.findAllBidoMissionEquipmentByCriteria = function(criteria) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findAllBidoMissionEquipmentLwoByCriteria,
              criteria
            );
          };
          SearchService.prototype.findEquipmentEngineListByEquipmentCode = function(input) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findEquipmentEngineListByEquipmentCode,
              input
            );
          };
          SearchService.prototype.findReplenishmentByMissionEquipmentAndTypeAndEquipmentCode = function(input) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findReplenishmentByMissionEquipmentAndTypeAndEquipmentCode,
              input
            );
          };
          SearchService.prototype.getSourceSystemIdList = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.getSourceSystemIdList);
          };
          SearchService.prototype.getEquipmentRepresentation = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.getEquipmentRepresentation, input);
          };
          SearchService.prototype.removeBidoMissionEquipment = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.removeBidoMissionEquipment, input);
          };
          SearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__['AppConfigService'],
                _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_2__['BidtEmployeeApi'],
                _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_3__['FleetBusinessApi'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__['FleetManagementApi']
              ])
            ],
            SearchService
          );
          return SearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__['AbstractAwHttpService']);

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
      }
  }
]);
//# sourceMappingURL=engineering-management-operational-configuration-operational-configuration-module.js.map
