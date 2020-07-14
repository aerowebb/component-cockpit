import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

import { AngularCommonSharedModule } from '../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogSearchEmployeeModule } from '../../shared/components/dialog-search-employee/dialog-search-employee.module';
import { DynamicAttributesService } from '../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { ModalModule } from '../../shared/components/modal/modal.module';
import { TableModule } from '../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../dynamic-component-loader/dynamic-component-loader.module';

import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeFormService } from './employee-form/employee-form.service';
import { AbsencePopupFormComponent } from './employee-form/popups/absence-popup-form/absence-popup-form.component';
import { DocumentPopupFormModule } from './employee-form/popups/document-popup-form/document-popup-form.module';
import { DocumentUrlPopupFormModule } from './employee-form/popups/document-url-popup-form/document-url-popup-form.module';
import { EvaluationPopupFormComponent } from './employee-form/popups/evaluation-popup-form/evaluation-popup-form.component';
import { ExpensePopupFormComponent } from './employee-form/popups/expense-popup-form/expense-popup-form.component';
import { HolidaysPopupFormComponent } from './employee-form/popups/holidays-popup-form/holidays-popup-form.component';
import { HourlyCostsPopupFormComponent } from './employee-form/popups/hourly-costs-popup-form/hourly-costs-popup-form.component';
import { MedicalExaminationPopupFormComponent } from './employee-form/popups/medical-examination-popup-form/medical-examination-popup-form.component';
import { QualificationPopupFormComponent } from './employee-form/popups/qualification-popup-form/qualification-popup-form.component';
import { QualificationPopupFormService } from './employee-form/popups/qualification-popup-form/qualification-popup-form.service';
import { TrainingPopupFormComponent } from './employee-form/popups/training-popup-form/training-popup-form.component';
import { WorkFlightTableFiltersComponent } from './employee-form/work-flight-table-filters/work-flight-table-filters.component';
import { EmployeePlanningModule } from './employee-planning/employee-planning.module';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeSearchService } from './employee-search/employee-search.service';
import { StaffAlertModule } from './staff-alert/staff-alert.module';

const INTERNAL_MODULES = [TableModule];

const PRIMENG_MODULES = [
  CalendarModule,
  CheckboxModule,
  DialogModule,
  DropdownModule,
  InputTextareaModule,
  OverlayPanelModule,
  RadioButtonModule,
  SplitButtonModule,
  PrimeNgTableModule,
  TooltipModule,
  TriStateCheckboxModule,
  FileUploadModule,
  KeyFilterModule,
  MessageModule,
  EmployeePlanningModule
];

const COMPONENTS = [WorkFlightTableFiltersComponent];

const DYNAMIC_COMPONENTS = [
  EmployeeSearchComponent,
  EmployeeFormComponent,
  AbsencePopupFormComponent,
  EvaluationPopupFormComponent,
  ExpensePopupFormComponent,
  HolidaysPopupFormComponent,
  HourlyCostsPopupFormComponent,
  MedicalExaminationPopupFormComponent,
  QualificationPopupFormComponent,
  TrainingPopupFormComponent
];

const SERVICES = [EmployeeSearchService, EmployeeFormService, QualificationPopupFormService, DynamicAttributesService];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ModalModule,
    ComponentSidebarModule,
    DialogSearchEmployeeModule,
    DocumentPopupFormModule,
    DocumentUrlPopupFormModule,
    StaffAlertModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...PRIMENG_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class HumanResourcesModule {}
