import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../../../shared/services/session.service';
import { BidtContractDTO } from '../../../../../../../shared/types/api-types/bidt-contract-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';
import { SelectItemUtils } from '../../../../../../../shared/utils/select-item-utils';

@Component({
  selector: 'aw-dialog-contract',
  templateUrl: './dialog-contract.component.html'
})
export class DialogContractComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public contractList: BidtContractDTO[];

  @Input()
  public data: BidtContractDTO;

  @Output()
  public onValidated: EventEmitter<BidtContractDTO>;

  @Output()
  public onUpdate: EventEmitter<BidtContractDTO>;

  public bidtContractDTO: BidtContractDTO;
  public contractType: SelectItem[];

  public constructor(
    private readonly messageService: MessageService,
    public readonly sessionService: SessionService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Read, 'DialogContractComponent');
    this.onValidated = new EventEmitter<BidtContractDTO>();
    this.onUpdate = new EventEmitter<BidtContractDTO>();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    if (!this.data) {
      this.data = {};
    } else {
      this.bidtContractDTO = { ...this.data };
    }

    this.filldropdown();
  }

  /**
   * Render dropdown
   */
  private filldropdown(): void {
    this.propertiesService.getValue('getHrContractTypeMap').subscribe((results) => {
      this.contractType = !!results ? SelectItemUtils.fromLabelValues(results) : [];
      this.contractType.unshift({
        label: '',
        value: undefined
      });
    });
  }

  /**
   * validate screen and emit data
   */
  public validate(): void {
    if (this.isScreenValidated()) {
      if (this.openMode === ComponentOpenMode.Write) {
        this.data = { ...this.bidtContractDTO };
        this.onUpdate.emit(this.data);
        this.closeDialog();
      } else if (this.openMode === ComponentOpenMode.Create) {
        this.data = { ...this.bidtContractDTO };
        this.onValidated.emit(this.data);
        this.closeDialog();
      }
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
    }
  }

  /**
   * Is fields filled
   */
  private isScreenValidated() {
    if (!this.bidtContractDTO.contractName) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Close dialog event
   */
  public closeDialog() {
    this.display = false;
  }
}
