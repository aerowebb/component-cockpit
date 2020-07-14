import { BidtQualificationDTO } from '../../api-types/bidt-qualification-dto.interface';
import { LabelValue } from '../../label-value.interface';

export interface QualificationTitleListDTO {
  bidtQualificationData: BidtQualificationDTO;
  labelValueList: LabelValue<string>;
}
