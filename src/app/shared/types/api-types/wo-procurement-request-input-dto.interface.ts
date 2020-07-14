export interface WoProcurementRequestInputDTO {
  pnCode: string;
  quantity: number;
  criticality: string;
  criticalityReason?: string;
  procComment?: string;
  date?: Date;
  expirationDate?: Date;
  requestedPotential?: number;
  potentialUnit?: string;
  calendarPotential?: Date;
}
