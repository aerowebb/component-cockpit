import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';
import { PropertiesService } from '../../services/properties.service';
import { SessionService } from '../../services/session.service';
import { NotificationTableDto } from '../../types/api-types/notification-table-dto.interface';
import { DialogComponent } from '../../types/dialog-component';
import { LabelValue } from '../../types/label-value.interface';

import { CreateEventFormService } from './create-event-form.service';

@Component({
  selector: 'aw-create-event-form',
  templateUrl: './create-event-form.component.html'
})
export class CreateEventFormComponent extends DialogComponent implements OnInit {
  @Input()
  public event: NotificationTableDto;
  @Input()
  public assetTitle: string;
  @Input()
  public openMode: ComponentOpenMode;
  @Input()
  public set defaultCategory(categoryCode: string) {
    this.event.notificationCategroy = categoryCode;
    this.loadEventCategoryDropdown();
  }
  @Input()
  public types: SelectItem[];
  @Output()
  public onValidated: EventEmitter<NotificationTableDto>;
  public categories: LabelValue<string>[];
  public typeList: LabelValue<string>[];
  public maxDate: Date;
  public isCategoryDisabled: boolean;

  public constructor(
    private readonly createEventFormService: CreateEventFormService,
    public sessionService: SessionService,
    private readonly propertiesService: PropertiesService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Read, 'CreateEventComponent');
    this.categories = [];
    this.typeList = [];
    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<NotificationTableDto>();
    this.loadEventCategoryDropdown();
    this.loadTypeByCategory();
    this.maxDate = new Date();
  }

  public loadEventCategoryDropdown(): void {
    this.propertiesService.getValue('getEventCategoryMap').subscribe(
      (results) => {
        let categories: LabelValue<string>[] = results || [];
        if (!!this.event && !!this.event.notificationCategroy) {
          categories = results.filter((c) => {
            return c.value === this.event.notificationCategroy;
          });
          this.loadTypeByCategory();
        }
        this.categories = categories;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetCategories'));
      }
    );
  }

  public loadTypeByCategory(): void {
    if (!!this.event && !!this.event.notificationCategroy) {
      this.createEventFormService.findAllBidoNotificationTypeByTypeCategory(this.event.notificationCategroy).subscribe(
        (results) => {
          this.typeList = results || [];
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorONloadTypeByCategory'));
        }
      );
    } else {
      this.typeList = [];
    }
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);
    if (!this.event) {
      this.event = {
        bidoNotificationDTO: {
          bidoNotificationTypeDTO: {}
        }
      };
    }
    this.event.equipmentText = this.assetTitle;
  }

  public showValidate(): boolean {
    const response =
      !this.event.bidoNotificationDTO.typeCode ||
      !this.event.bidoNotificationDTO.reportingPeriodStartDate ||
      !this.event.notificationCategroy
        ? true
        : false;

    return response;
  }

  public validate(): void {
    this.onValidated.emit(this.event);
    this.closeDialog();
  }
}
