import { LicenseReportDTO } from '../../../../shared/api/license-report-dto.interface';

export interface AWLicenseReportCustomDTO {
  licenseReportDTO?: LicenseReportDTO;
  alertIcon?: string;
  licensingReport?: string;
  reportException?: string;
}
