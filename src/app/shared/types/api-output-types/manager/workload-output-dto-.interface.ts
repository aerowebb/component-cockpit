import { BidmWorkOrderDTOId } from '../../api-types/bidm-work-order-dto-id.interface';
import { BidtWarehouseDTO } from '../../api-types/bidt-warehouse-dto.interface';
import { ProcurementRequestAndIndicatorsOutputDTO } from '../product-structure-management/procurement-request-and-indicators-output-dto';

import { HoursByIndicatorsOutputDTO } from './hours-by-indicators-output-dto.interface';
import { HumanResourceOutputDTO } from './human-resource-output-dto.interface';
import { QualificationEmployeeOutputDTO } from './qualification-employee-output-dto.interface';
import { QuantityIndicatorOutputDTO } from './quantity-indicato-output-dto.interface';

export interface WorkloadOutputDTO {
  humanResourceOutputDTO: HumanResourceOutputDTO;
  worksOrdersHoursOutputDTO: HoursByIndicatorsOutputDTO;
  worksOrdersPartsAvailabilityOutputDTO: QuantityIndicatorOutputDTO;
  worksOrdersToolsAvailabilityOutputDTO: QuantityIndicatorOutputDTO;
  procurementRequestAndIndicatorsPartsList: ProcurementRequestAndIndicatorsOutputDTO[];
  procurementRequestAndIndicatorsToolsList: ProcurementRequestAndIndicatorsOutputDTO[];
  qualificationEmployeeOutputDTO: QualificationEmployeeOutputDTO[];
  woDisplayedList: BidmWorkOrderDTOId[];
  bidtWarehouse: BidtWarehouseDTO;
}
