import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { FindBireVariantVersionsByFamilyFunctionAlternativeDTO } from '../../../../../shared/types/api-types/find-bire-variant-versions-by-family-function-alternative-dto.interface';
import { FlModelsTableDTO } from '../../../../../shared/types/api-types/fl-models-table-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

import { ModelPopupFormService } from './model-popup-form.service';

@Component({
  selector: 'aw-model-popup-form',
  templateUrl: './model-popup-form.component.html'
})
export class ModelPopupFormComponent extends DialogComponent implements OnInit {
  public familyVariants: LabelValue<string>[];
  public familyVariantCode: string;
  public displayModelPopin: boolean;
  public findBireVariantVersion: FindBireVariantVersionsByFamilyFunctionAlternativeDTO[];
  public findBireVariantVersionFilter: FindBireVariantVersionsByFamilyFunctionAlternativeDTO[];

  @Input()
  public model: FlModelsTableDTO;
  @Input()
  public isReadOnlyForm: boolean;
  @Output()
  public onValidated: EventEmitter<FlModelsTableDTO>;

  public customerLinks: SelectItem[];
  public displayValue: boolean;

  public customerTableData: DialogTableData<FlModelsTableDTO>;
  public showCustomerDialog: boolean;

  public constructor(
    private readonly modelPopupFormService: ModelPopupFormService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'DialogModelComponent');

    this.onValidated = new EventEmitter<FlModelsTableDTO>();
    this.displayModelPopin = false;
    this.loadfamilyVariant();
  }

  public ngOnInit(): void {
    if (!this.model) {
      this.model = { bireModelDTO: {}, ratingName: undefined };
    } else {
      this.modelPopupFormService.findBireVariantVersionsByFamilyFunctionAlternative().subscribe((results) => {
        this.familyVariantCode = this.findBireVariantVersion.filter(
          (x) =>
            x.bireVariantVersionDTO.familyCode === this.model.bireModelDTO.familyCode &&
            x.bireVariantVersionDTO.variantCode === this.model.bireModelDTO.variantCode
        )[0].labelValue.value;
      });
    }
  }

  // To bind drop-down
  private loadfamilyVariant(): void {
    this.modelPopupFormService.findBireVariantVersionsByFamilyFunctionAlternative().subscribe((results) => {
      this.findBireVariantVersion = results;
      const list: LabelValue<string>[] = [];
      results.forEach((element) => {
        list.push(element.labelValue);
      });

      this.familyVariants = list;
    });
  }

  public onFamilyVariantSelected(event) {
    this.model = { bireModelDTO: {}, ratingName: undefined };
    if (event.value) {
      this.findBireVariantVersionFilter = this.findBireVariantVersion.filter((x) => x.labelValue.value === event.value);
      this.model.bireModelDTO.familyCode = this.findBireVariantVersionFilter[0].bireVariantVersionDTO.familyCode;
      this.model.bireModelDTO.structureType = this.findBireVariantVersionFilter[0].bireVariantVersionDTO.structureType;
      this.model.bireModelDTO.variantCode = this.findBireVariantVersionFilter[0].bireVariantVersionDTO.variantCode;
    }
  }

  public showDialog() {
    this.displayModelPopin = true;
  }

  public setSelectedCode(returnedObject, type) {
    if (type === 'model') {
      this.model.bireModelDTO.modelCode = returnedObject.modelCode;
      this.model.bireModelDTO.modelName = returnedObject.modelName;
      this.model.bireModelDTO.ratingCode = returnedObject.ratingCode;
      this.model.ratingName = returnedObject.ratingName;
      this.displayModelPopin = false;
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public validate(): void {
    if (
      !this.familyVariantCode ||
      this.familyVariantCode.trim().length === 0 ||
      (!this.model.bireModelDTO.modelCode || this.model.bireModelDTO.modelCode.trim().length === 0)
    ) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      this.onValidated.emit(this.model);
      this.display = false;
    }
  }
}
