import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AMProjectManagementApi } from '../../../../shared/api/am-project-management.api';
import { AssetManagementApi } from '../../../../shared/api/asset-management.api';
import { BidtDocumentApi } from '../../../../shared/api/bidt-document.api';
import { BidtProcurementRequestApi } from '../../../../shared/api/bidt-procurement-request.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { UserProfileManagementApi } from '../../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { SaveProcurementRequestInput } from '../../../../shared/types/api-input-types/logistic/save-document-procurement-request-input.interface';
import { ReferenceBatchDTO } from '../../../../shared/types/api-output-types/fleet-management/reference-batch-dto.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidoCounterReferenceDTO } from '../../../../shared/types/api-types/bido-counter-reference-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoUserDTO } from '../../../../shared/types/api-types/bido-user-dto.interface';
import { BidtDocumentDTO } from '../../../../shared/types/api-types/bidt-document-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';

@Injectable()
export class ProcurementRequestFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    private readonly aMProjectManagementApi: AMProjectManagementApi,
    private readonly assetManagementApi: AssetManagementApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly userProfileManagementApi: UserProfileManagementApi,
    private readonly bidtProcurementRequestApi: BidtProcurementRequestApi,
    private readonly bidtDocumentApi: BidtDocumentApi,

    appConfigService: AppConfigService
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * AM project management api
   *************************************************************************/

  public findWorkPackage(input: string): Observable<BidmProjectDTO> {
    return super.post<string, BidmProjectDTO>(this.aMProjectManagementApi.findBidmProject, input);
  }

  /**************************************************************************
   * Fleet management  api
   *************************************************************************/

  public findEquipment(input: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, input);
  }

  /**************************************************************************
   * Product structure management api
   *************************************************************************/

  public findBidoCounterReferencesByPnCode(input: BirePnDTOId): Observable<BidoCounterReferenceDTO[]> {
    return super.post<BirePnDTOId, BidoCounterReferenceDTO[]>(
      this.productStructureManagementApi.findBidoCounterReferencesByPnCode,
      input
    );
  }

  /**************************************************************************
   * User profile management api
   *************************************************************************/

  public findUser(input: string): Observable<BidoUserDTO> {
    return super.post<string, BidoUserDTO>(this.userProfileManagementApi.findUserByLogin, input);
  }

  public getUserSiteByLogin(input: string): Observable<BidtSiteDTO> {
    return super.post<string, BidtSiteDTO>(this.userProfileManagementApi.getUserSiteByLogin, input);
  }

  public getUserWarehouseByLogin(input: string): Observable<BidtWarehouseDTO> {
    return super.post<string, BidtWarehouseDTO>(this.userProfileManagementApi.getUserWarehouseByLogin, input);
  }

  /**************************************************************************
   * Bidt document api
   *************************************************************************/
  public findByProcurementRequestId(procurementReqquestId: number): Observable<BidtDocumentDTO[]> {
    return super.post<number, BidtDocumentDTO[]>(
      this.bidtDocumentApi.findByProcurementRequestId,
      procurementReqquestId
    );
  }

  public deleteByid(documentId: number): Observable<number> {
    return super.post<number, number>(this.bidtDocumentApi.deleteByid, documentId);
  }

  /**************************************************************************
   * Bidt procurement request api
   *************************************************************************/
  public saveDocuments(input: SaveProcurementRequestInput): Observable<void> {
    return super.post<SaveProcurementRequestInput, void>(
      this.bidtProcurementRequestApi.saveProcurementRequestDocuments,
      input
    );
  }

  public findBidoEquipmentsByPnAndSn(input: BidoEquipmentDTO): Observable<BidoEquipmentDTO[]> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO[]>(
      this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes,
      input
    );
  }

  public findBidoEquipmentByPnAndBatchNumber(input: BidoEquipmentDTO): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO>(
      this.fleetManagementApi.findBidoEquipmentByPnAndBatchNumber,
      input
    );
  }

  public getManufacturingBatchByEquipment(input: BidoEquipmentDTO): Observable<ReferenceBatchDTO> {
    return super.post<BidoEquipmentDTO, ReferenceBatchDTO>(
      this.assetManagementApi.getManufacturingBatchByEquipment,
      input
    );
  }
}
