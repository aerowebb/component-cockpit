export interface CreateStockMovementInput {
  warehouseId?: number;
  storageBinId?: number;
  valuationGroupId?: number;
  stockTypeId?: number;
  mvtDate: Date;
  quantity: number;
  assetPn: string | undefined;
  assetSn: string | undefined;
  movementWay?: string;
  mvtStatus?: string;
}
