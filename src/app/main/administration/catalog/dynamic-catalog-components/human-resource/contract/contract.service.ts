import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtContractApi } from '../../../../../../shared/api/bidt-contract.api';
import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BidtContractDTO } from '../../../../../../shared/types/api-types/bidt-contract-dto.interface';
import { SearchResultsDTO } from '../../../../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class ContractService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly bidtContractApi: BidtContractApi
  ) {
    super(http, appConfigService);
  }

  public findByCriteriaContractList(): Observable<SearchResultsDTO<BidtContractDTO>> {
    return super.post<void, SearchResultsDTO<BidtContractDTO>>(this.bidtContractApi.findByCriteriaContractList);
  }

  public deleteContract(contractId: Number[]): Observable<void> {
    return super.post<Number[], void>(this.bidtContractApi.deleteContract, contractId);
  }

  public saveCatalog(saveCatalogInput: SaveCatalogInput): Observable<void> {
    return super.post<SaveCatalogInput, void>(this.fleetManagementApi.saveCatalog, saveCatalogInput);
  }
}
