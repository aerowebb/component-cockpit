import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { BidoAttributeConstants } from '../../../../../../shared/constants/bido-attribute-constants';
import { BidoMissionEquipmentConstants } from '../../../../../../shared/constants/bido-mission-equipment-constants';
import { ControlConfigConstants } from '../../../../../../shared/constants/control-config-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { BidoMissionEquipmentDTO } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../../shared/utils/string-utils';

@Component({
  selector: 'aw-flight-hums',
  templateUrl: './hums.component.html'
})
export class HumsComponent extends GenericComponent {
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  public humsMessage: string;
  public humsStatus: string;
  public sendFscVisible: boolean;

  private humsStatusValue: string | undefined;

  // Inputs *********************************************************************

  @Input()
  public componentEltRef: ElementRef;

  @Input()
  public set openMode(value: ComponentOpenMode) {
    if (ObjectUtils.isDefined(value)) {
      super.updateOpenMode(value);
    }
  }

  // Outputs ********************************************************************

  @Output()
  public onSendFscToHums: EventEmitter<void>;

  // ****************************************************************************

  public constructor(
    private readonly confirmationService: ConfirmationService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Read);

    this.controlConfigConstants = ControlConfigConstants;

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  public getComponentName(): string {
    return 'HumsComponent';
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.humsMessage = '';
    this.humsStatus = '';
    this.humsStatusValue = undefined;
    this.sendFscVisible = false;
  }

  public onLoad(missionEquipment: BidoMissionEquipmentDTO, manualFlightEntries: boolean): void {
    if (missionEquipment && missionEquipment.bidoFlightAttributeDTOList) {
      const humsMessageAttribute = missionEquipment.bidoFlightAttributeDTOList.find(
        (attribute) => attribute.attributeId === BidoAttributeConstants.DAV_HUMS_MESSAGE.toString()
      );
      if (humsMessageAttribute) {
        this.humsMessage = StringUtils.orEmpty(humsMessageAttribute.attributeValue);
      }

      const humsStatusAttribute = missionEquipment.bidoFlightAttributeDTOList.find(
        (attribute) => attribute.attributeId === BidoAttributeConstants.DAV_HUMS_STATUS.toString()
      );
      this.humsStatusValue = humsStatusAttribute ? humsStatusAttribute.attributeValue : undefined;
      if (this.humsStatusValue) {
        this.formatHumsStatus(this.humsStatusValue);
      }

      if (
        !manualFlightEntries &&
        missionEquipment.statusState &&
        missionEquipment.statusState === AWPropertiesConstants.FLIGHT_STATUS_GO_VALIDATED &&
        (StringUtils.isNullOrEmpty(this.humsStatusValue) ||
          this.humsStatusValue === BidoMissionEquipmentConstants.DAV_HUMS_STATUS_FSC_IN_ERROR ||
          this.humsStatusValue === BidoMissionEquipmentConstants.DAV_HUMS_STATUS_UNDO_DONE) &&
        !StringUtils.isNullOrEmpty(missionEquipment.missionInstanceCode)
      ) {
        this.sendFscVisible = true;
      }
    }
  }

  private onBeforeLoadOnce(): void {
    this.onSendFscToHums = new EventEmitter<void>();
  }

  // ****************************************************************************

  public sendFscToHums(): void {
    if (this.humsStatusValue === BidoMissionEquipmentConstants.DAV_HUMS_STATUS_UNDO_DONE) {
      this.confirmationService.confirm({
        messageKey: this.getTranslateKey('warningOnCountersUpdate'),
        accept: () => this.onSendFscToHums.emit()
      });
    } else {
      this.onSendFscToHums.emit();
    }
  }

  private formatHumsStatus(status: string): void {
    let statusKey: string;

    switch (status) {
      case BidoMissionEquipmentConstants.DAV_HUMS_STATUS_FSC_SENT:
        statusKey = 'statusFscSent';
        break;

      case BidoMissionEquipmentConstants.DAV_HUMS_STATUS_FSC_IN_ERROR:
        statusKey = 'statusFscInError';
        break;

      case BidoMissionEquipmentConstants.DAV_HUMS_STATUS_FSC_VALIDATED:
        statusKey = 'statusFscValidated';
        break;

      case BidoMissionEquipmentConstants.DAV_HUMS_STATUS_UNDO_SENT:
        statusKey = 'statusUndoSent';
        break;

      case BidoMissionEquipmentConstants.DAV_HUMS_STATUS_UNDO_IN_PROCESS:
        statusKey = 'statusUndoInProcess';
        break;

      case BidoMissionEquipmentConstants.DAV_HUMS_STATUS_POTENTIAL_RECEIVED:
        statusKey = 'statusPotentialReceived';
        break;

      case BidoMissionEquipmentConstants.DAV_HUMS_STATUS_POTENTIAL_IN_ERROR:
        statusKey = 'statusPotentialInError';
        break;

      case BidoMissionEquipmentConstants.DAV_HUMS_STATUS_FSC_DONE:
        statusKey = 'statusFscDone';
        break;

      default:
        statusKey = 'statusFscNotSent';
        break;
    }

    this.translateService.get(this.getTranslateKey(statusKey)).subscribe((result) => {
      this.humsStatus = StringUtils.orEmpty(result);
    });
  }
}
