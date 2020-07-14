import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { FunctionalLocationStructureTreeNodeOutput } from '../../../../shared/types/api-output-types/fleet-management/functional-location-structure-tree-node-output';
import { BidoFlDTOId } from '../../../../shared/types/api-types/bido-fl-dto-id.interface';
import { BidoOpeConfFlDTO } from '../../../../shared/types/api-types/bido-ope-conf-fl-dto.interface';

@Injectable()
export class OperationalConfigurationFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findOpeConfFlTreeNode(bidoFlDTOId: BidoFlDTOId): Observable<FunctionalLocationStructureTreeNodeOutput> {
    return super.post<BidoFlDTOId, FunctionalLocationStructureTreeNodeOutput>(
      this.fleetManagementApi.findOpeConfFlTreeNode,
      bidoFlDTOId
    );
  }

  public findBidoOpeConfByOpeConf(bidoFlDTOId: BidoFlDTOId): Observable<BidoOpeConfFlDTO[]> {
    return super.post<BidoFlDTOId, BidoOpeConfFlDTO[]>(this.fleetManagementApi.findBidoOpeConfByOpeConf, bidoFlDTOId);
  }

  public createAllBidoOpeConfFl(opeConfFl: BidoOpeConfFlDTO[]) {
    return super.post<BidoOpeConfFlDTO[], void>(this.fleetManagementApi.createAllBidoOpeConfFl, opeConfFl);
  }

  public updateBidoOpeConfFls(opeConfFls: BidoOpeConfFlDTO[]) {
    return super.post<BidoOpeConfFlDTO[], void>(this.fleetManagementApi.updateBidoOpeConfFls, opeConfFls);
  }

  public findFlsTreeNodeByFamilyVariant(
    familyVariant: string
  ): Observable<FunctionalLocationStructureTreeNodeOutput[]> {
    return super.post<string, FunctionalLocationStructureTreeNodeOutput[]>(
      this.fleetManagementApi.findFlsTreeNodeByFamilyVariant,
      familyVariant
    );
  }
}
