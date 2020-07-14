import { BireReturnReasonDTO } from '../../api-types/bire-return-reason-dto.interface';

export interface ManageCauseRemovalOutputDTO {
  bireReturnReasonDTO?: BireReturnReasonDTO;
  causeTypeValue?: string;
  isSelectionReadOnly?: boolean;
  isReturnReasonSelected?: boolean;
}
