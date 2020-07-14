import { BidtAbsenceDTO } from '../../api-types/bidt-absence-dto.interface';
import { BidtCategoryDTO } from '../../api-types/bidt-category-dto.interface';
import { BidtContractDTO } from '../../api-types/bidt-contract-dto.interface';
import { BidtDocumentDTO } from '../../api-types/bidt-document-dto.interface';
import { BidtEmployeeDTO } from '../../api-types/bidt-employee-dto.interface';
import { BidtEvaluationDTO } from '../../api-types/bidt-evaluation-dto.interface';
import { BidtExpenseDTO } from '../../api-types/bidt-expense-dto.interface';
import { BidtHourlyCostDTO } from '../../api-types/bidt-hourly-cost-dto.interface';
import { BidtLaborTemplateDTO } from '../../api-types/bidt-labor-template-dto.interface';
import { BidtLicenseDTO } from '../../api-types/bidt-license-dto.interface';
import { BidtMedicalVisitDTO } from '../../api-types/bidt-medical-visit-dto.interface';
import { BidtQualifEmployeeDTO } from '../../api-types/bidt-qualif-employee-dto.interface';
import { BidtSalaryDTO } from '../../api-types/bidt-salary-dto.interface';
import { BidtTrainingDTO } from '../../api-types/bidt-training-dto.interface';
import { BidtWarehouseDTO } from '../../api-types/bidt-warehouse-dto.interface';

export interface SaveEmployeesInput {
  bidtEmployeeDTO?: BidtEmployeeDTO;
  bidtSalaryDTO?: BidtSalaryDTO;
  bidContractDTO?: BidtContractDTO;
  bidtLaborTemplateDTO?: BidtLaborTemplateDTO;
  bidtLicenseDTO?: BidtLicenseDTO;
  bidtWarehouseDTO?: BidtWarehouseDTO;
  bidtCategoryDTO?: BidtCategoryDTO[];
  bidtTrainingDTO?: BidtTrainingDTO[];
  bidtEvaluationDTO?: BidtEvaluationDTO[];
  bidtMedicalVisitDTO?: BidtMedicalVisitDTO[];
  bidtAbsenceDTO?: BidtAbsenceDTO[];
  bidtHolidayDTO?: BidtAbsenceDTO[];
  bidtExpenseDTO?: BidtExpenseDTO[];
  bidtHourlyCostDTO?: BidtHourlyCostDTO[];
  bidtQualifEmployeeDTO?: BidtQualifEmployeeDTO[];
  bidtDocumentDTO?: BidtDocumentDTO[];
  superiorId?: number;
}
