import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { BidtDocumentDTO } from '../../../shared/types/api-types/bidt-document-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { PurchaseContractApi } from '../api/purchase-contract.api';
import { BidtPurchaseContractDTOId } from '../dtos/bidt-purchase-contract-dto-id.interface';
import { BidtPurchaseContractDTO } from '../dtos/bidt-purchase-contract-dto.interface';
import { BidtPurchaseContractPartnerDTO } from '../dtos/bidt-purchase-contract-partner-dto.interface';
import { FindBidtPurchaseContractsByCriteriaInput } from '../dtos/input/find-bidt-purchase-contracts-by-criteria-input.interface';
import { SaveBidtPurchaseContractInput } from '../dtos/input/save-bidt-purchase-contract-input.interface';

@Injectable()
export class PurchaseContractService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly purchaseContractApi: PurchaseContractApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Purchase contract api
   *************************************************************************/

  public findBidtPurchaseContract(
    bidtPurchaseContractId: BidtPurchaseContractDTOId
  ): Observable<BidtPurchaseContractDTO> {
    return super.post<string, BidtPurchaseContractDTO>(this.purchaseContractApi.getById, bidtPurchaseContractId.id);
  }

  public saveBidtPurchaseContract(
    purchaseContract: SaveBidtPurchaseContractInput
  ): Observable<BidtPurchaseContractDTO> {
    return super.post<SaveBidtPurchaseContractInput, BidtPurchaseContractDTO>(
      this.purchaseContractApi.addOrUpdate,
      purchaseContract
    );
  }

  public findBidtPurchaseContractByCriteria(
    purchaseContract: FindBidtPurchaseContractsByCriteriaInput
  ): Observable<SearchResultsDTO<BidtPurchaseContractDTO>> {
    return super.post<FindBidtPurchaseContractsByCriteriaInput, SearchResultsDTO<BidtPurchaseContractDTO>>(
      this.purchaseContractApi.findByCriteria,
      purchaseContract
    );
  }

  public findBidoPartnerByPurchaseContractId(
    bidtPurchaseContractId: BidtPurchaseContractDTOId
  ): Observable<BidtPurchaseContractPartnerDTO[]> {
    return super.post<string, BidtPurchaseContractPartnerDTO[]>(
      this.purchaseContractApi.getContractPartners,
      bidtPurchaseContractId.id
    );
  }

  public findSlicesByPurchaseContractId(
    purchaseContractId: BidtPurchaseContractDTOId
  ): Observable<BidtPurchaseContractDTO[]> {
    return super.post<string, BidtPurchaseContractDTO[]>(
      this.purchaseContractApi.getContractSlices,
      purchaseContractId.id
    );
  }

  public findBidtDocumentsByPurchaseContractId(
    purchaseContractId: BidtPurchaseContractDTOId
  ): Observable<BidtDocumentDTO[]> {
    return super.post<string, BidtDocumentDTO[]>(this.purchaseContractApi.getContractDocuments, purchaseContractId.id);
  }
}
