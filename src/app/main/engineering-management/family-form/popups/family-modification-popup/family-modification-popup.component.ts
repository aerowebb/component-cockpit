import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { BireModificationDTO } from '../../../../../shared/types/api-types/bire-modification-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';

@Component({
  selector: 'aw-family-modification-popup',
  templateUrl: './family-modification-popup.component.html',
  styleUrls: ['../popup-form.component.scss']
})
export class FamilyModificationPopupFormComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BireModificationDTO> | null;

  public isNewModification: boolean;

  @Output()
  public onCreate: EventEmitter<BireModificationDTO>;

  @Output()
  public onUpdate: EventEmitter<BireModificationDTO>;

  public bireModificationObject: BireModificationDTO;
  public isEditable: boolean = true;

  public constructor(private readonly messageService: MessageService) {
    super(ComponentOpenMode.Write, 'FamilyFormComponent');

    this.onCreate = new EventEmitter<BireModificationDTO>();
    this.onUpdate = new EventEmitter<BireModificationDTO>();
  }

  public ngOnInit() {
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);

      if (!!this.componentData && !!this.componentData.object && !this.isEmpty(this.componentData.object)) {
        this.bireModificationObject = this.componentData.object;
        this.isNewModification = false;
        this.isEditable = false;
      } else {
        this.bireModificationObject = {};
        this.isNewModification = true;
      }
    }
  }

  private isEmpty(obj): boolean {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return true;
  }

  public onShow() {
    this.display = true;
  }

  public onCancel(): void {
    this.bireModificationObject = {};
    this.display = false;
  }

  private isOneRequiredFieldNull() {
    return (
      !this.bireModificationObject.modificationNumber ||
      !this.bireModificationObject.modificationType ||
      !this.bireModificationObject.modificationRevisionNumber
    );
  }

  public onValidate(): void {
    if (!this.isOneRequiredFieldNull()) {
      if (this.isValidURL(this.bireModificationObject.modificationDocumentUrl)) {
        if (this.isNewModification) {
          this.onCreate.emit(this.bireModificationObject);
        } else {
          this.onUpdate.emit(this.bireModificationObject);
        }
        this.display = false;
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidModificationURLisRequired'));
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnRequiredField'));
    }
  }

  private isValidURL(url): boolean {
    if (!!url) {
      // tslint:disable-next-line:max-line-length
      const pattern = /^http(s{0,1}):\/\/\w+([a-zA-Z0-9_\/\-\.]+\.([A-Za-z\/]{2,5})|(6553[0-5]|655[0-2]|65[0-4]{0,2}|6[0-4]|5|[0-9]{0,3}))[a-zA-Z0-9_\/\&\?\=\-\.\~\%]*/;
      const regex = new RegExp(pattern);

      return regex.test(url);
    }

    return true;
  }
}
