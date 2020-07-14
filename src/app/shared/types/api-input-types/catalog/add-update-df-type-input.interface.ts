import { BidtDfTypeDTO } from '../../api-types/bidt-df-type-dto.interface';
import { BidtDfTypeOperationDTO } from '../../api-types/bidt-df-type-operation-dto.interface';

export interface AddOrUpdateDfTypeInputDTO {
  dfType: BidtDfTypeDTO;
  dfTypeOperations?: BidtDfTypeOperationDTO[];
}
