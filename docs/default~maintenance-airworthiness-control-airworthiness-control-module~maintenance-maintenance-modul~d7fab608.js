(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~maintenance-airworthiness-control-airworthiness-control-module~maintenance-maintenance-modul~d7fab608'],
  {
    /***/ './src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.component.html':
      /*!******************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.component.html ***!
  \******************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" width="70">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }} {{ titleModeEdition | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="search-dialog-container">\r\n      <div class="section search-criteria-section">\r\n        <div class="section-content">\r\n          <div class="column">\r\n            <div class="row">\r\n              <div class="form-group" [ngClass]="{ required: true }">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".type" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="typeList"\r\n                    [(ngModel)]="workOrder.woType"\r\n                    placeholder="&nbsp;"\r\n                    [disabled]="isUpdateMode && !isFromMaintenancePlanning"\r\n                    (onChange)="updateType(false)"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".scheduledStartDate" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <p-calendar\r\n                    showButtonBar="true"\r\n                    [monthNavigator]="true"\r\n                    [yearNavigator]="true"\r\n                    [yearRange]="sessionService.calendarYearRange"\r\n                    class="aw-calendar"\r\n                    [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                    [locale]="sessionService.calendarFormat"\r\n                    [(ngModel)]="workOrder.woScheduledStartDate"\r\n                    [disabled]="isReadOpenMode"\r\n                    appendTo="body"\r\n                    showTime="true"\r\n                  ></p-calendar>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".scheduledEndDate" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <p-calendar\r\n                    showButtonBar="true"\r\n                    [monthNavigator]="true"\r\n                    [yearNavigator]="true"\r\n                    [yearRange]="sessionService.calendarYearRange"\r\n                    class="aw-calendar"\r\n                    [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                    [locale]="sessionService.calendarFormat"\r\n                    [(ngModel)]="workOrder.woScheduledEndDate"\r\n                    [disabled]="isReadOpenMode"\r\n                    appendTo="body"\r\n                    showTime="true"\r\n                  ></p-calendar>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".topWo" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="topWoList"\r\n                    [(ngModel)]="topWo"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    [disabled]="isReadOpenMode"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <label class="form-label">{{ "global.code" | translate }}</label>\r\n\r\n                <div class="form-control">\r\n                  <input\r\n                    *ngIf="isUpdateMode"\r\n                    name="code"\r\n                    type="text"\r\n                    class="aw-input"\r\n                    [(ngModel)]="workOrder.woCode"\r\n                    [disabled]="true"\r\n                  />\r\n                  <input\r\n                    *ngIf="!isUpdateMode"\r\n                    name="code"\r\n                    type="text"\r\n                    class="aw-input"\r\n                    [disabled]="true"\r\n                    [value]="\'global.n_a\' | translate"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".workCenter" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control" *ngIf="warehouseList.length > 0">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="warehouseList"\r\n                    [(ngModel)]="workOrder.bidtWarehouseId"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    [disabled]="isReadOpenMode"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n\r\n                <div class="form-control" *ngIf="warehouseList.length === 0">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="warehouseList"\r\n                    [(ngModel)]="workOrder.bidtWarehouseId"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    [disabled]="true"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".assignedTo" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [options]="userList"\r\n                    [(ngModel)]="workOrder.woAssignedTo"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    [disabled]="isReadOpenMode"\r\n                    (onChange)="onAssignedUserChange()"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".qualification" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <input\r\n                    name="employeeQualification"\r\n                    type="text"\r\n                    class="aw-input"\r\n                    [ngModel]="employeeQualification"\r\n                    [disabled]="true"\r\n                    [title]="employeeQualification"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="row">\r\n              <div class="form-group flex--4">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".description" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <textarea\r\n                    class="aw-textarea"\r\n                    pInputTextarea\r\n                    [rows]="3"\r\n                    [(ngModel)]="workOrder.woDescription"\r\n                    maxlength="1000"\r\n                  ></textarea>\r\n                </div>\r\n              </div>\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".warranty" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <p-checkbox\r\n                    p-checkbox\r\n                    class="aw-checkbox"\r\n                    binary="true"\r\n                    [(ngModel)]="workOrder.underWarranty"\r\n                    (onChange)="onWarrantyChange()"\r\n                  ></p-checkbox>\r\n                </div>\r\n              </div>\r\n              <div class="form-group flex--3">\r\n                <label class="form-label">{{ getComponentName() + ".warrantyProvider" | translate }} </label>\r\n                <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n                  <div class="form-control-data" *ngIf="workOrder.underWarranty" (click)="quickSearchBusinessPartner()">\r\n                    {{ workOrder.warrantyProvider }}\r\n                    <span *ngIf="warrantyProviderName">- {{ warrantyProviderName }}</span>\r\n                  </div>\r\n                  <div class="form-control-data" *ngIf="!workOrder.underWarranty">\r\n                    {{ workOrder.warrantyProvider }}\r\n                    <span *ngIf="warrantyProviderName">- {{ warrantyProviderName }}</span>\r\n                  </div>\r\n\r\n                  <div *ngIf="workOrder.warrantyProvider" class="btn-clear-wrapper">\r\n                    <i\r\n                      class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                      aria-hidden="true"\r\n                      (click)="workOrder.warrantyProvider = undefined; warrantyProviderName = undefined"\r\n                    ></i>\r\n                  </div>\r\n                  <div class="btn-search-wrapper" *ngIf="workOrder.underWarranty">\r\n                    <i\r\n                      class="fa fa-fw fa-search aw-icon btn-search"\r\n                      aria-hidden="true"\r\n                      (click)="quickSearchBusinessPartner()"\r\n                    ></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section" *ngIf="showTaskSection">\r\n        <h4 class="section-title">\r\n          {{ getComponentName() + ".task" | translate }}\r\n        </h4>\r\n        <div class="section-content">\r\n          <div class="row">\r\n            <div class="form-group" [ngClass]="{ required: true }">\r\n              <label class="form-label">\r\n                {{ getComponentName() + ".taskCode" | translate }}\r\n              </label>\r\n              <div class="form-control">\r\n                <input *ngIf="isUpdateMode" type="text" class="aw-input" [value]="task.taskCode" [disabled]="true" />\r\n              </div>\r\n              <div *ngIf="!isUpdateMode" class="form-control form-control-with-modal">\r\n                <div class="form-control-data" (click)="openTaskDialog()">\r\n                  {{ task.taskCode }}\r\n                </div>\r\n                <div class="btn-search-wrapper">\r\n                  <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="openTaskDialog()"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="form-group">\r\n              <label class="form-label">{{ getComponentName() + ".taskVersion" | translate }}</label>\r\n\r\n              <div class="form-control">\r\n                <input\r\n                  name="taskVersion"\r\n                  type="text"\r\n                  class="aw-input"\r\n                  [(ngModel)]="task.taskVersion"\r\n                  [disabled]="true"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div class="form-group flex--2">\r\n              <label class="form-label">{{ getComponentName() + ".taskDesignation" | translate }}</label>\r\n\r\n              <div class="form-control">\r\n                <input\r\n                  name="taskDesignation"\r\n                  type="text"\r\n                  class="aw-input"\r\n                  [title]="task.taskDesignation"\r\n                  [(ngModel)]="task.taskDesignation"\r\n                  [disabled]="true"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="row" *ngIf="showRelatedFields">\r\n        <div class="form-group flex--2">\r\n          <label class="form-label">\r\n            {{ getComponentName() + ".relatedItem" | translate }}\r\n          </label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [options]="relatedItemList"\r\n              [(ngModel)]="relatedItem"\r\n              [showClear]="!isUpdateMode"\r\n              placeholder="&nbsp;"\r\n              [disabled]="isUpdateMode && workOrder.woType === awPropertiesConstants.AIRM_WORK_ORDER_TYPE_EVOLUTION"\r\n              (onChange)="onRelatedItemChange()"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group flex--2">\r\n          <label class="form-label">\r\n            {{ getComponentName() + ".relatedAsset" | translate }}\r\n          </label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              [options]="relatedAssetList"\r\n              [(ngModel)]="relatedAsset"\r\n              [showClear]="true"\r\n              placeholder="&nbsp;"\r\n              [disabled]="isReadOpenMode"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="section" *ngIf="showDefectSection">\r\n        <h4 class="section-title">\r\n          {{ getComponentName() + ".defect" | translate }}\r\n        </h4>\r\n        <div class="section-content">\r\n          <div class="row">\r\n            <div class="form-group  flex--2" [ngClass]="{ required: true }">\r\n              <label class="form-label">{{ getComponentName() + ".eventCode" | translate }}</label>\r\n              <div class="form-control">\r\n                <input *ngIf="isUpdateMode" type="text" class="aw-input" [value]="eventCode" [disabled]="true" />\r\n              </div>\r\n              <div *ngIf="!isUpdateMode" class="form-control form-control-with-modal">\r\n                <div class="form-control-data" (click)="openDefectDialog()">\r\n                  {{ eventCode }}\r\n                </div>\r\n                <div (click)="openDefectDialog()">\r\n                  <div class="btn-search-wrapper">\r\n                    <i\r\n                      class="fa fa-fw fa-search aw-icon btn-search"\r\n                      aria-hidden="true"\r\n                      (click)="openDefectDialog()"\r\n                    ></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="flex--2"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section" *ngIf="showEvolutionSection">\r\n        <h4 class="section-title">\r\n          {{ getComponentName() + ".evolution" | translate }}\r\n        </h4>\r\n        <div class="section-content">\r\n          <div class="row">\r\n            <div class="form-group" [ngClass]="{ required: true }">\r\n              <label class="form-label">{{ getComponentName() + ".evolutionNumber" | translate }}</label>\r\n              <div class="form-control">\r\n                <input\r\n                  *ngIf="isUpdateMode"\r\n                  type="text"\r\n                  class="aw-input"\r\n                  [value]="evolution.evolutionNumber"\r\n                  [disabled]="true"\r\n                />\r\n              </div>\r\n              <div *ngIf="!isUpdateMode" class="form-control form-control-with-modal">\r\n                <div class="form-control-data" (click)="openEvolDialog()">\r\n                  {{ evolution.evolutionNumber }}\r\n                </div>\r\n                <div class="btn-search-wrapper">\r\n                  <i class="fa fa-fw fa-search aw-icon btn-search" aria-hidden="true" (click)="openEvolDialog()"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="form-group">\r\n              <label class="form-label">{{ getComponentName() + ".evolutionRevisionNumber" | translate }}</label>\r\n\r\n              <div class="form-control">\r\n                <input\r\n                  name="evolutionRevisionNumber"\r\n                  type="text"\r\n                  class="aw-input"\r\n                  [(ngModel)]="evolution.evolutionRevisionNumber"\r\n                  [disabled]="true"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div class="form-group">\r\n              <label class="form-label">{{ getComponentName() + ".evolutionType" | translate }}</label>\r\n\r\n              <div class="form-control">\r\n                <input\r\n                  name="evolutionType"\r\n                  type="text"\r\n                  class="aw-input"\r\n                  [(ngModel)]="evolution.evolutionType"\r\n                  [disabled]="true"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section" *ngIf="showOperationSection">\r\n        <h4 class="section-title">\r\n          {{ getComponentName() + ".operations" | translate }}\r\n        </h4>\r\n        <div class="section-content">\r\n          <p-table\r\n            [resizableColumns]="true"\r\n            class="aw-table2"\r\n            [columns]="opTableCols"\r\n            [value]="opTable"\r\n            [(selection)]="selectedOperations"\r\n            dataKey="code"\r\n            [scrollable]="true"\r\n          >\r\n            <ng-template pTemplate="emptymessage">\r\n              <span *ngIf="!isTableLoading"> &nbsp;</span>\r\n\r\n              <div *ngIf="isTableLoading" class="aw-table-loading-indicator">\r\n                <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                <div class="lds-hourglass"></div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="caption">\r\n              <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedOperations.length > 0 }">\r\n                <div class="aw-table-actions">\r\n                  <button\r\n                    *ngIf="selectedOperations.length === 0"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    (click)="openOperationDialog()"\r\n                  >\r\n                    {{ "global.add" | translate }}\r\n                  </button>\r\n                  <button\r\n                    *ngIf="selectedOperations && selectedOperations.length > 0"\r\n                    type="button"\r\n                    mat-raised-button\r\n                    color="warn"\r\n                    (click)="deleteOperation()"\r\n                  >\r\n                    {{ "global.delete" | translate }}\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="colgroup" let-columns>\r\n              <colgroup>\r\n                <col class="aw-table-checkbox-wrapper" />\r\n                <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n              </colgroup>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="header" let-columns>\r\n              <tr>\r\n                <th class="aw-table-checkbox-wrapper">\r\n                  <p-tableHeaderCheckbox class="aw-table-checkbox"></p-tableHeaderCheckbox>\r\n                </th>\r\n\r\n                <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                  {{ getComponentName() + "." + col.field | translate }}\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n              <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                <td class="aw-table-checkbox-wrapper">\r\n                  <p-tableCheckbox class="aw-table-checkbox" [value]="rowData"></p-tableCheckbox>\r\n                </td>\r\n                <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                  <span [title]="rowData[col.field]">{{ rowData[col.field] }}</span>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </p-table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section" *ngIf="showOperationSection">\r\n        <h4 class="section-title">\r\n          {{ getComponentName() + ".procurementRequests" | translate }}\r\n        </h4>\r\n        <div class="section-content">\r\n          <p-table\r\n            [resizableColumns]="true"\r\n            class="aw-table2"\r\n            [columns]="procurementRequestTableCols"\r\n            [value]="procurementRequestRows"\r\n            [scrollable]="true"\r\n          >\r\n            <ng-template pTemplate="caption">\r\n              <div class="aw-table-header">\r\n                <div class="aw-table-actions">\r\n                  <button mat-raised-button type="button" [disabled]="isReadOpenMode" (click)="addProcurementRequest()">\r\n                    {{ "global.add" | translate }}\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="colgroup" let-columns>\r\n              <colgroup>\r\n                <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n              </colgroup>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="header" let-columns>\r\n              <tr>\r\n                <th\r\n                  pResizableColumn\r\n                  *ngFor="let col of columns"\r\n                  [ngStyle]="{ \'text-align\': col.alignment }"\r\n                  [ngSwitch]="col.field"\r\n                >\r\n                  <span *ngSwitchCase="\'action\'">&nbsp;</span>\r\n                  <span *ngSwitchDefault>{{ getComponentName() + "." + col.field | translate }}</span>\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n              <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                <td *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }" [ngSwitch]="col.field">\r\n                  <span *ngSwitchCase="\'materials\'">\r\n                    <div>\r\n                      <div class="form-control">\r\n                        <input\r\n                          *ngIf="rowData.procurementRequestId"\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [value]="rowData.materials"\r\n                          [disabled]="true"\r\n                        />\r\n                      </div>\r\n                      <div *ngIf="!rowData.procurementRequestId" class="form-control form-control-with-modal">\r\n                        <div class="form-control-data" (click)="openPnSearchDialog(rowData)">\r\n                          <span *ngIf="rowData.materials">\r\n                            {{ rowData.materials }}\r\n                          </span>\r\n                          <span *ngIf="!rowData.materials">\r\n                            {{ "global.search" | translate }}\r\n                          </span>\r\n                          <div class="btn-search-wrapper">\r\n                            <i\r\n                              class="fa fa-fw fa-search aw-icon btn-search"\r\n                              aria-hidden="true"\r\n                              (click)="openPnSearchDialog(rowData)"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf="rowData.materialsDesc">\r\n                      <i>{{ rowData.materialsDesc }}</i>\r\n                    </div>\r\n\r\n                    <div *ngIf="!rowData.materialsDesc && rowData.numberOfRecords">\r\n                      <i>{{ rowData.numberOfRecords }} {{ getComponentName() + ".items" | translate }}</i>\r\n                    </div>\r\n                  </span>\r\n\r\n                  <span *ngSwitchCase="\'requestedQuantity\'">\r\n                    <input\r\n                      type="number"\r\n                      class="aw-input"\r\n                      name="quantity"\r\n                      [(ngModel)]="rowData.requestedQuantity"\r\n                      [disabled]="isReadOpenMode || rowData.procurementRequestId"\r\n                    />\r\n                  </span>\r\n\r\n                  <span *ngSwitchCase="\'calendarPotential\'">\r\n                    <p-calendar\r\n                      appendTo="body"\r\n                      class="aw-calendar"\r\n                      [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                      [locale]="sessionService.calendarFormat"\r\n                      [(ngModel)]="rowData.calendarPotential"\r\n                      showButtonBar="true"\r\n                      [monthNavigator]="true"\r\n                      [yearNavigator]="true"\r\n                      [disabled]="isReadOpenMode || rowData.procurementRequestId"\r\n                      [yearRange]="sessionService.calendarYearRange"\r\n                    ></p-calendar>\r\n                  </span>\r\n\r\n                  <span *ngSwitchCase="\'potentialUnit\'">\r\n                    <span *ngIf="!rowData.procurementRequestId">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="rowData.units"\r\n                        [(ngModel)]="rowData.potentialUnit"\r\n                        placeholder="&nbsp;"\r\n                        [disabled]="\r\n                          isReadOpenMode || !rowData.materials || !rowData.units || rowData.units.length === 0\r\n                        "\r\n                        appendTo="body"\r\n                      ></p-dropdown>\r\n                    </span>\r\n                    <span *ngIf="rowData.procurementRequestId">\r\n                      {{ rowData.potentialUnit }}\r\n                    </span>\r\n                  </span>\r\n\r\n                  <span *ngSwitchCase="\'requestedPotential\'">\r\n                    <input\r\n                      type="number"\r\n                      class="aw-input"\r\n                      name="quantity"\r\n                      [(ngModel)]="rowData.requestedPotential"\r\n                      [disabled]="\r\n                        isReadOpenMode || rowData.procurementRequestId || !rowData.units || rowData.units.length === 0\r\n                      "\r\n                    />\r\n                  </span>\r\n\r\n                  <span *ngSwitchCase="\'criticality\'">\r\n                    <p-dropdown\r\n                      class="aw-dropdown fixed-width"\r\n                      [options]="procurementRequestCriticalityList"\r\n                      [(ngModel)]="rowData.criticality"\r\n                      placeholder="&nbsp;"\r\n                      [disabled]="isReadOpenMode || rowData.procurementRequestId"\r\n                      appendTo="body"\r\n                    ></p-dropdown>\r\n                  </span>\r\n\r\n                  <span *ngSwitchCase="\'expectedOn\'">\r\n                    <p-calendar\r\n                      showButtonBar="true"\r\n                      [monthNavigator]="true"\r\n                      [yearNavigator]="true"\r\n                      [yearRange]="sessionService.calendarYearRange"\r\n                      class="aw-calendar"\r\n                      [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                      [locale]="sessionService.calendarFormat"\r\n                      [(ngModel)]="rowData.expectedOn"\r\n                      [disabled]="isReadOpenMode || rowData.procurementRequestId"\r\n                      appendTo="body"\r\n                    ></p-calendar>\r\n                  </span>\r\n\r\n                  <span *ngSwitchCase="\'action\'">\r\n                    <button\r\n                      *ngIf="!rowData.procurementRequestId"\r\n                      mat-icon-button\r\n                      class="mat-elevation-z1"\r\n                      color="warn"\r\n                      (click)="deleteProcurementRequest(rowData)"\r\n                    >\r\n                      <mat-icon>remove</mat-icon>\r\n                    </button>\r\n                  </span>\r\n\r\n                  <span *ngSwitchCase="\'recepient\'">\r\n                    <div>{{ rowData.recepient }}</div>\r\n                    <div>{{ rowData.recepientDesc }}</div>\r\n                  </span>\r\n                  <span *ngSwitchDefault [title]="rowData[col.field]">{{ rowData[col.field] }}</span>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </p-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">{{ "global.cancel" | translate }}</button>\r\n\r\n    <button\r\n      type="button"\r\n      class="btn-with-spinner"\r\n      color="primary"\r\n      mat-raised-button\r\n      [disabled]="!isValid()"\r\n      (click)="validate()"\r\n    >\r\n      <span class="lds-hourglass" *ngIf="showSaveSpinner"></span>\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-task\r\n  *ngIf="displayTaskDialog"\r\n  [(display)]="displayTaskDialog"\r\n  [familyCode]="familyCode"\r\n  [variantCode]="variantCode"\r\n  (onSelected)="onSelectedTask($event)"\r\n>\r\n</aw-dialog-search-task>\r\n\r\n<aw-dialog-search-pn\r\n  *ngIf="searchPnDialogVisible"\r\n  [(display)]="searchPnDialogVisible"\r\n  [withAllTypes]="true"\r\n  [withSparePartClass]="true"\r\n  [showPartTypeSelection]="true"\r\n  (onSelected)="checkPn($event)"\r\n></aw-dialog-search-pn>\r\n\r\n<aw-dialog-search-evolution\r\n  *ngIf="displayEvolDialog"\r\n  [(display)]="displayEvolDialog"\r\n  (onSelected)="onSelectedEvol($event)"\r\n></aw-dialog-search-evolution>\r\n\r\n<aw-dialog-search-defect-events\r\n  *ngIf="displayDefectDialog"\r\n  [(display)]="displayDefectDialog"\r\n  [equipmentCode]="equipmentCode"\r\n  (onSelected)="onSelectedDefect($event)"\r\n></aw-dialog-search-defect-events>\r\n\r\n<aw-dialog-search-operation\r\n  *ngIf="displayOperationDialog"\r\n  [(display)]="displayOperationDialog"\r\n  (onValidated)="onSelectedOperation($event)"\r\n></aw-dialog-search-operation>\r\n\r\n<aw-dialog-search-customer\r\n  *ngIf="showQuickSearchBusinessPartnerPopup"\r\n  [(display)]="showQuickSearchBusinessPartnerPopup"\r\n  [customer-code]="workOrder.warrantyProvider"\r\n  (onSelected)="setSelectedBusinessPartner($event)"\r\n>\r\n</aw-dialog-search-customer>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.component.scss':
      /*!******************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.component.scss ***!
  \******************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host textarea {\n  height: 46px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3JrLXBhY2thZ2UvZm9ybS9wb3B1cHMvZGlhbG9nLXdvcmstb3JkZXItZWRpdGlvbi9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbWFpbnRlbmFuY2VcXHdvcmstcGFja2FnZVxcZm9ybVxccG9wdXBzXFxkaWFsb2ctd29yay1vcmRlci1lZGl0aW9uXFxkaWFsb2ctd29yay1vcmRlci1lZGl0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRVEsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3JrLXBhY2thZ2UvZm9ybS9wb3B1cHMvZGlhbG9nLXdvcmstb3JkZXItZWRpdGlvbi9kaWFsb2ctd29yay1vcmRlci1lZGl0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgfVxyXG59Il19 */';

        /***/
      },

    /***/ './src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.component.ts':
      /*!****************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.component.ts ***!
  \****************************************************************************************************************************/
      /*! exports provided: DialogWorkOrderEditComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogWorkOrderEditComponent',
          function() {
            return DialogWorkOrderEditComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! lodash-es */ './node_modules/lodash-es/lodash.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! moment */ './node_modules/moment/moment.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          moment__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../..//shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../..//shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../../shared/constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../../../shared/utils/number-utils */ './src/app/shared/utils/number-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _human_resources_employee_form_employee_form_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../../human-resources/employee-form/employee-form.service */ './src/app/main/human-resources/employee-form/employee-form.service.ts'
        );
        /* harmony import */ var _logistics_logistics_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../../logistics/logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _procurement_request_procurement_requests_table_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../procurement-request/procurement-requests-table.service */ './src/app/main/maintenance/procurement-request/procurement-requests-table.service.ts'
        );
        /* harmony import */ var _work_order_form_work_order_form_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../work-order/form/work-order-form.service */ './src/app/main/maintenance/work-order/form/work-order-form.service.ts'
        );
        /* harmony import */ var _work_package_form_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../work-package-form.service */ './src/app/main/maintenance/work-package/form/work-package-form.service.ts'
        );
        /* harmony import */ var _dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./dialog-work-order-edition.service */ './src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service.ts'
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

        var DialogWorkOrderEditComponent = /** @class */ (function(_super) {
          __extends(DialogWorkOrderEditComponent, _super);
          function DialogWorkOrderEditComponent(
            sessionService,
            logisticsService,
            messageService,
            wpFormService,
            dialogWorkOrderEditService,
            employeeFormService,
            workOrderFormService,
            procurementRequestsTableService,
            propertiesService,
            translateService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__['ComponentOpenMode'].Write,
                'DialogWorkOrderEditComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.logisticsService = logisticsService;
            _this.messageService = messageService;
            _this.wpFormService = wpFormService;
            _this.dialogWorkOrderEditService = dialogWorkOrderEditService;
            _this.employeeFormService = employeeFormService;
            _this.workOrderFormService = workOrderFormService;
            _this.procurementRequestsTableService = procurementRequestsTableService;
            _this.propertiesService = propertiesService;
            _this.translateService = translateService;
            _this._isFromMaintenancePlanning = false;
            _this.workOrder = {};
            _this.task = {};
            _this.showQuickSearchBusinessPartnerPopup = false;
            _this.employeeQualification = '';
            _this.opTable = [];
            _this.selectedOperations = [];
            _this.showSaveSpinner = false;
            _this.init();
            _this.initDropDowns();
            _this.initOpTableCols();
            _this.initProcurementRequestTableCols();
            return _this;
          }
          Object.defineProperty(DialogWorkOrderEditComponent.prototype, 'workPackage', {
            get: function() {
              return this._workPackage;
            },
            set: function(workPackage) {
              var _this = this;
              this._workPackage = workPackage;
              this.equipmentCode = this.workPackage.assetCode;
              this.dialogWorkOrderEditService
                .loadWarehouseList(workPackage.bireRepairCenterCode)
                .subscribe(function(result) {
                  _this.warehouseList = result.map(function(warehouse) {
                    return {
                      label: warehouse.label,
                      value: Number(warehouse.value)
                    };
                  });
                });
              this.logisticsService.findAllBireSite().subscribe(function(sites) {
                var selectedSites = sites.filter(function(site) {
                  return site.siteCode === workPackage.bireRepairCenterCode;
                });
                _this.bidtSiteDTO = selectedSites && selectedSites.length === 1 ? selectedSites[0] : undefined;
                if (_this.bidtSiteDTO && _this.bidtSiteDTO.siteId) {
                  _this.logisticsService
                    .getWarehousesBySiteId(_this.bidtSiteDTO.siteId)
                    .subscribe(function(warehouses) {
                      _this.bidtWarehouseDTOs = warehouses;
                    });
                }
              });
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(DialogWorkOrderEditComponent.prototype, 'isFromMaintenancePlanning', {
            get: function() {
              return this._isFromMaintenancePlanning;
            },
            set: function(isFromMaintenancePlanning) {
              this._isFromMaintenancePlanning = isFromMaintenancePlanning;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(DialogWorkOrderEditComponent.prototype, 'workOrderSelected', {
            get: function() {
              return this._bidmWorkOrderDTOId;
            },
            set: function(bidmWorkOrderDTOId) {
              this._bidmWorkOrderDTOId = bidmWorkOrderDTOId;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(DialogWorkOrderEditComponent.prototype, 'addWorkOrder', {
            get: function() {
              return this._addBidmWorkOrderDTOId;
            },
            set: function(bidmWorkOrderDTOId) {
              this._addBidmWorkOrderDTOId = bidmWorkOrderDTOId;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(DialogWorkOrderEditComponent.prototype, 'workOrders', {
            get: function() {
              return this._workOrders;
            },
            set: function(workOrders) {
              this._workOrders = workOrders;
              this.topWoList = workOrders.map(function(wo) {
                return { label: wo.code, value: wo.woId };
              });
            },
            enumerable: true,
            configurable: true
          });
          DialogWorkOrderEditComponent.prototype.initDropDowns = function() {
            var _this = this;
            // Load Status List
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                  .PROCUREMENT_REQUEST_STATUS_MAP
              )
              .subscribe(function(res) {
                _this.procurementRequestStatusList = res;
              });
            this.procurementRequestTypes = [];
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                  .PROCUREMENT_REQUEST_TYPE_MAP
              )
              .subscribe(function(res) {
                _this.procurementRequestTypes = res;
              });
            this.procurementRequestCriticalityList = [
              {
                label: this.translateService.instant(this.getTranslateKey('immediate')),
                value:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                    .LOGISTICAL_CRITICALITY_IMMEDIATE
              },
              {
                label: this.translateService.instant(this.getTranslateKey('urgent')),
                value:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                    .LOGISTICAL_CRITICALITY_URGENT
              },
              {
                label: this.translateService.instant(this.getTranslateKey('routine')),
                value:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                    .LOGISTICAL_CRITICALITY_ROUTINE
              }
            ];
          };
          DialogWorkOrderEditComponent.prototype.ngOnInit = function() {
            var _this = this;
            this.isUpdateMode = this._bidmWorkOrderDTOId !== undefined && this._bidmWorkOrderDTOId.woId.length > 0;
            if (this.isUpdateMode) {
              this.dialogWorkOrderEditService.findBidmWorkOrder(this._bidmWorkOrderDTOId).subscribe(function(wo) {
                _this.oldWorkOrder = wo;
                _this.workOrder = wo.bidmWorkOrder;
                if (_this.workOrder.bidWoId) {
                  _this.topWo = _this.workOrder.bidWoId;
                }
                if (_this.workOrder.warrantyProvider) {
                  _this.dialogWorkOrderEditService
                    .findBidoCustomer({ customerCode: _this.workOrder.warrantyProvider })
                    .subscribe(function(customer) {
                      return (_this.warrantyProviderName = customer.customerName);
                    });
                }
                _this.dialogWorkOrderEditService
                  .findBidmOperationsByWorkOrder(_this._bidmWorkOrderDTOId)
                  .subscribe(function(operationList) {
                    var calculateWorkOrderImput = {
                      workOrderData: _this.workOrder,
                      fromLineMaintenance: false
                    };
                    _this.dialogWorkOrderEditService
                      .calculateWorkOrderStatus(calculateWorkOrderImput)
                      .subscribe(function(calculateWorkOrderOutput) {
                        if (
                          _this.workOrder.woType ===
                            _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__[
                              'AWPropertiesConstants'
                            ].AIRM_WORK_ORDER_TYPE_TASK &&
                          calculateWorkOrderOutput.originText
                        ) {
                          var assetWorkOrderOriginInput = {
                            woType: _this.workOrder.woType,
                            woSource: _this.workOrder.woSource,
                            evolutionType: calculateWorkOrderOutput.evolutionType
                          };
                          _this.dialogWorkOrderEditService
                            .findWorkOrderOriginDetails(assetWorkOrderOriginInput)
                            .subscribe(function(assetOutput) {
                              if (!!assetOutput.bireTaskDTOId) {
                                // open task form
                                var bireTaskDTO = assetOutput.bireTaskDTOId;
                                _this.getTask(bireTaskDTO);
                              }
                            });
                        } else if (
                          _this.workOrder.woType ===
                            _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__[
                              'AWPropertiesConstants'
                            ].AIRM_WORK_ORDER_TYPE_TASK &&
                          operationList.length > 0 &&
                          operationList[0].bireTaskCode &&
                          operationList[0].bireTaskVersion
                        ) {
                          // Load task
                          _this.workOrderFormService
                            .findBireTask({
                              taskCode: operationList[0].bireTaskCode,
                              taskVersion: operationList[0].bireTaskVersion
                            })
                            .subscribe(function(linkedTask) {
                              _this.task = linkedTask;
                              _this.onSelectedTask(_this.task);
                              _this.fillRelatedAssetsList();
                            });
                        } else if (
                          _this.workOrder.woType ===
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__[
                            'AWPropertiesConstants'
                          ].AIRM_WORK_ORDER_TYPE_DEFECT
                        ) {
                          if (_this.workOrder.woSource) {
                            _this.eventCode = _this.workOrder.woSource.split('#')[0];
                          }
                          _this.fillRelatedAssetsList();
                        } else if (
                          _this.workOrder.woType ===
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__[
                            'AWPropertiesConstants'
                          ].AIRM_WORK_ORDER_TYPE_EVOLUTION
                        ) {
                          if (_this.workOrder.woSource) {
                            var woSource = _this.workOrder.woSource.split('#');
                            _this.evolution = {
                              evolutionNumber: woSource[1],
                              evolutionRevisionNumber: woSource[2],
                              evolutionType: woSource[0]
                            };
                            _this.onSelectedEvol(_this.evolution);
                            _this.fillRelatedAssetsList();
                          }
                        }
                      });
                    var operationRows = operationList.map(function(bidmOperation) {
                      if (bidmOperation.bireOperationDTO) {
                        var operationRow = {
                          bidmOperation: bidmOperation,
                          code: bidmOperation.bireOpeCode,
                          rangeCode: bidmOperation.bireOpeRangeCode,
                          version: bidmOperation.bireOpeVersion,
                          designation: bidmOperation.bireOperationDTO.opeDesignation,
                          qualification: bidmOperation.bireOperationDTO.opeQualification
                        };
                        return operationRow;
                      }
                      throw new Error('Bire not loaded on BIDM Operations');
                    });
                    _this.insertOpTableIfNotExist(operationRows);
                    _this.procurementRequestsTableService
                      .findProcReqItemsAndStockQuantityIndicators(_this.workOrder, undefined)
                      .subscribe(function(proqReqs) {
                        _this.procurementRequests = proqReqs;
                        _this.procurementRequests.forEach(function(proqReq) {
                          var _a;
                          (_a = _this.procurementRequestRows).push.apply(
                            _a,
                            __spread(_this.createProcReqItemRow(proqReq))
                          );
                        });
                      });
                  });
                if (_this.workOrder.bireItemFamilyCode && _this.workOrder.bireItemVariantCode) {
                  _this.relatedItem =
                    _this.workOrder.bireItemFamilyCode +
                    '-' +
                    _this.workOrder.bireItemVariantCode +
                    '/' +
                    [
                      _this.workOrder.bireItemChapter,
                      _this.workOrder.bireItemSection,
                      _this.workOrder.bireItemSubject,
                      _this.workOrder.bireItemSheet,
                      _this.workOrder.bireItemMarks
                    ].join('-');
                }
                _this.relatedAsset = _this.getRelatedAssetKey(_this.workOrder.assetPn, _this.workOrder.assetSn);
                _this.updateType(true);
                _this.onAssignedUserChange();
              });
            } else {
              if (this._addBidmWorkOrderDTOId) {
                this.dialogWorkOrderEditService.findWorkOrder(this._addBidmWorkOrderDTOId).subscribe(function(topWo) {
                  if (topWo.woId) {
                    _this.topWo = topWo.woId;
                  }
                });
              }
              this.workOrder = {
                woScheduledStartDate: new Date()
              };
              this.updateType(false);
              this.fillRelatedAssetsList();
            }
            this.titleModeEdition = this.isCreateOpenMode
              ? this.getTranslateKey('titleCreation')
              : this.getTranslateKey('titleEdition');
            // this.wpFormService.userList$.subscribe((list) => (this.userList = list));
            this.getUsersList();
            this.wpFormService.woTypeList$.subscribe(function(list) {
              _this.typeList = _this._isFromMaintenancePlanning
                ? list.filter(function(a) {
                    return (
                      a.value ===
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                        .AIRM_WORK_ORDER_TYPE_SN_CHANGE
                    );
                  })
                : list;
            });
            if (this._isFromMaintenancePlanning) {
              this.workOrder.woType =
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__[
                  'AWPropertiesConstants'
                ].AIRM_WORK_ORDER_TYPE_SN_CHANGE;
            }
          };
          DialogWorkOrderEditComponent.prototype.getRelatedAssetKey = function(assetPn, assetSn) {
            if (assetPn && assetSn) {
              return assetPn + '/' + assetSn;
            } else if (assetPn) {
              return assetPn + '/ ';
            } else if (assetSn) {
              return ' /' + assetSn;
            }
            return undefined;
          };
          DialogWorkOrderEditComponent.prototype.isValid = function() {
            return true;
          };
          DialogWorkOrderEditComponent.prototype.getTask = function(bireTaskId) {
            var _this = this;
            this.workOrderFormService.findBireTask(bireTaskId).subscribe(function(linkedTask) {
              _this.task = linkedTask;
              _this.onSelectedTask(_this.task);
              _this.fillRelatedAssetsList();
            });
          };
          DialogWorkOrderEditComponent.prototype.getUsersList = function() {
            var _this = this;
            var param = {
              useCaseCode:
                _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_8__['BidoFunctionTypeConstants']
                  .UC_AIRM_RECEPTION
            };
            if (!!this.task) {
              param.taskCode = this.task.taskCode;
              param.taskVersion = this.task.taskVersion;
              param.projectId = this._workPackage.projectId;
              param.startDate = this.workOrder.woScheduledStartDate;
            }
            this.dialogWorkOrderEditService.findUsersWithUseCaseForWorkOrder(param).subscribe(function(data) {
              _this.userList = data.map(function(user) {
                return {
                  label: user.lastname + ' ' + user.firstname,
                  value: user.userId
                };
              });
              if (!!_this.workOrder.woAssignedTo) {
                var inList = _this.userList.find(function(elem) {
                  return elem.value === _this.workOrder.woAssignedTo;
                });
                _this.workOrder.woAssignedTo = !!inList ? inList.value : undefined;
              }
            });
          };
          DialogWorkOrderEditComponent.prototype.validate = function() {
            if (
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__['StringUtils'].isNullOrEmpty(
                this.workOrder.woType
              )
            ) {
              this.messageService.showWarningMessage(this.getComponentName() + '.errorOnWoType');
            } else if (
              this.workOrder.woType ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                  .AIRM_WORK_ORDER_TYPE_TASK &&
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__['StringUtils'].isNullOrEmpty(this.task.taskCode)
            ) {
              this.messageService.showWarningMessage(this.getComponentName() + '.errorOnWoTaskCode');
            } else if (
              moment__WEBPACK_IMPORTED_MODULE_3__(this.workOrder.woScheduledStartDate).isAfter(
                moment__WEBPACK_IMPORTED_MODULE_3__(this.workOrder.woScheduledEndDate)
              )
            ) {
              this.messageService.showWarningMessage(this.getComponentName() + '.errorOnDates');
            } else if (
              this.showDefectSection &&
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__['StringUtils'].isNullOrEmpty(this.eventCode)
            ) {
              this.messageService.showWarningMessage(this.getComponentName() + '.errorOnDefect');
            } else if (
              this.showEvolutionSection &&
              _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__['StringUtils'].isNullOrEmpty(
                this.evolution.evolutionNumber
              )
            ) {
              this.messageService.showWarningMessage(this.getComponentName() + '.errorOnEvolution');
            } else if (this.showOperationSection && !this.validateProcurementRequests()) {
              this.messageService.showWarningMessage(this.getComponentName() + '.errorOnProcurementRequests');
            } else {
              this.saveWorkOrder();
            }
          };
          DialogWorkOrderEditComponent.prototype.validateProcurementRequests = function() {
            if (this.procurementRequestRows && this.procurementRequestRows.length > 0) {
              this.procurementRequestRows.forEach(function(row) {
                if (!row.materials || !row.requestedQuantity || row.requestedQuantity < 0) {
                  return false;
                }
              });
            }
            return true;
          };
          DialogWorkOrderEditComponent.prototype.saveWorkOrder = function() {
            var _this = this;
            this.showSaveSpinner = true;
            this.workOrder.projectId = this.workPackage.projectId;
            // Top work order ?
            if (!!this.topWo) {
              this.workOrder.bidProjectId = this.workPackage.projectId;
              this.workOrder.bidWoId = this.topWo;
            }
            var bidmOperations = this.opTable.map(function(operationRow) {
              return operationRow.bidmOperation;
            });
            var woProcurementRequestInputDTOs = this.procurementRequestRows
              .filter(function(row) {
                return !row.procurementRequestId;
              })
              .map(function(row) {
                var input = {
                  pnCode: row.materials,
                  quantity: Number(row.requestedQuantity),
                  criticality: row.criticality,
                  date: row.expectedOn,
                  expirationDate: row.expectedOn,
                  requestedPotential: row.requestedPotential,
                  potentialUnit: row.potentialUnit,
                  calendarPotential: row.calendarPotential
                };
                return input;
              });
            this.task = __assign({}, this.task, { taskCode: this.task.taskCode || undefined });
            var newWorkOrder = {
              bidmProjectDTO: this.workPackage,
              bidmWorkOrderDTO: this.workOrder,
              relatedItem: this.relatedItem,
              relatedAsset: this.relatedAsset,
              evolution: this.evolution,
              task: this.task,
              eventCode: this.eventCode,
              operations: bidmOperations,
              woProcurementRequestInputDTOs: woProcurementRequestInputDTOs
            };
            this.dialogWorkOrderEditService
              .createOrUpdateBidmWorkOrder(newWorkOrder)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['finalize'])(function() {
                  _this.showSaveSpinner = false;
                })
              )
              .subscribe(
                function(workOrder) {
                  if (_this.oldWorkOrder && _this.oldWorkOrder.bidtWarehouseId !== _this.workOrder.bidtWarehouseId) {
                    _this.logisticsService.updateProcurementRequestReceiver(workOrder).subscribe();
                  }
                  _this.messageService.showSuccessMessage(_this.getTranslateKey('woCreated'));
                  _this.onValidated.emit({ isCreated: true });
                  _this.showSaveSpinner = false;
                  _this.closeDialog();
                },
                function(err) {
                  _this.messageService.showErrorMessage(
                    err.error && err.error.errorDetail
                      ? err.error.errorDetail
                      : _this.getTranslateKey('errorOnAddingWO')
                  );
                }
              );
          };
          DialogWorkOrderEditComponent.prototype.updateType = function(keepValues) {
            this.showTaskSection =
              this.workOrder.woType ===
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                .AIRM_WORK_ORDER_TYPE_TASK;
            this.showDefectSection =
              this.workOrder.woType ===
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                .AIRM_WORK_ORDER_TYPE_DEFECT;
            this.showEvolutionSection =
              this.workOrder.woType ===
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                .AIRM_WORK_ORDER_TYPE_EVOLUTION;
            this.showOperationSection =
              this.workOrder.woType !==
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                  .AIRM_WORK_ORDER_TYPE_SUBCONTRACTING &&
              !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__['StringUtils'].isNullOrEmpty(
                this.workOrder.woType
              );
            this.showRelatedFields = this.showTaskSection || this.showDefectSection || this.showEvolutionSection;
            if (!keepValues) {
              this.clearTask();
              this.eventCode = '';
              this.evolution = {};
              this.relatedItem = undefined;
              this.workOrder.assetSn = undefined;
              this.relatedItemList = [];
            }
          };
          DialogWorkOrderEditComponent.prototype.openTaskDialog = function() {
            this.displayTaskDialog = true;
          };
          DialogWorkOrderEditComponent.prototype.openDefectDialog = function() {
            this.displayDefectDialog = true;
          };
          DialogWorkOrderEditComponent.prototype.openEvolDialog = function() {
            this.displayEvolDialog = true;
          };
          DialogWorkOrderEditComponent.prototype.openOperationDialog = function() {
            this.displayOperationDialog = true;
          };
          DialogWorkOrderEditComponent.prototype.clearTask = function() {
            this.task = {};
            this.clearOperations();
          };
          DialogWorkOrderEditComponent.prototype.clearOperations = function() {
            this.opTable = [];
            this.selectedOperations = [];
            if (!this.isUpdateMode) {
              this.procurementRequestRows = [];
            }
          };
          DialogWorkOrderEditComponent.prototype.onAssignedUserChange = function() {
            var _this = this;
            if (!!this.workOrder.woAssignedTo) {
              var employeeId = this.workOrder.woAssignedTo;
              this.employeeFormService.getEmployeeQualificationText(employeeId).subscribe(function(result) {
                _this.employeeQualification = result;
              });
            }
          };
          DialogWorkOrderEditComponent.prototype.onSelectedTask = function(task) {
            this.task = {
              taskCode: task.taskCode,
              taskVersion: task.taskVersion,
              taskDesignation: task.taskDesignation
            };
            this.workOrder.woDescription = task.taskDescription;
            this.fillOperationListFromTask();
            this.fillRelatedItemsList();
            this.getUsersList();
          };
          DialogWorkOrderEditComponent.prototype.onSelectedOperation = function(popupOp) {
            var op = {
              code: popupOp.opeCode,
              version: popupOp.opeVersion,
              rangeCode: popupOp.rangeCode,
              designation: popupOp.opeDesignation,
              qualification: popupOp.opeQualification,
              bidmOperation: {
                bireOperationDTO: popupOp
              }
            };
            this.insertOpTableIfNotExist([op], true);
          };
          DialogWorkOrderEditComponent.prototype.insertOpTableIfNotExist = function(
            operationList,
            createProcurementRequest,
            bireTaskDTO
          ) {
            var _this = this;
            var e_1, _a;
            var _loop_1 = function(op) {
              if (
                !this_1.opTable.some(function(o) {
                  return (
                    Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['isEqual'])(o.code, op.code) &&
                    Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__['isEqual'])(o.version, op.version)
                  );
                })
              ) {
                this_1.opTable.push(op);
              }
            };
            var this_1 = this;
            try {
              for (
                var operationList_1 = __values(operationList), operationList_1_1 = operationList_1.next();
                !operationList_1_1.done;
                operationList_1_1 = operationList_1.next()
              ) {
                var op = operationList_1_1.value;
                _loop_1(op);
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (operationList_1_1 && !operationList_1_1.done && (_a = operationList_1.return))
                  _a.call(operationList_1);
              } finally {
                if (e_1) throw e_1.error;
              }
            }
            if (createProcurementRequest) {
              var bireOperationDTOs_1 = [];
              this.opTable.forEach(function(o) {
                if (o.bidmOperation.bireOperationDTO) {
                  bireOperationDTOs_1.push(o.bidmOperation.bireOperationDTO);
                }
              });
              this.dialogWorkOrderEditService
                .initalizeWoProcurementRequestInput({
                  bireTaskDTO: bireTaskDTO,
                  bireOperationDTOs: bireOperationDTOs_1
                })
                .subscribe(function(results) {
                  results.forEach(function(input) {
                    var row = {
                      materials: input.pnCode,
                      requestedQuantity: input.quantity
                        ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_13__['NumberUtils'].roundNumber(
                            input.quantity,
                            2
                          )
                        : 1,
                      expectedOn: _this.workOrder.woScheduledStartDate,
                      criticality:
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                          .LOGISTICAL_CRITICALITY_ROUTINE,
                      recepient: !!_this.bidtSiteDTO ? _this.bidtSiteDTO.siteName : '',
                      recepientDesc:
                        !!_this.bidtWarehouseDTOs && !!_this.workOrder.bidtWarehouseId
                          ? _this.bidtWarehouseDTOs.filter(function(warehouse) {
                              return warehouse.wareHouseId === _this.workOrder.bidtWarehouseId;
                            })[0].whName
                          : ''
                    };
                    _this.loadUnits(row);
                    _this.procurementRequestRows.push(row);
                  });
                });
            }
          };
          DialogWorkOrderEditComponent.prototype.onSelectedDefect = function(event) {
            this.workOrder.woDescription = event.caDescription;
            this.eventCode = (event.bidoNotificationData && event.bidoNotificationData.notificationCode) || '';
          };
          DialogWorkOrderEditComponent.prototype.onSelectedEvol = function(evol) {
            this.evolution = {
              evolutionNumber: evol.evolutionNumber,
              evolutionRevisionNumber: evol.evolutionRevisionNumber,
              evolutionType: evol.evolutionType
            };
            this.workOrder.woDescription = evol.evolutionSummary;
            this.fillOperationListFromEvol();
            this.fillRelatedItemsList();
          };
          DialogWorkOrderEditComponent.prototype.deleteOperation = function() {
            var _this = this;
            this.opTable = this.opTable.filter(function(op) {
              return !_this.selectedOperations.includes(op);
            });
            this.selectedOperations = [];
          };
          DialogWorkOrderEditComponent.prototype.quickSearchBusinessPartner = function() {
            this.showQuickSearchBusinessPartnerPopup = true;
          };
          DialogWorkOrderEditComponent.prototype.setSelectedBusinessPartner = function(event) {
            this.workOrder.warrantyProvider = event.customerCode;
            if (event.customerName) {
              this.warrantyProviderName = event.customerName;
            }
          };
          DialogWorkOrderEditComponent.prototype.onWarrantyChange = function() {
            if (!this.workOrder.underWarranty) {
              this.warrantyProviderName = undefined;
              this.workOrder.warrantyProvider = undefined;
            }
          };
          DialogWorkOrderEditComponent.prototype.init = function() {
            this.warehouseList = [];
            this.typeList = [];
            this.userList = [];
            this.procurementRequests = [];
            this.procurementRequestRows = [];
            this.procurementRequestStatusList = [];
            this.procurementRequestTypes = [];
            this.awPropertiesConstants =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants'];
            this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          };
          DialogWorkOrderEditComponent.prototype.initOpTableCols = function() {
            this.opTableCols = [
              { field: 'code', alignment: 'left', width: '30%' },
              { field: 'version', alignment: 'left', width: '10%' },
              { field: 'rangeCode', alignment: 'left', width: '20%' },
              { field: 'qualification', alignment: 'left', width: '15%' },
              { field: 'designation', alignment: 'left', width: '25%' }
            ];
          };
          DialogWorkOrderEditComponent.prototype.fillOperationListFromTask = function() {
            var _this = this;
            var bireTaskDTOId = {
              taskCode: this.task.taskCode || '',
              taskVersion: this.task.taskVersion || ''
            };
            this.dialogWorkOrderEditService
              .findOperationsFromTaskAndRelatedTasks(bireTaskDTOId)
              .subscribe(function(operationList) {
                _this.convertBireOperationsAndInsertIfNotExist(operationList, _this.task);
              });
          };
          DialogWorkOrderEditComponent.prototype.convertBireOperationsAndInsertIfNotExist = function(
            operationList,
            bireTaskDTO
          ) {
            var operationRows = operationList.map(function(bireOperation) {
              var bidmOperationDTO = {
                bireOperationDTO: bireOperation
              };
              var operationRow = {
                bidmOperation: bidmOperationDTO,
                code: bireOperation.opeCode,
                rangeCode: bireOperation.rangeCode,
                version: bireOperation.opeVersion,
                designation: bireOperation.opeDesignation,
                qualification: bireOperation.opeQualification
              };
              return operationRow;
            });
            this.clearOperations();
            this.insertOpTableIfNotExist(operationRows, !this.isUpdateMode, bireTaskDTO);
          };
          DialogWorkOrderEditComponent.prototype.fillOperationListFromEvol = function() {
            var _this = this;
            this.dialogWorkOrderEditService
              .findOperationsFromEvolution(this.evolution)
              .subscribe(function(operationList) {
                _this.convertBireOperationsAndInsertIfNotExist(operationList);
              });
          };
          DialogWorkOrderEditComponent.prototype.fillRelatedItemsList = function() {
            var _this = this;
            if (
              this.workOrder.woType ===
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                .AIRM_WORK_ORDER_TYPE_TASK
            ) {
              var bireTaskDTOId = {
                taskCode: this.task.taskCode || '',
                taskVersion: this.task.taskVersion || ''
              };
              this.dialogWorkOrderEditService
                .findRelatedItemsFromTask(bireTaskDTOId)
                .subscribe(function(relatedItemList) {
                  _this.updateRelatedItemList(relatedItemList);
                });
            } else if (
              this.workOrder.woType ===
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                .AIRM_WORK_ORDER_TYPE_EVOLUTION
            ) {
              this.dialogWorkOrderEditService
                .findRelatedItemsFromEvolution(this.evolution)
                .subscribe(function(relatedItemList) {
                  _this.updateRelatedItemList(relatedItemList);
                });
            }
          };
          DialogWorkOrderEditComponent.prototype.updateRelatedItemList = function(relatedItemList) {
            this.relatedItemList = relatedItemList;
            if (relatedItemList.length === 1) {
              this.relatedItem = relatedItemList[0].value;
              this.onRelatedItemChange();
            }
          };
          DialogWorkOrderEditComponent.prototype.onRelatedItemChange = function() {
            this.fillRelatedAssetsList();
          };
          DialogWorkOrderEditComponent.prototype.fillRelatedAssetsList = function() {
            var _this = this;
            if (this._workPackage.assetCode) {
              var findRelatedAssetsInput = {
                assetCode: this._workPackage.assetCode,
                relatedItem: this.relatedItem
              };
              this.dialogWorkOrderEditService
                .findRelatedAssets(findRelatedAssetsInput)
                .subscribe(function(relatedAssetList) {
                  _this.relatedAssetList = relatedAssetList;
                });
            }
          };
          DialogWorkOrderEditComponent.prototype.initProcurementRequestTableCols = function() {
            this.procurementRequestTableCols = [
              { field: 'materials', alignment: 'left', width: '20%' },
              { field: 'requestedQuantity', alignment: 'left', width: '5%' },
              { field: 'unit', alignment: 'left', width: '5%' },
              { field: 'requestedPotential', alignment: 'left', width: '7%' },
              { field: 'potentialUnit', alignment: 'left', width: '7%' },
              { field: 'calendarPotential', alignment: 'left', width: '10%' },
              { field: 'expectedOn', alignment: 'left', width: '10%' },
              { field: 'criticality', alignment: 'left', width: '10%' },
              { field: 'recepient', alignment: 'left', width: '10%' },
              { field: 'action', alignment: 'center', width: '5%' }
            ];
          };
          DialogWorkOrderEditComponent.prototype.createProcReqItemRow = function(procurementRequest) {
            return procurementRequest.procReqItemsAndQtyIndicatorsDTO.map(function(procReqItemsAndQtyIndicatorsDTO) {
              var row = {
                procurementRequestId: procurementRequest.id,
                id: procReqItemsAndQtyIndicatorsDTO.id,
                procurementRequest: procurementRequest.procCode,
                procurementRequestDescription: procurementRequest.procType,
                recepient: !!procurementRequest.bidtSiteReceipt ? procurementRequest.bidtSiteReceipt.siteName : '',
                recepientDesc: !!procurementRequest.bidtWarehouseReceipt
                  ? procurementRequest.bidtWarehouseReceipt.whName
                  : '',
                expectedOn: procurementRequest.requestedDate,
                criticality: procurementRequest.criticality,
                materials: procReqItemsAndQtyIndicatorsDTO.birePn
                  ? procReqItemsAndQtyIndicatorsDTO.birePn.pnCode
                  : undefined,
                materialsDesc: procReqItemsAndQtyIndicatorsDTO.birePn
                  ? procReqItemsAndQtyIndicatorsDTO.birePn.articleDesignation
                  : undefined,
                requestedQuantity: procReqItemsAndQtyIndicatorsDTO.requestedQuantity
                  ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_13__['NumberUtils'].roundNumber(
                      _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_13__['NumberUtils'].fromString(
                        procReqItemsAndQtyIndicatorsDTO.requestedQuantity
                      ),
                      2
                    )
                  : 1,
                calendarPotential: procurementRequest.calendarPotential,
                potentialUnit: procurementRequest.potentialUnit,
                requestedPotential: procurementRequest.requestedPotential
                  ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_13__['NumberUtils'].roundNumber(
                      _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_13__['NumberUtils'].fromString(
                        procurementRequest.requestedPotential
                      ),
                      2
                    )
                  : undefined
              };
              return row;
            });
          };
          DialogWorkOrderEditComponent.prototype.addProcurementRequest = function() {
            var _this = this;
            this.procurementRequestRows.push({
              materials: undefined,
              materialsDesc: undefined,
              expectedOn: this.workOrder.woScheduledStartDate,
              requestedQuantity: 1,
              criticality:
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__['AWPropertiesConstants']
                  .LOGISTICAL_CRITICALITY_ROUTINE,
              recepient: !!this.bidtSiteDTO ? this.bidtSiteDTO.siteName : '',
              recepientDesc:
                !!this.bidtWarehouseDTOs && !!this.workOrder.bidtWarehouseId
                  ? this.bidtWarehouseDTOs.filter(function(warehouse) {
                      return warehouse.wareHouseId === _this.workOrder.bidtWarehouseId;
                    })[0].whName
                  : ''
            });
          };
          DialogWorkOrderEditComponent.prototype.openPnSearchDialog = function(row) {
            this.selectedProcurementRequestRow = row;
            this.searchPnDialogVisible = true;
          };
          DialogWorkOrderEditComponent.prototype.checkPn = function(pn) {
            if (pn) {
              this.selectedProcurementRequestRow.materials = pn.pnCode;
              this.selectedProcurementRequestRow.unit = pn.unitOfIssue;
              this.loadUnits(this.selectedProcurementRequestRow);
            }
          };
          DialogWorkOrderEditComponent.prototype.deleteProcurementRequest = function(row) {
            this.procurementRequestRows = this.procurementRequestRows.filter(function(pr) {
              return pr !== row;
            });
          };
          DialogWorkOrderEditComponent.prototype.loadUnits = function(row) {
            this.logisticsService.findBidoCounterReferencesByPnCode({ pnCode: row.materials }).subscribe({
              next: function(counterReferences) {
                row.units = counterReferences
                  .map(function(counterReference) {
                    return {
                      label: counterReference.unitCode + ' (' + counterReference.counterCode + ')',
                      value: counterReference.counterCode
                    };
                  })
                  .sort(function(s1, s2) {
                    return s1.label.localeCompare(s2.label);
                  });
              }
            });
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            DialogWorkOrderEditComponent.prototype,
            'workPackage',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Boolean),
              __metadata('design:paramtypes', [Boolean])
            ],
            DialogWorkOrderEditComponent.prototype,
            'isFromMaintenancePlanning',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            DialogWorkOrderEditComponent.prototype,
            'workOrderSelected',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            DialogWorkOrderEditComponent.prototype,
            'addWorkOrder',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Array),
              __metadata('design:paramtypes', [Array])
            ],
            DialogWorkOrderEditComponent.prototype,
            'workOrders',
            null
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogWorkOrderEditComponent.prototype,
            'familyCode',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogWorkOrderEditComponent.prototype,
            'variantCode',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogWorkOrderEditComponent.prototype,
            'onValidated',
            void 0
          );
          DialogWorkOrderEditComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-work-order-edition',
                template: __webpack_require__(
                  /*! ./dialog-work-order-edition.component.html */ './src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-work-order-edition.component.scss */ './src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__['SessionService'],
                _logistics_logistics_service__WEBPACK_IMPORTED_MODULE_16__['LogisticsService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__['MessageService'],
                _work_package_form_service__WEBPACK_IMPORTED_MODULE_19__['WorkPackageFormService'],
                _dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_20__['DialogWorkOrderEditService'],
                _human_resources_employee_form_employee_form_service__WEBPACK_IMPORTED_MODULE_15__[
                  'EmployeeFormService'
                ],
                _work_order_form_work_order_form_service__WEBPACK_IMPORTED_MODULE_18__['WorkOrderFormService'],
                _procurement_request_procurement_requests_table_service__WEBPACK_IMPORTED_MODULE_17__[
                  'ProcurementRequestsTableService'
                ],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__['PropertiesService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            DialogWorkOrderEditComponent
          );
          return DialogWorkOrderEditComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_12__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.module.ts':
      /*!*************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.module.ts ***!
  \*************************************************************************************************************************/
      /*! exports provided: DialogWorkOrderEditionModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogWorkOrderEditionModule',
          function() {
            return DialogWorkOrderEditionModule;
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
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_4__
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
        /* harmony import */ var _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../../shared/components/dialog-search-customer/dialog-search-customer.module */ './src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_defect_events_dialog_search_defect_events_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../../shared/components/dialog-search-defect-events/dialog-search-defect-events.module */ './src/app/shared/components/dialog-search-defect-events/dialog-search-defect-events.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_event_dialog_search_event_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../../../shared/components/dialog-search-event/dialog-search-event.module */ './src/app/shared/components/dialog-search-event/dialog-search-event.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_evolution_dialog_search_evolution_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../../../shared/components/dialog-search-evolution/dialog-search-evolution.module */ './src/app/shared/components/dialog-search-evolution/dialog-search-evolution.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_operation_dialog_search_operation_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../../../shared/components/dialog-search-operation/dialog-search-operation.module */ './src/app/shared/components/dialog-search-operation/dialog-search-operation.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../../../shared/components/dialog-search-pn/dialog-search-pn.module */ './src/app/shared/components/dialog-search-pn/dialog-search-pn.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_task_dialog_search_task_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../../../shared/components/dialog-search-task/dialog-search-task.module */ './src/app/shared/components/dialog-search-task/dialog-search-task.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dialog_work_order_edition_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./dialog-work-order-edition.component */ './src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.component.ts'
        );
        /* harmony import */ var _dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./dialog-work-order-edition.service */ './src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service.ts'
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
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__['DropdownModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_4__['TableModule'],
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule'],
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__['CheckboxModule'],
          _shared_components_dialog_search_defect_events_dialog_search_defect_events_module__WEBPACK_IMPORTED_MODULE_9__[
            'DialogSearchDefectEventsModule'
          ],
          _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_8__[
            'DialogSearchCustomerModule'
          ]
        ];
        var INTERNAL_MODULES = [
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_15__['ModalModule'],
          _shared_components_dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_13__[
            'DialogSearchPnModule'
          ]
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _dialog_work_order_edition_component__WEBPACK_IMPORTED_MODULE_16__['DialogWorkOrderEditComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [_dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_17__['DialogWorkOrderEditService']];
        var DialogWorkOrderEditionModule = /** @class */ (function() {
          function DialogWorkOrderEditionModule() {}
          DialogWorkOrderEditionModule = __decorate(
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
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_7__['AppCommonSharedModule'],
                    _shared_components_dialog_search_task_dialog_search_task_module__WEBPACK_IMPORTED_MODULE_14__[
                      'DialogSearchTaskModule'
                    ],
                    _shared_components_dialog_search_evolution_dialog_search_evolution_module__WEBPACK_IMPORTED_MODULE_11__[
                      'DialogSearchEvolutionModule'
                    ],
                    _shared_components_dialog_search_event_dialog_search_event_module__WEBPACK_IMPORTED_MODULE_10__[
                      'DialogSearchEventModule'
                    ],
                    _shared_components_dialog_search_operation_dialog_search_operation_module__WEBPACK_IMPORTED_MODULE_12__[
                      'DialogSearchOperationModule'
                    ]
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            DialogWorkOrderEditionModule
          );
          return DialogWorkOrderEditionModule;
        })();

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-defect-events/dialog-search-defect-events.component.html':
      /*!**********************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-defect-events/dialog-search-defect-events.component.html ***!
  \**********************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="80">\r\n  <a-header>\r\n    <div class="modal-title">{{ "defectEventPopin.title" | translate }}</div>\r\n\r\n    <!-- <i class="material-icons aw-icon aw-icon-with-border" (click)="onCancel()">close</i> -->\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="search-dialog-container">\r\n      <div class="section results-section">\r\n        <h4 class="section-title">{{ "global.results" | translate }} ({{ resultsTable ? resultsTable.length : 0 }})</h4>\r\n\r\n        <div class="section-content">\r\n          <p-table\r\n            [resizableColumns]="true"\r\n            #ptable\r\n            class="aw-table2"\r\n            [columns]="resultsTableCols"\r\n            [value]="resultsTable"\r\n            [(selection)]="selectedRow"\r\n            selectionMode="single"\r\n            [scrollable]="true"\r\n          >\r\n            <ng-template pTemplate="emptymessage">\r\n              <span *ngIf="!isLoading"> &nbsp;</span>\r\n\r\n              <div *ngIf="isLoading" class="aw-table-loading-indicator">\r\n                <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                <div class="lds-hourglass"></div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="caption">\r\n              <div class="aw-table-header">\r\n                <div class="aw-table-global-filter">\r\n                  <label class="aw-table-global-filter-label">\r\n                    <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    #ptableGlobalFilter\r\n                    class="aw-table-global-filter-input"\r\n                    type="text"\r\n                    placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                    (input)="ptable.filterGlobal($event.target.value, \'contains\')"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="colgroup" let-columns>\r\n              <colgroup>\r\n                <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n              </colgroup>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="header" let-columns>\r\n              <tr>\r\n                <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                  {{ "defectEventPopin." + col.field | translate }}\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n              <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                  <span *ngSwitchCase="\'isDeferred\'">\r\n                    <i\r\n                      *ngIf="rowData[col.field] !== null && rowData[col.field]"\r\n                      class="fa fa-fw fa-check"\r\n                      aria-hidden="true"\r\n                    ></i>\r\n                  </span>\r\n\r\n                  <span *ngSwitchDefault [title]="rowData[col.field]">{{ rowData[col.field] }}</span>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </p-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="onCancel()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button [disabled]="!this.selectedObject" color="primary" type="button" mat-raised-button (click)="onValidate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-defect-events/dialog-search-defect-events.component.ts':
      /*!********************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-defect-events/dialog-search-defect-events.component.ts ***!
  \********************************************************************************************************/
      /*! exports provided: DialogSearchDefectEventsComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchDefectEventsComponent',
          function() {
            return DialogSearchDefectEventsComponent;
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
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _dialog_search_defect_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./dialog-search-defect-events.service */ './src/app/shared/components/dialog-search-defect-events/dialog-search-defect-events.service.ts'
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

        var DialogSearchDefectEventsComponent = /** @class */ (function(_super) {
          __extends(DialogSearchDefectEventsComponent, _super);
          function DialogSearchDefectEventsComponent(dialogSearchDefectEventsService, sessionService, messageService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'DialogSearchDefectEventsComponent'
              ) || this;
            _this.dialogSearchDefectEventsService = dialogSearchDefectEventsService;
            _this.sessionService = sessionService;
            _this.messageService = messageService;
            _this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.resultsTable = [];
            _this.resultsTableCols = [
              { field: 'code', alignment: 'left' },
              { field: 'date', alignment: 'left' },
              { field: 'logNumber', alignment: 'left' },
              { field: 'context', alignment: 'left' },
              { field: 'description', alignment: 'left' },
              { field: 'correctiveDescription', alignment: 'left' },
              { field: 'isDeferred', alignment: 'center' },
              { field: 'deferralDelay', alignment: 'left' }
            ];
            return _this;
          }
          Object.defineProperty(DialogSearchDefectEventsComponent.prototype, 'selectedRow', {
            set: function(selectedRow) {
              this.selectedObject = selectedRow._obj;
            },
            enumerable: true,
            configurable: true
          });
          DialogSearchDefectEventsComponent.prototype.ngOnInit = function() {
            this.selectedObject = undefined;
            this.resultsTable = [];
            this.searchDefectEvents();
          };
          DialogSearchDefectEventsComponent.prototype.searchDefectEvents = function() {
            var _this = this;
            this.dialogSearchDefectEventsService
              .findDefectEventsByEquipmentCode({
                equipmentCode: this.equipmentCode,
                forWholeStructure: true
              })
              .subscribe(
                function(results) {
                  if (results) {
                    _this.selectedObject = undefined;
                    _this.resultsTable = results.map(function(findDefectEventsByEquipmentCodeOutput) {
                      var deferredDefectEventDTO = findDefectEventsByEquipmentCodeOutput.deferredDefectEventDTO;
                      deferredDefectEventDTO.caDescription = findDefectEventsByEquipmentCodeOutput.defectCADescription;
                      var notification = deferredDefectEventDTO.bidoNotificationData;
                      if (!notification) {
                        throw new Error('Missing notification data');
                      }
                      return {
                        code: notification.notificationCode,
                        date: notification.reportingPeriodStartDate
                          ? moment__WEBPACK_IMPORTED_MODULE_1__(notification.reportingPeriodStartDate).format(
                              _this.sessionService.dateTimeFormatMomentJS
                            )
                          : '',
                        logNumber: findDefectEventsByEquipmentCodeOutput.defectLogNumber,
                        context: findDefectEventsByEquipmentCodeOutput.defectDetectionContext,
                        description: findDefectEventsByEquipmentCodeOutput.defectDescription,
                        correctiveDescription: findDefectEventsByEquipmentCodeOutput.defectCADescription,
                        isDeferred: findDefectEventsByEquipmentCodeOutput.isDeferred,
                        deferralDelay: findDefectEventsByEquipmentCodeOutput.deferralDelay,
                        _obj: deferredDefectEventDTO
                      };
                    });
                  }
                },
                function() {
                  _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSearch'));
                }
              );
          };
          /*
      <summary>Emit the selectedObject on validate</summary>
      */
          DialogSearchDefectEventsComponent.prototype.onValidate = function() {
            this.onSelected.emit(this.selectedObject);
            this.selectedObject = undefined;
            this.display = false;
          };
          /*
      <summary>Close the pop up on cancel</summary>
      */
          DialogSearchDefectEventsComponent.prototype.onCancel = function() {
            this.display = false;
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(), __metadata('design:type', Object)],
            DialogSearchDefectEventsComponent.prototype,
            'onSelected',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            DialogSearchDefectEventsComponent.prototype,
            'equipmentCode',
            void 0
          );
          DialogSearchDefectEventsComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-search-defect-events',
                template: __webpack_require__(
                  /*! ./dialog-search-defect-events.component.html */ './src/app/shared/components/dialog-search-defect-events/dialog-search-defect-events.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _dialog_search_defect_events_service__WEBPACK_IMPORTED_MODULE_6__['DialogSearchDefectEventsService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__['SessionService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__['MessageService']
              ])
            ],
            DialogSearchDefectEventsComponent
          );
          return DialogSearchDefectEventsComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__['DialogComponent']);

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-defect-events/dialog-search-defect-events.module.ts':
      /*!*****************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-defect-events/dialog-search-defect-events.module.ts ***!
  \*****************************************************************************************************/
      /*! exports provided: DialogSearchDefectEventsModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchDefectEventsModule',
          function() {
            return DialogSearchDefectEventsModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dialog_search_defect_events_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./dialog-search-defect-events.component */ './src/app/shared/components/dialog-search-defect-events/dialog-search-defect-events.component.ts'
        );
        /* harmony import */ var _dialog_search_defect_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./dialog-search-defect-events.service */ './src/app/shared/components/dialog-search-defect-events/dialog-search-defect-events.service.ts'
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
        var EXTERNAL_MODULES = [primeng_table__WEBPACK_IMPORTED_MODULE_1__['TableModule']];
        var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_5__['ModalModule']];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _dialog_search_defect_events_component__WEBPACK_IMPORTED_MODULE_6__['DialogSearchDefectEventsComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _dialog_search_defect_events_service__WEBPACK_IMPORTED_MODULE_7__['DialogSearchDefectEventsService']
        ];
        var DialogSearchDefectEventsModule = /** @class */ (function() {
          function DialogSearchDefectEventsModule() {}
          DialogSearchDefectEventsModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS),
                exports: __spread(COMPONENTS),
                imports: __spread(
                  [
                    _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__['AngularCommonSharedModule'],
                    _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__['AppCommonSharedModule']
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            DialogSearchDefectEventsModule
          );
          return DialogSearchDefectEventsModule;
        })();

        /***/
      },

    /***/ './src/app/shared/components/dialog-search-defect-events/dialog-search-defect-events.service.ts':
      /*!******************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-defect-events/dialog-search-defect-events.service.ts ***!
  \******************************************************************************************************/
      /*! exports provided: DialogSearchDefectEventsService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSearchDefectEventsService',
          function() {
            return DialogSearchDefectEventsService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/api/fleet-business.api */ './src/app/shared/api/fleet-business.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

        var DialogSearchDefectEventsService = /** @class */ (function(_super) {
          __extends(DialogSearchDefectEventsService, _super);
          function DialogSearchDefectEventsService(http, appConfigService, fleetBusinessApi, fleetManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.fleetBusinessApi = fleetBusinessApi;
            _this.fleetManagementApi = fleetManagementApi;
            return _this;
          }
          /***********************************
     fleet business api
    ***********************************/
          DialogSearchDefectEventsService.prototype.findDefectEventsByEquipmentCode = function(input) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.findDefectEventsByEquipmentCode, input);
          };
          DialogSearchDefectEventsService.prototype.findBidoRootCause = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoRootCause, input);
          };
          DialogSearchDefectEventsService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__['AppConfigService'],
                _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_2__['FleetBusinessApi'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__['FleetManagementApi']
              ])
            ],
            DialogSearchDefectEventsService
          );
          return DialogSearchDefectEventsService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__['AbstractAwHttpService']);

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
      }
  }
]);
//# sourceMappingURL=default~maintenance-airworthiness-control-airworthiness-control-module~maintenance-maintenance-modul~d7fab608.js.map
