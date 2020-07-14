import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { FindBidoCounterReferencesByEquipmentCodeOutput } from '../../../../../../shared/types/api-output-types/fleet-management/find-bido-counter-references-by-equipment-code-output';
import { BidoCounterReferenceDTO } from '../../../../../../shared/types/api-types/bido-counter-reference-dto.interface';
import { BidoEquipmentDTO } from '../../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BireMeasureReferenceDTO } from '../../../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../../shared/types/popup-entry.interface';

import { CounterPopupFormService } from './counter-popup-form.service';

@Component({
  selector: 'aw-counter-popup-form',
  templateUrl: './counter-popup-form.component.html'
})
export class CounterPopupFormComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<FindBidoCounterReferencesByEquipmentCodeOutput>;

  @Input('equipment')
  public equipment: BidoEquipmentDTO | undefined;

  @Input('followedInRatingVisibility')
  public followedInRatingVisibility: boolean;

  @Output()
  public onSelection: EventEmitter<FindBidoCounterReferencesByEquipmentCodeOutput>;

  @Output()
  public onCreate: EventEmitter<FindBidoCounterReferencesByEquipmentCodeOutput>;

  public measure: FindBidoCounterReferencesByEquipmentCodeOutput;
  public propertyMeasureCode: LabelValue<string>[];
  public counterMap: Map<string, string>;
  public showRatingDialog: boolean;
  public propertyStatus: LabelValue<string>[];
  public keyMap: Map<string, Observable<LabelValue<string>[]>>;
  public counterCode: string;
  public ratingVisibility: boolean;
  public isRatingRequired: boolean;
  public selectedBireMeasureReferenceDTO: BireMeasureReferenceDTO;
  public structureType: string | undefined;
  public familyCode: string | undefined;
  public variantCode: string | undefined;

  public constructor(
    public counterPopupFormService: CounterPopupFormService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'MeasurePopupDialog');

    this.onSelection = new EventEmitter<BidoCounterReferenceDTO>();
    this.onCreate = new EventEmitter<BidoCounterReferenceDTO>();

    this.propertyMeasureCode = [];
    this.showRatingDialog = false;
    this.measure = {};
    this.counterMap = new Map<string, string>();
    this.selectedBireMeasureReferenceDTO = {};
  }

  public ngOnInit() {
    const codes = this.equipment && this.equipment.familyVariantCode && this.equipment.familyVariantCode.split('-');
    this.familyCode = codes && codes[0];
    this.variantCode = codes && codes[1];
    this.structureType = AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY;

    if (this.componentData && this.componentData.object) {
      this.measure = this.componentData.object;
    }

    this.loadCounterCode();
  }

  public loadCounterCode() {
    this.counterPopupFormService.findAllBireMeasureReferences().subscribe((results) => {
      const list: BireMeasureReferenceDTO[] = results;

      list.sort((a, b) => {
        if (a.counterCode && b.counterCode) {
          const counterCodeA = a.counterCode.toLowerCase();
          const counterCodeB = b.counterCode.toLowerCase();
          if (counterCodeA < counterCodeB) {
            return -1;
          }
          if (counterCodeA > counterCodeB) {
            return 1;
          }
        }

        return 0;
      });

      this.measure.counterCode = list[0].counterCode;

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

      this.getUnitCode();
      this.getRatingDataVisibility();
    });
  }

  public getUnitCode() {
    this.measure.counterUnit =
      !!this.measure && this.measure.counterCode != undefined ? this.counterMap.get(this.measure.counterCode) : '';
  }

  public onHide(): void {
    this.measure = {};
    this.display = false;
  }

  public onValidate(): void {
    if (this.measure.counterCode) {
      this.onCreate.emit(this.measure);
      this.display = false;
    } else {
      this.messageService.showErrorMessage('global.missingFields');
    }
  }

  public showDialog() {
    this.showRatingDialog = true;
  }

  // tslint:disable-next-line:no-any
  public onValidateRating(event: any) {
    this.measure.ratingCode = event.ratingCode;
  }

  private getRatingDataVisibility() {
    if (this.selectedBireMeasureReferenceDTO) {
      if (!this.selectedBireMeasureReferenceDTO.isCounter) {
        this.ratingVisibility = false;

        return;
      }
    }
    if (this.followedInRatingVisibility) {
      this.isRatingRequired = true;
    }

    this.ratingVisibility = this.followedInRatingVisibility;
  }
}
