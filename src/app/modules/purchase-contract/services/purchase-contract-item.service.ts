import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';

import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { PurchaseContractItemApi } from '../api/purchase-contract-item.api';

@Injectable()
export class PurchaseContractItemService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly purchaseContractItemApi: PurchaseContractItemApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Purchase contract api
   *************************************************************************/

  public getContractSliceItems(purchaseContractSliceId: string): Observable<TreeNode[]> {
    return super.post<string, TreeNode[]>(this.purchaseContractItemApi.getContractSliceItems, purchaseContractSliceId);
  }
}
