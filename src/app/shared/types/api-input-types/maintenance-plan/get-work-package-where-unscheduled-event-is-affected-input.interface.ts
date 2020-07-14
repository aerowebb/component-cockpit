import { BsdeEventDTO } from '../../api-types/bsde-event-dto.interface';

export interface GetWorkPackageWhereUnscheduledEventIsAffectedInput {
  maintenanceForecastingProjectId: string;
  event: BsdeEventDTO;
}
