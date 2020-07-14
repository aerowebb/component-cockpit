import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[headerColumnDef]'
})
export class HeaderColumnDefDirective {
  public constructor(public template: TemplateRef<unknown>) {}
}
