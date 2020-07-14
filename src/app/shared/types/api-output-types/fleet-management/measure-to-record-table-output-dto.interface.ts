import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface MeasureToRecordTableOutput {
  measureText?: string;
  measureCode?: string;
  measureUnit?: string;
  measureValue?: number;
  measureValueCoeff?: number;
  measureComments?: string;
  propagate?: boolean;
  isMeasureOnlyForEngine?: boolean;
  engineData?: BidoEquipmentDTO;
}
