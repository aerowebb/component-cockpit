import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { StandardImportPsApi } from '../../../../shared/api/standard-import-ps-api';
import { StandardImportApi } from '../../../../shared/api/standard-import.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { ImportAttributeInput } from '../../../../shared/types/api-input-types/administration-attributes/import-attribute-bido-input.interface';
import { ImportAttributeValuesBireInput } from '../../../../shared/types/api-input-types/administration-attributes/import-attribute-value-bire-input-interface';
import { BidoAttributeDTOId } from '../../../../shared/types/api-types/bido-attribute-dto-id.interface';
import { BidoAttributeDTO } from '../../../../shared/types/api-types/bido-attribute-dto.interface';
import { BireAttributeDTOId } from '../../../../shared/types/api-types/bire-attribute-dto-id.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { ReportDTO } from '../../../../shared/types/api-types/report-dto.interface';


@Injectable()
export class AttributesFormService extends AbstractAwHttpService {

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly standardImportPsApi : StandardImportPsApi,
    private readonly standardImportApi : StandardImportApi
  ) {
    super(http, appConfigService);
  }

  public saveFormEnginerringAttributes(category : BireAttributeDTO): Observable<BireAttributeDTOId> {
   return super.post<BireAttributeDTO, BireAttributeDTOId >(this.productStructureManagementApi.
    saveBireAttribute, category);
}
  public saveFormfleetAttributes(category : BidoAttributeDTO): Observable<BidoAttributeDTOId> {
  return super.post<BidoAttributeDTO, BidoAttributeDTOId >(this.fleetManagementApi.
    saveBidoAttribute, category);
}


  public getEnginerringAttribiuteData(selectedAttribute : BireAttributeDTOId): Observable<BireAttributeDTO> {
  return super.post<BireAttributeDTOId, BireAttributeDTO >(this.productStructureManagementApi.
    findBireAttribute, selectedAttribute);
}
  public getFleetAttribiuteData(selectedAttribute : BidoAttributeDTOId): Observable<BidoAttributeDTO> {
  return super.post<BidoAttributeDTOId, BidoAttributeDTO >(this.fleetManagementApi.
    findBidoAttribute, selectedAttribute);
}
  public getEnginerringImportTemplate(): Observable<Uint8Array> {
    return super.post<void, Uint8Array>(this.standardImportPsApi.getImportAttributeValuesBireXLS);
  }
  public getFleetImportTemplate() : Observable<Uint8Array> {
  return super.post<void, Uint8Array>(this.standardImportApi.getImportAttributeValuesBidoXLS);
}

  public importEnginerringAttributeValue(file : ImportAttributeValuesBireInput): Observable<ReportDTO> {
  return super.post<ImportAttributeValuesBireInput, ReportDTO>
  (this.standardImportPsApi.importAttributeValuesBireFromExcel, file);
}
  public importFleetAttributeValue(file : ImportAttributeInput): Observable<ReportDTO> {
  return super.post<ImportAttributeInput, ReportDTO>
  (this.standardImportApi.importattributevaluesfromexcel, file);
}

}
