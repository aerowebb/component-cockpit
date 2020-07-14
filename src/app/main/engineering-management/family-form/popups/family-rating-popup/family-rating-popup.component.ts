import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { BireRatingDTO } from '../../../../../shared/types/api-types/bire-rating-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';

@Component({
  selector: 'aw-family-rating-popup',
  templateUrl: './family-rating-popup.component.html',
  styleUrls: ['../popup-form.component.scss']
})
export class FamilyRatingPopupFormComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BireRatingDTO> | null;

  public isNewRating: boolean;

  @Output()
  public onCreate: EventEmitter<BireRatingDTO>;

  @Output()
  public onUpdate: EventEmitter<BireRatingDTO>;

  public bireRatingObject: BireRatingDTO;

  public constructor(private readonly messageService: MessageService) {
    super(ComponentOpenMode.Write, 'FamilyFormComponent');

    this.onCreate = new EventEmitter<BireRatingDTO>();

    this.onUpdate = new EventEmitter<BireRatingDTO>();

    this.displayChange = new EventEmitter<boolean>();
  }

  public ngOnInit() {
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);

      if (!!this.componentData && !!this.componentData.object && !this.isEmpty(this.componentData.object)) {
        this.bireRatingObject = this.componentData.object;
        this.isNewRating = false;
      } else {
        this.bireRatingObject = {};
        this.isNewRating = true;
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
    this.bireRatingObject = {};
    this.display = false;
  }

  private isOneRequiredFieldNull() {
    return !this.bireRatingObject.ratingCode;
  }

  public onValidate(): void {
    if (!this.isOneRequiredFieldNull()) {
      if (this.isNewRating) {
        this.onCreate.emit(this.bireRatingObject);
      } else {
        this.onUpdate.emit(this.bireRatingObject);
      }
      this.display = false;
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnRequiredField'));
    }
  }
}
