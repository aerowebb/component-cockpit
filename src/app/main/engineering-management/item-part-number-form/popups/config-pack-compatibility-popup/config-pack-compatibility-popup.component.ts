import { Component, Input, OnInit } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { BireConfigurationDTO } from '../../../../../shared/types/api-types/bire-configuration-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { ItemPartNumberService } from '../../form/item-part-number.service';

@Component({
  selector: 'aw-config-pack-compatibility-popup',
  templateUrl: './config-pack-compatibility-popup.component.html'
})
export class ConfigPackCompatibilityPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public input: BireConfigurationDTO;

  public compatibilityResult: string;

  public constructor(
    public sessionService: SessionService,
    private readonly itemPartNumberService: ItemPartNumberService
  ) {
    super(ComponentOpenMode.Write, 'ConfigPackCompatibilityPopupComponent');
  }

  public ngOnInit() {
    this.verifyPacksCompatibility();
  }

  public onCancel() {
    this.display = false;
  }

  private verifyPacksCompatibility() {
    this.itemPartNumberService
      .verifyEvolutionInterdependenceForConfiguration(this.input as BireConfigurationDTO)
      .subscribe((res: string) => {
        this.compatibilityResult = res;
      });
  }
}
