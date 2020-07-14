import { BsdeProjectDTO } from '../../api-types/bsde-project-dto.interface';

export interface ProjectSearchOutputDTO {
  projectNumber?: string;
  projectName?: string;
  pn?: string;
  sn?: string;
  startDate?: Date;
  endDate?: Date;
  mroCenter?: string;
  customer?: string;
  currentStatus?: string;
  lastUpdated?: Date;
  lastUpdatedBy?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  bsdeProjectDTO?: BsdeProjectDTO;
}
