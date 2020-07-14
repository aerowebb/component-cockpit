import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { BireUnmountOrderDTO } from '../../../../../shared/types/api-types/bire-unmount-order-dto.interface';
import { BireVariantVersionDTOId } from '../../../../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Component({
  selector: 'aw-dialog-removal-order',
  templateUrl: './dialog-removal-order.component.html'
})
export class DialogRemovalOrderComponent extends DialogComponent implements OnInit {
  @Input()
  public bireVariantVersionSelected: BireVariantVersionDTOId;
  @Input()
  public removalOrder: BireUnmountOrderDTO;
  @Input()
  public openMode: ComponentOpenMode;
  @Output()
  public onValidated: EventEmitter<BireUnmountOrderDTO>;
  @Input()
  public disassemblyList: LabelValue<string>[];
  @Input()
  public disassemblyGroupRemoved: BireUnmountOrderDTO[];
  public disassemblyBefore: LabelValue<string>[];
  public disassemblyAfter: LabelValue<string>[];
  public disassemblyGroupRemovedList: string[];
  public filteredList: LabelValue<string>[];

  public constructor(private readonly messageService: MessageService) {
    super(ComponentOpenMode.Read, 'DialogRemovalOrderComponent');

    this.disassemblyBefore = [];
    this.disassemblyAfter = [];
    this.onValidated = new EventEmitter<BireUnmountOrderDTO>();
  }

  // To bind drop-down
  private loadDisassemblyBeforeAfter(): void {
    this.disassemblyBefore = this.disassemblyList;
    this.disassemblyAfter = this.disassemblyList;
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);
    this.loadDisassemblyBeforeAfter();
    if (!this.removalOrder) {
      this.removalOrder = {};
    }
    if (this.disassemblyList) {
      this.removalOrder.unmountCode = this.disassemblyList[0].label;
      this.removalOrder.unmUnmountCode = this.disassemblyList[0].label;
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public validate(): void {
    // Validate that it should not be same
    // if (
    //   this.removalOrder.unmountCode &&
    //   this.removalOrder.unmountCode.length > 0 &&
    //   this.removalOrder.unmUnmountCode &&
    //   this.removalOrder.unmUnmountCode.length > 0 &&
    //   this.removalOrder.unmountCode === this.removalOrder.unmUnmountCode
    // ) {
    //   this.messageService.showWarningMessage('');
    // } else {
    //   this.onValidated.emit(this.removalOrder);
    //   this.display = false;
    // }

    if (!this.removalOrder.unmountCode && !this.removalOrder.unmUnmountCode) {
      this.messageService.showWarningMessage(this.getTranslateKey('fillReqFields'));
    } else {
      if (this.removalOrder.unmountCode === this.removalOrder.unmUnmountCode) {
        this.messageService.showWarningMessage(this.getTranslateKey('warningOnSamedisassembly'));
      } else {
        this.onValidated.emit(this.removalOrder);
        this.display = false;
      }
    }
  }
}
