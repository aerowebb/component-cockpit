import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { BidoEquipmentDTO } from '../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { GenericComponent } from '../../../../../shared/types/generic-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { BidoEquipmentUtils } from '../../../../../shared/utils/bido-equipment-utils';
import { ForecastFormService, UpcomingEventStatus } from '../forecast-form.service';

@Component({
  selector: 'aw-forecast-form-filter-list',
  templateUrl: './forecast-filter-list.component.html'
})
export class FilterListForecastFormComponent extends GenericComponent {
  @Input('topAssetList')
  public set topBidoEquipmentList(value: BidoEquipmentDTO[]) {
    if (value) {
      this.topAssetList = value.map((elt) => {
        return {
          label: BidoEquipmentUtils.toString(elt),
          value: elt
        };
      });
    }
  }

  @Input()
  public upcomingEventTypeList: LabelValue<string>[];

  @Input()
  public set workPackageStatusList(value: LabelValue<string>[]) {
    if (value) {
      this.filteredWorkPackageStatusList = value.filter(
        (elt) => elt.value !== AWPropertiesConstants.AIRM_PROJECT_STATUS_LINE_MAINTENANCE
      );
    }
  }

  public filteredWorkPackageStatusList: LabelValue<string>[];
  public overlayVisible: boolean;
  public topAssetList: LabelValue<BidoEquipmentDTO>[];
  public upcomingEventStatusList: LabelValue<UpcomingEventStatus>[];

  public constructor(
    public forecastFormService: ForecastFormService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write);

    this.init();
    this.setUpcomingEventStatusList();
  }

  public getComponentName(): string {
    return 'FilterListForecastFormComponent';
  }

  public filterForecast(): void {
    this.forecastFormService.filterForecast();
  }

  public hideOverlay(): void {
    this.overlayVisible = false;
  }

  public showOverlay(): void {
    this.overlayVisible = true;
  }

  private init(): void {
    this.filteredWorkPackageStatusList = [];
    this.overlayVisible = false;
    this.topAssetList = [];
  }

  private setUpcomingEventStatusList(): void {
    const upcomingEventAssignmentInPastKey = this.getTranslateKey('upcomingEventAssignmentInPast');
    const upcomingEventAssignmentNokKey = this.getTranslateKey('upcomingEventAssignmentNok');
    const upcomingEventAssignmentOkKey = this.getTranslateKey('upcomingEventAssignmentOk');
    const upcomingEventAssignmentWarnKey = this.getTranslateKey('upcomingEventAssignmentWarn');
    this.translateService
      .get([
        upcomingEventAssignmentInPastKey,
        upcomingEventAssignmentNokKey,
        upcomingEventAssignmentOkKey,
        upcomingEventAssignmentWarnKey
      ])
      .subscribe({
        next: (results: object) => {
          this.upcomingEventStatusList = [
            {
              label: results[upcomingEventAssignmentOkKey] as string,
              value: UpcomingEventStatus.OK
            },
            {
              label: results[upcomingEventAssignmentWarnKey] as string,
              value: UpcomingEventStatus.WARN
            },
            {
              label: results[upcomingEventAssignmentNokKey] as string,
              value: UpcomingEventStatus.NOK
            },
            {
              label: results[upcomingEventAssignmentInPastKey] as string,
              value: UpcomingEventStatus.IN_PAST
            }
          ];
        }
      });
  }
}
