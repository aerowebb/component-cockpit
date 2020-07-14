import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';

interface DurationInterface {
  performedDuration?: Date;
  elapsedTime?: Date;
}

@Component({
  selector: 'aw-dialog-edit-duration',
  templateUrl: './dialog-edit-duration.component.html'
})
export class DialogEditDurationComponent extends DialogComponent {
  @Input()
  public existingDuration: string;

  @Input()
  public existingElapsed: string;

  @Output()
  public onValidated: EventEmitter<DurationInterface>;

  public duration: DurationInterface;
  public performedDuration: Date;
  public elapsedTime: Date;

  public constructor(public readonly sessionService: SessionService) {
    super(ComponentOpenMode.Write, 'DialogEditDurationComponent');
    this.onValidated = new EventEmitter<DurationInterface>();

    this.resetDuration();
  }

  private resetDuration() {
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

    this.performedDuration = date;
    this.elapsedTime = date;
  }

  public validate(): void {
    if (!!this.elapsedTime && !!this.performedDuration) {
      this.duration = {
        elapsedTime: this.elapsedTime,
        performedDuration: this.performedDuration
      };

      this.onValidated.emit(this.duration);
      this.closeDialog();
    }
  }

  public calculateElapsed() {
    const cloneElapsed = this.elapsedTime;

    if (!!this.performedDuration && !!cloneElapsed) {
      if (!!cloneElapsed && this.performedDuration.getHours() > cloneElapsed.getHours()) {
        cloneElapsed.setHours(this.performedDuration.getHours());
      }

      if (!!cloneElapsed && this.performedDuration.getMinutes() > cloneElapsed.getMinutes()) {
        cloneElapsed.setMinutes(this.performedDuration.getMinutes());
      }

      if (!!cloneElapsed && this.performedDuration.getSeconds() > cloneElapsed.getSeconds()) {
        cloneElapsed.setSeconds(this.performedDuration.getSeconds());
      }

      this.elapsedTime = new Date(cloneElapsed);
    }
  }
}
