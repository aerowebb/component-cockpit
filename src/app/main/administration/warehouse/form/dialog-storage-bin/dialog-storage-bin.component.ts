import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { BidtStorageBinDTO } from '../../../../../shared/types/api-types/bidt-storage-bin-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Component({
  selector: 'aw-dialog-storage-bin',
  templateUrl: './dialog-storage-bin.component.html'
})
export class DialogStorageBinComponent extends DialogComponent implements OnInit {
  @Input()
  public document: BidtStorageBinDTO;
  @Input()
  public openMode: ComponentOpenMode;
  @Input()
  public types: LabelValue<string>[];
  @Input()
  public isArea: boolean;
  @Output()
  public onValidated: EventEmitter<BidtStorageBinDTO>;
  public sbTitle: string;

  public constructor(
    public inputValidationService: InputValidationService,
    private readonly messageService: MessageService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Read, 'DialogStorageBinComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<BidtStorageBinDTO>();
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);

    if (!this.document) {
      this.document = {};
    }
    this.sbTitle = this.translateService.instant(this.getTranslateKey('title'));
    if (this.isArea) {
      this.sbTitle = this.translateService.instant(this.getTranslateKey('titleArea'));
    }
  }

  public validate(): void {
    if (this.document.sbNumber && this.document.bidtStorageBinTypeId) {
      const maxIntegerValue = 9223372036854775807;
      const docSurface = !!this.document.sbSurface && this.document.sbSurface > maxIntegerValue;
      const docVolume = !!this.document.sbVolume && this.document.sbVolume > maxIntegerValue;
      if (docSurface || docVolume) {
        this.messageService.showErrorMessage(this.getTranslateKey('maxValueError'));
      }
      this.onValidated.emit(this.document);
      this.closeDialog();
    } else {
      this.messageService.showErrorMessage('global.missingFields');
    }
  }
}
