import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { PurchaseContractElementApi } from '../api/purchase-contract-element-api';
import { BidtPurchaseContractElementDTO } from '../dtos/bidt-purchase-contract-element-dto.interface';

@Injectable()
export class PurchaseContractElementService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly purchaseContractElementApiService: PurchaseContractElementApi
  ) {
    super(http, appConfigService);
  }

  public findElementsByItemId(itemId: string): Observable<BidtPurchaseContractElementDTO[]> {
    return super.post<string, BidtPurchaseContractElementDTO[]>(
      this.purchaseContractElementApiService.getElementsByItemId,
      itemId
    );
  }

  public calculatePrice(bidtPurchaseContractElementDTO: BidtPurchaseContractElementDTO): void {
    if (
      bidtPurchaseContractElementDTO &&
      bidtPurchaseContractElementDTO.pcePriceExclTax &&
      bidtPurchaseContractElementDTO.pceVat
    ) {
      const pciePriceExclTaxValue = parseFloat(bidtPurchaseContractElementDTO.pcePriceExclTax.toString());
      const pcieVatValue = parseFloat(bidtPurchaseContractElementDTO.pceVat.toString());
      const percentage = 100;
      const nbdecimal = 2;
      const result = (pciePriceExclTaxValue + (pciePriceExclTaxValue * pcieVatValue) / percentage).toString();
      const indexSep =
        result.indexOf('.') !== -1 ? result.indexOf('.') : result.indexOf(',') !== -1 ? result.indexOf(',') : undefined;
      if (!!indexSep) {
        bidtPurchaseContractElementDTO.pcePrice = parseFloat(result.substring(0, indexSep + nbdecimal + 1));
      } else {
        bidtPurchaseContractElementDTO.pcePrice = parseFloat(result);
      }
    }
  }
}
