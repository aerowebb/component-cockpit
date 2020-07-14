import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { BireAlternativePnDTO } from '../../../../../shared/types/api-types/bire-alternative-pn-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Component({
  selector: 'aw-alternatives-pn-popup',
  templateUrl: './alternatives-pn-popup.component.html'
})
export class AlternativesPnPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public inputAlternative: BireAlternativePnDTO;

  @Input()
  public alternativePnOptions: LabelValue<BireAlternativePnDTO>[];

  @Input()
  public interchangeabilityOptions: LabelValue<string>[];

  @Input()
  public newAlternative: boolean;

  @Output()
  public onCreate: EventEmitter<BireAlternativePnDTO>;

  @Output()
  public onUpdate: EventEmitter<BireAlternativePnDTO>;

  public alternativePnOptionsList: LabelValue<BireAlternativePnDTO>[];
  public interchangeabilityOptionsList: LabelValue<string>[];

  public alternative: BireAlternativePnDTO;

  public constructor() {
    super(ComponentOpenMode.Write, 'AlternativesPnPopupComponent');

    this.onCreate = new EventEmitter<BireAlternativePnDTO>();
    this.onUpdate = new EventEmitter<BireAlternativePnDTO>();

    this.init();
  }

  public ngOnInit() {
    this.alternative = this.inputAlternative;

    this.alternativePnOptionsList = this.alternativePnOptions;
    this.interchangeabilityOptionsList = this.interchangeabilityOptions;
  }

  public onCancel(): void {
    this.init();
    this.display = false;
  }

  public validate(): void {
    if (this.newAlternative) {
      this.onCreate.emit(this.alternative);
      this.display = false;
    } else {
      this.onUpdate.emit(this.alternative);
      this.display = false;
    }
  }

  private init(): void {
    this.alternative = {};
    this.alternativePnOptionsList = [];
    this.interchangeabilityOptionsList = [];
  }
}
