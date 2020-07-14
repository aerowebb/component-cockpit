import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';

import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BidoDocumentationDTO } from '../../../../../shared/types/api-types/bido-documentation-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { FileUtils } from '../../../../../shared/utils/file-utils';

@Component({
  selector: 'aw-sb-ad-import-popup',
  templateUrl: './sb-ad-import-popup.component.html'
})
export class SbadImportPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public get display() {
    return this.displayValue;
  }
  public set display(displayValue) {
    this.displayValue = displayValue;
    this.displayChange.emit(this.displayValue);
  }

  @Output() public displayChange: EventEmitter<boolean>;
  @Input() public document: BidoDocumentationDTO;
  @Input() public isReadOnlyForm: boolean;
  @Output() public onValidated: EventEmitter<BidoDocumentationDTO>;

  public readonly componentId: string;
  public displayValue: boolean;
  public types: LabelValue<string>[];

  public constructor(
    public readonly sessionService: SessionService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'SbadFormComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<BidoDocumentationDTO>();

    this.loadTypes();
  }

  public ngOnInit(): void {
    if (!this.document) {
      this.document = {};
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
