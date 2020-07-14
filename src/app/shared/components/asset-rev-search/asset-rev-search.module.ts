import { NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DialogSearchCustomerModule } from '../../../shared/components/dialog-search-customer/dialog-search-customer.module';
import { ManageSearchCriteriaModule } from '../../../shared/components/manage-search-criteria/manage-search-criteria.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';

import { AssetRevSearchComponent } from './asset-rev-search.component';
import { AssetRevSearchService } from './asset-rev-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CheckboxModule,
  DropdownModule,
  MessageModule,
  OverlayPanelModule,
  RadioButtonModule,
  SelectButtonModule,
  TableModule,
  TooltipModule
];

const INTERNAL_MODULES = [
  DialogSearchCustomerModule,
  ModalModule,
  ManageSearchCriteriaModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [AssetRevSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [AssetRevSearchService];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class AssetRevSearchModule {}
