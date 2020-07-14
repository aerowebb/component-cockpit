export interface EnterpriseDefinitionElementDTO {
  id: number;
  code?: string;
  name?: string;
  type?: string;
  isCompany: boolean;
  isSite: boolean;
  isWarehouse: boolean;
  isWorkshop: boolean;
}
