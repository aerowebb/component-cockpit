import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { FileUpload } from 'primeng/fileupload';

import { ComponentConstants } from '../../../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BidmDocumentDTO } from '../../../../../../shared/types/api-types/bidm-document-dto.interface';
import { BidmWorkOrderDTO } from '../../../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { BidmDocumentUtils } from '../../../../../../shared/utils/bidm-document-utils';
import { FileUtils } from '../../../../../../shared/utils/file-utils';

@Component({
  selector: 'aw-dialog-import-work-order-document',
  templateUrl: './dialog-import-work-order-document.component.html'
})
export class DialogImportWorkOrderDocumentComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public woDocument: BidmDocumentDTO;

  @Input()
  public woDocumentList: BidmDocumentDTO[];

  @Input()
  public workOrder: BidmWorkOrderDTO;

  @Output()
  public onUpdatedWODoc: EventEmitter<BidmDocumentDTO>;

  @Output()
  public onAddedWODoc: EventEmitter<BidmDocumentDTO>;

  public readonly componentId: string;
  public displayValue: boolean;
  public types: LabelValue<string>[];

  public constructor(public readonly sessionService: SessionService, public messageService: MessageService) {
    super(ComponentOpenMode.Write, ComponentConstants.MAI_DIALOG_IMPORT_ORDER_DOCUMENT);

    this.onAddedWODoc = new EventEmitter<BidmDocumentDTO>();
    this.onUpdatedWODoc = new EventEmitter<BidmDocumentDTO>();
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_DIALOG_IMPORT_ORDER_DOCUMENT;
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);
    if (this.openMode === ComponentOpenMode.Create) {
      this.woDocument = {};
    }
  }

  public validate(): void {
    if (this.openMode === ComponentOpenMode.Create) {
      this.onAddedWODoc.emit(this.woDocument);
    } else {
      this.onUpdatedWODoc.emit(this.woDocument);
    }
    this.closeDialog();
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (!!event.files) {
      const file: File = event.files[0];

      // Check if the file already exists
      const fileExists = this.woDocumentList.some((document) => document.documentName === file.name);
      if (fileExists) {
        this.messageService.showWarningMessage('global.warningOnFileExists');
      } else {
        FileUtils.getFileContentAsBase64(file, (fileContent) => {
          if (!!fileContent) {
            this.woDocument = {
              bidProjectId: this.workOrder.projectId,
              woId: this.workOrder.woId,
              documentCode: file.name,
              documentName: file.name,
              documentContent: fileContent,
              documentDescription: this.woDocument.documentDescription,
              documentType: BidmDocumentUtils.typeFile(file.name),
              documentPublicationDate: moment().toDate(),
              statusState: this.workOrder.statusState,
              statusUser: this.workOrder.statusUser,
              statusDate: this.workOrder.statusDate
            };
          }
        });
      }

      fileUploader.clear();
    }
  }

  public closeDialog(): void {
    this.display = false;
  }
}
