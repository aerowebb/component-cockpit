export interface ImportStatusDto {
  jobName?: string;
  fileName?: string;
  handled: number;
  total: number;
  progress: string;
  planCodeCharged?: string;
}
