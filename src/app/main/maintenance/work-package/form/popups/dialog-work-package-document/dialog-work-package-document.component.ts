import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

import { ComponentConstants } from '../../../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../../../shared/services/date.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BidmDocumentDTO } from '../../../../../../shared/types/api-types/bidm-document-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { BidmDocumentUtils, DocumentRow } from '../../../../../../shared/utils/bidm-document-utils';

@Component({
  selector: 'aw-dialog-work-package-document',
  templateUrl: './dialog-work-package-document.component.html'
})
export class DialogWorkPackageDocumentComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public wpDocument: BidmDocumentDTO;

  public readonly componentId: string;
  public displayValue: boolean;
  public currentDoc: DocumentRow;

  public constructor(
    public readonly sessionService: SessionService,
    public messageService: MessageService,
    public dateService: DateService
  ) {
    super(ComponentOpenMode.Write, ComponentConstants.MAI_DIALOG_WORK_PACKAGE_DOCUMENT);
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_DIALOG_WORK_PACKAGE_DOCUMENT;
  }

  public ngOnInit(): void {
    this.updateOpenMode(ComponentOpenMode.Create);
    this.currentDoc = {
      docExtension: BidmDocumentUtils.formatDocExtension(this.wpDocument),
      docName: this.wpDocument.documentName as string,
      docPublicationDate: this.dateService.momentToString(moment(Number(this.wpDocument.documentPublicationDate))),
      docSize: BidmDocumentUtils.formatDocSize(this.wpDocument),
      docType: '',
      isChecked: false,
      _obj: this.wpDocument
    };
  }

  public closeDialog(): void {
    this.display = false;
  }
}
