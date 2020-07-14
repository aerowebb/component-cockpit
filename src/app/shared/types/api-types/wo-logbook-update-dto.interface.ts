import { WoLogbookUpdateLineDTO } from './wo-logbook-update-line-dto.interface';

export interface WoLogbookUpdateDTO {
  woId?: number;
  projectId?: number;
  woCode?: string;
  woDescription?: string;
  woLogbookUpdateLineDTOs: WoLogbookUpdateLineDTO[];
  dateClosed?: Date;
  closedBy?: string;
  woControl?: string;
}
