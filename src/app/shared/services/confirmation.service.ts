import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Confirmation } from '../types/confirmation.interface';

@Injectable()
export class ConfirmationService {
  private readonly requireConfirmationSource: Subject<Confirmation>;
  private readonly requireDeleteConfirmationSource: Subject<Confirmation>;

  private readonly _requireConfirmation$: Observable<Confirmation>;
  private readonly _requireDeleteConfirmation$: Observable<Confirmation>;

  public constructor() {
    this.requireConfirmationSource = new Subject<Confirmation>();
    this.requireDeleteConfirmationSource = new Subject<Confirmation>();

    this._requireConfirmation$ = this.requireConfirmationSource.asObservable();
    this._requireDeleteConfirmation$ = this.requireDeleteConfirmationSource.asObservable();
  }

  public get requireConfirmation$(): Observable<Confirmation> {
    return this._requireConfirmation$;
  }

  public get requireDeleteConfirmation$(): Observable<Confirmation> {
    return this._requireDeleteConfirmation$;
  }

  public confirm(confirmation: Confirmation): void {
    this.requireConfirmationSource.next(confirmation);
  }

  public confirmDelete(confirmation: Confirmation): void {
    this.requireDeleteConfirmationSource.next(confirmation);
  }
}
