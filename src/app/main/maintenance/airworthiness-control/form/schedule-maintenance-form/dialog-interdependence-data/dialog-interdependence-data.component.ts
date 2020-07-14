import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-interdependence-data',
  styleUrls: ['./dialog-interdependence-data.component.scss'],
  templateUrl: './dialog-interdependence-data.component.html'
})
export class DialogInterdependenceDataComponent extends DialogComponent {
  @Input()
  public interdependenceDataList: string[];

  @Output()
  public onAccept: EventEmitter<void>;

  @Output()
  public onReject: EventEmitter<void>;

  public constructor() {
    super(ComponentOpenMode.Write, 'DialogInterdependenceDataComponent');

    this.init();
  }

  public accept(): void {
    this.onAccept.emit();
  }

  public reject(): void {
    this.onReject.emit();
  }

  private init(): void {
    this.interdependenceDataList = [];

    this.onAccept = new EventEmitter<void>();
    this.onReject = new EventEmitter<void>();
  }
}
