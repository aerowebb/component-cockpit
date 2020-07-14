import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { BireItemDTOId } from '../../../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireLocalisationItemDTO } from '../../../../../../shared/types/api-types/bire-localisation-item-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../../shared/types/popup-entry.interface';
import { ItemFormService } from '../../item-form.service';

@Component({
  selector: 'aw-localisation-popup',
  templateUrl: './localisation-popup.component.html'
})
export class LocalisationPopupComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BireLocalisationItemDTO> | null;

  @Input('bireItemDTOId')
  public bireItemDTOId: BireItemDTOId;

  @Output()
  public onCreate: EventEmitter<BireLocalisationItemDTO>;

  public bireLocalisationItemDTO: BireLocalisationItemDTO;
  public versionNumber: string;
  public itemVersionList: LabelValue<string>[];
  public showLocalisationListDialog: boolean;

  public constructor(
    private readonly messageService: MessageService,
    private readonly itemFormService: ItemFormService
  ) {
    super(ComponentOpenMode.Write, 'LocalisationPopupComponent');
    this.onCreate = new EventEmitter<BireLocalisationItemDTO>();
  }

  public ngOnInit() {
    this.bireLocalisationItemDTO = {};
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      if (!!this.componentData.object) {
        this.bireLocalisationItemDTO = {
          localisationCode: this.componentData.object.localisationCode
        };
        if (!!this.componentData.object.versionNumber) {
          this.versionNumber = this.componentData.object.versionNumber;
        }
      }
    }
    this.renderDropdown();
  }

  private renderDropdown(): void {
    this.itemFormService.findBireItemVersions(this.bireItemDTOId).subscribe((results) => {
      this.itemVersionList = results;
    });
  }

  /**
   * Validate Screen
   */
  public onValidate() {
    if (this.validateScreen()) {
      this.onCreate.emit(this.bireLocalisationItemDTO);
      this.display = false;
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidRepairCenterisRequired'));
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
    if (!!this.bireLocalisationItemDTO.localisationCode && !!this.bireLocalisationItemDTO.versionNumber) {
      return true;
    }

    return false;
  }

  public setSelectedItems(ev: BireLocalisationItemDTO) {
    this.bireLocalisationItemDTO = ev;
    this.bireLocalisationItemDTO.versionNumber = this.versionNumber;
    this.showLocalisationListDialog = true;
  }

  public showLocalisationDialog() {
    this.showLocalisationListDialog = true;
  }
}
