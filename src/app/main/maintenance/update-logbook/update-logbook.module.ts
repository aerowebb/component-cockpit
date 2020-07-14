import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { DialogRecordReportComponent } from './form/dialog-record-report/dialog-record-report.component';
import { UpdateLogbookFormComponent } from './form/update-logbook-form.component';
import { UpdateLogbookFormService } from './form/update-logbook-form.service';
import { ValidWoLineComponent } from './form/valid-wo-line/valid-wo-line.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  DropdownModule,
  TableModule,
  TooltipModule,
  TreeTableModule,
  TreeModule,
  SelectButtonModule,
  OverlayPanelModule
];

const INTERNAL_MODULES = [ModalModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [DialogRecordReportComponent];

const DYNAMIC_COMPONENTS = [UpdateLogbookFormComponent, ValidWoLineComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [UpdateLogbookFormService];

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
export class UpdateLogbookModule {}
