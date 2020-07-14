import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';

import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SessionService } from '../../../../shared/services/session.service';
import { BireDocPugDTO } from '../../../../shared/types/api-output-types/product-structure-management/bire-doc-pug-dto.interface';
import { BireDocumentDTO } from '../../../../shared/types/api-types/bire-document-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { FileUtils } from '../../../../shared/utils/file-utils';

@Component({
  selector: 'aw-dialog-bire-doc-pug',
  templateUrl: './dialog-bire-doc-pug.component.html',
  styleUrls: ['./dialog-bire-doc-pug.component.scss']
})
export class DialogBireDocPugComponent implements OnInit {
  @Input()
  public get display() {
    return this.displayValue;
  }
  public set display(displayValue) {
    this.displayValue = displayValue;
    this.displayChange.emit(this.displayValue);
  }

  @Output() public displayChange: EventEmitter<boolean>;

  @Input() public document: BireDocPugDTO;

  @Input() public isReadOnlyForm: boolean;
  @Output() public onValidated: EventEmitter<BireDocPugDTO>;

  public readonly componentId: string;

  public bireDocumentDto: BireDocumentDTO;

  public displayValue: boolean;
  public types: LabelValue<string>[];

  public constructor(
    public readonly sessionService: SessionService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    this.componentId = 'DialogDocumentComponent';

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<BireDocPugDTO>();

    this.loadTypes();
  }

  public ngOnInit(): void {
    if (!this.document) {
      this.document = {};
      this.document.bireDocumentDto = this.bireDocumentDto = {};
    } else {
      this.document = { ...this.document };
      if (!!this.document.bireDocumentDto) {
        this.bireDocumentDto = this.document.bireDocumentDto;
      }
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public validate(): void {
    this.document.bireDocumentDto = this.bireDocumentDto;
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
        if (fileContent && !!this.document && !!this.document.bireDocumentDto) {
          this.document.bireDocumentDto.docFile = fileContent;
          this.document.bireDocumentDto.docName = file.name;
          this.document.bireDocumentDto.docPublicationDate = new Date();
        }
      });

      fileUploader.clear();
    }
  }
}
