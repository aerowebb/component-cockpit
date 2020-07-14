import { MeasurePropagationOptionsDTO } from '../../api-types/measure-propagation-options-dto.interface';

export interface MeasurePropagationReportInput {
  equipmentCode?: string;
  readingDate?: Date;
  familyCode?: string;
  ratingCode?: string;
  isDiff?: boolean;
  interRatingValue?: boolean;
  valuePerCounterCodeMap?: object;
  coeffPerCounterCodeMap?: object;
  options?: MeasurePropagationOptionsDTO;
  isSimulation?: boolean;
}
