import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { BireQualificationDTO } from '../../../../../shared/types/api-types/bire-qualification-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Component({
  selector: 'aw-dialog-qualifications-popup',
  templateUrl: './dialog-qualifications-popup.component.html'
})
export class DialogQualificationsPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public qualification: BireQualificationDTO;
  @Input()
  public isReadOnlyForm: boolean;
  @Output()
  public onAdded: EventEmitter<BireQualificationDTO>;

  public readonly componentId: string;

  public linkTypes: LabelValue<string>[];

  public displayValue: boolean;

  public showQuickSearchQualificationPopup: boolean;

  public constructor() {
    super(ComponentOpenMode.Write, 'DialogQualificationsPopupComponent');

    this.onAdded = new EventEmitter<BireQualificationDTO>();
    this.showQuickSearchQualificationPopup = false;
  }

  public ngOnInit() {
    if (!this.qualification) {
      this.qualification = {};
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public add(): void {
    this.onAdded.emit(this.qualification);
    this.display = false;
  }

  public quickSearchQualification(): void {
    this.showQuickSearchQualificationPopup = true;
  }

  public setSelectedQualification(event: BireQualificationDTO): void {
    this.qualification = event;
  }
}
