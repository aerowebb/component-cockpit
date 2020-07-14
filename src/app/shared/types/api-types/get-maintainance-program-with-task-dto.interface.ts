export interface GetMaintainanceProgramWithTaskDTO {
  programName?: string;
  reference?: string;
  periodicity?: number;
  programCode?: string;
  programDesignation?: string;
  programRevisionNumber?: string;
  planCode: string;
  statusState: string;
}
