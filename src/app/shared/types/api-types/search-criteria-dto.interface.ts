export interface SearchCriteriaDTO {
  contextId?: string | null;
  preferenceId?: string;
  userId?: string;
  description?: string;
  values?: string;
  public?: boolean;
  creator?: boolean;
  favorite?: boolean;
}
