import { BidtEmployeeDTO } from './bidt-employee-dto.interface';

export interface SearchEmployeeTableDTO extends BidtEmployeeDTO {
  bidtCompanyName?: string;
  bidtSiteName?: string;
}
