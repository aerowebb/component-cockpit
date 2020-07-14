import { BidoFlDTO } from './bido-fl-dto.interface';

export interface FlDTO {
  bidoFlData?: BidoFlDTO;
  level?: number;
  isLast?: boolean;
}
