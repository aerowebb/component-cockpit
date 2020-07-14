import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

import { AngularCommonSharedModule } from '../../angular-common-shared.module';
import { AngularGenericTemplatesSharedModule } from '../../angular-generic-templates-shared-module';

import { StepperComponent } from './stepper.component';

const MODULES = [MatIconModule, MatTooltipModule, TranslateModule];

const COMPONENTS = [StepperComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [AngularCommonSharedModule, AngularGenericTemplatesSharedModule, ...MODULES],
  exports: [...COMPONENTS]
})
export class StepperModule {}
