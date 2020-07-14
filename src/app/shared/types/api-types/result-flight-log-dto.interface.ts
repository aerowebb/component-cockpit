import { FlightDTO } from './flight-dto.interface';

export interface ResultFlightLogDTO {
  flight?: FlightDTO;
  result?: number;
  message?: string;
}
