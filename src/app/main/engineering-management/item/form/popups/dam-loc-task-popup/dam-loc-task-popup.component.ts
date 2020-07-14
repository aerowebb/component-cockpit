import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { BireDamageDTO } from '../../../../../../shared/types/api-types/bire-damage-dto.interface';
import { BireItemDTOId } from '../../../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireLocalisationItemDTO } from '../../../../../../shared/types/api-types/bire-localisation-item-dto.interface';
import { BireTaskDTO } from '../../../../../../shared/types/api-types/bire-task-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../../shared/types/popup-entry.interface';
import { ItemFormService } from '../../item-form.service';

interface BireDamLocTaskCustomOutput {
  localisationCode?: string;
  damageCode?: string;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  taskCode?: string;
  taskVersion?: string;
  versionNumber?: string;
  chapter?: string;
  section?: string;
  subject?: string;
  sheet?: string;
  marks?: string;
  damageDescription?: string;
  localisationDescription?: string;
  taskDesignation?: string;
}

@Component({
  selector: 'aw-dam-loc-task-popup',
  templateUrl: './dam-loc-task-popup.component.html'
})
export class DamLocTaskPopupComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BireDamLocTaskCustomOutput> | null;

  @Input('bireItemDTOId')
  public bireItemDTOId: BireItemDTOId;

  @Output()
  public onCreate: EventEmitter<BireDamLocTaskCustomOutput>;

  public bireDamLocTaskCustomOutput: BireDamLocTaskCustomOutput;
  public versionNumber: string;
  public itemVersionList: LabelValue<string>[];
  public showDamageListDialog: boolean;
  public showItemTaskSearchPopup: boolean;
  public showLocalisationListDialog: boolean;

  public constructor(
    private readonly messageService: MessageService,
    private readonly itemFormService: ItemFormService
  ) {
    super(ComponentOpenMode.Write, 'DamLocTaskPopupComponent');
    this.onCreate = new EventEmitter<BireDamLocTaskCustomOutput>();
  }

  public ngOnInit() {
    this.bireDamLocTaskCustomOutput = {};
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      if (!!this.componentData.object) {
        this.bireDamLocTaskCustomOutput = {
          damageCode: this.componentData.object.damageCode as string,
          localisationCode: this.componentData.object.localisationCode,
          taskCode: this.componentData.object.taskCode,
          taskVersion: this.componentData.object.taskVersion
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
      this.bireDamLocTaskCustomOutput.versionNumber = this.versionNumber;
      this.onCreate.emit(this.bireDamLocTaskCustomOutput);
      this.display = false;
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidDamLocisRequired'));
    }
  }

  public showLocalisationDialog() {
    this.showLocalisationListDialog = true;
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
    if (
      !!this.bireDamLocTaskCustomOutput.damageCode &&
      !!this.versionNumber &&
      !!this.bireDamLocTaskCustomOutput.localisationCode &&
      !!this.bireDamLocTaskCustomOutput.taskCode &&
      !!this.bireDamLocTaskCustomOutput.taskVersion
    ) {
      return true;
    }

    return false;
  }

  /**
   * Opens task search dialog
   */
  public taskSearchCode() {
    this.showItemTaskSearchPopup = true;
  }

  public setSelectedDamages(ev: BireDamageDTO) {
    this.bireDamLocTaskCustomOutput.damageCode = ev.damageCode;
    this.bireDamLocTaskCustomOutput.damageDescription = ev.damageDescription;
    this.showDamageListDialog = true;
  }

  public setSelectedLocalisation(ev: BireLocalisationItemDTO) {
    this.bireDamLocTaskCustomOutput.localisationCode = ev.localisationCode;
    this.bireDamLocTaskCustomOutput.localisationDescription = ev.localisationDescription;
    this.showLocalisationListDialog = true;
  }

  /**
   * On task selection
   */
  public addTask(task: BireTaskDTO) {
    this.showItemTaskSearchPopup = false;
    this.bireDamLocTaskCustomOutput.taskCode = task.taskCode;
    this.bireDamLocTaskCustomOutput.taskVersion = task.taskVersion;
    this.bireDamLocTaskCustomOutput.taskDesignation = task.taskDesignation;
  }

  public showDamageDialog() {
    this.showDamageListDialog = true;
  }
}
