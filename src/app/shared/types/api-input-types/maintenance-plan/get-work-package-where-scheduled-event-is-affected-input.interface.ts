import { BsdeScheduledEventDTO } from '../../api-types/bsde-scheduled-event-dto.interface';

export interface GetWorkPackageWhereScheduledEventIsAffectedInput {
  maintenanceForecastingProjectId: string;
  event: BsdeScheduledEventDTO;
}
