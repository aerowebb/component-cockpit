import { BidtContractDTO } from './bidt-contract-dto.interface';
import { BidtEmployeeDTO } from './bidt-employee-dto.interface';
import { BidtLaborTemplateDTO } from './bidt-labor-template-dto.interface';
import { BidtLicenseDTO } from './bidt-license-dto.interface';
import { BidtSalaryDTO } from './bidt-salary-dto.interface';
import { BidtWarehouseDTO } from './bidt-warehouse-dto.interface';

export interface GetEmployeeFormDTO {
  bidtEmployeeDTO?: BidtEmployeeDTO;
  bidtSalaryDTO?: BidtSalaryDTO;
  bidtContractDTO?: BidtContractDTO;
  bidtLaborTemplateDTO?: BidtLaborTemplateDTO;
  bidtLicenseDTO?: BidtLicenseDTO;
  bidtSuperiorData?: BidtEmployeeDTO;
  bidtWarehouseDTO?: BidtWarehouseDTO;
}
