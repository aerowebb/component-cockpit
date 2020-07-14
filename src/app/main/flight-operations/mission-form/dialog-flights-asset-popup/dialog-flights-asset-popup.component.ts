import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../shared/services/date.service';
import { MissionEquipmentTableOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-mission-flight-table-output-dto';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { MissionFormService } from '../mission-form.service';

@Component({
  selector: 'aw-dialog-flights-asset-popup',
  templateUrl: './dialog-flights-asset-popup.component.html'
})
export class DialogFlightAssetPopupComponent extends DialogComponent implements OnInit {
  @Input('editFlightSelect')
  public selectFlight: MissionEquipmentTableOutputDTO;
  @Input()
  public isReadOnlyForm: boolean;
  @Output()
  // tslint:disable-next-line:no-any
  public onAdded: EventEmitter<any>;
  public familyVariants: LabelValue<string>[];
  public startDate: string | undefined;
  public endDate: string | undefined;
  public readonly componentId: string;

  public displayValue: boolean;
  public showOperationTableDialog: boolean;
  public selectedFamilyVariantCode: string | undefined;
  public selectedAssetValue: string | undefined;

  public constructor(
    private readonly missionFormService: MissionFormService,
    private readonly dateService: DateService
  ) {
    super(ComponentOpenMode.Write, 'DialogFlightAssetPopupComponent');
    // tslint:disable-next-line:no-any
    this.onAdded = new EventEmitter<any>();
    this.showOperationTableDialog = false;
    this.familyVariants = [];
  }

  public ngOnInit() {
    if (!this.selectFlight) {
      this.selectFlight = {};
    } else {
      this.loadFamilyVariant();
      this.startDate = this.dateService.dateWithHourToString(this.selectFlight.startDate);
      this.endDate = this.dateService.dateWithHourToString(this.selectFlight.endDate);
    }
  }
  public loadFamilyVariant() {
    this.missionFormService
      .getFamilyVariantCodeMap(AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY)
      .subscribe((results) => {
        results.forEach((variantElement) => {
          if (variantElement.variantCode !== '') {
            this.familyVariants.push({
              label: `${variantElement.familyCode}-${variantElement.variantCode}`,
              value: `${variantElement.familyCode}-${variantElement.variantCode}`
            });
          }
        });
        this.selectedFamilyVariantCode = this.selectFlight.familyVariantCode
          ? this.selectFlight.familyVariantCode
          : undefined;
        this.loadAssets();
      });
  }
  public loadAssets(): void {
    if (!!this.selectedFamilyVariantCode) {
      const familyVariantCode: MissionEquipmentTableOutputDTO = {
        familyVariantCode: this.selectedFamilyVariantCode
      };
      this.missionFormService.getAssetListBySearchCriteria(familyVariantCode).subscribe((result) => {
        const labelValue: LabelValue<string>[] = [];
        result.forEach((res) => {
          if (!!res) {
            labelValue.push({
              label: res.label,
              value: res.value
            });
          }
        });
        this.selectFlight.asset = labelValue;
        this.selectFlight.asset.forEach((res) => {
          if (this.selectFlight.assetCodeText && this.selectFlight.assetCodeText === res.label) {
            this.selectedAssetValue = res.value;
          }
        });
      });
    } else if (this.selectedFamilyVariantCode === null) {
      this.selectFlight.asset = [];
      this.selectedAssetValue = undefined;
    }
  }
  public cancel(): void {
    this.display = false;
  }

  public add() {
    if (this.selectedFamilyVariantCode !== undefined) {
      this.selectFlight.familyVariantCode = this.selectedFamilyVariantCode;
      this.selectFlight.assetCodeText = this.selectedAssetValue;
      this.onAdded.emit(this.selectFlight);
      this.display = false;
    }
  }
}
