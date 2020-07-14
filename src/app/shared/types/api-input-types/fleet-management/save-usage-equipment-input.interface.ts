import { BidoEquipmentUsageDTOId } from '../../api-types/bido-equipment-usage-dto-id.interface';
import { BidoEquipmentUsageDTO } from '../../api-types/bido-equipment-usage-dto.interface';

export interface SaveUsageEquipmentInput {
createBidoEquipmentUsageDTOList?: BidoEquipmentUsageDTO[];
updateBidoEquipmentUsageDTOList?: BidoEquipmentUsageDTO[];
removeBidoEquipmentUsageDTOList?: BidoEquipmentUsageDTOId[];
}
