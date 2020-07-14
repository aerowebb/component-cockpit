import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { SelectButtonModule } from 'primeng/selectbutton';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
import { DialogMeasureReportModule } from '../dialog-measure-report/dialog-measure-report.module';
import { ModalModule } from '../modal/modal.module';

import { DialogMeasureUpdateComponent } from './dialog-measure-update.component';
import { DialogMeasureUpdateService } from './dialog-measure-update.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  DialogModule,
  DropdownModule,
  MessageModule,
  SelectButtonModule,
  CalendarModule,
  KeyFilterModule,
  CheckboxModule,
  DialogMeasureReportModule
];

const INTERNAL_MODULES = [ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogMeasureUpdateComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [DialogMeasureUpdateService];

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
export class DialogMeasureUpdateModule {}
