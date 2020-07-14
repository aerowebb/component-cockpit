import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { BirePackBaseOptionDTO } from '../../../../../../shared/types/api-types/bire-pack-base-option-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../../shared/types/popup-entry.interface';

@Component({
  selector: 'aw-configuration-pack-popup',
  templateUrl: './configuration-pack-popup.component.html'
})
export class ConfigurationPackPopupComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BirePackBaseOptionDTO> | null;

  @Input()
  public typeList: LabelValue<string>[];

  @Output()
  public onValidated: EventEmitter<BirePackBaseOptionDTO>;

  public birePackBaseOptionDTO: BirePackBaseOptionDTO;
  public title: string;

  public constructor() {
    super(ComponentOpenMode.Write, 'ConfigurationPackPopupComponent');
    this.onValidated = new EventEmitter<BirePackBaseOptionDTO>();
  }

  public ngOnInit() {
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      if (!!this.componentData.object) {
        this.birePackBaseOptionDTO = this.componentData.object as BirePackBaseOptionDTO;
        this.title = 'edit';
      } else {
        this.birePackBaseOptionDTO = {
          packType: '1'
        };
        this.title = 'new';
      }
    }
  }

  /**
   * Validate Screen
   */
  public onValidate() {
    this.onValidated.emit(this.birePackBaseOptionDTO);
    this.display = false;
  }

  /**
   * Close popup
   */
  public onCancel() {
    this.display = false;
  }
}
