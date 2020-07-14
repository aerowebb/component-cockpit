import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { BidoDocumentationDTO } from '../../../../../shared/types/api-types/bido-documentation-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-defect-bido-document',
  templateUrl: './dialog-defect-bido-document.component.html'
})
export class DialogDefectBidoDocumentComponent extends DialogComponent implements OnInit {
  @Input()
  public document: BidoDocumentationDTO;
  @Input()
  public openMode: ComponentOpenMode;
  @Input()
  public types: SelectItem[];
  @Output()
  public onValidated: EventEmitter<BidoDocumentationDTO>;

  public constructor() {
    super(ComponentOpenMode.Read, 'DialogDefectBidoDocumentComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<BidoDocumentationDTO>();
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);

    if (!this.document) {
      this.document = {};
    }
    if (!this.types) {
      this.types = [];
    }
  }

  public validate(): void {
    this.onValidated.emit(this.document);
    this.closeDialog();
  }
}
