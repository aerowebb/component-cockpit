import { BireTaskDTOId } from '../../../../../../generated_files/id/bire-task-dto-id.interface';
import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTO } from '../../api-types/bidm-work-order-dto.interface';

export interface CreateOrUpdateDefectTargetWorkOrderInput {
  bireTaskDTOId: BireTaskDTOId;
  defectOriginWorkPackageData: BidmProjectDTO;
  defectOriginWorkOrderData: BidmWorkOrderDTO;
  woSource: string;
  correctiveActionDescription?: string;
  defectProposedTask: string;
}
