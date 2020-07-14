import { BidtHourlyCostDTO } from '../../api-types/bidt-hourly-cost-dto.interface';

export interface BidtHourlyCostsOutputDTO {
  bitHourlyCostDTO?: BidtHourlyCostDTO;
  costText?: string;
  costType?: string;
}
