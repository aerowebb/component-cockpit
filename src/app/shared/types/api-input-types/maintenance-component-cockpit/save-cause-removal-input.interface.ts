import { BireReturnReasonDTO } from '../../api-types/bire-return-reason-dto.interface';

export interface SaveCauseRemovalInput {
  projectNumber?: number;
  returnReasonDataList?: BireReturnReasonDTO[] | undefined;
}
