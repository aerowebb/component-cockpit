import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { SelectItemUtils } from '../../../../../shared/utils/select-item-utils';

@Injectable()
export class WorkOrderTableFiltersService extends AbstractAwHttpService {
  private readonly _assignedToFilterList = new BehaviorSubject<SelectItem[]>([]);
  public readonly assignetToFilterList$ = this._assignedToFilterList.asObservable();

  private readonly _assetFilterList = new BehaviorSubject<SelectItem[]>([]);
  public readonly assetFilterList$ = this._assetFilterList.asObservable();

  private readonly _zoneFilterList = new BehaviorSubject<SelectItem[]>([]);
  public readonly zoneFilterList$ = this._zoneFilterList.asObservable();

  private readonly _qualificationList = new BehaviorSubject<SelectItem[]>([]);
  public readonly qualificationList$ = this._qualificationList.asObservable();

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
  ) {
    super(http, appConfigService);
  }

  public set assignedToFilterList(set: Set<string>) {
    const list = Array.from(set).sort();
    this._assignedToFilterList.next(SelectItemUtils.fromValues(list));
  }

  public set assetFilterList(set: Set<string>) {
    const list = Array.from(set).sort();
    this._assetFilterList.next(SelectItemUtils.fromValues(list));
  }

  public set zoneFilterList(set: Set<string>) {
    const list = Array.from(set).sort();
    this._zoneFilterList.next(SelectItemUtils.fromValues(list));
  }

  public set qualificationList(set: Set<string>) {
    const list = Array.from(set).sort();
    this._qualificationList.next(SelectItemUtils.fromValues(list));
  }

}
