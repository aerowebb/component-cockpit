import { MeasureProgressUIDTO } from './measure-progress-ui-dto.interface';

export interface MeasureProgressOutputDTO {
  measureToCancel: MeasureProgressUIDTO[];
  measureToCreate: MeasureProgressUIDTO[];
}
