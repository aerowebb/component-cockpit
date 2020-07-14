import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { BidtStockMvtDTO } from '../types/api-types/bidt-stock-mvt-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicationService {
  private readonly stockMvtSource: Subject<BidtStockMvtDTO>;
  public currentStockMvt$: Observable<BidtStockMvtDTO>;

  public constructor() {
    this.stockMvtSource = new Subject<BidtStockMvtDTO>();
    this.currentStockMvt$ = this.stockMvtSource.asObservable();
  }

  public changeStock(stock: BidtStockMvtDTO) {
    this.stockMvtSource.next(stock);
  }
}
