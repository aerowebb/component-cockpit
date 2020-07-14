import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[columnDef]'
})
export class ColumnDefDirective {
  @Input('columnDef') public name: string;

  public constructor(public template: TemplateRef<unknown>) {}

  public getName(): string {
    return this.name;
  }
}
