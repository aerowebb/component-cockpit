import { FlightUnitOfMeasureDTO } from './flight-unit-of-measure-dto.interface';

export interface FlightFuelDTO {
  id?: string;
  type?: string;
  value?: number;
  uom?: FlightUnitOfMeasureDTO;
}
