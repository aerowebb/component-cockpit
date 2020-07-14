import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { FindBidoCounterReferencesByEquipmentCodeOutput } from '../../../../../../shared/types/api-output-types/fleet-management/find-bido-counter-references-by-equipment-code-output';
import { BidoEquipmentCounterDTO } from '../../../../../../shared/types/api-types/bido-equipment-counter-dto.interface';
import { BidoEquipmentDTO } from '../../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BireMeasureReferenceDTO } from '../../../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../../shared/types/popup-entry.interface';

import { LimitPopupFormService } from './limit-popup-form.service';

@Component({
  selector: 'aw-limit-popup-form',
  styleUrls: ['./popup-form.component.scss'],
  templateUrl: './limit-popup-form.component.html'
})
export class LimitPopupFormComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<FindBidoCounterReferencesByEquipmentCodeOutput>;

  @Input('equipment')
  public equipment: BidoEquipmentDTO | undefined;

  @Input('followedInRatingVisibility')
  public followedInRatingVisibility: boolean;

  @Output()
  public onCreate: EventEmitter<void>;

  public measure: FindBidoCounterReferencesByEquipmentCodeOutput;
  public propertyMeasureCode: LabelValue<string>[];
  public counterMap: Map<string, string>;
  public showMeasureDialog: boolean;
  public counterCode: string;

  public value: string;
  public optionLimit: string;
  public alertThreshold: string;
  public currentRemainingPotential: string;
  public isReadOnlyForm: boolean;
  public selectedBireMeasureReferenceDTO: BireMeasureReferenceDTO;
  public isRatingVisible: boolean;

  public constructor(
    public limitPopupFormService: LimitPopupFormService,
    public sessionService: SessionService,
    private readonly messageService: MessageService,
    public inputValidationService: InputValidationService
  ) {
    super(ComponentOpenMode.Write, 'EditLimitPopupDialog');

    this.onCreate = new EventEmitter<void>();

    this.isReadOnlyForm = false;
    this.propertyMeasureCode = [];
    this.showMeasureDialog = false;
    this.measure = {};
    this.counterMap = new Map<string, string>();
    this.optionLimit = 'limitValue';
    this.selectedBireMeasureReferenceDTO = {};
  }

  public ngOnInit() {
    this.loadCounterCode();
  }

  public changeValue(): void {
    this.measure.dateLimit = undefined;
  }

  public getUnitCode() {
    this.measure.counterUnit =
      !!this.measure && !!this.measure.counterCode ? this.counterMap.get(this.measure.counterCode) : undefined;
  }

  public onHide(): void {
    this.measure = {};
    this.display = false;
  }

  public onValidate(): void {
    if (this.measure.counterCode) {
      this.editLimit();
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('missingFields'));
    }
  }

  public editLimit(): void {
    const bidoEquipmentCounter: BidoEquipmentCounterDTO = {
      counterCode: this.measure.counterCode,
      equipmentCode: !!this.measure.bidoEquipmentCounterDto
        ? this.measure.bidoEquipmentCounterDto.equipmentCode
        : undefined,
      familyCode: this.measure.familyCode,
      ratingCode: this.measure.ratingCode,
      dateLimit: this.measure.dateLimit,
      referenceValue: this.measure.referenceValue
    };

    this.limitPopupFormService.updateBidoEquipmentCounter(bidoEquipmentCounter).subscribe(
      (results) => {
        if (results) {
          this.onCreate.emit();
          this.limitPopupFormService
            .findBidoCounterReferencesByEquipmentCode(this.equipment)
            .subscribe((resultsMeasures) => {
              const newMeasure = resultsMeasures.find((value) => value.counterCode === this.measure.counterCode);
              if (!!newMeasure) {
                this.measure = newMeasure;
              }
            });
        }
      },
      () => {
        this.messageService.showErrorMessage('UnableToEditLimit');
      }
    );
  }

  public showDialog() {
    this.showMeasureDialog = true;
  }

  public loadCounterCode() {
    if (this.componentData && !!this.componentData.object) {
      this.limitPopupFormService.findAllBireMeasureReferences().subscribe((results) => {
        this.measure = this.componentData.object || {};
        this.optionLimit = this.measure.dateLimit ? 'limitDate' : 'limitValue';
        this.selectedBireMeasureReferenceDTO = results
          .filter((obj) => {
            return (
              AWPropertiesConstants.REF_MEASURE_CATEGORY_USAGE_KEY !== obj.mrCategory &&
              AWPropertiesConstants.REF_MEASURE_CATEGORY_USAGE_STORAGE_KEY !== obj.mrCategory &&
              AWPropertiesConstants.REF_MEASURE_CATEGORY_STORAGE_KEY !== obj.mrCategory
            );
          })
          .filter((obj) => {
            return obj.counterCode === this.measure.counterCode;
          })[0];

        this.isFollowedInRating(this.selectedBireMeasureReferenceDTO);
      });
    }
  }

  public changeLimit() {
    this.measure.referenceValue = this.measure.referenceValue ? undefined : this.measure.referenceValue;
    this.measure.dateLimit = this.measure.dateLimit ? undefined : this.measure.dateLimit;
  }

  public isFollowedInRating(counter: BireMeasureReferenceDTO) {
    if (this.equipment && this.equipment.familyVariantCode) {
      this.isRatingVisible = this.getRatingDataVisibility(counter);
    }
  }

  private getRatingDataVisibility(counter: BireMeasureReferenceDTO): boolean {
    if (counter) {
      if (!counter.isCounter) {
        return false;
      }
    }

    return this.followedInRatingVisibility;
  }
}
