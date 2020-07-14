import { EmployeeAbsence } from './api-output-types/bidt-employee/employee-absence.interface';

export interface EmployeeAvailability {
  day: string;
  key?: string;
  listAbsences?: EmployeeAbsence[];
  listTrainings?: EmployeeAbsence[];
  listEvents?: EmployeeAbsence[];
  listJobs?: EmployeeAbsence[];
  listHolidays?: EmployeeAbsence[];
}
