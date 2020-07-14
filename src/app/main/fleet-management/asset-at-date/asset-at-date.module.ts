import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { AtaCodeInputModule } from '../../../shared/components/ata-code-input/ata-code-input.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogSearchCustomerModule } from '../../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { DialogSearchModelModule } from '../../../shared/components/dialog-search-model/dialog-search-model.module';
import { DialogSearchRatingModule } from '../../../shared/components/dialog-search-rating/dialog-search-rating.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DialogWorkPackageModule } from '../../../shared/components/dialog-work-package/dialog-work-package.module';
import { DynamicAttributesModule } from '../../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { AssetAtDateFormComponent } from './form/asset-at-date-form.component';
import { AssetAtDateFormService } from './form/asset-at-date-form.service';
import { AssetAtDateSearchComponent } from './search/asset-at-date-search.component';
import { AssetAtDateSearchService } from './search/asset-at-date-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  CheckboxModule,
  DialogModule,
  DropdownModule,
  InputTextareaModule,
  KeyFilterModule,
  MessageModule,
  RadioButtonModule,
  SelectButtonModule,
  TooltipModule,
  TreeTableModule,
  KeyFilterModule,
  MessageModule,
  FileUploadModule,
  ChartModule,
  OverlayPanelModule,
  SplitButtonModule,
  TreeModule,
  PrimeNgTableModule
];

const INTERNAL_MODULES = [
  DialogTableModule,
  ModalModule,
  DialogSearchCustomerModule,
  DialogWorkPackageModule,
  TableModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [];

const DYNAMIC_COMPONENTS = [AssetAtDateSearchComponent, AssetAtDateFormComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [AssetAtDateSearchService, AssetAtDateFormService];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS, AssetAtDateFormComponent],
  imports: [
    AtaCodeInputModule,
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    DynamicAttributesModule,
    AppCommonSharedModule,
    ManageSearchCriteriaModule,
    DialogSearchModelModule,
    ComponentSidebarModule,
    DialogSearchRatingModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES, DatePipe]
})
export class AssetAtDateModule {}
