import { Component, EventEmitter, Output } from '@angular/core';

import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { ListUtils } from '../../../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../../shared/utils/string-utils';
import { FlightFormService } from '../flight-form.service';

@Component({
  selector: 'aw-dialog-add-defect',
  templateUrl: './dialog-add-defect.component.html'
})
export class DialogAddDefectComponent extends DialogComponent {
  @Output()
  public onValidated: EventEmitter<string>;

  public defectTypeList: LabelValue<string>[];
  public defectTypeSelected: string | undefined;

  public constructor(private readonly flightFormService: FlightFormService) {
    super(ComponentOpenMode.Write, 'DialogAddDefectComponent');

    this.init();
    this.loadDefectTypeList();
  }

  public isValid(): boolean {
    return ObjectUtils.isDefined(this.defectTypeSelected);
  }

  public validate(): void {
    this.onValidated.emit(this.defectTypeSelected);
    this.closeDialog();
  }

  private init(): void {
    this.defectTypeList = [];
    this.defectTypeSelected = undefined;

    this.onValidated = new EventEmitter<string>();
  }

  private loadDefectTypeList(): void {
    this.flightFormService
      .findAllBidoNotificationTypesByTypeCategory(AWPropertiesConstants.EVENT_CATEGORY_DEFECT_KEY)
      .subscribe((results) => {
        this.defectTypeList = ListUtils.orEmpty(results)
          .filter(
            (result) =>
              !StringUtils.isNullOrEmpty(result.typeCode) && !StringUtils.isNullOrEmpty(result.typeDescription)
          )
          .map((result) => {
            return {
              label: result.typeDescription as string,
              value: result.typeCode as string
            };
          });
      });
  }
}
