import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetBusinessApi } from '../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { FindBidoFlsBySearchCriteriaInput } from '../../../shared/types/api-input-types/fleet-management/find-bido-fls-by-search-criteria-input.interface';
import { SaveBidoFlEquipmentStructureInput } from '../../../shared/types/api-input-types/fleet-management/save-bido-fl-equipment-structure-input-dto.interface';
import { FLAssignTreeNode } from '../../../shared/types/api-output-types/fleet-business/fl-assign-tree-node-dto.interface.';
import { BidoFlEquipmentDTO } from '../../../shared/types/api-types/bido-fl-equipment-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class FunctionalLocationAssignmentService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBidoFlsBySearchCriteriaFunctionalLocationAssignment(
    input: FindBidoFlsBySearchCriteriaInput
  ): Observable<LabelValue<string>[]> {
    return super.post<FindBidoFlsBySearchCriteriaInput, LabelValue<string>[]>(
      this.fleetManagementApi.findBidoFlsBySearchCriteriaFunctionalLocationAssignment,
      input
    );
  }

  public updateBidoFlEquipmentStructure(input: SaveBidoFlEquipmentStructureInput): Observable<void> {
    return super.post<SaveBidoFlEquipmentStructureInput, void>(
      this.fleetManagementApi.updateBidoFlEquipmentStructure,
      input
    );
  }

  public getFlStructure(
    findBidoFlsBySearchCriteriaInput: FindBidoFlsBySearchCriteriaInput
  ): Observable<FLAssignTreeNode> {
    return super.post<FindBidoFlsBySearchCriteriaInput, FLAssignTreeNode>(
      this.fleetBusinessApi.getFlStructure,
      findBidoFlsBySearchCriteriaInput
    );
  }

  public findBidoFlEquipmentCurrentlyAppliedByEquipmentCode(equipmentCode: string): Observable<BidoFlEquipmentDTO> {
    return super.post<string, BidoFlEquipmentDTO>(
      this.fleetManagementApi.findBidoFlEquipmentCurrentlyAppliedByEquipmentCode,
      equipmentCode
    );
  }

  public getFlDropDownChange(input: FLAssignTreeNode): Observable<FLAssignTreeNode> {
    return super.post<FLAssignTreeNode, FLAssignTreeNode>(this.fleetBusinessApi.getFlDropDownChange, input);
  }
}
