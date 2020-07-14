import { BidoMeasureDTO } from '../../api-types/bido-measure-dto.interface';

export interface SaveBidoMeasureInputDTO {
  bidoMeasureDTO?: BidoMeasureDTO;
  interRatingValue?: boolean;
  allowInsertionBeforeExistingValue?: boolean;
  allowMeasureReadingSmallerThanPrevious?: boolean;
  allowMeasureReadingGreatherThanPreviousPlusXValue?: boolean;
  isCounter?: boolean;
  isOtherCounter?: boolean;
  isOtherCounterCode?: string;
  isOtherCounterValue?: string;
}
