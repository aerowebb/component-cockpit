import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MenuService } from '../menu/menu.service';
import { MenuEntry } from '../menu/types/menu-entry.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aw-dashboards-overlay',
  styleUrls: ['./dashboards-overlay.component.scss'],
  templateUrl: './dashboards-overlay.component.html'
})
export class DashboardsOverlayComponent {
  public dashboards: MenuEntry[];

  public constructor(public readonly menuService: MenuService) {
    if (this.menuService.dashboardEntries.length === 1) {
      this.dashboards = this.menuService.dashboardEntries[0].submenus;
    }
  }
}
