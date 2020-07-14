import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[tableActionsDef]'
})
export class TableActionsDefDirective {
  public constructor(public template: TemplateRef<unknown>) {}
}
