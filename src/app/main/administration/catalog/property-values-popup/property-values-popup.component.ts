import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { CatalogPropertiesTableDTO } from '../../../../shared/types/api-output-types/administration-catalog/catalog-properties-table-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-property-values-popup',
  templateUrl: './property-values-popup.component.html'
})
export class PropertyValuesPopupComponent extends DialogComponent implements OnInit {
  @Output()
  public displayChange: EventEmitter<boolean>;

  @Input()
  public propertyValue: CatalogPropertiesTableDTO;

  @Input()
  public viewModePropertyValue: boolean;

  @Input()
  public isNewPropertyValue: boolean;

  @Output()
  public onCreate: EventEmitter<CatalogPropertiesTableDTO>;

  @Output()
  public onUpdate: EventEmitter<CatalogPropertiesTableDTO>;

  public readonly componentId: string;

  public displayValue: boolean;

  public constructor() {
    super(ComponentOpenMode.Write, 'PropertyValuesPopup');

    this.onCreate = new EventEmitter<CatalogPropertiesTableDTO>();
    this.onUpdate = new EventEmitter<CatalogPropertiesTableDTO>();
  }

  public ngOnInit() {
    if (!this.propertyValue) {
      this.propertyValue = {};
    }
  }

  public associate(): void {
    if (!!this.propertyValue) {
      if (this.isNewPropertyValue) {
        this.onCreate.emit(this.propertyValue);
        this.display = false;
      } else {
        this.onUpdate.emit(this.propertyValue);
        this.display = false;
      }
    } else {
      super.throwUnboundLocalError('associate', 'this.propertyValue');
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public enableAssociateButton(): boolean {
    if (
      !!this.propertyValue &&
      !!this.propertyValue.propertiesKey &&
      this.propertyValue.propertiesKey.trim().length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  }
}
