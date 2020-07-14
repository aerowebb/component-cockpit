import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule as PrimeNGTableModule } from 'primeng/table';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AppCommonSharedModule } from '../../app-common-shared.module';

import { ColumnDefDirective } from './column-def.directive';
import { HeaderColumnDefDirective } from './header-column-def.directive';
import { RowExpansionDefDirective } from './row-expansion-def.directive';
import { TableActionsDefDirective } from './table-actions-def.directive';
import { TableComponent } from './table.component';

// ////////////////////////////////////////////////////////////////////////////
// Modules
// ////////////////////////////////////////////////////////////////////////////
const EXTERNAL_MODULES = [MatCheckboxModule, MatRadioModule, MultiSelectModule, PrimeNGTableModule];

// ////////////////////////////////////////////////////////////////////////////
// Components
// ////////////////////////////////////////////////////////////////////////////
const COMPONENTS = [TableComponent];

// ////////////////////////////////////////////////////////////////////////////
// Directives
// ////////////////////////////////////////////////////////////////////////////
const DIRECTIVES = [ColumnDefDirective, HeaderColumnDefDirective, RowExpansionDefDirective, TableActionsDefDirective];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [...COMPONENTS, ...DIRECTIVES],
  imports: [AngularCommonSharedModule, AppCommonSharedModule, ...EXTERNAL_MODULES]
})
export class TableModule {}
