import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { AWPropertiesConstants } from '../../../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';
import { ObjectUtils } from '../../../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../../../shared/utils/string-utils';

@Component({
  selector: 'aw-dialog-add-load',
  templateUrl: './dialog-add-load.component.html'
})
export class DialogAddLoadComponent extends DialogComponent {
  public readonly aWPropertiesConstants: typeof AWPropertiesConstants;

  public category: string | undefined;
  public uom: string | undefined;
  public value: number | undefined;

  // Inputs *********************************************************************

  @Input()
  public defaultVolumeUnitCode: string | undefined;

  @Input()
  public loadCategoryList: SelectItem[];

  @Input()
  public uomList: SelectItem[];

  // Outputs ********************************************************************

  @Output()
  public onValidate: EventEmitter<{ category: string; value: string; uom: string }>;

  // ****************************************************************************

  public constructor() {
    super(ComponentOpenMode.Read, 'DialogAddLoadComponent');

    this.aWPropertiesConstants = AWPropertiesConstants;

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.category = undefined;
    this.uom = undefined;
    this.value = undefined;
  }

  private onBeforeLoadOnce(): void {
    this.onValidate = new EventEmitter<{ category: string; value: string; uom: string }>();
  }

  // ****************************************************************************

  public isLoadValid(): boolean {
    return (
      !StringUtils.isNullOrEmpty(this.category) &&
      ObjectUtils.isDefined(this.value) &&
      !StringUtils.isNullOrEmpty(this.uom)
    );
  }

  public onChangeLoadCategory(): void {
    if (this.category) {
      if (
        this.category === AWPropertiesConstants.FLIGHT_LOAD_CATEGORY_FUEL_KEY ||
        this.category === AWPropertiesConstants.FLIGHT_LOAD_CATEGORY_OIL_KEY
      ) {
        this.uom = this.defaultVolumeUnitCode;
      } else {
        this.uom = undefined;
      }
    }
  }

  public validate(): void {
    this.onValidate.emit({
      category: this.category as string,
      value: (this.value as number).toString(),
      uom: this.uom as string
    });
    super.closeDialog();
  }
}
