import { BidtEmployeeDTO } from '../../api-types/bidt-employee-dto.interface';

export interface FindEmployeeBySearchCriteriaInput {
  bidtEmployeeDTO: BidtEmployeeDTO;
  companyId?: number;
}
