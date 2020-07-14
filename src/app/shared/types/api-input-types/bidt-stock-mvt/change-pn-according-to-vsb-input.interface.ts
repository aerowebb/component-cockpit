import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface ChangePnAccordingToVsbInput {
  equipment: BidoEquipmentDTO;
  materialCode: string;
  purchaseRequestCode: string;
  purchaseRequestId: number;
  stockMvtDate: Date;
}
