import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { DialogTableData } from '../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { InputValidationService } from '../../../shared/services/input-validation.service';
import { MessageService } from '../../../shared/services/message.service';
import { SessionService } from '../../../shared/services/session.service';
import { MeasurePropagationReportInput } from '../../../shared/types/api-input-types/fleet-management/measure-propagation-report-input.interface';
import { RatingAtDateInput } from '../../../shared/types/api-input-types/fleet-management/rating-at-date-input.interface';
import { SaveBidoMeasureInputDTO } from '../../../shared/types/api-input-types/fleet-management/save-bido-measure-input-dto.interface';
import { FindBidoCounterReferencesByEquipmentCodeOutput } from '../../../shared/types/api-output-types/fleet-management/find-bido-counter-references-by-equipment-code-output';
import { BidoEquipmentCounterDTOId } from '../../../shared/types/api-types/bido-equipment-counter-dto-id.interface';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { BireMeasureReferenceDTO } from '../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BireSbDTO } from '../../../shared/types/api-types/bire-sb-dto.interface';
import { MeasurePropagationOptionsDTO } from '../../../shared/types/api-types/measure-propagation-options-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../shared/types/popup-entry.interface';

import { DialogMeasureUpdateService } from './dialog-measure-update.service';

@Component({
  selector: 'aw-dialog-measure-update',
  styleUrls: ['./dialog-measure-update.component.scss'],
  templateUrl: './dialog-measure-update.component.html'
})
export class DialogMeasureUpdateComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<FindBidoCounterReferencesByEquipmentCodeOutput> | null;

  @Input('equipment')
  public equipment: BidoEquipmentDTO | undefined;

  @Input()
  public isReadOnlyForm: boolean;

  @Input('followedInRatingVisibility')
  public followedInRatingVisibility: boolean;

  @Input()
  public dateEvent: Date;

  @Input()
  public context: string;

  @Output()
  public onUpdate: EventEmitter<FindBidoCounterReferencesByEquipmentCodeOutput>;

  @Output()
  public onReport: EventEmitter<string>;

  public measure: FindBidoCounterReferencesByEquipmentCodeOutput;
  public propertyMeasureCode: LabelValue<string>[];
  public ratingsList: LabelValue<string>[];
  public counterMap: Map<string, string>;
  public showRatings: boolean;
  public selectedBireMeasureReferenceDTO: BireMeasureReferenceDTO;
  public otherBireMeasureReferenceDTO: BireMeasureReferenceDTO;
  public isRatingRequired: boolean;

  public readingHours: string;
  public readingMin: string;
  public comment: string;
  public propagate: boolean;
  public simulate: boolean;
  public isDeltaMeasure: boolean;
  public isRatingValue: boolean;
  public value: string;

  public mesureInsertion: boolean;
  public readingEqualsOrSmaller: boolean;
  public readingGreater: boolean;
  public associatedMissionEvent: boolean;
  public isOtherCounterVisible: boolean;

  // POPUP
  public dialogTableData: DialogTableData<BireSbDTO>;
  public propertyStatus: LabelValue<string>[];
  public keyMap: Map<string, Observable<LabelValue<string>[]>>;
  public measurePropagationOptionsDTO: MeasurePropagationOptionsDTO;
  public ratingVisibility: boolean;
  public counterDeltaValue: string | undefined;
  public counterValue: string | undefined;
  public counterOtherValue: string | undefined;
  public counterOptionsVisibility: boolean;

  public measureReportText: string;
  public showMeasureReportText: boolean;
  public reportProcessing: boolean;

  public readonly hCounterUnitCode: string = 'H';
  public readonly formatHH: string = '0';
  public readonly formatHHMM: string = '1';
  public selectedFormatList: LabelValue<string>[];
  public selectedFormat: string;
  public counterValueDate: Date | undefined;

  public constructor(
    public inputValidationService: InputValidationService,
    public measureUpdatePopupFormService: DialogMeasureUpdateService,
    public sessionService: SessionService,
    private readonly messageService: MessageService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Write, 'DialogMeasureUpdateComponent');
    this.onUpdate = new EventEmitter<FindBidoCounterReferencesByEquipmentCodeOutput>();
    this.onReport = new EventEmitter<string>();
    this.selectedBireMeasureReferenceDTO = {};
    this.isOtherCounterVisible = false;
    this.followedInRatingVisibility = false;
    this.ratingVisibility = false;
    this.isRatingRequired = false;
    this.ratingsList = [];
    this.propertyMeasureCode = [];
    this.measure = {};
    this.counterMap = new Map<string, string>();
    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.showRatings = false;
    this.propagate = true;
    this.simulate = false;
    this.measurePropagationOptionsDTO = {
      allowInsertionBeforeExistingValue: false,
      allowMeasureReadingGreatherThanPreviousPlusXValue: false,
      allowMeasureReadingSmallerThanPrevious: false,
      createEvent: false,
      simulation: false
    };
    this.counterOptionsVisibility = true;
    this.measureReportText = '';
    this.showMeasureReportText = false;
    this.reportProcessing = false;
  }

  public ngOnInit() {
    if (
      this.componentData &&
      !!this.componentData.object &&
      this.componentData.componentId &&
      this.componentData.componentId.length > 0
    ) {
      this.measure = this.componentData.object;
      this.measure.counterDate = this.dateEvent || this.measure.counterDate;
      if (this.measure && this.measure.counterDate) {
        this.readingHours = this.measure.counterDate.getHours().toString();
        this.readingMin = this.measure.counterDate.getMinutes().toString();
      }
      if (this.measure.ratingCounterValue !== null && this.measure.ratingCounterValue !== undefined) {
        this.counterValue = this.measure.ratingCounterValue;
      } else {
        this.counterValue =
          this.measure.cumulatedCounterValue !== null && this.measure.cumulatedCounterValue !== undefined
            ? this.measure.cumulatedCounterValue
            : undefined;
      }
      this.loadCounterCode();
      this.loadRatings();
    }

    this.selectedFormatList = [
      {
        label: 'HH.dec',
        value: this.formatHH
      },
      {
        label: 'HH:mm',
        value: this.formatHHMM
      }
    ];

    this.selectedFormat = this.formatHH;
  }

  public loadCounterCode() {
    this.measureUpdatePopupFormService.findAllBireMeasureReferences().subscribe((results) => {
      const list: BireMeasureReferenceDTO[] = results.filter((obj) => {
        return (
          AWPropertiesConstants.REF_MEASURE_CATEGORY_USAGE_KEY !== obj.mrCategory &&
          AWPropertiesConstants.REF_MEASURE_CATEGORY_USAGE_STORAGE_KEY !== obj.mrCategory &&
          AWPropertiesConstants.REF_MEASURE_CATEGORY_STORAGE_KEY !== obj.mrCategory
        );
      });

      list.forEach((element) => {
        const labelValue: LabelValue<string> = {
          label: !!element.counterCode ? element.counterCode : '',
          value: !!element.counterCode ? element.counterCode : ''
        };
        if (!!element.counterCode && !!element.unitCode) {
          this.counterMap.set(element.counterCode, element.unitCode);
        }
        this.propertyMeasureCode.push(labelValue);
      });

      this.selectedBireMeasureReferenceDTO = list.filter((obj) => {
        return obj.counterCode === this.measure.counterCode;
      })[0];

      this.setCounters(list);
      this.getRatingDataVisibility();
    });
  }

  private setCounters(list: BireMeasureReferenceDTO[]) {
    const otherCounterToSearch = this.measure.counterCode && this.measure.counterCode.substring(1);
    for (let i = 0; i < list.length; i++) {
      const counterCode = list[i].counterCode || '';
      if (this.measure.counterCode !== counterCode && otherCounterToSearch === counterCode.substring(1)) {
        this.isOtherCounterVisible = true;
        this.otherBireMeasureReferenceDTO = list[i];
        break;
      }
    }
  }

  public getUnitCode() {
    this.measure.counterUnit =
      !!this.measure && !!this.measure.counterUnit ? this.counterMap.get(this.measure.counterUnit) : '';
  }

  public onHide(): void {
    this.measure = {};
    this.display = false;
  }

  public onClose(): void {
    this.measure = {};
    this.display = false;
    this.onUpdate.emit(this.measure);
  }

  public onValidate(): void {
    if (this.measure) {
      if (!this.measure.counterDate) {
        this.messageService.showErrorMessage(this.getTranslateKey('missingDate'));

        return;
      }
      if (
        this.isDeltaMeasure &&
        (this.counterDeltaValue === null ||
          this.counterDeltaValue === undefined ||
          this.counterDeltaValue.trim() === '')
      ) {
        this.messageService.showErrorMessage(this.getTranslateKey('missingDeltaValue'));

        return;
      }
      if (!this.isDeltaMeasure) {
        if (this.measure.counterUnit === this.hCounterUnitCode) {
          if (
            this.selectedFormat === this.formatHH &&
            (this.counterValue === null || this.counterValue === undefined || this.counterValue.trim() === '')
          ) {
            this.messageService.showErrorMessage(this.getTranslateKey('missingValue'));

            return;
          } else if (this.selectedFormat === this.formatHHMM) {
            if (this.counterValueDate === null || this.counterValueDate === undefined) {
              this.messageService.showErrorMessage(this.getTranslateKey('missingValue'));

              return;
            } else {
              const COUNT = 100;
              const SEC = 60;

              // Convert HH:mm to HH.dec
              this.counterValue = `${this.counterValueDate.getHours()}.${Math.floor(
                (this.counterValueDate.getMinutes() * COUNT) / SEC
              )}`;
            }
          }
        } else {
          if (this.counterValue === null || this.counterValue === undefined || this.counterValue.trim() === '') {
            this.messageService.showErrorMessage(this.getTranslateKey('missingValue'));

            return;
          }
        }
      }

      if (this.counterOptionsVisibility && this.propagate && !this.measurePropagationOptionsDTO.simulation) {
        this.confirmationService.confirm({
          messageKey: this.getTranslateKey('confirmValidate'),
          accept: () => {
            this.saveData();
          }
        });
      } else {
        this.saveData();
      }
    }
  }

  private saveData() {
    if (this.counterOptionsVisibility && this.propagate) {
      const measurePropagationReportInput: MeasurePropagationReportInput = {};
      measurePropagationReportInput.equipmentCode = this.equipment && this.equipment.equipmentCode;
      measurePropagationReportInput.familyCode = this.measure.familyCode;
      measurePropagationReportInput.isSimulation = !!this.measurePropagationOptionsDTO.simulation;
      measurePropagationReportInput.options = this.measurePropagationOptionsDTO;
      measurePropagationReportInput.ratingCode = this.measure.ratingCode;
      measurePropagationReportInput.isDiff = !!this.isDeltaMeasure;
      measurePropagationReportInput.interRatingValue = !!this.isRatingValue;
      measurePropagationReportInput.options.measureComment = this.measure.comment;
      measurePropagationReportInput.options.measureSource = this.measure.source;
      measurePropagationReportInput.valuePerCounterCodeMap = this.getValuePerCounterCodeMapForPropagation();
      measurePropagationReportInput.readingDate = this.getReadingDate();
      this.reportProcessing = true;
      this.measureUpdatePopupFormService.wdPropagateMeasures(measurePropagationReportInput).subscribe(
        (result) => {
          if (result) {
            if (this.isRatingValue) {
              this.measure.ratingCounterValue = this.counterValue;
              this.measure.cumulatedCounterValue = this.counterValue;
            } else {
              this.measure.cumulatedCounterValue = this.isDeltaMeasure ? this.counterDeltaValue : this.counterValue;
            }

            this.onUpdate.emit(this.measure);
            if (measurePropagationReportInput.isSimulation) {
              this.showMeasureReportText = true;
              this.measureReportText = result;
            } else {
              this.onReport.emit(result);
            }
          }
          this.reportProcessing = false;
        },
        (err) => {
          if (err && err.error && err.error.errorDesc) {
            this.messageService.showErrorMessage(err.error.errorDesc);
          }
          this.reportProcessing = false;
        }
      );
    } else {
      if (this.isDeltaMeasure) {
        this.counterOtherValue = undefined;
        this.counterValue = undefined;
      } else {
        this.counterDeltaValue = undefined;
      }
      const saveBidoMeasureInputDTO: SaveBidoMeasureInputDTO = {
        allowInsertionBeforeExistingValue: this.measurePropagationOptionsDTO.allowInsertionBeforeExistingValue,
        allowMeasureReadingGreatherThanPreviousPlusXValue: this.measurePropagationOptionsDTO
          .allowMeasureReadingGreatherThanPreviousPlusXValue,
        allowMeasureReadingSmallerThanPrevious: this.measurePropagationOptionsDTO
          .allowMeasureReadingSmallerThanPrevious,
        interRatingValue: !!this.isRatingValue,
        isCounter: !!this.selectedBireMeasureReferenceDTO.isCounter,
        isOtherCounter: this.isDeltaMeasure ? false : this.isOtherCounterVisible,
        isOtherCounterCode: this.otherBireMeasureReferenceDTO
          ? this.otherBireMeasureReferenceDTO.counterCode
          : undefined,
        isOtherCounterValue:
          this.counterOtherValue !== null && this.counterOtherValue !== undefined ? this.counterOtherValue : undefined,
        bidoMeasureDTO: {
          counterCode: this.measure.counterCode,
          equipmentCode: this.equipment && this.equipment.equipmentCode,
          delta:
            this.counterDeltaValue !== null && this.counterDeltaValue !== undefined
              ? this.counterDeltaValue
              : undefined,
          familyCode: this.measure.familyCode,
          ratingCode: this.measure.ratingCode,
          readingDate: this.getReadingDate(),
          isDiff: this.isDeltaMeasure,
          measureDescription: this.measure.comment,
          value: this.counterValue !== null && this.counterValue !== undefined ? this.counterValue : undefined
        }
      };
      this.measureUpdatePopupFormService.addMeasure(saveBidoMeasureInputDTO).subscribe(
        () => {
          if (this.isRatingValue) {
            this.measure.cumulatedCounterValue = this.counterValue;
            this.measure.ratingCounterValue = this.counterValue;
          } else {
            this.measure.cumulatedCounterValue = this.counterValue;
            this.measure.ratingCounterValue = this.measure.cumulatedCounterValue;
          }

          this.onUpdate.emit(this.measure);
          this.display = false;
        },
        (err) => {
          if (err && err.error && err.error.errorDesc) {
            this.messageService.showErrorMessage(err.error.errorDesc);
          }
        }
      );
    }
  }

  private getReadingDate(): Date | undefined {
    return this.measure.counterDate;
  }

  public loadRatings() {
    const bidoEquipmentCounterDTOId: BidoEquipmentCounterDTOId = {
      counterCode: this.measure.counterCode,
      equipmentCode: this.measure.bidoEquipmentCounterDto && this.measure.bidoEquipmentCounterDto.equipmentCode,
      familyCode: this.measure.familyCode,
      ratingCode: ''
    };
    this.measureUpdatePopupFormService.findBidoRatingsForMeasure(bidoEquipmentCounterDTOId).subscribe((results) => {
      this.ratingsList = results;
    });
  }

  private getRatingDataVisibility() {
    if (this.selectedBireMeasureReferenceDTO) {
      if (!this.selectedBireMeasureReferenceDTO.isCounter) {
        this.ratingVisibility = false;
        this.counterOptionsVisibility = false;

        return;
      }
    }
    if (this.followedInRatingVisibility) {
      this.isRatingRequired = true;
    }

    this.ratingVisibility = this.followedInRatingVisibility;
  }

  private getValuePerCounterCodeMapForPropagation(): Object {
    const result = {};

    if (!this.isDeltaMeasure) {
      if (this.selectedBireMeasureReferenceDTO.counterCode && this.counterValue !== undefined) {
        result[this.selectedBireMeasureReferenceDTO.counterCode] = this.counterValue;
      }
      // Other value
      if (
        this.isOtherCounterVisible &&
        this.otherBireMeasureReferenceDTO.counterCode &&
        this.counterOtherValue !== undefined
      ) {
        result[this.otherBireMeasureReferenceDTO.counterCode] = this.counterOtherValue;
      }
    } else {
      if (this.measure.counterCode && this.counterDeltaValue !== undefined) {
        result[this.measure.counterCode] = this.counterDeltaValue;
      }
    }

    return result;
  }

  public findRating() {
    if (this.equipment && this.equipment.equipmentCode && !this.getReadingDate()) {
      this.messageService.showWarningMessage(this.getTranslateKey('ratingNotFound'));

      return;
    }
    if (this.equipment && this.equipment.equipmentCode) {
      const ratingAtDateInput: RatingAtDateInput = {
        equipmentCode: this.equipment.equipmentCode,
        date: this.getReadingDate()
      };
      this.measureUpdatePopupFormService
        .findHFBidoRatingByEquipmentCodeFromDate(ratingAtDateInput)
        .subscribe((results) => {
          if (!results) {
            this.messageService.showErrorMessage(this.getTranslateKey('ratingNotFound'));
          } else {
            return;
          }
        });
    } else {
      this.messageService.showErrorMessage('global.missingFields');
    }
  }

  public onDeltaToogle() {
    this.counterValue = undefined;
    this.measurePropagationOptionsDTO.allowInsertionBeforeExistingValue = false;
    this.measurePropagationOptionsDTO.allowMeasureReadingSmallerThanPrevious = false;
    this.measurePropagationOptionsDTO.allowMeasureReadingGreatherThanPreviousPlusXValue = false;
    this.counterDeltaValue = undefined;
    this.counterOtherValue = undefined;
  }

  public changeFormat() {
    this.counterValue = undefined;
    this.counterValueDate = undefined;
  }
}
