import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { FMDReferenceOutputDTO } from '../../../../../shared/types/api-output-types/fleet-management/fmd-reference-output-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-update-fde-reference',
  templateUrl: './dialog-update-fde-reference.component.html'
})
export class DialogUpdateFdeReferenceComponent extends DialogComponent implements OnInit {
  @Input()
  public data: FMDReferenceOutputDTO;
  @Output()
  public onAdded: EventEmitter<FMDReferenceOutputDTO>;

  public fMDReferenceOutputDTO: FMDReferenceOutputDTO;

  public constructor() {
    super(ComponentOpenMode.Write, 'DialogUpdateFdeReferenceComponent');
    this.onAdded = new EventEmitter<FMDReferenceOutputDTO>();

    this.fMDReferenceOutputDTO = {};
  }

  public ngOnInit() {
    if (!!this.data) {
      this.fMDReferenceOutputDTO = this.data;
    } else {
      this.fMDReferenceOutputDTO = {};
    }
  }

  public validate() {
    this.onAdded.emit(this.fMDReferenceOutputDTO);
    this.closeDialog();
  }
}
