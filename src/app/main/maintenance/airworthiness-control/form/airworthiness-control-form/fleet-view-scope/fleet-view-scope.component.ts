import { Component, Input } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { GenericComponent } from '../../../../../../shared/types/generic-component';

@Component({
  selector: 'aw-airworthiness-table-fleet-view-scope',
  styleUrls: ['../../share.scss'],
  templateUrl: './fleet-view-scope.component.html'
})
export class FleetViewScopeComponent extends GenericComponent {
  @Input()
  public topAssetTypeList: string;

  @Input()
  public topFamilyVariantList: string;

  @Input()
  public topWarehouse: string | undefined;

  public constructor() {
    super(ComponentOpenMode.Write);
  }

  public getComponentName(): string {
    return 'FleetViewScopeComponent';
  }
}
