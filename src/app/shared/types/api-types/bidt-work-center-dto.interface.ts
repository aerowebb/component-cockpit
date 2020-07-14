export interface BidtWorkCenterDTO {
  bidtSiteId?: number;
  workCenterCode?: string;
  workCenterName?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  id?: number;

  whType?: string;
  whAdress?: string;
  whZipCode?: string;
  whCountry?: string;
  whPhoneNumber?: string;
  bidtWarehouseId?: number;
}
