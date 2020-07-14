import { Component, Input } from '@angular/core';

import { SessionService } from '../../../services/session.service';
import { ControlByIdentifierDTO } from '../../../types/api-output-types/session/control-by-identifier-dto.interface';
import { DynamicAttributeType } from '../enums/dynamic-attribute-type.enum';
import { DynamicAttribute } from '../types/dynamic-attribute.interface';

@Component({
  selector: 'aw-dynamic-attribute',
  templateUrl: './dynamic-attribute.component.html'
})
export class DynamicAttributeComponent {
  @Input() public workflowControl: ControlByIdentifierDTO | undefined;
  @Input() public attribute: DynamicAttribute;
  @Input() public isReadOpenMode: boolean;

  public constructor(public sessionService: SessionService) {}

  public isCalendarAttribute(attribute: DynamicAttribute): boolean {
    return attribute.type === DynamicAttributeType.Date;
  }

  public isCheckboxAttribute(attribute: DynamicAttribute): boolean {
    return attribute.type === DynamicAttributeType.Boolean;
  }

  public isDropdownAttribute(attribute: DynamicAttribute): boolean {
    return attribute.type === DynamicAttributeType.List;
  }

  public isInputAttribute(attribute: DynamicAttribute): boolean {
    return attribute.type === DynamicAttributeType.Text;
  }

  public isRequired(): boolean | undefined {
    return this.workflowControl && this.workflowControl.isMandatory ? true : undefined;
  }

  public isDisabled(): boolean {
    return this.isReadOpenMode || (!!this.workflowControl && !!this.workflowControl.isReadOnly);
  }
}
