import { BidoReplenishmentDTOId } from '../../api-types/bido-replenishment-dto-id.interface';

export interface UpdateReplenishmentAfterFlightQuantityFromAircraftInput {
  replenishmentDTOId: BidoReplenishmentDTOId;
  replenishmentAfterFlightQuantityFromAircraft: string;
}
