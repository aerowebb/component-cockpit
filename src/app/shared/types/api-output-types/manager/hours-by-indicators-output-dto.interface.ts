import { IndicatorsOutputDTO } from './indicators-output-dto.interface';

export interface HoursByIndicatorsOutputDTO extends IndicatorsOutputDTO {
  hoursOk: number;
  hoursNOk: number;
  hoursWarning: number;
}
