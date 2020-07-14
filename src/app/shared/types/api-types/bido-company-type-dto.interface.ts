import { BidoCustomerDTO } from './bido-customer-dto.interface';
import { BidtCompanyDTO } from './bidt-company-dto.interface';


export interface BidoCompanyTypeDTO {
  companyTextMap?: Object;
  bidtCompanyData?: BidtCompanyDTO;
  bidoCustomerData?: BidoCustomerDTO;
}
