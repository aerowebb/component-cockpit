import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { BidtStorageConditionDTO } from '../../../../../../../shared/types/api-types/bidt-storage-condition-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-storage-condition-form-popup',
  templateUrl: './storage-condition-form-popup.component.html'
})
export class StorageConditionFormPopupComponent extends DialogComponent implements OnInit {
  @Output()
  public displayChange: EventEmitter<boolean>;

  @Input()
  public storageCondition: BidtStorageConditionDTO;

  @Input()
  public isNewStorageCondition: boolean;

  @Output()
  public onCreate: EventEmitter<BidtStorageConditionDTO>;

  @Output()
  public onUpdate: EventEmitter<BidtStorageConditionDTO>;

  public readonly componentId: string;

  public displayValue: boolean;

  public constructor(private readonly messageService: MessageService) {
    super(ComponentOpenMode.Write, 'StorageConditionFormPopupComponent');

    this.onCreate = new EventEmitter<BidtStorageConditionDTO>();
    this.onUpdate = new EventEmitter<BidtStorageConditionDTO>();
  }

  public ngOnInit() {
    if (!this.storageCondition) {
      this.storageCondition = {};
    }
  }

  public associate(): void {
    if (this.isRangeValid() && !!this.storageCondition) {
      if (this.isNewStorageCondition) {
        this.onCreate.emit(this.storageCondition);
        this.display = false;
      } else {
        this.onUpdate.emit(this.storageCondition);
        this.display = false;
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('percentRangeError'));
    }
  }

  private isRangeValid(): boolean {
    const min = -9223372036854775808;
    const max = 9223372036854775807;

    const percent = !!this.storageCondition && this.storageCondition.scNumberInContainer;
    if (!!percent && (percent < min || percent > max)) {
      return false;
    }

    return true;
  }

  public cancel(): void {
    this.display = false;
  }

  public maxLengthCheck(event, percent) {
    const min = -922337203685477580;
    const max = 922337203685477580;
    if (percent < min || percent > max) {
      event.preventDefault();
    }
  }

  public enableAssociateButton(): boolean {
    if (!!this.storageCondition && !!this.storageCondition.scName && this.storageCondition.scName.trim().length !== 0) {
      return true;
    } else {
      return false;
    }
  }
}
