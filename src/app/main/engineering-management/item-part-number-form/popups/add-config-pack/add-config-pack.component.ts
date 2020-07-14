import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { BireConfigurationDTO } from '../../../../../shared/types/api-types/bire-configuration-dto.interface';
import { BireVersionPnDTO } from '../../../../../shared/types/api-types/bire-version-pn-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';

@Component({
  selector: 'aw-add-config-pack',
  templateUrl: './add-config-pack.component.html'
})
export class AddConfigPackComponent extends DialogComponent implements OnInit {
  @Input()
  public input: PopupEntry<BireConfigurationDTO> | undefined;

  @Input()
  public pageData: BireVersionPnDTO;

  @Output()
  public onAdded: EventEmitter<BireConfigurationDTO>;

  @Output()
  public onEdit: EventEmitter<BireConfigurationDTO>;

  public bireConfigurationDTO: BireConfigurationDTO;

  public constructor(public sessionService: SessionService) {
    super(ComponentOpenMode.Write, 'AddConfigPackComponent');

    this.onAdded = new EventEmitter<BireConfigurationDTO>();
    this.onEdit = new EventEmitter<BireConfigurationDTO>();
  }

  public ngOnInit() {
    this.bireConfigurationDTO = {};

    if (!!this.pageData && (!!this.input && !!this.input.object && Object.keys(this.input.object).length === 0)) {
      this.bireConfigurationDTO.configurationCode = `${this.pageData.familyCode}${this.pageData.variantCode}${
        this.pageData.chapter
      }${this.pageData.section}${this.pageData.subject}${this.pageData.sheet}${this.pageData.marks}${
        this.pageData.versionNumber
      }`;
      this.updateOpenMode(this.input.openMode);
    } else {
      if (!!this.input && !!this.input.object && Object.keys(this.input.object).length > 0) {
        this.bireConfigurationDTO = this.input.object;
        this.updateOpenMode(this.input.openMode);
      }
    }
  }

  public validate(): void {
    if (!!this.input && !!this.input.object && Object.keys(this.input.object).length > 0) {
      this.onEdit.emit(this.bireConfigurationDTO);
    } else {
      this.onAdded.emit(this.bireConfigurationDTO);
    }
    this.display = false;
  }

  public onCancel() {
    this.display = false;
  }
}
