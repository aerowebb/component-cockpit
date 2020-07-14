import { Component, Type } from '@angular/core';

import { OverlayRef } from './overlay-ref';

@Component({
  styleUrls: ['./overlay.component.scss'],
  templateUrl: './overlay.component.html'
})
export class OverlayComponent {
  public content: Type<unknown>;

  public constructor(private readonly _overlayRef: OverlayRef<unknown>) {
    this.content = this._overlayRef.content;
  }
}
