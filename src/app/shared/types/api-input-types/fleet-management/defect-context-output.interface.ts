import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTO } from '../../api-types/bidm-work-order-dto.interface';

export interface DefectContextOutput {
  defectOriginWorkPackageData?: BidmProjectDTO;
  defectOriginWorkOrderData?: BidmWorkOrderDTO;
  defectDetectionContext?: string;
  defectDetectionContextVisibility?: boolean;
  defectWPDescription?: string;
  defectWPDescriptionVisibility?: boolean;
  defectWODescription?: string;
  defectWODescriptionVisibility?: boolean;
  defectCAWPDescription?: string;
  defectCAWPDescriptionVisibility?: boolean;
  defectCAWODescription?: string;
  defectCAWODescriptionVisibility?: boolean;
}
