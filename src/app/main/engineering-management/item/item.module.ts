import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule as PrimeNgTableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';

import { AngularCommonSharedModule } from '../../../shared/angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../../shared/angular-generic-templates-shared-module';
import { AppCommonSharedModule } from '../../../shared/app-common-shared.module';
import { ComponentSidebarModule } from '../../../shared/components/component-sidebar/component-sidebar.mdule';
import { DialogBireDocumentModule } from '../../../shared/components/dialog-bire-document/dialog-bire-document.module';
import { DialogSearchItemModule } from '../../../shared/components/dialog-search-item/dialog-search-item.module';
import { DialogSearchRatingModule } from '../../../shared/components/dialog-search-rating/dialog-search-rating.module';
import { DialogSearchRatingService } from '../../../shared/components/dialog-search-rating/dialog-search-rating.service';
import { DialogSearchTaskModule } from '../../../shared/components/dialog-search-task/dialog-search-task.module';
import { DialogTableModule } from '../../../shared/components/dialog-table/dialog-table.module';
import { DynamicAttributesModule } from '../../../shared/components/dynamic-attributes/dynamic-attributes.module';
import { ModalModule } from '../../../shared/components/modal/modal.module';
import { StatusUpdateHistoryModule } from '../../../shared/components/status-update-history/status-update-history.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';

import { ItemFormComponent } from './form/item-form.component';
import { ItemFormService } from './form/item-form.service';
import { AddEvolutionPopupComponent } from './form/popups/add-evolution-popup/add-evolution-popup.component';
import { CauseOfRemovalPopupComponent } from './form/popups/cause-of-removal-popup/cause-of-removal-popup.component';
import { ConfigurationPackPopupComponent } from './form/popups/configuration-pack-popup/configuration-pack-popup.component';
import { DamLocTaskPopupComponent } from './form/popups/dam-loc-task-popup/dam-loc-task-popup.component';
import { DamageListPopupComponent } from './form/popups/damage-popup/damage-list-popup/damage-list-popup.component';
import { DamagePopupComponent } from './form/popups/damage-popup/damage-popup.component';
import { EditEvolutionPopupComponent } from './form/popups/edit-evolution-popup/edit-evolution-popup.component';
import { ItemFatherPopupComponent } from './form/popups/item-father-popup/item-father-popup.component';
import { ItemImportPopupComponent } from './form/popups/item-import-popup/item-import-popup.component';
import { ItemSonPopupComponent } from './form/popups/item-son-popup/item-son-popup.component';
import { ItemVersionPopupComponent } from './form/popups/item-version-popup/item-version-popup.component';
import { LocalisationListPopupComponent } from './form/popups/localisation-popup/localisation-list-popup/localisation-list-popup.component';
import { LocalisationPopupComponent } from './form/popups/localisation-popup/localisation-popup.component';
import { ReferenceMeasurementPopupComponent } from './form/popups/reference-measurement-popup/reference-measurement-popup.component';
import { RepairCenterPopupComponent } from './form/popups/repair-center-popup/repair-center-popup.component';
import { StatisticsPopupComponent } from './form/popups/statistics-popup/statistics-popup.component';
import { TaskPopupComponent } from './form/popups/task-popup/task-popup.component';
import { TilPopupComponent } from './form/popups/til-popup/til-popup.component';
import { ItemSearchComponent } from './search/item-search.component';
import { ItemSearchService } from './search/item-search.service';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [
  CalendarModule,
  CheckboxModule,
  DropdownModule,
  FileUploadModule,
  InputTextareaModule,
  KeyFilterModule,
  RadioButtonModule,
  SelectButtonModule,
  TooltipModule,
  TreeModule,
  PrimeNgTableModule
];

const INTERNAL_MODULES = [
  DialogSearchItemModule,
  DialogSearchRatingModule,
  DialogSearchTaskModule,
  DialogTableModule,
  DynamicAttributesModule,
  ModalModule,
  StatusUpdateHistoryModule,
  TableModule
];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [
  AddEvolutionPopupComponent,
  CauseOfRemovalPopupComponent,
  ConfigurationPackPopupComponent,
  DamageListPopupComponent,
  DamagePopupComponent,
  DamLocTaskPopupComponent,
  EditEvolutionPopupComponent,
  ItemFatherPopupComponent,
  ItemSonPopupComponent,
  ItemVersionPopupComponent,
  LocalisationListPopupComponent,
  LocalisationPopupComponent,
  ReferenceMeasurementPopupComponent,
  RepairCenterPopupComponent,
  StatisticsPopupComponent,
  TaskPopupComponent,
  ItemImportPopupComponent,
  TilPopupComponent
];

const DYNAMIC_COMPONENTS = [ItemFormComponent, ItemSearchComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [DialogSearchRatingService, ItemFormService, ItemSearchService];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS],
  imports: [
    AngularCommonSharedModule,
    AngularGenericTemplatesSharedModule,
    AppCommonSharedModule,
    ComponentSidebarModule,
    DialogBireDocumentModule,
    TableModule,
    DynamicComponentLoaderModule.forChild(DYNAMIC_COMPONENTS),
    ...EXTERNAL_MODULES,
    ...INTERNAL_MODULES
  ],
  providers: [...SERVICES]
})
export class ItemModule {}
