import { BidmWorkOrderDTO } from '../../api-types/bidm-work-order-dto.interface';

export interface EmployeeWorkOutputDTO {
  origin?: string;
  type?: string;
  description?: string;
  relatedItem?: string;
  openingDate?: Date;
  closingDate?: Date;
  treeNodeText?: string;
  treeNodeTooltip?: string;
  status?: string;
  originText?: string;
  statusText?: string;
  projectNumber?: string;
  projectAsset?: string;
  totalElapsed?: string;
  qualification?: string;
  isRelatedItemEnabled?: boolean;
  bidmWorkOrderData?: BidmWorkOrderDTO;
}
