import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { BsdeAttributeDTO } from '../../../../../shared/types/api-types/bsde-attribute-dto.interface';
import { BsdeProjectAttributeDTO } from '../../../../../shared/types/api-types/bsde-project-attribute-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

interface CustomAttributeLabelValue extends BsdeAttributeDTO {
  label: string;
  value: string;
}

interface CustomBsdeProjectAttributeDTO extends BsdeProjectAttributeDTO {
  name?: string;
}

@Component({
  selector: 'aw-dialog-attribute',
  templateUrl: './dialog-attribute.component.html',
  styleUrls: ['./dialog-attribute.component.scss']
})
export class DialogAttributeComponent extends DialogComponent implements OnInit {
  @Input() public attribute: CustomBsdeProjectAttributeDTO;
  @Input() public attributeList: CustomAttributeLabelValue[];
  @Output() public addEditAttribute: EventEmitter<CustomBsdeProjectAttributeDTO>;
  @Input() public isEditMode: boolean;

  public description: string | undefined;
  public selectedAttribute: string | undefined;
  public attributeValue: string | undefined;

  public constructor(private readonly messageService: MessageService) {
    super(ComponentOpenMode.Read, 'DialogAttributeComponent');
    this.addEditAttribute = new EventEmitter<CustomBsdeProjectAttributeDTO>();
  }

  public ngOnInit() {
    if (!this.attribute || !this.isEditMode) {
      this.attribute = {};
    } else {
      this.changeAttribute();
    }
  }

  public validate() {
    if (this.validateScreen()) {
      this.addEditAttribute.emit(this.attribute);
      this.closeDialog();
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
    }
  }

  private validateScreen(): boolean {
    return !!this.attribute.attributeValue && !!this.attribute.attributeId;
  }

  public changeAttribute() {
    const dto = this.attributeList.filter((res) => this.attribute.attributeId === res.value);

    if (!!dto && dto.length > 0) {
      this.description = dto[0].attributeDescription;
      this.attribute.name = dto[0].label;
    }
  }
}
