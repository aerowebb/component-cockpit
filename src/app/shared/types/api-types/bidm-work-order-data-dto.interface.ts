import { BidmProjectDTO } from './bidm-project-dto.interface';
import { BidmWorkOrderDTO } from './bidm-work-order-dto.interface';
import { WorkOrderStatusDetailDTO } from './work-order-status-detail-dto.interface';

export interface BidmWorkOrderDataDTO {
  bidmWorkOrder: BidmWorkOrderDTO;
  assetRepresentation: string;
  woLinkType: string;
  taskTypeCode: string;
  statusPercent: string;
  statusCrititicy: string;
  bidmProjectData: BidmProjectDTO;
  // _bidmOperationDataList?: any[];
  bidmWorkOrderDataList?: BidmWorkOrderDataDTO[];
  // _bireOperationDataList?: any[];
  // _bidmQualificationDataList?: any[];
  // _componentDetailsList?: any[];
  // _sparePartsList?: any[];
  // _expandablePartsList?: any[];
  workOrderStatusDetail: WorkOrderStatusDetailDTO;
  qualificationNeeded: string;
  relatedItem: string;
  woTask?: string;
  woAssignedTo?: string;
  wpAircraftType?: string;
  woPerformedBy?: string;
  woCheckedBy?: string;
  totalDuration?: string;
  totalElapsed?: string;
  componentCockpitText?: string;
}
