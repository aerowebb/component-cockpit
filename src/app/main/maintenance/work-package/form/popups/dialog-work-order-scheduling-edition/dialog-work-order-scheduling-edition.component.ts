import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { WorkPackageFormService } from '../../work-package-form.service';

export interface WorkOrderScheduleInfo {
  assignedTo?: string;
  woScheduledStartDate?: Date;
  woScheduledEndDate?: Date;
}

@Component({
  selector: 'aw-dialog-work-order-scheduling-edition',
  styleUrls: ['./dialog-work-order-scheduling-edition.component.scss'],
  templateUrl: './dialog-work-order-scheduling-edition.component.html'
})
export class DialogWorkOrderSchedulingEditComponent extends DialogComponent implements OnInit {
  @Output()
  public onValidated: EventEmitter<WorkOrderScheduleInfo>;

  public userList: SelectItem[];
  public woScheduleInfo: WorkOrderScheduleInfo;

  public constructor(public sessionService: SessionService, public wpFormService: WorkPackageFormService) {
    super(ComponentOpenMode.Write, 'DialogWorkOrderSchedulingEditComponent');
    this.init();
  }

  public ngOnInit(): void {
    this.wpFormService.userList$.subscribe((list) => (this.userList = list));
  }

  private init(): void {
    this.onValidated = new EventEmitter<WorkOrderScheduleInfo>();
    this.woScheduleInfo = {
      assignedTo: undefined,
      woScheduledEndDate: undefined,
      woScheduledStartDate: undefined
    };
  }

  public validate(): void {
    this.onValidated.emit( this.woScheduleInfo );
    this.closeDialog();
  }
}
