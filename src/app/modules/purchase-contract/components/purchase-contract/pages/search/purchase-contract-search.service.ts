import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ComponentConstants } from '../../../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { SerializationService } from '../../../../../../shared/services/serialization.service';
import { TabService } from '../../../../../../shared/services/tab.service';
import { PageComponentData } from '../../../../../../shared/types/page-component-data.interface';
import { PurchaseContractApi } from '../../../../api/purchase-contract.api';
import { BidtPurchaseContractDTOId } from '../../../../dtos/bidt-purchase-contract-dto-id.interface';

@Injectable()
export class PurchaseContractSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly purchaseContractApi: PurchaseContractApi,
    private readonly serializationService: SerializationService,
    private readonly tabService: TabService
  ) {
    super(http, appConfigService);
  }

  public openPurchaseContract(objectId: string | undefined): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.PCT_PURCHASE_CONTRACT_FORM,
      objectId: objectId ? this.serializationService.serialize({ id: objectId }) : undefined,
      openMode: objectId ? ComponentOpenMode.Read : ComponentOpenMode.Create
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public removeBidtPurchaseContract(bidoCustomerId: BidtPurchaseContractDTOId): Observable<boolean> {
    return super.post<BidtPurchaseContractDTOId, boolean>(this.purchaseContractApi.delete, bidoCustomerId);
  }
}
