import { Component, ElementRef, Input } from '@angular/core';

import { ControlConfigConstants } from '../../../../../../shared/constants/control-config-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BidoMissionEquipmentDTOId } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { BidoMissionEquipmentDTO } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';
import { FlightFormService } from '../flight-form.service';

@Component({
  selector: 'aw-flight-replenishments-validation',
  styleUrls: ['./replenishments-validation.component.scss'],
  templateUrl: './replenishments-validation.component.html'
})
export class ReplenishmentsValidationComponent extends GenericComponent {
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  public replenishmentValidationStatus: ControlConfigConstants | undefined;

  private _missionEquipment: BidoMissionEquipmentDTO;

  // Inputs *********************************************************************

  @Input()
  public componentEltRef: ElementRef;

  @Input()
  public equipmentCode: string;

  @Input()
  public missionCode: string;

  @Input()
  public occurrence: number;

  @Input()
  public get missionEquipment(): BidoMissionEquipmentDTO {
    return this._missionEquipment;
  }
  public set missionEquipment(value: BidoMissionEquipmentDTO) {
    if (value) {
      this._missionEquipment = value;
      this.onLoad();
    }
  }

  @Input()
  public set openMode(value: ComponentOpenMode) {
    if (ObjectUtils.isDefined(value)) {
      super.updateOpenMode(value);
    }
  }

  // ****************************************************************************

  public constructor(
    public sessionService: SessionService,
    private readonly confirmationService: ConfirmationService,
    private readonly flightFormService: FlightFormService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Read);

    this.controlConfigConstants = ControlConfigConstants;

    this.onBeforeLoad();
  }

  public getComponentName(): string {
    return 'ReplenishmentsValidationComponent';
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.missionEquipment = {};
    this.replenishmentValidationStatus = undefined;
  }

  public onLoad(): void {
    this.calculateReplenishmentValidationStatus();
  }

  // ****************************************************************************

  public cancel(): void {
    this.confirmationService.confirm({
      messageKey: this.getTranslateKey('confirmInvalidation'),
      accept: () => {
        const input: BidoMissionEquipmentDTOId = {
          equipmentCode: this.equipmentCode,
          missionCode: this.missionCode,
          occurrence: this.occurrence
        };
        this.flightFormService.cancelFlightReplenishmentValidation(input).subscribe((result) => {
          if (ObjectUtils.isDefined(result)) {
            this.missionEquipment.repleValidationDate = undefined;
            this.missionEquipment.repleValidationUser = undefined;
            this.replenishmentValidationStatus = ControlConfigConstants.ICON_RED;

            this.messageService.showSuccessMessage(this.getTranslateKey('successOnInvalidation'));
          }
        });
      }
    });
  }

  public validate(): void {
    this.confirmationService.confirm({
      messageKey: this.getTranslateKey('confirmValidation'),
      accept: () => {
        const input: BidoMissionEquipmentDTOId = {
          equipmentCode: this.equipmentCode,
          missionCode: this.missionCode,
          occurrence: this.occurrence
        };
        this.flightFormService.validateFlightReplenishment(input).subscribe((result) => {
          if (ObjectUtils.isDefined(result)) {
            this.missionEquipment.repleValidationDate = result.repleValidationDate;
            this.missionEquipment.repleValidationUser = result.repleValidationUser;
            this.replenishmentValidationStatus = ControlConfigConstants.ICON_GREEN;

            this.messageService.showSuccessMessage(this.getTranslateKey('successOnValidation'));
          }
        });
      }
    });
  }

  private calculateReplenishmentValidationStatus(): void {
    this.replenishmentValidationStatus = ObjectUtils.isDefined(this.missionEquipment.repleValidationDate)
      ? ControlConfigConstants.ICON_GREEN
      : ControlConfigConstants.ICON_RED;
  }

  public showValidateReplenishmentButton(): boolean {
    return this.replenishmentValidationStatus === this.controlConfigConstants.ICON_RED;
  }

  public showCancelReplenishmentButton(): boolean {
    return this.replenishmentValidationStatus === this.controlConfigConstants.ICON_GREEN;
  }
}
