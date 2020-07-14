import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { BireDocumentDTO } from '../../../../../shared/types/api-types/bire-document-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-cockpit-bido-document',
  templateUrl: './dialog-cockpit-bido-document.component.html'
})
export class DialogCockpitBidoDocumentComponent extends DialogComponent implements OnInit {
  @Input()
  public document: BireDocumentDTO;
  @Input()
  public openMode: ComponentOpenMode;
  @Input()
  public types: SelectItem[];
  @Output()
  public onValidated: EventEmitter<BireDocumentDTO>;

  public constructor(public sessionService: SessionService) {
    super(ComponentOpenMode.Read, 'DialogCockpitBidoDocumentComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<BireDocumentDTO>();
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);

    if (!this.document) {
      this.document = {};
    }
  }

  public validate(): void {
    this.onValidated.emit(this.document);
    this.closeDialog();
  }
}
