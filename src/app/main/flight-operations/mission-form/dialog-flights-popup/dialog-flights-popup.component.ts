import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../shared/services/message.service';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { MissionFormService } from '../mission-form.service';

@Component({
  selector: 'aw-dialog-flights-popup',
  templateUrl: './dialog-flights-popup.component.html'
})
export class DialogFlightPopupComponent extends DialogComponent implements OnInit {
  @Input()
  // tslint:disable-next-line:no-any
  public popupFields: any | null;
  @Input()
  public isReadOnlyForm: boolean;
  @Output()
  // tslint:disable-next-line:no-any
  public onAdded: EventEmitter<any>;
  public readonly componentId: string;
  public displayValue: boolean;
  public familyVariants: LabelValue<string>[];
  public numberOfFlights: LabelValue<string>[];
  public showOperationTableDialog: boolean;
  public messageService: MessageService;
  public constructor(private readonly missionFormService: MissionFormService) {
    super(ComponentOpenMode.Write, 'DialogFlightPopupComponent');
    // tslint:disable-next-line:no-any
    this.onAdded = new EventEmitter<any>();
    this.showOperationTableDialog = false;
    this.familyVariants = [];
    this.numberOfFlights = [];
    this.loadDropDowns();
  }
  public ngOnInit() {
    if (!this.popupFields) {
      this.popupFields = {};
    }
  }

  public cancel(): void {
    this.display = false;
  }

  private loadDropDowns(): void {
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
      });
    const numberOfFlights = 20;
    for (let i = 1; i <= numberOfFlights; i++) {
      const labelValue: LabelValue<string> = {
        label: i.toString(),
        value: i.toString()
      };
      this.numberOfFlights.push(labelValue);
    }
  }
  public add() {
    if (this.popupFields.nbFlightsToCreate) {
      this.onAdded.emit(this.popupFields);
      this.display = false;
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('missingFields'));
    }
  }
}
