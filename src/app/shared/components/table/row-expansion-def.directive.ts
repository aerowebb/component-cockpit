import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[rowExpansionDef]'
})
export class RowExpansionDefDirective {
  public constructor(public template: TemplateRef<unknown>) {}
}
