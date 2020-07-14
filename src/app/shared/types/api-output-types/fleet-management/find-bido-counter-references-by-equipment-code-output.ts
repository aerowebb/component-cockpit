import { BidoEquipmentCounterDTO } from '../../api-types/bido-equipment-counter-dto.interface';
import { LifeLimitDTO } from '../../api-types/life-limit-dto.interface';
import { PotentialAlertDTO } from '../../api-types/potential-alert-dto.interface';

export interface FindBidoCounterReferencesByEquipmentCodeOutput {
  cumulatedCounterValue?: string;
  aPotentialAlertData?: PotentialAlertDTO;
  remainingValue?: string;
  source?: string;
  maxMonthGap?: string;
  counterCode?: string;
  ratingCode?: string;
  bidoEquipmentCounterDto?: BidoEquipmentCounterDTO;
  ratingCounterValue?: string;
  counterDate?: Date;
  comment?: string;
  limitHasToBeUpdated?: boolean;
  referenceValue?: string;
  dateLimit?: Date;
  counterUnit?: string;
  readingDate?: Date;
  lifeLimitData?: LifeLimitDTO;
  familyCode?: string;
  ratingText?: string;
  dateText?: string;
}
