import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as moment from 'moment';

import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';
import { SessionService } from '../../services/session.service';
import { DialogComponent } from '../../types/dialog-component';
import { ObjectUtils } from '../../utils/object-utils';
import { StringUtils } from '../../utils/string-utils';

@Component({
  selector: 'aw-dialog-update-task-application',
  templateUrl: './dialog-update-task-application.component.html'
})
export class DialogUpdateTaskApplicationComponent extends DialogComponent {
  @Input()
  public lastExecutionDateOfPreviousFlight: Date | undefined;

  @Output()
  public onValidated: EventEmitter<{ comment: string; date: Date }>;

  public comment: string | undefined;
  public date: Date | undefined;

  public constructor(public sessionService: SessionService, private readonly messageService: MessageService) {
    super(ComponentOpenMode.Write, 'DialogUpdateTaskApplicationComponent');

    this.init();
  }

  public isValid(): boolean {
    return ObjectUtils.isDefined(this.date) && !StringUtils.isNullOrEmpty(this.comment);
  }

  public validate(): void {
    if (moment(this.date).isAfter(moment())) {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnDateInFuture'));
    } else if (
      ObjectUtils.isDefined(this.lastExecutionDateOfPreviousFlight) &&
      moment(this.date).isBefore(moment(this.lastExecutionDateOfPreviousFlight))
    ) {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnDateBeforePreviousPostFlightTask'));
    } else {
      this.onValidated.emit({ comment: this.comment as string, date: this.date as Date });
      this.closeDialog();
    }
  }

  private init(): void {
    this.comment = undefined;
    this.date = undefined;

    this.onValidated = new EventEmitter<{ comment: string; date: Date }>();
  }
}
