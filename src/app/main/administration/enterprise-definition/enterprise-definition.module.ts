import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { EnterpriseDefinitionCompanyDialogComponent } from './company/company.component';
import { EnterpriseDefinitionComponent } from './enterprise-definition.component';
import { EnterpriseDefinitionService } from './enterprise-definition.service';
import { EnterpriseDefinitionSiteDialogComponent } from './site/site.component';
import { EnterpriseDefinitionWarehouseDialogComponent } from './warehouse/warehouse.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [DropdownModule, InputTextareaModule, SplitButtonModule, TooltipModule, TreeTableModule];

const INTERNAL_MODULES = [DialogTableModule, ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [
  EnterpriseDefinitionCompanyDialogComponent,
  EnterpriseDefinitionSiteDialogComponent,
  EnterpriseDefinitionWarehouseDialogComponent
];

const DYNAMIC_COMPONENTS = [EnterpriseDefinitionComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [EnterpriseDefinitionService];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class EnterpriseDefinitionModule {}
