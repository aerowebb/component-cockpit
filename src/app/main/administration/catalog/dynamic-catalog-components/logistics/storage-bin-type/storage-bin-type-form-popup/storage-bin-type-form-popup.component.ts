import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { BidtStorageBinTypeDTO } from '../../../../../../../shared/types/api-types/bidt-storage-bin-type-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-storage-bin-type-form-popup',
  templateUrl: './storage-bin-type-form-popup.component.html'
})
export class StorageBinTypeFormPopupComponent extends DialogComponent implements OnInit {
  @Output()
  public displayChange: EventEmitter<boolean>;

  @Input()
  public storageBinType: BidtStorageBinTypeDTO;

  @Input()
  public isNewStorageBinType: boolean;

  @Output()
  public onCreate: EventEmitter<BidtStorageBinTypeDTO>;

  @Output()
  public onUpdate: EventEmitter<BidtStorageBinTypeDTO>;

  public readonly componentId: string;

  public displayValue: boolean;

  public constructor() {
    super(ComponentOpenMode.Write, 'StorageBinTypeFormPopupComponent');

    this.onCreate = new EventEmitter<BidtStorageBinTypeDTO>();
    this.onUpdate = new EventEmitter<BidtStorageBinTypeDTO>();
  }

  public ngOnInit() {
    if (!this.storageBinType) {
      this.storageBinType = {};
    }
  }

  public associate(): void {
    if (!!this.storageBinType) {
      if (this.isNewStorageBinType) {
        this.onCreate.emit(this.storageBinType);
        this.display = false;
      } else {
        this.onUpdate.emit(this.storageBinType);
        this.display = false;
      }
    } else {
      super.throwUnboundLocalError('associate', 'this.storageBinType');
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public enableAssociateButton(): boolean {
    if (
      !!this.storageBinType &&
      !!this.storageBinType.sbtTypeName &&
      this.storageBinType.sbtTypeName.trim().length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  }
}
