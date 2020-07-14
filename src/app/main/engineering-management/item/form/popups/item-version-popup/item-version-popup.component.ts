import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { GetPartNumberStructureOutputDTO } from '../../../../../../shared/types/api-output-types/get-part-number-structure-output-dto.interface';
import { BireItemDTO } from '../../../../../../shared/types/api-types/bire-item-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { PopupEntry } from '../../../../../../shared/types/popup-entry.interface';

@Component({
  selector: 'aw-item-version-popup',
  templateUrl: './item-version-popup.component.html'
})
export class ItemVersionPopupComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<GetPartNumberStructureOutputDTO> | null;

  @Output()
  public onCreate: EventEmitter<GetPartNumberStructureOutputDTO>;

  public getPartNumberStructureOutputDTO: GetPartNumberStructureOutputDTO;

  public constructor(private readonly messageService: MessageService) {
    super(ComponentOpenMode.Write, 'ItemVersionPopupComponent');
    this.onCreate = new EventEmitter<BireItemDTO>();
  }

  public ngOnInit() {
    this.getPartNumberStructureOutputDTO = {};
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      if (!!this.componentData.object) {
        this.getPartNumberStructureOutputDTO = this.componentData.object;
      }
    }
  }

  /**
   * Validate Screen
   */
  public onValidate() {
    if (this.validateScreen()) {
      this.onCreate.emit(this.getPartNumberStructureOutputDTO);
      this.closeDialog();
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidVersionisRequired'));
    }
  }

  /**
   * Close popup
   */
  public onCancel() {
    this.display = false;
  }

  /**
   * Is required fields filled ?
   */
  private validateScreen(): boolean {
    if (!!this.getPartNumberStructureOutputDTO.versionNumber) {
      return true;
    }

    return false;
  }
}
