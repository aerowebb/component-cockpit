import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ConfirmationService } from '../../shared/services/confirmation.service';
import { SessionService } from '../../shared/services/session.service';
import { OverlayRef } from '../overlay/overlay-ref';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aw-header-user-overlay',
  styleUrls: ['./header-user-overlay.component.scss'],
  templateUrl: './header-user-overlay.component.html'
})
export class HeaderUserOverlayComponent {
  public showChangePassword: boolean;

  public constructor(
    public readonly sessionService: SessionService,
    private readonly _confirmationService: ConfirmationService,
    private readonly _overlayRef: OverlayRef<void>,
    private readonly _sessionService: SessionService
  ) {
    this.showChangePassword = false;
  }

  // ////////////////////////////////////////////////////////////////////////////

  public logOut(): void {
    this._overlayRef.close();

    this._confirmationService.confirm({
      messageKey: 'global.confirmSignOut',
      accept: () => {
        this._overlayRef.close();
        this._sessionService.close();
      }
    });
  }

  public changePassword(): void {
    this.showChangePassword = true;
  }
}
