import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

const ANGULAR_MODULES = [CommonModule, FormsModule];

@NgModule({
  exports: [...ANGULAR_MODULES],
  imports: [...ANGULAR_MODULES]
})
export class AngularCommonSharedModule {}
