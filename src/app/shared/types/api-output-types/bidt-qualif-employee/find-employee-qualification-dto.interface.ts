import { BidtQualifEmployeeDTO } from '../../api-types/bidt-qualif-employee-dto.interface';

export interface FindEmployeeQualificationDTO {
  bidtQualifEmployeeDTO?: BidtQualifEmployeeDTO;
  qualificationCode?: string;
  qualificationTitle?: string;
  qualificationType?: string;
}
