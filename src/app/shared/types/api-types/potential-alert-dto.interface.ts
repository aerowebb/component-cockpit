import { BidoRatingDTO } from './bido-rating-dto.interface';

export interface PotentialAlertDTO {
  equipmentCode?: string;
  counterCode?: string;
  unitCode?: string;
  potentialAlertLevelInt?: number;
  potentialAlertLevel?: string;
  preferredRating?: BidoRatingDTO;
  minRemainPercent?: number;
  residualPotentialInPercent?: number;
  limitsPerRating?: MapConstructor;
  equipmentRepresentation?: string;
  alertTooltip?: string;
  monthGapToolTip?: string;
}
