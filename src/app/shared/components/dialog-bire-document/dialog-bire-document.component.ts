import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';

import { BireDocumentDTO } from '../../../shared/types/api-types/bire-document-dto.interface';
import { GenericPropertyConstants } from '../../constants/generic-property-constants';
import { MessageService } from '../../services/message.service';
import { PropertiesService } from '../../services/properties.service';
import { SessionService } from '../../services/session.service';
import { LabelValue } from '../../types/label-value.interface';
import { FileUtils } from '../../utils/file-utils';

@Component({
  selector: 'aw-dialog-bire-document',
  templateUrl: './dialog-bire-document.component.html',
  styleUrls: ['./dialog-bire-document.component.scss']
})
export class DialogBireDocumentComponent implements OnInit {
  @Input()
  public get display() {
    return this.displayValue;
  }
  public set display(displayValue) {
    this.displayValue = displayValue;
    this.displayChange.emit(this.displayValue);
  }

  @Output() public displayChange: EventEmitter<boolean>;

  @Input() public document: BireDocumentDTO;
  @Input() public isReadOnlyForm: boolean;
  @Output() public onValidated: EventEmitter<BireDocumentDTO>;

  public readonly componentId: string;

  public displayValue: boolean;
  public types: LabelValue<string>[];

  public constructor(
    public readonly sessionService: SessionService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    this.componentId = 'DialogDocumentComponent';

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<BireDocumentDTO>();

    this.loadTypes();
  }

  public ngOnInit(): void {
    if (!this.document) {
      this.document = {};
    } else {
      this.document = { ...this.document };
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public validate(): void {
    this.onValidated.emit(this.document);
    this.display = false;
  }

  private loadTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.DOC_PARTNER_CATEGORY_MAP).subscribe(
      (results) => {
        this.types = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.componentId + '.errorOnGetTypes');
      }
    );
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (event.files) {
      const file: File = event.files[0];
      FileUtils.getFileContentAsBase64(file, (fileContent) => {
        if (fileContent) {
          this.document.docFile = fileContent;
          this.document.docName = file.name;
          this.document.docPublicationDate = new Date();
        }
      });

      fileUploader.clear();
    }
  }

  public isValidateEnabled() {
    return this.document.docName;
  }
}
