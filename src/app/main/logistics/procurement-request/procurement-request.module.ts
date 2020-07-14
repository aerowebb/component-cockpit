import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogSearchEquipmentModule } from '../../../shared/components/dialog-search-equipment/dialog-search-equipment.module';
import { DialogSearchPnModule } from '../../../shared/components/dialog-search-pn/dialog-search-pn.module';
import { DialogSearchWorkOrderModule } from '../../../shared/components/dialog-search-work-order/dialog-search-work-order.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { DialogAddPopupComponent } from './form/dialog-add-popup/dialog-add-popup.component';
import { DialogEditQuantityComponent } from './form/dialog-edit-quantity/dialog-edit-quantity.component';
import { ProcurementRequestMvtStatusComponent } from './form/mvt-status/procurement-request-mvt-status.component';
import { ProcurementRequestFormComponent } from './form/procurement-request-form.component';
import { ProcurementRequestFormService } from './form/procurement-request-form.service';
import { ProcurementRequestReverseMvtStatusComponent } from './form/reverse-mvt-status/procurement-request-reverse-mvt-status.component';
import { ProcurementRequestPopupModule } from './search/procurement-request-popup/procurement-request-popup.module';
import { ProcurementRequestSearchComponent } from './search/procurement-request-search.component';
import { ProcurementRequestSearchService } from './search/procurement-request-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  TooltipModule,
  DropdownModule,
  FileUploadModule,
  InputSwitchModule,
  SelectButtonModule,
  TableModule,
  CheckboxModule,
  ComponentSidebarModule,
  CalendarModule,
  PrimeNgTableModule,
  OverlayPanelModule,
  ProgressBarModule,
  ModalModule
];

const INTERNAL_MODULES = [
  DialogSearchEquipmentModule,
  DialogSearchPnModule,
  DialogSearchWorkOrderModule,
  ProcurementRequestPopupModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [
  DialogAddPopupComponent,
  DialogEditQuantityComponent,
  ProcurementRequestMvtStatusComponent,
  ProcurementRequestReverseMvtStatusComponent
];

const DYNAMIC_COMPONENTS = [ProcurementRequestFormComponent, ProcurementRequestSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [ProcurementRequestFormService, ProcurementRequestSearchService];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ManageSearchCriteriaModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES],
  exports: [DialogAddPopupComponent, ProcurementRequestMvtStatusComponent, ProcurementRequestReverseMvtStatusComponent]
})
export class ProcurementRequestModule {}
