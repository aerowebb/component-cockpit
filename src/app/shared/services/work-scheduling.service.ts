import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { AMProjectManagementApi } from '../api/am-project-management.api';
import { ProductStructureManagementApi } from '../api/product-structure-management.api';
import { UserProfileManagementApi } from '../api/user-profile-management.api';
import { EventModel as GenericEventModel } from '../components/scheduler/event-model.interface';
import { ResourceModel as GenericResourceModel } from '../components/scheduler/resource-model.interface';
import { AbstractAwHttpService } from '../http/abstract-aw-http';
import { BidmProjectDTO } from '../types/api-types/bidm-project-dto.interface';
import { BidoUserDTO } from '../types/api-types/bido-user-dto.interface';
import { WsTreeNode } from '../types/api-types/ws-tree-node-dto.interface';
import { LabelValue } from '../types/label-value.interface';

import { AppConfigService } from './app-config.service';

export interface ResourceModel extends GenericResourceModel {
  generatedId: number;
  projectNumber: string;
}

export interface EventSchedulerModel extends GenericEventModel {
  desc: string;
  children: ResourceModel[];
}

@Injectable()
export class WorkSchedulingService extends AbstractAwHttpService {
  private readonly _refreshButtonSource: Subject<() => void>;
  private readonly _refreshButton$: Observable<() => void>;
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly userProfileManagementApi: UserProfileManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly amProjectManagementApi: AMProjectManagementApi
  ) {
    super(http, appConfigService);
    this._refreshButtonSource = new Subject<() => void>();
    this._refreshButton$ = this._refreshButtonSource.asObservable();
  }

  public findAllBireSite(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireSite);
  }

  public findBidoUsersWithUseCase(useCase: string): Observable<BidoUserDTO[]> {
    return super.post<string, BidoUserDTO[]>(this.userProfileManagementApi.findBidoUsersWithUseCase, useCase);
  }

  public getServerDate(): Observable<Date> {
    return super.post<undefined, Date>(this.productStructureManagementApi.getServerDate, undefined);
  }

  public getWorkPackageSchedulingList(): Observable<WsTreeNode[]> {
    const bidmProjectDTO: BidmProjectDTO = {};

    return super.post<BidmProjectDTO, WsTreeNode[]>(
      this.amProjectManagementApi.findWorkPackageSchedulingList,
      bidmProjectDTO
    );
  }

  public get refreshButton$(): Observable<() => void> {
    return this._refreshButton$;
  }

  public setRefreshButton(f: () => void): void {
    this._refreshButtonSource.next(f);
  }
}
