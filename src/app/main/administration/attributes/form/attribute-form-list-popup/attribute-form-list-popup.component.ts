import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { AttributeValueDTO } from '../../../../../shared/types/api-types/attribute-value-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { StringUtils } from '../../../../../shared/utils/string-utils';

@Component({
  selector: 'aw-attribute-form-list-popup',
  templateUrl: './attribute-form-list-popup.component.html'
})
export class AttributeFormListPopupComponent extends DialogComponent implements OnInit {
  public attributeValue: AttributeValueDTO;

  @Input('attributeValue')
  public set setEngineeringData(attributeValueDTO: AttributeValueDTO) {
    if (!!attributeValueDTO) {
      this.attributeValue = attributeValueDTO;
    }
  }

  @Input()
  public openMode: ComponentOpenMode;
  @Output()
  public onValidated: EventEmitter<AttributeValueDTO>;

  public selectedType: string;

  public constructor(public sessionService: SessionService, public messageService: MessageService) {
    super(ComponentOpenMode.Read, 'AttributeFormListPopupComponent');
    this.onValidated = new EventEmitter<AttributeValueDTO>();
    this.setDefaultValue();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
  }

  public checkEmpty(): boolean {
    return (
      StringUtils.isNullOrEmpty(this.attributeValue.textEn) || StringUtils.isNullOrEmpty(this.attributeValue.textFr)
    );
  }

  public validate() {
    if (!!this.attributeValue) {
      this.onValidated.emit(this.attributeValue);
      this.closeDialog();
    }
  }

  private setDefaultValue() {
    this.attributeValue = {
      attributeId: '',
      attributeValue: '',
      textEn: '',
      textFr: ''
    };
  }
}
