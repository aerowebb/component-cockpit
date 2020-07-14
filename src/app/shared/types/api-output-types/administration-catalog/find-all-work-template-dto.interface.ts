import { BidtLaborTemplateDTO } from '../../api-types/bidt-labor-template-dto.interface';
import { BidtLaborTemplateHoursDTO } from '../../api-types/bidt-labor-template-hours-dto.interface';

export interface FindAllWorkTemplateDTO {
  bidtLaborTemplateDTO?: BidtLaborTemplateDTO;
  bidtLaborTemplateHoursDTO?: BidtLaborTemplateHoursDTO[];
}
