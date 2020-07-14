import { BidtCompanyHolidayDTO } from './bidt-company-holiday-dto.interface';

export interface CompanyHolidaySaveDTO {
  bidtCompanyHolidayDTO?: BidtCompanyHolidayDTO;
  companyId?: number;
  bidtCompHolidayCompId?: number;
}
