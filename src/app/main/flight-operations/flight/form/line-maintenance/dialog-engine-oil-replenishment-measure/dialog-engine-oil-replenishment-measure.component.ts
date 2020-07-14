import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';

@Component({
  selector: 'aw-dialog-line-maintenance-engine-oilreplenishment-measure',
  templateUrl: './dialog-engine-oil-replenishment-measure.component.html'
})
export class DialogEngineOilReplenishmentMeasureComponent extends DialogComponent implements OnInit {
  @Input()
  public coldReplenishmentDate: Date;

  @Input()
  public coldReplenishmentVolume: string;

  @Input()
  public hotReplenishmentDate: Date;

  @Input()
  public hotReplenishmentVolume: string;

  @Output()
  public onValidated: EventEmitter<{
    coldReplenishmentDate?: Date;
    coldReplenishmentVolume?: string;
    hotReplenishmentDate?: Date;
    hotReplenishmentVolume?: string;
  }>;

  public measure: {
    coldReplenishmentDate?: Date;
    coldReplenishmentVolume?: string;
    hotReplenishmentDate?: Date;
    hotReplenishmentVolume?: string;
  };

  public constructor(public sessionService: SessionService) {
    super(ComponentOpenMode.Write, 'DialogEngineOilReplenishmentMeasureComponent');

    this.init();
  }

  public ngOnInit(): void {
    this.measure.coldReplenishmentDate = this.coldReplenishmentDate;
    this.measure.coldReplenishmentVolume = this.coldReplenishmentVolume;
    this.measure.hotReplenishmentDate = this.hotReplenishmentDate;
    this.measure.hotReplenishmentVolume = this.hotReplenishmentVolume;
  }

  public isValid(): boolean {
    return (
      ObjectUtils.isDefined(this.measure.coldReplenishmentDate) ||
      ObjectUtils.isDefined(this.measure.hotReplenishmentDate)
    );
  }

  public validate(): void {
    this.onValidated.emit(this.measure);
    this.closeDialog();
  }

  private init(): void {
    this.measure = {};

    this.onValidated = new EventEmitter<{
      coldReplenishmentDate?: Date;
      coldReplenishmentVolume?: string;
      hotReplenishmentDate?: Date;
      hotReplenishmentVolume?: string;
    }>();
  }
}
