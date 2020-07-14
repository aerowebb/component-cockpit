export interface LineMaintenanceOperationDTO {
  id?: string;
  comment?: string;
  controlResult?: string;
  dmc?: string;
  isDoneByUser?: boolean;
  isFromPreviousFlight?: boolean;
  isSelected?: boolean;
  lastExecutionDate?: Date;
  lastExecutionUser?: string;
  operation?: string;
  operationDesignation?: string;
  operationFrequency?: string;
  operationKind?: string;
  operationStatus?: string;
  operationValidity?: Date;
  nextTerm?: string;
  wpNumber?: number;
  projectId?: string;

  notificationCode?: string;
  taskCode?: string;
  taskVersion?: string;
  taskKind?: string;
}
