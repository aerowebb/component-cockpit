import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BireItemDTO } from '../../../shared/types/api-types/bire-item-dto.interface';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { GenericComponent } from '../../types/generic-component';
import { DomUtils } from '../../utils/dom-utils';
import { StringUtils } from '../../utils/string-utils';

@Component({
  selector: 'aw-ata-code-input',
  templateUrl: './ata-code-input.component.html'
})
export class AtaCodeInputComponent extends GenericComponent {
  @Input()
  public get ataCode(): BireItemDTO {
    return this._ataCode;
  }

  public set ataCode(ataCodeValue) {
    this._ataCode = ataCodeValue;
    this.ataCodeChange.emit(this._ataCode);
  }

  @Output()
  public ataCodeChange: EventEmitter<BireItemDTO>;

  private _ataCode: BireItemDTO;

  @Input()
  public familyVariantCode: string;
  @Input('isReadOpenMode')
  public isParentReadOpenMode: ComponentOpenMode;
  @Input()
  public required?: boolean;
  @Output()
  public onValidated: EventEmitter<BireItemDTO>;

  public searchCriteria: BireItemDTO;
  public showDialog: boolean;

  public constructor() {
    super(ComponentOpenMode.Write);

    this.ataCodeChange = new EventEmitter<BireItemDTO>();

    this.ataCode = {};
    this.onValidated = new EventEmitter<BireItemDTO>();
    this.required = false;

    this.showDialog = false;
  }

  public getComponentName(): string {
    return 'AtaCodeInputComponent';
  }

  public onSelectedAtaCode(ataCode: BireItemDTO): void {
    this.ataCode = ataCode;

    this.onValidated.emit(this.ataCode);
  }

  public resetAtaCode(): void {
    this.ataCode.chapter = undefined;
    this.ataCode.section = undefined;
    this.ataCode.subject = undefined;
    this.ataCode.sheet = undefined;
    this.ataCode.marks = undefined;
  }

  public searchAtaCode(event: MouseEvent): void {
    if (!DomUtils.isTargetDisabled(event.target)) {
      this.setDialogData();

      this.showDialog = true;
    }
  }

  private setDialogData(): void {
    let familyCode: string | undefined;
    let variantCode: string | undefined;
    if (!StringUtils.isEmpty(this.familyVariantCode)) {
      const splitCode = this.familyVariantCode.split('-');
      familyCode = splitCode[0];
      variantCode = splitCode[1];
    }

    this.searchCriteria = {
      familyCode,
      variantCode,
      chapter: StringUtils.orEmpty(this.ataCode.chapter),
      section: StringUtils.orEmpty(this.ataCode.section),
      subject: StringUtils.orEmpty(this.ataCode.subject),
      sheet: StringUtils.orEmpty(this.ataCode.sheet),
      marks: StringUtils.orEmpty(this.ataCode.marks)
    };
  }
}
