import { ConnectedPosition, Overlay, OverlayConfig, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector, Type } from '@angular/core';

import { OverlayRef } from './overlay-ref';
import { OverlayComponent } from './overlay.component';

export interface OverlayParams {
  content: Type<unknown>;
  data?: unknown;
  hasBackdrop?: boolean;
  hasVisibleBackdrop?: boolean;
  height?: number | string;
  width?: number | string;
}

export interface OverlayWithGlobalPositionParams extends OverlayParams {
  positions: { bottom?: string; left?: string; right?: string; top?: string };
}

export interface OverlayWithRelativePositionParams extends OverlayParams {
  origin: HTMLElement;
  positions?: ConnectedPosition[];
}

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  public constructor(private readonly _injector: Injector, private readonly _overlay: Overlay) {}

  // //////////////////////////////////////////////////////////////////////////

  public openWithPositionAbsolute<T>(params: OverlayWithGlobalPositionParams): OverlayRef<T> {
    return this.open(params, this.getConfig(params, this.getPositionAbsolute(params)));
  }

  public openWithPositionCenter<T>(params: OverlayParams): OverlayRef<T> {
    return this.open(
      params,
      this.getConfig(
        { ...params, hasVisibleBackdrop: params.hasVisibleBackdrop !== undefined ? params.hasVisibleBackdrop : true },
        this.getPositionCenter()
      )
    );
  }

  public openWithPositionRelative<T>(params: OverlayWithRelativePositionParams): OverlayRef<T> {
    return this.open(params, this.getConfig(params, this.getPositionRelative(params)));
  }

  // //////////////////////////////////////////////////////////////////////////

  private createInjector<T>(overlayRef: OverlayRef<T>, injector: Injector): PortalInjector {
    const tokens = new WeakMap([[OverlayRef, overlayRef]]);

    return new PortalInjector(injector, tokens);
  }

  private getConfig(params: OverlayParams, positionStrategy: PositionStrategy): OverlayConfig {
    const hasBackdrop = params.hasBackdrop !== undefined ? params.hasBackdrop : true;

    return new OverlayConfig({
      hasBackdrop,
      positionStrategy,
      backdropClass: hasBackdrop && params.hasVisibleBackdrop ? 'cdk-overlay-dark-backdrop' : '',
      height: params.height,
      scrollStrategy: this._overlay.scrollStrategies.reposition(),
      width: params.width
    });
  }

  private getPositionAbsolute(params: OverlayWithGlobalPositionParams): PositionStrategy {
    const positionStrategy = this._overlay
      .position()
      .global()
      .bottom(params.positions.bottom)
      .left(params.positions.left)
      .right(params.positions.right)
      .top(params.positions.top);

    return positionStrategy;
  }

  private getPositionCenter(): PositionStrategy {
    const positionStrategy = this._overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    return positionStrategy;
  }

  private getPositionRelative(params: OverlayWithRelativePositionParams): PositionStrategy {
    const positionStrategy = this._overlay
      .position()
      .flexibleConnectedTo(params.origin)
      .withPositions(params.positions || [])
      .withFlexibleDimensions(false)
      .withPush(false);

    return positionStrategy;
  }

  private open<T>(params: OverlayParams, overlayConfig: OverlayConfig): OverlayRef<T> {
    const cdkOverlayRef = this._overlay.create(overlayConfig);
    const overlayRef = new OverlayRef<T>(cdkOverlayRef, params.content, params.data);

    const injector = this.createInjector(overlayRef, this._injector);
    cdkOverlayRef.attach(new ComponentPortal(OverlayComponent, undefined, injector));

    return overlayRef;
  }
}
