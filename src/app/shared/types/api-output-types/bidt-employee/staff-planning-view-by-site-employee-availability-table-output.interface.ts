import { BidtLaborTemplateDTO } from '../../api-types/bidt-labor-template-dto.interface';
import { BidtLaborTemplateHoursDTO } from '../../api-types/bidt-labor-template-hours-dto.interface';

import { EmployeeAbsence } from './employee-absence.interface';

export interface StaffPlanningViewBySiteEmployeeAvailabilityTableOutput {
  employee?: string;
  datedata?: Object;
  employeeId?: number;
  hoursWeekDays?: string;
  hoursWeekend?: string;
  employeeNumber?: string;
  dateAbsences?: EmployeeAbsence[];
  qualificationsId?: number[];
  bidtLaborTemplateDTO?: BidtLaborTemplateDTO;
  listBidtLaborTemplateHoursDTO?: BidtLaborTemplateHoursDTO[];
}
