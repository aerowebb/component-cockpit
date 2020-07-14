import { FlightCounterDTO } from './flight-counter-dto.interface';

export interface FlightMeasureDTO {
  id?: string;
  counter?: FlightCounterDTO;
  value?: number;
}
