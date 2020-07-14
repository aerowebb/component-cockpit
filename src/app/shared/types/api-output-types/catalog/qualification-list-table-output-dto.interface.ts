import { BidtQualificationDTO } from '../../api-types/bidt-qualification-dto.interface';

export interface QualificationListTableOutputDTO {
  bidtQualificationDTO: BidtQualificationDTO;
  averageHourlyRateValue?: string;
}
