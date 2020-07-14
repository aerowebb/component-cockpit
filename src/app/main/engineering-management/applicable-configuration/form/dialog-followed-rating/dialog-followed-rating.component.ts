import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { BireRatingDTO } from '../../../../../shared/types/api-types/bire-rating-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-followed-rating',
  templateUrl: './dialog-followed-rating.component.html'
})
export class DialogFollowedRatingComponent extends DialogComponent implements OnInit {
  @Input()
  public bireRatingInput: BireRatingDTO;

  @Input()
  public openMode: ComponentOpenMode;

  @Output()
  public onValidated: EventEmitter<BireRatingDTO>;

  public selectedRating: BireRatingDTO;

  public customerLinks: SelectItem[];

  public showDialog: boolean;
  public isEditable: boolean = true;

  public constructor(private readonly messageService: MessageService) {
    super(ComponentOpenMode.Read, 'DialogFollowedRatingComponent');

    this.onValidated = new EventEmitter<BireRatingDTO>();
    this.selectedRating = {};

    this.showDialog = false;
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);
    if (!!this.bireRatingInput && !!this.bireRatingInput.ratingCode) {
      this.selectedRating = this.bireRatingInput;
    }
  }

  public showRatingDialog(): void {
    this.showDialog = false;
    if (!this.isReadOpenMode) {
      this.showDialog = true;
    }
  }

  public validate(): void {
    if (!!this.selectedRating && !this.selectedRating.ratingCode) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      this.onValidated.emit(this.selectedRating);
      this.closeDialog();
    }
  }

  /**
   * Event on setting rating
   */
  public setSelectedRating(bireRatingDTO: BireRatingDTO) {
    if (!!bireRatingDTO) {
      this.selectedRating = bireRatingDTO;
    }
  }
}
