import { BidoOperationDTO } from './bido-operation-dto.interface';

export interface FlightOperationOutputDTO {
  bidoOpearationDTO: BidoOperationDTO;
  startDate?: Date;
  endDate?: Date;
}
