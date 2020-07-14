import { BidoEquipmentUsageTableOutputDTO } from '../api-output-types/fleet-management/bido-equipment-usage-table-output-dto.interface';

import { UsageBargraphDto } from './usage-bargraph-dto.interface';

export interface UsageEquipmentDto {
  bidoEquipmentUsageTableOutputDTOs?: BidoEquipmentUsageTableOutputDTO[];
  lablesForBarGraphs?: number[];
  bargraphDtos?: UsageBargraphDto[];
  }
