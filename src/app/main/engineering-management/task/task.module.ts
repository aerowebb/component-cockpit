import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ListboxModule } from 'primeng/listbox';
import { MessageModule } from 'primeng/message';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogBireDocumentModule } from '../../../shared/components/dialog-bire-document/dialog-bire-document.module';
import { DialogSearchEvolutionModule } from '../../../shared/components/dialog-search-evolution/dialog-search-evolution.module';
import { DialogSearchItemModule } from '../../../shared/components/dialog-search-item/dialog-search-item.module';
import { DialogSearchOperationModule } from '../../../shared/components/dialog-search-operation/dialog-search-operation.module';
import { DialogSearchPartModule } from '../../../shared/components/dialog-search-part/dialog-search-part.module';
import { DialogSearchQualificationModule } from '../../../shared/components/dialog-search-qualification/dialog-search-qualification.module';
import { DialogSearchTaskModule } from '../../../shared/components/dialog-search-task/dialog-search-task.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DynamicAttributesHistoryModule } from '../../../shared/components/dynamic-attributes-history/dynamic-attributes-history.module';
import { DynamicAttributesModule } from '../../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { StatusUpdateHistoryModule } from '../../../shared/components/status-update-history/status-update-history.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { DialogAssociatedTasksPopupComponent } from './form/dialog-associated-tasks-popup/dialog-associated-tasks-popup.component';
import { DialogEvolutionsPopupComponent } from './form/dialog-evolutions-popup/dialog-evolutions-popup.component';
import { DialogItemVersionsPopupComponent } from './form/dialog-item-versions-popup/dialog-item-versions-popup.component';
import { DialogMeasureFormulaPopupComponent } from './form/dialog-measure-formula-popup/dialog-measure-formula-popup.component';
import { DialogMeasurePopupComponent } from './form/dialog-measure-popup/dialog-measure-popup.component';
import { DialogMeasureSearchPopupComponent } from './form/dialog-measure-popup/dialog-measure-search-popup/dialog-measure-search-popup.component';
import { DialogMeasureToolPopupComponent } from './form/dialog-measure-tool-popup/dialog-measure-tool-popup.component';
import { DialogOperationsPopupComponent } from './form/dialog-operations-popup/dialog-operations-popup.component';
import { DialogQualificationsPopupComponent } from './form/dialog-qualifications-popup/dialog-qualifications-popup.component';
import { DialogSearchEvolutionPopupComponent } from './form/dialog-search-evolution-popup/dialog-search-evolution-popup.component';
import { DialogTilsPopupComponent } from './form/dialog-tils-popup/dialog-tils-popup.component';
import { TaskFormComponent } from './form/task-form.component';
import { TaskFormService } from './form/task-form.service';
import { TaskImportPopupComponent } from './form/task-import-popup/task-import-popup.component';
import { TaskSearchComponent } from './search/task-search.component';
import { TaskSearchService } from './search/task-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  CheckboxModule,
  DropdownModule,
  ListboxModule,
  FileUploadModule,
  PrimeNgTableModule,
  TooltipModule,
  KeyFilterModule,
  MessageModule,
  TreeTableModule
];

const INTERNAL_MODULES = [
  ComponentSidebarModule,
  DialogBireDocumentModule,
  DialogSearchEvolutionModule,
  DialogSearchItemModule,
  DialogSearchOperationModule,
  DialogSearchQualificationModule,
  DialogSearchTaskModule,
  DialogTableModule,
  DynamicAttributesHistoryModule,
  DynamicAttributesModule,
  ModalModule,
  StatusUpdateHistoryModule,
  TableModule,
  DialogSearchPartModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [
  DialogAssociatedTasksPopupComponent,
  DialogEvolutionsPopupComponent,
  DialogItemVersionsPopupComponent,
  DialogOperationsPopupComponent,
  DialogMeasurePopupComponent,
  DialogMeasureSearchPopupComponent,
  DialogMeasureToolPopupComponent,
  DialogMeasureFormulaPopupComponent,
  DialogQualificationsPopupComponent,
  DialogTilsPopupComponent,
  DialogSearchEvolutionPopupComponent,
  TaskImportPopupComponent
];

const DYNAMIC_COMPONENTS = [TaskFormComponent, TaskSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [TaskFormService, TaskSearchService];

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
export class TaskModule {}
