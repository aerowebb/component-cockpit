import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../../../shared/services/session.service';
import { BidtCompanyHolidayDTO } from '../../../../../../../shared/types/api-types/bidt-company-holiday-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-public-holiday',
  templateUrl: './dialog-public-holiday.component.html'
})
export class DialogPublicHolidayComponent extends DialogComponent implements OnInit {
  @Output()
  public displayChange: EventEmitter<boolean>;

  @Input()
  public publicHoliday: BidtCompanyHolidayDTO;

  @Input()
  public isNewPublicHoliday: boolean;

  @Output()
  public onCreate: EventEmitter<BidtCompanyHolidayDTO>;

  @Output()
  public onUpdate: EventEmitter<BidtCompanyHolidayDTO>;

  public readonly componentId: string;

  public displayValue: boolean;

  public constructor(public sessionService: SessionService) {
    super(ComponentOpenMode.Write, 'DialogPublicHolidayComponent');

    this.onCreate = new EventEmitter<BidtCompanyHolidayDTO>();
    this.onUpdate = new EventEmitter<BidtCompanyHolidayDTO>();
  }

  public ngOnInit() {
    if (!this.publicHoliday) {
      this.publicHoliday = {};
    }
  }

  public associate(): void {
    if (!!this.publicHoliday) {
      if (this.isNewPublicHoliday) {
        this.onCreate.emit(this.publicHoliday);
        this.display = false;
      } else {
        this.onUpdate.emit(this.publicHoliday);
        this.display = false;
      }
    } else {
      super.throwUnboundLocalError('associate', 'this.publicHoliday');
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public enableAssociateButton(): boolean {
    if (!!this.publicHoliday && !!this.publicHoliday.compHolidayStartDate && !!this.publicHoliday.compHolidayEndDate) {
      return true;
    } else {
      return false;
    }
  }
}
