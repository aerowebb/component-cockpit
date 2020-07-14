import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../../shared/services/properties.service';
import { BidoNotificationTypeDTO } from '../../../../../../../shared/types/api-types/bido-notification-type-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../../shared/types/label-value.interface';

@Component({
  selector: 'aw-event-type-form-popup',
  templateUrl: './event-type-form-popup.component.html'
})
export class EventTypeFormPopupComponent extends DialogComponent implements OnInit {
  @Output()
  public displayChange: EventEmitter<boolean>;

  @Input()
  public eventType: BidoNotificationTypeDTO;

  @Input()
  public isNewEventType: boolean;

  @Output()
  public onCreate: EventEmitter<BidoNotificationTypeDTO>;

  @Output()
  public onUpdate: EventEmitter<BidoNotificationTypeDTO>;

  public readonly componentId: string;

  public typeCategories: LabelValue<string>[];

  public displayValue: boolean;

  public constructor(
    private readonly propertiesService: PropertiesService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'EventTypeFormPopupComponent');

    this.onCreate = new EventEmitter<BidoNotificationTypeDTO>();
    this.onUpdate = new EventEmitter<BidoNotificationTypeDTO>();

    this.loadEventCategoryDropdown();
  }

  public ngOnInit() {
    if (!this.eventType) {
      this.eventType = {};
    }
  }

  public loadEventCategoryDropdown(): void {
    this.propertiesService.getValue('getEventCategoryMap').subscribe(
      (results) => {
        this.typeCategories = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetCategories'));
      }
    );
  }

  public associate(): void {
    if (!!this.eventType) {
      if (this.isNewEventType) {
        this.onCreate.emit(this.eventType);
        this.display = false;
      } else {
        this.onUpdate.emit(this.eventType);
        this.display = false;
      }
    } else {
      super.throwUnboundLocalError('associate', 'this.eventType');
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public enableAssociateButton(): boolean {
    if (!!this.eventType && !!this.eventType.typeCode && this.eventType.typeCode.trim().length !== 0) {
      return true;
    } else {
      return false;
    }
  }
}
