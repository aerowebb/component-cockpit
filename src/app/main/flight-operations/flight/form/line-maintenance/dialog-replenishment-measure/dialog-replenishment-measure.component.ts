import { Component, EventEmitter, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { GenericPropertyConstants } from '../../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { NumberUtils } from '../../../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';
import { SelectItemUtils } from '../../../../../../shared/utils/select-item-utils';
import { ReplenishmentMeasure } from '../../../types/replenishment-measure.interface';

@Component({
  selector: 'aw-dialog-line-maintenance-replenishment-measure',
  templateUrl: './dialog-replenishment-measure.component.html'
})
export class DialogReplenishmentMeasureComponent extends DialogComponent {
  private static readonly DENSITY_LIST_FIRST_VALUE: number = 0.5;
  private static readonly DENSITY_LIST_LAST_VALUE: number = 1.6;
  private static readonly DENSITY_LIST_STEP: number = 0.1;

  @Output()
  public onValidated: EventEmitter<{ deltaValue: ReplenishmentMeasure; meteredSource: ReplenishmentMeasure }>;

  public date: Date | undefined;
  public deltaValue: ReplenishmentMeasure;
  public density: number | undefined;
  public densityList: SelectItem[];
  public meteredSource: ReplenishmentMeasure;
  public occurrence: string | undefined;
  public occurrenceList: SelectItem[];
  public origin: string | undefined;
  public originList: SelectItem[];
  public batchNumber: string | undefined;

  public constructor(
    public sessionService: SessionService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'DialogReplenishmentMeasureComponent');

    this.init();

    this.loadOccurrenceList();
    this.loadOriginList();

    this.setDensityList();
  }

  public isValid(): boolean {
    return (
      ObjectUtils.isDefined(this.date) && ObjectUtils.isDefined(this.occurrence) && ObjectUtils.isDefined(this.origin)
    );
  }

  public validate(): void {
    if (!ObjectUtils.isDefined(this.deltaValue.quantity) && !ObjectUtils.isDefined(this.meteredSource.quantity)) {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnMissingQuantity'));
    } else {
      const result = {
        deltaValue: {},
        meteredSource: {}
      };
      if (ObjectUtils.isDefined(this.deltaValue.quantity)) {
        result.deltaValue = {
          date: this.date,
          density: this.density,
          quantity: this.deltaValue.quantity,
          occurrence: this.occurrence,
          origin: this.origin,
          volume: this.deltaValue.volume,
          batchNumber: this.batchNumber
        };
      }
      if (ObjectUtils.isDefined(this.meteredSource.quantity)) {
        result.meteredSource = {
          date: this.date,
          density: this.density,
          quantity: this.meteredSource.quantity,
          occurrence: this.occurrence,
          origin: this.origin,
          volume: this.meteredSource.volume,
          batchNumber: this.batchNumber
        };
      }

      this.onValidated.emit(result);
      this.closeDialog();
    }
  }

  private init(): void {
    this.date = undefined;
    this.deltaValue = {};
    this.density = undefined;
    this.meteredSource = {};
    this.occurrence = undefined;
    this.occurrenceList = [];
    this.origin = undefined;
    this.originList = [];
    this.batchNumber = undefined;

    this.onValidated = new EventEmitter<{ deltaValue: ReplenishmentMeasure; meteredSource: ReplenishmentMeasure }>();
  }

  private loadOccurrenceList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.RM_OCCURRENCE_MAP).subscribe((results) => {
      this.occurrenceList = results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  private loadOriginList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.RM_ORIGIN_MAP).subscribe((results) => {
      this.originList = results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  private setDensityList(): void {
    const first = DialogReplenishmentMeasureComponent.DENSITY_LIST_FIRST_VALUE;
    const last = DialogReplenishmentMeasureComponent.DENSITY_LIST_LAST_VALUE;
    const step = DialogReplenishmentMeasureComponent.DENSITY_LIST_STEP;

    this.densityList = [];
    for (let i = first; i < last; i += step) {
      const density = {
        label: NumberUtils.toString(NumberUtils.roundNumber(i, 2)),
        value: i
      };
      this.densityList = [...this.densityList, density];
    }
  }
}
