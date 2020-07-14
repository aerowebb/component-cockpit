import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { LabelValue } from '../../shared/types/label-value.interface';
import { MenuService } from '../menu/menu.service';
import { OverlayRef } from '../overlay/overlay-ref';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aw-global-search-overlay',
  styleUrls: ['./global-search-overlay.component.scss'],
  templateUrl: './global-search-overlay.component.html'
})
export class GlobalSearchOverlayComponent {
  public menuEntries$: Observable<LabelValue<string>[]>;

  public constructor(private readonly _menuService: MenuService, private readonly _overlayRef: OverlayRef<void>) {
    this.menuEntries$ = this._overlayRef.data as Observable<LabelValue<string>[]>;
  }

  // //////////////////////////////////////////////////////////////////////////

  public openMenu(menuEntryKey: string): void {
    this._menuService.openMenuEntry(menuEntryKey);
    this._overlayRef.close();
  }
}
