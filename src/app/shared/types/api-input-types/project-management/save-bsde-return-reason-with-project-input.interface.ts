import { BsdeReturnReasonDTO } from '../../api-types/bsde-return-reason-dto.interface';

export interface SaveBsdeReturnReasonWithProjectInput {
  bsdeReturnReasonDTOArr?: BsdeReturnReasonDTO[];
  projectId?: number;
}
