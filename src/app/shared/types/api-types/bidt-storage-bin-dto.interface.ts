export interface BidtStorageBinDTO {
  bidtStorageBinTypeId?: number;
  bidtWarehouseId?: number;
  sbNumber?: string;
  sbSurface?: number;
  sbVolume?: number;
  sbDescription?: string;
  sbLocalisation?: string;
  sbCapacityMin?: number;
  sbCapacityMax?: number;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  id?: number;
  sbCategory?: string;
  bins?: BidtStorageBinDTO[];
}
