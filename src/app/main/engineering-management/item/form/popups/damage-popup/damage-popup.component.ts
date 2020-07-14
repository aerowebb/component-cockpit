import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { BireDamageDTO } from '../../../../../../shared/types/api-types/bire-damage-dto.interface';
import { BireItemDTOId } from '../../../../../../shared/types/api-types/bire-item-dto-id.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../../shared/types/popup-entry.interface';
import { ItemFormService } from '../../item-form.service';

interface BireDamageDTOCustom {
  damageCode?: string;
  damageDescription?: string;
  unitCode?: string;
  versionNumber?: string;
}

interface DamagesWithItemVersionOutputCustom {
  damageCode?: string;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  chapter?: string;
  sheet?: string;
  marks?: string;
  section?: string;
  subject?: string;
  versionNumber?: string;
  description?: string;
}

@Component({
  selector: 'aw-damage-popup',
  templateUrl: './damage-popup.component.html'
})
export class DamagePopupComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<DamagesWithItemVersionOutputCustom> | null;

  @Input('bireItemDTOId')
  public bireItemDTOId: BireItemDTOId;

  @Output()
  public onCreate: EventEmitter<BireDamageDTOCustom>;

  public bireDamageDTO: BireDamageDTO;
  public versionNumber: String;
  public itemVersionList: LabelValue<string>[];
  public showDamageListDialog: boolean;

  public constructor(
    private readonly messageService: MessageService,
    private readonly itemFormService: ItemFormService
  ) {
    super(ComponentOpenMode.Write, 'DamagePopupComponent');
    this.onCreate = new EventEmitter<BireDamageDTOCustom>();
  }

  public ngOnInit() {
    this.bireDamageDTO = {};
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      if (!!this.componentData.object) {
        this.bireDamageDTO = {
          damageCode: this.componentData.object.damageCode,
          damageDescription: this.componentData.object.description
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
      const bireDamageDTOCustom: BireDamageDTOCustom = {
        damageCode: this.bireDamageDTO.damageCode,
        damageDescription: this.bireDamageDTO.damageDescription,
        unitCode: this.bireDamageDTO.unitCode,
        versionNumber: this.versionNumber as string
      };
      this.onCreate.emit(bireDamageDTOCustom);
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
    if (!!this.bireDamageDTO.damageCode && !!this.versionNumber) {
      return true;
    }

    return false;
  }

  public setSelectedItems(ev: BireDamageDTO) {
    this.bireDamageDTO = ev;
    this.showDamageListDialog = true;
  }

  public showDamageDialog() {
    this.showDamageListDialog = true;
  }
}
