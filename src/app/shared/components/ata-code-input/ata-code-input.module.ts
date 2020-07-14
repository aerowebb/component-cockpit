import { NgModule } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AppCommonSharedModule } from '../../app-common-shared.module';
import { DialogSearchAtaCodeModule } from '../dialog-search-ata-code/dialog-search-ata-code.module';

import { AtaCodeInputComponent } from './ata-code-input.component';

/******************************************************************************
 * Modules
 *************************************************************************** */

const EXTERNAL_MODULES = [TooltipModule];

const INTERNAL_MODULES = [DialogSearchAtaCodeModule];

/******************************************************************************
 * Components
 *************************************************************************** */

const COMPONENTS = [AtaCodeInputComponent];

/******************************************************************************
 * Services
 *************************************************************************** */

const SERVICES = [];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [AngularCommonSharedModule, AppCommonSharedModule, ...EXTERNAL_MODULES, ...INTERNAL_MODULES],
  providers: [...SERVICES]
})
export class AtaCodeInputModule {}
