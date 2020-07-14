import { BidoEquipmentCounterDTO } from './bido-equipment-counter-dto.interface';
import { BirePnMeasureDTO } from './bire-pn-measure-dto.interface';
import { BireVersionMeasureDTO } from './bire-version-measure-dto.interface';

export interface LifeLimitDTO {
  referenceValue?: string;
  dateLimit?: Date;
  source?: number;
  equipmentCounterData?: BidoEquipmentCounterDTO;
  pnMeasureData?: BirePnMeasureDTO;
  versionMeasureData?: BireVersionMeasureDTO;
}
