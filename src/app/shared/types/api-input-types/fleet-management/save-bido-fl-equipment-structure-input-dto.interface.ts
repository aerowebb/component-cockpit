import { BidoFlEquipmentDTO } from '../../api-types/bido-fl-equipment-dto.interface';

export interface SaveBidoFlEquipmentStructureInput {
  topEquipmentCode?: string;
  bidoFlEquipmentDataList?: BidoFlEquipmentDTO[];
  applicationDate?: Date;
}
