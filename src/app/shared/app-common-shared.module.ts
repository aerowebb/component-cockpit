import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

import { BreadcrumbModule } from '../main/breadcrumb/breadcrumb.module';

import { StepperModule } from './components/stepper/stepper.module';
import { KeyPressDirective } from './directives/key-press/key-press.directive';
import { NumericDirective } from './directives/numeric/numeric.directive';
import { ExtractTranslationPipe } from './pipes/extract-translation.pipe';
import { FormatNumberPipe } from './pipes/format-number.pipe';
import { FormatSelectOptionPipe } from './pipes/format-select-option.pipe';

const MODULES = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatMenuModule,
  MatTabsModule,
  MatTooltipModule,
  MatBadgeModule,
  BreadcrumbModule,
  MatSelectModule,
  StepperModule
];

const DIRECTIVES = [KeyPressDirective, NumericDirective];

const PIPES = [ExtractTranslationPipe, FormatNumberPipe, FormatSelectOptionPipe];

@NgModule({
  declarations: [...DIRECTIVES, ...PIPES],
  providers: [...PIPES],
  exports: [TranslateModule, ...MODULES, ...DIRECTIVES, ...PIPES]
})
export class AppCommonSharedModule {}
