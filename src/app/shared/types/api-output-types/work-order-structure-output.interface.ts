import { WoLogbookUpdateLineDTO } from '../api-types/wo-logbook-update-line-dto.interface';

export interface WorkOrderStructureOutput {
  woId?: number;
  woCode: string;
  description?: string;
  control: string;
  status?: string;
  closedDate?: Date;
  closedBy?: string;
  children?: WorkOrderStructureOutput[];
  woLogbookUpdateLineDTOs: WoLogbookUpdateLineDTO[];
}
