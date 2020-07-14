export interface BidoReplenishmentDTO {
  equipmentCode?: string;
  replenishmentId?: string;
  replenishmentType?: string;
  quantityUnit?: string;
  afterFlightQtyFromAc?: string;
  initialStatusQty?: string;
  beforeFlightQty?: string;
  afterFlightQty?: string;
  endStatusQty?: string;
  oilConsumptionCalculatedQty?: string;
  oilConsumptionReinitDate?: number;
}
