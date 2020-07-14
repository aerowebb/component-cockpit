import { IndicatorsOutputDTO } from './indicators-output-dto.interface';

export interface QualificationEmployeeOutputDTO extends IndicatorsOutputDTO {
  qualificationTitle: string;
  nbHoursAvailability: number;
}
