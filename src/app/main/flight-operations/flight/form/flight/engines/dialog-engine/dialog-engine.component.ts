import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AWPropertiesConstants } from '../../../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { BidoMissionEquipmentDTO } from '../../../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';
import { ObjectUtils } from '../../../../../../../shared/utils/object-utils';
import { EngineRow } from '../types/engine-row.interface';

@Component({
  selector: 'aw-dialog-flight-engine',
  templateUrl: './dialog-engine.component.html'
})
export class DialogEngineComponent extends DialogComponent {
  public readonly aWPropertiesConstants: typeof AWPropertiesConstants;

  public cycles: number | undefined;
  public hours: number | undefined;

  private _engine: EngineRow;

  // Inputs *********************************************************************

  @Input()
  public missionEquipment: BidoMissionEquipmentDTO;

  @Input()
  public get engine(): EngineRow {
    return this._engine;
  }
  public set engine(value: EngineRow) {
    if (value) {
      this._engine = value;

      this.cycles = value.cycles ? Number(value.cycles) : undefined;
      this.hours = value.hours ? Number(value.hours) : undefined;
    }
  }

  // Outputs ********************************************************************

  @Output()
  public onValidate: EventEmitter<EngineRow>;

  // ****************************************************************************

  public constructor(private readonly messageService: MessageService) {
    super(ComponentOpenMode.Read, 'DialogEngineComponent');

    this.aWPropertiesConstants = AWPropertiesConstants;

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.cycles = undefined;
    this.hours = undefined;
  }

  private onBeforeLoadOnce(): void {
    this.onValidate = new EventEmitter<EngineRow>();
  }

  // ****************************************************************************

  public validate(): void {
    const newEngine = { ...this.engine };
    newEngine.cycles = ObjectUtils.isDefined(this.cycles) ? (this.cycles as number).toString() : '';
    newEngine.hours = ObjectUtils.isDefined(this.hours) ? (this.hours as number).toString() : '';

    if (Number(newEngine.cycles) < 0 || Number(newEngine.hours) < 0) {
      this.messageService.showWarningMessage(this.getTranslateKey('positiveValuesOnly'));

      return;
    }

    this.onValidate.emit(newEngine);
    super.closeDialog();
  }
}
