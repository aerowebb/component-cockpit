export interface OperationLWO {
  id?: string;
  operation?: string;
  operationDesignation?: string;
  operationValidity?: Date;
  comment?: string;
  dmc?: string;
  isDone?: boolean;

  notificationCode?: string;
  taskCode?: string;
  taskVersion?: string;
  taskKind?: string;
}
