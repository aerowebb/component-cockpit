import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SessionApi } from '../../shared/api/session.api';
import { MenuConstants } from '../../shared/constants/menu-constants';
import { ComponentOpenMode } from '../../shared/enums/component-open-mode.enum';
import { AbstractAwHttpService } from '../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../shared/services/app-config.service';
import { TabService } from '../../shared/services/tab.service';
import { PageComponentData } from '../../shared/types/page-component-data.interface';
import { ListUtils } from '../../shared/utils/list-utils';

import { MenuEntry } from './types/menu-entry.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends AbstractAwHttpService {
  private _menuEntries: MenuEntry[];
  private _dashboardEntries: MenuEntry[];

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly sessionApi: SessionApi,
    private readonly tabService: TabService
  ) {
    super(http, appConfigService);

    this._menuEntries = [];
    this._dashboardEntries = [];
  }

  public get menuEntries(): MenuEntry[] {
    return this._menuEntries;
  }

  public get dashboardEntries(): MenuEntry[] {
    return this._dashboardEntries;
  }

  public openHome(): void {
    const componentId = 'HomeComponent';
    const data = this.createTabData(componentId, ComponentOpenMode.Write);
    const labelKey = 'global.home';

    this.tabService.openHome(this.tabService.create(data, labelKey, true));
  }

  public openMenuEntry(menuEntryKey: string): void {
    const componentId = MenuConstants.COMPONENTS[menuEntryKey];
    const data = this.createTabData(componentId, ComponentOpenMode.Write);
    const labelKey = 'transaction.' + componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private createTabData(componentId: string, openMode: ComponentOpenMode): PageComponentData {
    return {
      id: this.tabService.generateId(),
      componentId,
      objectId: undefined,
      openMode
    };
  }

  /**************************************************************************
   * Session api
   *************************************************************************/

  public load(): void {
    super.post<void, MenuEntry[]>(this.sessionApi.menu).subscribe((menuEntries) => {
      this._menuEntries = ListUtils.orEmpty(menuEntries);
    });
  }

  public loadDashboards(): void {
    const flat = (menuEntry: MenuEntry): MenuEntry[] => {
      return [
        menuEntry,
        ...ListUtils.orEmpty(menuEntry.submenus)
          .map(flat)
          .reduce((acc, val) => acc.concat(val), [])
      ];
    };

    super.post<void, MenuEntry[]>(this.sessionApi.dashboards).subscribe((menuEntries) => {
      this._dashboardEntries = ListUtils.orEmpty(menuEntries)
        .map(flat)
        .reduce((acc, val) => acc.concat(val), [])
        .filter((menuEntry) => menuEntry.submenus.length === 0);
    });
  }
}
