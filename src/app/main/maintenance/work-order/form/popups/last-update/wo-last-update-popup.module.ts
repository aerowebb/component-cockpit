import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../../../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../../../../shared/app-common-shared.module';
import { ModalModule } from '../../../../../../shared/components/modal/modal.module';

import { WOLastUpdatePopupComponent } from './wo-last-update-popup.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [CalendarModule, DropdownModule, TableModule, TooltipModule];

const INTERNAL_MODULES = [ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [WOLastUpdatePopupComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ]
})
export class WOLastUpdatePopupModule {}
