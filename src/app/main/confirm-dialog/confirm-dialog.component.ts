import { Component, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs/operators';

import { ComponentOpenMode } from '../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../shared/services/confirmation.service';
import { Confirmation } from '../../shared/types/confirmation.interface';
import { GenericComponent } from '../../shared/types/generic-component';

@Component({
  selector: 'aw-confirm-dialog',
  styles: [':host { white-space: pre-line }'],
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent extends GenericComponent {
  public confirmation: Confirmation;
  public contextMessages: string[];
  public display: boolean;
  public mainMessage: string;
  public title: string;

  private acceptEvent: EventEmitter<unknown>;
  private rejectEvent: EventEmitter<unknown> | undefined;
  private delayedEvent: EventEmitter<unknown> | undefined;

  public constructor(
    private readonly confirmationService: ConfirmationService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write);

    this.contextMessages = [];
    this.display = false;
    this.mainMessage = '';

    this.registerObservables();
  }

  public getComponentName(): string {
    return 'ConfirmDialogComponent';
  }

  public onModalClosed(visible: boolean) {
    this.display = visible;
    if (!visible && this.confirmation.delayCallback && this.delayedEvent) {
      this.delayedEvent.emit();
      this.delayedEvent = undefined;
    }
  }

  public accept(): void {
    if (this.confirmation.delayCallback) {
      this.delayedEvent = this.acceptEvent;
    } else {
      this.acceptEvent.emit();
    }

    this.close();
  }

  public close(): void {
    this.display = false;
  }

  public reject(): void {
    if (this.rejectEvent) {
      if (this.confirmation.delayCallback) {
        this.delayedEvent = this.rejectEvent;
      } else {
        this.rejectEvent.emit();
      }
    }

    this.close();
  }

  private createMessage(): void {
    this.mainMessage = this.translateService.instant(this.confirmation.messageKey, this.confirmation.interpolateParams);
    if (!!this.confirmation.contextKeys && this.confirmation.contextKeys.length > 0) {
      this.contextMessages = this.confirmation.contextKeys.map((key) =>
        this.translateService.instant(key, this.confirmation.interpolateParams)
      );
    } else {
      this.contextMessages = [];
    }
  }

  private handleConfirmation(confirmation: Confirmation): void {
    if (!!confirmation) {
      this.confirmation = confirmation;
      this.delayedEvent = undefined;

      if (this.confirmation.accept) {
        this.acceptEvent = new EventEmitter<unknown>();
        this.acceptEvent.subscribe(this.confirmation.accept);
      }

      if (this.confirmation.reject) {
        this.rejectEvent = new EventEmitter<unknown>();
        this.rejectEvent.subscribe(this.confirmation.reject);
      }

      this.createMessage();

      this.display = true;
    }
  }

  private registerObservables(): void {
    this.confirmationService.requireConfirmation$.pipe(takeUntil(this.unsubscribe)).subscribe((confirmation) => {
      this.handleConfirmation(confirmation);

      this.title = 'global.confirm';
    });

    this.confirmationService.requireDeleteConfirmation$.pipe(takeUntil(this.unsubscribe)).subscribe((confirmation) => {
      this.handleConfirmation(confirmation);

      this.title = 'global.confirmDelete';
    });
  }
}
