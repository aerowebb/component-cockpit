export interface EnterpriseDefinitionOutputDTO {
  id?: number;
  code?: string;
  name?: string;
  level?: string;
  type?: string;
  siteId?: number;
  compDescription?: string;
  dataKeyId?: string;
  siteDescription?: string; // for frontend purpose only
}
