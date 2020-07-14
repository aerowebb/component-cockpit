import { BidoMeasureDTO } from '../../api-types/bido-measure-dto.interface';

export interface FindAllBidoMeasureByFlightForFlightOutput {
  bidoMeasureDTO?: BidoMeasureDTO;
  delta?: string;
  deltaAlt?: string;
  state?: string;
}
