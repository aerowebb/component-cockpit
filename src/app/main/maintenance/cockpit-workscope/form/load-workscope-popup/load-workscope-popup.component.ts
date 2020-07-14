import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { CockpitWorkscopeFormService } from '../cockpit-workscope-form.service';

@Component({
  selector: 'aw-load-workscope-popup',
  templateUrl: './load-workscope-popup.component.html'
})
export class LoadWorkscopePopupComponent extends DialogComponent implements OnInit {
  @Output() public onEquipmentLoad: EventEmitter<boolean>;

  public displayValue: boolean;

  public constructor(public cockpitWorkscopeFormService: CockpitWorkscopeFormService) {
    super(ComponentOpenMode.Write, 'LoadWorkscopePopupComponent');
    this.onEquipmentLoad = new EventEmitter<boolean>();
  }

  public ngOnInit() {
    return;
  }

  public close(): void {
    this.display = false;
  }

  public loadEquipmentData() {
    this.onEquipmentLoad.emit(true);
    this.display = false;
  }
}
