import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BirePackEvolutionOutput } from '../../../../../../shared/types/api-output-types/product-structure-management/bire-pack-evolution-output.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../../shared/types/popup-entry.interface';

@Component({
  selector: 'aw-edit-evolution-popup',
  templateUrl: './edit-evolution-popup.component.html'
})
export class EditEvolutionPopupComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BirePackEvolutionOutput> | null;

  @Input()
  public typeList: LabelValue<string>[];

  @Output()
  public onValidated: EventEmitter<BirePackEvolutionOutput>;

  public birePackEvolutionOutput: BirePackEvolutionOutput;

  public constructor(public sessionService: SessionService) {
    super(ComponentOpenMode.Write, 'EditEvolutionPopupComponent');
    this.onValidated = new EventEmitter<BirePackEvolutionOutput>();
  }

  public ngOnInit() {
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      if (!!this.componentData.object) {
        this.birePackEvolutionOutput = this.componentData.object as BirePackEvolutionOutput;
      } else {
        this.birePackEvolutionOutput = {};
      }
    }
  }

  /**
   * Validate Screen
   */
  public onValidate() {
    this.onValidated.emit(this.birePackEvolutionOutput);
    this.display = false;
  }

  /**
   * Close popup
   */
  public onCancel() {
    this.display = false;
  }
}
