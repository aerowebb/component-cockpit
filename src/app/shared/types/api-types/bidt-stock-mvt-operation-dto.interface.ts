import { BidtStockMvtOperationIdDTO } from './bidt-stock-mvt-operation-id-dto.interface';

export interface BidtStockMvtOperationDTO extends BidtStockMvtOperationIdDTO {
  bidtStockMvt: string;

  bidtQualification?: string;
  smoCode?: string; // 50
  smoDesignation?: string; // 100
  smoStatus?: string; // 50
  bidtDfTypeOperationId: number;
  bidtStockMvtTypeOperationId: number;
}
