import { BidtPackageOperationDTO } from '../../api-types/bidt-package-operation-dto.interface';

export interface DfTypeOperationsByDfTypeInput {
  operations: BidtPackageOperationDTO[];
  bidtDfTypeDTOId: number;
}
