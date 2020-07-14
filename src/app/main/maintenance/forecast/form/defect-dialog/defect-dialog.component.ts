import { Component, Input, OnInit } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { MaintenanceForecastingDefect } from '../../../../../shared/types/api-output-types/maintenance-plan/maintenance-forecasting-defect.interface';
import { BidoNotificationDTO } from '../../../../../shared/types/api-types/bido-notification-dto.interface';
import { DeferredDefectEventDTO } from '../../../../../shared/types/api-types/deferred-defect-event-dto.interface';
import { DeferredDefectInfoDTO } from '../../../../../shared/types/api-types/deferred-defect-info-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { ObjectUtils } from '../../../../../shared/utils/object-utils';
import { EventModel } from '../forecast-form.service';

@Component({
  selector: 'aw-dialog-forecast-form-defect',
  templateUrl: './defect-dialog.component.html'
})
export class DefectForecastFormDialogComponent extends DialogComponent implements OnInit {
  @Input()
  public eventModel: EventModel<MaintenanceForecastingDefect>;

  public authorizedDelay: string | undefined;
  public defect: DeferredDefectEventDTO;
  public delayCategory: string | undefined;
  public notification: BidoNotificationDTO;

  public constructor(public sessionService: SessionService) {
    super(ComponentOpenMode.Write, 'DefectForecastFormDialogComponent');

    this.init();
  }

  public ngOnInit(): void {
    this.defect = this.eventModel._obj.deferredDefectEvent;
    this.notification = this.eventModel._obj.deferredDefectEvent.bidoNotificationData as BidoNotificationDTO;
    if (ObjectUtils.isDefined(this.defect.deferredDefectInfo)) {
      const deferredDefectInfo = this.defect.deferredDefectInfo as DeferredDefectInfoDTO;
      this.authorizedDelay = deferredDefectInfo.delayValue;
      this.delayCategory = deferredDefectInfo.delayCategory;
    }
  }

  private init(): void {
    this.authorizedDelay = undefined;
    this.delayCategory = undefined;
  }
}
