import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { BireItemDTO } from '../../../../../shared/types/api-types/bire-item-dto.interface';
import { BireVersionPnDTO } from '../../../../../shared/types/api-types/bire-version-pn-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { ItemPartNumberService } from '../../form/item-part-number.service';

@Component({
  selector: 'aw-add-associated-config-pack-popup',
  templateUrl: './add-associated-config-pack-popup.component.html'
})
export class AddAssociatedConfigPackPopupComponent extends DialogComponent implements OnInit {
  @Output()
  public onAdded: EventEmitter<string>;

  @Input()
  public data: BireVersionPnDTO;

  public optionCodeList: LabelValue<string>[];
  public selectedOptionCode: string;

  public constructor(
    public sessionService: SessionService,
    private readonly itemPartNumberService: ItemPartNumberService
  ) {
    super(ComponentOpenMode.Write, 'AddAssociatedConfigPackPopupComponent');

    this.onAdded = new EventEmitter<string>();
  }

  public ngOnInit() {
    const bireConf: BireVersionPnDTO | undefined = this.data;
    if (!!bireConf) {
      const bireItem: BireItemDTO = {
        familyCode: bireConf.familyCode,
        structureType: bireConf.structureType,
        variantCode: bireConf.variantCode,
        chapter: bireConf.chapter,
        section: bireConf.section,
        subject: bireConf.subject,
        sheet: bireConf.sheet,
        marks: bireConf.marks
      };
      this.itemPartNumberService
        .findBirePackBaseOptionsByItemDropDown(bireItem)
        .subscribe((res: LabelValue<string>[]) => {
          this.optionCodeList = res;
        });
    }
  }

  public validate(): void {
    this.onAdded.emit(this.selectedOptionCode);
    this.display = false;
  }

  public onCancel() {
    this.display = false;
  }
}
