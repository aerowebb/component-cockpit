import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class PageTocService {
  private readonly _anchorSelectedSource: Subject<string>;
  private readonly _errorMarkerListSource: Subject<string[]>;
  private readonly _pageTocEntrySelectedSource: Subject<string>;

  private readonly _anchorSelected$: Observable<string>;
  private readonly _errorMarkerList$: Observable<string[]>;
  private readonly _pageTocEntrySelected$: Observable<string>;

  public constructor() {
    this._anchorSelectedSource = new Subject<string>();
    this._errorMarkerListSource = new Subject<string[]>();
    this._pageTocEntrySelectedSource = new Subject<string>();

    this._anchorSelected$ = this._anchorSelectedSource.asObservable();
    this._errorMarkerList$ = this._errorMarkerListSource.asObservable();
    this._pageTocEntrySelected$ = this._pageTocEntrySelectedSource.asObservable();
  }

  public get anchorSelected$(): Observable<string> {
    return this._anchorSelected$;
  }

  public get errorMarkerList$(): Observable<string[]> {
    return this._errorMarkerList$;
  }

  public get pageTocEntrySelected$(): Observable<string> {
    return this._pageTocEntrySelected$;
  }

  public clearErrorMarkerList(): void {
    this._errorMarkerListSource.next([]);
  }

  public setAnchorSelected(anchorId: string): void {
    this._anchorSelectedSource.next(anchorId);
  }

  public setErrorMarkerList(errorMarkerList: string[]): void {
    this._errorMarkerListSource.next(errorMarkerList);
  }

  public setPageTocEntrySelected(pageTocEntryId: string): void {
    this._pageTocEntrySelectedSource.next(pageTocEntryId);
  }
}
