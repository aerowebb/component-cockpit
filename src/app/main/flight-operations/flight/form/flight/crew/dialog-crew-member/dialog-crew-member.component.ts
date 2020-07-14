import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { BidtEmployeeDTO } from '../../../../../../../shared/types/api-types/bidt-employee-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-crew-member',
  templateUrl: './dialog-crew-member.component.html'
})
export class DialogCrewMemberComponent extends DialogComponent {
  public crewMember: BidtEmployeeDTO | undefined;

  // Inputs *********************************************************************

  @Input()
  public crewMemberList: SelectItem[];

  // Outputs ********************************************************************

  @Output()
  public onValidate: EventEmitter<BidtEmployeeDTO>;

  // ****************************************************************************

  public constructor() {
    super(ComponentOpenMode.Read, 'DialogCrewMemberComponent');

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.crewMember = undefined;
  }

  private onBeforeLoadOnce(): void {
    this.onValidate = new EventEmitter<BidtEmployeeDTO>();
  }

  // ****************************************************************************

  public validate(): void {
    this.onValidate.emit(this.crewMember as BidtEmployeeDTO);
    super.closeDialog();
  }
}
