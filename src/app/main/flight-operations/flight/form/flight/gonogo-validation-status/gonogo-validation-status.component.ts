import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../../../shared/constants/control-config-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { DateService } from '../../../../../../shared/services/date.service';
import { SerializationService } from '../../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { TabService } from '../../../../../../shared/services/tab.service';
import { BidoMissionEquipmentDTOId } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { BidoMissionEquipmentDTO } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { PageComponentData } from '../../../../../../shared/types/page-component-data.interface';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../../shared/utils/string-utils';
import { FlightInputData } from '../../../types/flight-input-data.interface';
import { FlightFormService } from '../flight-form.service';

@Component({
  selector: 'aw-flight-gonogo-validation-status',
  styleUrls: ['./gonogo-validation-status.component.scss'],
  templateUrl: './gonogo-validation-status.component.html'
})
export class GonogoValidationStatusComponent extends GenericComponent {
  public readonly aWPropertiesConstants: typeof AWPropertiesConstants;
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  public date: string;
  public gonogoValidationStatus: ControlConfigConstants;
  public user: string;

  // Inputs *********************************************************************

  @Input()
  public componentEltRef: ElementRef;

  @Input()
  public equipmentCode: string;

  @Input()
  public missionCode: string;

  @Input()
  public missionEquipment: BidoMissionEquipmentDTO;

  @Input()
  public occurrence: number;

  @Input()
  public set openMode(value: ComponentOpenMode) {
    if (ObjectUtils.isDefined(value)) {
      super.updateOpenMode(value);
    }
  }

  // Outputs ********************************************************************

  @Output()
  public updateFlightStatus: EventEmitter<string>;

  // ****************************************************************************

  public constructor(
    public sessionService: SessionService,
    private readonly confirmationService: ConfirmationService,
    private readonly dateService: DateService,
    private readonly flightFormService: FlightFormService,
    private readonly serializationService: SerializationService,
    private readonly tabService: TabService
  ) {
    super(ComponentOpenMode.Read);

    this.aWPropertiesConstants = AWPropertiesConstants;
    this.controlConfigConstants = ControlConfigConstants;

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  public getComponentName(): string {
    return 'GonogoValidationStatusComponent';
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.date = '';
    this.gonogoValidationStatus = ControlConfigConstants.ICON_RED;
    this.user = '';
  }

  public onLoad(equipmentCode: string, missionCode: string, occurrence: number): void {
    const input: BidoMissionEquipmentDTOId = {
      equipmentCode,
      missionCode,
      occurrence
    };
    this.flightFormService.findGoNoGoValidationStatus(input).subscribe((result) => {
      if (result) {
        this.date = this.dateService.dateWithHourToString(result.statusDate);
        this.gonogoValidationStatus = ControlConfigConstants.ICON_GREEN;
        this.user = StringUtils.orEmpty(result.statusUser);
      }
    });
  }

  private onBeforeLoadOnce(): void {
    this.updateFlightStatus = new EventEmitter<string>();
  }

  // ****************************************************************************

  public backToGoValidatedStatus(): void {
    this.confirmationService.confirm({
      messageKey: this.getTranslateKey('confirmBackToGoValidatedStatus'),
      accept: () => {
        this.updateFlightStatus.emit(AWPropertiesConstants.FLIGHT_STATUS_GO_VALIDATED);
      }
    });
  }

  public openGonogoValidation(): void {
    const objectId: FlightInputData = {
      equipmentCode: this.equipmentCode,
      missionCode: this.missionCode,
      occurrence: this.occurrence
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLI_GONOGO_VALIDATION_FORM,
      objectId: this.serializationService.serialize(objectId),
      openMode: this.openMode
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
}
