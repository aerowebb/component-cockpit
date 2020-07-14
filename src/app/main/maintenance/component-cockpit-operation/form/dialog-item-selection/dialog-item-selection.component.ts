import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { BireItemDTO } from '../../../../../shared/types/api-types/bire-item-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Component({
  selector: 'aw-dialog-item-selection',
  templateUrl: './dialog-item-selection.component.html'
})
export class DialogItemSelectionComponent extends DialogComponent implements OnInit {
  @Input() public bireItemDTOList: BireItemDTO[];
  @Input() public pn: string;
  @Output() public addBireItem: EventEmitter<BireItemDTO>;

  public bireItemList: LabelValue<BireItemDTO>[];
  public bireItemSelected: BireItemDTO;

  public constructor(private readonly messageService: MessageService) {
    super(ComponentOpenMode.Read, 'DialogItemSelectionComponent');
    this.addBireItem = new EventEmitter<BireItemDTO>();
  }

  public ngOnInit() {
    this.bireItemSelected = {};
    this.bireItemList = [];
    if (!!this.bireItemDTOList && this.bireItemDTOList.length > 0) {
      this.bireItemDTOList.forEach((res) => {
        this.bireItemList.push({
          label: `${res.familyCode}-${res.variantCode} / ${[
            res.chapter,
            res.section,
            res.subject,
            res.sheet,
            res.marks
          ].join('-')} / ${res.name}`,
          value: res
        });
      });

      if (this.bireItemList.length > 0) {
        this.bireItemSelected = this.bireItemList[0].value;
      }
    }
  }

  public validate() {
    if (this.validateScreen()) {
      this.addBireItem.emit(this.bireItemSelected);
      this.closeDialog();
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
    }
  }

  private validateScreen(): boolean {
    return true;
  }
}
