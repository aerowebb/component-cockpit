import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../../../shared/services/session.service';
import { BireMeasureReferenceDTO } from '../../../../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BireUnitMeasureDTO } from '../../../../../../../shared/types/api-types/bire-unit-measure-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../../shared/types/label-value.interface';
import { SelectItemUtils } from '../../../../../../../shared/utils/select-item-utils';
import { ReferenceMeasurementService } from '../reference-measurement.service';

@Component({
  selector: 'aw-dialog-reference-measurement',
  templateUrl: './dialog-reference-measurement.component.html'
})
export class DialogReferenceMeasurementComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public refMeasurementList: BireMeasureReferenceDTO[];

  @Input()
  public data: BireMeasureReferenceDTO;

  @Output()
  public onValidated: EventEmitter<BireMeasureReferenceDTO>;

  @Output()
  public onUpdate: EventEmitter<BireMeasureReferenceDTO>;

  public unitCodeList: SelectItem[];
  public mrCategoryList: SelectItem[];
  public bireReturnReasonDTO: BireMeasureReferenceDTO;

  public constructor(
    public inputValidationService: InputValidationService,
    private readonly messageService: MessageService,
    public readonly sessionService: SessionService,
    private readonly referenceMeasurementService: ReferenceMeasurementService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Read, 'DialogReferenceMeasurementComponent');
    this.onValidated = new EventEmitter<BireMeasureReferenceDTO>();
    this.onUpdate = new EventEmitter<BireMeasureReferenceDTO>();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    this.fillDropDown();
    if (this.isEmpty(this.data)) {
      this.data = {};
      this.bireReturnReasonDTO = {};
      this.bireReturnReasonDTO.isCounter = true;
      this.bireReturnReasonDTO.minRemainPercent = 0;
    } else {
      this.bireReturnReasonDTO = { ...this.data };
    }
  }

  /**
   * CHeck if object is null or not
   */
  private isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  private fillDropDown() {
    // Filling Unit code list
    this.referenceMeasurementService.findAllBireUnitMeasures().subscribe((result) => {
      const labelValue: LabelValue<String>[] = [];
      result.forEach((res: BireUnitMeasureDTO) => {
        labelValue.push({
          // tslint:disable-next-line:no-string-literal
          label: res['label'],
          // tslint:disable-next-line:no-string-literal
          value: res['value']
        });
      });
      // labelValue.unshift({ label: '', value: undefined });
      this.unitCodeList = labelValue;
    });

    // Filling Mr Category List
    this.propertiesService.getValue('getRefMeasureCategoryMap').subscribe((results) => {
      this.mrCategoryList = !!results ? SelectItemUtils.fromLabelValues(results) : [];

      this.mrCategoryList.unshift({ label: '', value: undefined });
    });
  }

  public validate(): void {
    if (this.isScreenValidated()) {
      const min = -2147483648;
      const max = 2147483648;
      if (this.bireReturnReasonDTO.minRemainPercent && typeof this.bireReturnReasonDTO.minRemainPercent !== 'number') {
        this.messageService.showErrorMessage(this.getTranslateKey('percentMustBeNumeric'));

        return;
      }

      if (
        this.bireReturnReasonDTO.minRemainPercent &&
        (this.bireReturnReasonDTO.minRemainPercent.toString().indexOf('.') !== -1 ||
          this.bireReturnReasonDTO.minRemainPercent < min ||
          this.bireReturnReasonDTO.minRemainPercent > max)
      ) {
        this.messageService.showErrorMessage(this.getTranslateKey('percentRangeError'));

        return;
      }

      if (this.openMode === ComponentOpenMode.Write) {
        // Update Mode
        this.data = { ...this.bireReturnReasonDTO };
        this.onUpdate.emit(this.data);
        this.closeDialog();
      } else if (this.openMode === ComponentOpenMode.Create) {
        let isFound = false;
        this.refMeasurementList.forEach((res) => {
          if (res.counterCode === this.bireReturnReasonDTO.counterCode) {
            isFound = true;
          }
        });

        if (!isFound) {
          // Create Mode
          this.data = { ...this.bireReturnReasonDTO };
          this.onValidated.emit(this.data);
          this.closeDialog();
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('entryAlreadyExist'));
        }
      }
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
    }
  }

  private isScreenValidated() {
    if (!this.bireReturnReasonDTO.counterCode || this.bireReturnReasonDTO.counterCode.trim().length === 0) {
      return false;
    } else {
      return true;
    }
  }

  public maxLengthCheck(event, percent) {
    const min = -21474836;
    const max = 214748364;
    if (percent < min || percent > max) {
      event.preventDefault();
    }
  }

  public closeDialog() {
    this.display = false;
  }
}
