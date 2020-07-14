export interface BireTaskDTO {
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
  taskApplicabilityDateString?: string;
  taskApplicabilityCode?: string;
  repairCenterCode?: string;
  groupCode?: string;
  taskTypeCode?: string;
  overhaul?: boolean;
  inspectionPerEsm?: string;
  taskZone?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  sequenceNumber?: number;
  task?: string;
}
