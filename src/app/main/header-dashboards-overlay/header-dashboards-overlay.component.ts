import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MenuService } from '../menu/menu.service';
import { MenuEntry } from '../menu/types/menu-entry.interface';
import { OverlayRef } from '../overlay/overlay-ref';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aw-header-dashboards-overlay',
  templateUrl: './header-dashboards-overlay.component.html'
})
export class HeaderDashboardsOverlayComponent {
  public constructor(public readonly menuService: MenuService, private readonly _overlayRef: OverlayRef<void>) {}

  // ////////////////////////////////////////////////////////////////////////////

  public openDashboard(dashboardEntry: MenuEntry): void {
    this._overlayRef.close();
    this.menuService.openMenuEntry(dashboardEntry.key);
  }
}
