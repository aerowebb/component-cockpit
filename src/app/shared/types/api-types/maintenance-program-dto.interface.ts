import { BireTaskDTOId } from './bire-task-dto-id.interface';

export interface MaintenanceProgramDTO {
  visitTaskPkList?: BireTaskDTOId[];
  untrackedVisitTaskPkList?: BireTaskDTOId[];
  untrackedTaskPkList?: BireTaskDTOId[];
  planCode?: string;
  planName?: string;
  planDescription?: string;
  planRevisionNumber?: string;
  planRevisionDate?: Date;
  planApprovalNumber?: string;
  planApprovalDate?: Date;
  planValidityEndDate?: Date;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
}
