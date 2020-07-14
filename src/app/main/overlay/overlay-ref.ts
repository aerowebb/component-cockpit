import { OverlayRef as CdkOverlayRef } from '@angular/cdk/overlay';
import { Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface OverlayCloseEvent<T> {
  type: 'backdropClick' | 'close';
  data?: T;
}

export class OverlayRef<T> {
  public afterClosed$: Observable<OverlayCloseEvent<T>>;

  private readonly _afterClosed: Subject<OverlayCloseEvent<T>>;

  public constructor(
    private readonly _cdkOverlayRef: CdkOverlayRef,
    public readonly content: Type<unknown>,
    public readonly data: unknown
  ) {
    this._afterClosed = new Subject<OverlayCloseEvent<T>>();

    this.afterClosed$ = this._afterClosed.asObservable();

    this.registerBackdropClickObservable();
  }

  public close(data?: T): void {
    this._cdkOverlayRef.dispose();

    this._afterClosed.next({
      data,
      type: 'close'
    });
    this._afterClosed.complete();
  }

  private registerBackdropClickObservable(): void {
    this._cdkOverlayRef.backdropClick().subscribe({
      next: () => {
        this.close();
      }
    });
  }
}
