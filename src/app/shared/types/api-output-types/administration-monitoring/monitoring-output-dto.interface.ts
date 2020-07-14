import { Log4jConfigurationTextOutput } from './log4j-configuration-text-output-dto.interface';

export interface MonitoringOutput {
  creationDate?: Date;
  architecturalType?: string;
  dbUrl?: string;
  dbUser?: string;
  serviceReport?: string;
  libraryReport?: string;
  jobMonitoring?: string;
  log4jConfigurationList?: Log4jConfigurationTextOutput[];
}
