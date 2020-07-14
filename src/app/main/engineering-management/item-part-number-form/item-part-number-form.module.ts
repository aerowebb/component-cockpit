import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogSearchItemModule } from '../../../shared/components/dialog-search-item/dialog-search-item.module';
import { DialogSearchPartModule } from '../../../shared/components/dialog-search-part/dialog-search-part.module';
import { DialogStatusModule } from '../../../shared/components/dialog-status/dialog-status.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DynamicAttributesModule } from '../../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { ItemPartNumberComponent } from './form/item-part-number.component';
import { ItemPartNumberService } from './form/item-part-number.service';
import { AddAssociatedConfigPackPopupComponent } from './popups/add-associated-config-pack-popup/add-associated-config-pack-popup.component';
import { AddConfigPackComponent } from './popups/add-config-pack/add-config-pack.component';
import { AddRulePopupComponent } from './popups/add-rule-popup/add-rule-popup.component';
import { AlternativesPnPopupComponent } from './popups/alternatives-pn-popup/alternatives-pn-popup.component';
import { ConfigPackCompatibilityPopupComponent } from './popups/config-pack-compatibility-popup/config-pack-compatibility-popup.component';
import { ShowPacksPopupComponent } from './popups/show-packs-popup/show-packs-popup.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  CheckboxModule,
  DropdownModule,
  FileUploadModule,
  InputTextareaModule,
  TooltipModule,
  RadioButtonModule,
  InputTextareaModule,
  PrimeNgTableModule
];

const INTERNAL_MODULES = [
  ComponentSidebarModule,
  DialogTableModule,
  DynamicAttributesModule,
  ModalModule,
  DialogStatusModule,
  DialogSearchItemModule,
  DialogSearchPartModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [
  AddRulePopupComponent,
  AlternativesPnPopupComponent,
  AddConfigPackComponent,
  ConfigPackCompatibilityPopupComponent,
  ShowPacksPopupComponent,
  AddAssociatedConfigPackPopupComponent
];

const DYNAMIC_COMPONENTS = [ItemPartNumberComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [ItemPartNumberService];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    TableModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class ItemPartNumberFormModule {}
