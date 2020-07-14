import { StaffPlanningViewByCompanyTableOutput } from './staff-planning-view-by-company-table-output.interface';
import { StaffPlanningViewBySiteEmployeeAvailabilityTableOutput } from './staff-planning-view-by-site-employee-availability-table-output.interface';
import { StaffPlanningViewBySiteQualificationAvailabilityTableOutput } from './staff-planning-view-by-site-qualification-availability-table-output.interface';

export interface StaffPlanningOutput {
  staffPlanningViewByCompanyTableOutput?: StaffPlanningViewByCompanyTableOutput[];
  staffPlanningViewBySiteEmployeeAvailabilityTableOutput?: StaffPlanningViewBySiteEmployeeAvailabilityTableOutput[];
// tslint:disable-next-line: max-line-length
  staffPlanningViewBySiteQualificationAvailabilityTableOutput?: StaffPlanningViewBySiteQualificationAvailabilityTableOutput[];
}
