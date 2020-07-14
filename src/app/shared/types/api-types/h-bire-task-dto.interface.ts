export interface HBireTaskDTO {
  timestamp: string;
  action: string;
  taskCode?: string;
  taskVersion?: string;
  taskChapter?: string;
  taskSection?: string;
  taskSubject?: string;
  taskTask?: string;
  taskSubTask?: string;
  taskDesignation?: string;
  taskDescription?: string;
  taskStatus?: string;
  taskApplicabilityDate?: Date;
  taskApplicabilityCode?: string;
  repairCenterCode?: string;
  groupCode?: string;
  taskTypeCode?: string;
  overhaul?: number;
  inspectionPerEsm?: string;
  taskZone?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
}
