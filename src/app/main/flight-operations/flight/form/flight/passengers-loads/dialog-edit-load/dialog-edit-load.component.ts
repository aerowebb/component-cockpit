import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { AWPropertiesConstants } from '../../../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';
import { ObjectUtils } from '../../../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../../../shared/utils/string-utils';
import { LoadRow } from '../types/load-row.interface';

@Component({
  selector: 'aw-dialog-edit-load',
  templateUrl: './dialog-edit-load.component.html'
})
export class DialogEditLoadComponent extends DialogComponent implements OnInit {
  public readonly aWPropertiesConstants: typeof AWPropertiesConstants;

  public uom: string | undefined;
  public value: number | undefined;

  // Inputs *********************************************************************

  @Input()
  public loadRow: LoadRow;

  @Input()
  public uomList: SelectItem[];

  // Outputs ********************************************************************

  @Output()
  public onValidate: EventEmitter<{ value: string; uom: string }>;

  // ****************************************************************************

  public constructor() {
    super(ComponentOpenMode.Read, 'DialogEditLoadComponent');

    this.aWPropertiesConstants = AWPropertiesConstants;

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  public ngOnInit(): void {
    this.uom = this.loadRow._uomCode;
    this.value = Number(this.loadRow.value);
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.uom = undefined;
    this.value = undefined;
  }

  private onBeforeLoadOnce(): void {
    this.onValidate = new EventEmitter<{ value: string; uom: string }>();
  }

  // ****************************************************************************

  public isLoadValid(): boolean {
    return ObjectUtils.isDefined(this.value) && !StringUtils.isNullOrEmpty(this.uom);
  }

  public validate(): void {
    this.onValidate.emit({ value: (this.value as number).toString(), uom: this.uom as string });
    super.closeDialog();
  }
}
