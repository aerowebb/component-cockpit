import { DeferredDefectEventDTO } from '../../api-types/deferred-defect-event-dto.interface';

export interface GetWorkPackageWhereDefectIsAffectedInput {
  maintenanceForecastingProjectId: string;
  defect: DeferredDefectEventDTO;
}
