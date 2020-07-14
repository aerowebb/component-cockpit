import { DeferredDefectEventDTO } from '../../api-types/deferred-defect-event-dto.interface';

export interface FindDefectEventsByEquipmentCodeOutput {
  deferredDefectEventDTO: DeferredDefectEventDTO;
  defectDescription: string;
  isDeferred: Boolean;
  dDDelayCategory: string;
  dDAuthorizedDelayValue: string;
  dDAuthorizedDelayUnit: string;
  defectLastAuthor: string;
  defectCALastAuthor: string;
  deferralDelay: string;
  deferralLastAuthor: string;
  defectCADescription: string;
  defectLogNumber: string;
  defectDetectionContext: string;
}

