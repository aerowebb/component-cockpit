import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LoaderService {
  private readonly _loadingStatusSource: Subject<boolean>;
  private readonly _moduleLoadingStatusSource: Subject<boolean>;

  private readonly _loadingStatus$: Observable<boolean>;
  private readonly _moduleLoadingStatus$: Observable<boolean>;

  public constructor() {
    this._loadingStatusSource = new Subject<boolean>();
    this._moduleLoadingStatusSource = new Subject<boolean>();

    this._loadingStatus$ = this._loadingStatusSource.asObservable();
    this._moduleLoadingStatus$ = this._moduleLoadingStatusSource.asObservable();
  }

  public get loadingStatus$(): Observable<boolean> {
    return this._loadingStatus$;
  }

  public get moduleLoadingStatus$(): Observable<boolean> {
    return this._moduleLoadingStatus$;
  }

  public hideLoadingBar(): void {
    this._loadingStatusSource.next(false);
  }

  public hideModuleLoadingBar(): void {
    this._moduleLoadingStatusSource.next(false);
  }

  public showLoadingBar(): void {
    this._loadingStatusSource.next(true);
  }

  public showModuleLoadingBar(): void {
    this._moduleLoadingStatusSource.next(true);
  }
}
