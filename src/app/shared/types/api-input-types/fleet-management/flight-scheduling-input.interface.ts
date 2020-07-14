import { BidoFleetDTOId } from '../../api-types/bido-fleet-dto-id.interface';

export interface FlightSchedulingInput {
  bidoFleetDTOId: BidoFleetDTOId;
  startDate: Date;
  endDate?: Date;
  timeZone?: string;
}
